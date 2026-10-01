# T04-migrations · Изменения схемы: миграции, совместимость, откат и оценки

[Топик T04](../modules/T04.md). Сгенерировано из data/*.mjs.

Предпосылки: [T04-performance](T04-performance.md), [T03-api](T03-api.md).

## Цели контроля

- Строить условия, последовательность и вопросы о миграции
- Объяснять совместимость версий и изменение данных
- Различать откат кода, схемы и восстановление данных
- Сообщать зависимости, оценки и обязательства
- Читать план перехода и проверять основания
- Слышать поправки, границы проверки и согласие
- Писать полный migration review и отдельную редакцию
- Уточнять риски и договариваться о следующем шаге

## Механизм

### О чём именно сообщаем изменение

Migration — переход между состояниями системы, а не обязательно одна SQL-команда. Schema описывает структуру; stored representation — форму хранимых значений; application version — поведение читателей и писателей. The schema has changed не говорит, что все записи перенесены и каждый клиент обновлён. В предложении назови объект: We added a nullable column, We copied existing values, We switched the reader. Добавление поля, заполнение старых строк и включение нового writer различаются. Слово deployed само по себе не доказывает завершение всех этих действий. Учебные кейсы вымышлены: здесь тренируем чтение и обсуждение технических решений, не выполняем миграции реальных баз.

### Совместимость имеет направление

The new reader accepts the old format: подлежащее new reader, объект old format. Обратное The old reader accepts the new format из него не следует. Backward compatibility обычно обсуждает сохранение работы прежних потребителей при изменениях, но всегда уточняй границу: API, library, storage, protocol или конкретная связка. Для матрицы нужны как минимум app version, schema/data version и operation. В Alder a24/S1 start failed, a23/S2 selected reads passed; это не все ячейки матрицы. Unknown не превращается ни в pass, ни в fail. AIP-180 — ориентир для контрактов Google API, не обещание совместимости любого неизвестного клиента.

### Добавить поле, изменить constraint, удалить поле

Add, rename, remove, widen, narrow описывают разные изменения. Add a nullable field не равно add a required field: второе может отвергать прежние допустимые записи или запросы. Изменение default может сохранять синтаксис, но менять смысл. Deprecated означает объявленный статус устаревания по политике проекта, а removed — фактическое отсутствие. Уточни поддержку и условие удаления: Which consumers still require this field? Не делай универсального вывода «любое добавление безопасно»: strict readers, generated code и значения enum могут иметь ограничения. Конкретный кейс обязан назвать нужные контракты, а ученик — сохранить их при пересказе.

### Расширение, переход и последующее удаление

В учебном поэтапном переходе сначала можно сохранить старую структуру и добавить новую, затем согласовать поведение readers/writers и перенести данные, проверить критерии и только потом обсуждать удаление. Это полезная схема рассуждения, не универсальная команда для любой СУБД. Until и before объясняют зависимость, не просто соседние даты: Keep the old field until supported consumers no longer require it. Нужны реальные свидетельства, а не слово done. В Alder S2 сохраняет display_name; S3 лишь proposal. GitLab даёт свои платформенные правила удаления колонок; нельзя переносить число releases или детали Rails на вымышленный продукт без условий.

### Backfill и обновления во время перехода

Backfill заполняет новое представление для существующих записей. The backfill has copied 1,000 records сообщает выполненную часть, а не завершение проекта. В Alder ещё 200 public_name=null; это не data loss. При отсутствии параллельных записей проверен только такой режим. Если old writer продолжает писать одну колонку после копирования, новое поле может стать устаревшим. Важно событие и порядок: After a23 updated display_name, a24 read public_name. Re-running a backfill — предложение, требующее правил, а не доказанное исправление: гонки, повторы и частичные результаты зависят от реализации. Не придумывай, что unknown records уже перенесены.

### Fallback, dual writes и источник актуального значения

Fallback — запасной путь при заданном условии. В Alder read public_name if not null, otherwise display_name. Старое непустое значение не null, поэтому fallback не спасает этот путь. Dual writes означает запись в оба представления, но слово само по себе не обещает atomicity; здесь атомарность явно задана только для acknowledged a24 updates. Старый a23 этого контракта не получил. The new application writes both fields не значит Both applications write both fields. Чтобы объяснить несовпадение, сохрани направление записи и приоритет чтения. В inspected row новая display_name осталась, следовательно обнаружена stale read, не подтверждённое удаление данных.

### Rollback, restore и replay — три разных утверждения

Roll back the application — вернуть версию приложения; schema downgrade — изменить структуру обратно; restore a backup — восстановить сохранённый снимок; replay later writes — воспроизвести изменения после снимка. Ни один термин автоматически не включает остальные. We rolled back to a23 without changing S2 содержит важное without + -ing. Два успешных чтения — ограниченное свидетельство, не проверка всех write paths. Backup at 09:00 не содержит автоматически четырнадцать более поздних записей; для них в Alder replay не проверен. Нельзя называть unknown recovery установленной потерей, но нельзя обещать восстановление. В этой практике никаких реальных destructive commands нет.

### Граница обратимости и условие остановки

Если преобразование удаляет информацию, обратное действие может не восстановить исходник. May discard — возможность; has discarded — установленное событие. Не объявляй всякую смену типа необратимой: нужны конкретные значения и правила. Forward fix — новое исправление вперёд вместо возврата; это тоже предложение с рисками, не автоматическая гарантия. Stop progression означает не переходить к следующей фазе при условии, но не тождественно shut down service или run rollback. В Alder mismatch уже известен; согласованное условие остановки выполнено. Кто вправе принимать дальнейшее решение и какие данные сохранять, нужно уточнять отдельно.

### Времена и пассив показывают состояние работы

The column was added yesterday — завершённое событие с прошлым временем. The column has been added — нынешний результат без finished yesterday; has been + V3 — Present Perfect passive. The data is being copied — процесс, а не completion. Data допускает разное согласование по стилю, поэтому в однозначных заданиях используем records или column. The records have been copied: plural have. Has the mapping been approved? — вспомогательный has перед subject. The mapping has not been approved — отрицание. The proposal would remove the field показывает предполагаемый эффект, не фактическое удаление. Finished, approved, deployed и verified нельзя подменять друг другом.

### Before, after, until и by the time

Before we switch the writer, we will check the readers: в обычном будущем придаточном времени Present, не will switch. Until the checks finish / have finished подчёркивает границу; Present Perfect выделяет завершённость к ней. By the time we remove the field, we will have checked the consumers — Future Perfect в главной части для действия, завершённого к будущему моменту. Такая грамматика не превращает план в уже полученное evidence. Before removing требует понятного исполнителя: Before removing the field, we must check consumers. Если действующие лица разные, полная clause безопаснее для ясности. By Friday — срок, until Friday — продолжение до момента; это не синонимы.

### If, only if, unless и условия пересмотра

If access is available, we can start the rehearsal — реальное условие с Present. Only if access is available задаёт необходимое условие, не обещает, что его одного достаточно. Unless the mapping changes обычно равно if the mapping does not change; избегай случайного двойного отрицания. Even if the backfill finishes, old writers may still create divergence: уступка сохраняет проблему при благоприятном условии. If we removed the field now, the old reader would fail — гипотетическая связка Past + would по заданному контракту. Recommend keeping и propose checking — -ing в этих моделях. Не путай will update you с will finish the migration.

### Оценка трудозатрат, длительность и срок

Effort — объём труда; elapsed time — прошедшее календарное время; target — желаемая цель; deadline/commitment — явно согласованная граница или обещание. Three to five person-days не говорит, в какой день будет готов релиз: нужны start, staffing, зависимости, review и ожидание. Два человека не обязательно делят длительность пополам: часть шагов последовательна, возможны coordination costs. Не вычисляй дату из диапазона без расписания. We estimate… assuming…; The range includes… and excludes…; We will revise it if… сохраняют основание. Диапазон не статистический confidence interval, если метод не задан. Оценки в кейсе не задают время прохождения подтемы.

### Зависимость и ограниченное обязательство

Depend on, be blocked by, be subject to задают разные отношения: The estimate depends on the mapping; The rehearsal is blocked by missing access; The target is subject to review. Существующая зависимость не означает, что вся работа остановилась: можно review wording без test access. Mina agreed to review the mapping — agreed to + infinitive; she agreed on the mapping означало бы договорённость о самом соответствии. Sol offered to ask не равно Sol promised to provide. I can review X, but cannot own Y — допустимое ограничение роли. Итог обсуждения должен включать реальные действия, owners и сроки только там, где они действительно согласованы.

### Уточнение, отрицание и точный пересказ

Which readers remain supported? — прямой вопрос к подлежащему; Could you clarify which readers remain supported? сохраняет порядок. Для другого типа: Which field does a23 update? → Could you clarify which field a23 updates? Нейтральный embedded question не requires does update. Not all records were mapped означает не все; no records were mapped — ни одной. Has not been tested не доказывает неуспех, а failed this check не разрешает назвать всё unknown. Read-back фиксирует понимание: Let me check that I understood… Партнёр может подтвердить точность summary, не одобряя предложенный rollout. Не выдумывай согласие из отсутствия возражений.

### Полное письмо и содержательная переработка

Migration review связывает цель, текущие и предложенные состояния, поддерживаемые сочетания, результаты rehearsal, recovery boundary, условия следующего шага и estimate. Шесть полных моделей Alder доступны до ввода; самостоятельный Maple меняет саму задачу: составные части имени нельзя угадать из строки, а old-reader failure связан с новыми записями. Напиши 350–450 слов связного текста, затем получи реальный отзыв с цитатами и сохрани полную отдельную редакцию. Список «поправил слова» не новая версия документа. Сохранение original позволяет проверить развитие, а не подменить исходное умение вычитанным образцом. Если отзыва ещё нет, feedback/revision pending.

### Слушание, взаимодействие и понятность речи

Migration /maɪˈɡreɪʃən/, schema /ˈskiːmə/, constraint /kənˈstreɪnt/, rollback /ˈrəʊlbæk/ — UK-ориентиры, нормативные US-варианты допустимы. Различай thirteen/thirty, nine/ninety, days/person-days. В Cedar услышишь поправку количества, самопоправку длительности и сужение обещания. Сначала слушай без текста, потом фиксируй первую версию, исправленную и scope. Для interaction нужен настоящий партнёр с неизвестным вопросом и ответом, отказом или ограничением; чтение обеих известных ролей не заменяет диалог. Произношение и oral fluency оценивают по звуку, не транскрипту или ASR similarity; при доступном тексте listening text-supported.

### Закрепление и отдельное подтверждение освоения

Повторяй условия, формы статуса, зависимости и границы evidence на новых проектах. Два варианта контроля имеют свои контракты: нельзя переносить на них Alder null fallback или Cedar numeric mapping. После ручного разбора выбери 2–3 приоритетных типа ошибок, вернись к адресным упражнениям, а через семь дней выполни новый перенос с реальной датой. Заполнение и отправка дают прогресс работы, не качество письма/речи. Эта публикация наполняет третью заявленную линию T04; статус expanded не означает, что весь технический английский исчерпан. T05–T06 и сквозной аудит остаются впереди. Время занятия не уменьшает объём материала, незавершённое продолжается позже.

## Примеры с разбором

- **We are migrating from one format to another.** — Мы переходим с одного формата на другой. From/to — направление.
- **Replace display_name with public_name.** — Замени display_name на public_name. Replace A with B.
- **The column has been added.** — Колонка добавлена. Has been + V3, результат.
- **The records are being copied.** — Записи сейчас копируются. Процесс не completion.
- **The backfill is not complete yet.** — Backfill ещё не завершён. Not…yet.
- **Both columns remain present.** — Обе колонки сохраняются. Both + plural.
- **Only the new application writes both fields.** — Только новое приложение пишет оба поля. Область only.
- **The old writer still updates display_name.** — Старый writer всё ещё обновляет display_name. Still — продолжающееся поведение.
- **If public_name is null, the reader uses display_name.** — Если public_name null, reader использует display_name. Условие fallback.
- **An older non-null value does not trigger that fallback.** — Старое непустое значение не запускает этот fallback. Не всякое устаревание — null.
- **One thousand of twelve hundred records were copied.** — Скопирована тысяча из тысячи двухсот записей. Знаменатель не потерян.
- **No concurrent writes occurred during this run.** — Во время этого запуска не было параллельных записей. Scope наблюдения.
- **Four checks passed, but one showed a stale read.** — Четыре проверки прошли, одна показала устаревшее чтение. Один failure не исчезает.
- **The newer value was still stored.** — Более новое значение всё ещё хранилось. Не заявляем data loss.
- **This reader supports the old format.** — Этот reader поддерживает старый формат. Направленная связь.
- **The reverse has not been established.** — Обратное не установлено. Не логическая симметрия.
- **The old field is deprecated, not removed.** — Старое поле объявлено устаревшим, не удалено. Разные статусы.
- **The proposed constraint would reject null values.** — Предложенное ограничение отвергало бы null. Would — эффект proposal.
- **Keep both fields until the checks have finished.** — Сохраняй оба поля до завершения проверок. Until + Present Perfect.
- **Before we switch the writer, we will review the evidence.** — До переключения writer мы рассмотрим evidence. Present после before.
- **By the time we remove it, we will have checked the consumers.** — К моменту удаления мы проверим потребителей. Future Perfect в главной части.
- **Even if copying finishes, old writes may still diverge.** — Даже если копирование завершится, старые записи могут расходиться. Even if не снимает проблему.
- **We can proceed only if the agreed conditions are met.** — Мы можем продолжить только при выполнении согласованных условий. Необходимое условие.
- **We will revise the estimate unless the scope stays unchanged.** — Мы пересмотрим оценку, если scope не останется прежним. Unless = if not в этом контексте.
- **The application was rolled back without changing the schema.** — Приложение вернули назад без изменения схемы. После without требуется форма -ing, не базовая форма.
- **The backup contains the earlier snapshot.** — Backup содержит более ранний снимок. Не последующие изменения.
- **Replay of later writes has not been tested.** — Replay более поздних записей не проверен. Unknown, не доказанный failure.
- **Two successful reads do not prove safety for every path.** — Два успешных чтения не доказывают безопасность всех путей. Ограничение вывода.
- **The mismatch stops progression to the next phase.** — Несовпадение останавливает переход к следующей фазе. Не приказ удалить или откатить.
- **We estimate three to five person-days.** — Оценка — от трёх до пяти человеко-дней. Effort, не дата.
- **That assumes an agreed mapping.** — Это предполагает согласованное соответствие. Условие оценки.
- **Review and waiting time are excluded.** — Review и ожидание исключены. Scope должен быть явным.
- **Friday is a target, not a commitment.** — Пятница — цель, не обязательство. Статус срока.
- **The rehearsal depends on environment access.** — Rehearsal зависит от доступа к среде. Depend on.
- **Could you clarify which field a23 updates?** — Уточни, какое поле обновляет a23. Embedded updates, без инверсии.
- **Mina agreed to review the mapping.** — Mina согласилась проверить mapping. Agree to do.
- **Sol offered to ask about access.** — Sol предложил спросить о доступе. Не пообещал выдать его.
- **We have put off the next phase.** — Мы отложили следующую фазу. Put off — целостный смысл.
- **We propose phasing out the old writer.** — Мы предлагаем постепенно вывести старый writer. Propose + -ing.
- **Let me read back the agreed scope.** — Позволь повторить согласованный объём. Let + object + base.

## Формы, порядок действий и вопросы

1. **Краткий ответ:** The records ___ been copied. (has/have)
2. **Краткий ответ:** The rehearsal depends ___ access. (on/from)
3. **Краткий ответ:** Replace the old column ___ the new one. (with/from)
4. **Краткий ответ:** Before we ___ the writer, we will review the checks. (switch/will switch)
5. **Краткий ответ:** Do not proceed until the checks ___ finished. (have/will have)
6. **Краткий ответ:** We propose ___ both fields for now. (retaining/to retain)
7. **Краткий ответ:** Could you clarify which field a23 ___? (updates/does update; нейтрально, без усиления)
8. **Краткий ответ:** The application was rolled back without ___ the schema. (changing/change)
9. **Развёрнутый ответ:** Исправь The column have been add yesterday. Сохрани yesterday и passive.
10. **Развёрнутый ответ:** Собери и объясни: by the time / remove / we / it / will have checked / the consumers / we.
11. **Развёрнутый ответ:** Передай: «Даже если копирование закончится, старый writer всё ещё может создавать расхождения».
12. **Развёрнутый ответ:** Сравни Keep it until Friday / Complete it by Friday в двух предложениях.
13. **Развёрнутый ответ:** Сделай вопрос и отрицание из The mapping has been approved.
14. **Развёрнутый ответ:** Сравни Not all records were mapped и No records were mapped.
15. **Развёрнутый ответ:** Переформулируй If the mapping does not change, we can keep this estimate через unless.
16. **Развёрнутый ответ:** Создай три собственных предложения: completed action, ongoing backfill, proposed removal. Явно различи status.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: have. Records множественное; have been + V3.
2. Ключ: on. Depend on — устойчивое управление.
3. Ключ: with. Replace A with B.
4. Ключ: switch. Present в обычной будущей time clause.
5. Ключ: have. Until + Present Perfect, без will.
6. Ключ: retaining. Propose + -ing в данной модели.
7. Ключ: updates. Embedded clause с обычным порядком.
8. Ключ: changing. После without требуется форма -ing, не базовая форма.
9. Возможный образец (не единственный ответ): The column was added yesterday.. Past Simple passive для завершённого yesterday, singular was + V3.
10. Возможный образец (не единственный ответ): By the time we remove it, we will have checked the consumers.. Present в time clause; Future Perfect в главной.
11. Возможный образец (не единственный ответ): Even if copying finishes, the old writer may still create divergence.. Уступка не отменяет риск; обычное будущее без will в if-clause.
12. Возможный образец (не единственный ответ): Первое продолжать хранить до пятницы; второе завершить не позже пятницы.. Не взаимозаменяемые prepositions.
13. Возможный образец (не единственный ответ): Has the mapping been approved? The mapping has not been approved.. Has before subject; отрицание после has.
14. Возможный образец (не единственный ответ): Не все / ни одной; первое не разрешает объявить нулевой результат.. Полярность и scope, не только перевод слова not.
15. Возможный образец (не единственный ответ): Unless the mapping changes, we can keep this estimate.. Не unless does not change: это меняет условие.
16. Возможный образец (не единственный ответ): Например was added; is being copied; would remove. Содержание своё и непротиворечивое.. Открытая проверка по смыслу, не точному совпадению.

</details>

## Совместимость, mapping и переходные состояния

1. **Краткий ответ:** В Alder a23 пишет public_name? yes/no.
2. **Краткий ответ:** При старом непустом public_name fallback a24 сработает? yes/no.
3. **Краткий ответ:** 1,000 matching / 200 null public_name: backfill завершён? yes/no.
4. **Краткий ответ:** Deprecated автоматически означает removed? yes/no.
5. **Развёрнутый ответ:** Составь словесную матрицу Alder для a24/S1 start, a23/S2 selected reads и a23/S3 proposal.
6. **Развёрнутый ответ:** Пошагово объясни один Alder stale read после old-version update.
7. **Развёрнутый ответ:** Коллега говорит «Dual writes решают все old-writer проблемы». Возрази по Alder.
8. **Развёрнутый ответ:** Сравни adding nullable field и adding required field для прежних записей без значения.
9. **Развёрнутый ответ:** Новый reader принимает старые числа и новые строки. Старый принимает только числа. Назови направление совместимости.
10. **Развёрнутый ответ:** В Maple почему нельзя универсально разделить full_name по первому пробелу?
11. **Развёрнутый ответ:** Новая независимая Iris API: default omitted flag был false, предложен true. Синтаксис прежний. Что уточнить?
12. **Развёрнутый ответ:** Перепиши «S2 deployed, therefore migration complete» с ограничением.
13. **Развёрнутый ответ:** Новый Fir: reader игнорирует unknown optional fields по контракту. Можно назвать добавление поля guaranteed safe для всех consumers?
14. **Развёрнутый ответ:** Сформулируй два вопроса перед removal: active consumers и meaning of empty/null.
15. **Развёрнутый ответ:** Предложи проверку backfill alongside live writes, не объявляя результат заранее.
16. **Развёрнутый ответ:** Передай mixed-version проблему нетехническому коллеге в 70–100 словах.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Old application writes display_name only.
2. Ключ: no. Fallback только при null.
3. Ключ: no. Двести ещё не заполнены, не потеряны.
4. Ключ: no. Устаревание и удаление различаются.
5. Возможный образец (не единственный ответ): Первое failed missing column; два selected reads при S2 passed; proposed S3 удаляет required field и не совместим с a23 по контракту, execution не проводили.. Разделить observed/proposed и не объявить всю матрицу tested.
6. Возможный образец (не единственный ответ): a23 обновил только display_name; public_name уже заполнен старым; a24 предпочёл его; новая display_name сохранилась.. Не fallback failure на null или удаление.
7. Возможный образец (не единственный ответ): Контракт dual writes относится к a24, не a23; старый writer остаётся отдельным путём.. Не отрицать заданную atomicity a24.
8. Возможный образец (не единственный ответ): Наличие допустимого missing/null и требование значения различаются; нужны правила проверки existing rows/defaults.. Не универсальный SQL-рецепт.
9. Возможный образец (не единственный ответ): Новый читает старое; старый не принимает новый string format по условию.. Не симметричный вывод.
10. Возможный образец (не единственный ответ): Не задано достоверное соответствие частей; условие запрещает угадывать, 120 mappings unknown.. Не использовать реальные личные имена для эксперимента.
11. Возможный образец (не единственный ответ): Semantic behaviour and existing client expectations; unchanged syntax does not establish compatibility.. Не автоматически approved breaking release.
12. Возможный образец (не единственный ответ): S2 may be deployed, but copying, mixed-version behaviour and exit checks need separate evidence.. Не отрицать факт deployment, если он задан.
13. Возможный образец (не единственный ответ): Для этого reader известен конкретный аспект; другие consumers/semantics не проверены.. Не переносить strict-client failure из T03 автоматически.
14. Возможный образец (не единственный ответ): Which consumers still require the field? What do empty and null mean in each version?. Открытые вопросы, не выдуманные ответы.
15. Возможный образец (не единственный ответ): State initial value, writer/version, event order, expected latest read and retained evidence; result pending.. Никаких production operations; тестовый план.
16. Возможный образец (не единственный ответ): Две версии используют разные копии имени; новая выбирает старую заполненную копию после изменения другой; нужен согласованный переход.. Не бессмысленная буквальная калька и не обещание готового fix.

</details>

## Откат, восстановление и пределы свидетельств

1. **Краткий ответ:** Возврат a24→a23 при сохранённой S2 — автоматически schema downgrade? yes/no.
2. **Краткий ответ:** Backup 09:00 автоматически содержит более поздние 14 writes? yes/no.
3. **Краткий ответ:** Replay not tested доказывает, что все поздние записи потеряны? yes/no.
4. **Краткий ответ:** Stop next phase само даёт разрешение production rollback? yes/no.
5. **Развёрнутый ответ:** Дай четыре отдельных английских предложения: app rollback, schema downgrade, backup restore, later-write replay.
6. **Развёрнутый ответ:** Сузь «We tested rollback safely» до фактов Alder.
7. **Развёрнутый ответ:** Что именно показало восстановление Alder backup?
8. **Развёрнутый ответ:** Новый Birch conversion обрезает строки до 8 chars без сохранения original. Можно восстановить исходные 12 chars только из результата?
9. **Развёрнутый ответ:** Новый Reed сохраняет original и transformed value. Достаточно этого для «rollback fully tested»?
10. **Развёрнутый ответ:** Объясни forward fix без обещания, что он безопаснее rollback в любой системе.
11. **Развёрнутый ответ:** В Alder mismatch обнаружен, но release authority неизвестна. Напиши status и вопрос.
12. **Развёрнутый ответ:** Сравни pause progression, stop service и roll back в контексте просьбы.
13. **Развёрнутый ответ:** Предложи evidence для recovery поздних writes в учебной среде.
14. **Развёрнутый ответ:** Новый Fern: восстановлено 7 из 8 заранее известных записей; восьмая не найдена в результате. Как описать без причины?
15. **Развёрнутый ответ:** Переведи: «Откат приложения проверили до смены формата записи, не после».
16. **Развёрнутый ответ:** Напиши 80–110 слов предупреждения к плану восстановления, различая proposed/tested и owner unknown.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Application switch без изменения schema.
2. Ключ: no. Later writes требуют отдельного recovery/replay evidence.
3. Ключ: no. Неизвестное восстановление не доказанная потеря.
4. Ключ: no. Остановка продвижения и полномочия отката различаются.
5. Возможный образец (не единственный ответ): Названы разные объекты; статус каждого явный, без автоматического включения остальных.. Собственные полные предложения, не перечень терминов.
6. Возможный образец (не единственный ответ): Two selected reads passed after switching to a23 with S2 retained; other paths not established.. Не вычёркивать два успеха.
7. Возможный образец (не единственный ответ): Доступ к снимку 09:00 в отдельной disposable environment; не replay 14 позже, не restore current copy.. Не реальная production restore.
8. Возможный образец (не единственный ответ): Нет, обрезанная информация не определена по оставшимся восьми; нужна отдельная сохранённая информация.. Условие явно задаёт потерю, не переносить на каждый rename.
9. Возможный образец (не единственный ответ): Нет: сохранённый original полезен, но recovery procedure/results ещё нужны.. Не обещание целостности любых данных.
10. Возможный образец (не единственный ответ): A new change addressing the problem rather than reverting; risks and verification depend on state.. Не универсальное инженерное предпочтение.
11. Возможный образец (не единственный ответ): Progression should stop under the agreed condition; who may approve the next action?. Не назначать Mina или Sol без факта.
12. Возможный образец (не единственный ответ): Три разных действия с разными последствиями; уточнить intended action, не расширять распоряжение.. Не выполнять ни одно реальное действие.
13. Возможный образец (не единственный ответ): Synthetic known writes after snapshot, stated restore/replay procedure, validation against expected values, results pending.. Не использовать credentials/данные пользователя.
14. Возможный образец (не единственный ответ): Seven found; the eighth was absent from the inspected result; cause and other locations unknown.. Не all restored и не доказанное безвозвратное удаление.
15. Возможный образец (не единственный ответ): The application rollback was tested before the writer-format change, not after it.. Сохранить существенную границу.
16. Возможный образец (не единственный ответ): Связный текст с данными Alder, scope, четырнадцатью writes и вопросом authority.. Не реальная эксплуатационная инструкция.

</details>

## Оценки, зависимости и договорённости

1. **Краткий ответ:** Three person-days уже определяет точную calendar date? yes/no.
2. **Краткий ответ:** Sol offers to ask об access = promises to provide? yes/no.
3. **Краткий ответ:** Mina agreed ___ review the mapping. (to/on)
4. **Краткий ответ:** The range is subject ___ review. (to/from)
5. **Развёрнутый ответ:** Перескажи Alder estimate в 3–4 предложениях со всеми исключениями.
6. **Развёрнутый ответ:** Объясни, почему второй разработчик не обязательно сократит 4 person-days до 2 calendar days.
7. **Развёрнутый ответ:** Напиши вопрос о scope оценки: includes/excludes, assumption, revisit trigger.
8. **Развёрнутый ответ:** Requested Friday target не accepted deadline. Составь ответ заказчику без ложного обещания.
9. **Развёрнутый ответ:** В Maple нет среды. Назови работу, которую по досье можно предложить, не обещая выполнить rehearsal.
10. **Развёрнутый ответ:** Сравни I will update you at eleven / I will finish by eleven.
11. **Развёрнутый ответ:** Условный план: mapping approved, но access ещё нет. Можно считать все prerequisites выполненными?
12. **Развёрнутый ответ:** Составь английское ограничение своей роли: review да, deployment нет.
13. **Развёрнутый ответ:** Новая оценка была 2–3 days только editing; добавили full recovery rehearsal. Как сообщить пересмотр?
14. **Развёрнутый ответ:** Напиши 100–130 слов итога обсуждения: known actions, offers, unresolved owners/dates.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Effort не календарное расписание.
2. Ключ: no. Offer enquiry не гарантия результата.
3. Ключ: to. Agree to do, не согласовать содержание через on.
4. Ключ: to. Subject to — обусловленность пересмотром.
5. Возможный образец (не единственный ответ): 3–5 person-days implementation if mapping/access; excludes review, recovery rehearsal, waiting; Wednesday tentative, start/staffing unsettled.. Не дата готового релиза.
6. Возможный образец (не единственный ответ): Sequential dependencies, coordination and unknown availability; нельзя вычислить фактическую длительность без условий.. Не утверждать, что параллельная работа никогда не помогает.
7. Возможный образец (не единственный ответ): What does the range include? What is excluded? Which assumption would make us revise it?. Открытые полные вопросы.
8. Возможный образец (не единственный ответ): Friday is the requested target; we need mapping/access and review before confirming a date.. Вежливо, конкретно, без фиктивного agreement.
9. Возможный образец (не единственный ответ): Review mapping questions can be proposed; environment-dependent checks remain blocked; confirm actual acceptance.. Не считать всё завершённым или всё остановленным.
10. Возможный образец (не единственный ответ): Обещание сообщения против обещания завершения, at и by тоже различаются.. Не подменять одно другим в протоколе.
11. Возможный образец (не единственный ответ): Нет: отдельная зависимость не исчезает; уточнить доступ и следующий status update.. Не игнорировать approved mapping.
12. Возможный образец (не единственный ответ): I can review the proposed mapping, but I cannot take responsibility for deployment.. Содержательное собственное предложение.
13. Возможный образец (не единственный ответ): The earlier range covered editing only; the expanded scope needs a revised estimate with stated assumptions.. Не выдумывать новую точную цифру.
14. Возможный образец (не единственный ответ): Условия Alder или свой явно вымышленный brief; отделены согласованные действия и предложения.. Для своей встречи не выдумывать реально состоявшиеся реплики.

</details>

## Чтение: Alder migration note

Alder Profiles 2.3 — migration note 12, Draft

The team wants to replace display_name with public_name. This note describes a rehearsal with synthetic records, not an approved production change. During the transition, every supported application version must display the latest acknowledged name. Existing names must remain recoverable. The team has agreed to stop progression to the next phase if a check demonstrates a mismatch. That condition does not authorise an automatic rollback or identify who may approve a production change.

The old application, a23, reads and writes display_name only. Schema S1 contains that column but no public_name. The expanded schema, S2, retains display_name and adds a nullable public_name. The transition application, a24, reads public_name when it is not null and otherwise falls back to display_name. For an acknowledged update made through a24, its stated contract writes the same value to both columns atomically. This contract does not change what a23 writes. An a24 start against S1 failed because public_name was missing. Adding a column and deploying an application are therefore separate steps with an order to check.

In an isolated copy containing 1,200 records, a backfill copied existing names into the new column. At the recorded snapshot, 1,000 records had matching values in both columns and 200 still had null in public_name. No application writes occurred during this particular backfill run. The figures describe that copy at that moment; they do not establish how the backfill behaves alongside live updates. Copying 1,000 of 1,200 records is approximately 83.3 percent of this copying task, not 83.3 percent of an entire migration project. It is not evidence that the remaining records have been lost.

A separate mixed-version rehearsal contained five update-and-read checks. Four returned the latest acknowledged name. In the fifth, a23 updated display_name on a record whose public_name was already populated. Application a24 then returned the older public_name. Both stored values were inspected: the newer display_name was still present. The result demonstrates a stale read in this check, not deletion of the newer name. The known read priority and the old writer explain this observed path. They do not prove that every possible mismatch has the same cause. Simply finishing the earlier backfill would not demonstrate that future old-version writes remain synchronised.

Another exercise switched the application from a24 back to a23 while retaining S2. Two selected reads returned the current display_name. No schema downgrade occurred, and these two reads did not test every write path or operational condition. A proposal labelled S3 would remove display_name. It has not been applied. Because a23 requires that column, the proposal cannot be treated as compatible with that old application. A plan to remove a field is not evidence that old consumers have stopped using it.

A backup of the isolated copy was taken at 09:00. Fourteen later writes were then acknowledged in that copy. The team rehearsed restoring the 09:00 backup into a different, disposable environment and inspected the older snapshot. No method for replaying the fourteen later writes was tested. The existence of the backup therefore does not establish recovery of those writes. This exercise neither restored the current copy nor changed a production database. The recovery plan still needs explicit data boundaries, validation and authority.

Mina estimates three to five person-days to implement a revised transition, provided that the mapping is agreed and a suitable test environment is available. The range excludes review, recovery rehearsal and waiting for access. Wednesday is a tentative target, not an agreed release date; the start and staffing have not been settled. Mina accepts a review of the mapping. Sol offers to ask who can provide an environment, not to guarantee access. The immediate recommendation is to investigate the mixed-version mismatch, preserve both columns, and agree the missing checks before proposing any next phase.

1. **Развёрнутый ответ:** Каковы цель и статус note 12?
2. **Развёрнутый ответ:** Что останавливает следующий этап? Даёт ли это automatic rollback authority?
3. **Развёрнутый ответ:** Какие поля существуют в S1, S2 и proposed S3?
4. **Развёрнутый ответ:** Сравни чтение и запись a23/a24.
5. **Развёрнутый ответ:** Почему a24/S1 start failed?
6. **Развёрнутый ответ:** Что значат 1,000/1,200 и оставшиеся 200?
7. **Развёрнутый ответ:** Почему завершение этой копии само не решает mixed-version проблему?
8. **Развёрнутый ответ:** Восстанови пять check outcomes и inspected value.
9. **Развёрнутый ответ:** Назови scope двух rollback reads.
10. **Развёрнутый ответ:** Можно ли a23 работать с предложенной S3 по заданной зависимости? Что не запускали?
11. **Развёрнутый ответ:** Где restored backup и какие writes не покрыты evidence?
12. **Развёрнутый ответ:** Что включает оценка, при каких условиях и что исключено?
13. **Развёрнутый ответ:** Что приняли Mina и Sol, а что не установлено?
14. **Развёрнутый ответ:** Сформулируй основную рекомендацию и два основания автора.
15. **Развёрнутый ответ:** Напиши summary 130–170 слов для отсутствовавшего коллеги.
16. **Развёрнутый ответ:** Какие два новых свидетельства сильнее всего изменили бы рекомендацию? Объясни.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Draft; заменить display_name на public_name, latest acknowledged name для supported versions и recoverable existing names.. Не approved production change.
2. Возможный образец (не единственный ответ): Доказанный mismatch останавливает progression; automatic rollback/approval authority не заданы.. Сохранить обе части.
3. Возможный образец (не единственный ответ): S1 display_name; S2 оба с nullable public_name; S3 proposal remove display_name, не applied.. Не смешать план и наблюдение.
4. Возможный образец (не единственный ответ): a23 only display_name; a24 non-null public_name else display_name, own acknowledged updates atomic both.. a23 не получил новый write contract.
5. Возможный образец (не единственный ответ): public_name отсутствовал; app/schema порядок требует проверки.. Не general database outage.
6. Возможный образец (не единственный ответ): Около 83.3% copying snapshot; 200 null new field, no loss demonstrated; no live writes в run.. Не процент всего проекта.
7. Возможный образец (не единственный ответ): Будущие a23 writes могут снова менять только старое поле; нужны правила синхронизации/проверки.. Не обещать rerun как готовый fix.
8. Возможный образец (не единственный ответ): 4 latest,1 stale a24 after a23; newer display_name осталась.. Не пять users или five lost rows.
9. Возможный образец (не единственный ответ): a24→a23, S2 retained, two selected reads latest display_name; не все paths.. Schema не downgraded.
10. Возможный образец (не единственный ответ): Требуемая колонка удаляется, поэтому совместимость нарушается; S3 execution не проводили.. Различать contract reasoning и measured result.
11. Возможный образец (не единственный ответ): Different disposable environment; snapshot 09:00; replay fourteen later writes untested.. Не восстановление production/current copy.
12. Возможный образец (не единственный ответ): Implementation 3–5 person-days if mapping/access; review, recovery rehearsal, waiting excluded.. Не release duration.
13. Возможный образец (не единственный ответ): Mina mapping review; Sol offer ask environment provider; no guaranteed access/deployment authority.. Не assigning owner из courtesy.
14. Возможный образец (не единственный ответ): Investigate mismatch, retain columns, agree missing checks; known stale path and recovery/compatibility limits.. Допустима обоснованная своя позиция с теми же фактами.
15. Возможный образец (не единственный ответ): Связный пересказ goal/states/results/recovery / estimate и unknown.. Не набор чисел без связи и не дословная модель.
16. Возможный образец (не единственный ответ): Например verified revised mixed-version behaviour и recovery of later writes с authority; proposal evidence ещё нет.. Нужны обоснования, не утверждение уже выполненной проверки.

</details>

## Аудирование: Cedar rehearsal discussion

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Cedar Queue 6.0 — a rehearsal discussion

Dana: I have the note about changing stored message states. We are moving from numeric zero and one to the words pending and sent. All ten sample messages are ready, so I think we can enable the new writer.

Jai: I need to correct that. Eight of the ten samples have a recognised numeric value, zero or one. The other two contain the number two, whose meaning has not been agreed. Recognised does not mean delivered. This check concerns the stored representation, not delivery to a recipient. We have not decided what to do with those two records.

Dana: Thanks. Eight recognised values, two unresolved values, and no delivery conclusion. The current reader R1 understands numeric zero and one only. The proposed reader R2 can read those values and the new strings pending and sent. In phase one, the writer still stores numbers. Enabling string writes would be phase two, which is only a proposal. We have not run that phase.

Jai: Correct. A reader that understands both forms can help during a transition, but it does not make the old reader understand new strings. Before enabling the new writer, we need to establish what readers remain and what values can reach them. We also need an agreed mapping for the unresolved value. Please do not silently call number two sent.

Dana: Our rollback rehearsal took ninety seconds. Sorry, I read that incorrectly: it took nine seconds, not ninety. We switched the application from R2 to R1 with numeric writes still enabled. The four selected messages used recognised numeric values, and all four were read correctly afterwards. The exercise had a fifteen-second limit for that switch. It met that limit in this environment. We did not test a rollback after string writes or include the two unresolved records.

Jai: So the result is a nine-second switch and four successful reads under those conditions. It is not a tested reverse conversion from strings. If a new string has already been written, can R1 read it?

Dana: No. Its stated reader contract accepts only the old numbers. I called the rollback safe too broadly. What we have is a successful rehearsal before the proposed writer change. The later state needs separate evidence. The record does not say that we can reconstruct any value we discard.

Jai: What does your estimate include? You wrote two days, and someone might read that as a calendar promise.

Dana: I mean two person-days of implementation effort, assuming we first agree the mapping. That excludes review, waiting and another recovery rehearsal. There is no agreed delivery date. I will send a status update at 11:00 UTC even if the mapping is still unresolved. That is an update commitment, not a promise to finish the migration by eleven.

Jai: I can review the mapping proposal, but I cannot take ownership of deployment or promise an environment. Please record that limit.

Dana: Let me read that back: mapping review only, no deployment commitment. Phase two remains proposed; eight values are recognised, two remain unresolved; the nine-second rehearsal covered the old representation only. Is that accurate?

Jai: Yes. That summary reflects the discussion. My confirmation is not approval to enable string writes.

</details>

1. **Развёрнутый ответ:** Прослушай без текста. Какой переход обсуждают и что осталось только proposal?
2. **Развёрнутый ответ:** Сохрани первоначальную и исправленную версии о десяти messages.
3. **Развёрнутый ответ:** Какое ложное заключение о delivery специально исключено?
4. **Развёрнутый ответ:** Какие формы читают R1/R2 и что writer хранит в phase one?
5. **Развёрнутый ответ:** Запиши поправку длительности с единицей и предел.
6. **Развёрнутый ответ:** Что именно подтвердили четыре reads и что осталось вне scope?
7. **Развёрнутый ответ:** Как Dana сужает прежнее утверждение safe?
8. **Развёрнутый ответ:** Что скрывалось за two days?
9. **Развёрнутый ответ:** Что обещано на 11:00 UTC?
10. **Развёрнутый ответ:** Что принял Jai и чем не является его final confirmation?
11. **Развёрнутый ответ:** Партнёр устно даёт новое сообщение с поправкой количества/этапа. До текста запиши обе версии и итог.
12. **Развёрнутый ответ:** Уточни у партнёра неизвестный scope проверки, сохрани реальный ответ и summary 70–100 слов.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Numeric 0/1→pending/sent; phase two string writes proposed/not run.. Если текст был виден, text-supported; без звука pending.
2. Возможный образец (не единственный ответ): Dana all ten ready; Jai eight recognised 0/1, two unresolved 2.. Не восемь delivered.
3. Возможный образец (не единственный ответ): Representation check не delivery; recognised не sent to recipient.. Не переносить значение слова sent на фактически доставленные сообщения.
4. Возможный образец (не единственный ответ): R1 numbers 0/1; R2 numbers 0/1+pending/sent; writer still numeric.. Не новая строковая запись уже включена.
5. Возможный образец (не единственный ответ): Ninety seconds→nine seconds; limit fifteen seconds.. Не ninety milliseconds.
6. Возможный образец (не единственный ответ): Recognised numeric selected messages after switch; no string-write state or unresolved value 2 included.. Не entire rollback safety.
7. Возможный образец (не единственный ответ): Successful rehearsal before writer change, not tested reverse conversion.. Самопоправка вывода, не новый выполненный тест.
8. Возможный образец (не единственный ответ): Two person-days implementation if mapping agreed; excludes review, waiting, recovery rehearsal.. Не two calendar days.
9. Возможный образец (не единственный ответ): Status update even if unresolved, не finish migration.. Не отложенный update until success.
10. Возможный образец (не единственный ответ): Mapping review only; no deployment/environment promise; confirmation of summary not approval phase two.. Не превращать read-back в consent.
11. Возможный образец (не единственный ответ): Фактический hidden source, новая поправка и точный scope.. Не переименование Cedar; без источника pending.
12. Возможный образец (не единственный ответ): Настоящее уточнение и пересказ с различием observed/proposed/unknown.. При видимом источнике пометка text-supported; не выдумывать ответ.

</details>

## Письмо: полный migration review и редакция

Самостоятельное досье Maple Contacts 1.9, note 21 Draft. Все имена и записи вымышлены. Предлагается заменить full_name на given_name и family_name. Требование: сохранять исходное полное имя; не угадывать составные части без согласованного соответствия. Old app m19 читает full_name. Candidate m20 читает два новых поля; если хотя бы одно null, показывает full_name. В расширенной схеме все три поля сохранены. Для 600 старых записей approved mapping table задаёт обе части у 480; у 120 соответствие не задано. Dry run заполнил только эти 480 и сохранил full_name у всех 600. Не считать остальные 120 corrupted или безопасно разбиваемыми по пробелу. Регистр/культурная структура имени не задают универсальный алгоритм. Проверка новых записей отдельна: m20 создал шесть записей, в четырёх заполнил только два новых поля, в двух также full_name. m19 показал полное имя у двух, а у четырёх — пустое; candidate backfill старых записей этого не исправляет. Предложено дополнить writer, это ещё не implemented/tested. Удаление full_name лишь proposal, m19 всё ещё требует его. Переключение m20→m19 с этой расширенной схемой проверили только на трёх старых записях с full_name: три успешных чтения, не доказательство для шести новых. Backup сделан до шести новых записей, restore/replay не проверены. Оценка 4–7 person-days implementation при agreed mapping/access; исключены review, ожидание и восстановление. Пятница — requested target, команда не дала commitment. Noor согласилась review questions, не выполнить migration; Pat предлагает запросить test environment, не гарантирует выдачу. Напиши полный migration review 350–450 слов: цель, версии/данные, результаты, границы восстановления, условия следующего шага, оценка и открытые вопросы. Не запускай реальные миграции и не используй личные данные. Исходник и полная редакция после настоящей обратной связи сохраняются отдельно.

Полные авторские модели Alder для анализа, не ответы на Maple:

REPORT

Alder Profiles — review of migration note 12

The proposed change replaces display_name with public_name. The immediate objective is to preserve the latest acknowledged name for every supported application version while keeping existing names recoverable. The note remains Draft. I recommend investigating the mixed-version mismatch before progressing to another phase; I do not recommend a production deployment on the current evidence.

Schema S2 retains the old column and adds a nullable new column. Application a23 reads and writes the old field only. Application a24 prefers a non-null public_name, falls back to display_name otherwise, and writes both fields atomically for its own acknowledged updates. That behaviour does not synchronise an update made through a23. The failed a24 start against S1 also shows why the application and schema steps cannot be treated as interchangeable.

The isolated backfill snapshot contains 1,000 matching pairs and 200 null new values among 1,200 records. There were no application writes during that run. These figures indicate incomplete copying, not lost records or the percentage completion of the whole project. Behaviour alongside live writes remains untested by this run.

In the separate mixed-version rehearsal, four of five checks returned the latest name. One old-version update was followed by a stale a24 read because the populated new field took priority. The newer old-field value was still present. This is a demonstrated transition problem, not evidence of deletion. Completing the snapshot copy alone would not establish that future old-version writes remain safe.

Switching back to a23 with S2 produced two successful selected reads, but that is limited rollback evidence. Removing display_name under the proposed S3 would break the stated dependency of a23. Restoring the 09:00 backup into a disposable environment established access to the older snapshot, not recovery of the fourteen later acknowledged writes. Their replay has not been tested.

The estimate is three to five person-days of implementation effort, conditional on agreed mapping and environment access. It excludes review, recovery rehearsal and waiting; Wednesday is not an agreed release date. Mina accepts mapping review, while Sol offers to ask about access. Neither action establishes deployment ownership. We need agreed mixed-version checks, recovery boundaries and authority before reconsidering progression. The known mismatch already meets the stated condition to stop the next phase.

COMPARISON

The Alder evidence concerns several different states, not one universal compatibility result. With S1, the old field exists and the new field does not. Application a24 failed to start in that state. With S2, both columns exist, so the old application can still address display_name; however, column presence alone does not establish correct mixed-version behaviour.

The backfill snapshot and the update rehearsal answer different questions. The snapshot shows 1,000 matching pairs without concurrent application writes. The separate rehearsal shows one stale a24 read after a23 updated only the old field. The latter result cannot be erased by calling the copy mostly complete. It identifies a path that must be addressed while old writers remain supported.

The two successful reads after switching back to a23 apply to selected records with S2 retained. They do not establish that a23 could operate after the proposed removal of display_name. Likewise, the backup restore concerns an older snapshot, not replay of later writes. A useful comparison names the application, schema, stored representation and operation at each stage. It also identifies which combinations are untested, instead of treating missing evidence as either confirmed safety or confirmed failure.

CLARIFICATION

Could you clarify which application versions must remain supported during the transition? The note identifies a23 and a24, but I do not see an agreed retirement condition for old writers. Please also specify how updates made through a23 will remain visible through a24 after a record has been copied. The current fallback only applies when public_name is null. Finally, does the recovery requirement include the fourteen writes acknowledged after the backup? The existing rehearsal restored the older snapshot into a separate environment. I would like the plan to distinguish that result from any proposed replay procedure and to state who can approve the next phase.

OBJECTION

I agree that retaining both columns is useful, but I do not think the current evidence justifies progressing. One mixed-version check returned an older name despite the requirement to display the latest acknowledged value. The newer value was still stored, so I would describe this as a stale-read mismatch rather than data loss. The successful backfill snapshot does not address later writes through the old application. Could we first agree how those writes will be handled and which checks would demonstrate the intended behaviour? I am asking for a revised transition proposal, not asserting that every possible implementation will fail or authorising an automatic rollback.

HANDOVER

Please keep migration note 12 in Draft and retain the recorded evidence. The immediate issue is the stale a24 read after an a23 update; the newer display_name remained present. The snapshot copy, mixed-version checks and switch-back exercise are separate observations. Mina has accepted mapping review. Sol has offered to ask who can provide an environment, but access and deployment ownership remain unresolved. The implementation estimate is conditional and excludes review, waiting and recovery rehearsal. Wednesday is tentative. Before proposing another phase, we need updated transition checks and an explicit recovery boundary for writes after the backup. This handover does not authorise a production operation.

REVISION

Alder Profiles — revised review for the migration discussion

The current recommendation is to hold progression, preserve the evidence and revise the transition proposal. Note 12 is still Draft. The agreed requirement is that every supported application version displays the latest acknowledged name and that existing names remain recoverable. A demonstrated mismatch stops progression to the next phase; it does not itself authorise an automatic rollback.

The application and schema states must be described together. Schema S1 has display_name only, and a24 failed to start against it. Schema S2 retains that field and adds nullable public_name. Application a23 updates only display_name. Application a24 prefers the new field when populated and writes both fields atomically for its own acknowledged updates. That contract does not cover old-version writes.

In the isolated copy of 1,200 records, the recorded backfill snapshot had 1,000 matching pairs and 200 null new values. There were no concurrent application writes. This is progress in one copying task, not proof of complete migration or behaviour under live updates. It also does not show that any of the remaining records were deleted.

The separate mixed-version rehearsal contains a concrete problem: after a23 changed an already copied record, a24 returned the older public_name. The newer display_name was inspected and remained present. Four other checks returned the latest value, but those successes do not cancel the mismatch. We need a proposal that addresses old writers and new-field read priority, followed by checks of the revised behaviour.

Recovery evidence is narrower than a general safety claim. Two reads succeeded after switching from a24 to a23 with S2 retained. The proposed S3 removal has not occurred and conflicts with the old application's stated column dependency. A separate restore recovered the 09:00 snapshot into a disposable environment. Replay of the fourteen later acknowledged writes remains untested.

Finally, three to five person-days refers to conditional implementation effort, excluding review, recovery rehearsal and waiting. Wednesday is tentative, and no start or staffing is agreed. Mina accepts mapping review; Sol offers an access enquiry. We should agree recovery validation, transition checks and decision authority before reconsidering the next phase. This revised model illustrates clearer boundaries, not a fabricated review of a learner's answer.

1. **Развёрнутый ответ:** Прочитай шесть полных моделей Alder. В report отметь цель, версии, evidence, recovery boundary и estimate.
2. **Развёрнутый ответ:** По самостоятельному Maple brief напиши полный migration review 350–450 слов.
3. **Развёрнутый ответ:** Проанализируй comparison: почему «две колонки существуют» не доказательство корректного чтения?
4. **Развёрнутый ответ:** Создай Maple comparison 180–240 слов: old-record mapping и new-record behaviour.
5. **Развёрнутый ответ:** Разбери clarification model и составь Maple запрос 100–140 слов о mapping/recovery/authority.
6. **Развёрнутый ответ:** Напиши Maple objection 100–140 слов к «раз 480 перенесены, можно убрать full_name».
7. **Развёрнутый ответ:** Разбери модель возражения: где признан успех и где ограничен вывод?
8. **Развёрнутый ответ:** Получи настоящий отзыв на original 2: сохрани цитаты и 2–3 решения по исправлениям.
9. **Развёрнутый ответ:** После отзыва перепиши весь Maple review 350–450 слов отдельным ответом.
10. **Развёрнутый ответ:** Сравни полную revised model Alder с original: какие границы стали яснее?
11. **Развёрнутый ответ:** Разбери handover и напиши свой Maple handover 100–140 слов.
12. **Развёрнутый ответ:** Напиши отдельный paragraph 80–110 слов об estimate Maple.
13. **Развёрнутый ответ:** Составь короткий change log своей revision, сославшись на original и новый текст.
14. **Развёрнутый ответ:** Новый Pine API удаляет required client field code и добавляет key; старый client требует code. Напиши notice 100–140 слов.
15. **Развёрнутый ответ:** Отредактируй «All names were mapped; Friday release guaranteed; rollback restores every new contact» по Maple.
16. **Развёрнутый ответ:** Без модели напиши 80–110 слов проверки своей работы: какие утверждения опираются на факты, какие на assumptions?

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Alder Profiles — review of migration note 12 The proposed change replaces display_name with public_name. The immediate objective is to preserve the latest acknowledged name for every supported application version while keeping existing names recoverable. The note remains Draft. I recommend investigating the mixed-version mismatch before progressing to another phase; I do not recommend a production deployment on the current evidence. Schema S2 retains the old column and adds a nullable new column. Application a23 reads and writes the old field only. Application a24 prefers a non-null public_name, falls back to display_name otherwise, and writes both fields atomically for its own acknowledged updates. That behaviour does not synchronise an update made through a23. The failed a24 start against S1 also shows why the application and schema steps cannot be treated as interchangeable. The isolated backfill snapshot contains 1,000 matching pairs and 200 null new values among 1,200 records. There were no application writes during that run. These figures indicate incomplete copying, not lost records or the percentage completion of the whole project. Behaviour alongside live writes remains untested by this run. In the separate mixed-version rehearsal, four of five checks returned the latest name. One old-version update was followed by a stale a24 read because the populated new field took priority. The newer old-field value was still present. This is a demonstrated transition problem, not evidence of deletion. Completing the snapshot copy alone would not establish that future old-version writes remain safe. Switching back to a23 with S2 produced two successful selected reads, but that is limited rollback evidence. Removing display_name under the proposed S3 would break the stated dependency of a23. Restoring the 09:00 backup into a disposable environment established access to the older snapshot, not recovery of the fourteen later acknowledged writes. Their replay has not been tested. The estimate is three to five person-days of implementation effort, conditional on agreed mapping and environment access. It excludes review, recovery rehearsal and waiting; Wednesday is not an agreed release date. Mina accepts mapping review, while Sol offers to ask about access. Neither action establishes deployment ownership. We need agreed mixed-version checks, recovery boundaries and authority before reconsidering progression. The known mismatch already meets the stated condition to stop the next phase.. Модель доступна до ответа; анализировать связи и ограничения, не копировать в Maple.
2. Возможный образец (не единственный ответ): Цельный собственный текст с 600 / 480 / 120, шестью new records, old-reader mismatch, recovery / estimate и вопросами.. Original; не отвечать досьем Alder, не выдумывать splitting algorithm.
3. Возможный образец (не единственный ответ): The Alder evidence concerns several different states, not one universal compatibility result. With S1, the old field exists and the new field does not. Application a24 failed to start in that state. With S2, both columns exist, so the old application can still address display_name; however, column presence alone does not establish correct mixed-version behaviour. The backfill snapshot and the update rehearsal answer different questions. The snapshot shows 1,000 matching pairs without concurrent application writes. The separate rehearsal shows one stale a24 read after a23 updated only the old field. The latter result cannot be erased by calling the copy mostly complete. It identifies a path that must be addressed while old writers remain supported. The two successful reads after switching back to a23 apply to selected records with S2 retained. They do not establish that a23 could operate after the proposed removal of display_name. Likewise, the backup restore concerns an older snapshot, not replay of later writes. A useful comparison names the application, schema, stored representation and operation at each stage. It also identifies which combinations are untested, instead of treating missing evidence as either confirmed safety or confirmed failure.. Модель помогает назвать states/operations и пределы evidence.
4. Возможный образец (не единственный ответ): 480 mapped/120 unknown при сохранённых originals отдельно от 6 creates: 2 old-readable / 4 empty.. Сопоставление, не смешанный процент.
5. Возможный образец (не единственный ответ): Could you clarify which application versions must remain supported during the transition? The note identifies a23 and a24, but I do not see an agreed retirement condition for old writers. Please also specify how updates made through a23 will remain visible through a24 after a record has been copied. The current fallback only applies when public_name is null. Finally, does the recovery requirement include the fourteen writes acknowledged after the backup? The existing rehearsal restored the older snapshot into a separate environment. I would like the plan to distinguish that result from any proposed replay procedure and to state who can approve the next phase.. Свой адресный запрос по Maple, без придуманных answers.
6. Возможный образец (не единственный ответ): Обоснованный отказ от вывода: 120 unknown, m19 dependency, new creates, removal proposal.. Вежливое возражение с альтернативным next step.
7. Возможный образец (не единственный ответ): I agree that retaining both columns is useful, but I do not think the current evidence justifies progressing. One mixed-version check returned an older name despite the requirement to display the latest acknowledged value. The newer value was still stored, so I would describe this as a stale-read mismatch rather than data loss. The successful backfill snapshot does not address later writes through the old application. Could we first agree how those writes will be handled and which checks would demonstrate the intended behaviour? I am asking for a revised transition proposal, not asserting that every possible implementation will fail or authorising an automatic rollback.. Объяснить функцию предложений, не объявлять все проверки неуспешными.
8. Возможный образец (не единственный ответ): Реальные замечания агента/преподавателя/партнёра с основаниями.. До обсуждения pending; не выдуманный feedback.
9. Возможный образец (не единственный ответ): Полная самостоятельная revision с неизменными facts и осмысленными исправлениями.. Не changelog и не перезапись original 2.
10. Возможный образец (не единственный ответ): Alder Profiles — revised review for the migration discussion The current recommendation is to hold progression, preserve the evidence and revise the transition proposal. Note 12 is still Draft. The agreed requirement is that every supported application version displays the latest acknowledged name and that existing names remain recoverable. A demonstrated mismatch stops progression to the next phase; it does not itself authorise an automatic rollback. The application and schema states must be described together. Schema S1 has display_name only, and a24 failed to start against it. Schema S2 retains that field and adds nullable public_name. Application a23 updates only display_name. Application a24 prefers the new field when populated and writes both fields atomically for its own acknowledged updates. That contract does not cover old-version writes. In the isolated copy of 1,200 records, the recorded backfill snapshot had 1,000 matching pairs and 200 null new values. There were no concurrent application writes. This is progress in one copying task, not proof of complete migration or behaviour under live updates. It also does not show that any of the remaining records were deleted. The separate mixed-version rehearsal contains a concrete problem: after a23 changed an already copied record, a24 returned the older public_name. The newer display_name was inspected and remained present. Four other checks returned the latest value, but those successes do not cancel the mismatch. We need a proposal that addresses old writers and new-field read priority, followed by checks of the revised behaviour. Recovery evidence is narrower than a general safety claim. Two reads succeeded after switching from a24 to a23 with S2 retained. The proposed S3 removal has not occurred and conflicts with the old application's stated column dependency. A separate restore recovered the 09:00 snapshot into a disposable environment. Replay of the fourteen later acknowledged writes remains untested. Finally, three to five person-days refers to conditional implementation effort, excluding review, recovery rehearsal and waiting. Wednesday is tentative, and no start or staffing is agreed. Mina accepts mapping review; Sol offers an access enquiry. We should agree recovery validation, transition checks and decision authority before reconsidering the next phase. This revised model illustrates clearer boundaries, not a fabricated review of a learner's answer.. Это авторское сравнение моделей, не якобы review личного ответа.
11. Возможный образец (не единственный ответ): Please keep migration note 12 in Draft and retain the recorded evidence. The immediate issue is the stale a24 read after an a23 update; the newer display_name remained present. The snapshot copy, mixed-version checks and switch-back exercise are separate observations. Mina has accepted mapping review. Sol has offered to ask who can provide an environment, but access and deployment ownership remain unresolved. The implementation estimate is conditional and excludes review, waiting and recovery rehearsal. Wednesday is tentative. Before proposing another phase, we need updated transition checks and an explicit recovery boundary for writes after the backup. This handover does not authorise a production operation.. В собственном тексте Noor/Pat limited roles, mapping/new records/recovery, no deployment permission.
12. Возможный образец (не единственный ответ): 4–7 person-days if mapping/access; review/waiting/recovery excluded; requested Friday not accepted.. Без вычисленной фиктивной даты.
13. Возможный образец (не единственный ответ): 2–3 настоящих правки с цитатами и причиной; он дополняет full revision, не заменяет.. До revision pending.
14. Возможный образец (не единственный ответ): Breaking dependency, proposal/status, support questions and next checks; no invented rollout date.. Не универсальная безопасная rename.
15. Возможный образец (не единственный ответ): 480 mapped/120 unresolved; Friday requested; backup before 6, restore/replay untested.. Объяснить три смысловые правки, не только грамматику.
16. Возможный образец (не единственный ответ): Цитаты собственного текста и реальная самооценка evidence boundaries.. Самопроверка не подтверждённое mastery.

</details>

## Речь: уточнение, возражение и read-back

1. **Устная работа:** Произнеси migration, schema, constraint, rollback в собственных предложениях. Партнёр повторяет ключевые слова.
2. **Устная работа:** Назови thirteen/thirty и nine/ninety с units в неизвестной партнёру последовательности; проверь пересказ.
3. **Устная работа:** Объясни Alder mixed-version mismatch за связный устный ответ, затем ответь на неизвестный вопрос.
4. **Устная работа:** Партнёр неожиданно предлагает немедленно удалить old field. Возрази и уточни authority.
5. **Устная работа:** Попроси партнёра скрыто сообщить новое условие backfill, уточни concurrent writes.
6. **Устная работа:** Сравни rollback и restore нетехническому собеседнику; он задаёт вопрос о later writes.
7. **Устная работа:** Устно скажи ninety seconds, затем явно исправь на nine seconds и проверь read-back.
8. **Устная работа:** Защити Cedar вывод: почему четыре reads не разрешают string writes?
9. **Устная работа:** Объясни 3–5 person-days и ответь на «Значит в среду всё будет готово?».
10. **Устная работа:** Попроси review mapping; партнёр принимает часть или отказывается. Согласуй только фактический итог.
11. **Устная работа:** Представь Maple original, партнёр задаёт два неожиданных вопроса о неизвестных 120 mappings.
12. **Устная работа:** Партнёр считает три rollback reads доказательством для новых записей Maple. Объясни различие.
13. **Устная работа:** Проведи согласование следующего шага при отсутствующем access и ограниченной роли партнёра.
14. **Устная работа:** Перескажи незнакомое устное status message с исправленной версией и сроком.
15. **Устная работа:** Партнёр меняет требование recovery: теперь обязательны later writes. Объясни, какое evidence нужно дополнить.
16. **Устная работа:** Заверши обсуждение read-back и попроси партнёра поправить неверный пункт.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Реальный звук и проверка понятности; нормативные UK/US допустимы.. Без аудио pronunciation/fluency unknown.
2. Возможный образец (не единственный ответ): Реальное различение и адресная поправка по фактическому недопониманию.. Не оценка по ASR similarity.
3. Возможный образец (не единственный ответ): Old write/display_name, new read priority, retained latest value; реальный follow-up.. Не чтение двух готовых ролей.
4. Возможный образец (не единственный ответ): Зависимость a23 и proposed S3, условие следующего шага, реальная реплика.. Не категорическое никогда нельзя удалять поля.
5. Возможный образец (не единственный ответ): Фактическое новое сообщение, уточнение и пересказ до текста.. Без источника pending.
6. Возможный образец (не единственный ответ): Разные операции, четырнадцать later writes unknown replay, genuine follow-up.. Не обещать recovery без evidence.
7. Возможный образец (не единственный ответ): Самопоправка с единицей и пониманием; actual Cedar boundary fifteen seconds.. Не менять состояние writer.
8. Возможный образец (не единственный ответ): Numeric-only scope, R1 contract, phase two proposal; получить неизвестное возражение.. Не отменять подтверждённый девятисекундный результат.
9. Возможный образец (не единственный ответ): Effort/conditions/exclusions и tentative date; реальная ответная реплика.. Не обещание calendar finish.
10. Возможный образец (не единственный ответ): Реальные request, response, scope; no agreement допустимо.. Не придумывать owner/date.
11. Возможный образец (не единственный ответ): Не угадывать имена, корректно обозначить unknown и запросить approved table.. Не загружать личные контакты.
12. Возможный образец (не единственный ответ): Three old records versus 6 new creates, 4 missing full_name; настоящий обмен.. Не отрицать результаты трёх старых.
13. Возможный образец (не единственный ответ): Уточнение dependencies, accepted scope, update commitment if agreed.. Не превращать discussion в approval deployment.
14. Возможный образец (не единственный ответ): Реальный hidden source, первоначальное/исправленное, deadline versus update.. При чтении text-supported, без источника pending.
15. Возможный образец (не единственный ответ): Условие новое, одного снимка недостаточно; нужны проверка replay и валидация, которые ещё не выполнены.. Не выдумывать результат нового rehearsal.
16. Возможный образец (не единственный ответ): Реальное summary, уточнение и исправленный итог; подтверждение понимания не rollout consent.. Записанный монолог не взаимодействие.

</details>

## Смешанное повторение и отложенный перенос

1. **Краткий ответ:** Before we ___ the constraint, we will review the data. (change/will change)
2. **Краткий ответ:** We recommend ___ the original values. (keeping/to keep)
3. **Краткий ответ:** 80 copied records из 100 — 80% всей migration? yes/no.
4. **Краткий ответ:** Схема и app возвращены назад: later writes автоматически доказанно recovered? yes/no.
5. **Развёрнутый ответ:** Новый Elm: 6 person-days, два исполнителя, доступность проверяющего неизвестна. Можно назвать точный release day?
6. **Развёрнутый ответ:** Новый Moss: rename лишь alias, старое поле сохранено и оба имени принимаются по контракту. Это то же, что remove old?
7. **Развёрнутый ответ:** Новый Ash хранит raw value до преобразования, но restore не пробовали. Напиши status.
8. **Развёрнутый ответ:** Исправь We will wait by Friday until the checks will finish. Условие: ждём до пятницы, проверка должна завершиться к пятнице.
9. **Развёрнутый ответ:** Напиши 100–140 слов review нового Ash: известные факты, неизвестное, предлагаемая проверка и ограниченная рекомендация.
10. **Устная работа:** Партнёр добавляет к Ash новое условие и задаёт неожиданный вопрос. Уточни scope и перескажи.
11. **Развёрнутый ответ:** Через семь дней получи новое досье не про имена или queue states и напиши migration review 250–350 слов.
12. **Устная работа:** На отложенной проверке обсуди новый review и ответь на два неизвестных вопроса.
13. **Развёрнутый ответ:** После ручного разбора выбери 2–3 реальных типа ошибок, цитаты, практику и следующий контроль.
14. **Развёрнутый ответ:** Почему expanded T04 и 100% шкалы не подтверждают освоение всей технической ветки?

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: change. Present в time clause.
2. Ключ: keeping. Recommend + -ing в модели.
3. Ключ: no. Только данного копирования.
4. Ключ: no. Нужно evidence восстановления данных.
5. Возможный образец (не единственный ответ): Нет; effort/staffing недостаточны, review/start/dependencies не заданы.. Не механическое деление на 2.
6. Возможный образец (не единственный ответ): Нет, удаление требуемого старого поля здесь не задано; проверять stated semantics, не переносить Pine failure.. Перенос на действительно другие условия.
7. Возможный образец (не единственный ответ): Original retained; recovery procedure has not been tested.. Не lost и не fully restored.
8. Возможный образец (не единственный ответ): We will wait until Friday. The checks must finish by Friday.. Различить duration/deadline, сохранить обязательность.
9. Возможный образец (не единственный ответ): Связный самостоятельный текст без выдуманных результатов.. Не готовое эксплуатационное руководство.
10. Возможный образец (не единственный ответ): Настоящее новое взаимодействие, не чтение известного script.. Без звука pronunciation/fluency unknown.
11. Возможный образец (не единственный ответ): Реальная дата, новые states/contracts/results/estimates, самостоятельное применение.. До выполнения pending; простое переименование Alder не новый материал.
12. Возможный образец (не единственный ответ): Реальная речь/ответы, проверка понимания и честные unknown.. Без audio нельзя подтверждать pronunciation/fluency.
13. Возможный образец (не единственный ответ): Адресные действия по evidence; если review нет, pending.. Не создавать фиктивные ошибки/занятия.
14. Возможный образец (не единственный ответ): Наполнение/заполнение не качество; нужны manual review, реальная речь, отсрочка; T05–T06 и аудит ещё впереди.. Не сертификация CEFR и не обещание быстрого окончания.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** The column ___ been renamed. (has/have)
2. **Краткий ответ:** Before the team ___, it will check the readers. (proceeds/will proceed)
3. **Краткий ответ:** The estimate depends ___ the agreed scope. (on/from)
4. **Краткий ответ:** Could you explain which field the old client ___? (requires/does require; нейтрально, без усиления)
5. **Краткий ответ:** A new reader accepts an old format. Does that prove the old reader accepts the new format? yes/no.
6. **Краткий ответ:** Назови английский статус: объявлен устаревшим, но не обязательно удалён. Одно слово.
7. **Краткий ответ:** Application rollback сам доказывает восстановление всех новых writes? yes/no.
8. **Краткий ответ:** We agreed ___ review the mapping. (to/on)
9. **Краткий ответ:** Two person-days автоматически означает выпуск через два calendar days? yes/no.
10. **Краткий ответ:** We propose ___ the original values. (preserving/to preserve)
11. **Развёрнутый ответ:** Новое досье Willow Events 3.0, note 4 Draft. Контракт: поддержать старые clients, которые могут не отправлять zone. Server w1 принимает missing zone как UTC. Candidate w2 требует zone; в отдельной rehearsal восемь requests: шесть с zone приняты, два без zone получили 422. w1 принял все восемь с указанным default. Все восемь — synthetic, не users. Removal old behaviour только proposal, approval нет. Сравни результат и требование.
12. **Развёрнутый ответ:** Willow: поле note добавлено optional, старый parser явно ignores unknown optional fields. Это та же проблема, что required zone? Объясни.
13. **Развёрнутый ответ:** Willow: switch w2→w1 проверили на трёх requests со старым stored format, все прошли. Backup сделан до шести поздних writes; restore/replay не проверены. Составь recovery boundary.
14. **Развёрнутый ответ:** Willow: implementation estimate 2–4 person-days if contract clarified/access available, excludes review/recovery rehearsal/waiting. Monday requested target, not agreed. Eli accepts wording review, Noor offers ask about access. Напиши полный review 350–450 слов по 11–14.
15. **Развёрнутый ответ:** Напиши отдельный ответ на «Eli гарантирует Monday release» по Willow.
16. **Устная работа:** Партнёр неожиданно спрашивает, почему 422 здесь не просто правильная валидация. Ответь по требованию поддержки.
17. **Развёрнутый ответ:** Партнёр устно сообщает новый migration status с исправленным количеством и версией. До текста запиши обе версии.
18. **Развёрнутый ответ:** Задай вопрос о границе rehearsal в этом сообщении, сохрани реальный ответ и summary 70–100 слов.
19. **Устная работа:** Защити Willow рекомендацию; партнёр меняет условие: старые clients официально выведены из поддержки. Что надо пересмотреть?
20. **Развёрнутый ответ:** Исправь The fields has been remove yesterday. We wait by Friday. Условие: поля удалили вчера, ждём до пятницы.
21. **Развёрнутый ответ:** Новый Ash migration добавляет alias new_code, сохраняя old_code; оба accepted по контракту. Можно ли автоматически применить Willow вывод?
22. **Устная работа:** Попроси review плана; партнёр ограничивает роль или отказывается. Сохрани только реальную договорённость.
23. **Развёрнутый ответ:** Получи настоящий отзыв на original 14 и сохрани цитаты,2–3 редакторских решения.
24. **Развёрнутый ответ:** После feedback напиши полную отдельную редакцию Willow review 350–450 слов.
25. **Устная работа:** Скажи fourteen hours, затем явно исправь на forty hours в новом условном estimate и проверь read-back.
26. **Развёрнутый ответ:** Новый Pine conversion сохраняет первые 4 символа, удаляет остальные и original; других источников не дано. Можно восстановить точный original только из 4?
27. **Устная работа:** Партнёр добавляет Pine backup, но его дата/охват неизвестны. Ответь и запроси нужное evidence.
28. **Развёрнутый ответ:** Через семь дней получи новый brief не про event zone и напиши migration review 250–350 слов.
29. **Развёрнутый ответ:** Почему 10/10 закрытых не доказывает качество migration review и реальной речи?
30. **Развёрнутый ответ:** После разбора выбери 2–3 реальных пробела, адресные упражнения и новый контроль.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: has. Singular column, has been + V3.
2. Ключ: proceeds. Present в time clause обычного будущего.
3. Ключ: on. Depend on, не from.
4. Ключ: requires. Embedded clause, не вопросительная инверсия.
5. Ключ: no. Направление не симметрично.
6. Ключ: deprecated. Deprecated не означает фактическое removed.
7. Ключ: no. Возврат кода не evidence восстановления данных.
8. Ключ: to. Agree to do, не agreed on meaning.
9. Ключ: no. Effort, сроки и зависимости различаются.
10. Ключ: preserving. Propose + -ing в этой модели.
11. Возможный образец (не единственный ответ): w2 violates stated support for missing-zone old clients; six accepts do not cancel two rejected valid-old inputs; no approved change.. Не переносить Alder stale read или nullable storage на этот контракт.
12. Возможный образец (не единственный ответ): Нет, контракт parser допускает этот аспект optional addition; required zone меняет допустимый input. Wider semantics still need evidence.. Не объявлять каждое добавление breaking из старого кейса.
13. Возможный образец (не единственный ответ): Three request successes under old representation; no evidence for restoring six later writes, no universal safety claim.. Не утверждать lost six или restored six.
14. Возможный образец (не единственный ответ): Собственный полный текст goal/contracts/evidence/recovery / estimate/next checks, limited accepted actions.. Original, не переименованная модель Alder.
15. Возможный образец (не единственный ответ): Eli accepted wording review, not deployment/date; target requested, estimate conditional and scoped.. Вежливый конкретный ответ с различием action/commitment.
16. Возможный образец (не единственный ответ): w2 rejects missing-zone input required to remain supported; нужны реальный follow-up и read-back.. Не универсально любой 422 bug; без аудио pronunciation/fluency unknown.
17. Возможный образец (не единственный ответ): Фактический hidden source, исходное/исправленное, окончательный scope.. Без источника pending, при тексте text-supported.
18. Возможный образец (не единственный ответ): Неизвестная реплика, точное уточнение и сохранённый итог.. Не выдумывать agreed phase или результаты.
19. Возможный образец (не единственный ответ): Изменился support contract; прежнее основание обсуждается заново, но approval/evidence нового решения не выдумывать.. Реальный обмен и неизвестный follow-up.
20. Возможный образец (не единственный ответ): The fields were removed yesterday. We wait / will wait until Friday.. Plural passive и duration, не deadline by.
21. Возможный образец (не единственный ответ): Нет, removal/required-input change не заданы; examine own contract and unknown effects.. Не любое переименование означает фактическое удаление.
22. Возможный образец (не единственный ответ): Actual request,response,accepted scope; no agreement допустимо.. Без разговора pending; не назначать отсутствующих owners.
23. Возможный образец (не единственный ответ): Реальный feedback с основаниями принятия/отклонения.. До обсуждения pending, не образец якобы отзыва.
24. Возможный образец (не единственный ответ): Цельный revised document с теми же данными и обоснованными улучшениями.. Не changelog и не перезапись original.
25. Возможный образец (не единственный ответ): Реальное различение 14/40 и units; это новый условный estimate, не изменение фактов Willow.. Без звука фонетика unknown.
26. Возможный образец (не единственный ответ): Нет, оставшаяся строка не определяет отброшенные символы; не обещать reverse transform.. Не универсальная невозможность при наличии внешней копии.
27. Возможный образец (не единственный ответ): Уточнить snapshot и later writes/restore test, не считать все originals восстановленными.. Реальная новая реплика и ответ.
28. Возможный образец (не единственный ответ): Реальная дата/отсрочка, новые versions/contracts/results, самостоятельное применение.. До выполнения pending; переименование Willow недостаточно.
29. Возможный образец (не единственный ответ): Разные свидетельства, manual rubric и delayed application обязательны.. Не automatic CEFR/mastery.
30. Возможный образец (не единственный ответ): Цитаты собственных ответов, объяснение и план следующей проверки.. Если разбора нет, pending, не фиктивные ошибки.

</details>

### Вариант B

1. **Краткий ответ:** The records ___ been transformed. (has/have)
2. **Краткий ответ:** Keep the old field until the checks ___ finished. (have/will have)
3. **Краткий ответ:** Replace the legacy format ___ the proposed format. (with/to)
4. **Краткий ответ:** We recommend ___ the raw inputs. (keeping/to keep)
5. **Краткий ответ:** Fallback только при null сработает при непустом старом значении? yes/no.
6. **Краткий ответ:** 60 из 80 records copied: процент именно копирования? Только число.
7. **Краткий ответ:** Backup exists, restore untested. Recovery уже verified? yes/no.
8. **Краткий ответ:** The target is subject ___ review. (to/from)
9. **Краткий ответ:** I will send an update by noon = I will finish the migration by noon? yes/no.
10. **Краткий ответ:** The app was reverted without ___ its schema. (changing/change)
11. **Развёрнутый ответ:** Новое досье Hazel Images 4.1, note 9 Draft. Условие: сохранить точные originals всех synthetic PNG files. Old h1 читает PNG only. Candidate h2 создаёт lossy JPEG derivative и должен сохранять original отдельно. Четыре conversions completed; в трёх original сохранён byte-for-byte, в четвёртом исходный файл удалён, сохранён только JPEG. Других копий в досье не указано. Proposal enable candidate не approved. Сравни completion и выполнение требования.
12. **Развёрнутый ответ:** Hazel новый optional metadata tag: h1 по контракту ignores unknown optional metadata, но читает PNG only. Назови два разных аспекта совместимости.
13. **Развёрнутый ответ:** Hazel переключили h2→h1 и прочитали два retained PNG, оба успешно. JPEG-only object не открыли. Backup только proposed, не создан. Опиши recovery evidence.
14. **Развёрнутый ответ:** Hazel estimate 5–8 person-days implementation if retention policy/access agreed, excludes review/storage testing/waiting. Thursday tentative, no accepted date. Ren accepts review criteria; Ada offers ask storage owner. Напиши полный review 350–450 слов по 11–14.
15. **Развёрнутый ответ:** Коллега делит 8 person-days на 4 человека и обещает релиз через 2 дня. Ответь по условиям.
16. **Устная работа:** Партнёр спрашивает: «Почему 4 completed не 4 успешных?» Объясни и получи read-back.
17. **Развёрнутый ответ:** Прослушай новое устное сообщение о версии, формате и самопоправке времени. До транскрипта сохрани результат.
18. **Развёрнутый ответ:** Уточни, что собеседник действительно обязался сделать; запиши ответ и summary 70–100 слов.
19. **Устная работа:** Партнёр добавляет Hazel восстановленный original четвёртого файла из внешней проверенной копии. Как изменится вывод?
20. **Развёрнутый ответ:** Исправь We depends from access. Before we will remove it, we check readers. Будущий план.
21. **Развёрнутый ответ:** Новый Larch: lossless conversion, inverse applied, exact originals compared and matched for 5 samples. Это Hazel lossy unknown?
22. **Устная работа:** Попроси партнёра принять rehearsal; он предлагает только review. Уточни и зафиксируй границу.
23. **Развёрнутый ответ:** Получи настоящий отзыв на Hazel original 14, сохрани цитаты и 2–3 решения.
24. **Развёрнутый ответ:** После feedback сохрани полную отдельную редакцию Hazel review 350–450 слов.
25. **Устная работа:** Устно уточни fifteen/thirty person-days в новом estimate, затем попроси пересказ scope/exclusions.
26. **Развёрнутый ответ:** Новый Birch rollback успешно вернул app, но newer writes сохранены лишь в формате, который old app не читает. Напиши предупреждение.
27. **Устная работа:** Партнёр спрашивает, можно ли проигнорировать unknown consumer. Уточни support contract и риск.
28. **Развёрнутый ответ:** Через семь дней получи новое досье не про images и напиши review 250–350 слов.
29. **Развёрнутый ответ:** 100% шкалы T04 подтверждает реальную речь и всё техническое обучение?
30. **Развёрнутый ответ:** После разбора составь адресную практику 2–3 реальных пробелов и новый вариант проверки.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: have. Records — множественное число, поэтому have.
2. Ключ: have. Until + Present Perfect в обычной time clause.
3. Ключ: with. Replace A with B.
4. Ключ: keeping. Recommend + -ing в этой модели.
5. Ключ: no. Условие null не выполнено.
6. Ключ: 75. 60/80, не процент всего проекта.
7. Ключ: no. Наличие копии не результат проверки восстановления.
8. Ключ: to. Subject to review.
9. Ключ: no. Разные обязательства.
10. Ключ: changing. После without требуется форма -ing, не базовая форма.
11. Возможный образец (не единственный ответ): 4 conversions completed; 3 preserved exact original, 1 violates retention in inspected storage; JPEG cannot guarantee reconstruction of original; external copies unknown.. Не считать четвёртый unobserved как в performance; здесь удаление явно задано.
12. Возможный образец (не единственный ответ): Metadata addition tolerated by stated parser; JPEG-only object unreadable by h1. Optional metadata не исправляет file-format dependency.. Не blanket all changes breaking/safe.
13. Возможный образец (не единственный ответ): Two retained-PNG reads pass, no reconstruction evidence for deleted original, no existing backup assumed.. Не переносить Willow available backup.
14. Возможный образец (не единственный ответ): Собственный полный текст с 4 / 3 / 1, lossiness, reader formats, backup proposal и conditional estimate.. Original, не копия Alder; не придумывать изображений/credentials.
15. Возможный образец (не единственный ответ): Unknown start/availability/parallelism plus exclusions/dependencies; arithmetic not established calendar commitment.. Не утверждать, что параллельная работа всегда бесполезна.
16. Возможный образец (не единственный ответ): Conversion completion versus required exact-original retention; one explicit mismatch.. Реальная речь, без аудио pronunciation/fluency unknown.
17. Возможный образец (не единственный ответ): Фактический hidden source и исправленное значение с units/scope.. Без материала pending; при видимом тексте — text-supported.
18. Возможный образец (не единственный ответ): Реальный accepted action versus offer/target, не guessed owner.. Не фиктивный диалог.
19. Возможный образец (не единственный ответ): Для конкретного файла новое recovery evidence; исходный retention mismatch и остальные непроверенные пути не исчезают.. Реальная реакция на новую информацию, не игнорировать evidence.
20. Возможный образец (не единственный ответ): We depend on access. Before we remove it, we will check the readers.. Agreement, preposition, time clause.
21. Возможный образец (не единственный ответ): Нет, иные rules/evidence; five verified sample inversions, not all possible inputs.. Не отрицать реальные пять успехов.
22. Возможный образец (не единственный ответ): Actual exchange and limited acceptance, no invented deployment owner/date.. Без партнёра pending.
23. Возможный образец (не единственный ответ): Фактический review, обоснованное принятие/отклонение советов.. До обсуждения pending.
24. Возможный образец (не единственный ответ): Цельный revised text, факты не подменены улучшенным исходом.. Не только перечень исправлений.
25. Возможный образец (не единственный ответ): Реальная поправка и понятность; числа не заменяют Hazel 5–8.. Транскрипт не phonetic rating.
26. Возможный образец (не единственный ответ): App reverted, data accessibility still incompatible; separate recovery/reader evidence needed.. Возврат кода не автоматически утрата или восстановление всех данных.
27. Возможный образец (не единственный ответ): Настоящий вопрос/ответ, отсутствие evidence не разрешение нарушить known requirement.. Не выдумывать правило retirement.
28. Возможный образец (не единственный ответ): Реальная дата/отсрочка, новые semantics/states/results и самостоятельный вывод.. Не переименование Hazel, до выполнения pending.
29. Возможный образец (не единственный ответ): Нет, это заполнение/отправка; рубрики, аудио, отсрочка и другие топики отдельны.. Не automatic mastery или CEFR.
30. Возможный образец (не единственный ответ): Фактические цитаты и измеримые следующие действия.. Не фиктивные ошибки, без review pending.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Миграции и оценки: совместимость, восстановление и условия](../appendices/migration-language.md)
- [API-контракт: формы, состояния, ошибки и повторы](../appendices/api-contract-language.md)
- [Архитектурное решение: требования, варианты и компромиссы](../appendices/architecture-decisions.md)
- [Язык отчётов о работе, помощи и handover](../appendices/work-update-language.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [GitLab: Avoiding downtime in migrations](https://docs.gitlab.com/development/database/avoiding_downtime_in_migrations/)
- [Google AIP-180: Backwards compatibility](https://google.aip.dev/180)

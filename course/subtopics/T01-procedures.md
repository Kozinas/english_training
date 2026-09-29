# T01-procedures · Полная инструкция: шаги, проверка и восстановление

[Топик T01](../modules/T01.md). Сгенерировано из data/*.mjs.

Предпосылки: [T01-documentation](T01-documentation.md).

## Цели контроля

- Строить ясные команды, цели и проверочные вопросы
- Связывать исходные условия, шаги и ветвления
- Различать ожидаемый и проверенный результат
- Ставить предупреждения и выбирать безопасное продолжение
- Понимать устное сопровождение и поправки
- Создавать и полностью редактировать инструкции и handoff
- Вести партнёра и реагировать на новые затруднения

## Механизм

### Инструкция — задача с началом, результатом и границами

Список Click, Save, Next ещё не объясняет, чего человек должен достичь. Назови цель, исходный объект и границу: Copy three practice notes from Demo into empty Scratch. Другой пользователь может хотеть только preview, а не import или send; та же последовательность уже не подойдёт. В этой подтеме все продукты вымышлены, работа ведётся словами и в учебных ответах. Не нужны реальные файлы, чужие аккаунты, команды терминала, отправки или удаления. Полнота инструкции означает достаточность условий, действий, проверок и реакции на затруднение, а не максимально длинный список любых возможных действий.

### Подготовка должна предшествовать действию

Before you begin указывает, что нужно знать или иметь заранее: версию, выбранное пространство, исходные записи, назначение, разрешение на изменение. Не путай A destination is required с We have checked the destination. Требование задаёт условие, а проверка нуждается в наблюдении. Если начальное состояние не совпадает, не предлагай очистить неизвестные данные только ради упражнения. Спроси Which collection is open? Does it contain anything you want to keep? Сама необходимость подготовить копию не подтверждает, что копия создана или пригодна для восстановления. Уточнение цели может сделать часть условий ненужной, например write access для задачи только чтения.

### Ясный шаг: действие, объект и место

В нейтральном шаге используй базовую форму: Open Scratch. Check its name. Для запрета Do not confirm yet, не Not confirms. Укажи место до действия, если иначе непонятно, где оно выполняется: In the Import dialog, choose Preview. Названия сохраняй как на экране; русское объяснение не требует переводить сам label. Не прячь важное действие внутри длинного абзаца о причинах. One useful action per step — редакционный ориентир, не запрет связать короткий выбор меню с подтверждением. Разбивай шаг, когда между действиями есть проверка, отдельное условие или возможность остановиться, а не ради одинакового числа строк.

### Цель действия и средства: to не заменяет любую форму

To inspect the selection, open Preview использует to + base для цели. Не To inspecting и не for inspect. Сравни Save a package to use later и Save a package by choosing Save package: to use говорит зачем, by choosing — каким способом. В предупреждении Avoid sending a duplicate после avoid нужна -ing-форма, не avoid to send. Before confirming также принимает -ing, но Before you confirm — полноценное придаточное с подлежащим. Упрощай свою фразу, если сложная цепочка скрывает предмет действия: Check the recipient before sending the request часто яснее нескольких местоимений it.

### Порядок и зависимость: first, then, before, after

First и then отмечают очередность; than используется для сравнения. Однако одних first/then недостаточно: проверь, действительно ли второе действие зависит от первого. В Aster сначала подтверждают destination и preview, потом выбирают Confirm import. After the preview matches, confirm once задаёт условие перехода, а не утверждает, что preview уже совпал. Before you close the dialog, record the message требует сохранить сведения до их исчезновения. При перестановке шагов меняется не только стиль: предупреждение после замены данных уже не помогает предотвратить ошибку. Варианты порядка допустимы, если сохраняют все реальные зависимости.

### Условная ветвь и точка остановки

If the preview differs, stop and ask for help — команда для конкретного случая. Она не доказывает, что несоответствие произошло. Otherwise требует ясного предыдущего условия: If the names match, continue; otherwise, stop. Не оставляй otherwise после длинного абзаца с несколькими возможными условиями. Only after both checks pass ограничивает переход; отсутствие этого подтверждения не нужно заменять предположением. В обычной инструкции о будущем после if/before/after используй Present Simple: If the result is unclear, ask, не автоматическое will в каждом придаточном. Это изучаемая модель, не запрет всех специальных употреблений will.

### Ожидаемый результат и наблюдение — разные фразы

The preview should show three titles описывает ожидание по процедуре. The preview shows two titles сообщает наблюдение пользователя. Нельзя исправить его рассказ на three лишь потому, что так написано в образце. Сначала сравни expected и observed, затем выбери ветвь. Should в этой фразе не гарантирует результат. После выбранного действия может появиться сообщение, отличное от ожидаемого: это повод читать его точно, а не продолжать сценарий наизусть. В отчёте полезны отдельные строки Expected…, Observed…, Not yet checked…; ни одна из них не заменяет реальное наблюдение.

### Проверять то, что действительно связано с целью

Package saved подтверждает стадию сохранения по данному кейсу, не успешный import. Import complete — сообщение приложения; затем сравни destination name, count и ожидаемые titles. Одинаковое число записей не доказывает их идентичность, а совпадение имён не проверяет всё содержимое или вложения. Check that Scratch is empty — проверь нужное состояние; Check whether a request is listed — выясни неизвестное. В обоих embedded-предложениях обычный порядок subject + verb, не check is it empty. Опиши границу проверки честно: We checked the visible titles, not every character. Требование проверки зависит от цели, не от желания назвать всё завершённым.

### Предупреждение до последствия

Предупреждение должно назвать конкретное действие и последствие: Confirm import replaces the current collection. Check its name before continuing. Не достаточно написать Be careful после самого действия. Replaces и merges описывают разные изменения; нельзя пересказать оба как добавляет. Сообщи, когда нужно остановиться, и не обещай отмену без правила продукта. Notice, caution и warning используются издателями по своим определениям; цвет блока не универсальный закон английского. Здесь задача — ясное понимание последствия, а не построение юридического или производственного регламента безопасности.

### Процесс, неопределённость и повтор

Processing или Sending означает процесс, не завершённый результат. Wait until the result appears называет границу ожидания, но не обещает срок или успех. Если появляется Result unknown, нельзя автоматически заключить Nothing happened. Повтор действия может оказаться дополнительной отправкой или изменением; сначала посмотри документированный список/идентификатор без новой записи. В учебном кейсе правило прямо предписывает записать состояние и попросить помощь при неясности. Не придумывай таймаут, кнопку Retry или допустимость повтора для реального продукта. Один и тот же глагол repeat может означать повтор объяснения или операции — уточни, что требуется.

### Cancel, undo, restore и retry не синонимы

Cancel может закрывать ещё не отправленный preview; это не доказывает отмену уже полученного запроса. Undo относится к отмене действия, restore — к восстановлению некоторого состояния, retry — к новой попытке. Возможность и последствия каждого зависят от продукта и этапа. В Aster Cancel до подтверждения оставляет обе коллекции и package неизменными; после import такого обещания в кейсе нет. В Willow guide не описывает Undo после Send request. Скажи I cannot promise that Cancel will withdraw this request; let us check the documented recovery options. Не заменяй отсутствие документации уверенным There is no recovery anywhere.

### Восстановление начинается с факта, не догадки о причине

Попроси точное сообщение, текущий объект, последний подтверждённый шаг и видимый результат. What happened after you selected Preview? лучше, чем Why did you delete the file?, если удаление не установлено. Preview failed само не говорит, что исчезли исходные notes. Отделяй возможную причину от подтверждённой; предложенный check ещё не выполнен, план помощи ещё не успешное исправление. Если нужен специалист, передай короткий factual report, а не реальные пароли, токены или содержимое пользовательских файлов. В языковой симуляции можно описать гипотетическую проверку, но нельзя выдать её за доступ к настоящей системе.

### Сопровождение партнёра и проверка понимания

Перед следующим важным шагом попроси собеседника назвать объект, действие и ожидаемый результат. Tell me which collection is open проверяет предмет, Tell me what you will check before confirming — логику. Вежливое yes не всегда доказывает понимание. Партнёр вносит настоящую новую реплику: другой title, непонятный статус, смену цели; твой ответ должен учитывать её. Не исправляй только грамматику, игнорируя риск неправильного действия. Для речи произнеси отрицание и смысловой акцент: Do NOT send it again, the request is RECEIVED, not APPROVED. Проверять звучание можно только по аудио; транскрипт/ASR не доказывает pronunciation или oral fluency.

### Пауза, передача работы и отдельная редакция

Человек может остановиться в любой момент. Запиши last confirmed state, current object, unfinished check и следующий шаг. При возвращении проверь актуальное состояние: старый bookmark не гарантирует, что ничего не изменилось. Не запускай уже выполненный import/send заново лишь потому, что началась новая встреча. Handoff различает We checked…, We observed… и We still need…; сохраняет существенные поправки и неизвестное. После отзыва на инструкцию напиши полную переработанную версию отдельно от исходника. Журнал правок объясняет изменения, но не заменяет связный документ, по которому другой человек должен суметь действовать в учебной симуляции.

### Новая процедура и подтверждение навыка

Повтори механизмы на процедуре с другой целью и другим последствием, а не только поменяй имена. В контроле Elm добавляет notes, а не заменяет коллекцию; Oak создаёт запрос на review, а не импортирует файл. Так проверяется перенос условий, проверки и остановки. Через семь дней используй ещё новый материал и фактический диалог; до этого отложенный результат неизвестен. Три линии T01 опубликованы: интерфейсы, документация и полные процедуры. Это готовность заявленного содержания, не гарантия освоения каждого слова или сертификат ученика. Ручная оценка, новые задачи, реальное аудио и обратная связь остаются необходимыми; время занятия не сокращает объём.

## Примеры с разбором

- **Open the practice collection.** — Открой учебную коллекцию. Команда с base form.
- **Do not confirm the import yet.** — Пока не подтверждай импорт. Отрицание до base.
- **To inspect the selection, open Preview.** — Чтобы проверить выбор, открой Preview. To + base обозначает цель.
- **Avoid sending a duplicate.** — Избегай повторной отправки того же. После avoid действие выражается формой на -ing.
- **Before confirming, check the destination.** — До подтверждения проверь назначение. Before + -ing.
- **Before you confirm, check the destination.** — До того как подтвердишь, проверь назначение. Полное придаточное.
- **First check the name; then check the count.** — Сначала имя, потом количество. Then обозначает порядок.
- **This preview is clearer than the previous one.** — Этот preview понятнее предыдущего. Than относится к сравнению.
- **If the names differ, stop.** — Если имена отличаются, остановись. Ветвь, не факт несоответствия.
- **If the names match, continue; otherwise, ask for help.** — Если имена совпадают, продолжай; иначе попроси помощь. Ясная альтернатива.
- **Confirm only after both checks pass.** — Подтверждай только после двух успешных проверок. Условие перехода.
- **Wait until the status changes.** — Жди изменения статуса. Until задаёт границу, не длительность урока.
- **The preview should show three titles.** — Ожидается, что preview покажет три названия. Ожидание по инструкции.
- **The preview shows only two titles.** — Preview показывает только два названия. Фактическое наблюдение.
- **Check that Scratch is empty.** — Проверь, что Scratch пуста. That-clause с обычным порядком.
- **Check whether the request is listed.** — Проверь, есть ли запрос в списке. Выяснение неизвестного.
- **The package is saved, but the import is not complete.** — Package сохранён, но import не завершён. Две разные стадии.
- **This import replaces the current collection.** — Этот import заменяет текущую коллекцию. Последствие по кейсу.
- **It does not merge the notes.** — Он не объединяет заметки. Отрицание другого действия.
- **Read the warning before selecting Confirm.** — Прочитай предупреждение до Confirm. Предупреждение должно опередить действие.
- **Cancel closes the unsent preview here.** — Здесь Cancel закрывает неотправленный preview. Ограничение этапом/продуктом.
- **Cancel does not promise withdrawal after receipt.** — Cancel не обещает отмену после получения. Не придумывать универсальную функцию.
- **Select Confirm once.** — Выбери Confirm один раз. Число действий в кейсе.
- **Processing is not a completion message.** — Processing не сообщение о завершении. Процесс и результат.
- **The outcome is unknown, not definitely absent.** — Результат неизвестен, а не точно отсутствует. Unknown не no.
- **Record the reference before asking for help.** — Запиши идентификатор до обращения за помощью. Нужные сведения заранее.
- **Do not retry blindly.** — Не повторяй попытку вслепую. Остановка при неизвестном результате.
- **Which collection is open now?** — Какая коллекция открыта сейчас? Текущее состояние.
- **What happened after you opened Preview?** — Что произошло после открытия Preview? Вопрос без обвинительной предпосылки.
- **Could you tell me what the message says?** — Можешь сказать, что написано в сообщении? Embedded question без does внутри.
- **Tell me the next step and its expected result.** — Назови следующий шаг и ожидаемый результат. Проверка понимания логики.
- **I misread the label; I did not change the workspace.** — Я неверно прочитал подпись, а не сменил пространство. Исправление чтения не действие в системе.
- **We checked the titles, not every character.** — Мы проверили названия, не каждый символ. Граница проверки.
- **The request is received, but the review is pending.** — Запрос получен, но review ещё ожидается. Получение не одобрение.
- **Resume from the last confirmed state.** — Продолжи с последнего подтверждённого состояния. Не слепое повторение сначала.
- **Keep the original and the revised procedure separately.** — Храни исходник и редакцию отдельно. История письма сохраняется.
- **The proposed check has not been performed yet.** — Предложенная проверка ещё не выполнена. План не результат.
- **Although the count matches, the recipient is wrong, so the goal is not yet confirmed.** — Хотя число совпало, адресат неверен, поэтому цель ещё не подтверждена. Сложный пример: частичное совпадение не успех всей процедуры.

## Команда, цель и вопрос

1. **Краткий ответ:** Нейтральная команда: ___ the preview. (Open/Opens)
2. **Краткий ответ:** Do not ___ the collection. (replace/replaces)
3. **Краткий ответ:** To ___ the result, inspect the list. (check/checking)
4. **Краткий ответ:** Avoid ___ a duplicate. (creating/to create)
5. **Краткий ответ:** Before ___, record the reference. (leaving/leave)
6. **Краткий ответ:** After you ___, read the message. (confirm/confirms)
7. **Краткий ответ:** Check the source; ___ check the destination. (then/than)
8. **Краткий ответ:** Wait ___ the result appears. (until/than)
9. **Развёрнутый ответ:** Исправь For inspect the selection, opens Preview.
10. **Развёрнутый ответ:** Исправь Do not clicks Send before you checks the recipient.
11. **Развёрнутый ответ:** Построй проверку с whether: Is the request listed?
12. **Развёрнутый ответ:** Скажи одну инструкцию через Before you confirm и Before confirming.
13. **Развёрнутый ответ:** Напиши свой вопрос о точном сообщении после Could you tell me…
14. **Устная работа:** Произнеси Do not confirm и Confirm once; партнёр объясняет различие.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: Open. Императив без личного -s.
2. Ключ: replace. После do not базовая форма.
3. Ключ: check. To + base для цели.
4. Ключ: creating. После avoid используется -ing.
5. Ключ: leaving. Before как предлог принимает -ing.
6. Ключ: confirm. You не требует окончания -s.
7. Ключ: then. Then — очередность действий.
8. Ключ: until. Until — граница ожидания.
9. Возможный образец (не единственный ответ): To inspect the selection, open Preview.. Цель to + base и императив open.
10. Возможный образец (не единственный ответ): Do not click Send before you check the recipient.. Две базовые формы по разным основаниям.
11. Возможный образец (не единственный ответ): Check whether the request is listed.. Внутри не вопросительная инверсия.
12. Возможный образец (не единственный ответ): Before you confirm, read the warning. Before confirming, read the warning.. Понятный общий исполнитель, смысл сохранён.
13. Возможный образец (не единственный ответ): Could you tell me what the message says?. Новая ясная формулировка с обычным порядком внутри.
14. Возможный образец (не единственный ответ): Слышимые запрет и ограничение по фактическому аудио.. Письменная строка не проверка произношения.

</details>

## Полная последовательность и ветвление

1. **Краткий ответ:** Warning о замене данных ставить before или after Confirm?
2. **Краткий ответ:** Проверка destination должна precede или follow необратимое подтверждение?
3. **Развёрнутый ответ:** Упорядочь: confirm import; check target is Scratch/empty; preview expected titles; inspect imported titles.
4. **Развёрнутый ответ:** Напиши цель и starting conditions для Aster своими словами, не повторяя шаги.
5. **Развёрнутый ответ:** Раздели длинный шаг Open Import, choose a file, confirm, read warning, check destination на безопасные этапы.
6. **Развёрнутый ответ:** Построй ветви для совпавших/несовпавших titles, используя if/otherwise.
7. **Развёрнутый ответ:** Что неясно в Check everything. Otherwise, do it again? Перепиши.
8. **Развёрнутый ответ:** Пользователь хочет preview only, а инструкция заканчивается import. Какие шаги отменяются?
9. **Развёрнутый ответ:** Чем prerequisite отличается от expected result? Приведи по примеру.
10. **Развёрнутый ответ:** Составь 5–7 логически связанных шагов проверки fictional selection, без реального запуска.
11. **Развёрнутый ответ:** Можно ли объединить два коротких действия, если между ними нужен отдельный safety check? Объясни.
12. **Устная работа:** Партнёр пересказывает твою последовательность, поменяв warning и confirm местами. Объясни последствие и попроси новый пересказ.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: before. Предупреждение нужно до последствия.
2. Ключ: precede. Сначала проверка, затем действие.
3. Возможный образец (не единственный ответ): Check target; preview; confirm once; inspect result.. Ключевые зависимости важнее одного точного текста.
4. Возможный образец (не единственный ответ): Copy three practice notes from Demo into existing empty Scratch; no sharing/audio guarantee.. Цель не список всех кнопок.
5. Возможный образец (не единственный ответ): Предупреждение и проверка destination до confirm; file/preview/check отдельно.. Нельзя оставить позднюю проверку после изменения.
6. Возможный образец (не единственный ответ): If the titles match, continue; otherwise, stop and ask for help.. Чёткая ссылка otherwise на условие.
7. Возможный образец (не единственный ответ): Уточнить конкретные объекты/критерии и stop condition; повтор не автоматический.. Неизвестный результат нельзя лечить слепым repeat.
8. Возможный образец (не единственный ответ): Confirm import и последующая проверка результата импорта; preview не требует отправки/изменения.. Новая цель меняет допустимое продолжение.
9. Возможный образец (не единственный ответ): Scratch is empty до начала; после import ожидаются три нужных title.. Не превращать ожидание в исходный факт.
10. Возможный образец (не единственный ответ): Цель, подготовка, действие/preview, сравнение, ветвь, итоговый отчёт.. Количество строк само не доказывает полноту.
11. Возможный образец (не единственный ответ): Не прятать проверку; разделить так, чтобы можно было остановиться перед вторым действием.. Редакционные рекомендации не механический таймер.
12. Возможный образец (не единственный ответ): Реальная поправка порядка и проверка понимания.. Не только чтение исходного текста.

</details>

## Ожидание, наблюдение и граница проверки

1. **Краткий ответ:** Expected 3 titles, observed 2. Совпадает? yes/no.
2. **Краткий ответ:** Package saved само подтверждает import в Scratch? yes/no.
3. **Краткий ответ:** Processing равно Import complete? yes/no.
4. **Краткий ответ:** Received гарантирует review approved? yes/no.
5. **Развёрнутый ответ:** Раздели should show three и shows two: что ожидается и что сообщено?
6. **Развёрнутый ответ:** Почему одинаковый count не гарантирует нужные notes?
7. **Развёрнутый ответ:** Почему совпавшие titles не проверяют каждый символ content или audio?
8. **Развёрнутый ответ:** Напиши check с that для нужного пустого Scratch и check с whether для неизвестного request.
9. **Развёрнутый ответ:** В отчёте сказано Everything is verified; проверены только name и count. Исправь 3–4 предложениями.
10. **Развёрнутый ответ:** Создай таблицу Expected / Observed / Not checked для preview Lina+Layout+Search, где фактически только Lina+Layout.
11. **Развёрнутый ответ:** После Receipt W28 что искать в списке, кроме количества?
12. **Развёрнутый ответ:** Сравни We checked / We will check / We should check на одной задаче.
13. **Развёрнутый ответ:** Какая дополнительная проверка нужна для нового утверждения audio copied, если package excludes audio?
14. **Устная работа:** Партнёр говорит success по одному зелёному сообщению, но список не совпал. Попроси факты и уточни вывод.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Условие перехода не выполнено.
2. Ключ: no. Сохранение package и импорт в другую коллекцию — разные стадии.
3. Ключ: no. Процесс не завершённый результат.
4. Ключ: no. Приём и оценка различаются.
5. Возможный образец (не единственный ответ): Ожидаются три, наблюдаются два; нельзя переписать наблюдение как три.. Разбор несоответствия, не подгонка под образец.
6. Возможный образец (не единственный ответ): Другие записи могут дать то же число; нужно сравнить идентичность/названия.. Count и состав множества разные сведения.
7. Возможный образец (не единственный ответ): Это ограниченная проверка имён; содержимое и вложения требуют отдельных свидетельств.. Не обещать полный backup по списку.
8. Возможный образец (не единственный ответ): Check that Scratch is empty. Check whether a request is listed.. Обычный порядок слов внутри, смысл неизвестности сохранён.
9. Возможный образец (не единственный ответ): We checked the name and count. We have not checked every item or its content.. Не превращать ограниченную проверку во всеобщую.
10. Возможный образец (не единственный ответ): Ожидание двух titles, наблюдение одного, отправка/approval не проверены.. Не дописывать Search в observed.
11. Возможный образец (не единственный ответ): Reference, recipient и titles нужного запроса, а также фактический review status.. Один общий счётчик не идентифицирует запись.
12. Возможный образец (не единственный ответ): Сделанная проверка / план / рекомендация; не одинаковые свидетельства.. В собственном отчёте не выдумывать выполнение.
13. Возможный образец (не единственный ответ): В данном кейсе такое утверждение противоречит scope; не объявлять audio скопированным.. Не придумать успешную проверку отсутствующего содержимого.
14. Возможный образец (не единственный ответ): Реальное сопоставление цели/наблюдения и честный предел.. Цвет не заменяет содержание результата.

</details>

## Предупреждение, остановка и восстановление

1. **Краткий ответ:** Outcome unknown означает definitely nothing happened? yes/no.
2. **Краткий ответ:** Cancel unsent preview обещает undo после receipt? yes/no.
3. **Краткий ответ:** Replaces и merges означают одну операцию? yes/no.
4. **Краткий ответ:** Предложенный check уже считается выполненным? yes/no.
5. **Развёрнутый ответ:** Напиши warning перед Confirm import: последствия, условие, остановка.
6. **Развёрнутый ответ:** Preview failed: почему вопрос Why did you delete the notes? некорректен?
7. **Развёрнутый ответ:** Result unknown после Confirm: составь безопасное продолжение без второго Confirm.
8. **Развёрнутый ответ:** Сопоставь cancel, undo, restore, retry в четырёх коротких английских предложениях.
9. **Развёрнутый ответ:** Что записать перед обращением за помощью и что не присылать?
10. **Развёрнутый ответ:** После паузы note говорит Preview passed, current screen неизвестен. Что проверить прежде всего?
11. **Развёрнутый ответ:** Перепиши Try anything until it works в 4–6 предложениях ответственного сопровождения.
12. **Развёрнутый ответ:** Guide не описывает Undo после Send. Равносильно ли это Recovery is impossible everywhere?
13. **Развёрнутый ответ:** Придумай новый случай, где retry сообщения и retry операции различаются.
14. **Устная работа:** Партнёр предлагает удалить старые данные ради совпадения с примером. Уточни цель и объясни безопасную остановку.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Неизвестность не отрицательный результат.
2. Ключ: no. Другая стадия не покрыта правилом.
3. Ключ: no. Замена и объединение различаются.
4. Ключ: no. Предложение проверки ещё не доказывает, что проверка выполнена.
5. Возможный образец (не единственный ответ): Import replaces the current collection. Check its name and empty state; stop if they differ.. Конкретное последствие до действия.
6. Возможный образец (не единственный ответ): Он предполагает недоказанное удаление; спросить сообщение/объект/последний шаг.. Не приписывать причину ученику.
7. Возможный образец (не единственный ответ): Read/record the status, inspect documented destination without changes, ask for help if unclear.. Не обещать бесконечно ждать или повторять вслепую.
8. Возможный образец (не единственный ответ): Cancel may stop an unfinished action. Undo reverses an action when supported. Restore returns a saved state when possible. Retry attempts again.. Нужны оговорки продукта/этапа, не универсальные гарантии.
9. Возможный образец (не единственный ответ): Точный message, current object, last confirmed step, reference/observations; без passwords/tokens/личных данных.. Учебные кейсы используют только вымышленные сведения.
10. Возможный образец (не единственный ответ): Текущий объект/этап, не было ли уже confirm/send, фактический статус.. Не начинать заново автоматически.
11. Возможный образец (не единственный ответ): Остановиться, зафиксировать состояние, сверить документацию/цель, выполнить только безопасную согласованную проверку или попросить помощь.. Не выдумать разрешённые destructive actions.
12. Возможный образец (не единственный ответ): Нет: известно только отсутствие описанной функции в этом guide, нужна дальнейшая проверка.. Не превратить пробел источника в глобальный запрет.
13. Возможный образец (не единственный ответ): Повтор объяснения для понимания не повтор отправки request; уточнить, что именно repeat.. Самостоятельный понятный пример.
14. Возможный образец (не единственный ответ): Настоящий обмен с отказом от неподтверждённого изменения.. Никаких реальных удалений в упражнении.

</details>

## Чтение: Aster Pack

Aster Pack: a procedure with a destination check

Purpose and starting conditions
Aster Pack is a fictional note application, version 1.2. This exercise is a written simulation, not a request to operate real software. The goal is to copy three practice notes from Demo into an empty collection called Scratch and check the visible result. Demo contains Birch, Moss and Reed. Scratch already exists and is empty. The package contains note text and titles, but not audio attachments. No team sharing is required.

Prepare and export
1. Open Demo and check both its name and its three selected notes. If the name or selection differs, stop and clarify before exporting. Do not assume that a matching count identifies the right notes.
2. Choose Export selected, then inspect the preview. It should list Birch, Moss and Reed. Save the practice package as demo-check.json. In this scenario, Save package creates a separate local file and leaves Demo unchanged. Look for Package saved. This message confirms that a package was saved; it does not confirm that another collection has received or correctly displayed it.

Warning before import
In this fictional version, Confirm import replaces all notes in the currently open collection. It does not merge them. Therefore, check the destination before confirming. Never practise this procedure on a collection with wanted data. Cancel closes the import dialog without changing either collection or deleting the saved package. Preview also leaves the destination unchanged. These are explicit rules of this case, not promises about other applications.

Preview and confirm
3. Open Scratch and check that its name is Scratch and its current count is zero. If either check fails, stop. Do not clear a different collection to make its count match.
4. Open Import, select demo-check.json and choose Preview. Confirm that the preview contains the three expected titles. If Preview failed appears, do not confirm an import. Record the message and ask for help with the package. The message alone does not prove that the original notes have disappeared.
5. Only after the destination and preview checks, choose Confirm import once. While Processing is shown, wait. If the application reports Result unknown, inspect the destination without making another change and ask for help before retrying. Repeating an uncertain action is not the same as checking its result.
6. After Import complete, inspect Scratch. In this exercise, it should show three notes with the expected titles. Check Demo separately to confirm that its three source notes remain visible. Matching names and counts check those visible facts; they do not verify every character of the contents or the missing audio attachments.

A correction during practice
Mara reads the export steps correctly and sees Package saved. She then opens Import while Demo is still the current collection. Noor asks, 'Which collection are you about to replace?' Mara notices the problem before choosing Confirm import. She cancels the dialog, opens Scratch and checks zero notes there. The next preview lists the expected titles. She confirms once, waits for Import complete and checks both collections. Scratch now shows Birch, Moss and Reed, and Demo still shows its original three titles.

Their handoff records the completed checks and their limits. They have not proved that audio was copied, and they have not shared anything with the team. If they pause the exercise, they will record the last confirmed state, the current collection and the next unfinished check. Returning later does not require repeating a completed import blindly.

1. **Краткий ответ:** Сколько notes ожидается в Scratch после правильного import?
2. **Краткий ответ:** Как называется intended destination?
3. **Краткий ответ:** Confirm import replaces или merges current collection в Aster?
4. **Краткий ответ:** Package включает audio attachments? yes/no.
5. **Развёрнутый ответ:** Какие starting conditions даны до export/import?
6. **Развёрнутый ответ:** Что подтверждает Package saved и чего не подтверждает?
7. **Развёрнутый ответ:** Каковы последствия Cancel до Confirm в этом кейсе?
8. **Развёрнутый ответ:** Какие проверки идут перед Confirm и почему нужна не одна count?
9. **Развёрнутый ответ:** Что делать по процедуре при Preview failed?
10. **Развёрнутый ответ:** Что предписано при Result unknown?
11. **Развёрнутый ответ:** Какую ошибку Mara замечает благодаря вопросу Noor и когда?
12. **Развёрнутый ответ:** Что Mara действительно делает после обнаружения ошибки?
13. **Развёрнутый ответ:** Что удалось проверить в конце и какие пределы явно названы?
14. **Развёрнутый ответ:** Напиши 5–7 предложений continuation note после остановки на правильном preview до Confirm.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 3 / three. Три конкретных title, не только число.
2. Ключ: Scratch. Целевая коллекция Scratch отличается от исходной Demo.
3. Ключ: replaces. Явное последствие данного кейса.
4. Ключ: no. Scope ограничен note text/titles.
5. Возможный образец (не единственный ответ): Demo содержит Birch/Moss/Reed, Scratch существует и пустая, version 1.2, учебная цель без sharing.. Не реальная рабочая система.
6. Возможный образец (не единственный ответ): Сохранение отдельного package, не import или корректный display в destination.. Разделить стадии.
7. Возможный образец (не единственный ответ): Закрывает dialog без изменения коллекций и без удаления package.. Не переносить на undo после import.
8. Возможный образец (не единственный ответ): Scratch/name/zero и preview Birch/Moss/Reed; count не идентифицирует title.. Условия должны предшествовать изменению.
9. Возможный образец (не единственный ответ): Не подтверждать, записать сообщение, попросить помощь с package.. Не объявить оригиналы исчезнувшими.
10. Возможный образец (не единственный ответ): Осмотреть destination без нового изменения, получить помощь прежде retry.. Повтор операции не проверка результата.
11. Возможный образец (не единственный ответ): Import открыт при current Demo; замечает до Confirm, не после замены.. Предупреждение успело предотвратить шаг.
12. Возможный образец (не единственный ответ): Cancel, open Scratch/check zero, preview expected titles, confirm once, wait, inspect both collections.. Не сообщать несостоявшееся повреждение Demo.
13. Возможный образец (не единственный ответ): Три нужных title в Scratch и три исходных в Demo; не каждый символ и не audio.. Не заявить доказанную полноту backup.
14. Возможный образец (не единственный ответ): Current Scratch/empty, preview checked, confirm ещё не выполнен, следующий шаг условен актуальной проверкой.. Не смешать этот новый момент с финалом истории.

</details>

## Аудирование: Willow Review

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Willow Review: one narrator describes a fictional guided procedure.

Evan and Pia are practising in Willow Review. This imaginary interface is not connected to a customer system. Their goal is to prepare a review request in Sandbox and send it once after checking the destination and the preview. The recipient is Lina, and the intended entries are Layout and Search. The procedure says that the preview must show both titles and the recipient before sending.

Evan begins by saying that the workspace is Live. Pia asks him to read the workspace label again instead of continuing. He corrects himself: it says Sandbox. He has misread the label, not changed the workspace. Next, he says there are three entries in the source list, then counts the two visible titles and corrects the number to two. Pia asks him to read both titles aloud. A count alone would not identify the intended entries.

The first preview shows Lina and only Layout. Search is not selected. Pia does not tell Evan to send what he has and repair it later. She asks him to return to the selection and include Search. In this fictional interface, Back from preview changes no request because sending has not happened yet. Evan returns to the preview. It now shows Lina, Layout and Search. They check the recipient and both titles before continuing.

The warning says that Send request creates a review request, but it does not approve the entries. After Send request is selected, there is no documented Undo action in this guide. Cancel closes an unsent preview only; it does not withdraw a request that the service has already received. Pia explains this before Evan sends, not afterwards.

Evan selects Send request once. The status becomes Sending. He wants to press it again because no receipt is visible yet. Pia asks him to wait and read the status. A little later, the screen says Received and shows reference W28. They use that reference in the Request list. It contains one request for Lina with the two intended titles. The review status is Pending. This confirms the visible request and receipt, not Lina's reading or approval.

Pia then asks what they would do if the result were unknown. The practice rule is to inspect the Request list without sending again, record any visible reference and ask for help if the outcome is still unclear. An uncertain result is not proof that nothing happened. They do not invent an Undo button or send a duplicate to test it.

Finally, Evan reports the corrected workspace reading, the repaired selection, the single send and reference W28. Pia agrees with that account. She does not approve the entries or promise a future review by Lina. Before stopping, they note that the next task is to wait for a review result, not to send the same request again.

</details>

1. **Краткий ответ:** Какую workspace label Evan читает после поправки?
2. **Краткий ответ:** Сколько entries в source list после поправки?
3. **Краткий ответ:** Кто intended recipient?
4. **Краткий ответ:** Какой reference выдан после Received?
5. **Развёрнутый ответ:** Какие две исходные поправки делает Evan и что не делается с workspace?
6. **Развёрнутый ответ:** Что не совпадает в первом preview и как исправляется до Send?
7. **Развёрнутый ответ:** Что Back from preview меняет по правилам кейса?
8. **Развёрнутый ответ:** Когда Pia объясняет warning и что ограничено в Cancel?
9. **Развёрнутый ответ:** Почему Pia не предлагает повторить Send при Sending?
10. **Развёрнутый ответ:** Что показал Request list и чего Pending не доказывает?
11. **Развёрнутый ответ:** Какое продолжение только обсуждается для гипотетического unknown?
12. **Развёрнутый ответ:** С чем согласилась Pia в конце и что остаётся следующим шагом?

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: Sandbox. Live было ошибкой чтения, не переключением.
2. Ключ: 2 / two. Это доступные записи, не гарантия выбора обеих.
3. Ключ: Lina. Нужный человек проверяется до отправки.
4. Ключ: W28. Не W82 и не придуманная ссылка.
5. Возможный образец (не единственный ответ): Live→Sandbox при чтении и 3→2 entries; workspace не переключал.. Поправка рассказа не действие в системе.
6. Возможный образец (не единственный ответ): Есть только Layout, Search не selected; Back, включить Search, новый preview.. Не отправка неполного запроса с последующим ремонтом.
7. Возможный образец (не единственный ответ): Request ещё не создан, Back не меняет отправленный запрос.. Точная граница стадии.
8. Возможный образец (не единственный ответ): До Send; Cancel только unsent preview, не withdrawal после receipt.. Не придумывать Undo.
9. Возможный образец (не единственный ответ): Результат ещё не известен; повтор может быть дополнительным действием, сначала ждать/читать статус.. Sending не доказательство отсутствия запроса.
10. Возможный образец (не единственный ответ): Один запрос W28 для Lina с Layout/Search; Pending не reading/approval.. Получение и решение разные факты.
11. Возможный образец (не единственный ответ): Read-only inspect list/reference и помощь при неясности, не resend.. Это условный план, не реально случившийся failure.
12. Возможный образец (не единственный ответ): С точным отчётом, не approval/обещанием Lina; ждать review result, не send again.. Согласие ограничено репликой.

</details>

## Письмо: полная процедура и handoff

Aster находится во вкладке «Чтение», Willow — в «Аудировании», Hazel полностью задан в упражнении. Пиши учебные ответы: реальные импорты, отправки и удаления не требуются. Исходник и полная редакция сохраняются отдельно.

1. **Развёрнутый ответ:** Напиши полную инструкцию Aster на 150–190 слов: цель, подготовка, warning, шаги, проверки и stop conditions. Досье во вкладке «Чтение».
2. **Развёрнутый ответ:** Напиши warning с безопасной остановкой для Aster на 100–130 слов.
3. **Развёрнутый ответ:** По аудио составь handoff Willow на 100–140 слов.
4. **Развёрнутый ответ:** Напиши сообщение сопровождения при uncertain send на 100–140 слов.
5. **Развёрнутый ответ:** Напиши 90–120 слов редакторского разбора Import first, check destination later с полной исправленной логикой.
6. **Развёрнутый ответ:** Напиши 90–120 слов рефлексии по проверкам/паузе/новому диалогу.
7. **Развёрнутый ответ:** Новый Hazel Export: Sandbox содержит One/Two, цель — local package этих двух, без import/share. Preview ничего не пишет; Save package создаёт файл только под новым именем, existing name refused; после Package created проверь имя и два title в package preview. Напиши 150–190 слов инструкции с ветвью name refused.
8. **Развёрнутый ответ:** По Hazel напиши 5–7 предложений для новой цели preview only: что изменится в инструкции?
9. **Развёрнутый ответ:** Исправь в 6–8 предложениях We pressed Save, so import and backup are verified.
10. **Развёрнутый ответ:** Составь шаблон handoff из шести содержательных полей и заполни вымышленным несоответствием.
11. **Развёрнутый ответ:** После фактического отзыва полностью перепиши инструкцию Hazel из задания 7 в 150–190 словах; исходник сохрани отдельно.
12. **Развёрнутый ответ:** Напиши 4–6 предложений: как проверить names/count и как честно не обещать проверку всего content?
13. **Развёрнутый ответ:** Оформи 2–3 фактические ошибки своего текста: исходное → правка → причина → новый пример; если оценки нет, попроси проверку.
14. **Развёрнутый ответ:** Составь brief новой вымышленной процедуры: цель, исходное, действие, риск, ожидание и неизвестное — для будущего самостоятельного контроля.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Use this procedure only for the fictional Aster Pack exercise. The goal is to copy three practice notes from Demo into empty Scratch. Before starting, check that Scratch exists and contains no wanted data. First, open Demo and confirm the three selected titles: Birch, Moss and Reed. Preview the selection, save demo-check.json and look for Package saved. Next, open Scratch and check its name and zero count. Before confirming any import, remember that this version replaces the current collection. Open Import, choose the saved package and inspect its preview. Continue only if all three titles match. If the preview fails, stop and ask for help. Choose Confirm import once and wait for Import complete. Then check the titles in Scratch and inspect Demo separately. If the result is unknown, do not retry blindly. Record the current state and ask for help. These checks do not establish that audio attachments were copied.. Связная полная процедура с существенными условиями, не один перечень кнопок.
2. Возможный образец (не единственный ответ): Before choosing Confirm import, check the current collection. In this fictional version, importing replaces its notes instead of merging them. Our intended destination is Scratch, which should be empty. If another collection is open or Scratch contains any notes, stop and ask for clarification. Do not delete anything to make the exercise fit the instructions. You can cancel the unconfirmed import dialog here without changing either collection or deleting the package. However, that rule does not describe every application. After a confirmed import, do not assume that Cancel can reverse it. Find the documented recovery procedure and get appropriate help before making another change.. Последствие/условие до confirm, Cancel ограничен данным этапом.
3. Возможный образец (не единственный ответ): We practised the Willow Review procedure in a fictional interface. Evan corrected his reading of the workspace label from Live to Sandbox; he did not switch workspaces. He also corrected the source count from three to two. The first preview contained only Layout, so he went back and selected Search. The second preview showed Lina and both titles. Evan sent the request once and waited for Received with reference W28. We found one matching request in the Request list. Its review status was still Pending. We have confirmed those visible details, not Lina's reading or approval. The next task is to wait for the review result, not send another copy.. Сохранить поправки чтения/выбора, один Send, reference и Pending.
4. Возможный образец (не единственный ответ): Please stop before selecting Send again. The current status is uncertain, and we do not yet know whether the service received the request. First, read the exact message and check the Request list without changing it. If a matching request and reference are visible, record them and report what you found. If the outcome is still unclear, ask for help rather than creating another request. Do not use Cancel as a promised withdrawal: this guide only describes cancelling an unsent preview. Keep the intended recipient and titles in your report, but do not include real customer data. The proposed check is not evidence that recovery has already succeeded.. Фактическая проверка предлагается, не объявляется уже успешной.
5. Возможный образец (не единственный ответ): The first draft said, 'Import the file, then check the destination.' That puts the warning too late. Check the destination name and its empty state before confirming the import. The revised version also distinguishes Package saved from Import complete. The first message reports the export stage, not the result in Scratch. After import, inspect the expected titles and check the source separately. I have kept the original draft so the reason for each change remains visible. This revision improves the written procedure; it does not prove that a learner has followed it successfully in a new situation.. Правка порядка и границы результата, не только орфография.
6. Возможный образец (не единственный ответ): I need to separate instructions, expected results and observed results. A step can tell someone what to do without proving that they have done it. I should put an important warning before the action it concerns and give a clear stop condition. When returning after a pause, I will check the last confirmed state instead of starting every step again. For the next practice task, I will explain a different fictional procedure to a partner and respond to an unexpected mismatch. I will record the actual exchange and feedback, not an imagined successful outcome.. Конкретные приёмы, не придуманный результат будущего урока.
7. Возможный образец (не единственный ответ): Полный новый продукт с checks до/после, без overwrite или удаления старого файла.. Не переносить механику Aster import в export-only задачу.
8. Возможный образец (не единственный ответ): Остановиться после просмотра и проверки; Save/создание package не нужны.. Цель определяет границу, не стремление нажать все кнопки.
9. Возможный образец (не единственный ответ): Сохранить выполненное действие отдельно от message/проверенного результата; import/backup не подтверждены.. Не придумывать недостающие наблюдения.
10. Возможный образец (не единственный ответ): Цель, объект, последний подтверждённый шаг, expected/observed, unknown, следующий безопасный шаг.. Не использовать данные реального клиента.
11. Возможный образец (не единственный ответ): Полная исправленная инструкция и причины существенных правок.. Отзыв не выдумывать, журнал не заменяет текст.
12. Возможный образец (не единственный ответ): Явные объекты/действия/граница проверки, without overclaiming.. Не подменять видимые данные полным QA.
13. Возможный образец (не единственный ответ): Реальные цитаты и адресная практика либо pending.. Не приписывать себе фиктивную оценку.
14. Возможный образец (не единственный ответ): Достаточно конкретные данные без готового полного ответа на будущий тест.. Не реальный план удаления/миграции рабочих данных.

</details>

## Речь: сопровождение и неожиданный вопрос

1. **Устная работа:** Партнёр хочет Aster import, но называет current Demo. Уточни и помоги остановиться до Confirm.
2. **Устная работа:** Проведи партнёра по полному Aster; он вносит одно заранее не известное несоответствие.
3. **Устная работа:** Партнёр повторяет порядок confirm→warning. Объясни последствие и попроси пересказать правильный порядок.
4. **Устная работа:** По Willow партнёр видит только Layout. Выясни состояние и согласуй следующий шаг до отправки.
5. **Устная работа:** После Sending партнёр хочет повторить Send. Объясни разницу ожидания и отрицательного результата.
6. **Устная работа:** Партнёр просит отменить уже Received через Cancel. Объясни ограничение guide и запроси помощь.
7. **Устная работа:** Произнеси not received / received but not approved, затем попроси партнёра объяснить контраст.
8. **Устная работа:** Сравни Preview should show three / Preview shows two; партнёр называет expected/observed.
9. **Устная работа:** Вернитесь к симуляции после паузы: партнёр сообщает новый текущий экран. Выбери продолжение по состоянию.
10. **Устная работа:** Партнёр меняет цель Hazel с save на preview only. Пересмотри границу инструкции и проверь пересказ.
11. **Развёрнутый ответ:** После диалога запиши фактическую неожиданную реплику, свою реакцию и оставшийся unknown.
12. **Устная работа:** На новом собственном brief проведи партнёра по задаче; он задаёт неожиданный вопрос о доказательстве успеха.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Реальный ответ на новое состояние, не прочтение всех ролей.. Учебная симуляция без настоящих изменений.
2. Возможный образец (не единственный ответ): Адресная ветвь/вопрос и проверка итогового понимания.. Не продолжать заученный текст поверх ошибки.
3. Возможный образец (не единственный ответ): Настоящее уточнение и новая реплика партнёра.. Один yes не достаточная проверка.
4. Возможный образец (не единственный ответ): Вернуться к selection/повторно проверить preview по кейсу.. Не утверждать, что Search уже выбран.
5. Возможный образец (не единственный ответ): Реальная остановка/уточнение с неизвестностью.. Не обещать время ответа сервиса.
6. Возможный образец (не единственный ответ): Не выдумывать функции или успешную отмену.. Протокол общения остаётся учебным.
7. Возможный образец (не единственный ответ): Слышимость отрицания и фокус по аудио.. Транскрипт не заменяет фонетическую проверку.
8. Возможный образец (не единственный ответ): Реальное различение и уточнение по звуку.. Нормативный UK/US допускается.
9. Возможный образец (не единственный ответ): Реальная проверка last confirmed/current, не повтор всего сначала.. Пауза не уменьшает нужные проверки.
10. Возможный образец (не единственный ответ): Новая цель отменяет ненужные изменения.. Не продолжать сохранение ради готового сценария.
11. Возможный образец (не единственный ответ): Точный краткий протокол взаимодействия.. Текст не подтверждает pronunciation/oral fluency.
12. Возможный образец (не единственный ответ): Настоящее применение/уточнение и честная граница.. Не имитация независимого партнёра собственным монологом.

</details>

## Смешанное повторение и перенос

1. **Краткий ответ:** Avoid ___ the same request twice. (sending/to send)
2. **Краткий ответ:** Check the recipient, ___ send. (then/than)
3. **Краткий ответ:** Expected 2 titles, observed 2 других title. Цель подтверждена? yes/no.
4. **Краткий ответ:** Result unknown гарантирует безопасный retry? yes/no.
5. **Развёрнутый ответ:** Исправь Check does the list contain the request before you tries again.
6. **Развёрнутый ответ:** Построй план новой preview-only процедуры с условиями и проверкой, но без отправки.
7. **Развёрнутый ответ:** Раздели правило, ожидаемый результат, выполненный шаг и observed result на четырёх своих примерах.
8. **Развёрнутый ответ:** После паузы есть receipt, но reviewer unknown. Как продолжить без повторной отправки?
9. **Развёрнутый ответ:** Через 7 дней напиши 150–190 слов новой инструкции с другим риском и проверь её в фактическом разговоре.
10. **Устная работа:** Через 7 дней партнёр задаёт неожиданный вопрос по новой инструкции; дай адресный ответ и проверь пересказ.
11. **Развёрнутый ответ:** Почему expanded T01 и полный счётчик не доказывают качество твоего письма и речи?
12. **Развёрнутый ответ:** По реальному разбору выбери один пробел и сформулируй адресную практику с новым контролем.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: sending. После avoid действие выражается формой на -ing.
2. Ключ: then. Порядок, не сравнение.
3. Ключ: no. Совпадает число, не состав.
4. Ключ: no. Нужно выяснить исход и правила повтора.
5. Возможный образец (не единственный ответ): Check whether the list contains the request before you try again.. Обычный внутренний порядок и согласование.
6. Возможный образец (не единственный ответ): Цель/исходное/preview/сравнение/stop branch/summary.. Не добавлять Send из привычки.
7. Возможный образец (не единственный ответ): Четыре разных роли сведений в контексте.. Не превращать образец output в свой результат.
8. Возможный образец (не единственный ответ): Проверить запись по receipt, уточнить адресата и помощь при несовпадении.. Не считать сохранённую заметку полной проверкой.
9. Возможный образец (не единственный ответ): Новый материал/исходник/отзыв/редакция либо pending до выполнения.. Не переименование Aster/Willow.
10. Возможный образец (не единственный ответ): Реальное отложенное взаимодействие по аудио.. Будущий успех не записывается заранее.
11. Возможный образец (не единственный ответ): Publication scope и заполненность раздельны с рубрикой, звуком и переносом.. Не назначать CEFR по проценту.
12. Возможный образец (не единственный ответ): Конкретные свидетельства либо честный запрос проверки.. Время занятия не сокращает критерии.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** Do not ___ the operation again yet. (start/starts)
2. **Краткий ответ:** To ___ the selection, open its preview. (inspect/inspecting)
3. **Краткий ответ:** Before ___ a request, check the recipient. (sending/send)
4. **Краткий ответ:** Check the names; ___ confirm. (then/than)
5. **Краткий ответ:** Expected two entries, observed one. Проверка совпадения пройдена? yes/no.
6. **Краткий ответ:** Outcome unknown доказывает, что операция не выполнялась? yes/no.
7. **Краткий ответ:** Submitted автоматически означает Approved? yes/no.
8. **Краткий ответ:** Warning о последствиях подтверждения нужен before или after подтверждения?
9. **Развёрнутый ответ:** Новый Elm Cards: цель добавить Alpha/Beta в Practice, где уже есть Old. В этой версии Preview ничего не меняет, Add notes добавляет, НЕ заменяет; дубликаты блокируют добавление. После успешного добавления ожидаются Old/Alpha/Beta, статус Added. Построй порядок из подготовки, preview, действия и проверки.
10. **Развёрнутый ответ:** В Elm показывается Added, но в списке только Old/Alpha. Что сообщить и чего нельзя объявить?
11. **Развёрнутый ответ:** Elm сообщает Duplicate title before add. Составь безопасный ответ без удаления Old и без обещания автоматического skip.
12. **Развёрнутый ответ:** Напиши полную инструкцию Elm на 150–190 слов: цель, начальное Old, preview, запрет продолжать при duplicate, одно добавление, статус/имена и пределы проверки.
13. **Развёрнутый ответ:** Напиши 90–120 слов handoff: preview верный, Add notes нажата один раз, статус Result unknown; список ещё не проверен.
14. **Устная работа:** Проведи партнёра по Elm в словесной симуляции. Во время диалога он сообщает Duplicate title и добавляет одну заранее не известную тебе деталь. Измени продолжение и проверь пересказ.
15. **Устная работа:** Партнёр хочет очистить Practice ради совпадения с прошлым уроком. Объясни отличие adds от replaces и согласуй цель.
16. **Развёрнутый ответ:** Партнёр готовит новое скрытое устное сообщение Elm: фактический этап, текущий статус и один отсутствующий title. Запиши три факта до показа текста.
17. **Развёрнутый ответ:** Партнёр устно исправляет один предыдущий факт. Запиши исходное/исправленное и какое решение теперь допустимо.
18. **Развёрнутый ответ:** Исправь Check is the destination correct before you confirms.
19. **Развёрнутый ответ:** Коллега проверил только число 3. Почему это не проверка именно Old/Alpha/Beta или всего содержимого?
20. **Устная работа:** Произнеси Do NOT add it again / It has been added. Партнёр определяет запрет и результат, затем задаёт вопрос.
21. **Развёрнутый ответ:** После перерыва заметка говорит Preview checked, current state unknown. Что выяснить до следующего действия?
22. **Развёрнутый ответ:** Получив реальный отзыв на задание 12, перепиши всю инструкцию в 150–190 словах; исходник и существенные причины правок отдельны.
23. **Развёрнутый ответ:** Исправь порядок: Add first; warn that duplicates block the operation afterwards.
24. **Устная работа:** Партнёр задаёт неожиданный вопрос о том, что можно доказать после Added. Ответь по Elm и проверь его пересказ.
25. **Развёрнутый ответ:** Через 7 дней создай 150–190 слов инструкции для другой новой учебной процедуры и фактически проверь её с партнёром.
26. **Развёрнутый ответ:** Что остаётся проверить после 8/8 коротких ответов и заполнения всего топика?

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: start. Отрицательный императив с base.
2. Ключ: inspect. Цель: to + base.
3. Ключ: sending. Before как предлог принимает -ing.
4. Ключ: then. Then обозначает следующий шаг, не сравнение.
5. Ключ: no. Наблюдение не совпадает с условием.
6. Ключ: no. Неизвестность не отрицательный результат.
7. Ключ: no. Отправка и решение разные этапы.
8. Ключ: before. Предупреждение должно помочь до действия.
9. Возможный образец (не единственный ответ): Проверить цель/Practice/исходное Old, preview Alpha/Beta, отсутствие дубля; Add notes один раз, затем Added и три нужных имени.. Не переносить требование empty/replace из Aster.
10. Возможный образец (не единственный ответ): Сообщить статус и неполный наблюдаемый список; цель пока не подтверждена, нужны проверка/помощь.. Не выдумать Beta или полный успех по статусу.
11. Возможный образец (не единственный ответ): Остановиться, записать сообщение, уточнить намерение/документированный способ обработки дубля.. Кейс не задаёт overwrite/skip, не изобретать их.
12. Возможный образец (не единственный ответ): Самостоятельный полный текст с ветвлением и фактическими условиями задания 9.. Не копия процедуры replace; инструкция не отчёт о выполнении.
13. Возможный образец (не единственный ответ): Честно отделить выполненный шаг от неизвестного исхода; предложить наблюдение и помощь без второго добавления.. Не вписать успешную проверку задним числом.
14. Возможный образец (не единственный ответ): Реальный вопрос/сообщение партнёра и адресная остановка.. Не читать обе роли вместо взаимодействия.
15. Возможный образец (не единственный ответ): Реальное уточнение; Old по условию должно сохраниться.. Никаких реальных удалений.
16. Возможный образец (не единственный ответ): Реально услышанное с последующей сверкой.. Без партнёра pending; заранее прочитанное text-supported.
17. Возможный образец (не единственный ответ): Реальная поправка, соответствующий следующий шаг, без догадок.. Текст не самостоятельное аудирование.
18. Возможный образец (не единственный ответ): Check whether the destination is correct before you confirm.. Внутренний порядок subject + verb; you confirm без -s.
19. Возможный образец (не единственный ответ): Три другие записи тоже дают 3; нужны имена, а содержимое отдельно от имён.. Не преувеличивать глубину проверки.
20. Возможный образец (не единственный ответ): Понятные отрицание/формы по фактическому звуку.. ASR не оценивает фонетику, без аудио unknown.
21. Возможный образец (не единственный ответ): Текущий объект, был ли Add после заметки, наблюдаемый статус/список; не повторять вслепую.. Закладка не гарантия неизменности среды.
22. Возможный образец (не единственный ответ): Полная редакция, а не журнал вместо текста.. Отзыв не фабриковать, до него pending.
23. Возможный образец (не единственный ответ): Предупреждение/проверка до Add, затем действие только при допустимом результате.. Функция предупреждения важнее вставки слова first.
24. Возможный образец (не единственный ответ): Адресный ответ о фактах/ограничениях, не заученный монолог.. Текст сам не подтверждает oral fluency.
25. Возможный образец (не единственный ответ): Новый материал, реальное применение/отзыв и дата либо pending.. Переименование Elm не новый перенос.
26. Возможный образец (не единственный ответ): Качество открытого письма/речи, реальное взаимодействие и отложенный перенос по рубрике.. Expanded/процент не mastery или CEFR.

</details>

### Вариант B

1. **Краткий ответ:** ___ the outcome before trying again. (Check/Checks)
2. **Краткий ответ:** Do not ___ a second request. (create/creates)
3. **Краткий ответ:** After ___ the reference, inspect the list. (recording/record)
4. **Краткий ответ:** Wait ___ the confirmation appears. (until/than)
5. **Краткий ответ:** Preview should show two documents; it shows one. Совпадение подтверждено? yes/no.
6. **Краткий ответ:** Cancel для unsent preview гарантирует withdrawal уже полученного запроса? yes/no.
7. **Краткий ответ:** Received доказывает, что reviewer прочитал документ? yes/no.
8. **Краткий ответ:** Проверка получателя при необратимой отправке нужна before или after Send?
9. **Развёрнутый ответ:** Новый Oak Requests: Demo workspace, reviewer Sol, документы Scope/Test. Preview не отправляет; Queue создаёт запрос один раз, затем Receipt O41 и запись с Sol/двумя titles; review Pending. Undo после Queue не документирован. Построй полную последовательность.
10. **Развёрнутый ответ:** Oak показывает Receipt O41, но запись с другим reviewer. Как оценить результат?
11. **Развёрнутый ответ:** После Queue status Unknown. Друг предлагает Queue ещё раз, затем Cancel. Напиши ответ.
12. **Развёрнутый ответ:** Напиши инструкцию Oak 150–190 слов: исходные условия, preview, предупреждение про отсутствие документированного Undo, Queue/receipt, сравнение списка и stop condition.
13. **Развёрнутый ответ:** Напиши handoff 90–120 слов: Demo/Sol/оба titles проверены, Queue один раз, Receipt O41, Pending; чтение Sol неизвестно.
14. **Устная работа:** Партнёр в Oak сообщает неправильного reviewer в preview. Проведи уточнение и согласуй исправление до Queue.
15. **Устная работа:** После Receipt партнёр просит гарантировать отмену через Cancel. Объясни предел guide и получи пересказ.
16. **Развёрнутый ответ:** Партнёр готовит ДРУГОЕ скрытое сообщение Oak: этап, reference, observed mismatch. После прослушивания запиши детали и вопрос.
17. **Развёрнутый ответ:** Партнёр устно исправляет reference или объект и добавляет ограничение. Перескажи новый итог без потери прежнего верного.
18. **Развёрнутый ответ:** Исправь Could you confirms what does the message say?
19. **Развёрнутый ответ:** Почему две записи в списке не подтверждают отсутствие duplicate без проверки reference/получателя/названий?
20. **Устная работа:** Произнеси Don't queue it again / The request is queued; партнёр различает действие и статус, потом уточняет деталь.
21. **Развёрнутый ответ:** После перерыва осталось Receipt O41, review pending. Как продолжить без повторной отправки?
22. **Развёрнутый ответ:** После содержательного отзыва перепиши всю инструкцию задания 12 в 150–190 словах, сохранив оригинал отдельно.
23. **Развёрнутый ответ:** Раздели The preview should show two documents и The preview shows two documents. Где правило, где наблюдение?
24. **Устная работа:** Партнёр неожиданно меняет цель: подготовить preview, но не отправлять. Адаптируй процедуру и проверь его понимание.
25. **Развёрнутый ответ:** Через 7 дней напиши 150–190 слов для другой новой процедуры с иным риском и проверь её фактически в диалоге.
26. **Развёрнутый ответ:** Почему готовность опубликованного T01 и 100% заполнения не подтверждают освоение ученика?

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: Check. Нейтральный императив с base.
2. Ключ: create. Отрицательное повеление: do not + начальная форма глагола.
3. Ключ: recording. Предлог after с -ing в заданной модели.
4. Ключ: until. Условие завершения ожидания, не сравнение.
5. Ключ: no. Expected и observed различаются.
6. Ключ: no. Граница функции не распространяется на другой этап.
7. Ключ: no. Получение сервисом не чтение человеком.
8. Ключ: before. Условие следует проверить до отправки.
9. Возможный образец (не единственный ответ): Проверить Demo/Sol/оба документа, preview; предупреждение до Queue; Queue один раз, дождаться receipt, проверить список/статус.. Не заменить проверку получателя одной галочкой.
10. Возможный образец (не единственный ответ): Получение подтверждено, правильность адресата нет; сообщить несоответствие и остановиться.. Не объявлять цель выполненной по одному receipt.
11. Возможный образец (не единственный ответ): Не повторять; проверить список/идентификатор без изменения, записать наблюдение и обратиться за помощью; Cancel не доказанный rollback.. Не выдумывать возможность отмены.
12. Возможный образец (не единственный ответ): Полный новый текст на основе задания 9.. Не переносить механику импорта или добавления карточек.
13. Возможный образец (не единственный ответ): Выполненные проверки, ограниченный результат, следующий шаг без duplicate.. Не объявить review approved.
14. Возможный образец (не единственный ответ): Реальная новая реплика и адресное изменение продолжения.. Нельзя заменять фактический обмен сценарием за двоих.
15. Возможный образец (не единственный ответ): Неизвестная отмена честно обозначена; нужен documented recovery/help.. Никаких реальных сторонних сообщений.
16. Возможный образец (не единственный ответ): Фактическое новое аудирование со сверкой после ответа.. Без звука pending; ранее видимый текст text-supported.
17. Возможный образец (не единственный ответ): Реальная поправка и граница утверждения.. Не повтор Willow или варианта A как новый контроль.
18. Возможный образец (не единственный ответ): Could you confirm what the message says?. Base после could; subject + verb внутри.
19. Возможный образец (не единственный ответ): Количество не идентичность; нужны детали и связь с конкретным запросом.. Не утверждать полноту серверной проверки из UI.
20. Возможный образец (не единственный ответ): Понятное отрицание и окончания по реальному аудио.. Транскрипт не pronunciation assessment.
21. Возможный образец (не единственный ответ): Проверить текущую запись/статус по O41 и ждать/уточнять review, не создавать запрос заново.. Сохранённая заметка задаёт точку проверки, не вечное состояние.
22. Возможный образец (не единственный ответ): Полная редактура по действительному отзыву.. Список замечаний без текста не новая инструкция.
23. Возможный образец (не единственный ответ): Should — ожидаемое по процедуре; shows — сообщённый текущий факт.. Смысл should здесь ожидание, не одинаковый отчёт.
24. Возможный образец (не единственный ответ): Реальная смена цели прекращает шаги Queue/receipt.. Не продолжить отменённую отправку ради завершения сценария.
25. Возможный образец (не единственный ответ): Новое независимое применение/дата/отзыв либо pending.. Не менять только имя Oak в прежнем тексте.
26. Возможный образец (не единственный ответ): Publication scope и качество навыков различны; нужны ручная рубрика, звук, взаимодействие, новый отложенный контроль.. Не присваивать CEFR по счётчику.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Полная инструкция: шаги, проверка, предупреждение и восстановление](../appendices/procedure-language.md)
- [Чтение документации: условия, версии, параметры и пути](../appendices/documentation-language.md)
- [Язык интерфейса: элементы, действия и статусы](../appendices/interface-language.md)
- [Правила, советы и условия: карта A203](../appendices/rules-conditions.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [Google developer style guide: procedures](https://developers.google.com/style/procedures)
- [Microsoft style guide: step-by-step instructions](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)
- [Google developer style guide: notices and warnings](https://developers.google.com/style/notices)

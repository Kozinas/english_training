# T02-report · Bug report: воспроизведение, факты и ожидаемый результат

[Топик T02](../modules/T02.md). Сгенерировано из data/*.mjs.

Предпосылки: [T01-procedures](T01-procedures.md), [B101-continuous](B101-continuous.md), [B104-questions](B104-questions.md).

## Цели контроля

- Выбирать формы и время для шагов и наблюдений
- Передавать окружение, входные данные и исходные условия
- Строить воспроизводимую последовательность
- Отделять правило и ожидание от фактического результата
- Ограничивать выводы частотой, влиянием и свидетельствами
- Понимать устный отчёт и сохранять поправки
- Писать и полностью редактировать самостоятельный отчёт
- Уточнять отчёт в реальном обмене репликами

## Механизм

### Зачем нужен bug report и что означает issue

Отчёт помогает другому человеку понять наблюдение и проверить его в названных условиях. It is broken не объясняет, что именно произошло: приложение закрылось, перестало отвечать или показало неверный список? Bug — предполагаемый дефект, issue — более широкое слово для вопроса или задачи в tracker. Наличие issue не доказывает, что ошибка уже подтверждена, назначена или исправлена. В этой подтеме ты работаешь с вымышленными досье и учебными ответами, не создаёшь реальные обращения и не запускаешь операции над своими данными. Языковая цель — точный полный документ и понятный разговор, а не количество заполненных полей ради галочки.

### Заголовок называет симптом, а не придуманную причину

Сравни Database destroys everything и New draft missing after reload despite Saved message. Во втором есть объект, симптом, условие и важный контраст, но нет недоказанной внутренней причины. Заголовок может быть краткой именной конструкцией: Empty-title draft missing after reload; в основном тексте строй полные предложения: The new draft is missing after reload. Не описывай только желаемое исправление Add a cache reset button вместо наблюдаемой проблемы. Нейтральный тон не означает смягчить реальный ущерб: называй известное влияние точно, сохраняя масштаб и неизвестное. Не выбирай эмоциональные always/never/all вместо числа фактических попыток.

### Симптом и полезные сочетания

The app crashes означает аварийное завершение, freezes — перестаёт отвечать; неверный текст сам по себе не crash. A draft is missing from the list описывает отсутствие в списке, не доказывает удаление из базы. Говори reproduce an issue, report a bug, observe a symptom, resolve an issue. Actual results — фактические результаты, не «актуальные»: для текущей версии нужно current version. Current и latest тоже не всегда совпадают: установленное у человека не обязательно самое новое. Bug/report/attempt — исчисляемые: a report, three attempts. Information/evidence обычно неисчисляемые: some evidence, two pieces of information, не автоматически two evidences в обычном отчёте.

### Окружение: несколько версий, а не одна цифра

Version, build, browser, operating system, account type и settings относятся к разным объектам. Mica 3.2 / build 320 / Lumen 6 / DeskOS 8 нельзя сократить до version 6: читатель потеряет предмет цифры. Полезная конструкция I tested version 3.2 in Lumen 6 on DeskOS 8. Назови также relevant settings и данные, если они влияют на повторение; не присылай все сведения об устройстве без цели. I have not tested another browser сохраняет неизвестность. Два устройства с одной программной конфигурацией — не две browser families. Наиболее новая версия и схема version/build зависят от реального продукта; учебные числа здесь не рекомендация обновлять систему.

### Исходное состояние и входные данные

Preparation отвечает на вопрос, с чего начинается проверка: новая training account, выбранная workspace, сохранённая контрольная note, пустой Title и непустой Body. Empty title не значит empty draft; empty list не значит no data anywhere. Сохрани точный контраст значений: Leave Title empty and enter Sample line in Body. Если тестер каждый раз сбрасывал учебное состояние, это существенно для сравнения; если неизвестно — задай вопрос, не добавляй reset от себя. Не предлагай очищать реальный профиль или клиентскую базу ради учебного воспроизведения. Вымышленный минимальный пример должен сохранять условия симптома, а не убирать их вместе с лишними деталями.

### Шаги: понятный объект, порядок и точка наблюдения

Используй нейтральный imperative: Open the draft list. Select Save once. После do not нужна base form: Do not enter a title. Назови действие и объект, особенно когда одновременно видны editor, note и list. Replace it with this не помогает без референции. Затем укажи проверку после конкретного действия: After reloading, look for the new draft. After you reload — другой нормативный способ с полноценным придаточным. Не переставляй save/reload ради красивого списка; это меняет условия. Число шагов определяется нужными зависимостями, не обязательными пятью строками. Повторение понятно описанного сбоя в симуляции не разрешает повторять опасные операции в реальной системе.

### Present Simple, Past Simple и Perfect в одном отчёте

The list does not show the draft описывает наблюдаемое поведение; после does not стоит show, не shows. I reproduced it yesterday сообщает конкретную прошлую проверку с законченным временем. I have reproduced it in this setup подводит итог доступного опыта к сейчас; не обычное have reproduced yesterday. I am checking the older build означает текущую работу, не завершённую проверку. She has written the report требует V3 written, не wrote. Выбирай форму по рамке и смыслу, а не по русскому совершенному виду: написал может относиться к конкретному вчера или результату к сейчас. При свободном рассказе возможны разные нормативные формы, если сохранены временные отношения и фактический статус.

### Expected: откуда берётся ожидаемый результат

The draft should remain available здесь означает ожидание по заданному правилу, а не наблюдение и не гарантию. Назови основание: The version 3.2 guide says that drafts may have an empty title. May в этой формулировке разрешает пустой title, а не утверждает вероятность сбоя. Если источники расходятся, запроси уточнение; не объявляй личное предпочтение обязательной функцией. Пожелание новой сортировки или поиска с опечатками можно оформить как enhancement, отдельно от несоблюдения имеющегося правила. Expected должно отвечать тому же действию и входу, что actual: нельзя сравнить сохранение одного draft с желанием улучшить весь интерфейс.

### Actual: сообщение, видимый объект и предел вывода

Saved appears, but the draft is missing from the visible list сохраняет два наблюдения. Сообщение не нужно стирать, потому что итог ему не соответствует; именно контраст помогает расследованию. В то же время не делай из missing from the list уверенное deleted from storage без доступа к этому слою. The card reached Done, but Activity was empty описывает успешное перемещение и проблему другой части UI, а не неудачу всей операции. Удобно разделить Expected / Observed / Not checked. Отсутствие проверки не равно отрицательному результату: not tested и tested but not reproduced требуют разных формулировок и разных следующих вопросов.

### Частота: что именно посчитано

The symptom occurred in three of four trials называет числитель, знаменатель и единицу. Не заменяй trials на users или devices. In my four trials ограничивает выборку и помогает не представить учебное наблюдение как процент всего продукта. Иногда ошибка не возникает по тем же шагам: это тоже часть отчёта, а не повод удалить успешную четвёртую попытку. Отдельную проверку другого человека можно добавить с её условиями, не пряча различия в общей цифре. We could not reproduce it in this setup сообщает результат этих попыток; это не доказательство, что ошибка нигде не существует. Always и never требуют гораздо более широкого основания, чем один короткий ряд.

### Наблюдение, гипотеза и причинная связь

After the page reloaded, a warning appeared говорит о последовательности. Because the cache failed, the draft disappeared утверждает причину и требует другого основания. Если связь лишь предполагается, скажи The warning may be related; we have not confirmed the cause. Лог, screenshot и воспоминание коллеги имеют разные возможности: снимок показывает состояние, а не все шаги или частоту; сообщение без окружения — повод уточнить, не готовое независимое воспроизведение. Не загружай полный журнал только для убедительности. Выбери относящийся к симптому фрагмент и объясни, что он действительно поддерживает и что оставляет неизвестным.

### Impact, workaround, fix и regression

Impact отвечает, какая работа затруднена: The user cannot continue this new draft through the tested route. Это не обязательно All work is blocked. Adding a title avoided the symptom in two trials — ограниченное наблюдение об обходе. Workaround не доказывает исправление причины; reproduced не resolved. Regression означает ухудшение ранее работавшего поведения, поэтому первое обнаружение сегодня само не устанавливает, когда дефект внесён. Если старую версию не тестировали и нет другого надёжного сравнения, обозначь possible regression или ещё неизвестный статус. Severity и priority зависят от команды и контекста; одно слово critical не заменяет описание влияния.

### Доказательства и приватность

Учебный отчёт использует вымышленные label, account и sample text. В реальном tracker не публикуй пароли, токены, личные ответы или полный клиентский журнал. Даже screenshot может содержать адрес, идентификатор или чужой текст. Сначала определи нужные поля, затем подготовь безопасный пример или очистку в рамках правил команды; факт удаления одного имени не гарантирует, что весь файл обезличен. Ссылка на существующий отчёт не доказывает одинаковую причину; похожие симптомы требуют сопоставления условий. В нашем курсе ссылки на Mozilla/GitHub служат источниками о форме отчёта, а не просьбой открыть реальные issues или отправить кому-то свои материалы.

### Уточнение, пересказ и произношение

Спроси Could you confirm which build you tested? Внутри косвенного вопроса обычный порядок, не which build did you test. Уточняй недостающий факт без обвинительной предпосылки: What happened after Save? вместо Why did you delete the note?, если удаление не установлено. Партнёр должен реально ответить или исправить деталь; затем проверь пересказ условий, а не довольствуйся yes. Reproduced обычно заканчивается /t/ после /s/, resolved — /d/ после /v/; в фразе сделай слышимым not. Нормативный UK/US акцент допустим. Без аудио pronunciation и oral fluency неизвестны; ASR может спутать версии и отрицание и не является фонетической оценкой.

### Полный текст, новая редакция и независимый контроль

Пиши связный отчёт с достаточными секциями, а не только ответы на короткие вопросы. Затем получи содержательный отзыв и сохрани полную редакцию отдельно от исходника: журнал правок не заменяет новый документ. В контроле встретятся другие симптомы, не тот же Mica под новым именем. Для listening партнёр готовит действительно скрытое сообщение; заранее прочитанный текст помечай text-supported. Через семь дней нужен ещё новый кейс и реальный обмен, не выдуманная дата успешного переноса. Эта первая подтема наполняет bug report; уточнение задач/проверка исправлений и отчёты о ходе работы ещё предстоят. T02 остаётся partial, а заполненность не mastery. Минуты занятия не уменьшают необходимую работу.

## Примеры с разбором

- **The app closes when I open Settings.** — Приложение закрывается при открытии Settings. Наблюдаемый симптом с условием.
- **The page freezes, but the browser stays open.** — Страница перестаёт отвечать, но браузер открыт. Не любое затруднение равно crash.
- **The new draft is missing from the list.** — Нового черновика нет в списке. Область наблюдения, не backend cause.
- **The actual result differs from the expected result.** — Фактический результат отличается от ожидаемого. Actual не актуальный.
- **I tested build 320 in Lumen 6 on DeskOS 8.** — Я проверял build 320 в Lumen 6 на DeskOS 8. Объекты версий различаются.
- **The account has default settings.** — В учётной записи настройки по умолчанию. Описание исходных условий.
- **Leave Title empty and enter Sample line in Body.** — Оставь Title пустым и введи Sample line в Body. Разные поля, не полностью пустой draft.
- **Do not change the prepared state between steps.** — Не меняй подготовленное состояние между шагами. Do not + base.
- **Select Save once, then reload the page.** — Выбери Save один раз, затем обнови страницу. Порядок имеет значение.
- **After reloading, open the draft list.** — После обновления открой список черновиков. After + -ing.
- **Before you reload, wait for Saved.** — До обновления дождись Saved. Before с полным придаточным.
- **The list does not show the new draft.** — Список не показывает новый черновик. Does not + base.
- **The results do not match the query.** — Результаты не соответствуют запросу. Множественное do.
- **I reproduced the symptom yesterday.** — Я воспроизвёл симптом вчера. Past Simple, законченный момент.
- **I have reproduced it in this setup.** — Я воспроизвёл его в этом окружении. Итог опыта к сейчас.
- **She has written a new report.** — Она написала новый отчёт. Has + V3 written.
- **I am checking another environment.** — Я проверяю другое окружение. Процесс, не завершённый результат.
- **I have not tested version 3.1.** — Я не проверял 3.1. Неизвестность, не успех прежней версии.
- **The guide says that a draft may have an empty title.** — Guide разрешает черновик с пустым title. Основание ожидаемого поведения.
- **The draft should remain available after reload.** — Черновик должен оставаться доступным после обновления. Ожидание по правилу, не наблюдение.
- **Saved appears, but the new item is not listed.** — Появляется Saved, но нового элемента нет в списке. Контраст двух фактов.
- **The symptom occurred in three of four trials.** — Симптом возник в трёх из четырёх попыток. Единица и знаменатель заданы.
- **The fourth trial did not show the symptom.** — В четвёртой попытке симптом не появился. Исключение сохраняется.
- **Dana observed it in one separate trial.** — Dana наблюдала его в одной отдельной попытке. Не все пользователи второй машины.
- **Both machines used the same stated software setup.** — Обе машины использовали названную одинаковую конфигурацию. Не два разных browser.
- **The warning appeared after reload.** — Предупреждение появилось после обновления. Последовательность, не причина.
- **The warning may be related to the symptom.** — Предупреждение может быть связано с симптомом. Гипотеза, не доказательство.
- **The screenshot shows one state.** — Снимок показывает одно состояние. Не все повторы и шаги.
- **The saved control note remained visible.** — Сохранённая контрольная заметка осталась видна. Конкретное наблюдение, не все notes.
- **Adding a title avoided the symptom in two trials.** — Добавление title позволило избежать симптома в двух попытках. Workaround ограничен наблюдением.
- **We have not verified a permanent fix.** — Мы не подтвердили постоянное исправление. Не называть обход resolved.
- **Could you confirm which build you tested?** — Уточни, какую сборку ты проверял. Embedded question без инверсии.
- **Does it occur after every reload?** — Это случается после каждого обновления? Does + base, вопрос о частоте.
- **I could not reproduce it with these settings.** — С этими настройками мне не удалось воспроизвести. Не опровержение всех чужих случаев.
- **Keep the original report and the revision separately.** — Храни исходный отчёт и редакцию отдельно. Полный новый текст, не потеря истории.
- **Although Saved appeared in every trial, the draft was missing after three reloads, so the message alone does not confirm the expected result.** — Хотя Saved появлялось каждый раз, после трёх обновлений черновик отсутствовал; сообщение само не подтверждает ожидаемый итог. Сложный пример: уступка, наблюдение и ограниченный вывод.

## Формы: шаг, наблюдение и время

1. **Краткий ответ:** The editor does not ___ the draft. (show/shows)
2. **Краткий ответ:** These messages ___ not disappear. (do/does)
3. **Краткий ответ:** I have ___ the problem. (reproduce)
4. **Краткий ответ:** Yesterday we ___ the report. (wrote/have written)
5. **Краткий ответ:** After ___, inspect the list. (reloading/reload)
6. **Краткий ответ:** Do not ___ a title in this trial. (enter/enters)
7. **Краткий ответ:** The new draft ___ missing. (is/does)
8. **Краткий ответ:** The screenshot provides some ___. (evidence/evidences)
9. **Развёрнутый ответ:** Исправь I have saw the warning yesterday.
10. **Развёрнутый ответ:** Исправь Could you tell me which browser did you use?
11. **Развёрнутый ответ:** Передай одну проверку как вчерашнее событие и как опыт к сейчас; сохрани реальные временные рамки.
12. **Развёрнутый ответ:** Различи I am testing / I have tested / I will test на одном объекте.
13. **Развёрнутый ответ:** Напиши отрицательное наблюдение для одного button и нескольких buttons.
14. **Устная работа:** Произнеси reproduced / resolved и I have not checked it; партнёр пересказывает смысл.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: show. После does not базовая форма.
2. Ключ: do. Messages — множественное число.
3. Ключ: reproduced. Have + V3, reproduced.
4. Ключ: wrote. Законченный момент с Past Simple.
5. Ключ: reloading. After как предлог принимает -ing.
6. Ключ: enter. Отрицательный imperative с base.
7. Ключ: is. Состояние с be, не does missing.
8. Ключ: evidence. Обычное неисчисляемое evidence.
9. Возможный образец (не единственный ответ): I saw the warning yesterday.. Past Simple с yesterday, не have saw.
10. Возможный образец (не единственный ответ): Could you tell me which browser you used?. Внутренний порядок subject + verb.
11. Возможный образец (не единственный ответ): I tested it yesterday. I have tested it in this setup.. Допустимые варианты по контексту, не одна строка.
12. Возможный образец (не единственный ответ): Текущий процесс / завершённая проверка к сейчас / план.. Форма меняет статус свидетельства.
13. Возможный образец (не единственный ответ): The button does not respond. The buttons do not respond.. Согласование и base после вспомогательного.
14. Возможный образец (не единственный ответ): Реальное звучание с различимым отрицанием и окончаниями.. ASR не подтверждает качество произношения.

</details>

## Окружение и исходные условия

1. **Краткий ответ:** Mica 3.2, Lumen 6, DeskOS 8: какая версия относится к browser?
2. **Краткий ответ:** Title пустой, Body = Sample line. Body тоже пустой? yes/no.
3. **Краткий ответ:** Два устройства с одинаковым browser доказывают проверку двух browser families? yes/no.
4. **Развёрнутый ответ:** Перепиши Tested version 6 с полным окружением Mica.
5. **Развёрнутый ответ:** Что нужно сообщить перед шагами Mica и зачем Seed?
6. **Развёрнутый ответ:** Воспроизведение началось со старой account, но report говорит new account. Что уточнить?
7. **Развёрнутый ответ:** Составь 4–6 предложений с known / not checked для версии и других окружений.
8. **Развёрнутый ответ:** Почему report не должен требовать сбросить реальный профиль ученика?
9. **Развёрнутый ответ:** Придумай безопасный sample input с двумя полями и одной существенной пустотой.
10. **Развёрнутый ответ:** Выбери нужное для отчёта: build, relevant setting, password, точный label. Объясни исключение.
11. **Развёрнутый ответ:** Коллега не записал reset между trials. Можно ли дописать reset performed?
12. **Устная работа:** Партнёр диктует environment, затем исправляет одну цифру. Перескажи всю строку с правильными объектами.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 6. Lumen — browser по досье, не приложение.
2. Ключ: no. Поля и значения нужно различать.
3. Ключ: no. Устройство и программная конфигурация разные объекты.
4. Возможный образец (не единственный ответ): Mica 3.2/build 320, Lumen 6, DeskOS 8, new training account/default settings/Practice.. Не добавлять неизвестное оборудование.
5. Возможный образец (не единственный ответ): Prepared state с Seed, empty Title/nonempty Body; Seed — контроль старой заметки.. Не путать контроль с новым draft.
6. Возможный образец (не единственный ответ): Какое фактическое начальное состояние и settings; исправить отчёт по фактам.. Не подгонять наблюдение под нужный пример.
7. Возможный образец (не единственный ответ): Названные проверенные build/browser/OS, неизвестные другие setup/старая версия.. Not checked не passed.
8. Возможный образец (не единственный ответ): Учебная симуляция, риск потери личных данных, достаточно вымышленного подготовленного состояния.. Не выполнять реальные сбросы.
9. Возможный образец (не единственный ответ): Вымышленные поля/значения, явно empty одно поле и непустое другое.. Условие ошибки должно сохраниться.
10. Возможный образец (не единственный ответ): Build/setting/label по необходимости; password не публикуется.. Даже релевантность не разрешает секреты.
11. Возможный образец (не единственный ответ): Нет, спросить и обозначить неизвестность до подтверждения.. Предположение не история выполнения.
12. Возможный образец (не единственный ответ): Фактическая поправка без смены установленного ПО в рассказе.. Без реального обмена взаимодействие не проверено.

</details>

## Воспроизведение и ясный заголовок

1. **Краткий ответ:** Упорядочь словами first/then: save, reload. Какое слово соединяет следующий шаг, then или than?
2. **Краткий ответ:** Starting conditions должны precede или follow шаги?
3. **Развёрнутый ответ:** Составь заголовок Mica без выдуманного database failure.
4. **Развёрнутый ответ:** Разверни Click it, then it is gone в ясные шаги Mica.
5. **Развёрнутый ответ:** Собери порядок: inspect list; Save once; New draft/input; wait Saved; reload.
6. **Развёрнутый ответ:** Чем Leave Title empty отличается от Clear all notes?
7. **Развёрнутый ответ:** Перепиши Before to reload, checks the message.
8. **Развёрнутый ответ:** Автор пропустил выбор Save. Может ли читатель понять, где именно наблюдалась ошибка сохранения?
9. **Развёрнутый ответ:** Напиши 5–7 шагов для нового вымышленного preview mismatch с указанным начальным фильтром.
10. **Развёрнутый ответ:** Почему Open Settings и Close Settings нельзя переставить без изменения кейса?
11. **Развёрнутый ответ:** Различи нейтральный title и запрос Add a new button.
12. **Развёрнутый ответ:** Уменьши лишние детали: путь к кабинету, марка стола, new account, empty Title, reload. Что сохранить?
13. **Устная работа:** Партнёр пересказывает шаги с reload до Save. Уточни и попроси пересказ заново.
14. **Развёрнутый ответ:** Проверь собственную последовательность: где читатель должен увидеть конкретный результат?

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: then. Then обозначает порядок, than — сравнение.
2. Ключ: precede. Исходные условия задают начало.
3. Возможный образец (не единственный ответ): Empty-title draft missing after reload despite Saved message.. Симптом/условие, не предполагаемое решение.
4. Возможный образец (не единственный ответ): Назвать New draft, Title/Body, Save/Saved, reload и draft list.. Убрать неясную референцию it.
5. Возможный образец (не единственный ответ): New draft/input → Save → Saved → reload → inspect list.. Подготовка задаётся отдельно, порядок существенен.
6. Возможный образец (не единственный ответ): Первое задаёт одно поле нового draft, второе меняет чужие данные и не часть теста.. Никаких реальных удалений.
7. Возможный образец (не единственный ответ): Before reloading, check the message. Или Before you reload, check the message.. Две нормативные формы, не только одна строка.
8. Возможный образец (не единственный ответ): Не хватает ключевого шага/сообщения; запросить и исправить последовательность.. Нельзя додумать действие за автора.
9. Возможный образец (не единственный ответ): Полные объекты/значения, действие, ожидание и точка наблюдения.. Не случайная копия Mica с новым именем.
10. Возможный образец (не единственный ответ): Меняется действие перед симптомом и возможность воспроизведения.. Не редактировать смысл ради гладкого текста.
11. Возможный образец (не единственный ответ): Title описывает симптом, запрос решения/функции отдельный и требует основания.. Не смешивать report и enhancement.
12. Возможный образец (не единственный ответ): Существенные условия/действия; бытовое не влияет по имеющимся данным.. Не утверждать, что неизвестная деталь всегда неважна.
13. Возможный образец (не единственный ответ): Реальное исправление существенного порядка.. Одно yes не подтверждает воспроизводимость.
14. Возможный образец (не единственный ответ): Явная точка после действия с объектом/критерием.. Нумерация без наблюдения не полный report.

</details>

## Expected, actual и границы вывода

1. **Краткий ответ:** Личное желание новой функции само подтверждает нарушение guide? yes/no.
2. **Краткий ответ:** 3 из 4 trials — это обязательно 3 разных человека? yes/no.
3. **Краткий ответ:** Workaround означает verified permanent fix? yes/no.
4. **Краткий ответ:** Not tested означает tested and passed? yes/no.
5. **Развёрнутый ответ:** Для Mica напиши две отдельные секции expected/actual с основанием.
6. **Развёрнутый ответ:** Перепиши All drafts disappear, если missing 3/4 новых, а Seed видна.
7. **Развёрнутый ответ:** Что screenshot одной пустой Activity не доказывает?
8. **Развёрнутый ответ:** Различи after reload и because the cache failed.
9. **Развёрнутый ответ:** Сформулируй ограничение: два titled trials без симптома.
10. **Развёрнутый ответ:** Почему без сравнения 3.1 нельзя уверенно написать regression introduced in 3.2?
11. **Развёрнутый ответ:** Напиши impact без claims о всех данных и полном downtime.
12. **Развёрнутый ответ:** Guide обещает exact search, коллега ждёт typo correction. Как оформить это?
13. **Развёрнутый ответ:** Напиши три категории: observed, suspected, not checked для Mica.
14. **Устная работа:** Партнёр говорит Not reproduced, значит проблемы нет. Уточни условия и предложи честный итог.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Пожелание не уже существующее правило.
2. Ключ: no. Единица подсчёта — попытки.
3. Ключ: no. Обход не подтверждает устранение причины.
4. Ключ: no. Нет проверки, нет результата проверки.
5. Возможный образец (не единственный ответ): Guide разрешает empty Title и сохранность после reload; missing в 3/4 при Saved.. Не заменить правило пожеланием.
6. Возможный образец (не единственный ответ): The new empty-title draft was missing in three of four trials; Seed remained visible.. Сохранить исключение и контроль.
7. Возможный образец (не единственный ответ): Все trials, порядок шагов, отсутствие записи на сервере, root cause.. Снимок ограничен одним состоянием.
8. Возможный образец (не единственный ответ): Последовательность против причинного утверждения; второе требует свидетельства.. Не выводить причину из порядка.
9. Возможный образец (не единственный ответ): Adding a title avoided the symptom in two trials, not a guaranteed fix.. Не все inputs/пользователи.
10. Возможный образец (не единственный ответ): Ранее работавшее поведение/граница внесения не установлены.. Дата обнаружения не дата появления.
11. Возможный образец (не единственный ответ): Нельзя надёжно продолжить новый draft по tested route; внутреннее удаление неизвестно.. Не преувеличивать и не скрывать известный симптом.
12. Возможный образец (не единственный ответ): Отделить пожелание enhancement и уточнить expected, не автоматический defect.. Основание ожидания нужно назвать.
13. Возможный образец (не единственный ответ): Saved/missing; возможная cache связь; storage/old build/другие accounts не проверены.. Категории не заменяют друг друга.
14. Возможный образец (не единственный ответ): Реальный обмен с ограниченным отрицательным результатом.. Не обвинять сообщившего о проблеме без основания.

</details>

## Чтение: Mica Notes

Mica Notes: a report that another person can check

Mica Notes is a fictional application. Its training guide says that a draft may have an empty title and should remain available after the page is reloaded. This is an existing rule, not a request for a new feature. Ira is testing version 3.2, build 320, in the fictional Lumen 6 browser on DeskOS 8. She uses a new training account with default settings and a workspace called Practice. No real customer information is involved.

Before each trial, Ira starts from the same prepared state. One previously saved note, Seed, is visible. She selects New draft, leaves Title empty and enters Sample line in Body. She chooses Save once, waits for the message Saved and reloads the page. Finally, she opens the draft list and looks for the new item by its body text. Seed is a control note, not the draft she is trying to save. An empty title does not mean an empty body.

Ira follows these steps in four separate trials, resetting the training state before each one. Saved appears every time. After reload, the new draft is missing from the visible list in three trials. In the fourth, it remains visible with Sample line. These are four attempts by one tester, not four users. The report should say three out of four trials, rather than always, all users or a precise rate for the whole product. The test does not tell the team where the data went internally.

She then tries a different input. She enters the title Test note while keeping the same body, environment and steps. In two titled trials, the new note remains visible after reload. This is a possible temporary workaround supported by those two observations. It is not a code fix or a promise that a title prevents every problem. Seed remains visible in all six trials on Ira's machine. That limits the observed impact; it does not establish that every existing note in every account is safe.

Dana repeats one empty-title trial on another machine using the same stated application build, browser and operating system. Dana sees Saved, then cannot find the new draft after reload. Ira records this separately from her own four trials. Two machines do not mean two different browser families, and the extra observation does not prove that every machine is affected. Neither tester has checked version 3.1. They therefore cannot yet say that version 3.2 introduced a regression.

Ira's first title was 'Database destroys all notes'. She replaces it with 'Empty-title draft missing after reload despite Saved message'. The new title describes a symptom and a condition. She has not inspected the database, and Seed is still visible. A warning, Cache entry unavailable, appears in a diagnostic log after reload, but nobody has established whether it causes the missing item. The warning belongs in the evidence section, not in a confirmed-cause statement.

The expected result is that the new draft remains available, including its body text, according to the training guide. The actual result is the missing visible item in the specified trials despite Saved. The impact is that a user cannot reliably continue that new draft through this route. Permanent loss from storage, effects on other accounts and the exact cause remain unverified. The report includes the preparation, numbered steps, exact message, trial counts and the limits of the workaround.

For an attachment, Ira prepares a small invented sample showing only the training fields and messages. She does not include an account token or a full customer log. Dana asks which version supplied the expected rule and whether the fourth trial followed the same reset. Ira points to the version 3.2 training guide and confirms the recorded reset. These answers improve the report; they do not repair the application. Their next proposed check is a comparison with version 3.1, if that test setup becomes available. It has not been performed yet.

1. **Краткий ответ:** Какой build Mica проверяла Ira?
2. **Краткий ответ:** Как называется контрольная старая note?
3. **Краткий ответ:** В скольких из четырёх empty-title trials Ira новый draft missing?
4. **Краткий ответ:** Guide разрешает empty Title? yes/no.
5. **Развёрнутый ответ:** Перескажи подготовку и шаги до наблюдения missing.
6. **Развёрнутый ответ:** Что произошло в четвёртой empty-title попытке и почему её нельзя убрать?
7. **Развёрнутый ответ:** Чем два titled trials отличаются от основных четырёх?
8. **Развёрнутый ответ:** Что Dana повторила и какие параметры её машины известны?
9. **Развёрнутый ответ:** Какие claims старого заголовка Ira не обоснованы?
10. **Развёрнутый ответ:** Какую роль играет Cache entry unavailable?
11. **Развёрнутый ответ:** Каковы ожидаемый результат и его источник?
12. **Развёрнутый ответ:** Какой impact подтверждён и что осталось неизвестным?
13. **Развёрнутый ответ:** Что уточнила Dana и что ответила Ira?
14. **Развёрнутый ответ:** Напиши 5–7 предложений о следующей proposed проверке и почему она не completed.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 320. Build приложения не browser version.
2. Ключ: Seed. Это не новый empty-title draft.
3. Ключ: 3 / three. Три попытки из четырёх на её машине.
4. Ключ: yes. Ожидание опирается на правило версии 3.2.
5. Возможный образец (не единственный ответ): New training/default/Practice/Seed; new draft empty Title/Body Sample line; Save once/Saved/reload/list.. Не полностью пустой body.
6. Возможный образец (не единственный ответ): Draft остался виден; исключение ограничивает частоту и always.. Отчёт сохраняет все наблюдения.
7. Возможный образец (не единственный ответ): Другое значение Title Test note, оба видны после reload; workaround отдельно.. Не смешивать условия в одном 3/6 без пояснения.
8. Возможный образец (не единственный ответ): Один отдельный empty-title trial, тот же stated app/build/browser/OS; missing после Saved/reload.. Не все конфигурации и не четверо пользователей.
9. Возможный образец (не единственный ответ): Database cause/all notes destroyed; backend не осмотрен, Seed видна.. Не выдать сильный заголовок за факт.
10. Возможный образец (не единственный ответ): Записанное сообщение после reload, связь с причиной не установлена.. Временная последовательность не causal proof.
11. Возможный образец (не единственный ответ): Новый draft/body доступен после reload по training guide 3.2, empty Title допустим.. Не требование на основании желания Ira.
12. Возможный образец (не единственный ответ): Новый draft ненадёжно доступен через данный путь; storage/permanent loss/другие accounts/причина неизвестны.. Не обещать безопасность всех старых данных.
13. Возможный образец (не единственный ответ): Guide version и одинаковый reset; 3.2 guide и подтверждённый записанный reset.. Уточнение не ремонт приложения.
14. Возможный образец (не единственный ответ): Сравнение с 3.1, если setup доступен; пока не выполнялось, regression неизвестна.. Не создавать фиктивный результат.

</details>

## Аудирование: Vale Board

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Vale Board: one narrator reports a fictional clarification conversation.

Pia is describing an issue in Vale Board to Amir. They use a training workspace called Blue, not a customer project. Pia first says version 1.5, then reads the About panel and corrects it to version 1.6, build 164. The fictional operating system is TeamOS 5 and the browser is Pine 9. The version correction changes her report, not the installed application. No update is performed during the conversation.

The training guide says that moving a card to Done should immediately add one entry to Activity. Pia's prepared board has a card called Check labels in Ready, and Activity is initially empty. In each trial she opens that card, selects Move, chooses Done and checks both the column and Activity. The card appears in Done in all four trials. Pia initially says five trials, then checks her notes and corrects the total to four. These are repeated trials in one training account, not four people or four operating systems.

In three of the four trials, Activity has no visible entry immediately after the move. In the fourth trial, the entry appears immediately. Pia then closes and reopens the board in each of the three trials with the missing entry. One matching activity entry appears after reopening in all three. She does not move the card a second time. Reopening makes the entry visible in these observations; it does not prove a permanent repair or explain why the initial display was incomplete.

Amir asks whether the move failed. Pia corrects that interpretation: the card did reach Done, but the immediate Activity display did not match the guide in three trials. She cannot say from this evidence that the server never recorded the move. She also cannot claim that all activity entries disappear. No other card or workspace was tested. A teammate mentioned a similar symptom in an older version, but the teammate supplied no steps or environment details. This is a lead for clarification, not a verified version comparison.

Pia has a screenshot of the fictional empty Activity panel after a successful column change. Amir asks her to keep the card label, version and sequence in the written report, while removing any account identifier that is not needed. They use invented fields only. The screenshot shows one state; it cannot by itself establish all four trials or the full action sequence.

At the end, Pia proposes the title 'Activity sometimes empty immediately after a card moves to Done'. Amir agrees that this matches the described symptom better than 'Move is broken'. He does not approve a software change or confirm a root cause. Pia will write the complete report and ask for a test in another environment. Nobody has accepted that test yet, and no completion date is agreed. The last confirmed facts are the corrected version, the four trials, the successful column changes and the different timing of the visible activity entries.

</details>

1. **Краткий ответ:** Какая версия приложения после поправки Pia?
2. **Краткий ответ:** Какой build назван после проверки About?
3. **Краткий ответ:** Сколько основных trials после поправки?
4. **Краткий ответ:** В какую колонку card попала во всех trials?
5. **Развёрнутый ответ:** Назови исходную workspace/card/колонку и состояние Activity.
6. **Развёрнутый ответ:** Что было expected по guide и actual сразу после Move?
7. **Развёрнутый ответ:** Что Pia сделала в трёх trials с отсутствующей записью?
8. **Развёрнутый ответ:** Как Pia исправила интерпретацию Move failed?
9. **Развёрнутый ответ:** Что известно о сообщении коллеги про older version?
10. **Развёрнутый ответ:** Что подтверждает screenshot и что не подтверждает?
11. **Развёрнутый ответ:** С чем согласился Amir при новом title?
12. **Развёрнутый ответ:** Каковы следующие обещания и что не согласовано?

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 1.6. 1.5 исправлено при чтении, не update.
2. Ключ: 164. Не переставлять цифры в 146.
3. Ключ: 4 / four. Не первоначальные five.
4. Ключ: Done. Перемещение удалось, проблема Activity.
5. Возможный образец (не единственный ответ): Blue, Check labels в Ready, Activity пустая.. Не переносить объекты из Mica.
6. Возможный образец (не единственный ответ): Немедленная запись Activity; в 3/4 её не видно, в 1/4 видна сразу; card в Done.. Сохранить исключение и обе части UI.
7. Возможный образец (не единственный ответ): Закрыла/открыла board; одна matching entry появилась, повторного Move нет.. Не приписывать duplicate move.
8. Возможный образец (не единственный ответ): Card достигла Done, missing относится к immediate Activity display.. Не свести частичный mismatch к провалу всего.
9. Возможный образец (не единственный ответ): Похожий симптом без steps/environment, lead для уточнения, не verified comparison.. Не доказанная regression или её отсутствие.
10. Возможный образец (не единственный ответ): Один пустой Activity после column change, не все попытки/полная последовательность.. Ограничить свидетельство.
11. Возможный образец (не единственный ответ): С точностью описания симптома, не software change/root cause.. Согласие ограничено формулировкой.
12. Возможный образец (не единственный ответ): Pia напишет report/попросит test elsewhere; никто не принял test, дата не согласована.. Не будущий план как выполненный.

</details>

## Письмо: полный report и редакция

Mica описан в «Чтении», Vale — в «Аудировании», Cedar полностью задан в упражнении. Все операции и данные вымышлены. Пиши полные тексты; сохраняй исходник и полную редакцию отдельно. Реальные issues создавать не требуется.

1. **Развёрнутый ответ:** Напиши полный Mica report 200–260 слов по досье: title, environment, preparation, steps, expected/actual, frequency, impact и limits.
2. **Развёрнутый ответ:** Напиши 120–160 слов уточнения Mica: условия, сравнение версий и основание expected.
3. **Развёрнутый ответ:** Напиши сводку Vale Board на 110–150 слов после аудирования.
4. **Развёрнутый ответ:** Напиши impact/workaround/limits Mica на 100–140 слов.
5. **Развёрнутый ответ:** Напиши 90–120 слов разбора чрезмерного заголовка и исправленной частоты.
6. **Развёрнутый ответ:** Напиши 90–120 слов рефлексии о собственном способе подготовки отчёта.
7. **Развёрнутый ответ:** Новый Cedar Viewer 2.0/build 207, Reed browser 4, ValeOS 6, training account. Guide: zoom сохраняется до Reset. Выбрать 150%, открыть/закрыть Help: в 2/3 trials visible page 100%, indicator 150%; один trial 150/150. Повторный выбор 150% восстановил размер в одной пробе; older build неизвестен. Напиши report 200–260 слов.
8. **Развёрнутый ответ:** Для Cedar напиши 6–8 предложений уточнения: что значит 100%, какие данные нужны, что пока неизвестно?
9. **Развёрнутый ответ:** Перепиши Everything is broken because the database is bad в 6–8 предложений по Cedar.
10. **Развёрнутый ответ:** Составь раздел evidence из invented screenshot/log/sample и подпиши границы каждого.
11. **Развёрнутый ответ:** После реального отзыва полностью перепиши Cedar report задания 7 в 200–260 словах; сохрани оригинал отдельно.
12. **Развёрнутый ответ:** Выбери 2–3 фактические ошибки своего report: цитата → правка → механизм → новый пример; без оценки попроси проверку.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Title: Empty-title draft missing after reload despite Saved message. Environment: Mica Notes 3.2, build 320; Lumen 6 on DeskOS 8; new training account, default settings, Practice workspace. Preparation: Start with the prepared state containing the saved note Seed. Reset that state before each trial. Steps: Select New draft. Leave Title empty and enter Sample line in Body. Choose Save once and wait for Saved. Reload the page. Open the draft list and look for the new body text. Expected: The new draft remains available after reload. The version 3.2 training guide permits an empty title. Actual: Saved appears, but the new draft is missing from the visible list in three of four empty-title trials on my machine. It remains visible in the fourth. Seed stays visible. Dana observed the missing item in one separate trial on another machine with the same stated software environment. Impact and limits: The new draft cannot reliably be continued through this route. I have not checked internal storage, other accounts or version 3.1. A cache warning appears after reload, but its connection to the symptom is unconfirmed. Adding Test note as a title kept the new draft visible in two trials. This is a limited workaround, not a verified fix. A version comparison is proposed, not completed.. Полный документ с существенными условиями, не список пожеланий.
2. Возможный образец (не единственный ответ): Could you clarify the setup for the report before we call it a regression? We know that the empty-title draft was missing after reload in three of your four trials on version 3.2. We do not yet have a controlled observation from version 3.1. Please keep Dana's separate trial identifiable instead of combining every observation under a single unexplained total. I would also like to confirm that each trial began with the same prepared state and that the body contained Sample line. An empty title is not the same as a completely empty draft. Finally, could you identify the guide that supports the expected result? These questions are requests for evidence. They do not mean that the report is false or that the cause has been found.. Вопросы не выдуманные ответы, unknown не accusation.
3. Возможный образец (не единственный ответ): The Vale Board issue concerns the Activity display, not a failure to move the card. Pia corrected the application version to 1.6, build 164, and the trial count to four. The card reached Done in every trial. In three trials, Activity was initially empty and showed one matching entry after the board was reopened. The fourth trial showed the entry immediately. Reopening is a limited display workaround in these observations. It is not a confirmed fix. A screenshot records one state, not all trials. The team has not verified another environment or the older-version report. Amir agreed with the revised wording, not with a root-cause conclusion. Pia still needs to write the full report.. Сохранить поправки, частоту и различие move/activity.
4. Возможный образец (не единственный ответ): The available evidence supports a narrow impact statement. A new empty-title draft cannot reliably be continued through the tested route because it is missing from the visible list after reload in three of four trials. The saved control note remains visible. We have not established permanent deletion from internal storage or a problem affecting every account. Adding a title avoided the visible symptom in two trials, so it may be a temporary workaround for this case. It does not change the code or prove that the original problem has been resolved. The report should help the team investigate without turning these limited observations into a claim about all users.. Не объявлять database deletion или permanent fix.
5. Возможный образец (не единственный ответ): My first draft said that the database destroyed all notes. That was stronger than the evidence. I have changed the title to describe the missing new draft after reload and retained the Saved message as an observation. I have also replaced always with three out of four trials on my machine. Dana's single trial is recorded separately. The warning remains in the evidence section, but I no longer call it the confirmed cause. These revisions improve the report; they do not show that the application is fixed. I still need a new comparison before describing a regression.. Объяснить смысл правок, не только орфографию.
6. Возможный образец (не единственный ответ): A useful report separates the intended rule, the steps actually taken and the observed result. I need to name the object instead of writing it when several things are visible. I also need to distinguish an empty title from an empty body and a missing list item from proven deletion. In my next report, I will state the number of trials and the tested environment. I will keep uncertainty explicit and ask a partner to follow the written sequence in a simulation. After feedback, I will save a complete revised report separately from the original, then practise on a different case.. Планы на будущее не фиктивные результаты.
7. Возможный образец (не единственный ответ): Самостоятельный отчёт с environment, точными steps/expected/actual/frequency и ограниченным workaround.. Не переписать текст Mica с новыми именами.
8. Возможный образец (не единственный ответ): Конкретные вопросы без выдуманного screen measurement/causal result.. Языковая симуляция, не доступ к реальному приложению.
9. Возможный образец (не единственный ответ): Известный zoom mismatch, отдельные indicator/visible size, неизвестные cause/storage/другие среды.. Не утверждать незафиксированную потерю файла.
10. Возможный образец (не единственный ответ): Вымышленные нужные данные без secrets, состояние/сообщение/вход не полная история.. Не создавать реальные клиентские вложения.
11. Возможный образец (не единственный ответ): Полный исправленный текст и причины существенных правок.. До отзыва pending, журнал не заменяет редакцию.
12. Возможный образец (не единственный ответ): Реальные свидетельства и адресная работа либо unknown.. Не выдумывать свой успешный результат.

</details>

## Речь: воспроизведение и уточнение

1. **Устная работа:** Представь Mica партнёру; он задаёт новый вопрос о неизвестном environment. Ответь точно и проверь пересказ.
2. **Устная работа:** Партнёр пересказывает empty title как empty body. Исправь и попроси новый пересказ.
3. **Устная работа:** Коллега хочет назвать Mica regression. Уточни свидетельства старой версии.
4. **Устная работа:** Партнёр переводит 3/4 trials в 3/4 users. Исправь единицу и объясни масштаб.
5. **Устная работа:** Обсуди Vale: партнёр считает Move failed. Раздели состояние card и Activity.
6. **Устная работа:** Проговори environment с app/build/browser/OS; партнёр намеренно уточняет одну цифру.
7. **Устная работа:** Произнеси I have reproduced it / I have resolved it / I have not tested it. Партнёр назовёт статус.
8. **Устная работа:** Партнёр задаёт неожиданный вопрос о screenshot. Объясни, что он может подтвердить.
9. **Устная работа:** Обсуди proposed workaround; партнёр просит гарантировать fix. Уточни границу.
10. **Устная работа:** Партнёр просит приложить token ради полноты. Согласуй безопасный invented sample.
11. **Развёрнутый ответ:** После диалога запиши фактическую неожиданную реплику, свою реакцию и оставшийся пробел.
12. **Устная работа:** По новому Cedar проведи проверку понятности report: партнёр меняет условие и спрашивает о сравнении.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Реальная реплика с сохранением known/unknown.. Не монолог за обе стороны.
2. Возможный образец (не единственный ответ): Различение полей и фактический ответ партнёра.. Слова empty без объекта недостаточно.
3. Возможный образец (не единственный ответ): Реальный вопрос и ограниченный вывод.. Не утверждать, что 3.1 уже проверена.
4. Возможный образец (не единственный ответ): Фактическое уточнение и проверка понимания.. Не выводить population rate.
5. Возможный образец (не единственный ответ): Новый ответ на интерпретацию по фактам.. Не считать весь запрос неуспешным.
6. Возможный образец (не единственный ответ): Понятное произнесение и реальный read-back.. ASR может ошибаться в цифрах.
7. Возможный образец (не единственный ответ): Фактическая слышимость отличий и отрицания.. Текст не фонетическая оценка.
8. Возможный образец (не единственный ответ): Адресный ответ и честное ограничение.. Не заранее прочитанный монолог.
9. Возможный образец (не единственный ответ): Реальное различение обхода и устранения.. Не обещать неподтверждённый результат.
10. Возможный образец (не единственный ответ): Отказ от секрета и конкретные нужные поля.. Никакой внешней отправки.
11. Возможный образец (не единственный ответ): Реальный краткий протокол без придуманных отзывов.. Текст не подтверждает fluency/произношение.
12. Возможный образец (не единственный ответ): Настоящее взаимодействие, адаптация и пересказ.. Нет реальных операций с личными данными.

</details>

## Смешанное повторение и перенос

1. **Краткий ответ:** She has ___ the message. (see)
2. **Краткий ответ:** The draft ___ not remain visible. (does/do)
3. **Краткий ответ:** Предложенное сравнение версий уже completed? yes/no.
4. **Краткий ответ:** Should remain по guide равно actually remained? yes/no.
5. **Развёрнутый ответ:** Перечисли данные нового environment и явно пометь то, что не проверено.
6. **Развёрнутый ответ:** Переведи «После закрытия панели список меняет порядок, но стрелка остаётся прежней».
7. **Развёрнутый ответ:** Составь 4 разных фразы: observation, hypothesis, unperformed check, limited workaround.
8. **Развёрнутый ответ:** Полностью перепиши свой слабый абзац, сохранив исходный отдельно, и объясни 2 существенные правки.
9. **Развёрнутый ответ:** Через 7 дней напиши 200–260 слов отчёта для нового кейса с иным симптомом и условиями.
10. **Устная работа:** Через 7 дней партнёр задаёт неожиданный вопрос к новому report; ответь и проверь понимание.
11. **Развёрнутый ответ:** В версии T02 с одной опубликованной подтемой почему полный счётчик не означает готовность всего топика и mastery?
12. **Развёрнутый ответ:** По содержательному разбору выбери один пробел, адресную практику и новый независимый контроль.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: seen. Has + V3, see–saw–seen.
2. Ключ: does. Singular draft требует does.
3. Ключ: no. План проверки не её результат.
4. Ключ: no. Правило и наблюдение различаются.
5. Возможный образец (не единственный ответ): App/build/browser/OS/settings/input с границами, без secrets.. Не полный системный инвентарь ради объёма.
6. Возможный образец (не единственный ответ): After closing the panel, I see a different list order, but the arrow stays the same. Или When the panel closes, the list order changes, but the arrow stays the same.. Понятный исполнитель -ing, сохранён контраст, варианты допустимы.
7. Возможный образец (не единственный ответ): Самостоятельные предложения с разными статусами и явными объектами.. Не одна уверенная причина четырьмя словами.
8. Возможный образец (не единственный ответ): Реальный текст и изменения формы/смысла либо запрос оценки.. Не фиктивная самопроверка.
9. Возможный образец (не единственный ответ): Новый материал/дата/полный текст/отзыв либо pending.. Не переименование Mica/Vale/Cedar.
10. Возможный образец (не единственный ответ): Фактический отложенный обмен по звуку.. Будущий успех не записывается заранее.
11. Возможный образец (не единственный ответ): Ещё предстоят уточнение задач/проверка исправлений и отчёты о ходе работы; качество и перенос отдельно.. Partial — публикация, не уровень ученика.
12. Возможный образец (не единственный ответ): Основания из реальных ответов или честный запрос проверки.. Время занятия не сокращает критерии.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** The list does not ___ the chosen order. (keep/keeps)
2. **Краткий ответ:** I have ___ the symptom twice. (observe)
3. **Краткий ответ:** After ___ the detail panel, inspect the list. (closing/close)
4. **Краткий ответ:** Yesterday I ___ the sorting issue. (reproduced/have reproduced)
5. **Краткий ответ:** Two failed trials prove two affected users? yes/no.
6. **Краткий ответ:** An untested older version is confirmed working? yes/no.
7. **Краткий ответ:** A workaround automatically confirms a permanent fix? yes/no.
8. **Краткий ответ:** В полном отчёте starting conditions нужны before или after шагов?
9. **Развёрнутый ответ:** Новый Cobalt Lists 2.1/build 210, Quartz 7 на StoneOS 4, training account. Guide: выбранная сортировка сохраняется до изменения пользователем. Сначала Name descending; открыть и закрыть detail. В 2 из 3 trials список становится ascending, хотя стрелка всё ещё descending; один trial сохраняет порядок. Сформулируй подготовку и последовательность.
10. **Развёрнутый ответ:** Раздели expected и actual Cobalt, включая основание ожидания и исключение.
11. **Развёрнутый ответ:** Коллега пишет Cobalt corrupts every record. Перепиши вывод по данным задания 9.
12. **Развёрнутый ответ:** Напиши полный Cobalt report на 200–260 слов: title, environment, preparation, steps, expected/actual, frequency, impact, unknown. В отдельной пробе повторный выбор сортировки восстановил видимый порядок; старую версию не проверяли.
13. **Развёрнутый ответ:** Напиши запрос уточнения Cobalt на 100–140 слов: какие имена/порядок были видны, одинаков ли reset, нужен ли другой environment? Не объявляй эти проверки выполненными.
14. **Устная работа:** Объясни Cobalt партнёру; он выбирает одну недостающую деталь и задаёт заранее не известный вопрос. Ответь и проверь его пересказ.
15. **Устная работа:** Проведи словесное воспроизведение Cobalt. Партнёр меняет один starting condition; выясни, сравним ли результат.
16. **Развёрнутый ответ:** Партнёр готовит скрытое устное уточнение Cobalt: build, число trials и наблюдение. Запиши три факта до показа текста.
17. **Развёрнутый ответ:** Партнёр устно исправляет одну деталь предыдущего сообщения. Сохрани первоначальное и уточнённое отдельно.
18. **Развёрнутый ответ:** Исправь Could you explain why does the order changes?
19. **Развёрнутый ответ:** Три попытки сделаны в одной учётной записи. Какие границы нужно сохранить в разделе environment/frequency?
20. **Устная работа:** Произнеси reproduced / resolved и I have not checked the previous build; партнёр пересказывает, что выполнено и что нет.
21. **Развёрнутый ответ:** Есть screenshot descending arrow над ascending list. Что он показывает, а чего один снимок не подтверждает?
22. **Развёрнутый ответ:** После реального отзыва полностью перепиши отчёт задания 12 в 200–260 словах, сохрани исходник и причины важных правок.
23. **Развёрнутый ответ:** Команда просит добавить новую сортировку по colour, которой guide не обещает. Это то же expected, что сохранение Name descending?
24. **Устная работа:** Партнёр называет проблему solved после workaround. Уточни смысл и согласуй ограниченный итог без обещания срока.
25. **Развёрнутый ответ:** Через 7 дней напиши 200–260 слов для другого нового bug case; партнёр проверяет понятность шагов в симуляции.
26. **Развёрнутый ответ:** В версии T02 с одной опубликованной подтемой почему 8/8 коротких ответов и заполнение этой подтемы не завершают топик и не подтверждают mastery?

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: keep. Does not требует base form.
2. Ключ: observed. Have + V3, не base.
3. Ключ: closing. After как предлог принимает -ing.
4. Ключ: reproduced. Законченный момент yesterday с Past Simple.
5. Ключ: no. Попытка и пользователь — разные единицы.
6. Ключ: no. Проверки нет, а не известен успех.
7. Ключ: no. Обход и исправление различаются.
8. Ключ: before. Условия задают начало воспроизведения.
9. Возможный образец (не единственный ответ): Указать окружение/начальный сортированный список, открыть конкретный detail, закрыть, сравнить порядок и стрелку; не выдумать перезапуск.. Новое условие, не пустой title Mica.
10. Возможный образец (не единственный ответ): Guide сохраняет выбранный порядок; в двух trials фактический ascending при descending arrow, в одном порядок сохранён.. Не all trials и не изменение хранимых данных.
11. Возможный образец (не единственный ответ): Подтверждено несоответствие видимого порядка/индикатора; corruption, все records и причина не установлены.. Не принимать сильную формулировку за наблюдение.
12. Возможный образец (не единственный ответ): Самостоятельный полный отчёт с ограниченным workaround и без выдуманного fix/regression.. Образец другого продукта не готовый ответ.
13. Возможный образец (не единственный ответ): Конкретные вопросы и граница имеющихся данных.. Вопросы не новые факты отчёта.
14. Возможный образец (не единственный ответ): Фактический вопрос, адресный ответ или честное unknown.. Чтение обеих ролей не взаимодействие.
15. Возможный образец (не единственный ответ): Реальная поправка условий и проверка понимания.. Настоящие пользовательские данные не нужны.
16. Возможный образец (не единственный ответ): Реально услышанное с последующей сверкой, неизвестное не угадывать.. Без звука pending, ранее прочитанное text-supported.
17. Возможный образец (не единственный ответ): Действительная поправка и её влияние на отчёт.. Не придуманный обмен и не новая версия ПО сама по себе.
18. Возможный образец (не единственный ответ): Could you explain why the order changes?. Обычный порядок внутри embedded question, без does.
19. Возможный образец (не единственный ответ): Одна account и три trials, не три accounts; другие настройки/системы неизвестны.. Не расширять выборку без свидетельства.
20. Возможный образец (не единственный ответ): Фактическое звучание и понимание отрицания/слов.. Без аудио pronunciation/fluency unknown, ASR не оценка.
21. Возможный образец (не единственный ответ): Один видимый mismatch, не весь порядок шагов/частоту/внутреннюю corruption.. Не расширять область evidence.
22. Возможный образец (не единственный ответ): Полный новый текст с точными условиями и неизвестным.. Журнал не заменяет редакцию; без отзыва pending.
23. Возможный образец (не единственный ответ): Нет: новое пожелание функции отдельно от нарушения существующего правила.. Issue может быть enhancement, не обязательно defect.
24. Возможный образец (не единственный ответ): Реальное различение symptom avoided и verified fix.. Не монолог с выдуманным согласием.
25. Возможный образец (не единственный ответ): Новый материал, фактический обмен/отзыв/дата либо pending.. Не переименование Cobalt.
26. Возможный образец (не единственный ответ): Ещё нужны другие линии T02, ручное качество текста/речи, реальное взаимодействие и отложенный перенос.. Publication partial и знания ученика различны.

</details>

### Вариант B

1. **Краткий ответ:** The results ___ not match the query. (do/does)
2. **Краткий ответ:** She has ___ the report. (write)
3. **Краткий ответ:** Before ___ the result, record the filter. (checking/check)
4. **Краткий ответ:** We ___ the old build last Monday. (tested/have tested)
5. **Краткий ответ:** Not reproduced here proves no defect exists anywhere? yes/no.
6. **Краткий ответ:** The expected behaviour needs a stated basis in this report? yes/no.
7. **Краткий ответ:** An error message alone confirms its root cause? yes/no.
8. **Краткий ответ:** Проверка visible result идёт before или after описанного действия?
9. **Развёрнутый ответ:** Новый Amber Mailbox 4.0/build 405, Glass 2 на BayOS 3, training account. Guide: search остаётся активным до clear. Введи plum, Search, открой результат, вернись в список. В 3 из 4 trials видны все сообщения, хотя query field ещё plum; один trial сохраняет фильтр. Сформулируй точные шаги/начальное условие.
10. **Развёрнутый ответ:** Раздели правило Amber и actual, сохранив число попыток.
11. **Развёрнутый ответ:** Автор пишет Search deletes messages. Что в новом досье поддерживает или не поддерживает эту формулировку?
12. **Развёрнутый ответ:** Напиши полный Amber report 200–260 слов. Повторный Search восстановил matches в двух отдельных проверках; старый build не тестировали. Включи title/conditions/steps/expected/actual/frequency/impact/limits.
13. **Развёрнутый ответ:** Напиши 100–140 слов уточнения: какие сообщения должны соответствовать plum, были ли иные фильтры, что реально проверено?
14. **Устная работа:** Представь Amber партнёру; он задаёт новый неожиданный вопрос о влиянии проблемы. Уточни границу и проверь пересказ.
15. **Устная работа:** Партнёр пересказывает Amber с reload вместо возврата из сообщения. Уточни исходные шаги и попроси повторный пересказ.
16. **Развёрнутый ответ:** Партнёр готовит другое скрытое устное сообщение Amber: environment, частота и ограничение. Запиши детали и вопрос.
17. **Развёрнутый ответ:** Партнёр устно исправляет частоту или объект. Запиши новый итог и сохрани прежний ответ отдельно.
18. **Развёрнутый ответ:** Исправь The query do not changes, but the results is wrong.
19. **Развёрнутый ответ:** Приложение 4.0/build 405, browser Glass 2, OS BayOS 3. Объясни, почему строка version 2 недостаточна.
20. **Устная работа:** Произнеси not tested / tested but not reproduced; партнёр различает отсутствие проверки и отрицательный результат проверки.
21. **Развёрнутый ответ:** Коллега предложил попробовать другой browser. Можно ли записать Cross-browser testing passed?
22. **Развёрнутый ответ:** После содержательного реального отзыва перепиши весь Amber report задания 12 в 200–260 словах отдельно от оригинала.
23. **Развёрнутый ответ:** Ученик ожидает поиск с опечатками, но guide обещает только точное совпадение. Как оформить расхождение пожелания и правила?
24. **Устная работа:** Партнёр хочет приложить полный клиентский лог. Объясни нужные сведения и согласуй вымышленный или очищенный пример.
25. **Развёрнутый ответ:** Через 7 дней напиши полный отчёт 200–260 слов о другой новой проблеме и обсуди его с партнёром.
26. **Развёрнутый ответ:** В версии T02 с одной опубликованной подтемой что остаётся непроверенным или неопубликованным после полного заполнения этой части?

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: do. Results — множественное число.
2. Ключ: written. Write–wrote–written после has.
3. Ключ: checking. Before как предлог с -ing.
4. Ключ: tested. Past Simple с законченным last Monday.
5. Ключ: no. Ограниченная проверка не глобальное отсутствие.
6. Ключ: yes. Не выдумывать требование из одного желания.
7. Ключ: no. Сообщение — наблюдение, причина требует обоснования.
8. Ключ: after. Нужна связь с выполненным шагом.
9. Возможный образец (не единственный ответ): Назвать окружение, известные training messages с/без plum, поиск/открытие/возврат, сравнение списка и поля.. Не добавлять reload из старого кейса.
10. Возможный образец (не единственный ответ): До clear ожидаются только matches; в трёх trials показаны all при query plum, в одном matches.. Содержимое поля не подтверждает применение фильтра.
11. Возможный образец (не единственный ответ): Видны лишние сообщения, а не установлено удаление; описать несоответствие результата и запроса.. Не приписывать источнику противоположный симптом.
12. Возможный образец (не единственный ответ): Самостоятельный отчёт по новому досье с временным обходом и неизвестной причиной.. Две проверки workaround не четыре основных trials.
13. Возможный образец (не единственный ответ): Вопросы о конкретных условиях, без дописывания ответов за партнёра.. Не считать запрос проверки её выполнением.
14. Возможный образец (не единственный ответ): Реальная реплика и ответ по известному или unknown.. Без партнёра взаимодействие pending.
15. Возможный образец (не единственный ответ): Адресное исправление с реальной новой репликой.. Нельзя автоматически смешивать разные способы воспроизведения.
16. Возможный образец (не единственный ответ): Реальное прослушивание нового материала до текста.. Без звука pending, прочитанный текст text-supported.
17. Возможный образец (не единственный ответ): Фактическая коррекция без выдуманных дополнительных испытаний.. Чтение готового сценария не самостоятельное listening.
18. Возможный образец (не единственный ответ): The query does not change, but the results are wrong.. Does not + base, plural results are.
19. Возможный образец (не единственный ответ): Разные версии разных объектов; читатель не поймёт, что именно 2.. Не объединять software layers в одну метку.
20. Возможный образец (не единственный ответ): Фактическое звучание и уточняющий вопрос.. ASR не фонетическая оценка, без аудио unknown.
21. Возможный образец (не единственный ответ): Нет: предложение не выполненный тест, результаты неизвестны.. Не превращать будущее действие в историю.
22. Возможный образец (не единственный ответ): Полная редактура с обоснованными изменениями.. Без отзыва pending, список правок не отчёт.
23. Возможный образец (не единственный ответ): Отделить enhancement от подтверждённого дефекта, уточнить требование.. Не обещать недокументированное поведение.
24. Возможный образец (не единственный ответ): Реальное обсуждение без передачи личных данных.. Ничего не публиковать во внешнем tracker.
25. Возможный образец (не единственный ответ): Новый независимый кейс, фактический отзыв/дата либо pending.. Не смена имени Amber в старом ответе.
26. Возможный образец (не единственный ответ): Качество открытых ответов/реальной речи/нового переноса; остальные заявленные линии ещё не опубликованы.. Счётчик не сертификация CEFR.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Bug report: язык воспроизведения, наблюдений и границ](../appendices/bug-report-language.md)
- [Полная инструкция: шаги, проверка, предупреждение и восстановление](../appendices/procedure-language.md)
- [Present Perfect Simple: формы, V3 и временная рамка](../appendices/present-perfect.md)
- [Пересказ: глаголы, времена, лица и точка отсчёта](../appendices/reported-speech.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [Mozilla: bug writing guidelines](https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html)
- [GitHub Docs: creating an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)

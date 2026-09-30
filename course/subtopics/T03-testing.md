# T03-testing · Тестирование: условия, assertions, граничные случаи и обоснованный отчёт

[Топик T03](../modules/T03.md). Сгенерировано из data/*.mjs.

Предпосылки: [T03-api](T03-api.md).

## Цели контроля

- Строить правила, условия и точные вопросы
- Проектировать понятные случаи и предусловия
- Объяснять expected, actual и силу проверки
- Различать результаты, покрытие и повторные запуски
- Извлекать условия и границы из test dossier
- Слышать поправки, единицы подсчёта и обязательства
- Создавать test plan, отчёт и полную редакцию
- Уточнять требования и проверять понимание партнёра

## Механизм

### От требования к свидетельству

Тестирование в этой подтеме — предмет технического общения, а не повод учить только слова bug и test. Requirement описывает требуемое поведение; test case задаёт условия и проверку; execution — конкретный запуск; result — наблюдение; conclusion — вывод с границами. The function preserves the source сообщает правило. The source was unchanged in this run сообщает результат определённой проверки. Если source вообще не сравнивали, второе предложение нельзя получить из первого. Письменный план ещё не выполненная работа. Вымышленные Fern, Larch и Maple позволяют тренироваться без доступа к настоящим сервисам. Не используй личные данные или реальные credentials. Мы изучаем язык постановки и обсуждения проверок, не заявляем полный охват инженерии QA, безопасности или всех методик тест-дизайна.

### Правила, действия и времена

Для спецификации удобен Present Simple: The function returns completed items; it does not modify the source. После does not нужен base, не modifies. Для действия в определённом запуске — Past Simple: We ran F3 yesterday; it returned nineteen items. Run имеет формы run–ran–run: We have run it twice. Present Perfect связывает прошлое действие с текущим состоянием, но не делает его успешным: We have tested it не равно It passed. Для плана используй We plan to check / The proposed test will compare, а не We verified. Expect something / expect something to happen — без for перед прямым объектом: We expected twenty items. Compare the actual result with/to the expected result — оба варианта возможны; смысл сравнения важнее одного выбранного предлога.

### Preconditions и воспроизводимый исходный контекст

Precondition — то, что должно быть верно перед действием: named build, workspace, исходные данные, права, режим, зависимости. Given a fresh list, when the function is called, then… помогает разделить исходное состояние, действие и ожидаемое, но не заменяет конкретных значений. Fixture — контролируемые тестовые данные или настройка, а не обязательно файл. В Fern F22 содержит двадцать два completed и три incomplete items с уникальными identifiers. «Есть список» недостаточно для вывода об output count двадцать. Reset the fixture before each run сообщает повторяемое действие; do not reuse the modified list предотвращает зависимость от предыдущего случая. Одинаковая документированная настройка помогает повторению, но не доказывает, что известны все скрытые переменные окружения.

### Обычный случай, границы и недопустимый ввод

Happy path / ordinary case показывает нормальное ожидаемое использование. Boundary case проверяет край допустимого диапазона, не автоматически ошибку. Для integer limit 1–20 inclusive минимальное и максимальное допустимые значения — 1 и 20; соседние недопустимые — 0 и 21. At most twenty — не более двадцати, at least twenty — не менее, exactly twenty — ровно. Если доступно лишь три completed items, limit twenty сам не требует создать ещё семнадцать. В Fern для F3 специально достаточно данных. Error case может закончиться passed test, если приложение правильно отвергло недопустимый ввод. Edge case шире «самое большое число»: empty input, отсутствующая зависимость, повторяющиеся значения требуют собственных правил. Не объявляй все края перечисленными четырьмя числами.

### Условия, кванторы и неизвестные требования

If enough completed items exist, the function returns the requested number. После if в таком реальном условии обычен Present, не will exist. Unless означает if not только при сохранении логики отрицания. Every run starts with a fresh fixture требует это для каждого запуска; some runs passed не означает most или all. Only completed items may be returned ограничивает состав, но само по себе не гарантирует порядок, число и отсутствие изменения source. Если duplicates не описаны, ожидаемое поведение остаётся неизвестным. Could you clarify whether duplicate identifiers are allowed? спрашивает правило без утверждения defect. В embedded question нужен обычный порядок: why the case fails, не why does the case fail. Формальная уверенность английской фразы не компенсирует отсутствующее требование.

### Expected, actual и assertion

Expected output выводят из требования и конкретного входа независимо от actual. В F3 required count twenty и actual nineteen дают mismatch. Assertion — явная проверка свойства: count, identifiers, order, state change. Array.isArray(result) проверяет тип контейнера, но пропускает массив из девятнадцати элементов. Поэтому passing smoke assertion не опровергает failed count check. Фраза The test checks the result слишком расплывчата: назови, что именно сравнивается. Переписывание expected как actual ради зелёного результата не является исправлением; если изменилось утверждённое требование, отдельно зафиксируй источник и версию. Для полного соответствия нужны относящиеся к контракту проверки, а не максимальное число бессмысленных assertions.

### Состояние до и после, побочные эффекты и отказ

Returns the correct array и leaves the source unchanged — независимые свойства. Для второго сохрани независимое исходное представление и сравни после вызова; две ссылки на один изменяемый объект могут скрыть изменение. Языковая форма: Compare the source before and after the call. No source comparison was made означает отсутствие свидетельства, не доказанное повреждение. При invalid input проверь ожидаемый отказ и оговорённое отсутствие изменения состояния. The rejection test passed не противоречит The input was rejected. Не расширяй no tag created до no logs written, если контракт не регулирует logs. В Maple Saved — видимое сообщение; оно не заменяет проверку ровно одного тега с требуемым текстом и сохранения прежних тегов.

### Unit, integration и test double

Контролируемая проверка функции и интеграционная проверка связи с реальным хранилищем отвечают на разные вопросы. Test double — общее название заменителя зависимости; mock и stub имеют более специальные значения в разных командах и инструментах. Не требуется спорить о названии, если в отчёте ясно, что заменено и какое поведение задано. The service response was simulated ограничивает выводы: настоящие credentials, доступность сервиса и его реальные данные не проверены. Passing local checks не превращают blocked integration в passed. Названия unit/integration/end-to-end употребляются не абсолютно одинаково во всех проектах; уточняй scope. В учебных кейсах никакого разрешения выполнять реальные сетевые операции не возникает.

### Статусы и правильный знаменатель

Planned — включено в план; executed — было выполнено; passed/failed относятся к результату проверки; not run — не запускали; blocked — выполнение невозможно из-за указанного препятствия. В нашем отчёте blocked и not run перечислены отдельными непересекающимися строками, обе не входят в executed. В другом трекере blocked может быть подкатегорией not run: сначала уточни схему. Fern: eight planned, six executed, five passed, one failed, one not run, one blocked. Five of six executed cases passed, а не All tests passed. Неизвестное expected мешает обоснованно поставить pass/fail. Missing access не доказывает дефект продукта. Число строк плана, разных случаев и запусков нужно явно подписывать, особенно при повторных попытках.

### Повтор, нестабильный результат и причинность

Rerun the case — выполнить тот же случай ещё раз; retry может относиться как к запуску теста, так и к операции приложения, поэтому назови объект. В Fern исходный F3 failed, два дополнительных запуска дали failed и passed. Итого восемь attempts на шести distinct executed cases, а не восемь новых cases. Сохраняй первую ошибку и все повторы. Flaky / intermittent описывает непостоянный исход, но не устанавливает причину в приложении, тесте, данных или окружении. The passing retry proves the fix слишком сильно, если изменение кода не сообщалось. Можно сказать The failure did not recur in that repeat; the cause remains unknown. Не объявляй все intermittent outcomes безопасными и не прячь их заменой журнала последним зелёным результатом.

### Ожидание условия не равно случайной паузе

В асинхронном интерфейсе проверка слишком рано может увидеть ещё неготовое состояние. Но «подождём подольше» не объясняет, что считать готовностью и сколько времени допустимо. Wait until the expected condition is met называет условие; timeout ограничивает ожидание. В Playwright web assertions могут повторять проверку до условия или timeout; это возможность конкретного инструмента, не гарантия любого expect. Не путай повтор проверки условия внутри assertion с повторным полным test case. В Larch нужен identifier выбранного документа, не просто visible image. Конкретное readiness condition ещё согласуют. Если performance threshold не задан, один screenshot не доказывает нарушение скорости и не показывает, что неправильный preview остался навсегда.

### Покрытие: метрика, область и качество

Statement coverage считает выполненные instrumented statements; line и branch coverage используют другие единицы. Всегда назови metric и scope. Fern 18/20 statements = 90% в selection function, не во всём приложении. Выполненная строка может иметь слабую assertion, а непроверенный boundary может проходить по уже покрытому коду. Поэтому coverage не процент доказанных требований, не вероятность отсутствия bugs и не сертификат релиза. Полезный вопрос: Which unexecuted path matters, and which executed behaviour has not been asserted? Требования можно связать с cases отдельной таблицей, но сама таблица не выполнение. Универсального волшебного процента, после которого язык отчёта может стать «всё работает», здесь нет.

### Связный план, отчёт и редактура

План начинает с цели, версии и scope, затем задаёт preconditions, входы, действия, expected и способ проверки; пробелы требований остаются явными. Отчёт сообщает фактические executions, expected/actual, failures, unrun/blocked, пределы и следующие шаги. Не склеивай future plan с completed result. Читателю, отсутствовавшему на встрече, должно хватать контекста без устного «ну это тот список». Полные Fern models доступны до письма; Maple — самостоятельный другой brief. Исходный plan/report и полная редакция сохраняются отдельно. Список changed three sentences не заменяет цельный исправленный документ. Оценка учитывает смысл, стройность, регистр и языковую точность, а не совпадение фраз с моделью; содержательно оправданное альтернативное решение допустимо.

### Устное уточнение, самопоправка и read-back

Слушай не только цифры, но и единицу: three cases / five attempts. I have fixed the assertion может быть поправлено на I have drafted a replacement: окончательный смысл ещё не implementation. Nadia offered to review не agreed to obtain access. Произнеси expected /ɪkˈspektɪd/, actual /ˈæktʃuəl/, assertion /əˈsɜːʃən/, coverage /ˈkʌvərɪdʒ/; это UK-ориентир, нормативный US не ошибка. Сравни nineteen и ninety с контекстом и подтверждением числа. Нужны реальное скрытое сообщение, адресный вопрос, неизвестная заранее реплика и пересказ партнёра, а не чтение обеих ролей. При отсутствии партнёра оставляй pending. Транскрипт позволяет разбирать смысл и грамматику, но pronunciation и oral fluency остаются unknown; ASR не даёт фонетическую оценку.

### Новый контроль и отложенное применение

После банков проходят отдельный вариант на новых условиях; ключи открываются только после отправки. Закрытые ответы не заменяют ручную проверку отчёта, взаимодействия и речи. После разбора выдели 2–3 приоритетных типа ошибок, выполни адресную практику и другой вариант. Через семь дней нужен действительно новый brief и самостоятельное применение, а не копирование Fern с другими именами. До реальной проверки — pending, без фиктивного результата. Эта подтема завершает заявленные линии T03: code review, API contracts и testing language. Expanded означает публикацию материала, не освоение учеником. Шкала работы показывает ответы и отправленные тесты; время занятия и 100% заполнения не снимают критериев качества. Останавливайся в любом месте и продолжай сохранённую работу без искусственного дробления.

## Примеры с разбором

- **The function preserves the source.** — Функция сохраняет источник без изменений. Present Simple описывает правило.
- **It does not change the input list.** — Она не изменяет входной список. Does not + base.
- **We ran the case twice.** — Мы запустили случай дважды. Past ran, не runned.
- **We have run three checks.** — Мы выполнили три проверки. Perfect не означает, что они прошли.
- **We expected twenty items.** — Мы ожидали двадцать элементов. Expect без for.
- **Compare the output with the expected list.** — Сравни выход с ожидаемым списком. Указаны оба объекта сравнения.
- **Start with a fresh fixture.** — Начни со свежих тестовых данных. Precondition отдельно от результата.
- **Reset the workspace before each run.** — Сбрось рабочее пространство перед каждым запуском. Each не только перед первым.
- **The range is one to twenty, inclusive.** — Диапазон от одного до двадцати включительно. Обе границы допустимы.
- **Return at most twenty items.** — Верни не более двадцати элементов. Не обязательно ровно двадцать.
- **We need at least twenty completed items.** — Нужно не менее двадцати завершённых элементов. At least не at last.
- **Exactly one tag should be created.** — Должен появиться ровно один тег. Count отдельно от сообщения Saved.
- **If enough items exist, return twenty.** — Если элементов достаточно, верни двадцать. Условие нельзя отбросить.
- **Only completed items may be selected.** — Выбирать разрешено только завершённые элементы. Состав не гарантирует порядок.
- **Invalid input must be rejected.** — Недопустимый ввод должен отвергаться. Modal passive.
- **The rejection check passed.** — Проверка отклонения прошла. Отказ приложения был ожидаемым.
- **The array check passed, but the count check failed.** — Проверка массива прошла, но проверка числа — нет. Разные assertions, нет противоречия.
- **The source was not compared after the call.** — Источник не сравнили после вызова. Не доказательство повреждения.
- **Could you explain why the test fails?** — Объясните, почему тест не проходит. Embedded question без инверсии.
- **Could you clarify whether duplicates are allowed?** — Уточните, разрешены ли дубликаты. Не предполагаем defect.
- **Five of the six executed cases passed.** — Пять из шести выполненных случаев прошли. Явный знаменатель.
- **The integration case is blocked by missing access.** — Интеграционный случай заблокирован отсутствием доступа. Не failed product behaviour.
- **The keyboard case has not been run.** — Проверку клавиатуры ещё не запускали. Нет свидетельства pass/fail.
- **Two repeats added two execution attempts.** — Два повтора добавили две попытки выполнения. Не два distinct cases.
- **Keep the original failure in the report.** — Сохрани исходную ошибку в отчёте. Последний pass не стирает историю.
- **The cause remains unknown.** — Причина остаётся неизвестной. Не выдумываем timing issue.
- **The response came from a test double.** — Ответ пришёл от заменителя зависимости. Реальный сервис не проверен.
- **The result covers this fixture only.** — Результат относится только к этим данным. Ограничение обобщения.
- **Eighteen of twenty statements were executed.** — Выполнены восемнадцать из двадцати statements. Метрика и область отдельно от качества.
- **High coverage does not guarantee strong assertions.** — Высокое покрытие не гарантирует сильных проверок. Execution не correctness.
- **I have drafted an assertion, not implemented it.** — Я подготовил проект проверки, но не реализовал её. Разные стадии.
- **Sorry, I meant three cases and five attempts.** — Извини, я имел в виду три случая и пять запусков. Поправка с единицами.
- **Wait until the expected condition is met.** — Жди достижения ожидаемого условия. Нужно конкретное условие.
- **She offered to review the plan, not obtain access.** — Она предложила проверить план, а не получить доступ. Scope обязательства.
- **Although the retry passed, no fix has been established.** — Хотя повтор прошёл, исправление не подтверждено. Сложный пример с уступкой.
- **Could you restate which result remains unverified and what evidence would resolve it?** — Перескажи, что осталось непроверенным и какие данные помогут. Сложный адресный read-back.

## Правила, условия и вопросы

1. **Краткий ответ:** The function ___ the input. (preserve/preserves)
2. **Краткий ответ:** The test does not ___ order. (check/checks)
3. **Краткий ответ:** We ___ F3 yesterday. (run/ran)
4. **Краткий ответ:** We have ___ the case twice. (ran/run)
5. **Краткий ответ:** The input must ___ rejected. (be/is)
6. **Краткий ответ:** If enough items ___, return twenty. (exist/will exist)
7. **Краткий ответ:** Could you explain why the test ___? (fails/does fail; нейтрально, без усиления)
8. **Краткий ответ:** We need at ___ twenty items: не менее. (least/most)
9. **Развёрнутый ответ:** Перепиши «Функция возвращает не более пяти строк, но в этом запуске она вернула шесть».
10. **Развёрнутый ответ:** Исправь We expected for twenty. The test do not checks order. Объясни обе модели.
11. **Развёрнутый ответ:** Сделай нейтральный embedded question из Why does the source change? Не объявляй изменение установленным, если его не наблюдали.
12. **Развёрнутый ответ:** Сравни The case has been run / The case passed / The case will be run в трёх предложениях.
13. **Развёрнутый ответ:** Переведи «Только завершённые элементы могут быть выбраны; это ещё не доказывает правильный порядок».
14. **Развёрнутый ответ:** Напиши два вопроса: о допустимости duplicates и об ответственном за решение. Используй could и who.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: preserves. Singular function требует preserves.
2. Ключ: check. После does not используется base.
3. Ключ: ran. Завершённый запуск в прошлом: ran.
4. Ключ: run. Третья форма run после have.
5. Ключ: be. Modal passive: must be rejected.
6. Ключ: exist. Обычное реальное условие с Present.
7. Ключ: fails. Встроенный вопрос без вопросительной инверсии и emphatic does.
8. Ключ: least. At least — нижняя граница.
9. Возможный образец (не единственный ответ): The function returns at most five rows, but it returned six in this run.. Различить требование Present и наблюдение Past; не подменять at most словом exactly.
10. Возможный образец (не единственный ответ): We expected twenty. The test does not check order.. Expect + direct object; does not + base. Полный текст проверяется вручную.
11. Возможный образец (не единственный ответ): Could you clarify whether the source changes?. Whether спрашивает факт; why the source changes предполагает изменение и здесь нуждается в основании.
12. Возможный образец (не единственный ответ): Выполнение к текущему моменту / успешный результат / будущая работа.. Не делать pass обязательным следствием run.
13. Возможный образец (не единственный ответ): Only completed items may be selected; this does not establish the correct order.. Modal passive и граница достаточности правила.
14. Возможный образец (не единственный ответ): Could you clarify whether duplicate identifiers are allowed? Who can approve that requirement?. Реальный вопрос о правиле, а не предположение defect; допустимы другие ясные формулировки.

</details>

## Предусловия и разнообразие случаев

1. **Краткий ответ:** Fern: минимальный допустимый integer limit? Число.
2. **Краткий ответ:** Fern: максимальный допустимый integer limit? Число.
3. **Краткий ответ:** Соседнее integer значение ниже диапазона Fern? Число.
4. **Краткий ответ:** Соседнее integer значение выше диапазона Fern? Число.
5. **Развёрнутый ответ:** Составь preconditions F3: версия, fixture, limit, зависимости, исходное состояние.
6. **Развёрнутый ответ:** Почему список с тремя completed items не проверяет ошибку 20 против 19?
7. **Развёрнутый ответ:** Запиши Given / When / Then для empty list с limit 5.
8. **Развёрнутый ответ:** Напиши обычный mixed-list case с собственными идентификаторами и известным порядком.
9. **Развёрнутый ответ:** Один тест на limit 1 заменяет все success cases? Объясни на английском.
10. **Развёрнутый ответ:** Правильное отклонение 21 назвали failed test. Исправь статус и обоснуй.
11. **Развёрнутый ответ:** Для duplicates предложили expected «keep first», хотя решения нет. Ответь вопросом и ограничением.
12. **Развёрнутый ответ:** Напиши reset instruction и объясни риск повторного использования изменённого fixture.
13. **Развёрнутый ответ:** Какие данные нужны, чтобы коллега повторил F3? Составь 6–8 пунктов по-английски.
14. **Развёрнутый ответ:** Новое правило: integer quantity от 2 до 8 inclusive. Предложи четыре boundary/adjacent cases и ожидания.
15. **Развёрнутый ответ:** Можно ли назвать not run проверку real storage успешной по локальному double? Напиши 3 предложения.
16. **Развёрнутый ответ:** Составь короткую карту requirement → case → missing evidence для count, order, source unchanged.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 1. Inclusive 1–20 включает нижнюю границу.
2. Ключ: 20. Верхняя граница тоже допустима.
3. Ключ: 0. Ноль вне диапазона 1–20.
4. Ключ: 21. Двадцать один вне диапазона.
5. Возможный образец (не единственный ответ): Build 260; fresh F22 with 22 completed and 3 incomplete distinct items; limit 20; notifications disabled; in-memory storage double.. Не забыть достаточный запас completed items и fresh copy.
6. Возможный образец (не единственный ответ): At most twenty при трёх доступных допускает три; нужен fixture с минимум двадцатью completed.. Объяснить логическую зависимость expected от входа.
7. Возможный образец (не единственный ответ): Given an empty list; when selection runs with limit five; then it returns an empty list and leaves the source unchanged.. Это proposed case, не выполненная проверка.
8. Возможный образец (не единственный ответ): Например A completed, B incomplete, C completed; limit 2 → A,C; source unchanged.. Конкретные данные, действие, expected и assertion; не просто «valid input».
9. Возможный образец (не единственный ответ): No. It does not establish the upper boundary, order across several items or behaviour for other fixtures.. Не обещать исчерпывающую проверку четырьмя числами.
10. Возможный образец (не единственный ответ): The rejection check passed if the required rejection and unchanged source were verified.. Product rejection и test failure различаются; условие проверки состояния явно.
11. Возможный образец (не единственный ответ): Could you clarify the required handling? The current contract does not establish keep-first behaviour.. Не выбрать retain/combine/reject без основания.
12. Возможный образец (не единственный ответ): Start each case with a fresh copy of the fixture. Otherwise a previous run may affect the next result.. May не сообщает установленную причину Fern failure.
13. Возможный образец (не единственный ответ): Version/build, workspace, exact input and limit, setup/double, reset, action, expected/actual, run identity.. Это план воспроизведения, не гарантия контроля всех переменных.
14. Возможный образец (не единственный ответ): 2 and 8 accepted; 1 and 9 rejected. Уточнить эффекты и конкретный fixture.. Не перенести пределы 1/20 из Fern.
15. Возможный образец (не единственный ответ): No. Local checks exercise the controlled double. The real-storage integration case remains blocked by missing access.. Scope заменить нельзя; не утверждать неисправность реального сервиса.
16. Возможный образец (не единственный ответ): Count F3 mismatch; order F1 checked; source unchanged missing assertion in first batch.. Назвать именно свидетельства досье, не заполнять всё «passed» автоматически.

</details>

## Expected, actual и сила проверки

1. **Краткий ответ:** Array-only check доказывает правильный count? yes/no.
2. **Краткий ответ:** Fern F3 expected count? Число.
3. **Краткий ответ:** Fern F3 actual count в первом запуске? Число.
4. **Краткий ответ:** Отсутствующий source assertion доказывает повреждение source? yes/no.
5. **Развёрнутый ответ:** Объясни кажущееся противоречие «smoke passed, count failed» в 90–120 словах.
6. **Развёрнутый ответ:** Предложи три отдельные assertions для successful selection.
7. **Развёрнутый ответ:** Почему actual нельзя просто скопировать в expected ради pass?
8. **Развёрнутый ответ:** Сформулируй before-and-after source check без кода.
9. **Развёрнутый ответ:** В Maple Saved видно, но stored tag ABCDEFGHIJK вместо ABCDEFGHIJKL. Какое свойство пропущено слабой проверкой?
10. **Развёрнутый ответ:** Опиши assertions для invalid Maple tag: три пробела.
11. **Развёрнутый ответ:** Почему Larch visible image недостаточно?
12. **Развёрнутый ответ:** Напиши proposal про ожидание readiness condition и назови неизвестное.
13. **Развёрнутый ответ:** Сравни auto-retrying assertion и полный rerun case.
14. **Развёрнутый ответ:** Исправь вывод The source was definitely corrupted because we did not compare it.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Тип контейнера не гарантирует его длину.
2. Ключ: 20. F22 содержит достаточно completed items для limit 20.
3. Ключ: 19. Наблюдение первого запуска отдельно от повтора.
4. Ключ: no. Отсутствие проверки не положительное свидетельство изменения.
5. Возможный образец (не единственный ответ): The existing assertion checks only that the returned value is an array. An array containing nineteen items therefore satisfies it, even though F3 requires twenty completed items in the original order. We should derive the expected identifiers from the fixture and compare the actual result with that expectation. A separate before-and-after comparison should check that the source list remains unchanged. Copying the actual output into the expected value would not provide an independent check. These are proposed improvements to the test, not evidence that the shared test has already changed. After review, the revised test still needs to be run against an identified build and fixture.. Проверки разных свойств могут дать разные результаты; назови конкретные assertions и независимое expected.
6. Возможный образец (не единственный ответ): Expected identifiers/count/order плюс отдельное unchanged source; можно сгруппировать identifiers и order одной проверкой.. Важно покрытие свойств, не искусственное количество вызовов expect.
7. Возможный образец (не единственный ответ): The expectation must be derived independently from the requirement and fixture, unless an approved requirement changes.. Результат не может сам служить независимым обоснованием правильности.
8. Возможный образец (не единственный ответ): Save an independent representation before the call; compare it with the source after the call.. Две ссылки на изменяемый объект не обязательно независимый snapshot.
9. Возможный образец (не единственный ответ): Exact stored text and length, not just message visibility; expected 12 letters, actual 11.. Не менять expected и не считать Save label доказательством хранения.
10. Возможный образец (не единственный ответ): Required rejection; no new tag; existing tag count unchanged under the brief.. Не объявлять отсутствие любых logs, которого контракт не обещает.
11. Возможный образец (не единственный ответ): The image may belong to D8 when D9 is selected; compare the preview identifier with the selected document.. Нужно семантически связанное expected, не любая картинка.
12. Возможный образец (не единственный ответ): We propose waiting for the agreed readiness condition before comparing identifiers. The precise condition still needs agreement.. Не выдавать случайный sleep или неописанный threshold за решение.
13. Возможный образец (не единственный ответ): Первое повторяет проверку условия внутри операции теста; второе — новую попытку случая со своим setup и результатом.. Не один механизм и не автоматическое устранение причины.
14. Возможный образец (не единственный ответ): The source-unchanged requirement remains unverified because no comparison was made.. Сохранить unknown; не утверждать и доказанную неизменность.

</details>

## Результаты, покрытие и повторные запуски

1. **Краткий ответ:** Fern first batch: сколько distinct cases executed? Число.
2. **Краткий ответ:** Fern first batch: сколько passed cases? Число.
3. **Краткий ответ:** Fern после двух repeats: сколько execution attempts? Число.
4. **Краткий ответ:** После repeats число distinct executed cases стало 8? yes/no.
5. **Развёрнутый ответ:** Составь статусную строку первого batch со всеми пятью числами.
6. **Развёрнутый ответ:** Объясни по-английски, почему blocked не означает product failed.
7. **Развёрнутый ответ:** Составь историю F3 и вывод после repeats.
8. **Развёрнутый ответ:** Коллега пишет intermittent значит harmless. Возрази в 3–4 предложениях.
9. **Развёрнутый ответ:** 18/20 statements → 90%. Напиши полное утверждение и два запрета на вывод.
10. **Развёрнутый ответ:** Coverage 100%, assertions проверяют только Array.isArray. Почему этого недостаточно?
11. **Развёрнутый ответ:** Отдельный dependency заменили double. Перечисли три неизвестных свойства реального сервиса.
12. **Развёрнутый ответ:** Перепиши The retry passed, so we fixed the issue без потери факта.
13. **Развёрнутый ответ:** Nadia reviewed plan? В brief она agreed to review. Различи эти два состояния и access ownership.
14. **Развёрнутый ответ:** Напиши 120–160 слов handover Fern после repeats: числа, mismatch, coverage, missing work, ownership.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 6. Восемь planned, но два не выполнены.
2. Ключ: 5. Пять прошли, F3 failed.
3. Ключ: 8. Шесть первоначальных запусков плюс два повтора.
4. Ключ: no. Повторялся F3; distinct cases остаётся шесть.
5. Возможный образец (не единственный ответ): Eight planned; six executed; five passed; one failed; one not run and one blocked.. Все величины подписаны; executed = passed + failed, planned = executed + два других статуса.
6. Возможный образец (не единственный ответ): The real-storage case could not be executed because access was missing. No product result was observed for that case.. Не путать состояние работы и поведение продукта.
7. Возможный образец (не единственный ответ): Initial failure 19; repeat failure 19; repeat pass 20. Same build/documented setup; no established cause or fix.. Не удалить исходный failed result и не выдумывать code change.
8. Возможный образец (не единственный ответ): Intermittent describes inconsistent outcomes, not their impact or cause. Preserve evidence and investigate.. Не диагностировать race condition без данных.
9. Возможный образец (не единственный ответ): Ninety per cent statement coverage in the selection function; not requirement correctness or real-service coverage.. Точный scope, не общий показатель всего приложения.
10. Возможный образец (не единственный ответ): Executed code may return wrong values which weak assertions accept. Coverage does not establish the contract.. Не объявлять coverage бесполезной: она показывает непокрытый инструментированный код.
11. Возможный образец (не единственный ответ): Availability, credential acceptance and real response data remain unverified.. Не утверждать, что double всегда плохой или настоящий сервис сломан.
12. Возможный образец (не единственный ответ): The retry passed, but no code change or fix has been established; the earlier failure remains in the history.. Не стирать pass и не усиливать вывод.
13. Возможный образец (не единственный ответ): Agreement to review is not completed review. It does not assign obtaining the credential to Nadia.. Время действия и scope обязательства отдельно.
14. Возможный образец (не единственный ответ): The two later F3 repeats must remain separate from the first batch. One failed with nineteen items and the other passed with twenty under the same documented setup on build 260. We now have eight execution attempts across six distinct executed cases. There is no reported code change or established root cause. Please preserve the original failure, record the fixtures and investigate the inconsistent outcomes. Nadia offered to review the revised plan; she did not accept responsibility for obtaining the missing service credential. We still need an owner for that access request. A passing repeat is useful evidence, but it does not prove a fix or authorise a release. Coverage is eighteen of twenty instrumented statements in the selection function; source preservation and real storage remain unverified.. Полный связный отчёт, не список «all done»; coverage scope добавить по досье.

</details>

## Чтение: Fern Queue, требования и свидетельства

Fern Queue: what did the tests actually establish?

Fern Queue is a fictional tool for selecting completed items for an export. The team is reviewing version 2.6, build 260, in the training workspace. Its test note is intended for a developer who did not attend the session. Nadia asks the writer to separate requirements, planned cases, actual executions and conclusions. The exercise does not ask the learner to run commands against a real service or to treat the invented results as personal work.

The selection function takes an item list and an integer limit from one to twenty, inclusive. It returns up to that many completed items in their original order. If enough completed items exist, it returns exactly the requested number. The source list must remain unchanged. Zero and twenty-one are outside the accepted range and must be rejected without changing the source. An empty list with a valid limit returns an empty list. The product owner has not decided how duplicate identifiers should be handled, so nobody can honestly write a final expected result for that question yet.

The fixture named F22 contains twenty-two completed items followed by three incomplete items, all with distinct identifiers. Every planned run begins from a fresh copy of the documented fixture; notifications are disabled. The selection-function checks use an in-memory storage double. They do not contact the real export storage service. The note records the build, input list, limit, expected output and actual output. These details make another attempt possible, although they do not guarantee that every relevant environmental variable has been controlled.

The first batch contains eight planned cases. F1 uses limit five with a mixed list and verifies the selected identifiers and order; it passes. F2 uses the minimum limit of one and passes. F3 uses F22 with limit twenty: the expected count is twenty, but the actual count is nineteen, so it fails. F4 checks zero and F5 checks twenty-one; both produce the required rejection and pass. F6 uses an empty list with limit five and passes. F7, the duplicate-identifier case, is not run because the expected behaviour is unresolved. F8, the real-storage integration case, is blocked because the team lacks a sandbox service credential. Neither F7 nor F8 is recorded as a product failure.

At this point there are six executed cases: five passed and one failed. Eight planned cases are not eight successful executions. The source-unchanged requirement was not asserted in this batch, despite being part of the contract. F1 checked the returned identifiers and order, not a before-and-after comparison of the source. Nadia asks for that missing check to be added. She does not claim that the source has already been corrupted; the available evidence simply does not establish that requirement.

A separate old smoke check only asks whether the returned value is an array. It passes when F3 returns nineteen items. That result does not cancel the more specific count mismatch. The old check is weaker than the requirement. Updating the expected count from twenty to nineteen merely to obtain a passing test would conceal the mismatch unless an authorised change to the requirement had actually occurred. No such change has been agreed.

The coverage report says that eighteen of twenty instrumented statements in the selection function were executed: ninety per cent statement coverage for that function. It does not measure the fraction of requirements verified, the quality of assertions, or the untested real-storage integration. Later, F3 is repeated twice on build 260 under the same documented setup. One repeat fails with nineteen; the other passes with twenty. The original failure remains in the history. There are now eight execution attempts across six distinct executed cases, not eight distinct cases. No code change or root cause has been established.

Nadia agrees to review a revised test plan that includes a source-unchanged check and a clearer duplicate-behaviour question. She has not accepted responsibility for obtaining the service credential, and no owner or deadline for that access request is recorded. The next report must preserve the first batch and the later repetitions separately. A passing repeat is useful evidence, but it is not a confirmed fix, a release approval or proof that the whole feature is correct.

1. **Краткий ответ:** Какой build указан в Fern? Число.
2. **Краткий ответ:** Сколько completed items в F22? Число.
3. **Краткий ответ:** Сколько distinct cases выполнено после всех описанных repeats? Число.
4. **Развёрнутый ответ:** Восстанови правило limit и поведение, когда completed items меньше limit.
5. **Развёрнутый ответ:** Выпиши first-batch статусы F1–F8, отдельно от repeats.
6. **Развёрнутый ответ:** Какой assertion F1 содержит и какого не содержит?
7. **Развёрнутый ответ:** Почему именно F22 помогает отличить nineteen от twenty?
8. **Развёрнутый ответ:** Как отдельный старый smoke связан с mismatch F3?
9. **Развёрнутый ответ:** Назови что coverage измеряет и чего не подтверждает.
10. **Развёрнутый ответ:** Какие поздние результаты появились? Изменилась ли версия или известная причина?
11. **Развёрнутый ответ:** Напиши 80–110 слов summary для отсутствовавшего коллеги.
12. **Развёрнутый ответ:** Что Nadia принимает и чего не принимает?
13. **Развёрнутый ответ:** Выбери два предложения модели report и объясни, как они ограничивают вывод.
14. **Развёрнутый ответ:** Задай автору три вопроса, на которые досье не отвечает, и поясни зачем.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 260. Версия 2.6 и build 260 — разные идентификаторы.
2. Ключ: 22. Три incomplete items не входят в twenty-two completed.
3. Ключ: 6. Повторы не добавили новых случаев.
4. Возможный образец (не единственный ответ): Integer 1–20 inclusive; return up to limit completed in original order; if enough, exactly limit; source unchanged.. Не требовать двадцать из списка трёх и не терять порядок.
5. Возможный образец (не единственный ответ): F1/F2/F4/F5/F6 passed; F3 failed; F7 not run; F8 blocked.. Точные номера и причины для последних двух.
6. Возможный образец (не единственный ответ): Returned identifiers/order checked; no before-and-after source comparison in this batch.. Не перенести source requirement в наблюдаемый результат.
7. Возможный образец (не единственный ответ): It contains twenty-two completed items, so availability is sufficient for the upper accepted limit.. Не просто «список большой» без логики expected.
8. Возможный образец (не единственный ответ): It only checks array type and therefore passes on nineteen items; it does not disprove the count failure.. Не добавлять его как девятый planned case F1–F8.
9. Возможный образец (не единственный ответ): 18 of 20 instrumented statements in selection function; not correctness, UI or real integration.. Не переводить instrumented scope в весь продукт.
10. Возможный образец (не единственный ответ): Two additional F3 repeats: fail 19, pass 20; build unchanged, no established cause/code change.. Сохрани первоначальную ошибку отдельно.
11. Возможный образец (не единственный ответ): Scope/build; first batch six executed with one failure; separate repeats; source/doubles/coverage limits; open actions.. Не выдавать будущие assertions за выполненные.
12. Возможный образец (не единственный ответ): Review of revised plan; no accepted credential ownership or deadline in this dossier.. Не дополнить биографию или обязанности по имени.
13. Возможный образец (не единственный ответ): Цитаты про first batch, double, unverified source, coverage или release; объяснение своими словами.. Указывать реальные цитаты, а не фиктивные сведения.
14. Возможный образец (не единственный ответ): Duplicate rule/decision owner; access owner/date; cause of inconsistent results; exact revised assertion status.. Вопрос не должен скрытно утверждать ответ.

</details>

## Аудирование: Larch Preview и исправление отчёта

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Larch Preview: a passing check with a missing condition

Omar: We need a clear handover for the next tester. This is Larch version three point one, build three hundred and ten, in our fictional preview sandbox. Please record that version before discussing the results.

Eve: The requirement is that a valid preview appears only for the currently selected document. Selecting a different document must not leave the old preview labelled as current. Our helper can display a cached image, but the check needs to compare its document identifier as well as its visibility. Seeing an image is not enough.

Omar: I wrote that all five cases passed.

Eve: We need to correct that. Five cases were planned. Three were executed: the initial preview passed, switching documents failed, and returning to the original document passed. The keyboard case was not run. The real image-service case was blocked because the sandbox credential was missing. That is two passed, one failed, one not run and one blocked. We should not turn the blocked case into another failure of the application.

Omar: Why did the switch check fail if an image was visible?

Eve: Because it belonged to document D8 while the selection and expected preview identifier were D9. The assertion should compare the identifier with the selected document, not simply ask whether some image is visible. The screenshot records one moment. It does not show that the image remained wrong forever. We have no agreed performance threshold in the brief, so please do not report a measured response-time violation.

Omar: What about the two extra runs?

Eve: They used the same build and the same documented starting state. We reset the sandbox before each run. Both extra switch runs passed. Keep the earlier failed run in the report. We have five execution attempts across three executed cases now, not five different cases and not evidence that somebody changed the code. Intermittent outcomes need investigation; a passing retry does not identify the cause.

Omar: The report also mentions a mocked image response.

Eve: Yes. The local cases use a controlled response from a test double. They show how our preview handles that response. They do not show that the real service was available, that its credentials worked or that its actual data matched the double. The blocked integration check remains necessary for its own scope.

Omar: I have fixed the assertion. Sorry, I mean that I have drafted a replacement assertion in my notes. I have not changed the shared test or run the draft. I will share it for review. The proposed check compares the preview identifier with the selected document and waits for the documented readiness condition. We still need to agree that condition precisely; increasing a delay at random would not explain the intermittent behaviour.

Eve: I can review the wording of that proposal. I have not agreed to implement it or to arrange access to the image service. Please keep those actions separate. The report should also say which data were reset and which dependency was replaced by a double.

Omar: One unexpected question: if the test suite has high line coverage, could we close the switching issue?

Eve: No. Line coverage tells us which instrumented lines were executed, not whether the right document was asserted. Could you explain that distinction back to me?

Omar: Executing the preview code does not show that our assertion checked the right identifier. I will preserve the failure, the two passing repeats and the missing checks separately. Our agreement about the report has not completed the investigation or approved a release.

</details>

1. **Развёрнутый ответ:** Прослушай Larch без текста. Запиши проект, version/build, purpose и режим доступа к материалу.
2. **Развёрнутый ответ:** Что Omar сначала сказал о пяти cases и как Eve его поправила?
3. **Развёрнутый ответ:** Какой документ был выбран и какой preview фактически виден?
4. **Развёрнутый ответ:** Что screenshot устанавливает и чего не устанавливает?
5. **Развёрнутый ответ:** Как закончились дополнительные runs и сколько теперь cases/attempts?
6. **Развёрнутый ответ:** Какая dependency заменена и какие выводы о реальном сервисе недоступны?
7. **Развёрнутый ответ:** Запиши самопоправку Omar о статусе assertion.
8. **Развёрнутый ответ:** Что ещё нужно согласовать для предложенного ожидания?
9. **Развёрнутый ответ:** На какую работу согласилась Eve и что осталось без её обязательства?
10. **Развёрнутый ответ:** Каков неожиданный вопрос и ответ про coverage?
11. **Развёрнутый ответ:** После второго прослушивания запиши финальный read-back Omar в 60–90 словах.
12. **Устная работа:** Партнёр устно сообщает новый preview brief с числом, ограничением и самопоправкой. Не видя текста, перескажи и уточни один факт; сохрани ответ.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Larch Preview 3.1/build 310; preview matches selected document; audio-first либо честно text-supported.. Без звука нельзя подтвердить listening, pronunciation или oral fluency.
2. Возможный образец (не единственный ответ): All five passed → five planned, three executed, two passed and one failed; keyboard not run, real service blocked.. Зафиксировать исходное и исправленное, числа с единицами.
3. Возможный образец (не единственный ответ): Selected/expected D9, actual D8.. Не перепутать actual и expected identifiers.
4. Возможный образец (не единственный ответ): Один момент mismatch; не бесконечную длительность и не нарушение неуказанного performance threshold.. Не выдумывать секунды или latency requirement.
5. Возможный образец (не единственный ответ): Two passing switch repeats; five execution attempts across three executed cases.. Первая failure остаётся в истории, не code fix.
6. Возможный образец (не единственный ответ): Controlled image response; no real-service availability, credentials or actual data verification.. Не писать успешную integration вместо blocked.
7. Возможный образец (не единственный ответ): I have fixed → drafted replacement in notes; not changed shared test or run draft.. Содержательный статус, не только замена глагола.
8. Возможный образец (не единственный ответ): Precise readiness condition; random longer delay does not explain the failure.. Не считать condition уже согласованным из самого слова documented.
9. Возможный образец (не единственный ответ): Review wording only; not implementation or service access.. Не назначить её владельцем всего исправления.
10. Возможный образец (не единственный ответ): Can high line coverage close switching issue? No: executed lines do not establish correct identifier assertion.. Не подменять Fern statement metric метрикой Larch.
11. Возможный образец (не единственный ответ): Distinguish executed code/assertion; preserve failure and repeats; missing checks; no completed investigation/release approval.. Сохрани первая запись → поправка отдельно, не переписывай историю первого понимания.
12. Возможный образец (не единственный ответ): Реальное новое сообщение и фактический follow-up. Если не проводилось, pending.. Не чтение обеих ролей; audio evidence обязательно для pronunciation/fluency.

</details>

## Письмо: план, отчёт и полная редакция

Самостоятельное вымышленное досье Maple Tags 1.8, build 184, workspace Training. При сохранении тега удаляются только внешние пробелы; внутренние сохраняются. После trim длина должна быть от 1 до 12 ASCII-букв/пробелов включительно. Пустой/состоящий только из пробелов ввод и длина 13 отвергаются; число существующих тегов не меняется. Допустимый ввод создаёт ровно один тег с ожидаемым текстом; сообщение Saved само по себе не доказывает сохранение. Исходные данные — два тега Cedar и Stone, новая копия перед каждым случаем; уведомления отключены, реальное хранилище заменено in-memory double. Требование к повторяющимся именам пока не согласовано. План содержит семь cases: M1 обычный Oak — passed; M2 одна буква A — passed; M3 двенадцать букв ABCDEFGHIJKL — failed, actual сохранённый текст ABCDEFGHIJK (11); M4 тринадцать букв ABCDEFGHIJKLM — rejection passed; M5 три пробела — rejection passed; M6 duplicate name — not run из-за неизвестного expected; M7 real-storage integration — blocked, нет sandbox credential. Всего пять distinct executed cases: четыре passed, один failed. Позже M3 повторили ещё раз с теми же документированными условиями, получили 12 букв: passing repeat, изменение кода не сообщалось. Теперь шесть executions пяти cases. Coverage: 16/20 instrumented statements в функции обработки, не всего приложения. Для исправления отчёта нужен реальный отзыв партнёра; его нет в досье. Не запускать операции в реальных сервисах.

Полные авторские модели Fern для анализа, не ответы на самостоятельный Maple:

PLAN

Proposed test plan for Fern Queue, build 260

The purpose of this plan is to check selection of completed items and to make the evidence understandable to another developer. It describes proposed work, not a completed execution. The agreed input range is an integer limit from one to twenty. The function must preserve the source list and the order of selected items.

Start each case with a fresh copy of its named fixture in the training workspace. Keep notifications disabled and record the exact build. For the controlled function checks, use the documented in-memory storage double. State explicitly that this does not exercise the real storage service. Do not use real credentials or personal data in the examples.

Include an ordinary mixed list with limit five, both accepted boundaries of one and twenty, and the adjacent rejected values zero and twenty-one. Use F22 for the upper accepted boundary so that enough completed items exist to distinguish twenty from nineteen. Include an empty source with a valid limit. Ask the product owner to clarify duplicate identifiers before assigning that case a final expected output.

For successful selections, compare the returned identifiers, count and order with independently derived expectations. Compare the source before and after the call to check that it remains unchanged. For rejected inputs, assert the agreed rejection and the unchanged source. A check that merely confirms an array exists is insufficient for the count and content requirements.

Keep the real-storage integration case separate. It is currently blocked by missing sandbox access; the plan must identify an access owner before promising an execution date. Do not assign that responsibility to Nadia merely because she offered to review the plan.

Record the first result of every case and retain any later attempts with their setup and outcomes. Investigate inconsistent repeats instead of silently replacing failures with passes. Use coverage to identify unexecuted instrumented code, not as a percentage of requirements proved. The final handover should list the verified conditions, mismatches, unrun cases, blocked work and unresolved questions.

REPORT

Fern Queue first-batch report

This report covers build 260 in the training workspace. Eight cases were planned, but only six were executed. Five of those passed and one failed. F7 was not run because the duplicate-identifier behaviour is unresolved. F8 was blocked by a missing sandbox service credential. Neither is evidence of a product failure.

F3 used F22 with a limit of twenty. The required count was twenty, but the function returned nineteen. The existing array-only smoke check also passed on that output, which shows that its assertion does not check this requirement. It does not invalidate the observed count mismatch.

The executed function cases used an in-memory storage double. They did not establish real-storage availability. The source-unchanged requirement also remains unverified because this batch did not compare the source before and after the operation. We should add that check rather than claim that the source was definitely changed.

The coverage report records eighteen of twenty instrumented statements in the selection function. That is ninety per cent statement coverage in that scope, not ninety per cent correctness. This first-batch summary excludes the two later repeats, which must remain separately identifiable in the history. No release decision is established by these results.

ASSERTION

The existing assertion checks only that the returned value is an array. An array containing nineteen items therefore satisfies it, even though F3 requires twenty completed items in the original order. We should derive the expected identifiers from the fixture and compare the actual result with that expectation. A separate before-and-after comparison should check that the source list remains unchanged. Copying the actual output into the expected value would not provide an independent check. These are proposed improvements to the test, not evidence that the shared test has already changed. After review, the revised test still needs to be run against an identified build and fixture.

CLARIFICATION

Could you clarify how duplicate identifiers should be handled? The current contract specifies the accepted limit range, completed-item selection and preservation of order, but it does not settle whether duplicate identifiers should be retained, combined or rejected. I have therefore left F7 unrun instead of inventing a pass condition. Please identify who can approve that requirement and which version the decision will apply to. Once we have an answer, I can update the proposed case and its expected output. This question does not establish a defect in the implementation. It identifies missing information needed to make the test meaningful and the result interpretable.

HANDOVER

The two later F3 repeats must remain separate from the first batch. One failed with nineteen items and the other passed with twenty under the same documented setup on build 260. We now have eight execution attempts across six distinct executed cases. There is no reported code change or established root cause. Please preserve the original failure, record the fixtures and investigate the inconsistent outcomes. Nadia offered to review the revised plan; she did not accept responsibility for obtaining the missing service credential. We still need an owner for that access request. A passing repeat is useful evidence, but it does not prove a fix or authorise a release.

REVISION

Revised Fern Queue report after the review

This report describes build 260 in the training workspace. The first batch planned eight cases and executed six. Five passed and one failed. The duplicate-identifier case, F7, was not run because its expected behaviour is unresolved. The real-storage integration case, F8, was blocked by a missing sandbox credential. These two statuses are not additional failures of the product.

The failed case, F3, used the F22 fixture with limit twenty. Twenty-two completed items were available, so the required output count was twenty. The actual count was nineteen. A separate old smoke check accepted the output because it only required an array. That weak assertion does not contradict the more specific mismatch. The expected count must not be changed merely to make the test pass.

The first batch used an in-memory storage double and fresh documented fixtures. It did not exercise the real storage service. It also did not assert that the source list remained unchanged. The revised plan therefore proposes a before-and-after source comparison as well as explicit checks of returned identifiers, count and order. Those additions have not yet been implemented or executed.

The two later F3 repeats produced different outcomes: one failed with nineteen and one passed with twenty. Both used build 260 under the same documented setup. The record now contains eight attempts across six executed cases. The original failure remains relevant. No code change or root cause has been established, so the passing repeat is not reported as a confirmed fix.

The coverage figure is ninety per cent of the twenty instrumented statements in the selection function. It does not measure requirement coverage or real-service behaviour. Nadia agreed to review the revised plan, not to obtain sandbox access or approve a release. The next steps are to review the proposed assertions, clarify duplicates, identify an access owner and investigate the inconsistent repeats. Each action needs its own evidence before it can be reported as complete.

1. **Развёрнутый ответ:** Прочитай все шесть полных Fern models. Назови различия plan/report/revision и два места с ограничением выводов.
2. **Развёрнутый ответ:** По самостоятельному Maple brief напиши цельный test plan/report 320–420 слов: audience, contract, cases, assertions, first batch, repeat, gaps, next actions.
3. **Развёрнутый ответ:** Создай таблицу Maple из семи cases: input/setup, expected, actual/status, missing evidence.
4. **Развёрнутый ответ:** Напиши отдельный first-batch Maple report 180–240 слов для отсутствовавшего коллеги.
5. **Развёрнутый ответ:** Объясни слабость проверки одного Saved в 90–120 словах и предложи assertions.
6. **Развёрнутый ответ:** Напиши 90–120 слов запроса про duplicate names: что известно, что неизвестно, какой ответ нужен.
7. **Развёрнутый ответ:** Напиши handover Maple 90–120 слов после passing repeat с корректными counts.
8. **Развёрнутый ответ:** Получив реальный отзыв партнёра на исходник 2, сохрани цитаты и 2–3 приоритетных решения. До отзыва — pending.
9. **Развёрнутый ответ:** После обсуждения сохрани полную редакцию Maple plan/report 320–420 слов отдельным ответом; не только changelog.
10. **Развёрнутый ответ:** Сопоставь исходник и редакцию: три цитаты «было → стало → почему».
11. **Развёрнутый ответ:** Дай короткую альтернативную формулировку слабого conclusion All tests passed, so storage is safe.
12. **Развёрнутый ответ:** Сформулируй ограничения для нового читателя в 60–90 словах без жаргонного «green».
13. **Развёрнутый ответ:** Напиши ответ коллеге, который предлагает поменять expected ABCDEFGHIJKL на actual ABCDEFGHIJK.
14. **Развёрнутый ответ:** Проверь свой документ: номера cases, lengths, first/repeat, source of claims, future/completed. Запиши найденные проблемы или обоснуй отсутствие.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Plan is proposed; report first batch; revision includes separate repeats and review decisions. Цитаты из доступных моделей.. Модели доступны до ответа, это не требование угадывать структуру.
2. Возможный образец (не единственный ответ): Авторский Maple текст: 1–12 trimmed letters/spaces, five executed cases 4/1, repeat отдельно, double/80% scope, duplicates/access unknown.. Не копировать Fern числа и не писать, что ученик реально запускал сервис. Это самостоятельный исходник.
3. Возможный образец (не единственный ответ): M1 Oak pass; M2 A pass; M3 12 expected/11 actual fail; M4 13 rejected pass; M5 spaces rejected pass; M6 unknown/not run; M7 blocked.. Таблица дополняет, не заменяет связный текст.
4. Возможный образец (не единственный ответ): Five of seven cases executed: four passed, one failed; duplicates not run, storage blocked. Scope and missing checks explicit.. Не включать passing repeat в исходный pass count; expected 12, actual 11.
5. Возможный образец (не единственный ответ): Message visibility is not exact stored text or exactly one new tag. Check contract and existing count/state as appropriate.. Предложение не выдавать за выполненную реализацию.
6. Возможный образец (не единственный ответ): Name handling after trim известен, duplicate rule неизвестен; спросить retain/reject/other behaviour, owner/version.. Не навязывать собственное правило как текущее требование.
7. Возможный образец (не единственный ответ): Six executions of five distinct cases; original failed M3 preserved; later pass; no reported code change or fix.. Сохранить остальные blocked/not run и область 16/20 statements.
8. Возможный образец (не единственный ответ): Фактический feedback с обоснованиями; разрешено аргументированно не принять стилистический совет.. Не выдумывать преподавателя и не менять исходник задним числом.
9. Возможный образец (не единственный ответ): Цельный пересмотренный текст со всеми условиями, числами и ограничениями; исходник 2 остаётся отдельно.. Без реального отзыва pending. Оценка по рубрике, не совпадению с Fern revision.
10. Возможный образец (не единственный ответ): Фактические изменения смысловой точности, структуры или языка.. Это журнал решения отдельно от полного текста 9.
11. Возможный образец (не единственный ответ): Four first-batch cases passed and one failed; real storage was not tested and remains blocked.. Не скрыть положительные проверки и не объявить реальный storage повреждённым.
12. Возможный образец (не единственный ответ): Double scope, missing duplicates requirement, unresolved integration, original mismatch and limits of coverage.. Развёрнутая понятная английская проза, а не только коды.
13. Возможный образец (не единственный ответ): Expected follows approved requirement; no change reported. Preserve mismatch and investigate; ask about authorised contract change.. Не обвинять человека в намерениях; объяснить независимость expected.
14. Возможный образец (не единственный ответ): Честная самопроверка текста, не сертификат освоения и не фиктивная оценка агента.. Автоматическое совпадение ключа не оценивает цельность документа.

</details>

## Диалог: требования, доказательства и передача работы

1. **Устная работа:** Объясни партнёру Fern first batch своими словами; попроси его назвать counts и missing checks.
2. **Устная работа:** Партнёр предлагает считать expected rejection failure. Уточни его смысл и объясни на новом invalid input.
3. **Устная работа:** Обсуди duplicates: партнёр выбирает роль decision owner и сообщает неизвестное заранее правило. Перескажи с версией.
4. **Устная работа:** Сначала ошибочно назови число cases, затем реально поправь себя с единицей и попроси подтверждение.
5. **Устная работа:** Партнёр задаёт неожиданный вопрос о coverage. Ответь с примером слабого assertion и проверь понимание.
6. **Устная работа:** Сравни вслух nineteen / ninety, expected / actual; партнёр записывает услышанные значения и переспрашивает.
7. **Устная работа:** Партнёр называет passed retry доказанным fix. Уточни, какие изменения он имеет в виду, и ограничь вывод.
8. **Устная работа:** Попроси review assertions; партнёр отказывается или ограничивает объём. Согласуйте ровно принятый следующий шаг.
9. **Устная работа:** Передай Maple absent colleague: 60–90 секунд как ориентир репетиции, не лимит освоения; получи неожиданный follow-up.
10. **Устная работа:** Партнёр даёт скрытый новый test log с поправкой; уточни, сколько distinct cases и attempts.
11. **Устная работа:** Объясни нетехническому участнику, почему visible image не обязательно нужный preview.
12. **Устная работа:** Обсуди другой input range партнёра, предложи boundary и error cases, ответь на два неизвестных вопроса.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Реальное объяснение и read-back, шесть executed, не восемь.. Без аудио pronunciation/fluency unknown; без партнёра pending.
2. Возможный образец (не единственный ответ): Реальная реплика и различение test result/application rejection.. Не просто чтение готового ответа.
3. Возможный образец (не единственный ответ): Фактически услышанное правило относится к новому role-play, не меняет опубликованный Fern contract.. Не выдумывать реплику за партнёра.
4. Возможный образец (не единственный ответ): Запись исходной фразы и самопоправки, затем ответ собеседника.. Упражнение на repair, не свидетельство неправильного понимания досье навсегда.
5. Возможный образец (не единственный ответ): Новый вопрос, адресный ответ, actual read-back.. Не универсальное обещание качества при любом проценте.
6. Возможный образец (не единственный ответ): Реальные услышанные числа и исправление при необходимости.. UK/US допустимы; текстовая запись не фонетическая оценка.
7. Возможный образец (не единственный ответ): Нельзя предположить отсутствие/наличие code change вне заданного brief; спросить evidence.. Реальное обсуждение, не обязательное согласие.
8. Возможный образец (не единственный ответ): Фактическое ограничение, owner и неизвестный срок отмечены честно.. Offer to review не назначает service access.
9. Возможный образец (не единственный ответ): Самостоятельный отчёт с counts, original/repeat, double, gaps.. Можно остановиться/повторить; важна полнота и понятность, не секундомер.
10. Возможный образец (не единственный ответ): Реальное аудиосообщение до показа текста; записать обе версии и итог.. Если текст был виден, честно text-supported; без взаимодействия pending.
11. Возможный образец (не единственный ответ): Понятный пример выбранного и показанного документа, затем пересказ участника.. Не добавлять неподтверждённый performance threshold.
12. Возможный образец (не единственный ответ): Новые значения/данные и условия, не повтор готовых реплик.. Проверка по реальному аудио/рубрике, не ASR similarity.

</details>

## Извлечение, смешанная практика и перенос

1. **Краткий ответ:** The fixture must ___ reset. (be/is)
2. **Краткий ответ:** Passing retry всегда establishes a fix? yes/no.
3. **Краткий ответ:** 100% code coverage гарантирует правильный expected output? yes/no.
4. **Развёрнутый ответ:** Новое правило Ivy: limit 3–9 inclusive, только active rows; предложи ordinary/boundary/rejected/empty cases.
5. **Развёрнутый ответ:** Новый журнал: 4 cases выполнено 3 pass/1 fail, затем один repeat pass. Напиши counts и ограничение.
6. **Развёрнутый ответ:** Новый экран показывает success, но число записей не проверено. Напиши три вопроса к requirement/assertion.
7. **Развёрнутый ответ:** Без модели напиши 100–140 слов testing note по новому правилу Ivy, раздели известное и вопросы.
8. **Устная работа:** Партнёр сообщает новый результат и возражение; уточни expected, actual и scope, получи read-back.
9. **Развёрнутый ответ:** Через семь дней получи новый brief и журнал другой функции/интерфейса. Напиши отчёт 180–240 слов.
10. **Устная работа:** На отложенной проверке защити отчёт перед новым вопросом партнёра и исправь одну неоднозначную фразу.
11. **Развёрнутый ответ:** Объясни разницу 100% заполнения T03, expanded публикации и подтверждённого освоения.
12. **Развёрнутый ответ:** После ручного разбора выпиши 2–3 приоритетных пробела, адресную практику и новый материал второго варианта.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: be. Modal passive с base be.
2. Ключ: no. Сам по себе повтор не показывает причину или выполненное исправление.
3. Ключ: no. Выполнение строк не гарантирует качество assertions.
4. Возможный образец (не единственный ответ): Новые входы: 3/9 допустимы, 2/10 нет, mixed/empty согласно уточнённому правилу; неизвестное не выдумывать.. Не переносить Fern range или unchanged contract без указания.
5. Возможный образец (не единственный ответ): Five attempts across four cases; original failure retained; no fix established by retry alone.. Не «четыре из четырёх прошли» без разделения истории.
6. Возможный образец (не единственный ответ): Что должно создаться, сколько, какое state/visibility нужно проверить и с каким source of truth?. Не объявлять потерю данных без наблюдения.
7. Возможный образец (не единственный ответ): Новые значения и explicit unknown для effects/empty/duplicates, конкретные proposed cases.. Не приписывать proposed plan completed outcomes.
8. Возможный образец (не единственный ответ): Реальное новое взаимодействие, неизвестный заранее follow-up.. Без аудио остаются unknown фонетические шкалы.
9. Возможный образец (не единственный ответ): Реально новый материал, реальные дата и отсрочка, самостоятельные требования/assertions/выводы.. До выполнения pending; одно переименование Fern не перенос.
10. Возможный образец (не единственный ответ): Фактический вопрос, ответ и понятный read-back; original и repair отдельно.. Без проверки не ставить delayed mastery.
11. Возможный образец (не единственный ответ): Ответы/тесты заполнены; материал опубликован; качество требует нового контроля, речи/письма и отложенного применения.. Ни прогресс-бар, ни календарное время не заменяют свидетельства.
12. Возможный образец (не единственный ответ): Реальные цитаты/основания; если разбор не сделан, pending.. Не создавать фиктивные ошибки или проведённые занятия.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** The parser ___ invalid dates. (reject/rejects)
2. **Краткий ответ:** We have ___ the import check. (run/ran)
3. **Краткий ответ:** Could you explain why the assertion ___? (fails/does fail; нейтрально, без усиления)
4. **Краткий ответ:** The state must ___ preserved. (be/is)
5. **Краткий ответ:** Новый Willow import contract: valid row count 2–6 inclusive. Максимум допустимых rows? Число.
6. **Краткий ответ:** Assert response is object доказывает correct imported identifiers? yes/no.
7. **Краткий ответ:** 5 distinct cases executed + 2 repeats одного case: execution attempts? Число.
8. **Краткий ответ:** Нет sandbox access: это само по себе product failure? yes/no.
9. **Развёрнутый ответ:** Новый Willow Import 4.2/build 420, sandbox Training: файл содержит 2–6 строк; valid импорт добавляет ровно эти identifiers в порядке файла, existing rows сохраняются. Duplicate identifiers должны отвергаться без новых rows. План W1 ordinary three distinct passed; W2 lower two passed; W3 upper six failed, imported five; W4 one row rejected passed; W5 seven rows rejected passed; W6 duplicate file not run; W7 real storage blocked, нет credential. Fresh sandbox copy, in-memory storage double. Предложи W6 с конкретными IDs и assertions.
10. **Развёрнутый ответ:** Willow existing rows сохраняются по требованию, но в batch проверяли только imported IDs/count. Напиши ограниченный вывод и missing assertion.
11. **Развёрнутый ответ:** Willow: позднее W3 повторили дважды, оба раза imported six, build тот же, code change не сообщалось. Напиши first-batch и late counts раздельно.
12. **Развёрнутый ответ:** Напиши полный Willow plan/report 320–420 слов по dossier 9–11. Дополнение: coverage 9/12 instrumented statements import function; Mara предлагает review plan, не storage access. Scope, expectations, actual, repeats, missing checks и next steps обязательны.
13. **Развёрнутый ответ:** Что говорит passing object-only smoke на returned object с пятью IDs вместо шести?
14. **Устная работа:** Партнёр спрашивает неизвестный заранее вопрос о Willow duplicate case. Уточни условия, предложи проверку и получи его read-back.
15. **Развёрнутый ответ:** Партнёр устно даёт новый testing brief с поправкой числа и роли. До чтения запиши услышанное, исходное и исправленное, доступ к тексту.
16. **Развёрнутый ответ:** Задай по услышанному один вопрос о missing check; сохрани ответ и summary 60–90 слов.
17. **Устная работа:** Объясни партнёру actual five / expected six; партнёр оспаривает conclusion. Ответь и уточни его основание.
18. **Развёрнутый ответ:** Исправь We expected for six rows. Could you explain why does W3 fail? Сохрани нейтральный смысл.
19. **Развёрнутый ответ:** Коллега пишет 75% coverage proves 75% of requirements. Ответь 3–4 предложениями.
20. **Устная работа:** Партнёр считает Mara владельцем access. Уточни, на что она согласилась, договорись о предложенном следующем шаге с ограничением/отказом.
21. **Развёрнутый ответ:** Получив реальный feedback на исходник 12, запиши цитаты и 2–3 решения. До обсуждения pending.
22. **Развёрнутый ответ:** Сохрани полную редакцию Willow plan/report 320–420 слов отдельным ответом после обсуждения.
23. **Устная работа:** В устном handover сначала допусти и сразу исправь неточную единицу cases/attempts, затем проверь пересказ партнёра.
24. **Развёрнутый ответ:** Новый Bramble toggle: false означает keep hidden, true show, omitted означает no change. Предложи три cases и вопрос о null.
25. **Устная работа:** Другой собеседник применяет твой Bramble plan к собственному состоянию и задаёт неожиданный follow-up. Проверь понимание.
26. **Развёрнутый ответ:** Через семь дней создай отчёт 180–240 слов по новому brief с другим поведением, данными и журналом.
27. **Развёрнутый ответ:** Раздели expanded T03 / 100% filled / 8 closed answers correct / open reviews pending / delayed check not done.
28. **Развёрнутый ответ:** По ручному разбору выбери 2–3 типа ошибок, новую адресную практику и другой test variant.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: rejects. Singular parser + rejects.
2. Ключ: run. Третья форма run, не Past ran.
3. Ключ: fails. Embedded question не требует вопросительного does.
4. Ключ: be. Modal passive be + V3.
5. Ключ: 6. Верхняя граница входит в диапазон, это не Fern 20.
6. Ключ: no. Тип контейнера не проверяет значения identifiers.
7. Ключ: 7. Повторы увеличивают attempts, не distinct cases.
8. Ключ: no. Выполнение заблокировано; результат продукта не получен.
9. Возможный образец (не единственный ответ): Новый duplicate case с повторяющимся ID, required rejection, no added rows and preservation of existing rows.. Здесь duplicates определены; не переносить unknown из Fern.
10. Возможный образец (не единственный ответ): Existing-row preservation remains unverified; compare independent before/after state. Нет доказанного повреждения.. Не превращать требование в выполненную проверку.
11. Возможный образец (не единственный ответ): First: five executed, four passed/one failed; one not run/one blocked. Later two passing repeats; seven attempts/five cases.. Оригинальная failure не удаляется; поздний pass не доказанный fix.
12. Возможный образец (не единственный ответ): Связный самостоятельный документ, coverage 75% в указанной функции, not all requirements; duplicates rejection known.. Нет реального запуска учеником. Не копия Fern с именем Willow; original отдельно от revision.
13. Возможный образец (не единственный ответ): Only object type passed; the count/content requirement still failed.. Не уравнивать разные assertions и не менять expected на actual.
14. Возможный образец (не единственный ответ): Реальные реплики; duplicate rejection задан, не неизвестен как в Fern.. Без партнёра pending; pronunciation/fluency только по аудио.
15. Возможный образец (не единственный ответ): Новые реальные факты и единицы case/attempt; не самостоятельное чтение Willow.. При видимом тексте text-supported; без источника pending.
16. Возможный образец (не единственный ответ): Реальное адресное уточнение, не выдуманный статус.. Отдельно неизвестное и обещанные действия.
17. Возможный образец (не единственный ответ): Новый follow-up, ограниченный вывод, согласие не обязательно.. Не объявлять root cause по одному mismatch.
18. Возможный образец (не единственный ответ): We expected six rows. Could you explain why W3 fails?. Direct object и embedded order; полный ответ проверяется содержательно.
19. Возможный образец (не единственный ответ): Nine of twelve instrumented statements in import function executed; requirement correctness and assertion strength are separate.. Не выдумывать coverage всего приложения.
20. Возможный образец (не единственный ответ): Review offer не ownership credentials; реальная реакция партнёра.. Не создавать фиктивное согласие или deadline.
21. Возможный образец (не единственный ответ): Фактические замечания и объяснение принятия/отклонения.. Это журнал решений, не полная редакция.
22. Возможный образец (не единственный ответ): Все требования, statuses, history и ограничения сохраняются; original не затирается.. До реального feedback pending; changelog не заменяет текст.
23. Возможный образец (не единственный ответ): Реальная самопоправка: five distinct cases, seven attempts после repeats.. Не спутать это с пятью planned cases: planned семь.
24. Возможный образец (не единственный ответ): False/true/omitted различаются; null не определён, нужен вопрос, не выдуманный rejection.. Новый перенос не numeric range Fern.
25. Возможный образец (не единственный ответ): Реальные входы, состояние и неизвестные ограничения.. Не монолог двух ролей; pronunciation/fluency unknown без звука.
26. Возможный образец (не единственный ответ): Новая самостоятельная работа, реальная дата/отсрочка и source of evidence.. До выполнения pending; переписанное имя Willow не новый материал.
27. Возможный образец (не единственный ответ): Статус публикации, объём заполнения, узкая автопроверка и отсутствующее подтверждение навыка.. Ни один из первых трёх не завершает последние два.
28. Возможный образец (не единственный ответ): Фактические цитаты и план проверки, без фиктивного результата.. Речь и полные тексты не оцениваются совпадением с моделью.

</details>

### Вариант B

1. **Краткий ответ:** The check does not ___ the stored value. (compare/compares)
2. **Краткий ответ:** We ___ the filter yesterday. (run/ran)
3. **Краткий ответ:** Return at ___ three rows: не более. (most/least)
4. **Краткий ответ:** If a label ___ empty, reject it. (is/will be)
5. **Краткий ответ:** Новый Rowan search contract: trim query, empty query shows all rows. Empty query обязательно invalid? yes/no.
6. **Краткий ответ:** Одна visible row доказывает correct complete result set? yes/no.
7. **Краткий ответ:** 4 distinct cases executed, затем 1 дополнительный run: execution attempts? Число.
8. **Краткий ответ:** Исходник assertion drafted означает shared test changed? yes/no.
9. **Развёрнутый ответ:** Новый Rowan Search 5.0/build 500: source rows R1 Blue sky, R2 blue sea, R3 Red leaf. Query trimmed по краям, case-insensitive substring; empty query показывает все три, source не изменяется. R1-case query BLUE ожидает R1/R2, passed. R2-case query leaf ожидает R3, passed. R3-case query spaces-only ожидает все три, failed actual no rows. R4-case query fog ожидает empty, passed. R5-case keyboard Enter not run. R6-case real search-service integration blocked: нет test account. Fresh fixtures, local search double. Составь empty-query case, expected IDs и assertions.
10. **Развёрнутый ответ:** Rowan: source unchanged не проверяли в batch; коллега объявляет data loss. Напиши ответ.
11. **Развёрнутый ответ:** Позже R3-case повторили один раз, снова no rows: failed. Версия/setup прежние, code change не сообщалось. Назови batch и total counts.
12. **Развёрнутый ответ:** Создай Rowan testing note/report 320–420 слов по dossier 9–11. Coverage 7/10 instrumented branches local filter; Luca предлагает review wording, не implement или obtain account. Добавь cases, assertions, exact outcomes и missing work.
13. **Развёрнутый ответ:** Коллега предлагает assert visibleCount >= 0. Объясни, почему такая проверка не различает нужные Rowan outputs.
14. **Устная работа:** Партнёр спрашивает, почему empty Rowan valid, а spaces-only Maple rejected. Объясни по контрактам и получи новый вопрос.
15. **Развёрнутый ответ:** Партнёр сообщает новый hidden audio brief: filter rule, count, self-correction и commitment. Запиши две версии и итог до текста.
16. **Развёрнутый ответ:** Уточни услышанное обязательство и сохрани ответ. Сделай summary 60–90 слов без усиления.
17. **Устная работа:** Партнёр задаёт неожиданный вопрос о повторе Rowan failure. Ответь, что повтор устанавливает и чего не устанавливает.
18. **Развёрнутый ответ:** Исправь The test do not checks contents. Could you tell me why does it fail?
19. **Развёрнутый ответ:** Коллега считает 70% branches равным 70% passed cases. Напиши объяснение с числами.
20. **Устная работа:** Обсуди с партнёром access blocker. Он отказывается получать account, но принимает ограниченный шаг. Зафиксируй только принятое.
21. **Развёрнутый ответ:** После реального feedback на исходник 12 сохрани цитаты и 2–3 решения; до него pending.
22. **Развёрнутый ответ:** Сохрани полную редакцию Rowan report 320–420 слов отдельно после обсуждения.
23. **Устная работа:** В отчёте устно поправь three executed на four executed и попроси партнёра пересказать statuses.
24. **Развёрнутый ответ:** Новый Heath sort: ascending numbers, duplicates preserved. Input [3,1,1]. Назови expected и два assertions; source mutation contract неизвестен.
25. **Устная работа:** Партнёр применяет Heath к новому input и оспаривает один proposed assertion. Обсуди и проверь read-back.
26. **Развёрнутый ответ:** Через семь дней напиши testing report 180–240 слов по новому non-search brief и новому журналу.
27. **Развёрнутый ответ:** Объясни, почему full topic progress и оба отправленных варианта не являются автоматически mastery.
28. **Развёрнутый ответ:** После ручной оценки укажи реальные 2–3 пробела и новый материал адресного повторного теста.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: compare. После does not нужен base.
2. Ключ: ran. Past Simple для завершённого запуска.
3. Ключ: most. At most — верхняя граница, не минимум.
4. Ключ: is. Present в обычном реальном условии.
5. Ключ: no. В этом контракте empty допустим и означает all rows.
6. Ключ: no. Нужны идентификаторы и полнота, не только видимость.
7. Ключ: 5. Пять attempts на четырёх cases.
8. Ключ: no. Проект ещё не реализация общей проверки.
9. Возможный образец (не единственный ответ): Spaces-only → trimmed empty → R1/R2/R3, source unchanged; empty is valid.. Здесь R1/R2/R3 identifiers source, а R1-case… identifiers cases; не перепутать и не переносить Maple rejection.
10. Возможный образец (не единственный ответ): No source comparison was made, so source preservation remains unverified; no established data loss.. Исчезновение из filtered view не доказательство удаления source.
11. Возможный образец (не единственный ответ): First four executed: three passed/one failed; keyboard not run, integration blocked. Five attempts/four cases, both R3-case runs failed.. Не переносить passing repeat из Maple или Willow.
12. Возможный образец (не единственный ответ): 70% branch coverage только local filter; full independent text, no source deletion claim, empty query valid.. Не копировать statement coverage Fern; original хранится отдельно.
13. Возможный образец (не единственный ответ): Nonnegative count also accepts empty output for the spaces-only case; expected exact IDs/set needed.. Не утверждать, что любой count assertion бессмысленен.
14. Возможный образец (не единственный ответ): Разные requirements, не противоречие общего английского правила.. Реальный follow-up; без аудио фонетические шкалы unknown.
15. Возможный образец (не единственный ответ): Реальное новое аудирование, конкретные услышанные данные.. Без источника pending; видимый текст = text-supported.
16. Возможный образец (не единственный ответ): Фактический scope accepted action; unknown owner/date если их не назвали.. Не приписывать fix тому, кто только review offered.
17. Возможный образец (не единственный ответ): Failure recurred under documented setup, root cause still unknown; не доказательство всей системы.. Реальная реплика и адресный ответ.
18. Возможный образец (не единственный ответ): The test does not check contents. Could you tell me why it fails?. Base и embedded subject–verb; полные ответы вручную.
19. Возможный образец (не единственный ответ): Seven of ten instrumented branches executed; three of four first-batch cases passed. Это разные единицы/знаменатели.. Не смешивать поздний failed attempt в число distinct cases.
20. Возможный образец (не единственный ответ): Реальные слова, owner/scope, неподтверждённый срок не выдумывается.. Luca review wording не автоматическое access ownership.
21. Возможный образец (не единственный ответ): Фактические замечания, аргументы и приоритеты.. Не выдумывать чужие отзывы.
22. Возможный образец (не единственный ответ): Полный документ, empty valid, exact IDs, first/repeat counts, scope и unknown сохранены.. Changelog не заменяет revision; original не затирается.
23. Возможный образец (не единственный ответ): Four executed: three passed, one failed; две остальные planned не выполнены.. Реальная самопоправка и read-back, не только запись сценария.
24. Возможный образец (не единственный ответ): Expected [1,1,3]; order and retained duplicates/count; ask whether source must be unchanged.. Не объявлять неизвестный mutation policy ни valid, ни bug.
25. Возможный образец (не единственный ответ): Фактический input/follow-up, допустимо обоснованное несогласие.. Не две роли в одном монологе.
26. Возможный образец (не единственный ответ): Реальная отсрочка, самостоятельные cases/assertions/results и неизвестное.. До выполнения pending; переименование Rowan недостаточно.
27. Возможный образец (не единственный ответ): Open responses требуют ручных шкал, речь звука, delayed application фактической проверки.. Повторная отправка не превращает unknown в доказанный навык.
28. Возможный образец (не единственный ответ): Цитаты, основания и конкретная практика; до оценки pending.. Не фабриковать результаты ученика.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Тестирование: условия, проверки, результаты и пределы выводов](../appendices/testing-language.md)
- [Уточнение задачи и язык проверки исправлений](../appendices/verification-language.md)
- [API-контракт: формы, состояния, ошибки и повторы](../appendices/api-contract-language.md)
- [Правила, советы и условия: карта A203](../appendices/rules-conditions.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [Playwright: testing behaviour and isolation](https://playwright.dev/docs/best-practices)
- [Playwright: assertions and waiting for a condition](https://playwright.dev/docs/test-assertions)
- [Google Testing Blog: code coverage best practices](https://testing.googleblog.com/2020/08/code-coverage-best-practices.html)

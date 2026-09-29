# T02-verification · Уточнение задачи и проверка исправления: критерии, результаты, следующий шаг

[Топик T02](../modules/T02.md). Сгенерировано из data/*.mjs.

Предпосылки: [T02-report](T02-report.md).

## Цели контроля

- Строить вопросы, условия и точные формы статуса
- Превращать неоднозначный запрос в проверяемые условия
- Сравнивать проверки, сохраняя условия и границы вывода
- Различать результат проверки, статус задачи и следующий шаг
- Извлекать критерии, исключения и свидетельства из переписки
- Удерживать устные уточнения и исправления отчёта
- Писать и полностью редактировать отчёт о проверке
- Согласовывать смысл и действия в реальном диалоге

## Механизм

### От запроса к проверяемому смыслу

Make it work better не задаёт наблюдаемый результат. Сначала назови объект и действие: keep the Open only filter when returning from a task to the list. Затем выясни границы: same tab, new tab или new sign-in? Не дописывай недостающее как уже согласованное. Скажи My understanding is that… Is that correct? и попроси собеседника подтвердить или исправить именно понимание. Request — запрос, requirement — требование, acceptance condition — условие приёмки; эти слова не гарантируют, что текст полон или принят командой. В этой подтеме критерии и версии вымышлены. Мы учимся точно говорить о работе, не исполняем реальные операции над чужим tracker или production.

### Уточняющий вопрос имеет предмет

Can you clarify? допустимо, но часто не помогает человеку выбрать, что объяснять. Сравни Could you clarify whether the filter should survive a new sign-in? и Which return route does this request cover? В первом названо различие yes/no, во втором требуется определить маршрут. Не спрашивай сразу десять несвязанных вопросов: обозначь главное допущение и его влияние. Do you mean the displayed list or the selected indicator? не предполагает, что верен только один: ответ может быть Both. После ответа переформулируй условие своими словами и проверь его на конкретном примере. Молчание или Thanks не подтверждают принятие твоего предложения.

### Прямой и встроенный вопрос

Прямой вопрос: Which build did you check? Вежливая рамка: Could you tell me which build you checked? Внутри subject + verb, без отдельного did перед you. Если вопрос о подлежащем, Who checked the build? уже имеет правильный порядок; не добавляй did только из-за who. Для да/нет: Could you confirm whether Reset should work with the keyboard? If также возможно в таком косвенном вопросе, но whether перед to-infinitive обязательно: We need to decide whether to retest. Вежливое could не требует прошедшего времени в условии: Could you tell me whether the fix is available? Will допустим внутри вопроса о будущем: Do you know when the build will be available? Это не придаточное времени When the build is available, we will check it.

### Критерий связывает исходное состояние, действие и результат

Полезная структура: With Open only selected, open a task and return to the list. The list should contain only open tasks, and the indicator should remain active. Исходное состояние объясняет, к чему применимо действие, результат делает ожидание наблюдаемым. Should здесь означает ожидаемое по согласованному правилу, не свидетельство того, что уже случилось. Must может обозначать обязательность, но сам выбор слова не доказывает наличие утверждённого требования. Из Faster нельзя вывести within two seconds: единицу, порог и условия надо согласовать. Не превращай авторскую учебную формулировку в универсальный стандарт QA. Полнота критерия зависит от конкретной задачи.

### Only, both, unless и границы условия

Only open tasks ограничивает тип показанных задач; all tasks включает и closed. Both the list and the indicator значит проверить два объекта, а не выбрать любой один. The filter stays active until Reset is selected описывает временную границу; Reset might fail не является подтверждением её соблюдения. Unless the user selects Reset = if the user does not select Reset в этой положительной условной модели. Не заменяй механически любое if на unless. Out of scope значит вне обсуждаемого объёма, не невозможно, не безопасно и не работает. New sign-in is out of scope for this request не разрешает объявить его passed или навсегда исключить из продукта. При сомнении запроси границу, не угадывай.

### Проверка исправления требует сравнимого контекста

The candidate build passed my check понятно только вместе с тем, что проверялось. Назови baseline build, candidate build, browser/OS, данные, состояние до действия и повторную подготовку. Если одновременно изменились build и browser, нельзя уверенно приписать различие только коду. При этом одинаковая записанная конфигурация не доказывает, что все возможные факторы контролировались. Формулируй In the same stated setup… и сохраняй неизвестное. A trial — попытка; три trials одной account не три пользователя. Не объединяй разные маршруты и разные условия в один процент без объяснения знаменателя. Вымышленное число повторов в задании — данные кейса, не научно установленное достаточное число для любого тестирования.

### Retest и regression check не одно и то же

Retest the reported route — повторно проверить заявленный сбой после изменения. Check related behaviour — посмотреть, не нарушено ли другое поведение; regression testing обычно шире одного исходного шага. Успешный retest не доказывает отсутствие всех регрессий, а неизвестная старая версия не подтверждает, когда дефект появился. В нашем чтении return route и keyboard Reset — разные проверки одного согласованного запроса. Устранение первого несоответствия не отменяет второго. Говори The return route met the condition in three trials, but keyboard Reset still showed a mismatch. Не объявляй причину или архитектурное исправление по одному скриншоту. Полный план QA за рамками этой языковой подтемы.

### Passed, failed, blocked, not run: что именно произошло

В учебных отчётах passed означает, что выполненная проверка дала согласованный ожидаемый результат; failed — выполненная проверка ему не соответствовала. Blocked означает, что провести проверку мешает названная причина: нужное учебное устройство недоступно. Not run — проверка ещё не выполнена; это не доказанный успех и не дефект продукта. Конкретные названия и правила статусов отличаются у команд, поэтому всегда добавляй факты. A test failed и I failed to run the test различны: во втором я не смог запустить проверку. Не считать заблокированную проверку отрицательным результатом продукта, но и не скрывать риск недостающего охвата. Назови, согласована ли необходимость этой проверки для данного решения.

### Время, пассив и свидетельство выполнения

I tested build 242 yesterday — завершённое событие в указанном прошлом. I have tested build 242 — опыт/результат к сейчас. The build has been tested — Present Perfect passive: has + been + V3; был проверен, но не обязательно успешно. It is being tested — процесс, не завершение. It needs to be tested — необходимость, не начатая работа. The change was merged говорит о слиянии, не проверке и не доставке пользователям. Различай developer says it is fixed и we verified the stated behaviour: источник утверждения и собственное наблюдение не взаимозаменяемы. В свободном тексте допускай нормативные UK/US варианты времени при сохранённом смысле, не проверяй всё по одной образцовой строке.

### Still, yet, already и no longer

The list is still filtered — состояние продолжается. We have not checked touch input yet — до текущего момента проверки нет. We have already checked the return route — это уже сделано, но слово already само не говорит об успехе. The indicator is no longer active — прежде активный индикатор теперь не активен; no longer не требует дополнительного not. С обычным смысловым глаголом: The list still shows two tasks; с be: The list is still filtered. Not yet verified не равно verified as broken. Утверждение The problem no longer occurs нужно ограничить фактическими условиями; один удачный trial не доказывает, что проблема исчезла повсюду навсегда. Контекст важнее наречия.

### Статус задачи, изменение и deployment

Open/closed, fixed, merged, released и verified отвечают на разные вопросы. В конкретной системе issue может быть закрыта по разным причинам; документация GitHub прямо допускает закрытие, когда работа не планируется, а не только после исправления. GitHub также поддерживает автоматическое закрытие связанных issues при соответствующем merge. Это свойства инструмента, не доказательство проверки нашего вымышленного приложения. Пиши The issue is closed, but I have not found verification evidence вместо It must be fixed. Сведения о merge не подтверждают live deployment. Чтобы назвать доступность, нужны конкретная среда, версия и основание; не выдумывай release date из будущего плана. Источники приведены в приложении.

### Частичный результат и корректный follow-up

Начни с подтверждённого: The return checks met the condition. Затем назови оставшееся: Keyboard Reset did not do so consistently. Опиши шаг, actual, expected и условия, не человека как виновника. Could you investigate the mismatch? — просьба, а не назначение согласованной ответственности. I can review the notes не обязательно I will implement a fix. Предложи следующий check и спроси, кто его принимает; не указывай чужой срок без согласия. Reopen может обозначать действие с issue, но учебный текст не разрешает менять реальный tracker. Если статус или процесс команды неизвестны, попроси подтвердить нужный workflow. Вежливость совместима с ясным несогласием с выводом resolved.

### Услышать поправку и проверить понимание

I checked 87 — sorry, 88 исправляет номер в сообщении, не описывает обновление во время разговора. Сохрани исходное и исправленное, затем пересчитай вывод: All passed — actually, one of two passed меняет оценку результата. Слушай окончания tested /ˈtestɪd/, checked /tʃekt/, passed /pɑːst/ в UK-модели и отрицание not yet. US /pæst/ нормативно, акцент сам не ошибка. Транскрипт показывает содержание, но не подтверждает произношение или oral fluency. TTS здесь один рассказчик, не аутентичная многоголосая встреча. В контрольном диалоге партнёр готовит заранее не показанное сообщение, реальную поправку и неожиданный follow-up; прочитанный заранее сценарий помечается text-supported.

### Полный документ и полная редактура

Verification note связывает requirement/scope, environment, последовательность, baseline/candidate observations, unmet conditions, unknowns и конкретную просьбу. Не заменяй связное объяснение словом passed или набором чисел. Сначала используй шесть полнотекстовых моделей как примеры разных коммуникативных задач; затем пиши самостоятельный отчёт на новом досье. После реального отзыва сохраняй исходник, полный исправленный текст и причины важных изменений отдельно. Журнал правок не заменяет редакцию. Отмечай сильные фразы и работай с двумя-тремя главными типами ошибок за подход. Объём текста нужен для достаточного свидетельства навыка, а не для выдумывания отсутствующих результатов ради слов.

### Новый контроль, отсрочка и граница публикации

Два итоговых варианта проверяют те же цели на новых условиях; короткие ключи не оценивают открытые отчёты и разговор. Партнёр должен задать реальный неожиданный вопрос и получить адресный ответ; Yes без пересказа не гарантирует понимание. Через семь дней нужен другой кейс и новое применение, а не переименование Orchid. Пока нет реального отзыва, звука или отложенного свидетельства, соответствующая проверка остаётся pending/unknown. Отчёты о ходе работы и передача задачи опубликованы в третьей подтеме T02. Все три заявленные линии наполнены: expanded описывает содержание, а 100% полей — заполнение, не mastery. Ученик продолжает незавершённое позже; время занятия не уменьшает объём.

## Примеры с разбором

- **Could you clarify what return means here?** — Уточни, что здесь означает return. Встроенный вопрос без инверсии.
- **Which build did you check?** — Какую сборку ты проверил? Прямой вопрос с did.
- **Could you tell me which build you checked?** — Скажи, какую сборку ты проверил. Внутри you checked, не did you check.
- **Do you know when the build will be available?** — Известно ли, когда сборка будет доступна? Косвенный вопрос допускает will.
- **When the build is available, we will check it.** — Когда сборка будет доступна, мы её проверим. Временное придаточное с настоящим.
- **We need to decide whether to retest.** — Нужно решить, повторять ли проверку. Whether перед to-infinitive.
- **Do you mean the list or the indicator?** — Ты имеешь в виду список или индикатор? Both тоже возможный ответ.
- **My understanding is that both should stay unchanged.** — Я понимаю так: оба должны остаться неизменными. Интерпретация требует подтверждения.
- **Only open tasks should be visible.** — Должны быть видны только открытые задачи. Only ограничивает состав списка.
- **Both the list and the indicator matter.** — Важны и список, и индикатор. Не достаточно одного объекта.
- **The filter remains active unless the user selects Reset.** — Фильтр остаётся активен, если пользователь не выберет Reset. Положительное условие с unless.
- **A new sign-in is outside this request.** — Новый вход не входит в этот запрос. Не утверждение об исправности.
- **No response-time target has been agreed.** — Цель по времени отклика не согласована. Не добавлять выдуманный порог.
- **I used the same stated setup for both builds.** — Для обеих сборок использовано указанное одинаковое окружение. Не все возможные скрытые факторы.
- **The return route passed all three candidate checks.** — Маршрут возврата прошёл три проверки кандидата. Названы маршрут и граница.
- **The second Reset check did not meet the condition.** — Вторая проверка Reset не удовлетворила условию. Проведена и неуспешна.
- **I could not run the touch check because the device was unavailable.** — Проверку касания не удалось провести без устройства. Blocked, не defect result.
- **I have not checked mouse Reset yet.** — Reset мышью пока не проверен. Not yet не failed.
- **The build has been tested.** — Сборка была проверена. Perfect passive, не обязательно passed.
- **The build is being tested.** — Сборку сейчас проверяют. Процесс, не завершение.
- **The build needs to be tested.** — Сборку нужно проверить. Необходимость, не начатое действие.
- **The list still shows only two tasks.** — Список всё ещё показывает только две задачи. Still перед смысловым глаголом.
- **The indicator is no longer active.** — Индикатор больше не активен. No longer без дополнительного not.
- **We have already checked that route.** — Этот маршрут мы уже проверили. Already не сообщает результат.
- **The change was merged, but deployment is unconfirmed.** — Изменение слито, но развёртывание не подтверждено. Два разных статуса.
- **The issue is closed for a reason we have not confirmed.** — Issue закрыта по пока не выясненной причине. Статус не свидетельство исправления.
- **The developer reports a fix; we still need to verify it.** — Разработчик сообщает об исправлении; его ещё нужно проверить. Атрибуция и собственная проверка различны.
- **I checked 87 — sorry, I mean 88.** — Я проверил 87 — извини, я имею в виду 88. Поправка сообщения, не новая установка.
- **Could you investigate the remaining mismatch?** — Можешь исследовать оставшееся несоответствие? Просьба, не согласованное назначение.
- **She agreed to review the notes, not to implement a fix.** — Она согласилась изучить записи, а не сделать исправление. Сохрани объём принятого действия.
- **Please confirm who will run the next check.** — Уточни, кто проведёт следующую проверку. Will в косвенном вопросе о подлежащем.
- **Although the return route met the condition in three trials, keyboard Reset still failed once, so I cannot confirm that the whole request is satisfied.** — Хотя возврат соответствовал условию в трёх попытках, Reset с клавиатуры один раз не сработал; весь запрос не подтверждён. Сложная уступка, ограничение и вывод.

## Вопросы, условия и формы статуса

1. **Краткий ответ:** Could you tell me which build you ___? (checked/did check; нейтральная форма без эмфазы)
2. **Краткий ответ:** We need to decide ___ to repeat the check. (whether/if)
3. **Краткий ответ:** The build has ___ tested. (been/being)
4. **Краткий ответ:** The build is ___ tested right now. (being/been)
5. **Краткий ответ:** The list ___ shows open tasks only. (still/yet)
6. **Краткий ответ:** We have not checked the other route ___. (yet/already; нейтральное «пока не»)
7. **Краткий ответ:** When the build ___ available, we will check it. (is/will be)
8. **Краткий ответ:** No response-time target has been ___. (agree/agreed)
9. **Развёрнутый ответ:** Исправь Could you explain what does the Reset button do?
10. **Развёрнутый ответ:** Сопоставь I tested it yesterday и I have tested it in this setup.
11. **Развёрнутый ответ:** Переведи «Индикатор больше не активен, но список всё ещё отфильтрован».
12. **Развёрнутый ответ:** Поставь прямой и вежливый вопрос о том, кто проверил build.
13. **Развёрнутый ответ:** Объясни разницу Do you know when it will arrive? / When it arrives, we will test it.
14. **Развёрнутый ответ:** Напиши 3 фразы: требуется проверить, сейчас проверяется, уже проверено; не добавляй passed без результата.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: checked. Встроенный вопрос с обычным порядком; did check возможно как особое усиление, не требуется здесь.
2. Ключ: whether. Перед to-infinitive нужен whether.
3. Ключ: been. Perfect passive has been + V3.
4. Ключ: being. Continuous passive is being + V3.
5. Ключ: still. Продолжающееся действие; yet здесь не замена still.
6. Ключ: yet. Not…yet для невыполненного к сейчас.
7. Ключ: is. Обычное придаточное времени, не вопрос when.
8. Ключ: agreed. После has been нужна V3 agreed, не base agree.
9. Возможный образец (не единственный ответ): Could you explain what the Reset button does?. Внутренний порядок и -s у does; открытая пунктуация.
10. Возможный образец (не единственный ответ): Первое — законченный прошлый момент; второе — результат/опыт к сейчас с указанным окружением.. Не выводить успех проверки по времени.
11. Возможный образец (не единственный ответ): The indicator is no longer active, but the list is still filtered.. Два объекта, no longer без not, still после be.
12. Возможный образец (не единственный ответ): Who checked the build? Could you tell me who checked the build?. Who является подлежащим, did не требуется.
13. Возможный образец (не единственный ответ): Косвенный вопрос о будущем / придаточное времени.. Не универсальный запрет will после when.
14. Возможный образец (не единственный ответ): It needs to be tested. It is being tested. It has already been tested.. Разные свидетельства и стадии.

</details>

## Уточнение и критерии приёмки

1. **Краткий ответ:** Both the list and the indicator: достаточно только одного? yes/no.
2. **Краткий ответ:** Out of scope означает подтверждённо работает? yes/no.
3. **Краткий ответ:** Make it faster задаёт точный предел в секундах? yes/no.
4. **Развёрнутый ответ:** В запросе Keep the filter when I return найди минимум 3 возможных значения return и задай адресный вопрос.
5. **Развёрнутый ответ:** Коллега отвечает Both на вопрос list or indicator. Переформулируй критерий полностью.
6. **Развёрнутый ответ:** Напиши условие Reset: подготовка, действие keyboard, ожидаемый список и indicator.
7. **Развёрнутый ответ:** Перепиши It should work properly в проверяемое условие возврата Orchid.
8. **Развёрнутый ответ:** Переведи «Новый вход вне этого запроса; его поведение ещё неизвестно».
9. **Развёрнутый ответ:** Запрос Faster search. Предложи 2 вопроса о данных и времени, не выдавая число за согласованное.
10. **Развёрнутый ответ:** Различи The filter stays active unless Reset is selected и It stays active even after Reset.
11. **Развёрнутый ответ:** Дана фраза must be accessible без модели проверки. Составь запрос уточнения, не выдавая клавиатуру за всю accessibility.
12. **Развёрнутый ответ:** Партнёр ответил Thanks на предложенный критерий. Напиши уточнение его статуса.
13. **Развёрнутый ответ:** Для кнопки Download предложи отдельные критерии видимости и фактического результата; пометь их proposed.
14. **Развёрнутый ответ:** Сформулируй короткий scope summary Orchid с включённым keyboard и двумя исключениями.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Both требует обоих объектов.
2. Ключ: no. Граница запроса не результат.
3. Ключ: no. Порог и условия ещё нужно уточнить.
4. Возможный образец (не единственный ответ): Возврат из task, новая tab, новый sign-in; Which return route does this request cover?. Не превращай варианты в согласованные требования.
5. Возможный образец (не единственный ответ): The list should contain only open tasks, and the Open only indicator should stay active after the stated return.. Не исправлять ответ на только один вариант.
6. Возможный образец (не единственный ответ): With Open only selected, activate Reset with the keyboard. Show open and closed tasks and remove the active indicator.. Проверяются два видимых результата.
7. Возможный образец (не единственный ответ): Указать same tab, Open only, task→list, только open tasks и active indicator.. Никаких придуманных секунд.
8. Возможный образец (не единственный ответ): A new sign-in is outside this request; its behaviour has not been checked.. Scope и знание отделены.
9. Возможный образец (не единственный ответ): Which data set should we use? What response time should the search meet under those conditions?. Вопросы, не самовольный SLA.
10. Возможный образец (не единственный ответ): В первом Reset исключение; второе сохраняет active после него, против нашего критерия.. Unless и even after меняют смысл.
11. Возможный образец (не единственный ответ): Уточнить нужные действия, пользователей, согласованные критерии и способ проверки; keyboard — один аспект.. Языковая задача не аудит доступности.
12. Возможный образец (не единственный ответ): Could you confirm whether you agree with that interpretation?. Вежливость не согласие.
13. Возможный образец (не единственный ответ): Proposed: button is visible under stated conditions; activating it provides the specified file. Please confirm the file and conditions.. Не выдавай своё предложение за текущий продукт.
14. Возможный образец (не единственный ответ): Same-tab return and keyboard Reset included; new tab and new sign-in excluded from this request.. Исключения не равны passed.

</details>

## Сравнение сборок и границы проверки

1. **Краткий ответ:** Две сборки и одновременно два разных browser изолируют влияние build? yes/no.
2. **Краткий ответ:** Три trials одной account — три accounts? yes/no.
3. **Краткий ответ:** Успешный retest одного маршрута доказывает отсутствие всех regressions? yes/no.
4. **Развёрнутый ответ:** Напиши список сравнимых условий Orchid и того, что изменилось.
5. **Развёрнутый ответ:** Сравни return route: 241 — неверный список 2/3; 242 — верный 3/3. Сохрани единицы.
6. **Развёрнутый ответ:** Индикатор active во всех trials обеих сборок. Почему его одного недостаточно?
7. **Развёрнутый ответ:** Различи повторную проверку исходного сбоя и проверку соседнего поведения на своём примере.
8. **Развёрнутый ответ:** Коллега не записал reset между попытками. Как это отразить без выдумывания?
9. **Развёрнутый ответ:** Перепиши Build 242 can never fail по имеющемуся return evidence.
10. **Развёрнутый ответ:** После смены browser симптом исчез. Напиши observation и отдельно осторожную hypothesis.
11. **Развёрнутый ответ:** Почему нельзя объединить return trials, Reset checks и blocked touch в «всё на 80% исправлено»?
12. **Развёрнутый ответ:** Составь новый план сравнения на вымышленных данных: preparation, baseline, candidate, 2 наблюдаемых объекта, unknown.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Меняется более одного записанного условия.
2. Ключ: no. Единицы различаются.
3. Ключ: no. Охват ограничен.
4. Возможный образец (не единственный ответ): App version 2.4, Reed 5, MeadowOS 7, training account/preparation; build 241→242.. Записанное совпадение не все скрытые факторы.
5. Возможный образец (не единственный ответ): Build 241 showed the wrong list in two of three trials; build 242 met the condition in all three candidate trials.. Не 3 человека, не исправлено навсегда.
6. Возможный образец (не единственный ответ): Он не различает верный и неверный состав списка; нужно наблюдать оба.. Видимость контроля не выполнение требования.
7. Возможный образец (не единственный ответ): Retest return route; separately check Reset or другой согласованный соседний путь.. Не выдавать одну проверку за полную regression suite.
8. Возможный образец (не единственный ответ): Preparation between trials was not recorded. Could you confirm whether the same starting state was restored?. Отсутствие записи не доказывает отсутствие reset.
9. Возможный образец (не единственный ответ): The return route met the condition in three trials of build 242 in the stated setup.. Не гарантия будущего.
10. Возможный образец (не единственный ответ): I did not observe the symptom in that browser. The environment may affect it, but this comparison does not isolate the cause.. Причина не доказана.
11. Возможный образец (не единственный ответ): Разные действия/условия и невыполненный check; такой процент не описывает покрытие или степень исправления.. Не статистический порог курса.
12. Возможный образец (не единственный ответ): Самостоятельная сравнимая последовательность, явно proposed и без заявленного успеха.. Учебная симуляция без реальных удалений.

</details>

## Результат, статус и следующий шаг

1. **Краткий ответ:** Проверка выполнена, результат не соответствует критерию: failed или not run?
2. **Краткий ответ:** Нужного устройства нет, проверка невозможна сейчас: blocked или passed?
3. **Краткий ответ:** Проверку ещё не начинали: not run или failed?
4. **Краткий ответ:** Merged автоматически подтверждает deployment? yes/no.
5. **Развёрнутый ответ:** Различи The test failed и I failed to run the test.
6. **Развёрнутый ответ:** Перепиши The build has been tested, so it passed.
7. **Развёрнутый ответ:** Issue closed; причина и результаты неизвестны. Напиши точный статус.
8. **Развёрнутый ответ:** Developer пишет fixed, ты не проверял. Сохрани источник и неизвестное.
9. **Развёрнутый ответ:** В Orchid какой результат мешает подтвердить весь согласованный scope, а какой дополнительный check blocked?
10. **Развёрнутый ответ:** Leo agreed to review evidence. Можно ли написать Leo will fix it by Friday? Исправь.
11. **Развёрнутый ответ:** Составь просьбу о next step с уточнением owner и без назначенного за другого срока.
12. **Развёрнутый ответ:** Предложи текст комментария о reopening без изменения реального tracker.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: failed. Есть отрицательное наблюдение.
2. Ключ: blocked. Названо препятствие, не результат продукта.
3. Ключ: not run. Нет свидетельства результата.
4. Ключ: no. Слияние и доставка различаются.
5. Возможный образец (не единственный ответ): Результат проведённой проверки отрицательный / не удалось провести проверку.. Нужна причина невозможности, не фиктивный product failure.
6. Возможный образец (не единственный ответ): The build has been tested, but we need the results to know whether it passed.. Пассив не содержит оценки результата.
7. Возможный образец (не единственный ответ): The issue is closed, but the reason and verification evidence are unconfirmed.. Закрытие бывает не только после fix.
8. Возможный образец (не единственный ответ): The developer reports a fix; I have not verified it yet.. Reported не independently verified.
9. Возможный образец (не единственный ответ): Keyboard Reset mismatch; touch blocked by unavailable device, его обязательность не согласована.. Не выдумать обязательность touch или игнорировать keyboard.
10. Возможный образец (не единственный ответ): Leo agreed to review the evidence. Ownership of the fix and a completion date are not agreed.. Review не implement, срок отсутствует.
11. Возможный образец (не единственный ответ): Could you confirm who can investigate the mismatch and who will run the next check?. Ответ на просьбу нужен отдельно.
12. Возможный образец (не единственный ответ): The agreed Reset condition is still unmet in this check. Could you confirm whether we should reopen the issue under our workflow?. Учебное сообщение, не внешняя отправка.

</details>

## Чтение: Orchid Tasks и частичное исправление

Orchid Tasks: what does “keep the filter” mean?

The team is discussing a fictional training application, Orchid Tasks. Its short request says, “Keep the filter when I return.” Nora, who will check the change, does not assume that everyone understands “return” in the same way. It could mean closing a task panel, opening a new tab, or signing in again. She asks Leo, the person responsible for this training requirement, which action the request covers. She also asks whether “keep” means preserving the button's appearance or preserving the actual list of results.

Leo clarifies the requirement. When a user selects Open only, opens a task, and returns to the list in the same tab, the list must still contain only open tasks and the Open only indicator must remain active. Reset must remove that filter and show both open and closed tasks. The agreed scope includes activating Reset with the keyboard. A new tab and a new sign-in are outside this particular request. Leo does not say those routes are unimportant or that they already work. They are simply not acceptance conditions for this change. No response-time target is agreed.

Nora prepares a training account containing two open tasks and one closed task. She records Orchid Tasks 2.4, the build number, Reed browser 5 and MeadowOS 7. Each return-to-list trial starts from that same prepared state with Open only selected. She opens one of the open tasks and returns to the list. In build 241, two of three trials show all three tasks after the return. The remaining trial shows only the two open tasks. The indicator stays active in all three trials, including the two incorrect lists. The unchanged indicator alone therefore cannot establish that the filter is working.

Nora then checks candidate build 242 with the same stated browser, operating system, account and preparation. All three return-to-list trials show only the two open tasks, with the indicator active. This supports a limited comparison with build 241 under the recorded conditions. It does not establish behaviour on every device or prove that the symptom can never recur. Three trials are a description of this exercise, not a universal testing threshold. Nora has not inspected the implementation and cannot identify the internal cause from these results.

Next she checks keyboard Reset in candidate build 242. Before each of two checks, she selects Open only again. In one check, Reset displays all three tasks and removes the active indicator. In the other, it removes the indicator but the list still contains only the two open tasks. That second result does not meet the agreed condition. Nora records the two observations separately instead of writing “Reset passed” or combining every observation into a misleading overall percentage. She has not performed a mouse Reset check. It would be wrong to report that unperformed check as either passed or failed.

A touch-device check is proposed as additional coverage, but the training device is unavailable. Nora records the reason it is blocked; she does not report a product failure on a device she never used. The team has not agreed that this optional check must block acceptance of the current request. The keyboard Reset result, however, concerns an explicitly agreed condition. It already prevents Nora from confirming that all those conditions have been met.

Leo says the candidate change has been merged. Nora asks whether build 242 has reached the live service. Leo has no deployment confirmation. “Merged,” “tested in this setup,” and “available to users” must remain separate claims. Nora drafts a follow-up that recognises the improved return route, explains the remaining Reset mismatch, and asks who can investigate it. Leo agrees to review the evidence, not to deliver another build by a promised date. The next check and its owner still need agreement. Nothing in this exchange authorises anyone to change a real tracker or production service.

1. **Краткий ответ:** Какой candidate build проверяет Nora? Только число.
2. **Краткий ответ:** Сколько return trials build 241 дали неверный список? Число.
3. **Краткий ответ:** Сколько return trials build 242 дали ожидаемый список? Число.
4. **Краткий ответ:** Сколько keyboard Reset checks кандидата не выполнили условие? Число.
5. **Развёрнутый ответ:** Почему исходное return требовало уточнения? Назови принятую границу.
6. **Развёрнутый ответ:** Назови исходные данные и два обязательных результата возврата.
7. **Развёрнутый ответ:** Что случилось в оставшемся третьем trial build 241?
8. **Развёрнутый ответ:** Опиши оба keyboard Reset результата, не теряя подготовку.
9. **Развёрнутый ответ:** Какая mouse проверка уже прошла? Исправь предпосылку вопроса.
10. **Развёрнутый ответ:** Почему touch blocked не доказывает defect на touch и не единственная причина отказа подтвердить scope?
11. **Развёрнутый ответ:** Что известно о merge и live deployment?
12. **Развёрнутый ответ:** Что принял на себя Leo и что не согласовано?
13. **Развёрнутый ответ:** Составь английское summary 100–140 слов: progress, unmet condition, scope, unknown, request.
14. **Развёрнутый ответ:** Коллега предлагает just close it. Ответь 4–6 предложениями на основе критериев и одного ограниченного результата.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 242. Build, не version 2.4.
2. Ключ: 2. Два из трёх, не все.
3. Ключ: 3. Три в записанном окружении.
4. Ключ: 1. Один из двух Reset checks не выполнил условие.
5. Возможный образец (не единственный ответ): Могли иметься в виду tab/sign-in/task; принят возврат task→list в той же tab.. Не все варианты одновременно включены.
6. Возможный образец (не единственный ответ): Две open/одна closed; только open в списке и active indicator.. Не просто правильный indicator.
7. Возможный образец (не единственный ответ): Список содержал только две open tasks, indicator active.. Сохрани исключение из 2/3 failures.
8. Возможный образец (не единственный ответ): Перед каждым Open only; один all three + no active indicator, другой only two + no active indicator.. Не all passed и не оба провалены.
9. Возможный образец (не единственный ответ): Mouse Reset не проверен; результат неизвестен.. Не перенести keyboard результат на mouse.
10. Возможный образец (не единственный ответ): Устройства нет; обязательность допохвата не согласована; keyboard уже не выполнил обязательное условие.. Разные основания.
11. Возможный образец (не единственный ответ): Merge сообщён Leo; deployment confirmation отсутствует.. Нет доказательства, что deployment точно не произошёл.
12. Возможный образец (не единственный ответ): Review evidence; fix owner, next-check owner/date не согласованы.. Не назначать действия за него.
13. Возможный образец (не единственный ответ): Связный вывод с успешным return и непостоянным Reset, без глобального fixed.. Самостоятельная ручная оценка.
14. Возможный образец (не единственный ответ): Назвать keyboard mismatch и попросить согласовать workflow, не менять tracker.. Факты без обвинений.

</details>

## Аудирование: Harbour Reader, поправки и незакрытый вопрос

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

A check-in about Harbour Reader

This fictional conversation is presented by one narrator. It concerns Harbour Reader, a training application for reading books. Mina starts by saying she checked build 87. She stops and corrects herself: the old comparison was build 87; today's candidate was build 88. Both belong to version 1.8. This is a correction to her report, not an update performed during the conversation. She used Fern browser 3 on CoastOS 6 with one training account.

The original request was “remember my text size.” Omar asks what “remember” covers. Mina reads the agreed condition: after the reader selects Large, both Next chapter and Back must keep Large within the same open book. Returning after sign-out and using a second device are not part of this request. They remain unknown, rather than confirmed working. Omar asks whether the menu label is enough to check. Mina says no: the displayed text must match the selected size, not merely keep the word Large in the menu.

In the old build 87, Mina made two Next chapter checks with Large selected before each check. Both checks displayed Small text in the next chapter, while the menu still said Large. In candidate build 88, she repeated the same stated preparation and made three Next chapter checks. All three displayed Large text, with Large also selected in the menu. Omar begins to summarise this as a verified release. Mina corrects that interpretation. These are observations in the training environment. She has no evidence that build 88 has been deployed to the live service.

She then describes Back in candidate build 88. At first she says that all the Back checks passed. Looking at her notes, she corrects herself: there were two checks, and only one kept Large text. The other showed Small text even though the menu still said Large. Both began with Large selected before navigating forward and then back within the same book. She keeps the mistaken summary and the corrected results in her notes so the reason for the change is clear. The correction does not mean the software changed during the call.

Omar asks about a new sign-in. Mina has not tested it because it is outside the agreed request. She also wanted to check the reader on another supported browser, but the training account for that environment is unavailable. That additional check is blocked by access, not known to have failed because of a display defect. The limited Next chapter improvement cannot cancel the remaining Back mismatch within the agreed scope.

For this exercise, the pair will record results as passed, failed, blocked or not run, with conditions and reasons. These are their reporting words, not mandatory status labels for every team's tracker. Omar offers to look at the Back notes. He has not accepted responsibility for implementing a fix or supplied a completion date. Mina asks him to confirm whether he can investigate the mismatch. They will decide the next test when they have an answer; the conversation ends without an agreed release or a confirmed owner for that test.

</details>

1. **Краткий ответ:** Какой candidate build Mina называет после первой поправки? Число.
2. **Краткий ответ:** Сколько Next chapter checks в candidate соответствовали условию? Число.
3. **Краткий ответ:** Сколько Back checks соответствовали условию после поправки? Число.
4. **Краткий ответ:** Размер в согласованном условии: Large или Small?
5. **Развёрнутый ответ:** Сохрани начальную и исправленную версию обеих поправок.
6. **Развёрнутый ответ:** Что показывали текст и меню в двух старых Next checks?
7. **Развёрнутый ответ:** Какие действия входят в условие и какие исключены?
8. **Развёрнутый ответ:** Опиши оставшееся Back несоответствие и сохранённую подготовку.
9. **Развёрнутый ответ:** Почему дополнительный browser check blocked?
10. **Развёрнутый ответ:** Что неверно в пересказе verified release?
11. **Развёрнутый ответ:** Что предлагает Omar и чего не обещает?
12. **Развёрнутый ответ:** Запиши английское summary 100–140 слов до открытия транскрипта; после сверки сохрани поправки отдельно.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 88. 87 — baseline, не новое обновление в звонке.
2. Ключ: 3. Все три Next chapter checks кандидата соответствовали условию.
3. Ключ: 1. Один из двух, не all.
4. Ключ: Large. Должны совпадать текст и выбор меню.
5. Возможный образец (не единственный ответ): Build 87→88 для candidate; all Back passed→one of two passed.. Поправки сообщения не изменение программы.
6. Возможный образец (не единственный ответ): Small text при Large menu оба раза.. Не менять направление mismatch.
7. Возможный образец (не единственный ответ): Next и Back в той же открытой книге; new sign-in и second device вне scope.. Исключённое остаётся unknown.
8. Возможный образец (не единственный ответ): В одном из двух Small при Large menu; Large выбирали перед движением вперёд/назад.. Не утверждать что Back никогда не работает.
9. Возможный образец (не единственный ответ): Нет training account для того окружения.. Не недоступное устройство Orchid и не display failure.
10. Возможный образец (не единственный ответ): Есть проверки в training environment, но нет live deployment evidence.. Отличие source и вывода.
11. Возможный образец (не единственный ответ): Look at Back notes, не fix implementation, дата и owner следующего теста не согласованы.. Offers to review не принятие всех задач.
12. Возможный образец (не единственный ответ): Версии/Next/Back/scope/blocker/unknown без выдуманной release.. Без прослушивания listening unknown; прочитанный текст text-supported.

</details>

## Письмо: полные уточнения, отчёт и редактура

Orchid — досье чтения, Harbour — отдельное аудирование, Flint полностью задан в упражнении 7. Полные авторские модели не заменяют самостоятельный текст. Все данные вымышлены; реальные trackers, аккаунты и production не изменяются.

1. **Развёрнутый ответ:** Напиши полный Orchid verification note на 200–260 слов: scope, setup, сравнение, Reset, неизвестное и просьба.
2. **Развёрнутый ответ:** Напиши до уточнения Leo письмо 120–160 слов: варианты return, список/indicator, keyboard и порог времени.
3. **Развёрнутый ответ:** Сформулируй уже уточнённые критерии Orchid и границы в 110–150 словах.
4. **Развёрнутый ответ:** Сравни результаты Orchid в 100–140 словах, сохранив ограничения.
5. **Развёрнутый ответ:** Напиши follow-up Leo на 100–140 слов с просьбой и честным состоянием ответственности.
6. **Развёрнутый ответ:** Напиши reflection 90–130 слов о слишком широком fixed и неподтверждённом deployment.
7. **Развёрнутый ответ:** Новый Flint Gallery 3.0: запрос keep selection при переходе grid→details→grid в той же tab; Clear мышью должен убрать selection и выделение. Учебные item A/B, Quartz 4, FieldOS 2, account test. В baseline build 300 selected A теряется 2/2; candidate 301 сохраняет A и highlight 3/3. Clear: 1 из 2 убирает selection и highlight; другой убирает highlight, но A остаётся selected. Keyboard Clear not run, mobile blocked без устройства; обязательность mobile не согласована. Merge сообщён, deployment неизвестен. Напиши полный отчёт 200–260 слов.
8. **Развёрнутый ответ:** К Flint поступило Keep selection everywhere. Напиши 100–140 слов уточнения: routes, session, expected state, scope; не объявляй ответ полученным.
9. **Развёрнутый ответ:** Коллега пишет Flint is released and verified. Ответь 100–140 словами по досье, отделяя сообщение о merge, наблюдения и неизвестное.
10. **Развёрнутый ответ:** Попроси реальный отзыв на свой Flint report по ясности, фактам и границам. Запиши 2–3 приоритетных замечания с цитатами либо pending.
11. **Развёрнутый ответ:** После отзыва полностью перепиши Flint report в 200–260 словах; исходник задания 7 оставь отдельно и объясни ключевые правки.
12. **Развёрнутый ответ:** Создай собственный вымышленный случай с 2 критериями и разными результатами. Напиши 200–260 слов и попроси партнёра восстановить scope.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Verification note: Orchid Tasks candidate build 242 I checked version 2.4 in Reed 5 on MeadowOS 7 using one training account with two open tasks and one closed task. The agreed requirement covers returning from a task to the list in the same tab and using keyboard Reset. New tabs and new sign-ins are outside this request. For the return route, I selected Open only, opened an open task and returned to the list. I restored the prepared state before each trial. In build 241, two of three trials showed all three tasks despite the active indicator. In candidate build 242, all three trials showed only the two open tasks, with the indicator active. The recorded comparison supports an improvement in this setup. Keyboard Reset did not consistently meet the condition in build 242. One check showed all three tasks and removed the indicator. The other removed the indicator but still showed only two open tasks. I have not checked mouse Reset. Additional touch coverage is blocked because the training device is unavailable. I cannot confirm that all agreed conditions are met. A merged change is not deployment confirmation, which we still lack. Could you confirm who can investigate the Reset mismatch? The next check and its owner are not yet agreed. These observations do not establish an internal cause or behaviour on other devices.. Полная модель, не единственная допустимая формулировка; не создавать новые наблюдения.
2. Возможный образец (не единственный ответ): Before I prepare the checks, could you clarify what “return” means in this request? Does it mean coming back from a task panel in the same tab, opening a new tab, or signing in again? Those are different conditions, and I do not want to choose one without confirmation. Could you also confirm what should remain unchanged? I suggest checking both the visible tasks and the filter indicator, because the indicator might stay active while the list changes. Should Reset work with the keyboard as part of this change? Please tell me whether any response-time target has been agreed. These are questions and a proposed interpretation, not approved acceptance conditions. Once you confirm the scope, I can write a checkable version and ask you to review it.. Модель запроса, а не уже принятого scope.
3. Возможный образец (не единственный ответ): The agreed return condition is specific. With Open only selected and two open tasks available, open an open task and return to the list in the same tab. The list should still contain only the two open tasks, and the indicator should remain active. Both the result list and the indicator matter. The Reset condition is separate. Starting with that filter selected, activate Reset with the keyboard. The list should show the open and closed tasks, and the indicator should no longer be active. New tabs and new sign-ins are outside this request. This scope statement does not claim those routes work. No response-time target has been agreed, so I will not invent one when judging the result.. Условия, действия и два результата; не придуманный threshold.
4. Возможный образец (не единственный ответ): The return-to-list comparison uses the same stated browser, operating system, training account and preparation. Build 241 showed an incorrect list in two of three trials, while build 242 showed the expected list in all three. The indicator remained active in both builds. This evidence supports an improvement in the recorded route, not a guarantee for every environment. It also says nothing about an internal cause. The keyboard Reset checks are separate observations: one met the condition and one did not. I would report that mismatch directly rather than average it away. Neither the unperformed mouse check nor the blocked touch check can be counted as a successful product result.. Не усреднять разные маршруты и blocked проверки.
5. Возможный образец (не единственный ответ): Thanks for reviewing the evidence. The return route met the condition in our three candidate checks, but keyboard Reset did not do so consistently. In one check, the indicator cleared while the list remained filtered. That is the remaining mismatch I am asking about. Could you confirm whether you can investigate it, or tell us who should receive the notes? I understand that you agreed to review them; I am not treating that as a promise to implement a fix. We have not agreed a date or the owner of the next check. I will keep those points open rather than assign them on your behalf.. Не срок за другого, не автоматическое назначение.
6. Возможный образец (не единственный ответ): My first summary said that the filter was fixed. That was too broad: I had used the successful return checks to describe the whole request. I changed the wording to identify the tested route and added the keyboard Reset result as a separate limitation. I also removed a claim that users already had the change. The information available to me confirms a merge, not deployment. In the next report, I will record the source and scope of each status statement before drawing a conclusion. This reflection explains two changes, but it does not replace the complete revised report or a new independent check.. Это модель; свои реальные ошибки не выдумывать.
7. Возможный образец (не единственный ответ): Самостоятельный связный verification note: success limited to return, unmet Clear, unperformed/blocked, no global fixed, next-step request.. Вымышленный новый объект, не копия Orchid со сменой имени.
8. Возможный образец (не единственный ответ): Конкретные вопросы, предложенные трактовки явно proposed.. Требования не выдумываются из everywhere.
9. Возможный образец (не единственный ответ): Limited return evidence, Clear mismatch, deployment unknown; вопрос о подтверждении.. Дипломатично и точно, без категоричного it was not released.
10. Возможный образец (не единственный ответ): Фактические замечания/автор/исходные фразы, не придуманный преподаватель.. Самооценка явно обозначена, не внешнее одобрение.
11. Возможный образец (не единственный ответ): Полный новый текст плюс реальные причины изменений.. Журнал не заменяет полную редакцию; без отзыва pending.
12. Возможный образец (не единственный ответ): Самостоятельные согласованные данные, полный отчёт и реальный пересказ; явно fiction.. Не операции с рабочими/личными данными.

</details>

## Речь и согласование смысла

1. **Устная работа:** Партнёр говорит Keep it as before, не раскрывая объект. Задай 2 уточняющих вопроса и перескажи реально полученный критерий.
2. **Устная работа:** Предложи партнёру критерий для возврата Orchid; он меняет одно условие. Выясни последствия и согласуй формулировку.
3. **Устная работа:** Объясни baseline/candidate Orchid; партнёр задаёт неожиданный вопрос об окружении.
4. **Устная работа:** Партнёр называет blocked check failed. Уточни смысл и попроси его пересказать разницу.
5. **Устная работа:** Оспорь общий fixed после частичного успеха, признавая подтверждённое улучшение.
6. **Устная работа:** Произнеси checked, tested, passed и We have not verified deployment yet. Партнёр повторяет смысл отрицания.
7. **Развёрнутый ответ:** Партнёр создаёт скрытое сообщение: новый build, route, counts, unknown. Запиши услышанное до открытия текста.
8. **Развёрнутый ответ:** Партнёр устно исправляет одну деталь этого сообщения. Сохрани обе версии и изменение вывода.
9. **Устная работа:** Партнёр предлагает только review notes. Уточни владельца следующей проверки и срок, не приписывая согласие.
10. **Устная работа:** Для Flint партнёр спрашивает Why isn't it ready? Ответь по условию Clear и границам данных.
11. **Развёрнутый ответ:** После обмена запиши неожиданный вопрос, свой ответ, пересказ партнёра и оставшийся пробел.
12. **Устная работа:** Партнёр выбирает другой привычный интерфейс и просит определить проверку. Обсуди критерий и один риск неверного вывода.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Живые ответы, уточнённые object/action/result; disagreement сохраняется.. Чтение обеих ролей не настоящий обмен.
2. Возможный образец (не единственный ответ): Реальная смена условия, не выдуманное yes.. Не согласовано остаётся не согласовано.
3. Возможный образец (не единственный ответ): Названные условия, честное unknown, адресный ответ.. Не новый setup из воображения как наблюдение.
4. Возможный образец (не единственный ответ): Реальная коррекция product result против невозможности провести.. Простое yes не пересказ.
5. Возможный образец (не единственный ответ): Return met condition, Reset still mismatches, вопрос о next step.. Не обвинение исполнителя.
6. Возможный образец (не единственный ответ): Реальное звучание; UK/US нормативные варианты принимаются.. Без аудио pronunciation/fluency unknown; ASR не фонетическая оценка.
7. Возможный образец (не единственный ответ): Реальное прослушивание нового сообщения с последующей сверкой.. Без звука pending; заранее прочитанное text-supported.
8. Возможный образец (не единственный ответ): Фактическая поправка и вывод, не новый software update автоматически.. Не заранее выдуманный диалог.
9. Возможный образец (не единственный ответ): Настоящие ответы или явно unresolved.. Просьба не автоматически accepted.
10. Возможный образец (не единственный ответ): Прямой ответ, признанный прогресс, unknown deployment.. Не заученный Orchid report.
11. Возможный образец (не единственный ответ): Реальный краткий протокол, а не оценка речи по буквам.. Произношение/fluency отдельно по аудио.
12. Возможный образец (не единственный ответ): Новый совместный scope и реальный follow-up, без запуска опасных операций.. Самостоятельный перенос, а не монолог.

</details>

## Смешанное повторение и отложенное применение

1. **Краткий ответ:** The result has ___ recorded. (been/being)
2. **Краткий ответ:** We must decide ___ to reopen the issue. (whether/if)
3. **Краткий ответ:** Not yet verified значит verified as broken? yes/no.
4. **Краткий ответ:** Один удачный route отменяет mismatch другого обязательного route? yes/no.
5. **Развёрнутый ответ:** Восстанови по памяти структуру критерия и примени к новому учебному действию.
6. **Развёрнутый ответ:** Исправь Could you confirm has it been deployed? Затем дай ответ, когда известен только merge.
7. **Развёрнутый ответ:** Составь 4 фразы для successful retest, failed related check, blocked check и not run.
8. **Развёрнутый ответ:** Перепиши слабый абзац своего отчёта полностью и объясни 2 правки по реальному отзыву.
9. **Развёрнутый ответ:** Через 7 дней напиши 200–260 слов о другом новом случае проверки; сохрани исходник, дату и содержательный отзыв.
10. **Устная работа:** Через 7 дней обсуди новый отчёт: партнёр задаёт неожиданный вопрос и follow-up; проверь его пересказ.
11. **Развёрнутый ответ:** В версии T02 с двумя опубликованными подтемами почему заполненная шкала и 8/8 закрытых не подтверждают весь топик или mastery?
12. **Развёрнутый ответ:** Выбери из содержательного разбора один пробел и адресную тренировку с новым контролем.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: been. Perfect passive.
2. Ключ: whether. Whether to-infinitive.
3. Ключ: no. Неизвестное не отрицательный результат.
4. Ключ: no. Критерии остаются раздельными.
5. Возможный образец (не единственный ответ): Исходное состояние, действие, наблюдаемый результат и scope; явно proposed.. Не список терминов без конкретного условия.
6. Возможный образец (не единственный ответ): Could you confirm whether it has been deployed? The change was merged, but deployment is unconfirmed.. Вопрос не создаёт нового факта.
7. Возможный образец (не единственный ответ): Разные конкретные результаты/причины/границы на вымышленных данных.. Не четыре синонима done.
8. Возможный образец (не единственный ответ): Исходный/исправленный/основания раздельно либо pending.. Не выдавай модель за собственный результат.
9. Возможный образец (не единственный ответ): Новые данные и критерии, фактическое применение либо pending.. Не переименование Orchid/Harbour/Flint.
10. Возможный образец (не единственный ответ): Реальный отложенный обмен и адресные ответы.. Без аудио неизвестна речь, будущий успех не записывается.
11. Возможный образец (не единственный ответ): Ещё нужна линия отчётов о ходе работы; качество письма/речи, взаимодействие и отсрочка оцениваются отдельно.. Публикация, заполнение и освоение различны.
12. Возможный образец (не единственный ответ): Основание из собственного ответа, конкретная практика и новый независимый кейс.. Нет данных — сначала запрос проверки, не фиктивный план исправленных ошибок.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** The candidate has ___ checked. (been/being)
2. **Краткий ответ:** Could you tell me where the report ___? (is/is it)
3. **Краткий ответ:** We need to decide ___ to repeat the undo check. (whether/if)
4. **Краткий ответ:** When the next build ___, I will check the count. (arrives/will arrive)
5. **Краткий ответ:** Out of scope означает tested successfully? yes/no.
6. **Краткий ответ:** Сравнение разных build и browser изолирует изменение build? yes/no.
7. **Краткий ответ:** Проверка не выполнена без доступа к стенду: blocked или passed?
8. **Краткий ответ:** Has been tested само означает has passed? yes/no.
9. **Развёрнутый ответ:** Новое досье Pine Inbox 5.0, Elm 2, PlainOS 4, одна training account. Согласовано: из трёх unread messages Mark read для одного уменьшает count 3→2 и меняет icon на read; Undo возвращает count 3 и unread icon. Reset перед каждой проверкой; перед Undo сначала выполнить Mark read. Build 500: Mark read оставляет count 3 в 2/2 trials, icon становится read. Candidate 501: count 2 и read icon в 3/3. Undo в candidate: один из двух checks возвращает count 3/unread icon, другой оставляет count 2 при unread icon. Какие результаты соответствуют условиям, а какие нет?
10. **Развёрнутый ответ:** В Pine новый sign-in вне запроса. Сформулируй два согласованных критерия и границу; не объявляй sign-in рабочим.
11. **Развёрнутый ответ:** Для Pine сравнение использовало одинаковое указанное окружение и reset. Напиши ограниченный вывод о candidate, не смешивая Mark read и Undo.
12. **Развёрнутый ответ:** Напиши полный Pine verification note 200–260 слов по досье. Keyboard shortcut не проверен; доппроверка другого browser blocked без test account, обязательность не согласована. Developer сообщает merge, deployment неизвестен. Owner следующего check не согласован.
13. **Развёрнутый ответ:** Коллега пишет Pine is closed, so all users have the fix. Ответь 100–140 словами: что известно и что нужно уточнить?
14. **Устная работа:** Представь Pine партнёру; он задаёт заранее не известный вопрос о результате. Ответь и попроси его пересказать ограничение.
15. **Устная работа:** Партнёр расширяет Pine до across sessions. Уточни, что это значит, и предложи отдельный критерий, не выдавая его за согласованный.
16. **Развёрнутый ответ:** Партнёр создаёт скрытое устное сообщение о новом Pine check: build, действие, counts и неизвестное. Запиши услышанное до показа текста.
17. **Развёрнутый ответ:** Партнёр устно исправляет один результат своего сообщения. Сохрани обе версии и влияние на вывод.
18. **Развёрнутый ответ:** Исправь Could you confirm did they deploy it? и ответь, если есть только merge message.
19. **Развёрнутый ответ:** По досье Pine что именно изменилось в неудачном Undo и что осталось неправильным?
20. **Устная работа:** Произнеси tested / checked и The count still shows two; deployment has not been verified yet. Партнёр пересказывает два ограничения.
21. **Развёрнутый ответ:** Коллега предлагает включить blocked browser check в число passed, потому что не было ошибки. Объясни 4–6 предложениями.
22. **Развёрнутый ответ:** Получив реальный содержательный отзыв на задание 12, полностью перепиши Pine report в 200–260 словах, сохрани исходник и причины правок.
23. **Развёрнутый ответ:** Teammate agreed to read the notes. Напиши запрос owner следующей проверки и срока, не приписывая их за коллегу.
24. **Устная работа:** Партнёр считает Undo неважным, хотя он согласован. Обсуди disagreement и следующий шаг; попроси пересказать, что осталось нерешённым.
25. **Развёрнутый ответ:** Через 7 дней напиши 200–260 слов для нового случая verification, попроси реальный отзыв и запиши дату/неожиданный вопрос.
26. **Развёрнутый ответ:** В версии T02 с двумя опубликованными подтемами объясни разницу partial, заполнение и verified mastery.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: been. Perfect passive has been + V3.
2. Ключ: is. Внутри where the report is, без второго it.
3. Ключ: whether. Перед to-infinitive whether.
4. Ключ: arrives. Обычное придаточное времени.
5. Ключ: no. Не результат проверки.
6. Ключ: no. Несколько изменившихся условий.
7. Ключ: blocked. Есть названное препятствие.
8. Ключ: no. Факт проведения не оценка результата.
9. Возможный образец (не единственный ответ): Candidate Mark read 3/3 соответствует; baseline Mark read 2/2 нет; candidate Undo 1/2 соответствует, 1/2 нет.. Не терять icon/count и единицы.
10. Возможный образец (не единственный ответ): Mark read count/icon; Undo count/icon при заданной preparation; sign-in вне scope, результат unknown.. Критерии не наблюдения.
11. Возможный образец (не единственный ответ): Mark read improvement under these conditions; Undo mismatch remains, не all fixed.. Один маршрут не заменяет весь запрос.
12. Возможный образец (не единственный ответ): Связный независимый отчёт: критерии, подготовка, сравнение, частичный результат, unknown, request.. Не копия Orchid, не выдуманный срок.
13. Возможный образец (не единственный ответ): Closed не подтверждает reason/testing/deployment; запрос основания, признание limited Mark read evidence и Undo mismatch.. Не утверждать deployment точно отсутствует.
14. Возможный образец (не единственный ответ): Фактический вопрос, адресный ответ/unknown и реальный пересказ.. Чтение обоих ролей не взаимодействие.
15. Возможный образец (не единственный ответ): Живое уточнение новых условий; принятие или disagreement записано честно.. Новый scope не предыдущий результат.
16. Возможный образец (не единственный ответ): Реальные факты сообщения со сверкой.. Без звука pending; прочитанное заранее text-supported.
17. Возможный образец (не единственный ответ): Настоящая поправка, не выдуманное обновление программы.. Без фактического обмена pending.
18. Возможный образец (не единственный ответ): Could you confirm whether they deployed it? We have a merge message, but deployment is unconfirmed.. Допустимо whether it has been deployed; смысл проверяется вручную.
19. Возможный образец (не единственный ответ): Icon стал unread, count остался 2 вместо 3.. Не считать визуальную смену icon успехом всего Undo.
20. Возможный образец (не единственный ответ): Реальное звучание и передача смысла still/not yet.. Без аудио pronunciation/fluency unknown, ASR не оценка фонетики.
21. Возможный образец (не единственный ответ): Не проведено, нет product result; область неизвестного нужно сохранить.. Отсутствие наблюдённого сбоя не успех без проверки.
22. Возможный образец (не единственный ответ): Полная редакция по действительным замечаниям либо pending.. Журнал не заменяет текст.
23. Возможный образец (не единственный ответ): Уточнить готовность расследовать/проверять и возможный срок; read notes не обязательство исправить.. Формулировка запроса, не полученное согласие.
24. Возможный образец (не единственный ответ): Реальное обсуждение критерия и ограничений, без выдуманного approval.. Можно остаться при разных позициях.
25. Возможный образец (не единственный ответ): Новый материал и реальные свидетельства либо pending.. Не переименование Pine.
26. Возможный образец (не единственный ответ): Ещё не наполнена линия work updates; поля не качество, нужны ручная проверка, звук/взаимодействие и отсрочка.. Короткий тест не сертификация.

</details>

### Вариант B

1. **Краткий ответ:** The output is ___ checked at the moment. (being/been)
2. **Краткий ответ:** Could you explain why the preview ___ silent? (is/is it)
3. **Краткий ответ:** They must decide ___ to retest Unmute. (whether/if)
4. **Краткий ответ:** We have not checked that shortcut ___. (yet/still)
5. **Краткий ответ:** Both sound and indicator означает проверить только indicator? yes/no.
6. **Краткий ответ:** Три trials одного tester доказывают три independent users? yes/no.
7. **Краткий ответ:** Проведённый check не соответствует критерию: failed или not run?
8. **Краткий ответ:** Сообщение о merge доказывает live deployment? yes/no.
9. **Развёрнутый ответ:** Новое досье Coral Player 2.0, Ash 8 на RidgeOS 3, training account и один учебный preview. Согласовано: Mute делает preview беззвучным и включает muted indicator; Unmute восстанавливает прежний уровень 40 и убирает indicator. Перед каждым trial — звучащий preview на 40. Build 200: Mute оставляет звук в 2/2, indicator включается. Candidate 201: Mute даёт тишину и indicator в 3/3. Две проверки Unmute после Mute в candidate: обе убирают indicator, но preview остаётся беззвучным. Сопоставь результаты с двумя критериями.
10. **Развёрнутый ответ:** Для Coral поведение после нового входа вне запроса. Сформулируй оба критерия с исходным уровнем, действием и двумя наблюдениями.
11. **Развёрнутый ответ:** Окружение и preparation одинаковы для сравнения Coral. Напиши вывод, различая Mute improvement и Unmute failure.
12. **Развёрнутый ответ:** Напиши полный Coral verification note 200–260 слов. Keyboard shortcut not run; дополнительная mobile check blocked без устройства, её обязательность не согласована. Известно сообщение о merge, deployment неизвестен, owner следующего check не согласован.
13. **Развёрнутый ответ:** Коллега пишет The icon is correct, so release is verified. Ответь 100–140 словами по Coral.
14. **Устная работа:** Представь Coral партнёру; он задаёт заранее не известный вопрос о проверке. Ответь и попроси его пересказать границу результата.
15. **Устная работа:** Партнёр просит Always keep my volume. Уточни routes, sessions и значение keep; предложи критерий, пометив proposed.
16. **Развёрнутый ответ:** Партнёр готовит скрытое устное сообщение о новом Coral check: build, действие, результат и неизвестное. Запиши до показа текста.
17. **Развёрнутый ответ:** Партнёр устно исправляет один факт своего сообщения. Запиши исходное, исправленное и изменение вывода.
18. **Развёрнутый ответ:** Исправь Could you tell me why did the check failed? Затем сообщи, что внутреннюю причину не проверяли.
19. **Развёрнутый ответ:** По досье Coral что изменилось после Unmute и что не восстановилось?
20. **Устная работа:** Произнеси passed / tested и The preview is still silent; we have not verified deployment yet. Партнёр пересказывает смысл.
21. **Развёрнутый ответ:** Почему отсутствие устройства не позволяет записать mobile check как failed из-за звука? Ответь 4–6 предложениями.
22. **Развёрнутый ответ:** После реального отзыва полностью перепиши Coral report задания 12 в 200–260 словах; сохрани исходник и основания правок.
23. **Развёрнутый ответ:** Коллега offers to review recording notes. Попроси подтвердить, кто расследует Unmute и кто проведёт следующий check; не назначай срок.
24. **Устная работа:** Партнёр предлагает исключить Unmute из ранее согласованного scope. Обсуди изменение и его последствия, проверь его пересказ.
25. **Развёрнутый ответ:** Через 7 дней напиши 200–260 слов по другому новому verification case и получи содержательный отзыв с датой/новым вопросом.
26. **Развёрнутый ответ:** В версии T02 с двумя опубликованными подтемами что остаётся после 8/8 закрытых и заполненной шкалы?

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: being. Continuous passive is being + V3.
2. Ключ: is. Внутреннее why the preview is silent.
3. Ключ: whether. Whether to-infinitive.
4. Ключ: yet. Not…yet для ещё не выполненной проверки.
5. Ключ: no. Both сохраняет два объекта.
6. Ключ: no. Попытки и люди разные единицы.
7. Ключ: failed. Результат известен и отрицателен.
8. Ключ: no. Это разные этапы и свидетельства.
9. Возможный образец (не единственный ответ): Candidate Mute соответствует 3/3, baseline Mute нет 2/2; candidate Unmute не соответствует 2/2, хотя indicator меняется.. Не переносить число one failed из Orchid.
10. Возможный образец (не единственный ответ): Mute silence/indicator, Unmute previous 40/no indicator; new sign-in outside scope and unknown.. Не придумать иной уровень или правило reset после входа.
11. Возможный образец (не единственный ответ): Ограниченный успех Mute в candidate; Unmute не восстановил звук ни в одной из двух checks.. Не весь плеер неисправен и не весь запрос fixed.
12. Возможный образец (не единственный ответ): Самостоятельный полный отчёт с точными numbers/conditions/scope, unknown и request.. Не выдуманные реальные прослушивания учеником: досье fictional.
13. Возможный образец (не единственный ответ): Indicator не подтверждает sound; Unmute mismatch и отсутствие deployment evidence; запрос уточнения.. Не обвинение автора и не утверждение never released.
14. Возможный образец (не единственный ответ): Фактический follow-up, содержательная реакция/unknown и пересказ.. Не два заученных монолога.
15. Возможный образец (не единственный ответ): Настоящий ответ и согласование или оставшееся disagreement.. Не дописывать требование за него.
16. Возможный образец (не единственный ответ): Фактическое понимание новой речи со сверкой.. Без звука pending; прочитанное заранее text-supported.
17. Возможный образец (не единственный ответ): Реальная коррекция, не придуманное улучшение приложения.. Без фактического обмена pending.
18. Возможный образец (не единственный ответ): Could you tell me why the check failed? We have not established the internal cause.. Внутренний порядок, без did failed; открытая оценка.
19. Возможный образец (не единственный ответ): Indicator исчез, звук не вернулся к 40; обе проверки такие.. Не invent one successful Unmute.
20. Возможный образец (не единственный ответ): Реальный звук и понимание отрицания/продолжения; UK/US допустимы.. Без аудио pronunciation/fluency unknown, ASR не фонетическая оценка.
21. Возможный образец (не единственный ответ): Проверка blocked, sound behaviour на этом устройстве не наблюдалось.. Known cause of inability не known product defect.
22. Возможный образец (не единственный ответ): Полная самостоятельная редакция либо pending.. Не только перечень изменений.
23. Возможный образец (не единственный ответ): Review не implement, реальные обязательства пока неизвестны.. Никакие реальные записи не публикуются.
24. Возможный образец (не единственный ответ): Фактическое disagreement/новое согласование или unresolved, без ретроспективного passed.. Изменение критерия не изменение уже наблюдённого результата.
25. Возможный образец (не единственный ответ): Независимый материал и реальные свидетельства либо pending.. Не переименование Coral.
26. Возможный образец (не единственный ответ): Недостающая линия work updates, содержательная проверка письма/речи, взаимодействие и новый отложенный перенос.. Заполнение не mastery, partial не оценка ученика.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Уточнение задачи и язык проверки исправлений](../appendices/verification-language.md)
- [Bug report: язык воспроизведения, наблюдений и границ](../appendices/bug-report-language.md)
- [Косвенные вопросы, просьбы и question tags](../appendices/questions-tags.md)
- [Пассив: лица, формы, исполнитель и статус](../appendices/passive-forms.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [GitHub Docs: closing an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/closing-an-issue)
- [GitHub Docs: linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)

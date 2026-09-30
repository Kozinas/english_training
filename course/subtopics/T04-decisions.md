# T04-decisions · Архитектурное решение: требования, варианты, основания и пересмотр

[Топик T04](../modules/T04.md). Сгенерировано из data/*.mjs.

Предпосылки: [B205-discussion](B205-discussion.md).

## Цели контроля

- Строить требования, сравнения и условные рекомендации
- Отделять требования, ограничения и допущения
- Сопоставлять варианты и реальные компромиссы
- Ограничивать выводы и статус решения
- Читать design record с числами и пробелами
- Слышать поправки, условия и принятые действия
- Создавать полноценный ADR и его редакцию
- Обсуждать возражения и проверять понимание

## Механизм

### Начинай с задачи, а не названия технологии

Архитектурное обсуждение должно объяснять, какую задачу решает выбор и в каких условиях. «Нужна очередь» уже предлагает средство; «пользователь должен получить подтверждение, пока файл готовится» описывает потребность. The problem is to…; We need a way to…; The purpose is to… помогают поставить цель до реализации. Один удачный инструмент не подходит автоматически каждому продукту. В Linden обсуждается экспорт и сохранение доступа к прежнему отчёту, а не абстрактная победа asynchronous над synchronous. Наши проекты, измерения и training credits вымышлены. Ты пишешь и обсуждаешь технический английский, не получаешь готовое инженерное разрешение на production change. Полный курс архитектуры, безопасности или расчёта инфраструктуры эта подтема не заменяет.

### Requirement, constraint, preference и assumption

Requirement задаёт требуемое поведение или качество; constraint ограничивает допустимое решение; preference помогает выбирать среди допустимых вариантов; assumption — допущение, на котором строится рассуждение. Эти категории могут пересекаться: требование к времени также ограничивает выбор. Важно не название колонки, а сила и источник утверждения. Must retain the report — обязательное условие; we would prefer the existing library — предпочтение; assuming sample access — ещё не полученный доступ. «Желательно проще» не разрешает проигнорировать обязательную сохранность. Укажи, кто подтвердил правило и какую версию обсуждают. Если правила нет, запиши вопрос, а не назначай его сам. Needs to / is required to могут передавать must, но should в рекомендации не становится обязательным только из-за уверенного тона.

### Как строятся требования и отрицания

После must, may, can, could, should нужен base: must retain, не must to retain и не must retains. Must not remove — запрет; need not remove / does not need to remove — отсутствие необходимости, не разрешение вопреки другому правилу. May allow говорит о возможности, may cancel — может выражать разрешение: контекст и субъект важны. The service is required to retain the report и The report must be retained — две пассивные модели; во второй modal + be + V3. Require a worker — прямой объект; require the service to retain — object + to-infinitive. Allow someone/something to do, но let someone do. Выписанное требование само не доказывает, что реализация ему соответствует: The service must respond и The service responded различаются как норма и наблюдение.

### Критерий должен быть проверяемым в своей рамке

Fast, scalable, reliable и simple без уточнения допускают разные трактовки. Назови наблюдаемое свойство, единицу, условия и границу. Acknowledgement within two seconds under five concurrent requests — не file ready within two seconds. Concurrent описывает одновременность, а requests per day — объём за период; нельзя незаметно заменить одну нагрузку другой. At most / no more than задают верхнюю границу; at least / no less than — нижнюю. Within относится к пределу интервала, не обещает ровно в его конце. Критерий «все измеренные requests» отличается от average; проценты требуют своего знаменателя. Подробные latency/throughput и свежесть данных получат отдельное продолжение T04; здесь тренируем язык точного условия, не универсальный benchmark.

### Граница обсуждения и нецели

Scope отвечает, что сравнивается сейчас; non-goal — что намеренно не пытаются решить в этом решении. Out of scope не означает неважно или навсегда запрещено. В Linden thirty concurrent requests ещё не approved requirement и не tested load. Если потребность изменится, сравнение нужно открыть заново. «Сейчас не проверяли recovery» не равняется «recovery не требуется»: отсутствие проверки нельзя назвать осознанной нецелью без согласования. Уточняй This comparison covers… / It does not establish… / We still need a decision on…. Название компонента не определяет, кто его будет эксплуатировать. Не превращай личное предложение автора ADR в согласованный scope всей команды.

### Варианты должны решать одну и ту же задачу

Сравнивай options по одинаковым критериям, данным и условиям. Не отдавай одному только happy path, а другому весь набор отказов. Рассмотреть сохранение текущего решения, ограниченный prototype или отказ от изменения допустимо, если они действительно отвечают brief; не обязательно искусственно придумывать три варианта. A generates within the request, whereas B queues work показывает механизм различия без объявления победителя. Простота относится к определённой стороне: проще реализация, обучение, наблюдение или поддержка? Обслуживаемый старый путь может иметь преимущество даже при недостатках. Слабый вариант нельзя карикатурно описать как slow and bad: честно назови его сильную сторону и причину, по которой она не снимает конкретное ограничение.

### Сравнение: форма, основание и степень

Cheaper than, more expensive than, easier to maintain, less predictable than, as useful as требуют ясной пары и признака. Не more easier; much/far/slightly могут уточнять comparative, very cheaper в этой модели не подходит. Prefer B to A; would rather investigate B than deploy either now; recommend investigating B / recommend that we investigate B — полезные разные структуры. Lower cost само не значит better architecture, а lower listed infrastructure cost не равно lower total cost. Не сравнивай задержку операции с числом запросов за секунду: грамматика может быть верной, сравнение — бессмысленным. Same или similar нуждаются в области: same fixture не гарантирует полного равенства всех условий. Открытую рекомендацию оценивают по обоснованию, а не по одному любимому варианту.

### Trade-off — полезный результат с ценой

Trade-off — компромисс между значимыми свойствами, а не просто слово «минус». B может улучшить ожидание подтверждения и добавить operational work; нужно назвать оба последствия и для кого они важны. At the cost of + noun/-ing: quicker acknowledgement at the cost of extra monitoring. In exchange for тоже связывает получаемое с отдаваемым, но не доказывает, что обмен выгоден. Benefit, drawback, risk и observed failure различаются: потенциальная проблема не уже случившаяся. Неизвестное ownership — конкретный пробел, а не установленная авария. Последствия могут быть положительными, отрицательными и нейтральными. Отказ от прямого ответа «лучше всегда» — не уклонение, если ты ясно указал критерий выбора и условия.

### Уступка и сильное возражение

Although A is familiar, it misses the acknowledgement limit сохраняет и преимущество, и препятствие. Despite the lower estimate требует noun group; despite of неверно. Despite the fact that + clause возможна, но тяжелее. Whereas / while могут сравнивать, however соединяет самостоятельные утверждения с подходящей пунктуацией, не заменяет because. В базовом предложении не дублируй although… but. Сильное возражение не caricature: укажи действительное ограничение собеседника, затем объясни, что твоё предложение с ним делает. I agree that…, but that does not establish… позволяет принять факт без принятия всего вывода. Партнёр вправе остаться при другом предпочтении; корректный пересказ не endorsement.

### Условная рекомендация не безусловное обещание

If the workload increases, we will review the choice — обычное условие с Present после if. If access were available, we could compare the designs — гипотетическая ситуация, не утверждение доступного доступа. Provided that / as long as задают оговорку, only if — необходимое условие, которое не гарантирует достаточности. We will proceed only if an owner is agreed не обещает proceed при одном согласованном owner, когда остаются другие blockers. Unless соответствует if not только при сохранении смысла. Subject to review значит при условии проверки/одобрения по контексту, не уже reviewed. Не назначай could/may фиксированные вероятности и не превращай conditional support в accepted final choice.

### Наблюдения и неизвестное не смешиваются

В Linden A имеет 8/12 acknowledgements в лимите и 12/12 ready files; B — 12/12 acknowledgements и 11/12 ready files. Это две метрики, а не один общий success. One took seventy seconds указывает mismatch с лимитом sixty в данных условиях. Previous-report availability не проверена: это не доказанный loss и не доказанный pass. Sample из двенадцати requests не обязательно двенадцать users. Нельзя распространять pilot на thirty concurrent requests, иной fixture или production без нового основания. Source says / the log records / this suggests / this establishes различаются по силе. Более красивый график, agreement или принятое предложение провести check не являются новыми measurement results.

### Оценка затрат, усилий и календарного срока

Estimate — условная оценка, не quote или commitment. Укажи единицу, предпосылки и исключения: infrastructure only, assuming sample access, excluding review. Person-days измеряют объём усилий по принятой оценке, calendar days — прошедшее время; доступность людей, зависимости и последовательность задач могут различаться. Two to four person-days не значит promised release by Friday. Это понятие в учебном техническом brief, а не время прохождения урока. Числа training credits вымышлены и не совет по покупке. Меньший инфраструктурный расход не устанавливает total cost, а отсутствие лицензионного платежа не делает поддержку бесплатной. Estimate may change when assumptions change; точность английской цифры не устраняет неопределённость исходных данных.

### ADR: структура, статус и история

Architecture decision record объясняет контекст выбора, само решение или предложение, его статус и последствия для будущего читателя. Авторские модели показывают также alternatives, evidence, open questions и revisit conditions; одинаковое число абзацев не обязательно. Nygard и AWS дают первичные ориентиры, не единый закон всех организаций. Proposed не Accepted, accepted investigation не accepted production architecture, accepted architecture не deployed. У команды может быть иной review process: называй фактические полномочия и принятый шаг. При изменении выбора сохраняй ссылку на прежний документ и основание изменения; superseded не значит, что старого решения никогда не было. Наше обычное текстовое редактирование до принятия отдельно от замены уже принятого решения новой записью.

### Полный текст и полная редакция

Письмо должно быть понятным человеку, который не присутствовал на обсуждении. Сначала обозначь проблему, версию и статус, затем требования и границы, варианты, данные, обоснованный выбор и последствия, затем действия и условия пересмотра. Это логика, не обязательный жёсткий шаблон. Полные Linden models открыты до работы; Juniper имеет другие правила и не решается заменой имени. Исходный ADR и его целая редакция 350–450 слов сохраняются отдельно. Журнал «исправил цифру» полезен, но не заменяет новый полный текст. Отзыв должен быть реальным; до него revision/feedback остаются pending. Нельзя выдумывать согласие партнёра, мерить качество по совпадению с образцом или стирать исходную ошибку ради красивой истории.

### Диалог, произношение и проверка понимания

Requirements /rɪˈkwaɪəmənts/, architecture /ˈɑːkɪtektʃə/, estimate как noun /ˈestɪmət/ и как verb /ˈestɪmeɪt/ помогают различать роль слова; это UK-ориентиры, US нормативен. Чётко называй seconds/minutes, requests/sessions, implementation effort/release date. После самопоправки повтори исправленное с единицей: thirty seconds, not five minutes. Реальный партнёр сообщает неизвестную заранее реплику, возражает, уточняет или ограничивает своё обязательство; ты отвечаешь адресно и просишь read-back. Yes не доказывает понимание, understanding не support. Если виден текст, аудирование text-supported; без звука pronunciation и oral fluency unknown. TTS и ASR не заменяют реальную оценку интонации, акцента или взаимодействия.

### Повторение и границы нынешнего T04

Смешанное повторение возвращает форму и смысл на других входах; итоговые варианты дают новые architecture briefs. После закрытой части нужны содержательная проверка полного документа и реальной речи, адресная практика по 2–3 приоритетным типам ошибок и другой вариант. Через семь дней требуется новый материал и фактическое применение, а не переименованный Linden. До проверки — pending, без выдуманного занятия. T04 сейчас partial: эта подтема раскрывает требования, варианты и язык решения; данные/производительность и миграции/оценки ещё предстоит развернуть отдельно. Шкала показывает опубликованную работу, даже 100% не завершает весь заявленный топик и не подтверждает mastery. Длительность занятия выбирает ученик; объём объяснений и практики от неё не уменьшается.

## Примеры с разбором

- **The problem is to keep the previous report available.** — Задача — сохранить доступ к прежнему отчёту. Цель до технологии.
- **The service must acknowledge the request.** — Сервис должен подтвердить получение запроса. Must + base.
- **The report must not disappear.** — Отчёт не должен исчезать. Запрет, не отсутствие необходимости.
- **We need not choose a production design today.** — Сегодня необязательно выбирать production design. Need not не запрет.
- **The worker may fail.** — Worker может завершиться неудачно. Возможность, не разрешение.
- **The client may cancel the job under this contract.** — По этому контракту клиенту разрешена отмена. Permission имеет источник.
- **The design requires a separate worker.** — Дизайну нужен отдельный worker. Require + object.
- **The service is required to retain the file.** — От сервиса требуется сохранять файл. Required to + base.
- **The queue allows the request to return sooner.** — Очередь позволяет запросу завершиться раньше. Allow object to do, не доказанный benchmark.
- **The estimate depends on sample access.** — Оценка зависит от доступа к образцам. Depend on.
- **We assume that access will be available.** — Мы предполагаем, что доступ появится. Assumption не полученное разрешение.
- **The limit applies to five concurrent requests.** — Лимит относится к пяти одновременным запросам. Условия метрики явно.
- **Acknowledgement must arrive within two seconds.** — Подтверждение должно прийти за две секунды или раньше. Within не ровно в конце.
- **File readiness is a separate requirement.** — Готовность файла — отдельное требование. Не путать стадии.
- **A generates inline, whereas B uses a worker.** — A создаёт внутри запроса, B использует worker. Whereas показывает контраст.
- **A is easier to operate with the current team.** — A проще эксплуатировать нынешней команде. Область сравнения ограничена.
- **B has a higher listed infrastructure cost.** — У B выше указанная инфраструктурная стоимость. Не total cost.
- **A is slightly cheaper in this estimate.** — A немного дешевле в этой оценке. Slightly + comparative.
- **I prefer B to A for the next investigation.** — Для следующего исследования я предпочитаю B. Prefer to, не окончательный выбор.
- **I recommend comparing both options.** — Рекомендую сравнить оба варианта. Recommend + -ing.
- **I recommend that we retain A as a comparison.** — Предлагаю сохранить A для сравнения. That-clause.
- **We would rather investigate than deploy now.** — Мы предпочли бы сейчас исследовать, а не внедрять. Would rather + base.
- **Although A is familiar, it misses one limit.** — Хотя A знаком, один лимит он нарушает. Уступка без второго but.
- **Despite the lower estimate, the constraint still matters.** — Несмотря на меньшую оценку затрат, ограничение остаётся. Despite + noun group.
- **B reduces one wait at the cost of extra monitoring.** — B сокращает одно ожидание ценой дополнительного мониторинга. Trade-off с названной ценой.
- **If the workload increases, we will revisit the choice.** — Если нагрузка вырастет, мы вернёмся к выбору. If + Present.
- **If access were available, we could run the comparison.** — Если бы доступ был предоставлен, мы могли бы сравнить. Гипотеза, не факт.
- **We will proceed only if an owner is agreed.** — Продолжим лишь при согласованном ответственном. Необходимое, не единственное достаточное условие.
- **The proposal is subject to review.** — Предложение требует проверки перед дальнейшим решением. Не уже approved.
- **Eight of twelve acknowledgements met the limit.** — Восемь из двенадцати подтверждений уложились в лимит. Метрика и знаменатель.
- **The previous report was not checked.** — Прежний отчёт не проверяли. Не доказанный loss.
- **This sample does not establish behaviour at higher load.** — Выборка не подтверждает поведение при большей нагрузке. Граница обобщения.
- **The estimate excludes review and operational preparation.** — Оценка исключает review и подготовку эксплуатации. Не полная длительность работы.
- **The record remains Proposed.** — Запись остаётся предложением. Статус отдельно от согласия на исследование.
- **Leo agreed to draft checks, not operate the worker.** — Leo согласился подготовить проверки, а не эксплуатировать worker. Ограниченный commitment.
- **Could you explain which constraint B meets?** — Уточни, какому ограничению B соответствует. Встроенный порядок subject + verb.
- **Even if the prototype succeeds, a production decision will still require the missing review.** — Даже успешный prototype не отменит нужного review. Сложный условный пример без выдуманного успеха.
- **Could you restate the recommendation and its conditions without treating agreement to investigate as approval to deploy?** — Перескажи рекомендацию и условия, не смешивая исследование и внедрение. Сложный адресный read-back.

## Формы требований, условий и рекомендаций

1. **Краткий ответ:** The service must ___ the old report. (retain/to retain)
2. **Краткий ответ:** We recommend ___ both options. (comparing/to compare)
3. **Краткий ответ:** The estimate depends ___ access. (on/from)
4. **Краткий ответ:** Could you explain which requirement B ___? (meets/does meet; нейтрально, без усиления)
5. **Краткий ответ:** ___ the lower estimate, A misses a constraint. (Despite/Although)
6. **Краткий ответ:** If the workload ___, we will review the choice. (increases/will increase)
7. **Краткий ответ:** I prefer B ___ A for this trial. (to/than)
8. **Краткий ответ:** The design allows the request ___ sooner. (to return/return)
9. **Развёрнутый ответ:** Исправь The service must to retain files. The estimate depend from access. Объясни модели.
10. **Развёрнутый ответ:** Передай одну рекомендацию двумя способами: recommend + -ing и recommend that.
11. **Развёрнутый ответ:** Сравни must not choose и need not choose на примере решения сегодня.
12. **Развёрнутый ответ:** Перепиши «Хотя A проще поддерживать, он пока не отвечает всем требованиям» с although и despite.
13. **Развёрнутый ответ:** Переведи условную рекомендацию: «Я бы выбрал B для исследования, если бы доступ был предоставлен; это не разрешение внедрять».
14. **Развёрнутый ответ:** Составь вопрос про неизвестного owner через Could you clarify и отдельный вопрос о последствиях.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: retain. После must нужен base без to.
2. Ключ: comparing. В этой модели recommend + -ing.
3. Ключ: on. Управление depend on something.
4. Ключ: meets. Embedded question без вопросительного does.
5. Ключ: Despite. Далее noun group, не полное придаточное.
6. Ключ: increases. Present в обычном реальном условии.
7. Ключ: to. Prefer one option to another.
8. Ключ: to return. Allow object to do, в отличие от let object do.
9. Возможный образец (не единственный ответ): The service must retain files. The estimate depends on access.. Modal base, agreement и depend on; полный ответ оценивается вручную.
10. Возможный образец (не единственный ответ): I recommend investigating B. I recommend that we investigate B.. Смысл исследования, не уже принятого production design.
11. Возможный образец (не единственный ответ): Запрет выбора и отсутствие обязательности; ни одна фраза не доказывает фактическое действие.. Не заменять отсутствие обязанности свободой нарушить другое правило.
12. Возможный образец (не единственный ответ): Although A is easier to maintain, it does not yet meet all requirements. Despite being easier to maintain, A does not yet meet all requirements.. Сохранить not yet/all; открытые формулировки допустимы.
13. Возможный образец (не единственный ответ): I would choose B for investigation if access were available; this is not permission to deploy.. Условие гипотезы и границы решения, не автоматическое обещание.
14. Возможный образец (не единственный ответ): Could you clarify who would operate the worker? What consequences should we consider?. Обычный порядок внутри embedded question; неизвестный owner не назначается вопросом.

</details>

## Требования, допущения и границы

1. **Краткий ответ:** Linden: acknowledgement limit в секундах? Число.
2. **Краткий ответ:** Linden: file-readiness limit в секундах? Число.
3. **Краткий ответ:** Linden: согласованная concurrent load? Число requests.
4. **Краткий ответ:** Linden: thirty concurrent уже approved requirement? yes/no.
5. **Развёрнутый ответ:** Раздели must retain old report / prefer existing library / assuming access / investigate higher load по функции.
6. **Развёрнутый ответ:** Перепиши «Нужна очередь» как потребность без названия технологии.
7. **Развёрнутый ответ:** Как превратить Fast enough в проверяемое требование? Задай три вопроса, не выдумывая ответы.
8. **Развёрнутый ответ:** Сопоставь acknowledgement и readiness в Linden; почему один критерий не заменяет другой?
9. **Развёрнутый ответ:** Сформулируй previous-report requirement через must not и until.
10. **Развёрнутый ответ:** О cancellation ничего нет. Можно ли записать disabled как факт? Напиши вопрос и ограничение.
11. **Развёрнутый ответ:** Чем out of scope отличается от not tested? Объясни на recovery.
12. **Развёрнутый ответ:** Новый North brief: файл должен оставаться доступным 48 часов после готовности. Сравни с Linden until replacement ready.
13. **Развёрнутый ответ:** Assuming sample access преврати в вопрос о готовности условий и запиши два возможных ответа.
14. **Развёрнутый ответ:** Составь 6–8 строк requirements note Linden: правило, evidence source, открытый вопрос.
15. **Развёрнутый ответ:** Коллега предлагает снизить обязательное требование, чтобы выбранный вариант подошёл. Ответь нейтрально.
16. **Развёрнутый ответ:** Для Juniper выдели mandatory resume и предпочтение simpler current implementation. Что имеет приоритет при заданном brief?

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 2. Подтверждение получения отдельно от готовности файла.
2. Ключ: 60. Не acknowledgement two seconds.
3. Ключ: 5. Thirty concurrent пока только вопрос.
4. Ключ: no. В brief прямо сказано, что это ещё не согласовано.
5. Возможный образец (не единственный ответ): Обязательное поведение / предпочтение / допущение / предлагаемая работа.. Категории не всегда взаимоисключающие, важны сила и источник.
6. Возможный образец (не единственный ответ): We need a way to acknowledge an export request while generation continues and the previous report remains available.. Другие решения не исключены одним словом queue.
7. Возможный образец (не единственный ответ): Какое событие измерять, какой предел/единица и под какой нагрузкой/fixture?. Сначала уточнение, не присвоенный автором SLA.
8. Возможный образец (не единственный ответ): Принятие запроса и готовность файла разные состояния, с разными limits 2/60 seconds.. Не считать queued уже usable file.
9. Возможный образец (не единственный ответ): The previous report must not become unavailable until its replacement is ready.. Until сохраняет границу; не требует удалить отчёт после неё и не обещает вечного хранения всех версий.
10. Возможный образец (не единственный ответ): Could you clarify how cancellation should work? The current brief does not specify it.. Unknown не запрет и не разрешение.
11. Возможный образец (не единственный ответ): Not tested сообщает отсутствие проверки; out of scope требует согласованной границы, которой для recovery нельзя выдумывать.. Не объявить обязательную работу неважной.
12. Возможный образец (не единственный ответ): Разные временные условия; 48 hours retention не правило Linden и не срок подготовки файла.. Назвать начало отсчёта и событие окончания.
13. Возможный образец (не единственный ответ): Is access to the sample available? Yes/no/unknown меняет выполнимость плана, но не число необходимых задач.. Гипотетические варианты явно маркировать, не выдавать за реальные ответы.
14. Возможный образец (не единственный ответ): 2/60 seconds at five concurrent requests and 2000 rows; previous report available; cancellation/repeats/30 load unknown.. Не добавлять latency/throughput guarantee другого продукта.
15. Возможный образец (не единственный ответ): We need approval for any requirement change; the option does not by itself justify rewriting the constraint.. Можно обсудить изменение, нельзя представить его уже принятым.
16. Возможный образец (не единственный ответ): Resume without retransmitting acknowledged parts is mandatory; familiarity does not remove it.. Не автоматический выбор B: его собственное соответствие тоже требует проверки.

</details>

## Сравнение вариантов и компромиссов

1. **Краткий ответ:** Prefer B ___ A. (to/than)
2. **Краткий ответ:** ___ A is familiar, it misses one limit. (Although/Despite)
3. **Развёрнутый ответ:** Опиши A и B Linden в двух нейтральных предложениях без оценки «лучше».
4. **Развёрнутый ответ:** Назови две реальные сильные стороны A и одну наблюдаемую слабость.
5. **Развёрнутый ответ:** Назови преимущество B по журналу и цену/риск, не объявляя риск случившейся аварией.
6. **Развёрнутый ответ:** Создай comparison matrix: rows acknowledgement/readiness/previous report/operating work; columns A/B/evidence gap.
7. **Развёрнутый ответ:** Напиши 3–4 предложения с at the cost of про B.
8. **Развёрнутый ответ:** Исправь more easier and very cheaper; добавь область сравнения.
9. **Развёрнутый ответ:** Почему A дешевле не завершает выбор? Дай сильный довод, сохранив преимущество.
10. **Развёрнутый ответ:** Почему B asynchronous не доказывает SLA?
11. **Развёрнутый ответ:** Предложи допустимый третий следующий шаг, не третью придуманную готовую систему.
12. **Развёрнутый ответ:** Коллега описал A как useless old code. Переформулируй без straw man.
13. **Развёрнутый ответ:** Напиши comparison 180–240 слов по Linden, с условным preference и причиной пересмотра.
14. **Развёрнутый ответ:** Новый Moss option cheaper but depends on an unapproved external service. Какие вопросы нужны до выбора?
15. **Развёрнутый ответ:** Сравни «simpler to implement» и «simpler to operate» на собственном вымышленном примере.
16. **Развёрнутый ответ:** Сформулируй 60–90 слов альтернативной позиции к preference B без изменения Linden facts.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: to. Выбранная модель prefer A to B.
2. Ключ: Although. Далее subject + finite verb.
3. Возможный образец (не единственный ответ): A generates inside the request; B acknowledges a queued job and uses a separate worker.. Сначала механизм и область, не маркетинговый ярлык.
4. Возможный образец (не единственный ответ): Existing maintained path, lower listed infrastructure estimate; four acknowledgement misses.. Не total cost и не slow for every request.
5. Возможный образец (не единственный ответ): All measured acknowledgements within limit; extra monitoring/recovery/ownership work; one actual readiness miss отдельно.. Разделить observed drawback и prospective consequence.
6. Возможный образец (не единственный ответ): 8/12 vs 12/12 ack; 12/12 vs 11/12 ready; old report unknown for both; existing path vs unowned worker.. Missing cell нельзя заполнять invented pass.
7. Возможный образец (не единственный ответ): B may shorten acknowledgement time at the cost of extra operating work; benefit scope and missing evidence remain explicit.. Цена может быть не денежной; не считать trade-off автоматически выгодным.
8. Возможный образец (не единственный ответ): Easier to operate for the current team; much/slightly cheaper on the listed infrastructure estimate.. Не автоматически both true для любого продукта.
9. Возможный образец (не единственный ответ): The lower infrastructure estimate matters but cannot override a mandatory acknowledgement constraint; total cost unknown.. Не приписывать стороннику A безразличие к качеству.
10. Возможный образец (не единственный ответ): Architecture label is not measured compliance; one B file took seventy seconds despite quick acknowledgement.. Не утверждать, что async всегда медленнее.
11. Возможный образец (не единственный ответ): Keep current state while running a limited comparison with explicit conditions; clarify impact of waiting.. Это предложение, не факт решения и не гарантия приемлемости ожидания.
12. Возможный образец (не единственный ответ): A uses a maintained path and a lower listed estimate, but the measured acknowledgement mismatch prevents an unqualified recommendation.. Сохранять сильную сторону и реальное ограничение.
13. Возможный образец (не единственный ответ): The two Linden options solve the same export problem in different ways. A generates the file within the request, while B acknowledges a job and performs generation in a separate worker. The comparison must use the same requirements rather than awarding B a win merely because its acknowledgements are quick. In the measured sample, A met the file-readiness limit for all twelve requests but missed the acknowledgement limit four times. B met the acknowledgement limit for all twelve, while one file took seventy seconds and missed the readiness limit. Neither log verifies that the previous report remained available. These are different gaps, and neither option has established compliance with every requirement. A benefits from an existing maintained path and a lower infrastructure estimate. B may separate a user's wait for acceptance from the longer generation work, but adds worker monitoring and recovery responsibilities. The estimates exclude several cost categories and therefore cannot settle total cost. I would investigate B further without removing A from the comparison. That preference depends on readiness, recovery and ownership evidence that is not yet available. A larger workload would require a new comparison; the current sample is not a performance guarantee.. Альтернативная рекомендация допустима при соблюдении фактов и ограничений.
14. Возможный образец (не единственный ответ): Approval rule, data/access scope, operating ownership, costs and failure behaviour; unknown not automatic ban.. Не рекомендовать реальную покупку или подключение сервиса.
15. Возможный образец (не единственный ответ): Например меньше кода сейчас, но ручные восстановления потом; явно собственный hypothetical case.. Не универсальное утверждение об очередях или облаке.
16. Возможный образец (не единственный ответ): Можно предпочесть продолжить сравнение без раннего preference, обосновав evidence gaps и constraints.. Нет обязательной единственной правильной архитектуры; не допускается invented successful fix.

</details>

## Основания, статус и условия пересмотра

1. **Краткий ответ:** Linden A: acknowledgements within limit из 12? Число.
2. **Краткий ответ:** Linden B: ready files within limit из 12? Число.
3. **Краткий ответ:** Agreed investigation автоматически Accepted production ADR? yes/no.
4. **Краткий ответ:** Infrastructure estimate автоматически total cost? yes/no.
5. **Развёрнутый ответ:** Запиши отдельные строки для A/B acknowledgement/readiness. Можно ли назвать оба 100% success?
6. **Развёрнутый ответ:** Previous report не проверяли. Ответь на утверждение The old report was lost.
7. **Развёрнутый ответ:** Отдели proposed / agreed comparison / accepted architecture / deployed change.
8. **Развёрнутый ответ:** Что именно Leo принимает и кто будет эксплуатировать worker?
9. **Развёрнутый ответ:** Сделай полный ограниченный вывод из 12 measured requests без превращения их в users.
10. **Развёрнутый ответ:** 20 против 35 training credits: назови единицу, объём, исключения и статус числа.
11. **Развёрнутый ответ:** Harbour implementation estimate 2–4 person-days: почему это не release in four days?
12. **Развёрнутый ответ:** Составь три conditions for revisiting Linden preference B.
13. **Развёрнутый ответ:** Коллега предлагает молча заменить старую rationale. Как сохранить историю?
14. **Развёрнутый ответ:** Напиши handover 100–140 слов с decision status, принятым действием, limits и unknown.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 8. Четыре были позже двух секунд.
2. Ключ: 11. Один файл занял seventy seconds.
3. Ключ: no. Согласован ограниченный следующий шаг, запись Proposed.
4. Ключ: no. Staff, support и transfer исключены.
5. Возможный образец (не единственный ответ): A 8/12 ack, 12/12 ready; B 12/12 ack, 11/12 ready; missing old-report check.. Нельзя слить две метрики в общий pass.
6. Возможный образец (не единственный ответ): The requirement remains unverified; the log does not establish loss or preservation.. Неизвестное не доказанный failure и не pass.
7. Возможный образец (не единственный ответ): Документ-предложение, принятое исследование, принятое решение и фактическое внедрение — разные события.. В Linden подтверждены только Proposed и agreed investigation.
8. Возможный образец (не единственный ответ): Leo drafts checks for review; operating owner not agreed, access responsibility not accepted.. Не назначать отсутствующему человеку обязанность.
9. Возможный образец (не единственный ответ): Twelve requests per option under the stated setup; unique people and higher-load behaviour not established.. Не случайная выборка всех production пользователей.
10. Возможный образец (не единственный ответ): Per month at 500 exports/day; listed infrastructure only, excludes staff/support/transfer; fictional estimates not quotes.. Не использовать как реальные цены поставщика.
11. Возможный образец (не единственный ответ): Effort under access assumption excludes review/operational preparation; capacity and elapsed time unknown.. Не превращать оценку проекта в время учебного модуля.
12. Возможный образец (не единственный ответ): Repeated readiness miss, unacceptable recovery, no agreed operating owner, changed workload — условия, не уже случившиеся итоги.. Не дописывать guaranteed success once owner exists.
13. Возможный образец (не единственный ответ): Keep prior version identifiable; explain changed evidence and status; link a superseding accepted decision when applicable.. Не универсальное требование конкретного инструмента version control.
14. Возможный образец (не единственный ответ): The team agreed to investigate the queued-export option, while ADR 14 remains Proposed. A final production choice and a release have not been approved. Leo will draft the missing checks for review; he has not agreed to obtain access or operate the worker. Please preserve the acknowledgement and readiness results separately: B met the first limit in all twelve measured requests but missed the second once. Previous-report availability, recovery behaviour and ownership remain open. The listed infrastructure estimates are not total costs. The next reviewer should check the missing evidence and any changed workload before treating the conditional recommendation as an accepted decision.. Не выдавать понимание или agreement to investigate за release approval.

</details>

## Чтение: Linden и условное архитектурное решение

Linden Reports: choosing what to investigate, not announcing a release

Linden Reports is a fictional internal reporting tool. The team is discussing version 0.8 and draft decision record 14. A new developer needs to understand why two designs are being compared. The problem is not simply to adopt a fashionable queue. Staff need to request an export without losing access to the previous report while a replacement is prepared. The discussion therefore starts with requirements, evidence and the status of the decision.

The agreed evaluation fixture contains two thousand rows. Under a load of five concurrent requests, the service must acknowledge a request within two seconds and make the new file ready within sixty seconds. The previous report must remain downloadable until the replacement is ready. The brief does not specify how cancellation or repeated submissions should work. It also contains no approved requirement for thirty concurrent requests. That higher load is a question for the next review, not a condition already tested or accepted.

Option A generates the file inside the request and acknowledges only when generation finishes. It uses a processing path that the team already maintains. Option B acknowledges a queued job and generates the file in a separate worker. That separates acceptance from completion, but introduces a queue, worker monitoring and recovery questions. Neither an acknowledgement nor a queue entry means that the file is already available. Calling B asynchronous does not prove that it meets either deadline.

The comparison log describes twelve measured requests for each option under the same documented five-request load and with the agreed row fixture. These are requests, not twelve distinct staff members. For A, eight acknowledgements arrived within two seconds and four arrived later. All twelve files became ready within sixty seconds. For B, all twelve acknowledgements arrived within two seconds, but only eleven files became ready within sixty seconds; the twelfth took seventy seconds. The log does not include a before-and-after check of the previous report's availability. It does not record cancellation or recovery from a stopped worker.

These results support a specific comparison. B had faster acknowledgements in this sample, but it did not meet the file-readiness limit in every measured request. A met the readiness limit in this sample but missed the acknowledgement limit four times. Neither option has evidence that all agreed requirements are satisfied. The missing previous-report check is not proof that a report was lost. The writer must distinguish an observed mismatch from an untested requirement, and must not turn a small controlled sample into a guarantee at a higher load.

The planning sheet estimates twenty training credits per month for A and thirty-five for B at five hundred exports per day. These fictional figures cover the listed infrastructure only. They are not vendor quotations and exclude staff time, support and data-transfer charges. A cheaper infrastructure estimate does not settle the total cost or override a mandatory requirement. The team also has no named person responsible for operating the proposed worker. An engineer's ability to write queue code would not, by itself, establish continuing operational ownership.

Nina recommends a limited prototype investigation of B, not a production switch. Leo agrees to draft the missing checks and share their conditions for review. He does not promise to obtain infrastructure access or to maintain the worker. The participants agree to conduct the investigation, while decision record 14 remains Proposed. The design has not been accepted for production, implemented as a release or approved by an absent operations manager. A reader who sees only the word agreed could easily misunderstand the scope of that agreement.

The revised record should preserve A's advantages as well as its limitations, explain the conditional preference for investigating B and identify what could change that preference. A repeated readiness miss, unacceptable recovery behaviour or the absence of an operational owner could require a different choice. No such future result should be invented. Earlier notes must remain identifiable when the recommendation changes. The useful outcome of this meeting is a clearer question and an agreed next investigation, not a claim that architecture work is complete.

1. **Краткий ответ:** Какой номер draft decision record Linden? Число.
2. **Краткий ответ:** Сколько rows в agreed fixture? Число.
3. **Краткий ответ:** Сколько B files стали ready within sixty seconds? Число.
4. **Развёрнутый ответ:** Назови проблему и три обязательных свойства, прежде чем говорить об options.
5. **Развёрнутый ответ:** В чём A и B различаются по моменту acknowledgement?
6. **Развёрнутый ответ:** Восстанови четыре счётчика pilot и различи requests/users.
7. **Развёрнутый ответ:** Какой пробел evidence общий у options, а какие rules не заданы?
8. **Развёрнутый ответ:** Почему фраза B met every requirement неверна по доступному досье?
9. **Развёрнутый ответ:** Объясни scope estimates и почему A cheaper не total winner.
10. **Развёрнутый ответ:** Что Nina рекомендует, Leo принимает и команда согласует?
11. **Развёрнутый ответ:** Напиши summary 100–140 слов будущему разработчику с одной причиной не закрывать решение.
12. **Развёрнутый ответ:** Какие новые результаты или условия могли бы изменить preference? Дай три по тексту.
13. **Развёрнутый ответ:** Выбери две точные цитаты и объясни силу agreed/Proposed/not established.
14. **Развёрнутый ответ:** Составь два нейтральных вопроса к отсутствующему operations manager и одно ограничение вывода.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 14. Version 0.8 и record 14 не одно поле.
2. Ключ: 2000. Результаты относятся к указанным данным.
3. Ключ: 11. Twelfth took seventy seconds.
4. Возможный образец (не единственный ответ): Export request; ack≤2 seconds, ready≤60 seconds under stated fixture/load; previous report remains available.. Последнее требование не исчезает из-за отсутствия измерения.
5. Возможный образец (не единственный ответ): A after inline generation, B after queue acceptance before worker completion.. Не оба подтверждают готовый файл.
6. Возможный образец (не единственный ответ): A 8/12 ack and 12/12 ready; B 12/12 ack and 11/12 ready; twelve requests not distinct people.. Нельзя смешать величины в один процент всех требований.
7. Возможный образец (не единственный ответ): Previous-report availability unverified; cancellation/repeated submission unspecified; worker recovery not tested.. Untested и unspecified различаются.
8. Возможный образец (не единственный ответ): One readiness miss plus missing previous-report check; acknowledgement success insufficient.. Не утверждать, что B не сможет соответствовать после дальнейшей работы.
9. Возможный образец (не единственный ответ): 20/35 fictional monthly infrastructure credits at 500 exports/day, excluded costs, mandatory constraints still apply.. Не реальные vendor quotations.
10. Возможный образец (не единственный ответ): Nina limited investigation of B; Leo drafts checks; team agrees investigation; ADR remains Proposed.. Не assign Leo operations/access и не production switch.
11. Возможный образец (не единственный ответ): Связный текст с problem/constraints/options/evidence/status/open question.. Сохранить source и условия; фразы не обязаны совпадать с моделью.
12. Возможный образец (не единственный ответ): Readiness miss, recovery problem, ownership gap, workload change; это возможные triggers.. Не объявлять будущую failure или пришедшее согласие фактом.
13. Возможный образец (не единственный ответ): Цитаты из доступного текста и собственное объяснение scope.. Не выдумывать слова участника или approval manager.
14. Возможный образец (не единственный ответ): Кто может принять ownership, какие условия эксплуатации; отсутствие на встрече не refusal/approval.. В учебном задании не отправлять реальные сообщения.

</details>

## Аудирование: Harbour и исправление рекомендации

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Harbour Search: repairing the recommendation

Ira: I want to check our summary before we send it to the next reviewer. This is Harbour Search, design note 6. We are comparing direct searches of the catalogue with a separate search index. Our subject is the proposed design, not a service that we have already released.

Milo: The requirement allows catalogue changes to take five minutes to appear in search results.

Ira: Thirty seconds, not five minutes. That is the agreed freshness limit in this brief. I am correcting the number you heard; the product owner has not changed the requirement during this conversation. Could you repeat the limit with its unit?

Milo: Changes must appear within thirty seconds. The old index proposal refreshed every sixty seconds, so it does not establish compliance with that limit. The new proposal mentions refreshing every fifteen seconds, but that is a proposed interval, not a measured end-to-end delay.

Ira: Exactly. We also need to distinguish a quick response from a current answer. A result can appear quickly and still contain an old catalogue entry. The direct-search option avoids this particular index-refresh step, although that does not prove that every part of the direct path is always current or fast.

Milo: My pilot summary says that all five sessions showed the right result.

Ira: Four of five. In the fifth, the displayed result was an older entry. All five responses arrived within one second. That timing fact does not turn the older result into the required current one. These are five sessions, not necessarily five different people. We do not yet have a comparison under the larger proposed workload.

Milo: Then the team decided to deploy the index?

Ira: I said that earlier too, but I need to correct myself. We agreed to compare a revised index prototype with the direct-search option. We did not approve deployment. The design note is still Proposed. The prototype estimate is two to four person-days for implementation, assuming access to the sample catalogue. It excludes review and operational preparation. It is not a promise to release within four calendar days.

Milo: Who will operate the index if it is eventually selected?

Ira: We have not agreed an owner. Sara offered to ask the operations group who could discuss that responsibility. She did not agree to maintain the index herself, and she did not promise that the group would accept it. I will preserve that distinction in the note.

Milo: One question we did not plan for: if the workload becomes ten times larger, can we keep the same recommendation?

Ira: Not without new evidence. The current pilot does not establish behaviour at that scale. Could you explain what you will tell the next reviewer, including the limitation?

Milo: I will say that four of five sessions showed the current result and all five were quick in this pilot. The freshness limit is thirty seconds. We have agreed a comparison, not a release; the implementation estimate excludes other work. The larger load, end-to-end freshness and operational ownership remain open. I understand your summary, but I still prefer to keep the direct-search option in the comparison.

Ira: That disagreement is fine. Our record should preserve both the proposed investigation and the reason you want a genuine comparison. Understanding the note does not require you to support the same design.

</details>

1. **Развёрнутый ответ:** Прослушай Harbour без текста: что сравнивают и каков статус design note? Запиши audio-first или text-supported.
2. **Развёрнутый ответ:** Какой freshness limit Milo назвал сначала и чем Ira его поправила? Изменилось ли требование?
3. **Развёрнутый ответ:** Сравни old sixty-second refresh и proposed fifteen-second interval с требованием.
4. **Развёрнутый ответ:** Сколько sessions дали current result и сколько быстрый ответ?
5. **Развёрнутый ответ:** О чём Ira сама исправляет прежнюю фразу?
6. **Развёрнутый ответ:** Запиши estimate со всеми условиями и исключениями.
7. **Развёрнутый ответ:** Что Sara предлагает и чего не обещает?
8. **Развёрнутый ответ:** Каков неожиданный вопрос о workload и почему прежний pilot не отвечает на него?
9. **Развёрнутый ответ:** Передай финальный read-back Milo в 80–110 словах.
10. **Развёрнутый ответ:** Почему продолжившееся несогласие Milo не делает пересказ неверным?
11. **Развёрнутый ответ:** Сопоставь первую запись и повторное прослушивание: сохрани 2–3 реальные поправки либо честно укажи их отсутствие.
12. **Устная работа:** Партнёр даёт новое скрытое аудиосообщение о выборе, ограничении и поправке. Перескажи и получи уточнение.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Direct catalogue search vs separate index; design note 6 Proposed, not released.. Без реального звука самостоятельное listening не подтверждено.
2. Возможный образец (не единственный ответ): Five minutes → thirty seconds; исправление услышанного числа, не change product requirement.. Сохранить исходное и итоговое с единицами.
3. Возможный образец (не единственный ответ): Old 60 не establishes 30 sec compliance; new 15 proposed, not measured end-to-end delay.. Нельзя объявить new interval доказанным соблюдением.
4. Возможный образец (не единственный ответ): Four of five current; all five within one second, fifth old entry.. Быстрота не свежесть, sessions не unique people.
5. Возможный образец (не единственный ответ): Decided to deploy → agreed to compare revised prototype with direct search; no deployment approval.. Это реальная самопоправка содержания, не просто другое слово.
6. Возможный образец (не единственный ответ): 2–4 person-days implementation if sample access; excludes review and operational preparation, not four calendar days.. Не дописывать обещанную дату release.
7. Возможный образец (не единственный ответ): Ask operations group who could discuss ownership; not maintain herself or guarantee group acceptance.. Не назначать её owner по имени.
8. Возможный образец (не единственный ответ): Ten times larger workload; no new evidence for behaviour at that scale.. Не утверждать ни guaranteed success, ни inevitable failure.
9. Возможный образец (не единственный ответ): Counts, 30 sec, comparison not release, estimate exclusions, load/freshness/ownership open; he still prefers genuine comparison.. Понимание и предпочтение различаются.
10. Возможный образец (не единственный ответ): He understood the conditional recommendation but wants direct search retained; endorsement not required.. Не трактовать любое but как недопонимание.
11. Возможный образец (не единственный ответ): Собственные зафиксированные ответы и основание пересмотра.. Не выдумывать ошибки для отчёта; текстовый доступ отмечать отдельно.
12. Возможный образец (не единственный ответ): Реально услышанные новые данные и ответ; без партнёра pending.. Не чтение обеих ролей; pronunciation/fluency требуют звука.

</details>

## Письмо: собственный ADR и полная редакция

Самостоятельное вымышленное досье Juniper Attachments, design note 9, Proposed. Нужно передавать учебные файлы до 100 MB и продолжать после disconnect без повторной передачи уже подтверждённых частей. Это обязательное условие, не пожелание. A: один whole-file request, после disconnect начинается заново; проще текущему коллективу. B: chunked prototype с учётом подтверждённых частей; нужны правила повторов и сборки, monitoring/ownership ещё не согласованы. В восьми interruption trials A все передачи закончились после полного restart — это completion, но не выполнение resume requirement. В восьми trials B шесть продолжились с нужного места и дали проверенный полный файл; в двух одна часть была передана повторно, целостность итогового файла не проверяли. Не объявляй эти два файла повреждёнными или корректными. Данные только для данного fixture 100 MB; меньшие/большие файлы, security и реальные пользовательские данные не проверялись. A estimated implementation 1–2 person-days, B 4–6 при наличии sample files; review, security work и эксплуатационная подготовка исключены. Условные infrastructure estimates 8/12 training credits per month, не реальные цены и не total cost. Nora предлагает проверить описание protocol, не стать operational owner. Команда согласовала дополнительное сравнение, не production choice. Требуется собственная обоснованная рекомендация с реальными ограничениями и условиями пересмотра; нет единственного обязательного «победителя». Реальные сервисы, личные файлы и credentials не использовать. Отзыв на текст должен дать настоящий партнёр/агент после исходника, его нет в досье.

Полные авторские модели Linden для анализа, не ответы на самостоятельный Juniper:

RECORD

ADR 14: investigate queued exports for Linden Reports

Status: Proposed. This record recommends a further investigation, not a production migration. The team has agreed to compare the options more closely, but has not accepted a final architecture or authorised a release.

The purpose is to let staff request a new export while retaining access to the previous report. For the agreed two-thousand-row fixture at five concurrent requests, acknowledgement must arrive within two seconds and the new file must be ready within sixty seconds. The existing report must remain downloadable until its replacement is ready. Cancellation and repeated-submission behaviour remain unspecified.

Option A generates the file within the request. It uses a path the team already maintains and has the lower listed infrastructure estimate. However, four of twelve measured acknowledgements exceeded the two-second limit, although all twelve files were ready within sixty seconds. Familiarity with the implementation does not remove that observed mismatch.

Option B acknowledges a queued job and uses a separate worker. All twelve measured acknowledgements met the limit, but one file took seventy seconds to become ready. The other eleven met the readiness limit. The log does not establish availability of the previous report for either option, and it does not cover worker recovery. Acceptance of a job must not be described as completion of its file.

I recommend a limited investigation of B while retaining A as a genuine comparison. The investigation should examine the readiness miss, check the previous-report requirement and define recovery behaviour. This is a conditional recommendation, not evidence that those checks have already succeeded. If B cannot satisfy the constraints, the preference must be reconsidered.

The listed monthly infrastructure estimates are twenty training credits for A and thirty-five for B at the stated volume. They exclude staff time, support and transfer costs, so they do not establish total cost. B also introduces an operational responsibility for which no owner has agreed.

Leo will draft the missing checks for review. That commitment does not include obtaining access or maintaining the worker. The record should be revisited when the missing evidence and ownership decisions are available, or if the required workload changes. Earlier versions should remain identifiable so that the reason for any revised recommendation is clear.

COMPARISON

The two Linden options solve the same export problem in different ways. A generates the file within the request, while B acknowledges a job and performs generation in a separate worker. The comparison must use the same requirements rather than awarding B a win merely because its acknowledgements are quick.

In the measured sample, A met the file-readiness limit for all twelve requests but missed the acknowledgement limit four times. B met the acknowledgement limit for all twelve, while one file took seventy seconds and missed the readiness limit. Neither log verifies that the previous report remained available. These are different gaps, and neither option has established compliance with every requirement.

A benefits from an existing maintained path and a lower infrastructure estimate. B may separate a user's wait for acceptance from the longer generation work, but adds worker monitoring and recovery responsibilities. The estimates exclude several cost categories and therefore cannot settle total cost.

I would investigate B further without removing A from the comparison. That preference depends on readiness, recovery and ownership evidence that is not yet available. A larger workload would require a new comparison; the current sample is not a performance guarantee.

CLARIFICATION

Could you clarify how repeated export submissions should be handled? The current brief defines acknowledgement and readiness limits and requires the previous report to remain available. It does not say whether two submissions represent two independent exports or the same request being repeated. We need that distinction before proposing recovery behaviour for the worker. Please identify who can approve the requirement and whether the decision applies to the current prototype or a later release. I am not reporting a confirmed duplicate-export defect. I am identifying an unresolved contract question that affects the comparison. Once the rule is agreed, the proposed checks can use a meaningful expected outcome.

OBJECTION

I agree that B met the acknowledgement limit in every trial. However, that advantage does not settle the whole decision. One file missed the readiness limit, the previous-report requirement was not checked, and no operational owner has agreed to maintain the worker. These are specific constraints and missing evidence, not an argument that queues are always unsuitable. I would support a limited investigation if its purpose and responsibilities are explicit. I would not describe that support as approval for production. Could you explain which result would make you reconsider B? Your answer would help us keep the comparison open instead of treating the preferred design as inevitable.

HANDOVER

The team agreed to investigate the queued-export option, while ADR 14 remains Proposed. A final production choice and a release have not been approved. Leo will draft the missing checks for review; he has not agreed to obtain access or operate the worker. Please preserve the acknowledgement and readiness results separately: B met the first limit in all twelve measured requests but missed the second once. Previous-report availability, recovery behaviour and ownership remain open. The listed infrastructure estimates are not total costs. The next reviewer should check the missing evidence and any changed workload before treating the conditional recommendation as an accepted decision.

REVISION

Revised ADR 14: compare queued exports before choosing a production design

Status remains Proposed. The agreed action is a further comparison, not a production switch. This revision separates that action from the design recommendation and preserves the limitations of the original evidence.

Linden staff need to request an export while continuing to download the previous report. For the agreed two-thousand-row fixture at five concurrent requests, acknowledgement must arrive within two seconds and the replacement file must be ready within sixty seconds. The previous report must remain available until replacement. Cancellation and repeated-submission rules are still unresolved. Thirty concurrent requests are a possible future requirement, not part of the measured evidence.

Option A uses the existing request-processing path to generate the file before acknowledging it. Eight of twelve measured acknowledgements met the two-second limit; four did not. All twelve files met the readiness limit. A's familiar operating model and lower listed infrastructure estimate are advantages, but do not excuse the acknowledgement mismatch.

Option B acknowledges a queued job and generates its file in a worker. All twelve acknowledgements met the limit. Eleven files met the readiness limit, while one took seventy seconds. Neither option's log establishes continued access to the previous report. B's recovery behaviour and operational ownership also remain open. A queue entry is not evidence of a completed file.

I still recommend investigating B, provided that the comparison retains A and explicitly tests the unresolved requirements. The investigation should examine the slow completion and define recovery expectations before a production recommendation is accepted. If B continues to miss a mandatory limit, if recovery is unacceptable or if no operational owner can be agreed, the preferred direction must be reconsidered. This revision does not claim that those future checks have already been performed.

The monthly infrastructure estimates remain twenty and thirty-five training credits at the stated volume. Staff time, support and transfer charges are excluded. Leo's commitment is to draft checks for review, not to supply access or maintain the worker. The next review should record actual evidence, accepted responsibilities and the decision authority. If a later record replaces this recommendation, it should refer back to this version so that the reasons for the change remain visible.

1. **Развёрнутый ответ:** Прочитай шесть полных Linden models. Найди problem, requirement, comparison, conditional recommendation, status и revisit trigger.
2. **Развёрнутый ответ:** По самостоятельному Juniper brief создай полный ADR 350–450 слов: context/status, constraints, options, evidence, recommendation, consequences, next step и reconsideration.
3. **Развёрнутый ответ:** Составь comparison matrix Juniper: requirement/option A/option B/evidence missing.
4. **Развёрнутый ответ:** Напиши 180–240 слов сравнения Juniper для читателя без знания протокола.
5. **Развёрнутый ответ:** Напиши 100–140 слов запроса про protocol/retries и ответственность.
6. **Развёрнутый ответ:** Напиши сильное возражение предпочтению B в 100–140 словах и допустимый ответ на него.
7. **Развёрнутый ответ:** Составь handover 100–140 слов: принятое сравнение, статус, конкретный next step, unknown ownership.
8. **Развёрнутый ответ:** Получи реальный отзыв на исходник 2 и сохрани цитаты плюс 2–3 решения. До отзыва pending.
9. **Развёрнутый ответ:** После обсуждения сохрани полную редакцию Juniper ADR 350–450 слов отдельным ответом.
10. **Развёрнутый ответ:** Сопоставь три места исходника/редакции: цитата → новая фраза → причина.
11. **Развёрнутый ответ:** Перепиши Supported by all stakeholders, если известно лишь согласие провести comparison.
12. **Развёрнутый ответ:** Сократи свой ADR до 100–140 слов для следующей встречи, сохрани условность.
13. **Развёрнутый ответ:** Сформулируй 3–4 условия пересмотра выбранной тобой рекомендации без утверждения будущих событий.
14. **Развёрнутый ответ:** Проверь документ по списку: units, sample, assumed/observed, proposed/accepted/deployed, full cost/estimate. Запиши реальные находки.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Фактические цитаты из доступных моделей и объяснение функций.. Модели читаются до ввода; не угадывай структуру.
2. Возможный образец (не единственный ответ): Самостоятельный Juniper текст: resume mandatory, A restarts, B 6/8 verified/2 duplicate chunks with unknown integrity, estimates conditional, no production choice.. Альтернативная обоснованная рекомендация допустима; не копировать Linden SLA и числа.
3. Возможный образец (не единственный ответ): Resume: A restarts despite completion, B 6 verified/2 repeat chunks; operation/security/other sizes unknown; estimates scoped.. Матрица дополняет, не заменяет полный документ.
4. Возможный образец (не единственный ответ): Объяснить whole-file/chunked, confirmed parts/resume, measured outcomes и uncertainty простыми предложениями.. Completion A не compliance с resume, repeated chunk B не доказанная corruption.
5. Возможный образец (не единственный ответ): Известное resume requirement отдельно от неизвестных assembly/retry details и owner; Nora review offer ограничен.. Не просить реальные credentials и не назначать отсутствующего человека.
6. Возможный образец (не единственный ответ): 6/8 verified не все, two retries violate no retransmission of acknowledged parts если они были acknowledged — это нужно уточнить; integrity unknown, ops/security gaps.. Brief говорит repeated chunk, но статус acknowledgement этой части не задан: не усилить факт до точной причины/нарушения без уточнения.
7. Возможный образец (не единственный ответ): Proposed, comparison agreed not production; можно предложить действие с явным proposed owner request, а не фиктивным acceptance.. Nora обещала review wording, не operational support.
8. Возможный образец (не единственный ответ): Фактический feedback и обоснованное принятие/отклонение советов.. Не приписывать партнёру approval и не заменять отзыв собственной догадкой.
9. Возможный образец (не единственный ответ): Цельный пересмотренный документ, все constraints, data/status/unknown сохранены; original 2 отдельно.. До feedback pending; changelog не заменяет full revision.
10. Возможный образец (не единственный ответ): Фактические изменения силы claims, структуры или грамматики.. Не стирать старые формулировки и не создавать фиктивный review.
11. Возможный образец (не единственный ответ): The team agreed to a further comparison; no production choice or agreement by absent stakeholders is established.. Не лишать команду реально принятого ограниченного шага.
12. Возможный образец (не единственный ответ): Problem, hard resume requirement, trade-off/evidence, status, unknown, next decision needed.. Сокращение не удаляет отрицание, scope и exclusions.
13. Возможный образец (не единственный ответ): Новые результаты resume/integrity, agreed owner, security review, changed size requirement.. Это triggers, не уже завершённые проверки.
14. Возможный образец (не единственный ответ): Цитаты своих фраз и исправления; если всё соответствует, обоснуй несколькими примерами.. Самопроверка не ручная оценка знаний и не mastery.

</details>

## Обсуждение решения и возражений

1. **Устная работа:** Объясни Linden problem/constraints без названий технологий; партнёр пересказывает нужный результат.
2. **Устная работа:** Партнёр сообщает новый requirement и preference. Уточни силу обоих и источник; сохрани ответ.
3. **Устная работа:** Представь A и B честно; партнёр выбирает неудобное тебе преимущество A и задаёт вопрос.
4. **Устная работа:** Используй although/despite в ответе на реальное возражение о стоимости.
5. **Устная работа:** Партнёр утверждает all twelve B requests succeeded. Уточни метрику и объясни различие ack/readiness.
6. **Устная работа:** Произнеси thirty seconds / five minutes / two to four person-days. Партнёр записывает услышанное и переспрашивает.
7. **Устная работа:** Сначала назови agreed to deploy, затем явно поправь себя на agreed to compare и проверь read-back.
8. **Устная работа:** Попроси партнёра принять ограниченную задачу. Он отказывается от части/срока; зафиксируй только согласованное.
9. **Устная работа:** Партнёр неожиданно увеличивает требуемую нагрузку или меняет размер fixture. Пересмотри рекомендацию.
10. **Устная работа:** Защити Juniper ADR, получи два неизвестных заранее вопроса и ответь на один уточняющий follow-up.
11. **Устная работа:** Нетехнический партнёр пересказывает твоё сравнение; уточни одну неоднозначность без жаргона.
12. **Устная работа:** Партнёр даёт скрытый новый design note устно с самопоправкой. Сначала перескажи, затем сверь с текстом.
13. **Устная работа:** Объясни разницу implementation effort и release date; партнёр оспаривает твою оценку основания.
14. **Устная работа:** Заверши обсуждение read-back: choice/status/conditions/next step/open questions; партнёр вправе остаться несогласным.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Реальный пересказ и адресная поправка при необходимости.. Не предполагать понимание по одному yes; без аудио шкалы unknown.
2. Возможный образец (не единственный ответ): Неизвестная заранее реплика, вопрос и фактическое уточнение.. Если партнёра нет, pending, не придуманная реплика.
3. Возможный образец (не единственный ответ): Признать сильную сторону, ответить по constraint и evidence.. Не обязательная победа B или согласие слушателя.
4. Возможный образец (не единственный ответ): Сохранить ниже listed cost и неизвестный total cost, а не спорить с карикатурой.. Проверка естественности и интонации по аудио.
5. Возможный образец (не единственный ответ): 12/12 ack, 11/12 ready, old report unverified; новый follow-up.. Не подменить success одним удобным числом.
6. Возможный образец (не единственный ответ): Фактические записанные единицы и ремонт понимания.. Нормативный UK/US не ошибка; текст не фонетическая оценка.
7. Возможный образец (не единственный ответ): Реальная самопоправка и пересказ статуса собеседником.. Упражнение на repair, не фиктивное решение команды.
8. Возможный образец (не единственный ответ): Живое ограничение, предложение, ответ; no agreement допустимо.. Не назначать absent owner и не путать offer с completion.
9. Возможный образец (не единственный ответ): Назвать, какое старое свидетельство перестало быть достаточным и какая проверка нужна.. Не выдумывать новые benchmark results.
10. Возможный образец (не единственный ответ): Фактические вопросы и ответы; можно честно оставить unknown.. Не чтение обеих ролей заранее.
11. Возможный образец (не единственный ответ): Например resume против restart, accepted job против ready file.. Не выдумывать непонимание: при точном пересказе отметь его.
12. Возможный образец (не единственный ответ): Реальная попытка до текста и отдельно text-supported correction.. Без записи pronunciation/fluency unknown; не ASR similarity.
13. Возможный образец (не единственный ответ): Сохранить assumptions/exclusions, не защищать выдуманную точную дату.. Реальная реакция и вопрос к допущению.
14. Возможный образец (не единственный ответ): Фактический итог и область согласия, без fabricated consensus.. Понимание не endorsement; без диалога pending.

</details>

## Смешанное повторение и новый перенос

1. **Краткий ответ:** We recommend ___ a smaller prototype. (building/to build)
2. **Краткий ответ:** Accepted investigation равно deployed change? yes/no.
3. **Краткий ответ:** Only if X всегда означает X достаточно? yes/no.
4. **Развёрнутый ответ:** Новый Pine brief: report may be ten minutes old, offline access required. A live-only / B local copy. Дай условное сравнение и вопросы.
5. **Развёрнутый ответ:** Новый Elm log: 9 requests, 6 timely/3 late, 4 users. Напиши точную фразу и одно ограничение.
6. **Развёрнутый ответ:** Исправь Despite B is cheaper, we recommend to deploy it if the owner will agree. Сохрани условность.
7. **Развёрнутый ответ:** Без моделей напиши 100–140 слов proposed decision по Pine: known, unknown, options, next question.
8. **Устная работа:** Партнёр добавляет неожиданный constraint к Pine и просит изменить рекомендацию. Обсуди и проверь read-back.
9. **Развёрнутый ответ:** Через семь дней получи другой architecture brief с новыми requirements/options/evidence. Напиши ADR 250–350 слов.
10. **Устная работа:** На отложенной проверке представь новый ADR партнёру и ответь на два неожиданных вопроса.
11. **Развёрнутый ответ:** Почему 127/127 опубликованных шагов T04 сейчас не означают полный T04 или освоение?
12. **Развёрнутый ответ:** После ручного разбора выдели 2–3 приоритетных типа пробелов и незнакомые задачи второго варианта.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: building. Recommend + -ing в заданной модели.
2. Ключ: no. Принятие работы и внедрение разные состояния.
3. Ключ: no. Необходимое условие не всегда достаточное.
4. Возможный образец (не единственный ответ): A не даёт offline по описанию; B может дать, но freshness/update/security нуждаются в уточнении.. Не переносить thirty-second Harbour limit или guaranteed B compliance.
5. Возможный образец (не единственный ответ): Six of nine requests were timely; four users, not nine; setup/generalisation unknown.. Не смешивать requests/users и не объявлять всех users affected.
6. Возможный образец (не единственный ответ): Although B is cheaper, we recommend deploying it if the owner agrees; либо despite a lower cost, with same condition.. Открытая редактура не обязана рекомендовать реальное внедрение; это предложение из задания.
7. Возможный образец (не единственный ответ): Новый самостоятельный текст с offline constraint и собственной аргументацией.. Не готовый production design из одного короткого brief.
8. Возможный образец (не единственный ответ): Реальное новое ограничение и основание изменения.. Не воображаемый диалог без партнёра.
9. Возможный образец (не единственный ответ): Новый материал и реальная дата/отсрочка; самостоятельные выводы.. До выполнения pending, не переименование Linden/Juniper.
10. Возможный образец (не единственный ответ): Новая реальная речь и адресные ответы, исходник отдельно от поправки.. Без звука pronunciation/fluency unknown; нельзя автоматически считать delayed mastery.
11. Возможный образец (не единственный ответ): Это первая наполненная подтема; данные/производительность и изменения/оценки ещё предстоят; качество требует manual review и переноса.. Исторический вопрос о версии T04 с одной опубликованной подтемой; последующее расширение не меняет смысл прежнего ответа.
12. Возможный образец (не единственный ответ): Реальные цитаты и адресная практика, если review нет — pending.. Не создавать фиктивные оценки, занятия или исправления.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** The recipient identifier must ___ inside the network. (remain/to remain)
2. **Краткий ответ:** We recommend ___ the internal option. (investigating/to investigate)
3. **Краткий ответ:** Could you explain which constraint A ___? (misses/does miss; нейтрально, без усиления)
4. **Краткий ответ:** The estimate depends ___ access. (on/of)
5. **Краткий ответ:** Новый Aspen brief требует recipient identifiers inside training network. Option sends identifiers outside. Это соответствует этому требованию? yes/no.
6. **Краткий ответ:** Lower infrastructure estimate автоматически lower total cost? yes/no.
7. **Краткий ответ:** Agreed to compare означает approved deployment? yes/no.
8. **Краткий ответ:** 8 requests от 3 accounts означают 8 unique people? yes/no.
9. **Развёрнутый ответ:** Самостоятельный Aspen Notices, design record 21 Proposed. Must: synthetic recipient identifiers remain inside training network; notice available to recipient within 10 seconds. A external mail provider sends identifiers outside; all 8 measured notices available within 10 sec. B internal inbox: all 8 stored, 6 available within 10 sec, 2 after 14 sec. Reading by people not measured. A familiar to team; B adds monitoring, owner not agreed. Proposed cost 3/7 training credits/month excludes staff/support. Same stated 8-message fixture; higher load unknown. Объясни, какое требование каждый вариант пока не удовлетворяет.
10. **Развёрнутый ответ:** Aspen не описывает retention или повтор notices. Напиши два нейтральных вопроса и границу вывода.
11. **Развёрнутый ответ:** Команда Aspen agreed to investigate B; Uma offers to review wording, не operate inbox. Статус и ownership?
12. **Развёрнутый ответ:** Напиши полный Aspen ADR 350–450 слов по 9–11: context/status, constraints, options, evidence, recommendation, consequences, next steps и revisit conditions.
13. **Развёрнутый ответ:** Дай сильную сторону A и сильное возражение его стороннику без straw man.
14. **Устная работа:** Партнёр неожиданно спрашивает о difference stored/available/read. Ответь по Aspen и проверь его read-back.
15. **Развёрнутый ответ:** Партнёр устно даёт новый design brief с числом, единицей и самопоправкой. До текста запиши обе версии и итог.
16. **Развёрнутый ответ:** Уточни одно услышанное обязательство, сохрани ответ и summary 60–90 слов.
17. **Устная работа:** Защити условное preference перед партнёром, который меняет constraint. Получи неожиданный follow-up.
18. **Развёрнутый ответ:** Исправь Despite A is familiar, we recommend to choose B. Could you explain why does B need monitoring?
19. **Развёрнутый ответ:** Коллега пишет all 8 stored значит all 8 available on time. Возрази с точными числами.
20. **Устная работа:** Партнёр предлагает тебе стать operational owner; ограничь/отклони scope и согласуйте только принятый шаг.
21. **Развёрнутый ответ:** После реального feedback на исходник 12 сохрани цитаты и 2–3 решения. До обсуждения pending.
22. **Развёрнутый ответ:** Сохрани полную редакцию Aspen ADR 350–450 слов отдельно от исходника после обсуждения.
23. **Устная работа:** Сначала устно назови agreed deployment, затем поправь на agreed investigation и попроси пересказ.
24. **Развёрнутый ответ:** Новый Ash backup brief: restore within 20 minutes, A estimated 15/B estimated 8, ни одного restore trial. Как ограничить сравнение?
25. **Устная работа:** Другой партнёр добавляет неожиданное условие к Ash и спрашивает о пересмотре. Обсуди и проверь понимание.
26. **Развёрнутый ответ:** Через семь дней получи новый не-notification brief и составь ADR 250–350 слов на новом материале.
27. **Развёрнутый ответ:** В версии T04 с одной опубликованной подтемой 127/127 и 8 closed correct: что ещё не подтверждено?
28. **Развёрнутый ответ:** По реальному разбору выбери 2–3 типа пробелов, адресную практику и новый контроль.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: remain. Modal + base без to.
2. Ключ: investigating. Recommend + -ing в заданной модели.
3. Ключ: misses. Встроенный вопрос без вопросительной инверсии.
4. Ключ: on. Depend on something.
5. Ключ: no. Конкретный mandatory boundary, не универсальный запрет любого email.
6. Ключ: no. Могут быть исключённые категории и разные допущения.
7. Ключ: no. Согласован исследовательский шаг, не внедрение.
8. Ключ: no. Requests, accounts и people разные единицы.
9. Возможный образец (не единственный ответ): A conflicts with inside-network rule; B two availability-limit misses; stored/read/available различны.. Не реальный security incident или рекомендация провайдера; числа и кейс вымышлены.
10. Возможный образец (не единственный ответ): How long should notices remain available? How should repeated submissions be handled? Rules unspecified.. Не переносить Linden old-report requirement или API retry window.
11. Возможный образец (не единственный ответ): Record Proposed; investigation agreed, no production choice/deployment; owner unresolved, Uma wording review only.. Не назначать ответственность из общего согласия.
12. Возможный образец (не единственный ответ): Самостоятельный полный документ с обеими несовпадающими проблемами и scoped costs; допустима условная рекомендация further investigation.. Original отдельно, не реальный запуск или перенос Linden deadlines.
13. Возможный образец (не единственный ответ): Familiar and all measured notices timely; mandatory network boundary still violated by design.. Не называть все external services плохими и не игнорировать constraint.
14. Возможный образец (не единственный ответ): Реальная адресная реплика и пересказ, reading unknown.. Без реального аудио pronunciation/fluency unknown; без партнёра pending.
15. Возможный образец (не единственный ответ): Реально услышанные новые данные, не прочитанный Aspen.. Если видел текст, text-supported; без источника pending.
16. Возможный образец (не единственный ответ): Фактический scope accepted action и unknown, без выдуманной реализации.. Чтение собственной записи не новая listening попытка.
17. Возможный образец (не единственный ответ): Новый факт и адресный пересмотр; можно честно оставить вопрос открытым.. Не повтор заранее заученного монолога.
18. Возможный образец (не единственный ответ): Although A is familiar, we recommend choosing B. Could you explain why B needs monitoring?. Clause/gerund/embedded order, полная редактура вручную; иной ясный вариант допустим.
19. Возможный образец (не единственный ответ): All eight stored; six available within ten seconds, two after fourteen. Storage does not establish timely availability.. Не объявлять неизвестное чтение провалом доставки.
20. Возможный образец (не единственный ответ): Фактические offer, response, next step; no agreement допустимо.. Не приписывать absent Uma ответственность.
21. Возможный образец (не единственный ответ): Реальные замечания и основания изменения или отклонения.. Не выдумывать чужие отзывы.
22. Возможный образец (не единственный ответ): Цельный документ с constraints, known/unknown, status и условностью.. Changelog не заменяет revision; original не затирается.
23. Возможный образец (не единственный ответ): Реальная содержательная самопоправка и read-back статуса.. Нельзя считать корректное слово в тексте фонетической оценкой.
24. Возможный образец (не единственный ответ): B has lower estimate, but neither measured compliance established; need comparable actual restore evidence.. Не приписывать автоматическое выполнение SLA по estimate.
25. Возможный образец (не единственный ответ): Фактический новый constraint, вопрос, ответ, read-back.. Не чтение двух ролей; unknown при недостающих данных.
26. Возможный образец (не единственный ответ): Реальная отсрочка/дата, самостоятельные требования, варианты и rationale.. До выполнения pending; переименование Aspen не новый перенос.
27. Возможный образец (не единственный ответ): Качество письма/речи, manual reviews и delayed transfer; остальные линии топика ещё не наполнены в этой версии.. Исторический вопрос о версии публикации, не автоматическое обновление оценки старого ответа.
28. Возможный образец (не единственный ответ): Цитаты и критерии из своих ответов; pending без review.. Нельзя фабриковать ошибки или достигнутый уровень.

</details>

### Вариант B

1. **Краткий ответ:** The client allows the user ___ offline. (to edit/edit)
2. **Краткий ответ:** I prefer a local draft ___ a read-only copy for editing. (to/than)
3. **Краткий ответ:** ___ the lower estimate, the constraint remains. (Despite/Although)
4. **Краткий ответ:** If the storage rule ___, we will revisit the proposal. (changes/will change)
5. **Краткий ответ:** Birch требует editing without connection. Read-only offline сам выполняет это? yes/no.
6. **Краткий ответ:** Можно ли признать полезное преимущество варианта и не принять его целиком? yes/no.
7. **Краткий ответ:** 3–5 person-days excluding review гарантирует release in five calendar days? yes/no.
8. **Краткий ответ:** Нет результата sync означает доказанную потерю данных? yes/no.
9. **Развёрнутый ответ:** Самостоятельный Birch Field Notes, design note 12 Proposed. Must: edit without connection; when two versions conflict, preserve both until user chooses. A offline read-only, edits require server; seven reading trials passed, offline editing unavailable by design. B local edits and later sync: seven conflict trials, five preserved both versions with completed sync; two conflict dialogs unresolved, sync outcome unknown. Smaller non-conflict cases not in log. A familiar, B requires storage/recovery work; owner not agreed. Effort 1–2/3–5 person-days assuming test device, excludes review/data-recovery checks. Различи требования и подтверждённые результаты.
10. **Развёрнутый ответ:** Birch не описывает limit local storage или logout behaviour. Составь запрос и поясни, почему нельзя вписать delete all как факт.
11. **Развёрнутый ответ:** Команда Birch agrees a prototype comparison. Tomas agrees to list recovery questions, not obtain device/own storage. Назови status/commitment/unknown.
12. **Развёрнутый ответ:** Создай полный Birch ADR 350–450 слов по 9–11. Context, constraints, options, evidence, условная рекомендация, consequences, next action и revisiting обязательны.
13. **Развёрнутый ответ:** Напиши сильное возражение B с признанием его пяти успешных trials.
14. **Устная работа:** Партнёр спрашивает неожиданно, можно ли засчитать A по семи reading trials. Ответь по нужному навыку продукта и проверь read-back.
15. **Развёрнутый ответ:** Партнёр даёт новый hidden design brief с условием, числом и поправкой. До текста запиши фактическую попытку.
16. **Развёрнутый ответ:** Спроси по услышанному о scope commitment; запиши реальный ответ и summary 60–90 слов.
17. **Устная работа:** Защити Birch recommendation; партнёр задаёт два неизвестных вопроса о conflict outcomes и доступе.
18. **Развёрнутый ответ:** Исправь The option is more easier. We recommend to compare it. Could you tell me why does it need storage?
19. **Развёрнутый ответ:** Коллега говорит five of seven значит five of seven users satisfied. Объясни ограничение.
20. **Устная работа:** Попроси партнёра review one section; он принимает только часть или не принимает. Согласуйте и перескажи итог.
21. **Развёрнутый ответ:** Получив реальный feedback на исходник 12, сохрани цитаты и 2–3 решения; иначе pending.
22. **Развёрнутый ответ:** Сохрани полную редакцию Birch ADR 350–450 слов отдельно после обсуждения.
23. **Устная работа:** В устном резюме поправь seven completed syncs на five completed/two unresolved; попроси партнёра пересказать.
24. **Развёрнутый ответ:** Новый Heather search: exact-case matching required; A fast case-insensitive, B slower exact-case, speed limit unspecified. Сделай ограниченную рекомендацию.
25. **Устная работа:** Партнёр добавляет к Heather новый verified speed requirement и оспаривает recommendation. Обсуди реальный новый факт.
26. **Развёрнутый ответ:** Через семь дней составь ADR 250–350 слов по новому не-offline brief и новым evidence.
27. **Развёрнутый ответ:** Почему отправка обоих вариантов не снимает manual review, delayed transfer и partial scope версии T04 с одной подтемой?
28. **Развёрнутый ответ:** После разбора укажи 2–3 реальных пробела, адресные задания и новый материал следующей проверки.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: to edit. Allow object to do.
2. Ключ: to. Prefer one thing to another.
3. Ключ: Despite. После предлога noun group.
4. Ключ: changes. Present в обычном условии.
5. Ключ: no. Offline reading не offline editing.
6. Ключ: yes. Уступка не полное согласие с recommendation.
7. Ключ: no. Effort, elapsed time и исключённая работа различаются.
8. Ключ: no. Unknown outcome не established data loss.
9. Возможный образец (не единственный ответ): A reading success not editing compliance; B 5/7 completed with both, 2 unresolved unknown not data loss.. Не переносить Aspen availability/network constraint или Linden seconds.
10. Возможный образец (не единственный ответ): Ask capacity/behaviour on logout; both unspecified, not permission or proof of deletion.. Не выполнять операции на реальном профиле ученика.
11. Возможный образец (не единственный ответ): Proposed, comparison agreed; Tomas list questions only; access and operating owner unknown.. Не prototype complete или accepted production design.
12. Возможный образец (не единственный ответ): Связный самостоятельный документ; preserve both и offline editing обязательны, 2 sync outcomes неизвестны, effort conditional.. Original отдельно от full revision; нет единственного обязательного winner.
13. Возможный образец (не единственный ответ): Five trials support the tested path; two remain unresolved, device/storage/recovery gaps matter. Not proof that all local editing is unsafe.. Не стирать успехи и не объявлять unknown как confirmed failure.
14. Возможный образец (не единственный ответ): Reading/editing разные requirements; реальный вопрос и пересказ.. Аудио необходимо для phonetic/fluency оценки.
15. Возможный образец (не единственный ответ): Новый источник и услышанные версии; не чтение Birch.. Text-supported при видимом тексте; без источника pending.
16. Возможный образец (не единственный ответ): Сохранить ограничение и неизвестное, не придумать approval/owner.. Самостоятельное объяснение, не текст двух заранее известных ролей.
17. Возможный образец (не единственный ответ): Адресные ответы, отдельно verified и unknown.. Не отвечать invented successful sync для двух unresolved.
18. Возможный образец (не единственный ответ): The option is easier. We recommend comparing it. Could you tell me why it needs storage?. Comparative, gerund и embedded order; открытый смысл проверяется вручную.
19. Возможный образец (не единственный ответ): Seven conflict trials, not necessarily users; preservation/completion measured, satisfaction not measured.. Не добавлять новые знаменатели и субъективную оценку.
20. Возможный образец (не единственный ответ): Реальный scope принятого обязательства, неизвестный срок не дописывается.. No agreement допустимо; не фиктивный consensus.
21. Возможный образец (не единственный ответ): Реальные редакторские основания, не копия образца отзыва.. Различать факт, стиль и грамматическую ошибку.
22. Возможный образец (не единственный ответ): Цельный текст с offline/conflict rules, known/unknown и статусом; original остаётся.. Журнал изменений не заменяет revision; pending до реального feedback.
23. Возможный образец (не единственный ответ): Фактическая самопоправка с единицами и real read-back.. Не превращать неуслышанное в ошибку произношения.
24. Возможный образец (не единственный ответ): A conflicts with required matching; B matches given criterion but no all-round compliance or unacceptable slowness established.. Не переносить Harbour freshness requirement.
25. Возможный образец (не единственный ответ): Назвать изменившийся constraint и новую проверку, не выдумывать результат.. Не заученный монолог; unknown если brief недостаточен.
26. Возможный образец (не единственный ответ): Новая самостоятельная работа, реальная дата и отсрочка, источники явно.. До выполнения pending; простая смена имени не перенос.
27. Возможный образец (не единственный ответ): Заполнение, качество и готовность содержания разные состояния; незнакомые навыки ещё требуют свидетельств.. Не сертификат CEFR или automatic mastery.
28. Возможный образец (не единственный ответ): Фактические цитаты/основания и честный pending при отсутствии проверки.. Не выдумывать результаты ученика.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Архитектурное решение: требования, варианты и компромиссы](../appendices/architecture-decisions.md)
- [Аргумент, уступка и честный вывод](../appendices/argument-concession.md)
- [Правила, советы и условия: карта A203](../appendices/rules-conditions.md)
- [Тестирование: условия, проверки, результаты и пределы выводов](../appendices/testing-language.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [Michael Nygard: Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
- [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

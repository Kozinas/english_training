# T03-api · API-контракты: входные данные, ответы, ошибки и повтор запросов

[Топик T03](../modules/T03.md). Сгенерировано из data/*.mjs.

Предпосылки: [T03-review](T03-review.md).

## Цели контроля

- Строить точные описания, условия и вопросы
- Различать поля, типы, отсутствие и значения
- Объяснять ответы, ошибки и побочные эффекты
- Описывать повтор и границы совместимости
- Читать контракт с версиями и ограничениями
- Слышать стадии, поправки и неизвестное
- Создавать и полностью редактировать API guide
- Уточнять контракт и проверять понимание

## Механизм

### Что такое контракт и что именно мы тренируем

API contract — описание того, что участник обязан передать и что другая сторона обещает при указанных условиях. Это не только пример удачного JSON. Нужны operation, inputs, preconditions, outputs, errors, effects, ограничения и версия. Языковая задача — сделать эти отношения однозначными для читателя. The endpoint accepts a JSON object описывает вход, The response contains an identifier — выход, The service creates a task — изменение состояния. Один пример не доказывает реализацию всех правил. Наши Cedar, Moss и Rowan вымышлены; не отправляй запросы в реальные сервисы. Это подробная практика технического английского, не полный курс проектирования API, безопасности или распределённых систем. Незнакомый технический факт уточняется, а не подменяется красивой уверенной фразой.

### Present Simple, роли и управление глаголов

Для обычного поведения используем Present Simple: The endpoint accepts requests; the service returns an object. Единственное endpoint/service получает -s, множественное requests не требует -s у своего глагола: Requests contain a title. В отрицании does not accept окончание переходит к does, а не остаётся accepts. Accept something, return something, contain something — без предлога перед объектом; respond to a request и return a value to the caller содержат to с разными ролями. Consist of fields — состав, provide the caller with details / provide details to the caller — две модели. Не переносим русское «отвечает на» в returns on. An API и a URL выбирают артикль по произнесённому началу: /eɪ/ и /juː/. Кодовые имена полей не меняем ради английской грамматики.

### Метод, путь, параметры, заголовки и тело

POST /tasks — пара method + path; один путь не описывает все операции. В /tasks/{id} фигурные скобки обозначают место конкретного значения, не буквальные символы запроса. Query parameters находятся после ?, headers — отдельные поля сообщения, body — содержимое, например JSON. Send the key in a header, include title in the body, request the resource at this path — полезные сочетания, не универсальный перевод любого русского «в». Content-Type характеризует переданное содержимое, Accept — предпочтения формата ответа; их не следует считать взаимозаменяемыми именами. Один ключ в JSON не автоматически заголовок. Для объяснения ученику можно словами перечислить части запроса, затем показать пример. Не вставляй настоящие credentials в ответы, URL, скриншоты или публичный репозиторий.

### Required, optional, omitted, empty и null

Required отвечает на вопрос об обязательном присутствии, type — о допустимом виде значения, nullable — о возможности null, default — о поведении при отсутствии. Это разные оси: optional string не означает string or null. В Cedar omitted label даёт general, empty string сохраняет пустую метку, null недопустим. A field is omitted / is present / is empty — три разных сообщения. JSON false отличается от строки "false", число 0 — от отсутствующего поля. В другом контракте правила могут быть другими: не учим универсальное null means delete. Скажи If label is omitted, the service uses general, а не If label will be omitted в обычной модели условия. Кванторы each/every/all и ограничители only/unless важны: не превращай некоторые допустимые значения во все.

### Обязанность, разрешение и достаточность условия

The caller must supply a title — требование; may omit label — разрешение; may fail — возможность исхода. Не выбирай смысл may по одному слову. Must not send null — запрет, need not send label — отсутствие необходимости, не запрет. Is required to provide и must provide передают обязанность, но have provided сообщает выполненное. Only if задаёт необходимое условие: A request is accepted only if it is valid не утверждает, что любой valid request принят без учёта доступа и других ограничений. Provided that / as long as вводят условие; unless обычно if not, но важно сохранить область отрицания. После modal нужен base, после be passive — V3: must be included. Нормативные MUST/SHOULD/MAY внутри спецификации зависят от заявленной системы терминов; разговорное should не автоматически формальный стандарт.

### Ответ HTTP и результат предметной операции

Разделяй transport observation, HTTP response и состояние операции приложения. Сервер может успешно вернуть состояние неудавшегося задания. В Moss GET status даёт 200 и body с status: failed: lookup succeeded, export failed. 202 обозначает принятую обработку, не готовый файл; конкретный status URL задаёт наш контракт, не сам код. 201 сообщает создание, но одинаковый ответ из механизма replay не доказывает новый объект. 204 не имеет response content: нельзя обещать JSON body с этим статусом. Сначала назови operation и version, затем status, поля body и разрешённый вывод. The request was accepted / the job is running / the file is ready — не стилистические синонимы. HTTP-код сам не описывает долговечность хранения, backup или то, что человек прочёл уведомление.

### Ошибки: причину не угадывают по одному сообщению

В Cedar malformed JSON получает 400, корректный JSON с недопустимым полем — 422, действительные credentials без нужного permission — 403. Это заданные ветки учебного контракта, не правило всем API использовать именно эти три ответа. Authentication проверяет удостоверение, authorisation — допустимость действия; успешно разобранное тело не даёт права его выполнить. Error code, human-readable message и field имеют разные функции. Branch on the documented code, not on the exact wording of the message: перевод сообщения может измениться. Для читателя напиши действие и условие, а не просто Something went wrong. При ошибке service may have already changed state в некоторых API: не обобщай отсутствие побочных эффектов всех ошибок из конкретных rejection paths Cedar. Не объявляй неизвестную причину серверным багом.

### Эффекты, пассив и достоверность результата

A notification is queued описывает постановку в очередь; has been delivered — доставку; has been read — чтение человеком. Passive ставит в начало объект: The task is created only after validation. Это не снимает условия и не придумывает исполнителя. The service logs the request и The service creates a task — два различных эффекта. Даже read-only в смысле запрошенной операции допускает служебные logs. Без описанного retention нельзя дописать The task is stored forever. Указанный expected effect — обещание контракта, observed effect — сведения конкретного опыта. В отчёте полезно сочетать source и факт: The contract says…; the log records…; it does not establish…. Доступная response schema сама не доказывает выполнение всех бизнес-правил.

### Идемпотентность не означает отсутствие изменений

Idempotent описывает одинаковый intended effect одного запроса и нескольких идентичных повторов, а не равенство всех ответов или нулевые изменения. PUT может создать или заменить состояние, DELETE — удалить: они не safe в смысле HTTP read-only semantics. Повтор DELETE может дать другой код, хотя целевое состояние «ресурс отсутствует» сохраняется; конкретные ответы устанавливает API. GET может вернуть новые данные между вызовами и всё ещё иметь read-only intended semantics. POST не объявляется идемпотентным просто по имени метода; специальный контракт может задать duplicate protection. Не переводить это как exactly once delivery и не обещать, что никаких логов или иных сопутствующих событий не будет. Язык описания должен называть именно effect и scope.

### Ключ повтора и тайм-аут

A timeout means that the client did not receive a response in time. It does not tell us whether the server applied the request. Повтор требует documented recovery rules. В Cedar защита после successful creation ограничена account, method, path, key, identical JSON body и ровно 24 часами retention. Новый key — не тот же защищённый повтор; другое тело с сохранённым key даёт conflict; после expiry защита не обещана. Concurrent in-flight behaviour не описано, поэтому нельзя гарантировать его. Reuse the same key / retry the request / rule out duplicate creation: reuse, retry, rule out имеют разные объекты. No response received не превращай в The server rejected it. Сохраняй unknown и проси недостающие сведения; учебная роль не является разрешением повторять реальную операцию.

### Совместимость и направление изменения

Backward compatibility здесь рассматривает старый client и новый server в заявленной области. Переименование поля с удалением старого, изменение типа, обязательный новый input или другое default behaviour могут менять контракт. Optional response field тоже нужно оценивать относительно поведения consumers: известный strict parser может отвергнуть незнакомое поле. Не говорим ни «любой additive change ломает всё», ни «любое добавление всегда безопасно». Adding a field may affect strict clients сохраняет возможность; We have checked client X against version Y сообщает конкретную проверку. Deprecated означает объявленное нежелательным/выводимым из употребления, не автоматически removed сейчас. Compatibility note должна отличать proposal, approved plan, released version и actually migrated clients. Сам номер новой версии не доказательство успешной миграции.

### Вопросы, относительные конструкции и точная ссылка

Could you clarify whether null is allowed? — embedded question: whether + subject + verb, без is null внутри. Why does the request fail? → Could you explain why the request fails? Оставляем does только если отдельно выбран emphatic смысл, не вопросительную инверсию. Whether to retry использует whether, не if, перед to-infinitive. The field that the client reads указывает объект reads; the field that identifies the task — подлежащее identifies. This response может ссылаться на replay или new creation: повтори имя/версию, если есть риск неоднозначности. What happens if the key expires? запрашивает правило, а When will you fix the broken retry? уже предполагает defect. Если defect не установлен, исправь предпосылку и задай нейтральный вопрос.

### Связный guide и полная редактура

Сначала обозначь operation/version/audience, затем prerequisites и inputs, success/error outputs, effects, retry limits и открытые вопросы. Это логика чтения, не обязательное одинаковое число абзацев. Пример тела иллюстрирует правило, но не заменяет ограничения null/empty/default. Дай читателю конкретный следующий шаг и не обещай SLA, которого нет. В полном исходнике и полной редакции сохраняй отдельные тексты; журнал changed optional wording полезен, но не заменяет исправленный guide. Models Cedar/Moss доступны перед работой, самостоятельный Rowan имеет другие условия PUT/DELETE. Открытая редактура оценивается по смыслу, структуре, точности и языку, а не совпадению с моделью. Несогласие с предложенным стилем допустимо при ясном обосновании.

### Аудирование и переговоры о контракте

Слушай числа, отрицания и самопоправки: four accepted не four ready; fifth timeout не fifth failed job. API /ˌeɪ piː ˈaɪ/, request /rɪˈkwest/, response /rɪˈspɒns/, queued /kjuːd/ даны в UK-модели; нормативный US-вариант не ошибка. При произнесении 201/202 выбери понятную форму и проверь пересказ собеседника, особенно при шуме. Реальное взаимодействие требует неизвестной заранее реплики партнёра, адресного уточнения, реакции на ответ и содержательного read-back. Yes не доказывает различение стадий. Без партнёра сохраняй pending, не пиши фиктивное согласие. TTS — вспомогательный сценарий, не естественный многоголосый разговор; без аудио pronunciation/oral fluency unknown, ASR не фонетическая оценка.

### Повторение, новый контроль и границы топика

Вернись к формам, условиям и ошибкам в смешанной практике, затем объясни другой API по новому brief. После каждого варианта нужна содержательная оценка длинного guide и диалога, адресная практика по реальным пробелам и новый перенос через семь дней. Нельзя считать выученный Cedar независимым контрольным кейсом, поменяв имя. Сохрани исходные ответы, исправленный текст и историю; пауза не сокращает задания. Темп выбирает ученик, материал не ограничен одним занятием. T03 всё ещё partial: код-ревью и API-контракты опубликованы, систематическое тестирование будет отдельной наполненной подтемой. Процент заполнения не подтверждает ни качество языка, ни техническую безопасность системы, ни завершение оставшегося охвата.

## Примеры с разбором

- **The endpoint accepts a JSON object.** — Endpoint принимает JSON-объект. Единственное число accepts.
- **Requests contain a title.** — Запросы содержат заголовок. Множественное contain.
- **The service does not accept null.** — Сервис не принимает null. После does not базовая accept.
- **Send the key in a header.** — Передай ключ в заголовке. In называет расположение данных.
- **The server responds to the request.** — Сервер отвечает на запрос. Respond to, но return a value без to перед value.
- **The response consists of three fields.** — Ответ состоит из трёх полей. Consist of — устойчивая модель.
- **The caller must supply a title.** — Вызывающая сторона должна передать title. Must + base.
- **The title must be supplied.** — Title должен быть передан. Modal passive be + V3.
- **You need not send a label.** — Не обязательно передавать label. Не запрет.
- **You must not send null for label.** — Нельзя передавать null для label. Запрет конкретного значения.
- **If label is omitted, its value defaults to general.** — Если label отсутствует, используется general. Условие с Present Simple.
- **An empty label is not an omitted label.** — Пустая метка не равна отсутствующей. Разные входы.
- **The body contains false, not the string "false".** — Тело содержит false, а не строку "false". Тип важнее внешнего сходства.
- **The request is accepted only if permission is granted.** — Запрос принимается только при предоставленном разрешении. Необходимость не достаточность.
- **The response identifies the newly created task.** — Ответ идентифицирует созданную задачу. New creation отдельно от replay.
- **A replay returns the original identifier.** — Повтор возвращает исходный идентификатор. Ещё один ответ не ещё один объект.
- **The notification has been queued, not delivered.** — Уведомление поставлено в очередь, не доставлено. Стадии не взаимозаменяемы.
- **The status lookup succeeded, but the export failed.** — Запрос состояния успешен, но экспорт не удался. Разные операции.
- **The job is still running.** — Задание всё ещё выполняется. Не готовый файл и не доказанная неудача.
- **The 204 response has no body.** — У ответа 204 нет тела. Не JSON с полем success.
- **Malformed JSON is rejected before task creation.** — Некорректный JSON отклоняется до создания задачи. Порядок в данном контракте.
- **Use the error code rather than the message wording.** — Используй код ошибки, а не формулировку сообщения. Rather than сопоставляет объекты.
- **The log records six attempts, not six users.** — Журнал содержит шесть попыток, не шесть пользователей. Единицы наблюдения.
- **The client timed out before receiving a response.** — Клиент дождался тайм-аута без ответа. Не доказанный исход на сервере.
- **We cannot rule out a completed operation.** — Нельзя исключить завершившуюся операцию. Rule out — исключить возможность.
- **Reuse the same key for the documented retry.** — Используй тот же ключ для описанного повтора. Не новый key.
- **The protection applies within the retention window.** — Защита действует в пределах срока хранения. Граница, не вечная гарантия.
- **An idempotent operation may change server state.** — Идемпотентная операция может менять состояние. Idempotent не safe/read-only.
- **The responses may differ while the intended effect stays the same.** — Ответы могут различаться при одинаковом целевом эффекте. Не побитовое равенство.
- **Could you explain why the request fails?** — Объясни, почему запрос не проходит. Embedded без does-инверсии.
- **Could you clarify whether to retry?** — Уточни, следует ли повторять. Whether перед to-infinitive.
- **Adding a field may affect strict clients.** — Добавление поля может затронуть строгие клиенты. May не universal failure.
- **The field is deprecated but has not been removed.** — Поле объявлено устаревшим, но ещё не удалено. Разные стадии изменения.
- **The migration note is a draft, not a release.** — Записка о миграции — черновик, не релиз. Статус документа.
- **Although the server returned the original 201 response, the retained key prevented a second creation, so counting responses as new tasks would misrepresent the log.** — Хотя сервер вернул прежний ответ 201, сохранённый ключ предотвратил второе создание: нельзя считать каждый ответ новой задачей. Сложный пример: уступка, эффект и ошибка вывода.
- **Even if the new response field is optional, a client that rejects unknown fields may still need an update.** — Даже если новое поле необязательно, клиент, отвергающий неизвестные поля, может потребовать обновления. Even if и relative clause сохраняют условие.

## Формы описания и уточнения

1. **Краткий ответ:** The endpoint ___ a JSON object. (accept/accepts)
2. **Краткий ответ:** The service does not ___ null. (accept/accepts)
3. **Краткий ответ:** The server responds ___ a request. (to/of)
4. **Краткий ответ:** The object consists ___ three fields. (of/for)
5. **Краткий ответ:** The field must ___ included. (be/is)
6. **Краткий ответ:** If the field ___ omitted, the default applies. (is/will be; обычное условие)
7. **Краткий ответ:** Could you explain why the request ___? (fails/does fail; без усиления)
8. **Краткий ответ:** Could you clarify ___ to retry? (if/whether)
9. **Развёрнутый ответ:** Исправь The endpoint return to a JSON: объясни согласование, управление и выбор имени объекта.
10. **Развёрнутый ответ:** Собери описание: rejects / the service / an empty title / after trimming. Добавь отрицание, не меняя времени.
11. **Развёрнутый ответ:** Передай «ключ должен быть передан в заголовке» через passive и active.
12. **Развёрнутый ответ:** Преврати Where does the key go? в вежливый embedded question.
13. **Развёрнутый ответ:** Сравни may omit label / may fail / must not send null / need not send label.
14. **Развёрнутый ответ:** Редактируй пунктуацию и ссылку: The server returned 202 it is ready. Известно только принятие задания.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: accepts. Endpoint — singular.
2. Ключ: accept. После does not используется базовая форма accept.
3. Ключ: to. Respond to something.
4. Ключ: of. Состав описывается сочетанием consist of.
5. Ключ: be. После must нужен be; затем причастие included.
6. Ключ: is. Present в условии обычного правила.
7. Ключ: fails. Embedded order без вопросительного does.
8. Ключ: whether. Whether перед to-infinitive.
9. Возможный образец (не единственный ответ): The endpoint returns JSON / a JSON object; -s, return object без to перед объектом.. Различи agreement и управление.
10. Возможный образец (не единственный ответ): The service rejects an empty title after trimming. The service does not reject an empty title after trimming.. Вторая фраза грамматическое преобразование, не факт Cedar.
11. Возможный образец (не единственный ответ): The key must be supplied in a header. The caller must supply the key in a header.. Be + V3 и base с сохранением роли.
12. Возможный образец (не единственный ответ): Could you clarify where the key goes?. Без внутренней does-инверсии.
13. Возможный образец (не единственный ответ): Разрешение, возможность, запрет, отсутствие обязанности.. Не одно значение всех modals.
14. Возможный образец (не единственный ответ): The server returned 202, so the request was accepted; the file is not confirmed ready.. Пунктуацию и смысл проверяет человек; не утверждать confirmed failure.

</details>

## Входные данные и условия

1. **Краткий ответ:** Cedar: omitted label выбирает какое значение? Одно слово.
2. **Краткий ответ:** Cedar: optional label автоматически допускает null? yes/no.
3. **Краткий ответ:** Cedar: JSON boolean false и строка "false" — один тип? yes/no.
4. **Краткий ответ:** Title may be omitted в Cedar верно? yes/no.
5. **Развёрнутый ответ:** Составь матрицу label: отсутствует, пустая строка, null. Для каждого укажи результат.
6. **Развёрнутый ответ:** Для Cedar объясни title "  Read  docs  ": что удалится и что останется?
7. **Развёрнутый ответ:** Придумай по одному допустимому телу Cedar с явным notify и без него. Только синтетические данные.
8. **Развёрнутый ответ:** Объясни required type и allowed values на примере format: required string, csv/json.
9. **Развёрнутый ответ:** В Moss сравни columns omitted / [] / null.
10. **Развёрнутый ответ:** Раздели POST /tasks?view=short, Content-Type, JSON title по method/path/query/header/body.
11. **Развёрнутый ответ:** Объясни различие Content-Type и Accept без обещания любого формата.
12. **Развёрнутый ответ:** Only if authorised означает, что authorised достаточно при любом body? Обоснуй.
13. **Развёрнутый ответ:** Запроси неизвестное правило length limit title, не объявляя поле unlimited.
14. **Развёрнутый ответ:** В Rowan объясни коллеге, почему пропуск note в PUT не сохраняет старую заметку (brief в «Письме»).

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: general. Это default по brief.
2. Ключ: no. Optional не nullable.
3. Ключ: no. Boolean и string различны.
4. Ключ: no. Title обязателен.
5. Возможный образец (не единственный ответ): general; empty preserved; 422 rejected, без task/notification.. Не общий закон любого API.
6. Возможный образец (не единственный ответ): Outer spaces removed; two internal spaces preserved; title remains nonempty.. Не схлопывать внутренние пробелы.
7. Возможный образец (не единственный ответ): Два JSON object с title string, boolean при наличии; default false при пропуске.. Не включать настоящие credentials.
8. Возможный образец (не единственный ответ): Присутствие и тип недостаточны без допустимого значения.. XML не допускается только по правилу данного brief.
9. Возможный образец (не единственный ответ): All columns при пропуске; [] и null rejected.. Не выдумать пустой успешный export.
10. Возможный образец (не единственный ответ): POST method; /tasks path; view query; Content-Type header; title body.. Вид запроса не доказывает поддержку view в Cedar: это разбор формы.
11. Возможный образец (не единственный ответ): Type отправленного content и предпочтения response; поддержка по API.. Один header не переименовывает другой.
12. Возможный образец (не единственный ответ): Нет; necessary condition не отменяет validation и другие условия.. Не подменить only if обычной достаточностью.
13. Возможный образец (не единственный ответ): Could you clarify the title length limit? The brief does not specify one.. Неизвестно не бесконечно допустимо.
14. Возможный образец (не единственный ответ): Full replacement, omitted note becomes empty string under Rowan contract.. Не переносить правило частичного PATCH.

</details>

## Ответы, ошибки и эффекты

1. **Краткий ответ:** HTTP 202 сам доказывает готовый файл? yes/no.
2. **Краткий ответ:** Может 200 status lookup Moss сообщить failed export? yes/no.
3. **Краткий ответ:** Ответ 204 содержит JSON body по HTTP semantics? yes/no.
4. **Краткий ответ:** Cedar: valid credential без tasks:write. Какой status в brief?
5. **Развёрнутый ответ:** Дай три коротких Cedar error descriptions: malformed JSON, null label, missing permission у valid credential.
6. **Развёрнутый ответ:** Сравни accepted/running/succeeded/failed/unknown на английском для export.
7. **Развёрнутый ответ:** Напиши error object с code/message/field для null label. Обозначь вымышленность имени code.
8. **Развёрнутый ответ:** Почему client shouldn't branch on exact English message? Дай более устойчивую альтернативу.
9. **Развёрнутый ответ:** Перепиши Notification sent to everyone, если известно лишь notify=true и queued one.
10. **Развёрнутый ответ:** Запрошенное read-only поведение исключает logging? Объясни роли.
11. **Развёрнутый ответ:** Из 201 и id можно вывести stored forever? Составь ответ и вопрос.
12. **Развёрнутый ответ:** Три 201 в Cedar доказывают три новых id? Используй C11/C12.
13. **Развёрнутый ответ:** Сопоставь The contract promises no task on 422 / this request returned 422. Что описание правила, что наблюдение?
14. **Развёрнутый ответ:** Пользователь пишет It failed после timeout. Ответь 3–4 предложениями с ограничением и запросом evidence.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Acceptance не completion.
2. Ключ: yes. Lookup и export разные операции.
3. Ключ: no. No response content.
4. Ключ: 403. Permission failure, не invalid field.
5. Возможный образец (не единственный ответ): 400 syntax; 422 field validation; 403 permission; заявленные rejection paths без creation.. Не универсальная классификация всех APIs.
6. Возможный образец (не единственный ответ): Разные стадии/исходы и отсутствие данных; unknown не ещё один confirmed failure.. Не сводить все к done/not done.
7. Возможный образец (не единственный ответ): Например invented code INVALID_LABEL; explanatory message; field label.. Brief не фиксирует конкретную строку code: не выдавать за опубликованную.
8. Возможный образец (не единственный ответ): Use documented error code; wording/translation can change.. Не обещать стабильность кода без контракта.
9. Возможный образец (не единственный ответ): One notification was queued; delivery/readership is not established.. Не everyone и не доставлено.
10. Возможный образец (не единственный ответ): No; operational logs can be recorded without changing the requested resource.. Safe не ноль всех побочных эффектов.
11. Возможный образец (не единственный ответ): No retention guarantee is stated. What retention policy applies?. Не выдумывать durability/SLA.
12. Возможный образец (не единственный ответ): No; C11 returned twice, C12 once; two established creations.. Response count не resource count.
13. Возможный образец (не единственный ответ): Первое normative contract claim, второе observed response; действие по контракту не отдельное измерение базы.. Не притворяться проверившим database.
14. Возможный образец (не единственный ответ): Client timeout known; server outcome unknown; ask request/version/key/status evidence without secrets.. Не повторять настоящую операцию автоматически.

</details>

## Повторы и совместимость

1. **Краткий ответ:** Idempotent обязательно означает read-only? yes/no.
2. **Краткий ответ:** Идемпотентность требует identical response bytes при каждом повторе? yes/no.
3. **Краткий ответ:** Cedar: сохраняется защита после 24 часов по данному brief? yes/no.
4. **Краткий ответ:** Cedar: changed body с retained key даёт какой status?
5. **Развёрнутый ответ:** Опиши все условия защищённого повтора Cedar, не потеряв scope и срок.
6. **Развёрнутый ответ:** Почему новое имя key после timeout не тот же protected retry?
7. **Развёрнутый ответ:** Rowan: PUT first 201 then 200, DELETE first 204 then 404. Объясни, почему разные статусы не опровергают idempotency.
8. **Развёрнутый ответ:** GET возвращает изменившееся содержимое. Это само доказывает non-idempotent method?
9. **Развёрнутый ответ:** Сформулируй уточнение о двух одновременно выполняющихся Cedar requests с одним key.
10. **Развёрнутый ответ:** Сравни add optional dueDate / rename id and remove old id. Укажи known strict client.
11. **Развёрнутый ответ:** Deprecated field уже removed? Напиши notice, где old field остаётся, date удаления unknown.
12. **Развёрнутый ответ:** Новая required input property добавлена без default. Объясни риск old callers в 4 предложениях.
13. **Развёрнутый ответ:** Optional limit default changed from all items to first 20. Почему форма та же, смысл иной?
14. **Развёрнутый ответ:** Напиши 80–110 слов о proposal versus deployment versus tested clients на новом вымышленном примере.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. PUT/DELETE могут менять состояние.
2. Ключ: no. Свойство intended effect.
3. Ключ: no. Результат хранится ровно 24 часа после successful creation.
4. Ключ: 409. Conflict по заданному контракту.
5. Возможный образец (не единственный ответ): Same account/method/path/key/identical JSON body, retained result within 24 h after creation.. Не обещать unspecified concurrent in-flight behaviour.
6. Возможный образец (не единственный ответ): Не соответствует key исходной операции; duplicate protection не обещана для нового key.. Не утверждать duplicate обязательно случится.
7. Возможный образец (не единственный ответ): Same intended resource state under repeated identical operation; status may differ.. Не разные операции PUT и DELETE между собой как один intended effect.
8. Возможный образец (не единственный ответ): No; returned representation can vary without requested state change.. Не путать стабильные данные со свойством операции.
9. Возможный образец (не единственный ответ): What happens if two requests with the same key are still in flight?. Не выдумывать concurrency guarantee.
10. Возможный образец (не единственный ответ): Addition can affect strict client; rename removes existing contract field; separate impact checks.. Не утверждать обе миграции уже выполнены.
11. Возможный образец (не единственный ответ): The field is deprecated but remains available; no removal date is specified.. Не выдумать срок или автоматический fallback.
12. Возможный образец (не единственный ответ): Previously valid callers omit it, may be rejected; assess version/migration; not approved by nice wording.. Не универсальный запрет любой major change.
13. Возможный образец (не единственный ответ): Old consumers may assume complete set; changed default affects semantic compatibility.. Не арифметическая ошибка клиента.
14. Возможный образец (не единственный ответ): Явные стадии, версия, неизвестное и next check, без выдуманного выпуска.. Не выдавать составленный сценарий за реальную работу.

</details>

## Чтение · Cedar Tasks

Cedar Tasks: a contract, not just a successful response

The Cedar team is preparing an English guide for consumers of its fictional task service. The published contract is version 1.3. A proposal labelled 1.4 is being discussed separately; it is not deployed. Jo, who writes the guide, wants to explain what callers must send, what they can expect, and which conclusions would go beyond the available evidence. The examples describe a training sandbox, not a production service that the learner should contact.

To create a task, an authorised caller sends POST /tasks with a JSON body. The caller needs a valid credential and the tasks:write permission. The title field is required and must be a string. Cedar removes spaces from its beginning and end, then rejects an empty result. Internal spaces are preserved. The optional label field is also a string. Omitting label selects general; sending an empty string keeps an empty label. Explicit null is not accepted. Optional therefore does not mean that every supplied value is valid. The optional notify field is a boolean and defaults to false.

For the first logged request below, the method and path are POST /tasks, the Content-Type header is application/json, and Idempotency-Key is a. Its body is {"title":"  Read docs  ","notify":true}. The response is 201 with Location: /tasks/C11 and body {"id":"C11","title":"Read docs","label":"general"}. This shows a trimmed title and the omitted label default. It also requests notification queuing, not guaranteed delivery.

A successful new creation returns HTTP 201 with id, title and label in a JSON object. The Location header identifies the new task. If notify is true, Cedar also queues one notification. Queued means that delivery has been requested, not that a recipient has received or read a message. This guide makes no claim about delivery time. The service may record operational logs even when no task is created. A response describing a task is not a promise about backups, retention or availability, none of which is specified in this exercise.

Malformed JSON produces 400. A well-formed body with a missing or invalid title, an invalid label, or a non-boolean notify produces 422. A valid credential without tasks:write produces 403. Those three rejection paths do not create a task or queue a notification under this contract. Their error objects contain code and message; field is included for a field-specific validation error. A caller should use code for the documented error category, rather than depend on the precise English wording of message. Missing or invalid credentials are handled by the authentication layer; its complete protocol is outside this brief.

The caller may supply an Idempotency-Key header. Cedar's rule is local to this API: after a successful creation, it retains the result for exactly twenty-four hours. During that period, the same account, method, path, key and identical JSON body return the original status and body without creating another task or queuing another notification. A different body with the retained key produces 409 instead. After expiry the key can be treated as new. The brief does not specify concurrent in-flight requests, so the guide must not promise a concurrency guarantee. Rejections before creation do not reserve the key. Requests without a key have no duplicate-creation protection under this rule.

The attached version 1.3 log has six submission attempts. The first created task C11 with key a; the second repeated the identical request with key a ten minutes later and returned C11 again. The third created C12 with key b. The fourth returned 422 for a null label. The fifth returned 403 because the credential lacked permission. The sixth, with a new key c, timed out at the client and has no recorded response or follow-up lookup. Thus three responses carried 201, but only two creations are established by the log. The sixth outcome is unknown. It is not evidence that nothing was created, nor evidence that a third task definitely exists.

In the proposed 1.4 response, an optional dueDate field would be added. A known older client rejects unknown response fields, so optional does not remove the compatibility concern for that client. Another proposal would rename id to taskId and remove id. Jo separates that proposal from simply adding a field. No migration has been approved, and no 1.4 execution results exist. The team asks for a guide that preserves these boundaries, requests clarification about concurrent requests, and explains why a timeout requires recovery under the documented contract rather than a confident claim of failure.

1. **Краткий ответ:** Сколько submission attempts в Cedar log? Цифра.
2. **Краткий ответ:** Сколько creations установлены журналом? Цифра.
3. **Краткий ответ:** Какая версия опубликована: 1.3 или 1.4?
4. **Развёрнутый ответ:** Составь последовательность всех шести attempts и отдельно known effects.
5. **Развёрнутый ответ:** Опиши три формы label и объясни optional для читателя без JSON-опыта.
6. **Развёрнутый ответ:** Сравни scopes двух rejection paths 422/403. Почему valid JSON не гарантирует success?
7. **Развёрнутый ответ:** Извлеки все ограничения Idempotency-Key и отдельный unanswered question.
8. **Развёрнутый ответ:** Какие сведения о notification и retention нельзя дописать в guide?
9. **Развёрнутый ответ:** Почему sixth attempt нельзя включить в confirmed failure или confirmed creation?
10. **Развёрнутый ответ:** Объясни отличие code/message/field и что не дано о конкретных code strings.
11. **Развёрнутый ответ:** Покажи known client impact dueDate и отдельный риск rename.
12. **Развёрнутый ответ:** Перепиши заголовок Six successful tasks on version 1.4.
13. **Развёрнутый ответ:** Сделай summary 120–160 слов с contract/log/proposal как тремя источниками утверждений.
14. **Развёрнутый ответ:** Поставь три новых вопроса автору, ответов на которые в brief нет; отдели question от defect claim.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 6. Не users или unique tasks.
2. Ключ: 2. C11 и C12, sixth unknown.
3. Ключ: 1.3. 1.4 пока предложение, не опубликованное поведение.
4. Возможный образец (не единственный ответ): C11 creation; C11 replay; C12 creation;422;403; timeout unknown.. Не три creations из трёх 201.
5. Возможный образец (не единственный ответ): Omitted general, empty kept, null rejected; можно не передавать, но supplied value constrained.. Не один общий empty.
6. Возможный образец (не единственный ответ): Validation отдельно от permission; valid credential может не иметь scope.. Не утверждать invalid credentials в fifth.
7. Возможный образец (не единственный ответ): Account/method/path/key/body,24 h after success; concurrent requests unspecified.. До creation rejection не резервирует key.
8. Возможный образец (не единственный ответ): Delivery/read/time/backups/task retention unknown; queue only under notify true.. Key retention не task retention.
9. Возможный образец (не единственный ответ): Client timeout, no response, no lookup; outcome unknown.. Не доказанное отсутствие события.
10. Возможный образец (не единственный ответ): Category/human explanation/field marker; literal application code values not specified.. Не выдумывать опубликованные identifiers.
11. Возможный образец (не единственный ответ): Strict client rejects unknown fields; rename removes id; proposals not deployed.. Не все clients доказанно broken.
12. Возможный образец (не единственный ответ): Version 1.3 log: six attempts, two established creations; proposal 1.4 separate.. Не превращать unknown в zero.
13. Возможный образец (не единственный ответ): Точные scope, counts, версии, unknown и unanswered concurrency question.. Не копировать весь текст вместо синтеза.
14. Возможный образец (не единственный ответ): Например concurrent handling, title length, retention; нейтральные уточнения.. Не спрашивать как неизвестное уже явно заданный default.

</details>

## Аудирование · Moss Exports

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Moss Exports: accepted is not ready

Mina: Before we write the client guide, let us agree which version we are describing. Moss version two is published. The document on my screen is a proposed wording update, not a new deployment. This is our fictional sandbox discussion, and the identifiers are only examples.

Ben: The operation is POST slash exports. It needs an authorised caller with exports write permission. Format is required and accepts csv or json. Columns is optional. If you leave it out, the service exports all available columns. If you send an empty array, it rejects the request. Null is rejected too. Those are different inputs; optional does not make them interchangeable.

Mina: And the immediate response?

Ben: An accepted export returns two hundred and two, with a job identifier and a status URL. The job can be queued, running, succeeded or failed. The caller reads the status URL with GET. A successful status lookup returns two hundred even when the job body says failed. The file URL appears only when the job has succeeded. We must not tell users to download a file just because the lookup itself worked.

Mina: Four files were ready in yesterday's sample, then?

Ben: I need to correct that. Four submissions were accepted and produced four job identifiers. At the recorded snapshot, two jobs had succeeded, one had failed, and one was still running. There were two ready files, not four. We have no later snapshot for the running job. The failed job was a processing failure after acceptance, not a rejection of the submission.

Mina: I also see a timeout in the notes. Was that one of those four?

Ben: No. A fifth submission timed out at the client before it received any response. We do not know whether Moss accepted it. It is separate from the four known job identifiers. Please do not add it to the failed-job count. A timeout is an observation about the client waiting, not a reliable account of everything the server did.

Mina: Can we retry with the same key?

Ben: The existing version-two contract supports a retry key. Within twelve hours of acceptance, the same workspace, key and identical submission return the original job identifier without scheduling another export. A changed body with that retained key is a conflict. The rule does not promise protection after twelve hours. We must follow that scope and check whether the key is still retained; we cannot invent a fresh key and call it the same protected retry.

Mina: The migration is complete. Sorry, that is not what I meant. I have drafted a note about replacing status with state. Nothing has been released, and the old status field is still present in version two. We have not checked the existing clients against that proposal. I will ask which clients read status directly.

Ben: I can review your note once it describes that as a proposal. I am not accepting responsibility for migrating those clients. Also, your sentence says all successful requests produce a file. Could you narrow it to jobs that have succeeded?

Mina: Yes. I will revise that sentence and keep the original draft for comparison. I have one unexpected question: if a status request returned two hundred, why is the export not successful?

Ben: Because the lookup and the export are different operations. Two hundred tells us that the status lookup succeeded. The body's failed value describes the export. Could you repeat that distinction in your own words?

Mina: A successful lookup can report a failed export. I will not label every two-hundred response as a completed file. We still need the actual revised guide and a check of its examples; agreeing on this wording has not completed those actions.

</details>

1. **Краткий ответ:** Сколько submissions точно accepted в исправленном Moss sample? Цифра.
2. **Краткий ответ:** Сколько ready files в snapshot после поправки? Цифра.
3. **Краткий ответ:** Retry window Moss: сколько часов? Цифра.
4. **Развёрнутый ответ:** Запиши исходное four files и поправку: что changed и кто исправил?
5. **Развёрнутый ответ:** Сравни columns omitted/[]/null по услышанному.
6. **Развёрнутый ответ:** Объясни 200 с failed в body и появление file URL.
7. **Развёрнутый ответ:** Где fifth timeout относительно four jobs и что известно о later running job?
8. **Развёрнутый ответ:** Восстанови protected retry: scope/time/payload/conflict.
9. **Развёрнутый ответ:** Поправка Mina migration complete: фактическое действие и статус поля.
10. **Развёрнутый ответ:** Что Ben согласился сделать и чего не принял?
11. **Развёрнутый ответ:** Перескажи неожиданный вопрос Mina, ответ Ben и её read-back.
12. **Развёрнутый ответ:** Дай 100–140 слов устного сообщения в письменной фиксации: что learned by listening, что осталось unknown. Укажи, открывал ли текст.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 4. Fifth timeout отдельно.
2. Ключ: 2. Четыре задания приняты; два файла готовы в данном snapshot.
3. Ключ: 12. В Moss двенадцать часов; не переносить двадцать четыре из Cedar.
4. Возможный образец (не единственный ответ): Mina предположила four ready; Ben исправил: four accepted, two succeeded, one failed, one running.. Не приписывать ему сначала заявление four ready.
5. Возможный образец (не единственный ответ): All available columns / rejected / rejected.. Не считать пустой массив успешным экспортом без столбцов.
6. Возможный образец (не единственный ответ): The status lookup succeeded, but the export failed. A file URL appears only when the job has succeeded.. Не ошибка самого status lookup.
7. Возможный образец (не единственный ответ): Separate fifth acceptance unknown; no later snapshot for running.. Не добавлять к confirmed failed.
8. Возможный образец (не единственный ответ): Same workspace, key and identical submission within twelve hours of acceptance; original job identifier, no additional export; changed body is a conflict.. Не подменять условия Moss данными Cedar.
9. Возможный образец (не единственный ответ): Only a migration note has been drafted. Status is still present in version two; there is no release or client check.. Не approved migration.
10. Возможный образец (не единственный ответ): Ben offered to review the note once it describes a proposal; he did not accept responsibility for migrating clients.. Предложение review не done.
11. Возможный образец (не единственный ответ): 200 lookup versus failed export; Mina пересказала различие, а редакция и проверка ещё предстоят.. Read-back не завершённый guide.
12. Возможный образец (не единственный ответ): Фактические corrections/states, mode listening/text-supported; pronunciation unknown without audio.. Чтение сценария не выдавать за независимое аудирование.

</details>

## Письмо · контракт и редактура

Сначала прочитай самостоятельный Rowan brief и полные модели. Пиши исходник и полную редакцию раздельно; не ограничивай работу временем одной встречи. Образцы не являются единственными допустимыми ответами.

Самостоятельное вымышленное досье Rowan Bookmarks 3.0. PUT /bookmarks/{id} создаёт отсутствующую или полностью заменяет существующую закладку по указанному id. Нужны действительные credentials и bookmarks:write. JSON: name и url — обязательные непустые строки; note — необязательная строка, пропуск означает пустую строку, null запрещён. Для этого учебного API ошибка полей даёт 422 без изменения закладки, недостаток permission — 403 без изменения. Успех создания: 201, замены: 200, JSON id/name/url/note. Повтор идентичного PUT к тому же id задаёт то же состояние закладки; response status может отличаться (201, затем 200), служебные logs могут добавляться. DELETE этого id даёт 204 без тела при удалении существующей записи; повтор после удаления даёт 404. Это правило Rowan, не требование каждому DELETE возвращать 404. В обоих случаях закладка отсутствует. Пропуск note в PUT очищает note, не сохраняет старое значение. В имеющемся log первый PUT R7 дал 201, повтор — 200, один invalid null note — 422. Предлагается заменить обязательный name полем title и убрать name; proposal не опубликован, client impact неизвестен. Backup/retention, частичное обновление и concurrent edits не описаны: попроси уточнение, не придумывай правила. Не отправляй реальные HTTP-запросы.

Полные авторские модели для анализа (Cedar/Moss, не ответ на самостоятельный Rowan):

CONTRACT

Cedar Tasks consumer guide, version 1.3

Use POST /tasks to create a task. The caller needs a valid credential with tasks:write permission and must send a JSON object. This guide describes the published version 1.3 contract, not the proposed version 1.4 changes. It does not establish a backup or availability guarantee.

Supply title as a string. The service removes outer spaces and rejects an empty result; it preserves internal spaces. Label is an optional string. If you omit it, the label becomes general. An empty string remains empty, whereas explicit null is invalid. Notify is optional, accepts a boolean and defaults to false. Do not use a string such as "false" to stand for the boolean value.

A new task returns 201 with id, title and label, plus a Location header identifying the task. When notify is true, one notification is queued. Queuing does not establish delivery or reading. Malformed JSON returns 400. Invalid fields return 422, and insufficient permission with a valid credential returns 403. These rejection paths create no task and queue no notification. Error objects include code and message; field identifies a field-specific validation problem. Use the documented code rather than matching the wording of message.

To obtain Cedar's duplicate protection, supply an Idempotency-Key. After successful creation, the result is retained for exactly twenty-four hours. A repeat with the same account, method, path, key and identical JSON body returns the original result without another creation or notification. A changed body with the retained key returns 409. After expiry, that protection no longer applies. Concurrent in-flight behaviour is not specified and needs clarification.

The six recorded attempts establish two creations, one replay and two rejections. The remaining attempt timed out without a known outcome. Three 201 responses do not mean three different tasks. Follow the documented recovery conditions; do not replace uncertainty with a claim that the server did nothing. The proposed dueDate addition and id rename require a separate compatibility discussion before publication.

RECOVERY

Recovery note for Cedar's unanswered submission

The sixth submission timed out at the client. We have no response or follow-up lookup for it, so we cannot say whether the service created a task. The absence of a response does not establish an absence of effects. It is also incorrect to report a confirmed third creation.

Keep the original request details, including the account, method, path, key and JSON body. Cedar's documented protection applies to an identical repeat within the retained twenty-four-hour period after successful creation. Changing the key or payload is not that protected repeat. A conflicting body with a retained key produces 409; expiry removes the stated protection.

Before choosing a recovery action, establish which conditions apply and ask about any missing information, especially concurrent in-flight behaviour. This brief does not define a complete recovery protocol for every failure. A new successful response would be new evidence and should be recorded separately from the original timeout. Until that happens, the original outcome remains unknown. Do not report a completed recovery merely because someone has agreed to investigate.

CLARIFICATION

Could you clarify the retry rule for concurrent requests? The version 1.3 brief explains an identical repeat after successful creation, within the retained twenty-four-hour period. It does not say what happens if two requests with the same account, path, method and key are still in flight at the same time. I therefore cannot document a concurrency guarantee. Please also confirm how a caller should recognise an expired key. I am asking about these missing parts of the contract, not reporting a proven implementation defect. Once we have an answer, I can revise the guide and identify any examples that need new checks.

COMPATIBILITY

The proposed response changes need separate compatibility checks. Adding dueDate leaves the existing field names in place, but our known older client rejects unknown fields. Calling the addition optional does not make that client's behaviour disappear. Removing id and replacing it with taskId would also remove a field on which existing consumers may depend. We should identify those consumers and agree a migration policy before presenting either proposal as compatible. At present, version 1.3 remains published, no migration has been approved, and there are no version 1.4 execution results. I can document the risks and questions; I cannot report that the clients have already been updated.

STATUS

A successful status lookup is not the same as a successful export. In the Moss sample, four submissions received acceptance responses and produced four job identifiers. At the recorded snapshot, two jobs had succeeded, one had failed and one was still running. Only the two successful jobs had ready files. The fifth submission timed out without a response and has an unknown acceptance outcome. Keep it separate from the known failed job. A 200 response from the status URL may correctly contain a failed job state. Please check the job state and the documented file field instead of treating every successful HTTP lookup as a completed export.

REVISION

Cedar Tasks guide: revision after the review discussion

This guide covers the published version 1.3 contract. The version 1.4 document is a proposal, not a deployment. Callers create tasks with POST /tasks, using a valid credential that includes tasks:write and a JSON object containing title. The title must be a string that remains nonempty after outer spaces are removed. Internal spaces are preserved.

The optional label is a string. Omission selects general, an empty string remains empty, and null is rejected. Optional notify is a boolean with a default of false. For a new creation, the response is 201 with id, title and label; Location identifies the task. If notify is true, the service queues one notification. This is a narrower statement than saying that someone received a message.

Malformed JSON returns 400, invalid fields return 422, and a valid credential without the required permission returns 403. Under this contract those paths create no task and queue no notification. Their error objects contain code and message, with field for a field-specific validation error. The English message is explanatory text, not a stable string for client branching.

Successful creation reserves the supplied idempotency key and result for exactly twenty-four hours. Within that period, identical repeats in the same account, method and path return the original result without another task or notification. A changed body with a retained key returns 409. Expired keys and concurrent in-flight requests must not be covered by an invented guarantee: protection after expiry is not promised, and concurrency is unspecified.

The log establishes two created tasks, one replay and two rejections. The sixth attempt has an unknown outcome after a client timeout. Our review has clarified this description; it has not recovered that request. The dueDate addition still affects a known strict client, and the proposed id rename requires its own migration discussion. Keep both proposals separate from the published contract until actual decisions and new evidence are available.

1. **Развёрнутый ответ:** Разбери полную модель Cedar contract: подпиши функции абзацев и найди input/default/effect/retry/unknown.
2. **Развёрнутый ответ:** По Rowan brief выше напиши полный consumer guide 320–420 слов: operation, inputs, success/errors, replacement, repeat, proposal, unknowns. Это отдельный исходник.
3. **Развёрнутый ответ:** Напиши recovery note 160–220 слов: новый Rowan PUT timed out, дальнейших данных нет. Что известно и что надо уточнить?
4. **Развёрнутый ответ:** Напиши clarification request 100–140 слов о concurrent edits Rowan, не утверждая defect.
5. **Развёрнутый ответ:** Напиши compatibility note 100–140 слов о proposal name→title с removal name в Rowan.
6. **Развёрнутый ответ:** Напиши 100–140 слов для нетехнического коллеги о повторе PUT 201→200 и одном ресурсе.
7. **Развёрнутый ответ:** Приведи два корректных Rowan request/response примера и один invalid null note. Используй invented ids, не реальные tokens.
8. **Развёрнутый ответ:** Получив реальный отзыв на исходник, сохрани журнал 2–3 приоритетных проблем: цитата, исправление, причина. Без отзыва укажи pending.
9. **Развёрнутый ответ:** Сохрани полную редакцию собственного Rowan guide 320–420 слов после отзыва отдельным ответом. Не стирай writing-2.
10. **Развёрнутый ответ:** Сравни Cedar contract/revision: какие claims уточнены, какиефакты не изменились?
11. **Развёрнутый ответ:** Отредактируй The API always works. Every retry is safe. Optional means null. All errors change nothing. Напиши точный абзац 60–90 слов.
12. **Развёрнутый ответ:** Дай таблицу response fields Rowan: имя, тип, значение, когда присутствует. Не добавляй timestamps.
13. **Развёрнутый ответ:** Попроси партнёра пересказать guide по одному новому запросу. Запиши фактический пересказ и одну неоднозначность либо evidence ясности.
14. **Развёрнутый ответ:** Составь собственный новый API brief с 5–7 правилами, затем guide на 60–100 слов. Явно пометь fictional; включи default, error и неизвестную сторону retry.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Cedar Tasks consumer guide, version 1.3 Use POST /tasks to create a task. The caller needs a valid credential with tasks:write permission and must send a JSON object. This guide describes the published version 1.3 contract, not the proposed version 1.4 changes. It does not establish a backup or availability guarantee. Supply title as a string. The service removes outer spaces and rejects an empty result; it preserves internal spaces. Label is an optional string. If you omit it, the label becomes general. An empty string remains empty, whereas explicit null is invalid. Notify is optional, accepts a boolean and defaults to false. Do not use a string such as "false" to stand for the boolean value. A new task returns 201 with id, title and label, plus a Location header identifying the task. When notify is true, one notification is queued. Queuing does not establish delivery or reading. Malformed JSON returns 400. Invalid fields return 422, and insufficient permission with a valid credential returns 403. These rejection paths create no task and queue no notification. Error objects include code and message; field identifies a field-specific validation problem. Use the documented code rather than matching the wording of message. To obtain Cedar's duplicate protection, supply an Idempotency-Key. After successful creation, the result is retained for exactly twenty-four hours. A repeat with the same account, method, path, key and identical JSON body returns the original result without another creation or notification. A changed body with the retained key returns 409. After expiry, that protection no longer applies. Concurrent in-flight behaviour is not specified and needs clarification. The six recorded attempts establish two creations, one replay and two rejections. The remaining attempt timed out without a known outcome. Three 201 responses do not mean three different tasks. Follow the documented recovery conditions; do not replace uncertainty with a claim that the server did nothing. The proposed dueDate addition and id rename require a separate compatibility discussion before publication.. Модель доступна до ответа; анализ не самостоятельный Rowan guide.
2. Возможный образец (не единственный ответ): Самостоятельный guide Rowan с PUT/DELETE,200/201/204/404, omission note и реальными границами brief.. Не заменить его Cedar или одним списком заголовков.
3. Возможный образец (не единственный ответ): Recovery note for Cedar's unanswered submission The sixth submission timed out at the client. We have no response or follow-up lookup for it, so we cannot say whether the service created a task. The absence of a response does not establish an absence of effects. It is also incorrect to report a confirmed third creation. Keep the original request details, including the account, method, path, key and JSON body. Cedar's documented protection applies to an identical repeat within the retained twenty-four-hour period after successful creation. Changing the key or payload is not that protected repeat. A conflicting body with a retained key produces 409; expiry removes the stated protection. Before choosing a recovery action, establish which conditions apply and ask about any missing information, especially concurrent in-flight behaviour. This brief does not define a complete recovery protocol for every failure. A new successful response would be new evidence and should be recorded separately from the original timeout. Until that happens, the original outcome remains unknown. Do not report a completed recovery merely because someone has agreed to investigate.. Cedar показывает жанр модели; Rowan не задаёт ключ или срок защиты. Не переносить twenty-four hours.
4. Возможный образец (не единственный ответ): Could you clarify the retry rule for concurrent requests? The version 1.3 brief explains an identical repeat after successful creation, within the retained twenty-four-hour period. It does not say what happens if two requests with the same account, path, method and key are still in flight at the same time. I therefore cannot document a concurrency guarantee. Please also confirm how a caller should recognise an expired key. I am asking about these missing parts of the contract, not reporting a proven implementation defect. Once we have an answer, I can revise the guide and identify any examples that need new checks.. Не переносить unspecified rule в published guarantee.
5. Возможный образец (не единственный ответ): The proposed response changes need separate compatibility checks. Adding dueDate leaves the existing field names in place, but our known older client rejects unknown fields. Calling the addition optional does not make that client's behaviour disappear. Removing id and replacing it with taskId would also remove a field on which existing consumers may depend. We should identify those consumers and agree a migration policy before presenting either proposal as compatible. At present, version 1.3 remains published, no migration has been approved, and there are no version 1.4 execution results. I can document the risks and questions; I cannot report that the clients have already been updated.. Различай старые и новые names, proposal и release; модель Cedar только образец жанра.
6. Возможный образец (не единственный ответ): A successful status lookup is not the same as a successful export. In the Moss sample, four submissions received acceptance responses and produced four job identifiers. At the recorded snapshot, two jobs had succeeded, one had failed and one was still running. Only the two successful jobs had ready files. The fifth submission timed out without a response and has an unknown acceptance outcome. Keep it separate from the known failed job. A 200 response from the status URL may correctly contain a failed job state. Please check the job state and the documented file field instead of treating every successful HTTP lookup as a completed export.. Модель Moss показывает ясное различение операций; самостоятельный ответ про Rowan.
7. Возможный образец (не единственный ответ): Успех 200 или 201 по наличию ресурса; 422 при null. Пропуск note очищает его. Имена кодов, которых нет в brief, помечены как вымышленные.. Успешный пример не весь контракт; не отправлять HTTP.
8. Возможный образец (не единственный ответ): Фактические замечания, не выдуманное одобрение преподавателя.. Журнал хранится отдельно от полной редакции.
9. Возможный образец (не единственный ответ): Cedar Tasks guide: revision after the review discussion This guide covers the published version 1.3 contract. The version 1.4 document is a proposal, not a deployment. Callers create tasks with POST /tasks, using a valid credential that includes tasks:write and a JSON object containing title. The title must be a string that remains nonempty after outer spaces are removed. Internal spaces are preserved. The optional label is a string. Omission selects general, an empty string remains empty, and null is rejected. Optional notify is a boolean with a default of false. For a new creation, the response is 201 with id, title and label; Location identifies the task. If notify is true, the service queues one notification. This is a narrower statement than saying that someone received a message. Malformed JSON returns 400, invalid fields return 422, and a valid credential without the required permission returns 403. Under this contract those paths create no task and queue no notification. Their error objects contain code and message, with field for a field-specific validation error. The English message is explanatory text, not a stable string for client branching. Successful creation reserves the supplied idempotency key and result for exactly twenty-four hours. Within that period, identical repeats in the same account, method and path return the original result without another task or notification. A changed body with a retained key returns 409. Expired keys and concurrent in-flight requests must not be covered by an invented guarantee: protection after expiry is not promised, and concurrency is unspecified. The log establishes two created tasks, one replay and two rejections. The sixth attempt has an unknown outcome after a client timeout. Our review has clarified this description; it has not recovered that request. The dueDate addition still affects a known strict client, and the proposed id rename requires its own migration discussion. Keep both proposals separate from the published contract until actual decisions and new evidence are available.. Cedar revision — модель жанра, не готовый ответ Rowan. Нужен полный текст, не журнал. Если отзыва нет, pending.
10. Возможный образец (не единственный ответ): Исходные ограничения журнала, ключа и предложений сохранены; clarified wording не означает, что запрос восстановлен.. Новая формулировка не является новым execution evidence.
11. Возможный образец (не единственный ответ): Нужно ограничить утверждения контрактом, типом входа, методом и scope; отдельно объяснить null и эффекты конкретных ошибок.. Недостаточно убрать always, оставив ложное содержание.
12. Возможный образец (не единственный ответ): id/name/url/note присутствуют в успешном JSON 200/201; у 204 тела нет.. Таблица не заменяет полный guide.
13. Возможный образец (не единственный ответ): Реальный read-back и найденная неоднозначность либо конкретное свидетельство ясности.. Если партнёра нет, оставь pending.
14. Возможный образец (не единственный ответ): Новые условия, согласованность brief и guide; не простое переименование Cedar.. Неизвестное можно сохранить как unknown.

</details>

## Речь · уточнение контракта

1. **Устная работа:** Объясни партнёру Cedar inputs без чтения модели; он даёт новый payload, ты разбираешь его.
2. **Устная работа:** Партнёр скрыто выбирает API правило и сообщает его устно. Повтори, затем получи уточнение о default.
3. **Устная работа:** Объясни коллеге 200 lookup / failed job; получи его собственный пересказ.
4. **Устная работа:** Партнёр намеренно неоднозначно говорит It worked. Уточни operation, version и evidence.
5. **Устная работа:** Возрази на Every POST is safe to retry; партнёр предлагает новый key. Объясни ограничения.
6. **Устная работа:** Партнёр сообщает число, затем действительно исправляет его. Зафиксируй первую и новую версии, уточни единицу.
7. **Устная работа:** Обсуди optional response field со strict client; партнёр задаёт неожиданный контрпример.
8. **Устная работа:** Партнёр просит гарантировать backup по ответу 201. Откажись от неподтверждённого вывода и попроси сведения.
9. **Устная работа:** Защити Rowan guide: два заранее неизвестных вопроса партнёра и один follow-up после твоего ответа.
10. **Устная работа:** Произнеси API, request, response, queued и три фразы с 201/202. Партнёр пересказывает числа.
11. **Устная работа:** Поменяйтесь ролями consumer/author: запроси недостающее правило, получи новое условие и пересмотри свой пример.
12. **Устная работа:** Дай новому коллеге краткий handover: что опубликовано, что предлагается, что неизвестно. Он выбирает следующий шаг, ты уточняешь.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Фактически полученный новый payload и ответ с причиной; null, omission и empty различаются.. Без аудио pronunciation и oral fluency остаются unknown.
2. Возможный образец (не единственный ответ): Действительно услышанная новая реплика, вопрос, ответ и проверенный пересказ.. Без партнёра pending. Чтение не выдаётся за аудирование.
3. Возможный образец (не единственный ответ): Разные операции; исправление пересказа, если оно требуется.. Одно yes не является содержательным read-back.
4. Возможный образец (не единственный ответ): Реальный ответ в согласованной роли, не заранее прочитанный монолог.. Уточни предмет утверждения вместо догадки.
5. Возможный образец (не единственный ответ): Method не гарантирует повтор; важны same key, scope, expiry и неизвестный исход.. Не повторяйте реальные запросы в учебном упражнении.
6. Возможный образец (не единственный ответ): Attempt, resource и response раздельны; поправка основана на услышанном.. Ошибка ученика не обязательна: можно сразу верно понять поправку.
7. Возможный образец (не единственный ответ): Не any addition breaks all и не always compatible; назван конкретный consumer.. Сохрани границу известного клиентского поведения.
8. Возможный образец (не единственный ответ): Полезное объяснение unknown, а не уход от вопроса.. Не выдумывай политику хранения.
9. Возможный образец (не единственный ответ): Реальные реплики, адресная реакция и проверка понимания.. Текст без звука не проверяет произношение.
10. Возможный образец (не единственный ответ): Нормативные UK/US варианты допустимы; разборчивость проверяется по аудио.. ASR similarity не является фонетической оценкой.
11. Возможный образец (не единственный ответ): Новое согласованное условие явно помечено как fictional extension, не исходный факт brief.. Согласованное условие не является реализованным изменением.
12. Возможный образец (не единственный ответ): Реальная реакция и названные основания; без партнёра pending.. Не назначай собеседнику ответственность без его согласия.

</details>

## Смешанное и отложенное применение

1. **Краткий ответ:** The service ___ not return a file immediately. (does/do)
2. **Краткий ответ:** Could you clarify whether the field ___ required? (is/does)
3. **Краткий ответ:** Same intended effect требует same status code? yes/no.
4. **Краткий ответ:** Optional автоматически nullable? yes/no.
5. **Развёрнутый ответ:** Новый Orchid brief: 202 accepted, позднее job failed. Напиши 2–3 предложения без противоречия.
6. **Развёрнутый ответ:** Новый Willow contract: retry window 30 minutes, body must match. Можно ли через 45 минут применить Cedar rule о 24 часах?
7. **Развёрнутый ответ:** Новый Reed PATCH: omitted note leaves it unchanged; null clears it. Сравни с Rowan PUT.
8. **Развёрнутый ответ:** Без модели напиши 100–140 слов guide note к Reed из предыдущего задания: две известные нормы и три вопроса.
9. **Устная работа:** Партнёр даёт новую комбинацию status/body. Уточни источник правила, объясни вывод и получи контрвопрос.
10. **Развёрнутый ответ:** Через семь дней получи новый API brief или прочти новую официальную страницу. Напиши guide на 180–240 слов с request, response, error и retry limit.
11. **Устная работа:** На отложенной проверке объясни новый brief партнёру, ответь на два неожиданных вопроса и проверь его read-back.
12. **Развёрнутый ответ:** После ручной проверки назови 2–3 реальных типа пробелов, адресную практику и незнакомый материал для повтора.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: does. The service — единственное число, поэтому does.
2. Ключ: is. Внутри вопроса используется be: the field is required.
3. Ключ: no. Идемпотентный эффект не требует одинакового кода ответа.
4. Ключ: no. Отсутствие поля и допустимость null задаются отдельно.
5. Возможный образец (не единственный ответ): The submission was accepted, but processing failed. Данных о status lookup нет.. Не переносить код 201 из другого API.
6. Возможный образец (не единственный ответ): Нет: другой контракт и истёкший срок защиты; фактический эффект неизвестен.. Нельзя подменять условия нового API старым правилом.
7. Возможный образец (не единственный ответ): Разные контракты: partial update и full replacement; разные правила omission/null.. Не превращай правило одного API в универсальное.
8. Возможный образец (не единственный ответ): Неизвестные errors, auth и status не выдумываются; своё предложение можно явно пометить.. Ответ проверяется содержательно, не по совпадению с образцом.
9. Возможный образец (не единственный ответ): Реальный обмен, не две заранее прочитанные роли.. Без партнёра pending; качество устной речи требует аудио.
10. Возможный образец (не единственный ответ): Новый материал; ссылка и дата для интернет-источника; исходный ответ хранится отдельно.. До реальной отсрочки pending. Переименование Cedar/Rowan не является новым переносом.
11. Возможный образец (не единственный ответ): Фактически новые примеры и взаимодействие; произношение проверяется по звуку.. Не выставлять отложенное освоение автоматически.
12. Возможный образец (не единственный ответ): Свидетельства из своих ответов, не фиктивные ошибки; если оценки нет, pending.. Полное заполнение не является подтверждённым освоением.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** The operation ___ a job identifier. (return/returns)
2. **Краткий ответ:** The input must ___ validated. (be/is)
3. **Краткий ответ:** Could you explain why the lookup ___? (fails/does fail; без усиления)
4. **Краткий ответ:** The client responds ___ the challenge. (to/of)
5. **Краткий ответ:** Optional integer автоматически разрешает JSON null? yes/no.
6. **Краткий ответ:** HTTP 202 сам доказывает успешное завершение обработки? yes/no.
7. **Краткий ответ:** Идемпотентный DELETE не может менять server state? yes/no.
8. **Краткий ответ:** Тайм-аут клиента доказывает, что сервер не выполнил запрос? yes/no.
9. **Развёрнутый ответ:** Новое досье Alder Imports 4.0: POST /imports с valid credentials и imports:write. JSON format обязателен и равен csv; delimiter — optional string, omission означает comma, empty и null rejected 422 без job. Accepted response 202 содержит jobId/statusUrl, не файл. Перескажи operation/preconditions/inputs/response в 80–110 словах.
10. **Развёрнутый ответ:** Alder: две submissions с одинаковым workspace/key/body за 5 минут вернули 202 и один jobId A9. Contract хранит результат 15 минут после acceptance, protected repeat не планирует второй job. Позднейший GET status вернул 200 и body failed. Что установлено, а что не следует?
11. **Развёрнутый ответ:** Alder: changed body с retained key даёт 409, after 15 min защиты нет; concurrent in-flight rule не описано. Напиши краткую retry warning и вопрос.
12. **Развёрнутый ответ:** Напиши полный consumer guide Alder 320–420 слов по заданиям 9–11. API 4.0 опубликован; предложение поддержать xlsx не approved/released. Other error codes и retention импортированных данных неизвестны.
13. **Развёрнутый ответ:** Напиши 100–140 слов compatibility note: владелец предлагает удалить jobId и назвать поле id; существующие consumers не проверены.
14. **Устная работа:** Представь Alder партнёру; он задаёт два заранее неизвестных вопроса о retry и готовности. Ответь и проверь его пересказ.
15. **Устная работа:** Партнёр предлагает delimiter null, затем уточняет, что хотел default. Объясни нужный input и получи новый пример от него.
16. **Развёрнутый ответ:** Попроси партнёра отдельно устно дать новый краткий API brief: operation, optional input, accepted/finished count и одну самопоправку. До прослушивания не читай текст. Зафиксируй услышанное и режим.
17. **Развёрнутый ответ:** Задай партнёру вопрос о неопределённом исходе из его brief; сохрани реальный ответ и обновлённое summary 60–90 слов.
18. **Развёрнутый ответ:** Исправь Could you explain why does it returns a file? It returned 202 so file ready. Известно только acceptance.
19. **Развёрнутый ответ:** Автор говорит All errors leave everything unchanged. В Alder дано только 422 без job. Напиши ограниченную формулировку.
20. **Устная работа:** Партнёр требует назвать срок хранения imported data по retry 15 min. Объясни различие и уточни policy.
21. **Развёрнутый ответ:** Получив настоящий отзыв на полный guide, сохрани исходную цитату и 2–3 обоснованных решения редактора; если отзыва нет, pending.
22. **Развёрнутый ответ:** Напиши полную редакцию своего Alder guide 320–420 слов после обсуждения, отдельно от исходника задания 12.
23. **Устная работа:** Обсуди rename jobId с партнёром, который хочет выпустить его сразу. Уточни consumers, предложи следующий шаг; проверь принятое и непринятое.
24. **Развёрнутый ответ:** Новый brief Lyra: PUT /flag sets enabled=true; first response 201, repeat 200. Один и тот же эффект? Объясни без Alder key rule.
25. **Устная работа:** Передай свой исправленный guide новому собеседнику. Он выбирает необычный input, ты отвечаешь и задаёшь уточнение.
26. **Развёрнутый ответ:** Через семь дней получи другой API brief или прочти новую официальную страницу; напиши 180–240 слов и сохрани источник/дату. Не переименовывай Alder.
27. **Развёрнутый ответ:** Раздели published 4.0 / proposed xlsx / returned 202 / job failed / client not checked по типу свидетельства.
28. **Развёрнутый ответ:** После содержательной оценки составь план адресного повторения по 2–3 реальным пробелам с новым контрольным материалом.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: returns. Singular operation + returns.
2. Ключ: be. Modal passive be + V3.
3. Ключ: fails. Embedded question без вопросительного does.
4. Ключ: to. После respond перед объектом употребляется to.
5. Ключ: no. Presence и nullability раздельны.
6. Ключ: no. Accepted не completed.
7. Ключ: no. Idempotent не read-only.
8. Ключ: no. Результат на сервере может остаться неизвестным.
9. Возможный образец (не единственный ответ): Раздельные стадии и ограничения, не Cedar general/201.. Не придумывать поддержку JSON как формата импорта или готовый файл по ответу 202.
10. Возможный образец (не единственный ответ): Один job, replay, successful lookup, failed processing; не два успешных imports.. Не смешивать число responses и jobs.
11. Возможный образец (не единственный ответ): Все условия scope, time и неизвестного. Timeout не доказанный failure; новый key не тот же repeat.. Не обещать 12 или 24 часа из учебной практики.
12. Возможный образец (не единственный ответ): Связный самостоятельный guide: контракт, log, proposal и вопросы раздельно.. Не весь guide как заголовки и не выдуманная реализация xlsx.
13. Возможный образец (не единственный ответ): Удаление прежнего имени может затронуть readers; proposal не готовая migration.. Не утверждать, что все клиенты уже проверены и не работают.
14. Возможный образец (не единственный ответ): Реальный обмен и адресные ответы; unknown допустимо.. Без партнёра pending; транскрипт не pronunciation.
15. Возможный образец (не единственный ответ): Omission выбирает comma; explicit null rejected. Нужен реально новый payload.. Не читать обе роли вместо общения.
16. Возможный образец (не единственный ответ): Новые фактические сведения от партнёра, коррекция и отдельные единицы.. Если видел текст, text-supported; без источника pending, не придуманный результат.
17. Возможный образец (не единственный ответ): Ответ может сохранить unknown; correction по фактической реплике.. Не переносить A9 в независимый listening brief.
18. Возможный образец (не единственный ответ): Could you explain why it returns a file? Затем исправить предпосылку: a 202 response does not establish that a file is ready.. Пунктуация, естественность и смысл проверяются человеком.
19. Возможный образец (не единственный ответ): The specified 422 validation path creates no job. Other errors and effects are not described.. Не распространять правило на неизвестные ветки или служебные logs.
20. Возможный образец (не единственный ответ): Key retention не data retention; реальный follow-up.. Без звука pronunciation/oral fluency unknown.
21. Возможный образец (не единственный ответ): Реальный evidence и приоритеты, не выдуманная teacher score.. Журнал не полная редакция.
22. Возможный образец (не единственный ответ): Полный текст, исправления смысла/структуры/языка, неизменённые факты.. Список правок не заменяет полный guide; до получения отзыва — pending.
23. Возможный образец (не единственный ответ): Реальный ответ, допускается disagreement; proposal не release.. Не приписывать партнёру обещание мигрировать.
24. Возможный образец (не единственный ответ): The repeated PUT sets the same target state; different responses are compatible with idempotence. No key rule is given.. Не объявлять exactly-once network delivery.
25. Возможный образец (не единственный ответ): Фактическое применение и проверенный read-back.. Не готовый монолог; pending без собеседника.
26. Возможный образец (не единственный ответ): Новые conditions/request/error/retry limits, реально прочитанный источник или новый авторский brief.. До фактической отсрочки pending; не автоматическое освоение.
27. Возможный образец (не единственный ответ): Контракт, предложение, ответ, исход операции и неизвестное воздействие на клиента.. Это не одна ось done / not done.
28. Возможный образец (не единственный ответ): Evidence из своих ответов и конкретные банки; без оценки pending.. Не выдумывать ошибки и не выводить mastery из 8/8 закрытых ответов.

</details>

### Вариант B

1. **Краткий ответ:** The endpoint does not ___ blank names. (accept/accepts)
2. **Краткий ответ:** The body consists ___ two fields. (of/to)
3. **Краткий ответ:** Could you clarify ___ to resend it? (whether/if)
4. **Краткий ответ:** If a field ___ omitted, its default applies. (is/will be; обычное условие)
5. **Краткий ответ:** Empty string и omitted field всегда одно и то же? yes/no.
6. **Краткий ответ:** HTTP 204 предполагает JSON response body? yes/no.
7. **Краткий ответ:** Idempotent означает identical response body при всех повторениях? yes/no.
8. **Краткий ответ:** Deprecated автоматически означает removed now? yes/no.
9. **Развёрнутый ответ:** Новое досье Brook Profiles 2.1: PUT /profiles/{id}, valid credentials и profiles:write. nickname — required nonblank string; bio — optional string или null. Omitted и null означают empty bio. PUT полностью заменяет профиль. Invalid fields 422 и insufficient permission 403 оставляют профиль без изменения. Перескажи входы и условия 80–110 словами.
10. **Развёрнутый ответ:** Brook success: create 201/replace 200, JSON id/nickname/bio. Log: PUT B4 дал 201, идентичный повтор 200; другое тело с blank nickname 422. Ещё один PUT B5 timed out без follow-up. Какие эффекты установлены и какие нет?
11. **Развёрнутый ответ:** Brook: repeated identical PUT задаёт то же состояние; operational logs могут добавляться. Отдельного retry-key contract нет. Объясни idempotency и отличие response/effect.
12. **Развёрнутый ответ:** Напиши полный consumer guide Brook 320–420 слов по 9–11. Published 2.1; proposal 2.2 изменяет omission bio на preserve existing, ещё не released. Concurrent edits/backup/other errors не описаны.
13. **Развёрнутый ответ:** Напиши 100–140 слов compatibility note о новом default bio и прежних callers.
14. **Устная работа:** Представь Brook партнёру; он задаёт два заранее неизвестных вопроса о replacement и B5. Ответь и попроси пересказ.
15. **Устная работа:** Партнёр хочет оставить старое bio, не передавая его. Уточни версию и объясни опубликованное правило; получи его новый пример.
16. **Развёрнутый ответ:** Партнёр устно даёт новый brief: update operation, response/input rule, count и самопоправка. Сначала слушай без текста, потом запиши обе версии числа и единицу.
17. **Развёрнутый ответ:** Уточни у партнёра неизвестный исход и сохрани ответ. Напиши новое summary 60–90 слов с его ограничением.
18. **Развёрнутый ответ:** Исправь The response consist from fields. Could you tell me where does bio go? Сохрани смысл.
19. **Развёрнутый ответ:** Коллега утверждает: B5 does not exist because the client timed out. Ответь 3–4 предложениями.
20. **Устная работа:** Партнёр считает service logging несовместимым с idempotency. Объясни intended effect и уточни его возражение.
21. **Развёрнутый ответ:** Получив фактический отзыв на guide, сохрани цитаты и 2–3 редакторских решения. До отзыва укажи pending.
22. **Развёрнутый ответ:** Сохрани полную редакцию Brook guide 320–420 слов после обсуждения отдельно от исходника 12.
23. **Устная работа:** Обсуди proposal 2.2 с партнёром, который называет его harmless. Получи основание, возрази или согласись в конкретном scope, проверь итог.
24. **Развёрнутый ответ:** Новый Holly DELETE: существующий ресурс удалён с 204, повтор дал 404. Объясни effect/status и можно ли ждать JSON у 204.
25. **Устная работа:** Новый собеседник применяет твой guide к собственному payload и задаёт неожиданный follow-up. Проверь правило и его понимание.
26. **Развёрнутый ответ:** Через семь дней опиши другой API по новому brief/реально прочитанной официальной странице в 180–240 словах. Укажи источник и дату, сравни с прежним пробелом.
27. **Развёрнутый ответ:** Раздели published 2.1 / proposal 2.2 / 201 response / 422 rejection / B5 timeout / migrated clients unknown.
28. **Развёрнутый ответ:** После ручного разбора укажи 2–3 приоритетных типа ошибок, соответствующую практику и новый материал повторного теста.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: accept. После does not употребляется базовая форма accept.
2. Ключ: of. Для описания состава используется consist of.
3. Ключ: whether. Whether перед to-infinitive.
4. Ключ: is. Present Simple в обычном условии правила.
5. Ключ: no. Правило определяется контрактом.
6. Ключ: no. У ответа 204 нет response content.
7. Ключ: no. Intended effect, не побитовое равенство.
8. Ключ: no. Разные стадии изменения.
9. Возможный образец (не единственный ответ): Optional nullable bio действительно разрешён; nickname обязателен. PUT заменяет профиль, а не частично обновляет его.. Не переносить null rejection Cedar.
10. Возможный образец (не единственный ответ): Один профиль B4 после двух PUT. Invalid body не изменил его; результат B5 неизвестен.. Не три профиля и не подтверждённая ошибка B5.
11. Возможный образец (не единственный ответ): 201 и 200 не опровергают идемпотентность; logs могут добавляться; правило key/window не дано.. Не обещать exactly-once processing или отсутствие рисков concurrent edits.
12. Возможный образец (не единственный ответ): Полный guide: replacement, null/omission, эффекты, status/log, предложение и вопросы.. Не выдавать предложенный default за опубликованное правило.
13. Возможный образец (не единственный ответ): Форма поля та же, значение пропуска меняется. Воздействие на конкретные клиенты нужно проверить.. Слово optional само не гарантирует совместимость.
14. Возможный образец (не единственный ответ): Реальные реплики; неизвестный исход не подменён неудачей.. Без партнёра pending; текст не позволяет оценить фонетику.
15. Возможный образец (не единственный ответ): В 2.1 пропуск очищает bio; сохранение в 2.2 только предложено. Нужен фактический read-back.. Не называть предложение реализованным изменением.
16. Возможный образец (не единственный ответ): Новые факты партнёра и режим доступа, не прочитанный журнал Brook.. Если видел текст, укажи text-supported; без реального источника — pending.
17. Возможный образец (не единственный ответ): Действительно услышанный ответ, не выдуманное завершение.. Не назначать свои исходы чужому brief.
18. Возможный образец (не единственный ответ): The response consists of fields. Could you tell me where bio goes?. Уточнить референт, управление, согласование и встроенный порядок; пунктуация проверяется вручную.
19. Возможный образец (не единственный ответ): The client did not receive an answer; the server outcome is unknown and needs further evidence.. Не утверждать и подтверждённое создание B5.
20. Возможный образец (не единственный ответ): Реальный follow-up и пример из Brook.. Без звука pronunciation и oral fluency остаются unknown.
21. Возможный образец (не единственный ответ): Реальные свидетельства, не выдуманная оценка.. Журнал отдельно от полной редакции.
22. Возможный образец (не единственный ответ): Полный связный текст с version, default и неизвестным; исходник сохраняется.. До отзыва pending; changelog не заменяет полный текст.
23. Возможный образец (не единственный ответ): Реальный диалог; согласие не обязательно.. Не объявляйте deployment без данных.
24. Возможный образец (не единственный ответ): Ресурс отсутствует; коды разные. У 204 тела нет. Конкретные ответы заданы контрактом Holly.. Не универсальное правило DELETE → 404 для всех API.
25. Возможный образец (не единственный ответ): Фактический payload и адресный ответ; unknown при пробеле brief.. Не чтение двух ролей; pending без партнёра.
26. Возможный образец (не единственный ответ): Новая операция и условия, реальная отсрочка и самостоятельный текст.. До проверки pending; переименование Brook не новый контроль.
27. Возможный образец (не единственный ответ): Правило, предложение, ответ, ограниченный отказ, клиентское наблюдение и неизвестный результат миграции.. Не общий процент успеха всех операций.
28. Возможный образец (не единственный ответ): Фактические цитаты и критерии, не фиктивный результат.. 8/8 закрытых ответов не подтверждают полное освоение.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [API-контракт: формы, состояния, ошибки и повторы](../appendices/api-contract-language.md)
- [Язык код-ревью: замечания, основания и ответы](../appendices/review-language.md)
- [Пассив: лица, формы, исполнитель и статус](../appendices/passive-forms.md)
- [Правила, советы и условия: карта A203](../appendices/rules-conditions.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [RFC 9110: HTTP semantics, methods and responses](https://www.rfc-editor.org/rfc/rfc9110.html)
- [Google AIP-180: backwards compatibility](https://google.aip.dev/180)

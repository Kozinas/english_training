export const apiSources=[
 ['RFC 9110: HTTP semantics, methods and responses','https://www.rfc-editor.org/rfc/rfc9110.html'],
 ['Google AIP-180: backwards compatibility','https://google.aip.dev/180']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const apiPatterns=rows(`operation~The endpoint accepts a JSON object.~Subject + Present Simple.~Accept object без предлога.
negative rule~The service does not accept null.~Does not + base.~Не does not accepts.
reply~The server responds to the request.~Respond to something.~Return a value — другая модель.
composition~The body consists of two fields.~Consist of.~Не consist from.
required~The caller must supply a title.~Must + base.~Не must to supply.
passive requirement~The field must be supplied.~Modal + be + V3.~Не must is supplied.
permission~You may omit label.~May + base.~Здесь permission, не probability.
no obligation~You need not send a label.~Need not + base.~Не запрет.
prohibition~You must not send null.~Must not + base.~Указать поле и контракт.
default~If label is omitted, general is used.~If + Present, passive.~Не null или empty автоматически.
input location~Send the key in a header.~In + место данных.~Header отдельно от JSON body.
type~Send false, not the string "false".~Contrast с not.~Сходное написание не одинаковый тип.
necessary condition~It is accepted only if permission is granted.~Only if ограничивает условие.~Не все valid bodies достаточны.
creation~The response identifies the created resource.~Present description.~Replay не новая creation.
acceptance~The request was accepted for processing.~Past passive.~Не completed successfully.
queue~One notification has been queued.~Perfect passive.~Не delivered/read.
lookup versus job~The lookup succeeded, but the job failed.~Две разные subject + verb пары.~Не противоречие.
error category~Use the documented code rather than the wording.~Imperative + contrast.~Сообщение может переводиться.
uncertainty~The outcome remains unknown.~Remain + adjective.~Не confirmed failure.
timeout~The client timed out before receiving a response.~Before + -ing.~Не доказанный rollback.
repeat~Retry the identical request within the stated window.~Retry + object.~Scope и срок по API.
reuse~Reuse the same key.~Reuse + object.~Новый key не тот же repeat.
effect~The intended effect stays the same.~Stay + adjective.~Ответ и logs могут отличаться.
read-only~The operation does not request a state change.~Negative Present.~Не отсутствие любой записи в logs.
expiry~The protection ends when the key expires.~When + Present.~Не будущая гарантия навсегда.
clarification~Could you explain why the request fails?~Embedded subject + verb.~Без вопросительной does-инверсии.
choice~Could you clarify whether to retry?~Whether + to-infinitive.~Не if to retry.
unknown rule~Concurrent behaviour is not specified.~Passive + not.~Не known broken behaviour.
addition~The new field may affect strict clients.~May + base.~Не обязательно всех consumers.
deprecation~The field is deprecated but remains available.~But сохраняет контраст.~Не removed now.
proposal~The migration note is a draft, not a release.~Явный статус.~Не выполненная миграция.
follow-up~Could you restate which operation succeeded?~Встроенный question со своим subject.~Read-back вместо одного yes.`);
export const apiReference={id:'api-contract-language',title:'API-контракт: формы, состояния, ошибки и повторы',intro:[
 'Авторские языковые модели B2 для чтения и составления API guide. Это не полный HTTP reference, не учебник distributed systems и не разрешение отправлять запросы в реальные сервисы. Поля, сроки и досье Cedar/Moss/Rowan вымышлены.',
 'RFC 9110 разделяет read-only intended semantics и одинаковый intended effect при повторе; ответы могут различаться. 202 не подтверждает завершение, 204 не имеет response content. AIP-180 — руководство Google о совместимости с оговорённым контекстом, а не гарантия для любого API. Первичные страницы проверены 2026-09-29; примеры написаны для курса.',
 'Optional, nullable, omitted и empty различаются. Key scope/retention/recovery устанавливает конкретный контракт. Client timeout не доказывает отсутствие эффекта; proposal не deployment. Открытые ответы оцениваются по смыслу, речь — по реальному аудио.'
],headers:['Механизм','Модель','Как построено','Ограничение'],rows:apiPatterns,sources:apiSources,practice:[
 ['Исправь The endpoint do not accepts null.','The endpoint does not accept null.'],
 ['Выбери управление respond ___ / consist ___.','Respond to / consist of.'],
 ['Построй пассив The caller must supply the key.','The key must be supplied.'],
 ['Сравни must not и need not.','Запрет и отсутствие необходимости; не одно отрицание.'],
 ['Optional означает nullable?','Нет. Допустимость null задаётся отдельно.'],
 ['Различи omitted/empty/null в Cedar.','General / empty kept / rejected. Не универсальное правило всех API.'],
 ['202 означает готовый файл?','Нет. Нужно проверить состояние приложения по его контракту.'],
 ['Может200lookup сообщить failed job?','Да. Получение состояния и сама работа — разные операции.'],
 ['Queued означает delivered/read?','Нет. Это разные стадии.'],
 ['У204 есть JSON body?','Нет response content.'],
 ['Timeout доказывает server did nothing?','Нет. Результат может остаться неизвестным.'],
 ['Idempotent значит never changes state?','Нет. Повтор имеет тот же intended effect; PUT и DELETE могут менять состояние.'],
 ['Почему retry key надо описать со scope и expiry?','Иначе читатель может принять ограниченную защиту за универсальную гарантию.'],
 ['Переделай Why does it fail? после Could you explain.','Could you explain why it fails?'],
 ['Optional response field всегда compatible?','Нужно учитывать consumers, например strict clients и их expectations.'],
 ['Напиши neutral question вместо When will you fix the broken retry?, если defect не установлен.','Could you clarify the retry behaviour for concurrent requests?']
]};

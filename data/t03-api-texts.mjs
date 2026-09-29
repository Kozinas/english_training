// Original fictional dossiers; no real requests, users, credentials or learner evidence.
export const apiReading=`Cedar Tasks: a contract, not just a successful response

The Cedar team is preparing an English guide for consumers of its fictional task service. The published contract is version 1.3. A proposal labelled 1.4 is being discussed separately; it is not deployed. Jo, who writes the guide, wants to explain what callers must send, what they can expect, and which conclusions would go beyond the available evidence. The examples describe a training sandbox, not a production service that the learner should contact.

To create a task, an authorised caller sends POST /tasks with a JSON body. The caller needs a valid credential and the tasks:write permission. The title field is required and must be a string. Cedar removes spaces from its beginning and end, then rejects an empty result. Internal spaces are preserved. The optional label field is also a string. Omitting label selects general; sending an empty string keeps an empty label. Explicit null is not accepted. Optional therefore does not mean that every supplied value is valid. The optional notify field is a boolean and defaults to false.

For the first logged request below, the method and path are POST /tasks, the Content-Type header is application/json, and Idempotency-Key is a. Its body is {"title":"  Read docs  ","notify":true}. The response is 201 with Location: /tasks/C11 and body {"id":"C11","title":"Read docs","label":"general"}. This shows a trimmed title and the omitted label default. It also requests notification queuing, not guaranteed delivery.

A successful new creation returns HTTP 201 with id, title and label in a JSON object. The Location header identifies the new task. If notify is true, Cedar also queues one notification. Queued means that delivery has been requested, not that a recipient has received or read a message. This guide makes no claim about delivery time. The service may record operational logs even when no task is created. A response describing a task is not a promise about backups, retention or availability, none of which is specified in this exercise.

Malformed JSON produces 400. A well-formed body with a missing or invalid title, an invalid label, or a non-boolean notify produces 422. A valid credential without tasks:write produces 403. Those three rejection paths do not create a task or queue a notification under this contract. Their error objects contain code and message; field is included for a field-specific validation error. A caller should use code for the documented error category, rather than depend on the precise English wording of message. Missing or invalid credentials are handled by the authentication layer; its complete protocol is outside this brief.

The caller may supply an Idempotency-Key header. Cedar's rule is local to this API: after a successful creation, it retains the result for exactly twenty-four hours. During that period, the same account, method, path, key and identical JSON body return the original status and body without creating another task or queuing another notification. A different body with the retained key produces 409 instead. After expiry the key can be treated as new. The brief does not specify concurrent in-flight requests, so the guide must not promise a concurrency guarantee. Rejections before creation do not reserve the key. Requests without a key have no duplicate-creation protection under this rule.

The attached version 1.3 log has six submission attempts. The first created task C11 with key a; the second repeated the identical request with key a ten minutes later and returned C11 again. The third created C12 with key b. The fourth returned 422 for a null label. The fifth returned 403 because the credential lacked permission. The sixth, with a new key c, timed out at the client and has no recorded response or follow-up lookup. Thus three responses carried 201, but only two creations are established by the log. The sixth outcome is unknown. It is not evidence that nothing was created, nor evidence that a third task definitely exists.

In the proposed 1.4 response, an optional dueDate field would be added. A known older client rejects unknown response fields, so optional does not remove the compatibility concern for that client. Another proposal would rename id to taskId and remove id. Jo separates that proposal from simply adding a field. No migration has been approved, and no 1.4 execution results exist. The team asks for a guide that preserves these boundaries, requests clarification about concurrent requests, and explains why a timeout requires recovery under the documented contract rather than a confident claim of failure.`;

export const apiListening=`Moss Exports: accepted is not ready

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

Mina: A successful lookup can report a failed export. I will not label every two-hundred response as a completed file. We still need the actual revised guide and a check of its examples; agreeing on this wording has not completed those actions.`;

export const apiBrief=`Самостоятельное вымышленное досье Rowan Bookmarks 3.0. PUT /bookmarks/{id} создаёт отсутствующую или полностью заменяет существующую закладку по указанному id. Нужны действительные credentials и bookmarks:write. JSON: name и url — обязательные непустые строки; note — необязательная строка, пропуск означает пустую строку, null запрещён. Для этого учебного API ошибка полей даёт 422 без изменения закладки, недостаток permission — 403 без изменения. Успех создания: 201, замены: 200, JSON id/name/url/note. Повтор идентичного PUT к тому же id задаёт то же состояние закладки; response status может отличаться (201, затем 200), служебные logs могут добавляться. DELETE этого id даёт 204 без тела при удалении существующей записи; повтор после удаления даёт 404. Это правило Rowan, не требование каждому DELETE возвращать 404. В обоих случаях закладка отсутствует. Пропуск note в PUT очищает note, не сохраняет старое значение. В имеющемся log первый PUT R7 дал 201, повтор — 200, один invalid null note — 422. Предлагается заменить обязательный name полем title и убрать name; proposal не опубликован, client impact неизвестен. Backup/retention, частичное обновление и concurrent edits не описаны: попроси уточнение, не придумывай правила. Не отправляй реальные HTTP-запросы.`;

export const apiModels={
 contract:`Cedar Tasks consumer guide, version 1.3

Use POST /tasks to create a task. The caller needs a valid credential with tasks:write permission and must send a JSON object. This guide describes the published version 1.3 contract, not the proposed version 1.4 changes. It does not establish a backup or availability guarantee.

Supply title as a string. The service removes outer spaces and rejects an empty result; it preserves internal spaces. Label is an optional string. If you omit it, the label becomes general. An empty string remains empty, whereas explicit null is invalid. Notify is optional, accepts a boolean and defaults to false. Do not use a string such as "false" to stand for the boolean value.

A new task returns 201 with id, title and label, plus a Location header identifying the task. When notify is true, one notification is queued. Queuing does not establish delivery or reading. Malformed JSON returns 400. Invalid fields return 422, and insufficient permission with a valid credential returns 403. These rejection paths create no task and queue no notification. Error objects include code and message; field identifies a field-specific validation problem. Use the documented code rather than matching the wording of message.

To obtain Cedar's duplicate protection, supply an Idempotency-Key. After successful creation, the result is retained for exactly twenty-four hours. A repeat with the same account, method, path, key and identical JSON body returns the original result without another creation or notification. A changed body with the retained key returns 409. After expiry, that protection no longer applies. Concurrent in-flight behaviour is not specified and needs clarification.

The six recorded attempts establish two creations, one replay and two rejections. The remaining attempt timed out without a known outcome. Three 201 responses do not mean three different tasks. Follow the documented recovery conditions; do not replace uncertainty with a claim that the server did nothing. The proposed dueDate addition and id rename require a separate compatibility discussion before publication.`,
 recovery:`Recovery note for Cedar's unanswered submission

The sixth submission timed out at the client. We have no response or follow-up lookup for it, so we cannot say whether the service created a task. The absence of a response does not establish an absence of effects. It is also incorrect to report a confirmed third creation.

Keep the original request details, including the account, method, path, key and JSON body. Cedar's documented protection applies to an identical repeat within the retained twenty-four-hour period after successful creation. Changing the key or payload is not that protected repeat. A conflicting body with a retained key produces 409; expiry removes the stated protection.

Before choosing a recovery action, establish which conditions apply and ask about any missing information, especially concurrent in-flight behaviour. This brief does not define a complete recovery protocol for every failure. A new successful response would be new evidence and should be recorded separately from the original timeout. Until that happens, the original outcome remains unknown. Do not report a completed recovery merely because someone has agreed to investigate.`,
 clarification:`Could you clarify the retry rule for concurrent requests? The version 1.3 brief explains an identical repeat after successful creation, within the retained twenty-four-hour period. It does not say what happens if two requests with the same account, path, method and key are still in flight at the same time. I therefore cannot document a concurrency guarantee. Please also confirm how a caller should recognise an expired key. I am asking about these missing parts of the contract, not reporting a proven implementation defect. Once we have an answer, I can revise the guide and identify any examples that need new checks.`,
 compatibility:`The proposed response changes need separate compatibility checks. Adding dueDate leaves the existing field names in place, but our known older client rejects unknown fields. Calling the addition optional does not make that client's behaviour disappear. Removing id and replacing it with taskId would also remove a field on which existing consumers may depend. We should identify those consumers and agree a migration policy before presenting either proposal as compatible. At present, version 1.3 remains published, no migration has been approved, and there are no version 1.4 execution results. I can document the risks and questions; I cannot report that the clients have already been updated.`,
 status:`A successful status lookup is not the same as a successful export. In the Moss sample, four submissions received acceptance responses and produced four job identifiers. At the recorded snapshot, two jobs had succeeded, one had failed and one was still running. Only the two successful jobs had ready files. The fifth submission timed out without a response and has an unknown acceptance outcome. Keep it separate from the known failed job. A 200 response from the status URL may correctly contain a failed job state. Please check the job state and the documented file field instead of treating every successful HTTP lookup as a completed export.`,
 revision:`Cedar Tasks guide: revision after the review discussion

This guide covers the published version 1.3 contract. The version 1.4 document is a proposal, not a deployment. Callers create tasks with POST /tasks, using a valid credential that includes tasks:write and a JSON object containing title. The title must be a string that remains nonempty after outer spaces are removed. Internal spaces are preserved.

The optional label is a string. Omission selects general, an empty string remains empty, and null is rejected. Optional notify is a boolean with a default of false. For a new creation, the response is 201 with id, title and label; Location identifies the task. If notify is true, the service queues one notification. This is a narrower statement than saying that someone received a message.

Malformed JSON returns 400, invalid fields return 422, and a valid credential without the required permission returns 403. Under this contract those paths create no task and queue no notification. Their error objects contain code and message, with field for a field-specific validation error. The English message is explanatory text, not a stable string for client branching.

Successful creation reserves the supplied idempotency key and result for exactly twenty-four hours. Within that period, identical repeats in the same account, method and path return the original result without another task or notification. A changed body with a retained key returns 409. Expired keys and concurrent in-flight requests must not be covered by an invented guarantee: protection after expiry is not promised, and concurrency is unspecified.

The log establishes two created tasks, one replay and two rejections. The sixth attempt has an unknown outcome after a client timeout. Our review has clarified this description; it has not recovered that request. The dueDate addition still affects a known strict client, and the proposed id rename requires its own migration discussion. Keep both proposals separate from the published contract until actual decisions and new evidence are available.`
};

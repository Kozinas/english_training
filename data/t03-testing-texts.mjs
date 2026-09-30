// Original fictional testing dossiers. No real service calls or learner results.
export const testingReading=`Fern Queue: what did the tests actually establish?

Fern Queue is a fictional tool for selecting completed items for an export. The team is reviewing version 2.6, build 260, in the training workspace. Its test note is intended for a developer who did not attend the session. Nadia asks the writer to separate requirements, planned cases, actual executions and conclusions. The exercise does not ask the learner to run commands against a real service or to treat the invented results as personal work.

The selection function takes an item list and an integer limit from one to twenty, inclusive. It returns up to that many completed items in their original order. If enough completed items exist, it returns exactly the requested number. The source list must remain unchanged. Zero and twenty-one are outside the accepted range and must be rejected without changing the source. An empty list with a valid limit returns an empty list. The product owner has not decided how duplicate identifiers should be handled, so nobody can honestly write a final expected result for that question yet.

The fixture named F22 contains twenty-two completed items followed by three incomplete items, all with distinct identifiers. Every planned run begins from a fresh copy of the documented fixture; notifications are disabled. The selection-function checks use an in-memory storage double. They do not contact the real export storage service. The note records the build, input list, limit, expected output and actual output. These details make another attempt possible, although they do not guarantee that every relevant environmental variable has been controlled.

The first batch contains eight planned cases. F1 uses limit five with a mixed list and verifies the selected identifiers and order; it passes. F2 uses the minimum limit of one and passes. F3 uses F22 with limit twenty: the expected count is twenty, but the actual count is nineteen, so it fails. F4 checks zero and F5 checks twenty-one; both produce the required rejection and pass. F6 uses an empty list with limit five and passes. F7, the duplicate-identifier case, is not run because the expected behaviour is unresolved. F8, the real-storage integration case, is blocked because the team lacks a sandbox service credential. Neither F7 nor F8 is recorded as a product failure.

At this point there are six executed cases: five passed and one failed. Eight planned cases are not eight successful executions. The source-unchanged requirement was not asserted in this batch, despite being part of the contract. F1 checked the returned identifiers and order, not a before-and-after comparison of the source. Nadia asks for that missing check to be added. She does not claim that the source has already been corrupted; the available evidence simply does not establish that requirement.

A separate old smoke check only asks whether the returned value is an array. It passes when F3 returns nineteen items. That result does not cancel the more specific count mismatch. The old check is weaker than the requirement. Updating the expected count from twenty to nineteen merely to obtain a passing test would conceal the mismatch unless an authorised change to the requirement had actually occurred. No such change has been agreed.

The coverage report says that eighteen of twenty instrumented statements in the selection function were executed: ninety per cent statement coverage for that function. It does not measure the fraction of requirements verified, the quality of assertions, or the untested real-storage integration. Later, F3 is repeated twice on build 260 under the same documented setup. One repeat fails with nineteen; the other passes with twenty. The original failure remains in the history. There are now eight execution attempts across six distinct executed cases, not eight distinct cases. No code change or root cause has been established.

Nadia agrees to review a revised test plan that includes a source-unchanged check and a clearer duplicate-behaviour question. She has not accepted responsibility for obtaining the service credential, and no owner or deadline for that access request is recorded. The next report must preserve the first batch and the later repetitions separately. A passing repeat is useful evidence, but it is not a confirmed fix, a release approval or proof that the whole feature is correct.`;

export const testingListening=`Larch Preview: a passing check with a missing condition

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

Omar: Executing the preview code does not show that our assertion checked the right identifier. I will preserve the failure, the two passing repeats and the missing checks separately. Our agreement about the report has not completed the investigation or approved a release.`;

export const testingBrief=`Самостоятельное вымышленное досье Maple Tags 1.8, build 184, workspace Training. При сохранении тега удаляются только внешние пробелы; внутренние сохраняются. После trim длина должна быть от 1 до 12 ASCII-букв/пробелов включительно. Пустой/состоящий только из пробелов ввод и длина 13 отвергаются; число существующих тегов не меняется. Допустимый ввод создаёт ровно один тег с ожидаемым текстом; сообщение Saved само по себе не доказывает сохранение. Исходные данные — два тега Cedar и Stone, новая копия перед каждым случаем; уведомления отключены, реальное хранилище заменено in-memory double. Требование к повторяющимся именам пока не согласовано. План содержит семь cases: M1 обычный Oak — passed; M2 одна буква A — passed; M3 двенадцать букв ABCDEFGHIJKL — failed, actual сохранённый текст ABCDEFGHIJK (11); M4 тринадцать букв ABCDEFGHIJKLM — rejection passed; M5 три пробела — rejection passed; M6 duplicate name — not run из-за неизвестного expected; M7 real-storage integration — blocked, нет sandbox credential. Всего пять distinct executed cases: четыре passed, один failed. Позже M3 повторили ещё раз с теми же документированными условиями, получили 12 букв: passing repeat, изменение кода не сообщалось. Теперь шесть executions пяти cases. Coverage: 16/20 instrumented statements в функции обработки, не всего приложения. Для исправления отчёта нужен реальный отзыв партнёра; его нет в досье. Не запускать операции в реальных сервисах.`;

export const testingModels={
 plan:`Proposed test plan for Fern Queue, build 260

The purpose of this plan is to check selection of completed items and to make the evidence understandable to another developer. It describes proposed work, not a completed execution. The agreed input range is an integer limit from one to twenty. The function must preserve the source list and the order of selected items.

Start each case with a fresh copy of its named fixture in the training workspace. Keep notifications disabled and record the exact build. For the controlled function checks, use the documented in-memory storage double. State explicitly that this does not exercise the real storage service. Do not use real credentials or personal data in the examples.

Include an ordinary mixed list with limit five, both accepted boundaries of one and twenty, and the adjacent rejected values zero and twenty-one. Use F22 for the upper accepted boundary so that enough completed items exist to distinguish twenty from nineteen. Include an empty source with a valid limit. Ask the product owner to clarify duplicate identifiers before assigning that case a final expected output.

For successful selections, compare the returned identifiers, count and order with independently derived expectations. Compare the source before and after the call to check that it remains unchanged. For rejected inputs, assert the agreed rejection and the unchanged source. A check that merely confirms an array exists is insufficient for the count and content requirements.

Keep the real-storage integration case separate. It is currently blocked by missing sandbox access; the plan must identify an access owner before promising an execution date. Do not assign that responsibility to Nadia merely because she offered to review the plan.

Record the first result of every case and retain any later attempts with their setup and outcomes. Investigate inconsistent repeats instead of silently replacing failures with passes. Use coverage to identify unexecuted instrumented code, not as a percentage of requirements proved. The final handover should list the verified conditions, mismatches, unrun cases, blocked work and unresolved questions.`,
 report:`Fern Queue first-batch report

This report covers build 260 in the training workspace. Eight cases were planned, but only six were executed. Five of those passed and one failed. F7 was not run because the duplicate-identifier behaviour is unresolved. F8 was blocked by a missing sandbox service credential. Neither is evidence of a product failure.

F3 used F22 with a limit of twenty. The required count was twenty, but the function returned nineteen. The existing array-only smoke check also passed on that output, which shows that its assertion does not check this requirement. It does not invalidate the observed count mismatch.

The executed function cases used an in-memory storage double. They did not establish real-storage availability. The source-unchanged requirement also remains unverified because this batch did not compare the source before and after the operation. We should add that check rather than claim that the source was definitely changed.

The coverage report records eighteen of twenty instrumented statements in the selection function. That is ninety per cent statement coverage in that scope, not ninety per cent correctness. This first-batch summary excludes the two later repeats, which must remain separately identifiable in the history. No release decision is established by these results.`,
 assertion:`The existing assertion checks only that the returned value is an array. An array containing nineteen items therefore satisfies it, even though F3 requires twenty completed items in the original order. We should derive the expected identifiers from the fixture and compare the actual result with that expectation. A separate before-and-after comparison should check that the source list remains unchanged. Copying the actual output into the expected value would not provide an independent check. These are proposed improvements to the test, not evidence that the shared test has already changed. After review, the revised test still needs to be run against an identified build and fixture.`,
 clarification:`Could you clarify how duplicate identifiers should be handled? The current contract specifies the accepted limit range, completed-item selection and preservation of order, but it does not settle whether duplicate identifiers should be retained, combined or rejected. I have therefore left F7 unrun instead of inventing a pass condition. Please identify who can approve that requirement and which version the decision will apply to. Once we have an answer, I can update the proposed case and its expected output. This question does not establish a defect in the implementation. It identifies missing information needed to make the test meaningful and the result interpretable.`,
 handover:`The two later F3 repeats must remain separate from the first batch. One failed with nineteen items and the other passed with twenty under the same documented setup on build 260. We now have eight execution attempts across six distinct executed cases. There is no reported code change or established root cause. Please preserve the original failure, record the fixtures and investigate the inconsistent outcomes. Nadia offered to review the revised plan; she did not accept responsibility for obtaining the missing service credential. We still need an owner for that access request. A passing repeat is useful evidence, but it does not prove a fix or authorise a release.`,
 revision:`Revised Fern Queue report after the review

This report describes build 260 in the training workspace. The first batch planned eight cases and executed six. Five passed and one failed. The duplicate-identifier case, F7, was not run because its expected behaviour is unresolved. The real-storage integration case, F8, was blocked by a missing sandbox credential. These two statuses are not additional failures of the product.

The failed case, F3, used the F22 fixture with limit twenty. Twenty-two completed items were available, so the required output count was twenty. The actual count was nineteen. A separate old smoke check accepted the output because it only required an array. That weak assertion does not contradict the more specific mismatch. The expected count must not be changed merely to make the test pass.

The first batch used an in-memory storage double and fresh documented fixtures. It did not exercise the real storage service. It also did not assert that the source list remained unchanged. The revised plan therefore proposes a before-and-after source comparison as well as explicit checks of returned identifiers, count and order. Those additions have not yet been implemented or executed.

The two later F3 repeats produced different outcomes: one failed with nineteen and one passed with twenty. Both used build 260 under the same documented setup. The record now contains eight attempts across six executed cases. The original failure remains relevant. No code change or root cause has been established, so the passing repeat is not reported as a confirmed fix.

The coverage figure is ninety per cent of the twenty instrumented statements in the selection function. It does not measure requirement coverage or real-service behaviour. Nadia agreed to review the revised plan, not to obtain sandbox access or approve a release. The next steps are to review the proposed assertions, clarify duplicates, identify an access owner and investigate the inconsistent repeats. Each action needs its own evidence before it can be reported as complete.`
};

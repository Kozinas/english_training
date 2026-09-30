// Original fictional design discussions. These are not real measurements or quotations.
export const decisionReading=`Linden Reports: choosing what to investigate, not announcing a release

Linden Reports is a fictional internal reporting tool. The team is discussing version 0.8 and draft decision record 14. A new developer needs to understand why two designs are being compared. The problem is not simply to adopt a fashionable queue. Staff need to request an export without losing access to the previous report while a replacement is prepared. The discussion therefore starts with requirements, evidence and the status of the decision.

The agreed evaluation fixture contains two thousand rows. Under a load of five concurrent requests, the service must acknowledge a request within two seconds and make the new file ready within sixty seconds. The previous report must remain downloadable until the replacement is ready. The brief does not specify how cancellation or repeated submissions should work. It also contains no approved requirement for thirty concurrent requests. That higher load is a question for the next review, not a condition already tested or accepted.

Option A generates the file inside the request and acknowledges only when generation finishes. It uses a processing path that the team already maintains. Option B acknowledges a queued job and generates the file in a separate worker. That separates acceptance from completion, but introduces a queue, worker monitoring and recovery questions. Neither an acknowledgement nor a queue entry means that the file is already available. Calling B asynchronous does not prove that it meets either deadline.

The comparison log describes twelve measured requests for each option under the same documented five-request load and with the agreed row fixture. These are requests, not twelve distinct staff members. For A, eight acknowledgements arrived within two seconds and four arrived later. All twelve files became ready within sixty seconds. For B, all twelve acknowledgements arrived within two seconds, but only eleven files became ready within sixty seconds; the twelfth took seventy seconds. The log does not include a before-and-after check of the previous report's availability. It does not record cancellation or recovery from a stopped worker.

These results support a specific comparison. B had faster acknowledgements in this sample, but it did not meet the file-readiness limit in every measured request. A met the readiness limit in this sample but missed the acknowledgement limit four times. Neither option has evidence that all agreed requirements are satisfied. The missing previous-report check is not proof that a report was lost. The writer must distinguish an observed mismatch from an untested requirement, and must not turn a small controlled sample into a guarantee at a higher load.

The planning sheet estimates twenty training credits per month for A and thirty-five for B at five hundred exports per day. These fictional figures cover the listed infrastructure only. They are not vendor quotations and exclude staff time, support and data-transfer charges. A cheaper infrastructure estimate does not settle the total cost or override a mandatory requirement. The team also has no named person responsible for operating the proposed worker. An engineer's ability to write queue code would not, by itself, establish continuing operational ownership.

Nina recommends a limited prototype investigation of B, not a production switch. Leo agrees to draft the missing checks and share their conditions for review. He does not promise to obtain infrastructure access or to maintain the worker. The participants agree to conduct the investigation, while decision record 14 remains Proposed. The design has not been accepted for production, implemented as a release or approved by an absent operations manager. A reader who sees only the word agreed could easily misunderstand the scope of that agreement.

The revised record should preserve A's advantages as well as its limitations, explain the conditional preference for investigating B and identify what could change that preference. A repeated readiness miss, unacceptable recovery behaviour or the absence of an operational owner could require a different choice. No such future result should be invented. Earlier notes must remain identifiable when the recommendation changes. The useful outcome of this meeting is a clearer question and an agreed next investigation, not a claim that architecture work is complete.`;

export const decisionListening=`Harbour Search: repairing the recommendation

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

Ira: That disagreement is fine. Our record should preserve both the proposed investigation and the reason you want a genuine comparison. Understanding the note does not require you to support the same design.`;

export const decisionBrief=`Самостоятельное вымышленное досье Juniper Attachments, design note 9, Proposed. Нужно передавать учебные файлы до 100 MB и продолжать после disconnect без повторной передачи уже подтверждённых частей. Это обязательное условие, не пожелание. A: один whole-file request, после disconnect начинается заново; проще текущему коллективу. B: chunked prototype с учётом подтверждённых частей; нужны правила повторов и сборки, monitoring/ownership ещё не согласованы. В восьми interruption trials A все передачи закончились после полного restart — это completion, но не выполнение resume requirement. В восьми trials B шесть продолжились с нужного места и дали проверенный полный файл; в двух одна часть была передана повторно, целостность итогового файла не проверяли. Не объявляй эти два файла повреждёнными или корректными. Данные только для данного fixture 100 MB; меньшие/большие файлы, security и реальные пользовательские данные не проверялись. A estimated implementation 1–2 person-days, B 4–6 при наличии sample files; review, security work и эксплуатационная подготовка исключены. Условные infrastructure estimates 8/12 training credits per month, не реальные цены и не total cost. Nora предлагает проверить описание protocol, не стать operational owner. Команда согласовала дополнительное сравнение, не production choice. Требуется собственная обоснованная рекомендация с реальными ограничениями и условиями пересмотра; нет единственного обязательного «победителя». Реальные сервисы, личные файлы и credentials не использовать. Отзыв на текст должен дать настоящий партнёр/агент после исходника, его нет в досье.`;

export const decisionModels={
 record:`ADR 14: investigate queued exports for Linden Reports

Status: Proposed. This record recommends a further investigation, not a production migration. The team has agreed to compare the options more closely, but has not accepted a final architecture or authorised a release.

The purpose is to let staff request a new export while retaining access to the previous report. For the agreed two-thousand-row fixture at five concurrent requests, acknowledgement must arrive within two seconds and the new file must be ready within sixty seconds. The existing report must remain downloadable until its replacement is ready. Cancellation and repeated-submission behaviour remain unspecified.

Option A generates the file within the request. It uses a path the team already maintains and has the lower listed infrastructure estimate. However, four of twelve measured acknowledgements exceeded the two-second limit, although all twelve files were ready within sixty seconds. Familiarity with the implementation does not remove that observed mismatch.

Option B acknowledges a queued job and uses a separate worker. All twelve measured acknowledgements met the limit, but one file took seventy seconds to become ready. The other eleven met the readiness limit. The log does not establish availability of the previous report for either option, and it does not cover worker recovery. Acceptance of a job must not be described as completion of its file.

I recommend a limited investigation of B while retaining A as a genuine comparison. The investigation should examine the readiness miss, check the previous-report requirement and define recovery behaviour. This is a conditional recommendation, not evidence that those checks have already succeeded. If B cannot satisfy the constraints, the preference must be reconsidered.

The listed monthly infrastructure estimates are twenty training credits for A and thirty-five for B at the stated volume. They exclude staff time, support and transfer costs, so they do not establish total cost. B also introduces an operational responsibility for which no owner has agreed.

Leo will draft the missing checks for review. That commitment does not include obtaining access or maintaining the worker. The record should be revisited when the missing evidence and ownership decisions are available, or if the required workload changes. Earlier versions should remain identifiable so that the reason for any revised recommendation is clear.`,
 comparison:`The two Linden options solve the same export problem in different ways. A generates the file within the request, while B acknowledges a job and performs generation in a separate worker. The comparison must use the same requirements rather than awarding B a win merely because its acknowledgements are quick.

In the measured sample, A met the file-readiness limit for all twelve requests but missed the acknowledgement limit four times. B met the acknowledgement limit for all twelve, while one file took seventy seconds and missed the readiness limit. Neither log verifies that the previous report remained available. These are different gaps, and neither option has established compliance with every requirement.

A benefits from an existing maintained path and a lower infrastructure estimate. B may separate a user's wait for acceptance from the longer generation work, but adds worker monitoring and recovery responsibilities. The estimates exclude several cost categories and therefore cannot settle total cost.

I would investigate B further without removing A from the comparison. That preference depends on readiness, recovery and ownership evidence that is not yet available. A larger workload would require a new comparison; the current sample is not a performance guarantee.`,
 clarification:`Could you clarify how repeated export submissions should be handled? The current brief defines acknowledgement and readiness limits and requires the previous report to remain available. It does not say whether two submissions represent two independent exports or the same request being repeated. We need that distinction before proposing recovery behaviour for the worker. Please identify who can approve the requirement and whether the decision applies to the current prototype or a later release. I am not reporting a confirmed duplicate-export defect. I am identifying an unresolved contract question that affects the comparison. Once the rule is agreed, the proposed checks can use a meaningful expected outcome.`,
 objection:`I agree that B met the acknowledgement limit in every trial. However, that advantage does not settle the whole decision. One file missed the readiness limit, the previous-report requirement was not checked, and no operational owner has agreed to maintain the worker. These are specific constraints and missing evidence, not an argument that queues are always unsuitable. I would support a limited investigation if its purpose and responsibilities are explicit. I would not describe that support as approval for production. Could you explain which result would make you reconsider B? Your answer would help us keep the comparison open instead of treating the preferred design as inevitable.`,
 handover:`The team agreed to investigate the queued-export option, while ADR 14 remains Proposed. A final production choice and a release have not been approved. Leo will draft the missing checks for review; he has not agreed to obtain access or operate the worker. Please preserve the acknowledgement and readiness results separately: B met the first limit in all twelve measured requests but missed the second once. Previous-report availability, recovery behaviour and ownership remain open. The listed infrastructure estimates are not total costs. The next reviewer should check the missing evidence and any changed workload before treating the conditional recommendation as an accepted decision.`,
 revision:`Revised ADR 14: compare queued exports before choosing a production design

Status remains Proposed. The agreed action is a further comparison, not a production switch. This revision separates that action from the design recommendation and preserves the limitations of the original evidence.

Linden staff need to request an export while continuing to download the previous report. For the agreed two-thousand-row fixture at five concurrent requests, acknowledgement must arrive within two seconds and the replacement file must be ready within sixty seconds. The previous report must remain available until replacement. Cancellation and repeated-submission rules are still unresolved. Thirty concurrent requests are a possible future requirement, not part of the measured evidence.

Option A uses the existing request-processing path to generate the file before acknowledging it. Eight of twelve measured acknowledgements met the two-second limit; four did not. All twelve files met the readiness limit. A's familiar operating model and lower listed infrastructure estimate are advantages, but do not excuse the acknowledgement mismatch.

Option B acknowledges a queued job and generates its file in a worker. All twelve acknowledgements met the limit. Eleven files met the readiness limit, while one took seventy seconds. Neither option's log establishes continued access to the previous report. B's recovery behaviour and operational ownership also remain open. A queue entry is not evidence of a completed file.

I still recommend investigating B, provided that the comparison retains A and explicitly tests the unresolved requirements. The investigation should examine the slow completion and define recovery expectations before a production recommendation is accepted. If B continues to miss a mandatory limit, if recovery is unacceptable or if no operational owner can be agreed, the preferred direction must be reconsidered. This revision does not claim that those future checks have already been performed.

The monthly infrastructure estimates remain twenty and thirty-five training credits at the stated volume. Staff time, support and transfer charges are excluded. Leo's commitment is to draft checks for review, not to supply access or maintain the worker. The next review should record actual evidence, accepted responsibilities and the decision authority. If a later record replaces this recommendation, it should refer back to this version so that the reasons for the change remain visible.`
};

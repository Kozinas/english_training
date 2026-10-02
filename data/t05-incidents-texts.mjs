// Original fictional training records. No real incidents, customers or operational instructions.
export const incidentReading=`Orchard Exports 4.2: incident exercise 18, working record at 09:32 UTC

This is a fictional communication exercise, not a report about a real service. The team is practising how to describe an incident while its cause and final impact remain uncertain. Times below refer to the same day and use UTC. The record contains observations, actions and commitments; it is not permission to operate a production system. No severity category has been assigned under a published policy.

A configuration change was recorded at 09:02. The earliest observed export error in the available extract is at 09:06. An alert fired at 09:10, and the exercise coordinator declared an incident at 09:12. These are four different events. The extract does not establish when the underlying problem began. It also does not establish that the configuration change caused the errors, even though the change preceded them. Engineers are checking that possibility, not reporting it as a confirmed explanation.

Between 09:06 and 09:16, the selected export path recorded 200 attempts: 160 succeeded and 40 returned errors. Retries are included in that denominator. The record does not identify the number of unique users affected. Forty errors therefore cannot be translated into forty customers, and a failed request does not by itself establish that a previously stored report was lost. A separate check opened twelve existing downloads successfully. That is useful evidence about those downloads, not proof that every download or every region was unaffected.

At 09:18, responders routed new requests through the previous export path. This action was performed in the exercise environment; it is not merely a proposal. Between 09:20 and 09:30, the selected path recorded another 200 attempts: 198 succeeded and two returned errors. The observed error proportion fell from twenty percent to one percent across those windows. That is a reduction of nineteen percentage points, or ninety-five percent relative to the earlier proportion. It is not a ninety-five percent reduction in the number of affected people. The record does not isolate which factor produced the improvement.

Separately, eighteen accepted export jobs had been delayed. At 09:30, fourteen were confirmed complete, three remained pending, and one had no observed final outcome because its result had not been collected. The unresolved job was not recorded as failed or lost. The later request sample does not settle the outcomes of these earlier jobs. A useful update must therefore distinguish current request behaviour from work that was already waiting. Responders have not confirmed full recovery or a permanent fix.

Lea is responsible for the next public exercise update at 09:45 UTC, even if the investigation has produced no new conclusion. She has accepted that communication task, not promised recovery by that time. Kai has agreed to review the available traces by 09:40. He has not agreed to implement a fix or take over incident coordination. Public wording may describe the affected function and known limits, but must not include raw identifiers or private contact details from the exercise log.

At 09:32, Noor explicitly accepted incident coordination until 10:00 after reading back the remaining jobs, the limited request evidence and the next update time. Lea retained communications responsibility. This was an acknowledged handover of coordination, not a transfer of every technical task. The outgoing coordinator recorded the change so that later participants could tell who was responsible. No one silently assigned an absent colleague a role.

The working status is monitoring the selected export path while recovery checks continue. The team has not adopted a universal rule that ten quieter minutes always means resolved. The next message should retain the unknown cause, the remaining job outcomes and the limits of the sample. A later correction must be dated and connected to the earlier claim, rather than silently replacing the history. The full post-incident review will be a different document, prepared with additional evidence.`;

export const incidentListening=`Seabrook Notifications: an original incident exercise call

Kim: Before we begin, this is a training call using synthetic messages. We are not changing a real service. Please keep customer details out of the shared update. I am still coordinating the exercise, and we need to agree who will communicate next. The first observed missing notification was at fifteen forty UTC. Sorry, I read that incorrectly: fifteen oh four UTC. That is the observation time, not a proven start time for the underlying problem.

Mira: Let me check the time back: fifteen oh four UTC, not fifteen forty. Does the alert show the same event?

Kim: No. The alert fired at fifteen ten. The batch publisher was paused at fifteen twelve. Those are separate entries in the timeline. Pausing it is a recorded action. Manually retrying the older messages is only a suggestion at this point; nobody has run that suggestion in this exercise.

Dev: I have the delivery list. There are sixteen accepted messages in the affected batch. Thirteen have a confirmed delivery, two are still pending, and the last one has no collected delivery result. It would be wrong to describe that last result as a failure just because we cannot see it yet. We also do not know whether a manual retry would create a duplicate under this setup.

Mira: So all sixteen are ready now because the new probe worked?

Dev: No. Six new probe messages were delivered successfully after the pause. Those probes are a separate group. They do not confirm delivery of the older sixteen. We can report the six successes without saying that the earlier batch has cleared. There is no evidence here that messages were deleted, but we have not established every final outcome either.

Kim: I was going to say that the incident is fixed. Let me narrow that: the new probe succeeded, while the earlier batch still needs follow-up. The cause has not been confirmed. A provider delay is one hypothesis in the working notes, not an agreed finding. Please do not present it as the provider's fault in the public message.

Mira: I can write the next update at fifteen thirty UTC. I cannot promise that delivery will be complete by then. Should I publish at that time even if the result list has not changed?

Kim: Yes. State what remains unconfirmed and when we will communicate again after we agree that time. Do not invent another deadline now. We can acknowledge the inconvenience without claiming that every recipient was affected. We have message counts, not a reliable count of people.

Dev: I can review the wording about the delivery states. I am not accepting responsibility for running retries or coordinating the whole incident. Could you read that limitation back?

Mira: You are reviewing the delivery wording only. No retry action or coordination transfer is agreed. Ari, could you take over coordination from Kim?

Ari: I cannot take it over now; I am unavailable for the rest of this exercise. Please keep the existing coordinator until somebody else explicitly accepts. My being on this call does not mean that I have accepted the handover.

Kim: Understood. I remain coordinator. Mira owns the fifteen thirty update, and Dev will review the delivery wording. Please repeat the unresolved outcomes and the retry uncertainty before we finish. Understanding this summary does not authorise a retry, and agreement about the message does not establish a root cause.`;

export const incidentBrief=`Самостоятельное досье Hawthorn Search 2.8, drill 7, срез 12:28 UTC. Все сведения вымышлены; это не Orchard и не реальный incident response.

Newly saved articles should appear in search within two minutes after an acknowledged save. Existing articles remain searchable. At 12:03 a user report said that a new article was missing. The first alert was at 12:09; the actual beginning of the problem is unknown. An index configuration change at 11:55 is a hypothesis, not a confirmed cause. In twelve synthetic save-to-search checks, nine new articles appeared within two minutes, two appeared after five minutes, and one was still unobserved when collection stopped after six minutes. The twelfth is not proven deleted or permanently missing. All twelve saves were acknowledged; acknowledgement is not search visibility. Eight selected existing articles were found, not every existing article globally.

At 12:18 responders paused new indexing configuration rollout in the exercise. The pause does not undo a change already applied. A proposal to rebuild the index is not approved or executed. Four fresh checks at 12:23–12:27 each met the two-minute target; these do not settle the earlier unobserved article or establish a permanent fix. There is no complete count of affected customers and no confirmed cause. Jules accepts the 12:45 UTC status update even if unresolved; Bea agrees to review the timeline, not operate the index. At 12:28 Oren asks Vale to take coordination; Vale has not replied. Oren therefore remains coordinator in this exercise. No severity policy or universal rule for declaring resolution has been supplied.

Write a 350–450-word internal incident handover with a clearly labelled 80–120-word public update inside it. Include observed impact, chronology, performed/proposed actions, current limits, accepted roles and next communication. The public paragraph must be understandable without implementation jargon and must not invent a user workaround. Keep the original. After real feedback, write a separate complete 350–450-word revision, not a list of edits. Both word ranges are writing goals, not time limits; you may pause anywhere. Do not invent feedback, approval, spoken interaction or investigation results.`;

// Full models are available before input; none solves the independent Hawthorn assignment.
export const incidentModels={
 report:`Orchard exercise 18: internal handover at 09:32 UTC

The selected export path is being monitored after a routing change, but full recovery has not been confirmed. This note separates new request behaviour from previously delayed jobs. The underlying cause remains under investigation. No severity classification is included because this record does not supply an agreed severity policy.

A configuration change was recorded at 09:02. The earliest observed error in the available extract was at 09:06, followed by an alert at 09:10 and incident declaration at 09:12. We must not substitute the declaration time for the beginning of user impact. Nor does this sequence establish that the configuration change caused the incident.

From 09:06 to 09:16, forty of two hundred attempts returned errors. Retries are included, so this is not a count of unique affected customers. Twelve selected existing downloads opened successfully. Those checks do not establish that all download paths or regions were unaffected, and the request errors alone do not demonstrate loss of previously stored reports.

Responders switched new requests to the previous path at 09:18. In the 09:20–09:30 window, two of two hundred attempts returned errors. This supports a report of lower observed errors in that sample, not a confirmed causal explanation or permanent repair. Of eighteen previously delayed jobs, fourteen were complete, three pending and one unobserved at 09:30. These jobs need separate follow-up.

Public update: We are continuing to monitor export requests after changing the route used to process them. The latest sample shows fewer errors, but we have not confirmed that all previously delayed exports have completed. Fourteen of the eighteen delayed jobs in our current record are complete; three remain pending and one still needs a confirmed outcome. The cause remains under investigation. Our checks of selected existing downloads were successful, but they do not establish the condition of every download. We will provide another update at 09:45 UTC, even if the remaining outcomes have not changed.

Noor accepted coordination until 10:00 after reading back the outstanding work. Lea retains responsibility for the 09:45 message; Kai has accepted trace review by 09:40, not implementation. The handover should preserve these limits, keep private identifiers out of public messages and record corrections with their times. Proposed further actions still require the appropriate agreement within the exercise.` ,
 timeline:`Reading the Orchard timeline

At 09:02, a configuration change was recorded. The earliest observed export error in the available extract followed at 09:06. The alert at 09:10 and declaration at 09:12 represent detection and coordination events, not two additional proven start times. Although the configuration change preceded the errors, chronology alone does not establish causation.

At 09:18, responders routed new requests through the previous path. The later 09:20–09:30 sample contained two errors among two hundred attempts, compared with forty among two hundred in the earlier window. These observations support a narrower claim than “the fix worked for everybody”. They describe samples with attempts as their unit, including retries.

The delayed-job snapshot at 09:30 is separate: fourteen complete, three pending and one final result unobserved. At 09:32, Noor accepted coordination until 10:00, while Lea retained the next communication. The scheduled 09:45 update is a commitment to communicate, not an estimate of restoration. A reader needs these distinctions to continue the work without mistaking a future message for a promised resolution.` ,
 clarification:`Could you clarify what you mean by “all clear”? The later sample contains two errors among two hundred export attempts, and four earlier jobs still lack a confirmed completion: three are pending and one has no collected final result. If you mean that the selected path is showing fewer errors, the record supports that statement. If you mean that every delayed export has completed and the cause is permanently removed, it does not. Please also confirm whether your proposed wording concerns the public update or the internal working record. We should agree the scope before replacing the current status with a stronger claim.` ,
 objection:`I agree that the later request sample is encouraging, but I would not describe the configuration change as the confirmed cause. Its timing makes it a reasonable hypothesis to investigate; it does not isolate a causal mechanism. Likewise, routing through the previous path was followed by fewer observed errors, but that sequence does not prove that every path has recovered. We can be decisive about communication without overstating the evidence: name the improvement, retain the unresolved jobs and publish the next update at the agreed time. That wording recognises the work already done while leaving the investigation open to a different explanation.` ,
 handover:`Noor, please confirm that you are accepting incident coordination until 10:00 UTC. The selected export path is being monitored, with two errors in the later two-hundred-attempt sample. Fourteen of eighteen earlier jobs are complete; three remain pending and one has no observed final outcome. The cause is unconfirmed. Lea retains the 09:45 public update, and Kai has agreed to review traces by 09:40, not implement a fix. Please read back those limits and tell me if any responsibility is unclear. Acknowledging this summary confirms the handover scope; it does not authorise further changes or certify complete service recovery across every path.` ,
 revision:`Revised Orchard handover: scope and ownership clarified

The exercise remains in monitoring for the selected export path. We have evidence of lower errors in a later request sample, but no confirmation of complete recovery or a permanent repair. This revision makes the affected units, observation windows and accepted responsibilities explicit. It does not add investigation results that are absent from the working record.

The configuration change at 09:02 preceded the earliest observed error at 09:06. An alert fired at 09:10, and the incident was declared at 09:12. The actual beginning of the underlying problem is unknown. The temporal sequence supports investigating a possible connection; it does not establish the change as the cause or identify a person to blame.

The first selected window contained 200 export attempts, including retries, with 160 successes and 40 errors. Twelve separately checked existing downloads opened successfully. Neither finding establishes the number of unique people affected or the state of every download. At 09:18, responders routed new requests through the previous path. The later window contained 198 successes and two errors among 200 attempts. The observed error proportion fell from 20% to 1%, a nineteen-percentage-point reduction, without proving which factor caused that improvement.

Public update: We are monitoring export requests after changing their processing route. Our latest sample shows fewer errors, but checks of previously delayed exports are not complete. Fourteen of eighteen delayed jobs in the current record have completed. Three are still pending, and one needs a confirmed final result. We have not confirmed the underlying cause or full recovery. Checks of selected existing downloads were successful; that does not establish the condition of every download. Our next update is scheduled for 09:45 UTC, including if the remaining outcomes are unchanged. We recognise the inconvenience caused by the disruption.

The handover is explicit: Noor accepted coordination until 10:00 after a read-back. Lea retains the public message, and Kai accepted trace review by 09:40 only. The unknown job needs an observed outcome, not an assumed failure. Further technical actions require separate agreement. This revision preserves the earlier record and should be stored alongside actual reviewer comments; the model itself is not evidence that a learner received feedback.`
};

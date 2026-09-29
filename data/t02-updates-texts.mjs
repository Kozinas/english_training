// Original fictional workplace cases. Dates describe the cases, not learner sessions.
export const updatesReading=`Lark Catalog: an update that another person can use

At 09:00 UTC on 30 September 2026, Rowan posts an update about the search-help task for Lark Catalog, a fictional training application. The agreed task includes six help examples and a check of those examples against the training application. Writing a draft, reviewing its wording and checking the application are separate activities. Rowan wants teammates to understand what has changed and what they can use, rather than simply read “almost done.” The update names the task, the current document and the next decision needed.

Rowan drafted four of the six examples on 29 September. The other two have not been drafted. Maya has reviewed the wording of two of the four drafts. She accepted one wording example and asked for a clarification in the other. The remaining two drafts have not been reviewed. Maya's acceptance concerns wording only; it is not approval of the complete task or evidence that the application behaves as described. Rowan cannot turn these mixed stages into a claim that two thirds of the whole task is finished. The six examples may require different amounts of work, and checking is still outstanding.

The current file is Search Help version 0.3. Review Notes 7 records Maya's question: does “empty search” mean a search submitted with no query, or a search that returns no results? Those are different situations. Rowan is revising the example to make that distinction visible, but the intended requirement still needs clarification. Rowan can continue proofreading the other drafts while waiting. This is why “all my work is blocked” would be inaccurate. The missing answer affects a particular example and may affect the two unwritten examples, not every possible action.

There is also an access dependency. Rowan cannot run the application check because the training account is not available. A request for access has been sent. Eli has offered to forward that request to the environment contact, but has not promised to create an account or given a delivery time. The absence of access does not establish that the application has a defect. It means that the check has not been performed. The update asks who can confirm when the account will be available and clearly separates that request from a promise already received.

Rowan writes, “I may finish the two new drafts by 16:00 UTC today if the requirement is clarified by 11:00 UTC and no further changes are needed.” This is a conditional estimate for two drafts, not an agreed deadline for the whole task. It does not include an application check or all review work. Rowan also commits to posting another status update at 13:00 UTC on 30 September, even if access is still unavailable. A time for reporting progress is not a completion time. A teammate can therefore expect an update without assuming the task will be finished then.

Rowan prepares a handover to Nina using Search Help 0.3 and Review Notes 7. The note identifies the four existing drafts, the two not yet written, Maya's limited review and the blocked application check. It includes the open question about “empty search” and asks Nina which part she can accept. Nina agrees to proofread the four existing drafts from 14:00 UTC that day. She does not agree to write the other two examples or run the application check. Her availability from 14:00 is a possible starting point, not a promised finish time.

Nina restates the scope in her reply: proofreading four drafts, with the requirement question and access dependency still open. Rowan confirms that understanding. The handover now contains an actual agreement about a limited action, not just a document sent to someone. No owner or time has been agreed for the application check. The task remains in progress, and the next update must preserve these boundaries rather than report that Nina has taken over everything.`;

export const updatesListening=`Sable Reports: a short update with two important corrections

This fictional exchange is presented by one narrator. The snapshot is 10:00 UTC on 30 September 2026. Dev is working on labels and a preview check for Sable Reports, a training dashboard. Dev begins, “I updated all five labels yesterday.” Looking at the notes, Dev corrects that sentence: the agreed task has five labels, but only three were edited on 29 September. Two have not been started. The three edited labels are in draft version 0.2. The draft has been shared, but no reviewer has approved it.

Dev says, “I have been investigating the preview since 08:00 UTC.” There was a short break during that period. The sentence describes work over the period, not two uninterrupted hours of successful testing. Dev has not confirmed a cause or a fix. Four preview attempts have been recorded in the training setup. Three showed the expected chart, and one showed an empty panel. Those are attempts, not four different users or four approved reports. Dev is still comparing the notes and has not checked another environment.

Lea asks what is needed to continue. Dev needs the agreed sample data for a planned comparison. The data have not been supplied. This blocks that comparison, but it does not prevent Dev from revising the label wording. Lea offers to ask the data owner whether the sample can be provided. She does not promise to supply it herself or name a delivery time. Dev thanks her and keeps the dependency open. An offer to ask someone is not confirmation that the sample is ready.

Dev then says the labels will be finished by 15:00 UTC. Lea asks whether that includes review and preview verification. Dev corrects the estimate: 15:00 is a possible target for editing the two remaining labels if the terminology question is answered by 12:00 UTC. It is not a commitment to finish the whole task. Dev will send another update at 12:30 UTC on 30 September regardless of whether the sample has arrived. The update time and the conditional editing target are two different pieces of information.

For the handover, Arun says he can compare the four preview notes from 13:00 UTC. He does not accept ownership of fixing the preview or editing the labels. Dev points him to the notes for draft 0.2 and asks him to restate the scope. Arun says he will compare the recorded observations and return any questions; the missing sample and unfinished labels remain outside his accepted action. No completion time for his comparison is agreed.

Lea asks one unexpected follow-up: “If the sample is still missing at 12:30, what will your update say?” Dev answers that it will name the outstanding dependency, report any wording changes actually completed and state the next request. It will not say the comparison has passed. The exchange ends with limited accepted actions and several open points, not a completed task or a promised release.`;

export const updatesModels={
update:`Lark Catalog search help — status at 09:00 UTC, 30 September 2026

I drafted four of the six examples yesterday. Maya has reviewed two of those drafts: one wording example was accepted, and one needs clarification. The other two drafts have not been reviewed, and two examples are not yet written. Search Help 0.3 is the current file; Review Notes 7 contains the open question about “empty search.”

I am revising that distinction and can proofread the other drafts while waiting. The application check is blocked because the training account is unavailable. Eli has offered to forward the access request, not to provide an account by a confirmed time.

Could someone confirm the intended requirement and the access contact? I will post another update at 13:00 UTC today, even if those points are still open. That is an update time, not a completion promise.`,
handover:`Handover: Lark Catalog search-help drafts

Please use Search Help version 0.3 and Review Notes 7. The task contains six examples plus an application check. Four examples were drafted on 29 September; the other two have not been written. Maya reviewed the wording of two existing drafts. She accepted one wording example and requested clarification in the other. Two existing drafts remain unreviewed. This is not approval of the complete task.

The open question is whether “empty search” means no query was submitted or no results were returned. I am revising the distinction, but the requirement still needs confirmation. The application check has not been performed because the training account is unavailable. Eli offered to forward the access request; account availability is not confirmed.

You agreed to proofread the four existing drafts from 14:00 UTC on 30 September. You did not accept the two unwritten examples or the application check. Thank you for restating that limited scope. No finish time for proofreading has been agreed, and no owner or time is confirmed for the application check.

I will post the next status update at 13:00 UTC that day, including any unresolved dependencies. My possible 16:00 target concerns only the two new drafts and depends on clarification by 11:00 and no further changes. It is not the task deadline. Please record questions in the review notes and tell me if your accepted scope changes.`,
help:`Could you help us clarify one requirement in the Lark Catalog search-help task? Review Notes 7 asks whether “empty search” means submitting no query or receiving no results. I have drafted wording that separates those situations, but I cannot confirm which one the requirement covers.

This affects the example being revised and may affect the two examples not yet written. I can still proofread the other drafts. Could you confirm the intended situation, or tell me who can answer that question? I would also appreciate confirmation of the access contact for the separate application check. Neither question should be treated as answered just because this request has been sent.`,
estimate:`My possible 16:00 UTC target on 30 September covers only the two new drafts. It depends on receiving the requirement clarification by 11:00 UTC and on no further changes being needed. It does not include the application check or all review work. I therefore cannot use that estimate as a promised completion time for the whole task.

I will post another status update at 13:00 UTC even if the dependency remains open. If the clarification arrives later than expected, I will explain how the plan changes instead of silently moving the target. Please let me know if you need an estimate for a different scope; we will need to discuss its assumptions separately.`,
reply:`Thanks for the handover. I can proofread the four existing drafts from 14:00 UTC on 30 September. I understand that Search Help 0.3 is the current file and that Review Notes 7 contains the question about “empty search.” I will record wording questions there rather than assume the requirement has been clarified.

I am not taking on the two unwritten examples or the application check. The missing training account still needs a separate response. I have not agreed a finish time for proofreading, so please do not report it as completed or assign a completion time on my behalf. Let me know if you want to propose a change to this limited scope.`,
correction:`Correction to my earlier summary: I said that Nina had taken over the search-help task. That was too broad. She agreed to proofread the four existing drafts from 14:00 UTC, not to write the other two or perform the application check. No finish time for proofreading has been agreed.

I have updated the handover note to show that boundary. The requirement question and the missing training account remain open. My next status update is still due at 13:00 UTC on 30 September. This correction changes the record of our agreement; it does not mean any additional work has already been completed.`
};

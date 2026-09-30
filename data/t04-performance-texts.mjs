// Original fictional dossiers. No production telemetry or learner data.
export const performanceReading=`Elm Catalogue: a faster mean is not the whole result

Elm Catalogue is a fictional training application for browsing synthetic product descriptions. Comparison note 8 concerns baseline c17 and candidate c18 of version 1.7. The candidate changes the application cache; the note is a request for further investigation, not permission to deploy. A new developer has been asked to explain what changed, which requirements were checked and what the figures cannot establish.

Both measured runs lasted sixty seconds. The fixture contained ten thousand synthetic records, and the team used the same machine, fifty virtual clients and the same request mix. Both runs began after a documented warm-up. Each run recorded six thousand attempted requests. This is a comparison under that setup, not a test of a cold cache, a different machine or an unlimited workload. Virtual clients are not necessarily distinct people.

The baseline recorded 5,880 successful responses and 120 errors. The candidate recorded 5,940 successful responses and 60 errors. Successful throughput was therefore 98 responses per second for the baseline and 99 for the candidate. Attempted traffic was 100 requests per second in both runs. The error proportion fell from two percent to one percent: a reduction of one percentage point, or fifty percent relative to the baseline error proportion. These two descriptions express different calculations, not contradictory results.

The latency summaries include successful responses only. Their mean fell from 200 milliseconds to 160 milliseconds, a twenty-percent decrease. However, the reported ninety-fifth percentile rose from 500 milliseconds to 700 milliseconds. A lower mean and a worse upper percentile can coexist. The agreed latency criterion was a successful-response p95 no greater than 600 milliseconds under this setup, so the baseline met that criterion and the candidate did not. The error-response latency was not included in these summaries and was not supplied separately. Fast errors must not silently improve the apparent speed of useful responses.

The note also reports a separate set of five thousand cache lookups for each configuration: the hit proportion rose from eighty to ninety percent. Those lookups are not the same denominator as the six thousand attempted requests. A hit means the lookup found a reusable entry under the application's cache rules. It does not independently prove that the displayed description reflects the latest committed update. The cache entries have a configured lifetime of 300 seconds, but this configuration is not an observed end-to-end update delay.

The product rule requires a committed description change to become visible to browsing clients within thirty seconds. In six separate update probes, all six baseline changes were visible within that limit. Five candidate changes were visible within it, while the sixth took fifty-five seconds. These probes are separate from the load-run requests and must not be added to their error totals. One invalidation event appears in the log, but there is no evidence that every relevant cache received and acted on it. The precise cause of the late update remains unconfirmed.

Candidate memory use was 450 MiB compared with 300 MiB for the baseline. That is a fifty-percent increase in the recorded measure, not a measurement of every infrastructure cost. CPU use and network delay were not measured. The team has proposed shortening the cache lifetime to twenty seconds, but has not implemented or tested that change. Even a shorter lifetime would need an end-to-end check; configuration alone cannot close the freshness issue.

Nia agrees to review the comparison conditions. Bo offers to inspect the invalidation trace, but no completion date is agreed. Neither accepts ownership of a production rollout. The next investigation should keep response latency, successful throughput, errors and update visibility separate, obtain the missing measurements and repeat relevant checks under explicit conditions. The recommendation remains conditional. A favourable average cannot erase the observed p95 and visibility mismatches, while those mismatches do not prove that caching is always unsuitable.`;

export const performanceListening=`Rina: Before we discuss the chart, can we confirm what this Meadow Notes prototype promises? It is version 2.2, build m6, and the user who receives a successful save acknowledgement must see that saved value on the next read in the same session. We have not agreed a thirty-second allowance for that reader.

Jules: I thought we were measuring thirty-second catalogue updates, like the earlier example.

Rina: No, this is a different contract: the writer's next read after the acknowledged save. Other sessions have a separate unresolved rule. Please keep those two cases apart.

Jules: Understood. The five same-session checks all returned the saved value, and the median response time was eighty seconds.

Rina: Two corrections. Four of the five returned the saved value. One returned the previous value after the acknowledgement. And the median was eighty milliseconds, not eighty seconds. The next-read mismatch matters even if the response was quick.

Jules: Right: four correct next reads and one previous value. Eighty milliseconds. Does that median include the rejected writes?

Rina: No. It covers forty successful read responses in a separate timing sample. The reported p99 for that sample is 900 milliseconds, but the note does not specify its estimation method. We should not turn that number into a claim that exactly one percent of forty users waited that long. These are responses, and the tail estimate from this small sample needs context.

Jules: Then doubling the workers must have doubled throughput.

Rina: That was a proposal, not a measured change. We still have two workers. A three-worker trial has been suggested, and no throughput figures were recorded for it. The five consistency checks and forty timing responses are also different samples.

Jules: I see. I said earlier that we had fixed the old-value problem. Let me correct that: I drafted a proposal to route the writer's next read to the primary store. The proposal has not been implemented or tested. I cannot call it a fix yet.

Rina: Thank you. It might be worth investigating, but we need to check its behaviour and cost rather than infer success from the name of the store. A successful write acknowledgement tells us that this write was accepted under the stated contract. It does not by itself document every client's later view.

Jules: What happens if the next request uses a new session?

Rina: That is not specified in this brief. We should ask for the expected behaviour before calling such a result a pass or a failure. The known same-session mismatch remains a mismatch; an open question about another session does not remove it.

Jules: Can you take responsibility for the routing change and promise a date?

Rina: I can review the proposed check conditions. I cannot own the implementation or give a release date. Luis has offered to ask who can provide a test environment; he has not promised that access is ready.

Jules: Let me read that back. Four of five same-session next reads returned the saved value; one did not. The separate timing sample has an eighty-millisecond median, not an eighty-second delay, and its p99 needs methodological context. The primary-read routing is only a draft proposal. You will review conditions, and access, implementation ownership and the other-session rule are still open.

Rina: Yes. Now explain which new observation would change your recommendation. Agreement on that summary is not evidence that the proposed routing already works.`;

export const performanceBrief=`Самостоятельное вымышленное досье Willow Preview, версия 3.0, comparison note 11 Draft. Нужно показывать сохранённое изображение в preview не позже 2 секунд после acknowledged save; лимит latency относится отдельно к p95 успешных preview reads: ≤400 ms. Baseline w4 и candidate w5 проверены на одной машине, одинаковых 200 synthetic images и request mix, после warm-up, по 120 секунд и 2400 attempted reads. Baseline: 2376 success / 24 errors, mean successful latency 180 ms, reported p95 350 ms. Candidate: 2352 success / 48 errors, mean 120 ms, reported p95 480 ms. Success throughput 19.8/19.6 reads per second; offered traffic 20/s у обоих. Error latency и cold start не измеряли. Отдельные восемь save-to-preview probes: baseline 8 в пределах 2 sec; candidate 6 в пределах, один 3 sec, один не дал финального наблюдения из-за остановленного сбора данных. Последний unknown, не доказанный timeout приложения или потеря изображения. Candidate lookup hit proportion 95% из отдельного журнала 1000 lookups; baseline hit proportion не дан, нельзя утверждать рост. Конфигурация refresh 1 sec предложена, не применена и не проверена; event delivery не исследовали. Memory 100/140 MiB; CPU не записан. Причина ухудшений не подтверждена. Lea принимает review wording отчёта, не implementation. Команда согласовала повторное измерение с проверкой условий, не release. Нужны полный отчёт/рекомендация и отдельная полная редакция по реальному отзыву. Реальные пользовательские изображения, credentials и внешние сервисы не использовать.`;

export const performanceModels={
 report:`Elm comparison note 8: keep speed and data visibility separate

Status: investigation requested. This report compares c17 and c18 of Elm Catalogue 1.7 under one documented warm-cache setup. It does not approve a production release or establish behaviour under other workloads.

Each sixty-second run used the same machine, ten thousand synthetic records, fifty virtual clients and the same request mix. Each recorded six thousand attempted requests. The baseline returned 5,880 successful responses and 120 errors; the candidate returned 5,940 successful responses and 60 errors. Successful throughput increased from 98 to 99 responses per second, while attempted traffic remained 100 requests per second. The error proportion decreased from two percent to one percent, which is one percentage point or a fifty-percent relative reduction.

Successful-response mean latency fell from 200 to 160 milliseconds. However, reported p95 latency rose from 500 to 700 milliseconds. The candidate therefore missed the agreed p95 limit of 600 milliseconds despite its lower mean. Error-response latency was not supplied separately, so this report does not claim that error handling became faster.

Data visibility provides another reason to withhold an unqualified recommendation. Six separate update probes checked whether a committed change appeared within thirty seconds. All six baseline probes met the limit; five candidate probes met it, while one took fifty-five seconds. This is an observed mismatch, not proof of data loss or a confirmed diagnosis of the invalidation mechanism. A logged event alone does not establish that every relevant cache acted on it.

The higher cache-hit proportion uses a separate lookup denominator and cannot replace the visibility checks. Candidate memory use was 450 MiB rather than 300 MiB. CPU and network measurements are missing, and a proposed twenty-second lifetime has not been tested. Neither a high hit proportion nor a short configured lifetime proves current application data.

I recommend investigating the latency tail and the late update while preserving comparable conditions. Nia will review those conditions; Bo has offered to inspect the trace without an agreed completion date. The next report should include missing measurements and actual repeat results. Until then, the findings support a bounded investigation, not deployment approval or a general claim that caching is either beneficial or harmful.`,
 comparison:`The candidate improves some Elm measures and worsens others. Successful throughput increases from 98 to 99 responses per second, and the error proportion falls from two percent to one percent. Mean successful-response latency also falls, from 200 to 160 milliseconds. These are useful observations under the documented warm-cache setup.

However, p95 latency increases from 500 to 700 milliseconds and exceeds the agreed 600-millisecond limit. One of six candidate update probes also misses the thirty-second visibility requirement. The lower mean does not cancel either mismatch. Nor does the higher hit proportion establish that every displayed description is current.

Both runs use six thousand attempted requests, but the update probes and cache lookups belong to separate samples. Memory rises from 300 to 450 MiB, while CPU and network data are absent. We therefore cannot identify the bottleneck or calculate total operating cost from this table.

I would continue the investigation with explicit conditions and separate measures. Shortening the lifetime is a proposal that needs implementation and end-to-end evidence. The present figures justify neither an unconditional rollout nor a claim that every possible cached design must fail.`,
 clarification:`Could you clarify the exact population used for the latency summary? The table labels the mean and p95 as successful responses, but does not provide error-response latency. Please confirm the collection window, cache warm-up and percentile estimation method before we compare later runs. We also need the update-visibility probe timestamps measured from committed writes, rather than the time when someone opened the report. I am not asking you to invent missing values or to treat a cache hit as a freshness check. If a measurement was not collected, please mark it as unavailable and specify what a new run would need to record.`,
 objection:`I agree that the lower mean and error proportion are useful improvements. Nevertheless, the candidate misses two stated criteria in the available evidence: successful-response p95 exceeds its limit, and one update appears too late. These are not interchangeable measurements. The higher hit proportion cannot settle either issue, because finding a cache entry does not establish the latency distribution or the age of its underlying data. I would support a controlled follow-up, not an immediate rollout. Could you explain how the next comparison will preserve the workload and distinguish an observed symptom from a suspected cause? Your answer should identify evidence still needed, not announce a fix in advance.`,
 handover:`Elm note 8 remains an investigation request, not a release approval. Please keep the mean, p95, successful throughput, errors and update probes separate. The candidate's mean improves, but its p95 and one update delay miss the agreed limits. The cache-hit table uses a different denominator and does not prove freshness. A twenty-second lifetime is only proposed in this comparison. Nia will review the comparison conditions, and Bo has offered to inspect the invalidation trace without an agreed completion date. Neither has accepted a rollout role. Preserve the missing CPU, network and error-latency measurements as unknown until new evidence is available.`,
 revision:`Revised Elm comparison note 8: an investigation with explicit evidence limits

Status remains investigation requested. The comparison concerns Elm Catalogue 1.7, baseline c17 and candidate c18. This revision separates performance, data visibility and the status of proposed work; it does not report an implemented fix.

The two measured runs used the same machine, request mix, ten thousand synthetic records and fifty virtual clients. Both followed warm-up, lasted sixty seconds and recorded six thousand attempts. These conditions support a bounded comparison, not a claim about cold-cache behaviour or arbitrary scale. Virtual clients and requests must not be relabelled as distinct people.

The baseline produced 5,880 successful responses and 120 errors; the candidate produced 5,940 successful responses and 60 errors. Successful throughput rose from 98 to 99 per second. Attempted traffic stayed at 100 per second. Errors fell from two percent to one percent: one percentage point, equivalent to a fifty-percent relative reduction. That reduction is not a claim that all requests succeeded.

For successful responses, the mean fell from 200 to 160 milliseconds, while reported p95 rose from 500 to 700 milliseconds. The candidate misses the agreed p95 ceiling of 600 milliseconds. Error-response latency remains unavailable, so no conclusion about its change is added. A favourable mean cannot establish that every part of the distribution improved.

Six separate probes tested whether committed changes became visible within thirty seconds. The baseline met the limit in all six; the candidate met it in five and took fifty-five seconds in the remaining probe. This identifies a visibility mismatch without proving data loss or a root cause. The logged invalidation event does not establish delivery and processing by every relevant cache.

The separate lookup hit proportion and the proposed shorter lifetime do not replace application-level checks. Memory increased from 300 to 450 MiB. CPU and network measurements are missing. I recommend comparable repeat measurements and investigation of the observed tail and visibility problems. Nia's accepted action is reviewing conditions; Bo's offer is inspecting the trace, without an agreed date. Any later recommendation should name the actual new evidence and unresolved requirements rather than convert a proposal into deployment approval.`
};

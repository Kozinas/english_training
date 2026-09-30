# Архитектурное решение: требования, варианты и компромиссы

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

Авторские языковые модели B2 для обсуждения архитектуры. Технические досье и условные оценки вымышлены; это не готовая архитектура для реального сервиса и не полный учебник system design.

Первичные ориентиры проверены 2026-09-30: Nygard связывает ADR с контекстом, решением, статусом и последствиями и сохраняет заменённые решения; AWS описывает собственный процесс review и смены статуса. Это ориентиры, а не универсальный регламент каждой команды. Их учебные упражнения не копируются; шаблон курса и кейсы авторские.

Сохраняй must/may, условие, единицу, версию и границы свидетельства. Proposed, agreed investigation, accepted design и deployed change — разные статусы. Открытые документы оцениваются по смыслу, реальная речь — по аудио, отложенный перенос — на новом материале.

| Задача | Модель | Как построено | Граница смысла |
| --- | --- | --- | --- |
| requirement | The service must acknowledge the request. | Must + base. | Не must to acknowledge. |
| permission | The client may cancel the job. | May + base. | Permission требует основания в контракте. |
| possibility | The worker may fail. | May + base. | Возможность, не разрешение. |
| no obligation | We need not choose today. | Need not + base. | Не запрет выбора. |
| prohibition | The old report must not disappear. | Must not + base. | Отрицательное обязательное условие. |
| require object | The design requires a separate worker. | Require + object. | Не require in. |
| require action | We require the service to retain the report. | Require object to do. | Не require that объект без глагола. |
| allow | The queue allows the request to return sooner. | Allow object to do. | Не доказывает реальное время. |
| dependence | The estimate depends on sample access. | Depend on. | Зависимость сохраняется в пересказе. |
| fit | The option meets the stated constraint. | Meet a constraint. | Нужно свидетельство, не один ярлык. |
| preference | I prefer B to A for this investigation. | Prefer A to B. | Не автоматически окончательное решение. |
| recommendation | I recommend investigating B. | Recommend + -ing. | Не recommend to investigate без объекта/другой модели. |
| recommend clause | I recommend that we compare both options. | That + clause. | Действие ещё не выполнено. |
| ordinary condition | If the workload increases, we will review the choice. | If + Present. | Не механическое will после if. |
| hypothesis | If access were available, we could run the comparison. | Past + could base. | Не доказанная доступность. |
| necessary condition | We will proceed only if an owner is agreed. | Only if. | Не достаточность одного условия. |
| proviso | The proposal is viable provided that recovery is checked. | Provided that + clause. | Не объявлять check завершённым. |
| concession | Although A is simpler, it misses one constraint. | Although + clause. | Не although… but в основной модели. |
| noun concession | Despite the lower estimate, A is not yet acceptable. | Despite + noun group. | Не despite of. |
| contrast | A generates inline, whereas B queues the work. | Whereas + clause. | Различие, не причинный вывод. |
| comparison | B is more expensive to operate in this estimate. | More adjective. | Нужны scope и источник. |
| small degree | A is slightly cheaper on listed infrastructure. | Slightly + comparative. | Не полная стоимость. |
| purpose | The prototype is small enough to investigate safely in the sandbox. | Enough + to. | Не достаточность для production. |
| trade-off | B reduces one wait at the cost of extra operating work. | At the cost of. | Последствия не обязательно денежные. |
| evidence | Eight of twelve acknowledgements met the limit. | Of + denominator. | Не восемь людей. |
| limitation | The sample does not establish behaviour at higher load. | Does not establish. | Не доказательство противоположного. |
| assumption | The estimate assumes that access is available. | Assume that. | Допущение не факт доступа. |
| status | The record remains Proposed. | Remain + status. | Agreement to investigate не acceptance дизайна. |
| commitment | Leo agreed to draft checks, not operate the worker. | Agree to do. | Ограниченный scope. |
| clarification | Could you explain which requirement this option meets? | Embedded order. | Без does после which requirement + subject. |
| revision | We will revisit the choice if the constraint changes. | Revisit + object. | Не молча стирать прежнее основание. |
| read-back | Could you restate what was agreed and what remains open? | Два embedded clauses. | Понимание не endorsement. |

## Практика

1. Исправь The service must to retain the report.
2. Выбери форму We recommend ___ both options: compare/comparing.
3. Построй allow + request + return.
4. Исправь The estimate depends from access.
5. Переделай Which constraint does B meet? после Could you explain.
6. Сравни may fail и may cancel.
7. Преврати Despite the lower cost в although-clause.
8. Составь условный вывод о росте нагрузки.
9. Only if an owner is agreed гарантирует готовность при одном owner?
10. 12 measured requests означает 12 unique users?
11. Один вариант дешевле по инфраструктуре. Что ещё неизвестно?
12. Приняли план сравнения: какой статус нельзя дописать?
13. Напиши сильное возражение B без straw man.
14. Почему принятое отрицательное последствие нужно записать?
15. 2–4 person-days без review означает release in four calendar days?
16. Попроси адресный read-back без требования согласиться.

<details><summary>Разбор после попытки</summary>

1. The service must retain the report.
2. Comparing; alternatively, recommend that we compare.
3. The design allows the request to return sooner.
4. The estimate depends on access.
5. Could you explain which constraint B meets?
6. Возможность исхода и разрешение действия по контексту; слово may само не выбирает значение.
7. Although the listed cost is lower…; не убирать ограничение listed.
8. If the workload increases, we will need new evidence.
9. Нет. Это необходимое условие, могут быть другие.
10. Нет. Единицы различаются.
11. Total cost, staff effort, support and other excluded categories.
12. Accepted production design или deployed release без отдельного свидетельства.
13. The acknowledgement gain does not settle readiness, recovery and operating ownership.
14. Чтобы читатель видел цену выбора и условия возможного пересмотра, а не только рекламу.
15. Нет. Effort, excluded work, capacity and elapsed time различаются.
16. Could you restate the recommendation and its conditions, even if you prefer another option?

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [Michael Nygard: Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
- [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

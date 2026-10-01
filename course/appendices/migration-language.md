# Миграции и оценки: совместимость, восстановление и условия

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

Авторские языковые модели B2 для обсуждения изменений схемы и формата данных. Указывай приложение, схему, данные, операцию и статус предложения. Это не инструкция по выполнению реальных миграций и не гарантия доступности или сохранности production.

Первичные ориентиры проверены 2026-10-01: GitLab описывает зависимые этапы изменения своей базы и риски удаления колонок; Google AIP-180 различает виды совместимости API. Правила конкретных платформ не являются универсальным регламентом любого приложения. Учебные досье задают собственные контракты; все тексты и задания оригинальные.

Оценка трудозатрат не равна календарному обещанию. Возврат приложения, откат схемы, восстановление snapshot и воспроизведение последующих записей требуют отдельных свидетельств. Письмо, реальное взаимодействие и отложенное применение проверяются вручную.

| Задача | Модель | Построение | Граница смысла |
| --- | --- | --- | --- |
| transition | We are migrating from the old representation to a new one. | From/to задают направление. | Это процесс, не заявление о завершении. |
| replacement | Replace the old field with the new field. | Replace A with B. | Не путать объект замены и замену. |
| coexistence | Both application versions may run during the transition. | Both + plural. | May здесь возможность, не проверенная совместимость. |
| schema | The column has been added, but the backfill is incomplete. | Present Perfect passive / contrast. | Схема и данные — разные этапы. |
| fallback | Read the old field if the new one is null. | If + Present. | Fallback не срабатывает при старом непустом значении. |
| old writer | The old application still writes only the original field. | Still / only. | Не приписывать ей новый dual-write contract. |
| copy | One thousand of twelve hundred records have been copied. | Of + scope; plural have. | Не процент готовности всего проекта. |
| condition | Do not proceed until the mismatch has been investigated. | Until + Present Perfect. | Не until will have been investigated. |
| dependency | The next phase depends on the agreed mapping. | Depends on. | Не depends from. |
| sequence | Before we remove the field, we need evidence about old readers. | Before + Present. | Нужна проверяемая граница, не просто дата. |
| permission | The proposal has not been approved for deployment. | Passive + negative. | Не доказательство, что deployment физически невозможен. |
| compatibility | This reader accepts the old representation, but not the new one. | Явный субъект и направление. | Совместимость не обязана быть симметричной. |
| deprecation | Deprecated does not mean removed. | Различай жизненные статусы. | Условия прекращения поддержки задаются отдельно. |
| constraint | The proposed constraint would reject null values. | Would + base. | Proposal ещё не применён. |
| rollback | We rolled back the application without changing the schema. | Roll back — глагол. | Не восстановили все данные автоматически. |
| restore | The backup contains the earlier snapshot. | Contains + объект. | Не включает автоматически более поздние записи. |
| replay | Replay of later writes has not been tested. | Has not been + V3. | Untested не подтверждённый failure или success. |
| irreversible | The conversion may discard information needed by the old reader. | May + base. | Нужно проверить, а не обещать обратимость. |
| forward fix | A forward fix is proposed, not yet verified. | Статус предложения. | Не каждая проблема решается безопасным downgrade. |
| limit | Two successful reads do not establish safety for every write path. | Do not establish. | Не отрицай сами два успеха. |
| stop | The mismatch meets the condition for stopping progression. | For + -ing. | Stop progression не приказ исполнить rollback. |
| estimate | We estimate three to five person-days of implementation effort. | Range + of. | Не календарные дни и не release commitment. |
| assumption | That estimate assumes access to a suitable environment. | Assumes + noun. | Assumption не уже выполненный prerequisite. |
| exclusion | The range excludes review and waiting time. | Явный scope. | Не скрывай исключения мелким шрифтом. |
| target | Friday is a requested target, not an agreed deadline. | Requested / agreed. | Цель и обязательство различаются. |
| revision | We will revise the estimate if the mapping changes. | If + Present. | Не гарантия исходного диапазона при изменении scope. |
| only if | We can proceed only if the checks support the decision. | Only if задаёт необходимое условие. | Само выполнение условия не приказ proceed. |
| question | Could you clarify which readers remain supported? | Embedded subject + verb. | Не which readers do remain без особого усиления. |
| commitment | I can review the mapping, but I cannot own deployment. | Ограниченное can. | Review не принятие всей migration. |
| read-back | Let me check that I understood the scope correctly. | Let + object + base. | Понимание не согласие с предложением. |
| postpone | We have put off the next phase pending clarification. | Put off = отложить. | Не отменили весь проект. |
| phase out | We propose phasing out the old writer after agreed checks. | Propose + -ing. | Постепенное прекращение, не уже удалённый код. |

## Практика

1. Исправь The plan depends from access.
2. Замени old_field на new_field в предложении с replace.
3. Почему added column не completed migration?
4. Новый reader поддерживает оба формата. Старый автоматически поддерживает новый?
5. Fallback только при null защитит от старого непустого значения?
6. 90 из 100 records copied: процент чего?
7. Раскрой отличие deprecated и removed.
8. Исправь until the checks will finish.
9. Напиши предложение об ограниченной rollback проверке.
10. Backup до новых записей автоматически восстановит их?
11. Как обозначить неизвестное восстановление?
12. Три person-days означают выпуск через три календарных дня?
13. Запиши условную оценку без обещания срока.
14. Согласие review questions — владение deployment?
15. Используй put off и phase out в разных предложениях.
16. Попроси реального партнёра пересказать условие перехода.

<details><summary>Разбор после попытки</summary>

1. The plan depends on access.
2. Replace old_field with new_field.
3. Структура, перенос данных, writers/readers и критерии перехода требуют отдельной проверки.
4. Нет, обратное направление не следует из этого факта.
5. Нет: условие null не выполняется.
6. 90% данной операции копирования, не всего проекта.
7. Первое сообщает статус устаревания; второе — фактическое удаление. Политика задаётся явно.
8. until the checks finish / until the checks have finished, по контексту.
9. Two selected reads passed after the application switch; other paths remain untested.
10. Нет; нужны отдельные средства и проверка recovery/replay.
11. Recovery of the later writes has not been tested.
12. Нет; нужны scope, staffing, зависимости, ожидание и проверка.
13. We estimate three to five person-days, assuming access; review is excluded.
14. Нет, это ограниченное принятое действие.
15. We put off the next phase. We propose phasing out the old writer. Отложить и постепенно вывести из использования.
16. Could you read back the condition for proceeding? Сверить реальную реплику, не выдумать согласие.

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [GitLab: Avoiding downtime in migrations](https://docs.gitlab.com/development/database/avoiding_downtime_in_migrations/)
- [Google AIP-180: Backwards compatibility](https://google.aip.dev/180)

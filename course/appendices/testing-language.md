# Тестирование: условия, проверки, результаты и пределы выводов

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

Авторские модели B2 для test plan, отчёта и обсуждения проверки. Fern, Larch, Maple и контрольные досье вымышлены. Это языковое приложение, не полный курс QA и не разрешение работать с реальными сервисами.

Первичные ориентиры проверены 2026-09-30. Playwright рекомендует изолированные проверки наблюдаемого поведения; его web assertions могут повторять проверку условия до успеха или timeout. Это не универсальная настройка всех инструментов. Google подчёркивает ограниченность coverage: выполнение кода не показывает качество проверок результата. Наши числовые кейсы и упражнения — самостоятельные авторские материалы.

Различай requirement, expected, actual, assertion и conclusion. Planned cases, executed cases и execution attempts имеют разные знаменатели. Failed / not run / blocked — не одно состояние. Открытый ответ проверяют по смыслу; без звука pronunciation и oral fluency остаются unknown.

| Задача | Модель | Как построено | Граница смысла |
| --- | --- | --- | --- |
| requirement | The function preserves the source. | Present Simple, singular -s. | Правило не отчёт о выполнении. |
| negative rule | It does not modify the source. | Does not + base. | Не does not modifies. |
| precondition | Start with a fresh copy of the fixture. | Imperative + with. | Назови исходное состояние. |
| range | The limit is between one and twenty, inclusive. | Between A and B. | Границы входят в диапазон. |
| upper bound | Return at most twenty items. | At most + число. | Не ровно двадцать при любом входе. |
| lower bound | The fixture needs at least twenty completed items. | At least + число. | Не at last. |
| exact amount | Exactly one item is created. | Exactly + numeral, passive. | Не одно сообщение вместо одного объекта. |
| condition | If enough items exist, return the requested number. | If + Present. | Без will в обычном условии. |
| expected | We expected twenty items. | Expect + object. | Не expect for twenty. |
| actual | The function returned nineteen items. | Past Simple. | Факт конкретного запуска. |
| comparison | Compare the result with the expected output. | Compare A with B. | Также нормативно compare A to B. |
| assertion | The check verifies the returned identifiers. | Verify + object. | Не только существование массива. |
| missing check | The source was not compared before and after the call. | Past passive negative. | Не доказательство изменения source. |
| rejection | Invalid input must be rejected. | Modal + be + V3. | Правильное отклонение может быть passed. |
| question | Could you explain why the case fails? | Embedded subject + verb. | Без вопросительной инверсии. |
| unknown expectation | Duplicate handling has not been specified. | Perfect passive. | Не назначать expected наугад. |
| not run | The keyboard case was not run. | Past passive. | Не продукт failed. |
| blocked | The integration check is blocked by missing access. | Blocked by cause. | Причина невозможности проверки. |
| denominator | Five of the six executed cases passed. | Five of the six. | Не five of all planned cases. |
| repetition | We reran one case twice. | Rerun, reran, rerun. | Case и execution различаются. |
| retention | Keep the original failure in the history. | Keep + object + location. | Не стирать свидетельство повтором. |
| uncertainty | The cause remains unknown. | Remain + adjective. | Не verified timing defect. |
| limit of evidence | This does not establish a fix. | Does not + base. | Не утверждение, что исправление невозможно. |
| test double | The response comes from a test double. | Come from. | Не реальный сервис. |
| coverage | The report covers eighteen of twenty statements. | Cover + object. | Нужны метрика и область. |
| qualification | High coverage does not guarantee strong assertions. | Does not guarantee. | Не процент правильных требований. |
| proposal | I have drafted a replacement assertion. | Perfect + drafted. | Не implemented and run. |
| correction | Sorry, I meant three executed cases, not five. | Meant, not meaned. | Назвать единицу подсчёта. |
| waiting | Wait until the expected condition is met. | Until + Present passive. | Condition должна быть определена. |
| responsibility | She offered to review the plan. | Offer + to-infinitive. | Не agreed to obtain access. |
| follow-up | Which result would change your conclusion? | Would + base. | Нужен содержательный ответ. |
| read-back | Could you summarise what remains unverified? | Embedded clause. | Yes не подтверждает понимание. |

## Практика

1. Исправь The test do not checks order.
2. Переведи «не более 12», «не менее 12», «ровно 12».
3. В диапазон 1–20 inclusive входят какие граничные значения?
4. Expected input rejection произошло. Это обязательно failed test?
5. Переделай Why does it fail? после Could you explain.
6. Исправь The input must is rejected.
7. План: 8 cases, выполнено 6, passed 5. Назови знаменатели.
8. Один case запустили ещё дважды. Появилось два новых cases?
9. Array-only assertion прошёл при expected count 20 / actual 19. Вывод?
10. Сравнение source отсутствует. Можно ли утверждать, что source повреждён?
11. Вместо expected вписали actual без изменения требования. Что не так?
12. 90% statements означает 90% требований проверены?
13. Что не доказывает successful mocked response?
14. Passing retry отменяет исходную failure?
15. Drafted assertion равно shared and executed?
16. Спроси, как проверить понимание ограничения.

<details><summary>Разбор после попытки</summary>

1. The test does not check order.
2. At most twelve; at least twelve; exactly twelve.
3. One and twenty; adjacent outside values are zero and twenty-one.
4. Нет. При соответствующем требовании отказ — успешная проверка.
5. Could you explain why it fails?
6. The input must be rejected.
7. Five of six executed cases passed; two of eight planned cases were not executed.
8. Нет. Появилось два execution attempts.
9. The assertion is too weak to check the count requirement.
10. Нет. That requirement remains unverified.
11. Это убирает независимое ожидание, а не доказывает корректность.
12. Нет. Нужны область инструмента, критерии и assertions.
13. Real-service availability, credentials and actual data are not established.
14. Нет. Preserve both outcomes; investigate the difference.
15. Нет. Стадии работы нужно сообщить отдельно.
16. Could you explain which requirement is still unverified and why?

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [Playwright: testing behaviour and isolation](https://playwright.dev/docs/best-practices)
- [Playwright: assertions and waiting for a condition](https://playwright.dev/docs/test-assertions)
- [Google Testing Blog: code coverage best practices](https://testing.googleblog.com/2020/08/code-coverage-best-practices.html)

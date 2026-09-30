# Данные и производительность: единицы, сравнение и свежесть

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

Авторские модели B2: читать метрику с единицей, выборкой и условиями; объяснять различие скорости, успешности и видимости данных. Кейсы вымышлены, это не полный курс статистики, баз данных или эксплуатации.

Первичные ориентиры проверены 2026-09-30: Google SRE различает сигналы и обращает внимание на хвост распределения. RFC 9111 описывает HTTP-кэш; его freshness и invalidation не являются универсальным контрактом любого application cache. Учебные досье ниже задают собственные правила.

У mean, percentile, error proportion и update visibility разные вопросы и знаменатели. Не объявляй предложение измеренным исправлением. Открытые отчёты и реальная речь проверяются вручную; нужен новый отложенный перенос.

| Задача | Модель | Построение | Граница смысла |
| --- | --- | --- | --- |
| duration | Latency fell from 200 ms to 160 ms. | From/to: начало и конец. | Не скорость обработки в requests/s. |
| change | The mean fell by twenty percent. | By: величина изменения. | База — прежние 200 ms. |
| endpoint | The error proportion fell to one percent. | To: итоговое значение. | Не уменьшилась на один процент относительно прежнего. |
| points | It fell by one percentage point. | Разность процентных долей. | 2% → 1%, не 2% → 1.98%. |
| relative | It fell by fifty percent relative to the baseline. | Изменение / исходное. | При нулевой базе такое деление не определено. |
| rate | Successful throughput was 99 responses per second. | Количество / интервал. | Не 99 пользователей или offered traffic. |
| traffic | There were 100 attempted requests per second. | Уточни attempted. | Ошибки не исчезают из знаменателя attempts. |
| sample | The figures cover one sixty-second run. | Область измерения. | Не доказательство устойчивого поведения за месяц. |
| fraction | Five of six updates appeared within the limit. | Of + знаменатель. | Один поздний, не пять пользователей. |
| population | The latency summary includes successful responses only. | Only сохраняет scope. | Error latency нужно назвать отдельно. |
| percentile | The reported p95 rose to 700 milliseconds. | Назови метод/выборку при необходимости. | Не максимум и не среднее. |
| ceiling | The criterion is no greater than 600 milliseconds. | Включает границу. | Не less than 600. |
| floor | We need at least twenty observations here. | At least включает минимум. | Число задано кейсом, не универсальная достаточная выборка. |
| conversion | Half a second is 500 milliseconds. | Единицы и коэффициент. | Не 50 ms. |
| agreement | The number of errors has fallen. | Head number единственное. | Errors внутри of-group не подлежащее has. |
| count | There were fewer errors, but more memory was used. | Fewer count / more mass. | Не сравнение количества errors со временем. |
| amount | The candidate uses less memory in this hypothetical case. | Less + mass noun. | Не утверждение о Elm, где памяти больше. |
| passive | The latency was measured after warm-up. | Be + V3. | Не после cold start. |
| condition | If the cache expires, the next read may fetch new data. | If + Present, may + base. | Поведение зависит от реализации; не обещание успешного fetch. |
| concession | Although the mean fell, the upper percentile rose. | Although + clause. | Оба факта совместимы. |
| contrast | The baseline met the limit, whereas the candidate missed it. | Whereas сопоставляет. | Не подтверждённая причина. |
| bounded comparison | Under the same stated setup, throughput increased slightly. | Условие сравнения. | Не при любой нагрузке. |
| warm-up | Both runs started after warm-up. | After + noun. | Не измерение холодного кэша. |
| hit | A cache hit does not establish current application data. | Does not + base. | Hit и свежесть — разные свойства. |
| lifetime | The configured lifetime is not the observed update delay. | X is not Y. | TTL не полное end-to-end измерение. |
| visibility | A committed change must become visible within thirty seconds. | Modal + base. | Отсчёт от commit в данном brief. |
| same session | The next read in the same session returned the old value. | Точный reader и момент. | Не утверждение о всех клиентах. |
| unknown | The final observation was not collected. | Пассив наблюдения. | Не доказанный timeout приложения. |
| hypothesis | The event may not have reached every cache. | May + have + V3. | Гипотеза, не доказанная причина. |
| clarification | Could you explain which responses the summary includes? | Embedded order. | Не does include при нейтральном вопросе. |
| next step | We propose measuring error latency separately. | Propose + -ing. | Предложение не выполненная работа. |
| read-back | Please repeat the value with its unit and population. | Imperative и явный объект. | Пересказ не согласие с выводом. |

## Практика

1. Переведи from 250 ms to 200 ms, by 50 ms.
2. Ошибки 4% → 3%: пункты и относительное уменьшение?
3. 600 successes за 30 seconds: successful throughput?
4. 500 ms в секундах?
5. Исправь The number of requests have increased.
6. Почему меньше mean не значит меньше p95?
7. p95 ≤400 ms, значение 400: соответствует границе?
8. Допиши вопрос Could you clarify which errors…
9. Почему 95% hits не 95% актуальных записей?
10. TTL 15 sec доказывает видимость обновления за 15 sec?
11. Warm-cache sample можно назвать cold-start benchmark?
12. Два читателя увидели разные значения. Обязательно bug?
13. Лог invalidation event доказывает его обработку всеми кэшами?
14. Последнее наблюдение не записано. Как сообщить итог?
15. Предложи сравнение, не объявляя его проведённым.
16. Попроси пересказ спорной цифры.

<details><summary>Разбор после попытки</summary>

1. С 250 до 200 ms, уменьшение на 50 ms; 20% от исходных 250.
2. Один процентный пункт; относительное уменьшение 25%.
3. 20 successful responses per second, не 600/s.
4. 0.5 seconds; полсекунды.
5. The number of requests has increased.
6. Это разные сводки распределения; хвост может измениться иначе.
7. Да, по этому включающему критерию; не полное соответствие всем требованиям.
8. Could you clarify which errors the report includes?
9. Наличие пригодной по правилам кэша записи не измеряет соответствие последнему изменению источника.
10. Нет; нужны исходное событие, end-to-end путь и наблюдение.
11. Нет, это другое исходное состояние.
12. Нужны момент, контракт и scope; отдельно проверить фактически заданное требование.
13. Нет; generation/delivery/processing различаются.
14. The outcome is unknown because the final observation was not collected.
15. We propose repeating the measurement under the same stated conditions.
16. Could you repeat the value, unit, population and comparison window?

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)
- [RFC 9111: HTTP Caching, sections 4.2, 4.4 and 6](https://www.rfc-editor.org/rfc/rfc9111.html)

# T04-performance · Данные и производительность: метрики, свежесть и границы сравнения

[Топик T04](../modules/T04.md). Сгенерировано из data/*.mjs.

Предпосылки: [T04-decisions](T04-decisions.md).

## Цели контроля

- Строить точные количественные утверждения и вопросы
- Сравнивать метрики с единицами и знаменателями
- Различать кэш, свежесть и согласованность чтения
- Ограничивать выводы условиями измерения
- Читать отчёт с несовпадающими показателями
- Слышать числа, поправки и принятые действия
- Писать полный сравнительный отчёт и редакцию
- Обсуждать измерения и проверять понимание

## Механизм

### Метрика — ответ на конкретный вопрос

Latency отвечает «сколько времени заняла операция?», throughput — «сколько работы завершилось за интервал?», traffic — «какая работа поступала?». Эти вопросы связаны, но не заменяют друг друга. Назови событие начала/конца, единицу, population и окно: successful read latency during the sixty-second run. Request, response, job, account и user — разные счётные единицы. Сто запросов могут принадлежать одному человеку, accepted job может ещё не завершиться. В Elm traffic 100 attempted requests/s, successful throughput 98/99 responses/s: вычитать errors нужно из подходящего знаменателя, а не объявлять все attempts полезным результатом. Здесь учимся объяснять данные по-английски; авторские числа не являются benchmark реального продукта.

### Единицы, длительность и нагрузка

One second equals one thousand milliseconds: 0.5 seconds = 500 ms, 0.08 seconds = 80 ms. Per second задаёт деление на интервал; 600 responses in sixty seconds даёт 10/s, не 600/s. Fifty virtual clients задаёт участников имитации, не обязательно fifty concurrent requests в каждый момент и не fifty real users. Размер fixture, request mix и начальное состояние тоже условия измерения. MiB и MB не взаимозаменяемые подписи: в наших таблицах MiB сохраняется без неподтверждённого пересчёта. При устном уточнении повторяй число вместе с единицей и событием: eighty milliseconds for successful reads. Исправленная единица меняет смысл в тысячу раз; текстовый ASR может ошибиться, поэтому нужна сверка с реальным звуком.

### From, to, by: начало, конец, изменение

Latency fell from 200 ms to 160 ms называет два уровня. It fell by 40 ms называет разность. It fell by twenty percent задаёт относительное снижение: (200−160)/200. To twenty percent было бы конечной долей, не величиной изменения. Increased, decreased, rose, fell, remained stable подходят разным наблюдениям; падение latency может быть полезным, падение throughput — нет, поэтому increase не всегда improvement. Lower/faster/better требуют назвать показатель и условия. Не говори «в два раза быстрее», если измерил только снижение mean на 20%: это неоднозначная замена точной величины. The mean is twenty percent lower under this setup сохраняет показатель, базу и область.

### Процент и процентный пункт

Error proportion 2% → 1% уменьшается на один percentage point. Относительное уменьшение равно (2−1)/2 = 50%. Это не две конкурирующие оценки одной формулы: они отвечают разным вопросам. Доля 80% → 90% увеличилась на 10 percentage points и на 12.5% относительно исходных 80%. Если исходное значение ноль, обычное относительное изменение с делением на него не определено: сообщи абсолютную разницу и контекст. Слова percent / percentage points проговаривай полностью при риске неоднозначности. «Errors fell by 50%» без исходных counts или proportions может скрывать изменение объёма работы; сначала установи, сравниваешь число ошибок или их долю среди attempts.

### Mean, median, percentile и maximum

Mean складывает значения и делит на их число. Median описывает середину упорядоченных наблюдений по принятому правилу; mean не обязан совпадать с ней. Percentile указывает положение в распределении, а не среднее или maximum. В отдельном учебном примере из 20 значений с явно заданным nearest-rank методом p95 — 19-е отсортированное значение: как минимум 19 из 20 не больше него, при совпадениях может быть больше. Реальные инструменты используют разные оценки/интерполяции; не обещай ровно 95% ниже любой отображённой цифры. Маленькая выборка, округление и aggregation требуют осторожности. Elm даёт reported p95: не нужно выдумывать raw values или метод и самостоятельно восстанавливать несуществующий ряд.

### Среднее и хвост могут двигаться в разные стороны

В Elm mean successful latency 200→160 ms, reported p95 500→700 ms. Большинство быстрых ответов может ускориться, а часть медленных — замедлиться; один показатель не опровергает другой. Although the mean fell, p95 rose связывает уступку и контраст. This does not establish that every request became faster ограничивает обобщение, не отрицает улучшение среднего. Условие p95 no greater than 600 ms включает 600; 700 его не выполняет. Limit для p95 не лимит каждого отдельного ответа, если brief не говорит именно это. Нельзя объединить разные метрики в произвольный общий процент успеха. Сначала проверь каждое заданное требование отдельно.

### Успешные ответы, ошибки и пропущенное наблюдение

Successful-response latency не включает ошибки, если так задана выборка. Отдельно нужны error count/proportion и, когда это важно, error latency: быстрый отказ не полезный быстрый ответ. HTTP success status также не доказывает правильное содержимое. Recorded error, still running, not observed и timed out различаются: остановившийся сборщик не устанавливает timeout самого приложения, а running job ещё не failed job. В Willow одна probe остановлена до финального наблюдения: её нельзя назвать ни passed, ни missed deadline без дополнительного свидетельства. Сохраняй неизвестность в отчёте, но не стирай известные failures других probes. Пропуск данных не даёт права выбрать удобный итог.

### Сравнимые условия и причинный вывод

Назови build, fixture, hardware, request mix, окно, способ сбора и warm-up. Same machine не означает same everything. Если B измеряли на меньшей нагрузке или другом наборе запросов, можно сообщить lower reported latency under different conditions, но нельзя приписать всю разницу одному code change. Даже сопоставимый единичный запуск не даёт универсальной гарантии: повторения, разброс и новые условия важны. Correlates with не means caused by; CPU high не автоматически root cause, а нет CPU measurements — не доказательство свободного CPU. Google SRE служит первичным ориентиром по различию сигналов и хвосту распределения; наши критерии и числа вымышлены, не универсальные SLO всех сервисов.

### Кэш: hit, miss, eviction и invalidation

Cache хранит повторно используемую копию/результат по определённому ключу. Hit означает найденную пригодную по правилам этого cache запись; miss — что запрос не обслужен такой записью. Это не автоматическая оценка правильности данных. Eviction обычно описывает удаление записи из кэша по политике, а не удаление исходной записи из базы. Invalidation делает прежнюю копию непригодной/удаляет её по механизму системы; отправить event не значит подтвердить его доставку и обработку всеми получателями. A higher hit proportion may reduce repeated work — возможность, не доказанный эффект во всех условиях. В Elm 5000 lookups отдельны от 6000 attempts; их проценты нельзя соединять без связи единиц.

### Lifetime и freshness: настройка не end-to-end результат

TTL/lifetime описывает время пригодности записи по правилам реализации. Оно не автоматически равно задержке между committed write и тем, что увидел пользователь: есть источник, очереди, обновление копий, часы и чтение. RFC 9111 определяет HTTP freshness по age/lifetime и ограничивает область invalidation; это не правило всех application caches. HTTP-fresh representation тоже нельзя механически назвать последним бизнес-значением из базы. В Elm configured lifetime 300 sec, наблюдаемый один update delay 55 sec, proposed lifetime 20 sec — три разных факта. Предложение уменьшить параметр нуждается в реализации и новом end-to-end измерении. Не выдавай TTL за доказанную сохранность, отсутствие устаревания или permission нарушить требование.

### Свежесть и согласованность: чей read после какого write?

Сначала установи reader, событие отсчёта и ожидаемый результат. Elm: committed description change видим browsing clients within thirty seconds. Meadow: после успешного save acknowledgement следующий read автора в той же session должен вернуть сохранённое значение. Это разные условия; нельзя дать Meadow тридцать секунд только потому, что так было в другом тексте. Read-your-writes описывает ожидание видеть собственную подтверждённую запись в оговорённой области; оно само не устанавливает порядок всех операций всех клиентов. Слово eventual без явной границы не обещает «не позже N seconds». Полный каталог consistency models здесь не выводится из одной фразы. Если other-session rule неизвестно, задай вопрос, но известный same-session mismatch не исчезает.

### Формы количественного предложения

The number of errors has fallen: подлежащее number, поэтому has, даже если errors множественное. There were fewer errors: plural errors сочетается с were; нейтральная учебная модель fewer для countable plural, less для amount: less memory, less time. More memory was used — пассив с mass noun; memory не автоматически memories, которые обычно воспоминания. Measured, compared, collected — V3 в was/were + V3, не was measure. Fall–fell–fallen и rise–rose–risen не смешиваются с reduce/increase. The mean fell during the run и has fallen since the baseline имеют разные временные рамки; не добавляй finished yesterday к Present Perfect без пересмотра формы.

### Уточнение показателя и область отрицания

Which responses does this include? — прямой вопрос; Could you clarify which responses this includes? — встроенный с обычным порядком subject + verb. Нейтральное includes не does include с усилением. Does not establish that every request improved не равно establishes that no request improved. Not all observations were collected оставляет часть наблюдений, none were collected отрицает все. Please specify the unit, population and window даёт конкретный запрос вместо What is this? Отделяй source/observed от inference/suspected cause. Если raw data не предоставлены, не строй воображаемый histogram; можно предложить, какие значения нужно собрать.

### Условие, уступка и рекомендация

If the workload changes, we will repeat the measurement — Present в обычном if-clause. Не добавляй will лишь потому, что речь о будущем. Even if the mean improves, the freshness requirement still applies сохраняет требование при благоприятном условии. Although/whereas помогают назвать одновременно выигрыш и проигрыш, а не спрятать неудобный показатель. We propose repeating the run / recommend measuring error latency используют -ing в данных моделях. We should investigate не означает We have fixed. Предложенная настройка или additional worker — действие, которое ещё нужно согласовать, реализовать и проверить. Не назначай owner или release date из общего согласия «нужно посмотреть».

### Полный отчёт и самостоятельная редакция

В полном report нужны адресат, версия/status, вопрос, setup, числа с units/population, проверка каждого критерия, ограничения, вывод и следующий шаг. Таблица помогает сравнить, но не заменяет связный вывод. Шесть полных Elm models доступны до ответа, самостоятельный Willow имеет другие числа, thresholds и неизвестный исход. Original и full revision 350–450 слов сохраняются отдельно. Реальный отзыв должен разбирать цитаты текста, затем ты принимаешь или отклоняешь советы с основанием и переписываешь весь документ. Changelog «исправил процент» не full revision. До отзыва feedback/revision pending; нельзя выдумывать ученику ошибки, чужие реплики или якобы выполненные измерения.

### Живой обмен числами и произношение

Latency /ˈleɪtənsi/, throughput /ˈθruːpʊt/, percentile /pəˈsentaɪl/ — учебные UK-ориентиры; нормативные US-варианты допустимы. Уделяй внимание ударению, /θ/ и окончаниям, но проверяй понятность по реальному звуку и пересказу партнёра. Fifteen/fifty, milliseconds/seconds, percent/percentage points требуют адресного уточнения. Партнёр даёт неизвестное сообщение, поправляет цифру, задаёт неожиданный вопрос, ограничивает задачу; ты реагируешь и просишь read-back. Чтение обеих заранее известных ролей не взаимодействие. Транскрипт и ASR similarity не дают pronunciation/fluency; при видимом тексте аудирование отмечается text-supported.

### Повторение и нынешние границы T04

Возвращайся к значениям by/to, units, count/proportion, median/mean/tail, cache/data и proposed/measured на новых входах. После практики два контрольных досье проверяют перенос, затем ручной разбор выбирает 2–3 приоритетных типа ошибок. Через семь дней нужен другой материал и реальная дата применения, не переименование Elm. Длительность занятия меняет календарь, не объём страницы; работу можно прервать. В T04 после этой публикации две наполненные подтемы, но изменения схемы, миграции, откат и оценки ещё требуют отдельного наполнения. Даже полная шкала опубликованной части не завершает весь топик, не доказывает качество речи/письма и не отменяет отложенную проверку.

## Примеры с разбором

- **Latency fell from 200 ms to 160 ms.** — Задержка снизилась с 200 до 160 ms. From/to называют уровни.
- **It fell by 40 milliseconds.** — Она снизилась на 40 ms. By — величина изменения.
- **The mean is twenty percent lower.** — Среднее на двадцать процентов ниже. База — прежние 200 ms.
- **The error proportion fell to one percent.** — Доля ошибок снизилась до одного процента. To — итог.
- **It fell by one percentage point.** — Она снизилась на один процентный пункт. 2% → 1%.
- **That is a fifty-percent relative reduction.** — Это относительное снижение на пятьдесят процентов. Один пункт / исходные два.
- **Successful throughput rose from 98 to 99 responses per second.** — Успешная пропускная способность выросла с 98 до 99 ответов в секунду. Не offered traffic.
- **Attempted traffic remained at 100 requests per second.** — Поток попыток остался 100 запросов в секунду. Оба runs, errors отдельно.
- **Half a second is 500 milliseconds.** — Полсекунды — 500 миллисекунд. Точный пересчёт единиц.
- **The sample contains forty read responses.** — Выборка содержит сорок ответов чтения. Не сорок людей.
- **The mean fell, whereas p95 rose.** — Среднее снизилось, а p95 вырос. Метрики могут расходиться.
- **The candidate missed the p95 limit.** — Кандидат не выполнил ограничение p95. Значение 700 ms превышает включающий предел 600 ms.
- **The limit is no greater than 600 ms.** — Лимит — не больше 600 ms. Граница включена.
- **This percentile is not the maximum.** — Этот перцентиль не максимум. Разные summaries.
- **The chart includes successful responses only.** — График включает только успешные ответы. Population ограничена.
- **Error-response latency was not supplied.** — Задержку ошибочных ответов не предоставили. Не доказанное отсутствие задержки.
- **There were fewer errors in the candidate run.** — В запуске кандидата было меньше ошибок. Fewer + countable plural.
- **The number of errors has fallen.** — Число ошибок снизилось. Главное слово number единственное, поэтому has.
- **More memory was used by the candidate.** — Кандидат использовал больше памяти. Mass noun и пассив.
- **Both runs started after warm-up.** — Оба запуска начались после прогрева. Не cold-start result.
- **The workloads were different.** — Нагрузки различались. Ограничение сравнения.
- **The trace does not identify the root cause.** — Трасса не устанавливает первопричину. Observation не diagnosis.
- **A cache hit does not prove current data.** — Попадание в кэш не доказывает актуальность данных. Hit не freshness.
- **The lookup table uses a separate denominator.** — Таблица lookups использует другой знаменатель. 5000 не 6000.
- **The entry was evicted from the cache.** — Запись вытеснили из кэша. Не обязательно удалили источник.
- **The invalidation event was logged.** — Событие invalidation записали в журнал. Не delivery всем caches.
- **The configured lifetime is 300 seconds.** — Настроенное время жизни — 300 секунд. Не измеренная задержка обновления.
- **A shorter lifetime has only been proposed.** — Меньшее время жизни лишь предложено. Not implemented/tested.
- **Five of six changes appeared within thirty seconds.** — Пять из шести изменений появились в пределах тридцати секунд. Точный count и criterion.
- **The sixth took fifty-five seconds.** — Шестое заняло пятьдесят пять секунд. Известный mismatch.
- **The next read returned the previous value.** — Следующее чтение вернуло прежнее значение. Meadow same-session contract.
- **Other-session behaviour is unspecified.** — Поведение другой сессии не задано. Unknown, не автоматический fail.
- **The final observation was not collected.** — Финальное наблюдение не собрали. Не доказанный timeout.
- **Could you clarify which responses the summary includes?** — Уточни, какие ответы включены в сводку. Обычный встроенный порядок.
- **If the workload changes, we will repeat the measurement.** — При изменении нагрузки повторим измерение. Present после if.
- **Even if the mean improves, the freshness rule still applies.** — Даже при улучшении среднего правило свежести сохраняется. Условие не стирает constraint.
- **We propose measuring error latency separately.** — Предлагаем измерить задержку ошибок отдельно. Propose + -ing.
- **Nia agreed to review the conditions.** — Nia согласилась проверить условия. Не rollout ownership.
- **Bo offered to inspect the trace without giving a date.** — Bo предложил посмотреть трассу без обещания даты. Offer и deadline различаются.
- **Please repeat the value with its unit.** — Повтори значение с единицей. Адресный repair.
- **Although the mean and error proportion improved, the candidate missed both the p95 and update-visibility criteria.** — Хотя среднее и доля ошибок улучшились, кандидат не выполнил p95 и видимость обновления. Сложная уступка с несколькими независимыми свойствами.
- **Until the missing observation is collected, we cannot describe that probe as either successful or failed.** — Пока отсутствующее наблюдение не получено, нельзя назвать эту пробу успешной или неуспешной. Сложное ограничение знания, не обещание собрать данные.

## Формы: числа, сравнения и уточнение

1. **Краткий ответ:** The number of errors ___ fallen. (has/have)
2. **Краткий ответ:** The mean fell ___ 200 to 160 ms. (from/by)
3. **Краткий ответ:** The mean fell ___ 40 ms. (by/to; величина изменения)
4. **Краткий ответ:** There were ___ errors. (fewer/less; нейтральная учебная модель)
5. **Краткий ответ:** The candidate used ___ memory. (more/many)
6. **Краткий ответ:** Could you clarify which requests the log ___? (includes/does include; нейтрально, без усиления)
7. **Краткий ответ:** We propose ___ again. (measuring/to measure)
8. **Краткий ответ:** If the workload ___, we will repeat the run. (changes/will change)
9. **Развёрнутый ответ:** Исправь The number of responses have rose. Объясни две формы.
10. **Развёрнутый ответ:** Перепиши The latency fell to 40 ms, from 200 to 160. Сохрани числа.
11. **Развёрнутый ответ:** Построй пассив: The team measured successful responses after warm-up.
12. **Развёрнутый ответ:** Сравни not all observations were collected и no observations were collected.
13. **Развёрнутый ответ:** Соедини Elm mean/p95 через although и whereas двумя предложениями.
14. **Развёрнутый ответ:** Построй прямой и встроенный вопрос о неизвестном denominator.
15. **Развёрнутый ответ:** Переведи: «Даже если hit proportion выросла, это не доказывает свежесть всех записей».
16. **Развёрнутый ответ:** Опиши вымышленное изменение во времени через fell yesterday и has fallen since Monday.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: has. Главное слово number единственное.
2. Ключ: from. Исходное значение.
3. Ключ: by. Не конечный уровень.
4. Ключ: fewer. Countable plural.
5. Ключ: more. Memory здесь mass noun.
6. Ключ: includes. Embedded order без вопросительной инверсии.
7. Ключ: measuring. Propose + -ing в данной модели.
8. Ключ: changes. Обычное условие с Present.
9. Возможный образец (не единственный ответ): The number of responses has risen.. Number + has; rise–rose–risen, не past после has.
10. Возможный образец (не единственный ответ): Latency fell by 40 ms, from 200 to 160 ms.. By/to различают изменение и итог.
11. Возможный образец (не единственный ответ): Successful responses were measured after warm-up.. Сохранить population и условие; иной ясный вариант допустим.
12. Возможный образец (не единственный ответ): Не все против ни одного; нельзя заменять частичный набор отсутствием всех данных.. Отрицание меняет evidence.
13. Возможный образец (не единственный ответ): Although the mean fell, p95 rose. The mean fell, whereas p95 rose.. Оба факта сохранены, не because.
14. Возможный образец (не единственный ответ): Which lookups does this include? Could you clarify which lookups this includes?. Различить порядок, не угадывать population.
15. Возможный образец (не единственный ответ): Even if the hit proportion has increased, that does not establish that all entries are current.. Сохранить even if/not all scope, открытый ответ ручной.
16. Возможный образец (не единственный ответ): Два собственных предложения с finished time и незавершённой рамкой.. Не реальные результаты ученика или сервиса.

</details>

## Метрики, единицы и процентные изменения

1. **Краткий ответ:** 600 successful responses за 60 sec: responses/s? Число.
2. **Краткий ответ:** 0.08 sec в milliseconds? Число.
3. **Краткий ответ:** Elm 2% → 1%: снижение в percentage points? Число.
4. **Краткий ответ:** Elm 2% → 1%: относительное снижение в процентах? Число.
5. **Краткий ответ:** Elm 200 → 160 ms: снижение в процентах от 200? Число.
6. **Краткий ответ:** p95=700 ms при ceiling 600 соответствует критерию? yes/no.
7. **Развёрнутый ответ:** Вычисли Elm success throughput обоих runs, сохрани units и окно.
8. **Развёрнутый ответ:** Hit proportion 80% → 90%: сообщи points и relative increase.
9. **Развёрнутый ответ:** Memory 300 →450 MiB: absolute и relative change; что не измерено этим?
10. **Развёрнутый ответ:** Почему mean 160 и p95 700 не противоречат друг другу?
11. **Развёрнутый ответ:** Учебный ряд 20 значений, nearest-rank p95 — какое по порядку? Что с ties?
12. **Развёрнутый ответ:** Percentile отображён для 40 responses. Можно сказать ровно один процент 40 users был медленным?
13. **Развёрнутый ответ:** Составь comparison table Elm: attempts/success/errors/mean/p95/memory, единицы и scope.
14. **Развёрнутый ответ:** Почему 5000 cache lookups нельзя автоматически включить в 6000 attempts?
15. **Развёрнутый ответ:** Новый Fern sample:20 errors из 1000 attempts; после изменения 30 из 3000. Сравни count/proportion.
16. **Развёрнутый ответ:** Нулевая baseline error proportion и новая 1%: как сообщить изменение без деления на ноль?
17. **Развёрнутый ответ:** Напиши 80–110 слов о разных направлениях Elm metrics для нетехнического читателя.
18. **Развёрнутый ответ:** Исправь заголовок Every request is 20% faster after caching.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 10. 600 responses / 60 seconds = 10 responses per second.
2. Ключ: 80. Умножить на 1000.
3. Ключ: 1. Разность процентных долей: два минус один процентный пункт.
4. Ключ: 50. Один / исходные два.
5. Ключ: 20. Снижение 40 ms делится на исходные 200 ms: 20%.
6. Ключ: no. Значение 700 ms превышает включающий предел 600 ms.
7. Возможный образец (не единственный ответ): 5880/60=98 и 5940/60=99 responses/s; attempts 100/s отдельно.. Не 5880 users и не безусловная capacity.
8. Возможный образец (не единственный ответ): 10 percentage points; 12.5 percent relative increase.. База 80, не 90; грамматическое объяснение вручную.
9. Возможный образец (не единственный ответ): 150 MiB increase, 50% relative; not total cost/CPU/network.. Сохранить MiB, не переименовывать MB.
10. Возможный образец (не единственный ответ): Среднее и положение верхней части распределения отвечают разным вопросам; нельзя восстановить raw values из двух summaries.. Не объявлять p95 maximum.
11. Возможный образец (не единственный ответ): 19-е отсортированное; как минимум 19/20 не больше него, может быть больше при ties.. Явно заданный метод, не универсальная формула любого инструмента.
12. Возможный образец (не единственный ответ): Нет: responses не users; estimation/interpolation/ties и маленькая выборка не дают такого точного счёта.. Не выдумывать метод Meadow.
13. Возможный образец (не единственный ответ): 6000 both; 5880/5940 success; 120/60 errors; 200/160 ms mean; 500/700 ms p95; 300/450 MiB.. Разные rows, не складывать показатели.
14. Возможный образец (не единственный ответ): Разные выборки и единицы, связь не задана; hit proportion отдельна.. Не «11000 пользователей».
15. Возможный образец (не единственный ответ): Count вырос 20→30, proportion снизилась 2%→1%; оба факта совместимы.. Не просто «errors decreased» без указания показателя.
16. Возможный образец (не единственный ответ): Increase of one percentage point; usual relative percentage change from zero undefined.. Не infinity как измеренный normal gain.
17. Возможный образец (не единственный ответ): Понятный текст с двумя улучшениями, p95/visibility misses и ограниченным выводом.. Образец не единственная формулировка; не скрывать tails.
18. Возможный образец (не единственный ответ): Mean successful-response latency is 20% lower in the stated run; no every-request claim.. Не причинный или универсальный вывод из агрегата.

</details>

## Кэширование, свежесть и согласованность чтения

1. **Краткий ответ:** Elm configured lifetime в секундах? Число.
2. **Краткий ответ:** Elm committed-update visibility limit в секундах? Число.
3. **Краткий ответ:** Elm candidate late update в секундах? Число.
4. **Краткий ответ:** Предложенные 20 seconds уже tested lifetime? yes/no.
5. **Развёрнутый ответ:** Объясни hit/miss без обещания «актуальные/неактуальные данные».
6. **Развёрнутый ответ:** Сравни eviction и deletion from primary store на собственном примере.
7. **Развёрнутый ответ:** Раздели generation/delivery/processing invalidation event.
8. **Развёрнутый ответ:** Почему 300-second TTL и 55-second delay не одна величина?
9. **Развёрнутый ответ:** Может ли shorter TTL считаться проверенным fix без implementation/run?
10. **Развёрнутый ответ:** Запиши Elm freshness rule как событие → читатель → предел → ожидаемое.
11. **Развёрнутый ответ:** Запиши Meadow rule теми же четырьмя элементами.
12. **Развёрнутый ответ:** Other-session rule неизвестно: создай два вопроса и одно ограничение вывода.
13. **Развёрнутый ответ:** Eventual visibility без числа гарантирует within 30 seconds? Объясни.
14. **Развёрнутый ответ:** HTTP-fresh response обязательно последняя запись приложения?
15. **Развёрнутый ответ:** Новый Iris brief: stale value разрешено при network error и явной отметке age. Что нужно проверить?
16. **Развёрнутый ответ:** Новый Moss read: two clients see different values в разные моменты, контракт не дан. Составь bounded conclusion.
17. **Развёрнутый ответ:** Willow: one late probe и one stopped collection. Сопоставь статусы.
18. **Развёрнутый ответ:** Напиши 100–140 слов запроса о неизвестном cache key/invalidation scope, не назначая новую политику.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 300. Это настройка, не measured delay.
2. Ключ: 30. От commit, не от открытия отчёта.
3. Ключ: 55. Один известный mismatch.
4. Ключ: no. Не реализовано/не проверено.
5. Возможный образец (не единственный ответ): Found reusable entry under cache rules versus no such cached response; freshness requires its own criterion.. Miss не продуктовая ошибка по определению.
6. Возможный образец (не единственный ответ): Удаление копии из cache не обязательно удаление исходной записи; явно вымышленная ситуация.. Не выполнять удаление в реальном профиле.
7. Возможный образец (не единственный ответ): Записанный event подтверждает свой этап, не обработку всеми копиями.. Elm причина late update неизвестна.
8. Возможный образец (не единственный ответ): Настроенный lifetime и измеренное commit-to-visibility время имеют разные события и смысл.. Не считать меньше TTL автоматически business compliant.
9. Возможный образец (не единственный ответ): Нет; proposed setting отдельно, нужны end-to-end observations и последствия.. Не обещать 20-second visibility автоматически.
10. Возможный образец (не единственный ответ): Committed description update; browsing clients; within 30 seconds; updated description visible.. Не Meadow next-read promise.
11. Возможный образец (не единственный ответ): Acknowledged successful save; writer same session; next read; saved value.. Не добавлять 30-second grace period.
12. Возможный образец (не единственный ответ): Which readers/sessions are covered? What should they see after acknowledgement? Other-session outcome cannot be graded without rule.. Same-session known mismatch всё ещё mismatch.
13. Возможный образец (не единственный ответ): Нет; eventual не задаёт в этой формулировке явную верхнюю границу.. Не выдумывать полную consistency model.
14. Возможный образец (не единственный ответ): Нет; HTTP freshness по протоколу не автоматически проверка последнего business state.. RFC 9111 не все application caches.
15. Возможный образец (не единственный ответ): Error condition, actual age/label and scoped permission; no blanket permission to serve stale in every case.. Не переносить правило в Elm или реальные сервисы.
16. Возможный образец (не единственный ответ): Different observations known; need times/write order/reader contract before defect classification.. Не universal proof of inconsistency bug.
17. Возможный образец (не единственный ответ): 3-second probe violates 2-second rule; stopped observation unknown, not confirmed app timeout/data loss.. Сохранить и failure, и неизвестность.
18. Возможный образец (не единственный ответ): Конкретные вопросы о разделении данных/читателей, event handling и ожидаемом результате; пометка неизвестного.. Не реальные credentials или персональные данные.

</details>

## Условия сравнения и сила вывода

1. **Краткий ответ:** Elm runs проверяют cold-cache behaviour? yes/no.
2. **Краткий ответ:** 6000 requests означают 6000 unique people? yes/no.
3. **Краткий ответ:** Logged event доказывает root cause? yes/no.
4. **Краткий ответ:** Proposal to add worker означает worker added? yes/no.
5. **Развёрнутый ответ:** Назови Elm controlled stated conditions и две непроверенные области.
6. **Развёрнутый ответ:** Почему candidate mean улучшилась не значит caching proved universal benefit?
7. **Развёрнутый ответ:** CPU не измеряли: можно объявить CPU bottleneck или spare capacity?
8. **Развёрнутый ответ:** Предложи follow-up plan с отдельными performance и visibility observations.
9. **Развёрнутый ответ:** Раздели Nia accepted action и Bo offer/no date.
10. **Развёрнутый ответ:** Перепиши Cache fixed, если известно только proposed 20-second lifetime.
11. **Развёрнутый ответ:** Новый Pine A warm/B cold и разные datasets: что можно сравнить?
12. **Развёрнутый ответ:** Почему one run не confidence interval или production capacity?
13. **Развёрнутый ответ:** Напиши сильное возражение rollout со справедливым признанием gains 100–140 слов.
14. **Развёрнутый ответ:** Сформулируй 3 условия пересмотра твоей рекомендации.
15. **Развёрнутый ответ:** Партнёр говорит one unknown значит all wrong. Исправь по Willow.
16. **Развёрнутый ответ:** Составь handover 100–140 слов о фактах и принятых действиях Elm.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Оба после warm-up.
2. Ключ: no. Requests и unique people — разные счётные единицы.
3. Ключ: no. Нужны другие свидетельства.
4. Ключ: no. Статус действия сохраняется.
5. Возможный образец (не единственный ответ): Same machine/fixture/mix/50 virtual clients/60 sec/warm-up; cold cache/higher load/other machines untested.. Не «полностью одинаковые все условия мира».
6. Возможный образец (не единственный ответ): Один scope, p95/visibility/memory trade-offs, unknown broader behaviour.. Не отрицать само снижение mean.
7. Возможный образец (не единственный ответ): Ни то ни другое; need measurement and causal investigation.. Unknown не доказательство отсутствия проблемы.
8. Возможный образец (не единственный ответ): Comparable setup/repeats/error latency plus committed-write visibility and invalidation trace; proposed not executed.. Не заранее all passed.
9. Возможный образец (не единственный ответ): Nia review conditions; Bo offers inspect trace; no rollout ownership or agreed completion date.. Offer не уже completed trace analysis.
10. Возможный образец (не единственный ответ): A twenty-second lifetime has been proposed; implementation and end-to-end results are not available.. Не стирать факт предложения.
11. Возможный образец (не единственный ответ): Report values with conditions; isolate controlled effect only after suitable comparable run.. Не автоматически бессмысленны все observations.
12. Возможный образец (не единственный ответ): Нет заданной статистической модели/повторов/диапазона нагрузки; report bounded sample.. Не вычислять выдуманную certainty.
13. Возможный образец (не единственный ответ): I agree that the lower mean and error proportion are useful improvements. Nevertheless, the candidate misses two stated criteria in the available evidence: successful-response p95 exceeds its limit, and one update appears too late. These are not interchangeable measurements. The higher hit proportion cannot settle either issue, because finding a cache entry does not establish the latency distribution or the age of its underlying data. I would support a controlled follow-up, not an immediate rollout. Could you explain how the next comparison will preserve the workload and distinguish an observed symptom from a suspected cause? Your answer should identify evidence still needed, not announce a fix in advance.. Иной обоснованный текст допустим, не root-cause invention.
14. Возможный образец (не единственный ответ): New comparable tail/visibility results, agreed reader scope, missing measurements; будущие условия.. Не считать их уже выполненными.
15. Возможный образец (не единственный ответ): Six visibility passes, one known late, one unknown; retain each status.. Не смешивать probe outcome с latency summaries.
16. Возможный образец (не единственный ответ): Elm note 8 remains an investigation request, not a release approval. Please keep the mean, p95, successful throughput, errors and update probes separate. The candidate's mean improves, but its p95 and one update delay miss the agreed limits. The cache-hit table uses a different denominator and does not prove freshness. A twenty-second lifetime is only proposed in this comparison. Nia will review the comparison conditions, and Bo has offered to inspect the invalidation trace without an agreed completion date. Neither has accepted a rollout role. Preserve the missing CPU, network and error-latency measurements as unknown until new evidence is available.. Не фиктивный release date или назначенный owner.

</details>

## Чтение: Elm и несовпадающие показатели

Elm Catalogue: a faster mean is not the whole result

Elm Catalogue is a fictional training application for browsing synthetic product descriptions. Comparison note 8 concerns baseline c17 and candidate c18 of version 1.7. The candidate changes the application cache; the note is a request for further investigation, not permission to deploy. A new developer has been asked to explain what changed, which requirements were checked and what the figures cannot establish.

Both measured runs lasted sixty seconds. The fixture contained ten thousand synthetic records, and the team used the same machine, fifty virtual clients and the same request mix. Both runs began after a documented warm-up. Each run recorded six thousand attempted requests. This is a comparison under that setup, not a test of a cold cache, a different machine or an unlimited workload. Virtual clients are not necessarily distinct people.

The baseline recorded 5,880 successful responses and 120 errors. The candidate recorded 5,940 successful responses and 60 errors. Successful throughput was therefore 98 responses per second for the baseline and 99 for the candidate. Attempted traffic was 100 requests per second in both runs. The error proportion fell from two percent to one percent: a reduction of one percentage point, or fifty percent relative to the baseline error proportion. These two descriptions express different calculations, not contradictory results.

The latency summaries include successful responses only. Their mean fell from 200 milliseconds to 160 milliseconds, a twenty-percent decrease. However, the reported ninety-fifth percentile rose from 500 milliseconds to 700 milliseconds. A lower mean and a worse upper percentile can coexist. The agreed latency criterion was a successful-response p95 no greater than 600 milliseconds under this setup, so the baseline met that criterion and the candidate did not. The error-response latency was not included in these summaries and was not supplied separately. Fast errors must not silently improve the apparent speed of useful responses.

The note also reports a separate set of five thousand cache lookups for each configuration: the hit proportion rose from eighty to ninety percent. Those lookups are not the same denominator as the six thousand attempted requests. A hit means the lookup found a reusable entry under the application's cache rules. It does not independently prove that the displayed description reflects the latest committed update. The cache entries have a configured lifetime of 300 seconds, but this configuration is not an observed end-to-end update delay.

The product rule requires a committed description change to become visible to browsing clients within thirty seconds. In six separate update probes, all six baseline changes were visible within that limit. Five candidate changes were visible within it, while the sixth took fifty-five seconds. These probes are separate from the load-run requests and must not be added to their error totals. One invalidation event appears in the log, but there is no evidence that every relevant cache received and acted on it. The precise cause of the late update remains unconfirmed.

Candidate memory use was 450 MiB compared with 300 MiB for the baseline. That is a fifty-percent increase in the recorded measure, not a measurement of every infrastructure cost. CPU use and network delay were not measured. The team has proposed shortening the cache lifetime to twenty seconds, but has not implemented or tested that change. Even a shorter lifetime would need an end-to-end check; configuration alone cannot close the freshness issue.

Nia agrees to review the comparison conditions. Bo offers to inspect the invalidation trace, but no completion date is agreed. Neither accepts ownership of a production rollout. The next investigation should keep response latency, successful throughput, errors and update visibility separate, obtain the missing measurements and repeat relevant checks under explicit conditions. The recommendation remains conditional. A favourable average cannot erase the observed p95 and visibility mismatches, while those mismatches do not prove that caching is always unsuitable.

1. **Краткий ответ:** Elm comparison note number? Число.
2. **Краткий ответ:** Сколько seconds длится каждый run? Число.
3. **Краткий ответ:** Сколько attempted requests в каждом run? Число.
4. **Краткий ответ:** Candidate reported p95 в milliseconds? Число.
5. **Развёрнутый ответ:** Сформулируй вопрос сравнения и status документа 2–3 предложениями.
6. **Развёрнутый ответ:** Перечисли setup так, чтобы другой разработчик понял область числа.
7. **Развёрнутый ответ:** Восстанови success/error counts и покажи denominators.
8. **Развёрнутый ответ:** Покажи два способа описать error proportion change.
9. **Развёрнутый ответ:** Какие latency summaries улучшились/ухудшились и какой threshold задан?
10. **Развёрнутый ответ:** Какую latency population исключили и что о ней известно?
11. **Развёрнутый ответ:** Почему higher hit proportion нельзя назвать all data current?
12. **Развёрнутый ответ:** Сравни шесть update probes обоих вариантов.
13. **Развёрнутый ответ:** Объясни 300/55/20 seconds в трёх строках.
14. **Развёрнутый ответ:** Что именно позволяет сказать invalidation log?
15. **Развёрнутый ответ:** Что Nia/Bo приняли или предложили, какие обещания отсутствуют?
16. **Развёрнутый ответ:** Напиши summary 120–160 слов с balanced recommendation и двумя open questions.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 8. Version 1.7 и note 8 разные поля.
2. Ключ: 60. Не длительность прохождения урока.
3. Ключ: 6000. Успешные responses меньше attempts.
4. Ключ: 700. Не mean 160 и не threshold 600.
5. Возможный образец (не единственный ответ): Compare c17/c18 under documented warm setup; investigation request, not rollout approval.. Не выдумывать выполненный fix.
6. Возможный образец (не единственный ответ): Same machine, 10000 synthetic records, 50 virtual clients, request mix, warm-up, 60 sec, 6000 attempts.. Не claiming complete reproducibility без прочих сведений.
7. Возможный образец (не единственный ответ): 5880+120=6000; 5940+60=6000; success 98/99 per second, errors 2%/1%.. Объяснить единицы, не люди.
8. Возможный образец (не единственный ответ): One percentage point decrease or fifty-percent relative reduction from 2% to 1%.. Не by 1% relative.
9. Возможный образец (не единственный ответ): Mean 200→160; p95 500→700; p95≤600; candidate fails that criterion.. Не criterion для каждого individual request.
10. Возможный образец (не единственный ответ): Error responses excluded; their latency unavailable separately.. Не zero or guaranteed fast.
11. Возможный образец (не единственный ответ): Separate 5000 lookups; cache-rule hit not application update visibility.. Не тот denominator и не нужное свойство.
12. Возможный образец (не единственный ответ): Baseline 6 within 30; candidate 5 within 30/one 55 seconds; separate sample.. Не прибавлять late probe к 60 errors нагрузочного run.
13. Возможный образец (не единственный ответ): Configured lifetime/observed late visibility/proposed shorter lifetime.. Не три измеренных версии одного исправления.
14. Возможный образец (не единственный ответ): Event logged; all-cache delivery/processing and precise cause not established.. Не доказанный потерянный event.
15. Возможный образец (не единственный ответ): Review conditions accepted; inspect trace offered, no date; neither rollout owner.. Не превращать интерес команды в commitment отсутствующего человека.
16. Возможный образец (не единственный ответ): Связный текст с реальными gains, mismatches, scope и unknown.. Ручная проверка смысла, не совпадение строки.

</details>

## Аудирование: Meadow, единицы и чтение после записи

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Rina: Before we discuss the chart, can we confirm what this Meadow Notes prototype promises? It is version 2.2, build m6, and the user who receives a successful save acknowledgement must see that saved value on the next read in the same session. We have not agreed a thirty-second allowance for that reader.

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

Rina: Yes. Now explain which new observation would change your recommendation. Agreement on that summary is not evidence that the proposed routing already works.

</details>

1. **Развёрнутый ответ:** Прослушай Meadow без текста: какое правило проверяют? Отметь audio-first/text-supported.
2. **Развёрнутый ответ:** Какую чужую норму Jules сначала переносит и как Rina уточняет?
3. **Развёрнутый ответ:** Восстанови all five claim и исправленные counts.
4. **Развёрнутый ответ:** Какое число сохранилось при исправлении единицы?
5. **Развёрнутый ответ:** К какой выборке относится median 80 ms?
6. **Развёрнутый ответ:** Что известно о p99 и его методе?
7. **Развёрнутый ответ:** Сколько workers фактически и какой trial предложен?
8. **Развёрнутый ответ:** Как Jules поправляет своё fixed?
9. **Развёрнутый ответ:** Какой неожиданный вопрос о session возникает и каков ответ?
10. **Развёрнутый ответ:** Что Rina принимает и отчего отказывается?
11. **Развёрнутый ответ:** Что Luis предлагает и какой результат ещё неизвестен?
12. **Развёрнутый ответ:** Сделай собственный read-back 90–120 слов по финальному уточнению.
13. **Развёрнутый ответ:** После повторного прослушивания сохрани реальные 2–3 исправления или честно их отсутствие.
14. **Устная работа:** Партнёр даёт новое скрытое устное measurement message с самопоправкой. Перескажи и получи уточнение.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Writer same-session next read after successful save acknowledgement returns saved value.. Без звука самостоятельное listening не подтверждено.
2. Возможный образец (не единственный ответ): Thirty-second catalogue allowance rejected; different same-session next-read contract.. Не изменение договорённого требования Meadow.
3. Возможный образец (не единственный ответ): Four of five correct; one previous value after acknowledgement.. Не пять успехов и не потерянная запись.
4. Возможный образец (не единственный ответ): Eighty seconds→eighty milliseconds; 80 unchanged, unit changes 1000-fold.. Не eighty→eight.
5. Возможный образец (не единственный ответ): Forty successful read responses, separate from five checks; rejected writes not included.. Не forty users или полный latency всех действий.
6. Возможный образец (не единственный ответ): Reported 900 ms; estimation method unspecified; small sample needs context.. Не ровно 1% сорока людей.
7. Возможный образец (не единственный ответ): Two actual; three-worker trial proposed, no throughput figures.. Не doubling implemented или доказанный прирост.
8. Возможный образец (не единственный ответ): Drafted primary-read routing proposal; not implemented/tested.. Самопоправка статуса, не реальный fix.
9. Возможный образец (не единственный ответ): New-session read behaviour unspecified; ask expected behaviour.. Не automatic pass/fail для неописанного случая.
10. Возможный образец (не единственный ответ): Review check conditions, not implementation ownership/release date.. Сохранить оба ограничения.
11. Возможный образец (не единственный ответ): Ask who can provide test environment; access not promised ready.. Не supplying credentials or guaranteed date.
12. Возможный образец (не единственный ответ): 4/5 and 1 old, same session, 80 ms/40 responses, p99 method unknown, draft routing, limited actions.. Понимание не доказанное исправление продукта.
13. Возможный образец (не единственный ответ): Исходная запись и основание изменения, отдельно text-supported work.. Не придумывать ошибки для галочки.
14. Возможный образец (не единственный ответ): Реальное новое сообщение, ответ, read-back.. Без партнёра pending; без звука pronunciation/fluency unknown.

</details>

## Письмо: самостоятельный отчёт и полная редакция

Самостоятельное вымышленное досье Willow Preview, версия 3.0, comparison note 11 Draft. Нужно показывать сохранённое изображение в preview не позже 2 секунд после acknowledged save; лимит latency относится отдельно к p95 успешных preview reads: ≤400 ms. Baseline w4 и candidate w5 проверены на одной машине, одинаковых 200 synthetic images и request mix, после warm-up, по 120 секунд и 2400 attempted reads. Baseline: 2376 success / 24 errors, mean successful latency 180 ms, reported p95 350 ms. Candidate: 2352 success / 48 errors, mean 120 ms, reported p95 480 ms. Success throughput 19.8/19.6 reads per second; offered traffic 20/s у обоих. Error latency и cold start не измеряли. Отдельные восемь save-to-preview probes: baseline 8 в пределах 2 sec; candidate 6 в пределах, один 3 sec, один не дал финального наблюдения из-за остановленного сбора данных. Последний unknown, не доказанный timeout приложения или потеря изображения. Candidate lookup hit proportion 95% из отдельного журнала 1000 lookups; baseline hit proportion не дан, нельзя утверждать рост. Конфигурация refresh 1 sec предложена, не применена и не проверена; event delivery не исследовали. Memory 100/140 MiB; CPU не записан. Причина ухудшений не подтверждена. Lea принимает review wording отчёта, не implementation. Команда согласовала повторное измерение с проверкой условий, не release. Нужны полный отчёт/рекомендация и отдельная полная редакция по реальному отзыву. Реальные пользовательские изображения, credentials и внешние сервисы не использовать.

Полные авторские модели Elm для анализа, не ответы на Willow:

REPORT

Elm comparison note 8: keep speed and data visibility separate

Status: investigation requested. This report compares c17 and c18 of Elm Catalogue 1.7 under one documented warm-cache setup. It does not approve a production release or establish behaviour under other workloads.

Each sixty-second run used the same machine, ten thousand synthetic records, fifty virtual clients and the same request mix. Each recorded six thousand attempted requests. The baseline returned 5,880 successful responses and 120 errors; the candidate returned 5,940 successful responses and 60 errors. Successful throughput increased from 98 to 99 responses per second, while attempted traffic remained 100 requests per second. The error proportion decreased from two percent to one percent, which is one percentage point or a fifty-percent relative reduction.

Successful-response mean latency fell from 200 to 160 milliseconds. However, reported p95 latency rose from 500 to 700 milliseconds. The candidate therefore missed the agreed p95 limit of 600 milliseconds despite its lower mean. Error-response latency was not supplied separately, so this report does not claim that error handling became faster.

Data visibility provides another reason to withhold an unqualified recommendation. Six separate update probes checked whether a committed change appeared within thirty seconds. All six baseline probes met the limit; five candidate probes met it, while one took fifty-five seconds. This is an observed mismatch, not proof of data loss or a confirmed diagnosis of the invalidation mechanism. A logged event alone does not establish that every relevant cache acted on it.

The higher cache-hit proportion uses a separate lookup denominator and cannot replace the visibility checks. Candidate memory use was 450 MiB rather than 300 MiB. CPU and network measurements are missing, and a proposed twenty-second lifetime has not been tested. Neither a high hit proportion nor a short configured lifetime proves current application data.

I recommend investigating the latency tail and the late update while preserving comparable conditions. Nia will review those conditions; Bo has offered to inspect the trace without an agreed completion date. The next report should include missing measurements and actual repeat results. Until then, the findings support a bounded investigation, not deployment approval or a general claim that caching is either beneficial or harmful.

COMPARISON

The candidate improves some Elm measures and worsens others. Successful throughput increases from 98 to 99 responses per second, and the error proportion falls from two percent to one percent. Mean successful-response latency also falls, from 200 to 160 milliseconds. These are useful observations under the documented warm-cache setup.

However, p95 latency increases from 500 to 700 milliseconds and exceeds the agreed 600-millisecond limit. One of six candidate update probes also misses the thirty-second visibility requirement. The lower mean does not cancel either mismatch. Nor does the higher hit proportion establish that every displayed description is current.

Both runs use six thousand attempted requests, but the update probes and cache lookups belong to separate samples. Memory rises from 300 to 450 MiB, while CPU and network data are absent. We therefore cannot identify the bottleneck or calculate total operating cost from this table.

I would continue the investigation with explicit conditions and separate measures. Shortening the lifetime is a proposal that needs implementation and end-to-end evidence. The present figures justify neither an unconditional rollout nor a claim that every possible cached design must fail.

CLARIFICATION

Could you clarify the exact population used for the latency summary? The table labels the mean and p95 as successful responses, but does not provide error-response latency. Please confirm the collection window, cache warm-up and percentile estimation method before we compare later runs. We also need the update-visibility probe timestamps measured from committed writes, rather than the time when someone opened the report. I am not asking you to invent missing values or to treat a cache hit as a freshness check. If a measurement was not collected, please mark it as unavailable and specify what a new run would need to record.

OBJECTION

I agree that the lower mean and error proportion are useful improvements. Nevertheless, the candidate misses two stated criteria in the available evidence: successful-response p95 exceeds its limit, and one update appears too late. These are not interchangeable measurements. The higher hit proportion cannot settle either issue, because finding a cache entry does not establish the latency distribution or the age of its underlying data. I would support a controlled follow-up, not an immediate rollout. Could you explain how the next comparison will preserve the workload and distinguish an observed symptom from a suspected cause? Your answer should identify evidence still needed, not announce a fix in advance.

HANDOVER

Elm note 8 remains an investigation request, not a release approval. Please keep the mean, p95, successful throughput, errors and update probes separate. The candidate's mean improves, but its p95 and one update delay miss the agreed limits. The cache-hit table uses a different denominator and does not prove freshness. A twenty-second lifetime is only proposed in this comparison. Nia will review the comparison conditions, and Bo has offered to inspect the invalidation trace without an agreed completion date. Neither has accepted a rollout role. Preserve the missing CPU, network and error-latency measurements as unknown until new evidence is available.

REVISION

Revised Elm comparison note 8: an investigation with explicit evidence limits

Status remains investigation requested. The comparison concerns Elm Catalogue 1.7, baseline c17 and candidate c18. This revision separates performance, data visibility and the status of proposed work; it does not report an implemented fix.

The two measured runs used the same machine, request mix, ten thousand synthetic records and fifty virtual clients. Both followed warm-up, lasted sixty seconds and recorded six thousand attempts. These conditions support a bounded comparison, not a claim about cold-cache behaviour or arbitrary scale. Virtual clients and requests must not be relabelled as distinct people.

The baseline produced 5,880 successful responses and 120 errors; the candidate produced 5,940 successful responses and 60 errors. Successful throughput rose from 98 to 99 per second. Attempted traffic stayed at 100 per second. Errors fell from two percent to one percent: one percentage point, equivalent to a fifty-percent relative reduction. That reduction is not a claim that all requests succeeded.

For successful responses, the mean fell from 200 to 160 milliseconds, while reported p95 rose from 500 to 700 milliseconds. The candidate misses the agreed p95 ceiling of 600 milliseconds. Error-response latency remains unavailable, so no conclusion about its change is added. A favourable mean cannot establish that every part of the distribution improved.

Six separate probes tested whether committed changes became visible within thirty seconds. The baseline met the limit in all six; the candidate met it in five and took fifty-five seconds in the remaining probe. This identifies a visibility mismatch without proving data loss or a root cause. The logged invalidation event does not establish delivery and processing by every relevant cache.

The separate lookup hit proportion and the proposed shorter lifetime do not replace application-level checks. Memory increased from 300 to 450 MiB. CPU and network measurements are missing. I recommend comparable repeat measurements and investigation of the observed tail and visibility problems. Nia's accepted action is reviewing conditions; Bo's offer is inspecting the trace, without an agreed date. Any later recommendation should name the actual new evidence and unresolved requirements rather than convert a proposal into deployment approval.

1. **Развёрнутый ответ:** Прочитай шесть полных Elm models. Найди setup, units, population, comparison, limitation, next step.
2. **Развёрнутый ответ:** По Willow brief напиши полный comparison report 350–450 слов: setup, results, criteria, unknown, recommendation, next checks.
3. **Развёрнутый ответ:** Составь Willow таблицу metrics с units/denominators и кратким выводом.
4. **Развёрнутый ответ:** Напиши comparison 180–240 слов, объясняя changes без raw data invention.
5. **Развёрнутый ответ:** Составь clarification 100–140 слов о missing observation и cache measurement.
6. **Развёрнутый ответ:** Напиши objection 100–140 слов rollout, признав Willow mean improvement.
7. **Развёрнутый ответ:** Составь handover 100–140 слов: status, accepted action, requirements, unknown.
8. **Развёрнутый ответ:** Получи настоящий feedback на исходник 2. Сохрани цитаты и 2–3 решения.
9. **Развёрнутый ответ:** После отзыва сохрани полную редакцию Willow report 350–450 слов отдельным ответом.
10. **Развёрнутый ответ:** Сопоставь три места original/revision: цитата→редакция→причина.
11. **Развёрнутый ответ:** Напиши абзац о Willow errors: count, proportion, relative change, points.
12. **Развёрнутый ответ:** Напиши абзац о семи известных visibility outcomes и одном unknown.
13. **Развёрнутый ответ:** Объясни 95% candidate hits читателю без технической подготовки.
14. **Развёрнутый ответ:** Сократи свой report до 100–140 слов для следующей встречи.
15. **Развёрнутый ответ:** Запиши 3 условия, при которых пересмотришь рекомендацию, и каких данных потребуешь.
16. **Развёрнутый ответ:** Проверь свой текст: units/from-to-by/points/population/proposed-measured. Запиши реальные находки.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Точные цитаты и объяснение их функций.. Модели доступны до ввода, не угадывание структуры.
2. Возможный образец (не единственный ответ): Willow independent report: lower mean, but p95/errors/throughput worsen, 6 passes/one late/one unknown, proposed refresh only.. Не переносить Elm counts/thresholds; original отдельно.
3. Возможный образец (не единственный ответ): 2400 attempts; 2376/2352 success; 24/48 errors; 180/120 mean; 350/480 p95; 100/140 MiB.. Таблица помогает, не заменяет report.
4. Возможный образец (не единственный ответ): Success 19.8/19.6 per second, error 1%/2%, mean lower/p95 higher, memory greater; scope explicit.. Не фраза «всё стало быстрее».
5. Возможный образец (не единственный ответ): Уточнить collection stop, actual visibility, event path, lookup population; не invent app timeout.. Источник неопределённости обозначен.
6. Возможный образец (не единственный ответ): Lower mean useful; candidate p95 fails 400, known 3 sec visibility miss, one unknown, errors up.. Не отбрасывать удачный показатель и не скрывать drawbacks.
7. Возможный образец (не единственный ответ): Repeat agreed, Lea wording review, not implementation; trace/unknown probe missing.. Не release approved/owner/date.
8. Возможный образец (не единственный ответ): Фактический review и обоснованная реакция.. До обсуждения pending, не образец выданный за реального преподавателя.
9. Возможный образец (не единственный ответ): Цельный текст с исходными фактами и осмысленной редактурой; original 2 остаётся.. До feedback pending; changelog недостаточен.
10. Возможный образец (не единственный ответ): Реальные изменения грамматики, scope или структуры.. Не стирать прежний текст и не придумывать замечания.
11. Возможный образец (не единственный ответ): 24→48 of 2400; 1%→2%; one percentage point increase, 100% relative increase.. Не 50% снижение или 2 points.
12. Возможный образец (не единственный ответ): Six≤2 sec, one 3 sec, one unobserved; baseline eight≤2 sec.. Не 7/8 passes и не 8/8 failures.
13. Возможный образец (не единственный ответ): Entries found among 1000 lookups, not 95% fresh data; baseline hit figure missing.. Не заявлять рост относительно неизвестной baseline.
14. Возможный образец (не единственный ответ): Сохранить setup, criteria, mixed results, unknown, conditional recommendation.. Сокращение не убирает отрицание или неудобный показатель.
15. Возможный образец (не единственный ответ): New comparable p95/visibility/error evidence, actual refresh check, clear unknown outcome.. Будущие условия, не уже успех.
16. Возможный образец (не единственный ответ): Цитаты с исправлениями либо основания отсутствия ошибок.. Самопроверка не ручной балл и не mastery.

</details>

## Обсуждение измерений и неожиданных вопросов

1. **Устная работа:** Объясни latency и throughput партнёру на примере одного заказа и многих заказов. Он пересказывает.
2. **Устная работа:** Продиктуй изменение с 200 до 160 ms. Партнёр записывает from/to/by и переспрашивает.
3. **Устная работа:** Объясни изменение 2% → 1% через points и relative change. Партнёр задаёт неожиданный вопрос.
4. **Устная работа:** Сравни Elm mean и p95. Партнёр возражает: «Это невозможно».
5. **Устная работа:** Партнёр называет 6000 requests шестью тысячами пользователей. Уточни единицу и источник.
6. **Устная работа:** Произнеси в контексте fifteen/fifty, milliseconds/seconds, percent/percentage points. Партнёр записывает услышанное.
7. **Устная работа:** Защити ограниченное исследование Elm, признавая преимущества и проблемы. Получи два неизвестных вопроса.
8. **Устная работа:** Партнёр сообщает новое требование свежести. Уточни читателя, событие отсчёта и предел.
9. **Устная работа:** Назови Meadow eighty seconds, затем явно исправь единицу и попроси read-back.
10. **Устная работа:** Партнёр меняет Meadow на чтение в новой сессии. Объясни известное и неизвестное.
11. **Устная работа:** Объясни cache hit нетехническому партнёру; он спрашивает об актуальности.
12. **Устная работа:** Попроси партнёра взять задачу измерения; он принимает часть или отказывается. Согласуйте объём.
13. **Устная работа:** Защити Willow report перед партнёром, который считает неизвестную probe провалом.
14. **Устная работа:** Партнёр даёт скрытое новое аудио о смене нагрузки с самопоправкой. Перескажи до текста.
15. **Устная работа:** Представь план измерений; партнёр спрашивает о стоимости или CPU, которых нет в данных.
16. **Устная работа:** Заверши обсуждение read-back: показатели, требования, неизвестное и следующие действия.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Время отдельной операции и объём завершённой работы за интервал; реальный пересказ.. Не чтение двух заготовленных ролей.
2. Возможный образец (не единственный ответ): Исходный уровень, новый уровень, разность 40 ms и снижение 20%.. Реальное звучание; ASR similarity не оценка фонетики.
3. Возможный образец (не единственный ответ): Один процентный пункт, относительное снижение 50%; адресный ответ.. Необязательно согласие, обязательно уточнение понимания.
4. Возможный образец (не единственный ответ): Объяснить разные сводки распределения без выдуманных raw values.. Без звука pronunciation и fluency unknown.
5. Возможный образец (не единственный ответ): Requests не unique people; реальный вопрос и ответ.. Не приписывать понимание без пересказа.
6. Возможный образец (не единственный ответ): Фактические записи и уточнения при необходимости.. Нормативные UK/US допустимы.
7. Возможный образец (не единственный ответ): Реальные вопросы, ответы по evidence и ограничения.. Не универсальная победа или запрет кэширования.
8. Возможный образец (не единственный ответ): Неизвестная заранее реплика, адресные вопросы и фактический ответ.. Без партнёра pending.
9. Возможный образец (не единственный ответ): Eighty milliseconds; реальная самопоправка и пересказ.. Не менять число и не придумывать новый результат.
10. Возможный образец (не единственный ответ): Same-session rule известен, other-session rule не задан; нужен запрос.. Не автоматический pass или fail.
11. Возможный образец (не единственный ответ): Копия найдена; актуальность проверяется по отдельному правилу.. Не обещание, что копии всегда устарели.
12. Возможный образец (не единственный ответ): Реально принятое действие, открытые вопросы и срок; no agreement допустимо.. Не выдумывать owner.
13. Возможный образец (не единственный ответ): Разделить шесть успешных, одну позднюю и одну неизвестную; ответить на неожиданный follow-up.. Не отрицать известный поздний исход.
14. Возможный образец (не единственный ответ): Реальная audio-first попытка, затем отдельная сверка с источником.. При видимом тексте text-supported.
15. Возможный образец (не единственный ответ): Ограниченный ответ и точный запрос свидетельства.. Не выдумывать числа и не запускать реальные сервисы.
16. Возможный образец (не единственный ответ): Реальный пересказ и проверка понимания; партнёр вправе не согласиться с рекомендацией.. Монолог не подменяет взаимодействие.

</details>

## Смешанное повторение и отложенный перенос

1. **Краткий ответ:** The number of samples ___ increased. (has/have)
2. **Краткий ответ:** 400 successes за 20 seconds: successes/s? Число.
3. **Краткий ответ:** Errors 6% → 3%: относительное снижение в процентах? Число.
4. **Краткий ответ:** High hit proportion отменяет freshness requirement? yes/no.
5. **Развёрнутый ответ:** Новый Hazel: mean 50 ms, maximum 900 ms, p95 неизвестен. Можно восстановить p95?
6. **Развёрнутый ответ:** Новый Ivy допускает старое значение до пяти минут с отметкой возраста. Сравни с Meadow next read.
7. **Развёрнутый ответ:** Новый Oak: baseline cold, candidate warm, mean ниже. Напиши ограниченный вывод.
8. **Развёрнутый ответ:** Исправь The average have fell to 20 ms, from 100 to 80. Объясни смысл.
9. **Развёрнутый ответ:** Без модели напиши 100–140 слов плана сравнения Oak с двумя открытыми вопросами.
10. **Устная работа:** Партнёр добавляет Oak новый контракт читателя и неожиданный вопрос. Ответь и уточни границы.
11. **Развёрнутый ответ:** Через семь дней получи новый brief с другими показателями и напиши report 250–350 слов.
12. **Устная работа:** На отложенной проверке обсуди новый report и ответь на два неизвестных вопроса.
13. **Развёрнутый ответ:** В версии T04 с двумя подтемами полная шкала подтверждает весь топик и качество?
14. **Развёрнутый ответ:** После ручного разбора сохрани 2–3 реальных типа ошибок, адресную практику и новый контроль.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: has. Главное слово number единственное, поэтому has.
2. Ключ: 20. 400 successful responses / 20 seconds = 20 per second.
3. Ключ: 50. Три пункта, половина исходных 6%.
4. Ключ: no. Это разные свойства.
5. Возможный образец (не единственный ответ): Нет: распределение и метод не заданы; mean и maximum недостаточно.. Не усреднять 50 и 900 для p95.
6. Возможный образец (не единственный ответ): Разные контракты: Ivy даёт условное разрешение, Meadow требует сохранённое значение автору в той же сессии.. Не переносить допуск автоматически.
7. Возможный образец (не единственный ответ): Lower reported mean under different initial states; controlled code benefit not established.. Не объявлять все наблюдения фиктивными.
8. Возможный образец (не единственный ответ): The average has fallen by 20 ms, from 100 to 80 ms.. Has fallen и by; итог не 20 ms.
9. Возможный образец (не единственный ответ): Собственное предложение сравнимого setup, population, cache state и ограничений.. Не уже проведённый эксперимент.
10. Возможный образец (не единственный ответ): Реальная новая реплика, ответ и read-back.. Не придуманный диалог.
11. Возможный образец (не единственный ответ): Реальная дата, новые данные, самостоятельные выводы и явно названный источник.. До выполнения pending; не переименование Elm.
12. Возможный образец (не единственный ответ): Новая реальная речь, ответы и пересказ.. Без аудио pronunciation/fluency unknown; не автоматическое mastery.
13. Возможный образец (не единственный ответ): Нет: изменения схемы и оценки ещё не наполнены; ручная проверка и отсрочка отдельны.. Историческая версия публикации; не менять старые ответы при расширении.
14. Возможный образец (не единственный ответ): Фактические цитаты и основания; pending, если разбора нет.. Не фиктивный результат ученика.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** The number of failures ___ increased. (has/have)
2. **Краткий ответ:** Latency fell ___ 250 ms to 200 ms. (from/by)
3. **Краткий ответ:** We propose ___ the cold-cache run. (repeating/to repeat)
4. **Краткий ответ:** Could you clarify which responses the chart ___? (includes/does include; нейтрально, без усиления)
5. **Краткий ответ:** 250 ms → 200 ms: снижение в процентах от 250? Только число.
6. **Краткий ответ:** 4% → 3%: уменьшение в percentage points? Число.
7. **Краткий ответ:** 900 successful responses за 45 sec: successful responses per second? Число.
8. **Краткий ответ:** p95 no greater than 450 ms; measured 450 ms. Соответствует именно этой границе? yes/no.
9. **Краткий ответ:** Cache hit сам доказывает последнюю версию источника? yes/no.
10. **Краткий ответ:** Proposed refresh interval уже measured improvement? yes/no.
11. **Развёрнутый ответ:** Новое досье Rowan Downloads 1.1, note 5 Draft. Файл должен стать видимым ≤10 sec после publish; p95 successful downloads ≤450 ms. Runs r1/r2: same machine/fixture/warm-up, 40 sec, по 2000 attempts; 1980/1990 success, 20/10 errors. Mean success 100/80 ms; reported p95 450/420 ms. Error latency отсутствует. Отдельные четыре publish probes: r1 все ≤10 sec; r2 три ≤10 sec, один 14 sec. Cache hit proportion r2 70% в отдельной выборке, r1 не дан. Сравни известные результаты и оба требования.
12. **Развёрнутый ответ:** Rowan не задаёт поведение stale-on-error и других clients. Составь два вопроса, не объявляя неизвестное разрешённым.
13. **Развёрнутый ответ:** Rowan: Ivo предлагает inspect trace, команда agrees repeat; fix/deploy/owner/date не согласованы. Напиши status summary.
14. **Развёрнутый ответ:** Напиши полный Rowan comparison report 350–450 слов по 11–13: setup, units, results, requirements, unknown, recommendation и next checks.
15. **Развёрнутый ответ:** Вычисли Rowan success throughput и errors в процентах; объясни percent/points 2–3 предложениями.
16. **Устная работа:** Партнёр неожиданно спрашивает, почему r1 p95=450 не failure. Ответь и проверь read-back.
17. **Развёрнутый ответ:** Партнёр устно даёт новый measurement note с поправкой единицы и scope. До текста сохрани обе версии и итог.
18. **Развёрнутый ответ:** Уточни услышанный denominator и принятый next step. Сохрани ответ и summary 70–100 слов.
19. **Устная работа:** Защити Rowan recommendation; партнёр меняет видимость с 10 до 5 sec. Что можно и нельзя заключить по старому summary?
20. **Развёрнутый ответ:** Исправь The number of errors have fell by 1%. It dropped from 2% to 1%. Уточни обе меры изменения.
21. **Развёрнутый ответ:** Коллега объявляет все Rowan downloads быстрее из lower mean/p95. Ограничь вывод.
22. **Устная работа:** Попроси партнёра собрать missing measurements; он ограничивает scope или отказывается. Зафиксируй только реальный итог.
23. **Развёрнутый ответ:** Получи настоящий feedback на исходник 14, сохрани цитаты и 2–3 редакторских решения.
24. **Развёрнутый ответ:** После обсуждения сохрани полную редакцию Rowan report 350–450 слов отдельным ответом.
25. **Устная работа:** Устно поправь fourteen milliseconds на fourteen seconds для поздней Rowan probe; партнёр пересказывает значение.
26. **Развёрнутый ответ:** Новый Ash search: A p95 300 ms на 10 clients, B p95 250 ms на 2 clients; fixture различается. Составь сравнение без причинного вывода.
27. **Устная работа:** Партнёр задаёт неожиданный вопрос к Ash про mean или errors, которых нет. Ответь и запроси нужное свидетельство.
28. **Развёрнутый ответ:** Через семь дней получи новый не-download brief и напиши comparison report 250–350 слов с новыми данными.
29. **Развёрнутый ответ:** Почему 10/10 закрытых не заменяет качество полного отчёта, реальную речь и delayed application?
30. **Развёрнутый ответ:** После разбора выбери 2–3 реальных пробела, упражнения и новый материал контроля.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: has. Number — главное слово в единственном числе.
2. Ключ: from. From задаёт исходное значение.
3. Ключ: repeating. Propose + -ing в этой модели.
4. Ключ: includes. Встроенный вопрос без вопросительной инверсии.
5. Ключ: 20. 50/250 × 100, не 50%.
6. Ключ: 1. Разность процентных долей.
7. Ключ: 20. 900/45, это не unique users.
8. Ключ: yes. Включающая граница, не все требования системы.
9. Ключ: no. Наличие записи и актуальность различаются.
10. Ключ: no. Предложение не выполненная проверка.
11. Возможный образец (не единственный ответ): Both p95 meet inclusive limit; r2 mean/errors improve but one visibility miss. Hit increase unknown, not all-round success.. Не переносить Elm p95 failure или 30-second rule.
12. Возможный образец (не единственный ответ): Ask allowed stale use on error and reader scope; rules unresolved, known publish requirement remains.. Не изобретать real security/privacy policy.
13. Возможный образец (не единственный ответ): Draft report, repeat agreed, trace offer; cause/fix/release/owner/date unknown.. Не назначать Ivo implementation из offer.
14. Возможный образец (не единственный ответ): Самостоятельный полный отчёт: успех p95 обоих отдельно от одного visibility miss; нет выдуманного роста hit proportion.. Не копия Elm с заменой имени; original сохраняется отдельно.
15. Возможный образец (не единственный ответ): 49.5/49.75 successes/s; errors 1%/0.5%, reduction 0.5 percentage points or 50% relative.. Числа и языковое объяснение проверяются вручную; periods/commas допустимы по смыслу.
16. Возможный образец (не единственный ответ): Inclusive no greater than; реальная реплика и пересказ, не все требования пройдены.. Без звука pronunciation/fluency unknown; без диалога pending.
17. Возможный образец (не единственный ответ): Реальное hidden audio и точная исправленная величина с населением выборки.. При доступном тексте text-supported; без источника pending.
18. Возможный образец (не единственный ответ): Фактический новый ответ, units/scope/commitment, не выдуманные значения.. Повтор собственной записи не новая listening попытка.
19. Возможный образец (не единственный ответ): Старые ≤10 sec не устанавливают ≤5 для каждой пробы; late14 точно не проходит, нужны raw times.. Не выдумывать точные времена трёх других probes.
20. Возможный образец (не единственный ответ): The number of errors has fallen; the error proportion fell by one percentage point, or fifty percent, from two percent to one percent.. Count и proportion не смешивать; весь ответ ручной.
21. Возможный образец (не единственный ответ): Two summaries improve; not every individual request established faster, error latency and wider scope unknown.. Не отрицать реально улучшившиеся summaries.
22. Возможный образец (не единственный ответ): Offer/response/accepted action, no agreement допустимо.. Не добавлять обязательство отсутствующего участника.
23. Возможный образец (не единственный ответ): Реальные замечания и основания согласия/несогласия.. До обсуждения pending, не авторский выдуманный отзыв.
24. Возможный образец (не единственный ответ): Цельный новый текст с исходными numbers/scope и обоснованными изменениями.. До feedback pending; changelog не заменяет revision.
25. Возможный образец (не единственный ответ): Реальное звучание единиц, самопоправка и адресный read-back.. Транскрипт не доказательство фонетического качества.
26. Возможный образец (не единственный ответ): B lower reported value under different conditions; controlled benefit or cause not established.. Не все сравнительные таблицы — честный experiment.
27. Возможный образец (не единственный ответ): Честное unknown, точный запрос и реальная ответная реплика.. Не invented rates.
28. Возможный образец (не единственный ответ): Реальная дата/отсрочка, самостоятельные units, facts, limits и recommendation.. До выполнения pending; переименование Rowan не перенос.
29. Возможный образец (не единственный ответ): Разные навыки и свидетельства; open review и отсрочка обязательны.. Не автоматический CEFR или mastery.
30. Возможный образец (не единственный ответ): Цитаты своих ответов и адресная практика.. Если review нет, pending, не фиктивные ошибки.

</details>

### Вариант B

1. **Краткий ответ:** There were ___ failed requests. (fewer/less; нейтральная учебная модель)
2. **Краткий ответ:** The mean fell ___ 40 milliseconds. (by/to; величина снижения)
3. **Краткий ответ:** If the workload ___, we will recheck the result. (changes/will change)
4. **Краткий ответ:** The timings were ___ after warm-up. (measured/measure)
5. **Краткий ответ:** Error proportion 10% → 8%: относительное снижение в процентах от 10? Число.
6. **Краткий ответ:** 0.75 seconds в milliseconds? Число.
7. **Краткий ответ:** 300 completed jobs за 60 seconds: completed jobs per second? Число.
8. **Краткий ответ:** p95=400 ms является maximum latency? yes/no.
9. **Краткий ответ:** Same-session next-read promise можно заменить правилом eventually visible без согласования? yes/no.
10. **Краткий ответ:** Сбор наблюдений остановлен до результата: доказан failed job? yes/no.
11. **Развёрнутый ответ:** Новое Birch Jobs 0.9, note 7 Draft. Два 120-second runs с empty queue at start, без carry-over: baseline 600 accepted jobs, 580 completed, 20 still running; candidate 660 accepted, 600 completed, 60 running. Во время runs новых jobs кроме этих не было. Offered rate различается, request mix тоже; сравнение uncontrolled. В dashboard completed status должен появиться ≤60 sec после actual completion. Отдельные 12 probes baseline все в лимите; candidate 11 в лимите, одну перестали наблюдать до финального результата. Сформулируй known/unknown и границу сравнения.
12. **Развёрнутый ответ:** Birch не задаёт expected visibility для running jobs и read-your-writes. Напиши запрос, не перенося Meadow same-session rule.
13. **Развёрнутый ответ:** Birch: Ren agrees review note; adding worker only proposed, not implemented. Команда хочет comparable run. Напиши статус.
14. **Развёрнутый ответ:** Создай полный Birch report 350–450 слов по 11–13: effort не нужен, нужны measurement/setup/results/uncertainty/recommendation.
15. **Развёрнутый ответ:** Рассчитай completed throughput обоих runs и объясни округление. Можно ли приписать разницу новому worker?
16. **Устная работа:** Партнёр неожиданно спрашивает, почему 60 running — не 60 failures. Ответь и получи read-back.
17. **Развёрнутый ответ:** Партнёр даёт новый hidden queue report с поправкой числа и единицы. До текста сохрани попытку.
18. **Развёрнутый ответ:** Уточни scope принятого действия из услышанного; сохрани реальный ответ и summary 70–100 слов.
19. **Устная работа:** Партнёр оспаривает твою рекомендацию по Birch, требуя объяснить changed workload. Ответь и задай уточняющий вопрос.
20. **Развёрнутый ответ:** Исправь There was less errors. The latency has fell to 20 ms, from 100 to 80 ms. Сохрани задуманный смысл снижения.
21. **Развёрнутый ответ:** Коллега пишет 11/12 means one failed. Ответь по Birch.
22. **Устная работа:** Предложи партнёру review scope; он принимает только часть. Согласуйте действие и явно открытый вопрос.
23. **Развёрнутый ответ:** Получи реальный feedback на исходник 14 и запиши цитаты и 2–3 решения.
24. **Развёрнутый ответ:** Сохрани полную редакцию Birch report 350–450 слов отдельно от исходника после обсуждения.
25. **Устная работа:** Поправь своё all twelve visibility checks passed на eleven passed, one unknown и проверь пересказ.
26. **Развёрнутый ответ:** Новый Clover histogram: 20 observations, nearest-rank p95 = 19-я отсортированная величина 90 ms; 20-я 140 ms. Что можно сказать?
27. **Устная работа:** Партнёр неожиданно меняет Clover method или sample. Уточни, что нужно пересчитать и чего сейчас не знаешь.
28. **Развёрнутый ответ:** Через семь дней получи новый не-queue brief и напиши report 250–350 слов на новых measurements.
29. **Развёрнутый ответ:** Почему заполненная опубликованная часть T04 не подтверждает manual skills и не закрывает неопубликованные линии?
30. **Развёрнутый ответ:** После содержательного разбора сохрани 2–3 типа ошибок и план нового контроля.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: fewer. Countable plural requests.
2. Ключ: by. By задаёт изменение, не конечный уровень.
3. Ключ: changes. Present в обычном реальном условии.
4. Ключ: measured. Passive were + V3.
5. Ключ: 20. Два пункта / 10% = 20%.
6. Ключ: 750. Одна секунда = 1000 ms.
7. Ключ: 5. Не accepted jobs, если counts различаются.
8. Ключ: no. Percentile не maximum, метод и выборка имеют значение.
9. Ключ: no. Это изменение требования, не синоним.
10. Ключ: no. Missing observation не confirmed failure.
11. Возможный образец (не единственный ответ): More completed in candidate but more accepted and different mix; running not failed. Eleven candidate visibility passes, one unknown, not established miss or all pass.. Это jobs/completions, не Elm responses/errors и не Rowan late14.
12. Возможный образец (не единственный ответ): Clarify reader, state and start event; current rule about completed status remains.. Не создавать требования по аналогии.
13. Возможный образец (не единственный ответ): Draft, review accepted, worker change proposed, actual controlled result/rollout unknown.. Не owner/access/date из общей заинтересованности.
14. Возможный образец (не единственный ответ): Связный самостоятельный документ, uncontrolled comparison, incomplete jobs и unknown probe не invented failures.. Original отдельно от revision; не обязательная победа candidate.
15. Возможный образец (не единственный ответ): 580/120 ≈4.83 и 600/120=5 completed jobs/s; worker only proposed, load/mix differ, causal gain not established.. Accepted rates 5/5.5 отдельно; не смешивать completed с successful response rate.
16. Возможный образец (не единственный ответ): Состояние на конец окна, дальнейшие outcomes unknown.. Нужны реальные звук и диалог, иначе pending/unknown.
17. Возможный образец (не единственный ответ): Реально услышанные исходные/исправленные данные, не чтение Birch.. Text-supported при видимом тексте; без источника pending.
18. Возможный образец (не единственный ответ): Числа, условия, принятый шаг и неизвестное не усиливаются.. Не заранее придуманный ответ двух ролей.
19. Возможный образец (не единственный ответ): Признать больше completions, но сравнение uncontrolled; адресный новый ответ.. Не объявлять показатели бесполезными вообще.
20. Возможный образец (не единственный ответ): There were fewer errors. Latency fell by 20 ms, from 100 to 80 ms / has fallen with appropriate time context.. Agreement, V3 и by/to; допускается ясная редактура.
21. Возможный образец (не единственный ответ): Eleven probes met the limit; the final observation for one was not collected. It is unknown, not an established miss.. Unknown не pass, но и не доказанный failure.
22. Возможный образец (не единственный ответ): Реальная ограниченная договорённость и read-back.. Нет обязательного consensus.
23. Возможный образец (не единственный ответ): Фактический отзыв и причины пересмотра.. Без обсуждения pending, не фиктивное approval.
24. Возможный образец (не единственный ответ): Полный связный текст: known counts, changed conditions, unknown outcomes и честный статус.. Pending до feedback; список правок недостаточен.
25. Возможный образец (не единственный ответ): Содержательная самопоправка с теми же единицами.. Реальное аудио для pronunciation/fluency.
26. Возможный образец (не единственный ответ): p95 by stated method 90 ms, max140; at least19/20≤90, ties possible, not every response≤90.. Не универсальный quantile algorithm и не future guarantee.
27. Возможный образец (не единственный ответ): Фактический вопрос, источник определения и ограниченный ответ.. Не прежнее p95 для новой выборки без данных.
28. Возможный образец (не единственный ответ): Реальный перенос и дата, independent conclusion с ограничениями.. До выполнения pending, не простое переименование.
29. Возможный образец (не единственный ответ): Прогресс работы, качество и готовность содержания — разные состояния.. Историческая версия с двумя подтемами; не менять старые ответы при дальнейшем расширении.
30. Возможный образец (не единственный ответ): Реальные цитаты, адресные задачи и неизвестные навыки.. Без разбора pending; не придумывать результат ученика.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Данные и производительность: единицы, сравнение и свежесть](../appendices/performance-language.md)
- [Архитектурное решение: требования, варианты и компромиссы](../appendices/architecture-decisions.md)
- [Описание, сравнение и достаточность](../appendices/comparison.md)
- [Тестирование: условия, проверки, результаты и пределы выводов](../appendices/testing-language.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)
- [RFC 9111: HTTP Caching, sections 4.2, 4.4 and 6](https://www.rfc-editor.org/rfc/rfc9111.html)

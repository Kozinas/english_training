# T05-incidents · Во время инцидента: влияние, хронология, статус и передача работы

[Топик T05](../modules/T05.md). Сгенерировано из data/*.mjs.

Предпосылки: [T02-updates](T02-updates.md), [C102-reporting](C102-reporting.md).

## Цели контроля

- Выбирать временные формы и модели сообщений
- Описывать влияние с правильной областью и единицами
- Отделять хронологию, гипотезы и состояние восстановления
- Согласовывать роли, ограничения и следующие сообщения
- Читать рабочую запись без выдуманных выводов
- Слышать исправления, отказы и принятые обязательства
- Писать внутреннюю передачу, public update и полную редакцию
- Уточнять и передавать работу в реальном диалоге

## Механизм

### Коммуникация — самостоятельная работа

Во время инцидента коллегам и пользователям нужны понятные сведения: что затронуто, когда это наблюдалось, что сделано, что неизвестно, кто продолжает работу и когда будет следующее сообщение. Техническая догадка не заменяет этот набор. We are investigating export errors сообщает процесс; We know the cause сообщает установленный результат и требует другого основания. В этой подтеме ты не запускаешь команды и не устраняешь реальную аварию: Orchard, Seabrook и Hawthorn — вымышленные языковые упражнения. Первичные ориентиры Google SRE описывают собственные организационные практики, а не обязательные должности любой команды. Далее в T05 отдельно предстоят postmortem, надёжность и безопасность; один этот материал не наполняет весь топик.

### Present, Past и Perfect меняют точку отсчёта

We are investigating — текущий процесс: be + -ing. We changed the route at 09:18 — завершённое действие в конкретный прошлый момент: Past Simple. We have changed the route — результат важен сейчас, без завершённого at 09:18 в той же стандартной временной рамке. Не превращай каждую фразу в Perfect ради технического регистра. We have restored access сильнее, чем We are trying to restore access: процесс не гарантирует результат. При пересказе к прошлому моменту The alert had fired before the handover отмечает более раннее событие; ясный before нередко позволяет и Past Simple. Past Perfect не обязателен в каждой строке хронологии. Выбор формы должен сохранять фактический статус, а не украшать отчёт.

### Since, for, at, by и until

Since вводит начальную точку: We have been monitoring since 09:20. For вводит длительность: for ten minutes. At 09:45 обозначает момент следующего сообщения; by 09:45 — крайний срок, не обязательно именно этот момент. Until 10:00 ограничивает продолжающуюся ответственность Noor, не сообщает, что инцидент закончится в 10:00. В рабочем сообщении записывай дату при риске путаницы и часовой пояс; завтра для участников в разных поясах неоднозначно. 15:04 и 15:40 нужно проговаривать и проверять обратным пересказом, а не полагаться на скорость речи. Ни длительность наблюдения, ни часы занятия не определяют полноту исследования и не закрывают учебную подтему автоматически.

### Пассив, отрицание и ещё не полученный результат

The cause has not yet been confirmed: has + not + been + past participle. В The cause has not confirmed пропущено been, и причина ошибочно представлена действующим субъектом. Yet обычно поддерживает связь с текущим состоянием; not yet не обещает, что ответ скоро появится. The final outcome remains unobserved описывает отсутствие наблюдения, а не failure. No loss has been confirmed не равно No loss occurred: первая фраза сообщает о подтверждении, вторая утверждает исход. Это не запрет делать отрицательные выводы вообще: если метод действительно проверил все нужные объекты, вывод может быть сильнее. В наших досье такие границы задаются явно, поэтому не дописывай неопределённости там, где конкретная ошибка уже установлена.

### Impact: функция, группа, окно и единица

Impact — влияние на пользователя или работу функции: exports return errors, new articles do not appear on time. Не начинай публичное сообщение только с внутреннего имени компонента. Затем ограничь область: selected path, twelve checked downloads, between 09:06 and 09:16. В Orchard 40/200 — доля ошибочных попыток, включая retries. Это не 40 уникальных людей, не 20% всех клиентов и не 40 потерянных файлов. Some requests не all services. All twelve selected downloads opened допускает точный положительный вывод для двенадцати проверок, но не глобальный unaffected. Слово all не запрещено: оно должно иметь правильную область. Если denominator или граница unknown, назови это и задай вопрос, вместо того чтобы создавать точную цифру из впечатления.

### Проценты не исправляют смысл исходных данных

В Orchard сначала 40 ошибок из 200 попыток: 20%; затем 2 из 200: 1%. Разность — 19 percentage points; relative reduction = (20 − 1) / 20 = 95%. Это корректные вычисления долей в двух выбранных окнах, не измерение customer recovery. Сравнимость нагрузки, других условий и уникальных пользователей здесь не установлена. Снижение ошибок после действия заслуживает сообщения как наблюдение, но не доказывает причинную эффективность само по себе. Не смешивай процент ошибок, throughput и число delayed jobs. В аудио Seabrook шесть новых probes и шестнадцать старых messages — разные множества: 6/6 не превращает 13/16 confirmed deliveries в 16/16.

### Хронология: начало, обнаружение и объявление

Раздели actual onset, earliest observed symptom, alert fired и incident declared. Первое может быть неизвестно, даже когда остальные имеют точные отметки. Фраза The incident started at 09:12 подменяет неизвестное начало временем объявления в Orchard. Безопаснее The incident was declared at 09:12; the earliest observed error in this extract was at 09:06. Порядок событий полезен для дальнейшего анализа, но after не because of. The change preceded the errors; the outage coincided with a change; the change may have contributed to the errors — разные степени и типы связи. У модальных слов нет универсальной таблицы процентов уверенности. Не выводи мотив, вину или механизм причинности только из того, чьё имя стоит возле change.

### Факт, гипотеза, предложение и действие

Observed: two attempts returned errors. Hypothesis: the configuration may have contributed. Proposed: we could retry the old jobs. Accepted task: Kai agreed to review traces. Performed: responders switched the route. Эти категории не взаимозаменяемы, даже когда идут подряд в одном абзаце. Agree to review не implement a fix; approved wording не approved operation. Has been proposed — Perfect passive о предложении, не о выполнении предложенной операции. В Hawthorn rollout was paused не означает already applied configuration was reverted. Сохраняй точное действие при упрощении языка для public. Не создавай инструкцию повторить запрос, перестроить индекс или переключить систему, если кейс не задаёт согласованного безопасного действия для пользователя.

### Mitigation, recovery и cause — разные вопросы

Mitigation ограничивает последствия; recovery относится к восстановлению нужного поведения; устранение причины требует отдельного основания. Команда может восстановить доступ, не зная причины, или снизить текущие ошибки, сохранив старую очередь незавершённой. Monitoring сообщает о наблюдении в заданной области, а не гарантирует, что повторения не будет. Слова resolved/fixed часто слишком широки без критерия и границы. В Orchard текущий путь наблюдается, но delayed jobs ещё не все завершены. В Seabrook новый probe успешен, но старый batch не полностью подтверждён. Это не универсальный запрет закрывать инциденты до любого postmortem: конкретные команды определяют статусы сами. В упражнении не выдумывай policy, severity или автоматически sufficient десятиминутное окно.

### Публичное обновление и рабочая запись

Внутренняя запись нужна для продолжения работы: время, версия, наблюдение, действие, источник, role и незакрытый вопрос. Public update короче и ориентировано на влияние: affected function → current observation/action → uncertainty → next communication. Убирай ненужный jargon, но не важные исключения. «Some earlier exports still need confirmation» понятнее пользователю, чем набор внутренних идентификаторов, и честнее «everything is fine». Не включай реальные личные данные, токены, контакты или сырые логи. При этом приватность не оправдывает сокрытие известного влияния. Мы упражняемся на synthetic data; правовые уведомления и реальная security response не выводятся из этих моделей. Извинение за неудобство не требует выдумывать подтверждённую причину или виновника.

### Обещание сообщения не обещание восстановления

We will provide another update at 09:45 UTC — проверяемое обязательство о коммуникации. We expect recovery by 09:45 — прогноз результата; We will restore everything by then — обещание результата. Не подменяй первое вторым в кратком пересказе. Even if nothing changes, we will publish an update: в обычном будущем условии после if используется Present, не механическое will. Cannot yet give a reliable recovery time выражает ограничение знания, а не прогноз бесконечной аварии. В Seabrook время следующего сообщения после 15:30 ещё не согласовано; не придумывай регулярность каждые 15 минут. Если источник сам исправил время, текущая сводка использует исправление и сохраняет, что именно было исправлено.

### Передача роли требует явного принятия

Can you take over coordination? — просьба; I understand — подтверждение понимания; I accept coordination until 10:00 — принятие роли с границей. В Orchard Noor принял координацию после read-back, Lea сохранила коммуникацию, Kai только review. В Seabrook Ari прямо отказался, поэтому Kim остаётся координатором по правилам досье. В Hawthorn Vale не ответил; нельзя объявить его новым owner. Нахождение на звонке, благодарность и отсутствие возражения сами по себе не создают обязательства. Не назначай отсутствующего коллегу ради заполненной таблицы. Useful handover называет состояние, outstanding checks, роль, срок границы и следующий update; реальное принятие записывается отдельно от предложения и технического разрешения.

### Read-back, неожиданный вопрос и самопоправка

Read-back — адресная проверка понимания: Please restate the unresolved outcomes and who owns the next update. Это не просьба повторить весь монолог дословно и не требование согласиться с гипотезой. Партнёр должен задать настоящий новый вопрос; автор не пишет обе роли заранее и не выдаёт это за взаимодействие. При ошибке можно остановиться: I said fifteen forty; I meant fifteen oh four. Если смысл был слишком сильным: Let me narrow that: the probe passed, but the batch is not confirmed complete. Сохрани исходную формулировку и поправку. По тексту можно оценить содержание самопоправки, но не её звучание, ударение и fluency. Без реального аудио эти шкалы остаются unknown.

### Нейтральность не отменяет ответственности

The responder changed the configuration — описание известного действия. The careless engineer broke everything — оценка характера, вина и объём, которых может не быть в данных. Нейтральная запись не скрывает ошибку: если неверное число уже установлено, явно исправь его и назови эффект. Но в этой подтеме причина Orchard остаётся гипотезой, поэтому нельзя заключить, что конкретный человек вызвал сбой. Разбор условий и предотвращения повторения получит отдельную подробную линию postmortem; текущая сводка не должна заранее выдавать его вывод. Accountability в передаче означает, в частности, ясно записать реально принятое действие, а не назначить виновного или выдумать выполненный corrective action.

### Полный письменный цикл и новый перенос

Сначала проанализируй модели Orchard: основной handover, timeline, clarification, objection, spoken handover и полную revision. Они доступны до ввода и не решают самостоятельное досье Hawthorn. Напиши собственный полный текст, сохрани исходник, получи настоящий feedback по рубрике и создай отдельную полную редакцию. Список «исправил время и роли» не заменяет переписанный документ. После этого примени 2–3 приоритетные правки к новому brief, не переименованию старого. Итоговый тест использует новые Wren/Juniper ситуации; его ключи появляются только после отправки. Открытое письмо и речь ждут содержательной оценки. Через семь дней нужен иной incident brief и реальный диалог, а не повтор заученной модели.

### Продолжение и честный статус

Здесь нет нормы «одна подтема за полчаса»: можно остановиться в середине текста, банка или теста и продолжить с черновика. Шкала считает заполнение текущей опубликованной работы, не качество, длительность или сертифицированное C1. Старая галочка T05 не заполняет новые ответы. Даже все 127 шагов этой первой подтемы не закрывают будущие postmortem/reliability/security разделы. Для освоения нужны новое контролируемое задание, самостоятельные письмо и речь по применимым шкалам и отложенный перенос. План повторения опирается на реальные пробелы: неопределённость, временны́е формы, scope, числа, принятие роли. Не создавай фиктивную проверку или запись занятия, чтобы сделать процент красивее.

## Примеры с разбором

- **We are investigating elevated export errors.** — Мы изучаем повышенное число ошибок экспорта. Be + -ing, процесс.
- **We changed the route at 09:18 UTC.** — Мы изменили маршрут в 09:18 UTC. Past Simple, конкретный момент.
- **We have changed the route, but checks continue.** — Маршрут изменён, проверки продолжаются. Текущий результат не полное восстановление.
- **The cause has not yet been confirmed.** — Причина ещё не подтверждена. Perfect passive и отрицание.
- **We have been monitoring since 09:20.** — Мы наблюдаем с 09:20. Since + начальная точка.
- **We monitored that path for ten minutes.** — Мы наблюдали этот путь десять минут. For + длительность, законченный период.
- **The first observed error was at 09:06.** — Первая наблюдённая ошибка была в 09:06. Не обязательно начало проблемы.
- **The incident was declared at 09:12.** — Инцидент объявили в 09:12. Объявление не начало impact.
- **The alert had fired before the handover.** — Оповещение сработало до передачи. Более раннее событие относительно прошлого.
- **Forty of two hundred attempts returned errors.** — 40 из 200 попыток вернули ошибки. Denominator — attempts.
- **Retries are included in that count.** — Повторные попытки входят в число. Не unique users.
- **All twelve selected downloads opened.** — Все 12 выбранных загрузок открылись. All ограничено selected.
- **We cannot infer the number of affected customers.** — Мы не можем вывести число затронутых клиентов. Ограничение данных.
- **The error proportion fell by nineteen percentage points.** — Доля ошибок упала на 19 процентных пунктов. 20% минус 1%.
- **That is a ninety-five percent relative reduction.** — Это относительное снижение на 95%. Сравнение долей, не людей.
- **Three jobs remain pending.** — Три задания остаются в ожидании. Pending не failed.
- **One final outcome has not been observed.** — Один конечный исход не наблюдён. Unknown не удаление.
- **The new probes do not settle the older outcomes.** — Новые проверки не устанавливают старые исходы. Разные множества.
- **The configuration change preceded the errors.** — Изменение предшествовало ошибкам. Порядок не доказанная причина.
- **The change may have contributed to the incident.** — Изменение могло способствовать инциденту. Гипотеза о прошлом.
- **A retry has been proposed but not run.** — Повтор предложен, но не выполнен. Не подменять статус.
- **Pausing a rollout does not undo earlier changes.** — Пауза публикации не отменяет уже сделанное. Различие действий.
- **The latest sample shows fewer errors.** — Последняя выборка показывает меньше ошибок. Наблюдение ограничено выборкой.
- **Full recovery has not been confirmed.** — Полное восстановление не подтверждено. Не утверждение полного отказа.
- **We will update you at 09:45 UTC.** — Сообщим обновление в 09:45 UTC. Обязательство о сообщении.
- **We will publish even if nothing changes.** — Опубликуем, даже если ничего не изменится. Present после even if.
- **We cannot yet give a reliable recovery time.** — Пока нельзя надёжно назвать время восстановления. Честная неопределённость.
- **Could you clarify which jobs are complete?** — Уточните, какие задания завершены. Embedded question.
- **I understand, but I cannot take over.** — Я понимаю, но не могу принять роль. Понимание не согласие.
- **Noor accepted coordination until 10:00.** — Noor принял координацию до 10:00. Scope и граница.
- **Lea retains responsibility for the public update.** — Lea сохраняет ответственность за сообщение. Не всё переходит одному человеку.
- **Kai agreed to review traces, not implement a fix.** — Kai согласился проверить трассы, не реализовать исправление. Ограниченное commitment.
- **I said fifteen forty; I meant fifteen oh four.** — Я сказал 15:40; имел в виду 15:04. Явная самопоправка.
- **Let me narrow that: the probe passed, but the batch is unresolved.** — Уточню: probe успешен, batch не закрыт. Исправление слишком широкого утверждения.
- **Please read back the open checks and the next update time.** — Перескажите незакрытые проверки и время сообщения. Адресная проверка понимания.
- **Although the later sample improved, neither the cause nor all earlier outcomes have been established.** — Хотя поздняя выборка лучше, ни причина, ни все прежние исходы не установлены. Сложная уступка сохраняет две границы.

## Формы статуса и временных отношений

1. **Краткий ответ:** We ___ investigating export errors. (are/have)
2. **Краткий ответ:** The cause has not ___ confirmed. (been/being)
3. **Краткий ответ:** We have monitored the path ___ 09:20. (since/for)
4. **Краткий ответ:** We monitored the path ___ ten minutes. (since/for)
5. **Краткий ответ:** Yesterday we ___ the route at 09:18. (changed/have changed)
6. **Краткий ответ:** The errors coincided ___ a change. (with/to)
7. **Краткий ответ:** We will update you even if nothing ___. (changes/will change)
8. **Краткий ответ:** The change may have ___ to the errors. (contributed/contribute)
9. **Развёрнутый ответ:** Исправь We investigating. The cause has not confirmed. Объясни обе пропущенные формы.
10. **Развёрнутый ответ:** Составь три сообщения: ongoing investigation, выполненная смена пути at 09:18, текущий результат без времени.
11. **Развёрнутый ответ:** Переведи «Наблюдаем с 09:20, следующее сообщение в 09:45, роль принята до 10:00».
12. **Развёрнутый ответ:** Переделай Which jobs are complete? в вежливую embedded question и добавь неизвестность исхода одного job.
13. **Развёрнутый ответ:** Сравни The route was restored / is being restored / may have been restored по статусу.
14. **Развёрнутый ответ:** Напиши 4–5 предложений timeline Orchard, употребив before и одну Past Perfect конструкцию. Не заставляй все события быть Perfect.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: are. Present Continuous требует be + -ing.
2. Ключ: been. Perfect passive: has been + participle.
3. Ключ: since. Since вводит исходную точку времени.
4. Ключ: for. For вводит длительность, не точку.
5. Ключ: changed. Завершённый прошлый момент требует Past Simple в этой рамке.
6. Ключ: with. Управление coincide with something.
7. Ключ: changes. Present после even if в обычном будущем условии.
8. Ключ: contributed. May have + past participle о прошлой возможности.
9. Возможный образец (не единственный ответ): We are investigating. The cause has not been confirmed.. Continuous и Perfect passive требуют разных вспомогательных компонентов.
10. Возможный образец (не единственный ответ): We are investigating. We changed the route at 09:18. We have changed the route.. Не добавлять из грамматической формы причину или full recovery.
11. Возможный образец (не единственный ответ): We have been monitoring since 09:20. The next update is at 09:45. Coordination is accepted until 10:00 UTC.. Начало, момент и граница ответственности различаются.
12. Возможный образец (не единственный ответ): Could you clarify which jobs are complete? One final outcome remains unobserved.. Сохранить порядок which jobs are; не объявить unknown failed.
13. Возможный образец (не единственный ответ): Результат в прошлом / процесс / модальная возможность результата; ни одно без данных не выбрать автоматически.. Форма меняет утверждение, не украшает одну и ту же мысль.
14. Возможный образец (не единственный ответ): Факты 09:02/09:06/09:10/09:12/09:18 с правильными названиями событий.. Past Perfect задаёт предшествование относительно прошлого, не причинность.

</details>

## Влияние, область и единицы

1. **Краткий ответ:** Orchard: ранняя выборка содержит сколько attempts? Число.
2. **Краткий ответ:** Orchard: сколько errors в ранней выборке? Число.
3. **Краткий ответ:** Orchard: поздняя доля errors в процентах? Число.
4. **Краткий ответ:** Orchard: падение error proportion в percentage points? Число.
5. **Развёрнутый ответ:** Напиши наблюдение об исходных 40 errors так, чтобы его нельзя было прочесть как forty customers.
6. **Развёрнутый ответ:** Объясни вычисление 95% relative reduction и границу вывода.
7. **Развёрнутый ответ:** Исправь All downloads were unaffected на максимально сильное подтверждённое предложение.
8. **Развёрнутый ответ:** Чем failed request отличается от lost report? Сформулируй отдельный вопрос для проверки второго.
9. **Развёрнутый ответ:** Раздели 18 delayed jobs на три статуса в одном предложении без сокращения unknown до failed.
10. **Развёрнутый ответ:** Почему 198 later successes не доказывают completion всех старых 18 jobs?
11. **Развёрнутый ответ:** Новый Fir: 30 requests, 9 errors, 5 unique accounts в ошибочных запросах. Напиши две разные точные метрики.
12. **Развёрнутый ответ:** Новый Ash: из 8 checked receipts два точно не соответствуют заказу. Нужно ли называть это только unknown?
13. **Развёрнутый ответ:** Дай public description Orchard без слова denominator и без внутреннего ID.
14. **Развёрнутый ответ:** Какие три уточнения нужны к фразе Many users are affected? Не придумывай ответы.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 200. Denominator включает повторные попытки.
2. Ключ: 40. Это ошибки attempts, не unique people.
3. Ключ: 1. Две ошибки из 200 дают один процент.
4. Ключ: 19. 20 процентов минус один процент дают 19 points.
5. Возможный образец (не единственный ответ): Forty of two hundred export attempts returned errors; retries are included and unique customer impact is unknown.. Назвать функцию, denominator и неизвестное.
6. Возможный образец (не единственный ответ): (20−1)/20 = 0.95; относится к доле ошибок выбранных попыток, не числу пользователей.. Арифметика не доказывает причинный эффект смены пути.
7. Возможный образец (не единственный ответ): All twelve selected existing downloads opened successfully; other downloads are not established by this check.. Не скрывать реальные 12 успехов и не расширять scope.
8. Возможный образец (не единственный ответ): Ошибка запроса не доказывает удаление сохранённого отчёта. Have the previously stored reports been checked?. Вопрос не должен выдавать отсутствующую проверку за выполненную.
9. Возможный образец (не единственный ответ): Fourteen are confirmed complete, three pending and one has no observed final outcome.. Три статуса и общий denominator 18 сохраняются.
10. Возможный образец (не единственный ответ): Новые attempts и прежняя очередь разные множества; нужна связь по конкретным результатам.. Не считать новое наблюдение бесполезным, ограничить его область.
11. Возможный образец (не единственный ответ): 30% request errors; five distinct accounts observed with errors, not necessarily all users or full impact.. Новая информация позволяет точный count accounts в заданной области.
12. Возможный образец (не единственный ответ): Нет: две проверенные несоответствующие квитанции — установленная проблема; остальные границы уточняются отдельно.. Осторожность не должна стирать доказанную ошибку.
13. Возможный образец (не единственный ответ): Some export requests have returned errors. The latest sample improved, while earlier delayed exports still need confirmation.. Понятный язык сохраняет affected function и незавершённость.
14. Возможный образец (не единственный ответ): Какая функция, какой период/область, откуда число unique users и как считали retries?. Содержательные вопросы, не выдуманная статистика.

</details>

## Хронология, гипотезы и восстановление

1. **Краткий ответ:** Orchard: время earliest observed error? HH:MM UTC без UTC.
2. **Краткий ответ:** Orchard: cause confirmed? yes/no.
3. **Краткий ответ:** Orchard: смена пути at 09:18 выполнена? yes/no.
4. **Краткий ответ:** Orchard: полный исход всех старых jobs подтверждён? yes/no.
5. **Развёрнутый ответ:** Разложи 09:02, 09:06, 09:10, 09:12 по событиям; какое время остаётся unknown?
6. **Развёрнутый ответ:** Перепиши The change caused the outage, сохранив и temporal evidence, и гипотезу.
7. **Развёрнутый ответ:** Отличи mitigation от permanent fix на Orchard. Дай допустимый current-status абзац 60–90 слов.
8. **Развёрнутый ответ:** Сравни proposed retry, approved retry и retry performed. Какие доказательства потребовались бы?
9. **Развёрнутый ответ:** Коллега пишет No loss confirmed, therefore no loss occurred. Исправь переход.
10. **Развёрнутый ответ:** Новый Pine: проверены все 4 synthetic files, каждый byte-for-byte совпал. Можно ли написать All four are intact?
11. **Развёрнутый ответ:** Что потеряется, если заменить monitoring selected path на resolved?
12. **Развёрнутый ответ:** Составь две строки с according to: наблюдение из working record и отдельно собственная рекомендация.
13. **Развёрнутый ответ:** Новый Hazel: switch предложен в 10:00, wording approved в 10:03, operation log пуст. Исправь We switched at 10:03.
14. **Развёрнутый ответ:** Можно ли назвать severity SEV-1 только по названию incident? Напиши уточнение.
15. **Развёрнутый ответ:** В Hawthorn объясни pause rollout versus revert applied change и предложи точное предложение.
16. **Развёрнутый ответ:** Сформулируй correction для ранее опубликованного All 18 are complete, указав текущий срез и не стирая историю.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 09:06. Не alert 09:10 и не declaration 09:12.
2. Ключ: no. Configuration остаётся гипотезой, а не установленной причиной.
3. Ключ: yes. Это записанное действие, не только proposal.
4. Ключ: no. Три pending и один unknown ещё требуют проверки.
5. Возможный образец (не единственный ответ): Change, earliest observed error, alert, declaration; actual onset unknown.. Не подменять неизвестный момент ближайшим известным.
6. Возможный образец (не единственный ответ): The change preceded the observed errors and may have contributed; a causal link has not been established.. Не отвергать возможность и не подтверждать её без основания.
7. Возможный образец (не единственный ответ): Lower observed errors after routing, ongoing monitoring, incomplete old-job outcomes and unknown cause.. Нет universal resolution policy и нет доказанного устранения причины.
8. Возможный образец (не единственный ответ): Предложение, явно данное разрешение в соответствующем scope, запись фактического выполнения/результата.. Не создавать разрешение из согласия с формулировкой.
9. Возможный образец (не единственный ответ): The record does not confirm loss; it also does not establish every outcome. Further checks are needed.. Отсутствие подтверждения не универсальное доказательство отсутствия.
10. Возможный образец (не единственный ответ): Да, в указанной группе и моменте; не every file in every system.. Сильный вывод допустим при соответствующем охвате проверки.
11. Возможный образец (не единственный ответ): Граница наблюдения и незакрытые checks; resolved потребует критерия и соответствующего свидетельства.. Не утверждать универсальный запрет такого статуса для всех команд.
12. Возможный образец (не единственный ответ): According to the record, three jobs are pending. I recommend clarifying the remaining outcomes before strengthening the message.. Источник факта и рекомендация автора явно раздельны.
13. Возможный образец (не единственный ответ): The wording was approved at 10:03; execution of the proposed switch is not established.. Не переносить performed status Orchard на другой brief.
14. Возможный образец (не единственный ответ): Which severity policy applies, and what evidence supports the classification?. Критерии не заданы; не универсальная шкала из одного слова.
15. Возможный образец (не единственный ответ): The rollout was paused; the record does not say that already applied changes were reverted.. Два разных действия, не стилистические синонимы.
16. Возможный образец (не единственный ответ): Correction at 09:30 UTC: fourteen of eighteen are complete, three pending and one outcome unobserved; the earlier all-complete claim was incorrect.. Прозрачная поправка факта, без выдуманного нового измерения.

</details>

## Роли, принятие и коммуникация

1. **Краткий ответ:** Orchard: кто принял coordination до 10:00? Имя.
2. **Краткий ответ:** Orchard: следующее public update в HH:MM?
3. **Развёрнутый ответ:** Раздели роли Noor, Lea, Kai и ограничения каждого.
4. **Развёрнутый ответ:** Напиши просьбу передать coordination и отдельную фразу её принятия, пометив обе как реплики ролевой игры.
5. **Развёрнутый ответ:** Коллега отвечает I understand the request. Что спросить дальше?
6. **Развёрнутый ответ:** В Hawthorn Vale ещё не ответил. Напиши current owner и pending request.
7. **Развёрнутый ответ:** Преврати We will fix everything by 09:45 в подтверждённое commitment Orchard.
8. **Развёрнутый ответ:** Дай вежливый ограниченный отказ: можешь проверить wording, не можешь принять operations.
9. **Развёрнутый ответ:** Напиши 4–5 пунктов read-back checklist для Orchard handover, не назначая исполнителя по своему выбору.
10. **Развёрнутый ответ:** Почему public message не должен включать сырые identifiers? Как сохранить нужную техническую точность внутри?
11. **Развёрнутый ответ:** Новый Rowan: Pat принимает message review, Lee предлагает спросить owner. Кто обещал recovery?
12. **Развёрнутый ответ:** Напиши public update 80–120 слов Orchard с next update, unknown cause и без blame.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: Noor. Передача явно принята после read-back.
2. Ключ: 09:45. Это время сообщения, не обещанный recovery.
3. Возможный образец (не единственный ответ): Coordination until 10:00; public update 09:45; trace review by 09:40, not implementation.. Нормальный ответ со словами и временем, без назначения новых ролей.
4. Возможный образец (не единственный ответ): Could you take over coordination until 10:00? I accept coordination until 10:00 UTC.. Придуманные реплики не выдавать за реальное согласие пользователя/коллеги.
5. Возможный образец (не единственный ответ): Can you confirm whether you are accepting coordination, and until when?. Understanding не acceptance; уточнение не давление.
6. Возможный образец (не единственный ответ): Oren remains coordinator; the request to Vale has not been accepted.. Только заданное правило кейса, не молчаливое назначение.
7. Возможный образец (не единственный ответ): We will provide the next update at 09:45 UTC, even if recovery is not yet confirmed.. Обещание коммуникации не скрывает отсутствие recovery estimate.
8. Возможный образец (не единственный ответ): I can review the wording, but I cannot take responsibility for operational changes.. Ясный scope полезнее неоднозначного I will try.
9. Возможный образец (не единственный ответ): Current impact, unknown outcomes/cause, accepted roles/boundaries, next update, separate action approval.. Название вымышленного списка не новый факт Orchard; сохранять источник.
10. Возможный образец (не единственный ответ): Использовать synthetic/public-safe описание влияния; внутренние ссылки только в допустимом контексте, не реальные секреты в курсе.. Не вводить реальные токены/контакты и не скрывать известный impact.
11. Возможный образец (не единственный ответ): Никто: review и запрос контакта не восстановление, доступ или операционное владение.. Сохранить ограниченные commitments.
12. Возможный образец (не единственный ответ): We are monitoring export requests. The latest sample shows fewer errors, but earlier delayed exports still need confirmation. The cause remains under investigation; another update is scheduled for 09:45 UTC. Expand this outline using only the record.. Своя полная public версия; рубрика: факты, аудитория, неопределённость, время. Краткая опора не заменяет текст нужного объёма.

</details>

## Чтение: Orchard working record

Orchard Exports 4.2: incident exercise 18, working record at 09:32 UTC

This is a fictional communication exercise, not a report about a real service. The team is practising how to describe an incident while its cause and final impact remain uncertain. Times below refer to the same day and use UTC. The record contains observations, actions and commitments; it is not permission to operate a production system. No severity category has been assigned under a published policy.

A configuration change was recorded at 09:02. The earliest observed export error in the available extract is at 09:06. An alert fired at 09:10, and the exercise coordinator declared an incident at 09:12. These are four different events. The extract does not establish when the underlying problem began. It also does not establish that the configuration change caused the errors, even though the change preceded them. Engineers are checking that possibility, not reporting it as a confirmed explanation.

Between 09:06 and 09:16, the selected export path recorded 200 attempts: 160 succeeded and 40 returned errors. Retries are included in that denominator. The record does not identify the number of unique users affected. Forty errors therefore cannot be translated into forty customers, and a failed request does not by itself establish that a previously stored report was lost. A separate check opened twelve existing downloads successfully. That is useful evidence about those downloads, not proof that every download or every region was unaffected.

At 09:18, responders routed new requests through the previous export path. This action was performed in the exercise environment; it is not merely a proposal. Between 09:20 and 09:30, the selected path recorded another 200 attempts: 198 succeeded and two returned errors. The observed error proportion fell from twenty percent to one percent across those windows. That is a reduction of nineteen percentage points, or ninety-five percent relative to the earlier proportion. It is not a ninety-five percent reduction in the number of affected people. The record does not isolate which factor produced the improvement.

Separately, eighteen accepted export jobs had been delayed. At 09:30, fourteen were confirmed complete, three remained pending, and one had no observed final outcome because its result had not been collected. The unresolved job was not recorded as failed or lost. The later request sample does not settle the outcomes of these earlier jobs. A useful update must therefore distinguish current request behaviour from work that was already waiting. Responders have not confirmed full recovery or a permanent fix.

Lea is responsible for the next public exercise update at 09:45 UTC, even if the investigation has produced no new conclusion. She has accepted that communication task, not promised recovery by that time. Kai has agreed to review the available traces by 09:40. He has not agreed to implement a fix or take over incident coordination. Public wording may describe the affected function and known limits, but must not include raw identifiers or private contact details from the exercise log.

At 09:32, Noor explicitly accepted incident coordination until 10:00 after reading back the remaining jobs, the limited request evidence and the next update time. Lea retained communications responsibility. This was an acknowledged handover of coordination, not a transfer of every technical task. The outgoing coordinator recorded the change so that later participants could tell who was responsible. No one silently assigned an absent colleague a role.

The working status is monitoring the selected export path while recovery checks continue. The team has not adopted a universal rule that ten quieter minutes always means resolved. The next message should retain the unknown cause, the remaining job outcomes and the limits of the sample. A later correction must be dated and connected to the earlier claim, rather than silently replacing the history. The full post-incident review will be a different document, prepared with additional evidence.

1. **Краткий ответ:** Какая версия Orchard Exports указана?
2. **Краткий ответ:** Во сколько fired alert, HH:MM?
3. **Краткий ответ:** Сколько старых jobs confirmed complete в срезе 09:30?
4. **Краткий ответ:** Сколько selected existing downloads открылись?
5. **Развёрнутый ответ:** Сформулируй основную коммуникативную проблему досье в двух предложениях.
6. **Развёрнутый ответ:** Почему 09:12 не подтверждённое время начала impact?
7. **Развёрнутый ответ:** Сопоставь оба окна: длительность, attempts, successes, errors и единицы.
8. **Развёрнутый ответ:** Что именно показал отдельный download check и чего не показал?
9. **Развёрнутый ответ:** Раздели последние 4 незавершённых подтверждения jobs на два известных статуса.
10. **Развёрнутый ответ:** Назови известную performed mitigation и недоказанный causal claim.
11. **Развёрнутый ответ:** Почему 09:45 нельзя использовать как ETA полной готовности?
12. **Развёрнутый ответ:** Какие действия Kai принял, а каких нет?
13. **Развёрнутый ответ:** Как установлено, что Noor действительно принял передачу?
14. **Развёрнутый ответ:** Зачем Lea сохраняет отдельную роль после handover?
15. **Развёрнутый ответ:** Объясни заключительный абзац о corrections и future review.
16. **Развёрнутый ответ:** Напиши summary 120–160 слов: главное, два числовых ограничения, неизвестное, роли, следующий шаг.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 4.2. Версия относится к вымышленному exercise.
2. Ключ: 09:10. Это alert, не earliest error и не declaration.
3. Ключ: 14. Три pending и один unknown отдельно.
4. Ключ: 12. Успех ограничен выбранными downloads.
5. Возможный образец (не единственный ответ): Передать частичное улучшение без объявления полного recovery; сохранить old jobs, unknown cause и принятые роли.. Не сводить текст к одному проценту.
6. Возможный образец (не единственный ответ): Это declaration; earliest observed error 09:06, actual onset unknown.. Разные типы событий, не четыре конкурирующие оценки начала.
7. Возможный образец (не единственный ответ): 09:06–16:200/160/40; 09:20–30:200/198/2; каждое десять минут, attempts включают retries.. Это описание данных, не изолированный causal experiment.
8. Возможный образец (не единственный ответ): Двенадцать выбранных существующих downloads открылись; не все paths/regions и не вся сохранность данных.. Положительное наблюдение плюс предел.
9. Возможный образец (не единственный ответ): Три pending, у одного результат не collected; не четыре failed.. Не потерять отличие состояния и отсутствия наблюдения.
10. Возможный образец (не единственный ответ): Routing new requests 09:18 performed; cause/improvement mechanism unconfirmed.. Сформулировать нормальными предложениями, не подменять unknown бездействием.
11. Возможный образец (не единственный ответ): Lea accepted communication at that time even if unresolved; recovery time not established.. Прямое основание в роли и обязательстве.
12. Возможный образец (не единственный ответ): Trace review by 09:40; neither implementation nor coordination takeover.. Не назначать дополнительный scope по профессии.
13. Возможный образец (не единственный ответ): Explicit acceptance after read-back at 09:32, until 10:00; recorded by outgoing coordinator.. Не только присутствие на встрече.
14. Возможный образец (не единственный ответ): Coordination transfer не автоматически transfer every task; источник явно сохраняет public communication за Lea.. Роли в данной команде, не обязательные должности всех организаций.
15. Возможный образец (не единственный ответ): Поправки датируются и связываются с прежним claim; post-incident review потребует дополнительного evidence.. Не переписывать историю как будто ошибки не было.
16. Возможный образец (не единственный ответ): Самостоятельный связный summary с отличием sample от affected people и old jobs от new attempts.. Оценка вручную по точности и связности, не совпадению с моделью.

</details>

## Аудирование: Seabrook call

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Seabrook Notifications: an original incident exercise call

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

Kim: Understood. I remain coordinator. Mira owns the fifteen thirty update, and Dev will review the delivery wording. Please repeat the unresolved outcomes and the retry uncertainty before we finish. Understanding this summary does not authorise a retry, and agreement about the message does not establish a root cause.

</details>

1. **Краткий ответ:** После самопоправки Kim earliest observed time: HH:MM?
2. **Краткий ответ:** Сколько accepted messages в старом batch?
3. **Краткий ответ:** Сколько старых deliveries confirmed?
4. **Краткий ответ:** Кто остаётся coordinator после отказа Ari? Имя.
5. **Развёрнутый ответ:** Прослушай скрытый источник без чтения. Запиши heard wording, время поправки своими словами и один нерасслышанный фрагмент, если был.
6. **Развёрнутый ответ:** Сопоставь observation, alert, pause по временам и функциям.
7. **Развёрнутый ответ:** Как Dev исправляет вывод Mira об all sixteen ready?
8. **Развёрнутый ответ:** Как Kim ограничивает собственное fixed? Почему это содержательная поправка?
9. **Развёрнутый ответ:** Что сказано о manual retry и duplicates?
10. **Развёрнутый ответ:** Чем Mira обещает заняться в 15:30, даже если results не изменятся?
11. **Развёрнутый ответ:** Сравни Dev wording review и Ari refusal; составь current responsibility summary.
12. **Устная работа:** После настоящего прослушивания перескажи статус партнёру. Он задаёт неизвестный заранее вопрос про время, batch или retry; уточни и проверь read-back.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 15:04. Пятнадцать ноль четыре, не fifteen forty.
2. Ключ: 16. Не шесть новых probes.
3. Ключ: 13. Два pending и один unknown отдельно.
4. Ключ: Kim. Передача Ari не принята.
5. Возможный образец (не единственный ответ): Реальное прослушивание и собственные заметки; если звук недоступен, отдельно пометь reading-only.. Транскрипт не выдавать за услышанный звук и произношение.
6. Возможный образец (не единственный ответ): 15:04 observation, 15:10 alert, 15:12 pause; actual onset unknown.. Не перенести 15:40 из оговорки в итоговую сводку.
7. Возможный образец (не единственный ответ): Six new probes separate from old batch; 13 confirmed/2 pending/1 unobserved.. Сформулировать связный ответ с отдельными группами.
8. Возможный образец (не единственный ответ): New probe success, earlier batch still needs follow-up, cause unconfirmed; исчезает ложное full fix.. Сохранить исходный сильный claim и исправленную область.
9. Возможный образец (не единственный ответ): Предложение не выполнено; duplicate behaviour unknown в этом setup.. Не рекомендовать реальный retry и не гарантировать отсутствие дубликата.
10. Возможный образец (не единственный ответ): Publish next update, not complete delivery; последующее время пока не agreed.. Не придумывать расписание через каждые пятнадцать минут.
11. Возможный образец (не единственный ответ): Mira message 15:30, Dev delivery wording only, Kim coordination; Ari unavailable/refused.. Ограничение и отказ не новая роль.
12. Возможный образец (не единственный ответ): Реальная речь, исходный пересказ и поправка отдельно; без аудио pronunciation/fluency unknown.. Если доступен только текст, пометь reading-based discussion, не успешное аудирование.

</details>

## Письмо: handover и public update

Самостоятельное досье Hawthorn Search 2.8, drill 7, срез 12:28 UTC. Все сведения вымышлены; это не Orchard и не реальный incident response.

Newly saved articles should appear in search within two minutes after an acknowledged save. Existing articles remain searchable. At 12:03 a user report said that a new article was missing. The first alert was at 12:09; the actual beginning of the problem is unknown. An index configuration change at 11:55 is a hypothesis, not a confirmed cause. In twelve synthetic save-to-search checks, nine new articles appeared within two minutes, two appeared after five minutes, and one was still unobserved when collection stopped after six minutes. The twelfth is not proven deleted or permanently missing. All twelve saves were acknowledged; acknowledgement is not search visibility. Eight selected existing articles were found, not every existing article globally.

At 12:18 responders paused new indexing configuration rollout in the exercise. The pause does not undo a change already applied. A proposal to rebuild the index is not approved or executed. Four fresh checks at 12:23–12:27 each met the two-minute target; these do not settle the earlier unobserved article or establish a permanent fix. There is no complete count of affected customers and no confirmed cause. Jules accepts the 12:45 UTC status update even if unresolved; Bea agrees to review the timeline, not operate the index. At 12:28 Oren asks Vale to take coordination; Vale has not replied. Oren therefore remains coordinator in this exercise. No severity policy or universal rule for declaring resolution has been supplied.

Write a 350–450-word internal incident handover with a clearly labelled 80–120-word public update inside it. Include observed impact, chronology, performed/proposed actions, current limits, accepted roles and next communication. The public paragraph must be understandable without implementation jargon and must not invent a user workaround. Keep the original. After real feedback, write a separate complete 350–450-word revision, not a list of edits. Both word ranges are writing goals, not time limits; you may pause anywhere. Do not invent feedback, approval, spoken interaction or investigation results.

Полные модели Orchard для анализа, не ответ на Hawthorn:

REPORT

Orchard exercise 18: internal handover at 09:32 UTC

The selected export path is being monitored after a routing change, but full recovery has not been confirmed. This note separates new request behaviour from previously delayed jobs. The underlying cause remains under investigation. No severity classification is included because this record does not supply an agreed severity policy.

A configuration change was recorded at 09:02. The earliest observed error in the available extract was at 09:06, followed by an alert at 09:10 and incident declaration at 09:12. We must not substitute the declaration time for the beginning of user impact. Nor does this sequence establish that the configuration change caused the incident.

From 09:06 to 09:16, forty of two hundred attempts returned errors. Retries are included, so this is not a count of unique affected customers. Twelve selected existing downloads opened successfully. Those checks do not establish that all download paths or regions were unaffected, and the request errors alone do not demonstrate loss of previously stored reports.

Responders switched new requests to the previous path at 09:18. In the 09:20–09:30 window, two of two hundred attempts returned errors. This supports a report of lower observed errors in that sample, not a confirmed causal explanation or permanent repair. Of eighteen previously delayed jobs, fourteen were complete, three pending and one unobserved at 09:30. These jobs need separate follow-up.

Public update: We are continuing to monitor export requests after changing the route used to process them. The latest sample shows fewer errors, but we have not confirmed that all previously delayed exports have completed. Fourteen of the eighteen delayed jobs in our current record are complete; three remain pending and one still needs a confirmed outcome. The cause remains under investigation. Our checks of selected existing downloads were successful, but they do not establish the condition of every download. We will provide another update at 09:45 UTC, even if the remaining outcomes have not changed.

Noor accepted coordination until 10:00 after reading back the outstanding work. Lea retains responsibility for the 09:45 message; Kai has accepted trace review by 09:40, not implementation. The handover should preserve these limits, keep private identifiers out of public messages and record corrections with their times. Proposed further actions still require the appropriate agreement within the exercise.

TIMELINE

Reading the Orchard timeline

At 09:02, a configuration change was recorded. The earliest observed export error in the available extract followed at 09:06. The alert at 09:10 and declaration at 09:12 represent detection and coordination events, not two additional proven start times. Although the configuration change preceded the errors, chronology alone does not establish causation.

At 09:18, responders routed new requests through the previous path. The later 09:20–09:30 sample contained two errors among two hundred attempts, compared with forty among two hundred in the earlier window. These observations support a narrower claim than “the fix worked for everybody”. They describe samples with attempts as their unit, including retries.

The delayed-job snapshot at 09:30 is separate: fourteen complete, three pending and one final result unobserved. At 09:32, Noor accepted coordination until 10:00, while Lea retained the next communication. The scheduled 09:45 update is a commitment to communicate, not an estimate of restoration. A reader needs these distinctions to continue the work without mistaking a future message for a promised resolution.

CLARIFICATION

Could you clarify what you mean by “all clear”? The later sample contains two errors among two hundred export attempts, and four earlier jobs still lack a confirmed completion: three are pending and one has no collected final result. If you mean that the selected path is showing fewer errors, the record supports that statement. If you mean that every delayed export has completed and the cause is permanently removed, it does not. Please also confirm whether your proposed wording concerns the public update or the internal working record. We should agree the scope before replacing the current status with a stronger claim.

OBJECTION

I agree that the later request sample is encouraging, but I would not describe the configuration change as the confirmed cause. Its timing makes it a reasonable hypothesis to investigate; it does not isolate a causal mechanism. Likewise, routing through the previous path was followed by fewer observed errors, but that sequence does not prove that every path has recovered. We can be decisive about communication without overstating the evidence: name the improvement, retain the unresolved jobs and publish the next update at the agreed time. That wording recognises the work already done while leaving the investigation open to a different explanation.

HANDOVER

Noor, please confirm that you are accepting incident coordination until 10:00 UTC. The selected export path is being monitored, with two errors in the later two-hundred-attempt sample. Fourteen of eighteen earlier jobs are complete; three remain pending and one has no observed final outcome. The cause is unconfirmed. Lea retains the 09:45 public update, and Kai has agreed to review traces by 09:40, not implement a fix. Please read back those limits and tell me if any responsibility is unclear. Acknowledging this summary confirms the handover scope; it does not authorise further changes or certify complete service recovery across every path.

REVISION

Revised Orchard handover: scope and ownership clarified

The exercise remains in monitoring for the selected export path. We have evidence of lower errors in a later request sample, but no confirmation of complete recovery or a permanent repair. This revision makes the affected units, observation windows and accepted responsibilities explicit. It does not add investigation results that are absent from the working record.

The configuration change at 09:02 preceded the earliest observed error at 09:06. An alert fired at 09:10, and the incident was declared at 09:12. The actual beginning of the underlying problem is unknown. The temporal sequence supports investigating a possible connection; it does not establish the change as the cause or identify a person to blame.

The first selected window contained 200 export attempts, including retries, with 160 successes and 40 errors. Twelve separately checked existing downloads opened successfully. Neither finding establishes the number of unique people affected or the state of every download. At 09:18, responders routed new requests through the previous path. The later window contained 198 successes and two errors among 200 attempts. The observed error proportion fell from 20% to 1%, a nineteen-percentage-point reduction, without proving which factor caused that improvement.

Public update: We are monitoring export requests after changing their processing route. Our latest sample shows fewer errors, but checks of previously delayed exports are not complete. Fourteen of eighteen delayed jobs in the current record have completed. Three are still pending, and one needs a confirmed final result. We have not confirmed the underlying cause or full recovery. Checks of selected existing downloads were successful; that does not establish the condition of every download. Our next update is scheduled for 09:45 UTC, including if the remaining outcomes are unchanged. We recognise the inconvenience caused by the disruption.

The handover is explicit: Noor accepted coordination until 10:00 after a read-back. Lea retains the public message, and Kai accepted trace review by 09:40 only. The unknown job needs an observed outcome, not an assumed failure. Further technical actions require separate agreement. This revision preserves the earlier record and should be stored alongside actual reviewer comments; the model itself is not evidence that a learner received feedback.

1. **Развёрнутый ответ:** Разбери полный report Orchard: функции абзацев, границы чисел, статус действий и ownership. Не заменяй разбор пересказом.
2. **Развёрнутый ответ:** По независимому Hawthorn напиши полный internal handover 350–450 слов, включив отдельный public абзац 80–120 слов. Сохрани исходник.
3. **Развёрнутый ответ:** Сопоставь twelve acknowledged saves и nine timely appearances Hawthorn в 80–100 словах.
4. **Развёрнутый ответ:** Разбери timeline model Orchard: где время события, а где scheduled message? Напиши timeline Hawthorn из 6–8 пунктов.
5. **Развёрнутый ответ:** Напиши clarification Hawthorn 100–140 слов на утверждение All twelve saves were fine, so search is fixed.
6. **Развёрнутый ответ:** Напиши нейтральное возражение 100–140 слов: pause доказывает configuration caused issue. Признай реальный положительный результат новых checks.
7. **Развёрнутый ответ:** Напиши запрос Vale о принятии координации Hawthorn 100–140 слов. Не выдавай свою просьбу за ответ Vale.
8. **Развёрнутый ответ:** Получи настоящий feedback к своему writing-2: процитируй ответ, выпиши 2–3 типа пробелов и новые формулировки. Если review ещё нет, оставь pending.
9. **Развёрнутый ответ:** После feedback напиши отдельную полную редакцию Hawthorn 350–450 слов, сохранив исходник writing-2. Внутри снова public абзац 80–120 слов.
10. **Развёрнутый ответ:** Сравни original и revision по трём цитатам. Почему новая версия точнее, а не просто короче?
11. **Развёрнутый ответ:** Отредактируй They was careless so all customers lost reports. Cause unknown, errors in selected attempts — единственные данные.
12. **Развёрнутый ответ:** Новый Birch login brief:4 of 10 synthetic logins rejected; 6 accepted; no account loss check; reset proposed, not run; Anaowns 16:20 update. Напиши 80–120 слов public status.
13. **Развёрнутый ответ:** Создай correction note 60–90 слов: раньше написал all old jobs complete, теперь реальный brief подтверждает 14/18 и другие статусы. Датируй поправку условным временем.
14. **Развёрнутый ответ:** Составь личный editing checklist из пяти вопросов и применяй его к незнакомому next brief.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Orchard exercise 18: internal handover at 09:32 UTC The selected export path is being monitored after a routing change, but full recovery has not been confirmed. This note separates new request behaviour from previously delayed jobs. The underlying cause remains under investigation. No severity classification is included because this record does not supply an agreed severity policy. A configuration change was recorded at 09:02. The earliest observed error in the available extract was at 09:06, followed by an alert at 09:10 and incident declaration at 09:12. We must not substitute the declaration time for the beginning of user impact. Nor does this sequence establish that the configuration change caused the incident. From 09:06 to 09:16, forty of two hundred attempts returned errors. Retries are included, so this is not a count of unique affected customers. Twelve selected existing downloads opened successfully. Those checks do not establish that all download paths or regions were unaffected, and the request errors alone do not demonstrate loss of previously stored reports. Responders switched new requests to the previous path at 09:18. In the 09:20–09:30 window, two of two hundred attempts returned errors. This supports a report of lower observed errors in that sample, not a confirmed causal explanation or permanent repair. Of eighteen previously delayed jobs, fourteen were complete, three pending and one unobserved at 09:30. These jobs need separate follow-up. Public update: We are continuing to monitor export requests after changing the route used to process them. The latest sample shows fewer errors, but we have not confirmed that all previously delayed exports have completed. Fourteen of the eighteen delayed jobs in our current record are complete; three remain pending and one still needs a confirmed outcome. The cause remains under investigation. Our checks of selected existing downloads were successful, but they do not establish the condition of every download. We will provide another update at 09:45 UTC, even if the remaining outcomes have not changed. Noor accepted coordination until 10:00 after reading back the outstanding work. Lea retains responsibility for the 09:45 message; Kai has accepted trace review by 09:40, not implementation. The handover should preserve these limits, keep private identifiers out of public messages and record corrections with their times. Proposed further actions still require the appropriate agreement within the exercise.. Укажи конкретные фрагменты модели; это анализ, не самостоятельный Hawthorn.
2. Возможный образец (не единственный ответ): Собственный полный текст: target 2 minutes, 9 timely/2 late/1 unobserved, 8 existing checks, 4 new checks, pause not revert, proposal not done, Oren remains, Jules 12:45.. Рубрика 0–4: выполнение жанра/точность scope/организация/язык; не выдумывать cause, loss, role acceptance или workaround.
3. Возможный образец (не единственный ответ): Acknowledgement не search visibility; two late observations established, one unobserved at cutoff; не three lost.. Самостоятельное объяснение для нового участника.
4. Возможный образец (не единственный ответ): Reading the Orchard timeline At 09:02, a configuration change was recorded. The earliest observed export error in the available extract followed at 09:06. The alert at 09:10 and declaration at 09:12 represent detection and coordination events, not two additional proven start times. Although the configuration change preceded the errors, chronology alone does not establish causation. At 09:18, responders routed new requests through the previous path. The later 09:20–09:30 sample contained two errors among two hundred attempts, compared with forty among two hundred in the earlier window. These observations support a narrower claim than “the fix worked for everybody”. They describe samples with attempts as their unit, including retries. The delayed-job snapshot at 09:30 is separate: fourteen complete, three pending and one final result unobserved. At 09:32, Noor accepted coordination until 10:00, while Lea retained the next communication. The scheduled 09:45 update is a commitment to communicate, not an estimate of restoration. A reader needs these distinctions to continue the work without mistaking a future message for a promised resolution.. Hawthorn 11:55 change, 12:03 report, 12:09 alert, 12:18 pause, 12:23–27 checks, 12:28 request, 12:45 update; onset unknown.
5. Возможный образец (не единственный ответ): Could you clarify what you mean by “all clear”? The later sample contains two errors among two hundred export attempts, and four earlier jobs still lack a confirmed completion: three are pending and one has no collected final result. If you mean that the selected path is showing fewer errors, the record supports that statement. If you mean that every delayed export has completed and the cause is permanently removed, it does not. Please also confirm whether your proposed wording concerns the public update or the internal working record. We should agree the scope before replacing the current status with a stronger claim.. Уточнить meaning fine; acknowledged saves и своевременная visibility различны. Модель Orchard только ориентир по жанру.
6. Возможный образец (не единственный ответ): I agree that the later request sample is encouraging, but I would not describe the configuration change as the confirmed cause. Its timing makes it a reasonable hypothesis to investigate; it does not isolate a causal mechanism. Likewise, routing through the previous path was followed by fewer observed errors, but that sequence does not prove that every path has recovered. We can be decisive about communication without overstating the evidence: name the improvement, retain the unresolved jobs and publish the next update at the agreed time. That wording recognises the work already done while leaving the investigation open to a different explanation.. Four timely checks valid, causation not isolated, old unknown not settled; не отвергать хорошие свидетельства полностью.
7. Возможный образец (не единственный ответ): Noor, please confirm that you are accepting incident coordination until 10:00 UTC. The selected export path is being monitored, with two errors in the later two-hundred-attempt sample. Fourteen of eighteen earlier jobs are complete; three remain pending and one has no observed final outcome. The cause is unconfirmed. Lea retains the 09:45 public update, and Kai has agreed to review traces by 09:40, not implement a fix. Please read back those limits and tell me if any responsibility is unclear. Acknowledging this summary confirms the handover scope; it does not authorise further changes or certify complete service recovery across every path.. Состояние, open checks, Oren until acceptance, Jules 12:45 и просьба read-back; никаких реальных контактов.
8. Возможный образец (не единственный ответ): Реальные комментарии агента/преподавателя и твои цитаты; модель не фиктивный feedback.. Раздельно точность содержания, грамматика, естественность и регистр.
9. Возможный образец (не единственный ответ): Revised Orchard handover: scope and ownership clarified The exercise remains in monitoring for the selected export path. We have evidence of lower errors in a later request sample, but no confirmation of complete recovery or a permanent repair. This revision makes the affected units, observation windows and accepted responsibilities explicit. It does not add investigation results that are absent from the working record. The configuration change at 09:02 preceded the earliest observed error at 09:06. An alert fired at 09:10, and the incident was declared at 09:12. The actual beginning of the underlying problem is unknown. The temporal sequence supports investigating a possible connection; it does not establish the change as the cause or identify a person to blame. The first selected window contained 200 export attempts, including retries, with 160 successes and 40 errors. Twelve separately checked existing downloads opened successfully. Neither finding establishes the number of unique people affected or the state of every download. At 09:18, responders routed new requests through the previous path. The later window contained 198 successes and two errors among 200 attempts. The observed error proportion fell from 20% to 1%, a nineteen-percentage-point reduction, without proving which factor caused that improvement. Public update: We are monitoring export requests after changing their processing route. Our latest sample shows fewer errors, but checks of previously delayed exports are not complete. Fourteen of eighteen delayed jobs in the current record have completed. Three are still pending, and one needs a confirmed final result. We have not confirmed the underlying cause or full recovery. Checks of selected existing downloads were successful; that does not establish the condition of every download. Our next update is scheduled for 09:45 UTC, including if the remaining outcomes are unchanged. We recognise the inconvenience caused by the disruption. The handover is explicit: Noor accepted coordination until 10:00 after a read-back. Lea retains the public message, and Kai accepted trace review by 09:40 only. The unknown job needs an observed outcome, not an assumed failure. Further technical actions require separate agreement. This revision preserves the earlier record and should be stored alongside actual reviewer comments; the model itself is not evidence that a learner received feedback.. Модель Orchard не решение Hawthorn; нужен новый полный документ с исправлениями и сохранённой неопределённостью, не список edits.
10. Возможный образец (не единственный ответ): Основания в настоящих изменениях ученика, не выдуманные успехи.. Сохранены факты, units, роли, unknown и audience; допустимы разные варианты.
11. Возможный образец (не единственный ответ): Selected attempts returned errors; the cause and any report loss have not been established.. Снять неподтверждённые blame/all/loss; исправить agreement, не скрыть observed errors.
12. Возможный образец (не единственный ответ): Function, 4/10 attempts, unknown cause, proposal not execution, next message 16:20; не реальные логины или инструкции reset.. Перенос на иной механизм, без обещания восстановления/потери аккаунтов.
13. Возможный образец (не единственный ответ): Оригинальная claim названа неверной; corrected 14 complete/3 pending/1 unknown, reference snapshot 09:30.. Учебная дата помечена как условная, историю не стирать.
14. Возможный образец (не единственный ответ): Правильное время/единица/scope, факт vs гипотеза, действие vs предложение, принятая роль, next update versus ETA.. Не является дополнительным сертификатом освоения.

</details>

## Речь: обновление, вопросы и передача

1. **Устная работа:** Представь Orchard устно за связный подход: impact, timeline, known/unknown, actions, next update. Партнёр пересказывает основное.
2. **Устная работа:** Попроси партнёра задать неожиданный вопрос к твоему статусу. Ответь по evidence или явно скажи unknown.
3. **Устная работа:** Партнёр утверждает Forty customers lost files. Уточни, какая часть подтверждена, и попроси read-back.
4. **Устная работа:** Проговори 09:06/09:10/09:12 и роли событий; партнёр намеренно смешивает alert и start. Исправь.
5. **Устная работа:** Сделай учебную оговорку fifteen forty вместо fifteen oh four, затем явно исправь. Партнёр подтверждает услышанное.
6. **Устная работа:** Переформулируй внутреннее сообщение Orchard для нетехнического слушателя; он сообщает, что осталось неясно.
7. **Устная работа:** Партнёр требует точное время полного recovery, которого нет. Дай ясный ответ и принятое время следующего сообщения.
8. **Устная работа:** Разыграй request to take over и реальный ответ партнёра: acceptance, ограничение или отказ по его выбору. Запиши только фактически принятый scope.
9. **Устная работа:** Получив отказ, объясни третьему участнику, кто остаётся coordinator в рамках Seabrook.
10. **Устная работа:** Возрази утверждению last probe passed therefore all batch ready. Партнёр добавляет новый отдельный batch result; обнови статус.
11. **Устная работа:** Обсуди реальный отзыв на Hawthorn original с партнёром и предложи 2–3 правки. Попроси подтвердить смысл одной сложной фразы.
12. **Устная работа:** Без текста перед глазами передай Hawthorn: другая функция, acknowledged save не visibility, pending handover. Партнёр меняет аудиторию.
13. **Устная работа:** Партнёр privately готовит новый 20–40 секундный synthetic incident update, читает без показа. Перескажи, уточни и запиши свою поправку после read-back.
14. **Устная работа:** Через 7 дней получи новый brief с другим сбоем и transfer roles. Представь статус и ответь на два неожиданных вопроса.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Реальная речь с сохранением18jobs и unknown cause; исходный ответ сохранить.. Не оценивать pronunciation/fluency по транскрипту, длина подхода не закрывает тему.
2. Возможный образец (не единственный ответ): Настоящий неизвестный вопрос, адресный ответ, при необходимости уточнение.. Не написать обе стороны заранее вместо взаимодействия.
3. Возможный образец (не единственный ответ): Forty attempts/errors, retries included, unique customers/loss unknown.. Исправить смысл спокойно, не выдумывать новые факты.
4. Возможный образец (не единственный ответ): Actual onset unknown, earliest observed, alert, declaration различны.. Реальные произнесённые числа; допустимы нормативные варианты акцента.
5. Возможный образец (не единственный ответ): I said fifteen forty; I meant fifteen oh four UTC.. Это обозначенная ролевая самопоправка, не фиктивная реальная ошибка ученика.
6. Возможный образец (не единственный ответ): Affected exports, fewer observed errors, old jobsnot all confirmed, next update.. Не обещать workaround или fixed cause ради простоты.
7. Возможный образец (не единственный ответ): Cannot yet give reliable recovery time; update 09:45 even if unresolved.. Вежливо без ложного ETA и бесконечного evasive jargon.
8. Возможный образец (не единственный ответ): Собеседник сам выбирает ответ, read-back фиксирует роль/границу.. Понимание, предложение и принятие не смешивать.
9. Возможный образец (не единственный ответ): Kim remains; Ari declined; Mira message; Dev review only.. Не назначать отсутствующего или отказавшегося owner.
10. Возможный образец (не единственный ответ): Разные множества; новый факт использовать ровно в его области, пометить добавление.. Реальная новая реплика, не перенос шести probes на шестнадцать messages.
11. Возможный образец (не единственный ответ): Настоящие цитаты/feedback/read-back, не выдуманный review.. Раздельно исходник, исправление и звучание; без аудио oral шкалы unknown.
12. Возможный образец (не единственный ответ): Связное новое изложение с точными 12/9/2/1 и 8/4 selected checks.. Не читать модель Orchard с заменой имени.
13. Возможный образец (не единственный ответ): Новый скрытый источник и реальное аудио; если недоступны — pending, не reading-as-listening.. Не включать реальные данные; сохранить услышанные фразы и feedback.
14. Возможный образец (не единственный ответ): Реальная отсрочка, новый материал, аудитория и принятые обязательства.. Нельзя заранее заполнить как успешный delayed check.

</details>

## Смешанное и отложенное применение

1. **Краткий ответ:** The coordinator agreed ___ publish the update. (to/for)
2. **Краткий ответ:** 9 из 12 timely checks: доля своевременных в процентах? Число.
3. **Развёрнутый ответ:** Без модели объясни after versus because of, monitoring versus resolved, unknown versus failed на трёх новых коротких примерах.
4. **Развёрнутый ответ:** Исправь Vale has taken over because he received the request. В Hawthorn ответа нет.
5. **Развёрнутый ответ:** Напиши 100–140 слов Hawthorn summary без reading passage перед глазами, потом сверь и сохрани correction.
6. **Развёрнутый ответ:** Новый Elm: причина подтверждена controlled reproduction, но одна accepted job pending. Можно ли сохранить cause unknown автоматически?
7. **Развёрнутый ответ:** Новый Reed: все 7 affected accounts identified и проверены, укажи exact count без глобального every user.
8. **Развёрнутый ответ:** Переведи: «Изменение было предложено до звонка, но к 12:00 ещё не выполнено; сообщим даже без новых результатов».
9. **Устная работа:** Партнёр добавляет неожиданную положительную проверку к новому кейсу; признай результат, пересмотри только затронутую часть и попроси read-back.
10. **Развёрнутый ответ:** Получив отзыв, выбери 2–3 типа своих ошибок и придумай разные новые задачи на них.
11. **Развёрнутый ответ:** Через 7 дней попроси другое synthetic incident досье с новой функцией, числами и ролями. Напиши 250–350 слов status/handover и сохрани дату.
12. **Устная работа:** Защити отложенный handover перед партнёром: он оспаривает один вывод и уточняет неизвестное.
13. **Развёрнутый ответ:** В первой версии T05 все 127 шагов заполнены. Что ещё не подтверждено и что пока не наполнено?
14. **Развёрнутый ответ:** Составь продолжение работы по реальным результатам: к каким банкам вернуться и какой новый вариант проходить?

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: to. Agree to do обозначает принятое действие.
2. Ключ: 75. Это checks, не доля клиентов или всех saves.
3. Возможный образец (не единственный ответ): Новые разные предложения с сохранёнными границами значения.. Оценка по смыслу, не обязательное совпадение формулировок.
4. Возможный образец (не единственный ответ): Oren remains coordinator; Vale has received or been sent a request but has not accepted in the record.. Даже receipt само отдельно не доказано без данных; sent/requested безопаснее.
5. Возможный образец (не единственный ответ): Факты 12 checks/9 timely/2 late/1 unobserved, 8 existing, 4 new, pause, nocause, roles/update.. Сохранить исходник до сверки; исправление не ретроспективная безошибочность.
6. Возможный образец (не единственный ответ): Нет, новое evidence подтверждает причину в scope brief; recovery jobs остаётся отдельным вопросом.. Не заучивать unknown как универсальный правильный ответ.
7. Возможный образец (не единственный ответ): Seven identified affected accounts in the stated record; не extrapolate за границы кейса.. Число людей возможно, если источник реально даёт его.
8. Возможный образец (не единственный ответ): The change had been proposed before the call but had not been carried out by 12:00. We will update you even if there are no new results.. В финальном ответе обычные пробелы; формы сохраняют proposal not execution.
9. Возможный образец (не единственный ответ): Новое свидетельство может усилить вывод в своей области, не всё или ничего.. Реальное взаимодействие и audio для oral шкал.
10. Возможный образец (не единственный ответ): Цитаты реального ответа, правило, самостоятельный пример и проверка.. Нет отзыва — pending, не фиктивный диагноз.
11. Возможный образец (не единственный ответ): Новый материал, самостоятельный документ, настоящее delayed application.. Не переименование Orchard и не немедленная имитация отсрочки.
12. Возможный образец (не единственный ответ): Адресные ответы и явная самопоправка при необходимости.. Без аудио pronunciation/fluency unknown, без партнёра interaction pending.
13. Возможный образец (не единственный ответ): Ручная проверка/качество/отложенный перенос; следующие postmortem/reliability/security линии T05.. Вопрос привязан к версии с одной подтемой; заполнение не mastery.
14. Возможный образец (не единственный ответ): Основания из конкретных answers/reviews, следующий незнакомый контроль, без фиксированного времени.. План зависит от содержания и пробелов, не истечения получаса.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** We have been checking invitation labels ___ 10:20. (since/for)
2. **Краткий ответ:** The formatting mechanism has ___ reproduced. (been/being)
3. **Краткий ответ:** Yesterday the team ___ the formatter at 10:20. (reverted/has reverted)
4. **Краткий ответ:** We will send a message even if the checks ___ unfinished. (remain/will remain)
5. **Краткий ответ:** Wren: 3 неверные labels из 6 проверенных — сколько процентов labels неверны? Число.
6. **Краткий ответ:** Wren: все шесть underlying UTC timestamps проверены и неизменны. Доказывают ли wrong labels повреждение этих timestamps? yes/no.
7. **Краткий ответ:** Wren: c7 formatting defect воспроизведён controlled test. Статус узкого механизма: confirmed/unconfirmed?
8. **Краткий ответ:** Четыре новые верные labels сами исправляют три уже доставленных неверных письма? yes/no.
9. **Краткий ответ:** Wren: обязательство на 10:40 касается update/recovery?
10. **Краткий ответ:** Tao принимает wording review. Его подтверждённая задача: review/coordination?
11. **Развёрнутый ответ:** Новый Wren Calendar 3.4, exercise 9, срез 10:26 UTC. Invitations должны показывать правильные local-time labels; stored UTC timestamps сохраняются. В шести доставленных synthetic invites три labels неверны, три верны; все шесть stored UTC timestamps отдельно сверены и неизменны. Число unique recipients не дано. В 10:08 первый report, 10:12 alert, actual onset unknown. Controlled reproduction в 10:17: на тех же synthetic times c7 formatter даёт неправильное local display, c6 правильное; дефект c7 formatting установлен в проверенном scope. В 10:20 вернули c6; четыре новых checks верны. Три уже доставленных неверных письма этим не изменились; correction message для них proposed, не отправлено. Dana принимает public update 10:40 даже при unresolved; Uma явно принимает coordination до 11:00; Tao только wording review. Перескажи impact и evidence, отличая confirmed mechanism от ещё не исправленного последствия.
12. **Развёрнутый ответ:** Построй Wren timeline: report, alert, reproduction, performed action, current limits и scheduled message. Что неизвестно?
13. **Развёрнутый ответ:** Напиши 80–120 слов: почему 3/6 wrong labels и 6/6 unchanged timestamps совместимы?
14. **Развёрнутый ответ:** Напиши Wren handover 350–450 слов с отдельным public update 80–120 слов: impact, timeline, confirmed/unknown, action/proposal, роли, next message.
15. **Развёрнутый ответ:** Составь уточнение: что подразумевает resolved, если новые labels верны, но старые письма ещё не исправлены?
16. **Устная работа:** Представь Wren партнёру без чтения готового текста. Он задаёт неожиданный вопрос про recipients или timing; ответь и уточни unknown.
17. **Развёрнутый ответ:** Отредактируй We monitoring for two hours since 10:20. The correction has sent yesterday. Today 10:26 — единственный срез. Объясни ошибки формы и evidence.
18. **Развёрнутый ответ:** Партнёр готовит новый synthetic audio update 30–60 секунд о другой функции: время, self-correction, limited commitment. Не показывая текст, читает/даёт запись. Прослушай и запиши observed/corrected/unknown и точные heard words.
19. **Устная работа:** Перескажи только что услышанное сообщение, попроси уточнить одну границу и получить адресный read-back.
20. **Развёрнутый ответ:** Новый Fir: all 4 synthetic attachments checked exact-match after restore, no other files checked. Сделай сильный, но ограниченный вывод.
21. **Развёрнутый ответ:** Напиши ответ коллег e, который просит Tao принять operations, хотя он принял только review.
22. **Устная работа:** Разыграй Wren handover. Партнёр неожиданно сокращает срок принятой роли; уточни новый scope и повтори распределение, сохранив историю.
23. **Развёрнутый ответ:** Получи настоящий feedback к своему полному Wren тексту. Процитируй 2–3 приоритетных замечания и исходные фразы.
24. **Развёрнутый ответ:** После feedback напиши отдельную полную revision Wren 350–450 слов с public абзацем 80–120 слов. Сохрани original.
25. **Устная работа:** Обсуди одну правку с reviewer: он оспаривает вывод, ты объясняешь основание или явно исправляешь себя.
26. **Развёрнутый ответ:** Новый Spruce: warning у 2 of 8 sessions, доступ во всех 8 сохранён; cause unknown; Nia message 17:00, никаких операций не принято. Напиши 80–120 слов public status.
27. **Устная работа:** Партнёр меняет аудиторию Spruce на нетехнического клиента и задаёт неожиданный вопрос «нужно ли мне что-то нажать?». Ответь по brief.
28. **Развёрнутый ответ:** Через 7 дней получи новый incident brief с другими фактами/ролями и напиши 250–350 слов handover; отдельно сохрани дату и комментарии.
29. **Развёрнутый ответ:** Десять closed answers правильные и все 127 шагов первой версии T05 заполнены. Что это не доказывает?
30. **Развёрнутый ответ:** Составь адресное продолжение по фактическому разбору:2–3 типа пробелов, банки и другой контрольный вариант.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: since. Начальная точка после since, длительность после for.
2. Ключ: been. Perfect passive: has been reproduced.
3. Ключ: reverted. Past Simple в завершённой временной рамке.
4. Ключ: remain. Present в обычном будущем условии.
5. Ключ: 50. Доля проверенных labels, не пользователей или временных значений в storage.
6. Ключ: no. Отображение и хранимое время проверены раздельно.
7. Ключ: confirmed. Появилось положительное causal evidence для заявленного механизма, не всех возможных сбоев.
8. Ключ: no. Новые проверки не переписывают ранее доставленные сообщения.
9. Ключ: update. Время коммуникации не ETA устранения всех последствий.
10. Ключ: review. Принятое ограниченное действие не другая роль.
11. Возможный образец (не единственный ответ): Три неверных labels, timestamps всех шести intact, узкий c7 mechanism reproduced; four new correct не correction delivered old messages, recipients unknown.. Не переносить Orchard unknown cause туда, где есть воспроизведение; не расширять доказательство за scope formatter.
12. Возможный образец (не единственный ответ): 10:08 report/10:12 alert/10:17 reproduction/10:20 revert/10:26 snapshot/10:40 update; actual onset unknown.. Никакой выдуманной точной даты начала или отправленной correction.
13. Возможный образец (не единственный ответ): Display может быть неверным при сохранных timestamps; три неверных invitations остаются реальным impact.. Не скрывать неверные labels за all storage intact и не объявить data corruption.
14. Возможный образец (не единственный ответ): Полный самостоятельный документ: confirmed formatter defect в scope, old emails unresolved, Uma coordination/Dana update/Tao review.. Рубрика 0–4: выполнение задачи, факты/scope, структура, язык; не matched model. Исходник сохранить для отдельной редакции.
15. Возможный образец (не единственный ответ): Уточнить критерий статуса и необходимость correction; не подменять улучшение устранением всех последствий.. Разные команды задают статусы; в brief универсальный критерий не дан.
16. Возможный образец (не единственный ответ): Реальное устное сообщение и адресный ответ; не выдумывать count или onset.. Без аудио pronunciation/fluency unknown, по транскрипту только содержание.
17. Возможный образец (не единственный ответ): We have been monitoring since 10:20; только шесть минут до 10:26, не two hours. The correction has been proposed but not sent.. Не просто грамматически исправить ложный sent; для отдельного finished yesterday было бы was sent.
18. Возможный образец (не единственный ответ): Настоящий скрытый источник, собственные заметки и последующая сверка с партнёром; без звука pending.. Не использовать Wren как уже известный listening test; не выдумывать звук или feedback.
19. Возможный образец (не единственный ответ): Новая живая реакция и уточнение по реальному источнику.. Listening/transcript отдельно; без партнёра interaction не подтверждено.
20. Возможный образец (не единственный ответ): All four checked synthetic attachments match exactly; other files are not covered.. Не автоматическое unknown для реально проверенной группы и не все данные сервиса.
21. Возможный образец (не единственный ответ): Tao has accepted wording review only; operational responsibility requires separate explicit agreement.. Не назначить отсутствующего человека ради красивой таблицы.
22. Возможный образец (не единственный ответ): Реальное новое ограничение обозначено как добавление к сценарию, а не молчаливая перепись исходного brief.. Запись принятия отдельно от request/understanding, речь по аудио.
23. Возможный образец (не единственный ответ): Реальный reviewer и критерии; нет review — pending.. Модель обратной связи не засчитывать как состоявшуюся оценку.
24. Возможный образец (не единственный ответ): Полный документ с реальными исправлениями; не список edits и не выдуманные исправленные письма.. Проверить новые факты/scope/commitments, исходник остаётся в attempt.
25. Возможный образец (не единственный ответ): Настоящий новый вопрос и self-repair с сохранением исходной формулировки.. Не монолог, где ученик написал обе роли.
26. Возможный образец (не единственный ответ): Предупреждение в двух сессиях не outage всех пользователей; восемь доступных sessions не отсутствие warning.. Новая функция и scope, не Wren с заменой имени.
27. Возможный образец (не единственный ответ): Нет согласованного user workaround; объяснить known impact и next message, уточнить без выдуманной операции.. Не давать реальные инструкции для неизвестной системы.
28. Возможный образец (не единственный ответ): Настоящий delayed transfer, не переписанный сегодня Wren.. До выполнения pending; не автоматическое mastery после closed score.
29. Возможный образец (не единственный ответ): Качество письма/речи, delayed mastery и полноту ещё не опубликованных postmortem/reliability/security линий.. Различать объём опубликованной работы и качество навыка.
30. Возможный образец (не единственный ответ): Реальные цитаты/критерии и новый материал; если review нет, не выдумывать результат.. Темп ученика меняет календарь, не объём необходимых заданий.

</details>

### Вариант B

1. **Краткий ответ:** The final outcome has not ___ observed. (been/being)
2. **Краткий ответ:** The reviewer agreed ___ inspect the summary. (to/for)
3. **Краткий ответ:** The report coincided ___ an alert. (with/on)
4. **Краткий ответ:** We checked the files ___ five minutes. (for/since)
5. **Краткий ответ:** Juniper: два empty files из восьми generated — доля empty в процентах? Число.
6. **Краткий ответ:** Juniper: сколько файлов действительно содержат требуемые три rows? Число.
7. **Краткий ответ:** Juniper: два пустых файла проверены. Статус нарушения content requirement: observed/unobserved?
8. **Краткий ответ:** Juniper: статус rerun в досье: proposed/performed?
9. **Краткий ответ:** Sol ответил I cannot take over. Кто остаётся coordinator Juniper? Имя.
10. **Краткий ответ:** Min обещает следующее сообщение в 16:10 UTC. Обязательство относится к update/recovery?
11. **Развёрнутый ответ:** Новый Juniper Reports 5.1, exercise 24, срез 15:52 UTC. Для fixture с тремя заданными rows каждый файл должен содержать эти три rows. В 15:30 восемь jobs имеют status complete; шесть файлов содержат все 3 rows, два файла пустые. Все 8 files существуют, deletion не наблюдалось; cause unknown. First empty observed 15:31, alert 15:35, declaration 15:39; actual onset unknown. New scheduled runs paused 15:42; old empty files этим не заполнены. Rerun двух jobs proposed, not run. В 15:48 три новые проверки другого path дали правильные content; они не подтверждают прежний path или два старых файла. Min принял public message 16:10; Jo координирует; Sol отказался принять роль; Ren предлагает спросить, кто может review, не обещает доступ или fix. Объясни главную проблему и границы evidence.
12. **Развёрнутый ответ:** Построй timeline Juniper и отдели observation, alert, declaration, performed pause, proposed rerun, new checks и scheduled message.
13. **Развёрнутый ответ:** Напиши 80–120 слов: почему All files exist и Two outputs are invalid не противоречат друг другу?
14. **Развёрнутый ответ:** Напиши Juniper handover 350–450 слов и вложенный public update 80–120 слов: известный impact, timeline, unknown cause, scope checks, роли/сообщение.
15. **Развёрнутый ответ:** Составь уточнение к утверждению We are ready because all jobs are complete: какой readiness criterion нужен?
16. **Устная работа:** Представь Juniper партнёру и ответь на неизвестный заранее вопрос про пустые файлы или число клиентов.
17. **Развёрнутый ответ:** Исправь The cause has confirmed. We will message if nothing will change. Данные Juniper не подтверждают cause.
18. **Развёрнутый ответ:** Партнёр создаёт новый скрытый 30–60 секундный audio brief о другой функции: минимум одна correction и отказ принять действие. Прослушай и запиши corrected time, impact и commitment limits.
19. **Устная работа:** Передай услышанный brief третьему участнику/партнёру; он оспаривает одно число, ты уточняешь источник и делаешь read-back.
20. **Развёрнутый ответ:** Новый Elm: bad outputs воспроизведены только на 1 из 2 versions, испытания причины ещё не изолировали. Напиши bounded hypothesis.
21. **Развёрнутый ответ:** Напиши просьбу Ren уточнить, кто может review, не назначая Ren implementation owner.
22. **Устная работа:** Разыграй handover Juniper: собеседник вместо полного takeover принимает только public message. Уточни coordination отдельно.
23. **Развёрнутый ответ:** Получив настоящий отзыв на Juniper original, запиши цитаты 2–3 приоритетных замечаний и соответствующие исходные фразы.
24. **Развёрнутый ответ:** Напиши отдельную полную Juniper revision 350–450 слов с public абзацем 80–120 слов по реальному review. Сохрани original.
25. **Устная работа:** Обсуди изменение текста с партнёром, попроси неожиданный вопрос и явно уточни слишком сильную собственную фразу.
26. **Развёрнутый ответ:** Новый Beech:10 preview checks, 8 correct/2 wrong thumbnail, originals всех 10 exact-match, rebuild proposed, Teo update 18:00. Напиши 80–120 слов public status.
27. **Устная работа:** Партнёр добавляет Beech новое свидетельство: обе thumbnails теперь проверены и верны. Пересмотри статус, но не выдумывай cause или universal resolution policy.
28. **Развёрнутый ответ:** Через 7 дней получи другое synthetic incident досье и напиши 250–350 слов handover, затем обсуди 2 неожиданных вопроса.
29. **Развёрнутый ответ:** Поясни, почему full practice плюс 10/10 closed не подтверждают manual writing/speech и весь T05 первой версии.
30. **Развёрнутый ответ:** На основании реального разбора выбери адресную практику и следующий новый контроль. Обоснуй каждую часть цитатой.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: been. Perfect passive требует been + participle.
2. Ключ: to. Agree to do, не agree for do.
3. Ключ: with. Устойчивое управление coincide with.
4. Ключ: for. Длительность вводится for.
5. Ключ: 25. Доля файлов в этой группе, не клиентов.
6. Ключ: 6. Два empty нарушают заданный content requirement.
7. Ключ: observed. Два нарушения установлены, неизвестна причина.
8. Ключ: proposed. Proposed action не execution.
9. Ключ: Jo. Прямой отказ, не скрытое согласие.
10. Ключ: update. Next communication и recovery commitment различны.
11. Возможный образец (не единственный ответ): Complete statuses не content compliance; два empty established, не unknown/lost; other path 3 correct не repair old path. Jo remains, Min update.. Независимый механизм; не переносить Wren confirmed cause и unchanged timestamps.
12. Возможный образец (не единственный ответ): 15:30 statuses, 15:31 first empty, 15:35 alert, 15:39 declaration, 15:42 pause, 15:48 other path checks, 16:10 message; onset unknown.. Пауза не заполнила старые файлы и не исполнила rerun.
13. Возможный образец (не единственный ответ): Existence отдельно от content requirement; 6 valid/2 empty, нет доказанного deletion и нет 100%content success.. Не размывать известный mismatch словом possibly.
14. Возможный образец (не единственный ответ): Полный оригинальный текст; Jo координирует, Sol refused, Ren offer only, Min 16:10; rerun not done.. Рубрика 0–4 по жанру, фактам/scope, организации и языку; original сохранить.
15. Возможный образец (не единственный ответ): Три rows в каждом файле; два outputs empty, хотя statuses complete. Уточнить условия завершения и дальнейшие checks.. Не придумывать универсальный статус incident resolution.
16. Возможный образец (не единственный ответ): Реальная речь: file count не customer count, observed empty не deletion, cause unknown.. Pronunciation/fluency без аудио остаются unknown.
17. Возможный образец (не единственный ответ): The cause has not been confirmed. We will message even if nothing changes.. Важны отрицание и evenif: message обещано даже без изменений, не только если изменений нет.
18. Возможный образец (не единственный ответ): Реальный новый источник, не опубликованный Juniper; heard words и затем сверка.. Без прослушивания pending, чтение не слуховой результат.
19. Возможный образец (не единственный ответ): Адресное реальное взаимодействие и проверка числа/единицы.. ASR mismatch сам не ошибка ученика; без аудио oral шкалы unknown.
20. Возможный образец (не единственный ответ): The affected version is a useful lead, but a causal mechanism has not been established by that comparison alone.. Нельзя переносить Wren controlled formatter finding на этот более слабый brief.
21. Возможный образец (не единственный ответ): Could you find out who can review the evidence? Please confirm whether anyone accepts that task.. Offer enquiry не доступ, согласие третьего лица или fix.
22. Возможный образец (не единственный ответ): Фактический limited acceptance, Jo remains unless another accepts; изменение от исходного brief явно обозначить как новую реплику.. Не смешивать молчание, понимание и принятие другой роли.
23. Возможный образец (не единственный ответ): Только состоявшийся review; без него pending.. Не выдумывать оценки ради отправленной попытки.
24. Возможный образец (не единственный ответ): Полный новый текст, не edits list; известный content mismatch не исчезает без нового evidence.. Не засчитывать модель как работу ученика и не фабриковать rerun results.
25. Возможный образец (не единственный ответ): Реальные исходник/уточнение/read-back, не только чтение готового revision.. Оценка содержания отдельно от произношения и fluency.
26. Возможный образец (не единственный ответ): Preview mismatch установлен, exact originals сохранены в группе; proposed rebuild не выполнен.. Не импортировать Juniper empty files и не объявить originals corrupt.
27. Возможный образец (не единственный ответ): Признать confirmed improvement двух thumbnails; спросить remaining criteria и обновить affected scope.. Живая реакция на добавление, не правило always unknown.
28. Возможный образец (не единственный ответ): Новые данные, реальная отсрочка, самостоятельное письмо и устное взаимодействие.. До выполнения pending; текст не заменяет звук.
29. Возможный образец (не единственный ответ): Открытые навыки требуют review, delayed application ещё отдельна; postmortem/reliability/security не наполнены этой подтемой.. Статус partial относится к содержанию, не диагнозу ученика.
30. Возможный образец (не единственный ответ): Фактические пробелы и критерии, неизвестные навыки явно unknown.. Не завершать курс по таймеру или выдуманному баллу.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Инцидент: влияние, хронология, неопределённость и передача](../appendices/incident-language.md)
- [Язык отчётов о работе, помощи и handover](../appendices/work-update-language.md)
- [Сообщённый факт: сложный пассив и относительное время](../appendices/reporting-passive.md)
- [Источник, пересказ и проверяемое утверждение](../appendices/source-attribution.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [Google SRE Workbook: Incident Response](https://sre.google/workbook/incident-response/)
- [Google SRE Book: Managing Incidents](https://sre.google/sre-book/managing-incidents/)

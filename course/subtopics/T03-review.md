# T03-review · Код-ревью: точное замечание, обоснование и ответ автора

[Топик T03](../modules/T03.md). Сгенерировано из data/*.mjs.

Предпосылки: [T02-updates](T02-updates.md).

## Цели контроля

- Строить просьбы, вопросы, условия и объяснения без потери смысла
- Связывать наблюдение, требование и вывод с конкретной версией
- Различать обязательность, предложение, вопрос и конкретную похвалу
- Уточнять, соглашаться или возражать и сохранять историю изменений
- Восстанавливать ход ревью и границы свидетельств
- Понимать устную поправку, вопрос и принятое действие
- Писать полное ревью и отдельную содержательную редакцию
- Обсуждать разногласие и проверять понимание в живом обмене

## Механизм

### Комментарий касается изменения, а не личности

You are careless оценивает человека и не помогает найти конкретное поведение. The guard checks the original string before trimming указывает наблюдаемое устройство. Добавь связь с требованием: With a spaces-only input, the function returns Ready rather than No text. Затем объясни, почему это важно, и задай вопрос или попроси исправление. Не каждый короткий комментарий обязан повторять весь шаблон, если контекст уже виден; однако непонятные This is wrong и Fix it заставляют автора угадывать предмет. Слово you допустимо в просьбе Could you add an example? — запрета на местоимение нет. Ошибка возникает при необоснованном переходе от кода к намерениям или качествам человека. Все PR и версии здесь вымышлены, реальные комментарии на GitHub не отправляются.

### Наблюдение, вывод и риск имеют разную силу

The attached check returned Ready — зарегистрированное наблюдение в условиях кейса. The code appears to test the original length — интерпретация прочитанного. This could produce a misleading preview — возможное следствие, не измеренная частота реальных ошибок. Не ослабляй подтверждённый факт до maybe только ради вежливости и не усиливай гипотезу до always breaks. К каждому выводу спроси: какая версия, какой вход, какой ожидаемый результат, какое свидетельство? Пять успешных проверок и одна неуспешная означают ровно эти шесть проверок, не процент надёжности всего продукта. Досье уже сообщает результаты; ученик анализирует язык и данные, но не должен выдавать чтение сценария за личный запуск приложения.

### Could, would и просьба без лишнего to

Could you check the trimmed value? строится modal + subject + base: не Could you to check и не Could you checks. Could we keep these concerns separate? предлагает совместный шаг; we не доказывает, что собеседник согласился. Would you mind explaining the requirement? содержит mind + -ing. В ответ на mind полезнее Sure, I can explain или Sorry, I cannot do that now, если короткое yes/no может запутать: No, not at all обычно означает отсутствие возражения. Could смягчает форму просьбы, но не снимает требование: Required before approval: could you preserve the input? остаётся обязательным по явно указанному основанию. Прямое Please preserve the input также может быть профессиональным и уважительным.

### Дополнения глаголов и типичные кальки

Avoid changing, consider renaming, suggest adding используют -ing в изучаемых моделях. Suggest that you add также нормативно; I suggest you to add не является их заменой. Ask someone to check отличается от ask whether something works. Explain the reason to me содержит объект и адресата; не explain me the reason. Discuss the alternative обычно без about, а talk about the alternative с about. Agree with a concern/person, agree to do an action, agree on a decision различаются по дополнению и смыслу. I agree with your concern не равно I agree to implement every suggestion. Не выбирай предлог по одному русскому вопросу «о чём/чего»: учи конструкцию и проверяй, кто принимает какое действие.

### Вопрос внутри просьбы: порядок слов сохраняет смысл

Why does the input change? — прямой вопрос с does. Could you explain why the input changes? — встроенный вопрос: подлежащее input перед changes, вспомогательный does для инверсии исчезает. Но отрицание не исчезает: Could you explain why the input does not change? Who changed the guard? уже имеет вопросительное подлежащее; Could you tell me who changed the guard? не требует перестановки. Whether перед to-infinitive: Could you clarify whether to keep both entries? Не if to keep. В косвенном вопросе о будущем will допустим: Do you know when the revised results will be available? Это не будущее временное придаточное When the results arrive, I will review them.

### Требование, предложение, вопрос и похвала

Required before approval указывает обязательное действие в данном соглашении. Optional: consider a clearer name явно оставляет выбор. Question: is this intentional? запрашивает информацию, хотя вопрос иногда косвенно просит изменение — при сомнении уточняй. The early return makes this branch easier to follow хвалит конкретное решение с основанием, не весь PR. Не выводи степень обязательности из длины фразы, роли reviewer или слова could. Nit обычно маркирует мелочь, но команды используют его неодинаково: спроси, требуется ли исправить её сейчас. Небольшая правка может быть обязательной по правилу, а серьёзный будущий проект может быть вне текущего scope. Ярлык должен помогать приоритетам, а не скрывать основание.

### Правило команды и личное предпочтение не тождественны

Our agreed requirement preserves internal spaces ссылается на доступное условие. I prefer previewText сообщает предпочтение имени. Если naming rule не предъявлено, не называй вкус нарушением стандарта. Указывай реальный источник правила или честно предложи обсудить новое. Полезно It would be clearer to me because… с конкретным объяснением, но один читатель не представляет всех пользователей. Вежливое несогласие может сохранить текущую реализацию: I understand the benefit, but this changes the agreed behaviour. Could we discuss it separately? Не требуется соглашаться с неверным утверждением, льстить reviewer или доказывать собственную компетентность личной атакой. Согласованное изменение scope записывается отдельно от существующего требования.

### Because, although и условия: связываем аргумент

This matters because the requirement preserves the original list использует because + clause. Because of the missing check — because of + именная группа. Although the output is sorted, the input order changes признаёт первый факт, не отменяя второго; не добавляй лишнее but в ту же базовую связь. However соединяет мысли иначе и требует пунктуации: The output is sorted; however, the input changes. Пунктуацию оценивают вручную, поскольку автоматическая проверка здесь нормализует знаки. If the input contains only spaces, the function returns No text описывает правило, а не доказанное поведение программы. If we moved the guard, the path would be clearer рассматривает гипотетическую правку; past в if не сообщает, что её уже внесли.

### Указать место, версию и границу проверки

В комментарии назови guard, return message, local variable или конкретный участок, чтобы читатель нашёл предмет. Номер строки полезен только вместе с ревизией: после правки строки могут сместиться. The log covers r4; the diff is r5 не позволяет переписать шесть старых проверок как новые. Чтение кода даёт аргумент о логике, но не выполнение теста, не проверку всех окружений и не доказательство отсутствия неизвестных дефектов. Если новый результат неизвестен, пиши I have not seen results for r5, а не All checks failed или It was never tested кем бы то ни было. Различай отсутствие доступных свидетельств и доказанное отрицание события. Приложения, API-контракты и полный дизайн тестов будут отдельными линиями T03.

### Ответ автора: что принято и что действительно сделано

Thanks, done слишком мало, когда стадия неясна. Ответ может связать concern, действие, версию, проверку и остаток: I agree about the guard. I have shared r5, but its checks are still outstanding. I will request another review after checking it. Have drafted означает созданный черновик, have shared — опубликованную для участников версию, have checked — выполненные проверки, passed — их успешный результат в указанном охвате. Ни одно действие само не утверждает следующую стадию. Не выдумывай исправление, чтобы выглядеть вежливым. Если реального изменения не делали в учебной роли, формулируй план или явно вымышленное продолжение с данными, а не личный отчёт о выполненном.

### Уточнение и аргументированное несогласие

Сначала проверь, понятна ли просьба: Are you asking for a behaviour change or for clearer documentation? Затем можешь принять её, предложить альтернативу или обосновать отказ. I see the benefit, but collapsing internal spaces conflicts with the agreed requirement называет границу без обвинения. Спроси, какой конкретный случай должен улучшиться. Возражение не обязано содержать готовый патч, но должно ясно показать проблему и доступные основания. Если собеседник объяснил новое условие, пересмотри ответ, не защищай прежнюю позицию любой ценой. Фразы I disagree и I cannot confirm that могут быть корректны. Не принуждай автора принять факультативную правку и не заменяй реальное обсуждение двумя заранее написанными монологами.

### Поправка сообщения и полная редакция

I said fixed; I meant that I had drafted a possible change сохраняет ошибочную формулировку и уточняет факт. Это не новая выполненная операция. Если пересматриваешь ревью после r5, обнови весь связный текст: что в замечании изменилось, какие вопросы отвечены, что осталось непроверенным, прежняя и новая версия. Список moved guard / tests pending полезен как журнал, но не заменяет полную редакцию задания. Не стирай исходник: ученик должен сравнить две работы и объяснить решения. Ответ на вопрос об intent может закрыть именно вопрос, не подтверждая обещанную правку документации. Читатель следующей смены должен различать согласие, план, выполненное и свидетельство качества.

### Состояние обсуждения, решение ревью и merge

В GitHub Comment, Approve и Request changes — разные решения ревью. Comment не даёт явного approval. Approve выражает одобрение reviewer, но само не выполняет merge и не подтверждает release. Условия допуска к merge зависят от настроек конкретного репозитория: не выдумывай обязательное число approvals или универсальное действие кнопки. Resolved у обсуждения описывает состояние thread; оно не доказывает, что код исправлен, проверен или согласован всеми. В нашем Aster C1 преждевременно закрыто, а затем вновь оставлено открытым; это факты досье, не инструкция менять реальный PR. Языковое знание этих различий не заменяет технический аудит кода.

### Устное ревью: услышать отрицание, поправку и вопрос

The tests passed и The tests have not passed различаются не только интонацией: нельзя пропустить not. Точнее укажи, какие проверки: three passed, one failed. Review /rɪˈvjuː/, reviewer /rɪˈvjuːə/, revised /rɪˈvaɪzd/ и required /rɪˈkwaɪəd/ даны в UK-модели; нормативное US r не ошибка. Фокус I have DRAFTED it, not SHARED it помогает выделить стадию, но фонетику нельзя оценивать по одному транскрипту. TTS читает сценарий одним голосом и не заменяет живой спор. Партнёр должен действительно задать заранее неизвестный вопрос и пересказать принятое действие; yes и чтение обеих ролей не подтверждают взаимодействие. Без звука pronunciation/oral fluency unknown, ASR не оценка акцента.

### Самостоятельное применение без сокращения курса

Подтема завершается новым ревью, ответом автора, полной редакцией и диалогом. Все девять разделов содержат собственную практику; пауза не отменяет оставшееся. Итоговые варианты используют другие досье, а через семь дней нужен новый материал и фактическое обсуждение, не простая смена имён Aster/Birch. Если партнёр пока недоступен, сохраняй черновик и пометку ожидания, не придумывай его ответ. Все три заявленные линии T03 опубликованы: код-ревью, API-контракты и язык тестирования. Expanded и 100% заполнения не означают подтверждённое освоение. Письмо и речь оцениваются содержательно, а формальные ключи — только часть контроля. Исторические вопросы о partial в сохранённых заданиях относятся к первой публикации T03; теперь три линии опубликованы, но требования к качеству прежние.

## Примеры с разбором

- **The guard checks the original string before trimming.** — Проверка условия рассматривает исходную строку до обрезки краевых пробелов. Наблюдение о конкретном действии.
- **The spaces-only check returned Ready instead of No text.** — Проверка строки из пробелов вернула Ready вместо No text. Observed и expected раздельны.
- **This could produce a misleading preview.** — Это может привести к вводящему в заблуждение предпросмотру. Возможное следствие, не измеренная частота.
- **Could you check the trimmed value first?** — Не мог бы ты сначала проверить обрезанное значение? Could + base без to.
- **Could we keep these concerns separate?** — Можем обсудить эти вопросы отдельно? Предложение, не уже принятое соглашение.
- **Would you mind explaining the requirement?** — Не мог бы ты объяснить требование? Mind + -ing.
- **Could we avoid changing the original list?** — Можем избежать изменения исходного списка? Avoid + -ing.
- **I suggest adding an example.** — Предлагаю добавить пример. Suggest + -ing.
- **I suggest that you add an example.** — Предлагаю тебе добавить пример. That-clause с явным адресатом.
- **Please explain the reason to me.** — Пожалуйста, объясни мне причину. Explain object to recipient.
- **Let us discuss the alternative.** — Давай обсудим альтернативу. Discuss без about.
- **Could you explain why the input changes?** — Объясни, почему входные данные меняются. Встроенный вопрос без does-инверсии.
- **Could you tell me who changed the guard?** — Скажи, кто изменил проверку условия. Who — подлежащее внутреннего вопроса.
- **Could you clarify whether to keep both entries?** — Уточни, нужно ли сохранить обе записи. Whether перед to-infinitive.
- **I agree with your concern about the guard.** — Я согласен с твоим замечанием о проверке. Согласие с доводом, не со всеми предложениями.
- **I agree to check the revised patch.** — Я согласен проверить изменённый патч. Принятое действие ещё не выполнено.
- **Required before approval: preserve the input order.** — До одобрения необходимо сохранить порядок входного списка. Явная обязательность конкретного поведения.
- **Optional: consider a more descriptive name.** — Необязательно: подумай о более понятном имени. Не скрытый обязательный blocker.
- **Is this behaviour intentional?** — Такое поведение задумано? Вопрос, не готовый диагноз ошибки.
- **The early return makes this branch easier to follow.** — Ранний возврат помогает проследить эту ветку. Конкретная похвала с основанием.
- **The output is sorted, but the input order also changes.** — Выход отсортирован, но порядок исходных данных тоже меняется. Один успех не покрывает второе условие.
- **This matters because the requirement preserves the input.** — Это важно, потому что по требованию входные данные сохраняются. Because + clause.
- **Because of the missing check, verification is incomplete.** — Из-за отсутствующей проверки подтверждение неполно. Because of + noun group.
- **If we moved the guard, this path would be clearer.** — Если бы мы переместили проверку, эта ветка была бы понятнее. Гипотеза, не выполненная правка.
- **Although the diff looks promising, its results are still unknown.** — Хотя изменения выглядят многообещающе, результаты пока неизвестны. Уступка не отменяет границу данных.
- **These results cover r4, not r5.** — Эти результаты относятся к r4, не к r5. Версия — часть свидетельства.
- **I have drafted a patch, but I have not shared it yet.** — Я подготовил патч, но ещё не поделился им. Drafted не shared.
- **I said fixed; I meant that I had drafted a possible change.** — Я сказал «исправлено», но имел в виду подготовленный вариант правки. Поправка истории, не новый успешный запуск.
- **Are you asking for a change or for an explanation?** — Ты просишь изменить поведение или объяснить его? Уточнение намерения комментария.
- **I see the benefit, but this changes the agreed scope.** — Я вижу пользу, но это меняет согласованные границы. Уважительное несогласие.
- **Could we discuss the formatting proposal in a follow-up task?** — Можем обсудить форматирование в отдельной последующей задаче? Предложение не доказывает создание или принятие задачи.
- **The thread is resolved, but verification is outstanding.** — Обсуждение закрыто, но проверка ещё не завершена. Состояние thread не свойство кода.
- **I submitted a Comment review, not Approve.** — Я отправил ревью с решением Comment, не Approve. Не merge или release.
- **I will request another review after checking the revision.** — Запрошу повторное ревью после проверки версии. Обещание, не уже отправленный запрос.
- **Could you restate which concern remains open?** — Перескажи, какой вопрос остаётся открытым. Содержательная проверка понимания.
- **Although the author has shared a revision that moves the guard, the available log still describes r4, so approving r5 on the basis of those results would confuse a proposed solution with verified behaviour.** — Хотя автор поделился версией с перенесённой проверкой, имеющийся журнал относится к r4; одобрять r5 по этим данным означало бы спутать решение с проверенным поведением. Сложный пример: уступка, версия свидетельства и условный вывод.

## Формы просьб, вопросов и аргументов

1. **Краткий ответ:** Could you ___ the new revision? (check/to check)
2. **Краткий ответ:** Would you mind ___ the reason? (explaining/to explain)
3. **Краткий ответ:** Could we avoid ___ the original list? (changing/to change)
4. **Краткий ответ:** I suggest ___ a separate example. (adding/to add)
5. **Краткий ответ:** Could you explain why the input ___? (changes/does change; нейтральный вопрос без усиления)
6. **Краткий ответ:** Could you clarify ___ to preserve both entries? (whether/if)
7. **Краткий ответ:** I agree ___ your concern. (with/to)
8. **Краткий ответ:** The review is incomplete because ___ the missing result. (of/for)
9. **Развёрнутый ответ:** Перестрой Why does the preview change? в просьбу с Could you explain.
10. **Развёрнутый ответ:** Исправь I suggest you to rename it; explain me why.
11. **Развёрнутый ответ:** Сравни I agree with the concern и I agree to check it: что принято в каждом?
12. **Развёрнутый ответ:** Напиши условную гипотезу о перемещении guard с if/past/would и отдельное фактическое наблюдение r4.
13. **Развёрнутый ответ:** Исправь пунктуацию: The output is sorted however the input changes.
14. **Развёрнутый ответ:** Составь просьбу с mind и недвусмысленный положительный ответ на неё.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: check. После modal используется базовая форма без to.
2. Ключ: explaining. Mind + -ing в этой модели просьбы.
3. Ключ: changing. Avoid принимает -ing, не to-infinitive.
4. Ключ: adding. Suggest + -ing в данной конструкции.
5. Ключ: changes. Встроенный вопрос не требует does для инверсии.
6. Ключ: whether. Перед to-infinitive в изучаемой модели whether.
7. Ключ: with. Agree with a view, не agree to a concern.
8. Ключ: of. Because of + именная группа.
9. Возможный образец (не единственный ответ): Could you explain why the preview changes?. Смысл и встроенный порядок без вопросительного does.
10. Возможный образец (не единственный ответ): I suggest that you rename it / I suggest renaming it; explain why to me / explain the reason to me.. Допустимые варианты с проверкой смысла и адресата.
11. Возможный образец (не единственный ответ): Довод/позиция против обязательства выполнить действие; оба не доказательство выполнения.. Не выводить полный approval из частичного согласия.
12. Возможный образец (не единственный ответ): If we moved the guard, the path would be clearer. The r4 check returned Ready.. Гипотеза не описывает выполненную правку.
13. Возможный образец (не единственный ответ): The output is sorted; however, the input changes. / Two separate sentences.. Пунктуация проверяется человеком, не нормализацией ключа.
14. Возможный образец (не единственный ответ): Would you mind reviewing this? Not at all; I can review it.. No к mind может выражать согласие; объясни ответ целиком.

</details>

## Наблюдение, требование и обоснование

1. **Краткий ответ:** Журнал r4 автоматически подтверждает r5? yes/no.
2. **Краткий ответ:** Have drafted означает have verified? yes/no.
3. **Краткий ответ:** Five of six checks passed — сколько failed в данном журнале?
4. **Развёрнутый ответ:** Перепиши This is wrong: guard читает original length, spaces-only возвращает Ready вместо No text.
5. **Развёрнутый ответ:** Раздели наблюдение и возможный риск в The check returned Ready; this could mislead a reader.
6. **Развёрнутый ответ:** Почему название careless не объясняет механизм проблемы? Дай содержательную замену.
7. **Развёрнутый ответ:** Напиши запрос результата r5, не объявляя, что никто никогда его не тестировал.
8. **Развёрнутый ответ:** Покажи два смысла The code appears to preserve the input / The unchanged-input check passed.
9. **Развёрнутый ответ:** Сформулируй required comment об input mutation в Birch, с основанием и возможным шагом.
10. **Развёрнутый ответ:** У reviewer нет naming rule. Перепиши This name violates our standard честно.
11. **Развёрнутый ответ:** Отдели требование If input is spaces-only, return No text от факта текущего поведения.
12. **Развёрнутый ответ:** Напиши сложное предложение с although: новая логика выглядит подходящей, результатов новой версии нет.
13. **Развёрнутый ответ:** Уточни It needs fixing so the next reviewer can act: выбери явный объект, scope и evidence из Aster.
14. **Развёрнутый ответ:** Напиши краткий запрос дополнительной проверки, не обещая исчерпывающий охват языка/ПО.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Версия является частью условий свидетельства.
2. Ключ: no. Создать вариант не равно проверить результат.
3. Ключ: one / 1. Шесть конкретных проверок, не процент надёжности продукта.
4. Возможный образец (не единственный ответ): The guard checks the original length before trimming; the spaces-only check returns Ready instead of the required No text.. Указаны место, наблюдение и требование.
5. Возможный образец (не единственный ответ): Первое — наблюдение в проверке; второе — возможное следствие, не измеренная частота.. Не превращать could в доказанный ущерб.
6. Возможный образец (не единственный ответ): Оценка личности не указывает вход/участок/нарушение; описать порядок guard и trim.. Критика кода без приписывания мотива.
7. Возможный образец (не единственный ответ): I have not seen results for r5. Could you attach checks for that revision?. Отсутствие доступного результата не доказательство полного отсутствия запусков.
8. Возможный образец (не единственный ответ): Чтение/вывод о коде против конкретного результата исполнения.. Ни одно не доказывает все окружения и входы.
9. Возможный образец (не единственный ответ): The requirement preserves the input, but its order changed in the b2 check. Could you preserve it, for example by sorting a copy?. Copy — возможное решение, не обязательная единственная архитектура.
10. Возможный образец (не единственный ответ): I would prefer a clearer name; I have not identified a rule requiring it.. Не приписывать предпочтению нормативную силу.
11. Возможный образец (не единственный ответ): Первое задаёт ожидаемое; журнал r4 показывает Ready, то есть несоответствие.. Описание правила не доказывает его выполнение.
12. Возможный образец (не единственный ответ): Although the revised logic looks appropriate, no results for that revision are available in the dossier.. Не объявлять новый код уже failed или passed.
13. Возможный образец (не единственный ответ): Назвать guard, spaces-only result, requirement и revision r4.. Не выдумывать другую ошибку или общий запрет merge.
14. Возможный образец (не единственный ответ): Please check the named input cases on r5; these examples do not establish all possible behaviour.. Явная граница результата вместо абсолютной гарантии.

</details>

## Обязательность, вопрос, рекомендация и похвала

1. **Краткий ответ:** Optional suggestion равна required change? yes/no.
2. **Краткий ответ:** Слово could само делает любой запрос необязательным? yes/no.
3. **Краткий ответ:** Похвала одной ветки означает approval всего PR? yes/no.
4. **Развёрнутый ответ:** Напиши четыре коротких комментария об Aster: required C1, question C2, optional C3, praise C4.
5. **Развёрнутый ответ:** Добавь обязательность к Could you preserve the input? без грубости.
6. **Развёрнутый ответ:** Предложи previewText вместо shown и явно оставь автору выбор.
7. **Развёрнутый ответ:** Напиши praise о раннем возврате, указав пользу читателю.
8. **Развёрнутый ответ:** Комментарий Nit: change this now неясен. Уточни обязательность и основание.
9. **Развёрнутый ответ:** Вопрос Is this intentional? может быть скрытым запросом правки. Ответь уточнением.
10. **Развёрнутый ответ:** Перепиши Obviously you did not think about users с фактами и уважением.
11. **Развёрнутый ответ:** Сделай Please add a check яснее, сохранив прямую просьбу без избыточного смягчения.
12. **Развёрнутый ответ:** Раздели severity и scope: серьёзный новый feature вне текущего PR и малая правка по обязательному правилу.
13. **Развёрнутый ответ:** Автор опасается, что каждый вопрос означает обвинение. Объясни функцию C2 по-английски.
14. **Развёрнутый ответ:** Обоснуй предложение сохранять объяснение в документации, не только в thread.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Степень обязательности должна сохраняться.
2. Ключ: no. Вежливая форма не отменяет явно обязательное условие.
3. Ключ: no. Конкретная удача не снимает отдельный blocker.
4. Возможный образец (не единственный ответ): Четыре функции с явным предметом и основанием; смысл сверить с досье.. Не четыре одинаковых приказа с разными ярлыками.
5. Возможный образец (не единственный ответ): Required before approval: could you preserve the input? The agreed requirement forbids changing its order.. Форма вежливая, действие обязательное в этом контексте.
6. Возможный образец (не единственный ответ): Optional: consider previewText because it describes the displayed value. I have not identified a naming rule.. Не скрытый must под ярлыком optional.
7. Возможный образец (не единственный ответ): The early return makes the empty-input path easier to follow.. Конкретный механизм, не общая лесть.
8. Возможный образец (не единственный ответ): Is this required for the current review, or is it an optional suggestion? Is there a rule behind it?. Nit не имеет универсальной степени обязательности во всех командах.
9. Возможный образец (не единственный ответ): Are you asking for a behaviour change or for an explanation of the current requirement?. Не угадывать намерение как доказанный факт.
10. Возможный образец (не единственный ответ): The current preview does not meet the spaces-only requirement. Could you handle that case explicitly?. Убрать приписывание мыслей и obvious без основания.
11. Возможный образец (не единственный ответ): Please add an unchanged-input check for the revised patch; preserving the caller’s list is required.. Императив не автоматически невежлив.
12. Возможный образец (не единственный ответ): Серьёзность размера/риска не сама обязательность именно этой версии; обе границы объяснить.. Не использовать размер как единственный критерий.
13. Возможный образец (не единственный ответ): This question asks whether the internal-spaces behaviour is intentional; it does not assert a confirmed defect.. Уточнение не готовый диагноз.
14. Возможный образец (не единственный ответ): A future reader may not see this discussion, so the reason should be available with the relevant code or documentation.. Не требовать комментарий вместо ясного кода в каждом случае.

</details>

## Ответ автора, несогласие и состояние ревью

1. **Краткий ответ:** Comment review = Approve? yes/no.
2. **Краткий ответ:** Resolved thread доказывает verified fix? yes/no.
3. **Краткий ответ:** I will share the patch сообщает о выполненной отправке? yes/no.
4. **Развёрнутый ответ:** Замени Done, если существует только локальный непроверенный patch.
5. **Развёрнутый ответ:** Напиши ответ после реального в досье sharing r5, сохрани старый журнал r4.
6. **Развёрнутый ответ:** Вежливо не согласись со схлопыванием внутренних пробелов по текущему требованию.
7. **Развёрнутый ответ:** Reviewer предлагает изменение без примера. Попроси конкретный случай, не защищая код автоматически.
8. **Развёрнутый ответ:** Сравни закрытый вопрос об intent и обещанную документацию Aster.
9. **Развёрнутый ответ:** Составь next-action reply: share revision, check, request review, без срока от чужого имени.
10. **Развёрнутый ответ:** Объясни по-английски различия review approval, merge и release.
11. **Развёрнутый ответ:** Автор ошибочно говорит all passed и сам исправляет на 3/4. Сохрани обе формулировки.
12. **Развёрнутый ответ:** Новый аргумент reviewer оказался верным. Измени позицию с указанием причины.
13. **Развёрнутый ответ:** Ни один участник не знает duplicate requirement. Запиши вопрос без придуманного owner.
14. **Развёрнутый ответ:** Напиши финальную запись после несогласия без consensus.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: no. Это разные решения инструмента.
2. Ключ: no. Состояние обсуждения не результат проверки.
3. Ключ: no. Будущее обязательство ещё не действие.
4. Возможный образец (не единственный ответ): I have drafted a possible change locally, but I have not shared or checked it yet.. Не создавать фиктивное выполнение.
5. Возможный образец (не единственный ответ): I have shared r5; the attached results still cover r4, so the new revision needs its own checks.. Разные стадии и версии без подмены.
6. Возможный образец (не единственный ответ): I see the benefit, but this would change the agreed behaviour. Could we discuss it separately?. Признание пользы не принятие предложения.
7. Возможный образец (не единственный ответ): Could you show an input where the current behaviour causes the problem you describe?. Вопрос об основании, не отрицание любой проблемы.
8. Возможный образец (не единственный ответ): Intent clarified; documentation was offered, but its completion is not shown.. Один ответ не доказательство второго действия.
9. Возможный образец (не единственный ответ): I will share the revision, check the agreed cases and request another review. No review completion time is agreed.. План не прошедшие проверки.
10. Возможный образец (не единственный ответ): Approval is a review decision; merging integrates a change; release makes a version available under its process. None alone proves the next event.. Не выдумывать факты о конкретном репозитории.
11. Возможный образец (не единственный ответ): The author initially said all four passed, then corrected this to three passed and one failed.. Поправка не вторая независимая серия.
12. Возможный образец (не единственный ответ): That example changes my understanding. I agree the current behaviour conflicts with the requirement; I will revise the patch.. Принять аргумент не равно уже исправить.
13. Возможный образец (не единственный ответ): The duplicate-label behaviour needs clarification; no decision owner has accepted the question yet.. Неизвестность не confirmed bug и не чьё-то обязательство.
14. Возможный образец (не единственный ответ): We understand the two options, but have not agreed a change in scope. The question remains open.. Понимание не согласие, молчание не решение.

</details>

## Aster: чтение полного ревью и новой версии

Aster Notes: a review is a conversation about a change

The Aster Notes team is reviewing a small preview function in a fictional pull request, PR 17. The current revision is aster-r4. The function receives a string and produces a preview message. The agreed requirement says that an empty string or a string containing only spaces should produce No text. Other strings should produce Ready followed by their text with spaces removed from the outside. Spaces inside a meaningful message must be preserved. These rules describe this exercise, not every text-processing application.

In r4, the function checks the original string length before removing outside spaces. If the original length is zero, it returns No text. Otherwise, it removes the outside spaces and returns the Ready message. A reader can trace a likely problem: a string of three spaces has a non-zero original length, but becomes empty after trimming. It reaches the second return rather than the empty-message branch. Reading this logic is useful evidence, but it is not the same activity as running the application.

The author, Evan, provides a log of six checks against r4. The empty string produced No text. Two ordinary messages produced their expected previews. A message with spaces at its outside edges was trimmed as required. A message with two internal spaces kept those spaces. The remaining check used three spaces with no letters. It produced Ready with no message text, rather than No text. Thus five of the six logged checks met their expected results. The log does not establish how other characters, very long messages or other environments behave.

Mira leaves four comments. C1 identifies the order of the guard and trim operations, links it to the failed spaces-only check and requests a change before approval. She asks Evan to check the trimmed text before deciding which message to return. She does not write that Evan is careless. The subject of her criticism is the current behaviour and its conflict with the agreed requirement. A firm request can still be courteous when its reason and scope are clear.

C2 is a question about internal spaces. Mira asks whether the team intentionally preserves two spaces between words. Evan points to the requirement and confirms that it does. He offers to add that explanation to the function documentation. His explanation answers the question; his offer does not prove that the documentation has already been changed. C3 suggests renaming the local variable shown to previewText. Mira marks this suggestion optional. No team naming rule has been cited. C4 praises the early return for the genuinely empty string because it makes the normal path easier to follow. That praise does not cancel C1.

Evan first replies Done under C1, then clarifies his meaning. He has drafted a possible change locally, but has not yet shared a new revision. He marked the conversation resolved because he believed his response was sufficient. Mira explains that closing a discussion is not evidence that the changed code exists or meets the requirement. Evan agrees to leave C1 open while he shares the revision and checks the behaviour. They record this as a proposed next step, not as a successful test result.

Later, Evan shares aster-r5. In this revision, trimming comes before the empty-message guard. Mira can trace how the spaces-only example would reach No text. However, the only attached execution log still belongs to r4. She asks for checks against the new revision, including the internal-spaces case that must remain unchanged. No new execution results are available in this dossier. It would be inaccurate to report six passing checks for r5 by combining a new diff with an old log.

Mira submits a Comment review, not an Approve decision. Her final note recognises the clearer order of operations, explains what still needs verification and distinguishes the optional name change from the required behaviour. Whether the repository would technically permit merging is not specified. There is no evidence that PR 17 has been merged or released. The participants have improved their shared understanding, but a good explanation, a resolved thread and a submitted review are different events from a verified change. A useful review summary preserves those distinctions so that the next reader knows what to do.

1. **Краткий ответ:** Сколько checks в приложенном журнале r4?
2. **Краткий ответ:** Сколько из шести met expected results?
3. **Краткий ответ:** Mira подала Comment или Approve?
4. **Развёрнутый ответ:** Перескажи правило для empty, spaces-only и meaningful input, отдельно internal spaces.
5. **Развёрнутый ответ:** Проследи путь строки из трёх пробелов в r4 и объясни конфликт.
6. **Развёрнутый ответ:** Распредели шесть checks по результатам без двойного счёта.
7. **Развёрнутый ответ:** Сопоставь C1–C4 с функцией и конкретным основанием каждого.
8. **Развёрнутый ответ:** Что Evan уточнил после Done? Что тогда было shared/tested?
9. **Развёрнутый ответ:** Почему resolved у C1 было недостаточно?
10. **Развёрнутый ответ:** Что изменилось, когда появился r5, и какое свидетельство не обновилось?
11. **Развёрнутый ответ:** Что известно о documentation внутреннего пробела, и чего не известно?
12. **Развёрнутый ответ:** Может ли читатель утверждать merged/released или технический запрет merge?
13. **Развёрнутый ответ:** Сделай summary 120–160 слов: проблема, роли комментариев, новая версия, пробел проверки.
14. **Развёрнутый ответ:** Назови новое проверяемое уточнение для следующего reviewer и объясни, почему именно оно нужно.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: six / 6. Все шесть относятся к одной указанной версии.
2. Ключ: five / 5. Один spaces-only результат не соответствует требованию.
3. Ключ: Comment. Комментарий без явного одобрения в данном кейсе.
4. Возможный образец (не единственный ответ): Empty/spaces-only → No text; meaningful → Ready с trim внешних краёв, внутренние пробелы сохраняются.. Не схлопывать внутренние пробелы по собственному предпочтению.
5. Возможный образец (не единственный ответ): Original length не zero, после trim значение пустое, но выполнен Ready return; требуется No text.. Чтение логики не личный запуск.
6. Возможный образец (не единственный ответ): Empty 1, ordinary 2, outer 1, internal 1 успешны; spaces-only 1 неуспешен.. Пять плюс один, не число пользователей.
7. Возможный образец (не единственный ответ): C1 required guard; C2 question internal; C3 optional naming; C4 praise early return.. Не все четыре blockers.
8. Возможный образец (не единственный ответ): Только local draft; новая версия и новые checks ещё не были представлены в тот момент.. Позднейший r5 не переписывает прежний ответ.
9. Возможный образец (не единственный ответ): Thread закрыли без показанного изменения и проверки; участники оставили вопрос открытым.. Не автоматическая technical validation.
10. Возможный образец (не единственный ответ): Trim перед guard; execution log всё ещё r4.. Не выводить шесть successful checks r5.
11. Возможный образец (не единственный ответ): Intent подтверждён, добавить объяснение предложено; выполнения документации в досье нет.. Не превращать offer в completed edit.
12. Возможный образец (не единственный ответ): Нет данных о фактических событиях и настройках; Comment не Approve.. Не invent repository protection rules.
13. Возможный образец (не единственный ответ): Связный пересказ с пятью r4 successes/одним mismatch и неизвестными результатами r5.. Без копии образца и лишних универсальных выводов.
14. Возможный образец (не единственный ответ): Which revision do the new results cover, and does the internal-spaces case still meet its requirement?. Связь вопроса с изменением и ранее успешным поведением.

</details>

## Birch: поправки, степень обязательности и ответ на вопрос

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Birch Export: hearing a correction during a review

This fictional conversation concerns Birch Export pull request 26. The current shared revision is birch-b2. The team has agreed that a preview should return labels in alphabetical order without changing the order of the caller's original list. Duplicate-label behaviour has not yet been agreed. Inez is the author, Leon is the reviewer, and Sam is listening to the discussion. This is an original script read by one narrator, not a recording of three independent speakers.

Inez begins: I ran four checks and they all passed. Sorry, that is not accurate. Three passed and one failed. The output-order check passed, as did the empty-list and single-label checks. The check that the original list stayed unchanged failed. All four results are from b2. I have not run the proposed replacement yet. Leon repeats the corrected information to make sure that he has understood. He does not count the first statement and its correction as two separate groups of checks.

Leon says that the unchanged-input requirement makes this a required correction, not a naming preference. The preview can look right while the caller's data has changed. He asks whether Inez could make a copy before sorting, or propose another approach that preserves the original list. The suggestion of a copy is one possible implementation, not a rule that every sorting function must use that exact design. Their requirement concerns the observable result and the unchanged input.

Inez replies: I have fixed it by copying the list. Let me correct that as well. I have drafted a patch on my machine, but I have not shared it or checked it. I should have said that I plan to use a copy. The shared revision is still b2. Leon thanks her for clarifying the stage. He asks her to share the next revision and attach results for both the output order and the original list. A planned check is not an execution result, and a local proposal is not an updated shared revision.

Sam asks about renaming the variable items. Leon explains that his naming comment was optional. A clearer name might help, but it is not the reason he is withholding approval. He then asks a separate question: should repeated labels appear once or more than once in the preview? Nobody in the conversation knows the agreed answer. They do not turn that uncertainty into a confirmed duplicate-handling defect. Inez says she will ask who can clarify the requirement. No person has yet accepted responsibility for deciding it.

Inez asks an unexpected follow-up: if the output-order check passed, why is the review still blocked? Leon answers that the agreed behaviour has two parts. Correct output order does not establish that the input was preserved. He invites Inez to restate what evidence is missing. She says that the next revision needs its own results, including an unchanged-input check. Leon confirms that this captures his concern. This exchange checks understanding more effectively than a polite yes alone.

At the end, Inez agrees to share a revised patch and request another review after checking it. Leon offers to look at the next revision but gives no completion time and does not approve b2. The naming suggestion remains optional, and the duplicate-label question remains open. The participants have agreed a next action, not a merge or release. A later written summary should keep the two spoken corrections, the revision labels, the limited test evidence and the unresolved question. It should not silently change all passed into a fact about a version nobody has tested.

</details>

1. **Краткий ответ:** Сколько проверок прошло после первой поправки Inez?
2. **Краткий ответ:** Какая shared revision остаётся текущей: b2/b3?
3. **Развёрнутый ответ:** Восстанови четыре checks и результаты после исправления.
4. **Развёрнутый ответ:** Сохрани обе поправки Inez и объясни разные объекты исправления.
5. **Развёрнутый ответ:** Почему sorted preview недостаточен по согласованному поведению?
6. **Развёрнутый ответ:** Отдели предложение copy от обязательного результата.
7. **Развёрнутый ответ:** Какая naming правка optional и почему она не blocker?
8. **Развёрнутый ответ:** Что известно про duplicate labels?
9. **Развёрнутый ответ:** Перескажи неожиданный вопрос Inez и адресный ответ Leon.
10. **Развёрнутый ответ:** Что Inez приняла как next action и чего Leon не обещал?
11. **Устная работа:** Прослушай без текста; партнёр задаёт новый вопрос по Birch, затем пересказывает твой ответ. Уточни расхождение.
12. **Развёрнутый ответ:** Напиши summary 100–140 слов только после попытки слушания; затем сравни с отдельной моделью.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: three / 3. Сначала сказано all four, затем three passed/one failed.
2. Ключ: b2 / birch-b2. Предложенная правка ещё не shared.
3. Возможный образец (не единственный ответ): Output order, empty, single прошли; unchanged input failed.. Не четыре одинаковые проверки и не четыре пользователя.
4. Возможный образец (не единственный ответ): All passed→3/4; fixed→only local draft not shared/tested.. Поправки сообщения не новые операции с программой.
5. Возможный образец (не единственный ответ): Требуются одновременно sorted output и сохранённый исходный список.. Один результат не второе условие.
6. Возможный образец (не единственный ответ): Сохранить input обязательно; copying — возможная реализация, допускается другая подходящая.. Не обязательная единственная архитектура.
7. Возможный образец (не единственный ответ): Leon предложил улучшить items; причина withholding approval — input mutation.. Не переопределять обязательность по очереди обсуждения.
8. Возможный образец (не единственный ответ): Требование не согласовано, вопрос открыт, owner не принял его.. Не confirmed duplicate bug.
9. Возможный образец (не единственный ответ): Почему при passed output review blocked? Потому что второе условие input сохранения не выполнено.. Не повторить всю историю вместо ответа.
10. Возможный образец (не единственный ответ): Share/check/request review; Leon offers look at next revision без finish time и без approval b2.. Не приписывать дату или готовое одобрение.
11. Возможный образец (не единственный ответ): Реальный непредсказанный обмен; фиксировать фактический вопрос и ответ.. Если звука нет, listening/pronunciation pending; прочитанный текст помечать text-supported.
12. Возможный образец (не единственный ответ): In the Birch discussion, Inez corrected all four checks passed to three passed and one failed. The failed b2 check concerned preservation of the caller's original list. She also corrected I have fixed it: the replacement is only a local draft, not a shared or tested revision. Inez agreed to share a revised patch, check both the output and unchanged input, and request another review. Leon offered to review the next revision without agreeing a completion time. His naming suggestion is optional. The duplicate-label requirement remains unresolved, and no decision owner has accepted it. This summary records proposed and accepted next actions, not completed verification, approval or release.. Сначала исходное понимание; поправки, версии и границы сохранить.

</details>

## Полное ревью, ответ и самостоятельная редакция

Перед заданиями доступны шесть полных учебных моделей: review, reply, request, disagreement, summary и revision. Их можно изучать без ввода ответа и самопроверки. Модели относятся к Aster/Birch; самостоятельная работа ниже использует другой кейс Clover. Не переносите чужие факты или версии в свой текст. Это учебные образцы, не ключи новых итоговых тестов.

REVIEW

Review of Aster Notes PR 17, revision aster-r4

The early return for an empty string makes that branch easy to identify. I also appreciate the check showing that two internal spaces are preserved: it connects the implementation to a requirement that a future reader could otherwise overlook. These are specific strengths, but they do not establish that every required input is handled correctly.

Required before approval: the current guard checks the original string before trimming it. With a spaces-only input, the original length is not zero, so the function continues to the Ready return. The attached r4 log shows that the three-space case produces Ready without message text, although the requirement calls for No text. Could you check the trimmed value before selecting the return message? Please retain the internal-spaces behaviour while making this change.

Question: could you confirm that preserving repeated internal spaces is intentional? The written requirement appears to say so. If that reading is correct, a short explanation in the function documentation would help future maintainers. I am asking for confirmation of the intended behaviour, not asserting that preserving those spaces is a defect.

Optional: consider changing the local name shown to previewText. That might make its role clearer to readers who encounter the variable without the surrounding discussion. I have not identified a team rule requiring this name, so this suggestion should not be treated as a second approval blocker.

The six logged checks belong to r4: five met their expected results and the spaces-only check did not. I have not seen results for a revised implementation. After sharing a new revision, please attach checks for empty, spaces-only, ordinary and internal-spaces inputs, clearly identifying the version used. This request does not claim that those checks alone prove correctness for every possible input.

My review decision is Comment. I have not approved the change, and I cannot confirm whether it has been merged. Please reply with what has changed, what remains unverified and any requirement you need clarified. A response of Done alone would not tell me which revision or checks to review next.

REPLY

Thanks for separating the required behaviour from the optional naming suggestion. I agree that r4 handles the spaces-only case incorrectly. The guard examines the original string, so three spaces reach the Ready return after trimming. That conflicts with the requirement for No text.

My earlier reply of Done was imprecise. At that point I had only drafted a local change. I had not shared a revised version or run new checks, so I should not have implied that the issue was verified. I will keep the required discussion open while the evidence is incomplete.

I have now shared r5, which trims before checking for empty text. The execution log still describes r4, not r5. I need to check the new revision, including the internal-spaces case, before reporting its results. The requirement does intentionally preserve internal spaces; changing the guard should not change that behaviour.

I have not taken up the optional variable-name suggestion yet. Could you confirm whether there is any specific ambiguity in the current name beyond the preference you described? I am open to improving it, but I do not want to confuse that discussion with the required correction. I will request another review when the new results are available.

REQUEST

Could you clarify whether C2 asks for a behaviour change or for clearer documentation? My reading of the current requirement is that repeated internal spaces must remain unchanged. If that is correct, I can explain the reason in the function documentation without collapsing those spaces in the preview.

I understand that the spaces-only input in C1 is different: it has no meaningful message and should produce No text. I am not treating your question about internal spaces as another confirmed defect. Please let me know if you are referring to a different case. I have not changed that behaviour or claimed a passing result while waiting for clarification.

DISAGREEMENT

I agree that a shorter preview can be easier to read, but I do not think collapsing all internal spaces belongs in this change under the current requirement. The team explicitly asked us to preserve them. A display preference would therefore change the agreed behaviour, rather than simply make the implementation clearer.

Could we keep the required spaces-only correction separate from that proposal? If the team wants different formatting, we can discuss a revised requirement and examples in a follow-up task. I am not rejecting the idea as useless; I am distinguishing an optional improvement from the scope already agreed for this review.

What specific reading problem would collapsing the spaces solve? An example would help us compare the benefit with the change in behaviour before deciding. No new formatting requirement has been accepted yet.

SUMMARY

In the Birch discussion, Inez corrected all four checks passed to three passed and one failed. The failed b2 check concerned preservation of the caller's original list. She also corrected I have fixed it: the replacement is only a local draft, not a shared or tested revision.

Inez agreed to share a revised patch, check both the output and unchanged input, and request another review. Leon offered to review the next revision without agreeing a completion time. His naming suggestion is optional. The duplicate-label requirement remains unresolved, and no decision owner has accepted it. This summary records proposed and accepted next actions, not completed verification, approval or release.

REVISION

Follow-up review of Aster Notes PR 17, revision aster-r5

The revised order is clearer: trimming now happens before the empty-message guard. Reading the new diff, I can trace how the spaces-only example would reach No text. That addresses the specific control-flow concern I raised about r4. Thank you for identifying the new revision and for correcting the earlier use of Done instead of leaving readers to infer which work had actually happened.

Verification is still outstanding. The attached log covers six checks on r4, not r5. Five r4 checks met their expectations, while the spaces-only check did not. Those results cannot be relabelled as evidence that r5 passes. Please run the relevant checks against the shared revision and include the observed results. In particular, the internal-spaces case needs to retain its agreed behaviour after the guard is moved.

The answer to my internal-spaces question is now clear: the existing requirement intentionally preserves those spaces. That answer resolves my uncertainty about intent. It does not by itself show that the promised documentation change has been made. If you add the explanation, please identify where a future reader can find it outside this review thread.

The suggestion to rename shown remains optional. I have not supplied a naming rule that would make previewText mandatory, and I do not want that preference to be mistaken for the outstanding verification request. We can discuss it separately if the current name causes a concrete misunderstanding.

My decision remains Comment, not Approve. This note recognises the changed logic while preserving the limit of the evidence available to me. Once the new results are attached, I can review them and state whether the required concern is addressed. I am not promising approval in advance, assigning an unagreed deadline or reporting a merge. Please reply with the version, the new observations and any remaining uncertainty so that another reviewer can continue from the same facts.

1. **Развёрнутый ответ:** Изучи полную модель Aster review. Выдели обязательный пункт, вопрос, предложение, похвалу и границу evidence.
2. **Развёрнутый ответ:** Новый Clover Totals PR 38, revision c6: требование считает только enabled rows; в примере две enabled и одна disabled. c6 показывает total 3 вместо 2. Второй check без disabled rows дал ожидаемый total; пустой список не проверялся. Reviewer предлагает обязательную фильтрацию по agreed rule, optional имя activeTotal, спрашивает о будущей поддержке archived rows (требования пока нет), хвалит отдельную функцию подсчёта. Напиши полное review 300–380 слов, не утверждая merge или новые проверки.
3. **Развёрнутый ответ:** По Clover напиши набор четырёх комментариев в сумме 100–140 слов, чтобы их приоритет был ясен.
4. **Развёрнутый ответ:** Прочитай модель ответа Evan, затем напиши ответ автора Clover 180–240 слов: только planned patch, нет shared revision или новых results.
5. **Развёрнутый ответ:** Напиши уточнение Clover 100–140 слов: archived rows — новый scope или действующее требование? Сначала сравни с моделью Aster.
6. **Развёрнутый ответ:** Коллега требует переименовать все функции вместе с Clover. Возрази в 120–160 словах, признавая возможную пользу и согласованные границы. Сравни с моделью.
7. **Развёрнутый ответ:** В полном Clover review проверь местоимения it/this/that. Перепиши не менее шести собственных предложений с ясными объектами, сохранив исходные.
8. **Развёрнутый ответ:** Получив реальный отзыв на задание 2, отдельно запиши исходные 2–3 priority issues и причины будущих правок.
9. **Развёрнутый ответ:** Теперь полностью перепиши Clover review задания 2 в 300–380 словах после отзыва; сохрани первоначальный текст и новое целиком.
10. **Развёрнутый ответ:** Разбери полную revised модель Aster: какие факты r5 новые, какие r4 сохранены, что осталось неизвестным?
11. **Развёрнутый ответ:** Напиши summary 100–140 слов после реального короткого обсуждения Clover с партнёром: agreed, optional, unanswered, next action.
12. **Развёрнутый ответ:** Составь ответ на просьбу срочно approve Clover без новых результатов, 100–140 слов.
13. **Развёрнутый ответ:** Сделай две версии предложения автора: accepted future action и completed shared change с явно вымышленным подтверждением во второй.
14. **Развёрнутый ответ:** Сократи свой review до handover 100–140 слов для другого reviewer, сохрани required/optional и неизвестное. Что пришлось опустить?

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Review of Aster Notes PR 17, revision aster-r4 The early return for an empty string makes that branch easy to identify. I also appreciate the check showing that two internal spaces are preserved: it connects the implementation to a requirement that a future reader could otherwise overlook. These are specific strengths, but they do not establish that every required input is handled correctly. Required before approval: the current guard checks the original string before trimming it. With a spaces-only input, the original length is not zero, so the function continues to the Ready return. The attached r4 log shows that the three-space case produces Ready without message text, although the requirement calls for No text. Could you check the trimmed value before selecting the return message? Please retain the internal-spaces behaviour while making this change. Question: could you confirm that preserving repeated internal spaces is intentional? The written requirement appears to say so. If that reading is correct, a short explanation in the function documentation would help future maintainers. I am asking for confirmation of the intended behaviour, not asserting that preserving those spaces is a defect. Optional: consider changing the local name shown to previewText. That might make its role clearer to readers who encounter the variable without the surrounding discussion. I have not identified a team rule requiring this name, so this suggestion should not be treated as a second approval blocker. The six logged checks belong to r4: five met their expected results and the spaces-only check did not. I have not seen results for a revised implementation. After sharing a new revision, please attach checks for empty, spaces-only, ordinary and internal-spaces inputs, clearly identifying the version used. This request does not claim that those checks alone prove correctness for every possible input. My review decision is Comment. I have not approved the change, and I cannot confirm whether it has been merged. Please reply with what has changed, what remains unverified and any requirement you need clarified. A response of Done alone would not tell me which revision or checks to review next.. Модель связная, не единственный ключ; ученик объясняет функцию частей.
2. Возможный образец (не единственный ответ): Оригинальный связный review: context/version, observed mismatch/requirement, ограниченный log, четыре функции, следующий запрос и unknown.. Два конкретных checks, не все tests failed; archived неизвестно, не proved defect.
3. Возможный образец (не единственный ответ): Required enabled filter; optional activeTotal; question archived; praise focused function, каждое с основанием.. Краткий набор дополняет, не заменяет полный review задания 2.
4. Возможный образец (не единственный ответ): Thanks for separating the required behaviour from the optional naming suggestion. I agree that r4 handles the spaces-only case incorrectly. The guard examines the original string, so three spaces reach the Ready return after trimming. That conflicts with the requirement for No text. My earlier reply of Done was imprecise. At that point I had only drafted a local change. I had not shared a revised version or run new checks, so I should not have implied that the issue was verified. I will keep the required discussion open while the evidence is incomplete. I have now shared r5, which trims before checking for empty text. The execution log still describes r4, not r5. I need to check the new revision, including the internal-spaces case, before reporting its results. The requirement does intentionally preserve internal spaces; changing the guard should not change that behaviour. I have not taken up the optional variable-name suggestion yet. Could you confirm whether there is any specific ambiguity in the current name beyond the preference you described? I am open to improving it, but I do not want to confuse that discussion with the required correction. I will request another review when the new results are available.. Модель Aster не копировать: Clover остаётся c6, не придумывать c7 или execution.
5. Возможный образец (не единственный ответ): Could you clarify whether C2 asks for a behaviour change or for clearer documentation? My reading of the current requirement is that repeated internal spaces must remain unchanged. If that is correct, I can explain the reason in the function documentation without collapsing those spaces in the preview. I understand that the spaces-only input in C1 is different: it has no meaningful message and should produce No text. I am not treating your question about internal spaces as another confirmed defect. Please let me know if you are referring to a different case. I have not changed that behaviour or claimed a passing result while waiting for clarification.. Самостоятельная формулировка с сохранением unknown; clarification не diagnosis.
6. Возможный образец (не единственный ответ): I agree that a shorter preview can be easier to read, but I do not think collapsing all internal spaces belongs in this change under the current requirement. The team explicitly asked us to preserve them. A display preference would therefore change the agreed behaviour, rather than simply make the implementation clearer. Could we keep the required spaces-only correction separate from that proposal? If the team wants different formatting, we can discuss a revised requirement and examples in a follow-up task. I am not rejecting the idea as useless; I am distinguishing an optional improvement from the scope already agreed for this review. What specific reading problem would collapsing the spaces solve? An example would help us compare the benefit with the change in behaviour before deciding. No new formatting requirement has been accepted yet.. Новый довод и адресат; optional не превращать в accepted action.
7. Возможный образец (не единственный ответ): Свои before/after и explanation: guard/count/requirement/revision названы там, где двусмысленно.. Не усложнять ясное предложение только ради длины.
8. Возможный образец (не единственный ответ): Фактический отзыв и выбранные языковые цели либо pending без фиктивной оценки.. Журнал не заменяет полную редакцию.
9. Возможный образец (не единственный ответ): Полная самостоятельная редакция с теми же фактами c6, либо явно отдельно предоставленное новое досье.. Без реального отзыва draft/pending; не изменять результаты ради красивого текста.
10. Возможный образец (не единственный ответ): Follow-up review of Aster Notes PR 17, revision aster-r5 The revised order is clearer: trimming now happens before the empty-message guard. Reading the new diff, I can trace how the spaces-only example would reach No text. That addresses the specific control-flow concern I raised about r4. Thank you for identifying the new revision and for correcting the earlier use of Done instead of leaving readers to infer which work had actually happened. Verification is still outstanding. The attached log covers six checks on r4, not r5. Five r4 checks met their expectations, while the spaces-only check did not. Those results cannot be relabelled as evidence that r5 passes. Please run the relevant checks against the shared revision and include the observed results. In particular, the internal-spaces case needs to retain its agreed behaviour after the guard is moved. The answer to my internal-spaces question is now clear: the existing requirement intentionally preserves those spaces. That answer resolves my uncertainty about intent. It does not by itself show that the promised documentation change has been made. If you add the explanation, please identify where a future reader can find it outside this review thread. The suggestion to rename shown remains optional. I have not supplied a naming rule that would make previewText mandatory, and I do not want that preference to be mistaken for the outstanding verification request. We can discuss it separately if the current name causes a concrete misunderstanding. My decision remains Comment, not Approve. This note recognises the changed logic while preserving the limit of the evidence available to me. Once the new results are attached, I can review them and state whether the required concern is addressed. I am not promising approval in advance, assigning an unagreed deadline or reporting a merge. Please reply with the version, the new observations and any remaining uncertainty so that another reviewer can continue from the same facts.. Это полноценная модель редакции, не основание перенести r5 в Clover.
11. Возможный образец (не единственный ответ): Только реально сказанные роли/действия; разногласие и unknown допустимы.. Монолог от двух имён не независимое взаимодействие.
12. Возможный образец (не единственный ответ): Вежливый предел уверенности и конкретный недостающий evidence; без придуманного запрета системы.. Мнение reviewer не настройка branch protection.
13. Возможный образец (не единственный ответ): I will share… / В отдельно обозначенном новом сценарии I have shared… и фактическая опора.. Не смешивать учебную гипотезу с исходными событиями Clover.
14. Возможный образец (не единственный ответ): Связная адресная адаптация с версией c6 и неуспешным enabled-count case.. Краткий handover не заменяет полные original/revision.

</details>

## Живое ревью и ремонт понимания

1. **Устная работа:** Представь Aster reviewer за связный устный подход: предмет, observed/expected, версии, required/optional. Партнёр пересказывает.
2. **Устная работа:** Произнеси review/reviewer/revised/required и I have drafted it, not shared it. Партнёр сообщает услышанную стадию.
3. **Устная работа:** Партнёр произносит could-request без ярлыка. Уточни, обязательно ли действие и на каком основании.
4. **Устная работа:** Автор не согласен с обязательным пунктом. Спроси его основание, ответь на него и перескажи итог.
5. **Устная работа:** Партнёр неожиданно спрашивает о непротестированном входе Clover. Различи unknown и failure, запроси нужные данные.
6. **Устная работа:** Дай одну конкретную похвалу и одно обязательное замечание, чтобы похвала не звучала как approval.
7. **Устная работа:** Партнёр меняет свою фразу fixed на drafted. Подтверди новую стадию и что теперь требуется.
8. **Устная работа:** Обсуди альтернативу с mind, suggest -ing и because; собеседник отвечает по смыслу.
9. **Устная работа:** Проведи review Clover: reviewer задаёт два заранее неизвестных вопроса, автор отвечает, затем один уточняющий follow-up.
10. **Устная работа:** Не удалось согласовать archived behaviour. Заверши разговор честным итогом и предложенным следующим шагом.
11. **Устная работа:** Поменяйтесь ролями: новый reviewer пересказывает принятый scope, автор исправляет одно реальное недопонимание.
12. **Устная работа:** Через семь дней обсуди другой новый учебный diff с партнёром, который задаст неожиданный вопрос. Сохрани дату и свидетельства.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Фактический рассказ и проверка чужого пересказа, без потери r4/r5.. Чтение за обе роли не взаимодействие.
2. Возможный образец (не единственный ответ): Реальный звук, фокус и различие форм; UK/US нормативны.. ASR-текст не фонетическая оценка; без звука unknown.
3. Возможный образец (не единственный ответ): Реальная реплика и clarification; можно сохранить unresolved.. Не угадывать optional по could.
4. Возможный образец (не единственный ответ): Настоящее несогласие, address-specific response; не заранее выученная победа.. Партнёр вправе сохранить аргументированную позицию.
5. Возможный образец (не единственный ответ): Сохранить фактический неожиданный вопрос и ответ.. Не выдумывать запуск или результат.
6. Возможный образец (не единственный ответ): Основание для каждого действия, ясные границы.. Речь не обязана быть чрезмерно смягчённой.
7. Возможный образец (не единственный ответ): Реальная поправка собеседника и адресный ответ.. Не считать две версии сообщения двумя результатами.
8. Возможный образец (не единственный ответ): Грамматика в настоящем обмене, не только чтение трёх формул.. Если reply неоднозначен, уточнить вместо механического исправления.
9. Возможный образец (не единственный ответ): Настоящие новые реплики, сохранённые ключевые сведения и неопределённость.. Не отдавать партнёру готовые ответы как спонтанность.
10. Возможный образец (не единственный ответ): Open question, не фиктивный consensus или назначение отсутствующего человека.. Понимание позиции не принятие решения.
11. Возможный образец (не единственный ответ): Фактический пересказ/repair, не обязательная выдуманная ошибка партнёра.. Если недопонимания нет, зафиксировать точное подтверждение с содержанием.
12. Возможный образец (не единственный ответ): Новый материал, реальные реплики/аудио и оценка либо pending до выполнения.. Не переименование Aster или выученный монолог.

</details>

## Извлечение, смешанная практика и перенос

1. **Краткий ответ:** Consider ___ the reason. (adding/to add)
2. **Краткий ответ:** Explain the rule ___ the author. (to/for)
3. **Краткий ответ:** We agreed ___ check the new patch. (to/with)
4. **Развёрнутый ответ:** Без текста восстанови пять частей содержательного required comment и создай новый пример без Aster.
5. **Развёрнутый ответ:** Разбери This is only a suggestion, but you must do it before approval. Уточни противоречие.
6. **Развёрнутый ответ:** Сохрани цепочку drafted/shared/checked/passed/approved/merged, указав, какие переходы не автоматические.
7. **Развёрнутый ответ:** Переведи «Я понимаю пользу, но не уверен, что это сохраняет согласованное поведение».
8. **Развёрнутый ответ:** Закрыв Aster, восстанови C1–C4, r4/r5 и границу журнала; затем сам отметь расхождения с текстом.
9. **Развёрнутый ответ:** Не открывая transcript, восстанови две Birch corrections; после повторного слушания сохрани исправления отдельно.
10. **Развёрнутый ответ:** Составь личный чек-лист редакции на основе своих реальных ошибок, не общего выдуманного списка.
11. **Устная работа:** Партнёр задаёт новый вопрос к твоему письменному Clover review; ответь без заранее написанного скрипта.
12. **Развёрнутый ответ:** Почему завершённая опубликованная подтема T03 и все закрытые ответы не означают весь топик и mastery?

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: adding. Consider + -ing в выбранной модели.
2. Ключ: to. Explain something to someone для адресата объяснения.
3. Ключ: to. Agree to + action, не with перед bare verb.
4. Возможный образец (не единственный ответ): Участок, наблюдение/условие, требование, обоснование, запрос; новый учебный контекст.. Формула опора, не обязательное пять-предложений для каждой реплики.
5. Возможный образец (не единственный ответ): Спросить степень обязательности и основание; не молча выбрать половину фразы.. Контекст может разрешить, а не слово suggestion само.
6. Возможный образец (не единственный ответ): Каждый следующий этап требует своих свидетельств; перечисление не объявляет выполнение.. Не выдумывать release или обязательный workflow всех проектов.
7. Возможный образец (не единственный ответ): I understand the benefit, but I am not sure that this preserves the agreed behaviour.. Не отказ понять позицию и не доказанный defect.
8. Возможный образец (не единственный ответ): Required/question/optional/praise, 5/6 r4, r5 только новый diff без новых результатов.. Сначала извлечение из памяти, затем сверка.
9. Возможный образец (не единственный ответ): All→3/4 и fixed→local draft; shared b2.. Прочитанный сценарий помечать text-supported.
10. Возможный образец (не единственный ответ): 2–3 наблюдённых типа ошибок с цитатой, исправлением и новым собственным примером.. Не выдавать шаблон за результат ученика.
11. Возможный образец (не единственный ответ): Реальный вопрос и ответ, unknown допустимо; текст не заменяет звук.. Без аудио pronunciation/fluency unknown.
12. Возможный образец (не единственный ответ): T03 partial: API/testing ещё предстоят; нужны ручная оценка письма/речи, взаимодействие и новый отложенный перенос.. Число заполненных полей не сертификат CEFR.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** Could you ___ the count condition? (explain/to explain)
2. **Краткий ответ:** Would you mind ___ another example? (adding/to add)
3. **Краткий ответ:** Could you explain why the total ___? (differs/does differ; без усиления)
4. **Краткий ответ:** I suggest ___ the visible rows only. (counting/to count)
5. **Краткий ответ:** Local patch drafted означает new revision verified? yes/no.
6. **Краткий ответ:** Optional naming advice становится обязательным только из-за слова reviewer? yes/no.
7. **Краткий ответ:** Request changes автоматически доказывает merge произошёл? yes/no.
8. **Краткий ответ:** Один successful case подтверждает все filtered inputs? yes/no.
9. **Развёрнутый ответ:** Новый Juniper Filter PR 41, j3: требование показывает число видимых строк после фильтра. В примере пять строк всего, две видны, три скрыты. Total показан 5 вместо 2. Отдельная проверка без фильтра дала ожидаемый total; случай с нулём видимых строк не запускался. Восстанови required/observed и границу двух проверок.
10. **Развёрнутый ответ:** Напиши required comment о Juniper: наблюдение, требование, значение расхождения и запрос проверки. Не оценивай личность автора.
11. **Развёрнутый ответ:** Reviewer предлагает optional имя visibleTotal, спрашивает, используется ли helper экспортом (сведений нет), хвалит отдельный predicate видимости. Различи функции этих трёх комментариев.
12. **Развёрнутый ответ:** Напиши полный Juniper review 300–380 слов по заданиям 9–11. Автор имеет только local draft и ещё не shared новую версию. Reviewer выбрал Request changes. Условия merge репозитория неизвестны.
13. **Развёрнутый ответ:** Ответь от автора Juniper в 180–240 словах: признай count mismatch, уточни helper question и раздельно сообщи local draft/дальнейшие действия.
14. **Устная работа:** Представь Juniper партнёру. Он задаёт заранее неизвестный вопрос о готовности; ответь по данным и проверь его пересказ.
15. **Устная работа:** Партнёр говорит Could you rename it? Уточни, обязательно ли это в Juniper и почему; не предполагай, что could значит optional.
16. **Развёрнутый ответ:** Партнёр готовит скрытое устное сообщение о новом состоянии Juniper с версией, одним результатом и открытым вопросом. Запиши услышанное до текста.
17. **Развёрнутый ответ:** Партнёр вслух исправляет факт в своём сообщении. Сохрани исходную и исправленную формулировки и объясни влияние на вывод.
18. **Развёрнутый ответ:** Исправь Please explain me why does the total differ и We should avoid to change the agreed rule.
19. **Развёрнутый ответ:** Какие сведения нужны для ответа на вопрос об export helper, и можно ли считать общий helper подтверждённой причиной count mismatch?
20. **Устная работа:** Произнеси reviewed/revised и I have drafted it, not shared it; партнёр повторяет услышанную стадию.
21. **Развёрнутый ответ:** Автор закрыл count thread после local draft. Объясни, что это подтверждает и чего не подтверждает.
22. **Развёрнутый ответ:** После реального отзыва полностью перепиши Juniper review задания 12 в 300–380 словах; исходник сохрани отдельно.
23. **Устная работа:** Партнёр требует считать optional name blocker. Обсуди основание и допустимое несогласие; запиши реальный итог.
24. **Развёрнутый ответ:** Напиши просьбу проверить zero-visible case на новой версии, не утверждая, что он уже failed в j3.
25. **Устная работа:** Другой reviewer повторяет Five checks failed. Исправь его по исходным Juniper данным и попроси содержательное подтверждение.
26. **Развёрнутый ответ:** Через семь дней составь review 300–380 слов по другому новому учебному diff; получи реальный отзыв и новый неожиданный вопрос.
27. **Развёрнутый ответ:** Почему 8/8 закрытых и полная шкала первой опубликованной подтемы не означают весь T03 или mastery?
28. **Развёрнутый ответ:** Напиши handover следующему reviewer в 100–140 словах: required, optional, question, похвала, status/evidence.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: explain. Modal требует базовую форму без to.
2. Ключ: adding. Mind + -ing в данном вопросе.
3. Ключ: differs. Встроенный порядок без does для вопросительной инверсии.
4. Ключ: counting. Suggest + -ing в выбранной конструкции.
5. Ключ: no. Черновик не доказательство выполнения проверок.
6. Ключ: no. Обязательность должна иметь реальное основание.
7. Ключ: no. Решение ревью не выполнение merge.
8. Ключ: no. Ограниченная проверка не универсальный охват.
9. Возможный образец (не единственный ответ): Filtered case failed: 5 instead of 2; unfiltered check passed; zero-visible not run; все данные j3.. Не пять trials и не все tests failed.
10. Возможный образец (не единственный ответ): Конкретный count mismatch, visible-only rule, request on revised version без необоснованного ущерба.. Ясное основание, не You are careless.
11. Возможный образец (не единственный ответ): Optional preference; genuine context question; specific praise, ни одно само не снимает required count concern.. Не делать shared-helper defect доказанным.
12. Возможный образец (не единственный ответ): Самостоятельный связный review со стадиями, вопросом, optional/praise, next evidence и ограничениями.. Не объявить j4 опубликованной или technically impossible merge.
13. Возможный образец (не единственный ответ): Исходные факты без вымышленного тестирования и обязательного принятия optional name.. Согласие с concern не со всем списком предложений.
14. Возможный образец (не единственный ответ): Реальные вопрос, адресный ответ и read-back; unknown допустимо.. Выученное чтение обеих ролей не взаимодействие.
15. Возможный образец (не единственный ответ): Реальная ответная реплика и смысл принятого/непринятого действия.. Не назначать обязательность без контекста.
16. Возможный образец (не единственный ответ): Фактическое понимание с последующей сверкой версии/результата/unknown.. Без звука pending, заранее прочитанное text-supported.
17. Возможный образец (не единственный ответ): Настоящая correction, не новый выполненный check.. Не придумывать партнёра и поправку вместо обмена.
18. Возможный образец (не единственный ответ): Please explain to me why the total differs. We should avoid changing the agreed rule.. Сохраняются адресат, вопрос и отрицание нежелательной смены правила.
19. Возможный образец (не единственный ответ): Нужны реальные данные об использовании; досье их не содержит, вопрос не доказывает dependency/cause.. Не заполнять техническую неизвестность догадкой.
20. Возможный образец (не единственный ответ): Реальное аудио и различимое значение, UK/US допустимы.. ASR similarity не pronunciation, без аудио unknown.
21. Возможный образец (не единственный ответ): Закрыт разговор в инструменте; нет свидетельств shared fix/new checks/approval.. Не превращать resolved в verified.
22. Возможный образец (не единственный ответ): Полная редакция и причины важных языковых изменений, те же факты или явно новое досье.. Журнал исправлений не замена текста; без отзыва pending.
23. Возможный образец (не единственный ответ): Вопрос о правиле, аргумент, согласие либо unresolved без личных нападок.. Роль reviewer сама не обоснование стандарта.
24. Возможный образец (не единственный ответ): The zero-visible case has not been run in the supplied log. Could you check it on the revised version?. Not run не failure и не отсутствие всех запусков в мире.
25. Возможный образец (не единственный ответ): Пять — все строки, checks два: один mismatch/один success; новый пересказ.. Реальный repair, не простое yes.
26. Возможный образец (не единственный ответ): Новые факты, исходный текст, дата и фактическая обратная связь либо pending.. Не переименование Juniper и не фиктивный результат ученика.
27. Возможный образец (не единственный ответ): API/testing ещё не наполнены; нужны ручная оценка письма/речи, взаимодействие и новый отложенный перенос.. Publication partial не индивидуальная оценка знаний.
28. Возможный образец (не единственный ответ): Сохранить count mismatch j3, два checks/zero not run, draft only и Request changes без заявления merge.. Краткий текст дополняет, не заменяет полный review.

</details>

### Вариант B

1. **Краткий ответ:** Could we avoid ___ the agreed behaviour? (changing/to change)
2. **Краткий ответ:** Please discuss the ___ with the author. (alternative/about alternative)
3. **Краткий ответ:** Could you clarify ___ to accept mixed-case suffixes? (whether/if)
4. **Краткий ответ:** The concern matters because ___ the agreed rule. (of/for)
5. **Краткий ответ:** Results for h7 автоматически подтверждают h8? yes/no.
6. **Краткий ответ:** Specific praise означает every change approved? yes/no.
7. **Краткий ответ:** Comment является тем же решением, что Approve? yes/no.
8. **Краткий ответ:** Not run означает failed? yes/no.
9. **Развёрнутый ответ:** Новый Hazel Upload PR 52: agreed rule принимает имена с суффиксами .txt и .TXT. В h7 два lower-case примера приняты как ожидалось, один upper-case отклонён вместо принятия. Пустое имя не проверялось. h8 уже shared и нормализует suffix перед сравнением, но приложенные результаты всё ещё h7. Восстанови данные по версиям.
10. **Развёрнутый ответ:** Напиши required comment по Hazel, отделяя observed mismatch, requirement и новый неопробованный подход h8.
11. **Развёрнутый ответ:** Reviewer предлагает optional текст сообщения, спрашивает о смешанном .tXt (требование неизвестно), хвалит отдельный helper имени. Объясни функции.
12. **Развёрнутый ответ:** Напиши полный Hazel review 300–380 слов по заданиям 9–11. Reviewer подал Comment, не Approve; merge/release не сообщались.
13. **Развёрнутый ответ:** Ответь от автора Hazel в 180–240 словах: shared h8, results still h7, следующий запрос и неизвестное mixed case.
14. **Устная работа:** Обсуди Hazel с партнёром; он задаёт новый неожиданный вопрос о границе h8. Ответь и проверь его пересказ.
15. **Устная работа:** Партнёр считает похвалу helper достаточным approval. Объясни границу и уточни, понял ли он required concern.
16. **Развёрнутый ответ:** Партнёр создаёт скрытое устное сообщение по другой версии Hazel с числом checks, review decision и нерешённым вопросом. Запиши до текста.
17. **Развёрнутый ответ:** Партнёр исправляет review decision или число checks в своём сообщении. Передай исходное и исправленное без сложения серий.
18. **Развёрнутый ответ:** Исправь Would you mind to explain why does it reject the name? и I agree with check it.
19. **Развёрнутый ответ:** Почему .tXt нельзя объявить agreed supported input или confirmed failing case только по вопросу reviewer?
20. **Устная работа:** Произнеси This is a question, not a confirmed defect и revised/reviewed; партнёр пересказывает модальность и стадию.
21. **Развёрнутый ответ:** Автор ответил fixed, имея shared h8 без новых results. Уточни формулировку, не отрицая факт публикации.
22. **Развёрнутый ответ:** После реального отзыва перепиши полный Hazel review задания 12 в 300–380 словах; исходник и редакция отдельно.
23. **Устная работа:** Reviewer требует обязательный новый текст сообщения без приведённого правила. Уточни основание и предложи ясный приоритет.
24. **Развёрнутый ответ:** Напиши запрос проверки empty-name case и обоих требуемых suffixes на h8, не обещая исчерпывающую безопасность.
25. **Устная работа:** Партнёр неожиданно спрашивает, почему h8 не approved при видимой нормализации. Ответь, затем он уточняет другое условие.
26. **Развёрнутый ответ:** Через семь дней напиши review 300–380 слов для другого нового изменения с отличным требованием, обсуди его и сохрани реальный отзыв.
27. **Развёрнутый ответ:** Объясни различия Comment, resolved thread, отправленный учебный тест и подтверждённое освоение первой части T03.
28. **Развёрнутый ответ:** Напиши Hazel handover 100–140 слов для отсутствовавшего reviewer, сохрани обязательность и границы проверенного.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: changing. Avoid + -ing в выбранной модели.
2. Ключ: alternative. Discuss обычно имеет прямое дополнение без about.
3. Ключ: whether. Whether перед to-infinitive, не if to accept.
4. Ключ: of. Because of + именная группа.
5. Ключ: no. Новая версия требует собственных свидетельств.
6. Ключ: no. Конкретная удача не одобряет весь PR.
7. Ключ: no. Это разные решения ревью.
8. Ключ: no. Отсутствие запуска не неуспешный результат продукта.
9. Возможный образец (не единственный ответ): h7 два successes/один mismatch, empty not run; h8 новый diff без execution results.. Не три users и не все h8 tests passed.
10. Возможный образец (не единственный ответ): Upper-case failure h7 conflicts with rule; h8 reading promising, request its results without guarantee.. Не делать утверждений о безопасности всех uploads.
11. Возможный образец (не единственный ответ): Optional wording, clarification of unspecified mixed case, specific praise; required .TXT остаётся отдельно.. Не invent agreed mixed-case rule или confirmed defect.
12. Возможный образец (не единственный ответ): Связный самостоятельный review с h7/h8, ограниченным журналом, приоритетами и next evidence.. Новая версия не подтверждённое устранение всех рисков.
13. Возможный образец (не единственный ответ): Точные стадии, без нового выдуманного passing run и без принятия optional автоматически.. Отправка патча не проверка и не одобрение.
14. Возможный образец (не единственный ответ): Фактическое взаимодействие с версиями и unknown.. Текстовый сценарий за две роли не живая проверка.
15. Возможный образец (не единственный ответ): Конкретная удача не закрывает проверку .TXT; содержательный пересказ.. Не оценивать понимание по yes без деталей.
16. Возможный образец (не единственный ответ): Реальное услышанное и сверка после попытки; не готовый монолог ученика.. Без звука pending, прочитанный текст text-supported.
17. Возможный образец (не единственный ответ): Фактическая поправка и её влияние на вывод.. Не новое исполнение или два независимых review.
18. Возможный образец (не единственный ответ): Would you mind explaining why it rejects the name? I agree to check it.. Mind/-ing, embedded order, agree to action; смысл проверяется вручную.
19. Возможный образец (не единственный ответ): Ни требование, ни результат для mixed-case в досье не даны.. Не переносить правило двух названных suffixes на всё автоматически.
20. Возможный образец (не единственный ответ): Реальное аудио и смысловой фокус; нормативные акценты допустимы.. Без звука pronunciation/fluency unknown.
21. Возможный образец (не единственный ответ): I have shared h8 with revised suffix handling, but its checks are still outstanding.. Не возвращать completed sharing в только local draft.
22. Возможный образец (не единственный ответ): Полная содержательная редакция с сохранёнными версиями и границей данных.. Без отзыва pending, журнал не заменяет текст.
23. Возможный образец (не единственный ответ): Реальные аргументы, допустимое несогласие, .TXT correction отдельно.. Не приписывать reviewer злой мотив или автоматическую правоту.
24. Возможный образец (не единственный ответ): New version-specific results requested; empty not run, two suffix cases required, broader behaviour unknown.. Три выбранных случая не полный security audit.
25. Возможный образец (не единственный ответ): Новый вопрос/follow-up, чтение diff отдельно от execution, неизвестное не выдумывать.. Не подменять обмен готовым объяснением обеих ролей.
26. Возможный образец (не единственный ответ): Самостоятельный перенос, новая задача и фактическая дата/свидетельства либо pending.. Не переименование Hazel или просмотр знакомого ответа.
27. Возможный образец (не единственный ответ): Разные состояния: feedback, обсуждение, заполнение, качество/отсрочка; API/testing ещё не наполнены.. Ни одна кнопка сама не подтверждает CEFR.
28. Возможный образец (не единственный ответ): h7 two pass/one mismatch, h8 shared unverified, empty not run, mixed case unknown, optional wording/praise отдельно.. Краткий текст не заменяет полный review.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Язык код-ревью: замечания, основания и ответы](../appendices/review-language.md)
- [Регистр, просьбы и степень уверенности](../appendices/register-hedging.md)
- [Аргумент, уступка и честный вывод](../appendices/argument-concession.md)
- [Уточнение задачи и язык проверки исправлений](../appendices/verification-language.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [Google Engineering Practices: writing review comments](https://google.github.io/eng-practices/review/reviewer/comments.html)
- [Google Engineering Practices: handling reviewer comments](https://google.github.io/eng-practices/review/developer/handling-comments.html)
- [GitHub Docs: pull request reviews](https://docs.github.com/en/pull-requests/reference/pull-request-reviews)

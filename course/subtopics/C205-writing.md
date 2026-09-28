# C205-writing · Полный письменный проект: синтез, аргумент и редактура

[Топик C205](../modules/C205.md). Сгенерировано из data/*.mjs.

Предпосылки: [C205-inquiry](C205-inquiry.md), [C105-argument](C105-argument.md), [C202-revision](C202-revision.md).

## Цели контроля

- Выражать точную связь, уступку, ссылку и степень уверенности
- Строить полный аргумент с серьёзной альтернативой
- Синтезировать источники с проверяемой атрибуцией и границами
- Редактировать весь проект с сохранением исходника и оснований правок
- Понимать отзыв, отвечать по существу и объяснять пересмотр

## Механизм

### От proposal к завершённому аргументу

В C205-inquiry ты определял, что исследовать; теперь нужно написать ответ на вопрос и показать, почему ему можно доверять в заданных границах. I will compare — обещание работы; This comparison supports — вывод из уже выполненного сопоставления. Полный проект содержит 1000–1500 слов основного текста, не считая списка источников и журнала редакторских изменений. Это размер письменного продукта, а не срок занятия: можно возвращаться к одному тексту столько, сколько требуется. Исходный вопрос допустимо изменить после чтения, но изменение объясняется. Отдельные короткие ответы и хороший план не заменяют самого связного текста; готовый письменный проект ещё не заменяет устную защиту.

### Brief удерживает адресата, вопрос и границы

Перед первым абзацем восстанови из задания: кому пишешь, какое решение обсуждается, какие данные имеются, чего ты не проверял лично. В примере Kestrel — вымышленная команда, а три страницы Google/GitHub настоящие. Их рекомендации не являются экспериментами над Kestrel. Автор может предложить местное правило, но должен назвать его своим предложением, не официальной политикой источника. Не добавляй фактическое согласие maintainers, изменение настроек или безопасность кода ради уверенного финала. Примеры из технической работы тренируют язык аргумента; они не заменяют предметный аудит и не разрешают агенту менять реальный репозиторий ученика.

### Тезис должен отвечать на вопрос

This essay discusses reviews обозначает тему, но не позицию. Kestrel should explain review coverage rather than rely on an unconditional approval count отвечает на поставленный вопрос. Дальше каждая существенная часть должна помогать этому ответу: установить предел данных, обосновать критерий, показать механизм предложения, рассмотреть возражение или уточнить следствие. Тезис не обязан быть первым предложением любого жанра; здесь ранняя формулировка помогает адресату. Не усложняй его ради C2: точность, гибкость и сильный аргумент важнее редких слов. Если тело текста поддерживает только ограниченный вывод, перепиши тезис, а не скрывай ограничение в последней строке.

### Макроструктура: движение мысли, не три аннотации

Абзацы Source A says / Source B says / Source C says могут быть полезны как подготовка, но сами по себе не дают синтез. Строй разделы вокруг вопросов, нужных адресату: что устанавливает местная запись, как определить достаточность проверки, какое возражение меняет предложение. Внутри раздела можно связать несколько источников. Одинаковое число абзацев по каждой странице не обязательно: их вклад неодинаков. Порядок выбирается зависимостями рассуждения. Если читателю нужен критерий, чтобы понять сравнение, введи критерий раньше. Разделение на headings помогает навигации, но заголовок Evidence не создаёт доказательства внутри пустого абзаца.

### Микроструктура: claim, evidence, analysis, limit

Полезная модель абзаца: локальный тезис → конкретное основание → объяснение связи с общим аргументом → граница или переход. Это функции, не обязательные четыре предложения в одинаковом порядке. Thirty-two requests описывает активность; вывод о качестве требует дополнительного основания. Слово therefore не строит этот мост автоматически. После цифры спроси: что именно она позволяет сказать и почему это важно для вопроса? Пример может объяснить механизм, но не доказать его распространённость. В предложении The proposed record could clarify the next action could обозначает гипотезу о результате, а не уже измеренный эффект.

### Связки: структура и реальное отношение

Although + clause: Although the rule is visible, its coverage is unclear. Despite + noun/-ing/the fact that: Despite its visibility, the rule may leave a concern unresolved. Не ставь despite of и не соединяй although…but в одной базовой уступке. However — наречная связка, а не замена союзу в любой пунктуации; запятую или точку с запятой проверяем содержательно, потому что строковый normalizer игнорирует знаки. In addition добавляет основание; by contrast сопоставляет; consequently требует обоснованного следствия. Не украшай ими подряд не связанные утверждения. Свободный текст допускает несколько нормативных конструкций, если сохранены смысл, отрицание и границы.

### Синтез сохраняет роль и силу каждого источника

В основной модели числовые ссылки [1]–[3] ведут к трём реальным страницам в блоке источников. Рядом с утверждением обозначай, кто говорит и с какой силой: guidance recommends, documentation distinguishes, the fictional register records, I propose. Три страницы могут отвечать на разные вопросы и принадлежать одной коллекции; их число не доказывает независимость. Bibliography без связи с конкретным claim не решает проблему атрибуции. Если документ поменялся, фиксируй прочитанную версию или дату доступа, не приписывай старой формулировке новый смысл. Не изобретай автора, дату, номер страницы или DOI; missing data остаются not stated.

### Парафраз — самостоятельное выражение того же смысла

Замена отдельных слов с сохранением чужого каркаса — ненадёжный способ написать собственный текст. Прочитай короткий фрагмент, выдели мысль, закрой источник, сформулируй её своими словами, затем сверь scope, отрицание и модальность. Ссылка всё равно нужна: независимая формулировка не делает чужую мысль твоим наблюдением. Короткую точную цитату явно помечают; нельзя молча чинить её под свой стиль. Не перепечатывай страницы и упражнения в публичный курс. Собственная рекомендация может идти после парафраза, но переход должен показывать смену голоса. Источник описывает доступную функцию — это ещё не доказательство, что её включили в конкретной команде.

### Сильная альтернатива и добросовестная уступка

Возражение должно задевать реальный аргумент: предлагаемая процедура может оказаться слишком трудоёмкой для добровольцев. Фраза Opponents dislike quality подменяет его мотивом. Сначала передай лучшее основание альтернативы так, чтобы разумный сторонник узнал свою позицию. Затем ответь: покажи границу, дополнительное основание, изменение предложения или честно оставшееся разногласие. Уступка не требует полного отказа от тезиса; иногда именно после неё позиция становится точнее. Не обязателен ритуальный абзац However, some people disagree: возражение ставится там, где читателю оно нужно для понимания вывода.

### Резюме и вывод выполняют разные функции

Executive summary позволяет адресату увидеть вопрос, рекомендацию, важные основания, ограничение и следующее действие без чтения всего текста. Conclusion завершает уже показанное рассуждение: какой ответ теперь обоснован, при каких условиях он изменится. Оба не должны быть сильнее тела. Нельзя в abstract написать proven improvement, если внутри лишь proposed trial. Новое решающее возражение нужно разобрать до заключения, а не бросать там без ответа. Резюме пишется и проверяется после существенных изменений тела; иначе исправленная цифра и старый красивый вывод начнут противоречить друг другу.

### Редактура сверху вниз и карта зависимости правок

Сначала вопрос/тезис и достоверность claims; затем порядок разделов, функция абзацев и переходы; затем точность предложений, лексика и пунктуация. Reverse outline отражает то, что фактически написано: одним предложением назови функцию каждого абзаца и проверь вклад в ответ. Если одинаковые функции повторяются без развития, можно объединить или перестроить их; не выравнивай длину механически. Исправление 18→26 hours требует проверить введение, сравнение, summary и conclusion, где использовалось старое число. Не обязательно отменять весь проект: установи, какие выводы зависят именно от этой предпосылки.

### Отзыв, решение автора и журнал изменений

Сохраняй исходную версию, отзыв, исправленный текст и причину. Обратная связь может указывать на ошибку факта, непонятную ссылку, слабое основание или просто предпочтение стиля. Запроси уточнение: Do you mean the claim is unsupported, or its wording is unclear? Принятие правки не означает, что рецензент одобрил весь проект; вежливое thanks не закрывает unresolved issue. Автор вправе не принять предложение, если объяснит основания. В журнале отмечай substantive change отдельно от copy-edit: смена результата, охвата или участника — не косметика. Не переписывай исходный отзыв так, будто собеседник уже согласился с ответом.

### Полный самостоятельный результат и контроль

После работы с образцом напиши собственный проект 1000–1500 слов на вопросе и трёх реально прочитанных открытых источниках из подготовки или новых. Приложи реальную библиографию, полный пересмотренный текст и журнал; аннотации отдельно не заменяют синтез. Итоговый тест использует другую проблему и другой набор документов, а не те же ответы с заменой названия команды. Работа может продолжаться в несколько подходов. Письмо оценивается по выполнению задачи, организации, точности конструкций, лексике и регистру с цитатами ответа; качество использования источников входит в выполнение задачи. Нет автоматически подтверждённого CEFR по длине или числу ссылок.

### Речь редакторского обсуждения и отложенный перенос

Устные задания этой подтемы — объяснить правку, понять возражение, уточнить его и пересмотреть конкретное место. Они не равны полной защите C205, которая ещё будет наполнена отдельно. Партнёр должен дать реальную новую реплику, а не прочитать заранее согласованный сценарий. Если доступен только текст, pronunciation и oral fluency остаются unknown; ASR не подтверждает звук. Через 7 дней вернись к новым материалам и проверь, удерживается ли процедура анализа и редактуры. Отложенная работа не создаётся задним числом из факта, что старый файл уже сохранён. Прогресс заполнения страницы и подтверждённое освоение остаются разными показателями.

## Примеры с разбором

- **This project argues for a qualified procedure, not an unconditional count.** — Проект обосновывает процедуру с условиями, не безусловное число. Тезис отвечает на вопрос, а не только называет тему.
- **The register records activity; it does not measure code quality.** — Реестр фиксирует активность, не качество кода. Единица свидетельства ограничивает вывод.
- **Twenty requests were merged, but the reasons for the other outcomes are not given.** — Двадцать запросов влиты; причины других исходов не указаны. Не превращать closed в failed quality check.
- **The corrected figure concerns a first human response, not final approval.** — Исправленная цифра относится к первому ответу человека, не финальному одобрению. Показатель сохраняется при пересказе.
- **Although the rule is simple, its consequences need examination.** — Хотя правило просто, последствия нужно изучить. Although + clause.
- **Despite its simplicity, the rule may leave questions unresolved.** — Несмотря на простоту, правило может оставлять вопросы. Despite + именная группа; may не факт результата.
- **Despite the fact that the draft is complete, its argument needs revision.** — Хотя черновик полный, аргумент требует пересмотра. The fact that позволяет полное придаточное после despite.
- **The draft is readable. However, its main claim is unsupported.** — Черновик читаем, но главный тезис не обоснован. Граница предложений и реальный контраст.
- **The sources describe different aspects; they do not jointly prove the proposal.** — Источники описывают разные аспекты; они не доказывают предложение целиком. Согласие частей не универсальное доказательство.
- **Google's guidance informs this proposal; it does not report a trial at Kestrel.** — Рекомендации используются в предложении; они не сообщают об испытании Kestrel. Реальный источник и вымышленная площадка разделены.
- **The documentation distinguishes review decisions; I propose explaining those distinctions to contributors.** — Документация различает решения; я предлагаю объяснить различия участникам. Явная смена голоса от источника к автору.
- **This recommendation is subject to revision if the categories obscure the next action.** — Рекомендация может пересматриваться, если категории мешают ясности. Условие пересмотра конкретно.
- **The objection concerns capacity, not hostility to quality.** — Возражение касается ресурсов, не неприязни к качеству. Не приписывать удобный мотив оппоненту.
- **That concern is valid, but it does not establish that a fixed count solves the problem.** — Опасение обоснованно, но не доказывает решение через число. Уступка и степень принятия раздельны.
- **Rather than dismiss the objection, I have shortened the proposed record.** — Я не отверг возражение, а сократил предлагаемую запись. Ответ приводит к содержательной модификации.
- **Two approvals may cover the same aspect of a change.** — Два одобрения могут касаться одного аспекта. Возможность, не установленная частота.
- **If the guide retained a minimum count, it would still need to address unresolved concerns.** — Даже при минимальном числе нужно учесть нерешённое. Гипотетическое предложение не действующее правило.
- **I recommend recording the scope of a limited review.** — Рекомендую записывать охват ограниченной проверки. Recommend + -ing.
- **The recommendation is that the scope be recorded.** — Рекомендация состоит в фиксации охвата. Выбранная mandative base passive; should be также возможно.
- **The reasons for this change are set out below.** — Причины изменения изложены ниже. Согласование по reasons, не change.
- **Neither summary includes the corrected denominator.** — Ни одно из двух резюме не содержит исправленного знаменателя. В этой формальной модели singular includes.
- **The proposed procedure, rather than the software, is being evaluated.** — Оценивается предложенная процедура, не ПО. Rather than не меняет главное подлежащее.
- **By coverage, I mean the aspects actually examined.** — Под охватом я понимаю реально проверенные аспекты. Определение предотвращает неоднозначный термин.
- **This limitation affects the conclusion, not merely its phrasing.** — Ограничение затрагивает вывод, не только слова. Содержательная правка не copy-edit.
- **I revised the abstract after changing the body.** — Я обновил резюме после изменения основной части. Последовательность, не обещание будущей правки.
- **The revision log preserves the original claim and the reason for withdrawing it.** — Журнал хранит исходный тезис и причину отказа. История не заменяется новой версией.
- **Your comment suggests that the reference is unclear; could you identify the ambiguous phrase?** — Из отзыва следует неясная ссылка; уточните фразу. Адресная проверка понимания отзыва.
- **I have accepted the correction without treating it as approval of the whole paper.** — Я принял исправление, не считая его одобрением всей работы. Принятая правка не общий зачёт.
- **The source gives no publication date; the bibliography records when I accessed it.** — Дата публикации не указана; библиография фиксирует доступ. Не подменять поля.
- **The conclusion should follow from the body, not outrun it.** — Вывод должен следовать из тела, не превосходить основания. Сила утверждения сохраняется между разделами.
- **Having revised the comparison, Joel still needs to update the abstract.** — Пересмотрев сравнение, Joel ещё должен обновить резюме. Завершение части не всего проекта.
- **Even if a shorter queue were observed, it would not by itself establish that the revised guide had improved review quality.** — Даже если очередь сократится, это само не докажет улучшения качества из-за руководства. Сложный пример: допущение, причинность и разные результаты.

## Формы и связи точного аргумента

1. **Краткий ответ:** ___ the procedure is visible, its coverage is unclear. (Although/Despite)
2. **Краткий ответ:** ___ its visibility, coverage remains unclear. (Although/Despite)
3. **Краткий ответ:** We recommend ___ the scope. (record/recording)
4. **Краткий ответ:** Mandative base: We recommend that the scope ___ recorded. (be/is)
5. **Краткий ответ:** The reasons for the correction ___ clear. (is/are)
6. **Краткий ответ:** The conclusion follows ___ the analysis. (from/for)
7. **Краткий ответ:** This objection bears ___ the proposed policy. (on/of)
8. **Краткий ответ:** The proposal accounts ___ the capacity constraint. (for/to)
9. **Развёрнутый ответ:** Исправь Despite the guide is readable, it lacks criteria двумя способами.
10. **Развёрнутый ответ:** Исправь пунктуацию The figure is corrected, however the abstract is not. Не меняй смысл.
11. **Развёрнутый ответ:** Преврати We will prove this process is best в цель без обещанного исхода.
12. **Развёрнутый ответ:** Перепиши It is clear that every delay improves quality по данным, где причины delay не измерялись.
13. **Развёрнутый ответ:** Уточни This proves it после двух абзацев о response time и code quality.
14. **Развёрнутый ответ:** Дай две нормативные рекомендации с record: recommend + -ing и that + should.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: Although. Далее полное придаточное; в этой модели нужен although.
2. Ключ: Despite. После despite именная группа без of.
3. Ключ: recording. Recommend + -ing в выбранной структуре.
4. Ключ: be. Выбрана base passive; вне задания возможна модель should be.
5. Ключ: are. Ядро reasons plural, не correction.
6. Ключ: from. Follow from — логически следовать из основания.
7. Ключ: on. Bear on — иметь отношение к обсуждаемому вопросу.
8. Ключ: for. Account for здесь учитывать/объяснять; значение задаётся контекстом.
9. Возможный образец (не единственный ответ): Although the guide is readable, it lacks criteria. / Despite being readable, the guide lacks criteria.. Оба синтаксических пути нормативны, сохраняют уступку и участника.
10. Возможный образец (не единственный ответ): The figure is corrected; however, the abstract is not.. Допускаются два предложения или другой нормативный вариант; знаки оцениваются вручную.
11. Возможный образец (не единственный ответ): We will assess how the process meets the stated criteria.. Сохраняется намерение исследования, не гарантированный победитель.
12. Возможный образец (не единственный ответ): The record does not establish whether delays are associated with better review.. Не объявлять противоположное доказанным; отделить неизвестность.
13. Возможный образец (не единственный ответ): The response-time figure describes an initial interaction; it does not establish code quality.. Указать референт и границу вместо усиления claims.
14. Возможный образец (не единственный ответ): I recommend recording the scope. I recommend that the scope should be recorded.. Сохранить рекомендацию, не выполненный факт и не запрет should.

</details>

## Архитектура полного текста

1. **Развёрнутый ответ:** Тема A review guide. Напиши вопрос, тезис-ответ и три зависимых шага аргумента.
2. **Развёрнутый ответ:** Сравни тезисы I discuss review и A count alone cannot describe coverage. Что второй требует в теле?
3. **Развёрнутый ответ:** Перестрой план A summary / B summary / C summary в план по проблемам адресата.
4. **Развёрнутый ответ:** В каком месте нужны критерии clarity/maintainability/capacity и почему?
5. **Развёрнутый ответ:** Напиши переход от неполного register к proposed guide, не делая therefore быстрее.
6. **Развёрнутый ответ:** К тезису More signatures are not a description of coverage добавь пример и ограничение примера.
7. **Развёрнутый ответ:** Раздел занимает три абзаца о биографиях авторов источников. Когда его сократить?
8. **Развёрнутый ответ:** Напиши сильное возражение против описания scope после каждого review.
9. **Развёрнутый ответ:** Ответь на это возражение, изменив собственное предложение.
10. **Развёрнутый ответ:** Должны ли все абзацы иметь одинаковую длину и одну схему? Обоснуй на примере.
11. **Развёрнутый ответ:** Заключение впервые обещает 50% меньше дефектов. Что исправить?
12. **Развёрнутый ответ:** Составь reverse outline первых пяти абзацев модели: по одной фактической функции.
13. **Развёрнутый ответ:** Запиши одно положение, которое твой будущий conclusion может утверждать, и одно, которого он не должен обещать.
14. **Развёрнутый ответ:** Перепиши своё название, чтобы оно отражало вопрос/вывод, не рекламировало чудо-решение.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Вопрос о sufficient review; условная процедура; данные → критерии/coverage → возражение/пересмотр.. Не ограничиваться перечислением трёх источников.
2. Возможный образец (не единственный ответ): Первый объявляет тему; второй требует объяснить связь count/coverage и рассмотреть возражение.. Не считать уверенную фразу доказательством самой себя.
3. Возможный образец (не единственный ответ): What the local register establishes; how decisions should be explained; capacity objection and revision.. Каждый раздел должен помогать ответить на общий вопрос.
4. Возможный образец (не единственный ответ): До сравнения, которое по ним производится, либо по мере явного ввода каждого.. Нет единственного обязательного номера абзаца, есть логическая зависимость.
5. Возможный образец (не единственный ответ): The register does not decide between policies; the guide must therefore make its criteria explicit rather than present a measured winner.. Вывод касается процедуры аргумента, не недоказанного эффекта.
6. Возможный образец (не единственный ответ): Два reviewers могли смотреть лишь wording; гипотетический пример не частота такого события.. Не выдать мысленный случай за установленный факт команды.
7. Возможный образец (не единственный ответ): Если сведения не объясняют применимость/надёжность основания для вопроса; сохранить релевантное.. Краткость по функции, не произвольному лимиту минут.
8. Возможный образец (не единственный ответ): Оно может требовать лишней работы и всё равно оставаться расплывчатым.. Не подменять возражение «оппонентам не нравится качество».
9. Возможный образец (не единственный ответ): Сделать запись пропорциональной задаче и проверить ясность следующего действия.. Уступка ведёт к содержательной правке, не автоматическому отказу от всего.
10. Возможный образец (не единственный ответ): Нет; определение может быть коротким, сложное возражение длиннее; функции важнее симметрии.. Нельзя заменять связанность формальным размером.
11. Возможный образец (не единственный ответ): Убрать обещание без основания и согласовать вывод с доказанным в теле.. Не вставлять выдуманные данные в тело ради поддержки заключения.
12. Возможный образец (не единственный ответ): Позиция; границы register; роли источников; понятность решения; coverage и expertise.. Не повторять только первые слова или заголовки.
13. Возможный образец (не единственный ответ): Обоснованное предложение по brief; не гарантированный рост качества/скорости.. Степень уверенности следует из оснований.
14. Возможный образец (не единственный ответ): Индивидуальный точный заголовок с указанием объекта и позиции.. Не оценивать по эффектности или редкости слов.

</details>

## Атрибуция, синтез и границы вывода

1. **Развёрнутый ответ:** Разметь три голоса: The register records…, Google's guidance…, I propose…
2. **Развёрнутый ответ:** Три страницы [1]–[3] — три независимых experiments? Объясни связь между [1] и [2].
3. **Развёрнутый ответ:** Перепиши Google proved our team needs two approvals без приписывания источнику вывода проекта.
4. **Развёрнутый ответ:** Для одного утверждения модели открой реальный источник [1]–[3], назови раздел и сравни точный scope.
5. **Развёрнутый ответ:** Вместо трёх отдельных аннотаций напиши абзац о связи одной идеи [1] с одной идеей [3].
6. **Развёрнутый ответ:** «Документ описывает required reviews, значит Kestrel их включил». Что потеряно?
7. **Развёрнутый ответ:** Как сослаться на веб-страницу без проверенной даты публикации?
8. **Развёрнутый ответ:** Выбери короткую мысль из собственного источника, закрой его, перескажи и затем сверь отрицание/модальность/охват.
9. **Развёрнутый ответ:** Один paragraph описывает source claim и твою рекомендацию. Добавь маркер перехода между голосами.
10. **Развёрнутый ответ:** Сделай claim map из трёх положений своего текста: источник/локальный факт/собственное рассуждение.
11. **Развёрнутый ответ:** В источнике may reduce, в парафразе eliminates. Исправь и объясни потерю.
12. **Развёрнутый ответ:** Точная цитата содержит непривычное написание. Можно ли молча привести её к своему UK/US стилю?
13. **Развёрнутый ответ:** Добавь после ограниченного source claim собственный вывод с явным warrant.
14. **Развёрнутый ответ:** После обновления источника смысл claim изменился. Что сохранить в версии проекта?

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Местная вымышленная запись; реальная рекомендация источника; авторское предложение.. Не считать все три одним типом свидетельства.
2. Возможный образец (не единственный ответ): Нет; две страницы одной коллекции, третья product documentation, не trial Kestrel.. Число URL не подтверждает эффект местной политики.
3. Возможный образец (не единственный ответ): The guidance informs our criteria; our proposed approval policy requires its own justification.. Не выдумывать universal count или experiment.
4. Возможный образец (не единственный ответ): Фактически прочитанное место и проверка того, что автор модели не усилил его.. Нужен интернет; URL и раздел не заменять выдуманной страницей.
5. Возможный образец (не единственный ответ): Индивидуальный синтез guidance и product distinction с собственным ограниченным выводом.. Ссылки рядом с соответствующими claims; не утверждать общую экспериментальную верификацию.
6. Возможный образец (не единственный ответ): Возможность/configuration не факт настройки конкретного репозитория.. Локальная конфигурация не дана и не изменяется учебной задачей.
7. Возможный образец (не единственный ответ): Организация, название, URL, date not stated, дата доступа, нужный раздел.. Дата проверки 28 September 2026 не становится датой публикации.
8. Возможный образец (не единственный ответ): Оригинальное собственное предложение плюс источник и описание сверки.. Парафраз всё ещё нуждается в атрибуции; не копировать длинный фрагмент.
9. Возможный образец (не единственный ответ): The document distinguishes these decisions. For this project, I propose making the distinction explicit in examples.. Не выдавать рекомендацию автора за слова источника.
10. Возможный образец (не единственный ответ): Три конкретные фразы, основание и предел каждой.. Каждую ссылку действительно проверить, unknown не заполнять догадкой.
11. Возможный образец (не единственный ответ): May reduce / could reduce, не гарантированное устранение.. Сохраняется модальная сила, не только тема предложения.
12. Возможный образец (не единственный ответ): Нет; либо точная помеченная цитата, либо честный парафраз с атрибуцией.. Не менять чужие слова скрытой редактурой.
13. Возможный образец (не единственный ответ): Индивидуальный переход: почему основание относится к критерию и чего не подтверждает.. Слово therefore без объяснения связи недостаточно.
14. Возможный образец (не единственный ответ): Прочитанную рамку/дату, новый смысл и reason for revision; не подменять историю.. Личная запись остаётся частной; чужую публикацию целиком не перепечатывать.

</details>

## Чтение: полный образец проекта

Сначала прочитайте вымышленный brief и полный авторский проект ниже. Ссылки [1]–[3] открываются вручную: для сверки реальных источников нужен интернет. Это guidance и документация, не три независимых исследования и не записи ученика. Не копируйте страницы целиком; указывайте фактически прочитанные разделы и дату доступа.

- [[1] Google Engineering Practices: The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [[2] Google Engineering Practices: What to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html)
- [[3] GitHub Docs: Pull request reviews](https://docs.github.com/en/pull-requests/reference/pull-request-reviews)

Teaching brief: Kestrel's contribution guide

Kestrel and its records are fictional. They are not this learner's repository or an actual evaluation of GitHub. The three numbered web documents are real, public guidance, checked on 28 September 2026. Their recommendations and product descriptions are not three experimental studies. The two Google pages belong to one guidance collection; the GitHub page describes review functions. Open the links to distinguish what each source actually says from the proposed local policy in the model below. No publication date is asserted where it has not been verified.

Four volunteer maintainers look after Kestrel, a small directory of community activities. They can change the contribution guide, but this exercise gives nobody permission to change repository settings or publish a real policy. Two maintainers can currently assess changes to the visitor-facing interface. That does not mean that every other maintainer lacks all relevant knowledge. The team wants contributors to know what a review decision means and what to do when they disagree with a requested change.

A fictional six-week register contains 32 pull requests: 20 were merged, seven remain open, and five were closed without merging. These categories describe the state of the requests at the time the register was checked. They do not classify software quality. Ten requests were labelled as first contributions to Kestrel; six of those came from the same contributor during the period used by the local label. The label therefore cannot simply be translated as ten new people. Its definition needs clarification before it is used as a measure of newcomer participation.

The register originally reported a median first-response time of eighteen hours. The keeper corrected this to twenty-six hours after excluding automated messages. The current figure concerns the first human response, not approval, completion of review or merging. Individual response times, the distribution of change sizes and the reasons for delay are not supplied. The original entry should remain in the correction history. There is no experiment comparing alternative review policies, and no count of defects prevented or introduced.

One maintainer proposes a rule that a single approval should always be sufficient. Another proposes requiring two approvals for every change. Neither proposal has been adopted. A third wants contributors to distinguish a required correction from a suggestion about wording or personal preference. The fourth asks how a reviewer should record a limited review of documentation when a request also changes application behaviour. The brief supplies concerns, not a vote or a final team agreement.

Write for the four maintainers. Address this question: what should the contribution guide say about sufficient review and unresolved concerns? Assess clarity, maintainability and feasible use of the team's capacity. Do not rank individual volunteers, invent a security assessment or promise faster reviews without evidence. A defensible project may recommend a qualified procedure, retain some existing practice or argue for postponing a decision. It must explain its choice, confront a serious alternative and state what would change the conclusion.

The worked project is one possible argument, not the official policy of Google, GitHub or any real repository. Its numbered references identify source claims. The author's proposed arrangements are marked as proposals. A word count cannot establish C2, technical safety or the truth of an argument. After studying this model, develop your own project on another question using documents you have actually read. Keep the original draft, revised text, reference trail and reasons for substantive changes.

Worked project — original body

Sufficient review is a reasoned decision, not just a count

Kestrel should adopt a contribution guide that explains the scope and grounds of a review decision, rather than declaring that either one or two approvals will always be sufficient. The choice matters because contributors need to know what remains to be done, while maintainers need a procedure they can apply with limited volunteer capacity. I recommend distinguishing required corrections from optional suggestions, identifying any part of a change that still needs qualified review, and recording unresolved concerns. This is a proposal for Kestrel's stated circumstances, not a claim that the procedure has already improved its software or shortened its queue.

The local register establishes the scale of recorded activity but provides a weak basis for comparing policies. Of thirty-two requests, twenty were merged, seven remained open and five were closed without merging. Those categories do not tell us which changes were sound or why others were not merged. The corrected median of twenty-six hours measures the first human response. It is not a measure of completed review. Ten requests carried the first-contribution label, but six came from one contributor. Before drawing conclusions about new people, the team must clarify what that label means. None of these limitations makes the register useless; they restrict the claims it can support.

The three public documents serve a different purpose. Google's standard describes an approach to review that values overall improvement without demanding perfection [1]. Its companion guide directs attention to the substance of a change, including the suitability of tests and relevant documentation [2]. GitHub distinguishes a general comment from approval and a request for changes [3]. These are useful distinctions for a contribution guide, but they are not measurements of Kestrel's performance. The two Google documents also come from the same guidance collection. Treating the three pages as three independent demonstrations of an optimal approval count would misrepresent both their contents and their relationship.

Kestrel's first priority should be an intelligible account of the decision. I propose that a reviewer state what they examined, identify the issue that prevents acceptance if there is one, and explain what would resolve it. A comment such as “This needs work” gives a contributor little basis for action. A more useful local response would identify the behaviour in question and the reason it matters. Conversely, a suggestion about a preferred phrase should not quietly become an unexplained condition of acceptance. This proposal is about the function of the message; it does not require every review to be long or every minor change to receive an essay.

The second priority is coverage. Suppose a request changes both an instruction page and an interface. A maintainer who has checked only the wording should record that limit. Their contribution is valuable, but it should not be presented as an assessment of the changed interaction. In this fictional team, two maintainers can currently assess visitor-facing changes. The guide should explain how an unresolved question reaches someone able to evaluate it, without pretending that the other volunteers have nothing useful to contribute. This is a proposed allocation of attention, not a finding that two signatures are inherently better than one or a guarantee that a particular reviewer will detect every defect.

The strongest objection is practical. A procedure with several categories and explanations might demand more attention than the team can provide. A simple requirement for two approvals would be easier to state and might give contributors a more predictable rule. This objection deserves more than the reply that careful work is always worthwhile. Volunteer time is a real constraint in the brief, and a complicated procedure could become a rule that people routinely bypass. Moreover, a policy that depends on reviewers describing their own limits could fail if those descriptions are vague. A numeric requirement has the attraction of being visible, even though visibility alone does not establish adequate coverage.

I would therefore keep the proposed record short and test whether it answers three practical questions: what was examined, what remains unresolved, and what action is needed next? For a straightforward correction, the answers might fit into a few sentences. Where a request crosses areas of expertise, a longer explanation may be necessary. The team should not create identical paperwork for changes with different demands merely to make their appearance uniform. At the same time, brevity must not erase an unresolved concern. This response accepts the objection about workload and modifies the proposal, rather than dismissing the objection or claiming that the problem has already been solved.

A blanket single-approval rule has a related attraction: it seems to offer a clear stopping point. However, the brief does not establish that the first approving reviewer has assessed every relevant aspect of every request. For that reason, I would not treat a count as a substitute for a description of coverage. Nor would I reject any use of a count. The maintainers could retain a minimum requirement while explaining that an unresolved substantive concern still needs attention. The recommendation concerns the wording and reasoning of their guide. It does not change any repository setting, and product-specific enforcement would need to be checked separately before implementation.

Evaluation should distinguish the clarity of the guide from the quality of the software. For clarity, Kestrel could ask a contributor to explain what action a sample review requests and what a limited review leaves unassessed. For feasibility, maintainers could record where the proposed procedure produces uncertainty or disproportionate work. These are suggested checks, not completed observations. The team should preserve the definitions used and record corrections to its evidence. A lower response-time figure would not, by itself, show better review, just as a longer response would not establish greater care. Any later comparison would require attention to what kinds of requests were being compared.

My recommendation would change if the team found that the categories regularly obscured rather than clarified the next action, or that the necessary expertise could not be obtained within its available capacity. Such findings would justify revising the procedure, narrowing the changes the team could responsibly accept, or reconsidering the allocation of review work. They would not automatically prove that an unconditional one-approval or two-approval rule was the answer. The immediate deliverable should therefore be a proposed guide with worked examples and explicit limits, followed by a review of its use. Kestrel needs a defensible account of sufficient review, not a promise that a visible count will settle every substantive question.

1. **Краткий ответ:** Сколько requests в вымышленном register? Только число.
2. **Краткий ответ:** Исправленная медиана первого человеческого ответа, в часах? Число.
3. **Краткий ответ:** Сколько requests закрыты без merge? Число.
4. **Краткий ответ:** Источники [1]–[3] дают экспериментальный эффект для Kestrel? yes/no.
5. **Развёрнутый ответ:** Сформулируй тезис модели своими словами. Против любого approval count ли он направлен?
6. **Развёрнутый ответ:** Почему first-contribution label нельзя пересказать как ten newcomers?
7. **Развёрнутый ответ:** Как связаны абзацы о ясности решения и coverage?
8. **Развёрнутый ответ:** Назови сильнейшее возражение и изменение предложения в ответ на него.
9. **Развёрнутый ответ:** Найди две авторские рекомендации и отдели их от пересказа реальных страниц.
10. **Развёрнутый ответ:** Какой исход мог бы изменить рекомендацию и почему не следует немедленно выбрать opposite count?
11. **Развёрнутый ответ:** Напиши 220–280 слов executive summary модели: вопрос, вывод, опора, возражение, предел и следующий шаг.
12. **Развёрнутый ответ:** Напиши 180–220 слов самостоятельного разбора альтернативы two approvals, не карикатуры.
13. **Развёрнутый ответ:** Составь проверяемую библиографию трёх страниц. Отдельно пометь вымышленный brief.
14. **Развёрнутый ответ:** Дай три редакторских замечания к модели или защити три её решения, с цитатами самого текста.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 32. Это число requests, не reviewers или новых contributors.
2. Ключ: 26. 18 было прежним значением до исключения автоматических сообщений.
3. Ключ: 5. 20 merged, 7 open, 5 closed; качество этими категориями не определено.
4. Ключ: no. Это guidance и документация, не измерение местного результата.
5. Возможный образец (не единственный ответ): Нужно объяснять scope/grounds/unknowns; minimum count возможен, но не вместо coverage.. Не усиливать ограниченную позицию до полного запрета числа.
6. Возможный образец (не единственный ответ): Десять requests, шесть от одного contributor; определение местной метки нуждается в проверке.. Не восстанавливать число людей без уникальных данных.
7. Возможный образец (не единственный ответ): Первый уточняет действие и основания, второй — реально проверенные аспекты.. Связь функций, не простое совпадение темы review.
8. Возможный образец (не единственный ответ): Нагрузка/неясные категории; короткая пропорциональная запись с проверкой next action.. Не записывать возражение как лень или отказ от качества.
9. Возможный образец (не единственный ответ): Например proportionate record и proposed checks; это I propose/could, не экспериментальные findings.. Ссылки не превращают все окружающие предложения в слова источника.
10. Возможный образец (не единственный ответ): Неясные категории/недоступная expertise; это требует пересмотра, но не доказывает единственный другой вариант.. Ответ связан с критериями и не подменяет недостаточность доказательством противоположного.
11. Возможный образец (не единственный ответ): Kestrel should explain what a review decision covers and what remains unresolved, rather than relying on an unconditional rule about approval counts. The proposed guide would distinguish required corrections from optional suggestions, identify any area still needing qualified attention, and make the next action clear to contributors. This is a recommendation for a fictional four-person team, not a tested improvement in its software. The local register records thirty-two requests, including twenty merged requests. It does not measure software quality or explain the outcomes. Its corrected median of twenty-six hours concerns the first human response, not completed review. The first-contribution label also requires clarification before it can support claims about numbers of newcomers. The three public documents supply guidance and distinctions, not independent experiments on this team. A serious objection is that a more descriptive procedure could create unnecessary work. The recommendation therefore keeps the record proportionate to the change: a short explanation may be enough for a straightforward correction, while a request spanning several areas may need more detail. This accepts a capacity constraint without claiming that a visible approval count establishes adequate coverage. The proposed guide should be checked for clarity and feasibility before broader conclusions are drawn. Contributors could explain the action requested in sample reviews, and maintainers could identify unclear or burdensome parts of the procedure. These checks have not been conducted. If the categories obscure the next action or relevant expertise is unavailable, the team should revise the procedure rather than treating the current proposal as a guarantee.. Собственный полный текст; нельзя обещать faster/safer как измеренный факт, дата/единица сохраняются.
12. Возможный образец (не единственный ответ): A rule requiring two approvals has a serious advantage: contributors and maintainers can identify the formal threshold without interpreting a longer description of review coverage. In a volunteer team, this simplicity may reduce uncertainty about the visible process. It could also discourage a maintainer from treating their own first impression as sufficient. These are plausible reasons for considering the rule, not evidence that it has already improved Kestrel's reviews. The difficulty is that two approvals do not necessarily describe two different areas of scrutiny. Both reviewers might examine the wording while an interface question remains unresolved. The brief provides no observations that would tell us how often such a situation occurs. I would therefore avoid either presenting the numeric rule as a complete solution or dismissing it as pointless. A defensible compromise in the proposal is to keep any agreed minimum requirement while asking reviewers to record unresolved substantive concerns and the scope of their contribution. This recommendation addresses the objection about visibility without pretending that a count measures all relevant judgement. Its feasibility still needs to be examined: if the additional descriptions become vague or burdensome, the guide should be revised.. Признать реальное преимущество прозрачного порога, предел coverage и необходимость проверки предложенного ответа.
13. Возможный образец (не единственный ответ): Названия, организации, точные URLs и фактическая дата доступа; brief — original fictional teaching material.. Не выдумывать даты публикации, DOI, статус empirical study или настоящего владельца Kestrel.
14. Возможный образец (не единственный ответ): Фактические фразы, критерий и объяснение; обоснованный альтернативный порядок допустим.. Модель не безошибочный эталон, оценка должна быть предметной, не общим nice text.

</details>

## Аудирование: редакторский разбор другого проекта

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

An editor's note about the flood-history exhibition

This is an original fictional voice note from an editor called Rina. It concerns a student's written project about a local history exhibition. It does not report a real flood, museum study or funding decision. You are hearing one narrator describing an editorial exchange, not a recording of all its participants.

The student, Joel, had submitted a complete draft. His question was whether the exhibition should present one chronological narrative or place residents' accounts alongside it. His first paragraph promised to evaluate both options, but most of the body simply summarised three documents in publication order. The first described the exhibition's current panels, the second collected residents' memories, and the third contained an archivist's response. Joel had not yet explained how those documents supported a choice of presentation. I asked him to write down the function of each paragraph after reading his actual draft, rather than copying the structure he had originally intended.

The most important correction involved a number. The second document contained twelve accounts from eight residents, not twelve residents. Three accounts came from one resident and three from another; six other residents supplied one each. Joel had described twelve independent perspectives. He changed that phrase, but initially left the same claim in his conclusion. We marked both places and checked the abstract as well. Correcting one sentence does not repair every later statement that depends on it. The underlying accounts remained useful, but their number no longer supported his original description of the contributors.

There was also a difference between uncertainty and contradiction. One resident could not recall the date of an evacuation. Another remembered leaving on a Tuesday. Joel had treated the first account as a denial of the second. I asked him to preserve the first speaker's uncertainty. It would take additional evidence to decide whether the accounts concerned the same event. Neither a confident memory nor an admitted gap could settle that question by itself. His revision explained this limitation instead of announcing that one resident was unreliable.

Joel's alternative paragraph was initially weak. It said that anyone preferring a chronological display simply disliked personal stories. The archivist's actual concern was different: visitors might have difficulty placing an event when an account lacked a date. Joel rewrote the objection around that concern. He then proposed keeping a chronological framework while placing selected accounts beside relevant panels, with uncertainty made explicit. The proposal did not imply that all contributors endorsed it. It also did not establish that visitors would understand the revised layout; that remained a question for a future check.

We separated content revision from language editing. In one paragraph, he changed “the archive proves” to “the archive records”, because the document recorded what had been reported without independently confirming every detail. In another, he replaced a vague “this” with “the proposed pairing of accounts and panels”. These changes had different purposes. The first adjusted the status of evidence; the second made a reference easier to follow. Neither improvement required replacing every short word with an academic-sounding alternative. Joel kept a direct sentence explaining what he recommended.

By the end of our exchange, he had revised the comparison section and the alternative paragraph. He had not yet updated the abstract or completed the reference list. I offered to check whether the next abstract preserved the qualified conclusion. I did not agree to verify the historical record, obtain permission from contributors or approve the exhibition. Joel recorded those limits in his revision note. His next step was to align the remaining parts of the draft with the corrected argument, retain the earlier version and bring both versions to the next discussion. There was no fixed deadline for completing the whole project in this note. A complete revised text and a record of its reasoning were still required; the editorial meeting itself did not count as the finished work.

</details>

1. **Краткий ответ:** Сколько accounts содержал второй документ Joel? Число.
2. **Краткий ответ:** Сколько residents предоставили accounts? Число.
3. **Краткий ответ:** Abstract к концу разговора уже updated? yes/no.
4. **Краткий ответ:** Rina согласилась проверить historical record? yes/no.
5. **Развёрнутый ответ:** Почему смены twelve на eight в одном предложении недостаточно?
6. **Развёрнутый ответ:** Один resident не помнит дату, другой вспоминает Tuesday. В чём ошибка трактовки Joel?
7. **Развёрнутый ответ:** Восстанови настоящее возражение archivist вместо disliked personal stories.
8. **Развёрнутый ответ:** Как изменённое предложение отвечает на возражение?
9. **Развёрнутый ответ:** Различи правки proves→records и this→the proposed pairing… по функции.
10. **Развёрнутый ответ:** Что именно Rina предложила проверить в следующей версии?
11. **Развёрнутый ответ:** Какие части завершены и какие ещё нужны к концу note?
12. **Устная работа:** Перескажи две главные правки Joel; партнёр спрашивает, чьи полномочия ограничены. Ответь после реального вопроса.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 12. Двенадцать accounts, не столько же жителей.
2. Ключ: 8. Восемь: двое по три рассказа и ещё шестеро по одному.
3. Ключ: no. Он ещё не обновлён; правка раздела не завершает весь текст.
4. Ключ: no. Её предложение ограничено точностью нового abstract относительно qualified conclusion.
5. Возможный образец (не единственный ответ): Та же неверная интерпретация осталась в conclusion; нужно проверить abstract и зависимые claims.. Число и «independent perspectives» связаны; не менять только цифру.
6. Возможный образец (не единственный ответ): Не помнит не значит отрицает; не установлено, что речь об одном событии.. Не выбирать автоматически надёжного/лживого рассказчика.
7. Возможный образец (не единственный ответ): Посетителю трудно расположить недатированный account на временной шкале.. Не приписывать нелюбовь к личным историям.
8. Возможный образец (не единственный ответ): Сохраняет chronological framework и размещает selected accounts рядом с relevant panels, обозначая uncertainty.. Это proposal, не одобрение contributors и не испытанная понятность.
9. Возможный образец (не единственный ответ): Первая меняет силу claim, вторая уточняет референт.. Не считать любую замену слов только косметической.
10. Возможный образец (не единственный ответ): Сохранение qualified conclusion в abstract, не историю/permissions/approval exhibition.. Не расширять принятую роль редактора.
11. Возможный образец (не единственный ответ): Comparison и alternative revised; abstract и reference list ещё требуют работы, полный новый текст не готов.. Частичное выполнение не общий final draft.
12. Возможный образец (не единственный ответ): Правки claims и структуры плюс ограниченная роль Rina.. Слушать до текста, отмечать transcript support; устные характеристики неизвестны без аудио.

</details>

## Письмо: полный проект и его версии

1. **Развёрнутый ответ:** По brief Kestrel напиши собственный проект 1000–1500 слов основного текста: тезис, синтез [1]–[3], сильная альтернатива, ограничения и вывод. Библиографию добавь отдельно.
2. **Развёрнутый ответ:** Напиши свой самостоятельный проект 1000–1500 слов по вопросу из C205-inquiry или новому, не Kestrel. Используй три реально прочитанных открытых источника; добавь библиографию отдельно.
3. **Развёрнутый ответ:** К своему проекту приложи реестр трёх ключевых claims: дословная фраза своего текста → реальный источник/место → твой вывод.
4. **Развёрнутый ответ:** Сделай reverse outline фактически написанного проекта. Назови одно лишнее повторение или объясни, почему повторы функциональны.
5. **Развёрнутый ответ:** Перепиши самый слабый контраргумент своего проекта так, чтобы он представлял разумного оппонента. Добавь ответ, меняющий предложение при необходимости.
6. **Развёрнутый ответ:** Напиши 100–140 слов ответа рецензенту, который нашёл недоказанное обещание faster reviews.
7. **Развёрнутый ответ:** Напиши 100–140 слов журнала исправления ten newcomers после проверки first-contribution label.
8. **Развёрнутый ответ:** Подготовь ПОЛНУЮ пересмотренную версию своего самостоятельного проекта: 1000–1500 слов, отдельно исходник и журнал правок.
9. **Развёрнутый ответ:** После полной редактуры напиши 100–140 слов рефлексии: порядок правок, две языковые проблемы и новая проверка.
10. **Развёрнутый ответ:** Сверь introduction, abstract и conclusion со своим новым телом: выпиши изменённые claims и соответствующие места.
11. **Развёрнутый ответ:** Проведи финальную сверку библиографии: каждая ссылка в тексте разрешается, каждая страница реально прочитана, даты/разделы честны.
12. **Развёрнутый ответ:** Составь пакет передачи на ручную проверку: brief, исходник, пересмотренный проект, источники и журнал; назови место продолжения, если работа не закончена.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Sufficient review is a reasoned decision, not just a count Kestrel should adopt a contribution guide that explains the scope and grounds of a review decision, rather than declaring that either one or two approvals will always be sufficient. The choice matters because contributors need to know what remains to be done, while maintainers need a procedure they can apply with limited volunteer capacity. I recommend distinguishing required corrections from optional suggestions, identifying any part of a change that still needs qualified review, and recording unresolved concerns. This is a proposal for Kestrel's stated circumstances, not a claim that the procedure has already improved its software or shortened its queue. The local register establishes the scale of recorded activity but provides a weak basis for comparing policies. Of thirty-two requests, twenty were merged, seven remained open and five were closed without merging. Those categories do not tell us which changes were sound or why others were not merged. The corrected median of twenty-six hours measures the first human response. It is not a measure of completed review. Ten requests carried the first-contribution label, but six came from one contributor. Before drawing conclusions about new people, the team must clarify what that label means. None of these limitations makes the register useless; they restrict the claims it can support. The three public documents serve a different purpose. Google's standard describes an approach to review that values overall improvement without demanding perfection [1]. Its companion guide directs attention to the substance of a change, including the suitability of tests and relevant documentation [2]. GitHub distinguishes a general comment from approval and a request for changes [3]. These are useful distinctions for a contribution guide, but they are not measurements of Kestrel's performance. The two Google documents also come from the same guidance collection. Treating the three pages as three independent demonstrations of an optimal approval count would misrepresent both their contents and their relationship. Kestrel's first priority should be an intelligible account of the decision. I propose that a reviewer state what they examined, identify the issue that prevents acceptance if there is one, and explain what would resolve it. A comment such as “This needs work” gives a contributor little basis for action. A more useful local response would identify the behaviour in question and the reason it matters. Conversely, a suggestion about a preferred phrase should not quietly become an unexplained condition of acceptance. This proposal is about the function of the message; it does not require every review to be long or every minor change to receive an essay. The second priority is coverage. Suppose a request changes both an instruction page and an interface. A maintainer who has checked only the wording should record that limit. Their contribution is valuable, but it should not be presented as an assessment of the changed interaction. In this fictional team, two maintainers can currently assess visitor-facing changes. The guide should explain how an unresolved question reaches someone able to evaluate it, without pretending that the other volunteers have nothing useful to contribute. This is a proposed allocation of attention, not a finding that two signatures are inherently better than one or a guarantee that a particular reviewer will detect every defect. The strongest objection is practical. A procedure with several categories and explanations might demand more attention than the team can provide. A simple requirement for two approvals would be easier to state and might give contributors a more predictable rule. This objection deserves more than the reply that careful work is always worthwhile. Volunteer time is a real constraint in the brief, and a complicated procedure could become a rule that people routinely bypass. Moreover, a policy that depends on reviewers describing their own limits could fail if those descriptions are vague. A numeric requirement has the attraction of being visible, even though visibility alone does not establish adequate coverage. I would therefore keep the proposed record short and test whether it answers three practical questions: what was examined, what remains unresolved, and what action is needed next? For a straightforward correction, the answers might fit into a few sentences. Where a request crosses areas of expertise, a longer explanation may be necessary. The team should not create identical paperwork for changes with different demands merely to make their appearance uniform. At the same time, brevity must not erase an unresolved concern. This response accepts the objection about workload and modifies the proposal, rather than dismissing the objection or claiming that the problem has already been solved. A blanket single-approval rule has a related attraction: it seems to offer a clear stopping point. However, the brief does not establish that the first approving reviewer has assessed every relevant aspect of every request. For that reason, I would not treat a count as a substitute for a description of coverage. Nor would I reject any use of a count. The maintainers could retain a minimum requirement while explaining that an unresolved substantive concern still needs attention. The recommendation concerns the wording and reasoning of their guide. It does not change any repository setting, and product-specific enforcement would need to be checked separately before implementation. Evaluation should distinguish the clarity of the guide from the quality of the software. For clarity, Kestrel could ask a contributor to explain what action a sample review requests and what a limited review leaves unassessed. For feasibility, maintainers could record where the proposed procedure produces uncertainty or disproportionate work. These are suggested checks, not completed observations. The team should preserve the definitions used and record corrections to its evidence. A lower response-time figure would not, by itself, show better review, just as a longer response would not establish greater care. Any later comparison would require attention to what kinds of requests were being compared. My recommendation would change if the team found that the categories regularly obscured rather than clarified the next action, or that the necessary expertise could not be obtained within its available capacity. Such findings would justify revising the procedure, narrowing the changes the team could responsibly accept, or reconsidering the allocation of review work. They would not automatically prove that an unconditional one-approval or two-approval rule was the answer. The immediate deliverable should therefore be a proposed guide with worked examples and explicit limits, followed by a review of its use. Kestrel needs a defensible account of sufficient review, not a promise that a visible count will settle every substantive question.. Это полный образец, не единственный ответ. Проверять 1000–1500 слов без библиографии, аргумент/атрибуцию/регистр; вымышленный brief не настоящий experiment.
2. Возможный образец (не единственный ответ): Индивидуальный полный текст: ясный ответ, связные основания из источников, серьёзная альтернатива, предел и обоснованный вывод.. План или три аннотации не заменяют текст. Проверка вручную по assessment/RUBRICS.md с цитатами; интернет нужен для источников, паузы допустимы.
3. Возможный образец (не единственный ответ): Проверяемые соответствия с отделёнными авторскими inference.. Не публиковать личные документы, не выдумывать URL и не считать ссылку подтверждением всего абзаца.
4. Возможный образец (не единственный ответ): Функция каждого абзаца, связь с тезисом и аргументированное решение.. Не составлять только идеальный план будущего текста.
5. Возможный образец (не единственный ответ): Исходник, сильная альтернатива, содержательный ответ с уступкой/границей.. Не приписывать мотивы; согласие со всем оппонентом не обязательно.
6. Возможный образец (не единственный ответ): Thank you for pointing out that my draft promised a faster process without evidence from a comparison. I have removed that promise from the introduction and checked the conclusion for the same assumption. The revised argument recommends clearer decisions, with a separate proposal to examine how the procedure works in practice. I have also retained your concern about volunteer capacity as a serious objection rather than treating it as resistance to careful review. The response is to keep the proposed record proportionate to the change, not to claim that extra work is costless. I have not altered your original comment or marked the procedure as approved. Please check whether this revision represents your concern accurately.. Указать actual changes, проверить зависимые места, сохранить concern и не выдумывать approval.
7. Возможный образец (не единственный ответ): The original paragraph stated that ten newcomers had contributed during the period. The register actually records ten requests with a local first-contribution label, six of which came from one contributor. I have replaced the claim about people with the recorded unit and added a question about the label's definition. This correction also affects the summary, where I had described the project as attracting ten new contributors. I have retained the earlier draft and recorded both changes rather than silently replacing the number. The corrected passage does not claim that participation was poor or that the register was fabricated. It simply no longer uses a request label as a verified count of people.. Запросы/люди различены, summary проверяется, старая версия сохранена, не выдуманы новые отрицательные выводы.
8. Возможный образец (не единственный ответ): Полный второй текст с проверенными фактами, структурой, альтернативой и соразмерным выводом; не список предполагаемых изменений.. Обе версии сохраняются в разных ответах; нельзя заменить revision обещанием или сократить обязательный проект ради длительности занятия.
9. Возможный образец (не единственный ответ): My revision began with the argument rather than individual words. A reverse outline showed that two paragraphs repeated source descriptions without explaining their role in the recommendation. I combined their useful points and added a paragraph addressing the strongest capacity objection. I then checked that the abstract and conclusion retained the same limits as the body. Only after those changes did I correct two recurring language problems: vague references with “this” and unsupported causal links introduced by “therefore”. The revised text remains my responsibility; a partner's comment is evidence about how it was read, not automatic approval of every claim. On unfamiliar material, I will test whether I can repeat this process without relying on the model's structure.. Конкретные свидетельства работы, не фиктивный отзыв; слова о проверке должны соответствовать реальным версиям.
10. Возможный образец (не единственный ответ): Реальные фразы трёх частей и обоснование одинаковой силы/охвата.. Не обязательно одинаковые слова; главное — не противоречить данным и ограничениям.
11. Возможный образец (не единственный ответ): Проверенный список соответствий либо конкретные ещё не устранённые пробелы.. Не считать unknown подтверждённым; не изобретать реквизиты ради аккуратного списка.
12. Возможный образец (не единственный ответ): Содержательные ссылки на собственные ответы/частные файлы и ясный статус незавершённого.. Нет автоматического балла по объёму; личные файлы хранятся только в ignored learner/private/.

</details>

## Редакторская мастерская

1. **Развёрнутый ответ:** Исправь абзац: We analysed 32 successful changes. Twenty were merged, so our process is reliable. Сохрани доступные факты.
2. **Развёрнутый ответ:** В тексте исправлена медиана 18→26. Перечисли четыре места, где искать связанные claims, и объясни зависимость.
3. **Развёрнутый ответ:** Устрани неподдержанный мотив: Maintainers who ask for two approvals do not trust contributors.
4. **Развёрнутый ответ:** Сократи без потери ограничения: It is possible that, in some cases, two people may have looked at the same aspect only.
5. **Развёрнутый ответ:** В There are fewer evidences than expected исправь countability, сохранив сравнение.
6. **Развёрнутый ответ:** Объедини два повторяющихся абзаца своего текста без удаления нужной оговорки. Покажи до/после.
7. **Развёрнутый ответ:** Рецензент просит все passive заменить на active. Выбери один свой случай и обоснуй решение.
8. **Развёрнутый ответ:** Исправь смешанную уступку Although the evidence is limited, but the proposal is reasonable.
9. **Развёрнутый ответ:** Из short summary исчезло without staff help. Объясни, когда удаление меняет факт, не только длину.
10. **Развёрнутый ответ:** Рецензент не согласен с твоим выводом, но не указал ошибку. Напиши запрос к основанию разногласия.
11. **Развёрнутый ответ:** Внеси две приоритетные языковые правки в собственный проект: исходная фраза, исправление, механизм, новый пример.
12. **Развёрнутый ответ:** Проверь, не называют ли твои заголовки то, чего в разделах нет. Исправь один или обоснуй соответствие.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): We examined a register of 32 requests, 20 of which were merged. These outcomes do not by themselves establish process reliability.. Merged не success/quality; не объявлять остальные дефектными.
2. Возможный образец (не единственный ответ): Introduction, analysis/comparison, summary, conclusion; найти утверждения о response и выводы на их основе.. Не менять любое число 18 механически, а проверить референт.
3. Возможный образец (не единственный ответ): Some maintainers favour a visible minimum threshold; their motives are not established by that preference.. Не заменять один выдуманный мотив другим.
4. Возможный образец (не единственный ответ): Two reviewers may, in some cases, have examined only the same aspect.. Не превращать some/may в all/always; допускаются ясные альтернативы.
5. Возможный образец (не единственный ответ): There is less evidence than expected. / There are fewer pieces of evidence than expected.. Две нормативные модели с разным ядром; не трактовать как автоматически меньше research quality.
6. Возможный образец (не единственный ответ): Реальная авторская правка с сохранением scope и attribution.. Нельзя «сократить» удалением причин, альтернативы и ограничения.
7. Возможный образец (не единственный ответ): Контекстный анализ фокуса/известности агента; passive может быть оправдан.. Не выдумывать we или исполнителя ради формального active.
8. Возможный образец (не единственный ответ): Although the evidence is limited, the proposal may still be reasonable if its limits are explicit.. Не считать добавленную оговорку доказательством reasonable; другие формы связи допустимы.
9. Возможный образец (не единственный ответ): Если измеряли именно такой критерий, удаление расширяет interpretation до любого completion/unaided.. Вернуть необходимое условие, даже если текст станет длиннее.
10. Возможный образец (не единственный ответ): Could you identify the criterion or inference you disagree with?. Не объявлять reviewer неправым/нечестным и не менять позицию без понимания.
11. Возможный образец (не единственный ответ): Реальные повторяющиеся проблемы и собственные новые фразы.. Не фабриковать ошибки; различать грамматику, естественность и предпочтение стиля.
12. Возможный образец (не единственный ответ): Реальная сверка функции headings с абзацами.. Нельзя назвать раздел Results, если там лишь planned checks, без пояснения статуса.

</details>

## Обсуждение текста с рецензентом

1. **Устная работа:** Объясни партнёру свой тезис и попроси пересказать его. Исправь реальную потерю scope либо подтверди точность.
2. **Устная работа:** Партнёр выбирает один непонятный this в твоём тексте. Уточни референт и предложи правку.
3. **Устная работа:** Партнёр защищает сильную альтернативу твоему тезису. Передай его основание до своего ответа.
4. **Устная работа:** Объясни одну substantive правку и одну copy-edit из реального журнала.
5. **Устная работа:** Партнёр спрашивает: Did you verify that, or does the source report it? Ответь для конкретного claim.
6. **Устная работа:** Отзыв звучит Too strong. Попроси точную фразу и объяснение, затем пересмотри модальность при необходимости.
7. **Устная работа:** За одну связную реплику объясни структуру проекта; партнёр меняет порядок двух разделов. Обсуди последствия.
8. **Устная работа:** Ты не принимаешь одну стилистическую правку. Откажи аргументированно и сохрани уважительный регистр.
9. **Устная работа:** Прочитай свой сложный абзац вслух по смысловым группам; слушатель пересказывает границу утверждения.
10. **Устная работа:** Партнёр сообщает поправку к числу из источника. Назови зависимые места проекта и уточни источник поправки.
11. **Устная работа:** После обсуждения вслух раздели accepted changes, unresolved points и actions not yet completed.
12. **Устная работа:** Проведи редакторскую беседу по своему полному тексту: два неожиданных вопроса партнёра и последующее уточнение. Запиши фактический итог.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Реальное объяснение и ответ на пересказ, не заученная пара реплик.. Содержание и взаимодействие по свидетельству; без аудио fluency/pronunciation unknown.
2. Возможный образец (не единственный ответ): Конкретная фраза и проверка нового понимания.. Нельзя заранее придумать несуществующий отзыв и записать его фактом.
3. Возможный образец (не единственный ответ): Точный пересказ, подтверждение/поправка и содержательный ответ.. Уступка не требует полного согласия; мотивы не выдумываются.
4. Возможный образец (не единственный ответ): Разные реальные изменения и причины; ясно что меняет claim.. Не выдавать смену числа/агента/охвата за чистый стиль.
5. Возможный образец (не единственный ответ): Разделить лично проверенную страницу и не наблюдавшийся внешний факт.. Чтение источника не проведение его эксперимента.
6. Возможный образец (не единственный ответ): Настоящее уточнение, ответ по конкретному месту и неавтоматическая правка.. Нет требования принять любой отзыв без основания.
7. Возможный образец (не единственный ответ): Логическая зависимость абзацев и ответ на реальную перестановку.. Не защищать порядок только потому, что он был первоначальным.
8. Возможный образец (не единственный ответ): Причина, связанная с адресатом, ясностью или смыслом; проверка понимания.. Не объявлять все альтернативные варианты ошибочными.
9. Возможный образец (не единственный ответ): Реальное звучание, обратная связь о понятности и при необходимости новая попытка.. ASR и текст не измеряют ударение/ритм; акцент сам по себе не ошибка.
10. Возможный образец (не единственный ответ): Не механическая замена всех совпавших чисел, а адресная карта claims.. Отличить достоверную поправку от неподтверждённой реплики.
11. Возможный образец (не единственный ответ): Фактический точный итог без выдуманных согласований.. Thank you не approval, план следующей версии не её готовность.
12. Возможный образец (не единственный ответ): Реальный обмен, конкретные места текста, объяснённые решения по правкам.. Это редакторское обсуждение, не завершённая большая защита C205; произношение требует аудио.

</details>

## Повторение и перенос редакторского навыка

1. **Развёрнутый ответ:** Без модели назови четыре функции, которые связывают источник с рекомендацией.
2. **Развёрнутый ответ:** В новом кейсе десять комментариев от трёх людей. Исправь ten independent reviewers.
3. **Развёрнутый ответ:** Перестрой Because the text is clear, therefore the result is true без ложного вывода.
4. **Развёрнутый ответ:** Придумай сильное ресурсное возражение к собственному проекту и условный ответ.
5. **Развёрнутый ответ:** Найди в своём тексте место, где wording change на самом деле меняет claim. Объясни.
6. **Развёрнутый ответ:** Что проверить, если три ссылки принадлежат одному сайту?
7. **Развёрнутый ответ:** Сверь библиографию и ссылки после удаления абзаца. Что могло остаться лишним или пропасть?
8. **Развёрнутый ответ:** Сформулируй финал, который отвечает на вопрос, но не обещает универсального решения.
9. **Развёрнутый ответ:** После просьбы о следующем черновике услышал I can look at the summary. Что ещё не обещано?
10. **Развёрнутый ответ:** По итоговому разбору назови две реальные повторяющиеся проблемы и соответствующие упражнения.
11. **Развёрнутый ответ:** Через 7 дней возьми новый незнакомый вопрос и три других открытых документа. Напиши 350–450 слов аргумента и затем переработай его после реального отзыва, сохранив обе версии.
12. **Устная работа:** Объясни после отложенной работы, что изменил и почему; ответь на незнакомое заранее возражение партнёра.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Claim, evidence, analysis/warrant, limitation; возможен другой обоснованный порядок.. Это функции, не обязательные одинаковые четыре предложения.
2. Возможный образец (не единственный ответ): Three people supplied ten comments; independence and coverage need separate evidence.. Комментарии/люди/независимость не синонимы.
3. Возможный образец (не единственный ответ): A clear text can still contain an unsupported conclusion.. Языковая понятность не доказательство внешнего факта.
4. Возможный образец (не единственный ответ): Конкретный trade-off и изменение/ограничение предложения.. Не заученная карикатура «это дорого» без связи с контекстом.
5. Возможный образец (не единственный ответ): Реальная пара фраз или обоснование, что выбранная правка не меняет содержание.. Не выдумывать изменение ради выполнения задания.
6. Возможный образец (не единственный ответ): Происхождение конкретных claims, метод и отношение документов; сам домен не решает независимость всех сведений.. Не запрещать один домен автоматически, но не считать URL тремя experiments.
7. Возможный образец (не единственный ответ): Неиспользуемая запись, потерянная ссылка, неверный номер; исправить реальные соответствия.. Проверять фактическую пару текст/источник, не только внешний формат.
8. Возможный образец (не единственный ответ): Индивидуальный ограниченный вывод с основанием и условием пересмотра.. Не уходить в необоснованное «ничего нельзя сказать».
9. Возможный образец (не единственный ответ): Не обязательно проверка всего текста, фактов, источников или approval.. Уточнить объём помощи и не расширять роль.
10. Возможный образец (не единственный ответ): Цитаты своих ответов → критерий → адресная практика.. Не записывать mastery или фиктивные баллы без проверки.
11. Возможный образец (не единственный ответ): Новый текст, источники, альтернатива, отзыв и фактическая редактура.. Это отложенный перенос части навыка, не замена обязательному проекту 1000–1500 слов; дата и новизна фактические.
12. Возможный образец (не единственный ответ): Конкретный пересмотр и новая реакция на собеседника.. Нужно реальное аудио для устных характеристик, не только новый файл с текстом.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** ___ the proposal includes a review, it has not been approved. (Although/Despite)
2. **Краткий ответ:** ___ the additional review, approval is still pending. (Although/Despite)
3. **Краткий ответ:** The editor recommends ___ the conclusion. (reconsider/reconsidering)
4. **Краткий ответ:** Выбранная base-модель: They recommend that the claim ___ qualified. (be/is)
5. **Краткий ответ:** The grounds for this recommendation ___ limited. (is/are)
6. **Краткий ответ:** Новый кейс: 27 annotations from 16 volunteers. Число 27 означает annotations или volunteers?
7. **Краткий ответ:** Publisher describes a function; local use was not checked. Доказывает описание, что функция использована здесь? yes/no.
8. **Краткий ответ:** A review was requested. Completed review обязательно? yes/no.
9. **Развёрнутый ответ:** Архив выбирает между одной общей аннотацией и отдельными примечаниями к устным историям. Сформулируй вопрос и предварительный тезис без готового победителя.
10. **Развёрнутый ответ:** Три документа: местный журнал, guidance по описанию коллекций, письмо участника. Раздели их вклад и предел.
11. **Развёрнутый ответ:** Журнал содержит 27 annotations / 16 volunteers, чтение посетителей не проверяли. Исправь Twenty-seven visitors understood the labels.
12. **Развёрнутый ответ:** Напиши сильную альтернативу своей позиции об archive notes и ответ с одной уступкой.
13. **Развёрнутый ответ:** Отредактируй пунктуацию The guide is available, however access does not prove comprehension.
14. **Развёрнутый ответ:** Перепиши The guidance proves that our arrangement works, если guidance не изучало этот архив.
15. **Развёрнутый ответ:** Первый draft говорит all volunteers, источник — some volunteers. Назови две зависимые части текста, где проверить усиление.
16. **Развёрнутый ответ:** Составь план из пяти функциональных частей для полноценного ответа архиву.
17. **Развёрнутый ответ:** Подбери три реально открытых источника к НОВОМУ вопросу, не использованные в тренировочном проекте или C205-inquiry. Дай проверяемую библиографию и место одного claim в каждом.
18. **Развёрнутый ответ:** На новом вопросе и трёх источниках предыдущего задания напиши ПОЛНЫЙ проект 1000–1500 слов основного текста; библиография отдельно. Включи сильную альтернативу, ограничения и обоснованный вывод.
19. **Развёрнутый ответ:** Представь полную исправленную версию этого контрольного проекта (1000–1500 слов) и отдельно три substantive изменения с основаниями. Первую версию не удаляй.
20. **Развёрнутый ответ:** Напиши 180–220 слов executive summary итоговой версии, не усиливая её вывод.
21. **Развёрнутый ответ:** Напиши 100–140 слов response to review: какие изменения ты принял, какое предложение не принял и почему. Используй реальный отзыв либо явно помеченную учебную редакторскую проверку.
22. **Развёрнутый ответ:** Для двух ссылок в исправленной версии проследи claim до фактически прочитанного места. Отметь собственный inference.
23. **Развёрнутый ответ:** Составь reverse outline второй версии и объясни одну структурную правку по сравнению с первой.
24. **Развёрнутый ответ:** Что ещё нужно для подтверждения письменного навыка после отправки формы и почему это не сертификат C2?
25. **Устная работа:** Партнёр указывает слабое основание в новом проекте. Уточни фразу, передай его concern и ответь по существу.
26. **Устная работа:** Объясни, почему сильная альтернатива не разрушила твой вывод или почему ты его изменил. Партнёр задаёт follow-up.
27. **Устная работа:** Партнёр спрашивает, какие результаты ты наблюдал лично. Ответь для собственного текста и исправь возможное неверное впечатление.
28. **Устная работа:** После неожиданной поправки партнёра к одному источнику объясни, какие части проекта надо проверить и что пока не меняешь.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: Although. Полное придаточное после although, не despite.
2. Ключ: Despite. Именная группа после despite без of.
3. Ключ: reconsidering. Recommend + -ing в данной модели.
4. Ключ: be. Mandative passive base be; should be также возможна в другой модели.
5. Ключ: are. Grounds plural определяет согласование.
6. Ключ: annotations. Не путать продукт и число людей.
7. Ключ: no. Описание возможности не факт местного применения.
8. Ключ: no. Запрос и выполнение — разные события.
9. Возможный образец (не единственный ответ): Условия достаточности общего текста и случаи для отдельных notes; ограниченная позиция.. Адресат и критерий ясны, не предрешён универсальный эффект.
10. Возможный образец (не единственный ответ): Записанные события; нормативная рекомендация; отдельный опыт/интерес, не три experiments.. Не объявлять ни один тип универсально достаточным или бесполезным.
11. Возможный образец (не единственный ответ): The log records annotations from volunteers; visitor understanding was not assessed.. Все неверные роли/единицы/эффект исправлены, не добавлен противоположный результат.
12. Возможный образец (не единственный ответ): Реальный аргумент о доступности/нагрузке/контексте и адресная коррекция предложения.. Не приписывать противнику безразличие к точности.
13. Возможный образец (не единственный ответ): The guide is available; however, access does not prove comprehension.. Другие нормативные границы допустимы, знаки оцениваются вручную.
14. Возможный образец (не единственный ответ): The guidance informs the proposal; its effectiveness here remains untested.. Сохраняется роль источника без вымышленной верификации.
15. Возможный образец (не единственный ответ): Summary и conclusion либо другие реальные места с зависимым claim.. Some не all и не доказанное исключение all; исправление по исходному scope.
16. Возможный образец (не единственный ответ): Вопрос/тезис, основания и ограничения, сравнение по критериям, альтернатива/ответ, вывод/пересмотр.. Порядок может отличаться, но три изолированные аннотации не синтез.
17. Возможный образец (не единственный ответ): Индивидуальный новый корпус с честными датами, URLs, авторами/организациями и прочитанными разделами.. Нужен интернет и действительное чтение; учебный archive case не выдавать за реальные публикации.
18. Возможный образец (не единственный ответ): Самостоятельный новый текст, а не модель Kestrel или прежний проект; допускается иной обоснованный результат.. Ручная рубрика письма: выполнение, организация, конструкции, лексика, регистр; требуется весь текст, без ограничения числа подходов.
19. Возможный образец (не единственный ответ): Второй полный текст и проверяемые пары до/после, не план будущей редакции.. Проверить scope, факты, аргумент и зависимости; отсутствие фактической второй версии остаётся пробелом.
20. Возможный образец (не единственный ответ): Самостоятельное резюме: вопрос, ответ, важное основание, сильное ограничение, следующий шаг.. Сверять с реальным телом, не с единственным модельным ключом.
21. Возможный образец (не единственный ответ): Конкретные пункты и причины, неизвестный внешний отзыв не фабрикуется.. Не выдавать принятую правку за одобрение всего текста и не переписывать исходный отзыв.
22. Возможный образец (не единственный ответ): Реальные соответствия и границы; короткое цитирование при необходимости, не копии страниц.. URL без прочтения не подтверждение; дата доступа не дата публикации.
23. Возможный образец (не единственный ответ): Функции фактических абзацев и причина перемещения/объединения/сохранения.. Не идеальный план вместо анализа существующего текста.
24. Возможный образец (не единственный ответ): Содержательная проверка по шкалам и новое отложенное применение; один продукт не все навыки CEFR.. Не присваивать общий уровень по числу слов, ссылок или заполненных полей.
25. Возможный образец (не единственный ответ): Фактический обмен и обоснованное принятие/отклонение замечания.. Текст не подтверждает oral fluency/pronunciation; нужно аудио.
26. Возможный образец (не единственный ответ): Связный ответ с реальной реакцией на уточнение.. Не заученный монолог и не выдуманная поддержка рецензента.
27. Возможный образец (не единственный ответ): Личное чтение, чужое сообщение и собственное наблюдение чётко разделены.. Не представлять проверенную ссылку проведённым исследованием.
28. Возможный образец (не единственный ответ): Адресная карта зависимости и проверка достоверности нового сведения.. Изменение версии не фабрикуется из одного обещания, тон/звук оцениваются по аудио.

</details>

### Вариант B

1. **Краткий ответ:** ___ the draft's clarity, the claim remains unsupported. (Although/Despite)
2. **Краткий ответ:** ___ the sources are relevant, they do not cover every claim. (Although/Despite)
3. **Краткий ответ:** We recommend ___ the distinction explicit. (make/making)
4. **Краткий ответ:** Выбранная base-модель: The reviewer suggests that the limit ___ stated. (be/is)
5. **Краткий ответ:** The implications of this correction ___ substantial. (is/are)
6. **Краткий ответ:** Новый кейс: 45 edits submitted by 28 contributors. Число 28 означает edits или contributors?
7. **Краткий ответ:** Инструкция объясняет optional mode; его запуск здесь не зафиксирован. Можно утверждать mode was used? yes/no.
8. **Краткий ответ:** Summary updated, bibliography incomplete. Весь revised project finished? yes/no.
9. **Развёрнутый ответ:** Команда сообщества решает, как вести glossary: общий редактор или distributed review. Дай открытый вопрос и ограниченный тезис.
10. **Развёрнутый ответ:** Есть edit log, словарная инструкция и мнение переводчика. Назови роль каждого для проекта.
11. **Развёрнутый ответ:** 45 edits / 28 contributors, understanding не измерено. Исправь Forty-five readers understood the new terms.
12. **Развёрнутый ответ:** Сформулируй сильный довод в пользу альтернативного governance glossary и ответ с уступкой.
13. **Развёрнутый ответ:** Исправь пунктуацию The glossary is public, nevertheless some entries remain unclear.
14. **Развёрнутый ответ:** Перепиши Our chosen guide confirms that distributed review works here, если источник объясняет метод, но не изучает эту группу.
15. **Развёрнутый ответ:** В источнике suggested, в заголовке adopted. Какие последствия исправления нужно проверить?
16. **Развёрнутый ответ:** Дай функциональную структуру полного текста о glossary, включая настоящее место для сильной альтернативы.
17. **Развёрнутый ответ:** Найди три НОВЫХ реально открытых документа для другого вопроса, не из тренировочного проекта и не из варианта A. Укажи происхождение конкретного claim в каждом.
18. **Развёрнутый ответ:** По новому вопросу и этим трём документам напиши самостоятельный проект 1000–1500 слов основного текста с альтернативой, оговорками и выводом; библиографию отдельно.
19. **Развёрнутый ответ:** Подготовь вторую ПОЛНУЮ версию этого проекта (1000–1500 слов), сохранив исходную. Приложи журнал трёх содержательных правок с причинами.
20. **Развёрнутый ответ:** Сделай 180–220 слов executive summary второй версии, точно передав ограничения.
21. **Развёрнутый ответ:** Напиши 100–140 слов ответа на отзыв: одна принятая правка, одна обсуждаемая и объяснение дальнейшего действия. Если отзыв учебный, назови это явно.
22. **Развёрнутый ответ:** Проверь две новые ссылки и один собственный inference в исправленном проекте. Что подтверждено источником, что обосновываешь ты?
23. **Развёрнутый ответ:** Покажи reverse outline новой версии и одно изменение связи между разделами.
24. **Развёрнутый ответ:** Почему заполненные 100% и большой word count не подтверждают устную защиту и отложенное применение?
25. **Устная работа:** Партнёр считает твою уступку слишком широкой. Уточни предмет возражения, проверь понимание и ответь.
26. **Устная работа:** Защити порядок двух разделов своего нового проекта; партнёр предлагает другой. Сравни последствия для читателя.
27. **Устная работа:** Партнёр приписывает тебе проверку фактического эффекта, хотя ты лишь сопоставил документы. Исправь это впечатление.
28. **Устная работа:** Новая реплика партнёра меняет адресата твоего executive summary. Объясни, что перепишешь и какие ограничения оставишь неизменными.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: Despite. После despite здесь именная группа.
2. Ключ: Although. Полное придаточное допускает although.
3. Ключ: making. Recommend + -ing; не recommend make в этой структуре.
4. Ключ: be. Mandative passive be, не факт уже указанного ограничения.
5. Ключ: are. Согласование по implications plural.
6. Ключ: contributors. Число людей не количество правок.
7. Ключ: no. Возможность и локальное действие различны.
8. Ключ: no. Одна завершённая часть не весь пакет.
9. Возможный образец (не единственный ответ): При каких условиях распределённая проверка поддерживает последовательность терминов; предварительное предложение.. Не предрешать, что один вариант всегда быстрый/точный.
10. Возможный образец (не единственный ответ): Записи активности, норма описания, экспертная интерпретация/контекст; не три измерения результата.. Оценить конкретный claim, не престиж ярлыка.
11. Возможный образец (не единственный ответ): Twenty-eight contributors submitted forty-five edits; reader understanding was not measured.. Исправить роли, единицы и неподтверждённый эффект без выдуманного провала.
12. Возможный образец (не единственный ответ): Например consistent criteria против bottleneck, с адресным изменением предложения.. Не приписывать одному участнику жажду контроля или другим безразличие.
13. Возможный образец (не единственный ответ): The glossary is public; nevertheless, some entries remain unclear.. Возможны другие нормативные решения; public не clear по определению.
14. Возможный образец (не единственный ответ): The guide informs the proposed method; the local outcome still needs assessment.. Не приписывать источнику локальное испытание.
15. Возможный образец (не единственный ответ): Тезис, summary, body и conclusion, где предложение было выдано за решение.. Не механическая замена всех слов без сверки статуса каждого события.
16. Возможный образец (не единственный ответ): Критерии и данные → сравнение вариантов → возражение/ответ → ограниченный вывод, с рамкой вопроса.. Не требовать одинаковых абзацев и фиксированного номера альтернативы.
17. Возможный образец (не единственный ответ): Реальные URLs, авторы/организации, честные даты/unknown и прочитанные места.. Нужны интернет и фактическая новизна; повтор знакомого корпуса не независимый контроль.
18. Возможный образец (не единственный ответ): Полный связный аргумент на новом корпусе с точной атрибуцией и собственным обоснованным ответом.. Ручная оценка всех пяти письменных шкал; план/summary не заменяют проект, можно сохранять незавершённым.
19. Возможный образец (не единственный ответ): Фактический полный revised text и точные пары до/после.. Оценить изменения аргумента и зависимых claims, не только орфографию или намерение переделать.
20. Возможный образец (не единственный ответ): Собственное краткое представление аргумента, основания и следующего шага.. Не усиливать body через guaranteed/proven/universal без основания.
21. Возможный образец (не единственный ответ): Конкретный ответ без ложной внешней оценки и без объявления обсуждаемого completed.. Сохранить исходный отзыв и отличить disagreement от непонимания.
22. Возможный образец (не единственный ответ): Точные фразы своего текста, места источника и явно собственная логическая связь.. Не объявлять всю рекомендацию цитатой источника или личным экспериментом.
23. Возможный образец (не единственный ответ): Фактические функции абзацев и объяснённый переход.. Не предъявлять план не написанного пока текста вместо результата.
24. Возможный образец (не единственный ответ): Другие навыки требуют новых фактических свидетельств, аудио/диалога и отсрочки.. Письмо само не оценивает произношение, не выдаётся общий CEFR.
25. Возможный образец (не единственный ответ): Реальная реакция с сохранённым scope и возможным пересмотром.. Без аудио устные параметры unknown, подготовленный текст не взаимодействие.
26. Возможный образец (не единственный ответ): Предметный обмен о зависимостях, допускающий несколько хороших структур.. Не оценивать по совпадению с модельным порядком.
27. Возможный образец (не единственный ответ): Ясное ограничение метода, сохранение ценности анализа.. Не обещать техническую/эмпирическую валидацию языковым текстом.
28. Возможный образец (не единственный ответ): Адаптация языка/порядка без усиления фактов; конкретный новый ответ.. Это редакторское взаимодействие, не автоматически завершённая большая защита C205.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Полный проект: аргумент, синтез и редактура](../appendices/project-writing.md)
- [Исследовательский проект: вопрос, источники и план](../appendices/project-inquiry.md)
- [Сопоставление источников и границы синтеза](../appendices/source-synthesis.md)
- [Аргументированное возражение: основание, уступка и пересмотр](../appendices/argument-rebuttal.md)
- [Редактура: от задачи до проверенной версии](../appendices/revision-workflow.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [[1] Google Engineering Practices: The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [[2] Google Engineering Practices: What to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html)
- [[3] GitHub Docs: Pull request reviews](https://docs.github.com/en/pull-requests/reference/pull-request-reviews)
- [Harvard College Writing Center: Tips for Organizing Your Essay](https://writingcenter.fas.harvard.edu/tips-organizing-your-essay)
- [Harvard College Writing Center: Counterargument](https://writingcenter.fas.harvard.edu/counterargument)
- [Cambridge Dictionary: abstract — noun and verb](https://dictionary.cambridge.org/dictionary/english/abstract)
- [Cambridge Dictionary: substantive — pronunciation](https://dictionary.cambridge.org/us/pronunciation/english/substantive)
- [Merriam-Webster: through line / throughline](https://www.merriam-webster.com/dictionary/throughline)

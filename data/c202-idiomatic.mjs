import {bank,exam,examples,goal} from './unit-tools.mjs';
import {styleSources} from './style-reference.mjs';
const id='C202-idiomatic';
const reading=`This fictional editorial case concerns a public letter from a neighbourhood arts centre. The centre is introducing an online booking form while keeping telephone bookings available. Its director, Nora, wants the letter to sound welcoming without making promises that the trial has not established. The first draft, written by a volunteer, calls the change a seamless transformation that will empower every visitor to unlock a frictionless experience. Nora asks a simple question: what will a visitor actually do differently?

The practical information is less dramatic but more useful. The new form will accept bookings from Monday. Telephone bookings will continue. During the trial, staff will review messages each afternoon, so a submitted request is not an immediate confirmation. The word seamless is not grammatically wrong, but it suggests an absence of difficulty that the centre has not demonstrated. Replacing it with revolutionary would make the problem worse, not improve the style. Nora wants the warmth of the original letter to survive without its unsupported certainty.

One editor proposes a version full of formal vocabulary. It asks visitors to utilise the new facility in order to facilitate the procurement of reservations. Another editor writes, "Give the form a go; booking will be plain sailing." The first version makes an ordinary action unnecessarily abstract for this audience. The second is friendlier, but its sailing idiom may not be familiar to all readers and still implies ease that has not been confirmed. A plain alternative says that visitors can try the form and contact staff if they need help.

The team then discusses a sentence about people who prefer the telephone. The phrase "visitors who stubbornly refuse to modernise" assigns them a negative attitude without evidence. Some may have limited access to a device; others may simply prefer speaking to a person. Nora changes the sentence to describe the choice rather than judge the chooser. She does not invent a reason for every visitor. Neutral wording can be more accurate as well as more considerate.

There is also a metaphor in the draft: "The new form is a bridge that will get the centre's engine moving." A reader can probably recover the general intention, but the images compete. The editor could keep a single bridge image if it genuinely explains the change, or remove the metaphor and state the action. The problem is not that all metaphor is forbidden in public information. It is that the metaphor is doing little explanatory work here and may distract from the booking instructions.

Finally, the volunteer worries that every personal phrase will be removed. Nora keeps the opening, "We look forward to welcoming you," and a short thank-you for visitors' patience. Those phrases suit the centre's relationship with its audience. She removes only the inflated claims and labels that interfere with the message. British spelling remains consistent in the centre's own prose, while quotations from a US partner retain their original spelling.

The final letter states the available channels, the Monday start and the afternoon review process. It explains that confirmation follows review, not submission. It remains friendly, but it no longer relies on unfamiliar idioms or claims of effortless success. Nora asks two readers to explain the process in their own words. If they still expect an immediate booking confirmation, another revision is needed. Natural language is not a collection of impressive expressions; it is language that fits the meaning, audience and situation.`;
const listening=`This is a fictional discussion about a welcome message for a community photography club. I am Owen, and I am reading the editor's notes rather than delivering the final welcome. We want to sound friendly, but the current draft uses several phrases that could mislead new members.

The draft says that joining will open the floodgates to limitless creative success. That sounds enthusiastic, but the club cannot guarantee anyone's success. It also mixes a dramatic image with a promise that has no clear measure. We can say that members will have opportunities to practise, share photographs and receive feedback. Those are activities the club actually offers.

A second sentence calls beginners who ask many questions needy. The notes do not support that judgement. New members are invited to ask questions, and some are learning unfamiliar equipment. We should describe the support available rather than attach a negative label to the people using it. This is a change in accuracy and tone, not just a search for a polite synonym.

The phrase "We will discuss about your goals" needs a grammatical correction: discuss takes the topic directly in this pattern. "We will talk about your goals" is another natural option. We should not remove about from talk merely because we removed it after discuss. Word patterns belong to particular expressions.

There is one idiom I would keep in the informal conversation: get the hang of it. It means learning how to do something through practice. For the public information sheet, I would explain the activity directly, because a new reader may not know the expression. Neither version is automatically better in every setting.

Finally, a member has written colour and another has written color. Both spellings are standard in their respective varieties. We will use British spelling consistently in the club's own document, without silently changing a quoted message. Please keep the welcoming voice, remove unsupported promises and check with a new reader whether the next action is clear.`;
export default {id,topic:'C202',title:'Естественный выбор: сочетаемость, оттенок, регистр и образ',prerequisites:['C201-aspect','C104-idioms'],references:['idiomatic-style','idioms-in-context','lexical-precision'],sources:styleSources,
goals:[goal('form','Выбирать сочетаемость и грамматическую модель слова','forms'),goal('choice','Различать смысл, оценку, регистр и образ','meaning'),goal('evidence','Сверять стилистическое обещание с исходными фактами','reading'),goal('message','Переписывать для адресата без потери голоса','production'),goal('sound','Передавать намеренный тон и проверять его восприятие','sounds')],
explanation:[
{title:'Idiomatic не значит насыщенный идиомами',text:'Idiomatic English — естественный для данной ситуации выбор слов и моделей. Короткое Please send the file может быть более естественным, чем Kindly facilitate the transmission of the aforementioned document, но второй тип слов не запрещён во всех жанрах. Idiom — отдельное устойчивое выражение с целостным значением, например get the hang of it. Текст не становится продвинутым от количества идиом. На уровне C202 задача — уметь выбрать выражение, объяснить эффект и отказаться от него, если оно мешает адресату. Не измеряй качество количеством редких слов или длиной предложения.'},
{title:'Сочетаемость проверяется сочетанием, а не переводом',text:'Heavy rain естественно обозначает сильный дождь; strong argument — убедительный довод. Нельзя переносить один английский эквивалент русского сильный на все существительные. Make a decision и take a decision оба употребляются, второй особенно характерен для UK и некоторых формальных контекстов; do a decision не базовая модель. Draw/reach a conclusion допустимы с разными глаголами. Поэтому свободное задание не должно объявлять один нормативный вариант ошибкой. Словарь и примеры употребления проверяют конкретное значение, жанр и окружение, а не только наличие перевода.'},
{title:'Грамматическая рамка — часть лексического знания',text:'Discuss the issue, но talk about the issue; explain the issue to someone, но tell someone about it. Provide someone with information и provide information to/for someone меняют построение, не требуют одной универсальной связки. Make the meaning explicit использует adjective как характеристику объекта; explain it explicitly — adverb при действии. Сокращая или заменяя глагол синонимом, перестрой всю рамку. We discussed about it в изучаемой модели исправляется, а We talked about it нет. Запоминай слово вместе с объектом, предлогом и типичной функцией.'},
{title:'Близкий перевод не делает слова взаимозаменяемыми',text:'Economical может описывать экономное расходование ресурсов; economic относится к экономике. Sensible — разумный, sensitive — чувствительный или деликатный по контексту. Concise значит ёмкий и без лишнего, brief — короткий; краткий ответ может быть неполным, а относительно длинное объяснение — concise для своей задачи. Assertive передаёт уверенное отстаивание позиции, aggressive часто добавляет враждебность; не меняй первое на второе ради разнообразия. При редактуре выпиши, что новое слово добавляет к факту: оценку, намерение, интенсивность, частоту или обещание.'},
{title:'Нейтральность не требует скрывать действительный вред',text:'Thrifty и stingy могут относиться к бережливому поведению с разной оценкой. Visitors who prefer phone booking описывает предпочтение; visitors who refuse to modernise приписывает сопротивление прогрессу. Если исходник не устанавливает мотив, редактор не должен его сочинять. Но нейтральный стиль не означает удаление подтверждённой ответственности, последствий или серьёзности проблемы. The form deleted saved requests точнее расплывчатого Some inconvenience occurred, если удаление установлено. Уважение к человеку и ясное описание действия совместимы.'},
{title:'Регистр выбирается по отношениям и задаче',text:'Give it a go может хорошо звучать в дружеском приглашении, а Try the form быть понятнее в публичной инструкции. We regret the delay уместно в формальном уведомлении, Sorry about the delay — в более личном контексте; оба не устраняют необходимость сказать, что делать дальше. Contractions не запрещены во всяком профессиональном письме. Пассив не автоматически официальный, а phrasal verb не автоматически неприличный: carry out a review бывает нейтральным рабочим сочетанием. Меняй степень дистанции, не превращая возможность в обещание или просьбу в приказ.'},
{title:'Plain English не означает примитивный смысл',text:'Use часто яснее utilise для обычного применения; help часто яснее facilitate, но facilitate может точно обозначать создание условий, а не выполнение действия за другого. Нельзя заменить термин familiar словом и потерять различие. Для неспециалиста сначала объясни необходимый термин, затем используй его последовательно. Authentication и authorisation не сводятся к одному login, если различие важно; длинное слово иногда точнее короткого. Спроси, что читатель должен понять и сделать. Упрощается выражение, а не факты, условия и пределы уверенности.'},
{title:'Метафора должна помогать выбранному объяснению',text:'The guide is a map может представить документ как средство ориентирования; это не буквальная карта пространства. Если затем тот же guide turns the engine of a bridge, образы начинают мешать восстановлению мысли. Mixed metaphor — вопрос ясности и стилистического эффекта, не всегда грамматическая ошибка. В юморе смешение может быть намеренным; в инструкции к действию важнее однозначность. Можно сохранить один образ, пояснить его или отказаться от образа совсем. Не объявляй любое соседство разных метафор ошибкой: оцени, действительно ли они конкурируют внутри одной связи.'},
{title:'Идиома приносит смысл и регистр целиком',text:'Cut corners обычно подразумевает сокращение усилий за счёт должного качества, не любую эффективную оптимизацию. A double-edged sword обозначает одновременно пользу и риск; это не просто трудность. Plain sailing, US также smooth sailing, описывает лёгкое продвижение, поэтому может стать неподтверждённым обещанием. Get the hang of something — освоиться с действием; не универсальная гарантия мастерства. В собственном тексте объясни, какой конкретный факт выражает идиома. Если нельзя назвать факт, возможно, выражение только украшает пустое место.'},
{title:'Варианты языка и единообразие документа',text:'Colour/color, organise/organize и другие нормативные варианты нельзя оценивать как знание против незнания без заданной нормы. Organize встречается и в UK, поэтому не своди всю орфографию к таблице z = US. Для одного документа можно выбрать house style и соблюдать его; цитаты обычно сохраняют исходное написание. Не подменяй стиль автора своим любимым акцентом или регистром. Указание UK IPA на карточке относится к образцу транскрипции, а не запрещает выбранный голос US. Неизвестный вариант нужно проверить, а не объявлять ошибкой по непривычности.'},
{title:'Корпус и словарь — свидетельство, не автоматический судья',text:'Ищи целое сочетание в авторитетном словаре, сверяй значение и пометы formal/informal/UK/US. Один найденный пример доказывает лишь наличие употребления, не универсальную уместность; отсутствие в одном словаре не доказывает невозможность. Поисковая частота не измеряет качество и может смешивать разные значения или ошибки. Не изобретай цитаты и источники. В спорном свободном ответе допустимы альтернативы с объяснением контекста. Закрытый ключ используется только там, где условие ограничило смысл и форму достаточно для надёжной проверки.'},
{title:'Тон проверяется адресатом',text:'Одинаковое That is helpful может звучать искренне, холодно или иронически. Письменный контекст ограничивает чтение, но не подтверждает голосовую реализацию. В устном задании сначала назови намерение, произнеси фразу и попроси слушателя описать эффект; затем при необходимости измени интонацию или слова. ASR показывает распознанный текст, не эмпатию и не произношение. В редакторском журнале сохраняй original → revision → reason: грамматика, сочетаемость, точность, регистр или предпочтение. Не выдавай личный вкус за обязательное правило для всех авторов.'}
],examples:examples(`Heavy rain delayed the meeting.~Сильный дождь задержал встречу.~Обычная коллокация.
A strong argument needs support.~Убедительный довод нуждается в обосновании.~Strong сочетается с argument.
We made a decision.~Мы приняли решение.~Нормативный вариант.
The board took a decision.~Совет принял решение.~Также нормативно, особенно UK/formal.
We reached a conclusion.~Мы пришли к выводу.~Reach a conclusion.
We drew a conclusion from the notes.~Мы сделали вывод по заметкам.~Draw a conclusion from.
We discussed the issue.~Мы обсудили вопрос.~Discuss без about в этой модели.
We talked about the issue.~Мы поговорили о вопросе.~Talk about сохраняет предлог.
Please explain the change to me.~Пожалуйста, объясните мне изменение.~Explain something to someone.
Make the distinction explicit.~Сформулируйте различие явно.~Adjective характеризует объект.
Explain the distinction explicitly.~Объясните различие явно.~Adverb характеризует действие.
This is an economical choice.~Это экономный вариант.~Расходование ресурсов.
The report covers economic policy.~Отчёт об экономической политике.~Отношение к экономике.
That is a sensible precaution.~Это разумная предосторожность.~Не sensitive.
This is a sensitive issue.~Это деликатный вопрос.~Контекст чувствительности.
The answer is brief but incomplete.~Ответ краткий, но неполный.~Краткость не достаточность.
She is assertive without being hostile.~Она уверенно отстаивает позицию без враждебности.~Не aggressive автоматически.
Some visitors prefer the telephone.~Некоторые посетители предпочитают телефон.~Не суждение о мотивах.
Give the form a go.~Попробуйте форму.~Неформальное приглашение.
Try the form and ask us for help.~Попробуйте форму и обратитесь за помощью.~Прямое понятное действие.
We regret the delay.~Мы сожалеем о задержке.~Более формальный тон.
Sorry about the delay.~Извините за задержку.~Более разговорный тон.
Use the search field.~Используйте поле поиска.~Редкое utilise не требуется.
The guide is a map of the process.~Руководство — карта процесса.~Образ ориентирования.
Do not cut corners on the review.~Не экономьте на качестве проверки.~Не любая экономия времени.
The change is a double-edged sword.~Изменение имеет и пользу, и риск.~Нужны конкретные стороны.
You will get the hang of it with practice.~С практикой вы освоитесь.~Не мгновенное mastery.
It was not all plain sailing.~Не всё шло гладко.~US также smooth sailing.`),
banks:[
bank(id,'forms','Сочетание, форма и оттенок','practice',`short~form~___ rain: обычное сочетание heavy/strong.~heavy~Heavy rain — обычная коллокация.
short~form~A ___ argument: strong/heavy.~strong~Слово выбирается вместе с существительным.
short~form~Make the message ___. (clear/clearly)~clear~Adjective характеризует объект после make.
short~form~Explain the message ___. (clear/clearly)~clearly~Adverb характеризует explain.
short~form~Leaves room ___ discussion. (for/of)~for~Leave room for something.
short~form~Explain the plan ___ the group. (to/for: адресат объяснения)~to~Explain something to someone.
sentence~form~Исправь только лишний предлог: We discussed about the schedule.~We discussed the schedule.~Discuss takes the topic directly.
sentence~form~Добавь нужный предлог: We talked the schedule.~We talked about the schedule.~Talk about в заданном значении.
short~choice~Policy of a national economy: economic/economical.~economic~Отношение к экономике, не экономность.
short~choice~Uses little fuel: economic/economical.~economical~Описано экономное расходование.
short~choice~A reasonable precaution: sensible/sensitive.~sensible~Разумность, не чувствительность.
short~choice~A delicate personal matter: sensible/sensitive.~sensitive~Деликатный вопрос в заданном контексте.
text~form~Дай два нормативных глагола с a decision вместо do.~Make a decision; take a decision.~Take допустим, особенно UK/formal.
text~form~Дай два нормативных глагола с a conclusion.~Reach a conclusion; draw a conclusion.~Оцени соответствие контексту, не один синоним.
text~form~Сохрани предлог при замене discuss на talk.~We discussed the problem → We talked about the problem.~Перестраивается рамка, не одно слово.
text~message~Исправь We explained them the rule в учебной нейтральной модели.~We explained the rule to them.~Адресат вводится через to.`),
bank(id,'meaning','Уместность, оценка и образ','practice',`short~choice~Idiomatic обязательно означает много idioms? (yes/no)~no~Естественность шире небуквальных выражений.
short~choice~Brief гарантирует complete? (yes/no)~no~Краткость не полнота ответа.
short~choice~Cut corners — нейтральная эффективность без риска качества? (yes/no)~no~Идиома обычно подразумевает ущерб качеству.
short~choice~Colour и color оба нормативны? (yes/no)~yes~Стандартные варианты разных норм.
text~choice~Почему stubbornly refuse может искажать prefer phone?~Добавляет негативную оценку и мотив, которых исходник не установил.~Не просто более выразительный синоним.
text~choice~Assertive → aggressive: что проверить?~Не добавилась ли враждебность вместо уверенного отстаивания позиции.~Контекст определяет оценку.
text~choice~Seamless transition при unknown interruptions: проблема?~Слово предполагает гладкость, которая не подтверждена.~Грамматическая правильность не точность обещания.
text~choice~Когда utilise нельзя автоматически объявлять ошибкой?~Это нормативное слово; выбор зависит от точности, аудитории и жанра.~Не абсолютный запрет формальной лексики.
text~choice~Дай literal rewrite для get the hang of the camera controls.~Learn how to use the camera controls through practice.~Не обещать полное профессиональное мастерство.
text~choice~Объясни double-edged sword с конкретной пользой и риском.~More automation can save routine effort but make unusual errors harder to notice.~Две стороны, не просто опасность.
text~choice~Our plan is a bridge that fuels the engine: как исправить образ?~The plan connects the two stages; либо назвать конкретные действия без метафоры.~Не вся метафора запрещена.
text~choice~Нужно ли любой mixed metaphor считать grammar error?~Нет, это может быть стилистический риск или намеренный юмор.~Различать форму и эффект.
text~choice~Письмо коллегам: contractions обязательно запрещены?~Нет, допустимость зависит от жанра и принятого тона.~Не единая формальность для всей работы.
text~evidence~Один пример в поиске делает сочетание подходящим всем?~Нет, нужно проверить значение, источник и регистр.~Частота не универсальное качество.
text~choice~Organize обязательно US-only?~Нет, z-вариант также употребляется в британских нормах.~Не ложное правило z против s.
text~message~Дай нейтральный вариант needy beginners без выдуманных мотивов.~New members who ask for support.~Не стирать реальную нужду в помощи.`),
bank(id,'sounds','Тон, идиома и понятность адресату','pronunciation',`speech~sound~Произнеси That is helpful искренне; партнёр описывает тон.~That is helpful. Thank you for clarifying the process.~Нужны звук и восприятие слушателя.
speech~sound~Теперь та же фраза с иронией в явно вымышленной сцене; обсуди риск.~That is helpful может звучать иронически; затем поясни настоящий запрос словами.~Не приписывать тон по транскрипту.
speech~message~Замени plain sailing понятным объяснением без гарантии.~The process may become easier, but we need to test it.~Сохранить uncertainty.
speech~sound~Прочти economical / economic в двух предложениях.~An economical car. An economic forecast.~Различить значение и ударение по аудио.
speech~message~Скажи одну просьбу другу и новому партнёру; спроси о восприятии.~Could you check this? I would appreciate your comments on this draft.~Одинаковый запрос, разная дистанция.
speech~sound~Противопоставь make it CLEAR и explain it CLEARLY.~Please make the instruction clear and explain it clearly.~Разборчивость окончаний не проверять по ASR.
speech~message~Партнёр не знает get the hang of it. Объясни и запроси пересказ.~It means learning how to do it through practice. How would you say that in your own words?~Реальное взаимодействие.
speech~sound~Произнеси apology без обвинительного ударения на YOU.~I am sorry about the delay. Here is what we can do next.~Тон и следующий шаг отдельно.
speech~message~Обсуди спорное assertive/aggressive по поведению персонажа.~Which action suggests hostility, rather than simply a clear disagreement?~Не ставить ярлык без основания.
speech~sound~Передай одну мысль нейтрально и тепло, сохрани факты.~Phone booking remains available. You are welcome to book by phone if you prefer.~Слушатель проверяет факты и эффект.`),
bank(id,'reading','Чтение: письмо центра искусств','reading',`short~evidence~Имя director?~Nora~Имя директора указано в начале.
short~evidence~С какого дня form принимает bookings?~Monday~Начало работы формы названо явно.
short~evidence~Messages reviewed morning/afternoon?~afternoon~Проверка сообщений каждый день после полудня.
short~evidence~Telephone booking прекращается? (yes/no)~no~Телефонные заявки продолжаются.
text~choice~Почему seamless не подходит именно здесь?~Отсутствие трудностей не установлено испытанием.~Не объявлять слово неграмматичным.
text~evidence~Submission равно confirmed booking?~Нет, подтверждение следует после проверки заявки.~Сохранять разные стадии.
text~choice~Чем обе крайние редакции мешают адресату?~Одна чрезмерно абстрактна, другая содержит незнакомую идиому и обещание лёгкости.~Не формальное всегда плохо, разговорное всегда хорошо.
text~choice~Что добавляет refuse to modernise к предпочтению телефона?~Неустановленный мотив и негативную оценку.~Не описывать всех как неспособных к технологиям.
text~choice~Как можно исправить bridge/engine, не запрещая образы?~Оставить один полезный образ или назвать действие прямо.~Проверять пояснительную функцию.
text~evidence~Какие личные фразы Nora сохраняет?~Приветствие We look forward to welcoming you и благодарность за терпение.~Голос автора не удаляется целиком.
text~choice~Как обрабатывают spelling в quotation US partner?~Сохраняют исходное написание цитаты.~House style для собственного текста отдельно.
text~message~Какое ошибочное ожидание читателя потребует ещё правки?~Ожидание немедленного подтверждения после отправки формы.~Проверка через пересказ действия.`,reading),
bank(id,'listening','Аудирование: приветствие фотоклуба','listening',`short~evidence~Имя speaker?~Owen~Owen читает редакторские заметки.
short~evidence~Это final welcome? (yes/no)~no~Это обсуждение правок, не окончательный текст.
short~form~После discuss в данном исправлении about остаётся? (yes/no)~no~Discuss the goals без about.
short~evidence~House spelling документа British/American?~British~Выбран британский вариант собственного текста.
text~choice~Почему limitless success нельзя оставить как факт?~Клуб не может гарантировать успех каждого.~Убрать неподтверждённое обещание.
text~evidence~Какие три возможности клуб действительно предлагает?~Practice, sharing photographs and receiving feedback.~Услуги не обещание результата ученика.
text~choice~Почему needy beginners inaccurate?~Задавание вопросов не устанавливает негативное личностное качество.~Поддержка приглашена самим клубом.
text~form~Почему about после talk не удаляют?~У talk about другая нормативная рамка, чем у discuss.~Не переносить исправление механически.
text~choice~Что значит get the hang of it?~Освоиться с действием через практику.~Не буквальное подвешивание.
text~choice~Где speaker сохраняет idiom и где объясняет прямо?~В неформальном разговоре сохраняет; в public sheet объясняет.~Выбор по адресату.
text~choice~Color можно исправить как universally wrong?~Нет, это нормативный US вариант.~House style не единственная правильная орфография.
text~message~Сформулируй три главных редакторских приоритета записи.~Сохранить welcoming voice, убрать unsupported promises, проверить ясность next action.~Не только spelling.`,listening),
bank(id,'production','Письмо: голос без ложных обещаний','writing',`text~message~Перепиши seamless success: trial ongoing, results unknown, help available.~The trial is continuing, and staff can help you use the form. Its results have not yet been confirmed.~Не обещать отсутствие проблем.
text~message~Дай formal и friendly просьбу проверить заголовок.~Please review the heading. Could you have a look at the heading?~Сохранить задачу, не добавлять срок.
text~message~Назови конкретную пользу и риск в своём double-edged sword.~A shared calendar improves visibility but may expose details if permissions are too broad.~Контекст и обе стороны обязательны.
text~message~Перепиши visitors stubbornly refuse email без догадки о мотивах.~Some visitors prefer to receive information by phone.~Не приписать причину без данных.
text~message~Напиши 220–280 слов: welcoming notice. Вымышленный art club, form starts Tuesday, phone stays, requests reviewed every evening, confirmation later, help available. Без seamless/guaranteed.~We look forward to welcoming you to our next series of workshops. From Tuesday, you will be able to request a place using our new booking form. Telephone booking will remain available, so please use whichever of these channels suits you. You do not need to change to the form if you prefer speaking to a member of the team. A submitted request is not yet a confirmed booking. We will review requests each evening and send confirmation after that review. Please wait for confirmation before treating a place as reserved. The new form is being introduced as a trial, and we would welcome comments about anything that is unclear or difficult to use. If you would like help, contact the club and a member of staff can explain the process. We are not assuming that everyone has the same experience with online forms, and we do not want a change in booking arrangements to prevent anyone from asking about a workshop. The purpose of the trial is to offer another way to contact us, not to remove the existing telephone option. We will use the feedback to decide what needs improving. Thank you for your patience while we introduce the new process. We hope the additional option will be useful, but we will check how it works in practice before making stronger claims. We look forward to seeing your work and hearing your ideas at the club.~220–280 слов; channels/date/review/confirmation/help, уважительный голос и честная оговорка.
text~message~Напиши 100–140 слов редакторского объяснения к своему notice: что сохранено, что исключено, почему.~I kept the welcoming opening because it suits the club's relationship with its members. I replaced promises of seamless success with a description of what the form actually allows visitors to do. The notice now states that telephone booking remains available and that a request becomes a booking only after review and confirmation. I avoided labels for people who prefer the telephone because their motives are not established. The invitation to ask for help remains direct and respectful. I also kept uncertainty about the trial's results instead of presenting an expected benefit as a proven outcome. These changes make the process clearer without turning the club's voice into an impersonal set of commands.~100–140 слов; минимум четыре конкретных изменения, не просто стало лучше.
speech~message~Объясни одну процедуру другу, клиенту и публике; партнёр сравнивает смысл.~Три версии сохраняют действие, условие и степень уверенности, меняя дистанцию и терминологию.~Нужно реальное восприятие адресатом.
speech~message~Партнёр считает utilise всегда ошибкой. Обсуди допустимость и удобство.~It is a valid word; the question is whether it adds precision for this audience.~Не объявлять предпочтение правилом.
text~message~Составь одно полезное образное объяснение и буквальную версию.~The checklist is a map through the process. It shows the steps and the decisions at each stage.~Образ не добавляет гарантию прохождения.
text~message~Дай пример, где нейтральная редакция скрыла ответственность, и восстанови факт.~Some issues occurred → The update deleted saved requests, if that deletion is established.~Не смягчать подтверждённый ущерб до пустоты.
text~message~Выбери house style и объясни, что делать с quotation другого варианта.~Use a consistent house style in the document's own prose and preserve the quotation accurately.~Нормативные варианты не ошибки знаний.
text~message~Проверь 5 сочетаний своего текста: запиши phrase, meaning, register и решение.~Для каждого сочетания дать контекст и источник проверки при необходимости, не выдумывать цитату.~Самостоятельная проверка, не список красивых слов.`),
bank(id,'review','Повторение выбора и уместности','review',`short~form~Make the wording ___. (precise/precisely)~precise~Adjective после make + object.
short~form~Describe the change ___. (precise/precisely)~precisely~Adverb при describe.
text~choice~Brief и concise: в чём разница?~Brief о краткости, concise об отсутствии лишнего при передаче нужного смысла.~Длина не единственный критерий.
text~form~Дай нормативный вариант take a decision и не объявляй UK ошибкой.~The committee took a decision after discussion.~Контекст формального решения.
text~choice~Get the hang of it гарантирует экспертность?~Нет, означает освоиться с действием, не любое mastery.~Границы идиомы сохраняются.
text~choice~Metaphor плохо во всех инструкциях?~Нет, полезность зависит от ясности; конкретные действия всё равно нужны.~Не абсолютный запрет образов.
text~evidence~Найденное online сочетание всегда надёжная норма?~Нет, проверь источник, значение и регистр.~Один пример не универсальное правило.
text~choice~Слово refuse может быть точным?~Да, если отказ действительно установлен; нельзя добавлять его вместо неизвестного предпочтения.~Не запрещать негативные факты.
speech~sound~Через 7 дней скажи новую просьбу нейтрально и тепло; слушатель сравнивает.~Could you check the date? I would really appreciate your help checking the date.~Тон и факты проверяются раздельно.
text~message~Через 7 дней отредактируй новый paragraph с metaphor и connotation.~Сохрани original/revision/reasons, не вставляй те же заученные фразы.~Новый контекст проверяет перенос.
text~message~Возьми критику преподавателя и раздели error/preference/context.~Объясни хотя бы одно допустимое альтернативное решение.~Не считать все вкусовые правки обязательными.
text~evidence~Один письменный transcript подтверждает эмпатичный голос?~Нет, нужны аудио и восприятие собеседника.~Текст не слышимое исполнение.`)
],tests:[
exam(id,'a',`short~form~___ evidence: убедительные свидетельства, strong/tall?~strong~Strong evidence — обычное сочетание в заданном смысле.
short~form~Make the instructions ___. (accessible/accessibly)~accessible~Прилагательное характеризует объект.
short~form~Explain the decision ___ the visitors. (to/about: адресат)~to~Explain something to someone.
sentence~form~Исправь: We discussed about the exhibition.~We discussed the exhibition.~Discuss без about перед темой.
short~choice~Reasonable suggestion: sensible/sensitive.~sensible~Разумный, не деликатный.
short~choice~Cost-efficient use of fuel: economic/economical.~economical~Речь об экономном расходовании.
text~choice~Take a decision обязательно ошибка вместо make?~Нет, нормативный вариант, особенно UK/formal.~Допустимость не один любимый ключ.
text~choice~Критически оцени guaranteed effortless progress при ongoing trial.~Обещает неподтверждённую лёгкость и результат; описать доступные действия и unknown outcome.~Не стилистическая косметика.
text~choice~Нейтрализуй old-fashioned people refuse the form без известного отказа.~Some people prefer another booking channel.~Не приписывать возраст, мотив и отказ.
text~message~Напиши 100–140 слов: workshop registration opens Friday; phone stays; requests reviewed next morning; help available; no immediate confirmation.~Registration for the workshop opens on Friday. You can submit a request through the new form or continue to book by phone. We will review requests the following morning, so submitting the form does not immediately confirm a place. Please wait for confirmation before treating your request as a booking. If any part of the process is unclear, contact the team for help. We welcome comments on the trial and will use them to improve the instructions. The additional channel is intended to offer another choice, not to replace telephone support. Thank you for your patience while we check how the new process works in practice.~100–140 слов; все факты и тёплый тон без обещания успеха.
speech~sound~Скажи Thanks for pointing that out искренне; слушатель объясняет эффект.~Thanks for pointing that out. I will make the next step clearer.~Не оцени тон по тексту.
speech~message~Партнёр не понимает double-edged sword. Объясни свою пользу и риск.~It can help in one respect and create a problem in another; here are the two effects.~Нужны конкретные стороны и ответ слушателя.
text~choice~Bridge that ignites our engine: что можно сделать?~Оставить один полезный образ или назвать действия прямо.~Не смешивать грамматическую ошибку со стилевым риском.
text~choice~Сохранить ли color внутри точной US quotation при UK prose?~Обычно да, цитата сохраняет исходное написание.~House style не повод исказить quotation.
text~choice~Assertive → aggressive: какое новое значение рискованно?~Враждебность или нападение вместо уверенного отстаивания позиции.~Нужны факты поведения.
text~choice~Почему concise не равно remove all detail?~Необходимые детали остаются; удаляют лишнее относительно задачи.~Полнота сохраняется.
text~form~Замени discuss на talk в We discuss the options.~We talk about the options.~Рамка перестраивается вместе с глаголом.
text~choice~Plain sailing у незнакомой аудитории: решение?~Объяснить прямо и не обещать лёгкость без оснований.~Зависит от контекста и цели.
text~evidence~Частота слов в поиске доказывает их уместность?~Нет, значения и жанры смешиваются; нужны качественные примеры.~Не автоматический судья.
text~message~Назови три категории объяснения правки.~Грамматика, точность смысла и уместность для адресата; можно добавить регистр и стиль.~Не только личное нравится.`),
exam(id,'b',`short~form~___ rain affected the opening. (heavy/strong)~heavy~Нормативное сочетание с rain.
short~form~State the condition ___. (explicit/explicitly)~explicitly~Наречие характеризует действие state.
short~form~Leave room ___ questions. (for/of)~for~Leave room for something.
sentence~form~Исправь: Please explain us the procedure.~Please explain the procedure to us.~Объект объяснения и адресат с to.
short~choice~Delicate personal topic: sensible/sensitive.~sensitive~Контекст деликатного вопроса.
short~choice~National financial policy: economic/economical.~economic~Относится к экономике.
text~choice~Draw/reach a conclusion: только один нормативен?~Нет, оба употребляются; контекст определяет выбор.~Не ложный единственный синоним.
text~choice~Guaranteed intuitive service при непроверенной форме: риск?~Неподтверждённая гарантия удобства для всех.~Ясный смысл важнее рекламного звучания.
text~choice~Убери ярлык demanding newcomers, известно только asked for guidance.~New members who asked for guidance.~Не выдумывать чрезмерность требований.
text~message~Напиши 100–140 слов: club form starts Wednesday, email stays, review each evening, confirmation follows, trial feedback wanted.~Our club's new form will be available from Wednesday, and email will remain an option. Please choose the channel that suits you. We review requests each evening and send confirmation after that review. A submitted request should not yet be treated as a confirmed place. The form is being introduced as a trial, and we would welcome comments about anything that is unclear or difficult to use. We will use that feedback to improve the process rather than assume that it already works equally well for everyone. Thank you for helping us check the new arrangement. We look forward to receiving your requests and hearing your suggestions.~100–140 слов; дата, каналы, стадия подтверждения и честный trial.
speech~sound~Произнеси I appreciate your question тепло, затем проверь восприятие.~I appreciate your question. Let me explain that step more clearly.~Аудио и слушатель обязательны.
speech~message~Переведи get the hang of it в буквальное объяснение для партнёра.~You will learn how to do it through practice; tell me which step remains unclear.~Ответ партнёра должен быть учтён.
text~choice~Mixed metaphor всегда запрещена даже в намеренном юморе?~Нет, оцени эффект и жанр; здесь важна ясность инструкции.~Не универсальная grammar error.
text~choice~Organize только US?~Нет, этот вариант также используется в UK.~Не формула z всегда американское.
text~choice~Thrifty/stingy: что меняется кроме темы денег?~Оценка бережливости: обычно положительная против неодобрительной.~Не точные нейтральные синонимы.
text~choice~Можно ли убрать established deletion ради более доброго тона?~Нет, нужно уважительно, но ясно сообщить подтверждённое удаление.~Не скрывать ответственность эвфемизмом.
text~form~Дай естественную модель provide с someone и information.~Provide someone with information.~Другие нормативные рамки возможны при перестройке.
text~choice~Use vs utilise: всегда ли второе неверно?~Нет, выбирают по точности и аудитории; редкость не преимущество и не запрет.~Стилистическое решение не ошибка формы.
text~evidence~Один неизвестный сайт достаточен для нормативного запрета выражения?~Нет, нужна проверка значения и надёжного употребления.~Не выдумывать правило по одному примеру.
text~message~Что хранить вместе с редакцией авторского голоса?~Исходный текст, исправленную версию и объяснения существенных изменений.~История позволяет обсуждать выбор.`)
]};

import {bank,exam,examples,goal} from './unit-tools.mjs';
import {reportingSources} from './reporting-reference.mjs';
const id='B104-questions';
export default {id,topic:'B104',title:'Косвенные вопросы, просьбы и предложения: порядок слов и смысл',prerequisites:['B104-statements'],references:['questions-tags','reported-speech'],sources:reportingSources,
goals:[goal('order','Строить вложенный вопрос без внутренней инверсии','forms'),goal('request','Передавать просьбы, указания, предложения и отрицания','requests'),goal('evidence','Отличать вопрос от ответа и просьбу от согласия','meaning'),goal('message','Уточнять условия и писать точный протокол диалога','production'),goal('sound','Произносить вежливые вопросы и сохранять смысловые границы','sounds')],
explanation:[
{title:'Два уровня одного предложения',text:'Where is the exit? — прямой вопрос с is перед the exit. Could you tell me where the exit is? содержит внешнюю просьбу Could you tell me…? и внутренний вопрос о месте: where + the exit + is. Внутри используется обычный порядок subject + verb, поэтому не where is the exit после tell me. Это не означает, что всё предложение стало утверждением: внешняя часть всё ещё вопрос, и в конце нужен вопросительный знак. Та же внутренняя структура встречается в I know where the exit is и She asked where the exit was; внешняя часть задаёт разные цели.'},
{title:'Что происходит с do/does/did',text:'When does the shop open? → Do you know when the shop opens? Внутреннее вопросительное does убирается, а open получает -s для shop. What did she buy? → I asked what she bought при сохранённом Past; при выбранном полном backshift возможно what she had bought. Нельзя оставить и did, и Past в обычном вложенном вопросе: what she did bought. Но удаляется именно инверсия/вопросительное do, не всякая форма do: I know why she didn’t reply содержит нужное отрицательное didn’t. Do you know… снаружи тоже остаётся: внешняя часть сама является вопросом.'},
{title:'Yes/no: if или whether',text:'У прямого Are you ready? нет wh-слова, поэтому при пересказе вводим if или whether: He asked if I was ready / He asked whether I was ready. Здесь if означает «ли», а не условие «если»; вопрос не утверждает ни готовность, ни неготовность. I wonder if she will come — нормативно: правило будущего после условного if здесь неприменимо. В обычном конечном yes/no-вопросе if и whether часто взаимозаменяемы. Перед to-infinitive используем whether: I don’t know whether to wait, не if to wait. Whether также удобно, когда явно названы альтернативы; не выбирай его по русскому вопросу к одному слову.'},
{title:'Wh-слово сохраняет информационную цель',text:'“Where do you live?” → She asked where I lived при backshift: where не заменяется на if. “When will it start?” → He asked when it would start. Сохрани, о чём спрашивали: место, время, причину, автора или предмет действия. Who called? спрашивает о подлежащем, поэтому He asked who called уже имеет правильный порядок. Who did you call? спрашивает об адресате, и в He asked who I called необходимо I. Если удалить I, изменится вопрос: кто звонил вместо кому я звонил. С who the person was who — дополнение после связки, там нужен обычный внутренний порядок.'},
{title:'Текущая вежливая просьба — не обязательно прошлый пересказ',text:'Could you tell me where the bus stops? спрашивает о нынешней остановке. Could делает внешнюю просьбу мягче, но не требует Past stops → stopped внутри. В She asked where the bus stopped прошлый asked может вызывать backshift. Если речь о вчерашней остановке, Past внутри текущей просьбы тоже нормален: Could you tell me where the bus stopped yesterday? Сначала выясни время искомого факта и тип внешней части. Не применять таблицу согласования времён ко всем предложениям с could только потому, что форма выглядит прошедшей.'},
{title:'Просьба и вопрос о способности',text:'“Can you send me the file, please?” обычно является просьбой отправить, а не проверкой навыка работы с файлами. Пересказ She asked me to send her the file передаёт речевую цель: ask + recipient + to-infinitive. Если действительно проверяли способность — например, из-за отсутствия доступа, — She asked whether I could send it может быть точнее. Контекст определяет выбор. He told us to wait сообщает указание, а не yes/no-вопрос. Отрицательная просьба: She asked me not to interrupt, где not стоит перед to; не asked me don’t interrupt и не asked me to not без необходимости в базовой модели.'},
{title:'Предложить свою помощь и предложить идею — разные модели',text:'“Shall I carry the box?” → She offered to carry the box: offer + to обозначает собственное действие говорящего. “Let’s check the date” → He suggested checking the date или suggested that we should check the date; это идея для совместного действия. Не suggested me to check в данной нормативной модели. Возможна that-clause без should: He suggested that we check the date, особенно привычная в US и формальных контекстах; не исправляй её только по британскому образцу. “I’ll send it” может быть обещанием, предложением или просто прогнозом: не назначай reporting verb без ситуации.'},
{title:'Вопрос, ответ, согласие и выполнение',text:'She asked whether the room was free не сообщает, свободна ли комната. She asked me to book it не сообщает, что я согласился или забронировал. He offered to help не доказывает принятие помощи; He suggested waiting не делает ожидание общим решением. В протоколе веди отдельные строки: question asked, answer given, request made, response, action completed. Если ответ отрицательный, сохрани его: She asked whether I was available, and I said I wasn’t. Если ответа нет, так и напиши, не превращая молчание в отказ или согласие. Уточнение пользователя — нормальная часть общения, не ошибка уровня.'},
{title:'Вежливость создаётся не только словом could',text:'Could you… с резким тоном может звучать как упрёк. Объясни цель, задай конкретный вопрос и оставь время на ответ: Could you confirm which entrance we should use? We want to avoid disturbing the class. Вместо цепочки расплывчатых Please clarify everything уточняй отдельно дату, место, объём и ответственного. Если не расслышал название, предложи ограниченный выбор: Did you say Lisbon or London? Затем повтори договорённость своими словами. Не нужно делать каждую реплику длинной: в понятном контексте короткий прямой вопрос может быть уместен, а сложная косвенная форма — лишь один инструмент.'},
{title:'Как проверять форму и разговор',text:'Найди внешний глагол и границу внутренней части. Проверь wh/if/whether, затем подлежащее и сказуемое внутри; восстанови окончание -s или Past после снятия do-support. Отдельно проверь местоимения, время, not и смысл просьбы. В письме She asked where it was заканчивается точкой, а Could you tell me where it is? — вопросительным знаком. При устной работе партнёр отвечает на вопрос, задаёт неожиданный встречный и проверяет твой пересказ. Не заменяй это чтением шаблона. Интонация, паузы и разборчивость оцениваются по реальному аудио, а письменный протокол — отдельно по содержанию.'}
],
examples:examples(`Where is the meeting room?~Где комната для встречи?~Прямая инверсия is перед подлежащим.
Could you tell me where the meeting room is?~Не подскажете, где комната для встречи?~Внутри subject + is.
I know where the meeting room is.~Я знаю, где комната для встречи.~Внешняя часть — утверждение.
She asked where the meeting room was.~Она спросила, где комната для встречи.~Пересказ с backshift и точкой.
When does the library open?~Когда открывается библиотека?~Прямой вопрос с does.
Do you know when the library opens?~Вы знаете, когда открывается библиотека?~Внутри opens с -s, без does.
He asked what I bought.~Он спросил, что я купил.~Порядок утверждения, Past может сохраняться.
He asked what I had bought.~Он спросил, что я купил.~Полный сдвиг в Past Perfect тоже возможен.
I know why she didn’t reply.~Я знаю, почему она не ответила.~Отрицательное didn’t сохраняется.
He asked if I was ready.~Он спросил, готов ли я.~If = ли, не условие.
He asked whether I was ready.~Он спросил, готов ли я.~Whether допустимо вместо if.
I wonder if she will join us.~Интересно, присоединится ли она.~Will допустим после if = whether.
I don’t know whether to wait.~Я не знаю, ждать ли.~Whether перед to-infinitive.
She asked when the train would leave.~Она спросила, когда отправится поезд.~Wh + subject + would + base.
He asked who called.~Он спросил, кто звонил.~Who — подлежащее.
He asked who I called.~Он спросил, кому я звонил.~Who — объект; I нельзя потерять.
Could you tell me what this means?~Можете сказать, что это значит?~Could не требует прошлого means.
Could you tell me what happened yesterday?~Можете рассказать, что произошло вчера?~Past задан событием, не вежливым could.
She asked me to wait.~Она попросила меня подождать.~Ask + адресат + to.
She asked me not to leave.~Она попросила меня не уходить.~В отрицательной просьбе выбранная модель — ask someone not to do something.
He told us to use the side entrance.~Он сказал нам использовать боковой вход.~Передача указания, не факт входа.
She offered to carry the bag.~Она предложила понести сумку.~Своя помощь с offer + to.
He suggested checking the address.~Он предложил проверить адрес.~Идея с suggest + -ing.
He suggested that we should check the address.~Он предложил нам проверить адрес.~That-clause с should.
He suggested that we check the address.~Он предложил нам проверить адрес.~Нормативная that-clause без should.
She asked whether I could print it.~Она спросила, могу ли я распечатать это.~Способность/доступ по контексту.
She asked me to print it.~Она попросила меня распечатать это.~Запрос действия.
She asked, but nobody answered.~Она спросила, но никто не ответил.~Вопрос не доказывает ответ.
He asked me to book a room, but I haven’t agreed yet.~Он попросил меня забронировать комнату, но я ещё не согласился.~Просьба не равна принятию задачи.
Could you confirm which entrance we should use and whether it is accessible without steps?~Уточните, какой вход использовать и можно ли пройти без ступенек.~Две внутренние части сохраняют обычный порядок.`),
banks:[
bank(id,'forms','Порядок слов во вложенных вопросах','practice',`short~order~Could you tell me where ___? (the desk is/is the desk)~the desk is~Внутри обычный порядок subject + verb.
short~order~Do you know when the shop ___? (open; Present Simple)~opens~Внутреннее does убрано, -s у opens.
short~order~He asked ___ I was ready. Введи if или whether.~if|whether~Оба вводят обычный yes/no-вопрос.
short~order~I don’t know ___ to stay. (if/whether)~whether~Перед to-infinitive используется whether.
short~order~Could you tell me what this ___? (mean; значение сейчас)~means~Вежливое could не требует прошлого внутри.
short~order~Backshift: “Where do you live?” → She asked where I ___. (live)~lived~Порядок утверждения и заданный сдвиг.
short~order~Backshift: “When will it end?” → He asked when it ___ end.~would~Will → would, subject перед modal.
short~order~Backshift: “Have you paid?” → She asked if I ___ paid.~had~Perfect при заданном сдвиге.
sentence~order~Исправь: Could you tell me where is the station?~Could you tell me where the station is?~Внутренняя часть без инверсии.
sentence~order~Исправь: Do you know when does the museum close?~Do you know when the museum closes?~Does внутри убирается, closes получает -s.
sentence~order~Исправь: I wonder why did she leave. Сохрани Past Simple.~I wonder why she left.~Past Simple без вопросительного did.
sentence~order~Исправь: I don’t know why she not called. Сохрани отрицание и Past Simple.~I don't know why she didn't call.|I do not know why she did not call.~Отрицательный do-support сохраняется.
sentence~order~Из Where is he? сделай текущую просьбу с Could you tell me…~Could you tell me where he is?~Внешний вопрос, внутренний порядок утверждения.
sentence~order~Исправь: She asked where was the key. Сохрани was.~She asked where the key was.~Reported question — утверждение о вопросе.
sentence~order~Исправь: He asked who did called. Сохрани Past Simple.~He asked who called.~Who — подлежащее, did не нужен.
sentence~order~Перескажи Who did you call? с He asked who I… и Past Simple.~He asked who I called.~I необходимо для роли звонящего.
short~order~I wonder if she ___ come tomorrow. (will/would; текущий открытый вопрос о будущем)~will~If = whether, а не условие.
text~order~Почему Could you tell me where it is? заканчивается ?, а She asked where it was. — точкой?~Первое — текущий вопрос целиком, второе — утверждение о прошлом вопросе.~Пунктуация по внешней коммуникативной цели.
text~order~Дай два допустимых пересказа “What did you buy?” с asked: Past Simple и полный backshift.~She asked what I bought. She asked what I had bought.~Оба допустимы по контексту; не принуждать к одному вне задания.
text~order~Сравни He asked who called и He asked who I called.~Первое спрашивает о звонящем, второе об адресате моего звонка.~Роли не теряются при перестройке.`,'','Порядок слов'),
bank(id,'requests','Просьбы, указания, помощь и идеи','practice',`short~request~She asked me ___ wait. (to/без слова)~to~Ask + адресат + to-infinitive.
short~request~He told us ___ leave. (to/без слова)~to~Tell + адресат + to-infinitive указания.
short~request~She asked me ___ to interrupt. (отрицание)~not~Not перед to в базовой отрицательной просьбе.
short~request~He offered ___ the bag. (carry; с to если нужно)~to carry~Offer to сделать самому.
short~request~She suggested ___ the map. (check; -ing)~checking~Suggest + -ing — предложение идеи.
short~request~He asked ___ to call later. (I/me)~me~Получатель просьбы в объектной форме.
sentence~request~Исправь: She asked me wait outside.~She asked me to wait outside.~Нужен to-infinitive после адресата.
sentence~request~Исправь: He told us don't touch it. Используй not to.~He told us not to touch it.~Отрицательное указание с not to.
sentence~request~Исправь: She offered carrying the box. Используй offer + to.~She offered to carry the box.~Предложение своей помощи.
sentence~request~Исправь: He suggested to check the list. Используй -ing.~He suggested checking the list.~Suggest + -ing, не to-infinitive.
text~request~“Please send me the link,” Ana сказала мне. Перескажи как просьбу.~Ana asked me to send her the link.~Me/her меняются по реальным ролям адресата и автора.
text~request~“Don’t share this code,” Ed сказал нам. Перескажи указание.~Ed told us not to share the code.~Сохранить отрицание, адресата и объект.
text~request~“Shall I carry your bag?” Jo предлагает помощь. Перескажи.~Jo offered to carry my bag.~Передаётся собственная помощь Jo, не запрос моей способности.
text~request~“Let’s check the time,” Kim предложила группе с тобой. Дай -ing и that-clause.~Kim suggested checking the time. Kim suggested that we should check the time. / Kim suggested that we check the time.~Все нормативные модели по смыслу, не suggested me to.
text~request~Can you print it? В одном случае проверяют доступ, в другом просят действие. Дай два пересказа.~She asked whether I could print it. She asked me to print it.~Контекст определяет способность или просьбу.
text~request~I’ll carry it может быть предложением помощи. Когда нельзя автоматически писать promised?~Если это лишь предложение, не принятое другой стороной, или простое сообщение намерения; нужен контекст.~Reporting verb должен сохранять речевую цель.`,'','Просьбы и идеи'),
bank(id,'meaning','Вопрос не ответ; просьба не выполненная задача','practice',`short~evidence~She asked whether the room was free. Свободна ли комната установлено? yes/no.~no~Вопрос не содержит ответа.
short~evidence~He asked me to book it. Я согласился по этой фразе? yes/no.~no~Просьба не доказывает принятие задачи.
short~evidence~She offered to help. Помощь принята по этой фразе? yes/no.~no~Предложение отдельно от ответа на него.
short~evidence~He suggested waiting. Все решили ждать? confirmed/not established.~not established~Предложение не общее решение.
short~evidence~No reply was recorded. Это обязательно отказ? yes/no.~no~Отсутствие ответа не устанавливает отказ.
text~evidence~Поясни She asked if I was available, and I said I wasn’t.~Она задала вопрос, я ответил отрицательно; здесь есть и вопрос, и ответ.~Не потерять отрицательный ответ при сокращении.
text~order~Почему if she will come допустимо в I wonder if she will come?~If вводит косвенный yes/no-вопрос со значением whether, не условие.~Не применять правило future conditional механически.
text~message~Сформулируй два вопроса вместо неопределённого Could you clarify everything?~Could you confirm the date? Could you tell me which entrance we should use?~Вопросы должны выделять реальные неизвестные детали.
text~evidence~“Please wait.” Ответа нет. Напиши точный протокол без выдуманного согласия.~The organiser asked us to wait. No response was recorded.~Отделить просьбу от принятия и выполнения.
text~message~Исправь They agreed to meet at ten, если известно только They asked whether ten was possible.~They asked whether ten was possible; no meeting time has been confirmed.~Не превращать вопрос о возможности в договорённость.`,'','Смысл и статус'),
bank(id,'sounds','Вежливый вопрос как реальная реплика','pronunciation',`text~sound~Достаточно ли could в тексте, чтобы доказать вежливый тон записи?~Нет, нужны интонация, контекст, паузы и реакция собеседника.~По тексту нельзя оценивать фонетику или весь тон.
speech~sound~Задай Could you tell me where the entrance is? Партнёр отвечает, ты уточняешь один ориентир.~Could you tell me where the entrance is? Is it beside the café?~Внутренний порядок и понятная речь, реальный обмен.
speech~sound~Произнеси She asked me to wait / She asked me not to wait; партнёр называет просьбу.~She asked me to wait. She asked me not to wait.~Смысловой not должен быть слышен.
speech~sound~Скажи Do you know when it starts? без паузы, создающей отдельный when does it start.~Do you know when it starts?~Внутренняя структура и разборчивость, не требование одной интонации.
speech~sound~Уточни плохо расслышанный город: Lisbon или London. Партнёр отвечает, ты повторяешь.~Did you say Lisbon or London? London, thank you.~Нужен ответ, не только произнесение двух названий.
speech~sound~Перескажи просьбу не публиковать ссылку, сохрани not to.~She asked us not to publish the link.~Отрицание и адресат в аудио не теряются.
speech~sound~Предложи собственную помощь, затем перескажи своё предложение.~Would you like me to carry it? I offered to carry it.~Речевая цель и форма offer to.
speech~sound~Предложи группе идею, дай время ответить, затем перескажи результат без выдуманного согласия.~Shall we check the date? I suggested checking it, but we haven’t decided yet.~Содержание зависит от фактического ответа партнёра.
speech~sound~Произнеси who called / who I called в двух вложенных вопросах, партнёр объясняет роли.~She asked who called. She asked who I called.~I не исчезает в потоке речи.
speech~sound~Задай неподготовленный вопрос о цене и повтори услышанную сумму для подтверждения.~Could you tell me how much it costs? Did you say fifteen pounds?~Нужны реальное аудио и проверка понимания, а не ASR similarity.`,'','Произношение'),
bank(id,'reading','Чтение: запрос о доступности помещения','reading',`short~evidence~Кто пишет в центр?~Inez~Автор запроса — Inez.
short~evidence~На какой день спрашивают комнату?~Saturday~Вопрос о Saturday, не подтверждённая бронь.
short~evidence~Кто ответил на вопрос о входе?~Paul~Paul — сотрудник центра.
short~evidence~Какой вход без ступенек: front/side?~side~Боковой вход доступен без ступенек по ответу.
short~evidence~Комната подтверждена: true/false/not stated?~false~Paul прямо не может подтвердить комнату до решения другой группы.
short~evidence~В тексте зафиксировано поручение Inez забронировать транспорт: true/false?~false~Она лишь предложила это сделать после подтверждения даты.
short~evidence~Согласилась ли группа на маленькую комнату? yes/no.~no~Решение ещё не принято.
short~evidence~Что Paul предложил прислать: map/invoice?~map~Он предложил карту входов.
short~evidence~Известно число участников с креслом-коляской? known/not stated.~not stated~Вопрос о доступности не устанавливает состав группы.
short~evidence~Когда Paul обещал следующее обновление?~Thursday~В четверг, это обещанный контакт.
text~order~Выпиши из чтения косвенный вопрос и объясни внутренний порядок.~Inez asked whether the large room was available on Saturday: the large room + was после whether.~Сохранять подлежащее и глагол, не was the large room.
text~evidence~Почему вопрос о доступном входе не доказывает инвалидность всех участников?~Он выясняет условия посещения; состав и причины запроса отдельно не сообщены.~Не делать личные выводы из информационного вопроса.
text~request~Перескажи просьбу Paul не объявлять дату.~Paul asked Inez not to announce the date yet.~Сохранить not to и адресата.
text~message~Напиши точное резюме в 5 предложениях: вопрос, ответ, просьба, предложение и нерешённое.~Inez asked about Saturday. Paul said the side entrance had no steps. He asked her not to announce the date yet. He offered to send a map. The room and the transport were not confirmed.~Различать пять речевых/деловых статусов.`,
`Inez is organising a visit for a local discussion group. She writes to the community centre to ask whether the large room is available on Saturday. She also asks which entrance visitors should use and whether they can enter without steps. These questions describe information she needs; they do not tell the centre how many participants use wheelchairs or why each person needs a particular entrance.
Paul replies that the side entrance has no steps. He offers to send a map showing the route from the bus stop. However, he cannot yet confirm the large room because another group has not finished discussing its booking. Paul asks Inez not to announce the date until the room situation is clear. His message provides a useful answer about access, but it leaves the main booking question unresolved.
At the next group meeting, Inez explains the reply. One member suggests using a smaller room if the large room is unavailable. Another asks whether the smaller room has enough space for everyone. Nobody makes a final decision. In the notes, Inez writes that a smaller room was suggested and that its capacity needs checking. She does not write that the group agreed to use it.
Inez also offers to arrange transport after the date has been confirmed. This is an offer of future help, not a completed transport booking. A member asks her to include an estimated cost before anyone commits to the plan. Inez agrees to ask for that information, but she cannot provide the amount during the meeting. The notes keep the request, her response and the missing price in separate lines.
Paul says he will send another update on Thursday. He does not promise that the large room will definitely be available then. The update may contain a decision, but it may also explain that more discussion is needed. Inez tells the group that they are waiting for information, not that their visit has been approved. Before the meeting ends, she reads back the notes and invites corrections. The group confirms the answer about the side entrance, the request not to announce the date, and the offer of a map. They leave the room choice, transport details and final cost open. This makes the next conversation easier because everyone can see which questions still need answers.`, 'Чтение'),
bank(id,'listening','Аудирование: просьба, ответ и предложение другого времени','listening',`short~evidence~Кто звонит?~Tessa~Tessa представляется в начале.
short~evidence~Кому она звонит?~Ruben~Собеседник — Ruben.
short~evidence~О каком дне первой встречи спрашивает Tessa?~Friday~Сначала вопрос о Friday.
short~evidence~Ruben свободен в пятницу: yes/no?~no~Он отвечает, что работает до вечера.
short~evidence~Какой день он предлагает?~Sunday~Sunday — предложение альтернативы.
short~evidence~Воскресенье уже согласовано всей группой: yes/no?~no~Нужно спросить остальных.
short~evidence~Какой предмет Tessa просит пока не бронировать?~projector~Просьба не бронировать projector до согласования.
short~evidence~Кто предложил связаться с центром?~Ruben~Ruben предлагает сам позвонить в центр.
short~evidence~Цена аренды известна: known/not stated?~not stated~Нужно ещё выяснить цену.
text~request~Перескажи отрицательную просьбу Tessa.~Tessa asked Ruben not to book the projector yet.~Not to, правильный адресат, отсутствие уже сделанной брони.
text~evidence~Какая разница между Ruben предложил Sunday и группа выбрала Sunday?~Первое — вариант одного участника, второе требовало бы зафиксированного общего решения.~В аудио решения группы нет.
speech~message~Передай разговор третьему участнику и задай ему один вопрос о доступности.~Friday does not work for Ruben. He suggested Sunday. Are you available then?~Нужен ответ собеседника, речь не заменяется письменным пересказом.`,
`Tessa: Hello, Ruben. Could you tell me whether you are free on Friday afternoon? We are trying to choose a time for the discussion session, but nothing has been booked yet.
Ruben: I’m afraid I’m working until the evening on Friday. Would Sunday be possible instead? I don’t know whether the others are free, so please treat that as a suggestion rather than an agreed date.
Tessa: I will ask them. Could you also tell me where the projector is kept? We may need one if people want to show photographs. Please don’t book it yet, though. We need to confirm the day first and find out the price.
Ruben: I’m not sure which cupboard it is in now. I can call the centre and ask about its location and the rental cost. Would you like me to do that?
Tessa: Yes, please. Ask for the information, but explain that we are not placing a booking. Could you send me their reply in writing so that I can share the details accurately?
Ruben: Certainly. I’ll ask whether Sunday is possible, where we can collect the projector and what it would cost. I won’t confirm the order on behalf of the group.
Tessa: Thank you. So, Friday does not work for you, Sunday is your suggestion, and the price is still unknown. I’ll check everyone’s availability before we make a decision. Please let me know if I have misunderstood anything.`, 'Аудирование'),
bank(id,'production','Письмо и диалог: вопросы с реальным ответом','production',`text~message~Составь три вежливых вопроса: место, время открытия, наличие свободной комнаты.~Could you tell me where the office is? Do you know when it opens? Could you confirm whether a room is available?~Разные информационные цели и обычный порядок внутри.
text~request~Перескажи просьбу передать ключ и просьбу не закрывать дверь; говорящая Ada, адресат — ты.~Ada asked me to pass her the key. She asked me not to close the door.~Адресат, to/not to и объект сохранены.
text~message~Напиши 130–170 слов вымышленному центру: дата ещё не согласована, спрашиваешь доступность, вместимость, вход, цену; просишь не считать письмо бронированием.~Hello, I am contacting you on behalf of a small discussion group. We are considering a visit next month, but we have not agreed on a date or made a booking. Could you tell me whether a room is usually available on Sunday afternoons? I would also like to know how many people the room can hold and which entrance visitors should use. Could you confirm whether the route from that entrance includes any steps? Please explain what equipment is included in the price and whether there are additional charges. At this stage, we are asking for information rather than reserving a room. Please do not create a booking or order any equipment for us until we confirm our plans. If possible, send the details in writing so that I can share them accurately with the group and return with any further questions.~130–170 слов, не менее трёх вложенных вопросов, чёткая граница согласия, вежливый связный запрос.
text~message~Напиши 130–170 слов протокола вымышленного разговора: заданный вопрос, известный ответ, просьба, предложение помощи, нерешённый вопрос. Не выдумывай принятие всех предложений.~During the call, Mara asked whether the meeting room was available on Tuesday. The coordinator said that it was available in the morning but not in the afternoon. Mara then asked which entrance the group should use, and the coordinator offered to send a map. We do not yet have that map, so its delivery remains a separate action to confirm. The coordinator also asked us not to move the furniture without checking first. I have recorded that request for the group. Mara suggested starting earlier, but no final start time was agreed during the call. We still need to ask the participants whether they can arrive in the morning. Please keep the suggestion separate from the confirmed information about room availability. The next step is to collect replies, agree on a time and then contact the coordinator with a clear booking request.~130–170 слов, вопросы и ответы не смешаны, предложение и решение разделены.
text~message~Напиши 130–170 слов коллеге: уточняешь двусмысленную инструкцию о документе, спрашиваешь какую версию, кому отправлять, срок и нужно ли одобрение; пока не выполняешь неясное.~Thanks for asking me to send the document. Before I do that, could you confirm which version you mean? There are two copies with similar names, and I do not want to choose the wrong one. Could you also tell me who should receive it and when it is needed? I would like to know whether the document has already been approved for sharing or whether someone still needs to review it. Your request tells me that a document needs to be sent, but it does not answer those details. I have not sent either copy yet. Please reply with the version name, the recipient and the deadline, and let me know if any information should be removed first. Once we have clarified the scope, I can confirm what I am able to do. A short written answer will help us avoid different interpretations later.~130–170 слов, конкретные вопросы и отсутствие самовольного расширения поручения; естественный рабочий тон.
text~order~Исправь: Can you tell me where does she work and what is her role?~Can you tell me where she works and what her role is?~В обеих внутренних частях порядок утверждения.
text~request~Напиши по одному пересказу предложения своей помощи и идеи для группы.~She offered to take notes. He suggested starting with the questions.~Offer + to и suggest + -ing не смешиваются.
speech~message~Партнёр — сотрудник центра. Спроси о комнате, он неожиданно сообщает ограничение. Уточни и перескажи итог.~Could you tell me whether the room is free? Does that include the evening? So only the morning is available.~Нужен реальный ответ и адаптация, не чтение монолога.
speech~message~Партнёр просит действие с неясным адресатом. Задай два конкретных вопроса и дождись ответа.~Who should receive it? Could you tell me which version I should send?~Не угадывать адресата или версию, проверять фактический ответ.
text~evidence~Составь 4 строки: question, answer, request, unknown. Используй вымышленную поездку.~Question: Is Sunday possible? Answer: Yes, after ten. Request: Please confirm transport. Unknown: the transport price.~Статусы явные, вопрос не подменяет ответ.
speech~sound~Перескажи одно своё письмо и получи обратный пересказ партнёра; исправь одну неточность, если она возникла.~I asked for the price; I did not place an order.~Не создавать фиктивную ошибку; оценка речи требует аудио.
text~message~После разбора перепиши два вопроса и одну просьбу, сохрани исходные версии.~Original: Do you know where is it? Revised: Do you know where it is? New: Could you tell me when it starts?~Только реальные ответы, исправление порядка и новое применение.`,'','Письмо и речь'),
bank(id,'review','Смешанные вопросы и отложенный диалог','review',`short~order~Do you know why the shop ___ early? (close; Present Simple)~closes~Внутренний Present Simple с -s.
short~order~I’m not sure ___ to call. (if/whether)~whether~Whether перед to-infinitive.
short~request~She asked us ___ to wait outside. (не ждать)~not~Not to передаёт отрицание просьбы.
short~request~He suggested ___ earlier. (leave; -ing)~leaving~Suggest + -ing для идеи.
sentence~order~Исправь: He asked where did I live. Используй Past Simple.~He asked where I lived.~Без инверсии в косвенном вопросе.
text~evidence~Можно ли She asked about the price сократить до She accepted the price?~Нет, запрос информации не принятие условий.~Нужно отдельное согласие, не вывод по вопросу.
text~request~Can you send it? Дай контекст, когда это не просьба отправить прямо сейчас.~Проверка доступа: есть ли у человека техническая возможность отправки без разрешения приступить.~Контекст определяет речевую цель.
speech~sound~Партнёр задаёт wh-вопрос, ты пересказываешь его третьему человеку и сохраняешь смысл.~She asked where we should meet.~Реальный обмен и оценка понятности по аудио.
text~message~Через 7 дней напиши 8 предложений нового протокола с вопросами, просьбой not to, предложением и неизвестным.~I asked whether the hall was free. Pat said it was free after lunch. I asked where the keys were kept. Pat offered to find out. Pat asked us not to move the tables. We suggested a shorter meeting. No decision was made. The cost remains unknown.~Новая ситуация, разные статусы, отложенная ручная оценка.
text~order~Объясни своими словами, почему порядок внутреннего вопроса одинаков в I know where it is и Do you know where it is?~Вложенная часть where it is сохраняется; меняется только внешняя цель — сообщение или вопрос.~Проверяется механизм, не запоминание одной фразы.`,'','Повторение')],
tests:[exam(id,'a',`short~order~Could you tell me where ___? (the lift is/is the lift)~the lift is~Subject + verb внутри вопроса.
short~order~Do you know when the café ___? (close; Present Simple)~closes~Внутри closes, без does.
short~order~She asked ___ I needed help. If или whether.~if|whether~Оба вводят обычный yes/no-вопрос.
short~order~I can’t decide ___ to leave. (if/whether)~whether~Перед инфинитивом whether.
short~order~Backshift: “When will she arrive?” → He asked when she ___ arrive.~would~Will → would в задании.
sentence~order~Исправь: Could you tell me how much does it cost?~Could you tell me how much it costs?~Внутреннее does снимается, costs получает -s.
sentence~order~Исправь: She asked why was the gate locked. Сохрани was.~She asked why the gate was locked.~Внутри нет инверсии.
sentence~order~Из Who repaired it? сделай He asked… без сдвига времени.~He asked who repaired it.~Who — подлежащее, форма уже подходит.
sentence~order~Из Who did you invite? сделай She asked who I… с Past Simple.~She asked who I invited.~I сохраняет роль приглашающего.
short~request~He asked me ___ carry the chair.~to~Ask + адресат + to.
short~request~She told us ___ to enter. (не входить)~not~Отрицательное указание строится как tell someone not to do something.
short~request~He offered ___ notes. (take; с to)~to take~Предложение своего действия с offer to.
short~request~She suggested ___ outside. (meet; -ing)~meeting~Suggest + -ing, не to.
short~evidence~She asked if the room was quiet. Тишина подтверждена? yes/no.~no~Вопрос запрашивает сведения, но сам не подтверждает тишину в комнате.
short~evidence~He offered to pay. Оплата уже выполнена по фразе? yes/no.~no~Предложение не факт оплаты.
short~evidence~They suggested Friday. Дата согласована? confirmed/not established.~not established~Идея не решение группы.
text~order~Почему Do you know why she didn’t reply? сохраняет didn’t?~Это отрицание внутри обычного порядка, а не вопросительная инверсия; его нельзя удалить.~Различить функцию do-support.
text~order~I wonder if he will call: объясни will после if.~If означает whether, вводит вопрос о будущем, а не условие.~Не применять правило условной части.
text~request~Can you copy this, please? — просьба. Автор Lea, адресат ты. Перескажи.~Lea asked me to copy it.~To-infinitive передаёт действие просьбы.
text~message~Напиши 130–170 слов запрос о вымышленной экскурсии: вопросы о времени, месте, цене и доступности, просьба пока не бронировать.~Hello, our group is interested in a guided visit, and I would like to clarify a few details before we decide. Could you tell me when the next visit starts and where participants should meet? We also need to know how long the route usually takes. Could you confirm whether the route includes stairs and whether there is an alternative entrance? Please explain what the price includes and whether equipment or printed materials cost extra. We have not agreed on a date as a group yet, so this message is a request for information, not a booking. Please do not reserve places or request payment until we confirm our choice. If possible, reply in writing so that I can share the details with everyone. Once we have read your answer, we will let you know whether we would like to proceed and ask about any remaining uncertainties.~130–170 слов, вложенный порядок, несколько конкретных вопросов, ограничение заказа.
speech~sound~Задай вежливый вопрос о расположении кассы и уточни ответ партнёра.~Could you tell me where the ticket desk is? Is that beside the main entrance?~Реальное аудио, ответ и уточнение, не оценка по транскрипту.
speech~message~Партнёр предлагает время, которое тебе не подходит. Уточни альтернативу и перескажи, что ещё не решено.~Could we consider Saturday instead? We haven’t agreed on the time yet.~Диалог и точное различие предложения/решения.
text~evidence~Просьба забронировать есть, ответа исполнителя нет. Запиши статус без домысла.~The organiser asked Lee to book a room, but Lee’s response has not been recorded.~Не выставлять согласие или выполненную бронь.
text~request~Передай Let’s check the address двумя нормативными моделями suggest.~She suggested checking the address. She suggested that we should check the address. / She suggested that we check the address.~-ing и that-clause допустимы, не suggest someone to.
text~order~Исправь и пунктуацию, и порядок: He asked where is the office? Сохрани настоящее как актуальное.~He asked where the office is.~Актуальное is допустимо, внешняя часть — утверждение.
text~evidence~Почему Could you… не гарантирует дружелюбный тон?~Тон зависит от интонации, контекста и взаимодействия; текст одной формы недостаточен.~Не оценивать звучание без аудио.`),
exam(id,'b',`short~order~Do you know where ___? (the lockers are/are the lockers)~the lockers are~Внутренний обычный порядок слов.
short~order~Could you tell me when the show ___? (begin; Present Simple)~begins~Begins с -s после снятия внутреннего does.
short~order~He asked ___ we had tickets. If или whether.~if|whether~Оба допустимы в конечном yes/no-вопросе.
short~order~I don’t know ___ to reply. (if/whether)~whether~Whether перед to-infinitive.
short~order~Backshift: “When will they return?” → She asked when they ___ return.~would~Will → would в выбранном backshift.
sentence~order~Исправь: Do you know how long does it take?~Do you know how long it takes?~Внутри it takes, не does it take.
sentence~order~Исправь: He asked why were the lights off. Сохрани were.~He asked why the lights were off.~Порядок утверждения внутри.
sentence~order~Из Who opened it? сделай She asked… без сдвига времени.~She asked who opened it.~Who выполняет роль подлежащего.
sentence~order~Из Who did you meet? сделай He asked who I… с Past Simple.~He asked who I met.~I нужно для роли встречавшего.
short~request~She asked us ___ check the names.~to~Адресат + to-infinitive просьбы.
short~request~He told me ___ to share the file. (не делиться)~not~Not to передаёт отрицательную инструкцию.
short~request~She offered ___ the tickets. (collect; с to)~to collect~Offer + to-infinitive собственной помощи.
short~request~He suggested ___ by train. (travel; -ing)~travelling|traveling~UK travelling и US traveling нормативны.
short~evidence~He asked whether the cost included lunch. Обед включён по этим данным? yes/no.~no~Вопрос не устанавливает ответ.
short~evidence~She offered to arrange transport. Транспорт уже забронирован? yes/no.~no~Предложение не выполненная бронь.
short~evidence~They suggested an online meeting. Формат утверждён? confirmed/not established.~not established~Не сообщено принятие предложения.
text~order~Объясни, почему didn’t остаётся в I asked why he didn’t come.~Didn’t образует отрицание Past Simple, а не инверсию вопроса; подлежащее перед ним.~Не удалять необходимое отрицание.
text~order~Could you tell me where she works? Почему works не обязано стать worked?~Could смягчает текущую просьбу; факт о работе может относиться к настоящему.~Время внутренней части определяется смыслом.
text~request~Please don’t change the date — просьба Sam к тебе. Перескажи.~Sam asked me not to change the date.~Отрицание not to и адресат сохраняются.
text~message~Напиши 130–170 слов запроса о вымышленном семинаре: уточни адрес, время, подготовку и цену; спроси, нужно ли записываться заранее. Ещё не подтверждай участие.~Hello, I saw the notice about your workshop and would like some information before deciding whether to join. Could you tell me where the workshop will take place and what time participants should arrive? I would also like to know whether any preparation is required and whether we should bring our own materials. Could you explain how much the workshop costs and what is included in that amount? Please let me know whether advance registration is necessary and how long a place can be held while I check my availability. I am not confirming attendance in this message. I first need to understand the arrangements and make sure the time is suitable. If there are different sessions, could you send their dates in writing? That would help me compare the options accurately and avoid making a decision based on an incomplete announcement.~130–170 слов, информационные вопросы без ложного согласия, ясный внутренний порядок.
speech~sound~Спроси о времени начала и повтори полученный ответ, сохраняя вежливый разговорный темп.~Could you tell me when it starts? Did you say half past ten?~Нужен реальный ответ и аудио; цифры ASR не оценка фонетики.
speech~message~Партнёр просит передать документ, не указав получателя. Уточни и перескажи задачу.~Could you tell me who should receive it? So you’re asking me to send it to the coordinator.~Роли и адресат подтверждаются разговором, не угадываются.
text~evidence~В протоколе есть вопрос о цене, но нет ответа. Исправь строку The price was accepted.~A question about the price was asked, but no answer or acceptance was recorded.~Сохранять неизвестное, не утверждать согласие.
text~request~Перескажи предложение своей помощи I can carry that for you как offer, а идею Let’s wait как suggest.~She offered to carry it for me. She suggested waiting.~Разные модели и речевые функции.
text~order~Исправь текущий вежливый вопрос: Could you tell me where the office is. Что меняется?~Could you tell me where the office is? Меняется конечный знак, внутренний порядок уже верен.~Не ломать правильную вложенную часть.
text~evidence~Почему отрицательный ответ на Are you free? нельзя автоматически назвать отказом помогать вообще?~Он может касаться конкретного времени; общая готовность и альтернативы отдельно не установлены.~Сохранять рамку вопроса.`)]};

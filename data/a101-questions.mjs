import {bank,exam,examples,goal} from './unit-tools.mjs';
import {presentSimpleSources} from './present-simple.mjs';

export default {
 id:'A101-questions',topic:'A101',title:'Вопросы с do/does: узнать факт, причину и действующее лицо',prerequisites:['A101-negatives'],references:['present-simple','be-questions'],sources:presentSimpleSources,
 goals:[goal('order','Строить вопросы с do/does и базовой формой','practice'),goal('roles','Различать вопрос к подлежащему и дополнению','reading'),goal('exchange','Получать информацию и точно отвечать собеседнику','production')],
 explanation:[
  {title:'Общий вопрос: вынести помощника, а не смысловой глагол',text:'В You work here обычный смысловой глагол work не меняется местами с you. Для нейтрального общего вопроса нужен помощник: Do you work here? Схема do/does → подлежащее → базовый глагол → остальная часть. С he/she/it и одиночным именем выбираем does: Does Jo work here? Признак третьего лица уже несёт does, поэтому не Does Jo works. Начинай с определения подлежащего, затем выбирай помощника и возвращай основной глагол к базе. В длинном Does the name on these cards match the list? помощник согласуется с name, а не cards.'},
  {title:'Be не получает дополнительное do',text:'Are you tired? спрашивает о состоянии, Do you work here? — об обычном действии. Не строй Do you are tired? и Are you work here? Ранее изученная модель be сохраняется: Is the room quiet? Слова open и clean могут быть разными частями речи: Is the shop open? — состояние; Does the shop open at nine? — действие по расписанию. Поэтому нельзя выбирать модель только по русскому переводу или одному английскому слову. Смысловой have в этом блоке использует do: Does she have a desk? Have you got a desk? — тоже нормативная, но другая модель, не смешивай их половины.'},
  {title:'От yes/no к недостающей детали',text:'Если нужен не ответ да/нет, добавь вопросительную группу перед do/does: Where do you work? When does the session start? Why does she walk? What do they need? How do you spell that word? Вся группа what time / which room / how often идёт вместе: What time does the shop open? Не оставляй её вторую половину в конце. Вопрос к месту обычно заменяет in the library, а не дублирует его: Where does Jo work? Ответ может быть коротким In the library или полным Jo works in the library. Частотность how often подробно закрепляется в следующей подтеме.'},
  {title:'Кто действует и на кого направлено действие',text:'В Jo helps Kim есть действующее лицо Jo и получатель помощи Kim. Если неизвестно действующее лицо, who занимает место подлежащего: Who helps Kim? В обычном утвердительном вопросе do/does не нужен, helps остаётся в третьем лице. Если известно, что действует Jo, а неизвестен получатель, получаем Who does Jo help? Здесь Jo — подлежащее, who — дополнение, поэтому нужны does и база help. Аналогично What makes that noise? против What does that machine make? Не учи правило «после who всегда без do»: роль слова важнее его вида. Which person checks the list? тоже вопрос к подлежащему.'},
  {title:'Границы правила о подлежащем',text:'В начальной нейтральной модели Who checks the list? подлежащее-вопрос обычно сочетается с формой третьего лица единственного числа, даже если ответом окажутся два человека. Но явное множественное How many people work here? требует work. В отрицательном вопросе помощник появляется: Who doesn’t work on Fridays? При смысловом выделении возможен Who DOES know the answer? Эти конструкции не делают базовое правило неверным, а показывают его границы; сложные оттенки отрицательных и эмфатических вопросов будут изучаться дальше. Здесь основной навык — не путать неизвестного деятеля с неизвестным объектом.'},
  {title:'Два do в одном вопросе — две разные работы',text:'В What does Jo do? первый does — грамматический помощник, второй do — смысловой глагол «делать». После does остаётся базовое do, не ещё один does. В Do you do the checks? первая форма создаёт вопрос, вторая называет действие. Ответ Jo checks the labels заменяет неопределённое действие конкретным. Разговорное What do you do? часто спрашивает о профессии, но уточнение What do you do after lunch? уже спрашивает о распорядке. Сначала разберись в ситуации, а не выбирай перевод по одному устойчивому шаблону.'},
  {title:'Короткий ответ и смена точки зрения',text:'На Do you work here? собеседник о себе отвечает Yes, I do / No, I don’t, а о своей группе Yes, we do / No, we don’t. На Does Jo work here? — Yes, Jo does или Yes, she/he does, если местоимение известно. Не угадывай местоимение человека по имени. Для установленного singular they используй they do. В коротком ответе не нужен повтор смыслового глагола, но помощник должен соответствовать вопросу: Yes, I am не отвечает на Do you work here? I don’t know — не отрицательный ответ о факте, а сообщение об отсутствии знания.'},
  {title:'Вопрос должен действительно менять сведения собеседника',text:'Сначала выясни общий факт, затем деталь и уточнение: Do you study English? — Yes, I do. — Where do you study? — At home. — On your own? — No, with a friend. Не зачитывай десять вопросов без реакции на ответы. Если данных нет, скажи I don’t know и спроси человека, у которого они есть; не подставляй удобный ответ. Для тренировки речи партнёры получают разные сведения и в конце сверяют записанный результат. В письменной практике допустимы несколько естественных формулировок; там, где возможен выбор смысла или порядка, ответ оценивается по рубрике, а не по одной строке.'}
 ],
 examples:examples(`Do you work on Saturdays?~Ты работаешь по субботам?~Do + you + база work.
Does the café serve lunch?~Кафе подаёт обед?~Does согласуется с café, serve без -s.
Do the cafés serve lunch?~Эти кафе подают обед?~Множественное подлежащее требует do.
Does the name on these boxes match?~Имя на этих коробках совпадает?~Главное name в единственном числе.
Do the names on this box match?~Имена на этой коробке совпадают?~Главное names во множественном числе.
Does she have a notebook?~У неё есть блокнот?~Have возвращается к базе после does.
Does he go by bus?~Он ездит автобусом?~Go, а не goes после помощника.
Where do you live?~Где ты живёшь?~Where перед do, затем подлежащее и база.
What time does the class start?~Во сколько начинается занятие?~Вся группа what time стоит перед does.
Why does Jo carry two bags?~Почему Джо носит две сумки?~Причина запрашивается через why.
How do you spell your surname?~Как пишется твоя фамилия по буквам?~Вопрос о способе; имя можно взять вымышленное.
Which room do the helpers use?~Какую комнату используют помощники?~Which room — одна вопросительная группа, helpers — подлежащее.
Who calls Sam?~Кто звонит Сэму?~Неизвестен звонящий, who — подлежащее.
Who does Sam call?~Кому звонит Сэм?~Звонит Sam; who — неизвестный получатель.
What makes that sound?~Что издаёт тот звук?~What — неизвестный источник действия.
What does that tool make?~Что изготавливают тем инструментом?~Tool — подлежащее, what — объект.
How many people work here?~Сколько человек здесь работает?~Явное people задаёт множественное согласование.
Who doesn’t use this room?~Кто не использует эту комнату?~Отрицательный вопрос к подлежащему требует doesn’t.
Do you do the checks?~Ты выполняешь проверки?~Первое do — помощник, второе — действие.
What does your colleague do after lunch?~Что твой коллега делает после обеда?~Уточнение after lunch задаёт распорядок, не обязательно профессию.
Do you both study here? — Yes, we do.~Вы оба здесь учитесь? — Да.~Ответчик меняет you на we для своей группы.
Who checks the labels, and which labels does the new helper check?~Кто проверяет этикетки и какие этикетки проверяет новый помощник?~Сложный контраст: неизвестный деятель против известного деятеля и неизвестного объекта.`),
 banks:[
 bank('A101-questions','practice','Построение вопросов и смена ролей','practice',`short~order~___ the visitor need a ticket? Do/does?~Does~Visitor в единственном числе требует does.
short~order~___ these visitors need tickets? Do/does?~Do~These visitors — множественное подлежащее.
short~order~___ the information on these pages help? Do/does?~Does~Information неисчисляемое; pages — часть уточнения.
short~order~___ you have a question? Обращение к одному человеку: do/does?~Do~You всегда использует do, число адресатов этого не меняет.
short~order~Does Kim ___ the room? Вставь check/checks.~check~После does остаётся базовая форма check.
short~order~Does the lesson ___ at ten? Вставь start/starts.~start~Третье лицо уже выражено помощником.
sentence~order~Сделай общий вопрос: The guide speaks English.~Does the guide speak English?~Does + the guide + speak, без второго -s.
sentence~order~Сделай общий вопрос: The guests bring notebooks.~Do the guests bring notebooks?~Do + множественное guests + bring.
sentence~order~Собери вопрос: you / do / where / study / ?~Where do you study?~Where стоит перед вспомогательным do.
sentence~order~Собери вопрос: the bus / what time / leave / does / ?~What time does the bus leave?~Группа what time не разрывается.
sentence~order~Собери вопрос: these helpers / use / which tools / do / ?~Which tools do these helpers use?~Which tools — объект; these helpers — подлежащее.
sentence~order~Исправь двойное окончание: Does she carries a bag?~Does she carry a bag?~Carries после does становится carry.
sentence~order~Исправь помощника: Do he have a key?~Does he have a key?~He требует does; have уже в базе.
short~order~___ the room quiet? Is/does?~Is~Quiet — прилагательное, нужен вопрос с be.
short~order~___ the helper speak quietly? Is/does?~Does~Speak — смысловой глагол, вопрос с does.
sentence~order~Вопрос к месту в “Jo works in the library”. Используй where.~Where does Jo work?~Группа in the library заменена на where.
sentence~order~Вопрос к причине в “They walk because the office is near”. Используй why.~Why do they walk?~Вопросительная группа заменяет причину, не повторяет её.
short~roles~“Who helps Jo?” — неизвестен деятель или получатель помощи? Введи subject/object.~subject~Who занимает место действующего лица.
short~roles~“Who does Jo help?” — неизвестен деятель или получатель помощи? Введи subject/object.~object~Jo помогает, неизвестно кому.
sentence~roles~Дано “Mina calls Leo”. Спроси, кто звонит Leo, через who.~Who calls Leo?~Who заменяет Mina; calls остаётся в третьем лице.
sentence~roles~Дано “Mina calls Leo”. Спроси, кому звонит Mina, через who.~Who does Mina call?~Mina остаётся подлежащим, нужны does и call.
short~roles~How many visitors ___ here? Work/works?~work~Вопросительная группа содержит явное множественное visitors.
sentence~order~Исправь второй does: What does he does after work?~What does he do after work?~Помощник does и смысловая база do выполняют разные роли.
sentence~exchange~Do you work here? Ответь положительно только о себе краткой моделью.~Yes, I do.~Меняем адресата you на говорящего I; помощник do.
sentence~exchange~Do you both work here? Ответь отрицательно о своей группе краткой моделью.~No, we don't.|No, we do not.~Оба участника ответа образуют we, отрицание сохраняет do.
text~exchange~Известно только “I don’t know where Jo works”. Можно ли ответить No на “Does Jo work at home?”~Нет. Следует сказать I don’t know: данных о месте работы нет.~Неизвестное не превращено в отрицательный факт.`),
 bank('A101-questions','reading','Информационный стол: кто знает ответ','reading',`short~exchange~Кто работает у информационного стола? Напиши имя.~Ari~Первый абзац называет Ari.
short~exchange~Ari помнит все правила бронирования: yes/no/not stated?~no~Ari прямо говорит, что не знает всех деталей.
short~roles~Кто проверяет формы? Напиши имя.~Bea~Bea checks the forms; это вопрос к действующему лицу.
short~roles~Кому Bea звонит при неясном ответе? Два слова из текста.~the organiser|organiser~Организатор — получатель звонка Bea.
short~exchange~В какой комнате проходит группа чтения? Скопируй обозначение.~Room L|L~Ari сообщает Room L.
short~exchange~Какой день назван для группы чтения?~Thursday|Thursdays~Встреча проходит по четвергам.
short~exchange~Группа чтения бесплатна: yes/no/not stated?~not stated~Ari не знает о плате, это не значит ни free, ни paid.
sentence~roles~Спроси через who, кто проверяет формы, не называя Bea.~Who checks the forms?~Вопрос к подлежащему обходится без does.
sentence~roles~Спроси через who, кому звонит Bea; используй call.~Who does Bea call?~Bea — известное подлежащее; call без -s.
sentence~order~Спроси через where о месте работы Ari.~Where does Ari work?~Место заменено на where, действует Ari.
text~exchange~Почему вопрос “Does the group meet every day?” полезен, хотя Ari уже назвал Thursday?~Он проверяет, единственный ли это день; в тексте после уточнения Ari говорит, что это единственный еженедельный день встречи.~Уточнение должно опираться на предыдущий ответ, не быть случайным новым вопросом.
text~roles~Объясни разницу Who helps Ari? / Who does Ari help? и ответь на первый по тексту.~В первом неизвестен помощник: Bea helps Ari. Во втором неизвестен получатель помощи Ari; текст не перечисляет всех таких людей.~Правильно различены две роли; отсутствие полного списка не заполняется догадкой.
text~exchange~Составь записку новичку из 5–7 предложений: место, день, кто проверяет формы, кому звонит, какие сведения неизвестны.~The reading group meets in Room L on Thursdays. Thursday is its only weekly meeting day. Bea checks the forms. She calls the organiser when an answer is unclear. Ari doesn’t know the price. The organiser’s phone number is not in this notice.~Все основные сведения сохранены; нет придуманной цены или контактов.
speech~exchange~Разыграйте посетителя и Ari: запроси место и день, затем уточни цену. Партнёр отвечает только на основании текста.~Where does the group meet? — In Room L. Does it meet on Thursdays? — Yes, it does. Is it free? — I don’t know.~Нужны реакция на услышанное, верная смена do/be и честное сообщение неизвестного.`,
`Ari works at the information desk in a community centre. People come to the desk with questions about rooms and groups. Ari knows the room numbers, but does not remember every booking rule. A new visitor asks, “Where does the reading group meet?” Ari checks a list and answers, “In Room L.” The visitor then asks, “What day does it meet?” Ari says, “On Thursdays.” The visitor wants a clear weekly plan: “Does it meet every day?” Ari answers, “No, it doesn’t. Thursday is its only weekly meeting day.”
Bea helps Ari with booking forms. She checks each form and calls the organiser when an answer is unclear. She does not guess missing names. A visitor asks Ari, “Who checks the forms?” The answer is Bea. The visitor then asks, “Who does Bea call?” The answer is the organiser. These questions have similar words but ask about different people and different roles.
The first visitor has one more question: “Is the reading group free?” Ari says, “I don’t know. Please ask the organiser about the price.” This is not a no answer about the price. The notice gives no price and no organiser’s phone number. The visitor writes the room and day in a notebook and leaves the price blank for now.`),
 bank('A101-questions','listening','Телефонное уточнение распорядка','listening',`short~exchange~Кто задаёт первые вопросы: Tess или Omar?~Tess~Tess хочет узнать порядок работы клуба.
short~exchange~Какой день встречи назван?~Saturday|Saturdays~Omar говорит on Saturdays.
short~exchange~Во сколько клуб начинает работу? Формат HH:MM.~10:30~Half past ten передаёт 10:30.
short~roles~Кто приносит настольные игры?~Lena~Lena brings the games — ответ к подлежащему.
short~roles~Кому Omar отправляет список?~Lena~Omar sends the list to Lena.
short~exchange~Omar готовит еду для клуба: yes/no/not stated?~no~Он явно отвечает, что не готовит еду для клуба.
short~exchange~Посетители платят за вход: yes/no/not stated?~not stated~Omar не знает о плате за вход.
sentence~order~Из утверждения “Lena brings the games” сделай общий вопрос.~Does Lena bring the games?~Does несёт согласование, bring остаётся базой.
sentence~roles~Спроси через who, кто приносит игры; используй brings.~Who brings the games?~Who — подлежащее, нейтральный вопрос без does.
text~roles~Сравни два вопроса о Lena: “Who brings the games?” и “Who does Omar send the list to?”~Ответ в обоих случаях Lena, но сначала она деятель, затем получатель списка от Omar.~Одинаковое имя в ответе не означает одинаковую грамматическую роль.
text~exchange~Составь два уточняющих вопроса о неизвестных сведениях, не выдавая их за факты.~Do visitors pay for entry? What time does the club finish?~Вопросы относятся к пробелам; текст не даёт ответов о цене и окончании.
speech~exchange~Партнёр утверждает, что Omar приносит игры и клуб начинает в десять. Переспроси и исправь обе детали.~Does Omar bring the games? — No, Lena does. Does it start at ten? — No, at half past ten.~Проверяются слышимые вопросы и две точные коррекции, не чтение транскрипта.`,
`Tess: Do you help at the games club, Omar? Omar: Yes, I do. Tess: What day does it meet? Omar: On Saturdays. Tess: What time does it start? Omar: At half past ten. Tess: Who brings the games? Omar: Lena brings them. I make a list of the games we need. Tess: Who do you send the list to? Omar: To Lena. She checks it before the meeting. Tess: Do you cook food for the club too? Omar: No, I don’t. I just help with the games and the list. Tess: Do visitors pay for entry? Omar: I don’t know. The organiser knows about that. Tess: Thanks. I know the day and start time now. I still need the price and the finish time.`),
 bank('A101-questions','production','Интервью, уточнение и письменный отчёт','writing',`text~order~Напиши шесть разных вопросов новичку в клубе: два yes/no, два о деталях, один к подлежащему, один с be. Используй вымышленную ситуацию.~Do you live nearby? Do you bring a notebook? Where do you study? What time do you finish work? Who helps new visitors? Are you free on Fridays?~Нужны все типы; естественные альтернативы принимаются по смыслу.
text~roles~По “Kai teaches Jo” составь два who-вопроса с разными неизвестными и ответь на каждый.~Who teaches Jo? — Kai does. Who does Kai teach? — Jo.~Явно различены учитель и ученик; teaches и teach выбраны по модели.
text~order~Из “The helpers near the stairs carry the boxes” сделай общий вопрос и вопрос о предмете действия.~Do the helpers near the stairs carry the boxes? What do the helpers near the stairs carry?~Длинное подлежащее не разрывается; обе модели имеют do и carry.
text~exchange~Ответь кратко и развёрнуто на “Does your fictional neighbour drive?” Сам задай положительный или отрицательный факт.~No, my neighbour doesn’t. My neighbour walks or takes the bus.~Факт вымышленный и согласованный; не требуются настоящие данные соседа.
text~exchange~Составь мини-диалог из шести реплик: место учёбы → день → уточнение, один ответ unknown.~Where do you study? — At the library. What day do you study there? — On Tuesdays. Does it open on Sundays too? — I don’t know.~Последующий вопрос связан с ответом, отсутствие знания не превращено в No.
text~order~Разбери и исправь записку: “Where she works? Does she has a desk? Is she work at home?”~Where does she work? Does she have a desk? Does she work at home?~Для каждой правки назван механизм: помощник, база, отсутствие лишнего be.
text~roles~Объясни начинающему отличие Who lives here? / Who does Jo live with? Приведи возможные ответы.~В первом неизвестен житель: Mina lives here. Во втором Jo известен, неизвестен спутник: Jo lives with Kim.~Не нужно формальное whom; конечный with в разговорном вопросе допустим.
text~exchange~Напиши 6–8 предложений по вымышленному интервью: Pat работает в библиотеке, начинает в девять, проверяет список, помогает Jo; обед неизвестен.~Pat works in a library. Pat starts at nine. Pat checks the list. Pat helps Jo. The interview gives four facts. Pat’s lunch time is unknown. I need one more question about lunch.~Отчёт не приписывает Pat ответы, которых в карточке нет.
speech~exchange~Информационный разрыв: A знает комнату K и день Tuesday, B знает начало 11:00 и ведущего Jo. Не показывайте карточки друг другу; соберите все четыре факта вопросами.~Where does the group meet? What day does it meet? What time does it start? Who leads it?~Партнёры реально обмениваются сведениями, в конце оба называют четыре факта; не монолог по общей карточке.
speech~roles~Партнёр задаёт Who calls Jo? Ты слышишь его как Who does Jo call? Попроси уточнить роль и ответь по сцене: Mina calls Jo; Jo calls Kai.~Do you mean who calls Jo, or who Jo calls? Mina calls Jo. Jo calls Kai.~Цель — восстановить смысл, не просто безошибочно повторить две строки; допустима более простая просьба уточнить.
speech~exchange~Проведи интервью о трёх вымышленных привычках партнёра. После каждого ответа задай связанный вопрос и в конце перескажи три результата.~Do you read every evening? — No. When do you read? — On weekends.~Минимум три цепочки и согласованный итог; партнёр может менять ответы, нельзя только читать образец.
text~order~Составь две пары вопросов с open: состояние двери сейчас и действие магазина по расписанию. Ответь на каждый.~Is the door open now? — Yes, it is. Does the shop open at eight? — No, it opens at nine.~Open различено как прилагательное и глагол; ответы соответствуют вспомогательной модели.
text~roles~Сравни “Who checks the stock?” и “How many helpers check the stock?” Почему check имеет разные формы?~В первом нейтральное who получает единственное checks; во втором явно множественное helpers требует check.~Нельзя объяснять форму только знаком вопроса или словом who.
text~exchange~Отредактируй своё интервью: оставь исходник, исправленную версию и два новых вопроса на трудную модель.~Исходник: Does Jo uses it? Исправление: Does Jo use it? Новые вопросы: Does Kai need it? Does the app store it?~Это работа над собственным ответом; образец показывает формат, не подменяет реальное редактирование.`),
 bank('A101-questions','review','Смешанное повторение: be, формы и вопросы','review',`short~order~___ the people at that desk speak English? Do/does?~Do~People — множественное, хотя desk единственное.
short~order~___ the note beside these keys explain the rule? Do/does?~Does~Главное note в единственном числе.
sentence~order~Исправь “Where does the teacher studies?”~Where does the teacher study?~Studies превращается в study после does.
sentence~order~Сделай общий вопрос: Jo has a map.~Does Jo have a map?~Для этой модели используем does и have.
sentence~roles~Из “The red light shows the fault” спроси, что показывает неисправность: what вместо подлежащего.~What shows the fault?~Неизвестный источник — what; показывает shows.
sentence~roles~Из “The red light shows the fault” спроси, что показывает красный индикатор: what вместо объекта.~What does the red light show?~Известное подлежащее сохраняется; show после does.
short~order~___ the light red? Is/does?~Is~Red — цвет как признак, а не действие.
sentence~exchange~“Does it use paper?” Ответь кратко отрицательно о том же it.~No, it doesn't.|No, it does not.~Короткий ответ повторяет does и it.
text~exchange~Один человек отвечает Yes, we do на Do you work here? Почему это не обязательно ошибка?~Он может отвечать за себя и свою группу; выбор I/we зависит от смысла и контекста.~Не применять механическую замену you только на I.
text~roles~“Who doesn’t know the code?” Почему здесь есть doesn’t, хотя who — подлежащее?~Это отрицательный вопрос; not требует помощника do в обычной модели know.~Граница правила о нейтральном положительном вопросе названа явно.
speech~exchange~Не глядя в материал, выясни у партнёра место и день вымышленной встречи, затем проверь один факт отрицательным кратким ответом на его встречный вопрос.~Where does it meet? What day does it meet? — Do you lead it? — No, I don’t.~Вопросы и ответы должны соответствовать новой карточке, а не старому тексту.
text~exchange~Составь план проверки через 7 дней: новая сцена, два типа who, один неизвестный факт и короткий отчёт.~Сцена: мастерская. Проверить, кто чинит стул и кому мастер помогает; не выдумывать цену; после диалога записать 4–6 предложений.~Это план будущей проверки, не запись якобы состоявшегося успешного занятия.`)
 ],
 tests:[
 exam('A101-questions','a',`short~order~___ the instructions inside this folder help you? Do/does?~Do~Главное instructions во множественном числе.
short~order~___ the address on those envelopes match? Do/does?~Does~Главное address, не envelopes.
short~order~Does your colleague ___ the new list? Use/uses?~use~После does используется база use.
short~order~Does the bus ___ near the park? Stop/stops?~stop~Окончание третьего лица остаётся только у does.
sentence~order~Сделай общий вопрос: The gardener carries a small radio.~Does the gardener carry a small radio?~Carries возвращается к carry после does.
sentence~order~Собери: does / the bakery / where / deliver / ?~Where does the bakery deliver?~Where перед does, затем подлежащее и база.
sentence~order~Исправь “What time does this service starts?”~What time does this service start?~Start без -s после помощника.
short~order~___ the visitor hungry? Is/does?~Is~Hungry — состояние через be.
sentence~roles~“Nora teaches Ben”. Спроси через who, кто учит Ben.~Who teaches Ben?~Вопрос к подлежащему, teaches в единственном числе.
sentence~roles~“Nora teaches Ben”. Спроси через who, кого учит Nora.~Who does Nora teach?~Nora остаётся подлежащим; teach без -es.
short~roles~How many engineers ___ these notes? Read/reads?~read~Явное множественное engineers требует read.
sentence~order~Исправь “What does the caretaker does at night?”~What does the caretaker do at night?~Первый does — помощник, второй глагол — do.
sentence~exchange~“Do you study French?” Ответь отрицательно краткой моделью только о себе.~No, I don't.|No, I do not.~Ответ от I сохраняет помощник do.
sentence~exchange~“Does this program save files?” Ответь положительно краткой моделью с it.~Yes, it does.~It замещает program, does соответствует вопросу.
short~exchange~Дано только “The guide doesn’t know the price”. Цена равна нулю: true/false/not stated?~not stated~Нет знания цены, нет и подтверждения бесплатности.
text~roles~Объясни Who sends the parcel? / Who does the driver send the parcel to? Назови роль who в каждом.~В первом неизвестен отправитель; во втором driver уже отправитель, неизвестен получатель посылки.~Различены роли, корректный смысл важнее терминов.
text~exchange~Напиши 6–8 предложений по интервью: Lee работает в пекарне, начинает в шесть, делает хлеб, помогает Kim; день отдыха неизвестен. Добавь один вопрос для уточнения.~Lee works in a bakery. Lee starts at six. Lee makes bread. Lee helps Kim. Lee’s day off is unknown. What day does Lee have off?~Все данные сохранены; вопрос направлен к неизвестному, не придуман ответ.
text~order~Составь по два вопроса: о текущем состоянии комнаты и об обычных действиях группы в ней.~Is the room warm? Is it quiet? Do the visitors read here? Does the group meet here?~Две модели be и do-support, по два осмысленных вопроса.
speech~exchange~Партнёр знает вымышленный маршрут автобуса: спроси место остановки, время отправления, затем уточни один ответ и перескажи сведения.~Where does the bus stop? What time does it leave? Do you mean six in the morning?~Реальный ответ партнёра определяет уточнение; без аудио речь остаётся непроверенной.
text~exchange~Партнёр ответил “I don’t know” на “Does the group meet on Mondays?” Напиши корректную запись результата и следующий вопрос.~The Monday meeting is unconfirmed. Who knows the timetable?~Нет ложного “The group doesn’t meet on Mondays”; нужен способ уточнить факт.`),
 exam('A101-questions','b',`short~order~___ the messages in this file explain the problem? Do/does?~Do~Messages — главное слово во множественном числе.
short~order~___ the price beside these items include delivery? Do/does?~Does~Главное price в единственном числе.
short~order~Does the neighbour ___ a dog? Have/has?~have~Has возвращается к have после does.
short~order~Does that student ___ here? Study/studies?~study~После помощника нужна база study.
sentence~order~Сделай общий вопрос: The driver washes the van.~Does the driver wash the van?~Wash без -es после does.
sentence~order~Собери: your friends / where / eat / do / ?~Where do your friends eat?~Where перед do; friends требует do.
sentence~order~Исправь “Which file does this tool reads?”~Which file does this tool read?~Which file не разрывается; read без -s.
short~order~___ the new labels clear? Are/do?~Are~Clear — признак, множественное labels требует are.
sentence~roles~“Maya phones Alex”. Спроси через who, кто звонит Alex.~Who phones Alex?~Who заменяет Maya и является подлежащим.
sentence~roles~“Maya phones Alex”. Спроси через who, кому звонит Maya.~Who does Maya phone?~Maya известна; phone — база после does.
short~roles~How many students ___ this route? Use/uses?~use~Явное множественное students требует use.
sentence~order~Исправь “What does the assistant does before lunch?”~What does the assistant do before lunch?~Помощник does не повторяется в качестве смыслового глагола.
sentence~exchange~“Do you both live nearby?” Ответь положительно краткой моделью за свою группу.~Yes, we do.~You both превращается в we с позиции отвечающих.
sentence~exchange~“Does this app need a password?” Ответь отрицательно краткой моделью с it.~No, it doesn't.|No, it does not.~It согласуется с does, отрицание сохранено.
short~exchange~Дано только “Maya doesn’t know the finish time”. Встреча заканчивается в полдень: true/false/not stated?~not stated~Время завершения не сообщено и не следует из отсутствия знания.
text~roles~Объясни Who checks the order? / Which order does the assistant check? Что известно и чего не хватает?~В первом известна заявка, неизвестен проверяющий; во втором известен помощник, неизвестна проверяемая заявка.~Две грамматические роли и два разных пробела информации.
text~exchange~Напиши 6–8 предложений по интервью: Robin работает в садовом центре, начинает в восемь, поливает растения, помогает Sam; день отдыха неизвестен. Добавь уточняющий вопрос.~Robin works at a garden centre. Robin starts at eight. Robin waters the plants. Robin helps Sam. Robin’s day off is unknown. What day does Robin have off?~Нет придуманных сведений; UK centre и US center допустимы.
text~order~Составь по два вопроса: о состоянии устройства и об обычных действиях программы.~Is the device ready? Is it on? Does the program save notes? Does it use the network?~Четыре вопроса правильно разделяют be и do-support.
speech~exchange~Партнёр знает вымышленные часы книжного клуба. Спроси день, место, уточни один ответ и перескажи результат от третьего лица.~What day does the club meet? Where does it meet? Do you mean Room D?~Нужны реальные ответные реплики и пересказ по услышанному, не заранее заученный монолог.
text~exchange~“I don’t know who checks the tickets” — доказывает ли это, что билеты никто не проверяет? Напиши запись неизвестного и вопрос для уточнения.~The person who checks the tickets is unknown. Who checks the tickets?~Не приписан факт отсутствия проверки; сформулирован нужный вопрос.`)]
};

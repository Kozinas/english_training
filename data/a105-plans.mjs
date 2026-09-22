import {bank,exam,examples,goal} from './unit-tools.mjs';
import {futureSources} from './future-choices.mjs';
export default {
 id:'A105-plans',topic:'A105',title:'Намерения, договорённости и расписания',prerequisites:['A105-pronouns'],references:['future-choices','present-continuous','present-simple'],sources:futureSources,
 goals:[goal('form','Строить going to и вопросы с be','forms'),goal('meaning','Различать намерение, договорённость, расписание и признаки','choices'),goal('evidence','Читать планы без подмены их результатом','reading'),goal('plan','Согласовывать и пересматривать связный план','production')],
 explanation:[
 {title:'Going to — конструкция с изменяемым be',text:'I am going to study, she is going to study, we are going to study. После going to ставим исходную форму действия: study, leave, buy, be. Меняется только am/is/are по подлежащему. She going to study теряет обязательное be; She is going to studies смешивает две системы; I am go to study не является этой конструкцией. Если план относится к состоянию, нужны оба be на разных местах: I am going to be at home. Первое am строит конструкцию, be после to является смысловым глаголом «быть».'},
 {title:'Отрицание и вопросы',text:'Not стоит после формы be: I’m not going to drive; they aren’t going to stay. Общий вопрос переставляет be: Are you going to drive? Специальная группа идёт перед ним: What are you going to cook? Where is Jo going to stay? Не добавляй do/does: Do you are going to…? Краткий ответ использует be и лицо отвечающего: Are you going to help? — Yes, I am / No, I’m not; о группе Yes, we are. Положительное Yes, I’m в конце реплики не используется; отрицательное No, I’m not нормативно.'},
 {title:'Намерение существует до высказывания',text:'Мысль «собираюсь сделать» представляет действие как имеющийся план: I’m going to learn to drive. Билет, запись или согласие другого человека не обязательны для самого намерения. Но фраза не доказывает, что действие уже совершилось или точно состоится: план можно изменить. Если автор говорит I’m going to apply for the course, он ещё не утверждает, что получил место. В дневнике отделяй decided/intend/plan от booked/confirmed и от done. Ни одна будущая грамматическая форма не заменяет реальное подтверждение результата.'},
 {title:'Going to может быть и прогнозом',text:'Посмотри на признаки сейчас: The shelf is bending. It’s going to fall. Полка не принимает решения, значит going to здесь не намерение. Это прогноз по наблюдаемым признакам. Look at the dark clouds: it’s going to rain — сходный механизм. У прогноза остаётся возможность не сбыться. Не превращай учебную подсказку «есть признаки» в запрет на will в любом прогнозе: формы могут пересекаться, а выбор показывает, что говорящий подчёркивает. Подробное сравнение с will продолжится в следующей подтеме.'},
 {title:'Present Continuous переносится из «сейчас» в договорённость',text:'В A102 I’m meeting Jo now описывало процесс. I’m meeting Jo tomorrow at six по будущему контексту сообщает организованную встречу. Время и место часто согласованы, но нет правила, что каждое предложение обязано содержать билет и ровно двух участников. We’re travelling on Friday тоже может быть уже организованным планом. При вопросе Are you doing anything on Saturday? собеседник спрашивает планы, не нынешнее действие. Контекст важнее самого -ing. Не используй эту форму для любого безличного прогноза: обычное Look at the clouds! It’s raining tomorrow не служит базовой моделью прогноза.'},
 {title:'Расписание использует Present Simple',text:'The train leaves at 8:20 tomorrow; the workshop starts on Monday. Форма настоящего сообщает установленное расписание или программу, поэтому сохраняется знакомое -s. Вопрос What time does the train leave? тоже строится через does + основа, несмотря на будущее значение. Отрицание The museum doesn’t open on Mondays описывает график. Расписание не гарантирует фактическую пунктуальность поезда; задержка не делает исходное расписание грамматически неверным. Отличай расписание учреждения от личного намерения We’re going to visit it.'},
 {title:'Не три непроницаемые коробки',text:'I’m going to meet Jo tomorrow и I’m meeting Jo tomorrow часто описывают одно событие: первое выделяет намерение, второе — организованный план. Ученик может выбрать обе формы при подходящем контексте. Если задание просит построить именно going to, проверяем устройство этой формы; если просит выбрать сообщение по ситуации, обсуждаем смысл. Нельзя объявлять другую естественную форму ошибкой только потому, что в ключе одна. Для проверки новой формы мы отдельно задаём её в условии, а неоднозначные контрасты оставляем открытыми.'},
 {title:'Время и произношение',text:'Tomorrow/next week без on; on Friday без next; in three days — через три дня, for three days — длительность. Не заменяй in на for, если нужен момент начала. В разговоре going to может звучать ближе к /ˈɡənə/; это полезно узнавать, но нейтральное письмо сохраняет going to и обязательное be. Нельзя заменить движение going to the station на gonna the station: за разговорной gonna должен идти глагол. I’m going to the station — движение; I’m going to visit the station — конструкция намерения. I’m going to go допустимо, хотя going повторяется по смыслу.'},
 {title:'Собери план, который другой человек может выполнить',text:'Назови событие, время, место, участников и степень согласования. Добавь ещё не решённый вопрос, например The room is not confirmed yet. Если время меняется, назови старый и новый варианты явно, а не исправляй только одну цифру в длинном тексте. Партнёр должен принять или предложить альтернативу: Sounds good / That time doesn’t work for me. В чтении: booking — бронирование, confirmed — подтверждённый, timetable — расписание, venue — место мероприятия, available — доступный, deposit — задаток. Эти слова помогают понять статус, но не заменяют грамматический разбор.'}
 ],
 examples:examples(`I am going to study tonight.~Я собираюсь заниматься сегодня вечером.~Am + going to + основа.
She is going to cook for us.~Она собирается приготовить нам еду.~Согласование is и адресат us.
We are going to be early.~Мы собираемся прийти заранее.~После to смысловое be.
I’m not going to drive.~Я не собираюсь вести машину.~Not после am.
They aren’t going to stay overnight.~Они не собираются оставаться на ночь.~Отрицание намерения.
Are you going to call her?~Ты собираешься ей позвонить?~Be перед субъектом.
Yes, I am.~Да, собираюсь.~Положительный краткий ответ без сокращения am.
No, we aren’t.~Нет, не собираемся.~Ответ от лица группы.
What are you going to bring?~Что ты собираешься принести?~What перед be.
Where is he going to live?~Где он собирается жить?~Не Where he is going…?
I’m going to go by bus.~Я собираюсь поехать автобусом.~Повтор go не является грамматической ошибкой.
I’m going to the station.~Я иду/еду на вокзал.~To + место, это движение.
I’m going to meet you at the station.~Я собираюсь встретить тебя на вокзале.~To + глагол намерения.
We’re meeting the guide at ten tomorrow.~Мы встречаемся с гидом завтра в десять.~Будущий контекст договорённости.
Are you doing anything on Sunday?~У тебя есть планы на воскресенье?~Continuous спрашивает о будущем плане.
The talk starts at seven.~Выступление начинается в семь.~Present Simple расписания.
What time does the train leave?~Во сколько отправляется поезд?~Does + основа leave.
The shop doesn’t open on Mondays.~Магазин не открывается по понедельникам.~Отрицательное расписание.
We are leaving in two days.~Мы уезжаем через два дня.~In обозначает удалённость от сейчас.
We are staying for two days.~Мы остаёмся на два дня.~For обозначает длительность.
The glass is near the edge. It’s going to fall.~Стакан у края. Он сейчас упадёт.~Прогноз, не намерение стакана.
I’m going to apply; my place is not confirmed.~Я собираюсь подать заявку; место не подтверждено.~Намерение не равно записи.
We’re meeting Jo. We’re going to meet Jo.~Мы встречаемся с Джо. Мы собираемся встретиться с Джо.~Обе формы возможны, акценты различны.
The timetable says 8:20; the actual arrival may differ.~В расписании 8:20; фактическое прибытие может отличаться.~График и свершившийся факт различаются.`),
 banks:[
 bank('A105-plans','forms','Построение going to','practice',`short~form~I ___ going to read tonight. Am/is/are?~am~I требует am перед going to.
short~form~The children ___ going to play outside. Am/is/are?~are~Множественное children согласуется с are.
short~form~The box of tools ___ going to be useful. Is/are?~is~Главное слово box, не tools.
short~form~She is going to ___. Cook/cooks?~cook~После to исходная форма.
short~form~We are going to ___ at home. Be/are?~be~Второе be — смысловой глагол в основе.
short~form~They ___ not going to leave. Is/are?~are~Not следует после are.
sentence~form~Исправь: I going to buy bread.~I am going to buy bread.|I'm going to buy bread.~Обязательное am между I и going.
sentence~form~Исправь: She is going to visits us.~She is going to visit us.~После to основа visit, не visits.
sentence~form~Сделай отрицательным: We are going to drive.~We are not going to drive.|We aren't going to drive.|We're not going to drive.~Not ставится после are.
sentence~form~Сделай отрицательным: He is going to help.~He is not going to help.|He isn't going to help.|He's not going to help.~Три обычных формы отрицания.
sentence~form~Сделай вопросом: You are going to stay.~Are you going to stay?~Are перед you без do.
sentence~form~Сделай вопросом: Jo is going to work.~Is Jo going to work?~Is перед именем Jo.
sentence~form~Собери: what / you / are / going to / cook / ?~What are you going to cook?~What + are + you + going to + cook.
sentence~form~Спроси место: She is going to live in Leeds. Используй Where.~Where is she going to live?~Группа where + is + she.
sentence~form~Are you going to study? Ответь да только о себе.~Yes, I am.~В положительном кратком ответе am не сокращается.
sentence~form~Are you going to travel? Ответь нет за вашу группу.~No, we aren't.|No, we are not.|No, we're not.~Группа отвечает we, not после are.
sentence~form~Исправь: Do they are going to come?~Are they going to come?~У going to вопрос строит be, не do.
sentence~form~Исправь: I am going to am busy.~I am going to be busy.~После going to исходная be.
sentence~form~Переведи через going to: Мы собираемся купить билеты.~We are going to buy tickets.|We're going to buy tickets.|We are going to buy the tickets.|We're going to buy the tickets.~Полная группа going to + buy, оба уместных артиклевых варианта.
sentence~form~Сократи только She is: She is going to call me.~She's going to call me.~She's здесь = she is.
text~form~Покажи две отрицательные формы They are going to wait: полную и сокращённую.~They are not going to wait. They aren't going to wait.~В обеих сохраняются субъект, be и основа wait.
text~form~Объясни, зачем два be в We are going to be ready.~Are строит going to и согласуется с we; be после to сообщает будущее состояние ready.~Функции различны, второе be не лишнее.`,'','Формы'),
 bank('A105-plans','choices','Смысл плана и временные опоры','practice',`short~meaning~I am going to the park. После to указан verb или place?~place~The park — место, это движение.
short~meaning~I am going to visit the park. После to указан verb или place?~verb~Visit — действие в конструкции намерения.
short~meaning~Через четыре дня: in/for four days?~in~In указывает момент в будущем относительно сейчас.
short~meaning~На четыре дня: in/for four days?~for~For задаёт длительность.
short~meaning~Перед next Tuesday нужен on: yes/no?~no~Next Tuesday употребляется без on.
short~meaning~The bus ___ at nine tomorrow. В расписании: leave/leaves?~leaves~Present Simple с -s для bus.
short~meaning~Does the film ___ at eight? Start/starts?~start~После does исходная start.
text~meaning~Согласовано место и время встречи. Дай версии с going to и Continuous, объясни разницу акцента.~We are going to meet at the café at two. We are meeting at the café at two. Первая выделяет намерение, вторая организацию.~Обе нормативны в этом контексте, не придумывать запрет одной.
text~meaning~The branch is breaking. It's going to fall. Почему это не намерение?~A branch has no intention. The sentence predicts a fall from the signs now.~Going to имеет прогнозное значение.
text~evidence~I'm going to book a room. Что не следует из этой фразы? Напиши по-английски.~A room is not necessarily booked yet. This is an intention.~Не считать намерение оплаченной бронью.
speech~meaning~Произнеси I’m going to go / I’m going to the shop; партнёр объясняет, где конструкция намерения, а где движение.~I'm going to go tomorrow. I'm going to the shop now.~Реальная речь; различие задаётся глаголом/местом после to.
text~plan~Собеседнику неудобен вторник. Предложи среду и попроси подтвердить, не заявляй соглашение заранее.~Tuesday doesn't work for you. Are you free on Wednesday? Please confirm the time.~Предложение ещё не взаимное подтверждение.`,'','Выбор смысла'),
 bank('A105-plans','reading','Чтение: подготовка общественного сада','reading',`short~evidence~На какой день запланирована работа? Одно слово.~Saturday~План относится к Saturday.
short~evidence~Во сколько начинается встреча с координатором? Цифры.~9:30|nine thirty~Подтверждённая встреча в half past nine.
short~evidence~Marta уже купила семена: true/false/not stated?~false~Она собирается купить их Friday, текст явно says not bought yet.
short~evidence~Во сколько автобус уезжает с вокзала по расписанию?~8:50|eight fifty~Дано leaves at eight fifty.
short~evidence~Кто привозит инструменты? Имя.~Dev~Dev is bringing the tools.
short~evidence~Обед в кафе забронирован: true/false/not stated?~false~No booking for lunch явно сказано.
short~evidence~Все участники уже согласились остаться после трёх: true/false/not stated?~false~Only Marta and Dev confirmed that part.
short~evidence~Причина выбора субботы указана: yes/no?~no~День дан, причина выбора не сообщается.
short~meaning~The bus leaves at 8:50 — timetable или personal intention?~timetable~Настоящее simple здесь сообщает расписание.
sentence~form~По тексту спроси через going to, что Marta собирается купить.~What is Marta going to buy?~Вопросительная форма is перед Marta.
text~evidence~В 4 предложениях отдели согласованное, намерение и нерешённый обед.~The meeting with the coordinator is confirmed for 9:30. Dev is bringing the tools. Marta is going to buy seeds, but she has not bought them yet. Lunch is not booked.~Не превращать намерения и нерешённые вопросы в завершённые действия.
text~plan~Напиши 80–110 слов участнику: встреча, транспорт, роли, покупка и что ещё нужно уточнить.~We are meeting the garden coordinator at half past nine on Saturday. The bus leaves the station at eight fifty, according to the timetable. Dev is bringing the tools, and Marta is going to buy seeds on Friday. She has not bought them yet. We are going to clear the path before lunch. Lunch is still an open question because there is no café booking. Only Marta and Dev have confirmed the work after three. Please tell the group whether you can stay for that part of the afternoon.~80–110 слов, ясные роли и статусы планов, не механическое совпадение.`,'Marta and Dev are helping to prepare a community garden this weekend. Their group is meeting the garden coordinator at half past nine on Saturday. The coordinator confirmed the time and the gate to use in a message. The group is going to clear the narrow path before lunch and plant flowers near the wall afterwards.\n\nDev is bringing the tools from the club cupboard. Marta is going to buy seeds on Friday; she has not bought them yet. Two other volunteers are bringing water and some fruit. The bus leaves the station at eight fifty according to the timetable. This is the published departure time, not a report that the bus has already left or a guarantee against delays.\n\nThe group discussed lunch in a nearby café, but there is no booking. Some people prefer to bring sandwiches. Marta asks them to decide before Friday evening so that everyone knows what to bring. The work after three is another open question: only Marta and Dev have confirmed that part of the day.\n\nThese notes distinguish agreed arrangements from intentions and unanswered questions. They do not give a reason for choosing Saturday, and they do not describe completed garden work. A useful reply should confirm practical details or identify a problem, not simply repeat that all the plans are final.','Чтение'),
 bank('A105-plans','listening','Аудирование: новая договорённость','listening',`short~evidence~Встреча теперь Tuesday или Thursday?~Thursday~Перенос с Tuesday на Thursday.
short~evidence~Новое время встречи? Цифры или слова.~4:30|four thirty|half past four~Время half past four.
short~evidence~Кто уже подтвердил новое время? Имя.~Lena~Lena agreed to the new time.
short~evidence~Все участники уже подтвердили: true/false/not stated?~false~От адресата ещё ждут ответа.
short~evidence~Где встречаются: café/library/station?~library~Место — outside the library.
short~evidence~Сколько длится запланированный визит: one hour/two hours?~one hour|an hour~План visit for an hour.
short~evidence~Рассказчик уже купил блокнот: true/false/not stated?~false~Still needs to buy; намерение на Wednesday.
short~evidence~Расписание автобуса меняется из-за переноса: true/false/not stated?~not stated~Текст этого не сообщает.
text~plan~Ответь: четверг подходит, но предложи встретиться на 15 минут позже; попроси подтверждение.~Thursday works for me. Could we meet at 4:45 instead? Please confirm whether that works for you and Lena.~Это новое предложение, не самовольное изменение общей договорённости.
speech~plan~Партнёр спрашивает о старом и новом времени. Объясни перенос и нерешённый ответ адресата.~The meeting was on Tuesday, but the proposed day is Thursday at 4:30. Lena agreed, and we are waiting for your reply.~Живое уточнение и точные сведения по аудио.`,'Hi, this is Sam. We need to change our visit from Tuesday to Thursday. Lena agreed to meet at half past four outside the library. Does that time work for you too? We are going to visit for an hour, then walk to the station together. I am going to buy a notebook on Wednesday; I still need one for the notes. Lena is bringing her camera. The library closes at six according to its timetable, so the proposed visit fits before closing time. Please reply before tomorrow evening. I am keeping your place in the group, but I am not treating the new arrangement as agreed by everyone until you answer.','Аудирование'),
 bank('A105-plans','production','План, перенос и договорённость','writing',`sentence~form~Напиши через going to: Она собирается принести карту.~She is going to bring a map.|She's going to bring a map.|She is going to bring the map.|She's going to bring the map.~Going to + bring и обязательное is.
sentence~meaning~Исправь время: We are leaving on next Sunday.~We are leaving next Sunday.~Перед next Sunday on не нужен.
text~plan~Назови три намерения на вымышленные выходные и одно отсутствие намерения.~I am going to visit a market, cook lunch and read a book. I am not going to drive.~Намерения не выдаются за реальную историю ученика.
text~plan~Сформулируй договорённость с другом через Continuous, укажи место, день и время.~We are meeting at the café on Friday at six.~Будущий контекст и согласованная встреча.
text~meaning~Напиши две фразы: расписание автобуса и ваше личное намерение сесть на него.~The bus leaves at nine. We are going to take it.~Расписание и личное решение не сливаются.
text~evidence~Запись I’m going to send the patch tomorrow. Напиши коллегам, что известно и чего пока нет.~The developer plans to send the patch tomorrow. The message does not confirm that the patch is already sent.~Намерение не равно выполненной отправке.
text~plan~Напиши 80–110 слов о вымышленном визите: намерение, согласованная встреча, расписание, нерешённый пункт и вопрос адресату.~Next Friday I am going to visit the science centre with my cousin. We are meeting at the station at nine, and the train leaves at nine twenty. My cousin is bringing a camera. I am going to bring some water and a notebook. The centre opens at ten, so we have time to walk there from the station. Lunch is not arranged yet. Are you going to join us for the visit? Please tell me where you want to eat and whether the meeting time works for you.~80–110 слов; различить намерение, организацию и расписание, задать ясный вопрос.
text~plan~Перенеси встречу из предыдущего вымышленного плана на час позже; явно предупреди, что транспорт нужно пересмотреть.~Can we meet at ten instead of nine? We need a later train. Please confirm before I change the travel plan.~Согласование, а не молчаливое изменение времени.
speech~plan~Договоритесь с партнёром о вымышленном дне: минимум 8 реплик, одно неудобное время и принятая альтернатива.~A: Are you free on Monday? B: Not in the morning. A: What about two? B: Two works. A: Where are we meeting? B: At the library. A: Are you bringing the notes? B: Yes, I am.~Реальная смена ходов, подтверждение времени и распределение вещей.
speech~form~Задай 3 going to-вопроса и ответь на 3 новых вопроса партнёра, следи за краткими ответами.~Are you going to walk? What are you going to bring? Where are you going to meet? — Yes, I am. I'm going to bring a map.~Be и роли собеседников в реально прозвучавших ответах.
text~meaning~Стакан скользит к краю стола. Сделай прогноз через going to, затем опиши своё намерение убрать его.~The glass is going to fall. I am going to move it away from the edge.~Одна форма, разные значения: прогноз предмета и намерение человека.
text~plan~Составь список из 3 вопросов, которые нужны до подтверждения групповой поездки.~Where are we meeting? What time does the train leave? Are we going to have lunch together?~Вопросы собирают информацию, а не объявляют решение заранее.`,'','Письмо и речь'),
 bank('A105-plans','review','Повторение настоящего, прошлого и планов','review',`short~form~Yesterday we ___ at home; tomorrow we are going to go out. Was/were?~were~Прошлая часть с we were.
short~form~She is going to call ___. I/me?~me~Объектная форма после call.
short~form~The bus ___ at seven every Monday. Leave/leaves?~leaves~Расписание Present Simple.
sentence~form~Исправь: Are he going to help?~Is he going to help?~Субъект he требует формы is.
sentence~form~Исправь: We not going to wait.~We are not going to wait.|We aren't going to wait.|We're not going to wait.~Нельзя пропускать are.
short~meaning~For three hours — duration или starting point?~duration~For указывает длительность.
short~meaning~In three hours — через три часа или три часа подряд? Ответь «через»/«подряд».~через~Будущий отсчёт от сейчас.
text~meaning~I’m meeting Jo now / I’m meeting Jo tomorrow. Объясни различие значений одной формы.~Первое обычно процесс сейчас; второе договорённость в будущем. Временной контекст меняет чтение формы.~Не относить всякое -ing только к сейчас.
text~evidence~We are going to visit the museum. Подтверждает ли это купленные билеты? Обоснуй.~No. The sentence describes an intention, not a ticket purchase.~Намерение не подтверждает внешнюю организацию.
text~plan~План изменился: собирались купить стол, теперь решили взять общий. Напиши две фразы, не нужен новый условный оборот.~Our old plan was to buy a table. Now we are going to borrow the shared one.~Смысл изменения и корректное going to.
speech~plan~Партнёр пересказывает ваше предложение как окончательное решение. Уточни, что ждёте ответа другого участника.~That is our proposal. We are waiting for Jo's reply before we confirm it.~Живое уточнение статуса, не выдумка результата.
text~form~Разбери I’m going to be busy и придумай аналогичную фразу про готовность группы.~Am — согласуемая часть, be — основа после to. We are going to be ready.~Две роли be и перенос на we are.`,'','Повторение')
 ],
 tests:[exam('A105-plans','a',`short~form~My sister ___ going to learn to drive. Am/is/are?~is~My sister — единственное лицо.
short~form~We are going to ___ the shelves. Paint/paints?~paint~Основа после going to.
short~form~The pair of shoes ___ going to be useful. Is/are?~is~Главное слово pair.
sentence~form~Исправь: They going to invite us.~They are going to invite us.|They're going to invite us.~Обязательное are.
sentence~form~Отрицай: I am going to order food.~I am not going to order food.|I'm not going to order food.~Отрицание not следует сразу после am.
sentence~form~Сделай вопросом: She is going to collect the parcel.~Is she going to collect the parcel?~Be перед субъектом.
sentence~form~Are you going to cycle? Ответь да только о себе.~Yes, I am.~Не Yes, I'm в конце ответа.
sentence~form~Спроси через What: They are going to make soup.~What are they going to make?~What + are + they + going to + make.
short~meaning~Через пять дней: in/for five days?~in~In отсчитывает момент будущего.
short~meaning~Программа: The tour ___ at noon. Begin/begins?~begins~Present Simple с единственным tour.
short~evidence~«We intend to book on Monday. No booking exists yet». Место забронировано: true/false/not stated?~false~Отсутствие брони прямо дано.
short~evidence~«The train leaves at 8». Он обязательно приедет без задержки: true/false/not stated?~not stated~Расписание не гарантирует фактическую пунктуальность.
text~meaning~Вы с Jo согласовали визит на среду. Построй going to и Continuous; объясни, почему обе формы возможны.~We are going to visit Jo on Wednesday. We are visiting Jo on Wednesday. Намерение и организованный план могут относиться к одному событию.~Не объявлять нормативный вариант ошибкой по механическому ключу.
text~meaning~The ladder is moving. Предскажи падение через going to и объясни отсутствие намерения у лестницы.~The ladder is going to fall. This is a prediction from visible signs, not the ladder's intention.~Различить прогноз и человеческое решение.
text~plan~Напиши 80–110 слов о вымышленной поездке: договорённость, намерения, расписание, нерешённый вопрос и просьба подтвердить.~We are going to visit a small town on Sunday. I am meeting my neighbour at the bus station at eight. The bus leaves at eight fifteen according to the timetable. My neighbour is bringing a map, and I am going to take some water. We are planning a walk beside the river after we arrive. Lunch is not arranged, and we still need to choose a place. Are you going to come with us? Please confirm the meeting time and tell us whether you prefer a café or a picnic.~80–110 слов, точные формы и разные статусы будущих событий.
speech~plan~Согласуйте встречу: 8–10 реальных реплик, отказ от первого времени, новое время, место и распределение вещей.~A: Are you free at ten? B: No, I am working then. A: What about twelve? B: That works. A: Where are we meeting? B: At the gate. A: Are you bringing the map? B: Yes, I am.~Нужны реакция на новую реплику и окончательное подтверждение.
speech~form~Задай партнёру общий и специальный going to-вопрос; затем ответь на его новые вопросы полным и кратким ответами.~Are you going to stay? Where are you going to sleep? — Yes, I am. I'm going to stay with a friend.~Реальные формы и различимый вопрос, до аудио оценки нет.
text~evidence~«Kai is going to ask for leave». Можно ли уже сообщить команде, что отпуск одобрен? Ответь двумя предложениями.~Kai plans to ask for leave. Approval is not confirmed by this statement.~Просьба и её удовлетворение не одно событие.
text~meaning~Различи We’re going to the pool / We’re going to repair the pool.~Первое движение к месту; второе намерение выполнить repair. После to разные типы продолжения.~Форма going без разбора продолжения недостаточна.
text~plan~Предложи перенос с пятницы на субботу и явно запроси подтверждение, не присваивая согласие партнёра.~Can we move our meeting from Friday to Saturday? Please confirm whether Saturday works for you.~Предложение остаётся предложением до ответа.`),
 exam('A105-plans','b',`short~form~The volunteers ___ going to paint the gate. Is/are?~are~Volunteers во множественном числе.
short~form~He is going to ___ early. Leave/leaves?~leave~После to исходная leave.
short~form~The list of jobs ___ going to be useful. Is/are?~is~Главное слово list.
sentence~form~Исправь: She going to call them.~She is going to call them.|She's going to call them.~Обязательное is.
sentence~form~Отрицай: We are going to buy a car.~We are not going to buy a car.|We aren't going to buy a car.|We're not going to buy a car.~Not после are, сокращения нормативны.
sentence~form~Сделай вопросом: He is going to repair the chair.~Is he going to repair the chair?~Вопрос с be, не does.
sentence~form~Are you going to sing? Ответь нет только о себе.~No, I am not.|No, I'm not.~Отрицательное сокращение допустимо.
sentence~form~Спроси через Where: We are going to eat at home. Обращайся к группе через you.~Where are you going to eat?~Смена лица в обращении, порядок вопроса.
short~meaning~Остаёмся на пять дней: in/for five days?~for~For задаёт длительность визита.
short~meaning~Расписание: The exhibition ___ at ten. Open/opens?~opens~Present Simple с -s у единственного субъекта.
short~evidence~«I plan to buy tickets. I do not have any yet». Билеты уже есть: true/false/not stated?~false~Отсутствие явно дано.
short~evidence~«The workshop starts on Friday». Все участники точно придут: true/false/not stated?~not stated~График не подтверждает посещение каждого.
text~meaning~Визит к Sam уже согласован. Построй две формы — going to и Continuous — с пояснением акцента.~We are going to see Sam on Monday. We are seeing Sam on Monday. Одна подаёт намерение, другая организованную встречу.~Обе формы могут быть нормативны, нужна содержательная оценка.
text~meaning~Стакан заметно скользит к краю. Сделай прогноз going to и отличи от намерения человека.~The glass is going to fall. The prediction uses a visible sign; the glass has no plan.~Прогноз не является решением предмета.
text~plan~Напиши 80–110 слов о вымышленном мероприятии: согласованная встреча, намерения, расписание, открытый вопрос и подтверждение.~We are going to help at the school exhibition next Saturday. I am meeting two friends at the main gate at nine thirty. The exhibition opens at ten, so we have time to put our coats away. One friend is bringing the pictures, and I am going to carry the labels. We are staying for two hours. The afternoon plan is still undecided because one person needs to leave early. Are you going to join us? Please confirm when you can arrive and whether you can stay after lunch.~80–110 слов, связный план и честно неокончательное решение.
speech~plan~Согласуйте групповую поездку: 8–10 реплик, два варианта дня, принятый день, время и вопрос о вещи.~A: Shall we go on Tuesday? B: Tuesday doesn't work for me. A: What about Thursday? B: Thursday is fine. A: Are we meeting at nine? B: Yes. A: Are you bringing the tickets? B: Yes, I am.~Новые реакции партнёра, не зачитывание образца вместо диалога.
speech~form~Спроси, что партнёр собирается принести и собирается ли оставаться; ответь на два новых going to-вопроса.~What are you going to bring? Are you going to stay? — I'm going to bring a notebook. No, I'm not.~Be, основа и понятные краткие ответы в реальной речи.
text~evidence~«Rin is going to apply for the job». Подтверждает ли это получение работы? Напиши два предложения.~Rin intends to apply for the job. Getting the job is not confirmed.~Намерение подать заявку не равно успешному результату.
text~meaning~Различи I’m going to the kitchen / I’m going to clean the kitchen.~В первом to + место движения, во втором to + действие clean в намерении.~Нельзя заменить оба продолжения на разговорную gonna без разбора.
text~plan~Предложи вместо 8:00 встретиться в 8:45 и попроси ответ второго участника.~Can we meet at 8:45 instead of 8:00? Please confirm whether the new time works for you.~Новое время явно названо, согласие не выдумано.`)
 ]
};

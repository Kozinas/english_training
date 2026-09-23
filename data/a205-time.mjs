import {bank,exam,examples,goal} from './unit-tools.mjs';
import {actionSources} from './action-reference.mjs';
const id='A205-time';
export default {id,topic:'A205',title:'Когда встречаемся: время, приглашения и помощь',prerequisites:['A205-phrasal','P02-time','A105-will'],references:['time-arrangements','numbers-time','future-choices'],sources:actionSources,
 goals:[goal('time','Выбирать временную рамку и предлог или его отсутствие','forms'),goal('contrast','Различать срок, длительность и момент начала','meaning'),goal('interaction','Предлагать, приглашать, просить и отвечать по смыслу','offers'),goal('evidence','Различать предложение, подтверждение и выполненную встречу','reading'),goal('sound','Передавать время и ключевые детали разборчиво','sounds'),goal('message','Согласовывать детали и писать ясное приглашение','production')],
 explanation:[
 {title:'Предлог — часть английской временной рамки',text:'At eight задаёт точку на часах, on Thursday — день, in October — месяц. Это не буквальные переводы одного русского «в»: выбор определяется английским выражением. Время может быть уточнено сразу на нескольких уровнях: on Thursday at eight in the evening. Не нужно ставить один предлог перед всем набором или пытаться подбирать его по вопросу «когда?». В заданиях с одним полем ответ ограничен указанными вариантами; в свободной речи допускаются нормативные способы передать тот же смысл.'},
 {title:'At, on, in: базовая карта и уточнение дня',text:'At используется с часами, noon, midnight; on — с днями и датами: on Tuesday, on 18 June; in — с месяцами, годами, сезонами: in June, in 2031, in winter. In the morning/afternoon/evening описывает часть дня вообще, но on Tuesday morning и on the evening of 18 June привязаны к конкретному дню. At night обычно означает ночью в общем; in the night возможно для конкретной ночи. Не называй последнее ошибкой во всех ситуациях. At the weekend обычно UK, on the weekend обычно US; это варианты стандарта, а не экзамен на единственный акцент.'},
 {title:'Нулевой предлог — тоже конструкция',text:'Обычно говорим this evening, next Monday, last year, every Friday, today, tomorrow morning без at/on/in. Не on tomorrow и не in next month в базовом значении. Но слово next не запрещает все предлоги рядом с собой: in the next two days — в течение ближайших двух дней, in the last few years — за последние несколько лет. Это другие именные группы с the и количеством. В разговорной речи on перед днями иногда опускается: See you Friday. Для контролируемого задания используй явно заданную полную модель; свободный нормативный вариант не объявляй ошибкой.'},
 {title:'Через сколько, как долго и за сколько',text:'I’ll call in ten minutes сообщает задержку до звонка; I’ll talk for ten minutes — длительность разговора. I completed the puzzle in ten minutes означает время до завершения всей работы. In с числом минут само по себе не означает только будущее: глагол и контекст различают «через» и «за». For не выбирает время автоматически: I waited for ten minutes, I have lived here for a year, I can stay for ten minutes. During the break помещает действие внутрь события; это не замена for ten minutes. During отвечает когда в рамках события, for — сколько длится.'},
 {title:'Граница интервала и крайний срок',text:'From two to four задаёт начало и конец доступного интервала. Это не доказывает, что каждый посетитель провёл там все два часа. Please reply by Friday — ответьте не позже пятницы; earlier is fine. We will wait until Friday — ожидание продолжается до пятницы. Не менять by на until в приглашении с крайним сроком ответа. Before/after показывают порядок относительно события: before lunch, after class. On time — по расписанию, in time for the talk — достаточно рано, чтобы успеть. Можно прийти раньше и быть in time, но из этого одного нельзя узнать точную минуту прибытия.'},
 {title:'Что делает реплика: помощь, просьба или приглашение',text:'Shall I carry the bag? / Can I carry it for you? — говорящий предлагает своё действие. Could you carry the bag? — просит действие собеседника. Would you like a seat? — предлагает предмет/место; Would you like to join us? — приглашает к действию. Shall we meet outside? и Let’s meet outside предлагают общий шаг. Shall I/we характернее для UK; US Can I…? или Would you like me to…? не хуже. После модального can/could/shall основа без to, после would like при действии to: Would you like to help? Не Do you like to join us? для конкретного приглашения.'},
 {title:'Ответ должен сохранять коммуникативный смысл',text:'Yes, please подходит к предложенной вещи или помощи. I’d love to, thank you — к приглашению. I’d love to, but I’m working that evening — вежливый отказ, несмотря на положительное начало. Можно предложить альтернативу: Could we meet on Saturday instead? На Shall I…? Yes, please означает принятие помощи, но не её завершение. На Do you mind…? No, not at all означает отсутствие возражения; лучше добавить I can wait. Нельзя проверять такие ответы по одному yes/no без всей реплики и ситуации. Вежливость зависит также от тона и отношений, не от одного волшебного слова.'},
 {title:'От предложения к подтверждению',text:'I suggest Friday — предложение. Friday works for me — согласие одной стороны. So, Friday at 16:00 at the library? — проверка деталей. Yes, that’s right — подтверждение. Даже согласованный план ещё не доказывает состоявшуюся встречу. Next Friday может пониматься по-разному; уточни дату словами. Запись 04/05 неоднозначна между форматами day/month и month/day. Удалённая встреча требует пояса: 16:00 your local time или явная зона, согласованная обеими сторонами. Не делай сезонную конвертацию часовых поясов на память; проверь актуальный календарь при реальном назначении.'},
 {title:'Разборчивость, письмо и продолжение',text:'В устной договорённости слушатель должен различать thirteen/thirty, Tuesday/Thursday, a.m./p.m. и слово not. Произнеси ключевые детали отдельно и попроси повторить их своими словами: Did you say Thursday the third at thirteen thirty? Если что-то не расслышал, это нормальная часть взаимодействия. В письме нужны цель, место, дата/время, просьба ответить, возможность отказа и статус ещё не решённых деталей. At the end of the session указывает конец события; in the end означает итог обсуждения. Итоговый тест проверяет новый случай, а количество заполненных полей не доказывает качество договорённости.'}
 ],
 examples:examples(`We meet at quarter past six.~Мы встречаемся в четверть седьмого.~Точка на часах с at.
The desk closes at noon.~Стойка закрывается в полдень.~Noon сочетается с at.
The workshop is on Wednesday.~Мастерская в среду.~День с on.
The course starts on 18 June.~Курс начинается 18 июня.~Полная дата с on.
I read in the evening.~Я читаю вечером.~Часть дня вообще с in.
Let’s meet on Wednesday evening.~Давай встретимся в среду вечером.~Уточнение дня даёт on.
They visit in September.~Они приезжают в сентябре.~Месяц с in.
It is quiet at night.~Ночью тихо.~Обобщённая ночь, at night.
Are you free at the weekend?~Ты свободен в выходные?~Обычный UK; US on the weekend.
I’ll call next Tuesday.~Я позвоню в следующий вторник.~Next Tuesday без предлога.
We practise every Saturday.~Мы занимаемся каждую субботу.~Every + день без on.
We’ll decide in the next two days.~Мы решим в ближайшие два дня.~Другая группа с the и количеством допускает in.
I’ll be there in twenty minutes.~Я буду там через двадцать минут.~Задержка до прибытия.
I can stay for twenty minutes.~Я могу остаться на двадцать минут.~Длительность пребывания.
She completed the task in twenty minutes.~Она выполнила задание за двадцать минут.~Время до завершения.
Ask me during the break.~Спроси меня на перерыве.~Внутри события, не длина действия.
The room is available from two to four.~Комната доступна с двух до четырёх.~Границы интервала, не факт присутствия.
Please reply by Friday.~Пожалуйста, ответь не позже пятницы.~Крайний срок, раньше можно.
We can wait until Friday.~Мы можем подождать до пятницы.~Продолжающееся ожидание.
We arrived in time for the talk.~Мы успели к выступлению.~Достаточно рано, не точное время.
Shall I bring extra cups?~Мне принести дополнительные чашки?~Говорящий предлагает своё действие.
Could you bring extra cups?~Не мог бы ты принести дополнительные чашки?~Просьба к собеседнику.
Would you like to join our group?~Хочешь присоединиться к нашей группе?~Конкретное приглашение с to.
I’d love to, but I’m busy that day.~С удовольствием бы, но я занят в тот день.~Отказ, а не принятие.
At the end of the discussion, we checked the date again.~В конце обсуждения мы ещё раз проверили дату.~Конечная точка события, не in the end of.
In the end, we agreed to meet on Thursday at 15:30, but we still need to confirm the room.~В итоге договорились встретиться в четверг в 15:30, но комнату ещё нужно подтвердить.~Частичное согласование не объявляется полностью готовой встречей.`),
 banks:[
 bank(id,'forms','At, on, in или без предлога','practice',`short~time~___ 07:45: выбери at/on/in.~at~Часы задают точку с at.
short~time~___ Tuesday: полная модель at/on/in.~on~День недели с on.
short~time~___ November: at/on/in.~in~Месяц без числа с in.
short~time~___ 2032: at/on/in.~in~Год задаёт временную рамку с in.
short~time~___ Tuesday afternoon: полная модель at/on/in.~on~Уточнённая часть конкретного дня с on.
short~time~___ the morning: без конкретной даты, at/on/in.~in~Часть дня вообще с in.
short~time~___ night: ночь в общем, at/on/in.~at~В обобщённой конструкции at night.
short~time~___ 9 March: at/on/in.~on~Дата с числом, не только месяц.
short~time~___ midnight: at/on/in.~at~Полночь как точка времени.
short~time~___ winter: at/on/in.~in~Время года в этой модели с in.
short~time~___ next Sunday: at/on/in/none.~none~Next Sunday обычно без предлога.
short~time~___ every week: at/on/in/none.~none~Every week не требует этих предлогов.
short~time~___ tomorrow evening: at/on/in/none.~none~Tomorrow evening без on/in.
short~time~___ the next three weeks: внутри ближайших трёх недель, at/on/in.~in~Это группа с the, не простое next week.
short~time~___ the weekend: обычный UK или US, at/on/in; дай один нормативный вариант.~at|on~UK at и US on оба нормативны.
sentence~time~Исправь: See you on tomorrow.~See you tomorrow.~Перед tomorrow в этой модели предлога нет.
sentence~time~Исправь: We meet in Friday morning. Используй полный предлог.~We meet on Friday morning.~Конкретный день задаёт on.
sentence~time~Исправь: She arrived at April. (месяц)~She arrived in April.~Месяц с in, не at.
text~time~Почему in the evening и on Friday evening не противоречат друг другу?~Первое часть дня вообще, второе конкретный вечер пятницы.~Выбор зависит от всей временной группы.
text~time~Напиши один вариант с at the weekend и один с on the weekend; какой нормативен?~Are you free at the weekend? Are you free on the weekend? Оба: обычные UK/US предпочтения.~Не оценивать акцент или региональный вариант как ошибку.`,'','Календарь'),
 bank(id,'meaning','Длительность, срок и момент','practice',`short~contrast~I’ll return ___ ten minutes: через десять минут. In/for?~in~Задержка до возвращения.
short~contrast~I’ll stay ___ ten minutes: длительность. In/for?~for~Как долго длится пребывание.
short~contrast~She finished the form ___ ten minutes: за десять минут. In/during?~in~Время до завершения работы.
short~contrast~Ask ___ the break. During/for?~during~Внутри события the break.
short~contrast~Reply ___ Thursday: не позже четверга. By/until?~by~Крайний срок ответа.
short~contrast~Wait ___ Thursday: продолжай ждать до четверга. By/until?~until~Граница длительного ожидания.
short~contrast~The room is open from nine ___ eleven. To/at?~to~Парная конструкция from…to…
short~contrast~At the end ___ the session: of/in?~of~Конец конкретного события.
text~contrast~Сравни in five minutes в I’ll call… и I finished it…~В первом через пять минут; во втором за пять минут до завершения.~Не переводить in одинаково вне контекста.
text~evidence~Room available from 10 to 12. Доказывает ли это, что Mina была там два часа?~Нет, доступность комнаты не сообщает фактическое присутствие Mina.~Расписание не журнал посещений.
text~contrast~Чем on time отличается от in time for the film?~Первое по расписанию; второе достаточно рано, чтобы успеть к фильму.~Не выдумывать точную минуту по in time.
text~message~Уточни неоднозначное We meet in two hours: тебе нужно знать точное время и пояс.~What exact time do you mean, and which time zone are you using?~Относительная задержка зависит от времени сообщения.`,'','Срок и длительность'),
 bank(id,'offers','Приглашения, помощь и ответы','practice',`short~interaction~Shall I carry your bag? Кто предлагает нести? Speaker/listener?~speaker~I обозначает говорящего.
short~interaction~Could you carry my bag? Кто должен помочь? Speaker/listener?~listener~You обозначает адресата просьбы.
short~interaction~Would you like ___ us? Join/to join?~to join~После would like действие с to.
short~interaction~Shall we ___ here? Wait/to wait?~wait~После shall основа без to.
short~interaction~I’d love to, but I can’t. Это принятие? Yes/no.~no~Вся реплика выражает отказ.
short~evidence~Приглашение отправлено, ответа ещё нет. Встреча подтверждена? Yes/no.~no~Без ответа нельзя объявить согласие.
text~interaction~Прими предложение чашки чая и отдельно прими приглашение в клуб.~Yes, please. I’d love to join, thank you.~Ответ соответствует типу предложения.
text~interaction~Вежливо откажись от пятницы и предложи субботу.~I’d love to, but I’m busy on Friday. Could we meet on Saturday instead?~Отказ не скрыт; есть конкретная альтернатива.
text~interaction~Предложи собственную помощь двумя нормативными формами: Shall I…? и Can I…?~Shall I carry that? Can I carry it for you?~Говорящий предлагает действие; US Can I допустимо.
text~interaction~На Do you mind waiting? согласись так, чтобы no не было понято как отказ.~No, not at all. I can wait here.~Вопрос о возражении, нужна ясная полная реплика.
text~message~Сформулируй подтверждение: вторник, 16:30, библиотека, местное время собеседника.~So, Tuesday at 16:30 at the library, your local time. Is that right?~Проверить детали, не объявлять их подтверждёнными заранее.
text~evidence~Lee ответил Friday works for me, но место не обсуждали. Что уже согласовано и чего не хватает?~Подходит пятница; место и, возможно, точное время ещё нужно уточнить.~Частичное согласие не завершает все детали.`,'','Приглашения'),
 bank(id,'sounds','Слышать дату, время и отказ','speaking',`short~sound~Thirteen и thirty — одинаковое число? Yes/no.~no~13 и 30 нужно различать по всей форме.
short~sound~Можно оценить различение Tuesday/Thursday только по написанным словам? Yes/no.~no~Для произношения требуется услышать речь.
speech~sound~Скажи 13:30 и 15:30; партнёр повторяет цифрами, затем поменяйтесь.~Thirteen thirty. Fifteen thirty.~Проверить фактическое понимание чисел, не только чтение текста.
speech~message~Уточни: Tuesday или Thursday, затем повтори полную договорённость.~Did you say Tuesday or Thursday? Thursday at ten, is that right?~Запрос уточнения и проверка ответа.
speech~sound~Передай I can come / I can’t come, партнёр определяет, принимаешь ли приглашение.~I can’t come on that day, but Saturday is fine.~Отрицание и вся реплика должны быть понятны.
speech~interaction~Предложи помощь с Shall I…?, затем попроси помощь с Could you…?~Shall I bring the cards? Could you bring the pens?~Слушатель различает исполнителя.
speech~message~Произнеси одну дату словами, время с a.m./p.m. и уточни пояс.~The ninth of May at four p.m., your local time.~Избегать неоднозначного цифрового формата.
speech~interaction~Откажись от приглашения, сохрани доброжелательность и предложи другой день.~Thank you for asking. I can’t make it on Monday. Would Wednesday work?~Интонация и смысл, не просто слово please.
text~sound~ASR потерял can’t и записал can. Что проверить перед оценкой?~Прослушать исходное аудио и уточнить намерение говорящего.~Не считать ошибку распознавания доказанной грамматической ошибкой.
speech~message~Партнёр сообщает три детали встречи; перескажи их и попроси исправить неточность.~So, the library, Friday, half past two. Have I got that right?~Детали берутся из ответа партнёра.`,'','Произношение'),
 bank(id,'reading','Чтение: цепочка приглашений','reading',`short~evidence~Какой день предложила Rosa первым? Friday/Saturday?~Friday~Первое предложение было на пятницу.
short~evidence~Milan принял пятницу: true/false/not stated?~false~Он отказался из-за работы.
short~evidence~Какой день в итоге подходит обоим?~Saturday~Оба подтвердили субботу.
short~evidence~Согласованное время начала? HH:MM.~14:30|2:30~Half past two in the afternoon.
short~evidence~До какого времени доступна комната? HH:MM.~16:00|4:00~Available until four.
short~evidence~Комната уже подтверждена центром: true/false/not stated?~false~Центр ещё не подтвердил запрос.
short~evidence~Nell хочет прийти: true/false/not stated?~not stated~Её ответа нет, желание прийти или отказаться не сообщено.
short~evidence~Десять минут в сообщении Rosa — длительность игры или задержка до звонка? Duration/delay?~delay~She will call in ten minutes.
text~interaction~Почему I’d love to, but I’m working не является принятием первого приглашения?~Продолжение прямо объясняет невозможность прийти в предложенное время.~Оценивать всю реплику, не положительное начало.
text~contrast~Различи reply by Thursday и room until four в этой истории.~Первое крайний срок ответа, второе конечная граница доступности комнаты.~By не заменяет until без изменения смысла.
text~message~Напиши обновление для Nell: согласованные день/время, неподтверждённая комната, просьба ответить.~Saturday at 14:30 works for Rosa and Milan. The room is not confirmed. Please reply by Thursday evening.~Не объявлять Nell участницей без её ответа.
text~evidence~Можно ли вывести присутствие всех друзей из доступности комнаты до 16:00?~Нет, расписание комнаты не сообщает будущую явку или длительность пребывания каждого.~Не смешивать ресурс и действия людей.`,
 `Rosa wants to organise a small board-game afternoon for friends from her language club. Her first message suggests meeting at the community centre on Friday evening. Milan replies, “I’d love to, but I’m working that evening. Could we meet on Saturday instead?” Rosa understands this as a polite refusal of Friday, not as an acceptance followed by an unrelated comment.

They exchange two more messages and agree that Saturday at half past two in the afternoon works for both of them. Rosa writes the time as 14:30 and says that all times in the conversation are local times at the centre. The notice says a small room is available until four, but the centre has not confirmed their request to use it. Rosa makes that limitation clear. Agreeing on a time with Milan does not automatically reserve the room.

Rosa also invites Nell. She asks Nell to reply by Thursday evening so that she can prepare enough sets of cards. Nell has not replied when the story ends. Rosa does not treat silence as agreement or refusal. She says she will call Milan in ten minutes with an update about the room. That is the delay before the call, not a promise to speak for ten minutes.

Milan offers to bring paper and asks whether Rosa would like him to print a short rules sheet. Rosa accepts the paper but says she wants to check the game first before asking for printed rules. No printing is confirmed. The friends hope to spend the afternoon practising useful phrases while they play. They know that an invitation, an accepted plan, a room booking and actual attendance are different things. Their next step is to ask the centre for a clear reply, then send everyone one message with the final details.`, 'Чтение'),
 bank(id,'listening','Аудирование: повтори детали','listening',`short~evidence~Кто говорит?~Dev~Имя Dev дано в начале.
short~evidence~Предлагаемый день: Tuesday/Thursday?~Thursday~Говорящий исправляет возможное смешение, Thursday.
short~evidence~Время начала в 24-часовом формате? HH:MM.~13:30~Half past one in the afternoon.
short~evidence~Сколько минут Dev может остаться? Цифрой.~45~Длительность for forty-five minutes.
short~evidence~Крайний срок ответа: noon/midnight?~noon~Нужно reply by noon tomorrow.
short~evidence~Встреча уже подтверждена обоими: true/false/not stated?~false~Dev ещё просит подтверждение, ответа нет.
text~contrast~Что означает in fifteen minutes в сообщении?~Dev уйдёт из дома через пятнадцать минут; это не длина встречи.~Различить задержку и длительность.
text~interaction~Какую помощь он предлагает и подтверждена ли её необходимость?~Принести дополнительные карандаши; он спрашивает, нужны ли они.~Предложение не равно принятию.
text~message~Составь уточнение даты и повтори время словами.~Which date is that Thursday? Did you say half past one in the afternoon?~День без даты нуждается в уточнении.
text~evidence~Можно ли сделать вывод, что библиотека забронирована?~Нет, сообщение задаёт предлагаемое место и прямо не подтверждает бронирование.~План не считать ресурсом с подтверждённым доступом.`,
 `Hi, this is Dev. Would you like to meet at the library on Thursday? I mean Thursday, not Tuesday. I suggest half past one in the afternoon, so that is thirteen thirty. Please check which date you mean when you reply, because I do not want us to choose different Thursdays. These are the library's local times.

I can stay for forty-five minutes. I would like to practise giving directions and compare our maps. Shall I bring some extra pencils? Please reply by noon tomorrow if you can. I am leaving home in fifteen minutes, so I may not see your answer immediately. That does not mean I have changed the suggested meeting time. I have not reserved a library room yet. This message is an invitation and a request to confirm the details, not a completed booking. If Thursday does not work for you, suggest another day and we can discuss it. Please repeat the date and time in your reply so we can check them together.`, 'Аудирование'),
 bank(id,'production','Письмо и согласование встречи','writing',`text~message~Напиши 3 строки вымышленной договорённости: цель, день/время/место, просьба подтвердить.~Would you like to practise our talk? Saturday at ten at the library could work. Please confirm the date and time.~Предложение не выдаётся за подтверждение.
text~time~Исправь: We meet in Monday at morning. Reply until Friday. (срок ответа)~We meet on Monday in the morning. Reply by Friday.~Конкретный день, общая часть дня и крайний срок.
text~message~Напиши 100–140 слов приглашения в вымышленный учебный клуб: интересы, дата словами, время, место, срок ответа и предложение помощи.~Hello everyone, would you like to join a small drawing session on Saturday the twelfth of October? We hope to practise explaining shapes and giving useful feedback. I suggest starting at ten in the morning at the community centre. All times in this message are local times at the centre. The room is available for two hours, but you can leave earlier if you need to. Please reply by Wednesday evening so that I can prepare enough paper. Shall I bring some extra pencils for anyone who needs them? If the date does not work for you, suggest another one. I am waiting for the centre to confirm the room, so I will send a final update before the session.~100–140 слов; приглашение, ясные детали, граница неизвестного, не вымышленная бронь.
text~message~Напиши 100–140 слов ответа: вежливо откажись от первого дня, предложи альтернативу, уточни длительность/пояс и предложи помощь.~Thank you for inviting me to the discussion group. I would love to join, but I cannot come on Friday because I have another commitment. Could we meet on Sunday instead? I am free in the afternoon, and I can stay for about an hour. When you say four o'clock, do you mean your local time or mine? Please also confirm the date in words so that I do not confuse the day and month. I can bring a printed map for our activity if that would help. I have not printed it yet because we may want to change the route. Let me know whether Sunday works for the others before we treat it as a confirmed plan.~100–140 слов; отказ явный, вопрос уточняет нужные детали, помощь не объявлена выполненной.
text~message~Напиши 100–140 слов итогового сообщения после вымышленного обсуждения: согласованное, неизвестное, срок, просьба, не выдавай план за состоявшуюся встречу.~Hello team, we have agreed to meet on Tuesday the sixth of May at half past three in the afternoon. We will use the community centre's local time. The purpose is to compare our short presentations and choose the order of the speakers. The centre has confirmed the small room from three to five, so we should have enough time to prepare before the discussion starts. Please send your topic by Monday evening. We do not yet know whether the projector will be available. Could someone ask the centre about that? I can bring paper as a backup. This message confirms our plan, not our attendance. Please tell the group if your availability changes.~100–140 слов; чётко разделить доступность ресурса, будущую явку и неизвестное оборудование.
text~interaction~Ответь на Would you like some water? и Would you like to practise? так, чтобы обе реплики были уместны.~Yes, please. I’d love to practise, thank you.~Различие предмета и действия, а не механический один ответ.
speech~message~Назначьте с партнёром встречу: первое время ему не подходит, он предлагает другое; уточните дату, место и длительность.~Could we meet later? What date do you mean? Let’s confirm the time again.~Не читать заранее согласованный сценарий без реакции.
speech~interaction~Предложи помощь, партнёр отказывается и просит другое; отреагируй и уточни предмет.~Shall I bring paper? No, thanks. Could you bring pens instead? How many?~Сменить действие по реальному ответу.
text~evidence~Исправь Everyone will attend: I sent all the invitations.~I sent the invitations, but I don’t know who will attend yet.~Отправка не подтверждает явку.
text~message~Сохрани первоначальное приглашение и исправленное; объясни две правки после проверки.~I replaced until with by for the deadline. I added the time zone.~Только реальные правки, не выдуманная история обучения.`,'','Письмо и диалог'),
 bank(id,'review','Смешанная договорённость и перенос','review',`short~time~___ this afternoon: at/on/in/none.~none~This afternoon без этих предлогов.
short~contrast~Please finish ___ noon: не позднее полудня. By/until?~by~Срок завершения, не продолжительность работы.
short~contrast~We discussed it ___ half an hour. For/during?~for~Длительность выражена числом времени.
sentence~interaction~Исправь: Would you like come with us?~Would you like to come with us?~Приглашение с to-infinitive.
text~interaction~Откажись от утра и предложи вечер без грубости.~Thanks for inviting me. I can’t come in the morning. Could we meet in the evening?~Отказ и конкретная альтернатива.
text~time~Почему нельзя автоматически считать 04/05 одной и той же датой у всех участников?~Разные форматы day/month и month/day; нужно назвать месяц словами.~Не гадать по стране без уточнения.
text~evidence~Комната открыта до шести; Lee согласился прийти. Какие факты о состоявшейся встрече ещё неизвестны?~Приехал ли Lee, когда и сколько оставался; план ещё не событие.~Доступность и согласие не доказывают посещение.
speech~sound~Партнёр диктует время с thirteen/thirty, повтори его и уточни a.m./p.m. при необходимости.~Did you say thirteen thirty?~Оценка по реальному аудио и ответу.
text~message~Через 3 дня напиши новое приглашение на другую активность: минимум 6 предложений и явный неподтверждённый пункт.~Would you like to join a reading group? I suggest next Saturday. We could start at eleven. Please reply by Thursday. I can bring copies. The room is not confirmed yet.~Новый связный текст, не копия прежнего.
speech~message~Через 7 дней партнёр меняет место и время новой встречи; согласуйте детали без страницы и перескажите итог.~So, Sunday at two at the new café. Is that your local time?~Самостоятельное взаимодействие и отложенная оценка, не автоматический флаг.`,'','Повторение')],
 tests:[exam(id,'a',`short~time~___ 18:20: at/on/in.~at~Точка на часах с at.
short~time~___ August: at/on/in.~in~Месяц без числа с in.
short~time~___ Sunday evening: полная модель at/on/in.~on~Определённый день задаёт on.
short~time~___ next month: at/on/in/none.~none~Next month обычно без предлога.
short~time~___ the weekend: один допустимый UK/US вариант, at/on/in.~at|on~Оба региональных варианта нормативны.
short~contrast~I can talk ___ fifteen minutes: длительность. In/for?~for~For обозначает длительность разговора.
short~contrast~Send the title ___ Tuesday: не позже вторника. By/until?~by~Крайний срок, раньше можно.
short~contrast~Wait ___ the tutor arrives. By/until?~until~Ожидание продолжается до события.
short~interaction~Shall I print a copy? Печать предлагает speaker/listener?~speaker~I — говорящий, предлагающий своё действие.
short~interaction~Would you like ___ our quiz? To try/trying?~to try~Конкретное приглашение с to.
short~evidence~I sent an invitation; no reply yet. Согласие известно? Known/unknown?~unknown~Молчание не доказывает согласие или отказ.
short~sound~Thirteen thirty и three thirty — одно время? Yes/no.~no~13:30 и 03:30/15:30 различны; нужен контекст второй формы.
sentence~time~Исправь: The meeting is in Saturday. Используй on.~The meeting is on Saturday.~День недели с on в полной модели.
sentence~time~Исправь: I’ll call on next Wednesday.~I’ll call next Wednesday.~Next Wednesday без on.
sentence~interaction~Исправь: Could you to bring the notes?~Could you bring the notes?~После could основа без to.
text~contrast~Сравни I’ll arrive in thirty minutes / I’ll stay for thirty minutes.~Первое задержка до прибытия, второе длительность пребывания.~Нельзя менять in/for без смены смысла.
text~interaction~Вежливо откажись от приглашения на среду и предложи воскресенье.~Thank you, but I can’t come on Wednesday. Would Sunday work instead?~Отказ и альтернатива, не ложное принятие.
text~message~Напиши 100–140 слов приглашения на вымышленный обмен рецептами: дата словами, часы, место, длительность, срок ответа, помощь и неподтверждённая деталь.~Would you like to join a small recipe exchange on Sunday the eighth of June? We plan to meet at eleven in the morning at the neighbourhood centre, using the centre's local time. The discussion should last for about an hour. You can bring one simple recipe and explain why you like it. Please reply by Thursday evening so that we can prepare enough copies. I can print your recipe if you send it to me beforehand. We have not confirmed whether the kitchen will be available, so please do not bring food that needs heating. This is an invitation, not a final room confirmation. I will send an update when the centre answers our question.~100–140 слов; полные детали, предлоги, реальный смысл приглашения и неизвестного.
speech~message~Договоритесь о новой встрече; партнёр не может в первый день. Уточни дату, пояс и время и перескажи итог.~Would another day work? Which date do you mean? So, four p.m., your local time?~Реальная реакция и подтверждение, не монолог.
speech~sound~Продиктуй две разные даты и время, затем проверь пересказ слушателя.~Did you hear the eighth or the eighteenth?~Разборчивость и исправление требуют записи.
text~evidence~Pat подтвердил день, но никто не ответил о комнате. Можно ли объявить бронь готовой?~Нет, согласие участника и подтверждение комнаты — разные факты.~Не выдумывать доступность ресурса.
text~interaction~Чем Shall I send it? отличается от Could you send it?~В первом отправку предлагает говорящий; во втором просит адресата.~Различить роли, не только вежливость.
text~contrast~Room open from 12 to 15. Почему нельзя заключить, что все занимались три часа?~Это интервал доступности, а не журнал действий каждого участника.~Предел ресурса не доказывает длительность участия.
text~time~Можно ли всегда исправлять in the night на at night? Объясни.~Нет, in the night может относиться к конкретной ночи, at night обычно обобщает.~Учитывать контекст, а не запрет одной формы.`),
 exam(id,'b',`short~time~___ quarter to nine: at/on/in.~at~Выражение часов с at.
short~time~___ 2040: at/on/in.~in~Год задаёт временную рамку с in.
short~time~___ 21 February: at/on/in.~on~Дата с числом требует on в полной модели.
short~time~___ every morning: at/on/in/none.~none~Every morning обычно без предлога.
short~time~___ the next four days: в ближайшие четыре дня, at/on/in.~in~Группа с the не равна простому next day.
short~contrast~She completed the model ___ an hour: за час. In/for?~in~Время до завершения, не длительность незавершённого процесса.
short~contrast~Ask your question ___ lunch. During/for?~during~Внутри события lunch.
short~contrast~Finish ___ six: не позже шести. By/until?~by~Срок завершения с by.
short~interaction~Could you bring a chair? Действие просим у speaker/listener?~listener~Просьба к you, не предложение действия I.
short~interaction~Let’s ___ outside. Wait/to wait?~wait~После let’s основа без to.
short~evidence~The host has not answered the booking request. Бронь уже подтверждена? Yes/no.~no~Запрос не равен подтверждению.
short~sound~ASR потерял not. Доказана ошибка ученика только этим текстом? Yes/no.~no~Нужно прослушать оригинал.
sentence~time~Исправь: See you in Thursday afternoon. Используй on.~See you on Thursday afternoon.~Конкретный день с on.
sentence~time~Исправь: We practise on every Sunday.~We practise every Sunday.~Every Sunday без on в этой базовой модели.
sentence~interaction~Исправь: Would you like sharing a table? (приглашение)~Would you like to share a table?~Would like + to для приглашения.
text~contrast~Объясни разницу by Monday и until Monday для ответа и ожидания.~Reply by Monday — ответить не позднее; wait until Monday — ждать до понедельника.~Выбор связан с типом действия.
text~interaction~На предложение помощи ответь отказом и предложи полезную альтернативу.~Thanks, but I don’t need more paper. Could you bring a pen instead?~Вежливо, ясно, новый объект помощи.
text~message~Напиши 100–140 слов ответа на вымышленное приглашение: первый день не подходит, другой день/время, уточнение даты/пояса, длительность, помощь и что не согласовано.~Thank you for inviting me to the map workshop. I would love to take part, but I cannot come on Tuesday afternoon. Could we meet on Thursday instead? I am free after three, and I can stay for about ninety minutes. Please confirm the date in words because the numbers in the first message could mean two different dates. When you suggest four o'clock, is that the centre's local time? I can bring coloured pencils if they would be useful. I have not bought extra paper yet because I do not know how many people will attend. Let me know whether the new time works for everyone before we confirm the arrangement.~100–140 слов; отказ/альтернатива, разные временные смыслы, помощь не выполненный факт.
speech~message~Согласуйте с партнёром новый день после переноса; он предлагает неоднозначные 04/05 и four. Уточни обе детали.~Do you mean the fourth of May or the fifth of April? Four a.m. or p.m.?~Уточнение не подменяется догадкой, ответ реально учитывается.
speech~sound~Произнеси приглашение и мягкий отказ с but; слушатель должен понять, состоится ли встреча по этой паре реплик.~I’d love to, but I can’t come that day.~Понимание всей фразы, не только положительного начала.
text~evidence~Двое приняли приглашение, третий молчит. Как честно описать состав группы?~Двое согласились; ответ третьего неизвестен, его нельзя включать как подтверждённого участника.~Отсутствие ответа не является доказанным отказом.
text~interaction~Предложи собственную помощь с Can I…? и объясни, почему Shall I…? не единственный нормативный выбор.~Can I carry those books for you? Оба возможны; shall чаще UK, can также обычен.~Не навязывать один региональный вариант.
text~contrast~Что можно и нельзя заключить из We arrived in time for the film?~Мы успели к фильму; точная минута прибытия и строгое совпадение с расписанием не сообщены.~In time не обязательно on time.
text~time~Сравни at the end of the meeting и in the end.~Первое конкретная конечная часть встречи; второе итог событий или выбора.~Не писать in the end of для первого смысла.`)]};

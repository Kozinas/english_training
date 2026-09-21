import {bank,exam,examples,goal} from './unit-tools.mjs';
import {beQuestionSources} from './be-questions.mjs';

export default {
 id:'P04-statements',topic:'P04',title:'Полное предложение: порядок слов, согласование и отрицание',prerequisites:['P03-possession'],references:['be-questions','determiners-possession'],sources:beQuestionSources,
 goals:[goal('structure','Собирать предложение и согласовывать be с главным словом','practice'),goal('negative','Выражать отрицание полной и сокращённой формой','practice'),goal('meaning','Отделять отрицательный факт от неизвестного и писать связное сообщение','production')],
 explanation:[
  {title:'Не перевод слов, а сборка сообщения',text:'В P01 ты уже встретил I am и she is, в P03 — целые группы the small boxes / my colleague’s notebook. Теперь соединяем их в устойчивую конструкцию. Сначала определи предмет сообщения: кто или что? Затем поставь am/is/are. После связки сообщи роль, признак или место: The new room is quiet; The new room is upstairs. По-русски «Комната наверху» — полное предложение без произнесённой связки. В нейтральном английском сообщении нужно The room is upstairs. Не вставляй произвольное it рядом с уже названным подлежащим: The room it is upstairs здесь не базовая модель.'},
  {title:'Подлежащее может состоять из нескольких слов',text:'В The label on these boxes is wrong подлежащее — вся группа the label on these boxes, но число задаёт главное слово label. В The labels on this box are wrong главным будет labels. Найди ядро группы, прежде чем выбирать is/are: не ориентируйся на ближайшее к глаголу существительное. A colleague of mine is here — один коллега. My colleague and I are here — два участника, по смыслу we. I согласуется с am только когда само является подлежащим, а не частью такого перечисления. Не нужно переставлять слова внутри группы ради согласования.'},
  {title:'Что можно поставить после be',text:'Be связывает участника с описанием: I am a learner (роль), I am tired (состояние), I am at home (место). Перед единственным исчисляемым названием роли нужен определитель: a learner, не просто learner. Перед прилагательным tired артикль не нужен; a tired learner уже целая именная группа. Прилагательное не получает -s: The rooms are quiet. Be не универсальная приставка ко всем русским глаголам. I work here — другая модель; I am work here неверно для «Я работаю здесь». Самостоятельно строить вопросы с work будем в A101; здесь не смешиваем две системы.'},
  {title:'Not меняет утверждение, но не порядок всей фразы',text:'Для отрицания вставь not сразу после be: The room is not quiet; The rooms are not upstairs; I am not the host. Сохрани остальные части, если меняешь только полярность. Не The room not is quiet и не The room no quiet: no и not выполняют разные задачи. Don’t не нужно перед обычной связкой: не I don’t am ready. При этом Don’t be late из P02 — правильное отрицательное побуждение, а не сообщение о своём состоянии. Назначение фразы определяет механизм, а не само присутствие слова be.'},
  {title:'Сокращение сохраняет весь смысл',text:'I am not → I’m not. Для is/are доступны две модели: She is not → She isn’t / She’s not; They are not → They aren’t / They’re not. Нельзя удалить и is, и not или собрать двойное сокращение she’sn’t. В этой базовой модели используй I’m not, а не механическое am + n’t. Полные формы нормальны, особенно для контраста и ясной письменной записи; сокращённые естественны в разговоре. Апостроф показывает пропуск букв, не принадлежность. The host’s late здесь = the host is late; the host’s name — другая конструкция из P03.'},
  {title:'Отрицание не сообщает противоположность автоматически',text:'The room is not warm не обязательно значит The room is cold: она может быть прохладной. The printer is not ready не доказывает, что он сломан. Jo is not here не доказывает, что Jo дома. В чтении различай true, false и not stated: опровергнутый факт отличается от факта, о котором ничего не сказано. Для собственного сообщения используй I’m not sure, когда данных нет. Не маскируй догадку грамматически уверенным утверждением. Уточнение важнее гладкой, но выдуманной фразы — особенно в технической работе.'},
  {title:'Связность и область отрицания',text:'Соедини противопоставленные сообщения через but: The room is small, but it is quiet. And добавляет факт: The room is quiet and the chairs are comfortable. Because вводит причину: I am not ready because my notes are missing. После союза может понадобиться новое подлежащее и be; не вычёркивай их автоматически. Более сложный контраст: Not all the boxes are empty означает «не все», а не «ни одна». The boxes are not all empty допускает часть пустых коробок. Это задание на смысл; не превращай его в правило механически переносить not в любое место.'},
  {title:'Проверка собственного сообщения',text:'Работай в два прохода. Сначала запиши факты связным текстом, не останавливаясь после каждого слова. Затем подчеркни подлежащее и be в каждом предложении, проверь главное слово группы, позицию not, артикли из P03 и понятность it/they. Сохрани исходную и исправленную версию. Для устной практики партнёр должен восстановить состояние предметов по твоим словам; если отрицание не было слышно, попроси повторить смысловую группу. Совпадение текста распознавания само по себе ничего не говорит о качестве произношения.'}
 ],
 examples:examples(`The room is upstairs.~Комната наверху.~Подлежащее + is + место; русская нулевая связка не переносится.
The rooms are upstairs.~Комнаты наверху.~Множественное rooms выбирает are.
I am the host today.~Сегодня я ведущий.~I + am; роль известна участникам, поэтому the.
My colleague and I are here.~Мы с коллегой здесь.~Два участника образуют we, не I am.
The label on these boxes is wrong.~Надпись на этих коробках неверна.~Главное слово label, а не boxes.
The labels on this box are wrong.~Надписи на этой коробке неверны.~Главное labels требует are, несмотря на соседнее box.
She is tired. She is a tired learner.~Она устала. Она уставшая ученица.~Прилагательное без артикля; learner как единственное исчисляемое с a.
The room is not available.~Комната недоступна.~Not после is, остальные части сохраняются.
The rooms are not empty.~Комнаты не пусты.~Отрицание не меняет число подлежащего.
I’m not the organiser.~Я не организатор.~Сокращение I am, затем отдельное not.
He isn’t at home. He’s not at home.~Он не дома.~Две правильные модели одного отрицания.
We aren’t late. We’re not late.~Мы не опоздали.~Оба варианта сохраняют we + are + not.
The screen is off, but the computer is on.~Экран выключен, но компьютер включён.~But связывает контраст, не добавляет отрицание автоматически.
The printer is not ready. Its cable is missing.~Принтер не готов. Его кабель отсутствует.~Конкретная причина; not ready не равно broken.
Jo is not here. Jo’s location is unknown.~Джо здесь нет. Местоположение Джо неизвестно.~Из одного отрицания не выводится другое место.
Not all the chairs are free.~Не все стулья свободны.~Часть может быть свободна; не утверждается, что все заняты.
The two cards beside the new screen are mine, but the card in the drawer is yours.~Две карточки у нового экрана мои, а карточка в ящике твоя.~Две группы с разным главным словом и отдельным согласованием.
The room is quiet, but I’m not ready because my notes are missing.~Комната тихая, но я не готов: мои записи отсутствуют.~Связаны факт, контраст и причина; смысл не сводится к вставке одного is.`),
 banks:[
  bank('P04-statements','practice','Сборка, преобразование и исправление','practice',`short~structure~The address on these cards ___ correct. Вставь am/is/are.~is~Главное address — единственное; cards относится к уточнению.
short~structure~The cards in this envelope ___ mine. Вставь am/is/are.~are~Главное cards во множественном, не ближайшее envelope.
short~structure~My neighbour and I ___ outside. Вставь am/is/are.~are~Два участника соответствуют we.
short~structure~I ___ available now. Вставь am/is/are.~am~Здесь подлежащее только I.
sentence~structure~Собери нейтральное утверждение: is / this room / quiet.~This room is quiet.~Сначала подлежащее, потом связка и признак.
sentence~structure~Собери: the notes in my bag / useful / are.~The notes in my bag are useful.~Вся группа подлежащего остаётся вместе.
sentence~structure~Добавь только недостающую связку: My phone on the desk.~My phone is on the desk.~Один phone требует is перед местом.
sentence~structure~Исправь только связку: The colour of these folders are red.~The colour of these folders is red.~Главное colour, а не folders.
sentence~structure~Исправь только лишний артикль: She is a busy.~She is busy.~Busy — прилагательное без следующего существительного.
sentence~negative~Сделай отрицание без сокращений: The door is open.~The door is not open.~Not идёт после is, остальные слова сохраняются.
sentence~negative~Сделай отрицание без сокращений: These cables are new.~These cables are not new.~Are not согласуется с множественным.
sentence~negative~Сделай отрицание без сокращений: I am in room A.~I am not in room A.~I am not, а не I not am.
sentence~negative~Раскрой сокращение: We aren’t outside.~We are not outside.~Aren’t = are not; отрицание нельзя терять.
sentence~negative~Раскрой сокращение: It’s not my bag.~It is not my bag.~Здесь ’s означает is, а не принадлежность.
sentence~negative~Сократи She is not busy любым из двух изученных способов.~She isn't busy.|She's not busy.~Можно сократить is not или she is, но не обе пары сразу.
sentence~negative~Сократи They are not here любым из двух изученных способов.~They aren't here.|They're not here.~Оба варианта сохраняют смысл отрицания.
sentence~negative~Сократи I am not late.~I'm not late.~В базовой модели сокращается I am.
sentence~negative~Исправь положение not: The box not is empty.~The box is not empty.~Not после связки, не перед ней.
sentence~negative~Исправь сообщение о состоянии: I don’t am tired. Используй полную форму.~I am not tired.~Обычное be образует отрицание без do.
short~meaning~Из “The laptop is not ready” следует “The laptop is broken”? Yes/no?~no~Неготовность не доказывает неисправность.
text~meaning~Объясни, почему “Jo is not in the office” не даёт права написать “Jo is at home”.~Jo may be somewhere else. The sentence only excludes the office.~Нужно различить отрицание одного места и доказательство другого.
text~meaning~Составь по данным две связанные фразы: кабинет тихий; ты не готов; причина — нет записей. Не добавляй других фактов.~The office is quiet, but I am not ready because my notes are missing.~Сохранены три факта, есть be и причинная связь; другая естественная формулировка допустима.`),
  bank('P04-statements','reading','Чтение: сообщение о готовности комнаты','reading',`short~meaning~Какую комнату описывает Alex: C или D?~C|room C~В начале отчёта названо room C.
short~structure~В The list of guests is on the desk выпиши главное существительное подлежащего.~list~Guests находится внутри группы of guests; число задаёт list.
short~meaning~Сколько стульев у стены? Ответ цифрой.~6|six~Шесть стульев готовы у стены.
short~meaning~Стулья у окна готовы? Yes/no?~no~Два стула у окна ещё не чистые.
short~meaning~Экран включён? Yes/no?~yes~Screen is on — положительный факт.
short~meaning~Принтер сломан? Выбери true/false/not stated.~not stated~Сообщено лишь отсутствие кабеля и неготовность.
short~meaning~Pat дома? Выбери true/false/not stated.~not stated~Из not in room C дом не следует.
short~meaning~Alex — ведущий встречи? Yes/no?~no~Alex помогает с комнатой, ведущая — Jo.
sentence~negative~Раскрой предложение из отчёта “I’m not the host”.~I am not the host.~Сохраняется отрицание роли, а не отрицание присутствия.
text~meaning~Объясни, почему два предложения о стульях не противоречат друг другу.~The six chairs by the wall are ready, but the two by the window are not clean.~Речь о разных наборах; не переносить факт на все стулья.
text~meaning~Напиши 3–4 предложения для Jo: что готово, что не готово, что о Pat неизвестно.~The screen is on. Six chairs are ready. The printer is not ready because its cable is missing. Pat’s location is unknown.~Нужны положительный и отрицательный факт, причина, честная неизвестность.
text~structure~Выпиши две длинные группы подлежащего из текста и объясни is/are у каждой.~The list of guests is ...: list, singular. The two chairs by the window are ...: chairs, plural.~Проверяется выделение главного слова, а не длина группы.`,
 `Alex writes a preparation note for Jo before a practice meeting. “I am in room C. The room is upstairs and it is quiet. The list of guests is on the desk. The names on the list are clear, but the date at the top is wrong. Today’s meeting is on Thursday, not Friday.
The six chairs by the wall are ready. The two chairs by the window are not clean yet. Please use the six chairs by the wall first. The screen is on and the small computer is ready. The printer is not ready because its cable is missing. I am not sure whether the printer is broken; there is no test result.
Pat is not in room C. Pat’s location is unknown to me. I am not the host today; Jo is the host. I am here to help with the room. The door is open, but the window is closed. The blue folder on the desk is Jo’s, and the two notebooks beside it are mine.”
Jo reads the note. It separates known facts from missing information. Not ready does not automatically mean broken, and not here does not automatically mean at home.`),
  bank('P04-statements','listening','Аудирование: факты, исправления и неизвестное','listening',`short~meaning~В какой комнате говорящий? Напиши букву.~B|room B~Говорящий сразу называет room B.
short~meaning~Дверь открыта? Yes/no?~no~The door is not open.
short~meaning~Сколько столов готовы? Ответ цифрой.~3|three~Три стола у окна готовы.
short~meaning~Лампа у двери включена? Yes/no?~no~Сказано off; это не утверждение о поломке.
short~meaning~Лампа сломана? True/false/not stated?~not stated~Причина выключенного состояния не известна.
short~meaning~Кто ведущий: Kim или Sam?~Sam~Kim прямо отрицает свою роль и называет Sam.
sentence~negative~Запиши услышанный факт о двери полной формой: The door ...~The door is not open.~Not относится к open; не подменять формой «двери нет».
text~meaning~Передай два противопоставленных факта о листах и папках.~The sheets on the table are blank, but the folders are not empty.~Разные предметы и разная полярность не смешиваются.
text~meaning~Что известно о Lee и чего не известно? Напиши два предложения.~Lee is not in room B. Lee’s location is unknown.~Отрицание места не превращается в положительный адрес.
speech~meaning~Передай партнёру короткий отчёт о комнате без догадок; он уточняет один неясный факт.~Room B is downstairs. Three tables are ready. The lamp is off, but I’m not sure why.~Нужна реальная речь и реакция на уточнение; транскрипт не подтверждает произношение.`,
 `Hello, this is Kim. I am in room B downstairs. The door is not open, but I am inside the room. Three tables by the window are ready. The sheets on the middle table are blank. The folders beside them are not empty; the practice cards are inside. The lamp by the door is off. I am not sure whether it is broken. Lee is not in room B, and Lee’s location is unknown to me. I am not the host. Sam is the host today. The room number on the message is correct, but the time on it is wrong. Please do not guess the correct time from this message; ask Sam.`),
  bank('P04-statements','production','Письменный отчёт и устная проверка фактов','writing',`text~structure~Опиши вымышленное рабочее место в 6–8 предложениях: две длинные группы подлежащего, единственное и множественное, признак и место.~The desk near the door is small. The notebooks on the desk are blue. The room is quiet. My colleague and I are here. The screen is on. We are ready.~Нужны связность, согласование по главному слову и разные дополнения после be.
text~negative~Из своего описания выбери три утверждения, измени только их полярность; рядом сохрани оригиналы.~The screen is on → The screen is not on.~Три пары, сохранены участники и остальные слова, not в правильной позиции.
text~negative~Для двух отрицаний с she/they запиши полную и обе сокращённые формы. Для I — полную и одну сокращённую.~She is not busy / She isn’t busy / She’s not busy; they are not late / they aren’t late / they’re not late; I am not ready / I’m not ready.~Различены две модели и особый базовый случай I am not.
text~meaning~Напиши сообщение о неготовом устройстве: два известных факта и одно честное неизвестное. Не выдумывай причину.~The tablet is on. The screen is dark. I’m not sure why.~Неизвестность не выдаётся за неисправность; последовательность понятна адресату.
text~meaning~Переформулируй без потери смысла: три стула свободны, два заняты. Подойдёт ли “All the chairs are not free”?~Three chairs are free and two are occupied. Not all the chairs are free.~Нужна однозначная формулировка «не все», а не двусмысленная область not.
text~structure~Исправь связный текст, затем объясни два типа ошибки: “The label on the bags are wrong. My notes not are here. I a learner.”~The label on the bags is wrong. My notes are not here. I am a learner.~Главное слово, позиция not и пропущенная связка исправлены с причинами.
speech~negative~Произнеси пары “The door is open / The door isn’t open” и “We are ready / We aren’t ready”; партнёр отмечает услышанный факт.~Партнёр верно различает open/not open и ready/not ready.~Нужен слышимый контраст, не только правильный ASR-текст; акцент допустим.
speech~meaning~Опиши макет из четырёх предметов. Партнёр намеренно ошибается в двух фактах; мягко исправь их.~The red box is not empty. The blue box is empty.~Две реальные корректирующие реплики по общему макету, не чтение монолога.
speech~structure~Представь команду из тебя и ещё одного человека, затем одного человека отдельно. Слушатель проверяет are/is.~My colleague and I are here. My colleague is the host.~Смена числа слышима; не согласовывать всю пару с I am.
text~meaning~Продолжи “The message is short, but ...” и “I am not ready because ...” собственными фактами вымышленной ситуации.~The message is short, but the time is clear. I am not ready because my notes are missing.~But выражает контраст, because причину; фразы образуют понятное сообщение.
text~negative~Сравни по смыслу “Don’t be late” и “You are not late”.~Первое — просьба или инструкция, второе — сообщение о факте.~Не объявлять don’t be ошибкой во всех случаях; важно назначение фразы.
text~structure~Отредактируй длинный ответ: сохрани исходник, новую версию и две проверки структуры даже при отсутствии ошибок.~Проверил главное слово и связку; проверил позицию not. Исправлений не потребовалось.~Не выдумывать ошибки; нужны реальные наблюдения над собственным текстом.`),
  bank('P04-statements','review','Смешанное повторение: P01–P04','review',`short~structure~The equipment in these rooms ___ new. Вставь is/are.~is~Equipment неисчисляемое; rooms внутри уточнения.
short~structure~These two pieces of equipment ___ new. Вставь is/are.~are~Теперь главное pieces, множественное.
sentence~negative~Отрицай без сокращений: This is an old notebook.~This is not an old notebook.~Сохраняется an перед old; not после is.
sentence~structure~Собери без изменения форм: are / the children’s bags / downstairs.~The children's bags are downstairs.~Bags — подлежащее во множественном, children’s — принадлежность.
sentence~negative~Замени только ошибочное no: The information is no correct.~The information is not correct.~Для отрицания correct после be нужно not.
short~structure~The colour of my notebooks ___ blue. Is/are?~is~Colour — единственное, my не меняет согласование.
sentence~negative~Раскрой все сокращения: It isn’t yours; it’s mine.~It is not yours; it is mine.~Isn’t содержит отрицание, it’s — здесь it is.
text~meaning~В расписании только “Tuesday”. Напиши одну уверенную фразу о дне и одну о неизвестном времени.~The session is on Tuesday. I’m not sure what time it is.~Не превращать отсутствие часа в отрицание какого-либо конкретного часа.
text~meaning~Объясни по-русски, почему “not empty” не значит “full”.~Внутри может быть один предмет, поэтому непустое не обязательно полное.~Смысловое отрицание не обязано совпадать с крайней противоположностью.
speech~negative~Партнёр утверждает, что все карточки твои; две твои, одна его. Исправь и передай точные данные.~These two cards are mine, but that card isn’t mine. It’s yours.~Согласование, принадлежность и отрицание используются вместе в реальном обмене.
text~structure~Напиши три новые пары единственное/множественное с длинным подлежащим и be.~The key in this bag is small. The keys in this bag are small.~Три собственные пары; неизменны прилагательные, меняются число и be.
text~meaning~Подготовь для отложенного контроля другой макет комнаты: перечисли данные и два неизвестных. Сам отчёт напиши через неделю.~Данные: две папки здесь, одна там; неизвестны владелец и время встречи.~Это план будущей проверки, а не запись уже достигнутого освоения.`)
 ],
 tests:[exam('P04-statements','a',`short~structure~The number on these badges ___ correct. Am/is/are?~is~Главное number в единственном числе.
short~structure~The badges in that drawer ___ clean. Am/is/are?~are~Главное badges во множественном.
short~structure~My sister and I ___ early. Am/is/are?~are~Пара участников соответствует we.
sentence~structure~Вставь недостающую связку и запиши целиком: Your coat by the window.~Your coat is by the window.~Coat — один предмет; место следует за is.
sentence~negative~Отрицай без сокращений: The lesson is online.~The lesson is not online.~Not после is, остальные слова сохраняются.
sentence~negative~Отрицай без сокращений: Our tickets are valid.~Our tickets are not valid.~Множественное are not.
sentence~negative~Сократи I am not certain.~I'm not certain.~I am сокращается, not остаётся отдельно.
sentence~negative~Сократи He is not absent одним из двух способов.~He isn't absent.|He's not absent.~Допустимы две модели без потери отрицания.
sentence~negative~Раскрой сокращение: They’re not available.~They are not available.~’Re означает are, not сохраняется.
sentence~structure~Исправь только связку: The price of these pens are low.~The price of these pens is low.~Согласование с price, не pens.
short~meaning~Дано только “The tablet is not on the desk”. Фраза “It is in the drawer” — true/false/not stated?~not stated~Отрицание одного места не сообщает другое.
short~meaning~Из “Not all the seats are occupied” следует, что ни одного свободного места нет? Yes/no?~no~«Не все заняты» означает наличие свободного места.
text~meaning~Напиши 6–8 предложений по данным: комната E наверху; четыре стула готовы; два грязные; проектор выключен; причина неизвестна. Не добавляй фактов.~Room E is upstairs. Four chairs are ready. Two chairs are not clean. The projector is off. I’m not sure why. Not all the chairs are ready.~Сохранены данные, не выдумана неисправность, есть связный текст и отрицание.
text~structure~Разбери две группы: “the title of these books” и “the titles of this book”. Дай полное предложение с каждой.~The title of these books is unusual. The titles of this book are unusual.~Выбор is/are объяснён главным словом; возможны другие признаки.
speech~negative~Партнёр путает роли: ты помощник, не ведущий; два гостя готовы, один нет. Исправь его и ответь на уточнение.~I’m not the host. I’m the helper. Two guests are ready, but one guest isn’t ready.~Нужны слышимое отрицание, точные роли и живой ответ на вопрос.
text~meaning~Сравни “The file is not ready” и “I’m not sure whether the file is ready”.~Первое отрицает готовность; второе оставляет её неизвестной.~Различено отрицательное свидетельство и отсутствие свидетельства.`),
 exam('P04-statements','b',`short~structure~The name of these streets ___ unusual. Am/is/are?~is~Главное name — единственное число.
short~structure~The names on this page ___ unusual. Am/is/are?~are~Главное names — множественное число.
short~structure~My friend and I ___ in the garden. Am/is/are?~are~Составное подлежащее обозначает we.
sentence~structure~Вставь только недостающую связку: The umbrella near the stairs.~The umbrella is near the stairs.~Одна umbrella согласуется с is.
sentence~negative~Отрицай без сокращений: The shop is busy.~The shop is not busy.~Обычное отрицание с be + not.
sentence~negative~Отрицай без сокращений: Their answers are clear.~Their answers are not clear.~Not после are, their сохраняется.
sentence~negative~Сократи I am not the guide.~I'm not the guide.~Базовое сокращение I am → I’m.
sentence~negative~Сократи We are not outside одним из двух способов.~We aren't outside.|We're not outside.~Оба отрицательных сокращения нормативны в заданной модели.
sentence~negative~Раскрой сокращение: She’s not alone.~She is not alone.~’S здесь заменяет is; not не исчезает.
sentence~structure~Исправь только связку: The size of these boxes are different.~The size of these boxes is different.~Главное size — единственное число.
short~meaning~Дано только “The parcel is not here”. “The parcel is at the post office” — true/false/not stated?~not stated~Конкретное местоположение не сообщено.
short~meaning~Из “Not all the mugs are clean” следует, что все кружки грязные? Yes/no?~no~Некоторые могут быть чистыми; «не все» не равно «ни одна».
text~meaning~Напиши 6–8 предложений по данным: комната G внизу; три стола чистые; один грязный; радио выключено; причина неизвестна. Не добавляй фактов.~Room G is downstairs. Three tables are clean. One table is not clean. The radio is off. I’m not sure why. Not all the tables are clean.~Точные данные, согласование и честная неизвестность; текст не копирует тренировочный отчёт.
text~structure~Составь и разбери по одному предложению с “the cover of these notebooks” и “the covers of this notebook”.~The cover of these notebooks is blue. The covers of this notebook are blue.~Главные слова cover/covers определяют связку; требуется объяснение смысла групп.
speech~negative~Ты гость, не организатор; одна комната свободна, две заняты. Исправь неверный пересказ партнёра и уточни его ответ.~I’m not the organiser. I’m a guest. One room is free, but two rooms aren’t free.~Проверяются слышимый контраст, число и взаимодействие.
text~meaning~Объясни, почему “The box is not full” не позволяет утверждать “The box is empty”.~В коробке может быть несколько предметов, но оставаться место.~Нужен возможный промежуточный случай, не перевод двух предложений.`)]
};

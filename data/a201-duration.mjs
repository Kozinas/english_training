import {bank,exam,examples,goal} from './unit-tools.mjs';
import {perfectSources} from './present-perfect.mjs';
export default {
 id:'A201-duration',topic:'A201',title:'От прошлого до сейчас: for, since и how long',prerequisites:['A201-experience'],references:['present-perfect','numbers-time','present-continuous'],sources:perfectSources,
 goals:[goal('time','Различать длительность, начало и закрытый период','time'),goal('form','Строить продолжающееся состояние и вопрос о длительности','forms'),goal('evidence','Читать временную линию без подмены фактов','reading'),goal('message','Объяснять историю состояния и уточнять её границы','production')],
 explanation:[
 {title:'Состояние началось раньше и продолжается',text:'I have known Rita for six years: знакомство началось шесть лет назад и сохраняется в обычном контексте сейчас. Русское «знаю шесть лет» имеет настоящее время, но английское I know Rita for six years не передаёт эту связь нормативно. Нужны have/has и known. Сравни I knew Rita when we were at school: это уже завершённая временная рамка. Perfect не всегда значит «закончилось»: с длительностью состояния он часто как раз показывает продолжающуюся ситуацию. Контекст должен назвать, продолжается ли она, если от этого зависит ответ.'},
 {title:'For измеряет отрезок, since указывает начало',text:'For two days, for a month, for a long time — ответ «как долго». Since Tuesday, since 2020, since breakfast — ответ «с какой точки». Не since three months и не for 2020 в значении начала. От точки до сейчас можно вычислить длительность только если известна текущая точка: since March без года и сегодняшней даты не означает ровно шесть месяцев. В заданиях с расчётом даты оговариваются; в реальной беседе можно спросить How long exactly? Вместо выдуманной точности сохраняй a few years или about six months, если это всё, что известно.'},
 {title:'For не принадлежит одному времени',text:'We lived there for two years, then we moved — завершённый отрезок в Past Simple. We have lived here for two years and still live here — период до сейчас в Present Perfect Simple. We are going to stay for two days — план будущего. Слово for измеряет время, а не автоматически выбирает Perfect. Since yesterday в We have been here since yesterday обозначает начало продолжающегося присутствия; это не ошибка has done yesterday, где yesterday датирует само завершённое действие. Сначала найди границы ситуации, затем подбирай конструкцию.'},
 {title:'Вопрос how long и смысловой глагол',text:'How long have you had this phone? — как долго телефон у тебя? Не How long do you have… для уже продолжающегося владения. How long has she been here? спрашивает длительность присутствия; When did she arrive? — время однократного прибытия. Для состояния нужен had/known/owned/been; точечное действие buy/meet/arrive нельзя просто растянуть: не I have bought it for three years в значении владения. Правильно I have had it for three years, а дату покупки сообщает I bought it three years ago.'},
 {title:'Since с целым событием',text:'We have been friends since we met at the course. Главная часть описывает дружбу до сейчас, since вводит начало — событие met в Past Simple. В She has lived here since she left school left не нужно менять на has left ради единообразия. Не каждая часть предложения обязана иметь одинаковое время: у них разные роли. Since также может значить «поскольку», но здесь изучаем временное значение. Если точка начала неизвестна, нельзя автоматически подставить точную дату по фразе since we met.'},
 {title:'Состояния и пределы Simple',text:'Have known, have had, have owned, have believed, have been ill — типичные формы продолжающегося состояния. Не have been knowing или have been owning в обычном значении знания/владения. У live и work возможны и have lived/worked, и have been living/working, когда внимание на продолжающемся процессе. Подробное сравнение с Present Perfect Continuous — в B101; в контролируемых заданиях здесь явно тренируем Simple, а в свободном ответе не объявляем естественный Continuous ошибкой. Been ill — been + прилагательное, не Continuous: для него нужна форма на -ing.'},
 {title:'Отрицательная длительность и последняя встреча',text:'I haven’t seen her since Monday означает отсутствие встречи в промежутке от понедельника до сейчас; обычно понедельник понимается как последняя встреча, но проверяй контекст. I haven’t heard from him for weeks — несколько недель не было сообщений, а не «он никогда не писал». She hasn’t been well for two days: состояние нездоровья длится до сейчас. Not for long может менять область отрицания: I haven’t known her for long значит знаком недавно, а не совсем не знаком. Не вычисляй число встреч или причину молчания из одной длительности.'},
 {title:'All day, during и перенос смысла',text:'I have been busy all morning обычно без for перед all morning. For three hours измеряет длительность, during the meeting помещает событие внутри встречи и не сообщает, длилось ли оно всю встречу. From Monday to Wednesday задаёт две границы; если оба дня завершены, используем прошлую рамку. Today/this week могут быть открытыми, но сама календарная метка не гарантирует выбор Perfect — это разберём в следующей подтеме. Во всех случаях длительность ремонта не доказывает его успешность, а длительность владения не равна непрерывному использованию вещи.'},
 {title:'Опоры к сообщению о проблеме',text:'Own — владеть; membership — членство; tenant — арендатор; noticeboard — доска объявлений; connection — соединение; outage — перерыв в работе; stable — стабильный; intermittent — периодический/непостоянный. Сначала выпиши состояние, начальную точку и то, продолжается ли оно. Если интернет недоступен с девяти, а проверить его решили в десять, эти события имеют разные начала. В сообщении техподдержке отделяй наблюдение от причины: We have had no connection since nine, но причина неизвестна, пока её не проверили.'}
 ],
 examples:examples(`I have known Eva for eight years.~Я знаю Еву восемь лет.~Продолжающееся знакомство, have known.
She has owned this bike since 2021.~Этот велосипед у неё с 2021 года.~Since задаёт начало владения.
We have been here for half an hour.~Мы здесь уже полчаса.~Been описывает присутствие до сейчас.
He has had this laptop for a year.~У него этот ноутбук год.~Первое has вспомогательное, had — владение.
How long have you had it?~Как давно он у тебя?~Вопрос о длительности состояния.
When did you buy it?~Когда ты его купил?~Вопрос о дате события покупки.
I bought it last September.~Я купил его в прошлом сентябре.~Завершённая дата с Past Simple.
They have lived here since May.~Они живут здесь с мая.~От начальной точки до сейчас в заданном контексте.
They lived there for six months, then moved.~Они жили там полгода, затем переехали.~For допустим с завершённым прошлым.
We’re going to stay for a week.~Мы собираемся остаться на неделю.~For измеряет будущий отрезок.
I have been awake since six.~Я не сплю с шести.~Since + час начала.
I have been awake for three hours.~Я не сплю три часа.~For + длина отрезка.
We have been friends since we joined the club.~Мы дружим с тех пор, как вступили в клуб.~Joined обозначает событие-начало.
She has worked here since she left college.~Она работает здесь с окончания колледжа.~Present Perfect в главной, Past Simple после since.
I haven’t seen her for a month.~Я не видел её месяц.~Отрицательный промежуток до сейчас.
He hasn’t called since Tuesday.~Он не звонил со вторника.~Отсутствие звонков, причина неизвестна.
I haven’t known him for long.~Я знаю его недавно.~Не означает полного отсутствия знакомства.
We’ve been busy all day.~Мы заняты весь день.~All day обычно без for.
The room has been cold since yesterday.~В комнате холодно со вчерашнего дня.~Since yesterday — начало продолжающегося состояния.
The connection failed during the meeting.~Соединение пропало во время встречи.~During задаёт контекст, не полную длительность.
She has been ill for two days.~Она болеет два дня.~Been + прилагательное, не Continuous.
We have had the device for a year, but we have only used it twice.~Устройство у нас год, но использовали его лишь дважды.~Длительность владения и число применений различаются.`),
 banks:[
 bank('A201-duration','time','Точка начала и длина периода','practice',`short~time~___ six weeks: for/since?~for~Six weeks — длительность, не начальная точка.
short~time~___ last Friday: for/since?~since~Last Friday — точка начала в прошлом.
short~time~___ 2019: for/since для начала знакомства?~since~Год задаёт начало, а не отрезок времени.
short~time~___ a long time: for/since?~for~A long time выражает длительность.
short~time~___ breakfast: for/since в значении «с завтрака»?~since~Breakfast здесь событие-начало.
short~time~___ half an hour: for/since?~for~Half an hour — длина периода.
short~time~___ I moved here: for/since?~since~Целое событие moved задаёт начальную точку.
short~time~We stayed there ___ three nights, then left. For/since?~for~Длительность возможна и с Past Simple.
short~time~We will stay ___ two days. For/since?~for~Будущий отрезок тоже измеряется for.
short~time~I have been here ___ yesterday. For/since?~since~Since yesterday обозначает начало присутствия.
short~time~The lights went out ___ the meeting. During/for при значении «во время»?~during~During + событие, не мера длительности.
short~time~We've been busy ___ day. All/since?~all~All day — весь текущий день, без since.
sentence~time~Исправь только предлог: She has lived here since four months.~She has lived here for four months.~Four months — отрезок, нужен for.
sentence~time~Исправь только предлог: We have known him for 2022.~We have known him since 2022.~2022 — точка начала знакомства.
short~time~В вымышленной истории сейчас 1 апреля, состояние началось 1 января того же года и продолжается. Сколько полных месяцев?~3|three~От 1 января до 1 апреля три месяца.
short~time~Сейчас пятница 12:00, ожидание началось во вторник 12:00 и продолжается. Сколько дней?~3|three~Ровно три суток при указанных одинаковых часах.
text~time~Из since March без текущей даты можно ли вывести ровно шесть месяцев?~Нет: нужен год и точка «сейчас», иначе точная длительность неизвестна.~Не придумывать календарные данные.
text~time~For two years: покажи один завершённый и один продолжающийся период.~I worked there for two years, then left. I have worked here for two years and still work here.~For не выбирает время; контекст устанавливает границы.
text~time~Различи for the whole meeting и during the meeting.~Первое сообщает всю длительность встречи; второе помещает событие внутри встречи и не обязательно на всё её время.~Проверить протяжённость, а не один русский перевод «во время».
text~time~Почему yesterday запрещает не все предложения с Present Perfect? Дай допустимый пример с since.~Since yesterday задаёт начало до сейчас: I have been here since yesterday.~Различить дату завершённого события и начало продолжающегося состояния.`,'','For / since'),
 bank('A201-duration','forms','Состояние, начало и вопросы how long','practice',`short~form~I have ___ this laptop for a year. (have)~had~Have had: вспомогательное have + V3 смыслового have.
short~form~She has ___ us since school. (know)~known~Know–knew–known; состояние продолжается.
short~form~We have ___ neighbours since 2020. (be)~been~Been описывает продолжающееся соседство.
short~form~He has ___ the flat since June. (own)~owned~Owned — V3 состояния владения.
short~form~I've lived here since I ___ school. Leave/left?~left~После since событие-начало в Past Simple.
sentence~form~Исправь для знакомства до сейчас: I know her for five years.~I have known her for five years.|I've known her for five years.~Have known передаёт состояние с длительностью до сейчас.
sentence~form~Исправь для владения до сейчас: She has this bag since May.~She has had this bag since May.|She's had this bag since May.~Нужен has had, не простой has владения.
sentence~form~Собери вопрос: how long / you / have / been / here?~How long have you been here?~How long + have + субъект + V3.
sentence~form~Сделай вопрос о длительности: She has owned this car for years. Начни How long.~How long has she owned this car?~Has после вопросительной группы, owned сохраняется.
sentence~form~Исправь знание как состояние: I have been knowing him since 2018.~I have known him since 2018.|I've known him since 2018.~Know в обычном значении состояния не требует Continuous.
sentence~form~Переведи через have: «У нас этот стол три месяца». Present Perfect Simple.~We have had this table for three months.|We've had this table for three months.~Had описывает длительность владения, не покупки.
sentence~form~Исправь смысл владения: I have bought this bike for two years.~I have had this bike for two years.|I've had this bike for two years.~Покупка — событие, владение до сейчас — have had.
text~form~Различи How long have you been here? и When did you arrive?~Первый вопрос про длительность присутствия, второй про дату/время прибытия.~Не подменять состояние точечным событием.
text~form~В She has been ill since Monday есть ли Continuous? Почему?~Нет: been + прилагательное ill; Continuous потребовал бы форму на -ing.~Разобрать фактическую конструкцию, не ориентироваться только на been.
text~form~Построй по одному предложению с since + дата и since + событие.~We have been friends since 2023. We have been friends since we met at work.~Во второй части нужен корректный Past Simple события-начала.
speech~message~Партнёр спрашивает, как давно у тебя предмет. Ответь в рамках роли и уточни, когда он купил свой.~I’ve had this camera for two years. When did you buy yours?~Настоящий обмен репликами; владение и покупка не смешиваются.`,'','Состояния')
 ,bank('A201-duration','reading','Чтение: история комнаты и оборудования','reading',`short~evidence~Какое сегодня число в истории: 1 March/1 June?~1 June~Текст явно задаёт 1 июня как текущую дату.
short~time~Сколько полных месяцев Hana живёт в комнате с 1 марта: число?~3|three~От 1 марта до 1 июня три месяца.
short~time~Сколько полных месяцев длится членство с 1 апреля: число?~2|two~Членство началось позже переезда, два месяца назад.
short~evidence~Hana owned her desk before moving here: true/false/not stated?~true~Стол у неё с прошлого года, переезд только в марте.
short~evidence~Hana has used the drill every day for a year: true/false/not stated?~false~Она владеет дрелью год, но пользовалась только дважды.
short~time~Сколько часов сегодня нет связи с 09:00 до 12:00: число?~3|three~От девяти до полудня три часа.
short~evidence~The provider has confirmed the cause: true/false/not stated?~false~Провайдер пока не подтвердил причину.
short~evidence~Ежедневное пользование столом доказано: true/false/not stated?~not stated~Из длительности владения не следует частота использования.
text~time~Различи три начала: проживание, членство и сегодняшнее отсутствие связи.~Проживание с 1 марта, членство с 1 апреля, связь отсутствует с девяти сегодня.~Не переносить начало одного состояния на другие.
text~form~Составь Simple Perfect-предложения о комнате и членстве через for на заданную дату.~Hana has lived in the room for three months. She has been a member for two months.~Правильные состояния и разные длительности.
text~evidence~Почему cannot connect не доказывает, что роутер неисправен?~Кабель и роутер ещё проверяют, причина не подтверждена; проблема наблюдается, но источник неизвестен.~Не превращать симптом в установленную причину.
text~message~Напиши короткое сообщение провайдеру с длительностью, проверенным фактом и запросом.~We have had no connection for three hours. We have checked the cable, but we don’t know the cause. Can you confirm whether there is an outage in the area?~Отделить наблюдение, выполненную проверку и неизвестное.`,
 `It is 1 June, and Hana is writing a note for the residents of a shared house. She moved into her room on 1 March of the same year and still lives there. She has therefore lived in the house for three months. She joined the residents' association on 1 April, so her membership is only two months old. The move and the membership did not start on the same date.

Hana has owned her desk since the previous year. The desk came with her when she moved, but the note does not say how often she uses it. She has also had a drill for a year, although she has only used it twice. Owning a tool for a long time does not mean using it every day. Her neighbour Farid has known her since they met at a local class. The exact date of that meeting is not in the note.

There is a more urgent issue today. It is now noon, and the house has had no internet connection since nine this morning. Hana has checked the cable, but that has not restored the connection. The residents do not yet know whether the problem is in their router or elsewhere. The provider has not confirmed the cause.

Hana asks everyone to report what they have actually observed. One neighbour remembers a short connection problem last week, but that problem ended after ten minutes. It is a separate event, not proof that today's outage began last week. Hana will send the provider the current starting time and the completed checks. She will not report a faulty router as a confirmed fact before someone has tested it properly.`),
 bank('A201-duration','listening','Аудирование: что длится и что уже закончилось','listening',`short~evidence~Кто звонит: имя?~Nico~Сообщение оставляет Nico.
short~time~Как давно текущая комната доступна Nico: for six months/since yesterday?~for six months~Аренда комнаты продолжается шесть месяцев.
short~time~Когда перестал работать обогреватель: Tuesday/Monday?~Tuesday~Проблема с обогревателем началась во вторник.
short~time~Сегодня пятница 10:00, проблема с Tuesday 10:00. Длительность в днях?~3|three~Ровно три дня по заданным часам.
short~evidence~Инженер уже починил обогреватель: true/false/not stated?~false~Инженер приходил, но обогреватель всё ещё не работает.
short~evidence~Кухня тоже не отапливается: true/false/not stated?~false~Кухонное отопление работает нормально.
short~evidence~Все жильцы дома уже подали жалобу: true/false/not stated?~not stated~О других жалобах не сообщается.
text~time~Различи six months, since Tuesday и yesterday в сообщении.~Шесть месяцев аренды, с вторника не работает обогреватель, вчера был визит инженера.~Три разные временные связи, не одна длительность неисправности.
text~message~Составь два предложения статуса, не выдавая вчерашний визит за ремонт.~The heater has not worked since Tuesday. An engineer visited yesterday, but the heater still does not work.~Perfect для периода, Past Simple для визита; результат отдельно.
speech~message~Партнёр — управляющий, он уточняет место и длительность проблемы. Ответь по услышанному.~The heater in Nico’s room has not worked for three days. The kitchen heating works.~Подтверждённые границы проблемы, без распространения на весь дом.`,
 `Hello, this is Nico from room four. I have rented this room for six months, and I normally have no trouble with the heating. However, my room heater has not worked since Tuesday at ten in the morning. It is now Friday at ten, so that is three days without heat from this heater. The kitchen heating works normally; I am not reporting a problem in every room.

An engineer visited yesterday and checked the controls, but the room heater still does not work. I have kept his note, although it does not give a confirmed repair time. I have known the building manager since I moved here, but she is away today. Could you tell me who is handling the repair? Please do not mark the issue as solved just because the engineer has visited. I can describe what happens when I switch the heater on, if that helps your next check.`),
 bank('A201-duration','production','Письмо и речь: длительность и границы','writing',`text~message~Напиши 100–140 слов управляющему: длительное проживание, недавняя проблема, сделанная проверка и запрос срока. Отделяй длительность состояния от даты визита.~Hello. I have lived in this flat for two years, and the kitchen light has usually worked well. Since Monday, however, it has not worked at all. I have checked the switch, but I have not touched the wiring. An electrician visited yesterday and looked at the light, but it still does not work. Could you confirm the next step and tell me when someone can return? Please keep the issue open. A visit is not the same as a completed repair. I have saved the electrician’s note and can send a copy if you need it. The other lights in the flat work normally.~100–140 слов; корректная длительность, датированный визит, ограничение проблемы и запрос, без неподтверждённой причины.
text~message~Напиши 100–140 слов о своём или вымышленном членстве в клубе: начало, длительность, знакомство, прежний завершённый период и вопрос.~I have been a member of the repair club for six months. I joined in January, and in this story it is now July. I have known our coordinator since we met at the first meeting. Before joining this club, I helped at another workshop for two months, but that project ended last year. I have owned my small toolkit for three years, although I have not used every tool in it. I would like to learn which tools are useful for bicycle repairs. How long have you worked with bicycles? Perhaps we can compare our experience and plan a practice task together at the next meeting.~100–140 слов; настоящее истории задано, for не привязан одному времени, владение не равно частоте использования.
text~form~Составь пару о телефоне: дата покупки и длительность владения до сейчас.~I bought this phone two years ago. I have had it for two years.~Не растягивать bought вместо состояния had.
text~time~Опиши одну ситуацию через for и since, явно задай точку «сейчас».~It is noon. We have been here since ten. We have been here for two hours.~Обе формулировки должны обозначать один и тот же промежуток.
text~form~Напиши предложение о дружбе с since + событие в Past Simple.~We have been friends since we met at the library.~Have been в главной части, met — начало.
text~evidence~Исправь «У нас устройство год, значит мы использовали его ежедневно».~We have had the device for a year, but that does not tell us how often we have used it.~Владение и частота применения независимы; допустима более простая ясная формулировка.
speech~message~Партнёр спрашивает про вещь: How long…? Затем уточняет When did…? Ответь, не меняя историю.~I’ve had it for three years. I bought it in June three years ago.~Ответы должны быть совместимы в заданном контексте; настоящее аудио обязательно.
speech~message~В ролевой техподдержке сообщи длительность проблемы и одну уже выполненную проверку. Партнёр уточняет начало.~We’ve had no connection since ten. We’ve checked the cable. It is now noon, so the problem has lasted two hours.~Сохранить время начала, длительность и отсутствие выдуманной причины.
text~time~Напиши два разных предложения с for: законченная работа и будущий план.~I worked there for a year, then left. We’re going to stay for a week.~Показать, что for не требует только Present Perfect.
text~form~Сравни have known и have been knowing в обычном значении знакомства.~I have known her since school — нормативная форма состояния; have been knowing здесь не нужна.~Не запрещать все -ing вообще, указать конкретное значение know.
speech~message~Собеседник говорит since spring без года. Уточни длительность, не придумывая её.~Do you mean this spring or last spring? How long exactly?~Нужна реальная новая информация от партнёра, а не догадка.
text~message~Сократи сообщение о проблеме до трёх предложений: начало, текущий статус, просьба.~The connection has been unstable since Monday. We have checked the cable, but the problem continues. Could you investigate the next possible cause?~Сохранить три функции и не заменить наблюдение неподтверждённым диагнозом.`,'','Письмо и речь'),
 bank('A201-duration','review','Повторение: время, состояния и опыт','review',`short~time~I've owned the car ___ ten months. For/since?~for~Ten months — длительность владения.
short~time~They've been neighbours ___ last autumn. For/since?~since~Last autumn задаёт начальную точку.
short~form~We have ___ this address since 2024. (know)~known~Know в продолжающемся состоянии: have known.
short~form~She has lived here since she ___ her first job. Get/got?~got~Получение работы — событие-начало в Past Simple.
sentence~form~Исправь для текущего присутствия: How long are you here? Используй Perfect.~How long have you been here?~Have been передаёт длительность до сейчас.
sentence~form~Исправь: We have been knowing each other for years.~We have known each other for years.|We've known each other for years.~Know в этом значении состояния не Continuous.
short~time~I worked there for a month and left. Период closed/open?~closed~Left явно завершает прошлый отрезок.
short~evidence~I haven't heard from her for days доказывает причину молчания: yes/no?~no~Указано отсутствие контакта, не его причина.
text~time~Почему for three years и three times отвечают на разные вопросы?~Первое — How long, длительность; второе — How many times, число случаев.~Не превращать количество повторений в длину периода.
text~form~Объясни I haven't known him for long, не переводя «я его не знаю».~Я знаком с ним недавно: отрицается большая длительность, не само знакомство.~Сохранить область отрицания и факт знакомства.
speech~message~Спроси партнёра о состоянии до сейчас и о событии, с которого оно началось.~How long have you lived here? When did you move in?~Пара вопросов должна быть связана с настоящими ответами.
text~evidence~Вчера проблема длилась десять минут и закончилась. Сегодня новая с 9:00. Сформулируй без объединения двух событий.~We had a ten-minute problem yesterday. Today’s problem has continued since nine.~Сохранить завершение вчерашнего эпизода и отдельную новую линию.`,'','Повторение')
 ],tests:[
 exam('A201-duration','a',`short~time~We have been ready ___ forty minutes. For/since?~for~Forty minutes — измеренная длительность.
short~time~The lift has been out of order ___ Sunday. For/since?~since~Sunday указывает начальную точку.
short~time~I rented a room ___ six weeks, then moved away. For/since?~for~For описывает и завершённый прошлый отрезок.
short~time~We'll borrow it ___ a fortnight. For/since?~for~For измеряет будущие две недели.
short~form~She has ___ this flat since 2017. (own)~owned~Owned — V3 состояния владения.
short~form~We have ___ colleagues for a year. (be)~been~Have been описывает продолжающуюся связь.
short~form~He has known me since we ___ at the station. (meet)~met~Встреча — событие-начало в Past Simple.
sentence~form~Исправь для владения до сейчас: I have this suitcase for a decade.~I have had this suitcase for a decade.|I've had this suitcase for a decade.~Нужен Perfect have had вместо простого have.
sentence~form~Собери: how long / she / has / known / the owner?~How long has she known the owner?~How long + has + субъект + known.
sentence~form~Исправь: We have been owning the house since 2015.~We have owned the house since 2015.|We've owned the house since 2015.~Own — состояние, обычная модель have owned.
short~time~В истории сегодня 1 августа; ожидание началось 1 мая и продолжается. Сколько полных месяцев?~3|three~Май → июнь → июль → август: три месяца.
short~time~Сейчас 15:00, лампа выключена с 11:00 сегодня. Сколько часов прошло?~4|four~От 11 до 15 четыре часа при заданных условиях.
short~evidence~I have had this drill for five years. Ежедневное использование доказано: yes/no?~no~Длительность владения не сообщает частоту применения.
text~evidence~Связь отсутствовала вчера час, потом восстановилась. Сегодня пропала в 8:00. Почему нельзя написать no connection since yesterday?~Это объединило бы раздельные эпизоды и скрыло восстановление; нынешний период начался в восемь сегодня.~Сохранить известный разрыв состояния.
text~time~Различи during the inspection и for the whole inspection.~During помещает событие внутри проверки; for the whole inspection означает всю её длительность.~Объяснить временные границы, не только перевести предлоги.
text~form~Преобразуй покупку в владение: We bought it four years ago, и вещь у нас сейчас.~We have had it for four years.~Использовать состояние had; bought не растягивается на весь срок.
text~message~Напиши 100–140 слов управляющему о лифте: давно живёшь в доме, текущая поломка с воскресенья, вчерашний осмотр без подтверждённого ремонта, вопрос о следующем шаге.~Hello. I have lived in this building for four years. The lift has been out of order since Sunday, and it is still not available today. An engineer inspected it yesterday, but nobody has confirmed that the repair is complete. Please do not remove the warning notice until you know it is safe to use. Could you tell us what the next step is and when we can expect an update? I have kept a copy of the previous message for the residents who missed it. If the expected time changes, please let us know. We need accurate information, not a guess based only on the engineer’s visit.~100–140 слов; не смешивать проживание, поломку, визит и подтверждение, запросить сведения без выдуманного срока.
speech~message~Партнёр спрашивает о длительности владения предметом и дате покупки. Ответь последовательно и уточни один его вопрос.~I’ve had this bag for six months. I bought it in March; in this story it is September now.~Реальный диалог, совместимая временная линия и слышимая форма Perfect.
text~form~Почему He has been tired all day не Present Perfect Continuous?~Been соединяется с прилагательным tired; формы на -ing нет.~Нужен разбор конструкции, не вывод по одному been.
text~evidence~She has known him since they met: известен ли год знакомства? Что спросить?~Год не указан. When did they meet?~Не придумывать точную длительность из события без даты.`),
 exam('A201-duration','b',`short~time~I have had the same number ___ seven years. For/since?~for~Seven years — длительность состояния.
short~time~They have been members ___ January. For/since?~since~January задаёт начало членства.
short~time~The shop closed ___ two days last month, then reopened. For/since?~for~Завершённый отрезок тоже может иметь for.
short~time~We are going to rent it ___ a weekend. For/since?~for~Будущий период выражается for.
short~form~He has ___ his teacher for a long time. (know)~known~V3 known в значении знакомства.
short~form~They have ___ this dog since it was a puppy. (have)~had~Have had: владение/содержание до сейчас.
short~form~I've been a member since I ___ the club. (join)~joined~Joined — прошлое событие-начало.
sentence~form~Исправь для продолжающейся дружбы: We are friends since 2020.~We have been friends since 2020.|We've been friends since 2020.~Have been связывает начало с настоящим.
sentence~form~Собери: how long / you / had / have / this account?~How long have you had this account?~Have перед субъектом, had после него.
sentence~form~Исправь обычное знакомство: She has been knowing us for months.~She has known us for months.|She's known us for months.~Know в значении состояния не требует Continuous.
short~time~В истории сегодня 1 декабря; членство началось 1 августа этого года. Сколько полных месяцев?~4|four~Август → декабрь: четыре полных месяца.
short~time~Сейчас четверг 09:00; состояние началось в понедельник 09:00. Сколько суток?~3|three~Три полных дня при одинаковом времени суток.
short~evidence~The desk has been here for a year. Кто ежедневно им пользуется, известно: yes/no?~no~Расположение во времени не указывает пользователя и частоту.
text~evidence~Гость был здесь в апреле, уехал, снова приехал вчера. Почему непрерывное has been here since April неверно для этой истории?~Оно скрывает отъезд; текущее пребывание началось вчера, апрельский визит отдельный.~Не объединять разорванные периоды в непрерывное состояние.
text~time~For a week и since last week всегда означают одинаковый срок?~Нет: since last week не задаёт точный день, for a week обозначает длину; нужна точка отсчёта.~Не приписывать неопределённому началу точную длительность.
text~form~Устройство получено два месяца назад и остаётся у группы. Сформулируй через have had.~We have had the device for two months.~Длительность владения требует состояния had, не received for two months.
text~message~Напиши 100–140 слов об истории клуба: членство с января, знакомство с координатором, законченный прошлый проект, предмет во владении и просьба о следующем шаге. Текущий месяц — июль.~I have been a member of the photography club since January, so I have been here for six months. I have known our coordinator since the first meeting. Before I joined, I helped with a school exhibition for three weeks, but that project finished last year. I have had my camera for two years, although I have not used all its settings. Could someone show me how to photograph moving objects? I would like to practise before our next public event. I can bring the camera and some examples of pictures that did not work well. Please tell me which meeting would be suitable for that practice.~100–140 слов; временная линия согласована, for допустим с прошлым, длительность владения не выдаётся за мастерство.
speech~message~Собеседник уточняет, как давно ты член вымышленного клуба и когда вступил. Ответь, затем спроси о его истории.~I’ve been a member for a year. I joined last September. How long have you been here?~Последовательный ответ и реальное взаимодействие; оценка речи требует аудио.
text~form~Различи I haven’t known her for long и I don’t know her.~В первом знакомство есть, но недолгое; во втором оно отрицается.~Не терять область отрицания и факт знакомства.
text~time~Почему We’ve been neighbours since yesterday допустимо, хотя yesterday часто стоит с Past Simple?~Since yesterday обозначает начало продолжающегося соседства, а не дату законченного события.~Объяснить роль всей группы since yesterday, не одного слова.`)
 ]
};

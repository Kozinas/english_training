import {bank,exam,examples,goal} from './unit-tools.mjs';
import {comparisonSources} from './comparison.mjs';
export default {
 id:'A202-comparison',topic:'A202',title:'Сравнительная и превосходная степень: форма, критерий и группа',prerequisites:['A202-description'],references:['comparison','quantity'],sources:comparisonSources,
 goals:[goal('form','Строить степени прилагательных и наречий','forms'),goal('scope','Указывать основание сравнения, разрыв и группу','scope'),goal('evidence','Сопоставлять данные и не преувеличивать вывод','reading'),goal('message','Обосновывать выбор и обсуждать компромисс','production'),goal('sound','Произносить окончания и слышимо выделять критерий','sounds')],
 explanation:[
 {title:'Сначала выбери шкалу',text:'A is cheaper than B сравнивает цену, а не всё качество предметов. Comparative показывает положение одного относительно другого: taller, more useful, less expensive. Superlative выделяет крайнее значение внутри группы: the tallest person in this room, the least expensive ticket of the three. Группа может быть больше двух и при обычном сравнении: This room is larger than the other rooms. Разница не в механическом подсчёте существительных, а в задаче — сопоставить или выделить крайний вариант. Без критерия better часто слишком расплывчато.'},
 {title:'Короткая основа и написание',text:'Для многих односложных прилагательных добавляем -er/-est: long–longer–longest. Конечное -e не дублируем: safe–safer–safest. В короткой основе с одной краткой ударной гласной перед конечной согласной часто удваиваем её: big–bigger–biggest, hot–hotter–hottest. Но cheap–cheaper, short–shorter не получают удвоения. Согласная + y обычно меняется на i: easy–easier–easiest, heavy–heavier–heaviest. Ряд нужен целиком: сравнительная форма не превращается в превосходную добавлением ещё одного окончания.'},
 {title:'More/most и допустимые варианты',text:'Длинные прилагательные обычно используют more/most: more comfortable, the most reliable. Прилагательные на -ful, например useful/careful, также требуют more/most. У двухсложных нет одного правила без исключений: easy даёт easier, quiet допускает quieter/more quiet, simple — simpler/more simple, friendly — friendlier/more friendly. Учебный словарь приложения показывает модели и варианты. Нельзя одновременно ставить more и -er: не more easier, не most cheapest. Не исправляй нормативный вариант только потому, что тебе привычнее другой.'},
 {title:'Неправильные формы и пределы значения',text:'Good–better–best, bad–worse–worst. Для наречий well и badly те же сравнительные ряды, но исходная функция другая: a better explanation; explain it better. Farther/further и farthest/furthest допустимы для расстояния; further information означает дополнительную информацию, не физическую дальность. Older/oldest подходят и людям, и вещам. Elder/eldest преимущественно говорят о семейном старшинстве перед существительным: my elder sister; для явного сравнения she is older than me, не elder than me. Не нужно превращать частный вариант в запрет обычной формы.'},
 {title:'Than, вопросы и сравнение действий',text:'The train is faster than the bus. Вопрос: Which train is faster? Отрицание: This train isn’t faster than the bus. Than не меняет систему be/do из прошлых тем. Для наречий fast/hard/early используем faster/harder/earlier; для обычных -ly — more slowly/more carefully. She works faster than I do сравнивает действия. В разговоре than me нормативно; than I do/than I am помогает явно назвать связь. В двусмысленном I like Jo more than Pat нужно уточнить: чем Pat нравится мне или чем Pat нравится Jo? Не угадывай намерение ученика.'},
 {title:'The, my, in, of и множественное число',text:'Обычная именная группа: the smallest room. Но my smallest room, не my the smallest room: притяжательное уже определяет существительное. После one of the best нужно множественное: one of the best tools. Это один из лучших, а не обязательно единственный лучший. In обычно вводит место/организацию: the busiest station in the city. Of подходит перечисленному набору: the cheapest of the three. В The blue one runs fastest наречие может быть без the; это не причина убрать the из the fastest train. Группа сравнения должна быть понятна из текста или контекста.'},
 {title:'Насколько больше и насколько меньше',text:'Much/far/a lot + comparative усиливают разницу: much cheaper, far more useful. A little/a bit уменьшают её: a bit slower. Не very cheaper: very обычно относится к исходному признаку very cheap. More/most и less/least работают также с количеством: more chairs, less time; fewer/fewest для отдельных счётных предметов: fewer errors. Для длинного признака less comfortable = менее удобный; для размера часто естественнее smaller, а не less big. Число делает вывод проверяемым: ten euros cheaper, two kilograms lighter. Не сообщай точную разницу без сопоставимых единиц и условий.'},
 {title:'Лучший для задачи, а не лучший вообще',text:'Если два из трёх предметов весят одинаково мало, нельзя объявить один уникальным победителем. Можно сказать They are equally light; both are the lightest. Если инструмент быстрее на одном файле, вывод ограничен этим файлом и условиями теста. The cheapest не означает cheapest to use: добавочные платежи могут изменить общий расход. Для A2 тренируем ясную рекомендацию: B is lighter, but A is cheaper. B is the better choice for carrying every day. Это авторский выбор с основанием, а не утверждение о всех пользователях и всех магазинах.'},
 {title:'Слышать форму, не переударять окончание',text:'В неротическом UK cheaper /ˈtʃiːpə/ имеет слабое окончание; перед гласной возможен связующий r. В US r может звучать и перед согласной. В cheapest /ˈtʃiːpɪst/ окончание содержит /ɪst/, не отдельное ударное слово east. Than часто слабое /ðən/: язык участвует в /ð/, а не обычном /z/. В more carefully основное словесное ударение carefully сохраняется. В споре голосом выделяй критерий: CHEAPER, not FASTER. Партнёр должен понять сравнение; похожий текст ASR ещё не оценивает произношение.'}
 ],
 examples:examples(`The red bag is lighter than the black one.~Красная сумка легче чёрной.~Явно назван критерий веса.
This route is shorter.~Этот маршрут короче.~Второй маршрут может быть известен из контекста.
Which room is larger?~Какая комната больше?~Вопрос с be, без do.
The path is wider here.~Здесь тропинка шире.~Wide → wider без лишней e.
Today is hotter than yesterday.~Сегодня жарче, чем вчера.~Удваиваем t.
This task is easier.~Это задание легче.~Easy → easier.
The second story is more interesting.~Вторая история интереснее.~Длинная основа с more.
This seat is less comfortable.~Это сиденье менее удобное.~Less задаёт меньшую степень.
The new guide is more useful.~Новое руководство полезнее.~Useful не даёт usefuler.
The office is quieter now.~В офисе теперь тише.~Quiet допускает также more quiet.
This is the simplest version.~Это самая простая версия.~Simple имеет форму simplest.
The other host was more friendly.~Другой хозяин был дружелюбнее.~Нормативно также friendlier.
Your second answer is better.~Твой второй ответ лучше.~Good → better.
The traffic was worse on Monday.~В понедельник движение было хуже.~Bad → worse.
The library is farther away.~Библиотека дальше.~Further также нормативно о расстоянии.
We need further details.~Нам нужны дополнительные подробности.~Здесь не расстояние.
My sister is older than me.~Моя сестра старше меня.~Than me допустимо; не elder than.
He checks forms more carefully than I do.~Он проверяет формы внимательнее, чем я.~Сравниваем действия, -ly с more.
She arrived earlier than us.~Она приехала раньше нас.~Early → earlier также для наречия.
It is much cheaper but a little heavier.~Это намного дешевле, но немного тяжелее.~Разный разрыв по двум критериям.
This is my best result.~Это мой лучший результат.~После my дополнительный the не нужен.
It is one of the safest routes in the area.~Это один из самых безопасных маршрутов в районе.~Routes во множественном; область задана.
This is the least expensive of the three tickets.~Это самый недорогой из трёх билетов.~Группа ограничена тремя вариантами.
The app ran faster on this file, but we have not compared other files.~На этом файле приложение работало быстрее, но другие файлы мы не сравнивали.~Результат проверки не превращается в универсальную гарантию.`),
 banks:[
 bank('A202-comparison','forms','Степени: построение и исправление','practice',`short~form~Comparative от tall?~taller~Короткое прилагательное получает -er.
short~form~Superlative от large, без the?~largest~Конечное -e не удваиваем.
short~form~Comparative от thin?~thinner~Удваиваем n перед -er.
short~form~Superlative от busy, без the?~busiest~Согласная + y меняется на i.
short~form~Comparative от useful?~more useful~Useful требует more, не usefuler.
short~form~Superlative от expensive, без the?~most expensive~Длинная основа с most.
short~form~Comparative от good?~better~Неправильный ряд good–better–best.
short~form~Superlative от bad, без the?~worst~Неправильная форма worst.
short~form~Comparative от наречия carefully?~more carefully~Обычное -ly-наречие с more.
short~form~Comparative от наречия fast?~faster~Fast даёт faster без more.
short~form~Comparative от quiet: введи один нормативный вариант.~quieter|more quiet~Допустимы обе модели.
short~form~Comparative от simple: введи один нормативный вариант.~simpler|more simple~Simple допускает две модели сравнения.
short~form~Comparative от friendly: введи один нормативный вариант.~friendlier|more friendly~Friendly — прилагательное с двумя вариантами.
short~form~О расстоянии: comparative от far, один вариант.~farther|further~Обе формы возможны для физической дальности.
sentence~form~Исправь: The next task is more easier.~The next task is easier.~Не удваивать показатель сравнения.
sentence~form~Исправь: This is the most cheapest ticket.~This is the cheapest ticket.~Most и -est здесь не совмещаются.
sentence~form~Исправь: We need a gooder plan.~We need a better plan.~Неправильная форма better.
sentence~form~Сделай вопрос: This path is safer.~Is this path safer?~Меняем порядок be и подлежащего.
sentence~form~Собери: works / than / she / I do / faster.~She works faster than I do.~Faster относится к works, клауза уточняет сравнение.
text~form~Составь сравнительные предложения с reliable и well, сохрани разницу функций.~This tool is more reliable. It works better.~More reliable описывает инструмент, better — работу.`,'','Формы'),
 bank('A202-comparison','scope','Группа, величина разницы и точный смысл','practice',`short~scope~It is ___ cheaper: much/very?~much~Comparative усиливает much, не very.
short~scope~«Немного тяжелее»: a ___ heavier, bit/very?~bit~A bit — небольшая разница.
short~scope~One of the best ___: tool/tools?~tools~После one of группа во множественном числе.
short~scope~My ___ result: best/the best?~best~My уже определяет именную группу.
short~scope~The busiest cafe ___ the town: in/of?~in~Место сравнения вводится in.
short~scope~The cheapest ___ these four: in/of?~of~Of вводит конкретный набор.
short~scope~___ errors: less/fewer? Нейтрально о числе отдельных ошибок.~fewer~Errors — исчисляемое множественное.
short~scope~___ fuel: less/fewer?~less~Fuel — неисчисляемое количество.
short~scope~She is ___ than her cousin: elder/older?~older~Для явного than-сравнения нужна older.
short~scope~«Дополнительная информация»: further/farther information?~further~Further имеет непространственное значение дополнительности.
text~scope~Принимается ли She is taller than me? Дай более явный вариант.~Да. She is taller than I am.~Не объявлять разговорный объектный pronoun ошибкой.
text~evidence~A стоит 45, B — 50 евро, доставка обоих бесплатна. Сравни точную цену.~A is five euros cheaper than B.~Одинаковые условия и единицы позволяют точную разницу.
text~evidence~A и B весят 2 кг, C — 3 кг. Кто единственный самый лёгкий?~Единственного нет: A and B are both the lightest.~Не выдумывать победителя при равенстве.
text~scope~Уточни двусмысленное I like Lena more than Tom двумя разными полными предложениями.~I like Lena more than I like Tom. I like Lena more than Tom likes Lena.~Различить объект сравнения и другого оценивающего человека.`,'','Критерии'),
 bank('A202-comparison','sounds','Сравнение на слух','speaking',`speech~sound~Произнеси cheap / cheaper / cheapest в смысловых фразах; слушатель выбирает степень.~It is cheap. It is cheaper. It is the cheapest.~Слышимость /ə/ или нормативного r и /ɪst/; реальное аудио.
speech~sound~Скажи bigger / biggest без ударения на окончании и добавь существительное.~A bigger room. The biggest room.~Ударение на первой части, чёткая граница слова.
short~sound~В UK cheaper без следующей гласной окончание обычно /ə/ или /eɪ/?~/ə/|ə~Слабая гласная в неротической модели.
short~sound~В cheapest окончание /ɪst/ или /iːst/?~/ɪst/|ɪst~Краткая гласная, не слово east.
speech~sound~Прочитай faster than the bus. Партнёр проверяет, понятен ли объект сравнения.~Faster than the bus.~Than со звонким /ð/; не требовать одного акцента.
speech~sound~Выдели голосом LIGHTER, not CHEAPER. Собеседник пересказывает исправление.~It is lighter, not cheaper.~Контраст должен быть слышен без подсказки текстом.
speech~sound~Скажи more carefully / more quickly, не перенося всё ударение на -ly.~Check it more carefully. Finish it more quickly.~Понятность обеих характеристик и естественное ударение.
speech~message~Партнёр выбирает быстрый путь, ты — дешёвый. Уточни приоритет и ответь на его вопрос.~Is time more important than cost today? The bus is cheaper, but the train is faster.~Реальное взаимодействие, не две зачитанные роли.
speech~sound~Произнеси worse / worst в двух сравнениях; слушатель различает формы.~This is worse. That was the worst result.~Слышимость конечного /t/ по исходной записи.
text~sound~Почему US произношение r в larger не нужно считать ошибкой?~Это нормативный акцентный вариант; оцениваются понятность и нужная форма.~UK-транскрипция — модель, не запрет US.`,'','Произношение'),
 bank('A202-comparison','reading','Чтение: три сумки и разные приоритеты','reading',`short~evidence~Сколько сумок сравнивали? Число.~3|three~Сравниваются три конкретных варианта.
short~evidence~Какая сумка стоит меньше всех: Pine/Stone/Cloud?~Pine~Цена Pine — 30, ниже 45 и 60.
short~evidence~Какая сумка самая тяжёлая? Название.~Stone~Stone весит 900 г против 600 и 400 г.
short~evidence~Какая самая лёгкая? Название.~Cloud~Cloud весит 400 г, минимум набора.
short~evidence~На сколько евро Cloud дороже Pine? Число.~30|thirty~60 минус 30 = 30 евро.
short~evidence~Which bag did Iris choose?~Cloud~Iris выбрала Cloud для ежедневной дороги пешком.
short~evidence~Which bag did Dev choose?~Pine~Dev выбрал более дешёвую Pine.
short~evidence~Cloud is the most reliable bag in the city: true/false/not stated?~not stated~Долговечность не проверялась и весь город не сравнивался.
text~scope~Почему Stone не обязательно «худшая сумка», хотя самая тяжёлая?~У неё самая широкая ручка, что понравилось Dev; критерии различаются.~Не превращать один недостаток в общий рейтинг.
text~evidence~Какие сравнения про дождь допускает текст?~Никаких подтверждённых: сумки не испытывали под дождём.~Не выдавать ярлык waterproof за проведённую проверку.
text~message~Дай Iris рекомендацию с двумя сравнениями и ограничением бюджета.~Cloud is lighter than the other bags, but it is more expensive. It fits your 65-euro budget.~Сохранить цифры и задачу ежедневной ходьбы.
text~scope~Перепиши the best bag in the city так, чтобы вывод соответствовал исследованному набору и потребности Iris.~Cloud is the best choice for Iris among the three bags they compared, because she wants a light bag.~Не объявлять универсальный результат вне сравнения.`,
 `Iris and Dev wanted new bags for different reasons. Iris walks to work every day and carries her bag for almost an hour. Dev usually travels by bus and wants to spend less money. They compared three bags in one shop, not every bag available in the city.

The Pine bag cost thirty euros and weighed six hundred grams. The Stone bag cost forty-five euros and weighed nine hundred grams. It had the widest handle of the three. The Cloud bag cost sixty euros and weighed four hundred grams. All three had enough space for the same small laptop. Iris put her laptop in each one, so that part of the comparison was a real test rather than a guess from a photograph.

Iris found the Cloud bag easier to carry than the others. It was the lightest but also the most expensive. Her budget was sixty-five euros, so she could pay for it. Dev liked the Stone bag's wide handle, but he did not want to spend more than thirty-five euros. He chose Pine. It was heavier than Cloud but cheaper than both alternatives. Their different choices were not a mistake: they had different needs and limits.

They did not test the bags in the rain. A label on Cloud said that the material was waterproof, but neither buyer checked that claim. They also did not know which bag would last longest. When Iris wrote “the best bag in the city” in a message, Dev asked her to change it. They knew only that Cloud was the lightest of the three bags in front of them and the best choice for Iris's daily walk. A useful recommendation can be clear without pretending to answer every possible question.`),
 bank('A202-comparison','listening','Аудирование: путь к выставке','listening',`short~evidence~Who is speaking? Имя.~Ada~Ada называет себя в начале.
short~evidence~Поездка автобусом стоит сколько фунтов? Число.~4|four~Стоимость автобуса — четыре фунта.
short~evidence~Поезд стоит сколько фунтов? Число.~7|seven~Стоимость поезда — семь фунтов.
short~evidence~Поездка на такси длится сколько минут? Число.~15|fifteen~Такси занимает пятнадцать минут.
short~evidence~Что быстрее: train/taxi?~taxi~Такси 15 минут, поезд 20.
short~evidence~Что дешевле: train/bus?~bus~Автобус 4 фунта, поезд 7.
short~evidence~Mila has agreed to share the taxi: true/false/not stated?~false~Ada прямо говорит, что Mila пока не согласилась.
text~scope~Объясни, почему «train is the fastest» не подходит для всех трёх вариантов.~Такси быстрее поезда: 15 против 20 минут.~Учитывать всю указанную группу.
text~message~Предложи выбор при лимите 8 фунтов и желании доехать скорее. По данным сообщения.~The train is faster than the bus and costs seven pounds, so it fits the budget.~Такси стоит 18; даже половина — 9, больше лимита Ada.
text~evidence~Если Mila согласится разделить 18 фунтов поровну, уложится ли Ada в 8? Что ещё не подтверждено?~Нет: половина — 9 фунтов, выше лимита 8. Кроме того, Mila пока не согласилась.~Проверить и арифметику, и отсутствие договорённости.`,
 `Hi, it's Ada. I have checked three ways to reach the exhibition from our hotel. The bus costs four pounds and takes thirty-five minutes. The train costs seven pounds and takes twenty minutes. A taxi costs eighteen pounds for the whole journey and takes about fifteen minutes in the current traffic.

The taxi is the fastest of these three options, but it is also the most expensive if one person pays the whole fare. The train is faster than the bus, although the bus is cheaper. My travel budget is eight pounds. I would prefer to arrive sooner, so the train looks like the better choice for me.

Mila might want to share a taxi, but she hasn't agreed yet. Please don't divide the fare and call it a confirmed plan. I will ask her when she finishes breakfast. These times are estimates for this morning, not promises about every journey. We still need to leave some time for finding the entrance.`),
 bank('A202-comparison','production','Выбор с основанием и возражением','writing',`sentence~message~Собери: is / ten euros / A / cheaper / than B.~A is ten euros cheaper than B.~Точная разница ставится перед comparative.
sentence~message~Исправь: This is one of the most useful tool.~This is one of the most useful tools.~Группа после one of во множественном числе.
text~message~A загружается 2 секунды, B — 4 на одном тестовом файле. Дай осторожное сравнение.~A loaded faster than B on this file. We have not tested other files.~Не делать вывод об общей надёжности.
text~scope~Скажи «немного дороже, но намного удобнее» и объясни две степени разницы.~It is a little more expensive but much more comfortable.~A little и much относятся к разнице, не меняют прилагательные.
text~message~Напиши 100–140 слов о вымышленных курсах: Oak — 20 евро, 8 мест; Reed — 25 евро, 6 мест; Lake — 25 евро, 12 мест. Нужна группа 10 человек и лимит 30 евро на место.~We compared three short courses for our group. Oak costs twenty euros per person, Reed costs twenty-five, and Lake costs twenty-five. Oak is the cheapest, but it has only eight places. Reed has fewer places than Oak, so neither can take all ten of us. Lake has the most places and is five euros more expensive than Oak. It still fits our thirty-euro limit. I recommend Lake for this group because everyone can attend together. However, we have not compared the teachers or the quality of the materials. Lake is the most practical option among these three for our group size, not necessarily the best course for every student.~Связный выбор по числам; одинаковая цена Reed/Lake; качество неизвестно; критерии важнее совпадения с образцом.
text~message~Друг написал This phone is better. Сформулируй три уточняющих вопроса, не называя реальных брендов.~Better for which task? Is the battery life longer? Which phones did you compare?~Явные критерий, измерение и группа сравнения.
speech~message~Выбирайте два вымышленных маршрута: твой короче, партнёра тише. Задайте вопросы и согласуйте критерий.~Which matters more today, time or noise? Your route is quieter, but mine is shorter.~Реальный ответ может изменить решение; не требовать заранее заданного выбора.
speech~sound~Сообщи The red one is CHEAPER, but the blue one is LIGHTER и ответь, почему это важно.~The red one is cheaper, but the blue one is lighter. I carry it all day.~Понятное контрастное ударение и ответ на живой вопрос.
text~message~Отредактируй рекламу «fastest ever» после проверки лишь трёх версий на одном устройстве.~It was the fastest of the three versions on this device in our test.~Ограничить группу, условия и свидетельство.
text~message~Сохрани своё первое сравнение и перепиши его после двух замечаний преподавателя.~Исходник: B is more cheaper and the best. Новая версия: B is cheaper than A and is the better choice for our budget.~Две приоритетные правки с объяснением; свои данные вместо копирования образца.`,'','Применение'),
 bank('A202-comparison','review','Сравнение без подсказки и перенос','review',`short~form~Закрой таблицу: superlative от heavy без the?~heaviest~Y меняется на i перед -est.
short~form~Закрой таблицу: comparative от badly?~worse~Неправильная форма такая же, как для bad.
sentence~form~Сделай отрицание: The new screen is brighter.~The new screen is not brighter.|The new screen isn't brighter.~Отрицание не меняет форму comparative.
sentence~scope~Исправь: This path is very safer.~This path is much safer.|This path is far safer.|This path is a lot safer.~Для усиления сравнительной степени нужны much/far/a lot.
text~scope~«A is not heavier than B»: обязательно ли A легче?~Нет: A может иметь тот же вес. Отрицание большего не исключает равенства.~Не превращать not heavier в строго lighter.
text~evidence~В первом замере A быстрее, во втором B. Дай честное резюме.~A was faster in the first test, but B was faster in the second. We need more information.~Не выбирать удобный результат и не скрывать противоречие.
text~message~Через семь дней сравни два новых предмета по трём критериям и назови один неизвестный.~This bag is lighter and cheaper, but that one has a wider handle. I don't know which lasts longer.~Новый материал, явный предмет сравнения, честная граница.
speech~sound~Произнеси shortest / short / shorter в другом порядке; слушатель записывает степень.~Shorter, short, shortest.~Настоящее слушание, не оценка по напечатанному ряду.
text~scope~Объясни, почему my best answer не требует the.~My уже определяет answer; my the best answer не подходит.~Притяжательное и артикль не дублируются.
text~message~Свяжи A201 и сравнение: новая версия проверена один раз и загрузилась быстрее; остальные функции неизвестны.~We have tested the new version once. It loaded faster, but we haven’t checked the other functions.~Отчёт о проверке и ограниченный сравнительный вывод.`,'','Повторение')
 ],
 tests:[exam('A202-comparison','a',`short~form~Comparative от wet?~wetter~Удваиваем конечную t.
short~form~Superlative от safe, без the?~safest~Конечная e уже есть в основе.
short~form~Comparative от comfortable?~more comfortable~Длинное прилагательное использует more.
short~form~Superlative от well, без the?~best~Неправильная форма наречия well.
short~form~Comparative от early?~earlier~Y после согласной меняется на i.
short~scope~___ more interesting: much/very?~much~Усилитель сравнительной степени — much.
short~scope~The oldest house ___ this street: in/of?~in~Street задаёт место сравнения.
short~scope~One of the clearest ___: answer/answers?~answers~One of требует множества после of.
sentence~form~Исправь: The green route is more shorter.~The green route is shorter.~Одна сравнительная маркировка.
sentence~form~Исправь: This is the badest result.~This is the worst result.~Неправильная превосходная форма worst.
sentence~scope~Исправь: It is my the newest coat.~It is my newest coat.~My заменяет определитель the.
sentence~form~Вопрос с which: Which bag / be / lighter?~Which bag is lighter?~Which bag — субъект, затем is.
short~evidence~A — 12 евро, B — 18, C — 18. Самый дешёвый: A/B/C?~A~12 — минимальная цена из набора.
text~evidence~A — 5 минут, B — 3, C — 3. Почему «B — единственный самый быстрый» неверно?~B и C имеют одинаковое минимальное время; оба самые быстрые из трёх.~Учитывать ничью и группу.
text~scope~Результат the safest of these routes разрешает вывод the safest in the country?~Нет: группа проверенных маршрутов не равна всей стране.~Не расширять область вывода.
text~message~Напиши 100–140 слов: вымышленные комнаты Elm — 40 евро, 6 мест; Bay — 55 евро, 10 мест; Hill — 70 евро, 10 мест. Нужно 8 мест, бюджет 60 евро; акустика неизвестна.~We need a room for eight people and can spend sixty euros. Elm costs forty euros, Bay costs fifty-five, and Hill costs seventy. Elm is the cheapest, but it has only six seats. Bay and Hill both have ten seats, so neither has more seats than the other. Bay is fifteen euros cheaper than Hill and fits our budget. I recommend Bay among these three rooms because it has enough seats without going over the limit. We have not tested the sound in any of them. Could we visit Bay and check whether everyone can hear clearly? The price and seat numbers support our choice, but they do not prove that the room is quiet.~Сравнения, точные ограничения, ничья по вместимости и неизвестная акустика; содержательная проверка.
text~message~Задай два вопроса к faster, не меняя тему на цену автоматически.~Faster than which version? What task did you use in the test?~Уточнить объекты и условия сравнения.
speech~message~Выберите с партнёром более дешёвую или более лёгкую вещь; узнай приоритет и объясни компромисс.~Which matters more for you, price or weight? This one is cheaper, but that one is lighter.~Нужен живой ответ и решение, а не чтение образца.
speech~sound~Произнеси wider / widest в своём сравнении, выдели важный критерий.~This path is wider. That is the widest path in the park.~Реально прослушать окончания и ударение.
short~sound~В shortest окончание обычно /ɪst/ или /eɪst/?~/ɪst/|ɪst~Краткая гласная в безударном окончании.`),
 exam('A202-comparison','b',`short~form~Comparative от hot?~hotter~Конечная согласная удваивается.
short~form~Superlative от happy, без the?~happiest~Y меняется на i перед окончанием.
short~form~Comparative от slowly?~more slowly~Обычное -ly-наречие с more.
short~form~Comparative от bad?~worse~Неправильная сравнительная форма.
short~form~О дистанции superlative от far, без the: один вариант.~farthest|furthest~Оба ряда допускаются в значении расстояния.
short~scope~A ___ colder: little/very?~little~A little обозначает небольшую разницу.
short~scope~The longest ___ the four paths: in/of?~of~Of вводит конкретный набор из четырёх.
short~scope~___ chairs: fewer/less? Нейтральная учебная норма.~fewer~Считаем отдельные предметы, не массу.
sentence~form~Исправь: The yellow case is more lighter.~The yellow case is lighter.~Не удваивать сравнительную маркировку.
sentence~form~Исправь: This is the most easiest exercise.~This is the easiest exercise.~Most и -est не соединяются.
sentence~scope~Исправь: It is one of the busiest station.~It is one of the busiest stations.~Station должно быть множественным после one of.
sentence~form~Собери: checks / more carefully / than we do / she.~She checks more carefully than we do.~Сравнение действий с явной второй клаузой.
short~evidence~A — 800 г, B — 500 г, C — 700 г. Самый лёгкий: A/B/C?~B~500 г — наименьший вес.
text~evidence~A и B стоят 22 евро, C — 30. Можно ли объявить A дешевле B?~Нет: A and B cost the same. Оба дешевле C.~Не путать равенство с меньшей ценой.
text~scope~Почему not slower не обязательно означает faster?~Возможна равная скорость; отрицание меньшей не требует большей.~Сохранить возможность равенства.
text~message~Напиши 100–140 слов: три вымышленных принтера Red — 80 евро/6 страниц в минуту, Blue — 100/10, White — 120/10. Лимит 110; ресурс неизвестен.~We compared three printers for our small club. Red costs eighty euros and prints six pages a minute. Blue costs one hundred euros and prints ten. White also prints ten pages a minute, but it costs one hundred and twenty euros. Red is the cheapest, while Blue and White are equally fast in this test. Our limit is one hundred and ten euros, so White is too expensive for us. I recommend Blue because it is faster than Red and cheaper than White. However, we do not know which printer lasts longest or uses less ink. We need those details before we make a final decision. These figures do not show long-term reliability.~Связный предварительный выбор, две равные скорости, пределы данных и неизвестные расходы.
text~message~Перепиши This is the best tool для конкретного новичка и трёх испытанных вариантов, не обещая универсальность.~This is the best choice for this beginner among the three tools we tested.~Группа и адресат ограничивают рекомендацию.
speech~message~Партнёр выбирает самый быстрый путь. Ты объясняешь, что он дороже, задаёшь вопрос о бюджете и реагируешь на ответ.~The taxi is faster, but it is more expensive. How much can we spend?~Реальное уточнение и согласование, не автоматический выбор такси.
speech~sound~Произнеси better / best в осмысленном ответе и попроси слушателя назвать формы.~My second attempt was better. My third was my best.~Проверять реальную запись, не транскрипт.
short~sound~В faster по неротической UK-модели конечная гласная /ə/ или /uː/?~/ə/|ə~Слабое окончание; US r нормативно.`)]
};

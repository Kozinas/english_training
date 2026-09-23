import {bank,exam,examples,goal} from './unit-tools.mjs';
import {comparisonSources} from './comparison.mjs';
export default {
 id:'A202-degree',topic:'A202',title:'Равенство, избыток и достаточность: as…as, too, enough',prerequisites:['A202-comparison'],references:['comparison','quantity'],sources:comparisonSources,
 goals:[goal('equal','Выражать равенство и направленное неравенство','equality'),goal('limit','Соотносить признак и количество с целью','limits'),goal('evidence','Извлекать ограничения и проверять пригодность','reading'),goal('message','Предлагать подходящий вариант и согласовывать условия','production'),goal('sound','Слышимо передавать достаточность и отрицание','sounds')],
 explanation:[
 {title:'As…as сохраняет исходную форму',text:'The blue box is as heavy as the red one: веса равны в контексте сравнения. Между as ставь исходную форму, не comparative: as heavy as, не as heavier as. Для действия та же рамка с наречием: She types as quickly as I do. Можно усилить равенство just as useful as — столь же полезный. Равенство по одному признаку не делает предметы одинаковыми во всём: одинаковая цена не доказывает одинаковое качество. Во второй части можно назвать предмет или полную клаузу, которая снимает неоднозначность.'},
 {title:'Отрицание меняет направление вывода',text:'A is not as wide as B означает, что A уже B. Не перепутай направление: B is wider than A. Not so wide as также нормативно в отрицательной рамке. Но A is not wider than B разрешает два случая: A уже или имеет ту же ширину. Поэтому отрицательный comparative и not as…as не взаимозаменяемы во всех контекстах. Для явного равенства напиши Both are the same width. Грамматический выбор должен сохранять сведения, а не добавлять то, чего измерение не показало.'},
 {title:'Количество и сходство',text:'As many chairs as — столько же стульев: many с исчисляемым множественным. As much space as — столько же места: much с неисчисляемым. В The room has as many seats as the hall сравнивается количество мест, не площадь. The same price as использует the same + noun + as; similar to означает похожий, но не обязательно одинаковый. Different from — нейтральная опора; different to встречается в UK, different than особенно в US. В свободном ответе не исправляй эти нормативные варианты автоматически; важно, что именно совпадает или различается.'},
 {title:'Very сообщает степень, too — превышение порога',text:'Very hot — очень горячий; too hot to drink — слишком горячий, чтобы пить. Too обычно означает больше, чем допустимо или желательно для названной цели. Чай может быть very hot, но удобен для приготовления напитка; тот же чай too hot for a child to drink now. Уточняй for whom и to do what. Схема too + adjective/adverb + to: too heavy to carry, too quickly to follow. Не все фразы с too описывают буквальную невозможность: оценка бывает субъективной, а too kind — вежливая гипербола. Здесь тренируем явные практические ограничения.'},
 {title:'Enough зависит от того, что измеряется',text:'Enough chairs — достаточно стульев: enough перед существительным. Big enough — достаточно большой: enough после прилагательного. Quickly enough — достаточно быстро: после наречия. Enough big chairs означает достаточное число больших стульев; big enough chairs — стулья достаточного размера. Разница положения меняет смысл, а не только красоту фразы. Если объект известен, можно сказать We have enough. Not enough time означает нехватку времени, но само по себе не сообщает точное количество. Достаточность требует цели: пять мест достаточно для пяти, но не для шести.'},
 {title:'For, to и часть определённого набора',text:'The desk is wide enough for two screens; the text is clear enough to read. Когда действующее лицо нужно назвать: clear enough for me to read. Не заменяй to на for перед базовым глаголом: не enough for read. В This box is light enough to carry объект carry уже понятен как this box; не дублируй его it в этой модели. Но The lamp is bright enough for me to read the map содержит другой объект — map. Enough of the water / enough of these chairs / enough of them — часть определённого набора; обычное enough water не требует of.'},
 {title:'Избыток и недостаток количества',text:'Too many files — слишком много отдельных файлов, too much information — слишком много информации. Too few chairs / too little time — меньше, чем нужно. A few chairs / a little time просто некоторое количество: оно может оказаться достаточным, а может не хватить. Few chairs / little time часто подчёркивают малость; не переводятся как строго ноль. Повторение A103 здесь используется для выбора подходящего решения. В There are enough chairs согласование по chairs, в There is enough time — по time. Объём не превращается в успех: enough time не означает, что работу действительно закончили.'},
 {title:'Преобразование должно сохранять цель',text:'The bag is too heavy for Jo to lift можно передать как The bag is not light enough for Jo to lift: тот же человек, действие и порог. Но too cheap не равно not expensive enough для любой задачи без контекста: дешёвая цена может быть желательной, подозрительной или ниже установленного минимума. В упражнениях с однозначным антонимом сохраняй участников и цель; свободные неоднозначные формулировки оцениваются по смыслу. Предложение The room is not too small лишь снимает один запрет, но не доказывает, что цена, доступность и акустика подходят.'},
 {title:'Решение как проверка нескольких условий',text:'При выборе площадки запиши обязательные условия: места, бюджет, доступность, нужное оборудование. Потом проверь каждое отдельно. Один вариант может быть as cheap as другой, но не иметь enough seats; самый большой может быть too expensive. Если число людей изменилось, достаточность меняется без изменения самой комнаты. Уточняющий вопрос — часть работы: How many people are coming? Не отмечай бронирование подтверждённым лишь потому, что вариант подходит. Технический перенос такой же: достаточно памяти для одной задачи не доказывает пригодность для всех программ.'},
 {title:'Слышимость отрицания и устойчивых групп',text:'Enough /ɪˈnʌf/ заканчивается на /f/, а не читается по буквам gh. В as…as слабая форма as может быть /əz/; при контрасте звучит сильнее. Too часто /tuː/, инфинитивное to в связной речи нередко /tə/: не делай вывод по одной длине звука без контекста. Ключевое not в not big enough должно быть понятным: его потеря меняет решение. Скажи условие, попроси слушателя повторить, что подходит и что нет, затем измени число участников. Оценка требует реального аудио, не процента совпадения распознанных слов.'}
 ],
 examples:examples(`This chair is as comfortable as that one.~Этот стул такой же удобный, как тот.~Исходная форма между as.
The green bag is not as heavy as the red one.~Зелёная сумка не такая тяжёлая, как красная.~Зелёная легче, направление важно.
She types as quickly as her colleague.~Она печатает так же быстро, как коллега.~Наречие внутри рамки.
The new room has as many seats as the old one.~В новой комнате столько же мест.~Many с исчисляемыми seats.
We have as much time as they do.~У нас столько же времени, сколько у них.~Much с time, явная клауза сравнения.
The tickets are the same price.~Билеты стоят одинаково.~Равенство цены, не качества поездки.
This map is similar to mine.~Эта карта похожа на мою.~Похожая не обязательно идентична.
The plan is different from ours.~План отличается от нашего.~Different from — нейтральная опора.
The tea is very hot.~Чай очень горячий.~Ещё не сказано, что пить нельзя.
The tea is too hot to drink now.~Чай сейчас слишком горячий, чтобы пить.~Названы избыток и цель.
The handle is too small for my hand.~Ручка слишком мала для моей руки.~Порог зависит от человека.
He speaks too quickly for me to follow.~Он говорит слишком быстро, чтобы я успевал понимать.~Too + adverb + for me + to.
The text is clear enough to read.~Текст достаточно чёткий для чтения.~Enough после adjective.
She answered quickly enough.~Она ответила достаточно быстро.~Enough после наречия.
There are enough chairs for everyone.~Стульев достаточно для всех.~Enough перед существительным.
There isn't enough space for two desks.~Для двух столов недостаточно места.~Неисчисляемое space, is not.
We have enough of these cups.~У нас достаточно этих чашек.~Of перед определённым набором.
Have enough of them arrived?~Достаточно ли из них приехало?~Of перед местоимением.
There are too many open tabs.~Открыто слишком много вкладок.~Счётное множественное с many.
There is too much noise.~Слишком много шума.~Неисчисляемое с much.
There are too few seats for twelve people.~Для двенадцати человек слишком мало мест.~Нехватка по явно названной цели.
We have a little time, but not enough to finish.~Время немного есть, но закончить не хватит.~Ненулевое количество не равно достаточности.
We need enough large boxes, not just boxes that are large enough.~Нам нужно достаточно больших коробок, а не просто коробки подходящего размера.~Число предметов и размер — разные условия.
The hall is as cheap as the room, but we haven't confirmed that it is available.~Зал стоит столько же, но доступность ещё не подтверждена.~Равенство цены не подтверждает бронь.`),
 banks:[
 bank('A202-degree','equality','Равенство, различие и направление','practice',`short~equal~As ___ as: tall/taller?~tall~Между as нужна исходная форма.
short~equal~As ___ chairs as: much/many?~many~Chairs — счётное множественное.
short~equal~As ___ water as: much/many?~much~Water — неисчисляемое количество.
short~equal~The same size ___: as/than?~as~Устойчивая рамка the same ... as.
short~equal~Similar ___: to/as?~to~Similar to, но the same as.
short~equal~A is not as wide as B. Что шире: A/B?~B~A уже B, значит B шире A.
short~equal~A is as expensive as B. Цена equal/different?~equal~Равенство цены задано конструкцией.
sentence~equal~Исправь: She runs as faster as me.~She runs as fast as me.~Исходное наречие fast между as.
sentence~equal~Собери: is / as / my room / bright / as yours.~My room is as bright as yours.~Два as окружают исходный признак.
sentence~equal~Передай A уже B через not as: A / wide / B.~A is not as wide as B.|A isn't as wide as B.|A is not so wide as B.|A isn't so wide as B.~Отрицательная рамка задаёт меньшую ширину A.
text~equal~A is not larger than B. Запиши два допустимых отношения размера.~A меньше B либо того же размера; равенство не исключено.~Не превращать отрицание большего в строго меньшее.
text~equal~Опиши равное количество стульев, но разную площадь двух комнат.~The rooms have as many chairs as each other, but one has more floor space.~Счёт мест и площадь независимы.`,'','Равенство'),
 bank('A202-degree','limits','Too/enough и количество: форма и решение','practice',`short~limit~___ time: enough/enough of? Без определителя.~enough~Перед обычным time не нужен of.
short~limit~Clear ___: enough/too? Значение «достаточно ясно».~enough~Enough после прилагательного.
short~limit~___ noisy to study: too/enough?~too~Too + adjective + to сообщает превышение порога.
short~limit~Too ___ requests: much/many?~many~Requests — отдельные счётные запросы.
short~limit~Too ___ luggage: much/many?~much~Luggage — неисчисляемое.
short~limit~Too ___ chairs for the class: few/little?~few~Chairs исчисляются, речь о нехватке.
short~limit~Too ___ space: few/little?~little~Space неисчисляемое, нехватка пространства.
short~limit~Enough ___ those plates: of/for?~of~Часть определённого набора требует of.
short~limit~Enough ___ us: of/to? В значении «достаточно людей из нас».~of~Of перед местоимением.
short~limit~Big enough ___ hold a notebook: to/for?~to~Перед базовым глаголом to-infinitive.
sentence~limit~Исправь: The text is enough clear.~The text is clear enough.~Прилагательное перед enough.
sentence~limit~Исправь: We have enough of money.~We have enough money.~Без определителя перед money of не нужен.
sentence~limit~Исправь: She works enough quickly.~She works quickly enough.~Enough следует за наречием.
sentence~limit~Исправь: The lid is too tight for open.~The lid is too tight to open.~Перед действием нужен to-infinitive.
sentence~limit~Перепиши с not light enough: The case is too heavy for me to carry.~The case is not light enough for me to carry.|The case isn't light enough for me to carry.~Сохраняем человека и действие, меняем полюс признака.
text~limit~Сравни enough warm coats и warm enough coats.~В первом достаточно тёплых пальто по количеству; во втором пальто достаточно тёплые по свойству.~Положение enough меняет объект оценки.
text~limit~Почему a few seats не гарантирует enough seats?~Несколько мест может быть меньше, чем нужно группе; нужна численность людей.~Некоторое количество не доказывает достаточность.
text~limit~Дай ситуацию, где very cold допустимо, но too cold неверно для задачи.~The freezer is very cold, and that is useful for keeping food frozen. It is not too cold for this purpose.~Цель определяет превышение; не считать very и too синонимами.`,'','Пределы'),
 bank('A202-degree','sounds','Enough, as…as и слышимое отрицание','speaking',`short~sound~Enough оканчивается на /f/ или /g/?~/f/|f~Gh в этом слове даёт звук /f/.
short~sound~Ударная гласная enough: /ʌ/ или /uː/?~/ʌ/|ʌ~Учебная форма /ɪˈnʌf/.
speech~sound~Произнеси enough / not enough; партнёр выбирает, можно ли начинать работу.~We have enough paper. We do not have enough paper.~Отрицание и конечный /f/ должны быть слышны по аудио.
speech~sound~Скажи as big as / not as big as с понятным not. Слушатель называет отношение размеров.~It is as big as mine. It is not as big as mine.~Реальное различение равенства и меньшего размера.
speech~sound~Произнеси too heavy to carry смысловой группой, не проглатывая carry.~It is too heavy to carry.~Сильное too и возможное слабое to, оба нормативных акцента.
speech~sound~Прочитай enough chairs и chairs that are big enough; партнёр объясняет различие.~Enough chairs. Chairs that are big enough.~Понятно, сравниваем количество или размер.
speech~message~Попроси партнёра говорить медленнее, назвав проблему с too. Ответь на его уточнение.~You are speaking too quickly for me to follow. Could you slow down?~Живой запрос, реакция и проверка понимания.
speech~sound~Выдели голосом for TWO people, not FOUR в предложении о достаточности.~There is enough space for two people, not four.~Порог должен быть понятен слушателю.
speech~sound~Скажи much / many в конструкциях с noise и messages, затем партнёр повторяет условие.~Too much noise. Too many messages.~Слышимость разных слов без фонетического вывода из ASR.
text~sound~ASR пропустил not в not enough. Почему нельзя автоматически засчитать или обвинить ученика?~Нужно прослушать исходное аудио и выяснить, было ли слышимо отрицание.~Ошибка сервиса и ошибка речи не тождественны.`,'','Произношение'),
 bank('A202-degree','reading','Чтение: подходящее помещение при изменении группы','reading',`short~evidence~Сколько людей было в исходной группе? Число.~8|eight~Исходно восемь участников.
short~evidence~Какой бюджет за помещение? Число евро.~60|sixty~Лимит — шестьдесят евро.
short~evidence~Сколько мест в Loft? Число.~8|eight~Loft рассчитан на восемь мест.
short~evidence~Стоимость Loft и Yard equal/different?~equal~Оба стоят пятьдесят евро.
short~evidence~Какой вариант имеет 12 мест? Название.~Yard~Yard вмещает двенадцать.
short~evidence~Studio fits the budget: true/false/not stated?~false~Studio стоит 75 при бюджете 60.
short~evidence~Сколько людей стало в группе после двух новых участников? Число.~10|ten~Восемь плюс два — десять.
short~evidence~The Yard booking is confirmed: true/false/not stated?~false~В тексте прямо сказано: подтверждения ещё нет.
text~limit~Почему Loft сначала подходил по местам, а затем перестал?~Помещение не изменилось, но десяти людям уже недостаточно восьми мест.~Достаточность относительна к потребности.
text~equal~Назови равенство и различие Yard/Loft в двух английских предложениях.~Yard is as cheap as Loft. It has more seats than Loft.~Не перепутать одинаковую цену с одинаковой вместимостью.
text~message~Объясни, что надо сделать до обещания встречи в Yard.~Нужно получить подтверждение доступности и проверить, подходит ли шум для разговора.~Пригодность по цене и местам не равна готовой брони.
text~evidence~Можно ли утверждать, что Yard непригоден из-за шума?~Пока нет: во время визита было шумно, но неизвестна слышимость вечером; нужна проверка.~Не считать отсутствие данных доказанным провалом.`,
 `A local book group needs a place for a discussion. There are eight people on the first list, and they can spend sixty euros on the room. They compare three places: Loft, Yard and Studio. These are invented names for the exercise, not recommendations for real venues.

Loft costs fifty euros and has eight seats. Its owner says the room is quiet in the evening. Yard costs fifty euros too, but it has twelve seats. Studio has fourteen seats and costs seventy-five euros. Studio is large enough for the group, but it is too expensive for their present budget. Loft has enough seats for the original list, and Yard has more than they need.

On Wednesday, two more people ask to join. The organiser accepts them, so the group now has ten members. Loft has not become smaller, but it no longer has enough seats for everyone. Yard is as cheap as Loft and has enough seats for the larger group. The organiser visits Yard during the afternoon. There is music in the next room, and she finds it difficult to hear her friend. The owner says the music will stop before the evening discussion, but the organiser has not checked an evening session.

She sends a request for Yard and asks about the noise. There is no booking confirmation yet. Her draft message says, “We have found the perfect room and booked it.” Her friend suggests a more accurate version: “Yard fits our budget and group size. We still need confirmation and a check that it is quiet enough for a discussion.” The group wants a useful plan, not a promise based only on the number of chairs. The organiser keeps the unanswered questions beside the price list.`),
 bank('A202-degree','listening','Аудирование: коробки для переезда','listening',`short~evidence~Who is speaking? Имя.~Lee~Говорящий представляется как Lee.
short~evidence~Сколько больших коробок есть? Число.~4|four~В наличии четыре большие коробки.
short~evidence~Сколько маленьких коробок есть? Число.~6|six~Маленьких шесть.
short~evidence~Хватит ли больших коробок для пяти ламп по одной в каждой: yes/no?~no~Четырёх коробок меньше пяти ламп.
short~evidence~Small boxes are big enough for the lamps: true/false/not stated?~false~Маленькие слишком узкие для оснований ламп.
short~evidence~Может ли Lee поднять заполненный синий ящик один: yes/no?~no~Он прямо называет ящик слишком тяжёлым для себя.
short~evidence~Sam has agreed to help: true/false/not stated?~false~Sam ещё не ответил.
text~limit~Различи две проблемы: число больших коробок и ширина маленьких.~Больших недостаточно по количеству; маленькие не подходят по размеру.~Не решать нехватку одним словом enough без объекта.
text~message~Предложи вопрос перед обещанием забрать всё сегодня.~Can we get one more large box, and can someone help lift the blue crate?~Адресовать обе реальные потребности; возможны иные разумные решения.
text~evidence~Почему новая просьба Sam не означает решённую проблему переноски?~Ответа нет; готовность и физическая помощь не подтверждены.~Не переносить запрос в выполненное действие.`,
 `Hello, it's Lee. I am packing the lamps for the move. We have four large boxes and six small ones. There are five lamps, and each needs its own large box. The small boxes are too narrow for the lamp bases, although they are useful for cables. We have plenty of small boxes, but not enough large ones.

The blue crate contains books. It is too heavy for me to lift on my own. I can carry the empty crate easily, so the problem is the weight of the books, not the shape of the crate. I have asked Sam to help, but he has not replied yet.

Please bring one more large box if you can. We also need to agree on a safe way to move the books. I haven't promised that everything will leave today. Enough packing material is only one part of the job; we need enough help as well.`),
 bank('A202-degree','production','Условия, письмо и переговоры','writing',`sentence~message~Исправь: We have too much chairs.~We have too many chairs.~Исчисляемое множественное требует many.
sentence~message~Исправь: The labels are enough large to read.~The labels are large enough to read.~Enough после прилагательного.
text~message~Скажи, что два экрана одинаковой ширины, но один недостаточно яркий для улицы.~The screens are the same width, but one is not bright enough to use outside.~Равенство одной характеристики не подтверждает другую.
text~message~В комнате 7 мест, гостей 9. Предложи два решения без обещания выполненной брони.~We can ask for two more chairs, or look for a larger room. We need confirmation before inviting everyone.~Адресовать нехватку и отделить план от результата.
text~message~Напиши 100–140 слов о вымышленной поездке: van A — 6 мест/80 евро, B — 8/100, C — 8/130. Семеро людей, лимит 110; багаж ещё не измерен.~We need transport for seven people and have a budget of one hundred and ten euros. Van A has six seats and costs eighty euros. It is cheap, but there are not enough seats for all of us. Van B has eight seats and costs one hundred euros. Van C has as many seats as B, but it costs thirty euros more, so it is too expensive for our budget. B looks like the right choice for now. However, we have not measured the bags or checked the luggage space. Could the owner tell us how much space is available? Enough seats do not automatically mean enough room for everyone's bags. We also need a booking confirmation.~Равенство, нехватка, бюджет, неизвестный багаж, вопрос; открытый ответ по смыслу.
text~limit~Переведи «Времени немного есть, но для полного теста недостаточно», не превращая в «времени нет».~We have a little time, but not enough for the full test.~Сохранить ненулевой остаток и конкретную цель.
speech~message~Собеседник говорит «комната достаточно большая». Уточни число людей, оборудование и цену, затем дай предварительное решение.~Big enough for how many people? Is there enough space for a screen? How much does it cost?~Три содержательных вопроса и реакция на реальные ответы.
speech~sound~Сообщи enough chairs, not enough desks с ясным отрицанием; партнёр повторяет, чего не хватает.~We have enough chairs, but not enough desks.~Оценивать по аудио и пониманию собеседника.
text~message~Попроси уточнить сообщение «too slow»: медленно для чего и при каких условиях?~Too slow for which task? How long did it take, and what device did you use?~Не делать технический диагноз без данных.
text~limit~Опиши ситуацию с few и a few, сохраняя отличие оценки, а затем проверь достаточность.~Few people came, so the organiser was disappointed. A few people came and helped. Whether that was enough depends on the work.~Не приравнивать few к нулю, а a few к достаточности.
text~message~Сохрани черновик рекомендации, затем добавь пропущенное условие и объясни изменение.~Первая версия: B is cheap enough. Новая: B is cheap enough, but we still need to check the seat count.~Пересмотр из-за нового критерия, без стирания исходного ответа.
speech~message~Партнёр меняет число участников с четырёх на семь. Пересмотри достаточность шести мест и согласуй следующий шаг.~Six seats were enough for four people, but not for seven. Can we add a chair?~Реальный ответ и изменение решения, не заученный монолог.`,'','Применение'),
 bank('A202-degree','review','Смешанная проверка условий','review',`short~equal~As ___ information as: much/many?~much~Information неисчисляемое, повторение A103.
short~limit~Too ___ time: few/little?~little~Нехватка неисчисляемого времени.
sentence~limit~Собери: enough / there / space / is / not.~There is not enough space.|There isn't enough space.~Enough перед существительным, be согласуется со space.
sentence~equal~Исправь: The red ticket is as cheaper as the blue one.~The red ticket is as cheap as the blue one.~В равенстве используется исходный признак.
text~limit~Does enough money mean that the person has already paid? Объясни.~Нет: наличие денег позволяет оплатить, но не доказывает совершённую оплату.~Связь с A201: возможность и выполненность различны.
text~evidence~A has ten seats. Достаточно ли для встречи без числа участников?~Пока неизвестно: нужно узнать число участников и другие обязательные условия.~Не угадывать порог достаточности.
text~equal~Различи similar size и the same size.~Первое — похожие размеры, второе — одинаковые в данном контексте измерения.~Не объявлять приблизительное сходство точным равенством.
speech~sound~Без текста скажи not warm enough и too cold, сохраняя одну цель; слушатель пересказывает.~The room is not warm enough for the baby. It is too cold for the baby.~Проверить смысл и слышимость отрицания в реальном аудио.
text~message~Через семь дней выбери новую вымышленную площадку по трём условиям и укажи, что ещё не подтверждено.~It has enough seats and is cheap enough. It is not as close as the first place, but we can walk there. Availability is still unknown.~Новый материал и границы вывода, не воспроизведение старого решения.
text~limit~Дай краткую памятку о трёх позициях enough с noun/adjective/adverb и свои примеры.~Enough paper; clear enough; slowly enough. Сначала определить, оцениваем ли количество или признак/действие.~Объяснение механизма плюс самостоятельные примеры, не только перевод.`,'','Повторение')
 ],
 tests:[exam('A202-degree','a',`short~equal~As ___ as the old road: safe/safer?~safe~Исходная форма между as.
short~equal~As ___ luggage as: much/many?~much~Luggage не исчисляется по отдельным предметам.
short~equal~A is not as high as B. Что выше: A/B?~B~B выше, A ниже в этой рамке.
short~equal~The same colour ___ mine: as/than?~as~The same ... as, не than.
short~limit~Too ___ cups: many/much?~many~Счётное множественное cups.
short~limit~Enough ___ these envelopes: of/to?~of~Of перед определённым набором.
short~limit~Wide enough ___ two monitors: for/to?~for~Перед именной группой цели for.
short~limit~Too ___ milk for the recipe: little/few?~little~Milk неисчисляемое, нехватка объёма.
sentence~limit~Исправь: He answered enough loudly.~He answered loudly enough.~Enough после наречия.
sentence~equal~Исправь: This rope is as longer as that one.~This rope is as long as that one.~Исходная форма long внутри равенства.
sentence~limit~Сохрани смысл через not light enough: The parcel is too heavy for Ana to lift.~The parcel is not light enough for Ana to lift.|The parcel isn't light enough for Ana to lift.~Тот же человек, действие и порог.
sentence~limit~Исправь: There are enough of seats.~There are enough seats.~Обычное seats без определителя не требует of.
text~evidence~Для 11 гостей есть 10 чашек, но 15 тарелок. Что достаточно, а чего не хватает?~There are enough plates but not enough cups. We need one more cup.~Не смешивать разные наборы предметов.
text~limit~Почему very bright не означает too bright в любой комнате?~Too требует нежелательного превышения для цели; very только обозначает высокую степень.~Указать цель/пользователя, а не объявлять слова синонимами.
text~message~Напиши 100–140 слов: вымышленные столы S — 100 см/40 евро, M — 120/60, L — 150/90. Нужно минимум 115 см, бюджет 70 евро, прочность неизвестна.~We need a desk at least one hundred and fifteen centimetres wide and can spend seventy euros. Desk S is one hundred centimetres wide and costs forty euros. It is cheap enough, but it is not wide enough for our equipment. Desk M is one hundred and twenty centimetres wide and costs sixty euros. Desk L is wider, but its price is ninety euros, which is too much for our budget. I recommend M if the other conditions are suitable. We have not checked how much weight it can hold. Could the seller confirm that before we order it? The right width and price do not prove that the desk is strong enough.~Числа, два ограничения, вопрос о прочности и отсутствие фиктивного заказа; смысловая оценка.
text~message~Спроси об обязательном неизвестном после enough seats, если нужна онлайн-встреча с проектором.~Is the internet reliable enough for a video call, and is a projector available?~Допустить релевантные вопросы, не подтверждать отсутствующее оборудование.
speech~message~Партнёр добавляет двух гостей к группе из пяти. Есть шесть мест. Объясни изменение и договорись о действии.~Six seats were enough for five people, but not for seven. Can we get one more chair?~Живое согласование и верное количество.
speech~sound~Произнеси cheap enough / not cheap enough; слушатель говорит, какой вариант подходит.~It is cheap enough. It is not cheap enough.~Нужна запись со слышимым not и enough.
short~sound~Enough: последний согласный /f/ или /k/?~/f/|f~В этой записи gh обозначает /f/.
text~equal~«A is not smaller than B»: можно ли точно утверждать, что A больше?~Нет: равенство тоже возможно.~Не добавлять строгий разрыв без свидетельства.`),
 exam('A202-degree','b',`short~equal~As ___ as the other app: reliable/more reliable?~reliable~Между as исходная форма.
short~equal~As ___ mistakes as: many/much?~many~Mistakes — отдельные счётные ошибки.
short~equal~A is not as cheap as B. Что дешевле: A/B?~B~A дороже, B дешевле.
short~equal~Similar ___ the old design: to/than?~to~Similar to отличается от the same as.
short~limit~Too ___ furniture: much/many?~much~Furniture неисчисляемое.
short~limit~Enough ___ them: of/for? Значение «достаточно из них».~of~Часть множества перед местоимением с of.
short~limit~Quiet enough ___ record a message: to/for?~to~Перед базовым действием нужен to-infinitive.
short~limit~Too ___ batteries for six devices: few/little?~few~Batteries исчисляются, значение нехватки.
sentence~limit~Исправь: The picture is enough sharp.~The picture is sharp enough.~Enough следует за прилагательным.
sentence~equal~Исправь: Our garden is as bigger as theirs.~Our garden is as big as theirs.~Исходный big, не сравнительный bigger.
sentence~limit~Передай через not warm enough: The water is too cold for me to swim in.~The water is not warm enough for me to swim in.|The water isn't warm enough for me to swim in.~Сохраняем swim in и человека, меняем полюс признака.
sentence~limit~Исправь: We have too many traffic here.~We have too much traffic here.~Traffic — неисчисляемое количество.
text~evidence~На 9 участников есть 12 стульев и 8 блокнотов. Что нужно добавить?~We have enough chairs, but we need one more notebook.~Разные наборы и верная нехватка.
text~limit~Сравни enough clean towels и clean enough towels.~Достаточное количество чистых полотенец против полотенец достаточной чистоты.~Положение enough меняет оцениваемый параметр.
text~message~Напиши 100–140 слов: вымышленные шкафы A — 4 полки/50 евро, B — 6/65, C — 6/85. Нужно 5 полок, бюджет 70, ширина дверного проёма не проверена.~We need a cupboard with at least five shelves and have seventy euros. Cupboard A costs fifty euros and has four shelves. It is cheap, but there are not enough shelves for our folders. B has six shelves and costs sixty-five euros. C has as many shelves as B, but it costs twenty euros more. That makes C too expensive for us. B meets both our price limit and our need for shelves. However, we have not measured the doorway. Could we check that it is wide enough before ordering? A suitable number of shelves does not mean the cupboard will fit through the door. We should keep the choice provisional until that check.~Равное число полок, верная цена, неизвестный габарит и предварительное решение; проверка по смыслу.
text~message~Попроси уточнение к «enough time», если неизвестен объём работы.~Enough time for which tasks? How much work is left?~Назвать отсутствующий порог, не угадывать продолжительность.
speech~message~Партнёр предлагает слишком маленькую сумку для пяти книг. Уточни размеры и предложи альтернативу, реагируя на ответ.~Is it big enough for all five books? Could we use two bags instead?~Реальное обсуждение потребности и решения.
speech~sound~Скажи too little time / a little time в разных фразах; слушатель различает нехватку и наличие.~There is too little time to finish. We still have a little time to plan.~Смысл определяется всей фразой; реально слушать.
short~sound~Ударная часть enough содержит /ʌ/ или /ɔɪ/?~/ʌ/|ʌ~Произношение /ɪˈnʌf/ с ударением на второй части.
text~equal~Если два варианта as cheap as each other, одинаковы ли сроки доставки?~Неизвестно: равенство цены не задаёт срок доставки.~Не переносить равенство на непроверенный критерий.`)]
};

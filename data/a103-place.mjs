import {bank,exam,examples,goal} from './unit-tools.mjs';
import {placeSources} from './quantity-place.mjs';
export default {
 id:'A103-place',topic:'A103',title:'Где находится и куда перемещается: место, направление и понятные инструкции',prerequisites:['A103-quantity'],references:['place','quantity','numbers-time'],sources:placeSources,
 goals:[goal('relation','Описывать расположение относительно названного ориентира','practice'),goal('movement','Отличать положение от пути и пересечения границы','movement'),goal('view','Учитывать точку зрения, схему и неизвестную высоту','reading'),goal('directions','Давать связные инструкции и уточнять ответ партнёра','production')],
 explanation:[
  {title:'Предлог связывает два участника',text:'The cup is on the table называет cup, отношение on и ориентир the table. Без ориентира слушатель не знает, где искать. The table is under the cup описывает обратное отношение, но часто менее полезно для задачи поиска чашки. Сначала реши, что неизвестно собеседнику и какой объект он уже видит. Русское «на» не даёт одного английского предлога: на кухне — in the kitchen, на столе — on the table, на работе — at work. Выбор зависит от устройства и привычного представления места, не от буквального перевода.'},
  {title:'In, on, at — не линейка размера',text:'In выделяет внутреннее пространство: in a drawer, in the kitchen. On связывает с поверхностью: on a shelf, on the wall. At представляет точку/место деятельности: at the door, at the desk. Большое место тоже может быть точкой в маршруте: at the station. In the station подчёркивает внутренность здания. Поэтому многие реальные ситуации допускают at и in с разным акцентом; без контекста нельзя объявлять один универсальным ответом. В закрытых задачах прямо задаём внутренность, поверхность или рабочую точку.'},
  {title:'Соседство, противоположность и группа',text:'Next to — непосредственно рядом, near — недалеко, но без обещания соседства. Opposite — напротив: магазин через дорогу, а не обязательно adjacent. Between связывает различимые ориентиры, например between the sink and the cooker. Among описывает положение среди группы: among the boxes. Запрет between для более двух объектов слишком грубый: отношения между отдельно рассматриваемыми участниками могут включать больше двух. На начальном этапе учим ясную пару и группу, но не создаём ложного абсолютного правила.'},
  {title:'Высота и плоская схема',text:'Above/below описывают выше/ниже, under часто ниже предмета, over может быть над ним, покрывать или обозначать путь — значение требует контекста. The clock is above the shelf — реальная высота на стене. На плане комнаты вид сверху: предмет вверху страницы находится ближе к северной стороне, а не обязательно физически висит выше другого. Наша схема явно помечена view from above и not to scale. Расстояния, размеры и высоты нельзя вычислять по условному рисунку, если они не заданы отдельно.'},
  {title:'Положение, направление и граница',text:'Jo is walking in the kitchen — ходит внутри кухни. Jo is walking into the kitchen — входит, пересекает границу. The cup is on the shelf — положение; Jo is moving it onto the shelf — направление к поверхности. Однако с put, fall, jump часто возможны in/into или on/onto с близким смыслом: Put it in the drawer корректно. Into/onto подчёркивают переход, но нельзя выбирать их только потому, что в предложении есть любой глагол движения. Человек может walking in the park, не entering it.'},
  {title:'Откуда, через что и с какой стороны',text:'From отмечает исходную точку, to — пункт назначения, out of — изнутри наружу, off — с поверхности. Across показывает пересечение пространства от стороны к стороне, through — путь через внутренность/проход: across the square, through the doorway. Walk to the kitchen не гарантирует, что человек уже вошёл; into выделяет вход. В инструкции Take the cup off the shelf and put it in the drawer важно сохранить и источник, и результат. Не меняй out of на off, если предмет находился внутри ящика.'},
  {title:'Лево, право и перед требуют точки зрения',text:'На схеме север сверху, запад слева и восток справа. Это постоянная ориентация страницы. Но left/right человека зависит от того, куда он смотрит: повернувшись, он меняет свою левую сторону. Перед Turn left спроси Where are you standing? Which way are you facing? У шкафа может быть собственный перед — дверцы; in front of the cupboard опирается на него, а не всегда на направление взгляда автора. На незнакомой схеме не добавляй такие отношения, если ориентация предмета не задана.'},
  {title:'Частые готовые сочетания и региональные различия',text:'Go home — без to, но be at home. In the car — обычное место пассажира, on the bus — на борту, by bus — способ поездки. On the first floor требует системы этажей: UK first floor обычно над ground floor, US first floor часто на уровне входа с улицы. Для передачи точного адреса уточни one level above the street entrance. Это поддержка обоих вариантов, не ошибка одного из них. Предлоги времени at six/on Monday/in July не выводятся из пространственной картинки: они уже изучались отдельно в P02.'},
  {title:'Инструкция проверяется действием и ответом',text:'Назови исходную точку, ориентир, направление и итог; давай шаги в порядке выполнения. Партнёр должен пересказать маршрут или расположить предметы по инструкции, а не просто согласиться yes. Если он спрашивает Which shelf?, это сигнал недостаточного ориентира. Исправь конкретную неоднозначность, не добавляя случайные длинные предложения. В письменном описании соедини there is/are, определённые предметы the, предлоги и текущие действия из A102. Речь и фонетику проверяй по аудио; правильная строка ASR не доказывает понятность маршрута.'}
 ],examples:examples(`The spoons are in the drawer.~Ложки в ящике.~Внутреннее пространство.
The drawer is under the worktop.~Ящик под столешницей.~Отношение к ориентиру.
The plate is on the worktop.~Тарелка на столешнице.~Поверхность.
Jo is at the sink.~Джо у мойки.~Рабочая точка.
The clock is above the door.~Часы над дверью.~Высота на стене.
The door is below the clock.~Дверь ниже часов.~Обратное отношение.
The bin is next to the cupboard.~Мусорное ведро рядом со шкафом.~Непосредственное соседство.
The shop is near the building.~Магазин недалеко от здания.~Не обязательно соседняя дверь.
The shop is opposite the library.~Магазин напротив библиотеки.~Противоположные стороны.
The sink is between the cupboard and the cooker.~Мойка между шкафом и плитой.~Два ясных ориентира.
There is a label among the papers.~Среди бумаг есть этикетка.~Член группы.
There is a bench in front of the house.~Перед домом скамья.~Опора на фасад дома.
The garden is behind the house.~Сад за домом.~Отношение к задней стороне.
Jo is walking in the hall.~Джо ходит в коридоре.~Движение внутри области.
Jo is walking into the hall.~Джо входит в коридор.~Пересечение границы.
Put the box in the cupboard.~Поставь коробку в шкаф.~In допустимо с put.
Move the box onto the shelf.~Перемести коробку на полку.~Выделено направление к поверхности.
Take the jar out of the cupboard.~Достань банку из шкафа.~Изнутри наружу.
Take the jar off the shelf.~Сними банку с полки.~С поверхности.
Walk across the courtyard.~Перейди двор.~От одной стороны к другой.
Walk through the passage.~Пройди через проход.~Через внутреннее пространство.
I go home by bus.~Я еду домой автобусом.~Без to перед home; by — способ поездки.
I am on the bus, not in the car.~Я в автобусе, не в машине.~Устойчивые модели.
The room is one level above the street entrance.~Комната на один уровень выше входа с улицы.~Без неоднозначного first floor.`),banks:[
 bank('A103-place','practice','Ориентир и положение','practice',`short~relation~Ложка внутри закрытого ящика: in/on the drawer?~in~Внутренность, не поверхность.
short~relation~Книга лежит на верхней поверхности стола: on/under the table?~on~Контакт с поверхностью.
short~relation~Коробка на полу под столом: under/above the table?~under~Предмет под столом, на полу: отношение under.
short~relation~Часы прикреплены к стене выше таблички: above/below the notice?~above~Реальная высота задана.
short~relation~Если часы выше таблички, табличка below/above the clock?~below~Обратное отношение.
short~relation~Слева шкаф, справа плита, мойка в середине ряда: between/among?~between~Различимые ориентиры.
short~relation~Красная чашка в группе белых чашек: among/opposite?~among~Among задаёт положение внутри группы предметов.
short~relation~Магазин прямо через дорогу от банка: opposite/in the bank?~opposite~Магазин через дорогу напротив банка: opposite.
short~relation~Near the station доказывает next to the station? Yes/no.~no~Недалеко не равно непосредственному соседству.
short~relation~Обычный пассажир внутри легковой машины: in/on the car?~in~Нейтральное положение в машине.
short~relation~Обычный пассажир автобуса: on/under the bus?~on~Обычная модель местонахождения пассажира — on the bus.
short~relation~Способ поездки: by/in bus, без артикля?~by~By bus называет способ поездки и не требует артикля.
sentence~relation~Исправь обычное местонахождение: I am on the kitchen.~I am in the kitchen.|I'm in the kitchen.~Внутри помещения.
sentence~relation~Исправь: I go to home after work.~I go home after work.~Home без to после go.
text~relation~Почему at the station и in the station могут быть оба допустимы?~At treats the station as a location; in emphasises being inside it.~Контекст, не шкала размеров.
text~relation~Сравни The keys are in the desk и at the desk.~In places them inside the desk; at locates them at the work area, less precisely.~Смысл зависит от выбранной области.
text~relation~Перепиши The fridge is next to the cupboard начиная с cupboard.~The cupboard is next to the fridge.~Соседство симметрично в этой ситуации.
text~view~Объясни, почему предмет вверху плана не обязательно висит выше другого.~A top-down plan shows horizontal positions, not vertical heights.~Не смешивать координаты.
text~view~Уточни Go to the first floor для собеседника с другой системой этажей.~Do you mean the street-entry level or one level above it?~Нужно согласование UK/US.
text~relation~Опиши одну точку двумя предлогами: книга внутри коробки, коробка на столе.~The book is in the box. The box is on the table.~Нельзя заменить книгу на стол без связи.
text~relation~Назови отношения in front of/behind с домом, у которого известен фасад.~There is a bench in front of the house and a garden behind it.~Ориентир имеет перед/зад.
text~view~Почему between не следует запрещать при трёх различимых участниках?~It can express separate relationships involving more than two participants; number alone is not the rule.~Не ложный абсолютный запрет.`),
 bank('A103-place','movement','Местонахождение и путь','practice',`short~movement~Человек пересекает порог, входя: walking in/into the room? Выбери форму, явно выделяющую вход.~into~Граница пересекается.
short~movement~Человек уже внутри и ходит там: walking in/into the room?~in~Движение внутри, не вход.
short~movement~Кошка сейчас лежит на стуле: on/onto the chair?~on~Кошка уже на поверхности, поэтому on, а не onto.
short~movement~Кошка перемещается с пола на стул: onto/out of?~onto~Направление к поверхности.
short~movement~Достать ложку изнутри ящика: out of/off the drawer?~out of~Источник внутри.
short~movement~Снять ложку с поверхности стола: off/into the table?~off~Отделение от поверхности.
short~movement~Перейти открытую площадь от края до края: across/through the square?~across~Через пространство.
short~movement~Пройти через внутренность тоннеля: through/onto the tunnel?~through~Внутренний проход.
short~movement~Пункт назначения: walk to/from the shop, если идём туда?~to~Направление к магазину.
short~movement~Исходная точка: come from/onto the shop, если идём оттуда?~from~From вводит исходную точку движения — магазин.
short~movement~Put the bowl in the cupboard обязательно ошибочно из-за движения? Yes/no.~no~С put допускается in.
text~movement~Сравни Put it on the shelf и Put it onto the shelf.~Both can describe placing it on the shelf; onto gives more emphasis to movement.~Не отвергать on автоматически.
text~movement~Walking to the building гарантирует пересечение порога?~No. To gives a destination; into explicitly describes entering.~Не делать лишний вывод.
text~directions~Напиши последовательность: вынь чашку из шкафа, поставь на поднос, перенеси поднос к столу.~Take the cup out of the cupboard. Put it on the tray. Carry the tray to the table.~Источник, предмет и итог не теряются.`,'','Направление'),
 {...bank('A103-place','reading','Кухня на схеме: вид сверху и точка зрения','reading',`short~view~Какое направление наверху схемы? North/south.~north~Это явно обозначенная ориентация.
short~relation~Что между шкафом и плитой в северном ряду?~sink|the sink~Мойка в середине.
short~relation~Что слева от стола на схеме?~door|the door~Западная позиция среднего ряда.
short~relation~Что справа от стола на схеме?~window|the window~Восточная позиция.
short~relation~Что между полкой и ведром в южном ряду?~bench|the bench~Скамья в середине.
short~view~Схема показывает точную высоту мойки? Yes/no.~no~Вид сверху, высоты нет.
short~view~Можно измерить длину кухни в метрах по этой схеме? Yes/no.~no~Not to scale, размеров нет.
short~relation~У северной стены cupboard находится слева или справа от sink? Left/right.~left~По ориентации страницы.
short~view~Если человек повернулся, его left обязательно остаётся west? Yes/no.~no~Лево зависит от взгляда.
short~view~Число чашек в шкафу известно? Yes/no.~no~Содержимое не показано.
text~directions~Опиши северный ряд тремя связанными предложениями.~The cupboard is on the left. The sink is between the cupboard and the cooker. The cooker is on the right.~Указана ориентация схемы.
text~view~Что надо спросить перед Turn left человеку у двери?~Which way are you facing?~Его взгляд не определяется положением автора.
text~relation~Соедини наличие и положение стола, не приписывая ему размер.~There is a table in the middle row. It is between the door and the window on this plan.~Положение есть, масштаба нет.
text~directions~Предложи две инструкции с названными предметами и уточни неизвестное содержимое.~Go to the cupboard and check whether there are any cups inside. If there are, put two on the table.~Условие не объявляет чашки существующими.`,
 `This is a teaching plan of a shared kitchen, viewed from above. North is at the top of the page, west is on the left and east is on the right. The plan is not to scale. It shows positions, not the exact sizes or heights of furniture. All the positions can also be read in the following description, so you do not need to see the image to answer the questions.
Along the north side, there is a cupboard on the left, a sink in the middle and a cooker on the right. The sink is between the cupboard and the cooker. In the middle row, the door is on the left, the table is in the centre and the window is on the right. Along the south side, there is a shelf on the left, a bench in the middle and a bin on the right.
Mina is writing directions for a new volunteer. She does not say that the sink is physically above the table just because it appears higher on the page. She also does not guess how many cups are inside the cupboard; the plan does not show its contents. Before telling the volunteer to turn left, she asks which way the person is facing. The page has a fixed west side, but a person's left changes when they turn around. The volunteer reads the directions back and asks about any unclear object before moving it.`),diagram:{src:'/assets/a103-kitchen.svg',file:'web/assets/a103-kitchen.svg',alt:'Вид кухни сверху, север вверху. Северный ряд слева направо: cupboard, sink, cooker. Средний: door, table, window. Южный: shelf, bench, bin. Высоты и размеры не показаны.',caption:'Схема для чтения: вид сверху, не в масштабе. На узком экране прокручивайте схему по горизонтали; полное текстовое описание — ниже.'}}
 ,bank('A103-place','listening','Убираем комнату: откуда и куда','listening',`short~directions~Где сначала лежат ключи: shelf или drawer?~drawer~Ключи сначала находятся внутри kitchen drawer.
short~directions~Куда надо положить ключи: bowl или cupboard?~bowl~В миску у входа.
short~directions~Книги находятся на столе? Yes/no.~yes~Их надо снять со стола.
short~directions~Куда перенести книги: upper shelf или lower shelf?~lower shelf~Названа lower shelf; верхняя полка уже занята.
short~directions~Почему не верхняя: full или broken?~full~Она занята, не сломана.
short~directions~Какое помещение пройти после кухни?~hall|the hall~После кухни нужно пройти через hall к входной двери.
short~directions~Нужно выйти из здания? Yes/no.~no~Остаёмся внутри.
short~directions~Окно нужно открыть или оставить закрытым? Open/closed.~closed~Закрытым из-за дождя.
text~movement~Напиши первый шаг с правильным источником и целью.~Take the keys out of the drawer and put them in the bowl by the entrance.~Изнутри в другую ёмкость.
text~directions~Передай инструкцию о книгах, сохранив ограничение полки.~Take the books off the table and put them on the lower shelf; the upper shelf is full.~Off с поверхности, lower не теряется.
text~view~Почему Which shelf? — полезный вопрос в этой ситуации?~Using the wrong shelf would conflict with the instruction; the lower shelf is the intended destination.~Уточнение ориентира.
speech~directions~Перескажи партнёру маршрут из кухни к скамье и проверь его пересказ.~Walk out of the kitchen, through the hall and to the bench beside the front door. Stay inside.~Нужны источник, путь и конечная точка.`,
 `Hi, Jo. Please help me put a few things away. The keys are in the kitchen drawer. Take them out of the drawer and put them in the small bowl by the entrance. There are some books on the kitchen table. Take them off the table and put them on the lower shelf, not the upper one. The upper shelf is full. Then walk out of the kitchen and through the hall to the bench beside the front door. Please put the empty shopping bag under that bench. Stay inside the building; you don't need to go through the front door. Leave the hall window closed because it is raining. If you are not sure which shelf I mean, ask before moving the books.`),
 bank('A103-place','production','Описание помещения и работа собеседника','writing',`text~relation~Опиши три предмета в своей или вымышленной комнате с разными ориентирами.~There is a chair by the desk. A lamp is on the desk. The bag is under the chair.~Не три повтора in с заменой слова.
text~movement~Дай инструкцию из двух шагов: банка из шкафа на стол, ложка из ящика в миску.~Take the jar out of the cupboard and put it on the table. Take the spoon out of the drawer and put it in the bowl.~Все источники и цели.
text~view~Объясни человеку, как ориентирован план, прежде чем использовать left/right.~North is at the top of this plan. Left means the west side of the page, not necessarily your left as you stand in the room.~Точка зрения явно обозначена.
text~directions~Напиши 100–140 слов новому помощнику: кухня, шкаф у входа, чашки внутри, стол у окна; две чашки поставить на поднос на столе; книги перенести с нижней полки в коробку под столом; содержимое верхнего шкафа неизвестно. Добавь уточнение.~The kitchen is at the end of the hall. There is a cupboard beside its entrance, and there are clean cups inside it. The table is by the window. Please take two cups out of the cupboard and put them on the tray on the table. There are some books on the lower shelf. Take the books off that shelf and put them in the box under the table. Please do not move anything from the upper cupboard; I don't know what is inside it yet. If there are two boxes under the table, ask me which one to use. Please read the steps back before you start.~Чёткая последовательность, известное и неизвестное, источник и итог; допускаются in/into и on/onto по смыслу.
text~relation~Перепиши The bowl is near the cooker так, чтобы сообщить непосредственное соседство, не просто близость.~The bowl is next to the cooker.~Задано усиление точности; нельзя считать его исходным фактом без новой инструкции.
text~view~Напиши просьбу уточнить этаж, не выбирая UK или US за собеседника.~Is the room at street-entry level or one level above it?~Неискажённый адрес важнее формального номера.
text~movement~Сравни walking across the room и walking through the doorway в полном сообщении.~Walk across the room to the far wall, then go through the doorway into the hall.~Разные виды пути.
text~directions~Напиши десять реплик: предмет, источник, цель, неясный ориентир, уточнение и обратное повторение.~A: Where are the cups? B: In the cupboard by the door. A: Where should I put them? B: On the tray. A: Which tray? B: The blue tray on the table. A: All the cups? B: No, just two. A: Two cups from the cupboard onto the blue tray? B: Yes, that's right.~Десять связанных реплик; уточнение меняет точность действия.
text~relation~Исправь буквальный перевод I am on work and the keys are on my bag: ключи внутри сумки.~I am at work, and the keys are in my bag.~Устойчивое at work и физическое in.
text~view~Составь описание без предположений о высоте по виду сверху.~The sink is on the north side of the plan. Its height is not shown.~Не подменять north физическим above.
speech~directions~Партнёр раскладывает три предмета по твоим словам; сравни результат и уточни одно отношение.~Put the pen in the box, place the box beside the book and put the cup behind the book.~Предметы реальные или условные; нужна обратная связь.
speech~movement~Различи out of/off и in/into в четырёх устных фразах с показом действия.~Take it out of the drawer. Take it off the shelf. Walk in the room. Walk into the room.~Слушатель связывает фразу с действием.
speech~view~Попроси собеседника повернуться, затем проверь, где его left по отношению к северу.~Which way are you facing now? Is west on your left or your right?~Ответ зависит от реального положения, не фиксированного ключа.
text~directions~После вопроса Which shelf? перепиши свою инструкцию точнее, сохранив старую версию.~Original: Put it on the shelf. Revised: Put it on the lower shelf beside the door.~Реальное уточнение своего текста.`),
 bank('A103-place','review','Связная опись и отсроченный перенос','review',`short~relation~The sign is on the wall: поверхность или внутренность? Surface/inside.~surface~On связывает с поверхностью.
short~movement~Go home требует to перед home? Yes/no.~no~Устойчивая модель без to.
short~view~Вид сверху даёт высоту полки без размеров? Yes/no.~no~Высота не показана.
short~relation~There ___ two boxes under the shelf. Is/are?~are~Возвращается число.
short~relation~There ___ a box of tools under the shelves. Is/are?~is~Главное слово box.
short~movement~Put the box on the table обязательно хуже грамматически, чем onto? Yes/no.~no~On допустимо с put.
text~relation~Объедини артикли и отсылку: впервые шкаф, затем его расположение у двери.~There is a cupboard in the room. The cupboard is beside the door.~A → the в связном описании.
text~directions~Четыре чашки внутри шкафа, нужны шесть. Напиши опись и запрос без путаницы места/количества.~There are four cups in the cupboard. We need two more.~Сначала проверенный запас.
text~relation~Различи at six и at the sink по функции.~At six gives a time; at the sink gives a location.~Одна форма, разные отношения.
text~view~Почему рисунок с западом слева не гарантирует, что собеседник должен повернуть налево?~The person may be facing a different direction; their left is not fixed to the page.~Нужна точка зрения.
text~movement~Соедини обычный маршрут и текущий вход: обычно Jo идёт на кухню в восемь, сейчас входит в коридор.~Jo usually goes to the kitchen at eight. Now Jo is walking into the hall.~Возвращаются Simple/Continuous и движение.
text~directions~Напиши краткое сообщение о непроверенном шкафе без обещания содержимого.~The cupboard is beside the window, but I don't know what is inside it.~Место известно, содержимое нет.
speech~directions~Через семь дней составь маршрут по другому помещению; партнёр должен пройти его или пересказать.~Start at the door, walk to the desk and put the bag under it. Which desk do you see?~Новый контекст, не повтор схемы.
text~view~Запиши один вопрос, который помог бы проверить твоё описание до отправки.~Does the reader know which doorway and which direction I mean?~Оценка собственной фактической работы.`)
 ],tests:[
 exam('A103-place','a',`short~relation~Ключ внутри конверта: in/on the envelope?~in~Предмет находится внутри конверта, поэтому in.
short~relation~Конверт лежит на поверхности скамьи: on/under the bench?~on~Предмет лежит на поверхности опоры, поэтому on.
short~relation~На стене лампа выше зеркала: зеркало above/below the lamp?~below~Обратное отношение высоты.
short~relation~В ряду слева холодильник, в середине стол, справа дверь: table is between/among?~between~Различимые ориентиры.
short~movement~Человек входит снаружи в гараж: явно выдели вход, in/into the garage?~into~Пересечение границы.
short~movement~Человек уже ходит внутри гаража: in/into the garage?~in~Положение движения.
short~movement~Снять пакет с верхней поверхности шкафа: off/out of the cupboard?~off~Поверхность, не внутренность.
short~movement~Перейти через открытую лужайку от стороны к стороне: across/through the lawn?~across~Пересечение площади.
short~movement~Пройти сквозь внутренний коридор: through/onto the corridor?~through~Внутренний путь.
short~view~На плане сверху предмет севернее другого; его физическая высота известна? Yes/no.~no~План не задаёт высоту.
short~view~Left человека всегда west независимо от поворота? Yes/no.~no~Лево определяется направлением взгляда человека, не постоянным западом.
sentence~movement~Исправь: They are going to home now.~They are going home now.|They're going home now.~Без to перед home.
text~relation~Поясни near a school против next to a school.~Near is an unspecified short distance; next to describes immediate adjacency.~Не взаимозаменять без данных.
text~movement~Оцени Put the folder in the drawer и Put it into the drawer без механического запрета.~Both can describe the same placement; into stresses the movement inside.~Открытая проверка допустимых вариантов.
text~view~Коллега говорит first floor без страны. Задай вопрос о фактическом уровне.~Do you mean the street-entry level or one level above it?~UK/US не выбираются наугад.
text~directions~Напиши пять связанных предложений: коробка под столом, документы внутри; два документа положить на верхнюю полку; содержимое шкафа неизвестно.~There is a box under the table. The documents are inside it. Take two documents out of the box. Put them on the upper shelf. I don't know what is in the cupboard.~Источники, число, цель и неизвестность.
text~relation~Опиши место человека у рабочего стола и поясни, почему in the desk — другой смысл.~Jo is at the desk. In the desk would mean inside it, not working at it.~Область vs точка деятельности.
text~view~Новая словесная схема: северный ряд bookcase–door–window. Что можно и чего нельзя вывести о двери?~It is between the bookcase and the window in that row. Its height and width are not given.~Новое расположение, без повторения учебной кухни.
speech~directions~Дай партнёру путь от входа к столу и задачу с предметом. Ответь на его Which table?~Walk to the table beside the window, then put the bag under it.~Живое уточнение; критерии по слышимому ответу.
speech~movement~Продиктуй два действия, различив изнутри ящика и с поверхности полки.~Take the pen out of the drawer. Take the notebook off the shelf.~Слушатель должен различить источники.`),
 exam('A103-place','b',`short~relation~Монета внутри кошелька: in/on the wallet?~in~Внутреннее пространство.
short~relation~Кошелёк лежит на поверхности подноса: on/under the tray?~on~Предмет лежит на поверхности опоры, поэтому on.
short~relation~На стене картина ниже часов: часы above/below the picture?~above~Физическая высота задана.
short~relation~Маленькая коробка среди группы больших: among/opposite the boxes?~among~Положение в группе.
short~movement~Посетитель входит в библиотеку: явно выдели вход, in/into the library?~into~Граница пересекается.
short~movement~Посетитель уже бродит внутри библиотеки: in/into the library?~in~Движение внутри.
short~movement~Вынуть шарф изнутри сумки: off/out of the bag?~out of~Внутренний источник.
short~movement~Перейти улицу от одной стороны к другой: across/through the street?~across~Пересечение улицы.
short~movement~Пройти через внутренность арки: through/onto the archway?~through~Путь через проход.
short~view~План not to scale позволяет вычислить метры по длине рисунка? Yes/no.~no~Масштаб не задан.
short~view~Направление right человека известно только по слову entrance? Yes/no.~no~Нужно знать взгляд.
sentence~movement~Исправь: She goes to home by bus.~She goes home by bus.~После go слово home употребляется без to.
text~relation~Сравни opposite a bank и next to a bank.~Opposite is across from it; next to is adjacent to it.~Разные отношения.
text~movement~Поясни допустимость Put the cup on the tray и Put it onto the tray.~Both can describe placing the cup there; onto highlights the movement to the surface.~Не считать on ошибкой автоматически.
text~view~Гость не знает системы этажей. Переформулируй нужный этаж: один уровень над входом с улицы.~The room is one level above the street entrance.~Без неоднозначного first.
text~directions~Напиши пять предложений: корзина у двери, полотенца внутри; три полотенца на нижнюю полку; закрытая коробка не проверена.~There is a basket by the door. The towels are in it. Take three towels out of the basket. Put them on the lower shelf. I don't know what is in the closed box.~Количество, источник, цель и ограничение.
text~relation~Различи in the car и by car в двух предложениях.~Jo is in the car now. Jo usually travels by car.~Местонахождение и способ поездки.
text~view~Новая схема сверху: южный ряд freezer–sink–door. Опиши sink и не придумывай его высоту.~The sink is between the freezer and the door in the south row. Its height is not shown.~Новый контекст, не прежняя схема.
speech~directions~Проведи партнёра к полке и уточни его положение перед указанием left.~Where are you standing, and which way are you facing? The shelf is beside the window.~Диалог определяет маршрут.
speech~movement~Различи переход на скамью и положение на скамье двумя устными фразами.~The cat is jumping onto the bench. The cat is on the bench.~Понятность перехода и результата проверяется слушателем.`)
 ]};

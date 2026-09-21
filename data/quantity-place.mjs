// Original references with declared boundaries; not an exhaustive dictionary of English.
export const quantitySources=[
 ['British Council: there is / there are','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/using-there-there-are'],
 ['Cambridge: some and any','https://dictionary.cambridge.org/us/grammar/british-grammar/some-and-any'],
 ['Cambridge: much, many and a lot of','https://dictionary.cambridge.org/grammar/british-grammar/much-many-a-lot-of-lots-of-quantifiers'],
 ['Cambridge: little and few','https://dictionary.cambridge.org/grammar/british-grammar/little-a-little-few-a-few'],
 ['Cambridge: determiners and noun types','https://dictionary.cambridge.org/uk/grammar/british-grammar/determiners-and-types-of-noun']
];
export const placeSources=[
 ['Cambridge: at, on and in — place','https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-place'],
 ['Cambridge: in and into','https://dictionary.cambridge.org/grammar/british-grammar/in-into'],
 ['Cambridge: on and onto','https://dictionary.cambridge.org/us/grammar/british-grammar/on-onto'],
 ['Cambridge: between and among','https://dictionary.cambridge.org/us/grammar/british-grammar/between-or-among'],
 ['Cambridge: at, in and to — movement','https://dictionary.cambridge.org/us/grammar/british-grammar/at-in-and-to-movement']
];
export const existenceForms=[
 ['Один исчисляемый','There is a cupboard.','There isn’t a cupboard. / Is there a cupboard?','Yes, there is. / No, there isn’t.'],
 ['Множественное число','There are two cupboards.','There aren’t any cupboards. / Are there any cupboards?','Yes, there are. / No, there aren’t.'],
 ['Неисчисляемое значение','There is some rice.','There isn’t any rice. / Is there any rice?','Yes, there is. / No, there isn’t.']
];
export const quantifierPatterns=`a/an~Один C~a tomato / an onion~Не a rice, если речь о продукте как веществе.
some~C plural и U~some eggs / some milk~Неопределённый запас; также предложение и просьба с ожиданием наличия.
any~C plural и U в вопросе/отрицании~Are there any plates?~Вопрос не утверждает, что запас есть; any в значении «любой» — отдельный контраст.
no~C и U~no bowl / no bowls / no soup~Сказуемое утвердительно: There is no soup, не isn’t no в нейтральной модели.
much~U~How much flour?~Количество вещества; в обычном утверждении часто a lot of.
many~C plural~How many bags?~Счёт отдельных единиц; many допустимо и в утверждении.
a lot of~C plural и U~a lot of bowls / a lot of soup~Of нужно перед существительным, но I cook a lot — без существительного.
a few~C plural~a few pears~Несколько есть; само по себе не гарантирует достаточность.
few~C plural~few pears~Акцент на малом числе, часто недостатке; не обязательно ноль.
a little~U~a little flour~Небольшое количество есть; не обязательно достаточно для цели.
little~U~little flour~Акцент на скудном количестве; не обязательно полное отсутствие.
enough~C plural и U~enough plates / enough water~Достаточно для явно понятной цели; не обязательно много.
too many~C plural~too many boxes~Больше приемлемого числа, не просто большое число.
too much~U~too much salt~Избыточное количество, без универсальной числовой границы.
some of~Часть определённого набора~some of the apples~The/my/these или местоимение задаёт группу: some of them.
none of~Ноль из определённого набора~none of these jars~Для A103 распознаём смысл; вариативное согласование разбирается позднее.`.split('\n').map(r=>r.split('~'));
// Phrase, UK IPA, meaning, contextual sentence. The unit noun carries number.
export const portionPhrases=`a bottle of milk~ə ˈbɒtəl əv mɪlk~бутылка молока~There are two bottles of milk in the fridge.
a glass of water~ə ɡlɑːs əv ˈwɔːtə~стакан воды~There is a glass of water beside the plate.
a cup of tea~ə kʌp əv tiː~чашка чая~Would you like a cup of tea?
a mug of coffee~ə mʌɡ əv ˈkɒfi~кружка кофе~There are two mugs of coffee on the tray.
a bowl of soup~ə bəʊl əv suːp~миска супа~There is a bowl of soup for each visitor.
a plate of rice~ə pleɪt əv raɪs~тарелка риса~We need three plates of rice.
a slice of bread~ə slaɪs əv bred~ломтик хлеба~There are six slices of bread on this plate.
a loaf of bread~ə ləʊf əv bred~буханка хлеба~We need two loaves of bread.
a piece of cheese~ə piːs əv tʃiːz~кусок сыра~There is a small piece of cheese left.
a packet of pasta~ə ˈpækɪt əv ˈpæstə~пачка макарон~We have a packet of pasta but no sauce.
a bag of flour~ə bæɡ əv flaʊə~пакет муки~How many bags of flour are there?
a jar of jam~ə dʒɑːr əv dʒæm~банка варенья~Please put the jar of jam on the shelf.
a tin of beans~ə tɪn əv biːnz~консервная банка фасоли~There are three tins of beans in the cupboard.
a carton of juice~ə ˈkɑːtən əv dʒuːs~картонная упаковка сока~There is one carton of juice left.
a kilo of potatoes~ə ˈkiːləʊ əv pəˈteɪtəʊz~килограмм картофеля~We need a kilo of potatoes for dinner.
a litre of oil~ə ˈliːtər əv ɔɪl~литр масла~There is a litre of oil in this bottle.
a spoonful of sugar~ə ˈspuːnfʊl əv ˈʃʊɡə~ложка сахара~Add a spoonful of sugar to the mixture.
a piece of advice~ə piːs əv ədˈvaɪs~один совет~There is a useful piece of advice on the notice.
a piece of equipment~ə piːs əv ɪˈkwɪpmənt~единица оборудования~There are two pieces of equipment in the case.
an item of information~ən ˈaɪtəm əv ˌɪnfəˈmeɪʃən~одна единица информации~One item of information is missing from the list.`.split('\n').map(r=>r.split('~'));
export const placeExpressions=`in~ɪn~внутри области~The spoons are in the drawer.
on~ɒn~на поверхности~The bowl is on the table.
at~æt~у точки; место деятельности~Jo is at the front door.
under~ˈʌndə~под~The empty box is under the table.
above~əˈbʌv~выше, без обязательного контакта~The clock is above the notice.
below~bɪˈləʊ~ниже~The notice is below the clock.
over~ˈəʊvə~над; поверх; через — по контексту~A lamp hangs over the table.
behind~bɪˈhaɪnd~позади~The storage room is behind the kitchen.
in front of~ɪn ˈfrʌnt əv~перед~The bench is in front of the building.
next to~ˈnekst tə~рядом, непосредственно по соседству~The sink is next to the cooker.
near~nɪə~недалеко от~There is a shop near the house.
opposite~ˈɒpəzɪt~напротив~The café is opposite the library.
between~bɪˈtwiːn~между различимыми ориентирами~The kettle is between the sink and the cooker.
among~əˈmʌŋ~среди группы~There is a red cup among the white cups.
to~tuː~к пункту назначения~We are walking to the shop.
from~frɒm~из; от исходной точки~This bag is from the corner shop.
into~ˈɪntuː~внутрь, с пересечением границы~Jo is walking into the kitchen.
out of~ˈaʊt əv~изнутри наружу~Jo is taking a bowl out of the cupboard.
onto~ˈɒntuː~на поверхность, направление~The cat is jumping onto the chair.
off~ɒf~с поверхности, отделение~Take the empty cups off the table.
across~əˈkrɒs~через пространство, на другую сторону~We are walking across the square.
through~θruː~через внутреннее пространство или проход~Walk through the doorway into the hall.`.split('\n').map(r=>r.split('~'));

export const quantityReference={id:'quantity',title:'Наличие и количество: формы, определители и порции',sources:quantitySources,
 intro:[
  'Охват: три базовые модели there is/are, 16 определителей/сочетаний и 20 показательных единиц порции. C — исчисляемое значение, U — неисчисляемое. Это не все существительные и не все определители языка; расширенные all/each/every/either и согласование none изучаются отдельно.',
  'Сначала реши, что считаешь: milk — вещество, bottles — ёмкости. There is some milk, но There are two bottles of milk. Одна большая бутылка может содержать больше жидкости, чем две маленькие: количество ёмкостей не сообщает объём без дополнительного условия. Bread обычно U, loaf/loaves и slice/slices — C.',
  'There вводит наличие, it/they возвращает к названному объекту. There is a jar on the shelf. It is open. Вопрос Is there a jar? не означает, что банка действительно есть. Закрытый шкаф не является доказательством пустоты. В аккуратном письме согласуй is/are с существительным; разговорное there’s перед списком узнавай, не превращая любой акцент в ошибку.',
  'Some/any выбираются по смыслу и ожиданию, не только по знаку вопроса. Would you like some soup? — предложение. Is there any soup? — нейтральная проверка наличия. Any seat is fine — любой, свободный выбор. У Don’t buy any apples и Don’t buy some of the apples разная область отрицания; второй не означает запрета всех яблок.',
  'A few и a little выделяют наличие небольшого количества, few и little — его скудность. Ни одна пара не задаёт точного числа. Enough зависит от цели: четыре чашки достаточны четырём людям при условии одной чашки каждому, но не шести. Too much / too many обозначают избыток, не просто «много».',
  'Нужна вся группа: a lot of rice, some of the rice, many bags, enough bags. Не переносить of повсюду. Вопрос How much is this jar? спрашивает цену; How much jam is in this jar? — количество варенья. Цена не является медицинской или финансовой рекомендацией: все примеры здесь учебные и вымышленные.'
 ],headers:['Модель / выражение','Форма / IPA','Пример / смысл','Употребление'],rows:[...existenceForms,...quantifierPatterns,...portionPhrases],
 practice:[
  ['There ___ a sack of rice. Выбери is/are.','Is: главное слово sack в единственном.'],
  ['There ___ three sacks of rice. Выбери is/are.','Are: считаем sacks, не rice.'],
  ['Сделай вопрос There is some equipment in the case.','Is there any equipment in the case? Some тоже возможно при ожидании наличия, которое надо обосновать.'],
  ['Коротко подтверди наличие полки: Is there a shelf?','Yes, there is. Не Yes, there’s.'],
  ['Почему There is a chair. It is blue не две одинаковые структуры?','Первое вводит предмет, второе описывает его.'],
  ['Выбери much/many: How ___ pasta? How ___ packets?','Much pasta; many packets.'],
  ['Одна порция и три порции хлеба через slice.','A slice of bread; three slices of bread.'],
  ['Одна буханка и две буханки через loaf.','A loaf of bread; two loaves of bread.'],
  ['Исправь a lot rice и many of plates без заданной группы.','A lot of rice; many plates.'],
  ['Сравни some apples и some of the apples.','Неопределённые яблоки / часть конкретного набора.'],
  ['Как предложить гостю чай с some?','Would you like some tea? Вопрос не требует any механически.'],
  ['Почему any room is fine не ошибка в утверждении?','Any значит «любая», а не неопределённый запас.'],
  ['A little water доказывает, что воды достаточно для всех?','Нет. Есть небольшой объём; нужный объём ещё не задан.'],
  ['Few cups обязательно значит zero cups?','Нет. Акцент на малом числе, не точном нуле.'],
  ['Шесть гостей, четыре места, по одному каждому. Опиши нехватку.','There aren’t enough seats. We need two more.'],
  ['How much is the bottle? Назови тип запрашиваемых данных.','Цена бутылки, не литры содержимого.'],
  ['Составь проверяемый список: вода в литрах, яйца поштучно, рис по массе.','Two litres of water, six eggs and a kilo of rice. Это образец списка, не предписание питания.'],
  ['Через неделю объясни покупку оборудования без equipments.','We need two pieces of equipment. Считается piece; описание конкретной ситуации оценивается по смыслу.']
 ]};
export const placeReference={id:'place',title:'Место и направление: ориентиры, границы и устойчивые сочетания',sources:placeSources,
 intro:[
  'Охват: 22 базовых пространственных отношения и восемь частых сочетаний. Это не полный словарь предлогов, переносных значений и фразовых глаголов. Сначала назови предмет, затем ориентир и отношение: The box is under the table. Предлог без ориентира иногда меняет функцию: Come in — другая структура.',
  'In выделяет внутреннюю область, on — поверхность, at — точку или место деятельности. Это способы представить место, не строгая шкала размеров: at the station и in the station могут быть оба верны, но второй явно выделяет внутренность здания. Предлоги времени at five/on Friday/in May уже есть в P02 и не смешиваются с пространственным выбором.',
  'Into/onto подчёркивают переход к внутренней области/поверхности; in/on могут описывать итоговое положение и с некоторыми глаголами движение: Put it in/into the box, Put it on/onto the shelf. Поэтому нельзя автоматически считать in неправильным после put. Across — через пространство с одной стороны на другую; through — через внутренность/проход.',
  'Next to сильнее near: непосредственное соседство против неопределённой близости. Opposite — напротив, не обязательно по соседству. Between обычно связывает отдельные ориентиры; among — член группы/окружение. Правило «between только два, among только больше двух» слишком жёсткое: важна различимость отношений.',
  'Укажи точку зрения для left/right/front/back. Если наблюдатель повернулся, его левая сторона может измениться, но северная стена остаётся северной. Для направления собеседнику сверяй его позицию. Слова behind и in front of иногда опираются на собственный перед предмета, а не на положение смотрящего.',
  'UK ground floor — уровень земли, first floor обычно над ним; в US first floor часто уровень земли. Для важного адреса уточни level at street entrance, не делай вывод из номера без принятой системы. Go home — без to; be at home — устойчивое сочетание. On the bus, in the car и by bus различают местонахождение и способ поездки.'
 ],headers:['Выражение','UK IPA / модель','Смысл','Пример / ограничение'],rows:[...placeExpressions,
  ['at home','at + home','дома','Jo is at home; go home — без to.'],
  ['at work','at + work','на работе','Не обязательно точное помещение: человек в рабочем контексте.'],
  ['at the desk','at + ориентир','за столом / у рабочего места','In the desk означало бы внутренность стола.'],
  ['on the first floor','on + уровень','на первом этаже в принятой системе','Уточни UK/US счёт от входа; нельзя подменять этаж молча.'],
  ['in the room','in + пространство','в комнате','Физически внутри обозначенной области.'],
  ['in the kitchen','in + помещение','на кухне','Русское «на» не переводится автоматически как on.'],
  ['on the bus','on + транспорт','в автобусе, на борту','By bus — способ добраться, не точное положение.'],
  ['in the car','in + транспорт','в машине','Обычное положение пассажира; on the car — на поверхности машины.']
 ],practice:[
  ['Письмо находится внутри конверта. Выбери in/on.','In the envelope.'],
  ['Конверт лежит на поверхности стола. Выбери on/under.','On the table.'],
  ['Перепиши The clock is above the sign начиная с The sign.','The sign is below the clock.'],
  ['Близость к магазину доказывает непосредственное соседство?','Нет: near не обязательно next to.'],
  ['Что точнее сообщает вход: walking in the room или walking into the room?','Walking into the room: пересечение границы. Walking in — ходьба внутри.'],
  ['Put the carton in the fridge допустимо?','Да. Put допускает in и into; into подчёркивает движение.'],
  ['Кошка перемещается на стул: onto или under?','Onto для перехода на поверхность стула.'],
  ['Путь через тоннель: across или through?','Through the tunnel, через внутренность.'],
  ['Путь через открытую площадь с одной стороны на другую?','Across the square.'],
  ['Between запрещено, когда названо три отдельных ориентира?','Нет. Не число само по себе, а различимость отношений.'],
  ['Что надо уточнить перед Turn left?','Где стоит человек и куда смотрит; собственная левая сторона автора не достаточна.'],
  ['Исправь I go to home at six.','I go home at six.'],
  ['Различи on the bus и by bus.','На борту автобуса / способом поездки на автобусе.'],
  ['Сообщи местонахождение на кухне.','I’m in the kitchen.'],
  ['Как избежать неоднозначности first floor?','Уточнить: the level at the street entrance или one level above it.'],
  ['Через неделю опиши новую комнату и дай партнёру две инструкции.','There is a cupboard by the door. Put the bowl on the shelf. Take the cloth out of the drawer. Партнёр уточняет ориентиры; требуется новый контекст.']
 ]};

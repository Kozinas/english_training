import {bank,exam,examples,goal} from './unit-tools.mjs';
import {quantitySources} from './quantity-place.mjs';
export default {
 id:'A103-portions',topic:'A103',title:'Продукты, порции и покупки: считаем единицы, выбираем some/any',prerequisites:['A103-existence'],references:['quantity','nouns-articles','numbers-time'],sources:quantitySources,
 goals:[goal('noun','Различать вещество, отдельный предмет и значение слова','practice'),goal('unit','Указывать порцию, упаковку и измеряемое количество','portions'),goal('choice','Использовать some/any/no по смыслу, в просьбах и предложениях','practice'),goal('message','Передавать заказ и проверенный список без потери единиц','production')],
 explanation:[
  {title:'Считается значение, а не русский перевод',text:'Apple в значении отдельного яблока имеет an apple / two apples. Rice как продукт обычно неисчисляем: some rice, не two rices для двух порций. Bread, milk, flour, sugar, pasta, butter, cheese обычно называют массу или вещество. Пища food часто U, а отдельные виды foods — другое значение. Неисчисляемое не значит «физически невозможно посчитать»: зёрна риса можно считать, но тогда говорим grains of rice. Правило относится к тому, как язык представляет объект в данной фразе. Сначала назови единицу, а затем выбирай грамматику.'},
  {title:'Смена значения меняет грамматику',text:'A chicken — птица, some chicken — мясо; a cake — целый торт, some cake — кусок/количество торта; coffee — напиток, two coffees в кафе часто две порции. Это не разрешение ставить -s к любому веществу: two equipments в обычной рабочей описи неверно. Контекст кафе позволяет восстановить чашки, но при покупке для группы лучше уточнить размер и состав. A glass — стакан, glass как материал — стекло; paper как материал U, a paper может быть документом/статьёй. Не заучивай метку C/U без конкретного смысла.'},
  {title:'Единица плюс of плюс содержимое',text:'A bottle of milk состоит из bottle — исчисляемой ёмкости, of — связи с содержимым и milk — вещества. Two bottles of milk: множественное окончание получает bottle, milk не меняется. A loaf of bread / two loaves of bread: особая форма loaves; a slice / slices — ломтик. Bowl, cup, glass, bag, jar, carton описывают разные упаковки или порции, а не фиксированный универсальный объём. A cup of tea без заданного стандарта не доказывает точное число миллилитров. Числовая точность нужна только там, где она названа в условии.'},
  {title:'Согласование и измерение',text:'There is some juice, но There are three cartons of juice. How much juice? спрашивает объём/количество напитка; How many cartons? — число упаковок. Если две коробки по одному литру полные, это два литра; если их размер неизвестен, из числа коробок нельзя вычислить объём. Kilo/kilogram, litre/liter — допустимые обозначения; в тексте курса UK litre, US liter допустимо. Decimal 0.5 не равно 5. В технической работе та же логика: devices считают отдельно, storage как объём — с единицами и оговорками.'},
  {title:'Some и any в базовой описи',text:'We have some eggs утверждает наличие неопределённого количества. We don’t have any eggs полностью отрицает наличие в нужной области. Do we have any eggs? — нейтральный вопрос: ответа пока нет. Some не значит обязательно мало или достаточно; это не точное число. Singular C обычно требует a/an в неопределённой описи: an onion, не weak some onion в значении одной луковицы. Some onion естественно, если имеется в виду некоторое количество нарезанного лука. Видимое существительное без понимания смысла не решает задачу.'},
  {title:'Вопрос с some не ошибка',text:'Would you like some tea? — предложение напитка; Can I have some bread, please? — просьба с ожиданием, что хлеб доступен. Эти модели учим пока как готовые вежливые конструкции; полная система модальных глаголов будет дальше. Is there any bread? — нейтральная проверка. В реальном разговоре некоторые вопросы допускают и some, и any с разным ожиданием. Поэтому закрытые задачи явно задают модель и выбор, а неоднозначные просьбы оцениваются открыто: надо объяснить намерение, а не попасть в единственный ключ.'},
  {title:'No и свободный выбор any',text:'There is no butter эквивалентно There isn’t any butter для полного отсутствия. Не добавляй второе отрицание в нейтральную фразу. Any cup is fine значит «подойдёт любая чашка»: это свободный выбор, не утверждение неопределённого количества. Some apples are green не значит, что все яблоки зелёные. Some of the apples — часть конкретного набора; полное отрицание Don’t buy any apples отличается от ограничения Don’t buy some of these apples. На старте нельзя превращать правило some/any в механический переключатель по плюсу и минусу.'},
  {title:'Заказ — не просто список слов',text:'Для заказа назови продукт, порцию/упаковку, число, нужные уточнения и подтвердившийся итог. Если магазин предлагает другой размер, пересогласуй, а не подменяй заказ молча. Two tins of beans и two kilos of beans не равны. UK tin / US can часто называют консервную банку; UK packet / US package зависят от товара. Can в Can I have и can of beans — разные функции одного написания. Про состав задавай языковой вопрос Does this contain milk?; не делай медицинских обещаний безопасности продукта по краткому описанию.'},
  {title:'Речь и рабочий перенос',text:'В a bottle of milk слова a и of обычно слабые /ə/ и /əv/, но bottle и milk должны оставаться понятными. При исправлении заказа выделяй различие: TWO bottles, not THREE; a BAG of flour, not a JAR. Слушатель пересказывает заказ, и только так проверяется передача смысла. В рабочем контексте information, advice, equipment обычно U: some information, a piece of advice, two pieces of equipment. После перерыва продолжи свой незаконченный список; время подхода не сокращает число упражнений и не заменяет итоговый тест.'}
 ],examples:examples(`There is an onion on the board.~На доске одна луковица.~Один отдельный предмет.
There is some onion in the bowl.~В миске немного лука.~Нарезанный продукт как вещество.
We need some rice.~Нам нужен рис.~Не задано число порций.
We need two bags of rice.~Нужны два пакета риса.~Считаются bags.
There are three cartons of milk.~Есть три упаковки молока.~Are согласуется с cartons.
There is a carton of milk.~Есть упаковка молока.~Один carton.
Two loaves of bread are on the shelf.~На полке две буханки хлеба.~Loaf → loaves.
There are four slices of bread.~Есть четыре ломтика хлеба.~Bread не получает -s.
A chicken is in the yard.~Во дворе курица.~Птица как отдельное существо.
There is some chicken in the dish.~В блюде есть курятина.~Продукт в неисчисляемом значении.
Two coffees, please.~Два кофе, пожалуйста.~В кафе две порции; размер можно уточнить.
We don't have any flour.~У нас нет муки.~Полное отрицание наличия.
Do we have any eggs?~У нас есть яйца?~Нейтральная проверка.
Would you like some juice?~Хотите сока?~Предложение с some.
Can I have some cheese, please?~Можно мне сыра?~Просьба с ожиданием наличия.
There is no butter.~Масла нет.~No без not.
Any mug is fine.~Любая кружка подойдёт.~Свободный выбор.
Some of these jars are empty.~Часть этих банок пуста.~Известный набор через of these.
How many bottles are there?~Сколько бутылок?~Счёт упаковок.
How much water is in each bottle?~Сколько воды в каждой бутылке?~Объём внутри одной.
There are two pieces of equipment.~Есть две единицы оборудования.~Не two equipments.
There is some information on the label.~На этикетке есть информация.~Information здесь U.
Please read the order back to me.~Пожалуйста, повторите мне заказ.~Проверка понимания, не чтение наоборот.
We need two full one-litre cartons, not two small glasses.~Нужны две полные литровые упаковки, а не два маленьких стакана.~Число без единицы недостаточно.`),banks:[
 bank('A103-portions','practice','Значение существительного и some/any','practice',`short~noun~Rice как продукт без упоминания сортов: C или U?~U~Обычное вещественное значение.
short~noun~Одна целая груша pear: C или U?~C~Одна груша — отдельный исчисляемый плод: a pear.
short~noun~Chicken в There is chicken in the sandwich: C или U?~U~Мясо, не отдельная птица.
short~noun~Chicken в A chicken is standing by the gate: C или U?~C~A chicken обозначает отдельную птицу, а не мясо.
short~noun~Furniture в обычной описи комнаты: C или U?~U~Считают pieces/items of furniture.
short~noun~Glass в This jar is made of glass: C или U?~U~Glass обозначает стекло как материал, а не отдельный стакан.
short~noun~Glass в There are two glasses: C или U?~C~Glasses здесь обозначает отдельные стаканы, поэтому это C.
short~noun~Для одной целой луковицы: ___ onion. A/an?~an~Onion начинается с гласного звука, поэтому an.
short~choice~Базовая положительная опись, не свободный выбор: We have ___ pasta. Some/any?~some~Утверждаем наличие.
short~choice~Полное отсутствие: We don't have ___ jam. Some/any?~any~Not any отрицает наличие неопределённого запаса в данной области.
short~choice~Нейтрально проверь запас: Are there ___ clean plates? Some/any?~any~Ожидание да не задано.
short~choice~Предлагаешь напиток по модели Would you like ___ tea? Some/any?~some~Предложение с some.
short~choice~Свободный выбор: ___ bowl is fine. Some/any?~any~Any означает свободный выбор: подойдёт любая миска.
sentence~choice~Перепиши с no: We don't have any sugar.~We have no sugar.~No вместо not any.
sentence~choice~Перепиши с not any: There is no oil.~There is not any oil.|There isn't any oil.|There's not any oil.~Сохраняется единственное is.
sentence~noun~Исправь: I need two advices.~I need two pieces of advice.~Число выражает pieces, а advice остаётся неисчисляемым.
sentence~noun~Исправь: There are some informations on the box.~There is some information on the box.|There's some information on the box.~Information U и is.
text~noun~Объясни two teas в кафе, не объявляя tea всегда исчисляемым.~It normally means two servings of tea in this café context. The size still needs checking.~Контекст порции, не универсальный plural вещества.
text~choice~Попроси хлеб и объясни, почему используешь some в вопросе.~Can I have some bread, please? I expect bread to be available.~Другой естественный вопрос допустим с обоснованием.
text~choice~Сравни Do you have any soup? и Would you like some soup?~The first checks availability; the second offers soup to a person.~Разное намерение говорящего.
text~choice~Объясни разницу any apple is fine и we don't have any apples.~Any apple is fine allows a free choice. The second says there are no apples.~Не один смысл any.
text~choice~Some of these bottles are open. Все ли открыты по этому сообщению?~We know that some are open; the sentence does not give an exact count or justify saying all are open.~Не выводить количество без данных.
text~noun~Назови одну единицу оборудования и неопределённый объём информации.~A piece of equipment; some information.~Два разных типа единиц.
text~message~Перепиши двусмысленное Bring two milks для покупки с точной единицей.~Bring two one-litre cartons of milk, please.~Размер в самостоятельном примере выбран явно, не якобы известен из исходника.`),
 bank('A103-portions','portions','Порции, ёмкости и единицы','practice',`short~unit~A loaf of bread → two ___ of bread. Вставь форму loaf.~loaves~Особое множественное.
short~unit~A slice of bread → three ___ of bread.~slices~Множественное slice.
short~unit~There ___ two bags of sugar. Is/are?~are~Главное слово bags.
short~unit~There ___ a bag of apples. Is/are?~is~Главное слово bag.
short~unit~Для массы potato в one kilo of ___ нужна форма potato/potatoes?~potatoes~Счётные клубни во множественном после меры.
short~unit~Two pieces of ___: equipment/equipments?~equipment~Вещественное/собирательное значение сохраняется.
short~unit~В three jars of jam исчисляемое главное слово: jars или jam?~jars~Количество банок.
short~unit~Две полные бутылки по 0.5 литра: всего сколько литров? Только число.~1~Сначала учти 0.5, не 5.
short~unit~Из two cartons без размера можно вывести ровно два литра? Yes/no.~no~Размер упаковки неизвестен.
sentence~unit~Собери: three / of / cups / coffee.~Three cups of coffee.~Of связывает порцию и напиток.
text~unit~Переформулируй two breads двумя способами: буханки и ломтики.~Two loaves of bread; two slices of bread.~Это разные количества, не синонимы по объёму.
text~unit~Сравни a bag of rice и a kilo of rice: что измеряет каждая фраза?~The first counts a package; the second specifies mass. A bag is not necessarily one kilo.~Не предполагать стандартный размер.`,'','Порции')
 ,bank('A103-portions','reading','Список для общей кухни','reading',`short~message~Для какого события готовят продукты: workshop или birthday?~workshop~Учебная мастерская.
short~unit~Сколько полных литровых упаковок молока уже есть?~2~Две, каждая по литру.
short~unit~Сколько литров молока это составляет?~2~Размер и полнота названы явно.
short~message~Сколько целых буханок хлеба есть?~1~Одна целая буханка.
short~message~Есть ли масло butter? Yes/no.~no~В проверенной описи butter отсутствует; это не неизвестный запас.
short~unit~Заказ дополнительного хлеба дан в slices или loaves?~slices~Нужны шесть ломтиков.
short~message~Все пакеты риса имеют известную массу? Yes/no.~no~Размеры не указаны.
short~message~What is inside the sealed tin: beans/soup/not stated?~not stated~Этикетки нет, содержимое не известно.
short~noun~Information в тексте относится к сведениям или к физическим упаковкам? Information/packages.~information~Сведения на этикетке.
text~message~Составь точный краткий список покупок по тексту.~Six slices of bread and a jar of jam. Please check whether any butter is available.~Не заменять ломтики буханками; масло пока вопрос.
text~choice~Напиши предложение чая гостю, используя some.~Would you like some tea?~Предложение, не проверка кладовой.
text~message~Почему нельзя отчитаться We have two kilos of rice?~There are two bags, but their mass is not stated.~Единицы не взаимозаменяемы.`,
 `Jo is preparing the shared kitchen for a small evening workshop. This is a language activity, not a recipe with fixed portions. There are two full one-litre cartons of milk in the fridge. There is one whole loaf of bread on the shelf, and there are six eggs in a box. There isn't any butter. There are two bags of rice, but their labels do not show the mass clearly. Jo records the number of bags without inventing a number of kilos.
Mina is going to the shop. Her message says, “Please bring six slices of bread and a jar of jam. Please also check whether there is any butter.” The request is for slices, not six whole loaves. Mina reads the order back before she leaves. There is some tea in the kitchen, so Jo can offer a drink to the first visitor: “Would you like some tea?”
There is also a sealed tin without a label. Nobody knows what is inside it. Jo does not report it as beans or soup. The label on a different packet has some useful information about its contents. One visitor asks whether it contains milk. Jo reads the actual label instead of guessing from the packet's colour. Before the workshop starts, the volunteers check the purchased items against the message and update the stock list.`),
 bank('A103-portions','listening','Уточняем заказ в магазине','listening',`short~unit~Сколько бутылок воды просит клиент?~3~Клиент просит три бутылки; две — число банок фасоли.
short~unit~Какой объём каждой бутылки в литрах? Только число.~0.5~Для каждой бутылки назван объём 0.5 литра.
short~unit~Общий объём воды в литрах?~1.5~Три бутылки по 0.5 литра дают 1.5 литра, не 15.
short~unit~Сколько банок фасоли?~2~Две консервные банки.
short~message~Есть ли requested plain yoghurt? Yes/no.~no~Простого йогурта нет.
short~message~Клиент согласился на strawberry yoghurt? Yes/no.~no~Он отказался от замены.
short~unit~Хлеб заказан как одна буханка или один ломтик? Loaf/slice.~loaf~Одна небольшая буханка.
short~message~Нужен ли пакет? Yes/no.~no~У клиента есть свой.
text~message~Повтори весь подтверждённый заказ без йогурта.~Three half-litre bottles of water, two tins of beans and one small loaf of bread.~Отказанный товар не входит в заказ.
text~choice~Предложи другой напиток вежливым вопросом.~Would you like some juice?~Some естественно в предложении.
text~message~Какие данные нельзя придумать: цену, общий объём воды или число банок? Почему?~The price is not stated. The water volume and number of tins can be recovered from the order.~Отделить известные единицы от неизвестной цены.
speech~message~Прими роль продавца и переспроси размер бутылки, затем подтверди заказ.~Half a litre in each bottle, is that right? — Yes. Three bottles, please.~Живой обмен и точность числа/единицы.`,
 `Shop assistant: Hello. What would you like? Customer: Three bottles of water, please. Half a litre in each bottle, not the large one-litre bottles. Assistant: Three half-litre bottles. Anything else? Customer: Two tins of beans and a small loaf of bread. Do you have any plain yoghurt? Assistant: No, we don't have any plain yoghurt today. Would you like some strawberry yoghurt instead? Customer: No, thank you. Just the water, the beans and the bread. Assistant: So that's three bottles, two tins and one small loaf. Customer: That's right. Please don't add the yoghurt. Assistant: Do you need a bag? Customer: No, thanks. I have my own bag here. I will check the items before I leave.`),
 bank('A103-portions','production','Письменный заказ, просьба и ответ','writing',`text~unit~Запиши молоко, макароны и помидоры тремя разными единицами.~A litre of milk, a packet of pasta and four tomatoes.~Жидкость, упаковка и поштучный счёт.
text~choice~Напиши нейтральный вопрос о наличии сыра и отдельную просьбу дать немного.~Is there any cheese? Can I have some cheese, please?~Разные намерения.
text~noun~Для отчёта перечисли две единицы оборудования и один совет без equipments/advices.~There are two pieces of equipment. There is one useful piece of advice in the guide.~Неисчисляемость сохраняется.
text~message~Напиши 90–120 слов партнёру: дома две литровые упаковки молока, шесть яиц, нет муки; купить один килограмм муки, четыре яблока и два ломтика хлеба; неизвестно наличие масла в магазине. Попроси подтвердить единицы.~Here is the checked list for our shared kitchen. There are two one-litre cartons of milk in the fridge, and there are six eggs in the blue box. We don't have any flour. Please buy a kilo of flour, four apples and two slices of bread. We need slices, not two whole loaves. I don't know whether the shop has any butter, so please ask before adding it to the order. Can you read the quantities back to me? If the packet size is different, please send a message instead of changing the order without checking.~Все факты и ограничения, ясные единицы, связность; размер текста не заменяет оценку смысла.
text~unit~Попроси подтвердить замену двух 0.5-литровых бутылок одной литровой.~Is one full one-litre bottle OK instead of two half-litre bottles?~Объём равен, но замена упаковки требует согласования.
text~choice~Составь ответ на предложение чая: откажись и попроси воды.~No, thank you. Can I have some water instead, please?~Вежливое отклонение и альтернатива.
text~message~Исправь заказ: two rice, three breads, an information. Укажи выбранные единицы явно.~Two bags of rice, three slices of bread and an item of information.~Выбор единиц поясняется; возможны другие обоснованные варианты.
text~message~Напиши восемь реплик: товар, размер, отсутствие, отказ от замены, итог.~A: Do you have any plain yoghurt? B: No, but there is some fruit yoghurt. A: No, thank you. Can I have two bottles of water? B: What size? A: Half a litre each, please. B: Two half-litre bottles. Anything else? A: No, that's all. B: Here you are.~Есть реальное согласование, не только четыре yes/no.
speech~message~Продиктуй заказ без написанного числа перед партнёром; получи обратное повторение.~Two jars of jam and three tins of beans, please. — Two jars and three tins? — Yes, that's right.~Слышимые числа и единицы.
speech~choice~Предложи гостю два напитка, выслушай выбор и уточни порцию.~Would you like some tea or coffee? — Tea, please. — A cup or a large mug?~Ответ партнёра определяет продолжение.
speech~unit~Скажи a bottle of milk и two bottles of milk, выделяя только изменившееся количество.~A bottle of milk. TWO bottles of milk.~A/of могут быть слабыми, но не исчезает существенное число.
text~message~Перепиши свой заказ после замечания партнёра, сохранив первоначальную версию.~Original: two bags. Revised: two one-kilo bags of rice.~Покажи реальное уточнение, не выдуманную ошибку ученика.`),
 bank('A103-portions','review','От кухни к рабочим единицам','review',`short~noun~Обычное luggage: C/U?~U~Багаж, не отдельный suitcase.
short~unit~Three pieces of furniture: сказуемое is/are?~are~Согласование определяется множественным pieces, не furniture.
short~choice~Полное отсутствие: There are ___ eggs. No/any?~no~Утвердительное are + no.
short~unit~Четыре полные бутылки по 0.25 л: общий объём цифрой.~1~Четверти складываются в литр.
short~choice~Some rice даёт точную массу? Yes/no.~no~Количество не определено.
short~choice~Would you like some pasta? нарушает грамматику только потому, что вопрос? Yes/no.~no~Предложение с some.
text~noun~Сравни a cake и some cake без утверждения, что одна форма всегда неверна.~A cake can be a whole item; some cake is an unspecified amount or portion.~Учитывается смысл.
text~unit~Объясни разницу three cups и three cups of tea.~Three cups names containers; three cups of tea names servings with contents.~Пустые чашки и порции — не одно и то же.
text~message~Объедини наличие и процесс: две банки, Jo сейчас проверяет этикетки.~There are two jars. Jo is checking their labels.~Возвращается Continuous и their.
text~choice~Запиши предложение с any в значении «любой» и отрицание полного отсутствия.~Any plate is fine. There aren't any plates here.~Два употребления.
speech~message~Через семь дней согласуй другой заказ с партнёром, не повторяя готовый диалог.~Can I have a jar of jam and a loaf of bread? What sizes are available?~Новые продукты/числа выбирает собеседник.
text~unit~Проверь свой прошлый список: где единица была неизвестна и какой вопрос это исправляет?~Two packets — How much is in each packet?~Используй действительную работу, не фиктивный результат.`)
 ],tests:[
 exam('A103-portions','a',`short~noun~Butter как продукт, без сортов: C/U?~U~Продукт назван как вещество; в данной фразе это U.
short~noun~Carrot как целый овощ: C/U?~C~Отдельный предмет.
short~noun~Chicken в a bowl of chicken: C/U?~U~Chicken здесь мясо в порции, а не отдельная птица.
short~unit~One loaf → four ___.~loaves~У loaf особое множественное число loaves.
short~unit~There ___ five jars of honey. Is/are?~are~Главное слово jars.
short~unit~There ___ a box of pears. Is/are?~is~Главное слово box.
short~unit~Три полных пакета по 0.5 кг: общая масса цифрой.~1.5~Три порции по 0.5 килограмма дают 1.5, десятичная точка значима.
short~choice~Базовая опись, не свободный выбор: There is ___ soup. Some/any?~some~Утверждение наличия.
short~choice~Полное отсутствие: There isn't ___ honey. Some/any?~any~Not any отрицает наличие неопределённого запаса в данной области.
short~choice~Предложение: Would you like ___ toast? Some/any?~some~Some употребляется в предложении угощения, хотя это вопрос.
short~choice~Свободный выбор: ___ clean spoon is fine. Some/any?~any~Any здесь означает «любая», то есть свободный выбор.
sentence~noun~Исправь: We need three equipments.~We need three pieces of equipment.~Считается единица.
sentence~choice~Перепиши с no: There isn't any cream.~There is no cream.|There's no cream.~Без двойного отрицания.
text~noun~Объясни three coffees в заказе и уточни недостающий размер.~It means three servings. What size is each coffee?~Контекст и вопрос, не запрет C.
text~unit~Есть два пакета гречки без массы на упаковке. Можно ли отчитаться о двух килограммах?~No. The number of bags is known, but their mass is not.~Не подставлять единицу.
text~message~Напиши шесть предложений: есть пять яблок, нет хлеба, нужен один батон/буханка и литр воды; магазин ещё не подтвердил воду.~There are five apples. There isn't any bread. We need a loaf of bread. We also need a litre of water. I don't know whether the shop has any water. Can you check?~Единицы и неизвестность сохранены; liter допустимо.
text~choice~Попроси немного джема с объяснением ожидания наличия.~Can I have some jam, please? I expect some to be available.~Естественные варианты оцениваются по смыслу.
text~message~Два полных стакана по 0.2 л: сообщи и число стаканов, и общий объём, не смешивая их.~There are two full glasses. Each holds 0.2 litres, so there are 0.4 litres in total.~Нужны оба типа данных.
speech~message~Закажи две разные упаковки и исправь ошибку продавца в количестве.~Two tins of tomatoes and one bag of flour, please. — Three tins? — No, two tins.~Собеседник реально уточняет число.
speech~unit~Продиктуй one loaf / three loaves of bread с проверкой услышанного.~One loaf of bread. Three loaves of bread.~Слушатель должен различить число и форму.`),
 exam('A103-portions','b',`short~noun~Flour как продукт, не разновидности: C/U?~U~Продукт назван как вещество; в данной фразе это U.
short~noun~Tomato как целый плод: C/U?~C~Отдельный предмет.
short~noun~Cake в some cake on the plate: C/U в данном значении?~U~Количество торта, не счёт целых.
short~unit~One loaf → five ___.~loaves~Множественная форма.
short~unit~There ___ four bottles of oil. Is/are?~are~Главное слово bottles.
short~unit~There ___ a bag of lemons. Is/are?~is~Главное слово bag.
short~unit~Три полные бутылки по 0.25 л: общий объём цифрой.~0.75~Три четверти литра.
short~choice~Базовая опись: We have ___ cheese. Some/any?~some~Утверждаем запас.
short~choice~Полное отсутствие: We don't have ___ pasta. Some/any?~any~Not any отрицает наличие неопределённого запаса в данной области.
short~choice~Угощение: Would you like ___ coffee? Some/any?~some~Some возможно в вопросе.
short~choice~Свободный выбор: ___ small glass will do. Some/any?~any~Any разрешает выбор любого подходящего стакана.
sentence~noun~Исправь: I need four advices.~I need four pieces of advice.~Advice остаётся U.
sentence~choice~Перепиши с no: There aren't any oranges.~There are no oranges.~Отрицание через no.
text~noun~Объясни two soups в кафе и задай уточняющий вопрос о порции.~It means two servings of soup. Are they small or large bowls?~Смысл восстановлен из ситуации.
text~unit~Есть три коробки сока неизвестного размера. Можно ли утверждать ровно три литра?~No. The carton count does not determine the volume without the size.~Нет данных об объёме.
text~message~Напиши шесть предложений: есть четыре груши, нет риса; нужны пакет риса массой килограмм и две бутылки сока; наличие сока неизвестно.~There are four pears. There isn't any rice. We need a one-kilo bag of rice. We also need two bottles of juice. I don't know whether juice is available. Please ask the shop.~Не угадывать размер бутылок или наличие.
text~choice~Попроси немного масла, объясни some и допусти осмысленный другой вопрос.~Can I have some butter, please? I expect it to be available; Is there any butter? would check the stock first.~Оценивается намерение.
text~message~Четыре полные кружки по 0.3 л: сообщи число и общий объём.~There are four full mugs. Each holds 0.3 litres, so there are 1.2 litres in total.~Не 12 и не четыре литра.
speech~message~Закажи два товара и пересогласуй предложенную продавцом другую упаковку.~A carton of milk and a jar of jam, please. — A small carton? — Is there a one-litre carton?~Реальный обмен с уточнением.
speech~unit~Продиктуй a slice / six slices of bread; партнёр повторяет количество.~A slice of bread. Six slices of bread.~Аудио и понятность без автоматической фонетической оценки.`)
 ]};

import {bank,exam,examples,goal} from './unit-tools.mjs';
import {quantitySources} from './quantity-place.mjs';
export default {
 id:'A103-quantity',topic:'A103',title:'Сколько и достаточно ли: much/many, few/little, enough и избыток',prerequisites:['A103-portions'],references:['quantity','numbers-time','nouns-articles'],sources:quantitySources,
 goals:[goal('form','Строить количественные группы и вопросы с учётом единицы','practice'),goal('meaning','Различать наличие, скудность, достаточность и избыток','reading'),goal('report','Обосновывать потребность и согласовывать изменение плана','production')],
 explanation:[
  {title:'Два вопроса о количестве',text:'How many chairs? считает отдельные предметы, How much water? спрашивает количество вещества. Число выбирается по главному слову: How many bottles of water? — bottles, How much water in the bottles? — water. Many относится к C plural, much — к U; equipment/information/advice из предыдущей подтемы сохраняют U. How much is this chair? спрашивает цену, хотя chair исчисляемое: much здесь не определяет существительное chair напрямую. Не исправляй вопрос о цене на how many только из-за видимого C.'},
  {title:'Много и регистр',text:'A lot of/lots of применимы к обоим типам: a lot of plates, a lot of soup. Перед существительным требуется of. Many естественно в вопросах, отрицаниях и во многих утверждениях; much перед U в обычном положительном разговорном предложении часто заменяется a lot of. I have much time звучит менее обычно, чем I have a lot of time; но too much time, so much work и формальное Much work remains имеют свои условия. Удобная стартовая модель не означает, что many запрещено во всех утверждениях или much нигде не встречается без not.'},
  {title:'A few и few: одно число, разная подача',text:'A few plates выделяет, что несколько тарелок есть; few plates подчёркивает малое число, часто недостаток. Обе формы относятся к C plural. Это не таблица процентов и не граница «до трёх/после трёх»: одна и та же ситуация может описываться по-разному в зависимости от цели говорящего. Few не равно zero. A few не равно enough: четыре тарелки — несколько, но для десяти гостей при условии одной каждому их недостаточно. В закрытом упражнении явно называем желаемый акцент; свободный выбор нужно объяснить.'},
  {title:'A little и little: количество вещества',text:'A little milk сообщает, что небольшой объём есть; little milk подчёркивает скудный запас. Тип существительного остаётся U. A little имеет положительный смысл наличия, но не обещает, что хватит всем. Little может быть и прилагательным «маленький»: a little cup — маленькая чашка, a little coffee — немного кофе. Объект и размер не тождественны количеству содержимого. В упражнении сначала прочитай всю группу и установи, что определяет little, а не ищи единственную русскую замену.'},
  {title:'Достаточно — относительно цели',text:'Enough стоит перед существительным: enough chairs, enough time, не enough of chairs в обычном неопределённом наборе. После прилагательного наоборот: large enough; подробно размеры сравниваются в A202. There are enough chairs for six people требует контекста использования. Если шесть человек сидят одновременно и каждому нужен один стул, шести достаточно. Если работа идёт парами по очереди, исходная потребность может быть другой. Поэтому задачи курса явно задают людей, единицы и правило распределения, а не учат угадывать смысл из одной цифры.'},
  {title:'Избыток отличается от большого количества',text:'Too many plates и too much food значат больше приемлемого или нужного. A lot of food само по себе не содержит отрицательной оценки. Если четыре свободных места на полке и шесть одинаковых коробок, два не помещаются: too many boxes for this shelf. Это языковая модель с вымышленными условиями, не совет выбрасывать еду. We have too much sugar может описывать запас, а There is too much sugar in this drink — состав конкретной порции; область оценки меняется. Не переносить вывод на весь дом или все напитки.'},
  {title:'Of и известный набор',text:'Many plates — много тарелок вообще в текущем описании; many of the plates — много из конкретных тарелок. Some rice — некоторый рис; some of the rice — часть обозначенного запаса. Перед these/my/them нужна связь: some of these cups, a few of my friends, some of them. A lot of включает of как часть модели, но many of plates без определённого набора не наша нейтральная форма. None of these packets означает ноль из этой группы; не утверждает отсутствие других пакетов. Сложное согласование none пока не проверяется единственным ключом.'},
  {title:'Счёт, достаточность и неизвестность',text:'There are ten cups. We need twelve. We need two more — три связанных утверждения: факт, цель, разница. We don’t have enough cups не означает полного отсутствия. We don’t have many cups не задаёт точного числа. A few cups are cracked не даёт права пересчитать пригодные чашки без исходного числа и числа повреждений. There is enough water говорит о количестве для принятой цели, но не гарантирует качество воды. В бытовой и технической переписке не делай выводы шире данных: enough space для задачи и безопасность системы — разные вопросы.'},
  {title:'Сообщение должно помогать действовать',text:'Строй сообщение так: проверенный запас → требование → нехватка или избыток → предложение → вопрос о неизвестном. Например, шесть стульев и восемь участников: нужно ещё два стула, а не «у нас ничего нет». Партнёр может предложить другое помещение или две очереди, после чего расчёт пересматривается по новым условиям. При устном исправлении выделяй much/many, no/not enough и конкретное число. Сохраняй черновик и исходные цифры; исправление не стирает историю и не подтверждает освоение без итогового контроля и отложенного применения.'}
 ],examples:examples(`How many plates do we need?~Сколько тарелок нужно?~Считаем предметы.
How much rice do we need?~Сколько риса нужно?~Количество вещества.
How many bags of rice are there?~Сколько пакетов риса есть?~Главное слово bags.
How much is this bag?~Сколько стоит этот пакет?~Вопрос о цене.
There isn't much juice.~Сока немного.~Отрицание большого количества, не обязательно ноль.
There aren't many clean cups.~Чистых чашек немного.~C plural.
There is a lot of juice.~Сока много.~Разговорное утверждение с U.
There are a lot of cups.~Чашек много.~Та же модель с C plural.
We need a few spoons.~Нам нужно несколько ложек.~Выделено небольшое наличие/число.
We have few spoons for such a large group.~Для такой большой группы ложек мало.~Выделена скудность.
There is a little oil left.~Осталось немного масла.~Небольшой объём есть.
There is little oil left.~Масла осталось мало.~Акцент на скудном запасе.
This is a little cup.~Это маленькая чашка.~Little описывает размер C, не объём U.
There are enough seats for four people.~Мест достаточно для четырёх.~Цель названа.
There aren't enough seats for eight.~Для восьми мест недостаточно.~Не означает отсутствие всех мест.
There are too many boxes for this shelf.~Для этой полки коробок слишком много.~Избыток относительно вместимости.
There is too much salt in this bowl.~В этой миске слишком много соли.~Оценка порции, не всего запаса.
Some of the cups are chipped.~Часть этих чашек со сколами.~Определённый набор.
Many people use this kitchen.~Многие пользуются этой кухней.~Many допустимо в утверждении.
We have ten plates and need two more.~Есть десять тарелок, нужны ещё две.~Факт и дополнение.
A few towels are here, but they aren't enough for everyone.~Несколько полотенец есть, но всем не хватит.~A few не гарантирует enough.
The stock is large, but its exact weight is unknown.~Запас большой, но точная масса неизвестна.~Качественная оценка не даёт точной цифры.`),banks:[
 bank('A103-quantity','practice','Форма и смысл количественной группы','practice',`short~form~How ___ oranges are in the bag? Much/many?~many~Названы отдельные исчисляемые единицы во множественном числе.
short~form~How ___ flour is left? Much/many?~much~Flour обозначает вещество; количество спрашивается через much.
short~form~How ___ packets of flour are there? Much/many?~many~Считаем packets.
short~form~How ___ information do we have? Much/many?~much~Information в этом значении неисчисляемо: much information.
short~form~How ___ is this bowl? Вопрос о цене: much/many?~much~Вопрос запрашивает цену миски, а не число мисок.
short~form~There are a lot ___ carrots. Of/без слова?~of~Of перед существительным.
short~form~We don't have many ___ plates. Of/без слова? Ответ none, если слово не нужно.~none~Many прямо перед неопределённым существительным.
short~form~Some ___ these bowls are dirty. Вставь одно слово.~of~Часть определённого набора.
short~form~A little/a few: ___ milk. Выбери группу целиком.~a little~Milk здесь неисчисляемо, поэтому a little, не a few.
short~form~A little/a few: ___ mushrooms. Выбери группу целиком.~a few~Mushrooms C plural.
short~meaning~Нужно выделить наличие некоторого небольшого числа: We have ___ clean forks. Few/a few?~a few~Задан положительный акцент наличия.
short~meaning~Нужно подчеркнуть скудность, а не наличие: We have ___ forks for the whole group. Few/a few?~few~Задан отрицательный акцент малого числа.
short~meaning~Акцент на том, что немного воды есть: There is ___ water. Little/a little?~a little~Наличие малого количества.
short~meaning~Акцент на скудности запаса: There is ___ water for a group this large. Little/a little?~little~Малое количество как ограничение.
short~form~Too much/too many: ___ chairs for the small room.~too many~Названы отдельные исчисляемые единицы во множественном числе.
short~form~Too much/too many: ___ luggage for one locker.~too much~Luggage в этом значении U, поэтому too much.
short~meaning~Есть 7 мест, 9 человек одновременно, по одному месту каждому. Enough/not enough?~not enough~Не хватает двух.
short~meaning~Есть 5 мест для 5 человек, каждому одно. Enough/too few?~enough~Условие распределения явно задано.
short~meaning~A few plates обязательно значит достаточно для двадцати гостей? Yes/no.~no~Цель не следует из a few.
short~meaning~Few plates обязательно значит ноль? Yes/no.~no~Скудность не равна точному нулю.
short~meaning~A lot of water само по себе означает избыток? Yes/no.~no~Избыток — дополнительная оценка too much.
text~meaning~Сравни a little coffee и a little cup.~The first is a small amount of coffee; the second is a small cup.~Количество U и размер C.
text~form~Отредактируй для обычного разговора I have much free time, не объявляя much в утверждениях всегда запрещённым.~I have a lot of free time. Much has other uses, including formal affirmatives and too much.~Регистр, не ложный абсолютный запрет.
text~meaning~We don't have enough soup. Доказано ли полное отсутствие?~No. There may be some soup, but less than the amount needed.~Не подменять отрицание достаточности отсутствием.
text~form~Объясни a lot of apples / a lot после вопроса о числе яблок.~Of links to the noun; without the noun a lot is a complete quantity answer.~Не обрывать a lot of без дополнения.
text~report~8 тарелок, 11 гостей, каждому одна. Напиши факт, нехватку и действие.~There are eight plates. We need three more for eleven guests. Please bring three plates.~Числа и план связаны.`),
 bank('A103-quantity','reading','План ужина: достаточно для какой цели?','reading',`short~meaning~Сколько людей едят одновременно?~8~План рассчитан на восемь одновременно сидящих гостей.
short~meaning~Сколько пригодных тарелок уже есть?~6~Шесть чистых тарелок.
short~meaning~Сколько ещё тарелок нужно, по одной каждому?~2~Восемь гостей минус шесть имеющихся тарелок: нужны ещё две.
short~meaning~Есть ли достаточное число ложек? Yes/no.~yes~Десять ложек для восьми.
short~meaning~Воду измерили точно? Yes/no.~no~Точный объём неизвестен.
short~meaning~A little rice гарантирует достаточно риса всем? Yes/no.~no~Объём и потребность не сопоставлены.
short~meaning~Сколько коробок помещается на одной полке по условию?~4~Четыре одинаковые коробки.
short~meaning~Сколько коробок не помещается из шести?~2~Шесть минус четыре.
short~meaning~All the cups are clean: true/false/not stated?~false~Две чашки грязные.
text~report~Напиши три связанных предложения о тарелках.~There are six clean plates. Eight people need one each. We need two more plates.~Все три условия сохранены.
text~meaning~Объясни, почему don't have much rice не равно don't have any rice.~There is a small amount of rice, not a reported complete absence.~Не путать мало и нет.
text~report~Какой вопрос нужен до сообщения enough water?~How much water do we need, and how much is in the jug?~Нужны измерение и целевой объём.`,
 `Eight people are coming to a shared dinner, and everyone is eating at the same time. The plan gives each person one clean plate and one spoon. There are six clean plates on the kitchen table, so Mina needs two more. There are ten clean spoons in the drawer. That is enough for this plan, with two spare spoons. A large number is not automatically a problem: the spare spoons can stay in the drawer.
There is a little rice in a bag. Jo says, “We don't have much rice.” He does not mean that the bag is empty. Its exact weight is unknown, and the group has not yet agreed how much rice to use. There is also a jug of water, but nobody has measured it. A full-looking jug is not a reliable number of litres without knowing its size.
The storage shelf has space for four identical boxes in a single row. There are six of these boxes, so two do not fit in that row. Mina suggests moving the two extra boxes to another shelf instead of blocking the doorway. There are twelve cups, but two are dirty. Jo washes those cups before counting them as ready to use. The final message separates checked quantities, amounts still needing measurement and requests for extra items. It does not simply say, “There is plenty of everything.”`),
 bank('A103-quantity','listening','Пересчитываем после изменения плана','listening',`short~meaning~Сколько гостей теперь придёт?~7~Число увеличилось до семи.
short~meaning~Сколько чистых чашек есть?~5~В сообщении пять чистых чашек, а гостей теперь семь.
short~meaning~Сколько ещё чашек нужно, каждому по одной одновременно?~2~Семи гостям нужны семь чашек; при пяти не хватает двух.
short~meaning~Ложек достаточно? Yes/no.~yes~Восемь для семи.
short~meaning~Сока нет совсем? Yes/no.~no~Сообщено a little juice: небольшой запас есть, это не ноль.
short~meaning~Объём сока в литрах известен? Yes/no.~no~Его надо измерить.
short~meaning~Проблема с коробками — little space или little milk?~little space~Little space описывает нехватку места для тарелок.
short~meaning~Предложено выбросить лишние коробки? Yes/no.~no~Их перенесут на другую полку.
text~report~Передай запрос двух дополнительных чашек одним полным предложением.~Please bring two more clean cups for the seven guests.~Число и пригодность сохранены.
text~meaning~Назови два разных смысла отрицания в сообщении.~Not enough cups means a shortage; not much juice means a small amount, not necessarily none.~Достаточность и большое количество отрицаются по-разному; ни одно не обязано означать ноль.
text~report~Задай уточняющий вопрос о соке.~How much juice is in the bottle?~Не придумывать объём.
speech~report~Партнёр сообщает о ещё одном госте. Пересчитай чашки и вслух измени запрос.~There are now eight guests, so we need three more cups, not two.~Новое условие меняет расчёт.`,
 `Hi, Mina. The plan is changing: seven guests are coming now, not five. They all need a cup at the same time. There are five clean cups on the tray, so please bring two more. There are eight spoons, and that is enough for seven people. We don't have much juice, but there is a little in the bottle. I don't know the exact amount yet. Please measure it before saying that there is enough for everyone. There are too many boxes on this small shelf, and there is little space for the plates. We can move the extra boxes to the shelf in the hall; we don't need to throw them away. Please read the changed cup number back to me.`)
 ,bank('A103-quantity','production','Обосновать нехватку и договориться','writing',`text~form~Задай разные вопросы о числе упаковок, объёме содержимого и цене.~How many cartons are there? How much juice is in each carton? How much is one carton?~Три разных данных.
text~meaning~Опиши пять стульев как достаточные для одной группы и недостаточные для другой. Назови условия.~There are enough chairs for five people with one chair each, but not enough for eight people sitting together.~Enough относительно цели.
text~meaning~Один и тот же малый запас сахара опиши с акцентом на наличие и на нехватку.~There is a little sugar left. There is little sugar for such a large cake.~Не приписывать форму фиксированной цифре.
text~report~Напиши 90–120 слов организатору: девять участников, по одной тарелке одновременно; семь чистых тарелок, десять ложек; немного сока неизвестного объёма; полка для трёх одинаковых ящиков, ящиков пять. Предложи действие и вопрос.~Here is the updated plan for our nine visitors. Each person needs one plate at the same time. There are seven clean plates, so we need two more. There are ten spoons, which is enough for this group. There is a little juice in the kitchen, but I don't know its exact volume. How much do we need for the plan? Please measure the current amount before buying more. The small shelf has space for three identical boxes, but there are five. There are too many for that shelf. We can move two boxes to the empty shelf in the hall.~Связные факты, расчёты, ограничение знания и действие; образец не единственный.
text~report~Исправь сообщение Everything is enough: реально шесть чашек для восьми, вода не измерена.~There aren't enough cups for eight people; we need two more. The amount of water still needs checking.~Не глобальное обещание.
text~form~Составь две фразы some of с the и them.~Some of the plates are wet. Some of them need drying.~Конкретная группа.
text~meaning~Поясни, почему a lot of boxes и too many boxes не взаимозаменяемы.~A lot describes a large number. Too many says the number exceeds what is suitable for the purpose.~Не любое множество плохо.
text~report~Напиши восемь реплик: план, проверенный запас, уточнение, корректировка.~A: How many guests are coming? B: Six, all at once. A: There are only four chairs. B: We need two more, then. A: Are there any in the hall? B: Yes, there are three. A: Let's bring two and leave one there. B: Good. That gives us enough seats.~Расчёт следует из ответа партнёра.
text~meaning~Few packets are open доказывает точное число закрытых?~No. We need the total number and the number open to calculate the closed packets.~Качественное слово не даёт точного счёта.
text~report~Из своего описания убери лишнее, сохрани факт, цель и неопределённость.~We have four mugs for six people, so we need two more. The milk volume is still unknown.~Сокращение не теряет ключевые различия.
speech~report~Обсуди с партнёром нехватку мест; он предлагает проводить работу двумя группами. Пересмотри вывод.~There aren't enough seats for everyone at once. If we split the group, how many people sit in each group?~Условие меняется; грамматика if поддерживается как образец, не отдельная освоенная тема.
speech~meaning~Произнеси no cups / not many cups / not enough cups; партнёр объясняет услышанное.~There are no cups. There aren't many cups. There aren't enough cups.~Аудио нужно, чтобы проверить смысловое отрицание.
speech~form~Спроси цену и количество одного продукта вслух, получи два разных ответа.~How much is the rice? How much rice is in the bag?~Контекст отличает цену от массы.
text~report~Сохрани первую и исправленную версии сообщения после изменения числа гостей.~Original: We need one more plate for six guests. Revised: Seven guests are coming, so we need two more plates.~Работай с реальным собственным черновиком; не записывай образец как результат ученика.`),
 bank('A103-quantity','review','Количество в новых сочетаниях','review',`short~form~How ___ time is available? Much/many?~much~Time U в значении ресурса.
short~form~How ___ times a week? Much/many?~many~Times — случаи повторения, другая единица.
short~form~A few/little: ___ cables. Введи только few или little.~few~Названы отдельные исчисляемые единицы во множественном числе.
short~form~Few/little: ___ storage space. Введи одну форму.~little~Space в значении свободного места неисчисляемо: little space.
short~form~A lot ___ useful information: вставь связку.~of~Перед существительным нужно of.
short~meaning~None of these boxes означает отсутствие вообще всех коробок в мире? Yes/no.~no~Ограничен набор these.
short~meaning~Enough equipment доказывает, что всё исправно? Yes/no.~no~Количество и состояние — разные свойства.
short~meaning~Три полки по четыре одинаковых ящика, вместимость суммарно? Только число.~12~3 умножить на 4 при заданном условии.
text~form~Исправь many of files, если речь о файлах без определённого набора.~Many files. For a defined set: many of the files.~Of зависит от структуры.
text~meaning~Почему I have a few questions может быть вежливым началом разговора, но не обещанием ровно двух вопросов?~It introduces a small unspecified number, not an exact count.~Число не фиксировано.
text~report~Соедини данные: много столов, мало проходов; Jo сейчас измеряет ширину.~There are a lot of tables but few clear passages. Jo is measuring the width.~Контраст и текущий процесс.
text~meaning~Объясни There isn't much bread без утверждения, что хлеба совсем нет.~There is not a large amount; some bread may still be available.~Not much не равняется no.
speech~report~Через семь дней получи от партнёра новые числа людей и предметов, обоснуй достаточность.~How many people need a seat at the same time? How many usable chairs are there?~Новый контроль не повторяет прежние числа.
text~report~Запиши, какая ошибка в твоём расчёте была языковой, а какая арифметической.~Mixing bottles and litres is a unit error; choosing many with water is a grammar error.~Анализируй фактическую работу, не выдумывай свою ошибку.`)
 ],tests:[
 exam('A103-quantity','a',`short~form~How ___ honey is in the jar? Much/many?~much~Honey в этой фразе неисчисляемо, поэтому much.
short~form~How ___ jars of honey are on the shelf? Much/many?~many~Главное слово jars — исчисляемое во множественном: many.
short~form~How ___ is the large jar? Вопрос о цене: much/many?~much~Цена, не число банок.
short~form~There are a lot ___ spare leads. Вставь связку.~of~Модель a lot of.
short~form~Some ___ my bowls are chipped. Вставь связку.~of~Определённый набор my bowls.
short~form~A few/a little: ___ cream. Введи всю группу.~a little~Cream в продуктовом значении U: a little cream.
short~form~Too much/too many: ___ people for three seats.~too many~People C plural.
short~meaning~Задан акцент на наличии небольшого числа: We have ___ spare sheets. Few/a few?~a few~Наличие, не скудность.
short~meaning~Задан акцент на нехватке: There is ___ room for another table. Little/a little?~little~Room как место U, скудность.
short~meaning~12 гостей, 9 пригодных мест, всем одновременно по одному. Сколько ещё мест?~3~Двенадцать одновременных участников минус девять мест: ещё три.
short~meaning~Пять одинаковых коробок, место лишь для трёх: enough space или too little space?~too little space~Места недостаточно.
short~meaning~A few forks доказывает достаточность для любой группы? Yes/no.~no~Размер группы не задан.
short~meaning~Few people доказывает отсутствие всех людей? Yes/no.~no~Few выделяет скудное число, а не задаёт точное нулевое значение.
text~form~Поясни How much time? против How many times?~Time is duration; times counts occasions.~Возвращается частотность A101.
text~meaning~Сравни a little bowl и a little soup.~The first describes bowl size; the second describes an amount of soup.~Размер и количество.
text~report~Напиши пять предложений: есть восемь чистых вилок для десяти гостей; вода есть, объём неизвестен; добавь действие.~There are eight clean forks. Ten guests need one each. We need two more forks. There is some water, but its volume is unknown. Please measure it before reporting that it is enough.~Расчёт и неопределённость.
text~meaning~Восемь пакетов разного размера: из их числа можно узнать общую массу?~No. We need the mass of each packet or a total measurement.~Не подставлять размер.
text~form~Исправь We need enough of cups для неопределённого набора.~We need enough cups.~Enough прямо перед существительным.
text~report~Уточни сомнительное There is too much food: какой вопрос выясняет основание?~Too much for how many people and for which meal?~Нужна цель, не произвольная оценка.
speech~report~Партнёр увеличивает число участников с десяти до одиннадцати при восьми вилках; пересогласуй запрос.~We now need three more forks, not two.~Новое число и действие.
speech~meaning~Объясни вслух отличие no milk и not enough milk на двух ситуациях.~No milk means none is available. Not enough milk means less than the amount required; there may be some.~Речь проверяется слушателем.
text~meaning~Many guests are waiting — ошибка только из-за утвердительной формы? Объясни.~No. Many can be used in affirmative clauses; this is not an automatic grammar error.~Без ложного запрета.`),
 exam('A103-quantity','b',`short~form~How ___ oil is in the pan? Much/many?~much~Oil в данном значении U, поэтому how much.
short~form~How ___ bottles of oil do we need? Much/many?~many~Считаем bottles.
short~form~How ___ is this saucepan? Цена: much/many?~much~Вопрос о стоимости.
short~form~There is a lot ___ spare paper. Вставь связку.~of~A lot of включает of перед неисчисляемым paper.
short~form~A few ___ these plates are wet. Вставь связку.~of~These задаёт набор.
short~form~A few/a little: ___ biscuits. Введи всю группу.~a few~Biscuits C plural.
short~form~Too much/too many: ___ furniture for this room.~too much~Furniture здесь неисчисляемо; избыток передаёт too much.
short~meaning~Акцент на скудном числе: We have ___ hooks for all these coats. Few/a few?~few~Задан смысл малого запаса.
short~meaning~Акцент на наличии небольшого запаса: There is ___ flour left. Little/a little?~a little~Небольшое количество есть.
short~meaning~13 гостей, 10 чашек, всем одновременно по одной. Сколько ещё чашек?~3~Тринадцать гостей минус десять чашек: требуются ещё три.
short~meaning~Шесть равных коробок, место только для четырёх: too many boxes или too few boxes?~too many boxes~Избыток для полки.
short~meaning~A little space обязательно достаточно для любого шкафа? Yes/no.~no~Зависит от размера и цели.
short~meaning~Little milk обязательно значит полное отсутствие? Yes/no.~no~Скудность не точный ноль.
text~form~Объясни many pieces of advice и much advice.~Pieces counts separate items; advice names information without individual counting.~Грамматика определяется главным словом.
text~meaning~Сравни a little bottle и a little water.~The bottle is small in the first phrase; the water amount is small in the second.~Не смешивать сосуд и содержимое.
text~report~Напиши пять предложений: семь чистых ложек для девяти гостей; есть сок неизвестного объёма; действие и ограничение.~There are seven clean spoons. Nine guests need one each. We need two more spoons. There is some juice, but the amount is unknown. Please measure it before saying that there is enough.~Пять связанных фраз.
text~meaning~Из трёх мешков неизвестной массы можно получить ровно три килограмма?~No. We know the bag count, not the mass.~Недостающие данные.
text~form~Исправь There are many of chairs без определённого набора.~There are many chairs.~Many прямо связано с неопределённым chairs; of не требуется.
text~report~Уточни There are enough plates, если число гостей ещё не согласовано.~Enough for how many people, with how many plates per person?~Для enough нужны численность группы и правило использования.
speech~report~При семи ложках число гостей меняется с девяти на десять. Исправь свой прежний запрос двух ложек.~We need three more spoons now, not two.~Изменяется расчёт.
speech~meaning~Устно противопоставь a lot of salt и too much salt для заданной цели.~A lot is a large amount; too much exceeds what is wanted for the dish.~Смысл, не автоматическая оценка фонетики.
text~meaning~There is much discussion формально допустимо или much полностью запрещено в утверждениях?~Much is not completely banned in affirmatives; it can occur in formal language.~Не распространять разговорную рекомендацию на все регистры.`)
 ]};

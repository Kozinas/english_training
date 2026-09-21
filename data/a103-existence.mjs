import {bank,exam,examples,goal} from './unit-tools.mjs';
import {quantitySources} from './quantity-place.mjs';
export default {
 id:'A103-existence',topic:'A103',title:'Что есть в комнате: there is/are и отсылка к предмету',prerequisites:['A102-states'],references:['quantity','be-questions','nouns-articles'],sources:quantitySources,
 goals:[goal('form','Строить наличие, отрицание, вопрос и краткий ответ','practice'),goal('reference','Вводить предмет и затем описывать его через it/they','production'),goal('evidence','Различать наличие, отсутствие и неизвестные данные','reading'),goal('sound','Слышать и произносить there, is/are и отрицание','sounds')],
 explanation:[
  {title:'Зачем нужна отдельная конструкция',text:'Русское «В комнате стол» вводит новый предмет. В английском для этой задачи удобно There is a table in the room: there занимает обязательное место перед be, a table сообщает, что есть, in the room задаёт область. Это there не означает обязательно «там далеко»: There is a chair here естественно. Не добавляй have по русской логике «имеется»: There has a chair не наша конструкция. My room has a desk тоже возможно, но подлежащее там my room. Учимся выбирать форму под задачу, а не одну русскую фразу под любое предложение.'},
  {title:'Что управляет is и are',text:'There is a shelf — один исчисляемый предмет; There are shelves — несколько; There is some equipment — неисчисляемое значение. Слово equipment не становится множественным от большого числа устройств. There are two boxes of equipment: считаем boxes, и оно управляет are. Уточнение возле существительного не меняет число: There is a chair near the windows. Сначала найди главное слово группы, затем проверь число и определитель. Для одного нового исчисляемого предмета обычно нужен a/an или другой определитель: не There is chair.'},
  {title:'Нейтральное письмо и разговорные варианты',text:'There’s означает there is. В живой речи встречается There’s two chairs и there’s перед списком, начинающимся с одного предмета. Нужно узнавать такие случаи, но для контролируемого аккуратного письма здесь тренируем There are two chairs. Список удобно разделить: There is a table. There are two chairs. Нельзя объявлять любой разговорный вариант дефектом произношения. В письменных образцах оставляем there are без разговорного there’re; стяжение не требуется для естественной речи и не является целью этой страницы.'},
  {title:'Отрицание — сообщение об отсутствии',text:'There isn’t a kettle сообщает отсутствие одного предмета данного типа в обозначенной области. Для множественного и вещества: There aren’t any cups; There isn’t any water. Альтернатива с no: There are no cups; There is no water. Не смешивай два отрицания в нейтральной модели: There aren’t no cups не наш письменный образец. Область важна: отсутствие чашек на столе не доказывает их отсутствия в доме. Если шкаф закрыт и его никто не проверял, ответ — неизвестно, а не there are no cups.'},
  {title:'Вопрос и короткий ответ',text:'Be выходит вперёд: Is there a sink? Are there any shelves? There сохраняется: не Is a sink? и не Does there is a sink? Короткий ответ повторяет there и нужную форму: Yes, there is; No, there isn’t; Yes, there are; No, there aren’t. Здесь не происходит you → I, потому что говорим о наличии, а не о собеседнике. Положительное Yes, there’s не завершает такой ответ; отрицательные No, there isn’t и No, there’s not возможны. Вопрос не является утверждением наличия.'},
  {title:'There вводит, it и they продолжают',text:'There is a cupboard in the kitchen. It is white. There are two chairs. They are blue. Первое предложение вводит объект, второе добавляет характеристику уже известного. A cupboard → the cupboard после введения: The cupboard is beside the door. Не заменяй каждое it на there: There is white не описывает цвет шкафа. It is a cupboard отвечает «что это?», а There is a cupboard — «что есть?». При нескольких возможных объектах назови существительное снова, чтобы it не создавало неясную отсылку.'},
  {title:'Количество и наблюдение',text:'How many chairs are there? спрашивает число; Where are the chairs? — место известных стульев. Ответ There are six сообщает шесть, но some не задаёт точного числа. We need six chairs — потребность, не фактический запас. There are six chairs in the plan — проект, не наблюдение в комнате. При чтении отделяй список желаемого, проверенные предметы, предметы вне комнаты и неизвестное. В рабочем сообщении это та же дисциплина: наличие списка устройств ещё не доказывает их наличия на месте.'},
  {title:'Звук в связной фразе',text:'Учебное there имеет начальный /ð/: кончик языка у края верхних зубов, голос включён, воздух проходит через щель. Не заменяй механически на /z/ или /d/. В there is гласные и r связываются по акценту; в UK слабые формы there и are не всегда звучат как отдельные словарные слова. Сильнее выделяются предмет и новое число: There are THREE boxes. При отрицании слушатель должен услышать not/нет. Транскрипт ASR не показывает положение языка и не подтверждает фонетику: нужен слушатель с реальным аудио.'}
 ],
 examples:examples(`There is a lamp in this room.~В этой комнате есть лампа.~Вводим один новый предмет.
There are two lamps.~Есть две лампы.~Множественное число управляет are.
There is some furniture.~Есть мебель.~Furniture здесь неисчисляемо.
There are three pieces of furniture.~Есть три предмета мебели.~Считаем pieces.
There is a box near the shelves.~Возле полок есть коробка.~Главное слово box, не shelves.
There are boxes near the shelf.~Возле полки есть коробки.~Главное слово boxes.
There’s a clean towel.~Есть чистое полотенце.~There’s = there is.
There isn’t a mirror here.~Здесь нет зеркала.~Отсутствие в заданной области.
There aren’t any plates on the table.~На столе нет тарелок.~Не утверждаем отсутствие во всём доме.
There is no soap in this dish.~В этой мыльнице нет мыла.~No без второго отрицания.
Is there a bathroom?~Есть ванная комната?~Be перед there.
Are there any clean towels?~Есть чистые полотенца?~Проверка наличия множественного.
Yes, there is.~Да, есть.~Краткий положительный ответ без стяжения.
No, there aren’t.~Нет, нету.~Краткое отрицание множественного.
There is a desk. It is small.~Есть письменный стол. Он маленький.~Введение, затем описание.
There are two drawers. They are empty.~Есть два ящика. Они пустые.~They отсылает к drawers.
The desk is near the window.~Стол у окна.~Предмет уже известен.
It is a desk, not a shelf.~Это стол, а не полка.~Идентификация, не введение наличия.
How many sockets are there?~Сколько есть розеток?~Счёт, не вопрос о месте.
Where are the sockets?~Где розетки?~Вопрос о месте известных объектов.
There are four chairs, but we need six.~Есть четыре стула, а нужно шесть.~Запас не равен потребности.
There is a closed cupboard; its contents are unknown.~Есть закрытый шкаф; содержимое неизвестно.~Неизвестность не доказывает отсутствие.`),
 banks:[
 bank('A103-existence','practice','Формы, отрицания и вопросы','practice',`short~form~There ___ one mirror beside the door. Is/are?~is~Главное слово mirror.
short~form~There ___ three towels on the rail. Is/are?~are~Towels — множественное.
short~form~There ___ some furniture in the hall. Is/are?~is~Furniture в этом значении U.
short~form~There ___ two boxes of equipment. Is/are?~are~Считаем отдельные boxes, а не содержимое equipment.
short~form~There ___ a towel near the bottles. Is/are?~is~Группа near the bottles не управляет сказуемым.
sentence~form~Вставь только нужный артикль в полное предложение: There is ___ orange chair.~There is an orange chair.~Orange начинается с гласного звука.
sentence~form~Собери: are / three drawers / there / in the desk.~There are three drawers in the desk.~There + are + предметы + место.
sentence~form~Собери вопрос: a balcony / there / is / ?~Is there a balcony?~Вопрос начинается с is, затем сохраняется there.
sentence~form~Преобразуй в вопрос: There are two sinks.~Are there two sinks?~Не добавлять do.
sentence~form~Отрицай с not: There is a cooker here.~There is not a cooker here.|There isn't a cooker here.|There's not a cooker here.~Сохраняется there и отрицание.
sentence~form~Отрицай с not и any: There are some forks in the drawer.~There are not any forks in the drawer.|There aren't any forks in the drawer.~Any при полном отрицании наличия.
sentence~form~Перепиши с no: There isn't any soap.~There is no soap.|There's no soap.~No заменяет not any.
sentence~form~Перепиши с not any: There are no bowls.~There are not any bowls.|There aren't any bowls.~Не оставлять no после aren't.
sentence~form~Кратко ответь да: Is there a lift?~Yes, there is.~Не Yes, there's.
sentence~form~Кратко ответь нет: Are there any visitors?~No, there are not.|No, there aren't.~Не No, they aren't: вопрос о наличии.
sentence~form~Кратко ответь нет: Is there any hot water?~No, there is not.|No, there isn't.|No, there's not.~Water согласуется с is.
short~reference~There is a red rug. ___ is clean. It/there?~it~Описание уже введённого rug.
short~reference~There are two bins. ___ are empty. They/there?~they~Отсылка к двум bins.
short~reference~Нужно впервые сообщить наличие шкафа: ___ is a cupboard in the hall. There/it?~there~Введение предмета.
sentence~form~Спроси число розеток, начни How many: sockets / are / there.~How many sockets are there?~Вопросительная группа не разрывается.
text~reference~Напиши два предложения: введи один диван, затем сообщи его цвет.~There is a sofa by the wall. It is green.~A sofa вводит, it продолжает; другие цвета допустимы.
text~evidence~Из We need eight plates следует There are eight plates? Объясни.~No. Need describes the required number, not the actual stock.~Потребность и наличие различны.
text~form~Для аккуратного письма отредактируй There's five hooks и поясни разговорный вариант.~There are five hooks. There's before a plural occurs in informal speech, but this task asks for written agreement.~Не оценивать акцент как ошибку.
text~reference~Уточни неясную отсылку: There is a lamp by a box. It is broken. Сломана коробка.~There is a lamp by a box. The box is broken.~Название устраняет двусмысленность.`),
 bank('A103-existence','reading','Новая общая комната: факт и план','reading',`short~evidence~Какое помещение описано: shared room или shop?~shared room~Это общая комната дома.
short~evidence~Сколько стульев проверено внутри? Ответ цифрой.~4~Четыре стоят у стола.
short~evidence~Сколько стульев нужно группе всего?~6~Потребность — шесть.
short~evidence~Есть ли внутри диван? Yes/no.~no~Он только в wish list.
short~evidence~Сколько коробок оборудования проверено?~2~Две коробки у стены.
short~evidence~The cupboard contains cups: true/false/not stated?~not stated~Содержимое закрытого шкафа неизвестно.
short~evidence~Какого цвета стол?~white~Белый стол, не синие стулья.
short~reference~К чему относится They в They are blue?~chairs|the chairs~Множественная отсылка.
short~evidence~На столе есть вода? Yes/no.~yes~Есть кувшин воды.
text~reference~Перепиши сведения о столе двумя фразами: введение и характеристика.~There is a table by the window. It is white.~Сохранить место и цвет.
text~evidence~Почему нельзя написать The room has a sofa and six chairs?~The sofa is only on the wish list. There are four chairs, but the group needs six.~Не превращать план в факт.
text~evidence~Составь два уточняющих вопроса хозяину о непроверенных вещах.~Are there any cups in the cupboard? Is there a key for it?~Вопросы запрашивают неизвестное, не пересказывают известное.`,
 `Mina and Jo are checking a shared room in their building. The room is for reading, board games and small meetings. There is a white table by the window. There are four chairs around it. They are blue, and one of them has a loose leg. The group needs six chairs for its next meeting, so the number in the room is not yet enough for that plan.
There is a cupboard beside the door, but it is locked. Mina does not have the key. She cannot see inside it. There is a picture of cups on an old notice, but that picture is not a list of the cupboard's contents. Jo writes a question about cups instead of reporting that they are present or absent.
There are two boxes of equipment against the wall. One contains a small speaker; the other contains cables. There is a jug of water on the table. There are no glasses beside it, but there are three clean glasses in an open kitchen drawer outside this room.
The group's wish list includes a sofa, two more chairs and a floor lamp. There is no sofa in the room now. Mina writes two headings in her message: “What is here” and “What we need”. This helps the next volunteer bring the right things without confusing a future plan with a checked fact.`),
 bank('A103-existence','listening','Сообщение о гостевой комнате','listening',`short~evidence~Сколько кроватей в комнате?~2~В сообщении названы две кровати, не одна.
short~evidence~Есть ли письменный стол? Yes/no.~yes~Маленький стол у окна.
short~evidence~Где чистые полотенца: bed или drawer?~drawer~В ящике, не на кровати.
short~evidence~Сколько чистых полотенец?~3~В верхнем ящике названы три чистых полотенца.
short~evidence~Есть ли зеркало внутри комнаты? Yes/no.~no~Зеркало в коридоре.
short~evidence~The wardrobe contains blankets: true/false/not stated?~not stated~Шкаф закрыт, содержимое не проверено.
short~evidence~Есть ли стаканы на подносе? Yes/no.~yes~На подносе есть два стакана; чайник — другой предмет.
short~evidence~Что сломано: chair или kettle?~kettle~Чайник не работает.
text~evidence~Напиши два проверенных факта о комнате.~There are two beds. There is a small desk by the window.~Не добавлять непроверенные одеяла.
text~reference~Введи чайник и затем опиши его состояние.~There is a kettle on the tray. It is broken.~Вторая фраза отсылает к предмету.
text~evidence~Задай вопрос о содержимом закрытого шкафа.~Are there any blankets in the wardrobe?~Вопрос, не предположение об отсутствии.
speech~sound~Передай партнёру отсутствие зеркала внутри и наличие зеркала снаружи.~There isn't a mirror in the room. There is one in the hall.~Нужны слышимое отрицание и правильная область.`,
 `Hi, this is Ben. Here is a quick check of the guest room before you arrive. There are two beds and a small desk by the window. There is one chair at the desk. The clean towels are not on the beds; there are three in the top drawer. There isn't a mirror in the room, but there is a large one in the hall. The wardrobe is closed, and I don't know whether there are any blankets inside. There is a tray on the desk with two glasses and a kettle. The kettle is broken, so please don't use it. There is another working kettle in the kitchen. Please ask Ana about the wardrobe key when she comes home.`),
 bank('A103-existence','sounds','There и опорные слова в речи','speaking',`short~sound~Начальный звук there в учебном UK IPA: ð или θ?~ð~Звонкий зубной щелевой.
short~sound~В chair /tʃeə/ начальный звук такой же, как в there /ðeə/? Yes/no.~no~/tʃ/ и /ð/ различны.
short~sound~There are FOUR plates: выделено число или цвет? Number/colour.~number~Смысловой акцент на числе.
short~sound~Можно по одному ASR-тексту подтвердить правильное /ð/? Yes/no.~no~Нужна реальная запись/прослушивание.
speech~sound~Произнеси there/they/this, затем три короткие фразы со слушателем.~There is a box. They are here. This is a bowl.~Оценка по слышимому /ð/, не написанию.
speech~sound~Партнёр должен различить положительную и отрицательную фразу о зеркале.~There is a mirror. There isn't a mirror.~Слышимое отрицание важнее театрального акцента.
speech~sound~Скажи три/тринадцать стульев с ясным ударением.~There are three chairs. There are thirteen chairs.~Слушатель записывает услышанное число.
speech~sound~Ответь вслух на Is there a sink? и Are there any hooks? положительно.~Yes, there is. Yes, there are.~Не стягивать положительную связку в конце.
text~sound~Почему сильная словарная форма каждого слова не обязательна?~Function words can have weak forms; the listener still needs the noun, number and negation.~Различать слабую форму и потерю смысла.
speech~sound~Опиши два предмета в новой комнате; партнёр уточняет один факт без текста перед собой.~There is a low table. There are two cushions. — Are there any chairs? — I don't know yet.~Настоящее взаимодействие и честная неизвестность.`),
 bank('A103-existence','production','Связное описание и передача комнаты','writing',`text~reference~Введи кровать и полку, затем опиши каждую отдельно.~There is a bed near the wall. It is narrow. There is a shelf above it. The shelf is empty.~Ясные отсылки и согласование.
text~reference~Введи три одинаковых стула и сообщи, что один повреждён.~There are three chairs. They are wooden. One chair has a broken leg.~Не приписывать повреждение всем.
text~evidence~Раздели на факт/потребность/неизвестно: есть два стакана; нужно пять; про чашки данных нет.~There are two glasses. We need five. I don't know whether there are any cups.~Три разных статуса информации.
text~reference~Напиши 80–110 слов следующему волонтёру: стол, четыре стула, две полки, вода, нет стаканов в комнате; шкаф закрыт; нужны ещё два стула. Добавь два вопроса.~There is a large table in the shared room, and there are four chairs beside it. The table is clean, but one chair is a little dirty. There are two shelves above the table. They are empty. There is some water in a jug, but there aren't any glasses in this room. The cupboard is closed, so I don't know what is inside. We need two more chairs for the meeting. Are there any spare chairs in the hall? Is there a key for the cupboard?~Связный текст, известное отдельно от неизвестного, два реальных вопроса; образец не единственный ответ.
text~form~Исправь сообщение: There have two beds. There is three towels. It are clean.~There are two beds. There are three towels. They are clean.~Форма наличия, число и отсылка.
text~evidence~Перепиши рекламу без выдумки: The room has everything. Известно лишь наличие стола и двух стульев.~There is a table and there are two chairs. Other equipment needs checking.~Не обещать everything по двум предметам.
text~reference~Опиши любимое место по памяти и явно отметь один неуверенный факт.~There is a desk near the window. I think there are two shelves, but I need to check.~Не заставлять придумывать уверенность.
text~form~Составь четыре разных вопроса о наличии, количестве и месте.~Is there a sink? Are there any towels? How many shelves are there? Where are the chairs?~Не четыре копии с заменой имени.
speech~reference~Проведи устную экскурсию по вымышленной комнате и ответь на два неожиданных вопроса.~There is a reading corner by the window. There are two armchairs. — Is there a lamp? — Yes, there is.~Партнёр действительно задаёт свои вопросы; фонетика требует аудио.
text~reference~Напиши диалог на восемь реплик: гость уточняет наличие, число и неизвестное.~A: Is there a table in the room? B: Yes, there is. A: How many chairs are there? B: There are four. A: Are there any cups? B: I don't know; the cupboard is locked. A: Is there a key here? B: No, there isn't. Please ask Jo.~Восемь связанных реплик, не одинаковые вопросы.
text~reference~Сократи своё длинное описание до четырёх предложений без потери важных ограничений.~There are four chairs and a table. There is water but no glass in the room. The cupboard is locked, so its contents are unknown. We need two more chairs.~Сохранить отсутствие и неизвестность.
speech~sound~Продиктуй короткую опись, партнёр пересказывает её, затем исправь одно расхождение.~There are five hooks, not fifteen. There is one blue towel.~Число проверяется через ответ слушателя.`),
 bank('A103-existence','review','Смешанное повторение и новый контекст','review',`short~form~There ___ a set of keys near the books. Is/are?~is~Главное слово set.
short~form~There ___ two sets of keys. Is/are?~are~Sets во множественном.
short~reference~A cupboard → ___ cupboard после введения. A/the?~the~Известный из текста предмет.
short~form~There is ___ useful notice. A/an?~a~Useful начинается с /j/.
short~evidence~There are no cups on the tray означает отсутствие чашек во всём здании? Yes/no.~no~Область — поднос.
short~evidence~Is there a heater? доказывает наличие обогревателя? Yes/no.~no~Вопрос проверяет наличие, а не доказывает его.
sentence~form~Исправь только сказуемое: There does not a bin.~There is not a bin.|There isn't a bin.~Нужна связка be.
text~reference~Сравни There is a shelf и It is a shelf по коммуникативной задаче.~The first introduces existence; the second identifies an object.~Не одинаковый смысл.
text~evidence~Назови две вещи, которые надо проверить до описания незнакомого рабочего места.~The number of sockets and the contents of the cupboard need checking.~Содержание зависит от ситуации.
text~reference~Свяжи текущую работу с наличием: Jo/check the room; two damaged chairs.~Jo is checking the room. There are two damaged chairs.~Возвращается Present Continuous.
speech~sound~Через семь дней опиши другое помещение без этой страницы.~There is a notice by the door. There are three benches in the hall.~Образец не надо заучивать как контрольный ответ; нужен новый объект.
text~form~Запиши свою ошибку в there is/are, исправление и новое предложение с другой структурой.~There is two boxes → There are two boxes. New: There is a box of cables.~Сохрани исходную фразу; не создавай фиктивную ошибку за ученика.`)
 ],tests:[
 exam('A103-existence','a',`short~form~There ___ a basket of towels by the bath. Is/are?~is~Главное слово basket.
short~form~There ___ some luggage in the entrance hall. Is/are?~is~Luggage здесь неисчисляемо: some luggage согласуется с is.
short~form~There ___ three baskets by the bath. Is/are?~are~Множественное baskets.
sentence~form~Собери вопрос: an oven / there / is.~Is there an oven?~Вопрос начинается с is, затем сохраняется there.
sentence~form~Отрицай с not any: There are some cushions.~There are not any cushions.|There aren't any cushions.~Множественное и отрицание.
sentence~form~Ответь кратко да: Are there any spare keys?~Yes, there are.~Краткий ответ повторяет there: вопрос о наличии, не о признаке предметов.
sentence~form~Ответь кратко нет: Is there a dishwasher?~No, there is not.|No, there isn't.|No, there's not.~Допустимые отрицательные формы.
short~reference~There is a green mat. ___ is wet. It/there?~it~It отсылает к уже названному единственному mat.
short~reference~There are six hooks. ___ are metal. They/there?~they~Описание известных hooks.
short~evidence~Проверено: два стула на кухне; нужно ещё три. Нынешнее число равно пяти? Yes/no.~no~Потребность не превращается в запас.
short~evidence~Шкаф закрыт, содержимое не описано. Blankets are inside: true/false/not stated?~not stated~Нет свидетельства.
short~sound~There начинается с того же учебного согласного, что this? Yes/no.~yes~There и this начинаются со звонкого зубного /ð/ в учебной модели.
text~reference~Введи новый коврик и сообщи, что он лежит у входа и мокрый.~There is a mat by the entrance. It is wet.~Ясная отсылка и все факты.
text~evidence~Составь сообщение из пяти предложений: три стола, десять стульев, нужно двенадцать стульев; про проектор неизвестно.~There are three tables in the hall. There are ten chairs. We need twelve chairs for the group. We need two more. Is there a projector in the hall?~Не придумывать проектор; расчёт и вопрос.
text~form~Поясни разницу Is there a desk? и Where is the desk?~The first checks existence. The second asks where a known desk is.~Разные запросы информации.
text~reference~Устрани неясное It is red: There is a bag next to a bowl. Красная миска.~There is a bag next to a bowl. The bowl is red.~Называется нужный предмет.
text~evidence~В описи There are no glasses in the kitchen. Можно ли заключить, что их нет в спальне?~No. The statement only covers the kitchen.~Не расширять область.
speech~sound~Устно различи один/одиннадцать полотенец; слушатель записывает число.~There is one towel. There are eleven towels.~Реальное прослушивание; согласование и число.
speech~reference~Собеседник ищет жильё. Опиши вымышленную комнату и ответь на вопрос, данных для которого у тебя нет.~There is a single bed and a desk. — Is there a washing machine? — I don't know yet.~Нужен живой вопрос и честная неизвестность.
text~form~Для нейтральной письменной описи исправь There's seven shelves; назови смысл исправления.~There are seven shelves. The verb agrees with the plural noun in this written register.~Не объявлять разговорную речь дефектом.`),
 exam('A103-existence','b',`short~form~There ___ a pile of blankets on the bed. Is/are?~is~Главное слово pile.
short~form~There ___ some bedding in the case. Is/are?~is~Bedding в этой описи неисчисляемо и согласуется с is.
short~form~There ___ four piles beside the bed. Is/are?~are~Главное слово piles.
sentence~form~Собери вопрос: a freezer / there / is.~Is there a freezer?~Порядок be + there.
sentence~form~Отрицай с not any: There are some stools.~There are not any stools.|There aren't any stools.~Not any для полного отсутствия.
sentence~form~Ответь кратко да: Is there a spare blanket?~Yes, there is.~Не Yes, there's.
sentence~form~Ответь кратко нет: Are there any clean sheets?~No, there are not.|No, there aren't.~Сохраняется there.
short~reference~There is a yellow curtain. ___ is short. It/there?~it~Описание curtain.
short~reference~There are five cupboards. ___ are locked. They/there?~they~Описание cupboards.
short~evidence~Есть три лампы; нужно ещё две. Фактический запас уже пять? Yes/no.~no~Будущее дополнение ещё не факт.
short~evidence~Подвал не проверен. There are no boxes there: true/false/not stated?~not stated~Отсутствие не доказано.
short~sound~Начальный учебный звук there глухой /θ/? Yes/no.~no~Начальный звук there — звонкий /ð/, не глухой /θ/.
text~reference~Введи новую штору, сообщи, что она синяя и находится у кровати.~There is a curtain beside the bed. It is blue.~Введение и характеристика.
text~evidence~Напиши пять предложений: две скамьи, восемь подушек, нужно десять подушек; отопление не проверено.~There are two benches in the room. There are eight cushions. We need ten cushions for the visitors. We need two more. Is there a working heater?~Факты, нехватка и вопрос отдельно.
text~form~Чем отличаются Are there any bins? и Where are the bins?~The first checks whether bins are present. The second asks for their location.~Не смешивать наличие и место.
text~reference~Устрани неясное It is empty: There is a crate under a shelf. Пустая полка.~There is a crate under a shelf. The shelf is empty.~Называется shelf.
text~evidence~There are no towels in the bathroom. Что остаётся неизвестным про кухню?~We don't know whether there are any towels in the kitchen.~Область не расширяется.
speech~sound~Продиктуй партнёру наличие двух/двенадцати коробок и проверь услышанное число.~There are two boxes. There are twelve boxes.~Слушатель и аудио обязательны.
speech~reference~Собеседник организует встречу. Опиши другое помещение, ответь на неожиданный вопрос без выдумывания данных.~There is a long table and there are six seats. — Is there a screen? — I need to check.~Живое уточнение, не один монолог.
text~form~Для аккуратного письменного отчёта исправь There's nine lockers и объясни выбор.~There are nine lockers. Lockers is plural in this written description.~Регистр назван явно.`)
 ]};

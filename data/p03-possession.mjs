import {bank,exam,examples,goal} from './unit-tools.mjs';

export default {
 id:'P03-possession',topic:'P03',title:'Принадлежность: my/mine, владельцы и смысл апострофа',prerequisites:['P03-reference'],references:['determiners-possession','nouns-articles'],
 goals:[goal('forms','Выбирать притяжательную форму перед существительным и самостоятельно','practice'),goal('apostrophe','Различать множественное, принадлежность и сокращение','practice'),goal('meaning','Точно сообщать владельца и проверять неоднозначную принадлежность','production')],
 explanation:[
 {title:'Сначала владелец, затем форма',text:'My, your, his, her, its, our, their обозначают связь с владельцем или участником, не род самого предмета. Если владелец использует she, her bag и her books имеют одну форму her: количество вещей не меняет владельца. Если владелец — говорящий, будет my независимо от русского перевода «мой стол», «моя сумка», «моё кресло». His относится к he, her — к she, their — к they; they может обозначать одного человека, чьи местоимения таковы или чей гендер здесь не указан. Не угадывай владельца по виду вещи, имени или месту на столе.'},
 {title:'My перед существительным, mine вместо всей группы',text:'This is my notebook — после my стоит существительное, возможно с прилагательными: my small blue notebook. The notebook is mine — mine заменяет всю притяжательную группу, поэтому после него не добавляется notebook. Полный набор: my/mine, your/yours, his/his, her/hers, our/ours, their/theirs. У his формы совпадают. Its обычно употребляется перед существительным: its cover; редкое самостоятельное its ограничено, например its own, и новичку не нужно копировать модель “The cover is its”. Выбирай форму по конструкции, а не только по русскому слову «мой».'},
 {title:'Притяжательная форма не требует ещё одного артикля',text:'My notebook, the notebook, a notebook — разные базовые определители. В нейтральной группе нельзя a my notebook или the her bag. Если нужно сказать «один из моих друзей», используется a friend of mine; для нескольких — some friends of mine. Это отдельная модель, а не разрешение ставить a перед my. Принадлежность не всегда юридическое владение: my colleague — мой коллега, our lesson — наше занятие, its name — его название. В упражнениях речь о языковых связях, а не о доказательстве права собственности.'},
 {title:'Апостроф: сначала образуй владельца',text:'Имя или единственное существительное получает ’s: Sam’s desk, the learner’s notebook. Обычное множественное на -s получает только апостроф после этого s: the learners’ notebooks. Неправильное множественное без конечной s получает ’s: the children’s drawings. Алгоритм: кто владелец и сколько их → запиши owner/owners → добавь нужный знак. Не выбирай положение апострофа по числу принадлежащих вещей: one teacher’s three books всё ещё один владелец. И не образуй множественное через апостроф: two notebooks, не two notebook’s.'},
 {title:'Слова, которые часто путаются',text:'Its — притяжательное без апострофа; it’s — сокращение it is или it has. Здесь тренируем прежде всего it is: It’s a box. Its label is blue. Whose спрашивает «чей/чья/чьи»: Whose bag is this? Who’s сокращает who is/who has: Who’s ready? У yours, hers, ours, theirs нет апострофа вообще. После имени ’s тоже бывает разным: Lee’s notebook — принадлежность; Lee’s ready — Lee is ready. Посмотри на продолжение и восстанови полную структуру. Нельзя считать каждый ’s признаком владельца.'},
 {title:'Общее и отдельное, части предметов и варианты стиля',text:'Jo and Kim’s desk обычно означает один совместный стол; Jo’s and Kim’s desks — их отдельные столы. У каждой притяжательной группы должно быть ясное значение. Если из контекста не видно, совместные вещи или разные, лучше назвать это словами: their shared desk / their separate desks. Для частей предметов естественно of: the corner of the desk. Но запрет “неодушевлённым никогда нельзя ’s” неверен: the app’s name тоже возможно. У имён на s встречаются Chris’s и Chris’; выбор зависит от принятого стиля. Такие варианты здесь не оцениваются как единственно правильная строка.'},
 {title:'Чего нельзя узнать из одного звука',text:'The student’s card и the students’ card часто звучат одинаково. Поэтому слушателю нужна информация о числе владельцев, а письменную позицию апострофа надо проверять отдельно. Если слышишь “their bag”, не делай автоматический вывод о нескольких владельцах: возможен singular they. Если сумка стоит на столе Jo, это ещё не доказывает, что она принадлежит Jo. Спроси Whose bag is it? Затем повтори подтверждённое: So, it’s Kim’s bag, not Jo’s. В продуктивной части нужен реальный обмен уточнениями, а до проверки открытые ответы остаются непроверенными.'}
 ],
 examples:examples(`This is my notebook. The notebook is mine.~Это мой блокнот. Блокнот мой.~My требует существительного, mine заменяет группу.
Is this your bag? Is it yours?~Это твоя сумка? Она твоя?~Your → yours при устранении повторённого существительного.
Her key is here. These keys are hers.~Её ключ здесь. Эти ключи её.~Выбор her/hers зависит от конструкции, не количества ключей.
His card is new. The card is his.~Его карточка новая. Карточка его.~His имеет одну форму в обеих позициях.
Our room is small. That room is ours.~Наша комната маленькая. Та комната наша.~Our перед room, ours самостоятельно.
Their desk is shared. The desk is theirs.~Их стол общий. Стол их.~Their/theirs, без апострофа.
The app is new. Its name is ClearNote.~Приложение новое. Его название ClearNote.~Its относится к приложению, не сокращает it is.
It’s a box. Its label is green.~Это коробка. Её ярлык зелёный.~It’s = it is; its — принадлежность/связь.
One student’s two notebooks.~Два блокнота одного студента.~Число вещей не передвигает апостроф к students’.
Two students’ shared desk.~Общий стол двух студентов.~Сначала множественное students, затем апостроф.
The children’s drawings are here.~Детские рисунки здесь.~Children уже множественное и не оканчивается на s.
Jo and Kim’s table; Jo’s and Kim’s tables.~Общий стол; отдельные столы.~Апостроф помогает различить организацию принадлежности.
Whose bag is this? Who’s ready?~Чья это сумка? Кто готов?~Whose и who’s имеют разные грамматические функции.
Lee’s notebook is new. Lee’s ready.~Блокнот Lee новый. Lee готов/готова.~Один и тот же ’s: принадлежность или сокращённое is.
A friend of mine is here.~Один из моих друзей здесь.~Не a my friend; mine используется после of в этой модели.
The corner of the desk is damaged.~Угол стола повреждён.~Of естественно обозначает часть предмета.
A learner has left their bag here.~Ученик/ученица оставил(а) сумку здесь.~Their не требует угадывать гендер одного неизвестного человека; has left здесь готовый контекст, Perfect изучается позже.
The two teachers’ notes are in one student’s folder, but they are not the student’s notes.~Заметки двух преподавателей лежат в папке одного студента, но не принадлежат студенту.~Сложный контраст: место хранения, число владельцев и принадлежность не одно и то же.`),
 banks:[
 bank('P03-possession','practice','Формы, апостроф и структура группы','practice',`short~forms~I own this bag. It is ___ bag. My/mine?~my~Перед существительным bag нужна форма my.
short~forms~We use this room. It is ___ room. Our/ours?~our~Room остаётся в группе, поэтому our.
short~forms~Mia uses she. This notebook belongs to Mia. It is ___ notebook. Her/hers?~her~Владелец she, после притяжательного идёт notebook.
short~forms~Sam uses he. These keys belong to Sam. They are ___ keys. His/he?~his~Форма определяется владельцем he, не множественным keys.
short~forms~Two learners own the cards. These are ___ cards. Their/theirs?~their~Перед cards нужна форма their.
short~forms~The app has a name. ___ name is NoteBox. Its/it’s?~its~Притяжательная форма перед name без апострофа.
short~forms~You own this pen. It is ___ pen. Your/yours?~your~Перед pen употребляется your.
short~forms~This bag belongs to me. The bag is ___. My/mine?~mine~После is самостоятельная притяжательная форма без существительного.
short~forms~These books belong to you. They are ___. Your/yours?~yours~Yours заменяет всю группу your books.
short~forms~The notebook belongs to Mia, who uses she. It is ___. Her/hers?~hers~Самостоятельная форма hers, без апострофа.
short~forms~This table belongs to us. It is ___. Our/ours?~ours~Ours стоит самостоятельно вместо our table.
short~forms~The room belongs to them. It is ___. Their/theirs?~theirs~Theirs заменяет their room и не получает апострофа.
short~forms~The card belongs to Sam, who uses he. The card is ___. His/he?~his~His одинаково перед существительным и самостоятельно.
short~apostrophe~___ ready. Здесь нужно сокращение It is. Напиши одно слово.~It's~It’s содержит is; its не является полной формой предложения.
short~apostrophe~Вопрос о владельце: ___ bag is this? Whose/who’s?~whose~Whose спрашивает, кому принадлежит предмет.
short~apostrophe~Вопрос Who is ready? Сократи первые два слова.~Who's~Who’s = who is; это не притяжательное whose.
short~apostrophe~Один студент владеет карточкой. Запиши только притяжательную форму student.~student's~Единственное student получает ’s.
short~apostrophe~Два студента владеют общей карточкой. Запиши только притяжательную форму students.~students'~Множественное уже заканчивается на s, добавляется только апостроф.
short~apostrophe~Дети владеют рисунками. Запиши только притяжательную форму children.~children's~Неправильное множественное без s получает ’s.
short~apostrophe~Запиши одним словом притяжательную форму имени Sam в выражении «блокнот Sam».~Sam's~Имя Sam получает ’s; не Sams без апострофа.
sentence~apostrophe~Исправь полностью: These keys are her’s.~These keys are hers.~У hers нет апострофа.
short~forms~Допиши: a friend of ___. Нужно «один из моих друзей»: my/me/mine?~mine~В этой конструкции после of нужна самостоятельная притяжательная форма.
text~meaning~У Jo и Kim один общий стол. Запиши группу, затем измени смысл на два отдельных стола.~Jo and Kim’s desk; Jo’s and Kim’s desks.~Общая и раздельная принадлежность явно различены; формы со shared/separate допустимы как объяснение.
text~meaning~Почему three bags не говорит, сколько у них владельцев? Приведи два разных варианта.~One learner’s three bags; three learners’ bags.~Число вещей и число владельцев независимы, примеры передают это различие.`),
 bank('P03-possession','reading','Чтение: чьи вещи на общем столе','reading',`short~meaning~Who owns the blue bag?~Kim~Сумка стоит у Jo, но текст прямо сообщает владельца Kim.
short~meaning~Who owns the red notebook?~Jo~Красный блокнот принадлежит Jo.
short~meaning~Is the large desk shared by Jo and Kim? Yes/no.~yes~Стол общий, не два отдельных стола.
short~meaning~How many teachers own the green folders together?~2|two~Green folders принадлежат двум teachers вместе.
short~meaning~How many learners own the small box?~1|one~Коробка принадлежит одному learner, несмотря на вещи других людей внутри.
short~forms~В предложении Kim says “The bag is mine” кто обозначен словом mine?~Kim~Mine относится к текущему говорящему Kim.
short~apostrophe~Выпиши притяжательную форму множественного teachers из текста.~teachers'~У множественного на s апостроф после s.
short~apostrophe~Выпиши притяжательную форму children из текста.~children's~Children уже множественное, но получает ’s.
text~meaning~Почему Jo’s desk не означает, что все вещи на нём принадлежат Jo?~Location is not ownership; Kim’s bag is on Jo’s side of the desk.~Пример из текста должен подтверждать различие места и владельца.
text~forms~Передай от третьего лица фразу Kim “The bag is mine”, используя имя или hers (Kim uses she).~The bag is Kim’s. / The bag is hers.~При смене говорящего mine нельзя механически оставить как собственное сообщение автора.
text~apostrophe~Объясни разницу the teachers’ folders и the learner’s box в этом тексте.~There are two teacher owners but one learner owner.~Число владельцев определяет положение апострофа, не размер предмета.
text~meaning~Напиши 4–5 предложений об окончательном распределении вещей, включая одну общую вещь и одно уточнение.~The blue bag is Kim’s. The red notebook is Jo’s. Jo and Kim share the large desk. The green folders belong to two teachers. Is the small box the learner’s?~Факты не выдуманы, общая принадлежность и проверка понимания различены.`,
 `Jo and Kim use one large desk together in a practice room. Kim uses she/her. Jo’s side of the desk is near the door, and Kim’s side is near the window. Today a blue bag is on Jo’s side, but it is Kim’s bag. Location is the place where something is; ownership means whose thing it is. They are not the same.
Jo says, “This red notebook is mine. The blue bag is not mine.” Kim replies, “Yes, the bag is mine. The red notebook is yours.” The large desk is Jo and Kim’s shared desk. They do not each have a separate large desk.
Two teachers share the green folders. These are the teachers’ folders. Some children make drawings for the activity; the drawings are the children’s. One learner owns the small box. The learner’s box contains the teachers’ folders for now, but the folders do not become the learner’s folders. Before moving any item on the paper plan, the learners ask whose it is. They use invented classroom objects, not real personal documents.`),
 bank('P03-possession','listening','Аудирование: владелец, говорящий и место вещи','listening',`short~meaning~Who is speaking?~Mia~В начале “This is Mia”.
short~meaning~Who owns the black bag?~Mia~Говорящий говорит my bag; это Mia.
short~meaning~Who owns the white box?~Sam~Sam’s white box назван явно.
short~meaning~Who shares the large table with Mia?~Sam~Стол общий у Mia и Sam.
short~meaning~How many teachers own the cards together?~2|two~Сказано two teachers, cards принадлежат обоим.
short~meaning~Who owns the notebooks: children or teachers?~children~Блокноты названы children’s notebooks.
short~forms~Mia говорит о black bag “It is ___”. Выбери my/mine.~mine~Самостоятельный ответ говорящего о своей сумке.
text~apostrophe~Запиши по-английски «карточки двух преподавателей» из аудио с правильным апострофом.~the two teachers’ cards~Владельцев два, значит teachers’ после окончания множественного.
text~meaning~Объясни, почему белая коробка остаётся Sam’s, хотя находится на общем столе.~The table is shared, but the box has its own stated owner, Sam.~Совместное место хранения не меняет названного владельца.
text~forms~Передай речь Mia от третьего лица: сумка Mia, коробка Sam, стол общий. Напиши 3 предложения.~The black bag is Mia’s. The white box is Sam’s. The table is theirs.~Не сохранять mine как свою принадлежность при пересказе; theirs относится к двум владельцам.`,
 `Hello, this is Mia. The black bag is my bag. It is mine, not Sam’s. The white box is Sam’s, but it is on our large table. Sam and I share this table; the table is ours. Two teachers share the cards in the white box. The cards belong to both teachers. The children’s notebooks are on the shelf, not in the box. Please do not guess the owner from the place of an item. Ask whose it is, and read the answer back. These are imaginary objects for our language practice.`),
 bank('P03-possession','production','Связное описание и уточнение владельцев','writing',`text~forms~Напиши две версии для каждой группы: my bag, your card, her notebook. Одна перед существительным, другая самостоятельно.~This is my bag. The bag is mine. This is your card. The card is yours. This is her notebook. The notebook is hers.~Все три пары сохраняют владельца при изменении структуры.
text~forms~Напиши четыре фразы с our/ours и their/theirs, используя два разных предмета.~Our desk is small. The desk is ours. Their room is large. The room is theirs.~Определители перед существительным, самостоятельные формы без повторения существительного.
text~apostrophe~Один learner владеет двумя bags; два learners владеют одним desk. Запиши обе группы и объясни апостроф.~One learner’s two bags; two learners’ shared desk.~Положение апострофа определяется владельцами, не количеством вещей.
text~apostrophe~Напиши короткий текст с It’s, its и hers, чтобы все три выполняли разные функции.~It’s a notebook. Its cover is green. The notebook is hers.~It is, притяжательное определение, самостоятельная притяжательная форма; без her’s.
text~meaning~Опиши вымышленную общую полку в 6–8 предложениях: 3 владельца, общая вещь, вещи в чужой части полки и уточнение.~Jo’s bag is on Kim’s shelf. It is still Jo’s. Kim’s notebook is beside the bag. Lee’s cards are in a box. Jo and Kim share the box. Whose blue pen is this?~Ссылки и распределение понятны, расположение не подменяет принадлежность; используются вымышленные данные.
text~forms~Переведи «один из моих друзей» и «один из её коллег» через of, затем используй в предложениях.~A friend of mine is here. A colleague of hers is ready.~После of — mine/hers, не me/her в этой притяжательной конструкции.
speech~meaning~Партнёр кладёт чужую учебную карточку к твоим вещам. Уточни владельца и откажись от неверного предположения.~Whose card is this? It isn’t mine. Is it yours?~Нужен ответ партнёра; нельзя выводить владельца только по месту.
speech~forms~Партнёр спрашивает о твоих двух предметах. Ответь полным my + noun и затем mine без повторения.~This is my notebook. Yes, that one is mine too.~Обе конструкции уместны в конкретном диалоге, владелец не меняется.
speech~meaning~Объясни партнёру, что стол общий, но сумки отдельные. Он пересказывает распределение.~The desk is ours, but this bag is mine and that bag is yours.~Смысл совместного и раздельного подтверждается пересказом слушателя.
speech~apostrophe~Продиктуй фразы об одном student и двух students. Затем покажи письменные формы и обсуди, что не различить по звуку.~One student’s card; two students’ cards.~Слушатель получает числовой контекст; апостроф оценивается по письму, не ASR.
speech~meaning~Партнёр спрашивает Who’s ready?, затем Whose bag is ready? Дай разные по смыслу ответы.~Mia is ready. Sam’s bag is ready.~Различены человек в состоянии готовности и владелец готовой сумки; нужны реальные вопросы.
text~meaning~Зафиксируй одно неверное предположение о владельце из диалога и исправление. Если разговора не было, укажи это.~I assumed the bag was Jo’s because it was on Jo’s desk. Kim confirmed it was hers.~Не выдумывать подтверждение; при отсутствии разговора описать только ожидаемую проверку.`),
 bank('P03-possession','review','Смешанное повторение определителей и апострофа','review',`short~forms~Выбери his/him: This is ___ jacket. Владелец использует he.~his~Перед jacket нужна притяжательная форма his.
short~forms~Выбери her/hers: The two blue bags are ___. Владелец использует she.~hers~Самостоятельная форма не меняется по числу bags.
short~apostrophe~Напиши притяжательную форму women в «комната женщин».~women's~Неправильное множественное без -s получает ’s.
short~apostrophe~Напиши притяжательную форму parents для обоих родителей.~parents'~Множественное parents уже заканчивается на s.
short~apostrophe~В “Jo’s here” ’s означает is или принадлежность? Введи is/possession.~is~Продолжение here указывает на Jo is here.
short~apostrophe~В “Jo’s folder” ’s означает is или принадлежность? Введи is/possession.~possession~Jo’s определяет существительное folder как принадлежность.
sentence~forms~Исправь: This is mine new phone.~This is my new phone.~Перед new phone нужна форма my, не самостоятельное mine.
sentence~apostrophe~Исправь: The bags are their’s.~The bags are theirs.~У theirs нет апострофа.
text~meaning~Переведи «столы одного преподавателя» и «общий стол двух преподавателей», не смешивая количество вещей и владельцев.~One teacher’s desks; two teachers’ shared desk.~В первом ’s, во втором s’; различие следует из числа владельцев.
text~apostrophe~Для имени Chris объясни, почему Chris’s и Chris’ нельзя без контекста стиля противопоставить как единственно правильное и ошибку.~Both styles occur for names ending in s; choose a consistent convention.~Речь о вариантах имени на s, не о произвольной замене апострофа у обычного множественного.
speech~meaning~В новой ситуации согласуй принадлежность трёх предметов с партнёром; один должен остаться неизвестным до уточнения.~This is mine. That is yours. Whose is the third one?~Не выдавать незнание за подтверждённого владельца; нужен ответный ход.
text~forms~Подготовь для отложенной проверки мини-текст с my/mine, its/it’s и двумя типами владельцев. Не засчитывай будущую попытку заранее.~It’s my box. Its label is blue. The box is mine. The teacher’s notes and the learners’ cards are inside.~Все механизмы присутствуют; при реальной проверке через неделю использовать новые данные.`)
 ],
 tests:[exam('P03-possession','a',`short~forms~This jacket belongs to me. It is ___ jacket. My/mine?~my~Jacket остаётся в группе: my перед существительным.
short~forms~The jacket belongs to me. It is ___. My/mine?~mine~Самостоятельное mine заменяет my jacket.
short~forms~The notebooks belong to us. They are ___. Our/ours?~ours~Нет существительного после пропуска, нужна самостоятельная форма.
short~forms~The boxes belong to a person who uses she. These are ___ boxes. Her/hers?~her~Форма перед boxes определяется владельцем she.
short~forms~The room belongs to them. This is ___ room. Their/theirs?~their~Перед room нужен определитель their.
short~apostrophe~The machine is new. ___ label is red. Its/it’s?~its~Притяжательная связь с machine, не it is.
short~apostrophe~___ a clean cup. Нужно It is в сокращении.~It's~В предложении нужен глагол is, поэтому апостроф.
short~apostrophe~Запиши притяжательную форму friend для одного владельца.~friend's~Единственный владелец получает ’s.
short~apostrophe~Запиши притяжательную форму friends для нескольких владельцев.~friends'~Множественное на s получает только конечный апостроф.
short~apostrophe~Запиши притяжательную форму men для нескольких мужчин.~men's~Неправильное множественное без s получает ’s.
short~apostrophe~Вопрос о владельце двух коробок: ___ boxes are these? Whose/who’s?~whose~Whose спрашивает о принадлежности, без is внутри слова.
short~forms~Допиши a colleague of ___: речь об одном из наших коллег. Our/us/ours?~ours~После of в этой притяжательной конструкции нужна самостоятельная форма.
text~meaning~Одна сумка Alex лежит на столе Lee. Напиши две фразы о владельце и местоположении, не приписывая сумку Lee.~The bag is Alex’s. It is on Lee’s desk.~Владелец и место разделены; анонимные учебные персонажи, не реальные данные.
text~meaning~Напиши 6–8 предложений: у Jo 2 книги, у Kim 1 коробка, стол общий, 3 карточки принадлежат двум учителям. Добавь вопрос о неизвестной ручке.~Jo’s two books are here. The box is Kim’s. The desk is Jo and Kim’s shared desk. The three cards are the two teachers’ cards. They are on the desk. Whose pen is this?~Все владельцы и количества точны, неизвестная принадлежность не выдумана, текст связен.
speech~meaning~Партнёр считает чужую карточку твоей. Уточни владельца, употреби mine/yours и попроси подтвердить итог.~It isn’t mine. Is it yours? So it is Kim’s card, right?~Ответ должен зависеть от реальной реплики партнёра; произношение без аудио неизвестно.
text~apostrophe~Объясни контраст “the child’s bags” и “the children’s bag”.~One child owns several bags; several children own one bag.~Различены число владельцев, число вещей и место апострофа.`),
 exam('P03-possession','b',`short~forms~This camera belongs to you. It is ___ camera. Your/yours?~your~Перед camera стоит определитель your.
short~forms~The camera belongs to you. It is ___. Your/yours?~yours~Самостоятельное yours заменяет your camera.
short~forms~The tickets belong to them. They are ___. Their/theirs?~theirs~В самостоятельной позиции используется theirs.
short~forms~The folders belong to a person who uses he. These are ___ folders. His/him?~his~Притяжательное his определяется владельцем, не количеством папок.
short~forms~We share a room. This is ___ room. Our/ours?~our~Перед существительным room нужна форма our.
short~apostrophe~The device is small. ___ screen is bright. Its/it’s?~its~Притяжательная связь, без сокращения is.
short~apostrophe~___ an old radio. Нужно It is в сокращении.~It's~Нужен глагол is, а не притяжательный определитель.
short~apostrophe~Запиши притяжательную форму teacher для одного владельца.~teacher's~Единственное teacher получает ’s.
short~apostrophe~Запиши притяжательную форму teachers для нескольких владельцев.~teachers'~После конечного s множественного добавляется апостроф.
short~apostrophe~Запиши притяжательную форму people для группы людей.~people's~Множественное people не заканчивается на s, поэтому ’s.
short~apostrophe~Вопрос Who is here? Сократи Who is одним словом.~Who's~Who’s содержит is, в отличие от whose.
short~forms~Допиши a neighbour of ___: речь об одном из её соседей. Her/she/hers?~hers~В этой модели после of нужна самостоятельная притяжательная форма hers.
text~meaning~Папка Pat находится на полке Noor. Напиши две фразы, различающие владельца и место.~The folder is Pat’s. It is on Noor’s shelf.~Принадлежность не меняется из-за места хранения.
text~meaning~Напиши 6–8 предложений: у Mia 3 ручки, у Sam 1 сумка, коробка общая, 2 блокнота принадлежат нескольким детям. Добавь вопрос о неизвестном ключе.~Mia’s three pens are here. The bag is Sam’s. The box is Mia and Sam’s shared box. The notebooks are the children’s. They are beside the bag. Whose key is this?~Точны формы, количество и общая принадлежность; неизвестного владельца не придумывать.
speech~meaning~Партнёр путает твою сумку с его/её сумкой. Объясни различие через mine/yours, уточни и проверь понимание.~This bag is mine; that one is yours. Do you mean the blue bag?~Нужна реальная смена реплик и ясные ссылки на две сумки.
text~apostrophe~Объясни контраст “the teacher’s boxes” и “the teachers’ box”.~One teacher owns several boxes; several teachers share one box.~Число владельцев определяет апостроф независимо от числа вещей.`)]
};

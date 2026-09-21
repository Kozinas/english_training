import {bank,exam,examples,goal} from './unit-tools.mjs';

export default {
 id:'P03-nouns',topic:'P03',title:'Существительные: число, исчисляемость и звучание окончаний',prerequisites:['P02-instructions'],references:['nouns-articles','sounds'],
 goals:[goal('plural','Образовывать множественное число и согласовывать is/are','practice'),goal('count','Различать предмет, материал и единицу количества','reading'),goal('sound','Произносить окончания и сохранять различие числа','production')],
 explanation:[
 {title:'Что именно называет существительное',text:'Существительное называет человека, вещь, место, вещество или понятие: learner, card, room, water, information. Определи центральное слово группы: в two small boxes это boxes. Two сообщает количество, small — признак, boxes — что именно считаем. Для нескольких коробок меняется существительное, а не прилагательное: small boxes, не smalls boxes. В этом топике учимся строить такие группы и использовать их в полных предложениях с be; система длинных определений будет расширяться постепенно.'},
 {title:'Обычное множественное и изменение написания',text:'Основная модель — добавить -s: card → cards. После s, x, sh и ch со звуком /tʃ/ обычно пишется -es: bus → buses, box → boxes, dish → dishes, watch → watches. Если перед конечной y стоит согласная буква, y меняется на ies: city → cities, baby → babies. После гласной y сохраняется: key → keys, boy → boys. Не вставляй апостроф для множественного: two cards, не two card’s. Не выбирай форму только по переводу; проверь написание основы и значение слова.'},
 {title:'Исключения и границы удобных правил',text:'У некоторых f/fe появляется -ves: leaf → leaves, knife → knives. Но roof → roofs, поэтому «каждое f превращается в ves» неверно. У o бывают разные окончания: potato → potatoes, но photo → photos, piano → pianos. Неправильные формы учатся парой: child/children, person/people, man/men, woman/women, tooth/teeth, foot/feet, mouse/mice. У sheep и deer форма не меняется. Приложение содержит разобранные пары и явные ограничения, а не заявляет полный перечень всех исключений. Для нового слова словарь — способ проверить гипотезу, не признак неуспеха.'},
 {title:'Исчисляемость — не физическое свойство предмета',text:'Countable значит, что в этом значении слово используется как название отдельных единиц: one device, two devices. Uncountable — что слово представляет материал или совокупность иначе: equipment, information, water. Оборудование физически можно пересчитать, но по-английски обычно two pieces of equipment или two devices, не two equipments. Advice — тоже неисчисляемое в обычном значении: a piece of advice или a tip. Изучай перевод вместе с C/U и примером. Варьирование some/any, much/many и более тонкие значения продолжатся в A103; сейчас нужно не создавать неверное множественное по русской модели.'},
 {title:'Единица измерения меняет то, что мы считаем',text:'В two sheets of paper считаются sheets, не paper. Поэтому окончание получает sheet: two sheets, а material paper не меняется. Аналогично two glasses of water, three pieces of information. Не путай слово и все его значения: paper как материал неисчисляемо, а a paper может означать статью или газету; coffee как напиток отличается от two coffees — двух порций при заказе. Это не случайное нарушение правила, а переход к другому способу представить предмет. В закрытом задании нужное значение указано; если его нет, нужно обсудить возможные трактовки.'},
 {title:'Число видно не только по букве s',text:'The card is here; the cards are here. У two sheep are here множественное видно по two и are, хотя sheep не меняется. У the news is useful слово news заканчивается на s, но грамматически это единственное число. The information is clear также требует is. Русский перевод «новости», «деньги» не выбирает английское are: the news is, the money is. Есть особые plural-only и собирательные существительные; здесь в первую очередь закрепляется различие обычных предметов, материалов и данных явно названных случаев.'},
 {title:'Три звучания продуктивного окончания',text:'Смотри на последний звук основы, не на последнюю букву. После /p t k f θ/ окончание обычно /s/: books /bʊks/, cups /kʌps/. После остальных звонких и гласных — /z/: cards /kɑːdz/, keys /kiːz/. После /s z ʃ ʒ tʃ dʒ/ добавляется слог /ɪz/: boxes /ˈbɒksɪz/, pages /ˈpeɪdʒɪz/. В отдельных акцентах гласный слабого слога звучит ближе к /ə/. У books нельзя добавлять лишнее «ы» между /k/ и /s/; у boxes дополнительный слог как раз нужен. В неправильных формах меняется не только окончание, поэтому сверяй целое слово. Слушатель проверяет число по реальной речи; один текст ASR не измеряет фонетику.'}
 ],
 examples:examples(`One small card; three small cards.~Одна маленькая карточка; три маленькие карточки.~Меняется card, а small остаётся без -s.
The box is empty. The boxes are empty.~Коробка пуста. Коробки пусты.~Число существительного меняет согласование be.
One city; two cities. One key; two keys.~Один город/ключ; два города/ключа.~Перед y согласная или гласная — разные схемы письма.
Three watches and two dishes.~Трое часов и две тарелки.~После шипящих звуков окончание образует отдельный слог.
Two knives, but two roofs.~Два ножа, но две крыши.~F/fe не всегда превращается в ves.
Two potatoes, but two photos.~Две картофелины, но две фотографии.~После o проверяется конкретное слово.
A child; several children.~Ребёнок; несколько детей.~Children уже множественное, childrenS не требуется.
A woman; two women /ˈwɪmɪn/.~Женщина; две женщины.~Произношение первой гласной тоже меняется.
One person; four people.~Один человек; четыре человека.~People — обычная форма для группы людей.
One sheep is here. Two sheep are here.~Овца здесь. Две овцы здесь.~Форма sheep одинакова, но согласование разное.
The equipment is ready.~Оборудование готово.~Equipment обычно неисчисляемо, глагол в единственном числе.
Two pieces of equipment are ready.~Две единицы оборудования готовы.~Теперь центральное слово pieces, поэтому are.
The news is useful.~Новость/новости полезны.~Конечная s не означает множественное число.
Paper is light. Two sheets of paper are here.~Бумага лёгкая. Здесь два листа бумаги.~Материал и исчисляемая единица материала.
Books /bʊks/, cards /kɑːdz/, boxes /ˈbɒksɪz/.~Три типа окончания множественного.~/s/, /z/, /ɪz/ выбираются по звуку основы.
The two children have three toy mice, not three real mice.~У двух детей три игрушечные мыши, не настоящие.~Сложный пример: два неправильных множественных и неизменяемое toy как определение.
Coffee is hot; two coffees are on the counter.~Кофе горячий; две порции кофе на стойке.~Исчисляемое значение появляется из контекста порций.
One analysis; two analyses.~Один анализ; два анализа.~Расширение для технического чтения: особая форма, не обычное -s.`),
 banks:[
 bank('P03-nouns','practice','Формы, значения и согласование','practice',`short~plural~One card → three ___. Введи существительное.~cards~Обычное -s без апострофа.
short~plural~One box → four ___.~boxes~После x добавляется -es.
short~plural~One dish → two ___.~dishes~После sh — -es, с дополнительным слогом.
short~plural~One watch → five ___.~watches~Watch заканчивается на /tʃ/; пишется -es.
short~plural~One city → two ___.~cities~Согласная перед y: y меняется на ies.
short~plural~One key → six ___.~keys~Перед y гласная: y сохраняется.
short~plural~One baby → two ___.~babies~Согласная b перед y требует ies.
short~plural~One photo → seven ___.~photos~У photo форма с -s, не photoes.
short~plural~One potato → eight ___.~potatoes~Для potato нормативное множественное potatoes.
short~plural~One knife → two ___.~knives~Fe меняется на ves в этой лексической паре.
short~plural~One roof → three ___.~roofs~У roof нет стандартного изменения на rooves в этой учебной модели.
short~plural~One child → three ___.~children~Неправильное множественное children без добавочного s.
short~plural~One woman → four ___.~women~Woman → women; меняется написание и произношение.
short~plural~One sheep → nine ___.~sheep~Форма не меняется; число задаётся nine.
short~plural~Вставь is/are: The two feet ___ cold.~are~Feet — множественное от foot, несмотря на отсутствие -s.
short~count~Вставь is/are: The news ___ good.~is~News грамматически единственное в обычном значении новостей.
short~count~Вставь is/are: The equipment ___ ready.~is~Equipment — неисчисляемое существительное, согласование is.
short~count~Вставь форму piece: two ___ of advice.~pieces~Считаются pieces, а advice не получает -s.
sentence~plural~Исправь целиком: These are two reds bags.~These are two red bags.~Прилагательное red не изменяется по числу.
sentence~count~Исправь целиком, сохранив piece: The two piece of information are useful.~The two pieces of information are useful.~Число выражено у pieces; information остаётся неизменным.
short~sound~Как звучит окончание cups: /s/, /z/ или /ɪz/?~s|/s/~После глухого /p/ — глухой /s/, без дополнительного слога.
short~sound~Как звучит окончание keys: /s/, /z/ или /ɪz/?~z|/z/~После гласного /iː/ — звонкий /z/.
short~sound~Как звучит окончание pages: /s/, /z/ или /ɪz/?~ɪz|/ɪz/|əz|/əz/~После /dʒ/ добавляется слабый слог; /əz/ допустим в соответствующем акценте.
text~count~Почему можно сказать two devices, но обычно нельзя two equipments?~Devices are countable units; equipment names the equipment as a whole.~Нужно различить английские способы обозначения, а не утверждать, что оборудование физически не считается.`),
 bank('P03-nouns','reading','Чтение: коробки для занятия и неверная опись','reading',`short~plural~How many children are in the story? Ответ цифрой или словом.~2|two~В тексте two children; это не два взрослых.
short~plural~How many adults are there?~3|three~Трое взрослых — three adults.
short~plural~How many people are there altogether?~5|five~Два ребёнка плюс трое взрослых — пять человек.
short~plural~What is the plural of mouse used in the text?~mice~Речь об игрушечных мышах: toy mice.
short~count~How many sheets of paper are in each box?~10|ten~Каждая коробка содержит десять листов, не десять видов бумаги.
short~count~How many sheets of paper are there in all three boxes?~30|thirty~Три коробки по десять листов дают тридцать листов.
short~plural~Which object has the same singular and plural spelling in this story?~sheep~Toy sheep не получает -s во множественном.
short~count~Выпиши неисчисляемое слово из исправления five equipments.~equipment~Обычная форма equipment не становится equipments после five.
text~plural~Исправь две формы из старой описи: childs и sheeps.~children; sheep~Обе формы исправлены; нельзя добавить s к children.
text~count~Что именно считается в thirty sheets of paper? Ответь полным предложением.~We count sheets, not paper as a material.~Центральное исчисляемое слово sheets; paper обозначает материал.
text~count~Почему фраза “Nothing is missing” не подтверждает правильность старой английской описи?~All the objects are present, but some English noun forms are wrong.~Количество предметов и грамматическая форма — разные проверки.
text~plural~Напиши краткий отчёт из 3–4 предложений: люди, бумага, игрушечные животные. Не меняй количества.~There are five people. There are thirty sheets of paper. There are four toy mice and two toy sheep.~Три категории и все количества сохранены; There are можно использовать как готовую модель.`,
 `A workshop is a practical group activity. This workshop has two children and three adults. They are five people, but only the children use the toy animals. The adults help with the paper and the equipment.
There are three boxes. Each box contains ten sheets of paper, two pencils and one small brush. A sheet is one separate piece of paper. On another table there are four toy mice and two toy sheep. These are models, not real animals. There are also five simple devices. A device is a piece of equipment with a particular job.
An old inventory says “two childs, two sheeps and five equipments”. An inventory is a written list of things. The quantities are correct, but those English forms need correction. Jo writes “two children, two toy sheep and five pieces of equipment”. Jo also checks the paper: thirty sheets in total. Nothing is missing. The task is to describe the same objects accurately, not to add new objects or invent a different count.`),
 bank('P03-nouns','listening','Аудирование: сообщение о наборе вещей','listening',`short~plural~How many bags are ready?~2|two~Two bags — количество сумок, не коробок.
short~plural~How many boxes are inside each bag?~3|three~В каждой сумке three boxes.
short~plural~How many boxes are there altogether?~6|six~Две сумки по три коробки — шесть коробок.
short~plural~How many brushes are on the desk?~4|four~Four brushes; окончание добавляет слог.
short~plural~How many toy deer are there?~2|two~Deer остаётся без -s, число даёт two.
short~count~How many sheets of paper are ready?~12|twelve~Названы twelve sheets; не twelve papers в значении материала.
short~count~Is the information clear or unclear? Введи одно слово.~clear~The information is clear: неисчисляемое, с is.
text~plural~Составь одно предложение об игрушечных оленях, используя are.~The two toy deer are on the desk.~Форма deer и согласование are должны сочетаться.
text~count~Почему в записи twelve sheets of paper -s стоит только у sheets?~We count the sheets; paper names the material.~Различены единица и вещество, объяснение можно дать по-русски.
text~sound~Выпиши пару из аудио с разным типом окончания: bags и brushes. Укажи /z/ и /ɪz/.~Bags ends in /z/; brushes ends in /ɪz/.~Это осознанный разбор окончания; произношение ученика по тексту не оценивается.`,
 `The practice set is ready. There are two bags, and each bag contains three boxes. There are six boxes in total. Four brushes are on the desk, next to two toy deer. Deer has the same form for one animal and for more than one animal. We also have twelve sheets of paper. Please count the sheets, not the paper as a material. The information on the list is clear. Do not change the numbers. Read the names of the objects back to me, including the plural endings.`),
 bank('P03-nouns','production','Описание набора и работа со слушателем','writing',`text~plural~Напиши четыре предложения о вымышленных вещах: одна коробка, две коробки, один ребёнок, трое детей. Используй is/are.~The box is here. The boxes are empty. The child is ready. The children are ready.~В каждом случае согласованы форма существительного и be; свои признаки допустимы.
text~count~Перепиши two advices и three informations через piece, затем употреби в двух полных предложениях.~The two pieces of advice are useful. The three pieces of information are clear.~Множественное у pieces, а не advice/information; смысл количества сохранён.
text~count~Напиши два предложения, где paper означает материал и отдельную статью; поясни различие.~Paper is useful for notes. This paper is about language learning.~Для статьи есть конкретная исчисляемая единица, для материала — неисчисляемое значение.
text~plural~Составь опись для учебной сумки из 5–6 предложений: обычное -s, -es, неправильное множественное и одна неизменяемая форма.~There are three cards and two boxes. There are two toy mice. There are three toy sheep. The cards are blue. The boxes are small.~Проверь четыре схемы форм, согласование и связность; свои количества и набор обязательны.
text~count~Напиши короткое объяснение для коллеги: почему equipment и devices не взаимозаменяются после two.~Two devices counts separate machines. Equipment is normally uncountable, so use two pieces of equipment.~Смысл и грамматическая форма разделены; русский разбор допустим с английскими примерами.
speech~sound~Произнеси caps, bags, watches в случайном порядке; слушатель отмечает, где есть дополнительный слог.~Caps /kæps/, bags /bæɡz/, watches /ˈwɒtʃɪz/.~Реальное прослушивание; /s/ и /z/ без вставного гласного, /ɪz/ отдельным слогом.
speech~sound~Передай партнёру пары key/keys и box/boxes без показа текста. Он записывает one или more than one.~Key /kiː/ — keys /kiːz/; box /bɒks/ — boxes /ˈbɒksɪz/.~Проверяется, можно ли восстановить число по слышимой форме, а не по видимой букве.
speech~plural~Продиктуй набор: two children, four women, three toy mice. Партнёр повторяет.~Two children, four women, three toy mice.~Сохранены неправильные формы и количества; акцент сам по себе не ошибка.
speech~count~Объясни партнёру, что нужны два листа бумаги, не две газеты; он задаёт уточняющий вопрос.~Two sheets of paper, please, not two newspapers.~Различены материал и готовый предмет; нужен ответный ход собеседника.
speech~sound~Партнёр слышит book вместо books. Уточни количество и повтори всю фразу, не добавляя лишнего гласного.~Three books, not one book.~Конечное /s/ слышно в связной фразе; транскрипт не заменяет оценку слушателя.`),
 bank('P03-nouns','review','Смешанное повторение числа и единиц','review',`short~plural~Напиши множественное от toy.~toys~Перед y гласная o, поэтому toys без ies.
short~plural~Напиши множественное от leaf.~leaves~Для leaf запоминается форма leaves.
short~plural~Напиши множественное от tooth.~teeth~Неправильная форма меняет гласный.
short~plural~Напиши множественное от person для обычной группы людей.~people~Persons встречается в специальных контекстах, здесь обычное people.
short~count~Вставь is/are: The money ___ on the table.~is~Money в этом значении неисчисляемо, несмотря на русский перевод «деньги».
short~count~Вставь is/are: The three glasses of water ___ here.~are~Грамматический центр — glasses, а не water.
short~sound~У rooms окончание /s/, /z/ или /ɪz/?~z|/z/~После звонкого /m/ окончание звонкое /z/.
text~plural~Исправь полный текст: “Two childs are here. The smalls boxes is ready.”~Two children are here. The small boxes are ready.~Три механизма: неправильная форма, неизменяемое прилагательное, множественное are.
text~count~Объясни, почему two coffees может быть допустимо в кафе, но не доказывает правильность two equipments.~Coffees can mean servings. Equipment does not normally form that plural for separate devices.~Значение и контекст не переносятся автоматически на все неисчисляемые слова.
text~plural~По приложению сравни series и analysis во множественном. Объясни, почему одной последней буквы мало.~Series stays series; analysis becomes analyses.~Расширение, а не обязательное заучивание всей advanced-лексики; описать отличие.
speech~sound~Прочитай новую опись из трёх групп с /s/, /z/, /ɪz/. Слушатель запишет окончания и попросит исправить неясное.~Four cups, two pens, six buses.~Новые примеры и реальная обратная связь; не выдавать ASR-совпадение за фонетическую оценку.
text~count~Подготовь новую опись для отложенной проверки: две единицы материала и два обычных предмета. Не отмечай проверку уже пройденной.~Three sheets of paper, two glasses of water, four bags and six pens.~Это материал будущей попытки; факт освоения требует её реального выполнения.`)
 ],
 tests:[exam('P03-nouns','a',`short~plural~One folder → six ___.~folders~Обычная исчисляемая единица образует множественное через -s.
short~plural~One bus → three ___.~buses~После s добавляется -es.
short~plural~One family → two ___.~families~Согласная l перед y: y заменяется на ies.
short~plural~One boy → five ___.~boys~Перед y гласная o, поэтому y сохраняется.
short~plural~One man → four ___.~men~Неправильная форма man → men.
short~plural~One deer → seven ___.~deer~Число меняется, словоформа deer остаётся прежней.
short~count~Выбери is/are: The furniture ___ new.~is~Furniture в обычном значении неисчисляемо.
short~count~Вставь sheet в нужной форме: four ___ of paper.~sheets~Four относится к sheets; paper не меняется.
short~sound~Определи звук окончания maps: /s/, /z/ или /ɪz/.~s|/s/~После глухого /p/ — /s/ без дополнительного гласного.
short~sound~Определи звук окончания names: /s/, /z/ или /ɪz/.~z|/z/~После /m/ — звонкий /z/.
text~count~Напиши отчёт 4–6 предложений: 2 bags, 3 boxes, 4 pieces of equipment, 8 sheets of paper. Добавь признак вещей.~The two bags are small. The three boxes are blue. The four pieces of equipment are ready. The eight sheets of paper are on the desk.~Все количества и формы сохранены; equipment/paper не получают -s, be согласуется с центром группы.
text~plural~Исправь “The two womans are here. The three reds box is open” и объясни исправления.~The two women are here. The three red boxes are open.~Women, red без -s, boxes и are; объяснение механизма, не только переписанный текст.
speech~sound~Продиктуй слушателю groups, phones, classes как множественные формы, затем попроси повторить.~Groups /ɡruːps/, phones /fəʊnz/, classes /ˈklɑːsɪz/.~Нужна слышимость /s/, /z/, /ɪz/ и реальный ответ слушателя.
text~count~Объясни, почему two pieces of advice грамматично, а two advices в обычной речи — нет.~We count pieces; advice is normally uncountable.~Понимание исчисляемой единицы и значения; допустим русский ответ с примерами.`),
 exam('P03-nouns','b',`short~plural~One notebook → seven ___.~notebooks~Обычная модель -s у исчисляемого предмета.
short~plural~One brush → three ___.~brushes~После sh добавляется -es.
short~plural~One story → four ___.~stories~Согласная перед y: stories, не storys.
short~plural~One day → six ___.~days~Гласная a перед y, поэтому days.
short~plural~One foot → two ___.~feet~Foot → feet, без дополнительного s.
short~plural~One toy sheep → five toy ___.~sheep~У sheep одна форма для обоих чисел; toy здесь не меняется.
short~count~Выбери is/are: The luggage ___ heavy.~is~Luggage обозначает багаж как неисчисляемое понятие.
short~count~Вставь glass в нужной форме: three ___ of water.~glasses~Три ёмкости: glasses; вещество water без окончания.
short~sound~Определи звук окончания desks: /s/, /z/ или /ɪz/.~s|/s/~После /k/ — /s/ без отдельного слога.
short~sound~Определи звук окончания chairs: /s/, /z/ или /ɪz/.~z|/z/~После звонкого конца основы — /z/; UK/US r не делает его глухим.
text~count~Напиши отчёт 4–6 предложений: 3 folders, 2 brushes, 5 pieces of information, 6 glasses of water. Добавь понятный признак.~The three folders are green. The two brushes are clean. The five pieces of information are useful. The six glasses of water are on the table.~Количество, формы и грамматические центры сохранены; information/water без множественного -s.
text~plural~Исправь “The three mouses is small. The two blues bags are here” и объясни каждый тип ошибки.~The three mice are small. The two blue bags are here.~Mice как обычная форма, are для множественного, blue неизменно; речь здесь об обычных мышах, не специальном терминологическом варианте.
speech~sound~Продиктуй слушателю tickets, games, dishes во множественном числе и проверь его повторение.~Tickets /ˈtɪkɪts/, games /ɡeɪmz/, dishes /ˈdɪʃɪz/.~Три типа окончаний должны быть слышны; нужна реальная устная попытка.
text~count~Объясни, почему five pieces of furniture правильно передаёт число предметов, хотя furniture неисчисляемо.~Pieces supplies the countable unit; furniture stays uncountable.~Нужно объяснить устройство группы, а не утверждать, что мебель невозможно считать.`)]
};

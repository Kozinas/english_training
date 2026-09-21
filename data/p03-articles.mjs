import {bank,exam,examples,goal} from './unit-tools.mjs';

export default {
 id:'P03-articles',topic:'P03',title:'Артикли a/an, the и отсутствие артикля: смысл выбора',prerequisites:['P03-nouns'],references:['nouns-articles'],
 goals:[goal('sound','Выбирать a/an по следующему звуку, включая определения','practice'),goal('reference','Различать неопределённое, известное и общее','reading'),goal('structure','Строить целую группу существительного без лишних определителей','production')],
 explanation:[
 {title:'Артикль помогает слушателю найти предмет',text:'Русское «Мне нужен ключ» не говорит само по себе, идёт ли речь о любом подходящем ключе или о том самом ключе. Английское a key вводит один предмет без требования однозначно его опознать. The key отсылает к предмету, который слушатель может определить по общему знанию, ситуации или уточнению. Поэтому артикль — не украшение и не перевод слова «один» в каждом случае. Он участвует в организации информации. Вопрос при выборе: может ли мой собеседник понять, какой именно предмет я имею в виду?'},
 {title:'A и an: звук всей группы, не первая буква существительного',text:'Обе формы обозначают один и тот же неопределённый артикль. A ставится перед согласным звуком, an — перед гласным. An apple, но a green apple: после артикля теперь начинается green с /ɡ/. A useful app начинается с /j/ в useful; an unusual app — с /ʌ/. An hour начинается с гласного, потому что h не произносится. Для аббревиатуры сначала выбери реальное чтение: an ID card, если I читается /aɪ/, a USB cable, если U начинается /juː/. Не выводи ответ из буквы без произношения. В слабой форме a обычно /ə/, an — /ən/; в подчёркнутой речи возможны сильные формы.'},
 {title:'Почему первого и второго упоминания недостаточно',text:'Модель “I have a box. The box is empty” полезна: сначала вводим предмет, затем возвращаемся к нему. Но это не универсальный счётчик. В общей комнате можно сразу сказать Close the door, если дверь однозначна для собеседника. The only red card также выделяет единственный предмет уже при первом упоминании. И наоборот, после рассказа о первой сумке a bag может ввести другую сумку. Решает идентифицируемость, не номер предложения. В закрытых упражнениях здесь указаны обстоятельства; если два смысла возможны, задание остаётся открытым и требует объяснить выбор.'},
 {title:'The не меняется по числу',text:'The desk, the desks, the water in this bottle: the возможно с единственным, множественным и неисчисляемым существительным. Оно выделяет известный объект, набор или материал. Поэтому неверно запоминать “the только для одной вещи” или “перед water артикля никогда нет”. Уточнение после существительного может помочь: the cards on my desk. Но само наличие определения не всегда автоматически требует the: a book about music может обозначать любую одну книгу такого рода. Сначала проверь смысл, затем форму.'},
 {title:'Отсутствие артикля тоже имеет смысл',text:'В обобщении о классе предметов обычно используется множественное без артикля: Computers are useful. В обобщении о веществе — неисчисляемое без артикля: Water is necessary. В наших заданиях знак Ø или ответ «—» означает, что ничего писать не нужно; он не произносится. Сравни Books are expensive (книги вообще) и The books are expensive (известные книги). Есть другие способы обобщать, например a/the с единственным в определённых контекстах; они не отменяют эту базовую модель и будут разобраны позднее. Личные имена и многие названия мест обычно без артикля, но географические исключения нельзя свести к одному правилу.'},
 {title:'Существительное, прилагательное и место для определителя',text:'Обычному исчисляемому существительному в единственном числе нужен определитель: a bag, the bag, my bag, this bag. В группе a small blue bag артикль относится к bag, хотя рядом стоит small. Прилагательные вставляются между определителем и существительным; не a bag blue в нейтральном описании. My и this уже занимают базовое место определителя, поэтому не a my bag и не the this bag. Если нужна мысль «один из моих друзей», модель другая: a friend of mine; она появится в подтеме принадлежности. Названия профессий обычно исчисляемые: She is a designer, не She is designer.'},
 {title:'Как выполнять осмысленную проверку',text:'Сначала отметь тип существительного: одно исчисляемое, несколько предметов или неисчисляемое значение. Затем реши, нужно ли выделить известное слушателю. Если выбрано неопределённое единственное, проверь начальный звук следующего слова. Если условия не определяют смысл, не пытайся угадать авторский ответ: напиши два варианта и объясни разницу. Автопроверка допустима только в явно ограниченном контексте. В связном тексте сохраняй цепочку объектов: не превращай знакомую коробку в другую без причины и не требуй от читателя знать то, чего ему ещё не сообщили.'}
 ],
 examples:examples(`I need a pen. Any blue pen is fine.~Мне нужна ручка; любая синяя подойдёт.~A не выделяет одну заранее известную ручку.
I need the pen beside your cup.~Нужна ручка рядом с твоей чашкой.~В данной ситуации собеседник видит одну подходящую ручку.
This is a bag. The bag is empty.~Это сумка. Сумка пуста.~Второе предложение возвращается к введённому объекту.
Please close the only window in this room.~Закрой единственное окно в этой комнате.~The уже при первом упоминании: окно однозначно.
An apple; a red apple.~Яблоко; красное яблоко.~После артикля разные начальные звуки: /æ/ и /r/.
A user; an active user.~Пользователь; активный пользователь.~User начинается /j/, active — /æ/.
An hour; a useful hour.~Час; полезно проведённый час.~Немая h и согласный /j/ в useful дают разный выбор.
An ID card; a USB cable.~Идентификационная карточка; USB-кабель.~I /aɪ/ и U /juː/ определяют форму при чтении по буквам.
The card is here. The cards are here.~Карточка здесь. Карточки здесь.~The не меняет форму, число отражено у card и be.
Water is necessary. The water in this glass is cold.~Вода необходима. Вода в этом стакане холодная.~Общее вещество и конкретная порция.
Books are useful. The books on this shelf are new.~Книги полезны. Книги на этой полке новые.~Обобщение отличается от определённого набора.
This is my new desk.~Это мой новый стол.~My уже определитель, a/the не добавляются.
She is an engineer.~Она инженер.~Название профессии — единственное исчисляемое.
It is a very old screen.~Это очень старый экран.~Следующее после артикля слово very начинается с согласного.
I have a book about music.~У меня есть книга о музыке.~Определение about music само по себе не требует the.
The information in your note is clear.~Информация в твоей записке понятна.~The допустимо с конкретным неисчисляемым information.
I need a key; you need the key to the blue cabinet.~Мне нужен какой-нибудь ключ; тебе — ключ от синего шкафа.~Сложное сопоставление разных задач выбора объекта.
I found a coin / I found the coin.~Я нашёл монету / ту самую монету.~Без контекста обе фразы возможны; проверять надо объяснение смысла.`),
 banks:[
 bank('P03-articles','practice','Выбор формы и смысла с заданным контекстом','practice',`short~sound~Выбери a/an: ___ empty box.~an~Empty начинается с /e/, поэтому an.
short~sound~Выбери a/an: ___ blue umbrella.~a~После артикля blue с /b/, не umbrella.
short~sound~Выбери a/an: ___ umbrella без определения.~an~Umbrella начинается с гласного /ʌ/.
short~sound~Выбери a/an: ___ useful book.~a~Useful начинается /j/, хотя написано u.
short~sound~Выбери a/an: ___ unusual name.~an~Unusual начинается с гласного /ʌ/.
short~sound~Выбери a/an: ___ hour, h не произносится.~an~Следующий звук гласный, немая буква h не учитывается.
short~sound~Выбери a/an: ___ university /ˌjuːnɪˈvɜːsəti/.~a~Начальный /j/ — согласный звук.
short~sound~Выбери a/an: ___ old university.~an~Теперь первым звучит old с гласного.
short~sound~Выбери a/an: ___ ID card, I читается /aɪ/.~an~Имя буквы I начинается с гласного.
short~sound~Выбери a/an: ___ USB cable, U читается /juː/.~a~Имя U начинается с согласного /j/.
short~reference~Нужна любая чистая чашка, не определённая. I need ___ cup. Выбери a/the.~a~Контекст не требует идентифицировать одну известную чашку.
short~reference~На столе ровно одна синяя чашка, оба её видят. Take ___ blue cup. Выбери a/the.~the~Предмет однозначен для обоих по ситуации.
short~reference~This is a new bag. ___ bag is small. Речь о той же сумке; a/the?~the~Вернулись к одному уже введённому объекту.
short~reference~В комнате одна дверь, адресат её видит. Close ___ door. Выбери a/the.~the~Общая ситуация позволяет the сразу, не нужно искусственное первое a.
short~reference~Книги вообще, не конкретные: ___ books are useful. Ответ the или —.~—|-|Ø|nothing~Для указанного обобщения множественное без артикля.
short~reference~Бумага как материал вообще: ___ paper is useful. Ответ the или —.~—|-|Ø|nothing~Обобщение о неисчисляемом материале без артикля.
short~reference~Речь только о воде в единственной чашке на столе: ___ water in the cup is cold. Ответ the или —.~the~Выделена конкретная вода; неисчисляемость не запрещает the.
short~structure~Нужно сохранить принадлежность: This is ___ my notebook. Выбери a/the/—.~—|-|Ø|nothing~My уже определитель; a и the перед ним не ставятся.
short~structure~Нужно сохранить указание: ___ this old desk is mine. Выбери a/the/—.~—|-|Ø|nothing~This занимает место определителя; два вместе не нужны.
short~structure~Она сообщает профессию, не определённую роль в группе: She is ___ designer. Выбери a/the/—.~a~Designer — один представитель профессии, исчисляемое единственное.
sentence~structure~Собери нейтральную группу: laptop / a / small / new.~a small new laptop~Определитель → прилагательные → существительное; это группа, не полное предложение.
sentence~structure~Исправь целиком, сохранив my: This is a my red bag.~This is my red bag.~My уже задаёт принадлежность, a удаляется.
text~reference~Для I see ___ dog без контекста объясни два возможных выбора, не угадывая один.~A dog introduces a dog; the dog refers to an identifiable dog.~Обе интерпретации раскрыты; автоматический единственный ключ здесь был бы неверным.
text~structure~Объясни, почему an old chair, но a very old chair.~The article depends on the next sound: old begins with a vowel, very with /v/.~Смысл одного предмета одинаков, меняется ближайший звук.`),
 bank('P03-articles','reading','Чтение: две записки об одной комнате','reading',`short~reference~В первом описании вводят предмет a lamp. Какой артикль стоит перед lamp при следующем упоминании того же предмета?~the~Вторая группа the lamp отсылает к уже введённой лампе.
short~sound~Выпиши артикль перед old umbrella.~an~Первый звук old — гласный, поэтому an.
short~sound~Выпиши артикль перед useful map.~a~Useful начинается с /j/, поэтому a.
short~reference~How many windows are in the room?~1|one~Текст прямо сообщает one window.
short~reference~В “Close the window” окно упоминается впервые в записке для Kim. Какой артикль используется?~the~Оно однозначно в общем физическом контексте, даже без предшествующей a-фразы.
short~structure~Выпиши определитель перед blue notebook, обозначающий владельца Jo.~my~Jo пишет my blue notebook; дополнительный артикль не нужен.
short~reference~В финальном Books are useful речь о конкретных книгах или книгах вообще? Введи general/specific.~general~Это обобщение, поэтому перед books нет the.
short~reference~В The books on the shelf are new речь об известном наборе? Введи yes/no.~yes~Набор выделен местом и общим контекстом.
text~reference~Почему первая записка понятна человеку вне комнаты, а вторая опирается на общую ситуацию?~The first note introduces objects; the second assumes Kim can see the room and identify them.~Нужно объяснить знания адресата, не просто сосчитать a и the.
text~sound~Сравни an old umbrella и a useful map: объясни не буквами, а звуками.~Old starts with a vowel; useful starts with /j/.~В обоих прилагательные важнее первой буквы существительного.
text~structure~Перепиши фразу с my blue notebook так, чтобы она оставалась притяжательной; не добавляй артикль.~My blue notebook is on the chair.~Полная грамматичная фраза, my перед определением и существительным.
text~reference~Напиши 3–4 предложения для человека, который не видел комнату: введи два предмета и вернись к одному.~There is a lamp and an old umbrella. The lamp is on the desk. The umbrella is near the door.~Читатель может проследить объекты; допустимы свои точные фразы по тексту.`,
 `Two notes describe the same practice room. The first note is for a new visitor who cannot see the room yet.
“There is a lamp on a desk. The lamp is small and the desk is green. There is also an old umbrella near the door and a useful map on the wall. The umbrella is dry. A map is a picture that shows places. The map in this room shows our imaginary town.” Imaginary means it is not a real town.
The second note is from Jo to Kim, who is already in the room. The room has one window, and both people know it. Jo writes: “Please close the window. My blue notebook is on the chair. Please leave the notebook there. The books on the shelf are new.” No earlier sentence in this second note introduces a window with a/an; the shared room already makes it clear.
The final message says: “Books are useful, but the books on this shelf are for this practice session.” The first books means books in general. The second group identifies a particular set. Do not replace every blank space with the just because the sentence is later in the text.`),
 bank('P03-articles','listening','Аудирование: какой именно предмет нужен','listening',`short~reference~What item does Noor need first: a pen or a bag?~a pen|pen~Сначала нужна ручка; сумка упоминается отдельно.
short~reference~Подойдёт любая работающая ручка? Введи yes/no.~yes~Any pen that works is fine — заранее определённая ручка не требуется.
short~reference~Позже речь идёт о той же ручке? Введи yes/no.~yes~The pen затем возвращается к уже выбранной ручке.
short~reference~Какого цвета единственная папка, которую надо взять? Ответ по-английски.~red~The only red folder однозначно выделена.
short~sound~Какой артикль прозвучал перед empty bag: a или an?~an~Empty начинается с гласного звука.
short~sound~Какой артикль перед useful note: a или an?~a~Useful начинается с /j/.
short~structure~В конце сказано my bag или a my bag? Введи правильную группу.~my bag~Притяжательное my не требует a перед ним.
text~reference~Объясни разницу между первой просьбой о ручке и просьбой о красной папке.~Any working pen is acceptable, but the red folder is uniquely identified.~Различены критерий подходящего предмета и идентификация определённого.
text~reference~Составь краткое подтверждение: ручка, нужная папка, пустая сумка.~A working pen, the red folder and an empty bag. Is that right?~Артикли отражают условия аудио; полный вариант предложениями также подходит.
text~structure~Напиши одно предложение о сумке Noor, сохранив принадлежность без лишнего артикля.~Noor’s bag is near the chair.~Группа с названием владельца без дополнительного a/the; место и владелец взяты из аудио.`,
 `Hello, this is Noor. I need a pen for the practice card. Any pen that works is fine. Please put the pen beside the card after you choose it. Next, take the only red folder on the shelf. I mean the red folder, not any folder. There is an empty bag on the floor and a useful note inside it. Please read the note. My bag is near the chair; leave it there. The empty bag is for the practice materials. Can you repeat which objects are specific and which ones can be any suitable example?`),
 bank('P03-articles','production','Письмо с цепочкой предметов и разговор','writing',`text~reference~Введи вымышленный предмет через a/an, затем напиши два предложения о том же предмете с the.~There is a clock on a table. The clock is old. The clock is still useful.~Один объект сохраняется в цепочке; свои предмет и признаки обязательны.
text~reference~Опиши ситуацию, где первое упоминание естественно требует the; явно назови общее знание.~We are in a room with only one door. Please close the door.~Однозначность обоснована ситуацией, не правилом «всегда второй раз».
text~structure~Напиши четыре полных предложения с my, this, a/an и the по одному. Не ставь два определителя подряд.~My desk is small. This box is empty. It is an old box. The box is clean.~Каждая группа устроена правильно; ссылки между объектами понятны.
text~reference~Составь два контраста: вещи вообще / конкретные вещи; вещество вообще / конкретное вещество.~Chairs are useful. The chairs in this room are new. Water is necessary. The water in this bottle is cold.~Различены обобщение и выделенный набор/материал; принимаются другие примеры.
text~sound~Дай по два собственных примера a/an, где первая буква вводит в заблуждение. Добавь IPA первого звука.~A uniform /j/; a one-page note /w/; an honest reply /ɒ/; an hour /aʊ/.~Четыре верных сочетания с объяснением звука; в honest возможны акцентные варианты гласного.
text~structure~Напиши связное описание рабочего места в 6–8 предложениях. Введи 3 предмета, вернись к двум, обозначь одну принадлежность.~There is a desk near a window. There is a lamp on the desk. A box is beside the lamp. The box is empty. The lamp is small. My notebook is on the desk.~Референция ясна, единственные исчисляемые оформлены; не требуется копировать образец или описывать реальный дом.
speech~sound~Произнеси an orange, a green orange, an old phone, a useful phone; слушатель выделяет начало после артикля.~An /ən/ before a vowel; a /ə/ before /ɡ/ and /j/.~Нужны слышимые группы без паузы между каждым словом; нормативный акцент допустим.
speech~reference~Попроси любую ручку. Затем попроси именно ту ручку, которую партнёр выбрал. Он должен понять изменение.~Could I have a pen? Thank you. Please put the pen here.~Выбор a → the соответствует изменению общего знания.
speech~reference~На бумажном макете три коробки, только одна красная. Попроси её без предварительного “a red box”.~Please give me the red box.~The обосновано уникальным признаком в общей ситуации; партнёр реально выбирает.
speech~structure~Представь свою вымышленную профессию и два предмета с разными a/an. Партнёр уточняет один предмет.~I am an engineer. This is a useful tool and an old map.~Артикли учитывают профессию и звук; нужен ответ на уточняющую реплику.
text~reference~Для “I am looking for ___ notebook” придумай два коротких контекста, дающих a и the.~Any notebook will do: a notebook. We both know the lost notebook: the notebook.~Важны разные коммуникативные условия, а не механическая замена слова.
text~structure~Отредактируй свой длинный ответ: выпиши исходную и исправленную группу, объясни изменение или честно отметь, что ошибки не найдены.~Исходно: a my box. Исправлено: my box. My уже определитель.~Не выдумывать ошибку ради отчёта; нужно реальное наблюдение над собственным текстом.`),
 bank('P03-articles','review','Смешанный выбор на новых объектах','review',`short~sound~Выбери a/an: ___ honest answer, h не произносится.~an~Следующий звук гласный, а h немая.
short~sound~Выбери a/an: ___ one-page note, one начинается /w/.~a~Начальный /w/ — согласный звук.
short~sound~Выбери a/an: ___ very unusual idea.~a~После артикля very с /v/, а не unusual.
short~reference~Указываешь на единственный календарь в общей комнате: Please check ___ calendar. A/the?~the~Общая ситуация определяет один календарь.
short~reference~Любой подходящий словарь: I need ___ dictionary. A/the?~a~Не требуется единственный заранее известный словарь.
short~reference~Обобщение о software, не конкретный продукт: ___ software can be useful. The/—?~—|-|Ø|nothing~Здесь неисчисляемое обобщение без артикля.
short~structure~Сохрани our: ___ our new room is ready. A/the/—?~—|-|Ø|nothing~Our уже выполняет роль определителя.
sentence~structure~Исправь целиком: This is an useful app.~This is a useful app.~Useful начинается /j/, поэтому a.
text~reference~В чём смысловая разница “a book about testing” и “the book about testing”?~The first can be any one book on testing; the second is identifiable to the listener.~Наличие about testing не выбирает артикль автоматически.
text~structure~Напиши два предложения с books и book, чтобы одно было обобщением, другое вводило один новый предмет.~Books are useful. Here is a new book.~Множественное обобщение без артикля; новое единственное с a/an.
speech~reference~Партнёр ошибочно передаёт любую папку, хотя нужна определённая. Уточни словами и проверь выбор.~I mean the folder beside the clock, not any folder.~Признак реально отличает нужную папку в вымышленной ситуации.
text~reference~Подготовь для повторения через неделю мини-историю с новым предметом, возвращением к нему и обобщением. Не записывай попытку как уже пройденную.~There is a lamp in a box. The lamp is new. Lamps are useful.~Связь a/the/Ø применена осмысленно; будущая проверка ещё должна состояться.`)
 ],
 tests:[exam('P03-articles','a',`short~sound~Выбери a/an: ___ interesting question.~an~Interesting начинается с гласного /ɪ/.
short~sound~Выбери a/an: ___ user account, user начинается /j/.~a~Согласный звук /j/ определяет a.
short~sound~Выбери a/an: ___ empty envelope.~an~Первое после артикля слово empty начинается с гласного.
short~sound~Выбери a/an: ___ new ID card.~a~После артикля new с /n/, независимо от I дальше.
short~reference~Нужен любой чистый лист: Give me ___ sheet of paper. A/the?~a~Любая подходящая единица, не один известный лист.
short~reference~Оба знают единственный принтер в комнате: Check ___ printer. A/the?~the~Общий контекст делает принтер однозначным.
short~reference~There is a small clock here. ___ clock is blue. Это те же часы; a/the?~the~Второе предложение возвращается к введённому объекту.
short~reference~Кошки вообще: ___ cats are animals. The/—?~—|-|Ø|nothing~Множественное обобщение по заданному условию — без артикля.
short~reference~Информация вообще: ___ information can be useful. The/—?~—|-|Ø|nothing~Неисчисляемое обобщение без артикля.
short~structure~Сохрани your: This is ___ your new chair. A/the/—?~—|-|Ø|nothing~Your не сочетается здесь с дополнительным a/the.
short~structure~Он называет свою профессию в целом: He is ___ teacher. A/the/—?~a~Teacher — исчисляемое единственное в названии профессии.
sentence~structure~Собери группу без лишних слов: an / screen / old / green.~an old green screen~Определитель перед описанием, существительное в конце группы.
text~reference~Без контекста “Bring ___ bag” не имеет единственного ответа. Объясни a и the двумя короткими ситуациями.~Any bag for carrying books: a bag. We both know the blue bag: the bag.~Различие обосновано знаниями собеседника; нельзя свести его к первому/второму упоминанию.
text~structure~Напиши 6–8 предложений о вымышленной комнате: 3 новых предмета, возврат к двум, одна принадлежность и одно обобщение.~There is a table, a lamp and an old chair. The table is small. The lamp is green. The chair is comfortable. My bag is under the table. Chairs are useful.~Все функции выполнены, выбор артиклей осмыслен, другие формулировки принимаются.
speech~sound~Произнеси a uniform, an empty folder и a very old map; слушатель объясняет, какие звуки следуют за артиклем.~A uniform /j/; an empty folder /e/; a very old map /v/.~Нужна реальная аудио-проверка групп; не оценивать по написанию транскрипта.
text~reference~Объясни, почему “the equipment in this box” возможно, хотя equipment неисчисляемо.~The identifies specific equipment; uncountability blocks a/an in this meaning, not the.~Разделены исчисляемость и определённость; допустим русский разбор.`),
 exam('P03-articles','b',`short~sound~Выбери a/an: ___ excellent example.~an~Excellent начинается с гласного /e/.
short~sound~Выбери a/an: ___ European city, European начинается /j/.~a~Следующий звук согласный /j/, а не буква E как гласная.
short~sound~Выбери a/an: ___ open cupboard.~an~Open начинается с гласного.
short~sound~Выбери a/an: ___ small orange.~a~Первое слово small начинается с /s/, не orange.
short~reference~Нужна любая свободная полка: I need ___ shelf. A/the?~a~Указана подходящая, не заранее определённая полка.
short~reference~В общей комнате ровно одна доска: Clean ___ board. A/the?~the~Доска однозначна обоим уже при первом упоминании.
short~reference~Here is an old radio. ___ radio is quiet. Это то же радио; a/the?~the~Возврат к известному объекту требует определённой ссылки.
short~reference~Собаки вообще: ___ dogs are animals. The/—?~—|-|Ø|nothing~Множественное обобщение без the.
short~reference~Музыка вообще: ___ music can be relaxing. The/—?~—|-|Ø|nothing~Не выделен конкретный музыкальный материал.
short~structure~Сохрани their: These are ___ their bags. A/the/—?~—|-|Ø|nothing~Their уже определитель; артикль не добавляется.
short~structure~Она называет профессию, не известную роль: She is ___ artist. A/an/the/—?~an~Artist — единственное исчисляемое с начальным гласным.
sentence~structure~Собери группу: a / box / new / small.~a small new box~Нейтральный порядок: a + размер + возраст + существительное.
text~reference~Для “Open ___ folder” придумай контексты с a и the, объяснив знания слушателя.~Any empty practice folder: a folder. The one we are discussing: the folder.~Контексты различаются по идентифицируемости, не просто переводом.
text~structure~Напиши 6–8 предложений о вымышленном столе: 3 новых предмета, возврат к двум, одна принадлежность и одно обобщение.~There is a cup, a notebook and an old phone. The cup is empty. The notebook is blue. The phone is small. My pencil is beside the cup. Notebooks are useful.~Сохраняется связная цепочка объектов, корректны определители и обобщение.
speech~sound~Произнеси an honest reply, a useful idea и an old camera; слушатель назовёт начальные звуки после артикля.~An honest reply /ɒ/ (UK); a useful idea /j/; an old camera /əʊ/ (UK).~Оценивается реальная речь; другие нормативные гласные акцента принимаются.
text~reference~Объясни контраст “water in general” и “the water in the blue bottle”.~Water in general has no article; the second phrase identifies particular water.~Неисчисляемость сохраняется, меняется определённость.`)]
};

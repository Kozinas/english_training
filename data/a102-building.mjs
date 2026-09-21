import {bank,exam,examples,goal} from './unit-tools.mjs';
import {continuousSources} from './present-continuous.mjs';

export default {
 id:'A102-building',topic:'A102',title:'Строим Present Continuous: be, -ing, отрицания и вопросы',prerequisites:['A101-frequency'],references:['present-continuous','be-questions','sounds'],sources:continuousSources,
 goals:[goal('structure','Согласовывать be и строить утверждение, отрицание и вопрос','practice'),goal('spelling','Образовывать -ing с учётом букв, ударения и вариантов','spelling'),goal('scene','Понимать и описывать текущую сцену, различая участников','reading'),goal('sound','Произносить be, отрицание и окончание -ing в понятной речи','sounds')],
 explanation:[
  {title:'У процесса две обязательные части',text:'Сравни I write notes — я пишу заметки как обычную деятельность — и I am writing a note — сейчас показан процесс написания. Во второй модели am связывает сообщение с настоящим и лицом, writing называет разворачивающееся действие. Отдельное I writing не является полным нейтральным предложением. I am write смешивает две модели; I am writes добавляет ещё и ненужное третье лицо. Present Continuous, также называемый Present Progressive, строится как subject + am/is/are + ing. На этом шаге наблюдаем происходящее; временные проекты и выбор между двумя формами подробно разбираются дальше.'},
  {title:'Число и лицо живут в be, а не в -ing',text:'I am reading; you/we/they are reading; he/she/it is reading. Reading одинаково во всех рядах: нет readings после she. Как в P04, найди главное слово подлежащего: The visitor near the boxes is waiting; The visitors near the box are waiting. Если два человека соединены and, обычно нужно are. Для человека с местоимением they сохраняется they are, хотя человек один. You are подходит и одному, и нескольким адресатам. Вопрос выбора be решается по подлежащему, не по слову, которое случайно стоит ближе к глаголу.'},
  {title:'Написание: начни с базовой формы',text:'Бери work, не works и не прошедшее worked: work + ing = working. В study/try/play конечная y сохраняется: studying, trying, playing. Правило studies из A101 сюда не переносится. Конечная немая e обычно отпадает: make → making, write → writing, use → using. Но see → seeing и agree → agreeing сохраняют ee. В dye → dyeing e остаётся, чтобы слово отличалось от die → dying. Конечное ie превращается в y: lie → lying, tie → tying. Одинаковое произношение dying/dyeing не делает одинаковыми значения и написание; для письменной проверки нужен именно текст.'},
  {title:'Когда удваивается последняя согласная',text:'В run, sit, stop, swim короткая ударная гласная стоит перед одной конечной согласной: running, sitting, stopping, swimming. В многосложном begin ударение на последнем слоге, поэтому beginning. В open и visit ударение раньше: opening, visiting, без удвоения. Если в конце две согласные, как help, новая копия p не нужна: helping. После двух гласных букв в wait пишем waiting. Конечные w/x/y не удваиваются: snowing, fixing, playing. Это правило орфографии, а не требование произнести «двойную n» в running. Сначала найди структуру основы и ударение, затем пиши.'},
  {title:'Варианты и особые случаи не прячем',text:'После конечной c перед ing добавляется k: panic → panicking, picnic → picnicking. У travel и cancel есть нормативные UK/US различия: travelling/traveling, cancelling/canceling. Если задание не ограничивает вариант, оба принимаются. В приложении собраны 40 показательных основ, а не все слова языка; новое или редкое слово проверяй по словарю. Не делай из одного короткого правила универсальную машину, которая безошибочно создаёт любые формы. Например, наличие e ещё не гарантирует её удаление, а конечная согласная ещё не гарантирует удвоение.'},
  {title:'Отрицание: not после be, а не новый do',text:'I am not writing; she is not writing; they are not writing. У be уже есть место для not, поэтому do/does не нужны: не She doesn’t writing. Сокращения I’m not, she isn’t / she’s not, they aren’t / they’re not естественны. В свободном ответе полные формы также допустимы. Сохраняй обстоятельства: Jo isn’t working in this room отрицает текущую работу в этой комнате, а не любую работу Jo вообще. Краткий ответ на Is Jo working? — No, Jo isn’t или No, Jo is not; если используешь местоимение, оно должно быть известно из контекста.'},
  {title:'Вопрос: переместить be и сохранить -ing',text:'You are reading → Are you reading? The helper is carrying a box → Is the helper carrying a box? Вопрос к детали: What are you reading? / Which box is the helper carrying? Вопросительное слово или вся группа стоят в начале, дальше be, подлежащее, ing. Who is carrying that box? спрашивает действующее лицо. Who is Jo helping? сохраняет известное подлежащее Jo и спрашивает объект помощи. Положительный краткий ответ о себе — Yes, I am, не Yes, I’m; отрицательный No, I’m not допустим. Не отвечай Yes, I do на Are you reading: помощник должен соответствовать модели вопроса.'},
  {title:'Звук окончания и слышимость смысла',text:'В учебной нейтральной модели окончание -ing произносится /ɪŋ/. Для /ŋ/ задняя часть языка поднимается к мягкому нёбу, воздух выходит через нос; не нужно обязательно добавлять отдельный /g/ после него. Сравни sin /sɪn/ и sing /sɪŋ/: в /n/ работает передняя часть языка у альвеол. В sing/bring звук /ŋ/ есть и в основе: singing /ˈsɪŋɪŋ/, bringing /ˈbrɪŋɪŋ/. В разговорной речи бывают другие нормативные реализации; здесь выбран ясный учебный образец, а не оценка акцента. Слушатель должен также услышать be и not: потерянное отрицание важнее различий регионального произношения.'},
  {title:'Сначала сцена, затем связный рассказ',text:'В наблюдаемой сцене укажи, кто где находится и что делает: A visitor is standing by the door. Two helpers are carrying a table. Свяжи действия and/but/while, но не приписывай наблюдателю знания о невидимых намерениях. Стул рядом с человеком не доказывает, что человек садится. В текстовой задаче опорой служит словесная карточка, не воображаемая фотография, которой нет. В разговоре партнёры получают разные части сцены, задают вопросы и сверяют результат. Текстовый ответ проверяет форму и смысл, но не доказывает произношение: для него требуется реальное аудио.'}
 ],
 examples:examples(`I am writing a note.~Я пишу заметку сейчас.~Am + writing составляют форму процесса.
You are reading the label.~Ты читаешь этикетку.~Are подходит одному адресату и группе.
She is carrying a box.~Она несёт коробку.~Is согласуется с she; carrying не получает -s.
We are making a sign.~Мы делаем табличку.~Making без конечной e основы make.
The helper near the boxes is waiting.~Помощник у коробок ждёт.~Главное helper в единственном числе.
The helpers near the box are waiting.~Помощники у коробки ждут.~Главное helpers во множественном числе.
Sam uses they. They are listening.~Сэм использует they. Сэм слушает.~Singular they сохраняет are.
Jo is studying, not copying the answer.~Джо занимается, а не переписывает ответ.~Studying сохраняет y; действия противопоставлены.
The child is tying a ribbon.~Ребёнок завязывает ленту.~Tie → tying, ie превращается в y.
The scarf is lying on the chair.~Шарф лежит на стуле.~Lie → lying; лежать тоже можно представить как текущую ситуацию.
The artist is dyeing the fabric.~Художник красит ткань.~Dyeing сохраняет e и отличается от dying «умирает».
The guests are sitting outside.~Гости сидят снаружи.~Sit → sitting; удвоение на письме.
The event is beginning.~Мероприятие начинается.~У begin ударение на последнем слоге, поэтому beginning.
The guide is opening the gate.~Гид открывает ворота.~Open → opening без удвоения n.
We are travelling by train.~Мы едем поездом.~UK travelling; US traveling также допустимо.
I’m not using that screen.~Я не использую тот экран сейчас.~Not после am; форма using сохраняется.
She isn’t printing the list. She’s not printing it.~Она не печатает список.~Оба сокращения передают то же отрицание.
They aren’t waiting inside. They’re waiting outside.~Они ждут не внутри, а снаружи.~Место важно для смысла отрицания.
Are you reading? — Yes, I am.~Ты читаешь? — Да.~Are выходит вперёд; ответчик использует I am.
Is it raining? — No, it isn’t.~Идёт дождь? — Нет.~В погодной конструкции it не обозначает конкретный предмет.
What are you writing?~Что ты пишешь?~What перед are, затем you и writing.
Which label is the visitor reading?~Какую этикетку читает посетитель?~Вопросительная группа which label остаётся целой.
Who is helping Mina? Who is Mina helping?~Кто помогает Мине? Кому помогает Мина?~Роль неизвестного человека меняется вместе с порядком слов.
The helper by the stairs is carrying a small box while the two visitors beside the door are opening a larger one.~Помощник у лестницы несёт маленькую коробку, пока два посетителя у двери открывают более крупную.~Сложный пример: два длинных подлежащих и разные формы be.`),
 banks:[
 bank('A102-building','practice','Полная форма, отрицание и вопрос','practice',`short~structure~I ___ checking the label. Am/is/are?~am~I требует am; checking уже имеет ing.
short~structure~The people near the shelf ___ waiting. Am/is/are?~are~Главное people во множественном числе.
short~structure~The name on those cards ___ disappearing from the screen. Is/are?~is~Главное name в единственном числе, не cards.
short~structure~You ___ holding the map. Am/is/are? Обращение к одному человеку.~are~You сохраняет are независимо от числа адресатов.
short~structure~Sam использует they. They ___ reading now. Is/are?~are~Singular they согласуется с are.
sentence~structure~Добавь только пропущенное be: She carrying a box.~She is carrying a box.~В нейтральном полном предложении нужен is.
sentence~structure~Исправь форму действия: We are make a sign.~We are making a sign.~После are нужна ing-форма making.
sentence~structure~Замени I на he: I am reading the message.~He is reading the message.~Меняется am → is; reading не меняется.
sentence~structure~Замени she на they: She is waiting by the door.~They are waiting by the door.~Is становится are; место сохраняется.
sentence~structure~Отрицай без сокращений: Jo is using the tablet.~Jo is not using the tablet.~Not ставится после is; do/does не требуется.
sentence~structure~Отрицай без сокращений: We are carrying the chairs.~We are not carrying the chairs.~Are not сохраняет множественное подлежащее.
sentence~structure~Сократи I am: I am not printing that page.~I'm not printing that page.~Стандартная модель I’m not, не I amn’t.
sentence~structure~Сократи отрицание любым нормативным способом: She is not reading the notice.~She isn't reading the notice.|She's not reading the notice.~Isn’t и she’s not допустимы.
sentence~structure~Исправь модель: They don’t waiting outside.~They are not waiting outside.|They aren't waiting outside.|They're not waiting outside.~С ing требуется be, отрицание сохраняется.
sentence~structure~Сделай общий вопрос: The driver is opening the window.~Is the driver opening the window?~Is перед подлежащим, opening остаётся после него.
sentence~structure~Сделай общий вопрос: The guests are looking at the map.~Are the guests looking at the map?~Are перед guests; at не теряется.
sentence~structure~Собери вопрос: what / you / are / writing / ?~What are you writing?~What + are + you + writing.
sentence~structure~Собери вопрос: which bag / carrying / is / the visitor / ?~Which bag is the visitor carrying?~Which bag — целая группа; the visitor — подлежащее.
sentence~structure~Исправь лишний do: Do you are listening?~Are you listening?~У be уже есть вопросительная модель, do лишний.
sentence~structure~Are you waiting? Ответь положительно кратко только о себе.~Yes, I am.~Yes, I’m в конце такого ответа не используется.
sentence~structure~Are you both reading? Ответь отрицательно кратко за свою группу.~No, we are not.|No, we aren't.|No, we're not.~You both меняется на we по роли; допустимы три отрицательные формы.
sentence~structure~Is the printer working? Ответь положительно кратко с it.~Yes, it is.~Краткий ответ повторяет be, а не does.
text~scene~По карточке один гость ждёт снаружи, два помощника несут стулья внутри. Опиши сцену двумя связанными фразами.~A visitor is waiting outside. Two helpers are carrying chairs inside.~Число, действия и места сохранены; естественные альтернативы принимаются.
text~scene~Дано “Jo isn’t working in this room”. Можно ли записать “Jo isn’t working anywhere”?~Нет: отрицание ограничено этой комнатой, другие места не описаны.~Отрицательное место не превращается в отсутствие любой работы.`),
 bank('A102-building','spelling','Написание -ing: механизм и исключения','practice',`short~spelling~Добавь -ing к study.~studying~Y сохраняется; правило studies здесь не действует.
short~spelling~Добавь -ing к try.~trying~Y сохраняется перед ing.
short~spelling~Добавь -ing к play.~playing~Y остаётся и после гласной.
short~spelling~Добавь -ing к carry.~carrying~Не carring и не carriing; база carry сохраняется.
short~spelling~Добавь -ing к make.~making~Конечная немая e отпадает.
short~spelling~Добавь -ing к write.~writing~E отпадает, t не удваивается.
short~spelling~Добавь -ing к use.~using~E отпадает; основа глагола имеет /z/.
short~spelling~Добавь -ing к see.~seeing~Ee сохраняется, не seing.
short~spelling~Добавь -ing к agree.~agreeing~Конечное ee не удаляется.
short~spelling~Добавь -ing к dye «красить».~dyeing~E сохраняется, отличая слово от dying.
short~spelling~Добавь -ing к lie «лежать».~lying~Ie превращается в y перед ing.
short~spelling~Добавь -ing к tie «завязывать».~tying~Ie → y, не tieing.
short~spelling~Добавь -ing к run.~running~Короткая ударная гласная перед одной n требует удвоения.
short~spelling~Добавь -ing к stop.~stopping~Конечная p удваивается по структуре основы.
short~spelling~Добавь -ing к swim.~swimming~Удваивается конечная m, не гласная.
short~spelling~Добавь -ing к begin.~beginning~Последний слог ударный, n удваивается.
short~spelling~Добавь -ing к open.~opening~Последний слог безударный, n не удваивается.
short~spelling~Добавь -ing к visit.~visiting~Ударение на первом слоге, t не удваивается.
short~spelling~Добавь -ing к wait.~waiting~В основе две гласные буквы; не waitting.
short~spelling~Добавь -ing к fix.~fixing~Конечная x не удваивается.
short~spelling~Добавь -ing к travel; UK или US допустимы.~travelling|traveling~Нормативные региональные варианты различаются числом l.
short~spelling~Добавь -ing к cancel; UK или US допустимы.~cancelling|canceling~Оба варианта нормативны, если не задан конкретный стандарт.
short~spelling~Добавь -ing к panic.~panicking~После c появляется k перед ing.
text~spelling~Объясни ошибки в runing, openning и studing. Исправь и сравни механизмы.~Running: удвоение после короткой ударной гласной; opening: без удвоения в безударном конце; studying: сохраняется y.~Три разных механизма, не механическое правило «везде двойная согласная».`),
 bank('A102-building','reading','Книжная ярмарка: кто что делает','reading',`short~scene~Где происходит сцена: a book fair или a railway station?~a book fair|book fair~Организуется книжная ярмарка в community hall.
short~scene~Кто пишет таблички?~Mina~Mina is writing signs у входа.
short~scene~Сколько посетителей ждут снаружи? Число.~2|two~В тексте two visitors are waiting outside.
short~scene~Что несут Leo и Noor: chairs или books?~chairs~Они несут стулья из маленькой комнаты.
short~scene~Mina пользуется принтером прямо сейчас: yes/no?~no~Она пишет от руки; printer is not working.
short~scene~Кто проверяет список книг?~Sam~Sam is checking the book list.
short~scene~Noor читает сообщение на телефоне: yes/no?~no~Noor не смотрит на телефон, а несёт стул.
short~scene~Все коробки открыты: yes/no/not stated?~no~One box is still closed явно отрицает всеобщность.
sentence~structure~Из “Two visitors are waiting outside” сделай общий вопрос.~Are two visitors waiting outside?~Are перед подлежащим, waiting сохраняется.
text~scene~Объясни, почему “The printer isn’t working” не доказывает, что Mina вообще не делает таблички.~Mina is writing the signs by hand. Отказ одного инструмента не равен отсутствию работы.~Нужна опора на действие Mina, а не догадка о ремонте.
text~structure~Составь по тексту два вопроса с who: один об исполнителе, другой о человеке, которому помогают.~Who is helping Sam? Who is Leo helping?~Первый ответ Leo, второй Sam; при смене роли меняется порядок.
text~scene~Напиши 6–8 предложений для человека, который не видит зал: действия Mina, Sam, Leo/Noor, положение посетителей и закрытая коробка.~Mina is writing signs near the entrance. The printer is not working. Sam is checking the book list. Leo and Noor are carrying chairs. Leo is also helping Sam. Two visitors are waiting outside. One box is still closed.~Роли и наблюдения сохранены; рассказ о текущей сцене, не расписание на каждый день.`,
`It is Saturday morning at a community hall. A small book fair is beginning, and the organisers are preparing the entrance. Mina is writing signs at a table near the door. She is not using the printer because it is not working. She is writing each sign by hand and using a thick blue pen. A visitor is holding the first sign while Mina checks the spelling.
Leo and Noor are carrying chairs from a small room into the main hall. Noor is not looking at a phone; both hands are busy with a chair. Two visitors are waiting outside. They are talking quietly and looking through the glass door. They are not carrying any boxes.
Sam is checking the book list beside a pile of boxes. Leo is helping Sam between trips with the chairs. They are matching the names on the list to the labels. One box is still closed. Nobody in this description opens it, so its contents are not visible to the reader.
The scene shows several actions at the same time. The organisers are not doing the same task: one person is writing, another is checking, and two people are moving chairs. The text gives a present scene, not a list of permanent jobs. It does not tell us the final number of visitors.`),
 bank('A102-building','listening','Звонок из мастерской','listening',`short~scene~Кто звонит: Ana или Ben?~Ana~Ana спрашивает, почему Ben не отвечает на сообщения.
short~scene~Что Ben делает в начале разговора: cooking или fixing a lamp?~fixing a lamp~Ben чинит лампу, не готовит еду.
short~scene~Кто держит инструкцию?~Kim~Kim is holding the instructions.
short~scene~Лампа уже работает: yes/no?~no~Ben прямо говорит, что лампа пока не работает.
short~scene~Kim читает инструкцию молча: yes/no?~no~Kim is reading them aloud — читает вслух.
short~scene~Ben пользуется телефоном для фотографии сейчас: yes/no?~yes~Он делает фотографию детали, пока Ana ждёт.
short~scene~Кто ждёт у ворот?~Ana~Ana находится у ворот, а не в мастерской.
short~scene~Идёт дождь: yes/no/not stated?~yes~Ana просит не задерживаться, потому что идёт дождь.
sentence~structure~Запиши вопрос Ana к действию Ben: what / are / you / doing / ?~What are you doing?~What + are + you + doing, без do.
text~scene~Почему звук разговора не означает, что Ben разговаривает с посетителями?~Говорит Kim: Kim is reading the instructions aloud. Звук объясняется чтением инструкции.~Причина взята из сообщения, не придумана по одному шуму.
text~structure~Составь два вопроса для уточнения: кто помогает Ben и работает ли лампа.~Who is helping Ben? Is the lamp working?~В первом неизвестен помощник, во втором проверяется текущий процесс/работоспособность.
speech~scene~Разыграйте Ana и Ben: Ana ошибочно думает, что Ben готовит. Ben исправляет, называет помощь Kim и спрашивает, где Ana ждёт.~I’m not cooking. I’m fixing a lamp. Kim is helping me. Where are you waiting?~Нужен обмен по сцене и слышимое отрицание; чтение готового монолога не заменяет диалог.`,
`Ana: Hi, Ben. What are you doing? Are you cooking? Ben: No, I’m not. I’m fixing a lamp in the workshop. Kim is helping me. Ana: Is the lamp working now? Ben: No, it isn’t. Kim is holding the instructions and reading them aloud. That is the voice you can hear. Ana: Are you using your phone for the instructions? Ben: No, I’m taking a photo of one part. Please wait a moment. Where are you waiting? Ana: At the gate. I’m holding a large bag, and it’s raining. Ben: Right. I’m putting the lamp on the table. Kim is staying with it. I’m coming to the gate now. Ana: Thanks. I’m not leaving the bag outside in the rain.`),
 bank('A102-building','sounds','-ing, be и отрицание на слух','speaking',`short~sound~В учебной записи writing /ˈraɪtɪŋ/ какой последний согласный: n, ŋ или g?~ŋ~Конечный звук — заднеязычный носовой /ŋ/.
short~sound~Sing /sɪŋ/ и sin /sɪn/ заканчиваются одинаковым согласным: yes/no?~no~Положение языка различается: задняя часть для /ŋ/, передняя для /n/.
short~sound~Нужно ли по этой UK-модели обязательно добавлять отдельный g после /ɪŋ/ в working: yes/no?~no~Целевая запись заканчивается /ŋ/, без обязательного отдельного /g/.
short~sound~Dyeing и dying могут звучать одинаково /ˈdaɪɪŋ/: yes/no?~yes~Звучание не различает значения и написание этой пары.
text~sound~Объясни артикуляцию /n/ и /ŋ/ так, чтобы партнёр мог проверить положение языка.~Для /n/ кончик языка у альвеол, для /ŋ/ поднимается задняя часть к мягкому нёбу; в обоих случаях воздух проходит через нос.~Нужна инструкция и реальная проба, не утверждение, что текст доказывает звук.
speech~sound~Произнеси sin/sing, thin/thing и win/wing в коротких фразах. Слушатель записывает услышанное без подсказки.~That is a sin. They sing quietly. This is a thin book. This thing is small. We want to win. The bird has a wing.~Слушатель различает /n/ и /ŋ/; результат требует реального аудио, не только транскрипта.
speech~sound~Скажи три сообщения с working, singing и bringing. Слушатель отмечает, сохранились ли /ŋ/ основы и окончания.~I’m working here. Jo is singing quietly. Kim is bringing a chair.~Слова произнесены в фразах; не добавляется обязательный /g/ по написанию ng.
speech~sound~Передай две пары I’m writing / I’m not writing и They’re waiting / They’re not waiting в перемешанном порядке. Слушатель указывает отрицательные сообщения.~I’m not writing. They’re waiting. I’m writing. They’re not waiting.~Проверяется слышимое not и форма be; порядок меняется в новой попытке.
speech~sound~Партнёр задаёт три Are you ...? с новыми действиями. Ответь кратко с Yes, I am или No, I’m not и добавь одну деталь.~Are you reading? — Yes, I am. I’m reading the label.~Три реальных обмена, утвердительное am не обрывается до I’m.
text~sound~ASR записал “I working”. Доказывает ли это, что ты пропустил am в речи? Что нужно проверить?~Нет: распознаватель мог потерять слабую форму. Нужно прослушать запись и отдельно сравнить грамматику транскрипта.~Не выдавать ошибку распознавания за подтверждённую ошибку произношения.`),
 bank('A102-building','production','Связное описание и обмен сведениями','writing',`text~structure~По карточке опиши 6 действий сейчас: я читаю, Jo пишет, гости ждут, Sam несёт коробку, мы проверяем список, приложение загружает файл.~I am reading. Jo is writing. The guests are waiting. Sam is carrying a box. We are checking the list. The app is loading a file.~Шесть разных подлежащих/действий, формы be и ing; факт о программе учебный.
text~scene~Напиши 6–8 предложений о вымышленной кухне: один человек готовит, другой моет чашки, двое накрывают стол; дверь открыта, но никто сейчас не открывает её.~Mina is cooking dinner. Jo is washing cups. Two guests are laying the table. The door is open. Nobody is opening it now. The guests are talking quietly.~Различены состояние открытой двери и действие открытия; дополнительные детали обозначены как вымышленные.
text~structure~Сделай из трёх своих утверждений отрицания и общие вопросы. Сохрани исходники.~Jo is reading. Jo is not reading. Is Jo reading? The guests are waiting. The guests are not waiting. Are the guests waiting? I am writing. I am not writing. Am I writing?~Три полных набора; смысловые обстоятельства исходных предложений не теряются.
text~spelling~Исправь записку и объясни три разных правила: “She is writting. He is runing. They are studing.”~She is writing. He is running. They are studying.~Writing: убрать e без удвоения; running: удвоить n; studying: сохранить y.
text~scene~Напиши 80–110 слов о текущей сцене у стойки информации. Обязательны минимум два отрицания, разные лица и один wh-вопрос; детали вымышленные.~I am standing near the information desk at a small festival. A volunteer is checking a list, and two visitors are looking at a map. They are not talking to the volunteer yet. Jo is carrying a box of leaflets from the next room. I am not taking any photos because my hands are full. A child is drawing a picture at a nearby table. The child’s parent is reading a sign. What are the other volunteers doing? Two of them are putting chairs by the entrance, and another is opening the windows.~Связная сцена, 80–110 слов, два отрицания и вопрос; качество проверяется по смыслу и рубрике.
text~structure~Перескажи свой предыдущий текст от лица другого наблюдателя. Не меняй факты, отметь смену двух местоимений и форм be.~The narrator is standing near the information desk at a small festival. A volunteer is checking a list, and two visitors are looking at a map. They are not talking to the volunteer yet. Jo is carrying a box of leaflets from the next room. The narrator is not taking any photos because the narrator’s hands are full. A child is drawing a picture at a nearby table. The child’s parent is reading a sign. What are the other volunteers doing? Two are putting chairs by the entrance, and another is opening the windows.~Нужен полный пересказ; I am → the narrator is, my hands → the narrator’s hands. Остальные участники и действия сохранены.
text~scene~Сравни “The door is open” и “Jo is opening the door”. Можно ли одно считать точным пересказом другого?~Нет. Первое сообщает состояние двери, второе — действие Jo. Открытая дверь не доказывает, что Jo открывает её сейчас.~Проверяется смысл всей конструкции, не одно созвучное слово.
speech~scene~Информационный разрыв: A знает, что Mina пишет и Sam проверяет список; B знает, что Leo несёт стул и Jo ждёт снаружи. Выясните действия всех четырёх, не показывая карточки.~What is Mina doing? Where is Jo waiting? Is Leo carrying a chair?~Партнёры действительно получают недостающие данные, затем оба пересказывают все четыре факта.
speech~structure~Партнёр неверно описывает две текущие задачи. Исправь отрицанием и назови верное действие по новой вымышленной сцене.~Jo isn’t cooking. Jo is washing the cups. Mina isn’t reading. Mina is writing.~Две пары, слышимое отрицание и актуальные данные сцены, не автоматическая выдумка противоположного.
speech~sound~Опиши пять разных действий сейчас. Слушатель пересказывает без текста; отдельно обсудите окончания и пропущенные be/not.~The visitors are waiting. Jo is bringing a chair. Mina is writing. Sam is checking a box. I’m not leaving yet.~Пять осмысленных фактов, разбор по реально услышанному; акцент не считается ошибкой сам по себе.
text~structure~Составь короткую переписку из восьми реплик: вопрос о действии, ответ, уточнение места и исправление неверной догадки.~A: What are you doing? B: I’m carrying a box. A: Where are you taking it? B: To the main hall. A: Are you using the stairs? B: No, I’m not. A: Are you waiting for the lift? B: Yes, I am.~Все восемь реплик связаны; допустим другой сюжет и US elevator.
text~spelling~Сохрани исходное описание и исправленное. Для каждой правки укажи: be, -ing, порядок вопроса или смысл. Не придумывай ошибки, которых не было.~Исходник: She writting. Исправление: She is writing. Две причины: обязательное is и написание writing.~Требуется собственная история правок; образец показывает способ разбора.`),
 bank('A102-building','review','Повторение формы, смысла и прошлого материала','review',`short~structure~The children ___ drawing. Am/is/are?~are~Children — множественное, поэтому are.
short~structure~The label on these boxes ___ falling off. Is/are?~is~Главное label единственное, не boxes.
short~spelling~Форма -ing от sit?~sitting~Конечная t удваивается по структуре основы.
short~spelling~Форма -ing от listen?~listening~Без удвоения n; ударение не на последнем слоге.
short~spelling~Форма -ing от help?~helping~Две конечные согласные, новая p не требуется.
short~spelling~Форма -ing от snow?~snowing~Конечная w не удваивается.
sentence~structure~Убери лишнее третье лицо: She is readings the note.~She is reading the note.~Reading не получает -s после she.
sentence~structure~Сделай отрицание без сокращений: I am taking the bus.~I am not taking the bus.~Not после am; taking остаётся.
sentence~structure~Сделай общий вопрос: The helpers are moving the table.~Are the helpers moving the table?~Are перед подлежащим, ing не исчезает.
sentence~structure~Is Jo waiting? Ответь отрицательно кратко, используя Jo, без сокращений.~No, Jo is not.~Ответ соответствует is; местоимение не надо угадывать.
text~scene~Дано “The helper is standing by a closed box”. Какие два вывода нельзя сделать без новых сведений?~Нельзя утверждать, что помощник открывает коробку или знает её содержимое.~От положения человека не выводятся действие и знания.
text~spelling~Сравни формы stops и stopping, studies и studying. Почему правила различаются?~В stops нет удвоения, в stopping есть; studies меняет y на ies, studying сохраняет y. Это разные окончания и разные орфографические модели.~Не переносить автоматически правило одного суффикса на другой.
speech~sound~Скажи новую положительную и отрицательную фразу с -ing; партнёр пересказывает, что происходит и чего не происходит.~The guests are arriving. They aren’t carrying bags.~Реальное прослушивание, различение be/not и передача смысла.
text~scene~Назначь себе проверку через 7 дней на другой сцене: четыре действия, одно отрицание, два вопроса. Не записывай будущий результат как готовый.~Новая сцена: подготовка сада к празднику; кто поливает, несёт стулья, рисует табличку, проверяет список; вопросы о месте и человеке.~Это подготовка отсроченного переноса, а не свидетельство уже освоенного навыка.`)
 ],
 tests:[
 exam('A102-building','a',`short~structure~The woman beside the bags ___ speaking. Am/is/are?~is~Главное woman в единственном числе.
short~structure~The women beside the bag ___ listening. Am/is/are?~are~Главное women во множественном числе.
short~structure~I ___ looking for the address. Am/is/are?~am~I требует am, looking остаётся.
short~structure~You ___ reading the new instructions. Am/is/are? Адресат один.~are~You не меняет согласование для одного человека.
short~spelling~Заполни форму от take: The guide is ___ a photo.~taking~Конечная e исчезает, k не удваивается.
short~spelling~Заполни форму от plan: We are ___ a visit.~planning~Короткая ударная гласная перед n требует удвоения.
short~spelling~Заполни форму от come: A guest is ___ inside.~coming~Удаляется e, m не удваивается.
short~spelling~Заполни форму от picnic: They are ___ near the river.~picnicking~После c добавляется k перед ing.
short~spelling~Заполни форму от travel: She is ___ by bus. UK/US допустимы.~travelling|traveling~Оба написания нормативны; не travellling.
short~spelling~Заполни форму от dye: The artist is ___ a scarf.~dyeing~E сохраняется; dying было бы другой лексемой.
sentence~structure~Отрицай без сокращений: The assistant is counting the coins.~The assistant is not counting the coins.~Not после is; counting сохраняется.
sentence~structure~Сделай общий вопрос: The neighbours are painting the gate.~Are the neighbours painting the gate?|Are the neighbors painting the gate?~Are перед neighbours; US neighbors тоже допустимо.
sentence~structure~Собери: which room / cleaning / are / the helpers / ?~Which room are the helpers cleaning?~Вся группа which room перед are.
sentence~structure~Исправь “Does she is waiting here?”~Is she waiting here?~Do-support не нужен в вопросе с be.
sentence~structure~Are you both checking the plan? Ответь положительно кратко за свою группу.~Yes, we are.~You both меняется на we по роли.
short~sound~В учебном произношении moving /ˈmuːvɪŋ/ последний согласный: n/ŋ/g?~ŋ~Окончание ing заканчивается /ŋ/.
short~sound~Dying и dyeing имеют разные значения, даже если звучат одинаково: yes/no?~yes~Значение и написание не выводятся из одного звучания.
text~spelling~Объясни, почему planning имеет две n, а opening одну. Добавь по одному новому примеру каждого механизма.~В plan короткая ударная гласная перед одной n; в open конец безударный. Примеры: running и visiting.~Нужны структура и ударение, не правило «короткие слова всегда удваиваются».
text~scene~Напиши 6–8 предложений по новой сцене: Ava красит дверь, Ben моет кисти, двое гостей ждут внутри, дождя нет, одна коробка закрыта; содержимое неизвестно.~Ava is painting the door. Ben is washing the brushes. Two guests are waiting inside. It is not raining. One box is closed. The contents of that box are unknown.~Все действия и ограничения сохранены; закрытость коробки не выдаётся за процесс закрывания.
text~structure~Составь два who-вопроса по “Kai is helping Nora”: неизвестен помощник; неизвестен получатель помощи.~Who is helping Nora? Who is Kai helping?~Две роли различены порядком слов.
speech~sound~Партнёр задаёт два вопроса о новой сцене. Ответь одним положительным и одним отрицательным сообщением с -ing, затем уточни место.~I’m reading the label. I’m not opening the parcel. Where are you waiting?~Требуются аудио, слышимое отрицание и ответ на реального собеседника.
text~scene~Друг пересказал “The clerk isn’t working at this desk” как “The clerk isn’t working anywhere”. Исправь вывод.~The clerk isn’t working at this desk. We don’t know about other places.~Ограничение места сохранено, неизвестные факты не придуманы.`),
 exam('A102-building','b',`short~structure~The child near those shelves ___ drawing. Am/is/are?~is~Главное child в единственном числе.
short~structure~The children near that shelf ___ reading. Am/is/are?~are~Children — неправильное множественное число.
short~structure~I ___ sending a message to the host. Am/is/are?~am~Личная форма am выбирается по I.
short~structure~Jo использует they. They ___ carrying the banner. Is/are?~are~Singular they сохраняет are.
short~spelling~Заполни форму от move: The visitors are ___ the chairs.~moving~Конечная e отпадает перед ing.
short~spelling~Заполни форму от swim: He is ___ across the pool.~swimming~Конечная m удваивается по структуре основы.
short~spelling~Заполни форму от have: The helpers are ___ lunch.~having~E отпадает; здесь have называет действие.
short~spelling~Заполни форму от panic: The character is ___ in this scene.~panicking~После c появляется k; это вымышленная сцена, не оценка человека.
short~spelling~Заполни форму от cancel: They are ___ the booking. UK/US допустимы.~cancelling|canceling~Оба нормативных написания принимаются.
short~spelling~Заполни форму от lie «лежать»: The coat is ___ on the bench.~lying~Ie меняется на y, не lieing.
sentence~structure~Отрицай без сокращений: The musician is checking the microphone.~The musician is not checking the microphone.~Not после is; форма checking сохраняется.
sentence~structure~Сделай общий вопрос: The volunteers are decorating the room.~Are the volunteers decorating the room?~Are перед volunteers, decorating после подлежащего.
sentence~structure~Собери: which picture / drawing / is / the student / ?~Which picture is the student drawing?~Which picture остаётся целой группой.
sentence~structure~Исправь “Do they are carrying that table?”~Are they carrying that table?~Убирается лишнее do, остаётся вопрос с are.
sentence~structure~Are you reading the guide? Ответь отрицательно кратко только о себе.~No, I am not.|No, I'm not.~Отрицательный ответ допускает I’m not, не I amn’t.
short~sound~В учебном произношении taking /ˈteɪkɪŋ/ последний согласный: n/ŋ/g?~ŋ~Конец ing имеет /ŋ/, не обязательный отдельный /g/.
short~sound~Sin /sɪn/ и sing /sɪŋ/ — одна и та же конечная согласная: yes/no?~no~Разное место артикуляции /n/ и /ŋ/.
text~spelling~Объясни, почему beginning имеет две n, а visiting одну t. Добавь по одному примеру каждого механизма.~В begin ударение на последнем слоге; в visit раньше. Примеры: stopping и opening.~Нужно объяснение ударения и структуры, не только копирование форм.
text~scene~Напиши 6–8 предложений по сцене: Eli рисует афишу, Sam проверяет имена, трое гостей ждут снаружи, снег не идёт, пакет запечатан; содержимое неизвестно.~Eli is drawing a poster. Sam is checking the names. Three guests are waiting outside. It is not snowing. A parcel is sealed. Its contents are unknown.~Сцена передана без выдуманного содержимого; sealed — состояние, не описанное действие запечатывания.
text~structure~Составь два who-вопроса по “Lena is calling Omar”: неизвестен звонящий; неизвестен адресат звонка.~Who is calling Omar? Who is Lena calling?~Подлежащее и дополнение различены по смыслу и порядку.
speech~sound~Партнёр описывает новую сцену с ошибкой. Исправь её отрицанием, назови верное действие и задай вопрос о предмете.~She isn’t writing a note. She is reading one. Which note is she reading?~Нужны реальный обмен, слышимые be/not и понятные окончания, не оценка по ASR.
text~scene~Из “The artist is standing beside a painting” друг выводит “The artist is painting it”. Объясни, чего не хватает.~Standing beside a painting описывает положение человека, не процесс рисования. Нужны отдельные данные о действии.~Нельзя выводить действие только из соседства с предметом.`)]
};

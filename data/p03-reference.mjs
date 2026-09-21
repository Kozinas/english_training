import {bank,exam,examples,goal} from './unit-tools.mjs';

export default {
 id:'P03-reference',topic:'P03',title:'This, that, these, those: указать предмет и сохранить ясную ссылку',prerequisites:['P03-articles'],references:['determiners-possession','nouns-articles'],
 goals:[goal('point','Выбирать указатель по числу и позиции говорящего','practice'),goal('agree','Согласовывать указатель, существительное и be','practice'),goal('track','Понятно отсылать к предмету и уточнять неоднозначное','production')],
 explanation:[
 {title:'Два независимых вопроса вместо четырёх несвязанных слов',text:'Для обычного указания на предмет реши два вопроса: один он или несколько, рядом он с говорящим или дальше. Один рядом — this; один дальше — that; несколько рядом — these; несколько дальше — those. Полная сетка есть в приложении. Не выбирай these только потому, что вещей много в комнате: важно число именно тех предметов, на которые ты указываешь. Один предмет среди двадцати всё равно this или that. В пространственных упражнениях точка зрения и расстояние заданы явно.'},
 {title:'Кто говорит, тот и задаёт точку отсчёта',text:'Предмет рядом со мной может быть далеко от тебя. Я говорю this card here, а ты с другого конца комнаты — that card over there. Сам предмет не меняется: меняется позиция говорящего. Поэтому here не значит «рядом с любым участником», а there не обозначает фиксированное место на карте. Для задания по аудио слушай, кто произносит реплику. В реальном разговоре можно одновременно указать цвет, положение и владельца, чтобы ссылка стала понятнее, но не нужно считать метрическое расстояние по универсальной границе.'},
 {title:'Указатель перед существительным и вместо группы',text:'This book is new — указатель определяет существительное book. This is a new book — указатель самостоятельно занимает место подлежащего, а далее идёт группа a new book. Нельзя смешивать их в This a book is new. Для множественного These books are new / These are new books: форма be меняется на are, неопределённый a/an перед множественным исчезает. Прилагательное new не получает -s. Перед this book не требуется a/the: this уже определитель. У неисчисляемого возможны this water и that information; по смыслу это не «один предмет воды», а выделенное вещество или содержание.'},
 {title:'Согласование всей цепочки',text:'Преобразуя This is a child в множественное, надо изменить не одно слово, а несколько связанных мест: These are children. This → these, is → are, a исчезает, child → children. Аналогично That box is empty → Those boxes are empty. Проверь цепочку слева направо: указатель, число существительного, глагол. Ошибка These is my keys показывает рассогласование, даже если каждое отдельное слово знакомо. С неоднозначным числом sheep помогают контекст и are: These sheep are small.'},
 {title:'Когда предмет уже назван: it и they',text:'После полного называния часто достаточно личного местоимения: This is a notebook. It is blue. These are brushes. They are clean. Не называй обычную вещь he/she только потому, что её русский перевод мужского или женского рода. It заменяет один обычный предмет, they — несколько; когда речь о людях, выбор учитывает референцию и местоимения человека, а не предположение по имени. Если рядом два возможных объекта, it может стать непонятным: повтори the red notebook или спроси Which one? Цель — убрать ненужное повторение, не потеряв смысл.'},
 {title:'Не только физическая дистанция',text:'This week связано с текущей неделей, That is a good idea может отсылать к только что высказанной мысли. В знакомстве This is Jo представляет человека, а не описывает его как предмет. Поэтому сетка расстояний — полезная начальная модель, но не полный перевод любого this/that. На данном шаге продуктивно тренируем предметы, число, знакомство и простую отсылку к сообщению. Эмоциональная дистанция, сложные ссылки между абзацами и формальные that/those как замены будут развиваться позже.'},
 {title:'Как работать со слушателем',text:'На бумаге нарисуйте два рабочих места и несколько предметов. Говорящий не показывает заранее текст своей фразы: слушатель выбирает предмет по услышанному. Затем поменяйтесь местами и ролями. Если выбор не тот, уточните: I mean those two boxes over there, not these ones here. Вопросы What is this? / What are those? на этом шаге можно использовать как готовые модели; системное построение вопросов с be будет в P04. Произношение /ð/ и различие this /ðɪs/ — these /ðiːz/ проверяются по слышимой речи, не по тому, что браузер напечатал ожидаемое слово.'}
 ],
 examples:examples(`This is a card here in my hand.~Это карточка у меня в руке.~Один близкий к говорящему предмет.
That is a box at the other end of the room.~Там коробка в другом конце комнаты.~Один удалённый предмет, поэтому that.
These are two keys here beside me.~Это два ключа рядом со мной.~Близкие предметы во множественном.
Those are three chairs over there.~Вон там три стула.~Удалённые предметы во множественном.
This pen is blue. This is a blue pen.~Эта ручка синяя. Это синяя ручка.~Определитель с существительным и самостоятельное подлежащее.
These pens are blue. These are blue pens.~Эти ручки синие. Это синие ручки.~Are и отсутствие a/an во множественном.
That child is ready. Those children are ready.~Тот ребёнок готов. Те дети готовы.~Согласуются указатель, неправильное множественное и be.
This information is useful.~Эта информация полезна.~This сочетается с неисчисляемым единственным.
These sheets of paper are clean.~Эти листы бумаги чистые.~Число задаёт sheets, а не material paper.
This is a cup. It is empty.~Это чашка. Она пуста.~It продолжает ссылку на один предмет, независимо от русского рода.
Those are boxes. They are empty.~Вон коробки. Они пусты.~They возвращается к множественному.
Mia says “this”; Kim, far away, says “that” about the same card.~Один предмет, две точки зрения.~Меняется говорящий, не свойство карточки.
This is Noor, my new colleague.~Это Нур, мой новый коллега.~Формула представления человека, не проверка сантиметров.
That is a useful idea. Which box do you mean?~Это полезная мысль. Какую коробку ты имеешь в виду?~Смысловая отсылка и уточнение неясного объекта.
These are the two cards here; those are the three boxes by the far door.~Здесь две карточки, вдалеке у двери три коробки.~Сложный контраст: число, расстояние и точный набор.`),
 banks:[
 bank('P03-reference','practice','Указание, преобразование и согласование','practice',`short~point~Один блокнот в руке говорящего. ___ notebook is new. This/that/these/those?~this~Один предмет близко к говорящему.
short~point~Один стул далеко от говорящего. ___ chair is empty. This/that/these/those?~that~Единственное число и удалённость.
short~point~Две ручки рядом с говорящим. ___ pens are blue. This/that/these/those?~these~Множественное число близких предметов.
short~point~Три коробки далеко от говорящего. ___ boxes are open. This/that/these/those?~those~Множественное число удалённых предметов.
short~point~Вода в стакане в руке говорящего. ___ water is cold. This/these?~this~Water неисчисляемое; these с этим значением не сочетается.
short~agree~Вставь is/are: These keys ___ small.~are~These и keys требуют множественного are.
short~agree~Вставь is/are: That box ___ empty.~is~That box — единственное число.
short~agree~Вставь is/are: Those children ___ ready.~are~Children — неправильное множественное, согласованное с those.
short~agree~Вставь is/are: This information ___ clear.~is~Information неисчисляемое, с this и is.
sentence~agree~Переведи в множественное: This is a red card.~These are red cards.~Меняются this, is, a и card; red неизменно.
sentence~agree~Переведи в множественное: That is a small child.~Those are small children.~Those + are + children; a исчезает, small не меняется.
sentence~agree~Переведи в единственное: These boxes are open.~This box is open.~This, box и is должны измениться вместе.
sentence~agree~Исправь: Those is my books.~Those are my books.~Множественное those/books требует are.
short~track~This is a bag. ___ is green. Выбери it/they.~It~Один обычный предмет продолжается через it.
short~track~These are brushes. ___ are clean. Выбери it/they.~They~Brushes — несколько предметов, поэтому they.
text~point~Одна карточка у Mia, Kim далеко. Как Mia и Kim могут по-разному назвать её?~Mia: this card. Kim: that card.~Точка отсчёта — каждый говорящий; предмет тот же.
text~track~На столе красная и синяя сумки. Почему “Move it” недостаточно и что спросить?~Which bag do you mean, the red one or the blue one?~Неясна ссылка it, нужен конкретный выбор между объектами.
text~agree~Объясни разницу структуры This book is new и This is a new book.~In the first, this determines book; in the second, this stands alone and a new book follows is.~Различено место существительного; русский разбор допустим.`),
 bank('P03-reference','reading','Чтение: один стол глазами двух участников','reading',`short~point~Кто находится рядом с двумя карточками: Mia или Kim?~Mia~Карточки лежат рядом с Mia.
short~point~Как Mia называет две карточки рядом с собой: these/those?~these~С позиции Mia близкое множественное — these.
short~point~Как Kim у дальней стены называет те же карточки: these/those?~those~Для Kim карточки далеко, хотя Mia они близки.
short~point~Как Kim называет одну коробку рядом с собой: this/that?~this~Единственная коробка близка к Kim.
short~point~Как Mia называет ту же коробку издалека: this/that?~that~Точка отсчёта теперь Mia.
short~agree~Вставь is/are для двух карточек: These cards ___ ready.~are~Множественные these/cards согласуются с are.
short~track~К чему относится they в реплике Mia о blue cards? Введи cards/boxes.~cards~They продолжает ближайшую ясную ссылку на две карточки.
text~track~Почему Kim уточняет “Which one?” после реплики о папке?~There are two folders, so it is not clear which folder Mia means.~Две папки делают одиночное it неоднозначным.
text~point~Опиши ту же комнату в 3–4 предложениях от лица Kim, не меняя расположение вещей.~This box is beside me. Those cards are near Mia. The folders are on the desk.~Указатели выбраны по позиции Kim, предметы не перемещены в пересказе.
text~track~Перепиши двусмысленное “Put it here” так, чтобы было ясно, какую папку и куда переместить.~Put the green folder beside the two blue cards, please.~Назван объект и место; движение лишь на бумажном макете.`,
 `Mia and Kim are looking at a paper plan of a practice room. They stand in different places on the plan. Mia is at the small desk near the entrance. Kim is at the far wall, beside one empty box. The entrance is the place where people come into the room.
Two blue cards are on the desk beside Mia. Mia says, “These cards are ready. They are for the next activity.” Kim, far from the desk, says, “Those cards are easy to see.” Both sentences refer to the same two cards. No card moves.
Kim points to the box beside her and says, “This box is empty.” Mia says, “That box is for the cards later.” There are also two folders on the desk: a green folder and a yellow folder. Mia says, “Put it here.” Kim asks, “Which one? And where exactly?” Mia corrects the instruction: “Put the green folder beside the blue cards, please.” They move only the paper symbols, not real work files.`),
 bank('P03-reference','listening','Аудирование: предметы рядом и вдалеке','listening',`short~point~Сколько красных ручек находится рядом с говорящим?~1|one~Одна red pen на столе говорящего.
short~point~Сколько синих карточек рядом с говорящим?~2|two~Two blue cards, с указателем these.
short~point~Сколько картинок на дальней стене?~3|three~Those three pictures находятся далеко от говорящего.
short~point~Каким словом говорящий называет одну дальнюю коробку: this/that?~that~Одна коробка у дальней стены: that box.
short~agree~Вставь is/are: Those three pictures ___ new.~are~Множественные those/pictures требуют are.
short~track~На что ссылается It is empty: pen или box?~box~It продолжает фразу о коробке.
short~point~Noor стоит рядом с дальней коробкой. Как она может назвать её со своей позиции: this/that?~this~Для нового говорящего коробка близко.
text~track~Почему слово that не является постоянной подписью коробки для всех людей?~It depends on the speaker’s position; Noor is near the box.~Нужно объяснить смену точки отсчёта.
text~agree~Напиши полную фразу о двух синих карточках от лица исходного говорящего.~These two blue cards are on my desk.~These + plural cards + are, без изменения blue.
text~track~Составь уточнение, если из-за плохой связи неясно, нужна ручка или коробка.~Do you mean this red pen or that box over there?~Две ясные альтернативы и соответствующие указатели.`,
 `I am sitting at the practice desk. This red pen is in front of me, and these two blue cards are beside it. Those three pictures on the far wall are new. That box under the pictures is empty. It is for the next activity. Noor is standing beside the box, far away from my desk. She can call it this box because it is near her. We are talking about the same box from different positions. Please describe the cards from my position first, then describe the box from Noor’s position.`),
 bank('P03-reference','production','Описание, смена точки зрения и диалог','writing',`text~point~Нарисуй два стола на бумаге. Опиши один близкий и один дальний предмет в полных предложениях.~This cup is here beside me. That lamp is at the far desk.~Ситуация и позиция говорящего заданы, указатели не выбраны случайно.
text~point~Добавь в рисунок две близкие и три дальние вещи. Опиши их через these/those.~These two cards are on my desk. Those three boxes are by the far door.~Числа и расстояния соответствуют рисунку; форма are сохранена.
text~agree~Преобразуй This is a clean brush и That is a new key во множественное.~These are clean brushes. Those are new keys.~Исчезает a, меняются указатели, be и существительные; прилагательные неизменны.
text~track~Напиши 4 предложения о двух группах вещей; используй it для одного предмета и they для нескольких без неоднозначности.~This is a notebook. It is blue. Those are chairs. They are empty.~Каждая ссылка имеет ясный ближайший объект.
text~track~Отредактируй “A bag is beside a box. It is blue.” двумя способами, чтобы отдельно описать цвет сумки и коробки.~The bag is blue. / The box is blue.~Два разных смысла требуют явного называния объекта; автоматическое угадывание не подходит.
text~point~Напиши 5–6 предложений о комнате от двух говорящих в противоположных концах. Один объект должен получить разные указатели.~Mia is beside a desk. Kim is far from it. Mia says, “This desk is small.” Kim says, “That desk is small.” It is the same desk.~Позиции и неизменность объекта ясны; связность важнее точного совпадения с образцом.
speech~agree~Произнеси this /ðɪs/ и these /ðiːz/ в трёх парах с is/are. Слушатель отмечает число.~This is a pen. These are pens. This is a card. These are cards. This is a key. These are keys.~Различимы гласный и конечный согласный; нужны реальные слышимые попытки.
speech~point~Скажи партнёру, какие две бумажные карточки взять: близкие или дальние. Не показывай текст реплики.~Take those two cards over there, please.~Партнёр выбирает по услышанной инструкции; можно менять набор и роль.
speech~track~Партнёр говорит “Move it”, когда объектов два. Уточни и дождись ответа.~Which one do you mean, the box or the bag?~Реальное устранение неоднозначности, не формальный вопрос без ответа.
speech~point~Поменяйтесь местами на макете. Снова назовите тот же предмет, явно учитывая новую позицию.~Before: this box. After moving away: that box.~Меняется точка отсчёта; нужно сохранить сам объект.
speech~track~Представь вымышленного коллегу через This is и ответь на уточнение партнёра.~This is Lee, my colleague. / Is Lee new? / Yes, Lee is new here.~Формула знакомства применена в диалоге, а не только предметный указатель.
text~track~После диалога запиши конкретную неясную ссылку и улучшенную фразу. Если диалога не было, отметь это.~It was unclear which folder I meant. I changed it to the yellow folder beside the clock.~Нужна реальная история или честное «не проверено», без выдуманных результатов слушателя.`),
 bank('P03-reference','review','Смешанное повторение и перенос','review',`short~point~Одна сумка далеко от говорящего: ___ is a bag. This/that/these/those?~that~Один дальний предмет обозначается that.
short~point~Два ребёнка рядом с говорящим: ___ children are ready. This/that/these/those?~these~Близкое множественное, хотя children без -s.
short~agree~Вставь is/are: Those two sheep ___ small.~are~Two sheep — множественное, those тоже множественное.
short~track~That is an old screen. ___ is heavy. It/they?~It~Один предмет screen заменяется it.
sentence~agree~Исправь: These is a new boxes.~These are new boxes.~Множественное требует are, boxes и отсутствия a.
text~point~Объясни, почему “this week” нельзя свести к расстоянию до календаря.~It refers to the current week, not physical distance from a calendar.~Значение this не всегда пространственное.
text~track~Напиши ответ на “That is a good idea”, пояснив, к чему может относиться that.~That can refer to the idea just mentioned.~Нужна ссылка на содержание предыдущей реплики, а не на видимый предмет.
text~agree~Измени Those are small boxes в единственное, затем добавь фразу с it.~That is a small box. It is empty.~Согласована вся цепочка; у нового предикативного count noun появляется a.
speech~track~Партнёр выбирает не тот объект на новом рисунке. Уточни цвет, число и расстояние, затем проверь исправление.~I mean those two red cards, not this blue card.~Изменение должно реально устранить ошибку, подтверждение исходит от партнёра.
text~point~Подготовь другой рисунок для повторения через 7 дней: близкий/дальний, один/несколько. Подпиши четыре ожидаемые группы.~This cup, that box, these keys, those chairs.~Все четыре клетки сетки есть; будущая проверка ещё не считается выполненной.`)
 ],
 tests:[exam('P03-reference','a',`short~point~Один конверт у говорящего в руке: ___ envelope is open. This/that/these/those?~this~Один близкий предмет, указатель this.
short~point~Четыре стула далеко от говорящего: ___ chairs are empty. This/that/these/those?~those~Удалённое множественное — those.
short~point~Три страницы рядом с говорящим: ___ pages are clean. This/that/these/those?~these~Близкое множественное — these.
short~agree~Выбери is/are: That old radio ___ quiet.~is~That radio — единственный предмет.
short~agree~Выбери is/are: These toy mice ___ small.~are~These и mice образуют множественную группу.
sentence~agree~Переведи в множественное: This is an empty envelope.~These are empty envelopes.~These, are, envelopes; an исчезает, empty не меняется.
short~track~Those are new folders. ___ are green. It/they?~They~Местоимение отсылает к нескольким папкам.
short~track~This is a clock. ___ is old. It/they?~It~Один неодушевлённый предмет, независимо от русского множественного «часы».
text~point~Книга рядом с Lee, Sam далеко. Напиши по реплике от каждого, обозначив одну и ту же книгу.~Lee: This book is new. Sam: That book is new.~Указатели согласованы с позициями, книга не подменяется другой.
text~track~Напиши 5–6 предложений о вымышленной сцене: один близкий предмет, две дальние вещи, затем it/they и уточнение одной ссылки.~This is a cup. It is red. Those are two boxes. They are empty. Which box do you mean?~Все коммуникативные элементы есть; количество, расстояние и ссылки ясны.
speech~track~Попроси слушателя выбрать две дальние карточки, затем исправь его выбор одной близкой карточки.~Those two cards over there, please, not this one here.~Слушатель должен услышать число и расстояние и реально уточнить выбор.
text~agree~Объясни ошибки в “These is an old phones”, затем исправь.~These are old phones. These requires plural agreement; an cannot determine this plural noun.~Выявлены be и лишний артикль; объяснение можно дать по-русски.`),
 exam('P03-reference','b',`short~point~Одна тарелка далеко от говорящего: ___ dish is clean. This/that/these/those?~that~Один дальний предмет, поэтому that.
short~point~Четыре билета в руке говорящего: ___ tickets are new. This/that/these/those?~these~Множественное близких предметов — these.
short~point~Две лампы у дальней стены: ___ lamps are small. This/that/these/those?~those~Множественное удалённых предметов — those.
short~agree~Выбери is/are: This clean glass ___ empty.~is~This glass — один стакан.
short~agree~Выбери is/are: Those women ___ ready.~are~Women — неправильное множественное, с those и are.
sentence~agree~Переведи в множественное: That is a useful brush.~Those are useful brushes.~Those, are, brushes; a исчезает, useful неизменно.
short~track~These are red pencils. ___ are short. It/they?~They~Несколько карандашей продолжаются через they.
short~track~That is a clean plate. ___ is white. It/they?~It~Одна тарелка — it, не she по русскому роду.
text~point~Телефон рядом с Noor, Jo стоит далеко. Напиши по реплике от каждой позиции о том же телефоне.~Noor: This phone is old. Jo: That phone is old.~Один объект назван с двух точек зрения без его перемещения.
text~track~Напиши 5–6 предложений: две близкие вещи, один дальний предмет, ссылки they/it и конкретный уточняющий вопрос.~These are two notebooks. They are blue. That is a bag. It is empty. Do you mean the bag by the door?~Сцена внутренне согласована; вопрос устраняет возможную неясность.
speech~track~Попроси слушателя выбрать три близкие картинки; исправь его выбор одной дальней картинки.~These three pictures here, please, not that picture over there.~Нужно реальное понимание числа и указания, а не совпадение транскрипта.
text~agree~Объясни ошибки в “Those is a green keys”, затем исправь.~Those are green keys. The verb is plural and a is removed.~Согласован указатель с существительным и глаголом; прилагательное green не меняется.`)]
};

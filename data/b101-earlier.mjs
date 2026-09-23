import {bank,exam,examples,goal} from './unit-tools.mjs';
import {historySources} from './duration-history.mjs';
const id='B101-earlier';
export default {id,topic:'B101',title:'Раньше другого прошлого: Past Perfect и предыстория',prerequisites:['B101-continuous','A204-story','A201-results'],references:['past-perfect','past-narrative','irregular'],sources:historySources,
 goals:[goal('form','Строить had + V3, вопросы, отрицания и сокращения','forms'),goal('timeline','Восстанавливать прошлую точку отсчёта и порядок событий','timeline'),goal('evidence','Ограничивать выводы о причине, результате и более позднем времени','reading'),goal('message','Рассказывать историю с понятной предысторией','production'),goal('sound','Различать had/would по форме и передавать отрицание','sounds')],
 explanation:[
 {title:'Нужны две временные позиции, не две обязательные фразы',text:'When I arrived, the train had left: точка наблюдения — мой приход в прошлом; уход поезда — ещё раньше. Мы мысленно стоим у прошлого прихода и смотрим назад. Порядок слов в предложении не равен порядку событий: событие в конце текста может быть первым во времени. В By six, I had finished вторая позиция задана часами внутри прошлого рассказа. Она также может быть известна из предыдущего абзаца. Не нужно искусственно добавлять второе действие в каждую фразу, но читателю должно быть понятно, относительно какого прошлого момента говорится раньше.'},
 {title:'Had одинаково для всех лиц',text:'I/you/he/she/it/we/they had + V3: she had left, we had seen, they had checked. У правильного глагола V3 совпадает с -ed-формой, у неправильного нужно проверить ряд: write–wrote–written, go–went–gone, choose–chose–chosen. Не had wrote и не had went. Давность события сама не выбирает эту форму: The town opened the museum in 1890 — обычное прошлое; By 1895, the town had opened two museums — взгляд из более поздней прошлой точки. Сравни обе даты и задачу рассказа, а не расстояние до сегодняшнего дня.'},
 {title:'Отрицание, вопрос и краткий ответ',text:'She had not left / she hadn’t left. Not после had, без did. Had she left? What had they chosen? How many pages had you read by noon? Вопрос переносит had перед подлежащим и сохраняет V3. На Had you eaten? отвечающий о себе говорит Yes, I had / No, I hadn’t. В Did you eat? нужен did; эти вопросы не следует смешивать. Отрицание привязано к прошлой границе: At six, she hadn’t called yet не означает «никогда не позвонила». She called at seven совершенно совместимо с первым сообщением.'},
 {title:'Два had и сокращение ’d',text:'We had had lunch before the visit не опечатка: первое had строит Perfect, второе — V3 основного have в have lunch. I had been there раньше прошлого события использует V3 be, но не Continuous, пока нет формы -ing. В I’d sent the file ’d означает had, потому что sent — V3 в этой модели. В I’d send the file ’d означает would, потому что send — основа. Звук /d/ сам не выбирает had или would: нужна следующая форма и контекст. Редкие совпадающие основы/V3, например put, могут требовать ещё больше контекста.'},
 {title:'Линия событий, фон и возврат назад',text:'I entered, sat down and opened the folder обычно ведёт читателя по последовательным событиям в Past Simple. I was reading when a visitor arrived добавляет фон внутри прошлого момента. I opened the folder that Mina had prepared yesterday возвращает к более ранней подготовке. Не превращай весь рассказ в цепочку had только потому, что история прошлогодняя. Выбирай опорную сцену, затем выделяй необходимые шаги предыстории. Past Perfect может установить порядок при when: When we arrived, they had eaten — еда до прихода; When we arrived, they ate может рассказывать о еде после прихода по контексту.'},
 {title:'Before и after уже могут показывать порядок',text:'We checked the list before we left и After we checked the list, we left грамматически возможны: союзы явно связывают события. We had checked the list before we left сильнее выделяет предварительную завершённость к уходу. Поэтому задание «вставь время» без контекста часто имеет несколько ответов. В закрытой практике здесь прямо требуется Past Perfect или указан нужный смысл; свободный рассказ оценивается содержательно. Не исправляй Past Simple на had автоматически после каждого before/after. Ясная последовательность может обойтись без отдельного возврата назад.'},
 {title:'Не всё после had утверждается как завершённое раньше',text:'They left before I had finished сообщает, что в момент их ухода я ещё не закончил. Событие finished не объявляется уже случившимся до left: before меняет отношение между частями. I hadn’t finished when they left выражает сходную границу отрицанием. Во фразе I had known her for years when we became colleagues состояние знания длится до прошлой точки и может продолжаться после неё. Следовательно, нельзя учить «Past Perfect = всё закончено навсегда». Форма работает вместе с отрицанием, союзом, значением глагола и временной рамкой.'},
 {title:'Earlier не значит because',text:'The light had gone out before Kim arrived устанавливает порядок, но не говорит, кто выключил свет и почему. We waited because the road had closed называет причину благодаря because; had обозначает её предшествование. I found that someone had moved the box утверждает более раннее перемещение, а не личность человека. Рабочий рассказ часто восстанавливают по сообщению, журналу или свидетельству: according to the note, we knew, we didn’t know. Не приписывай авторство, вину или успех только по соседству событий. Причина, исполнитель и последствие проверяются отдельно.'},
 {title:'К какому времени относится результат',text:'By Monday, we had checked six pages — шесть проверок к понедельнику в прошлом. Сейчас страниц может быть больше; эта фраза не задаёт текущий счёт. The room had been empty before the group arrived говорит о состоянии до прихода, но не о комнате сегодня. A booking had been confirmed не гарантирует, что она впоследствии не отменилась. В этой подтеме активная форма had + V3 основная; встречающийся пассив распознаём по контексту, подробно изучим в B103. В отчёте всегда подписывай опорный момент, чтобы читатель не переносил старое состояние на настоящее.'},
 {title:'Произношение и самостоятельный рассказ',text:'Безударное had может звучать /həd/ или сокращаться до /d/. Hadn’t обычно /ˈhædənt/; отрицание должно быть различимо, иначе меняется хронология. Read как V3 произносится /red/, хотя пишется как основа read /riːd/. Для озвучки лучше полный контекст I had read the note: отдельное слово TTS может выбрать иначе. Сначала выпиши опорный момент, два предшествующих факта и один неизвестный. Затем расскажи историю партнёру, который задаст вопрос о порядке. Если данных о причине нет, скажи это прямо, а не придумывай объяснение для гладкости рассказа.'}
 ],
 examples:examples(`When I arrived, the film had started.~Когда я пришёл, фильм уже начался.~Начало фильма раньше прихода.
She had left before noon.~Она ушла до полудня.~Полдень — прошлая опорная точка по контексту.
We had checked the address.~Мы уже проверили адрес к тому прошлому моменту.~Опора может быть в предыдущей фразе.
They had chosen a room.~Они выбрали комнату раньше обсуждаемого события.~Choose → chosen.
He had written two pages.~Он написал две страницы к тому моменту.~Write → written, не wrote.
I had seen the notice.~Я уже видел объявление.~See → seen.
The rain had stopped.~Дождь к тому времени прекратился.~It/the rain использует то же had.
We hadn’t opened the box yet.~Мы тогда ещё не открыли коробку.~Отрицание до опорного момента.
She hadn’t called by six; she called at seven.~К шести она ещё не позвонила; в семь позвонила.~Два утверждения совместимы.
Had you read the note?~Ты прочитал записку к тому моменту?~Had перед you, read как V3 /red/.
Yes, I had.~Да.~Краткий ответ сохраняет had.
No, they hadn’t.~Нет.~Отрицательный ответ о they.
What had she chosen?~Что она выбрала раньше?~Wh + had + подлежащее + V3.
We had had lunch before the tour.~Мы пообедали до экскурсии.~Вспомогательное had + основной had.
I had been there twice before that visit.~До того визита я бывал там дважды.~Had been — Perfect Simple, не Continuous.
I’d sent the note before the call.~Я отправил записку до звонка.~’d = had перед sent.
I’d send a note if needed.~Я бы отправил записку при необходимости.~’d = would перед основой send; подробные условия дальше.
I entered the room and sat down.~Я вошёл в комнату и сел.~Линия событий без обязательного Past Perfect.
I was reading when she arrived.~Я читал, когда она пришла.~Фон в Past Continuous.
I opened the file that she had prepared.~Я открыл файл, который она подготовила раньше.~Относительное предложение содержит предысторию.
We ate before we left.~Мы поели перед уходом.~Before уже задаёт порядок; Simple возможен.
After we had checked the list, we left.~После проверки списка мы ушли.~Perfect подчёркивает предварительную завершённость.
They left before I had finished.~Они ушли, прежде чем я закончил.~К их уходу завершения ещё не было.
I had known her for years when we became colleagues.~К началу совместной работы я знал её много лет.~Длительное состояние, не обязательно прекращённое.
By Monday, we had checked six pages.~К понедельнику мы проверили шесть страниц.~Прошлый счёт, не автоматически текущий.
The door had opened before the bell rang.~Дверь открылась до звонка.~Порядок не устанавливает причину или исполнителя.
We waited because the bridge had closed.~Мы ждали, потому что мост закрыли раньше.~Причина названа because, не одной формой had.
When the group arrived, we discovered that someone had moved the maps, but nobody knew who had done it or where the missing folder was.~Когда группа пришла, обнаружили, что карты переместили, но не знали, кто это сделал и где пропавшая папка.~Предыстория, известный факт и неизвестные детали разделены.`),
 banks:[
 bank(id,'forms','Had, V3 и порядок вопроса','practice',`short~form~They ___ checked the route before the visit. Had/has?~had~Прошлая опорная точка требует had в заданной форме.
short~form~She had ___ a letter. (write)~written~V3 write — written, не wrote.
short~form~We had ___ a room. (choose)~chosen~V3 choose — chosen.
short~form~He had ___ the station. (leave)~left~Leave имеет V3 left.
short~form~They had ___ the warning. (see)~seen~После had нужна V3: see → seen, не saw.
short~form~She had ___ home. (go)~gone~V3 go — gone, не went.
short~form~We had ___ lunch. (have)~had~Второе had — V3 основного have.
short~form~He had ___ there before. (be)~been~После had используется V3 глагола be: been.
short~form~I had ___ the form. (check)~checked~Правильный глагол имеет V3 checked.
short~form~Had you eaten? Ответ от I: Yes, I ___.~had~Краткий ответ сохраняет had.
sentence~form~Исправь: She had wrote the title.~She had written the title.~После had V3, не V2.
sentence~form~Исправь: They had went outside.~They had gone outside.~Go → gone в V3; после had нельзя went.
sentence~form~Сделай вопрос: He had checked the list.~Had he checked the list?~В вопросе had переносится перед подлежащим he.
sentence~form~Отрицание We had finished с had not/hadn’t.~We had not finished.|We hadn’t finished.~Отрицание not ставится после вспомогательного had, перед V3.
sentence~form~Исправь: Did they had arrived?~Had they arrived?~Perfect строит вопрос через had, не did.
sentence~form~Собери: chosen / what / had / you~What had you chosen?~Wh + had + you + V3.
sentence~form~Раскрой ’d в I’d taken the map.~I had taken the map.~Taken — V3, ’d означает had.
sentence~form~Раскрой ’d в I’d take the map. (would + основа)~I would take the map.~Take — основа, задано would.
text~form~Разбери We had had a short break: зачем два had?~Первое вспомогательное Past Perfect, второе V3 have в have a break.~Не удалять повтор только из-за внешнего сходства.
text~form~На Had Mina called? дай два кратких ответа о ней.~Yes, she had. No, she hadn’t.~Не заменять had на did.`,'','Формы'),
 bank(id,'timeline','Порядок, фон и границы вывода','practice',`short~timeline~When I arrived, Jo had left. Что раньше? Arrival/departure?~departure~Уход Jo предшествует приходу рассказчика.
short~timeline~At eight, the team hadn’t started yet. Начало до восьми подтверждено? Yes/no.~no~Отрицание сообщает отсутствие начала к восьми.
short~timeline~They left before I had finished. Работа завершилась до ухода? Yes/no.~no~Before задаёт уход до завершения.
short~timeline~После before обязательно всегда Past Perfect? Yes/no.~no~Союз может сам ясно задавать порядок с Simple.
short~timeline~Событие было в 1800 году. Только давность требует Past Perfect? Yes/no.~no~Нужна прошлая опорная точка, не просто давность.
short~evidence~The alarm had stopped before Ada arrived. Ada точно остановила сигнал? Yes/no.~no~Порядок не определяет исполнителя.
short~evidence~He hadn’t replied by five. Ответ в шесть невозможен? Yes/no.~no~Отрицание ограничено временем до пяти.
short~timeline~I had known her for years. Had known обязательно означает, что потом перестал знать? Yes/no.~no~Состояние может продолжаться после опорной точки.
text~timeline~Перескажи порядок: The shop had closed when we reached it.~Сначала магазин закрылся, потом мы пришли.~Не путать порядок текста с хронологией.
text~timeline~Сравни I was reading when Jo called / I had read the note when Jo called.~Первое фон процесса при звонке; второе прочитанная к звонку записка.~Значение выбирается по нужному фокусу.
text~timeline~Почему We checked before we left может быть достаточно без had?~Before уже обозначает проверку раньше ухода; Simple грамматически возможен.~Не вводить обязательный had без смысловой необходимости.
text~evidence~К понедельнику проверили четыре отчёта. Можно ли утверждать, что сейчас проверено только четыре?~Нет, после понедельника число могло измениться.~Не переносить прошлый счёт на настоящее.
text~timeline~Восстанови факты: приход 15:00, отправка письма 14:20. Составь фразу с had sent.~When I arrived at three, she had already sent the letter.~Прошлая опора три часа, отправка раньше.
text~evidence~A happened before B. Что нужно для утверждения A caused B?~Отдельные сведения о причинной связи; одного порядка недостаточно.~Не изобретать причину ради связности рассказа.
text~message~Расскажи три последовательных шага в Simple, затем один факт подготовки в Past Perfect.~I entered, sat down and opened the folder. Lee had prepared it the day before.~Не переводить всю последовательность в had.
text~timeline~Объясни They left before I had finished и I hadn’t finished when they left.~В обеих фразах на момент ухода работа ещё не завершена.~Смысл before учитывается вместе с формой.`,'','Хронология'),
 bank(id,'sounds','Had, ’d и V3 на слух','speaking',`short~sound~I’d sent: ’d означает had/would?~had~Sent — V3 в данной модели.
short~sound~I’d send: ’d означает had/would?~would~Send — основа в данной модели.
short~sound~Read в I had read the note произносится /red/ или /riːd/?~/red/|red~V3 read имеет произношение /red/.
speech~sound~Произнеси had finished / hadn’t finished; партнёр пересказывает, была ли готовность к приходу.~We had finished before they came. We hadn’t finished when they came.~Отрицание должно менять понятный слушателю статус.
speech~form~На Had you seen it before? ответь кратко и назови прошлую точку.~Yes, I had. I’d seen it before that visit.~Had сохраняется, роль you → I.
speech~timeline~Расскажи порядок двух событий, поменяй порядок фраз, но не самих событий.~When I arrived, Jo had left. Jo had left before I arrived.~Одинаковая хронология при разном порядке текста.
speech~sound~Произнеси We had had lunch по смысловым группам, не удаляя второй had.~We’d had lunch before the tour began.~Один had вспомогательный, другой основной.
speech~message~Партнёр ошибочно приписывает человеку причину события. Уточни предел известного.~I only said the light had gone out before she arrived. I don’t know why.~Корректируется вывод, а не выдумывается новая причина.
text~sound~Может ли одно /d/ без контекста надёжно отличить had от would?~Нет, нужны окружающие формы и смысл.~Не оценивать только громкость слабого слова.
speech~message~Расскажи короткую историю и ответь на неожиданный вопрос What had happened before that?~The room was empty. The guests had left earlier. Why had they left? I don’t know.~Живой вопрос, неизвестное признаётся явно.`,'','Произношение'),
 bank(id,'reading','Чтение: восстановить подготовку встречи','reading',`short~timeline~Во сколько Lea пришла в центр? HH:MM.~18:00|6:00~Приход в шесть вечера — основная прошлая опора.
short~timeline~Когда Amir отправил список? HH:MM.~17:10|5:10~Список отправлен раньше прихода, в 17:10.
short~timeline~Когда открыли внешнюю дверь? HH:MM.~17:40|5:40~Это время есть в журнале у стойки.
short~evidence~Сколько карточек Jo подготовила к 18:00? Цифрой.~12~Twelve name cards к приходу Lea.
short~evidence~Все двенадцать имён проверены: true/false/not stated?~false~Проверены только восемь.
short~evidence~Jo исправила имена после замечания в 18:15: true/false/not stated?~not stated~Дальнейшее исправление не сообщается.
short~evidence~Amir точно открыл внешнюю дверь: true/false/not stated?~not stated~Журнал называет время, но не человека.
short~evidence~Пустая комната в 18:00 означает отмену встречи: true/false/not stated для «встреча была отменена»?~false~Встреча состоялась позже, в тексте прямо описано начало.
short~timeline~Когда началась встреча? HH:MM.~18:30|6:30~Начало назначено и состоялось в 18:30.
short~evidence~Группа раньше уже проводила именно такую встречу: true/false/not stated?~false~Это первая встреча этого формата.
text~timeline~Назови три события до прихода Lea, сохрани их порядок.~Amir sent the list at 17:10. Jo finished the cards at 17:30. The outer door opened at 17:40.~Не смешивать карточки и проверку имён.
text~evidence~Почему нельзя назначить человека, открывшего дверь, по времени отправки списка?~Это разные события; в журнале нет имени у двери, причинная связь не дана.~Время не доказывает исполнителя.
text~message~Составь 4 предложения отчёта: опорный приход, подготовленное, непроверенное, неизвестное.~Lea arrived at six. Jo had prepared twelve cards. Only eight names had been checked. We don’t know who opened the outer door.~Пассив в модели можно заменить активным Jo had checked eight names.
text~timeline~Как отрицание The guests hadn’t arrived at six сочетается с началом в 18:30?~Гости могли прибыть между этими моментами; отрицание ограничено шестью.~Не превращать ещё не прибыли в никогда не пришли.`,
 `Lea arrived at the community centre at six in the evening to help with a discussion group. The meeting was due to begin at half past six. When she entered the main room, the guests had not arrived yet. The empty chairs did not mean that the event was cancelled. They described the room at that particular moment, not the rest of the evening.

Amir had sent the participant list at ten past five. Jo had used that list to prepare twelve name cards, finishing the cards at half past five. By the time Lea arrived, Jo had checked the spelling of eight names against the registration messages. Four still needed checking. Making twelve cards and checking eight names were separate achievements. The group could not honestly say that all twelve cards were ready for use without further review.

At the desk, Lea found a short log. It said that the outer door had opened at twenty to six, but it did not name the person who opened it. Amir's earlier message did not answer that question. He might have been elsewhere, and the fact that he sent the list first did not make him responsible for every later action. Lea wrote the known time down and left the person's name blank.

The group had never held a discussion in this format before. They had run ordinary talks, but this time participants would compare different descriptions of the same local problem. The organiser wanted everyone to listen before proposing an explanation. At a quarter past six, Lea noticed that two of the unchecked cards had unclear handwriting. She told Jo about them. The account does not tell us whether Jo corrected those names after the conversation, so we cannot add that result to the report.

The guests began to arrive, and the discussion started at half past six. Later, Lea wrote a summary that moved between the main events and their preparation. She used the past perfect when she looked back from her arrival to the list and the cards. For the events that followed her arrival, she mainly used the past simple. She also kept unknown details separate from things that the log or another person had clearly confirmed. A complete story, she realised, did not need an invented answer to every question.`, 'Чтение'),
 bank(id,'listening','Аудирование: что уже произошло к визиту','listening',`short~evidence~Кто рассказывает?~Ellis~Имя говорящего в начале записи.
short~timeline~Во сколько он пришёл? HH:MM.~10:10~Приход в десять десять утра.
short~timeline~Во сколько позвонила администратор? HH:MM.~09:50|9:50~Ten to ten — 09:50.
short~timeline~Когда пришёл техник? HH:MM.~10:00~Техник пришёл в десять, раньше Ellis.
short~evidence~К приходу Ellis техник закончил ремонт: true/false/not stated?~false~Он ещё не закончил проверку, ремонт не завершён.
short~evidence~К 10:10 известна причина сбоя: true/false/not stated?~false~Она прямо названа неустановленной.
short~evidence~Сколько копий списка напечатали заранее? Цифрой.~8~Eight copies названы как завершённая печать.
short~evidence~Сколько копий проверили к 10:10? Цифрой.~5~Пять проверено, три ещё нет.
text~timeline~Перескажи два события до прихода с had.~The receptionist had called at 9:50. The technician had arrived at ten.~Оба раньше опорного 10:10.
text~evidence~Почему нельзя считать оборудование исправным по присутствию техника?~Приход и процесс проверки не подтверждают завершённый успешный ремонт.~Не подменять результат фактом присутствия специалиста.
text~timeline~Что означало hadn’t finished к 10:10 для возможного завершения позже?~Только отсутствие завершения к этой точке; позже оно возможно.~Не утверждать весь будущий ход работы.
text~message~Составь короткое уточнение о непроверенных копиях и отдельное о причине сбоя.~Have you checked the other three copies? Have you found out what caused the problem?~Вопросы разные; нельзя заранее включать ответы.`,
 `Hello, this is Ellis with a note about yesterday's visit to the club office. I arrived at ten past ten in the morning. The receptionist had called the equipment technician at ten to ten, and he had arrived at ten. Those two events happened before I entered the room. When I saw him, he was still checking the small projector. He had not finished the checks or completed a repair by that point. Nobody had established the cause of the problem yet.

The organiser had printed eight copies of the visitor list before my arrival. She had checked five against the original messages. Three copies still needed checking, so I did not describe the whole set as verified. I wrote down the numbers separately to avoid confusing printing with checking.

The office was busy, but my note covers only what we knew at ten past ten. The technician may have finished later; I do not have that later update. Please ask the organiser before telling the group that the projector is ready. Also ask whether the final three copies have now been checked. I am reporting the earlier state of the work, not giving a current guarantee that every task is complete. Keeping the reference time clear will help the next volunteer understand which facts still need confirmation.`, 'Аудирование'),
 bank(id,'production','Рассказ с предысторией и проверкой фактов','writing',`text~message~Напиши 4 предложения: прошлый приход, два более ранних события, одно неизвестное.~I arrived at noon. The tutor had opened the room. A volunteer had prepared the cards. I didn’t know who had checked the names.~Ясная опора и неизвестный факт.
text~form~Исправь: She had wrote. Did he had left? We had went.~She had written. Had he left? We had gone.~V3 и вопрос без did.
text~message~Напиши 130–170 слов истории вымышленного первого визита: опорный момент, два факта подготовки, фон, последовательность после прихода и неизвестная причина.~I arrived at the community hall at four yesterday afternoon. The organiser had already opened the side entrance, and two volunteers had placed the empty frames on a table. A third volunteer was reading the labels when I came in. I put my bag down, checked the list and asked where I could help. One box was missing from the shelf. Someone had moved it before my arrival, but nobody in the room knew who had done that or why. I did not add a person's name to the report without evidence. Instead, we searched the nearby cupboard and asked the organiser whether there was another storage area. Later, a helper found the box in the small office. Finding it answered the question about its location, but it still did not explain who had moved it earlier.~130–170 слов; предыстория и линия событий различаются, найденное место не доказывает исполнителя.
text~message~Напиши 130–170 слов вымышленного отчёта о подготовке занятия: что было готово к прошлому времени, что ещё нет, более поздний шаг и предел качества.~By ten yesterday morning, our group had prepared most of the materials for a practice session. Nora had printed fifteen worksheets, and I had arranged the tables in pairs. We had not checked every question on the worksheets yet. The tutor arrived at ten and asked us to separate preparation from review. We then checked the first five questions together and found one unclear instruction. I rewrote that instruction and gave the new version to a partner. The partner said it was easier to understand, but we had still not tried it with a new learner. In my report, I described what was ready at ten and what changed afterwards. I did not say that all fifteen worksheets were correct simply because they had been printed. The next step was an independent check of the remaining questions.~130–170 слов; past reference, граница not yet, последующие события и отсутствие выдуманного качества.
text~message~Напиши 130–170 слов о вымышленном сбое в клубном проекте: временная шкала, что произошло раньше, наблюдение, неизвестная причина и вопросы.~When I joined the club's planning call yesterday, the shared page was showing an old timetable. The organiser had uploaded a newer file before the call, but we did not know why the page still showed the previous dates. I checked the file name and asked which version other members could see. Two people were looking at the new timetable, while another person still had the old one open. That difference was an observation, not proof that a particular person had made a mistake. We recorded the times and the versions before changing anything. Had everyone opened the same link? Had the organiser received a confirmation message after the upload? We did not yet have answers to both questions. My summary kept the earlier upload, the later observations and the unknown cause in separate parts.~130–170 слов; порядок не заменяет причинный анализ, без реальных личных данных.
text~timeline~Дай вариант с before + двумя Simple и вариант с Past Perfect, сохранив проверку до ухода.~We checked before we left. We had checked before we left.~Оба допустимы; второй явно выделяет предварительность.
speech~message~Партнёр — интервьюер: расскажи о прошлой встрече, он дважды спрашивает о предыстории и один раз о причине.~What had happened before you arrived? Why was the room empty? I only know that the guests hadn’t arrived yet.~Настоящие вопросы; неизвестная причина не выдумывается.
speech~timeline~Партнёр диктует три события не по порядку. Восстанови хронологию и попроси подтвердить.~So the message had arrived before the call, and the meeting started afterwards. Is that right?~Смысл проверяется по фактам, данным партнёром.
text~evidence~Исправь вывод Lee arrived after the door had opened, so Lee opened it.~The door had opened before Lee arrived. We don’t know who opened it.~Причинность и исполнитель не следуют из последовательности.
text~timeline~Составь пару hadn’t finished by six / finished later без противоречия.~We hadn’t finished by six. We finished at half past six.~Отрицание до границы не запрещает последующий результат.
text~message~Сделай план своего рассказа: опорный момент, подготовка, основная линия, неизвестное.~Arrival at three; earlier printing; checking after arrival; unknown cause of missing labels.~План отражает именно твою историю, не добавляет фактов.
text~message~После проверки сохрани исходник и новую версию; объясни реальные правки V3 или временной связи.~I changed had went to had gone. I replaced a guessed cause with an explicit statement that it was unknown.~Не создавать фиктивный отзыв или занятие.`,'','Письмо и диалог'),
 bank(id,'review','Смешанная хронология и перенос','review',`short~form~She had ___ the key. (take)~taken~V3 take — taken, не took.
short~form~We had ___ the date. (forget)~forgotten~V3 forget — forgotten.
short~timeline~They hadn’t met by June. Встреча в июле исключена? Yes/no.~no~Отрицание ограничено июнем.
short~timeline~Had для they отличается от had для she? Yes/no.~no~Had одинаково для всех лиц.
sentence~form~Исправь: What did you had chosen?~What had you chosen?~Вопрос строит had.
sentence~form~Раскрой: We’d seen it before.~We had seen it before.~Seen — V3, ’d означает had.
text~timeline~Почему Yesterday I entered and sat down не требует had entered?~Это обычная последовательность прошлого; нет отдельного возврата к предшествованию из опоры.~Не нагружать рассказ лишними had.
text~evidence~По журналу файл отправили до звонка. Доказывает ли это, что адресат прочитал его?~Нет, отправка и прочтение — разные события.~Не переносить результат на другого участника.
text~timeline~Сравни By Friday, we had finished / We have finished now.~Первое результат к прошлой точке, второе связь с настоящим.~Не терять временную опору отчёта.
speech~sound~Прочитай had read и had written, затем ответь на вопрос партнёра об одном из действий.~I had read the note, but I hadn’t written a reply.~Проверяется реальное звучание V3 и отрицания.
text~message~Через 3 дня напиши новую историю из 8 предложений: линия Simple, фон Continuous и два шага Past Perfect.~I arrived late. People were waiting. The organiser had sent a new time. I had not seen the message. I checked my phone. I apologised. We opened the room. I asked how I could help.~Новый материал, не обязательное копирование образца.
speech~message~Через 7 дней партнёр даёт новую временную шкалу и неизвестную причину. Расскажи события и ответь на уточнение.~The room had closed before we arrived. I don’t know why it closed early.~Перенос на новые данные, не автоматическое mastery.`,'','Повторение')],
 tests:[exam(id,'a',`short~form~By the visit, we ___ chosen the examples. Had/has?~had~Прошлая опора требует had в заданной модели.
short~form~The writer had ___ the title. (change)~changed~Правильный V3 changed.
short~form~She had ___ the parcel. (take)~taken~V3 take — taken.
short~form~They had ___ the answer. (know)~known~V3 know — known.
short~form~Had you called? Ответ от I: No, I ___.~hadn’t|had not~Краткий ответ с отрицательным had.
short~timeline~When the tutor arrived, we had opened the room. Первое событие: opening/arrival?~opening~Открытие произошло раньше прихода.
short~timeline~The tutor left before we had finished. Мы закончили до ухода? Yes/no.~no~Before относит уход к моменту до завершения.
short~timeline~He hadn’t paid by Monday. Оплата во вторник невозможна? Yes/no.~no~Позже понедельника оплата возможна.
short~evidence~By noon, she had checked four items. Число сейчас обязательно ровно четыре? Yes/no.~no~После полудня число могло измениться.
short~sound~They’d written: ’d означает had/would?~had~Written — V3, сокращается had.
short~sound~Read в had read имеет /red/? Yes/no.~yes~V3 read произносится /red/.
short~timeline~Before делает had обязательным в каждом рассказе? Yes/no.~no~Past Simple возможен при ясном порядке.
sentence~form~Исправь: We had chose the date.~We had chosen the date.~После had нужен chosen.
sentence~form~Сделай вопрос: They had prepared the room.~Had they prepared the room?~Had перед подлежащим.
sentence~form~Отрицание She had seen it с had not/hadn’t.~She had not seen it.|She hadn’t seen it.~Отрицание not ставится после вспомогательного had, перед V3.
sentence~form~Раскрой: He’d given us a map.~He had given us a map.~Given указывает на had в этой модели.
text~timeline~В 14:00 отправили приглашение; в 15:00 пришёл организатор. Составь предложение с had и подпиши опорный момент.~When the organiser arrived at three, we had already sent the invitation. Опора — его приход.~Не менять последовательность ради порядка слов.
text~evidence~Устройство выключилось до прихода техника. Можно ли считать техника причиной выключения?~Нет, последовательность не устанавливает исполнителя или причину.~Нужны отдельные сведения.
text~message~Напиши 130–170 слов вымышленной истории о подготовке обсуждения: прошлая опора, два более ранних факта, фон, поздние события и неизвестное.~I arrived at the library at five yesterday afternoon. The tutor had placed the discussion cards on the central table, and a volunteer had written the questions on the board. Two visitors were comparing their notes when I entered. I checked the names and noticed that one card was missing. Someone had taken it from the table before my arrival, but I did not know who or why. I asked the tutor whether another group was using the same materials. She checked the cupboard and found a spare set. We used that set to begin the discussion on time. Later, one participant returned the missing card and explained that she had taken it to read near the window. Her explanation supplied new information about the earlier event. Until she spoke, the report could only state that the card was missing, not who had moved it.~130–170 слов; предыстория, основная линия и изменение доступных сведений различаются.
speech~message~Партнёр спрашивает о вымышленной задержке: что уже случилось к приходу, что ещё нет и почему? Ответь, не выдумывая неизвестную причину.~The room had opened, but the tutor hadn’t arrived. I don’t know why she was late.~Живые вопросы, аудио и честные границы фактов.
speech~sound~Передай had finished / hadn’t finished в разных контекстах и проверь пересказ слушателя.~We had finished before six. We hadn’t finished when the guests arrived.~Значение отрицания должно быть слышно.
text~form~Почему We had had a meeting не содержит лишнее слово?~Первое had вспомогательное, второе V3 основного have в have a meeting.~Различить функции одинакового написания.
text~timeline~Сравни We checked the list before we left и We had checked the list before we left.~Оба задают проверку до ухода; Perfect явно выделяет предварительную завершённость.~Не объявлять первый вариант неграмматичным.
text~evidence~The team had prepared ten questions by Tuesday. Можно ли сказать, что десять вопросов проверены учениками?~Нет, подготовка не является проверкой на учениках.~Разные этапы не подменяют друг друга.
text~timeline~Почему I had known the area for years не обязательно означает, что знание прекратилось?~Это состояние, длившееся до прошлой опоры; дальнейшее продолжение возможно.~Perfect не равен вечному завершению состояния.
text~message~Дай вопрос к неизвестному событию до собрания с What had…?~What had happened before the meeting began?~Вопрос запрашивает факт, не подставляет причину.`),
 exam(id,'b',`short~form~Before that call, she ___ received the message. Had/have?~had~Задана прошлая опорная точка.
short~form~He had ___ the old copy. (keep)~kept~У keep форма V3 — kept, совпадающая с V2.
short~form~We had ___ the announcement. (hear)~heard~V3 hear — heard.
short~form~They had ___ the mistake. (find)~found~V3 find — found.
short~form~Had Mina left? Ответ: Yes, she ___.~had~Had сохраняется в кратком ответе.
short~timeline~When we entered, the speaker had stopped. Первое: stopping/entering?~stopping~Остановка речи раньше входа.
short~timeline~She went home before we had checked the final page. Страница проверена до её ухода? Yes/no.~no~Before сообщает обратный порядок границы.
short~timeline~At four, he hadn’t called yet. Звонок в пять совместим? Yes/no.~yes~Отрицание до четырёх не запрещает более поздний звонок.
short~evidence~The sign had fallen before Pat arrived. Pat точно уронил знак? Yes/no.~no~Личность исполнителя не следует из порядка.
short~sound~I’d choose: ’d в модели с основой choose означает had/would?~would~Основа choose после would, не V3 chosen.
short~sound~Одно сокращённое /d/ всегда однозначно различает had/would? Yes/no.~no~Нужна форма следующего глагола и контекст.
short~timeline~Чтобы описать одно событие в далёком прошлом, всегда нужен had? Yes/no.~no~Давность не создаёт автоматически более позднюю прошлую опору.
sentence~form~Исправь: She had took my note.~She had taken my note.~После had V3 taken.
sentence~form~Сделай вопрос: He had opened the file.~Had he opened the file?~Had перед he, V3 сохраняется.
sentence~form~Отрицание They had eaten с had not/hadn’t.~They had not eaten.|They hadn’t eaten.~Отрицание not ставится после вспомогательного had, перед V3.
sentence~form~Раскрой: We’d been there before.~We had been there before.~Been указывает на had в этой модели.
text~timeline~Гости пришли в 11:00; таблички приготовили в 10:15. Составь рассказ с had prepared и укажи опору.~When the guests arrived at eleven, we had prepared the signs. Опора — приход гостей.~Более ранняя подготовка не меняет время прихода.
text~evidence~К приходу проверили шесть экранов. Доказывает ли это, что весь сайт работал правильно?~Нет, нужны результаты и объём проверки; шесть экранов не весь сайт автоматически.~Не выводить качество из количества действий.
text~message~Напиши 130–170 слов истории вымышленной экскурсии: прежняя подготовка, основной ход, hadn’t yet к опоре, более позднее событие и ограничение знания.~Our group reached the museum entrance at half past ten yesterday. The guide had collected the tickets, but she had not checked every name on the list yet. A volunteer had sent a revised list earlier that morning. We waited near the door while the guide compared the two versions. I asked whether the revision changed the number of visitors or only the spelling of a name. At that point, nobody had explained the reason for the change to me. The guide finished checking at ten forty and then led us into the first room. Her later check did not contradict the fact that she had not finished when we arrived. In my summary, I kept the arrival, the earlier preparation and the later check in order. I also left the reason for the revised list as unknown rather than inventing a story about a cancelled ticket.~130–170 слов; явная опора, предшествование, отрицание до границы и отсутствие придуманной причины.
speech~message~Партнёр даёт три времени событий в перемешанном порядке. Перескажи историю и попроси подтвердить один неясный факт.~So the tickets had arrived before the call. Did the room open before or after that?~Настоящие исходные данные партнёра, не заученная последовательность.
speech~sound~Произнеси I had read / I hadn’t read и объясни разницу слушателю.~I had read the message before lunch. I hadn’t read the attachment yet.~V3 /red/ и отрицание оцениваются по аудио.
text~form~Почему had been в I had been there не является Continuous?~Been — V3 be; нет основного глагола в -ing, это Perfect Simple.~Не распознавать форму по одному слову been.
text~timeline~Дай две допустимые версии с after: проверили адрес, затем поехали.~After we checked the address, we left. After we had checked the address, we left.~Обе версии возможны, Past Perfect подчёркивает завершение до ухода.
text~evidence~The note said the room had been empty at five. Можно ли без новых данных сказать, что она пуста сейчас?~Нет, сообщение относится к прошлой точке; состояние могло измениться.~Не переносить прошлый факт на настоящее.
text~timeline~Сравни процесс I was writing when she came и предшествование I had written it when she came.~Приход застал процесс / текст был написан к приходу.~Различить фон и более раннее завершение.
text~message~Партнёр уверен в причине, но у вас известен только порядок. Напиши вежливое уточнение.~We know it happened earlier, but what evidence connects it to the later problem?~Уточнить основание причинного вывода, не отрицать его без данных.`)]};

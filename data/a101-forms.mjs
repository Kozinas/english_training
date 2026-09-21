import {bank,exam,examples,goal} from './unit-tools.mjs';
import {presentSimpleSources} from './present-simple.mjs';

export default {
 id:'A101-forms',topic:'A101',title:'Present Simple: смысл, утвердительная форма и окончания',prerequisites:['P04-wh'],references:['present-simple','sounds','tenses'],sources:presentSimpleSources,
 goals:[goal('form','Строить утверждение и выбирать форму по подлежащему','practice'),goal('meaning','Различать привычку, факт, состояние и расписание','reading'),goal('sound','Различать и произносить окончания /s z ɪz/','sounds')],
 explanation:[
  {title:'Что именно сообщает Present Simple',text:'I check the list each morning описывает повторяющееся действие, а This app stores notes — обычную функцию приложения. I know the code описывает состояние знания; The workshop opens at ten tomorrow — расписание. Во всех случаях говорящий представляет ситуацию как факт, привычку, характеристику или установленный порядок, а не показывает процесс изнутри. Поэтому название «настоящее простое» не означает «всё происходит в эту секунду» и не требует слова usually в каждом предложении. В грамматике важны и смысл, и точка зрения говорящего.'},
  {title:'Привычка не доказывает сегодняшний случай',text:'Jo walks to work может быть верным описанием распорядка, даже когда Jo сидит дома и рассказывает о нём. Из Jo usually walks нельзя вывести, как Jo добирается сегодня. Если нужно описать действие непосредственно в момент наблюдения, часто потребуется Present Continuous: Jo is walking now. Подробное противопоставление будет в A102. Пока научись не смешивать модели: I work — привычка/факт; I am working — процесс; I am work не годится ни для одной. Состояния вроде know, like, need, understand часто остаются в Simple даже при связи с настоящим моментом.'},
  {title:'Два набора утвердительных форм',text:'Для I, you, we, they используй базовую форму: I read; we read; they read. Для he, she, it — форму третьего лица: she reads; it works. You не получает -s даже при обращении к одному человеку. Имена и группы тоже имеют число: Jo reads; Jo and Kim read. Как в P04, найди главное слово длинного подлежащего: The label on these boxes shows the date, но The labels on this box show the date. Не согласовывай глагол с ближайшим существительным из уточнения и не добавляй am/is/are к обычному смысловому глаголу.'},
  {title:'Написание -s, -es, -ies',text:'Для большинства глаголов добавь s: work → works, read → reads, write → writes. После типичных окончаний -s/-ss, -sh, -ch, -x добавь es: passes, washes, watches, fixes. Если перед y согласная, замени y на ies: study → studies, try → tries. Если перед y гласная, y остаётся: play → plays, enjoy → enjoys. Не удваивай согласную по аналогии с другими формами: stop → stops, не stopps. Конечная немая e уже есть в write/use/choose: пишем writes/uses/chooses, не writees/usees/choosees. Из правила букв нельзя напрямую вывести число слогов.'},
  {title:'Формы, которые надо знать отдельно',text:'Have → has, а не haves. Do → does, go → goes: у этих частотных глаголов написание на -oes. Не превращай это в универсальную формулу для любого нового слова на o: спорную форму сверяй со словарём. Say → says пишется ожидаемо, но произносится обычно /sez/, не механическое /seɪz/. Сильная форма does — /dʌz/, слабая в потоке — /dəz/. В have lunch / do the checks эти глаголы называют действие; их роли в отрицаниях и вопросах разберём в следующих подтемах.'},
  {title:'Три звучания окончания',text:'После глухих /p t k f θ/ окончание обычно /s/: helps, starts, works. После гласных и остальных звонких, кроме отдельной группы свистящих/шипящих, — /z/: plays, reads, lives. После /s z ʃ ʒ tʃ dʒ/ нужен дополнительный слог /ɪz/: passes, uses, washes, watches. Сначала отдели этот последний класс: иначе ошибочно решишь, что после звонкого /z/ достаточно ещё одного /z/. Опирайся на последний звук основы, не последнюю букву. В studies /z/ присоединяется к уже имеющемуся /i/, а watches получает новый гласный. UK IPA в приложении — учебная запись, не запрет других нормативных акцентов.'},
  {title:'Соединяем действия в одну понятную последовательность',text:'После одного подлежащего можно назвать несколько действий: Jo opens the room, checks the list and starts the session. Здесь каждое согласованное действие получает форму третьего лица, а не только первый глагол. Если субъект меняется, назови его: Jo checks the list, and the guests read the instructions. Before/after помогают показать порядок, but — контраст, because — причину. Вначале используй простые предложения, затем связывай их; длина фразы сама по себе не делает объяснение точнее. Не перечисляй несвязанные глаголы ради демонстрации окончаний.'},
  {title:'Наблюдение, пример и доказательство навыка',text:'Потренируй отдельно форму, затем смысл и речь. В закрытом задании work → works проверяется написание; это не свидетельство, что окончание слышно в твоей речи. Для звучания партнёр слушает короткое сообщение без текста и пересказывает, кто что делает. Если есть только распознанный текст, фонетическая оценка остаётся неизвестной. Для чтения отделяй написанные факты от предположений о сегодняшнем дне. Собственный распорядок можно заменить вымышленным: реальные личные данные не нужны. После практики будет новый итоговый тест, а позже — проверка переноса на другой ситуации.'}
 ],
 examples:examples(`I check the list each morning.~Я проверяю список каждое утро.~I использует базовую форму; речь о повторении.
Jo checks the list each morning.~Джо проверяет список каждое утро.~Одно имя соответствует третьему лицу; checks.
You work here. You both work here.~Ты работаешь здесь. Вы оба работаете здесь.~Обе разновидности you используют work без -s.
My friend and I read the notes.~Мы с другом читаем записи.~Два участника → we → read.
The label on these boxes shows the date.~Этикетка на этих коробках показывает дату.~Главное label, не boxes; глагол shows.
The labels on this box show the date.~Этикетки на этой коробке показывают дату.~Главное labels во множественном; show.
She studies English and plays chess.~Она изучает английский и играет в шахматы.~Согласная + y → ies; гласная + y → ys.
He tries again and replies to the message.~Он пробует снова и отвечает на сообщение.~Каждый глагол с тем же he получает третье лицо.
Jo washes the cups and watches the door.~Джо моет чашки и следит за дверью.~-Sh/-ch + es; слышен дополнительный слог.
The helper fixes the box.~Помощник чинит коробку.~Fixes: /ˈfɪksɪz/, не односложное /fɪks/.
The bus goes past the library.~Автобус проходит мимо библиотеки.~Goes имеет -es на письме, но остаётся односложным.
She does the final check.~Она выполняет последнюю проверку.~Смысловое do → does; сильная форма /dʌz/.
He has lunch at one.~Он обедает в час.~Have → has; это действие, не только владение.
The note says “Room C”.~В записке сказано «Комната C».~Says обычно /sez/; не надо произносить буквы отдельно.
The app uses a local file.~Приложение использует локальный файл.~Глагольное use заканчивается /z/; uses /ˈjuːzɪz/.
I know the room number now.~Теперь я знаю номер комнаты.~Состояние знания; now не требует автоматически Continuous.
The shop opens tomorrow at nine.~Магазин завтра открывается в девять.~Present Simple может передавать установленное расписание.
Jo works on weekdays, but Kim studies on weekdays.~Джо работает по будням, а Ким учится.~Контраст двух привычек, не описание текущей секунды.
She checks /s/, reads /z/ and finishes /ɪz/.~Она проверяет, читает и заканчивает.~Три звучания окончаний определяются звуком основы.
The person beside the shelves checks the list, while the two visitors near the door read the notices.~Человек у полок проверяет список, а два посетителя у двери читают объявления.~Сложный контраст: длинные подлежащие с разным числом и отдельными действиями.`),
 banks:[
  bank('A101-forms','practice','Формы, порядок и согласование','practice',`short~form~Jo ___ at home on weekdays. Вставь форму work.~works~Одно имя — третье лицо; work + s.
short~form~She ___ chess after lunch. Вставь форму play.~plays~Перед y гласная a; y сохраняется.
short~form~He ___ English in the evening. Вставь форму study.~studies~Согласная перед y: y заменяется на ies.
short~form~Jo ___ again. Вставь форму try.~tries~Согласная + y даёт tries.
short~form~The helper ___ the cups. Вставь форму wash.~washes~Окончание sh требует es.
short~form~The technician ___ the printer. Вставь форму fix.~fixes~После x пишется es.
short~form~The bus ___ past the office. Вставь форму go.~goes~Частотная особая форма с es.
short~form~Kim ___ the final check. Вставь форму do.~does~Третье лицо do → does; здесь смысловое действие.
short~form~My brother ___ a small desk. Вставь форму have.~has~Особая форма has, не haves.
short~form~This message ___ “Tuesday”. Вставь форму say.~says~Написание says; стандартное произношение /sez/.
short~form~The program ___ a local file. Вставь форму use.~uses~К конечной e добавляется s, не ещё es.
short~form~The two visitors ___ the notice. Вставь форму read.~read~Подлежащее во множественном, базовая форма.
short~form~The name on these cards ___ familiar. Вставь форму look.~looks~Главное name в единственном числе.
short~form~My colleague and I ___ at nine. Вставь форму start.~start~Составное подлежащее соответствует we.
short~form~You ___ the labels carefully. Вставь форму check, обращение к одному человеку.~check~You не требует третьего лица даже при одном адресате.
short~form~The train ___ here. Вставь форму stop.~stops~Добавляется s, согласная p не удваивается.
sentence~form~Замени I на she: I carry a notebook.~She carries a notebook.~Carry → carries; остальная группа сохраняется.
sentence~form~Замени he на they: He watches the screen.~They watch the screen.~Множественное they возвращает базовую форму watch.
sentence~form~Замени we на Jo: We write the notes and send the file.~Jo writes the notes and sends the file.~Оба глагола согласуются с одним Jo.
sentence~form~Исправь только лишнюю связку: She is works in the library.~She works in the library.~Обычное утвердительное действие не требует is.
sentence~form~Исправь форму: The cards in this box belongs to Jo.~The cards in this box belong to Jo.~Главное cards — множественное, не box.
text~meaning~В объявлении “The tour starts tomorrow at ten”. Почему форма Present Simple не делает tomorrow ошибкой?~The sentence gives a timetable, not an action in progress now.~Нужно объяснить установленное расписание, а не правило «Simple только сегодня».
text~meaning~“Jo usually walks to work”. Что можно утверждать о сегодняшней поездке?~Jo has a walking routine, but today’s journey is not specified.~Привычка не выдана за наблюдение конкретного дня.
text~form~Составь две связанные фразы: один помощник открывает комнату; два гостя читают объявления. Назови участников явно.~The helper opens the room, and the two guests read the notices.~Согласование разное, действия связаны одной сценой; допустимы другие естественные формулировки.`),
  bank('A101-forms','reading','Чтение: обычный день в мастерской','reading',`short~meaning~Где работает Mina: tool library или café?~tool library~В тексте названа библиотека инструментов — место выдачи вещей.
short~meaning~В какие два дня Mina изучает английский? Запиши оба дня по-английски.~Tuesday and Thursday|Tuesdays and Thursdays~Оба дня названы в распорядке.
short~form~Выпиши форму глагола, которая в тексте относится к a card и значит «показывает».~shows~Одна карточка → shows, не show.
short~meaning~Во сколько Mina открывает мастерскую по будням? Формат HH:MM.~09:00~At nine означает 09:00 в описанном утреннем распорядке.
short~meaning~Sam чинит повреждённые предметы? Yes/no?~yes~Sam fixes damaged items — отдельная обязанность.
short~meaning~Mina идёт пешком на работу именно сегодня? True/false/not stated?~not stated~Описана привычка; сегодняшний маршрут не дан.
short~meaning~Все посетители являются студентами? True/false/not stated?~not stated~Группа visitors не раскрывает их профессию или статус.
short~meaning~Мастерская открывается в воскресенье? Yes/no?~no~В тексте прямо сказано closed on Sundays.
text~form~Выпиши из текста две пары подлежащее–глагол с разным числом и объясни формы.~Mina checks: один человек; the visitors read: несколько посетителей.~Главное слово и число объяснены; другие пары из текста подходят.
text~meaning~Сравни “Mina likes careful work” и “Mina opens the workshop at nine”.~Первое описывает предпочтение, второе — регулярное действие по расписанию.~Два использования Simple, не требование, чтобы всё было действием сейчас.
text~meaning~Напиши 4–5 предложений о распределении работы между Mina, Sam и посетителями.~Mina opens the workshop and checks the list. Sam fixes damaged items. The visitors read the notices and return tools. Mina writes the notes. Sam reads them.~Субъекты не перепутаны; текст связный, допустимы иные формулировки по фактам.
text~meaning~Назови один нужный, но отсутствующий факт о работе мастерской и сформулируй вопрос для будущего уточнения.~The price is not stated. How much is a visit?~Не придумывать цену; вопрос может использовать уже знакомое be.`,
 `Mina works in a small tool library. A tool library lends useful things, such as drills and brushes, instead of books. Mina opens the workshop at nine on weekdays. She checks the list of borrowed tools and writes short notes. A card on each shelf shows the name of the tool. The cards on the front desk show the return dates.
Sam works with Mina. Sam fixes damaged items and tests them before they go back on a shelf. Mina likes careful work, and Sam knows the names of the regular visitors. The visitors read the notices and return their tools to the front desk. Mina then checks each item. She has lunch at one. After lunch, she sends a message about any missing item.
Mina studies English on Tuesdays and Thursdays. She reads simple descriptions of tools and tries new words in short messages. Sam reads her messages and asks for clarification when a detail is unclear. Mina usually walks to work, but this description gives no information about her journey today. The workshop is closed on Sundays. Its timetable describes regular opening hours, not every possible change or exception. Visitors should check a new notice if they need information about a particular day.`),
  bank('A101-forms','listening','Аудирование: обязанности в небольшом клубе','listening',`short~meaning~Кто открывает помещение: Leo или Noor?~Leo~Leo открывает комнату по субботам.
short~meaning~Во сколько помещение открывается утром? HH:MM.~10:00~At ten — утреннее время по контексту.
short~meaning~Кто приносит книги?~Noor~Noor brings the books, Leo проверяет стулья.
short~meaning~Что делают участники сначала: read a short story или write notes?~read a short story|read~Сначала чтение рассказа, потом заметки.
short~meaning~Leo знает все слова в рассказах? Yes/no?~no~Leo говорит, что ищет новые слова; не знает каждого слова.
short~form~Выпиши услышанную форму от have в описании обеда Leo.~has~Leo has lunch — третье лицо have.
short~meaning~После занятия Noor отправляет сообщение? Yes/no?~yes~Noor sends a short message после завершения клуба.
text~meaning~Чем действия Leo и участников отличаются? Дай две связанные фразы.~Leo opens the room and checks the chairs. The members read a story and write notes.~Роли не смешаны; формы согласованы с разными подлежащими.
text~meaning~Опиши отношение Leo к чтению и одну регулярную обязанность; не добавляй сегодняшние события.~Leo likes short stories. Leo checks the chairs on Saturdays.~Предпочтение и привычное действие различены по смыслу.
speech~sound~Перескажи три факта с checks, reads, finishes; партнёр слушает окончания и уточняет один факт.~Leo checks the chairs. The club reads a story. The session finishes at noon.~Нужны слышимые окончания и реальный ответ на уточнение, не оценка по ASR.`,
 `Leo helps at a weekend reading club. On Saturdays, Leo opens the room at ten in the morning and checks the chairs. Noor brings the books and chooses a short story. The members read the story first and write notes afterwards. Leo likes short stories, but does not know every word. Leo uses a small dictionary for new words. Noor teaches the group one useful expression from each story. The session finishes at noon. Leo has lunch at home after the club. Noor sends a short message to the members with the name of the next story. This recording describes the club’s normal routine; it gives no report of a particular Saturday.`),
  bank('A101-forms','sounds','Окончания: классификация, слоги и речь','speaking',`short~sound~Как звучит окончание в works: s/z/ɪz?~s~Основа work заканчивается на глухой /k/.
short~sound~Как звучит окончание в reads (Present Simple): s/z/ɪz?~z~Основа read /riːd/ заканчивается на звонкий /d/.
short~sound~Как звучит окончание в watches: s/z/ɪz?~ɪz|iz~После /tʃ/ появляется отдельный слог.
short~sound~Как звучит окончание в plays: s/z/ɪz?~z~Основа заканчивается гласным /eɪ/.
short~sound~Как звучит окончание в fixes: s/z/ɪz?~ɪz|iz~Основа /fɪks/ заканчивается на /s/.
short~sound~Как звучит окончание в studies: s/z/ɪz?~z~В studies /i/ уже принадлежит основе; новый слог не добавляется.
short~sound~Says обычно произносится sez или seɪz? Введи IPA без скобок.~sez~У частотной формы says гласный /e/.
short~sound~Сильная форма does: dʌz или duːz?~dʌz~Гласный отличается от do /duː/.
speech~sound~Прочитай три полные фразы с checks, reads, washes. Партнёр отмечает, какие окончания услышал.~She checks the list. She reads the note. She washes the cup.~Все три класса окончаний слышны; не добавлять лишний гласный к checks/reads.
speech~sound~Произнеси пары “I study / she studies” и “I watch / she watches”; партнёр сравнивает число слогов.~Study/studies имеют по два слога; watch/watches — один/два.~Нужна аудиопроверка различия, текстовая классификация её не заменяет.
speech~sound~Произнеси сообщение из трёх фраз со смысловыми goes, does и has. Партнёр повторяет факты.~Jo goes home. Jo does the final check there. Jo has tea.~Допустим другой связный сюжет; сильные/слабые формы и нормативный акцент обсуждаются по аудио.
text~sound~Объясни, почему буквенные окончания studies и watches не дают одинаковой прибавки слога.~В study конечный гласный уже есть; в watch окончание после /tʃ/ требует нового /ɪ/.~Связаны орфография, звук основы и слог; это объяснение, не доказательство произношения.`),
  bank('A101-forms','production','Связное описание человека и системы','writing',`text~form~Напиши 6–8 предложений о вымышленном человеке: работа, дорога, учёба, еда, два последовательных действия.~Jo works at a library. Jo walks there. Jo studies English after work. Jo has lunch at one. Jo checks the shelves and writes a note. Jo reads at home in the evening.~Согласование третьего лица, связность и разные глаголы; не требуются реальные личные данные.
text~form~Перепиши своё описание для двух людей. Объясни три изменения формы.~Jo and Kim work at a library. They walk there. They study English after work. They have lunch at one. They check the shelves and write a note. They read at home in the evening. Works → work, studies → study, has → have: множественное подлежащее требует базовую форму.~Нужна полная переработка своего текста, а не только одного образца; местоимения и глаголы согласованы.
text~meaning~Опиши простую вымышленную программу в 5–6 предложениях: что хранит, что показывает, что проверяет. Не обещай технических возможностей реального продукта.~The program stores notes. It shows a list. It checks the date. It uses a local file. It opens one note at a time.~Указана обычная функция, не отчёт о текущем запуске; факты могут быть учебными.
text~meaning~Напиши по одному собственному примеру привычки, текущего состояния знания и расписания на завтра. Объясни общий выбор Simple.~I read after dinner. I know this word. The class starts tomorrow at ten.~Три разных употребления с объяснением, не три одинаковые привычки.
text~form~Исправь связный текст: “Mina work here. She studys English and watchs short videos. Her friends helps her.”~Mina works here. She studies English and watches short videos. Her friends help her.~Исправлены обычное -s, y → ies, ch → es и множественное подлежащее.
speech~meaning~Партнёр получает вымышленный распорядок двух людей; перескажи его третьему слушателю, который задаёт уточнение.~Mina opens the room, and the visitors read the notices.~Нужны связный пересказ, разные подлежащие и живой ответ; данные задаются до разговора.
speech~sound~Сравни свой вымышленный день с днём персонажа: I ..., but Jo ... . Слушатель отмечает окончания в пяти парах.~I walk to work, but Jo takes the bus.~Пять разных действий, слышимое согласование; форму takes можно сверить со словарём.
text~meaning~Фраза “The bus goes past the library” описывает маршрут. Напиши, чего она НЕ доказывает о местоположении автобуса сейчас.~It gives a regular route, not the bus’s current location.~Привычное свойство не выдаётся за наблюдение настоящей секунды.
text~form~Добавь к своему тексту длинное подлежащее в единственном и множественном; выдели главные слова.~The person near the shelves checks the list. The people near the desk read the notices.~Нужны два предложения и объяснение согласования по person/people.
text~form~Сохрани оригинал и исправленную версию описания. Объясни до трёх приоритетных исправлений, не придумывая ошибки.~Исправил studys → studies; убрал is перед work; проверил множественное help.~Разбор относится к собственной работе; отсутствие ошибки можно отметить честно.`),
  bank('A101-forms','review','Смешанное повторение форм и смысла','review',`short~form~The child ___ a book every evening. Вставь форму read.~reads~Единственное child требует reads.
short~form~The children ___ books every evening. Вставь форму read.~read~Children — множественное, нужна база.
short~form~The woman ___ the message. Вставь форму understand.~understands~Одно лицо → understands; глагол может описывать состояние.
short~form~These two women ___ the message. Вставь форму understand.~understand~Множественное women требует базовую форму.
sentence~form~Замени I на he: I have lunch and go home.~He has lunch and goes home.~Оба особых глагола согласуются с he.
sentence~form~Убери только лишнюю связку: The app is stores my notes.~The app stores my notes.~Смысловое stores не требует is в этой модели.
short~sound~В teaches окончание s/z/ɪz?~ɪz|iz~После /tʃ/ произносится отдельный слог.
short~sound~В helps окончание s/z/ɪz?~s~После глухого /p/ — /s/.
text~meaning~“I like this idea now” может быть Simple? Объясни без правила «now всегда Continuous».~Да: like выражает состояние/отношение, а не автоматически наблюдаемый процесс.~Нужны значение глагола и контекст, а не механический маркер.
text~form~Соедини три действия одного героя — open, check, start — в одно предложение и объясни окончания.~Jo opens the room, checks the list and starts the session.~Все три глагола имеют одно подлежащее третьего лица.
speech~sound~Передай партнёру три новых факта с разными окончаниями, не читая прежние примеры.~The helper stops here, reads the card and chooses a tool.~Нужны слышимые окончания и понимание партнёром; иные факты допустимы.
text~meaning~Для повторения через неделю выбери другую роль и другой распорядок; запиши данные, но не результат будущей проверки.~Новый герой — помощник в кафе; нужно описать привычки, одну функцию и один неизвестный факт.~Это подготовка независимого переноса, не фиктивная отметка освоения.`)
 ],
 tests:[exam('A101-forms','a',`short~form~The guide ___ maps for visitors. Вставь форму carry.~carries~Согласная + y, одно лицо: carries.
short~form~The children ___ near the house. Вставь форму play.~play~Множественное children требует базы.
short~form~A guest ___ the exit sign. Вставь форму watch.~watches~Один guest и окончание ch → es.
short~form~This device ___ a small screen. Вставь форму have.~has~Особая форма has; не haves.
short~form~The train ___ to the coast. Вставь форму go.~goes~Единственное train; особое написание goes.
short~form~You ___ the right word. Вставь форму choose, обращение к одному человеку.~choose~Любое you использует базовую форму в этой модели.
short~form~The address on these tickets ___ familiar. Вставь форму look.~looks~Главное address определяет согласование.
sentence~form~Замени we на she: We reply to messages and try new tools.~She replies to messages and tries new tools.~Оба глагола с согласной перед y меняют y на ies.
sentence~form~Исправь только лишнюю связку: He is reads at night.~He reads at night.~Is не добавляется перед смысловым reads.
short~sound~Как звучит окончание в sends: s/z/ɪz?~z~После звонкого /d/ произносится /z/.
short~sound~Как звучит окончание в relaxes: s/z/ɪz?~ɪz|iz~Основа заканчивается на /s/, нужен дополнительный слог.
short~sound~Как звучит окончание в eats: s/z/ɪz?~s~После /t/ произносится /s/.
short~meaning~Дано “The café opens at seven tomorrow” по расписанию. Это факт расписания или процесс сейчас? Введи timetable/process.~timetable~Tomorrow допустимо для установленного расписания в Present Simple.
short~meaning~Дано только “Mira usually cycles”. Сегодня Mira едет на велосипеде: true/false/not stated?~not stated~Общая привычка не определяет конкретный сегодняшний случай.
text~meaning~Напиши 6–8 связанных предложений: вымышленный экскурсовод работает в музее, читает заметки, носит карты; посетители задают вопросы; время обеда неизвестно.~The guide works at a museum. The guide reads notes and carries maps. The visitors ask questions. The guide knows the rooms. The guide’s lunch time is unknown. Please check it before the tour.~Заданные факты сохранены; дополнительные вымышленные детали явно допустимы, но неизвестное время не выдумано.
text~form~Объясни разные формы в “The key to these rooms opens the door” и “The keys to this room open the door”.~Главные слова key/keys задают число; rooms/room в уточнении не выбирают форму.~Нужен разбор всей группы и формы, не просто перевод.
speech~sound~Расскажи о персонаже с глаголами walks, knows, catches; партнёр пересказывает и задаёт один вопрос.~The guide walks to work, knows the route and catches the early bus on rainy days.~Проверяются три слышимых окончания и ответ партнёру, не ASR-совпадение.
text~meaning~Почему “I understand the instruction now” не обязательно менять на Continuous?~Understand здесь описывает состояние понимания; now уточняет время этого состояния.~Смысл глагола важнее автоматической реакции на маркер now.`),
 exam('A101-forms','b',`short~form~The assistant ___ to every message. Вставь форму reply.~replies~Согласная перед y: replies.
short~form~The women ___ the daily plan. Вставь форму check.~check~Women — множественное; базовая форма.
short~form~One visitor ___ the wet cups. Вставь форму wash.~washes~После sh пишется es.
short~form~The robot ___ the final test. Вставь форму do.~does~Особая форма do в третьем лице — does.
short~form~This notice ___ “Entrance B”. Вставь форму say.~says~Написание says; гласный в обычном произношении /e/.
short~form~You ___ the details carefully. Вставь форму read, обращение к одной ученице.~read~You не принимает -s по полу или числу адресата.
short~form~The labels on that parcel ___ the date. Вставь форму show.~show~Главное labels во множественном, parcel не выбирает форму.
sentence~form~Замени they на Jo: They study the map and carry a bag.~Jo studies the map and carries a bag.~Оба глагола изменяются для одного Jo.
sentence~form~Исправь только лишнюю связку: She is needs a pencil.~She needs a pencil.~Need — смысловой глагол; is перед needs лишнее.
short~sound~Как звучит окончание в lives (от live «жить»): s/z/ɪz?~z~После звонкого /v/ окончание /z/.
short~sound~Как звучит окончание в chooses: s/z/ɪz?~ɪz|iz~После /z/ отдельный слог /ɪz/.
short~sound~Как звучит окончание в stops: s/z/ɪz?~s~Основа заканчивается на глухой /p/.
short~meaning~“The library closes at six this evening” — официальное расписание. Введи timetable/process.~timetable~Установленное время может быть выражено Present Simple с будущим обстоятельством.
short~meaning~Дано только “Kai often reads on the train”. Сейчас Kai читает в поезде: true/false/not stated?~not stated~Регулярное действие не доказывает наблюдение прямо сейчас.
text~meaning~Напиши 6–8 связанных предложений: вымышленный помощник работает в магазине, проверяет цены, выбирает коробки; покупатели читают этикетки; время перерыва неизвестно.~The helper works in a shop. The helper checks prices and chooses boxes. Customers read the labels. The helper knows the shelves. The break time is unknown. Please ask before a visit.~Факты не смешаны, согласование верно; новые вымышленные детали допустимы, неизвестный перерыв не получает придуманного часа.
text~form~Объясни формы “The picture on these cards shows a bridge” и “The pictures on this card show a bridge”.~Главные picture/pictures определяют shows/show; вложенные cards/card не определяют глагол.~Нужно выделить ядро подлежащего и объяснить число.
speech~sound~Расскажи о персонаже с helps, plays, misses; партнёр уточняет один факт после пересказа.~The assistant helps visitors, plays chess after work and sometimes misses the early bus.~Три окончания слышны в связной речи; требуется живое уточнение.
text~meaning~Разбери два значения Simple: “I need a pen now” и “I use this pen on Mondays”.~Первое — текущая потребность, второе — повторяющаяся привычка.~Нужен смысловой контраст, не утверждение, что Simple всегда значит частоту.`)]
};

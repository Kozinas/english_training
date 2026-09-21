import {bank,exam,examples,goal} from './unit-tools.mjs';
import {beQuestionSources} from './be-questions.mjs';

export default {
 id:'P04-wh',topic:'P04',title:'Вопросы к информации: wh-группы, уточнение и связный диалог',prerequisites:['P04-yesno'],references:['be-questions','numbers-time'],sources:beQuestionSources,
 goals:[goal('information','Выбирать вопросительную группу по недостающему смыслу','practice'),goal('order','Строить полный wh-вопрос с be, не разрывая группы','practice'),goal('dialogue','Получать и уточнять сведения, затем передавать их связно','production')],
 explanation:[
  {title:'Сначала найди пробел в информации',text:'Is the meeting in room B? проверяет предположение. Where is the meeting? запрашивает неизвестное место, не предлагая комнату заранее. What — вещь, значение или название; who — человек; where — место; when — момент или день; why — причина; how — состояние, способ или характеристика в составе более длинной группы. Выбирай вопрос по информации, которую хочешь получить, а не по первому слову русского перевода. Если спросили Where?, ответа Yes недостаточно; если спросили Why?, название комнаты не объяснит причину.'},
  {title:'Основная сборка: wh-группа + be + подлежащее',text:'Построй утверждение The meeting is in room B. Недостающее место замени where, поставь его в начало, а is перенеси перед the meeting: Where is the meeting? Для The guests are outside получится Where are the guests? Нельзя Where the guests are? как нейтральный самостоятельный вопрос этой модели. Но в более сложном I know where the guests are такой порядок правилен: косвенные вопросы и вложенные части будут в B104. Здесь важно не объявлять одну последовательность слов ошибочной во всех контекстах.'},
  {title:'Вопросительная группа может быть длинной',text:'How old — целая группа о возрасте; what time — о часе; what colour — о цвете; how many chairs — о числе стульев. Не разрывай их связкой: How old is the building?, не How is old the building? В How many chairs are free? вся how many chairs обозначает неизвестное количество свободных стульев; are согласуется с chairs. В What colour are the cards? colour относится к запрашиваемой характеристике, а cards — известное множественное подлежащее. Сначала определи роли групп, затем выбирай связку, а не ориентируйся на одно слово непосредственно перед ней.'},
  {title:'Who иногда занимает место самого участника',text:'В The host is ready можно спросить Who is ready? Слово who заменяет неизвестного участника; ещё одно he/she/they не нужно. Не Who is he ready? для «Кто готов?». Если известно множественное подлежащее these people и надо выяснить личности, вопрос Who are these people? сохраняет are. Различай неизвестного участника и вопрос о характеристике известного участника. Не превращай правило в «после who всегда is». При ответе назови человека или роль, а не обязательно полное предложение: Jo естественно в разговоре; полные формы отдельно тренируют грамматику.'},
  {title:'Близкие вопросительные слова не равны',text:'What room? и Which room? оба возможны во многих ситуациях. Which подчёркивает выбор из известного набора, например A or B; what более открыто запрашивает название или номер. Поэтому неоднозначные смысловые задачи проверяются развёрнутым ответом, не единственной строкой. Whose спрашивает владельца, а who’s может быть who is; звучание часто одинаково, письмо и смысл разные. When допускает день или более широкий момент; what time явно направляет к часу. How long спрашивает длительность или длину, how far — расстояние, how old — возраст. Эти различия нужны для правильного ответа, не только для выбора формы.'},
  {title:'Число, цена и причина',text:'How many + множественное исчисляемое: How many rooms are free? How much используется с неисчисляемым количеством либо ценой: How much is the notebook? — It is four pounds. Не автоматически умножай are на идею «много»: цена одного notebook согласуется с is. Возраст тоже строится с be: How old is your dog? — It is six years old, не has six years. Why часто получает ответ с because: Why is the room unavailable? — Because it is full. Короткое Because ... возможно в диалоге, но в связном отчёте присоедини причину к основному сообщению.'},
  {title:'Разговор: узнать, уточнить, подтвердить',text:'Уточнение нужно, если ответ неполон, плохо слышен или противоречит другой записи. Where exactly? / Which floor? / Sorry, what time? — естественные короткие реплики, не дефект речи. После них подтверди полным фактом: So the session is in room C at eleven, right? Последнее right? здесь готовая разговорная формула; система question tags изучается отдельно. Не задавай механически десять вопросов, игнорируя уже полученный ответ. Речь связна, когда каждая следующая реплика использует предыдущую и закрывает настоящий пробел.'},
  {title:'Сохраняй границы модели и приватность',text:'P04 тренирует вопросы с настоящим be. Where do you work?, How often do you study? и How do I open it? — важные, но другие модели, которые подробно появляются в A101 и далее. Формулы из ранних диалогов можно понимать целиком, не обобщая их устройство на всё. Не требуй у ученика настоящего адреса, телефона или личных данных: вымышленный профиль полностью подходит. Если партнёр не хочет отвечать, корректно принять I’d rather not say как готовую формулу, без давления. Цель — умение взаимодействовать, а не добыча сведений.'},
  {title:'Качество ответа проверяется по смыслу',text:'В письме составь из данных разговора короткое понятное сообщение: кто, что, где, когда, какие изменения и что остаётся неизвестным. Сверь имена, числа и принадлежность с P02–P03. В речи партнёр должен суметь действовать по твоему итогу и задать новое уточнение. Обычные wh-вопросы часто произносятся с понижением, а переспрос может звучать иначе; не суди о понимании по одной интонационной схеме. Открытый диалог имеет множество правильных формулировок, поэтому образец не равен единственному ключу, а транскрипт не подтверждает слышимую беглость.'}
 ],
 examples:examples(`Where is the meeting? It is in room B.~Где встреча? В комнате B.~Where запрашивает место, не подтверждение yes/no.
Where are the visitors? They are outside.~Где посетители? Снаружи.~Be согласовано с известным множественным visitors.
When is the session? It is on Monday.~Когда занятие? В понедельник.~Запрошен день; on перед днём повторяет P02.
What time is the call? It is at eleven thirty.~Во сколько звонок? В 11:30.~What time как цельная группа; at перед часом.
Who is the organiser? Jo is the organiser.~Кто организатор? Джо.~Запрос личности, ответ называет человека.
Who is ready? Sam is ready.~Кто готов? Сэм.~Who занимает место неизвестного участника; второе подлежащее не добавляется.
Who are those people? They are our guests.~Кто те люди? Наши гости.~Those people требует are, несмотря на who.
Why is the room closed? Because it is full.~Почему комната закрыта? Потому что заполнена.~Причина, а не место или время.
How are you today? I’m well, thank you.~Как ты сегодня? Хорошо, спасибо.~Состояние человека, не подробная инструкция.
How old is this computer? It is four years old.~Сколько лет этому компьютеру? Четыре.~Возраст через be; how old остаётся вместе.
What colour are the cables? They are yellow.~Какого цвета кабели? Жёлтые.~Известное cables определяет are; what colour не разрывается.
How many chairs are free? Five chairs are free.~Сколько стульев свободны? Пять.~How many chairs целиком обозначает неизвестное количество.
How much is the notebook? It is three pounds.~Сколько стоит блокнот? Три фунта.~Цена одного notebook; не how many notebook.
How long is the break? It is fifteen minutes.~Как долго длится перерыв? Пятнадцать минут.~Длительность, не час начала.
How far is the office? It is two kilometres away.~Как далеко офис? В двух километрах.~Расстояние, не длительность поездки.
Which room is ours, A or B? Room B.~Какая наша комната — A или B? B.~Which подчёркивает известные альтернативы.
Whose pen is this? It is Alex’s.~Чья это ручка? Алекса.~Whose — принадлежность; не who is.
Who’s the host? Who is the host?~Кто ведущий?~В этой реплике who’s = who is, не whose.
Where are you from? I’m from a small town.~Откуда ты? Из небольшого города.~From выражает происхождение; where не только физическое место сейчас.
Where exactly? On the first floor, beside the lift.~Где именно? Этажом выше входного уровня (UK first floor), у лифта.~Короткое уточнение допустимо; в US first floor обычно входной этаж, реальную нумерацию здания надо проверить.
What time is the session in the small room beside the stairs?~Во сколько занятие в маленькой комнате у лестницы?~Длинные группы остаются целыми; is согласуется с session.
Why are the two labels on this box different, and which one is current?~Почему две надписи на коробке различаются и какая актуальна?~Сложный пример объединяет причину и выбор; требуется содержательный ответ.`),
 banks:[
  bank('P04-wh','practice','Смысл вопроса, порядок групп и исправление','practice',`short~information~Нужно узнать место: ___ is the spare key? Выбери where/when/why.~where~Место запрашивается через where.
short~information~Нужно узнать день: ___ is the workshop? Выбери when/who/whose.~when~When спрашивает момент или день, не участника.
short~information~Нужно узнать причину: ___ is the room unavailable? Выбери why/where/what.~why~Причина требует why.
short~information~Нужно узнать человека: ___ is the guide? Выбери who/how/when.~who~Who спрашивает личность или роль участника.
short~information~Нужно узнать владельца: ___ folder is this? Выбери whose/who’s.~whose~Whose — чья; who’s = who is здесь не подходит.
short~information~Раскрой сокращение вопроса ___ the host? Нужно who is; введи who’s/whose.~who's~Who’s the host? содержит связку is.
short~information~Спроси возраст: ___ is the building? Введи how old/how long.~how old~Возраст отличается от длины и длительности.
short~information~Спроси длительность: ___ is the lunch break? How old/how long?~how long~Перерыв длится определённое время.
short~information~Спроси расстояние: ___ is the library from here? How far/how much?~how far~Расстояние выражается how far.
short~information~Спроси число: ___ chairs are free? How many/how much?~how many~Chairs исчисляемое множественное.
short~information~Спроси цену одного билета: ___ is the ticket? How many/how much?~how much~How much спрашивает цену.
short~information~Спроси точный час, не день: ___ is the meeting? Введи what time/why.~what time~What time явно требует часа.
sentence~order~Собери нейтральный полный вопрос: are / where / your gloves.~Where are your gloves?~Wh + be + известная группа подлежащего.
sentence~order~Собери: the new colleague / is / who.~Who is the new colleague?~Who запрашивает личность; is перед the new colleague.
sentence~order~Собери вопрос: the library / how old / is.~How old is the library?~How old остаётся целой группой.
sentence~order~Собери вопрос: are / what colour / these folders.~What colour are these folders?~Are согласовано с folders; what colour не разрывается.
sentence~order~Исправь порядок в нейтральном полном вопросе: Where your phone is?~Where is your phone?~В прямом вопросе be перед подлежащим.
sentence~order~Исправь разрыв группы: How is old the bridge?~How old is the bridge?~Цельная группа how old стоит перед is.
sentence~order~Исправь лишнее do: Why does the window is open?~Why is the window open?~Для этой модели с be вспомогательное does не нужно.
short~order~Who ___ these people? Вставь is/are.~are~These people — известное множественное подлежащее.
short~order~Who ___ ready? Нейтрально спрашиваем, кто готов; отдельного подлежащего нет. Is/are?~is~Who само занимает место неизвестного участника в базовой модели.
sentence~order~Спроси про местоположение, используя where: The bags are under the table.~Where are the bags?~Убирается неизвестное место; are переносится перед the bags.
sentence~order~Спроси про возраст, используя how old: The house is fifty years old.~How old is the house?~Неизвестный возраст заменён целой wh-группой.
text~information~Сравни What room is it? и Which room is it, A or B? Почему нельзя всегда объявлять what или which ошибкой?~What is more open; which highlights a known set. Context can allow either.~Нужен контраст объёма выбора, а не безусловный запрет одного слова.
text~dialogue~На Where is the meeting? ответили Upstairs. Уточни конкретную комнату полной или короткой репликой.~Which room is it? / Which room?~Реплика закрывает оставшийся пробел и опирается на ответ.
text~dialogue~На When is the session? ответили Thursday. Теперь нужен час. Спроси без повторения вопроса о дне.~What time is it on Thursday?~Сохранён известный день и запрошен новый параметр.
text~information~Объясни, чем отличается How long is the meeting? от What time is the meeting?~Первый вопрос о длительности, второй о времени проведения, обычно начале.~Нельзя ответить одним и тем же числом без единиц и смысла.
text~order~Сравни Where is the office? и I know where the office is. Почему порядок второй части не исправляется автоматически?~Первое — самостоятельный вопрос, второе — вложенная часть сообщения.~Распознавание границы: полное освоение вложенных вопросов будет в B104.`),
  bank('P04-wh','reading','Чтение: получить данные, которых нет в объявлении','reading',`short~information~В объявлении указан точный час? Yes/no?~no~Первоначальное объявление содержит Thursday, но не время.
short~information~Сколько свободных мест указано в ответе Jo? Ответ цифрой.~4|four~Jo сообщает о четырёх свободных местах.
short~information~В какой комнате встреча? Напиши букву.~L|room L~В ответе администратора названо room L.
short~information~На каком этаже находится room L в данном здании? Ground/first?~ground|ground floor~Указан ground floor, без двусмысленного перевода нумерации.
short~information~Во сколько встреча? Запиши время цифрами в 24-часовой записи.~16:30~Half past four in the afternoon — 16:30, не 04:30.
short~information~Какова длительность встречи в минутах?~50|fifty~Fifty minutes — длительность, а не час начала.
short~information~Сколько стоит встреча? Ответ цифрой в фунтах.~0|zero~It is free означает отсутствие платы.
short~information~Ведущий — Sam? Yes/no?~yes~Jo прямо называет Sam ведущим.
short~dialogue~Причина недоступности комнаты K известна? Yes/no?~yes~Комната занята другой группой.
short~dialogue~Возраст здания известен из диалога? True/false/not stated?~not stated~Jo не знает возраста и не придумывает число.
text~information~Чем две реплики с how long и what time различаются в этой истории?~What time gives 16:30; how long gives fifty minutes.~Нужны оба конкретных значения и их разные роли.
text~dialogue~Напиши сообщение другу в 5–6 предложениях: место, день, час, длительность, стоимость, неизвестное.~The session is in room L on the ground floor. It is on Thursday at 16:30. It is fifty minutes long. It is free. Sam is the host. The age of the building is unknown.~Точность данных и отсутствие догадок важнее совпадения с образцом.
text~order~Выпиши один вопрос, где wh-группа состоит из двух слов, и объясни порядок остальных частей.~How long is the session? How long + is + the session.~Возможны другие корректные двухсловные группы из текста с разбором.
text~dialogue~Предложи два следующих вопроса по истории, не спрашивая уже известные день, час и комнату.~Is the room accessible? Is there a screen?~Вопросы должны запрашивать новые сведения; допустимы знакомые готовые формулы, смысл оценивается вручную.`,
 `Alex sees a notice at a community library: “English practice on Thursday. Ask Jo for details.” The notice has no room number and no exact time. Alex asks, “Where is the session?” Jo answers, “In room L.” “Where exactly is room L?” “On the ground floor, beside the entrance.” In this building the ground floor is the entrance level.
Alex continues, “What time is the session?” “At half past four in the afternoon,” Jo says. “How long is it?” “Fifty minutes.” These answers describe different things: one is a starting time, the other is a duration.
“How much is it?” Alex asks. “It is free,” Jo replies. “Who is the host?” “Sam is the host.” “How many places are free?” “Four places are free.” Alex checks an older notice: “Why is room K unavailable?” Jo explains, “Because another group is in room K.”
Alex is curious about the library building. “How old is it?” Jo says, “I’m not sure. The building’s age is not on this notice.” Alex does not guess a number. Before leaving, Alex checks the essential information: “So it is Thursday, 16:30, room L on the ground floor. Is that right?” Jo confirms it. Alex can now pass on useful details, while keeping the unknown fact separate.`),
  bank('P04-wh','listening','Аудирование: время, длительность, место и уточнение','listening',`short~information~В какой комнате клуб? Напиши букву.~R|room R~В ответе указана room R.
short~information~Комната наверху или внизу? Upstairs/downstairs?~upstairs~Room R находится upstairs.
short~information~День встречи? Напиши английское название.~Saturday~Saturday не сообщает час; он уточняется отдельно.
short~information~Время начала: запиши цифрами, 24-часовой формат.~10:15~Quarter past ten in the morning означает 10:15.
short~information~Длительность в минутах?~40|forty~Forty minutes — ответ на how long.
short~information~Сколько свободных мест?~3|three~Три места названы прямо.
short~information~Имя ведущего?~Mia~Mia — ведущая; имя не выводится из голоса.
short~dialogue~Экран есть и готов? Выбери true/false/not stated.~not stated~Ответ о готовности экрана — неизвестность, не yes/no.
text~information~Почему room Q не используется? Дай причину своими словами.~It is full; another group is there.~Причина отличена от нового местоположения; допустим короткий ответ because.
text~dialogue~Напиши подтверждение дня, часа и комнаты одним-двумя предложениями.~The club is on Saturday at 10:15 in room R upstairs. Is that right?~Данные точны, есть проверка понимания.
text~order~Сформулируй полный вопрос, который получил бы ответ “Forty minutes”.~How long is the club meeting?|How long is the session?~Образцы не единственные допустимые; вопрос должен запрашивать длительность.
speech~dialogue~Перескажи приглашение партнёру; он спрашивает об экране. Ответь и договорись об уточнении.~The club is on Saturday at 10:15. I’m not sure whether the screen is ready. Let me check with Mia.~Нужны слышимый ответ и содержательное продолжение при неизвестном.`,
 `Noor: Where is the reading club this week?
Kai: In room R upstairs, beside the small kitchen.
Noor: When is it?
Kai: On Saturday.
Noor: What time exactly?
Kai: At quarter past ten in the morning.
Noor: How long is the meeting?
Kai: Forty minutes.
Noor: Who is the host, and how many places are free?
Kai: Mia is the host. Three places are free.
Noor: Why is it not in room Q?
Kai: Because room Q is full. Another group is there.
Noor: Is the screen in room R ready?
Kai: I’m not sure. Please ask Mia before the meeting.
Noor: Thank you. Saturday, ten fifteen, room R upstairs. Is that right?
Kai: Yes, it is.`),
  bank('P04-wh','production','Интервью, уточнение и итоговый текст','writing',`text~information~По вымышленной карточке встречи придумай восемь разных запросов информации: человек, место, день, час, причина, длительность, цена, количество мест.~Who is the host? Where is the session? When is it? What time is it? Why is room A closed? How long is the session? How much is it? How many seats are free?~Восемь различных информационных целей, не перестановка имени в одном вопросе.
text~order~Составь четыре пары утверждение → wh-вопрос. Две пары должны иметь длинное подлежащее.~The small room beside the stairs is free → Which room is free? The guests from the other group are outside → Where are the guests from the other group?~Отмечено, какая информация неизвестна; формы согласованы, смысл не изменён случайно.
text~dialogue~Напиши интервью из 10–12 реплик по вымышленному профилю. Включи два уточнения на основе полученных ответов.~Where are you from? From a small town. Which town? Oakford. What is your role here? I’m a guest. Who is the host? Jo. Where is the session? Upstairs. Which room? Room C.~Есть цепочка вопрос–ответ–уточнение; не требуются реальные личные данные.
text~information~Сравни ответы “At two”, “Two hours” и “Two kilometres”. Составь подходящий вопрос к каждому.~What time is the meeting? How long is the meeting? How far is the office?~Различены момент, длительность и расстояние; не только цифра two.
text~dialogue~Из объявления “Practice on Monday” составь пять нужных вопросов организатору, не повторяя уже известный день.~Where is it? What time is it? Who is the host? How long is it? How much is it?~Запрашиваются отсутствующие сведения; вопросы связаны с практической целью участия.
text~order~Исправь и объясни: “What colour is these cards? How is long the break? Who’s bag is this?”~What colour are these cards? How long is the break? Whose bag is this?~Согласование, целостность wh-группы и whose/who’s исправлены отдельно.
speech~dialogue~Партнёр A знает место и час; B знает ведущего и длительность. Карточки: room D, 15:20, Jo, 45 minutes. Узнайте все данные и подтвердите итог.~Where is the session? In room D. Who is the host? Jo. What time is it? At three twenty. How long is it? Forty-five minutes.~Реальный обмен минимум восемью репликами, обе стороны получают недостающие сведения.
speech~dialogue~Партнёр даёт слишком общий ответ “In the building” или “Next week”. Задай два последовательных уточнения.~Where exactly? Which room? / Which day? What time?~Уточнения опираются на услышанное; нельзя зачитывать заранее полный ответ за партнёра.
speech~information~Партнёр отвечает о человеке, цене и причине в случайном порядке. Подбери по одному естественному вопросу к фактически услышанным ответам.~Jo → Who is the host? Three pounds → How much is it? Because it is full → Why is it unavailable?~Слушание и смысловая связь проверяются реальным обменом; варианты контекста обсуждаются.
speech~dialogue~Разыграйте неверно расслышанное время 13:15/13:50. Уточни час цифрами по одному и подтвердите правильный 13:50.~What time exactly? One three five zero? Yes, thirteen fifty.~P02 и P04 соединены; партнёр должен действительно понять исправление.
text~dialogue~Сложное применение: после интервью напиши 80–110 слов — цель, участники, место, время, полезные детали и неизвестное. Это объём текста, не лимит времени работы.~Our practice session is on Monday at eleven in room C upstairs. Jo is the host, and I am a guest. The session is for English practice, not for a test. The exact number of visitors is unknown, so please check it with Jo. Is room C the correct room for everyone? Is the time clear? Please confirm these details before the session. This message separates the facts from the question that is still open. Thank you for checking the information.~Связный абзац с данными собственного разговора; образец использует другой вымышленный профиль и не заменяет факты ученика. Критерии — точность, понятность, структура.
text~information~Объясни разницу Who is ready? и Who are these visitors? Придумай новый пример каждого типа.~Первый ищет участника; второй выясняет личности известной группы. Who is outside? Who are those guests?~Есть смысловой разбор и два собственных корректных вопроса; не правило «who всегда is».
text~dialogue~Составь вежливый ответ на слишком личный вопрос о вымышленном герое и переведи разговор к организации встречи.~I’d rather not say. What time is the session?~Допустима готовая формула отказа, без требования раскрыть реальные сведения.
text~order~Сохрани исходный итоговый текст и отредактированную версию. Проверь согласование, вопросы и точность чисел; объясни максимум три приоритетных изменения.~Исправил are после множественного, объединил what time, сверил 13:50.~Нужны конкретные цитаты собственной работы; при отсутствии ошибок перечисли реальные проверки.`),
  bank('P04-wh','review','Связное повторение вопросов и прежних топиков','review',`sentence~order~Собери: whose / these / are / notebooks.~Whose notebooks are these?~Whose notebooks — цельная группа принадлежности; these требует are.
sentence~order~Собери: what time / the two practice calls / are.~What time are the two practice calls?~Are согласовано с множественными calls, wh-группа не разрывается.
short~information~___ is this pencil? — It is Jo’s. Who/whose/when?~whose~Вопрос Whose is this pencil? спрашивает владельца.
short~information~___ is the ticket? — Four pounds. How many/how much?~how much~Цена, а не число билетов.
sentence~order~Спроси место с where: The women’s bags are beside the door.~Where are the women's bags?~Главное bags во множественном; притяжательная форма сохраняется.
sentence~order~Спроси время с what time: The break is at 11:45.~What time is the break?~Запрошен момент, не длительность break.
short~order~What colour ___ the equipment? Is/are?~is~Equipment неисчисляемое, даже если состоит из многих предметов.
short~order~How many boxes ___ empty? Is/are?~are~Группа how many boxes согласуется как множественная.
text~dialogue~Кто-то отвечает “Yes” на “Where is the entrance?” Вежливо переформулируй запрос конкретного места.~Where exactly is the entrance: beside the lift or near the stairs?~Запрашивается место, не спор о грамматике чужого ответа.
text~information~Объясни, почему “Whose is this?” и “Who’s this?” — разные вопросы при близком звучании.~Первый про владельца предмета, второй про личность или идентификацию.~Смысл и структура различены; написание не выводится только из ASR.
speech~dialogue~Узнай у партнёра происхождение вымышленного героя и текущее место; уточни город или комнату.~Where are you from? Where are you now? Which town?~Происхождение не смешано с текущим местом; нужны реальные ответы партнёра.
text~dialogue~Составь абзац по данным: пятница, room S, 12:10, 35 минут, Jo; цена не известна. Затем два вопроса для дальнейшего уточнения.~The session is on Friday at 12:10 in room S. It is thirty-five minutes long. Jo is the host. The price is unknown. How much is it? Is the room upstairs?~Указаны точные данные и настоящие пробелы; вопросы не получают выдуманных ответов.
text~order~Придумай один вопрос с неизвестным участником и один о признаке известной группы. Объясни разницу.~Who is late? What colour are their bags?~Разные роли вопросительного элемента, согласование и целые группы.
text~dialogue~Подготовь новые данные для разговора через неделю: изменённые день, цена и помещение, один неясный ответ партнёра. Оценку сейчас не выставляй.~Новый сценарий: библиотека, воскресенье, 5 pounds; нужно выяснить этаж.~Будущее применение на других данных, не повторение текста или фиктивная запись результата.`)
 ],
 tests:[exam('P04-wh','a',`short~information~Нужен владелец: ___ jacket is this? Whose/who’s?~whose~Принадлежность требует whose, не who is.
short~information~Нужна причина: ___ is the entrance blocked? Where/why/when?~why~Blocked — состояние, требуется его причина.
short~information~Нужна длительность экскурсии: ___ is the tour? How old/how long?~how long~Длительность, не возраст.
short~information~Нужно число свободных шкафчиков: ___ lockers are free? How many/how much?~how many~Lockers — исчисляемое множественное.
short~information~Нужна цена сумки: ___ is this bag? How much/how far?~how much~Цена одного bag, не расстояние.
short~information~Нужно расстояние до музея: ___ is the museum? How long/how far?~how far~Запрошено расстояние, не время в пути.
sentence~order~Собери полный вопрос: what colour / the badges / are.~What colour are the badges?~Группа what colour целая; badges требует are.
sentence~order~Собери полный вопрос: is / how old / that tower.~How old is that tower?~How old + is + that tower.
sentence~order~Исправь нейтральный прямой вопрос: Where the spare umbrellas are?~Where are the spare umbrellas?~Are перед всей группой подлежащего.
sentence~order~Исправь лишнее слово: Why does the gate is locked?~Why is the gate locked?~Do-support не используется с этой связкой.
short~order~Who ___ those guests? Is/are?~are~Известная группа those guests во множественном.
short~order~Who ___ absent today? Нейтральный вопрос об неизвестном участнике; is/are?~is~Who само занимает место неизвестного участника.
sentence~order~Спроси про момент с what time: The bus tour is at 09:40.~What time is the bus tour?~Вопрос о времени начала, не длительности.
sentence~order~Спроси про место с where: The tickets are in the green envelope.~Where are the tickets?~Запрошенное место не остаётся готовым ответом в вопросе.
short~information~На “Why is the room unavailable?” подходит ответ “Because it is full” или “On Friday”? Введи because/on.~because~Требуется причина, а не день.
text~information~Вам известны варианты blue/red. Составь вопрос с which, затем объясни, когда можно было бы использовать what.~Which badge is mine, the blue one or the red one? What более открыто запрашивает признак или выбор; контекст может допускать оба.~Смысл ограниченного выбора объяснён без безусловного запрета what.
text~dialogue~Напиши 10–12 реплик: музейная встреча в субботу, 10:40, room V на входном этаже, 45 минут, 6 pounds, ведущий Lee; возраст здания неизвестен. Включи два уточнения.~A: When is the meeting? B: On Saturday. A: What time exactly, and where? B: At 10:40 in room V. A: Which floor is that? B: The ground floor. A: Who is the host, and how long is the meeting? B: Lee is the host. It is forty-five minutes long. A: How much is it? B: Six pounds. A: How old is the building? B: I’m not sure.~Двенадцать связанных реплик с точными данными; уточнены час и этаж, неизвестность не заменена числом. Другие естественные формулировки допустимы.
text~dialogue~Сложное применение: из своего диалога составь связное сообщение 80–110 слов. Добавляй пояснения и подтверждение, но не выдуманные факты.~The museum meeting is on Saturday at ten forty in the morning. The room is V on the ground floor, so the room number and the floor are both clear. The meeting is forty-five minutes long, and the price is six pounds. Lee is the host. The age of the building is unknown; it is not a confirmed fact in this message. Please check the day, time and room before the meeting. Is all the information here correct? Thank you for confirming the details.~Сохраняются все существенные сведения и границы знания; оцениваются текст, связность и собственная формулировка, а не совпадение с образцом.
speech~dialogue~Партнёр знает цену и длительность события, ты — место. Обменяйтесь информацией, уточните одно неясное число и подтвердите итог.~How much is it? How long is it? Where exactly?~Нужно реальное взаимодействие и реакция на непредусмотренный ответ; транскрипт не подтверждает беглость.
text~order~Объясни отличие “Who is in room V?” от “Where are the people from room V?” и дай уместные ответы.~Первый ищет человека: Lee is there. Второй ищет место известной группы: They are outside.~Роли who/where и is/are объяснены, факты могут быть вымышленными.`),
 exam('P04-wh','b',`short~information~Нужен владелец: ___ umbrella is that? Whose/who’s?~whose~Whose связывает предмет с владельцем.
short~information~Нужна причина: ___ is the class online today? Who/why/where?~why~Запрос причины выбора формата.
short~information~Нужна длительность фильма: ___ is the film? How long/how old?~how long~В этом условии требуется длительность.
short~information~Нужно число свободных велосипедов: ___ bicycles are available? How much/how many?~how many~Исчисляемое множественное bicycles.
short~information~Нужна цена тетради: ___ is this exercise book? How much/how many?~how much~Цена одного предмета, не количество.
short~information~Нужно расстояние до станции: ___ is the station from here? How far/how old?~how far~Расстояние запрашивается how far.
sentence~order~Собери полный вопрос: the envelopes / what colour / are.~What colour are the envelopes?~Цельная wh-группа, множественное are.
sentence~order~Собери полный вопрос: that theatre / is / how old.~How old is that theatre?~How old не разрывается связкой.
sentence~order~Исправь нейтральный прямой вопрос: Where the clean brushes are?~Where are the clean brushes?~Are переносится перед the clean brushes.
sentence~order~Исправь лишнее слово: Why do these desks are wet?~Why are these desks wet?~С are не нужно do; desks остаётся подлежащим.
short~order~Who ___ these new neighbours? Is/are?~are~Множественное these new neighbours требует are.
short~order~Who ___ next in the queue? Нейтрально ищем неизвестного участника; is/are?~is~Who занимает место участника, второе подлежащее не добавляется.
sentence~order~Спроси про момент с what time: The film club is at 18:25.~What time is the film club?~Запрошен час начала, не длительность фильма.
sentence~order~Спроси про место с where: The brushes are in the yellow box.~Where are the brushes?~Место заменено where, are перед brushes.
short~information~На “Why is the lift unavailable?” подходит “Because it is broken” или “On the second floor”? Введи because/on.~because~Причина соответствует why; место её не заменяет.
text~information~Известны комнаты W и X. Составь вопрос с which, затем объясни, почему what не запрещён во всех вопросах о комнате.~Which room is ours, W or X? What room is ours? может быть уместно при более открытом запросе.~Описан ограниченный набор и зависимость выбора слова от контекста.
text~dialogue~Напиши 10–12 реплик: киноклуб в воскресенье, 18:25, room X наверху, 70 минут, 4 pounds, ведущий Kim; наличие субтитров неизвестно. Нужны два уточнения.~A: When is the film club? B: On Sunday. A: What time exactly, and where? B: At 18:25 in room X. A: Where is room X? B: Upstairs. A: Who is the host, and how long is the session? B: Kim is the host. It is seventy minutes long. A: How much is it? B: Four pounds. A: Is the film with subtitles? B: I’m not sure.~Двенадцать связанных реплик, точные данные, уточнение часа и места, честная неизвестность; образец не единственный допустимый ответ.
text~dialogue~Сложное применение: передай данные своего диалога в связном сообщении 80–110 слов, различая час и длительность. Не добавляй неизвестные сведения как факты.~The film club is on Sunday at eighteen twenty-five in room X upstairs. Kim is the host, and the price is four pounds. The session is seventy minutes long. Please remember that eighteen twenty-five is the starting time, not the duration. The information about subtitles is still unknown. It is not correct to say that the film is definitely without subtitles. Please check that detail with Kim and confirm the room and time before the session. Are these arrangements clear?~Оцениваются самостоятельный текст, все существенные данные и ясная неизвестность; английское definitely означает «определённо», arrangements — организационные детали.
speech~dialogue~Ты знаешь день и число мест, партнёр — комнату и ведущего. Выясните недостающее, уточните помещение и обменяйтесь итогом.~Which room is it? Where exactly? Who is the host? How many places are free?~Живые ответы и уточнение обязательны; чтение подготовленного монолога не заменяет задачу.
text~order~Объясни разницу “Who is upstairs?” и “Where are the guests from the film club?” с примерами ответов.~Первый спрашивает участника: Kim is upstairs. Второй место группы: They are near the entrance.~Объяснены роли вопросительных слов и согласование без правила «who всегда is».`)]
};

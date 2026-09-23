import {bank,exam,examples,goal} from './unit-tools.mjs';
import {historySources} from './duration-history.mjs';
const id='B101-continuous';
export default {id,topic:'B101',title:'Деятельность до сейчас: Present Perfect Continuous',prerequisites:['A205-time','A201-contrast','A102-building'],references:['perfect-continuous','present-perfect','present-continuous'],sources:historySources,
 goals:[goal('form','Строить have/has been + -ing, вопросы и отрицания','forms'),goal('meaning','Различать деятельность, результат и состояние','contrast'),goal('time','Задавать длительность и точку начала без механических маркеров','time'),goal('evidence','Отделять наблюдаемые факты от результата и причины','reading'),goal('message','Сообщать ход работы и отвечать на уточнения','production'),goal('sound','Слышать have/has, been и смысловое отрицание','sounds')],
 explanation:[
 {title:'Смотрим назад из настоящего',text:'I have been drawing for an hour связывает деятельность, начавшуюся раньше, с настоящей точкой отсчёта. Мы смотрим на занятие и его протяжённость до сейчас, а не только на кадр I am drawing и не на число законченных рисунков I have drawn three pictures. Название Perfect Continuous описывает сочетание этой связи и взгляда на деятельность. Оно не означает «действие точно закончено» и не переводится одним русским видом. Сначала спроси: что важно сообщить — чем занимался, как долго, сколько завершил или какое состояние длится?'},
 {title:'Сборка формы: четыре позиции',text:'Подлежащее + have/has + been + -ing: I/you/we/they have been waiting; he/she/it has been waiting. Been — третья форма be, она не меняется по лицам. Основной глагол получает -ing, а не V3: has been writing, не has been written в активном процессе. Has been written — другая, пассивная модель, подробно в B103. В She has been making notes согласуется только has; making остаётся тем же с любым лицом. Для -ing действуют знакомые правила: write → writing, run → running, lie → lying; UK travelling и US traveling допустимы.'},
 {title:'Not и вопрос относятся к первому помощнику',text:'I have not been waiting / I haven’t been waiting; she has not been working / she hasn’t been working. Not после have/has, не did not been. Вопрос переносит have/has перед подлежащим: Have you been waiting? Has she been working? How long have they been practising? Не How long they have been…? в самостоятельном вопросе. Краткий ответ сохраняет have/has: Have you been helping? — Yes, I have / No, I haven’t. You в вопросе становится I у отвечающего. Не нужно повторять been без смыслового продолжения в обычном кратком ответе.'},
 {title:'Продолжается — часто, но не обязательно сейчас',text:'I’ve been reading all morning может описывать продолжающееся чтение, но также объяснять нынешнюю паузу или усталость. I’m resting now; I’ve been carrying boxes — переноска могла только что прекратиться. Следы деятельности связывают её с сейчас, однако форма не обещает точное время остановки. I’ve been practising every evening for a month описывает повторные занятия, не месяц непрерывной практики без сна. Перерывы не запрещают Continuous. По одной форме нельзя решить, держит ли человек инструмент в руках в секунду речи или продолжит ли завтра.'},
 {title:'Длительность и начало периода',text:'For two hours задаёт длину периода, since nine — начало. Since может вводить событие: I’ve been helping since the workshop opened. How long спрашивает длительность; since when может уточнять начальную точку. Since three weeks ошибочно для длины: for three weeks; since three weeks ago возможно, потому что three weeks ago задаёт точку, но часто проще for three weeks. Ни for, ни since не требуют именно Continuous: I’ve known her for years — состояние в Simple. Уточняй, идёт ли речь о настоящей связи или о закрытом прошлом периоде.'},
 {title:'Деятельность и измеримый результат',text:'I’ve been checking forms сообщает, чем я занимался. I’ve checked eight forms сообщает число проверенных форм. Оба могут быть истинны одновременно: I’ve been checking forms for an hour and I’ve checked eight so far. Continuous не доказывает, что хотя бы одна конкретная форма закончена, а Simple checking не доказывает, что все данные верны: проверка может обнаружить ошибку. Для готового изделия важны дополнение и смысл глагола: I’ve made a box утверждает создание коробки. Не подменяй продукцию временем усилий; в рабочем обновлении называй результат отдельно.'},
 {title:'Состояния и допустимые альтернативы',text:'Know, own, belong и have в значении владения обычно идут в Simple: I’ve known the route for years; she has had the same bike since college. Не has been having a bike для обычного владения. Но have lessons — занятие, поэтому I’ve been having lessons допустимо. I’ve lived here for a year и I’ve been living here for a year могут оба быть нормативными: различается акцент на факте или текущем периоде. Так же с work в подходящем контексте. Не придумывай абсолютное «Simple — навсегда, Continuous — временно»: это тенденции акцента, не гарантированный срок.'},
 {title:'Граница настоящего и закрытое прошлое',text:'Yesterday, last Tuesday и in 2019 задают закрытую прошлую рамку, если относятся к самому действию: I worked on the map yesterday, не I have been working on it yesterday в этой обычной модели. Но since yesterday открывает период до сейчас: I’ve been working on it since yesterday. I was working at nine yesterday показывает процесс внутри прошлого момента; I’ve been working since nine показывает связь с сейчас. Today, recently и all morning сами не выбирают время: учитываются точка речи, задача и контекст. В свободном рассказе допустимый вариант проверяют по смыслу.'},
 {title:'Отрицание и осторожный вывод',text:'I haven’t been sleeping well lately не означает, что сна не было вообще: отрицание может относиться к качеству. She hasn’t been working here long не обязательно отрицает работу здесь; оно отрицает большой срок. I’ve been trying to fix the lamp не утверждает ни успех, ни окончательную неудачу. Мокрая улица может быть следом дождя, но также полива; Has it been raining? — вопрос, не доказанная причина. Отделяй текстовый факт, возможное объяснение и отсутствие сведений. В чтении not stated применяется к неизвестному, а false — к противоречию явному факту.'},
 {title:'Как произнести и применить в разговоре',text:'I’ve /aɪv/, she’s /ʃiːz/ перед been здесь содержат have/has; been встречается с /bɪn/ и /biːn/, оба нормативны. She’s working содержит is, а she’s been working — has: следующая форма помогает восстановить цепочку. Слабые служебные слова не следует терять в письме. Произнеси одно обновление о процессе, затем отдельный результат и неизвестное: I’ve been testing the layout; I’ve checked two screens; I haven’t checked mobile yet. Партнёр спрашивает How long? и What have you finished? Ответ требует смены фокуса. Произношение и беглость оцениваются только после реального прослушивания.'}
 ],
 examples:examples(`I have been drawing for an hour.~Я рисую уже час.~Период деятельности до сейчас.
You have been waiting since noon.~Ты ждёшь с полудня.~You + have; since задаёт начало.
He has been repairing a chair.~Он занимается ремонтом стула.~Не доказано, что стул уже исправен.
She has been writing labels.~Она пишет этикетки.~Has + been + writing.
It has been snowing.~Шёл или идёт снег.~Контекст уточнит, прекратился ли снег сейчас.
We have been sorting photos.~Мы сортируем фотографии.~Акцент на занятии, не на числе готовых групп.
They have been practising every evening.~Они занимаются каждый вечер в текущий период.~Повторение, не непрерывность.
I haven’t been using this room.~Я не пользовался этой комнатой в обсуждаемый период.~Отрицание not ставится после первого вспомогательного have.
She hasn’t been feeling well lately.~В последнее время она плохо себя чувствует.~Feel допускает временный акцент; это языковой пример, не диагноз.
Have you been learning to draw?~Ты учишься рисовать в последнее время?~Have перед you.
Has he been waiting outside?~Он ждал снаружи?~Has перед he, been остаётся.
Yes, I have.~Да.~Краткий ответ на Have you…?
No, she hasn’t.~Нет.~Отрицательный ответ с has.
How long have they been working here?~Как долго они здесь работают?~Wh + have + подлежащее + been + -ing.
I’ve been helping since the club opened.~Я помогаю с открытия клуба.~Since вводит событие начала.
I’ve been checking forms; I’ve checked eight.~Я проверяю формы; восемь уже проверил.~Процесс и измеримый результат раздельно.
I’ve read three chapters.~Я прочитал три главы.~Счёт завершённого чтения с Simple.
I’ve been reading the book, but I haven’t finished it.~Я читаю книгу, но ещё не закончил.~Деятельность не доказывает завершение.
I’m resting because I’ve been moving boxes.~Я отдыхаю, потому что переносил коробки.~Деятельность могла прекратиться к моменту речи.
She has known him for years.~Она знает его много лет.~Состояние обычно в Simple.
We’ve had this table since March.~Этот стол у нас с марта.~Have как владение, не been having.
I’ve been having drawing lessons.~Я хожу на уроки рисования.~Have lessons — деятельность.
I’ve lived / been living here for a year.~Я живу здесь год.~Обе формы допустимы с разным акцентом.
He worked on the model last night.~Он работал над моделью вчера вечером.~Закрытая прошлая рамка.
He’s been working on it since last night.~Он работает над ней со вчерашнего вечера.~Since связывает прошлое с сейчас.
I haven’t been sleeping well.~Я плохо сплю в последнее время.~Это не утверждение полного отсутствия сна.
The path is wet. Has it been raining, or did someone wash it?~Дорожка мокрая. Шёл дождь или её кто-то помыл?~Следствие не доказывает одну причину.
We’ve been testing the guide for two weeks, and we’ve corrected four unclear steps, but we still haven’t checked the final section.~Мы проверяем руководство две недели и исправили четыре неясных шага, но последний раздел ещё не проверили.~Длительная работа, результат и границы проверки в одном обновлении.`),
 banks:[
 bank(id,'forms','Сборка формы, вопрос и отрицание','practice',`short~form~I ___ been drawing today. Have/has?~have~С I используется have.
short~form~The volunteer ___ been checking names. Have/has?~has~Единственное volunteer требует has.
short~form~Two neighbours ___ been helping. Have/has?~have~Множественное подлежащее требует have.
short~form~She has ___ waiting. Been/being?~been~В Perfect нужна V3 be — been.
short~form~He has been ___ a report. (write)~writing~После been в активной форме -ing, write теряет e.
short~form~The dog has been ___ here. (lie)~lying~Lie → lying, не lieing.
short~form~They have been ___. (run)~running~В короткой ударной основе удваивается n.
short~form~We have been ___. (travel, UK или US)~travelling|traveling~Оба написания нормативны.
short~form~He has been ___ notes. (make)~making~Немое e убирается перед -ing.
short~form~Have you been helping? Ответ от I: Yes, I ___.~have~Краткий ответ сохраняет have, меняется участник.
sentence~form~Исправь: She have been waiting.~She has been waiting.~Согласуется has, а не been.
sentence~form~Исправь: We have being working.~We have been working.~Нужен been, не being.
sentence~form~Исправь активную форму: He has been wrote notes.~He has been writing notes.~В активном Perfect Continuous используется -ing.
sentence~form~Сделай вопрос: They have been drawing.~Have they been drawing?~Have переносится перед they.
sentence~form~Сделай вопрос: She has been reading.~Has she been reading?~Has перед подлежащим, been reading сохраняется.
sentence~form~Отрицание We have been waiting с have not или haven’t.~We have not been waiting.|We haven’t been waiting.~Not после have, не после been.
sentence~form~Собери: you / been / how long / have / studying~How long have you been studying?~Wh-группа перед have, затем you been studying.
sentence~form~Исправь: Did he has been working?~Has he been working?~Вопрос строится через has, не did.
text~form~На Has Mina been helping? ответь положительно и отрицательно.~Yes, she has. No, she hasn’t.~В кратком ответе достаточно has/hasn’t.
text~form~Разложи They have been building по функциям частей.~They — подлежащее; have — согласование и связь с сейчас; been — V3 be; building — деятельность в -ing.~Не считать been отдельным основным прошедшим действием.`,'','Формы'),
 bank(id,'contrast','Процесс, результат и состояние','practice',`short~meaning~Подсчёт трёх готовых писем: I have written / have been writing three letters. Выбери форму для результата.~have written~Simple выделяет завершённое количество в заданном контексте.
short~meaning~Обычное знание: I have known / have been knowing her for years.~have known~Know как состояние обычно Simple.
short~meaning~Владение: She has had / has been having this bag since school.~has had~Have в значении владения, не деятельность.
short~evidence~They have been fixing the door. Она точно исправна? Yes/no.~no~Описание занятия не подтверждает его успешный итог.
short~evidence~He has been reading the guide. Доказано, что дочитал? Yes/no.~no~Чтение как деятельность не сообщает завершение.
short~meaning~I’m resting now; I’ve been carrying boxes. Continuous здесь невозможен, потому что сейчас отдых? Yes/no.~no~Недавняя деятельность может объяснять нынешнее состояние.
short~meaning~Every evening for a month означает деятельность без единого перерыва? Yes/no.~no~Это повторные эпизоды, не непрерывность.
short~evidence~I haven’t been sleeping well. Это обязательно «совсем не спал»? Yes/no.~no~Отрицание относится к качеству сна.
text~meaning~Сравни I’m drawing / I’ve been drawing / I’ve drawn two maps.~Текущий процесс / деятельность до сейчас / два законченных рисунка.~Разные задачи сообщения, не три несовместимых факта.
text~meaning~Объясни допустимость I’ve worked here for a year и I’ve been working here for a year.~Обе формы возможны; Simple сообщает факт, Continuous выделяет деятельность/текущий период.~Не делать один вариант ошибкой только из-за for.
text~evidence~She has checked five entries. Можно ли заключить, что все пять записей без ошибок?~Нет, проверка завершена для пяти записей, но могла выявить ошибки.~Завершение проверки не равно положительному результату.
text~meaning~Почему having lessons возможно, а having a bike обычно нет в этой форме?~Первое занятие, второе владение. Обычно I’ve been having lessons / I’ve had a bike.~Выбор зависит от значения have.
text~evidence~Стол покрыт краской. Доказывает ли это, кто красил и закончил ли работу?~Нет, нужны сведения об исполнителе и результате; следы сами не заполняют их.~Не назначать автора по внешнему виду.
text~message~Сообщи один процесс и два отдельных результата вымышленной работы.~I’ve been sorting photos. I’ve labelled two folders and removed three duplicates.~Количество и завершённые шаги заявлены отдельно.
text~meaning~Объясни I haven’t been working here long: работа здесь полностью отрицается?~Нет, в обычном смысле отрицается большой срок, человек работает здесь недавно.~Учитывать слово long и область отрицания.
text~message~Составь вопрос, если неясно, закончил ли собеседник недавно описанную деятельность.~Have you finished it, or are you still working on it?~Не выводить ответ из одной Continuous-формы.`,'','Смысл'),
 bank(id,'time','Период, начало и временная рамка','practice',`short~time~I’ve been practising ___ six months. For/since?~for~Шесть месяцев — длительность.
short~time~We’ve been waiting ___ 10:15. For/since?~since~Часы задают точку начала.
short~time~She’s been helping ___ the club opened. For/since?~since~Придаточное называет начальное событие.
short~time~Подчеркни закрытое прошлое: I worked / have been working last Thursday. Напиши worked/have been working.~worked~Last Thursday задаёт закрытую рамку действия.
short~time~Since yesterday допускает связь до сейчас? Yes/no.~yes~Since превращает дату в начало открытого периода.
short~time~For всегда требует Continuous? Yes/no.~no~Состояния и другие временные формы также допускают for.
sentence~time~Исправь длительность: I’ve been learning since three weeks.~I’ve been learning for three weeks.~Для длины периода нужен for.
sentence~time~Исправь начало: We’ve been waiting for noon.~We’ve been waiting since noon.~Здесь noon задан как начало; waiting for noon имело бы другой смысл.
text~time~Сравни I was writing at eight / I’ve been writing since eight.~Процесс в прошлом моменте / период от восьми до сейчас.~Не одно и то же положение наблюдателя во времени.
text~time~Почему recently не выбирает само Simple или Continuous? Дай пару.~I’ve recently finished a map. I’ve been drawing recently. Выбор зависит от результата или занятия.~Обе формы нормативны при соответствующей задаче.
text~time~Сейчас 12:00, вы начали в 10:30 и всё ещё работаете. Дай since и for без изменения фактов.~We’ve been working since half past ten. We’ve been working for an hour and a half.~Длительность вычислена по указанной рамке.
text~message~Задай вопрос о длительности и другой о количестве готовых объектов.~How long have you been working? How many pages have you finished?~Вопросы требуют разных свидетельств.`,'','Время'),
 bank(id,'sounds','Служебные слова и смысловой акцент','speaking',`short~sound~She’s been drawing: ’s означает has или is?~has~Перед been в этой цепочке сокращается has.
short~sound~Been может звучать /bɪn/ и /biːn/? Yes/no.~yes~Оба нормативных произносительных варианта допустимы.
speech~sound~Произнеси I’ve been reading / I’m reading, партнёр назови услышанную форму.~I’ve been reading since lunch. I’m reading now.~Различить вспомогательную цепочку на реальном аудио.
speech~form~Партнёр спрашивает Have you been waiting? Ответь кратко от своего лица и добавь длительность.~Yes, I have. I’ve been waiting for twenty minutes.~Переключить you → I, не потерять have.
speech~meaning~Передай один процесс и один измеримый результат; слушатель пересказывает количество.~I’ve been making labels. I’ve finished twelve.~Число готового должно быть ясно, не выводиться из времени.
speech~sound~Произнеси haven’t been sleeping WELL так, чтобы слушатель не решил, что сна совсем не было.~I have slept, but I haven’t been sleeping well.~Качество оценивается по всей фразе и записи.
speech~message~Партнёр не расслышал for thirteen minutes или thirty. Уточни число в полной фразе.~Thirty minutes, half an hour. I’ve been waiting for half an hour.~Коммуникативное уточнение, не просто повтор одной цифры.
speech~time~Объясни начало периода с since, партнёр спроси о перерывах.~I’ve been practising since May. Do you practise every day?~Continuous не обещает непрерывности.
text~sound~ASR записал she is been вместо she has been. Можно ли сразу оценить произношение?~Нет, нужно прослушать звук; ASR мог неверно восстановить сокращение.~Транскрипт не заменяет слуховую оценку.
speech~message~Дай короткое обновление работы; партнёр задаёт неожиданный вопрос о результате.~I’ve been checking the layout. Have you checked the small screen yet?~Реальный вопрос и ответ, не только чтение образца.`,'','Произношение'),
 bank(id,'reading','Чтение: работа над доступным путеводителем','reading',`short~evidence~Как долго группа работает над путеводителем? Weeks: цифрой.~3~В тексте three weeks.
short~evidence~Кто сравнивает описания маршрутов?~Elin~Elin отвечает за сравнение описаний.
short~evidence~Сколько маршрутов Elin проверила полностью? Цифрой.~4~Четыре полностью проверенных маршрута названы отдельно.
short~evidence~Какой маршрут ещё не проверен? Riverside/hill?~riverside~Riverside route остаётся непроверенным.
short~evidence~Как долго Tom знает район? Years: цифрой.~10~He has known the area for ten years.
short~evidence~Tom закончил все рисунки: true/false/not stated?~false~Два рисунка готовы, остальные прямо названы unfinished.
short~evidence~Группа работает каждую минуту трёх недель: true/false/not stated?~false~Участники встречаются дважды в неделю и делают перерывы.
short~evidence~В момент разговора они сортируют карточки: true/false/not stated?~false~Они отдыхают после сортировки.
short~evidence~Непроверенный маршрут опасен: true/false/not stated?~not stated~Отсутствие проверки не доказывает опасность или безопасность.
short~evidence~Готовая публикация уже выпущена: true/false/not stated?~false~Команда прямо говорит, что руководство ещё не опубликовано.
text~meaning~Объясни, зачем текст использует been comparing и checked four routes отдельно.~Первое описывает занятие, второе число завершённых проверок.~Не считать весь путеводитель готовым по длительности.
text~evidence~Какие сведения о причинах мокрой дорожки отсутствуют?~Не установлено, был ли дождь или дорожку поливали.~Наблюдение не доказывает одну причину.
text~message~Составь обновление из 4 предложений: процесс, результат, незавершённое, следующий вопрос.~They’ve been preparing a guide. Elin has checked four routes. The riverside route is still unchecked. When can they inspect it?~Опирайся только на текстовые факты.
text~time~Почему has known for ten years не заменено на has been knowing?~Know здесь длительное состояние, обычно Perfect Simple.~For не требует Continuous.`,
 `A neighbourhood group has been preparing a walking guide for three weeks. The guide is for people who want clear directions and information about places to rest. The members meet twice a week, and they also do small tasks at home. They are not working on it every minute. Each person has a different responsibility, and the organiser wants updates that separate time spent from results achieved.

Elin has been comparing the written directions with the streets themselves. She has fully checked four routes and corrected six unclear instructions. She has not checked the riverside route yet because she needs another volunteer to go with her. That does not mean the route is unsafe; it means its details are still unverified. The group should not label it safe or unsafe without the relevant information. A second person will read Elin's notes before any route appears in the final guide.

Tom has known the area for ten years. He has been drawing small maps during the project, and he has finished two of them. The remaining maps are unfinished. He enjoys the work, but he says that knowing a neighbourhood does not automatically make every drawing accurate. Yesterday he spent an hour comparing one map with a street sign. That hour belongs to yesterday, while his work on the whole guide continues into the present week.

When the organiser visits, the volunteers are taking a break. Their table is full of cards because they have been sorting information about benches and bus stops. The activity has just stopped, but it explains the scene now. Outside, a path looks wet. Someone asks whether it has been raining. Nobody in the room knows the cause; a caretaker may have washed the path. The wet surface alone does not settle that question.

The guide has not been published. Before publication, the group still needs to check the riverside route, finish the maps and ask two new readers to try the directions. The organiser thanks the volunteers for their effort but does not turn three weeks of activity into a claim that the whole guide is complete. The next update will include both progress and the limits of what the team can currently confirm.`, 'Чтение'),
 bank(id,'listening','Аудирование: обновление мастерской','listening',`short~evidence~Кто оставляет обновление?~Sana~Говорящая называет себя Sana.
short~time~С какого времени Sana работает? HH:MM.~09:20|9:20~Twenty past nine — 09:20 в утреннем контексте.
short~time~Сейчас 10:50. Сколько минут прошло с начала? Цифрой.~90~От 09:20 до 10:50 полтора часа, 90 минут.
short~evidence~Сколько готовых табличек названо? Цифрой.~7~Seven finished signs, не все двенадцать.
short~evidence~Сколько нужно всего? Цифрой.~12~The group needs twelve signs.
short~evidence~Надписи на всех семи уже проверены: true/false/not stated?~false~Проверили пока только первые три.
short~evidence~Говорящая сейчас режет картон: true/false/not stated?~false~Она остановилась для сообщения.
short~evidence~Ясно, почему перестала работать лампа: true/false/not stated?~false~Причина прямо названа неизвестной.
text~meaning~Почему been making допустимо, хотя Sana сейчас говорит, а не делает табличку?~Недавняя деятельность связана с текущим результатом и может быть прервана сейчас.~Не требовать действия в секунду речи.
text~evidence~Назови разницу между семью готовыми табличками и тремя проверенными.~Семь изготовлены, но только три проверены на правильность надписей.~Создание не равно проверке качества.
text~message~Ответь на просьбу о дополнительной проверке и задай вопрос о непроверенных табличках.~I can check the remaining signs. Which three have you checked already?~Реальный статус не заменяется обещанием.
text~evidence~Можно ли утверждать, что неизвестный человек сломал лампу?~Нет, причина неисправности неизвестна; человека не называют.~Не добавлять виновного без данных.`,
 `Hi, this is Sana at the community workshop. I have been making direction signs since twenty past nine this morning. It is ten fifty now, so I have been working for an hour and a half, with a short break for water. We need twelve signs for the exhibition. I have finished making seven, but I have checked the wording on only the first three. Please do not tell the organiser that all seven have passed the final check.

I am not cutting card at this moment. I have stopped to send this update and ask for help. Could someone read the remaining signs against the route list? I have been looking at the same words for a long time, and another reader may notice something that I missed. The table lamp has also stopped working. I do not know why. It would be wrong to say that a particular person damaged it just because they were near the table earlier.

For now, I can report seven completed signs and three checked sets of wording. The other five signs still need to be made. We have not tested the full route with visitors yet. Please keep those stages separate in the progress note so that the next volunteer knows exactly what remains to be done.`, 'Аудирование'),
 bank(id,'production','Письмо и рабочий диалог','writing',`text~message~Напиши 4 предложения о вымышленном занятии: процесс, длительность, число завершённых шагов, неизвестное.~We’ve been making a guide for two weeks. We’ve checked three sections. We haven’t checked the pictures. We don’t know whether every label is clear.~Разные виды свидетельств, не отчёт о настоящем ученике.
text~form~Исправь: She have been work. We have being waiting. How long you have been reading?~She has been working. We have been waiting. How long have you been reading?~Согласование, been, -ing и порядок вопроса.
text~message~Напиши 130–170 слов обновления вымышленного проекта: процесс до сейчас, for/since, измеримый результат, ограничение качества и вопрос партнёру.~Our club has been preparing a small picture guide for new visitors for three weeks. I have been checking the descriptions since Monday, and I have completed the first four pages. Each page now has a clear title and a short example. However, completing a page is not the same as proving that every visitor can understand it. We have not tried the guide with someone who is completely new to the building. Two volunteers have been drawing maps, but only one map is ready for review. We are taking a break now, so nobody is drawing at this exact moment. Could you read one page and tell us which direction is unclear? We would like to record your questions before making changes. The next update will separate finished pages, checked information and tasks that still need an independent reader.~130–170 слов; минимум один процесс, результат и ограничение; вопрос не заменяет ответ партнёра.
text~message~Напиши 130–170 слов о вымышленном освоении практического навыка: повторные занятия, состояние в Simple, пауза, достигнутое и непроверенное.~I have been learning to make simple wooden boxes for two months. I have known the tutor for several years, but practical work is new to me. We meet once a week, and I practise small steps between meetings when I have suitable materials. This does not mean that I work without breaks. I have finished two small boxes so far. One opens and closes smoothly, while the second still needs an independent check. Today I am resting because I have been measuring and drawing plans all morning. I have not started cutting the next set of pieces yet. My main difficulty is describing the measurements clearly to a partner. Could we practise that before the next practical task? I want to report what I can actually do, not claim that two months of attendance have made me an expert.~130–170 слов; know в Simple, практика не равна мастерству, собственные факты вымышлены явно.
text~message~Напиши 130–170 слов сообщения о вымышленной проверке сайта: деятельность, число экранов, незакрытая проблема, пауза и просьба уточнить результат.~We have been reviewing the club website since the beginning of the week. I have been checking how the pages look on a small screen, and I have reviewed five pages so far. Two headings were difficult to read, so I changed their spacing. I have not checked every form or every browser. The fact that I have spent several evenings on the site does not prove that all its problems are solved. At the moment I am writing this update rather than testing a page. Could another volunteer try the registration form and describe what happens after submission? Please report the actual result, including any message that appears. We should keep successful checks separate from work that is still in progress. I will continue with the remaining pages after we compare our notes and agree on the next priority.~130–170 слов; работа, конкретный результат, предел покрытия, просьба без выдуманного успеха.
text~time~Составь два вопроса к партнёру: начало занятия и сколько предметов он закончил.~When did you start? How many items have you finished?~Первый вопрос о прошлом старте, второй о результате до сейчас.
speech~message~Проведите короткий обмен статусами: процесс, результат, препятствие; партнёр задаёт How long…? и ещё один вопрос.~I’ve been sorting the notes. I’ve labelled three folders. Which folder is still unclear?~Настоящие ответы, не взаимное чтение монологов.
speech~meaning~Партнёр делает вывод «ты работаешь час, значит закончил». Уточни, что действительно готово.~I’ve been working for an hour, but only the first section is complete.~Не скрывать ограничение результата.
text~meaning~Дай два нормативных варианта с live и объясни, что известно в обоих.~I’ve lived here for two years. I’ve been living here for two years. В обоих период связан с сейчас, акцент отличается.~Не приписывать обязательную дату будущего переезда.
text~evidence~Исправь необоснованный вывод The floor is wet, so Sam has been washing it.~The floor is wet, but we don’t know who caused that or how.~Следы не доказывают конкретного исполнителя.
text~message~Разбей своё длинное обновление на 3 части: деятельность, результат, неизвестное. Добавь точный вопрос.~I’ve been comparing notes. I’ve resolved two differences. I’m not sure about the date. Which source gives the correct one?~Структура помогает слушателю, но не заменяет реальные сведения.
text~message~После обратной связи сохрани исходник и исправленную версию, объяснив 2 реальные правки.~I changed have been knowing to have known. I added a separate sentence about the number of completed tasks.~Сохранять действительные исправления, не выдумывать отзыв.`,'','Письмо и диалог'),
 bank(id,'review','Смешанное и отложенное применение','review',`short~form~The team members ___ been practising. Have/has?~have~Множественное members требует have.
short~form~I’ve been ___ a new route. (plan)~planning~Plan удваивает n перед -ing.
short~time~We’ve been here ___ last week. For/since?~since~Last week как начало периода после since.
short~meaning~I’ve known / been knowing that word for years: выбери known/been knowing.~known~Know как обычное состояние в Simple.
sentence~form~Исправь: Has they been waiting?~Have they been waiting?~They согласуется с have.
sentence~time~Исправь длину периода: She’s been working since two hours.~She’s been working for two hours.~Для длительности two hours нужен for.
text~meaning~Почему Continuous не запрещает короткую паузу на чай?~Форма может описывать деятельность за период до сейчас, а не каждую секунду.~Контекст определяет непрерывность и текущую паузу.
text~evidence~Проверяли программу два дня. Какое свидетельство нужно для утверждения «ошибка устранена»?~Воспроизведение прежнего случая и результат проверки после изменения, а не только срок работы.~В языковом отчёте процесс не заменяет подтверждение результата.
text~time~Сравни last month и since last month в собственной паре.~I worked there last month. I’ve been working there since last month.~Закрытый период и начало периода до сейчас.
speech~sound~Партнёр задаёт два вопроса с have/has; ответь от нужного лица и уточни результат.~Have you been checking it? Yes, I have, but I haven’t finished.~Реальное прослушивание, правильная смена участников.
text~message~Через 3 дня без страницы напиши новый отчёт из 7 предложений: деятельность, начало, длительность, два результата, неизвестное и вопрос.~We’ve been preparing a game. We started on Monday. We’ve been working for three days. We’ve made ten cards. We’ve written the rules. We haven’t tested them. Could you try the game?~Новый контекст, а не переписанный предыдущий абзац.
speech~message~Через 7 дней партнёр даёт новую задачу; сообщи процесс и результат, ответь на непредвиденный вопрос о времени.~I’ve been checking the route since lunch. Which part have you finished?~Перенос оценивается отдельно, дата не подтверждает mastery.`,'','Повторение')],
 tests:[exam(id,'a',`short~form~The artist ___ been sketching. Have/has?~has~Единственное artist согласуется с has.
short~form~My friends ___ been collecting photos. Have/has?~have~Множественное friends согласуется с have.
short~form~We have ___ discussing the plan. Been/being?~been~V3 be в Perfect — been.
short~form~She has been ___. (swim)~swimming~Короткая ударная основа удваивает m.
short~time~He’s been helping ___ February. For/since?~since~Месяц — точка начала периода.
short~time~I’ve been practising ___ nine days. For/since?~for~Девять дней — длительность.
short~meaning~Обычное владение: I have owned / have been owning it for years.~have owned~Own как состояние обычно Simple.
short~meaning~Четыре завершённых рисунка: I have drawn / have been drawing four pictures. Нужен результат.~have drawn~Задан подсчёт завершённых объектов.
short~evidence~We’ve been repairing the frame. Успех ремонта доказан? Yes/no.~no~Деятельность не доказывает исправность рамы.
short~sound~He’s been waiting: ’s = has/is?~has~Been указывает на has в этой цепочке.
short~form~Have you been studying? Краткий ответ: Yes, I ___.~have~В ответе от I сохраняется have.
short~time~Закрытый вчерашний вечер: I practised / have been practising yesterday evening. Выбери practised/have been practising.~practised~Действие помещено в закрытое прошлое.
sentence~form~Исправь: He have been calling.~He has been calling.~С подлежащим he используем has, затем been и -ing.
sentence~form~Сделай вопрос: She has been designing a poster.~Has she been designing a poster?~Has перед she, -ing сохраняется.
sentence~form~Отрицание They have been singing с have not или haven’t.~They have not been singing.|They haven’t been singing.~Отрицание not ставится после первого вспомогательного have.
sentence~form~Собери: been / how long / has / he / waiting~How long has he been waiting?~Wh + has + he + been + waiting.
text~meaning~Почему I’m sitting down now; I’ve been walking допустимо?~Ходьба была недавней деятельностью и могла прекратиться; сейчас человек отдыхает.~Не требовать одновременности с моментом речи.
text~evidence~I’ve checked three pages. Что ещё нужно узнать перед утверждением «три страницы без ошибок»?~Что именно обнаружила проверка и были ли проблемы исправлены.~Завершённая проверка не гарантирует положительный результат.
text~message~Напиши 130–170 слов о вымышленной подготовке выставки: процесс, период, два измеримых результата, неподтверждённое и вопрос.~Our group has been preparing a small exhibition for a month. I have been organising the labels since the beginning of this week, and I have finished the text for six objects. I have also checked the spelling of four artists' names against the information they sent us. Two names still need confirmation, so those labels are not ready to print. The volunteers have been discussing the order of the objects, but they have not agreed on the final arrangement. We are taking a break now, which does not change the fact that the preparation has been continuing over several weeks. Could you look at the entrance notice and tell us whether the opening time is clear? We want a fresh reader's opinion before printing it. In our next update, we will list finished items separately from decisions and checks that are still pending.~130–170 слов; процесс/результат/неизвестное разделены, правильные формы и самостоятельная связность.
speech~message~Обменяйтесь обновлениями о новой задаче: партнёр спрашивает о длительности и количестве; ответь на оба.~I’ve been making cards for two hours. I’ve finished nine. What remains?~Живое взаимодействие и аудио для оценки.
speech~sound~Произнеси утвердительное и отрицательное обновление с have been; слушатель пересказывает статус.~I’ve been checking it. I haven’t been checking the final section.~Не потерять отрицание, проверить на слух.
text~time~Почему for a year не заставляет выбрать Continuous в I’ve known her for a year?~For задаёт длительность; know в нейтральном значении состояния обычно Simple.~Отдельно выбирать смысл глагола и временную опору.
text~meaning~Дай оба допустимых варианта с live для одного года до сейчас.~I’ve lived here for a year. I’ve been living here for a year.~Принять нормативные варианты без выдуманного срока окончания.
text~evidence~Мокрая куртка у человека: можно ли сразу подтвердить He has been running in the rain?~Нет, возможны другие причины; нужны его слова или другие данные.~Следствие не доказывает точное действие.`),
 exam(id,'b',`short~form~The helpers ___ been arranging chairs. Have/has?~have~Множественное helpers требует have.
short~form~The machine ___ been making a noise. Have/has?~has~Единственное machine требует has.
short~form~He has ___ looking for a receipt. Been/being?~been~В этой цепочке требуется been.
short~form~I have been ___. (sit)~sitting~Sit удваивает t перед -ing.
short~time~We’ve been working ___ the meeting ended. For/since?~since~Событие задаёт начальную точку.
short~time~She’s been learning ___ half a year. For/since?~for~Half a year — длина периода.
short~meaning~Владение столом: We have had / have been having it since winter.~have had~Have как владение обычно Simple.
short~meaning~Пять готовых коробок: She has made / has been making five boxes. Выбери результат.~has made~Simple выделяет завершённое число изделий.
short~evidence~He hasn’t been reading much lately. Значит, не прочитал ни слова? Yes/no.~no~Отрицается большой объём, не любое чтение.
short~sound~Been только /biːn/, вариант /bɪn/ ошибочен? Yes/no.~no~Оба нормативных варианта произношения встречаются.
short~form~Has Jo been helping? Краткий ответ о ней: No, she ___.~hasn’t|has not~Краткий ответ сохраняет отрицательное has.
short~time~Since last Tuesday связывает период с настоящим? Yes/no.~yes~После since дата может быть началом периода до сейчас.
sentence~form~Исправь: We has been learning.~We have been learning.~We согласуется с have.
sentence~form~Сделай вопрос: They have been searching the room.~Have they been searching the room?~Have перед they.
sentence~form~Отрицание He has been painting с has not или hasn’t.~He has not been painting.|He hasn’t been painting.~Not ставится после has.
sentence~form~Исправь: Where you have been working?~Where have you been working?~В самостоятельном вопросе have перед you.
text~meaning~Объясни разницу I’ve been reading all afternoon / I’ve read the whole report.~Деятельность за период против полного чтения конкретного отчёта.~Первая форма сама не доказывает завершение.
text~evidence~Человек говорит, что ремонтирует стул два дня. Можно ли объявить стул безопасным для использования?~Нет, нужна проверка результата; длительность работы не доказательство исправности.~Это языковой вывод о свидетельстве, не техническая инструкция ремонта.
text~message~Напиши 130–170 слов о вымышленной подготовке клубного сайта: деятельность, длительность, два результата, непроверенные части и просьба.~We have been improving the club website for two weeks. I have been rewriting the visitor information since Thursday, and I have finished three short pages. I have also added clear headings to the timetable. These changes describe completed work, but they do not prove that the whole site is easy to use. We have not tested the contact form on a phone, and we do not know whether every link opens the expected page. At the moment I am taking notes rather than editing the site because I have been comparing several versions of the text. Could you try to find the next meeting date without asking me for help? Please describe the steps you take and any point that feels confusing. We will use that evidence to choose the next change instead of treating two weeks of activity as proof that everything is finished.~130–170 слов; процесс, результат, качество и следующая проверка раздельны.
speech~message~Партнёр слышит been practising и спрашивает, что уже получается самостоятельно. Ответь и уточни его критерий.~I’ve practised the introduction, but I still need help with questions. What should I demonstrate?~Не подменять качество длительностью; нужна реакция на вопрос.
speech~sound~Произнеси She’s working / She’s been working с контекстом; слушатель раскрывает ’s.~She is working now. She has been working since breakfast.~Восстановить is/has по полной услышанной цепочке.
text~time~Сейчас 16:00; начало 14:45, работа продолжается. Дай for и since.~I’ve been working for an hour and a quarter. I’ve been working since 14:45.~Оба описания сохраняют 75 минут и начальную точку.
text~meaning~Почему I’ve worked here и I’ve been working here с for two years могут оба быть верными?~Возможны разные акценты на факте и деятельности; длительность не запрещает ни одну форму.~Не считать Simple обязательным доказательством прекращения.
text~evidence~I’ve been trying to solve it. Доказывает ли это окончательную неудачу?~Нет, это процесс попыток без сообщения финального результата.~Не приписывать неуспех только по try.`)]};

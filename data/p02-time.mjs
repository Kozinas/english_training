import {bank,exam,examples,goal} from './unit-tools.mjs';

export default {
 id:'P02-time',topic:'P02',title:'Время, календарь и однозначная договорённость',prerequisites:['P02-numbers'],references:['numbers-time'],
 goals:[goal('clock','Читать время и различать 12- и 24-часовую запись','practice'),goal('calendar','Называть дни, месяцы, даты и порядковые числа','practice'),goal('schedule','Понимать расписание и устранять неоднозначность','reading')],
 explanation:[
 {title:'Время цифрами: простой надёжный способ',text:'Для повседневной речи можно назвать час, затем минуты: nine twenty — 9:20, nine oh five — 9:05. Zero вместо oh также возможно. Для ровного часа подходит nine o’clock, но не nine twenty o’clock. Двенадцатичасовая запись повторяется дважды за сутки: 7:00 a.m. — утро, 7:00 p.m. — вечер. В 24-часовой записи 19:00 называют nineteen hundred в некоторых формальных контекстах или переводят в seven p.m. в обычном разговоре. Не добавляй p.m. к nineteen: это смешивает системы. В этой подтеме закрытые задания явно указывают нужный формат; в свободной речи принимаются точные нормативные варианты.'},
 {title:'Past и to: откуда отсчитываем минуты',text:'Past означает минуты после названного часа: ten past six — 6:10. To означает минуты до следующего названного часа: ten to six — 5:50. Ошибка обычно возникает, когда ученик оставляет час six и механически приписывает 50. Нарисуй часы или линию: 5:50 → ещё десять минут → 6:00. Quarter — четверть часа, 15 минут: a quarter past six = 6:15, a quarter to six = 5:45. Half past six = 6:30, полчаса после шести. Русское «половина седьмого» нельзя переводить как half past seven: это уже 7:30. В UK встречается half six, но для начала и международного общения полная форма half past six яснее.'},
 {title:'Полдень, полночь и граница дня',text:'12 p.m. обычно означает полдень, 12 a.m. — полночь. Даже носители могут неверно прочитать такую договорённость, поэтому в важном сообщении выбирай noon, midnight или однозначное 24-часовое время. Полночь должна иметь дату: 00:00 on 6 May — начало 6 мая, не конец этого дня. Для удалённой встречи времени без часового пояса недостаточно. Не вычисляй смещения по памяти и не считай свой пояс подразумеваемым. Укажи UTC или согласованное название пояса и дату, либо спроси Which time zone? Практика ниже не требует актуального пересчёта летнего времени.'},
 {title:'Календарный словарь без пропущенных частей',text:'Все семь дней недели и двенадцать месяцев с IPA находятся в приложении. Они пишутся с заглавной буквы: Tuesday, September. В Wednesday не произносится отдельный слог wed-nes: ориентир /ˈwenzdeɪ/. Tuesday имеет нормативные варианты произношения UK и US. Различай day — день, date — дата, month — месяц, year — год. В расписании weekday обычно рабочий день с понедельника по пятницу, weekend — выходные; конкретный рабочий график зависит от человека. Today, tomorrow, yesterday и next Friday зависят от момента разговора. Для сообщения, которое прочитают позднее, полезно дополнить относительную дату конкретной.'},
 {title:'Порядковые формы и чтение даты',text:'Количественное five отвечает «сколько?», порядковое fifth — «какой по счёту?». Особые основы first, second, third, fifth, eighth, ninth, twelfth; для десятков меняется y → ie: twentieth, thirtieth. В составном числе меняется последняя часть: twenty-first, thirty-second. Для всех дат месяца 1–31 формы выписаны полностью. Сокращения выбирают по последней части числа, но 11, 12, 13 — исключение: 11th, 12th, 13th; затем 21st, 22nd, 23rd. Дата 5 June читается the fifth of June, а June 5 — June fifth. Обе модели допустимы. Годы часто делят на пары: 1997 — nineteen ninety-seven; 2005 — two thousand (and) five; 2028 — twenty twenty-eight или two thousand (and) twenty-eight.'},
 {title:'Письменная дата и предлог',text:'06/07 без указанного соглашения может означать 6 июля или 7 июня. Не угадывай страну по имени собеседника. Напиши 6 July либо согласуй формат YYYY-MM-DD. At ставит событие в точку времени: at 8:30, at noon. On используется для дня и даты: on Friday, on 6 July. In — для месяца, года и обычных частей дня: in July, in 2026, in the morning; но at night. Для конкретного утра дня — on Monday morning. Перед next Monday, this Friday, tomorrow обычный предлог не нужен. Это базовая карта, не весь английский раздел предлогов: расширение и исключения изучаются дальше на контекстах.'},
 {title:'От таблицы к договорённости',text:'Хорошее сообщение о встрече включает событие, дату, время, пояс при необходимости и изменение, если оно было. На сообщение “Let’s meet at 8” полезно спросить Eight in the morning or in the evening? Which date and time zone? Подтверждение должно отражать окончательные данные, а не устаревший черновик. На этой странице есть отдельные тексты: расписание для чтения и телефонное изменение для слуха. Не просматривай аудиотекст до первой попытки. Затем составь собственное приглашение и разыграй перенос с партнёром. Длительность работы не определяет успешность: важна точность договорённости и способность повторить её на новых данных.'}
 ],
 examples:examples(`It is nine oh five.~Сейчас 9:05.~Oh обозначает нуль минутного десятка; nine five менее ясно.
The call is at eight o’clock.~Звонок в восемь ровно.~O’clock добавляется к целому часу.
Ten past four: 4:10.~Десять минут после четырёх.~Past отсчитывает от уже наступившего часа.
Ten to four: 3:50.~Без десяти четыре.~To направлено к следующему часу, поэтому текущий час — три.
A quarter past two; a quarter to two.~2:15; 1:45.~Одна и та же quarter, разные направления отсчёта.
Half past seven: 7:30.~Половина восьмого.~Английская форма называет прошедший час, русская — следующий.
The session is at 18:20, or six twenty p.m.~Занятие в 18:20.~Одна точка времени в двух системах записи.
At noon, not at midnight.~В полдень, не в полночь.~Слова устраняют частую путаницу 12 a.m./p.m.
On Wednesday, in September, at 10:00.~В среду, в сентябре, в 10:00.~Предлог выбирается по типу временного выражения.
On Tuesday morning; in the morning.~Во вторник утром; утром.~Конкретный день меняет in на on.
Next Thursday, not on next Thursday.~В следующий четверг.~Перед next в этой конструкции обычный предлог не нужен.
The twenty-third of April; April twenty-third.~Двадцать третье апреля.~UK-порядок day-month и US-порядок month-day допустимы.
The eleventh: 11th, not 11st.~Одиннадцатый.~11–13 используют th независимо от последней цифры.
Do you mean 7 August or July 8?~Вы имеете в виду 7 августа или 8 июля?~Уточнение записи 07/08 не предполагает формат заранее.
The call is on 14 May at 09:30 UTC, not 09:15.~Звонок 14 мая в 09:30 UTC, не в 09:15.~Сложный пример объединяет дату, окончательное время, пояс и исправление.
Could you confirm the date and time zone?~Подтвердите дату и часовой пояс, пожалуйста.~Нельзя восстановить отсутствующие данные из одного числа.`),
 banks:[
 bank('P02-time','practice','Часы, порядковые числа и предлоги','practice',`short~clock~Запиши nine oh seven утром как HH:MM.~09:07~Oh обозначает нуль; формат HH:MM требует двух цифр часа.
short~clock~Запиши ten past five утром как HH:MM.~05:10~Десять минут после пяти, не до пяти.
short~clock~Запиши ten to five утром как HH:MM.~04:50~До пяти ещё десять минут: текущий час четыре.
short~clock~Запиши quarter past eight вечером как HH:MM (24 часа).~20:15~Восемь вечера — 20, quarter past добавляет 15 минут.
short~clock~Запиши quarter to eight вечером как HH:MM (24 часа).~19:45~До 20:00 четверть часа; 19:45, не 20:45.
short~clock~Запиши half past six утром как HH:MM.~06:30~Полчаса после шести; по-русски половина седьмого.
short~clock~Выбери a.m. или p.m. для 21:10.~p.m.|pm~Вечерняя половина суток: nine ten p.m.
short~clock~Какое слово однозначно означает полдень: noon или midnight?~noon~Noon — полдень, midnight — полночь.
short~clock~Выбери o’clock или — (ничего): seven thirty ___.~—|-|nothing~O’clock не добавляется после минут.
short~calendar~Напиши словами порядковое число 5th.~fifth~Five → fifth: меняются согласные основы.
short~calendar~Напиши словами порядковое число 9th.~ninth~Nine → ninth: конечная e исчезает.
short~calendar~Напиши словами порядковое число 12th.~twelfth~Twelve → twelfth; особое написание основы.
short~calendar~Напиши словами порядковое число 20th.~twentieth~Twenty → twentieth: y заменяется на ie перед th.
short~calendar~Напиши словами порядковое число 21st.~twenty-first~Меняется последняя часть составного числа.
short~calendar~Напиши суффикс порядкового 13: st, nd, rd или th.~th~Для 11, 12, 13 всегда th.
short~calendar~Напиши Wednesday по памяти по подсказке «среда».~Wednesday~Дни недели пишутся с заглавной буквы; автоматическая проверка регистра не оценивает.
short~calendar~Назови по-английски месяц после August.~September~September следует за August; названия месяцев с заглавной буквы.
short~schedule~Вставь предлог: ___ 7:45.~at~At используется для конкретной точки времени.
short~schedule~Вставь предлог: ___ Monday.~on~On ставит событие на определённый день.
short~schedule~Вставь предлог: ___ February.~in~In используется с названием месяца.
short~schedule~Вставь предлог: ___ Friday afternoon.~on~Есть конкретный день Friday, поэтому on, а не in.
short~schedule~Выбери on или —: ___ tomorrow.~—|-|nothing~Перед tomorrow обычный предлог on не нужен.
text~schedule~В сообщении написано 04/06 at 8. Сформулируй вопросы, которых не хватает для международной встречи.~Do you mean 4 June or April 6? Eight a.m. or p.m.? Which time zone?~Уточнены формат даты, половина суток и пояс; при необходимости спросить год.
text~calendar~Напиши 22 October двумя обычными английскими способами чтения, числа словами.~The twenty-second of October; October twenty-second.~В одном варианте the/of, в другом порядок month-day; не обязательное совпадение пунктуации.`),
 bank('P02-time','reading','Чтение: расписание и окончательная версия приглашения','reading',`short~calendar~On which day is the welcome session? Одно название дня.~Tuesday~Welcome session запланирована на Tuesday.
short~clock~What time does the welcome session begin? HH:MM.~09:10~Начало 09:10, не время завершения 09:40.
short~clock~What time does the welcome session end? HH:MM.~09:40~Окончание названо отдельно от начала.
short~clock~When does the reading group begin? HH:MM.~10:15~Reading group начинается в quarter past ten.
short~calendar~On which day is the practice call?~Thursday~Practice call назначен на Thursday, не на Tuesday.
short~clock~What is the final time of the practice call? HH:MM (24 часа).~15:45~Последнее сообщение меняет 15:15 на 15:45.
short~calendar~What month is the separate welcome event in?~November~Событие указано на 18 November, отдельно от недельной таблицы.
short~clock~What is the separate welcome event time? HH:MM.~12:00~Noon означает 12:00 дня.
short~schedule~Which time zone applies to the weekly online schedule?~UTC~Текст явно указывает UTC для недельного онлайн-расписания.
text~schedule~Почему нельзя пересылать первое приглашение на practice call без исправления?~It says 15:15, but the final time is 15:45 UTC.~Точно указано, какие данные устарели и чем заменены.
text~calendar~Перепиши неоднозначное 11/12, если организатор подтвердил December 11. Используй название месяца.~11 December|December 11~Свободная проверка по смыслу: ноябрь не подходит; два порядка допустимы.
text~schedule~Напиши подтверждение Thursday practice call и отдельный вопрос о дате этого четверга.~The practice call is on Thursday at 15:45 UTC. What is the calendar date?~Недельная таблица не сообщает конкретную дату четверга; её нельзя выдумывать.`,
 `Online study room — weekly schedule. All times in this weekly schedule are UTC. This table names weekdays, not calendar dates.
Tuesday: welcome session, 09:10–09:40. A session is one meeting, not a complete course topic. The reading group begins at a quarter past ten and ends at eleven.
Thursday: practice call, first invitation 15:15. Update from the organiser: “Please use 15:45 UTC for the practice call. The first invitation has the old time. The day is still Thursday.”
Friday: question time at 08:30, then an optional chat at 09:00. Optional means you may choose it; it does not replace unfinished course work.
There is also a separate welcome event on 18 November at noon UTC. No weekday is given for this event. Another draft says 11/12, but its organiser confirms December 11. Write the month in words when you forward that message. Before booking a real call from the weekly table, ask for the calendar date.`),
 bank('P02-time','listening','Аудирование: перенос звонка и уточнение даты','listening',`short~calendar~What day is the new call on?~Wednesday~Новый день Wednesday, старый — Monday.
short~clock~What is the new time? HH:MM (24 часа).~14:25~Two twenty-five in the afternoon = 14:25.
short~clock~What was the old time? HH:MM (24 часа).~14:05~Старая отметка two oh five, то есть 14:05.
short~schedule~What time zone is named?~UTC~Организатор явно называет UTC, а не местный пояс слушателя.
short~calendar~What month is the separate event in?~August~Подтверждено August third, не March eighth.
short~calendar~What is the day number of the separate event? Только цифры.~3~August third означает 3 августа.
short~clock~What time is the separate event? HH:MM (24 часа).~12:00~At noon = в полдень; это не midnight.
text~schedule~Какой вопрос остаётся задать о среде, если нужен полноценный календарный слот?~What is the date of that Wednesday?~Аудио не даёт календарную дату звонка; нельзя считать её известной.
text~schedule~Напиши сообщение из двух предложений: новое время звонка и старое время, которое больше не подходит.~The call is on Wednesday at 14:25 UTC. The old Monday time of 14:05 is no longer correct.~Оба времени и оба дня различены; отрицание должно относиться к старой версии.
text~calendar~Объясни, как в аудио снята неоднозначность 03/08.~The speaker says August third, not March eighth.~Назван месяц словами и противопоставлен второй возможный порядок.`,
 `Hi, this is Noor. There is a change to our practice call. It is now on Wednesday at two twenty-five in the afternoon, UTC. Please do not use the old time, Monday at two oh five in the afternoon. The new time is fourteen twenty-five UTC. Please ask me for the calendar date before you add it to your diary. There is a separate event on August third at noon UTC. The draft says zero three slash zero eight. I mean the third of August, not March eighth. Please write August in words. Can you read the two new arrangements back to me?`),
 bank('P02-time','production','Письмо, уточнение и договорённость с партнёром','writing',`text~schedule~Напиши приглашение: учебный звонок, 9 September, 16:40 UTC. Добавь просьбу подтвердить.~Our practice call is on 9 September at 16:40 UTC. Could you confirm?~Событие, дата, время, пояс и запрос сохранены; не нужно придумывать день недели.
text~clock~Объясни русскоязычному другу, почему half past nine — не 8:30. Приведи ещё одну пару.~It is 9:30: half an hour after nine. Half past two is 2:30.~Верно объяснено направление отсчёта; русское объяснение допустимо.
text~calendar~Напиши два предложения о вымышленных датах: birthday 2 May и course review 21 July. Прочти числа словами.~The birthday is on the second of May. The course review is on the twenty-first of July.~Используются порядковые формы и on; личную дату рождения сообщать не требуется.
text~schedule~Исправь сообщение “At next Friday in 8 p.m. on June” так, чтобы речь шла о следующей пятнице в восемь вечера. Лишний месяц убери.~Next Friday at 8 p.m.~Next без предлога, at для времени; в полноценной фразе может быть The call is.
text~schedule~Напиши связное письмо 5–7 предложений: два доступных времени, одна недоступная дата, пояс и просьба выбрать. Все данные вымышленные.~I am free on 6 May at 10:00 UTC. I am also free on 8 May at 14:30 UTC. I am not free on 7 May. Both options are online. Which date is better? Please confirm the time.~Варианты внутренне согласованы; размер текста служит практике связности, не таймеру.
speech~clock~Продиктуй 08:15, 08:45 и 20:30 двумя способами: цифровым и past/to. Партнёр записывает.~Eight fifteen / quarter past eight in the morning; eight forty-five / quarter to nine in the morning; eight thirty p.m. / half past eight in the evening.~Точны часы, направление и половина суток; слушатель не видит цифры заранее.
speech~calendar~Назови все дни недели, затем продиктуй партнёру три дня в другом порядке.~Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.~Сначала полнота набора, затем реальное узнавание без подсказки; акцентные варианты допустимы.
speech~calendar~Продиктуй даты 11 January, 23 March, 30 September. Партнёр возвращает их цифрами и месяцами словами.~The eleventh of January; the twenty-third of March; the thirtieth of September.~Сохранены порядковые формы, месяцы и смысл дат; не оценивать фонетику по одному транскрипту.
speech~schedule~Партнёр предлагает “Friday at seven”. Уточни дату, половину суток и пояс, затем подтверди полные данные.~Which Friday? Seven a.m. or p.m.? Which time zone? So, 17 July at 19:00 UTC?~Дата в образце вымышленная; реальная попытка должна опираться на ответ партнёра, не на угадывание.
text~schedule~После ролевой договорённости запиши окончательную версию и отдельно вопросы, оставшиеся без ответа.~The proposed time is 19:00 UTC. The date is not confirmed yet.~Не придумывать согласие партнёра; разделены подтверждённые и неизвестные сведения.`),
 bank('P02-time','review','Смешанное повторение календаря и времени','review',`short~clock~Запиши twenty to nine утром как HH:MM.~08:40~До девяти двадцать минут, значит сейчас 8:40.
short~clock~Запиши twenty past nine вечером как HH:MM.~21:20~Двадцать минут после 21:00.
short~calendar~Напиши 31st словами.~thirty-first~Порядковой становится последняя часть first.
short~calendar~Напиши 8th словами.~eighth~Eight + th даёт eighth с одним t перед h в конце.
short~calendar~Назови по-английски месяц перед March.~February~February расположен между January и March.
short~calendar~Какой английский день идёт после Thursday?~Friday~Порядок недели: Thursday → Friday.
short~schedule~Вставь предлог: ___ the evening.~in~Обычная часть суток без конкретного дня: in the evening.
short~schedule~Вставь предлог: ___ night.~at~At night — отдельное устойчивое сочетание.
text~schedule~Перепиши “Call 02/03 at 12” в виде вопросов, а не догадок.~Do you mean 2 March or February 3? Noon or midnight? Which year and time zone?~Запрошены существенные недостающие данные, не навязаны свои.
text~clock~Исправь “quarter to ten = 10:45” и объясни на линии времени.~Quarter to ten is 9:45; fifteen more minutes gives 10:00.~Восстановлен текущий час до следующего; объяснение может быть на русском.
speech~schedule~Согласуй новое время вымышленного звонка с партнёром; в конце оба повторите дату и время.~Let’s use 12 May at 11:20 UTC. / Yes, 12 May, 11:20 UTC.~Нужна взаимная проверка, а не две несвязанные монологические реплики.
text~calendar~Без таблицы выпиши 7 дней и 12 месяцев. Затем отметь трудные слова и исправь по приложению.~Monday–Sunday; January–December: сравни полный набор с приложением.~Проверить все 19 элементов, порядок, spelling и заглавные буквы; это открытое задание, не точное совпадение со строкой.`)
 ],
 tests:[exam('P02-time','a',`short~clock~Запиши five to seven утром как HH:MM.~06:55~Пять минут до семи: текущий час шесть.
short~clock~Запиши twenty past three вечером как HH:MM (24 часа).~15:20~Три после полудня — 15, past добавляет двадцать минут.
short~clock~Запиши half past eleven ночью до полуночи как HH:MM.~23:30~Полчаса после одиннадцати вечера, ещё до следующего дня.
short~clock~Выбери noon/midnight для 00:00 в начале указанной даты.~midnight~00:00 — начало суток, полночь, не полдень.
short~calendar~Напиши 3rd словами.~third~Third — особая порядковая основа от three.
short~calendar~Напиши 22nd словами с дефисом.~twenty-second~Меняется только последняя часть two → second.
short~calendar~Сократи «одиннадцатый» цифрами с суффиксом.~11th~Исключения 11–13 получают th, не суффикс последней цифры.
short~calendar~Напиши по-английски «воскресенье».~Sunday~Sunday — воскресенье; заглавную букву проверь отдельно.
short~calendar~Напиши по-английски «декабрь».~December~Название месяца December, не November.
short~schedule~Вставь at/on/in: The call is ___ 17 April.~on~Дата требует on; at для времени.
short~schedule~Вставь at/on/in: The course review is ___ 2028.~in~Для года без конкретного дня используется in.
short~schedule~Выбери on или —: ___ next Wednesday.~—|-|nothing~Перед next Wednesday обычный on не нужен.
text~schedule~Организатор пишет “Meet 05/09 at 6”. Напиши ответ с вопросами для однозначного международного звонка.~Do you mean 5 September or May 9? Six a.m. or p.m.? Which time zone and year?~Два прочтения даты корректны, уточнены половина суток и пояс; год нужен, если контекст его не задаёт.
text~schedule~Составь письмо 4–6 предложений: 24 June, новое время 17:35 UTC, старое 17:05, просьба подтвердить. Не придумывай день недели.~Our call is on 24 June. The new time is 17:35 UTC. Please do not use 17:05. Could you confirm the new time?~Оба времени и направление изменения верны, дата и пояс ясны, текст связен.
speech~clock~Продиктуй слушателю 07:50 и 19:15, используя to/past и уточняя утро/вечер. Проверь запись.~Ten to eight in the morning; a quarter past seven in the evening.~Слушатель восстанавливает 07:50 и 19:15 без подсказки; нужна аудио-проверка.
text~calendar~Объясни разницу five и fifth и напиши свой пример количества и даты.~Five is a quantity; fifth is an order. Five books; on the fifth of March.~Есть объяснение и два разных употребления, не только перевод.`),
 exam('P02-time','b',`short~clock~Запиши five to eleven утром как HH:MM.~10:55~Пять минут до одиннадцати: текущий час десять.
short~clock~Запиши twenty-five past four вечером как HH:MM.~16:25~Четыре после полудня — 16, затем 25 минут.
short~clock~Запиши half past twelve сразу после полудня как HH:MM.~12:30~Полчаса после noon; это не 00:30.
short~clock~Выбери noon/midnight для 12:00 дня.~noon~Полдень — noon, в отличие от полуночи.
short~calendar~Напиши 2nd словами.~second~Second — особая форма от two.
short~calendar~Напиши 23rd словами с дефисом.~twenty-third~Последняя часть three становится third.
short~calendar~Сократи «двенадцатый» цифрами с суффиксом.~12th~Исключение 12th, не 12nd.
short~calendar~Напиши по-английски «суббота».~Saturday~Saturday — суббота; это не Sunday.
short~calendar~Напиши по-английски «октябрь».~October~October — месяц перед November.
short~schedule~Вставь at/on/in: The check is ___ 26 August.~on~Перед конкретной датой используется on.
short~schedule~Вставь at/on/in: The event is ___ 2029.~in~Год задаёт временной период: in 2029.
short~schedule~Выбери on или —: ___ this Thursday.~—|-|nothing~Перед this Thursday обычный предлог on не ставится.
text~schedule~Организатор пишет “Meet 08/10 at 9”. Спроси всё необходимое для точной международной договорённости.~Do you mean 8 October or August 10? Nine a.m. or p.m.? Which year and time zone?~Не выбрана дата наугад; правильно названы обе трактовки и недостающие данные.
text~schedule~Составь письмо 4–6 предложений: 13 February, новое время 10:55 UTC, старое 10:25, просьба подтвердить. День недели неизвестен.~Our call is on 13 February. The new time is 10:55 UTC, not 10:25. Please update the invitation. Could you confirm?~Данные сохранены, старое и новое не перепутаны, неподтверждённый день не выдуман.
speech~clock~Продиктуй слушателю 06:40 и 18:15 через to/past с указанием половины суток. Проверь запись.~Twenty to seven in the morning; a quarter past six in the evening.~Слушатель восстанавливает обе точки времени по реальной речи.
text~calendar~Объясни разницу twelve и twelfth; придумай своё количество и дату с этими формами.~Twelve counts things; twelfth gives an order. Twelve pages; on the twelfth of October.~Нужен самостоятельный пример и различение функций, а не только повторение термина.`)]
};

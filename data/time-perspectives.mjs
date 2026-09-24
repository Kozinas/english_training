export const timeSources=[
 ['Cambridge: Past Perfect Continuous','https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-continuous-i-had-been-working'],
 ['Cambridge: Past Perfect Simple or Continuous','https://dictionary.cambridge.org/us/grammar/british-grammar/past-perfect-continuous'],
 ['British Council: Future Continuous and Future Perfect','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-continuous-future-perfect'],
 ['Cambridge: Future Continuous','https://dictionary.cambridge.org/grammar/british-grammar/future-continuous-i-will-be-working-or-future-perfect-i-will-have-worked'],
 ['Cambridge: Future Perfect Simple','https://dictionary.cambridge.org/grammar/british-grammar/future-perfect-simple-i-will-have-worked-eight-hours'],
 ['Cambridge: Future Perfect Continuous','https://dictionary.cambridge.org/grammar/british-grammar/future-perfect-continuous-i-will-have-been-working-here-ten-years'],
 ['Cambridge: estimate, verb and noun pronunciation','https://dictionary.cambridge.org/pronunciation/english/estimate']
];
const rows=s=>s.trim().split('\n').map(line=>line.split('~'));
const capitalise=s=>s[0].toUpperCase()+s.slice(1);
const persons=(positive,negative,question,answer)=>['I','you','he','she','it','we','they'].map(p=>[p,capitalise(positive(p)),capitalise(negative(p)),question(p),answer(p)]);
export const pastDurationPersons=persons(p=>`${p} had been working.`,p=>`${p} had not been working.`,p=>`Had ${p} been working?`,p=>`Yes, ${p} had. / No, ${p} hadn’t.`);
export const futureFramePersons=persons(p=>`${p} will be working.`,p=>`${p} will not be working.`,p=>`Will ${p} be working?`,p=>`Yes, ${p} will. / No, ${p} won’t.`);
export const futureResultPersons=persons(p=>`${p} will have finished.`,p=>`${p} will not have finished.`,p=>`Will ${p} have finished?`,p=>`Yes, ${p} will. / No, ${p} won’t.`);
export const futureDurationPersons=persons(p=>`${p} will have been working.`,p=>`${p} will not have been working.`,p=>`Will ${p} have been working?`,p=>`Yes, ${p} will. / No, ${p} won’t.`);
export const pastDurationPatterns=rows(`past anchor~At noon I had been waiting for an hour.~Отрезок до прошлой опоры.~Начало раньше полудня.~Опора может быть дана предыдущей фразой.
background~At noon I was waiting.~Кадр в полдень.~Нет утверждения о предыдущем часе.~Не заменять одним for механически.
completed result~I had checked six entries.~Результат до опоры.~Шесть записей проверены.~Не означает, что все верны.
activity~I had been checking entries.~Деятельность до опоры.~Количество неизвестно.~Не доказывает готовность списка.
recent stop~I was tired; I had been walking.~Предшествующее занятие и состояние.~Ходьба могла закончиться.~Не обязана продолжаться в момент речи.
repeated activity~She had been visiting on Fridays.~Серия визитов.~Перерывы допустимы.~Не каждый день без остановки.
for~We had been waiting for forty minutes.~Продолжительность.~Сколько времени.~Не автоматический выбор формы.
since~We had been waiting since nine.~Начальная точка.~С какого времени.~Не since forty minutes.
state~I had known her for years.~Состояние знакомства.~Past Perfect Simple.~Не been knowing в этом значении.
possession~She had owned the flat for years.~Владение.~Simple при длительности.~Не had been owning для этого смысла.
live/work~They had lived / been living there for a year.~Допустимы обе перспективы.~Факт / акцент на процессе.~Не диагностировать по одному for.
negative scope~I hadn’t been sleeping well.~Отрицание качества сна.~Не обязательно полное отсутствие сна.~Сохранять well.
short answer~Had he been waiting? — Yes, he had.~Первый вспомогательный.~Не Yes, he did.~Менять лицо по реальному отвечающему.
contraction~She’d been running.~She had been running.~Been после ’d.~She’d run неоднозначно без контекста.
question~How long had they been travelling?~Wh + had + subject + been + -ing.~Не had they been travelled.~UK travelling / US traveling.
single completion~The show had started.~Один достигнутый рубеж.~Simple, не been starting для одного старта.~Повторные старты требуют другого контекста.
activity senses~She had been having lessons.~Деятельность, не владение.~Having здесь допустимо.~Не запрещать have в Continuous вообще.
no proof~He had been repairing it; it still failed.~Попытки не равны успеху.~Исправность не вытекает из процесса.~Ищем отдельную проверку.
chronology~We waited, then left.~Прямая последовательность.~Past Simple часто достаточно.~Давность сама не требует Perfect.
source limits~The note said they had been testing.~Пересказ источника.~Не независимое наблюдение.~Не добавлять точную длительность.`);
export const futureFramePatterns=rows(`future frame~At ten tomorrow I’ll be interviewing a guest.~Процесс в будущей точке.~Не обязательно начинается в десять.~Начало уточняется отдельно.
expected course~I’ll be passing the library later.~Ожидаемый ход событий.~Можно предложить забрать книгу.~Не доказательство брони или явки.
temporary repetition~I’ll be working evenings next week.~Временная серия.~Паузы нормальны.~Не круглосуточно.
plan enquiry~Will you be using the desk later?~Вопрос об ожидаемом использовании.~Может предварять просьбу.~Не всегда вежливее в любом тоне.
request~Will you carry this bag?~Просьба по контексту.~Не просто вопрос о процессе.~Ответ зависит от намерения говорящего.
arrangement~I’m meeting the tutor at two.~Договорённость.~Present Continuous.~Форма не подтверждает посещение.
timetable~The train leaves at six.~Расписание.~Present Simple.~Расписание может измениться.
intention~I’m going to practise tonight.~Намерение.~Не обязательно согласовано.~Не подменять намерение договорённостью.
decision~I’ll answer the door.~Решение/предложение сейчас.~Will + base.~Не нужно усложнять до Continuous.
state~I’ll know the result tomorrow.~Состояние знания.~Не be knowing в этом значении.~Длительность не отменяет ограничение.
have an activity~We’ll be having lunch at one.~Приём пищи.~Не владение.~They’ll have a car — другое значение.
question~Where will she be staying?~Wh + will + subject + be + -ing.~Порядок первой вспомогательной.~Не Where she will be staying? как прямой вопрос.
negative~They won’t be attending.~Will not + be + -ing.~Ожидаемое отсутствие.~Не доказывает причину или отказ.
time clause~I’ll be working when you arrive.~When + present для будущего.~Не обычное will arrive в придаточном времени.~Вопросительное when другое.
indirect question~I don’t know when she will arrive.~When вводит содержание вопроса.~Will допустимо.~Не придаточное «когда она приедет, то…».
condition~If it rains, we’ll be working indoors.~Условие + прогноз процесса.~Не факт дождя.~Не обратное условие.
at/by~At six I’ll be reading; by six I’ll have read it.~Кадр / взгляд назад от рубежа.~Разная перспектива.~By не требует Perfect во всех фразах.
until~I’ll be reading until six.~Продолжение до границы.~Не гарантирует, что книга дочитана.~Not until — отдельная конструкция.
duration~I’ll be travelling for three hours.~Будущий период.~Continuous не требует слова at.~Это ещё не длительность «к моменту».
certainty~We expect that she’ll be joining us.~Прогноз источника.~Не свершившийся факт.~Сохранять expect и условия.
permission~Will you be using this? — No.~Не ожидает использования.~Не автоматическое разрешение взять.~Спроси May I borrow it?
register~I’ll be seeing you tomorrow.~Ожидаемая встреча.~Не каждый will be есть официальный план.~Смысл зависит от контекста.`);
export const futureResultPatterns=rows(`result~By noon I’ll have sent the draft.~Прогноз завершения к опоре.~Will + have + V3.~Отправка не равна получению.
count~We’ll have checked eight rows by then.~Измеримый результат.~Future Perfect Simple.~Проверка не доказывает безошибочность.
duration~By June I’ll have been teaching for a year.~Длительность к будущей опоре.~Will + have + been + -ing.~Не обязательно конец преподавания.
continuing state~By June I’ll have known her for a year.~Длительность состояния.~Simple, не been knowing.~Perfect не всегда завершение состояния.
live/work~I’ll have lived / been living here for ten years.~Обе формы допустимы.~Факт / акцент на деятельности.~For не переключатель.
future start~Tomorrow at nine we start; by eleven we’ll have been working for two hours.~Начало ещё в будущем.~Период до будущей опоры.~Не обязательно начали до настоящего.
recently stopped~At six I’ll be tired: I’ll have been cycling all afternoon.~Объяснение состояния прогнозом деятельности.~Езда к шести могла закончиться.~Не обязана идти точно в шесть.
repeated work~By May she’ll have been visiting weekly for a year.~Повторные эпизоды.~Не непрерывное посещение.~Не даёт точного числа визитов.
negative~They won’t have finished by two.~Нет готового результата к сроку по прогнозу.~Не значит, что вообще не начнут.~Позднейшее завершение возможно.
question~Will she have left by then?~Will + subject + have + V3.~Не will she has left.~Краткий ответ: she will.
how long~How long will you have been waiting by noon?~Вопрос о накопленной длительности.~Will раньше подлежащего.~Have been остаются вместе после него.
by~Submit it by Friday.~Не позже рубежа.~Не обязательно ровно в пятницу.~Важный дедлайн уточнять до даты и зоны.
until~Stay here until five.~Продолжай находиться здесь до пяти.~Не то же, что arrive by five.~Не гарантирует готовый результат другой работы.
not until~It won’t start until six.~Не начнётся раньше шести.~Не «продолжается до шести».~By six ограничивает сверху, not until снизу.
by the time~By the time you arrive, we’ll have prepared the room.~Present в обычном временном придаточном.~Не will arrive в этой модели.~В главной will have prepared.
after completion~We’ll leave after we’ve checked the doors.~Present Perfect в будущем временном придаточном.~Также after we check по контексту.~Не запрет всех Perfect после after.
conditional~If the parts arrive, we’ll have repaired it by Monday.~Условный прогноз.~Не безусловное обещание.~Не доказывает доставку деталей.
estimate~We expect to have finished by Friday.~Ожидаемый результат.~Уверенность отдельно от аспекта.~В отчёте сохранять источник прогноза.
passive~It will have been checked by Friday.~Been + V3: пассив.~Не Continuous без -ing.~Проверено не равно одобрено.
state be~She will have been here for a month.~Been + обстоятельство: состояние.~Future Perfect Simple of be.~Не каждый been означает Continuous.
active chain~She will have been checking it for an hour.~Been + -ing: деятельность.~Четыре глагольных элемента.~Не implies approved.
V3~They will have written the note.~Written, не wrote.~Проверяй irregular в приложении.~Read V3 /red/ слушать в предложении.
short answer~Will they have arrived? — Yes, they will.~Ответ по первому вспомогательному.~Не Yes, they have.~Ответ является прогнозом.
forecast revision~We now expect to finish later.~Новые данные меняют прогноз.~Сохранять старый прогноз как историю.~Не выдавать пересмотр за прежнее обещание.
for/since~By May 2030 we’ll have worked here for two years / since May 2028.~Длительность / начальная точка.~Начало в мае 2028, опора в мае 2030.~Явные годы уменьшают двусмысленность.
evidence~The report predicts completion; no final check is recorded.~Прогноз и подтверждение разные.~Отсутствие записи не доказывает провал.~Назвать неизвестное.
simple alternative~I’ll finish by six.~Обычный прогноз с дедлайном.~Грамматично без Future Perfect.~Perfect подчёркивает взгляд назад от шести.
modal inference~You’ll have heard the news by now.~Предположение о предшествующем сейчас.~Will бывает не только будущим.~Отдельный контекст, не основной будущий дедлайн.`);
const headers=['Опора / лицо','Модель','Механизм / отрицание','Смысл / вопрос','Ограничение / краткий ответ'];
export const pastDurationReference={id:'past-duration',title:'Процесс до прошлого момента: Past Perfect Continuous',sources:timeSources,intro:['Семь личных рядов и 20 показательных моделей. Не все повествовательные конструкции. Выбери прошлую опору, затем различай кадр, предшествующее занятие и результат.','В личных рядах I/you в кратком ответе оставлены как грамматические подлежащие. В реальном диалоге лицо меняется по отвечающему.'],headers,rows:[...pastDurationPersons,...pastDurationPatterns],practice:rows(`Раскрой She’d been jogging.~She had been jogging.
Форма после had been: wait?~waiting.
Отрицание They had been working.~They had not been working.
Вопрос He had been reading.~Had he been reading?
Кратко утвердительно о he.~Yes, he had.
Had known или had been knowing?~Had known для состояния знания.
Since nine или for nine o’clock?~Since nine.
For two hours или since two hours?~For two hours.
Was reading: что известно о предшествующем часе?~Само предложение этого не сообщает.
Had been reading: книга закончена?~Не следует из формы.
Had read the book: есть завершение?~Да, в обычном значении чтения всей книги.
Had been visiting weekly: без перерыва?~Нет, это повторные визиты.
Hadn’t been sleeping well: совсем не спал?~Не обязательно; отрицание касается well.
Had lived / been living: всегда один верный?~Нет, обе формы возможны по перспективе.
I was tired; I had been walking: всё ещё шёл?~Не обязательно.
Создай прошлую опору и два факта до неё.~Оцени смысл, форму и отсутствие придуманных результатов.`)};
export const futureFrameReference={id:'future-frame',title:'Будущий кадр: Future Continuous и выбор перспективы',sources:timeSources,intro:['Семь личных рядов и 22 модели. Это карта основных контрастов, не все значения will. Процесс, расписание, намерение и договорённость пересекаются по ситуации, но не тождественны.'],headers,rows:[...futureFramePersons,...futureFramePatterns],practice:rows(`Will be + travel?~travelling / traveling.
Отрицание He will be waiting.~He will not be waiting.
Вопрос They will be studying.~Will they be studying?
Кратко отрицательно о they.~No, they won’t.
At ten I’ll be working: начало ровно в десять?~Не обязательно, это кадр внутри процесса.
Will be knowing в значении знания?~Обычно will know.
Having lunch: допустимо?~Да, have означает деятельность.
When you arrive: будущее возможно?~Да, обычное придаточное времени использует present.
I wonder when he will arrive: ошибка will?~Нет, это косвенный вопрос.
Will you be using it: разрешение взять?~Нет, разрешение надо уточнить.
Temporary evenings: без пауз?~Нет, серия вечерних эпизодов.
Работа until six гарантирует конец проекта?~Нет, граница деятельности не равна результату.
Прогноз встречи доказывает явку?~Нет, факт проверяется позднее.
I’m meeting her tomorrow: какая перспектива?~Договорённость в подходящем контексте.
Поезд leaves at seven: почему Simple?~Расписание.
Партнёр меняет время звонка: ответь.~Назови новую доступность и попроси подтвердить зону.`)};
export const futureResultReference={id:'future-result',title:'К будущему рубежу: результат, состояние и накопленная длительность',sources:timeSources,intro:['Два набора по семь личных рядов и 28 моделей. Simple и Continuous различают результат/состояние и занятие; это не таблица гарантированных событий. Длительность возможна в обеих формах.'],headers,rows:[...futureResultPersons,...futureDurationPersons,...futureResultPatterns],practice:rows(`Will have + write?~written.
Will have been + run?~running.
Вопрос She will have finished.~Will she have finished?
Отрицание They will have arrived.~They will not have arrived.
Кратко утвердительно о they.~Yes, they will.
By noon: не позже или ровно?~Не позже в контексте дедлайна.
Until noon: результат гарантирован?~Нет, продолжение до границы.
Not until noon: не раньше или не позже?~Не раньше.
Will have known: может быть for ten years?~Да, длительность состояния.
Will have been here: Continuous?~Нет, Simple от be.
Will have been checked: Continuous?~Нет, пассив с V3.
Will have been checking: готово?~Не следует из формы деятельности.
By the time she ___ (arrive).~arrives в обычном будущем придаточном времени.
We start tomorrow: Future Perfect Continuous позже возможен?~Да, начало не обязано быть в прошлом относительно сейчас.
I’ll finish by six: нужно обязательно have finished?~Нет, обе формы возможны с разной перспективой.
Составь условный прогноз и способ проверки.~Сохрани условие, срок, результат и отдельное подтверждение.`)};

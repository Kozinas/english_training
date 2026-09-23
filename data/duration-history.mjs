export const historySources=[
 ['British Council: Present Perfect Simple and Continuous','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect-simple-continuous'],
 ['British Council: Present Perfect','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-perfect'],
 ['British Council: Past Perfect','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/past-perfect'],
 ['Cambridge: Past Perfect or Past Simple','https://dictionary.cambridge.org/us/grammar/british-grammar/past-perfect-simple'],
 ['British Council: past habits, used to and would','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2-grammar/past-habits-used-to-would-past-simple'],
 ['British Council: be/get used to','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2-grammar/different-uses-of-used-to'],
 ['Cambridge: used to','https://dictionary.cambridge.org/grammar/british-grammar/used-to']
];
const rows=s=>s.trim().split('\n').map(line=>line.split('~'));
export const perfectContinuousPersons=rows(`I~I have been reading.~I have not been reading.~Have I been reading?~Yes, you have. / No, you haven’t.
you~You have been reading.~You have not been reading.~Have you been reading?~Yes, I have. / No, I haven’t.
he~He has been reading.~He has not been reading.~Has he been reading?~Yes, he has. / No, he hasn’t.
she~She has been reading.~She has not been reading.~Has she been reading?~Yes, she has. / No, she hasn’t.
it~It has been raining.~It has not been raining.~Has it been raining?~Yes, it has. / No, it hasn’t.
we~We have been reading.~We have not been reading.~Have we been reading?~Yes, we have. / No, we haven’t.
they~They have been reading.~They have not been reading.~Have they been reading?~Yes, they have. / No, they haven’t.`);
export const perfectContinuousPatterns=rows(`ongoing~I’ve been waiting for an hour.~Have + been + -ing.~Занятие до настоящей точки.~Обычно продолжается; контекст может сообщить паузу.
recent activity~I’m resting; I’ve been moving boxes.~Связь недавнего занятия с сейчас.~Деятельность могла уже прекратиться.~Не обязательно выполняется в секунду речи.
repetition~She’s been visiting on Tuesdays.~Повторяющиеся эпизоды до сейчас.~Не непрерывное действие.~Уточняй период, а не придумывай число визитов.
temporary focus~We’ve been working upstairs lately.~Акцент на текущем периоде.~Временная организация работы.~Не обещает дату окончания.
for~I’ve been practising for six weeks.~Длительность.~Сколько времени.~For не выбирает Continuous автоматически.
since~I’ve been practising since July.~Начальная точка.~С какого момента.~Не since six weeks.
since clause~I’ve been helping since the club opened.~Since + прошлое событие.~Начало периода связано с событием.~Не обязательно всё время без перерывов.
how long~How long have you been waiting?~Wh + have + subject + been + -ing.~Вопрос о длительности.~Ответ от I: I have, не I has.
count~I’ve checked six forms.~Perfect Simple + измеримый результат.~Сколько объектов завершено.~Не доказывает отсутствие ошибок в формах.
activity vs count~I’ve been checking forms.~Perfect Continuous о занятии.~Нет числа проверенных форм.~Не выводи завершение каждой формы.
state~I’ve known this route for years.~State обычно Perfect Simple.~Длительность состояния возможна в Simple.~Не have been knowing в нейтральном знании.
have as state~She’s had this bag since May.~Владение.~Не have been having для владения.~Having lessons — другое значение.
live / work~I’ve lived / been living here for a year.~Обе модели допустимы.~Факт или акцент на процессе/периоде.~Не обязательный выбор по одному for.
closed past~I practised last Friday.~Закрытая прошлая рамка.~Past Simple, не Present Perfect.~Иной since last Friday связывает период с сейчас.
now vs up to now~I’m writing / I’ve been writing.~Текущий кадр / период до сейчас.~Разная перспектива.~Одно действие может быть описано обеими формами по задаче.
recently~She’s recently finished / been practising.~Временная опора не выбирает форму.~Смысл результата или деятельности.~Recently не универсальный переключатель.
negative period~I haven’t been sleeping well lately.~Отрицание качества/регулярности.~Не означает полного отсутствия сна.~Следи за областью not.
been vs being~We have been testing.~Been — V3 be; testing — -ing.~Не have being tested в активной модели.~Пассив — отдельная тема B103.`);
export const pastPerfectPersons=rows(`I~I had left.~I had not left.~Had I left?~Yes, you had. / No, you hadn’t.
you~You had left.~You had not left.~Had you left?~Yes, I had. / No, I hadn’t.
he~He had left.~He had not left.~Had he left?~Yes, he had. / No, he hadn’t.
she~She had left.~She had not left.~Had she left?~Yes, she had. / No, she hadn’t.
it~It had stopped.~It had not stopped.~Had it stopped?~Yes, it had. / No, it hadn’t.
we~We had left.~We had not left.~Had we left?~Yes, we had. / No, we hadn’t.
they~They had left.~They had not left.~Had they left?~Yes, they had. / No, they hadn’t.`);
export const pastPerfectPatterns=rows(`earlier event~When I arrived, the film had started.~Start раньше arrival.~Had + V3 оглядывается из прошлого.~Не причина опоздания сама по себе.
past reference~By eight, we had finished.~Eight — прошлая точка отсчёта в рассказе.~Второе предложение необязательно.~Не выбирать по давности относительно сегодня.
not yet then~At noon, she hadn’t replied yet.~Ответа не было к полудню.~Позже ответ возможен.~Не равно she never replied.
past state~I had known her for years when we became colleagues.~Знание продолжалось до прошлой точки.~Had known с for.~Perfect Simple не только короткие законченные действия.
had had~We had had lunch before the visit.~Первое had — вспомогательное.~Второе had — V3 have.~Не случайный повтор слова.
had been~He had been abroad before that trip.~Had + V3 be.~Опыт до прошлой точки.~Не Past Perfect Continuous без -ing.
V2 / V3~She had written, not had wrote.~Write / wrote / written.~Had требует V3.~Смотри расширенный irregular-справочник.
regular V3~They had checked the list.~V2/V3 одинаковы у regular.~Had несёт грамматическую связь.~Проверка не обязательно положительная.
question~What had they chosen?~Wh + had + subject + V3.~Без did.~Не What did they had chosen?
short answer~Had you eaten? — Yes, I had.~Смена you → I.~Краткий ответ сохраняет had.~Не Yes, I did в этой модели.
contraction~I’d sent it before the call.~I’d = I had здесь.~Следующий sent — V3.~I’d send = I would send, другая модель.
already~We had already booked.~Already обычно между had и V3.~Раньше обсуждаемого прошлого момента.~Не переносить бронь на текущее состояние без данных.
before with Simple~We ate before we left.~Before уже показывает порядок.~Past Simple может быть достаточен.~Не объявлять had обязательным из-за before.
after with Perfect~After we had checked, we left.~Взгляд на завершённую проверку перед уходом.~Perfect явно выделяет предшествование.~After we checked тоже возможно.
before unfinished~They left before I had finished.~Завершения ещё не было при уходе.~Не всё после had утверждается как случившееся раньше.~Учитывай before и отрицательный смысл границы.
sequence~I entered, sat down and opened the folder.~Линия событий с Past Simple.~Нет обязательного had на каждом шаге.~Хронологический порядок не требует постоянного возврата.
background~I was reading when she arrived.~Процесс внутри прошлого момента.~Past Continuous, не had read автоматически.~Различай фон и более раннее завершение.
because~We stayed because the road had closed.~Причина названа because.~Had задаёт предшествование.~Без because одно раньше другого не доказывает причину.
unknown~I knew someone had moved the box, not who.~Действие известно, исполнитель нет.~Грамматика не заполняет пропуски фактов.~Не назначай виновного по времени.
future from then~She hadn’t called by six; she called at seven.~Отрицание до шести, факт позже.~Не противоречие.~Не переносить отрицание на весь день.`);
export const habitPatterns=rows(`used to: action~I used to walk to school.~Used to + base.~Прежняя привычка, в контексте изменившаяся.~Не означает, что действие навсегда невозможно снова.
used to: state~We used to own a small car.~Также длительное состояние.~Бывшее владение.~Не обычное habitual would для непрерывного владения.
negative~I didn’t use to drive.~Did not + use to + base.~Не было прежней привычки.~Учебная письменная форма use без d после did.
question~Did she use to cycle?~Did + subject + use to + base.~Вопрос о прошлом.~Не Does she used to…?
wh-question~Where did you use to live?~Wh + did + subject + use to.~Состояние прошлого.~Не обязательно говорит, где живёшь сейчас.
short answer~Did you use to walk? — Yes, I did.~Did в кратком ответе.~Прошлая привычка.~Не Yes, I used в этой модели.
single event~I moved house last April.~Past Simple.~Одно событие.~Не used to move для одного конкретного переезда.
present habit~I usually walk now.~Usually + Present Simple.~Нынешняя привычка.~Не I use to walk now.
would: routine~As children, we would build shelters every summer.~Would + base при заданной прошлой рамке.~Повторяющиеся действия.~Без рамки would может означать другое.
would: limits~We used to know everyone there.~Для постоянного знания используем used to/Past Simple.~Не все состояния описывают habitual would.~Повторные временные состояния требуют отдельного контекста.
Past Simple alternative~We visited our cousins every spring.~Past Simple тоже передаёт повторение.~Контекст задаёт регулярность.~Used to не единственная правильная форма о привычке.
not liking~I’m used to the noise, but I dislike it.~Be used to + noun.~Знакомо/привычно, не обязательно нравится.~Не равняется отсутствию раздражения.
be + ing~She is used to speaking in groups.~To — предлог; speaking — -ing.~Уже привычное занятие.~Не is used to speak в этом значении.
be + pronoun~I’m used to it.~После to местоимение.~Нейтральная привычность.~It требует понятного контекста.
be in past~We weren’t used to early starts.~Was/were задаёт прошлое.~Тогда ещё было непривычно.~Не сообщает автоматически о сейчас.
be question~Are you used to sharing a desk?~Инверсия be.~Вопрос о привычности.~Не Do you are used…?
get + ing~I’m getting used to reading on a screen.~Процесс адаптации.~Привычность ещё формируется.~Не доказательство завершённой адаптации.
get in past~She got used to the timetable.~Переход к привычности в прошлом.~Не got use to.~Used сохраняется после get.
get in future~You’ll get used to it.~Будущая адаптация.~Will + get + used to.~Это прогноз, не уже случившийся результат.
negative get~I haven’t got/gotten used to it yet.~UK got, US gotten для становления.~Адаптация ещё не завершена.~Не отсутствие любых улучшений.
three-way contrast~I used to cycle / I’m used to cycling / I’m getting used to cycling.~Прошлая привычка / привычность / адаптация.~Три разных утверждения.~Не взаимозаменяемые времена одного глагола.
pronunciation~used to /ˈjuːstə/~Обычно /s/ в этих привычных моделях.~Форма после did обычно звучит так же.~ASR-написание не проверяет d на слух.
ordinary use~I used a ruler yesterday.~Use как «использовать», used /juːzd/.~Обычный Past Simple.~Не прежняя регулярная привычка автоматически.
passive bridge~This tool is used to cut paper.~Use в пассиве + цель to cut.~Инструмент используют для резки.~Не привычность инструмента; полный пассив — B103.`);
export const perfectContinuousReference={id:'perfect-continuous',title:'Present Perfect Continuous: формы и смысл',sources:historySources,intro:['Семь личных рядов have/has been + -ing и 18 моделей деятельности до настоящей точки. В таблице лиц краткий ответ учитывает смену говорящего you → I.','Для строк моделей столбцы читаются как опора / пример / устройство / смысл / ограничение. Это не все аспекты и способы описания времени. Процесс может продолжаться или только что прекратиться; вывод о результате нужен отдельно.'],headers:['Лицо / опора','Утверждение / пример','Отрицание / устройство','Вопрос / смысл','Ответ / ограничение'],rows:[...perfectContinuousPersons,...perfectContinuousPatterns],practice:[['She ___ been reading.','has'],['We have ___ waiting.','been'],['He has been ___ (run).','running'],['Have you been working? Ответ от себя.','Yes, I have. / No, I haven’t.'],['How long you have been waiting? Исправь.','How long have you been waiting?'],['___ two weeks: for/since?','for'],['___ June: for/since?','since'],['have been knowing: обычное знание, исправь.','have known'],['have been repairing: всё исправлено?','Не установлено одной формой деятельности.'],['Только что перестал красить: have been painting допустимо?','Да, недавняя деятельность связана с сейчас.'],['Три законченных письма к настоящему: count или activity?','I have written three letters.'],['Have lived / have been living: обязательно только один вариант?','Нет, возможны оба в подходящем контексте.'],['last night закончилась: I have been reading last night?','I read / was reading last night по задаче.'],['since last night запрещено с Perfect?','Нет: since связывает период с сейчас.'],['haven’t been sleeping well: сна не было совсем?','Нет, отрицание может относиться к качеству сна.'],['ASR совпал: произношение доказано?','Нет, нужна слуховая оценка.']]};
export const pastPerfectReference={id:'past-perfect',title:'Past Perfect: более раннее из прошлого',sources:historySources,intro:['Семь личных рядов had + V3 и 20 моделей прошлого отсчёта. Had одинаково для всех лиц. В моделях столбцы: опора / пример / порядок или устройство / механизм / ограничение.','Прошлая опорная точка может быть в предыдущем контексте, не обязательно в соседней части одного предложения. Before/after могут сделать порядок ясным и с Past Simple. Это не полный справочник всех значений Perfect, условных и косвенной речи.'],headers:['Лицо / опора','Утверждение / пример','Отрицание / порядок','Вопрос / механизм','Ответ / ограничение'],rows:[...pastPerfectPersons,...pastPerfectPatterns],practice:[['They ___ chosen a room before the call.','had'],['Had she ___ (go)?','gone'],['He had ___ (write).','written'],['We had not ___ (see).','seen'],['Did they had left? Исправь.','Had they left?'],['Had you eaten? Краткий ответ от I.','Yes, I had. / No, I hadn’t.'],['I’d sent it: раскрой.','I had sent it.'],['I’d send it: раскрой в модели would + base.','I would send it.'],['had had: второе had зачем?','V3 основного have, первое had вспомогательное.'],['When I arrived, Lee had left: что раньше?','Уход Lee.'],['hadn’t replied by noon: ответ в час невозможен?','Возможен; отрицание ограничено полуднем.'],['I ate before I left: обязательно had eaten?','Нет: before уже задаёт порядок.'],['They left before I had finished: я закончил до ухода?','Нет; к уходу работа ещё не была закончена.'],['Событие было сто лет назад: автоматически Past Perfect?','Нет, нужна более поздняя прошлая точка отсчёта в смысле.'],['had known for years: Perfect всегда прекращает состояние?','Нет, состояние может длиться до прошлой точки.'],['Earlier означает доказанную причину?','Нет, последовательность не устанавливает причину.']]};
export const habitsReference={id:'habits-adaptation',title:'Used to, would, be/get used to: привычки и адаптация',sources:historySources,intro:['24 модели: прежняя привычка/состояние, прошлые повторения, нынешняя привычность и процесс адаптации. Это не все модальные значения would и не весь пассив.','В контролируемой письменной модели после did используем use to. Варианты написания did used to встречаются в употреблении, а на слух различие часто отсутствует; не диагностируй письменную букву по ASR. Be/get used to требуют существительного, местоимения или -ing.','Привычность не доказывает удовольствие, мастерство или безопасность. Адаптация может продолжаться с улучшениями; отрицание полного привыкания не означает, что улучшений нет.'],headers:['Опора','Пример','Устройство','Смысл','Ограничение'],rows:habitPatterns,practice:[['I used to ___ (walk).','walk'],['Did she ___ to work here? Учебная письменная модель.','use'],['Отрицание I used to drive с did not.','I did not use to drive.'],['Привычка сейчас: I use to read?','I usually read.'],['Один переезд в апреле: used to move?','I moved in April.'],['Длительное владение: used to own или habitual would own?','Used to own в изучаемой модели.'],['As children, we would visit on Sundays: повторение?','Да, прошлая рамка задана.'],['I’m used to ___ (wait).','waiting'],['Are you used to it? Ответ с be.','Yes, I am. / No, I’m not.'],['I’m getting used to it: адаптация уже завершена?','Не утверждается; идёт процесс.'],['I was used to it: что известно о сейчас?','Без дальнейших данных неизвестно.'],['I’ll get used to it: привык сейчас?','Нет такого вывода: это прогноз.'],['UK got / US gotten used to: допустимы оба?','Да, для соответствующего значения становления.'],['Used to the noise = like it?','Нет, можно привыкнуть и не любить.'],['I used a key: прежняя привычка?','Не обязательно; это обычное использование в прошлом.'],['This tool is used to cut: исправлять cut на cutting?','Нет, здесь пассив use и инфинитив цели, не be accustomed to.']]};

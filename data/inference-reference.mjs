export const inferenceSources=[
 ['Cambridge Dictionary: irony','https://dictionary.cambridge.org/dictionary/english/irony'],
 ['Cambridge Grammar: discourse markers','https://dictionary.cambridge.org/uk/grammar/british-grammar/discourse-markers-so'],
 ['British Council: connected speech','https://www.teachingenglish.org.uk/professional-development/teachers/teaching-knowledge-database/c/connected-speech'],
 ['British Council: Challenges at work — запись для переноса, C1, не сертификация C2','https://learnenglish.britishcouncil.org/free-resources/listening/c1/challenges-work']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const inferencePatterns=rows(`literal content~The room is warm.~Содержание фразы отдельно от возможной просьбы открыть окно.~Не любой комментарий о температуре является просьбой.
contextual inference~We have another appointment at six.~Возможный намёк на завершение беседы зависит от времени и ситуации.~Не объявлять нежелание общаться установленным фактом.
cancellable implication~Some members replied; in fact, all did.~Some само по себе не исключает all.~Продолжение отменяет частый вывод «не все» без логического противоречия.
explicit boundary~Only two members replied.~Only задаёт ограничение в указанной группе.~Нельзя отменить его словом actually без исправления исходного утверждения.
presupposition~Have you stopped using the old form?~Вопрос представляет прежнее использование как фон.~Можно оспорить фон: I never used it.
ironic praise~A wonderfully quiet evening, after three alarms.~Несовпадение похвалы и описанной обстановки поддерживает ироническую трактовку.~По записи слов нельзя установить точную интонацию или цель насмешки.
literal alternative~A wonderfully quiet evening, after a peaceful walk.~Та же оценка допускает искреннее прочтение.~Положительное прилагательное не код иронии.
understatement~A little inconvenient, after a major cancellation.~Масштаб события может делать оценку намеренно сдержанной.~Не любая сдержанность сарказм или национальная черта.
sarcasm~Another helpful interruption.~В контексте возможно колкое замечание.~Не все виды иронии направлены на унижение человека.
echo/distance~Your so-called quick solution took a week.~Говорящий дистанцируется от чужой оценки quick.~Нужно установить, чью оценку он воспроизводит.
quotation~The manager called it efficient.~Авторство оценки приписано менеджеру.~Цитирование не личное согласие пересказывающего.
scare quotes~The “simple” procedure has seven forms.~Кавычки могут отмечать дистанцию или название.~Без контекста не единственная функция кавычек.
qualified agreement~I agree up to a point.~Согласие ограничено.~Не полное принятие и не обязательно полный отказ.
concession~The design is elegant, but the text is unreadable.~Одна положительная характеристика и одно возражение.~But не стирает истинность первой части.
acknowledgement~I see what you mean.~Сигнал понимания позиции.~Не автоматическое согласие с позицией.
hedge~That seems plausible.~Осторожная оценка правдоподобия.~Не подтверждённая истинность и не фиксированный процент.
right/well~Right, shall we move on?~Маркер может организовывать переход.~Не всегда оценка правильности предыдущего утверждения.
silence~No reply was recorded.~Известно отсутствие зарегистрированного ответа.~Не доказаны согласие, отказ или мотив.
laughter~Two listeners laughed.~Наблюдение о реакции двух людей.~Не устанавливает единую реакцию аудитории или намерение говорящего.
prosody~I said the BLUE one.~Контрастный акцент может ограничивать противопоставление.~Нужна слышимая реализация; заглавные буквы только инструкция исполнителю.
repair question~Do you mean that we should postpone it?~Проверка предложенной интерпретации.~Вопрос не записывать как принятое решение.
scope question~Which part of the plan concerns you?~Уточнение предмета возражения без полной капитуляции.~Не предполагать, что человек отвергает весь план.
cultural hypothesis~Shall we use first names?~Проверка предпочтения конкретного собеседника.~Не выводить предпочтение из паспорта, имени или акцента.
evidence update~I first read it as criticism; she clarified otherwise.~Новая реплика меняет рабочую интерпретацию.~Сохранять исходное прочтение отдельно от уточнения, не переписывать историю.`);
export const inferenceReference={id:'context-inference',title:'Буквальный смысл, подтекст и проверка интерпретации',intro:[
 '24 авторские модели для C203: содержание, возможный вывод, источник оценки и уточнение. Это не исчерпывающий каталог прагматики, культур или интонации.',
 'Грамматическое содержание, контекстная гипотеза и слышимый тон — разные виды свидетельств. Интерпретации свободных ситуаций оцениваются содержательно; правдоподобие не превращает догадку в факт.',
 'На внешней странице British Council есть запись: открывайте её по своей инициативе, с интернетом, сначала без транскрипта. В репозиторий запись и чужие упражнения не скопированы. Метка C1 принадлежит источнику; применение записи в C203 не превращает её в экзамен C2.'
],headers:['Механизм','Авторский пример','Что проверять','Предел вывода'],rows:inferencePatterns,sources:inferenceSources,practice:rows(`The room is warm: назови буквальное содержание и два разных намерения.~Сообщение о температуре; возможная просьба проветрить или довольство комфортом. Намерение требует контекста.
Some came. Доказывает ли это, что другие не пришли?~Нет; some само по себе совместимо с all, хотя в разговоре часто возникает более узкий вывод.
Only two came. Можно ли без исправления добавить actually, all ten came?~Нет, если речь о той же группе и событии: придётся исправить прежнее ограничение.
Have you stopped missing meetings? Как оспорить фон вопроса?~I have not been missing meetings. Не принимать спорную предпосылку автоматически.
Wonderful weather сказано во время ливня: установлен ли сарказм?~Ироническая трактовка правдоподобна, но говорящий может искренне радоваться дождю; нужен контекст.
Почему up to a point не равно entirely?~Выражение ограничивает согласие, а не усиливает его до полного.
I see. Какая проверка нужна перед записью решения?~Does that mean you agree to the proposal, or only that the explanation is clear?
Два слушателя засмеялись. Все согласны с шуткой?~Нет; реакция двух не устанавливает ни реакцию всех, ни их мотив.
The reviewer called it clever. Чья это оценка?~Рецензента; пересказ не означает, что автор пересказа принимает оценку.
Well, the figures are incomplete. Well всегда равно хорошо?~Нет; здесь может вводить ответ или оговорку, а не положительную оценку цифр.
ASR записал excellent. Подтверждён ли насмешливый тон?~Нет; распознанное слово не содержит надёжной оценки интонации и намерения.
Собеседник долго молчит. Запиши осторожный вывод.~No answer has been given yet; the reason is unknown.
Как уточнить That is ambitious без обвинения в отказе?~Do you mean the timetable is difficult, or that you would prefer a different goal?
Человек использует фамилию. Можно ли приписать ему национальную норму?~Нет; спросить о предпочтении конкретного человека и учитывать ситуацию.
После уточнения выяснилось, что похвала искренняя. Что делать с первой гипотезой?~Сохранить её как первоначальное прочтение и отдельно записать уточнение; изменить текущий вывод.
Перенос через 7 дней: как устроить новый контроль?~Новая ситуация и реальный партнёр: буквальный смысл, минимум две гипотезы, основание, уточнение и ответ партнёра. Речь проверяется по аудио.`)};

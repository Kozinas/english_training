// Original models and exercises; source links describe grammar, not copied worksheets.
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const hypothesisSources=[
 ['British Council: zero, first and second conditionals','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second'],
 ['British Council: wish and if only','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/wishes-wish-if-only'],
 ['British Council: deductions about the present','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-deductions-about-present'],
 ['Cambridge: unless','https://dictionary.cambridge.org/grammar/british-grammar/unless'],
 ['Cambridge: would','https://dictionary.cambridge.org/grammar/british-grammar/would'],
 ['Cambridge: wishes and regrets','https://dictionaryblog.cambridge.org/2017/11/28/i-wish-id-studied-harder-expressing-regrets-and-wishes/']
];
export const hypotheticalPersons=rows(`I~If I had a free room, I would offer it.~If I didn’t have a room, I wouldn’t offer one.~Would I offer it if I had one?~Had здесь о гипотезе сейчас, не вчера.
you~If you had a free room, you would offer it.~If you didn’t have a room, you wouldn’t offer one.~Would you offer it if you had one?~Ответ от себя: Yes, I would.
he~If he had a free room, he would offer it.~If he didn’t have a room, he wouldn’t offer one.~Would he offer it if he had one?~Would без -s; offer без to.
she~If she had a free room, she would offer it.~If she didn’t have a room, she wouldn’t offer one.~Would she offer it if she had one?~Didn’t + have, не had.
it~If it had more space, it would hold more chairs.~If it didn’t have more space, it wouldn’t hold more chairs.~Would it hold more chairs if it had more space?~It здесь помещение; объём гипотетический.
we~If we had a free room, we would offer it.~If we didn’t have a room, we wouldn’t offer one.~Would we offer it if we had one?~Подлежащие частей могут различаться.
they~If they had a free room, they would offer it.~If they didn’t have a room, they wouldn’t offer one.~Would they offer it if they had one?~Перестановка частей не меняет условие.`);
export const conditionalPatterns=rows(`general rule~If this field is empty, the form shows a warning.~Present + Present.~Повторяемое поведение указанной формы.~Не универсальный закон всех сайтов.
open future~If the room is free tomorrow, we’ll meet there.~Present + will + base.~Будущее рассматривается как открытая возможность.~Не подтверждает доступность комнаты.
remote present~If I lived nearer, I would walk.~Past form + would + base.~Воображаемая нынешняя ситуация.~Не автоматически история прошлого.
remote future~If the club moved next year, I would join it.~Прошедшая форма с будущей рамкой.~Дистанция к сценарию, не дата.~Нет фиксированного процента вероятности.
were / was~If she were/was here, she would help.~Were для всех лиц в нереальной модели; was встречается.~Оба допустимы в подходящем регистре.~Для совета If I were you — базовая учебная формула.
negative condition~If we didn’t need it, we would lend it.~Didn’t + base.~Отрицается условие.~Не if we wouldn’t need в основной модели.
negative result~If it cost more, I wouldn’t buy it.~Would not + base.~Отрицательное следствие.~Wouldn’t не won’t.
question~What would you change if you could?~Wh + would + subject + base.~Вопрос в главной части.~Не What did you would change?
could result~If we had a larger room, we could invite more people.~Could + base.~Возможность/способность при условии.~Не обещание, что пригласят.
might result~If we changed the time, more people might come.~Might + base.~Возможное, не гарантированное следствие.~Не назначать точные проценты.
could condition~If I could stay, I would help.~Could в условной части.~Гипотетическая возможность.~Не обязательно прошлая способность.
advice~If I were you, I would ask for a sample.~Воображаемая смена роли.~Совет с основанием.~Не утверждение, что адресат его принял.
unless~We won’t start unless the leader arrives.~If the leader doesn’t arrive, we won’t start.~Исключение из отрицательного результата.~Приход сам по себе не гарантирует все остальные условия.
unless negative~I’ll join unless I can’t find transport.~Except if I cannot find transport.~Отрицание меняет само исключение.~Не удалять not механически.
only if~We’ll start only if the room is ready.~Готовность — необходимое условие.~Без готовности не начнём.~Не говорит, что одной готовности достаточно.
if vs only if~If A, then B / B only if A.~Разное направление зависимости.~Сначала подпиши условие и следствие.~Не считать обратное утверждение доказанным.
in case~Take a copy in case the network fails.~Предосторожность заранее.~Копию берут до возможного сбоя.~Не равно возьми только после сбоя.
even if~I’ll attend even if it rains.~Событие не меняет заявленное намерение.~Дождь не отменяет намерение.~Не доказательство будущей явки.
as long as~You can borrow it as long as you return it today.~Условие разрешения.~Здесь «при условии», не длина.~Разрешение не доказывает возврат.
will exception~If you will wait here, I’ll ask someone.~Will выражает готовность в вежливой просьбе.~Не обычное будущее после if.~Не объявлять все if + will ошибкой.
whether~I don’t know if she will come.~If = whether, косвенный общий вопрос.~Это не условное придаточное.~Will допустим в вопросе о будущем.
scope~If we test it, we may find the cause.~Проверка — условие возможной находки.~Попытка не равна успеху.~Не утверждать ни найденную причину, ни неизбежный провал.`);
export const wishPossibilityPatterns=rows(`wish: state~I wish I knew the route.~Wish + past form.~Хочется иной нынешней ситуации.~Knew здесь не прошлое знание.
wish: negative~I wish it didn’t cost so much.~Wish + didn’t + base.~Сейчас дорого, хочется иначе.~Отрицание относится к желаемой картине.
wish: be~I wish she were/was here.~Were или обычное was по регистру.~Её сейчас нет в описываемой ситуации.~Не требовать were в каждом свободном ответе.
if only~If only we had more space!~Усиленное желание.~Не обязательно часть условия с then.~Only if — другая конструкция.
wish: ability~I wish I could read the sign.~Could + base.~Сейчас не могу или ограничен.~Не прошлая способность автоматически.
wish: change~I wish they would speak more quietly.~Would + base после wish.~Желаемое изменение поведения.~Часто раздражение; не все будущие желания.
wish: weather~I wish it would stop raining.~Would + stop.~Желание перемены ситуации.~Не прогноз погоды.
wish: own state~I wish I were more patient.~Past form о своём состоянии.~Не базовая модель I wish I would be…~Не абсолютный запрет всех контекстов одного субъекта.
hope~I hope the room is free tomorrow.~Hope + Present о будущем.~Результат ещё открыт.~Не автоматически контрфактический wish.
wish: courtesy~I wish you luck.~Wish + object + noun.~Пожелание адресату.~Не требует Past Simple.
wish to~I wish to ask a question.~Wish + to-infinitive.~Формальное want.~Не сожаление о настоящем.
past regret preview~I wish I had checked yesterday.~Past Perfect.~Сожаление о завершённом прошлом.~Подробная практика в B202, не подмена had time.
may~The folder may be on the desk.~May + base.~Одна из возможностей.~Не доказанное местонахождение.
might~The folder might be in the drawer.~Might + base.~Осторожная возможность.~Не фиксированная вероятность в процентах.
could~It could be a network problem.~Could + base.~Возможное объяснение сейчас.~Не утверждает прошлое или причину.
may / might not~The key might not work.~Might + not + base.~Возможно, не сработает.~Не равно cannot work.
cannot deduction~That can’t be today’s list: it is dated last year.~Can’t + base.~Сильный отрицательный вывод по данным.~Не запрет в этом контексте.
must deduction~This must be the main room; it matches every detail.~Must + base.~Уверенный вывод говорящего.~Не приказ и не безошибочное знание.
must not prohibition~You must not share the code.~Must not + base.~Запрет.~Не обычное отрицание must-догадки.
permission~You may use this room.~May + base.~Разрешение по контексту.~Не доказательство использования.
negative permission~You may not enter this room.~May not + base.~В контексте правила — запрет.~Без контекста may not может быть возможностью «не».
general can~Mountain roads can be icy.~Can + base.~Общая возможность.~Не утверждает лёд на конкретной дороге сейчас.
particular possibility~This road may be icy now.~May/might/could + base.~Конкретная неизвестная ситуация.~Для нейтральной догадки не This road can be icy now.
ability could~When I was younger, I could run farther.~Could + base с прошлой рамкой.~Прежняя способность.~Контекст отличает от нынешней догадки.
suggestion could~We could ask the organiser.~Could + base.~Предложение варианта действия.~Не выполненная просьба.
be likely to~She is likely to reply today.~Be + likely + to-infinitive.~Ожидаемый исход.~Не гарантирует ответ.
probably~She will probably reply today.~Наречие после will.~Вероятный прогноз.~Не точный измеренный процент.
perhaps~Perhaps she is busy.~Наречие на уровне предложения.~Возможное объяснение.~Не нужны два модальных сразу.
question~Could this be the wrong file?~Modal + subject + base.~Проверка гипотезы.~Вопрос не устанавливает ошибку.
multiple hypotheses~It might be the cable, or it could be a setting.~Альтернативные объяснения.~Проверить каждое по данным.~Не выбирать виновника по догадке.
conditional possibility~If the team had more time, it might test another option.~Past + might + base.~Возможность внутри гипотезы.~Нет доказанного свободного времени.
bounded report~According to this message, the visit may be delayed.~Указание источника и границы уверенности.~Предположение не подтверждённое изменение.~Сначала уточни статус у источника.`);
export const conditionalReference={id:'hypothetical-conditions',title:'Условия: открытая возможность и гипотеза',sources:hypothesisSources,intro:['Семь личных рядов второй условной модели и 22 контраста. В строках лиц: утверждение / отрицание / вопрос / пояснение; ниже — пример / устройство / смысл / ограничение.','Это не все условные конструкции: third/mixed conditionals подробно в B202. Формы показывают взгляд говорящего и временную рамку, а не точный процент вероятности. Условия, факты и достаточность доказательств проверяются раздельно.'],headers:['Лицо / опора','Утверждение / пример','Отрицание / устройство','Вопрос / смысл','Пояснение / ограничение'],rows:[...hypotheticalPersons,...conditionalPatterns],practice:[['If he ___ more time, he would read. (have)','had'],['If they didn’t ___ it, they would lend it. (need)','need'],['She would ___ more often. (visit)','visit'],['Вопрос What you would change?','What would you change?'],['If I were you: почему were?','Стандартная нереальная формула совета.'],['If she was/were here: допустимы оба?','Да, с учётом регистра и контекста.'],['If I won tomorrow: событие вчера?','Нет, past form выражает дистанцию к будущей гипотезе.'],['Could/might вместо would: смысл?','Возможность или способность, не уверенное следствие.'],['Unless you ask = if you ___ ask.','do not / don’t'],['Only if A: одного A точно достаточно?','Не утверждается: A необходимо, могут быть другие условия.'],['Возьми копию заранее на случай сбоя.','Take a copy in case the network fails.'],['Even if it rains: заявленное намерение меняется?','Нет, дождь не меняет названное намерение.'],['I wonder if she will come: ошибка will?','Нет, if = whether, не условие.'],['If you will wait: всегда ошибка?','Нет, will может выражать готовность.'],['If we ask, they may agree: согласие доказано?','Нет, возможное следствие не факт.'],['Смена would на might влияет на уверенность?','Да, выделяется возможность вместо более уверенного гипотетического следствия.']]};
export const wishPossibilityReference={id:'wishes-possibility',title:'Желания, возможность и уверенность',sources:hypothesisSources,intro:['32 модели wish/if only/hope и модальности о настоящем или будущем. Это не все значения модальных глаголов; прошлые сожаления и modal + have + V3 отдельно в B202.','May/might/could не кодируют фиксированные проценты. Must/can’t могут передавать вывод, а не обязанность/способность. Контекст и источник данных важнее механического перевода одного слова.'],headers:['Опора','Пример','Устройство','Смысл','Ограничение'],rows:wishPossibilityPatterns,practice:[['I wish I ___ the answer. (know)','knew'],['If only I ___ more space. (have)','had'],['I wish she was/were here: один вариант?','Оба возможны; were — нереальная форма для всех лиц.'],['I wish I can join: исправь невозможность сейчас.','I wish I could join.'],['I wish they would stop: что выражено?','Желаемая перемена, часто недовольство.'],['Надеюсь на ещё возможный ответ завтра.','I hope they reply tomorrow.'],['I wish you luck: нужна прошедшая форма?','Нет, другая модель пожелания.'],['It might ___ true. (be)','be'],['She may comes: исправь.','She may come.'],['He might not come = he cannot come?','Нет: возможно не придёт / не может прийти.'],['Must вывода: обычная сильная отрицательная пара?','Can’t в значении невозможности, не mustn’t-запрет.'],['You may not enter в правиле?','Запрет, не просто неизвестный будущий визит.'],['Can быть общей возможностью?','Да: It can be cold here.'],['Вероятна встреча: She ___ likely to come.','is'],['Might = ровно 30%?','Нет, точного универсального процента нет.'],['Could be a bug: баг установлен?','Нет, это гипотеза, требующая проверки.']]};

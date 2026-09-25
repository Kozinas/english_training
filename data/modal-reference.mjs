export const modalSources=[
 ['British Council: advanced passives','https://learnenglish.britishcouncil.org/free-resources/grammar/c1/advanced-passives-review'],
 ['British Council: patterns with reporting verbs','https://learnenglish.britishcouncil.org/free-resources/grammar/c1/patterns-reporting-verbs'],
 ['BBC Learning English: subjunctive','https://downloads.bbc.co.uk/worldservice/learningenglish/ask_about_english/pdfs/subjunctive.pdf'],
 ['Cambridge: passive forms','https://dictionary.cambridge.org/grammar/british-grammar/passive-forms'],
 ['Cambridge: make','https://dictionary.cambridge.org/uk/grammar/british-grammar/make'],
 ['Cambridge: modality and time','https://dictionary.cambridge.org/us/grammar/british-grammar/tense'],
 ['Cambridge: modal expressions','https://dictionary.cambridge.org/us/grammar/british-grammar/modality-other-modal-words-and-expressions'],
 ['Cambridge: need','https://dictionary.cambridge.org/uk/grammar/british-grammar/need'],
 ['Cambridge: may as well / might as well','https://dictionary.cambridge.org/grammar/british-grammar/may-as-well-and-might-as-well'],
 ['Cambridge: would','https://dictionary.cambridge.org/dictionary/learner-english/would'],
 ['Cambridge: tense and time','https://dictionary.cambridge.org/ta/grammar/british-grammar/tenses-and-time'],
 ['British Council: modal probability','https://learnenglish.britishcouncil.org/comment/218909']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
const headers=['Модель','Авторский пример','Структура','Значение','Что проверить'];
export const reportingPassivePatterns=rows(`it present~It is reported that the gallery is closed.~It + is + reported + that-clause.~Сообщение о нынешнем положении.~Не убрать источник при пересказе.
it past~It was believed that the room was empty.~Was относится к прошлому мнению.~Мнение тогда о тогдашнем состоянии.~Не доказательство пустой комнаты сейчас.
personal present~The curator is said to live nearby.~Is said + to + base.~Нынешнее сообщение о состоянии.~Live относится к curator, не к источнику.
plural subject~The drawings are thought to be copies.~Are согласуется с drawings.~Мнение о нескольких предметах.~Не is из-за инфинитива.
earlier action~The artist is believed to have left.~To have + V3.~Уход раньше нынешнего мнения.~Have не has после to.
earlier state~The room is thought to have been empty.~To have been + adjective.~Более раннее состояние.~Been здесь не обязательно пассив.
ongoing action~The team is reported to be checking the list.~To be + -ing.~Процесс около точки сообщения.~Не доказанный конец проверки.
accumulated activity~She is said to have been working there for years.~To have been + -ing.~Предшествующая/продолжающаяся деятельность.~Длительность сама не гарантирует непрерывность.
simple passive infinitive~The guide is expected to be revised tomorrow.~To be + V3.~Ожидаемое действие над guide.~Ожидание не выполненная правка.
earlier passive~The map is believed to have been copied.~To have been + V3.~Копирование раньше мнения.~Не to have copied с иной ролью.
current passive process~The rooms are said to be being cleaned.~To be being + V3.~Предполагаемая уборка в процессе.~Being не been; ясный that-clause допустим.
two past layers~The parcel was thought to have arrived on Monday.~Was thought + perfect infinitive.~Прибытие до прошлого мнения.~Само arrive не требует passive.
relative simultaneity~In May, she was believed to live in Leeds.~Simple infinitive относительно May.~Тогда считали, что живёт там.~To live не всегда сейчас.
future reference~She is expected to arrive on Friday.~Simple infinitive с future context.~Прогноз прибытия.~To have не выбирать только из-за Friday.
reporting question~Is the note believed to be genuine?~Инверсия только is с subject.~Вопрос о мнении.~Не Is believed the note.
negative lower clause~The door is believed not to have opened.~Not перед to внутри сообщения.~Считают, что не открылась.~Отличать от отсутствия убеждения.
negative reporting~The door is not known to have opened.~Not относится к known.~Нет установленного знания об открытии.~Не доказывает, что не открывалась.
there present~There are believed to be two copies.~There + are по two copies.~Мнение о существовании.~There не заменять it автоматически.
there earlier~There is thought to have been a second entrance.~There + is + to have been.~Предполагаемое прежнее существование.~Не доказанная находка входа.
source named~The map is believed by the curator to be a copy.~By называет носителя мнения.~Прозрачная атрибуция.~Не обязательно исполнитель копирования.
retained modal~It is reported that the guide may change.~That-clause сохраняет may.~Сообщённая возможность изменения.~Не превращать в guide is reported to change.
verb restriction~It is suggested that the tour be postponed.~Suggested + that-clause.~Рекомендация, не подтверждённый перенос.~Не применять subject + is suggested to механически.
modal passive~The names must be removed before release.~Modal + be + V3.~Требование к будущей версии.~Требование не выполнение.
modal process~The label may be being replaced.~May + be being + V3.~Возможный текущий процесс.~Не доказанный результат.
modal perfect passive~The date might have been changed.~Might + have been + V3.~Версия более ранней правки.~Не гарантия и не обвинение.
passive gerund~Jo dislikes being interrupted.~Being + V3 после dislikes.~Получать вмешательство.~Не to be после выбранного dislikes.
perfect passive gerund~Jo remembers having been asked.~Having been + V3 после remembers.~Воспоминание о полученной просьбе.~Не автоматически agreed или did.
causative make~We were made to wait outside.~Were made + to + base.~Нас заставили ждать.~В active made us wait нет to.
permission with allow~We were allowed to leave.~Were allowed + to + base.~Разрешение уйти.~Не доказательство ухода.
preposition retained~The complaint has been looked into.~Has been + looked into.~Проверка обращения.~Не обязательно решение проблемы.
heavy chain~It is reported that the roof has been being repaired.~Perfect continuous passive возможен.~Длительный процесс над roof.~Часто яснее they have been repairing; не терять источник.
factivity of know~The key is known to have been copied.~Known сильнее believed.~Говорящий подаёт копирование как установленное.~При цитировании проверить, кто и на каком основании знает.`);
export const mandativePatterns=rows(`base after demand~They demand that she attend.~That + subject + base.~Требуемое участие.~Не attends в явно выбранном subjunctive.
past reporting verb~They demanded that she attend.~Base не согласуется с demanded.~Требование в прошлом.~Не автоматическая замена attend на attended.
be for all persons~I suggest that he be present.~Be при he.~Желаемое присутствие.~Не утверждение, что он уже здесь.
negative subjunctive~We request that she not leave.~Subject + not + base.~Просьба не уходить.~Без добавочного does в этой модели.
passive subjunctive~They recommend that it be checked.~Be + V3.~Рекомендуемая проверка.~Не доказательство проверки.
negative passive~They ask that it not be published.~Not + be + V3.~Просьба не публиковать.~Не потерять отрицание.
should alternative~They recommend that it should be checked.~Should + base; be checked внутри.~Нормативная альтернатива.~Не ошибка только потому, что ключ был be.
indicative alternative~I recommend that she doesn't wait.~Обычная finite clause возможна.~Разговорная рекомендация в подходящем контексте.~Не называть всякое indicative сообщением о факте.
essential requirement~It is essential that every visitor sign in.~Adjective + that + base.~Требование регистрации.~Every visitor → обычное signs, но здесь mandative sign.
important actual fact~It is important that she was there.~Indicative past.~Важен факт прежнего присутствия.~Не исправлять was в требование быть.
noun recommendation~Our recommendation is that the route be reviewed.~Noun + be + that-clause.~Содержание рекомендации.~Не принятое решение автоматически.
noun request~There was a request that the names not be shared.~Request + that-clause.~Сообщённая просьба.~Отсутствие ответа не согласие.
insist demand~Jo insists that the gate remain shut.~Mandative base.~Требование состояния.~Не факт, что gate shut.
insist assertion~Jo insists that the gate was shut.~Indicative past.~Настойчивое утверждение.~Не независимое подтверждение.
suggest proposal~Jo suggests that we postpone the visit.~Желаемое действие.~Предложение.~Может быть не принято.
suggest evidence~The marks suggest that water entered.~Indicative о прошлом.~Данные указывают на версию.~Suggest не равно prove.
suggest ing~Jo suggests checking both copies.~Suggest + -ing.~Предложение действия.~Кто проверит, уточнить отдельно.
suggest recipient~Jo suggested to me that we wait.~To me — адресат речи.~Мне предложен совместный план.~Не Jo suggested me to wait в выбранной модели.
advise object~Jo advised me not to wait.~Object + not to + base.~Совет конкретному человеку.~Полученный совет не принятие.
insist on~Jo insists on checking the names.~Preposition + -ing.~Настаивает на действии.~To/that не универсальны для любого глагола.
request versus require~Visitors are requested to sign in.~Request с passive + to.~Формальная просьба.~Реальная обязательность зависит от правила.
until boundary~They demand that it remain closed until Friday.~Base + closed + until.~Сохранить состояние до границы.~Не заменить until на by.
completion by deadline~They ask that the list be ready by Friday.~Be ready + by.~Готовность не позднее срока.~Не требование ждать до Friday.
for a person to~It is important for Jo to attend.~For + person + to + base.~Нужное участие Jo.~Не приписывать ту же модель каждому adjective.
whether as question~We asked whether he was ready.~Whether + finite clause.~Вопрос о состоянии.~Не mandative request, чтобы стал готов.
whether after request~We requested that he confirm whether it was ready.~Два уровня: requested + confirm, embedded question.~Просьба уточнить факт.~Не превращать неизвестность в готовность.
fixed concession~Be that as it may, the question remains.~Устойчивая уступительная формула.~Как бы то ни было.~Не открытое разрешение любого be в clause.
so be it~If that is the only option, so be it.~Устойчивая формула принятия.~Пусть будет так.~Тон может передавать неохотное согласие.`);
export const modalDistancePatterns=rows(`tentative opinion~I would say the estimate is optimistic.~Would + base.~Сдержанное мнение сейчас.~Не обязательно прошлое или скрытое if.
tentative appearance~That would seem unlikely.~Would + seem + adjective.~Осторожная оценка.~Не невозможность.
past polite opening~I was wondering if you could check the date.~Past form для текущей просьбы.~Дистанция, не дата вопроса.~Не требует прошлой возможности.
present polite opening~I wonder if you can check the date.~Present с косвенным вопросом.~Текущая просьба тоже допустима.~Past не единственная вежливая форма.
mind request~Would you mind checking the date?~Mind + -ing.~Просьба о действии.~No, not at all обычно согласие, ответ раскрыть.
permission~Might I ask one question?~Modal + subject + base.~Формальная просьба разрешить.~Не прошлое.
probability well~The estimate may well change.~May well + base.~Вполне вероятная возможность.~Не «хорошо изменится».
no better alternative~We might as well compare the copies now.~Might as well + base.~Разумное действие без лучшей альтернативы.~Не то же, что might well happen.
additional possibility~We may also need a translator.~May also + base.~Возможно, дополнительно нужен переводчик.~Не may as well.
possible negative~They may not have received it.~May + not + have + V3.~Возможно, не получили.~Не запрет получать.
impossibility claim~They cannot have received it before it was sent.~Cannot + have + V3.~Вывод о невозможности раньше отправки.~Проверить временные данные.
limited inference~A delay does not necessarily mean refusal.~Not necessarily ограничивает вывод.~Отказ не обязателен.~Не доказательство согласия.
general possibility~Old labels can fade.~Can + base.~Общее свойство/возможность.~Не факт выцветания конкретного label.
ability after modal~We may be able to compare them.~May + be able to.~Возможная способность/доступность.~Не два core modals may can.
future necessity~We will have to revise the note.~Will + have to.~Будущая необходимость.~Не will must в изучаемом стандарте.
need modal negative~You needn't print it.~Need not + base.~Нет необходимости.~Не запрет.
need lexical negative~You don't need to print it.~Do-support + need to.~То же отсутствие необходимости.~Не don't need print.
need noun~She doesn't need a badge.~Main verb + noun.~Предмет не нужен.~Не She needn't a badge.
need passive meaning~The label needs replacing.~Need + -ing.~Ярлык требует замены.~Не ярлык сам заменяет что-то.
need past performed~You needn't have printed it.~Needn't have + V3.~Напечатали, но зря в этой прошлой оценке.~Не переносить вывод на every modal perfect.
need past unspecified~You didn't need to print it.~Didn't need to + base.~Не было необходимости.~Выполнение зависит от продолжения.
expectation should~The parcel should be here by now.~Should + base.~Ожидание по данным.~Не приказ посылке.
advice should~You should check the address.~Should + base.~Совет.~Не факт проверки.
deduction must~The copy must have been changed.~Must + have been + V3.~Сильный вывод о прошлом.~Не прошлая обязанность.
obligation must~The copy must be checked before release.~Must + be + V3.~Требование.~Не выполненная проверка.
unwillingness would~I asked Jo to answer, but she wouldn't.~Would not в прошлой ситуации.~Отказ/нежелание в заданном контексте.~Не автоматически отсутствие способности.
malfunction would~The lock wouldn't turn.~Would not с вещью.~Не поддавалось действию.~Не человеческий умысел замка.
expected due~The guide is due to arrive at noon.~Be due to + base.~Ожидаемое время.~Не гарантированное прибытие.
probable likely~The guide is likely to arrive late.~Be likely to + base.~Вероятный исход.~Нет фиксированного процента.
bound prediction~That wording is bound to cause questions.~Be bound to + base.~Сильный прогноз говорящего.~Не измеренная статистическая гарантия.
supposed arrangement~We are supposed to meet at noon.~Be supposed to + base.~Договорённость/ожидание.~Не факт встречи.
supposed reputation~The café is supposed to be excellent.~Be supposed to + base.~Репутация, чужая оценка.~Не обязанность кафе в этом смысле.
formal instruction~You are not to share the draft.~Be not to + base.~Формальный запрет.~Не отсутствие необходимости.
concessive modal~It may be small, but it is useful.~May + contrast with but.~Признание довода с уступкой.~Не всегда неуверенность в известном размере.`);
export const reportingPassiveReference={id:'reporting-passive',title:'Сообщённый факт: сложный пассив и относительное время',intro:['32 модели для двух слоёв: кто и когда сообщает; что и когда, по этому источнику, происходит. Не полный перечень глаголов и всех пассивных конструкций.'],headers,rows:reportingPassivePatterns,sources:modalSources,practice:rows(`She is thought to have left: что раньше?~Уход раньше нынешнего мнения.
She was thought to live there: обязательно живёт сейчас?~Нет, состояние отнесено к прошлому мнению.
Is said to have been copied: кто копировал?~Не назван; подлежащее получало действие.
Are said to be being checked: конец доказан?~Нет, это сообщённый процесс.
Is not known to have failed: доказано отсутствие сбоя?~Нет, отрицание знания не равно знанию отрицания.
Is believed not to have failed: где not?~Внутри содержания мнения; источник предполагает отсутствие сбоя.
It is reported that she may leave: можно удалить may?~Нет, потеряется модальность.
There are believed to be two copies: что согласует are?~Two copies.
By the curator после believed: обязательно исполнитель копирования?~Нет, здесь носитель мнения.
The team was made wait: исправь.~The team was made to wait.
May be being replaced: being лишнее?~Нет, оно сохраняет текущий пассивный процесс.
Might have been replaced: выполнение подтверждено?~Нет, только версия.
Dislikes being interrupted: кто получает действие?~Подлежащее dislikes.
Remembers having been asked: просьба исполнена?~Не установлено.
Has been looked into: into можно убрать?~Нет, оно входит в выбранный глагол.
Почему длинную цепочку иногда разворачивают?~Для ясности, сохраняя источник, участников, время и неопределённость.`)};
export const mandativeReference={id:'mandative-choices',title:'Рекомендация, требование и subjunctive',intro:['28 моделей желательного действия, сообщения о факте и нормативных альтернатив. Это не вся система subjunctive и не таблица универсальных замен после любого reporting verb.'],headers,rows:mandativePatterns,sources:modalSources,practice:rows(`They demanded that she attend: почему не attended?~В выбранном mandative subjunctive base не получает прошлое от demanded.
It is essential that he be ready: почему be?~Желаемое состояние, base для всех лиц.
Request that she not leave: нужен does?~Нет, в этой subjunctive-модели not перед base.
Recommend that it be checked: проверили?~Нет, сообщена рекомендация.
Should be checked допустимо?~Да, нормативная альтернативная модель.
Recommend that she doesn't wait: всегда ошибка?~Нет, indicative-вариант возможен; формальная base-модель другая.
Insisted that he leave / had left: различие?~Первое выбранное требование, второе утверждение о прошлом уходе.
Marks suggest water entered: совет воде?~Нет, данные указывают на прошлую версию.
Suggested me to wait: исправь с that.~Suggested that I wait / suggested to me that I wait.
Advised me not to wait: чей будущий выбор?~Адресата me; совет не доказывает принятие.
Insist on check: исправь.~Insist on checking.
Remain closed until Friday: заменить by?~Нет, длительность состояния и конечный срок различны.
Be ready by Friday: обязательно ровно Friday?~Нет, можно раньше.
Important that she was there: всегда be?~Нет, может быть оценкой известного факта.
Requested that he confirm whether…: сколько смысловых слоёв?~Просьба подтвердить и вложенный вопрос с неизвестным ответом.
So be it: всякий subjunctive разрешён?~Нет, это отдельная устойчивая формула.`)};
export const modalDistanceReference={id:'modal-distance',title:'Модальность: уверенность, дистанция, необходимость',intro:['34 контекстные модели. May/might/could не назначаются фиксированные проценты, а формальная дистанция не равна достоверности или вежливости при любом тоне. Другие модальные значения изучаются также в A203, B102 и B202.'],headers,rows:modalDistancePatterns,sources:modalSources,practice:rows(`I would say: обязательно прошлое?~Нет, сдержанное мнение может относиться к сейчас.
I was wondering: просьба уже отменена?~Не следует; past form может смягчать текущую просьбу.
Would you mind check: исправь.~Would you mind checking.
May well / may as well: одно?~Вероятность и разумный выбор без лучшей альтернативы различны.
May also need: as well вместо also?~Не без изменения смысла; здесь добавочная возможность.
Not necessarily refusal: точно согласие?~Нет, отказ не доказан, согласие тоже.
May can compare: исправь.~May be able to compare.
Will must revise: исправь.~Will have to revise.
Needn't print: запрет?~Нет, нет необходимости.
Doesn't need print: исправь.~Doesn't need to print.
Label needs replacing: кто заменяет?~Не назван; label получает действие.
Needn't have printed: в обычной прошлой оценке напечатали?~Да, но действие было излишним.
Didn't need to print: обязательно не печатали?~Нет, само выполнение уточняется.
Parcel should be here: приказ?~Нет, ожидание.
Was supposed to arrive: прибытие доказано?~Нет, это договорённость или ожидание.
Lock wouldn't turn: умысел?~Нет, фраза с вещью описывает неподатливость/неисправность.`)};

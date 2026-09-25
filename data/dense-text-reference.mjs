export const denseTextSources=[
 ['Cambridge: nominalisation','https://dictionary.cambridge.org/uk/grammar/british-grammar/nouns-forming-nouns-from-other-words'],
 ['Cambridge: noun phrases','https://dictionary.cambridge.org/grammar/british-grammar/noun-phrases-dependent-words'],
 ['British Council: possession and noun modifiers','https://learnenglish.britishcouncil.org/free-resources/grammar/c1/possession-noun-modifiers'],
 ['British Council: avoiding repetition','https://learnenglish.britishcouncil.org/free-resources/grammar/c1/avoiding-repetition-text'],
 ['Purdue OWL: parallel structure','https://owl.purdue.edu/owl/general_writing/mechanics/parallel_structure.html'],
 ['Purdue OWL: sentence clarity','https://owl.purdue.edu/owl/general_writing/mechanics/sentence_clarity.html'],
 ['Purdue OWL: concision','https://owl.purdue.edu/owl/general_writing/academic_writing/conciseness/index.html'],
 ['Manchester: referring to sources','https://www.phrasebank.manchester.ac.uk/referring-to-sources/']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
const headers=['Модель','Авторский пример','Разбор','Ограничение'];
export const nominalPatterns=rows(`-tion~They revised it → its revision.~Действие становится именем.~Не любой глагол принимает -tion.
-ment~They assessed it → their assessment of it.~Меняется управление.~Оценка не обязательно положительная.
-al~They refused → their refusal.~Суффикс зависит от слова.~Не refusalment.
irregular formation~It grew → its growth.~Меняется основа.~Не growment.
adjective → noun~It is reliable → its reliability.~Качество как предмет обсуждения.~Не доказательство надёжности другой версии.
zero change~They changed it → a change.~Та же письменная форма.~Смысл и исчисляемость по контексту.
event vs possibility~They may close it → its possible closure.~May нельзя выбросить.~Possible не actual.
actor + object~the review of the plan by Jo~Of вводит объект, by — проверяющего.~Of не всегда принадлежность.
ambiguous of~the criticism of the editor~Редактор может критиковать или получать критику.~Уточнить роли, не угадывать.
possessive~the editor's criticism of the plan~Редактор источник критики.~Притяжательная форма не только владение.
governed preposition~a reduction in waiting time~In указывает уменьшаемую величину.~Не выбирать по русскому «чего».
amount vs endpoint~a reduction of ten minutes / to ten minutes~На десять / до десяти.~Сохранять исходную величину.
noun + to~a decision to postpone~Действие, которое решили выполнить.~Решение не выполнение.
noun + that~the claim that it works~Полная clause раскрывает содержание claim.~Claim не fact.
noun + relative~the claim that Jo questioned~That — объект questioned.~Claim не добавляет пропущенный объект.
head singular~The list of revisions is long.~Head list определяет is.~Не are по revisions.
head plural~The revisions to the list are minor.~Head revisions определяет are.~Смысл minor требует контекста.
mass head~The evidence from two studies is limited.~Evidence в этом значении U.~Не two evidences.
count unit~two pieces of evidence~Считаются pieces.~Не делают источники независимыми.
noun modifier~a visitor survey~Survey о посетителях/для них по контексту.~Не универсальное владение.
measurement modifier~a six-week trial~Week singular внутри modifier.~Trial lasted six weeks — plural.
plural modifiers~a sports centre / a savings account~Устойчивые исключения.~Не запрещать любой plural modifier.
long complement~the review of requests received in May~Received обычно относится к requests.~Не приписывать дату всему процессу без контекста.
attachment ambiguity~a photo of the guide with a camera~Кто с камерой, не установлено.~Перестрой полным предложением.
gerund clause~Reviewing the files carefully takes time.~Глагольное reviewing + object + adverb.~Не the reviewing the files.
derived noun~The careful review of the files took time.~Adjective + noun + of.~Careful не carefully перед review.
scope~the proposed removal of two signs~Предложено убрать два знака.~Не факт удаления.
unpacking~The proposal was rejected; no reviewer is named.~Можно сохранить пассив.~Нельзя выдумать автора ради active voice.`);
export const referencePatterns=rows(`it~A leaflet arrived. It was damaged.~Тот же предмет.~Не автоматически предыдущая ситуация целиком.
this + label~The route is longer. This change affects cyclists.~Названа связь с целым тезисом.~Label должен соответствовать фактам.
this alone~The price doubled. This surprised Jo.~Ссылка на ситуацию допустима.~Не объявлять любое this без noun ошибкой.
these~Two objections remain. These need answers.~Plural reference.~Не this objections.
that of~Its cost exceeds that of the smaller plan.~Cost сравнивается с cost.~Не со smaller plan как предметом.
those of~Their priorities differ from those of the board.~Plural substitution.~Не that для priorities.
such a~Such a delay would matter.~Один случай этого типа.~Не a such delay.
such + mass~Such information is useful.~U без a/an.~Не such an information.
such + plural~Such delays are costly.~Случаи того же типа.~Не доказательство всех возможных задержек.
former/latter~A bus and a tram were compared. The latter was cheaper.~Второй из двух названных.~В длинном тексте лучше повторить noun.
which clause~The road closed, which delayed the bus.~Which может ссылаться на ситуацию.~Причину утверждает автор; проверить источник.
ambiguous pronoun~Jo emailed Kim after she arrived.~She не выбирается по близости.~Назвать человека при наличии данных.
singular they~A reader can save their draft.~Гендерно-нейтральная singular reference.~Не ошибка согласования.
dummy it~It is difficult to compare them.~It не замещает предмет.~Не искать ложный antecedent.
prospective this~Remember this: the price excludes travel.~Ссылка вперёд.~После двоеточия содержание должно появиться.
label neutrality~This proposal still needs approval.~Статус proposal сохранён.~This decision завышает статус.
lexical chain~application → application → application~Повтор сохраняет одну сущность.~Request не всегда точный синоним.
given → new~The survey identified a delay. That delay affects bookings.~Предыдущее становится опорой следующего.~Не жёсткий порядок всех предложений.
constant topic~The report describes costs. It also lists risks.~Одна тема, разные сведения.~Монотонность оценивается в целом.
split topic~Two options remain. The first… The second…~Обещанные две ветви раскрыты.~Не потерять вторую.
contrast~The form is shorter. However, approval still takes a week.~Связь контраста.~However не причинное therefore.
cause cautiously~Both changed; the cause is unknown.~Совместное изменение не устанавливает причину.~Не добавить as a result.
source continuity~According to Jo… Jo also reports…~Источник сохраняется через абзац.~Не сделать чужое утверждение собственным наблюдением.
reference plus scope~Of 20 respondents, 12 agreed. This majority…~Большинство ответивших.~Не всего населения.`);
export const editingPatterns=rows(`parallel -ing~The role involves planning, checking and reporting.~Одна рамка involves + -ing.~Не ошибочное requires to report в этом ряду.
parallel infinitives~We aim to compare, revise and retest.~To можно разделять.~Повторение to тоже допустимо.
parallel clauses~Check whether it arrived and whether it opened.~Одинаковые по функции вопросы.~Не утверждать ответы заранее.
both…and~Both the cost and the delay matter.~Сопоставимые элементы.~Plural verb при двух отдельных субъектах.
either…or~Either revise the note or remove it.~Две альтернативы-действия.~Не превращать or в and.
not only…but also~She not only drafted it but also checked it.~Два действия одного субъекта.~Не ограничивать only объектом случайно.
readable mismatch~The guide is brief and easy to use.~Разные внутренние формы, одна функция.~Не все различия требуют исправления.
clause boundary~The draft is ready; approval is pending.~Две independent clauses.~Одна запятая не универсальная связь.
however punctuation~It is short. However, it is unclear.~Sentence adverb отдельно.~Не however как обычное and.
subordination~Although it is short, it is unclear.~Contrast clause + main clause.~Без дублирующего but в базовой модели.
relative compression~forms submitted on Tuesday~Кто/что submitted — forms.~Не формы, которые только могут быть поданы.
modal retained~forms that may be submitted~May остаётся.~Submitted без may меняет статус.
shared actor~Having checked it, Jo signed it.~Jo выполняет оба действия.~Не подпись самопроверяющегося документа.
different actors~After Jo checked it, Kim signed it.~Оба участника сохранены.~Не Having checked it, Kim… если проверял Jo.
passive retained~It was removed; the remover is unknown.~Исполнитель не придуман.~Active не абсолютная цель.
scope retained~Some of the replies were incomplete.~Ограниченная группа.~Не The replies were incomplete без контекста.
time retained~It was usable in the May trial.~Рамка измерения.~Не всегда usable.
condition retained~It may help if staff are trained.~И неопределённость, и условие.~Не It helps.
negative scope~Not all files failed.~Не все отказали.~Не все успешно сработали.
metric retained~20 visits by 12 people~Посещения и люди различны.~Не 20 visitors.
concision~We made a decision → We decided.~Убирается поддерживающий глагол.~Не каждый noun хуже verb.
useful repetition~The draft… The draft…~Стабильный референт.~Вариативность слов не самоцель.
plain paraphrase~Processing takes a week.~Кратко, но без выдуманного агента.~Если важна ответственность, назвать известного.
audit~Source → claims → revision → back-check~Проверка каждого значимого утверждения.~Число слов не оценка точности.`);
export const nominalReference={id:'nominal-groups',title:'Номинализация и сложные именные группы',intro:['28 моделей для чтения и построения плотного текста. Это не полный словарь словообразования и не правило превращать каждое действие в существительное. Примеры и задания авторские; источники — для дополнительного объяснения.'],headers,rows:nominalPatterns,sources:denseTextSources,practice:rows(`Approve → noun?~Approval, не approvement.
Decide → noun?~Decision.
Reliable → noun?~Reliability.
Review of a plan by Jo: кто проверяет?~Jo, plan получает действие.
Criticism of Jo: роль Jo ясна?~Нет, нужна ситуация.
Reduction in / of / to: что меняется?~Величина / размер уменьшения / конечное значение.
List of changes is или are?~Is: head list.
Evidence from three notes: U или C?~U в этом значении.
An eight-days trial: исправь.~An eight-day trial.
Sports centre: удалить s?~Нет, устойчивый plural modifier.
Carefully review / careful review of: почему?~Verb с adverb и noun с adjective.
Possible closure: закрытие уже было?~Не следует из possible.
The claim that it works: fact?~Нет, передано утверждение.
The claim that Jo rejected: кто объект?~Claim, that замещает его внутри relative clause.
Разверни the proposed revision.~Someone proposes revising it; кто именно — только если известно.
Стоит ли все nominalisations убрать?~Нет, сохранять полезные обозначения и ясные связи.`)};
export const textReference={id:'reference-chains',title:'Референция и движение информации в тексте',intro:['24 модели связи между предложениями. Однозначность зависит от контекста, а не только от ближайшего существительного. Повтор термина бывает полезнее неточного синонима.'],headers,rows:referencePatterns,sources:denseTextSources,practice:rows(`This objections: исправь.~These objections.
Such a feedback: исправь.~Such feedback: U.
A such plan: исправь.~Such a plan.
Cost compared with that of…: что that?~Cost, не весь другой проект.
Results compared with those of…: что those?~Results.
Bus then tram; latter?~Tram, второй из двух.
Jo called Kim when she arrived: кто she?~Без контекста неоднозначно.
It is hard to wait: что it заменяет?~Это dummy it, не предмет.
A visitor can save their form: ошибка?~Нет, singular they нормативно.
This proposal → this decision: можно всегда?~Нет, изменяется статус.
12 из 20 respondents: большинство всех жителей?~Нет, только этих ответивших.
Один термин повторён трижды: обязательно плохо?~Нет, проверить ясность.
This: дальше идёт содержание — допустимо?~Да, возможна ссылка вперёд.
However доказывает причину?~Нет, контраст.
Две ветви обещаны, одна описана: что исправить?~Добавить вторую или изменить обещанную структуру.
Пересказ чужого отчёта: терять according to?~Нет, сохранять источник где это существенно.`)};
export const editingReference={id:'meaning-preserving-editing',title:'Параллельность и редактура без потери смысла',intro:['24 модели редакторской проверки. Краткость — не минимальное число слов. Некоторые грамматически разные элементы совместимы по функции; не исправлять естественный текст ради внешней симметрии.'],headers,rows:editingPatterns,sources:denseTextSources,practice:rows(`Involves checking, comparing and to report: исправь.~…and reporting.
To check, compare and report: повторять to обязательно?~Нет, оба варианта допустимы.
Brief and easy to read: ошибка?~Нет, оба элемента описывают качество.
Either check or delete: оба действия обязательны?~Нет, задана альтернатива.
Draft ready, approval pending: нужен автоматический зачёт пунктуации?~Нет, полные clauses и punctuation проверяются вручную.
Although…but: базовая правка?~Оставить although или but с соответствующей структурой.
May be delayed → delayed: потери?~Возможность превращена в утверждение.
Having checked it, the report was signed: кто проверял?~Уточнить человека и восстановить логический субъект.
By Friday → until Friday: равно?~Нет, срок и длительность различны.
Not all failed → all passed: равно?~Нет, исходы изменены.
20 visits → 20 people: равно?~Нет, метрики различны.
Some users → users in general: равно?~Нет, потеряна граница группы.
Unknown agent: придумать staff?~Нет, допустим пассив.
Source says likely: удалить likely?~Нет, усилится уверенность.
Сокращённый текст длиннее лимита: удалить условие?~Перестроить второстепенное, условие сохранить.
Когда редактура закончена?~После сверки смыслов, читабельности, грамматики и реакции читателя, не одного подсчёта слов.`)};

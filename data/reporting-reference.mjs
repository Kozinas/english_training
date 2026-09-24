// Original examples and explanations; sources are for grammar verification.
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const reportingSources=[
 ['British Council: reported statements','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-statements'],
 ['British Council: reported questions and requests','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-questions'],
 ['British Council: question tags','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/question-tags'],
 ['Cambridge: indirect speech, reference and modals','https://dictionary.cambridge.org/uk/grammar/british-grammar/reported-speech-indirect-speech'],
 ['Cambridge: reporting verbs','https://dictionary.cambridge.org/us/grammar/british-grammar/reporting-verbs'],
 ['Cambridge: imperatives and tags','https://dictionary.cambridge.org/uk/grammar/british-grammar/imperative'],
 ['Cambridge: tags and their meanings','https://dictionary.cambridge.org/us/grammar/british-grammar/tags']
];
export const reportingPatterns=rows(`say~Lena said (that) the door was locked.~say + clause~Сообщение без обязательного адресата.~Не said me без to.
tell~Lena told me (that) the door was locked.~tell + recipient + clause~Адресат прямо назван.~Tell a story/the truth — другие модели.
say to~Lena said to me, “The door is locked.”~say to + recipient~Адресат после to.~Не tell to me в обычном пересказе.
explain~She explained the rule to us.~explain something to someone~Предмет объяснения и адресат.~Не explained us the rule.
that~He said that he was ready. / He said he was ready.~That часто опускается.~Оба нормативны.~Не менять смысл при опускании.
Present Simple~“I work here.” → She said she worked there.~Present → Past при backshift.~Сдвиг из прошлой точки речи.~Worked не доказывает, что больше не работает.
Present Continuous~“I’m waiting.” → He said he was waiting.~am/is/are -ing → was/were -ing~Процесс в момент исходной речи.~Не завершение ожидания.
Present Perfect~“I’ve sent it.” → She said she had sent it.~have/has V3 → had V3~Раньше исходного сообщения.~Сообщение о выполнении не независимая проверка.
Present Perfect Continuous~“I’ve been waiting.” → He said he had been waiting.~have/has been -ing → had been -ing~Деятельность до исходной речи.~Полная практика Past Perfect Continuous в B201.
Past Simple~“I lost it.” → She said she had lost it.~Past → Past Perfect при полном backshift.~Событие раньше сообщения.~Past Simple тоже может сохраняться по контексту.
Past Continuous~“I was waiting.” → He said he had been waiting.~was/were -ing → had been -ing~Сдвиг прежнего процесса.~Не обязательная механическая замена во всяком контексте.
Past Perfect~“I had left.” → She said she had left.~had V3 остаётся.~Не добавлять ещё одно had.~Сохранить временную связь.
will~“I’ll call.” → He said he would call.~will → would при backshift.~Будущее из прошлой точки.~Обещание не доказательство звонка.
can~“I can help.” → She said she could help.~can → could при backshift.~Сообщённая возможность.~Не факт оказанной помощи.
may possibility~“It may rain.” → He said it might rain.~may → might при backshift.~Возможность, не уверенный прогноз.~Не все значения may сводятся к might.
should~“You should rest.” → She said I should rest.~should обычно остаётся.~Совет.~Не обязанность и не выполненное действие.
would/could/might~He said he might join us.~Обычно сохраняются.~Значение определяется контекстом.~Не добавлять would перед каждым глаголом.
must obligation~“I must leave.” → She said she had to leave.~Обязанность часто передаётся had to.~По контексту возможно сохранение must.~Не универсальная обязательная замена.
must deduction~“It must be wrong.” → He said it must be wrong.~Must вывода обычно остаётся.~Вывод автора сообщения.~Не приказ считать что-то неверным.
no backshift~She said she lives nearby.~Нынешняя актуальность допускает Present.~Говорящий представляет факт как актуальный.~Не ошибка только из-за said.
present reporting~She says she needs the key.~Reporting verb в Present.~Обычный текущий пересказ.~Не обязательный сдвиг в Past.
own I~“I’m ready,” I said. → I said I was ready.~Пересказываю собственные слова.~I остаётся I.~Не автоматическое I → he.
you~Mara told me, “You are early.” → Mara said I was early.~Местоимение по реальному адресату.~Другой адресат потребует другой формы.~Без контекста неоднозначно.
we~“We agree,” Nina and I said. → We said we agreed.~Рассказчик входит в we.~We сохраняется.~Не всегда we → they.
now~“I’m busy now.” → He said he was busy then.~Now → then при смене точки.~Если момент тот же, now может остаться.~Не замена по одному слову.
today~“I’ll send it today.” → She said she would send it that day.~Today → that day при другом дне.~Точную дату иногда яснее назвать прямо.~Не менять календарное событие.
tomorrow~Monday: “I’ll come tomorrow.” → On Monday he said he would come on Tuesday.~Tomorrow относительно понедельника.~The next/following day тоже возможно.~Не завтра от дня нового пересказа.
yesterday~“I called yesterday.” → She said she had called the day before.~Yesterday → the day before при смене рамки.~Сначала установи день исходной речи.~The previous day — допустимый вариант.
here/there~She said she liked it here/there.~Выбор по месту нынешнего рассказчика.~Here может сохраняться на том же месте.~Не обязательно there после said.
this/that~He said this/that was his bag.~Указание по текущему контексту.~This может сохраняться у того же предмета.~That-союз и that-указатель различны.
report vs fact~He said the test had passed; we have not checked the result.~Источник и подтверждение раздельно.~Зафиксированы слова, не независимое доказательство.~Не менять said на proved.
scope~She said two pages were wrong.~Количество и отрицание сохраняются.~Две страницы, не все.~Это карта основных моделей, не весь словарь reporting verbs.`);
export const reportingReference={id:'reported-speech',title:'Пересказ: глаголы, времена, лица и точка отсчёта',sources:reportingSources,intro:['32 модели пересказа утверждений. Временные строки показывают backshift, когда он выбран по контексту или явно требуется заданием, а не обязательную замену каждого глагола после said.','Это не все способы косвенной речи и не полный словарь reporting verbs. Сохраняйте источник, степень уверенности, количество, отрицание и реального адресата. Таблица не подтверждает истинность пересказываемого сообщения.'],headers:['Модель','Пример','Устройство','Смысл','Ограничение'],rows:reportingPatterns,practice:[['She ___ me the location. (said/told)','told'],['She said ___ me that she was ready.','to'],['Explain me the rule: исправь.','Explain the rule to me.'],['Backshift am waiting → ?','was waiting / were waiting по новому подлежащему'],['Backshift has finished → ?','had finished'],['Backshift will → ?','would'],['Backshift can → ?','could'],['Had left при backshift?','Остаётся had left.'],['Must вывода всегда had to?','Нет, обычно остаётся must.'],['She said she lives here: обязательно ошибка?','Нет, настоящее допустимо для актуальной информации.'],['I said I was tired: I нужно менять?','Нет, пересказываю свои слова.'],['We включает рассказчика: обязательно they?','Нет, we может сохраняться.'],['В понедельник tomorrow — какой день?','Вторник, независимо от даты нового пересказа.'],['Here всегда заменяется there?','Нет, зависит от нынешнего места.'],['She said he was ill: болезнь закончилась?','Сдвиг времени этого не доказывает.'],['Said the test passed = verified it passed?','Нет, сообщение и независимая проверка различны.']]};
export const questionTagPatterns=rows(`embedded wh~Could you tell me where the exit is?~Wh + subject + verb внутри.~Внешняя часть остаётся вопросом.~Не where is the exit внутри.
embedded do~Do you know when the shop opens?~Does из внутреннего вопроса убирается, opens получает -s.~Порядок утверждения внутри.~Do you know само остаётся вопросом.
embedded negative~Do you know why she didn’t reply?~Отрицательный didn’t сохраняется.~Убирается инверсия, не любое do.~Не why she not replied.
reported yes/no~He asked if/whether I was ready.~ask + if/whether + subject + verb~Пересказ вопроса, не условие.~Сам вопрос не доказывает готовность.
reported wh~She asked where I lived.~ask + wh + subject + verb~Вопрос о месте.~Не where did I live.
subject who~He asked who called.~Who — подлежащее.~Отдельное подлежащее не вставляется.~Не who did called.
object who~He asked who I called.~I — подлежащее, who — объект.~Сохраняется исполнитель звонка.~Не He asked who called, если спрашивали об адресате.
whether to~I don’t know whether to wait.~whether + to-infinitive~Выбор действия.~Не if to wait.
if not conditional~I wonder if she will join.~If = whether.~Will допустим о будущем.~Не правило future conditional.
polite could~Could you tell me what this means?~Could относится к просьбе.~Means остаётся настоящим.~Could не требует автоматического backshift внутри.
punctuation~She asked where it was. / Could you tell me where it is?~Знак по целому предложению.~Пересказ-утверждение / текущий вопрос.~Не удалять ? из вежливого вопроса.
request~She asked me to wait.~ask + recipient + to~Просьба.~Не доказательство, что я подождал.
negative request~She asked me not to interrupt.~ask + recipient + not to~Просьба не делать.~Не ask me don’t interrupt.
instruction~He told us to use the side door.~tell + recipient + to~Указание.~Не подтверждает выполнение.
offer~She offered to carry the box.~offer + to~Предложение своей помощи.~Не She offered me to carry в этом смысле.
suggestion~He suggested checking the date.~suggest + -ing / that-clause~Предложение варианта.~Не He suggested me to check.
be tag~The room is free, isn’t it?~be + pronoun; противоположная полярность.~Базовая модель проверки ожидания.~Вопрос не подтверждает факт.
present tag~Mina works here, doesn’t she?~do/does по главному глаголу.~Present Simple без вспомогательного.~Не is she для works.
past tag~They left early, didn’t they?~did для Past Simple active.~Глагол left не переносится в tag.~Не left they.
continuous tag~He is waiting, isn’t he?~Первый вспомогательный is.~Процесс.~Не doesn’t he.
perfect tag~She has arrived, hasn’t she?~Первый вспомогательный has.~Perfect.~Не did she.
modal tag~You can help, can’t you?~Тот же modal.~Ожидаемая возможность.~Не согласие выполнить просьбу.
negative tag base~They didn’t call, did they?~Отрицательная основа → положительный tag.~Проверка отрицательного предположения.~Ответ опирается на факт.
I am~I’m next, aren’t I?~Обычная разговорная модель aren’t I.~Первое лицо am в основе.~Am I not? возможно формально.
there~There is a spare key, isn’t there?~There сохраняется в tag.~Проверка наличия.~Не isn’t it в этой модели.
this/that~This is yours, isn’t it?~This/that → it.~Предмет в единственном числе.~These/those → they.
everyone~Everyone knows, don’t they?~Everyone в основе singular; tag they.~Singular they для неопределённого человека.~Не doesn’t they.
nobody~Nobody called, did they?~Nobody даёт отрицательный смысл.~Положительный tag + they.~Не didn’t they в базовой модели.
nothing~Nothing changed, did it?~Nothing → it; отрицательная основа.~Проверка отсутствия изменения.~Не did they для nothing.
never/hardly~She never complains, does she?~Отрицательное наречие → положительный tag.~Not не обязательно явно написано.~Hardly не равно hard.
let’s~Let’s check, shall we?~Let’s-предложение → shall we.~Совместное действие.~Не will you в этой базовой модели.
imperative~Please wait, will you?~Will you — один из вариантов после просьбы.~Can/could/won’t возможны по тону.~Не считать единственной формой любого приказа.
negative answer~You don’t drive, do you? — Yes, I do. / No, I don’t.~Yes + положительный факт; no + отрицательный.~Да, вожу / нет, не вожу.~Не голое русское согласие с отрицанием.
intonation~The room is free, isn’t it?~Подъём — больше запроса, падение — больше ожидания согласия.~Тенденция, а не детектор намерения.~Произношение требует реального аудио.
same polarity~Oh, you work here, do you?~Положительная основа и положительный tag.~Реакция/интерес/удивление по контексту.~Не ошибка, но не основная тренировочная модель.
lexical have~You have a key, don’t you?~Do с основным have — нейтральная модель.~Haven’t you возможно в некоторых UK контекстах.~Не путать с have got и Perfect.`);
export const questionTagReference={id:'questions-tags',title:'Косвенные вопросы, просьбы и question tags',sources:reportingSources,intro:['36 моделей вложенных вопросов, пересказа просьб и кратких вопросов-подтверждений. Это не все разновидности вопросов, речевых актов или интонации.','Внутри косвенного вопроса обычный порядок subject + verb; внешняя часть может быть вопросом. В tags сначала определите вспомогательный глагол, отрицательный/положительный смысл и местоимение. Здесь основная модель с противоположной полярностью; контекстные варианты не объявляются ошибками.'],headers:['Модель','Пример','Устройство','Смысл','Ограничение'],rows:questionTagPatterns,practice:[['Could you tell me where is it?','Could you tell me where it is?'],['Do you know when does it open?','Do you know when it opens?'],['He asked ___ I was ready.','if / whether'],['I don’t know ___ to wait.','whether'],['She asked where I lived: нужен ?','Нет, всё предложение — утверждение о вопросе.'],['She asked me ___ interrupt. (не перебивать)','not to'],['He suggested me to wait: исправь.','He suggested waiting. / He suggested that I should wait.'],['The bus is late, ___?','isn’t it'],['They work here, ___?','don’t they'],['She has left, ___?','hasn’t she'],['I’m early, ___?','aren’t I'],['Nobody called, ___?','did they'],['Nothing happened, ___?','did it'],['Let’s ask, ___?','shall we'],['You don’t drive, do you? На самом деле вожу.','Yes, I do.'],['Tag в записи доказывает согласие слушателя?','Нет, нужен фактический ответ и контекст.']]};

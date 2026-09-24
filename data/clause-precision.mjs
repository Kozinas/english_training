export const precisionSources=[
 ['British Council: relative pronouns and relative clauses','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/relative-pronouns-relative-clauses'],
 ['Cambridge: defining and non-defining relatives','https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses-defining-and-non-defining'],
 ['Cambridge: whole-sentence relatives','https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses-referring-to-a-whole-sentence'],
 ['British Council: participle clauses','https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses'],
 ['Cambridge: determiners and types of noun','https://dictionary.cambridge.org/grammar/british-grammar/determiners-and-types-of-noun'],
 ['Cambridge: determiner position and order','https://dictionary.cambridge.org/us/grammar/british-grammar/modifiers'],
 ['Cambridge: no, none and none of','https://dictionary.cambridge.org/grammar/british-grammar/no-none-and-none-of'],
 ['Cambridge: all or whole','https://dictionary.cambridge.org/grammar/british-grammar/all-or-whole']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const advancedRelativePatterns=rows(`defining person~The people who registered can enter.~Выбор группы.~Who/that; роль подлежащего.~Не значит, что зарегистрировались все.
defining object~The file which I sent is current.~Выбор объекта.~Which/that/пропуск допустимы.~Which не запрещено в defining.
non-defining subject~Rosa, who runs the club, will call.~Дополнение об установленном человеке.~Запятые; who не пропускается.~Не that.
non-defining object~Rosa, whom we met yesterday, will call.~Дополнение с объектной ролью.~Whom формально; who тоже допустимо.~Пропуск недопустим.
thing supplement~The printer, which is upstairs, is offline.~Добавочная характеристика.~Which, не that.~Главное утверждение остаётся.
whose person~Rosa, whose brother is here, will call.~Принадлежность/отношение.~Whose + noun; без his.~Whose не who’s.
whose thing~The proposal, whose budget is unclear, needs review.~Отношение вещи к части/характеристике.~Whose допускает вещи.~Не ограничивать только людьми.
fronted person~The colleague to whom I wrote replied.~Предлог перед объектным whom.~Формальный стиль.~Не to that / to who в этой учебной формальной модели.
stranded person~The colleague I wrote to replied.~Предлог в конце допустим.~Defining object: можно убрать относительное слово.~Нельзя потерять to.
fronted thing~The tool on which we rely is unavailable.~Предлог перед which.~Rely on сохраняет on.~Не on that.
stranded thing~The tool which we rely on is unavailable.~Предлог в конце.~That/пропуск тоже допустимы здесь.~Не ошибка лишь из-за конечного предлога.
place role~The room where we met is locked.~Место действия.~Where ≈ in which в этой ситуации.~Не добавлять второе in после met.
place object~The room which we painted is locked.~Прямой объект paint.~Which/that/пропуск, не where.~Место как вещь, а не обстоятельство.
time~The day when we met was wet.~Временная связь.~When/on which; возможен пропуск по контексту.~Не каждый when требует on.
reason~The reason why we left is clear.~Причина.~Why/for which; возможны другие модели.~Не the reason because в заданной именной связи.
what~What she wrote surprised me.~«То, что»: отдельное имя перед what не нужно.~The note that she wrote — другая структура.~Не the note what.
whole clause~The bus was cancelled, which changed our plan.~Which относится ко всей ситуации.~Не к одному bus.~Не what/that после запятой.
some of whom~Ten people applied, some of whom had experience.~Часть группы людей.~После of — whom.~Some не даёт точного количества и не обязательно «не все» логически.
both of whom~Two guides joined, both of whom spoke Spanish.~Оба из двух.~Plural verb.~Не all автоматически при неизвестной группе.
neither of whom~Two guides joined, neither of whom was local.~Ни один из двух.~Формальное singular согласование.~В речи встречается plural.
some of which~Six files arrived, some of which were encrypted.~Часть объектов.~Which после of.~Не whom для файлов.
none of which~Six files arrived, none of which were empty.~Ни один объект.~Plural допустимо; singular также возможно по смыслу.~Не объявлять were ошибкой вообще.
some of whose~The author, some of whose notes are missing, called.~Часть принадлежащих автору записей.~Some of whose + plural noun.~Не some whose без of в этой модели.
one of which~Three rooms were available, one of which was quiet.~Один из названной тройки.~Singular was по one.~Остальные не обязательно шумные.
agreement~The engineer who checks the boxes is here.~Согласование с engineer.~Checks и is, не boxes.~Найти ядро обеих частей.
embedded subject~The person who I think called is outside.~Who — субъект called внутри вложения.~I — субъект think, не лишнее слово.~Не удалять I механически.
embedded object~The person who I think she called is outside.~Who — объект called.~She сохраняется как субъект called.~Роли определяются по внутренней структуре.
scope contrast~The guests who booked stayed / The guests, who booked, stayed.~Выбор подгруппы / сведения о всей указанной группе.~Запятые меняют охват.~Не обо всех гостях мира.
attachment~I spoke to the guide near the gate who wore blue.~Место прикрепления может мешать пониманию.~Перестрой с явным именем.~Не угадывать смысл по ближайшему слову.
punctuation~Mira, who lives nearby, can help.~Две границы вставки в середине.~Не отделять subject от verb лишней запятой вне вставки.~Пауза помогает, но не заменяет смысл.
where supplement~We met in Bath, where Rosa lives.~Добавочное место.~Where здесь нормативно.~Не обязательное which для любой non-defining.
scope limit~A person who has a pass may enter.~Описывается правило допуска.~Наличие пропуска не доказывает вход.~Правило не отчёт о посещении.`);
export const participlePatterns=rows(`active modifier~The people waiting outside have tickets.~Описание people.~Who are waiting в данном контексте.~Не отдельное законченное предложение.
passive modifier~The forms signed yesterday are here.~Описание forms как получателей действия.~Which were signed.~Подписание не одобрение.
ongoing passive~The bridge being repaired is closed.~Процесс, направленный на bridge.~Which is being repaired.~Не готовый результат.
postposed subject~The woman wearing a red coat is Jo.~Носитель действия — woman.~Не главное подлежащее другого предложения.~Не любая относительная форма сокращается так.
simultaneous~Walking home, I called Jo.~В этой ситуации два действия одного I.~Форма -ing не задаёт самостоятельное время.~Не считать всякое -ing временем Continuous.
reason~Knowing the route, I offered to lead.~Знание как мотив по контексту.~Логический субъект I.~Мотив сообщён, не выведен из одного порядка.
perfect active~Having checked the address, I booked.~Проверка раньше брони.~Having + V3.~Не обязательно давно и не причина сама по себе.
perfect passive~Having been warned, we changed the plan.~Предупреждение направлено на we.~Having been + V3.~Кто предупредил, не назван.
negative~Not knowing the address, I asked.~Отрицание перед -ing.~Не did not knowing.~Не путать незнание с забыванием.
negative perfect~Not having checked it, I could not confirm it.~Не было предшествующей проверки.~Not having + V3.~Не checked как past simple.
V3 opener~Written in pencil, the note was hard to read.~Note — получатель письма.~Пассивная связь.~Не автором была note.
conditional V3~Stored correctly, the samples can last longer.~Если хранят правильно.~Условие, не факт правильного хранения.~Без контекста because не обязательно.
concession~Although tired, Jo kept working.~Хотя Jo устала.~Сокращение с явной уступкой.~Работа не доказывает хорошее качество.
while~While checking the list, Jo found a duplicate.~Общий субъект Jo.~Явная временная связь.~Не Every -ing означает same time без контекста.
after~After checking the list, Jo sent it.~Порядок задан after.~Perfect не обязателен после after.~Не after checked.
before~Before leaving, Jo locked the door.~Порядок задан before.~Действия связаны с Jo.~Не разрешает убрать чужого субъекта.
without~Jo left without signing.~Отсутствие сопутствующего действия.~Without + -ing.~Не without to sign.
by~You can compare versions by checking their dates.~Способ действия.~By + -ing.~Не гарантия одинакового содержания.
on~On arriving, we checked the board.~По прибытии.~Более письменная компактная модель.~Не дедлайн.
dangling opener~Having checked the form, I corrected the date.~Проверял I.~Не Having checked…, the date looked wrong.~Назови настоящего деятеля.
passive subject trap~After reading the draft, I sent the reply.~Читал I.~The reply was sent не называет reader в подлежащем.~Можно сохранить полное after I read.
explicit subject~When Jo arrived, I was waiting.~Разные участники названы.~Полное придаточное безопаснее.~Не Arriving, I was waiting при таком смысле.
result~A pipe burst, flooding the room.~Результат всей ситуации.~Flooding не обязано описывать сознательное действие pipe.~Не причина перед главным событием.
not automatic reason~Having read the note, I called.~Предшествование ясно.~Причину при необходимости назови отдельно.~Чтение не обязательно единственная причина звонка.
not automatic tense~The people living here need help.~Время из контекста.~Living не всегда действие прямо сейчас.~В прошлом: people living there then.
lost modal~People who may need help should call.~May — возможность.~People needing help меняет оттенок.~Не сокращай ценой модальности.
lost time~The report which she wrote in 2019 is useful.~Указаны деятель и дата.~Written in 2019 возможно, но she исчезает без by.~Проверить потери при редактировании.
to-infinitive~Jo was the first person to arrive.~Порядок события.~Не причастие, но родственное компактное описание.~The next person to call может относиться к будущему.
non-passive V3~The fallen leaves covered the path.~Fallen от непереходного fall.~Не «листья, которые кто-то уронил».~Не всякая V3 пассив.
fixed expression~Generally speaking, the plan is clear.~Устойчивая рамка высказывания.~Не механически dangling из-за speaking.~Отдельный тип, не универсальное исключение.
absolute~Weather permitting, we will meet outside.~У конструкции собственное weather.~Расширение за пределами базовой общей модели.~Не превращать любое несовпадение в допустимое absolute.
readability~After Jo checked it, I sent it.~Ясная полная связь.~Краткость не критерий правильности.~Иногда два предложения лучше одного.`);
export const groupDeterminerPatterns=rows(`each~Each participant has a card.~Каждый отдельно.~Singular count noun и verb.~Группа минимум из двух.
every~Every participant has a card.~Все члены по отдельности.~Singular count noun.~Обычно группа из трёх и более.
each of~Each of the participants has a card.~Члены конкретной группы.~Of + the/these/my/pronoun.~Не each of participants.
every one of~Every one of them has a card.~Каждый в указанной группе.~Every one раздельно.~Не every of them.
they after each~Each person should check their card.~Singular they допустимо.~Each person has; затем their.~Не he как единственный вариант.
floating each~They each have a card.~Подлежащее they.~Plural have сохраняется.~Each не всегда меняет главное согласование.
every interval~Every two days, we check it.~Повторяемый интервал.~Plural days после числа.~Без начальной опоры не задаёт конкретные даты.
almost every~Almost every form is complete.~Почти все.~Не exactly all.~Не даёт точного числа.
all plural~All the files are here.~Вся указанная группа.~Plural are.~Не все файлы вообще.
all uncountable~All the information is here.~Весь неисчисляемый объём.~Singular is.~Не informations.
all of pronoun~All of them are here.~Полная указанная группа.~Of перед объектным them.~All them не базовая письменная модель.
all without of~All my notes are here.~Of не обязателен перед my notes.~All of my notes тоже допустимо.~Не most my notes по аналогии.
whole~The whole report is useful.~Целое как единица.~The whole + singular count.~Не the all report.
all day~We worked all day.~Весь день.~The whole day тоже возможно.~Не every day, которое задаёт повторение.
both~Both options work.~Две положительные возможности.~Plural noun/verb.~Не утверждение выбора обеих.
both of~Both of them work.~Оба из пары.~Of перед them.~Both the options тоже допустимо.
either~Either option works.~Любой из двух.~Singular noun/verb.~Не обе одновременно обязательно.
either of~Either of these options works.~Один из указанной пары, любой.~Формальная базовая модель singular.~Не either these options.
neither~Neither option works.~Ни один из двух.~Singular noun/verb.~Не not both.
neither of~Neither of them works.~Ни один из пары.~Формально singular; plural встречается в разговоре.~Не объявлять plural невозможным вообще.
not both~Not both options work.~Не обе подходят.~Как минимум одна не подходит.~Само не гарантирует, что ровно одна подходит.
none plural~None of the files is/are missing.~Ни одного пропавшего.~Оба согласования возможны по смыслу/стилю.~Не запрет are вообще.
none uncountable~None of the equipment is new.~Ничего из оборудования.~Singular is.~Не equipments.
no~No files arrived.~Отрицательный определитель перед именем.~Plural noun здесь.~Не none files.
none alone~How many arrived? — None.~Самостоятельное отрицательное слово.~Без имени после него.~Не no как единственный краткий ответ о количестве.
most~Most people agreed.~Большинство общей группы.~Без of перед bare plural.~Не most of people.
most of~Most of these people agreed.~Большинство указанной группы.~Of + determiner/pronoun.~Не все и не точное число.
some of~Some of the forms are signed.~Часть указанного набора.~Some не задаёт точное число.~Разговорный намёк «не все» не всегда логическое утверждение.
any choice~Choose any available seat.~Свободный выбор одного места.~Не каждое место одновременно.~Available ограничивает выбор.
any negative~I didn’t receive any reply.~Отрицание существования ответа.~Не универсальное «любой».~Проверяй область отрицания.
another~We need another chair.~Ещё один / иной.~Singular count noun.~Не another chairs без количественной группы.
another number~We need another two chairs.~Ещё две.~Число задаёт группу.~Нормативное исключение к простой схеме another + singular.
other~Other rooms are available.~Другие комнаты.~Other + plural noun.~Не others rooms.
others~Some stayed; others left.~Другие люди, имя не повторяется.~Pronoun others.~Не обязательно все остальные.
the other~One door is open; the other is locked.~Вторая из известной пары.~Определённая оставшаяся единица.~Не ещё произвольная дверь.
the others~Two stayed; the others left.~Все остальные из известной группы.~Самостоятельное plural.~Не the others people.
the other noun~The other files are newer.~Остальные указанные файлы.~Other перед noun без -s.~Граница группы задаётся контекстом.
all not~Not all tests passed.~Не все успешны.~Не означает, что не прошёл ни один.~All tests didn’t pass лучше уточнить.
scope~Every tested sample was dry.~Универсальность внутри tested sample.~Не все образцы вообще.~Испытанная выборка ограничивает вывод.
limits~Neither candidate has replied.~Оба ещё не ответили в этой рамке.~Не свидетельство отказа.~Отсутствие ответа не умысел.`);
const headers=['Модель','Пример','Значение','Построение','Ограничение'];
export const advancedRelativeReference={id:'relative-precision',title:'Относительные придаточные: роли, предлоги и охват',intro:['32 показательные модели в дополнение к базовой странице relative-clauses. Это не все типы придаточных. Сначала установи объект описания и роль внутри придаточного.'],headers,rows:advancedRelativePatterns,sources:precisionSources,practice:rows(`Rosa, ___ lives here, can help. (who/that)~Who: non-defining не принимает that.
The colleague to ___ I wrote. (who/whom)~Whom в заданном формальном построении.
The system on ___ we rely. (which/that)~Which после вынесенного предлога.
Можно The person I wrote to?~Да, defining object допускает пропуск, предлог остаётся.
Можно убрать who в Rosa, who I met, called?~Нет, в non-defining относительное слово не опускается.
The report, ___ title changed, is here. (whose/who’s)~Whose: название отчёта.
We were late, which annoyed Jo: which = we?~Нет, относит комментарий к ситуации опоздания.
Three guides, two of ___…~Whom, потому что речь о людях.
Three maps, two of ___…~Which, потому что речь о вещах.
The room ___ we painted. (where/which)~Which — прямой объект painted.
The room ___ we met. (where/which; без предлога)~Where задаёт место встречи.
The note what she sent — исправь.~The note that/which she sent; либо the note she sent.
В who I think she called удалить she?~Нет, she — субъект called, who — объект.
Some of whom даёт точное число?~Нет, нужна отдельная информация.
Guests who paid — все гости?~Не обязательно; выбрана группа заплативших.
Which после запятой может относиться к целой ситуации?~Да; если ссылка двусмысленна, перефразируй.`)};
export const participleReference={id:'participle-clauses',title:'Причастные конструкции: участник, время, залог',intro:['32 модели компактного описания и связи событий. Базовое общее подлежащее относится к изучаемым обстоятельственным конструкциям, не ко всем оборотам с -ing в языке; исключения обозначены отдельно.'],headers,rows:participlePatterns,sources:precisionSources,practice:rows(`Having ___ the note. (read; форма)~Read, V3 /red/ в контексте.
Having ___ warned. (been/being)~Been: perfect passive.
The forms ___ yesterday. (sign; пассив)~Signed.
The road being repaired — готова?~Нет, описан процесс ремонта.
Not knowing — нужны do/did?~Нет, отрицание not перед нефинитной формой.
Having checked the map, the route looked easy — кто проверял?~Не route; назови человека: Having checked the map, I found the route easy.
After checking it, I sent it — обязательно having?~Нет, after уже задаёт предшествование.
By ___ dates. (compare)~Comparing: способ после by.
Without ___ it. (open)~Opening: после without форма -ing.
Having read доказывает причину звонка?~Нет, только предшествование без дополнительного контекста.
People who may arrive → people arriving без потерь?~Нет, теряется возможность may.
Fallen leaves — кто-то уронил?~Не следует: fall непереходный, V3 здесь не обычный пассив.
Generally speaking — обязательно dangling?~Нет, это устойчивая рамка высказывания.
Weather permitting — собственный субъект?~Да, weather; особая абсолютная конструкция.
The first person to arrive — обязательно -ing?~Нет, допустимо to-infinitive для порядка.
Краткость всегда лучше?~Нет, сохраняй участника, время, модальность и ясность.`)};
export const groupDeterminerReference={id:'group-determiners',title:'Определители: каждый, все, оба, ни один и остальные',intro:['40 моделей выбора формы и границ группы; не полный словарь всех определителей. Предпосылки — базовые артикли, количество и местоимения. Согласование и логический охват проверяются отдельно.'],headers,rows:groupDeterminerPatterns,sources:precisionSources,practice:rows(`Every student ___ a card. (has/have)~Has: every + singular count noun.
They each ___ a card. (has/have)~Have: подлежащее they.
Every ___ of them. (one/zero)~One: every one of, не every of.
All the equipment ___ ready. (is/are)~Is: неисчисляемое equipment.
Both options ___. (work/works)~Work: обе возможности.
Either option ___. (work/works)~Works: любой из пары.
Neither option works = not both work?~Нет, ни один против не обе.
Not both work доказывает, что одна работает?~Нет, возможны одна или ни одной.
None of the files are missing — обязательно ошибка?~Нет, plural согласование нормативно.
None of the water ___ clean. (is/are)~Is: неисчисляемое water.
Most ___ these notes. (of/zero)~Of перед these.
Most ___ people. (of/zero)~Zero перед bare plural.
The ___ report. (whole/all)~Whole: целый отчёт.
Another two days допустимо?~Да, дополнительная группа из двух дней.
Others rooms — исправь.~Other rooms; others употребляется без имени.
Every checked file is valid говорит обо всех файлах?~Нет, только о проверенных.`)};

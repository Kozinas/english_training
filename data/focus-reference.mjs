export const focusSources=[
 ['British Council: inversion after negative adverbials','https://learnenglish.britishcouncil.org/free-resources/grammar/c1/inversion-after-negative-adverbials'],
 ['British Council: inversion and conditionals','https://learnenglish.britishcouncil.org/free-resources/grammar/c1/inversion-conditionals'],
 ['British Council: emphasis','https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries'],
 ['Cambridge: inversion','https://dictionary.cambridge.org/grammar/british-grammar/inversion'],
 ['Cambridge: cleft sentences','https://dictionary.cambridge.org/grammar/british-grammar/cleft-sentences-it-was-in-june-we-got-ma'],
 ['Cambridge: fronting','https://dictionary.cambridge.org/grammar/british-grammar/fronting'],
 ['Cambridge: not only … but also','https://dictionary.cambridge.org/grammar/british-grammar/not-only-but-also']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
const headers=['Модель','Авторский пример','Как устроено','Смысл / фокус','Граница применения'];
export const inversionPatterns=rows(`never + perfect~Never have we published those names.~First auxiliary before subject.~Ни разу в данной рамке.~Не добавить not к have.
rarely + present~Rarely does the lift stop here.~Does + subject + base.~Низкая частота.~Не does stops; редко не никогда.
seldom + past~Seldom did Jo miss a meeting.~Did + subject + base.~Редкие пропуски в прошлом.~Не обязательно ноль пропусков.
negative + be~At no time was the entrance blocked.~Be перед subject.~Ни в один момент указанного периода.~Не доказательство всех периодов.
negative + modal~Under no circumstances may visitors enter this room.~Modal перед subject.~Запрет по правилу.~Не факт соблюдения запрета.
auxiliary chain~Never has the label been changed.~Has переносится, been остаётся.~Perfect passive сохраняется.~Не has been the label changed.
hardly ever~Hardly ever do they use the side gate.~Do + base.~Очень редко.~Не еле успели в этой модели.
little~Little did I suspect how long it would take.~Did + suspect.~Почти не представлял.~Little как определитель имени ведёт себя иначе.
not once~Not once did she mention the fee.~Did + base.~Ни одного упоминания в рамке.~Не доказательство отсутствия самой платы.
not a word~Not a word did he say about the date.~Вынесенный отрицательный объект + did.~Отсутствие высказывания.~Не отказ или согласие по молчанию.
no negative subject inversion~Nobody mentioned the fee.~Отрицательное подлежащее + verb.~Никто не упомянул.~Не Nobody did mention в нейтральном отрицании.
only subject~Only Lena noticed the label.~Only входит в subject.~Ограничен участник.~Не нужен did перед Lena.
only then~Only then did Lena notice the label.~Ограничительное обстоятельство + did.~Момент осознания.~Не necessarily причина появления ярлыка.
only after clause~Only after Jo checked the date did we print the guide.~Внутри after обычный порядок, инверсия в главной.~Граница начала печати.~Не Only after did Jo check.
only by~Only by comparing both lists can we find the gap.~By + -ing; can перед we.~Указанный необходимый способ.~Не доказывает выполненное сравнение.
only if~Only if the owner agrees can we use the room.~If-clause + main inversion.~Необходимое условие.~Согласие само не доказывает использование.
not until~Not until noon did the reply arrive.~Утвердительное did после вынесенного not until.~Не раньше полудня; в этом рассказе ответ пришёл.~Не добавлять второе not.
not only clause~Not only did we check the list, but we also called Jo.~Инверсия в первой части.~Оба положительных действия.~Вторая часть не требует инверсии.
not only nouns~Not only Lena but also Omar helped.~Составное подлежащее.~Оба участника помогли.~Не применять инверсию первой модели механически.
hardly when~Hardly had we unpacked when the lights failed.~Had + V3; when.~Второе событие вскоре после первого.~Не доказательство причины.
scarcely when~Scarcely had the talk begun when a phone rang.~Past Perfect + when.~Близость событий.~Не универсальный запрет других временных контекстов.
no sooner than~No sooner had I sat down than Jo called.~Had + V3; than.~Почти сразу после первого события.~Не when в выбранной модели.
no sooner be~No sooner was the hall open than visitors arrived.~Was перед subject.~Близкое следование.~Past Perfect не обязателен для всех no sooner.
should condition~Should the guide arrive, call me.~Should + subject + base, без if.~Если случится прибытие.~Не совет гиду прибыть и не фиксированная вероятность.
should negative~Should you not receive a reply, contact Jo.~Not после subject.~Возможное неполучение ответа.~Не Should not you в этой учебной форме.
were be~Were the room larger, we could use it.~Were + subject + complement.~Гипотетическое состояние.~Не Was the room larger в выбранной условной модели.
were to~Were the price to rise, we might postpone the visit.~Were + subject + to + base.~Гипотетическое изменение.~Might не гарантия результата.
were not for~Were it not for the grant, the club would close.~Were it not for + noun.~Гипотеза об отсутствии поддержки.~Не автоматически прошлая ситуация.
had condition~Had we checked earlier, we might have noticed it.~Had + subject + V3.~Альтернатива прошлому.~Не Had we check; might сохраняется.
had negative~Had she not called, we would have missed the change.~Not после subject.~Отрицательное прошлое условие.~Не добавлять if к инверсии.
had had~Had I had the key, I could have entered.~Первое had auxiliary, второе V3 have.~Наличие ключа в альтернативном прошлом.~Не удалять второе had как повтор.
conditional position~We could have helped had we known.~Условие после результата.~Та же зависимость без if.~Не вопрос из-за порядка had we.
not all initial adjuncts~Yesterday we checked the route.~Обычный порядок после времени.~Временная рамка.~Не добавлять did we только из-за первого слова.
neutral version~We rarely see both versions together.~Subject + verb + остальные части.~Те же основные факты без риторического выделения.~Нейтральная форма не ниже по качеству.`);
export const cleftPatterns=rows(`it subject~It was Lena who found the note.~It + singular be + focus + who/that.~Выделен нашедший.~Не Who found Lena.
it object~It was the note that Lena found.~It + be + object focus + clause.~Выделена найденная вещь.~Не потерять деятеля Lena.
it time~It was on Monday that she called.~Фокус включает on.~Выделено время звонка.~Не причина звонка.
it place~It was in the garden that we met.~Фокус с in.~Выделено место.~Не where обязательно вместо that.
it reason~It was because the gate was shut that we waited.~Because-clause в фокусе.~Утверждается причина.~Нельзя добавить без свидетельства причины.
it negative~It was not Lena who changed the note.~Not относится к фокусу.~Отрицается Lena как деятель.~Не равно nobody changed it.
it question~Was it Lena who changed the note?~Инверсия внешнего be.~Вопрос об участнике.~Не утверждение её действия.
plural focus~It is the volunteers who keep the records.~It is, но who keep по volunteers.~Выделена plural-группа.~Не It are; не who keeps.
person marker~It was Omar who / that called.~Who и that допустимы.~Личный subject в фокусе.~Не считать that ошибкой.
object omission~It was Omar I called.~В объектной части допустим пропуск.~Я позвонил Омару.~В subject-cleft маркер не удаляется автоматически.
retained preposition~It was Omar that I spoke to.~To сохраняется внутри.~Адресат разговора.~Не It was Omar that I spoke.
formal focus preposition~It was to Omar that I spoke.~To вынесен с объектом.~Выделен адресат.~Не повторять to в конце без основания.
ordinary it~It was a useful note.~Одна обычная clause.~Характеристика предмета.~Не каждое It was является cleft.
what object~What we need is a second copy.~What-clause + be + focus.~Назван предмет потребности.~What не прямой вопрос.
what subject~What surprised me was the timing.~What — subject surprised.~Выделен источник удивления.~Не инвертировать внутри.
what action~What she did was check the date.~Did внутри; base после be.~Действие в фокусе.~To check тоже нормативно.
what plan~What we need to do is ask first.~Need to do + is + base/to.~Необходимое действие.~Не доказательство выполнения.
what clause focus~What matters is that everyone can enter.~That-clause после be.~Критерий важности.~Не утверждает, что доступ проверен.
what negative~What we do not know is the final price.~Отрицание сохраняется внутри.~Назван пробел знания.~Не the price is zero.
what plural complement~What we need is / are two copies.~Согласование зависит от конструкции и фокуса.~Две копии как потребность/предметы.~Оба варианта не сводить к единственному ключу.
reverse what~A second copy is what we need.~Фокус перед be.~Начальная контрастная часть.~Не автоматическая новая информация для любого контекста.
all cleft~All I asked for was a copy.~All-clause + be.~Ограниченный объём просьбы.~Не получение копии.
all action~All she did was change the heading.~All + did + was + base/to.~Ограничение действия.~Не добавлять исправление всего текста.
the person~The person who called was Lena.~Именная группа + be + focus.~Идентификация участника.~Нужен контекст, если звонили несколько.
the reason~The reason we waited was that the gate was shut.~Reason-clause + was that.~Причинное объяснение.~Не создавать причину из хронологии.
the place~The place where we met was the garden.~Place + where + be.~Идентификация места.~Не менять роль where на object which.
focus and truth~It was the draft that Jo sent.~Смена упаковки факта.~Черновик, не финал.~Форма не доказывает факт независимо.
stress~It was LENA who sent the DRAFT.~Контекстный акцент по аудио.~Исправление участника/версии.~Заглавные буквы не оценка произношения.
scope repair~It was not the date but the venue that changed.~Противопоставление фокусов.~Изменилось место.~Отрицание не охватывает всё событие.
presupposition check~Who changed it? — We do not know that anyone did.~Оспорить предпосылку вопроса.~Сам факт ещё не установлен.~Не выбирать виновного из формы вопроса.`);
export const frontingPatterns=rows(`object topic~This version I can recommend.~Object + subject + modal + verb.~Версия как контрастная тема.~Не This version can I recommend без другого основания.
object pair~The date I know; the venue I do not.~Два вынесенных объекта.~Известное против неизвестного.~Роли не меняются.
ordinary adjunct~After lunch we compared the plans.~Adjunct + subject + verb.~Рамка времени.~Не требует инверсии.
only adjunct~Only after lunch did we compare the plans.~Restrictive adjunct + did.~Не раньше этой рамки.~Не равнозначно обычному after lunch по акценту/ограничению.
place presentation~Beside the gate stood a noticeboard.~Place + full verb + noun subject.~Вводится новый объект сцены.~Не универсальный шаблон любого глагола.
place plural~Beside the gate stood two noticeboards.~Полная инверсия; plural subject.~Два объекта.~При be: were two boards.
place be~On the table were the revised plans.~Were по plural plans.~Где лежали/находились планы.~Не was из-за singular table.
ordinary place alternative~On the table, the revised plans were ready for review.~Subject перед verb тоже возможен.~Контекст задаёт подачу.~Инверсия не обязательна после любого места.
here noun~Here comes the organiser.~Verb + noun subject.~Представление приближающегося участника.~Не добавлять does.
here pronoun~Here she comes.~Pronoun + verb.~Известный участник.~Не Here comes she в нейтральной современной модели.
there pronoun~There it is.~Pronoun перед be.~Указание на известный предмет.~Не There is it в этой модели.
direction~Into the courtyard came a small group.~Direction + motion verb + noun subject.~Ввод сцены.~Не менять кто куда пришёл.
complement fronting~More important is the question of access.~Complement + be + noun subject.~Приоритет критерия.~Не независимое доказательство важности.
concessive adjective~Tired though she was, she stayed.~Adjective + though + subject + be.~Уступка.~Не причина и не tired though was she.
concessive noun~Novice though he was, he noticed the error.~Noun без a в этой модели.~Уступка неопытности.~Не правило удаления всех артиклей.
concessive verb~Try as she might, she could not open it.~Verb + as + subject + modal.~Усилие вопреки неудаче.~Не Try might she as.
concessive as~Useful as it is, it does not answer our question.~Adjective + as + subject + be.~Уступка, не причина.~Смысл устанавливается всей конструкцией.
header~That revised guide, I have not read it yet.~Отдельная тема + pronoun в clause.~Разговорная ориентация слушателя.~Не та же структура, что object fronting без it.
tail~It needs a clearer title, that guide.~Pronoun + поздняя именная подсказка.~Разговорное уточнение.~Не ошибка сама по себе, но жанр важен.
end focus~We still need one thing: a clear date.~Опора → новая информация.~Конечный контраст.~Не правило, что последнее слово всегда ударное.
end weight~It is unclear whether the owner will approve the visit.~Anticipatory it + тяжёлая clause позже.~Удобство обработки.~Не cleft с выделенным участником.
passive bridge~We received a draft. The draft was reviewed by Jo.~Known theme + passive.~Связь предложений.~Reviewed не approved.
active responsibility~Jo reviewed the draft.~Active сохраняет явного деятеля.~Кто сделал.~Пассив не всегда лучше.
do emphasis~I do accept that point.~Do + base.~Подтверждение против сомнения.~Не инверсия; не согласие со всем планом.
imperative do~Do be careful with the original.~Do + imperative be.~Усиленная просьба/призыв.~Не We do are careful; тон зависит от ситуации.
so adjective~So narrow was the passage that we went another way.~So + adjective + be + subject.~Степень и результат.~Литературная/формальная подача, не нейтральная везде.
such noun~Such was the confusion that we paused the meeting.~Such + be + subject.~Интенсивность и следствие.~Не заменять so/such без перестройки.
neutral editing~We paused because the instructions conflicted.~Простой порядок и явная причина.~Ясный отчёт.~Сложность формы не мера уровня текста.`);
export const inversionReference={id:'inversion-focus',title:'Инверсия: отрицание, ограничение и условие',intro:['34 показательные модели с областью действия и нейтральными альтернативами. Не все литературные инверсии; форма не делает утверждение доказанным.'],headers,rows:inversionPatterns,sources:focusSources,practice:rows(`Rarely does she checks — исправь.~Rarely does she check: после does базовая форма.
Never has the label been changed: что перенесено?~Только has; been changed остаётся после subject.
Only Lena called: нужна инверсия?~Нет, only ограничивает подлежащее.
Only after Jo called we left — исправь.~Only after Jo called did we leave.
Nobody did arrive — нейтральное nobody?~Nobody arrived; did может иметь особый контраст, но не требуется отрицательным subject.
Not until noon did it start: раньше полудня?~Нет; в этом рассказе началось не раньше полудня.
Not only did she call, but also did she write — исправь вторую часть.~…but she also wrote.
Hardly had we sat down ___ the bell rang.~When.
No sooner had we left ___ the rain began.~Than.
No sooner was it open: обязательно ошибка?~Нет, Past Perfect не единственная возможная форма.
Should she arrive: совет приехать?~Нет, условие возможного прибытия.
Were she to agree: to или -ing?~To + base в этой условной модели.
Had I had more time: лишнее had?~Нет, auxiliary и V3 смыслового have.
Had she not called: где not?~После subject в изучаемой полной форме.
Only if approved can we proceed: approved уже произошло?~Нет, названа необходимая предпосылка.
Редкая частота равна нулю?~Нет, rarely/seldom не равны never.`)};
export const cleftReference={id:'cleft-focus',title:'Выделительные конструкции: it, what и all',intro:['30 моделей фокуса и восстановления исходного сообщения. Выбор между нормативными вариантами зависит от контекста; не полный каталог всех cleft-типов.'],headers,rows:cleftPatterns,sources:focusSources,practice:rows(`It is the volunteers who keeps: исправь.~Who keep; it is остаётся singular.
It was Jo who/that called: оба?~Да, оба маркера допустимы для этого личного subject.
It was the list that Jo checked: объект?~The list; Jo проверял.
It was on Friday that Jo called: причина?~Нет, время.
It wasn't Jo who called: никто не звонил?~Нет, отрицается конкретный участник.
Was it Jo who called: доказательство?~Нет, вопрос.
It was Jo I spoke to: to можно удалить?~Нет, управление spoke to сохраняется.
It was to Jo that I spoke: второе to нужно?~Нет, предлог уже с фокусом.
What we need is a copy: порядок внутри?~We need, не do we need.
What she did was check/to check: допустимые формы?~Обе в этой модели.
What we need is/are two copies: один ключ?~Нет, оба нормативны по конструкции и интерпретации.
All I asked for was a copy: копия получена?~Не установлено; это объём просьбы.
The reason was that…: можно выдумать причину?~Нет, структура не заменяет свидетельство.
It was a useful note: cleft?~Нет, обычная clause.
What we don't know: можно удалить not при перестройке?~Нет, это меняет содержание.
Как проверить ударение?~Прослушать реальную речь и проверить, какое противопоставление понял партнёр.`)};
export const frontingReference={id:'fronting-information',title:'Вынос, полная инверсия и порядок информации',intro:['28 моделей для сравнения нейтрального, разговорного и выразительного порядка. Не вся информационная структура английского; выбор оценивается по задаче и понятности, не по числу усложнений.'],headers,rows:frontingPatterns,sources:focusSources,practice:rows(`This version I prefer: кто выбирает?~I; this version — объект.
After lunch: обязательная инверсия?~Нет, ordinary adjunct сохраняет subject + verb.
Only after lunch: где инверсия?~В главной clause: did we compare.
On the table was/were two maps: форма?~Were по two maps.
Here comes the guide / Here she comes: почему по-разному?~В нейтральной модели noun может идти после verb, личное pronoun остаётся перед ним.
Here does come the guide: нейтральный показ?~Here comes the guide, без do-support.
Into the hall came a group: место или направление?~Направление движения группы.
Tired though she was: причина?~Уступка: хотя устала.
Try as she might: порядок?~As + subject + modal после вынесенного try.
Novice though he was: a обязательно?~В этой литературной модели noun идёт без a; не переносить на обычное He was a novice.
That guide, I read it: всегда ошибка?~Нет, разговорный header; для формального текста часто лучше I read that guide.
It is unclear whether…: cleft?~Нет, anticipatory it и отложенная clause.
Пассив автоматически скрывает виновника?~Нет, он организует тему; by-agent можно назвать, а вину нужно доказывать отдельно.
Do be careful: запрещённое do + be?~Нет, это imperative; запрет do are относится к обычному finite statement.
Последнее слово всегда ударное?~Нет, фокус зависит от контекста; проверяйте аудио.
Какой вариант лучше?~Тот, который сохраняет факты и помогает адресату понять нужное противопоставление; не обязательно самый сложный.`)};

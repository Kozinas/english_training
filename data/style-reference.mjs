export const styleSources=[
 ['Purdue OWL: concision','https://owl.purdue.edu/owl/general_writing/academic_writing/conciseness/index.html'],
 ['Purdue OWL: sentence clarity','https://owl.purdue.edu/owl/general_writing/mechanics/sentence_clarity.html'],
 ['Purdue OWL: plain style','https://owl.purdue.edu/owl/general_writing/writing_style/plain_style%20.html'],
 ['UNC Writing Center: revising drafts','https://writingcenter.unc.edu/tips-and-tools/revising-drafts/'],
 ['Harvard Writing Center: transitions','https://writingcenter.fas.harvard.edu/transitions'],
 ['Oxford Learner’s Dictionaries: organise/organize','https://www.oxfordlearnersdictionaries.com/definition/english/organize'],
 ['Language Portal of Canada: make/take a decision','https://our-languages.canada.ca/en/writing-tips-plus/decision-make-a-decision-take-a-decision'],
 ['Cambridge: collocation','https://dictionary.cambridge.org/us/dictionary/english/collocation'],
 ['Cambridge: mixed metaphor','https://dictionary.cambridge.org/dictionary/english/mixed-metaphor'],
 ['Cambridge Dictionary blog: nautical idioms','https://dictionaryblog.cambridge.org/2025/12/17/all-hands-on-deck-nautical-idioms-part-2/']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
const headers=['Выбор / механизм','Авторский пример','Что проверять','Не делать абсолютным'];
export const idiomaticPatterns=rows(`collocation~Heavy rain affected the event.~Сочетание в данном значении.~Не переносить strong на каждый русский «сильный».
argument~A strong argument needs support.~Сочетаемость и силу.~Не любой сильный довод автоматически верен.
decision~We made/took a decision.~Оба варианта нормативны.~Take не ошибка только из-за UK/formal оттенка.
conclusion~We reached/drew a conclusion.~Контекст глагола.~Не единственный допустимый синоним.
discuss~We discussed the issue.~Прямой объект темы.~Не discuss about в этой модели.
talk~We talked about the issue.~Предлог в рамке talk.~Не удалить about вслед за discuss.
explain~Explain the change to me.~Тема и адресат.~Не механическая рамка tell me.
object adjective~Make the wording clear.~Характеристика объекта.~Не clearly после make в этой модели.
action adverb~Explain it clearly.~Характеристика действия.~Не clear в данном значении.
economical~An economical option.~Экономное расходование ресурсов.~Не economic policy.
economic~Economic conditions changed.~Отношение к экономике.~Не экономный по определению.
sensible~A sensible precaution.~Разумность.~Не sensitive.
sensitive~A sensitive matter.~Деликатность по контексту.~Не разумность.
brief/concise~Brief but incomplete.~Длина и достаточность раздельны.~Краткость не качество сама по себе.
assertive/aggressive~Assertive without hostility.~Оценка поведения.~Не добавлять враждебность ради синонима.
thrifty/stingy~A thrifty shopper.~Положительная/отрицательная оценка.~Не нейтральные взаимозаменяемые слова.
audience~Try the form / Give it a go.~Уместность адресату.~Неформальное не всегда плохое.
plain style~Use the search field.~Понятное действие.~Utilise нормативно, но не всегда нужно.
metaphor~The guide is a map.~Помогает ли образ объяснить связь.~Не все метафоры запрещены.
mixed metaphor~A bridge that fuels an engine.~Конкурирующие образы.~Юмор и инструкция требуют разного эффекта.
double-edged sword~Automation saves effort but can hide errors.~Конкретная польза и риск.~Не просто синоним difficulty.
plain/smooth sailing~It was not all plain sailing.~Идиома лёгкого продвижения, US также smooth.~Не обещать непроверенную лёгкость.
get the hang of~You will get the hang of the controls.~Освоение действия через практику.~Не гарантия экспертизы.
variety/house style~Colour in prose; color in a US quotation.~Нормативность и последовательность.~Не исправлять точную цитату ради своей нормы.`);
export const economyPatterns=rows(`purpose~We met to review the plan.~To вместо in order to при том же смысле.~Не удалять само отношение цели.
reason~We waited because the gate was closed.~Because + clause.~Because of требует именную группу.
direct verb~We assessed the plan.~Возможна замена make an assessment.~Номинализации иногда полезны.
event noun~The assessment took two days.~Название обсуждаемого события.~Не запретить все имена действий.
time filler~Please reply now.~Now вместо at this point in time.~Сохранять нужную временную рамку.
known agent~Mia sent the notice.~Явная ответственность.~Не назначать неизвестного исполнителя.
useful passive~The notice was sent yesterday.~Тема notice и время.~Не автоматическая стилистическая ошибка.
unknown agent~The file was deleted; the agent is unknown.~Честная неизвестность.~Не выдумывать manager ради active.
noun stack~We notify visitors when requests are approved.~Явные связи частей.~Не раскрыть в неверный процесс.
familiar term~Use your user account.~Знания адресата.~Не лимит «два существительных» для всех.
parallel verbs~Check, record and submit.~Одинаковый уровень действий.~Не смешивать причину и шаг.
parallel clauses~How to register and how to cancel.~Одинаковая функция.~Не один обязательный вариант длины.
reference~The form records requests. The form does not confirm bookings.~Один объект остаётся узнаваемым.~Не обязательная замена повторов синонимами.
condition~If you have a code, enter it.~Ограничение действия.~Не безусловная команда.
alternative~If not, ask for help.~Другой путь.~Не дополнительное действие для всех.
group~Some visitors may need help.~Some ограничивает группу.~Не удалить как filler.
modality~Some visitors may need help.~May сохраняет неизвестность.~Не заменить established need.
time scope~During the trial, use the side desk.~Временный охват.~Не постоянное правило без основания.
access scope~Only confirmed members may enter.~Ограничение допуска.~Не расширять до all members.
repeat again~Please repeat it again after the first repetition.~Ещё один повтор.~Не всегда redundancy.
final/interim~This is the final result, not an interim one.~Нужное противопоставление.~Не удалить final автоматически.
rhythm~Quickly, safely and effortlessly.~Основание каждого обещания.~Ритм не доказательство качества.
specific location~Collect at the side desk.~Место, нужное для действия.~Elsewhere короче, но менее полезно.
status~Review complete; approval pending.~Разные стадии.~Не completed всё сразу.
punctuation~The form is open; confirmation follows review.~Связь самостоятельных предложений.~Normalizer не проверяет punctuation.
read-aloud~Read it aloud, then check facts.~Ритм и смысл проверяются отдельно.~Текстовый ASR не устная оценка.`);
export const revisionPatterns=rows(`brief~Who is the audience and what should they do?~Цель, жанр, факты, ограничения.~Не произвольное make it professional.
global revision~The event moved; it was not cancelled.~Главное сообщение.~Не орфография вместо смысла.
reverse outline~This paragraph explains the exception.~Функция каждого абзаца.~Не фиксированные пять абзацев.
structure~Move the date and action to the opening.~Порядок по задаче.~Не все жанры одинаковы.
fact table~Known place; unknown end date.~Статус каждого claim.~Не заполнять unknown догадкой.
voice~We look forward to seeing you.~Теплота и отношение.~Не обязательный безличный шаблон.
unsupported promise~A seamless experience for all.~Доказан ли эффект.~Не оставить ради красивого голоса.
no blame~If you do not have the message…~Факт отсутствия.~Не мотив или вина без данных.
review/approval~Suggestions will be reviewed.~Рассмотрение.~Не все приняты и внедрены.
therefore~The location changed. The date did not.~Основание связи вывода.~Два истинных факта не любая причинная связь.
however~The place changed; however, the time did not.~Контраст и пунктуация.~Не союз для comma splice.
moreover~The option is clearer; moreover, it is available offline.~Реальное добавление.~Не декоративное академическое слово.
specific transition~The timing is clear; the remaining question is access.~Связь конкретных идей.~Не только список adverbs.
reference consistency~North counter throughout the notice.~Один подтверждённый объект.~Не три места из случайных синонимов.
quote accuracy~Keep color in the quoted US message.~Точность источника.~House style не меняет цитату молча.
house style~Consistent spelling in the author's own prose.~Единство документа.~Не единственная нормативная разновидность.
revision log~Original → revision → reason.~Прослеживаемая причина.~Не sounds better без объяснения.
meaning edit~Restore the missing-message exception.~Исправление фактического противоречия.~Не стилевой вкус.
structural edit~Combine duplicated introductions.~Функции абзацев.~Не удаление новых данных.
local edit~Name the referent of this.~Однозначная связь.~Не любое местоимение запрещено.
proofreading~Check spelling after major revisions.~Финальная техническая проверка.~Не гарантия фактов.
reader check~Where will you go, and what if the code is missing?~Наблюдаемое понимание.~Не только нравится ли текст.
feedback response~Clarify intention before rewriting.~Сотрудничество с автором.~Не осуждение личности.
versioning~Add the new date as a dated update.~Новое знание и история.~Не ретроспективно известный факт.
delayed transfer~Revise a new genre after a week.~Перенос навыка.~Не воспроизведение старого ключа.
completion~Meaning, structure, voice and accuracy meet the brief.~Коммуникативная задача.~Не число минут, слов или правок.`);
export const idiomaticReference={id:'idiomatic-style',title:'Естественный стиль: сочетаемость, оттенок и образ',intro:['24 показательные модели выбора, не полный словарь коллокаций и идиом. Нормативность, регистр и личное предпочтение различаются. Закрытые задачи ограничивают контекст; свободная редактура допускает обоснованные альтернативы.'],headers,rows:idiomaticPatterns,sources:styleSources,practice:rows(`Heavy/strong rain: обычная модель?~Heavy rain.
Make meaning explicit/explicitly?~Explicit.
Explain explicitly/explicit?~Explicitly.
Discuss about the issue: исправь.~Discuss the issue.
Talk the issue: добавь предлог.~Talk about the issue.
Explain me the rule: учебная нейтральная модель?~Explain the rule to me.
Take a decision всегда ошибка?~Нет.
Reach/draw a conclusion: допустимы оба?~Да.
Economic policy = economical policy по смыслу?~Не автоматически.
Sensible = sensitive?~Нет.
Idiomatic значит много идиом?~Нет.
Cut corners нейтральная оптимизация?~Обычно подразумевает ущерб качеству.
Double-edged sword: сколько сторон?~Польза и риск.
Mixed metaphor всегда grammar error?~Нет, оценить эффект и жанр.
Colour/color: один вариант ошибка?~Нет, разные нормативные варианты.
Organize только US?~Нет, встречается и в UK.`)};
export const economyReference={id:'sentence-economy',title:'Ёмкость предложения без потери смысла',intro:['26 приёмов и ограничений. Concision не минимальное число слов; смысл, исключения, модальность, ответственность и задача адресата важнее механического сокращения. Это не полный справочник синтаксиса.'],headers,rows:economyPatterns,sources:styleSources,practice:rows(`Because of + clause?~В базовой модели именная группа; because + clause.
Make an assessment: возможный глагол?~Assess.
The assessment took an hour: обязательно плохо?~Нет.
Passive всегда удалить?~Нет, проверить фокус и исполнителя.
Agent unknown: можно придумать автора?~Нет.
Some may удалить для краткости?~Нет, меняются группа и уверенность.
During the trial удалить без основания?~Нет, меняется временной охват.
Only approved users сократить до users?~Нет, расширяется группа.
Repeat again всегда redundant?~Нет, зависит от предыдущих повторов.
Final result при interim contrast: final полезно?~Да.
User account обязательно расширить?~Нет, знакомый термин может быть ясным.
Same form всегда заменять синонимами?~Нет, можно спутать референты.
Missing code exception не нужна большинству: удалить?~Нет, она нужна соответствующим читателям.
Ритм доказывает safely?~Нет.
Punctuation проверяется игнорирующим знаки normalizer?~Нет.
Лучший тест ясности инструкции?~Пересказ действия, условия и альтернативы читателем.`)};
export const revisionReference={id:'revision-workflow',title:'Редактура: от задачи до проверенной версии',intro:['26 ориентиров редакторского цикла, не обязательный одинаковый шаблон текста или фиксированное число проходов. Сохраняйте исходник, причины изменений и авторский голос; новые факты требуют источника, а неизвестные остаются неизвестными.'],headers,rows:revisionPatterns,sources:styleSources,practice:rows(`С чего начать кроме spelling?~Аудитория, цель, действие, факты, ограничения.
Reverse outline описывает что?~Функцию каждого абзаца.
Moved вместо cancelled: какая правка?~Смысловая, главная.
Therefore = любое добавление?~Нет.
However заменяет and после одной запятой автоматически?~Нет, нужна корректная структура и пунктуация.
Review = implementation?~Нет.
Voice требует сохранить ложное promise?~Нет.
House style = единственная правильная норма?~Нет.
Цитату можно молча подогнать под своё spelling?~Нет.
Reason «лучше» достаточно?~Нужно конкретное объяснение эффекта.
Новый факт был известен исходнику?~Не автоматически; сохранить дату обновления.
Придумать fallback для гладкого текста?~Нет.
Один reader check доказывает понимание всех?~Нет, но даёт полезное наблюдение.
Восемь правок всегда обязательны?~Нет, это опора конкретного упражнения.
Правильный transcript подтверждает тон?~Нет, нужно аудио.
Какие версии сохранять?~Исходник, редакции, feedback и основания изменений.`)};

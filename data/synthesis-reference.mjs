export const synthesisSources=[
 ['Purdue OWL: quotation, paraphrase and summary','https://owl.purdue.edu/owl/research_and_citation/using_research/quoting_paraphrasing_and_summarizing/index.html'],
 ['Purdue OWL: evaluating sources','https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/general_guidelines.html'],
 ['Purdue OWL: focused thesis statements','https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html'],
 ['UNC Writing Center: literature reviews','https://writingcenter.unc.edu/tips-and-tools/literature-reviews/'],
 ['Harvard Writing Center: counterargument','https://writingcenter.fas.harvard.edu/counterargument'],
 ['Cambridge: according to','https://dictionary.cambridge.org/dictionary/english/according-to'],
 ['Cambridge: opinion','https://dictionary.cambridge.org/grammar/british-grammar/opinion']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
const headers=['Модель / проверка','Авторский пример','Функция','Граница вывода'];
export const sourcePatterns=rows(`source attribution~According to the memo, waits became shorter.~Указание происхождения.~Не собственная независимая проверка.
own judgement~In my view, the comparison is incomplete.~Позиция автора ответа.~Не according to me в обычном выражении мнения.
topic~Regarding access, the survey is limited.~Тема разговора.~According to не замена about.
reporting verb~The team reports a decrease.~Сообщает наблюдение.~Не обязательно proves a cause.
interpretation~Mara suggests that the form may help.~Автор предлагает объяснение.~May и источник сохраняются.
finding~The log records 40 visits.~Наблюдаемая величина.~Visits не обязательно unique visitors.
verb pattern~The author attributes the change to staffing.~Attribute X to Y.~Атрибуция причины не её доказательство.
claim complement~The report claims that access improved.~That-clause передаёт утверждение.~Не claim us that.
proposal~The author recommends reviewing the schedule.~Recommend + -ing.~Не доказывает принятие рекомендации.
evidence agreement~The evidence is limited.~U evidence + singular.~Не evidences в обычном значении данных.
count unit~Two pieces of evidence are relevant.~Счётная единица pieces.~Не два независимых исследования автоматически.
exact quotation~The memo says, "The cause remains uncertain."~Точные слова с атрибуцией.~Не удалить uncertain или отрицание.
paraphrase~The memo does not identify a definite cause.~Смысл своими словами.~Атрибуция нужна и без кавычек.
summary~The memo describes shorter waits but leaves causation open.~Отбор основных идей.~Не все детали и не новый факт.
reader inference~This may reflect a change in staffing.~Гипотеза составителя.~Не приписать её автору без основания.
date distinction~Published in July, based on May observations.~Дата публикации и измерений.~July не дата наблюдений.
version~The corrected note replaces 42 with 24.~Текущая версия и история.~Старое число не продолжает действовать.
primary for a question~The log is direct evidence of recorded visits.~Роль источника для вопроса.~Не универсально лучший источник обо всём.
expertise~The writer has relevant experience.~Причина внимательно рассмотреть.~Не гарантия истинности каждого вывода.
interest~The organiser supports the proposal.~Возможная заинтересованность.~Не доказанная ложь автоматически.
independence~The newsletter repeats the memo.~Одна цепочка происхождения.~Не два независимых подтверждения.
missing method~The sampling method is not stated.~Ограничение проверки.~Не доказательство подделки.
scope~Eighteen of 24 respondents preferred the form.~Ответившая группа и доля.~Не все пользователи и не вся популяция.
causation~Waits fell after two changes.~Последовательность наблюдений.~After не доказывает which caused it.
absence~The report does not measure satisfaction.~Данных нет в этом источнике.~Не satisfaction is low.
traceability~Record author, title, date and location when available.~Можно найти исходник.~Не выдумывать DOI, страницу или автора.`);
export const synthesisPatterns=rows(`organising question~Does the pilot justify a longer trial?~Общий вопрос вместо списка источников.~Не таймер учебного модуля.
shared topic~Both accounts discuss access.~Общий предмет.~Не одинаковый метод или вывод.
shared finding~Both logs record repeat visits.~Совпадающее наблюдение.~Проверить независимость и единицы.
contrast~A measures use, whereas B examines workload.~Разные аспекты.~Не автоматическое опровержение.
agreement pattern~The reports agree on the need for more data.~Agree on вопрос/решение.~Не agree to a person.
author alignment~I agree with Lee's interpretation.~Agree with участник/позиция.~Не приписать согласие самому Lee с вами.
agreement to act~Jo agreed to check the figures.~Agree to + infinitive действия.~Не выполнение проверки.
compatibility~The findings may be compatible.~Не исключают друг друга.~Не обязательно одинаковы или доказаны.
contradiction~One says all 20 attended; another says only 12 of the same 20 attended.~Несовместимые утверждения одной рамки.~Уточнить период и определения.
complementarity~A counts users; B describes barriers.~Добавочные стороны вопроса.~Интервью не добавлять к users как новую группу.
scope~The conclusion applies to these two weeks.~Граница данных.~Не общий закон о всех местах.
denominator~12 of 18 respondents supported the option.~Явная база доли.~18 не вся группа автоматически.
unit~40 loans involved 30 people.~События и люди.~Не 40 новых пользователей.
overlap~The reports may include the same visitors.~Пересечение групп.~Нельзя просто сложить unique people.
percentage points~The share rose from 40% to 50%: ten percentage points.~Абсолютная разница долей.~Не ten percent relative growth.
relative change~From 40 to 50 is a 25% increase.~Изменение относительно 40.~Знаменатель должен быть явным.
time comparability~The logs cover different seasons.~Условие сравнения.~Разница не обязательно эффект программы.
method comparability~One source uses interviews; the other uses logs.~Разные способы измерения.~Оба могут быть полезны для разных вопросов.
independent support~The second report collected new observations.~Отдельные данные.~Проверить общую выборку и источник.
source chain~The third article cites the first two.~Пересказ уже известных данных.~Не третье независимое исследование.
linking evidence~Taken together, the sources suggest a limited benefit.~Авторский синтез.~Suggest не establish universal benefit.
limitation~Neither report isolates the effect of the timetable.~Общее ограничение.~Не доказательство нулевого эффекта.
alternative~The change could also reflect promotion.~Конкурирующее объяснение.~Гипотеза, не установленная причина.
gap~The materials do not show who stopped attending.~Незаполненный вопрос.~Не отрицательный ответ.
selection~Include the relevant objection as well as supportive data.~Не выбирать только удобное.~Вес по качеству, не механическое 50/50.
next evidence~Compare matched periods and document support given.~Направление новой проверки.~План не уже полученные результаты.`);
export const argumentPatterns=rows(`focused thesis~A limited pilot is preferable to immediate rollout.~Оспоримый ограниченный вывод.~Не автоматически факт источника.
claim type~The service should retain a non-digital route.~Рекомендация.~Требует критериев, не только числа.
reason~Some participants cannot use the online form.~Основание по данным.~Не все участники.
evidence~Six interviewees described that barrier.~Конкретное свидетельство.~Не доля населения без выборки.
warrant~If access matters, a digital-only route may exclude some users.~Связь данных и оценки.~Ценность access названа, не скрыта.
qualification~For this group, under the stated conditions…~Ограничение тезиса.~Не пустое бесконечное хеджирование.
counterargument~A parallel route may increase staff work.~Сильное возражение.~Не карикатура на оппонента.
concession~That workload concern is legitimate.~Признание части аргумента.~Не отказ от всего тезиса автоматически.
response~A smaller trial could measure that workload before expansion.~Ответ на конкретную трудность.~Не guaranteed solution.
revision~The objection leads me to narrow the proposal.~Изменение позиции по основанию.~Не провал дискуссии.
although~Although demand rose, the cause is uncertain.~Уступка + clause.~Не although … but в одной базовой связи.
despite~Despite the increase, the cause is uncertain.~Despite + noun/-ing.~Не despite that без the fact.
however~Demand rose. However, attribution remains uncertain.~Связующий adverb.~Пунктуация требует ручной проверки.
whereas~A supports a trial, whereas B calls for more baseline data.~Сопоставление.~Не причинный союз.
notwithstanding~Notwithstanding that concern, a smaller trial may be useful.~Отмеченная уступка.~Не обязательный улучшатель обычной прозы.
because~I favour a trial because the uncertainty is testable.~Причина решения автора.~Не подмена доказанного эффекта.
not necessarily~More visits do not necessarily mean more people.~Предел импликации.~Не утверждение отсутствия роста людей.
both and~Both access and workload need examination.~Два критерия.~Не одинаковый вес по умолчанию.
not only but also~The proposal affects not only users but also volunteers.~Расширение рамки.~Согласовать параллельные части.
audience~For new members: explain baseline in ordinary words.~Медиация смысла.~Не удалять оговорку ради простоты.
plain definition~A baseline is the starting measurement used for comparison.~Объяснение термина.~Не гарантия сопоставимости групп.
voice separation~The report says X; I therefore recommend Y.~Источник и собственный переход.~Therefore требует объяснимой связи.
oral signpost~First the evidence, then the limit, finally the option.~Маршрут слушателя.~Не заученный текст вместо взаимодействия.
challenge~What evidence would change your recommendation?~Проверка позиции.~Не требовать заранее нужного ответа.
uncertainty~We do not yet know whether the benefit lasts.~Честное неизвестное.~Не отрицание пользы.
conditional recommendation~Proceed only after permission and support are confirmed.~Предел рекомендации.~Не утверждать, что условия выполнены.
conclusion~The evidence supports testing, not immediate universal adoption.~Соразмерный итог.~Не новый факт в последней строке.
revision record~Original claim → objection → narrower claim → reason.~История редакции.~Не стирать исходный текст.`);
export const sourceReference={id:'source-attribution',title:'Источник, пересказ и проверяемое утверждение',intro:['26 моделей для точной передачи и проверки источника. Это учебный справочник языка, не полный стандарт цитирования или исследовательской методологии. Все примеры вымышлены; реальные авторы и даты должны проверяться отдельно.'],headers,rows:sourcePatterns,sources:synthesisSources,practice:rows(`According ___ the log?~To.
___ my view?~In.
Attribute the result ___ staffing?~To.
Evidence is/are?~Is в обычном неисчисляемом значении.
Two pieces of evidence is/are?~Are: head pieces.
Paraphrase без кавычек: нужен источник?~Да, чужая идея остаётся чужой.
Published July / measured May: когда наблюдения?~May.
Newsletter копирует memo: два независимых подтверждения?~Нет.
Источник не измерял satisfaction: она низкая?~Не установлено.
18/24 respondents: все пользователи?~Нет.
Автор заинтересован: все данные ложны?~Не следует; проверяют конкретное свидетельство.
Update не указал method: данные поддельны?~Не установлено.
Can I заменить may на will в пересказе?~Нет, это усиление.
Цитата с ошибкой: можно молча исправить?~Не выдавать изменённые слова за точную цитату; выбрать прозрачную правку или пересказ.
Не знаю страницу: придумать правдоподобную?~Нет, указать доступные реальные данные.
Факты, мнение автора, моя гипотеза: как разделить?~Явная атрибуция, reporting verbs и отдельный вывод.`)};
export const synthesisReference={id:'source-synthesis',title:'Сопоставление источников и границы синтеза',intro:['26 моделей связи нескольких материалов по вопросу. Таблица помогает сохранять методы, группы, единицы и оговорки; не заменяет полный курс статистики. Вымышленные учебные числа не являются результатами реального исследования.'],headers,rows:synthesisPatterns,sources:synthesisSources,practice:rows(`Agree ___ the need?~On.
Agree ___ an author?~With.
Agree ___ check?~To.
40 loans = 40 people?~Не обязательно.
Два отчёта о тех же людях: сложить unique count?~Нет, нужен учёт пересечения.
40% → 50%: сколько percentage points?~10.
40 → 50: relative increase?~25 процентов от 40.
Один измеряет speed, другой satisfaction: противоречие обязательно?~Нет, разные исходы.
Neither isolates effect: эффект равен нулю?~Не установлено.
Синтез = A, затем B без связи?~Нет, нужна связь по вопросу и основания.
Третий текст цитирует A: новое независимое свидетельство?~Не автоматически.
Compatible = identical?~Нет.
Только supportive sources: какой риск?~Пропуск существенного контраргумента и искажение картины.
Нужен равный объём любой позиции?~Нет, вес зависит от релевантности и качества свидетельств.
Доля без denominator: что спросить?~Какая группа и сколько в ней наблюдений.
План новой проверки уже доказывает её результат?~Нет.`)};
export const argumentReference={id:'argument-mediation',title:'Тезис, контраргумент и объяснение другому адресату',intro:['28 моделей развёрнутого аргумента и медиации. Не обязательный шаблон из одинакового числа абзацев. Выбирайте структуру по вопросу, доказательствам и адресату, сохраняя право пересмотреть тезис.'],headers,rows:argumentPatterns,sources:synthesisSources,practice:rows(`Although + noun или clause?~Clause; возможны отдельные сокращённые конструкции, но здесь полная модель.
Despite + the delay: допустимо?~Да, именная группа.
Although … but в одной базовой связи?~Убрать дублирование.
Counterargument = личное нападение?~Нет, сильное возражение к тезису или основанию.
Concession отменяет весь тезис?~Не обязательно.
Нельзя ответить на возражение: что делать?~Пересмотреть или сузить тезис, признать неопределённость.
Warrant: зачем?~Показать, как данные поддерживают вывод.
Больше посещений → обязательно больше людей?~Нет.
Рекомендация should = измеренный факт?~Нет.
Plain English можно убрать may?~Нет, сохранить степень уверенности.
Неспециалист не понял baseline: действие?~Дать простое определение и проверить пересказ.
Голос в ASR transcript оценён?~Нет, нужно аудио.
Сильный вывод требует obviously?~Нет, он требует подходящих оснований.
Все позиции одинаково надёжны?~Нет, обсуждать свидетельства, не равнять механически.
Финальный абзац добавляет новое число без источника?~Проверить и обосновать, не вводить скрытое свидетельство.
Сохранить старый черновик после пересмотра?~Да, вместе с причиной и новой версией.`)};

import {projectDocuments} from './c205-writing-texts.mjs';
export const writingSources=[...projectDocuments,
 ['Harvard College Writing Center: Tips for Organizing Your Essay','https://writingcenter.fas.harvard.edu/tips-organizing-your-essay'],
 ['Harvard College Writing Center: Counterargument','https://writingcenter.fas.harvard.edu/counterargument'],
 ['Cambridge Dictionary: abstract — noun and verb','https://dictionary.cambridge.org/dictionary/english/abstract'],
 ['Cambridge Dictionary: substantive — pronunciation','https://dictionary.cambridge.org/us/pronunciation/english/substantive'],
 ['Merriam-Webster: through line / throughline','https://www.merriam-webster.com/dictionary/throughline']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const writingPatterns=rows(`question to thesis~The question asks when; the thesis specifies conditions.~Ответ на вопрос вместо объявления темы.~Не обещание заранее доказать любимую позицию.
local claim~A count alone does not describe coverage.~Положение конкретного абзаца.~Нужны основание и граница.
evidence~The register records thirty-two requests.~Наблюдаемый/сообщённый факт.~Не тридцать два успешных изменения.
analysis~This figure describes activity rather than quality.~Объяснение значения основания.~Не просто повтор числа.
warrant~Coverage matters because an unexamined aspect remains unresolved.~Связь основания с критерием.~Нужно объяснить, не спрятать за therefore.
limit~The reasons for the outcomes were not recorded.~Граница доступных сведений.~Не доказательство отсутствия причин.
source voice~The documentation distinguishes these decisions.~Атрибуция фактическому источнику.~Не личная проверка локальной настройки.
author voice~For this team, I propose a short scope statement.~Собственное предложение.~Не официальная позиция источника.
synthesis~The sources contribute different parts of the argument.~Связать по проблеме.~Не три изолированных пересказа.
dependency~Readers need the criterion before they can assess this comparison.~Порядок по логике.~Не одинаковая длина разделов.
concession with clause~Although the rule is simple, its coverage is unclear.~Although + clause.~Не although…but в этой базовой связи.
concession with noun~Despite its simplicity, the rule needs justification.~Despite + noun.~Не despite of.
expanded concession~Despite the fact that the draft is complete, it needs revision.~The fact that после despite.~Полный черновик не окончательный результат.
contrast transition~The text is clear. However, the claim is unsupported.~However как связующее наречие.~Пунктуацию проверять вручную.
recommendation~I recommend recording the scope.~Recommend + -ing.~Не выполненное действие.
mandative~I recommend that the scope be recorded.~Base passive; should be тоже возможно.~Форму выбирать по модели задания, не запрещать нормативные варианты.
agreement~The grounds for the change are explicit.~Согласование по head grounds.~Не ближайшее singular change.
referent~This limitation affects the conclusion.~Имя уточняет this.~This без имени не всегда ошибка.
alternative~A fixed threshold is easier to identify.~Сильное основание другой позиции.~Не выдуманная эмпирическая победа.
response~I accept the capacity concern and have shortened the proposed record.~Уступка меняет предложение.~Не обязательно отказ от всех его частей.
summary~The proposal is conditional, and the summary preserves that condition.~Резюме соответствует телу.~Не claim inflation ради краткости.
conclusion~The available evidence supports a qualified recommendation.~Итог показанного аргумента.~Не новое решающее основание в последней строке.
paraphrase~I restated the idea and checked its scope against the source.~Свой язык, та же мысль.~Атрибуция всё ещё нужна.
citation~The reference identifies the actual page and section used.~Проверяемый путь к основанию.~Не выдумывать DOI, дату и страницу.
reverse outline~This paragraph introduces the objection; the next answers it.~Функции написанных абзацев.~Не желаемый план ещё не написанного текста.
substantive revision~I changed the recommendation after correcting its premise.~Изменение содержания.~Не выдавать за орфографию.
copy-edit~I corrected a repeated agreement error without changing the claim.~Локальная языковая правка.~Проверить, что смысл действительно сохранён.
response to review~Could you identify which inference you dispute?~Уточнить основание отзыва.~Вежливый отзыв не автоматический approval.
version trail~The original and revised passages are both retained.~История без стирания.~Не фабриковать проведённую редактуру.
assessment boundary~A complete paper is not evidence of a completed oral defence.~Разные продукты и навыки.~Unknown без реальной проверки, не автоматический C2.`);
export const projectWritingReference={id:'project-writing',title:'Полный проект: аргумент, синтез и редактура',intro:[
 '30 авторских моделей и 16 задач для работы с полным письменным проектом. Это не универсальный стандарт научных исследований, цитирования или подтверждения CEFR.',
 'C205-writing содержит полный авторский образец 1000–1500 слов. Команда и локальные данные вымышлены; три страницы Google/GitHub реальны. Различай описание источника, исходные данные учебного brief и собственную рекомендацию.',
 'Чужие страницы и упражнения не копируются. Для собственной работы нужны три реально прочитанных открытых источника, полный исходник, полная новая версия и причины правок. Источники открываются вручную с интернетом.'
],headers:['Функция','Авторский пример','Механизм','Граница'],rows:writingPatterns,sources:writingSources,practice:rows(`Topic sentence и thesis всегда одно и то же?~Нет: thesis отвечает на общий вопрос, topic sentence часто задаёт локальное положение абзаца; форма и положение зависят от жанра.
Исправь Despite the paper is clear… двумя способами.~Although the paper is clear… / Despite the paper's clarity… либо despite being clear с ясным субъектом.
Исправь recommend to record в I recommend to record the scope.~I recommend recording the scope. Возможна that-clause с нужной формой.
Дай base passive после recommend that.~I recommend that the scope be recorded; should be также нормативно в соответствующей модели.
Почему therefore не доказывает причинность?~Связка заявляет отношение, но для него нужны основания; after и корреляция сами не достаточны.
Три ссылки — достаточное основание для слова proven?~Нет: проверить тип, независимость и содержание конкретных оснований.
Как отделить source voice от своей рекомендации?~Назвать источник у его claim и пометить собственный переход: For this context, I propose…
Что такое сильный counterargument?~Релевантное возражение к действительному основанию/критерию/выводу, а не выдуманная слабая позиция с приписанным мотивом.
Как проверить abstract после правки тела?~Сверить вопрос, вывод, числа, роли, модальность и ограничения; резюме не должно стать сильнее.
Число исправлено в одном абзаце. Работа завершена?~Нет автоматически: найти зависимые claims в других разделах и обновить их с сохранением истории.
Copy-edit может стать substantive change?~Да, если меняет агента, число, отрицание, охват, модальность или вывод; решает фактический смысл.
Reverse outline составляется по какому тексту?~По написанному черновику; фиксируются реальные функции и зависимости, не идеальное оглавление.
Парафраз без совпадающих слов освобождает от ссылки?~Нет: источник идеи или факта всё равно указывается; формулировку сверяют с исходным смыслом.
Источник без даты: можно записать дату доступа как publication date?~Нет. Раздельные поля; дата публикации not stated, доступ фактический.
Что входит в итоговый пакет письма?~Brief, полный исходный проект, реально прочитанные источники, полный revised text и журнал с основаниями правок; отзывы не фабрикуются.
1000–1500 слов — лимит занятия или показатель C2?~Ни то ни другое. Это объём письменного продукта; нужны содержательная оценка, реальная речь отдельно и отложенное применение.`)};

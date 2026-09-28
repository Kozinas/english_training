export const defenceSources=[
 ['MIT MechE Communication Lab: Qualifying Exam Presentation','https://mitcommlab.mit.edu/meche/commkit/qualifying-exam-presentation/'],
 ['MIT BE Communication Lab: Introduction to Public Speaking','https://mitcommlab.mit.edu/be/commkit/introduction-to-public-speaking/'],
 ['MIT guide: Outlining and Planning an Oral Presentation','https://web.mit.edu/21.guide/ora-out.htm'],
 ['Cambridge Dictionary: defensible — pronunciation','https://dictionary.cambridge.org/pronunciation/english/defensible'],
 ['Cambridge Dictionary: responsive — pronunciation','https://dictionary.cambridge.org/pronunciation/english/responsive'],
 ['Cambridge Dictionary: proportionate — pronunciation','https://dictionary.cambridge.org/pronunciation/english/proportionate'],
 ['Cambridge Dictionary: rationale — pronunciation','https://dictionary.cambridge.org/pronunciation/english/rationale']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const defencePatterns=rows(`opening position~I recommend retaining the overview and testing a focused update.~Назвать ответ и границы в начале.~Не обещать заранее успешный эффект.
route through an argument~I will explain the evidence, the alternative and the remaining condition.~Дать слушателю карту рассуждения.~Маршрут речи не фиксированный срок занятий.
personal contribution~I compared the documents; I did not conduct the trial.~Разделить своё действие и чужую работу.~Не присваивать наблюдение, которого не было.
source boundary~The register records enquiries, not unique correspondents.~Сохранить единицу свидетельства.~Не считать вопросы разными людьми.
audible attribution~According to the supplied register, fifteen enquiries concerned location.~Источник произносится, не только стоит внизу слайда.~Не выдавать учебный документ за реальный.
definition~By current, I mean the most recently confirmed arrangement.~Точное значение в этом аргументе.~Определение не подтверждает актуальность конкретной записи.
signpost~That brings me to the main objection.~Показать смену функции.~Связка не заменяет самого возражения.
embedded question~Could you clarify what the notice would replace?~What + subject + verb, без повторной инверсии.~В прямом вопросе порядок другой.
whether~The issue is whether the page can be maintained.~Назвать открытый вопрос.~Whether само не подтверждает возможность.
cleft focus~What matters here is responsibility for updates.~Выделить предмет разговора.~Фокус не добавляет доказательства.
contrast~The email would remain; the notice would be an addition.~Противопоставить два положения.~Would здесь предложение, не уже внедрённая схема.
two-part question~There are two issues. I will address finding the note first, then maintenance.~Разделить вопрос, удержать обе части.~Вернуться ко второй, не потерять её.
intent check~Are you asking about the workload or the authority to approve changes?~Уточнить реальный информационный пробел.~Не переспрашивать ритуально любой ясный вопрос.
false premise~I am not proposing to remove the email; I should have made that clearer.~Исправить предпосылку и признать свой вклад в путаницу.~Не обвинять слушателя без основания.
direct answer~No. The records do not establish how many different people asked.~Сначала ответить, затем ограничить.~Не прятать ответ за длинным вступлением.
bounded uncertainty~I do not know that yet; the supplied records do not measure it.~Неизвестное с конкретной причиной.~Не превращать неизвестность в противоположный факт.
conditional answer~If that responsibility cannot be maintained, I would reconsider the proposal.~Назвать условие пересмотра.~Не обещать, что условие уже выполнено.
concession~That workload concern is valid, although it does not settle the comparison.~Принять часть основания.~Уступка не полное согласие с выводом.
defer and return~May I finish this distinction and then return to your question?~Согласовать отсрочку и фактически вернуться.~Не использовать как бесконечное уклонение.
self-correction~I said people; I should have said enquiries.~Заменить ошибочную единицу явно.~Исправить также зависимые выводы.
analogy~Think of an overview with a clearly marked update beside it.~Связать незнакомое со знакомым.~Назвать предел аналогии; она не эксперимент.
plain-language definition~Optional means you can use the notes if you want them.~Заменить термин объяснением.~Не удалять важное условие ради краткости.
check of understanding~Which arrangement would you act on, and why?~Получить пересказ/применение.~Политое yes не доказательство понимания.
prominence~Questions, NOT people.~Показать смысловой контраст голосом.~Капитализация — подсказка, не фонетическая оценка.
thought group~If the page is outdated / the link may mislead readers.~Пауза по смысловой границе.~Не обязательная пауза после каждого слова.
pace and repair~Let me restate the corrected figure.~Дать слушателю восстановить число.~Не объявлять максимальную скорость целью.
visual failure~The slide is unavailable, so I will state the conclusion aloud.~Продолжить понятную речь без экрана.~Не притворяться, что слушатель видел данные.
decision status~The proposal was discussed; no adoption decision was recorded.~Отделить обсуждение от решения.~Аплодисменты не голосование.
follow-up record~Your question led me to narrow the claim, not to announce a completed trial.~Назвать фактический результат обмена.~Обещание не выполненная правка.
oral evidence~The transcript supports analysis of wording; delivery requires audio.~Раздельные наблюдаемые навыки.~ASR и текст не подтверждают произношение.`);
export const projectDefenceReference={id:'project-defence',title:'Защита проекта: речь, вопросы и адаптация',intro:[
 '30 авторских моделей и 16 задач. Это языковая подготовка защиты проекта, не регламент диссертации, универсальная формула презентации или сертификат C2. Правила и тайминг конкретного внешнего экзамена не переносятся на длительность этого курса.',
 'Выступление, фактический обмен вопросами и объяснение неспециалисту проверяются отдельно. Прочитанный сценарий не доказывает спонтанное взаимодействие; без аудио произношение и oral fluency остаются unknown. Нормативные UK/US и понятные другие варианты допустимы.',
 'Материалы MIT используются как методические ссылки, не скопированные лекции или аудио. Учебные кейсы Linden и Owen вымышлены. Реальные источники своего проекта указывай точно; запись и личные ответы храни только приватно.'
],headers:['Функция','Авторский пример','Механизм','Граница'],rows:defencePatterns,sources:defenceSources,practice:rows(`Чем защита отличается от чтения проекта вслух?~Она отбирает и обосновывает вывод для слушателя, реагирует на реальные вопросы; чтение не показывает всю эту работу.
Перестрой What does the notice replace? после Could you clarify…~Could you clarify what the notice replaces? Сохранить значение, убрать инверсию внутри.
Почему What matters is… не доказательство?~Это способ фокуса; основание выбора критерия нужно объяснить отдельно.
Как ответить на вопрос с неверной предпосылкой?~Уточнить/исправить конкретную предпосылку, ответить на разумную часть вопроса и признать собственную неясность, если она была.
Нужно ли перефразировать любой вопрос?~Нет: уточнять при реальном пробеле, а ясный вопрос можно сразу содержательно ответить.
Как не потерять вторую часть вопроса?~Назвать обе, выбрать порядок и вернуться ко второй; при необходимости свериться со слушателем.
I do not know достаточно?~Честно, но полезно назвать границу знания, что известно и как можно проверить именно этот пробел, без выдуманного результата.
Как ответить на сильное возражение?~Передать его основание, принять обоснованную часть, дать адресный ответ или пересмотреть позицию; не угадывать мотив оппонента.
Двадцать четыре enquiries — двадцать четыре people?~Нет: единицы различны, уникальность участников не задана.
Как помогает аналогия?~Делает структуру идеи понятнее через знакомую модель; предел сравнения надо назвать, доказательством эффекта она не становится.
Как проверить понимание неспециалиста?~Попросить объяснить решение/условие своими словами или применить его к примеру; не ограничиваться вежливым yes.
Меньше терминов означает меньше ограничений?~Нет: ограничения сохраняются простым языком, иначе меняется смысл.
Почему NOT заглавными не даёт балл за ударение?~Это запись намерения; слышимый контраст оценивается по реальной речи и пониманию слушателем.
Исправил число в речи — что ещё проверить?~Единицу, знаменатель и зависимые утверждения в слайде, выводе и последующем пересказе.
Что фиксировать после вопросов?~Фактические вопросы, ответы, принятые поправки, нерешённое и ещё не выполненные действия; не фабриковать согласие.
Сохранённая запись доказывает перенос через неделю?~Нет: нужна новая реально выполненная задача позже с незнакомым материалом и содержательной оценкой, не новый timestamp старого файла.`)};

export const inquirySources=[
 ['Harvard College Writing Center: Asking Analytical Questions','https://writingcenter.fas.harvard.edu/asking-analytical-questions'],
 ['Purdue OWL: Evaluating Sources — General Guidelines','https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/general_guidelines.html'],
 ['Cambridge Grammar: Whether — indirect questions and infinitives','https://dictionary.cambridge.org/grammar/british-grammar/whether'],
 ['Cambridge Dictionary: inquiry — UK/US pronunciation','https://dictionary.cambridge.org/us/pronunciation/english/inquiry'],
 ['Cambridge Dictionary: subject — noun/adjective pronunciation','https://dictionary.cambridge.org/pronunciation/english/subject'],
 ['Merriam-Webster: Beg the question — both established meanings','https://www.merriam-webster.com/grammar/beg-the-question']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const inquiryPatterns=rows(`topic~Visitor information~Область интереса.~Ещё не вопрос и не вывод.
research question~Under what conditions should both routes be retained?~Открытый вопрос с условиями.~Не предполагает равенства вариантов.
working thesis~A fallback route is currently justified.~Предварительный ответ.~Нужны основания и условия пересмотра.
audience~This proposal is addressed to the trustees.~Кому нужен результат.~Не наделяет читателя отсутствующими полномочиями.
decision~The board is considering a further trial.~Предмет решения.~Не уже утверждённая замена.
scope~The project concerns first-time use at this site.~Граница группы и места.~Не все пользователи везде.
exclusion~Supplier selection is outside this inquiry.~Явное исключение.~Не прятать необходимый контраргумент.
criterion~Equivalent access is a priority.~Мерило оценки.~Не сам по себе эмпирический факт.
indicator~We recorded completion without staff directions.~Наблюдаемый показатель.~Не исключает помощь companions.
embedded question~I will examine what the note establishes.~Subject + verb внутри what.~Не what does the note establish внутри этой фразы.
whether to~We need to decide whether to extend the trial.~Whether + to-infinitive.~Не if to extend.
subject question~Which document supports this claim?~Which document — подлежащее.~Do-инверсия не требуется.
provenance~The newsletter draws on the original report.~Происхождение claim.~Перепечатка не новый trial.
publication versus observation~Published in June; observations from May.~Две разные даты.~Дата доступа — ещё третье поле.
version~The trial used version 0.3, not 0.4.~Рамка конкретной проверки.~Не переносить автоматически.
attribution~According to the trial note, fourteen participants completed the task.~Передача содержания источника.~Не заявление о личной проверке наблюдений.
evidence~Two pieces of evidence support further inquiry.~Evidence обычно неисчисляемое.~Не an evidence в этом значении.
relevance~The quotation is relevant to the cost question.~Отношение к вопросу.~Не полнота общей оценки затрат.
source independence~This is an independent response, not a second experiment.~Уточнить вид независимости.~Другая организация не всегда другие данные.
source interest~The supplier has a commercial interest.~Контекст оценки.~Не автоматическое доказательство лжи.
missing method~The classification rule is not stated.~Честный пробел.~Не выдумывать missing definition.
compatibility~The documents address different aspects.~Различие функции.~Не обязательно противоречие.
warrant~The finding does not warrant universal replacement.~Граница обоснования.~Не отрицание любого полезного вывода.
conditional recommendation~I support a trial conditional on a fallback route.~Условная позиция.~Не факт выполнения условия.
alternative~A combined provision remains a viable option.~Серьёзный другой путь.~Не доказанное равенство всех показателей.
revision~I changed the question after identifying an untested assumption.~Объяснённый пересмотр.~Старую формулировку сохранить.
research plan~I will compare the claims and identify unresolved questions.~Обещание процедуры.~Не обещание заранее выбранного результата.
assessment boundary~Clear wording does not validate the software.~Языковая и предметная оценка.~Без аудио pronunciation/fluency неизвестны.`);
export const projectInquiryReference={id:'project-inquiry',title:'Исследовательский проект: вопрос, источники и план',intro:[
 '28 авторских моделей и 16 задач для подготовки проекта. Это не полный стандарт исследовательской методологии, цитирования или подтверждения C2.',
 'Сначала различи тему, вопрос и рабочий тезис. Сохраняй происхождение, даты, версии и ограничения каждого основания. Число публикаций не равно числу независимых наблюдений.',
 'В C205-inquiry музейные документы и рассказ о мастерской вымышлены. Собственные реальные источники нужно действительно открыть и прочитать; не выдавать учебное досье за публикации. Источники ниже — рекомендации по работе, их тексты и упражнения не копируются.'
],headers:['Функция','Пример','Механизм','Граница'],rows:inquiryPatterns,sources:inquirySources,practice:rows(`Раздели topic/question/thesis на собственном примере.~Тема — область; вопрос — открытая проблема; тезис — обоснованный пока предварительный ответ.
Исправь We will examine what does the report show.~We will examine what the report shows. Внутри порядок subject + verb.
Выбери if/whether перед to keep the service.~Whether to keep the service; перед to-infinitive whether.
The question is whether it will work. Удалять will как в условии?~Нет: whether вводит косвенный вопрос, не обычное будущее условие.
Назови поля паспорта источника.~Автор/организация, название, реальный адрес, публикация/обновление, доступ, прочитанное место, версия и период наблюдений; отсутствующее not stated.
Три сайта перепечатали один отчёт. Три измерения?~Нет. Проследить происхождение claim и не считать копии независимыми наблюдениями.
Независимое мнение эксперта — независимый эксперимент?~Не автоматически; отличать оценку от новых измерений.
Предложи вопрос вместо Why is this option always best?~Under what conditions would this option meet the audience's needs better than the alternatives?
Число обращений — число клиентов?~Не обязательно: один клиент может обратиться несколько раз; нужна единица наблюдения.
Without staff help — полностью самостоятельно?~Не обязательно, возможна помощь других людей; сохранять определение показателя.
Есть audio button — доступность проверена?~Нет. Описание функции не заменяет проверку использования и конкретных потребностей.
Цена включает hosting, не staff time. Известны все затраты?~Нет. Состав предложения не равен total cost.
Источник без даты: что записать?~Date not stated плюс фактическую дату доступа; не выдавать её за дату публикации.
Назови серьёзную альтернативу полной замене.~Сохранить оба маршрута, проверить поддержку или ограничить trial — с причинами применимости, не автоматически лучший ответ.
Что могло бы изменить твою рекомендацию?~Конкретное новое свидетельство, связанное с критерием и направлением пересмотра; не просто more data.
Полированный английский и 100% заполнения доказывают C2?~Нет. Нужны содержательная проверка навыков, реальная речь/взаимодействие и отложенный перенос; техническая валидность оценивается отдельно.`)};

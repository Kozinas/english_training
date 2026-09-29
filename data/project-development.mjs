export const developmentSources=[
 ['Council of Europe: self-assessment grid — scope and official translations','https://www.coe.int/en/web/common-european-framework-reference-languages/table-2-cefr-3.3-common-reference-levels-self-assessment-grid'],
 ['British Council: listening resources','https://learnenglish.britishcouncil.org/free-resources/listening'],
 ['British Council: writing resources','https://learnenglish.britishcouncil.org/free-resources/writing'],
 ['Cambridge English: activities by skill and level','https://www.cambridgeenglish.org/learning-english/activities-for-learners/']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const developmentPatterns=rows(`current record~I have revised three drafts so far.~Текущий итог.~Не доказанное качество всех работ.
dated episode~I revised it on Monday.~Завершённый эпизод.~Не present perfect в этой конкретной рамке.
ongoing effort~I have been practising clarification.~Деятельность.~Не обещание результата.
remaining difficulty~I still struggle with conditions.~Сохраняющееся затруднение.~Не общий ярлык неспособности.
not yet demonstrated~I have not demonstrated transfer yet.~Пока не подтверждено.~Не never и не zero.
successful action~I managed to preserve the exception.~Manage to + base.~Успех конкретного действия.
successful process~I succeeded in preserving the exception.~Succeed in + -ing.~Не succeed to в этой модели.
commitment~I am committed to practising.~Предлог to + -ing.~Не срок гарантированного уровня.
enabling support~The notes enabled me to locate it.~Enable object to do.~Поддержка обозначена.
obstacle~The error prevented me from listening.~Prevent object from -ing.~Доступ не comprehension score.
feedback target~I need feedback on the argument.~Feedback on.~Не выводить предлог из русского вопроса.
evidence target~This is evidence of supported revision.~Evidence of.~Evidence обычно U.
basis~The choice is based on a sample.~Based on.~Проба должна быть реальной.
unit distinction~Twelve recordings produced twenty attempts.~Две единицы счёта.~Повторы не новые записи.
assistance~The second attempt was text-supported.~Условия результата.~Помощь не скрывать.
missing audio~Pronunciation remains unknown.~Недостаточно данных.~Транскрипт не запись голоса.
resource trial~I sampled this particular section.~Конкретное выполненное действие.~Каталог не просмотр содержимого.
selection boundary~The label helps me search, not certify my level.~Ориентир поиска.~Не персональный CEFR.
replacement~I will inspect an accessible alternative.~Намерение замены.~Ещё не проверенный материал.
goal~I want to explain both restrictions.~Наблюдаемое действие.~Не расплывчатое improve everything.
criterion~The explanation must preserve the condition.~Требование к качеству.~Не результат проверки.
check~A new brief will test the same distinction.~Новый материал.~Не повтор ключа.
resume~I will continue from the saved paragraph.~Продолжение работы.~Не сброс темы.
calendar~I will move the review date, not remove the task.~Гибкое расписание.~Общий объём сохраняется.
clarification~Could you explain why this claim is too broad?~Внутри subject + verb.~Не вопросительная инверсия.
limited offer~I can review the summary, not the audio.~Предел предложения.~Не назначать дополнительные обязанности.
unconfirmed partner~Jo has not agreed to participate.~Согласие отсутствует.~Это ещё не прямой отказ.
revision record~I retained the original and labelled the revision.~История версий.~Журнал не полный новый текст.
delayed evidence~The later task used unfamiliar material.~Фактический перенос.~Не новая дата старого файла.
reconsideration~I will retain or change support based on new evidence.~Пересмотр с основанием.~План не уже освоенный навык.`);
export const projectDevelopmentReference={id:'project-development',title:'Самостоятельный маршрут: аудит, выбор и пересмотр',intro:[
 '30 авторских языковых моделей и 16 задач. Это опора для собственного управления работой, не тест CEFR и не обещание быстрого освоения. Календарь подстраивается под человека; содержание и критерии не сокращаются.',
 'Официальные источники ниже помогают ориентироваться в навыках и искать материалы. Их упражнения, записи и таблицы не перепечатаны. Для реального выбора нужны интернет, конкретный материал и фактическая проба; доступ и условия могут меняться.',
 'Самооценка, выполненная работа, помощь, обратная связь и новый контроль записываются раздельно. Без аудио pronunciation/oral fluency остаются unknown. Учебные Noor/Eli вымышлены; свои данные хранить только приватно.'
],headers:['Функция','Авторский пример','Механизм','Граница'],rows:developmentPatterns,sources:developmentSources,practice:rows(`Почему один общий процент не профиль навыков?~Разные задачи и условия дают свидетельства о разных действиях; письмо не проверяет звук.
Что входит в строку аудита?~Дата, задача/материал, навык, помощь/знакомство, исходный ответ, результат, источник оценки и предел.
I have revised / I revised on Monday: разница?~Текущий итог и конкретная завершённая рамка; контекст управляет выбором.
Почему committed to practising, но managed to practise?~В первом to предлог, во втором часть инфинитивной модели; управление учится с выражением.
Feedback of my argument — универсальный перевод «о чём»?~Нет, обычная модель feedback on my argument; предлог не выбирается русским вопросом.
Perfect repeat — новый контроль?~Нет: полезная практика знакомого; независимый перенос проверяется на другом материале.
Отсутствует audio: что можно оценить?~Текст/структуру транскрипта, но не произношение и oral fluency.
Каталог с уровнем заменяет пробу?~Нет: открыть конкретный материал, проверить цель, доступ и реальный фрагмент.
Недоступная запись означает низкий listening?~Нет, это проблема доступа; результат понимания неизвестен.
Как отделить цель от критерия и теста?~Действие, требуемое качество, конкретная новая задача проверки — разные роли.
Что делать при меньшем времени?~Продолжать сохранённую работу позже и менять календарь, не обязательный объём.
Партнёр отсутствует: как честно продолжить?~Готовить доступные продукты, искать согласившегося партнёра; взаимодействие pending.
Что сохранять после отзыва?~Оригинал, сам отзыв, полную редактуру и новый самостоятельный ответ отдельно.
Как запланировать отсрочку без фиктивного успеха?~Назначить новый материал/критерий и оставить pending до фактического выполнения через 7 дней.
Что меняет очередной обзор?~Решения keep/reduce/replace/extend по новым данным; неизвестное не дописывается.
Expanded и 100% — mastery?~Нет: публикация охвата и заполнение работы отдельны от качества, аудио и отложенного применения.`)};

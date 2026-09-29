export const workUpdateSources=[
 ['GitLab Handbook: asynchronous communication','https://handbook.gitlab.com/handbook/communication/#asynchronous-communication'],
 ['Scrum Guide: Daily Scrum','https://scrumguides.org/scrum-guide.html#daily-scrum'],
 ['Cambridge Dictionary: postpone pronunciation','https://dictionary.cambridge.org/pronunciation/english/postpone'],
 ['Cambridge Dictionary: resume pronunciation','https://dictionary.cambridge.org/pronunciation/english/resume']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const workUpdatePatterns=rows(`completed event~I drafted four examples yesterday.~Past Simple с законченным временем.~Draft не approval.
current result~I have drafted four examples.~Have + V3, итог к сейчас.~Не весь task завершён.
ongoing~I am revising the wording.~Am/is/are + -ing.~Процесс не готовый результат.
duration~I have been investigating since 08:00 UTC.~Have been + -ing, since начальная точка.~Не обязательно без паузы или с найденной причиной.
period~I worked on it for two hours yesterday.~For — длительность.~Не автоматический Perfect.
remaining~Two examples remain unwritten.~Явный остаток.~Не existing unreviewed drafts.
limited review~One wording example was accepted.~Назови предмет approval.~Не приложение или вся задача.
uncountable progress~We have made some progress.~Progress обычно U.~Не a progress в обычном отчёте.
uncountable work~There is some outstanding work.~Work обычно U, outstanding = remaining.~Tasks исчисляемы.
dependency~The comparison depends on receiving the sample.~Depend on + -ing.~Не обещание получить sample.
waiting~I am waiting for access.~Wait for.~Не доказанная вина человека.
local blocker~Missing access blocks the application check.~Назван затронутый шаг.~Не всё work blocked.
available work~I can proofread the drafts while waiting.~Что можно продолжать.~Не значит уже выполнено.
specific request~Could you clarify what empty search means?~Вопрос с предметом.~Embedded order, не what does… внутри.
help pattern~Could you help me check the wording?~Help + object + base/to-infinitive.~Не все глаголы допускают оба.
explain pattern~Please explain the requirement to me.~Explain something to someone.~Не explain me the requirement.
suggest pattern~I suggest checking the scope.~Suggest + -ing.~Не suggest me to check.
limited offer~Eli offered to forward the request.~Offer to + действие.~Не обещал создать account.
intention~I plan to draft the remaining examples.~Plan to + base.~Не completed.
conditional estimate~I may finish two drafts by 16:00 if clarification arrives by 11:00.~Scope и условие.~Не весь task deadline.
update commitment~I will post an update at 13:00 even if access is unavailable.~Обещание сообщить статус.~Не обещание finish.
by~Please send the note by 16:00 UTC.~Не позднее точки.~Не начало.
from~I can proofread from 14:00 UTC.~Начиная с точки.~Не завершение в 14:00.
until~I can stay until 14:00 UTC.~Граница продолжения.~Не at или by.
snapshot~Status at 09:00 UTC on 30 September.~Дата и зона для читателя позже.~Не сегодня ученика.
artifact~Use Search Help 0.3 and Review Notes 7.~Опознаваемые file/version.~Не it без контекста.
handover sent~I have sent the handover note.~Передан документ.~Не accepted all work.
accepted scope~Nina agreed to proofread four existing drafts.~Конкретное принятое действие.~Не два новых или application check.
unagreed time~No finish time has been agreed.~Неизвестная договорённость.~Не придумывать чужой срок.
read-back~Could you restate what you are taking on?~Проверить понимание scope.~Одного yes недостаточно.
correction~I said five labels; the correct number is three.~Исходное и исправленное раздельно.~Поправка не новая выполненная работа.
changed estimate~The earlier estimate no longer applies.~Назови изменившееся условие.~Не переписывай прошлое обещание молча.`);
export const workUpdateReference={id:'work-update-language',title:'Язык отчётов о работе, помощи и handover',intro:[
 'Авторские модели B1: связывать результат, текущее действие, остаток, зависимость, просьбу и фактическое принятие работы. Это не полный стандарт управления проектами или обязательный шаблон stand-up. Вымышленные часы/даты не задают темп прохождения курса.',
 'GitLab описывает асинхронную коммуникацию как отправную точку и запись выводов разговоров. Scrum Guide связывает Daily Scrum с продвижением к Sprint Goal и адаптацией плана, оставляя разработчикам выбор структуры. Поэтому yesterday/today/blockers здесь опора для языка, не обязательные три вопроса для всех команд. Первичные страницы проверены 2026-09-29; модели и упражнения оригинальные.',
 'Срок update не равен completion time; полученный handover не равен принятой ответственности; статус expanded и заполненная учебная шкала не подтверждают mastery. Реальные сообщения, credentials и личные ответы не публикуются.'
],headers:['Механизм','Модель','Смысл','Ограничение'],rows:workUpdatePatterns,sources:workUpdateSources,practice:[
 ['Исправь I have wrote it yesterday.','I wrote it yesterday.'],
 ['Сопоставь I am revising и I have revised.','Процесс сейчас / выполненная правка к сейчас; качество отдельно.'],
 ['Выбери since/for: ___ two hours.','for — длительность; since вводит точку начала.'],
 ['Have been investigating означает fixed?','Нет, длительность работы не гарантирует результат.'],
 ['Почему four of six drafted не две трети всей задачи?','Не учтены review/check и разный объём частей.'],
 ['Переведи «Другие два черновика ещё не проверены».','The other two drafts have not been reviewed yet.'],
 ['Уточни I am blocked при доступной вычитке.','The application check is blocked; I can still proofread the drafts.'],
 ['Исправь waiting access.','waiting for access.'],
 ['Исправь explain me the requirement.','explain the requirement to me.'],
 ['Дай две модели help + me + check.','Help me check / help me to check.'],
 ['Исправь I suggest you to check it.','I suggest that you check it / I suggest checking it.'],
 ['Сравни by 14:00 и from 14:00.','Не позднее 14:00 / начиная с 14:00, не конец работы.'],
 ['Update at 13:00 означает finish task?','Нет, время сообщения отдельно от оценки завершения.'],
 ['Received the note равно accepted the task?','Нет, нужно уточнить принятие и scope.'],
 ['Напиши запрос о принятом действии.','Could you restate which part you have accepted and what remains open?'],
 ['Условие оценки не наступило; что сказать?','The earlier estimate depended on that answer. I need to revise it; a new completion time is unconfirmed.']
]};

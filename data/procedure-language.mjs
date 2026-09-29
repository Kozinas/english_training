export const procedureSources=[
 ['Google developer style guide: procedures','https://developers.google.com/style/procedures'],
 ['Microsoft style guide: step-by-step instructions','https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions'],
 ['Google developer style guide: notices and warnings','https://developers.google.com/style/notices']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const procedurePatterns=rows(`goal~Copy three practice notes into empty Scratch.~Назвать цель и границы.~Не разрешение менять рабочие данные.
starting state~Before starting, check the collection name.~Начальное условие.~Не утверждать, что оно уже проверено.
imperative~Open the preview.~Base без обычного you.~Не opens в нейтральной инструкции.
negative imperative~Do not confirm yet.~Do not + base.~Не not confirms.
purpose~To inspect the selection, open Preview.~To + base объясняет цель.~Не for inspect.
sequence~First check the source; then inspect the destination.~Порядок зависимых действий.~Then не than.
before + clause~Before you continue, read the warning.~Полное условие с subject/verb.~Порядок не доказательство выполнения.
before + -ing~Before continuing, read the warning.~Общий понятный исполнитель.~Не before to continue.
after~After the preview matches, confirm once.~Предварительная проверка.~Не подтверждать до совпадения.
until~Wait until the result appears.~Граница ожидания.~Не фиксированный срок завершения.
if branch~If the titles differ, stop.~Условная ветвь.~Не утверждение, что они действительно отличаются.
otherwise~If the preview matches, continue; otherwise, stop and ask.~Ясная альтернатива по контексту.~Otherwise нельзя оставлять без понятного условия.
only after~Confirm only after both checks pass.~Ограничение порядка.~Не гарантия полного успеха.
expected result~The preview should show two titles.~Ожидание по описанию.~Не наблюдение пользователя.
observation~The preview shows one title.~Фактически сообщённое состояние.~Не две записи из ожидания.
status limit~Received does not mean approved.~Границы результата.~Не обещание решения reviewer.
check that~Check that Scratch is empty.~Проверка утверждения.~Не check is Scratch empty.
check whether~Check whether a request is listed.~Уточнение неизвестного.~Не заранее заданный положительный результат.
warn before action~Import replaces the current collection. Check its name first.~Последствие до действия.~Поздняя подсказка не предотвращает ошибку.
replaces versus merges~This import replaces the notes; it does not merge them.~Разные последствия.~Не одинаковый перевод как добавляет.
once~Select Confirm once.~Одно действие в этом кейсе.~Не повторять из-за задержки автоматически.
uncertain outcome~The result is unknown, not definitely absent.~Неизвестность результата.~Повтор может создать дополнительное действие.
cancel boundary~Cancel closes an unsent preview here.~Область функции.~Не универсальное undo после отправки.
safe stop~Stop and record the exact message.~Не изменять состояние вслепую.~Запись сообщения не исправление причины.
ask for evidence~Which title is missing?~Вопрос по фактическому несоответствию.~Не обвинение или выдуманная диагностика.
read-back~Tell me the next step and the expected result.~Проверка понимания.~Вежливое yes не полный пересказ.
resume~Resume from the last confirmed state.~Продолжение с проверкой состояния.~Не слепой повтор завершённого действия.
source and destination~Check each collection separately.~Два объекта и два свидетельства.~Совпадение count не проверяет каждый символ текста.
report versus plan~We checked the preview; we still need the review result.~Сделанное и предстоящее.~Не будущее действие как completed.
correction~I said sent, but I only opened the preview.~Исправление сильного вывода.~Сохранить исходный ответ отдельно.
conditional help~If the outcome is still unclear, ask for help.~Ограниченный следующий шаг.~Не выдумывать найденное решение.
delayed transfer~Use a different procedure after seven days.~Новый перенос навыка.~Дата старого текста не новая попытка.`);
export const procedureReference={id:'procedure-language',title:'Полная инструкция: шаги, проверка, предупреждение и восстановление',intro:[
 '32 авторские модели и 16 задач для A2. Это языковой справочник, не полный регламент эксплуатации, безопасности или восстановления данных. Все интерфейсы в заданиях вымышлены; реальные операции не нужны.',
 'Google и Microsoft дают редакционные ориентиры. Их предпочтения по оформлению шагов не универсальные законы английской грамматики и не ограничение размера учебной темы. Число шагов определяется зависимостями задачи, не таймером.',
 'Результат должен подтверждаться фактическим наблюдением в задании. Cancel, undo, retry и restore имеют разные значения и зависят от продукта. Написанный план или совпадение ASR не подтверждает выполненную процедуру, фонетику или mastery.'
],headers:['Функция','Авторский пример','Механизм','Ограничение'],rows:procedurePatterns,sources:procedureSources,practice:rows(`Исправь Not confirms the import.~Do not confirm the import: отрицательная команда с base.
To checking the result: исправь цель.~To check the result: to + base.
Before to continue: исправь.~Before continuing или Before you continue.
Then и than взаимозаменяемы?~Нет: then — порядок/следующий момент; than — сравнение.
Wait until approved означает, что approval уже получено?~Нет: это условие ожидания, не подтверждение результата.
Что поставить перед опасным шагом?~Понятное последствие, условие и способ остановиться/уточнить до действия.
Как отличить expected от observed?~The preview should show two titles / The preview actually shows one; не подменять наблюдение ожиданием.
Check is the target empty: исправь.~Check whether the target is empty или Check that the target is empty по смыслу.
Replaces и merges одинаковы?~Нет: замена существующего содержимого и объединение — разные операции.
Processing равно completed?~Нет: процесс не подтверждённый итог.
Result unknown доказывает, что действия не было?~Нет: неопределённость не отрицательный результат.
Можно ли обещать Cancel после отправки как undo?~Только если это явно документировано для нужного этапа; здесь такой гарантии нет.
После паузы всегда повторять всё сначала?~Нет: проверить текущий объект и последний подтверждённый результат, затем продолжить незавершённое.
Почему три нужных title и count не проверяют все данные?~Это только названия и количество; содержимое и вложения требуют других свидетельств.
Что фиксировать в handoff?~Цель, текущий объект, сделанные проверки, наблюдения, неизвестное и следующий шаг.
Чем проверить понятность инструкции?~Реальный партнёр пересказывает/применяет шаг в учебной симуляции и задаёт вопрос; не только вежливое yes.`)};

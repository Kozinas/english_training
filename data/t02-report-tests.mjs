import {exam} from './unit-tools.mjs';
const id='T02-report';
export default [
exam(id,'a',`short~form~The list does not ___ the chosen order. (keep/keeps)~keep~Does not требует base form.
short~form~I have ___ the symptom twice. (observe)~observed~Have + V3, не base.
short~form~After ___ the detail panel, inspect the list. (closing/close)~closing~After как предлог принимает -ing.
short~form~Yesterday I ___ the sorting issue. (reproduced/have reproduced)~reproduced~Законченный момент yesterday с Past Simple.
short~evidence~Two failed trials prove two affected users? yes/no.~no~Попытка и пользователь — разные единицы.
short~expected~An untested older version is confirmed working? yes/no.~no~Проверки нет, а не известен успех.
short~evidence~A workaround automatically confirms a permanent fix? yes/no.~no~Обход и исправление различаются.
short~steps~В полном отчёте starting conditions нужны before или after шагов?~before~Условия задают начало воспроизведения.
text~steps~Новый Cobalt Lists 2.1/build 210, Quartz 7 на StoneOS 4, training account. Guide: выбранная сортировка сохраняется до изменения пользователем. Сначала Name descending; открыть и закрыть detail. В 2 из 3 trials список становится ascending, хотя стрелка всё ещё descending; один trial сохраняет порядок. Сформулируй подготовку и последовательность.~Указать окружение/начальный сортированный список, открыть конкретный detail, закрыть, сравнить порядок и стрелку; не выдумать перезапуск.~Новое условие, не пустой title Mica.
text~expected~Раздели expected и actual Cobalt, включая основание ожидания и исключение.~Guide сохраняет выбранный порядок; в двух trials фактический ascending при descending arrow, в одном порядок сохранён.~Не all trials и не изменение хранимых данных.
text~evidence~Коллега пишет Cobalt corrupts every record. Перепиши вывод по данным задания 9.~Подтверждено несоответствие видимого порядка/индикатора; corruption, все records и причина не установлены.~Не принимать сильную формулировку за наблюдение.
text~writing~Напиши полный Cobalt report на 200–260 слов: title, environment, preparation, steps, expected/actual, frequency, impact, unknown. В отдельной пробе повторный выбор сортировки восстановил видимый порядок; старую версию не проверяли.~Самостоятельный полный отчёт с ограниченным workaround и без выдуманного fix/regression.~Образец другого продукта не готовый ответ.
text~writing~Напиши запрос уточнения Cobalt на 100–140 слов: какие имена/порядок были видны, одинаков ли reset, нужен ли другой environment? Не объявляй эти проверки выполненными.~Конкретные вопросы и граница имеющихся данных.~Вопросы не новые факты отчёта.
speech~interaction~Объясни Cobalt партнёру; он выбирает одну недостающую деталь и задаёт заранее не известный вопрос. Ответь и проверь его пересказ.~Фактический вопрос, адресный ответ или честное unknown.~Чтение обеих ролей не взаимодействие.
speech~steps~Проведи словесное воспроизведение Cobalt. Партнёр меняет один starting condition; выясни, сравним ли результат.~Реальная поправка условий и проверка понимания.~Настоящие пользовательские данные не нужны.
text~listening~Партнёр готовит скрытое устное уточнение Cobalt: build, число trials и наблюдение. Запиши три факта до показа текста.~Реально услышанное с последующей сверкой, неизвестное не угадывать.~Без звука pending, ранее прочитанное text-supported.
text~listening~Партнёр устно исправляет одну деталь предыдущего сообщения. Сохрани первоначальное и уточнённое отдельно.~Действительная поправка и её влияние на отчёт.~Не придуманный обмен и не новая версия ПО сама по себе.
text~form~Исправь Could you explain why does the order changes?~Could you explain why the order changes?~Обычный порядок внутри embedded question, без does.
text~context~Три попытки сделаны в одной учётной записи. Какие границы нужно сохранить в разделе environment/frequency?~Одна account и три trials, не три accounts; другие настройки/системы неизвестны.~Не расширять выборку без свидетельства.
speech~form~Произнеси reproduced / resolved и I have not checked the previous build; партнёр пересказывает, что выполнено и что нет.~Фактическое звучание и понимание отрицания/слов.~Без аудио pronunciation/fluency unknown, ASR не оценка.
text~evidence~Есть screenshot descending arrow над ascending list. Что он показывает, а чего один снимок не подтверждает?~Один видимый mismatch, не весь порядок шагов/частоту/внутреннюю corruption.~Не расширять область evidence.
text~writing~После реального отзыва полностью перепиши отчёт задания 12 в 200–260 словах, сохрани исходник и причины важных правок.~Полный новый текст с точными условиями и неизвестным.~Журнал не заменяет редакцию; без отзыва pending.
text~expected~Команда просит добавить новую сортировку по colour, которой guide не обещает. Это то же expected, что сохранение Name descending?~Нет: новое пожелание функции отдельно от нарушения существующего правила.~Issue может быть enhancement, не обязательно defect.
speech~interaction~Партнёр называет проблему solved после workaround. Уточни смысл и согласуй ограниченный итог без обещания срока.~Реальное различение symptom avoided и verified fix.~Не монолог с выдуманным согласием.
text~writing~Через 7 дней напиши 200–260 слов для другого нового bug case; партнёр проверяет понятность шагов в симуляции.~Новый материал, фактический обмен/отзыв/дата либо pending.~Не переименование Cobalt.
text~evidence~В версии T02 с одной опубликованной подтемой почему 8/8 коротких ответов и заполнение этой подтемы не завершают топик и не подтверждают mastery?~Ещё нужны другие линии T02, ручное качество текста/речи, реальное взаимодействие и отложенный перенос.~Publication partial и знания ученика различны.`),
exam(id,'b',`short~form~The results ___ not match the query. (do/does)~do~Results — множественное число.
short~form~She has ___ the report. (write)~written~Write–wrote–written после has.
short~form~Before ___ the result, record the filter. (checking/check)~checking~Before как предлог с -ing.
short~form~We ___ the old build last Monday. (tested/have tested)~tested~Past Simple с законченным last Monday.
short~evidence~Not reproduced here proves no defect exists anywhere? yes/no.~no~Ограниченная проверка не глобальное отсутствие.
short~expected~The expected behaviour needs a stated basis in this report? yes/no.~yes~Не выдумывать требование из одного желания.
short~evidence~An error message alone confirms its root cause? yes/no.~no~Сообщение — наблюдение, причина требует обоснования.
short~steps~Проверка visible result идёт before или after описанного действия?~after~Нужна связь с выполненным шагом.
text~steps~Новый Amber Mailbox 4.0/build 405, Glass 2 на BayOS 3, training account. Guide: search остаётся активным до clear. Введи plum, Search, открой результат, вернись в список. В 3 из 4 trials видны все сообщения, хотя query field ещё plum; один trial сохраняет фильтр. Сформулируй точные шаги/начальное условие.~Назвать окружение, известные training messages с/без plum, поиск/открытие/возврат, сравнение списка и поля.~Не добавлять reload из старого кейса.
text~expected~Раздели правило Amber и actual, сохранив число попыток.~До clear ожидаются только matches; в трёх trials показаны all при query plum, в одном matches.~Содержимое поля не подтверждает применение фильтра.
text~evidence~Автор пишет Search deletes messages. Что в новом досье поддерживает или не поддерживает эту формулировку?~Видны лишние сообщения, а не установлено удаление; описать несоответствие результата и запроса.~Не приписывать источнику противоположный симптом.
text~writing~Напиши полный Amber report 200–260 слов. Повторный Search восстановил matches в двух отдельных проверках; старый build не тестировали. Включи title/conditions/steps/expected/actual/frequency/impact/limits.~Самостоятельный отчёт по новому досье с временным обходом и неизвестной причиной.~Две проверки workaround не четыре основных trials.
text~writing~Напиши 100–140 слов уточнения: какие сообщения должны соответствовать plum, были ли иные фильтры, что реально проверено?~Вопросы о конкретных условиях, без дописывания ответов за партнёра.~Не считать запрос проверки её выполнением.
speech~interaction~Представь Amber партнёру; он задаёт новый неожиданный вопрос о влиянии проблемы. Уточни границу и проверь пересказ.~Реальная реплика и ответ по известному или unknown.~Без партнёра взаимодействие pending.
speech~steps~Партнёр пересказывает Amber с reload вместо возврата из сообщения. Уточни исходные шаги и попроси повторный пересказ.~Адресное исправление с реальной новой репликой.~Нельзя автоматически смешивать разные способы воспроизведения.
text~listening~Партнёр готовит другое скрытое устное сообщение Amber: environment, частота и ограничение. Запиши детали и вопрос.~Реальное прослушивание нового материала до текста.~Без звука pending, прочитанный текст text-supported.
text~listening~Партнёр устно исправляет частоту или объект. Запиши новый итог и сохрани прежний ответ отдельно.~Фактическая коррекция без выдуманных дополнительных испытаний.~Чтение готового сценария не самостоятельное listening.
text~form~Исправь The query do not changes, but the results is wrong.~The query does not change, but the results are wrong.~Does not + base, plural results are.
text~context~Приложение 4.0/build 405, browser Glass 2, OS BayOS 3. Объясни, почему строка version 2 недостаточна.~Разные версии разных объектов; читатель не поймёт, что именно 2.~Не объединять software layers в одну метку.
speech~form~Произнеси not tested / tested but not reproduced; партнёр различает отсутствие проверки и отрицательный результат проверки.~Фактическое звучание и уточняющий вопрос.~ASR не фонетическая оценка, без аудио unknown.
text~evidence~Коллега предложил попробовать другой browser. Можно ли записать Cross-browser testing passed?~Нет: предложение не выполненный тест, результаты неизвестны.~Не превращать будущее действие в историю.
text~writing~После содержательного реального отзыва перепиши весь Amber report задания 12 в 200–260 словах отдельно от оригинала.~Полная редактура с обоснованными изменениями.~Без отзыва pending, список правок не отчёт.
text~expected~Ученик ожидает поиск с опечатками, но guide обещает только точное совпадение. Как оформить расхождение пожелания и правила?~Отделить enhancement от подтверждённого дефекта, уточнить требование.~Не обещать недокументированное поведение.
speech~interaction~Партнёр хочет приложить полный клиентский лог. Объясни нужные сведения и согласуй вымышленный или очищенный пример.~Реальное обсуждение без передачи личных данных.~Ничего не публиковать во внешнем tracker.
text~writing~Через 7 дней напиши полный отчёт 200–260 слов о другой новой проблеме и обсуди его с партнёром.~Новый независимый кейс, фактический отзыв/дата либо pending.~Не смена имени Amber в старом ответе.
text~evidence~В версии T02 с одной опубликованной подтемой что остаётся непроверенным или неопубликованным после полного заполнения этой части?~Качество открытых ответов/реальной речи/нового переноса; остальные заявленные линии ещё не опубликованы.~Счётчик не сертификация CEFR.`)
];

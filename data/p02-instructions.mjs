import {bank,exam,examples,goal} from './unit-tools.mjs';

export default {
 id:'P02-instructions',topic:'P02',title:'Понятные инструкции, запреты и проверка понимания',prerequisites:['P02-time'],references:['numbers-time'],
 goals:[goal('form','Строить утвердительные и отрицательные инструкции','practice'),goal('sequence','Сохранять порядок, объект и условия действий','reading'),goal('repair','Уточнять непонятное и подтверждать выполнение','production')],
 explanation:[
 {title:'Почему в инструкции нет I или you',text:'В обычном английском предложении подлежащее называют: You are ready. В повелительной конструкции адресат уже понятен: Open the book. Используется начальная форма глагола без to: open, read, write, check. Поэтому не To open the book и не Opens the book. Одна форма подходит одному человеку и группе: Read the note. Это не пропуск слова из обычного повествовательного предложения, а отдельный тип конструкции. You возможен для особого акцента или распределения действий, но начинающему не нужно вставлять его в каждую инструкцию.'},
 {title:'Запрет и осторожность, включая be',text:'Для отрицательной инструкции поставь do not или don’t перед начальной формой: Don’t open the box. Не используй no open или not open как обычную полную английскую инструкцию. Be ведёт себя так же: Be careful; Don’t be late. В утверждении не Are careful, а в запрете не Don’t are late. На табличках можно встретить No entry или No smoking: это другой шаблон, не доказательство, что no заменяет don’t перед любым глаголом. В заданиях работаем с полными повелительными конструкциями. Предупреждение должно назвать конкретную опасность или объект, а не просто звучать строго.'},
 {title:'Вежливость зависит от ситуации',text:'Please может стоять в начале или конце: Please check the time; Check the time, please. Это полезная базовая форма просьбы, но слово please не делает любую команду уместной. Начальнику или незнакомому человеку в спорной ситуации прямой императив может звучать резко. Could you check the time, please? — более мягкая модель просьбы, пока изучаем её как целую конструкцию; модальные глаголы будут разобраны отдельно. В срочном предупреждении Stop! бывает яснее и уместнее длинной просьбы. Оценивай регистр по ситуации и отношению к собеседнику, а не только по наличию please.'},
 {title:'Порядок действий и точный объект',text:'First обозначает начало, then — следующий шаг, next — ещё один переход, finally — последний шаг. Они помогают, но сами по себе не исправляют нелогичную процедуру. First read the note. Then write the code. Finally check the code. У каждого действия должен быть понятный объект: какой файл, какая строка, какая кнопка? Если вокруг несколько документов, Open it двусмысленно. Назови учебный объект полностью. Условие лучше передать явно: If the number is unclear, ask again. Здесь if — готовый шаблон для инструкции; системы условных предложений подробно появятся позднее.'},
 {title:'Слова, которые работают вместе',text:'Read back — повторить прочитанное или услышанное для проверки. Это не «читать спину». Turn on — включить, turn off — выключить; look at — направить взгляд на объект; write down — записать. Учи сочетание вместе с объектом и примером, а не как независимые переводы частей. Для местоимения у write down и turn off нормальная позиция внутри: Write it down; Turn it off. Форма Write down it не подходит. Более полная система фразовых глаголов изучается позже; здесь эти сочетания нужны для реальных учебных обменов. Объяснение значения не заменяет устной практики с партнёром.'},
 {title:'Проверка понимания и безопасный учебный контекст',text:'Собеседник может сказать OK, не поняв второй шаг. Вместо формального согласия попроси повторить важное: Could you read the code back? Или сам уточни: Which file? Do you mean the first line or the last line? На этом этапе инструкции относятся к бумажным макетам, вымышленным карточкам и учебным текстам. Не запускай команды в терминале, не удаляй реальные файлы и не вводи секреты ради задания по английскому. При неизвестном объекте или последствии правильный учебный ход — остановиться и уточнить, а не угадать. Результат проверяют по тому, удалось ли слушателю выполнить именно нужные шаги.'},
 {title:'Что считать освоенным',text:'Нужно самостоятельно построить и утвердительную, и отрицательную инструкцию; сохранить порядок; точно передать число или время; устранить непонимание в диалоге. Поэтому здесь не один набор пропусков: есть исправление ошибок, чтение процедуры, отдельное аудио, написание своей инструкции и роль слушателя. После практики идут два варианта итоговой проверки. Открытые ответы и речь не получают автоматический зачёт по совпадению текста. Через неделю вернись к новым данным и проверь перенос навыка. Если часть не получается, вернись к соответствующему банку; не начинай всё заново ради одинаковой длительности урока.'}
 ],
 examples:examples(`Open the book.~Открой книгу / откройте книгу.~Начальная форма без to и без обязательного you.
Check the date, please.~Проверь дату, пожалуйста.~Объект date точнее, чем неопределённое it.
Please read the first line.~Прочитай первую строку, пожалуйста.~Please может стоять в начале, порядок слов инструкции сохраняется.
Don’t close the page yet.~Пока не закрывай страницу.~Don’t + начальная форма close, не closes.
Do not write a real password.~Не записывай настоящий пароль.~Полная отрицательная форма подходит явному предупреждению.
Be careful with the number.~Будь внимателен с числом.~Повелительная форма be, не are.
Don’t be late.~Не опаздывай.~Отрицательный императив be также использует don’t.
First read the note. Then check the time.~Сначала прочитай записку. Затем проверь время.~Связки показывают порядок, а не количество времени на каждый шаг.
Write it down, please.~Запиши это, пожалуйста.~Местоимение it находится между write и down.
Could you read the code back?~Повтори код для проверки, пожалуйста.~Read back — целостное действие подтверждения.
Turn it off, not on.~Выключи, а не включи.~Различие частицы меняет действие на противоположное.
Which line: the first or the last?~Какую строку: первую или последнюю?~Уточнение конкретного объекта вместо угадывания.
First copy code 0081 onto the practice card. Don’t omit the zeros. Finally read it back.~Сначала перепиши 0081 на учебную карточку. Не пропускай нули. В конце повтори код.~Сложный пример объединяет порядок, запрет, точные данные и проверку.
If the date is unclear, ask before you confirm.~Если дата непонятна, спроси до подтверждения.~Условие остановки защищает смысл договорённости; if здесь дано как готовая модель.`),
 banks:[
 bank('P02-instructions','practice','Форма команды, запрет и порядок слов','practice',`short~form~Выбери Open/Opens/To open: ___ the notebook.~Open~Императив использует начальную форму без to и без -s.
short~form~Выбери Read/Reading: ___ the note, please.~Read~Начальная форма read; reading здесь не полная инструкция.
short~form~Выбери Be/Are: ___ careful.~Be~Повелительная форма глагола be — be.
short~form~Вставь don’t/no: ___ write here.~don't|do not~Перед глагольной инструкцией нужен don’t или do not.
short~form~Вставь be/are: Don’t ___ late.~be~После don’t остаётся начальная форма be.
sentence~form~Исправь целиком: Opens the folder, please.~Open the folder, please.~Инструкция начинается с open без -s.
sentence~form~Исправь целиком: No close the book.~Don't close the book.|Do not close the book.~No не заменяет don’t перед обычным глаголом команды.
sentence~form~Собери: please / number / check / the~Please check the number.|Check the number, please.~Please допускается в начале или конце; check перед объектом.
sentence~form~Замени the code на it: Write the code down.~Write it down.~Местоимение it ставится внутри разделяемого сочетания.
sentence~form~Замени the lamp на it: Turn the lamp off.~Turn it off.~Turn off с местоимением разделяется: turn it off.
short~sequence~Какой маркер обычно вводит последний шаг: first или finally?~finally~Finally — в конце последовательности, first — в начале.
short~sequence~Какой маркер из first/then вводит самый первый шаг?~first~First задаёт начало процедуры.
text~sequence~Сделай логичный порядок: проверить запись, услышать код, записать код. Напиши 3 инструкции по-английски.~First listen to the code. Then write it down. Finally check it.~Проверка следует за записью, запись за получением данных.
text~repair~Инструкция Open it дана рядом с двумя учебными папками. Что спросить?~Which folder should I open?~Назван источник неоднозначности; What do you mean? допустимо, но менее конкретно.
text~repair~Сделай просьбу Check this date мягче для незнакомого собеседника.~Could you check this date, please?~Смысл сохранён, модель просьбы уместна; не утверждать, что прямой императив всегда груб.
text~form~Почему No smoking не доказывает правильность No open the file?~No smoking is a sign pattern; a normal negative command is Don’t open the file.~Различены шаблон таблички и глагольная инструкция; объяснить можно по-русски.`),
 bank('P02-instructions','reading','Чтение: подготовка бумажной карточки','reading',`short~sequence~What colour is the practice card? Одно слово.~blue~В процедуре нужна blue card, не white card.
short~sequence~What is the first action: read, write or fold?~read~Сначала прочитать записку; fold — сложить — здесь запрещено.
short~sequence~Copy the full four-digit practice code.~0064~Оба начальных нуля входят в код.
short~sequence~Which time should be written, in HH:MM?~10:35~Актуальное время 10:35, а 10:05 зачёркнуто.
short~sequence~Which day name appears in the final note?~Friday~Дан Friday без конкретной календарной даты.
short~form~Which verb follows Don’t in “Don’t fold the card”?~fold~После don’t используется начальная форма fold.
short~sequence~Who checks the card after the writer?~Sam~Sam указан как человек, которому надо прочитать карточку.
short~form~Заполни по тексту: ___ the zeros.~Keep~Keep — сохранить; инструкция защищает начальные нули.
text~repair~Что нужно сделать, если исходный код плохо виден?~Ask Jo to repeat it before you write it.~Уточнение должно предшествовать записи, а не следовать после угадывания.
text~sequence~Напиши порядок действий в 3–5 английских предложениях.~Read the note. Copy the code and final time onto the blue card. Read them back to Sam. Check the card before you put it on the desk.~Сохранены ключевые зависимости; не добавлено складывание или работа с реальными файлами.
text~repair~Почему одинаковое OK от Sam недостаточно, если он не повторил код?~He may not have checked all four digits. Ask him to read the code back.~Различено формальное согласие и проверяемое подтверждение.
text~sequence~Какие данные о Friday отсутствуют для реальной встречи? Напиши вопрос.~What is the date, and which time zone should we use?~Календарная дата и пояс не даны; не выдумывать их из учебной карточки.`,
 `Practice task: make a paper reminder. A reminder is a note that helps you remember something. Use paper only; do not open a terminal or a real work document.
First read Jo’s note. It says: “Friday, 10:35. Practice code 0064.” An earlier time, 10:05, has a line through it. That earlier time is no longer correct. The note does not give a calendar date or a time zone.
Next take the blue card, not the white card. Write the code and the final time on it. Keep the zeros. Don’t fold the card: fold means bend the paper into two parts. If the code is unclear, ask Jo to repeat it before you write it.
Then read the code and time back to Sam. Ask Sam to repeat them. Check every digit together. Finally put the card on the practice desk. Do not put it in the real work calendar. This is a language exercise, not a meeting invitation. Before arranging a real meeting, ask for the missing date and time zone.`),
 bank('P02-instructions','listening','Аудирование: инструкция на учебном экране','listening',`short~sequence~What colour is the box to look at?~green~В аудио green box, не blue box.
short~sequence~Which line should be read: first or last?~last~Последняя строка указана явно.
short~sequence~Запиши учебный код полностью.~0182~Zero one eight two: начальный нуль сохраняется.
short~sequence~Запиши услышанное время как HH:MM, без пояса.~11:45~Quarter to twelve in the morning — 11:45.
short~form~What should not be clicked: a link or a letter?~a link|link~Запрещено нажимать ссылку, чтобы задача оставалась бумажной/устной практикой.
short~sequence~Who should hear the code repeated?~Mia~Нужно повторить код Mia.
short~sequence~What should be used for the answer: paper or a real account?~paper~Ответ на бумаге; никаких реальных аккаунтов.
text~repair~Что делать, если неясно, какая строка последняя?~Ask which line before you continue.~Не угадывать и не продолжать по неверной строке.
text~sequence~Передай две последовательные команды из аудио своими словами.~Read the last line. Then write the code on paper.~Нужно сохранить порядок и учебный объект; варианты формулировки принимаются.
text~repair~Сформулируй просьбу к Mia подтвердить код и время.~Could you check code 0182 and the time, 11:45 UTC?~Обе записи точны, есть осмысленное подтверждение вместо одного OK.`,
 `This is a picture of a practice screen, not a real account. First look at the green box. Read the last line. The code is zero one eight two. Write it on paper. Don’t click any link. Next write the time: a quarter to twelve in the morning, UTC. Then read the code and time back to Mia. Ask her to confirm both. If you are not sure which line is the last one, ask before you continue. Finally check your paper, not a real work account.`),
 bank('P02-instructions','production','Свои инструкции и живой обмен репликами','writing',`text~form~Напиши три разные положительные инструкции с read, check и write. Укажи объект каждой.~Read the note. Check the date. Write the code.~Все глаголы в начальной форме, объекты понятны; не просто список глаголов.
text~form~Напиши три разных запрета с open, close и be; последняя фраза про опоздание.~Don’t open the box. Don’t close the book. Don’t be late.~Don’t + base form, включая be; do not также допустимо.
text~sequence~Напиши четыре шага подготовки бумажного бейджа для вымышленного Pat, код 0032.~First take a blank card. Then write Pat. Next add code 0032. Finally check the name and code.~Порядок разумен, начальные нули сохранены; реальные личные данные не нужны.
text~repair~Преврати резкую команду Send it now в уточняющую вежливую просьбу для учебного письма, указав объект.~Could you send the practice note, please?~Ясный объект и подходящий регистр; не выполнять реальную отправку сообщения.
text~sequence~Напиши процедуру из 5–7 предложений для проверки времени на вымышленном приглашении. Включи два запрета и точку уточнения.~Read the practice invitation. Check the date. Don’t guess the time zone. Ask if it is missing. Don’t use the old time. Finally read the new details back.~Есть логическая последовательность, два осмысленных запрета и условие остановки, не лишние команды ради количества.
text~form~Объясни, где стоят it в write down и turn off; дай два новых примера.~Write it down. Turn it off. The pronoun goes between the verb and the particle.~Даны корректные сочетания и понятное правило именно для этих разделяемых конструкций.
speech~sequence~Продиктуй партнёру три шага: взять бумагу, записать код 0073, прочитать его обратно. Он выполняет на бумаге.~Take a sheet of paper. Write code zero zero seven three. Read it back, please.~Оценивается точность услышанной процедуры и кода, не скорость выполнения.
speech~repair~Партнёр спрашивает “The first line?”. Тебе нужна последняя. Исправь и попроси повторить.~No, the last line, please. Could you read it back?~Уточнение меняет конкретный объект и проверяется ответом партнёра.
speech~form~Скажи Be careful и Don’t be late в двух разных учебных ситуациях. Партнёр объясняет, что нужно сделать.~Be careful with the code. Don’t be late for the practice call.~Форма be сохраняется, слушатель понимает действие/предупреждение.
speech~repair~Партнёр даёт двусмысленное “Open it”. Уточни объект и подтвердите его оба; ничего реального не открывай.~Which practice folder? / The blue one. / The blue practice folder, right?~Нужна цепочка уточнения с ответом, не одиночная фраза; всё на макете.
speech~sequence~Попроси партнёра предложить одну нелогичную перестановку твоей процедуры. Объясни, почему порядок важен.~Please read the code before you write it. Otherwise you do not know the digits.~Обоснована конкретная зависимость; на начальном уровне можно объяснить по-русски после английских команд.
text~repair~Запиши результат ролевой практики: какая инструкция была непонятной и как ты её изменил; без партнёра отметь «не проверено».~Open it was unclear. I changed it to Open the blue practice folder. The listener has not checked the new version yet.~Сохраняется реальная история, не придуманное свидетельство успешного понимания.`),
 bank('P02-instructions','review','Перенос на новые данные и смешанное повторение','review',`sentence~form~Исправь полностью: To check the last page, please. Требуется команда, не цель действия.~Check the last page, please.~Инструкция начинается с check без to; Please в начале тоже допустимо по смыслу, но здесь исправляется данная строка.
sentence~form~Исправь полностью: Don’t are noisy.~Don't be noisy.|Do not be noisy.~После don’t используется be, не are.
sentence~form~Замени the number на it: Write down the number.~Write it down.~Местоимение вставляется между глаголом и частицей.
short~sequence~Какой шаг из пары должен идти первым: confirm the date / ask for the date? Введи целую фразу.~ask for the date~Неизвестную дату сначала выясняют, затем подтверждают.
text~sequence~Перепиши спутанные шаги “Finally read; first check; then write” в логичную процедуру копирования нового кода.~First read the code. Then write it down. Finally check the copy.~Порядок выводится из задачи копирования, не из случайных наречий.
text~repair~Напиши уточнение для инструкции “Use the old one”, если есть два старых учебных макета.~Which old practice copy do you mean?~Неясный объект назван как проблема, нет догадки о нужном экземпляре.
text~sequence~Составь три команды с числами: code 0041, 19 pages, time 08:50 UTC. Добавь один запрет.~Write code 0041. Check the nineteen pages. Confirm 08:50 UTC. Don’t drop the zeros.~Три значения сохранены, запрет осмысленный; формулировки свободные.
speech~repair~Попроси партнёра нарочно перепутать turn on / turn off на бумажном макете. Исправь направление действия.~Turn it off, please, not on.~Конкретно исправлена частица; реальные устройства менять не нужно.
text~form~Сравни Stop! и Could you stop, please? Назови контекст, где каждая фраза уместна.~Stop! can fit an urgent warning. Could you stop, please? can fit a polite request in a calm situation.~Императив не объявляется всегда грубым; оценка зависит от ситуации.
text~sequence~Подготовь новое задание для повторения через неделю: процедура, число с нулём и отдельное уточнение. Не отмечай его уже пройденным.~Copy code 0602 onto the paper card. Check the zero. Which card should I use?~Новые данные и проверяемое действие; отложенная попытка должна состояться позднее, а не считаться выполненной сейчас.`)
 ],
 tests:[exam('P02-instructions','a',`short~form~Выбери Keep/Keeps/To keep: ___ the final version.~Keep~Начальная форма keep без -s и to.
short~form~Вставь отрицание перед touch в полной команде: ___ touch the red card.~don't|do not~Don’t + начальная форма; no здесь не подходит.
short~form~Выбери be/is: Don’t ___ afraid to ask.~be~Be остаётся в начальной форме после don’t.
sentence~form~Замени the display на it: Turn off the display.~Turn it off.~Местоимение it ставится между turn и off.
sentence~form~Собери в инструкцию: please / your / name / spell~Please spell your name.|Spell your name, please.~Глагол spell перед объектом; please допускается с обоих краёв.
short~sequence~Процедура: First read. Then copy. Finally compare. Какой глагол обозначает второй шаг?~copy~Then вводит второй шаг, copy следует после read.
short~sequence~В инструкции “Use code 0095, not 0950” какой код нужен?~0095~Сохранить порядок и оба начальных нуля; второй код явно отвергнут.
short~sequence~“Use quarter to three in the afternoon, UTC.” Запиши время HH:MM.~14:45~До 15:00 остаётся четверть часа; не 15:45.
text~repair~Тебе сказали “Check that one”, но объектов два. Напиши конкретный вопрос и последующее подтверждение на вымышленных данных.~Which practice card? The green card, right?~Уточнение объекта предшествует подтверждению; не угадывается выбор без ответа.
text~sequence~Напиши 5–7 предложений инструкции для бумажного списка: имя Kim, код 0027, 16 items. Включи запрет и проверку с партнёром.~Take a blank sheet. Write Kim. Add code 0027. Write sixteen items. Don’t omit the zeros. Read the details back to your partner.~Данные точны, порядок выполним, запрет осмысленный, подтверждение проверяемое; новые формулировки принимаются.
speech~repair~Дай партнёру инструкцию использовать последнюю, не первую строку учебного листа; он переспрашивает. Уточни и проверь понимание.~Use the last line, please, not the first. Could you repeat which line?~Нужна слышимая связная реплика и ответ партнёра; без аудио произношение неизвестно.
text~form~Исправь “No be late” и объясни, почему be не заменяется на are.~Don’t be late. The negative imperative uses don’t plus the base form be.~Указаны отрицательный императив и начальная форма; русский разбор допустим.`),
 exam('P02-instructions','b',`short~form~Выбери Put/Puts/To put: ___ the card here.~Put~Для команды нужна начальная форма put без to.
short~form~Вставь отрицание перед move: ___ move the white card.~don't|do not~Don’t или do not создаёт отрицательную команду.
short~form~Выбери be/are: Please ___ patient.~be~Повелительная форма be не зависит от числа адресатов.
sentence~form~Замени the code на it: Read back the code.~Read it back.~Местоимение it располагается перед back.
sentence~form~Собери в инструкцию: please / last / the / line / read~Please read the last line.|Read the last line, please.~Порядок verb + object; please в начале или конце.
short~sequence~Процедура: First listen. Next write. Finally confirm. Какой глагол обозначает последний шаг?~confirm~Finally вводит подтверждение после получения и записи данных.
short~sequence~В инструкции “Copy 0076, not 0760” какой код нужен?~0076~Оба начальных нуля остаются в начале, не переносятся в конец.
short~sequence~“Use quarter past four in the afternoon, UTC.” Запиши время HH:MM.~16:15~Четверть часа после 16:00; afternoon задаёт половину суток.
text~repair~Инструкция “Read the next one” дана возле двух колонок. Напиши вопрос и условное подтверждение после ответа партнёра.~Which column do you mean? The left column, right?~Вопрос конкретизирует источник неоднозначности; подтверждение зависит от ответа, а не от догадки.
text~sequence~Напиши 5–7 предложений инструкции для бумажного списка: имя Jo, код 0049, 18 items. Включи запрет и сверку с партнёром.~Take a blank sheet. Write Jo. Add code 0049. Write eighteen items. Don’t change the digits. Ask your partner to read them back.~Сохранены данные и порядок, есть осмысленное ограничение и проверяемая сверка.
speech~repair~Попроси партнёра записать код на синей, не белой учебной карточке. Ответь на его уточнение и попроси повторить выбор.~Use the blue card, not the white one. Could you confirm the colour?~Реальное взаимодействие с ясным различием объектов; текстовый ответ не подтверждает речь.
text~form~Исправь “Not open the notebook” как обычный запрет и объясни форму глагола.~Don’t open the notebook. Open stays in its base form after don’t.~Отрицание оформлено через don’t/do not; правила табличек не подменяют глагольную команду.`)]
};

import {bank,exam,examples,goal} from './unit-tools.mjs';

export default {
 id:'P02-numbers',topic:'P02',title:'Количество, числовая запись и точная передача цифр',prerequisites:['P01-introductions'],references:['numbers-time','sounds'],
 goals:[goal('quantity','Строить и понимать количественные числительные','practice'),goal('notation','Сохранять значение дробей, разрядов и кодов','reading'),goal('clarify','Уточнять числа и передавать их собеседнику','production')],
 explanation:[
 {title:'Количество или идентификатор?',text:'Число может отвечать на вопрос «сколько?» либо обозначать код. Fourteen files — четырнадцать файлов, а room fourteen — комната с номером 14. В коде 014 начальный нуль нельзя потерять: zero one four. В количестве 014 обычно означает столько же, сколько 14, но в идентификаторе это не гарантируется. Сначала определи задачу сообщения: считаем объекты, называем номер или диктуем точную последовательность знаков. При сомнении спроси Is that a number or a code? Для практики используй только вымышленные данные, никогда не диктуй реальные пароли.'},
 {title:'Как из небольшого набора получается большой',text:'Формы 0–12 запоминаются как основы. У 13–19 общее окончание -teen, но написание меняется: thirteen, fifteen, eighteen. Десятки имеют -ty: twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety. В приложении есть вся карта, а не только три образца. Для 21–99 соединяй десяток и единицу дефисом: forty-two, seventy-nine. Порядок как в русском: сначала десятки, затем единицы. Forty пишется без u; eighteen и eighty — с одним t в месте соединения, не eigthteen. Дефис относится к письменной форме, а не произносится как отдельное слово.'},
 {title:'Сотни, тысячи и масштаб',text:'Сотни строятся как two hundred, seven hundred. После точного числительного hundred, thousand, million, billion не получают -s: three hundred files. Для неопределённого большого количества есть hundreds of files — сотни файлов. В UK между сотнями и остатком обычно and: one hundred and six; в US one hundred six также нормативно. В современном обычном употреблении billion — 1,000,000,000, миллиард, не миллион. В очень длинном числе читай по разрядным группам. Сейчас достаточно надёжно применять этот принцип; изучение единиц хранения, степеней и технических сокращений продолжится в технических топиках.'},
 {title:'Точка, запятая и нули меняют смысл',text:'В английской записи 1.5 — one point five, то есть полтора, а 15 — fifteen. После point обычно называются отдельные цифры: 2.04 — two point zero four. Нуль после точки нельзя выбрасывать: 2.04 и 2.4 различаются. Запятая часто разделяет тысячи: 1,500 — one thousand five hundred. В других языковых и программных настройках соглашения отличаются; если формат источника неизвестен, уточни его, а не заменяй знак по привычке. Когда автоматическое задание требует число, сохраняй указанный формат. Если нужны слова, напиши слова. Автопроверка ограничена явно заданными ответами, а свободные сообщения оцениваются по смыслу.'},
 {title:'Слуховой контраст teen / ty',text:'Thirteen /ˌθɜːˈtiːn/ и thirty /ˈθɜːti/ различаются не только ударением, но и окончанием: в thirteen есть /n/. Аналогично fifteen/fifty, sixteen/sixty и другие пары. В изолированной форме -teen обычно получает главное ударение, однако ритм меняется в сочетании с существительным. Поэтому правило «всегда слушай только ударный слог» ненадёжно. Слушай весь конец слова и контекст. Если ошибка будет важной, переспроси: Thirteen or thirty? One three or three zero? Повтори подтверждённое число вместе с единицей: Thirty files. Is that right?'},
 {title:'От узнавания к самостоятельному сообщению',text:'Чтение числа в таблице ещё не означает, что ты передашь его по телефону. Сначала восстанови слова и цифры без подсказки, затем прочитай связный отчёт, извлеки данные из отдельного аудио и составь свой отчёт. В устной паре слушатель должен записать числа, не видя твоего листа. Ошибка распознавания браузера не доказывает ошибку произношения. При проверке отмечай конкретную потерю: перепутаны 16/60, исчез нуль, неверна единица, не запрошено уточнение. Исправляй механизм и делай новую попытку с другими числами; скорость не является условием завершения.'}
 ],
 examples:examples(`Seven files; file seven.~Семь файлов; файл номер семь.~В первом случае количество, во втором идентификатор.
Code 007: zero zero seven.~Код 007.~Начальные нули сохраняются, в отличие от обычного количества.
Fourteen, forty, forty-four.~14, 40, 44.~Различай -teen и -ty; forty без u.
Eighteen folders and eighty files.~18 папок и 80 файлов.~Окончание и /n/ меняют число, а не только акцент.
Twenty-six pages.~Двадцать шесть страниц.~Десятки и единицы соединены дефисом на письме.
Three hundred items.~Триста элементов.~После three форма hundred без -s.
Hundreds of items.~Сотни элементов.~Нет точного числа: множественное hundreds и of.
Two hundred and nine; two hundred nine.~209, UK- и US-варианты.~Отсутствие and в US не является ошибкой.
One thousand five hundred: 1,500.~Полторы тысячи.~Запятая здесь группирует разряды, не обозначает дробь.
One point zero five: 1.05.~Одна целая пять сотых.~Цифры после point читаются по отдельности.
Zero point five, not five.~Ноль целых пять десятых, не пять.~Потеря точки меняет величину в десять раз.
Do you mean fifteen or fifty?~Вы имеете в виду 15 или 50?~Уточняем два вероятных значения, не соглашаемся наугад.
Fifty: five zero. Is that right?~Пятьдесят: пять-ноль. Верно?~Повтор цифрами уменьшает риск ошибки связи.
There are 1,030 records; the test code is 0013.~1030 записей; тестовый код 0013.~В одном сообщении разрядное число и код читаются по-разному.`),
 banks:[
 bank('P02-numbers','practice','Построение чисел и разбор ошибок','practice',`short~quantity~Напиши 12 английским словом.~twelve~Twelve — особая основа; не twoteen.
short~quantity~Напиши 15 английским словом.~fifteen~Основа fif-, не five- перед -teen.
short~quantity~Напиши 18 английским словом.~eighteen~Eighteen: сохраняется gh, но не добавляется лишнее t.
short~quantity~Напиши 40 английским словом.~forty~В forty нет u, хотя в four оно есть.
short~quantity~Напиши 57 словами с дефисом.~fifty-seven~Десяток fifty, затем единица seven.
short~quantity~Напиши 92 словами с дефисом.~ninety-two~Ninety + two; порядок десяток → единица.
short~quantity~Запиши eighty-six цифрами.~86~Eighty означает 80, six добавляет 6.
short~quantity~Запиши nineteen цифрами.~19~Окончание -teen, не -ty; это не 90.
short~quantity~Напиши 300 словами.~three hundred~После точного three слово hundred не получает -s.
short~quantity~Напиши 108 словами в UK или US форме.~one hundred and eight|one hundred eight|a hundred and eight|a hundred eight~And обычно употребляется в UK, в US его можно опустить.
short~quantity~Исправь только ошибочное слово: two thousands pages.~thousand~После точного числа thousand остаётся в единственном числе.
short~quantity~Выбери hundred/hundreds: ___ of users.~hundreds~Неопределённое множество: hundreds of, без точного числа перед ним.
short~notation~Запиши one point seven цифрами с английским разделителем.~1.7~Point обозначает десятичную точку; 17 — другое число.
short~notation~Запиши zero point zero six цифрами, сохранив оба нуля.~0.06~Оба нуля нужны для заданной записи шести сотых.
short~notation~Запиши two thousand thirty цифрами без разделителя тысяч.~2030~Две тысячи плюс тридцать, не 2300.
short~notation~Восстанови четырёхзначный код: zero four zero nine.~0409~Код хранит все позиции, включая первый нуль.
short~notation~Запиши 3.08 словами; для 0 используй zero.~three point zero eight~Нуль после точки нельзя опустить или прочитать как eighty.
short~notation~One billion: сколько нулей после единицы в обычном современном значении?~9|nine~Billion = 1,000,000,000; не путать с million.
text~clarify~Ты услышал sixteen или sixty файлов. Напиши вопрос и способ подтвердить цифры.~Sixteen or sixty? One six or six zero?~Уточнены оба значения, затем разница выражена последовательностями цифр.
text~notation~Почему code 0021 нельзя молча сократить до 21? Объясни и продиктуй его.~It is a code: zero zero two one. The zeros may matter.~Сохранены начальные нули; объяснение может быть на русском.`),
 bank('P02-numbers','reading','Чтение: список оборудования и исправление отчёта','reading',`short~quantity~How many laptops are in the room? Ответ цифрами.~14~Количество laptops в первом абзаце: fourteen.
short~quantity~How many mice are on the shelf? Ответ цифрами.~40~Forty mice, не fourteen; mice — множественное mouse.
short~quantity~How many boxes contain cables?~3|three~Три коробки, а не тридцать коробок.
short~quantity~How many cables are in all three boxes together?~30|thirty~Каждая из трёх коробок содержит десять кабелей: всего тридцать.
short~notation~Write the blue cable length as a decimal number, without the unit.~1.5~Полтора метра записываются 1.5, не 15.
short~notation~Write the grey cable length as a decimal number, without the unit.~0.75~Серый кабель длиной zero point seven five.
short~notation~Copy the full cabinet code.~0048~В записи кода нужно сохранить оба начальных нуля.
short~notation~Copy the corrected record count as digits without a grouping comma.~1050~One thousand and fifty — 1050; исправлено старое 1500.
short~quantity~How many spare keyboards are there?~12|twelve~Twelve spare keyboards указаны во втором абзаце.
text~clarify~Напиши одно предложение, исправляющее запись 1,500 records по тексту.~The correct number is 1,050 records, not 1,500.~Смысл противопоставления точен: 1050 вместо 1500; допустимо написать словами.
text~notation~Объясни, почему четыре цифры кода не говорят о количестве шкафов.~0048 is a cabinet code, not a count of cabinets.~Различены идентификатор и измеряемое количество.
text~clarify~Составь короткое сообщение коллеге: число ноутбуков, длина синего кабеля и уточнение кода.~There are fourteen laptops. The blue cable is 1.5 metres long. Is the cabinet code zero zero four eight?~Все три факта переданы без потери цифр и единицы; не требовать совпадения с образцом.`,
 `Equipment check — practice room, not a real inventory.
There are fourteen laptops on the desks and forty mice on the shelf. A mouse is a small device for a computer; mice is the plural here. There are three boxes of cables. Each box contains ten cables, so the total is thirty cables. The boxes are not computer files.
There are twelve spare keyboards. Spare means extra, for later use. The blue cable is one point five metres long. The grey cable is zero point seven five metres long. The cabinet code is 0048. It is an example code, not a password for a real cabinet.
The first report says 1,500 records. Jo checks it and sends a correction: “The correct number is one thousand and fifty records: one zero five zero. Please keep the zero in the hundreds position.” Kim reads the number back. Both people confirm the correction before the report is shared.`),
 bank('P02-numbers','listening','Аудирование: заказ для учебной комнаты','listening',`short~quantity~How many chairs are needed? Введи цифры.~16~В аудио явно исправлено sixty на sixteen.
short~quantity~How many tables are needed?~6|six~Six tables; это другая категория предметов.
short~quantity~How many notebooks are needed?~60|sixty~Notebooks — sixty, а chairs — sixteen.
short~notation~Запиши код заказа полностью.~0316~Zero three one six; начальный нуль значим.
short~notation~Запиши длину кабеля числом без единицы.~2.05~Two point zero five, не two point five.
short~quantity~How many boxes are needed?~4|four~Four boxes названы отдельно от числа предметов.
short~notation~Запиши номер комнаты цифрами.~208~Two hundred and eight, US без and допустимо.
text~clarify~Какая пара чисел вызвала уточнение и как её прояснили?~Sixteen and sixty; they repeated one six.~Нужно назвать неоднозначность chairs и переданные цифры, не другую пару.
text~notation~Составь английское предложение о кабеле, сохранив единицу.~The cable is 2.05 metres long.~Важны 2.05 и metres/meters; варианты формулировки принимаются.
text~clarify~Напиши ответное подтверждение заказа с числом стульев, блокнотов и кодом.~Sixteen chairs, sixty notebooks, order zero three one six. Is that correct?~Три факта точны, есть проверка понимания, число столов добавлять необязательно.`,
 `Hello, this is Mia. Our practice room needs sixteen chairs. Yes, sixteen, not sixty: one six. We also need six tables and sixty notebooks. The notebooks are for the learners. The order code is zero three one six. Please keep the first zero. We need one cable, two point zero five metres long, and four empty boxes. The room number is two hundred and eight. Please read the chair count and the order code back to me. Thank you.`),
 bank('P02-numbers','production','Письмо и устная передача данных','writing',`text~quantity~Напиши опись: 23 books, 8 pens, 100 sheets. Используй числа словами и три полных предложения.~There are twenty-three books. There are eight pens. There are one hundred sheets.~Количество и категория сохранены; There are дано как модель, конструкция подробно будет позже.
text~notation~Напиши записку: учебный код 0006, масса 1.04 kg. Различи код и измерение; слова kilogram/kilograms даны.~The example code is 0006. The mass is 1.04 kilograms.~Сохранены все нули, точка и единица; не требовать слов mass или exact как единственного решения.
text~clarify~Ответь на “We need ninety copies, right?”, если нужно 19. Напиши мягкое исправление и цифры словами.~Sorry, nineteen copies: one nine, not nine zero.~Исправление не меняет предмет; teen/ty объяснено через цифры.
text~quantity~Создай связное сообщение из 4–5 предложений о вымышленном наборе вещей: количество, запас, код и одно исправление.~Our set has twenty cards. There are five spare cards. The code is 0082. It is twenty cards, not twelve.~Числа согласованы внутри текста, есть все четыре функции сообщения; свои числа обязательны.
speech~clarify~Продиктуй партнёру 17 и 70 в случайном порядке. Он записывает; затем сверяйте.~Seventeen; seventy. One seven; seven zero.~Нужен реально услышанный контраст; текстовый транскрипт не заменяет прослушивание.
speech~clarify~Продиктуй 18 и 80 с существительным pages. Партнёр повторяет оба количества.~Eighteen pages; eighty pages.~Сохранены окончание и разница количества; ритм допустимо варьировать.
speech~notation~Не показывая запись, продиктуй код 0205 и число 205 как количество. Попроси слушателя различить их.~Code zero two zero five; two hundred and five items.~Слушатель восстановил четыре цифры кода и отдельное количество.
speech~notation~Продиктуй 0.5, 0.05 и 5.0 как точные десятичные записи. Проверь запись слушателя.~Zero point five; zero point zero five; five point zero.~Здесь передаётся запись, поэтому конечный нуль в 5.0 также сохраняется.
speech~clarify~Партнёр намеренно переспрашивает “Fifty?”. Тебе нужно 15. Исправь и дождись правильного повторения.~No, fifteen. One five. Could you read that back?~Есть обмен репликами и проверенное исправление, не один заученный монолог.
text~clarify~После диктовки запиши два конкретных расхождения и новые примеры для повторения; если проверки ещё не было, честно отметь это.~The listener wrote 70 for 17. I will practise 16/60 next. Audio has not been checked yet for the second pair.~Не выдумывать результаты; при отсутствии слушателя указать, какие данные ещё нужны.`),
 bank('P02-numbers','review','Смешанное повторение: новая опись и запись','review',`short~quantity~Напиши 64 словами.~sixty-four~Sixty — десяток, four — единица; используем дефис.
short~quantity~Напиши 81 словами.~eighty-one~Eighty заканчивается на -ty; единица one добавляется через дефис.
short~quantity~Восстанови число: seven hundred and two. Цифры без запятых.~702~Между семью сотнями и двумя нет десятков.
short~notation~Восстанови код: nine zero zero two.~9002~Каждый нуль занимает отдельную позицию.
short~notation~Запиши six point zero three цифрами.~6.03~Не 6.3 и не 603: точка и нуль значимы.
short~quantity~Исправь two hundredS: введи правильное последнее слово.~hundred~Точное число two исключает множественное -s у hundred.
text~notation~В английской таблице стоят 2,400 и 2.400. Объясни обычное различие и когда надо уточнить формат.~Usually 2,400 is two thousand four hundred; 2.400 is a decimal. Check the source locale if it is unknown.~Обычные соглашения не объявляются универсальными для любых систем.
text~quantity~Напиши одним предложением: 46 учебных файлов, не 64. Числа словами.~There are forty-six practice files, not sixty-four.~Правильный порядок десятков и единиц; смысл исправления сохранён.
text~clarify~Собеседник повторил 110 вместо 101. Напиши исправление словами и затем по цифрам.~One hundred and one: one zero one, not one one zero.~Исправление сохраняет средний нуль и различает два количества.
speech~clarify~Снова передай по памяти три трудных числа из этой подтемы. Слушатель записывает без просмотра экрана.~Например: fifteen, fifty, one hundred and five.~Проверяющий фиксирует реальные числа и услышанные различия; не засчитывать чтение транскрипта.
text~notation~Напиши пример, где одинаковые цифры 012 обозначают код и количество. Объясни, что сохранится при переписывании.~Code 012 stays 012. A count of 012 items normally means twelve items.~Код сохраняется посимвольно; обычное количество передаётся величиной.
text~clarify~Составь две новые реплики для возвращения к теме через 7 дней: число с нулём и уточнение teen/ty.~The code is 0704. Do you mean fourteen or forty?~Это подготовка новой проверки, а не утверждение, что отложенная проверка уже пройдена.`)
 ],
 tests:[exam('P02-numbers','a',`short~quantity~Запиши 16 словами.~sixteen~Six + teen: sixteen, не sixty.
short~quantity~Запиши 83 словами с дефисом.~eighty-three~Eighty + three: сначала десяток, затем единица.
short~quantity~Запиши 400 словами.~four hundred~После точного four нет -s у hundred.
short~quantity~Переведи seventy-two в цифры.~72~Seventy — семьдесят, two — два.
short~quantity~Вставь hundred/hundreds: five ___ tickets.~hundred~Точное количество требует формы hundred без -s.
short~notation~Введи цифрами four point zero nine.~4.09~Нуль после точки задаёт сотые, не десятые.
short~notation~Введи цифрами zero point eight с нулём до точки.~0.8~Это меньше единицы; 8 — другое число.
short~notation~Восстанови код zero seven one zero.~0710~Сохраняются первый и последний нули.
short~notation~Запиши one thousand two hundred цифрами без разделителя тысяч.~1200~Тысяча и две сотни дают 1200.
short~quantity~Исправь написание fourty: введи правильную форму.~forty~У forty нет буквы u.
text~clarify~Ты записал 80, но коллега поправляет на 18. Напиши исправленное подтверждение, включая цифры словами.~Eighteen, one eight, not eight zero. Is that right?~Точно исправлено направление 80 → 18; есть подтверждение.
text~notation~Напиши 4–6 предложений по данным: 31 notebooks, code 0059, cable 1.09 metres. Добавь запрос подтверждения одного числа.~There are thirty-one notebooks. The code is 0059. The cable is 1.09 metres long. Is that thirty-one notebooks?~Все данные точны, есть полные связанные предложения и осмысленное уточнение; текст проверяется человеком.
speech~clarify~Передай слушателю 14, 40 и 0.14 в непредсказуемом порядке. Проверь его запись и исправь расхождения.~Fourteen; forty; zero point one four.~Нужна слуховая разборчивость, точная запись и реальное подтверждение; ASR similarity недостаточно.
text~quantity~Объясни различие между two hundred items и hundreds of items, придумав новый пример.~Two hundred is exact; hundreds of is approximate. There are six hundred pages, but hundreds of readers.~Различены точность, -s и of; свой пример не копирует исходную пару.`),
 exam('P02-numbers','b',`short~quantity~Запиши 17 словами.~seventeen~Seventeen — семнадцать; seventy — семьдесят.
short~quantity~Запиши 96 словами с дефисом.~ninety-six~Ninety + six; не nineteen six.
short~quantity~Запиши 600 словами.~six hundred~Hundred не получает -s после six.
short~quantity~Переведи fifty-eight в цифры.~58~Fifty — пятьдесят, eight — восемь.
short~quantity~Вставь thousand/thousands: ___ of visitors.~thousands~Без точного числа употребляется thousands of.
short~notation~Введи цифрами seven point zero two.~7.02~Zero после point сохраняется: это две сотых.
short~notation~Введи цифрами zero point three с нулём до точки.~0.3~Ноль целых три десятых, не три.
short~notation~Восстанови код zero zero six eight.~0068~Два первых нуля занимают две позиции.
short~notation~Запиши two thousand four hundred цифрами без разделителя тысяч.~2400~Две тысячи плюс четыре сотни.
short~quantity~Исправь написание fiveteen: введи правильную форму.~fifteen~Перед -teen основа five меняется на fif-.
text~clarify~Ты записал 90, а нужно 19. Напиши подтверждение с раздельным называнием цифр.~Nineteen, one nine, not nine zero. Is that correct?~Направление исправления 90 → 19 и обе последовательности точны.
text~notation~Напиши 4–6 предложений по данным: 42 folders, code 0308, cable 2.06 metres. Добавь вопрос об одном числе.~There are forty-two folders. The code is 0308. The cable is 2.06 metres long. Is the code zero three zero eight?~Четыре функции выполнены, данные и единица не искажены; свои формулировки принимаются.
speech~clarify~Передай слушателю 13, 30 и 0.13 в выбранном им порядке; проверь и при необходимости исправь его запись.~Thirteen; thirty; zero point one three.~Проверяющий должен слышать речь; результат не выводится из текста.
text~quantity~Объясни, почему three million и millions of — разные конструкции; добавь новый пример со thousand.~Three million is exact. Millions of is approximate. Two thousand pages; thousands of pages.~Нужно объяснить число, множественное окончание и of, не только перевести слова.`)]
};

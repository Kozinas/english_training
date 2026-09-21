// Author-created numeric reference. Values are exact; pronunciations are broad UK IPA.
const split=source=>source.trim().split('\n').map(line=>line.split('~'));
export const cardinals=split(`0~zero~ˈzɪərəʊ
1~one~wʌn
2~two~tuː
3~three~θriː
4~four~fɔː
5~five~faɪv
6~six~sɪks
7~seven~ˈsevən
8~eight~eɪt
9~nine~naɪn
10~ten~ten
11~eleven~ɪˈlevən
12~twelve~twelv
13~thirteen~ˌθɜːˈtiːn
14~fourteen~ˌfɔːˈtiːn
15~fifteen~ˌfɪfˈtiːn
16~sixteen~ˌsɪkˈstiːn
17~seventeen~ˌsevənˈtiːn
18~eighteen~ˌeɪˈtiːn
19~nineteen~ˌnaɪnˈtiːn
20~twenty~ˈtwenti
30~thirty~ˈθɜːti
40~forty~ˈfɔːti
50~fifty~ˈfɪfti
60~sixty~ˈsɪksti
70~seventy~ˈsevənti
80~eighty~ˈeɪti
90~ninety~ˈnaɪnti
100~a hundred / one hundred~ə ˈhʌndrəd / wʌn ˈhʌndrəd
1,000~a thousand / one thousand~ə ˈθaʊzənd / wʌn ˈθaʊzənd
1,000,000~a million / one million~ə ˈmɪljən / wʌn ˈmɪljən
1,000,000,000~a billion / one billion~ə ˈbɪljən / wʌn ˈbɪljən`);
export const ordinalWords=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth','twentieth','twenty-first','twenty-second','twenty-third','twenty-fourth','twenty-fifth','twenty-sixth','twenty-seventh','twenty-eighth','twenty-ninth','thirtieth','thirty-first'];
export const ordinalSuffix=n=>n%100>=11&&n%100<=13?'th':({1:'st',2:'nd',3:'rd'}[n%10]??'th');
export const weekdays=split(`Monday~ˈmʌndeɪ~понедельник
Tuesday~ˈtjuːzdeɪ~вторник
Wednesday~ˈwenzdeɪ~среда
Thursday~ˈθɜːzdeɪ~четверг
Friday~ˈfraɪdeɪ~пятница
Saturday~ˈsætədeɪ~суббота
Sunday~ˈsʌndeɪ~воскресенье`);
export const months=split(`January~ˈdʒænjuəri~январь
February~ˈfebruəri~февраль
March~mɑːtʃ~март
April~ˈeɪprəl~апрель
May~meɪ~май
June~dʒuːn~июнь
July~dʒʊˈlaɪ~июль
August~ˈɔːɡəst~август
September~sepˈtembə~сентябрь
October~ɒkˈtəʊbə~октябрь
November~nəʊˈvembə~ноябрь
December~dɪˈsembə~декабрь`);
export const numberReference={id:'numbers-time',title:'Числа, порядковые формы, дни, месяцы и время',intro:[
 'Охват: количественные 0–20, все десятки до 90, разрядные основы до billion; порядковые формы всех дней месяца 1–31; все 7 дней недели и 12 месяцев. Это набор основ и правил построения, а не невозможное перечисление бесконечного ряда чисел. Составляй 21–99 из десятков и единиц: twenty-one, ninety-six. Hundred/thousand/million после точного числа без -s: three hundred, two thousand; приблизительно — hundreds of people.',
 'Не переносите русскую запятую автоматически: в английской десятичной записи обычно точка, 1.5 — one point five. После point читайте цифры: 2.07 — two point zero seven, не two point seven. В 1,500 запятая часто разделяет тысячи. Разделители и единицы измерения — часть смысла. Для кодов цифры диктуют по отдельности, сохраняя начальные нули; это не количество предметов.',
 'У thirteen/thirty и fifteen/fifty различаются окончание, /n/ и типичный рисунок ударения. У -teen в изоляции или явном противопоставлении обычно сильнее конец; перед ударным существительным ударение может смещаться. Поэтому не угадывайте по громкости одного слога: уточняйте One three or three zero? Указанная IPA — ориентир для изолированной формы, не единственный ритм любой фразы.',
 'Время можно читать цифрами: 08:05 — eight oh five / eight zero five; 14:20 — fourteen twenty в 24-часовом контексте или two twenty p.m. Past отсчитывает минуты после часа: ten past four = 4:10. To считает до следующего часа: ten to four = 3:50. Quarter = 15 минут, half past = 30 после названного часа. UK half four означает 4:30, но начинающему лучше произносить half past four или four thirty, чтобы избежать неоднозначности.',
 '12 a.m. — полночь, 12 p.m. — полдень, однако для ясности лучше midnight/noon или 24-часовая запись с датой. Полночь также может создавать неясность о границе дней: укажите конкретную дату и 00:00. Расписание международного звонка требует часового пояса; без него не угадывайте местное время. Здесь нет преобразования поясов по памяти или обещаний актуального смещения.',
 'Даты: 4 May обычно читается the fourth of May, May 4 — May fourth. Числовое 04/05 без соглашения неоднозначно: день-месяц или месяц-день. Название месяца словами или явно оговорённый YYYY-MM-DD снимают эту неоднозначность. Для 11/12/13 исключение в суффиксе: 11th, 12th, 13th, а не 11st. Дни недели и месяцы пишутся с заглавной буквы. At seven, on Monday, on 4 May, in May; перед next Monday и tomorrow предлог обычно не нужен.'
 ],headers:['Раздел / запись','Английская форма','IPA / комментарий'],rows:[
 ...cardinals.map(([n,word,ipa])=>[n,word,`/${ipa}/`]),
 ...ordinalWords.map((word,i)=>[`${i+1}${ordinalSuffix(i+1)}`,word,'Порядковое: какой по счёту, в том числе день месяца.']),
 ...weekdays.map(([word,ipa,ru])=>[ru,word,`/${ipa}/; on ${word}`]),
 ...months.map(([word,ipa,ru])=>[ru,word,`/${ipa}/; in ${word}`]),
 ['21 / 47 / 98','twenty-one / forty-seven / ninety-eight','Дефис соединяет десятки и единицы в письменной форме.'],
 ['105','one hundred and five / one hundred five','And типично для UK; в US часто опускается.'],
 ['1.25','one point two five','Десятичные разряды читаем по цифрам.'],
 ['1/2; 1/4; 3/4','a half; a quarter; three quarters','В трёх четвертях quarters во множественном числе.'],
 ['08:00','eight o’clock / eight a.m.','O’clock при целой отметке часа, не eight thirty o’clock.'],
 ['08:15','eight fifteen / a quarter past eight','15 минут после восьми.'],
 ['08:30','eight thirty / half past eight','30 минут после восьми.'],
 ['08:45','eight forty-five / a quarter to nine','15 минут до девяти, не до восьми.'],
 ['23:50','twenty-three fifty / eleven fifty p.m.','Двадцатичетырёхчасовая запись не получает суффикс p.m.'],
 ['1998 / 2004 / 2026','nineteen ninety-eight / two thousand and four / twenty twenty-six','Для 2004 также two thousand four; 2026 также two thousand (and) twenty-six.']
 ],practice:[
 ['Напиши 18 словами.','eighteen; не eigthteen.'],['Напиши 40 словами.','forty; не fourty.'],['Напиши 73 словами.','seventy-three.'],['Запиши one point zero eight цифрами.','1.08; нуль после точки значим.'],['Диктуй 0074 как код, не количество.','zero zero seven four; возможны oh для нулей при ясном соглашении.'],['Исправь three hundreds files.','three hundred files; после точного числа hundred без -s.'],['Запиши 12-й сокращённо.','12th; исключение 11–13.'],['Назови 31-й словами.','thirty-first; меняется последняя часть.'],['Переведи quarter to seven в HH:MM утром.','06:45; до семи остаётся четверть часа.'],['Запиши half past ten в HH:MM вечером.','22:30; половина часа после десяти вечера.'],['Уточни 03/04 без известного формата.','Do you mean 3 April or March 4? — сначала выяснить соглашение.'],['Выбери предлог: ___ Wednesday, ___ July, ___ noon.','on Wednesday; in July; at noon.'],['Почему Meeting at 7 недостаточно для международной встречи?','Не ясны дата, утро/вечер и часовой пояс; попросить уточнить.'],['Скажи год 2009 двумя обычными способами.','two thousand and nine; two thousand nine.'],['Исправь at next Tuesday.','next Tuesday — без at/on в обычной фразе.']
 ],sources:[
 ['Cambridge: количественные и порядковые числа','https://dictionary.cambridge.org/grammar/british-grammar/number'],
 ['Cambridge: чтение времени','https://dictionaryblog.cambridge.org/2018/02/14/what-time-is-it-how-to-say-the-time/'],
 ['Cambridge: чтение годов','https://dictionaryblog.cambridge.org/2017/10/04/1066-and-all-that-how-to-say-years/']
 ]
};

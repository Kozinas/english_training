import {cardinals,ordinalWords,ordinalSuffix,weekdays,months} from './numbers.mjs';

const card=(slug,word,ipa,translation,context,kind,note)=>({id:`P02-x-${slug}`,module:'P02',word,ipa:`/${ipa}/`,translation,context,kind,note,accent:'UK'});
const ordinalIPA='fɜːst~ˈsekənd~θɜːd~fɔːθ~fɪfθ~sɪksθ~ˈsevənθ~eɪtθ~naɪnθ~tenθ~ɪˈlevənθ~twelfθ~ˌθɜːˈtiːnθ~ˌfɔːˈtiːnθ~ˌfɪfˈtiːnθ~ˌsɪkˈstiːnθ~ˌsevənˈtiːnθ~ˌeɪˈtiːnθ~ˌnaɪnˈtiːnθ~ˈtwentiəθ~ˌtwenti ˈfɜːst~ˌtwenti ˈsekənd~ˌtwenti ˈθɜːd~ˌtwenti ˈfɔːθ~ˌtwenti ˈfɪfθ~ˌtwenti ˈsɪksθ~ˌtwenti ˈsevənθ~ˌtwenti ˈeɪtθ~ˌtwenti ˈnaɪnθ~ˈθɜːtiəθ~ˌθɜːti ˈfɜːst'.split('~');
const chunks=`read-back~read back~riːd bæk~повторить прочитанное/услышанное для проверки~Read the code back, please.~фразовый глагол~Не буквальное «читать спину»: цель — проверить передачу данных. Read it back.
write-down~write down~raɪt daʊn~записать~Write the number down. Write it down.~фразовый глагол~С местоимением: write it down, не write down it.
look-at~look at~lʊk æt~смотреть на~Look at the last line.~сочетание~At связывает действие с объектом; look и see не всегда взаимозаменяемы.
on-time~on time~ɒn ˈtaɪm~вовремя, по расписанию~The call starts on time.~выражение~Не путать с in time: успеть до того, как стало поздно.
in-time~in time~ɪn ˈtaɪm~успев до нужного момента~We are here in time for the call.~выражение~Не обязательно точно по расписанию; есть запас до нужного события.
take-your-time~take your time~teɪk jə ˈtaɪm~не торопись~Take your time and check the digits.~выражение~Не означает «забери своё время»: разрешение работать без спешки.
once-again~once again~wʌns əˈɡen~ещё раз~Please read the number once again.~выражение~Again имеет нормативные варианты /əˈɡen/ и /əˈɡeɪn/.
one-at-a-time~one at a time~ˌwʌn ət ə ˈtaɪm~по одному~Read the digits one at a time.~выражение~Не про один час; элементы обрабатываются последовательно.
in-a-row~in a row~ɪn ə ˈrəʊ~подряд~There are two zeros in a row.~выражение~Здесь последовательность, а не ряд стульев.
double-check~double-check~ˌdʌbəl ˈtʃek~перепроверить~Double-check the date, please.~глагол~Проверить ещё раз для уверенности; не удвоить значение числа.
noon~noon~nuːn~полдень~The event is at noon.~слово~Однозначнее 12 p.m. в приглашении.
midnight~midnight~ˈmɪdnaɪt~полночь~Use 00:00 on 6 May, not just midnight.~слово~Уточняй дату, чтобы не перепутать начало и конец дня.
quarter~a quarter~ə ˈkwɔːtə~четверть; четверть часа~A quarter to seven is 6:45.~сочетание~To направлено к следующему часу; quarter past seven — 7:15.
half-past~half past~ˌhɑːf ˈpɑːst~полчаса после названного часа~Half past six is 6:30.~конструкция~Русское «половина седьмого», не шести; не переносить русский отсчёт.
time-zone~time zone~ˈtaɪm zəʊn~часовой пояс~Which time zone do you mean?~сочетание~Для международной встречи нельзя молча подразумевать свой пояс.
weekday~weekday~ˈwiːkdeɪ~день с понедельника по пятницу~Our practice group meets on a weekday.~слово~Не гарантирует рабочий день для каждого индивидуального графика.
weekend~weekend~ˌwiːkˈend~выходные в конце недели~We can check the plan at the weekend.~слово~UK at the weekend; US on the weekend также нормативно.
tomorrow~tomorrow~təˈmɒrəʊ~завтра~The call is tomorrow.~слово~Обычно без on; для отложенного сообщения полезно назвать точную дату.
yesterday~yesterday~ˈjestədeɪ~вчера~The old note is from yesterday.~слово~Относительная дата зависит от момента разговора.
digit~digit~ˈdɪdʒɪt~цифра~Read each digit of the code.~слово~У числа 105 три цифры; digit не всегда заменяет number.
decimal-point~decimal point~ˈdesɪməl pɔɪnt~десятичная точка~Do not omit the decimal point in 1.5.~сочетание~В обычной английской записи дроби отделяются точкой; соглашение источника уточняется.
first-of-all~first of all~ˌfɜːst əv ˈɔːl~прежде всего~First of all, check the date.~выражение~Вводит первый или приоритетный шаг, не порядковый номер объекта.
finally~finally~ˈfaɪnəli~наконец; в завершение~Finally, read the code back.~слово~В процедуре маркирует последний шаг.
be-careful~be careful~biː ˈkeəfəl~будь внимателен / осторожен~Be careful with the zeros.~конструкция~Императив использует be; отрицательная форма don’t be.`.split('\n').map(row=>card(...row.split('~')));

export const p02Vocabulary=[
 ...cardinals.map(([n,forms,ipa])=>{
  const word=forms.split(' / ')[0],sound=ipa.split(' / ')[0];
  return card(`number-${n.replaceAll(',','')}`,word,sound,n,`${word[0].toUpperCase()+word.slice(1)} ${n==='1'?'item':'items'}: ${n}.`,'числительное','Количественное число. Для кода называй цифры отдельно; ударение в связной речи может изменяться.');
 }),
 ...ordinalWords.map((word,i)=>card(`ordinal-${i+1}`,word,ordinalIPA[i],`${i+1}-й / ${i+1}-я / ${i+1}-е`, `The ${word} item in the list (${i+1}${ordinalSuffix(i+1)}).`,'порядковое числительное','Порядок, а не количество. В составном числе меняется последняя часть; для 11–13 суффикс th.')),
 ...weekdays.map(([word,ipa,ru])=>card(`day-${word.toLowerCase()}`,word,ipa,ru,`The practice call is on ${word}.`,'день недели','Заглавная буква. On + день, но next Monday без on.')),
 ...months.map(([word,ipa,ru])=>card(`month-${word.toLowerCase()}`,word,ipa,ru,`The event is in ${word}.`,'месяц','Заглавная буква. In + месяц; on + конкретная дата.')),
 ...chunks
];

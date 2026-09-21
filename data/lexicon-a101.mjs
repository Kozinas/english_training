import {thirdPersonVerbs} from './present-simple.mjs';

const card=(slug,word,ipa,translation,context,kind,note)=>({id:`A101-x-${slug}`,module:'A101',word,ipa:`/${ipa}/`,translation,context,kind,note,accent:'UK'});
// Each form has its own sense in context. IDs derive from stable base forms, not row positions.
const verbContexts=Object.fromEntries(`work~работает~Jo works at a library.
read~читает~The visitor reads the notice.
write~пишет~The guide writes a short note.
check~проверяет~The helper checks the list.
play~играет~Kim plays chess after lunch.
stay~остаётся~Jo stays at home on Sundays.
study~учится; изучает~The student studies English.
try~пробует; пытается~The helper tries a different key.
carry~несёт; носит~The visitor carries a bag.
reply~отвечает~The organiser replies to the message.
wash~моет~The driver washes the van.
watch~смотрит; следит~The guide watches the door.
finish~заканчивает~The class finishes at noon.
fix~чинит; исправляет~The technician fixes the printer.
pass~передаёт~The helper passes the book to Jo.
miss~пропускает~The visitor sometimes misses the bus.
go~идёт; едет~The bus goes past the library.
do~делает; выполняет~The assistant does the final check.
have~имеет; здесь: обедает~The guide has lunch at one.
say~говорит; здесь: написано~The note says Room C.
use~использует~The app uses a local file.
choose~выбирает~Jo chooses a short story.
teach~учит; преподаёт~The volunteer teaches English.
catch~ловит; здесь: успевает на~Mina catches the early train.
live~живёт~The teacher lives near the station.
need~нуждается; нужно~The program needs a file name.
like~нравится~Jo likes this reading group.
know~знает~The organiser knows the price.
think~думает; считает~Mina thinks the room is too small.
help~помогает~The guide helps new visitors.
start~начинает; начинается~The class starts at ten.
stop~останавливается~The train stops here.
send~отправляет~Jo sends the list to Mina.
drink~пьёт~The helper drinks water after the walk.
eat~ест~The visitor eats lunch outside.
relax~отдыхает; расслабляется~Jo relaxes after work.`.split('\n').map(row=>{const [base,meaning,context]=row.split('~');return [base,{meaning,context}];}));

export const a101Vocabulary=[
 ...thirdPersonVerbs.map(([base,third,ipa,ending,note])=>{
  const entry=verbContexts[base];
  if(!entry)throw new Error('Missing A101 lexical context: '+base);
  return card('form-'+base,third,ipa,entry.meaning,entry.context,'форма глагола',`База: ${base}; третье лицо: ${third}; окончание /${ending}/. ${note}`);
 }),
 ...`routine~routine~ruːˈtiːn~распорядок; обычный порядок~This is my usual morning routine.~существительное~Не обязательно скучная рутина: может быть полезный установленный порядок.
habit~habit~ˈhæbɪt~привычка~Reading after dinner is a useful habit.~существительное~Habit — повторяющаяся привычка; routine — часто целая последовательность.
usually~usually~ˈjuːʒuəli~обычно~Jo usually walks to work.~наречие~Не фиксированный процент и не подтверждение каждого отдельного дня.
always~always~ˈɔːlweɪz~всегда~The guide always checks the address first.~наречие~В буквальной процедуре каждый случай; в живой речи бывает преувеличение.
often~often~ˈɒfən~часто~We often read together.~наречие~Также нормативное /ˈɒftən/; точное число случаев не задано.
sometimes~sometimes~ˈsʌmtaɪmz~иногда~Sometimes Jo takes the bus.~наречие~Начальная, средняя и конечная позиции могут быть естественными.
occasionally~occasionally~əˈkeɪʒənəli~время от времени~We occasionally meet after work.~наречие~Не путать со случайно: речь о частотности.
rarely~rarely~ˈreəli~редко~Jo rarely prints messages.~наречие~Не never: редкие случаи возможны; не добавляй don’t для базового смысла.
never~never~ˈnevə~никогда~I never share that password.~наречие~В стандартной модели уже несёт отрицание; не I don’t never.
hardly-ever~hardly ever~ˈhɑːdli ˈevə~почти никогда~Jo hardly ever arrives late.~устойчивое выражение~Целостный смысл частотности, не «тяжело всегда»; hard и hardly не взаимозаменяемы.
once-a-week~once a week~wʌns ə wiːk~раз в неделю~The group meets once a week.~выражение частотности~Число встреч задано, конкретный день ещё нет.
twice-a-week~twice a week~twaɪs ə wiːk~дважды в неделю~Mina studies English twice a week.~выражение частотности~Не every other day; два случая не задают интервал через день.
every-day~every day~ˈevri deɪ~каждый день~I read a short text every day.~выражение частотности~Пишется раздельно, в отличие от прилагательного everyday.
everyday~everyday~ˈevrideɪ~повседневный~We practise everyday conversations.~прилагательное~Перед существительным: everyday tasks; не замена every day в конце фразы.
every-other-day~every other day~ˈevri ˈʌðə deɪ~через день~Jo checks this log every other day.~устойчивая конструкция~Other в этой конструкции задаёт чередование, а не произвольный «другой день».
every-weekday~every weekday~ˈevri ˈwiːkdeɪ~каждый будний день~The desk opens at nine every weekday.~выражение частотности~После every единственное число; суббота и воскресенье не включены.
from-time-to-time~from time to time~frəm taɪm tə taɪm~время от времени~We compare our notes from time to time.~устойчивое выражение~Общий смысл occasionally, не перемещение от одного конкретного часа к другому.
now-and-then~now and then~naʊ ən ðen~изредка; время от времени~Jo takes a taxi now and then.~устойчивое выражение~Весь оборот задаёт частоту, не два отдельных времени «сейчас и тогда».
as-a-rule~as a rule~əz ə ruːl~как правило~As a rule, the library is quiet in the morning.~устойчивое выражение~Обычный случай с возможными исключениями, не обязательно формальное правило учреждения.
on-weekdays~on weekdays~ɒn ˈwiːkdeɪz~по будням~The class meets on weekdays.~обстоятельство времени~Множественное weekdays с on; не every weekdays.
at-weekends~at weekends~ət ˌwiːkˈendz~по выходным~Jo often reads at weekends.~выражение UK~US on weekends тоже нормативно; не исправляй региональный вариант без причины.
before-work~before work~bɪˈfɔː wɜːk~перед работой~Mina checks her notes before work.~выражение времени~Work здесь без артикля, как деятельность.
after-lunch~after lunch~ˈɑːftə lʌntʃ~после обеда~The helper sends the list after lunch.~выражение времени~Сообщает положение относительно обеда, но не частоту.
how-often~how often~haʊ ˈɒfən~как часто~How often does the group meet?~вопросительная конструкция~Спрашивает частоту, не what time «во сколько» или how long «как долго».
how-long~how long~haʊ lɒŋ~как долго; какой длины~How long does the meeting last?~вопросительная конструкция~Здесь длительность; в других контекстах может быть длина предмета.
get-up~get up~ɡet ʌp~вставать с постели~I get up at seven on weekdays.~фразовый глагол~Проснуться и встать не одно и то же: wake up не обязательно get up.
wake-up~wake up~weɪk ʌp~просыпаться~Jo wakes up before the alarm.~фразовый глагол~Здесь непереходное действие; wake someone up — разбудить кого-то.
set-off~set off~set ɒf~отправляться в путь~We set off after breakfast.~фразовый глагол~В этом контексте отправление, не буквальное «установить выключено»; есть другие значения.
get-back~get back~ɡet bæk~возвращаться~Mina gets back at six.~фразовый глагол~Здесь возвращение; get something back — получить что-то обратно.
find-out~find out~faɪnd aʊt~выяснять; узнавать~The helper finds out the room number.~фразовый глагол~Получить сведения; find a key — найти предмет, другая модель.
look-up~look up~lʊk ʌp~искать сведения в справочнике~Jo looks up new words in a dictionary.~фразовый глагол~Не обязательно смотреть вверх. С местоимением: look it up, не look up it.
carry-out~carry out~ˈkæri aʊt~выполнять~The technician carries out the final check.~фразовый глагол~Здесь выполнение работы, не физическое вынесение предмета наружу.
keep-track-of~keep track of~kiːp træk əv~следить за изменениями; учитывать~The reading log helps me keep track of new words.~устойчивая конструкция~Не «держать дорожку»: сохранять осведомлённость или учёт; после of нужен объект.
take-notes~take notes~teɪk nəʊts~делать записи~I take notes during the class.~коллокация~Take здесь не «забирать» уже готовые заметки, а записывать важное.
take-a-break~take a break~teɪk ə breɪk~делать перерыв~The helpers take a break at noon.~коллокация~Не «брать поломку»; break может быть перерывом в деятельности.
have-lunch~have lunch~hæv lʌntʃ~обедать~The guide has lunch at one.~коллокация~Have как действие; отрицание doesn’t have lunch, не doesn’t has.
do-the-shopping~do the shopping~duː ðə ˈʃɒpɪŋ~ходить за покупками; закупать нужное~Jo does the shopping on Fridays.~коллокация~Рутинная покупка необходимого; do здесь смысловой глагол, вопрос Does Jo do...?
make-sure~make sure~meɪk ʃɔː~убедиться; проверить~I make sure the address is correct.~устойчивая конструкция~Целостный смысл проверки; не буквальное «сделать уверенный».
in-advance~in advance~ɪn ədˈvɑːns~заранее~We check the timetable in advance.~устойчивое выражение~Раньше события, не обязательно далеко вперёд во времени.
on-time~on time~ɒn taɪm~вовремя, по расписанию~The class usually starts on time.~устойчивое выражение~On time — в назначенное время; in time — достаточно рано для нужного действия.
one-at-a-time~one at a time~wʌn ət ə taɪm~по одному~The guide checks the tickets one at a time.~устойчивая конструкция~Описывает последовательность обработки, не «раз в какое-то время».
it-depends~it depends~ɪt dɪˈpendz~это зависит от обстоятельств~Do you walk every day? It depends on the weather.~разговорная формула~Часто нужен контекст или on + условие; не универсальная замена точного ответа.
not-always~not always~nɒt ˈɔːlweɪz~не всегда~I don’t always print the notes.~конструкция отрицания~Не равно never; допускает случаи печати, но не все.
on-my-own~on my own~ɒn maɪ əʊn~самостоятельно; один~I sometimes study on my own.~устойчивое выражение~Без чужой помощи или без компании; контекст различает эти смыслы.`.split('\n').map(row=>{
  const parts=row.split('~');
  if(parts.length!==7||parts.some(value=>!value))throw new Error('Invalid A101 card row');
  return card(...parts);
 })
];

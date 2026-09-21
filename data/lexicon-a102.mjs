import {ingForms} from './present-continuous.mjs';

const card=(slug,word,ipa,translation,context,kind,note)=>({id:`A102-x-${slug}`,module:'A102',word,ipa:`/${ipa}/`,translation,context,kind,note,accent:'UK'});
const contexts=Object.fromEntries(`work~работает, работая~Jo is working at the festival desk.
read~читает, читая~The visitor is reading the notice.
play~играет, играя~The children are playing outside.
study~занимается, изучая~Mina is studying the room plan.
try~пробует, пытаясь~We are trying a different route.
carry~несёт, неся~Jo is carrying a box.
make~делает, создавая~The helpers are making a sign.
write~пишет, записывая~Mina is writing the names.
take~берёт; здесь: делает фото~Jo is taking a photo.
use~использует, используя~The guest is using a tablet.
move~двигает, перемещая~We are moving the chairs.
have~здесь: обедает~The guide is having lunch.
come~идёт сюда, приближаясь~The host is coming to the gate.
dance~танцует, танцуя~The visitors are dancing in the hall.
see~здесь: встречается~Jo is seeing the organiser tomorrow.
agree~соглашается, соглашаясь~The members are agreeing on the final wording.
dye~красит ткань~The artist is dyeing a scarf.
lie~лежит, лёжа~The map is lying on the bench.
tie~завязывает~The visitor is tying a ribbon.
die~умирает; здесь: вянет, погибает~The plant is dying without water.
run~бежит, бегая~The dog is running across the field.
sit~сидит, сидя~The guests are sitting near the window.
stop~останавливается~The bus is stopping outside the hall.
swim~плывёт, плавая~The swimmer is swimming across the pool.
begin~начинается~The reading session is beginning.
plan~планирует~The group is planning a visit.
open~открывает~The helper is opening the gate.
listen~слушает~Mina is listening to the explanation.
visit~посещает~We are visiting friends this week.
wait~ждёт, ожидая~The visitors are waiting outside.
rain~идёт дождь~It is raining near the hall.
help~помогает~Jo is helping the new visitor.
fix~чинит; исправляет~The technician is fixing the lamp.
snow~идёт снег~It is snowing in the mountains.
travel~едет; путешествует~Jo is travelling by train.
cancel~отменяет~The organiser is cancelling the booking.
panic~паникует~The character is panicking in this scene.
picnic~устраивает пикник~The family is picnicking beside the lake.
sing~поёт, напевая~Mina is singing quietly.
bring~приносит~Jo is bringing another chair.`.split('\n').map(row=>{const [base,meaning,context]=row.split('~');return [base,{meaning,context}];}));

export const a102Vocabulary=[
 ...ingForms.map(([base,forms,ipa,note])=>{
  const entry=contexts[base];if(!entry)throw new Error('Missing A102 context: '+base);
  return card('ing-'+base,forms.split(' / ')[0],ipa,entry.meaning,entry.context,'форма -ing',`База ${base}; ${forms}. ${note} Русский перевод зависит от всей конструкции, не от -ing отдельно.`);
 }),
 ...`at-the-moment~at the moment~ət ðə ˈməʊmənt~в данный момент~I’m checking the list at the moment.~выражение времени~Помогает задать рамку, но не запрещает I need help at the moment.
right-now~right now~raɪt naʊ~прямо сейчас~What are you doing right now?~выражение времени~Усиление текущего момента, не самостоятельное правило выбора времени.
these-days~these days~ðiːz deɪz~в наши дни; в последнее время~I’m using a different route these days.~выражение времени~Период вокруг настоящего, не обязательно текущая секунда.
for-now~for now~fə naʊ~пока, на данный момент~We are using Room F for now.~устойчивое выражение~Временное решение; не обещание постоянного правила.
temporary~temporary~ˈtempərəri~временный~This is a temporary arrangement.~прилагательное~Временное состояние тоже может быть Simple: I need help now.
currently~currently~ˈkʌrəntli~в настоящее время~Jo is currently working upstairs.~наречие~Не русское «актуально» во всех контекстах; речь о текущем периоде.
normally~normally~ˈnɔːməli~обычно~We normally meet twice a week.~наречие~Обычный распорядок с возможными исключениями.
still~still~stɪl~всё ещё~I’m still waiting for the answer.~наречие~Продолжение ситуации; сравни I still need help, где need остаётся Simple.
meanwhile~meanwhile~ˈmiːnwaɪl~тем временем~Mina is writing. Meanwhile, Jo is checking the names.~связующее наречие~Связывает одновременные линии событий, не обязательно причинную связь.
while~while~waɪl~пока; в то время как~Jo is reading while Mina is writing.~союз~Связывает предложения; форма каждого зависит от собственного смысла.
instead-of~instead of~ɪnˈsted əv~вместо~We are using Room F instead of Room B.~устойчивое сочетание~После of предмет или ing-группа; не просто противоположность факта.
because-of~because of~bɪˈkɒz əv~из-за; благодаря причине~We are waiting because of the rain.~предложное сочетание~Because of + именная группа; because + предложение: because it is raining.
by-hand~by hand~baɪ hænd~вручную~Mina is writing the signs by hand.~устойчивое выражение~Способ выполнения, не буквально «рядом с рукой».
aloud~aloud~əˈlaʊd~вслух~Kim is reading the instructions aloud.~наречие~Aloud — слышимо, не обязательно очень громко; не allowed «разрешённый».
borrowed~borrowed~ˈbɒrəʊd~одолженный у кого-то~I’m using a borrowed device.~прилагательное~Пользование не означает владение; borrow — взять на время, lend — дать.
device~device~dɪˈvaɪs~устройство~The device is saving a note.~существительное~Не advise «советовать»; контекст определяет конкретный прибор.
diagram~diagram~ˈdaɪəɡræm~схема; диаграмма~I need a clearer diagram.~существительное~Может показывать связи или устройство, не только статистический график.
instruction~instruction~ɪnˈstrʌkʃən~указание; инструкция~I don’t understand this instruction.~существительное~Instructions часто множественное для набора указаний.
explanation~explanation~ˌekspləˈneɪʃən~объяснение~Mina is thinking about another explanation.~существительное~Explanation of a rule; reason for a decision — разные обычные сочетания.
detail~detail~ˈdiːteɪl~подробность; деталь~We need one more detail.~существительное~В этом контексте недостающее сведение, не обязательно часть устройства.
belong-to~belong to~bɪˈlɒŋ tə~принадлежать~This bag belongs to Leon.~конструкция глагола~Belong требует to перед владельцем; нейтрально Simple.
think-about~think about~θɪŋk əˈbaʊt~обдумывать; думать о~I’m thinking about the order of the steps.~конструкция глагола~Здесь процесс, не I think that... как мнение.
think-of~think of~θɪŋk əv~думать о; оценивать; вспоминать~What do you think of this example?~конструкция глагола~В этом вопросе нужна оценка; у think of есть и другие значения.
have-trouble-with~have trouble with~hæv ˈtrʌbəl wɪð~испытывать трудности с~I’m having trouble with this task.~устойчивая конструкция~Trouble здесь неисчисляемое; Continuous естественен для переживаемой трудности.
make-sense~make sense~meɪk sens~иметь смысл; быть понятным~The first step makes sense to me.~устойчивая конструкция~Не буквальное «делать чувство»; часто о логике или понятности.
get-the-point~get the point~ɡet ðə pɔɪnt~понять суть~I get the point, but I need an example.~устойчивое выражение~Point здесь мысль/суть, не геометрическая точка.
work-on~work on~wɜːk ɒn~работать над~Jo is working on a clearer guide.~конструкция глагола~Work on something не означает, что результат уже готов.
work-out~work out~wɜːk aʊt~разобраться; решить~We are working out the route.~фразовый глагол~В этом контексте найти решение, не тренироваться физически; значение зависит от дополнения.
sort-out~sort out~sɔːt aʊt~разобраться; упорядочить~The team is sorting out the room list.~фразовый глагол~Может означать решить проблему или привести в порядок, не только физически сортировать.
put-up~put up~pʊt ʌp~разместить; повесить~The volunteers are putting up signs.~фразовый глагол~Здесь размещение объявлений; другие значения требуют своего контекста.
put-away~put away~pʊt əˈweɪ~убрать на место~I’m putting my phone away.~фразовый глагол~Не выбросить; с местоимением put it away, не put away it.
take-a-photo~take a photo~teɪk ə ˈfəʊtəʊ~сфотографировать~Ben is taking a photo of the part.~коллокация~По-английски take a photo, не механическое make из русского «сделать».
hold-on~hold on~həʊld ɒn~подожди; не отключайся~Hold on, I’m checking the room number.~разговорная формула~В разговоре просьба подождать, не только держаться физически.
look-at~look at~lʊk æt~смотреть на~Mina is looking at the diagram.~конструкция глагола~Направленный взгляд; look for — искать, look after — присматривать.
become~become~bɪˈkʌm~становиться~The explanation is becoming clearer.~глагол~Процесс изменения не доказывает, что конечное качество уже достигнуто.
improve~improve~ɪmˈpruːv~улучшать; улучшаться~The draft is improving as we revise it.~глагол~Можно improve a draft или the draft improves; это не объективная оценка уровня ученика без проверки.
measure~measure~ˈmeʒə~измерять; иметь размер~Jo is measuring the table.~глагол~Действие измерения и размер предмета дают разные грамматические контексты.
weigh~weigh~weɪ~весить; взвешивать~The clerk is weighing the parcel.~глагол~Weighs two kilos — свойство, is weighing it — действие.
taste~taste~teɪst~иметь вкус; пробовать~The cook is tasting the soup.~глагол~The soup tastes salty — свойство; the cook is tasting — действие человека.
smell~smell~smel~пахнуть; нюхать~Mina is smelling the flowers.~глагол~The flowers smell sweet описывает запах, не действие цветов.
feel~feel~fiːl~чувствовать~I’m feeling tired today.~глагол~I feel tired тоже естественно; не абсолютный запрет Continuous.
opinion~opinion~əˈpɪnjən~мнение~What is your opinion of this plan?~существительное~Мнение отличается от подтверждённого факта; I think часто вводит оценку.
in-progress~in progress~ɪn ˈprəʊɡres~в процессе выполнения~The check is still in progress.~устойчивое выражение~Не означает завершение или успешный результат.
so-far~so far~səʊ fɑː~пока; к настоящему моменту~The plan looks clear so far.~устойчивое выражение~Временная граница оценки, не окончательная гарантия; позднее встретится с Present Perfect.`.split('\n').map(row=>{
  const parts=row.split('~');if(parts.length!==7||parts.some(v=>!v))throw new Error('Invalid A102 card row');return card(...parts);
 })
];

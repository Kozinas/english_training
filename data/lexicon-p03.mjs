import {pluralNouns} from './nouns.mjs';

const card=(slug,word,ipa,translation,context,kind,note)=>({id:`P03-x-${slug}`,module:'P03',word,ipa:`/${ipa}/`,translation,context,kind,note,accent:'UK'});
const pluralUses=`book~книги~The books on this shelf are new.
card~карточки~These two cards are mine.
table~столы~The tables are empty.
page~страницы~Read the last two pages.
box~коробки~Those boxes are for the paper.
bus~автобусы~The buses are outside.
dish~тарелки; блюда~These dishes are clean.
watch~наручные часы (несколько)~The two watches belong to different people.
class~классы; занятия~The classes are in different rooms.
city~города~The map shows three cities.
baby~младенцы~The two babies are asleep.
key~ключи~Whose keys are these?
boy~мальчики~The boys are ready for the activity.
leaf~листья~The leaves are green.
knife~ножи~The knives are in the kitchen.
wife~жёны~Their wives are at the event.
roof~крыши~The houses have red roofs.
photo~фотографии~These photos are from the same room.
piano~фортепиано (несколько инструментов)~There are two pianos in the music room.
potato~картофелины~Three potatoes are in the bag.
tomato~помидоры~The tomatoes are red.
child~дети~The children’s drawings are on the wall.
man~мужчины~The men are in the next room.
woman~женщины~The women’s coats are by the door.
person~люди~Five people share the large table.
tooth~зубы~The toy has two white teeth.
foot~ступни; ноги~My feet are cold.
mouse~мыши~These are toy mice, not real animals.
goose~гуси~The geese are near the water.
sheep~овцы; овца (форма одинакова)~These sheep are small.
deer~олени; олень (форма одинакова)~Two toy deer are in the box.
fish~рыбы; рыба (обычная форма одинакова)~There are three fish in the picture.
series~серии; серия (форма одинакова)~These series are about different topics.
species~виды; вид (форма одинакова)~The picture shows two species of bird.
analysis~анализы; аналитические разборы~The two analyses use different examples.
criterion~критерии~These criteria help us check the answer.`.split('\n').map(line=>line.split('~'));
const pluralCards=pluralUses.map(([one,ru,context])=>{
 const pair=pluralNouns.find(row=>row[0]===one);
 if(!pair)throw new Error('Missing plural reference: '+one);
 return card(`plural-${one}`,pair[1],pair[2],ru,context,'форма существительного',`${one} → ${pair[1]}. ${pair[3]}`);
});
const otherCards=`information~information~ˌɪnfəˈmeɪʃən~информация~The information is clear.~неисчисляемое~Обычно не informations: two pieces of information.
advice~advice~ədˈvaɪs~совет; советы как информация~This advice is useful.~неисчисляемое~Для одной единицы a piece of advice / a tip; не an advice.
equipment~equipment~ɪˈkwɪpmənt~оборудование~The equipment is ready.~неисчисляемое~Отдельные единицы: pieces of equipment или devices; не equipments.
furniture~furniture~ˈfɜːnɪtʃə~мебель~The furniture in this room is new.~неисчисляемое~Для отдельных предметов items/pieces of furniture.
luggage~luggage~ˈlʌɡɪdʒ~багаж~The luggage is beside the door.~неисчисляемое~Suitcases — исчисляемые чемоданы; luggage обычно без -s.
money~money~ˈmʌni~деньги~The money is in the example envelope.~неисчисляемое~Русское множественное не выбирает английское are.
news~news~njuːz~новость; новости~The news is good.~неисчисляемое~Конечная s не делает слово грамматически множественным.
water~water~ˈwɔːtə~вода~The water in this glass is cold.~неисчисляемое~Общее water без артикля; конкретное the water возможно.
bread~bread~bred~хлеб~Two slices of bread are on the plate.~неисчисляемое~Считаются slices, а не breads в обычном значении материала/еды.
software~software~ˈsɒftweə~программное обеспечение~The software is ready for the practice task.~неисчисляемое~Отдельные programs/packages исчисляемы; softwares обычно не используется.
paper~paper~ˈpeɪpə~бумага; статья в другом значении~Three sheets of paper are on my desk.~слово~Материал неисчисляем; a paper может быть статьёй/газетой.
coffee~coffee~ˈkɒfi~кофе~The coffee is hot.~слово~Напиток обычно неисчисляем; two coffees может означать две порции.
my~my~maɪ~мой / моя / моё / мои перед существительным~My blue notebook is here.~определитель~Форма зависит от владельца I, не от рода или числа вещи.
mine~mine~maɪn~мой / моя / мои самостоятельно~The notebook is mine.~местоимение~Заменяет my notebook; не mine notebook.
your~your~jɔː~твой / ваш перед существительным~Is this your card?~определитель~Один или несколько адресатов; слабая форма /jə/ возможна в речи.
yours~yours~jɔːz~твой / ваш самостоятельно~This card is yours.~местоимение~Не your’s; английские притяжательные местоимения не требуют апострофа.
his~his~hɪz~его: перед существительным и самостоятельно~His phone is here. The phone is his.~притяжательная форма~Обе функции имеют одну форму; владелец использует he.
her~her~hɜː~её перед существительным~Her two bags are blue.~определитель~Перед bag/bags форма одинакова; самостоятельное притяжательное — hers.
hers~hers~hɜːz~её самостоятельно~The two bags are hers.~местоимение~Без апострофа; не hers bags.
its~its~ɪts~его / её для it перед существительным~Its label is green.~определитель~Не it’s: последнее сокращает it is или it has.
our~our~aʊə~наш перед существительным~Our shared desk is here.~определитель~Также нормативно /ɑː/ в некоторых UK-реализациях и слабых формах.
ours~ours~aʊəz~наш самостоятельно~The desk is ours.~местоимение~Без апострофа и без следующего существительного.
their~their~ðeə~их; его/её с singular they перед существительным~Their cards are on the shelf.~определитель~Число вещей не выбирает форму владельца; слабая форма /ðə/ возможна.
theirs~theirs~ðeəz~их; принадлежащий человеку с they~The cards are theirs.~местоимение~Самостоятельная форма, без апострофа.
whose~whose~huːz~чей / чья / чьи~Whose bag is this?~вопросительное слово~Не who’s: одинаковое обычное звучание, но другая грамматика.
this~this~ðɪs~этот / эта / это (близкое единственное)~This box is empty.~указатель~Также с неисчисляемым: this information. Пространственный отсчёт от говорящего.
that~that~ðæt~тот / та / то (дальнее единственное)~That lamp over there is small.~указатель~Может отсылать и к предыдущей мысли, не только к физически далёкому предмету.
these~these~ðiːz~эти (близкое множественное)~These boxes are empty.~указатель~These + plural + are; отличается от this гласным и конечным согласным.
those~those~ðəʊz~те (дальнее множественное)~Those chairs are by the far wall.~указатель~Не those is; число согласуется с существительным и be.
folder~folder~ˈfəʊldə~папка~The green folder is mine.~слово~Бумажная или компьютерная папка; в упражнениях используются вымышленные объекты.
shelf~shelf~ʃelf~полка~The books on this shelf are new.~слово~Множественное shelves /ʃelvz/; ещё одна пара f → ves.
drawer~drawer~drɔː~выдвижной ящик~The small drawer is empty.~слово~В UK обычно не читается как два отдельных слова draw + er.
label~label~ˈleɪbəl~ярлык; подпись~Its label is blue.~слово~Указывает, как предмет обозначен; не доказывает его реального владельца.
cover~cover~ˈkʌvə~обложка; крышка~The notebook’s cover is green.~слово~В этом контексте существительное; cover бывает и глаголом.
owner~owner~ˈəʊnə~владелец~Ask who the owner is.~слово~Не выводи владельца только из расположения вещи.
shared~shared~ʃeəd~общий; совместно используемый~This is our shared desk.~определение~Shared не обязательно означает передачу собственности: здесь учебный контекст.
separate~separate~ˈsepərət~отдельный~Jo and Kim have separate notebooks.~прилагательное~У глагола separate другое окончание произношения /eɪt/.
empty~empty~ˈempti~пустой~The two boxes are empty.~прилагательное~Не получает -s во множественном и не меняется по русскому роду.
useful~useful~ˈjuːsfəl~полезный~This is a useful example.~прилагательное~Перед useful ставится a из-за начального /j/.
entrance~entrance~ˈentrəns~вход~The desk is near the entrance.~существительное~В значении входа ударение на первом слоге.
opposite~opposite~ˈɒpəzɪt~напротив; противоположный~Kim is at the opposite end of the room.~слово~Помогает задать позицию говорящего; само по себе не выбирает this/that.
belong-to~belong to~bɪˈlɒŋ tə~принадлежать~The notebook belongs to Kim.~сочетание~Связь вещи и владельца; третье лицо belongs подробно повторится в Present Simple.
piece-of~a piece of~ə ˈpiːs əv~одна единица; часть~A piece of information is missing.~конструкция~Способ считать единицы неисчисляемого значения, не всегда физический кусок.
sheet-of-paper~a sheet of paper~ə ˌʃiːt əv ˈpeɪpə~лист бумаги~Write the code on a sheet of paper.~сочетание~Sheet исчисляемо, paper как материал — нет; /iː/ в sheet важен.
friend-of-mine~a friend of mine~ə ˌfrend əv ˈmaɪn~один из моих друзей~A friend of mine is here.~конструкция~Не a my friend и не a friend of me в этом значении.
at-first-glance~at first glance~ət ˌfɜːst ˈɡlɑːns~на первый взгляд~At first glance, the bags look the same.~выражение~Первое впечатление может быть неверным; владение требует уточнения.
as-a-whole~as a whole~əz ə ˈhəʊl~в целом~Equipment names the set as a whole.~выражение~Не один физически целый предмет; способ представить совокупность.
the-same-as~the same as~ðə ˈseɪm əz~такой же, как; тот же, что~This code is the same as that code.~сочетание~Same обычно с the; as связывает сравниваемые объекты.
different-from~different from~ˈdɪfrənt frəm~отличающийся от~My folder is different from yours.~сочетание~From — удобная базовая модель; также встречаются нормативные different to/than в своих контекстах.
on-my-own~on my own~ɒn maɪ ˈəʊn~самостоятельно; один~I can write the note on my own.~выражение~Не просто «на моём»: речь о самостоятельности или отсутствии компании.
which-one~which one?~wɪtʃ ˈwʌn~который именно?~Which one do you mean, the red bag or the blue bag?~разговорная формула~Уточняет выбор одного объекта; для нескольких which ones?
over-there~over there~ˌəʊvə ˈðeə~вон там~Those boxes over there are empty.~выражение~Помогает указать удалённое место с точки зрения говорящего.
here-you-are~here you are~ˌhɪə ju ˈɑː~вот, держи(те)~A pen? Here you are.~разговорная формула~При передаче предмета это не буквальное описание местоположения собеседника.`.split('\n').map(row=>card(...row.split('~')));

export const p03Vocabulary=[...pluralCards,...otherCards];

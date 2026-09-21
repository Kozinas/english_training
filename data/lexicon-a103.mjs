import {portionPhrases,placeExpressions} from './quantity-place.mjs';
const card=(id,word,ipa,translation,context,kind,note)=>({id:'A103-x-'+id,word,ipa:'/'+ipa+'/',translation,context,kind,note,module:'A103',accent:'UK'});
export const a103Vocabulary=[
 ...portionPhrases.map(([word,ipa,translation,context],i)=>card('portion-'+(i+1),word,ipa,translation,context,'порция / единица','Считается единица перед of, не вещество после него. Объём упаковки не фиксирован без указания размера. UK litre / US liter; UK tin / US can — по контексту.')),
 ...placeExpressions.map(([word,ipa,translation,context])=>card('place-'+word.replaceAll(' ','-'),word,ipa,translation,context,'пространственное отношение','Учебный пространственный смысл; не все переносные значения. Точка зрения и ориентир обязательны; словарная сильная форма может ослабляться в связной речи.')),
 ...`kitchen~kitchen~ˈkɪtʃɪn~кухня~Jo is in the kitchen.~место~In the kitchen, не буквальное on по русскому «на».
bathroom~bathroom~ˈbɑːθruːm~ванная комната~Is there a bathroom near the guest room?~место~US гласный часто /æ/; нормативный акцент не ошибка.
bedroom~bedroom~ˈbedruːm~спальня~There are two beds in this bedroom.~место~Комната и число кроватей — разные единицы.
hall~hall~hɔːl~прихожая; коридор; зал~The mirror is in the hall.~место~Конкретный тип помещения уточняется контекстом.
balcony~balcony~ˈbælkəni~балкон~Is there a balcony?~место~Вопрос не утверждает его наличие.
ceiling~ceiling~ˈsiːlɪŋ~потолок~The lamp hangs from the ceiling.~предмет~Не floor: потолок и пол.
floor~floor~flɔː~пол; этаж~There is a box on the floor.~предмет / уровень~First floor требует уточнения UK/US системы этажей.
cupboard~cupboard~ˈkʌbəd~шкаф~The cupboard is beside the door.~предмет~P не звучит; слово не читается как cup + board по буквам.
drawer~drawer~drɔː~выдвижной ящик~The spoons are in the drawer.~предмет~Внутри in; на поверхности on — другое положение.
worktop~worktop~ˈwɜːktɒp~столешница~Put the bowl on the worktop.~предмет~UK worktop; US часто countertop.
sink~sink~sɪŋk~мойка; раковина~There is a sink between the cupboard and the cooker.~предмет~Здесь существительное, не глагол «тонуть».
cooker~cooker~ˈkʊkə~кухонная плита~The cooker is beside the sink.~предмет~UK cooker; US часто stove. Cook — человек или действие, не плита.
fridge~fridge~frɪdʒ~холодильник~There are two cartons of milk in the fridge.~предмет~Короткая форма refrigerator.
freezer~freezer~ˈfriːzə~морозильник~Is there a freezer in the kitchen?~предмет~Не весь холодильник в любом контексте.
oven~oven~ˈʌvən~духовка~There is a tray in the oven.~предмет~Первый гласный /ʌ/, не чтение имени O.
kettle~kettle~ˈketəl~чайник для кипячения~The kettle is broken.~предмет~Teapot — заварочный чайник, не тот же предмет.
saucepan~saucepan~ˈsɔːspən~кастрюля~There is a saucepan on the cooker.~предмет~Исчисляемое: two saucepans.
tray~tray~treɪ~поднос~Put two cups on the tray.~предмет~Не ящик drawer; поверхность on.
fork~fork~fɔːk~вилка~There aren't enough forks for eight people.~предмет~В разработке fork имеет другой смысл, не универсальный перевод.
knife~knife~naɪf~нож~There are three knives in the drawer.~предмет~Начальная k не звучит; knife → knives.
spoon~spoon~spuːn~ложка~We have a few clean spoons.~предмет~Spoon — предмет, spoonful — количество в ложке.
jug~jug~dʒʌɡ~кувшин~There is some water in the jug.~предмет~Количество кувшинов не задаёт литры без размера.
towel~towel~ˈtaʊəl~полотенце~There are three clean towels.~предмет~Towel C; количество требует согласования are.
blanket~blanket~ˈblæŋkɪt~одеяло~Are there any blankets in the wardrobe?~предмет~Закрытый шкаф не подтверждает содержимое.
cushion~cushion~ˈkʊʃən~диванная подушка~There are two cushions on the bench.~предмет~Обычно опора для сидения/спины; pillow чаще для сна.
curtain~curtain~ˈkɜːtən~штора~There is a blue curtain by the window.~предмет~Curtains может обозначать пару/комплект штор.
rug~rug~rʌɡ~коврик; небольшой ковёр~The rug is in front of the sofa.~предмет~Отдельный ковёр; carpet может покрывать пол целиком.
socket~socket~ˈsɒkɪt~розетка; гнездо~How many sockets are there?~предмет~В программировании socket — связанный технический термин с отдельным контекстом.
hook~hook~hʊk~крючок~There are five hooks beside the door.~предмет~Здесь предмет, не программный обработчик.
flour~flour~flaʊə~мука~We need a bag of flour.~продукт~U; звучит как flower, смысл различает контекст.
butter~butter~ˈbʌtə~сливочное масло~There isn't any butter.~продукт~U в обычном продуктовом значении.
cream~cream~kriːm~сливки~There is a little cream left.~продукт~U; русское множественное не задаёт английское are.
honey~honey~ˈhʌni~мёд~How much honey is in the jar?~продукт~Не /həʊ/: начальный гласный /ʌ/.
beans~beans~biːnz~фасоль; бобы~There are two tins of beans.~продукт~Beans — множественное от bean; tins считает упаковки.
onion~onion~ˈʌnjən~луковица; лук~There is an onion on the board.~продукт~An onion — целый овощ; some onion — количество нарезанного продукта.
carrot~carrot~ˈkærət~морковь; одна морковка~We need four carrots.~продукт~Целые овощи считаются поштучно.
mushroom~mushroom~ˈmʌʃruːm~гриб~There are a few mushrooms in the bowl.~продукт~Языковой пример, не указание съедобности найденного гриба.
biscuit~biscuit~ˈbɪskɪt~печенье в UK-контексте~Would you like a biscuit?~продукт~US biscuit может означать другое изделие; cookie часто ближе к UK biscuit.
label~label~ˈleɪbəl~этикетка; метка~There is some information on the label.~предмет~Содержание надо прочитать, не угадать по цвету упаковки.
contents~contents~ˈkɒntents~содержимое~The cupboard's contents are unknown.~существительное~В этом значении множественная форма с are.
spare~spare~speə~запасной; свободный~Are there any spare chairs?~признак~Не обязательно сломанный или ненужный.
chipped~chipped~tʃɪpt~со сколом~Some of the cups are chipped.~признак~Конкретное повреждение, не общее empty/dirty.
enough~enough~ɪˈnʌf~достаточно~There are enough seats for six people.~количество~Enough for a purpose; gh звучит /f/.
a-few~a few~ə fjuː~несколько, небольшое число есть~There are a few cups left.~количество~C plural; не гарантирует enough.
a-little~a little~ə ˈlɪtəl~немного, небольшой объём есть~There is a little juice left.~количество~U; a little cup — уже маленький предмет.
too-many~too many~tuː ˈmeni~слишком много отдельных единиц~There are too many boxes for this shelf.~количество~Избыток относительно цели, не просто a lot of.
too-much~too much~tuː mʌtʃ~слишком много вещества или ресурса~There is too much furniture for this room.~количество~U; не too many furniture.
in-stock~in stock~ɪn stɒk~есть в наличии у продавца~Is plain yoghurt in stock?~устойчивое выражение~Наличие товара, не буквальный перевод stock по частям.
out-of-stock~out of stock~aʊt əv stɒk~нет в наличии у продавца~The small cartons are out of stock.~устойчивое выражение~Не означает, что товар нигде не существует.
run-low-on~run low on~rʌn ləʊ ɒn~запас чего-либо подходит к концу~We are running low on rice.~устойчивое выражение~Мало осталось, не обязательно уже ноль как при полном исчерпании.
top-up~top up~tɒp ʌp~пополнить; долить~Can you top up the water jug?~фразовый глагол~Пополнить запас, не «верх вверх».
help-yourself~help yourself~help jəˈself~угощайся; бери сам~Please help yourself to some bread.~разговорная формула~To вводит угощение; разрешение хозяина, не приказ помогать себе буквально.
on-the-house~on the house~ɒn ðə haʊs~за счёт заведения~The tea is on the house today.~устойчивое выражение~Бесплатно для гостя по решению заведения, не положение на крыше.
make-room-for~make room for~meɪk ruːm fə~освободить место для~Move the boxes to make room for the chairs.~устойчивое выражение~Room здесь U «место», не строительство новой комнаты.
put-back~put back~pʊt bæk~положить обратно~Please put the jar back on the shelf.~фразовый глагол~Возврат на прежнее место; местоимение: put it back.
take-out~take out~teɪk aʊt~вынуть; вынести~Take the empty box out of the cupboard.~фразовый глагол~Здесь физическое извлечение; другие значения зависят от контекста.
at-hand~at hand~ət hænd~под рукой; поблизости для использования~Keep the stock list at hand.~устойчивое выражение~Не обязательный физический контакт с рукой.
read-back~read back~riːd bæk~повторить прочитанное для проверки~Please read the quantities back to me.~устойчивое выражение~Проверка передачи данных; не чтение букв в обратном порядке.
anything-else~anything else~ˌeniθɪŋ ˈels~что-нибудь ещё~Anything else? — No, that's all.~разговорная формула~Вопрос о дополнении заказа.
that-will-do~that will do~ðæt wɪl duː~этого хватит; это подойдёт~One small bag? — Yes, that will do.~разговорная формула~Достаточность по ситуации, не обещание какого-то будущего действия.`.split('\n').map(row=>{
 const fields=row.split('~');if(fields.length!==7||fields.some(x=>!x))throw new Error('Invalid A103 vocabulary row');return card(...fields);
 })
];

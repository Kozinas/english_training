// Original reference tables; common patterns, not a claim to list every English noun.
const rows=s=>s.trim().split('\n').map(line=>line.split('~'));
export const pluralNouns=rows(`book~books~bʊks~Обычное -s; окончание /s/ после /k/.
card~cards~kɑːdz~Обычное -s; /z/ после звонкого /d/.
table~tables~ˈteɪbəlz~Обычное -s; /z/ после /l/.
page~pages~ˈpeɪdʒɪz~После /dʒ/ появляется слог /ɪz/; написание -s после e.
box~boxes~ˈbɒksɪz~После x пишем -es; произносим дополнительный слог.
bus~buses~ˈbʌsɪz~В данном значении стандартная частая форма buses.
dish~dishes~ˈdɪʃɪz~После sh добавляется -es, звучит /ɪz/.
watch~watches~ˈwɒtʃɪz~После ch со звуком /tʃ/ добавляется -es.
class~classes~ˈklɑːsɪz~После /s/ — /ɪz/, не ещё один изолированный /s/.
city~cities~ˈsɪtiz~Согласная + y: y заменяется на ies.
baby~babies~ˈbeɪbiz~Согласная + y: babies, не babys.
key~keys~kiːz~Гласная буква перед y: y сохраняется, добавляется s.
boy~boys~bɔɪz~Гласная перед y: boys, не boies.
leaf~leaves~liːvz~У этого слова f меняется на ves; не правило для любого f.
knife~knives~naɪvz~Fe меняется на ves; k в начале не произносится.
wife~wives~waɪvz~Запоминается вместе с формой единственного числа.
roof~roofs~ruːfs~Исключение из упрощённого правила f → ves.
photo~photos~ˈfəʊtəʊz~После o здесь -s, не -es.
piano~pianos~piˈænəʊz~После o здесь -s; сверять конкретное слово.
potato~potatoes~pəˈteɪtəʊz~После o здесь -es.
tomato~tomatoes~təˈmɑːtəʊz~UK IPA; US гласный в середине отличается.
child~children~ˈtʃɪldrən~Неправильная форма; без дополнительного s.
man~men~men~Меняется гласный; не mans в значении нескольких мужчин.
woman~women~ˈwɪmɪn~Меняются гласные произношения; не читать как woman плюс s.
person~people~ˈpiːpəl~Обычное множественное для людей; persons встречается в специальных регистрах.
tooth~teeth~tiːθ~Долгий /iː/ во множественном, не добавляем s.
foot~feet~fiːt~Неправильная форма; значение ноги или единицы длины уточняется контекстом.
mouse~mice~maɪs~Обычная форма, включая компьютерные мыши; в техническом употреблении встречается и mouses.
goose~geese~ɡiːs~Неправильная форма, не gooses в значении птиц.
sheep~sheep~ʃiːp~Форма одинакова; число видно из two и are.
deer~deer~dɪə~Форма одинакова; one deer / three deer.
fish~fish~fɪʃ~Обычное множество рыб; fishes возможно при разговоре о видах/разновидностях.
series~series~ˈsɪəriːz~Форма одинакова; this series / these series. Материал для расширения.
species~species~ˈspiːʃiːz~Форма одинакова; число определяется контекстом. Не specie в этом значении.
analysis~analyses~əˈnæləsiːz~Продвинутая основа для технического чтения; меняется окончание и произношение.
criterion~criteria~kraɪˈtɪəriə~Продвинутая основа: один criterion, несколько criteria.`);
export const countabilityExamples=rows(`information~информация~a piece of information~В обычном значении не an information и не informations.
advice~совет, советы как информация~a piece of advice~Для отдельного совета также a tip; не two advices.
equipment~оборудование~a piece of equipment~Предметы можно считать, но английское equipment обычно неисчисляемо.
furniture~мебель~an item of furniture~Не furnitures при обычном перечислении предметов.
luggage~багаж~a piece of luggage~Чемоданы исчисляемы: two suitcases; luggage обычно нет.
money~деньги~an amount of money~Русское множественное не задаёт английское: the money is.
news~новость/новости~a piece of news~Конечная s не делает news множественным: the news is.
water~вода~a glass of water~Glass как ёмкость исчисляемо, water как вещество — нет.
bread~хлеб~a slice of bread~Считается slice: two slices of bread.
software~программное обеспечение~a software package~В обычном общем значении не softwares; отдельные programs/packages исчисляемы.
paper~бумага как материал~a sheet of paper~A paper может означать статью/газету; это другое значение.
coffee~кофе как напиток~a cup of coffee~Two coffees в кафе может означать две порции; значение меняет исчисляемость.`);
export const nounReference={id:'nouns-articles',title:'Существительные, число и базовая карта артиклей',intro:[
 'Охват: основные схемы множественного числа, 36 разобранных пар, 12 частых неисчисляемых значений и базовый выбор a/an, the или отсутствия артикля. Это не перечень всех исключений языка. У нового слова проверяй словарную пометку C/U, plural и произношение. Формы для advanced-reading явно отмечены; они не обязательны в первом проходе P03.',
 'Исчисляемость относится к слову в конкретном значении, а не к возможности физически пересчитать предметы. Equipment обозначает оборудование в целом, хотя отдельные devices можно посчитать. Paper как материал и a paper как статья — разные значения. Слово с -s не обязательно множественное: news is; sheep без -s может быть множественным: two sheep are.',
 'Основы: обычно +s; после s/x/z/sh и ch со свистящим/шипящим концом часто +es; согласная + y → ies, но гласная + y → ys. У f/fe и o нет одного надёжного правила для всех слов: leaf/leaves, но roof/roofs; potato/potatoes, но photo/photos. Прилагательное не получает окончания числа: two small rooms, не smalls.',
 'Произношение зависит от последнего ЗВУКА основы. После /s z ʃ ʒ tʃ dʒ/ — /ɪz/ (в некоторых акцентах /əz/); после остальных глухих /p t k f θ/ обычно /s/; после остальных звонких и гласных — /z/. Это базовая схема продуктивного окончания, а не обещание отсутствия лексических изменений: у отдельных слов, например house → houses, меняется и согласный основы. Проверяй словарную форму, не только последнюю букву.',
 'A/an: один исчисляемый представитель, которого не требуется однозначно выделить для слушателя. Выбор по следующему звуку: a useful tool (/j/), an empty box (/e/), an hour (немая h). The: слушатель может определить, какой предмет/набор/материал имеется в виду; это возможно уже при первом упоминании. Ø: здесь знак отсутствия артикля, не слово; например Books are useful (книги вообще), Water is necessary (вещество вообще).',
 'У обычного исчисляемого существительного в единственном числе нужен определитель: a card / the card / my card / this card. Не ставь два базовых определителя вместе: не a my card. The возможно с единственным, множественным и неисчисляемым: the card, the cards, the water in this glass. Не выбирай артикль только по первому/второму упоминанию; оценивай общий контекст. Географические названия, учреждения, generic singular и тонкости регистра разбираются в более поздних топиках.'
 ],headers:['Раздел / основа','Форма / выражение','Произношение / значение','Механизм и границы'],rows:[
 ...pluralNouns.map(([one,many,ipa,note])=>[one,many,`/${ipa}/`,note]),
 ...countabilityExamples.map(([word,ru,unit,note])=>[word,unit,ru,note]),
 ['a + согласный звук','a user; a useful app','один пользователь; полезное приложение','U здесь начинается со звука /j/, а не с гласного.'],
 ['an + гласный звук','an umbrella; an old chair','один зонт; старый стул','Слушай начало всей группы после артикля, включая прилагательное.'],
 ['the + понятный объект','the only blue card','единственная синяя карточка','Однозначный объект можно ввести с the сразу.'],
 ['Ø + обобщение','Keys are useful.','Ключи вообще полезны.','Множественное число без артикля в обобщении.'],
 ['Ø + вещество вообще','Paper is recyclable.','Бумагу можно перерабатывать.','Речь о материале вообще, не о конкретных листах.'],
 ['the + конкретный материал','the paper on this desk','бумага на этом столе','Неисчисляемость не запрещает the.'],
 ['Другой определитель','my desk; this desk','мой стол; этот стол','A/an/the перед my или this здесь не добавляются.'],
 ['Множественное ≠ принадлежность','cards / card’s label','карточки / подпись карточки','Апостроф не образует обычное множественное число.']
 ],practice:[
 ['Преобразуй one city, one key, one box во множественное.','cities; keys; boxes — три разные схемы написания.'],
 ['Почему two red cars, не two reds cars?','Число выражено у существительного; прилагательное red не меняется.'],
 ['Исправь three childs и two womens.','three children; two women — неправильные формы без дополнительного s.'],
 ['Раздели books, cards, watches по звуку окончания.','/s/, /z/, /ɪz/; у watches дополнительный слог.'],
 ['Согласуй: The news ___ good; the two sheep ___ here.','is; are — видимая s не определяет грамматическое число.'],
 ['Вырази две единицы оборудования без equipments.','two pieces of equipment / two devices (если речь именно об устройствах).'],
 ['Выбери a/an: ___ useful example; ___ unusual name.','a useful example (/j/); an unusual name (/ʌ/).'],
 ['Сравни I need a chair и I need the chair.','Первое — любой подходящий стул; второе — определённый, понятный собеседнику.'],
 ['Скажи о книгах вообще: ___ books are useful.','Ø Books are useful — не конкретный набор книг.'],
 ['Почему the water in this bottle грамматично?','The выделяет определённую воду; неисчисляемость не запрещает определённый артикль.'],
 ['Исправь a my notebook, сохранив принадлежность.','my notebook; убрать a.'],
 ['Объясни paper / a paper, coffee / two coffees.','Материал / статья или газета; напиток вообще / две порции в подходящем контексте.'],
 ['Дай множественное roof, photo, potato.','roofs; photos; potatoes — f и o требуют проверки слова.'],
 ['Можно ли по фразе I found ___ key выбрать единственный артикль без контекста?','Нет: a вводит неопределённый ключ, the отсылает к известному; нужны условия задачи.']
 ],sources:[
 ['Cambridge: формы существительных','https://dictionary.cambridge.org/us/grammar/british-grammar/nouns-form'],
 ['Cambridge: a/an и the','https://dictionary.cambridge.org/uk/grammar/british-grammar/a-an-and-the'],
 ['British Council: исчисляемость','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/nouns-countable-uncountable'],
 ['British Council: звуки окончания -s','https://africa.teachingenglish.org.uk/classroom/pronunciation/snake-or-fly'],
 ['Cambridge: варианты множественного mouse','https://dictionary.cambridge.org/dictionary/english/mouse?topic=computer-hardware'],
 ['Cambridge: изменение звучания house → houses','https://dictionary.cambridge.org/pronunciation/english/houses']
 ]};

export const possessiveForms=rows(`I~my~mine~Вещь связана с говорящим: my cup / the cup is mine.
you~your~yours~Один или несколько адресатов; форма одинаковая.
he~his~his~Форма his одинакова перед существительным и самостоятельно.
she~her~hers~Her notebook, но the notebook is hers.
it~its~—~Обычно повтори существительное: its cover; самостоятельное its редко, главным образом в its own.
we~our~ours~Говорящий и другие: our room / the room is ours.
they~their~theirs~Несколько владельцев или один человек с they; согласование глагола they are.`);
export const demonstratives=rows(`this~единственное~близко к говорящему~this card is / this is a card
that~единственное~дальше от говорящего~that card is / that is a card
these~множественное~близко к говорящему~these cards are / these are cards
those~множественное~дальше от говорящего~those cards are / those are cards`);
export const possessionReference={id:'determiners-possession',title:'Указание и принадлежность: this/these, my/mine, ’s',intro:[
 'Охват: полная базовая сетка четырёх указательных форм; все семь рядов my/mine и соответствующих личных форм; основные позиции апострофа, совместная/раздельная принадлежность, its/it’s и whose/who’s. Это не таблица всех английских местоимений: объектные, возвратные, относительные и неопределённые формы получают отдельную практику в последующих топиках.',
 'В пространственной задаче точка отсчёта — говорящий. This/these обычно рядом с ним, that/those дальше; при смене говорящего выбор может измениться. В речи расстояние бывает также смысловым: this week, that idea. This/that сочетаются с единственным и неисчисляемым, these/those — с множественным. Выбор артикля не дублируется: this book, не this a book.',
 'My/your/his/her/its/our/their стоят перед существительным, включая прилагательные: her new bag. Mine/yours/his/hers/ours/theirs заменяют всю группу: the bag is hers. Форма определяется владельцем, не грамматическим родом предмета по-русски. Her bag и her books имеют одну форму her. У этих притяжательных форм нет апострофа.',
 'Для имени или существительного: один владелец Sam → Sam’s; обычное множественное students → students’; неправильное множественное children → children’s. Сначала определи число владельцев, затем поставь апостроф. Варианты имён на s зависят от стиля: Chris’s / Chris’ допустимы при последовательном выборе; здесь не нужно объявлять один вариант единственно правильным.',
 'Совместная вещь двух людей: Jo and Kim’s desk. Раздельные: Jo’s and Kim’s desks. Число вещей само по себе не говорит о числе владельцев. Student’s и students’ часто звучат одинаково; апостроф нельзя проверить по одному аудиотранскрипту — нужна информация о владельцах и письменная запись.',
 'Its обозначает принадлежность/связь: its name. It’s — сокращение it is или it has; на этом этапе основной контраст с it is. Whose спрашивает «чей?», who’s сокращает who is / who has. Наличие ’s после имени может означать принадлежность или сокращение: Sam’s desk / Sam’s ready. Решает структура продолжения, не сам значок. Для частей предметов также естественно of: the corner of the desk; правило «неодушевлённым никогда нельзя ’s» неверно.'
 ],headers:['Форма / владелец','Перед существительным / условие','Самостоятельно / согласование','Смысл и пример'],rows:[
 ...possessiveForms,
 ...demonstratives.map(([word,number,distance,example])=>[word,`${number}; ${distance}`,number==='множественное'?'are':'is',example]),
 ['Sam','Sam’s card','The card is Sam’s.','Один названный владелец.'],
 ['one student','the student’s card','The card is the student’s.','Один студент; s добавляется после апострофа.'],
 ['two students','the students’ cards','The cards are the students’.','Несколько студентов: апостроф после окончания множественного.'],
 ['children','the children’s books','The books are the children’s.','Неправильное множественное уже образовано; не childrens’.'],
 ['Jo and Kim: вместе','Jo and Kim’s desk','Their shared desk.','Общая вещь; ’s у последнего имени.'],
 ['Jo и Kim: по отдельности','Jo’s and Kim’s desks','Their separate desks.','У каждого свой стол; обе группы притяжательные.'],
 ['its / it’s','its label / it’s ready','его ярлык / он готов','Притяжательная форма без апострофа; сокращение с апострофом.'],
 ['whose / who’s','Whose bag? / Who’s ready?','чья сумка? / кто готов?','Whose про принадлежность, who’s содержит глагол.'],
 ['a friend of mine','a friend of mine, не a my friend','один из моих друзей','Полезная расширенная конструкция; не a friend of me.'],
 ['of + предмет','the edge of the card','край карточки','Часть целого, не обязательно владение человеком.']
 ],practice:[
 ['Рядом с говорящим один предмет и два предмета: выбери формы.','this / these; согласование is / are.'],
 ['Далеко от говорящего одна и несколько коробок: назови полные группы.','that box / those boxes.'],
 ['Преобразуй my phone в самостоятельный ответ: The phone is ___.','mine; без повторения phone.'],
 ['Выбери her/hers: ___ old coat is here; the coat is ___.','her; hers — наличие существительного меняет форму.'],
 ['Один владелец Sam, две сумки. Напиши группу.','Sam’s bags; число сумок не меняет число владельцев.'],
 ['Два студента владеют карточками. Запиши students с апострофом.','students’ — после окончания множественного числа.'],
 ['Дети владеют рисунками. Напиши группу с children.','children’s pictures; не childrens’.'],
 ['Замени it is в It is a box. Переведи its label.','It’s a box. Its label — её/его ярлык; разные механизмы.'],
 ['Исправь your’s и her’s.','yours; hers — без апострофа.'],
 ['Поставь вопрос к владельцу: The blue bag is Jo’s.','Whose bag is the blue one? / Whose is the blue bag?'],
 ['Jo и Kim делят один стол; затем у каждой свой. Сравни записи.','Jo and Kim’s desk / Jo’s and Kim’s desks.'],
 ['Почему нельзя определить место апострофа в student’s/students’ только по звуку?','Обычно они омонимичны; нужны контекст числа владельцев и письменная форма.'],
 ['Сравни Sam’s here и Sam’s notebook.','Sam is here — сокращение; Sam’s notebook — принадлежность.'],
 ['Говоришь о человеке с they, имени пока нет. Назови его/её сумку без угадывания пола.','their bag; singular they допускается, но форма местоимения не согласуется с русским родом слова bag.']
 ],sources:[
 ['British Council: притяжательные формы','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/possessives-pronouns'],
 ['British Council: whose и who’s','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/possessives-questions'],
 ['Cambridge: this, that, these, those','https://dictionary.cambridge.org/grammar/british-grammar/this-that-these-'],
 ['Cambridge: принадлежность и апостроф','https://dictionary.cambridge.org/uk/grammar/british-grammar/possession'],
 ['Cambridge: отсылка they к одному неизвестному человеку','https://dictionary.cambridge.org/us/grammar/british-grammar/someone-somebody-something-somewhere']
 ]};

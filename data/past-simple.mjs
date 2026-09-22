// Original reference and examples. The selected verbs are not the full irregular list.
export const pastSources=[
 ['British Council: Past Simple, forms and meanings','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-simple'],
 ['British Council: regular verbs and -ed','https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/past-simple-regular-verbs'],
 ['British Council: was/were and there was/were','https://www.britishcouncil.in/blog/past-tense-was-were'],
 ['British Council: learned/learnt and regional variants','https://englishonline.britishcouncil.org/blog/articles/learned-or-learnt-mastering-past-tense-verbs-in-english/']
];
export const pastBe=[
 ['I','was','I was ready.','I was not ready. / I wasn’t ready.','Was I ready?'],
 ['you','were','You were ready.','You were not ready. / You weren’t ready.','Were you ready?'],
 ['he','was','He was ready.','He was not ready. / He wasn’t ready.','Was he ready?'],
 ['she','was','She was ready.','She was not ready. / She wasn’t ready.','Was she ready?'],
 ['it','was','It was ready.','It was not ready. / It wasn’t ready.','Was it ready?'],
 ['we','were','We were ready.','We were not ready. / We weren’t ready.','Were we ready?'],
 ['they','were','They were ready.','They were not ready. / They weren’t ready.','Were they ready?']
];
// Base, past spelling(s), IPA for the first spelling (UK), ending, meaning, mechanism.
export const pastRegular=`work~worked~wɜːkt~t~работать~После глухого /k/ — /t/, без нового слога.
walk~walked~wɔːkt~t~идти пешком~L не звучит; окончание после /k/.
help~helped~helpt~t~помогать~После /p/ — /t/, не отдельное «эд».
watch~watched~wɒtʃt~t~смотреть~После /tʃ/ — /t/; не терять конец слова.
wash~washed~wɒʃt~t~мыть~После /ʃ/ — /t/.
fix~fixed~fɪkst~t~чинить~X не удваивается; окончание после /s/.
like~liked~laɪkt~t~нравиться~К конечной e добавляется только d.
dance~danced~dɑːnst~t~танцевать~Только +d; US /æ/ допустим.
stop~stopped~stɒpt~t~останавливать(ся)~Короткая ударная гласная + одна p: удвоение.
miss~missed~mɪst~t~пропускать~Две s уже есть, третья не нужна.
play~played~pleɪd~d~играть~Гласная перед y: y сохраняется.
stay~stayed~steɪd~d~оставаться~Не staied: гласная + y.
call~called~kɔːld~d~звонить; звать~После звонкого /l/ — /d/.
clean~cleaned~kliːnd~d~чистить~После /n/ — /d/, без нового слога.
open~opened~ˈəʊpənd~d~открывать~Последний слог без ударения; n не удваивается.
listen~listened~ˈlɪsənd~d~слушать~Последняя n не удваивается; t в listen немая.
live~lived~lɪvd~d~жить~К конечной e добавляется d.
move~moved~muːvd~d~двигать; переезжать~После /v/ — /d/.
study~studied~ˈstʌdid~d~учиться; изучать~Согласная перед y: y меняется на i, затем ed.
try~tried~traɪd~d~пробовать~Согласная + y → ied; один слог.
carry~carried~ˈkærid~d~нести~Y → i перед ed; r не добавляется.
plan~planned~plænd~d~планировать~Короткая ударная гласная + одна n: удвоение.
travel~travelled / traveled~ˈtrævəld~d~путешествовать~UK обычно ll, US обычно l; обе формы нормативны.
cancel~cancelled / canceled~ˈkænsəld~d~отменять~UK обычно ll, US обычно l; две допустимые формы.
want~wanted~ˈwɒntɪd~ɪd~хотеть~Основа заканчивается на /t/: дополнительный слог.
need~needed~ˈniːdɪd~ɪd~нуждаться~После /d/ добавляется /ɪd/.
wait~waited~ˈweɪtɪd~ɪd~ждать~Две гласные буквы: t не удваивается.
visit~visited~ˈvɪzɪtɪd~ɪd~посещать~Безударный последний слог: не visitted.
decide~decided~dɪˈsaɪdɪd~ɪd~решать~В письме +d, в звуке дополнительный слог после /d/.
start~started~ˈstɑːtɪd~ɪd~начинать~После /t/ — /ɪd/; US r допустим.`.split('\n').map(r=>r.split('~'));
// Base, V2, UK IPA, meaning, original context. More forms: appendix irregular.
export const pastIrregular=`go~went~went~идти; ехать~We went to the station.
come~came~keɪm~приходить~The guide came at noon.
get~got~ɡɒt~получать; добираться~We got home at six.
have~had~hæd~иметь; есть (приём пищи)~We had lunch outside.
do~did~dɪd~делать~Jo did the shopping.
make~made~meɪd~делать; создавать~We made a short list.
take~took~tʊk~брать~I took the early bus.
give~gave~ɡeɪv~давать~She gave me a map.
see~saw~sɔː~видеть~They saw a fox.
meet~met~met~встречать~I met the new guide.
buy~bought~bɔːt~покупать~We bought two tickets.
bring~brought~brɔːt~приносить~He brought a blue bag.
think~thought~θɔːt~думать~I thought about the route.
find~found~faʊnd~находить~We found the right platform.
leave~left~left~уходить; оставлять~The bus left at ten.
feel~felt~felt~чувствовать~I felt better after lunch.
keep~kept~kept~хранить; сохранять~She kept the receipt.
sleep~slept~slept~спать~We slept well that night.
say~said~sed~сказать~Jo said the number clearly.
tell~told~təʊld~сказать кому-то; рассказать~I told my friend the news.
send~sent~sent~отправлять~He sent a short message.
spend~spent~spent~тратить; проводить время~We spent an hour there.
eat~ate~et~есть~I ate some rice.
drink~drank~dræŋk~пить~They drank some water.
write~wrote~rəʊt~писать~I wrote the address down.
read~read~red~читать~She read the note yesterday.
run~ran~ræn~бежать~We ran to the bus stop.
sit~sat~sæt~сидеть~They sat near the door.
put~put~pʊt~класть~I put the bag on the seat.
cut~cut~kʌt~резать~Jo cut the bread.`.split('\n').map(r=>r.split('~'));
export const pastTime=[
 ['yesterday','Yesterday I called Jo.','Без on/in перед yesterday.'],
 ['last night','It rained last night.','Прошлой ночью / вчера вечером по контексту, не yesterday night в нейтральной модели.'],
 ['last Monday','We met last Monday.','Без on перед last Monday.'],
 ['on Monday','We met on Monday.','Дата задаётся контекстом; on перед днём без last.'],
 ['in 2021','The shop opened in 2021.','In перед годом.'],
 ['two days ago','We arrived two days ago.','Ago после длительности, отсчёт назад от момента речи.'],
 ['from nine to eleven','We worked from nine to eleven yesterday.','Интервал может быть длинным; Simple не означает «мгновенно».'],
 ['for three hours','We waited for three hours yesterday.','For задаёт длительность, не выбирает время автоматически.'],
 ['then / after that','We ate. After that, we walked home.','Последовательность, не доказательство причинности.'],
 ['because / so','We stayed inside because it rained. It rained, so we stayed inside.','Because вводит причину, so — результат.']
];
export const pastSimpleReference={
 id:'past-simple',title:'Past Simple: was/were, did, формы глаголов и время рассказа',sources:pastSources,
 intro:[
  'Охват: фактическое прошлое, состояния с was/were, действия с V2, did not + V1, вопросы и краткие ответы, 30 правильных и 30 частотных неправильных основ, десять временных/связующих опор. Это не полный список неправильных глаголов: расширенный систематический справочник находится в приложении «Неправильные глаголы».',
  'Past Simple не требует короткого события и не запрещает повторение: We lived there for twelve years. We walked every morning during that holiday. Здесь говорящий помещает ситуацию в прошлый период. Worked on the report не гарантирует finished the report: значение самого глагола тоже важно. Контрасты с Present Perfect, Past Continuous и гипотетическое If I were изучаются в следующих топиках.',
  'Be строит вопрос самостоятельно: Were you ready? — Yes, I was, если отвечаю о себе. Смысловой глагол использует did: Did you leave? — Yes, I did. В Who called Jo? who само является подлежащим; в Who did Jo call? подлежащее Jo, who спрашивает объект. Положительное утверждение обычно V2; усилительное did + V1 — отдельный акцент, не did + V2.',
  'В -ed решает последний звук основы: после /t d/ — /ɪd/, после других глухих — /t/, после гласных и других звонких — /d/. Это правило глагольного окончания: отдельные прилагательные имеют свои произносительные особенности. Транскрипции учебные UK; US-акцент, /eɪt/ для ate и региональные написания travelled/traveled допустимы. Проверка речи требует слушателя.'
 ],headers:['Группа','Основа / ситуация','Форма / модель','Звук / пример','Механизм / ограничение'],rows:[
  ...pastBe.map(([subject,form,yes,no,question])=>['Be',subject,yes,no,question+' — без did; '+form+' по подлежащему.']),
  ...['I','you','he','she','it','we','they'].map(s=>['Действие',s,`${s} worked / did not work`,`Did ${s} work?`, 'Одна V2 для всех лиц; после did исходная work.']),
  ...pastRegular.map(([base,past,ipa,ending,meaning,rule])=>['Правильный',base+' — '+meaning,past,'/'+ipa+'/; -ed /'+ending+'/',rule]),
  ...pastIrregular.map(([base,past,ipa,meaning,context])=>['Неправильный',base+' — '+meaning,past,'/'+ipa+'/',context+(base==='read'?' Письмо одинаково, но V1 /riːd/, V2 /red/.':base==='eat'?' /eɪt/ также допустим.':'')]),
  ...pastTime.map(([phrase,example,note])=>['Связность',phrase,example,'Время / отношение',note])
 ],practice:[
  ['I ___ at the library yesterday. Was/were?','was: I was; не did be.'],
  ['The box near the doors ___ empty yesterday.','was: главное слово box.'],
  ['There ___ three buses at the station at six.','were: наличие трёх buses.'],
  ['Отрицай: Jo was ready.','Jo was not ready / Jo wasn’t ready.'],
  ['Спроси о времени: The meeting was at six.','When was the meeting? / What time was the meeting?'],
  ['Назови V2: study, play, stop, visit.','studied, played, stopped, visited; разные механизмы, не одно правило на все.'],
  ['Отсортируй -ed: washed, moved, waited.','/t/, /d/, /ɪd/ соответственно.'],
  ['Назови V2: buy, bring, think, take.','bought, brought, thought, took; не взаимозаменяемы.'],
  ['Прочитай: I read it every day / I read it yesterday.','/riːd/ против /red/; текст ASR не подтверждает произношение.'],
  ['Исправь: Did she wrote the note?','Did she write the note? — past уже в did.'],
  ['Отрицай: They found the key.','They did not find the key / They didn’t find the key.'],
  ['Сравни Who met Kim? / Who did Kim meet?','Кто встретил Kim / кого встретил(а) Kim; роль who различна.'],
  ['Скажи да о себе: Did you send it?','Yes, I did. Не Yes, I sent.'],
  ['Исправь только временную группу: We left before two days.','We left two days ago. При отсчёте от сейчас — ago.'],
  ['We worked on it for an hour. Значит, закончили?','Нет: работали над задачей, результат не утверждается.'],
  ['Составь четыре связанных предложения: вчера, причина изменения, действие, неизвестная деталь.','Yesterday our bus was late. We walked because the wait was long. We arrived at ten. The reason for the delay is unknown. Другие связные варианты проверяет преподаватель.']
 ]
};

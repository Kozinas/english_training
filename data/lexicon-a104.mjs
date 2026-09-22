import {pastRegular,pastIrregular} from './past-simple.mjs';
const card=(id,word,ipa,translation,context,kind,note)=>({id:'A104-x-'+id,word,ipa:'/'+ipa+'/',translation,context,kind,note,module:'A104',accent:'UK'});
const regularContexts={
 work:'I worked on the report for an hour.',walk:'We walked to the gallery.',help:'She helped me carry the bags.',watch:'We watched the birds.',wash:'I washed the plates.',fix:'Jo fixed a loose chair leg.',like:'They liked the photographs.',dance:'We danced after dinner.',stop:'The bus stopped outside the school.',miss:'I missed the last train.',
 play:'They played cards after lunch.',stay:'We stayed with friends.',call:'Mara called Noor.',clean:'Ruth cleaned the joint.',open:'We opened the cupboard.',listen:'I listened to the guide.',live:'We lived there for ten years.',move:'They moved the boxes upstairs.',study:'I studied the timetable.',try:'We tried to open the file.',carry:'Lee carried the boxes.',plan:'We planned a museum visit.',travel:'We travelled by train.',cancel:'They cancelled the meeting.',want:'I wanted a quiet afternoon.',need:'We needed the cupboard key.',wait:'I waited by the door.',visit:'She visited a small gallery.',decide:'We decided to walk home.',start:'The meeting started at nine thirty.'
};
export const a104Vocabulary=[
 ...pastRegular.map(([base,past,ipa,ending,meaning,rule])=>card('regular-'+base,past.split(' / ')[0],ipa,'Прошедшая форма «'+meaning+'».',regularContexts[base],'форма глагола',`${base} → ${past}; окончание /${ending}/. ${rule}`)),
 ...pastIrregular.map(([base,past,ipa,meaning,context])=>card('irregular-'+base,past,ipa,'Прошедшая форма «'+meaning+'».',context,'форма глагола',`${base} → ${past}; это V2, не основа после did. ${base==='eat'?'Для ate также нормативно /eɪt/.':base==='read'?'Написание не меняется, звук меняется с /riːd/ на /red/.':'Сверяй V3 отдельно в приложении неправильных глаголов.'}`)),
 ...`the day before yesterday~ðə deɪ bɪˈfɔː ˈjestədeɪ~позавчера~We met the day before yesterday.~выражение~Устойчивая временная группа без on.
last week~lɑːst wiːk~на прошлой неделе~We moved last week.~выражение~Last week без in/on.
a while ago~ə waɪl əˈɡəʊ~некоторое время назад~She called a while ago.~выражение~Ago после обозначения промежутка.
at first~ət fɜːst~сначала; поначалу~At first I was nervous, but later I felt relaxed.~выражение~Начальное состояние с последующим изменением; не то же, что first в списке.
after that~ˈɑːftə ðæt~после этого~We ate lunch. After that, we walked home.~выражение~Отсылка к предыдущему событию.
in the end~ɪn ði end~в конце концов~In the end, we took a bus.~выражение~Итог после развития ситуации; не буквальное место внутри конца.
on the way home~ɒn ðə weɪ həʊm~по дороге домой~I bought some bread on the way home.~выражение~Home без to после way в этой модели.
by mistake~baɪ mɪˈsteɪk~по ошибке~I took your bag by mistake.~выражение~Обстоятельство случайной ошибки, не буквальный by рядом с mistake.
on purpose~ɒn ˈpɜːpəs~намеренно~She left the window open on purpose.~выражение~Устойчивое выражение намерения; противопоставляется by mistake.
have a good time~hæv ə ɡʊd taɪm~хорошо провести время~We had a good time at the picnic.~выражение~В прошлом had; не «иметь хорошее время» буквально.
take a break~teɪk ə breɪk~сделать перерыв~We took a break after lunch.~выражение~Take → took, устойчивое сочетание.
make a mistake~meɪk ə mɪˈsteɪk~допустить ошибку~I made a mistake in the address.~выражение~Make → made, не do a mistake.
change one's mind~tʃeɪndʒ wʌnz maɪnd~передумать~I changed my mind and stayed home.~выражение~One's меняется на my/your/her; не буквальная замена мозга.
find out~faɪnd aʊt~выяснить; узнать~We found out the opening time.~фразовый глагол~Find → found; узнать сведения, не найти физический предмет снаружи.
turn up~tɜːn ʌp~появиться; прийти (здесь)~Jo turned up at noon.~фразовый глагол~В этом контексте прибытие; у выражения есть и другие значения.
give up~ɡɪv ʌp~сдаться; прекратить попытки~I tried again and didn't give up.~фразовый глагол~Не буквальное движение give вверх; gave up в утверждении.
set off~set ɒf~отправиться в путь~We set off before breakfast.~фразовый глагол~Set не меняет V2; здесь начало поездки, не другие значения.
get back~ɡet bæk~вернуться~We got back at six.~фразовый глагол~Get → got, контекст возвращения.
run out of~rʌn aʊt əv~израсходовать запас; остаться без~We ran out of paper.~фразовый глагол~Не буквальное выбегание из бумаги; ran в прошлом.
look for~lʊk fɔː~искать~I looked for the receipt.~сочетание~Не гарантирует, что предмет найден; отличается от find.
work on~wɜːk ɒn~работать над~We worked on the report.~сочетание~Работа не подтверждает завершённый результат.
try to~traɪ tə~пытаться сделать~I tried to call Noor.~конструкция~Try to + основа; успешность не следует из одной попытки.
because~bɪˈkɒz~потому что~We walked because the bus was late.~слово~Вводит причину, не результат.
so~səʊ~поэтому (связка)~The shop was closed, so we left.~слово~В этом контексте следствие; другие значения изучаются отдельно.
instead~ɪnˈsted~вместо этого~We went to the gallery instead.~слово~Замена первоначального действия.
receipt~rɪˈsiːt~чек~She kept the receipt.~слово~P не произносится; подтверждение покупки.
parcel~ˈpɑːsəl~посылка~I sent a parcel yesterday.~слово~UK IPA; в US часто package, но parcel тоже нормативно.
invitation~ˌɪnvɪˈteɪʃən~приглашение~He wrote an invitation.~слово~An перед начальным гласным звуком.
guide~ɡaɪd~гид; руководство~We talked to a guide.~слово~В этом контексте человек, в техническом — также документ.
neighbour~ˈneɪbə~сосед~My neighbour helped me.~слово~UK neighbour, US neighbor; оба написания нормативны.
fence~fens~забор~We worked on the fence.~слово~Исчисляемый объект; работа не равна завершению.
lock~lɒk~замок (запор)~She tried to fix the lock.~слово~Не castle; здесь дверной механизм.
repair~rɪˈpeə~ремонт; чинить~Ruth finished the chair repair.~слово~Здесь существительное; также глагол repair/repaired.
notice~ˈnəʊtɪs~объявление; уведомление~We read the notice on the door.~слово~Здесь существительное, не глагол «заметить».
reply~rɪˈplaɪ~ответ; отвечать~The supplier sent a reply.~слово~Здесь существительное; глагол reply → replied.
supplier~səˈplaɪə~поставщик~Lena called a supplier.~слово~Не обязательно производитель товара.
result~rɪˈzʌlt~результат~The test result was unclear.~слово~Не заменять фактом попытки или затраченным временем.
attachment~əˈtætʃmənt~вложение~I didn't open the attachment.~слово~В контексте письма прикреплённый файл.
error message~ˈerə ˈmesɪdʒ~сообщение об ошибке~We read the error message.~сочетание~Сочетание из двух слов описывает вид сообщения.
not stated~nɒt ˈsteɪtɪd~не указано~The reason is not stated.~конструкция~Отсутствие данных не равно false.`.split('\n').map((line,index)=>{
  const [word,ipa,translation,context,kind,note]=line.split('~');
  return card('chunk-'+(index+1),word,ipa,translation,context,kind,note);
 })
];

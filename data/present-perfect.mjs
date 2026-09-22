// Original tables and examples. A201 covers Present Perfect Simple, not all perfect constructions.
export const perfectSources=[
 ['British Council: Present Perfect reference','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-perfect'],
 ['British Council: time, states and current results','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect'],
 ['British Council: just, yet, still and already','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect-just-yet-still-already'],
 ['Cambridge: for or since','https://dictionary.cambridge.org/us/grammar/british-grammar/for-or-since'],
 ['Cambridge: Present Perfect / Past Simple and UK/US usage','https://dictionaryblog.cambridge.org/2014/04/09/present-perfect-or-past-simple/'],
 ['Cambridge: get, got and gotten','https://dictionary.cambridge.org/us/dictionary/english/get'],
 ['Oxford: duration, meaning and UK/US pronunciation','https://www.oxfordlearnersdictionaries.com/us/definition/english/duration'],
 ['Cambridge: courier, UK/US pronunciation','https://dictionary.cambridge.org/us/pronunciation/english/courier']
];
export const perfectPersons=[
 ['I','have','I have checked','I have not checked / I haven’t checked','Have I checked?','Yes, I have. / No, I haven’t.'],
 ['you','have','You have checked','You have not checked / You haven’t checked','Have you checked?','Yes, you have. / No, you haven’t.'],
 ['he','has','He has checked','He has not checked / He hasn’t checked','Has he checked?','Yes, he has. / No, he hasn’t.'],
 ['she','has','She has checked','She has not checked / She hasn’t checked','Has she checked?','Yes, she has. / No, she hasn’t.'],
 ['it','has','It has changed','It has not changed / It hasn’t changed','Has it changed?','Yes, it has. / No, it hasn’t.'],
 ['we','have','We have checked','We have not checked / We haven’t checked','Have we checked?','Yes, we have. / No, we haven’t.'],
 ['they','have','They have checked','They have not checked / They haven’t checked','Have they checked?','Yes, they have. / No, they haven’t.']
];
// Base / V2 / V3 / gloss / contrast. Forty selected forms; full irregular reference stays separate.
export const perfectParticiples=[
 ['be','was/were','been','быть','Have been ready, не have was.'],
 ['begin','began','begun','начинать','A = V2, u = V3.'],
 ['break','broke','broken','ломать','Broken после have/has.'],
 ['bring','brought','brought','приносить','V2 и V3 совпадают.'],
 ['build','built','built','строить','Не builded.'],
 ['buy','bought','bought','покупать','Bought, не buyed.'],
 ['choose','chose','chosen','выбирать','Chosen — V3, chose — V2.'],
 ['come','came','come','приходить','V3 совпадает с основой.'],
 ['do','did','done','делать','Did в Past Simple, done после have.'],
 ['drink','drank','drunk','пить','Drank и drunk не взаимозаменяемы.'],
 ['drive','drove','driven','водить','Не have drove.'],
 ['eat','ate','eaten','есть','Eaten — причастие.'],
 ['fall','fell','fallen','падать','Have fallen, не have fell.'],
 ['find','found','found','находить','V2 = V3; значение задаёт конструкция.'],
 ['forget','forgot','forgotten','забывать','Have forgotten — базовая учебная форма.'],
 ['get','got','got / gotten (US)','получать; становиться','Gotten обычно US для получения/изменения; have got «иметь» — отдельная конструкция.'],
 ['give','gave','given','давать','Given после has/have.'],
 ['go','went','gone','уходить; ехать','Been to — опыт посещения; gone to — уехал и не вернулся в заданной ситуации.'],
 ['have','had','had','иметь','Have had: первое have вспомогательное.'],
 ['hear','heard','heard','слышать','V2 и V3 /hɜːd/ в выбранной UK-модели.'],
 ['know','knew','known','знать','Have known, не have knew.'],
 ['leave','left','left','уходить; оставлять','Left также слово «левый»: различай контекст.'],
 ['lose','lost','lost','терять','Lost, не losed.'],
 ['make','made','made','делать; создавать','Made, не maked.'],
 ['meet','met','met','встречать','Met, не meeted.'],
 ['read','read','read','читать','Основа /riːd/, V2 и V3 /red/.'],
 ['run','ran','run','бежать; запускать','Have run, не have ran.'],
 ['see','saw','seen','видеть','Saw — V2; seen — V3.'],
 ['send','sent','sent','отправлять','Не sended.'],
 ['speak','spoke','spoken','говорить','Have spoken, не have spoke.'],
 ['take','took','taken','брать','Taken — V3.'],
 ['teach','taught','taught','обучать','Teach–taught, не taughten.'],
 ['think','thought','thought','думать','Thought, не thinked.'],
 ['wear','wore','worn','носить одежду','Worn после have.'],
 ['write','wrote','written','писать','Written с двойной t.'],
 ['check','checked','checked','проверять','Правильный; -ed /t/, результат проверки отдельно.'],
 ['decide','decided','decided','решать','Правильный; -ed /ɪd/.'],
 ['try','tried','tried','пробовать','Согласная + y → ied.'],
 ['stop','stopped','stopped','останавливать','Краткая гласная + согласная: удвоение p.'],
 ['learn','learnt/learned','learnt/learned','учить; узнавать','Оба варианта нормативны; learned обычен в US.']
];
export const perfectTime=[
 ['just','have/has just + V3','I’ve just joined the call.','Недавно относительно сейчас; не точная дата.'],
 ['already','have/has already + V3','She has already paid the fee.','Уже выполнено; возможна конечная позиция already.'],
 ['yet','вопрос / not … yet','Have they replied yet?','Ожидаемое действие к настоящему моменту.'],
 ['still','still haven’t/hasn’t + V3','We still haven’t found the charger.','Отсутствие результата продолжается; часто дольше ожидаемого.'],
 ['ever','have/has … ever + V3?','Have you ever repaired a keyboard?','Опыт до сейчас; не «всегда».'],
 ['never','have/has never + V3','I’ve never sailed alone.','Отрицательное значение без второго not.'],
 ['once / twice','число случаев до сейчас','They have met twice.','Счёт опыта, не доказательство длительности.'],
 ['so far','итог до настоящего момента','We have tested four pages so far.','Период отсчёта продолжается.'],
 ['for','отрезок времени','I’ve had this bag for six years.','Длительность; for возможен также с Past Simple и будущим.'],
 ['since','начальная точка','She has known him since May.','От этой точки до настоящего в данной модели.'],
 ['since + событие','since + Past Simple','We’ve been friends since we met at college.','Met отмечает событие-начало, не отменяет Perfect в главной части.'],
 ['How long…?','have/has + субъект + V3','How long have you owned this bicycle?','Длительность состояния до сейчас, не дата покупки.'],
 ['this morning / today','сначала установить рамку','I’ve answered six calls today. / I answered one at nine.','Today не выбирает время автоматически; важен фокус сообщения.'],
 ['yesterday / ago / in 2020','Past Simple для датированного события','I sent the form two hours ago.','Временная рамка события завершена; since yesterday устроено иначе.']
];
export const perfectReference={
 id:'present-perfect',title:'Present Perfect Simple: формы, V3 и временная рамка',sources:perfectSources,
 intro:[
  'Have/has + past participle (V3) связывает более раннее событие или состояние с точкой «сейчас»: результат, опыт, итог в открытом периоде, продолжающееся состояние. Это не просто перевод русского совершенного вида и не обязательно «действие только что закончилось».',
  'Семь личных рядов показывают утверждение, отрицание, вопрос и ответ. В реальном ответе Have you…? часто нужно Yes, I have, потому что меняется говорящий. В таблице сохранено лицо исходного подлежащего для сравнения форм. Положительное Yes, I’ve отдельно не употребляется.',
  '40 показательных основ помогают различать V2 и V3; это не полный список неправильных глаголов. Полный учебный охват и варианты смотри в приложении «Неправильные глаголы». У правильных глаголов V2/V3 совпадают; окончание -ed произносится /t/, /d/ или /ɪd/, не всегда отдельным слогом.',
  '14 временных опор — подсказки смысла, не автоматические переключатели времени. С yesterday у самого события нужен Past Simple; since yesterday обозначает начало продолжающейся ситуации. For бывает во всех временных рамках. UK/US допускают разные предпочтения с just/already/yet: американский Past Simple в этих контекстах не ошибка.',
  'Проверка файла не доказывает отсутствие ошибок, отправка не доказывает получение. Present Perfect не даёт права дописывать факты. Present Perfect Continuous, Past Perfect, пассив и модальные perfect-конструкции изучаются дальше; это приложение ограничено базовой активной моделью Simple.'
 ],headers:['Раздел / опора','Форма / основа','Утверждение / V2 / пример','Отрицание / V3 / смысл','Вопрос / значение','Ответ / ограничение'],rows:[
  ...perfectPersons.map(([s,aux,yes,no,q,a])=>['Лицо: '+s,aux+' + V3',yes,no,q,a]),
  ...perfectParticiples.map(([v,p,pp,ru,note])=>['V2 → V3',v,p,pp,ru,note]),
  ...perfectTime.map(([word,pattern,en,note])=>['Временная опора',word,en,pattern,'Смысл и контекст',note])
 ],practice:[
  ['Построй Present Perfect от She / choose a seat.','She has chosen a seat.'],
  ['Отрицание We have received the parcel.','We have not received the parcel. / We haven’t received the parcel.'],
  ['Вопрос They have read the guide.','Have they read the guide?'],
  ['Ответь от себя на Have you checked the address?','Yes, I have. / No, I haven’t. — по реальному результату.'],
  ['Различи wrote / written.','I wrote a note yesterday. I have written a note; you can read it now.'],
  ['Исправь He has went out.','He has gone out.'],
  ['Сделай из I have ran three tests правильную форму.','I have run three tests.'],
  ['Как читается read в I have read it?','/red/, не /riːd/; звучание проверяется отдельно.'],
  ['Поставь just в We have finished lunch.','We have just finished lunch.'],
  ['Поставь yet в Has the bus arrived?','Has the bus arrived yet?'],
  ['Поставь still в She hasn’t answered.','She still hasn’t answered.'],
  ['Различи already и yet в вопросах.','Have you eaten already? может выражать удивление; Have you eaten yet? спрашивает об ожидаемом действии.'],
  ['Заполни: I have never ___ a prize. (win)','won; never не требует haven’t.'],
  ['Человек вернулся из банка. Been to или gone to для его завершённого посещения?','He/She has been to the bank.'],
  ['Человек ушёл в банк и ещё отсутствует.','He/She has gone to the bank.'],
  ['For/since: ___ a week; ___ Wednesday.','for a week; since Wednesday.'],
  ['Исправь I know her since 2020: знакомство продолжается.','I have known her since 2020.'],
  ['Добавь событие-начало: We have lived here since we ___ married. (get)','got; since we got married.'],
  ['Сохрани дату в I have bought it yesterday.','I bought it yesterday.'],
  ['Завершённая работа длилась три года. For запрещён с Past Simple?','Нет: I worked there for three years, then I left.'],
  ['Услышал I just sent it от американца. Исправлять время автоматически?','Нет: это нормативный вариант, если подходит контекст.'],
  ['They have tested the app. Можно ли утверждать, что ошибок нет?','Нет: нужно спросить What have they found? или Have all the checks passed?'],
  ['Спроси и про опыт, и про дату конкретного случая.','Have you ever built a shelf? — Yes. — When did you build it?'],
  ['She’s finished / She’s tired: что сокращено?','В активном сообщении finished — has finished; tired — is tired. Изолированное ’s не даёт ответа без конструкции/контекста.']
 ]
};

// Original teaching reference: a declared set of examples, not every English -ing form.
export const continuousSources=[
 ['British Council: Present Continuous','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-continuous'],
 ['Cambridge: Present Continuous, forms and uses','https://dictionary.cambridge.org/us/grammar/british-grammar/present-continuous-i-am-'],
 ['Cambridge: spelling and verb forms','https://dictionary.cambridge.org/grammar/british-grammar/spelling-and-verb-forms'],
 ['British Council: stative and action meanings','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/stative-verbs'],
 ['Cambridge: Present Simple or Present Continuous','https://dictionary.cambridge.org/grammar/british-grammar/present-simple-or-present-continuous'],
 ['Cambridge: finite and non-finite verbs','https://dictionary.cambridge.org/grammar/british-grammar/finite-and-non-finite-']
];
export const continuousPersons=[
 ['I','I am reading.','I am not reading. / I’m not reading.','Am I reading?','Yes, I am. / No, I’m not.'],
 ['you','You are reading.','You are not reading. / You aren’t reading. / You’re not reading.','Are you reading?','Yes, you are. / No, you aren’t.'],
 ['he','He is reading.','He is not reading. / He isn’t reading. / He’s not reading.','Is he reading?','Yes, he is. / No, he isn’t.'],
 ['she','She is reading.','She is not reading. / She isn’t reading. / She’s not reading.','Is she reading?','Yes, she is. / No, she isn’t.'],
 ['it','It is reading.','It is not reading. / It isn’t reading. / It’s not reading.','Is it reading?','Yes, it is. / No, it isn’t.'],
 ['we','We are reading.','We are not reading. / We aren’t reading. / We’re not reading.','Are we reading?','Yes, we are. / No, we aren’t.'],
 ['they','They are reading.','They are not reading. / They aren’t reading. / They’re not reading.','Are they reading?','Yes, they are. / No, they aren’t.']
];
// Base, target -ing form(s), UK IPA for the first spelling, spelling mechanism.
export const ingForms=`work~working~ˈwɜːkɪŋ~Обычное +ing; третье лицо works здесь не используется.
read~reading~ˈriːdɪŋ~Обычное +ing; гласный настоящего read /riːd/.
play~playing~ˈpleɪɪŋ~Y сохраняется; /eɪ/ и /ɪ/ в соседних слогах.
study~studying~ˈstʌdiɪŋ~Y сохраняется и после согласной: не studing и не studiing.
try~trying~ˈtraɪɪŋ~Не переносить правило tries на -ing; y остаётся.
carry~carrying~ˈkæriɪŋ~Y сохраняется; carries и carrying строятся по разным правилам.
make~making~ˈmeɪkɪŋ~Конечная немая e обычно отпадает.
write~writing~ˈraɪtɪŋ~Убираем e; не writeing и не writting.
take~taking~ˈteɪkɪŋ~Убираем конечную e; k не удваивается.
use~using~ˈjuːzɪŋ~Один глагольный /z/; uses и using имеют разные окончания.
move~moving~ˈmuːvɪŋ~Немая e отпадает; основа заканчивается на /v/.
have~having~ˈhævɪŋ~Форма возможна для действия: having lunch; владение обычно have/has.
come~coming~ˈkʌmɪŋ~Убираем e; не comming.
dance~dancing~ˈdɑːnsɪŋ~Убираем e; US гласный часто /æ/, это не ошибка.
see~seeing~ˈsiːɪŋ~Две e сохраняются; форма зависит от смысла see.
agree~agreeing~əˈɡriːɪŋ~Конечное ee сохраняется; не agreeting или agreing.
dye~dyeing~ˈdaɪɪŋ~E сохраняется, чтобы отличать от dying; dye — красить.
lie~lying~ˈlaɪɪŋ~Конечное ie → y; здесь lie — лежать.
tie~tying~ˈtaɪɪŋ~Ie → y перед ing; не tieing.
die~dying~ˈdaɪɪŋ~Ie → y; die — умирать, dying звучит как dyeing, но значит другое.
run~running~ˈrʌnɪŋ~Короткая ударная гласная + одна конечная согласная: n удваивается.
sit~sitting~ˈsɪtɪŋ~Одна конечная t удваивается в этой структуре.
stop~stopping~ˈstɒpɪŋ~Удваивается p; не путать со stops без удвоения.
swim~swimming~ˈswɪmɪŋ~Удваивается конечная m.
begin~beginning~bɪˈɡɪnɪŋ~Последний слог ударный; конечная n удваивается.
plan~planning~ˈplænɪŋ~Короткая ударная гласная перед одной n: удвоение.
open~opening~ˈəʊpənɪŋ~Последний слог без ударения: n не удваивается.
listen~listening~ˈlɪsənɪŋ~Ударение не на последнем слоге; t в listen не звучит.
visit~visiting~ˈvɪzɪtɪŋ~Последний слог без ударения; t не удваивается.
wait~waiting~ˈweɪtɪŋ~Две гласные буквы в основе: не waitting.
rain~raining~ˈreɪnɪŋ~Обычное +ing, не rainning.
help~helping~ˈhelpɪŋ~В конце основы две согласные; p не удваивается.
fix~fixing~ˈfɪksɪŋ~Конечная x не удваивается.
snow~snowing~ˈsnəʊɪŋ~Конечная w не удваивается.
travel~travelling / traveling~ˈtrævəlɪŋ~UK обычно travelling; US обычно traveling. Оба нормативны.
cancel~cancelling / canceling~ˈkænsəlɪŋ~UK обычно cancelling; US обычно canceling. Смысл одинаков.
panic~panicking~ˈpænɪkɪŋ~Перед ing после c появляется k, сохраняющее /k/.
picnic~picnicking~ˈpɪknɪkɪŋ~C → ck перед ing; не picniccing.
sing~singing~ˈsɪŋɪŋ~В основе и окончании /ŋ/; отдельный /g/ не обязателен.
bring~bringing~ˈbrɪŋɪŋ~Основа bring + ing; ng в основе не отбрасывается.`.split('\n').map(row=>row.split('~'));

export const stateActionPairs=[
 ['think','мнение: I think the room is too small.','обдумывание: I’m thinking about a different room.','Не вставляй about в мнение механически: меняется значение.'],
 ['have','владение: Jo has a camera.','действие: Jo is having lunch.','Having не запрещено для всех значений have.'],
 ['see','понимание: I see your point.','встреча: I’m seeing the organiser this afternoon.','Здесь Continuous передаёт договорённость; её сравнение с will/going to — в будущих темах.'],
 ['taste','вкус: The soup tastes salty.','проба: The cook is tasting the soup.','Свойство блюда и намеренное действие человека.'],
 ['smell','запах: The bread smells fresh.','действие: Jo is smelling the flowers.','Носитель свойства и человек, который нюхает, — разные подлежащие.'],
 ['be','характеристика: Jo is polite.','поведение: Jo is being unusually quiet today.','Being описывает поведение, не рост, возраст или произвольный признак.'],
 ['look','внешний вид: The bag looks heavy.','взгляд: Jo is looking at the bag.','At связывает направление взгляда; это не только замена времени.'],
 ['feel','состояние: I feel tired.','состояние сейчас: I’m feeling tired.','Оба варианта естественны; не каждое слово в списке stative запрещает Continuous.'],
 ['weigh','вес: This parcel weighs two kilos.','измерение: The clerk is weighing the parcel.','Факт массы и действие взвешивания.'],
 ['measure','размер: The table measures two metres.','измерение: Jo is measuring the table.','Metres/meters — варианты; числовой факт и процесс различны.'],
 ['appear','впечатление: The plan appears simple.','выступление: The musician is appearing at a local festival.','Второе — участие/выступление, а не состояние «кажется».'],
 ['enjoy','общее предпочтение: I enjoy reading.','переживание: I’m enjoying this story.','Живое переживание текущей истории естественно в Continuous.']
];

export const continuousReference={
 id:'present-continuous',title:'Present Continuous: be + -ing, написание и выбор значения',
 intro:[
  'Охват: настоящее am/is/are + -ing, отрицания и вопросы, 40 показательных основ для написания, контраст с Present Simple и 12 пар значений. Это учебная карта, не перечень всех английских глаголов. Пассив is being repaired, perfect continuous has been working, будущее с going to и историческое настоящее не объявлены освоенными этой таблицей.',
  'Continuous показывает ситуацию как разворачивающуюся: Jo is writing a message. Это может быть момент наблюдения, временный проект вокруг настоящего или изменение: The queue is getting longer. Временный проект не требует, чтобы человек делал именно это каждую секунду. Simple сообщает привычку, факт или состояние; ни «навсегда», ни «одна секунда» не являются обязательной длительностью этих форм.',
  'Утвердительная модель: подлежащее + am/is/are + ing. В отрицании not относится к be, в вопросе be ставится перед подлежащим; do/does не добавляются. Вопросительная группа занимает начало: What are you writing? Короткий ответ повторяет be без ing: Yes, I am. Таблица лиц показывает формы одного лица, а не готовый диалог: Are you reading? обычно требует от собеседника I am или we are.',
  'Написание и звук — разные проверки. Y сохраняется: studying, trying; немая e обычно исчезает: making, writing; ie превращается в y: lying, tying. Удвоение согласной зависит от строения основы и ударения, а не только последней буквы: running / opening. Исключения и региональные формы указаны отдельно. В окончании учебное /ɪŋ/, не обязательное /ɪŋɡ/; нормативные акценты и разговорные варианты не оцениваются по ASR-тексту.',
  'Now, today, always и this week помогают читать контекст, но не выбирают форму автоматически. I know now остаётся состоянием знания; I’m working every evening this week описывает временный повторяющийся режим. I’m always losing this pen может выражать отношение к повторению, не непрерывную потерю. Нельзя придумывать раздражение только из always: тон и контекст могут выражать и одобрение.',
  'Смотри на значение глагола в конкретной фразе: think как мнение и think about как обдумывание, have как владение и have lunch как действие. Нейтральные know/need/want/belong обычно остаются в Simple даже сейчас. Feel допускает оба варианта состояния. В свободном описании возможны разные обоснованные решения: такие ответы проверяются по смыслу, не одним ключом.'
 ],headers:['Группа / основа','Форма / значение','Пример / IPA','Механизм и ограничение'],
 rows:[
  ...continuousPersons.map(([person,positive,negative,question,short])=>[person,positive+' '+negative,question,short]),
  ...ingForms.map(([base,form,ipa,note])=>[base,form,'/'+ipa+'/',note]),
  ...stateActionPairs,
  ['Сейчас','am/is/are + ing','The helper is opening the box.','Процесс в момент наблюдения, не обычная обязанность.'],
  ['Временная ситуация','Continuous вокруг настоящего','Jo is working in another room this week.','Не обязательно в момент речи; срок ограничен контекстом.'],
  ['Изменение','Процесс развития','The room is getting warmer.','Показано изменение, не только текущая температура.'],
  ['Привычка','Present Simple','Jo opens the room every morning.','Обычный порядок сам по себе не доказывает сегодняшний случай.'],
  ['Отрицание','Subject + be + not + ing','Jo isn’t opening the room.','Не Jo doesn’t opening; другая вспомогательная модель.'],
  ['Вопрос','Be + subject + ing?','Is Jo opening the room?','Не Does Jo opening и не Is Jo opens.'],
  ['Вопрос к детали','Wh + be + subject + ing?','What is Jo opening?','Группа what/which box и прочие не разрываются.'],
  ['Повторение с отношением','be + always + ing','You’re always helping other people!','Может быть одобрением, не только жалобой; точный счёт не задан.'],
  ['Будущая договорённость','Continuous + ясный будущий контекст','We’re meeting the guide tomorrow.','Не общее предсказание; сравнение будущих моделей продолжается в A105/A203.'],
  ['Не всякое -ing — это Continuous','Нужна вся конструкция и функция','Reading helps me learn. / I am reading.','В первой фразе reading называет деятельность; вторая показывает процесс.']
 ],
 practice:[
  ['Разложи We are checking the file на подлежащее, согласование и действие.','We — подлежащее, are — личная форма be, checking — ing-форма действия; file не управляет are.'],
  ['Сравни The helper near the boxes is waiting и The helpers near the box are waiting.','Is/are выбирает helper/helpers, не существительное внутри уточнения.'],
  ['Запиши ing-формы study, make, run, open.','Studying, making, running, opening. Сохраняем y, убираем e, удваиваем по структуре и ударению.'],
  ['Сравни lie/lying и dye/dyeing: почему написание различается?','Ie меняется на y в lie; dye сохраняет e, отличаясь от die/dying. Dying и dyeing могут звучать одинаково.'],
  ['Назови UK/US формы от travel и cancel.','Travelling/traveling; cancelling/canceling. Это допустимые региональные варианты.'],
  ['Отрицай I am writing; затем сократи.','I am not writing. I’m not writing. Стандартная начальная модель не I amn’t writing.'],
  ['Сделай вопрос из The visitors are waiting outside.','Are the visitors waiting outside? Смысловой waiting остаётся после подлежащего.'],
  ['Ответь от себя на Are you listening? положительно и кратко.','Yes, I am. Не Yes, I’m: утвердительная связка не сокращается в конце такого ответа.'],
  ['В I’m studying English this month обязательно ли человек читает учебник в эту секунду?','Нет: описан текущий проект вокруг настоящего, в нём могут быть перерывы.'],
  ['Выбери модель нейтрального знания сейчас: I know / I am knowing.','I know. Now не отменяет обычного состояния знания.'],
  ['Объясни The soup tastes good / The cook is tasting the soup.','Сначала свойство блюда, затем действие повара, пробующего вкус.'],
  ['Сравни I think it is useful / I’m thinking about it.','Мнение и процесс обдумывания; это не просто постоянное и временное мнение.'],
  ['Всегда ли I’m feeling tired нужно исправлять на I feel tired?','Нет: оба варианта естественны. Выбор и оценка зависят от контекста.'],
  ['Почему You’re always helping us не обязательно жалоба?','Повторение может быть выделено с благодарностью; отрицательное отношение нельзя вывести без контекста.'],
  ['Напиши шесть фраз об обычной и временной работе вымышленного героя.','Jo works at a library. Jo usually checks the shelves. This week, Jo is helping at a book fair. Jo is carrying a box now. Two visitors are waiting nearby. Jo doesn’t know the finish time yet. Допустимы другие согласованные описания.'],
  ['Проведите диалог: обычная обязанность, текущая задача и неизвестная деталь.','What do you usually do? What are you doing now? Who is helping you? Нужны реальные ответы партнёра и уточнение; письменная модель не подтверждает произношение.'],
  ['Произнеси I’m writing / I’m not writing; слушатель различает отрицание.','Нужны реальное аудио, слышимое not и /ɪŋ/; ASR не заменяет фонетической оценки.'],
  ['Через 7 дней опиши новую сцену без старых предложений.','Укажи привычку, текущий процесс и состояние, затем ответь на неожиданный вопрос. Будущий результат заранее не записывается как успешный.']
 ],sources:continuousSources
};

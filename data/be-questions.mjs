// Original teaching tables. Present be is the scope, not every English question pattern.
export const beQuestionSources=[
 ['British Council: present simple be','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be'],
 ['Cambridge: contractions','https://dictionary.cambridge.org/grammar/british-grammar/contractions'],
 ['Cambridge: yes/no questions','https://dictionary.cambridge.org/uk/grammar/british-grammar/yes-no-questions'],
 ['Cambridge: wh-questions','https://dictionary.cambridge.org/grammar/british-grammar/questions-wh-questions'],
 ['Cambridge: yes and negative questions','https://dictionary.cambridge.org/grammar/british-grammar/yes'],
 ['Cambridge: ground floor и различия UK/US','https://dictionary.cambridge.org/dictionary/english/ground-floor'],
 ['Cambridge: first floor и различия UK/US','https://dictionary.cambridge.org/dictionary/english/first-floor'],
 ['Cambridge: произношение duration','https://dictionary.cambridge.org/pronunciation/english/duration']
];

// Person, affirmative, negative alternatives, question, positive answer, negative answer.
// Answers keep the grammatical person here; conversation can change you into I/we.
export const beForms=[
 ['I','I am ready.','I am not ready. / I’m not ready.','Am I ready?','Yes, I am.','No, I am not. / No, I’m not.'],
 ['you','You are ready.','You are not ready. / You aren’t ready. / You’re not ready.','Are you ready?','Yes, you are.','No, you are not. / No, you aren’t. / No, you’re not.'],
 ['he','He is ready.','He is not ready. / He isn’t ready. / He’s not ready.','Is he ready?','Yes, he is.','No, he is not. / No, he isn’t. / No, he’s not.'],
 ['she','She is ready.','She is not ready. / She isn’t ready. / She’s not ready.','Is she ready?','Yes, she is.','No, she is not. / No, she isn’t. / No, she’s not.'],
 ['it','It is ready.','It is not ready. / It isn’t ready. / It’s not ready.','Is it ready?','Yes, it is.','No, it is not. / No, it isn’t. / No, it’s not.'],
 ['we','We are ready.','We are not ready. / We aren’t ready. / We’re not ready.','Are we ready?','Yes, we are.','No, we are not. / No, we aren’t. / No, we’re not.'],
 ['they','They are ready.','They are not ready. / They aren’t ready. / They’re not ready.','Are they ready?','Yes, they are.','No, they are not. / No, they aren’t. / No, they’re not.']
];

// Phrase, information requested, original be question, answer type / limitation.
export const questionWords=[
 ['what','что; какой (открытый запрос)','What is your role?','I am a tester. Название роли, не yes/no.'],
 ['who','кто; личность человека','Who is the host?','Jo is the host. Не угадывай роль по имени.'],
 ['where','где; местоположение','Where are the keys?','They are beside the screen. Where ... from? спрашивает происхождение.'],
 ['when','когда; день / момент','When is the next meeting?','It is on Thursday. Для точного часа удобнее what time.'],
 ['why','почему; причина','Why is the screen dark?','Because it is off. Причина, не ещё одно место.'],
 ['which','который из заданного набора','Which room is ours, A or B?','Room B. Выбор ограничен контекстом.'],
 ['whose','чей; принадлежность','Whose notebook is this?','It is Jo’s. Whose не сокращение who is.'],
 ['how','как; состояние / способ','How are you today?','I am well. Для инструкций о действии понадобятся другие глаголы.'],
 ['how old','возраст','How old is this building?','It is forty years old. Возраст выражается be, не have.'],
 ['what time','точное время','What time is the call?','It is at ten fifteen. Не смешивать с длительностью.'],
 ['how many','сколько исчисляемых единиц','How many chairs are free?','Four chairs are free. Вопросительная группа включает chairs.'],
 ['how much','цена; количество неисчисляемого','How much is this notebook?','It is three pounds. Для количества: How much water is enough?'],
 ['how far','расстояние','How far is the office from here?','It is two kilometres away. Не время в пути.'],
 ['how long','длительность; физическая длина','How long is the break?','It is ten minutes long. Уточняй контекст: длина предмета или время.']
];

export const beQuestionReference={
 id:'be-questions',title:'Порядок слов, be, отрицания и вопросы: опорная карта',
 intro:[
  'Область охвата: настоящее am/is/are как смысловая связка, все семь базовых местоименных рядов, отрицания, общие вопросы, краткие ответы и основные вопросительные группы. Это не полная карта всех типов вопроса во всех временах: do/does, did, модальные, косвенные вопросы и question tags изучаются дальше в A101, A104, A105 и B104. Формы be как вспомогательного в Continuous/Passive также имеют собственные топики.',
  'В утверждении сначала назови, о ком или о чём речь, затем поставь подходящее be, затем признак, роль или место. В группе “the keys in this box” главное слово keys; соседнее box не превращает are в is. В русском связка настоящего часто отсутствует, но “The keys here” не заменяет нейтральное полное “The keys are here”. Это не запрет коротких заголовков и живых реплик: здесь тренируются полные предложения.',
  'Not ставится после am/is/are. Сокращение не убирает отрицание: is not → isn’t или he is not → he’s not. В базовой международной модели I am not → I’m not; диалектные формы не объявляются характеристикой интеллекта или качества акцента. В нейтральной письменной практике используем указанные формы. Don’t не добавляется к обычному утверждению с be; Don’t be late — другой механизм, отрицательное побуждение из P02.',
  'Общий вопрос меняет местами be и ВСЮ группу подлежащего: The two keys in my bag are yours → Are the two keys in my bag yours? Слова внутри группы не переставляются. В кратком ответе остаются yes/no, местоимение и be. Конечное положительное be не сокращай: Yes, she is. Отрицание допускает No, she isn’t / No, she’s not / No, she is not. В следующих строках таблица показывает формы одного лица; это НЕ готовые диалоги. Если спрашивают тебя Are you ...?, отвечаешь I, а от имени своей группы — we.',
  'Wh-группа обозначает недостающую информацию: Where + are + the keys? — место; What colour + is + the cable? — цвет. Не разрывай what colour, how old или how many chairs. В Who is ready? само who занимает место неизвестного участника: не нужно второе he/they. Но в Who are these people? известное these people требует are. Не применяй лозунг “после who всегда is” ко всем вопросам.',
  'Отрицание — утверждение об отсутствии свойства, а не отсутствие данных. “The room is not open” сообщает факт; “I’m not sure” признаёт неизвестное. При вопросе Isn’t it open? отвечай по факту: Yes, it is — открыто; No, it isn’t — закрыто. Полная фраза снимает возможное межъязыковое недоразумение. Интонация помогает выразить уточнение или удивление, но не заменяет смысл и грамматику; речь оценивается по слышимому ответу, не по ASR-тексту.'
 ],
 headers:['Форма / задача','Модель / смысл','Пример / вопрос','Ограничение / ответ'],
 rows:[
  ...beForms.map(([person,positive,negative,question])=>[person,positive,negative,question]),
  ...beForms.map(([person,,,question,yes,no])=>['Краткий ответ: '+person,question,yes,no+' В диалоге проверь смену лица.']),
  ...questionWords,
  ['Утверждение','Подлежащее + be + характеристика','The small room is quiet.','Не теряй is при переводе с русского.'],
  ['Согласование','Главное слово группы выбирает is/are','The label on these boxes is wrong.','Главное label, не ближайшее boxes.'],
  ['Отрицание','Подлежащее + be + not + остальное','The labels are not correct.','Not после be; смысл: факт отрицания.'],
  ['Вопрос да/нет','Be + вся группа подлежащего + остальное?','Are the labels on this box correct?','Не добавлять do/does.'],
  ['Вопрос к месту','Where + be + подлежащее?','Where is the quiet room?','Обычный ответ содержит место.'],
  ['Вопрос к участнику','Who + be + характеристика?','Who is absent today?','Who занимает незаполненное место участника.'],
  ['Смена говорящего','Are you ready? → ответ от себя','Yes, I am. / No, I’m not.','От имени группы: Yes, we are. / No, we aren’t.'],
  ['Отрицательный вопрос','Isn’t the door open?','Yes, it is. It is open.','No, it isn’t. It is closed. Yes/no выбирай по реальному состоянию.'],
  ['Выбор','Is the room upstairs or downstairs?','It is upstairs.','Выбери альтернативу; одно yes часто не решает задачу.'],
  ['Неизвестность','Не придумать недостающий факт','I’m not sure. Which room?','Not stated в задачах чтения не означает false.'],
  ['Уточнение','Сохранить разговор после непонимания','Sorry, which day? Thursday or Friday?','Короткая реплика естественна; полную форму тренируй отдельно.'],
  ['Граница правила','Состояние и действие — разные модели','She is busy. / She works here.','Не She is work here. Вопросы с works изучаются в A101.']
 ],
 practice:[
  ['Вставь be: The colour of these cards ___ green.','Is: главное colour — единственное; cards внутри уточнения.'],
  ['Отрицай The visitors are downstairs, сохранив все слова. Дай полную и обе сокращённые модели с they.','The visitors are not downstairs. They aren’t downstairs. They’re not downstairs.'],
  ['Преврати The keys in this drawer are spare в нейтральный общий вопрос.','Are the keys in this drawer spare? Вся группа keys in this drawer остаётся вместе.'],
  ['Are you the organiser? Ты говоришь только о себе; ответ положительный.','Yes, I am. Не Yes, you are и не Yes, I’m.'],
  ['Are these your notes? Заметки не твои.','No, they aren’t / No, they’re not / No, they are not. Во всех вариантах множественное they.'],
  ['Задай вопрос к словам in room D: The printer is in room D.','Where is the printer? Не Where the printer is? как самостоятельный нейтральный вопрос.'],
  ['Задай вопрос о возрасте здания; сохрани полную группу how old.','How old is the building?'],
  ['Объясни разницу Who is outside? и Who are those people?','Первый ищет неизвестного участника; во втором known plural those people требует are.'],
  ['В ответ на вопрос Why is the desk wet? сообщи причину, а не место.','Например: Because the cup is broken. Образец не единственный возможный.'],
  ['В тексте сказано только “The meeting is on Tuesday”. Правда ли, что оно в 11:00?','Не указано. Не yes и не доказанное no; уточни What time is the meeting?'],
  ['Isn’t the screen on? Экран включён. Дай ясный ответ.','Yes, it is. The screen is on. Отрицательная форма вопроса не меняет факт.'],
  ['Is the break five or ten minutes? Перерыв длится десять минут.','It is ten minutes. Выбор альтернативы, не просто yes.'],
  ['Исправь две разные ошибки: Does she is available? Yes, she’s.','Is she available? Yes, she is. Первая — лишнее do; вторая — сокращение в конце положительного краткого ответа.'],
  ['Напиши пять реплик: запрос места, ответ, уточнение комнаты, ответ, подтверждение.','Например: Where is the session? In room F. Is that upstairs? Yes, it is. Thank you, room F upstairs. Проверяются смысл, роли и отсутствие придуманных данных.'],
  ['Проговори Yes, I am и No, I’m not; партнёр должен понять разные факты без текста.','Проверяются слышимое be/отрицание и понятность. ASR-совпадение не оценивает произношение.'],
  ['Вернись через неделю: составь новый диалог о месте и времени вымышленной встречи.','Не копировать прежний диалог; запросить, подтвердить, уточнить и письменно резюмировать. Это будущая проверка, не автоматически пройденная.']
 ],
 sources:beQuestionSources
};

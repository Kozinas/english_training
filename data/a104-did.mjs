import {bank,exam,examples,goal} from './unit-tools.mjs';
import {pastSources} from './past-simple.mjs';
export default {
 id:'A104-did',topic:'A104',title:'Did, отрицания, вопросы и связный рассказ о прошлом',prerequisites:['A104-actions'],references:['past-simple','be-questions','irregular'],sources:pastSources,
 goals:[goal('form','Строить отрицания и вопросы с did + основа','forms'),goal('role','Различать подлежащее/объект вопроса и роли ответа','questions'),goal('evidence','Восстанавливать события и границы известного','reading'),goal('story','Писать рассказ и поддерживать разговор о прошлом','production')],
 explanation:[
 {title:'Прошедшее уже выражено в did',text:'Утверждение She called превращается в She did not call / She didn’t call. Форму прошлого теперь несёт did, поэтому смысловой глагол возвращается к основе: call, go, buy, have. Не didn’t called и не didn’t went. Did одинаково для всех лиц: I didn’t go, she didn’t go, they didn’t go. Отсутствие действия само по себе не сообщает причину: I didn’t call может означать отсутствие времени, решения или возможности, но причина не известна без контекста.'},
 {title:'Общий вопрос и краткий ответ',text:'Порядок: Did + подлежащее + основа + остальное? You bought it → Did you buy it? Отвечающий выбирает лицо с собственной точки зрения: Did you buy it? — Yes, I did / No, I didn’t. Если you обозначает всю вашу группу: Yes, we did. На Did Sam and Pat come? — Yes, they did. Не нужно повторять went в кратком ответе Yes, I did. В отрицательном Didn’t you call? ответ Yes, I did подтверждает звонок, No, I didn’t — его отсутствие. Дополнительная фраза помогает избежать русского переноса «да, не звонил».'},
 {title:'Be остаётся отдельной системой',text:'Для прошлого состояния используй was/were: Was she tired? She wasn’t tired. Для действия: Did she walk? She didn’t walk. Не Did she was tired? и не Was she go home? Смысловой have в нейтральном вопросе этой модели также использует did: Did you have breakfast? — Yes, I did. У do два возможных места: What did you do? Первое did — помощник времени и вопроса, второе do — смысловое «делать». Did you do the exercise? не содержит лишнего do.'},
 {title:'Специальный вопрос держит вопросительную группу целиком',text:'Where did you go? When did they arrive? Why did she leave? How did he travel? How much did it cost? What time did the lesson start? После всей группы what time/how much ставь did, затем подлежащее и основу. Не Where you went? и не What did time it start? Вопросительное слово выбирается по пробелу: Where — место, When — время, Why — причина, How — способ. В ответе можно использовать короткую группу At six, но в задании на полное предложение нужно The lesson started at six.'},
 {title:'Who: кто сделал или кого увидели?',text:'Sam called Lee. Если неизвестен деятель Sam, who занимает место подлежащего: Who called Lee? Обычный нейтральный вопрос здесь без did, а глагол остаётся в V2. Если известен Sam, но неизвестен получатель звонка: Who did Sam call? Who — объект, поэтому нужен did + call. В письменном формальном стиле возможен whom для объекта; на этом уровне who нормативно. Правило «после who никогда нет did» неверно: всё зависит от роли. Отрицательные вопросы и специальное усиление могут иметь did и с субъектом; здесь отрабатываем обычное нейтральное Who called? без усиления.'},
 {title:'Отрицание, противоречие и неизвестное',text:'The bus didn’t stop at our street прямо отрицает остановку на нашей улице, но не говорит, что автобус нигде не останавливался. I didn’t finish the report прямо говорит о незавершении; The note doesn’t mention completion оставляет результат неизвестным. Различай эти случаи в true/false/not stated. Не заменяй somebody didn’t come на nobody came: во втором случае отрицается приход всех. Если рассказ сообщает причину because the shop was closed, можно её пересказать; если указано только then, причина не доказана.'},
 {title:'Повествование: временная опора, связи и проверяемость',text:'Начни с времени, места и участников. Затем сообщи основные действия, при необходимости добавь отрицание и причину; закончи известным результатом или вопросом. First, then, after that, finally помогают читателю, но не обязательны в каждом предложении. Указание after lunch относится к моменту после обеда, а не к длительности; for an hour — длительность, an hour ago — удалённость от сейчас. Рассказу нужна связность: если два человека одного пола, повтори имя там, где he/she неоднозначно. Не украшай пересказ вымышленными причинами.'},
 {title:'Живой разговор и работа над ошибками',text:'У диалога есть ответ на новое уточнение, а не только чтение заранее составленных реплик. Слушатель спрашивает о времени, участнике, действии или результате. Говорящий отвечает по имеющимся фактам; если информации нет, I don’t know или The note doesn’t say честнее догадки. Произноси did/didn’t так, чтобы отрицание было понятно: обычно /dɪd/ и /ˈdɪdənt/, с допустимыми изменениями в связной речи. После обратной связи исправь 2–3 приоритетные ошибки и создай новый пример. После этой подтемы итоговый тест включает целый текст и реальный обмен; закрытая часть сама не подтверждает освоение.'},
 {title:'Лексические опоры к чтению и аудио',text:'Опоры к текстам: coastal town — прибрежный город; opening hours — часы работы; notice — объявление; gallery — галерея; harbour — гавань; instead — вместо этого; absence — отсутствие; store cupboard — кладовая/шкаф для хранения; invite — приглашать; catch a train → caught a train — сесть/успеть на поезд. He did not read it until ten означает «он прочитал это только в десять»: до десяти чтения не было, а не «он вообще не прочитал». При пересказе отмечай не только отрицание, но и его границу. Редкие слова в тексте можно проверять по словарю; цель этого чтения — действия, участники и связи между ними.'}
 ],
 examples:examples(`I didn’t take a taxi.~Я не брал такси.~Didn’t + основа take.
She did not buy it.~Она этого не купила.~Полная форма отрицания нормативна.
They didn’t have lunch.~Они не обедали.~Have — основа после didn’t.
We didn’t finish the report.~Мы не закончили отчёт.~Прямое отрицание завершения.
Did you see the sign?~Ты видел табличку?~Did перед субъектом, see без V2.
Yes, I did.~Да, видел.~Отвечаю за себя, не за you.
No, we didn’t.~Нет, не видели.~Отвечаем за свою группу.
Did she leave early?~Она ушла рано?~Leave, не left после did.
What did you do?~Что ты сделал?~Did — помощник, do — действие.
When did the train arrive?~Когда прибыл поезд?~When + did + субъект + arrive.
What time did the shop close?~Во сколько закрылся магазин?~Вопросительная группа what time целиком.
How much did the book cost?~Сколько стоила книга?~Cost здесь основа после did.
Why did you walk?~Почему ты пошёл пешком?~Запрашивается причина.
I walked because the bus was late.~Я пошёл пешком, потому что автобус опоздал.~Явно названная причина.
The bus was late, so I walked.~Автобус опоздал, поэтому я пошёл пешком.~So вводит следствие.
Who called Nina?~Кто позвонил Нине?~Who — субъект, called остаётся V2.
Who did Nina call?~Кому позвонила Нина?~Nina — субъект, who — объект.
Who opened the window?~Кто открыл окно?~Нет did в нейтральном субъектном вопросе.
Which window did Pat open?~Какое окно открыл Пэт?~Вопрос об объекте window.
Was the window open?~Окно было открыто?~Состояние с was, не действие с did.
Did Pat open the window?~Пэт открыл окно?~Действие с did.
Didn’t you tell her? — Yes, I did.~Разве ты ей не сказал? — Сказал.~Yes подтверждает сообщение.
Didn’t you tell her? — No, I didn’t.~Разве ты ей не сказал? — Не сказал.~No отрицает сообщение.
I called at nine; the reason is not in my notes.~Я позвонил в девять; причина в заметках не указана.~Время известно, причина нет.`),
 banks:[
 bank('A104-did','forms','Отрицания, общие вопросы и система be','practice',`short~form~She didn't ___ the address. Knew/know?~know~После did нужна основа know.
short~form~Did they ___ the meeting? Joined/join?~join~Did уже выражает прошлое.
short~form~We didn't ___ breakfast. Had/have?~have~Have возвращается к основе.
short~form~Did you ___ the task? Did/do?~do~Did помощник; do смысловой глагол.
short~form~___ they at the concert? Did/were?~were~Местонахождение с be.
short~form~___ they enjoy the concert? Did/were?~did~Действие enjoy с did.
sentence~form~Сделай отрицательным: I found the receipt.~I didn't find the receipt.|I did not find the receipt.~Found → didn't find.
sentence~form~Сделай отрицательным: Jo ate the cake.~Jo didn't eat the cake.|Jo did not eat the cake.~Ate → didn't eat.
sentence~form~Сделай отрицательным: They were angry.~They weren't angry.|They were not angry.~Were сохраняется; did не нужен.
sentence~form~Сделай общим вопросом: She sent the parcel.~Did she send the parcel?~Sent → did send.
sentence~form~Сделай общим вопросом: They went upstairs.~Did they go upstairs?~Went возвращается к основе go после did.
sentence~form~Сделай общим вопросом: The room was warm.~Was the room warm?~Be переставляется перед подлежащим.
sentence~form~Исправь: Did you bought a ticket?~Did you buy a ticket?~После did не bought, а buy.
sentence~form~Исправь: He didn't took my bag.~He didn't take my bag.~Take — основа после didn't.
sentence~form~Исправь: Did she was at work?~Was she at work?~У состояния нет did перед was.
sentence~form~Исправь: We didn't were late.~We weren't late.|We were not late.~Система be: were not, не didn't were.
sentence~form~Переведи: Ты сделал домашнее задание? Используй do.~Did you do the homework?|Did you do your homework?~Два do выполняют разные функции.
sentence~form~Переведи: Она не позвонила вчера. Используй call.~She didn't call yesterday.|She did not call yesterday.~Did not + call + время.
text~form~Сопоставь две мысли: «магазин не был открыт» и «они не открыли магазин».~The shop wasn't open. They didn't open the shop.~Состояние be и активное действие open не смешиваются.
text~form~Сделай три сообщения: он пришёл, она не пришла, пришли ли они?~He came. She didn't come. Did they come?~V2 только в первом нейтральном утверждении.`,'','Формы did'),
 bank('A104-did','questions','Роли, специальные вопросы и краткие ответы','practice',`sentence~role~Sam called Lee. Спроси о Sam, сохрани Lee.~Who called Lee?~Who заменяет подлежащее Sam.
sentence~role~Sam called Lee. Спроси о Lee, сохрани Sam.~Who did Sam call?|Whom did Sam call?~Who/whom — объект; Sam остаётся субъектом.
sentence~role~Jo broke the cup. Спроси о Jo.~Who broke the cup?~В нейтральном субъектном вопросе V2 без did.
sentence~role~Jo broke the cup. Спроси о предмете.~What did Jo break?~What — объект, нужна основа break.
sentence~role~The meeting started at six. Спроси время через What time.~What time did the meeting start?~Вся группа what time перед did.
sentence~role~We went to Bristol. Спроси место через Where и you.~Where did you go?~Собеседнику задаётся вопрос с you, основа go.
sentence~role~О себе: Did you call Max? Ответь кратко утвердительно.~Yes, I did.~I вместо обращённого к тебе you.
sentence~role~О всей вашей группе: Did you finish? Ответь кратко отрицательно.~No, we didn't.|No, we did not.~We — ответ от лица всей группы.
sentence~role~Did the children eat? Ответь кратко утвердительно.~Yes, they did.~Children → they; краткий ответ с did.
sentence~role~Didn't you send it? Ты отправил. Краткий ответ.~Yes, I did.~Yes подтверждает отправку независимо от отрицательной формы вопроса.
sentence~role~Didn't you see it? Ты не видел. Краткий ответ.~No, I didn't.|No, I did not.~No отрицает факт видения.
sentence~role~Исправь порядок: Where you went on Monday?~Where did you go on Monday?~Where + did + you + go.
text~role~Текст «Pat helped Kim». Напиши два разных who-вопроса и ответы.~Who helped Kim? Pat did. Who did Pat help? Pat helped Kim.~Разные роли who, известный участник не исчезает.
speech~role~Партнёр случайно выбирает who-вопрос о Sam/Lee. Ответь по факту Sam called Lee и задай встречный вопрос.~Who called Lee? Sam did. Who did Sam call? Lee.~Реальное различение ролей на слух, не чтение обоих ответов заранее.`,'','Вопросы и роли'),
 bank('A104-did','reading','Чтение: поездка с изменением маршрута','reading',`short~evidence~В какой день они поехали? Одно слово.~Friday~В тексте дан Last Friday.
short~evidence~Кто проверил сайт? Имя.~Mara~Mara checked the museum website.
short~evidence~Кто купил билеты на поезд? Имя.~Eli~Eli bought the train tickets.
short~evidence~Они посетили музей: true/false/not stated?~false~They didn't visit the museum — явное отрицание.
short~evidence~Музей был закрыт из-за ремонта: true/false/not stated?~not stated~Причина закрытия не сообщается.
short~evidence~Какой объект они посетили вместо музея? Gallery/market/castle?~gallery~They walked to a small gallery instead.
short~evidence~Кому позвонила Mara? Имя.~Noor~Mara called their friend Noor.
short~evidence~Noor присоединилась к ним в тот день: true/false/not stated?~false~Noor didn't join them.
short~evidence~Указано ли, почему Noor не пришла: yes/no?~no~She gave no reason in the message.
sentence~role~По чтению спроси, кто позвонил Noor.~Who called Noor?~Субъектный who + called.
text~evidence~В 4 предложениях раздели закрытие, план, новый маршрут и неизвестную причину.~The museum was closed when they arrived. They didn't visit it. They went to a gallery instead. The reason for the closure is not stated.~Не подменять closed вымышленным ремонтом.
text~story~Напиши 80–110 слов о поездке от лица Mara. Включи отрицание и объясни предел сведений о Noor.~Last Friday Eli and I took a train to a coastal town. I checked the museum website before the trip, and Eli bought the tickets. We arrived at eleven, but the museum was closed. We didn't visit it. Instead, we walked to a small gallery and looked at photographs. I called Noor and invited her to meet us. She didn't join us and gave no reason in her message. After lunch we walked along the beach. We returned to the station at four and took the train home.~80–110 слов, корректная смена лица, факты без выдуманных причин.`,'Last Friday Mara and Eli took a train to a coastal town. They planned to visit the local museum. Before the trip, Mara checked its website and Eli bought the train tickets. The website listed Friday opening hours, but when they arrived at eleven the museum was closed. A notice on the door said only that it was closed that day. It gave no reason. They did not visit the museum.\n\nInstead, they walked to a small gallery nearby. They looked at photographs of fishing boats and talked to a guide. The guide told them about an old harbour, but they did not have enough time to visit it. Mara called their friend Noor and invited her to meet them for lunch. Noor did not join them. She sent a short message but gave no reason for her absence.\n\nMara and Eli ate lunch in a café beside the gallery. Then they walked along the beach and took some photographs of the sea. At four they returned to the station and caught a train home. Eli wrote a note about the trip that evening. He recorded what they did and what they did not do. He left the reasons for the museum closure and Noor’s absence as unknown, because the available messages did not explain them.','Чтение'),
 bank('A104-did','listening','Аудирование: кто получил сообщение','listening',`short~evidence~Во сколько началась встреча? Цифрами.~9:30|nine thirty|half past nine~Встреча started at nine thirty.
short~evidence~Кто отправил сообщение Lee? Имя.~Dana~Dana sent Lee the message.
short~evidence~Lee прочитал сообщение до встречи: true/false/not stated?~false~He didn't read it until ten.
short~evidence~Какой предмет понадобился группе? Одно слово.~key|a key~They needed the key to the store cupboard.
short~evidence~Кто принёс ключ? Имя.~Mo~Mo brought the key at nine forty-five.
short~evidence~Lee помог принести коробки: true/false/not stated?~true~He helped us carry the boxes later.
short~evidence~Ключ принесли в 9:15: true/false/not stated?~false~Время nine forty-five, не quarter past.
sentence~role~По аудио спроси, кто отправил сообщение Lee.~Who sent Lee the message?~Who — субъект, sent остаётся V2.
text~evidence~Напиши 3 предложения: что Lee не сделал вовремя и что всё же сделал позже.~Lee didn't read the message before the meeting. He read it at ten. Later he helped carry the boxes.~Отрицание конкретного действия не равно «он вообще не помогал».
speech~story~Партнёр спрашивает: Did Lee help? Who brought the key? Ответь по записи и добавь один новый вопрос.~Yes, he did. Mo brought the key. What time did the meeting start?~Реальные ответы и встречный вопрос, различение лиц и времени.`,'Our meeting started at nine thirty yesterday. Dana sent Lee a message at eight, but he did not read it until ten. At the meeting we needed the key to the store cupboard. I called Mo at nine thirty-five and asked for help. Mo brought the key at nine forty-five, so we opened the cupboard and took out some boxes. Lee arrived later and helped us carry the boxes to the front room. He did not bring the key, and he did not read the message before the meeting. That does not mean he did nothing: his later help is part of the record too. We finished moving the boxes before lunch. The exact finishing time is not in my notes.','Аудирование'),
 bank('A104-did','production','Рассказ, отчёт и живое интервью','writing',`text~story~Напиши 3 предложения о вымышленном неудачном походе в магазин: план, отрицание покупки, известная причина.~I went to the shop yesterday. I didn't buy any bread because the bread shelf was empty. I bought some rice instead.~Причина явно придумана для вымышленного рассказа, а не приписана источнику.
text~role~Создай 4 вопроса собеседнику о вчерашнем дне: место, действие, время и участник.~Where did you go? What did you do there? What time did you arrive? Who went with you?~Три объектных вопроса с did, субъектный who went без did.
text~form~Исправь: We didn't went out. Did you was busy? Who did broke the glass? Нужен нейтральный вопрос о виновнике.~We didn't go out. Were you busy? Who broke the glass?~Разобрать основу после did, систему be и субъектный who.
text~evidence~Запись: Pat didn't reply to one email. Объясни, почему нельзя написать Pat replied to no emails.~Отрицание касается одного письма; о других писем сведений нет. Pat didn't reply to that email. Other replies are not described.~Сохраняется область отрицания, не распространяется на все случаи.
text~story~Свяжи факт дождя и отказ от прогулки через because; затем через so.~We didn't go for a walk because it rained. It rained, so we didn't go for a walk.~Одинаковая причинная связь выражена с разным порядком.
text~story~Напиши 80–110 слов о вымышленном изменённом плане: прошлое состояние, ≥5 действий, ≥2 отрицания и известная причина.~Last Saturday I planned a picnic with two friends. We bought some fruit and made sandwiches in my kitchen. Then we looked outside. It was very wet, so we didn't go to the park. We moved the chairs into the living room and ate lunch there instead. One friend brought a board game, and we played it after lunch. We didn't order any food because we had enough. At five my friends went home. I washed the plates and wrote a message to thank them for a pleasant afternoon.~80–110 слов, связная история, времена и отрицания, смысловая оценка по рубрике.
text~evidence~Напиши 4 строки отчёта по фактам: тест в 10; ошибка найдена; исправление начато; результат исправления неизвестен.~We tested the form at ten. We found an error. We started to fix it. The result of the fix is not recorded.~Технический профиль без ложного утверждения об успешном исправлении.
speech~story~Проведи интервью из 8–10 реплик о вымышленной поездке партнёра. Используй did, was/were и who как субъект.~A: Where did you go? B: I went to a village. A: Who went with you? B: My cousin did. A: Was it quiet? B: Yes, it was. A: Did you stay overnight? B: No, we didn't.~Реальное взаимодействие, новые уточнения, понятная речь и корректные роли.
speech~form~Произнеси контраст I called / I didn't call и I finished / I didn't finish. Партнёр без текста записывает положительный или отрицательный факт.~I called at five. I didn't call at six. I finished the letter. I didn't finish the report.~Отрицание должно быть слышимо; оценивать только прослушанное аудио.
text~role~Вопрос Didn't you come? Ты пришёл позже. Дай ответ и уточнение, не противоречащие друг другу.~Yes, I did, but I came later.~Yes подтверждает приход; later уточняет время.
text~role~Lia met Bo. Напиши субъектный и объектный who-вопросы и полные ответы.~Who met Bo? Lia met Bo. Who did Lia meet? Lia met Bo.~Одинаковое событие, разные неизвестные роли.
speech~story~Партнёр считает, что ты закончил задачу. Сообщи: работал час, не закончил; ответь на новый вопрос о следующем шаге.~I worked on it for an hour, but I didn't finish it. The next step is to check the last section.~Уточнение неверного вывода и реальный ответ собеседнику.`,'','Письмо и речь'),
 bank('A104-did','review','Повторение: три формы и точный пересказ','review',`short~form~I ___ ready yesterday. Was/did?~was~Ready требует формы be.
short~form~I didn't ___ the warning. Saw/see?~see~После didn't основа see.
short~form~Who ___ your bicycle yesterday? Took/take?~took~Who — субъект нейтрального вопроса.
short~role~В Who did you meet? who — subject или object?~object~You — подлежащее; who — объект встречи.
sentence~form~Сделай вопросом: They had a good time.~Did they have a good time?~Had возвращается к have после did.
sentence~role~О себе: Did you write it? Дай краткий отрицательный ответ.~No, I didn't.|No, I did not.~Ответ I, помощник did.
sentence~form~Исправь: She didn't studyed the notes.~She didn't study the notes.~Основа study после didn't; не V2.
sentence~role~Спроси причину: He left because he was tired. Используй Why.~Why did he leave?~Why запрашивает причину; leave основа.
text~evidence~В записи только «The room was empty at six». Можно ли сообщить Nobody came that day?~No. The room was empty at six, but attendance at other times is not stated.~Состояние в один момент не описывает весь день.
text~story~Опиши 4 события вымышленного утра, включая отсутствие одного действия и причину другого.~I got up at seven. I didn't cook breakfast. I ate an apple and walked to the station because my bicycle was broken.~Связность и формы, осмысленные отрицание/причина.
speech~role~Партнёр спрашивает Who did you call? Затем Who called you? Ответь разными именами и проверь, что роли поняты.~I called Jo. Pat called me.~Различение объекта и субъекта по реальному вопросу на слух.
text~evidence~«We tried the password. Then we called support». Напиши известные факты и неизвестный результат первой попытки.~We tried the password and then called support. Whether the password worked is not stated.~Порядок не заменяет сведения о результате.`,'','Повторение')
 ],
 tests:[exam('A104-did','a',`short~form~Did your cousin ___ the concert? Enjoy/enjoyed?~enjoy~Основа после did, независимо от cousin.
short~form~I didn't ___ my keys there. Left/leave?~leave~Didn't уже выражает прошлое.
sentence~form~Сделай отрицательным: We wrote the invitation.~We didn't write the invitation.|We did not write the invitation.~Wrote возвращается к write.
sentence~form~Сделай вопросом: The tickets were expensive.~Were the tickets expensive?~Состояние с were, не did.
sentence~form~Исправь: Did she drove to work?~Did she drive to work?~Drove → основа drive после did.
sentence~role~Ada phoned Rob. Спроси о Ada, сохрани Rob.~Who phoned Rob?~Who занимает место подлежащего.
sentence~role~Ada phoned Rob. Спроси о Rob, сохрани Ada.~Who did Ada phone?|Whom did Ada phone?~Объектный вопрос с did phone.
sentence~role~О себе: Didn't you bring a pen? Ручку принёс. Краткий ответ.~Yes, I did.~Yes подтверждает реальный положительный факт.
sentence~role~О всей вашей группе: Did you meet the guide? Не встретили. Кратко.~No, we didn't.|No, we did not.~We выражает ответ за группу.
sentence~role~The class ended at eight. Спроси через What time.~What time did the class end?~Вопросительная группа целиком и основа end.
short~evidence~«We didn't finish the fence». Забор закончен: true/false/not stated?~false~Незавершение прямо сообщено.
short~evidence~«We worked on the fence». Забор закончен: true/false/not stated?~not stated~Работа сама по себе не подтверждает завершение.
short~evidence~«The café was closed at ten». Оно было закрыто весь день: true/false/not stated?~not stated~Сведения ограничены моментом ten.
text~evidence~Факты: Tim позвонил Sue; Sue не ответила; причина неизвестна. Передай их 3 предложениями.~Tim called Sue. She didn't answer. The reason is not stated.~Не добавлять занятость, болезнь или другую вымышленную причину.
text~story~Составь микротекст: поезд отменён, поэтому поехали автобусом; время прибытия неизвестно.~The train was cancelled, so we took a bus. Our arrival time is not in the notes.~Cancelled/canceled допустимы; причина явно задана.
text~story~Напиши 80–110 слов о вымышленной прогулке с изменением плана: ≥2 отрицания, причина и ясный порядок.~Yesterday my brother and I went to the river after breakfast. We took a small bag with water and some sandwiches. First we walked to the old bridge, but we didn't cross it because the gate was closed. We turned left and followed a path to a field. There we ate lunch and watched some birds. We didn't see any boats from that spot. After lunch we called our parents and told them about the walk. Finally, we went home through the village and bought some milk on the way.~80–110 слов, события, причина и отрицания; проверка по смыслу, не строковому ключу.
speech~story~Реальное интервью, 8–10 реплик: партнёр провёл день в другом городе. Задай общий, специальный, субъектный вопрос и вопрос о состоянии.~A: Where did you go? B: To Bath. A: Who went with you? B: Jo did. A: Was the city busy? B: Yes, it was. A: Did you visit a museum? B: No, I didn't.~Реальные уточнения, смена ролей и слышимая речь, до проверки pending.
speech~form~Передай два разных факта: сообщение отправил, но отчёт не отправил. Собеседник повторяет, чего не было.~I sent the message, but I didn't send the report.~Sent против didn't send; отрицание должно быть слышимо.
text~role~Объясни, почему Who saw Pat? и Who did Pat see? спрашивают о разных людях, и дай пример ответов.~В первом неизвестен наблюдатель: Jo saw Pat. Во втором Pat — наблюдатель: Pat saw Lee.~Правильные роли и два различимых ответа.
text~evidence~Запись «Kai didn't eat the soup». Можно ли утверждать, что Kai вообще ничего не ел? Ответь по-английски.~No. Kai didn't eat the soup, but other food is not mentioned.~Отрицание одного объекта не обобщается на всю еду.`),
 exam('A104-did','b',`short~form~Did your neighbours ___ the film? Liked/like?~like~После did нужна основа like.
short~form~We didn't ___ the parcel. Got/get?~get~Didn't + get, не got.
sentence~form~Сделай отрицательным: He drank the coffee.~He didn't drink the coffee.|He did not drink the coffee.~Drank → didn't drink.
sentence~form~Сделай вопросом: The lesson was useful.~Was the lesson useful?~Useful описывает состояние с be.
sentence~form~Исправь: Did they spoke to you?~Did they speak to you?~Speak основа после did.
sentence~role~Bo invited Kim. Спроси о Bo, сохрани Kim.~Who invited Kim?~Нейтральный субъектный вопрос без did.
sentence~role~Bo invited Kim. Спроси о Kim, сохрани Bo.~Who did Bo invite?|Whom did Bo invite?~Объектный вопрос: did + invite.
sentence~role~О себе: Didn't you buy a map? Карту не купил. Краткий ответ.~No, I didn't.|No, I did not.~No подтверждает отсутствие покупки, не русское «да, не купил».
sentence~role~О вашей группе: Did you find the room? Нашли. Кратко.~Yes, we did.~Ответ от лица нескольких участников.
sentence~role~The bus left at seven. Спроси через What time.~What time did the bus leave?~Left → leave после did.
short~evidence~«Jo didn't complete the form». Форма закончена Jo: true/false/not stated?~false~Отрицание завершения явно дано.
short~evidence~«Jo checked the form». Форма закончена Jo: true/false/not stated?~not stated~Проверка не равна завершению заполнения.
short~evidence~«The garden was quiet at noon». Он был тихим всё утро: true/false/not stated?~not stated~Описан полдень, не весь предшествующий период.
text~evidence~Факты: Nora отправила Max приглашение; Max не пришёл; причина не сообщается. Напиши 3 предложения.~Nora sent Max an invitation. Max didn't come. The reason is not stated.~Не приписывать Max решение или обстоятельства без источника.
text~story~Факты: кухня занята, поэтому ели снаружи; длительность обеда неизвестна. Сделай микротекст.~The kitchen was busy, so we ate outside. The length of the meal is not recorded.~Данная причина сохраняется, длительность не выдумывается.
text~story~Напиши 80–110 слов о вымышленном походе за подарком: порядок, причина и ≥2 отрицания.~Last Tuesday I went to town to buy a birthday present for my aunt. First I visited a bookshop and looked at the gardening books. I didn't buy one because she already had the book I liked. Then I walked to a small pottery shop. The owner showed me a blue cup, and I bought it with a matching plate. I didn't ask for a large box. Instead, I carried the gift carefully in my own bag. Finally, I went home and wrote a card for her.~80–110 слов, причина и отрицания, V2/didn't + основа; оценка содержательная.
speech~story~Проведи интервью из 8–10 реплик о прошлом семейном празднике: участники, состояние, событие, неизвестная деталь.~A: Who organised the meal? B: My sister did. A: Was it at home? B: Yes, it was. A: Did you cook? B: No, I didn't. A: When did the guests leave? B: I don't know exactly.~Реальный диалог с новыми вопросами, не только чтение готовых реплик.
speech~form~Сообщи, что письмо прочёл, а вложение не открыл. Партнёр должен различить два факта без текста.~I read the letter, but I didn't open the attachment.~Read /red/ и слышимое didn't; оценка по реальному аудио.
text~role~Объясни разницу Who helped Mo? / Who did Mo help? и дай два разных ответа.~Первый спрашивает о помощнике: Lee helped Mo. Второй — о получателе помощи: Mo helped Kim.~Разные роли who, субъект Mo только во втором вопросе.
text~evidence~«We didn't stop at the first café». Можно ли утверждать, что группа не остановилась ни в одном кафе? Ответь по-английски.~No. We didn't stop at the first café, but stops at other cafés are not described.~Ограниченное отрицание не расширяется без основания.`)
 ]
};

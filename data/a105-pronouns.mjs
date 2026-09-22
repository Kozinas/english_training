import {bank,exam,examples,goal} from './unit-tools.mjs';
import {pronounSources} from './future-choices.mjs';
export default {
 id:'A105-pronouns',topic:'A105',title:'Кто, кому и чьё: местоимения в действии',prerequisites:['A104-did'],references:['personal-pronouns','determiners-possession'],sources:pronounSources,
 goals:[goal('form','Выбирать личную форму по роли','forms'),goal('recipient','Строить передачу предмета и просьбу без путаницы адресата','roles'),goal('reference','Отслеживать участников и уточнять неоднозначность','reading'),goal('message','Создавать связные сообщения и обмен уточнениями','production')],
 explanation:[
 {title:'Не перевод окончания, а роль участника',text:'В I help Jo местоимение I — тот, кто помогает. В Jo helps me тот же человек получает помощь: нужна форма me. Русские «мне», «меня», «мной» не переводятся одним правилом падежных окончаний: английский выбирает позицию и предлог. В нейтральном полном предложении подлежащее I/he/she/we/they, объект me/him/her/us/them. You и it выглядят одинаково в обеих ролях. Сравни We know them / They know us: перестановка участников меняет и смысл, и нужные формы. Не начинай полное Them are ready вместо They are ready.'},
 {title:'Полный личный ряд и согласование',text:'I → me, you → you, he → him, she → her, it → it, we → us, they → them. Таблица приложения даёт рядом притяжательные формы, чтобы можно было сравнить функцию. Подлежащее определяет глагол: She calls us, We call her; в Past Simple смысловой глагол не меняется по лицам: She called us / We called her. Пол и число предмета в русском не задают he/she: a bag обычно it. Для человека используй известное местоимение, а не догадку по имени или профессии. Singular they сохраняет they are и объект them, даже если речь об одном неизвестном посетителе.'},
 {title:'После предлога нужен объект',text:'With me, for you, to him, from her, about it, behind us, between them. Предлог не возвращает форму I/he/she: не with I, не for we. Два адресата тоже не меняют правило: for Jo and me, а не for Jo and I. В русском «поговори со мной» есть предлог, в английском talk to me или talk with me; в «помоги мне» английское help me обходится без to. Поэтому учи маленькие сочетания целиком. Не добавляй предлог только по русскому переводу: call me, thank her, ask us, но listen to them.'},
 {title:'Получатель и предмет — не одно и то же',text:'Send me the link сообщает и адресата me, и предмет the link. Возможна модель Send the link to me. Если заменяешь предмет на it, ясный нейтральный вариант Send it to me; не нужно заучивать send me it как общую модель. Для give/show/tell/send обе распространённые конструкции с именной группой часто возможны: Show us the room / Show the room to us. Но переносить это на каждый глагол нельзя: Explain the rule to me, не Explain me the rule. Tell me the news, но say hello to me: поведение глагола тоже часть конструкции.'},
 {title:'Her, hers и my, mine возвращаются в действии',text:'В I called her форма her — получатель звонка. В I called her sister та же запись her определяет, чья сестра; объектом целиком является her sister. Hers самостоятельно заменяет her thing: The coat is hers, но не I called hers о человеке. My/your/our/their стоят перед существительным, mine/yours/ours/theirs — вместо группы. His совпадает в обеих позициях. Не ставь притяжательный апостроф в hers/yours/ours/theirs. Its означает принадлежность предмету, it’s раскрывается в it is или it has; эти роли не смешиваются.'},
 {title:'Ссылка должна быть понятной слушателю',text:'Alex met Robin and gave them a bag без контекста может быть понятным или неоднозначным: известно ли, кто they/them? В Lee called Pat because they needed help причина может относиться к Lee, Pat или группе, если нет дополнительных опор. Нельзя вычислить это по ближайшему имени автоматически. Если оба участника используют he, фраза He gave him his key тоже требует контекста. Повтори имя там, где оно снимает двусмысленность: Ben gave Leo Ben’s key. В живом диалоге спроси Do you mean Ben or Leo? и дождись ответа.'},
 {title:'Точка зрения меняется вместе с говорящим',text:'Друг говорит I can help you: I — друг, you — ты. В своём пересказе нельзя сохранить I и объявить, что помогал ты: Jo can help me. В диалоге сначала найди автора каждой реплики, затем адресата. We включает говорящего, us — его группу как объект; they/them обычно указывают на другую группу. Просьба Can you help me? и предложение Can I help you? содержат одинаковые слова, но противоположное направление помощи. В этой подтеме разбираем роли, устройство can будет подробно в последней подтеме A105.'},
 {title:'Короткие реплики и границы этого шага',text:'В разговорном Who’s there? — It’s me форма me нормативна: правило субъекта не превращает любую позицию после is в I. В формальном стиле встречается It is I; не нужно объявлять обычное It’s me ошибкой. Возвратные myself/yourself, взаимные each other и сложные сравнительные конструкции требуют отдельного изучения; здесь не подменяй ими простое me. Для речи произнеси I called HER, not HIM, сохрани противопоставление; слушатель должен понять участника, а текст распознавания не оценивает звуки.'},
 {title:'Опоры к текстам',text:'Loan — временная выдача/заём; borrower — тот, кто берёт вещь; owner — владелец; return — вернуть; collect — забрать; label — этикетка; receipt — чек; matching — подходящий/соответствующий; attachment — вложение. Before answering, назови предмет и участников своими словами. Во втором проходе соедини каждое it/them/her с конкретной опорой и отдели владение от временного пользования. Взять у человека не всегда значит взять его собственную вещь.'}
 ],
 examples:examples(`I know them.~Я их знаю.~I — субъект, them — объект.
They know me.~Они меня знают.~Роли поменялись вместе с формами.
She helped us yesterday.~Вчера она помогла нам.~Us — наша группа как получатель помощи.
We thanked her.~Мы поблагодарили её.~Thank без to перед адресатом.
He is waiting for me.~Он ждёт меня.~После for нужна me.
This note is for Jo and me.~Эта записка для Джо и меня.~Предлог относится к обоим адресатам.
Please listen to them.~Послушай их, пожалуйста.~Listen требует to в этой модели.
I sent him the link.~Я отправил ему ссылку.~Получатель перед именной группой.
I sent the link to him.~Я отправил ссылку ему.~Предмет перед to + адресат.
Please send it to us.~Отправь это нам, пожалуйста.~Два местоимения: it to us.
Explain the rule to me.~Объясни мне правило.~Не explain me the rule.
She told me the news.~Она рассказала мне новость.~Tell допускает получателя без to.
He said hello to her.~Он поздоровался с ней.~Say hello to, не say her hello.
I called her.~Я позвонил ей.~Her — объект.
I called her brother.~Я позвонил её брату.~Her определяет brother.
The red cup is hers.~Красная чашка её.~Hers заменяет her cup.
Our seats are here; those are yours.~Наши места здесь; те — ваши.~Our перед существительным, yours самостоятельно.
Its cover is blue. It’s my notebook.~Его обложка синяя. Это мой блокнот.~Its и it’s выполняют разные функции.
A visitor left a bag. Please contact them.~Посетитель оставил сумку. Свяжись с ним/ней.~Singular they без догадки по полу.
Who’s at the door? — It’s me.~Кто у двери? — Это я.~Обычная разговорная форма me.
Can you help me? / Can I help you?~Поможешь мне? / Тебе помочь?~Направление помощи меняется.
Ben gave Leo Ben’s key.~Бен передал Лео свой ключ.~Повтор Ben снимает неоднозначное his.`),
 banks:[
 bank('A105-pronouns','forms','Личные и притяжательные формы','practice',`short~form~___ am here. I/me?~I~Подлежащее согласуется с am.
short~form~Please call ___. I/me?~me~После call нужен объект.
short~form~Nora uses she. I know ___. Her/hers?~her~Объект человека, не принадлежность.
short~form~Ben uses he. Give the map to ___. He/him?~him~Объектная форма после to.
short~form~This table is for ___. We/us?~us~После for не we, а us.
short~form~___ are waiting outside. They/them?~they~Подлежащее перед are.
short~form~I spoke to ___. They/them?~them~Объектная форма после предлога.
short~form~The bag is here. Take ___. It/its?~it~Объект предмета, не притяжательная форма.
short~form~These are ___ tickets. Our/ours?~our~После формы есть tickets.
short~form~The tickets are ___. Our/ours?~ours~Самостоятельная принадлежность.
short~form~Is that ___ camera? Your/yours?~your~Camera остаётся после формы.
short~form~This camera is ___. My/mine?~mine~Существительное не повторяется.
short~form~This is ___ jacket. Владелец использует he. His/him?~his~Определитель jacket — his.
short~form~I spoke to ___ sister. She/her/hers?~her~Определитель sister, объектом является вся группа.
short~form~The printer is old. ___ paper tray is broken. Its/it's?~its~Принадлежность без апострофа.
short~form~___ a useful tool. Its/it's?~it's~Раскрывается в it is.
sentence~form~Исправь: Them helped we yesterday.~They helped us yesterday.~Субъект they, объект us.
sentence~form~Исправь: This message is for Jo and I.~This message is for Jo and me.~После for нужна объектная форма me.
sentence~form~Исправь: I thanked she for the help.~I thanked her for the help.~Thank + объект без лишнего to.
text~form~Различи her в I met her и I met her friend. Объясни по-русски.~В первом her сама объект встречи; во втором her определяет friend, и встретили подругу/друга.~Разобрать функцию, а не только одинаковое написание.`,'','Формы'),
 bank('A105-pronouns','roles','Кому передать и кто действует','practice',`sentence~recipient~Замени the file на it: Send the file to me.~Send it to me.~It занимает место предмета перед to me.
sentence~recipient~Перестрой через to: Give us the key.~Give the key to us.~Сохраняются предмет key и получатель us.
sentence~recipient~Перестрой без to: Show the plan to her.~Show her the plan.~Show допускает получателя перед именной группой.
sentence~recipient~Исправь: Explain us the problem.~Explain the problem to us.~Explain не использует общую модель двух объектов без to.
sentence~recipient~Исправь: Listen me, please.~Listen to me, please.~Listen to + объект.
sentence~recipient~Переведи «Позвони ему», если участник использует he. Используй call.~Call him.~Call не требует to перед him.
short~recipient~Can you help me? Кто должен помогать: speaker/listener?~listener~You указывает на собеседника.
short~recipient~Can I help you? Кто предлагает действовать: speaker/listener?~speaker~I — говорящий, предлагающий помощь.
text~reference~Kim says to me: I can help you. Перескажи с Kim как субъектом, не угадывай местоимение Kim.~Kim can help me.~Меняется точка зрения, не направление помощи.
text~reference~He gave him his book. Оба участника используют he. Напиши уточняющий вопрос.~Whose book do you mean, Ben's or Leo's?~Нельзя без контекста приписать his одному из двух.
text~recipient~Попроси Sam передать тебе вашу общую камеру, используй ours и it to me.~The camera is ours. Sam, please bring it to me.~Ours — владелец, me — получатель, не разные названия одной роли.
speech~reference~В паре уточни: под them имеются в виду два гостя или один посетитель с they? Партнёр выбирает ответ.~Do you mean the two guests or the visitor? — The visitor. — Then I'll speak to the visitor.~Реальное уточнение, без вывода о числе только по форме them.`,'','Роли'),
 bank('A105-pronouns','reading','Чтение: чья камера и кому её вернуть','reading',`short~reference~Кто владеет камерой? Дай два имени через and.~Rina and Tom|Tom and Rina~Камера общая для Rina и Tom.
short~reference~Кто взял камеру на время? Имя.~Mia~Mia — borrower, не единственный владелец.
short~reference~В Please give it to me что значит it: camera/charger?~camera~Реплика Rina говорит о возврате камеры.
short~reference~В той же реплике кто me? Имя.~Rina~Me определяется говорящей Rina.
short~reference~У Tom есть ключ от шкафа: true/false/not stated?~true~Tom keeps the cupboard key.
short~reference~Blue bag принадлежит Mia: true/false/not stated?~false~Mia явно говорит the blue bag isn't mine.
short~reference~Известен владелец синей сумки: yes/no?~no~Надёжного имени в тексте нет.
short~reference~Кому адресовано them в I can send them to you: people/photos?~photos~Them отсылает к photos.
short~reference~Mia уже отправила фотографии: true/false/not stated?~not stated~Сообщена возможность отправки, не сам факт.
sentence~recipient~Переформулируй требование Rina через camera вместо it: Please give it to me.~Please give the camera to me.~Предмет назван явно, получатель сохранён.
text~reference~В 4 предложениях перечисли владельцев, заёмщика и получателя; не назначай владельца сумки.~Rina and Tom own the camera together. Mia borrowed it. Rina asks Mia to return it to her. The owner of the blue bag is unknown.~Владение, пользование и получатель не смешиваются.
text~message~Напиши короткую записку Mia: куда и кому вернуть камеру, кто хранит ключ, какую вещь не считать её собственностью.~Please return the camera to Rina at the front desk. Tom keeps the cupboard key. The blue bag is not yours, and its owner is not confirmed.~Связный текст, точные ссылки и отсутствие выдумки.`,'Rina and Tom run a small photography club. They own one camera together and keep it in a cupboard at the community centre. Tom keeps the cupboard key. Members can borrow the camera, but the equipment book records the borrower and the return details separately from the owners.\n\nOn Monday Mia borrowed the camera for a walk by the river. On Tuesday Rina wrote to her: “Please give it to me at the front desk after lunch. Tom is away in the afternoon, so do not leave it for him outside the cupboard.” Mia replied, “Of course. The camera is in my brown bag. The blue bag beside the desk is not mine.” There was no reliable label on that blue bag, and nobody in this exchange confirmed its owner.\n\nMia also mentioned some photographs from her walk. “I can send them to you,” she told Rina. Here, them means the photographs, not the people at the club. The messages do not record whether she actually sent the pictures.\n\nBefore the next meeting, Rina wants a clear note for another volunteer. The note needs to distinguish the joint owners, the person who borrowed the camera and the person receiving it back. Replacing every name with she or her would make that note harder to understand, because both Rina and Mia use she.','Чтение'),
 bank('A105-pronouns','listening','Аудирование: две доставки и один адресат','listening',`short~reference~Кто говорит? Имя.~Evan~Сообщение начинается с This is Evan.
short~reference~Кому предназначены красные тетради? Имя.~Nora~The red notebooks are for Nora.
short~reference~Что принести Evan: folder/notebooks?~folder~Говорящий просит the green folder for me.
short~reference~Что означает them в give them to her: notebooks/folders?~notebooks~Them отсылает к red notebooks.
short~reference~Кто her в той же фразе? Имя.~Nora~Her — Nora, участник с she.
short~reference~Ключ принадлежит Evan лично: true/false/not stated?~false~The key isn't mine; it belongs to our club.
short~reference~Всё нужно оставить у ворот: true/false/not stated?~false~Отдельно запрещено оставлять папку у ворот.
short~reference~Записка в папке адресована группе Evan: true/false/not stated?~true~The note inside is for us.
text~recipient~Передай инструкции двумя ясными предложениями, называя вещи и адресатов.~Give the red notebooks to Nora. Bring the green folder to Evan at the office, not the gate.~Назвать адресатов, не оставить неоднозначное her/him.
speech~message~Партнёр повторяет инструкцию неверно: «Тетради Evan, папка Nora». Исправь распределение и дождись подтверждения.~The notebooks are for Nora, not Evan. The folder is for Evan. Can you repeat that?~Реальное исправление адресатов, понятное ударение на контрасте.`,'Hi, this is Evan. Please take the red notebooks to Nora. She is waiting in the classroom, so give them to her there. The green folder is for me. Bring it to the office, please; do not leave it at the gate. The note inside is for us, the three people preparing the club meeting. There is also a small key on the folder. It is not mine personally. It belongs to our club, and we keep it with the equipment. Nora does not need the folder or the key today. The notebooks and the folder therefore have different destinations. Please read the labels before you leave and ask me about anything unclear.','Аудирование'),
 bank('A105-pronouns','production','Письмо и обмен точными сообщениями','writing',`sentence~form~Переведи: Они знают нас. Используй they/us.~They know us.~Субъект they, объект us.
sentence~recipient~Переведи: Покажи это ей. Используй show/it/to/her.~Show it to her.~Предмет it перед получателем to her.
text~reference~A visitor forgot a ticket. Напиши 2 предложения с they/them без догадки о человеке.~They forgot a ticket. Please contact them.~Singular they с обычными объектными формами.
text~form~Исправь и объясни: This is hers laptop. I called hers.~This is her laptop. I called her. Перед laptop нужен определитель her; после called объект her.~Два разных употребления her, hers здесь не подходит.
text~recipient~Напиши 3 просьбы: прислать тебе ссылку, объяснить правило вашей группе, послушать двух гостей.~Please send the link to me. Please explain the rule to us. Please listen to them.~Send/explain/listen имеют разные модели; адресаты сохранены.
text~reference~Lee told Pat that their room was ready. Напиши два возможных уточнения о владельце комнаты.~Do you mean Lee's room or Pat's room? Is it a room they share?~Не угадывать, кому принадлежит their без контекста.
text~message~Напиши 80–110 слов: вымышленная общая вещь, кто её берёт, кому возвращает, две ясные просьбы и неизвестный владелец другой вещи.~Our club has a small speaker for meetings. The speaker is ours, but Jo is using it today. Please bring it to me at the office before lunch tomorrow. I keep the equipment list there. The cable belongs with the speaker, so please return it too. There is also a black umbrella beside the door. It is not mine, and I do not know its owner. Please ask the other members about it. Use names in the reply so that I know exactly who owns each thing.~80–110 слов; ясность адресатов и владельцев важнее механического числа местоимений.
text~message~Сократи своё сообщение до трёх предложений, не потеряй адресата возврата.~Please return the club speaker and its cable to me at the office. The black umbrella is not mine. Please ask the members who owns it.~Сжатие сохраняет действия и не назначает неизвестного владельца.
speech~recipient~Дай партнёру три инструкции о разных вещах и получателях. Он повторяет их, ты исправляешь одну реальную ошибку или подтверждаешь всё.~Give the map to Jo, bring the key to me and show the list to our guests. Yes, that is right.~Нужен реальный ответ партнёра, не выдуманный факт его ошибки.
speech~reference~Партнёр намеренно говорит him о двух участниках с he. Задай уточнение и перескажи подтверждённое.~Do you mean Ben or Leo? — Leo. — All right, I will call Leo.~Прослушивание и уточнение смысла, not ASR similarity.
speech~form~Произнеси I helped HER, not HIM и They helped US, not THEM. Слушатель восстанавливает адресатов.~I helped her, not him. They helped us, not them.~Контраст должен быть различим по реальному аудио.
text~message~Для сообщения о программном баге замени неясное it конкретными словами: I opened the file in the editor, but it was empty. Пустой файл, не редактор.~I opened the file in the editor, but the file was empty.~Ясность ссылки важнее запрета на повтор существительного.`,'','Письмо и речь'),
 bank('A105-pronouns','review','Смешанное повторение: лицо, время и принадлежность','review',`short~form~Yesterday she called ___. We/us?~us~Past Simple не меняет объектную форму.
short~form~___ were at home yesterday. They/them?~they~Подлежащее перед were.
short~form~This isn't my coat. ___ is blue. My/mine?~mine~Самостоятельная форма вместо my coat.
short~form~Please wait for ___. He/him?~him~For требует объектной формы.
sentence~form~Исправь: Her was here yesterday.~She was here yesterday.~В полном предложении she — подлежащее.
sentence~recipient~Исправь: Say hello her.~Say hello to her.~Say hello требует to перед адресатом.
sentence~recipient~Перестрой через to: Tell me the story.~Tell the story to me.~У tell обе модели с именной группой возможны.
short~reference~A bag лежит у Jo. Это доказывает владельца Jo: yes/no?~no~Место вещи само по себе не подтверждает владельца.
text~reference~I asked Sam to phone Lee. Sam uses they. Перескажи действие с they и назови адресата звонка.~They are the person I asked to phone Lee.~They отсылает к Sam, не к Lee; иной ясный пересказ допустим.
text~form~Почему It's me нормативно в ответе на Who's there?, хотя в Me work форма неверна?~It's me — обычная идентифицирующая реплика; в I work нужен субъект I перед смысловым глаголом.~Позиции различны, нельзя распространить одно правило без контекста.
speech~message~Представь общую коробку и разные личные вещи, партнёр уточняет кому передать одну вещь.~This box is ours. The notebook is mine and the ruler is yours. Please pass the notebook to me.~Ясные ссылки и реальный ход собеседника.
text~message~Сделай две версии короткой просьбы: другу и незнакомому сотруднику; сохраняй предмет и адресата.~Send it to me, please. Could you send the file to me, please?~Меняется вежливость, а не направление действия; подробный разбор could дальше.`,'','Повторение')
 ],
 tests:[exam('A105-pronouns','a',`short~form~___ spoke to the guide. We/us?~we~Подлежащее полного предложения.
short~form~Please bring the receipt to ___. I/me?~me~После to нужна объектная форма.
short~form~This parcel is for ___. They/them?~them~Объект предлога for.
short~form~The tickets are ___. Their/theirs?~theirs~Самостоятельная принадлежность.
short~form~Jo uses she. I emailed ___. Her/hers?~her~Получатель письма — объект.
sentence~form~Исправь: Him is waiting for we.~He is waiting for us.~Субъект he и объект us.
sentence~recipient~Замени the photo на it: Show the photo to him.~Show it to him.~Сохраняется направление передачи.
sentence~recipient~Исправь: Explain her the error.~Explain the error to her.~Explain + предмет + to + получатель.
short~reference~Can I carry that for you? Предлагает помощь speaker или listener?~speaker~I обозначает говорящего.
short~reference~Mona says to me: Give it to me. Получатель Mona или я? Напиши имя.~Mona~Me внутри её реплики означает Mona.
short~reference~A visitor left gloves. Для неизвестного посетителя допустимо them: yes/no?~yes~Singular they/them не требует известного пола.
text~reference~Ari gave Robin their map. Объясни неопределённость и задай уточнение.~We do not know whose map is meant. Is it Ari's map, Robin's map or a shared map?~Нельзя молча приписать their ближайшему имени.
text~form~Различи his в I called his teacher / The pen is his.~В первом his определяет teacher; во втором заменяет всю группу his pen.~Функции различны при одинаковой форме.
text~message~Напиши 80–110 слов о вымышленной передаче общей вещи: владелец, пользователь, адресат, две просьбы и одно неизвестное.~Our study group shares a large map. It belongs to all of us, not just to me. Dana is using it for a class this morning. Please ask Dana to return it to Jo after the class. Jo keeps the map in the library cupboard. There is a small red bag under the table, but its owner is unknown. Do not put the map in that bag. Please send me a short message when the map is back, and use names so that the return details are clear.~80–110 слов, точные роли и осмысленные местоимения; оценка преподавателем.
speech~recipient~Партнёр неверно понял адресата. Согласуйте возврат камеры владельцу, не тебе; минимум 6 реплик.~A: Give it to me? B: No, please give it to Kim. A: Is it yours? B: No, it is Kim's. A: The camera? B: Yes, the camera.~Реальное уточнение вещи и лица, слышимая речь.
speech~message~Скажи контраст: письмо для нас, а не для них; собеседник повторяет адресата.~The letter is for us, not for them.~Произношение и смысл оцениваются по аудио.
text~recipient~Составь просьбу прислать тебе файл и объяснить его содержимое, используя разные модели send/explain.~Please send me the file and explain its contents to me.~Send допускает два объекта, explain требует to перед me.
text~reference~Ящик был пуст ДО того, как туда положили конверт. Передай это ясно, обозначь и предмет, и время.~The drawer was empty before I put the envelope in it.~Прояснить опору it и момент пустоты; не объявлять ящик пустым после помещения конверта.`),
 exam('A105-pronouns','b',`short~form~___ met the visitors. They/them?~they~Субъект перед met.
short~form~The chair is for ___. She/her?~her~Объект предлога for.
short~form~Please listen to ___. We/us?~us~Listen to + объект.
short~form~This isn't your room; it is ___. Our/ours?~ours~Самостоятельная притяжательная форма.
short~form~Lee uses he. I thanked ___. His/him?~him~Объект после thanked, не принадлежность.
sentence~form~Исправь: Me am waiting for they.~I am waiting for them.~I — субъект, them — объект for.
sentence~recipient~Замени the address на it: Send the address to her.~Send it to her.~Объект вещи перед to her.
sentence~recipient~Исправь: Explain them the route.~Explain the route to them.~Explain не допускает такой модели без to.
short~reference~Can you carry this for me? Помощь просит speaker или listener?~speaker~Говорящий просит собеседника действовать для него.
short~reference~Eli says to me: Wait for me. Кого ждать? Дай имя.~Eli~Me в реплике Eli обозначает Eli.
short~reference~A guest forgot a key. Можно сказать They forgot it об одном госте: yes/no?~yes~Singular they нормативно при неизвестном/указанном they.
text~reference~Max called Alex about their car. Объясни двусмысленность и задай вопрос.~The owner of the car is unclear. Do you mean Max's car, Alex's car or a shared car?~Не решать владение по порядку имён.
text~form~Различи her в I thanked her / I thanked her neighbour.~В первом поблагодарили её; во втором её соседа. Her — объект в первом и определитель во втором.~Функция зависит от наличия neighbour.
text~message~Напиши 80–110 слов о вымышленной общей вещи для праздника: кто владеет, кто использует, кому вернуть, две просьбы и неопределённость.~Our neighbours share a folding table for small events. The table is theirs, but our family is using it for a birthday lunch today. Please return it to Nora at the house on the corner tomorrow. She keeps the list of shared equipment. There is also a yellow cloth in our kitchen. It is not ours, but I do not know who owns it. Please ask the neighbours about the cloth before you return it with the table. Write the owner's name in your reply to avoid confusion.~80–110 слов, ясная референция, точные адресаты; открытый ответ остаётся pending.
speech~recipient~Согласуйте передачу ключа другому участнику, не говорящему; уточните владельца. Минимум 6 реплик.~A: Shall I give you the key? B: No, give it to Lee. A: Is it Lee's? B: It belongs to the club. A: Where is Lee? B: At the desk.~Реальная смена реплик; владение и получение различаются.
speech~message~Сообщи: эти билеты для неё, а не для него. Собеседник называет получателя без текста.~These tickets are for her, not for him.~Различимый контраст по реальному аудио.
text~recipient~Попроси рассказать тебе новость и поздороваться с гостями: tell и say с разными моделями.~Please tell me the news and say hello to the guests.~Tell me, но say hello to the guests.
text~reference~Сломан замок, не дверь: I looked at the lock on the door, but it was broken. Сделай ссылку ясной.~I looked at the lock on the door, but the lock was broken.~Повтор существительного здесь улучшает ясность.`)
 ]
};

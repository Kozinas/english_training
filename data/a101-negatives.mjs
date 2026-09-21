import {bank,exam,examples,goal} from './unit-tools.mjs';
import {presentSimpleSources} from './present-simple.mjs';

export default {
 id:'A101-negatives',topic:'A101',title:'Отрицания: don’t/doesn’t, базовая форма и точность смысла',prerequisites:['A101-forms'],references:['present-simple','be-questions'],sources:presentSimpleSources,
 goals:[goal('support','Выбирать do not/does not и сохранять базовую форму','practice'),goal('contrast','Различать отрицания с be и смысловым глаголом','practice'),goal('scope','Точно передавать отрицаемый факт, не выдумывая остальное','production')],
 explanation:[
  {title:'Для обычного глагола появляется помощник',text:'В P04 отрицание строилось с уже имеющимся be: She is not busy. В She works такого помощника нет. Для нейтрального отрицания Present Simple вводится do not / does not: I do not work here; she does not work here. Смысловой глагол сообщает действие, а do/does вместе с not оформляет отрицание и согласование. Нельзя просто поместить not перед works или добавить is: She not works / She is not work не заменяют нужную модель. Выбор модели зависит от глагола, а не только от русского перевода «не».'},
  {title:'Где теперь выражено третье лицо',text:'Для I/you/we/they — do not; для he/she/it — does not. Does уже показывает третье лицо, поэтому следующий глагол возвращается к базе: works → does not work, studies → does not study, has → does not have. Это удобнее понимать как распределение грамматической работы: один элемент несёт согласование, другой остаётся словарной формой. Не She doesn’t works, не She doesn’t studies и не She doesn’t has. После do/does в этой конструкции нет to: does not go, а не does not to go. База не означает потерю смысла настоящего времени — он выражен всей конструкцией.'},
  {title:'Согласование с длинным подлежащим',text:'The list of visitors does not include Jo — главное list в единственном, поэтому does. The visitors on the list do not need tickets — главное visitors во множественном, поэтому do. Один человек с местоимением they грамматически использует they do not; не исправляй это на does только из-за одного реального человека. Имена сами по себе не определяют he/she, но одно имя в такой конструкции требует does. Пара имён с and обычно требует do. Если непонятно, кто делает действие, сначала уточни участника, затем выбирай форму.'},
  {title:'Полная форма и сокращение',text:'Do not → don’t; does not → doesn’t. Апостроф заменяет пропущенную букву, а не сигнализирует принадлежность. Полные формы удобны для подчёркивания, ясной инструкции или формального текста; сокращения естественны в разговоре и обычной переписке. Оба варианта грамматичны, поэтому в свободном ответе нельзя отклонять один только за отсутствие сокращения. В упражнении «без сокращений» выполняй указанную форму отдельно. На слух don’t /dəʊnt/ и doesn’t /ˈdʌzənt/ надо отличать от положительного do/does; не полагайся только на транскрипт распознавания.'},
  {title:'Have, do и be: внешне похожи, работают по-разному',text:'She has a bike → She doesn’t have a bike; she has lunch here → She doesn’t have lunch here. Здесь тренируем модель do-support с обычным have. Hasn’t got относится к have got; традиционные варианты have без do встречаются в своих контекстах, но не являются целью задания «используй do/does». She does the checks → She doesn’t do the checks: первое does в исходной фразе было смысловым, а в отрицательной конструкции doesn’t помогает отрицанию и do называет действие. Но She is a tester → She isn’t a tester: be не получает do. Сначала назови функцию глагола, не запоминай все слова does как один перевод «делает».'},
  {title:'Что именно отрицается',text:'Jo doesn’t work on Fridays отрицает работу по пятницам, а не наличие работы вообще. Jo doesn’t drink coffee не сообщает, какой другой напиток Jo предпочитает. The service doesn’t send messages at night не означает, что оно никогда не отправляет сообщений. Сохраняй дополнения и обстоятельства при преобразовании; если выкинуть важное on Fridays, изменится утверждение. В длинных задачах отделяй подтверждённое отрицание от неизвестного: We don’t know the price не равно It is free или It is expensive. Отрицание знания оставляет факт открытым.'},
  {title:'Уточнение и исправление без лишних выводов',text:'Если собеседник пересказывает распорядок неверно, полезна пара: She doesn’t drive to work; she takes the bus. Второе предложение должно опираться на реальные данные учебной карточки, а не быть автоматической «противоположностью». Добавляй but для контраста и because только при известной причине. Don’t означает разное по функции: Don’t open the file — побуждение из P02, I don’t open that file — сообщение о привычке. В продуктивных заданиях сохрани старую фразу, исправление и основание; не стирай следы первой попытки.'}
 ],
 examples:examples(`I don’t work on Sundays.~Я не работаю по воскресеньям.~Do not + базовое work; ограничение по дню важно.
She doesn’t work on Sundays.~Она не работает по воскресеньям.~Третье лицо выражено doesn’t, не works.
We do not use that room.~Мы не пользуемся той комнатой.~Полная форма допустима; смысл равен we don’t use.
The app does not store passwords.~Приложение не хранит пароли.~Единственное app → does not; вымышленная функция, не обещание о реальном продукте.
Jo doesn’t study French.~Джо не изучает французский.~После doesn’t — study, не studies.
Jo doesn’t have a car.~У Джо нет машины.~Has возвращается к have после вспомогательного does.
Jo doesn’t have lunch here.~Джо не обедает здесь.~Have может называть действие; here ограничивает отрицание.
She doesn’t do the final check.~Она не выполняет последнюю проверку.~Doesn’t — помощник, do — смысловой глагол.
He isn’t tired. He doesn’t need a break.~Он не устал. Ему не нужен перерыв.~Прилагательное с be и смысловое need используют разные модели.
The names on this page do not match the list.~Имена на этой странице не совпадают со списком.~Главное names во множественном.
The name on these pages does not match the list.~Имя на этих страницах не совпадает со списком.~Главное name в единственном; pages не выбирает помощник.
You don’t need a ticket.~Тебе/вам не нужен билет.~Любое you использует do, не does.
Sam uses they. They don’t work here.~Для Сэм используется they. Сэм здесь не работает.~Singular they согласуется с do.
The workshop doesn’t open on Mondays.~Мастерская не открывается по понедельникам.~Отрицается конкретная часть расписания, не существование мастерской.
I don’t know the opening time.~Я не знаю времени открытия.~Неизвестность не доказывает, что место закрыто.
She doesn’t drive to work; she takes the bus.~Она не ездит на работу за рулём; она едет автобусом.~Исправление даёт известный положительный факт, не догадку.
Don’t open that file. I don’t open it at work.~Не открывай тот файл. Я не открываю его на работе.~Побуждение и сообщение о привычке — разные функции don’t.
The two helpers don’t check every box, but the person near the door checks each returned tool.~Два помощника проверяют не каждую коробку, но человек у двери проверяет каждый возвращённый инструмент.~Сложный контраст числа, области отрицания и распределения обязанностей.`),
 banks:[
  bank('A101-negatives','practice','Помощник, база и выбор грамматической модели','practice',`short~support~She ___ use this key. Вставь don’t/doesn’t.~doesn't~She требует does, смысловой use остаётся базовым.
short~support~We ___ print these notes. Вставь don’t/doesn’t.~don't~We согласуется с do.
short~support~The list of names ___ include Jo. Вставь do not/does not.~does not~Главное list в единственном.
short~support~The names on the list ___ match. Вставь do not/does not.~do not~Главное names во множественном.
short~support~Jo doesn’t ___ a bicycle. Вставь have/has.~have~После doesn’t база have, не has.
short~support~She doesn’t ___ French. Вставь study/studies.~study~Doesn’t уже выражает третье лицо.
short~support~He doesn’t ___ the checks. Вставь do/does.~do~Второе do называет действие и остаётся базовым.
short~support~The bus doesn’t ___ here. Вставь stop/stops.~stop~После does not нет -s у смыслового глагола.
sentence~support~Отрицай через do/does без сокращений: Mina reads this paper.~Mina does not read this paper.~Сохраняется this paper; reads возвращается к read.
sentence~support~Отрицай через do/does без сокращений: The visitors need tickets.~The visitors do not need tickets.~Множественное visitors → do not.
sentence~support~Отрицай через do/does без сокращений: I have lunch at home.~I do not have lunch at home.~I + do not + have; обстоятельство сохраняется.
sentence~support~Раскрой сокращение: He doesn’t carry a bag.~He does not carry a bag.~Doesn’t = does not; carry не меняется.
sentence~support~Сократи: They do not know the address.~They don't know the address.~Сокращается do not, а не смысловое know.
sentence~support~Исправь форму после помощника: She doesn’t goes there.~She doesn't go there.|She does not go there.~После doesn’t нужна база go; обе формы отрицания допустимы.
sentence~support~Исправь только лишнее to: He does not to use this app.~He does not use this app.~База после does не имеет to.
short~contrast~She ___ busy. Выбери isn’t/doesn’t.~isn't~Busy — прилагательное, отрицание через be.
short~contrast~She ___ work here. Выбери isn’t/doesn’t.~doesn't~Work — смысловой глагол; нужен помощник does.
short~contrast~The printer ___ ready. Выбери isn’t/doesn’t.~isn't~Ready описывает состояние через be.
short~contrast~The printer ___ work. Выбери isn’t/doesn’t.~doesn't~Здесь work — функционировать, смысловой глагол.
sentence~contrast~Исправь сообщение о потребности: I am not need a ticket.~I do not need a ticket.|I don't need a ticket.~Need образует отрицание с do, не am.
text~scope~“Mina doesn’t work on Thursdays”. Почему нельзя сократить до “Mina doesn’t work” без изменения смысла?~The first sentence excludes Thursdays, not all work.~Обстоятельство ограничивает отрицание; удаление меняет утверждение.
text~scope~По данным герой не пьёт кофе, другой напиток неизвестен. Исправь “Jo drinks coffee” без догадки о чае.~Jo doesn’t drink coffee. Jo’s usual drink is unknown.~Отрицание доказано, замена напитка не придумана.`),
  bank('A101-negatives','reading','Чтение: не делать лишних выводов из отрицания','reading',`short~scope~Rae работает в repair café? Yes/no?~yes~Это волонтёрская работа в мастерской-кафе; форма работы уточнена в тексте.
short~scope~Rae работает там по средам? Yes/no?~no~По средам Rae не приходит в мастерскую.
short~scope~Rae вообще нигде не работает по средам: true/false/not stated?~not stated~Текст ограничивает отрицание работой в repair café.
short~scope~Rae ездит в repair café за рулём? Yes/no?~no~Вместо вождения указан автобус.
short~scope~Rae пьёт чай: true/false/not stated?~not stated~Сообщено только, что Rae не пьёт кофе.
short~scope~Kai чинит стулья? Yes/no?~yes~Это конкретная положительная обязанность Kai.
short~scope~Kai проверяет электрические приборы? Yes/no?~no~Kai прямо не выполняет эту часть работы.
short~scope~Цены на детали известны Rae? Yes/no?~no~Rae не знает цены, они отсутствуют в заметке.
sentence~support~Запиши полную форму фразы “Rae doesn’t drive to the café”.~Rae does not drive to the café.|Rae does not drive to the cafe.~Смысл и направление поездки сохранены; обе записи café/cafe допустимы.
text~contrast~Сравни “The room isn’t noisy” и “The helpers don’t play music”.~Первое — признак комнаты через be, второе — отсутствие действия через do.~Различены конструкции; одно не выводится автоматически из другого.
text~scope~Напиши 4–5 предложений о том, что Rae и Kai делают и чего не делают. Сохрани неизвестный напиток.~Rae takes the bus to the café. Rae doesn’t drink coffee, but the usual drink is unknown. Kai fixes chairs. Kai doesn’t check electrical items.~Точные обязанности и границы знания; допустима другая связная формулировка.
text~scope~Друг пишет “The spare parts are free, because Rae doesn’t know the prices”. Объясни ошибку и исправь.~Rae doesn’t know the prices. The parts are not known to be free.~Отсутствие знания цены не доказывает ни бесплатность, ни дороговизну.`,
 `Rae volunteers at a repair café on Saturdays. A repair café is a place where people help each other repair useful things. Rae checks the list of visitors and labels the returned items. Rae does not work at this café on Wednesdays. The note says nothing about Rae’s activities at other places on that day.
Rae does not drive to the café; Rae takes the bus. Rae does not drink coffee, but the note gives no information about another drink. The room is not noisy. The helpers do not play music during the repair session. These are two separate facts, not a rule about every quiet room.
Kai helps Rae. Kai fixes chairs and small wooden boxes, but does not check electrical items. Those items go to a different helper. Rae writes the name of that helper on a card. The visitors do not keep damaged items on the front desk; they put them on a marked shelf.
Rae does not know the prices of spare parts. The note does not list the prices, and it does not say that the parts are free. Before a visit, a person should ask for the missing information instead of inventing it. This description explains normal responsibilities, not the exact events of the next session.`),
  bank('A101-negatives','listening','Аудирование: ограничения работы и неизвестные детали','listening',`short~scope~Говорящий занимается письмами по утрам? Yes/no?~yes~Утренняя работа с письмами названа положительным фактом.
short~scope~Говорящий принимает звонки до девяти? Yes/no?~no~Ограничение before nine явно названо.
short~scope~Говорящий вообще не принимает звонков? True/false/not stated?~false~После девяти звонки принимает, так что общее отрицание опровергнуто.
short~scope~Pat помнит все адреса из списка наизусть? Yes/no?~no~Pat не помнит все адреса и пользуется списком; часть адресов может помнить.
short~scope~Список содержит личные телефоны? Yes/no?~no~В вымышленном списке указаны только публичные адреса.
short~contrast~Pat устал? True/false/not stated?~not stated~Отсутствие знания адресов не означает усталость; о ней ничего не сказано.
short~support~В “Pat doesn’t ___ the prices” прозвучала форма know/knows?~know~После doesn’t — базовое know.
short~scope~Кто оплачивает детали? Введи unknown, если это не сказано.~unknown~Кто платит, не известно говорящему.
sentence~support~Сохрани before nine и запиши отрицание от I с answer calls, без сокращений.~I do not answer calls before nine.~Важная граница времени не удаляется.
text~scope~Напиши два предложения: что известно о звонках и какой вывод был бы неверен.~The speaker does not answer calls before nine, but answers them after nine. It is wrong to say that the speaker never answers calls.~Отрицание ограничено временем, не всей работой.
text~contrast~Объясни, почему к know в сообщении нельзя добавить isn’t вместо doesn’t.~Know — смысловой глагол; Pat doesn’t know, не Pat isn’t know.~Модель отрицания зависит от глагола, не от перевода.
speech~scope~Исправь пересказ партнёра “You never answer calls”; передай точное ограничение и один неизвестный факт.~I don’t answer calls before nine. I answer them after nine. I don’t know who pays for the parts.~Слышимое отрицание, точное время и честная неизвестность; реальное уточнение обязательно.`,
 `I help at a small community desk. I read messages early in the morning, but I do not answer calls before nine. I answer calls after nine. Pat works with me and uses a list of public addresses. Pat does not remember every address, so the list is useful. It does not contain personal phone numbers. Pat does not know the prices of the spare parts, and I do not know who pays for them. Please ask the organiser for that information. We do not print every message. We print only the messages that visitors need on paper. This is our usual process, not a promise about every individual day.`),
  bank('A101-negatives','production','Исправление неверного описания и связный текст','writing',`text~support~Напиши 6–8 фраз о вымышленном человеке: четыре обычных действия и два отрицания с точными обстоятельствами.~Jo works at a shop. Jo checks prices. Jo carries small boxes. Jo writes the notes. Jo doesn’t drive to work. Jo doesn’t answer messages after six.~Нужны связанные данные, базы после doesn’t и сохранённые ограничения.
text~contrast~Для той же сцены добавь две пары: состояние с be и действие со смысловым глаголом, оба отрицательные.~The room isn’t cold. Jo doesn’t need a coat. The screen isn’t on. Jo doesn’t use it.~Две разные грамматические модели, не искусственная замена всех отрицаний на don’t.
text~support~Преобразуй свой текст для I, затем для двух людей. Сохрани исходную версию.~I work at a shop. I check prices. I carry small boxes. I write the notes. I don’t drive to work. I don’t answer messages after six. We work at a shop. We check prices. We carry small boxes. We write the notes. We don’t drive to work. We don’t answer messages after six.~Переработан весь собственный текст; вспомогательный согласован с новым подлежащим.
text~scope~Исправь объявление по данным: клуб не работает по вторникам, в другие будни работает; цена не указана. Ошибочное объявление: “The club doesn’t open. It is free.”~The club doesn’t open on Tuesdays. It opens on the other weekdays. The price is not stated.~Не стирать ограничение дня и не подменять неизвестную цену нулевой.
text~support~Запиши пять отрицаний, используя have, do, study, go, say. Для каждого укажи базовую форму.~Jo doesn’t have a car. Jo doesn’t do that task. Jo doesn’t study French. Jo doesn’t go there. Jo doesn’t say that.~Все пять баз сохранены после doesn’t; собственные контексты желательны.
speech~scope~Партнёр ошибается в двух привычках твоего вымышленного героя. Исправь, затем назови известные реальные привычки героя.~Jo doesn’t take the train; Jo takes the bus. Jo doesn’t print the notes; Jo reads them on screen.~Реальный обмен и факты из карточки; не выдуманная «противоположность».
speech~support~Слушатель различает don’t/doesn’t в четырёх новых фразах о тебе и герое; затем повторяет, кто что не делает.~I don’t check that list. Jo doesn’t use that room.~Четыре разных действия, слышимое лицо/отрицание; ASR не даёт оценки фонетики.
text~scope~Сравни “I don’t know when it opens” и “It doesn’t open on Mondays”.~Первое отрицает знание времени, второе сообщает конкретный факт расписания.~Неизвестность и установленное ограничение различены.
text~contrast~Объясни разницу между “Don’t use the old list” и “We don’t use the old list”.~Первое побуждает не использовать, второе описывает обычное действие группы.~Не считать все формы don’t одной коммуникативной задачей.
text~support~Отредактируй свой исходный текст: проверь do/does, отсутствие -s после помощника и область отрицания. Сохрани обе версии.~Исправил doesn’t studies → doesn’t study; вернул on Fridays.~Нужны конкретные цитаты собственной работы; если ошибок нет, укажи реальные проверки.`),
  bank('A101-negatives','review','Повторение: отрицание, число и границы факта','review',`short~support~The children ___ need these tickets. Do not/does not?~do not~Children — неправильное множественное.
short~support~This information ___ help me. Do not/does not?~does not~Information неисчисляемое, грамматически единственное.
short~support~Sam использует they. They ___ live here. Don’t/doesn’t?~don't~Singular they сохраняет согласование с do.
sentence~support~Отрицай через do/does без сокращений: She has breakfast at work.~She does not have breakfast at work.~Has → have после does; at work не удаляется.
sentence~support~Отрицай через do/does без сокращений: Jo does the cleaning.~Jo does not do the cleaning.~Первое does становится помощником, смысловое do базовое.
sentence~support~Исправь только глагольную форму: The visitor doesn’t needs a map.~The visitor doesn't need a map.|The visitor does not need a map.~Need после помощника без -s.
short~contrast~We ___ late. Aren’t/don’t?~aren't~Late — признак с be, не самостоятельный глагол.
short~contrast~We ___ arrive late. Aren’t/don’t?~don't~Arrive — смысловой глагол, нужно do not.
text~scope~В тексте “Kai doesn’t visit the office on Fridays”. Можно ли утверждать, что Kai там никогда не бывает?~Нет: ограничение касается только пятниц, другие дни не описаны.~Нельзя расширять область отрицания.
text~support~Составь одну пару отрицаний с длинными подлежащими singular/plural и объясни помощник.~The file in these folders doesn’t open. The files in this folder don’t open.~Число задаёт file/files, а не уточнение.
speech~scope~Партнёр путает отсутствие знания с отрицательным фактом. Исправь на собственном вымышленном примере.~I don’t know the price. That doesn’t mean it is free.~Нужна реальная ответная реплика с понятным смыслом, не только монолог.
text~scope~Запланируй отложенное задание: другой герой, два известных отрицания и два неизвестных. Не выставляй результат заранее.~Карточка: не ездит на машине; не работает ночью; неизвестны обед и цена проезда.~Будущая независимая практика с сохранением границ знания.`)
 ],
 tests:[exam('A101-negatives','a',`short~support~The timetable on these pages ___ show the price. Do not/does not?~does not~Главное timetable, единственное.
short~support~The visitors near the desk ___ need help. Do not/does not?~do not~Главное visitors, множественное.
short~support~She doesn’t ___ the key. Have/has?~have~Особая форма has возвращается к базе have.
short~support~Jo doesn’t ___ the final test. Do/does?~do~После вспомогательного doesn’t смысловое do базовое.
sentence~support~Отрицай через do/does без сокращений: The guide carries these maps.~The guide does not carry these maps.~Carries → carry, остальная группа сохраняется.
sentence~support~Отрицай через do/does без сокращений: We read this notice.~We do not read this notice.~We + do not, смысловая база неизменна.
sentence~support~Раскрой сокращение: She doesn’t know the route.~She does not know the route.~Отрицание знания сохраняется.
sentence~support~Исправь лишнее окончание: He doesn’t watches the gate.~He doesn't watch the gate.|He does not watch the gate.~Watch без -es после does.
short~contrast~Говорим о состоянии ворот, не о действии: The gate ___ open. Isn’t/doesn’t?~isn't~Open здесь прилагательное после be.
short~contrast~The gate ___ open automatically. Isn’t/doesn’t?~doesn't~Open здесь глагол, automatically описывает действие.
short~contrast~I ___ understand the notice. Am not/do not?~do not~Understand образует отрицание с do.
short~scope~Дано только “Jo doesn’t eat lunch at the café”. Jo вообще не обедает: true/false/not stated?~not stated~Отрицание ограничено местом, не всем приёмом пищи.
text~scope~Напиши 6–8 предложений по карточке: герой работает в музее, не работает там по понедельникам, не ездит туда за рулём, ходит пешком; напиток и время обеда неизвестны.~Jo works at a museum. Jo doesn’t work there on Mondays. Jo doesn’t drive there. Jo walks. Jo’s usual drink is unknown. Jo’s lunch time is unknown.~Факты и ограничения сохранены; нельзя придумать чай или пропуск обеда.
text~contrast~Объясни две модели: “The guide isn’t ready” и “The guide doesn’t know the answer”.~Ready — признак через be; know — смысловой глагол с do-support.~Нужен механизм, не только перевод.
speech~support~Партнёр неверно описывает две обязанности героя; исправь с doesn’t и попроси повторить точный смысл.~The guide doesn’t print tickets and doesn’t collect bags.~Два слышимых отрицания с базой, реальные уточняющие реплики; данные задаются учебной карточкой.
text~scope~Почему “We don’t know the cost” не подтверждает ни “It is free”, ни “It is expensive”?~Оба утверждения требуют данных о стоимости; отрицание знания их не предоставляет.~Различено состояние знаний и внешний факт.`),
 exam('A101-negatives','b',`short~support~The picture on these cards ___ match the label. Do not/does not?~does not~Главное picture, не cards.
short~support~The pictures in this book ___ show the route. Do not/does not?~do not~Главное pictures во множественном.
short~support~He doesn’t ___ a desk at home. Have/has?~have~База have после does not.
short~support~The helper doesn’t ___ the shopping. Do/does?~do~Смысловой do не получает -es после помощника.
sentence~support~Отрицай через do/does без сокращений: The student studies this language.~The student does not study this language.~Studies возвращается к study.
sentence~support~Отрицай через do/does без сокращений: They write those notes.~They do not write those notes.~They согласуется с do not.
sentence~support~Раскрой сокращение: He doesn’t use that address.~He does not use that address.~Сохраняются not и уточнение that address.
sentence~support~Исправь лишнее окончание: She doesn’t finishes at six.~She doesn't finish at six.|She does not finish at six.~Finish без -es после does.
short~contrast~Говорим о состоянии магазина: The shop ___ open now. Isn’t/doesn’t?~isn't~Open здесь прилагательное, состояние магазина передаётся через be.
text~contrast~Сравни “The shop isn’t open on Tuesdays” и “The shop doesn’t open on Tuesdays”. Допустимы ли обе фразы? Объясни модели.~Обе допустимы: isn’t open описывает закрытое состояние, doesn’t open — отсутствие действия открытия по вторникам.~Нужны две грамматические модели; внешне одинаковое open само по себе не позволяет отвергнуть одну из них.
short~contrast~We ___ need new labels. Are not/do not?~do not~Need — смысловой глагол, не прилагательное.
short~scope~Дано только “Kai doesn’t read on the bus”. Kai вообще не читает: true/false/not stated?~not stated~Отрицание относится к месту/ситуации чтения.
text~scope~Напиши 6–8 предложений по карточке: герой работает в библиотеке, не работает там по средам, не ездит туда поездом, едет автобусом; напиток и время ужина неизвестны.~Kai works at a library. Kai doesn’t work there on Wednesdays. Kai doesn’t take the train there. Kai takes the bus. Kai’s usual drink is unknown. Kai’s dinner time is unknown.~Нельзя расширять отрицание на все дни или выдумывать неизвестные данные.
text~contrast~Объясни две модели: “The room isn’t quiet” и “The visitors don’t read here”.~Quiet — прилагательное с be, read — смысловое действие с do-support.~Модель и число участников объяснены отдельно.
speech~support~Партнёр путает твои привычки с привычками другого героя. Исправь одну фразу с don’t и одну с doesn’t, затем уточни понимание.~I don’t use that room. Kai doesn’t print those notes.~Нужны разные подлежащие, слышимые отрицания и живая реакция партнёра.
text~scope~“The note doesn’t mention a break” и “There is no break” — одно ли утверждение? Объясни.~Нет: отсутствие упоминания не доказывает отсутствие перерыва.~Открытый факт не превращён в уверенное отрицание; допускается русский разбор.`)]
};

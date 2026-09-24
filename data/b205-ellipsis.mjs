import {bank,exam,examples,goal} from './unit-tools.mjs';
import {discourseSources} from './discourse-reference.mjs';
const id='B205-ellipsis';
export default {id,topic:'B205',title:'Не повторять, но не терять смысл: substitution, ellipsis и отклики',prerequisites:['B204-lexis','B104-tags'],references:['ellipsis-substitution','text-cohesion'],sources:discourseSources,
goals:[goal('form','Выбирать замену и сохранять время, число и отрицание','forms'),goal('meaning','Восстанавливать пропущенное и различать референты','meaning'),goal('evidence','Читать краткие реплики без выдуманного согласия или действия','reading'),goal('message','Сокращать текст и уточнять неоднозначное','production'),goal('sound','Давать понятные краткие отклики и проверять понимание','sounds')],
explanation:[
{title:'Краткость работает, когда восстановление однозначно',text:'В I checked the list and Jo did too слово did сохраняет время, а checked the list восстанавливается из предыдущей части. В I need a pen. Have you got one? one заменяет название класса предметов. Substitution использует заменяющее слово, ellipsis оставляет часть невысказанной; в реальной реплике эти механизмы тесно связаны. Задача не убрать максимум слов, а сделать речь связной и понятной. Если слушатель не знает, какой список или какое действие подразумеваются, верни имя или глагол. Короткое предложение с неясным it хуже более длинного точного.'},
{title:'One/ones не равны it/they',text:'I lost a pen and bought another one говорит о другом экземпляре класса pen. I found the pen and kept it относится к тому же найденному предмету. I prefer the smaller ones заменяет множественное исчисляемое имя: smaller boxes, если речь о коробках. Прилагательное, the, this/that или относительная часть помогают выбрать объект: the one that Jo sent. Но one не сообщает принадлежность или уникальность вне контекста. В Which one? набор вариантов должен быть известен. Если обсуждались и комната, и схема, фразу the larger one нужно уточнить.'},
{title:'Тип имени ограничивает замену',text:'Information, equipment и advice в изучаемых неисчисляемых значениях не получают one как отдельный экземпляр: I need information. Do you have any? Можно назвать единицу: a piece of advice → another one. Следовательно, запрет относится к исходному значению имени, а не к предмету вообще. One of the chairs выбирает одного члена plural-группы и требует singular в главном сказуемом: one of the chairs is broken. После числительных часто достаточно опустить имя: We ordered six chairs, not eight; не нужно автоматически добавлять ones после каждого числа.'},
{title:'So и not могут заменять целое содержание',text:'Will the room be free? — I think so восстанавливает I think the room will be free. Это мнение, не проверенная бронь. I hope so сообщает желание положительного события, I hope not — надежду на отрицательный исход: Will it rain? — I hope not. I’m afraid so/not часто вежливо передаёт неприятный ответ и не обязательно выражает буквальный страх. Сначала найди полное утверждение, затем реши, положительное или отрицательное содержание заменено. Если предыдущий вопрос отрицательный или двусмысленный, лучше ответить полной фразой вместо сомнительного so.'},
{title:'Отрицательные модели зависят от глагола',text:'I don’t think so — обычное отрицательное мнение; I think not тоже нормативно, но часто более формально. I expect not / I don’t expect so допускаются по контексту. Для обычного «надеюсь, что нет» выбирай I hope not. I don’t hope so не нейтральная замена этой формулы: отрицание самого желания имеет другую прагматику. Не переносить шаблон на любой глагол: I know that и I know it обычно естественнее, чем механическое I know so. Say so сообщает чужие слова, а не независимую проверку. Доступные модели учатся целиком с примером.'},
{title:'Auxiliary ellipsis сохраняет грамматику',text:'I can help, but Jo cannot оставляет модальность способности/доступности, не превращает её в прошлое невыполнение. I have replied, but Jo hasn’t сохраняет Perfect и отсутствие ответа к сейчас. I am ready, but they aren’t согласует be с новым субъектом. Если в исходном Simple нет вспомогательного, появляется do/does/did: I know the route; Jo does too. Do здесь вспомогательный и нормально заменяет состояние know; не путай его с самостоятельным do so, чаще относящимся к действию. При смене времени нужен соответствующий auxiliary, а не слепое копирование формы собеседника.'},
{title:'Do so и сохранённое to',text:'I checked the label; Jo did so too заменяет действие checked the label. Did so не обязательно означает, что проверка была успешной. С состояниями вроде own/know обычно удобнее auxiliary ellipsis: I own a bicycle; Jo does too. Не объявляй любой случай do so универсальной заменой любого глагола. В I can call if you want me to после to опущено call, а me остаётся объектом want и указывает, кто должен звонить. I haven’t visited, but I’d like to сохраняет желание, не утверждает посещение. Не удаляй часть, которая нужна для выбора участника.'},
{title:'So do I: добавляем другого участника',text:'I enjoy walking. — So does Mira означает Mira enjoys walking too. Схема so + auxiliary + subject меняет порядок и согласует auxiliary с новым субъектом: does Mira, do we, am I, was Jo, have they, can she. После отрицательного утверждения: Neither do I / Nor do I или I don’t either. В основной модели neither уже отрицательно, поэтому neither don’t I не используется. Me too / Me neither естественны в разговоре, но в задании на конкретную полную схему нужно показать auxiliary. Не делай So do I универсальным ответом после любого времени и глагола.'},
{title:'So I do: другой смысл, другой порядок',text:'You have my pen. — So I do! подтверждает тот же факт обо мне: «И правда, у меня твоя ручка». Здесь subject стоит перед auxiliary. So do I добавляет нового участника к ранее названному действию; So I do подтверждает уже высказанное о том же участнике. Кроме того, so может означать следствие: It is late, so I will leave. Не распознавай модель только по слову so. Сравни роль слова, порядок и полный восстановленный смысл. Отдельный yes или кивок тоже может обозначать услышанность, а не согласие со всеми предложенными действиями.'},
{title:'Пропуски в разговоре и координации',text:'Jo opened the box and checked the label не повторяет общего деятеля. Если открыла Jo, а проверил Ben, удалить Ben нельзя. Who called? — Mira является полноценным ответом в диалоге, хотя это не самостоятельное развёрнутое предложение для любого жанра. Seen the new guide? часто восстанавливается как Have you seen the new guide? в неформальной речи. Такая экономия требует общего контекста; её не надо механически переносить в формальное первое обращение. В общем объекте I ordered, and Jo paid for, the tickets предлог for остаётся: экономия повторов не отменяет управление.'},
{title:'Проверка и перенос',text:'Сначала раскрой сокращённую реплику полностью. Затем проверь объект, участника, время, отрицание, модальность и степень уверенности. Только после этого решай, нужна ли краткая версия. В речи конечные can /kæn/, do /duː/, to /tuː/ часто произносятся полнее, чем безударные внутренние формы; реальная интонация зависит от акцента и контраста. Neither допускает /ˈnaɪðə/ и /ˈniːðə/. ASR не оценивает эти различия. Партнёр должен восстановить мысль своими словами; если он ошибается, уточни, а не считай повтор текста доказанным пониманием. Через семь дней используй модели в новой ситуации.'}
],
examples:examples(`I need a pen. Have you got one?~Нужна ручка. Есть какая-нибудь?~One — экземпляр класса.
I found a pen and kept it.~Нашёл ручку и оставил её.~It — тот же предмет.
The red boxes are full; use the blue ones.~Красные коробки полны; используй синие.~Ones заменяет plural boxes.
The one Jo sent is clearer.~Тот вариант, который прислал Джо, яснее.~Определение выбирает объект.
We need advice. Do you have any?~Нужен совет. Есть что посоветовать?~Неисчисляемое advice, не one.
One of the chairs is broken.~Один из стульев сломан.~Of + plural, is по one.
Will it work? I think so.~Сработает? Думаю, да.~So заменяет содержание, не проверяет его.
Will she agree? I don’t think so.~Она согласится? Не думаю.~Отрицательное мнение.
Will it rain? I hope not.~Пойдёт дождь? Надеюсь, нет.~Надежда на отсутствие дождя.
Will they come? I hope so.~Они придут? Надеюсь, да.~Желание, не подтверждённая явка.
Is it closed? I’m afraid so.~Закрыто? Боюсь, что да.~Неприятный ответ, не обязательно страх.
Is a seat free? I’m afraid not.~Есть место? К сожалению, нет.~Отрицательное содержание.
Jo says so, but I haven’t checked.~Джо так говорит, но я не проверял.~Источник и проверка разделены.
I checked the list; Mira did so too.~Я проверил список; Мира тоже.~Did so заменяет действие.
I know the route; Mira does too.~Я знаю маршрут; Мира тоже.~Auxiliary does допускает состояние.
I can stay, but Ben cannot.~Я могу остаться, а Бен не может.~Модальность сохраняется.
I have replied; Jo hasn’t.~Я ответил; Джо ещё нет.~Perfect сохраняется.
I am ready; they aren’t.~Я готов; они нет.~Be согласуется с новым субъектом.
I can call if you want me to.~Могу позвонить, если хочешь.~Call опущено после to, me называет деятеля.
I haven’t visited, but I’d like to.~Не бывал, но хотел бы.~Желание не посещение.
Jo opened the box and checked the label.~Джо открыл коробку и проверил ярлык.~Общее подлежащее не повторяется.
Who called? Mira.~Кто звонил? Мира.~Контекст делает фрагмент полноценным ответом.
Seen the new guide?~Видел новое руководство?~Неформальное Have you seen… .
I like it. So does Jo.~Мне нравится. Джо тоже.~Does + singular Jo.
I arrived early. So did we.~Я пришёл рано. Мы тоже.~Did сохраняет прошлое.
I can help. So can I.~Я могу помочь. Я тоже.~Второе I — другой говорящий.
I don’t drive. Neither do I.~Я не вожу. Я тоже.~Neither + положительный auxiliary.
I haven’t replied. Nor have I.~Я не ответил. Я тоже.~Nor — альтернатива neither.
I cannot attend either.~Я тоже не могу прийти.~Отрицательная clause + either.
You have my pen. So I do!~У тебя моя ручка. И правда!~Подтверждение, не добавление другого участника.`),
banks:[
bank(id,'forms','Замена, auxiliary и порядок слов','practice',`short~form~I need a ticket. Have you got ___? (one/it; любой билет)~one~Нужен экземпляр класса, не ранее указанный предмет.
short~form~I found the ticket and kept ___. (one/it)~it~Тот же найденный билет.
short~form~These boxes are heavy; use the lighter ___. (one/ones)~ones~Plural boxes заменяется ones.
short~form~We need information. Do you have ___? (any/one)~any~Information в этом значении неисчисляемо.
short~form~One of the chairs ___ broken. (is/are)~is~Согласование с one, не chairs.
short~form~Will it stop? I hope ___. (надеюсь, что нет)~not~Hope not заменяет отрицательное содержание.
short~form~Will it help? I think ___. (думаю, да)~so~So заменяет it will help.
short~form~I am ready. So ___ I. (am/do)~am~Сохраняется be, согласованное с I.
short~form~I like walking. So ___ she. (do/does)~does~Present Simple и singular she.
short~form~I left early. So ___ we. (did/do)~did~Did сохраняет прошедшее.
short~form~I can swim. So ___ Jo. (can/does)~can~Сохраняется модальность can.
short~form~I haven’t finished. Neither ___ I. (have/do)~have~В ответе остаётся auxiliary Perfect.
short~form~I don’t drive. Neither ___ I. (do/don’t)~do~Neither уже задаёт отрицательный смысл.
short~form~I can call if you want me ___. (to/so)~to~После to восстанавливается call.
sentence~form~Исправь только auxiliary: I know the route; she do too.~I know the route; she does too.~Does согласуется с she и заменяет knows the route.
sentence~form~Исправь one: I prefer the smaller boxes, not the large one. (несколько больших)~I prefer the smaller boxes, not the large ones.~Нужно plural ones для нескольких коробок.
sentence~form~Переставь слова для «я тоже»: I / can / so.~So can I.~So + auxiliary + subject.
sentence~form~Исправь двойное отрицание модели: Neither don’t I.~Neither do I.~В изучаемой схеме после neither положительная форма do.
text~form~Сократи I checked the label and Jo checked the label too двумя способами.~I checked the label and Jo did too. I checked the label and Jo did so too.~Принимаются auxiliary ellipsis и do so, время сохраняется.
text~form~Дай два отрицательных отклика на I haven’t booked: с neither и either.~Neither have I. I haven’t either.~Сохрани Perfect и отрицательный смысл.`),
bank(id,'meaning','Что осталось невысказанным','practice',`short~meaning~I bought another one: one обычно тот же предмет, что it? (yes/no)~no~Другой экземпляр класса, не прежний объект.
short~meaning~I think so доказывает истинность сообщения? (yes/no)~no~Это мнение, не независимая проверка.
short~meaning~I hope not в ответ на Will it rain: желаем rain/no rain?~no rain~Желаемый отрицательный исход.
short~meaning~Jo says so означает, что автор проверил сам? (yes/no)~no~Ссылка на слова Jo.
short~meaning~You have my key. — So I do! Это confirmation/addition?~confirmation~Подтверждение того же факта, не нового участника.
short~meaning~I arrived early. — So did Jo. Это confirmation/addition?~addition~Другой участник сделал то же.
text~meaning~Раскрой I can help if you want me to и назови исполнителя помощи.~I can help if you want me to help. Помогать будет говорящий I/me.~Сохрани объект want и роль говорящего.
text~meaning~Чем I know it; Jo does too отличается от механического Jo does so too?~Auxiliary does естественно заменяет knows it; do so чаще описывает действие и не универсально для состояния.~Не запрет состояния после любого do.
text~meaning~Партнёр сказал the bigger one после обсуждения зала и плаката. Что спросишь?~Do you mean the bigger hall or the bigger poster?~Не угадывать ближайшее имя без контекста.
text~meaning~Почему Me too не обязательно ошибка, но не выполняет задание «используй so + auxiliary»?~Разговорный отклик нормативен; учебное задание дополнительно требует показать конкретную конструкцию.~Различи норму языка и требование упражнения.
text~meaning~I’d like to в ответ на Have you visited? подтверждает посещение?~Нет, желание не сообщает выполненное посещение; лучше явно назвать факт отдельно.~Не приписывать прошлое по желанию.
text~meaning~Можно ли из Jo opened the box and Ben checked it убрать Ben без потери смысла?~Нет, общий субъект Jo перенесёт проверку к другому человеку.~Сохрани участников.
text~meaning~Will they agree? — I think not. Нужно ли объявить это ошибкой?~Нет, нормативный более формальный вариант; I don’t think so тоже обычен.~Не требовать единственную строку свободного ответа.
text~meaning~Почему I’m afraid not не всегда рассказ о страхе?~Это вежливая формула неприятного отрицательного ответа.~Учитывай функцию в разговоре.`,'','Восстановить смысл'),
bank(id,'sounds','Краткий ответ, понятный слушателю','speaking',`speech~sound~Ответь на I can help с So can I; партнёр раскрывает вторую реплику.~So CAN I: I can help too.~Слушать аудио, не оценивать ударение по ASR.
speech~sound~Ответь на I haven’t replied с Neither have I; раскрой смысл.~Neither HAVE I: I haven’t replied either.~Perfect и отрицание должны быть понятны.
speech~sound~Произнеси neither с привычным нормативным вариантом и дай пример.~Neither do I; /ˈnaɪðə/ или /ˈniːðə/.~Оба варианта допустимы, не штрафовать акцент.
speech~sound~Сравни So do I и So I do в двух маленьких диалогах.~I like it. So do I. / You have my pen. So I do!~Слушатель различает добавление и подтверждение.
speech~sound~Прочитай I can call if you want me to; слушатель назовёт пропущенное.~I can call if you want me TO.~Конечное to часто полное; оценка по аудио и смыслу.
speech~sound~Партнёр указывает на две коробки: спроси, какую он имеет в виду.~Do you mean the larger one or the smaller one?~Нужен ответ и правильный выбор референта.
speech~sound~Отреагируй I hope not на неприятный прогноз; поясни полным предложением.~I hope not. I hope the event will not be cancelled.~Не заменять желание доказанным прогнозом.
speech~sound~Ответь на I left early с so и новым субъектом we.~So did we.~Сохрани время и участника в неподготовленном отклике.
speech~sound~Произнеси Seen the new guide? и полную форму, сопоставь адресата.~Have you seen the new guide?~Разговорный пропуск не ошибка при понятном контексте.
speech~sound~Партнёр даёт неоднозначное I think so; задай уточнение о содержании.~Do you think the room is free, or that the booking is confirmed?~Не угадывать значение so; реальный ответ партнёра.`),
bank(id,'reading','Какая версия и какое согласие','reading',`short~evidence~Who is coordinating the exhibition?~Nina~Координатор назван в первом абзаце.
short~evidence~How many label designs were compared?~2|two~Сравниваются два дизайна.
short~evidence~Which labels did Nina prefer: blue/green?~blue~Её выбор — синие подписи.
short~evidence~Did Tom check the room booking himself? (yes/no)~no~Он передал слова Jo, сам не проверял.
short~evidence~Who agreed to call Jo?~Nina~Она явно берёт на себя звонок.
text~meaning~Раскрой I prefer the blue ones в данном тексте.~I prefer the blue labels.~Ones заменяет labels, не комнаты.
text~evidence~Почему I think so не подтверждает бронь?~Tom высказал мнение по чужому сообщению; подтверждения брони нет.~Сохрани источник и степень уверенности.
text~meaning~Что означало I hope not после вопроса об отмене?~Надежду, что выставку не отменят, а не информацию о решении.~Желание не статус события.
text~message~Уточни bigger one без догадки, сохранив две возможности текста.~Do you mean the larger display board or the larger room?~Нужен явный выбор между предметами разных классов.
text~evidence~Чем согласие позвонить отличается от уже состоявшегося звонка?~В тексте принято будущее действие; результата разговора с Jo пока нет.~Не дописывать выполненное действие.
text~message~Сократи повтор о проверке подписей, сохрани двух исполнителей.~Nina checked the labels and Tom did too.~Оба проверили, но это не проверка брони.
text~message~Напиши резюме 90–120 слов, различив выбор дизайна, мнение о брони и следующий шаг.~Nina and Tom compared two label designs for an exhibition. Nina preferred the blue labels, and Tom preferred them too. Both checked the labels, but that work did not confirm the room booking. Tom thought the room would be available because Jo had said so; he had not checked it himself. His hope that the exhibition would not be cancelled was a wish, not a report of a decision. A reference to the bigger one was unclear because both a display board and a room had been discussed. Nina agreed to call Jo, and the booking remained unconfirmed.~Оцени референты, статусы, источник, связность и объём.`, `Nina is coordinating an exhibition at a community centre. She and Tom have compared two designs for the labels beside the photographs. One design uses blue headings and the other uses green headings. Nina says, “I prefer the blue ones.” Tom knows that ones refers to labels, because that is the subject of their discussion. He replies, “So do I.” He is adding his preference, not confirming a fact that Nina has already stated about him.

They read the labels carefully. Nina checks the dates, and Tom does too. Their brief exchange is efficient because the omitted action is clear. It would be misleading, however, to include this exchange under a heading such as “Room booking checked”. Neither person is discussing the reservation at that point. A short reply inherits its meaning from the relevant context, not from whichever topic appears later in the notes.

When Nina asks whether the room will be available, Tom answers, “I think so. Jo says so, but I haven't checked myself.” Nina initially writes “room confirmed”. Tom asks her to change it. His answer gives an opinion based on another person's statement; it does not report an independent check or a completed reservation. They agree that the note should name Jo as the source and leave the booking status open until someone obtains confirmation.

The conversation then moves between the display boards and the rooms. Tom suggests using “the bigger one”. Nina cannot tell whether he means the larger board or the larger room. Instead of choosing the nearest noun in her notes, she asks him to name the object. He means the display board, which would leave more space between the photographs. Repeating that noun makes the conversation longer but prevents a practical mistake.

Nina asks, “Will the exhibition be cancelled if the room is unavailable?” Tom says, “I hope not.” This expresses a wish, not knowledge of the organiser's decision. There may be another room, but no alternative has been approved. Nina offers to call Jo. Tom replies, “Please do.” The action to be restored is call Jo; it is not approve another room or announce the exhibition.

At the end, Nina reads back the notes in full sentences. The label preference is agreed, both people have checked the labels, and Nina has agreed to call Jo about the booking. The call has not yet happened. The notes keep that future action separate from completed work. Their shorter conversational replies were useful, but the final record repeats names and actions wherever a later reader might otherwise misunderstand them.`),
bank(id,'listening','Что осталось после can и to','listening',`short~evidence~Who has already contacted the driver?~Leah~Leah сообщает выполненный звонок.
short~evidence~Has Omar contacted the driver too? (yes/no)~no~Он говорит I haven’t.
short~evidence~How many proposed routes are mentioned?~2|two~Обсуждаются два маршрута.
short~evidence~Which route does Omar prefer: shorter/longer?~shorter~Он выбирает более короткий.
short~evidence~Is the transport booking confirmed? (yes/no)~no~Заявка ещё не подтверждена.
text~meaning~Что заменяет one в the shorter one?~The shorter route.~Восстанови именно класс route.
text~meaning~Что пропущено в I can if you want me to?~I can send the route details if you want me to send them.~Контекст задаёт отправку деталей, не заказ транспорта.
text~evidence~Почему So can I не доказывает выполненное действие?~Это возможность отправить данные у другого участника, не факт отправки.~Сохрани модальность.
text~message~Уточни I hope so после разговора о подтверждении.~Do you mean you hope the driver will confirm, or have you already received confirmation?~Разделить надежду и известный статус.
speech~sound~Перескажи обмен репликами, затем ответь партнёру: кто что уже сделал?~Leah contacted the driver; Omar has not. Sending details is offered, but the booking is not confirmed.~Аудио и ответ на уточнение, не только чтение.`, `Leah: I have contacted the driver, but I haven't received a booking confirmation. Have you spoken to him, Omar?

Omar: No, I haven't. I can send the route details, though.

Leah: So can I, but it would be better if only one of us sent the final version. We have two proposed routes. Which one do you prefer?

Omar: The shorter one, provided that the entrance is suitable. I have checked the distance, but not the final doorway. Have you?

Leah: No, I haven't either. When I said I had contacted the driver, I meant that I asked about availability. I did not mean that the route had been approved. We should keep those questions separate.

Omar: Understood. Would you like me to send both routes with that limitation clearly stated? I can if you want me to.

Leah: Please do. Ask whether the driver can visit the entrance before we choose. He may already know it, but I don't want to assume that he does.

Omar: Do you think he will confirm the booking today?

Leah: I hope so, but I do not know. I can promise to tell the group when a reply arrives; I cannot promise that he will reply today.

Omar: Then I will send the two routes and ask about an entrance check. I will not describe either route as approved. After that, we can update the group with what is actually confirmed.

Leah: Exactly. Let's use full descriptions in the written update so that people who were not in this conversation know what the short replies referred to.`),
bank(id,'production','Краткий диалог, ясное письмо','writing',`text~message~Сократи повтор: Mira checked the dates. Ben checked the dates too. Не меняй время.~Mira checked the dates and Ben did too.~Допустимо did so too; оба исполнителя сохранены.
text~message~Раскрой We can if you want us to по контексту: предложение проверить план.~We can check the plan if you want us to check it.~Не потерять us как исполнителя проверки.
text~message~Выбери one или it в собственных двух фразах о покупке нового и сохранении прежнего ноутбука.~I need a laptop, so I will buy one. I found my old laptop and kept it.~Различие класса и конкретного объекта.
text~message~Уточни They did too: обсуждались отправка приглашения и чтение отчёта.~Do you mean they sent the invitation or read the report?~Не выбирать действие без свидетельства.
text~message~Переделай неформальное Seen the revised map? для первого письма внешнему адресату.~Have you seen the revised map?~Полная форма без выдуманного прошлого результата.
text~message~Напиши 180–220 слов итогового письма: Nina и Tom выбрали синие подписи и проверили их; бронь комнаты не подтверждена; Nina согласилась позвонить Jo. Краткие реплики раскрой там, где нужно.~Hello everyone, here is a summary of our discussion about the exhibition. Nina and Tom compared the two label designs and both preferred the blue labels. They also checked the label dates. These are completed actions, but they should not be confused with a check of the room booking. Tom thinks the room will be available because Jo said so. He has not verified that information himself, and we do not yet have a booking confirmation. During the discussion, a reference to the bigger one was clarified: Tom meant the larger display board, not a different room. Please keep that distinction in the preparation notes. Nina has agreed to call Jo and ask for confirmation of the room and any relevant conditions. The call has not happened yet, so no result should be reported at this stage. We also expressed the hope that the exhibition would not be cancelled. That was a wish, not a report of an organiser's decision. Once Nina has spoken to Jo, we can send a further update stating what is confirmed and what remains open. Until then, please avoid publishing the room as a completed booking.~Проверь объём, раскрытые ссылки, выполненное/обещанное и надежду/факт; модель не единственный ответ.
text~message~Напиши 180–220 слов организатору поездки: Leah связалась с водителем, подтверждения нет; Omar предпочитает короткий маршрут, вход не проверен; Omar согласился отправить оба варианта. Не превращай can/hope в факт.~Hello, I am writing to clarify the status of the proposed club trip. Leah has contacted the driver to ask about availability, but she has not received a booking confirmation. Omar has not spoken to the driver himself. Both can send route information, and they agreed that Omar would send the two proposed routes to avoid creating competing versions. Omar prefers the shorter route, provided that the entrance is suitable. The distance has been checked, but the final doorway has not. Neither route should therefore be described as approved. Omar will ask whether the driver can visit the entrance before the group chooses. This is a request for a further check, not evidence that the visit has already taken place. Leah hopes that confirmation will arrive soon, but she cannot promise when the driver will respond. She has offered to update the group when a reply is received. In the written notes, please use the full route descriptions instead of the shorter one or the other one unless the reference is completely clear. This will help members who did not attend the conversation understand the options and avoid treating a preference as a confirmed arrangement.~Оцени роли, референты, условия и объём; не засчитывать простое совпадение.
text~form~Дай три отклика на I don’t know the route: neither, nor и either.~Neither do I. Nor do I. I don’t either.~Все сохраняют отрицание; Me neither допустимо разговорно, но иная заданная схема.
text~meaning~Редактор заменил I hope so на It is confirmed. Объясни потерю.~Желание превратилось в утверждение о подтверждении, которого не было.~Назови изменение факта, не только регистра.
speech~message~Роли: ты можешь проверить текст, партнёр тоже; согласуйте одного исполнителя и перескажите договорённость.~So can I. Shall I check this version while you collect the questions?~Нужен явный ответ партнёра; предложение не готовое соглашение.
speech~message~Партнёр даёт два коротких неоднозначных ответа; уточни оба и сообщи полный итог.~By “one”, do you mean the room? And does “did” mean you checked it or booked it?~Проверка понимания в живом обмене, не только монолог.
text~message~После обратной связи сохрани краткую и развёрнутую версии собственного сообщения; назови устранённую двусмысленность.~Я заменил неясное it на the booking request и отделил can send от sent.~Нужны реальные версии ученика и конкретное основание.`),
bank(id,'review','Смешанное и отложенное восстановление','review',`short~form~I was late. So ___ they. (was/were)~were~Be согласуется с новым plural they.
short~form~I haven’t seen it. Nor ___ she. (has/does)~has~Perfect и singular she.
short~form~I need equipment. Do you have ___? (some/one)~some~Equipment здесь неисчисляемо.
short~meaning~So I do в ответ на You have my ticket добавляет нового участника? (yes/no)~no~Подтверждает тот же факт.
sentence~form~Исправь auxiliary: I enjoy it; so do Mira.~I enjoy it; so does Mira.~Does согласуется с Mira.
text~meaning~Will it be cancelled? I hope not. Раскрой отрицательную надежду.~I hope it will not be cancelled.~Не объявлять отмену доказанной или исключённой.
text~message~Сократи свой абзац на две повторяющиеся группы без потери времени и участников.~Заменить ясный повтор имени на one/ones, действие на подходящий auxiliary.~Оцени обе версии, не количество удалённых слов само по себе.
speech~sound~Партнёр говорит I could help; ответь с so и уточни условия.~So could I. What would we need to do?~Модальность и реальные условия, не выполненная помощь.
text~message~Через 7 дней: новый диалог о выборе книги; используй one/ones, think so и ellipsis с to, затем раскрой их.~I prefer the shorter one. I think so too. I can lend it if you want me to.~Нужен ясный предшествующий контекст для so; без него работа неполная.
speech~sound~Через 7 дней: новые положительные и отрицательные реплики партнёра; отвечай с подходящими auxiliaries и уточняй неоднозначное.~So have I. Neither can I. Which version do you mean?~Реальный аудиообмен и перенос, не заученный перечень.`)
],tests:[exam(id,'a',`short~form~I need a notebook. Can you lend me ___? (one/it; любой подходящий)~one~Экземпляр класса, не конкретный ранее найденный предмет.
short~form~I repaired the lamp and kept ___. (it/one)~it~Та же лампа, не другой экземпляр.
short~form~I prefer the narrow shelves, not the wide ___. (one/ones)~ones~Plural shelves заменяется ones.
short~form~I have finished. So ___ Mira. (has/does)~has~Perfect и singular Mira.
short~form~I didn’t go. Neither ___ we. (did/do)~did~Сохраняется прошедшее отрицание.
short~form~I can wait if you want me ___. (to/so)~to~После to опущено wait.
sentence~form~Для «она тоже» переставь: she / can / so.~So can she.~So + modal + subject.
sentence~form~Исправь только auxiliary: I know the answer; he do too.~I know the answer; he does too.~Does заменяет knows the answer.
short~meaning~Will it snow? I hope not. Желаемый исход: snow/no snow?~no snow~Надежда на отрицательное событие.
short~meaning~You have my notes. So I do! Это confirmation/addition?~confirmation~Подтверждается уже сказанное о том же лице.
text~meaning~Почему I think not не стоит автоматически считать ошибкой вместо I don’t think so?~Оба варианта нормативны, первый часто формальнее.~Свободный ответ не ограничен одной строкой.
text~meaning~I like the newer one: что нужно уточнить, если обсуждались план и проектор?~Do you mean the newer plan or the newer projector?~Референт не выбирается случайно.
text~evidence~Lena says the hall is free; I think so too. Можно записать independently checked?~Нет, мнение по словам Lena не независимая проверка.~Сохранить источник.
text~form~Раскрой I can send it if you want me to, где it — draft.~I can send the draft if you want me to send it.~Сохрани возможность и исполнителя, не прошедшую отправку.
text~message~Сократи Maya checked the route. Leon checked the route too двумя нормативными способами.~Maya checked the route; Leon did too. Maya checked the route; Leon did so too.~Сохрани двух участников и прошлое.
text~message~Напиши 180–220 слов: клуб выбирает два плаката; Eva и Dan предпочли светлый, Dan проверил даты, Eva нет; бронь печати известна только со слов Kim; Eva согласилась уточнить. Раскрой неясные замены.~Hello everyone, here is the current position on the club posters. Eva and Dan compared two designs and both preferred the lighter poster. Dan has checked the dates on that design, but Eva has not. Their shared preference should not be confused with a second independent check. The printing arrangement is also still uncertain. Kim said that a printing slot was available, and Dan thinks that it is, but neither speaker reported receiving a booking confirmation. We should therefore name Kim as the source rather than describe the slot as independently verified. Eva has agreed to contact Kim and ask what has actually been arranged. That is a future action, not a completed conversation. Until she replies, please avoid telling members that printing is confirmed. The short expressions the lighter one and I think so were understandable during the discussion, but they could be unclear to someone reading these notes later. For that reason, the summary names the poster and the printing slot explicitly. Once Eva has obtained a response, we can update the record, keeping the design choice, the date check and the printing arrangement as three separate matters.~Объём, референты, отрицание, источник и принятый шаг; содержательная оценка.
speech~sound~Сравни So did I и So I did в новых диалогах; слушатель объясняет функцию.~I arrived early. So did I. / You did call her. So I did!~Аудио и различение добавления/подтверждения.
speech~message~Партнёр говорит I can do it. Уточни действие и согласуйте исполнителя без выдуманного завершения.~Do you mean checking the draft or sending it? Which action are you offering to take?~Нужен ответ партнёра и точный итог.
text~meaning~I would like to после вопроса о поездке доказывает прошлую поездку?~Нет, желание и выполненное действие различны.~Различи факт и отношение к возможности.
text~form~Почему I need advice. Have you got one? требует пересмотра?~Advice неисчисляемо; any/some advice или a piece of advice с one для единицы.~Не объявлять запрет one для всех значений любых существительных.
text~message~Раскрой разговорное Seen the invitation? для внешнего письма.~Have you seen the invitation?~Уместна полная форма; разговорный вариант не объявлять неграмотным.
text~evidence~Jo opened the gate and Mira checked it. Что изменит удаление Mira?~Проверка перейдёт к Jo как общему субъекту.~Сохранение участников обязательно.
text~message~Что проверить перед заменой повторов на did/so/one в отчёте?~Однозначную ссылку, участника, время, отрицание и модальность.~Дай конкретный пример из собственного текста.
speech~sound~Ответь на I haven’t called ещё одним отрицательным участником we.~Neither have we. / We haven’t either.~Оба нормативны; аудио и сохранение Perfect.`),
exam(id,'b',`short~form~I need a folder. Have you got ___? (one/it; любая подходящая)~one~Класс folder, не известный конкретный объект.
short~form~I found the map and copied ___. (it/one)~it~Копируется найденная карта.
short~form~Use the clean cups, not the dirty ___. (one/ones)~ones~Plural cups требует ones.
short~form~I was ready. So ___ Omar. (was/did)~was~Сохраняется be в прошлом.
short~form~I cannot stay. Neither ___ she. (can/does)~can~Модальность сохраняется.
short~form~I can explain if you would like me ___. (to/so)~to~Explain опущено после to.
sentence~form~Для «мы тоже» переставь: we / have / so.~So have we.~So + auxiliary + subject.
sentence~form~Исправь только auxiliary: I own a bicycle; she do too.~I own a bicycle; she does too.~Состояние допускает вспомогательное does.
short~meaning~Will they come? I hope so. Это wish/confirmed attendance?~wish~Желание прихода, не подтверждённая явка.
short~meaning~I like it. So does Jo. Это addition/confirmation of the same person?~addition~Добавлен другой участник Jo.
text~meaning~Дай два обычных отрицательных отклика на I don’t understand с neither/nor.~Neither do I. Nor do I.~Оба нормативны в изучаемой схеме.
text~meaning~The larger one неясно после разговора о столе и помещении. Спроси без догадки.~Do you mean the larger table or the larger room?~Явно назови обе возможные ссылки.
text~evidence~Omar says it is approved; I think so. Что нельзя утверждать о личной проверке автора?~Нельзя писать, что автор сам проверил одобрение; указан источник и мнение.~Не подменять свидетельство уверенностью.
text~form~Раскрой We can review it if you want us to, где it — proposal.~We can review the proposal if you want us to review it.~Us остаётся исполнителем желаемого действия.
text~message~Сократи Rita reviewed the note. Sam reviewed the note too с auxiliary и do so.~Rita reviewed the note; Sam did too. Rita reviewed the note; Sam did so too.~Время и участники сохраняются.
text~message~Напиши 180–220 слов: Rita и Sam выбрали меньшую комнату; Rita проверила маршрут, Sam нет; доступность комнаты сообщил Alex без подтверждения брони; Sam согласился уточнить. Не усиливай I think so.~Hello everyone, this note separates the choices and checks discussed at our meeting. Rita and Sam both preferred the smaller room. Rita has checked the route to it, but Sam has not, so the shared preference does not represent two independent inspections. Alex reported that the room was available. Sam said that he thought so too, but no one reported receiving a booking confirmation. We should keep the source of that information visible and avoid calling the room booked. Sam has agreed to ask Alex whether a reservation has been made and whether any conditions remain outstanding. This is an agreed next action, not a completed check. The phrase the smaller one was clear while the two rooms were being compared, but it would be less clear in a message that also discusses tables and signs. The written record therefore repeats the room description where necessary. We also need to distinguish access from availability: a suitable route does not prove that the room is free on the required date. After Sam receives a reply, we can update the booking status without changing the record of who checked the route. Please correct this summary if it does not reflect the discussion.~Оцени 180–220 слов, источники, участников, статусы и ясность референтов.
speech~sound~Дай полный и разговорный вопрос о новом расписании; объясни различие адресата.~Have you seen the new timetable? / Seen the new timetable?~Нужны аудио, уместный контекст и понятный смысл.
speech~message~Партнёр ответил I hope not на отрицательный вопрос, и смысл неясен. Попроси полную формулировку.~Do you mean you hope it will happen or that it will not happen?~Не угадывай область отрицания, получи ответ.
text~meaning~Почему I’m afraid so не обязательно буквальное признание страха?~Формула может вежливо сообщать неприятный положительный ответ.~Функция зависит от диалога.
text~form~One of the rooms are free: исправь и объясни ядро согласования.~One of the rooms is free. Ядро one, не rooms.~Оцени форму и механизм.
text~message~Перепиши Neither don’t we в базовой модели отрицательного отклика.~Neither do we.~Neither уже отрицательно; don't лишнее в этой модели.
text~evidence~I can send it и I did so сообщают одинаковый статус?~Нет, возможность отправить и уже выполненное действие различны.~Контекст должен задавать send для did so.
text~message~Дай пример, когда повтор полного имени полезнее one, и объясни почему.~После обсуждения комнаты и шкафа the larger room яснее, чем the larger one.~Не сокращать ради количества удалённых слов.
speech~sound~Ответь на I went yesterday с новым участником Mira и восстанови смысл.~So did Mira. Mira went yesterday too.~Аудио, прошлое и согласование с новым участником.`)]};

import {bank,exam,examples,goal} from './unit-tools.mjs';
import {styleSources} from './style-reference.mjs';
const id='C202-concision';
const reading=`This fictional editing case concerns a notice from a neighbourhood library. The library is changing how visitors collect reserved books. Its first draft begins, "It is important to note that, due to the fact that a reorganisation of the collection process is being undertaken, the implementation of certain changes will take place." The sentence is long, but its main weakness is not its word count. It delays the information that visitors need: what changes, when it changes and what they should do.

The facts supplied to the editor are specific. From Thursday, reserved books will be collected at the side desk rather than the main desk. Opening hours remain unchanged. Visitors should bring the confirmation message. If they do not have that message, a member of staff can help identify the reservation. The change is a trial, and no end date has been fixed. An editor who shortens the notice to "Collect your books elsewhere from Thursday" has removed too much. Elsewhere is shorter than at the side desk, but it is less useful.

The revised opening says, "From Thursday, please collect reserved books at the side desk." It places the date and action early. A second sentence preserves the unchanged opening hours, and a third explains the confirmation message and the help available. The editor does not remove the help sentence as a detail merely because most visitors may have their message. For a visitor without it, that sentence determines whether the instructions appear to exclude them.

One paragraph uses the passive: "Your reservation will be checked at the desk." A volunteer insists that every passive must be converted to active voice. The editor disagrees. The reservation is already the topic, and the identity of the checking staff member is not important in that sentence. Elsewhere, however, responsibility matters: "A review will be conducted" leaves visitors unsure who will consider their feedback. The facts identify the library coordinator as the reviewer, so the revised sentence names the coordinator. The choice depends on information and emphasis, not on a universal ban.

The editor also finds a dense phrase, "reservation collection confirmation message checks." It stacks several nouns without showing their relationships. Splitting the information into a verb phrase makes the action clearer. Yet not every noun phrase needs expansion: side desk is short and familiar. The goal is not to abolish nouns or make every sentence equally short. It is to make the reader's path through the information manageable.

Another draft sentence says, "Visitors can collect books quickly, securely and without any confusion." The parallel adverbs sound polished, but the final phrase promises an outcome that has not been tested. The editor keeps the actual steps and removes the unverified guarantee. A later sentence says, "Some visitors may need help." Both some and may carry meaning. Cutting them to produce "Visitors need help" changes the group and the level of certainty, even though the sentence becomes shorter.

Before publication, the coordinator reads the notice aloud. One sentence contains three conditions separated by commas; the coordinator splits it and labels the alternative route for people without a message. This is a structural change for comprehension, not a claim that long sentences are always wrong. A visitor then paraphrases the notice and asks whether the library is closing earlier. The editor adds the unchanged-hours sentence closer to the opening.

The final version is clearer because it reduces unnecessary delay and makes necessary relationships explicit. It retains a useful passive, removes an unclear noun stack and keeps the exception that prevents a misunderstanding. Concision is judged against the reader's task. The shortest possible notice would not necessarily be the most effective one.`;
const listening=`This is a fictional briefing about revising a notice for a shared garden. I am Marta, and I want to explain why the shortest draft is not the version we should publish. The notice concerns the collection of tools after a weekend session. We have confirmed the collection point and the hours, but not every claim in the first draft was supported.

The first sentence said that arrangements for the facilitation of tool collection would be implemented. We can replace that with a direct action: collect tools from the east shed between ten and twelve on Sunday. The location, day and hours are necessary information, not clutter. We should not cut them to make the sentence look elegant.

The draft also said that tools would be inspected. A reader asked who would do the inspection. For this notice, the answer matters because members need to know whom to contact about a problem. The coordinator, Ben, will inspect the tools. Naming him makes responsibility clear. That does not mean every passive in every document is wrong; it means this particular reader needs the agent.

There is an exception for anyone unable to come during those hours. They should contact Ben to arrange another time. Removing that sentence would leave some members without a usable next step. The phrase "everyone can collect without difficulty" should go, because we have not checked that claim.

One editor changed "Some tools may need repair" to "Tools need repair." That is not a harmless cut. The first sentence leaves both the affected group and the need uncertain. The second sounds like a general established problem. We must preserve some and may unless new information justifies a change.

Finally, we will read the notice aloud and ask a member to explain where to go and what to do if the time is unsuitable. A smooth rhythm will help, but it will not compensate for a missing location or exception. Please keep the original draft and record why each substantial deletion or addition was made.`;
export default {id,topic:'C202',title:'Ясность и ёмкость: предложение, ритм и сохранение смысла',prerequisites:['C202-idiomatic','C103-editing'],references:['sentence-economy','meaning-preserving-editing','nominal-groups'],sources:styleSources,
goals:[goal('form','Перестраивать предложение с сохранением грамматических связей','forms'),goal('choice','Выбирать сокращение, залог и структуру по функции','meaning'),goal('evidence','Проверять сохранность условий, участников и неизвестности','reading'),goal('message','Создавать ясный текст и объяснять редакторский выбор','production'),goal('sound','Проверять ритм и понимание устного сообщения','sounds')],
explanation:[
{title:'Concision измеряется полезностью слова',text:'Ёмкий текст передаёт необходимый смысл без лишней нагрузки. It is important to note that often delays the point, но иногда автор действительно маркирует важное исключение; решение зависит от функции. Due to the fact that часто можно заменить because, at this point in time — now, in order to — to. Это не лицензия удалять may, some, not, before, only или unless: такие слова задают силу и границы утверждения. После каждого сокращения сформулируй, что читатель теперь считает фактом и какое действие выполнит. Меньше слов не автоматически лучше.'},
{title:'Сначала действие, участник и адресат',text:'The implementation of a review will be undertaken содержит много формы вокруг действия. We will review the draft яснее, если известно, кто we, и именно review обещан. Нельзя вставить we, manager или team только ради активного залога, когда исполнитель не установлен. Если The report was lost и виновный неизвестен, активная версия Someone lost the report может уже изменить картину причины, а The assistant lost it добавит ложный факт. Перед перестройкой найди subject, verb, object, time и условие. Сохраняй реальных участников и степень ответственности.'},
{title:'Номинализация бывает лишней и полезной',text:'Make an assessment of может стать assess; carry out an examination of — examine, если смысл и регистр сохраняются. Но The assessment took two days называет уже введённое событие и может быть удобнее повторного придаточного. Approval, arrival и refusal иногда нужны для точного различения событий или связности. Проблема не в существительном как классе, а в том, скрывает ли оно действие, время или автора. В тексте о процедуре перевод нескольких nominalisations обратно в глаголы помогает; в абзаце о выводах некоторые имена связывают уже обсуждённые действия.'},
{title:'Пассив — средство фокуса, не диагноз плохого стиля',text:'The package was delivered yesterday сохраняет package как тему и подходит, если исполнитель не важен. The team delivered the package yesterday выделяет действие команды. Обе версии могут быть точны. Если адресату нужен ответственный, пассив без by-phrase может мешать: Your request will be reviewed by the coordinator либо The coordinator will review your request. Не превращай delivered в approved и will be reviewed в has been reviewed. Залог не должен скрывать известную ответственность, но активный залог не даёт права выдумывать неизвестного исполнителя.'},
{title:'Разгрузка именных цепочек',text:'Visitor access request approval notification process содержит несколько существительных с неявными связями. Разверни главное действие: We notify visitors when their access requests are approved. При этом проверь, действительно ли we отправляет уведомление и всегда ли after approval. Familiar software terms вроде user account не нужно разворачивать каждый раз. Правило не может быть «не более двух существительных» для всех жанров. Сложная именная группа может быть точным термином; тогда дай определение и используй последовательно. Ясность определяется знаниями адресата и реальными отношениями частей.'},
{title:'Информация от известного к новому',text:'Если абзац уже про booking form, начало The form… помогает продолжить нить; внезапное начало An external coordinator… может сместить фокус без причины. Но важная новая ответственность иногда как раз требует такого смещения. Свяжи предложения через точное повторение ключевого имени, местоимение с ясным референтом или переход, выражающий реальную связь. Не заменяй каждое повторение синонимом: form, portal, service, platform могут показаться разными объектами. Сначала устойчивые референты, затем ритмическое разнообразие. This без понятного antecedent лучше уточнить.'},
{title:'Параллельность и уровень перечисления',text:'The guide explains how to register, how to pay and how to cancel делает одинаковую функцию элементов видимой. The guide explains registration, paying and how to cancel может быть понятным, но структура неровная; редакция зависит от контекста. В параллельном списке не должны смешиваться действие, причина и результат как равноправные шаги. Краткие заголовки, фрагменты списка и полные предложения имеют свои правила оформления. Пунктуацию открытых редакций проверяют содержательно: автоматическая нормализация строк игнорирует её и не доказывает, что comma splice исправлен.'},
{title:'Разделить длинное не значит разорвать связь',text:'If you have a code, enter it before continuing; otherwise, contact support содержит условие и альтернативу. Можно разделить на два предложения, сохранив who does what and when. Если оставить Enter the code. Contact support, условность исчезла, и читатель может выполнить оба действия. Слишком много коротких предложений тоже создаёт обрывистость. Длинное предложение полезно, когда показывает подчинённость и относительный вес частей; разбивка полезна, когда читатель теряет основной шаг. Разная длина даёт ритм, но среднее число слов не критерий истинности.'},
{title:'Не вырезать исключение вместе с повтором',text:'Bring your confirmation message. If you do not have it, ask at the desk описывает основной и резервный путь. Второе предложение не redundant, даже если большинству оно не понадобится. Only members with a confirmed booking нельзя сократить до members, если доступ ограничен подтверждением. During the trial нельзя удалить из временного правила без изменения срока действия. Some requests may take longer нельзя превращать в Requests take longer: меняются группа и уверенность. При спорной правке отдельно запиши удалённое условие и спроси, осталось ли оно доступным читателю.'},
{title:'Избыточность определяется контекстом',text:'Repeat again может быть лишним, если речь о первом повторе, но нормальным, если повторить нужно ещё раз после уже состоявшегося повтора. Final outcome часто можно сократить, однако final может противопоставлять промежуточный исход окончательному. Future plans обычно избыточны как сочетание, но формальное правило удалить future из любого контекста слишком грубо. Важные предупреждения иногда намеренно повторяют ради навигации или доступности. Редактор должен назвать, какая функция исчезает или остаётся после удаления, а не охотиться за запрещёнными словами без чтения.'},
{title:'Ритм помогает, но не заменяет факты',text:'Чтение вслух обнаруживает перегруженные вставки, неудобные последовательности и неожиданные ударения. Пауза может выделить условие, но не исправляет отсутствующее unless. Красиво звучащая тройка quickly, safely and effortlessly содержит три обещания, каждое требует оснований. Не сохраняй ложную симметрию ради ритма. В устном сообщении можно повторить ключевую дату и действие; в письменной инструкции вынести их в заголовок. TTS полезно как образец, но реальную понятность и произношение проверяет слушатель по собственному аудио ученика.'},
{title:'Проверка до и после',text:'Положи рядом original и revision. Сверь участника, действие, время, объект, отрицание, условие, модальность и следующий шаг. Затем отдельно оцени порядок информации, плотность предложения, терминологию и тон. Если факт неизвестен, задай вопрос автору вместо заполнения пробела правдоподобным именем. Запиши reason для каждой значимой правки: убран повтор, восстановлен референт, назван известный ответственный, сохранено исключение. Сокращение на определённый процент не доказывает успех. Новая версия должна позволять адресату точнее восстановить смысл и выполнить задачу.'}
],examples:examples(`We assessed the proposal.~Мы оценили предложение.~Глагол вместо make an assessment.
The assessment took two days.~Оценка заняла два дня.~Полезное имя события.
Please reply now.~Ответьте сейчас.~At this point in time часто можно сократить.
We met to review the draft.~Мы встретились, чтобы проверить черновик.~To вместо in order to при сохранении цели.
Because the room is closed, use the side entrance.~Поскольку зал закрыт, используйте боковой вход.~Причина и действие видимы.
The notice was sent yesterday.~Уведомление отправлено вчера.~Пассив при фокусе на notice.
The coordinator sent the notice yesterday.~Координатор отправил уведомление вчера.~Исполнитель известен и назван.
The file was lost; the cause is unknown.~Файл потерян; причина неизвестна.~Не выдумывать виновного ради active voice.
We notify visitors when requests are approved.~Мы уведомляем посетителей после одобрения заявок.~Развёрнуты связи именной цепочки.
Use your user account.~Используйте свою учётную запись.~Знакомое сочетание не требует постоянного развёртывания.
The form records requests. The form does not confirm bookings.~Форма регистрирует заявки, не подтверждает бронь.~Повтор имени может быть полезен.
The form records requests; confirmation follows review.~Форма регистрирует заявки; подтверждение после проверки.~Сохранены стадии.
The guide explains how to register and how to cancel.~Руководство объясняет регистрацию и отмену.~Параллельные рамки.
Please check the date, the place and the contact name.~Проверьте дату, место и контакт.~Одинаковый уровень элементов.
If you have a code, enter it.~Если есть код, введите его.~Условность сохраняется.
If not, ask at the desk.~Если нет, спросите у стойки.~Явная альтернативная ветка.
Some requests may take longer.~Некоторые заявки могут занять больше времени.~Some и may не лишние.
Requests take longer.~Заявки занимают больше времени.~Более общее и уверенное утверждение.
Bring the message, if you have it.~Принесите сообщение, если оно есть.~Условие ограничивает просьбу.
Only confirmed members may enter.~Вход разрешён только подтверждённым участникам.~Ограничение нельзя потерять.
The trial rule applies this month.~Правило испытания действует в этом месяце.~Временная рамка важна.
Could you repeat that again?~Не могли бы вы повторить это ещё раз?~Again может быть нужно после предыдущего повтора.
This is the final result, not an interim finding.~Это окончательный результат, не промежуточный.~Final выполняет функцию.
The review is pending.~Проверка ещё ожидается.~Не completed review.
The review has finished, but approval is pending.~Проверка закончена, одобрение ожидается.~Разные статусы.
You can collect the book at the side desk.~Книгу можно забрать у боковой стойки.~Место важно адресату.
Opening hours remain unchanged.~Часы работы не меняются.~Предупреждает неверный вывод.
Contact Ben if the time is unsuitable.~Если время не подходит, свяжитесь с Ben.~Не безусловная дополнительная задача.
This change affects collection, not opening hours.~Изменение касается выдачи, не часов работы.~Явный контраст.
A shorter notice can still be less useful.~Более короткое объявление может быть менее полезным.~Краткость не единственная цель.`),
banks:[
bank(id,'forms','Перестройка предложения','practice',`short~form~We made an assessment of it → We ___ it. (assessed/assessment)~assessed~Нужен глагол для действия.
short~form~Because ___ delay: of/that, после because именная группа.~of~Because of + noun phrase.
short~form~Because ___ was delayed: it/its.~it~После because здесь полное придаточное.
short~form~The request has ___ reviewed. (been/being)~been~Perfect passive сохраняет завершённость проверки.
sentence~form~Убери due to the fact that: We waited due to the fact that the gate was closed.~We waited because the gate was closed.~Причина остаётся придаточным.
sentence~form~Активный залог, известный автор: The note was sent by Mia.~Mia sent the note.~Сохранены участники и прошедшее время.
sentence~form~Пассив с явным автором: Ben checked the list.~The list was checked by Ben.~Сохранены роли действия.
short~form~We met ___ discuss the draft. (to/for)~to~Цель через to + verb.
short~form~The guide explains how to register and how to ___. (cancel/cancelling)~cancel~Параллельная структура how to.
short~form~Please read the note ___. (careful/carefully)~carefully~Adverb относится к read.
text~form~Замени at this point in time одним словом в текущем сообщении.~Now.~Сокращение допустимо при той же временной рамке.
text~form~Разверни request approval notification без выдуманного автора.~Notification that the request has been approved.~Связь approval и notification становится ясной.
text~form~Раздели If you have a code, enter it; otherwise ask for help на ясные предложения.~If you have a code, enter it. If you do not, ask for help.~Не превращать альтернативы в две обязательные команды.
text~form~Сделай параллельным checking names, to record dates and how to file forms.~Checking names, recording dates and filing forms.~Один уровень грамматической формы.
text~choice~The assessment took an hour: обязательно убрать существительное?~Нет, имя события здесь выполняет ясную функцию.~Номинализация не всегда ошибка.
text~evidence~The record was lost, agent unknown: можно вставить manager?~Нет, активный залог не разрешает выдумать виновного.~Неизвестность сохраняется.
text~form~Уточни this после двух возможных событий без выбора догадкой.~Спросить, какое событие имеется в виду, затем назвать его.~Референт должен быть установлен.
text~message~Сохрани review complete / approval pending в краткой строке.~The review is complete; approval is still pending.~Разные стадии не склеиваются.`),
bank(id,'meaning','Что можно сократить, а что нельзя','practice',`short~choice~Concision = minimum word count любой ценой? (yes/no)~no~Необходимый смысл и действие важнее длины.
short~choice~Some may → all will сохраняет смысл? (yes/no)~no~Изменены группа и сила утверждения.
short~choice~Passive всегда wrong style? (yes/no)~no~Фокус и известность исполнителя определяют выбор.
short~choice~Repeat again всегда избыточно? (yes/no)~no~Может означать ещё один повтор после предыдущего.
text~choice~Объясни полезность passive при уже обсуждаемом package.~Сохраняет package как тему, если исполнитель не важен или неизвестен.~Не скрывать значимую известную ответственность.
text~choice~Когда final не лишнее в final result?~Если противопоставляется промежуточному результату.~Контекст задаёт функцию.
text~evidence~Убрали during the trial: какой риск?~Временное правило стало восприниматься как постоянное.~Срок действия — содержание.
text~evidence~Убрали exception для missing code: какой риск?~Часть читателей лишилась альтернативного действия.~Не статистически редкая значит ненужная.
text~choice~Почему синонимы form/portal/platform могут ухудшить связность?~Читатель может решить, что это разные объекты.~Точное повторение иногда лучше разнообразия.
text~choice~User account: всегда разворачивать из-за двух nouns?~Нет, знакомый термин может быть ясным.~Нет универсального лимита существительных.
text~choice~Smooth rhythm в quickly safely effortlessly гарантирует честность?~Нет, каждое обещание требует основания.~Ритм не проверка фактов.
text~message~Отредактируй Visitors can collect elsewhere, place known side desk.~Visitors can collect their books at the side desk.~Добавление слов улучшает конкретность.
text~choice~Можно ли сохранить длинное предложение с ясным условием?~Да, если структура понятна и связь полезна адресату.~Короткое не универсально лучше.
text~evidence~Пунктуация прошла string normalizer: доказана её правильность?~Нет, автоматическая нормализация может её игнорировать.~Содержательная редакторская проверка обязательна.`),
bank(id,'sounds','Читаемость вслух и смысловые паузы','pronunciation',`speech~sound~Прочти condition и alternative с паузой, партнёр называет обе ветки.~If you have a code, enter it. If not, ask at the desk.~Пауза не заменяет отсутствующее условие.
speech~sound~Выдели SOME и MAY без превращения в all/will.~Some requests may take longer.~Нужно реальное восприятие оговорки.
speech~message~Прочти длинную инструкцию, спроси, где потерялся основной шаг.~If the message is missing, contact the desk before making another request.~Дождись обратной связи, затем перестрой.
speech~sound~Сравни монотонные короткие фразы и связную версию.~The form records requests. Confirmation follows review, so please wait for the reply.~Ритм помогает связи, не меняет процесс.
speech~message~Партнёр просит active voice, но agent unknown; объясни.~We can keep the passive because the person responsible has not been identified.~Не выдумывать имя ради стилистики.
speech~sound~Произнеси COMPLETE review / PENDING approval.~The review is complete, but approval is still pending.~Разборчивость и точность статусов.
speech~message~Уточни, нужен ли читателю исполнитель проверки.~Do readers need to know whom to contact about the review?~Ответ влияет на редакцию.
speech~sound~Сделай date/place ясными в устном notice.~From Thursday, collect reserved books at the side desk.~Слушатель повторяет дату и место.
speech~message~Партнёр не имеет confirmation: объясни exception.~If you do not have the message, ask a member of staff for help.~Не превращать исключение в запрет доступа.
speech~sound~Прочти without shouting: Opening hours remain UNCHANGED.~The collection desk changes, but the opening hours do not.~Акцент по смыслу, не громкость сама по себе.`),
bank(id,'reading','Чтение: объявление библиотеки','reading',`short~evidence~С какого дня меняется collection?~Thursday~Дата дана в фактическом наборе.
short~evidence~Новая стойка side/main?~side~Вместо главной стойки используется боковая.
short~evidence~Opening hours изменились? (yes/no)~no~Часы работы остаются прежними.
short~evidence~End date trial установлена? (yes/no)~no~Конечная дата не назначена.
text~evidence~Что делать visitor без confirmation message?~Ask a member of staff to help identify the reservation.~Это рабочий альтернативный путь.
text~choice~Почему elsewhere плохая экономия?~Удаляет нужное место, хотя оно известно.~Короче не значит яснее.
text~choice~Почему один passive сохраняется, а другой изменяется?~В первом важна reservation, во втором читателю нужен ответственный за feedback.~Выбор по функции.
text~evidence~Кто рассматривает feedback?~The library coordinator.~Ответственный указан в исходных фактах.
text~choice~Чем noun stack мешает?~Не показывает связи между reservation, collection, confirmation и checking.~Не запрет всех именных групп.
text~evidence~Какое обещание в polished list не проверено?~Collection without any confusion, также любые необоснованные гарантии скорости/безопасности.~Не добавлять успешный опыт trial.
text~choice~Some visitors may need help → Visitors need help: что потеряно?~Ограниченная группа и неопределённость.~Не безвредное сокращение.
text~message~Какой feedback заставил поднять unchanged hours ближе к началу?~Читатель спросил, закрывается ли библиотека раньше.~Редактура по реальному недопониманию.`,reading),
bank(id,'listening','Аудирование: выдача садовых инструментов','listening',`short~evidence~Имя speaker?~Marta~Marta объясняет правки объявления.
short~evidence~Какой shed: east/west?~east~Место выдачи — восточный сарай.
short~evidence~День выдачи?~Sunday~Выдача в воскресенье.
short~evidence~Имя coordinator?~Ben~Ben проверяет инструменты.
text~evidence~Назови часы collection.~Between ten and twelve.~Информация указана в записи.
text~choice~Почему часы нельзя удалить как clutter?~Они необходимы для действия читателя.~Не декоративная деталь.
text~evidence~Почему agent проверки важен здесь?~Читателю нужно знать, к кому обратиться о проблеме.~Выбор active связан с задачей.
text~evidence~Что делать, если время не подходит?~Contact Ben to arrange another time.~Не объявлять человека исключённым.
text~choice~Почему everyone without difficulty убирают?~Не проверили, что все могут забрать без трудностей.~Нет основания для гарантии.
text~choice~Some tools may need repair: две границы?~Some ограничивает группу, may оставляет необходимость ремонта неопределённой.~Не established problem for all.
text~message~Как проверить новую инструкцию со слушателем?~Попросить назвать место и действие при неудобном времени.~Не просто оценить приятный голос.
text~evidence~Что сохраняют после правок?~Исходник и причины существенных удалений и добавлений.~Редакторская прослеживаемость.`,listening),
bank(id,'production','Письмо: сокращение с проверкой смысла','writing',`text~message~Сократи It is important to note that the desk opens at nine без изменения времени.~The desk opens at nine.~Если маркировка важности не нужна, её можно убрать.
text~message~Разверни неясное visitor request status update process одной ясной фразой.~A process for updating visitors on the status of their requests.~Другие интерпретации требуют уточнения автора.
text~message~Сохрани unknown agent в revision: The file was deleted; no one knows by whom.~The file was deleted, but the person responsible is unknown.~Не вставлять team ради active.
text~message~Сделай explicit known responsibility: Kai will review, не review will occur.~Kai will review the requests.~Время и объект сохраняются.
text~message~Напиши 220–280 слов: notice. С субботы reserved tools в north shed, 9–11, прежние правила займа; bring message, без него ask staff; trial end unknown; Jo reviews feedback.~From Saturday, please collect reserved tools at the north shed between nine and eleven. The collection point is changing, but the existing borrowing rules remain in place. Please bring your confirmation message so that staff can identify the reservation. If you do not have the message, ask a member of staff for help rather than assuming that you cannot collect the tools. The new arrangement is a trial, and an end date has not yet been fixed. We want to check whether the collection instructions are clear and whether the location works for members. Please send any comments to Jo, who will review the feedback. A comment will help us assess the arrangement, but it does not automatically mean that a requested change has been approved. The main action is to go to the north shed during the stated hours. The message is useful for identifying your reservation, and staff can help if it is missing. We have kept that alternative in the notice because it gives members a workable next step. We are not claiming that the trial will be effortless for everyone or that all possible difficulties have already been resolved. Before coming, check the location and hours in this notice. If any part of the instruction is unclear, contact the team for clarification. We will use feedback to decide which parts of the process need further explanation or revision.~220–280 слов; место/время/исключение/ответственный/unknown end, без новых правил.
text~message~Напиши 100–140 слов: объясни пять решений в своём notice, включая полезное добавление и сохранённую оговорку.~I placed the collection point and hours at the beginning because they determine the reader's next action. I kept the statement that borrowing rules are unchanged to prevent the location change from being mistaken for a change in eligibility. The sentence about a missing confirmation message is necessary, not surplus detail, because it provides an alternative route. I named Jo as the reviewer of feedback because responsibility is known and relevant. I also retained the fact that no trial end date has been fixed. Removing that uncertainty would suggest a schedule that the source does not provide. These decisions aim at usable information rather than the lowest possible word count.~100–140 слов; конкретные сохранённые связи и причины.
speech~message~Прочти notice партнёру; он пересказывает место, время и исключение.~Исправь только реальные расхождения между исходными фактами и пересказом.~Не записывать за партнёра вымышленный ответ.
speech~message~Защити один полезный passive перед редактором, предлагающим удалить все.~The reservation is already our topic, and the individual checker is not relevant here.~Контекст должен действительно оправдывать выбор.
text~message~Сделай два варианта длинного условия: одно предложение и два.~If your code is missing, ask for help before submitting again. Your code may be missing; if so, ask for help before submitting again.~Второй вариант должен сохранять условность, не устанавливать потерю кода.
text~message~Составь список из трёх параллельных действий без добавления результата.~Check the date, record the place and confirm the contact.~Согласовать грамматическую форму и уровень.
text~message~Покажи полезное повторение ключевого термина вместо ложного synonym variety.~The form records requests. The form does not itself confirm a booking.~Не создать впечатление разных систем.
text~message~Сверь сокращённый текст по восьми параметрам смысла.~Участник, действие, время, объект, отрицание, условие, модальность, следующий шаг.~Привести конкретные места, не только checklist.`),
bank(id,'review','Повторение: ясность без утраты условий','review',`short~form~Because ___ the closure: of/that.~of~Именная причина требует because of.
short~form~To check and ___ the list: update/updating.~update~Параллельные базовые формы после to.
text~choice~Почему shortest не обязательно most concise для задачи?~Можно удалить обязательную связь или факт, заставив читателя догадываться.~Ёмкость сохраняет необходимое.
text~choice~Пассив с known agent всегда скрывает ответственность?~Нет, by-phrase может явно назвать автора; фокус остаётся на объекте.~Не абсолютная оценка залога.
text~evidence~Pending review → approved: какая ошибка?~Изменение статуса, не сокращение.~Не смешивать этапы.
text~evidence~Only confirmed participants → participants: риск?~Расширяется группа допуска.~Only — содержательное ограничение.
text~choice~Почему this иногда лучше заменить именем?~Чтобы устранить конкурирующие референты.~Не каждое this запрещено.
text~choice~Когда again после repeat полезно?~Когда требуется ещё один повтор после предыдущего.~Контекст определяет избыточность.
speech~sound~Через 7 дней передай новую инструкцию с alternative route.~If your reference is missing, contact the desk before sending another request.~Слушатель восстанавливает ветки.
text~message~Через 7 дней сократи новый абзац и объясни одно оставленное длинное место.~Сохрани исходник и причину, почему детали нужны адресату.~Не механическая норма процентов.
text~evidence~Можно ли исправить пунктуацию автоматически удалением знаков?~Нет, нужно восстановить отношения предложений и проверить оформление.~Normalizer не редактор.
text~message~Найди обещание в красивой тройке и проверь его основание.~Quickly, safely, effortlessly требуют отдельных оснований или осторожной редакции.~Ритм не оправдание ложной гарантии.`)
],tests:[
exam(id,'a',`short~form~Because ___ the delay: of/that.~of~После because of именная группа.
short~form~Because the room ___ closed: is/its.~is~В придаточном нужен глагол.
short~form~The request has ___ checked. (been/being)~been~Perfect passive сохраняет фазу.
sentence~form~Активно, автор известен: The list was updated by Noor.~Noor updated the list.~Сохранены роли и время.
short~form~How to enrol and how to ___. (withdraw/withdrawing)~withdraw~Параллельные how to + base.
short~choice~Короче значит всегда точнее? (yes/no)~no~Необходимые условия могут потеряться.
text~choice~Some may → users will: назови два изменения.~Группа расширена, неопределённость заменена уверенностью.~Это изменение смысла.
text~evidence~File deleted, agent unknown: почему нельзя приписать assistant?~Исполнитель не установлен; active voice не источник факта.~Сохранить неизвестность.
text~choice~Keep passive, когда package уже тема: объясни.~Пассив может сохранять информационную нить, если исполнитель не важен.~Не универсальная ошибка стиля.
text~message~Напиши 100–140 слов: с понедельника книги у east desk, hours unchanged, confirmation message; без него staff helps; coordinator Uma reviews comments.~From Monday, please collect reserved books at the east desk. Opening hours remain unchanged. Bring your confirmation message so that staff can identify the reservation. If you do not have it, ask a member of staff for help rather than assuming collection is impossible. Uma, the library coordinator, will review comments about the arrangement. This notice changes the collection point; it does not announce different opening hours. The location and the alternative for a missing message are necessary parts of the instruction, so they should remain visible in a shorter version. If a reader cannot explain where to go or what to do without the message, the notice needs further revision.~100–140 слов; все действия и исключение, без дополнительных обещаний.
speech~sound~Выдели unchanged HOURS / changed DESK, попроси пересказ.~The desk changes, but the opening hours remain unchanged.~Звук и понимание слушателя.
speech~message~Партнёр без confirmation: объясни предусмотренный альтернативный путь.~Ask a member of staff for help identifying the reservation.~Не лишать доступа без основания.
text~choice~Final result, contrasted with interim: удалить final обязательно?~Нет, слово передаёт нужное противопоставление.~Избыточность контекстная.
text~form~Перестрой make an assessment of the proposal глаголом.~Assess the proposal.~Сохрани объект и время в полном предложении.
text~evidence~Условие during the pilot удалили. Что спросить автора?~Does the rule apply beyond the pilot, or only during it?~Не выдумывать постоянность.
text~choice~Repeated form заменили platform/service/tool: риск?~Кажется, что появились разные объекты.~Синонимы не всегда улучшают cohesion.
text~choice~Короткий user account обязательно неясный noun stack?~Нет, знакомый термин может быть уместен.~Нет универсального лимита nouns.
text~message~Сохрани code present/missing как две ветки инструкции.~If you have a code, enter it. If not, ask for help.~Не два безусловных действия.
text~evidence~Smooth rhythm подтверждает safely?~Нет, безопасность требует отдельного основания.~Стиль не доказательство факта.
text~choice~Почему длинное предложение иногда оставить?~Оно может ясно показать подчинение условия и действия.~Решение по пониманию адресата.
text~evidence~Строковый ключ проигнорировал запятую: пунктуация проверена?~Нет, нужна содержательная ручная проверка.~Не выдавать normalizer за grammar judge.
text~message~Какие версии хранить после concision pass?~Исходник, сокращение и причины существенных изменений.~Позволяет проверить потери смысла.`),
exam(id,'b',`short~form~Because ___ the missing code: of/that.~of~Именная группа после because of.
short~form~Because the code ___ missing: is/its.~is~Полное придаточное с глаголом.
short~form~The form is ___ revised now. (being/been)~being~Текущий процесс пассива.
sentence~form~Активно с известным автором: The notice was written by Ravi.~Ravi wrote the notice.~Роли и прошедшее время сохраняются.
short~form~How to apply and how to ___. (cancel/cancelling)~cancel~Параллельная рамка инфинитива.
short~choice~Passive всегда нужно удалять? (yes/no)~no~Выбор определяется функцией и фактами.
text~choice~Only approved users → users: смысл сохранён?~Нет, расширилась группа допуска.~Ограничитель нельзя считать лишним.
text~evidence~Record lost, cause unknown: допустим ли виновник из догадки?~Нет, неизвестность нельзя заменять правдоподобной историей.~Не выдумывать ради active voice.
text~choice~Repeated key term может помогать ясности?~Да, если обозначает один объект и поддерживает нить текста.~Не обязательная synonym variety.
text~message~Напиши 100–140 слов: tools в south shed по вторникам 14–16; bring receipt, без него ask Lee; Lee reviews questions; end date trial unknown.~During the trial, collect reserved tools from the south shed on Tuesdays between two and four in the afternoon. Please bring your receipt. If it is missing, ask Lee for help rather than assuming that collection is unavailable. Lee will also review questions about the arrangement. The trial's end date has not yet been fixed, so the notice should not invent a final collection date. The location, hours and alternative route are essential to the reader's task. A shorter version can remove introductory filler, but it must retain those details and the uncertainty about the end date. We should check the revision by asking a reader to explain the collection process.~100–140 слов; данные, exception, ответственный и unknown end.
speech~sound~Выдели SOME requests MAY take longer и попроси пересказ силы.~The delay is a possibility affecting some requests, not an established fact about all.~Нужна слышимость оговорки.
speech~message~Партнёр предлагает выкинуть missing receipt exception. Объясни её функцию.~It gives affected readers a next step, so it is not merely spare detail.~Обсуждать читательскую задачу.
text~choice~Repeat again после двух повторов обязательно wrong?~Нет, again может обозначать ещё один повтор.~Контекст определяет функцию.
text~form~Сократи carry out an examination of the sample глаголом.~Examine the sample.~Не менять само действие на approve.
text~evidence~If approved → approved: что произошло?~Условный результат превратился в установленный факт.~Сокращение недопустимо без нового основания.
text~choice~Action/passive choice может изменять фокус без смены фактов?~Да, если сохранены участники, время и действие.~Выбор зависит от нити текста.
text~choice~Что проверить у noun stack прежде расширения?~Каковы реальные связи частей и знаком ли термин аудитории.~Не развернуть в неверную связь.
text~message~Сделай параллельными to check, recording, to submit.~To check, to record and to submit.~Один грамматический уровень.
text~evidence~Effortlessly допустимо как гарантированный результат без trial data?~Нет, такая оценка требует основания.~Не красивый, но пустой итог.
text~choice~Обязательно разбить любое предложение длиннее 20 слов?~Нет, фиксированный предел не заменяет проверку структуры и понимания.~Не искусственная длина.
text~evidence~ASR показывает правильные слова: ритм подтверждён?~Нет, нужны аудио и слушатель.~Транскрипт не прослушивание.
text~message~Назови признаки удачной сокращённой инструкции.~Читатель восстанавливает действие, условие, время, место и альтернативу без догадок.~Не только уменьшенный word count.`)
]};

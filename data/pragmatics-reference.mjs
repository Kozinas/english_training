export const pragmaticsSources=[
 ['Cambridge: requests','https://dictionary.cambridge.org/es/gramatica/british-grammar/requests'],
 ['Cambridge: politeness','https://dictionary.cambridge.org/it/grammatica/grammatica-britannico/politeness'],
 ['Cambridge: discourse markers','https://dictionary.cambridge.org/uk/grammar/british-grammar/discourse-markers-so'],
 ['Cambridge: hedges','https://dictionary.cambridge.org/pl/grammar/british-grammar/hedges-just'],
 ['British Council: negotiating','https://learnenglish.britishcouncil.org/free-resources/business/business/magazine/negotiating'],
 ['Cambridge: cross purposes','https://dictionary.cambridge.org/dictionary/english/cross-purposes'],
 ['Collins: on the same page','https://www.collinsdictionary.com/dictionary/english/on-the-same-page'],
 ['Cambridge: meet halfway','https://dictionary.cambridge.org/dictionary/english/meet-halfway'],
 ['Cambridge: take a rain check','https://dictionary.cambridge.org/dictionary/english/take-a-rain-check-on'],
 ['Cambridge: bring forward','https://dictionary.cambridge.org/dictionary/english/bring-forward'],
 ['Cambridge: table, UK/US','https://dictionary.cambridge.org/us/dictionary/english/table']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
const headers=['Форма / функция','Авторский пример','Механизм','Ограничение'];
export const intentPatterns=rows(`request~Could you check the title?~Could + base, просьба.~Не просто тест способности.
permission~Could I leave early?~I просит разрешение для себя.~Не просьба собеседнику уйти.
mind action~Would you mind checking it?~Mind + -ing.~No, not at all может разрешать/принимать.
mind permission~Would you mind if I left early?~If + past form для нынешней просьбы.~Past не доказывает прошлое событие.
indirect question~Could you tell me when it starts?~Внутри subject + verb.~Не when does it start.
pre-request~Have you got a moment?~Может предварять просьбу.~Не автоматическое согласие на любую задачу.
hint~It's rather noisy here.~Описание может намекать на действие.~Что именно нужно, уточнить.
possible refusal~That could be difficult.~Может смягчать возражение.~Не всегда no.
clear refusal~I can't take this on today.~Назван предел.~Не обязателен подробный личный отчёт.
alternative~I can check the outline instead.~Другая ограниченная помощь.~Не обещание полного review.
acknowledgement~I see what you mean.~Понимание/признание позиции.~Не обязательно согласие.
limited agreement~I agree about the date, not the scope.~Область согласия названа.~Не полное approval.
response token~Right, go on.~Поддержка продолжения речи.~Не принятие всех предложений.
repair~Sorry, I meant Tuesday.~Говорящий исправляет себя.~Сохранить новую дату и источник.
clarification~By ready, do you mean reviewed?~Проверка конкретного слова.~Не обвинение в обмане.
confirmation~Have I understood correctly that…?~Проверка пересказа.~Оставить возможность поправить.
objection~I see the benefit, but I can't commit yet.~Признание плюса + ограничение.~Первую часть не вырезать как yes.
hedge~I was wondering whether we could…~Смягчённая текущая инициатива.~Не гарантия вежливости любого тона.
just~Could you just check the date?~Может уменьшать кажущуюся нагрузку.~Не доказывает простоту задачи.
afraid~I'm afraid I can't attend.~Формула сожаления/отказа.~Не обязательно страх.
perhaps~Perhaps we could ask Jo.~Предложение с дистанцией.~Не принятое действие Jo.
urgency~Please stop the recording now.~Прямая ясная просьба.~Прямота не всегда грубость.
thanks~Thanks for the explanation.~Благодарность.~Не обязательство принять план.
silence~No reply has arrived.~Нет ответа.~Не доказательство agree/refuse.
sarcasm~Great, another delay.~Может быть иронией в контексте.~Текст не даёт точной интонации.
boundary~I prefer not to discuss that.~Личная граница.~Не требовать оправданий.
interruption~Could I clarify one point before we continue?~Просьба взять слово для уточнения.~Вернуть слово собеседнику.
closing~I'll send a summary; please correct it.~Проверка понимания после беседы.~Summary не автоматически принятое соглашение.`);
export const idiomPatterns=rows(`on the same page~Are we on the same page about the scope?~Похожее понимание/согласованная позиция.~Уточнить конкретное содержание, не approval всех деталей.
at cross purposes~We were talking at cross purposes.~Подразумевали разные вещи.~Не обязательно спорили об одном.
meet someone halfway~Could you meet us halfway on the format?~Пойти на взаимные уступки.~Не обязательно ровно 50 процентов.
take a rain check~Could I take a rain check on dinner?~Не принять сейчас, выразить интерес к другому разу.~Informal; новая дата не назначена.
on the fence~I'm still on the fence about the venue.~Не определился с выбором.~Не равно категорически против.
up in the air~The date is still up in the air.~Не решено.~Не обещание скорого решения.
on the table~A shorter version is on the table.~Вариант рассматривается.~Не уже принят.
off the table~Removing the review is off the table.~Вариант исключён из обсуждения.~Область и момент уточнить.
in the loop~Please keep Mara in the loop.~Держать в курсе.~Не дать полномочия утверждать.
out of the loop~I was out of the loop last week.~Не получал нужных новостей.~Не доказательство умышленного исключения.
get the ball rolling~Let's get the ball rolling with a draft.~Начать процесс.~Не завершить его.
touch base~Can we touch base on Thursday?~Кратко связаться, сверить статус.~Срок встречи ещё нужно согласовать.
draw the line~We draw the line at publishing unreviewed work.~Установить границу допустимого.~Не просто рисовать линию.
read the room~Pause and read the room.~Обратить внимание на реакции.~Нельзя уверенно читать мысли по жесту.
back to square one~The lost notes put us back to square one.~Нужно начать значимую часть заново.~Может быть преувеличением, проверить что осталось.
the ball is in your court~The ball is in your court now.~Следующий ход за собеседником.~Не обвинение само по себе; уточнить действие.
move the goalposts~The criteria changed after submission; that feels like moving the goalposts.~Изменить требования в ходе процесса.~Оценочная формула, может звучать обвинительно.
give someone a heads-up~Please give me a heads-up about changes.~Заранее предупредить.~Не факт получения/согласования.
a sticking point~The review date is a sticking point.~Вопрос мешает договориться.~Не обязательно непреодолимая преграда.
room for manoeuvre~There is some room for manoeuvre on length.~Есть свобода менять условие.~UK manoeuvre / US maneuver.
bring a date forward~Bring Friday's meeting forward to Wednesday.~Перенести раньше.~Для shared schedules повторить точную дату/зону.
push a date back~Push Monday's review back to Thursday.~Перенести позже.~Не отменить.
put off~They put off the visit.~Отложили.~Не то же, что call off.
call off~They called off the visit.~Отменили этот визит.~Не запрет любого будущего визита.
turn down~She turned down the invitation.~Отклонила приглашение.~Turn down the volume — другое значение.
work out~We worked out a new schedule.~Разработали/нашли решение.~Work out может иметь другие смыслы.
follow through~They agreed, but must still follow through.~Довести обещанное до действия.~Agreement ещё не completion.
in principle~We agree in principle, subject to review.~Общее согласие с оговорками.~Не окончательные детали/полномочия.
on balance~On balance, the shorter option seems better.~После сопоставления доводов.~Не арифметическая гарантия.
for the time being~Keep the current version for the time being.~Пока, временно.~Не фиксированная дата окончания.
table UK~Let's table a proposal for discussion.~В UK употреблении внести на рассмотрение.~Проверять фактическое значение участника.
table US~Let's table this until next week.~В US употреблении отложить обсуждение.~Не угадывать национальность по одному глаголу.`);
export const negotiationPatterns=rows(`position~We want Friday.~Заявленное требование/предпочтение.~Ещё не причина.
interest~We need feedback before Monday's event.~Зачем нужен срок.~Не обязательно единственное решение.
open question~What matters most about that date?~Выяснение цели.~Не приписывать скрытый мотив.
constraint~We cannot review all sections before Friday.~Ограничение возможности.~Не общий отказ сотрудничать.
priority~Accuracy matters more to us than length.~Порядок критериев.~Не обещание идеальной точности.
proposal~Could we send an outline first?~Предложение.~Не согласованный план.
conditional offer~If you reduce the scope, we can review it by Friday.~Can + условие.~Условие ещё не принято.
hypothetical offer~If you reduced the scope, we could review it earlier.~Past form + could для гипотезы.~Не прошлое действие и не проценты вероятности.
only if~We can proceed only if a reviewer is available.~Необходимое условие.~Наличие reviewer не всегда достаточно.
provided that~We can proceed provided that both sides confirm.~Условие явно названо.~Confirm должен иметь предмет.
unless~Unless the scope changes, we cannot meet the date.~Условие-исключение.~Не отменяет других ограничений автоматически.
in exchange for~We can add a session in exchange for a shorter handout.~Условный обмен.~Вторая сторона должна согласиться.
counterproposal~Instead of Friday, could we aim for Monday?~Другой вариант в ответ.~Не подмена чужого решения.
partial acceptance~I can accept the format, but not the date.~Согласие по одному пункту.~Не весь пакет принят.
authority~I can recommend this, but I can't approve it.~Граница роли.~Не приписывать право отсутствующему коллеге.
reservation~I still have a reservation about access.~Оговорка.~Не booking в этом значении.
clarify scope~Does ready include review and captions?~Проверка определения результата.~Не все понимают ready одинаково.
date/time~By 16:00 Tbilisi time on 2 October.~Дата, время и зона.~Не переопределять zone по своему компьютеру.
deadline vs duration~Send it by Friday; keep it private until review.~Срок и длительность.~Не взаимозаменяемы.
summary question~Have we agreed only to explore the option?~Проверка статуса.~Вопрос не доказанное соглашение.
acknowledgement~Thanks, I've received the proposal.~Подтверждение получения.~Не acceptance.
confirmed action~Jo agrees to send the outline by Tuesday.~Конкретный actor/action/deadline.~Не уже выполнено.
open issue~The full version's date remains open.~Нерешённый пункт.~Не обещать за отсутствующего.
pause~Let's pause until the figures are checked.~Остановка для проверки.~Не скрытое бесконечное затягивание: уточнить возврат.
decline~I can't accept those terms; I can offer this alternative.~Отказ без личного нападения.~Допустимо не соглашаться.
no agreement~We haven't reached agreement on the date.~Честный результат.~Не объявлять процесс провалом автоматически.
written follow-up~This is my understanding; please correct it.~Сверка записи.~Silence не подтверждение по умолчанию.
follow-through~We agreed to review it; the review is still pending.~Разделить решение и выполнение.~Не превращать promise в finished.`);
export const intentReference={id:'intent-repair',title:'Намерение, уточнение и границы согласия',intro:['28 моделей речевых действий. Контекст, отношения, голос и реакция важнее одного «волшебного» слова. Это не словарь скрытых намерений и не культурные правила для всех носителей.'],headers,rows:intentPatterns,sources:pragmaticsSources,practice:rows(`Could you check: base или checking?~Base check после could.
Would you mind check: исправь.~Would you mind checking.
Could I…: чьё действие?~Обычно говорящего, запрашивающего разрешение.
I see your point = I agree?~Не обязательно: признание смысла не полное согласие.
That may be difficult = точно no?~Нет, нужна ситуация и уточнение.
Just a small change: объём доказан?~Нет, это оценка говорящего.
I'm afraid: обязательно страх?~Нет, часто формула сожаления/отказа.
Right: всегда approval?~Нет, может поддерживать продолжение.
Please stop now: всегда грубо?~Нет, срочность и контекст могут требовать прямоты.
No reply: отказ?~Не установлено.
Really? по ASR: интонация ясна?~Нет, нужен звук и контекст.
By ready…: зачем?~Уточнить конкретный смысл ключевого слова.
I meant Tuesday: что сохранять?~Исправленную дату, не первоначальную ошибку как текущую.
No, not at all после mind: что сделать?~Проверить развёрнутый смысл: возражений нет.
Thanks for explaining: обязательство?~Нет, благодарность не acceptance.
Прямая граница допустима?~Да, уважительный отказ не обязан быть расплывчатым.`)};
export const idiomsReference={id:'idioms-in-context',title:'Идиомы и разговорные формулы в контексте',intro:['32 показательные единицы и значения, не полный словарь идиом. Для каждой нужны ситуация, регистр, грамматическая рамка и нейтральный пересказ. Понимание идиомы не обязывает употреблять её; ясный простой вариант часто лучше.'],headers,rows:idiomPatterns,sources:pragmaticsSources,practice:rows(`On the same page: физическая страница?~В идиоматическом употреблении похожее понимание/позиция.
At cross purposes: обязательно конфликт?~Нет, участники могут подразумевать разное.
Meet halfway: ровно 50%?~Не обязательно; образ компромисса.
Rain check: новая дата известна?~Нет, нужна отдельная договорённость.
On the fence: точно против?~Нет, пока не определился.
Up in the air: решено?~Нет, нерешённый вопрос.
On the table: принято?~Нет, предложено/рассматривается.
In the loop: право approve?~Нет, быть в курсе не значит утверждать.
Bring Friday forward to Wednesday: раньше?~Да, точные дни устраняют неоднозначность.
Push Monday back to Thursday: позже?~Да, не отмена.
Put off / call off: одно?~Отложить / отменить, разные исходы.
Turn it down / turn down it?~При местоимении в этом separable значении turn it down.
Follow through: достаточно agree?~Нет, нужно выполнить принятое.
Table: один общий UK/US смысл?~Нет, уточнить postpone или put forward for discussion.
Move goalposts: нейтральная просьба?~Может звучать обвинительно; назвать изменившийся критерий точнее.
Три идиомы в каждой фразе — цель?~Нет, цель ясность, уместность и точный смысл.`)};
export const negotiationReference={id:'negotiation-language',title:'Переговоры: условия, пределы и запись результата',intro:['28 языковых моделей для учебных обсуждений сроков, объёма и обязанностей. Не юридическая или финансовая инструкция; не обещание выиграть любые переговоры. Разговор может закончиться уточнением, паузой или честным отсутствием соглашения.'],headers,rows:negotiationPatterns,sources:pragmaticsSources,practice:rows(`Position / interest: различие?~Что хотят / зачем это важно.
Could we…: уже план?~Нет, предложение.
If you reduced… we could: обязательно прошлое?~Нет, гипотетический вариант сейчас/в будущем.
Only if reviewer available: достаточно одного reviewer?~Не следует: условие необходимое, не обязательно достаточное.
Agree in principle: всё принято?~Нет, сохранить оговорки и полномочия.
Accept format but not date: общий yes?~Нет, частичное принятие.
Can recommend: can approve?~Не обязательно; разные полномочия.
My reservation about access: бронь?~Нет, оговорка/сомнение в данном контексте.
By / until: одинаково?~Срок действия / длительность состояния.
Send update: promise completion?~Нет, объект обещания ограничен.
Thanks received: accepted?~Не следует.
Отсутствующий Jo assigned: согласие Jo?~Не установлено, нужен ответ Jo.
Minutes accurate: работа выполнена?~Нет, запись соглашения не выполнение.
Ready: что спросить?~Что именно должно входить в готовый результат.
Дата без зоны: как уточнить?~Повторить дату, время и часовую зону обеим сторонам.
Разногласие осталось: что записать?~Согласованное, открытые вопросы, ограничения и следующий шаг, без выдуманного yes.`)};

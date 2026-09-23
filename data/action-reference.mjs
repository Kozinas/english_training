export const actionSources=[
 ['British Council: verbs followed by -ing','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/verbs-followed-ing-form'],
 ['Cambridge: infinitive or -ing','https://dictionary.cambridge.org/us/grammar/british-grammar/infinitive-or-verb-ing'],
 ['Cambridge: stop doing / stop to do','https://dictionary.cambridge.org/grammar/british-grammar/stop-ing-form-or-to-infinitive'],
 ['British Council: phrasal verbs','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/phrasal-verbs'],
 ['Cambridge: at, on, in for time','https://dictionary.cambridge.org/grammar/british-grammar/at-on-in-time'],
 ['British Council: requests, offers and invitations','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/requests-offers-invitations']
];
const rows=s=>s.trim().split('\n').map(line=>line.split('~'));
export const verbPatterns=rows(`enjoy~enjoy doing~I enjoy drawing maps.~Удовольствие от занятия.~Не enjoy to draw.
avoid~avoid doing~We avoid wasting paper.~Избегать действия.~Не доказывает, что ошибок никогда нет.
finish~finish doing~She finished checking the list.~Действие закончено.~Завершение проверки не означает отсутствие ошибок.
keep~keep doing~Keep trying new examples.~Продолжать/повторять.~Не keep to try в этом значении.
mind~mind doing~Do you mind waiting?~Возражать против занятия.~No, not at all означает согласие подождать.
practise / practice~practise doing~We practise asking questions.~UK practise, US practice — глагол.~Оба написания нормативны.
suggest~suggest doing~I suggest meeting outside.~Предлагать совместный вариант.~Не suggest me to meet.
want~want to do~I want to join the group.~Желание.~Желание не равно записи в группу.
decide~decide to do~We decided to leave early.~Принятое решение.~Решение не доказывает выполнение.
hope~hope to do~She hopes to find a tutor.~Надежда.~Успех ещё не установлен.
plan~plan to do~They plan to build a shelf.~План.~Не гарантированное событие.
offer~offer to do~I offered to carry a box.~Предложение своего действия.~Не обязательно принято.
agree~agree to do~He agreed to bring cups.~Согласие.~Не равно уже принесённым чашкам.
learn~learn to do~She is learning to drive.~Освоение действия.~Процесс обучения не подтверждает мастерство.
would like~would like to do~I’d like to ask a question.~Вежливое желание.~Не would like asking для этого смысла.
like / love / hate~doing или to do~I like reading. / I like to read.~Оба допустимы, акцент зависит от ситуации.~Не объявлять один вариант всегда ошибочным.
start / begin~doing или to do~It started raining / to rain.~Начало действия.~В других конструкциях есть ограничения; это базовые модели.
preposition + action~in / about / of + doing~She is interested in learning.~Предлог связывает следующую группу.~Нельзя выбирать предлог только по русскому вопросу.
look forward to~look forward to doing~We look forward to meeting you.~To здесь предлог.~Не to meet в этой модели.
purpose~to + base~I came to collect the forms.~Зачем пришёл.~Цель не гарантирует достижение.
person + to~ask / want / invite someone to do~Ask him to wait.~Кто должен выполнить действие.~Не ask he to wait.
not to~decide not to do~We decided not to buy it.~Отрицание второго действия.~Не равно We didn’t decide to buy it.
stop doing~прекратить это занятие~She stopped writing.~Писание прекратилось.~Не сообщает, что она сделала затем.
stop to do~остановить другое ради этого~She stopped to write a note.~Цель остановки.~Не означает прекращение письма.
remember to do~не забыть выполнить~Remember to bring your pass.~Будущее действие относительно напоминания.~Приказ не доказывает, что пропуск принесён.
remember doing~помнить прошлый опыт~I remember bringing my pass.~Воспоминание о действии.~О достоверности памяти судим отдельно.
try to do~пытаться~I tried to open the lid.~Попытка действия.~Сама по себе не утверждает неудачу или успех.
try doing~испытать способ~Try using a larger spoon.~Способ решения проблемы.~Не универсальное правило «-ing = прошлое».`);
export const multiwordPatterns=rows(`turn on~включить~turn the lamp on / turn on the lamp~turn it on~Разделяемый; частица on.
turn off~выключить~turn the radio off / turn off the radio~turn it off~Местоимение внутри.
turn up~увеличить громкость~turn the sound up~turn it up~Не то же значение, что arrive: turn up.
turn down~уменьшить / отклонить~turn down the volume / the offer~turn it down~Контекст определяет значение.
put on~надеть~put your coat on~put it on~Не все значения put on перечислены.
take off~снять одежду~take your hat off~take it off~Без объекта: самолёт взлетает.
pick up~забрать человека/предмет~pick up the guest~pick her up~Не обязательно поднять вверх.
put down~положить~put down the box~put it down~Другие значения требуют другого контекста.
put away~убрать на место~put the tools away~put them away~Не выбросить.
throw away~выбросить~throw away the wrapper~throw it away~Действие отличается от убрать на хранение.
write down~записать~write the number down~write it down~Число/информация как объект.
look up~найти сведения в источнике~look up the word~look it up~Не look it for.
fill in / fill out~заполнить~fill in the form / fill out the form~fill it in / fill it out~Оба употребляются; fill out особенно обычно в US.
hand in~сдать~hand the worksheet in~hand it in~Передать работу проверяющему.
give back~вернуть~give the book back~give it back~Не обязательно отдать навсегда.
call off~отменить~call off the picnic~call it off~Не равно просто перенести.
put off~отложить~put off the visit~put it off~Новая дата может быть неизвестна.
set up~организовать / настроить~set up a group~set it up~Значение зависит от объекта.
find out~выяснить~find out the cost~find it out~Также find out why…; не обещает, что уже выяснено.
look for~искать~look for the key~look for it~Неразделяемая предложная модель.
look after~присматривать~look after the child~look after her~Не look her after.
get on with~ладить / продолжать работу~get on with the task~get on with it~Три слова сохраняют порядок.
look forward to~ждать с радостью~look forward to the visit~look forward to it~С действием: visiting, не visit.
run out of~исчерпать запас~run out of paper~run out of it~Объект после of, не в середине.
get up~вставать~I get up early.~Объект не нужен.~Не переносить правило местоимения без объекта.
show up~появиться, прийти~Two guests showed up.~Объект не нужен.~Само намерение не значит явку.
break down~сломаться~The van broke down.~Объект не нужен.~Break it down — другая переходная модель/значение.
give up~перестать пытаться / бросить~Don’t give up. / give up smoking~give it up~Может быть без объекта или с объектом.
carry on~продолжать~carry on reading~carry on with it~Не придумывать carry it on для любого смысла.
log in / log out~войти / выйти из учётной записи~log in to the site~log out of it~Log in — глагол; login может быть существительным/определением.`);
export const timePatterns=rows(`at + clock~at 08:15~Точка на часах.~At eight fifteen.~Уточняй пояс для удалённой встречи.
at + point~at noon / at midnight~Полдень / полночь.~We meet at noon.~Не in noon.
on + day~on Tuesday~Конкретный день.~See you on Tuesday.~В разговорной речи on может опускаться.
on + date~on 14 October~Дата.~The club opens on 14 October.~Это дата, не один месяц.
on + specific part~on Friday evening~Конкретный вечер.~We practise on Friday evening.~Не in Friday evening.
in + month/year~in October / in 2030~Месяц / год.~She moved here in 2030.~Не on October без числа.
in + season~in winter / in the winter~Время года.~We meet indoors in winter.~Артикль допускается по контексту.
in + part of day~in the morning~Часть дня вообще.~I read in the morning.~Конкретный день меняет рамку на on.
at night~at night~Ночью в общем.~It is quiet at night.~In the night возможно для конкретной ночи.
weekend UK/US~at / on the weekend~UK at, US on — обычные варианты.~Are you free at the weekend?~Не in the weekend.
zero with this/next/last/every~next Thursday / this evening~Обычно без at/on/in.~I’ll call next Thursday.~Не переносить запрет на in the next two days.
zero today/tomorrow/yesterday~tomorrow morning~Без предлога.~We leave tomorrow morning.~Не on tomorrow.
in + delay~in twenty minutes~Через сколько начнётся.~I’ll call in twenty minutes.~Не равно длительности разговора.
for + duration~for twenty minutes~Как долго.~We talked for twenty minutes.~Не определяет время глагола автоматически.
in + completion~finished it in twenty minutes~Время до завершения.~She read it in twenty minutes.~Контекст отличает от будущего ожидания.
during + event~during the break~Когда внутри события.~Ask during the break.~Не during twenty minutes для длительности.
from…to…~from ten to twelve~Границы интервала.~The desk is open from ten to twelve.~Не сообщает, что каждый посетитель был там весь интервал.
by + deadline~by five~Не позже срока.~Please reply by five.~Не until five: там продолжается состояние.
until + endpoint~wait until five~Продолжать до точки.~We can wait until five.~Не равно прийти не позднее пяти.
before / after~before lunch / after class~Порядок событий.~Call after class.~После события без точного числа минут.
on time~at the scheduled time~Без опоздания.~The lesson began on time.~Нужно знать расписание.
in time for~early enough for an event~Успеть к чему-либо.~We arrived in time for the talk.~Можно быть раньше расписания.
at the end of~at the end of + event~Привязка к концу события.~At the end of the lesson, ask questions.~Не in the end of.
in the end~in the end~Результат выбора/цепочки событий.~In the end, we chose Friday.~Не конкретная минута конца.
offer own action~Shall I / Can I / I can + base~Помощь предлагает говорящий.~Shall I carry the box?~Shall I чаще UK; не обязательная форма для US.
request action~Could you + base~Просим действие собеседника.~Could you send the list?~Не обещаем его выполнение.
invitation~Would you like to + base~Приглашение к действию.~Would you like to join us?~Не проверка постоянного предпочтения.
joint suggestion~Shall we / Let’s + base~Предложение совместного шага.~Shall we meet outside?~Нужен ответ партнёра для договорённости.
polite refusal~I’d love to, but…~Отказ с причиной/альтернативой.~I’d love to, but I’m busy.~Не считать согласием по первой части.
confirm precisely~date + time + zone + place~Подтвердить детали обеим сторонам.~Tuesday at 16:00, local time, at the library.~Next Tuesday и 04/05 могут быть неоднозначны.`);
export const patternsReference={id:'verb-patterns',title:'Глагольные модели: -ing, to и изменение смысла',sources:actionSources,intro:['28 опорных моделей A2: учим конструкцию вместе со значением, а не выбираем форму по русскому вопросу. Это не полный словарь управления всех глаголов.','-ing само по себе не является Continuous; нужны be и соответствующее значение. To бывает показателем инфинитива и предлогом. Stop/remember/try показывают, почему замена формы иногда меняет смысл.'],headers:['Опора','Модель','Пример','Значение','Ограничение'],rows:verbPatterns,practice:[['enjoy ___ (read)','reading'],['decide ___ (go)','to go'],['avoid ___ (wait)','waiting'],['look forward to ___ (meet)','meeting'],['interested in ___ (learn)','learning'],['I like reading / to read: допустимо?','Оба варианта.'],['stop talking: что прекращается?','Разговор.'],['stop to talk: что является целью остановки?','Разговор.'],['Remember to call: звонок уже подтверждён?','Нет: напоминание не подтверждает выполнение.'],['I remember calling: воспоминание о чём?','О звонке в прошлом.'],['try to open: успех или неудача гарантированы?','Ни то ни другое без контекста.'],['try restarting: какая задача формы?','Предложить способ решения.'],['want she to help: исправь.','want her to help'],['decided not to buy = didn’t decide to buy?','Нет: решение против покупки и отсутствие решения купить.'],['come for to learn: исправь цель.','come to learn'],['Do you mind waiting? Согласись явно.','No, not at all. I can wait.']]};
export const phrasalReference={id:'phrasal-patterns',title:'Фразовые и предложные глаголы: значение и место объекта',sources:actionSources,intro:['30 частотных моделей с бытовым и учебно-техническим контекстом. Это ограниченный учебный набор, не полный словарь фразовых глаголов.','В широкой учебной группе multi-word verbs различаем глагол с частицей, предложный и трёхсловный. Свойство относится к конкретному значению. Проверяй объект и словарный пример, не переставляй слово только потому, что оно короткое.'],headers:['Выражение','Значение здесь','С существительным','С местоимением / без объекта','Ограничение'],rows:multiwordPatterns,practice:[['turn off it: исправь.','turn it off'],['look it for: исправь.','look for it'],['look her after: исправь.','look after her'],['put off the meeting: отмена?','Перенос, не обязательно отмена.'],['call off the game: только перенести?','Нет, отменить.'],['look up a term: что сделать?','Найти значение/сведения в источнике.'],['write down the code → it','write it down'],['fill out the form → it','fill it out'],['put away и throw away одинаковы?','Убрать на место и выбросить — разные действия.'],['run out of paper → it','run out of it'],['look forward to see you: исправь.','look forward to seeing you'],['get up: где объект?','Его нет в этой модели.'],['take off: всегда снять одежду?','Нет: самолёт может взлететь.'],['Did she gave up? Исправь.','Did she give up?'],['sign up for a course: курс завершён?','Нет: запись не подтверждает завершение.'],['Please log in: пользователь уже вошёл?','Нет: просьба не доказывает выполнение.']]};
export const timeReference={id:'time-arrangements',title:'Время встречи, приглашения и помощь',sources:actionSources,intro:['30 моделей календаря, длительности, сроков и взаимодействия. Это расширение чисел/времени P02 и модальных форм A105, а не все значения временных предлогов.','At/on/in выбираются по английской конструкции, не по универсальному переводу «в». Приглашение, принятие приглашения и фактическое присутствие — разные свидетельства. Без ответа нельзя объявить встречу согласованной.'],headers:['Опора','Модель','Смысл','Пример','Ограничение'],rows:timePatterns,practice:[['___ six o’clock','at'],['___ Wednesday','on'],['___ November','in'],['___ Wednesday morning','on'],['___ next week: at/on/in/—','—'],['___ the next two days','in'],['UK/US ___ the weekend','at / on'],['call in ten minutes: длительность звонка?','Нет, задержка до звонка.'],['talk for ten minutes: сколько длится?','Десять минут.'],['during lunch: вопрос о чём?','Когда внутри события.'],['reply by Friday = wait until Friday?','Нет: срок ответа и длительность ожидания.'],['Shall I carry it? Кто несёт?','Предлагает нести говорящий.'],['Could you carry it? Кто должен помочь?','Собеседник.'],['Would you like join us? Исправь.','Would you like to join us?'],['I’d love to, but I can’t: согласие?','Нет, вежливый отказ.'],['Предложение встречи отправлено, ответа нет: confirmed?','Not confirmed.']]};

import {bank,exam,examples,goal} from './unit-tools.mjs';
import {futureSources} from './future-choices.mjs';
export default {
 id:'A105-will',topic:'A105',title:'Will: решения, обещания и прогнозы',prerequisites:['A105-plans'],references:['future-choices','tenses'],sources:futureSources,
 goals:[goal('form','Строить will/won’t и различимо произносить отрицание','forms'),goal('meaning','Различать решение, обещание, предложение и прогноз','choices'),goal('evidence','Отделять прогноз и обещание от подтверждённого результата','reading'),goal('message','Договариваться о действиях и сообщать условия','production')],
 explanation:[
 {title:'Will одинаково для всех лиц',text:'I will call, she will call, they will call. Смысловой глагол после will стоит в основе без to и -s: не will calls, не will to call. Для будущего состояния нужна основа be: The room will be ready. Нельзя выбросить be в The room will ready или вставить is в will is ready. Отрицание will not сокращается в won’t, а не willn’t. Обе формы нормативны; полная может быть полезна для ясности или акцента. Will не присоединяется к can: будущее умение требует will be able to, это будет разобрано в следующей подтеме.'},
 {title:'Вопрос и краткий ответ',text:'Will + субъект + основа? Will you call? Where will they meet? Не Does she will come? и не Where they will meet? В ответе меняется лицо: Will you help? — Yes, I will / No, I won’t. Если обращаются ко всей группе: Yes, we will. Положительное Yes, I’ll в конце краткого ответа не используется. I’ll сокращает I will перед дальнейшим действием: I’ll call later. He’ll, she’ll, we’ll, they’ll тоже нормативны; учись слышать окончание, но при трудности произнеси полную форму.'},
 {title:'Решение в ходе разговора и предложение помощи',text:'Друг говорит The bag is heavy. Ты реагируешь I’ll carry it. Здесь решение или готовность действовать возникает в разговоре. Это не означает, что will запрещён для решения, принятого раньше: он также передаёт готовность, обещание, мнение и другие значения. I’ll help you tomorrow может быть старым обещанием, а не новым внезапным планом. В предложении помощи нужен ответ партнёра: Thanks, that helps / No, thanks. Произнесённое предложение ещё не равно принятой помощи.'},
 {title:'Обещание и отрицательный результат — разные вещи',text:'I’ll return the key tomorrow выражает обязательство говорящего. I won’t forget the key — обещание не забыть. Слушателю важно, кому, что и к какому времени обещано; абстрактное I’ll do it без ясного it неполно. Обещание не доказывает выполнение: для результата нужна новая информация после события. Won’t не всегда просто далёкое будущее: My phone won’t start часто сообщает нынешний отказ устройства работать; I won’t sign может выражать отказ человека. В этом шаге распознаём эти обычные значения, не сводим каждое won’t к календарю.'},
 {title:'Прогноз и степень уверенности',text:'I think the repair will take an hour — мнение о будущем, не гарантия. It will probably take longer содержит probably, которое обычно идёт после will; It probably won’t work — перед won’t. I don’t think it will be ready часто естественнее категоричного отрицательного прогноза, но не означает доказанного провала. Слова I think/I expect/probably/perhaps показывают позицию говорящего; они не превращают прогноз в измеренный результат. В технической работе «вероятно, тест пройдёт» и «тест прошёл» должны оставаться разными сообщениями.'},
 {title:'Сопоставление с going to без ложных запретов',text:'Be going to может выделять имеющееся намерение или видимые признаки, will — решение, обещание, готовность или прогноз-мнение. I think it will rain и I think it’s going to rain в подходящем контексте обе естественны. Tomorrow не выбирает will автоматически; график The train leaves tomorrow и договорённость We’re leaving tomorrow остаются верными. В заданиях на форму указано «используй will»; при свободном выборе оценивай коммуникативную цель. Не записывай «will = 100% уверенность» и не противопоставляй ему going to как всегда менее уверенное.'},
 {title:'Базовые when/if-связки о будущем',text:'I’ll call you when I arrive: главная часть с will, обычное придаточное времени с Present Simple. If the café is closed, we’ll eat at home: условие само по себе не сообщает, что кафе закрыто. Это начальный образец, полный набор условных и временных конструкций будет в следующих топиках. В прямом вопросе When will you arrive? will нормально: это вопрос о времени, а не придаточное. Не создавай абсолютный запрет «после when никогда will». Специальные значения готовности в if-части существуют, но здесь проверяется обычная модель будущего условия.'},
 {title:'Предложения с shall и слышимое won’t',text:'Shall I open the window? предлагает действие говорящего; Shall we meet outside? предлагает совместное действие. Эти формулы особенно характерны для UK; в US чаще звучат Can I…? или Do you want to…? Не учим shall как обязательное будущее после I/we. В выбранной UK-модели will /wɪl/, I’ll /aɪl/, won’t /wəʊnt/; won’t отличается от want /wɒnt/. В быстром произнесении конец может быть слабее, но слушатель должен понять отрицание. При риске непонимания скажи will not и уточни, чего не будет.'},
 {title:'Опоры к чтению и рабочему сообщению',text:'Promise — обещание; offer — предложение; forecast — прогноз; estimate — оценка/предположение; delay — задержка; deadline — срок; confirm — подтвердить; pass a test — пройти тест успешно; restart — перезапустить. Читая разговор, помечай действие по функции: кто готов помочь, кто прогнозирует, кто просит подтверждение. Для собственного сообщения достаточно простых точных фраз. Не обещай результат, который ещё не проверен; отдельно сообщи следующий шаг и что узнаешь после проверки.'}
 ],
 examples:examples(`I’ll carry the small box.~Я понесу маленькую коробку.~Предложение помощи.
She will call us later.~Она позвонит нам позже.~Без -s после will.
The room will be ready.~Комната будет готова.~Will + be + характеристика.
We will not leave without you.~Мы не уйдём без тебя.~Полная форма отрицания.
We won’t leave without you.~Мы не уйдём без тебя.~Won’t = will not.
Will you bring the key?~Ты принесёшь ключ?~Will перед субъектом.
Yes, I will.~Да, принесу.~Краткий ответ без сокращения I’ll.
No, we won’t.~Нет, не принесём.~Ответ за группу.
Where will they stay?~Где они остановятся?~Where + will + субъект + основа.
The doorbell is ringing. I’ll answer it.~Звонят в дверь. Я открою.~Реакция в момент разговора.
I promise I’ll send the notes tonight.~Обещаю отправить заметки вечером.~Обязательство, не готовый результат.
I won’t share your draft.~Я не буду распространять твой черновик.~Обещание не делать действие.
I think the walk will take an hour.~Думаю, прогулка займёт час.~Оценка будущего.
It will probably rain later.~Позже, вероятно, пойдёт дождь.~Probably после will.
It probably won’t be cold.~Вероятно, холодно не будет.~Probably перед won’t.
I don’t think we’ll need a taxi.~Не думаю, что нам понадобится такси.~Некатегоричный прогноз.
The shelf is bending; it’s going to fall.~Полка прогибается; она упадёт.~Прогноз с опорой на видимое.
I’ll text you when I get home.~Я напишу тебе, когда доберусь домой.~Будущее придаточное с Present Simple.
When will you get home?~Когда ты доберёшься домой?~В прямом вопросе will допустим.
If it rains, we’ll stay inside.~Если будет дождь, останемся внутри.~Условие не утверждает дождь.
Shall I bring another chair?~Мне принести ещё стул?~Предлагаю своё действие.
Shall we meet at the gate?~Встретимся у ворот?~Предлагаю общее действие.
My laptop won’t start.~Мой ноутбук не запускается.~Нынешний отказ работать, не обязательно прогноз на завтра.
I’ll test the change; success is not confirmed yet.~Я проверю изменение; успех пока не подтверждён.~Обещание шага не равно обещанию результата.`),
 banks:[
 bank('A105-will','forms','Will, won’t и порядок слов','practice',`short~form~She will ___ us. Help/helps?~help~После will исходная форма.
short~form~They will ___ ready. Be/are?~be~Will + основа be.
short~form~I will not call = I ___ call. Одно сокращение.~won't~Won't — нормативное сокращение will not.
short~form~Yes, I ___. Ответ на Will you come?~will~В конце положительного краткого ответа will не сокращается.
sentence~form~Исправь: He will sends the map.~He will send the map.~Send без -s после will.
sentence~form~Исправь: We will to wait.~We will wait.~To после will не нужен.
sentence~form~Исправь: The food will hot.~The food will be hot.~Нужно be перед характеристикой.
sentence~form~Сделай отрицательным: I will forget your name.~I will not forget your name.|I won't forget your name.~Will not/won't перед основой.
sentence~form~Сделай вопросом: She will meet us.~Will she meet us?~Will ставится перед субъектом she.
sentence~form~Сделай вопросом: The tickets will be expensive.~Will the tickets be expensive?~Will перед подлежащим, be сохраняется.
sentence~form~Собери: when / you / will / leave / ?~When will you leave?~Прямой вопрос о будущем допускает will после when.
sentence~form~Исправь: Does he will help?~Will he help?~Will сам строит вопрос без does.
sentence~form~Will you come? Ответь нет только о себе.~No, I won't.|No, I will not.~Ответ от I, отрицание will.
sentence~form~Will you wait? Ответь да за группу.~Yes, we will.~We обозначает группу говорящих.
sentence~form~Сократи I will: I will send it tonight.~I'll send it tonight.~I'll перед следующим действием.
short~form~I will probably ___ later. Arrive/arrives?~arrive~Probably не меняет требование основы.
short~form~I'll call when she ___. Arrive/arrives?~arrives~Обычное придаточное времени: she arrives.
short~form~If it ___, we'll stay home. Rain/rains?~rains~Present Simple будущего условия.
text~form~Покажи отрицание в полной и сокращённой формах: обещание не опаздывать.~I will not be late. I won't be late.~Be не теряется, отрицание перед ним.
speech~form~Произнеси I will call / I won’t call; слушатель без текста определяет, будет ли звонок.~I will call. I won't call.~Слышимость /wɪl/ и /wəʊnt/, реальное прослушивание.`,'','Формы'),
 bank('A105-will','choices','Решение, обещание или прогноз','practice',`short~meaning~I promise I'll return it. Функция promise/prediction?~promise~Обязательство прямо обозначено promise.
short~meaning~I think the repair will cost £20. Функция estimate/completed result?~estimate~Это оценка будущей стоимости.
short~meaning~The bags are heavy. I'll carry one for you. Функция offer/timetable?~offer~Предлагается действие в пользу собеседника.
short~meaning~Фраза I'll test it доказывает успешный тест: yes/no?~no~Обещано действие, а не подтверждён успех.
short~form~Что значит I'll: I will/I am?~I will~Сокращение содержит will.
short~meaning~If it snows утверждает, что снег точно будет: yes/no?~no~Это условие, не утверждение события.
text~meaning~Объясни, почему I’ll call tomorrow может быть обещанием, данным раньше, а не внезапным решением.~Will выражает не только решение сейчас, но и готовность/обещание. Время принятия решения из одной фразы не выводится.~Избегать правила «will всегда только спонтанно».
text~meaning~Сравни I think it will rain / I think it is going to rain. Можно ли принять оба при подходящем контексте?~Да. Обе формы могут быть прогнозом; going to чаще выделяет существующие признаки, will — мнение.~Нормативные пересечения не оценивать как жёсткий бинарный выбор.
text~meaning~Различи Shall I move it? и Shall we move it?~Первое предлагает моё действие; второе предлагает совместное действие.~Смена субъекта меняет распределение работы.
text~meaning~My phone won't charge. Почему это не обязательно про завтра?~Won't может описывать нынешний отказ устройства работать: телефон сейчас не заряжается.~Функция зависит от контекста, не только ярлыка будущего.
speech~form~Произнеси I want to call и I won’t call. Слушатель различает желание и отрицание.~I want to call. I won't call.~В UK want /wɒnt/ и won't /wəʊnt/; US варианты не штрафуются.
text~message~Дай ответ на предложение I'll carry the bag: согласие, затем другая версия с вежливым отказом.~Thanks, that would help. / No, thanks, I can carry it.~Реакция на offer должна сохранять смысл, не только Yes, I will.`,'','Смысл и речь'),
 bank('A105-will','reading','Чтение: вечерняя встреча и обещания команды','reading',`short~evidence~Кто предлагает принести ещё стулья? Имя.~Leo~Leo offers to bring four more chairs.
short~evidence~Сколько дополнительных стульев обещано? Цифры.~4|four~Четыре — обещанное дополнение.
short~evidence~Кто обещает отправить адрес? Имя.~Nadia~Nadia says she'll send the address.
short~evidence~Адрес уже отправлен: true/false/not stated?~false~Запись явно отмечает not sent at the time of the conversation.
short~evidence~Кто прогнозирует 12 гостей? Имя.~Owen~Owen expects about twelve guests.
short~evidence~Ровно 12 гостей уже подтвердили: true/false/not stated?~false~Only seven people have confirmed.
short~evidence~Сколько подтверждений на момент разговора? Цифры.~7|seven~Подтверждено семь, не прогнозные двенадцать.
short~evidence~Если дождь, где будет встреча: garden/hall?~hall~Hall — запасной вариант при дожде.
short~evidence~Дождь гарантирован: true/false/not stated?~not stated~Предусмотрен вариант, исход погоды не гарантирован.
sentence~form~Спроси через Will: Leo will bring the chairs.~Will Leo bring the chairs?~Will перед субъектом без do.
text~evidence~В 4 предложениях раздели обещания, прогноз и подтверждённое число.~Leo promises four more chairs. Nadia promises to send the address, but it is not sent yet. Owen expects about twelve guests. Seven people have confirmed so far.~Четыре категории сведений не смешиваются.
text~message~Напиши 80–110 слов помощнику: что обещано, кто это делает, условие дождя и что проверить позже.~Leo will bring four more chairs for the evening meeting. Nadia will send the address to the guests, but it was not sent at the time of the conversation. Owen thinks about twelve people will come. Only seven people have confirmed so far, so the final number is still uncertain. The group plans to meet in the garden, but they will use the hall if it rains. Please check the chairs and the guest list later instead of treating these promises and predictions as completed work.~80–110 слов; сохранены участники, статус действий и условие.`,'Three volunteers are preparing an evening meeting for a local history group. They discuss the chairs, directions and weather before anyone arrives. Leo notices that there are only eight chairs in the garden. “I’ll bring four more from the hall,” he says. Nadia replies, “Thanks. I’ll send the address to the guests.” At the time of this conversation, she has not sent it yet.\n\nOwen thinks about twelve people will come. This is his estimate, not a count of confirmed guests. Only seven people have replied yes so far. Nadia asks him to keep the confirmed list separate from his prediction because the volunteers need to know what they can actually check.\n\nThe plan is to meet in the garden. If it rains, they will use the hall instead. Leo says he will move the chairs inside when the organiser asks him. This is an agreed response to a possible problem, not a statement that rain is certain. Nobody in the conversation gives a final weather report.\n\nBefore they leave to do their jobs, Nadia writes a short note: “Check the chairs, check the address message and update the guest list later.” A promise is useful for dividing work, but it is not proof that the job is already done. The group needs both the plan and a later check.','Чтение'),
 bank('A105-will','listening','Аудирование: следующий шаг при сбое','listening',`short~evidence~Что не работает: printer/projector?~projector~Projector won't start.
short~evidence~Кто предлагает проверить кабель? Имя.~Ali~Ali говорит I'll check the cable.
short~evidence~Новый проектор уже заказан: true/false/not stated?~false~We won't order another one yet.
short~evidence~Предполагаемая длительность проверки: ten/twenty minutes?~ten minutes|ten~I think the check will take ten minutes.
short~evidence~Десять минут — точный гарантированный срок: yes/no?~no~Estimate, not a promise прямо сказано.
short~evidence~Кто получит сообщение после проверки? Имя.~Rosa~I'll message Rosa when I finish.
short~evidence~Если проектор не заработает, используют экран ноутбука: true/false/not stated?~true~Backup plan stated explicitly.
short~evidence~Проблема с кабелем уже доказана: true/false/not stated?~not stated~Кабель собираются проверить, причина не подтверждена.
text~evidence~Передай сообщение 3–4 предложениями, не обещая успешный ремонт.~The projector won't start. Ali will check the cable and message Rosa afterwards. Ten minutes is an estimate. The laptop screen is the backup plan.~Отделить симптом, действие, оценку и запасной вариант.
speech~message~Собеседник говорит «Ali обещал всё починить за 10 минут». Исправь два искажения и ответь на уточнение.~Ali promised to check the cable, not to fix everything. Ten minutes was an estimate, not a deadline.~Реальное уточнение смысла и ответа партнёру.`,'Hello, this is Ali. The projector will not start, so I will check the cable first. We will not order another projector yet. I think the check will take ten minutes, but that is an estimate, not a promise. I will message Rosa when I finish. If the projector still does not work, we will use the laptop screen for the small group. Please do not tell everyone that the cable is definitely the problem: we do not know the cause yet. I can hear Rosa in the next room, so I will also speak to her before the guests arrive. For now, the next action is a check, and the laptop is our backup plan.','Аудирование'),
 bank('A105-will','production','Сообщения, обещания и запасной вариант','writing',`sentence~form~Переведи через will: Мы не забудем билеты.~We will not forget the tickets.|We won't forget the tickets.~Отрицание и исходная forget.
sentence~form~Переведи через will: Когда она придёт?~When will she come?~Прямой вопрос с will.
text~message~Партнёру тяжело нести коробку. Предложи помощь и напиши два возможных ответа партнёра.~I'll carry it for you. — Thank you. / No, thanks, it is light enough.~Нужны предложение и реакция, не только описание способности.
text~meaning~Напиши прогноз с probably и тот же прогноз в отрицательной форме.~The shop will probably be busy. It probably won't be quiet.~Probably после will и перед won't в обычных позициях.
text~message~Пообещай прислать адрес после возвращения домой: will и when + Present Simple.~I'll send you the address when I get home.~Обычное будущее придаточное без will get.
text~message~Придумай запасной вариант на случай дождя, не утверждая дождь.~If it rains, we'll have lunch inside.~If задаёт условие; событие не гарантировано.
text~message~Напиши 80–110 слов коллеге в вымышленной ситуации: следующий шаг проверки, обещание сообщения, оценка времени и запасной вариант.~The new form does not save the address correctly. I will check the example from your message first. Then I will try the same steps on my laptop and write down what happens. I think the check will take about twenty minutes, but I cannot promise an exact finishing time yet. I will send you an update when I finish. If the new form still fails, we will use the old form for today's demonstration. Please keep the original example so that we can compare the results clearly.~80–110 слов; обещание относится к шагам и обратной связи, не к неподтверждённому успеху.
text~evidence~Сократи своё сообщение до двух предложений без обещания успешного исправления.~I'll check the form and send an update afterwards. If it still fails, we'll use the old form for the demonstration.~Сокращение не превращает проверку в успешный ремонт.
speech~message~Проведи диалог 8 реплик о подготовке комнаты: предложи помощь, прими отказ от одной помощи, договорись о другой.~A: I'll move the table. B: No, thanks, it is in the right place. A: Shall I bring chairs? B: Yes, please. A: How many? B: Three. A: I'll get them now. B: Thank you.~Реальное взаимодействие, ответ на отказ, конкретное согласованное действие.
speech~form~Произнеси обещание сделать одно действие и не делать другое. Слушатель пересказывает отрицательную часть.~I'll send the notes, but I won't share your private draft.~Слышимость won't, конкретный объект отрицания, реальные аудиоданные.
text~meaning~Исправь утверждение «will всегда значит 100% уверенность» двумя собственными примерами.~I think it will be quiet. It will probably cost more. Оба прогноза допускают неопределённость.~Не закреплять неверный абсолютный признак.
text~message~Предложи общее действие через Shall we и переформулируй без shall для собеседника, предпочитающего US.~Shall we meet outside? Do you want to meet outside?~Оба предложения согласуют действие; shall не объявляется обязательным.`,'','Письмо и речь'),
 bank('A105-will','review','Смешанное повторение способов говорить о будущем','review',`short~form~She ___ going to leave. Is/will?~is~Be going to не смешивается с голым will.
short~form~She will ___ later. Call/calls?~call~Исходная форма после will.
short~form~I will give it to ___. He/him?~him~Объектная форма после to.
short~form~We'll start when he ___. Comes/will come?~comes~Обычное будущее придаточное времени.
sentence~form~Исправь: Will she is ready?~Will she be ready?~Will + be, не is.
sentence~form~Исправь: I don't will forget.~I will not forget.|I won't forget.~Will не использует do для отрицания.
text~meaning~I’m meeting Jo tomorrow. I’ll help Jo tomorrow. Что подаёт первая и что может подать вторая?~Первая организованную встречу; вторая обещание или готовность помочь. Обе относятся к будущему.~Will не обязан отменять ранее составленный план.
text~evidence~The app will probably work. Можно ли отметить проверку как успешно завершённую?~No. This is a prediction; a completed successful test is not reported.~Будущий прогноз не равен свидетельству результата.
text~message~Обещай позвонить после прибытия и спроси собеседника о его времени прибытия.~I'll call when I arrive. When will you arrive?~Придаточное и прямой вопрос имеют разные модели.
speech~form~Прочитай I want it / I won’t use it и попроси слушателя объяснить обе фразы.~I want it. I won't use it.~Различать want и won't по звуку, не графике.
text~meaning~Если автобус задержится, поедем другим. Передай через if и will без утверждения задержки.~If the bus is late, we'll take another one.~If не говорит, что опоздание уже произошло.
text~message~Напиши 3 строки распределения будущей работы между тобой и двумя коллегами; уточни одну ещё не принятую просьбу.~I'll check the form. Jo will prepare the example. Could Sam take notes? Sam's answer is still needed.~Согласованные обещания и неполученный ответ различаются.`,'','Повторение')
 ],
 tests:[exam('A105-will','a',`short~form~The driver will ___ us. Wait for/waits for?~wait for~После will основа, устойчивое wait for сохраняется.
short~form~The water will ___ cold. Be/is?~be~Состояние с be после will.
sentence~form~Исправь: She will to bring lunch.~She will bring lunch.~Will без to перед основой.
sentence~form~Отрицай: We will cancel the visit.~We will not cancel the visit.|We won't cancel the visit.~Отрицание will not/won't.
sentence~form~Спроси: The guide will meet us.~Will the guide meet us?~Will перед группой подлежащего.
sentence~form~Will you write? Ответь да за себя.~Yes, I will.~Положительный краткий ответ без I'll.
short~meaning~«I promise I'll keep the key safe» — promise/estimate?~promise~Обязательство явно названо.
short~meaning~«I think it will take three hours» — estimate/completed result?~estimate~Это прогноз длительности, не результат измерения после окончания.
short~evidence~«I'll check the lock». Замок уже проверен: true/false/not stated?~not stated~Обещание действия не сообщает выполненную проверку.
short~evidence~«Perhaps it will snow». Снег гарантирован: yes/no?~no~Perhaps явно допускает неопределённость.
short~form~I'll reply when she ___. Writes/will write?~writes~Обычное придаточное времени Present Simple.
short~form~If the shop ___ open, we'll go in. Is/will be?~is~Обычное будущее условие с is.
text~meaning~Собеседник считает, что I’ll help может быть только внезапным решением. Объясни другую функцию и дай пример.~Will может передавать обещание: I promised yesterday, and I'll help you on Friday.~Не вводить запрет на ранее принятое обязательство.
text~evidence~Сказано: I expect ten people, but only six confirmed. Напиши две фразы, сохрани разницу чисел.~Ten people are expected. Six people have confirmed so far.~Ожидаемое количество не превращается в подтверждённое.
text~message~Напиши 80–110 слов о вымышленной подготовке встречи: два обещанных шага, оценка времени, сообщение после проверки и запасной вариант.~I will check the room before the visitors arrive tomorrow. First I will count the chairs and look at the equipment list. I think the check will take about fifteen minutes, but the projector sometimes needs extra attention. I will send you a message when I finish. If the projector does not work, we will show the pictures on a laptop instead. Please do not tell the visitors that every problem is already solved. This note describes our next steps and a backup plan, not the result of the check.~80–110 слов; точные функции будущих форм и отдельный результат.
speech~message~Согласуйте помощь в 8–10 репликах: одно предложение, отказ, альтернатива, принятое действие и срок.~A: Shall I move the chairs? B: No, leave them there. A: I'll check the lights then. B: Thank you. A: Shall I call you afterwards? B: Yes, please. A: I'll call before six. B: That works.~Реальные реакции и ясное обязательство, не заученный монолог.
speech~form~Сообщи, что отправишь адрес, но не отправишь чужой номер телефона. Слушатель повторяет запрет.~I'll send the address, but I won't send the private phone number.~Слышимость will/won't и предметов, оценка после аудио.
text~meaning~Используй Shall I и Shall we в двух разных предложениях и объясни распределение действия.~Shall I carry the box? Shall we carry the table together? Первое моё действие, второе совместное.~Смысл субъектов, допустимые UK/US переформулировки.
text~message~Обещай написать после окончания и задай прямой вопрос, когда партнёр закончит.~I'll write when I finish. When will you finish?~Различать придаточное времени и прямой вопрос.
text~evidence~«The printer won't start». Нужно ли считать, что речь обязательно о завтрашнем дне? Обоснуй.~No. It can describe the printer refusing to work now.~Обычное won’t о текущей работе устройства.`),
 exam('A105-will','b',`short~form~My cousin will ___ the guests. Help/helps?~help~Исходная форма после will.
short~form~The garden will ___ quiet. Be/is?~be~Will требует основы be.
sentence~form~Исправь: They will to call us.~They will call us.~To перед смысловым глаголом лишнее.
sentence~form~Отрицай: I will share the document.~I will not share the document.|I won't share the document.~Will not/won't, не don't will.
sentence~form~Спроси: The neighbour will bring it.~Will the neighbour bring it?~Will перед подлежащим.
sentence~form~Will you wait here? Ответь нет за группу.~No, we won't.|No, we will not.~Группа отвечает we.
short~meaning~«I'll carry it for you; it looks heavy» — offer/timetable?~offer~Предложение помочь собеседнику.
short~meaning~«It will probably be busy» — prediction/confirmed attendance?~prediction~Probably обозначает вероятностный прогноз.
short~evidence~«I'll send the list». Список уже отправлен: true/false/not stated?~not stated~Будущее обещание не сообщает выполненную отправку.
short~evidence~«I don't think it will rain». Дождь строго невозможен: yes/no?~no~Мнение не является доказательством невозможности.
short~form~We'll eat when the food ___. Arrives/will arrive?~arrives~Обычное придаточное времени с Present Simple.
short~form~If the room ___ cold, we'll use another one. Is/will be?~is~В этой обычной условной модели Present Simple.
text~meaning~Почему We’ll bring the cake может быть старым обещанием? Дай короткий контекст.~We agreed yesterday. We'll bring the cake on Saturday. Will здесь сообщает обязательство, не обязательно новое решение.~Не ограничивать will одним моментом принятия плана.
text~evidence~Ожидают восемь гостей, подтвердили пятеро. Напиши две фразы без смешения данных.~We expect eight guests. Five people have confirmed so far.~Ожидание и подтверждение различаются.
text~message~Напиши 80–110 слов о вымышленной проверке программы: два следующих действия, оценка времени, обещание сообщения и запасной вариант.~I will test the search page before the demonstration tomorrow. First I will try the example from your email. Then I will check the same words on a smaller screen. I think this will take about half an hour, but I cannot confirm the result in advance. I will send you an update when I finish. If the new page still fails, we will use the previous version for the demonstration. Please keep both examples so that we can compare them. These are planned checks, not a report of success.~80–110 слов; планы и обещания не выдаются за проверенный успех.
speech~message~Распределите подготовку поездки: 8–10 реплик, одно отклонённое предложение, новая помощь, принятое действие и время.~A: I'll buy the tickets. B: Thanks, but I already have them. A: Shall I bring lunch? B: Yes, please. A: I'll make sandwiches. B: That helps. A: I'll bring them at nine. B: Agreed.~Реальный диалог с ответом на новую информацию.
speech~form~Скажи: вернёшь книгу, но не оставишь её снаружи. Слушатель называет отрицательное действие.~I'll return the book, but I won't leave it outside.~Слышимость отрицания в связной речи.
text~meaning~Предложи открыть окно самому и пойти всем вместе через Shall I/Shall we.~Shall I open the window? Shall we go together?~I/we меняют участника действия; other normative offers допустимы при объяснении.
text~message~Обещай позвонить после прибытия автобуса и задай прямой вопрос о времени его прибытия.~I'll call when the bus arrives. When will the bus arrive?~Present Simple придаточного и will прямого вопроса.
text~evidence~«The door won't open». Дай возможный смысл настоящего времени без придуманной причины.~The door does not open now. The cause is not stated.~Won’t может описывать текущий отказ, причина неизвестна.`)
 ]
};

export const alternativeSources=[
 ['British Council: third and mixed conditionals','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-third-mixed'],
 ['British Council: deductions about the past','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-deductions-about-past'],
 ['British Council: modals with have','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/modals-have'],
 ['Cambridge: wish','https://dictionary.cambridge.org/dictionary/english/wish'],
 ['Cambridge: if only','https://dictionary.cambridge.org/grammar/british-grammar/if-only'],
 ['Cambridge: need, including didn’t need to and needn’t have','https://dictionary.cambridge.org/dictionary/english/need'],
 ['Cambridge: should, advice and expectation','https://dictionary.cambridge.org/dictionary/english/should']
];
const rows=s=>s.trim().split('\n').map(line=>line.split('~'));
export const counterfactualPersons=['I','you','he','she','it','we','they'].map(p=>[p,`If ${p} had stopped, ...`,`... ${p} would have waited.`,`... ${p} would not have waited.`,`Would ${p} have waited?`]);
export const counterfactualPatterns=rows(`past/past~If I had saved it, I would have kept a copy.~Прошлое условие и прошлый результат.~Had + V3 / would have + V3.~В этой ситуации копии нет; это воображаемая альтернатива.
past/now~If I had saved it, I would have a copy now.~Прошлое условие и нынешнее состояние.~Would have + имя не Perfect.~Не would have had для заданного now.
state/past~If I knew French, I would have understood yesterday’s note.~Устойчивая способность и прошлый результат.~Past Simple гипотезы / would have + V3.~По контексту язык не знал и тогда.
negative condition~If she hadn’t left, she would have heard us.~Отрицание после had.~Смена факта прошлого в учебной ситуации.~Не делает её уход единственной возможной причиной.
negative result~If we had checked, we wouldn’t have sent the wrong version.~Not после would.~Предполагаемый отрицательный исход.~Уверенность автора не независимое доказательство.
question~Would he have helped if he had known?~Would перед подлежащим главной части.~В if обычный порядок слов.~Не вопрос Had he known? внутри if.
wh question~What would you have done?~Wh + would + subject + have + V3.~Условие может быть в предыдущей реплике.~Не додумывать его без контекста.
short answer~Would you have stayed? — Yes, I would.~Ответ по первому вспомогательному.~Меняется лицо говорящего.~Не Yes, I had.
could~If we had asked, we could have borrowed it.~Доступная возможность в альтернативе.~Не гарантированное действие.~Не was able to как фактически выполненное.
might~If we had asked, they might have agreed.~Возможный исход альтернативы.~Не фиксированный процент.~Не заменять на точно согласились.
clause order~We would have waited if you had called.~Условие может быть вторым.~Смысл сохраняется.~Перед конечным if обычно не нужна запятая.
contractions~If I’d known, I’d have called.~Первое ’d = had, второе = would.~Следующая форма помогает разбору.~Have после would не of.
had had~If I had had a map, I would have found it.~Первое had — вспомогательное, второе — V3 have.~Прошлое владение в гипотезе.~Не лишний повтор.
continuous condition~If she hadn’t been looking away, she might have seen it.~Воображаемая предшествующая деятельность.~Had been + -ing.~Увидеть не равно понять.
continuous result~If I had accepted, I would be working there now.~Нынешний процесс в альтернативе.~Would be + -ing.~Не прошлая длительность.
passive~If it had been labelled, it might have been delivered correctly.~Пассивные роли сохраняются.~Been + V3 в обеих частях.~Возможность не факт доставки.
inversion~Had I known, I would have waited.~Формальный вариант без if.~Had перед субъектом условия.~Не Had I would known.
negative inversion~Had she not left, she would have heard it.~Полная отрицательная инверсия.~Not после подлежащего.~Не смешивать с вопросом о факте.
without~Without your help, I would have missed the deadline.~Подразумеваемое условие.~Помощь была дана в этом контексте.~Не единственная форма выражения условия.
but for~But for the delay, we would have arrived on time.~Формальное «если бы не».~Изменяется указанный фактор.~Не but как обычное противопоставление.
even if~Even if we had called, the office would have been closed.~Исход сохраняется при смене условия.~Не обычная достаточная причина.~Не доказывает, что звонок был или не был.
second vs third~If I knew, I would tell you / If I had known, I would have told you.~Нынешняя гипотеза / прошлое.~Past form не всегда прошедшее время.~Восстановить обе временные опоры.
open past~If he left at six, he may be home now.~Прошлый факт ещё неизвестен.~Не обязательно контрфакт.~If само по себе не доказывает ложность условия.
causality~If we had changed it, we might have succeeded.~Предлагаемая альтернатива.~Не экспериментальное доказательство причины.~Сохранять might и недостающие данные.
counterfactual limits~If I had stayed, I would be there now.~Прошлое и настоящее в одной связи.~Учебная схема, не все условные формы.~Без контекста не выводить всю биографию.`);
export const modalPastPatterns=rows(`must have~She must have left.~Уверенный вывод о прошлом.~Must + have + V3.~Не прямое наблюдение и не приказ.
may/might have~She may/might have left.~Допустимая возможность.~Не две фиксированные вероятности.~Исход неизвестен.
could have deduction~She could have taken the earlier train.~Возможная версия события.~Не обязательно упущенная возможность.~Нужен контекст.
can’t/couldn’t have~She can’t/couldn’t have signed it.~Отрицательный вывод.~С точки зрения говорящего несовместимо с данными.~Данные могут оказаться неполными.
might not have~She might not have received it.~Возможно, не получила.~Не невозможность получения.~Область отрицания внутри возможности.
past obligation~She had to leave.~Прошлая необходимость.~Не синоним must have left.~Обязанность не доказывает выполнение.
present deduction~She must be outside.~Вывод о сейчас.~Без Perfect.~Past нужен только по смысловой опоре.
past process~She must have been working.~Вывод о предшествующем процессе.~Have been + -ing.~Не результат завершённого проекта.
passive deduction~It might have been deleted.~Возможность пассивного события.~Have been + V3.~Не сообщает исполнителя.
state be~She may have been tired.~Возможное прошлое состояние.~Been + adjective.~Не Continuous без -ing.
question~Could she have misunderstood?~Could перед подлежащим.~Have остаётся базовым.~Вопрос не обвинение.
may question~Do you think she may have left?~Естественный вопрос о возможности.~May she have left? не базовая нейтральная модель здесь.~Не все модальные вопросы одинаково обычны.
have had~They must have had a key.~Perfect от смыслового have.~Два глагольных места.~Владение выводится, не наблюдалось.
could have opportunity~I could have stayed, but chose to leave.~Неиспользованная возможность в данном контексте.~But сообщает фактический выбор.~Could have само не всегда значит «не сделал».
couldn’t have ability~I couldn’t have lifted it alone.~Оценка невозможности своими силами.~Не обязательно вывод о чужом действии.~Без контекста не назначать одну функцию.
should have advice~We should have checked the date.~Ретроспективная рекомендация/сожаление.~Should + have + V3.~Не обязательство, установленное законом.
shouldn’t have~I shouldn’t have sent that version.~Нежелательное прошлое действие в контексте признания.~Not после should.~Не «мне запретили» автоматически.
ought to have~We ought to have checked.~Альтернатива should have.~Ought сохраняет to.~Не ought have в базовой модели.
expectation~The parcel should have arrived by now.~Ожидание по известному графику.~Не обязательно сожаление или обвинение.~Фактическую доставку нужно проверить.
needn’t have~I needn’t have printed it; a screen copy was enough.~Сделано, но необходимости не было.~Needn’t + have + V3.~Обычное прошлое значение; особенно UK.
didn’t need to~I didn’t need to print it.~Не было необходимости.~Само по себе не решает, напечатал ли.~Контекст может подтвердить действие или его отсутствие.
didn’t have to~She didn’t have to attend.~Отсутствие необходимости.~Не доказанное неучастие.~Не запрет.
wish past~I wish I had saved the draft.~Сожаление о прошлом.~Wish + Past Perfect.~Не меняет прошлый факт.
wish negative~I wish I hadn’t deleted it.~Желание иной прошлой ситуации.~Had not + V3.~В контексте удаление произошло.
if only~If only I had asked first!~Более эмоциональное сожаление.~Может быть самостоятельной фразой.~Не обязан добавлять would-результат.
wish now~I wish I knew the answer.~Сожаление о нынешнем состоянии.~Past Simple не прошлое время здесь.~Не заменять на had known без смены смысла.
wish could have~I wish I could have joined you.~Желаемая возможность прошлого.~Could have + V3 допустимо.~Не исправлять в had joined механически.
hope~I hope she received the message.~Исход ещё неизвестен говорящему.~Hope, не сожаление wish.~Надежда не доказывает получение.
wish would~I wish you would reply.~Желаемое изменение поведения.~Обычно сейчас/будущее.~Не базовый способ пожалеть об уже известном прошлом.
regret -ing~I regret sending the file.~Сожаление о действии.~Gerund после regret в этом значении.~Не то же, что regret to inform.
regret to inform~We regret to inform you that it is cancelled.~Формула неприятного сообщения.~To относится к сообщению сейчас.~Не обязательно сожаление о прежнем сообщении.
apology~I’m sorry I sent the wrong file.~Признание конкретного действия.~Не диагноз характера человека.~Добавь исправление и проверку.
missed possibility~We could have asked for help.~Возможный иной выбор по контексту.~Может звучать как упрёк.~Тон и отношения важнее одной формы.
future anchor~By Friday they should have finished.~Ожидание результата к будущей опоре.~Modal Perfect не всегда прошлое относительно сейчас.~Требуется контекст времени.
read~They might have read the note.~V3 read произносится /red/.~Одиночное TTS может выбрать /riːd/.~Проверять в полном предложении.
weak have~should have / could have / would have~Have может иметь слабую форму.~Письменно have, не of.~ASR не оценка произношения.
uncertainty~No reply has arrived; she may not have seen it.~Факт и возможное объяснение отдельно.~Не доказанный отказ.~Не назначать умысел по молчанию.
review~We should improve the check next time.~Рекомендация на будущее.~Не свидетельство уже внесённого изменения.~Отдельно назначить проверку выполнения.`);
const headers=['Модель / лицо','Пример / условие','Механизм / результат','Смысл / отрицание','Ограничение / вопрос'];
export const counterfactualReference={id:'counterfactuals',title:'Иное прошлое и смешанные условия',sources:alternativeSources,intro:['Семь личных рядов и 25 показательных моделей. Это карта основных контрфактических связей, а не все возможные условные предложения. Определи время условия и результата отдельно.'],headers,rows:[...counterfactualPersons,...counterfactualPatterns],practice:rows(`If I ___ known, I would have called.~had.
Would have + write?~written.
Раскрой If I’d known, I’d have stayed.~If I had known, I would have stayed.
Нынешний результат: I would have a copy now — Perfect?~Нет: have — смысловой глагол перед именем.
Прошлый результат: I would have had a copy — Perfect?~Да, have + V3 had.
Вопрос: She would have helped.~Would she have helped?
Отрицание условия: if she had left.~If she had not left.
Could have всегда гарантирует действие?~Нет, возможность не гарантирует выполнение.
Might have сообщает точный процент?~Нет, вероятность не задаётся фиксированным числом.
Поменяй порядок If I had asked, he would have replied.~He would have replied if I had asked.
Had I known — вопрос?~В контексте условного результата это формальная инверсия без if.
Had had — лишнее слово?~Нет, вспомогательное had и V3 смыслового have.
Если я знал бы язык вообще, вчера понял бы гида: какая связь?~Устойчивая характеристика → прошлый результат.
Если бы тогда согласился, сейчас работал бы здесь: какая связь?~Прошлое условие → нынешний процесс.
Even if всегда делает результат зависимым от условия?~Нет, часто подчёркивает сохранение результата даже при смене условия.
Контрфакт доказывает единственную причину реального исхода?~Нет, гипотеза требует отдельного обоснования.`)};
export const modalPastReference={id:'past-modal-choices',title:'Прошлые модальные формы, сожаления и границы вывода',sources:alternativeSources,intro:['38 показательных моделей: вывод, возможность, обязанность, ретроспективная оценка, ожидание и сожаление. Это не полный перечень значений модальных глаголов. Закрытый ключ допустим только при явно заданном смысле.'],headers,rows:modalPastPatterns,practice:rows(`Must have + leave?~left.
Might have + be tired?~been tired.
Could she ___ misunderstood?~have, не has.
Might not have = can’t have?~Нет: возможное отрицание против невозможности по оценке.
Had to leave = must have left?~Нет: необходимость против вывода о прошлом.
Must have been checking: закончил?~Не следует из формы процесса.
May have been checked: кто проверил?~Пассив сам не называет исполнителя.
Should have arrived by now: обязательно упрёк?~Нет, может быть ожидание.
Ought ___ have checked.~to.
Needn’t have printed: напечатал?~В обычном прошлом значении да, но не было необходимости.
Didn’t need to print: точно не напечатал?~Нет, контекст может показать оба исхода.
Wish о прошлом: I wish I ___ saved it.~had.
Wish о сейчас: I wish I ___ the answer. (know)~knew.
I hope she arrived: прибытие доказано?~Нет, надежда не факт.
Regret sending / regret to inform — одинаковый смысл?~Нет, сожаление о действии / формула неприятного сообщения.
Should of правильно письменно?~Нет, should have; слабое произношение не меняет написание.`)};

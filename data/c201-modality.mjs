import {bank,exam,examples,goal} from './unit-tools.mjs';
import {precisionSources} from './precision-reference.mjs';
const id='C201-modality';
const reading=`This fictional case concerns a volunteer archive preparing to reopen a reading room. A notice, a planning email and a conversation about a missing key all contain modal verbs. A new volunteer, Robin, initially treats them as points on one scale of certainty. The archive manager, Salma, asks Robin to separate rules, expectations, possibilities and interpretations before rewriting the public information.

The notice says, "Visitors may not photograph unpublished letters." In this context, may not refuses permission. It does not predict that visitors are unlikely to take photographs. Salma wants a clear public version: photography of unpublished letters is not permitted. A different sentence in the planning email says, "The catalogue may not be ready on Thursday." That is an uncertain forecast about readiness, not a ban on completing the catalogue. Substituting the same phrase mechanically in both sentences would obscure the difference.

The email also says that staff do not have to attend the Thursday briefing. Robin drafts "Staff must not attend," which would create a prohibition that nobody issued. Salma explains that attendance is optional. The original sentence does not tell us whether any particular staff member will come. Two people have already chosen to attend, but that separate information does not alter the meaning of the optional-attendance rule. Permission, obligation and actual behaviour remain different kinds of information.

The discussion of the key requires another distinction. An assistant says, "The key could have been left in the drawer." Nobody has checked the drawer yet. Here could have presents a possible explanation of an unknown past event. It is not evidence that the key was definitely left elsewhere. Later, Robin says, "I could have checked the drawer before lunch, but I chose to finish the labels." That sentence explicitly describes an opportunity not taken. The same modal sequence can participate in different meanings, and the surrounding words decide what is being claimed.

Salma then finds the key in an envelope. She says, "The previous shift must have put it here." This is her conclusion from the circumstances, not a rule that required the previous shift to use that envelope. The conclusion could still be mistaken: another authorised person might have moved it. Robin's revised note attributes the inference to Salma rather than presenting a witnessed action. The discovery resolves the key's location, but it does not automatically identify the person who placed it there.

Finally, a volunteer says, "I needn't have printed the old timetable." In this ordinary retrospective reading, the printing happened and is now judged unnecessary. Another says, "I didn't need to print the new one, but I printed it anyway." That second sentence is not contradictory. It states absence of necessity and then separately confirms the action. The group agrees to keep a digital copy available, but nobody claims that the agreement proves future compliance.

Robin's final revision labels each statement by its function before choosing the wording. The public notice expresses permission clearly. The planning email keeps uncertainty about Thursday. The internal note separates the key's observed location from Salma's inference about the person responsible. Instead of attaching arbitrary percentages to modal verbs, Robin records the relevant evidence, the source of each rule and any unresolved question. That makes the text more useful without pretending that grammar alone can settle the facts.`;
const listening=`This is a fictional conversation summary from a community theatre. I am Ellis, coordinating the rehearsal rooms, and I need your help with a notice that has mixed up three different messages. Please identify the function of each modal before deciding whether the wording needs to change.

The first message says that the small room may not be available on Saturday. I am still waiting for confirmation from the caretaker. This is a possibility that the room will be unavailable, not a rule forbidding us from using an available room. If availability is confirmed, the notice can change. Until then, please do not promise the room to a group.

The second message is a rule: performers must not leave equipment in the passage. We can rewrite that as equipment storage in the passage is prohibited. The rule does not tell us whether everyone has obeyed it. Yesterday I saw two bags there, but I did not see who left them. Please do not turn the prohibition into a claim that the passage has always been clear.

The third message concerns transport. We did not need to hire a van, because a member offered a car. We chose the car and did not hire the van. This last detail comes from the account of our decision, not from didn't need to alone. In another situation we could have hired the van despite not needing it.

There is also a box whose label is missing. It could have arrived with yesterday's delivery, but I have not checked the list. I am offering a possible explanation, not describing a missed opportunity. The delivery should have arrived by now according to the timetable; that is an expectation, not confirmation that it is here.

When you revise the notice, keep these functions separate. Ask whether a statement describes a rule, a possibility, an expectation or an observed event. If someone hears an inference as a fact, attribute it and state what would need checking. Please ask the caretaker about Saturday, but record the answer only when it actually arrives.`;
export default {id,topic:'C201',title:'Модальность и отрицание: возможность, правило, вывод и факт',prerequisites:['C201-scope','C102-distance','B202-deduction'],references:['modal-interpretation','past-modal-choices','modal-distance'],sources:precisionSources,
goals:[goal('form','Строить modal + infinitive / have + V3 и отрицание','forms'),goal('meaning','Различать правило, возможность, ожидание и вывод','meaning'),goal('evidence','Не превращать модальность в установленное событие','reading'),goal('message','Формулировать точную оговорку и проверочный вопрос','production'),goal('sound','Делать модальное различие слышимым','sounds')],
explanation:[
{title:'Модальный глагол не номер на шкале уверенности',text:'Сначала установи функцию. Can обозначает способность, разрешение или общую возможность. Must бывает требованием и выводом. Should может советовать и выражать ожидаемый ход событий. Поэтому универсальная лестница can 20%, may 40%, might 30%, must 100% неверна. Даже внутри вероятностного значения сила зависит от контекста, интонации и жанра. The bridge must be closed может быть требованием закрыть мост или выводом, что он закрыт. Дай источник: The rule requires closure / Judging by the barriers, I infer that it is closed. Название функции полезнее выдуманного процента.'},
{title:'Форма сохраняет места глагольной цепочки',text:'После центрального modal ставится базовая форма: may leave, must be, could have. Не добавляй -s после she и не используй do для обычного отрицания modal: she may not know, не does not may know. Прошлая отнесённость часто выражается modal + have + V3: may have left; процесс в прошлой рамке — may have been waiting; пассив — may have been delayed. Have здесь не меняется на has после he. Отрицание обычно следует за первым modal, но его смысловая область требует разбора: форма цепочки и интерпретация отрицания — разные задачи. Сначала проверь построение, затем смысл.'},
{title:'Not necessary не prohibited',text:'You do not have to attend означает отсутствие необходимости; You must not attend — запрет в обычном нормативном чтении. Из optional нельзя вывести neither will attend nor will stay away. You need not bring paper тоже снимает необходимость, а не запрещает бумагу. При пересказе инструкций спроси: это required, permitted, optional или prohibited? Эти слова относятся к правилу, не соблюдению. Если правила два и они противоречат друг другу, грамматический редактор не должен сам выбирать действующее. Укажи противоречие и попроси ответственное лицо подтвердить требование.'},
{title:'May not: отрицательное событие или отсутствие разрешения',text:'The parcel may not arrive допускает не-прибытие: perhaps it will not arrive. Visitors may not enter in a formal notice обычно запрещает вход. Сходная форма не означает тождественный смысл. Контекст прогнозирования, субъект и жанр помогают, но не дают абсолютной механической таблицы: реальный человек тоже может быть предметом прогноза, а неодушевлённый объект — частью правила. Для ясности напиши Entry is not permitted либо It is possible that the room will be unavailable. May not be safe не равно is certainly unsafe; отрицательный вариант остаётся возможностью, а не фактом.'},
{title:'Вывод с must и отрицательный вывод',text:'The lights are on; someone must be inside представляет уверенный вывод говорящего, но не независимое наблюдение человека внутри. Для противоположного вывода в базовой модели удобно cannot/can’t: She cannot be at the office if she is here with us. Must not часто выражает запрет, однако в контексте вывода, особенно в американском употреблении, He must not have seen the note может означать вывод, что он не видел записку. Не исправляй такой пример автоматически как незаконный запрет о прошлом. Уточни He apparently did not see it / I infer that he did not see it. Ни форма must, ни can’t не гарантирует истинность исходных посылок.'},
{title:'Could have не всегда упущенная возможность',text:'He could have taken the earlier bus, but he chose to walk прямо задаёт нереализованную возможность. He could have taken the earlier bus; we do not know how he got here предлагает объяснение неизвестного прошлого и не доказывает, что автобус не был выбран. May/might have тоже обозначают возможное прошлое. If the alarm had worked, they could have left earlier задаёт условную альтернативу, где важно не потерять if. Could have been waiting описывает возможный процесс, а не обязательно оконченное ожидание. Читай всю рамку, а не заучивай have = не произошло.'},
{title:'Should have: критика, ожидание и незнание',text:'You should have checked the address often conveys retrospective criticism: checking was the better action and, in the given conversation, it apparently did not happen. The train should have arrived by now can be a timetable-based expectation when arrival is not yet confirmed. Не объявляй любое should have доказательством невыполнения. Покажи контекст: You did not check it, although you should have / According to the timetable, it should have arrived; can you confirm? В первом отрицательный факт дан отдельно, во втором нужна проверка. Аналогично should be ready может выражать ожидание, а не обязанность объекта.'},
{title:'Needn’t have и didn’t need to',text:'В обычном ретроспективном You needn’t have printed it действие совершено, но оценено как ненужное. You didn’t need to print it сообщает об отсутствии необходимости; контекст может продолжить so you didn’t или but you did. Не приписывай всегда-не-сделал второй форме. Для свободного текста допускай I printed it, but it was unnecessary как ясную альтернативу. Needn’t особенно характерно для UK; отсутствие этой формы в личной речи US не ошибка. Не путай needn’t have printed с didn’t need to have printed: второй вариант требует своей временной рамки, а не механической перестановки частиц.'},
{title:'Could not, might not и возможность не делать',text:'He might not attend обычно оставляет возможность отсутствия; He cannot attend сообщает о невозможности или запрете по контексту. He could not attend часто означает, что не мог прийти, но could может также обсуждать гипотетическую невозможность сейчас. Если имеется в виду положительная возможность отказаться, лучше He could choose not to attend: без choose соседство could not часто ведёт к отрицанию возможности. Формальная область modal и not не всегда прозрачна из порядка слов. Точная перефразировка должна различать cannot do X, may fail to do X и can choose not to do X.'},
{title:'Временная перспектива и чужой голос',text:'She said the hall might be closed может передавать её тогдашнюю неопределённость; might не обязан означать меньшую сегодняшнюю вероятность, чем may. We would be finished by Friday в прошлой переписке может быть будущим относительно того разговора; без продолжения неизвестно, закончили ли. The manager believed they must have left — вывод менеджера, не автора текущего текста. Сохраняй источник, временную опору и актуальный статус проверки. В C201 мы исследуем эти связи; это не исчерпывающая карта всех модальных значений, диалектов и прагматических оттенков.'},
{title:'Оговорка должна быть соразмерной',text:'Слишком сильное certainly превращает гипотезу в факт, но бесконечные perhaps/maybe/might не делают аргумент качественным. Укажи основание: Given the missing entry, she may not have received the message; ask her to confirm. Не добавляй вину к неизвестности: may not have replied не значит deliberately ignored us. Rule permits X не означает обещание обеспечить X. Capacity can handle ten users не означает, что десять сейчас работают. В техническом и бытовом объяснении отделяй доступную возможность, выбранное действие и проверенный результат; у каждой части может быть разный источник.'},
{title:'Устное уточнение и контроль',text:'Повтори спорную фразу и предложи две ясные версии: Do you mean it is forbidden, or that it might not happen? Дождись ответа и используй его в финальном пересказе. Не исправляй одну догадку на другую. Контраст MUST NOT / DO NOT HAVE TO нужно реально произнести и проверить слушателем; одинаково распознанные слова не подтверждают услышанное различие. Письменные задания оцениваются по сохранению функции, времени и уверенности, а не по одному любимому modal преподавателя. При открытом выборе нормативные альтернативы допустимы, если они соответствуют контексту и не меняют обязательность или факт.'}
],examples:examples(`You must not enter.~Входить запрещено.~Нормативное чтение в инструкции.
You do not have to enter.~Входить не обязательно.~Не запрет и не описание поведения.
You need not wait.~Ждать необязательно.~Отсутствие необходимости.
The hall may not be ready.~Возможно, зал не будет готов.~Отрицательная возможность.
Visitors may not enter this room.~Посетителям вход запрещён.~Формальная инструкция.
She may have missed the message.~Возможно, она пропустила сообщение.~Не доказанный факт или умысел.
She may have been waiting.~Возможно, она ждала.~Возможный процесс.
The letter may have been delayed.~Возможно, письмо задержали.~Прошлая отнесённость и пассив.
She must be nearby, judging by the signal.~Судя по сигналу, она должна быть рядом.~Вывод, не обязанность.
Staff must be nearby during the drill.~Сотрудники должны быть рядом на тренировке.~Требование.
He cannot be there; he is here.~Он не может быть там: он здесь.~Отрицательный вывод в данной рамке.
He must not have noticed it.~Должно быть, он этого не заметил.~Возможное контекстное чтение вывода, не только запрет.
He could have used the bus; we do not know.~Возможно, он воспользовался автобусом.~Неизвестное прошлое.
He could have used the bus, but he walked.~Он мог воспользоваться автобусом, но пошёл пешком.~Неиспользованная возможность задана продолжением.
It should have arrived by now.~По ожиданию, уже должно было прибыть.~Прибытие требует подтверждения.
You did not check, although you should have.~Ты не проверил, хотя следовало.~Невыполнение дано явно.
I needn't have printed it.~Зря я это распечатал.~В обычном ретроспективном чтении напечатал.
I didn't need to print it, but I did.~Не было нужды печатать, но я напечатал.~Нет противоречия.
I didn't need to print it, so I didn't.~Не было нужды печатать, и я не печатал.~Невыполнение задано отдельно.
She might not attend.~Возможно, она не придёт.~Не запрет и не невозможность.
She cannot attend.~Она не может присутствовать.~Причина и функция требуют контекста.
She could choose not to attend.~Она могла бы выбрать не приходить.~Возможность отказаться выражена явно.
He said it might be open.~Он сказал, что, возможно, открыто.~Чужая модальная оценка.
The tool can process ten files.~Инструмент способен обработать десять файлов.~Способность не текущий результат.
You may leave after the briefing.~После инструктажа можно уйти.~Разрешение не обязанность.
The briefing may end late.~Возможно, инструктаж закончится поздно.~Прогноз, не разрешение.
I would check the log first.~Я бы сначала проверил журнал.~Рекомендация или гипотеза по контексту.
The log might clarify the sequence.~Журнал, возможно, прояснит последовательность.~Возможность пользы, не гарантированный ответ.`),
banks:[
bank(id,'forms','Модальная цепочка и отрицание','practice',`short~form~She may ___ left. (have/has)~have~После modal базовая форма have.
short~form~It could have ___ delayed. (been/being)~been~Пассив modal + have + been + V3.
short~form~They might have been ___. (wait/waiting)~waiting~Процесс в модальной perfect-цепочке.
short~form~She must ___ nearby. (be/is)~be~Базовая форма после modal.
sentence~form~Исправь: He may has forgotten.~He may have forgotten.~Have не согласуется с he после modal.
sentence~form~Исправь: She does not may enter.~She may not enter.~Not после modal без do.
short~meaning~You do not have to join: optional/prohibited?~optional~Необязательное действие не запрещено.
short~meaning~Notice: Visitors must not feed the birds. required/prohibited?~prohibited~Инструкция запрещает действие.
text~form~Перепиши may not arrive через It is possible…~It is possible that it will not arrive.~Возможность отрицательного события.
text~form~Перепиши may not enter в официальном запрете однозначно.~Entry is not permitted.~Не прогноз поведения посетителей.
text~form~Построй possible past process: perhaps she was repairing it.~She may have been repairing it.~Допускаются might/could по контексту.
text~form~Передай optional attendance без must not.~Attendance is optional; you do not have to attend.~Не добавлять отсутствие на встрече.
text~meaning~Can handle 20 files: что про уже обработанные?~Число выполненных обработок не установлено способностью.~Capacity не achieved result.
text~form~Сделай возможность отказа ясной: He could not join двусмысленно.~He could choose not to join.~Choose показывает положительную возможность выбора.
text~meaning~Сделай вывод She must be home явно приписанным себе.~I infer that she is at home from the available evidence.~Вывод остаётся исправимым.
text~form~Передай past possibility, не неудачную возможность: perhaps the box was sent.~The box may have been sent.~Пассив и неизвестность исхода.`),
bank(id,'meaning','Функция modal и границы вывода','practice',`short~meaning~Might not happen значит cannot happen? (yes/no)~no~Возможное отсутствие не невозможность события.
short~meaning~Could have arrived; we do not know доказывает не прибыл? (yes/no)~no~Возможное прошлое не упущенная возможность автоматически.
short~meaning~Didn't need to go, but went — противоречие? (yes/no)~no~Необязательное действие могло быть выполнено.
short~meaning~Should have arrived by now гарантирует подтверждённое прибытие? (yes/no)~no~Ожидание не наблюдение.
text~meaning~Различи must в rule и deduction на двух собственных примерах.~Staff must sign in. The light is on, so someone must be inside.~Назвать функцию и основание.
text~meaning~Почему must not have noticed нельзя всегда исправлять как ошибку?~В контексте оно может выражать отрицательный вывод, особенно в US употреблении.~Не запретить нормативное значение.
text~meaning~Needn't have called: обычное ретроспективное чтение?~Звонок состоялся, но оценён как ненужный.~Оговорить рассматриваемый контекст.
text~meaning~Could have paid: добавь две разные рамки.~He could have paid; I do not know. He could have paid, but he refused.~Неизвестное прошлое против явного отказа.
text~meaning~Should have checked: сделай expectation, не criticism.~The scheduled checker should have checked it by now; can we confirm?~Функция определяется рамкой.
text~meaning~May not reply: можно ли обвинить в намеренном игнорировании?~Нет, ни отсутствие ответа, ни умысел не установлены.~Не превращать possibility в вину.
text~meaning~Почему may/might нельзя назначить постоянные проценты?~Сила зависит от контекста и функции; формы не численная шкала.~Сравнивать только конкретные употребления.
text~message~Спроси, что означает room must be closed.~Is that a requirement to close it, or your conclusion that it is already closed?~Уточнить норму против вывода.
text~evidence~Allowed to leave: можно ли записать left?~Нет, разрешение не выполнение.~Факт ухода требует отдельного свидетельства.
text~meaning~Would be ready в прошлом email доказывает готовность сейчас?~Нет, это могла быть будущая перспектива тогда; нужен итог.~Сохранять временную опору.`),
bank(id,'sounds','Слышимая обязательность и оговорка','pronunciation',`speech~sound~Произнеси MUST NOT / DO NOT HAVE TO и поясни listener разницу.~It is prohibited in the first case and optional in the second.~Проверить реальный пересказ.
speech~sound~Выдели MAY NOT в прогнозе и перефразируй.~The room may not be ready; it is possible that it will be unavailable.~Не звучать как гарантированный отказ.
speech~message~Партнёр слышит rule там, где forecast; уточни.~I am describing a possibility, not prohibiting the event.~Получить ответ партнёра.
speech~sound~Произнеси could have been delayed по смысловым группам.~The parcel could have been delayed; we have not confirmed its location.~Сохранить разборчивость длинной цепочки.
speech~sound~Скажи needn't have printed с явным I did print it.~I printed it, but I needn't have done so.~Не оценивать факт произношения по тексту.
speech~message~Партнёр считает didn't need to всегда didn't do. Дай контрпример.~I didn't need to take a taxi, but I took one for convenience.~Контрпример должен сохранять функцию.
speech~sound~Произнеси SHOULD have arrived как ожидание и запрос.~It should have arrived by now. Could you check?~Не утверждать подтверждение.
speech~message~Выясни смысл could have left без продолжения.~Are you suggesting that they possibly left, or describing an opportunity they did not take?~Ответ определяет пересказ.
speech~sound~Сопоставь might NOT join и CANNOT join.~Might not leaves the outcome uncertain; cannot rules it out within the stated circumstances.~Контекст для невозможности назвать.
speech~message~Спокойно исправь certainty в чужом пересказе своей гипотезы.~I said it might explain the result, not that it definitely does.~Слушатель повторяет правильную степень.`),
bank(id,'reading','Чтение: архив и разные функции modal','reading',`short~evidence~Как зовут new volunteer?~Robin~Имя дано во вступлении.
short~evidence~Как зовут manager?~Salma~Salma руководит архивом.
short~evidence~В какой день briefing?~Thursday~Дата обозначена днём недели.
short~evidence~Где найден key: drawer/envelope?~envelope~Ключ найден в конверте.
text~meaning~May not photograph letters: что означает в notice?~Photography of unpublished letters is prohibited.~Это запрет, не прогноз.
text~meaning~May not be ready: почему не такой же запрет?~Planning email выражает неопределённость готовности каталога.~Контекст и функция различаются.
text~evidence~Сколько staff уже выбрали attendance?~Two people; this is separate from the optional-attendance rule.~Количество выбора не меняет норму.
text~meaning~Как Robin создал новое правило ошибочной редакцией?~Do not have to превратилось в must not, optional в prohibited.~Не стилистическая замена.
text~evidence~Найденный key подтверждает previous shift как автора действия?~Нет, место известно, но исполнитель остаётся выводом Salma.~Не независимое наблюдение человека.
text~meaning~Could have checked… but chose labels: какая рамка?~Возможность, которую Robin не использовал.~Невыполнение дано продолжением.
text~meaning~Как printing подтверждено в didn't need to примере?~Продолжением but I printed it anyway, не одной отрицательной необходимостью.~Раздельные утверждения.
text~message~Составь два точных предложения для итоговой сводки.~Photography is not permitted. Salma inferred who moved the key, but the person responsible was not observed.~Не выдать вывод за факт.`,reading),
bank(id,'listening','Аудирование: помещение театра','listening',`short~evidence~Имя speaker?~Ellis~Ellis координирует помещения.
short~evidence~Какой день availability ещё не подтверждён?~Saturday~Ожидается ответ caretaker о субботе.
short~evidence~Сколько bags видел speaker? Число.~2~Он видел две сумки в проходе.
short~evidence~Выбрали car или van?~car~Взяли предложенную машину.
text~meaning~Room may not be available — функция?~Неопределённый прогноз, не запрет использовать доступную комнату.~Отличить прогноз от правила.
text~evidence~Знает ли Ellis, кто оставил bags?~Нет, он не видел, кто их оставил.~Наблюдение предметов не автора.
text~meaning~Почему must not leave не доказывает passage clear?~Правило не гарантирует соблюдение; наблюдались две сумки.~Есть конкретный контрпример.
text~meaning~Из чего известно, что van не hired?~Это прямо сказано после выбора машины; не следует из didn't need to отдельно.~Сохранить источник отрицательного факта.
text~meaning~Could have arrived with delivery: возможность какого типа?~Гипотеза о неизвестном прошлом, не упущенная возможность.~Список ещё не проверен.
text~evidence~Что missing у box?~Its label is missing.~Не обязательно пропала сама коробка.
text~meaning~Should have arrived: подтверждает delivery?~Нет, ожидание основано на timetable и нуждается в проверке.~Не засчитывать ожидаемое как выполненное.
text~message~Какой следующий вопрос и когда можно записать ответ?~Ask the caretaker about Saturday and record the answer when it actually arrives.~Не создавать фиктивное подтверждение.`,listening),
bank(id,'production','Письмо и речь: от гипотезы к точному сообщению','writing',`text~message~Составь notice: запрещён вход в storage, attendance briefing optional.~Entry to the storage area is prohibited. Attendance at the briefing is optional.~Не перепутать две модальности.
text~message~Дай две рамки для The files must be archived.~Policy requires archiving. Alternatively, the speaker infers that archiving has already occurred.~Сформулировать ясные версии, не просто labels.
text~message~Напиши осторожную гипотезу о пропущенном письме и вопрос проверки.~She may not have received the message. Could we ask her to confirm?~Без обвинения в умысле.
text~message~Исправь could have → definitely did в чужом пересказе.~I described a possible explanation, not a confirmed event.~Назвать утраченный статус знания.
text~message~Напиши 220–280 слов: notice may not enter; estimate may not finish; should have arrived по schedule; found box не known sender. Дай ясную сводку и проверки.~The four statements should be separated by function before the notice is revised. In the entry notice, visitors may not enter expresses a restriction. A clearer public version is that entry is not permitted. It does not predict whether visitors will obey the rule, so we should not report compliance without separate evidence. The estimate that the work may not finish on time has a different function. It leaves open the possibility of delay; it neither forbids completion nor establishes that a delay will occur. A revised estimate should preserve that uncertainty and, if available, name the reason for it. The statement that the delivery should have arrived by now is based on a schedule. It expresses an expectation rather than direct confirmation. The next step is to check the actual delivery record or ask the person responsible for receiving it. We should not use the timetable as a substitute for that check. Finally, the box has been found, but its sender has not been identified. Finding the object establishes its location at the time of discovery, not the identity of every person involved in its journey. If someone infers a sender from the packaging, the summary should attribute that inference and retain the possibility of correction. These distinctions do not make the notice evasive. They make its rules clear and its factual claims proportionate to the evidence. I would ask a reader to explain which sentences impose requirements and which still need confirmation, then revise any sentence that merges those functions.~220–280 слов; четыре функции, ясные редакции, следующий шаг без выдуманного ответа.
text~message~Напиши два продолжения didn't need to phone: действие было / не было.~I didn't need to phone, but I did. I didn't need to phone, so I didn't.~Контекст определяет факт действия.
speech~message~Партнёр выбирает значение may not; после ответа дай объявление.~Do you mean that attendance is prohibited, or that attendance is uncertain?~Настоящий ответ должен изменить формулировку.
speech~message~Обсуди lost badge: may have dropped и другие две гипотезы, не назначая виновного.~It may have been dropped, moved or left at home. Which records can we check?~Различить гипотезы и подтверждения.
text~message~Передай may have been waiting без потери процесса и неизвестности.~It is possible that they were waiting at the relevant time.~Не утверждать завершённое ожидание.
text~message~Составь справку для US-читателя вместо needn't have paid.~You paid, but the payment was unnecessary.~Не изображать UK-форму единственно правильной.
text~message~Проверь собственный абзац: пометь rule/inference/fact/expectation.~Сохрани абзац, подпиши функции и перепиши одно потенциально смешанное место.~Не все modals вероятностные.
text~message~Напиши вопрос, отделяющий permission от actual departure.~Were they allowed to leave, and do we know whether they actually left?~Два разных предмета проверки.`),
bank(id,'review','Повторение функций и временной рамки','review',`short~form~He might have ___ mistaken. (been/being)~been~Perfect-цепочка требует been.
short~meaning~May not be true значит certainly false? (yes/no)~no~Возможное отрицание не уверенное отрицание.
text~meaning~Различи обязательность и вывод в must be silent.~Правило требует тишины; либо говорящий заключает, что сейчас тихо.~Нужны контекстные перефразировки.
text~meaning~Could have won but lost: что фиксирует lost?~Реальный неуспех дан словом lost; could have само имеет и другие чтения.~Не универсальный перевод формы.
text~meaning~Could have won; results unknown: что фиксирует форма?~Возможность победы, не подтверждение и не опровержение.~Результаты неизвестны.
text~meaning~Needn't have queued: ordinary retrospective interpretation?~Очередь была отстояна или ожидание состоялось, но нужды в этом не было.~Точная длительность не задаётся.
text~evidence~Must have signed по почерку — eyewitness evidence?~Нет, это вывод; наблюдение почерка не наблюдение подписывания.~Надёжность основания отдельно.
text~meaning~Как сделать positive option not attend ясной?~They could choose not to attend.~Не отрицательная способность.
speech~sound~Через 7 дней исправь новый пересказ forecast как prohibition.~I meant it might not be ready, not that completion was forbidden.~Новый материал и аудио.
text~message~Через 7 дней напиши memo с rule, hypothesis, expectation и verified fact.~Каждую функцию обозначь однозначно, сохрани источник и неизвестность.~Не выдумывать реальные события; пример может быть вымышленным.
text~evidence~Почему ответ по транскрипту не подтверждает произношение mustn't?~Звук и восприятие не наблюдались.~Оценивать только доступное свидетельство.
text~message~Исправь strongest modal без основания в собственном письме.~Сохрани исходное, назови основание уверенности и понизь claim только при необходимости.~Не добавлять perhaps механически всюду.`)
],tests:[
exam(id,'a',`short~form~She might ___ misunderstood. (have/has)~have~Базовая форма после modal.
short~form~The note may have ___ removed. (been/being)~been~Пассивная perfect-цепочка.
sentence~form~Исправь: He could has missed the ferry.~He could have missed the ferry.~Could + have + V3.
short~meaning~Optional payment: must not pay или do not have to pay?~do not have to pay~Отсутствие необходимости, не запрет.
short~meaning~Could have arrived; location unknown доказывает arrived? (yes/no)~no~Возможность не установленное событие.
text~meaning~Дай две версии Guests may not attend для rule и possibility.~Guests are not permitted to attend. It is possible that the guests will not attend.~Оба чтения получают явный контекст.
text~evidence~Свет горит; speaker says must be home. Домашнее присутствие witnessed?~Нет, это вывод из света, возможна ошибка основания.~Сохранять тип свидетельства.
text~meaning~Didn't need to reserve, but reserved anyway: объясни.~Необходимости не было, действие состоялось по продолжению.~Нет грамматического противоречия.
text~meaning~Should have arrived according to schedule: что спросить?~Has it actually arrived, and who can confirm it?~Ожидание не приёмка.
text~message~Напиши 100–140 слов: вход forbidden; delivery might not arrive; package found, sender unknown; спроси подтверждение, не обвиняй.~Entry to the storage room is prohibited, but this rule does not establish that nobody has entered. The delivery might not arrive today; that is a possibility, not a confirmed cancellation. A package has been found, although its sender is still unknown. We should report the discovery without assigning responsibility to a person who has not been identified. If someone believes the packaging indicates a sender, that interpretation should be attributed and checked. Please ask the receiving team whether today's delivery has actually arrived and whether they can identify the package. Record their answer when it is available. Until then, keep the rule, the forecast, the observed discovery and the unresolved identity separate.~100–140 слов; нормативность, прогноз, наблюдение, неизвестный исполнитель.
speech~sound~Сделай слышимым must not wait vs need not wait, поясни listener.~The first prohibits waiting; the second says waiting is unnecessary.~Аудио и понимание слушателя обязательны.
speech~message~Партнёр употребил could have sent. Выясни unknown past или unused opportunity.~Do you mean it was possibly sent, or that sending was possible but did not happen?~Пересказ должен учитывать ответ.
text~meaning~Needn't have booked в обычном ретроспективном чтении: booking была?~Да, бронирование выполнено и оценивается как ненужное.~Не путать с didn't need to отдельно.
text~meaning~Почему must not have read допустимо в выводе?~Контекст может задавать отрицательный inference, особенно US, не запрет читать в прошлом.~Не абсолютный запрет формы.
text~meaning~Might not return vs cannot return.~Возможное невозвращение против невозможности или запрета по контексту.~Не равные утверждения.
text~form~Вырази возможность выбрать не публиковать без could not publish.~They could choose not to publish.~Positive choice not to do.
text~evidence~Can translate ten pages значит ten translated?~Нет, способность не выполненная работа.~Не путать capacity и result.
text~meaning~May 40%, might 20% — надёжное постоянное правило?~Нет, контекст и функции различаются, проценты не закреплены формой.~Не произвольная шкала.
text~evidence~He said she might be away: чья оценка передана?~Его сообщение о возможности её отсутствия; не новая проверка автора.~Сохранять атрибуцию.
text~message~Исправь perhaps delayed → deliberately delayed без основания.~The delay is only a possibility, and no intention has been established.~Не приписывать умысел.`),
exam(id,'b',`short~form~It could ___ been misplaced. (have/has)~have~Базовая форма have после could.
short~form~They may have been ___. (sleep/sleeping)~sleeping~Процесс в perfect-цепочке.
sentence~form~Исправь: She does not might remember.~She might not remember.~Not после might, без do.
short~meaning~Sign: No photography permitted. must not take photos / do not have to take photos?~must not take photos~Формулировка запрета.
short~meaning~Should be open by now гарантирует наблюдавшуюся открытость? (yes/no)~no~Ожидание не проверка текущего состояния.
text~meaning~May not use the hall: дай запрет и прогноз отдельными ясными фразами.~Use of the hall is not permitted. It is possible that they will not use the hall.~Вторая версия — возможность поведения, не правило.
text~evidence~Из отпечатка выводят must have touched: факт касания наблюдали?~Нет, это inference from a trace, не eyewitness account.~Доказательная сила обсуждается отдельно.
text~meaning~Didn't need to travel, so stayed home: откуда known no travel?~Из stayed home в данном контексте, не только didn't need to.~Необязательность отдельно от действия.
text~meaning~Could have broken it; nobody knows: подтверждена целость?~Нет, could have здесь допускает событие, а не отрицает его.~Не спутать с but did not.
text~message~Напиши 100–140 слов: induction optional; hall may not be available; van should have arrived по timetable; needn't have printed — распечатал зря.~Attendance at the induction is optional; nobody has prohibited attendance. The hall may not be available, so its availability still needs confirmation. That uncertainty should not be rewritten as a definite closure or a rule against using it. The van should have arrived according to the timetable, but the schedule is not evidence that it actually did. We should ask the receiving team to check. The volunteer's statement that they needn't have printed the sheet has a different function: in the ordinary retrospective reading, the printing happened and was unnecessary. I would keep these four points separate in the summary and record any later confirmation as new information rather than pretending it was already contained in the modal verbs.~100–140 слов; optional, possibility, expectation, retrospective unnecessary action.
speech~sound~Противопоставь MAY have left / MUST have left и назови основание каждого.~The first offers a possibility; the second presents a stronger inference in this context.~Не назначать точные проценты и не объявлять факт.
speech~message~Спроси собеседника о must be locked: правило или вывод?~Do you mean it has to be locked, or that you infer it is locked?~Дождись ответа и перефразируй.
text~meaning~Needn't have waited: что сказано и что не сказано о длительности?~Обычное чтение — ждал ненужно; точная длительность не задана.~Не выдумывать минуты.
text~meaning~He must not have heard us по контексту: можно ли сразу назвать запретом?~Нет, возможно отрицательное умозаключение.~Уточнение важнее жёсткой таблицы.
text~meaning~Could choose not to attend и could not attend: почему полезно choose?~Оно явно выражает доступный выбор отказаться, а не невозможность участия.~Область отрицания различна.
text~form~Построй past possible passive для perhaps the folder was moved.~The folder may have been moved.~Допускаются might/could с соответствующим смыслом.
text~evidence~Permission to leave подтверждает actual leaving?~Нет, разрешение само по себе не событие.~Нужны отдельные данные о поведении.
text~meaning~Should have warned: как задать criticism без недоказанного отрицания?~If the context establishes that no warning was given, state that fact and then the criticism.~Не угадывать невыполнение по одной форме.
text~message~Сделай неизвестность ясной в пересказе old email would be ready.~The email predicted readiness by that date; completion has not been confirmed.~Прошлый прогноз не сегодняшний результат.
text~evidence~Где хранить открытый ответ до ручной оценки?~В сохранённой попытке со статусом ожидает проверки, без автоматического зачёта.~Факт отправки не mastery.`)
]};

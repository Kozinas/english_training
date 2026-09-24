export const argumentSources=[
 ['Cambridge: formal and informal language','https://dictionary.cambridge.org/uk/grammar/british-grammar/formal-and-informal'],
 ['Cambridge: hedges','https://dictionary.cambridge.org/grammar/british-grammar/hedges-just'],
 ['Cambridge: despite and in spite of','https://dictionary.cambridge.org/us/grammar/british-grammar/in-spite-of-and-despite'],
 ['British Council: contrasting ideas','https://learnenglish.britishcouncil.org/free-resources/grammar/c1/contrasting-ideas'],
 ['British Council: an opinion essay','https://learnenglish.britishcouncil.org/free-resources/writing/b2/opinion-essay'],
 ['Cambridge: collocation','https://dictionary.cambridge.org/us/grammar/british-grammar/collocation_2'],
 ['Cambridge: multi-word verbs','https://dictionary.cambridge.org/us/grammar/british-grammar/phrasal-verbs-and-multi-word-verbs'],
 ['British Council: multi-word verbs','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/multi-word-verbs'],
 ['Cambridge: actual and actually','https://dictionary.cambridge.org/grammar/british-grammar/actually'],
 ['George Mason University Writing Center: hedges','https://writingcenter.gmu.edu/writing-resources/research-based-writing/hedges-softening-claims-in-academic-writing'],
 ['Language Portal of Canada: make/take a decision','https://our-languages.canada.ca/en/writing-tips-plus/decision-make-a-decision-take-a-decision']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
const headers=['Модель','Пример','Функция','Построение','Граница смысла'];
export const registerPatterns=rows(`neutral request~Could you send the revised date?~Конкретная просьба.~Could + subject + base.~Не утверждение, что дата уже согласована.
indirect question~Could you explain why it failed?~Вопрос о причине.~Why + subject + verb.~Не why did it fail внутри.
mind~Would you mind checking this?~Просьба о действии.~Mind + -ing.~Yes/no лучше уточнять словами.
appreciate~I would appreciate it if you could reply.~Более формальная просьба.~Appreciate it if + clause.~Не I would appreciate you to reply.
direct instruction~Leave the room now.~Срочная инструкция.~Imperative + конкретное действие.~Прямота может быть уместна для безопасности.
informal chat~Can you check this bit?~Знакомый адресат и общий контекст.~Can + base; this bit требует ясной ссылки.~Не автоматически невежливо.
plain formal~Please confirm the date.~Ясная деловая просьба.~Confirm + object.~Длинное слово не обязательный признак качества.
contraction~We haven’t checked it yet.~Нейтральная рабочая речь.~Have not → haven’t.~Не все деловые письма запрещают сокращения.
full form~We have not checked it yet.~Более явное отрицание.~Not не теряется при смене тона.~Формальность не меняет факт проверки.
hedged claim~The change may help.~Возможность результата.~May + base.~Не обещание и не фиксированный процент.
appearance~The device appears to work.~Впечатление по наблюдению.~Appears + to-infinitive.~Не полная проверка надёжности.
trend~Errors tend to occur at night.~Тенденция.~Plural errors + tend to.~Не каждый случай и не причина.
evidence subject~These results suggest a benefit.~Осторожная интерпретация.~Plural subject + suggest.~Suggest не равно prove.
scope~In this trial, six people finished.~Ограничение охвата.~Рамка + наблюдаемый факт.~Не все будущие пользователи.
source~According to the organiser, it is ready.~Сообщение источника.~According to + noun phrase.~Не независимая проверка автора.
knowledge~As far as I can tell, it is complete.~Граница знания.~Рамочная конструкция.~Может понадобиться проверка.
negative scope~It may not work offline.~Возможность отрицания.~May + not + base.~Не категорическое cannot.
not necessarily~It is not necessarily cheaper.~Отрицание обязательного вывода.~Not necessarily + оценка.~Не значит точно дороже.
seem negative~It doesn’t seem to work.~Осторожное отрицательное впечатление.~Doesn’t + seem + to.~Не доказательство невозможности.
limited agreement~I agree that cost matters, but access matters too.~Признание части довода.~Agree + that-clause.~Не согласие со всем предложением.
respectful challenge~What evidence supports that estimate?~Проверка довода.~Вопрос о данных, не о личности.~Не обвинение во лжи.
precise commitment~I will send an update by Friday.~Ограниченное обещание.~Объект + срок.~Update не обязательно финальный результат.
clear refusal~I cannot approve this version yet.~Ясный отказ сейчас.~Cannot + approve + version + yet.~Не обещание одобрить позже.
acknowledgement~I understand your concern.~Признание услышанного.~Understand + object.~Не согласие и не выполнение.
responsibility~I entered the wrong date.~Ясный исполнитель.~Active I + action.~Пассив не должен прятать важного участника.
conditional offer~If the room is free, I can host.~Условное предложение.~If + present; can + base.~Свободная комната ещё не подтверждена.
specific hedge~The sample was small: eight volunteers.~Проверяемое ограничение.~Назови группу и число.~Somewhat limited без пояснения слабее.
read-back~Do you mean a draft or a final report?~Уточнение ожидаемого результата.~Альтернатива + конкретные объекты.~Не угадывать обязательство.`);
export const argumentPatterns=rows(`although~Although it was noisy, we stayed.~Уступка.~Although + clause.~Не повторять but в той же базовой связи.
even though~Even though it cost more, we chose it.~Подчёркнутая уступка.~Even though + clause.~Не гипотетическое even if.
even if~Even if it costs more, we may choose it.~Условная уступка.~Even if + clause.~Цена ещё не обязательно известна.
despite noun~Despite the noise, we stayed.~Уступка с именной группой.~Despite + noun.~Без of.
in spite of~In spite of the noise, we stayed.~Та же базовая связь.~In spite of + noun.~Of необходимо.
despite ing~Despite feeling tired, I continued.~Уступка с -ing.~Проверить участника feeling.~Не случайное присоединение к другому субъекту.
fact that~Despite the fact that it rained, we left.~Полное придаточное после именной опоры.~The fact that + clause.~Не despite it rained.
reduced although~Although expensive, the tool is useful.~Сокращённая уступка.~Восстанавливается it is expensive.~Не универсальный запрет although + adjective.
however~It was noisy. However, we stayed.~Связь предложений.~Точка/точка с запятой и обособление.~Не союз but с той же пунктуацией.
nevertheless~It was costly; nevertheless, we agreed.~Уступительный переход.~Sentence adverb.~Решение не делает цену низкой.
though final~It is useful. It is expensive, though.~Разговорная уступка в конце.~Though как наречие.~Although в этой позиции так не работает.
whereas~A is cheaper, whereas B is quieter.~Сопоставление.~Whereas + clause.~Не обязательно неожиданное противоречие.
while~While the idea is attractive, evidence is limited.~Уступка/контраст.~While + clause.~В другом контексте while задаёт время.
on the other hand~It is cheap. On the other hand, repairs cost more.~Другой аспект.~Отдельный переход.~Не опровержение ошибочного утверждения.
on the contrary~It wasn’t slow. On the contrary, it was quick.~Прямое опровержение.~Отрицается предыдущая оценка.~Не любой второй довод.
because~We paused because the gate was locked.~Названная причина.~Because + clause.~Не одно временное соседство.
because of~We paused because of the locked gate.~Причина именной группой.~Because of + noun phrase.~Не because of it was locked.
therefore~The exit is blocked. Therefore, use the other door.~Вывод/следствие.~Sentence adverb.~Само слово не доказывает логику.
for example~Some costs recur; for example, cleaning is monthly.~Пример общего утверждения.~Пример должен соответствовать тезису.~Один пример не доказывает частоту.
in addition~In addition, we need storage.~Добавление.~Новый связанный довод.~Не обязательно контраргумент.
claim~I recommend a limited trial.~Позиция автора.~Назови действие и границы.~Не сообщение о принятом решении.
evidence~Nine of twelve visitors finished unaided.~Наблюдение.~Число + группа + критерий.~Не девять из всех жителей.
warrant~This matters because staff time is limited.~Связь факта с рекомендацией.~Объясни значимость.~Читатель не обязан угадывать довод.
counterargument~A larger trial would cost more.~Сильный довод другой стороны.~Перескажи честно.~Не высмеивай более слабую подмену.
response~That cost is real, but a small trial limits it.~Ответ на возражение.~Признание + основание выбора.~Признание не капитуляция.
qualification~This applies only to the tested route.~Граница вывода.~Only + точная область.~Не скрывай оговорку в конце длинной фразы.
alternative cause~Attendance rose after the poster changed.~Последовательность.~After не кодирует доказанную причину.~Могла измениться погода или программа.
uncertainty~We do not yet know why attendance rose.~Неизвестная причина.~Do not know + indirect question.~Не доказательство отсутствия причин.
trade-off~The cheaper option requires more maintenance.~Цена выбора.~Сопоставь важные критерии.~Дешевле не значит лучше для любой цели.
decision criterion~Choose A if access is the priority.~Условная рекомендация.~Явный критерий.~Не универсальный победитель.
conclusion~On balance, I recommend another trial.~Итог аргумента.~Следует из рассмотренного.~Не добавляй внезапное новое доказательство.
revision~I would change my view if access failed.~Условие пересмотра.~Назови проверяемое основание.~Не обещай никогда не ошибаться.`);
export const lexicalPatterns=rows(`raise~raise a concern~Сообщить о проблеме.~Raise + object.~Не rise a concern.
rise~costs rise~Увеличиваться.~Rise без прямого объекта.~Не raise без объекта в этом значении.
address~address an issue~Заняться проблемой.~Address + object, без to.~Не гарантирует solve.
reach~reach a conclusion~Прийти к выводу.~Reach + object.~Не reach to a conclusion.
draw~draw a distinction~Провести различие.~Draw + distinction between.~Не буквальное рисование.
meet~meet a requirement~Соответствовать требованию.~Meet + object.~Не обещание соответствия всем требованиям.
pose~pose a risk~Создавать риск.~Pose + object.~Риск не равен уже случившемуся вреду.
take~take responsibility for~Принять ответственность.~For + noun/-ing.~Не take an evidence.
provide~provide someone with something~Предоставить кому-то что-то.~Также provide something for someone.~Не правило для любого give-подобного глагола.
explain~explain the problem to me~Объяснить проблему адресату.~Object + to recipient.~Не explain me the problem.
discuss~discuss the proposal~Обсудить предложение.~Без about после глагола.~Но a discussion about нормативно.
depend~depend on support~Зависеть от поддержки.~On + noun/-ing.~Предлог учится с моделью.
responsible~responsible for checking~Ответственный за проверку.~For + -ing.~Не for check как глагол.
capable~capable of checking~Способный проверить.~Of + -ing.~Способность не факт выполнения.
evidence~evidence of damage~Признаки повреждения.~Of + noun.~Evidence обычно неисчисляемо.
support~evidence for a claim~Данные в пользу утверждения.~For обозначает поддержку.~Не каждое evidence требует одного предлога.
contrast~evidence against a claim~Данные против утверждения.~Against меняет направление.~Не отсутствие evidence for.
attitude~agree with someone~Согласиться с человеком/мнением.~With + noun.~Не agree with делать.
proposal~agree to a proposal~Принять предложение.~To + noun; agree to do.~Согласие не исполнение.
choice~agree on a date~Согласовать дату.~On + предмет решения.~Не означает явку.
look into~look into it~Изучить проблему.~Объект после into.~Не look it into.
put off~put it off~Отложить.~Местоимение между put и off.~Не обязательно отменить.
put up with~put up with it~Терпеть.~Объект после всей конструкции.~Не put it up with.
bring up~bring it up~Поднять вопрос.~Местоимение внутри.~Не обязательно решить вопрос.
carry out~carry it out~Выполнить проверку/план.~Местоимение внутри.~Conduct a test тоже возможно.
rule out~rule it out~Исключить вариант.~Местоимение внутри.~Cannot rule out не доказывает наличие.
come up with~come up with a plan~Придумать.~Объект после with.~Не реализация плана.
follow up on~follow up on a request~Вернуться к запросу.~On + object.~Не обязательно получить ответ.
actual~actual cost~Фактическая стоимость.~Не current/relevant.~Контраст с прогнозом.
current~current version~Текущая версия.~Временная актуальность.~Не обязательно самая подходящая.
relevant~relevant evidence~Данные по существу вопроса.~Relevant to + noun.~Не обязательно достоверные.
accurate~accurate measurements~Точные измерения.~Соответствие измеряемому.~Не то же, что точная детальность precise.
eventually~eventually agreed~В итоге договорились.~Итог после процесса.~Не возможно/при случае.
possibly~possibly useful~Возможно полезный.~Возможность.~Не eventually.
sensible~a sensible precaution~Разумная мера.~Оценка разумности.~Не чувствительный.
sensitive~sensitive information~Данные, требующие осторожного обращения.~Также чувствительный к воздействию.~Не обязательно разумный.`);
export const registerReference={id:'register-hedging',title:'Регистр, просьбы и степень уверенности',intro:['28 моделей для выбора тона и силы утверждения. Это не шкала вежливости по числу длинных слов и не таблица вероятностей; адресат, цель и данные важнее формального ярлыка.'],headers,rows:registerPatterns,sources:argumentSources,practice:rows(`Could you ___ the date? (confirm/confirmed)~Confirm: после модального базовая форма.
Would you mind ___? (wait)~Waiting; mind + -ing.
Could you explain why did it fail?~Could you explain why it failed?
The tool appears working — перестрой с to.~The tool appears to work.
These results suggests — исправь.~These results suggest.
May not = cannot?~Нет: возможность отрицания не категорическая невозможность.
Not necessarily cheaper = more expensive?~Нет, это не обязательный вывод о большей цене.
I understand = I agree?~Нет, понимание и согласие различны.
Please confirm the date достаточно формально?~В обычной деловой ситуации да; контекст решает.
Сокращения всегда запрещены в письме?~Нет, зависит от жанра и отношений.
Длинное слово всегда точнее?~Нет, возможны лишняя сложность и сдвиг смысла.
According to Jo = проверил сам?~Нет, это источник сообщения.
Update by Friday = final by Friday?~Нет, обновление статуса не обязательно финал.
In this trial можно удалить без потерь?~Нет, расширится область вывода.
Stop now в опасной ситуации обязательно грубо?~Нет, ясная срочная инструкция уместна.
Молчание после просьбы = согласие?~Нет, нужно подтверждение.`)};
export const argumentReference={id:'argument-concession',title:'Аргумент, уступка и честный вывод',intro:['32 модели связи доводов. Базовые уступки развиваются до B2; ссылка British Council C1 даёт дополнительное чтение, а не объявляет все продвинутые уступки освоенными. Аргумент требует данных и объяснения связи, не только связок.'],headers,rows:argumentPatterns,sources:argumentSources,practice:rows(`Despite ___ delay. (the/it was a)~The: именная группа.
Although ___ delayed, we left. (we were/our)~We were: полное придаточное.
In spite ___ rain.~Of.
Despite of the cost — исправь.~Despite the cost.
Despite being tired, I worked — кто устал?~I; проверить смыслового участника.
Although expensive допустимо?~Да, сокращение although it is expensive в подходящем контексте.
Even though и even if одинаковы?~Нет: установленная уступка и условная уступка.
However соединяет части точно как but?~Нет, в стандартном письме нужны границы предложений/точка с запятой.
On the contrary = другой аспект?~Обычно прямое опровержение; другой аспект — on the other hand.
While всегда время?~Нет, также контраст/уступка.
We waited because of ___. (the closed door/it was closed)~The closed door: именная группа; для it was closed нужен because.
After доказывает причину?~Нет, порядок событий сам её не устанавливает.
Что делает пример?~Иллюстрирует довод, но один пример не доказывает общую частоту.
Что нужно после возражения?~Честный ответ с основанием, ограничением или изменением позиции.
Финал может внезапно добавить новую статистику?~Лучше обосновать её раньше; вывод следует из разобранного.
Согласие с одним доводом = принятие всего плана?~Нет, объём согласия нужно назвать.`)};
export const lexicalReference={id:'lexical-precision',title:'Сочетаемость, управление и ложные друзья',intro:['36 выбранных моделей B204, не полный словарь collocations, предлогов или phrasal verbs. У каждой записи важны значение, объект, регистр и пример; один русский вопрос не выбирает английский предлог.'],headers,rows:lexicalPatterns,sources:argumentSources,practice:rows(`___ a concern. (raise/rise)~Raise: нужен прямой объект.
Costs ___ yesterday. (raised/rose)~Rose: непереходное rise.
Discuss about the plan — исправь.~Discuss the plan; но a discussion about the plan.
Explain me the rule — исправь.~Explain the rule to me.
Reach to a conclusion — исправь.~Reach a conclusion.
Responsible ___ checking.~For; checking после предлога.
Capable ___ checking.~Of; не выбирать по русскому вопросу.
Evidence of и evidence for одинаковы?~Признаки явления и поддержка тезиса — разные отношения.
Look into the problem → местоимение.~Look into it.
Put off the meeting → местоимение.~Put it off.
Put up with delays → местоимение.~Put up with them.
Cannot rule out = доказано?~Нет, возможность не исключена.
Address an issue = solve it?~Не обязательно: заняться не равно решить.
Actual/current/relevant — различи.~Фактический/текущий/относящийся к вопросу.
Eventually = возможно?~Нет, в итоге; возможно — possibly/perhaps.
Sensible/sensitive — различи.~Разумный/чувствительный либо требующий осторожности.`)};

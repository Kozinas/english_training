export const mediationSources=[
 ['Council of Europe: mediation — communication within and across languages','https://www.coe.int/en/web/common-european-framework-reference-languages/mediation'],
 ['Cambridge Dictionary: agree — meanings and construction patterns','https://dictionary.cambridge.org/dictionary/english/agree'],
 ['Cambridge Grammar: infinitives with and without to','https://dictionary.cambridge.org/grammar/british-grammar/infinitives']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const mediationPatterns=rows(`attribution~Mina argues that the route must remain accessible.~Чужая позиция с названным автором.~Не выдавать пересказ за независимую проверку.
checked paraphrase~Have I represented your concern accurately?~Проверка пересказа у автора.~Сам вопрос не является подтверждением.
correction~Not quite: my concern is the entrance, not the timetable.~Уточнение предмета возражения.~Исправить текущий пересказ, сохранить историю.
definition~By available, do you mean bookable or free of charge?~Два разных значения одного слова.~Не выбирать за собеседника.
embedded question~Could you explain what accessible means here?~Вложенный вопрос без инверсии.~Не what does accessible mean внутри этой рамки.
distinction~Separate the criterion from the proposed solution.~Separate A from B.~Разделение анализа не запрещает связи между частями.
shared purpose~Both want visitors to find the room.~Общий результат в заданном контексте.~Не общее согласие со всеми средствами.
different priorities~They disagree about which risk matters most.~Предмет разногласия после about/on.~Разные приоритеты не обязательно ошибка в фактах.
agree with~I agree with you about the delay.~Согласие с человеком/позицией.~With не механический перевод русского с во всех контекстах.
agree on~We agreed on a review date.~Совместно выбранный предмет решения.~В UK также agree a date; не объявлять ненормативным.
agree to~She agreed to a short trial.~Принятие предложения.~Не доказательство выполнения.
agree to do~He agreed to check the entrance.~Согласие совершить действие.~To + base, не to checking в этой модели.
qualified support~I support the trial provided that access is maintained.~Условная поддержка.~Условие ещё не обязательно выполнено.
acknowledgement~I understand the distinction, but I still disagree.~Понимание без согласия.~Не записывать consensus.
reframe~Could we compare access outcomes before choosing a booking channel?~Другой вопрос для анализа той же проблемы.~Не удалять принципиальное возражение.
provisional option~One possibility would be a staffed desk.~Вариант на рассмотрение.~Would не создаёт принятого решения.
unknown interest~What makes local contact important to you?~Уточнение причины предпочтения.~Не приписывать мотив без ответа.
strong fair version~Your strongest stated concern is the lack of an offline route.~Сильная версия реально высказанного довода.~Не придумывать автору новые аргументы и полномочия.
plain language~A reversible trial is one we can stop and undo within stated limits.~Объяснение термина адресату.~Обратимость зависит от того, что именно можно вернуть.
cross-language relay~Она согласна проверить макет, не одобрить его. → She has agreed to review the layout, not to approve it.~Передача функции и границ между языками.~Не обязательно пословный перевод; отрицание сохранить.
participation~Would you like to add anything, now or in writing later?~Приглашение без принуждения.~Молчание не согласие и не доказанная некомпетентность.
unresolved point~The principle is shared; the funding question remains open.~Честный предел договорённости.~Не заполнять пробел удобной догадкой.
record status~This is a draft summary for correction, not a final decision.~Статус документа виден.~Автор черновика не получает права решать за группу.
new transfer~Use a new dispute and ask each partner to correct the summary.~Контроль переноса после отсрочки.~Выученный диалог не независимая интеракция.`);
export const mediationReference={id:'mediation-reframing',title:'Медиация: точный пересказ и смена рамки вопроса',intro:[
 '24 авторские модели: согласование смысла, позиции и критерии, переформулирование и проверка пересказа. Это учебная языковая практика, не инструкция по юридическому урегулированию и не полный каталог дискуссионных стратегий.',
 'Медиация возможна внутри одного языка и между языками. Упростить формулировку можно, но нельзя терять источник, отрицание, условия и оставшиеся разногласия. Общая цель не равна единому решению.',
 'Сценарии и упражнения оригинальные. Источники — ориентиры по понятию медиации и языковым конструкциям; авторская метка C2 не является результатом валидированного экзамена.'
],headers:['Задача','Авторский пример','Механизм','Предел'],rows:mediationPatterns,sources:mediationSources,practice:rows(`Could you explain what does access mean? Исправь вложенный вопрос.~Could you explain what access means? Внутри what + subject + verb.
We agreed to checking the layout. Исправь модель действия.~We agreed to check the layout. Не утверждает, что проверка уже выполнена.
Both want reliable information. Все согласны на общий сайт?~Нет, общая цель совместима с разными средствами.
Она согласна прочитать проект, но пока не поддерживает его. Передай по-английски.~She has agreed to read the draft, but she does not support it at this stage.
Available: человек имеет в виду free of charge, ты — bookable. Уточни.~By available, do you mean that it can be booked or that it costs nothing?
Фраза This is impossible без причины. Можно ли записать страх потери власти?~Нет. Which part seems impossible, and what prevents it? Мотив не установлен.
Как заменить спор online versus offline вопросом о результате?~Which combination would let visitors complete the task without losing an offline option? Это вопрос, не принятое решение.
Подтверждение I understand. Что уточнить?~Are you agreeing to the proposal, or confirming that the explanation is clear?
Участник исправил твой пересказ: concern is privacy, not cost. Что сохранить?~Исправить текущую версию: The concern is privacy. Первоначальную ошибку и исправление оставить раздельно.
В пересказе нельзя выдумывать нового владельца задачи. Как записать пробел?~The next action needs an owner; nobody has accepted it yet.
Перескажи частичное согласие: принцип общий, финансирование открыто.~They agree on the principle, but funding remains unresolved.
Контроль через 7 дней: какие данные подтверждают медиацию?~Новый материал, исходные позиции, первый пересказ, реальные поправки партнёров, исправленная версия. Письмо проверяется содержательно, речь — по аудио.`)};

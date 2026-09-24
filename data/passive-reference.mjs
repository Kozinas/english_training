// Original teaching models; not reproduced textbook exercises.
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const passiveSources=[
 ['British Council: passives','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/passives'],
 ['Cambridge: passive focus, agent and instrument','https://dictionaryblog.cambridge.org/2015/06/24/the-cake-was-made-by-my-sister-how-to-use-the-passive-in-english/'],
 ['Cambridge: have something done','https://dictionary.cambridge.org/grammar/british-grammar/have-something-done'],
 ['Cambridge: get passive','https://dictionary.cambridge.org/grammar/british-grammar/passive'],
 ['Cambridge: get, causative patterns and got/gotten','https://dictionary.cambridge.org/us/grammar/british-grammar/get']
];
export const passivePersons=rows(`I~I am invited.~I am not invited.~Am I invited?~Me в активном дополнении → I в подлежащем.
you~You are invited.~You are not invited.~Are you invited?~You для одного и нескольких адресатов.
he~He is invited.~He is not invited.~Is he invited?~Не he are; by him, не by he.
she~She is invited.~She is not invited.~Is she invited?~Не she invited, если её приглашают.
it~It is checked.~It is not checked.~Is it checked?~Не добавлять does к is.
we~We are invited.~We are not invited.~Are we invited?~Us в дополнении → we в подлежащем.
they~They are invited.~They are not invited.~Are they invited?~Согласование с they, не с исполнителем.`);
export const passivePatterns=rows(`Present Simple~The bins are emptied on Mondays.~am/is/are + V3~Повторяемая процедура.~Расписание не доказывает каждое выполнение.
Past Simple~The portrait was painted in 2018.~was/were + V3~Событие в закрытом прошлом.~Не has been с этой законченной датой.
Present Continuous~The bridge is being inspected.~am/is/are being + V3~Процесс сейчас.~Завершение не утверждается.
Past Continuous~The stage was being built at noon.~was/were being + V3~Процесс в прошлой точке.~Не обязательно закончили потом.
Present Perfect~The copies have been signed.~have/has been + V3~Выполненное к сейчас действие.~Подписание не гарантирует согласованность всех данных.
Past Perfect~The seats had been reserved before we called.~had been + V3~Раньше прошлой опоры.~Не просто очень давно.
will~The results will be published tomorrow.~will be + V3~Будущее сообщение/обещание.~Публикации сейчас не доказывает.
going to~The old board is going to be replaced.~be going to be + V3~Намерение/ожидаемое изменение.~Не завершённая замена.
can~The date can be changed.~can be + V3~Возможность или разрешение.~Не факт изменения.
must~The form must be signed.~must be + V3~Обязанность.~Не подтверждение подписи.
must not~The code must not be shared.~must not be + V3~Запрет.~Не отсутствие необходимости.
should~The notice should be translated.~should be + V3~Рекомендация в этом контексте.~Не выполненный перевод.
may / might~The event may be postponed.~may/might be + V3~Возможность.~Не подтверждённая отмена или перенос.
negative~The draft has not been approved.~not после первого вспомогательного.~Отрицается одобрение к сейчас.~Не означает, что черновик никогда не видели.
question~Has the draft been approved?~Первый вспомогательный перед подлежащим.~Вопрос о статусе.~Не Has been the draft approved?
short answer~Yes, it has. / No, it hasn’t.~Первый вспомогательный сохраняется.~Краткий ответ на Has…?~Не Yes, it is на этот вопрос.
agent~The notice was translated by Vera.~by + исполнитель.~Уточняет, кто перевёл.~Имя нельзя выдумать по отсутствующему by.
instrument~The label was removed with a scraper.~with + инструмент.~Чем пользовались.~Машина может быть и исполнителем с by: зависит от роли.
deadline~The notice must be ready by noon.~by + временная граница.~Не позднее полудня.~Не исполнитель действия.
pronoun~We were helped by her.~We подлежащее; her после by.~Падежная форма местоимения.~Не Us were helped by she.
two objects~We were given a map. / A map was given to us.~Получатель или вещь в начале.~Оба возможны с give.~Не все глаголы допускают обе модели.
prepositional verb~The dog was looked after.~Сохраняется after.~За собакой присматривали.~Не The dog was looked в этом значении.
intransitive~The parcel arrived.~Arrive без прямого объекта.~Активное непереходное действие.~Не The parcel was arrived.
state~The door is closed.~Описание состояния возможно.~Дверь сейчас не открыта.~Не сообщает, кто и когда закрыл.
result limit~The device has been tested, but it failed.~Tested сообщает проведённую проверку.~Результат может быть отрицательным.~Не подменять tested на passed.
active clarity~Mira will approve the release.~Актив с явным ответственным.~Полезен для назначения задачи.~Пассив не автоматически профессиональнее.
get passive~My bag got damaged in transit.~get + V3 без объекта между ними.~Сумка пострадала.~Не означает заказ повреждения.
scope~Perfect Continuous passives are uncommon.~Тяжёлые цепочки обычно переформулируют.~Здесь основные формы B1, не все комбинации.~Будущие perfect-формы и reporting passives изучаются дальше.`);
export const passiveReference={id:'passive-forms',title:'Пассив: лица, формы, исполнитель и статус',sources:passiveSources,intro:['Семь личных рядов и 28 моделей. Для лиц колонки показывают утверждение, отрицание и вопрос; для остальных строк — форму, смысл и ограничение. Это не полный перечень всех пассивных конструкций английского.','V3 не меняется по лицам; время, аспект, вопрос и отрицание передаются вспомогательными глаголами. Не смешивайте описание нормы, процесс, завершённое действие и успешный результат.'],headers:['Лицо / модель','Утверждение / пример','Отрицание / устройство','Вопрос / смысл','Пояснение / ограничение'],rows:[...passivePersons,...passivePatterns],practice:[['They invite me → начни с I.','I am invited.'],['The bags ___ checked yesterday.','were'],['Пассив write: written или wrote?','written'],['Does it is checked? Исправь.','Is it checked?'],['At ten, it was being painted: закончили?','В этой фразе завершение не утверждается.'],['The form has ___ signed.','been'],['Must be checked: уже проверили?','Нет, это требование.'],['The letter was written ___ Ada.','by'],['Opened ___ a key: инструмент.','with'],['By Friday: исполнитель?','Нет, срок — не позднее пятницы.'],['They gave us a code: два пассива.','We were given a code. A code was given to us.'],['The cats were looked ___ .','after'],['The package was arrived: исправь.','The package arrived.'],['Tested = passed?','Нет: проведение проверки не доказывает успешный результат.'],['Is closed: известно время закрытия?','Нет, возможно просто описание состояния.'],['Has it been sent? Краткий отрицательный ответ.','No, it hasn’t.']]};
export const servicePatterns=rows(`present~I have my coat cleaned each spring.~have/has + object + V3~Регулярно пользуюсь услугой.~Не обязательно сам чищу.
third person~She has her bike serviced.~has + object + V3~Она организует обслуживание.~Has здесь основной глагол.
past~We had the invitations printed.~had + object + V3~Печать для нас выполнили.~Не We had printed the invitations.
negative past~We didn’t have the room painted.~didn’t have + object + V3~Не заказывали/не делали через другого.~Не доказывает, что комнату вообще никто не красил.
question past~Did you have the lock changed?~did + subject + have + object + V3~Вопрос об услуге.~Не Did you had…?
present question~Where do you have your photos printed?~do + subject + have~Место регулярной услуги.~Have не вспомогательный Perfect.
arrangement~I’m having my curtains shortened tomorrow.~be having + object + V3~Договорённость о будущей услуге.~Не уже выполненная работа.
ongoing service~We’re having the floor replaced this week.~be having + object + V3~Организованный процесс.~Окончание требует подтверждения.
intention~I’m going to have the screen replaced.~going to have + object + V3~Намерение заказать замену.~Не подтверждённая запись.
will~I’ll have the keys copied.~will have + object + V3~Решение/обещание.~Не выполненное действие сейчас.
perfect~I’ve had the receipt translated.~have had + object + V3~Услуга выполнена к сейчас.~Первое have вспомогательное, had основной.
modal~You should have the brakes checked.~should have + object + V3~Совет заказать проверку.~Не should have checked: там другой смысл.
infinitive~I need to have my passport photo taken.~to have + object + V3~Необходимая услуга.~Need не доказывает выполнение.
get service~I got my suitcase repaired.~get + object + V3~Разговорная модель услуги.~Не путать с got damaged без объекта.
UK/US participle~I’ve got/gotten the file printed.~UK got / US gotten допустимы по смыслу.~Результат с get.~Не ошибка только из-за варианта английского.
do it yourself~I repaired my suitcase myself.~Актив + myself.~Исполнитель назван прямо.~Не тот же смысл, что заказ мастеру.
object position~I had the photo framed.~Вещь между have и V3.~Заказал рамку/оформление.~I had framed the photo — Past Perfect active.
past perfect contrast~I had framed it before they arrived.~had + V3 + object~Раньше прошлого события сделал сам в данной истории.~Не услуга по одной форме had.
have a person do~I had the assistant print the labels.~have + person + base~Поручение названному исполнителю.~Не have the assistant to print.
get a person to do~I got the assistant to print the labels.~get + person + to-infinitive~Добился/организовал действие.~Не get the assistant print.
adverse event~She had her wallet stolen.~have + object + V3~С ней случилась кража.~Не доказательство заказа кражи или её вины.
service agent~We had the signs painted by Noor.~by + фактический исполнитель.~Уточняет мастера.~Не добавлять имя без данных.
price request~How much does it cost to have this copied?~Вежливый вопрос об услуге.~Выясняем цену.~Не согласие на любую стоимость.
scope request~Could you check it before replacing any parts?~Действие и граница заказа.~Проверка отдельно от замены.~Не техническая инструкция по ремонту.
booking~The appointment has been confirmed.~Подтверждено время.~Можно сообщить договорённость.~Не говорит о завершённой услуге.
quality~The lens was replaced, but the fault remains.~Выполнение и качество раздельно.~Нужен последующий вопрос.~Оплата сама по себе не доказывает качество.`);
export const serviceReference={id:'service-arrangements',title:'Have/get something done: услуги, исполнитель и результат',sources:passiveSources,intro:['26 моделей: организация услуги, самостоятельное действие, времена и вопросы, поручение исполнителю и неприятное событие. Это не все значения have/get или каузативные конструкции.','Проверь три вещи: кто организует, что подвергается действию и кто выполняет. После have/get в модели услуги стоит объект, затем V3. Отдельно установи статус: намерение, запись, процесс, выполнение или проверенное качество.'],headers:['Модель','Пример','Устройство','Смысл','Ограничение'],rows:servicePatterns,practice:[['I had my coat ___ . (clean)','cleaned'],['She ___ her hair cut every month. (have)','has'],['Did he had his shoes repaired?','Did he have his shoes repaired?'],['Вопрос с where: you have photos printed.','Where do you have photos printed?'],['I’m having it repaired tomorrow: уже готово?','Нет, это будущая договорённость.'],['I have repaired it myself: услуга?','В данном контексте самостоятельное действие.'],['I have had it repaired: два have?','Первое образует Perfect, второе — модель услуги.'],['I had the assistant ___ it. (print)','print'],['I got the assistant ___ it. (print)','to print'],['Had her bag stolen: заказала кражу?','Нет, обычное значение — пострадала от кражи.'],['The bag got damaged: где организатор услуги?','В этой фразе организатор не назван.'],['UK got / US gotten: допустимы?','Да, в подходящей форме и контексте.'],['I didn’t have the door painted: did + ?','have'],['She should have the form ___ . (translate)','translated'],['Бронь услуги = выполненная услуга?','Нет, статусы различны.'],['Напиши вопрос о цене копирования ключа.','How much does it cost to have this key copied?']]};

export const discussionSources=[
 ['Council of Europe: Mediation','https://www.coe.int/en/web/common-european-framework-reference-languages/mediation'],
 ['Cambridge Grammar: mind — requests and permission','https://dictionary.cambridge.org/us/grammar/british-grammar/mind'],
 ['British Council: A project management meeting (C1, external listening)','https://learnenglish.britishcouncil.org/free-resources/listening/c1/project-management-meeting'],
 ['Cambridge Dictionary: remit — noun and verb pronunciation','https://dictionary.cambridge.org/pronunciation/english/remit'],
 ['Cambridge Dictionary: overlap — noun and verb','https://dictionary.cambridge.org/dictionary/english/overlap'],
 ['Cambridge Dictionary: rota — UK usage','https://dictionary.cambridge.org/dictionary/english/rota']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const discussionPatterns=rows(`enter the discussion~May I come in on the access point?~Назвать связь со сказанным.~Вежливая форма не гарантирует удобный момент.
link contributions~That connects with Nia's concern about newcomers.~Связать две реальные реплики.~Не приписывать Nia согласие с выводом.
hold the floor~Let me finish the distinction, then I will come to you.~Завершить мысль и вернуть очередь.~Не постоянная лицензия на монолог.
yield the floor~Omar, would you like to respond to that?~Передать слово адресно.~Приглашение не обязанность отвечать.
repair overlap~We started together. Please go ahead; I will follow.~Исправить одновременный старт.~Overlap не обязательно агрессия.
bring someone in~Val, is there anything you would like to add?~Дать возможность участия.~Молчание не надо публично диагностировать.
allow a pass~You can come back to this after hearing the options.~Сохранить возможность вернуться.~Не требовать мгновенного мнения.
request an action~Would you mind separating those two questions?~Mind + -ing.~Не mind to separate в этой просьбе.
ask permission~Would you mind if I summarised the options?~Выбранная вежливая модель if + past.~Past здесь не прошлое событие.
clarify permission~Not at all. Please go ahead.~Развёрнутый ответ на mind.~Одно yes/no может быть неоднозначным в реальном разговоре.
ask a focused question~By available, do you mean booked or merely free?~Уточнить конкретную неоднозначность.~Не просить повторить всё при одном пробеле.
repair reference~When you say she, do you mean Eve or Rosa?~Проверить участника.~Ближайшее имя не всегда референт.
repair scope~I supported the review, not the whole proposal.~Исправить объект поддержки.~Не переписать исходную позицию молча.
name a new constraint~That changes the number of tables we can allocate.~Объяснить последствия новой детали.~Не объявлять все прежние решения недействительными.
reopen explicitly~Could we revisit the allocation in light of that correction?~Вернуть конкретный вопрос.~Не скрывать смену повестки словом anyway.
return to the question~Before we move on, have we resolved the staffing issue?~Вернуться к незавершённому.~Вопрос не утверждает, что вопрос решён.
defer explicitly~Let us return to signage after deciding the format.~Отложить с точкой возврата.~Не выдать отложенное за отвергнутое.
separate authority~We can choose the format, but cannot change the booking.~Назвать предел полномочий.~Уверенный тон их не расширяет.
test agreement~Which part of that proposal do you accept?~Проверить объект согласия.~I see не автоматически I agree.
record a vote~The proposal passed by three votes to one.~Большинство по объявленному правилу.~Не unanimous и не законность любой процедуры вне кейса.
preserve dissent~Val opposed the allocation; her concern remains in the record.~Записать несогласие без карикатуры.~Не приписывать нежелание сотрудничать.
accept a task~I can review the signs without endorsing the layout.~Отделить помощь от поддержки решения.~Принятое действие ещё не выполнено.
confirm ownership~Are you taking responsibility for the draft or only reviewing it?~Уточнить роль.~Заданный вопрос не создаёт поручение.
confirm a deadline~Is Friday the delivery date or the review date?~Проверить тип срока.~Уточнить календарную дату и зону при необходимости.
close with unknowns~The format is agreed; the notice still has no owner.~Закрыть решённое, сохранить неизвестное.~Не объявлять всё либо готовым, либо проваленным.
invite correction~Does this summary preserve your reservation?~Проверить итог у участника.~Вопрос без ответа не подтверждение.
table an item~Do you mean discuss it now or postpone it?~Table допускает разные UK/US употребления.~Не угадывать действие по акценту.
evaluate interaction~The reply addressed the new condition rather than repeating the opening statement.~Проверить настоящую реакцию.~Текст и ASR не оценивают интонацию или oral fluency.`);
export const discussionFlowReference={id:'discussion-flow',title:'Многосторонняя дискуссия: очередь, поворот и итог',intro:[
 '28 авторских моделей и 16 задач: вход и выход из реплики, адресное уточнение, пересмотр после новых данных, решение и итог. Это не полный регламент собраний или универсальные нормы вежливости.',
 'Роль ведущего не означает право решить за всех. Различай понимание, поддержку части предложения, принятое поручение и выполненное действие. Правило принятия решения устанавливается в конкретной группе.',
 'Источники — ориентиры для языка и практики. Материалы курса оригинальные. Внешняя запись British Council открывается вручную с интернетом; её текст и упражнения не копируются.'
],headers:['Функция','Авторский пример','Механизм','Ограничение'],rows:discussionPatterns,sources:discussionSources,practice:rows(`Would you mind to pause? Исправь заданную просьбу.~Would you mind pausing? Mind + -ing.
Would you mind if I summarise? Дай выбранную учебную past-модель, не объявляя все разговорные варианты ошибкой.~Would you mind if I summarised? Здесь дистанция, не прошедшее время события.
Ответь на Would you mind if I came in? так, чтобы разрешение было ясным.~Not at all. Please go ahead.
Два человека начали одновременно. Обязательно ли один груб?~Нет: возможны случайный старт, задержка связи, попытка поддержать. Нужен контекст и восстановление очереди.
Уточни he между двумя возможными участниками.~Do you mean Omar or Lee when you say he?
I see: это достаточное подтверждение поддержки?~Нет. What part do you agree with, if any?
3 за, 1 против; принятое правило — простое большинство. Решение единогласное?~Нет: принято большинством по данному правилу, один голос против сохраняется.
Несогласный взял задачу проверить текст. Отозвал ли он возражение?~Не обязательно; помощь и поддержка решения раздельны.
Спикер сказал table this. Назначь ясное следующее действие вопросом.~Do you mean discuss it now or leave it until the next meeting?
Новые сведения затронули одну предпосылку. Нужно ли отменять весь итог?~Сначала установить, какие выводы зависят от неё; пересмотр должен быть адресным.
Участник тихо сидит. Сформулируй приглашение без принуждения.~Would you like to add anything, or come back to this later?
Назови четыре поля принятого поручения.~Кто, какое действие, согласованный срок и зависимость/условие; неизвестные поля не выдумывать.
Как отложить вопрос, не потеряв его?~Назвать вопрос и точку возврата: Let us return to the notice after agreeing the format.
Draft due Tuesday, review Friday. Пятница — срок первого черновика?~Нет. Разные действия и даты.
Ведущий записал all agreed без опроса. Что проверить?~Кто явно подтвердил какую формулировку, какие условия/возражения остались и как группа принимает решение.
Через 7 дней повторить выученный диалог: это новый перенос?~Нет. Нужны новый контекст и неизвестные заранее ходы партнёров; устная оценка требует реального слушания.`)};

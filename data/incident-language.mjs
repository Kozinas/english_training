export const incidentSources=[
 ['Google SRE Workbook: Incident Response','https://sre.google/workbook/incident-response/'],
 ['Google SRE Book: Managing Incidents','https://sre.google/sre-book/managing-incidents/']
];
export const incidentPatterns=`current process~We are investigating export errors.~Present Continuous.~Процесс не готовый результат.
current result~We have restored the selected path.~Present Perfect.~Нужна опора для restored и границы selected.
finished event~We changed the route at 09:18 UTC.~Past Simple + finished time.~Не have changed at в этой рамке.
earlier event~The alert had fired before the handover.~Past Perfect + past reference.~Не делает alert началом impact.
ongoing interval~We have been monitoring since 09:20.~Since + starting point.~For ten minutes сообщает длительность.
missing result~The cause has not yet been confirmed.~Perfect passive.~Not yet не обещание скорого успеха.
scope~Some export attempts returned errors.~Some + plural.~Не все пользователи и не все функции.
denominator~Forty of two hundred attempts failed.~Of + denominator.~Retries могут повторять одного пользователя.
limited check~All twelve selected downloads opened.~All ограничено выбранной группой.~Не глобально unaffected.
unknown outcome~One final result remains unobserved.~Remain + complement.~Не established failure или data loss.
temporal relation~The errors followed a configuration change.~Follow + object.~After не because of.
coincidence~The outage coincided with a change.~Coincide with.~Совпадение не установленная причина.
hypothesis~The change may have contributed to the errors.~May have + participle.~Не causal certainty и не оправдание выдуманной версии.
attribution~According to the working record, three jobs are pending.~According to + source.~Чей вывод и какой срез.
performed action~Responders switched the path at 09:18.~Active Past.~Участник известен из досье.
proposal~A retry has been proposed but not run.~Passive + contrast.~Proposal не исполнение/разрешение.
mitigation~The action reduced observed impact in this sample.~Bounded claim.~Не обязательно устранила причину.
update commitment~We will update you at 09:45 UTC.~Will + base.~Обещание сообщения, не восстановления.
unconditional message~We will update you even if nothing changes.~Even if + Present.~Без will после if в обычном условии.
no recovery estimate~We cannot yet give a reliable recovery time.~Cannot yet + base.~Не «никогда не восстановим».
clarification~Could you clarify which jobs are complete?~Embedded word order.~Не which jobs are they complete.
acknowledgement~I understand the request, but I cannot take over.~Understand + but.~Понимание не принятие роли.
accepted role~I accept coordination until 10:00 UTC.~Explicit scope and boundary.~Не автоматически все технические действия.
read-back~Please read back the remaining checks.~Read back + object.~Проверить понимание, не требовать согласия с гипотезой.
correction~I said fifteen forty; I meant fifteen oh four.~Explicit self-repair.~Исправленная версия плюс история.
audience~The public update omits private identifiers.~Audience and purpose.~Не скрывает известное влияние сбоя.
accountability~The responder applied the recorded change.~Neutral action and evidence.~Не приписывать небрежность без основания.
monitoring~We are monitoring for recurrence.~Monitor for + noun.~Не гарантия отсутствия повторения.
handover~Noor has taken over coordination.~Take over + role.~Передача требует принятия по условиям кейса.
follow-up~We will follow up on the unknown outcome.~Follow up on.~Не означает уже выяснили.
keep informed~We will keep you posted.~Keep object posted.~Нейтрально-разговорная формула; добавь время.
hold conclusion~We cannot rule out another explanation.~Rule out + object.~Не устанавливает альтернативу как факт.`.split('\n').map(row=>row.split('~'));
export const incidentReference={id:'incident-language',title:'Инцидент: влияние, хронология, неопределённость и передача',intro:[
 'Языковые модели C1, не универсальный регламент incident response и не разрешение работать с production. Все досье и примеры курса оригинальные и вымышленные; не вводи реальные токены, логи с личными данными или контакты.',
 'Первичные ориентиры проверены 2026-10-02: Google SRE описывает разделение координации, операций и коммуникации, рабочую запись и явную передачу роли. Команды адаптируют процессы к своей системе. Курс использует эти различия как контекст для английского, а не копирует процедуры или упражнения источников.',
 'Разделяй факт, гипотезу, предложение, принятое действие и выполненное действие. Error attempts не unique users; успешный новый probe не результат всех старых jobs. Monitoring, mitigation, full recovery и established cause не взаимозаменяемы. Дальнейший postmortem и security vocabulary — отдельные части T05.'
],headers:['Задача','Модель','Механизм','Граница'],rows:incidentPatterns,sources:incidentSources,practice:[
 ['Исправь We investigating errors.','We are investigating errors: Continuous требует be.'],
 ['Выбери since/for: ___ 09:20, ___ ten minutes.','Since 09:20; for ten minutes.'],
 ['Исправь The cause has not confirmed yet.','The cause has not been confirmed yet.'],
 ['Поставь change в сообщение с at 09:18 yesterday.','We changed the route at 09:18 yesterday.'],
 ['Сформулируй may have + contribute для прошлого.','The change may have contributed to the errors; не confirmed cause.'],
 ['Forty errors including retries — forty people?','Нет. Нужны данные о unique users.'],
 ['All twelve selected downloads opened — none affected globally?','Нет. All относится к выбранной группе.'],
 ['We will update at 10:00 означает restored by 10:00?','Нет. Обязательство о коммуникации, не восстановлении.'],
 ['Исправь even if nothing will change.','Even if nothing changes в обычном будущем условии.'],
 ['Сравни I understand и I accept coordination.','Первое подтверждает понимание; второе явно принимает роль.'],
 ['Нейтрально исправь Fifteen forty на 15:04.','I said fifteen forty; I meant fifteen oh four UTC.'],
 ['Unobserved final outcome нужно назвать failed?','Нет. Сохрани unknown, запроси свидетельство.'],
 ['Сформулируй предложение retry без статуса done.','A retry has been proposed but has not been run.'],
 ['Передай просьбу о read-back роли и времени.','Please read back who is coordinating and when the next update is due.'],
 ['Сократи сообщение для public без потери unknown cause.','The cause is still being investigated; next update at an agreed time.'],
 ['100% заполнения этой подтемы подтверждает весь T05?','Нет. Качество требует проверки и переноса, дальнейшие линии T05 пока не наполнены.']
]};

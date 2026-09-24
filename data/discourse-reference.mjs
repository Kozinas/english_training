export const discourseSources=[
 ['Cambridge: substitution','https://dictionary.cambridge.org/grammar/british-grammar/substitution'],
 ['Cambridge: ellipsis','https://dictionary.cambridge.org/grammar/british-grammar/ellipsis'],
 ['Cambridge: so and neither','https://dictionary.cambridge.org/grammar/british-grammar/so-am-i-so-do-i-neither-do-i'],
 ['Cambridge: discourse markers','https://dictionary.cambridge.org/grammar/british-grammar/discourse-markers-so-right-okay'],
 ['Cambridge: do','https://dictionary.cambridge.org/pl/grammar/british-grammar/do'],
 ['British Council: discussing advantages and disadvantages','https://learnenglish.britishcouncil.org/free-resources/speaking/b2/discussing-advantages-disadvantages']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
const headers=['Модель','Пример','Что восстанавливаем','Устройство','Ограничение'];
export const ellipsisPatterns=rows(`one~This chair is broken; get another one.~Другой стул.~One заменяет исчисляемое имя.~Не тот же предмет, что it.
ones~I prefer the lighter ones.~Более лёгкие предметы известного класса.~Plural ones.~Класс должен быть ясен.
it~I found the key and kept it.~Тот же конкретный ключ.~Pronoun it.~Не другой экземпляр класса.
uncountable~We need information. Do you have any?~Некоторую информацию.~Any без повторённого имени.~Не an information one.
which one~Which one did you choose?~Один из известных вариантов.~One после which.~Неясный набор нужно назвать.
one of~One of the chairs is broken.~Один член группы.~Of + plural; singular is.~Не one of the chair.
think so~Will it work? — I think so.~I think it will work.~So заменяет содержание.~Мнение не подтверждённый результат.
think negative~Will it work? — I don’t think so.~I don’t think it will work.~Отрицание в think.~I think not тоже возможно, более формально.
hope so~Will she come? — I hope so.~I hope she will come.~Желание события.~Не прогноз с гарантией.
hope not~Will it rain? — I hope not.~I hope it will not rain.~Not заменяет отрицательную clause.~Не отсутствие надежды вообще.
afraid so~Is it closed? — I’m afraid so.~С сожалением: да, закрыто.~Afraid so как ответ.~Не обязательно буквальный страх.
afraid not~Is it available? — I’m afraid not.~С сожалением: нет.~Отрицательная замена.~Не доказательство причины отказа.
say so~Jo says so.~Jo сообщает названное содержание.~Say so.~Источник не независимая проверка.
do so~I checked the list; Jo did so too.~Jo тоже проверил список.~Do so заменяет действие.~Для состояния часто лучше auxiliary ellipsis.
do auxiliary~I know the route; Jo does too.~Jo knows the route.~Does сохраняет present/singular.~Не запрет состояний после auxiliary do.
can ellipsis~I can help, but Jo cannot.~Jo cannot help.~Модальный остаётся.~Не путать cannot с did not.
perfect ellipsis~I have replied; Jo hasn’t.~Jo has not replied.~Have сохраняет Perfect.~Не Jo doesn’t при данном смысле.
be ellipsis~I am ready; they aren’t.~They are not ready.~Be согласуется с новым субъектом.~Не повторять am с they.
infinitive~I can call if you want me to.~Want me to call.~To остаётся вместо повторённой группы.~Не пропадает объект me.
would like to~I haven’t visited, but I’d like to.~Would like to visit.~To-infinitive ellipsis.~Желание не факт посещения.
coordinated subject~Jo opened the box and checked it.~Jo checked it.~Общее подлежащее не повторяется.~При разных участниках нельзя удалить второго.
shared object~I ordered, and Jo paid for, the tickets.~Оба действия относятся к tickets.~Общий объект; for сохраняется.~Иногда два предложения яснее.
short answer~Who called? — Mira.~Mira called.~Контекстный ответ-фрагмент.~Не универсальная модель официального абзаца.
informal opener~Seen the new guide?~Have you seen the new guide?~Разговорный пропуск subject/auxiliary.~Восстановление требует контекста.
so present~I enjoy walking. — So does Jo.~Jo enjoys walking too.~So + auxiliary + subject.~Does согласуется с Jo.
so past~I arrived early. — So did we.~We arrived early too.~Did сохраняет прошлое.~Не so do we при том же событии.
so modal~I can stay. — So can I.~I can stay too.~Тот же модальный смысл.~Не обещание фактической явки.
neither~I don’t drive. — Neither do I.~I don’t drive either.~Neither + положительная форма auxiliary.~Не neither don’t I в этой модели.
nor~I haven’t replied. — Nor have I.~I haven’t replied either.~Nor + auxiliary + subject.~Нормативная альтернатива neither.
either~I cannot attend either.~Я тоже не могу.~Отрицательная clause + either.~Не положительное too в изучаемом ответе.
affirming so~You have my pen. — So I do!~Подтверждение о том же I.~So + subject + auxiliary.~Не «я тоже» с новым субъектом.
clarity~By “one”, do you mean the hall or the room?~Уточняем референт.~Повтор имени при неоднозначности.~Краткость не важнее смысла.`);
export const presentationPatterns=rows(`purpose~I’ll compare two venues.~Цель выступления.~Действие + предмет.~Не автоматическое решение за слушателей.
roadmap~First, access; then, cost.~План переходов.~Ясные смысловые части.~Не обязательное число пунктов для любого доклада.
transition~Let’s turn to transport.~Смена аспекта.~Turn to + noun.~Не потерять связь с целью.
return~Coming back to access, the route is unclear.~Возврат к вопросу.~Название прежней темы.~Не pretending it was answered.
addition~In addition, storage is limited.~Ещё один довод.~Добавление.~Не причина предыдущего факта.
example~For instance, chairs need storage.~Иллюстрация.~Связь частного с общим.~Не статистическое доказательство частоты.
rephrase~In other words, no booking is confirmed.~Тот же смысл иначе.~Перефразировка.~Нельзя усиливать исходное may до will.
focus~In particular, check the entrance.~Выделение части.~Конкретизация.~Не исключает остальные требования.
consequence~The door is locked; therefore, use the side entrance.~Следствие/вывод.~Пунктуация проверяется отдельно.~Therefore само не доказывает причинность.
concession~It costs more; nevertheless, it may suit us.~Признанный недостаток и другая сторона.~Переход между частями.~Не утверждает, что стоимость мала.
summary~Overall, another visit is needed.~Сводный итог.~Опора на разобранное.~Не вводить новые данные впервые.
digression~By the way, the café closes early.~Побочная тема.~Отступление.~Для главного вывода лучше явный переход.
repair~Let me rephrase that.~Самоисправление.~Остановить и уточнить.~Не нужно перезапускать весь доклад.
data label~Eight of ten tested routes were clear.~Число + база + свойство.~Точная подпись показателя.~Не 80% всех маршрутов города.
unit~The figure is minutes, not hours.~Единица измерения.~Явное противопоставление.~Не менять масштаб молча.
source~The organiser reports twelve bookings.~Назван источник.~Report + object.~Брони не равны посещениям.
uncertainty~The cause has not been confirmed.~Предел знания.~Ясное отрицание.~Не доказательство отсутствия причины.
emphatic do~I do understand the concern.~Подтверждение против сомнения.~Do + base.~Не do understands.
emphatic does~She does support the trial.~Singular present.~Does + base.~Не does supports.
emphatic did~We did check the date.~Прошлое + акцент.~Did + base.~Не did checked.
be emphasis~We ARE ready for review.~Усиление имеющегося be.~Ударение, без добавочного do.~Ready for review не approved.
modal emphasis~We CAN help with the draft.~Усиление can.~Не do can.~Способность/предложение не факт выполнения.
contrast focus~I said TUESDAY, not Thursday.~Исправляем один компонент.~Контрастное ударение.~Оценивать по аудио, не ASR.
only scope~Only Jo checked the date.~Ограничение участника.~Only перед Jo.~Не Jo checked only the date.
only object~Jo checked only the date.~Ограничение объекта.~Only перед the date.~Не доказывает, что никто другой не проверял.
audience check~What does this mean for our decision?~Проверка понимания.~Открытый вопрос.~Кивок не достаточное свидетельство.
question handling~I don’t know; I can check that.~Честная граница ответа.~Отдельно известное и следующий шаг.~Не обещать чужой ответ к сроку.
closing~My recommendation is a visit before booking.~Итог + действие.~Связать с критериями.~Не сообщать предложение как принятое решение.`);
export const discussionPatterns=rows(`enter~May I add a point?~Просьба взять слово.~May + base.~Не гарантия, что перебивание уместно.
hold~Let me finish this point, then I’ll come to you.~Сохранить очередь и передать её.~Конкретное обещание перехода.~Не бесконечно удерживать речь.
invite~Rosa, what is your view?~Приглашение участника.~Открытый вопрос.~Можно отказаться или вернуться позже.
clarify~What do you mean by “ready”?~Уточнение слова.~Mean by + expression.~Не предполагать один статус.
paraphrase~If I understand correctly, cost is your concern.~Проверка понимания позиции.~Условная рамка + пересказ.~Дождись подтверждения/исправления.
repair hearing~Did you say thirteen or thirty?~Уточнение услышанного.~Явная альтернатива.~Не угадывать число.
repair reference~Which version do you mean?~Уточнение ссылки.~Which + noun.~Не выбирать ближайшее имя автоматически.
partial agreement~I agree about timing, but not the venue.~Границы согласия.~Названо согласованное и спорное.~Не общее yes для всего плана.
challenge~What supports that estimate?~Запрос основания.~Вопрос о данных.~Не нападение на человека.
alternative~Could we visit before booking?~Предложение шага.~Could + base.~Ещё не согласие группы.
condition~I can help if the date changes.~Условное предложение.~If + present.~Не безусловное назначение ответственного.
compromise~Keep one daytime session and trial an evening one.~Совмещение приоритетов.~Конкретные действия.~Нужно проверить выполнимость.
decision check~Are we agreeing to a visit, not a booking?~Проверка объёма решения.~Явное противопоставление.~Не скрытое расширение обязательства.
accept~Yes, I can arrange the visit.~Явно принятое действие.~Исполнитель говорит от себя.~Не означает, что визит уже состоялся.
decline~I cannot take that on this week.~Отказ от задачи.~Ясная граница.~Не отсутствие интереса навсегда.
owner~Mira will request the price list.~Согласованный исполнитель.~Who + action + object.~Не назначать отсутствующего без согласия.
deadline~Mira will send an update by Friday.~Срок конкретного действия.~By + срок; зона при необходимости.~Не обещание финальной цены.
unresolved~The booking date remains open.~Открытый вопрос.~Явная метка статуса.~Не случайно забытый пункт.
park~Let’s return to that after the access check.~Отложенный вопрос.~Названо условие возврата.~Не молчаливое окончательное отклонение.
minutes proposal~Leo proposed a later start.~Предложение.~Proposed, не agreed.~Читатель не должен угадывать статус.
minutes decision~The group agreed to compare two routes.~Решение о проверке.~Agreed + to-infinitive.~Не выполнение сравнения.
minutes dissent~Jo supported the visit but opposed booking now.~Частичное согласие/возражение.~Обе части сохраняются.~Не писать unanimous approval.
silence~No reply was recorded from Dana.~Отсутствие ответа.~Наблюдение, не мотив.~Не согласие и не отказ.
absence~Dana was not present.~Граница состава встречи.~Не приписывать реплики отсутствующему.~Может потребоваться отдельное подтверждение.
follow-through~The request was sent; no response has arrived.~Действие и ответ отдельны.~Раздельные статусы.~Не completed booking.
summary check~Does this reflect what we agreed?~Проверка протокола.~Приглашение к исправлению.~Не считать отсутствие возражения доказательством понимания.
next meeting~We will review the options after the visit.~Контрольная точка.~Триггер/дата следующего решения.~Не фиксированный учебный срок.
shared outcome~We agree on the goal, not yet on the method.~Общее и спорное.~Разные уровни согласия.~Компромисс не обязан удовлетворять всё сразу.`);
export const ellipsisReference={id:'ellipsis-substitution',title:'Замены и пропуски: one, so, do, to и краткие отклики',intro:['32 модели устранения повторов с сохранением референта, времени, отрицания и участника. Не полный справочник всех видов ellipsis; сложные ограничения и литературные случаи требуют отдельного контекста.'],headers,rows:ellipsisPatterns,sources:discourseSources,practice:rows(`I need a chair. Have you got ___? (one/it)~One: любой подходящий экземпляр.
I found a key and kept ___. (it/one)~It: тот же ключ.
I like the blue ___. (ones/one; несколько)~Ones: plural.
Information: do you have one?~Do you have any? В изучаемом значении information неисчисляемо.
Will it rain? Надеюсь, нет.~I hope not.
Will it work? Думаю, да.~I think so; мнение не проверенный факт.
I know the route. Jo does too — что делает does?~Заменяет knows the route; состояние допустимо с auxiliary do.
I checked it. Jo did so too — восстанови.~Jo checked it too.
I can call if you want me to — пропущено?~Call после to.
I haven’t replied. Neither ___ I.~Have: Perfect сохраняется.
I was ready. So ___ Jo.~Was: время и согласование нового субъекта.
I like it. So ___ she.~Does: present singular.
Neither don’t I — исправь.~Neither do I; neither уже задаёт отрицательный смысл.
So do I / So I do — одинаково?~Нет: я тоже / подтверждение того же факта обо мне.
Seen the map? — обязательно ошибка?~Нет, разговорный пропуск при понятном контексте; полная форма Have you seen the map?
Неясно, какой one: угадывать?~Нет, уточнить класс/предмет.`)};
export const presentationReference={id:'presentation-signposts',title:'Презентация: переходы, данные и смысловой акцент',intro:['28 моделей организации выступления. Смысл и задача определяют длину; нет обязательного числа слайдов или минут для освоения. Интонация требует аудио, пунктуация — содержательной проверки.'],headers,rows:presentationPatterns,sources:discourseSources,practice:rows(`First…then… — функция?~Порядок частей, не доказательство причинной связи.
In other words может усилить may до will?~Нет, перефразировка должна сохранять степень уверенности.
Moreover/therefore — разница?~Добавление / вывод или следствие.
By the way — главный итог?~Обычно отступление; для итога нужна ясная сводка.
I do understands — исправь.~I do understand.
She does supports — исправь.~She does support.
We did checked — исправь.~We did check.
We do are ready — исправь.~We ARE ready; ударение на be, без do.
I do can help — исправь.~I CAN help; без добавочного do.
Only Mira checked the date — кто ограничен?~Участник Mira.
Mira checked only the date — что ограничено?~Объект проверки date.
Eight out of ten tested routes = все дороги?~Нет, только проверенная группа.
Двенадцать bookings = двенадцать attendees?~Нет, бронь не явка.
Unknown cause = no cause?~Нет, неизвестность не отсутствие причины.
Как отвечать на неизвестное?~Назвать предел знания и возможный следующий шаг без выдуманного ответа.
Ударение проверять по ASR?~Нет, нужно прослушивание и понимание партнёром.`)};
export const discussionReference={id:'discussion-decisions',title:'Дискуссия и протокол: очередь, уточнение и обязательство',intro:['28 моделей участия и фиксации результатов. Это учебные вымышленные ситуации, не реальные сообщения третьим лицам. Протокол фиксирует то, что было согласовано, а не удобную догадку автора.'],headers,rows:discussionPatterns,sources:discourseSources,practice:rows(`Как вступить в разговор?~May I add a point? — и дождаться подходящего момента.
Как сохранить очередь?~Let me finish this point, then I’ll come to you.
Ready неясно: вопрос?~Do you mean ready for review or approved for use?
Thirteen/thirty не расслышаны: вопрос?~Did you say thirteen or thirty?
Пересказ позиции = согласие?~Нет, сначала проверить понимание, затем оценить довод.
Согласие с целью = согласие с методом?~Нет, назвать границы.
Could we visit? = agreed visit?~Нет, предложение требует ответа.
I can help if… можно записать без if?~Нет, сохраните условие.
Молчание Dana = yes?~Нет, ответа нет; мотив неизвестен.
Dana отсутствует: назначить ей задачу?~Записать запрос подтверждения, не принятое обязательство.
Update by Friday = completed project?~Нет, обновление статуса не готовый результат.
Proposed и agreed — одинаково?~Нет, предложение и принятое решение.
Agreed to compare = compared?~Нет, выполнение требует отдельного факта.
Unresolved можно удалить из итогов?~Нет, важный открытый вопрос нужно сохранить.
Как проверить итог?~Does this reflect what we agreed? Попросить содержательный ответ.
После обсуждения что записать?~Решение, основание/ограничение, принятый исполнитель и действие, срок при наличии, открытые вопросы.`)};

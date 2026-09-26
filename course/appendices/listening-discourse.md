# Длинная речь: позиция, источники, переходы и восстановление смысла

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

28 авторских ориентиров для C203-discourse. Это карта функций и проверок, не исчерпывающий словарь discourse markers и не алгоритм угадывания намерений.

Сначала восстанови задачу, голоса и ход аргумента, затем проверь решающие числа, отрицания, условия и поздние исправления. Количество прослушиваний определяется пробелами; оно не уменьшает объём материала.

TTS авторского сценария не моделирует настоящую дискуссию нескольких голосов. Во внешней серии используется интервью TED: нужна сеть, открытие по действию ученика и честная отметка audio/transcript. Его высказывания рассматриваются как позиции участников, не как проверенные научные факты или сертификация C2.

| Функция | Авторский пример | Что сохранить | Не выводить автоматически |
| --- | --- | --- | --- |
| gist | The speaker argues for a trial, not an immediate permanent change. | Тезис и граница предложения. | Тема разговора сама не является тезисом. |
| speaker/source | Maya says that Owen expects lower costs. | Maya передаёт прогноз Owen. | Не приписывать прогноз автоматически Maya или всей группе. |
| claim/evidence | The queue was shorter on Tuesday. | Наблюдение с датой и рамкой. | Один день не доказывает обычный результат. |
| warrant | Shorter queues may make access easier. | Связь наблюдения с выводом. | Возможность не установленная причинная связь. |
| example | For example, one visitor called instead. | Иллюстрация случая. | Не показатель частоты для всех посетителей. |
| counterexample | One visitor could not use the form. | Проверка универсального every visitor could use it. | Один случай не доказывает, что никто не мог. |
| concession | The trial is promising; nevertheless, costs remain unclear. | Положительная оценка сохраняется вместе с ограничением. | Nevertheless не всегда полный отказ от первой части. |
| qualification | This applies to weekday sessions only. | Ограничение области утверждения. | Не переносить вывод на выходные. |
| self-repair | There were sixteen, sorry, sixty requests. | Исправленное число в текущем пересказе. | Первую форму сохранять как историю, не суммировать числа. |
| clarification | By access I mean being able to submit a request. | Локальное определение термина. | Отправка запроса не получение услуги. |
| reformulation | In other words, we have a proposal, not a booking. | Новая формулировка связи. | Пересказ тоже проверяется на точность. |
| return | Anyway, to return to the staffing question… | Возвращение после отступления. | Anyway не всегда смена на совсем новую тему. |
| digression | By the way, the entrance has moved. | Побочная информация. | Отступление может быть практически важным. |
| contrast | By contrast, the second group had help. | Различие групп. | Сравнение требует одинаковых показателей или оговорки. |
| correction marker | Actually, the review is on Friday. | Исправление ранее названного факта в контексте. | Actually также бывает усилением или вводом неожиданного; не всегда враждебно. |
| so | So, what should we check next? | Организация следующего шага. | Не всякое so доказывает причинный вывод. |
| still | The cost is high. Still, the trial may be worthwhile. | Уступительный переход. | Still также имеет временные значения. |
| after all | We should ask; after all, she runs the service. | Напоминание об основании. | В других контекстах after all может описывать изменившийся исход. |
| not X but Y | The issue is not price but availability. | Коррекция фокуса проблемы. | Не утверждает автоматически, что цена хорошая или неважна вообще. |
| rather than | Check the booking rather than assume it. | Предпочтение действия. | Не сообщает, что проверка уже выполнена. |
| conditional support | I would support it if an accessible option remained. | Условие поддержки. | Не записывать как безусловное согласие. |
| question versus position | Would a shorter form help? | Вопрос об альтернативе. | Не обязательное предложение или принятая позиция спрашивающего. |
| reported objection | Some members argue that the deadline is unrealistic. | Чужое возражение. | Не автоматически мнение текущего говорящего. |
| late revision | I now favour a limited trial instead. | Изменившаяся позиция. | Не переписывать начальную позицию как будто она всегда была такой. |
| reference | That would require another volunteer. | Нужно восстановить конкретное действие из контекста. | Ближайшее существительное не всегда референт that. |
| number/unit | Sixty requests came from forty people. | Число событий и число людей. | Не делить или сравнивать без верного знаменателя. |
| missing span | I heard the proposal, but missed its condition. | Пометка пробела и адресное уточнение. | Правдоподобная догадка не заменяет услышанную оговорку. |
| source log | Audio first; transcript checked later. | Режим, источник, выбранный интервал и исправления. | Чтение транскрипта не подтверждает самостоятельное аудирование. |

## Практика

1. Отличи тему library opening hours от тезиса.
2. Ada reports that Ben expects savings. Чей прогноз?
3. Sixteen, sorry, sixty bookings. Что в текущем итоге?
4. Sixty bookings from forty people: можно назвать sixty participants?
5. However/therefore: какое вводит контраст, какое вывод?
6. Anyway после истории о поездке и перед прежним budget: функция?
7. The form is clear, but access remains difficult. Что потеряет пересказ The form is useless?
8. By access I mean being able to request a place: место получено?
9. В конце слушатель услышал новое условие. Можно игнорировать его ради краткости?
10. Есть один рассказ о задержке. Доказывает постоянную задержку?
11. Ведущий спросил о закрытии сервиса. Значит, он требует закрытия?
12. I missed the words after provided that. Напиши вопрос.
13. Пересказ источника спорит с твоими взглядами. Что делать?
14. Почему So we agreed не доказательство единогласия само по себе?
15. Какие пометки нужны при сверке аудио с транскриптом?
16. Что означает успешный перенос через 7 дней?

<details><summary>Разбор после попытки</summary>

1. Тема — о чём говорят; тезис, например, что стоит проверить вечернее открытие ограниченным пилотом.
2. Ben; Ada его передаёт, но собственное согласие Ada не установлено.
3. Sixty bookings; первоначальное sixteen сохранить только как исправленную форму.
4. Нет; события бронирования и люди различаются.
5. However обычно вводит контраст; therefore заявляет вывод, но сам маркер не доказывает его обоснованность.
6. Возвращение к бюджету в данном контексте; не универсальная функция каждого anyway.
7. Положительную оценку ясности и различие ясности формы/доступности услуги.
8. Нет; возможность подать запрос не подтверждённое место.
9. Нет; условие может менять границы итоговой поддержки или решения.
10. Нет; это пример, не частота всех событий.
11. Нет; вопрос об альтернативе не устанавливает позицию задающего.
12. Could you repeat the condition after provided that? It may change what you are agreeing to.
13. Передать его позицию точно и отдельно обозначить собственную оценку с основанием.
14. Это заявление говорящего; сверить, кто действительно согласился, с чем и на каких условиях.
15. Первый ответ, повторное прослушивание, восстановленный фрагмент, источник исправления и остающееся неизвестным.
16. Новый материал: источник/тезис/ход аргумента/оговорки, точное уточнение и содержательная проверка реального прослушивания, а не повтор прежнего ключа.

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [Cambridge Grammar: discourse markers](https://dictionary.cambridge.org/uk/grammar/british-grammar/discourse-markers-so)
- [Cambridge Grammar: anyway](https://dictionary.cambridge.org/us/grammar/british-grammar/anyway)
- [British Council: listening for specific information](https://www.teachingenglish.org.uk/teaching-resources/teaching-adults/activities/pre-intermediate-a2/listening-specific-information)
- [TED: Chris Duffy / Julian Treasure — транскрипт только после попытки](https://www.ted.com/podcasts/julian-treasure-transcript)
- [TED Audio Collective: How to talk so people will listen — запись эпизода](https://podcasts.apple.com/us/podcast/how-to-talk-so-people-will-listen-w-julian-treasure/id1544098624?i=1000727804912)
- [TED: Julia Dhar — How to have constructive conversations, материал варианта B](https://www.ted.com/talks/julia_dhar_how_to_have_constructive_conversations)

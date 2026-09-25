# Область отрицания, кванторы и фокус

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

24 показательные модели C201. Это не исчерпывающий перечень всех неоднозначностей или диалектов. Значение, контекстный вывод и установленный факт различаются; где без контекста доступны несколько чтений, сначала уточните намерение.

| Модель | Авторский пример | Что сообщается | Чего не следует добавлять |
| --- | --- | --- | --- |
| not all | Not all checks passed. | Не все успешны. | Не обязательно хоть один успешен. |
| none | None of the checks passed. | Ни одной успешной проверки в рамке. | Не тот же смысл, что not all. |
| not both | Not both keys work. | Не оба работают. | Не обязательно ровно один. |
| neither | Neither key works. | Оба не работают в этой рамке. | Не not both с обязательным одним. |
| all…not | All the guests did not sign. | Без контекста риск конкурирующих чтений. | Не выбирать число догадкой. |
| negated speech | I did not say it failed. | Отрицается высказывание. | Не установлен успех. |
| negative content | I said it did not fail. | Передаётся отрицательное содержание. | Не отсутствие высказывания. |
| no promise | I did not promise to stay. | Нет обещания остаться. | Не обещание уйти. |
| negative promise | I promised not to stay. | Обещание не оставаться. | Не простое отсутствие обещания. |
| no evidence | No damage was recorded. | Нет записи в заданной рамке. | Не гарантированное отсутствие повреждения. |
| only subject | Only Eli called. | Ограничение круга звонящих. | Не времени звонка. |
| only mid-position | Eli only checked the list. | Фокус определяется контекстом и акцентом. | Не всегда ближайшее слово и не всегда ошибка. |
| explicit action | Eli checked but did not approve it. | Разделение действий. | Не ограничение объектов. |
| explicit object | The list was the only thing Eli checked. | Ограничение объектов. | Не отсутствие одобрения. |
| even | Even the host was puzzled. | Неожиданное включение. | Причина ожидания неизвестна без контекста. |
| also | The host was also puzzled. | Добавление. | Не обязательная неожиданность. |
| just | I just called. | Недавно или лишь позвонил по контексту. | Не единственное чтение вне ситуации. |
| at least | At least eight replied. | Восемь или больше. | Не строго больше восьми. |
| at most | At most eight replied. | Восемь или меньше. | Не строго меньше восьми. |
| exactly | Exactly eight replied. | Точное количество. | Не приблизительная оценка. |
| shared object | Everyone read the same report. | Общий документ. | A report само не задаёт same или different. |
| attachment | We met the guide with a camera. | Связь camera нужно выяснить. | Не выдумывать владельца или способ встречи. |
| inclusive choice | Choose A, B, or both. | Оба тоже разрешены. | Or не всегда исключающее. |
| inference | Some agreed; in fact, all did. | Some само не исключает all. | Ожидание not all не обязательное следствие. |

## Практика

1. Not all = none?
2. Not all гарантирует some succeeded?
3. Not both допускает neither?
4. Neither из двух допускает одного успешного?
5. At least 5 включает 5?
6. More than 5 включает 5?
7. At most 5 включает 4?
8. Fewer than 5 включает 5?
9. Only Jo called: какой фокус?
10. Jo only called: единственное чтение?
11. Even означает обязательно раздражение?
12. I did not promise to stay = I promised not to stay?
13. No record доказывает no event?
14. Everyone read a report: обязательно same?
15. A or B обязательно исключает оба?
16. Контрастное ударение видно по транскрипту?

<details><summary>Разбор после попытки</summary>

1. Нет.
2. Нет, логически не гарантирует.
3. Да.
4. Нет в данном значении.
5. Да.
6. Нет.
7. Да.
8. Нет.
9. Человек.
10. Нет, контекст и ударение задают альтернативы.
11. Нет, неожиданное включение.
12. Нет.
13. Нет автоматически.
14. Нет.
15. Нет, правило лучше уточнить явно.
16. Нет, нужно аудио.

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [Cambridge: only and focus](https://dictionary.cambridge.org/grammar/british-grammar/only)
- [Cambridge: negation](https://dictionary.cambridge.org/grammar/british-grammar/negation_2)
- [Cambridge: may](https://dictionary.cambridge.org/grammar/british-grammar/may)
- [British Council: modals with have](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/modals-have)
- [BBC Learning English: needn’t and not need to](https://downloads.bbc.co.uk/learningenglish/eiam/unit-2/200515_needn%27t_vs_not_need_to.pdf)
- [Linguistics Beyond and Within: When must not is not forbidden](https://czasopisma.kul.pl/index.php/LingBaW/article/download/17024/14820/76018)
- [British Council: present perfect simple and continuous](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect-simple-continuous)
- [Cambridge: past continuous or past simple](https://dictionary.cambridge.org/grammar/british-grammar/past-continuous-or-past-simple)
- [Cambridge: modality and tense](https://dictionary.cambridge.org/us/grammar/british-grammar/tense)
- [Cambridge: Advanced Grammar in Use, official excerpt by Martin Hewings](https://www.cambridge.org/bv/files/7213/7207/9528/advanced_grammar_withouttanswers_9781107613782_excerpt.pdf)

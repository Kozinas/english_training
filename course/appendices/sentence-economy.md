# Ёмкость предложения без потери смысла

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

26 приёмов и ограничений. Concision не минимальное число слов; смысл, исключения, модальность, ответственность и задача адресата важнее механического сокращения. Это не полный справочник синтаксиса.

| Выбор / механизм | Авторский пример | Что проверять | Не делать абсолютным |
| --- | --- | --- | --- |
| purpose | We met to review the plan. | To вместо in order to при том же смысле. | Не удалять само отношение цели. |
| reason | We waited because the gate was closed. | Because + clause. | Because of требует именную группу. |
| direct verb | We assessed the plan. | Возможна замена make an assessment. | Номинализации иногда полезны. |
| event noun | The assessment took two days. | Название обсуждаемого события. | Не запретить все имена действий. |
| time filler | Please reply now. | Now вместо at this point in time. | Сохранять нужную временную рамку. |
| known agent | Mia sent the notice. | Явная ответственность. | Не назначать неизвестного исполнителя. |
| useful passive | The notice was sent yesterday. | Тема notice и время. | Не автоматическая стилистическая ошибка. |
| unknown agent | The file was deleted; the agent is unknown. | Честная неизвестность. | Не выдумывать manager ради active. |
| noun stack | We notify visitors when requests are approved. | Явные связи частей. | Не раскрыть в неверный процесс. |
| familiar term | Use your user account. | Знания адресата. | Не лимит «два существительных» для всех. |
| parallel verbs | Check, record and submit. | Одинаковый уровень действий. | Не смешивать причину и шаг. |
| parallel clauses | How to register and how to cancel. | Одинаковая функция. | Не один обязательный вариант длины. |
| reference | The form records requests. The form does not confirm bookings. | Один объект остаётся узнаваемым. | Не обязательная замена повторов синонимами. |
| condition | If you have a code, enter it. | Ограничение действия. | Не безусловная команда. |
| alternative | If not, ask for help. | Другой путь. | Не дополнительное действие для всех. |
| group | Some visitors may need help. | Some ограничивает группу. | Не удалить как filler. |
| modality | Some visitors may need help. | May сохраняет неизвестность. | Не заменить established need. |
| time scope | During the trial, use the side desk. | Временный охват. | Не постоянное правило без основания. |
| access scope | Only confirmed members may enter. | Ограничение допуска. | Не расширять до all members. |
| repeat again | Please repeat it again after the first repetition. | Ещё один повтор. | Не всегда redundancy. |
| final/interim | This is the final result, not an interim one. | Нужное противопоставление. | Не удалить final автоматически. |
| rhythm | Quickly, safely and effortlessly. | Основание каждого обещания. | Ритм не доказательство качества. |
| specific location | Collect at the side desk. | Место, нужное для действия. | Elsewhere короче, но менее полезно. |
| status | Review complete; approval pending. | Разные стадии. | Не completed всё сразу. |
| punctuation | The form is open; confirmation follows review. | Связь самостоятельных предложений. | Normalizer не проверяет punctuation. |
| read-aloud | Read it aloud, then check facts. | Ритм и смысл проверяются отдельно. | Текстовый ASR не устная оценка. |

## Практика

1. Because of + clause?
2. Make an assessment: возможный глагол?
3. The assessment took an hour: обязательно плохо?
4. Passive всегда удалить?
5. Agent unknown: можно придумать автора?
6. Some may удалить для краткости?
7. During the trial удалить без основания?
8. Only approved users сократить до users?
9. Repeat again всегда redundant?
10. Final result при interim contrast: final полезно?
11. User account обязательно расширить?
12. Same form всегда заменять синонимами?
13. Missing code exception не нужна большинству: удалить?
14. Ритм доказывает safely?
15. Punctuation проверяется игнорирующим знаки normalizer?
16. Лучший тест ясности инструкции?

<details><summary>Разбор после попытки</summary>

1. В базовой модели именная группа; because + clause.
2. Assess.
3. Нет.
4. Нет, проверить фокус и исполнителя.
5. Нет.
6. Нет, меняются группа и уверенность.
7. Нет, меняется временной охват.
8. Нет, расширяется группа.
9. Нет, зависит от предыдущих повторов.
10. Да.
11. Нет, знакомый термин может быть ясным.
12. Нет, можно спутать референты.
13. Нет, она нужна соответствующим читателям.
14. Нет.
15. Нет.
16. Пересказ действия, условия и альтернативы читателем.

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [Purdue OWL: concision](https://owl.purdue.edu/owl/general_writing/academic_writing/conciseness/index.html)
- [Purdue OWL: sentence clarity](https://owl.purdue.edu/owl/general_writing/mechanics/sentence_clarity.html)
- [Purdue OWL: plain style](https://owl.purdue.edu/owl/general_writing/writing_style/plain_style%20.html)
- [UNC Writing Center: revising drafts](https://writingcenter.unc.edu/tips-and-tools/revising-drafts/)
- [Harvard Writing Center: transitions](https://writingcenter.fas.harvard.edu/transitions)
- [Oxford Learner’s Dictionaries: organise/organize](https://www.oxfordlearnersdictionaries.com/definition/english/organize)
- [Language Portal of Canada: make/take a decision](https://our-languages.canada.ca/en/writing-tips-plus/decision-make-a-decision-take-a-decision)
- [Cambridge: collocation](https://dictionary.cambridge.org/us/dictionary/english/collocation)
- [Cambridge: mixed metaphor](https://dictionary.cambridge.org/dictionary/english/mixed-metaphor)
- [Cambridge Dictionary blog: nautical idioms](https://dictionaryblog.cambridge.org/2025/12/17/all-hands-on-deck-nautical-idioms-part-2/)

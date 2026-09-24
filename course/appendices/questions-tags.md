# Косвенные вопросы, просьбы и question tags

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

36 моделей вложенных вопросов, пересказа просьб и кратких вопросов-подтверждений. Это не все разновидности вопросов, речевых актов или интонации.

Внутри косвенного вопроса обычный порядок subject + verb; внешняя часть может быть вопросом. В tags сначала определите вспомогательный глагол, отрицательный/положительный смысл и местоимение. Здесь основная модель с противоположной полярностью; контекстные варианты не объявляются ошибками.

| Модель | Пример | Устройство | Смысл | Ограничение |
| --- | --- | --- | --- | --- |
| embedded wh | Could you tell me where the exit is? | Wh + subject + verb внутри. | Внешняя часть остаётся вопросом. | Не where is the exit внутри. |
| embedded do | Do you know when the shop opens? | Does из внутреннего вопроса убирается, opens получает -s. | Порядок утверждения внутри. | Do you know само остаётся вопросом. |
| embedded negative | Do you know why she didn’t reply? | Отрицательный didn’t сохраняется. | Убирается инверсия, не любое do. | Не why she not replied. |
| reported yes/no | He asked if/whether I was ready. | ask + if/whether + subject + verb | Пересказ вопроса, не условие. | Сам вопрос не доказывает готовность. |
| reported wh | She asked where I lived. | ask + wh + subject + verb | Вопрос о месте. | Не where did I live. |
| subject who | He asked who called. | Who — подлежащее. | Отдельное подлежащее не вставляется. | Не who did called. |
| object who | He asked who I called. | I — подлежащее, who — объект. | Сохраняется исполнитель звонка. | Не He asked who called, если спрашивали об адресате. |
| whether to | I don’t know whether to wait. | whether + to-infinitive | Выбор действия. | Не if to wait. |
| if not conditional | I wonder if she will join. | If = whether. | Will допустим о будущем. | Не правило future conditional. |
| polite could | Could you tell me what this means? | Could относится к просьбе. | Means остаётся настоящим. | Could не требует автоматического backshift внутри. |
| punctuation | She asked where it was. / Could you tell me where it is? | Знак по целому предложению. | Пересказ-утверждение / текущий вопрос. | Не удалять ? из вежливого вопроса. |
| request | She asked me to wait. | ask + recipient + to | Просьба. | Не доказательство, что я подождал. |
| negative request | She asked me not to interrupt. | ask + recipient + not to | Просьба не делать. | Не ask me don’t interrupt. |
| instruction | He told us to use the side door. | tell + recipient + to | Указание. | Не подтверждает выполнение. |
| offer | She offered to carry the box. | offer + to | Предложение своей помощи. | Не She offered me to carry в этом смысле. |
| suggestion | He suggested checking the date. | suggest + -ing / that-clause | Предложение варианта. | Не He suggested me to check. |
| be tag | The room is free, isn’t it? | be + pronoun; противоположная полярность. | Базовая модель проверки ожидания. | Вопрос не подтверждает факт. |
| present tag | Mina works here, doesn’t she? | do/does по главному глаголу. | Present Simple без вспомогательного. | Не is she для works. |
| past tag | They left early, didn’t they? | did для Past Simple active. | Глагол left не переносится в tag. | Не left they. |
| continuous tag | He is waiting, isn’t he? | Первый вспомогательный is. | Процесс. | Не doesn’t he. |
| perfect tag | She has arrived, hasn’t she? | Первый вспомогательный has. | Perfect. | Не did she. |
| modal tag | You can help, can’t you? | Тот же modal. | Ожидаемая возможность. | Не согласие выполнить просьбу. |
| negative tag base | They didn’t call, did they? | Отрицательная основа → положительный tag. | Проверка отрицательного предположения. | Ответ опирается на факт. |
| I am | I’m next, aren’t I? | Обычная разговорная модель aren’t I. | Первое лицо am в основе. | Am I not? возможно формально. |
| there | There is a spare key, isn’t there? | There сохраняется в tag. | Проверка наличия. | Не isn’t it в этой модели. |
| this/that | This is yours, isn’t it? | This/that → it. | Предмет в единственном числе. | These/those → they. |
| everyone | Everyone knows, don’t they? | Everyone в основе singular; tag they. | Singular they для неопределённого человека. | Не doesn’t they. |
| nobody | Nobody called, did they? | Nobody даёт отрицательный смысл. | Положительный tag + they. | Не didn’t they в базовой модели. |
| nothing | Nothing changed, did it? | Nothing → it; отрицательная основа. | Проверка отсутствия изменения. | Не did they для nothing. |
| never/hardly | She never complains, does she? | Отрицательное наречие → положительный tag. | Not не обязательно явно написано. | Hardly не равно hard. |
| let’s | Let’s check, shall we? | Let’s-предложение → shall we. | Совместное действие. | Не will you в этой базовой модели. |
| imperative | Please wait, will you? | Will you — один из вариантов после просьбы. | Can/could/won’t возможны по тону. | Не считать единственной формой любого приказа. |
| negative answer | You don’t drive, do you? — Yes, I do. / No, I don’t. | Yes + положительный факт; no + отрицательный. | Да, вожу / нет, не вожу. | Не голое русское согласие с отрицанием. |
| intonation | The room is free, isn’t it? | Подъём — больше запроса, падение — больше ожидания согласия. | Тенденция, а не детектор намерения. | Произношение требует реального аудио. |
| same polarity | Oh, you work here, do you? | Положительная основа и положительный tag. | Реакция/интерес/удивление по контексту. | Не ошибка, но не основная тренировочная модель. |
| lexical have | You have a key, don’t you? | Do с основным have — нейтральная модель. | Haven’t you возможно в некоторых UK контекстах. | Не путать с have got и Perfect. |

## Практика

1. Could you tell me where is it?
2. Do you know when does it open?
3. He asked ___ I was ready.
4. I don’t know ___ to wait.
5. She asked where I lived: нужен ?
6. She asked me ___ interrupt. (не перебивать)
7. He suggested me to wait: исправь.
8. The bus is late, ___?
9. They work here, ___?
10. She has left, ___?
11. I’m early, ___?
12. Nobody called, ___?
13. Nothing happened, ___?
14. Let’s ask, ___?
15. You don’t drive, do you? На самом деле вожу.
16. Tag в записи доказывает согласие слушателя?

<details><summary>Разбор после попытки</summary>

1. Could you tell me where it is?
2. Do you know when it opens?
3. if / whether
4. whether
5. Нет, всё предложение — утверждение о вопросе.
6. not to
7. He suggested waiting. / He suggested that I should wait.
8. isn’t it
9. don’t they
10. hasn’t she
11. aren’t I
12. did they
13. did it
14. shall we
15. Yes, I do.
16. Нет, нужен фактический ответ и контекст.

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [British Council: reported statements](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-statements)
- [British Council: reported questions and requests](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-questions)
- [British Council: question tags](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/question-tags)
- [Cambridge: indirect speech, reference and modals](https://dictionary.cambridge.org/uk/grammar/british-grammar/reported-speech-indirect-speech)
- [Cambridge: reporting verbs](https://dictionary.cambridge.org/us/grammar/british-grammar/reporting-verbs)
- [Cambridge: imperatives and tags](https://dictionary.cambridge.org/uk/grammar/british-grammar/imperative)
- [Cambridge: tags and their meanings](https://dictionary.cambridge.org/us/grammar/british-grammar/tags)

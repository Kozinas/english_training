# Bug report: язык воспроизведения, наблюдений и границ

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

32 авторские модели и 16 задач уровня B1. Это языковой справочник, не весь процесс QA и не обещание универсального шаблона для каждой команды. Все данные в кейсах вымышлены.

Mozilla советует описывать точные шаги, ожидаемый и фактический результаты, отделяя наблюдение от предположения. GitHub Issues используются не только для ошибок, но и для других запросов. Это первичные ориентиры, а не документация вымышленных продуктов курса; их упражнения и экраны не копируются.

Написанный bug report не доказывает исправление, верность гипотезы или фактическое прослушивание ученика. Открытые тексты оцениваются содержательно; звук и взаимодействие требуют реальных свидетельств.

| Функция | Авторский пример | Механизм | Ограничение |
| --- | --- | --- | --- |
| symptom title | The new draft is missing after reload. | Объект, симптом, условие. | Не выдуманная причина. |
| environment | I tested build 320 in Lumen 6 on DeskOS 8. | Версия, browser, OS раздельно. | Вымышленные продукты, не инструкция установки. |
| precondition | Start with a new training account. | Исходное условие до шагов. | Не реальный сброс личного профиля. |
| imperative | Leave the title empty. | Base, понятный объект. | Не leaves в нейтральном шаге. |
| negative instruction | Do not enter a title. | Do not + base. | Body при этом может быть непустым. |
| sequence | Save the draft, then reload the page. | Порядок воспроизведения. | Then не than. |
| before clause | Before you reload, wait for Saved. | Полное придаточное. | Не выдуманный success после reload. |
| after -ing | After reloading, open the list. | Общий исполнитель, -ing. | Не after to reload. |
| typical symptom | The list does not show the new draft. | Present Simple для поведения. | Не does not shows. |
| single trial | The draft disappeared from the list in the first trial. | Past Simple конкретного наблюдения. | Не доказанное удаление из storage. |
| present result | I have reproduced the symptom. | Have + V3, опыт к сейчас. | Не обязательно resolved. |
| finished time | I reproduced it yesterday. | Past Simple и законченный момент. | Не стандартное have reproduced yesterday. |
| ongoing work | I am checking the environment. | Continuous: проверка идёт. | Не проверка завершена. |
| unknown check | I have not tested the older build. | Проверки нет. | Не old build works. |
| expected basis | The guide says a draft may have an empty title. | Источник ожидаемого. | Не желание новой функции. |
| expected result | The draft should remain visible after reload. | Should: ожидание по правилу. | Не фактическое наблюдение. |
| actual result | Saved appears, but the draft is not listed. | Наблюдение с контрастом. | Не backend root cause. |
| frequency | The symptom occurred in three of four trials. | Число попыток и denominator. | Не три из четырёх пользователей. |
| scope | I observed it on two machines with the same software setup. | Область проверки. | Не два разных браузера. |
| evidence | The screenshot shows an empty list at that point. | Один видимый момент. | Не все шаги и все повторы. |
| hypothesis | The cache warning may be related. | Осторожная гипотеза. | Не подтверждённая причина. |
| sequence not cause | The warning appeared after reload. | Временная связь. | After само не because. |
| control | The previously saved note remained visible. | Конкретный контрольный объект. | Не все старые notes безопасны. |
| workaround | Adding a title avoided the symptom in two trials. | Ограниченное наблюдение. | Не permanent fix. |
| regression limit | The previous version has not been compared yet. | Граница версии. | Недавно замечено не недавно внесено. |
| impact | The user cannot continue that draft through the tested route. | Что затруднено. | Не любая работа невозможна. |
| clarification | Could you confirm which build you tested? | Embedded subject + verb. | Не which build did you test внутри. |
| reproduction question | Does it occur after every reload? | Does + base, вопрос о частоте. | Не do it occurs. |
| negative reproduction | I could not reproduce it in this setup. | Результат данной проверки. | Не доказанное отсутствие дефекта везде. |
| privacy | Use an invented sample without account tokens. | Нужные данные без секретов. | Не публикация полного клиентского журнала. |
| revision | Keep the original report and the complete revision separately. | История и новый полный текст. | Не список правок вместо отчёта. |
| new transfer | Write a report for a different symptom and setup. | Новая задача через отсрочку. | Не переименование старого кейса. |

## Практика

1. Исправь The button do not works.
2. Исправь I have reproduce the issue.
3. Выбери время для конкретного yesterday.
4. Исправь After to reload, check the list.
5. Expected result равен пожеланию новой функции?
6. Что отсутствует в It is broken?
7. 3/4 trials значит 3/4 users?
8. Not tested равно passed?
9. Не удалось воспроизвести — значит ошибки не существует?
10. Warning after reload доказывает причину?
11. Workaround равен fix?
12. Для regression достаточно первого обнаружения сегодня?
13. Может ли screenshot подтвердить все шаги?
14. Исправь Could you tell me what does the message say?
15. Что делать с паролем/токеном в приложении к отчёту?
16. Как подтвердить понятность отчёта и перенос?

<details><summary>Разбор после попытки</summary>

1. The button does not work: does и base.
2. I have reproduced the issue: have + V3.
3. I reproduced the issue yesterday, не обычное Present Perfect с yesterday.
4. After reloading или After you reload.
5. Нет: у ожидаемого поведения нужно основание; enhancement можно оформить отдельно.
6. Объект, конкретное поведение, условия и проверяемые детали.
7. Нет: единицы подсчёта различны.
8. Нет: свидетельства проверки нет.
9. Нет: вывод ограничен данным окружением и попытками.
10. Нет: временная последовательность не причинная связь.
11. Нет: обход может ограниченно избегать симптома, не устраняя причину.
12. Нет: нужен обоснованный контраст с прежним поведением; время обнаружения не время внесения.
13. Сам по себе обычно показывает состояние, не всю последовательность и все попытки.
14. Could you tell me what the message says?
15. Не публиковать; выбрать нужный обезличенный или вымышленный пример.
16. Реальный партнёр уточняет и пересказывает условия; затем новый независимый кейс и отложенная проверка, не переписывание знакомого ответа.

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [Mozilla: bug writing guidelines](https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html)
- [GitHub Docs: creating an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)

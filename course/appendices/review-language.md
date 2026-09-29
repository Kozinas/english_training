# Язык код-ревью: замечания, основания и ответы

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

Авторские модели B2 для обсуждения изменения кода. Наблюдение, правило, возможный риск, степень обязательности и ответ автора разделяются. Это языковая практика, не полный стандарт code review и не подтверждение технической безопасности по нескольким примерам.

Google Engineering Practices рекомендует объяснять основания, обсуждать код уважительно и уточнять намерение комментариев. GitHub различает Comment, Approve и Request changes; фактические условия merge зависят от настройки репозитория. Первичные страницы проверены 2026-09-29; наши примеры и вымышленные досье не скопированы из этих руководств.

Could не превращает просьбу в необязательное пожелание: степень обязательности задают смысл и договорённость. Resolved thread, прошедший check, review approval, merge и release — разные события. Не делай реальных изменений в чужом PR ради учебного упражнения.

| Механизм | Модель | Как построено | Ограничение |
| --- | --- | --- | --- |
| specific observation | The guard checks the original string before trimming. | Назови участок и действие. | Не характеристика автора. |
| observed mismatch | The spaces-only check returned Ready instead of No text. | Observed versus required. | Укажи версию и условия. |
| possible consequence | This could produce a misleading preview. | Could + base, возможный результат. | Не доказанная частота или эксплуатационный ущерб. |
| evidence limit | The attached results cover r4 only. | Граница свидетельства. | Новый diff не новый запуск. |
| polite request | Could you check the trimmed value first? | Could + subject + base. | Не could you to check. |
| shared proposal | Could we keep the two concerns separate? | We предлагает совместный шаг. | Не доказательство согласия. |
| mind pattern | Would you mind explaining the requirement? | Mind + -ing. | Не mind to explain. |
| avoid pattern | Could we avoid changing the input list? | Avoid + -ing. | Вопрос о конкретном поведении. |
| suggestion pattern | I suggest adding an example. | Suggest + -ing. | Не suggest you to add. |
| consider pattern | Consider renaming the variable. | Consider + -ing. | Само слово не устанавливает обязательность. |
| embedded question | Could you explain why the input changes? | Subject + verb после why. | Не why does the input change внутри. |
| whether infinitive | Could you clarify whether to keep both entries? | Whether перед to-infinitive. | Не if to keep. |
| object and recipient | Please explain the reason to me. | Explain something to someone. | Не explain me the reason. |
| discuss pattern | Let us discuss the alternative. | Discuss + object. | Не discuss about в этой модели. |
| agreement | I agree with your concern about the guard. | Agree with a view/person. | Не согласие на все изменения автоматически. |
| action agreement | I agree to check the revised patch. | Agree to + action. | Принятое действие, не уже выполненное. |
| condition | If the input contains only spaces, the function returns No text. | Общее правило, Present Simple. | Не доказательство выполнения текущим кодом. |
| hypothesis | If we moved the guard, this path would be clearer. | If + past, would + base. | Предложенная гипотеза, не выполненная правка. |
| reason | This matters because the requirement preserves the input. | Because + clause. | Основание, не обвинение. |
| concession | Although the preview is sorted, the input order changes. | Although + clause. | Верный выход не подтверждает второе условие. |
| contrast | The name could be clearer; however, that is optional. | However требует пунктуации по структуре. | Проверять вручную, не строковым совпадением. |
| required change | Required before approval: preserve the original list. | Явная обязательность и основание. | Не личное предпочтение под видом правила. |
| optional change | Optional: consider a more descriptive name. | Намерение комментария ясно. | Optional не означает уже принято. |
| specific praise | The early return makes this branch easier to follow. | Похвала с объяснением. | Не approval всего изменения. |
| clarification | Are you asking for a change or for an explanation? | Уточни намерение. | Вопрос не объявляет дефект установленным. |
| reasoned disagreement | I understand the benefit, but the proposal changes the agreed scope. | Признание довода и возражение. | Вежливость не требует ложного согласия. |
| author correction | I said fixed; I meant that I had drafted a possible change. | Исходное и исправленное раздельно. | Не считай draft проверенным результатом. |
| revision reference | The new patch is r5; the log still covers r4. | Две версии указаны явно. | Не переносить старые результаты. |
| review state | I submitted a Comment review, not Approve. | Решение инструмента отдельно от текста. | Не факт merge/release. |
| conversation state | The thread was marked resolved before verification. | Состояние обсуждения. | Не доказательство корректности. |
| next action | I will share the revision and request another review. | Обещание следующего шага. | Не подтверждённое выполнение. |
| follow-up | Could you restate which concern is still open? | Пересказ проверяет понимание. | Yes не заменяет содержание. |

## Практика

1. Исправь Could you to explain this change?
2. Исправь Would you mind to check it?
3. Раскрой форму: Could we avoid ___ the input? (change)
4. Перестрой Why does the list change? после Could you explain.
5. Исправь I suggest you to add a check.
6. Когда нужна whether перед to?
7. Сравни because и because of.
8. Перепиши You are careless с наблюдением.
9. Дай похвалу с конкретным основанием.
10. Сделай предпочтение имени явно необязательным.
11. Новый diff и старый execution log доказывают новые passing tests?
12. Resolved означает verified?
13. Вежливо вырази несогласие с изменением согласованного поведения.
14. Поправь I have fixed it, если есть только local draft.
15. Comment review означает Approve?
16. Сформулируй новый follow-up о границе проверки.

<details><summary>Разбор после попытки</summary>

1. Could you explain this change?
2. Would you mind checking it?
3. changing — avoid + -ing.
4. Could you explain why the list changes?
5. I suggest that you add a check / I suggest adding a check.
6. Could you clarify whether to keep both entries?
7. Because + clause; because of + noun group, например because of the missing check.
8. The current guard accepts spaces-only input, which conflicts with the requirement.
9. The early return makes the empty-input path easier to identify.
10. Optional: consider previewText; I have not identified a rule requiring that name.
11. Нет; нужно сохранить версии и запросить результаты нового запуска.
12. Нет, закрытое обсуждение не доказывает выполнение условия.
13. I see the benefit, but this changes the agreed behaviour. Could we discuss it separately?
14. I have drafted a possible change, but I have not shared or checked it yet.
15. Нет; это разные решения, ни одно не доказывает release.
16. Which revision do those results cover, and what remains untested?

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [Google Engineering Practices: writing review comments](https://google.github.io/eng-practices/review/reviewer/comments.html)
- [Google Engineering Practices: handling reviewer comments](https://google.github.io/eng-practices/review/developer/handling-comments.html)
- [GitHub Docs: pull request reviews](https://docs.github.com/en/pull-requests/reference/pull-request-reviews)

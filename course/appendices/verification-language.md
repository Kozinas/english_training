# Уточнение задачи и язык проверки исправлений

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

Авторский языковой справочник B1: вопросы, критерии, сравнения и отчёты о проверках. Это не полный стандарт QA и не универсальная схема статусов команды. Учебные кейсы вымышлены; реальные системы не изменяются.

GitHub допускает закрытие issue по нескольким причинам, включая отсутствие планов на работу, и поддерживает автоматическое закрытие связанных issues при соответствующем merge. Эти возможности инструмента не являются свидетельством качества, deployment или приёмки нашего учебного кейса. Источники проверены 2026-09-29; формулировки ниже авторские.

Критерий, фактическое наблюдение, сообщение другого человека и неизвестное записываются раздельно. Not run/blocked не приписывают продукту passed/failed. Out of scope не означает рабочее поведение.

| Механизм | Модель | Смысл | Граница |
| --- | --- | --- | --- |
| clarify object | Which result should stay unchanged? | Что именно сохранять. | Не угадывать референцию it. |
| clarify route | What does return mean here? | Назови неоднозначное действие. | Новая tab и возврат из панели различны. |
| interpretation | My understanding is that the list should stay filtered. | Явно своё понимание. | Нужно подтверждение, не автоматическое требование. |
| embedded question | Could you tell me which build you checked? | Внутри subject + verb. | Не which build did you check внутри рамки. |
| subject question | Could you confirm who checked it? | Who — подлежащее. | Не добавлять did механически. |
| whether + infinitive | We need to decide whether to retest. | Выбор действия. | Не if to retest. |
| future question | Do you know when it will be available? | Косвенный вопрос допускает will. | Не временное придаточное. |
| time clause | When it is available, we will check it. | Обычное будущее время в придаточном выражено present. | Без will только ради будущего. |
| precondition | With Open only selected, open a task. | Начальная конфигурация. | Не подготовка после результата. |
| expected result | The list should contain only open tasks. | Ожидаемое по согласованному условию. | Should не фактическое наблюдение. |
| both | Both the list and the indicator must match. | Два объекта проверки. | Не любой один. |
| unless | The filter stays active unless Reset is selected. | В этой модели if not. | Не универсальная замена любого if. |
| scope | New sign-ins are outside this request. | Граница конкретной задачи. | Не passed или impossible. |
| unagreed target | No response-time target has been agreed. | Порог пока отсутствует. | Не выдумывать two seconds. |
| comparable setup | I used the same stated setup for both builds. | Контекст сравнения. | Не все возможные факторы контролированы. |
| limited improvement | The return route met the condition in three trials. | Объект и число. | Не never fails. |
| retest | Please retest the reported route. | Повтор исходного check. | Не вся regression suite. |
| related check | We also checked keyboard Reset. | Соседнее поведение отдельно. | Не скрывать mismatch в среднем числе. |
| passed | The check met the agreed condition. | Проведено с ожидаемым итогом. | Назови условия. |
| failed | The result did not meet the condition. | Проведено с несоответствием. | Не merely not run. |
| blocked | The check is blocked because the device is unavailable. | Названо препятствие. | Не defect устройства или продукта. |
| not run | I have not run that check yet. | Результат неизвестен. | Не failed и не passed. |
| perfect passive | The build has been tested. | Has been + V3. | Не обязательно успешно. |
| continuous passive | The build is being tested. | Is being + V3, процесс. | Не завершённое свидетельство. |
| requirement passive | The build needs to be tested. | Необходимость. | Не уже выполняется. |
| still | The list still shows two tasks. | Продолжение. | С be: is still filtered. |
| no longer | The indicator is no longer active. | Прежнее состояние прекратилось. | Без дополнительного not. |
| not yet | Deployment has not been verified yet. | Пока нет подтверждения. | Не доказано отсутствие deployment. |
| attribution | The developer reports a fix. | Сообщение источника. | Не независимая проверка. |
| merge versus release | The change was merged; deployment is unconfirmed. | Разные сведения. | Не даты из предположения. |
| ownership | Could you confirm who will run the next check? | Запрос о владельце. | Не самовольное назначение. |
| limited agreement | She agreed to review the notes, not implement a fix. | Объём согласия. | Не добавляй чужой срок. |

## Практика

1. Исправь Could you tell me which version did you test?
2. Выбери whether/if: decide ___ to retest.
3. Has been tested означает passed?
4. Чем is being tested отличается от needs to be tested?
5. Переведи «Индикатор больше не активен».
6. Сформулируй ограниченное improvement из 3 trials.
7. Почему нельзя соединить разные build и browser в чистый вывод о build?
8. Переведи «Проверка блокируется отсутствием тестового устройства».
9. Not run значит failed?
10. Closed значит исправлено и развёрнуто?
11. Составь вопрос о live deployment при известном merge.
12. Почему only active indicator недостаточно для filter?
13. Переведи «Другая сессия вне этого запроса; поведение неизвестно».
14. Review notes равно обещанию fix к пятнице?
15. Напиши time clause и indirect when-question.
16. Составь follow-up с успехом и оставшимся mismatch.

<details><summary>Разбор после попытки</summary>

1. Could you tell me which version you tested?
2. whether перед to-infinitive.
3. Нет, известен факт проверки, не её итог.
4. Текущий процесс / необходимость.
5. The indicator is no longer active.
6. The route met the condition in three trials in the stated setup.
7. Изменились два фактора; влияние только build не изолировано.
8. The check is blocked because the test device is unavailable.
9. Нет, проверка не выполнена.
10. Нет, нужны reason и отдельные свидетельства.
11. Could you confirm whether the change has been deployed to the live service?
12. Список может не соответствовать индикатору; нужны оба результата.
13. Another session is outside this request; its behaviour has not been checked.
14. Нет: объём действия и срок надо согласовать отдельно.
15. When it is ready, we will check it. Do you know when it will be ready?
16. The return route met the condition, but Reset still showed a mismatch. Could you confirm who can investigate it?

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [GitHub Docs: closing an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/closing-an-issue)
- [GitHub Docs: linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)

# Язык интерфейса: элементы, действия и статусы

Сгенерировано из data/*.mjs; точка сборки приложений — data/reference.mjs.

30 авторских моделей и 16 задач. Это учебная карта частых слов и конструкций A2, не полный словарь интерфейсов, HTML-стандарт или документация конкретного продукта. UK/US варианты и ясные альтернативные формулировки допустимы.

Материалы Google/Microsoft используются как редакционные ориентиры, Cambridge — как грамматический справочник, MDN — для технического различия состояний контролов. Их примеры и экраны не скопированы. Редакторское предпочтение не является универсальным правилом грамматики.

Pebble Notes, Harbour Tasks, Birch Board и Cedar Desk вымышлены. Кнопки на схеме не выполняют действий. Письменная работа не доказывает устную плавность/произношение, а сохранённый draft сам по себе не означает отправку или backup. Для внешних ссылок нужен интернет.

| Функция | Авторский пример | Механизм | Ограничение |
| --- | --- | --- | --- |
| goal before action | Do you want a draft or a submitted request? | Уточнить цель. | Грамматически верная команда может не соответствовать цели. |
| imperative | Open the practice editor. | Base form, обычно без you. | Не opens в обычной команде. |
| negative imperative | Do not publish the sample. | Do not + base. | Не not publish или don't publishes. |
| request | Could you read the current status? | Could + subject + base. | Не сообщение о выполнении. |
| state question | Is the field empty? | Be перед subject. | Не does the field empty. |
| action question | Do you see the label? | Do + subject + base. | See не принимает are в этой модели. |
| label and value | In the Name field, enter Trial. | Подпись и значение раздельны. | Не вводить Name вместо Trial. |
| select | Select the practice area. | Выбор объекта/значения. | Не обязательно мышью. |
| click or tap | Click the label; on a touch screen, tap it. | Способ взаимодействия. | Не выдумывать устройство собеседника. |
| press versus type | Press Enter; type a title. | Клавиша и ввод значения. | Enter может быть именем клавиши. |
| inspect versus select | Check whether the box is selected. | Вопрос о текущем состоянии. | Не автоматическое включение. |
| clear a checkbox | Clear the Share note checkbox. | Снять отметку. | Не удалить весь текст формы. |
| clear a field | Clear the Memo field. | Убрать значение. | Не изменить отдельный флажок. |
| target state | Make sure notifications are off. | Назвать нужный итог. | Toggle не гарантирует off без исходного состояния. |
| particle and pronoun | Turn it on. | Объект между частями. | Не turn on it в этой модели. |
| required | A title is required for submission. | Обязательность по условию. | Не уже заполнено. |
| optional | A comment is optional. | Можно пропустить. | Не запрещено добавить. |
| enabled | Send is enabled. | Действие доступно. | Не выполнено. |
| disabled | The visible button is disabled. | Действие недоступно сейчас. | Не обязательно скрыто. |
| read-only | The reference is read-only. | Нельзя редактировать значение. | Не пустое; технически не синоним disabled. |
| save | The draft is saved on this device. | Результат и место. | Не облачная резервная копия. |
| submit | Submit the form for review. | Передать на обработку. | Нажатие не receipt/approval. |
| upload and download | Upload a local file; download a remote copy. | Направление передачи. | Не путать с любым import/export. |
| process and result | Sending is not Request received. | Разные стадии. | Процесс не гарантия успеха. |
| receipt and review | The service received it; review is pending. | Получение и оценка раздельны. | Не утверждать прочтение человеком. |
| location | On this page, enter a name in the field. | Указание места. | Контекстные сочетания, не полный закон in/on. |
| before | Before closing the editor, check the message. | Before + -ing, общий исполнитель. | Порядок не доказанный успех сохранения. |
| clarification | Do you mean Save local or Send? | Реальные альтернативы. | Не гадать по цвету/позиции. |
| indirect question | Can you tell me where the label is? | Внутри subject + verb. | Не where is the label после tell me. |
| correction | I said sent; I meant saved locally. | Явно исправить слишком сильный отчёт. | Не скрыть предыдущий ответ. |

## Практика

1. Перед командой что уточнить?
2. Исправь Do not opens the menu.
3. Could you selected Training?
4. Title / Screen practice: что подпись, что значение?
5. Press Enter равно type Enter?
6. Почему check the checkbox может потребовать уточнения?
7. Clear the field и clear the checkbox одинаковы?
8. Turn on it исправить как?
9. Required гарантирует filled?
10. Optional означает нельзя вводить?
11. Visible значит enabled?
12. Enabled значит clicked?
13. Saved on this device доказывает cloud backup?
14. Received доказывает approved?
15. Что узнать о Cancel перед действием?
16. Как проверить устное понимание инструкции?

<details><summary>Разбор после попытки</summary>

1. Цель пользователя и текущее состояние, затем нужный объект/действие.
2. Do not open the menu: базовая форма после do not.
3. Could you select Training? После could base form.
4. Title — подпись поля; Screen practice — вводимый текст.
5. Нет: нажатие клавиши и печать её имени как текста различаются.
6. Может значить проверить состояние или установить флажок; спросить желаемое действие.
7. Первое убирает значение поля, второе снимает флажок; объект существенен.
8. Turn it on: местоимение стоит между глаголом и частицей.
9. Нет: обязательность и заполненность — разные сведения.
10. Нет: пропуск разрешён, ввод не запрещён этим словом.
11. Нет: видимый элемент может быть недоступным для действия.
12. Нет: доступность не выполненное действие.
13. Нет: нужно отдельное свидетельство о месте и резервной копии.
14. Нет: получение, прочтение и оценка разные события.
15. Какие изменения и объекты затрагиваются в этом приложении; не переносить правило другого кейса.
16. Попросить назвать следующий шаг/цель/ожидаемое сообщение, затем ответить на реальные неточности; аудио нужно для фонетики.

</details>

## Источники для сверки

Авторские объяснения и задания. Внешние словари и фонетические справочники:

- [Google developer style guide: UI elements and interaction](https://developers.google.com/style/ui-elements)
- [Microsoft style guide: step-by-step instructions](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)
- [Cambridge English Grammar Today: clause types and imperatives](https://dictionary.cambridge.org/grammar/british-grammar/clause)
- [MDN: disabled and read-only controls](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/disabled)

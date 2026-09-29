// Append only: published row order determines stable card IDs.
const source=`button~кнопка~/ˈbʌtən/~word~Select the Save draft button.~Назови подпись, не только цвет.
field~поле ввода~/fiːld/~word~The Title field is empty.~Не путать поле и введённое значение.
label~подпись элемента~/ˈleɪbəl/~word~Read the label before choosing an action.~Label может быть существительным и глаголом, здесь существительное.
value~значение~/ˈvæljuː/~word~Training is the selected value.~Не имя списка Workspace.
checkbox~флажок, поле отметки~/ˈtʃekbɒks/~word~The sharing checkbox is clear.~Clear здесь значит не установлен.
menu~меню~/ˈmenjuː/~word~Open the File menu.~Меню и поле ввода не одно и то же.
tab~вкладка~/tæb/~word~The status is on the Review tab.~Tab также клавиша; уточняй контекст.
dialog~диалоговое окно~/ˈdaɪəlɒɡ/~word~Read the warning in the dialog.~В интерфейсах часто dialog; dialogue обычно разговор.
drop-down list~раскрывающийся список~/ˌdrɒp daʊn ˈlɪst/~chunk~Choose Training from the drop-down list.~Не всякий список раскрывается.
option~вариант выбора, опция~/ˈɒpʃən/~word~Which option is selected?~Выбранный вариант не обязательно выполненное действие.
setting~настройка~/ˈsetɪŋ/~word~Do not change the notification setting yet.~Settings часто название целого раздела.
workspace~рабочее пространство~/ˈwɜːkspeɪs/~word~Check the workspace before editing.~В учебном кейсе Training; не действующий рабочий проект.
draft~черновик~/drɑːft/~word~The draft is saved locally.~UK /ɑː/, нормативный US обычно /æ/.
submit~отправить на рассмотрение или обработку~/səbˈmɪt/~word~Do not submit the practice note yet.~Команда не подтверждённое получение.
select~выбрать, установить отметку~/sɪˈlekt/~word~Select the reviewer from the list.~Значение определяется объектом.
clear~очистить; снять отметку~/klɪə/~word~Clear the Comment field, not the checkbox.~Clear с разными объектами даёт разные действия.
enabled~доступный для действия~/ɪˈneɪbəld/~word~The Submit button is now enabled.~Не означает уже нажата.
disabled~недоступный для действия~/dɪsˈeɪbəld/~word~The button is visible but disabled.~Состояние интерфейса, не характеристика человека.
optional~необязательный~/ˈɒpʃənəl/~word~A comment is optional.~Пропуск разрешён, ввод не запрещён.
empty~пустой~/ˈempti/~word~The required field is still empty.~Состояние не правило обязательности.
read-only~доступный только для чтения~/ˌriːd ˈəʊnli/~word~The reference field is read-only.~Нельзя редактировать; не значит, что поле пусто.
unsaved changes~несохранённые изменения~/ˌʌnseɪvd ˈtʃeɪndʒɪz/~chunk~The page reports unsaved changes.~Может существовать более старая сохранённая версия.
status~состояние, статус~/ˈsteɪtəs/~word~What does the status message say?~Сообщение требует точного чтения.
pending~ожидающий обработки или решения~/ˈpendɪŋ/~word~The review is pending.~Не означает approved или failed само по себе.
confirmation~подтверждение~/ˌkɒnfəˈmeɪʃən/~word~Wait for confirmation of receipt.~Уточняй, какой именно факт подтверждён.
receipt~получение; квитанция~/rɪˈsiːt/~word~The message confirms receipt by the service.~Буква p не произносится; здесь получение, не одобрение.
notification~уведомление~/ˌnəʊtɪfɪˈkeɪʃən/~word~Notifications are off in this exercise.~Настройка уведомлений не всегда управляет самой отправкой.
reviewer~проверяющий, рецензент~/rɪˈvjuːə/~word~Mina is selected as the reviewer.~Выбор человека не подтверждает, что он прочёл работу.
local copy~локальная копия~/ˌləʊkəl ˈkɒpi/~chunk~There is a local copy on this device.~Не обязательно отдельная резервная копия.
backup~резервная копия~/ˈbækʌp/~word~A saved draft does not prove that a backup exists.~Существительное backup; глагол back up пишется раздельно.
press~нажать~/pres/~word~Press the Enter key.~Не печатать слово Enter.
tap~коснуться, нажать касанием~/tæp/~word~Tap the label on the touch screen.~В другом контексте tap также водопроводный кран.
click~щёлкнуть, нажать мышью~/klɪk/~word~Click Save draft.~Click on также бывает грамматически допустимым.
scroll~прокрутить~/skrəʊl/~word~Scroll down to the status message.~Направление задаётся контекстом, не обновление страницы.
turn on~включить~/ˌtɜːn ˈɒn/~phrasal~Turn on notifications for the next exercise.~С местоимением turn them on.
turn off~выключить~/ˌtɜːn ˈɒf/~phrasal~Turn it off before continuing.~Местоимение между частями.
fill in~заполнить~/ˌfɪl ˈɪn/~phrasal~Fill in the required fields.~Fill out a form также нормативно; не переводить буквально.
leave blank~оставить пустым~/ˌliːv ˈblæŋk/~chunk~You can leave the optional field blank.~Разрешение по условию, не универсальный запрет ввода.
go back~вернуться назад~/ˌɡəʊ ˈbæk/~phrasal~Go back to the previous page.~Не гарантирует отмену уже выполненного действия.
make sure~убедиться, проверить~/ˌmeɪk ˈʃɔː/~chunk~Make sure the workspace is Training.~Make sure that также возможно; проверка не догадка.`;
const kinds={word:'слово',chunk:'выражение',phrasal:'фразовый глагол'};
export const t01Vocabulary=source.split('\n').map((line,i)=>{
 const fields=line.split('~');if(fields.length!==6||fields.some(v=>!v))throw Error('Invalid T01 vocabulary row '+(i+1));
 const [word,translation,ipa,kind,context,note]=fields;if(!kinds[kind])throw Error('Invalid T01 vocabulary kind');
 return {id:`T01-x-${i+1}`,module:'T01',word,translation,ipa,accent:'UK',kind:kinds[kind],context,note};
});

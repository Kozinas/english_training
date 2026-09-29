// Append only: row order defines published card IDs. IPA is UK, not a voice setting.
const source=`symptom~проявление проблемы, симптом~/ˈsɪmptəm/~word~Describe the symptom before suggesting a cause.~Наблюдаемое проявление не объясняет причину само по себе.
expected~ожидаемый~/ɪkˈspektɪd/~word~State the expected result and its basis.~Ожидание по правилу, не наблюдение.
actual~фактический~/ˈæktʃuəl/~word~The actual result differs from the guide.~Не актуальный; current значит текущий.
observation~наблюдение~/ˌɒbzəˈveɪʃən/~word~Keep observations separate from assumptions.~Наблюдение ограничено тем, что действительно проверено.
attempt~попытка~/əˈtempt/~word~The symptom occurred on the second attempt.~Не отдельный пользователь автоматически.
trial~проба, испытание~/ˈtraɪəl/~word~Record all four trials, including the one without the symptom.~Исчисляемое; единицу подсчёта нужно назвать.
frequency~частота~/ˈfriːkwənsi/~word~The report states the observed frequency.~Частота в малой выборке не статистика всего продукта.
setup~конфигурация, окружение~/ˈsetʌp/~word~I could not reproduce it in this setup.~Существительное одно слово; set up — глагол из двух.
build~сборка~/bɪld/~word~Which build did you test?~Здесь версия собранного приложения, не действие строить.
setting~настройка~/ˈsetɪŋ/~word~This setting was unchanged between trials.~Не состояние всего окружения одним словом.
default~значение по умолчанию~/dɪˈfɔːlt/~word~The account uses the default settings.~Default зависит от продукта и версии.
precondition~предварительное условие~/ˌpriːkənˈdɪʃən/~word~A new training account is a precondition of this test.~Условие до шагов, не их результат.
input~входные данные~/ˈɪnpʊt/~word~Use the same input in each comparison.~Назови поле и значение.
output~выходные данные, результат вывода~/ˈaʊtpʊt/~word~The output contains extra entries.~Не обязательно все внутренние данные.
empty~пустой~/ˈempti/~word~The title is empty, but the body contains text.~Уточняй объект пустоты.
missing~отсутствующий, не найденный~/ˈmɪsɪŋ/~word~The draft is missing from the visible list.~Не автоматически permanently deleted.
visible~видимый~/ˈvɪzəbəl/~word~The control note remains visible.~Видимость не полная проверка хранения.
persist~сохраняться~/pəˈsɪst/~word~The selected order should persist until it is changed.~Требование не доказательство выполнения.
reload~перезагрузить страницу~/ˌriːˈləʊd/~word~Reload the page after Saved appears.~Не переустановка приложения.
crash~аварийно завершиться~/kræʃ/~word~The application crashes when the panel opens.~Не всякий неверный результат является crash.
freeze~перестать отвечать, зависнуть~/friːz/~word~The page freezes, but the browser stays open.~Симптом отличается от закрытия приложения.
log~журнал событий~/lɒɡ/~word~Include only the relevant safe log excerpt.~Полный журнал может содержать секреты.
attachment~приложенный файл, вложение~/əˈtætʃmənt/~word~The attachment uses invented data only.~Не разрешение публиковать реальные клиентские файлы.
evidence~свидетельства, данные в обоснование~/ˈevɪdəns/~word~We need more evidence before naming the cause.~В обычном отчёте неисчисляемое.
assumption~предположение~/əˈsʌmpʃən/~word~Mark that statement as an assumption.~Не установленный факт.
hypothesis~гипотеза~/haɪˈpɒθəsɪs/~word~The cache explanation is still a hypothesis.~Множественное hypotheses, не доказанная причина.
cause~причина~/kɔːz/~word~The cause has not been confirmed.~After само не because.
impact~влияние, последствия~/ˈɪmpækt/~word~Explain the impact on the user's task.~Здесь существительное, не субъективный priority label.
severity~серьёзность последствий~/sɪˈverəti/~word~Describe the impact before assigning severity.~Шкала зависит от команды; не равна очередности работы.
priority~приоритет~/praɪˈɒrəti/~word~The team has not agreed on the priority yet.~Не обещание даты исправления.
intermittent~непостоянный, возникающий время от времени~/ˌɪntəˈmɪtənt/~word~The symptom is intermittent in these trials.~Нужно указать наблюдаемую частоту и условия.
affected~затронутый проблемой~/əˈfektɪd/~word~Only this route is known to be affected.~Не каждый пользователь.
unaffected~не затронутый~/ˌʌnəˈfektɪd/~word~The control note appeared unaffected in these checks.~Не tested everywhere; ограничение важно.
verify~проверить и подтвердить~/ˈverɪfaɪ/~word~We still need to verify the proposed fix.~План проверки не verified result.
rule out~исключить возможность~/ˌruːl ˈaʊt/~phrasal~We cannot rule out a different cause yet.~Не буквальное правило снаружи; нужны основания исключения.
narrow down~сузить круг вариантов~/ˌnærəʊ ˈdaʊn/~phrasal~These details may narrow down the possible causes.~Сузить поиск не обязательно найти причину.
point out~обратить внимание, указать~/ˌpɔɪnt ˈaʊt/~phrasal~Could you point out the missing condition?~Здесь сообщить замеченную деталь, не только показать пальцем.
show up~появиться~/ˌʃəʊ ˈʌp/~phrasal~The entry shows up after the board reopens.~Разговорнее appear; не подтверждает момент записи на сервер.
as far as I can tell~насколько я могу судить~/əz ˌfɑːr əz aɪ kən ˈtel/~chunk~As far as I can tell, the control note is unchanged.~Формула ограничения знания, не буквальная дальность.
under these conditions~при этих условиях~/ˌʌndə ðiːz kənˈdɪʃənz/~chunk~I reproduced the symptom under these conditions.~Связывает результат с названным окружением, не универсальное правило.`;
const kinds={word:'слово',phrasal:'фразовый глагол',chunk:'выражение'};
export const t02Vocabulary=source.split('\n').map((line,i)=>{const fields=line.split('~');if(fields.length!==6||fields.some(v=>!v))throw Error('Invalid T02 vocabulary row '+(i+1));const [word,translation,ipa,kind,context,note]=fields;if(!kinds[kind])throw Error('Invalid T02 vocabulary kind');return {id:`T02-x-${i+1}`,module:'T02',word,translation,ipa,accent:'UK',kind:kinds[kind],context,note};});

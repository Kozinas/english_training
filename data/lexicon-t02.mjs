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
under these conditions~при этих условиях~/ˌʌndə ðiːz kənˈdɪʃənz/~chunk~I reproduced the symptom under these conditions.~Связывает результат с названным окружением, не универсальное правило.
clarify~уточнить~/ˈklærɪfaɪ/~word~Could you clarify what return means?~Назови предмет неясности, не просто просьбу Explain.
requirement~требование~/rɪˈkwaɪəmənt/~word~This requirement covers keyboard Reset.~Наличие формулировки не подтверждает её выполнение.
criterion~критерий~/kraɪˈtɪəriən/~word~This criterion applies to the return route.~Единственное criterion, множественное criteria.
acceptance criteria~критерии приёмки~/əkˈseptəns kraɪˈtɪəriə/~chunk~We have not agreed the acceptance criteria yet.~Criteria — множественное число; не подтверждение уже выполненного.
scope~охват, границы задачи~/skəʊp/~word~Keyboard Reset is within the agreed scope.~Не равняется всей функциональности продукта.
out of scope~вне согласованного объёма~/ˌaʊt əv ˈskəʊp/~chunk~A new sign-in is out of scope for this request.~Не означает работает, невозможно или неважно навсегда.
baseline~исходная точка сравнения~/ˈbeɪslaɪn/~word~We recorded the baseline build and its results.~Не обязательно самая старая или безошибочная версия.
candidate~кандидат, предлагаемый вариант~/ˈkændɪdət/~word~The candidate build still needs checking.~Candidate build не автоматически release.
comparable~сопоставимый~/ˈkɒmpərəbl/~word~Are the two checks comparable?~Нужно назвать условия сопоставления.
retest~проверить повторно~/ˌriːˈtest/~word~Please retest the reported route.~Здесь глагол; исходный маршрут не вся regression suite.
verification~проверка, подтверждение~/ˌverɪfɪˈkeɪʃən/~word~Verification is incomplete for the full request.~Указывай, что и по каким условиям подтверждается.
mismatch~несоответствие~/ˈmɪsmætʃ/~word~There is a mismatch between the list and the indicator.~Существительное; наблюдение не внутренняя причина.
indicator~индикатор~/ˈɪndɪkeɪtə/~word~The indicator is active, but the list is wrong.~Состояние контроля не весь результат.
retain~сохранять, удерживать~/rɪˈteɪn/~word~The list should retain the selected filter.~Ожидание с should, не наблюдение.
restore~восстановить~/rɪˈstɔː/~word~Restore the prepared state before each trial.~В уроке только учебные данные, не очистка личного профиля.
unchanged~неизменившийся~/ʌnˈtʃeɪndʒd/~word~The indicator remained unchanged.~Не доказывает неизменность списка.
consistently~последовательно, стабильно~/kənˈsɪstəntli/~word~Reset did not work consistently in these checks.~Наблюдаемая граница, не частота у всех пользователей.
passed~прошёл проверку~/pɑːst/~word~The return check passed under these conditions.~UK /pɑːst/, US /pæst/ нормативно; условия важны.
failed~не прошёл проверку~/feɪld/~word~The Reset check failed to meet the condition.~A test failed и failed to run a test различаются.
blocked~заблокирован, не может быть выполнен~/blɒkt/~word~The check is blocked by missing access.~Причина невозможности проверки не обязательно defect продукта.
not run~не выполнен, не запускался~/ˌnɒt ˈrʌn/~chunk~The mouse check is marked not run.~Статус проверки, не negative product result.
pending~ожидающий выполнения или решения~/ˈpendɪŋ/~word~The ownership decision is still pending.~Укажи, что именно ожидается; не произвольный passed.
unconfirmed~неподтверждённый~/ˌʌnkənˈfɜːmd/~word~Deployment is unconfirmed.~Не доказывает, что deployment не было.
merge~слить, объединить изменения~/mɜːdʒ/~word~They merged the change into the main branch.~Слияние не deployment и не приёмка.
deployment~развёртывание~/dɪˈplɔɪmənt/~word~We have no deployment confirmation.~Назови среду, не просто stage done.
live service~рабочий сервис для пользователей~/ˌlaɪv ˈsɜːvɪs/~chunk~Has the change reached the live service?~Live /laɪv/, не глагол live /lɪv/.
reopen~открыть снова~/ˌriːˈəʊpən/~word~Should we reopen the issue under our workflow?~Вопрос о процессе не разрешает менять реальный tracker.
ownership~ответственность за задачу~/ˈəʊnəʃɪp/~word~Ownership of the next check is not agreed.~Не только юридическое владение; не назначай за человека.
investigate~исследовать, выяснять~/ɪnˈvestɪɡeɪt/~word~Could you investigate the remaining mismatch?~Принятие просьбы и найденная причина отдельны.
follow up on~вернуться к вопросу и уточнить состояние~/ˌfɒləʊ ˈʌp ɒn/~phrasal~Could you follow up on the remaining check?~Не буквально следовать вверх; follow-up как существительное с дефисом.
carry out~провести, выполнить~/ˌkæri ˈaʊt/~phrasal~We have not carried out that check.~Не буквальное вынести; выполнение не обязательно успех.
meet the condition~соответствовать условию~/ˌmiːt ðə kənˈdɪʃən/~chunk~One Reset check did not meet the condition.~Meet здесь выполнить требование, не встретить человека.
not yet verified~пока не проверено и не подтверждено~/ˌnɒt jet ˈverɪfaɪd/~chunk~The release is not yet verified.~Не равно verified as broken.
no longer~больше не~/ˌnəʊ ˈlɒŋɡə/~chunk~The indicator is no longer active.~Не добавляй ещё not к отрицательному no longer.
my understanding is that~я понимаю это так, что~/maɪ ˌʌndəˈstændɪŋ ɪz ðət/~chunk~My understanding is that Reset clears both states.~Явная интерпретация; попроси подтвердить.
subject to confirmation~при условии подтверждения~/ˌsʌbdʒekt tə ˌkɒnfəˈmeɪʃən/~chunk~The proposed date is subject to confirmation.~Дата ещё не окончательно согласована; не скрывай условность.
progress~продвижение в работе~/ˈprəʊɡres/~word~We have made some progress on the task.~Существительное обычно U; не a progress.
update~сообщение об изменениях, обновление статуса~/ˈʌpdeɪt/~word~I will send an update at 13:00 UTC.~Существительное с первым ударением; глагол update обычно /ʌpˈdeɪt/.
achievement~достигнутый результат~/əˈtʃiːvmənt/~word~Drafting the examples is an achievement, but review remains.~Назови достигнутое, не весь task автоматически.
outcome~результат, исход~/ˈaʊtkʌm/~word~The outcome of the check is still unknown.~Проведение действия не гарантирует успешный исход.
outstanding~остающийся невыполненным~/aʊtˈstændɪŋ/~word~There is outstanding review work.~Здесь remaining; в другом контексте может быть выдающийся.
remaining~оставшийся~/rɪˈmeɪnɪŋ/~word~Two remaining examples have not been drafted.~Остаток нужно связать с конкретной стадией.
ongoing~продолжающийся~/ˈɒnɡəʊɪŋ/~word~The investigation is ongoing.~Не значит причина найдена или work непрерывен.
dependency~зависимость, необходимое условие~/dɪˈpendənsi/~word~The sample is a dependency for the comparison.~Назови затронутый шаг, не всё work.
access~доступ~/ˈækses/~word~I need access to the training account.~Обычно U; access to, не пароль в публичном handover.
permission~разрешение~/pəˈmɪʃən/~word~We have not received permission to use that environment.~Request sent не permission granted.
request~запрос, просьба~/rɪˈkwest/~word~The access request has been sent.~Существительное здесь; отправка не исполнение.
deadline~крайний срок~/ˈdedlaɪn/~word~No deadline for the full task has been agreed.~Не приравнивай tentative estimate к принятому deadline.
target~целевой ориентир~/ˈtɑːɡɪt/~word~16:00 is a possible target for the two drafts.~Scope и условия важнее одной цифры.
estimate~оценка, приблизительный расчёт~/ˈestɪmət/~word~The estimate depends on clarification.~Существительное /-mət/; глагол estimate обычно /-meɪt/.
tentative~предварительный, неокончательный~/ˈtentətɪv/~word~The completion estimate is tentative.~Пометь условия, не скрытое обещание.
commitment~принятое обязательство~/kəˈmɪtmənt/~word~My commitment is to post another update.~Не автоматически finish всей задачи.
availability~доступность~/əˌveɪləˈbɪləti/~word~Account availability is unconfirmed.~Не доказывает, что доступ никогда не появится.
handover~передача работы~/ˈhændəʊvə/~word~The handover names the accepted scope.~Обычно UK, handoff также употребляется; отправить note не передать все обязанности.
handoff~передача работы~/ˈhændɒf/~word~The handoff includes open questions.~Часто US; здесь UK-транскрипция слова, не имитация US-акцента.
recipient~получатель~/rɪˈsɪpiənt/~word~The recipient has read the note.~Прочтение не принятие всей работы.
acknowledge~подтвердить получение или признать~/əkˈnɒlɪdʒ/~word~She acknowledged the message but did not accept the task.~Контекст определяет смысл; acknowledgement не обязательство выполнить.
accept~принять, согласиться взять~/əkˈsept/~word~Nina accepted the task of proofreading four drafts.~Принятый scope ограничен действием.
resume~возобновить~/rɪˈzjuːm/~word~We can resume the check when access is available.~Глагол, не существительное résumé.
postpone~отложить~/pəʊstˈpəʊn/~word~We may need to postpone that check.~Возможность не принятое решение и не выполненный check.
escalate~передать вопрос на другой уровень решения~/ˈeskəleɪt/~word~Should we escalate the unresolved access request?~Не обязательно обвинить человека; реальный workflow надо согласовать.
take over~принять на себя работу или ответственность~/ˌteɪk ˈəʊvə/~phrasal~Nina has not taken over the whole task.~Целостный смысл не буквально взять над; scope обязателен.
hand over~передать работу или ответственность~/ˌhænd ˈəʊvə/~phrasal~Please clarify which part you want to hand over.~Hand over глагол, handover существительное; получатель должен принять scope.
get back to~связаться снова, вернуться с ответом~/ˌɡet ˈbæk tə/~phrasal~I will get back to you with an update.~Не обязательно физически вернуться к человеку.
catch up on~ознакомиться с пропущенным, наверстать~/ˌkætʃ ˈʌp ɒn/~phrasal~I need to catch up on the review notes.~Не буквальная ловля вверх; чтение не approval.
work on~работать над~/ˈwɜːk ɒn/~chunk~I am working on the revised wording.~Work on a task; текущая работа не завершение.
wait for~ждать~/ˈweɪt fə/~chunk~We are waiting for the agreed sample.~Wait for something; точное нужное условие.
in progress~в процессе выполнения~/ɪn ˈprəʊɡres/~chunk~The task is still in progress.~Не fully reviewed или released.
on hold~приостановлено~/ɒn ˈhəʊld/~chunk~That comparison is on hold pending the sample.~Назови конкретную часть, не всю работу без оснований.
so far~к настоящему моменту~/səʊ ˈfɑː/~chunk~So far, four examples have been drafted.~Граница знания/результата сейчас, не окончательный total.
by then~к тому моменту~/baɪ ˈðen/~chunk~I may have an answer by then, but it is not confirmed.~Then требует ясной временной опоры.
take on~взять на себя задачу~/ˌteɪk ˈɒn/~phrasal~I can take on proofreading, but not the application check.~Готовность и окончательное принятие уточняются в контексте.`;
const kinds={word:'слово',phrasal:'фразовый глагол',chunk:'выражение'};
export const t02Vocabulary=source.split('\n').map((line,i)=>{const fields=line.split('~');if(fields.length!==6||fields.some(v=>!v))throw Error('Invalid T02 vocabulary row '+(i+1));const [word,translation,ipa,kind,context,note]=fields;if(!kinds[kind])throw Error('Invalid T02 vocabulary kind');return {id:`T02-x-${i+1}`,module:'T02',word,translation,ipa,accent:'UK',kind:kinds[kind],context,note};});

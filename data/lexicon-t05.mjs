const source=`incident~инцидент~/ˈɪnsɪdənt/~word~The incident was declared after the alert.~Объявление не обязательно начало проблемы.
disruption~нарушение работы~/dɪsˈrʌpʃən/~word~We acknowledge the disruption to exports.~Не обязательно полный outage.
degradation~ухудшение работы~/ˌdeɡrəˈdeɪʃən/~word~The record describes a degradation of one function.~Нужно назвать функцию и область.
impact~влияние, последствия~/ˈɪmpækt/~word~Describe the impact on export requests.~Существительное; affect — обычно глагол.
affected~затронутый~/əˈfektɪd/~word~The number of affected customers is unknown.~Не infected: другая смысловая область.
scope~охват, границы~/skəʊp/~word~Keep the scope of the check explicit.~Не расширять selected до all.
symptom~наблюдаемое проявление проблемы~/ˈsɪmptəm/~word~The first observed symptom was an export error.~Не обязательно причина.
onset~начало возникновения~/ˈɒnset/~word~The actual onset has not been established.~Не автоматически время alert.
alert~оповещение~/əˈlɜːt/~word~The alert fired at 09:10 UTC.~Оповещение отдельно от объявления инцидента.
timeline~хронология~/ˈtaɪmlaɪn/~word~The timeline separates actions from observations.~Не добавлять точность без источника.
observation~наблюдение~/ˌɒbzəˈveɪʃən/~word~That observation concerns a selected sample.~Ограничение метода существенно.
hypothesis~гипотеза~/haɪˈpɒθəsɪs/~word~A configuration issue remains a hypothesis.~Множественное hypotheses.
evidence~свидетельства, данные~/ˈevɪdəns/~word~We need evidence for that stronger claim.~Обычно неисчисляемое: не an evidence.
causal~причинный~/ˈkɔːzəl/~word~A causal link has not been established.~Не casual: другой смысл и звук.
coincide~совпадать по времени~/ˌkəʊɪnˈsaɪd/~word~The error coincided with a change.~Coincide with, не доказательство cause.
precede~предшествовать~/prɪˈsiːd/~word~The change preceded the first observed error.~Не proceed — продолжать действие.
pending~ожидающий завершения~/ˈpendɪŋ/~word~Three jobs remain pending.~Не automatically failed.
unresolved~неразрешённый~/ˌʌnrɪˈzɒlvd/~word~The earlier outcomes remain unresolved.~Назвать, что именно ещё не установлено.
backlog~накопившаяся невыполненная работа~/ˈbæklɒɡ/~word~The backlog needs separate follow-up.~Успех новых requests не закрывает старые jobs.
probe~контрольная проверка~/prəʊb/~word~Six new probes succeeded.~Не все реальные пользователи.
recovery~восстановление~/rɪˈkʌvəri/~word~Full recovery has not been confirmed.~Не обязательно установленная причина.
restore~восстановить~/rɪˈstɔː/~word~The check does not prove that every path was restored.~Указать объект и свидетельство.
monitor~наблюдать, отслеживать~/ˈmɒnɪtə/~word~We monitor the selected path for recurrence.~Monitor for something, не гарантия.
coordinator~координатор~/kəʊˈɔːdɪneɪtə/~word~The coordinator remains in place until the handover is accepted.~Роль по условиям кейса.
handover~передача работы или ответственности~/ˈhændəʊvə/~word~Record the scope of the handover.~UK handover; US часто handoff.
acknowledge~подтвердить получение, признать~/əkˈnɒlɪdʒ/~word~I acknowledge the request but cannot accept the role.~Понимание не принятие обязательства.
commitment~принятое обязательство~/kəˈmɪtmənt/~word~The commitment concerns the next update.~Не обещание окончания инцидента.
correction~исправление утверждения~/kəˈrekʃən/~word~The correction keeps the earlier claim visible.~Историю не стирать молча.
take over~принять на себя~/ˌteɪk ˈəʊvə/~phrasal~Noor agreed to take over coordination.~Не буквально взять поверх чего-то.
hand over~передать ответственность~/ˌhænd ˈəʊvə/~phrasal~Please confirm the role before I hand over.~Глагол раздельно, существительное handover слитно.
read back~повторить для проверки понимания~/ˌriːd ˈbæk/~phrasal~Please read back the update time.~Здесь infinitive read /riːd/, не past /red/.
follow up on~вернуться к вопросу для дальнейшей проверки~/ˌfɒləʊ ˈʌp ɒn/~phrasal~We need to follow up on the unknown result.~Не идти следом буквально.
rule out~исключить как возможное объяснение~/ˌruːl ˈaʊt/~phrasal~We cannot rule out another explanation.~Cannot rule out не подтверждает альтернативу.
keep someone posted~держать кого-то в курсе~/ˌkiːp sʌmwʌn ˈpəʊstɪd/~chunk~We will keep you posted at the agreed time.~Не про размещение человека на посту; время лучше уточнить.
under investigation~на стадии расследования~/ˌʌndər ɪnˌvestɪˈɡeɪʃən/~chunk~The cause is still under investigation.~Не established finding.
as of~по состоянию на~/ˌæz ˈɒv/~chunk~As of 09:30 UTC, three jobs are pending.~Срез состояния, не обещание будущего.`;
const kinds={word:'слово',phrasal:'фразовый глагол',chunk:'выражение'};
export const t05Vocabulary=source.split('\n').map((line,i)=>{const fields=line.split('~');if(fields.length!==6||fields.some(v=>!v))throw Error('Invalid T05 vocabulary row '+(i+1));const [word,translation,ipa,kind,context,note]=fields;if(!kinds[kind])throw Error('Invalid T05 vocabulary kind');return {id:`T05-x-${i+1}`,module:'T05',word,translation,ipa,accent:'UK',kind:kinds[kind],context,note};});

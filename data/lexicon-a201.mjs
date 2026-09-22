// Original contextual cards. Keep published order stable: IDs derive from the row index.
const source=`chosen~выбранный; V3 choose~/ˈtʃəʊzən/~form~We have chosen a date.~Choose–chose–chosen; форма после have/has, не chose.
driven~водил; V3 drive~/ˈdrɪvən/~form~I have never driven a van.~Drive–drove–driven; опыт не обязан быть недавним.
eaten~съеденный; V3 eat~/ˈiːtən/~form~Have you eaten yet?~Eat–ate–eaten; краткий ответ Yes, I have.
fallen~упавший; V3 fall~/ˈfɔːlən/~form~A branch has fallen across the path.~Fall–fell–fallen; не has fell.
forgotten~забытый; V3 forget~/fəˈɡɒtən/~form~I have forgotten the code.~Forget–forgot–forgotten; не forgot после have в базовой модели.
given~данный; V3 give~/ˈɡɪvən/~form~She has given us a clear answer.~Give–gave–given; данное объяснение не доказывает понимание адресатом.
known~известный; V3 know~/nəʊn/~form~We have known each other for years.~Know–knew–known; состояние знакомства до сейчас.
ridden~ездил верхом; V3 ride~/ˈrɪdən/~form~Have you ever ridden a horse?~Ride–rode–ridden; слово также относится к езде на велосипеде.
spoken~сказанный; V3 speak~/ˈspəʊkən/~form~I have spoken to the manager.~Speak–spoke–spoken; разговор не гарантирует решения вопроса.
taken~взятый; V3 take~/ˈteɪkən/~form~Someone has taken the spare key.~Take–took–taken; субъект может оставаться неизвестным.
written~написанный; V3 write~/ˈrɪtən/~form~We have written a short update.~Write–wrote–written; начальная w не произносится.
worn~носил одежду; V3 wear~/wɔːn/~form~I have never worn this jacket.~Wear–wore–worn; для повреждённого предмета worn может значить «изношенный».
begun~начатый; V3 begin~/bɪˈɡʌn/~form~The meeting has begun.~Begin–began–begun; начало не означает завершения.
done~сделанный; V3 do~/dʌn/~form~What have you done so far?~Do–did–done; не have did.
drawn~нарисованный; V3 draw~/drɔːn/~form~She has drawn a simple map.~Draw–drew–drawn; форма не сообщает дату рисунка.
drunk~выпитый; V3 drink~/drʌŋk/~form~I have drunk two glasses of water.~Drink–drank–drunk; прилагательное drunk также значит «пьяный», контекст различает.
seen~увиденный; V3 see~/siːn/~form~We haven't seen the final result yet.~See–saw–seen; seen и scene звучат одинаково в этой модели.
sung~спетый; V3 sing~/sʌŋ/~form~He has sung in a choir before.~Sing–sang–sung; не have sang.
won~выигранный; V3 win~/wʌn/~form~She has won two prizes.~Win–won–won; произносится как one, а не по буквам wo.
built~построенный; V3 build~/bɪlt/~form~They have built a small shelf.~Build–built–built; V2 и V3 совпадают.
brought~принесённый; V3 bring~/brɔːt/~form~Have you brought the receipt?~Bring–brought–brought; не путать с bought без r.
bought~купленный; V3 buy~/bɔːt/~form~We have bought the materials.~Buy–bought–bought; покупка не обязательно означает доставку.
left~оставленный; V3 leave~/left/~form~I have left the note on your desk.~Leave–left–left; left также «левый», значение определяется контекстом.
read~прочитанный; третья форма~/red/~form~I have read the instructions.~Написание как у основы /riːd/, но V2/V3 звучат /red/. Для значения V3 слушай пример: без контекста TTS может выбрать чтение основы.
result~результат~/rɪˈzʌlt/~word~We have checked the result.~Выполненное действие и проверенный результат различаются.
achievement~достижение~/əˈtʃiːvmənt/~word~Finishing the project is an achievement.~Не любая попытка автоматически считается достижением.
attempt~попытка~/əˈtempt/~word~The first attempt failed.~Число попыток не равно числу успехов.
evidence~свидетельства; данные в поддержку вывода~/ˈevɪdəns/~word~We need evidence before we confirm the cause.~Обычно неисчисляемое: some evidence, a piece of evidence; не an evidence.
confirmation~подтверждение~/ˌkɒnfəˈmeɪʃən/~word~We haven't received confirmation yet.~Запрос или ответ ещё не обязательно подтверждает нужное действие.
receipt~чек; квитанция~/rɪˈsiːt/~word~I have saved the receipt.~P не произносится; оплата и получение чека — разные факты.
courier~курьер~/ˈkʊriə/~word~The courier has collected two boxes.~В UK-нотации здесь без конечного произносимого r.
parcel~посылка~/ˈpɑːsəl/~word~The parcel arrived yesterday.~Package тоже возможно; доставка и проверка содержимого различаются.
packing list~список содержимого; упаковочный лист~/ˈpækɪŋ lɪst/~chunk~Have you checked the packing list?~Сочетание относится к вещам/содержимому, не к расписанию.
extension lead~электрический удлинитель~/ɪkˈstenʃən liːd/~chunk~We've packed the extension lead.~UK; в US обычно extension cord. Lead здесь /liːd/, не металл /led/.
charger~зарядное устройство~/ˈtʃɑːdʒə/~word~I still haven't found my charger.~Не battery: зарядное устройство и аккумулятор — разные предметы.
settings~настройки~/ˈsetɪŋz/~word~Who chose the printer settings?~Обычно множественное число для набора параметров.
independently~самостоятельно~/ˌɪndɪˈpendəntli/~word~She hasn't used the machine independently yet.~Поддержанная попытка не доказывает самостоятельное выполнение.
supervised~под наблюдением; с руководством~/ˈsuːpəvaɪzd/~word~He has completed two supervised tasks.~Уточняет условия выполнения, а не обесценивает опыт.
demonstration~показ; демонстрация~/ˌdemənˈstreɪʃən/~word~We watched a demonstration last week.~Наблюдение за показом не равно собственной практике.
membership~членство~/ˈmembəʃɪp/~word~My membership started in January.~Начало членства может отличаться от первого посещения.
tenant~арендатор~/ˈtenənt/~word~The tenant has lived here for a year.~Не landlord: tenant арендует, landlord сдаёт жильё.
ownership~владение~/ˈəʊnəʃɪp/~word~Ownership does not show how often someone uses it.~Владение, пользование и навык не тождественны.
period~период; промежуток~/ˈpɪəriəd/~word~The report covers a three-month period.~У period есть и другие значения; здесь время.
duration~длительность~/djuˈreɪʃn/~word~What was the duration of the visit?~Длина отрезка, не дата начала.
starting point~начальная точка~/ˈstɑːtɪŋ pɔɪnt/~chunk~Since introduces a starting point here.~Не подменять точку начала длиной периода.
outage~перерыв в работе; отключение~/ˈaʊtɪdʒ/~word~The outage began at nine.~Часто о сети или электричестве; причина отдельно.
intermittent~периодически возникающий~/ˌɪntəˈmɪtənt/~word~The connection problem is intermittent.~Не непрерывная неисправность: есть перерывы.
restore~восстановить~/rɪˈstɔː/~word~Have you tested restoring the backup?~Наличие резервной копии не подтверждает успешное восстановление.
so far~пока; к настоящему моменту~/səʊ ˈfɑː/~chunk~We have checked two cases so far.~Временная граница «до сейчас», не буквальное расстояние.
up to now~до настоящего момента~/ʌp tə ˈnaʊ/~chunk~Up to now, we have only tested one device.~Не обещает, что будущий результат будет таким же.
not yet~пока нет; ещё не~/nɒt ˈjet/~chunk~Have you finished? Not yet.~Отсутствие результата сейчас, не отказ навсегда.
just now~только что~/dʒʌst ˈnaʊ/~chunk~I saw her just now.~Часто с Past Simple; не заменяет автоматически have just + V3.
already done~уже сделано~/ɔːlˈredi dʌn/~chunk~That part is already done.~Статус конкретной части, не всей работы.
still waiting~всё ещё ждём; всё ещё жду~/stɪl ˈweɪtɪŋ/~chunk~We’re still waiting for confirmation.~Waiting — процесс; выражение не сообщает готовый результат.
ever since~с тех самых пор~/ˌevə ˈsɪns/~chunk~We have been friends ever since we met.~Усиленное начало продолжающейся связи, не «всегда потому что».
since then~с тех пор~/sɪns ˈðen/~chunk~We have checked it twice since then.~Then должно иметь понятную опору в предыдущем контексте.
for ages~очень давно; целую вечность~/fər ˈeɪdʒɪz/~chunk~I haven’t heard from you for ages.~Разговорное преувеличение, не точная календарная мера.
in a while~некоторое время; через некоторое время~/ɪn ə ˈwaɪl/~chunk~I haven’t used it in a while.~В отрицательном Perfect — давно не; I’ll call in a while — позвоню позже.
once or twice~раз или два~/ˌwʌns ɔː ˈtwaɪs/~chunk~I’ve tried it once or twice.~Приблизительная частота, не доказательство точного числа два.
at least once~хотя бы один раз~/ət liːst ˈwʌns/~chunk~Have you used it at least once?~Нижняя граница количества, не ровно один раз.
never before~никогда раньше~/ˌnevə bɪˈfɔː/~chunk~I have never seen this message before.~Опыт данного говорящего, не всех пользователей.
been there, done that~уже проходил через это~/biːn ðeə dʌn ˈðæt/~idiom~Been there, done that; I know it can be frustrating.~Неформальная реплика об опыте; может прозвучать пренебрежительно, важен тон.
get the hang of~освоиться; понять, как делать~/ɡet ðə ˈhæŋ əv/~idiom~I’m starting to get the hang of the controls.~Не буквальное «получить висение»; постепенное практическое освоение.
give it a go~попробовать~/ɡɪv ɪt ə ˈɡəʊ/~idiom~I’ve never used it, but I’d like to give it a go.~Разговорное предложение попытки, не обещание успеха.
learn the hard way~научиться на собственном трудном опыте~/lɜːn ðə hɑːd ˈweɪ/~idiom~I learned the hard way to keep a backup.~Не буквальная дорога; часто после ошибки или неприятности.
make progress~продвигаться; делать успехи~/meɪk ˈprəʊɡres/~chunk~We have made progress, but we haven’t finished.~Progress неисчисляемое; продвижение не равно завершению.
run out of~израсходовать; остаться без~/rʌn ˈaʊt əv/~phrasal~We have run out of paper.~Не буквальное выбегание; ресурс закончился.
get back to~вернуться с ответом к~/ɡet ˈbæk tə/~phrasal~I’ll get back to you after the check.~Обещание ответить позже, не обязательно физически вернуться.
hear from~получить сообщение от~/ˈhɪə frəm/~phrasal~I haven’t heard from her since Monday.~Не просто услышать звук голоса, а получить весточку/ответ.
lose touch~потерять связь~/luːz ˈtʌtʃ/~idiom~We lost touch after school.~Социальный контакт, не утрата осязания.
keep in touch~поддерживать связь~/kiːp ɪn ˈtʌtʃ/~idiom~We have kept in touch since the course.~Контакт может быть периодическим, не непрерывным разговором.
catch up with~пообщаться после перерыва; наверстать~/kætʃ ˈʌp wɪð/~phrasal~I’d like to catch up with my old team.~Здесь обмен новостями; другие значения зависят от дополнения.
start from scratch~начать с нуля~/stɑːt frəm ˈskrætʃ/~idiom~We haven’t lost the draft, so we don’t need to start from scratch.~Не буквальная царапина; восстановление работы не равно полному перезапуску.
put something to the test~проверить что-либо на деле~/pʊt ˌsʌmθɪŋ tə ðə ˈtest/~idiom~We have put the new design to the test.~Испытание не гарантирует положительный исход.
rule out~исключить вариант или причину~/ruːl ˈaʊt/~phrasal~We haven’t ruled out a network problem.~Нужны данные; не исключать причину только потому, что её не проверяли.
find out~выяснить~/faɪnd ˈaʊt/~phrasal~Have you found out what happened?~Получить сведения, не обязательно физически найти предмет.
follow up~уточнить; продолжить работу по вопросу~/ˌfɒləʊ ˈʌp/~phrasal~I’ll follow up with the supplier.~Глагол без дефиса; follow-up как существительное/определение обычно с дефисом.
on second thoughts~поразмыслив ещё; передумав~/ɒn ˌsekənd ˈθɔːts/~idiom~On second thoughts, let’s check the address again.~UK; в US обычно on second thought без -s.
as far as I know~насколько мне известно~/əz fɑːr əz aɪ ˈnəʊ/~chunk~As far as I know, they haven’t replied yet.~Ограничение знания говорящего, не абсолютная гарантия.
up and running~в рабочем состоянии~/ʌp ən ˈrʌnɪŋ/~idiom~The app is up and running again.~Не буквальное «вверх и бежит»; работа восстановлена, но охват проверки всё равно уточняют.`;
export const a201Vocabulary=source.split('\n').map((line,i)=>{
 const fields=line.split('~');if(fields.length!==6)throw new Error('A201 card fields '+(i+1));
 const [word,translation,ipa,kind,context,note]=fields;
 return {id:`A201-x-${i+1}`,module:'A201',word,translation,ipa,accent:'UK',kind:({form:'форма глагола',word:'слово',chunk:'сочетание',idiom:'выражение',phrasal:'фразовый глагол'})[kind],context,note};
});

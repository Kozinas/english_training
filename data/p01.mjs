import {bank,exam,examples,goal} from './unit-tools.mjs';

const letters={
 id:'P01-letters',topic:'P01',title:'Буквы, написание и уточнение имени',prerequisites:[],references:['alphabet','sounds'],
 goals:[goal('names','Различать имена букв и звуки в слове','practice'),goal('spelling','Передавать и восстанавливать написание','practice'),goal('repair','Уточнять непонятое без угадывания','dialogue')],
 explanation:[
  {title:'Что именно мы произносим',text:'В английском алфавите 26 букв, но звуков больше. Буква — знак на странице. Имя буквы — слово для называния знака: A /eɪ/, B /biː/. Фонема — звук, различающий слова: cat /kæt/ и cut /kʌt/. Когда ты говоришь cat, ты не произносишь /siː eɪ tiː/. Когда диктуешь его написание, как раз произносишь имена C-A-T. В приложении «Алфавит» есть все буквы, названия и примеры; сначала просмотри всю таблицу, затем возвращайся к трудным группам.'},
  {title:'Почему нельзя читать по названиям букв',text:'Одна буква может передавать разные звуки: c в cat /k/, но в city /s/. Несколько букв могут передавать один звук: sh в ship /ʃ/. Бывают немые буквы: k в know не произносится. Поэтому запоминай новую единицу вместе с написанием, IPA, записью и значением. Не записывай английское произношение русскими буквами: они скрывают различия, которых в русском нет. На этом шаге не нужно выводить чтение любого слова из алфавита; задача — уверенно передавать написание.'},
  {title:'Группы, которые часто путаются',text:'E /iː/ и I /aɪ/; G /dʒiː/ и J /dʒeɪ/; A /eɪ/ и R /ɑː/; B /biː/, P /piː/, V /viː/. У W имя состоит из нескольких слогов: /ˈdʌbəljuː/. Для Z нормативны UK zed /zed/ и US zee /ziː/. В US R обычно /ɑːr/, O /oʊ/. Выбери удобную модель для собственной речи, но научись узнавать обе. Разница акцентов не является ошибкой.'},
  {title:'Практический механизм уточнения',text:'Если не понял имя, не соглашайся наугад. Сначала попроси повторить: Could you say that again, please? Если всё ещё непонятно, запроси написание: How do you spell it? Затем повтори услышанные буквы и попроси подтвердить: K-A-Y? Для неоднозначной буквы можно дать слово-якорь: B as in book. Слово должно быть известно собеседнику. В условиях плохой связи профессиональные службы используют специальные фонетические алфавиты, но здесь мы тренируем обычный разговор.'},
  {title:'Большие буквы и технические записи',text:'Имена людей и названия городов начинаются с заглавной: Kim, London. Местоимение I всегда заглавное. В коде и паролях регистр может быть значимым: uppercase A и lowercase a. Диктуй только вымышленные идентификаторы: A underscore B, test dot txt. Hyphen — дефис, underscore — подчёркивание, dot — точка. В упражнениях точность записи важнее скорости; время прохождения ничем не ограничено.'}
 ],
 examples:examples(`A /eɪ/; apple /ˈæpəl/.~Имя A и первый звук apple различаются.~Имя буквы не даёт универсального правила чтения.
C-A-T; cat /kæt/.~Написание и произношение слова cat.~Три имени букв не равны трём звукам слова.
My name is Kay. K-A-Y.~Меня зовут Кей. K-A-Y.~Произношение имени не показывает однозначно его написание.
Is that E or I?~Это E или I?~Закрытое уточнение помогает различить конкретные варианты.
B as in book.~B, как в слове book.~Слово-якорь снимает путаницу B/P/V.
How do you spell it?~Как это пишется?~Устойчивая просьба назвать буквы.
Could you repeat the last letter?~Повторите последнюю букву, пожалуйста.~Не нужно повторять всё, если непонятна только часть.
Z: zed or zee.~Два названия Z.~Оба нормативны, связаны с вариантом английского.
Uppercase A, lowercase b.~Заглавная A, строчная b.~Для кода регистр может менять значение.
K-I-M, not K-E-M.~K-I-M, не K-E-M.~Выделяем только исправляемую букву.
Sorry, is that J as in job or G as in go?~Извините, это J как в job или G как в go?~Более сложное уточнение предлагает две ясные альтернативы.
The file is a_b.txt: a, underscore, b, dot, t, x, t.~Имя файла с разделителями.~Не пропускаем знаки и не сообщаем реальные секреты.`),
 banks:[
 bank('P01-letters','practice','Имена букв и восстановление записи','practice',`short~names~Какой букве соответствует имя /eɪ/?~A~Это имя A, не звук каждого написанного a.
short~names~Какой букве соответствует имя /aɪ/?~I~I отличается от E /iː/.
short~names~Какой букве соответствует имя /dʒeɪ/?~J~G имеет имя /dʒiː/.
short~names~Какой букве соответствует имя /dʒiː/?~G~G /dʒiː/ и J /dʒeɪ/ имеют разные гласные в названиях.
short~names~Напиши букву с именем /waɪ/.~Y~В словах y может передавать разные звуки.
short~names~Напиши букву с именем /kjuː/.~Q~Имя Q не равно всей группе qu в quick.
short~names~Выбери имя буквы E: /iː/ или /e/? Введи IPA.~iː|/iː/~/e/ встречается, например, в bed, но это не имя E.
short~spelling~Восстанови имя: /keɪ/ /aɪ/ /em/.~Kim~Последовательность имён букв восстанавливается как K-I-M, без замены I на E.
short~spelling~Восстанови имя: /biː/ /iː/ /en/.~Ben~Последовательность B-E-N образует Ben; имя E — /iː/.
short~spelling~Восстанови слово: /tiː/ /iː/ /eɪ/ /em/.~team~Четыре названные буквы дают team; произношение самого слова — /tiːm/.
short~spelling~Запиши буквы имени Jo через дефис.~J-O~Не G-O: имя начинается с J.
short~spelling~Запиши буквы слова key через дефис.~K-E-Y~При диктовке произносятся имена букв.
short~names~В слове city начальная c — /k/ или /s/?~s|/s/~City начинается с /s/; cat с /k/.
short~names~В ship букв 4. Сколько фонем в /ʃɪp/?~3|three~Sh обозначает одну фонему /ʃ/.
text~repair~Ты расслышал B или V. Напиши конкретное уточнение.~Is that B as in book or V as in very?~Есть два ясно названных варианта и просьба подтвердить; возможны другие формулировки.
text~repair~Почему ответ yes без уточнения плохо помогает при непонятном имени?~It may confirm the wrong name. I can ask how to spell it.~Нужно объяснить риск неверной записи и предложить уточнение, на русском или английском.`),
 bank('P01-letters','reading','Чтение: бейджи для новой команды','reading',`short~spelling~What is Kim’s family name? Введи одно слово.~Lee~В карточке Kim указан family name Lee.
short~spelling~What is Jo’s first name?~Jo~Jo — имя, Stone — фамилия.
short~spelling~Напиши правильное имя Kay.~Kay~В сообщении исправлено Key на Kay.
short~spelling~Какая средняя буква у Kay?~A~В K-A-Y средняя буква A, не E: это исправление прямо дано в диалоге.
short~spelling~Какой символ разделяет kim и lee в вымышленном username? Назови по-английски.~underscore~Kim underscore lee.
short~names~Как называется заглавная буква по-английски? Ответ из одного слова из текста.~uppercase~Uppercase K — заглавная K.
short~names~Как называется строчная буква по-английски?~lowercase~Lowercase j — строчная j.
text~repair~Почему Jo задаёт вопрос о фамилии, хотя слышит имя?~A first name and a family name are different fields.~Нужно различить два поля, а не придумать третьего человека.
text~repair~Напиши ответ на Could you spell Lee?~L-E-E.~Все три буквы на месте; произношение проверяется отдельно.
text~repair~Составь короткое уточнение для исправления Key → Kay.~Is the middle letter A, not E?~Указана именно изменяемая буква и запрошено подтверждение.`,
 `Welcome to the team. Please check your badge.
First name: Kim. Family name: Lee. Username: kim_lee.
First name: Jo. Family name: Stone. Username: jo_stone.
Kim: My first name is Kim: K-I-M. My family name is Lee: L-E-E.
Jo: Sorry, is Lee your first name?
Kim: No. Lee is my family name. Kim is my first name.
Kay: My badge says Key, but my name is Kay. The middle letter is A, not E.
Jo: K-A-Y?
Kay: Yes, thank you.
Kim: My badge has an uppercase K. My username has a lowercase k and an underscore. The usernames here are examples, not passwords.`),
 bank('P01-letters','dialogue','Уточнение и диктовка с собеседником','speaking',`speech~spelling~Назови по буквам вымышленное имя Max; партнёр записывает без подсказки.~M-A-X.~Слушатель восстановил все буквы; не просто увидел текст.
speech~spelling~Продиктуй Lee, затем Lea; попроси партнёра назвать отличие.~L-E-E; L-E-A.~Последняя буква различима, оба имени восстановлены.
speech~names~Произнеси E, I, A в разном порядке; партнёр записывает порядок.~E /iː/, I /aɪ/, A /eɪ/.~Проверять слуховую различимость, не скорость.
speech~names~Продиктуй G и J, затем уточни их словами go и job.~G as in go; J as in job.~Различимы /dʒiː/ и /dʒeɪ/.
speech~repair~Партнёр называет незнакомое имя. Попроси повторить и назвать буквы.~Could you say that again? How do you spell it?~Два осмысленных хода диалога, не один монолог.
speech~repair~Партнёр диктует P, ты услышал B. Проверь, не угадывай.~Is that P as in pen or B as in book?~Есть явная проверка неоднозначной буквы.
speech~spelling~Продиктуй вымышленное имя файла a_b.txt.~A, underscore, B, dot, T, X, T; lowercase letters.~Переданы все символы и регистр; не использованы реальные секреты.
speech~repair~Попроси повторить только последнюю букву длинного имени.~Could you repeat the last letter, please?~Не нужно повторять понятную часть; вежливое уточнение.
speech~names~Партнёр говорит zee, а ты привык к zed. Подтверди букву и объясни различие.~Z. Zee is the usual US name; zed is usual in the UK.~Оба нормативных варианта принимаются.
speech~repair~Заверши обмен: партнёр исправил ошибку в твоей записи. Прочитай запись обратно и поблагодари.~K-A-Y. Is that right? Thank you.~Исправление реально внесено и подтверждено; нужна ответная реплика партнёра.`)
 ],
 tests:[exam('P01-letters','a',`short~names~Напиши букву с именем /ef/.~F~Имя F — /ef/; сам звук f в слове обычно /f/, без начального гласного.
short~names~Напиши букву с именем /tiː/.~T~T /tiː/ отличается от D /diː/ начальным согласным имени буквы.
short~names~Какой первый звук в cat: /k/ или /s/?~k|/k/~C в cat передаёт /k/.
short~spelling~Восстанови имя: /es/ /eɪ/ /em/.~Sam~Имена букв /es eɪ em/ дают S-A-M, то есть Sam.
short~spelling~Запиши имя Ann буквами через дефис.~A-N-N~Ann пишется с двумя n: при диктовке нельзя потерять повторённую букву.
short~spelling~Запиши слово job буквами через дефис.~J-O-B~Job начинается с J; в диктовке /dʒeɪ əʊ biː/.
short~names~Запиши одно нормативное UK-имя Z латиницей.~zed~US zee тоже нормативно, но здесь запрошено UK.
short~names~Сколько фонем в she /ʃiː/?~2|two~Sh — одна согласная фонема.
text~repair~Ты записал Dan, но собеседник сказал, что первая буква другая. Напиши уточнение.~Could you repeat the first letter, please?~Уточнение направлено на первую букву; грамматичная вежливая формулировка.
text~repair~Напиши диалог из 4 реплик: незнакомое имя, запрос написания, буквы, подтверждение.~My name is Pat. / How do you spell it? / P-A-T. / Pat. Thank you.~Четыре связанные реплики, имя соответствует буквам, подтверждение не формальное.
speech~spelling~Продиктуй партнёру note.md, не показывая запись.~N-O-T-E, dot, M-D; lowercase.~Слушатель восстановил имя файла и точку. Нужна слуховая проверка.
text~names~Объясни на примере A, почему знать алфавит недостаточно для чтения любого слова.~A is /eɪ/ as a letter name, but apple starts with /æ/.~Различены буква, её имя и звук в слове; допускается русский ответ.`),
 exam('P01-letters','b',`short~names~Напиши букву с именем /el/.~L~L называется /el/, а I — /aɪ/: не смешивай строчную l и заглавную I.
short~names~Напиши букву с именем /viː/.~V~V /viː/ отличается от B /biː/ способом образования начального согласного.
short~names~Какой начальный звук в go: /ɡ/ или /dʒ/?~ɡ|g|/ɡ/|/g/~G в go передаёт /ɡ/.
short~spelling~Восстанови имя: /en/ /iː/ /diː/.~Ned~Имена букв /en iː diː/ дают N-E-D: Ned.
short~spelling~Запиши имя Eva буквами через дефис.~E-V-A~Eva содержит E, V, A; при диктовке важно различить V и B.
short~spelling~Запиши слово web буквами через дефис.~W-E-B~Имя W /ˈdʌbəljuː/.
short~names~Запиши обычное US-имя Z латиницей.~zee~UK zed тоже нормативно; здесь запрошено US.
short~names~Сколько фонем в key /kiː/?~2|two~Три буквы передают две фонемы.
text~repair~Ты не различил M и N в конце фамилии. Напиши уточнение с двумя вариантами.~Is the last letter M or N?~Есть локализация непонятного места и два варианта.
text~repair~Напиши диалог из 4–6 реплик, где при диктовке исправляют одну букву.~My name is Tim. / T-E-M? / No, T-I-M. / Tim. Thank you.~Ошибка, исправление и подтверждение согласуются по смыслу.
speech~spelling~Продиктуй партнёру lab_2, не показывая запись.~L-A-B, underscore, two; lowercase.~Переданы буквы, подчёркивание и цифра, слушатель восстановил запись.
text~names~Объясни, почему буква c звучит по-разному в cat и city.~The letter c represents /k/ in cat and /s/ in city.~Различено написание и фонемная реализация; не нужно придумывать универсальное правило для всех c.`)]
};

const sounds={
 id:'P01-sounds',topic:'P01',title:'Звуковая карта, контрасты и ударение',prerequisites:['P01-letters'],references:['sounds','alphabet'],
 goals:[goal('ipa','Читать IPA и находить звуки в полной карте','practice'),goal('contrast','Различать близкие гласные и согласные','listening'),goal('articulation','Произносить контрасты в словах и фразах','production')],
 explanation:[
  {title:'Карта, а не ещё один алфавит',text:'Приложение «Звуки» содержит 44 позиции традиционной неротической UK-модели: 12 монофтонгов, 8 дифтонгов, 24 согласных. У каждой позиции есть IPA, слово и объяснение артикуляции. Открой таблицу целиком: сначала найди гласные, затем согласные, затем трудные пары. Это инвентарь выбранной модели, а не требование за один подход научиться всем акцентам. В современной речи некоторые различия сливаются; в US часто слышно r после гласного, а в UK-модели car перед паузой /kɑː/.'},
  {title:'Как читать транскрипцию',text:'В /ˈtiːtʃə/ две гласные позиции и два слога. Знак ˈ стоит перед ударным слогом, ː указывает долготу в системе записи. /tʃ/ — одна аффриката, хотя знак составной; /eɪ/ — движение внутри одного слога. /ə/ — schwa, нейтральный безударный гласный, как в конце teacher. В фонемной записи не показывается каждая тонкость реального голоса. В разных словарях bed может быть записано с /e/ или /ɛ/; это не разные английские слова.'},
  {title:'Гласные: что меняется физически',text:'Для /iː/ в sheep язык выше и впереди; для /ɪ/ в ship он ниже и ближе к центру. Разница не сводится к длительности: долгое русское и не гарантирует sheep. В /e/ рот менее открыт, чем в /æ/: pen — pan. В /ʊ/ губы и язык менее напряжены, чем в /uː/: full — fool. /æ/ передний, /ʌ/ более центральный: cap — cup. Сначала найди положение, потом перенеси контраст в фразу. Перед глухим согласным гласный обычно короче; это не отменяет его качества.'},
  {title:'Согласные: место и способ образования',text:'Для /θ/ и /ð/ язык у края верхних зубов, воздух проходит с трением; /ð/ с голосом. Не заменяй их автоматически на с, з, т или д. Для /w/ губы округляются, но зубы не касаются губы; для /v/ верхние зубы касаются нижней губы. /ŋ/ образуется задней частью языка и носовым потоком; в sing нет дополнительного /ɡ/. /h/ — выдох, а не сильное русское х. Английский /r/ обычно без вибрации русского р. Полная таблица даёт остальные места образования; выбирай контрасты по своим трудностям.'},
  {title:'Конец слова и ритм фразы',text:'Не теряй последний согласный: bad и bat — разные слова; не добавляй гласный после desk или next. Конечный звонкий может быть частично оглушён, но различие поддерживается и предшествующим гласным; цель — понятность, не чрезмерное напряжение. В слове выделяется ударный слог, в фразе — важная новая информация: My NAME is Kim; my name is KIM. Безударные слова могут ослабляться. Не нужно произносить все слоги одинаково сильно или каждый раз делать паузу между словами.'},
  {title:'Как проверять себя',text:'Сначала слушай запись носителя или преподавателя без текста, выбери значение, затем открой IPA и проверь. Синтетический голос полезен для тренировки, но может отличаться от выбранной модели и не заменяет живые записи. Произнеси пару в случайном порядке: партнёр должен понять, какое слово ты выбрал, не видя экрана. Письменное описание и транскрипт ASR не подтверждают произношение. Ошибки автоматического распознавания не являются доказанными ошибками ученика. Сохраняй замечания слушателя и возвращайся к контрасту на новых словах.'}
 ],
 examples:examples(`ship /ʃɪp/ — sheep /ʃiːp/~корабль — овца~Качество гласного различает слова.
pen /pen/ — pan /pæn/~ручка — сковорода~Для /æ/ рот открыт шире.
cap /kæp/ — cup /kʌp/~кепка — чашка~Меняются переднее/центральное положение языка.
full /fʊl/ — fool /fuːl/~полный — глупец~Не только длительность гласного.
thin /θɪn/ — tin /tɪn/~тонкий — жесть/банка~Трение /θ/ против смычки /t/.
then /ðen/ — den /den/~тогда — логово~Звонкое трение против звонкой смычки.
west /west/ — vest /vest/~запад — жилет/майка~В /w/ зубы не касаются нижней губы.
sin /sɪn/ — sing /sɪŋ/~грех — петь~Носовые образуются в разных местах.
fan /fæn/ — van /væn/~вентилятор — фургон~Глухой /f/ против звонкого /v/.
bad /bæd/ — bat /bæt/~плохой — летучая мышь/бита~Различается конец слова; помогает длительность гласного.
teacher /ˈtiːtʃə/; about /əˈbaʊt/~учитель; о/около~Schwa безударный, ударение стоит перед нужным слогом.
This is a thin pen, not a pin.~Это тонкая ручка, не булавка.~В связной фразе одновременно работают /ð/, /θ/ и /e/–/ɪ/.
We need a very wide window.~Нам нужно очень широкое окно.~Переключение /v/ и /w/ без добавления лишних гласных.`),
 banks:[
 bank('P01-sounds','practice','Разбираем фонемы, слоги и артикуляцию','practice',`short~ipa~Сколько фонем в /tʃeə/ в выбранной модели?~2|two~/tʃ/ и /eə/: составные знаки не считаются по символам.
short~ipa~Какой знак обозначает schwa?~ə|/ə/~Безударный центральный гласный.
short~ipa~Сколько слогов в teacher /ˈtiːtʃə/?~2|two~Две гласные позиции.
short~ipa~В about /əˈbaʊt/ ударный слог первый или второй? Введи цифру.~2~ˈ стоит перед /baʊt/.
short~ipa~/eɪ/ — монофтонг или дифтонг?~дифтонг|diphthong~Движение внутри одного слога.
short~contrast~Выбери слово с /ɪ/: sheep или ship.~ship~Sheep содержит /iː/.
short~contrast~Выбери слово с /æ/: cup или cap.~cap~Cup содержит /ʌ/.
short~contrast~Выбери слово с /ʊ/: full или fool.~full~Fool содержит /uː/.
short~contrast~Выбери слово с /θ/: tin или thin.~thin~Tin начинается со смычного /t/.
short~contrast~Выбери слово с /v/: west или vest.~vest~Для /v/ верхние зубы касаются нижней губы.
short~ipa~В sing /sɪŋ/ произносится дополнительный /ɡ/? Напиши yes/no.~no~В этой форме после /ŋ/ нет /ɡ/.
text~articulation~Опиши, что меняется при fan → van.~Включается голос при сохранении зубно-губного трения.~Не нужно менять /f/ на /w/ или добавлять слог.
text~articulation~Почему «произнеси и подольше» недостаточно для ship → sheep?~Меняется также положение языка и качество гласного.~Указана не только длина, но и качество.
text~ipa~Объясни различие /ˈ/ и /ː/ в записи IPA.~ˈ обозначает ударение перед слогом, ː — долготу гласного.~Не путать ударение со скоростью произнесения.
text~articulation~Что должен проверить слушатель в bad — bat?~Какое слово он реально услышал без подсказки; конечный контраст и гласный перед ним.~ASR similarity не заменяет слуховую проверку.`),
 bank('P01-sounds','listening','Слушаем десять контрастов','listening',`short~contrast~Фраза 1: ship или sheep?~sheep~Нужен /iː/. Открывай текст только после прослушивания.
short~contrast~Фраза 2: pen или pan?~pen~В pen звучит /e/; в pan был бы более открытый передний /æ/.
short~contrast~Фраза 3: cap или cup?~cup~В cup звучит центральный /ʌ/; cap содержит передний /æ/.
short~contrast~Фраза 4: full или fool?~full~Full содержит /ʊ/, а fool — /uː/: меняются качество и обычно длительность.
short~contrast~Фраза 5: thin или tin?~thin~Нужно трение /θ/.
short~contrast~Фраза 6: west или vest?~west~Начало /w/, без контакта зубов с губой.
short~contrast~Фраза 7: fan или van?~van~Начало с голосом /v/.
short~contrast~Фраза 8: sip или ship?~ship~Ship начинается с /ʃ/, а sip с /s/: шум образуется в разных местах.
short~contrast~Фраза 9: no или now?~now~Now содержит /aʊ/; no в выбранной UK-модели содержит /əʊ/.
short~contrast~Фраза 10: sin или sing?~sing~Sing заканчивается на заднеязычный носовой /ŋ/; sin на альвеолярный /n/.`,
 'One. A sheep. Two. A pen. Three. A cup. Four. Full. Five. Thin. Six. West. Seven. A van. Eight. A ship. Nine. Now. Ten. Sing.'),
 bank('P01-sounds','production','Произношение с проверкой слушателем','speaking',`speech~articulation~Выбери ship или sheep тайно от партнёра; произнеси слово в This is a ...; партнёр записывает.~This is a ship. / This is a sheep.~Слушатель различает /ɪ/ и /iː/ без экрана; повторить при путанице.
speech~articulation~Чередуй pen/pan в I need a ...; не меняй только длину.~I need a pen. / I need a pan.~Различимы /e/ и /æ/; партнёр выбирает значение.
speech~articulation~Произнеси cap/cup, затем попроси партнёра назвать предмет.~A cap. A cup.~Различимы передний и центральный гласные.
speech~articulation~Сравни full/fool и опиши ощущение положения языка.~Full /fʊl/, fool /fuːl/.~Есть слуховое различие, а не только самоописание.
speech~articulation~Произнеси thin/tin, сохранив трение в первом слове.~Thin /θɪn/, tin /tɪn/.~В thin нет полной смычки /t/.
speech~articulation~Произнеси then/den, сохранив голос в обоих и разные способы образования.~Then /ðen/, den /den/.~В then трение у зубов, в den смычка.
speech~articulation~Произнеси west/vest и We have a van; партнёр проверяет /w/ и /v/.~We have a van.~Зубы не касаются губы в /w/, касаются в /v/.
speech~articulation~Произнеси sing/sin и sing a song без добавочного /ɡ/.~Sing a song.~Сохранён /ŋ/ без лишнего согласного после него.
speech~articulation~Произнеси bad/bat, затем a bad day; не теряй конечный согласный.~A bad day.~Контраст понятен слушателю, нет лишнего гласного после d.
speech~articulation~Скажи My name is Kim дважды: сначала исправь NAME, затем KIM. Партнёр объясняет изменение акцента.~My NAME is Kim. / My name is KIM.~Выделение передаёт разный фокус; нельзя оценить по одному транскрипту.
speech~articulation~Прочти teacher, about, hello по словарю и повтори с безударными слогами.~/ˈtiːtʃə/, /əˈbaʊt/, /həˈləʊ/.~Ударение не одинаково на всех слогах; сверка с живым образцом.
speech~articulation~Сравни car в UK и US по записи; повтори в выбранной модели.~UK /kɑː/, US /kɑːr/.~Принята нормативная модель; отличие акцента не записывается ошибкой.`)
 ],
 tests:[exam('P01-sounds','a',`short~ipa~Сколько слогов в /ˈsɪti/?~2|two~Две гласные позиции.
short~ipa~В /həˈləʊ/ ударный слог какой? Введи цифру.~2~Ударение перед /ləʊ/.
short~ipa~Какой знак в /bʊk/ обозначает гласный?~ʊ|/ʊ/~В book гласный /ʊ/.
short~contrast~Какое слово содержит /iː/: sit или seat?~seat~Sit /sɪt/, seat /siːt/.
short~contrast~Какое слово начинается с /ð/: this или thin?~this~Thin начинается с /θ/.
short~contrast~Какое слово начинается с /w/: wine или vine?~wine~Vine начинается с /v/.
short~ipa~Дифтонг /aɪ/ в my образует один или два слога? Введи цифру.~1~Изменение качества происходит внутри слога.
text~ipa~Объясни, почему звук /j/ в yes не является именем буквы J.~/j/ — согласная фонема, J называется /dʒeɪ/.~Различены фонема и имя буквы; допустим русский ответ.
text~articulation~Опиши артикуляционное различие /θ/ и /t/.~/θ/ имеет трение у зубов, /t/ — смычку у альвеол.~Не сводить к «английский/русский» или громкости.
speech~articulation~Произнеси live/leave в случайном порядке; слушатель записывает слова.~/lɪv/ — /liːv/.~Нужна аудиопроверка различимости /ɪ/ и /iː/.
speech~articulation~Произнеси wet/vet в двух коротких фразах для партнёра.~It is wet. / She is a vet.~Слушатель различил слова без чтения ответа.
text~contrast~Напиши, какие два своих контраста ты пока путаешь и как проверишь их на слух.~Например: /w/–/v/ и /ɪ/–/iː/; слушатель запишет скрытый выбор слова.~Конкретные наблюдения и проверяемая процедура; нельзя выдумывать успешное произношение.`),
 exam('P01-sounds','b',`short~ipa~Сколько слогов в /ˈredi/?~2|two~Две гласные позиции.
short~ipa~В /rɪˈpiːt/ ударный слог какой? Введи цифру.~2~Знак перед /piːt/.
short~ipa~Какой гласный обозначен в /kʌt/?~ʌ|/ʌ/~Cut имеет центральный гласный.
short~contrast~Какое слово содержит /æ/: bed или bad?~bad~Bed /bed/, bad /bæd/.
short~contrast~Какое слово начинается с /θ/: three или tree?~three~Tree начинается с /t/.
short~contrast~Какое слово начинается с /v/: wheel или veal?~veal~Wheel начинается с /w/.
short~ipa~Сколько фонем в /dʒɒb/?~3|three~Три фонемы: /dʒ/, /ɒ/, /b/. Аффриката /dʒ/ считается одной.
text~ipa~Объясни роль schwa в слове /əˈɡen/.~Первый гласный безударный нейтральный /ə/, второй слог ударный.~Не называть schwa немой буквой: это произносимый звук.
text~articulation~Опиши разницу /n/ и /ŋ/.~Воздух носовой в обоих; смычка у альвеол или задней частью языка.~Указано место образования, не только написание n/ng.
speech~articulation~Произнеси pull/pool; партнёр выбирает услышанное без текста.~/pʊl/ — /puːl/.~Есть различие качества гласных, проверенное слушателем.
speech~articulation~Произнеси three trees, сохранив /θ/ и /t/.~Three trees.~Не добавляй гласный между согласными; оценка требует звука.
text~contrast~Составь план проверки одного контраста: образец, скрытый выбор слова, обратная связь, новое применение.~Слушаю образец; произношу выбранное слово; слушатель записывает; исправляю и проверяю в новой фразе.~Все четыре действия конкретны; ASR не указан как сертификация фонетики.`)]
};

const be={
 id:'P01-be',topic:'P01',title:'Кто я и кто рядом: местоимения и am/is/are',prerequisites:['P01-letters'],references:['tenses'],
 goals:[goal('agreement','Выбирать am/is/are по подлежащему','practice'),goal('sentence','Строить утверждения и сокращения','practice'),goal('meaning','Различать имя, роль и происхождение','reading')],
 explanation:[
  {title:'Почему нельзя просто перевести «я Анна»',text:'В русском «я Анна», «он дома» и «мы готовы» часто не содержат отдельного глагола в настоящем. В английском нейтральном полном предложении нужен be: I am Anna; he is at home; we are ready. Смысловая схема: о ком говорим → связывающий глагол → кто это, какой он или где он. Be здесь не действие «заниматься», а связь с характеристикой. Нельзя просто добавить любой другой глагол: I work a teacher неверно для «я учитель»; I am a teacher.'},
  {title:'Местоимение заменяет названного участника',text:'I — говорящий; you — собеседник или несколько собеседников; he/she — человек, о котором говорят, с уместным выбранным местоимением; it — предмет, ситуация, обычно животное, когда не подчёркивается его личность; we — говорящий вместе с кем-то; they — несколько людей/предметов. They также используется для одного человека, если пол не уточнён или это его местоимение; согласование остаётся they are. Не угадывай местоимение реального человека по имени. В учебных заданиях нужный контекст задан явно.'},
  {title:'Три формы вместо одного русского «есть»',text:'I am; he/she/it is; you/we/they are. Имя одного человека ведёт себя как he/she: Kim is here. Два человека вместе — как they: Kim and Lee are here. My name is Kim: подлежащее name, а не my, поэтому is. My friends are here: friends множественное. Чтобы выбрать форму, найди всё подлежащее и определи его число, а не смотри только на ближайшее слово. В I and my friend порядок лучше my friend and I, и вместе мы — we are.'},
  {title:'Сокращение сохраняет грамматику',text:'I am → I’m; you are → you’re; he is → he’s; she is → she’s; it is → it’s; we are → we’re; they are → they’re. Апостроф показывает пропуск букв. Полные формы подходят для обучения и акцента; сокращения обычны в разговоре и неформальном письме. I’m и my не взаимозаменяемы: I’m Kim = я Ким; my name = моё имя. You’re = you are, your = твой/ваш перед существительным. It’s = it is, its = его/её о предмете; на этом этапе учись различать, не пытаясь охватить все значения апострофа.'},
  {title:'Как добавить профессию и место',text:'Имя обычно без a: I am Kim. Профессия — исчисляемое существительное в единственном числе: I am a developer; she is an engineer. A/an выбирается по следующему звуку, не букве: a user начинается с /j/, an engineer — с гласного. Во множественном числе неопределённого a/an нет: we are developers. Происхождение: I am from Georgia. Место сейчас: I am in London. Это разные сведения: человек может быть из Грузии, но сейчас в Лондоне. My city is London грамматично, но I live in London естественнее для постоянного проживания; live подробно придёт в A101.'},
  {title:'Границы этой подтемы',text:'Здесь цель — утвердительное полное предложение и верное согласование, а не сразу вся система be. Отрицания, вопросы и краткие ответы подробно отрабатываются в P04; в следующей подтеме часть вопросов используется как готовые разговорные формулы. Возвращайся к am/is/are в чтении и речи. Не считай, что десять вставленных слов подтверждают самостоятельное владение: в итоговом тесте есть собственные предложения и небольшой текст.'}
 ],
 examples:examples(`I am Kim.~Я Ким.~I требует am; имя без a.
You are a student.~Ты ученик / вы ученик.~You может относиться к одному или нескольким адресатам; форма are.
She is a teacher.~Она учитель.~She + is; профессия с a.
He is an engineer.~Он инженер.~An перед гласным звуком engineer.
It is a book.~Это книга.~It относится к предмету; is.
We are a team.~Мы команда.~Подлежащее we требует are, хотя team единственное.
They are developers.~Они разработчики.~They + are; перед множественным developers нет a.
Kim and Jo are here.~Ким и Джо здесь.~Два участника → are.
My name is Ben.~Меня зовут Бен.~Подлежащее name в единственном числе.
My friends are here.~Мои друзья здесь.~Подлежащее friends во множественном числе.
I’m from Georgia.~Я из Грузии.~I’m = I am; from обозначает происхождение.
We’re in London today.~Мы сегодня в Лондоне.~We’re = we are; место сейчас не равно происхождению.
You’re a new member of our team.~Ты новый участник нашей команды.~You’re — you are; your означало бы принадлежность.
My friend and I are new here, and our teacher is ready.~Мой друг и я здесь новички, а наш учитель готов.~В одном предложении два подлежащих с разным числом.`),
 banks:[
 bank('P01-be','practice','Форма, порядок слов и исправление','practice',`short~agreement~I ___ a learner.~am~С I используется am.
short~agreement~The teacher ___ here.~is~Teacher — один человек.
short~agreement~Kim and Ben ___ friends.~are~Два участника, как they.
short~agreement~My name ___ Jo.~is~Подлежащее name, единственное число.
short~agreement~My friends ___ from Spain.~are~Friends множественное.
short~agreement~You ___ ready.~are~You требует are и для одного адресата.
short~agreement~We ___ a team.~are~Согласуем с we, не с team.
short~agreement~The book ___ new.~is~Book единственное; местоименная замена it.
sentence~sentence~Собери: a / am / I / developer~I am a developer.~Кто → be → роль с a.
sentence~sentence~Собери: from / are / we / Georgia~We are from Georgia.~We + are + from + место происхождения.
sentence~sentence~Исправь: She are a teacher.~She is a teacher.~She — третье лицо единственного числа, поэтому is, не are.
sentence~sentence~Исправь: I Kim.~I am Kim.|I'm Kim.~Нужен be; сокращение допустимо.
sentence~sentence~Раскрой полностью: They’re here.~They are here.~They’re = they are.
sentence~sentence~Сократи местоимение и be: You are ready.~You're ready.~Апостроф на месте пропущенного a.
short~meaning~I am ___ engineer. (a/an)~an~Начальный звук engineer гласный.
short~meaning~She is ___ user. (a/an)~a~User начинается с согласного /j/.
short~meaning~Выбери You’re/Your: ___ name is Jo.~Your~Перед name нужна форма принадлежности.
short~meaning~Выбери You’re/Your: ___ a student.~You're|You are~Здесь нужен глагол are.
text~sentence~Переведи: Мой друг и я — разработчики.~My friend and I are developers.~Два участника, are, множественное developers без a. Допустим иной естественный порядок слов.
text~meaning~Объясни разницу I am from Rome / I am in Rome.~Происхождение из Рима / местонахождение сейчас в Риме.~Нельзя считать два предложения полными синонимами.`),
 bank('P01-be','reading','Чтение: кто в учебной группе','reading',`short~meaning~Who is the teacher? Ответь именем.~Alex~Текст прямо называет Alex учителем.
short~meaning~Who is an engineer?~Mia~Mia is an engineer.
short~meaning~Where is Jo from? Назови страну.~Spain~Jo из Испании, не обязательно сейчас там.
short~meaning~Where are Jo and Mia today? Назови город.~London~Оба сегодня в Лондоне.
short~meaning~What is the name of the group?~First Steps~Это название группы, не имя человека.
short~agreement~Замени Mia and Jo одним местоимением.~they~Несколько участников.
short~agreement~Замени the group одним местоимением в предложении It is new.~it~Здесь группа рассматривается как единое целое.
short~sentence~Раскрой сокращение из текста: We’re.~We are~We — подлежащее множественного числа; we’re раскрывается как we are.
text~meaning~Почему from Spain и in London не противоречат друг другу?~Jo is from Spain, but Jo is in London today.~Различены происхождение и текущее место.
text~sentence~Напиши два предложения о Mia по тексту.~Mia is an engineer. She is from Italy.~Факты согласуются с текстом, обе формы be верны.
text~sentence~Представь группу от лица Jo: 3 предложения с I, we, our teacher.~I am Jo. We are learners. Our teacher is Alex.~Меняются подлежащие и формы; имена и роли не перепутаны.
text~meaning~Чего текст не сообщает: возраст Mia или её профессию? Объясни.~It does not give Mia’s age. It says she is an engineer.~Не угадывай отсутствующую информацию.`,
 `Hello. I am Jo. I am from Spain. I am a learner in a new English group. The name of our group is First Steps.
This is Mia. She is from Italy. She is an engineer. Mia and I are in London today. We are friends, and we are new here.
Our teacher is Alex. Alex is from Canada. Alex is ready, and the book is on the desk. The book is new, but the desk is old.
Mia: We’re a small group, but we’re a team.
Jo: Yes. My name is short: J-O. Mia’s name has three letters: M-I-A. Our first names are on our badges. Our family names are in the class list.
Alex: Welcome. You are learners, and mistakes are part of learning.`),
 bank('P01-be','writing','Свои предложения и редактирование','writing',`text~sentence~Напиши 3 предложения от лица вымышленного Kim: имя, роль learner, происхождение Canada.~I am Kim. I am a learner. I am from Canada.~Есть подлежащее и be, артикль перед ролью, from перед страной.
text~sentence~Представь вымышленную коллегу: Nora, engineer, Italy; используй she.~She is Nora. She is an engineer. She is from Italy.~Is во всех трёх; an перед engineer.
text~sentence~Опиши двух друзей и их общее местонахождение: Ben and Kay, in Rome.~Ben and Kay are friends. They are in Rome.~Множественное подлежащее → are.
text~sentence~Перепиши свой первый ответ с допустимыми сокращениями.~I’m Kim. I’m a learner. I’m from Canada.~Смысл сохранён, апострофы поставлены; исходный ответ не удаляется.
text~agreement~Исправь записку: I is Max. My friends is here. We am ready.~I am Max. My friends are here. We are ready.~Все три согласования исправлены с объяснением.
text~meaning~Составь два предложения, различив your и you’re.~Your name is Kay. You’re a learner.~Your перед существительным; you’re заменяется на you are.
text~meaning~Напиши о вымышленном человеке, который из одной страны, но сейчас в другой.~She is from Spain. She is in Italy now.~From и in соответствуют двум разным фактам.
text~agreement~Напиши по предложению с my friend и my friends.~My friend is here. My friends are here.~Изменены число существительного и форма be.
text~sentence~Соедини два факта с and: I am a learner. My friend is a teacher.~I am a learner, and my friend is a teacher.~Обе части сохраняют подлежащее и глагол.
text~sentence~Напиши связный текст 4–6 предложений о вымышленной группе: роли, место, общая характеристика. Затем выдели все формы be.~We are a small team. I am a developer. My friend is an engineer. We are in Rome. Our teacher is from Canada.~Не набор несвязанных фраз: общие участники, согласование и понятные отсылки. Минимум одна полная и одна сокращённая форма в собственной версии.`)
 ],
 tests:[exam('P01-be','a',`short~agreement~Our neighbours ___ here.~are~Neighbours во множественном числе.
short~agreement~I ___ from Turkey.~am~В настоящем времени be после I имеет специальную форму am.
short~agreement~The new student ___ ready.~is~Student единственное.
short~agreement~My sister and I ___ a team.~are~Два человека; согласование с подлежащим.
short~meaning~Sam is ___ artist. (a/an)~an~Artist начинается с гласного.
sentence~sentence~Собери: are / in / today / they / Paris~They are in Paris today.|Today they are in Paris.~Подлежащее they, форма are, место и время.
sentence~sentence~Исправь: My names is Eva. (одно имя)~My name is Eva.~Name в единственном числе.
sentence~sentence~Раскрой: It’s a new desk.~It is a new desk.~It’s = it is в этом контексте.
text~meaning~Объясни по-русски разницу You’re new / Your new book.~Первое — ты новичок; второе — твоя новая книга, без полного сказуемого.~Различены you are и принадлежность.
text~sentence~Представь двух вымышленных участников клуба в 5–6 предложениях: имена, роли, происхождение, место сейчас.~This is Ali. He is a learner. This is Eva. She is a teacher. They are from different countries. They are in Paris today.~Связный текст, согласование, артикли перед профессией/ролью, from/in по смыслу.
speech~sentence~Представь себя или вымышленного человека устно: имя, роль, место. Партнёр пересказывает факты.~I’m Ali. I’m a learner. I’m in Paris.~Факты понятны слушателю; корректные am/is/are и артикуляция оцениваются по звуку.
text~agreement~Объясни, почему We are a team, а не We is a team.~Форма согласуется с we, а не с существительным после be.~Указано настоящее подлежащее.`),
 exam('P01-be','b',`short~agreement~This computer ___ old.~is~Computer единственное.
short~agreement~You and your friend ___ welcome.~are~Составное подлежащее во множественном числе.
short~agreement~My first name ___ Pat.~is~Подлежащее name.
short~agreement~I ___ a new member.~am~Только am согласуется с I в настоящем времени: I am a new member.
short~meaning~Lee is ___ developer. (a/an)~a~Developer начинается с /d/.
sentence~sentence~Собери: in / is / today / Berlin / our teacher~Our teacher is in Berlin today.|Today our teacher is in Berlin.~Подлежащее целиком our teacher.
sentence~sentence~Исправь: They is engineers.~They are engineers.~С they форма are.
sentence~sentence~Раскрой: He’s from Japan.~He is from Japan.~В этом контексте he’s = he is.
text~meaning~Объясни, почему I’m engineer нужно изменить, а I’m Pat — нет.~Нужно I’m an engineer: профессия исчисляема; имя Pat обычно без артикля.~Различены роль и имя, a/an выбирается по звуку.
text~sentence~Напиши профиль вымышленной команды из трёх человек: 5–7 связанных предложений с I, we, they.~I’m Pat. I’m a learner. My friends are Lee and Bo. They are engineers. We are in Berlin. We are a new team.~Три участника, понятные отсылки, формы be; разные естественные варианты допустимы.
speech~sentence~Устно представь себя и друга; слушатель записывает, кто чем занимается.~I’m a learner. My friend is a teacher. We’re from Japan.~Согласование и факты понятны; без аудио устный навык не подтверждён.
text~agreement~Объясни выбор be в My friend is here / My friends are here.~Число подлежащего меняется: один друг / несколько друзей.~Не объяснять только словом here: место не выбирает is/are.`)]
};

const introductions={
 id:'P01-introductions',topic:'P01',title:'Первое знакомство: понять, ответить, уточнить',prerequisites:['P01-letters','P01-sounds','P01-be'],references:['alphabet','sounds'],
 goals:[goal('understanding','Понимать имена, роли и место в связном сообщении','reading'),goal('interaction','Поддерживать знакомство и исправлять непонимание','dialogue'),goal('writing','Писать связное представление с понятными отсылками','writing')],
 explanation:[
  {title:'Знакомство — обмен, а не заученный монолог',text:'У разговора есть шаги: приветствие → имя/роль → реакция на ответ → встречный вопрос или уточнение → завершение. Реплика должна отвечать на предыдущую. Если человек назвал город, не повторяй механически How do you spell your name? Если не расслышал именно имя, такой вопрос уместен. Твоя задача — выяснить нужные факты и дать собеседнику возможность говорить, а не произнести длинный заранее выученный текст.'},
  {title:'Формулы и степень формальности',text:'Hello — нейтрально, Hi — менее формально. Good morning/afternoon/evening зависят от части дня; Good night обычно прощание перед сном, не приветствие вечером. Nice to meet you — при первом знакомстве; Nice to see you — при новой встрече со знакомым. Thank you — благодарность; You’re welcome — ответ на неё; please — слово в просьбе. Эти формулы учатся целиком, но нужно понимать их функцию: You’re welcome не заменяет Please repeat that.'},
  {title:'Вопросы как опоры',text:'What’s your name? — имя. Where are you from? — происхождение, а не адрес сейчас. What do you do? часто спрашивает о работе/занятии. How do you spell it? — написание. Could you repeat that, please? — просьба повторить. Здесь эти вопросы используются как готовые конструкции; подробный механизм вопросов будет в P04 и A101. Достаточно знать, какое действие выполняет вопрос и какой ответ ему соответствует, не придумывая перевод слово за словом.'},
  {title:'Как не выдумывать недостающую информацию',text:'Если в тексте сказано I’m in London, из этого нельзя заключить, что человек родился в Лондоне или является британцем. Engineer не сообщает возраст или должность руководителя. В упражнениях разделяй «сказано», «можно осторожно предположить» и «неизвестно». При живом разговоре уточни неизвестное, если это уместно; человек вправе не сообщать личные сведения. Для практики можно выбрать вымышленную личность и не раскрывать адрес, фамилию или работодателя.'},
  {title:'Переход от отдельных фраз к тексту',text:'Связный профиль начинается с представления участника, затем даёт роль, происхождение/место и связь с группой. Не начинай каждую строку новым случайным именем. После первого имени можно использовать местоимение, если ясно, к кому оно относится. And соединяет совместимые факты, but противопоставляет: I am new here, but I am ready. Не нужно искусственно удлинять текст: важнее выполнить коммуникативную задачу и не потерять be в середине.'},
  {title:'Самопроверка и отложенное возвращение',text:'Сначала запиши свой вариант без копирования образца. Затем проверь: есть ли имя/роль, верны ли am/is/are, понятны ли ссылки I/we/they, использовано ли уточнение по ситуации. В диалоге попроси партнёра задать непредвиденный вопрос из известных формул. После завершения подтемы отправь итоговый тест; открытые ответы должны получить обратную связь. Через неделю используй другую личность и нового адресата, чтобы проверить навык, а не память о готовом ответе.'}
 ],
 examples:examples(`Hello. I’m Nina.~Здравствуйте. Я Нина.~Нейтральное представление.
Hi, Nina. I’m Omar.~Привет, Нина. Я Омар.~Реакция учитывает имя собеседника.
Nice to meet you.~Приятно познакомиться.~Первое знакомство, не буквальная оценка встречи.
Nice to meet you too.~Мне тоже приятно познакомиться.~Too относится к взаимности реакции.
Where are you from? I’m from Egypt.~Откуда вы? Я из Египта.~Вопрос о происхождении.
I’m in London today.~Я сегодня в Лондоне.~Местонахождение не доказывает происхождение.
What do you do? I’m a developer.~Чем занимаетесь? Я разработчик.~В контексте знакомства вопрос о занятии.
Sorry, could you repeat that?~Извините, повторите, пожалуйста.~Признание непонимания помогает исправить его.
How do you spell Omar? O-M-A-R.~Как пишется Omar?~Запрос написания конкретного имени.
Thank you. You’re welcome.~Спасибо. Пожалуйста.~Ответ на благодарность, не просьба.
I’m new here, but I’m ready to learn.~Я здесь новичок, но готов учиться.~Две части связаны по смыслу.
This is Nina. She’s a learner, and we’re in the same group.~Это Нина. Она учится, и мы в одной группе.~Понятно, к кому относится she и кто входит в we.`),
 banks:[
 bank('P01-introductions','reading','Чтение: встреча в учебном центре','reading',`short~understanding~What is the centre’s name?~Bridge~Название центра Bridge.
short~understanding~Who is a developer?~Omar~Он прямо назван разработчиком.
short~understanding~Where is Nina from?~Poland~Nina говорит from Poland.
short~understanding~Where is Omar from?~Egypt~Omar говорит from Egypt.
short~understanding~Who is the teacher?~Ruth~Ruth представляется учителем.
short~understanding~What is Omar’s badge colour?~blue~Его бейдж синий, Nina — зелёный.
short~understanding~Which name is misspelled on a badge?~Nina~Написано Mina вместо Nina.
text~interaction~Напиши исправление первой буквы имени Nina.~It is N, not M. N as in name.~Исправляется конкретная буква, без смены остальных.
text~understanding~Можно ли узнать из текста возраст Ruth? Обоснуй.~No. Her age is not given.~Не выдуман возраст по роли учителя.
text~understanding~Перескажи в 3–4 предложениях, кто встретился и какая ошибка возникла.~Nina and Omar are learners. Ruth is their teacher. Nina’s badge says Mina. She corrects the first letter.~Правильные роли и причинно связанная ошибка.
text~interaction~Почему Nice to meet you подходит Nina и Omar?~They are meeting for the first time.~В тексте явно первая встреча.
text~writing~Напиши короткую записку организатору с просьбой исправить бейдж, не сообщая лишних личных данных.~Hello. My name is Nina, not Mina. Please change the first letter to N. Thank you.~Имя и исправление ясны, просьба вежлива; лишние данные не требуются.`,
 `Nina and Omar are at Bridge, a small learning centre in London. It is their first meeting.
Nina: Hello. I’m Nina. I’m from Poland, and I’m a learner here.
Omar: Hi, Nina. I’m Omar. I’m from Egypt. I’m a developer, but I’m a beginner in this English group.
Nina: Nice to meet you. Your badge is blue. Mine is green.
Omar: Nice to meet you too. Sorry, your badge says Mina. Is that right?
Nina: No, my name is Nina. The first letter is N, not M. N as in name.
Omar: N-I-N-A?
Nina: Yes. Thank you.
Ruth: Welcome. I’m Ruth, your teacher. We are a small group. You can ask for repetition at any time.
Omar: Good. I am ready to learn, but I need help with spelling.
Nina: Me too. We are new here, and we can help each other.`),
 bank('P01-introductions','listening','Аудирование: другая группа, другие факты','listening',`short~understanding~What is the first speaker’s name?~Leo~Это Leo, не Omar из чтения.
short~understanding~Where is Leo from?~Brazil~Он говорит from Brazil.
short~understanding~Where is Leo today?~Rome~Происхождение и место сейчас различаются.
short~understanding~What does Leo do? Одно слово.~designer~Leo называет себя designer; developer был в другом, письменном материале.
short~understanding~What is the second speaker’s name?~Mei~Написание M-E-I.
short~understanding~Where is Mei from?~China~Mei говорит from China.
short~understanding~Who is their teacher?~Sara~Sara — учитель группы.
short~understanding~What colour is Mei’s badge?~red~Mei говорит My badge is red; зелёный бейдж у Leo.
text~interaction~Что Leo уточняет и как получает ответ?~He asks how to spell Mei. She says M-E-I.~Различены запрос написания и запрос повторения целой истории.
text~understanding~Перескажи два факта о Leo и два о Mei, не открывая транскрипт.~Leo is from Brazil and is a designer. Mei is from China and has a red badge.~Факты из аудио; другие четыре верных факта допустимы.`,
 `Leo: Hello. I’m Leo. I’m from Brazil, but I’m in Rome today. I’m a designer.
Mei: Hi, Leo. I’m Mei. I’m from China. I’m a learner in Sara’s group.
Leo: Nice to meet you. Sorry, how do you spell your name?
Mei: M, E, I.
Leo: Mei. Thank you. My name is L, E, O.
Mei: Your badge is green. My badge is red.
Sara: Hello. I’m Sara, your teacher. You are in the right room. Welcome to the group.
Leo: Thank you. We are ready.`),
 bank('P01-introductions','writing','Письмо: от реплики к связному сообщению','writing',`text~interaction~Ответь на Hello, I’m Dana: поприветствуй и представься вымышленным именем.~Hello, Dana. I’m Lee. Nice to meet you.~Ответ связан с репликой, есть собственное представление.
text~interaction~Ответь на Where are you from?; не сообщай текущее местонахождение вместо происхождения.~I’m from Georgia.~From + место; можно использовать вымышленную страну.
text~interaction~Собеседник написал Thank you for your help. Ответь подходящей формулой.~You’re welcome.~Please само по себе не служит обычным ответом на благодарность.
text~interaction~Ты не расслышал профессию, но понял имя. Напиши уместное уточнение.~Could you repeat what you do, please?~Уточняется непонятая часть, а не уже понятное имя.
text~writing~Напиши короткую карточку участника: 4 предложения об имени, роли, происхождении, месте сейчас.~I’m Dana. I’m a designer. I’m from Canada. I’m in Rome today.~Факты связаны, am и артикль на месте.
text~writing~Представь этого участника третьему человеку, используя she или he по выбранной легенде.~This is Dana. She is a designer. She is from Canada. She is in Rome today.~Корректно сменены местоимения и am → is.
text~writing~Соедини две фразы: I am new here. I am ready to learn. Используй but.~I am new here, but I am ready to learn.~Противопоставление понятно, be не потерян.
text~writing~Исправь письмо: Hello. I Ana. I from Spain. My friend are a teacher.~Hello. I am Ana. I am from Spain. My friend is a teacher.~Три исправления с объяснением be и числа.
text~writing~Составь диалог 6 реплик с ошибкой в написании имени и её исправлением.~I’m Ron. / R-O-M? / No, R-O-N. / N as in name? / Yes. / Thank you.~Есть реальное уточнение, исправление и подтверждение.
text~writing~Напиши приветственное сообщение группе: 6–8 предложений, одна просьба об уточнении и один вопрос участникам.~Hello. I’m Ada. I’m a developer. I’m from Poland. I’m new here. Our group is small. Could you repeat the teacher’s name, please? Where are you from?~Связное сообщение, понятный адресат, факты, вопрос и просьба; образец не копировать дословно.`),
 bank('P01-introductions','dialogue','Диалоги и перенос в новую ситуацию','speaking',`speech~interaction~Партнёр представляется Kai. Поприветствуй и представься, затем дождись ответа.~Hi, Kai. I’m Lea. Nice to meet you.~Обмен репликами, а не чтение двух ролей вместо взаимодействия.
speech~interaction~Узнай происхождение партнёра и сообщи своё.~Where are you from? I’m from Spain.~Вопрос и ответ соответствуют факту происхождения.
speech~interaction~Узнай занятие партнёра; после ответа кратко представь его третьему участнику.~What do you do? This is Kai. Kai is an engineer.~Роль пересказана без искажения; согласование is.
speech~interaction~Партнёр намеренно неверно повторяет твоё вымышленное имя. Исправь одну букву.~It is Lea, L-E-A, not Lee.~Слушатель смог исправить запись.
speech~interaction~Попроси говорить или повторить медленнее без извинений за свой уровень.~Could you say that again more slowly, please?~Ясная вежливая просьба; не требуется самоуничижение.
speech~interaction~Партнёр благодарит за исправление. Дай уместный ответ и продолжи разговор.~You’re welcome. Are you new here too?~Ответ на благодарность и связанный вопрос.
speech~interaction~Встреть знакомого, а не нового человека. Выбери уместную формулу.~Nice to see you again.~Отличается от знакомства впервые.
speech~interaction~Расскажи, откуда твой персонаж и где сейчас; партнёр задаёт один неожиданный вопрос из знакомых формул.~I’m from Italy. I’m in Berlin today.~Не смешаны from/in; есть неподготовленная реакция.
speech~interaction~Проведи знакомство двух партнёров, назови их роли и найди общий факт.~This is Lea. She is a learner. This is Kai. He is a learner too.~Местоимения по легенде, общий факт достоверен.
speech~interaction~Повтори знакомство с новой легендой после перерыва: имя, роль, уточнение, благодарность, завершение.~Hello. I’m Bo. I’m a designer. How do you spell your name? Thank you. See you.~Новая легенда без копирования, логичный обмен; результат оценивается по реальному диалогу.`)
 ],
 tests:[exam('P01-introductions','a',`short~understanding~Прочти: I’m Iris. I’m from Greece, but I’m in Oslo today. Назови место сейчас.~Oslo~Сегодня Oslo; происхождение Greece.
short~understanding~По той же записи назови страну происхождения.~Greece~Конструкция from Greece сообщает происхождение; Oslo — место сегодня.
short~understanding~Прочти: This is Ken. He is a nurse. Какова профессия Ken?~nurse~Нельзя подменять профессией из образца.
short~understanding~Известен ли возраст Ken из предыдущей записи? yes/no.~no~Роль не сообщает возраст.
short~interaction~Выбери meet/see для первого знакомства: Nice to ___ you.~meet~Впервые знакомимся.
short~interaction~Выбери please/welcome: Thank you! — You’re ___.~welcome~Ответ на благодарность.
sentence~writing~Собери: from / am / I / Greece~I am from Greece.~Подлежащее и be перед from.
sentence~writing~Исправь: Ken are a nurse.~Ken is a nurse.~Один человек → is.
text~interaction~Ты расслышал Iris как Alice. Напиши обмен из 4–6 реплик, который устраняет ошибку.~I’m Iris. / Alice? / No, Iris: I-R-I-S. / Iris. Thank you.~Ошибка действительно устранена, буквы соответствуют Iris.
text~writing~Напиши 6–8 предложений знакомства для новой учебной группы: собственная вымышленная легенда, роль, происхождение, место, вопрос и просьба повторить.~Hello. I’m Ren. I’m a learner. I’m from Japan. I’m in Oslo today. Our group is new. Where are you from? Could you repeat your name, please?~Связность, выполнение всех пунктов, be/артикли, уместные формулы. Иные грамматичные решения принимаются.
speech~interaction~Проведи знакомство с партнёром по новой легенде. Партнёр меняет один факт и задаёт неожиданный вопрос.~Имя → роль → вопрос → уточнение изменения → подтверждение.~Есть реальное слушание и реакция; запись/живой разговор обязательны.
text~understanding~После диалога запиши 3 установленных факта и 1 то, что осталось неизвестным.~Name: Ren. Role: learner. City today: Oslo. Age: unknown.~Факты соответствуют реальному ответу партнёра, неизвестное не выдумано.`),
 exam('P01-introductions','b',`short~understanding~Прочти: I’m Tom. I’m from Ireland. Today I’m in Madrid. Назови место сейчас.~Madrid~Текущий город Madrid.
short~understanding~По той же записи назови страну происхождения.~Ireland~From Ireland сообщает происхождение; Madrid в другой части — место сейчас.
short~understanding~Прочти: This is Joy. She is an artist. Какова профессия Joy?~artist~Artist, не engineer.
short~understanding~Сообщает ли запись о Joy её город? yes/no.~no~Город не назван.
short~interaction~Выбери meet/see при встрече со знакомым: Nice to ___ you again.~see~Повторная встреча.
short~interaction~Выбери please/welcome: Repeat the last word, ___.~please~Please внутри просьбы.
sentence~writing~Собери: artist / an / is / Joy~Joy is an artist.~An перед гласным в artist.
sentence~writing~Исправь: We is in Madrid.~We are in Madrid.~Подлежащее we требует are, независимо от названия города после in.
text~interaction~Партнёр не понял, Tom или Don. Составь 4–6 реплик с уточнением и подтверждением.~I’m Tom. / Don? / No, Tom: T-O-M. / T as in team? / Yes. / Thank you.~Уточнение решает реальную неоднозначность.
text~writing~Напиши 6–8 предложений от лица организатора о двух новых участниках, затем обратись к ним с вопросом и просьбой уточнить написание.~This is Tom. He is a learner. This is Joy. She is an artist. They are in Madrid today. Welcome to the group. Where are you from? Could you spell your family names, please?~Понятные отсылки, согласование, обе коммуникативные функции; допустимы вымышленные факты.
speech~interaction~Познакомь двух участников, затем пусть каждый задаст тебе вопрос и один раз попросит повторить.~Представление → встречные вопросы → повторение/переформулировка.~Оценка по записи или живой речи; чтение готового текста не равно взаимодействию.
text~understanding~Сравни своё письменное представление и устный обмен: где возникло непонимание и чем ты его исправил?~Партнёр не различил T и D; я назвал букву и слово-якорь.~Конкретное свидетельство, а не утверждение «всё идеально» без данных.`)]
};

letters.banks.push(bank('P01-letters','review','Смешанное повторение после перерыва','review',`short~names~Без таблицы назови букву /ˈdʌbəljuː/.~W~Имя W многосложное; это одна буква, не три.
short~spelling~Восстанови имя /el/ /iː/ /əʊ/.~Leo~L-E-O, три имени букв.
short~spelling~Запиши Mia буквами через дефис.~M-I-A~I имеет имя /aɪ/, не /iː/.
short~names~Какой первый звук в name /neɪm/?~n|/n/~Первый звук /n/; имя буквы N — /en/.
short~names~Какой знак нужно назвать словом underscore: - или _?~_~Дефис - называется hyphen, подчёркивание _ — underscore.
text~repair~Ты понял всю диктовку, кроме второй буквы. Напиши точное уточнение.~Could you repeat the second letter, please?~Не требуется повторять всю последовательность; просьба указывает место.
text~spelling~Создай вымышленное имя файла с точкой и дефисом; запиши словесную диктовку.~my-note.txt: M-Y, hyphen, N-O-T-E, dot, T-X-T.~Все буквы и знаки сохранены; регистр указан при необходимости.
text~names~Возьми key /kiː/ и объясни, почему количество букв и звуков различается.~Three letters represent two phonemes: /k/ and /iː/.~Указаны три буквы и две фонемы, не три имени букв вместо фонем.
speech~repair~После перерыва разыграй новую диктовку имени: партнёр один раз намеренно ошибается.~Пример легенды: May, M-A-Y; партнёр переспрашивает M-E-Y.~Есть проверенное исправление; прежний диалог не читается по памяти.
text~repair~Запиши, что было непонятно в последнем обмене и какое уточнение помогло.~Я путал A и E; уточнил A as in apple и повторил запись.~Конкретное наблюдение; при отсутствии диалога честно указать, что практика ещё не выполнена.`));
sounds.banks.push(bank('P01-sounds','review','Контрасты в новых словах и фразах','review',`short~ipa~Найди ударный слог в /dɪˈveləpə/: введи номер.~2~Знак ˈ перед вторым слогом /ve/.
short~ipa~Сколько слогов в /ˌendʒɪˈnɪə/ в традиционной UK-записи engineer?~3|three~Три гласные позиции: /e/, /ɪ/, /ɪə/; главное ударение на последнем слоге.
short~contrast~Выбери слово с /ʊ/: look или Luke.~look~Look /lʊk/, Luke /luːk/.
short~contrast~Выбери слово с /æ/: man или men.~man~Man /mæn/, men /men/.
text~ipa~Найди на полной карте /ʒ/ и приведи слово, не используя пример vision.~Beige /beɪʒ/.~Нужен действительно /ʒ/, не /dʒ/; принимаются другие верные слова.
text~articulation~Опиши /h/ в hello так, чтобы не заменить его русским х.~Мягкий выдох перед гласным, без сильного заднеязычного трения.~Описание применимо к собственной артикуляции; звук оценивается отдельно.
speech~articulation~Произнеси cheap/chip; слушатель восстанавливает порядок скрытых слов.~Cheap /tʃiːp/, chip /tʃɪp/.~Контраст качества и длительности гласных на новом материале.
speech~articulation~Произнеси fine/vine в двух фразах; проверь участие голоса.~It is fine. This is a vine.~Не смешивать /f/–/v/ с /w/; слушатель различает слова.
speech~articulation~Произнеси desk, next и a new desk без добавочного слога после конечных согласных.~Desk /desk/, next /nekst/.~Гласный после конечного кластера не добавляется; темп можно уменьшить.
text~contrast~Сравни свою новую попытку с первой: какой контраст стал понятнее слушателю, какой нет?~Слушатель теперь различил cheap/chip, но попросил повторить fine/vine.~Нужны наблюдения или честная отметка, что аудио ещё не проверено.`));
be.banks.push(bank('P01-be','review','Смешанная практика без опоры на образец','review',`short~agreement~The two screens ___ new.~are~Two screens — множественное число.
short~agreement~Our project ___ small.~is~Project — единственное число.
short~meaning~He is ___ English teacher. (a/an)~an~Артикль выбирается по следующему звуку English, не teacher.
sentence~sentence~Исправь: Your a new member.~You're a new member.|You are a new member.~Здесь нужен you are, а не притяжательное your.
sentence~sentence~Собери: friend / my / here / and / are / I~My friend and I are here.|I and my friend are here.~Составное подлежащее требует are; My friend and I естественнее.
sentence~sentence~Раскрой: We’re colleagues.~We are colleagues.~We’re = we are; colleagues множественное без a.
text~meaning~Придумай две фразы о месте и происхождении человека, не используя Rome или Georgia.~I am from Canada. I am in Berlin today.~From и in не перепутаны; новый пример действительно самостоятельный.
text~sentence~Измени I am a learner так, чтобы речь шла о трёх людях вместе с тобой.~We are learners.~Изменены местоимение, форма be, число существительного; a убран.
text~sentence~Напиши 4 предложения о предметах и людях вокруг вымышленного рабочего места.~The desk is old. The screens are new. My colleague is here. We are ready.~Есть единственное и множественное число; не требуется раскрывать реальные рабочие данные.
speech~sentence~Представь маленькую группу без записи; партнёр меняет одного участника и просит обновить рассказ.~We are learners. Our teacher is Jo. Now Ben is here too.~Грамматика переносится в изменённую ситуацию; оценивается реальная речь.`));
introductions.banks.push(bank('P01-introductions','review','Перенос: новое знакомство после перерыва','review',`text~interaction~Знакомый человек пишет Hello again. Ответь с уместной формулой встречи.~Hello. Nice to see you again.~See, а не обязательное meet: вы уже знакомы.
text~interaction~Человек поблагодарил за помощь и сразу задал вопрос о твоей роли. Ответь на обе части.~You’re welcome. I’m a developer.~Благодарность и содержательный вопрос не игнорируются.
text~understanding~Прочти: Val is a teacher from France. Val is in Lisbon today. Назови 2 известных факта и 1 неизвестный.~Val is a teacher and is in Lisbon today. Val’s age is unknown.~Разрешены другие два сообщённых факта; неизвестное не додумывается.
text~writing~Представь Val третьему участнику, не угадывая личное местоимение по имени.~This is Val. Val is a teacher from France. Val is in Lisbon today.~Повтор имени допустим; не нужно выдумывать пол.
text~interaction~Напиши уточнение: ты расслышал Lisbon или London.~Sorry, are you in Lisbon or London today?~Два конкретных варианта и правильный предмет уточнения.
text~writing~Напиши 5–7 предложений для новой ситуации: первый день в клубе, не на работе.~Hello. I’m Kit. I’m a new member. I’m from Ireland. I’m in Lisbon today. I’m ready to learn. What’s your name?~Новый адресат и ситуация; факты и вопрос логически связаны.
speech~interaction~Познакомься с партнёром, не повторяя имена и профессии из прежних диалогов.~Используйте новую легенду: Kit, artist; Val, teacher.~Обмен минимум 6 репликами, включая уточнение и ответ на него.
speech~interaction~Партнёр просит повторить всю фразу. Переформулируй её короче, сохранив факт.~I’m an artist from Ireland. → I’m an artist. I’m from Ireland.~Смысл не меняется; речь стала проще для понимания.
text~understanding~После нового диалога запиши, что ты узнал, а о чём партнёр не говорил.~Имя и роль известны, фамилия не называлась.~Запись соответствует состоявшемуся обмену, не образцу.
text~writing~Сравни письменный ответ до и после исправления; объясни два изменения и придумай новый пример каждого.~I Kit → I am Kit; I am artist → I am an artist. Новые примеры: I am Val. I am a teacher.~Сохранены обе версии, объяснены механизмы be и артикля, есть перенос.`));

export default [letters,sounds,be,introductions];

// Original explanations and examples. The scope and external references are explicit.
import {irregularPage} from './irregular.mjs';
import {numberReference} from './numbers.mjs';
import {nounReference,possessionReference} from './nouns.mjs';
import {beQuestionReference} from './be-questions.mjs';
import {presentSimpleReference} from './present-simple.mjs';
import {continuousReference} from './present-continuous.mjs';
import {quantityReference,placeReference} from './quantity-place.mjs';
import {pastSimpleReference} from './past-simple.mjs';
import {personalReference,futureReference} from './future-choices.mjs';
import {perfectReference} from './present-perfect.mjs';
import {comparisonReference} from './comparison.mjs';
import {rulesReference} from './rules-conditions.mjs';
import {pastNarrativeReference,relativeReference} from './story-reference.mjs';
import {patternsReference,phrasalReference,timeReference} from './action-reference.mjs';
const rows = text => text.trim().split('\n').map(line => line.split('~'));
export const alphabet = rows(`A~eɪ~apple /æ/; name /eɪ/
B~biː~book /b/
C~siː~cat /k/; city /s/
D~diː~desk /d/
E~iː~end /e/; he /iː/
F~ef~file /f/
G~dʒiː~go /ɡ/; page /dʒ/
H~eɪtʃ~hello /h/; hour — немая h
I~aɪ~sit /ɪ/; time /aɪ/
J~dʒeɪ~job /dʒ/
K~keɪ~key /k/; know — немая k
L~el~late /l/
M~em~name /m/
N~en~new /n/
O~əʊ~not /ɒ/; go /ɡəʊ/
P~piː~pen /p/
Q~kjuː~quick /kw/
R~ɑː~red /r/; US имя буквы /ɑːr/
S~es~sit /s/; is /z/
T~tiː~team /t/
U~juː~cup /ʌ/; use /juːz/
V~viː~very /v/
W~ˈdʌbəljuː~we /w/
X~eks~box /ks/; exam /ɡz/
Y~waɪ~yes /j/; my /aɪ/
Z~zed~zero /z/; US имя буквы /ziː/`).map(([letter,ipa,example])=>[letter,letter.toLowerCase(),`/${ipa}/`,example]);

export const phonemes = rows(`Гласный~iː~see /siː/~Язык высоко и впереди, губы не округлены. Сравни sit: меняется не только длина.
Гласный~ɪ~sit /sɪt/~Язык чуть ниже и ближе к центру, чем в see; звук не равен русскому и.
Гласный~e~bed /bed/~Передний гласный средней открытости; не превращай в дифтонг. В иной нотации /ɛ/.
Гласный~æ~cat /kæt/~Рот открыт шире, чем для /e/, язык впереди. Сравни cat — cut.
Гласный~ɑː~father /ˈfɑːðə/~Открытый задний гласный, без округления губ; UK car /kɑː/, US обычно с /r/.
Гласный~ɒ~hot /hɒt/~Короткий открытый задний округлённый гласный в выбранной UK-модели; US часто /ɑː/.
Гласный~ɔː~law /lɔː/~Задний округлённый гласный, рот менее открыт, чем для /ɒ/. В ряде US-акцентов сливается с /ɑ/.
Гласный~ʊ~book /bʊk/~Короткий, язык выше и сзади, губы округлены слабее, чем для /uː/; не русское у.
Гласный~uː~food /fuːd/~Высокий округлённый гласный; положение языка в современных акцентах бывает более центральным.
Гласный~ʌ~cup /kʌp/~Центральный открытый гласный под ударением; не заменяй /æ/ из cap.
Гласный~ɜː~bird /bɜːd/~Долгий центральный неокруглённый звук. В US bird обычно имеет r-окрашенный гласный.
Гласный~ə~about /əˈbaʊt/~Schwa: краткий нейтральный безударный гласный. Не произноси каждый безударный слог так же отчётливо, как ударный.
Дифтонг~eɪ~day /deɪ/~Начни примерно с /e/, плавно двигай язык к /ɪ/, не делая второго слога.
Дифтонг~aɪ~my /maɪ/~Открытое начало, движение к /ɪ/; один слог, а не два отдельных гласных.
Дифтонг~ɔɪ~boy /bɔɪ/~Округлённое заднее начало переходит к переднему /ɪ/; сравни boy — buy.
Дифтонг~əʊ~go /ɡəʊ/~Центральное начало переходит к округлённому /ʊ/. Типичная US-нотация /oʊ/.
Дифтонг~aʊ~now /naʊ/~От открытого начала к /ʊ/, губы постепенно округляются; сравни now — no.
Дифтонг~ɪə~near /nɪə/~Традиционная неротическая UK-модель: движение к центру. Современные реализации варьируются; US обычно /ɪr/.
Дифтонг~eə~hair /heə/~Традиционная UK-нотация; в современной речи часто долгий монофтонг. US обычно /er/.
Дифтонг~ʊə~cure /kjʊə/~Традиционная UK-модель; во многих современных вариантах заменяется /ɔː/. Это не обязательный отдельный звук для каждого говорящего.
Согласный~p~pen /pen/~Губы смыкаются и размыкаются, голоса нет; в начале ударного слога обычно есть придыхание.
Согласный~b~book /bʊk/~Та же губная смычка с участием голоса. В конце не заменяй намеренно на /p/.
Согласный~t~team /tiːm/~Кончик языка у альвеол за верхними зубами, смычка без голоса; не добавляй мягкость.
Согласный~d~day /deɪ/~Альвеолярная смычка с голосом. Сохраняй различие bad — bat, в том числе длиной гласного.
Согласный~k~key /kiː/~Задняя часть языка образует смычку с мягким нёбом; глухой звук.
Согласный~ɡ~go /ɡəʊ/~Та же задняя смычка с голосом; не превращай в русский фрикативный г.
Согласный~f~file /faɪl/~Верхние зубы касаются нижней губы, воздух идёт с трением, без голоса.
Согласный~v~very /ˈveri/~Как /f/, но с голосом; зубы касаются губы. Не округляй губы как для /w/.
Согласный~θ~think /θɪŋk/~Кончик языка у края верхних зубов или между зубами; воздух с трением, голоса нет.
Согласный~ð~this /ðɪs/~Положение как у /θ/, но с голосом. Не смыкай язык в /d/ и не заменяй на /z/.
Согласный~s~sit /sɪt/~Узкая струя воздуха у альвеол, без голоса; сравни sip — ship.
Согласный~z~zoo /zuː/~Как /s/, но с голосом. Конечное /z/ важно в is, keys, names.
Согласный~ʃ~she /ʃiː/~Язык немного дальше от зубов, чем для /s/, губы могут слегка округляться.
Согласный~ʒ~vision /ˈvɪʒən/~Звонкая пара /ʃ/; встречается в середине vision и в конце beige.
Согласный~h~hello /həˈləʊ/~Мягкий выдох перед гласным, без заднеязычного трения русского х.
Согласный~tʃ~chair /tʃeə/~Смычка сразу переходит в /ʃ/; одна аффриката, не добавляй гласный между частями.
Согласный~dʒ~job /dʒɒb/~Звонкая аффриката, пара /tʃ/. Буквы j и g могут обозначать этот звук.
Согласный~m~my /maɪ/~Губы сомкнуты, воздух идёт через нос; голос есть.
Согласный~n~name /neɪm/~Язык у альвеол, воздух через нос; сравни sin — sing.
Согласный~ŋ~sing /sɪŋ/~Задняя часть языка закрывает рот, воздух через нос. В sing отдельного /ɡ/ после /ŋ/ нет.
Согласный~l~late /leɪt/~Кончик языка у альвеол, воздух проходит по бокам; конечное l в UK часто более тёмное.
Согласный~r~red /red/~В учебной записи /r/, обычно реализуется как [ɹ]: язык не вибрирует и не ударяет по нёбу.
Согласный~j~yes /jes/~Короткое скольжение, похожее на начало русского й; это не имя английской буквы J.
Согласный~w~we /wiː/~Губы округлены, затем размыкаются к гласному; зубы не касаются губы, в отличие от /v/.`).map(([group,symbol,example,mechanism])=>[group,`/${symbol}/`,example,mechanism]);

export const tenses = [
 ['Present Simple','S + V / V-s; be: am/is/are','S + do/does not + V; be + not','Do/Does + S + V?; Am/Is/Are + S?','Повторение, устойчивое состояние, факт; не обязательно прямо сейчас.','She tests every release. / She does not test on Sundays. / Does she test locally?','She tests (обычно) ↔ She is testing (сейчас).'],
 ['Present Continuous','S + am/is/are + V-ing','S + am/is/are not + V-ing','Am/Is/Are + S + V-ing?','Процесс вокруг сейчас, временность, изменение; также договорённое будущее.','I am fixing a bug. / I am not changing the API. / Are you checking the logs?','I live here (обычно) ↔ I am living here (временно). Состояния типа know обычно не continuous.'],
 ['Present Perfect','S + have/has + V3','S + have/has not + V3','Have/Has + S + V3?','Прошлое связано с настоящим: результат, опыт, незавершённый период, продолжающееся состояние.','We have deployed the fix. / We have not restarted it. / Have you read the report?','I have lost my key (важно сейчас) ↔ I lost it yesterday (завершённое время).'],
 ['Present Perfect Continuous','S + have/has been + V-ing','S + have/has not been + V-ing','Have/Has + S + been + V-ing?','Длительность/процесс до сейчас; возможно только что закончился и виден след.','She has been debugging all morning. / She has not been sleeping well. / Has she been working alone?','I have written three tests (количество/результат) ↔ I have been writing tests (деятельность).'],
 ['Past Simple','S + V2; be: was/were','S + did not + V; be + not','Did + S + V?; Was/Were + S?','Событие или состояние в завершённом прошлом; цепочка событий.','They restored the backup. / They did not lose data. / Did they check the checksum?','После did базовая форма: did go, не did went.'],
 ['Past Continuous','S + was/were + V-ing','S + was/were not + V-ing','Was/Were + S + V-ing?','Процесс в момент прошлого, фон, параллельные процессы.','I was reading when you called. / I was not driving. / Were you waiting outside?','When I arrived, he left (затем ушёл) ↔ he was leaving (процесс уже шёл).'],
 ['Past Perfect','S + had + V3','S + had not + V3','Had + S + V3?','Предшествование опорному моменту в прошлом; не просто очень давнее прошлое.','The job had finished before I logged in. / It had not failed. / Had you saved the file?','The server stopped because the disk had filled up: сначала диск, потом остановка.'],
 ['Past Perfect Continuous','S + had been + V-ing','S + had not been + V-ing','Had + S + been + V-ing?','Длительность процесса до прошлого момента или его тогдашний видимый результат.','We had been waiting for an hour when support replied. / We had not been testing that path. / Had it been raining?','Had repaired (результат) ↔ had been repairing (процесс до тогда).'],
 ['Future Simple (will)','S + will + V','S + will not (won’t) + V','Will + S + V?','Прогноз, обещание, решение в момент речи, готовность; не универсальная форма будущего.','I will call support. / I will not share your password. / Will you help me?','I will call (решение сейчас) ↔ I am going to call (намерение уже есть).'],
 ['Future Continuous','S + will be + V-ing','S + will not be + V-ing','Will + S + be + V-ing?','Процесс в будущий момент или ожидаемый ход событий.','At noon I will be travelling. / I will not be using the server then. / Will you be attending the review?','At six I will write (решение/событие) ↔ will be writing (процесс в шесть).'],
 ['Future Perfect','S + will have + V3','S + will not have + V3','Will + S + have + V3?','Завершённость к будущему ориентиру, часто by.','By Friday we will have tested every endpoint. / We will not have finished by noon. / Will they have arrived by then?','By Friday (к пятнице) ≠ on Friday (в пятницу) ≠ until Friday (до пятницы включительно по длительности).'],
 ['Future Perfect Continuous','S + will have been + V-ing','S + will not have been + V-ing','Will + S + have been + V-ing?','Длительность процесса до будущего ориентира; сравнительно редкая форма.','By June I will have been working here for a year. / I will not have been living here for long. / How long will you have been waiting?','Не используется автоматически со state verbs: will have known, не will have been knowing.']
];

export const referenceSources = [
 ['Cambridge: таблица неправильных глаголов','https://dictionary.cambridge.org/uk/grammar/british-grammar/table-of-irregular-verbs'],
 ['Cambridge: различие lay и lie','https://dictionary.cambridge.org/grammar/british-grammar/word-choice-lay-and-lie'],
 ['Cambridge: IPA и UK/US-аудио','https://dictionary.cambridge.org/help/phonetics.html'],
 ['British Council: фонематическая карта','https://www.teachingenglish.org.uk/teaching-resources/teaching-secondary/teaching-tools/phonemic-chart-english-teachers'],
 ['International Phonetic Association: международная система символов','https://www.internationalphoneticassociation.org/IPAcharts/IPA_charts_TI/IPA_charts_TI.html'],
 ['Cambridge: формы глагола','https://dictionary.cambridge.org/grammar/british-grammar/verb-forms']
];

export const referencePages = [irregularPage,numberReference,nounReference,possessionReference,personalReference,beQuestionReference,presentSimpleReference,continuousReference,quantityReference,placeReference,pastSimpleReference,futureReference,perfectReference,comparisonReference,rulesReference,pastNarrativeReference,relativeReference,patternsReference,phrasalReference,timeReference,
 {id:'alphabet',title:'Алфавит: все 26 букв',intro:[
  'Имя буквы нужно, чтобы продиктовать написание. Звук нужен, чтобы произнести слово. В слове name буква a передаёт /eɪ/, в cat — /æ/, в about — /ə/. Нельзя читать слово как цепочку имён букв.',
  'В таблице даны названия букв в традиционной UK-нотации. В US название O обычно /oʊ/, R /ɑːr/, Z /ziː/. Zed и zee — нормативные варианты, а не правильный и неправильный ответы. Заглавная I — местоимение «я», строчная l — другая буква.',
  'Для диктовки: How do you spell it? — S-A-M. Если символы путаются, уточни B as in book. В технических обозначениях отдельно называй цифры, дефис (hyphen), подчёркивание (underscore), точку (dot). Не нужно публиковать реальные пароли или личный адрес.'
 ],headers:['Буква','Строчная','Имя (IPA)','Буква в словах'],rows:alphabet,practice:[
  ['Назови по буквам API.','A /eɪ/, P /piː/, I /aɪ/.'],['Назови по буквам URL.','U /juː/, R /ɑː/ или /ɑːr/, L /el/.'],['Различи имя E и I.','E /iː/, I /aɪ/.'],['Различи G и J.','G /dʒiː/, J /dʒeɪ/.'],['Различи B, P и V.','/biː/, /piː/, /viː/.'],['Продиктуй вымышленное имя Kim.','K-I-M: /keɪ aɪ em/.'],['Продиктуй буквы в code, затем прочти слово.','C-O-D-E; слово /kəʊd/, не цепочка имён букв.'],['Запиши букву с именем /waɪ/.','Y.'],['Запиши букву с именем /juː/.','U.'],['Назови два нормативных имени Z.','/zed/, /ziː/.'],['Найди в cat и city звуки буквы c.','/k/ и /s/.'],['Попроси повторить последнюю букву.','Could you repeat the last letter, please? — допустимы другие вежливые формулировки.']
 ]},
 {id:'sounds',title:'Карта звуков: традиционная UK-модель 44',intro:[
  'Охват: традиционный учебный набор неротического британского английского, 12 монофтонгов + 8 дифтонгов + 24 согласных. Это карта фонем этой модели, а не перечень всех реальных английских звуков, аллофонов и акцентов. Некоторые современные UK-варианты сливают отдельные дифтонги; US часто сохраняет /r/ после гласного и иначе распределяет гласные.',
  'Косые черты / / обозначают фонемную запись. ˈ ставится перед главным ударным слогом, ˌ — перед второстепенным; ː отмечает долготу в выбранной системе. Длительность зависит и от окружения: перед глухим согласным гласный обычно короче. Противопоставления нельзя свести к правилу «просто растяни русский звук».',
  'В словарях встречаются /e/ и /ɛ/ для bed, /r/ для английского аппроксиманта [ɹ], /i/ в конце happy: это различия уровня и соглашений записи, не повод считать знакомую таблицу неверной. Таблица не заменяет слушание: сравни UK/US записи реальных дикторов в словаре, затем собственную запись с преподавателем.',
  'Работай с одной контрастной парой: послушай без текста → выбери слово → увидь IPA → настрой артикуляцию → произнеси в короткой фразе → получи человеческую обратную связь. Сервис распознавания не измеряет положение языка и не подтверждает освоение фонемы.'
 ],headers:['Группа','IPA','Пример','Как образуется / что различать'],rows:phonemes,practice:[
  ['Сравни ship — sheep; назови различие.','/ɪ/ — /iː/: различаются качество и обычно длительность.'],['Сравни pen — pan.','/e/ — /æ/: в pan рот открыт шире.'],['Сравни cap — cup.','/æ/ — /ʌ/: передний и центральный гласные.'],['Сравни full — fool.','/ʊ/ — /uː/: качество и длительность.'],['Сравни thin — tin.','/θ/ имеет трение у зубов, /t/ — смычку у альвеол.'],['Сравни then — den.','/ð/ — фрикативный, /d/ — смычный.'],['Сравни west — vest.','/w/: округлённые губы; /v/: зубы и нижняя губа.'],['Сравни sin — sing.','/n/ — /ŋ/; в sing /sɪŋ/ нет дополнительного /ɡ/.'],['Сравни sip — ship.','/s/ — /ʃ/: меняется место образования шума.'],['Сравни fan — van.','/f/ — /v/: отсутствие/участие голоса.'],['Найди schwa в about /əˈbaʊt/.','Первый безударный слог /ə/.'],['Прочти bird и car в UK и US по словарю. Что меняется?','В неротической UK-модели /r/ перед паузой не произносится; в типичном US произносится. Оба варианта допустимы.'],['Произнеси bad — bat; сохрани различие в конце.','Различаются /d/ и /t/, гласный обычно длиннее перед /d/. Проверяет слушатель, не ASR.'],['Сравни no — now.','/əʊ/ — /aʊ/ в выбранной UK-модели.'],['Различи английский /h/ и русский х.','В hello /h/ — выдох, без сильного заднеязычного трения.']
 ]},
 {id:'tenses',title:'12 временных и аспектуальных форм',intro:[
  'Это учебная таблица 12 сочетаний времени и аспекта, а не утверждение, что английский имеет 12 морфологических времён. Will — модальный вспомогательный глагол. S = подлежащее, V = базовая форма, V2 = Past Simple, V3 = Past Participle. У регулярного глагола V2 и V3 совпадают; у неправильного могут различаться.',
  'Сначала найди опорное время и смысл: факт, процесс, результат/предшествование или длительность до ориентира. Затем собери вспомогательные глаголы. В вопросе первый вспомогательный идёт перед подлежащим; not ставится после первого. Если вспомогательного нет, в Simple для смысловых глаголов нужен do/does/did. Be — исключение: вопрос без do.',
  'Будущее также выражают be going to (намерение/видимые основания), Present Continuous (договорённость), Present Simple (расписание), be about to (вот-вот), be due to (ожидается по графику). В придаточном времени обычно настоящее: I will call when I arrive, не when I will arrive. В условном if обычное will не ставится только ради будущего; исключения с готовностью и вежливостью изучаются отдельно.',
  'Маркеры помогают, но не выбирают форму за тебя. I lived here for ten years и I have lived here for ten years грамматичны, но первый период завершён, второй связан с сейчас. Слова already, always и tomorrow встречаются с разными формами. Объясняй смысл, не угадывай по одному наречию.'
 ],headers:['Форма','Утверждение','Отрицание','Вопрос','Значение','Примеры','Контраст / ограничение'],rows:tenses,practice:[
  ['She ___ every weekday. (work; привычка)','works — third-person -s.'],['Right now she ___ the logs. (read)','is reading — процесс сейчас.'],['Yesterday we ___ the backup. (restore)','restored — завершённое прошлое.'],['I ___ the file, so you can open it now. (upload; результат)','have uploaded — результат к настоящему.'],['When I called, he ___ . (drive; процесс)','was driving — фон в прошлый момент.'],['The job ___ before we arrived. (finish; предшествование)','had finished — раньше другого прошлого события.'],['She ___ for two hours and is still waiting. (wait; процесс)','has been waiting — длительность до сейчас.'],['They ___ for an hour when the bus came. (wait; процесс)','had been waiting — длительность до прошлого ориентира.'],['I promise I ___ your password. (not share)','will not share / won’t share — обещание.'],['At noon tomorrow I ___ to Rome. (fly; процесс)','will be flying — процесс в будущий момент.'],['By Friday we ___ the report. (finish; завершённость)','will have finished — результат к будущему моменту.'],['By July I ___ here for a year. (work; длительность процесса)','will have been working — длительность до будущего ориентира.'],['Исправь Did she went home?','Did she go home? — did уже несёт прошедшее время.'],['Исправь I will call when I will arrive.','I will call when I arrive. — придаточное времени.'],['Объясни I have read it / I have been reading it.','Первое сообщает о результате; второе — о процессе, не гарантируя завершение.'],['Объясни Why are you being rude? / You are rude.','Временное поведение сейчас / общая характеристика. Continuous со state-like be возможен при таком изменении смысла.']
 ]}
];

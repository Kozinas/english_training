// Contextual vocabulary and reusable chunks; UK citation forms, not an accent score.
const card=(slug,word,ipa,translation,context,kind,note)=>({id:`P04-x-${slug}`,module:'P04',word,ipa:`/${ipa}/`,translation,context,kind,note,accent:'UK'});
export const p04Vocabulary=`quiet~quiet~ˈkwaɪət~тихий~The room beside the stairs is quiet.~прилагательное~Два слога; не quite /kwaɪt/ «довольно; совсем».
busy~busy~ˈbɪzi~занятый; оживлённый~Are you busy now?~прилагательное~После be, без a: I am busy. A busy person — уже именная группа.
free~free~friː~свободный; бесплатный~The seats are free, and the session is free too.~прилагательное~Место может быть незанятым, мероприятие — без платы; смысл определяется контекстом.
available~available~əˈveɪləbəl~доступный; свободный~Is the room available?~прилагательное~О человеке: есть возможность участвовать; о вещи: можно воспользоваться.
unavailable~unavailable~ˌʌnəˈveɪləbəl~недоступный~Why is the room unavailable?~прилагательное~Приставка un- меняет значение; причина недоступности требует отдельного уточнения.
alone~alone~əˈləʊn~один, без других людей~Are you alone?~прилагательное / наречие~Не обязательно lonely «одинокий, испытывающий одиночество».
early~early~ˈɜːli~рано; ранний~Am I early for the session?~слово~Относится ко времени, а не порядку очереди.
outside~outside~ˌaʊtˈsaɪd~снаружи~The guests are outside.~наречие~В этом контексте место, без дополнительного in.
inside~inside~ˌɪnˈsaɪd~внутри~I am inside the room.~слово~Может использоваться с дополнением the room или самостоятельно.
upstairs~upstairs~ˌʌpˈsteəz~наверху; на верхнем этаже~Is room J upstairs?~наречие~Не in upstairs; конкретный этаж лучше уточнить.
downstairs~downstairs~ˌdaʊnˈsteəz~внизу; на нижнем этаже~The tables are downstairs.~наречие~Относительное положение, не универсальный номер этажа.
certain~certain~ˈsɜːtən~уверенный; определённый~I am not certain about the time.~прилагательное~В этом контексте о степени уверенности, не подтверждённый факт.
unknown~unknown~ˌʌnˈnəʊn~неизвестный~The cause is unknown.~прилагательное~Отсутствие данных отличается от доказанного отрицания.
missing~missing~ˈmɪsɪŋ~отсутствующий; пропавший~The cable is missing.~прилагательное~Отсутствие кабеля не доказывает, что устройство сломано.
wrong~wrong~rɒŋ~неверный; не тот~The room number is wrong.~прилагательное~Начальная w не произносится; wrong number может быть существующим, но не нужным номером.
correct~correct~kəˈrekt~правильный~Is the address correct?~прилагательное~В этом примере признак; correct также бывает глаголом «исправлять».
blank~blank~blæŋk~незаполненный; чистый~Are these sheets blank?~прилагательное~Blank page — страница без записи, не отсутствие самой страницы.
occupied~occupied~ˈɒkjəpaɪd~занятый~Two seats are occupied.~прилагательное~Противопоставляется free в смысле свободного места, не бесплатности.
current~current~ˈkʌrənt~текущий; актуальный~Is this the current timetable?~прилагательное~Не путать с currently «в настоящее время»; электрический current — другое значение.
valid~valid~ˈvælɪd~действительный; допустимый~Is this ticket valid?~прилагательное~В техническом контексте valid input — данные, удовлетворяющие правилам.
locked~locked~lɒkt~запертый~Is the door locked?~прилагательное~Конечная группа /kt/; запертая дверь не обязательно неисправна.
unlocked~unlocked~ʌnˈlɒkt~не запертый~The gate is unlocked.~прилагательное~Unlocked не обязательно open: дверь может быть закрыта, но не на замок.
on~on~ɒn~включённый; на~Is the screen on?~слово~Здесь состояние питания, не пространственное «на».
off~off~ɒf~выключенный~The microphone is off.~слово~Off не равно broken; причина выключения может быть неизвестна.
host~host~həʊst~ведущий; принимающая сторона~Who is the host today?~существительное~На встрече — ведущий; в IT host также узел или машина, значение уточняется контекстом.
organiser~organiser~ˈɔːɡənaɪzə~организатор~I am not the organiser.~существительное~UK organiser и US organizer — нормативные варианты написания.
visitor~visitor~ˈvɪzɪtə~посетитель~The two visitors are early.~существительное~Visitor — роль в ситуации, не постоянная характеристика человека.
helper~helper~ˈhelpə~помощник~I am a helper, not the host.~существительное~Единственное исчисляемое: a helper; после not роль может уточняться.
guest~guest~ɡest~гость~Are the guests ready?~существительное~Буква u после g здесь не создаёт отдельный /uː/.
queue~queue~kjuː~очередь~Am I in the right queue?~существительное~Пять букв, одна произносимая слоговая единица; US часто line.
floor~floor~flɔː~пол; этаж~Which floor is room L on?~существительное~Нумерация этажей различается; подтверждай реальную схему здания.
stairs~stairs~steəz~лестница; ступени~The room is beside the stairs.~существительное~Обычно множественная форма; единичная ступень — a step или a stair.
ground-floor~ground floor~ˌɡraʊnd ˈflɔː~входной этаж; первый этаж по русской нумерации~Room L is on the ground floor.~сочетание~В обычной UK-нумерации ниже first floor; в США входной этаж обычно first floor.
lift~lift~lɪft~лифт~Is the lift available?~существительное~UK lift, US elevator; оба варианта поддерживаются в собственной речи.
meeting~meeting~ˈmiːtɪŋ~встреча; совещание~What time is the meeting?~существительное~В этом контексте название события, не форма действия «встречая».
session~session~ˈseʃən~занятие; сессия~How long is the practice session?~существительное~Продолжительность конкретной встречи не задаёт общий объём топика курса.
notice~notice~ˈnəʊtɪs~объявление; уведомление~The notice has no exact time.~существительное~В этом контексте сообщение; notice как глагол означает «замечать».
invitation~invitation~ˌɪnvɪˈteɪʃən~приглашение~Let me check the invitation.~существительное~Сверяй по нему день, час, место и организатора, не додумывай отсутствующее.
duration~duration~dʒʊəˈreɪʃən~длительность~The duration is forty minutes.~существительное~Не starting time «время начала»; оба числа могут присутствовать в одном объявлении. Здесь выбран UK-вариант Cambridge; US обычно начинается /duː/.
price~price~praɪs~цена~The price is unknown.~существительное~How much? спрашивает цену; отсутствие цены не означает бесплатно.
address~address~əˈdres~адрес~Is this the correct address?~существительное~Здесь обычная UK-модель; в других вариантах ударение может отличаться.
badge~badge~bædʒ~бейдж; значок~Whose badge is this?~существительное~Множественное badges /ˈbædʒɪz/ с отдельным слогом.
reception~reception~rɪˈsepʃən~стойка регистрации; приёмная~Where is reception?~существительное~В этом значении место для обращения; есть и другие значения слова.
what~what~wɒt~что; какой~What is your role?~вопросительное слово~Смысл задаётся всей группой: what time, what colour и другие.
who~who~huː~кто~Who is ready?~вопросительное слово~Здесь заменяет неизвестного участника; не добавляй ещё одно he/they.
where~where~weə~где; куда (по конструкции)~Where are the visitors?~вопросительное слово~Where ... from? запрашивает происхождение, не текущее место.
when~when~wen~когда~When is the next session?~вопросительное слово~Ответ может быть днём или моментом; точный час можно уточнить what time.
why~why~waɪ~почему~Why is the door locked?~вопросительное слово~Ожидается причина; because часто вводит ответ.
which~which~wɪtʃ~который; какой из известных вариантов~Which room is ours, A or B?~вопросительное слово~Ограниченный выбор; what не запрещено автоматически во всех похожих ситуациях.
how~how~haʊ~как~How are you today?~вопросительное слово~Самостоятельное how и группы how old/how far задают разные запросы.
how-old~how old~haʊ ˈəʊld~сколько лет~How old is the building?~вопросительная группа~Не разрывай how old связкой; возраст через be.
what-time~what time~wɒt ˈtaɪm~во сколько; который час~What time is the call?~вопросительная группа~Запрос точного момента, не длительности.
how-many~how many~haʊ ˈmeni~сколько (исчисляемых)~How many seats are free?~вопросительная группа~После many обычно множественное исчисляемое существительное.
how-much~how much~haʊ ˈmʌtʃ~сколько (неисчисляемого); сколько стоит~How much is this notebook?~вопросительная группа~Вопрос о цене не требует множественного существительного.
how-far~how far~haʊ ˈfɑː~как далеко~How far is the office from here?~вопросительная группа~Расстояние отличается от времени в пути.
how-long~how long~haʊ ˈlɒŋ~как долго; какой длины~How long is the break?~вопросительная группа~Контекст различает длительность события и физическую длину.
at-work~at work~ət ˈwɜːk~на работе~I am at work today.~выражение~Состояние или место работы; без the в этой устойчивой модели.
in-a-hurry~in a hurry~ɪn ə ˈhʌri~спешить; в спешке~Are you in a hurry?~выражение~Не буквальное нахождение «в» предмете; hurry входит в целую конструкцию.
in-charge-of~in charge of~ɪn ˈtʃɑːdʒ əv~ответственный за; руководящий~Who is in charge of the session?~выражение~Charge здесь не заряд устройства и не цена; сочетание выражает ответственность.
out-of-order~out of order~ˌaʊt əv ˈɔːdə~неисправный~The lift is out of order.~выражение~О приборе — не работает, а не просто нарушен порядок; не равно off.
up-to-date~up to date~ˌʌp tə ˈdeɪt~актуальный; обновлённый~Is the room list up to date?~выражение~Не буквальное «вверх к дате»; перед существительным обычно up-to-date information.
on-the-same-page~on the same page~ɒn ðə ˌseɪm ˈpeɪdʒ~одинаково понимать ситуацию~Are we on the same page about the room and time?~идиома~В разговоре о договорённостях не обязательно означает одну страницу книги.
as-far-as-i-know~as far as I know~əz ˌfɑːr əz aɪ ˈnəʊ~насколько мне известно~As far as I know, the room is free.~выражение~Обозначает ограниченность знания, не доказывает факт; linking r возможно в этой UK-фразе.
not-sure~I’m not sure~aɪm nɒt ˈʃɔː~я не уверен~I’m not sure whether the printer is ready.~разговорная формула~Неизвестность не равна отрицательному ответу о готовности.
let-me-check~let me check~ˌlet mi ˈtʃek~сейчас проверю; дай проверить~Is it room C? Let me check.~разговорная формула~Реальный следующий шаг после сомнения, не выдуманное подтверждение.
is-that-right~is that right?~ɪz ðæt ˈraɪt~верно? я правильно понял?~Room D at eleven — is that right?~разговорная формула~Проверяет общий итог услышанного; right здесь «правильно», не «справа».
what-about~what about ...?~wɒt əˈbaʊt~а что насчёт ...?~What about the time?~разговорная формула~Возвращает разговор к ещё одному аспекту; не полный шаблон для любого wh-вопроса.
by-the-way~by the way~baɪ ðə ˈweɪ~кстати~By the way, who is the host?~выражение~Переход к сопутствующей мысли; не буквальное место у дороги.
just-a-moment~just a moment~ˌdʒʌst ə ˈməʊmənt~минутку; подожди немного~Just a moment. Let me check the list.~разговорная формула~Не обещание строго одной минуты; просьба о короткой паузе.
it-depends~it depends~ɪt dɪˈpendz~зависит от обстоятельств~Is the room free? It depends on the time.~разговорная формула~Глагольная модель подробнее в A101; здесь готовая фраза с уточнением условия.
where-exactly~where exactly?~weər ɪɡˈzæktli~где именно?~In the building. — Where exactly?~уточнение~Короткая реплика естественна после слишком общего ответа; UK linking r возможно.
id-rather-not-say~I’d rather not say~aɪd ˌrɑːðə nɒt ˈseɪ~я предпочту не отвечать~What is your home address? — I’d rather not say.~разговорная формула~Вежливый отказ; личные сведения не обязательны для учебного диалога.`.split('\n').map(row=>{
 const fields=row.split('~');
 if(fields.length!==7||fields.some(field=>!field.trim()))throw new Error('Incomplete P04 vocabulary row');
 return card(...fields);
});

// Original examples and exercises; sources describe usage, not a validated C2 exam.
export const precisionSources=[
 ['Cambridge: only and focus','https://dictionary.cambridge.org/grammar/british-grammar/only'],
 ['Cambridge: negation','https://dictionary.cambridge.org/grammar/british-grammar/negation_2'],
 ['Cambridge: may','https://dictionary.cambridge.org/grammar/british-grammar/may'],
 ['British Council: modals with have','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/modals-have'],
 ['BBC Learning English: needn’t and not need to','https://downloads.bbc.co.uk/learningenglish/eiam/unit-2/200515_needn%27t_vs_not_need_to.pdf'],
 ['Linguistics Beyond and Within: When must not is not forbidden','https://czasopisma.kul.pl/index.php/LingBaW/article/download/17024/14820/76018'],
 ['British Council: present perfect simple and continuous','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect-simple-continuous'],
 ['Cambridge: past continuous or past simple','https://dictionary.cambridge.org/grammar/british-grammar/past-continuous-or-past-simple'],
 ['Cambridge: modality and tense','https://dictionary.cambridge.org/us/grammar/british-grammar/tense'],
 ['Cambridge: Advanced Grammar in Use, official excerpt by Martin Hewings','https://www.cambridge.org/bv/files/7213/7207/9528/advanced_grammar_withouttanswers_9781107613782_excerpt.pdf']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
const headers=['Модель','Авторский пример','Что сообщается','Чего не следует добавлять'];
export const scopePatterns=rows(`not all~Not all checks passed.~Не все успешны.~Не обязательно хоть один успешен.
none~None of the checks passed.~Ни одной успешной проверки в рамке.~Не тот же смысл, что not all.
not both~Not both keys work.~Не оба работают.~Не обязательно ровно один.
neither~Neither key works.~Оба не работают в этой рамке.~Не not both с обязательным одним.
all…not~All the guests did not sign.~Без контекста риск конкурирующих чтений.~Не выбирать число догадкой.
negated speech~I did not say it failed.~Отрицается высказывание.~Не установлен успех.
negative content~I said it did not fail.~Передаётся отрицательное содержание.~Не отсутствие высказывания.
no promise~I did not promise to stay.~Нет обещания остаться.~Не обещание уйти.
negative promise~I promised not to stay.~Обещание не оставаться.~Не простое отсутствие обещания.
no evidence~No damage was recorded.~Нет записи в заданной рамке.~Не гарантированное отсутствие повреждения.
only subject~Only Eli called.~Ограничение круга звонящих.~Не времени звонка.
only mid-position~Eli only checked the list.~Фокус определяется контекстом и акцентом.~Не всегда ближайшее слово и не всегда ошибка.
explicit action~Eli checked but did not approve it.~Разделение действий.~Не ограничение объектов.
explicit object~The list was the only thing Eli checked.~Ограничение объектов.~Не отсутствие одобрения.
even~Even the host was puzzled.~Неожиданное включение.~Причина ожидания неизвестна без контекста.
also~The host was also puzzled.~Добавление.~Не обязательная неожиданность.
just~I just called.~Недавно или лишь позвонил по контексту.~Не единственное чтение вне ситуации.
at least~At least eight replied.~Восемь или больше.~Не строго больше восьми.
at most~At most eight replied.~Восемь или меньше.~Не строго меньше восьми.
exactly~Exactly eight replied.~Точное количество.~Не приблизительная оценка.
shared object~Everyone read the same report.~Общий документ.~A report само не задаёт same или different.
attachment~We met the guide with a camera.~Связь camera нужно выяснить.~Не выдумывать владельца или способ встречи.
inclusive choice~Choose A, B, or both.~Оба тоже разрешены.~Or не всегда исключающее.
inference~Some agreed; in fact, all did.~Some само не исключает all.~Ожидание not all не обязательное следствие.`);
export const modalPatterns=rows(`modal base~She may have left.~Modal + have + V3.~Не may has.
modal process~She may have been waiting.~Возможный прошлый процесс.~Не подтверждённое завершение.
modal passive~It may have been moved.~Возможное прошлое пассивное событие.~Не известный исполнитель.
prohibition~You must not enter.~Запрет в инструкции.~Не прогноз соблюдения.
optional~You do not have to enter.~Нет необходимости.~Не запрет и не факт невхода.
need not~You need not bring paper.~Необязательность.~Не запрещённая бумага.
may not forecast~The hall may not be ready.~Возможно не будет готов.~Не निश्चितная неготовность.
may not rule~Visitors may not enter.~Отказ в разрешении в notice.~Не простая вероятность.
must inference~The light is on; she must be home.~Вывод говорящего.~Не прямое наблюдение.
cannot inference~She cannot be there; she is here.~Отрицательный вывод из рамки.~Посылки тоже требуют достоверности.
must not inference~He must not have seen it.~Контекстный отрицательный вывод, в том числе US.~Не всегда запрет.
could have uncertain~He could have left; we do not know.~Возможное прошлое.~Не доказанное неслучившееся.
could have unused~He could have left, but stayed.~Возможность явно не использована.~Не одна форма, а всё продолжение.
should expectation~It should have arrived by now.~Ожидание по основаниям.~Не подтверждение прибытия.
should criticism~You did not check, though you should have.~Критика с явным отрицательным фактом.~Не любое should have обязательно невыполнено.
needn’t have~I needn't have printed it.~Обычное ретроспективное: сделал зря.~Не просто отсутствие обязанности до события.
didn’t need to~I didn't need to print it, but I did.~Ненужное действие могло состояться.~Не автоматическое didn't do.
might not~She might not attend.~Возможность отсутствия.~Не невозможность присутствия.
cannot~She cannot attend.~Невозможность или запрет по контексту.~Не слабая гипотеза об отсутствии.
choice not to~She could choose not to attend.~Положительная возможность отказаться.~Не то же, что could not attend.
reported modality~He said it might be open.~Чужая оценка в своей рамке.~Не сегодняшняя независимая проверка.
capacity~It can process ten files.~Способность.~Не десять уже обработанных.
future in past~They said it would be ready.~Ожидаемое будущее относительно прошлого.~Не доказанная сегодняшняя готовность.
no fixed percentages~It may help, depending on conditions.~Контекстная возможность.~Не численная шкала modal verbs.`);
export const aspectPatterns=rows(`simple bounded event~She repaired the chair.~Событие целиком в обычном чтении.~Не обязательная последующая приёмка.
progressive~She was repairing the chair.~Внутренняя фаза.~Не гарантированный достигнутый результат.
long simple~She worked there for decades.~Целый длительный период.~Долгота не требует Progressive.
short progressive~The light was flashing.~Процесс или повторение.~Не обязательная большая длительность.
perfect state~I have known her for years.~Продолжающееся состояние.~Не completed knowing.
perfect count~I have written three notes.~Завершённый счёт в рамке.~Не три проверенные записки.
perfect activity~I have been writing notes.~Деятельность.~Не заданный счёт завершённых.
bounded object in process~I have been writing three reports.~Работа над тремя объектами.~Не запрещено и не гарантирует завершения.
ongoing simple~I have lived here for years.~Продолжающийся факт.~Не обязательно переехал.
ongoing progressive~I have been living here for years.~Акцент на течении, иногда временности.~Не обязательный скорый переезд.
recent activity~I have been painting; I am resting now.~Недавняя деятельность.~Не обязательно действие сейчас.
repetition~We have been meeting every Monday.~Повторения с паузами.~Не каждую секунду.
characteristic~She is patient.~Характеристика в контексте.~Не неизменность навсегда.
behaviour~She is being patient today.~Поведение в ситуации.~Не обычно нетерпелива.
opinion~I think it is useful.~Мнение.~Не процесс think about.
deliberation~I am thinking about the offer.~Размышление.~Не автоматическое согласие.
positive always~She is always helping us.~Возможна благодарная оценка.~Не обязательная жалоба.
background~I was reading when he arrived.~Приход на фоне чтения.~Не обязательная остановка.
explicit continuation~I continued reading afterwards.~Продолжение дано отдельно.~Не вывод по when.
before relation~They left before I had finished.~Уход раньше завершения.~Не обратная последовательность.
ongoing passive~The hall is being cleaned.~Процесс уборки.~Не ready by definition.
perfect passive~The hall has been cleaned.~Уборка представлена выполненной.~Не formal inspection passed.
state~The hall is clean.~Состояние.~Не известная история исполнителя.
tentative request~I was hoping you could help.~Может быть текущей просьбой.~Не обязательно надежда закончилась.
future result~By six, we will have finished.~Ожидаемый результат к опоре.~Не сегодняшнее свидетельство.
future duration~By six, we will have been working for two hours.~Длительность к будущей опоре.~Не гарантия завершения задачи.`);
export const scopeReference={id:'negation-focus',title:'Область отрицания, кванторы и фокус',intro:['24 показательные модели C201. Это не исчерпывающий перечень всех неоднозначностей или диалектов. Значение, контекстный вывод и установленный факт различаются; где без контекста доступны несколько чтений, сначала уточните намерение.'],headers,rows:scopePatterns,sources:precisionSources,practice:rows(`Not all = none?~Нет.
Not all гарантирует some succeeded?~Нет, логически не гарантирует.
Not both допускает neither?~Да.
Neither из двух допускает одного успешного?~Нет в данном значении.
At least 5 включает 5?~Да.
More than 5 включает 5?~Нет.
At most 5 включает 4?~Да.
Fewer than 5 включает 5?~Нет.
Only Jo called: какой фокус?~Человек.
Jo only called: единственное чтение?~Нет, контекст и ударение задают альтернативы.
Even означает обязательно раздражение?~Нет, неожиданное включение.
I did not promise to stay = I promised not to stay?~Нет.
No record доказывает no event?~Нет автоматически.
Everyone read a report: обязательно same?~Нет.
A or B обязательно исключает оба?~Нет, правило лучше уточнить явно.
Контрастное ударение видно по транскрипту?~Нет, нужно аудио.`)};
export const modalInterpretationReference={id:'modal-interpretation',title:'Модальность: правило, вывод и неизвестное событие',intro:['24 модели формы и интерпретации, не полный перечень всех значений модальных глаголов. Функция, отрицание, время и источник проверяются отдельно; не назначайте постоянные проценты may/might/could и не путайте правило с соблюдением.'],headers,rows:modalPatterns,sources:precisionSources,practice:rows(`She may has left: исправь.~She may have left.
May have being moved: исправь.~May have been moved.
Must not в инструкции: функция?~Запрет.
Do not have to: функция?~Отсутствие необходимости.
May not arrive означает certainly not?~Нет.
May not enter в notice: возможное чтение?~Запрет входа.
Must be home: обязательно наблюдение?~Нет, возможно умозаключение.
Must not have seen: обязательно ошибка?~Нет, возможно отрицательное умозаключение.
Could have travelled всегда не путешествовал?~Нет, возможно неизвестное прошлое.
Should have arrived доказывает прибытие?~Нет, возможно ожидание.
Needn't have printed: обычное ретроспективное чтение?~Напечатал, но зря.
Didn't need to, but did: противоречие?~Нет.
Might not attend = cannot attend?~Нет.
Как явно сказать «можно выбрать не участвовать»?~Could choose not to attend.
Can process 10 означает 10 processed?~Нет.
В процентах may всегда сильнее might?~Нет постоянной численной шкалы.`)};
export const aspectReference={id:'aspect-perspective',title:'Аспект: фаза, результат, повторение и дистанция',intro:['26 смысловых контрастов Simple/Perfect/Continuous и пассива. Полная учебная карта 12 форм — в приложении «Времена»; здесь рассматриваются границы интерпретации, а не все возможные цепочки и стилистические значения.'],headers,rows:aspectPatterns,sources:precisionSources,practice:rows(`Was repairing доказывает repaired?~Нет.
Worked for 20 years обязательно ошибка Simple?~Нет.
Has known требует completed state?~Нет.
Has been writing three reports запрещено?~Нет, но завершение трёх не утверждается.
Has written 3 доказывает approved 3?~Нет.
Has been painting допускает отдых сейчас?~Да.
Have been meeting monthly допускает паузы?~Да.
Is being kind означает normally unkind?~Нет.
Think opinion и think about process: одинаковый аспект?~Не обязательно; значения различаются.
Always + Continuous только раздражение?~Нет.
When гарантирует остановку фона?~Нет.
They left before I had finished: что раньше?~Уход.
Is being cleaned / has been cleaned: различие?~Процесс / выполненная уборка в текущей рамке.
Cleaned гарантирует formal approval?~Нет.
Was hoping может быть текущей просьбой?~Да.
Will have finished — уже проверенный результат?~Нет, будущая перспектива.`)};

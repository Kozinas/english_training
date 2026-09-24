// Original examples; reference links verify usage, not a licence to reproduce lessons.
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const writingSources=[
 ['British Council: articles','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-a-an-the'],
 ['Cambridge: countable and uncountable meanings','https://dictionaryblog.cambridge.org/2018/03/21/countable-or-uncountable-and-why-it-matters/'],
 ['Cambridge: contrasting conjunctions','https://dictionary.cambridge.org/us/grammar/british-grammar/conjunctions-contrasting'],
 ['Cambridge: despite, whereas and linking ideas','https://dictionaryblog.cambridge.org/2022/11/16/whereas-despite-and-nevertheless-ways-to-link-ideas-1/'],
 ['Cambridge: word formation','https://dictionary.cambridge.org/us/grammar/british-grammar/word-formation'],
 ['Cambridge: collocation','https://dictionary.cambridge.org/us/dictionary/english/collocation'],
 ['Purdue OWL: paragraphs','https://owl.purdue.edu/owl/general_writing/academic_writing/paragraphs_and_paragraphing/index.html'],
 ['British Council: English for emails','https://learnenglish.britishcouncil.org/en/english-emails'],
 ['British Council: B1 writing','https://learnenglish.britishcouncil.org/free-resources/writing/b1'],
 ['British Council: explaining a problem by email','https://learnenglish.britishcouncil.org/free-resources/writing/b1/email-explain-accommodation-problem']
];
export const cohesionPatterns=rows(`new item~We need a reviewer.~Один представитель, пока не идентифицирован.~A/an + singular countable.~Не любое первое упоминание требует a.
known item~The reviewer you recommended is free.~Адресат может определить человека.~The + идентифицируемая группа.~Новое упоминание тоже может быть определённым.
general plural~Reviewers need clear instructions.~Обобщение.~Plural без артикля — базовая модель.~Не утверждает одинаковое свойство всех людей без исключения.
general uncountable~Feedback helps us improve.~Материал/информация в общем.~Без a/an.~Не feedbacks в обычном рабочем смысле.
specific uncountable~The feedback from Jo is useful.~Конкретная известная обратная связь.~The совместим с uncountable.~Не запрет любого артикля.
determiner~My draft is ready.~Притяжательный определитель.~Не the my draft.~Притяжательные и артикли здесь не суммируются.
sound~a useful note; an honest reply~A/an по первому звуку следующего слова.~Не только буква.~The тоже имеет слабые/сильные формы.
head noun~The list of changes is short.~Согласование с list.~Не с ближайшим changes.~В The changes in the list are minor главное слово другое.
it~I read a note. It was clear.~Тот же предмет.~Число и референт должны совпадать.~При двух note уточнить имя.
they~The notes arrived. They are attached.~Те же предметы во множественном.~Не it.~They также обозначает человека без указания пола.
this summary~The room is unavailable. This problem needs a decision.~This + имя называет предыдущую ситуацию.~Помогает избежать голого неоднозначного this.~Не выдумывать новую причину.
one/ones~I need a shorter one.~Замена countable noun.~One draft / two shorter ones.~Не some useful ones вместо information.
another~We need another example.~Ещё один/другой singular.~Another + singular countable.~Не another informations.
other/the other~Other options exist. Of these two, the other option is cheaper.~Other неопределённые; the other оставшийся в заданной группе.~Контекст задаёт группу.~Не всегда ровно два во всех конструкциях с other.
topic~The main problem is the unclear deadline.~Назвать фокус абзаца.~Читатель понимает цель.~Не обязательное первое предложение любого жанра.
support~Three replies contain different dates.~Конкретное основание.~Поддерживает тезис о неясности.~Три ответа не все ответы.
example~For example, one note says Friday.~Иллюстрация.~Не полноценная статистика сама по себе.~Example не доказывает всеобщность.
addition~The map is clear. In addition, it shows the side entrance.~Добавление связанного довода.~Самостоятельная связь предложений.~Не украшение без нового смысла.
and~We checked the date and corrected the address.~Соединение равноправных частей.~Параллельные формы.~Не случайный набор несвязанных мыслей.
but~The draft is clear, but it lacks a date.~Контраст внутри предложения.~But связывает две части.~Начало предложения с But само по себе не ошибка.
although~Although it is short, it includes the key facts.~Уступка + главная часть.~Не although ... but в одной базовой связи.~Сокращённые clauses возможны, но здесь полная модель.
despite~Despite the delay, we finished the review.~Despite + noun/-ing.~Не despite of.~Despite the fact that + clause — другая допустимая модель.
however~The draft is useful. However, it is incomplete.~Контраст между утверждениями.~Точка или ; перед however при двух независимых clauses.~Не механически вместо but между словами.
because~We asked again because the date was missing.~Причина + clause.~Не дублировать so.~Автор всё равно должен иметь основание причинной связи.
because of~We asked again because of the missing date.~Причина + noun phrase.~Не because of the date was missing.~Because of не указывает виновника автоматически.
so~The date was missing, so we asked again.~Причина → следствие.~Следствие после so.~Последовательность сама по себе не причина.
therefore~The venue is closed. Therefore, this visit cannot take place there.~Вывод из посылки.~Разделить самостоятельные предложения.~Не создавать вывод без основания.
whereas~Option A is cheaper, whereas option B has more seats.~Сопоставление.~Один и тот же критерий при числовом сравнении предпочтителен.~Whereas не сообщает причину.
while~While we waited, we checked the list. / A is cheap, while B is flexible.~Время или контраст.~Смысл определяет контекст.~Не всегда переключатель Continuous.
sequence~First, check the address. Then, send the reply.~Порядок действий.~Не доказательство выполнения.~Не причинное объяснение само по себе.
purpose~We added a map to help visitors.~Цель + to-infinitive.~Цель не гарантирует результат.~To help, не for help visitors.
punctuation~The file is ready; the review is not.~Две самостоятельные части.~Точка также допустима.~Одна запятая без союза — не выбранная нейтральная модель.
parallel list~Please check the date, confirm the room and send a reply.~Одинаковая форма пунктов.~Check/confirm/send.~Не смешивать глагол, -ing и полное предложение без причины.
scope~Two users reported a delay.~Ограниченный объём свидетельств.~Не all users.~Сообщение не устанавливает причину.
recommendation~I suggest the smaller room because it meets our stated needs.~Предложение с основанием.~Критерии читателю известны.~Не автоматически общая договорённость.
revision~We need the latest draft, not an earlier copy.~Проверить предмет, смысл, структуру, потом форму.~Сохранить исходник и новую версию.~Количество связок не измеряет качество текста.`);
export const cohesionReference={id:'text-cohesion',title:'Связный текст: ссылки, абзацы и логические связи',sources:writingSources,intro:['36 опорных моделей для B1: как обозначать предмет, связывать предложения и сохранять границы вывода. Это не исчерпывающий список артиклей, местоимений, союзов и жанров.','Связность требует понятного смысла, а не большого числа however/therefore. Артикль и местоимение проверяйте по тому, что известно читателю.'],headers:['Модель','Пример','Смысл','Устройство','Ограничение'],rows:cohesionPatterns,practice:[['We need ___ editor. (любой подходящий)','an'],['___ feedback you sent is helpful.','The'],['My the draft: исправь.','My draft.'],['The list of tasks ___ clear.','is'],['Information → a useful one?','Нет: useful information / a useful piece of information.'],['Two drafts. Укажи один без неоднозначного it.','The revised draft is ready.'],['Although it is short, but it is clear: исправь.','Although it is short, it is clear.'],['Despite of the delay: исправь.','Despite the delay.'],['Because of it was late: исправь.','Because it was late. / Because of the late hour.'],['However между двумя независимыми clauses: безопасная пунктуация?','Точка или точка с запятой перед however.'],['For example доказывает общее правило?','Нет, это иллюстрация.'],['Что проверяет topic sentence?','Понятен ли фокус абзаца; она не обязана всегда стоять первой.'],['First/then — причина?','Нет, порядок не устанавливает причинность.'],['Two users → all users?','Нет, нельзя расширять объём свидетельств.'],['I recommend — группа уже согласилась?','Нет, предложение отдельно от принятия.'],['Что проверять до запятых?','Цель, точность фактов, адресата и структуру.']]};
export const wordBuildingPatterns=rows(`develop~development~develop a plan~development of the plan~Существительное -ment; не developement.
improve~improvement~improve the wording~a useful improvement~Сохраняется e перед -ment.
decide~decision~decide on a date~make a decision~Не произвольное добавление -ment.
suggest~suggestion~suggest a change~make a suggestion~Suggest -ing/that, не suggest me to.
inform~information~inform the group~useful information~В обычном смысле U.
explain~explanation~explain the problem~a clear explanation~Меняется написание основы.
respond~response~respond to a request~a prompt response~To вводит предмет ответа.
approve~approval~approve the draft~request approval~Запрос одобрения ещё не одобрение.
arrange~arrangement~arrange a meeting~confirm the arrangements~Не путать намерение и подтверждённое время.
discuss~discussion~discuss the issue~a discussion about the issue~Discuss без обязательного about; noun допускает about.
reliable~reliability~a reliable service~service reliability~Adjective → noun, написание меняется.
available~availability~an available room~check availability~Available не означает booked.
responsible~responsibility~be responsible for checking~take responsibility for a task~For + noun/-ing.
possible~possibility~a possible delay~the possibility of a delay~Возможность, не свершившийся факт.
clear~clearly / clarity~explain clearly~improve clarity~Adverb и noun имеют разные роли.
accurate~accurately / accuracy~describe it accurately~check accuracy~Accuracy не доказана самим прилагательным.
useful~usefully / usefulness~a useful example~the usefulness of the example~-ful с одной l; adverb -fully.
successful~successfully / success~complete it successfully~a successful trial~Не succesful; успех только в заданной области.
careful~carefully / care~read it carefully~take care~Наречие при действии.
polite~politely / politeness~ask politely~a polite request~Тон и отношение тоже важны.
happy~happily / happiness~reply happily~personal happiness~Не любое -ly слово наречие.
unreliable~un- + reliable~an unreliable connection~reliability is uncertain~Префикс не подходит к любому прилагательному.
incorrect~in- + correct~an incorrect date~correct the date~Не универсальный выбор un-/in-.
photograph~photography~a photograph~photography club~Ударение PHOtograph → phoTOGraphy; не общее правило каждого суффикса.
make a decision~принять решение~We made a decision after checking the price.~make + decision~Не do в изучаемой коллокации; take a decision тоже встречается.
do research~проводить исследование~We did some research before choosing.~do + research~Research обычно U; carry out/conduct research тоже допустимы.
make progress~продвигаться~We are making progress with the draft.~make + progress~Не a progress в этом смысле.
take responsibility~взять ответственность~I take responsibility for the final check.~take responsibility for~Не означает успешное выполнение автоматически.
pay attention~обратить внимание~Pay attention to the date.~pay attention to~Не pay an attention.
meet a deadline~уложиться в срок~We may not meet the deadline.~meet a deadline~May not не равно точно пропустили срок.
give feedback~дать обратную связь~Could you give feedback on the structure?~feedback on/about~Не a feedback в обычном рабочем значении.
raise a question~поднять вопрос~She raised a question about access.~raise a question~Ask a question — задать конкретный вопрос.
reach an agreement~достичь договорённости~We have not reached an agreement.~reach agreement~Не равно отправить предложение.
solve a problem~решить проблему~The change solved one problem.~solve + problem~Не обещает решения всех проблем.
strong evidence~убедительные свидетельства~We need stronger evidence for that claim.~strong + evidence~Не делать вывод только по естественной фразе.
heavy traffic~плотное движение~Heavy traffic delayed the bus.~heavy + traffic~Не literal heavy по весу.
depend on~зависеть от~The date depends on approval.~depend on~Не выводить предлог из русского вопроса.
interested in~заинтересован в~I am interested in testing the idea.~in + noun/-ing~Не interested to testing.
responsible for~ответственный за~Who is responsible for sending the note?~for + noun/-ing~Не автоматически виновен в любой задержке.
reply to~ответить на~Reply to the latest message.~reply to someone/something~Answer a question без to в этой модели.
look into~изучить проблему~I will look into the missing reply.~look into + object~Проверка ещё не решение.
work out~разобраться, найти решение~We need to work out the next step.~work it out~Здесь не тренировка в спортзале.
follow up on~вернуться к вопросу~I will follow up on the request.~follow up on a request~Обещание продолжить, не ответ получателя.
get to the point~перейти к сути~Please get to the point politely.~whole expression~Может звучать резко; регистр и отношения важны.`);
export const wordBuildingReference={id:'word-building',title:'Сочетаемость и словообразование: рабочие модели B1',sources:writingSources,intro:['24 показательных семейства/модели образования и 20 сочетаний. Это не полный словарь суффиксов, коллокаций или фразовых глаголов.','Проверяйте конкретное слово в словаре: часть речи, значение, исчисляемость, предлог, написание и ударение. Суффикс — подсказка, а не разрешение создавать любое слово.'],headers:['Основа / сочетание','Производное / смысл','Пример / действие','Пример / модель','Ограничение'],rows:wordBuildingPatterns,practice:[['develop → noun','development'],['decide → noun','decision'],['reliable → noun','reliability'],['accurate → adverb','accurately'],['available → noun','availability'],['success → adjective','successful'],['___ research (make/do)','do'],['___ progress (make/do)','make'],['pay attention ___','to'],['depend ___','on'],['responsible ___ checking','for'],['interested ___ learning','in'],['discuss about the date: исправь.','discuss the date'],['Do все действия, make все результаты — абсолютное правило?','Нет, нужно учить конкретные сочетания и варианты.'],['Photograph и photography: ударение?','Первый и второй слог соответственно в выбранной UK-модели.'],['I will look into it = уже решил?','Нет, обещано выяснение.']]};
export const correspondencePatterns=rows(`subject~Review request: community guide, version 2~Тема + предмет + версия.~Помочь адресату понять действие.~Не Urgent без причины и срока.
opening~Hi Lina,~Нейтральное обращение знакомому коллеге.~Имя и запятая.~Dear тоже допустимо, выбор по отношениям.
formal opening~Dear Ms Green,~Более формальное обращение.~Проверить имя/предпочтение.~Не угадывать титул или семейное положение.
purpose~I’m writing to ask for feedback on the introduction.~Цель сразу.~Ask for + noun.~Не длинное вступление без задачи.
context~This is the draft we discussed on Tuesday.~Ориентир для читателя.~Определённый draft + дата.~Tuesday может требовать полной даты в длинной цепочке.
attachment~I’ve attached version 2 for review.~Сообщить предмет вложения.~Attached + object.~Перед отправкой действительно проверить файл.
request~Could you check the two dates?~Конкретное действие.~Could + base.~Вежливая форма не делает требование автоматически разумным.
deadline~Could you reply by 14:00 UTC on 8 October?~Срок ответа с часовым поясом.~By = не позднее.~Это просьба, пока адресат не согласился.
fallback~If that is not possible, please suggest another time.~Возможность уточнения.~Условие + просьба.~Не обещает принятие любого нового времени.
clarification~Do you mean the draft or the approved version?~Устранить неоднозначность.~Назвать обе версии.~Не гадать по слову it.
confirmation~Please confirm whether you can review it.~Запрос ответа да/нет.~Whether + subject + verb.~Не предварительное объявление согласия.
acknowledgement~Thanks, I’ve received the draft.~Подтверждение получения.~Не одобрение содержания.~Не равнозначно reviewed.
acceptance~I can review the first section by Thursday.~Ограниченное согласие.~Предмет + срок.~Не весь документ и не уже выполнено.
limit~I can check the wording, but not the calculations.~Границы работы.~But + параллельные объекты.~Не скрывать недоступную часть.
decline~I’m afraid I can’t review it this week.~Отказ с ясным объёмом.~Can’t + base.~Не обязательно полный отказ от сотрудничества.
alternative~I could review it next Monday instead.~Предлагаемый вариант.~Could — предложение.~Не считать согласованным без ответа.
delay~The review is taking longer than expected.~Статус без выдуманной причины.~Процесс не завершён.~Объяснение причины только при наличии данных.
apology~I’m sorry for sending the wrong version.~Признать конкретную ошибку.~For + -ing.~Не извиняться вместо исправления.
correction~Please use version 3; version 2 is out of date.~Чёткая замена.~Назвать обе версии.~Не удалять историю без необходимости.
follow-up~Could you let me know whether you received my note?~Уточнить получение.~Нейтральный вопрос.~Не обвинение по одному молчанию.
recommendation~I recommend option A for this group.~Рекомендация с критериями.~Recommend noun/-ing/that.~Не recommend you to choose в выбранной нейтральной модели.
trade-off~A is cheaper, whereas B includes support.~Сравнить преимущества/ограничения.~Не скрывать разные условия.~Цена сама не единственный критерий.
closing request~Please confirm the option you prefer.~Следующий шаг.~Действие и адресат ясны.~Не добавлять новую крупную проблему в подписи.
closing~Best regards,~Нейтральное завершение.~Другие формулы допустимы.~Не единственная правильная подпись.
checklist~Recipient, version, facts, action, deadline, tone.~Проверка перед отправкой.~Содержание раньше мелких исправлений.~Учебное письмо не отправляется реальному адресату.
privacy~Use invented names and sample data in practice.~Минимум личных данных.~Синтетические задания.~Не вставлять реальные секреты или клиентские документы.`);
export const correspondenceReference={id:'email-writing',title:'Переписка: цель, просьба, ответ и следующий шаг',sources:writingSources,intro:['26 опорных формул для нейтральной рабочей и клубной переписки B1. Это не все жанры, корпоративные правила или универсальная шкала вежливости.','Сообщение должно помогать адресату действовать: что произошло, что требуется, к какому сроку и какие ограничения остаются. Пишите на вымышленных данных; реальная отправка не часть упражнения.'],headers:['Функция','Формулировка','Цель','Форма','Ограничение'],rows:correspondencePatterns,practice:[['Тема письма для проверки карты версии 3','Review request: map, version 3'],['Ask ___ feedback','for'],['Could you ___ the dates? (check)','check'],['Reply ___ Friday: крайний срок.','by'],['I look forward to ___ from you. (hear)','hearing'],['I’m sorry for ___ the wrong file. (send)','sending'],['Thanks, received = approved?','Нет, только получение.'],['I can check page 1 = весь файл?','Нет, назван ограниченный объём.'],['Молчание = отказ?','Нет, уточнить получение и доступность.'],['Как уточнить it при двух версиях?','Do you mean version 2 or version 3?'],['Отказ на эту неделю и альтернатива','I can’t review it this week. I could help next Monday.'],['Рекомендация уже решение группы?','Нет, нужно подтверждение.'],['Зачем указать часовой пояс?','Чтобы одинаковое время означало один момент для разных участников.'],['Можно ли всегда писать Please kindly urgently?','Не нужно накапливать формулы; важны ясность, отношения и разумный срок.'],['Что проверить при attached?','Что нужный файл действительно приложен и соответствует версии.'],['Какие данные использовать в заданиях?','Вымышленные, без секретов и личной переписки.']]};

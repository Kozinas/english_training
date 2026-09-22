// Original reference tables and examples; these are scoped A1 foundations.
export const futureSources=[
 ['British Council: future forms and arrangements','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-forms-will-be-going-present-continuous'],
 ['British Council: talking about the future','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/talking-about-future'],
 ['British Council: can and could','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/can-could'],
 ['British Council: past ability and specific success','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/past-ability'],
 ['British Council: requests, offers and invitations','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/requests-offers-invitations']
];
export const pronounSources=[['British Council: personal pronouns','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/personal-pronouns']];
export const personalForms=[
 ['I','me','my','mine','I know Jo. Jo knows me. This is my bag; it is mine.','I — деятель; me — объект/после предлога.'],
 ['you','you','your','yours','You help us. We help you. Is this your seat? Is it yours?','You не меняет форму субъекта/объекта; число задаёт контекст.'],
 ['he','him','his','his','He called me. I called him. His desk is small; this chair is his too.','His может стоять и перед существительным, и самостоятельно.'],
 ['she','her','her','hers','She met us. We met her. Her coat is here; the hat is hers too.','Her: объект либо определитель; hers: самостоятельная принадлежность.'],
 ['it','it','its','—','It works. I use it. Its label is blue.','Обычная самостоятельная притяжательная форма здесь не используется; its без апострофа, it’s = it is/has.'],
 ['we','us','our','ours','We heard Lee. Lee heard us. Our room is ready; the keys are ours.','Us обозначает говорящего вместе с другими, не просто любых людей.'],
 ['they','them','their','theirs','They sent a map. I thanked them. Their car is here; the bags are theirs.','Также singular they при неизвестном/указанном they участнике; согласование they are.']
];
export const personalReference={
 id:'personal-pronouns',title:'Личные местоимения: деятель, объект и принадлежность',sources:pronounSources,
 intro:[
  'Охват: все семь личных рядов I/you/he/she/it/we/they, их обычные объектные и притяжательные формы. Это не перечень всех местоимений языка: возвратные, взаимные, относительные и неопределённые формы изучаются отдельно. Притяжательный апостроф подробно разобран в приложении «Указание и принадлежность».',
  'Выбирай форму по роли, а не по русскому окончанию: I help her; she helps me; this is for us. После предлога with/to/for/about обычно нужна объектная форма. В help me to carry it слово to вводит глагол, а в give it to me — адресата; это разные устройства.',
  'My/her/our + существительное; mine/hers/ours вместо всей именной группы. Не подменяй объектную her самостоятельным hers: I called her. С двумя местоимениями используй ясную модель send it to me. Не все глаголы допускают два объекта: explain the rule to me, не explain me the rule.',
  'Не выводи местоимение человека из имени или профессии. Используй известные формы либо имя/singular they. При двух возможных адресатах повтори имя или спроси. Местоимения сокращают текст только тогда, когда ссылка остаётся понятной.'
 ],headers:['Деятель','Объект / после предлога','Перед существительным','Самостоятельная принадлежность','Пример','Ограничение'],rows:personalForms,
 practice:[
 ['Замени второй Jo: Jo is here. I can see Jo. Jo использует she.','Jo is here. I can see her.'],
 ['Вставь I/me: Please wait for ___.','me: объектная форма после for.'],
 ['Вставь we/us: This message is for ___.','us: после предлога.'],
 ['Исправь: Them are ready.','They are ready: подлежащее.'],
 ['Исправь: I gave she the address.','I gave her the address: получатель.'],
 ['Выбери my/mine: This is ___ coat.','my: coat остаётся после формы.'],
 ['Выбери our/ours: This room is ___.','ours: самостоятельная форма.'],
 ['Различи: I called her / I called her friend.','Her — объект человека в первом, определитель friend во втором.'],
 ['Перестрой Send me the file, заменив the file на it.','Send it to me.'],
 ['Исправь: Explain me the problem.','Explain the problem to me.'],
 ['Sam called Lee because they needed help. Кто нуждался в помощи?','Без контекста неоднозначно. Уточни или повтори имя; не угадывай.'],
 ['A visitor left a scarf. Замени visitor без догадки о гендере.','They left a scarf. Their name is unknown.'],
 ['Исправь: The phone is old, but it’s screen is clear.','The phone is old, but its screen is clear.'],
 ['Составь короткое сообщение: вещь ваша общая, принести её надо тебе.','The camera is ours. Please bring it to me.'],
 ['Уточни, кому относится him, если двое участников используют he.','Do you mean Leo or Ben? Затем повтори подтверждённое имя.'],
 ['Назови важное различие Can you help me? / Can I help you?','В первом прошу помощи для себя; во втором предлагаю помочь адресату.']
 ]
};
export const futurePersons=[['I','am'],['you','are'],['he','is'],['she','is'],['it','is'],['we','are'],['they','are']];
export const futureMeanings=[
 ['Намерение','be going to + основа','We are going to paint the room.','Решение рассматривается как уже имеющийся план, не гарантия результата.'],
 ['Договорённость','am/is/are + -ing','We are meeting the painter at two tomorrow.','Контекст будущего и конкретная организация; going to тоже может быть уместно.'],
 ['Расписание','Present Simple','The train leaves at 8:20 tomorrow.','Расписание/программа; настоящее окончание -s сохраняется.'],
 ['Решение сейчас','will + основа','The bell is ringing. I’ll answer it.','Реакция и готовность действовать в момент разговора.'],
 ['Обещание','will / won’t + основа','I’ll return your camera on Monday.','Обещание не доказывает, что оно выполнено.'],
 ['Мнение о будущем','will + основа','I think the repair will take an hour.','Прогноз, не календарный факт и не абсолютная уверенность.'],
 ['Прогноз по признакам','be going to + основа','The shelf is bending. It’s going to fall.','Видимая опора для прогноза, не намерение полки.'],
 ['Умение / доступная возможность','can + основа','I can repair a bicycle. / I can meet you tomorrow.','Can может относиться к будущей доступности; не will can.'],
 ['Прошлое общее умение','could + основа','At ten I could ride a bicycle.','Обычный навык в прошлом; не автоматическое подтверждение единичного успеха.'],
 ['Разрешение','Can/Could I + основа?','Could I use this desk? — Yes, you can.','Действовать хочет спрашивающий; could не делает просьбу прошлой.'],
 ['Просьба о действии','Can/Could you + основа?','Could you move this box, please?','Действует собеседник; тон и контекст важны наряду с формой.'],
 ['Предложение помощи','Can I / Shall I…? / I’ll…','Can I carry that for you?','Shall I/we особенно характерно для UK; US can/do you want… тоже нормативны.'],
 ['Возможный вариант','could + основа','We could meet online instead.','Предложение/возможность, не уже подтверждённая встреча.'],
 ['Будущее приобретённое умение','will be able to + основа','After practice, I hope I’ll be able to do it alone.','Не will can; обучение не гарантирует результат к фиксированной дате.']
];
export const futureTime=[
 ['tomorrow','We are leaving tomorrow.','Без on/in перед tomorrow.'],
 ['next Friday','I’m going to call next Friday.','Без on перед next Friday.'],
 ['on Friday','The club opens on Friday.','On перед днём без next/last.'],
 ['in two days','We are meeting in two days.','Будущее через два дня, не for two days.'],
 ['for two days','We are staying for two days.','Длительность, не момент начала.'],
 ['at seven','The talk starts at seven.','Точное время, не on seven.'],
 ['when I arrive','I’ll text you when I arrive.','Обычное будущее придаточное времени: Present Simple.'],
 ['if it rains','We’ll stay inside if it rains.','Условие не утверждает дождь; обычная модель без will после if.']
];
export const futureReference={
 id:'future-choices',title:'Планы и возможности: going to, will, can/could',sources:futureSources,
 intro:[
  'Охват: базовые способы говорить о будущем, личные ряды going to/will/can, просьбы и разрешение, общее прошлое could, временные ориентиры. Future Continuous/Perfect, полная система условных предложений и модальные выводы о прошлом относятся к следующим топикам. Это карта выбора, не все значения модальных глаголов.',
  'У going to меняется be; у will/can/could нет -s, нет do в вопросе и нет to перед следующим смысловым глаголом. Сравни Is she going to come? / Will she come? / Can she come? Сокращения won’t = will not, can’t = cannot, couldn’t = could not.',
  'План, договорённость, расписание, прогноз, обещание и возможность — разные виды сообщения. Но границы форм не являются непроницаемыми: I’m going to meet Lee и I’m meeting Lee могут описывать одну встречу с разным акцентом. В открытом задании обоснуй выбор, не отбрасывай нормативную альтернативу по одному ключевому слову.',
  'Произношение UK: will /wɪl/, I’ll /aɪl/, won’t /wəʊnt/, can сильное /kæn/ и слабое /kən/, can’t /kɑːnt/, could /kʊd/, couldn’t /ˈkʊdənt/. US /kænt/ допустимо. Разговорное gonna узнаём на слух, но в нейтральном письме сохраняем be going to. Только настоящее аудио показывает, различает ли слушатель отрицание.'
 ],headers:['Группа','Участник / значение','Утверждение / модель','Отрицание / пример','Вопрос / ограничение'],rows:[
 ...futurePersons.map(([s,be])=>['Going to',s,`${s} ${be} going to help`,`${s} ${be} not going to help`,`${be} ${s} going to help?`]),
 ...futurePersons.map(([s])=>['Will',s,`${s} will help`,`${s} will not help / won’t help`,`Will ${s} help?`]),
 ...futurePersons.map(([s])=>['Can',s,`${s} can help`,`${s} cannot help / can’t help`,`Can ${s} help?`]),
 ...futureMeanings.map(([meaning,form,example,note])=>['Смысл',meaning,form,example,note]),
 ...futureTime.map(([time,example,note])=>['Время',time,example,'Временная опора',note])
 ],practice:[
 ['Исправь: She going to call.','She is going to call: be обязательно.'],
 ['Сделай вопросом: They are going to leave.','Are they going to leave?'],
 ['Исправь: He will helps us.','He will help us: основа без -s.'],
 ['Отрицай через won’t: I will forget.','I won’t forget.'],
 ['Tomorrow означает, что всегда нужен will?','Нет: форма выбирается по смыслу, например The train leaves tomorrow.'],
 ['Договорённость: встреча в 3 уже согласована. Дай две формы.','We’re meeting at three / We’re going to meet at three. Различается акцент, обе допустимы.'],
 ['Исправь: She can to drive.','She can drive.'],
 ['Could I use it? Как разрешить?','Yes, you can. / Of course. Could в вопросе не требует could в разрешении.'],
 ['Отличи Could you help? от прошлой способности.','Просьба сейчас; прошлую способность задаёт контекст At five I could swim.'],
 ['I can meet tomorrow: ошибка из-за будущего?','Нет: can выражает доступную возможность в будущем контексте.'],
 ['Исправь: I will can do it.','I will be able to do it.'],
 ['When-связка: I’ll call when I ___. (arrive)','arrive: обычное придаточное будущего времени.'],
 ['If it rains означает гарантированный дождь?','Нет: это условие, исход дождя не утверждается.'],
 ['Различи in three days / for three days.','Через три дня / в течение трёх дней.'],
 ['Прочитай can/can’t для слушателя в двух предложениях.','I can carry this box. I can’t carry that one. Проверить отрицание по реальной речи.'],
 ['Согласуй перенос встречи, включи предложение и подтверждение.','We could meet on Tuesday instead. — Tuesday works for me. Let’s meet at two. — Agreed. Смысл меняется от предложения к принятому решению.']
 ]
};

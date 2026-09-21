import {mkdir,writeFile} from 'node:fs/promises';
import {modules,subtopics,courseStats,vocabulary} from '../data/course.mjs';
import {referencePages,referenceSources} from '../data/reference.mjs';
const root=new URL('../course/',import.meta.url);
for(const dir of ['modules/','subtopics/','appendices/'])await mkdir(new URL(dir,root),{recursive:true});
const list=items=>items.map(x=>'- '+x).join('\n');
const table=(headers,rows)=>'| '+headers.join(' | ')+' |\n| '+headers.map(()=>'---').join(' | ')+' |\n'+rows.map(row=>'| '+row.map(x=>String(x).replaceAll('|','\\|').replaceAll('\n','<br>')).join(' | ')+' |').join('\n');
const taskList=tasks=>tasks.map((t,i)=>`${i+1}. **${t.kind==='speech'?'Устная работа':t.kind==='text'?'Развёрнутый ответ':t.kind==='sentence'?'Предложение':'Краткий ответ'}:** ${t.prompt}`).join('\n');
const keys=tasks=>tasks.map((t,i)=>`${i+1}. ${['text','speech'].includes(t.kind)?'Возможный образец (не единственный ответ)':'Ключ'}: ${t.answer.replaceAll('|',' / ')}. ${t.explanation}`).join('\n');
const details=(title,text)=>`<details><summary>${title}</summary>\n\n${text}\n\n</details>`;
for(const m of modules){
 let text=`# ${m.id} · ${m.level} · ${m.title}\n\nСгенерировано из data/*.mjs. Править источник, не этот файл.\n\nПредпосылки: ${m.prerequisites.join(', ')||'нет'}. Нет фиксированной длительности или числа занятий.\n\n`;
 if(m.subtopics.length){
  text+=`## Последовательные подтемы\n\n${m.subtopics.map(u=>`- [${u.title}](../subtopics/${u.id}.md) — ${u.banks.reduce((n,b)=>n+b.tasks.length,0)} заданий практики; ${u.tests.length} варианта итогового теста.`).join('\n')}\n\nПосле каждой подтемы обязателен отдельный тест. Открытые ответы ожидают содержательной проверки, а устная речь — прослушивания. Самопроверка не подтверждает отложенное освоение.\n\n`;
 }else{
  text+=`> Краткая первая версия. Расширенные подтемы и итоговые тесты здесь ещё не реализованы. Не считать этот материал полноценным наполнением топика.\n\n## Объяснение\n\n${m.rule}\n\n## Примеры\n\n${list(m.examples)}\n\n## Чтение\n\n${m.reading[0]}\n\n${m.reading[1]}\n\n## Аудирование\n\nСначала слушайте в приложении. Вопрос: ${m.listening[1]}\n\n${details('Транскрипт после попытки',m.listening[0])}\n\n## Начальная практика\n\n${m.drills.map((d,i)=>`${i+1}. ${d[0]}`).join('\n')}\n\n## Письмо\n\n${m.write}\n\n## Речь\n\n${m.speak}\n\n## Произношение\n\n${m.sound}\n\n${details('Ключи после ответа',`Чтение: ${m.reading[2]}\n\nАудирование: ${m.listening[2]}\n\n${m.drills.map((d,i)=>`${i+1}. ${d[1].replaceAll('|',' / ')} — ${d[2]}`).join('\n')}`)}\n\n`;
 }
 text+=`## Словарь и выражения\n\n${table(['Единица','IPA · UK','Значение','Контекст / употребление'],m.vocabulary.map(v=>[v.word,v.ipa,v.translation,v.context+' '+v.note]))}\n\n## Справочники и методика\n\n[Приложения](../appendices/INDEX.md) · [Методика и критерии](../TEACHING.md) · [Рубрики](../../assessment/RUBRICS.md) · [Карта Murphy/Hewings](../../library/MURPHY.md).\n`;
 await writeFile(new URL('modules/'+m.id+'.md',root),text,'utf8');
}
for(const u of subtopics){
 let text=`# ${u.id} · ${u.title}\n\n[Топик ${u.topic}](../modules/${u.topic}.md). Сгенерировано из data/*.mjs.\n\nПредпосылки: ${u.prerequisites.map(id=>`[${id}](${id}.md)`).join(', ')||'нет'}.\n\n## Цели контроля\n\n${list(u.goals.map(g=>g.label))}\n\n## Механизм\n\n${u.explanation.map(e=>`### ${e.title}\n\n${e.text}`).join('\n\n')}\n\n## Примеры с разбором\n\n${u.examples.map(e=>`- **${e.en}** — ${e.ru} ${e.why}`).join('\n')}\n\n`;
 for(const b of u.banks)text+=`## ${b.title}\n\n${b.passage?(b.kind==='listening'?details('Транскрипт — только после прослушивания и попытки',b.passage):b.passage)+'\n\n':''}${taskList(b.tasks)}\n\n${details('Ключи и критерии после попытки',keys(b.tasks))}\n\n`;
 text+=`## Обязательный итоговый тест\n\nНе подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.\n\n`;
 for(const test of u.tests)text+=`### ${test.title}\n\n${taskList(test.tasks)}\n\n${details('Разбор — только после отправки попытки',keys(test.tasks))}\n\n`;
 text+=`## Повторение и ограничения\n\nПри пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).\n\n## Приложения\n\n${u.references.map(id=>`- [${referencePages.find(r=>r.id===id).title}](../appendices/${id}.md)`).join('\n')}\n`;
 await writeFile(new URL('subtopics/'+u.id+'.md',root),text,'utf8');
}
for(const r of referencePages){
 const text=`# ${r.title}\n\nСгенерировано из data/reference.mjs и data/irregular.mjs.\n\n${r.intro.join('\n\n')}\n\n${table(r.headers,r.rows)}\n\n${r.families?'## Производные семейства\n\n'+table(['V1','V2','V3','Значение'],r.families)+'\n\n':''}## Практика\n\n${r.practice.map(([q],i)=>`${i+1}. ${q}`).join('\n')}\n\n${details('Разбор после попытки',r.practice.map(([,a],i)=>`${i+1}. ${a}`).join('\n'))}\n\n## Источники для сверки\n\nАвторские объяснения и задания. Внешние словари и фонетические справочники:\n\n${referenceSources.map(([title,url])=>`- [${title}](${url})`).join('\n')}\n`;
 await writeFile(new URL('appendices/'+r.id+'.md',root),text,'utf8');
}
await writeFile(new URL('appendices/INDEX.md',root),`# Справочные приложения\n\n${referencePages.map(r=>`- [${r.title}](${r.id}.md): ${r.rows.length} позиций${r.families?' и '+r.families.length+' производных':''}; ${r.practice.length} задач.`).join('\n')}\n\nОбласть охвата и варианты указаны на каждой странице.\n`,'utf8');
await writeFile(new URL('INDEX.md',root),`# Карта курса и состояние содержания\n\n${courseStats.topics} топиков Pre-A1–C2 и технической ветки. Расширены ${courseStats.expanded}; готово ${subtopics.length} подтем, ${courseStats.practice} тренировочных заданий, ${courseStats.testTasks} заданий в итоговых тестах. Словарь: ${vocabulary.length} карточки с IPA. Остальные топики пока краткие, не полноценное наполнение уровней.\n\nДлительность и число возвращений выбирает ученик. Материал не сокращается под время. [Приложения](appendices/INDEX.md) · [Требования](../docs/REQUIREMENTS.md).\n\n${table(['Топик','Уровень','Тема','Содержание'],modules.map(m=>[`[${m.id}](modules/${m.id}.md)`,m.level,m.title,m.subtopics.length?m.subtopics.length+' расширенные подтемы':'краткая версия']))}\n`,'utf8');
console.log('Built topic, subtopic and appendix documents:',courseStats);

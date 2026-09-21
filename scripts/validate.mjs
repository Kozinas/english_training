import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {modules,subtopics,levels,vocabulary,courseStats} from '../data/course.mjs';
import {referencePages,alphabet,phonemes,tenses} from '../data/reference.mjs';
import {irregularVerbs,irregularFamilies} from '../data/irregular.mjs';
import {questions,passages} from '../data/assessment.mjs';

const root=fileURLToPath(new URL('../',import.meta.url));
const ids=new Set(modules.map(m=>m.id));
assert.equal(ids.size,modules.length,'Duplicate module IDs');
assert.equal(modules.length,40);
const visited=new Set(),active=new Set();
function visit(id){
  assert(ids.has(id),'Unknown dependency '+id);
  assert(!active.has(id),'Dependency cycle '+id);
  if(visited.has(id))return;
  active.add(id);modules.find(m=>m.id===id).prerequisites.forEach(visit);active.delete(id);visited.add(id);
}
for(const m of modules){
  visit(m.id);assert(levels.includes(m.level));
  for(const field of ['title','focus','rule','write','speak','sound'])assert(typeof m[field]==='string'&&m[field].length>15,`${m.id}: missing ${field}`);
  assert(m.rule.length>180,`${m.id}: explanation too short`);
  assert(!('sessions' in m),'Topics must not have a fixed session count');
  assert(m.examples.length>=3&&m.drills.length>=3&&m.vocabulary.length>=6);
  for(const tuple of [m.reading,m.listening,...m.drills])assert(tuple.length===3&&tuple.every(x=>typeof x==='string'&&x.trim().length),`${m.id}: incomplete exercise`);
  const markdown=await readFile(path.join(root,'course','modules',m.id+'.md'),'utf8');
  for(const content of m.subtopics.length?[m.title,...m.subtopics.map(u=>u.title)]:[m.title,m.rule,m.write,m.speak])assert(markdown.includes(content),`${m.id}: generated document is stale; run npm run build`);
  assert.equal(m.contentStatus,m.subtopics.length?'expanded':'legacy');
}
assert.equal(new Set(vocabulary.map(v=>v.id)).size,vocabulary.length);
for(const v of vocabulary)assert(v.word&&v.translation&&v.context&&/^\/.+\/$/u.test(v.ipa)&&v.accent&&v.note,'Incomplete card '+v.id);
for(const m of modules)for(let n=1;n<=6;n++)assert(vocabulary.some(v=>v.id===`${m.id}-v${n}`),'Lost legacy card');
const uids=new Set(subtopics.map(u=>u.id)),tids=new Set();assert.equal(uids.size,subtopics.length);
const orderedUnits=new Set();
for(const u of subtopics){
  assert(ids.has(u.topic));assert(u.prerequisites.every(id=>orderedUnits.has(id)),'Unknown, cyclic or late prerequisite '+u.id);orderedUnits.add(u.id);
  assert(u.explanation.map(e=>e.text).join('').length>=2000,'Thin explanation '+u.id);
  assert(u.examples.length>=10&&u.examples.every(e=>e.en&&e.ru&&e.why),'Thin examples '+u.id);
  assert(u.references.every(id=>referencePages.some(r=>r.id===id)),'Missing reference');
  assert(u.tests.length>=2,'Need a fresh second test variant');
  assert.equal(new Set(u.banks.map(b=>b.id)).size,u.banks.length,'Duplicate practice section');
  assert.equal(new Set(u.tests.map(t=>t.id)).size,u.tests.length,'Duplicate test variant');
  const goals=new Set(u.goals.map(g=>g.id));assert.equal(goals.size,u.goals.length);
  for(const g of u.goals)assert(u.banks.some(b=>b.id===g.bank),'No targeted remediation');
  const practicePrompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const block of [...u.banks,...u.tests]){
    assert(block.tasks.length>=10,`${u.id}/${block.id}: fewer than 10 tasks`);
    assert.equal(new Set(block.tasks.map(t=>t.prompt)).size,block.tasks.length,'Repeated task within a section');
    for(const t of block.tasks){assert(!tids.has(t.id),'Duplicate task ID');tids.add(t.id);assert(['short','sentence','text','speech'].includes(t.kind));assert(goals.has(t.goal));assert(t.prompt&&t.answer&&t.explanation.length>15,'Missing key/rubric');}
  }
  for(const t of u.tests){assert(t.tasks.some(q=>q.kind==='text'),'Test needs extended input');assert(t.tasks.every(q=>!practicePrompts.has(q.prompt)),'Test copies training prompt');for(const g of goals)assert(t.tasks.some(q=>q.goal===g),'Untested goal');}
  const md=await readFile(path.join(root,'course/subtopics',u.id+'.md'),'utf8');
  for(const t of [...u.banks,...u.tests].flatMap(b=>b.tasks))assert(md.includes(t.prompt)&&md.includes(t.explanation),'Stale unit document');
}
assert.equal(alphabet.length,26);assert.equal(new Set(alphabet.map(r=>r[0])).size,26);
assert.equal(phonemes.length,44);assert.equal(phonemes.filter(r=>r[0]==='Гласный').length,12);assert.equal(phonemes.filter(r=>r[0]==='Дифтонг').length,8);assert.equal(phonemes.filter(r=>r[0]==='Согласный').length,24);
assert.equal(tenses.length,12);assert(irregularVerbs.length>=180);assert(irregularFamilies.length>=30);
for(const r of referencePages){assert(r.practice.length>=10);assert(r.rows.every(row=>row.length===r.headers.length&&row.every(Boolean)));const md=await readFile(path.join(root,'course/appendices',r.id+'.md'),'utf8');assert(md.includes(r.title));}
assert.equal(questions.length,48);assert.equal(new Set(questions.map(q=>q.id)).size,48);
for(const q of questions){
  assert(ids.has(q.module));assert(levels.includes(q.level));assert(['grammar','reading','listening'].includes(q.skill));
  assert(q.options.length===4&&new Set(q.options).size===4&&q.options[q.answer]!==undefined&&Number.isInteger(q.answer),'Invalid options/key '+q.id);
  assert(q.explanation.length>8);if(q.skill!=='grammar')assert(passages[q.passage]?.length>80,'Missing passage '+q.id);
}
for(const level of levels.slice(1))for(const [skill,count] of [['grammar',4],['reading',2],['listening',2]])assert.equal(questions.filter(q=>q.skill===skill&&q.level===level).length,count);
const sources=JSON.parse(await readFile(path.join(root,'library/SOURCES.json'),'utf8'));
const downloads=JSON.parse(await readFile(path.join(root,'library/DOWNLOADS.json'),'utf8'));
for(const s of sources){
  assert(s.author&&s.license&&s.licenseUrl&&s.notes);const record=downloads[s.id];assert(record,'Missing book '+s.id);
  const file=await readFile(path.join(root,'library/open',s.file));
  assert.equal(file.subarray(0,5).toString(),'%PDF-');assert.equal(file.length,record.bytes);
  assert.equal(createHash('sha256').update(file).digest('hex'),record.sha256,'PDF checksum mismatch '+s.file);
}
async function checkLinks(dir){
  for(const entry of await readdir(dir,{withFileTypes:true})){
    if(['.git','node_modules','private','.artifacts'].includes(entry.name))continue;
    const file=path.join(dir,entry.name);
    if(entry.isDirectory())await checkLinks(file);
    else if(entry.name.endsWith('.md')){
      const content=await readFile(file,'utf8');
      for(const [,link] of content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)){
        if(/^(https?:|#)/.test(link))continue;
        const target=path.resolve(dir,decodeURIComponent(link.split('#')[0]));
        await readFile(target).catch(()=>{throw new Error(`Broken local link ${file}: ${link}`);});
      }
    }
  }
}
await checkLinks(root);
console.log(`Validated ${modules.length} topics (${courseStats.expanded} expanded), ${subtopics.length} subtopics, ${courseStats.practice} practice tasks, ${courseStats.testTasks} test tasks, ${vocabulary.length} cards, ${questions.length} placement questions, references, 2 PDF checksums and Markdown links.`);

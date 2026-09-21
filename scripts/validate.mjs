import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {modules,levels,vocabulary} from '../data/course.mjs';
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
  assert.equal(m.examples.length,3);assert.equal(m.drills.length,3);assert.equal(m.vocabulary.length,6);
  for(const tuple of [m.reading,m.listening,...m.drills])assert(tuple.length===3&&tuple.every(x=>typeof x==='string'&&x.trim().length),`${m.id}: incomplete exercise`);
  const markdown=await readFile(path.join(root,'course','modules',m.id+'.md'),'utf8');
  for(const content of [m.title,m.rule,m.write,m.speak])assert(markdown.includes(content),`${m.id}: generated document is stale; run npm run build`);
}
assert.equal(new Set(vocabulary.map(v=>v.id)).size,vocabulary.length);
for(const v of vocabulary)assert(v.word&&v.translation&&v.context,'Incomplete card');
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
console.log(`Validated ${modules.length} modules, ${vocabulary.length} cards, ${questions.length} placement questions, 2 PDF checksums and local Markdown links.`);

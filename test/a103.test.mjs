import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {modules,subtopics} from '../data/course.mjs';
import {existenceForms,quantifierPatterns,portionPhrases,placeExpressions,quantityReference,placeReference} from '../data/quantity-place.mjs';
import {a103Vocabulary} from '../data/lexicon-a103.mjs';
import {checkAnswer,freshState,validateState,unitState,submitUnitTest,startUnitTest,isOpen,buildPlan,reviewCard} from '../web/engine.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
const units=subtopics.filter(u=>u.topic==='A103');
const task=id=>units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks)).find(t=>t.id===id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' independent key');assert(!checkAnswer(wrong,t.answer),id+' contrast');}};
const fill=(s,u)=>{const p=unitState(s,u.id),v=u.tests.find(t=>t.id===p.examDraft.variant);p.examDraft.answers=Object.fromEntries(v.tasks.map(t=>[t.id,t.answer.split('|')[0]]));return p;};

test('A103 references cover their declared existence, quantity, portion and spatial sets',()=>{
 assert.equal(existenceForms.length,3);assert.equal(quantifierPatterns.length,16);assert.equal(portionPhrases.length,20);assert.equal(placeExpressions.length,22);
 assert.equal(quantityReference.rows.length,39);assert.equal(placeReference.rows.length,30);
 assert.equal(quantityReference.practice.length,18);assert.equal(placeReference.practice.length,16);
 for(const word of ['much','many','a few','few','a little','little','enough','too many','too much','some of','none of'])assert(quantifierPatterns.some(r=>r[0]===word),word);
 for(const word of ['in','on','at','into','onto','off','out of','across','through','between','among'])assert(placeExpressions.some(r=>r[0]===word),word);
 for(const word of ['a loaf of bread','a slice of bread','a piece of advice','a piece of equipment','an item of information'])assert(portionPhrases.some(r=>r[0]===word),word);
 assert(quantityReference.intro.join(' ').includes('не все существительные'));assert(placeReference.intro.join(' ').includes('не полный словарь'));
});
test('A103 natural-sized units have substantial distinct texts and eight fresh goal-complete tests',()=>{
 assert.deepEqual(units.map(u=>u.id),['A103-existence','A103-portions','A103-quantity','A103-place']);
 assert.deepEqual(units.map(u=>u.examples.length),[22,24,22,24]);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[82,84,78,90]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[20,20],[20,20],[22,22],[20,20]]);
 assert.equal(units[1].banks.find(b=>b.id==='portions').navLabel,'Порции');assert.equal(units[3].banks.find(b=>b.id==='movement').navLabel,'Направление');
 assert.equal(subtopics.find(u=>u.id==='A102-building').banks.find(b=>b.id==='spelling').navLabel,'Написание');
 const seen=new Set();
 for(const u of units){
  assert(u.explanation.map(e=>e.text).join('').length>=3500);assert(!('minutes' in u)&&!('sessions' in u));
  const r=u.banks.find(b=>b.kind==='reading'),l=u.banks.find(b=>b.kind==='listening');assert.notEqual(r.passage,l.passage);
  assert(r.passage.split(/\s+/).length>=200);assert(l.passage.split(/\s+/).length>=110);assert(u.banks.every(b=>b.tasks.length>=10));assert(u.banks.some(b=>b.kind==='review'));
  const practice=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const v of u.tests){
   assert(v.tasks.some(t=>t.kind==='text'));assert(v.tasks.some(t=>t.kind==='speech'));for(const g of u.goals)assert(v.tasks.some(t=>t.goal===g.id));
   for(const t of v.tasks){assert(!practice.has(t.prompt),t.id);assert(!seen.has(t.prompt),'Duplicate exam prompt '+t.id);seen.add(t.prompt);}
  }
 }
});
test('A103 existence keys distinguish head agreement, reference, needs and unknown contents',()=>{
 cases([
  ['A103-existence-practice-1','is','are'],['A103-existence-practice-2','are','is'],['A103-existence-practice-3','is','are'],['A103-existence-practice-4','are','is'],
  ['A103-existence-practice-5','is','are'],['A103-existence-practice-8','Is there a balcony?','Does there is a balcony?'],
  ['A103-existence-practice-14','Yes, there is.',"Yes, there's."],['A103-existence-practice-15',"No, there aren't.","No, they aren't."],
  ['A103-existence-practice-17','it','there'],['A103-existence-practice-18','they','there'],['A103-existence-practice-20','How many sockets are there?','Where are the sockets?'],
  ['A103-existence-reading-2','4','6'],['A103-existence-reading-3','6','4'],['A103-existence-reading-4','no','yes'],['A103-existence-reading-6','not stated','false'],
  ['A103-existence-listening-6','not stated','false'],['A103-existence-sounds-1','ð','θ'],['A103-existence-sounds-4','no','yes'],
  ['A103-existence-test-a-2','is','are'],['A103-existence-test-b-11','not stated','false']
 ]);
 for(const answer of ['There is not a cooker here.',"There isn't a cooker here.","There's not a cooker here.","There’s not a cooker here."])assert(checkAnswer(answer,task('A103-existence-practice-10').answer));
});
test('A103 portions keys preserve noun meaning, package units, decimals and order changes',()=>{
 cases([
  ['A103-portions-practice-1','U','C'],['A103-portions-practice-2','C','U'],['A103-portions-practice-3','U','C'],['A103-portions-practice-4','C','U'],
  ['A103-portions-practice-6','U','C'],['A103-portions-practice-7','C','U'],['A103-portions-practice-9','some','any'],['A103-portions-practice-10','any','some'],
  ['A103-portions-practice-12','some','any'],['A103-portions-practice-13','any','some'],
  ['A103-portions-portions-1','loaves','loafs'],['A103-portions-portions-3','are','is'],['A103-portions-portions-4','is','are'],
  ['A103-portions-portions-6','equipment','equipments'],['A103-portions-portions-8','1','10'],['A103-portions-portions-9','no','yes'],
  ['A103-portions-reading-3','2','1'],['A103-portions-reading-6','slices','loaves'],['A103-portions-reading-8','not stated','beans'],
  ['A103-portions-listening-2','0.5','5'],['A103-portions-listening-3','1.5','15'],['A103-portions-listening-6','no','yes'],
  ['A103-portions-test-a-7','1.5','15'],['A103-portions-test-b-7','0.75','75']
 ]);
});
test('A103 quantifiers keys distinguish amounts, sufficiency, scarcity and scope',()=>{
 cases([
  ['A103-quantity-practice-1','many','much'],['A103-quantity-practice-2','much','many'],['A103-quantity-practice-3','many','much'],['A103-quantity-practice-5','much','many'],
  ['A103-quantity-practice-6','of','none'],['A103-quantity-practice-7','none','of'],['A103-quantity-practice-8','of','none'],
  ['A103-quantity-practice-9','a little','a few'],['A103-quantity-practice-10','a few','a little'],
  ['A103-quantity-practice-11','a few','few'],['A103-quantity-practice-12','few','a few'],['A103-quantity-practice-13','a little','little'],['A103-quantity-practice-14','little','a little'],
  ['A103-quantity-practice-17','not enough','enough'],['A103-quantity-practice-18','enough','too few'],['A103-quantity-practice-19','no','yes'],['A103-quantity-practice-20','no','yes'],
  ['A103-quantity-reading-3','2','8'],['A103-quantity-reading-9','false','true'],['A103-quantity-listening-5','no','yes'],
  ['A103-quantity-review-1','much','many'],['A103-quantity-review-2','many','much'],['A103-quantity-review-7','no','yes'],
  ['A103-quantity-test-a-10','3','12'],['A103-quantity-test-b-10','3','13']
 ]);
});
test('A103 place keys preserve direction, viewpoint and spatial rather than literal translation',()=>{
 cases([
  ['A103-place-practice-1','in','on'],['A103-place-practice-2','on','under'],['A103-place-practice-4','above','below'],['A103-place-practice-5','below','above'],
  ['A103-place-practice-6','between','among'],['A103-place-practice-7','among','opposite'],['A103-place-practice-9','no','yes'],['A103-place-practice-12','by','in'],
  ['A103-place-movement-1','into','in'],['A103-place-movement-2','in','into'],['A103-place-movement-3','on','onto'],['A103-place-movement-5','out of','off'],
  ['A103-place-movement-6','off','into'],['A103-place-movement-7','across','through'],['A103-place-movement-8','through','onto'],['A103-place-movement-11','no','yes'],
  ['A103-place-reading-2','sink','cooker'],['A103-place-reading-3','door','window'],['A103-place-reading-4','window','door'],['A103-place-reading-5','bench','bin'],
  ['A103-place-reading-6','no','yes'],['A103-place-reading-7','no','yes'],['A103-place-reading-9','no','yes'],['A103-place-reading-10','no','yes'],
  ['A103-place-listening-4','lower shelf','upper shelf'],['A103-place-listening-7','no','yes'],['A103-place-listening-8','closed','open'],
  ['A103-place-test-a-12','They are going home now.','They are going to home now.']
 ]);
});
test('A103 context-sensitive alternatives and full matching essays remain pending with targeted gaps',()=>{
 for(const id of ['A103-portions-practice-18','A103-portions-practice-19','A103-quantity-practice-23','A103-place-practice-15','A103-place-movement-12','A103-place-test-a-14','A103-place-test-b-14'])assert(isOpen(task(id)),id);
 const s=freshState(),u=units[1],p=fill(s,u);p.examDraft.answers['A103-portions-test-a-7']='15';
 const result=submitUnitTest(s,u.id,'2026-09-21T10:00:00Z');
 assert.equal(result.correct,result.total-1);assert.equal(result.status,'awaiting-review');
 const g=result.goals.find(g=>g.id==='unit');assert.equal(g.retry,1);assert.equal(g.bank,'portions');
 assert.equal(result.rows.find(r=>r.id==='A103-portions-test-a-16').status,'pending');assert.equal(result.rows.find(r=>r.id==='A103-portions-test-a-19').status,'pending');
 assert.doesNotThrow(()=>validateState(s));
});
test('A103 complete writing models, dialogues and cards contain usable original material',()=>{
 for(const [id,min,max] of [['A103-existence-production-4',80,110],['A103-portions-production-4',90,120],['A103-quantity-production-4',90,120],['A103-place-production-4',100,140]]){
  const t=task(id),words=t.answer.split(/\s+/).length;assert(words>=min&&words<=max,`${id}: ${words}`);assert(!t.answer.includes('...'));
 }
 for(const [id,n] of [['A103-existence-production-10',8],['A103-portions-production-8',8],['A103-quantity-production-8',8],['A103-place-production-8',10]])assert.equal((task(id).answer.match(/(?:^| )[AB]: /g)||[]).length,n,id);
 assert.equal(a103Vocabulary.length,102);const cards=modules.find(m=>m.id==='A103').vocabulary;assert.equal(cards.length,109);
 for(let n=1;n<=6;n++)assert(cards.some(c=>c.id===`A103-v${n}`));assert(cards.some(c=>c.word==='run out of'));
 for(const [word,ipa] of [...portionPhrases,...placeExpressions])assert(cards.some(c=>c.word===word&&c.ipa===`/${ipa}/`),word);
 for(const word of ['in stock','out of stock','run low on','help yourself','on the house','make room for','at hand','that will do'])assert(cards.some(c=>c.word===word&&c.context&&c.note));
 assert.equal(new Set(a103Vocabulary.map(c=>c.id)).size,a103Vocabulary.length);
});
test('A103 accessible static diagram matches the textual plan and generated Markdown',async()=>{
 const b=units[3].banks.find(b=>b.id==='reading'),d=b.diagram;
 assert.equal(d.src,'/assets/a103-kitchen.svg');assert.equal(d.file,'web/assets/a103-kitchen.svg');assert(d.alt.includes('cupboard, sink, cooker'));assert(d.caption.includes('не в масштабе'));
 const svg=await readFile(new URL('../'+d.file,import.meta.url),'utf8');
 for(const label of ['cupboard','sink','cooker','door','table','window','shelf','bench','bin'])assert(svg.includes('>'+label+'</text>'));
 for(const [x,y,label] of [[180,165,'cupboard'],[360,165,'sink'],[540,165,'cooker'],[180,290,'door'],[360,290,'table'],[540,290,'window'],[180,415,'shelf'],[360,415,'bench'],[540,415,'bin']])assert(svg.includes(`x="${x}" y="${y}">${label}</text>`));
 assert(svg.includes('<title')&&svg.includes('<desc'));assert(!/<script|<foreignObject|\bon\w+\s*=|(?:href|src)\s*=/i.test(svg));
 assert(b.passage.includes('All the positions can also be read'));assert(b.passage.includes('not to scale'));
 const md=await readFile(new URL('../course/subtopics/A103-place.md',import.meta.url),'utf8');assert(md.includes('](../../web/assets/a103-kitchen.svg)'));
});
test('A103 keeps legacy SRS and notes, multiline drafts and two immutable attempts without inherited mastery',()=>{
 const s=freshState();s.drafts.A103='Synthetic legacy note, not learner evidence.';
 s.cards['A103-v1']=reviewCard(null,'good',Date.UTC(2026,8,21));s.cards['A102-v1']=reviewCard(null,'good',Date.UTC(2026,8,21));
 s.moduleProgress.A103={selfChecked:true,date:'2026-09-21T09:00:00Z'};
 s.placement={assessmentVersion,date:'2026-09-21T09:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};
 assert.deepEqual(validateState(structuredClone(s)),s);assert(buildPlan(s).items.some(m=>m.id==='A103'));
 const u=units[3],p=unitState(s,u.id);p.examDraft.answers['A103-place-test-a-16']='There is a box under the table.\nUnfinished synthetic paragraph.';
 s.bookmark={route:'unit/A103-place/test',scroll:1700,focus:'answer-A103-place-test-a-16'};
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(s.schemaVersion,2);
 fill(s,u);submitUnitTest(s,u.id,'2026-09-21T10:00:00Z');const first=structuredClone(p.attempts[0]);
 startUnitTest(s,u.id);assert.equal(p.examDraft.variant,'b');fill(s,u);const second=submitUnitTest(s,u.id,'2026-09-22T10:00:00Z');
 assert.equal(p.attempts.length,2);assert.deepEqual(p.attempts[0],first);assert.equal(second.status,'awaiting-review');assert.doesNotThrow(()=>validateState(s));
});

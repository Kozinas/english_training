import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {cardinals,ordinalWords,ordinalSuffix,weekdays,months,numberReference} from '../data/numbers.mjs';
import {checkAnswer,freshState,validateState,unitState,submitUnitTest,buildPlan,reviewCard} from '../web/engine.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';

const p02=subtopics.filter(u=>u.topic==='P02');
const task=id=>p02.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks)).find(t=>t.id===id);

test('P02 reference covers its declared numeric and calendar scope without gaps',()=>{
 for(let n=0;n<=20;n++)assert(cardinals.some(r=>r[0]===String(n)));
 for(let n=30;n<=90;n+=10)assert(cardinals.some(r=>r[0]===String(n)));
 assert.equal(cardinals.length,32);assert.equal(ordinalWords.length,31);
 assert.equal(weekdays.length,7);assert.equal(months.length,12);
 for(const [n,suffix] of [[1,'st'],[2,'nd'],[3,'rd'],[11,'th'],[12,'th'],[13,'th'],[21,'st'],[22,'nd'],[23,'rd'],[31,'st'],[111,'th'],[112,'th'],[113,'th'],[121,'st']])assert.equal(ordinalSuffix(n),suffix);
 assert.equal(ordinalWords[11],'twelfth');assert.equal(ordinalWords[19],'twentieth');assert.equal(ordinalWords[30],'thirty-first');
 assert.equal(numberReference.rows.length,92);assert(numberReference.practice.length>=15);
});

test('P02 has natural-sized sections, separate texts, goal coverage and new exam material',()=>{
 assert.deepEqual(p02.map(u=>u.id),['P02-numbers','P02-time','P02-instructions']);
 assert(new Set(p02.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0))).size>1);
 const allTestPrompts=new Set();
 for(const u of p02){
  assert(!('minutes' in u)&&!('sessions' in u));
  const reading=u.banks.find(b=>b.kind==='reading'),listening=u.banks.find(b=>b.kind==='listening');
  assert(reading.passage.split(/\s+/).length>=140);assert(listening.passage.split(/\s+/).length>=75);assert.notEqual(reading.passage,listening.passage);
  assert(u.banks.some(b=>b.kind==='review'));assert(u.banks.every(b=>b.tasks.length>=10));
  const practices=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   for(const goal of u.goals)assert(exam.tasks.some(t=>t.goal===goal.id));
   assert(exam.tasks.some(t=>t.kind==='speech'));assert(exam.tasks.some(t=>t.kind==='text'));
   for(const t of exam.tasks){assert(!practices.has(t.prompt));assert(!allTestPrompts.has(t.prompt));allTestPrompts.add(t.prompt);}
  }
 }
});

test('numeric and clock keys retain decimal, leading zero and past/to meaning',()=>{
 // Independent expected values, not a loop feeding every task its own stored key.
 const cases=[
  ['P02-numbers-practice-14','0.06','0.6'],['P02-numbers-practice-16','0409','409'],
  ['P02-numbers-reading-4',String(3*10),'3'],['P02-numbers-reading-5','1.5','15'],
  ['P02-numbers-reading-8','1050','1500'],['P02-numbers-listening-5','2.05','2.5'],
  ['P02-numbers-test-a-6','4.09','409'],['P02-numbers-test-b-8','0068','68'],
  ['P02-time-practice-2','05:10','05:50'],['P02-time-practice-3','04:50','05:50'],
  ['P02-time-practice-4','20:15','08:15'],['P02-time-practice-5','19:45','20:45'],
  ['P02-time-reading-6','15:45','15:15'],['P02-time-listening-2','14:25','14:05'],
  ['P02-time-test-a-1','06:55','07:55'],['P02-time-test-a-3','23:30','11:30'],
  ['P02-time-test-b-3','12:30','00:30'],['P02-instructions-reading-4','10:35','10:05'],
  ['P02-instructions-test-a-8','14:45','15:45'],['P02-instructions-test-b-8','16:15','04:15']
 ];
 for(const [id,right,wrong] of cases){const t=task(id);assert(t,id);assert(checkAnswer(right,t.answer),id+' correct');assert(!checkAnswer(wrong,t.answer),id+' incorrect');}
});

test('P02 decimal error remains a gap even with other correct keys, open work stays pending',()=>{
 const state=freshState(),u=p02[0],p=unitState(state,u.id);
 p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));
 p.examDraft.answers['P02-numbers-test-a-6']='409';
 const result=submitUnitTest(state,u.id);
 assert.equal(result.correct,result.total-1);assert.equal(result.goals.find(g=>g.id==='notation').retry,1);
 assert(result.pending>0);assert.equal(result.status,'awaiting-review');assert.doesNotThrow(()=>validateState(state));
});

test('P02 vocabulary includes all reference bases and contextual expressions with IPA',()=>{
 for(const [n] of cardinals)assert(vocabulary.some(v=>v.id===`P02-x-number-${n.replaceAll(',','')}`));
 for(let n=1;n<=31;n++)assert(vocabulary.some(v=>v.id===`P02-x-ordinal-${n}`));
 for(const [word] of [...weekdays,...months])assert(vocabulary.some(v=>v.module==='P02'&&v.word===word));
 for(const phrase of ['read back','write down','on time','in time','take your time'])assert(vocabulary.some(v=>v.module==='P02'&&v.word===phrase&&v.note.length>20));
 const cards=modules.find(m=>m.id==='P02').vocabulary;assert.equal(cards.length,114);
 assert(cards.every(v=>v.ipa.length>3&&!v.ipa.includes('undefined')));
 assert.equal(cards.find(v=>v.id==='P02-x-number-1').context,'One item: 1.');
});

test('additive P02 content keeps schema 2 exports, prior drafts and SRS, not old mastery',()=>{
 const state=freshState();state.drafts.P02='Previous learner notes — synthetic fixture.';
 state.moduleProgress.P02={selfChecked:true,date:'2026-09-21T12:00:00Z'};
 state.cards['P02-v1']=reviewCard(null,'good',Date.UTC(2026,8,21));
 state.placement={assessmentVersion,date:'2026-09-21T12:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};
 const old=validateState(structuredClone(state));assert.deepEqual(old,state);assert(buildPlan(old).items.some(m=>m.id==='P02'));
 const p=unitState(state,'P02-time');p.examDraft.answers['P02-time-test-a-14']='My unfinished invitation.\nThe time is not confirmed.';
 state.bookmark={route:'unit/P02-time/test',scroll:730,focus:'answer-P02-time-test-a-14'};
 const copy=validateState(JSON.parse(JSON.stringify(state)));assert.deepEqual(copy,state);assert.equal(copy.schemaVersion,2);
});

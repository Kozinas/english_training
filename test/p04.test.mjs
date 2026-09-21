import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {beForms,questionWords,beQuestionReference} from '../data/be-questions.mjs';
import {p04Vocabulary} from '../data/lexicon-p04.mjs';
import {checkAnswer,freshState,validateState,unitState,submitUnitTest,startUnitTest,scoreUnitTest,isOpen,buildPlan,reviewCard} from '../web/engine.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';

const p04=subtopics.filter(u=>u.topic==='P04');
const task=id=>p04.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks)).find(t=>t.id===id);
const fill=(s,u)=>{const p=unitState(s,u.id),variant=u.tests.find(t=>t.id===p.examDraft.variant);p.examDraft.answers=Object.fromEntries(variant.tasks.map(t=>[t.id,t.answer.split('|')[0]]));return p;};

test('P04 reference covers all seven be rows and the declared question groups',()=>{
 assert.deepEqual(beForms.map(r=>r[0]),['I','you','he','she','it','we','they']);
 assert(beForms.every(r=>r.length===6&&r.every(Boolean)));
 for(const [person,form] of [['I','am'],['you','are'],['he','is'],['she','is'],['it','is'],['we','are'],['they','are']]){
  const row=beForms.find(r=>r[0]===person);
  assert.equal(row[1].toLowerCase(),`${person.toLowerCase()} ${form} ready.`);
  assert.equal(row[3].toLowerCase(),`${form} ${person.toLowerCase()} ready?`);
  assert.equal(row[4].toLowerCase(),`yes, ${person.toLowerCase()} ${form}.`);
  assert(row[2].includes('not'));assert(row[5].includes('not'));
 }
 assert.equal(questionWords.length,14);
 for(const phrase of ['what','who','where','when','why','which','whose','how','how old','what time','how many','how much','how far','how long'])assert(questionWords.some(r=>r[0]===phrase));
 assert.equal(beQuestionReference.rows.length,40);assert.equal(beQuestionReference.practice.length,16);
 assert(beQuestionReference.intro.join(' ').includes('НЕ готовые диалоги'));
 assert(beQuestionReference.intro.join(' ').includes('B104'),'scope includes later question patterns');
});

test('P04 natural units contain separate passages, mixed review and fresh goal-complete tests',()=>{
 assert.deepEqual(p04.map(u=>u.id),['P04-statements','P04-yesno','P04-wh']);
 assert.deepEqual(p04.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[68,76,82]);
 assert.deepEqual(p04.map(u=>u.examples.length),[18,20,22]);
 const seen=new Set();
 for(const u of p04){
  assert(!('minutes' in u)&&!('sessions' in u));
  const read=u.banks.find(b=>b.kind==='reading'),listen=u.banks.find(b=>b.kind==='listening');
  assert(read.passage.split(/\s+/).length>=150);assert(listen.passage.split(/\s+/).length>=90);assert.notEqual(read.passage,listen.passage);
  assert(u.banks.every(b=>b.tasks.length>=10));assert(u.banks.some(b=>b.kind==='review'));
  const training=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   assert(exam.tasks.some(t=>t.kind==='speech'));assert(exam.tasks.some(t=>t.kind==='text'));
   for(const goal of u.goals)assert(exam.tasks.some(t=>t.goal===goal.id));
   for(const t of exam.tasks){assert(!training.has(t.prompt));assert(!seen.has(t.prompt),'Repeated test prompt: '+t.id);seen.add(t.prompt);}
  }
 }
});

test('P04 independent keys check head agreement, speaker roles, unknown facts and question meaning',()=>{
 const cases=[
  ['P04-statements-practice-1','is','are'],['P04-statements-practice-2','are','is'],
  ['P04-statements-practice-3','are','am'],['P04-statements-practice-4','am','are'],
  ['P04-statements-reading-3','6','8'],['P04-statements-reading-4','no','yes'],
  ['P04-statements-reading-6','not stated','true'],['P04-statements-reading-7','not stated','false'],
  ['P04-statements-listening-2','no','yes'],['P04-statements-listening-3','3','2'],
  ['P04-statements-test-a-11','not stated','false'],['P04-statements-test-b-12','no','yes'],
  ['P04-yesno-practice-8','is','are'],['P04-yesno-practice-9','are','is'],
  ['P04-yesno-practice-10','Yes, I am.','Yes, you are.'],
  ['P04-yesno-practice-11','Yes, we are.','Yes, I am.'],
  ['P04-yesno-practice-12','Yes, you are.','Yes, I am.'],
  ['P04-yesno-practice-18','Yes, we are.','Yes, you are.'],
  ['P04-yesno-practice-20','yes','no'],['P04-yesno-practice-21','no','yes'],
  ['P04-yesno-reading-4','not stated','true'],['P04-yesno-reading-6','not stated','false'],['P04-yesno-reading-8','not stated','false'],
  ['P04-yesno-listening-3','we','I'],['P04-yesno-listening-7','you','I'],
  ['P04-yesno-test-a-12','yes','no'],['P04-yesno-test-a-13','no','yes'],
  ['P04-wh-practice-5','whose',"who's"],['P04-wh-practice-6',"who's",'whose'],
  ['P04-wh-practice-7','how old','how long'],['P04-wh-practice-8','how long','what time'],
  ['P04-wh-practice-9','how far','how much'],['P04-wh-practice-10','how many','how much'],
  ['P04-wh-practice-11','how much','how many'],['P04-wh-practice-20','are','is'],
  ['P04-wh-practice-21','is','are'],['P04-wh-reading-5','16:30','04:30'],
  ['P04-wh-reading-6','50','16:30'],['P04-wh-reading-7','0','4'],
  ['P04-wh-reading-10','not stated','false'],['P04-wh-listening-4','10:15','10:50'],
  ['P04-wh-listening-5','40','10:15'],['P04-wh-listening-8','not stated','false'],
  ['P04-wh-test-a-12','is','are'],['P04-wh-test-b-11','are','is']
 ];
 for(const [id,correct,wrong] of cases){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(correct,t.answer),id+' key');assert(!checkAnswer(wrong,t.answer),id+' contrast');}
});

test('P04 closed answers accept legitimate contractions without dropping negation or role',()=>{
 const cases=[
  ['P04-statements-practice-15',["She isn't busy.","She's not busy.","She isn’t busy."],['She busy.',"She’sn’t busy."]],
  ['P04-statements-practice-16',["They aren't here.","They're not here."],['They are here.']],
  ['P04-statements-practice-17',["I'm not late.","I’m not late."],["I amn't late.","I'm late."]],
  ['P04-yesno-practice-13',['No, it is not.',"No, it isn't.","No, it's not."],['Yes, it is.','No, they are not.']],
  ['P04-yesno-practice-19',['No, I am not.',"No, I'm not."],['No, you are not.']],
  ['P04-yesno-test-a-8',['No, you are not.',"No, you aren't.","No, you're not."],['No, I am not.']],
  ['P04-yesno-test-b-10',['No, it is not.',"No, it isn't.","No, it's not."],['No, it is.']],
  ['P04-yesno-practice-16',['Yes, I am.'],["Yes, I'm."]],
  ['P04-yesno-test-a-11',['Yes, she is.'],["Yes, she's."]]
 ];
 for(const [id,accepted,rejected] of cases){const t=task(id);for(const answer of accepted)assert(checkAnswer(answer,t.answer),id+' '+answer);for(const answer of rejected)assert(!checkAnswer(answer,t.answer),id+' '+answer);}
});

test('P04 meaning tasks remain open and incorrect closed roles target answer remediation',()=>{
 for(const id of ['P04-yesno-practice-22','P04-yesno-practice-24','P04-wh-practice-24','P04-wh-test-a-16','P04-wh-test-b-16'])assert(isOpen(task(id)),id);
 const u=p04.find(u=>u.id==='P04-yesno'),s=freshState(),p=fill(s,u);
 p.examDraft.answers['P04-yesno-test-a-6']='Yes, you are.';
 const result=submitUnitTest(s,u.id,'2026-09-21T10:00:00Z');
 assert.equal(result.correct,result.total-1);assert.equal(result.status,'awaiting-review');
 const answer=result.goals.find(g=>g.id==='answer');assert.equal(answer.retry,1);assert.equal(answer.bank,'practice');
 assert(result.rows.filter(r=>r.status==='pending').length>=4);
 const sameSample=p.attempts[0];assert.equal(scoreUnitTest(u,sameSample).rows.find(r=>r.id==='P04-yesno-test-a-15').status,'pending');
 assert.doesNotThrow(()=>validateState(s));
});

test('P04 long written models are complete examples, not placeholder ellipses',()=>{
 for(const id of ['P04-wh-production-11','P04-wh-test-a-18','P04-wh-test-b-18']){
  const t=task(id);assert.equal(t.kind,'text');
  const words=t.answer.split(/\s+/).length;assert(words>=80&&words<=110,`${id}: ${words}`);
  assert(!t.answer.includes('...'));assert(t.explanation.length>40);
 }
 for(const id of ['P04-wh-test-a-17','P04-wh-test-b-17']){
  const t=task(id);assert.equal((t.answer.match(/(?:^| )[AB]: /g)||[]).length,12);assert(!t.answer.includes('...'));
 }
});

test('P04 vocabulary preserves legacy cards and adds explicit meaning-bearing chunks',()=>{
 const cards=modules.find(m=>m.id==='P04').vocabulary;assert.equal(p04Vocabulary.length,72);assert.equal(cards.length,79);
 for(let n=1;n<=6;n++)assert(cards.some(v=>v.id===`P04-v${n}`));
 for(const [word] of questionWords)assert(vocabulary.some(v=>v.word===word),'Known question word: '+word);
 for(const word of ['out of order','in charge of','on the same page','up to date','I’m not sure','let me check','is that right?','where exactly?'])assert(cards.some(v=>v.word===word&&v.context&&v.note));
 assert(p04Vocabulary.every(v=>/^\/.+\/$/u.test(v.ipa)&&v.accent==='UK'));
 assert.equal(new Set(p04Vocabulary.map(v=>v.id)).size,p04Vocabulary.length);
});

test('P04 expansion keeps old progress and multiline drafts, then preserves both exam attempts',()=>{
 const s=freshState();s.drafts.P04='Synthetic old note. This is not learner evidence.';
 s.cards['P04-v1']=reviewCard(null,'good',Date.UTC(2026,8,21));s.cards['P03-x-this']=reviewCard(null,'good',Date.UTC(2026,8,21));
 s.moduleProgress.P04={selfChecked:true,date:'2026-09-21T09:00:00Z'};
 s.placement={assessmentVersion,date:'2026-09-21T09:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};
 assert.deepEqual(validateState(structuredClone(s)),s);assert(buildPlan(s).items.some(m=>m.id==='P04'));
 const u=p04.find(u=>u.id==='P04-wh'),p=unitState(s,u.id);
 p.examDraft.answers['P04-wh-test-a-18']='Our meeting is upstairs.\nI will continue this paragraph later.';
 s.bookmark={route:'unit/P04-wh/test',scroll:1750,focus:'answer-P04-wh-test-a-18'};
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(s.schemaVersion,2);
 fill(s,u);submitUnitTest(s,u.id,'2026-09-21T10:00:00Z');const previous=structuredClone(p.attempts[0]);
 startUnitTest(s,u.id);assert.equal(p.examDraft.variant,'b');fill(s,u);submitUnitTest(s,u.id,'2026-09-22T10:00:00Z');
 assert.equal(p.attempts.length,2);assert.deepEqual(p.attempts[0],previous);assert.doesNotThrow(()=>validateState(s));
});

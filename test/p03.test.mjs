import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {pluralNouns,countabilityExamples,possessiveForms,demonstratives,nounReference,possessionReference} from '../data/nouns.mjs';
import {checkAnswer,freshState,validateState,unitState,submitUnitTest,scoreUnitTest,isOpen,buildPlan,reviewCard} from '../web/engine.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {tasks,examples} from '../data/unit-tools.mjs';

const p03=subtopics.filter(u=>u.topic==='P03');
const task=id=>p03.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks)).find(t=>t.id===id);

test('P03 appendices cover every declared base row and preserve grammatical exceptions',()=>{
 assert.equal(pluralNouns.length,36);assert.equal(countabilityExamples.length,12);
 assert.equal(possessiveForms.length,7);assert.equal(demonstratives.length,4);
 assert.equal(nounReference.rows.length,56);assert.equal(possessionReference.rows.length,21);
 for(const [singular,plural] of [['city','cities'],['key','keys'],['roof','roofs'],['knife','knives'],['photo','photos'],['potato','potatoes'],['child','children'],['woman','women'],['person','people'],['sheep','sheep'],['analysis','analyses'],['criterion','criteria']])assert.equal(pluralNouns.find(row=>row[0]===singular)?.[1],plural);
 assert.equal(possessiveForms.find(r=>r[0]==='she')[2],'hers');assert.equal(possessiveForms.find(r=>r[0]==='it')[2],'—');
 assert.deepEqual(demonstratives.map(r=>r[0]),['this','that','these','those']);
 assert(countabilityExamples.some(r=>r[0]==='news'&&r[3].includes('is')));
});

test('P03 conceptual units have varied volume, distinct texts and fresh goal-complete tests',()=>{
 assert.deepEqual(p03.map(u=>u.id),['P03-nouns','P03-articles','P03-reference','P03-possession']);
 assert(new Set(p03.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0))).size>=3);
 const testPrompts=new Set();
 for(const u of p03){
  assert(!('minutes' in u)&&!('sessions' in u));
  const read=u.banks.find(b=>b.kind==='reading'),listen=u.banks.find(b=>b.kind==='listening');
  assert(read.passage.split(/\s+/).length>=150,u.id);assert(listen.passage.split(/\s+/).length>=80,u.id);assert.notEqual(read.passage,listen.passage);
  assert(u.banks.some(b=>b.kind==='review'));assert(u.banks.every(b=>b.tasks.length>=10));
  const training=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   assert(exam.tasks.some(t=>t.kind==='speech'));assert(exam.tasks.some(t=>t.kind==='text'));
   for(const goal of u.goals)assert(exam.tasks.some(t=>t.goal===goal.id));
   for(const t of exam.tasks){assert(!training.has(t.prompt));assert(!testPrompts.has(t.prompt),'Reused exam prompt: '+t.id);testPrompts.add(t.prompt);}
  }
 }
});

test('P03 keys distinguish spelling, countability, sound, viewpoint and ownership',()=>{
 const cases=[
  ['P03-nouns-practice-5','cities','citys'],['P03-nouns-practice-6','keys','keies'],
  ['P03-nouns-practice-11','roofs','rooves'],['P03-nouns-practice-13','women','womens'],
  ['P03-nouns-practice-16','is','are'],['P03-nouns-practice-18','pieces','piece'],
  ['P03-nouns-practice-21','/s/','/ɪz/'],['P03-nouns-practice-22','/z/','/s/'],
  ['P03-nouns-reading-3',String(2+3),'2'],['P03-nouns-reading-6',String(3*10),'10'],
  ['P03-articles-practice-4','a','an'],['P03-articles-practice-6','an','a'],
  ['P03-articles-practice-7','a','an'],['P03-articles-practice-8','an','a'],
  ['P03-articles-practice-9','an','a'],['P03-articles-practice-10','a','an'],
  ['P03-articles-practice-14','the','a'],['P03-articles-practice-15','—','the'],
  ['P03-articles-practice-17','the','—'],['P03-articles-practice-18','—','a'],
  ['P03-reference-reading-2','these','those'],['P03-reference-reading-3','those','these'],
  ['P03-reference-reading-4','this','that'],['P03-reference-reading-5','that','this'],
  ['P03-reference-test-a-8','it','they'],['P03-possession-practice-10','hers','her'],
  ['P03-possession-practice-17',"student's","students'"],['P03-possession-practice-18',"students'","student's"],
  ['P03-possession-practice-19',"children's","childrens'"],['P03-possession-reading-1','Kim','Jo']
 ];
 for(const [id,correct,wrong] of cases){const t=task(id);assert(t,id);assert(checkAnswer(correct,t.answer),id+' key');assert(!checkAnswer(wrong,t.answer),id+' contrast');}
});

test('apostrophe shape is normalised but position and absence retain meaning',()=>{
 assert(checkAnswer('teacher’s',"teacher's"));assert(checkAnswer('teachers’',"teachers'"));
 assert(!checkAnswer("teacher's","teachers'"));assert(!checkAnswer('teachers',"teachers'"));
 assert(!checkAnswer("it's",'its'));assert(!checkAnswer('whose',"who's"));assert(!checkAnswer("her's",'hers'));
});

test('ambiguous article and meaning tasks stay open; a matching sample never certifies them',()=>{
 for(const id of ['P03-articles-practice-23','P03-articles-test-a-13','P03-articles-test-b-13','P03-possession-practice-23'])assert(isOpen(task(id)),id);
 const u=p03.find(u=>u.id==='P03-articles'),s=freshState(),p=unitState(s,u.id);
 p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));
 const result=submitUnitTest(s,u.id);assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert(result.pending>=4);
 const attempt=p.attempts[0];attempt.answers['P03-articles-test-a-13']='The bag — we both know which one. A bag — any suitable bag.';
 assert.equal(scoreUnitTest(u,attempt).rows.find(r=>r.id==='P03-articles-test-a-13').status,'pending');
 assert.doesNotThrow(()=>validateState(s));
});

test('P03 cards include every plural reference, all base possessives and contextual phrases',()=>{
 const cards=modules.find(m=>m.id==='P03').vocabulary;assert.equal(cards.length,96);
 for(const [one,many,ipa] of pluralNouns){const v=cards.find(v=>v.id===`P03-x-plural-${one}`);assert.equal(v?.word,many);assert.equal(v?.ipa,`/${ipa}/`);}
 for(const row of possessiveForms)for(const form of row.slice(1,3).filter(x=>x!=='—'))assert(cards.some(v=>v.word===form));
 for(const word of ['this','that','these','those','a friend of mine','at first glance','on my own','here you are'])assert(cards.some(v=>v.word===word&&v.context&&v.note));
 assert(cards.every(v=>/^\/.+\/$/u.test(v.ipa)&&!v.ipa.includes('undefined')));
 assert.equal(new Set(vocabulary.map(v=>v.id)).size,vocabulary.length);
});

test('P03 expansion preserves prior exports, drafts and SRS without inheriting a legacy self-check',()=>{
 const s=freshState();s.drafts.P03='Synthetic earlier notes, not learner data.';
 s.cards['P03-v1']=reviewCard(null,'good',Date.UTC(2026,8,21));s.cards['P02-x-number-0']=reviewCard(null,'good',Date.UTC(2026,8,21));
 s.moduleProgress.P03={selfChecked:true,date:'2026-09-21T12:00:00Z'};
 s.placement={assessmentVersion,date:'2026-09-21T12:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};
 assert.deepEqual(validateState(structuredClone(s)),s);assert(buildPlan(s).items.some(m=>m.id==='P03'));
 const p=unitState(s,'P03-possession');p.examDraft.answers['P03-possession-test-a-14']='Jo’s two books are here.\nI will continue later.';
 s.bookmark={route:'unit/P03-possession/test',scroll:810,focus:'answer-P03-possession-test-a-14'};
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(s.schemaVersion,2);
});

test('authoring parser rejects hidden extra fields instead of silently dropping content',()=>{
 assert.throws(()=>tasks('sample','short~goal~Question~Key~Explanation~Accidental extra'),/5 fields/);
 assert.throws(()=>examples('Example~Translation~Reason~Accidental extra'),/3 nonempty fields/);
 assert.throws(()=>examples('Example~~Reason'),/3 nonempty fields/);
 const parsed=tasks('sample','short~goal~Question~a|an~Context determines the answer.');assert.equal(parsed[0].id,'sample-1');assert.equal(parsed[0].answer,'a|an');
});

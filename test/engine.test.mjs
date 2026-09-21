import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,levels} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {freshState,validateState,scorePlacement,buildPlan,reviewCard,checkAnswer,textSimilarity} from '../web/engine.mjs';

const answers=(fn=q=>q.answer)=>Object.fromEntries(questions.map(q=>[q.id,fn(q)]));
function placed(map){const state=freshState();state.placement={assessmentVersion,date:'2026-09-21T12:00:00Z',answers:map};return state;}

test('unknown learner gets no invented level or plan',()=>{
  assert.equal(buildPlan(freshState()),null);
  for(const s of Object.values(scorePlacement().skills)){assert.equal(s.supported,'unknown');assert.equal(s.answered,0);}
});
test('complete correct answers are provisional, not a certificate',()=>{
  const result=scorePlacement(answers());assert(result.provisional);
  for(const s of Object.values(result.skills)){assert.equal(s.supported,'C2');assert.equal(s.study,'C2');}
});
test('missing listening remains unknown even with excellent written answers',()=>{
  const map=answers();for(const q of questions.filter(q=>q.skill==='listening'))delete map[q.id];
  const result=scorePlacement(map);assert.equal(result.skills.listening.supported,'unknown');assert.equal(result.skills.grammar.supported,'C2');
});
test('partially answered skill remains unknown and preserves evidence',()=>{
  const result=scorePlacement({l01:1});assert.equal(result.skills.listening.correct,1);assert.equal(result.skills.listening.study,'unknown');
});
test('explicit uncertainty completes a response without forcing a guess; omissions stay unknown',()=>{
  const state=placed(answers(q=>q.options.length));
  assert.doesNotThrow(()=>validateState(state));
  const result=scorePlacement(state.placement.answers);
  assert.equal(result.skills.grammar.complete,true);assert.equal(result.skills.grammar.correct,0);
  assert.equal(result.skills.grammar.study,'Pre-A1');
  assert.equal(scorePlacement({}).skills.grammar.supported,'unknown');
});
test('a later high score cannot bypass a failed early block',()=>{
  const result=scorePlacement(answers(q=>q.level==='A2'?(q.answer+1)%4:q.answer));
  for(const s of Object.values(result.skills)){assert.equal(s.supported,'A1');assert.equal(s.study,'A2');}
});
test('low baseline directs to foundation, with remediation topics',()=>{
  const result=scorePlacement(answers(q=>(q.answer+1)%4));assert.equal(result.skills.grammar.study,'Pre-A1');assert(result.gaps.includes('P04'));
});
test('manual weak writing changes the plan and unknown pronunciation stays pending',()=>{
  const state=placed(answers());state.profile.reviewedSkills.writing={level:'A2',evidence:'Reviewed an independent letter; tense contrasts were unstable.'};
  const plan=buildPlan(state);assert.equal(plan.start,'A2');assert(plan.items.some(m=>m.id==='A201'));assert(plan.pending.includes('pronunciation'));
});
test('plans keep selected prerequisites before dependants, across every start',()=>{
  for(const level of levels.slice(1)){
    const state=placed(answers(q=>levels.indexOf(q.level)>=levels.indexOf(level)?(q.answer+1)%4:q.answer));
    const plan=buildPlan(state);const pos=new Map(plan.items.map((m,i)=>[m.id,i]));
    for(const m of modules)if(pos.has(m.id))for(const p of m.prerequisites)if(pos.has(p))assert(pos.get(p)<pos.get(m.id),`${p} must precede ${m.id}`);
    assert.equal(new Set(plan.items.map(m=>m.id)).size,plan.items.length);
  }
});
test('self-checked modules leave queue; missing prerequisites are explicit checks',()=>{
  const state=placed(answers());state.moduleProgress.C201={selfChecked:true,date:new Date().toISOString()};
  const plan=buildPlan(state);assert(!plan.items.some(m=>m.id==='C201'));assert(plan.items.some(m=>m.checks.length));
});
test('personal time changes neither content nor topic queue',()=>{
  const state=placed(answers(q=>(q.answer+1)%4));const a=buildPlan(state);
  state.profile.minutes=90;state.profile.days=2;const b=buildPlan(state);
  assert.deepEqual(a.items,b.items);assert.equal(a.minutes,30);assert.equal(b.minutes,90);
  assert(!('weeks' in a));assert(modules.every(m=>!('sessions' in m)));
});
test('SRS intervals and lapse are deterministic',()=>{
  const now=Date.UTC(2026,8,21);let card;
  for(const days of [1,3,7,14,30,60,60]){card=reviewCard(card,'good',now);assert.equal(Date.parse(card.due)-now,days*86400000);}
  card=reviewCard(card,'again',now);assert.equal(card.step,0);assert.equal(Date.parse(card.due)-now,86400000);
  const hard=reviewCard(card,'hard',now);assert.equal(hard.step,0);assert.throws(()=>reviewCard(card,'invalid'));
});
test('answer comparison tolerates case, apostrophe, whitespace and punctuation',()=>{
  assert(checkAnswer('  DON’T!  ',"don't|do not"));assert(!checkAnswer('works','work'));assert(checkAnswer('Where are you?', 'Where are you?'));
});
test('answer comparison preserves meaningful numeric punctuation',()=>{
  assert(!checkAnswer('15','1.5'));assert(!checkAnswer('1.5','15'));
  assert(!checkAnswer('.5','5'));assert(!checkAnswer('915','9:15'));
  assert(!checkAnswer('1,5','15'));assert(!checkAnswer('1,000','1.000'));
  assert(checkAnswer('9:15.','9:15'));assert(checkAnswer('1500','1500|1,500'));
  assert(checkAnswer('The limit is 1.5.','The limit is 1.5'));
});
test('text similarity handles empty text and word-order substitutions',()=>{
  assert.equal(textSimilarity('hello',''),0);assert.equal(textSimilarity('',''),0);assert.equal(textSimilarity('Hello, world!','hello world'),100);assert(textSimilarity('she can work','she cannot work')<100);
});
test('valid state round trip retains responses and drafts without aliasing',()=>{
  const state=placed(answers());state.drafts.P01='My own sentence.';const copy=validateState(JSON.parse(JSON.stringify(state)));copy.drafts.P01='Changed';assert.equal(state.drafts.P01,'My own sentence.');
});
test('import rejects corrupt, unknown and prototype keys before replacing state',()=>{
  assert.throws(()=>validateState({schemaVersion:2}));
  const state=freshState();state.placementDraft.g01=99;assert.throws(()=>validateState(state));
  const bad=freshState();bad.cards.unknown={};assert.throws(()=>validateState(bad));
  const proto=JSON.parse(JSON.stringify(freshState()));Object.defineProperty(proto,'__proto__',{value:{polluted:true},enumerable:true});assert.throws(()=>validateState(proto));assert.equal({}.polluted,undefined);
});
test('reviewed skill needs meaningful evidence and valid level',()=>{
  const state=freshState();state.profile.reviewedSkills.speaking={level:'C2',evidence:''};assert.throws(()=>validateState(state));
});
test('export cannot silently reuse incompatible assessment keys',()=>{
  const state=placed(answers());state.placement.assessmentVersion='other-test';assert.throws(()=>validateState(state));
});

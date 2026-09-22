import test from 'node:test';
import assert from 'node:assert/strict';
import {modules} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {freshState,unitState,unitWorkProgress,topicWorkProgress,submitUnitTest,startUnitTest,scoreUnitTest,validateState,buildPlan} from '../web/engine.mjs';

const topic=modules.find(m=>m.id==='P01');
const practice=unit=>unit.banks.flatMap(b=>b.tasks);
const fillPractice=(state,unit)=>{for(const t of practice(unit))unitState(state,unit.id).answers[t.id]='Synthetic practice response.';};
function sendTest(state,unit){
 const draft=startUnitTest(state,unit.id),test=unit.tests.find(t=>t.id===draft.variant);
 for(const t of test.tasks)draft.answers[t.id]='Не знаю';
 return submitUnitTest(state,unit.id,'2026-09-22T12:00:00Z');
}

test('all 40 topics start at zero; reading counters does not create learner records',()=>{
 const state=freshState(),before=structuredClone(state);
 for(const m of modules){
  const p=topicWorkProgress(state,m.id);
  assert.equal(p.percent,0);assert.equal(p.completed,0);assert(p.total>0);
  assert.equal(p.kind,m.subtopics.length?'expanded':'legacy');
 }
 for(const u of topic.subtopics)assert.equal(unitWorkProgress(state,u.id).practiceAnswered,0);
 assert.deepEqual(state,before);
 assert.throws(()=>topicWorkProgress(state,'missing'),/Неизвестный/);
 assert.throws(()=>unitWorkProgress(state,'missing'),/Неизвестная/);
});

test('aggregate uses all practice tasks, not an average of unequal subtopics',()=>{
 const state=freshState();fillPractice(state,topic.subtopics[0]);
 const p=topicWorkProgress(state,'P01'),answered=practice(topic.subtopics[0]).length;
 assert.equal(p.practiceTotal,197);assert.equal(p.testsTotal,4);assert.equal(p.total,201);
 assert.equal(p.practiceAnswered,answered);assert.equal(p.completed,answered);
 assert.equal(p.percent,Math.floor(100*answered/201));
});

test('only nonblank answers to current task IDs count, including ungraded open responses',()=>{
 const state=freshState(),unit=topic.subtopics[0],saved=unitState(state,unit.id);
 const tasks=practice(unit);
 saved.answers[tasks[0].id]='  \n\t';saved.answers[tasks[1].id]='wrong';
 const open=tasks.find(t=>['text','speech'].includes(t.kind));
 assert(open);saved.answers[open.id]='An unfinished text.\nMore later.';
 saved.answers['removed-task']='Old response';saved.answers[unit.tests[0].tasks[0].id]='Not practice';
 saved.checks[tasks[2].id]={answer:'Old checked response',date:'2026-09-22'};
 assert.equal(unitWorkProgress(state,unit.id).practiceAnswered,2);
 assert.equal(topicWorkProgress(state,'P01').completed,2);
});

test('time, notes, cards, bookmark and a legacy checkbox cannot complete expanded material',()=>{
 const state=freshState();state.profile.minutes=90;state.profile.days=7;
 state.moduleProgress.P01={selfChecked:true,date:'2026-09-22'};
 state.drafts.P01='Synthetic notes';state.cards[topic.vocabulary[0].id]={step:5};
 state.bookmark={route:`unit/${topic.subtopics[0].id}/explain`,scroll:1000,focus:''};
 assert.equal(topicWorkProgress(state,'P01').completed,0);
});

test('even a full exam draft does not count before submission',()=>{
 const state=freshState(),u=topic.subtopics[0],draft=unitState(state,u.id).examDraft;
 for(const t of u.tests[0].tasks)draft.answers[t.id]='Synthetic response';
 assert.equal(topicWorkProgress(state,'P01').testsSubmitted,0);
 const result=submitUnitTest(state,u.id,'2026-09-22T12:00:00Z');
 assert.equal(topicWorkProgress(state,'P01').testsSubmitted,1);
 assert.equal(topicWorkProgress(state,'P01').completed,1);
 assert.equal(result.status,'awaiting-review');assert.equal(result.correct,0);
});

test('partial or unknown exam attempts do not inflate progress',()=>{
 const state=freshState(),u=topic.subtopics[0],p=unitState(state,u.id);
 p.attempts.push({variant:'missing',answers:{}},{variant:'a',answers:{[u.tests[0].tasks[0].id]:'x'}});
 assert.equal(topicWorkProgress(state,'P01').testsSubmitted,0);
});

test('repeat variants, manual grades and new drafts neither inflate nor reset submission credit',()=>{
 const state=freshState(),u=topic.subtopics[0];
 sendTest(state,u);const first=structuredClone(state.learning[u.id].attempts[0]);
 sendTest(state,u);sendTest(state,u);startUnitTest(state,u.id);
 assert.equal(unitWorkProgress(state,u.id).attempts,3);
 assert.equal(topicWorkProgress(state,'P01').testsSubmitted,1);
 assert.equal(topicWorkProgress(state,'P01').completed,1);
 assert.deepEqual(state.learning[u.id].attempts[0],first);
 const open=u.tests[0].tasks.find(t=>['text','speech'].includes(t.kind));
 state.learning[u.id].attempts[0].reviews[open.id]={score:0};
 assert.equal(topicWorkProgress(state,'P01').completed,1);
});

test('100% requires all practice and one complete submitted test per unit, not rounding up',()=>{
 const state=freshState();topic.subtopics.forEach(u=>fillPractice(state,u));
 assert.equal(topicWorkProgress(state,'P01').percent,98);
 topic.subtopics.slice(0,-1).forEach(u=>sendTest(state,u));
 assert.equal(topicWorkProgress(state,'P01').percent,99);
 sendTest(state,topic.subtopics.at(-1));
 const complete=topicWorkProgress(state,'P01');
 assert.equal(complete.percent,100);assert.equal(complete.completed,complete.total);
 // All test answers are "I don't know": work completion is explicitly NOT mastery.
 for(const u of topic.subtopics)assert.equal(scoreUnitTest(u,state.learning[u.id].attempts[0]).status,'awaiting-review');
 const u=topic.subtopics[0];state.learning[u.id].answers[practice(u)[0].id]='';
 assert.equal(topicWorkProgress(state,'P01').percent,99);
 assert.equal(topicWorkProgress(state,'P01').testsSubmitted,4);
});

test('legacy topics have an explicitly separate binary self-check indicator',()=>{
 const state=freshState();state.drafts.A105='A long draft does not prove a check.';
 assert.deepEqual(topicWorkProgress(state,'A105'),{kind:'legacy',completed:0,total:1,percent:0});
 state.moduleProgress.A105={selfChecked:true,date:'2026-09-22'};
 assert.deepEqual(topicWorkProgress(state,'A105'),{kind:'legacy',completed:1,total:1,percent:100});
 state.moduleProgress.A105.selfChecked=false;
 assert.equal(topicWorkProgress(state,'A105').percent,0);
});

test('v1 migration retains old marks but does not apply them to expanded topics',()=>{
 const old=freshState();old.schemaVersion=1;delete old.learning;delete old.bookmark;
 old.moduleProgress={P01:{selfChecked:true,date:'2026-09-22'},A104:{selfChecked:true,date:'2026-09-22'},A105:{selfChecked:true,date:'2026-09-22'}};
 old.drafts.P01='Preserve these synthetic notes.';
 const restored=validateState(old);
 assert.equal(topicWorkProgress(restored,'P01').percent,0);
 assert.equal(topicWorkProgress(restored,'A104').percent,0);
 assert.equal(topicWorkProgress(restored,'A105').percent,100);
 assert.equal(restored.drafts.P01,old.drafts.P01);
 assert.deepEqual(restored.moduleProgress,old.moduleProgress);
});

test('v2 round trip preserves counts, pending exam, original attempts and draft without new schema fields',()=>{
 const state=freshState(),u=topic.subtopics[0];fillPractice(state,u);sendTest(state,u);
 const draft=startUnitTest(state,u.id);draft.answers[u.tests[1].tasks[0].id]='Unfinished';
 const before=JSON.stringify(state),expected=topicWorkProgress(state,'P01');
 const restored=validateState(JSON.parse(before));
 assert.deepEqual(topicWorkProgress(restored,'P01'),expected);
 assert.deepEqual(restored,state);assert.equal(JSON.stringify(state),before);
 assert.equal(restored.schemaVersion,2);assert(!('topicProgress' in restored));
});

test('work completion does not remove an expanded topic from the learning plan',()=>{
 const state=freshState();topic.subtopics.forEach(u=>{fillPractice(state,u);sendTest(state,u);});
 state.placement={assessmentVersion,date:'2026-09-22T12:00:00Z',answers:Object.fromEntries(questions.filter(q=>q.skill==='grammar').map(q=>[q.id,q.options.length]))};
 assert.equal(topicWorkProgress(state,'P01').percent,100);
 assert(buildPlan(state).items.some(m=>m.id==='P01'));
 const prior=topicWorkProgress(state,'P01');state.profile.minutes=15;state.profile.days=2;
 assert.deepEqual(topicWorkProgress(state,'P01'),prior);
});

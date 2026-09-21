import test from 'node:test';
import assert from 'node:assert/strict';
import {subtopics,modules,vocabulary} from '../data/course.mjs';
import {freshState,validateState,unitState,scoreUnitTest,submitUnitTest,startUnitTest,isOpen,buildPlan,reviewCard} from '../web/engine.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
const unit=subtopics.find(u=>u.id==='P01-be');
const fill=(state,u=unit)=>{const p=unitState(state,u.id);const t=u.tests.find(t=>t.id===p.examDraft.variant);p.examDraft.answers=Object.fromEntries(t.tasks.map(q=>[q.id,q.answer.split('|')[0]]));return p;};
test('v1 migration preserves evidence, notes, old SRS and checkbox without certifying expanded units',()=>{
 const old=freshState();old.schemaVersion=1;delete old.learning;delete old.bookmark;
 old.drafts.P01='Original notes';old.cards['P01-v1']=reviewCard(null,'good',Date.UTC(2026,8,21));old.moduleProgress.P01={selfChecked:true,date:'2026-09-21T12:00:00Z'};
 old.placement={assessmentVersion,date:'2026-09-21T12:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};
 const next=validateState(old);assert.equal(next.schemaVersion,2);assert.deepEqual(next.cards,old.cards);assert.deepEqual(next.moduleProgress,old.moduleProgress);assert.equal(next.drafts.P01,old.drafts.P01);assert.deepEqual(next.learning,{});assert(!('learning' in old));assert(buildPlan(next).items.some(m=>m.id==='P01'));
});
test('new vocabulary retains all old IDs and adds transcribed idiomatic expressions',()=>{
 for(const m of modules)for(let i=1;i<=6;i++)assert(vocabulary.some(v=>v.id===`${m.id}-v${i}`));
 assert(vocabulary.every(v=>v.ipa.startsWith('/')&&v.ipa.endsWith('/')));assert(vocabulary.some(v=>v.kind==='идиома'&&v.note));
});
test('draft sentences and paragraphs survive export, with exact bookmark and no score',()=>{
 const s=freshState(),p=unitState(s,unit.id),task=unit.tests[0].tasks.find(t=>t.kind==='text');
 p.examDraft.answers[task.id]='My own paragraph.\nIt is unfinished.';
 s.bookmark={route:`unit/${unit.id}/test`,scroll:2350,focus:'answer-'+task.id};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(p.attempts.length,0);
});
test('incomplete submission keeps draft and does not reveal an attempted result',()=>{
 const s=freshState();unitState(s,unit.id).examDraft.answers[unit.tests[0].tasks[0].id]='are';
 assert.throws(()=>submitUnitTest(s,unit.id),/Ответьте/);assert.equal(s.learning[unit.id].attempts.length,0);assert(s.learning[unit.id].examDraft);
});
test('all closed answers correct still leaves extended and spoken responses pending',()=>{
 const s=freshState(),p=fill(s),result=submitUnitTest(s,unit.id);
 assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert(result.pending>0);assert.equal(p.examDraft,null);assert.equal(p.attempts.length,1);assert(result.goals.some(g=>g.pending));assert.doesNotThrow(()=>validateState(s));
});
test('fresh variants preserve original responses, feedback and chronological history',()=>{
 const s=freshState(),p=fill(s);submitUnitTest(s,unit.id,'2026-09-21T10:00:00Z');
 const original=structuredClone(p.attempts[0]);startUnitTest(s,unit.id);assert.equal(p.examDraft.variant,'b');fill(s);submitUnitTest(s,unit.id,'2026-09-22T10:00:00Z');assert.deepEqual(p.attempts[0],original);assert.equal(p.attempts.length,2);assert.doesNotThrow(()=>validateState(s));
});
test('wrong closed responses identify learning goals and targeted remediation',()=>{
 const s=freshState(),p=fill(s);const task=unit.tests[0].tasks[0];p.examDraft.answers[task.id]='wrong';const r=submitUnitTest(s,unit.id);
 assert(r.goals.find(g=>g.id===task.goal).retry>0);assert.equal(r.goals.find(g=>g.id===task.goal).bank,'practice');
});
test('open reviews require evidence and spoken reviews require heard audio',()=>{
 const s=freshState(),p=fill(s);submitUnitTest(s,unit.id);const a=p.attempts[0];
 const speech=unit.tests[0].tasks.find(t=>t.kind==='speech');
 a.reviews[speech.id]={score:4,reviewer:'Tutor',evidence:'Transcript only, no audio was available.',date:'2026-09-22T10:00:00Z'};
 assert.throws(()=>validateState(s),/аудио/);a.reviews[speech.id].heardAudio=true;assert.doesNotThrow(()=>validateState(s));
 a.reviews[speech.id].evidence='';assert.throws(()=>validateState(s),/основание/);
});
test('reviewed initial performance still requires delayed transfer, never automatic mastery',()=>{
 const s=freshState(),p=fill(s);submitUnitTest(s,unit.id);const a=p.attempts[0];
 for(const task of unit.tests[0].tasks.filter(isOpen))a.reviews[task.id]={score:3,reviewer:'Tutor',evidence:'Task completed independently, small errors discussed.',heardAudio:true,date:'2026-09-22T10:00:00Z'};
 assert.equal(scoreUnitTest(unit,a).status,'awaiting-delayed-check');assert.doesNotThrow(()=>validateState(s));
});
test('validation rejects unknown task, changed variant, bad review and unsafe bookmark',()=>{
 const s=freshState();const p=unitState(s,unit.id);p.answers.unknown='text';assert.throws(()=>validateState(s));delete p.answers.unknown;
 p.examDraft.variant='z';assert.throws(()=>validateState(s));p.examDraft.variant='a';
 s.bookmark={route:'javascript:alert(1)',scroll:0,focus:''};assert.throws(()=>validateState(s));
 s.bookmark={route:'unit/P01-be/unknown',scroll:0,focus:''};assert.throws(()=>validateState(s));
});
test('all variants have usable keys and pending open responses',()=>{
 for(const u of subtopics)for(const t of u.tests){const s=freshState(),p=unitState(s,u.id);p.examDraft.variant=t.id;fill(s,u);const result=submitUnitTest(s,u.id);assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');validateState(s);}
});

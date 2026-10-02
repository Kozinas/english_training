import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {documentationReading,documentationListening,documentationModels} from '../data/t01-documentation-texts.mjs';
import {documentationSources,documentationPatterns,documentationReference} from '../data/documentation-language.mjs';
import {t01Vocabulary} from '../data/lexicon-t01.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='T01'),u=subtopics.find(u=>u.id==='T01-documentation'),first=subtopics.find(u=>u.id==='T01-interface');
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,unit.id,'2026-09-29T17:00:00Z');return p;}
function oldState(){
 const s=freshState(),p=complete(s,first),t=first.tests[0].tasks.find(t=>t.kind==='text');
 p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T17:10:00Z',evidence:'Synthetic fixture, not actual learner feedback.'};startUnitTest(s,first.id);p.examDraft.answers[first.tests[1].tasks.find(t=>t.kind==='text').id]='Synthetic next answer\nContinue later.';
 s.cards['T01-x-40']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T01-v1']=reviewCard(null,'hard',Date.UTC(2026,8,27));s.moduleProgress.T01={selfChecked:true,date:'2026-09-22'};s.drafts.T01='Synthetic old notes';
 const route='unit/T01-interface/writing';s.navigation.current=route;s.navigation.sections.course=route;s.navigation.pages[route]={scroll:750,focus:'answer-T01-interface-writing-11',fields:{},details:[]};s.navigation.pages['module/T01']={scroll:150,focus:'drill1',fields:{drill0:'upload',drill1:'is\nSynthetic archived answer',drill2:'exiting'},details:[true]};s.bookmark={route,scroll:750,focus:'answer-T01-interface-writing-11'};return s;
}
test('T01 documentation adds a natural reading scope alongside the published procedures unit',()=>{
 assert.equal(u.explanation.length,14);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>9000);assert.equal(u.examples.length,36);assert.deepEqual(u.prerequisites,[first.id]);assert.equal(u.goals.length,7);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,12,14,14,14,12,12,12,12]);assert.equal(practice.length,116);assert.equal(topic.subtopics.length,3);assert.deepEqual(topic.remainingScope,[]);assert.equal(topic.contentStatus,'expanded');
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy,courseStats.subtopics,courseStats.practice,courseStats.testTasks],[38,1,1,123,11157,5432]);
});
test('T01 documentation keys independently enforce agreement, verb patterns and prepositions',()=>{
 for(const [s,right,wrong]of [['forms-1','supports','support'],['forms-2','to choose','choose'],['forms-3','read','to read'],['forms-4','requires','require'],['forms-5','is','does'],['forms-6','Does','Is'],['forms-7','editing','edit'],['forms-8','to','of'],['forms-9','on','of'],['review-1','allows','lets'],['review-2','creating','create'],['test-a-1','is','does'],['test-a-2','inspect','to inspect'],['test-a-3','changing','change'],['test-a-4','on','of'],['test-b-1','describes','describe'],['test-b-2','to choose','choose'],['test-b-3','to','of'],['test-b-4','creating','create']]){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 for(const s of ['forms-10','forms-11','forms-12','forms-13','test-a-14','test-b-14'])assert(isOpen(task(s)));assert(task('forms-12').answer.includes('what the option means'));
});
test('T01 documentation lookup separates overview, reference and unperformed verification',()=>{
 for(const [s,right,wrong]of [['lookup-1','Overview','Troubleshooting'],['lookup-2','Reference','Credits'],['lookup-3','Prerequisites','Changelog'],['lookup-4','Troubleshooting','Examples'],['test-a-5','Reference','Overview'],['test-b-5','Troubleshooting','Overview']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('lookup-6').answer.includes('not every file type'));assert(task('lookup-7').explanation.includes('Не фабриковать'));assert(task('lookup-11').explanation.includes('во всех документах'));
});
test('T01 documentation conditions preserve optional-group scope, default units and unknown causes',()=>{
 for(const s of ['conditions-2','conditions-3','conditions-4','conditions-5','conditions-6','test-a-8','test-b-8']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 for(const [s,right,wrong]of [['conditions-1','10','5'],['review-4','15','7'],['test-a-6','12','4'],['test-b-6','6','2']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('conditions-7').answer.includes('if you do not have'));assert(task('conditions-8').answer.includes('достаточность'));assert(task('conditions-9').answer.includes('10 больше 9'));assert(task('conditions-13').answer.includes('возможную причину'));
});
test('T01 path keys distinguish punctuation while free literal paths remain manually checked',()=>{
 for(const [s,right,wrong]of [['notation-1','underscore','hyphen'],['notation-2','hyphen','underscore'],['notation-3','slash','backslash'],['notation-4','backslash','slash'],['notation-5','dot','colon'],['notation-6','colon','underscore'],['test-a-7','underscore','hyphen'],['test-b-7','hyphen','underscore']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('notation-4').prompt.includes('C:\\Practice\\sample.txt'));assert(task('notation-8').answer.includes('значение OUTPUT_FILE'));assert(task('notation-10').answer.includes('practice'));assert(task('notation-12').explanation.includes('оболочки'));
 for(const s of ['notation-9','notation-10','notation-11','test-a-21','test-b-21'])assert(isOpen(task(s)),'case/punctuation cannot be erased by string normalization');
});
test('T01 Maple reading keeps the display/export distinction and undocumented quoting',()=>{
 assert.equal(words(documentationReading),548);assert(documentationReading.includes('Do not install anything or run the examples'));
 for(const [s,right,wrong]of [['reading-1','2.4','2.3'],['reading-2','2.3','2.4'],['reading-3','10','5'],['reading-4','practice','demo']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('reading-6').answer.includes('не перечислено'));assert(task('reading-8').answer.includes('all notes'));assert(task('reading-10').answer.includes('не source и не export'));assert(task('reading-12').answer.includes('отказывается перезаписывать'));assert(task('reading-13').answer.includes('paths with spaces'));
});
test('T01 Fern audio is independent and preserves both corrections and promised-not-completed work',()=>{
 assert.equal(words(documentationListening),433);assert(!documentationListening.includes('Maple'));assert(documentationListening.includes('one narrator'));
 for(const [s,right,wrong]of [['listening-1','1.7','1.6'],['listening-2','1.6','1.7'],['listening-3','eight','three'],['listening-4','3','8']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('listening-7').answer.includes('meeting_notes.txt'));assert(task('listening-8').answer.includes('demo'));assert(task('listening-9').answer.includes('ещё не нашла'));assert(task('listening-10').answer.includes('ни одна'));assert(task('listening-12').answer.includes('не с broken'));
});
test('T01 documentation includes six complete writing models and separate full revision',()=>{
 assert.deepEqual(Object.fromEntries(Object.entries(documentationModels).map(([k,v])=>[k,words(v)])),{summary:110,clarification:110,comparison:110,handoff:104,correction:82,reflection:83});
 for(const [k,v]of Object.entries(documentationModels)){const min=['correction','reflection'].includes(k)?80:k==='handoff'?100:110,max=['correction','reflection'].includes(k)?110:k==='handoff'?140:150;assert(words(v)>=min&&words(v)<=max);assert(practice.some(t=>t.answer===v));}
 assert(task('writing-7').prompt.includes('Moss'));assert(task('writing-11').prompt.includes('полностью'));assert(task('writing-11').explanation.includes('журнал не заменяет'));assert(documentationModels.comparison.includes('not words'));assert(documentationModels.handoff.includes('still outstanding'));
});
test('T01 references are bounded primary guidance and old vocabulary bytes are unchanged',()=>{
 assert.equal(documentationPatterns.length,32);assert(documentationPatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(documentationReference.practice.length,16);assert.equal(documentationSources.length,5);
 assert(documentationReference.intro.some(s=>s.includes('не весь синтаксис')));assert(documentationReference.intro.some(s=>s.includes('только к проектам')));
 assert.equal(t01Vocabulary.length,112);assert.equal(createHash('sha256').update(JSON.stringify(t01Vocabulary.slice(0,40))).digest('hex'),'2fba9f35ddbb4f44de9213c7000172baaa17c23f4e1c4bedaa6c106dc8941c7e');
 assert.equal(t01Vocabulary[40].id,'T01-x-41');assert.equal(t01Vocabulary[75].id,'T01-x-76');for(const c of t01Vocabulary.slice(40))assert(c.context&&c.note&&c.accent==='UK'&&/^\/.+\/$/.test(c.ipa));assert(t01Vocabulary.some(c=>c.word==='read back'&&c.kind==='фразовый глагол'));
});
test('T01 documentation controls are fresh across both variants and cover all seven goals',()=>{
 const seen=new Set(practice.map(t=>t.prompt));for(const e of u.tests){assert.equal(e.tasks.length,24);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,16);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,3);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!seen.has(t.prompt),t.id);seen.add(t.prompt);}}
 assert(task('test-a-9').prompt.includes('Cedar'));assert(task('test-b-9').prompt.includes('Birch'));for(const v of ['a','b']){assert(task(`test-${v}-12`).prompt.includes('120–160'));assert(task(`test-${v}-22`).prompt.includes('120–160'));assert(task(`test-${v}-24`).prompt.includes('Через 7 дней'));}
});
test('T01 documentation requires real hidden listening, partner correction and unprepared interaction',()=>{
 for(const v of ['a','b']){assert(task(`test-${v}-17`).explanation.includes('text-supported'));assert(task(`test-${v}-18`).prompt.includes('Партнёр'));assert.equal(task(`test-${v}-23`).kind,'speech');}
 assert(task('test-a-17').explanation.includes('pending'));assert(task('speaking-11').explanation.includes('не подтверждает oral fluency'));assert(task('notation-14').explanation.includes('ASR'));assert(task('review-10').explanation.includes('заранее'));
});
test('T01 previous 101 completed steps import as 101/337 with full history, reviews, draft and SRS',()=>{
 const s=oldState(),before=structuredClone(s),restored=roundTrip(s);assert.deepEqual(restored,before);assert(!restored.learning[u.id]);assert.equal(restored.schemaVersion,2);
 assert.deepEqual(topicWorkProgress(restored,'T01'),{kind:'expanded',completed:101,total:337,percent:29,practiceAnswered:100,practiceTotal:334,testsSubmitted:1,testsTotal:3});unitState(restored,u.id).answers[task('forms-1').id]='supports';assert.equal(topicWorkProgress(restored,'T01').completed,102);assert.deepEqual(restored.learning[first.id],before.learning[first.id]);assert.deepEqual(restored.navigation,before.navigation);assert.deepEqual(restored.cards,before.cards);
});
test('T01 legacy v1 import retains the archive and never fills either new unit',()=>{
 const s=freshState();s.schemaVersion=1;delete s.learning;s.moduleProgress.T01={selfChecked:true,date:'2026-09-22'};s.drafts.T01='Synthetic legacy notes';s.navigation.pages['module/T01']={scroll:100,focus:'drill0',fields:{drill0:'upload',drill1:'is',drill2:'exiting'},details:[]};
 const r=roundTrip(s);assert.equal(r.schemaVersion,2);assert.deepEqual(r.navigation,s.navigation);assert.equal(r.drafts.T01,s.drafts.T01);assert.equal(topicWorkProgress(r,'T01').completed,0);assert(!r.learning[first.id]);assert(!r.learning[u.id]);
});
test('T01 documentation preserves full original, revision and exam draft without touching first-unit answers',()=>{
 const s=oldState(),old=structuredClone(s.learning[first.id]),p=unitState(s,u.id);p.answers[task('writing-7').id]='Synthetic original\n'+documentationModels.summary;p.answers[task('writing-11').id]='Synthetic revision\n'+documentationModels.summary;p.examDraft.answers[task('test-a-12').id]='Synthetic next response\n'+documentationModels.clarification;
 assert.deepEqual(roundTrip(s),s);assert.deepEqual(s.learning[first.id],old);assert.equal(topicWorkProgress(s,'T01').completed,103);
});
test('T01 new A/B attempts retain originals and sixteen pending answers without duplicate progress credit',()=>{
 const s=oldState(),p=unitState(s,u.id);let a;for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T17:20:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,16);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'T01').completed,102);if(e.id==='a'){a=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],a);}
 assert.deepEqual(roundTrip(s),s);const speech=u.tests[0].tasks.find(t=>t.kind==='speech');p.attempts[0].reviews[speech.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T17:25:00Z',evidence:'Synthetic validation fixture, not learner audio.',heardAudio:false};assert.throws(()=>roundTrip(s),/прослушанное аудио/);p.attempts[0].reviews[speech.id].heardAudio=true;assert.deepEqual(roundTrip(s),s);
});
test('T01 the old 218 filled steps cover only two units, not mastered and independent of study minutes',()=>{
 const s=oldState(),p=complete(s,u),work=topicWorkProgress(s,'T01');assert.equal(work.completed,218);assert.equal(work.total,337);assert.equal(work.percent,64);assert.equal(topic.contentStatus,'expanded');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 s.placement={assessmentVersion,date:'2026-09-29T17:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};assert(buildPlan(s).items.some(m=>m.id==='T01'&&m.contentStatus==='expanded'));s.profile.minutes=15;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T01'),work);assert.deepEqual(roundTrip(s),s);
});

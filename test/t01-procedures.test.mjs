import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats,topicDevelopment} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {proceduresReading,proceduresListening,proceduresModels} from '../data/t01-procedures-texts.mjs';
import {procedureSources,procedurePatterns,procedureReference} from '../data/procedure-language.mjs';
import {t01Vocabulary} from '../data/lexicon-t01.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='T01'),u=subtopics.find(u=>u.id==='T01-procedures'),older=topic.subtopics.slice(0,2);
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,unit.id,'2026-09-29T18:00:00Z');return p;}
function oldState(){
 const s=freshState();for(const unit of older){const p=complete(s,unit),t=unit.tests[0].tasks.find(t=>t.kind==='text');p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T18:10:00Z',evidence:'Synthetic import fixture, not actual learner feedback.'};startUnitTest(s,unit.id);p.examDraft.answers[unit.tests[1].tasks.find(t=>t.kind==='text').id]='Synthetic next answer\nContinue later.';}
 s.cards['T01-x-76']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T01-v1']=reviewCard(null,'hard',Date.UTC(2026,8,27));s.moduleProgress.T01={selfChecked:true,date:'2026-09-22'};s.drafts.T01='Synthetic old notes';
 const route='unit/T01-documentation/writing';s.navigation.current=route;s.navigation.sections.course=route;s.navigation.pages[route]={scroll:750,focus:'answer-T01-documentation-writing-11',fields:{},details:[]};s.navigation.pages['module/T01']={scroll:150,focus:'drill1',fields:{drill0:'upload',drill1:'is\nSynthetic archived answer',drill2:'exiting'},details:[true]};s.bookmark={route,scroll:750,focus:'answer-T01-documentation-writing-11'};return s;
}
test('T01 procedures completes the declared three-unit publication scope, not learner mastery',()=>{
 assert.equal(u.explanation.length,15);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>9400);assert.equal(u.examples.length,38);assert.deepEqual(u.prerequisites,['T01-documentation']);assert.equal(u.goals.length,7);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,12,14,14,14,12,14,12,12]);assert.equal(practice.length,118);assert.equal(topic.subtopics.length,3);assert.equal(topic.contentStatus,'expanded');assert.deepEqual(topic.remainingScope,[]);assert.equal(topicDevelopment.T01,undefined);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy,courseStats.subtopics,courseStats.practice,courseStats.testTasks],[35,1,4,115,10145,4972]);
});
test('T01 procedures grammar keys independently distinguish base forms, -ing and sequence words',()=>{
 for(const [s,right,wrong]of [['forms-1','Open','Opens'],['forms-2','replace','replaces'],['forms-3','check','checking'],['forms-4','creating','to create'],['forms-5','leaving','leave'],['forms-6','confirm','confirms'],['forms-7','then','than'],['forms-8','until','than'],['review-1','sending','to send'],['test-a-1','start','starts'],['test-a-2','inspect','inspecting'],['test-a-3','sending','send'],['test-a-4','then','than'],['test-b-1','Check','Checks'],['test-b-2','create','creates'],['test-b-3','recording','record'],['test-b-4','until','than']]){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 for(const s of ['forms-9','forms-10','forms-11','forms-12','forms-13','test-a-18','test-b-18'])assert(isOpen(task(s)));assert(task('forms-11').answer.includes('whether the request is listed'));
});
test('T01 full sequences put prerequisite checks and warnings before consequences',()=>{
 for(const [s,right,wrong]of [['sequence-1','before','after'],['sequence-2','precede','follow'],['test-a-8','before','after'],['test-b-8','before','after']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('sequence-3').answer.includes('confirm once'));assert(task('sequence-6').answer.includes('otherwise, stop'));assert(task('sequence-8').answer.includes('Confirm import'));assert(task('sequence-11').explanation.includes('не механический таймер'));
});
test('T01 expected results, performed checks and receipt cannot stand in for observed success',()=>{
 for(const s of ['checks-1','checks-2','checks-3','checks-4','review-3','test-a-5','test-a-7','test-b-5','test-b-7']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 assert(task('checks-6').answer.includes('Другие записи'));assert(task('checks-7').answer.includes('ограниченная'));assert(task('checks-8').answer.includes('whether a request is listed'));assert(task('checks-13').answer.includes('противоречит scope'));
});
test('T01 recovery respects uncertainty, phase-specific cancel and undocumented capabilities',()=>{
 for(const s of ['recovery-1','recovery-2','recovery-3','recovery-4','review-4','test-a-6','test-b-6']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 assert(task('recovery-6').answer.includes('недоказанное удаление'));assert(task('recovery-7').answer.includes('without changes'));assert(task('recovery-8').answer.includes('when supported'));assert(task('recovery-12').answer.includes('в этом guide'));assert(task('recovery-14').explanation.includes('Никаких реальных удалений'));
});
test('T01 Aster reading distinguishes replacement, local export, original source and limited verification',()=>{
 assert.equal(words(proceduresReading),576);assert(proceduresReading.includes('version 1.2'));assert(proceduresReading.includes('not a request to operate real software'));
 for(const [s,right,wrong]of [['reading-1','3','2'],['reading-2','Scratch','Demo'],['reading-3','replaces','merges'],['reading-4','no','yes']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('reading-7').answer.includes('без удаления package'));assert(task('reading-11').answer.includes('до Confirm'));assert(task('reading-12').answer.includes('inspect both collections'));assert(task('reading-13').answer.includes('не каждый символ'));assert(proceduresReading.includes('It does not merge them'));
});
test('T01 independent Willow audio distinguishes available count from selected count and preserves both corrections',()=>{
 assert.equal(words(proceduresListening),476);assert(proceduresListening.includes('one narrator'));assert(!proceduresListening.includes('Aster'));assert(proceduresListening.includes('three entries in the source list'));assert(proceduresListening.includes('Search is not selected'));
 for(const [s,right,wrong]of [['listening-1','Sandbox','Live'],['listening-2','2','3'],['listening-3','Lina','Pia'],['listening-4','W28','W82']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('listening-5').answer.includes('workspace не переключал'));assert(task('listening-6').answer.includes('Back'));assert(task('listening-8').answer.includes('До Send'));assert(task('listening-10').answer.includes('не reading/approval'));assert(task('listening-11').explanation.includes('не реально случившийся'));assert(task('listening-12').answer.includes('не approval/обещанием'));
});
test('T01 procedures provides six complete bounded models and an independent full original and revision',()=>{
 assert.deepEqual(Object.fromEntries(Object.entries(proceduresModels).map(([k,v])=>[k,words(v)])),{procedure:151,warning:104,handoff:110,recovery:108,revision:97,reflection:94});
 for(const [k,v]of Object.entries(proceduresModels)){const [min,max]=k==='procedure'?[150,190]:k==='warning'?[100,130]:['handoff','recovery'].includes(k)?[100,140]:[90,120];assert(words(v)>=min&&words(v)<=max);assert(practice.some(t=>t.answer===v));}
 assert(proceduresModels.warning.includes('Scratch contains any notes'));assert(proceduresModels.handoff.includes('source count'));assert(task('writing-7').prompt.includes('Hazel Export'));assert(task('writing-11').prompt.includes('полностью'));assert(task('writing-11').explanation.includes('журнал не заменяет текст'));
});
test('T01 procedures reference is bounded primary style guidance with clear conditional examples',()=>{
 assert.equal(procedurePatterns.length,32);assert(procedurePatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(procedureReference.practice.length,16);assert.equal(procedureSources.length,3);
 assert.deepEqual(procedureSources.map(s=>new URL(s[1]).hostname),['developers.google.com','learn.microsoft.com','developers.google.com']);assert(u.references.includes('procedure-language'));assert(procedurePatterns.find(r=>r[0]==='otherwise')[1].startsWith('If the preview matches'));
});
test('T01 appends 36 UK IPA words and chunks without changing any of the first 76 cards',()=>{
 assert.equal(t01Vocabulary.length,112);assert.equal(topic.vocabulary.length,119);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,119);
 assert.equal(createHash('sha256').update(JSON.stringify(t01Vocabulary.slice(0,76))).digest('hex'),'840772991c811e2e87e0e47e72f8e9c11aba29a89fdb29d9d22708a67d2231db');assert.equal(t01Vocabulary[76].id,'T01-x-77');assert.equal(t01Vocabulary.at(-1).id,'T01-x-112');
 for(const c of t01Vocabulary.slice(76))assert(c.context&&c.note&&c.accent==='UK'&&/^\/.+\/$/.test(c.ipa));assert(t01Vocabulary.some(c=>c.word==='pick up where you left off'));assert.equal(t01Vocabulary.find(c=>c.word==='duplicate').ipa,'/ˈdjuːplɪkət/');
});
test('T01 procedure tests use two fresh contrasting operations, all goals and four real speech tasks',()=>{
 const seen=new Set(practice.map(t=>t.prompt));for(const e of u.tests){assert.equal(e.tasks.length,26);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,18);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,4);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!seen.has(t.prompt),t.id);seen.add(t.prompt);}}
 assert(task('test-a-9').prompt.includes('добавляет, НЕ заменяет'));assert(task('test-a-11').explanation.includes('не изобретать'));assert(task('test-b-9').prompt.includes('Receipt O41'));assert(task('test-b-11').answer.includes('Cancel не доказанный rollback'));
 for(const v of ['a','b']){assert(task(`test-${v}-12`).prompt.includes('150–190'));assert(task(`test-${v}-22`).prompt.includes('150–190'));assert(task(`test-${v}-25`).prompt.includes('Через 7 дней'));}
});
test('T01 procedures requires actual hidden listening, correction, interaction and delayed new transfer',()=>{
 for(const v of ['a','b']){assert(task(`test-${v}-16`).explanation.includes('pending'));assert(task(`test-${v}-16`).explanation.includes('text-supported'));assert(task(`test-${v}-17`).prompt.includes('Партнёр устно'));assert.equal(task(`test-${v}-24`).kind,'speech');assert(task(`test-${v}-25`).answer.includes('pending'));}
 assert(task('review-10').explanation.includes('заранее'));assert(task('speaking-7').explanation.includes('Транскрипт'));assert(task('speaking-12').explanation.includes('монологом'));
});
test('T01 previous two units import as 218/337 and preserve long answers, reviews, next drafts, route, archive and SRS',()=>{
 const s=oldState(),before=structuredClone(s),r=roundTrip(s);assert.deepEqual(r,before);assert(!r.learning[u.id]);assert.equal(r.schemaVersion,2);
 assert.deepEqual(topicWorkProgress(r,'T01'),{kind:'expanded',completed:218,total:337,percent:64,practiceAnswered:216,practiceTotal:334,testsSubmitted:2,testsTotal:3});unitState(r,u.id).answers[task('forms-1').id]='Open';assert.equal(topicWorkProgress(r,'T01').completed,219);
 for(const unit of older)assert.deepEqual(r.learning[unit.id],before.learning[unit.id]);assert.deepEqual(r.navigation,before.navigation);assert.deepEqual(r.cards,before.cards);assert.deepEqual(r.bookmark,before.bookmark);
 const firstOnly=oldState();delete firstOnly.learning[older[1].id];assert.equal(topicWorkProgress(roundTrip(firstOnly),'T01').completed,101);assert.equal(topicWorkProgress(firstOnly,'T01').percent,29);
});
test('T01 legacy v1 import cannot award any new procedure work',()=>{
 const s=oldState();s.schemaVersion=1;delete s.learning;const r=roundTrip(s);assert.equal(r.schemaVersion,2);assert.deepEqual(r.navigation,s.navigation);assert.deepEqual(r.cards,s.cards);assert.equal(r.drafts.T01,s.drafts.T01);assert.equal(topicWorkProgress(r,'T01').completed,0);for(const unit of topic.subtopics)assert(!r.learning[unit.id]);
});
test('T01 procedure full original, separate revision and unfinished exam survive export/import unchanged',()=>{
 const s=oldState(),old=structuredClone(s.learning),p=unitState(s,u.id);p.answers[task('writing-7').id]='Synthetic original\n'+proceduresModels.procedure;p.answers[task('writing-11').id]='Synthetic revision\n'+proceduresModels.procedure;p.examDraft.answers[task('test-a-12').id]='Synthetic unfinished original\n'+proceduresModels.procedure;assert.deepEqual(roundTrip(s),s);for(const unit of older)assert.deepEqual(s.learning[unit.id],old[unit.id]);assert.equal(topicWorkProgress(s,'T01').completed,220);
});
test('T01 A/B history retains originals, eighteen pending reviews and a single progress step; speech requires audio',()=>{
 const s=oldState(),p=unitState(s,u.id);let a;for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T18:20:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,18);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'T01').completed,219);if(e.id==='a'){a=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],a);}
 assert.deepEqual(roundTrip(s),s);const speech=u.tests[0].tasks.find(t=>t.kind==='speech');p.attempts[0].reviews[speech.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T18:25:00Z',evidence:'Synthetic fixture, not actual learner audio.',heardAudio:false};assert.throws(()=>roundTrip(s),/прослушанное аудио/);p.attempts[0].reviews[speech.id].heardAudio=true;assert.deepEqual(roundTrip(s),s);
});
test('T01 all 337 filled steps remain pending quality checks and do not shrink with study minutes',()=>{
 const s=oldState(),p=complete(s,u),work=topicWorkProgress(s,'T01');assert.equal(work.completed,337);assert.equal(work.total,337);assert.equal(work.percent,100);assert.equal(topic.contentStatus,'expanded');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 s.placement={assessmentVersion,date:'2026-09-29T18:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};assert(buildPlan(s).items.some(m=>m.id==='T01'&&m.contentStatus==='expanded'));s.profile.minutes=15;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T01'),work);assert.deepEqual(roundTrip(s),s);
});

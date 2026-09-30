import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats,topicDevelopment} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {reviewReading,reviewListening,reviewModels} from '../data/t03-review-texts.mjs';
import {reviewSources,reviewPatterns,reviewReference} from '../data/review-language.mjs';
import {t03Vocabulary} from '../data/lexicon-t03.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='T03'),u=subtopics.find(u=>u.id==='T03-review');
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s){const p=unitState(s,u.id);for(const t of practice)p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T21:00:00Z');return p;}
function oldState(){const s=freshState();s.moduleProgress.T03={selfChecked:true,date:'2026-09-22'};s.drafts.T03='Synthetic old review\nNot a learner result.';s.cards['T03-v2']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T03-x-backward-compatible']=reviewCard(null,'hard',Date.UTC(2026,8,27));const route='module/T03';s.navigation.current=route;s.navigation.sections.course=route;s.navigation.pages[route]={scroll:640,focus:'drill1',fields:{drill0:'returns',drill1:'writing\nSynthetic original answer',drill2:'edge'},details:[true]};s.bookmark={route,scroll:640,focus:'drill1'};return s;}

test('T03 preserves the review unit alongside API and the newly published testing unit',()=>{
 assert.equal(u.explanation.length,15);assert.equal(u.explanation.reduce((n,e)=>n+e.text.length,0),10659);assert.equal(u.examples.length,36);assert.equal(u.goals.length,8);assert.deepEqual(u.prerequisites,['T02-updates']);assert.deepEqual(topic.prerequisites,['B203','B204','T02']);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,14,14,14,12,14,12,12]);assert.equal(practice.length,120);assert.equal(topic.subtopics.length,3);assert.equal(topic.contentStatus,'expanded');assert.deepEqual(topic.remainingScope,[]);assert.equal(topic.remainingScope.length,0);assert.equal(topicDevelopment.T03,undefined);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy,courseStats.subtopics,courseStats.practice,courseStats.testTasks],[37,1,2,120,10751,5252]);
});
test('T03 independent grammar keys cover modal base, -ing, embedded order, whether and prepositions',()=>{
 for(const [s,right,wrong]of [['forms-1','check','to check'],['forms-2','explaining','to explain'],['forms-3','changing','to change'],['forms-4','adding','to add'],['forms-5','changes','does change'],['forms-6','whether','if'],['forms-7','with','to'],['forms-8','of','for'],['review-1','adding','to add'],['review-2','to','for'],['review-3','to','with'],['test-a-1','explain','to explain'],['test-a-2','adding','to add'],['test-a-3','differs','does differ'],['test-a-4','counting','to count'],['test-b-1','changing','to change'],['test-b-2','alternative','about alternative'],['test-b-3','whether','if'],['test-b-4','of','for']]){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 assert(task('forms-5').prompt.includes('без усиления'));assert(task('test-a-3').prompt.includes('без усиления'));for(const s of ['forms-9','forms-10','forms-11','forms-12','forms-13','forms-14','test-a-18','test-b-18'])assert(isOpen(task(s)));assert(task('forms-13').explanation.includes('человеком'));
});
test('T03 distinguishes observations, hypothetical effects, requirements and version-specific evidence',()=>{
 for(const s of ['comments-1','comments-2','test-a-5','test-a-8','test-b-5','test-b-8']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 assert(checkAnswer('1',task('comments-3').answer));assert(!checkAnswer('5',task('comments-3').answer));assert(task('comments-5').answer.includes('возможное следствие'));assert(task('comments-7').answer.includes('not seen'));assert(task('comments-9').explanation.includes('не обязательная единственная'));assert(task('comments-11').answer.includes('задаёт ожидаемое'));
});
test('T03 courtesy does not erase requirements or turn a naming preference into a standard',()=>{
 for(const s of ['tone-1','tone-2','tone-3','test-a-6','test-b-6'])assert(checkAnswer('no',task(s).answer));assert(task('tone-5').answer.includes('Required before approval'));assert(task('tone-6').answer.includes('not identified'));assert(task('tone-8').explanation.includes('не имеет универсальной'));assert(task('tone-9').answer.includes('change or for an explanation'));assert(task('comments-10').answer.includes('prefer'));
});
test('T03 preserves author corrections, open disagreements and distinct review/thread/merge states',()=>{
 for(const s of ['replies-1','replies-2','replies-3','test-a-7','test-b-7'])assert(checkAnswer('no',task(s).answer));assert(task('replies-4').answer.includes('not shared or checked'));assert(task('replies-5').answer.includes('still cover r4'));assert(task('replies-8').answer.includes('completion is not shown'));assert(task('replies-11').answer.includes('then corrected'));assert(task('replies-13').answer.includes('no decision owner'));assert(task('replies-14').answer.includes('have not agreed'));
});
test('T03 Aster reading has six r4 checks, separate comment functions and no invented r5 verification',()=>{
 assert.equal(words(reviewReading),705);assert(checkAnswer('six',task('reading-1').answer));assert(checkAnswer('five',task('reading-2').answer));assert(checkAnswer('Comment',task('reading-3').answer));assert(!checkAnswer('Approve',task('reading-3').answer));
 for(const phrase of ['two internal spaces kept','five of the six','marks this suggestion optional','not yet shared a new revision','only attached execution log still belongs to r4','No new execution results','Comment review, not an Approve','no evidence that PR 17 has been merged'])assert(reviewReading.includes(phrase),phrase);
 assert(task('reading-6').answer.includes('ordinary 2'));assert(task('reading-10').answer.includes('execution log всё ещё r4'));assert(task('reading-11').explanation.includes('offer'));
});
test('T03 Birch listening corrects all-passed and fixed without fabricating new actions or owners',()=>{
 assert.equal(words(reviewListening),594);assert.notEqual(reviewListening,reviewReading);assert(checkAnswer('three',task('listening-1').answer));assert(!checkAnswer('four',task('listening-1').answer));assert(checkAnswer('b2',task('listening-2').answer));
 for(const phrase of ['Three passed and one failed','original list stayed unchanged failed','have not shared it or checked it','one possible implementation','naming comment was optional','Nobody in the conversation knows','No person has yet accepted responsibility','gives no completion time'])assert(reviewListening.includes(phrase),phrase);
 assert(task('listening-4').answer.includes('fixed→only local draft'));assert(task('listening-9').answer.includes('второе условие'));assert(task('listening-10').explanation.includes('Не приписывать'));
});
test('T03 complete review and revision models meet ranges; independent Clover work is not a template stub',()=>{
 assert.deepEqual(Object.fromEntries(Object.entries(reviewModels).map(([k,v])=>[k,words(v)])),{review:347,reply:202,request:108,disagreement:135,summary:108,revision:317});
 for(const [k,v]of Object.entries(reviewModels)){const [min,max]=['review','revision'].includes(k)?[300,380]:k==='reply'?[180,240]:k==='disagreement'?[120,160]:[100,140];assert(words(v)>=min&&words(v)<=max);assert(practice.some(t=>t.answer===v.replace(/\n+/g,' ')));}
 const writing=u.banks.find(b=>b.id==='writing');for(const v of Object.values(reviewModels))assert(writing.passage.includes(v));assert(writing.instructions.includes('без ввода ответа'));assert(writing.instructions.includes('не ключи'));
 assert(reviewModels.review.includes('Required before approval'));assert(reviewModels.revision.includes('log covers six checks on r4, not r5'));assert(reviewModels.reply.includes('have now shared r5'));assert(task('writing-2').prompt.includes('Clover Totals'));assert(task('writing-2').prompt.includes('total 3 вместо 2'));assert(task('writing-9').prompt.includes('300–380'));assert(task('writing-8').explanation.includes('не заменяет'));assert(task('writing-14').explanation.includes('не заменяет'));
});
test('T03 reference uses primary review guidance without inventing universal merge settings',()=>{
 assert.equal(reviewPatterns.length,32);assert(reviewPatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(reviewReference.practice.length,16);assert.deepEqual(reviewSources.map(s=>new URL(s[1]).hostname),['google.github.io','google.github.io','docs.github.com']);assert(reviewReference.intro[1].includes('зависят от настройки'));assert(reviewReference.intro[2].includes('Не делай реальных'));assert(u.references.includes('review-language'));
});
test('T03 keeps the original review cards and all seven legacy cards as vocabulary grows',()=>{
 assert.equal(t03Vocabulary.length,108);assert.equal(topic.vocabulary.length,115);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,115);assert.equal(t03Vocabulary[0].id,'T03-x-1');assert.equal(t03Vocabulary.at(-1).id,'T03-x-108');
 assert.equal(createHash('sha256').update(JSON.stringify(topic.vocabulary.filter(c=>!/^T03-x-\d+$/.test(c.id)))).digest('hex'),'60d23d41faed329d6ea2f8df5e0104c8c770ef3e57b5327e310110ce5ffe85a3');
 for(const c of t03Vocabulary)assert(c.context&&c.note&&c.accent==='UK'&&/^\/.+\/$/.test(c.ipa));assert(t03Vocabulary.some(c=>c.word==='push back'&&c.kind==='фразовый глагол'));assert(t03Vocabulary.some(c=>c.word==='as it stands'&&c.kind==='выражение'));assert(t03Vocabulary.find(c=>c.word==='feedback').note.includes('неисчисляемое'));assert(t03Vocabulary.find(c=>c.word==='thread').note.includes('не поток'));
});
test('T03 A/B are new tasks covering eight goals and five speech tasks with independent Juniper/Hazel evidence',()=>{
 const seen=new Set(practice.map(t=>t.prompt));for(const e of u.tests){assert.equal(e.tasks.length,28);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,20);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,5);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!seen.has(t.prompt),t.id);seen.add(t.prompt);}}
 assert(task('test-a-9').prompt.includes('Juniper Filter'));assert(task('test-a-9').answer.includes('5 instead of 2'));assert(task('test-a-12').prompt.includes('только local draft'));assert(task('test-b-9').prompt.includes('Hazel Upload'));assert(task('test-b-9').answer.includes('h8 новый diff'));assert(task('test-b-19').answer.includes('Ни требование, ни результат'));assert(task('test-b-21').answer.includes('have shared h8'));assert(task('test-b-24').explanation.includes('не полный security audit'));
});
test('T03 control requires real hidden audio, corrections, unexpected questions, full revision and delayed transfer',()=>{
 for(const v of ['a','b']){assert(task(`test-${v}-12`).prompt.includes('300–380'));assert(task(`test-${v}-22`).prompt.includes('300–380'));assert(task(`test-${v}-16`).explanation.includes('pending'));assert(task(`test-${v}-16`).explanation.includes('text-supported'));assert(task(`test-${v}-17`).prompt.includes('Партнёр'));assert(task(`test-${v}-20`).explanation.includes('unknown'));assert(task(`test-${v}-26`).prompt.includes('Через семь дней'));assert(task(`test-${v}-26`).answer.includes('pending'));}
 assert(task('speaking-9').prompt.includes('два заранее неизвестных'));assert(task('speaking-11').explanation.includes('Если недопонимания нет'));assert(task('speaking-12').answer.includes('pending'));
});
test('T03 v1/v2 import preserves old archive, multiline notes, routes, bookmark and SRS without new credit',()=>{
 for(const version of [1,2]){const s=oldState();s.schemaVersion=version;if(version===1){delete s.learning;delete s.bookmark;}const r=roundTrip(s);assert.equal(r.schemaVersion,2);assert.equal(r.moduleProgress.T03.selfChecked,true);assert.deepEqual(r.navigation,s.navigation);assert.deepEqual(r.bookmark,s.bookmark??null);assert.deepEqual(r.cards,s.cards);assert.equal(r.drafts.T03,s.drafts.T03);assert(!r.learning[u.id]);assert.deepEqual(topicWorkProgress(r,'T03'),{kind:'expanded',completed:0,total:365,percent:0,practiceAnswered:0,practiceTotal:362,testsSubmitted:0,testsTotal:3});}
 assert.deepEqual(topic.drills.map(d=>d[1]),['returns','writing','edge']);const s=oldState(),original=structuredClone(s);unitState(s,u.id).answers[task('forms-1').id]='check';assert.equal(topicWorkProgress(s,'T03').completed,1);assert.deepEqual(s.navigation,original.navigation);assert.deepEqual(s.cards,original.cards);
});
test('T03 full original/revised texts and unfinished exam survive round trip without submitted-test credit',()=>{
 const s=oldState(),p=unitState(s,u.id);p.answers[task('writing-2').id]='Synthetic original\n'+reviewModels.review;p.answers[task('writing-9').id]='Synthetic full revision\n'+reviewModels.revision;p.examDraft.answers[task('test-a-12').id]='Synthetic unfinished exam\n'+reviewModels.review;assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'T03').completed,2);assert.equal(topicWorkProgress(s,'T03').testsSubmitted,0);
});
test('T03 A/B history keeps twenty open responses pending and adds only one progress step',()=>{
 const s=oldState(),p=unitState(s,u.id);let original;for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T21:20:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,20);assert.equal(score.status,'awaiting-review');assert.equal(score.goals.length,8);assert.equal(topicWorkProgress(s,'T03').completed,1);if(e.id==='a'){original=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],original);}
 assert.deepEqual(roundTrip(s),s);assert.equal(p.attempts.length,2);assert.deepEqual(s.cards,oldState().cards);
});
test('T03 speech reviews need real-audio acknowledgement and scores do not fabricate delayed mastery',()=>{
 const s=oldState(),p=complete(s),speech=u.tests[0].tasks.find(t=>t.kind==='speech');p.attempts[0].reviews[speech.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T21:25:00Z',evidence:'Synthetic fixture only, not a learner result.',heardAudio:false};assert.throws(()=>roundTrip(s),/прослушанное аудио/);p.attempts[0].reviews[speech.id].heardAudio=true;assert.deepEqual(roundTrip(s),s);
 for(const t of u.tests[0].tasks.filter(isOpen))p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T21:25:00Z',evidence:'Fixture only.',...(t.kind==='speech'?{heardAudio:true}:{})};assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-delayed-check');assert.equal(topic.contentStatus,'expanded');
});
test('T03 first 121/365 steps retain their work, not mastery; old self-check and minutes do not remove its scope',()=>{
 const s=oldState(),p=complete(s),work=topicWorkProgress(s,'T03');assert.deepEqual([work.completed,work.total,work.percent],[121,365,33]);assert.equal(topic.contentStatus,'expanded');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');s.placement={assessmentVersion,date:'2026-09-29T21:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};assert(buildPlan(s).items.some(m=>m.id==='T03'&&m.contentStatus==='expanded'));s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T03'),work);assert.deepEqual(roundTrip(s),s);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,courseStats,topicDevelopment} from '../data/course.mjs';
import {decisionReading,decisionListening,decisionBrief,decisionModels} from '../data/t04-decisions-texts.mjs';
import {decisionPatterns,decisionReference,decisionSources} from '../data/architecture-decisions.mjs';
import {t04Vocabulary as allT04Vocabulary} from '../data/lexicon-t04.mjs';
import {freshState,unitState,validateState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
const t04Vocabulary=allT04Vocabulary.slice(0,40);
const topic=modules.find(m=>m.id==='T04'),u=topic.subtopics[0];
const all=[...u.banks.flatMap(b=>b.tasks),...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const hash=x=>createHash('sha256').update(JSON.stringify(x)).digest('hex');
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function oldState(){const s=freshState();s.moduleProgress.T04={selfChecked:true,date:'2026-09-22'};s.drafts.T04='Synthetic archive note\nNot learner work';s.cards['T04-v2']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T04-x-roll-back']=reviewCard(null,'hard',Date.UTC(2026,8,29));s.navigation={current:'module/T04',sections:{course:'module/T04'},pages:{'module/T04':{scroll:740,focus:'drill1',fields:{drill0:'throughput',drill1:'compatibility\nSynthetic old answer',drill2:'would'},details:[true]}}};s.bookmark={route:'module/T04',scroll:740,focus:'drill1'};return s;}
function complete(s){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-30T12:00:00Z');return p;}

test('T04 retains its decision unit beside performance and migrations',()=>{
 assert.equal(u.id,'T04-decisions');assert.deepEqual(u.prerequisites,['B205-discussion']);assert.deepEqual(topic.prerequisites,['B202','B205']);assert.equal(u.explanation.length,16);assert.equal(u.explanation.reduce((n,e)=>n+e.text.length,0),11966);assert.equal(u.examples.length,38);assert.equal(u.goals.length,8);assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,16,16,14,14,12,14,14,12]);assert.equal(topic.contentStatus,'expanded');assert.equal(topic.subtopics.length,3);assert.deepEqual(topic.remainingScope,[]);assert(!topicDevelopment.T04);assert.deepEqual(courseStats,{topics:40,expanded:38,partial:0,legacy:2,subtopics:122,practice:11031,testTasks:5372});
});
test('All seven pre-existing T04 cards and original drill answers remain unchanged',()=>{
 const legacy=topic.vocabulary.filter(c=>!/^T04-x-\d+$/.test(c.id));assert.equal(legacy.length,7);assert.equal(hash(legacy),'6bfa4fbb9466dc1e40fd21e74db3c069ca83d2829860ebc76743e0d2dfccda59');assert.deepEqual(topic.drills.map(d=>d[1]),['throughput','compatibility','would']);assert(legacy.some(c=>c.id==='T04-x-roll-back'));
});
test('Forty appended cards have stable IDs, unique headwords, IPA, contextual limits and nonliteral chunks',()=>{
 assert.equal(t04Vocabulary.length,40);assert.equal(t04Vocabulary[0].id,'T04-x-1');assert.equal(t04Vocabulary.at(-1).id,'T04-x-40');assert.equal(topic.vocabulary.length,119);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,119);for(const c of t04Vocabulary)assert(c.context&&c.note&&c.accent==='UK'&&/^\/.+\/$/.test(c.ipa));for(const word of ['weigh up','settle on','hinge on'])assert(t04Vocabulary.some(c=>c.word===word&&c.kind==='фразовый глагол'));assert(t04Vocabulary.find(c=>c.word==='estimate').note.includes('Существительное'));
});
test('Decision grammar has independent right and wrong keys, while open editing stays manual',()=>{
 for(const [s,right,wrong]of [['forms-1','retain','to retain'],['forms-2','comparing','to compare'],['forms-3','on','from'],['forms-4','meets','does meet'],['forms-5','Despite','Although'],['forms-6','increases','will increase'],['forms-7','to','than'],['forms-8','to return','return'],['test-a-1','remain','to remain'],['test-a-2','investigating','to investigate'],['test-a-3','misses','does miss'],['test-a-4','on','of'],['test-b-1','to edit','edit'],['test-b-2','to','than'],['test-b-3','Despite','Although'],['test-b-4','changes','will change']]){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 assert(task('forms-4').prompt.includes('без усиления'));for(const s of ['forms-9','forms-12','test-a-18','test-b-18'])assert(isOpen(task(s)));
});
test('Requirements distinguish mandatory constraints, preference, assumptions and unknown rules',()=>{
 for(const [s,right,wrong]of [['requirements-1','2','60'],['requirements-2','60','2'],['requirements-3','5','30']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}assert(checkAnswer('no',task('requirements-4').answer));assert(task('requirements-5').answer.includes('допущение'));assert(task('requirements-10').answer.includes('does not specify'));assert(task('requirements-11').explanation.includes('обязательную'));assert(task('requirements-12').answer.includes('48 hours'));assert(task('requirements-16').explanation.includes('Не автоматический выбор B'));
});
test('Options preserve genuine advantages, observed shortcomings and bounded cost comparisons',()=>{
 assert(task('options-4').answer.includes('four acknowledgement misses'));assert(task('options-5').answer.includes('one actual readiness miss'));assert(task('options-6').answer.includes('old report unknown for both'));assert(task('options-9').answer.includes('total cost unknown'));assert(task('options-10').answer.includes('seventy seconds'));assert(task('options-16').explanation.includes('Нет обязательной единственной'));
});
test('Linden reading preserves 12-request denominators, separate deadlines, missing checks and Proposed status',()=>{
 assert.equal(words(decisionReading),682);for(const phrase of ['version 0.8','five concurrent requests','twelve measured requests for each option','eight acknowledgements','four arrived later','twelfth took seventy seconds','no approved requirement for thirty concurrent requests','exclude staff time, support and data-transfer charges','decision record 14 remains Proposed'])assert(decisionReading.includes(phrase),phrase);
 for(const [s,right,wrong]of [['reading-1','14','0.8'],['reading-2','2000','500'],['reading-3','11','12'],['evidence-1','8','12'],['evidence-2','11','12']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}for(const s of ['evidence-3','evidence-4'])assert(checkAnswer('no',task(s).answer));assert(task('reading-10').answer.includes('Leo drafts checks'));
});
test('Harbour listening has distinct number and status corrections, effort limits and genuine disagreement',()=>{
 assert.equal(words(decisionListening),557);assert(!decisionListening.includes('Linden'));for(const phrase of ['Thirty seconds, not five minutes','Four of five','All five responses arrived within one second','not a measured end-to-end delay','We agreed to compare','two to four person-days','She did not agree to maintain the index herself','ten times larger','I still prefer to keep the direct-search option'])assert(decisionListening.includes(phrase),phrase);assert(task('listening-2').answer.includes('не change product requirement'));assert(task('listening-5').answer.includes('no deployment approval'));assert(task('listening-12').explanation.includes('pronunciation/fluency'));assert.equal(u.banks.find(b=>b.id==='listening').kind,'listening');
});
test('Six complete models precede Juniper original/revision and preserve uncertain chunk acknowledgement/integrity',()=>{
 assert.deepEqual(Object.values(decisionModels).map(words),[372,196,107,107,103,367]);const writing=u.banks.find(b=>b.id==='writing');assert(writing.passage.startsWith(decisionBrief));for(const m of Object.values(decisionModels))assert(writing.passage.includes(m));for(const n of [2,9])assert(task('writing-'+n).prompt.includes('350–450'));assert(task('writing-9').explanation.includes('pending'));assert(decisionBrief.includes('восьми'));assert(decisionBrief.includes('целостность итогового файла не проверяли'));assert(task('writing-6').explanation.includes('статус acknowledgement этой части не задан'));assert(!decisionReading.includes('Juniper'));
});
test('Two new exams cover eight goals, eight closed/twenty manual/five speech, original and full revision',()=>{
 const seen=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));for(const e of u.tests){assert.equal(e.tasks.length,28);assert.equal(e.tasks.filter(isOpen).length,20);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,5);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!seen.has(t.prompt),t.id);seen.add(t.prompt);}for(const n of [12,22])assert(e.tasks[n-1].prompt.includes('350–450'));assert(e.tasks[14].explanation.toLowerCase().includes('text-supported'));assert(e.tasks[25].prompt.includes('Через семь дней'));assert(e.tasks[25].explanation.includes('pending'));}
 assert(task('test-a-9').answer.includes('inside-network'));assert(task('test-a-19').answer.includes('two after fourteen'));assert(task('test-b-9').answer.includes('unresolved unknown not data loss'));assert(task('test-b-24').answer.includes('no all-round compliance'));assert(task('test-a-27').explanation.includes('Исторический вопрос'));
});
test('ADR reference offers 32 original patterns and 16 exercises, primary guidance not a universal process',()=>{
 assert.equal(decisionPatterns.length,32);assert(decisionPatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(decisionReference.practice.length,16);assert.deepEqual(decisionSources.map(s=>new URL(s[1]).hostname),['cognitect.com','docs.aws.amazon.com']);assert(u.references.includes(decisionReference.id));assert(decisionReference.intro[1].includes('не универсальный регламент'));
});
test('Legacy v1/v2 imports preserve multiline archive, notes, navigation, bookmark and SRS without new credit',()=>{
 for(const version of [1,2]){const s=oldState();s.schemaVersion=version;if(version===1){delete s.learning;delete s.bookmark;}const r=roundTrip(s);assert.equal(r.schemaVersion,2);assert.deepEqual(r.navigation,s.navigation);assert.deepEqual(r.bookmark,s.bookmark??null);assert.deepEqual(r.cards,s.cards);assert.equal(r.drafts.T04,s.drafts.T04);assert.equal(r.moduleProgress.T04.selfChecked,true);assert(!r.learning[u.id]);assert.deepEqual(topicWorkProgress(r,'T04'),{kind:'expanded',completed:0,total:409,percent:0,practiceAnswered:0,practiceTotal:406,testsSubmitted:0,testsTotal:3});}
 const s=oldState(),old=structuredClone(s);unitState(s,u.id).answers[task('forms-1').id]='retain';assert.equal(topicWorkProgress(s,'T04').completed,1);for(const key of ['navigation','bookmark','cards','drafts','moduleProgress'])assert.deepEqual(s[key],old[key]);assert.deepEqual(roundTrip(s),s);
});
test('Long original/revision and interrupted exam persist separately without test submission credit',()=>{
 const s=oldState(),p=unitState(s,u.id);p.answers[task('writing-2').id]='Synthetic original\n'+decisionModels.record;p.answers[task('writing-9').id]='Synthetic revision\n'+decisionModels.revision;p.examDraft.answers[task('test-a-12').id]='Synthetic unfinished exam\n'+decisionModels.record;s.navigation.current='unit/T04-decisions/writing';s.navigation.sections.course=s.navigation.current;s.bookmark={route:s.navigation.current,scroll:840,focus:'answer-T04-decisions-writing-9'};assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'T04').completed,2);assert.equal(topicWorkProgress(s,'T04').testsSubmitted,0);
});
test('A/B keep history and twenty manual answers pending while adding only one progress step',()=>{
 const s=oldState(),p=unitState(s,u.id);let original;for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-30T12:10:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.deepEqual([score.correct,score.total,score.pending,score.status],[8,8,20,'awaiting-review']);assert.equal(topicWorkProgress(s,'T04').completed,1);if(e.id==='a'){original=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],original);}assert.deepEqual(roundTrip(s),s);
});
test('The original 127 steps survive within 409 without full T04 or mastery',()=>{
 const s=oldState(),old=structuredClone(s),p=complete(s);assert.deepEqual(topicWorkProgress(s,'T04'),{kind:'expanded',completed:127,total:409,percent:31,practiceAnswered:126,practiceTotal:406,testsSubmitted:1,testsTotal:3});assert.equal(topic.contentStatus,'expanded');assert.equal(topic.remainingScope.length,0);assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');for(const key of ['cards','drafts','navigation','bookmark','moduleProgress'])assert.deepEqual(s[key],old[key]);assert.deepEqual(roundTrip(s),s);
});
test('Positive speech review requires actual heard audio, then primary scores still await delayed transfer',()=>{
 const s=oldState(),p=complete(s),attempt=p.attempts[0],speech=u.tests[0].tasks.find(t=>t.kind==='speech');attempt.reviews[speech.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-30T12:15:00Z',evidence:'Fixture only, not a learner result.',heardAudio:false};assert.throws(()=>roundTrip(s),/прослушанное аудио/);for(const t of u.tests[0].tasks.filter(isOpen))attempt.reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-30T12:15:00Z',evidence:'Fixture only.',...(t.kind==='speech'?{heardAudio:true}:{})};assert.equal(scoreUnitTest(u,attempt).status,'awaiting-delayed-check');startUnitTest(s,u.id);p.examDraft.answers[task('test-b-12').id]='Synthetic next draft\nNot a result';assert.deepEqual(roundTrip(s),s);
});
test('Old self-check does not remove expanded T04 from planning and minutes do not reduce its content',()=>{
 const s=oldState();s.placement={assessmentVersion,date:'2026-09-30T12:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};assert(buildPlan(s).items.some(m=>m.id==='T04'&&m.contentStatus==='expanded'));complete(s);const work=topicWorkProgress(s,'T04');s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T04'),work);assert(buildPlan(s).items.some(m=>m.id==='T04'));assert.deepEqual(roundTrip(s),s);
});

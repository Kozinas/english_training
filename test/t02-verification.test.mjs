import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats,topicDevelopment} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {verificationReading,verificationListening,verificationModels} from '../data/t02-verification-texts.mjs';
import {verificationSources,verificationPatterns,verificationReference} from '../data/verification-language.mjs';
import {t02Vocabulary} from '../data/lexicon-t02.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='T02'),u=subtopics.find(u=>u.id==='T02-verification'),first=subtopics.find(u=>u.id==='T02-report');
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,unit.id,'2026-09-29T20:00:00Z');return p;}
function previous(){const s=freshState();s.moduleProgress.T02={selfChecked:true,date:'2026-09-22'};s.drafts.T02='Synthetic original notes\nNot a learner result.';s.cards['T02-v2']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T02-x-40']=reviewCard(null,'hard',Date.UTC(2026,8,27));const p=complete(s,first);p.attempts[0].reviews['T02-report-test-a-12']={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T20:01:00Z',evidence:'Fixture only: limited scope preserved.'};startUnitTest(s,first.id);p.examDraft.answers['T02-report-test-b-12']='Synthetic next draft\n'+p.answers['T02-report-writing-1'];const route='unit/T02-report/writing';s.navigation.current=route;s.navigation.sections.course=route;s.navigation.pages[route]={scroll:820,focus:'answer-T02-report-writing-11',fields:{},details:[true]};s.navigation.pages['module/T02']={scroll:230,focus:'drill1',fields:{drill0:'actual',drill1:'reproduce\nOriginal synthetic answer',drill2:'resolved'},details:[true]};s.bookmark={route,scroll:820,focus:'answer-T02-report-writing-11'};return s;}

test('T02 verification adds a natural second unit with all three strands now published',()=>{
 assert.equal(u.explanation.length,15);assert.equal(u.explanation.reduce((n,e)=>n+e.text.length,0),10361);assert.equal(u.examples.length,32);assert.equal(u.goals.length,8);assert.deepEqual(u.prerequisites,['T02-report']);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,12,12,14,12,12,12,12]);assert.equal(practice.length,114);assert.equal(topic.subtopics.length,3);assert.equal(topic.contentStatus,'expanded');assert.deepEqual(topic.remainingScope,[]);assert.equal(topicDevelopment.T02,undefined);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy,courseStats.subtopics,courseStats.practice,courseStats.testTasks],[38,0,2,122,11031,5372]);
});
test('T02 verification independent keys distinguish embedded questions, whether, passive stages and yet',()=>{
 for(const [s,right,wrong]of [['forms-1','checked','did check'],['forms-2','whether','if'],['forms-3','been','being'],['forms-4','being','been'],['forms-5','still','yet'],['forms-6','yet','already'],['forms-7','is','will be'],['forms-8','agreed','agree'],['review-1','been','being'],['review-2','whether','if'],['test-a-1','been','being'],['test-a-2','is','is it'],['test-a-3','whether','if'],['test-a-4','arrives','will arrive'],['test-b-1','being','been'],['test-b-2','is','is it'],['test-b-3','whether','if'],['test-b-4','yet','still']]){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 assert(task('forms-1').prompt.includes('без эмфазы'));for(const s of ['forms-9','forms-10','forms-11','forms-12','forms-13','test-a-18','test-b-18'])assert(isOpen(task(s)));assert(task('forms-9').answer.includes('what the Reset button does'));assert(task('forms-13').explanation.includes('Не универсальный'));
});
test('T02 verification scope and acceptance preserve both objects, exceptions and unagreed targets',()=>{
 for(const s of ['criteria-1','criteria-2','criteria-3','test-a-5','test-b-5']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 assert(task('criteria-5').answer.includes('and the Open only indicator'));assert(task('criteria-6').answer.includes('open and closed'));assert(task('criteria-9').explanation.includes('не самовольный'));assert(task('criteria-11').answer.includes('один аспект'));assert(task('criteria-12').explanation.includes('не согласие'));
});
test('T02 verification comparisons do not manufacture causal isolation, user counts or total regression coverage',()=>{
 for(const s of ['comparison-1','comparison-2','comparison-3','review-4','test-a-6','test-b-6']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 assert(task('comparison-5').answer.includes('two of three'));assert(task('comparison-7').explanation.includes('полную regression suite'));assert(task('comparison-8').explanation.includes('не доказывает'));assert(task('comparison-11').answer.includes('Разные действия'));
});
test('T02 verification differentiates failed, blocked and not run from merge, deployment and agreement',()=>{
 for(const [s,right,wrong]of [['status-1','failed','not run'],['status-2','blocked','passed'],['status-3','not run','failed'],['status-4','no','yes'],['review-3','no','yes'],['test-a-7','blocked','passed'],['test-a-8','no','yes'],['test-b-7','failed','not run'],['test-b-8','no','yes']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('status-7').answer.includes('unconfirmed'));assert(task('status-8').answer.includes('developer reports'));assert(task('status-9').answer.includes('обязательность не согласована'));assert(task('status-10').explanation.includes('срок отсутствует'));assert(task('status-12').explanation.includes('не внешняя отправка'));
});
test('T02 Orchid reading preserves separate criteria, control counts, partial improvement and no deployment claim',()=>{
 assert.equal(words(verificationReading),644);assert(verificationReading.includes('two open tasks and one closed task'));assert(verificationReading.includes('not a universal testing threshold'));assert(verificationReading.includes('has not performed a mouse Reset check'));
 for(const [s,right,wrong]of [['reading-1','242','241'],['reading-2','2','3'],['reading-3','3','2'],['reading-4','1','2']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('reading-7').answer.includes('только две'));assert(task('reading-8').answer.includes('only two'));assert(task('reading-10').answer.includes('обязательность допохвата не согласована'));assert(task('reading-11').explanation.includes('точно не произошёл'));assert(task('reading-12').answer.includes('не согласованы'));
});
test('T02 Harbour listening independently preserves corrections, Back failure and access rather than device blocker',()=>{
 assert.equal(words(verificationListening),512);assert(verificationListening.includes('one narrator'));assert(!verificationListening.includes('Orchid'));assert(verificationListening.includes('not an update performed during the conversation'));
 for(const [s,right,wrong]of [['listening-1','88','87'],['listening-2','3','2'],['listening-3','1','2'],['listening-4','Large','Small']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('listening-5').answer.includes('all Back passed→one of two passed'));assert(task('listening-9').answer.includes('training account'));assert(task('listening-9').explanation.includes('Не недоступное устройство'));assert(task('listening-11').answer.includes('не согласованы'));
});
test('T02 verification six complete models meet ranges and are present as actual full answers',()=>{
 assert.deepEqual(Object.fromEntries(Object.entries(verificationModels).map(([k,v])=>[k,words(v)])),{report:225,clarification:127,criteria:118,comparison:109,followup:106,reflection:103});
 for(const [k,v]of Object.entries(verificationModels)){const [min,max]=k==='report'?[200,260]:k==='clarification'?[120,160]:k==='criteria'?[110,150]:k==='reflection'?[90,130]:[100,140];assert(words(v)>=min&&words(v)<=max);assert(practice.some(t=>t.answer===v.replace(/\n+/g,' ')));}
 assert(verificationModels.report.includes('A merged change is not deployment confirmation'));assert(verificationModels.followup.includes('not treating that as a promise'));assert(task('writing-7').prompt.includes('Flint Gallery'));assert(task('writing-11').prompt.includes('200–260'));assert(task('writing-11').explanation.includes('Журнал не заменяет'));
});
test('T02 verification reference is bounded authored language guidance with official issue lifecycle sources',()=>{
 assert.equal(verificationPatterns.length,32);assert(verificationPatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(verificationReference.practice.length,16);assert(verificationReference.intro[0].includes('не полный стандарт QA'));assert(verificationReference.intro[1].includes('отсутствие планов'));assert(verificationSources.every(s=>new URL(s[1]).hostname==='docs.github.com'));assert(u.references.includes('verification-language'));
});
test('T02 verification appends 36 UK cards without changing the first forty or seven legacy cards',()=>{
 assert.equal(t02Vocabulary.length,112);assert.equal(topic.vocabulary.length,119);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,119);assert.equal(t02Vocabulary[40].id,'T02-x-41');assert.equal(t02Vocabulary[75].id,'T02-x-76');
 assert.equal(createHash('sha256').update(JSON.stringify(t02Vocabulary.slice(0,40))).digest('hex'),'05a43354a0b928c96bc069cb563bd4c3daf67e0648e75262b0c9b2b992eab60a');assert.equal(createHash('sha256').update(JSON.stringify(topic.vocabulary.filter(c=>!/^T02-x-\d+$/.test(c.id)))).digest('hex'),'063a9fd6469fbe1ec30dbc5fa81714f535da661b9ca85c199d588cd7c275a7b6');
 for(const c of t02Vocabulary.slice(40))assert(c.context&&c.note&&c.accent==='UK'&&/^\/.+\/$/.test(c.ipa));assert(t02Vocabulary.some(c=>c.word==='carry out'&&c.kind==='фразовый глагол'));assert(t02Vocabulary.some(c=>c.word==='subject to confirmation'&&c.kind==='выражение'));
});
test('T02 verification A/B variants cover all eight goals with independent counts, objects and four speech tasks',()=>{
 const seen=new Set(practice.map(t=>t.prompt));for(const e of u.tests){assert.equal(e.tasks.length,26);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,18);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,4);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!seen.has(t.prompt),t.id);seen.add(t.prompt);}}
 assert(task('test-a-9').prompt.includes('Pine Inbox'));assert(task('test-b-9').prompt.includes('Coral Player'));assert(task('test-a-19').answer.includes('count остался 2'));assert(task('test-b-19').answer.includes('обе проверки'));assert(task('test-b-9').answer.includes('2/2'));
 for(const v of ['a','b']){assert(task(`test-${v}-12`).prompt.includes('200–260'));assert(task(`test-${v}-22`).prompt.includes('200–260'));assert(task(`test-${v}-25`).prompt.includes('Через 7 дней'));}
});
test('T02 verification needs hidden listening, actual corrections, unexpected follow-up and real delayed transfer',()=>{
 for(const v of ['a','b']){assert(task(`test-${v}-16`).explanation.includes('pending'));assert(task(`test-${v}-16`).explanation.includes('text-supported'));assert(task(`test-${v}-17`).prompt.includes('Партнёр устно'));assert(task(`test-${v}-25`).answer.includes('pending'));assert(task(`test-${v}-20`).explanation.includes('unknown'));}
 assert(task('speaking-1').explanation.includes('не настоящий обмен'));assert(task('review-10').prompt.includes('follow-up'));assert(task('test-a-24').explanation.includes('разных позициях'));
});
test('T02 import preserves all first-unit answers, review, next draft, archive, routes and SRS at 117/351',()=>{
 const original=previous(),s=roundTrip(original);assert.deepEqual(s,original);assert(!s.learning[u.id]);assert.equal(s.schemaVersion,2);assert.deepEqual(topicWorkProgress(s,'T02'),{kind:'expanded',completed:117,total:351,percent:33,practiceAnswered:116,practiceTotal:348,testsSubmitted:1,testsTotal:3});
 const before=structuredClone(s.learning[first.id]);unitState(s,u.id).answers[task('forms-1').id]='checked';assert.equal(topicWorkProgress(s,'T02').completed,118);assert.deepEqual(s.learning[first.id],before);assert.deepEqual(s.navigation,original.navigation);assert.deepEqual(s.cards,original.cards);assert.deepEqual(s.bookmark,original.bookmark);
});
test('T02 verification full original, revision and long exam draft survive export/import without test credit',()=>{
 const s=previous(),p=unitState(s,u.id);p.answers[task('writing-7').id]='Synthetic original\n'+verificationModels.report;p.answers[task('writing-11').id]='Synthetic revision\n'+verificationModels.report;p.examDraft.answers[task('test-a-12').id]='Synthetic unfinished\n'+verificationModels.report;assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'T02').completed,119);assert.equal(topicWorkProgress(s,'T02').testsSubmitted,1);
});
test('T02 verification A/B history stays manual for eighteen tasks and does not count variants twice',()=>{
 const s=previous(),p=unitState(s,u.id),old=structuredClone(s.learning[first.id]);let a;for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T20:10:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,18);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'T02').completed,118);if(e.id==='a'){a=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],a);}
 assert.deepEqual(s.learning[first.id],old);assert.deepEqual(roundTrip(s),s);
});
test('T02 verification speech review rejects missing real-audio acknowledgement while preserving evidence',()=>{
 const s=previous(),p=complete(s,u),speech=u.tests[0].tasks.find(t=>t.kind==='speech');p.attempts[0].reviews[speech.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T20:20:00Z',evidence:'Fixture only, not actual learner audio.',heardAudio:false};assert.throws(()=>roundTrip(s),/прослушанное аудио/);p.attempts[0].reviews[speech.id].heardAudio=true;assert.deepEqual(roundTrip(s),s);
});
test('T02 232/351 preserves both earlier units and is awaiting substantive review regardless of minutes or old self-check',()=>{
 const s=previous(),p=complete(s,u),work=topicWorkProgress(s,'T02');assert.deepEqual([work.completed,work.total,work.percent],[232,351,66]);assert.equal(topic.contentStatus,'expanded');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 s.placement={assessmentVersion,date:'2026-09-29T20:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};assert(buildPlan(s).items.some(m=>m.id==='T02'&&m.contentStatus==='expanded'));s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T02'),work);assert.deepEqual(roundTrip(s),s);
});

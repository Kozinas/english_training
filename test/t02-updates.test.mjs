import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats,topicDevelopment} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {updatesReading,updatesListening,updatesModels} from '../data/t02-updates-texts.mjs';
import {workUpdateSources,workUpdatePatterns,workUpdateReference} from '../data/work-update-language.mjs';
import {t02Vocabulary} from '../data/lexicon-t02.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='T02'),u=subtopics.find(u=>u.id==='T02-updates'),older=topic.subtopics.slice(0,2);
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,unit.id,'2026-09-29T21:00:00Z');return p;}
function previous(){const s=freshState();for(const unit of older){const p=complete(s,unit);p.attempts[0].reviews[unit.id+'-test-a-12']={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T21:01:00Z',evidence:'Fixture only, no real learner result.'};startUnitTest(s,unit.id);p.examDraft.answers[unit.id+'-test-b-12']='Synthetic next draft\n'+p.answers[unit.id+'-writing-1'];}s.moduleProgress.T02={selfChecked:true,date:'2026-09-22'};s.drafts.T02='Synthetic old notes\nNo learner data.';s.cards['T02-v2']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T02-x-76']=reviewCard(null,'hard',Date.UTC(2026,8,27));const route='unit/T02-verification/writing';s.navigation.current=route;s.navigation.sections.course=route;s.navigation.pages[route]={scroll:740,focus:'answer-T02-verification-writing-11',fields:{},details:[true]};s.navigation.pages['module/T02']={scroll:240,focus:'drill1',fields:{drill0:'actual',drill1:'reproduce\nSynthetic archive',drill2:'resolved'},details:[true]};s.bookmark={route,scroll:740,focus:'answer-T02-verification-writing-11'};return s;}

test('T02 updates completes all three declared publication strands, not learner mastery',()=>{
 assert.equal(u.explanation.length,15);assert.equal(u.explanation.reduce((n,e)=>n+e.text.length,0),10245);assert.equal(u.examples.length,34);assert.equal(u.goals.length,8);assert.deepEqual(u.prerequisites,['T02-verification']);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,12,14,14,12,14,12,12]);assert.equal(practice.length,118);assert.equal(topic.subtopics.length,3);assert.equal(topic.contentStatus,'expanded');assert.deepEqual(topic.remainingScope,[]);assert.equal(topicDevelopment.T02,undefined);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy,courseStats.subtopics,courseStats.practice,courseStats.testTasks],[38,0,2,122,11031,5372]);
});
test('T02 updates independent form keys preserve past/result, -ing, since/for, complements and future conditions',()=>{
 for(const [s,right,wrong]of [['forms-1','drafted','have drafted'],['forms-2','written','wrote'],['forms-3','revising','revise'],['forms-4','since','for'],['forms-5','for','since'],['forms-6','for','on'],['forms-7','checking','to check'],['forms-8','arrives','will arrive'],['review-1','sent','send'],['review-2','on','for'],['test-a-1','captured','have captured'],['test-a-2','sent','send'],['test-a-3','since','for'],['test-a-4','is','will be'],['test-b-1','written','wrote'],['test-b-2','reviewing','review'],['test-b-3','for','since'],['test-b-4','clarifying','to clarify']]){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 for(const s of ['forms-9','forms-10','forms-11','forms-12','forms-13','forms-14','test-a-18','test-b-18'])assert(isOpen(task(s)));assert(task('forms-13').answer.includes('help me to check'));assert(task('forms-14').explanation.includes('Не запрет'));
});
test('T02 updates does not equate activity, drafts, sharing or request with whole-task completion',()=>{
 for(const s of ['status-1','status-2','status-3','review-3','test-a-5','test-a-8','test-b-5','test-b-8']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 assert(checkAnswer('remaining',task('status-4').answer));assert(task('status-6').answer.includes('два unreviewed'));assert(task('status-9').explanation.includes('Без доказанной вины'));assert(task('status-12').answer.includes('short break'));assert(task('status-13').explanation.includes('не требует'));
});
test('T02 updates separates by/from/at, conditional estimate, commitment and next-update time',()=>{
 assert(checkAnswer('no later than',task('plans-1').answer));assert(!checkAnswer('starting at 16:00',task('plans-1').answer));
 for(const s of ['plans-2','plans-3','review-4','test-a-6','test-b-6']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 assert(task('plans-4').answer.includes('no further changes'));assert(task('plans-4').answer.includes('two new drafts')||task('plans-4').answer.includes('Two new drafts'));assert(task('plans-7').answer.includes('not confirmed'));assert(task('plans-8').answer.includes('even if'));assert(task('plans-10').answer.includes('timezone'));
});
test('T02 updates requests, availability, acknowledgement and partial acceptance remain distinct',()=>{
 for(const s of ['help-1','help-2','help-3','test-a-7','test-b-7']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 assert(task('help-6').answer.includes('actual acceptance'));assert(task('help-7').explanation.includes('Can может'));assert(task('help-8').answer.includes('but not'));assert(task('help-9').answer.includes('outside that agreement'));assert(!task('help-9').answer.includes('unassigned'));assert(task('help-10').explanation.includes('Не одно yes'));assert(task('help-12').answer.includes('Ownership is still open'));assert(task('help-14').answer.includes('has not accepted'));
});
test('T02 Lark reading preserves nested stages, limited blockers, conditional target and Nina scope',()=>{
 assert.equal(words(updatesReading),644);assert(updatesReading.includes('four of the six examples'));assert(updatesReading.includes('the six examples may require')||updatesReading.includes('The six examples may require'));assert(updatesReading.includes('not a promised finish time'));
 for(const [s,right,wrong]of [['reading-1','4','6'],['reading-2','2','4'],['reading-3','1','2'],['reading-4','13:00','16:00']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('reading-6').answer.includes('1 wording accepted + 1 reviewed'));assert(task('reading-7').answer.includes('proofreading'));assert(task('reading-8').answer.includes('не create account'));assert(task('reading-10').answer.includes('no further changes'));assert(task('reading-11').answer.includes('не write remaining two'));assert(task('reading-12').answer.includes('пересказала'));
});
test('T02 Sable listening keeps corrections, breaks, attempts, missing sample and accepted review of notes',()=>{
 assert.equal(words(updatesListening),493);assert(updatesListening.includes('one narrator'));assert(!updatesListening.includes('Lark'));assert(updatesListening.includes('short break'));assert(updatesListening.includes('not four different users'));
 for(const [s,right,wrong]of [['listening-1','3','5'],['listening-2','2','3'],['listening-3','3','4'],['listening-4','12:30','15:00']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('listening-5').answer.includes('All five edited→three'));assert(task('listening-8').answer.includes('sample data'));assert(task('listening-9').answer.includes('Ask data owner'));assert(task('listening-10').answer.includes('finish time не согласован'));assert(task('listening-11').answer.includes('не comparison passed'));
});
test('T02 updates provides six complete models in range and independent original/full revision',()=>{
 assert.deepEqual(Object.fromEntries(Object.entries(updatesModels).map(([k,v])=>[k,words(v)])),{update:144,handover:232,help:109,estimate:113,reply:113,correction:101});
 for(const [k,v]of Object.entries(updatesModels)){const [min,max]=k==='handover'?[220,280]:k==='update'?[120,160]:k==='correction'?[90,130]:[100,140];assert(words(v)>=min&&words(v)<=max);assert(practice.some(t=>t.answer===v.replace(/\n+/g,' ')));}
 assert(updatesModels.handover.includes('You did not accept the two unwritten examples'));assert(updatesModels.estimate.includes('not include the application check'));assert(task('writing-7').prompt.includes('Wren Import'));assert(task('writing-11').prompt.includes('220–280'));assert(task('writing-11').explanation.includes('Журнал не заменяет'));assert(task('writing-13').explanation.includes('не заменяет'));
});
test('T02 updates reference is authored communication guidance, not a compulsory stand-up structure',()=>{
 assert.equal(workUpdatePatterns.length,32);assert(workUpdatePatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(workUpdateReference.practice.length,16);assert.deepEqual(workUpdateSources.map(s=>new URL(s[1]).hostname),['handbook.gitlab.com','scrumguides.org','dictionary.cambridge.org','dictionary.cambridge.org']);assert(workUpdateReference.intro[1].includes('не обязательные три вопроса'));assert(workUpdateReference.intro[0].includes('не задают темп'));assert(u.references.includes('work-update-language'));
});
test('T02 updates appends 36 contextual UK cards preserving all first 76 and seven legacy cards',()=>{
 assert.equal(t02Vocabulary.length,112);assert.equal(topic.vocabulary.length,119);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,119);assert.equal(t02Vocabulary[76].id,'T02-x-77');assert.equal(t02Vocabulary.at(-1).id,'T02-x-112');
 assert.equal(createHash('sha256').update(JSON.stringify(t02Vocabulary.slice(0,76))).digest('hex'),'adf57e5a1f516bd64050b66a17936cef4f001639f17dd1214c775373509904ae');assert.equal(createHash('sha256').update(JSON.stringify(topic.vocabulary.filter(c=>!/^T02-x-\d+$/.test(c.id)))).digest('hex'),'063a9fd6469fbe1ec30dbc5fa81714f535da661b9ca85c199d588cd7c275a7b6');
 for(const c of t02Vocabulary.slice(76))assert(c.context&&c.note&&c.accent==='UK'&&/^\/.+\/$/.test(c.ipa));assert(t02Vocabulary.some(c=>c.word==='take over'&&c.kind==='фразовый глагол'));assert(t02Vocabulary.some(c=>c.word==='so far'&&c.kind==='выражение'));assert(t02Vocabulary.find(c=>c.word==='estimate').note.includes('глагол'));assert.equal(t02Vocabulary.find(c=>c.word==='postpone').ipa,'/pəʊstˈpəʊn/');assert.equal(t02Vocabulary.find(c=>c.word==='resume').ipa,'/rɪˈzjuːm/');
});
test('T02 updates A/B variants cover all eight goals with new artifacts/counts and five speech tasks',()=>{
 const seen=new Set(practice.map(t=>t.prompt));for(const e of u.tests){assert.equal(e.tasks.length,28);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,20);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,5);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!seen.has(t.prompt),t.id);seen.add(t.prompt);}}
 assert(task('test-a-9').prompt.includes('Finch Setup'));assert(task('test-b-9').prompt.includes('Bracken Alerts'));assert(task('test-a-19').answer.includes('acceptance нет'));assert(task('test-b-19').answer.includes('это не два unwritten'));assert(task('test-b-21').answer.includes('not deciding requirements'));
 for(const v of ['a','b']){assert(task(`test-${v}-12`).prompt.includes('220–280'));assert(task(`test-${v}-22`).prompt.includes('220–280'));assert(task(`test-${v}-26`).prompt.includes('Через 7 дней'));}
});
test('T02 updates needs real hidden listening, correction, unexpected response, refusal and delayed transfer',()=>{
 for(const v of ['a','b']){assert(task(`test-${v}-16`).explanation.includes('pending'));assert(task(`test-${v}-16`).explanation.includes('text-supported'));assert(task(`test-${v}-17`).prompt.includes('Партнёр устно'));assert(task(`test-${v}-26`).answer.includes('pending'));assert(task(`test-${v}-20`).explanation.includes('unknown'));}
 assert(task('speaking-4').explanation.includes('не полноценное взаимодействие'));assert(task('speaking-9').explanation.includes('Отказ'));assert(task('review-10').prompt.includes('follow-up'));
});
test('T02 import retains both old units with reviews, next drafts, archive, routes and SRS at 232/351',()=>{
 const original=previous(),s=roundTrip(original);assert.deepEqual(s,original);assert(!s.learning[u.id]);assert.equal(s.schemaVersion,2);assert.deepEqual(topicWorkProgress(s,'T02'),{kind:'expanded',completed:232,total:351,percent:66,practiceAnswered:230,practiceTotal:348,testsSubmitted:2,testsTotal:3});
 const before=structuredClone(s.learning);unitState(s,u.id).answers[task('forms-1').id]='drafted';assert.equal(topicWorkProgress(s,'T02').completed,233);for(const old of older)assert.deepEqual(s.learning[old.id],before[old.id]);assert.deepEqual(s.navigation,original.navigation);assert.deepEqual(s.cards,original.cards);assert.deepEqual(s.bookmark,original.bookmark);
 const firstOnly=previous();delete firstOnly.learning[older[1].id];assert.deepEqual([topicWorkProgress(firstOnly,'T02').completed,topicWorkProgress(firstOnly,'T02').percent],[117,33]);
});
test('T02 updates original handover, full revision and long unfinished exam survive import without test credit',()=>{
 const s=previous(),p=unitState(s,u.id);p.answers[task('writing-7').id]='Synthetic original\n'+updatesModels.handover;p.answers[task('writing-11').id]='Synthetic revision\n'+updatesModels.handover;p.examDraft.answers[task('test-a-12').id]='Synthetic unfinished\n'+updatesModels.handover;assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'T02').completed,234);assert.equal(topicWorkProgress(s,'T02').testsSubmitted,2);
});
test('T02 updates keeps both variants, twenty pending tasks each and no duplicate progress',()=>{
 const s=previous(),p=unitState(s,u.id),old=structuredClone(s.learning);let a;for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T21:10:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,20);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'T02').completed,233);if(e.id==='a'){a=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],a);}
 for(const unit of older)assert.deepEqual(s.learning[unit.id],old[unit.id]);assert.deepEqual(roundTrip(s),s);
});
test('T02 updates speech review requires actual-audio acknowledgement, not a transcript claim',()=>{
 const s=previous(),p=complete(s,u),speech=u.tests[0].tasks.find(t=>t.kind==='speech');p.attempts[0].reviews[speech.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T21:20:00Z',evidence:'Fixture only, no actual learner audio.',heardAudio:false};assert.throws(()=>roundTrip(s),/прослушанное аудио/);p.attempts[0].reviews[speech.id].heardAudio=true;assert.deepEqual(roundTrip(s),s);
});
test('T02 expanded and 351/351 remain awaiting review and transfer regardless of minutes and old self-check',()=>{
 const s=previous(),p=complete(s,u),work=topicWorkProgress(s,'T02');assert.deepEqual([work.completed,work.total,work.percent],[351,351,100]);assert.equal(topic.contentStatus,'expanded');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 s.placement={assessmentVersion,date:'2026-09-29T21:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};assert(buildPlan(s).items.some(m=>m.id==='T02'&&m.contentStatus==='expanded'));s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T02'),work);assert.deepEqual(roundTrip(s),s);
});

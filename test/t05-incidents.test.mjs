import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,courseStats,topicDevelopment} from '../data/course.mjs';
import {incidentReading,incidentListening,incidentBrief,incidentModels} from '../data/t05-incidents-texts.mjs';
import {incidentPatterns,incidentReference,incidentSources} from '../data/incident-language.mjs';
import {t05Vocabulary} from '../data/lexicon-t05.mjs';
import {freshState,unitState,validateState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
const topic=modules.find(m=>m.id==='T05'),u=topic.subtopics[0];
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(t=>t.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const hash=v=>createHash('sha256').update(JSON.stringify(v)).digest('hex');
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function oldState(){const s=freshState();s.moduleProgress.T05={selfChecked:true,date:'2026-09-22'};s.drafts.T05='Synthetic old incident notes\nNot learner work';s.cards['T05-v2']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T05-x-root-cause']=reviewCard(null,'hard',Date.UTC(2026,8,29));s.navigation={current:'module/T05',sections:{course:'module/T05'},pages:{'module/T05':{scroll:740,focus:'drill1',fields:{drill0:'authorization',drill1:'confirmed\nSynthetic original',drill2:'with'},details:[true]}}};s.bookmark={route:'module/T05',scroll:740,focus:'drill1'};return s;}
function complete(s){const p=unitState(s,u.id);for(const t of practice)p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-10-02T12:00:00Z');return p;}

test('T05 publishes a substantial first unit, explicitly partial without time-based slicing',()=>{
 assert.equal(u.id,'T05-incidents');assert.deepEqual(u.prerequisites,['T02-updates','C102-reporting']);assert.equal(u.explanation.length,16);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>11000);assert.equal(u.examples.length,36);assert.equal(u.goals.length,8);assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,16,12,16,12,14,14,14]);assert.equal(practice.length,126);
 assert.equal(topic.contentStatus,'partial');assert.equal(topic.subtopics.length,1);assert.deepEqual(topic.remainingScope,topicDevelopment.T05.remaining);assert.equal(topic.remainingScope.length,3);assert.equal(modules.find(m=>m.id==='T06').contentStatus,'legacy');assert.deepEqual(courseStats,{topics:40,expanded:38,partial:1,legacy:1,subtopics:123,practice:11157,testTasks:5432});
});
test('All seven legacy cards and all original T05 drills retain exact content and IDs',()=>{
 const old=topic.vocabulary.filter(c=>!/^T05-x-\d+$/.test(c.id));assert.equal(old.length,7);assert.equal(hash(old),'bc7c27f37382a3c5789d5deac5210bd55a467119f288cf645df2357455f7e6ad');assert.equal(hash(topic.drills),'2dabbf84da9ca3639ad3330176ac262f05bf9bcdbb1e9bec41c9c42d68a06aa1');assert.deepEqual(topic.drills.map(d=>d[1]),['authorization','confirmed','with']);
});
test('36 appended cards have stable IDs, meaningful contexts, UK IPA and nonliteral expressions',()=>{
 assert.equal(t05Vocabulary.length,36);assert.equal(t05Vocabulary[0].id,'T05-x-1');assert.equal(t05Vocabulary.at(-1).id,'T05-x-36');assert.equal(topic.vocabulary.length,43);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,43);for(const c of t05Vocabulary)assert(c.context&&c.note&&c.accent==='UK'&&/^\/.+\/$/.test(c.ipa));for(const w of ['take over','hand over','read back','follow up on','rule out'])assert(t05Vocabulary.some(c=>c.word===w&&c.kind==='фразовый глагол'));assert(t05Vocabulary.find(c=>c.word==='read back').note.includes('/riːd/'));assert(t05Vocabulary.find(c=>c.word==='keep someone posted').kind==='выражение');
});
test('Grammar keys independently reject tense, passive, preposition and time-clause confusions',()=>{
 for(const [s,right,wrong]of [['forms-1','are','have'],['forms-2','been','being'],['forms-3','since','for'],['forms-4','for','since'],['forms-5','changed','have changed'],['forms-6','with','to'],['forms-7','changes','will change'],['forms-8','contributed','contribute'],['test-a-1','since','for'],['test-a-2','been','being'],['test-a-3','reverted','has reverted'],['test-a-4','remain','will remain'],['test-b-1','been','being'],['test-b-2','to','for'],['test-b-3','with','on'],['test-b-4','for','since']]){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 assert(isOpen(task('forms-9')));assert(isOpen(task('forms-14')));
});
test('Impact distinguishes attempts, people, files, percentages and separate job outcomes',()=>{
 for(const [s,right,wrong]of [['impact-1','200','40'],['impact-2','40','200'],['impact-3','1','2'],['impact-4','19','95'],['review-2','75','25'],['test-a-5','50','3'],['test-b-5','25','2'],['test-b-6','6','8']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert.match(task('impact-5').answer,/retries.*unique customer impact is unknown/i);assert.match(task('impact-6').answer,/95/);assert.match(task('impact-7').answer,/All twelve selected/);assert.match(task('impact-9').answer,/Fourteen.*three pending.*one/);assert.match(task('impact-11').answer,/five distinct accounts/);assert.match(task('impact-12').answer,/установленная проблема/);
});
test('Orchard chronology, causation and performed action are not collapsed into one status',()=>{
 assert(checkAnswer('09:06',task('evidence-1').answer));assert(checkAnswer('no',task('evidence-2').answer));assert(checkAnswer('yes',task('evidence-3').answer));assert(checkAnswer('no',task('evidence-4').answer));assert.match(task('evidence-5').answer,/actual onset unknown/);assert.match(task('evidence-6').answer,/may have contributed.*has not been established/);assert.match(task('evidence-10').answer,/Да/);assert.match(task('evidence-13').answer,/wording was approved.*execution.*not established/);assert.match(task('evidence-15').answer,/paused.*not say.*reverted/);
});
test('Reading is a complete bounded working record with separate roles and meaningful corrections',()=>{
 assert(words(incidentReading)>=600);for(const s of ['09:02','09:06','09:10','09:12','09:18','09:20','09:30','09:45','09:40','10:00'])assert(incidentReading.includes(s));for(const s of ['160 succeeded','40 returned errors','198 succeeded','two returned errors','fourteen were confirmed complete','three remained pending','one had no observed final outcome','retries','not establish','Noor explicitly accepted','Lea retained communications'])assert(incidentReading.toLowerCase().includes(s.toLowerCase()),s);
 assert.equal(u.banks.find(b=>b.id==='reading').passage,incidentReading);assert.match(task('reading-7').answer,/200\/160\/40.*200\/198\/2/);assert.match(task('reading-9').answer,/не четыре failed/);
});
test('Seabrook is independent listening with correction, disagreement, refusal and limited commitments',()=>{
 assert(words(incidentListening)>=500);assert.notEqual(incidentListening,incidentReading);for(const s of ['fifteen forty','fifteen oh four','Thirteen','two are still pending','Six new probe','only a suggestion','not accepting responsibility','I cannot take it over','I remain coordinator'])assert(incidentListening.includes(s),s);
 assert(checkAnswer('15:04',task('listening-1').answer));assert(!checkAnswer('15:40',task('listening-1').answer));assert(checkAnswer('16',task('listening-2').answer));assert(checkAnswer('13',task('listening-3').answer));assert(checkAnswer('Kim',task('listening-4').answer));assert.match(task('listening-7').answer,/separate from old batch/);assert.match(task('listening-9').answer,/duplicate behaviour unknown/);assert.match(task('listening-10').answer,/not complete delivery/);
});
test('Hawthorn introduces save/visibility, late versus unobserved, pause versus revert and unanswered handover',()=>{
 for(const s of ['Hawthorn Search 2.8','nine new articles','two appeared after five minutes','collection stopped after six minutes','All twelve saves were acknowledged','Eight selected existing articles','four fresh checks','Vale has not replied','Oren therefore remains'])assert(incidentBrief.toLowerCase().includes(s.toLowerCase()),s);
 assert.match(task('writing-2').prompt,/350–450/);assert.match(task('writing-2').answer,/9 timely\/2 late\/1 unobserved/);assert.match(task('writing-9').prompt,/полную редакцию/);assert.match(task('writing-8').explanation,/Раздельно/);assert.match(task('handover-6').answer,/Oren remains.*has not been accepted/);
});
test('Six full models are visible before writing, with independent original and complete revision',()=>{
 const bounds={report:[350,450],timeline:[160,220],clarification:[100,140],objection:[100,140],handover:[100,140],revision:[350,450]};assert.equal(Object.keys(incidentModels).length,6);const passage=u.banks.find(b=>b.id==='writing').passage;assert(passage.includes(incidentBrief));for(const [k,[min,max]]of Object.entries(bounds)){assert(words(incidentModels[k])>=min&&words(incidentModels[k])<=max,k);assert(passage.includes(incidentModels[k]),k);}
 for(const k of ['report','revision']){const p=incidentModels[k].match(/Public update: ([\s\S]*?)\n\n/)[1];assert(words(p)>=80&&words(p)<=120,k+' public paragraph');}assert.notEqual(incidentModels.report,incidentModels.revision);assert.match(task('writing-9').answer,/Revised Orchard handover/);
});
test('Two new controls each have 10 closed, 20 manual, five speech and all eight goals',()=>{
 const prompts=new Set(practice.map(t=>t.prompt));for(const e of u.tests){assert.equal(e.tasks.length,30);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,10);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,5);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id),g.id);assert(e.tasks.every(t=>!prompts.has(t.prompt)));for(const n of [14,24])assert.match(e.tasks[n-1].prompt,/350–450/);assert.match(e.tasks[17].prompt,/скрыт|Не показывая/);assert.match(e.tasks[27].prompt,/7 дней/);assert.match(e.tasks[22].prompt,/настоящ|отзыв/);}
});
test('Wren preserves confirmed formatting mechanism, intact timestamps and unresolved delivered messages',()=>{
 assert.match(task('test-a-11').prompt,/c7 formatter.*c6 правильное/);assert.match(task('test-a-11').answer,/mechanism reproduced/);assert.match(task('test-a-13').answer,/Display.*timestamps/);assert(checkAnswer('confirmed',task('test-a-7').answer));assert(!checkAnswer('unconfirmed',task('test-a-7').answer));assert(checkAnswer('no',task('test-a-8').answer));assert(checkAnswer('update',task('test-a-9').answer));assert(checkAnswer('review',task('test-a-10').answer));assert.match(task('test-a-20').answer,/All four.*other files are not covered/);
});
test('Juniper distinguishes complete statuses, proven empty outputs, another path and refused takeover',()=>{
 for(const s of ['шесть файлов','два файла пустые','rerun','Sol'])assert(task('test-b-11').prompt.toLowerCase().includes(s.toLowerCase()),s);assert(checkAnswer('observed',task('test-b-7').answer));assert(checkAnswer('proposed',task('test-b-8').answer));assert(checkAnswer('Jo',task('test-b-9').answer));assert(checkAnswer('update',task('test-b-10').answer));assert.match(task('test-b-13').answer,/6 valid\/2 empty/);assert.match(task('test-b-20').answer,/has not been established/);assert.match(task('test-b-26').answer,/Previewmismatch|Preview mismatch|preview.*mismatch/i);assert.match(task('test-b-27').answer,/Признать confirmed improvement/);
});
test('Incident appendix has 32 original models and 16 tasks with bounded primary sources',()=>{
 assert.equal(incidentPatterns.length,32);assert(incidentPatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(incidentReference.practice.length,16);assert(incidentSources.every(s=>new URL(s[1]).hostname==='sre.google'));assert(u.references.includes(incidentReference.id));assert.match(incidentReference.intro[0],/не универсальный регламент/);
});
test('v1/v2 imports preserve legacy notes, multiline answers, bookmark, navigation and SRS without new credit',()=>{
 for(const version of [1,2]){const s=oldState();s.schemaVersion=version;if(version===1){delete s.learning;delete s.bookmark;}const r=roundTrip(s);assert.equal(r.schemaVersion,2);assert.deepEqual(r.cards,s.cards);assert.deepEqual(r.navigation,s.navigation);assert.deepEqual(r.bookmark,s.bookmark??null);assert.equal(r.drafts.T05,s.drafts.T05);assert.equal(r.moduleProgress.T05.selfChecked,true);assert(!r.learning[u.id]);assert.deepEqual(topicWorkProgress(r,'T05'),{kind:'expanded',completed:0,total:127,percent:0,practiceAnswered:0,practiceTotal:126,testsSubmitted:0,testsTotal:1});}
});
test('Original, full revision and interrupted exam stay distinct through export/import and route recovery',()=>{
 const s=oldState(),p=unitState(s,u.id);p.answers[task('writing-2').id]='Synthetic original\n'+incidentModels.report;p.answers[task('writing-9').id]='Synthetic full revision\n'+incidentModels.revision;p.examDraft.answers[task('test-a-14').id]='Synthetic unfinished exam\n'+incidentModels.report;s.navigation.current='unit/T05-incidents/writing';s.navigation.sections.course=s.navigation.current;s.bookmark={route:s.navigation.current,scroll:840,focus:'answer-T05-incidents-writing-9'};assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'T05').completed,2);assert.equal(topicWorkProgress(s,'T05').testsSubmitted,0);
});
test('A/B history keeps twenty manual answers pending and cannot double-count submitted tests',()=>{
 const s=oldState(),p=unitState(s,u.id);let original;for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-10-02T12:10:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.deepEqual([score.correct,score.total,score.pending,score.status],[10,10,20,'awaiting-review']);assert.equal(topicWorkProgress(s,'T05').completed,1);if(e.id==='a'){original=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],original);}assert.deepEqual(roundTrip(s),s);
});
test('127 filled steps leave content partial and quality unconfirmed; speech approval requires audio',()=>{
 const s=oldState(),before=structuredClone(s),p=complete(s),a=p.attempts[0];assert.equal(topicWorkProgress(s,'T05').percent,100);assert.equal(topic.contentStatus,'partial');assert.equal(scoreUnitTest(u,a).status,'awaiting-review');for(const key of ['cards','drafts','navigation','bookmark','moduleProgress'])assert.deepEqual(s[key],before[key]);const speech=u.tests[0].tasks.find(t=>t.kind==='speech');a.reviews[speech.id]={score:3,reviewer:'Synthetic reviewer',date:'2026-10-02T12:15:00Z',evidence:'Fixture, not learner evidence',heardAudio:false};assert.throws(()=>roundTrip(s),/прослушанное аудио/);for(const t of u.tests[0].tasks.filter(isOpen))a.reviews[t.id]={score:3,reviewer:'Synthetic reviewer',date:'2026-10-02T12:15:00Z',evidence:'Fixture only',...(t.kind==='speech'?{heardAudio:true}:{})};assert.equal(scoreUnitTest(u,a).status,'awaiting-delayed-check');startUnitTest(s,u.id);p.examDraft.answers[task('test-b-14').id]='Synthetic next draft\nNot learner work';assert.deepEqual(roundTrip(s),s);
});
test('Old self-check and a shorter study day do not remove the new T05 content from planning',()=>{
 const s=oldState();s.placement={assessmentVersion,date:'2026-10-02T12:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};assert(buildPlan(s).items.some(m=>m.id==='T05'&&m.contentStatus==='partial'));complete(s);const work=topicWorkProgress(s,'T05');s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T05'),work);assert(buildPlan(s).items.some(m=>m.id==='T05'));assert.deepEqual(roundTrip(s),s);
});

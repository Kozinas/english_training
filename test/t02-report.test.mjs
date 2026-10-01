import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats,topicDevelopment} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {reportReading,reportListening,reportModels} from '../data/t02-report-texts.mjs';
import {bugReportSources,bugReportPatterns,bugReportReference} from '../data/bug-report-language.mjs';
import {t02Vocabulary} from '../data/lexicon-t02.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='T02'),u=subtopics.find(u=>u.id==='T02-report');
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s){const p=unitState(s,u.id);for(const t of practice)p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T19:00:00Z');return p;}
function oldState(){const s=freshState();s.moduleProgress.T02={selfChecked:true,date:'2026-09-22'};s.drafts.T02='Synthetic old report\nNot a real learner response.';s.cards['T02-v2']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T02-x-look-into']=reviewCard(null,'hard',Date.UTC(2026,8,27));const route='module/T02';s.navigation.current=route;s.navigation.sections.course=route;s.navigation.pages[route]={scroll:640,focus:'drill1',fields:{drill0:'actual',drill1:'reproduce\nSynthetic original',drill2:'resolved'},details:[true]};s.bookmark={route,scroll:640,focus:'drill1'};return s;}
test('T02 reports is a substantial first unit, with all three T02 strands now published',()=>{
 assert.equal(u.explanation.length,15);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>9800);assert.equal(u.examples.length,36);assert.equal(u.goals.length,8);assert.deepEqual(u.prerequisites,['T01-procedures','B101-continuous','B104-questions']);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,12,14,14,14,12,12,12,12]);assert.equal(practice.length,116);assert.equal(topic.subtopics.length,3);assert.equal(topic.contentStatus,'expanded');assert.deepEqual(topic.remainingScope,[]);assert.equal(topicDevelopment.T02,undefined);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy,courseStats.subtopics,courseStats.practice,courseStats.testTasks],[38,0,2,122,11031,5372]);
 assert.deepEqual(topic.prerequisites,['T01','B101','B104']);
});
test('T02 independent grammar keys distinguish agreement, time, -ing, V3 and uncountable evidence',()=>{
 for(const [s,right,wrong]of [['forms-1','show','shows'],['forms-2','do','does'],['forms-3','reproduced','reproduce'],['forms-4','wrote','have written'],['forms-5','reloading','reload'],['forms-6','enter','enters'],['forms-7','is','does'],['forms-8','evidence','evidences'],['review-1','seen','saw'],['review-2','does','do'],['test-a-1','keep','keeps'],['test-a-2','observed','observe'],['test-a-3','closing','close'],['test-a-4','reproduced','have reproduced'],['test-b-1','do','does'],['test-b-2','written','wrote'],['test-b-3','checking','check'],['test-b-4','tested','have tested']]){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 for(const s of ['forms-9','forms-10','forms-11','forms-12','test-a-18','test-b-18'])assert(isOpen(task(s)));assert(task('forms-10').answer.includes('which browser you used'));
});
test('T02 environment distinguishes versions, machine count, fields and unperformed preparation',()=>{
 for(const [s,right,wrong]of [['context-1','6','3.2'],['context-2','no','yes'],['context-3','no','yes']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('context-4').answer.includes('build 320'));assert(task('context-5').answer.includes('контроль'));assert(task('context-10').answer.includes('password не публикуется'));assert(task('context-11').answer.includes('неизвестность'));
});
test('T02 clear steps and symptom titles preserve objects, action order and safe simulated scope',()=>{
 for(const [s,right,wrong]of [['steps-1','then','than'],['steps-2','precede','follow'],['test-a-8','before','after'],['test-b-8','after','before']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('steps-3').answer.includes('despite Saved'));assert(task('steps-5').answer.includes('Save → Saved → reload'));assert(task('steps-6').explanation.includes('Никаких реальных'));assert(task('steps-8').explanation.includes('за автора'));assert(task('review-6').answer.includes('I see'));
});
test('T02 expected/actual, frequency, evidence and workaround never manufacture a cause or fix',()=>{
 for(const s of ['evidence-1','evidence-2','evidence-3','evidence-4','review-3','review-4','test-a-5','test-a-6','test-a-7','test-b-5','test-b-7']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 assert(checkAnswer('yes',task('test-b-6').answer));assert(task('evidence-6').answer.includes('three of four'));assert(task('evidence-7').answer.includes('root cause'));assert(task('evidence-10').explanation.includes('Дата обнаружения'));assert(task('evidence-12').answer.includes('enhancement'));
});
test('T02 Mica reading retains all counts, separate trials, the control note and unknown regression',()=>{
 assert.equal(words(reportReading),656);assert(reportReading.includes('version 3.2, build 320'));assert(reportReading.includes('four attempts by one tester, not four users'));
 for(const [s,right,wrong]of [['reading-1','320','3.2'],['reading-2','Seed','Sample line'],['reading-3','3','4'],['reading-4','yes','no']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('reading-6').answer.includes('остался виден'));assert(task('reading-7').explanation.includes('3/6'));assert(task('reading-8').answer.includes('Один отдельный'));assert(task('reading-9').answer.includes('backend не осмотрен'));assert(task('reading-10').answer.includes('не установлена'));assert(reportReading.includes('Neither tester has checked version 3.1'));
});
test('T02 Vale listening independently preserves two corrections, successful movement and delayed display',()=>{
 assert.equal(words(reportListening),491);assert(reportListening.includes('one narrator'));assert(!reportListening.includes('Mica'));assert(reportListening.includes('No update is performed'));assert(reportListening.includes('does not move the card a second time'));
 for(const [s,right,wrong]of [['listening-1','1.6','1.5'],['listening-2','164','146'],['listening-3','4','5'],['listening-4','Done','Ready']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('listening-6').answer.includes('в 1/4'));assert(task('listening-7').answer.includes('повторного Move нет'));assert(task('listening-9').answer.includes('не verified'));assert(task('listening-11').answer.includes('не software change'));assert(task('listening-12').answer.includes('дата не согласована'));
});
test('T02 six full writing models meet their declared ranges and support a complete independent revision',()=>{
 assert.deepEqual(Object.fromEntries(Object.entries(reportModels).map(([k,v])=>[k,words(v)])),{report:212,clarification:127,summary:114,impact:109,correction:97,reflection:101});
 for(const [k,v]of Object.entries(reportModels)){const [min,max]=k==='report'?[200,260]:k==='clarification'?[120,160]:k==='summary'?[110,150]:k==='impact'?[100,140]:[90,120];assert(words(v)>=min&&words(v)<=max);assert(practice.some(t=>t.answer===v.replace(/\n+/g,' ')));}
 assert(task('writing-7').prompt.includes('Cedar Viewer'));assert(task('writing-11').prompt.includes('полностью'));assert(task('writing-11').explanation.includes('журнал не заменяет'));assert(reportModels.report.includes('not completed'));
});
test('T02 reference is authored bounded guidance, not a QA standard or invented product documentation',()=>{
 assert.equal(bugReportPatterns.length,32);assert(bugReportPatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(bugReportReference.practice.length,16);assert.deepEqual(bugReportSources.map(s=>new URL(s[1]).hostname),['bugzilla.mozilla.org','docs.github.com']);assert(bugReportReference.intro.some(s=>s.includes('не весь процесс QA')));assert(u.references.includes('bug-report-language'));
});
test('T02 adds forty contextual UK IPA cards and keeps all seven legacy card bytes and IDs unchanged',()=>{
 const old=topic.vocabulary.filter(c=>!/^T02-x-\d+$/.test(c.id));assert.equal(old.length,7);assert.equal(createHash('sha256').update(JSON.stringify(old)).digest('hex'),'063a9fd6469fbe1ec30dbc5fa81714f535da661b9ca85c199d588cd7c275a7b6');assert.equal(t02Vocabulary.length,112);assert.equal(topic.vocabulary.length,119);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,119);
 assert.equal(t02Vocabulary[0].id,'T02-x-1');assert.equal(t02Vocabulary[39].id,'T02-x-40');for(const c of t02Vocabulary)assert(c.context&&c.note&&c.accent==='UK'&&/^\/.+\/$/.test(c.ipa));assert(t02Vocabulary.some(c=>c.word==='rule out'&&c.kind==='фразовый глагол'));assert(t02Vocabulary.some(c=>c.word==='as far as I can tell'&&c.kind==='выражение'));
});
test('T02 new A/B variants cover eight goals and use different symptoms rather than renamed training text',()=>{
 const seen=new Set(practice.map(t=>t.prompt));for(const e of u.tests){assert.equal(e.tasks.length,26);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,18);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,4);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!seen.has(t.prompt),t.id);seen.add(t.prompt);}}
 assert(task('test-a-9').prompt.includes('Cobalt Lists'));assert(task('test-b-9').prompt.includes('Amber Mailbox'));assert(task('test-a-10').answer.includes('в одном'));assert(task('test-b-12').explanation.includes('Две проверки workaround'));
 for(const v of ['a','b']){assert(task(`test-${v}-12`).prompt.includes('200–260'));assert(task(`test-${v}-22`).prompt.includes('200–260'));assert(task(`test-${v}-25`).prompt.includes('Через 7 дней'));}
});
test('T02 requires hidden real listening, an actual correction, unknown follow-up and delayed transfer',()=>{
 for(const v of ['a','b']){assert(task(`test-${v}-16`).explanation.includes('pending'));assert(task(`test-${v}-16`).explanation.includes('text-supported'));assert(task(`test-${v}-17`).prompt.includes('Партнёр устно'));assert(task(`test-${v}-25`).answer.includes('pending'));}
 assert(task('test-a-14').prompt.includes('заранее не известный'));assert(task('speaking-7').explanation.includes('Текст не'));assert(task('review-10').explanation.includes('заранее'));
});
test('T02 legacy archive, multiline notes, navigation, bookmark and SRS import with zero new credit',()=>{
 const s=oldState(),original=structuredClone(s),r=roundTrip(s);assert.deepEqual(r,original);assert(!r.learning[u.id]);assert.equal(r.schemaVersion,2);assert.deepEqual(topic.drills.map(d=>d[1]),['actual','reproduce','resolved']);
 assert.deepEqual(topicWorkProgress(r,'T02'),{kind:'expanded',completed:0,total:351,percent:0,practiceAnswered:0,practiceTotal:348,testsSubmitted:0,testsTotal:3});unitState(r,u.id).answers[task('forms-1').id]='show';assert.equal(topicWorkProgress(r,'T02').completed,1);assert.deepEqual(r.navigation,original.navigation);assert.deepEqual(r.cards,original.cards);
});
test('T02 v1 self-check cannot create new report practice or certified progress',()=>{
 const s=oldState();s.schemaVersion=1;delete s.learning;const r=roundTrip(s);assert.equal(r.schemaVersion,2);assert.equal(r.moduleProgress.T02.selfChecked,true);assert.deepEqual(r.navigation,s.navigation);assert.deepEqual(r.cards,s.cards);assert.equal(r.drafts.T02,s.drafts.T02);assert.equal(topicWorkProgress(r,'T02').completed,0);assert(!r.learning[u.id]);
});
test('T02 original report, separate full revision and unfinished exam survive export/import',()=>{
 const s=oldState(),p=unitState(s,u.id);p.answers[task('writing-7').id]='Synthetic original\n'+reportModels.report;p.answers[task('writing-11').id]='Synthetic revision\n'+reportModels.report;p.examDraft.answers[task('test-a-12').id]='Synthetic unfinished report\n'+reportModels.report;assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'T02').completed,2);
});
test('T02 A/B history preserves original attempts and eighteen pending answers without double progress',()=>{
 const s=oldState(),p=unitState(s,u.id);let a;for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T19:20:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,18);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'T02').completed,1);if(e.id==='a'){a=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],a);}
 assert.deepEqual(roundTrip(s),s);const speech=u.tests[0].tasks.find(t=>t.kind==='speech');p.attempts[0].reviews[speech.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T19:25:00Z',evidence:'Synthetic fixture, not actual learner audio.',heardAudio:false};assert.throws(()=>roundTrip(s),/прослушанное аудио/);p.attempts[0].reviews[speech.id].heardAudio=true;assert.deepEqual(roundTrip(s),s);
});
test('T02 117/351 preserves the completed first unit, awaiting review and in the plan regardless of old self-check or minutes',()=>{
 const s=oldState(),p=complete(s),work=topicWorkProgress(s,'T02');assert.equal(work.completed,117);assert.equal(work.total,351);assert.equal(work.percent,33);assert.equal(topic.contentStatus,'expanded');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 s.placement={assessmentVersion,date:'2026-09-29T19:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};assert(buildPlan(s).items.some(m=>m.id==='T02'&&m.contentStatus==='expanded'));s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T02'),work);assert.deepEqual(roundTrip(s),s);
});

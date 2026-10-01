import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,courseStats} from '../data/course.mjs';
import {migrationReading as reading,migrationListening as listening,migrationBrief as brief,migrationModels as models} from '../data/t04-migrations-texts.mjs';
import {migrationReference as reference} from '../data/migration-language.mjs';
import {freshState,unitState,validateState,isOpen,checkAnswer,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='T04'),old=topic.subtopics.slice(0,2),u=topic.subtopics[2];
const tasks=[...u.banks.flatMap(b=>b.tasks),...u.tests.flatMap(e=>e.tasks)],get=s=>tasks.find(t=>t.id===u.id+'-'+s);
const hash=x=>createHash('sha256').update(JSON.stringify(x)).digest('hex'),words=s=>s.trim().split(/\s+/).length,round=s=>validateState(JSON.parse(JSON.stringify(s)));
function fill(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,unit.id,'2026-10-01T12:00:00Z');return p;}
function earlier(){const s=freshState();for(const unit of old){const p=fill(s,unit),n=unit.id==='T04-decisions'?12:14;p.answers[unit.id+'-writing-2']='Synthetic original\nOriginal paragraph';p.answers[unit.id+'-writing-9']='Synthetic revision\nRevised paragraph';p.attempts[0].reviews[unit.id+'-test-a-'+n]={score:3,reviewer:'Synthetic teacher',date:'2026-10-01T12:01:00Z',evidence:'Synthetic only'};startUnitTest(s,unit.id);p.examDraft.answers[unit.id+'-test-b-'+n]='Synthetic next draft\nUnfinished';}s.cards['T04-v2']=reviewCard(null,'good',Date.UTC(2026,8,30));s.cards['T04-x-76']=reviewCard(null,'hard',Date.UTC(2026,8,30));s.moduleProgress.T04={selfChecked:true,date:'2026-09-22'};s.drafts.T04='Synthetic legacy note\nNo personal data';s.bookmark={route:'unit/T04-performance/writing',scroll:620,focus:'answer-T04-performance-writing-9'};s.navigation={current:'unit/T04-performance/writing',sections:{course:'unit/T04-performance/writing'},pages:{'module/T04':{scroll:200,focus:'drill1',fields:{drill0:'throughput',drill1:'compatibility\nSynthetic archive',drill2:'would'},details:[true]},'unit/T04-performance/writing':{scroll:620,focus:'answer-T04-performance-writing-9',fields:{},details:[true]}}};return s;}

test('Migration unit completes the third declared T04 line without a mastery claim',()=>{
 assert.equal(u.id,'T04-migrations');assert.deepEqual(u.prerequisites,['T04-performance','T03-api']);assert.equal(u.explanation.length,17);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>11000);assert.equal(u.examples.length,40);assert.deepEqual(u.banks.map(b=>b.tasks.length),[16,16,16,14,16,12,16,16,14]);assert.equal(u.goals.length,8);assert.equal(topic.contentStatus,'expanded');assert.deepEqual(topic.remainingScope,[]);assert.deepEqual(courseStats,{topics:40,expanded:38,partial:0,legacy:2,subtopics:122,practice:11031,testTasks:5372});
});
test('Both prior units retain byte-identical banks/tests and all 83 prior cards',()=>{
 assert.equal(hash(old.map(u=>u.banks)),'095c588371e9e4fdb8cdc199c7bdc40c8c88323ff6c9a06c15367304d2edf92f');assert.equal(hash(old.map(u=>u.tests)),'312189170dd05a24d6884b4e9db6527c4e149a6ab33a96d764cc5a7dbbae2d12');assert.equal(hash(topic.vocabulary.slice(0,83)),'1862566c8468454d8635e2c108497033b4ab2553187025783eaa3bef41494a0b');
});
test('Thirty-six new cards append stable IDs with IPA and whole-expression meanings',()=>{
 const cards=topic.vocabulary.slice(83);assert.equal(cards.length,36);assert.equal(cards[0].id,'T04-x-77');assert.equal(cards.at(-1).id,'T04-x-112');assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,119);for(const c of cards)assert(c.accent==='UK'&&/^\/.+\/$/.test(c.ipa)&&c.context&&c.note);for(const word of ['phase out','put off','fall back on','carry over','hold off'])assert(cards.some(c=>c.word===word&&c.kind==='фразовый глагол'));
});
test('Closed keys have independently specified positive and negative cases',()=>{
 for(const [s,right,wrong]of [['forms-1','have','has'],['forms-2','on','from'],['forms-3','with','to'],['forms-4','switch','will switch'],['forms-5','have','will have'],['forms-6','retaining','to retain'],['forms-7','updates','does update'],['forms-8','changing','change'],['changes-1','no','yes'],['changes-2','no','yes'],['estimates-3','to','on'],['test-a-6','deprecated','removed'],['test-b-6','75','60'],['test-b-8','to','from']]){assert(!isOpen(get(s)));assert(checkAnswer(right,get(s).answer),s);assert(!checkAnswer(wrong,get(s).answer),s);}assert(isOpen(get('forms-9')));assert(get('forms-7').prompt.includes('без усиления'));
});
test('Alder distinguishes schema states, reader priority and old/new write contracts',()=>{
 assert.equal(words(reading),628);for(const phrase of ['a23, reads and writes display_name only','adds a nullable public_name','when it is not null','both columns atomically','does not change what a23 writes','start against S1 failed'])assert(reading.includes(phrase),phrase);assert(get('changes-5').answer.includes('execution не проводили'));assert(get('changes-6').answer.includes('сохранилась'));assert(get('changes-7').answer.includes('не a23'));
});
test('Backfill counts do not certify mixed-version updates or whole-project completion',()=>{
 for(const phrase of ['1,000 records had matching values','200 still had null','No application writes occurred','Four returned the latest acknowledged name','the newer display_name was still present','not deletion'])assert(reading.includes(phrase),phrase);assert.equal(1000+200,1200);assert(get('reading-6').answer.includes('83.3%'));assert(get('reading-7').answer.includes('Будущие a23 writes'));
});
test('Recovery separates app switch, schema, old snapshot and later-write replay',()=>{
 for(const phrase of ['No schema downgrade occurred','S3 would remove display_name','Fourteen later writes','different, disposable environment','No method for replaying'])assert(reading.includes(phrase),phrase);assert(get('recovery-6').answer.includes('S2 retained'));assert(get('recovery-7').answer.includes('не replay 14'));assert(get('recovery-11').answer.includes('who may approve'));assert(get('reading-11').answer.includes('untested'));
});
test('Estimate excludes review, rehearsal and waiting; limited commitments remain limited',()=>{
 for(const phrase of ['three to five person-days','excludes review, recovery rehearsal and waiting','tentative target','start and staffing have not been settled','Mina accepts a review','not to guarantee access'])assert(reading.includes(phrase),phrase);assert(get('estimates-6').answer.includes('Sequential dependencies'));assert(get('estimates-10').answer.includes('завершения'));assert(brief.includes('Пятница — requested target'));
});
test('Cedar audio independently corrects counts, duration and rollback scope',()=>{
 assert.equal(words(listening),539);for(const phrase of ['Eight of the ten','two contain the number two','Recognised does not mean delivered','nine seconds, not ninety','fifteen-second limit','before the proposed writer change','two person-days','11:00 UTC','not approval to enable string writes'])assert(listening.includes(phrase),phrase);assert(get('listening-6').answer.includes('no string-write state'));assert(get('listening-9').answer.includes('не finish'));assert(get('listening-12').explanation.includes('text-supported'));
});
test('Maple independent writing uses mapping ambiguity and new-record failures, not Alder substitution',()=>{
 for(const phrase of ['600 старых','480','120','не угадывать','в четырёх заполнил только','в двух также full_name','трёх старых записях','Backup сделан до шести','restore/replay не проверены'])assert(brief.includes(phrase),phrase);assert(get('writing-4').answer.includes('480 mapped'));assert(get('writing-15').answer.includes('120 unresolved'));
});
test('Six complete models precede original writing and a separately stored full revision',()=>{
 assert.deepEqual(Object.values(models).map(words),[372,191,105,105,104,365]);const b=u.banks.find(b=>b.id==='writing');assert(b.passage.startsWith(brief));for(const m of Object.values(models))assert(b.passage.includes(m));for(const n of [2,9])assert(get('writing-'+n).prompt.includes('350–450'));assert(get('writing-8').explanation.includes('pending'));assert(get('writing-9').explanation.includes('original'));assert.notEqual(models.report,models.revision);
});
test('New A/B controls cover every goal with ten closed, twenty manual and five speech tasks',()=>{
 const seen=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));for(const e of u.tests){assert.equal(e.tasks.length,30);assert.equal(e.tasks.filter(isOpen).length,20);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,5);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!seen.has(t.prompt),t.id);seen.add(t.prompt);}for(const n of [14,24])assert(e.tasks[n-1].prompt.includes('350–450'));assert(e.tasks[16].explanation.includes('text-supported'));assert(e.tasks[27].prompt.includes('Через семь дней'));assert(e.tasks[27].explanation.includes('pending'));}
});
test('New controls distinguish accepted missing-zone input, retained metadata and lossy originals',()=>{
 assert(get('test-a-11').answer.includes('two rejected valid-old inputs'));assert(get('test-a-12').answer.includes('optional addition'));assert(get('test-b-11').answer.includes('violates retention'));assert(get('test-b-13').answer.includes('no existing backup'));assert(get('test-b-19').answer.includes('новое recovery evidence'));assert(get('test-b-21').answer.includes('five verified sample inversions'));assert(get('test-b-26').answer.includes('data accessibility still incompatible'));
});
test('Reference contains 32 complete patterns and 16 tasks with scoped primary guidance',()=>{
 assert.equal(reference.rows.length,32);assert.equal(reference.practice.length,16);for(const row of reference.rows)assert(row.length===4&&row.every(Boolean));assert.deepEqual(reference.sources.map(s=>new URL(s[1]).hostname),['docs.gitlab.com','google.aip.dev']);assert(reference.intro[1].includes('не являются универсальным'));assert(u.references.includes(reference.id));
});
test('Prior export preserves 272/409 steps plus originals, revisions, reviews, drafts, archive and SRS',()=>{
 const s=earlier(),r=round(s);assert.deepEqual(r,s);assert.deepEqual(topicWorkProgress(r,'T04'),{kind:'expanded',completed:272,total:409,percent:66,practiceAnswered:270,practiceTotal:406,testsSubmitted:2,testsTotal:3});assert(!r.learning[u.id]);unitState(r,u.id).answers[get('forms-1').id]='have';assert.equal(topicWorkProgress(r,'T04').completed,273);for(const oldUnit of old)assert.deepEqual(r.learning[oldUnit.id],s.learning[oldUnit.id]);for(const k of ['cards','navigation','bookmark','drafts','moduleProgress'])assert.deepEqual(r[k],s[k]);
});
test('Long originals, revisions and interrupted exam drafts round-trip independently',()=>{
 const s=earlier(),p=unitState(s,u.id);p.answers[get('writing-2').id]='Synthetic original\n'+models.report;p.answers[get('writing-9').id]='Synthetic revision\n'+models.revision;p.examDraft.answers[get('test-a-14').id]='Synthetic exam draft\n'+models.report;assert.deepEqual(round(s),s);assert.equal(topicWorkProgress(s,'T04').completed,274);assert.equal(topicWorkProgress(s,'T04').testsSubmitted,2);
});
test('Two submitted variants keep twenty open answers pending and add only one step',()=>{
 const s=earlier(),p=unitState(s,u.id);let first;for(const [i,e]of u.tests.entries()){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-10-01T12:05:00Z');const sc=scoreUnitTest(u,p.attempts.at(-1));assert.deepEqual([sc.correct,sc.total,sc.pending,sc.status],[10,10,20,'awaiting-review']);assert.equal(topicWorkProgress(s,'T04').completed,273);if(!i){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}assert.deepEqual(round(s),s);
});
test('409/409 is work completion; heard audio and delayed application remain required',()=>{
 const s=earlier(),before=structuredClone(s),p=fill(s,u),a=p.attempts[0];assert.equal(topicWorkProgress(s,'T04').percent,100);assert.equal(scoreUnitTest(u,a).status,'awaiting-review');const speech=u.tests[0].tasks.find(t=>t.kind==='speech');a.reviews[speech.id]={score:3,reviewer:'Synthetic teacher',date:'2026-10-01T12:10:00Z',evidence:'Synthetic only',heardAudio:false};assert.throws(()=>round(s),/прослушанное аудио/);for(const t of u.tests[0].tasks.filter(isOpen))a.reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-10-01T12:10:00Z',evidence:'Synthetic only',...(t.kind==='speech'?{heardAudio:true}:{})};assert.equal(scoreUnitTest(u,a).status,'awaiting-delayed-check');startUnitTest(s,u.id);p.examDraft.answers[get('test-b-14').id]='Synthetic next draft\nUnfinished';assert.deepEqual(round(s),s);for(const ou of old)assert.deepEqual(s.learning[ou.id],before.learning[ou.id]);for(const k of ['cards','drafts','navigation','bookmark'])assert.deepEqual(s[k],before[k]);const progress=topicWorkProgress(s,'T04');s.profile.minutes=60;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T04'),progress);
});

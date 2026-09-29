import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats,topicDevelopment} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {interfaceReading,interfaceListening,interfaceModels} from '../data/t01-interface-texts.mjs';
import {interfaceSources,interfacePatterns,interfaceReference} from '../data/interface-language.mjs';
import {t01Vocabulary} from '../data/lexicon-t01.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='T01'),u=subtopics.find(u=>u.id==='T01-interface');
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s){const p=unitState(s,u.id);for(const t of practice)p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T15:00:00Z');return p;}

test('T01 retains the substantial interface unit alongside documentation with procedures still remaining',()=>{
 assert.equal(u.explanation.length,13);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>8000);assert.equal(u.examples.length,34);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,12,12,12,12,12,12]);assert.equal(practice.length,100);assert.equal(u.goals.length,6);
 assert.equal(topic.subtopics.length,2);assert.equal(topic.contentStatus,'partial');assert.deepEqual(topic.remainingScope,topicDevelopment.T01.remaining);assert.equal(topic.remainingScope.length,1);
 assert(topic.remainingScope[0].includes('Полные пошаговые'));
 assert.deepEqual(u.prerequisites,['A203-obligation','A205-patterns']);assert.equal(topic.track,'technical');
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy,courseStats.subtopics,courseStats.practice,courseStats.testTasks],[34,1,5,112,9797,4816]);
});
test('T01 imperatives, requests, agreement, before and particle position have independent keys',()=>{
 const cases=[['forms-1','Open','Opens'],['forms-2','close','closes'],['forms-3','select','selected'],['forms-4','are','is'],['forms-5','Is','Does'],['forms-6','Do','Are'],['forms-7','leaving','leave'],['forms-8','Turn it off','Turn off it'],['review-1','delete','deletes'],['test-a-1','close','closes'],['test-a-2','copy','copied'],['test-a-3','are','is'],['test-a-4','opening','open'],['test-b-1','Open','Opens'],['test-b-2','describe','described'],['test-b-3','Is','Does'],['test-b-4','continuing','continue']];
 for(const [s,right,wrong] of cases){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 for(const s of ['forms-9','forms-10','forms-11','forms-12','forms-13','actions-11','review-5'])assert(isOpen(task(s)),s);
 assert(task('actions-11').answer.includes('оба возможны'));assert(task('forms-10').explanation.includes('пунктуация содержательно'));
});
test('T01 action keys preserve direction, keyboard versus value and target state',()=>{
 for(const [s,right,wrong] of [['actions-1','upload','download'],['actions-2','download','upload'],['actions-3','press','type'],['actions-4','type','press'],['actions-5','tap','double-click'],['actions-6','Turn them on','Turn on them'],['test-a-5','download','upload'],['test-a-6','press','type'],['test-b-5','upload','download'],['test-b-6','type','press']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(!checkAnswer('Turn it on',task('actions-6').answer),'plural notifications requires them');
 assert(task('actions-7').answer.includes('Sandbox — значение'));assert(task('actions-8').explanation.includes('Toggle мог бы выключить'));assert(task('actions-13').answer.includes('may stay on the device'));
});
test('T01 requirements, UI state and confirmed outcomes cannot be conflated',()=>{
 for(const s of ['status-1','status-2','status-3','status-4','review-4','test-a-8','test-b-7','test-b-8']){assert(checkAnswer('no',task(s).answer));assert(!checkAnswer('yes',task(s).answer));}
 for(const s of ['review-3','test-a-7']){assert(checkAnswer('yes',task(s).answer));assert(!checkAnswer('no',task(s).answer));}
 assert(task('status-5').answer.includes('запрещает'));assert(task('status-6').answer.includes('старой сохранённой версии'));assert(task('status-8').answer.includes('облачная'));
 assert(task('status-9').answer.includes('не одобрение'));assert(task('status-10').answer.includes('do not have confirmation yet'));
});
test('T01 Pebble Notes reading preserves field values, optional data, draft scope and cancel boundary',()=>{
 assert.equal(words(interfaceReading),463);assert(interfaceReading.includes('fictional'));assert(interfaceReading.includes('static picture'));
 for(const [s,right,wrong] of [['reading-1','Training','Sandbox'],['reading-2','Title','Comment'],['reading-3','disabled','enabled'],['reading-4','no','yes']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('reading-5').answer.includes('unfinished draft'));assert(task('reading-6').answer.includes('Screen practice'));assert(task('reading-7').answer.includes('Save draft, не Submit'));
 assert(task('reading-10').answer.includes('не включить'));assert(task('reading-11').answer.includes('после последнего save'));assert(interfaceReading.includes('It does not delete earlier saved notes'));
});
test('T01 independent audio preserves different project, missing reviewer, receipt and unchanged checkbox',()=>{
 assert.equal(words(interfaceListening),398);assert(interfaceListening.includes('one narrator'));assert(!interfaceListening.includes('Pebble Notes'));
 for(const [s,right,wrong] of [['listening-1','Sandbox','Training'],['listening-2','Mina','Sana'],['listening-3','R17','R71'],['listening-4','no','yes']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(task('listening-5').answer.includes('Не выбран reviewer'));assert(task('listening-6').answer.includes('сначала сохраняет draft'));assert(task('listening-8').answer.startsWith('Sending, затем Request received'));
 assert(task('listening-9').answer.includes('Прочитала'));assert(task('listening-10').answer.includes('не с качеством'));assert(task('listening-12').answer.includes('do not know whether one exists'));
});
test('T01 static diagram is safe, labelled and redundant with the reading rather than a hidden listening clue',async()=>{
 const b=u.banks.find(b=>b.id==='reading'),d=b.diagram,svg=await readFile(new URL('../'+d.file,import.meta.url),'utf8');
 assert.equal(d.src,'/assets/t01-interface.svg');assert(d.alt.includes('Title пустое'));assert(d.caption.includes('не работающая форма'));
 assert(svg.includes('<title'));assert(svg.includes('<desc'));assert(!/<script|<foreignObject|\bon\w+=|href=/i.test(svg));
 for(const label of ['Training','Title','Required','Comment','Practice only','Optional','Share with team','Save draft','Submit (disabled)','Unsaved changes'])assert(svg.includes(label),label);
 assert(!u.banks.find(b=>b.id==='listening').diagram);assert(interfaceReading.includes('All the details'));assert(interfaceReading.includes('The word Required appears beside Title'));
});
test('T01 all six full models satisfy their declared ranges and are used in writing',()=>{
 const sizes={instruction:108,description:112,clarification:109,handoff:109,correction:87,reflection:88};assert.deepEqual(Object.fromEntries(Object.entries(interfaceModels).map(([k,v])=>[k,words(v)])),sizes);
 for(const [k,v] of Object.entries(interfaceModels)){const short=['correction','reflection'].includes(k);assert(words(v)>=(short?80:100)&&words(v)<=(short?100:140));assert(practice.some(t=>t.answer===v.replace(/\n+/g,' ')));}
 assert(interfaceModels.clarification.includes('look at its state or select it'));assert(interfaceModels.handoff.includes('have not done that yet'));assert(interfaceModels.correction.includes('have not selected Submit'));
 assert(task('writing-11').prompt.includes('полностью'));assert(task('writing-11').explanation.includes('Отзыв не выдумывать'));
});
test('T01 reference is an authored bounded language guide, not product documentation or an HTML standard',()=>{
 assert.equal(interfacePatterns.length,30);assert(interfacePatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(interfaceReference.practice.length,16);
 assert(interfaceReference.intro.some(s=>s.includes('не полный словарь')));assert(interfaceReference.intro.some(s=>s.includes('не скопированы')));
 assert.deepEqual(interfaceSources.map(s=>new URL(s[1]).hostname),['developers.google.com','learn.microsoft.com','dictionary.cambridge.org','developer.mozilla.org']);
 assert(u.banks.find(b=>b.id==='writing').instructions.includes('не описание хранения English Training'));
});
test('T01 preserves all seven published cards and retains the first 40 cards alongside the appended documentation vocabulary',()=>{
 const old=topic.vocabulary.filter(c=>!/^T01-x-\d+$/.test(c.id));assert.equal(old.length,7);assert.equal(createHash('sha256').update(JSON.stringify(old)).digest('hex'),'e3b9a2aac64a1a2ac39b1df33b9901c253b96a03d309b7652ba48f8013ba2731');
 assert.equal(t01Vocabulary.length,76);assert.equal(topic.vocabulary.length,83);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,83);
 assert.equal(t01Vocabulary[0].id,'T01-x-1');assert.equal(t01Vocabulary[39].id,'T01-x-40');
 for(const c of t01Vocabulary)assert(c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');assert(t01Vocabulary.some(c=>c.kind==='фразовый глагол'));assert(t01Vocabulary.some(c=>c.kind==='выражение'));
 assert.equal(t01Vocabulary.find(c=>c.word==='receipt').ipa,'/rɪˈsiːt/');assert(t01Vocabulary.find(c=>c.word==='backup').note.includes('back up'));
});
test('T01 two fresh variants cover all goals with eight closed and sixteen open tasks each',()=>{
 const prompts=new Set(practice.map(t=>t.prompt));for(const e of u.tests){assert.equal(e.tasks.length,24);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,16);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,3);
  for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
 }
 assert(task('test-a-9').prompt.includes('Birch Board'));assert(task('test-b-9').prompt.includes('Cedar Desk'));
 for(const v of ['a','b']){assert(task(`test-${v}-12`).prompt.includes('100–140'));assert(task(`test-${v}-21`).prompt.includes('100–140'));assert(task(`test-${v}-23`).prompt.includes('Через 7 дней'));}
});
test('T01 authentic listening, interaction and delayed application cannot be fabricated from typed scripts',()=>{
 assert(task('test-a-16').prompt.includes('не показывает текст'));assert(task('test-a-16').explanation.includes('без партнёра pending'));
 assert(task('test-b-16').explanation.includes('без реального прослушивания pending'));assert(task('test-b-17').explanation.includes('text-supported'));
 assert(task('speaking-1').explanation.includes('Не монолог'));assert(task('speaking-7').explanation.includes('ASR-ошибка'));assert(task('review-10').explanation.includes('не записывается заранее'));
});
test('T01 old short-topic archive imports read-only source answers without awarding new work or changing SRS',()=>{
 const s=freshState();s.moduleProgress.T01={selfChecked:true,date:'2026-09-22'};s.drafts.T01='Synthetic original notes';s.cards['T01-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['T01-x-set-up']=reviewCard(null,'hard',Date.UTC(2026,8,23));
 const route='module/T01';s.navigation.current=route;s.navigation.sections.course=route;s.navigation.pages[route]={scroll:540,focus:'drill1',fields:{drill0:'upload',drill1:'is\nSynthetic original',drill2:'exiting'},details:[true]};s.bookmark={route,scroll:540,focus:'drill1'};
 const original=structuredClone(s),restored=roundTrip(s);assert.deepEqual(restored,original);assert(!restored.learning[u.id]);assert.equal(restored.schemaVersion,2);
 assert.deepEqual(topic.drills.map(d=>d[1]),['upload','is','exiting']);assert.deepEqual(topicWorkProgress(restored,'T01'),{kind:'expanded',completed:0,total:218,percent:0,practiceAnswered:0,practiceTotal:216,testsSubmitted:0,testsTotal:2});
 unitState(restored,u.id).answers[task('forms-1').id]='Open';assert.equal(topicWorkProgress(restored,'T01').completed,1);assert.deepEqual(restored.cards,original.cards);assert.deepEqual(restored.navigation,original.navigation);
});
test('T01 v1 import preserves the old self-check without inventing expanded learning',()=>{
 const s=freshState();s.schemaVersion=1;delete s.learning;delete s.navigation;s.moduleProgress.T01={selfChecked:true,date:'2026-09-22'};s.cards['T01-v2']=reviewCard(null,'good',Date.UTC(2026,8,22));s.drafts.T01='Synthetic old draft';
 const restored=roundTrip(s);assert.equal(restored.schemaVersion,2);assert.equal(restored.moduleProgress.T01.selfChecked,true);assert.deepEqual(restored.cards,s.cards);assert.equal(restored.drafts.T01,s.drafts.T01);assert(!restored.learning[u.id]);assert.equal(topicWorkProgress(restored,'T01').completed,0);
});
test('T01 multiline original/revision and exam drafts persist; A/B history leaves sixteen pending',()=>{
 const s=freshState(),p=unitState(s,u.id);p.answers[task('writing-7').id]='Synthetic original\n'+interfaceModels.instruction;p.answers[task('writing-11').id]='Synthetic revision\n'+interfaceModels.instruction;p.examDraft.answers[task('test-a-12').id]='Synthetic next response\nContinue later.';
 assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'T01').completed,2);let first;
 for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T15:10:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,16);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'T01').completed,3);if(e.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
 assert.deepEqual(roundTrip(s),s);
});
test('T01 speech review requires heardAudio and a text review does not remove other pending work',()=>{
 const s=freshState(),p=complete(s),t=u.tests[0].tasks.find(t=>t.kind==='speech');p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T15:20:00Z',evidence:'Synthetic acknowledgement fixture, not an actual learner review.',heardAudio:false};assert.throws(()=>roundTrip(s),/прослушанное аудио/);p.attempts[0].reviews[t.id].heardAudio=true;assert.deepEqual(roundTrip(s),s);assert.equal(scoreUnitTest(u,p.attempts[0]).pending,15);
});
test('T01 101 filled steps remain partial, pending quality checks and unaffected by study time',()=>{
 const s=freshState(),p=complete(s),work=topicWorkProgress(s,'T01');assert.equal(work.completed,101);assert.equal(work.total,218);assert.equal(work.percent,46);assert.equal(topic.contentStatus,'partial');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 s.moduleProgress.T01={selfChecked:true,date:'2026-09-22'};s.placement={assessmentVersion,date:'2026-09-29T15:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};assert(buildPlan(s).items.some(m=>m.id==='T01'&&m.contentStatus==='partial'));
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'T01'),work);assert.deepEqual(roundTrip(s),s);
});

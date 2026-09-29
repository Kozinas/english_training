import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {defenceReading,defenceListening,defenceModels} from '../data/c205-defence-texts.mjs';
import {projectModel} from '../data/c205-writing-texts.mjs';
import {defenceSources,defencePatterns,projectDefenceReference} from '../data/project-defence.mjs';
import {c205Vocabulary} from '../data/lexicon-c205.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='C205'),u=subtopics.find(u=>u.id==='C205-defence');
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,unit.id,'2026-09-28T16:00:00Z');return p;}

test('C205 defence has substantial connected scope but does not publish an empty independent route',()=>{
 assert.equal(u.explanation.length,16);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>9500);assert.equal(u.examples.length,36);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,12,14,14,14,12,12,12,12,12]);assert.equal(practice.length,128);assert.equal(u.goals.length,7);
 assert.equal(topic.subtopics.length,4);assert.equal(topic.contentStatus,'expanded');assert.equal(topic.remainingScope.length,0);assert.deepEqual(topic.remainingScope,[]);
 assert.deepEqual(u.prerequisites,['C205-writing','C204-discussion','C203-connected']);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy,courseStats.subtopics,courseStats.practice,courseStats.testTasks],[34,0,6,110,9581,4720]);
});

test('C205 defence constrained grammar keys independently reject wrong inversion, forms and prepositions',()=>{
 const checks=[['forms-1','replaces','does replace'],['forms-2','whether','that'],['forms-3','is','are'],['forms-4','on','of'],['forms-5','to','at'],['forms-6','the link failed','did the link fail'],['forms-7','said','say'],['forms-8','are','is'],['test-a-1','the arrangement changed','did the arrangement change'],['test-a-2','on','of'],['test-a-3','to','for'],['test-a-4','said','say'],['test-a-5','whether','that'],['test-b-1','the glossary is updated','is the glossary updated'],['test-b-2','on','at'],['test-b-3','is','are'],['test-b-4','defined','define'],['test-b-5','to','on']];
 for(const [s,good,bad] of checks){assert(checkAnswer(good,task(s).answer),s);assert(!checkAnswer(bad,task(s).answer),s);}
 assert(task('forms-1').prompt.includes('без emphasis'));assert(task('forms-1').explanation.includes('не запрещён вообще'));
});

test('C205 defence open wording, plausible variants and audible delivery cannot be string-graded',()=>{
 for(const s of ['forms-9','forms-10','forms-12','forms-13','forms-14','questions-3','delivery-1','delivery-5','audience-3','test-a-13','test-b-13'])assert(isOpen(task(s)),s);
 assert(task('forms-13').explanation.includes('нет единственной'));assert(task('forms-14').explanation.includes('содержательно'));
 assert(task('delivery-2').explanation.includes('не обязательная'));assert(task('delivery-7').explanation.includes('UK/US'));
});

test('C205 Linden reading preserves enquiry units, cancellations and unassigned maintenance',()=>{
 assert.equal(words(defenceReading),819);assert(defenceReading.includes('fictional'));
 for(const [s,good,bad] of [['reading-1','24','19'],['reading-2','15','6'],['reading-3','8','24'],['reading-4','no','yes']]){assert(checkAnswer(good,task(s).answer));assert(!checkAnswer(bad,task(s).answer));}
 assert.equal(15+6+3,24);assert(defenceReading.includes('does not identify unique correspondents'));
 assert(defenceReading.includes('That page does not yet exist'));assert(defenceReading.includes('not to take responsibility personally'));
 assert(task('reading-6').answer.includes('Причины отмен не установлены'));assert(task('reading-10').answer.includes('не обязательно лично'));
 assert(task('reading-14').explanation.includes('не решение'));assert(task('reading-9').explanation.includes('не новая техническая проверка'));
});

test('C205 independent listening preserves correction ownership, two-part questions and limited agreement',()=>{
 assert.equal(words(defenceListening),813);assert(defenceListening.includes('One narrator'));assert(!defenceListening.includes('Linden'));
 for(const [s,good,bad] of [['listening-1','18','11'],['listening-2','11','18'],['listening-3','questions','people'],['listening-4','no','yes']]){assert(checkAnswer(good,task(s).answer));assert(!checkAnswer(bad,task(s).answer));}
 assert.equal(5+9+4,18);assert(task('listening-5').answer.includes('Он сам'));assert(task('listening-7').answer.includes('сначала finding'));
 assert(task('listening-9').answer.includes('поддержки notes'));assert(task('listening-14').answer.includes('не проверять каждый перевод'));
 assert(defenceListening.includes('He had not completed a comparison'));assert(defenceListening.includes('remained unresolved'));
});

test('C205 defence six complete authored models meet their declared product lengths',()=>{
 const ranges={talk:[750,950],public:[250,320],response:[150,200],record:[220,280],correction:[100,140],reflection:[150,190]};
 assert.deepEqual(Object.fromEntries(Object.entries(defenceModels).map(([k,v])=>[k,words(v)])),{talk:832,public:262,response:169,record:223,correction:123,reflection:170});
 for(const [k,v] of Object.entries(defenceModels)){assert(words(v)>=ranges[k][0]&&words(v)<=ranges[k][1],k);assert(practice.some(t=>t.answer===v.replace(/\n+/g,' ')),k+' absent from practice');}
 assert.equal(task('production-1').kind,'text');assert(task('production-1').prompt.includes('не доказательство устной'));
 assert(defenceModels.talk.includes('not an observed improvement'));assert(defenceModels.public.includes('nobody has been assigned'));
});

test('C205 full independent oral defence, unpredictable questions and non-specialist transfer are required',()=>{
 const full=task('defence-1'),exchange=task('defence-2');assert.equal(full.kind,'speech');assert(full.prompt.includes('СВОЙ полный проект'));assert(full.prompt.includes('три реально прочитанных'));
 assert(exchange.prompt.includes('ТРИ'));assert(exchange.prompt.includes('ДВА'));assert(exchange.explanation.includes('не читает подготовленный'));
 assert(task('defence-5').prompt.includes('весь центральный аргумент'));assert(task('defence-5').explanation.includes('фактический')||task('defence-5').explanation.includes('фиктивный'));
 assert(task('questions-9').explanation.includes('Заученный'));assert(task('questions-3').explanation.includes('не ответ партнёра'));
});

test('C205 defence reference scope is bounded and source links are real methodological resources',()=>{
 assert.equal(defencePatterns.length,30);assert(defencePatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(projectDefenceReference.practice.length,16);
 assert(projectDefenceReference.intro.some(s=>s.includes('не регламент диссертации')));assert(projectDefenceReference.intro.some(s=>s.includes('не скопированные')));
 assert.deepEqual(defenceSources.slice(0,3).map(s=>new URL(s[1]).hostname),['mitcommlab.mit.edu','mitcommlab.mit.edu','web.mit.edu']);
 assert(defenceSources.slice(3).every(s=>new URL(s[1]).hostname==='dictionary.cambridge.org'));
 assert.equal(u.banks.find(b=>b.id==='reading').passage,defenceReading);assert.equal(u.banks.find(b=>b.id==='listening').passage,defenceListening);
 for(const bankId of ['architecture','production'])assert(u.banks.find(b=>b.id===bankId).instructions.includes('«Чтение»'));
});

test('C205 defence adds 32 contextual cards without mutating any of the published 68',()=>{
 assert.equal(c205Vocabulary.length,132);assert.equal(topic.vocabulary.length,139);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,139);
 assert.equal(createHash('sha256').update(JSON.stringify(c205Vocabulary.slice(0,68))).digest('hex'),'3afba7ba0539f75a126587d4ef8bdc57017e907f9a064e11f51010288410ff49');
 const added=c205Vocabulary.slice(68,100);assert.equal(added[0].id,'C205-x-69');assert.equal(added.at(-1).id,'C205-x-100');
 for(const c of added)assert(c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 assert.equal(added.find(c=>c.word==='defensible').ipa,'/dɪˈfensəbəl/');assert(added.find(c=>c.word==='get at').note.includes('резко'));assert(added.find(c=>c.word==='qualification').note.includes('не диплом'));
});

test('C205 new exam variants use different cases, fresh real sources and all seven goals',()=>{
 const prompts=new Set(practice.map(t=>t.prompt));
 for(const e of u.tests){assert.equal(e.tasks.length,28);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,20);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,7);
  for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id),g.id);for(const t of e.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
 }
 assert(task('test-a-15').prompt.includes('не использованные'));assert(task('test-b-15').prompt.includes('не из варианта A'));assert(task('test-a-18').prompt.includes('НЕ сообщённых'));
 for(const [s,good,bad] of [['test-a-6','requests','members'],['test-a-7','no','yes'],['test-a-8','no','yes'],['test-b-6','contributors','suggestions'],['test-b-7','no','yes'],['test-b-8','no','yes']]){assert(checkAnswer(good,task(s).answer));assert(!checkAnswer(bad,task(s).answer));}
});

test('C205 unknown audio and delayed new performance remain explicit, not fabricated by text or dates',()=>{
 assert(task('listening-12').answer.includes('нужно собственное аудио'));assert(task('production-12').answer.includes('ignored learner/private/'));
 assert(task('review-10').prompt.includes('Через 7 дней'));assert(task('review-10').prompt.includes('ранее не использованных'));assert(task('review-11').prompt.includes('полную развёрнутую защиту'));
 assert(task('review-11').explanation.includes('автоматического mastery нет'));assert(task('test-a-27').explanation.includes('не новое свидетельство'));
 assert(task('test-b-24').explanation.includes('Unknown не ноль'));
});

test('C205 both existing units import at 226/472 with full writing, reviews, drafts, navigation and SRS intact',()=>{
 const s=freshState();for(const old of topic.subtopics.slice(0,2)){
  const p=complete(s,old),t=old.tests[0].tasks.find(t=>t.kind==='text');p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-28T16:05:00Z',evidence:'Synthetic import regression only, not a learner result.',heardAudio:false};
  startUnitTest(s,old.id);p.examDraft.answers[old.tests[1].tasks.find(t=>t.kind==='text').id]='Synthetic unfinished draft\nContinue later.';
 }
 const writing=s.learning['C205-writing'];writing.answers['C205-writing-production-2']='Synthetic original\n'+projectModel;writing.answers['C205-writing-production-8']='Synthetic revision\n'+projectModel;
 const route='unit/C205-writing/test';s.navigation.current=route;s.navigation.sections.course=route;s.bookmark={route,scroll:730,focus:''};
 const reviewTask=topic.subtopics[1].tests[0].tasks.filter(isOpen)[1],prefix='review:'+writing.attempts[0].id+':'+reviewTask.id+':';
 s.navigation.pages[route]={scroll:730,focus:'',fields:{[prefix+'reviewer']:'Synthetic unsubmitted feedback',[prefix+'evidence']:'First line\nSecond line'},details:[true]};
 s.navigation.pages['module/C205']={scroll:320,focus:'drill1',fields:{drill0:'on',drill1:'обосновывать\nSynthetic original answer',drill2:'to'},details:[true]};s.drafts.C205='Synthetic notes';
 s.cards['C205-x-68']=reviewCard(null,'good',Date.UTC(2026,8,28));s.cards['C205-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 const original=structuredClone(s),restored=roundTrip(s);assert.deepEqual(restored,original);assert(!restored.learning[u.id]);assert.equal(restored.schemaVersion,2);
 const p=topicWorkProgress(restored,'C205');assert.equal(p.completed,226);assert.equal(p.total,472);assert.equal(p.percent,47);
 unitState(restored,u.id).answers[task('forms-1').id]='replaces';assert.equal(topicWorkProgress(restored,'C205').completed,227);
 for(const old of topic.subtopics.slice(0,2))assert.deepEqual(restored.learning[old.id],original.learning[old.id]);assert.deepEqual(restored.cards,original.cards);assert.deepEqual(restored.navigation,original.navigation);
});

test('C205 first-unit-only exports still retain 109 steps without inventing either later unit',()=>{
 const s=freshState();complete(s,topic.subtopics[0]);const restored=roundTrip(s),p=topicWorkProgress(restored,'C205');
 assert.equal(p.completed,109);assert.equal(p.total,472);assert.equal(p.percent,23);assert(!restored.learning['C205-writing']);assert(!restored.learning[u.id]);
});

test('C205 long defence drafts persist and both exam attempts retain twenty pending answers',()=>{
 const s=freshState(),p=unitState(s,u.id),draft='Synthetic preparation, not learner audio.\n'+defenceModels.talk;assert(draft.length>5000);
 p.answers[task('production-1').id]=draft;p.examDraft.answers[task('test-a-16').id]=draft;p.examDraft.answers[task('test-a-17').id]='Synthetic transcript\nNo actual audio attached.';
 assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'C205').completed,1);let first;
 for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-28T16:10:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));
  assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,20);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'C205').completed,2);
  if(e.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
 }
 assert.deepEqual(roundTrip(s),s);
});

test('C205 speech reviews require actual heard-audio acknowledgement and never arise from model matching',()=>{
 const s=freshState(),p=complete(s,u),t=u.tests[0].tasks.find(t=>t.kind==='speech');
 p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-28T16:20:00Z',evidence:'Synthetic validation fixture, not actual audio evidence.',heardAudio:false};
 assert.throws(()=>roundTrip(s),/прослушанное аудио/);p.attempts[0].reviews[t.id].heardAudio=true;assert.deepEqual(roundTrip(s),s);
 assert.equal(scoreUnitTest(u,p.attempts[0]).pending,19);assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
});

test('C205 472 filled steps remain awaiting review regardless of session duration',()=>{
 const s=freshState();for(const unit of topic.subtopics)complete(s,unit);const p=topicWorkProgress(s,'C205');assert.equal(p.completed,472);assert.equal(p.total,472);assert.equal(p.percent,100);
 assert.equal(topic.contentStatus,'expanded');for(const unit of topic.subtopics)assert.equal(scoreUnitTest(unit,s.learning[unit.id].attempts[0]).status,'awaiting-review');
 s.placement={assessmentVersion,date:'2026-09-28T16:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.answer]))};assert(buildPlan(s).items.some(m=>m.id==='C205'&&m.contentStatus==='expanded'));
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C205'),p);assert.deepEqual(roundTrip(s),s);
});

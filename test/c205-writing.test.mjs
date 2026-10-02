import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {projectBrief,projectModel,projectDocuments,writingListening,writingModels} from '../data/c205-writing-texts.mjs';
import {writingPatterns,projectWritingReference,writingSources} from '../data/project-writing.mjs';
import {c205Vocabulary} from '../data/lexicon-c205.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='C205'),u=subtopics.find(u=>u.id==='C205-writing');
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s);
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,unit.id,'2026-09-28T13:00:00Z');return p;}

test('C205 writing retains its full natural-sized scope within the expanded capstone',()=>{
 assert.equal(u.explanation.length,14);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>8500);assert.equal(u.examples.length,32);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,14,14,12,12,12,12,12]);assert.equal(practice.length,116);
 assert(u.prerequisites.includes('C205-inquiry'));assert.equal(topic.contentStatus,'expanded');assert.equal(topic.remainingScope.length,0);assert.deepEqual(topic.remainingScope,[]);
 assert.equal(topic.subtopics.length,4);assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy],[38,1,1]);
});

test('C205 writing independent keys distinguish clauses, noun phrases, mandatives and agreement',()=>{
 const checks=[['forms-1','Although','Despite'],['forms-2','Despite','Although'],['forms-3','recording','record'],['forms-4','be','is'],['forms-5','are','is'],['forms-6','from','for'],['forms-7','on','of'],['forms-8','for','to'],['test-a-1','Although','Despite'],['test-a-2','Despite','Although'],['test-a-3','reconsidering','reconsider'],['test-a-4','be','is'],['test-a-5','are','is'],['test-b-1','Despite','Although'],['test-b-2','Although','Despite'],['test-b-3','making','make'],['test-b-4','be','is'],['test-b-5','are','is']];
 for(const [suffix,good,bad] of checks){assert.equal(checkAnswer(good,task(suffix).answer),true,suffix);assert.equal(checkAnswer(bad,task(suffix).answer),false,suffix);}
});

test('C205 free editing, punctuation and inferential claims stay manual rather than string graded',()=>{
 for(const suffix of ['forms-9','forms-10','forms-12','synthesis-5','revision-4','revision-5','revision-8','test-a-13','test-b-13'])assert(isOpen(task(suffix)),suffix);
 assert(task('forms-10').explanation.includes('вручную'));assert(task('forms-14').explanation.includes('не запрет should'));
 assert(task('revision-7').explanation.includes('Не выдумывать'));
});

test('C205 full project body itself meets 1000–1500 words and is not inflated by bibliography',()=>{
 const n=projectModel.trim().split(/\s+/).length;assert.equal(n,1079);assert(n>=1000&&n<=1500);
 assert.equal(writingModels.project,projectModel);assert.equal(task('production-1').answer,projectModel.replace(/\n+/g,' '));
 for(const ref of ['[1]','[2]','[3]'])assert(projectModel.includes(ref));assert(!projectModel.includes('https://'));
 assert(projectModel.includes('not a claim that the procedure has already improved'));assert(projectModel.includes('It does not change any repository setting'));
});

test('C205 three real source documents have traceable URLs and no fictional empirical attribution',()=>{
 assert.equal(projectDocuments.length,3);assert.equal(new Set(projectDocuments.map(s=>s[1])).size,3);
 assert.deepEqual(projectDocuments.map(s=>new URL(s[1]).hostname),['google.github.io','google.github.io','docs.github.com']);
 assert(projectModel.includes('same guidance collection'));assert(projectModel.includes('not measurements of Kestrel'));
 assert(projectBrief.includes('fictional'));assert(projectBrief.includes('No publication date is asserted'));
 assert(task('synthesis-6').answer.includes('не факт'));assert(task('reading-13').explanation.includes('Не выдумывать'));
});

test('C205 reading makes full text available and exposes real sources only as manual links',()=>{
 const b=u.banks.find(b=>b.id==='reading');assert.equal(b.kind,'reading');assert(b.passage.includes(projectBrief));assert(b.passage.includes(projectModel));
 assert(b.passage.split(/\s+/).length>=1600);assert.deepEqual(b.resources,projectDocuments);assert(b.instructions.includes('интернет'));assert(b.instructions.includes('вымышленный'));
 for(const [,url] of b.resources)assert(writingSources.some(s=>s[1]===url));
});

test('C205 six complete model answers meet their individual stated ranges',()=>{
 const ranges={project:[1000,1500],summary:[220,280],alternative:[180,220],response:[100,140],correction:[100,140],reflection:[100,140]};
 assert.equal(Object.keys(writingModels).length,6);
 for(const [key,text] of Object.entries(writingModels)){const n=text.trim().split(/\s+/).length,[a,b]=ranges[key];assert(n>=a&&n<=b,key+': '+n);assert(practice.some(t=>t.answer===text.replace(/\n+/g,' ')),key+' missing from practice');}
});

test('C205 fictional local register keeps corrected timing, labels and outcomes separate',()=>{
 for(const [s,good,bad] of [['reading-1','32','20'],['reading-2','26','18'],['reading-3','5','7'],['reading-4','no','yes']]){assert(checkAnswer(good,task(s).answer));assert(!checkAnswer(bad,task(s).answer));}
 assert(projectBrief.includes('first human response'));assert(projectBrief.includes('six of those came from the same contributor'));
 assert(projectModel.includes('not a measure of completed review'));assert(task('reading-5').answer.includes('minimum count возможен'));
 assert(task('revision-1').answer.includes('do not by themselves establish'));
});

test('C205 separate listening distinguishes accounts, residents, memory gaps and unfinished revision',()=>{
 assert(writingListening.split(/\s+/).length>=600);assert(writingListening.includes('one narrator'));assert(!writingListening.includes('Kestrel'));
 for(const [s,good,bad] of [['listening-1','12','8'],['listening-2','8','12'],['listening-3','no','yes'],['listening-4','no','yes']]){assert(checkAnswer(good,task(s).answer));assert(!checkAnswer(bad,task(s).answer));}
 assert(task('listening-6').answer.includes('не значит отрицает'));assert(task('listening-7').answer.includes('недатированный'));
 assert(task('listening-9').answer.includes('силу claim'));assert(task('listening-10').answer.includes('не историю'));
 assert(task('listening-11').answer.includes('ещё требуют работы'));
});

test('C205 practice requires independent full original and revised projects, not only an outline',()=>{
 for(const s of ['production-2','production-8']){assert(task(s).prompt.includes('1000–1500'));assert(isOpen(task(s)));}
 assert(task('production-2').prompt.includes('не Kestrel'));assert(task('production-8').prompt.includes('ПОЛНУЮ'));
 assert(task('production-12').explanation.includes('ignored learner/private/'));
 assert(task('review-11').prompt.includes('Через 7 дней'));assert(task('review-11').explanation.includes('не замена'));
});

test('C205 new control variants cover all goals with fresh projects and twenty ungraded open responses',()=>{
 const prompts=new Set(practice.map(t=>t.prompt));
 for(const e of u.tests){assert.equal(e.tasks.length,28);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,20);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,4);
  for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
  assert(e.tasks[17].prompt.includes('1000–1500'));assert(e.tasks[18].prompt.includes('1000–1500'));
 }
 assert(task('test-a-17').prompt.includes('не использованные'));assert(task('test-b-17').prompt.includes('не из варианта A'));
 for(const [s,good,bad] of [['test-a-6','annotations','volunteers'],['test-a-7','no','yes'],['test-a-8','no','yes'],['test-b-6','contributors','edits'],['test-b-7','no','yes'],['test-b-8','no','yes']]){assert(checkAnswer(good,task(s).answer));assert(!checkAnswer(bad,task(s).answer));}
});

test('C205 editorial interaction requires an actual partner and is not the complete defence',()=>{
 assert.equal(u.banks.find(b=>b.id==='interaction').tasks.filter(t=>t.kind==='speech').length,12);
 assert(task('interaction-2').explanation.includes('Нельзя заранее придумать'));assert(task('interaction-9').explanation.includes('ASR'));
 assert(task('interaction-12').explanation.includes('не завершённая большая защита'));assert(task('test-b-28').explanation.includes('не автоматически'));
});

test('C205 reference has bounded scope and 32 new cards preserve all published 36 exactly',()=>{
 assert.equal(writingPatterns.length,30);assert(writingPatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(projectWritingReference.practice.length,16);
 assert(projectWritingReference.intro.some(s=>s.includes('не универсальный стандарт')));
 assert.equal(c205Vocabulary.length,132);assert.equal(topic.vocabulary.length,139);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,139);
 assert.equal(createHash('sha256').update(JSON.stringify(c205Vocabulary.slice(0,36))).digest('hex'),'086bbba3d81203eb4ab4949ee85f2ea701a6b26d2f920897db044933098c11f6');
 const added=c205Vocabulary.slice(36,68);assert.equal(added[0].id,'C205-x-37');assert.equal(added.at(-1).id,'C205-x-68');
 for(const c of added)assert(c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 assert.equal(added.find(c=>c.word==='abstract').ipa,'/ˈæbstrækt/');assert.equal(added.find(c=>c.word==='substantive').ipa,'/səbˈstæntɪv/');
});

test('C205 existing inquiry learning, reviews, drafts, navigation and SRS remain at 109/472',()=>{
 const s=freshState(),old=topic.subtopics[0],p=complete(s,old),t=old.tests[0].tasks.find(t=>t.kind==='text');
 p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-28T12:10:00Z',evidence:'Synthetic regression evidence only.',heardAudio:false};
 startUnitTest(s,old.id);p.examDraft.answers[old.tests[1].tasks.find(t=>t.kind==='text').id]='Synthetic unfinished answer\nContinue later.';
 const route='unit/'+old.id+'/test',prefix='review:'+p.attempts[0].id+':'+old.tests[0].tasks.filter(isOpen)[1].id+':';
 s.navigation.pages[route]={scroll:610,focus:'',fields:{[prefix+'reviewer']:'Synthetic reviewer draft',[prefix+'score']:'2',[prefix+'evidence']:'Unsubmitted review\nSecond line'},details:[]};
 s.cards['C205-x-36']=reviewCard(null,'good',Date.UTC(2026,8,28));s.cards['C205-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.moduleProgress.C205={selfChecked:true,date:'2026-09-22'};s.drafts.C205='Synthetic old notes.';
 s.bookmark={route,scroll:610,focus:''};s.navigation.current=route;s.navigation.sections.course=route;
 s.navigation.pages['module/C205']={scroll:390,focus:'drill1',fields:{drill0:'on',drill1:'обосновывать\nOriginal synthetic answer',drill2:'to'},details:[true]};
 const before=structuredClone(s),restored=roundTrip(s);assert.deepEqual(restored,before);assert.equal(restored.schemaVersion,2);assert(!restored.learning[u.id]);
 const work=topicWorkProgress(restored,'C205');assert.equal(work.completed,109);assert.equal(work.total,472);assert.equal(work.percent,23);
 unitState(restored,u.id).answers[task('forms-1').id]='Although';assert.equal(topicWorkProgress(restored,'C205').completed,110);
 assert.deepEqual(restored.learning[old.id],before.learning[old.id]);assert.deepEqual(restored.cards,before.cards);assert.deepEqual(restored.navigation,before.navigation);
});

test('C205 full-length multiline writing and exam drafts round-trip without truncation or auto-grading',()=>{
 const s=freshState(),p=unitState(s,u.id),full='Synthetic storage fixture, not learner work.\n'+projectModel;
 assert(full.length>6000&&full.length<20000);
 p.answers[task('production-2').id]=full;p.answers[task('production-8').id]=full+'\nSynthetic revised version marker.';
 p.examDraft.answers[task('test-a-18').id]=full;p.examDraft.answers[task('test-a-19').id]=full+'\nSeparate control revision.';
 assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'C205').completed,2);
 let first;for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));p.examDraft.answers[e.tasks[17].id]=full;submitUnitTest(s,u.id,'2026-09-28T13:00:00Z');
  const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,20);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'C205').completed,3);
  if(e.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
 }
 assert.deepEqual(roundTrip(s),s);assert.equal(p.attempts[0].answers[task('test-a-18').id],full);
});

test('C205 full published work is 472 steps, expanded but not mastery or a timed shortcut',()=>{
 const s=freshState();for(const unit of topic.subtopics)complete(s,unit);const work=topicWorkProgress(s,'C205');
 assert.equal(work.completed,472);assert.equal(work.total,472);assert.equal(work.percent,100);assert.equal(topic.contentStatus,'expanded');
 for(const unit of topic.subtopics)assert.equal(scoreUnitTest(unit,s.learning[unit.id].attempts[0]).status,'awaiting-review');
 s.placement={assessmentVersion,date:'2026-09-28T12:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.answer]))};
 assert(buildPlan(s).items.some(m=>m.id==='C205'&&m.contentStatus==='expanded'));
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C205'),work);assert.deepEqual(roundTrip(s),s);
});

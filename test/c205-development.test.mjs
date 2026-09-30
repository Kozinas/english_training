import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats,topicDevelopment} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {developmentReading,developmentListening,developmentModels} from '../data/c205-development-texts.mjs';
import {defenceModels} from '../data/c205-defence-texts.mjs';
import {developmentPatterns,developmentSources,projectDevelopmentReference} from '../data/project-development.mjs';
import {c205Vocabulary} from '../data/lexicon-c205.mjs';
import {freshState,validateState,unitState,checkAnswer,isOpen,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='C205'),u=subtopics.find(u=>u.id==='C205-development');
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.trim().split(/\s+/).length;
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,unit.id,'2026-09-29T12:00:00Z');return p;}

test('C205 development completes publication scope with substantial connected content, not learner mastery',()=>{
 assert.equal(u.explanation.length,15);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>9000);assert.equal(u.examples.length,34);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,12,14,14,12,12,12,12]);assert.equal(practice.length,116);assert.equal(u.goals.length,7);
 assert.equal(topic.subtopics.length,4);assert.equal(topic.contentStatus,'expanded');assert.deepEqual(topic.remainingScope,[]);assert.equal(topicDevelopment.C205,undefined);
 assert.deepEqual(u.prerequisites,['C205-defence','C205-writing']);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy,courseStats.subtopics,courseStats.practice,courseStats.testTasks],[37,1,2,121,10895,5312]);
});
test('C205 development constrained keys independently reject incorrect management and inversion',()=>{
 const cases=[['forms-1','in','to'],['forms-2','to','in'],['forms-3','practising','practise'],['forms-4','on','of'],['forms-5','to','for'],['forms-6','from','to'],['forms-7','on','of'],['forms-8','this matters','does this matter'],['review-1','discussing','discuss'],['test-a-1','in','to'],['test-a-2','to','for'],['test-a-3','retaining','retain'],['test-a-4','the evidence is limited','is the evidence limited'],['test-b-1','from','to'],['test-b-2','to','in'],['test-b-3','on','of'],['test-b-4','the reviewer checked','did the reviewer check']];
 for(const [s,right,wrong] of cases){assert(!isOpen(task(s)));assert(checkAnswer(right,task(s).answer),s);assert(!checkAnswer(wrong,task(s).answer),s);}
 for(const s of ['forms-9','forms-10','forms-11','forms-12','forms-13','test-a-10','test-b-10'])assert(isOpen(task(s)),s);
});
test('C205 Noor reading preserves dates, repeated questions, assistance and unknown audio',()=>{
 assert.equal(words(developmentReading),788);assert(developmentReading.includes('fictional'));
 for(const [s,right,wrong] of [['reading-1','10','12'],['reading-2','8','9'],['reading-3','repeated','new'],['reading-4','no','yes']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(developmentReading.includes('On 3 September'));assert(developmentReading.includes('On 12 September'));assert(developmentReading.includes('sentence-level suggestions'));
 assert(developmentReading.includes('has not checked whether the two interviews were equally demanding'));
 assert(task('reading-8').answer.includes('6/10'));assert(task('reading-8').answer.includes('9/10'));assert(task('reading-8').answer.includes('8/10'));
 assert(task('reading-11').answer.includes('Один новый письменный'));assert(task('reading-13').answer.includes('proposal'));
});
test('C205 Eli audio is a different case and retains corrected counts, access and limited promises',()=>{
 assert.equal(words(developmentListening),710);assert(developmentListening.includes('One narrator'));assert(!developmentListening.includes('Noor'));
 for(const [s,right,wrong] of [['listening-1','12','20'],['listening-2','20','12'],['listening-3','5','8'],['listening-4','no','yes']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 assert(developmentListening.includes('had not supplied replacement sentences'));assert(developmentListening.includes('has not heard the recording'));
 assert(task('listening-6').answer.includes('Confirmation'));assert(task('listening-6').answer.includes('before the relevant session'));
 assert(task('listening-8').answer.includes('oral reviewer unresolved'));assert(task('listening-12').answer.includes('not completed'));
});
test('C205 six complete development models meet product ranges and are actually used in practice',()=>{
 const ranges={route:[450,550],selection:[220,280],feedback:[150,190],revision:[220,280],restart:[100,140],reflection:[150,190]};
 assert.deepEqual(Object.fromEntries(Object.entries(developmentModels).map(([k,v])=>[k,words(v)])),{route:463,selection:241,feedback:165,revision:239,restart:121,reflection:170});
 for(const [k,v] of Object.entries(developmentModels)){assert(words(v)>=ranges[k][0]&&words(v)<=ranges[k][1],k);assert(practice.some(t=>t.answer===v.replace(/\n+/g,' ')),k);}
 assert(developmentModels.route.includes('at least seven days'));assert(developmentModels.selection.includes('does not claim that I have already inspected'));
 assert(developmentModels.revision.includes('Jo has not accepted'));assert(developmentModels.restart.includes('does not make the missing parts unnecessary'));
});
test('C205 development uses accessible source entry points without pretending a catalogue is a sampled item',()=>{
 assert.equal(developmentPatterns.length,30);assert(developmentPatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(projectDevelopmentReference.practice.length,16);
 assert.deepEqual(developmentSources.map(s=>new URL(s[1]).hostname),['www.coe.int','learnenglish.britishcouncil.org','learnenglish.britishcouncil.org','www.cambridgeenglish.org']);
 const bank=u.banks.find(b=>b.id==='materials');assert.deepEqual(bank.resources,developmentSources.slice(1));assert(bank.instructions.includes('интернет'));assert(bank.instructions.includes('не уже пройденные'));
 assert(task('materials-2').prompt.includes('реальный фрагмент'));assert(task('materials-2').explanation.includes('Не угадывать'));assert(task('materials-8').explanation.includes('не ноль'));assert(task('materials-9').explanation.includes('Не выдумывать unit/page'));
});
test('C205 development retains all first 100 cards byte for byte and adds 32 distinct contextual cards',()=>{
 assert.equal(c205Vocabulary.length,132);assert.equal(topic.vocabulary.length,139);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,139);
 assert.equal(createHash('sha256').update(JSON.stringify(c205Vocabulary.slice(0,100))).digest('hex'),'5123ebab4c1ff7f39d21e147fdbb0318fa4e916ba312f3d16cc16643b73053ed');
 const added=c205Vocabulary.slice(100);assert.equal(added[0].id,'C205-x-101');assert.equal(added.at(-1).id,'C205-x-132');assert(added.some(c=>c.kind==='фразовый глагол'));assert(added.some(c=>c.kind==='выражение'));
 for(const c of added)assert(c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 assert.equal(added.find(c=>c.word==='resume').ipa,'/rɪˈzjuːm/');assert(added.find(c=>c.word==='resume').note.includes('не существительное'));
});
test('C205 development tests use new cases, all goals and full independent products with four oral tasks each',()=>{
 const prompts=new Set(practice.map(t=>t.prompt));for(const e of u.tests){assert.equal(e.tasks.length,28);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,20);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,4);
  for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const t of e.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
 }
 for(const [s,right,wrong] of [['test-a-5','10','16'],['test-a-6','no','yes'],['test-a-7','unknown','zero'],['test-a-8','no','yes'],['test-b-5','13','19'],['test-b-6','yes','no'],['test-b-7','no','yes'],['test-b-8','no','yes']]){assert(checkAnswer(right,task(s).answer));assert(!checkAnswer(wrong,task(s).answer));}
 for(const variant of ['a','b'])for(const n of [14,19])assert(task(`test-${variant}-${n}`).prompt.includes('450–650'));
 assert(task('test-a-12').prompt.includes('не использованных'));assert(task('test-b-12').prompt.includes('не из варианта A/практики'));assert(task('test-a-22').explanation.includes('не сочинять таймкод'));
});
test('C205 planning preserves actual work, pending checks and real consent rather than simulated results',()=>{
 assert(task('production-2').prompt.includes('реальным работам'));assert(task('production-8').prompt.includes('ПОЛНУЮ'));assert(task('production-8').explanation.includes('до отзыва pending'));
 assert(task('production-12').answer.includes('ignored learner/private/'));assert(task('interaction-10').answer.includes('отсутствие записи'));
 assert(task('review-8').prompt.includes('Через 7 дней'));assert(task('review-8').explanation.includes('Не создавать будущее'));
 assert(task('review-9').prompt.includes('на реальном аудио'));assert(task('planning-6').answer.includes('missing sections remain required'));assert(task('planning-9').answer.includes('interaction will remain pending'));
});
test('C205 three-unit exports preserve 355/472 with reviews, original speech preparation, drafts, archive and SRS',()=>{
 const s=freshState();for(const old of topic.subtopics.slice(0,3)){const p=complete(s,old),t=old.tests[0].tasks.find(t=>t.kind==='text');p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T12:10:00Z',evidence:'Synthetic backwards compatibility fixture, not learner feedback.',heardAudio:false};startUnitTest(s,old.id);p.examDraft.answers[old.tests[1].tasks.find(t=>t.kind==='text').id]='Synthetic next attempt\nContinue later.';}
 s.learning['C205-defence'].answers['C205-defence-production-1']='Synthetic speech preparation\n'+defenceModels.talk;
 const old=topic.subtopics[2],p=s.learning[old.id],t=old.tests[0].tasks.filter(isOpen)[1],prefix='review:'+p.attempts[0].id+':'+t.id+':',route='unit/C205-defence/test';
 s.navigation.current=route;s.navigation.sections.course=route;s.navigation.pages[route]={scroll:740,focus:'',fields:{[prefix+'reviewer']:'Synthetic draft reviewer',[prefix+'evidence']:'Unsubmitted\nfeedback'},details:[true]};s.bookmark={route,scroll:740,focus:''};
 s.navigation.pages['module/C205']={scroll:120,focus:'drill1',fields:{drill0:'on',drill1:'обосновывать\nSynthetic old answer',drill2:'to'},details:[true]};s.drafts.C205='Synthetic notes';s.cards['C205-x-100']=reviewCard(null,'good',Date.UTC(2026,8,29));
 const original=structuredClone(s),restored=roundTrip(s);assert.deepEqual(restored,original);assert(!restored.learning[u.id]);assert.equal(restored.schemaVersion,2);
 const progress=topicWorkProgress(restored,'C205');assert.equal(progress.completed,355);assert.equal(progress.total,472);assert.equal(progress.percent,75);
 unitState(restored,u.id).answers[task('forms-1').id]='in';assert.equal(topicWorkProgress(restored,'C205').completed,356);
 for(const old of topic.subtopics.slice(0,3))assert.deepEqual(restored.learning[old.id],original.learning[old.id]);assert.deepEqual(restored.cards,original.cards);assert.deepEqual(restored.navigation,original.navigation);
});
test('C205 older one- and two-unit exports retain only their own answers',()=>{
 for(const [count,done,percent] of [[1,109,23],[2,226,47]]){const s=freshState();for(const old of topic.subtopics.slice(0,count))complete(s,old);const restored=roundTrip(s),p=topicWorkProgress(restored,'C205');assert.equal(p.completed,done);assert.equal(p.total,472);assert.equal(p.percent,percent);for(const later of topic.subtopics.slice(count))assert(!restored.learning[later.id]);}
});
test('C205 full original and revised routes, multiline test drafts and immutable A/B remain pending review',()=>{
 const s=freshState(),p=unitState(s,u.id),full='Synthetic route, not a learner plan.\n'+developmentModels.route;
 p.answers[task('production-2').id]=full;p.answers[task('production-8').id]='Synthetic full revision\n'+developmentModels.route;p.examDraft.answers[task('test-a-14').id]=full;
 assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'C205').completed,2);let first;
 for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-29T12:20:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,8);assert.equal(score.total,8);assert.equal(score.pending,20);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'C205').completed,3);if(e.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
 assert.deepEqual(roundTrip(s),s);
});
test('C205 speech reviews still require heardAudio and cannot be manufactured by matching transcript',()=>{
 const s=freshState(),p=complete(s,u),t=u.tests[0].tasks.find(t=>t.kind==='speech');p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-29T12:30:00Z',evidence:'Synthetic audio acknowledgement validation, not real review.',heardAudio:false};
 assert.throws(()=>roundTrip(s),/прослушанное аудио/);p.attempts[0].reviews[t.id].heardAudio=true;assert.deepEqual(roundTrip(s),s);assert.equal(scoreUnitTest(u,p.attempts[0]).pending,19);
});
test('C205 expanded publication and 472 filled steps do not certify mastery or shorten work for session timing',()=>{
 const s=freshState();for(const unit of topic.subtopics)complete(s,unit);const p=topicWorkProgress(s,'C205');assert.equal(p.completed,472);assert.equal(p.total,472);assert.equal(p.percent,100);
 for(const unit of topic.subtopics)assert.equal(scoreUnitTest(unit,s.learning[unit.id].attempts[0]).status,'awaiting-review');
 s.placement={assessmentVersion,date:'2026-09-29T12:40:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.answer]))};assert(buildPlan(s).items.some(m=>m.id==='C205'&&m.contentStatus==='expanded'));
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C205'),p);assert.deepEqual(roundTrip(s),s);
});

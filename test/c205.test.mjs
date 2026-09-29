import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary,courseStats,topicDevelopment} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {inquiryModels,inquiryReading,inquiryListening} from '../data/c205-inquiry-texts.mjs';
import {inquiryPatterns,projectInquiryReference,inquirySources} from '../data/project-inquiry.mjs';
import {c205Vocabulary} from '../data/lexicon-c205.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const module=modules.find(m=>m.id==='C205'),u=subtopics.find(u=>u.id==='C205-inquiry');
const practice=u.banks.flatMap(b=>b.tasks),all=[...practice,...u.tests.flatMap(e=>e.tasks)];
const task=suffix=>all.find(t=>t.id===u.id+'-'+suffix);
const roundTrip=s=>validateState(JSON.parse(JSON.stringify(s)));

test('C205 inquiry is a substantial first unit, not a completed capstone',()=>{
 assert.equal(module.contentStatus,'expanded');assert.equal(module.subtopics.length,4);assert.equal(module.remainingScope.length,0);
 assert.equal(topicDevelopment.C205,undefined);
 assert.deepEqual(module.remainingScope,[]);
 assert.equal(u.explanation.length,13);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>7500);assert.equal(u.examples.length,32);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,14,16,14,12,12,12]);assert.equal(practice.length,108);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy],[35,1,4]);
});

test('C205 constrained grammar keys accept the intended form and reject its distractor',()=>{
 for(const [suffix,good,bad] of [['forms-1','establishes','establish'],['forms-2','whether','if'],['forms-3','on','of'],['forms-4','to','of'],['forms-5','evidence','evidences'],['forms-6','on','to'],['forms-7','describes','describe'],['forms-8','supports','do support'],['test-a-1','contains','contain'],['test-b-1','differ','differs'],['test-b-5','research','researches'],['test-a-2','whether','if'],['test-a-3','on','in'],['test-a-4','on','for'],['test-a-5','evidence','evidences'],['test-a-6','requests','accounts'],['test-a-7','1','3'],['test-a-8','no','yes'],['test-b-2','whether','if'],['test-b-3','to','of'],['test-b-4','on','of'],['test-b-6','borrowers','returns'],['test-b-7','1','3'],['test-b-8','no','yes'],['reading-1','0.3','0.4'],['reading-2','18','14'],['reading-3','9','12'],['reading-4','1','3'],['listening-1','42','30'],['listening-2','12','30'],['listening-3','bookings','users'],['listening-4','no','yes']]){
  const t=task(suffix);assert(t,suffix);assert.equal(checkAnswer(good,t.answer),true,suffix);assert.equal(checkAnswer(bad,t.answer),false,suffix);
 }
 for(const t of all.filter(t=>!isOpen(t)))assert(checkAnswer(t.answer,t.answer),t.id);
});

test('C205 questions, criteria, provenance and explanations remain manual semantic tasks',()=>{
 for(const suffix of ['questions-2','questions-6','questions-12','sources-2','sources-3','sources-7','reading-5','reading-6','reading-12','test-a-9','test-b-12'])assert(isOpen(task(suffix)),suffix);
 assert(task('forms-10').explanation.includes('косвенном вопросе'));
 assert(task('questions-5').explanation.includes('необходимым этапом'));
 assert(task('sources-2').explanation.includes('не объявлять')||task('sources-2').explanation.includes('Не объявлять'));
});

test('C205 reading keeps population, denominator, assistance, dates and versions distinct',()=>{
 assert.equal(task('reading-1').answer,'0.3');assert.equal(task('reading-2').answer,'18');assert.equal(task('reading-3').answer,'9');assert.equal(task('reading-4').answer,'1');
 assert(inquiryReading.includes('3–7 June'));assert(inquiryReading.includes('14 June'));assert(inquiryReading.includes('version 0.4'));
 assert(inquiryReading.includes('not assigned at random'));assert(inquiryReading.includes('did not record assistance from companions'));
 assert(task('reading-6').answer.includes('77.8%'));assert(task('reading-6').answer.includes('2.8'));
 assert(task('reading-8').answer.includes('не спрашивали'));assert(task('reading-11').answer.includes('не проводила'));
 assert(task('reading-10').answer.includes('staff time'));assert(task('reading-10').explanation.includes('нулевыми'));
});

test('C205 listening is separate fictional material, not a recording of several students',()=>{
 assert.notEqual(inquiryReading,inquiryListening);assert(inquiryReading.split(/\s+/).length>=800);assert(inquiryListening.split(/\s+/).length>=600);
 assert(inquiryReading.includes('fictional'));assert(inquiryListening.includes('one narrator'));
 assert.equal(task('listening-1').answer,'42');assert.equal(task('listening-2').answer,'12');assert.equal(task('listening-3').answer,'bookings');
 assert.equal(task('listening-4').answer,'no');assert(task('listening-6').answer.includes('классифицировались'));
 assert(task('listening-12').answer.includes('не валидировать'));assert(task('listening-13').answer.includes('Clearer plan'));
});

test('C205 six full writing models satisfy their declared lengths and keep fictional attribution',()=>{
 const ranges={proposal:[450,550],synthesis:[220,280],annotation:[100,140],revision:[100,140],enquiry:[100,140],reflection:[100,140]};
 assert.equal(Object.keys(inquiryModels).length,6);
 for(const [name,text] of Object.entries(inquiryModels)){
  const n=text.trim().split(/\s+/).length,[min,max]=ranges[name];assert(n>=min&&n<=max,name+': '+n);
  assert(practice.some(t=>t.answer===text.replace(/\n+/g,' ')),name+' not published');
 }
 assert(inquiryModels.proposal.includes('not three real publications'));
 assert(inquiryModels.synthesis.includes('my interpretation'));
});

test('C205 real-source work requires actual access, traceable claims and fresh control material',()=>{
 assert(task('sources-8').prompt.includes('три реально открытых'));assert(task('sources-8').explanation.includes('фактическое чтение'));
 assert(task('sources-10').explanation.includes('не автоматически'));
 assert(task('test-a-20').prompt.includes('Музейные документы не подходят'));
 assert(task('test-b-20').explanation.includes('Не повторять документы варианта A'));
 assert(task('review-11').prompt.includes('Через 7 дней'));assert(task('review-11').explanation.includes('фактические'));
});

test('C205 two new exam variants test all five goals without training-prompt reuse',()=>{
 const prompts=new Set(practice.map(t=>t.prompt));assert.equal(u.tests.length,2);
 for(const e of u.tests){
  assert.equal(e.tasks.length,26);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(isOpen).length,18);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,4);
  for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id),g.id);
  for(const t of e.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
  assert(e.tasks.some(t=>/300–400 слов/.test(t.prompt)));assert(e.tasks.some(t=>/100–140 слов/.test(t.prompt)));
 }
});

test('C205 oral work requires response to a partner and does not certify audio from text',()=>{
 assert.equal(u.banks.find(b=>b.id==='interaction').tasks.filter(t=>t.kind==='speech').length,12);
 assert(task('interaction-1').explanation.includes('Нельзя заранее выдумать'));
 assert(task('interaction-10').explanation.includes('без реального аудио'));
 assert(task('interaction-12').explanation.includes('unknown'));
 assert(u.explanation.some(e=>e.text.includes('ASR не является фонетической оценкой')));
});

test('C205 reference is bounded and its 28 models and 16 tasks have checked source links',()=>{
 assert.equal(inquiryPatterns.length,28);assert(inquiryPatterns.every(r=>r.length===4&&r.every(Boolean)));
 assert.equal(projectInquiryReference.practice.length,16);assert.equal(projectInquiryReference.id,'project-inquiry');
 assert(projectInquiryReference.intro.some(s=>s.includes('не полный стандарт')));
 for(const [,url] of inquirySources)assert(['writingcenter.fas.harvard.edu','owl.purdue.edu','dictionary.cambridge.org','www.merriam-webster.com'].includes(new URL(url).hostname));
});

test('C205 retains the first 36 new contextual cards while adding the writing vocabulary',()=>{
 assert.equal(c205Vocabulary.find(c=>c.word==='subject to revision').ipa,'/ˈsʌbdʒekt tə rɪˈvɪʒən/');
 assert.equal(c205Vocabulary.length,132);const cards=vocabulary.filter(c=>c.module==='C205');assert.equal(cards.length,139);
 assert.equal(new Set(cards.map(c=>c.word)).size,139);
 assert.deepEqual(cards.filter(c=>!/^C205-x-\d+$/.test(c.id)).map(c=>[c.id,c.word]),[
 ['C205-v1','warrant'],['C205-v2','viable'],['C205-v3','limitation'],['C205-v4','defence'],['C205-v5','revise'],['C205-v6','transfer'],['C205-x-stand-up-to','stand up to scrutiny']]);
 for(const c of c205Vocabulary)assert(c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['draw on','in the light of','on the strength of','subject to revision'])assert(cards.some(c=>c.word===word));
});

test('C205 old drill questions, multiline answers, notes, navigation and SRS survive without new credit',()=>{
 const s=freshState();s.moduleProgress.C205={selfChecked:true,date:'2026-09-22'};s.drafts.C205='Synthetic original notes.';
 for(const c of vocabulary.filter(c=>c.module==='C205'&&!/^C205-x-\d+$/.test(c.id)))s.cards[c.id]=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C205';s.navigation.sections.course='module/C205';
 s.navigation.pages['module/C205']={scroll:390,focus:'drill1',fields:{drill0:'on',drill1:'обосновывать\nSynthetic original answer',drill2:'to'},details:[true]};
 assert.deepEqual(roundTrip(s),s);assert.equal(s.schemaVersion,2);
 assert.deepEqual(module.drills.map(d=>d[0]),['conditional ___ the assumptions','warrant = обосновывать или гарантировать всегда?','extend a conclusion ___ another setting']);
 assert.equal(topicWorkProgress(s,'C205').completed,0);assert.equal(topicWorkProgress(s,'C205').total,472);
});

test('C205 v1 migration retains old self-check, cards and drafts but creates no new answers',()=>{
 const old=freshState();old.schemaVersion=1;delete old.learning;delete old.navigation;delete old.bookmark;
 old.moduleProgress.C205={selfChecked:true,date:'2026-09-22'};old.drafts.C205='Synthetic old draft.';old.cards['C205-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 const restored=roundTrip(old);assert.equal(restored.schemaVersion,2);assert.deepEqual(restored.cards,old.cards);assert.deepEqual(restored.moduleProgress,old.moduleProgress);assert.deepEqual(restored.drafts,old.drafts);
 assert.equal(restored.learning[u.id],undefined);assert.equal(topicWorkProgress(restored,'C205').completed,0);
});

test('C205 complete variants preserve history and leave all open responses awaiting review',()=>{
 const s=freshState(),p=unitState(s,u.id);p.examDraft.answers[task('test-a-16').id]='Synthetic paragraph.\nContinue later.';
 s.bookmark={route:'unit/C205-inquiry/test',scroll:650,focus:'answer-'+task('test-a-16').id};s.navigation.sections.course=s.bookmark.route;
 assert.deepEqual(roundTrip(s),s);assert.equal(topicWorkProgress(s,'C205').completed,0);let first;
 for(const e of u.tests){
  p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-28T12:00:00Z');
  const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,8);assert.equal(result.total,8);assert.equal(result.pending,18);assert.equal(result.status,'awaiting-review');assert.equal(topicWorkProgress(s,'C205').completed,1);
  if(e.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
 }
 const t=task('test-a-16');p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-28T12:10:00Z',evidence:'Synthetic review for regression only.',heardAudio:false};
 startUnitTest(s,u.id);p.examDraft.answers[task('test-a-19').id]='Synthetic next draft.\nContinue later.';
 assert.deepEqual(roundTrip(s),s);assert.equal(scoreUnitTest(u,p.attempts[0]).pending,17);
});

test('C205 109 filled steps cover only the inquiry unit, unaffected by session length or old checkbox',()=>{
 const s=freshState(),p=unitState(s,u.id);for(const t of practice)p.answers[t.id]=t.answer;
 p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer]));submitUnitTest(s,u.id,'2026-09-28T12:00:00Z');
 const progress=topicWorkProgress(s,'C205');assert.equal(progress.completed,109);assert.equal(progress.total,472);assert.equal(progress.percent,23);
 assert.equal(module.contentStatus,'expanded');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 s.moduleProgress.C205={selfChecked:true,date:'2026-09-28'};s.placement={assessmentVersion,date:'2026-09-28T12:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.answer]))};
 assert(buildPlan(s).items.some(m=>m.id==='C205'&&m.contentStatus==='expanded'));
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C205'),progress);assert.deepEqual(topicWorkProgress(roundTrip(s),'C205'),progress);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {reportingPassivePatterns,mandativePatterns,modalDistancePatterns,reportingPassiveReference,mandativeReference,modalDistanceReference} from '../data/modal-reference.mjs';
import {c102Vocabulary} from '../data/lexicon-c102.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='C102');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='C102-'+id);
const cases=list=>{for(const [id,right,wrong]of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('C102 reporting passive retains agreement, auxiliary layers, passive roles and question order',()=>{
 cases([['reporting-forms-1','are','is'],['reporting-forms-2','live','lives'],['reporting-forms-3','have','has'],['reporting-forms-4','been','being'],
 ['reporting-forms-5','being','been'],['reporting-forms-6','Is','Does'],['reporting-forms-7','are','is'],
 ['reporting-forms-11','The drawings are said to be old.','The drawings is said to be old.'],
 ['reporting-forms-12','She is thought to have arrived.','She is thought to has arrived.'],
 ['reporting-forms-14','Is the room believed to be empty?','Is believed the room to be empty?'],
 ['reporting-forms-15','The map is believed to have been copied by Lea.','The map is believed to have copied by Lea.'],
 ['reporting-test-a-6','are','is'],['reporting-test-b-4','is','are']]);
});

test('C102 time of reporting, relative time and absence of knowledge remain distinct',()=>{
 cases([['reporting-meaning-1','no','yes'],['reporting-meaning-2','yes','no'],['reporting-meaning-3','no','yes'],['reporting-meaning-4','no','yes'],
 ['reporting-meaning-5','no','yes'],['reporting-meaning-6','no','yes'],['reporting-meaning-7','no','yes'],['reporting-meaning-8','yes','no'],
 ['reporting-test-a-9','no','yes'],['reporting-test-a-10','no','yes'],['reporting-test-b-9','no','yes'],['reporting-test-b-10','yes','no']]);
 open(['reporting-meaning-9','reporting-meaning-10','reporting-meaning-11','reporting-meaning-12','reporting-test-a-18','reporting-test-b-12']);
 assert(task('reporting-meaning-10').answer.includes('не исключает неизвестный'));
 assert(units[0].examples.some(e=>e.en==='In May, she was thought to live in Leeds.'));
});

test('C102 passive make, prepositions, gerunds and preserved modal content follow their own patterns',()=>{
 cases([['reporting-forms-8','to','zero'],['reporting-forms-9','being','to be'],['reporting-forms-10','been','being'],
 ['reporting-forms-13','We were made to wait.','We were made wait.'],
 ['reporting-forms-16','The complaint has been looked into.','The complaint has been looked.'],
 ['reporting-test-a-4','to','zero'],['reporting-test-b-3','being','be'],
 ['reporting-test-b-8','The reservation has been paid for.','The reservation has been paid.']]);
 open(['reporting-forms-17','reporting-forms-18','reporting-forms-19','reporting-forms-20','reporting-forms-21','reporting-test-b-21','reporting-test-b-23']);
 assert(task('reporting-forms-18').answer.includes('may'));assert(task('reporting-test-b-13').answer.includes('should'));
 assert(task('reporting-forms-21').answer.includes('возможна'));
});

test('C102 reporting passages preserve sources, dates, component scope, digitisation and permission',()=>{
 cases([['reporting-reading-1','Lea','Oren'],['reporting-reading-2','1935','1890'],['reporting-reading-3','1952','1935'],
 ['reporting-reading-4','6','18'],['reporting-reading-5','no','yes'],['reporting-listening-1','Oren','Lea'],
 ['reporting-listening-2','7','2'],['reporting-listening-3','2','7'],['reporting-listening-4','2006','1952'],['reporting-listening-5','no','yes']]);
 open(['reporting-reading-6','reporting-reading-8','reporting-reading-9','reporting-reading-10','reporting-listening-6','reporting-listening-9','reporting-listening-10']);
 assert(task('reporting-reading-8').answer.includes('clapper'));assert(task('reporting-listening-6').answer.includes('2006'));
 assert(task('reporting-test-b-17').answer.includes('four'));assert(task('reporting-test-b-17').answer.includes('eight'));
});

test('C102 mandative base/should, negative passive and governed patterns have independent keys',()=>{
 cases([['mandative-forms-1','attend','attends'],['mandative-forms-2','be','was'],['mandative-forms-3','be','is'],
 ['mandative-forms-4','not',"doesn't"],['mandative-forms-5','be','is'],['mandative-forms-6','checking','to check'],['mandative-forms-7','to','zero'],
 ['mandative-forms-8','on','to'],['mandative-forms-9','being','be'],['mandative-forms-10','sign','signs'],
 ['mandative-forms-11','They suggested that he go.','They suggested that he goes.'],
 ['mandative-forms-12','They asked that it be kept private.','They asked that it is kept private.'],
 ['mandative-test-a-7','They demand that she submit it.','They demand that she submits it.'],
 ['mandative-test-b-8','He advised us not to wait.','He advised us not wait.']]);
 for(const id of ['mandative-forms-1','mandative-forms-2','mandative-forms-4','mandative-forms-11','mandative-test-b-7'])assert(/subjunctive|Subjunctive/.test(task(id).prompt));
});

test('C102 normative mandative alternatives and insist/suggest speech acts remain contextual',()=>{
 cases([['mandative-meaning-1','requirement','report of departure'],['mandative-meaning-2','assertion','demand'],['mandative-meaning-3','inference','proposal'],
 ['mandative-meaning-4','no','yes'],['mandative-meaning-5','question','instruction'],['mandative-meaning-6','request','question'],
 ['mandative-meaning-7','no','yes'],['mandative-meaning-8','no','yes'],['mandative-test-b-9','assertion','order to make it genuine']]);
 open(['mandative-forms-15','mandative-forms-17','mandative-forms-18','mandative-meaning-9','mandative-meaning-11',
 'mandative-test-a-17','mandative-test-b-18','mandative-test-b-12','mandative-test-a-19']);
 assert(task('mandative-forms-15').answer.includes('should'));assert(task('mandative-test-b-18').answer.includes('нормативной'));
 assert(task('mandative-meaning-11').answer.includes('контекстные'));
});

test('C102 mandative passages distinguish advisory views, requirements, assertions and limited promises',()=>{
 cases([['mandative-reading-1','Rina','Diego'],['mandative-reading-2','9','5'],['mandative-reading-3','5','9'],['mandative-reading-4','no','yes'],
 ['mandative-reading-5','no','yes'],['mandative-listening-1','Diego','Rina'],['mandative-listening-2','6','2'],
 ['mandative-listening-3','2','6'],['mandative-listening-4','no','yes'],['mandative-listening-5','no','yes']]);
 assert(task('mandative-reading-7').answer.includes('Трое'));assert(task('mandative-reading-7').answer.includes('один'));
 assert(task('mandative-listening-11').answer.includes('by Monday'));assert(task('mandative-listening-11').answer.includes('not to finish'));
 open(['mandative-reading-6','mandative-reading-8','mandative-reading-9','mandative-listening-6','mandative-listening-9','mandative-listening-10']);
});

test('C102 modal distance forms keep base, mind ing, indirect order and modal-compatible expressions',()=>{
 cases([['distance-forms-1','say','says'],['distance-forms-2','seem','seems'],['distance-forms-3','checking','to check'],
 ['distance-forms-4','be','can'],['distance-forms-5','have','must'],['distance-forms-6','to','zero'],['distance-forms-8','been','being'],
 ['distance-forms-9','I was wondering whether the room is available.','I was wondering whether is the room available.'],
 ['distance-forms-10','We may be able to meet on Friday.','We may can meet on Friday.'],
 ['distance-forms-11','We will have to ask again.','We will must ask again.'],
 ['distance-test-a-2','confirming','to confirm'],['distance-test-b-2','letting','to let']]);
 open(['distance-forms-13','distance-forms-14','distance-forms-15','distance-test-b-13','distance-test-a-23']);
});

test('C102 well/as well, concession, uncertainty and refusal are not assigned a single mechanical meaning',()=>{
 cases([['distance-meaning-1','no','yes'],['distance-meaning-2','suggestion','probability forecast'],['distance-meaning-3','no','yes'],
 ['distance-meaning-4','expectation','instruction to the parcel'],['distance-meaning-5','prohibition','no necessity'],
 ['distance-meaning-6','no','yes'],['distance-meaning-7','no','yes'],['distance-meaning-8','no','yes'],
 ['distance-test-b-9','no','yes'],['distance-test-b-10','additional possibility','no-better-alternative suggestion']]);
 open(['distance-meaning-9','distance-meaning-10','distance-meaning-12','distance-meaning-13','distance-meaning-14','distance-meaning-15',
 'distance-test-a-22','distance-test-b-19','distance-test-b-24']);
 assert(task('distance-test-b-19').answer.includes('других правил'));assert(task('distance-meaning-12').answer.includes('Не без основания'));
});

test('C102 need distinguishes syntax, passive meaning, optionality and independently established action',()=>{
 cases([['distance-necessity-1','print','to print'],['distance-necessity-2','to','zero'],['distance-necessity-3','Does','Need'],
 ['distance-necessity-4','replacing','replaced'],['distance-necessity-5','yes','no'],['distance-necessity-6','no','yes'],['distance-necessity-7','no','yes'],
 ['distance-necessity-8',"She doesn't need to print it.","She doesn't need print it."],['distance-necessity-9','Need we print it?','Do we need print it?'],
 ['distance-test-a-8','Need I sign it?','Do I need sign it?'],['distance-test-a-10','yes','no'],['distance-test-a-11','no','yes'],
 ['distance-test-b-11','yes','no']]);
 open(['distance-necessity-10','distance-necessity-11','distance-necessity-12','distance-necessity-13','distance-necessity-14','distance-test-b-14']);
 assert(task('distance-necessity-11').answer.includes("so she didn't"));assert(task('distance-necessity-11').answer.includes('but she did anyway'));
});

test('C102 distance passages preserve counts, separate actions and unconfirmed arrangements',()=>{
 cases([['distance-reading-1','Noor','Hana'],['distance-reading-2','no','yes'],['distance-reading-3','20','10'],
 ['distance-reading-4','no','yes'],['distance-reading-5','no','yes'],['distance-listening-1','Hana','Noor'],
 ['distance-listening-2','12','8'],['distance-listening-3','8','12'],['distance-listening-4','9','11'],['distance-listening-5','yes','no']]);
 open(['distance-reading-8','distance-reading-9','distance-reading-10','distance-reading-11','distance-listening-6','distance-listening-7','distance-listening-11']);
 assert(task('distance-listening-11').answer.includes('on Thursday'));assert(task('distance-test-b-17').answer.includes('no tickets'));
});

test('C102 three scoped references have unique complete models, practice and primary source links',()=>{
 for(const [patterns,ref,count]of [[reportingPassivePatterns,reportingPassiveReference,32],[mandativePatterns,mandativeReference,28],[modalDistancePatterns,modalDistanceReference,34]]){
  assert.equal(patterns.length,count);assert.equal(ref.rows,patterns);assert.equal(new Set(patterns.map(r=>r[0])).size,count);
  assert(patterns.every(r=>r.length===5&&r.every(Boolean)));assert.equal(ref.practice.length,16);assert(ref.practice.every(r=>r.length===2&&r.every(Boolean)));
  assert.equal(ref.sources.length,12);assert(ref.sources.every(r=>/^https:\/\//.test(r[1])));assert(ref.intro.length);
 }
 assert(reportingPassivePatterns.some(r=>r[0]==='negative reporting'));assert(mandativePatterns.some(r=>r[0]==='indicative alternative'));
 assert(modalDistancePatterns.some(r=>r[0]==='need past unspecified'));
});

test('C102 vocabulary adds contextual words and phrases without replacing seven old IDs or UK IPA',()=>{
 assert.equal(c102Vocabulary.length,85);const cards=vocabulary.filter(c=>c.module==='C102');assert.equal(cards.length,92);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='C102-v'+i));assert(cards.some(c=>c.id==='C102-x-take-for-granted'&&c.word==='take for granted'));
 assert.equal(new Set(c102Vocabulary.map(c=>c.word)).size,85);
 for(const c of c102Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['is not known to have','be that as it may','might as well','give the benefit of the doubt','up in the air','follow up on','hold off on'])assert(cards.some(c=>c.word===word),word);
});

test('C102 natural unit scopes provide independent substantial passages and fresh exams for every goal',()=>{
 assert.deepEqual(units.map(u=>u.id),['C102-reporting','C102-mandative','C102-distance']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[98,96,112]);assert.deepEqual(units.map(u=>u.examples.length),[34,32,36]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[26,28],[26,26],[28,28]]);const passages=[];
 for(const [i,u]of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'C101-fronting');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=7000);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?500:300));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});

test('C102 fifteen specified-length models fit the task and remain open to substantive evaluation',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,15);assert.equal(paragraphs.filter(t=>t.prompt.includes('220–280')).length,12);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('220–280')).length,2);
});

test('C102 old questions, multiline answers, notes and SRS survive without inherited new progress',()=>{
 const s=freshState();s.moduleProgress.C102={selfChecked:true,date:'2026-09-22'};s.drafts.C102='Synthetic original note.';
 s.cards['C102-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['C102-x-take-for-granted']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C102';s.navigation.sections.course='module/C102';
 s.navigation.pages['module/C102']={scroll:420,focus:'drill1',fields:{drill0:'be',drill1:'left\nOriginal answer',drill2:'yes'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'C102').total,309);assert.equal(topicWorkProgress(copy,'C102').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='C102').drills.map(d=>d[0]),['They recommended that he ___ informed. (be/is)','She is believed to have ___. (leave)','Needn’t have paid: платёж был сделан? (yes/no)']);
 delete s.navigation;assert.equal(validateState(s).drafts.C102,s.drafts.C102);
});

test('C102 multiline drafts and both submitted variants preserve originals and pending manual reviews',()=>{
 for(const u of units){const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('220–280'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished text.\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C102').completed,0);let first;
  for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T14:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'C102').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('C102 309 first-pass steps count completed work, not mastery or elapsed study time',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T15:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'C102');assert.equal(progress.total,309);assert.equal(progress.completed,309);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C102'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C102'),progress);
});

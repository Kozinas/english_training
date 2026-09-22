import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {perfectPersons,perfectParticiples,perfectTime,perfectReference} from '../data/present-perfect.mjs';
import {a201Vocabulary} from '../data/lexicon-a201.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='A201');
const task=id=>units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks)).find(t=>t.id===id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task('A201-'+id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' expected answer');assert(!checkAnswer(wrong,t.answer),id+' contrast');}};

test('A201 four connected units have naturally different banks and fresh goal-covered exams',()=>{
 assert.deepEqual(units.map(u=>u.id),['A201-results','A201-experience','A201-duration','A201-contrast']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[94,78,82,84]);
 assert.deepEqual(units.map(u=>u.examples.length),[24,22,22,24]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[20,20],[20,20],[20,20],[22,22]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'A105-can');
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=4500);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);
  for(const b of u.banks){assert(b.tasks.length>=10);if(b.passage)passages.push(b.passage);}
  assert(u.banks.find(b=>b.kind==='reading').passage.split(/\s+/).length>=260);
  assert(u.banks.find(b=>b.kind==='listening').passage.split(/\s+/).length>=140);
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   assert(exam.tasks.some(t=>t.kind==='sentence'));assert(exam.tasks.some(t=>t.kind==='speech'));
   assert(exam.tasks.some(t=>t.kind==='text'&&t.prompt.includes('100–140')));
   for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id+' fresh prompt');prompts.add(t.prompt);}
   for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),u.id+'/'+g.id);
  }
 }
 assert.equal(new Set(passages).size,8);
});

test('A201 reference has seven complete person rows, forty scoped participles and fourteen time supports',()=>{
 assert.deepEqual(perfectPersons.map(r=>r.slice(0,2)),[['I','have'],['you','have'],['he','has'],['she','has'],['it','has'],['we','have'],['they','have']]);
 assert(perfectPersons.every(r=>r.length===6&&r.every(Boolean)));
 assert.equal(perfectParticiples.length,40);assert.equal(new Set(perfectParticiples.map(r=>r[0])).size,40);
 assert.equal(perfectTime.length,14);assert.equal(perfectReference.rows.length,61);assert.equal(perfectReference.practice.length,24);
 assert(perfectReference.rows.every(r=>r.length===6&&r.every(Boolean)));
 assert(perfectReference.intro.join(' ').includes('не полный список'));
 assert(perfectReference.intro.join(' ').includes('не автоматические переключатели'));
});

test('A201 participle table distinguishes V2 from V3 and retains standard variants',()=>{
 for(const [base,v2,v3] of [['begin','began','begun'],['write','wrote','written'],['see','saw','seen'],['run','ran','run'],['go','went','gone'],['come','came','come'],['have','had','had'],['read','read','read'],['stop','stopped','stopped'],['try','tried','tried']]){
  assert.deepEqual(perfectParticiples.find(r=>r[0]===base).slice(0,3),[base,v2,v3]);
 }
 assert(perfectParticiples.find(r=>r[0]==='get')[2].includes('gotten (US)'));
 assert.equal(perfectParticiples.find(r=>r[0]==='learn')[2],'learnt/learned');
 assert(perfectParticiples.find(r=>r[0]==='read')[4].includes('/red/'));
});

test('A201 result keys independently check auxiliary, participle, questions and short answers',()=>{
 cases([
  ['results-forms-1','has','have'],['results-forms-2','have','has'],['results-forms-3','written','wrote'],
  ['results-forms-4','done','did'],['results-forms-5','seen','saw'],['results-forms-6','begun','began'],
  ['results-forms-8','forgotten','forget'],['results-forms-9','chosen','chose'],['results-forms-10','stopped','stoped'],
  ['results-forms-11','tried','tryed'],['results-forms-12','run','ran'],
  ['results-forms-13','He has found the ticket.','He have found the ticket.'],
  ['results-forms-14','We have taken the wrong bag.','We have took the wrong bag.'],
  ['results-forms-16',"I've not opened the box.",'I have opened the box.'],
  ['results-forms-17','Have they paid the bill?','Did they have paid the bill?'],
  ['results-forms-18','Has the parcel arrived?','Have the parcel arrived?'],
  ['results-forms-20','Yes, I have.',"Yes, I've."],['results-forms-21',"No, he hasn't.",'No, he has.'],
  ['results-test-a-2','broken','broke'],['results-test-a-6','Has Ruth locked the gate?','Did Ruth locked the gate?'],
  ['results-test-b-2','drawn','drew'],['results-test-b-5','Ana has chosen the music.','Ana has chose the music.']
 ]);
});

test('A201 just already yet and still keys keep position, expectation and evidence distinct',()=>{
 cases([
  ['results-status-1','just','already'],['results-status-2','yet','never'],['results-status-3','still','already'],
  ['results-status-4','We have just returned the tools.','We just have returned the tools.'],
  ['results-status-5','They have booked the room already.','They have booked already the room.'],
  ['results-status-5',"They've already booked the room.",'They have never booked the room.'],
  ['results-status-6',"I've not received the parcel yet.",'I have received the parcel yet.'],
  ['results-status-7',"We still haven't agreed on a date.","We haven't still agreed on a date."],
  ['results-status-9','no','yes'],['results-status-10','no','yes'],
  ['results-test-a-10','yet','never'],['results-test-a-14','not stated','true'],
  ['results-test-b-10','still','already'],['results-test-b-14','no','yes']
 ]);
});

test('A201 experience form keys distinguish ever never, counts and dated follow-up questions',()=>{
 cases([
  ['experience-forms-1','ever','always'],['experience-forms-2','never','yet'],['experience-forms-3','ridden','rode'],
  ['experience-forms-4','won','winned'],['experience-forms-5','taken','took'],['experience-forms-6','times','time'],
  ['experience-forms-7','twice','once'],['experience-forms-8','Have they ever used this camera?','Have ever they used this camera?'],
  ['experience-forms-9','I have never made bread.',"I haven't never made bread."],
  ['experience-forms-9',"I haven't ever made bread.",'I have ever made bread.'],
  ['experience-forms-10','Has she ever taught a class?','Has she ever teach a class?'],
  ['experience-forms-12','How many times has he tried?','How long has he tried?'],
  ['experience-forms-15','When did you meet her?','When have you met her?'],
  ['experience-test-b-2','sung','sang'],['experience-test-a-7','When did you go?','When did you went?']
 ]);
});

test('A201 been/gone/in keys depend on stated return, not blanket bans or guessed ability',()=>{
 cases([
  ['experience-meaning-1','been','gone'],['experience-meaning-2','gone','been'],['experience-meaning-3','in','to'],
  ['experience-meaning-4','been','gone'],['experience-meaning-5','no','yes'],['experience-meaning-6','no','yes'],
  ['experience-meaning-7','no','yes'],['experience-test-a-9','gone','been'],['experience-test-a-10','been','gone'],
  ['experience-test-a-11','in','to'],['experience-test-b-9','been','gone'],['experience-test-b-10','gone','been'],
  ['experience-test-b-11','in','to'],['experience-test-a-13','false','true'],['experience-test-b-13','false','true']
 ]);
 assert(isOpen(task('A201-experience-meaning-8')));assert(task('A201-experience-meaning-8').answer.includes('go camping'));
});

test('A201 duration keys separate time lengths, starts, finished periods and during',()=>{
 cases([
  ['duration-time-1','for','since'],['duration-time-2','since','for'],['duration-time-3','since','for'],
  ['duration-time-4','for','since'],['duration-time-5','since','for'],['duration-time-6','for','since'],
  ['duration-time-7','since','for'],['duration-time-8','for','since'],['duration-time-9','for','since'],
  ['duration-time-10','since','for'],['duration-time-11','during','for'],['duration-time-12','all','since'],
  ['duration-time-15','3','4'],['duration-time-16','3','2'],['duration-test-a-11','3','4'],
  ['duration-test-a-12','4','3'],['duration-test-b-11','4','3'],['duration-test-b-12','3','4']
 ]);
});

test('A201 continuing states use known/had/been and past events mark their beginning',()=>{
 cases([
  ['duration-forms-1','had','bought'],['duration-forms-2','known','knew'],['duration-forms-3','been','was'],
  ['duration-forms-4','owned','own'],['duration-forms-5','left','leave'],
  ['duration-forms-6','I have known her for five years.','I know her for five years.'],
  ['duration-forms-7','She has had this bag since May.','She has this bag since May.'],
  ['duration-forms-8','How long have you been here?','How long are you here?'],
  ['duration-forms-10',"I've known him since 2018.",'I have been knowing him since 2018.'],
  ['duration-forms-12','I have had this bike for two years.','I have bought this bike for two years.'],
  ['duration-test-a-7','met','meet'],['duration-test-b-6','had','have'],['duration-test-b-7','joined','join']
 ]);
});

test('A201 contrast closed keys retain given dates, base after did and V3 after have',()=>{
 cases([
  ['contrast-frames-1','sent','have sent'],['contrast-frames-2','bought','have bought'],['contrast-frames-3','left','has left'],
  ['contrast-frames-4','played','have played'],['contrast-frames-5','saw','have seen'],['contrast-frames-6','lived','have lived'],
  ['contrast-frames-7','did','have'],['contrast-frames-8','have','did'],['contrast-frames-9','opened','have opened'],
  ['contrast-frames-10','moved','have moved'],['contrast-frames-11','We met yesterday.','We have met.'],
  ['contrast-editing-1','I have written the report.','I have wrote the report.'],
  ['contrast-editing-2','Did you see the error yesterday?','Did you saw the error yesterday?'],
  ['contrast-editing-3','We ran the script at six yesterday.','We have run the script at six yesterday.'],
  ['contrast-editing-4','Has she sent the invitation yet?','Has she send the invitation yet?'],
  ['contrast-test-a-10','has','did'],['contrast-test-a-11','did','has'],['contrast-test-b-10','have','did'],['contrast-test-b-11','did','has']
 ]);
});

test('A201 reading keys preserve quantities, ownership, limits and missing evidence',()=>{
 cases([
  ['results-reading-1','Mina','Owen'],['results-reading-2','4','2'],['results-reading-3','red and blue','white and green'],
  ['results-reading-4','false','true'],['results-reading-5','false','true'],['results-reading-6','Rafi','Mina'],
  ['results-reading-7','false','true'],['results-reading-8','not stated','true'],
  ['experience-reading-1','Leah','Asha'],['experience-reading-2','2','1'],['experience-reading-3','false','true'],
  ['experience-reading-4','false','true'],['experience-reading-5','false','true'],['experience-reading-6','true','false'],
  ['experience-reading-7','true','false'],['experience-reading-8','not stated','true'],
  ['duration-reading-1','1 June','1 March'],['duration-reading-2','3','2'],['duration-reading-3','2','3'],
  ['duration-reading-4','true','false'],['duration-reading-5','false','true'],['duration-reading-6','3','4'],
  ['duration-reading-7','false','true'],['duration-reading-8','not stated','true'],
  ['contrast-reading-1','Monday 11:30','Tuesday 09:00'],['contrast-reading-2','2','3'],['contrast-reading-3','09:10','10:05'],
  ['contrast-reading-4','Safari','Chrome'],['contrast-reading-5','false','true'],['contrast-reading-6','false','true'],
  ['contrast-reading-7','false','true'],['contrast-reading-8','not stated','true']
 ]);
});

test('A201 listening keys do not turn requests, visits and absent replies into confirmed results',()=>{
 cases([
  ['results-listening-1','Jo','Mina'],['results-listening-2','maps','tickets'],['results-listening-3','12','20'],
  ['results-listening-4','yes','no'],['results-listening-5','receipt','package'],['results-listening-6','false','true'],['results-listening-7','not stated','true'],
  ['experience-listening-1','Eli','Morgan'],['experience-listening-2','3','1'],['experience-listening-3','false','true'],
  ['experience-listening-4','May','March'],['experience-listening-5','true','false'],['experience-listening-6','false','true'],['experience-listening-7','false','true'],
  ['duration-listening-1','Nico','Hana'],['duration-listening-2','for six months','since yesterday'],['duration-listening-3','Tuesday','Monday'],
  ['duration-listening-4','3','2'],['duration-listening-5','false','true'],['duration-listening-6','false','true'],['duration-listening-7','not stated','true'],
  ['contrast-listening-1','Rina','Lena'],['contrast-listening-2','keys','receipts'],['contrast-listening-3','8:40','9:20'],
  ['contrast-listening-4','envelope','drawer'],['contrast-listening-5','false','true'],['contrast-listening-6','not stated','false'],['contrast-listening-7','not stated','true'],
  ['contrast-test-a-15','not stated','true'],['contrast-test-b-15','not stated','false']
 ]);
});

test('A201 ambiguous time frames, variety choices and qualified experience require semantic review',()=>{
 for(const id of ['results-status-11','results-review-9','results-test-a-20','results-test-b-20',
  'experience-meaning-8','experience-test-a-16','duration-time-17','duration-time-18','duration-test-b-15',
  'contrast-frames-13','contrast-frames-15','contrast-frames-16','contrast-frames-19','contrast-frames-20',
  'contrast-editing-12','contrast-editing-13','contrast-test-a-12','contrast-test-b-12'])assert(isOpen(task('A201-'+id)),id);
});

test('A201 sixteen full paragraph models satisfy stated lengths without word-count marking learners',()=>{
 let n=0;
 for(const u of units)for(const t of [...u.banks,...u.tests].flatMap(b=>b.tasks)){
  const range=t.prompt.match(/(\d+)–(\d+) слов/);if(!range)continue;
  const count=t.answer.trim().split(/\s+/).length;assert(count>=+range[1]&&count<=+range[2],t.id+' '+count);n++;
 }
 assert.equal(n,16);
});

test('A201 pronunciation distinguishes read V3 and negatives, without ASR-based proficiency',()=>{
 cases([['results-sounds-4','/red/','/riːd/'],['results-sounds-5','/v/','/f/'],['results-test-a-16','/red/','/riːd/'],['results-test-b-16','/v/','/f/']]);
 assert.equal(task('A201-results-sounds-1').kind,'speech');assert.equal(task('A201-results-test-a-17').kind,'speech');
 assert(isOpen(task('A201-results-sounds-6')));assert(task('A201-results-sounds-6').answer.includes('аудио'));
});

test('A201 eighty cards include V3, contextual chunks and nonliteral language with old IDs intact',()=>{
 assert.equal(a201Vocabulary.length,80);assert.equal(new Set(a201Vocabulary.map(c=>c.id)).size,80);
 assert.equal(modules.find(m=>m.id==='A201').vocabulary.length,87);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id===`A201-v${n}`));
 for(const c of a201Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['get the hang of','been there, done that','start from scratch','run out of','so far','hear from','for ages','rule out','up and running'])assert(a201Vocabulary.some(c=>c.word===word),word);
 assert.equal(a201Vocabulary.find(c=>c.word==='read').ipa,'/red/');
 assert.equal(a201Vocabulary.find(c=>c.word==='receipt').ipa,'/rɪˈsiːt/');
 assert.equal(a201Vocabulary.find(c=>c.word==='won').ipa,'/wʌn/');
 assert.equal(a201Vocabulary.find(c=>c.word==='duration').ipa,'/djuˈreɪʃn/');
});

test('A201 old self-check, original drill answers, notes and card history survive expansion',()=>{
 const s=freshState();s.moduleProgress.A201={selfChecked:true,date:'2026-09-22'};s.drafts.A201='Synthetic original notes.';
 s.cards['A201-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/A201';s.navigation.sections.course='module/A201';
 s.navigation.pages['module/A201']={scroll:740,focus:'drill1',fields:{drill0:'gone',drill1:'since\nOriginal reasoning',drill2:'finished'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'A201').total,342);assert.equal(topicWorkProgress(copy,'A201').completed,0);
 delete s.navigation;assert.equal(validateState(s).drafts.A201,s.drafts.A201);
});

test('A201 exams retain multiline drafts and two original attempts while open responses remain pending',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('100–140'));
  p.examDraft.answers[paragraph.id]='Synthetic paragraph.\nTo continue after a break.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'A201').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-22T12:00:00Z');
   const scored=scoreUnitTest(u,p.attempts.at(-1));assert.equal(scored.correct,scored.total);assert.equal(scored.status,'awaiting-review');
   assert.equal(scored.rows.filter(r=>r.status==='pending').length,exam.tasks.filter(isOpen).length);
   assert.equal(topicWorkProgress(s,'A201').completed,1,'second variant does not add a topic step');
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);assert.equal(p.examDraft.variant,'b');}
  }
  assert.deepEqual(p.attempts[0],first);assert.equal(p.attempts.length,2);assert.doesNotThrow(()=>validateState(s));
 }
});

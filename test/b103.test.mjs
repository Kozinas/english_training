import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {passivePersons,passivePatterns,servicePatterns,passiveReference,serviceReference} from '../data/passive-reference.mjs';
import {b103Vocabulary} from '../data/lexicon-b103.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B103');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B103-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};

test('B103 simple passive has independent agreement, V3, negative and question keys',()=>{
 for(const id of ['focus-forms-1','focus-forms-2','focus-forms-3','focus-test-a-1','focus-test-b-1'])assert(task(id).prompt.includes('Present Simple'));
 cases([
  ['focus-forms-1','is','are'],['focus-forms-2','are','is'],['focus-forms-3','am','is'],
  ['focus-forms-4','was','were'],['focus-forms-5','were','was'],['focus-forms-6','written','wrote'],
  ['focus-forms-7','taken','took'],['focus-forms-8','sent','sended'],
  ['focus-forms-9',"The list isn't printed.",'The list does not printed.'],
  ['focus-forms-10','Were the doors locked?','Did the doors locked?'],
  ['focus-forms-11','Is the page checked?','Does the page is checked?'],
  ['focus-forms-12',"No, it wasn't.","No, it didn't."],['focus-forms-13','Yes, they are.','Yes, it is.'],
  ['focus-forms-14','The cups were washed.','The cups are washed.'],['focus-forms-15','The cups are washed.','The cups were washed.'],
  ['focus-forms-16','The posters were checked by one editor.','The posters was checked by one editor.'],
  ['focus-test-a-4','chosen','chose'],['focus-test-b-4','broken','broke']
 ]);
});

test('B103 active/passive transformations preserve participants and pronoun roles',()=>{
 cases([
  ['focus-focus-1','Kim','bags'],['focus-focus-2','bags','Kim'],
  ['focus-focus-3','We were helped by them.','Us were helped by they.'],
  ['focus-focus-4','He was invited by her.','Him was invited by she.'],
  ['focus-focus-5','Jo drew the map.','Jo drawn the map.'],['focus-focus-6','Ada reads the notices.','Ada read the notices.'],
  ['focus-focus-9','no','yes'],['focus-test-a-8','She was called by them.','She was called by they.'],
  ['focus-test-b-8','We were congratulated by him.','Us were congratulated by he.']
 ]);
 assert(isOpen(task('focus-focus-7')));assert(task('focus-focus-7').answer.includes('to us'));
 assert(isOpen(task('focus-test-a-19')));assert(isOpen(task('focus-test-b-19')));
});

test('B103 agent, tool, deadline, prepositional passive and intransitives are not conflated',()=>{
 cases([
  ['focus-limits-1','by','with'],['focus-limits-2','with','by'],['focus-limits-3','deadline','agent'],
  ['focus-limits-4','The train arrived late.','The train was arrived late.'],
  ['focus-limits-5','The accident happened yesterday.','The accident was happened yesterday.'],
  ['focus-limits-6','after','at'],['focus-limits-7','no','yes'],['focus-limits-8','no','yes'],
  ['focus-test-a-13','after','for'],['focus-test-b-12','A delay happened on Tuesday.','A delay was happened on Tuesday.']
 ]);
 for(const id of ['focus-limits-9','focus-limits-10','focus-test-a-17','focus-test-b-17'])assert(isOpen(task(id)));
 assert(passivePatterns.find(r=>r[0]==='instrument')[4].includes('зависит от роли'));
});

test('B103 aspect chains, modal base and first-auxiliary questions have independent keys',()=>{
 cases([
  ['processes-forms-1','being','been'],['processes-forms-2','are','is'],['processes-forms-3','was','were'],
  ['processes-forms-4','repaired','repairing'],['processes-forms-5','been','being'],['processes-forms-6','have','has'],
  ['processes-forms-7','chosen','chose'],['processes-forms-8','be','is'],['processes-forms-9','changed','change'],
  ['processes-forms-10','be','being'],['processes-forms-11','be','been'],
  ['processes-forms-12','Has the copy been signed?','Has been the copy signed?'],
  ['processes-forms-13','Is the room being cleaned?','Is being the room cleaned?'],
  ['processes-forms-14','Will the copies be delivered?','Will be the copies delivered?'],
  ['processes-forms-16',"No, it hasn't.","No, it isn't."],
  ['processes-forms-17','The plan is being reviewed.','The plan has been reviewed.'],
  ['processes-forms-18','The plan has been reviewed.','The plan is being reviewed.'],
  ['processes-forms-20','The badge was printed yesterday.','The badge has been printed yesterday.'],
  ['processes-test-a-5','made','make'],['processes-test-b-5','chosen','chose']
 ]);
});

test('B103 process, completion, success, rule and possibility retain separate meanings',()=>{
 cases([
  ['processes-status-1','process','completed'],['processes-status-2','completed','required'],
  ['processes-status-3','required','completed'],['processes-status-4','possible','confirmed'],
  ['processes-status-5','no','yes'],['processes-status-6','no','yes'],
  ['processes-status-7','prohibition','no necessity'],['processes-status-8','no necessity','prohibition'],
  ['processes-status-9','agent','deadline'],['processes-status-10','deadline','agent'],
  ['processes-test-a-13','not established','confirmed'],['processes-test-b-13','not established','confirmed'],
  ['processes-test-a-15','false','true'],['processes-test-b-15','false','true']
 ]);
 for(const id of ['processes-status-11','processes-status-12','processes-status-13','processes-test-a-22','processes-test-b-22'])assert(isOpen(task(id)));
 assert(task('processes-test-b-22').answer.includes('не подтверждены'));
});

test('B103 accepts UK/US writing and leaves context-dependent alternatives for review',()=>{
 cases([
  ['focus-listening-8','The boxes were labelled by Owen.','The boxes was labelled by Owen.'],
  ['focus-listening-8','The boxes were labeled by Owen.','The boxes are labeled by Owen.']
 ]);
 for(const id of ['processes-status-15','processes-test-a-18','processes-test-b-18','services-meaning-10'])assert(isOpen(task(id)));
 assert(task('processes-status-15').answer.includes('was just delivered'));
 assert(task('services-meaning-10').answer.includes('gotten'));
});

test('B103 causative have/get preserve object placement, do support and infinitive differences',()=>{
 for(const id of ['services-forms-1','services-test-a-1','services-test-b-1'])assert(task(id).prompt.includes('Present Simple'));
 cases([
  ['services-forms-1','has','have'],['services-forms-2','had','have'],['services-forms-3','taken','took'],
  ['services-forms-4','cut','cutted'],['services-forms-5','have','had'],['services-forms-6','have','had'],
  ['services-forms-7','having','had'],['services-forms-8','had','have'],['services-forms-9','checked','check'],
  ['services-forms-10','to print','print'],['services-forms-11','print','to print'],
  ['services-forms-12','Did you have your coat cleaned?','Did you had your coat cleaned?'],
  ['services-forms-13','Does she have her photos printed here?','Does she has her photos printed here?'],
  ['services-forms-16','We had the notice translated.','We had translated the notice.'],
  ['services-test-a-6','to type','type'],['services-test-a-7','type','to type'],
  ['services-test-b-3','drawn','drew'],['services-test-b-6','to explain','explain'],['services-test-b-7','explain','to explain']
 ]);
});

test('B103 services, own actions, adverse events, booking and service quality are distinct',()=>{
 cases([
  ['services-meaning-1','I','someone else'],['services-meaning-2','Noor','I'],['services-meaning-3','no','yes'],
  ['services-meaning-4','no','yes'],['services-meaning-5','no','yes'],['services-meaning-6','assistant','I'],
  ['services-test-a-13','no','yes'],['services-test-a-14','false','true'],
  ['services-test-b-13','no','yes'],['services-test-b-14','false','true']
 ]);
 for(const id of ['services-meaning-7','services-meaning-8','services-meaning-9','services-meaning-13','services-test-a-16','services-test-b-16'])assert(isOpen(task(id)));
 assert(servicePatterns.find(r=>r[0]==='adverse event')[4].includes('вины'));
});

test('B103 reading keys distinguish direct contradiction from information not stated',()=>{
 cases([
  ['focus-reading-1','Everyday Objects','Neighbourhood Notes'],['focus-reading-2','48','40'],
  ['focus-reading-3','Rosa','Ben'],['focus-reading-4','Ben','Rosa'],['focus-reading-5','not stated','Rosa'],
  ['focus-reading-6','no','yes'],['focus-reading-7','false','not stated'],['focus-reading-8','not stated','Ben'],
  ['processes-reading-1','Neighbourhood Notes','Everyday Objects'],['processes-reading-2','Lea','Nina'],
  ['processes-reading-3','6','4'],['processes-reading-4','4','6'],['processes-reading-5','false','not stated'],
  ['processes-reading-6','false','true'],['processes-reading-7','false','true'],['processes-reading-8','not stated','known'],
  ['processes-reading-9','Friday','Wednesday'],['processes-reading-10','no','yes'],
  ['services-reading-1','Nadia','Arun'],['services-reading-2','captions','frames'],['services-reading-3','6','4'],
  ['services-reading-4','Arun','Nadia'],['services-reading-5','false','true'],['services-reading-6','not stated','Arun'],
  ['services-reading-7','false','not stated'],['services-reading-8','false','true']
 ]);
});

test('B103 independent audio texts have verified quantities, roles and agreement limits',()=>{
 cases([
  ['focus-listening-1','Maya','Rosa'],['focus-listening-2','12','20'],['focus-listening-3','Owen','Maya'],
  ['focus-listening-4','false','true'],['focus-listening-5','2','3'],['focus-listening-6','not stated','Owen'],['focus-listening-7','no','yes'],
  ['processes-listening-1','Daniel','Amina'],['processes-listening-2','floor','lights'],['processes-listening-3','yes','no'],
  ['processes-listening-4','3','2'],['processes-listening-5','Amina','Daniel'],['processes-listening-6','no','yes'],['processes-listening-7','4 pm','3 pm'],
  ['services-listening-1','Ellis','Arun'],['services-listening-2','20','12'],['services-listening-3','blue','green'],
  ['services-listening-4','false','true'],['services-listening-5','no','yes'],['services-listening-6','flyers','posters with corrected colour'],['services-listening-7','3 pm','4 pm']
 ]);
});

test('B103 pronunciation keys preserve -ed sounds and read V3 without claiming ASR phonetics',()=>{
 cases([
  ['focus-sounds-1','/t/','/d/'],['focus-sounds-2','/d/','/t/'],['focus-sounds-3','/ɪd/','/t/'],['focus-sounds-4','/red/','/riːd/'],
  ['processes-sounds-1','being','been'],['processes-sounds-2','V3','-ing'],
  ['services-sounds-2','/d/','/t/'],['services-sounds-3','/ɪd/','/d/']
 ]);
 assert(isOpen(task('processes-sounds-3')));assert(task('processes-sounds-3').answer.includes('контекст'));
 for(const t of all.filter(t=>t.kind==='speech'))assert(isOpen(t));
});

test('B103 references expose seven persons, 28 passive and 26 service models with scoped practice',()=>{
 assert.deepEqual(passivePersons.map(r=>r[0]),['I','you','he','she','it','we','they']);
 assert.equal(passivePatterns.length,28);assert.equal(servicePatterns.length,26);
 for(const [r,n] of [[passiveReference,35],[serviceReference,26]]){
  assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(r.practice.length,16);
  assert.equal(new Set(r.rows.map(row=>row[0])).size,n);assert.match(r.intro.join(' '),/не (полный|все)/);
 }
 assert(servicePatterns.find(r=>r[0]==='object position')[4].includes('Past Perfect'));
 assert(passivePatterns.find(r=>r[0]==='scope')[4].includes('дальше'));
});

test('B103 adds 84 contextual IPA words and phrases while preserving all seven old IDs',()=>{
 assert.equal(b103Vocabulary.length,84);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id===`B103-v${n}`));
 assert(vocabulary.some(c=>c.id==='B103-x-carry-out'&&c.word==='carry out'));
 for(const c of b103Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['out of order','have a word with','look after','have something done','awaiting approval','subject to confirmation'])assert(b103Vocabulary.some(c=>c.word===word),word);
 assert.equal(b103Vocabulary.find(c=>c.word==='receipt').ipa,'/rɪˈsiːt/');
 const cards=modules.find(m=>m.id==='B103').vocabulary;assert.equal(cards.length,91);assert.equal(new Set(cards.map(c=>c.word)).size,91);
});

test('B103 has three substantial unequal units, separate texts and fresh tests for all goals',()=>{
 assert.deepEqual(units.map(u=>u.id),['B103-focus','B103-processes','B103-services']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[96,92,84]);
 assert.deepEqual(units.map(u=>u.examples.length),[28,26,24]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[22,22],[24,24],[22,22]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'A104-did');
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=5300);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);
  assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?350:200));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));
   for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);
   for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
  }
 }
 assert.equal(new Set(passages).size,6);
});

test('B103 fifteen writing models meet 130–170 words and remain open to substantive review',()=>{
 const paragraphs=all.filter(t=>t.prompt.includes('130–170'));assert.equal(paragraphs.length,15);
 for(const t of paragraphs){const n=t.answer.split(/\s+/).length;assert(n>=130&&n<=170,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('130–170')).length,3);
});

test('B103 expansion preserves original drills, multiline archive, notes and SRS with no inherited credit',()=>{
 const s=freshState();s.moduleProgress.B103={selfChecked:true,date:'2026-09-22'};s.drafts.B103='Synthetic old note.';
 s.cards['B103-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B103';s.navigation.sections.course='module/B103';
 s.navigation.pages['module/B103']={scroll:500,focus:'drill1',fields:{drill0:'sent',drill1:'must\nOriginal answer',drill2:'The room is cleaned.'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B103').total,275);assert.equal(topicWorkProgress(copy,'B103').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B103').drills.map(d=>d[0]),['The message was ___. (send)','The test ___ be repeated. (должен)','Сделай пассив: They clean the room.']);
 delete s.navigation;assert.equal(validateState(s).drafts.B103,s.drafts.B103);
});

test('B103 multiline exam drafts and two attempts retain original work pending substantive review',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('130–170'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B103').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B103').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('B103 275 first-pass steps do not claim mastery or change with available study time',()=>{
 const s=freshState();
 for(const u of units){
  const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T13:00:00Z');
  assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 }
 const progress=topicWorkProgress(s,'B103');assert.equal(progress.total,275);assert.equal(progress.completed,275);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B103'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B103'),progress);
});

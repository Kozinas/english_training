import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {perfectContinuousPersons,pastPerfectPersons,perfectContinuousPatterns,pastPerfectPatterns,habitPatterns,perfectContinuousReference,pastPerfectReference,habitsReference} from '../data/duration-history.mjs';
import {b101Vocabulary} from '../data/lexicon-b101.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B101');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B101-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};

test('B101 has three substantial unequal units with all goals tested on fresh tasks',()=>{
 assert.deepEqual(units.map(u=>u.id),['B101-continuous','B101-earlier','B101-habits']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[108,96,94]);
 assert.deepEqual(units.map(u=>u.examples.length),[28,28,26]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[24,24],[26,26],[24,24]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'A205-time');
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

test('B101 fifteen long writing models meet their 130–170 word tasks and remain manually assessed',()=>{
 const paragraphs=all.filter(t=>t.prompt.includes('130–170'));assert.equal(paragraphs.length,15);
 for(const t of paragraphs){const n=t.answer.split(/\s+/).length;assert(n>=130&&n<=170,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('130–170')).length,3);
});

test('B101 perfect continuous has independent agreement, ing, question and time keys',()=>{
 cases([
  ['continuous-forms-1','have','has'],['continuous-forms-2','has','have'],['continuous-forms-4','been','being'],
  ['continuous-forms-5','writing','wrote'],['continuous-forms-6','lying','lieing'],['continuous-forms-7','running','runing'],
  ['continuous-forms-8','traveling','travel'],['continuous-forms-8','travelling','travelled'],['continuous-forms-10','have','has'],
  ['continuous-forms-12','We have been working.','We have being working.'],['continuous-forms-15','Has she been reading?','Did she has been reading?'],
  ['continuous-forms-17','How long have you been studying?','How long you have been studying?'],
  ['continuous-time-1','for','since'],['continuous-time-2','since','for'],['continuous-time-3','since','for'],
  ['continuous-time-4','worked','have been working'],['continuous-time-5','yes','no'],['continuous-time-6','no','yes'],
  ['continuous-test-a-4','swimming','swiming'],['continuous-test-a-5','since','for'],['continuous-test-a-6','for','since'],
  ['continuous-test-b-4','sitting','siting'],['continuous-test-b-5','since','for'],['continuous-test-b-6','for','since'],
  ['continuous-test-b-16','Where have you been working?','Where you have been working?']
 ]);
});

test('B101 continuous does not prove completion, deny all sleep or force every for into ing',()=>{
 cases([
  ['continuous-contrast-1','have written','have been writing'],['continuous-contrast-2','have known','have been knowing'],
  ['continuous-contrast-3','has had','has been having'],['continuous-contrast-4','no','yes'],['continuous-contrast-5','no','yes'],
  ['continuous-contrast-6','no','yes'],['continuous-contrast-7','no','yes'],['continuous-contrast-8','no','yes'],
  ['continuous-sounds-1','has','is'],['continuous-sounds-2','yes','no'],['continuous-test-a-7','have owned','have been owning'],
  ['continuous-test-a-8','have drawn','have been drawing'],['continuous-test-a-9','no','yes'],
  ['continuous-test-b-7','have had','have been having'],['continuous-test-b-8','has made','has been making'],
  ['continuous-test-b-9','no','yes'],['continuous-test-b-10','no','yes']
 ]);
 for(const id of ['continuous-contrast-9','continuous-contrast-10','continuous-contrast-15','continuous-test-a-23','continuous-test-b-23'])assert(isOpen(task(id)),id);
 assert(perfectContinuousPatterns.find(r=>r[0]==='live / work')[1].includes('lived / been living'));
});

test('B101 past perfect keeps had constant and distinguishes V3, question and contraction',()=>{
 cases([
  ['earlier-forms-1','had','has'],['earlier-forms-2','written','wrote'],['earlier-forms-3','chosen','chose'],
  ['earlier-forms-5','seen','saw'],['earlier-forms-6','gone','went'],['earlier-forms-7','had','have'],['earlier-forms-8','been','being'],
  ['earlier-forms-11','She had written the title.','She had wrote the title.'],['earlier-forms-15','Had they arrived?','Did they had arrived?'],
  ['earlier-forms-17','I had taken the map.','I would taken the map.'],['earlier-forms-18','I would take the map.','I had take the map.'],
  ['earlier-sounds-1','had','would'],['earlier-sounds-2','would','had'],['earlier-sounds-3','/red/','/riːd/'],
  ['earlier-test-a-3','taken','took'],['earlier-test-a-4','known','knew'],['earlier-test-a-10','had','would'],
  ['earlier-test-b-2','kept','keep'],['earlier-test-b-3','heard','hear'],['earlier-test-b-4','found','find'],['earlier-test-b-10','would','had']
 ]);
 assert(isOpen(task('earlier-forms-19')));assert(isOpen(task('earlier-test-a-22')));
});

test('B101 past sequence does not imply cause, current count or impossible later events',()=>{
 cases([
  ['earlier-timeline-1','departure','arrival'],['earlier-timeline-2','no','yes'],['earlier-timeline-3','no','yes'],
  ['earlier-timeline-4','no','yes'],['earlier-timeline-5','no','yes'],['earlier-timeline-6','no','yes'],
  ['earlier-timeline-7','no','yes'],['earlier-timeline-8','no','yes'],['earlier-test-a-6','opening','arrival'],
  ['earlier-test-a-7','no','yes'],['earlier-test-a-8','no','yes'],['earlier-test-a-9','no','yes'],
  ['earlier-test-b-6','stopping','entering'],['earlier-test-b-7','no','yes'],['earlier-test-b-8','yes','no'],['earlier-test-b-9','no','yes'],
  ['earlier-test-b-11','no','yes'],['earlier-test-b-12','no','yes']
 ]);
 for(const id of ['earlier-timeline-11','earlier-test-a-23','earlier-test-b-23','earlier-test-b-24'])assert(isOpen(task(id)),id);
 assert(pastPerfectPatterns.some(r=>r[0]==='before unfinished'&&r[1]==='They left before I had finished.'));
});

test('B101 habit forms distinguish used to base, prepositional ing and auxiliary questions',()=>{
 cases([
  ['habits-forms-1','walk','walking'],['habits-forms-2','use','used'],['habits-forms-3','use','used'],
  ['habits-forms-4','working','work'],['habits-forms-5','driving','drive'],['habits-forms-6','running','runing'],
  ['habits-forms-7','sitting','sit'],['habits-forms-8','it','its'],['habits-forms-9','Are','Do'],
  ['habits-forms-10','was','were'],['habits-forms-11','visit','visited'],['habits-forms-12','did','used'],
  ['habits-forms-14','Is she used to working alone?','Is she used to work alone?'],
  ['habits-forms-15','Did they use to play here?','Did they used to play here?'],
  ['habits-test-a-3','sharing','share'],['habits-test-a-4','swimming','swim'],
  ['habits-test-a-14','Are they used to travelling together?','Are they used to travel together?'],
  ['habits-test-a-14','Are they used to traveling together?','Did they used to traveling together?'],
  ['habits-test-b-3','making','make'],['habits-test-b-4','planning','planing'],['habits-test-b-6','were','was'],
  ['habits-test-b-14','Is he used to studying online?','Is he used to study online?']
 ]);
 assert(isOpen(task('habits-forms-19')));assert(task('habits-forms-19').answer.includes('gotten'));
});

test('B101 habitual would, adaptation, enjoyment and passive purpose remain different meanings',()=>{
 cases([
  ['habits-meaning-1','past','accustomed'],['habits-meaning-2','no','yes'],['habits-meaning-3','no','yes'],
  ['habits-meaning-4','no','yes'],['habits-meaning-5','no','yes'],['habits-meaning-6','moved','used to move'],
  ['habits-meaning-7','no','yes'],['habits-meaning-8','no','yes'],['habits-test-a-7','no','yes'],['habits-test-a-8','no','yes'],
  ['habits-test-a-9','travelled','used to travel'],['habits-test-a-9','traveled','used to travel'],['habits-test-a-10','no','yes'],
  ['habits-test-b-7','no','yes'],['habits-test-b-8','yes','no'],['habits-test-b-9','no','yes'],['habits-test-b-10','no','yes'],
  ['habits-sounds-1','/s/','/z/'],['habits-sounds-2','no','yes'],['habits-test-b-11','/z/','/s/']
 ]);
 for(const id of ['habits-meaning-10','habits-meaning-11','habits-meaning-12','habits-test-b-22','habits-test-a-23'])assert(isOpen(task(id)),id);
 assert(habitPatterns.find(r=>r[0]==='passive bridge')[1].includes('to cut paper'));
 assert(habitPatterns.find(r=>r[0]==='would: limits')[4].includes('Повторные временные состояния'));
});

test('B101 readings have independent factual keys and keep unknown distinct from false',()=>{
 cases([
  ['continuous-reading-1','3','4'],['continuous-reading-2','Elin','Tom'],['continuous-reading-3','4','6'],['continuous-reading-4','riverside','hill'],
  ['continuous-reading-5','10','3'],['continuous-reading-6','false','true'],['continuous-reading-7','false','true'],
  ['continuous-reading-8','false','true'],['continuous-reading-9','not stated','false'],['continuous-reading-10','false','true'],
  ['earlier-reading-1','18:00','17:30'],['earlier-reading-2','17:10','18:10'],['earlier-reading-3','17:40','17:10'],
  ['earlier-reading-4','12','8'],['earlier-reading-5','false','true'],['earlier-reading-6','not stated','false'],
  ['earlier-reading-7','not stated','true'],['earlier-reading-8','false','not stated'],['earlier-reading-9','18:30','18:15'],['earlier-reading-10','false','true'],
  ['habits-reading-1','4','6'],['habits-reading-2','walked','bus'],['habits-reading-3','bus','walked'],
  ['habits-reading-4','false','true'],['habits-reading-5','false','true'],['habits-reading-6','false','true'],
  ['habits-reading-7','3','1'],['habits-reading-8','not stated','false'],['habits-reading-9','unknown','4'],['habits-reading-10','false','true']
 ]);
});

test('B101 independent listening keeps elapsed time, checked counts and adaptation separate',()=>{
 cases([
  ['continuous-listening-1','Sana','Elin'],['continuous-listening-2','09:20','09:50'],['continuous-listening-3','90','30'],
  ['continuous-listening-4','7','3'],['continuous-listening-5','12','7'],['continuous-listening-6','false','true'],
  ['continuous-listening-7','false','true'],['continuous-listening-8','false','true'],
  ['earlier-listening-1','Ellis','Amir'],['earlier-listening-2','10:10','10:00'],['earlier-listening-3','09:50','10:10'],
  ['earlier-listening-4','10:00','09:50'],['earlier-listening-5','false','true'],['earlier-listening-6','false','true'],
  ['earlier-listening-7','8','5'],['earlier-listening-8','5','8'],
  ['habits-listening-1','Omar','Nia'],['habits-listening-2','6','4'],['habits-listening-3','10','15'],['habits-listening-4','4','6'],
  ['habits-listening-5','yes','no'],['habits-listening-6','no','yes'],['habits-listening-7','no','yes'],['habits-listening-8','unknown','yes']
 ]);
});

test('B101 references cover seven persons and scoped contrasts, not all advanced grammar',()=>{
 for(const persons of [perfectContinuousPersons,pastPerfectPersons])assert.deepEqual(persons.map(r=>r[0]),['I','you','he','she','it','we','they']);
 assert.equal(perfectContinuousPatterns.length,18);assert.equal(pastPerfectPatterns.length,20);assert.equal(habitPatterns.length,24);
 for(const [r,n] of [[perfectContinuousReference,25],[pastPerfectReference,27],[habitsReference,24]]){
  assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(r.practice.length,16);
  assert.equal(new Set(r.rows.map(row=>row[0])).size,n);assert(/не все|не полн/.test(r.intro.join(' ')));
 }
 assert(perfectContinuousPersons.find(r=>r[0]==='you')[4].includes('Yes, I have'));
 assert(pastPerfectPersons.find(r=>r[0]==='you')[4].includes('Yes, I had'));
});

test('B101 adds 96 IPA cards and idioms without losing seven published card IDs',()=>{
 assert.equal(b101Vocabulary.length,96);assert.equal(new Set(b101Vocabulary.map(c=>c.word)).size,96);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id===`B101-v${n}`));
 assert(vocabulary.some(c=>c.id==='B101-x-get-used-to'&&c.word==='get used to'));
 for(const c of b101Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['get the hang of','from scratch','out of practice','piece together','rule out','be used to','become accustomed to'])assert(b101Vocabulary.some(c=>c.word===word),word);
 assert.equal(b101Vocabulary.find(c=>c.word==='cupboard').ipa,'/ˈkʌbəd/');
 const cards=modules.find(m=>m.id==='B101').vocabulary;
 assert.equal(cards.length,103);assert.equal(new Set(cards.map(c=>c.word)).size,103);
});

test('B101 expansion preserves original drills, multiline archive, notes and SRS without inherited credit',()=>{
 const s=freshState();s.moduleProgress.B101={selfChecked:true,date:'2026-09-22'};s.drafts.B101='Synthetic old note.';
 s.cards['B101-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B101';s.navigation.sections.course='module/B101';
 s.navigation.pages['module/B101']={scroll:500,focus:'drill1',fields:{drill0:'waiting',drill1:'had\nOriginal answer',drill2:'getting up'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B101').total,301);assert.equal(topicWorkProgress(copy,'B101').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B101').drills.map(d=>d[0]),['I have been ___ for an hour. (wait)','She ___ left before we arrived.','I am used to ___ early. (get up)']);
 delete s.navigation;assert.equal(validateState(s).drafts.B101,s.drafts.B101);
});

test('B101 multiline exam drafts and two attempts survive import with all open work pending',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('130–170'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B101').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B101').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('B101 full first-pass progress has 301 steps but open work is not mastered',()=>{
 const s=freshState();
 for(const u of units){
  const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T13:00:00Z');
  assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 }
 const progress=topicWorkProgress(s,'B101');assert.equal(progress.total,301);assert.equal(progress.completed,301);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B101'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B101'),progress);
});

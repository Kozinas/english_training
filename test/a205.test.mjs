import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {verbPatterns,multiwordPatterns,timePatterns,patternsReference,phrasalReference,timeReference} from '../data/action-reference.mjs';
import {a205Vocabulary} from '../data/lexicon-a205.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='A205');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='A205-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};

test('A205 has connected unequal units, all skills and fresh tests for all goals',()=>{
 assert.deepEqual(units.map(u=>u.id),['A205-patterns','A205-phrasal','A205-time']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[88,82,96]);
 assert.deepEqual(units.map(u=>u.examples.length),[26,24,26]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[22,22],[22,22],[24,24]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'A204-relative');
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=4900);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);
  assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?280:160));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));
   for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);
   for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
  }
 }
 assert.equal(new Set(passages).size,6);
});

test('A205 has fifteen complete 100–140 word writing models with manual assessment',()=>{
 const paragraphs=all.filter(t=>t.prompt.includes('100–140'));assert.equal(paragraphs.length,15);
 for(const t of paragraphs){const n=t.answer.split(/\s+/).length;assert(n>=100&&n<=140,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('100–140')).length,3);
});

test('A205 verb patterns have independent inflection, preposition and object keys',()=>{
 cases([
  ['patterns-forms-1','making','to make'],['patterns-forms-2','wasting','to waste'],['patterns-forms-3','checking','checked'],
  ['patterns-forms-4','working','to work'],['patterns-forms-5','to leave','leaving'],['patterns-forms-6','to find','finding'],
  ['patterns-forms-7','to wash','washing'],['patterns-forms-8','to write','writing'],['patterns-forms-9','to sit','sitting'],
  ['patterns-forms-10','cooking','cook'],['patterns-forms-11','meeting','meet'],['patterns-forms-12','waiting','wait'],
  ['patterns-forms-13','her','she'],['patterns-forms-14','meeting','to meet'],['patterns-forms-15','She enjoys painting.','She enjoys to paint.'],
  ['patterns-forms-16','I want to learn.','I want to learns.'],['patterns-forms-17','Invite them to join us.','Invite they to join we.'],
  ['patterns-review-4','Did he finish packing?','Did he finished packing?']
 ]);
});

test('A205 stop, remember, purpose and try do not force unsupported outcomes',()=>{
 cases([
  ['patterns-meaning-1','eating','walking'],['patterns-meaning-2','purpose','stopped activity'],['patterns-meaning-3','no','yes'],
  ['patterns-meaning-4','past','future'],['patterns-meaning-5','unknown','known'],['patterns-meaning-6','not stated','true'],
  ['patterns-meaning-7','to','for'],['patterns-meaning-8','yes','no'],['patterns-test-a-6','yes','no'],
  ['patterns-test-b-6','no','yes'],['patterns-test-b-7','no','yes'],['patterns-test-b-8','unknown','known']
 ]);
 for(const id of ['patterns-meaning-9','patterns-meaning-10','patterns-meaning-12','patterns-test-a-19'])assert(isOpen(task(id)),id);
 assert(task('patterns-test-a-19').answer.startsWith('Нет'));
 assert(verbPatterns.find(r=>r[0]==='try to do')[4].includes('не утверждает'));
});

test('A205 preserves normative alternatives and distinguishes finite from ing forms',()=>{
 assert(isOpen(task('patterns-forms-19')));assert(task('patterns-forms-19').answer.includes('I like reading books. I like to read books.'));
 assert(isOpen(task('patterns-test-a-21')));assert(task('patterns-test-a-21').answer.includes('It started raining. It started to rain.'));
 assert(verbPatterns.some(r=>r[0]==='practise / practice'));assert(verbPatterns.some(r=>r[0]==='look forward to'));
 cases([['patterns-sounds-1','/tə/','/θə/'],['patterns-sounds-2','/ɪŋ/','/ɪŋɡ/'],['patterns-test-a-4','visiting','visit'],['patterns-test-b-10','changing','to change']]);
 assert(isOpen(task('patterns-forms-20')));assert(isOpen(task('patterns-sounds-7')));
});

test('A205 phrasal pronouns, inseparable objects and tense use independent keys',()=>{
 cases([
  ['phrasal-forms-1','Turn it off.','Turn off it.'],['phrasal-forms-2','Write it down.','Write down it.'],
  ['phrasal-forms-3','Look for it.','Look it for.'],['phrasal-forms-4','Look after her.','Look her after.'],
  ['phrasal-forms-5','Put them away.','Put away them.'],['phrasal-forms-6','Pick her up.','Pick up her.'],
  ['phrasal-forms-7','Hand it in.','Hand in it.'],['phrasal-forms-8','We ran out of it.','We ran it out of.'],
  ['phrasal-forms-9','Did they give it back?','Did they gave it back?'],['phrasal-forms-10','She can turn it on.','She can turns it on.'],
  ['phrasal-forms-11','got','get'],['phrasal-forms-12','seeing','see'],['phrasal-forms-13','to put','putting'],['phrasal-forms-14','logging','log'],
  ['phrasal-test-b-3','Fill it out.','Fill out it.'],['phrasal-test-b-4','Did they take their hats off?','Did they took their hats off?']
 ]);
 for(const id of ['phrasal-forms-15','phrasal-forms-16','phrasal-forms-18','phrasal-test-a-11'])assert(isOpen(task(id)));
});

test('A205 multi-word meanings do not conflate storage, cancellation and fulfilment',()=>{
 cases([
  ['phrasal-meaning-1','store','discard'],['phrasal-meaning-2','cancel','postpone'],['phrasal-meaning-3','postpone','cancel'],
  ['phrasal-meaning-4','search in a source','look at the ceiling'],['phrasal-meaning-5','refuse','make louder'],
  ['phrasal-meaning-6','not stated','true'],['phrasal-meaning-7','no','yes'],['phrasal-meaning-8','no','yes'],
  ['phrasal-test-a-9','no','yes'],['phrasal-test-b-9','no','yes'],['phrasal-test-a-19','no','yes']
 ]);
 for(const id of ['phrasal-meaning-9','phrasal-meaning-10','phrasal-meaning-12','phrasal-test-b-22'])assert(isOpen(task(id)));
 assert(multiwordPatterns.find(r=>r[0]==='take off')[4].includes('самолёт'));
 assert(multiwordPatterns.find(r=>r[0]==='look for')[3]==='look for it');
});

test('A205 calendar keys cover specific days, zero preposition and UK/US weekends',()=>{
 cases([
  ['time-forms-1','at','in'],['time-forms-2','on','in'],['time-forms-3','in','on'],['time-forms-4','in','at'],
  ['time-forms-5','on','in'],['time-forms-6','in','on'],['time-forms-7','at','on'],['time-forms-8','on','in'],
  ['time-forms-9','at','in'],['time-forms-10','in','at'],['time-forms-11','none','on'],['time-forms-12','none','in'],
  ['time-forms-13','none','on'],['time-forms-14','in','none'],['time-forms-15','at','in'],['time-forms-15','on','in'],
  ['time-forms-16','See you tomorrow.','See you on tomorrow.'],['time-forms-17','We meet on Friday morning.','We meet in Friday morning.'],
  ['time-test-a-5','at','in'],['time-test-a-5','on','in'],['time-test-b-5','in','none']
 ]);
 assert(isOpen(task('time-test-a-24')));assert(task('time-test-a-24').answer.includes('конкретной ночи'));
});

test('A205 time contrasts separate duration, deadline, delay and completion',()=>{
 cases([
  ['time-meaning-1','in','for'],['time-meaning-2','for','in'],['time-meaning-3','in','during'],['time-meaning-4','during','for'],
  ['time-meaning-5','by','until'],['time-meaning-6','until','by'],['time-meaning-7','to','at'],['time-meaning-8','of','in'],
  ['time-test-a-6','for','in'],['time-test-a-7','by','until'],['time-test-a-8','until','by'],
  ['time-test-b-6','in','for'],['time-test-b-7','during','for'],['time-test-b-8','by','until']
 ]);
 for(const id of ['time-meaning-9','time-meaning-10','time-meaning-11','time-test-b-23'])assert(isOpen(task(id)));
 assert(timePatterns.some(r=>r[0]==='in + completion'));assert(timePatterns.some(r=>r[0]==='in + delay'));
});

test('A205 interaction distinguishes speaker roles, full refusals and pending replies',()=>{
 cases([
  ['time-offers-1','speaker','listener'],['time-offers-2','listener','speaker'],['time-offers-3','to join','join'],
  ['time-offers-4','wait','to wait'],['time-offers-5','no','yes'],['time-offers-6','no','yes'],
  ['time-test-a-9','speaker','listener'],['time-test-a-10','to try','trying'],['time-test-a-11','unknown','known'],
  ['time-test-b-9','listener','speaker'],['time-test-b-10','wait','to wait'],['time-test-b-11','no','yes']
 ]);
 for(const id of ['time-offers-7','time-offers-8','time-offers-9','time-offers-10','time-test-b-22'])assert(isOpen(task(id)));
 assert(task('time-offers-10').answer.includes('No, not at all. I can wait'));
});

test('A205 reading has independent factual keys with unknown distinct from explicit negative',()=>{
 cases([
  ['patterns-reading-1','woodwork','photography'],['patterns-reading-2','tools','tickets'],['patterns-reading-3','Omar','Nia'],
  ['patterns-reading-4','not stated','false'],['patterns-reading-5','true','false'],['patterns-reading-6','false','true'],
  ['patterns-reading-7','talking','drawing'],['patterns-reading-8','not stated','true'],
  ['phrasal-reading-1','book swap','concert'],['phrasal-reading-2','Jon','Mila'],['phrasal-reading-3','false','not stated'],
  ['phrasal-reading-4','Mila','Jon'],['phrasal-reading-5','3','2'],['phrasal-reading-6','false','true'],
  ['phrasal-reading-7','false','true'],['phrasal-reading-8','false','not stated'],
  ['time-reading-1','Friday','Saturday'],['time-reading-2','false','true'],['time-reading-3','Saturday','Friday'],
  ['time-reading-4','14:30','14:13'],['time-reading-5','16:00','18:00'],['time-reading-6','false','true'],
  ['time-reading-7','not stated','false'],['time-reading-8','delay','duration']
 ]);
});

test('A205 listening uses independent texts with checked times, intent and outcome keys',()=>{
 cases([
  ['patterns-listening-1','Ravi','Beth'],['patterns-listening-2','repair a chair','buy a chair'],['patterns-listening-3','2','3'],
  ['patterns-listening-4','Beth','Ravi'],['patterns-listening-5','false','true'],['patterns-listening-6','false','true'],
  ['phrasal-listening-1','Elena','Owen'],['phrasal-listening-2','term','address'],['phrasal-listening-3','evening','morning'],
  ['phrasal-listening-4','false','true'],['phrasal-listening-5','false','true'],['phrasal-listening-6','Owen','Elena'],
  ['time-listening-1','Dev','Rosa'],['time-listening-2','Thursday','Tuesday'],['time-listening-3','13:30','15:30'],
  ['time-listening-4','45','15'],['time-listening-5','noon','midnight'],['time-listening-6','false','true']
 ]);
 for(const id of ['patterns-listening-7','phrasal-listening-9','time-listening-10'])assert(isOpen(task(id)));
});

test('A205 reference sets are scoped, searchable complete models with useful practice',()=>{
 assert.equal(verbPatterns.length,28);assert.equal(multiwordPatterns.length,30);assert.equal(timePatterns.length,30);
 for(const [r,n] of [[patternsReference,28],[phrasalReference,30],[timeReference,30]]){
  assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(r.practice.length,16);
  assert.equal(new Set(r.rows.map(row=>row[0])).size,n);assert(r.intro.join(' ').includes('не полн')||r.intro.join(' ').includes('не все'));
 }
 assert(multiwordPatterns.find(r=>r[0]==='fill in / fill out')[3].includes('fill it out'));
 assert(timePatterns.find(r=>r[0]==='weekend UK/US')[1].includes('at / on'));
 assert.equal(timeReference.headers[3],'Пример');
 assert.equal(timePatterns.find(r=>r[0]==='offer own action')[3],'Shall I carry the box?');
 assert(timePatterns.every(row=>/[A-Za-z]/.test(row[3])),'Every example column has an English example');
 assert(verbPatterns.find(r=>r[0]==='not to')[4].includes('didn’t decide'));
});

test('A205 preserves original vocabulary IDs and adds 84 cards with IPA and expressions',()=>{
 assert.equal(a205Vocabulary.length,84);assert.equal(new Set(a205Vocabulary.map(c=>c.word)).size,84);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id===`A205-v${n}`));
 assert(vocabulary.some(c=>c.id==='A205-x-put-up-with'&&c.word==='put up with'));
 for(const c of a205Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['give me a hand','that works for me','not at all','turn down','look for','look after','run out of','on time','in time for'])assert(a205Vocabulary.some(c=>c.word===word),word);
 assert.equal(a205Vocabulary.find(c=>c.word==='receipt').ipa,'/rɪˈsiːt/');
 assert.equal(a205Vocabulary.find(c=>c.word==='wrapper').ipa,'/ˈræpə/');
 assert.equal(modules.find(m=>m.id==='A205').vocabulary.length,91);
});

test('A205 expansion preserves old drills, multiline archive, notes and SRS without inherited credit',()=>{
 const s=freshState();s.moduleProgress.A205={selfChecked:true,date:'2026-09-22'};s.drafts.A205='Synthetic old note.';
 s.cards['A205-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/A205';s.navigation.sections.course='module/A205';
 s.navigation.pages['module/A205']={scroll:500,focus:'drill1',fields:{drill0:'reading',drill1:'to\nOriginal answer',drill2:'Turn it off.'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'A205').total,269);assert.equal(topicWorkProgress(copy,'A205').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='A205').drills.map(d=>d[0]),['I enjoy ___. (read)','I decided ___ leave.','Собери: turn / off / it']);
 delete s.navigation;assert.equal(validateState(s).drafts.A205,s.drafts.A205);
});

test('A205 multiline test drafts and two attempts survive import with all open work pending',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('100–140'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'A205').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-23T16:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'A205').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

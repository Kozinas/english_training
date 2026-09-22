import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {personalForms,futurePersons,futureMeanings,futureTime,personalReference,futureReference} from '../data/future-choices.mjs';
import {a105Vocabulary} from '../data/lexicon-a105.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='A105');
const task=id=>units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks)).find(t=>t.id===id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' independent expected answer');assert(!checkAnswer(wrong,t.answer),id+' contrast');}};

test('A105 four naturally sized units publish complete practice, new goal-covered tests and distinct texts',()=>{
 assert.deepEqual(units.map(u=>u.id),['A105-pronouns','A105-plans','A105-will','A105-can']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[78,80,78,92]);
 assert.deepEqual(units.map(u=>u.examples.length),[22,24,24,26]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'A104-did');
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=4000);
  for(const b of u.banks){assert(b.tasks.length>=10);if(b.passage)passages.push(b.passage);}
  assert(u.banks.find(b=>b.kind==='reading').passage.split(/\s+/).length>=210);
  assert(u.banks.find(b=>b.kind==='listening').passage.split(/\s+/).length>=110);
  const practice=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  assert.equal(u.tests.length,2);
  for(const t of u.tests){
   assert(t.tasks.length>=18);assert(t.tasks.every(q=>!practice.has(q.prompt)));
   for(const g of u.goals)assert(t.tasks.some(q=>q.goal===g.id),u.id+'/'+g.id);
   assert(t.tasks.some(q=>q.kind==='sentence'));
   assert(t.tasks.some(q=>q.kind==='text'&&q.prompt.includes('80–110')));
   assert(t.tasks.some(q=>q.kind==='speech'));
  }
 }
 assert.equal(new Set(passages).size,8);
});

test('A105 personal reference includes all seven rows without invented independent its',()=>{
 assert.deepEqual(personalForms.map(r=>r.slice(0,4)),[
  ['I','me','my','mine'],['you','you','your','yours'],['he','him','his','his'],['she','her','her','hers'],
  ['it','it','its','—'],['we','us','our','ours'],['they','them','their','theirs']
 ]);
 assert.equal(personalReference.rows.length,7);assert.equal(personalReference.practice.length,16);
 assert(personalForms.every(r=>r.length===6&&r.every(Boolean)));
 assert(personalForms[6][5].includes('singular they'));
 assert(personalReference.intro.join(' ').includes('не перечень всех местоимений'));
});

test('A105 future reference covers person forms, functions and time limits without binary certainty claims',()=>{
 assert.equal(futurePersons.length,7);assert.equal(futureMeanings.length,14);assert.equal(futureTime.length,8);
 assert.equal(futureReference.rows.length,43);assert.equal(futureReference.practice.length,16);
 assert(futureReference.rows.every(r=>r.length===5&&r.every(Boolean)));
 assert(futureReference.intro.join(' ').includes('границы форм не являются непроницаемыми'));
 for(const [s,be] of [['I','am'],['you','are'],['he','is'],['she','is'],['it','is'],['we','are'],['they','are']]){
  const row=futureReference.rows.find(r=>r[0]==='Going to'&&r[1]===s);assert.equal(row[2],`${s} ${be} going to help`);
  assert.equal(futureReference.rows.find(r=>r[0]==='Will'&&r[1]===s)[2],`${s} will help`);
  assert.equal(futureReference.rows.find(r=>r[0]==='Can'&&r[1]===s)[2],`${s} can help`);
 }
});

test('A105 pronoun keys separate subject, object, possessive determiner and independent possession',()=>{
 cases([
  ['A105-pronouns-forms-1','I','me'],['A105-pronouns-forms-2','me','I'],['A105-pronouns-forms-3','her','hers'],
  ['A105-pronouns-forms-4','him','he'],['A105-pronouns-forms-5','us','we'],['A105-pronouns-forms-6','they','them'],
  ['A105-pronouns-forms-7','them','they'],['A105-pronouns-forms-8','it','its'],['A105-pronouns-forms-9','our','ours'],
  ['A105-pronouns-forms-10','ours','our'],['A105-pronouns-forms-11','your','yours'],['A105-pronouns-forms-12','mine','my'],
  ['A105-pronouns-forms-14','her','hers'],['A105-pronouns-forms-15','its',"it's"],['A105-pronouns-forms-16',"it's",'its'],
  ['A105-pronouns-forms-18','This message is for Jo and me.','This message is for Jo and I.'],
  ['A105-pronouns-test-a-4','theirs','their'],['A105-pronouns-test-a-5','her','hers'],
  ['A105-pronouns-test-b-4','ours','our'],['A105-pronouns-test-b-5','him','his']
 ]);
});

test('A105 pronoun keys track speaker roles and ownership, not nearest noun guesses',()=>{
 cases([
  ['A105-pronouns-roles-1','Send it to me.','Send me it.'],['A105-pronouns-roles-4','Explain the problem to us.','Explain us the problem.'],
  ['A105-pronouns-roles-7','listener','speaker'],['A105-pronouns-roles-8','speaker','listener'],
  ['A105-pronouns-reading-1','Rina and Tom','Mia'],['A105-pronouns-reading-2','Mia','Rina'],
  ['A105-pronouns-reading-3','camera','charger'],['A105-pronouns-reading-4','Rina','Mia'],['A105-pronouns-reading-6','false','not stated'],
  ['A105-pronouns-reading-7','no','yes'],['A105-pronouns-reading-8','photos','people'],['A105-pronouns-reading-9','not stated','true'],
  ['A105-pronouns-listening-2','Nora','Evan'],['A105-pronouns-listening-3','folder','notebooks'],
  ['A105-pronouns-listening-6','false','true'],['A105-pronouns-listening-8','true','false'],
  ['A105-pronouns-test-a-10','Mona','me'],['A105-pronouns-test-b-10','Eli','me']
 ]);
});

test('A105 plan keys preserve be, base verbs, short-answer roles and future timetable forms',()=>{
 cases([
  ['A105-plans-forms-1','am','is'],['A105-plans-forms-3','is','are'],['A105-plans-forms-4','cook','cooks'],['A105-plans-forms-5','be','are'],
  ['A105-plans-forms-11','Are you going to stay?','Do you going to stay?'],['A105-plans-forms-15','Yes, I am.',"Yes, I'm."],
  ['A105-plans-forms-16',"No, we aren't.","No, you aren't."],['A105-plans-forms-16',"No, we're not.",'No, we will not.'],
  ['A105-plans-choices-1','place','verb'],['A105-plans-choices-2','verb','place'],['A105-plans-choices-3','in','for'],['A105-plans-choices-4','for','in'],
  ['A105-plans-choices-5','no','yes'],['A105-plans-choices-6','leaves','leave'],['A105-plans-choices-7','start','starts'],
  ['A105-plans-test-a-3','is','are'],['A105-plans-test-a-9','in','for'],['A105-plans-test-a-10','begins','begin'],
  ['A105-plans-test-b-3','is','are'],['A105-plans-test-b-9','for','in'],['A105-plans-test-b-10','opens','open']
 ]);
});

test('A105 plans keep intentions, bookings, partial agreement and completed work distinct',()=>{
 cases([
  ['A105-plans-reading-2','9:30','8:50'],['A105-plans-reading-3','false','true'],['A105-plans-reading-4','8:50','9:30'],
  ['A105-plans-reading-6','false','not stated'],['A105-plans-reading-7','false','true'],['A105-plans-reading-8','no','yes'],
  ['A105-plans-listening-1','Thursday','Tuesday'],['A105-plans-listening-2','4:30','4:45'],['A105-plans-listening-4','false','true'],
  ['A105-plans-listening-6','one hour','two hours'],['A105-plans-listening-7','false','true'],['A105-plans-listening-8','not stated','false'],
  ['A105-plans-test-a-11','false','true'],['A105-plans-test-a-12','not stated','true'],
  ['A105-plans-test-b-11','false','true'],['A105-plans-test-b-12','not stated','true']
 ]);
});

test('A105 will keys distinguish base forms, questions and ordinary future time clauses',()=>{
 cases([
  ['A105-will-forms-1','help','helps'],['A105-will-forms-2','be','are'],['A105-will-forms-3',"won't",'willnt'],['A105-will-forms-4','will',"I'll"],
  ['A105-will-forms-11','When will you leave?','When you will leave?'],['A105-will-forms-14','Yes, we will.','Yes, you will.'],
  ['A105-will-forms-17','arrives','will arrive'],['A105-will-forms-18','rains','will rain'],
  ['A105-will-choices-1','promise','prediction'],['A105-will-choices-2','estimate','completed result'],['A105-will-choices-3','offer','timetable'],
  ['A105-will-test-a-11','writes','will write'],['A105-will-test-a-12','is','will be'],
  ['A105-will-test-b-11','arrives','will arrive'],['A105-will-test-b-12','is','will be']
 ]);
});

test('A105 will reading and audio keys do not turn predictions or promises into success',()=>{
 cases([
  ['A105-will-choices-4','no','yes'],['A105-will-choices-6','no','yes'],
  ['A105-will-reading-2','4','8'],['A105-will-reading-4','false','not stated'],['A105-will-reading-6','false','true'],
  ['A105-will-reading-7','7','12'],['A105-will-reading-8','hall','garden'],['A105-will-reading-9','not stated','true'],
  ['A105-will-listening-1','projector','printer'],['A105-will-listening-3','false','true'],['A105-will-listening-5','no','yes'],
  ['A105-will-listening-7','true','not stated'],['A105-will-listening-8','not stated','true'],
  ['A105-will-test-a-9','not stated','true'],['A105-will-test-a-10','no','yes'],
  ['A105-will-test-b-9','not stated','true'],['A105-will-test-b-10','no','yes']
 ]);
});

test('A105 can/could keys distinguish present request, past ability, permission and speaker roles',()=>{
 cases([
  ['A105-can-forms-1','sing','sings'],['A105-can-forms-2','can','cans'],['A105-can-forms-3','be','are'],
  ['A105-can-forms-7','She can drive.','She can to drive.'],['A105-can-forms-13','Could they hear us?','Did they could hear us?'],
  ['A105-can-forms-16','Yes, I could.','Yes, I can.'],['A105-can-forms-17','I will be able to do it.','I will can do it.'],
  ['A105-can-uses-1','speaker','listener'],['A105-can-uses-2','listener','speaker'],['A105-can-uses-3','offer','skill test'],
  ['A105-can-uses-4','past ability','current request'],['A105-can-uses-5','current request','past ability'],
  ['A105-can-uses-6','permission restriction','lack of skill'],['A105-can-uses-7','no','yes'],['A105-can-uses-8','yes','no'],
  ['A105-can-test-a-7','current request','past skill'],['A105-can-test-a-8','speaker','listener'],['A105-can-test-a-9','rule','skill test'],
  ['A105-can-test-b-7','current request','past skill'],['A105-can-test-b-8','speaker','listener']
 ]);
});

test('A105 can constraints distinguish missing ability from limited access and pending agreement',()=>{
 cases([
  ['A105-can-reading-1','Tess','Amir'],['A105-can-reading-2','Amir','Tess'],['A105-can-reading-3','true','false'],
  ['A105-can-reading-4','no','yes'],['A105-can-reading-5','no','yes'],['A105-can-reading-6','12','10'],
  ['A105-can-reading-7','false','not stated'],['A105-can-reading-8','false','true'],
  ['A105-can-listening-2','Tuesday','Monday'],['A105-can-listening-3','3','4'],['A105-can-listening-4','false','true'],
  ['A105-can-listening-6','no','yes'],['A105-can-listening-7','false','true'],['A105-can-listening-8','no','yes'],
  ['A105-can-test-a-10','not stated','true'],['A105-can-test-a-11','false','true'],
  ['A105-can-test-b-10','not stated','true'],['A105-can-test-b-11','false','true']
 ]);
});

test('A105 sound judgments accept accent variation and reject transcript-based pronunciation claims',()=>{
 cases([
  ['A105-can-sounds-1','yes','no'],['A105-can-sounds-2','yes','no'],['A105-can-sounds-3','yes','no'],
  ['A105-can-sounds-4','no','yes'],['A105-can-sounds-5','no','yes'],
  ['A105-can-test-a-12','yes','no'],['A105-can-test-a-13','no','yes'],
  ['A105-can-test-b-12','yes','no'],['A105-can-test-b-13','no','yes']
 ]);
 assert.equal(task('A105-will-forms-20').kind,'speech');
 assert.equal(task('A105-can-test-a-19').kind,'speech');assert.equal(task('A105-can-test-b-20').kind,'speech');
});

test('A105 genuinely ambiguous choices and participant references require semantic review',()=>{
 for(const id of ['A105-pronouns-roles-10','A105-pronouns-test-a-12','A105-pronouns-test-b-12',
  'A105-plans-choices-8','A105-plans-test-a-13','A105-plans-test-b-13',
  'A105-will-choices-7','A105-will-choices-8','A105-will-test-a-13',
  'A105-can-uses-9','A105-can-uses-10','A105-can-uses-12'])assert(isOpen(task(id)),id);
});

test('A105 complete paragraph models meet their own stated lengths without word-count grading learners',()=>{
 let count=0;
 for(const u of units)for(const b of [...u.banks,...u.tests])for(const t of b.tasks){
  const range=t.prompt.match(/(\d+)–(\d+) слов/);if(!range)continue;
  const n=t.answer.trim().split(/\s+/).length;assert(n>=+range[1]&&n<=+range[2],t.id+' '+n);count++;
 }
 assert.equal(count,14);
});

test('A105 84 new cards include contextual nonliteral chunks and preserve seven previous cards',()=>{
 assert.equal(a105Vocabulary.length,84);assert.equal(new Set(a105Vocabulary.map(c=>c.id)).size,84);
 assert(a105Vocabulary.every(c=>c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK'));
 for(const word of ['give me a hand','pencil it in','play it by ear','work for me','get back to you','keep you posted','borrow','lend','manage to','be able to','let me know'])assert(a105Vocabulary.some(c=>c.word===word),word);
 assert.equal(modules.find(m=>m.id==='A105').vocabulary.length,91);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id===`A105-v${n}`));
 assert.equal(a105Vocabulary.find(c=>c.word==='estimate').ipa,'/ˈestɪmət/');
});

test('A105 old marks, drill drafts, notes and SRS survive without counting as expanded work',()=>{
 const s=freshState();s.moduleProgress.A105={selfChecked:true,date:'2026-09-22'};s.drafts.A105='Synthetic original topic notes.';
 s.cards['A105-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/A105';s.navigation.sections.course='module/A105';
 s.navigation.pages['module/A105']={scroll:900,focus:'drill1',fields:{drill0:'swim',drill1:'me\nOriginal answer',drill2:'mine'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);
 assert.equal(topicWorkProgress(copy,'A105').total,332);assert.equal(topicWorkProgress(copy,'A105').completed,0);
 assert.equal(copy.schemaVersion,2);delete s.navigation;assert.equal(validateState(s).drafts.A105,s.drafts.A105);
});

test('A105 four exams retain multiline drafts, two immutable attempts and pending speech/text reviews',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),open=u.tests[0].tasks.find(isOpen);
  p.examDraft.answers[open.id]='Synthetic draft.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'A105').completed,0);
  let first;
  for(const t of u.tests){
   p.examDraft.answers=Object.fromEntries(t.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-22T12:00:00Z');
   const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,score.total);assert.equal(score.status,'awaiting-review');
   assert(score.rows.filter(r=>r.status==='pending').length>=t.tasks.filter(isOpen).length);
   assert.equal(topicWorkProgress(s,'A105').completed,1);
   if(t.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);assert.equal(p.examDraft.variant,'b');}
  }
  assert.deepEqual(p.attempts[0],first);assert.equal(p.attempts.length,2);assert.doesNotThrow(()=>validateState(s));
 }
});

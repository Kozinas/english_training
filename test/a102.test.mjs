import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics} from '../data/course.mjs';
import {continuousPersons,ingForms,stateActionPairs,continuousReference} from '../data/present-continuous.mjs';
import {a102Vocabulary} from '../data/lexicon-a102.mjs';
import {checkAnswer,freshState,validateState,unitState,submitUnitTest,startUnitTest,isOpen,buildPlan,reviewCard} from '../web/engine.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';

const units=subtopics.filter(u=>u.topic==='A102');
const task=id=>units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks)).find(t=>t.id===id);
const fill=(s,u)=>{const p=unitState(s,u.id),variant=u.tests.find(t=>t.id===p.examDraft.variant);p.examDraft.answers=Object.fromEntries(variant.tasks.map(t=>[t.id,t.answer.split('|')[0]]));return p;};
const checkCases=cases=>{for(const [id,correct,wrong] of cases){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(correct,t.answer),id+' key');assert(!checkAnswer(wrong,t.answer),id+' contrast');}};

test('A102 reference covers seven persons, forty spelling examples and twelve meaning contrasts',()=>{
 assert.deepEqual(continuousPersons.map(r=>r[0]),['I','you','he','she','it','we','they']);
 for(const [person,be] of [['I','am'],['you','are'],['he','is'],['she','is'],['it','is'],['we','are'],['they','are']]){
  const row=continuousPersons.find(r=>r[0]===person);
  assert.equal(row[1].toLowerCase(),`${person.toLowerCase()} ${be} reading.`);
  assert(row[2].toLowerCase().startsWith(`${person.toLowerCase()} ${be} not reading.`));
  assert.equal(row[3].toLowerCase(),`${be} ${person.toLowerCase()} reading?`);
  assert(row[4].toLowerCase().startsWith(`yes, ${person.toLowerCase()} ${be}.`));
 }
 assert.equal(ingForms.length,40);
 const expected={study:'studying',try:'trying',carry:'carrying',make:'making',write:'writing',see:'seeing',agree:'agreeing',dye:'dyeing',die:'dying',lie:'lying',tie:'tying',run:'running',sit:'sitting',begin:'beginning',open:'opening',visit:'visiting',wait:'waiting',fix:'fixing',panic:'panicking',picnic:'picnicking',travel:'travelling / traveling',cancel:'cancelling / canceling'};
 for(const [base,form] of Object.entries(expected))assert.equal(ingForms.find(r=>r[0]===base)[1],form);
 assert.equal(ingForms.find(r=>r[0]==='dye')[2],ingForms.find(r=>r[0]==='die')[2],'homophones retain separate spelling and sense');
 assert.equal(stateActionPairs.length,12);
 for(const base of ['think','have','see','taste','smell','be','look','feel','weigh','measure','appear','enjoy'])assert(stateActionPairs.some(r=>r[0]===base));
 assert.equal(continuousReference.rows.length,69);assert.equal(continuousReference.practice.length,18);
 assert(continuousReference.intro.join(' ').includes('не перечень всех английских глаголов'));
});

test('A102 units have natural sizes, separate substantial texts, mixed review and fresh complete exams',()=>{
 assert.deepEqual(units.map(u=>u.id),['A102-building','A102-contrast','A102-states']);
 assert.deepEqual(units.map(u=>u.examples.length),[24,22,24]);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[108,78,80]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[22,22],[20,20],[20,20]]);
 const seen=new Set();
 for(const u of units){
  assert(!('minutes' in u)&&!('sessions' in u));assert(u.explanation.map(e=>e.text).join('').length>=3500);
  const read=u.banks.find(b=>b.kind==='reading'),listen=u.banks.find(b=>b.kind==='listening');
  assert(read.passage.split(/\s+/).length>=200);assert(listen.passage.split(/\s+/).length>=110);assert.notEqual(read.passage,listen.passage);
  assert(u.banks.every(b=>b.tasks.length>=10));assert(u.banks.some(b=>b.kind==='review'));
  const practice=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   assert(exam.tasks.some(t=>t.kind==='speech'));assert(exam.tasks.some(t=>t.kind==='text'));
   for(const goal of u.goals)assert(exam.tasks.some(t=>t.goal===goal.id));
   for(const t of exam.tasks){assert(!practice.has(t.prompt),t.id);assert(!seen.has(t.prompt),'Repeated exam prompt: '+t.id);seen.add(t.prompt);}
  }
 }
});

test('A102 independent keys check be agreement, question roles, -ing spelling and final sound',()=>{
 checkCases([
  ['A102-building-practice-1','am','is'],['A102-building-practice-2','are','is'],
  ['A102-building-practice-3','is','are'],['A102-building-practice-4','are','is'],['A102-building-practice-5','are','is'],
  ['A102-building-practice-6','She is carrying a box.','She carrying a box.'],
  ['A102-building-practice-7','We are making a sign.','We are makes a sign.'],
  ['A102-building-practice-18','Which bag is the visitor carrying?','Which is the visitor carrying bag?'],
  ['A102-building-practice-19','Are you listening?','Do you are listening?'],
  ['A102-building-practice-20','Yes, I am.',"Yes, I'm."],
  ['A102-building-practice-21',"No, we're not.",'No, you are not.'],
  ['A102-building-spelling-1','studying','studing'],['A102-building-spelling-2','trying','triing'],
  ['A102-building-spelling-4','carrying','carring'],['A102-building-spelling-6','writing','writting'],
  ['A102-building-spelling-8','seeing','seing'],['A102-building-spelling-9','agreeing','agreing'],
  ['A102-building-spelling-10','dyeing','dying'],['A102-building-spelling-11','lying','lieing'],
  ['A102-building-spelling-12','tying','tieing'],['A102-building-spelling-13','running','runing'],
  ['A102-building-spelling-14','stopping','stoping'],['A102-building-spelling-15','swimming','swiming'],
  ['A102-building-spelling-16','beginning','begining'],['A102-building-spelling-17','opening','openning'],
  ['A102-building-spelling-18','visiting','visitting'],['A102-building-spelling-19','waiting','waitting'],
  ['A102-building-spelling-20','fixing','fixxing'],['A102-building-spelling-23','panicking','panicing'],
  ['A102-building-sounds-1','ŋ','g'],['A102-building-sounds-2','no','yes'],
  ['A102-building-sounds-3','no','yes'],['A102-building-sounds-4','yes','no'],
  ['A102-building-test-a-8','picnicking','picnicing'],['A102-building-test-b-10','lying','lieing']
 ]);
});

test('A102 accepts regional spellings and negative contractions without losing meaning',()=>{
 for(const [id,accepted,rejected] of [
  ['A102-building-spelling-21',['travelling','traveling'],['travellling']],
  ['A102-building-spelling-22',['cancelling','canceling'],['canceleing']],
  ['A102-building-practice-13',["She isn't reading the notice.","She's not reading the notice.","She’s not reading the notice."],['She is reading the notice.']],
  ['A102-building-practice-14',['They are not waiting outside.',"They aren't waiting outside.","They're not waiting outside."],["They don't waiting outside."]],
  ['A102-building-test-b-15',['No, I am not.',"No, I'm not."],["No, I amn't."]],
  ['A102-building-test-a-12',['Are the neighbours painting the gate?','Are the neighbors painting the gate?'],['Do the neighbours painting the gate?']],
  ['A102-contrast-test-b-11',['Are the neighbors moving their table?','Are the neighbours moving their table?'],['Are the neighbors move their table?']],
  ['A102-states-test-a-11',['Is the artist thinking about the colors?','Is the artist thinking about the colours?'],['Does the artist thinking about the colors?']],
  ['A102-states-reading-10',['organiser','organizer','the organizer'],['Leon']]
 ]){const t=task(id);for(const answer of accepted)assert(checkAnswer(answer,t.answer),id+' '+answer);for(const answer of rejected)assert(!checkAnswer(answer,t.answer),id+' '+answer);}
});

test('A102 contrasts process, temporary repetition, time scale and evidence rather than marker words',()=>{
 checkCases([
  ['A102-contrast-practice-1','walks','is walking'],['A102-contrast-practice-2','is walking','walks'],
  ['A102-contrast-practice-3','saves','is saving'],['A102-contrast-practice-4','is saving','saves'],
  ['A102-contrast-practice-7','no','yes'],['A102-contrast-practice-8','no','yes'],
  ['A102-contrast-practice-9','is getting','is'],['A102-contrast-practice-10','no','yes'],
  ['A102-contrast-practice-16','yes','no'],['A102-contrast-practice-17','no','yes'],
  ['A102-contrast-practice-18','no','yes'],
  ['A102-contrast-reading-1','the library','festival desk'],['A102-contrast-reading-2','festival desk','library'],
  ['A102-contrast-reading-4','B','F'],['A102-contrast-reading-5','F','B'],
  ['A102-contrast-reading-9','not stated','yes'],['A102-contrast-reading-10','not stated','yes'],
  ['A102-contrast-listening-1','train','bus'],['A102-contrast-listening-2','bus','train'],
  ['A102-contrast-listening-4','no','yes'],['A102-contrast-listening-7','not stated','yes'],
  ['A102-contrast-test-a-5','no','yes'],['A102-contrast-test-a-13','yes','no'],
  ['A102-contrast-test-b-7','are becoming','are'],['A102-contrast-test-b-14','no','yes']
 ]);
});

test('A102 states/action keys distinguish a word meaning and the subject role',()=>{
 checkCases([
  ['A102-states-practice-1','know','am knowing'],['A102-states-practice-2','needs','is needing'],
  ['A102-states-practice-4','belongs','is belonging'],['A102-states-practice-6','contains','is containing'],
  ['A102-states-practice-7','think','am thinking'],['A102-states-practice-8','am thinking','think'],
  ['A102-states-practice-9','has','is having'],['A102-states-practice-10','is having','has'],
  ['A102-states-practice-11','tastes','is tasting'],['A102-states-practice-12','is tasting','tastes'],
  ['A102-states-practice-13','smell','are smelling'],['A102-states-practice-14','is smelling','smells'],
  ['A102-states-practice-15','weighs','is weighing'],['A102-states-practice-16','is weighing','weighs'],
  ['A102-states-practice-18','Does she need a new cable?','Is she needing a new cable?'],
  ['A102-states-practice-19','Are they having lunch?','Do they having lunch?'],
  ['A102-states-reading-1','Mira','Leon'],['A102-states-reading-4','Leon','Mira'],
  ['A102-states-reading-7','no','yes'],['A102-states-reading-9','yes','no'],
  ['A102-states-listening-3','another explanation','lunch'],['A102-states-listening-4','no','yes'],
  ['A102-states-listening-8','not stated','yes'],
  ['A102-states-test-a-3','has','is having'],['A102-states-test-a-4','is having','has'],
  ['A102-states-test-b-5','thinks','is thinking'],['A102-states-test-b-6','is thinking','thinks']
 ]);
});

test('A102 context-sensitive alternatives stay open and all matching samples still await review',()=>{
 for(const id of ['A102-contrast-practice-19','A102-contrast-practice-24','A102-states-practice-22','A102-states-practice-24','A102-states-test-a-14','A102-states-test-b-14'])assert(isOpen(task(id)),id);
 const s=freshState(),u=units[0],p=fill(s,u);p.examDraft.answers['A102-building-test-a-10']='dying';
 const result=submitUnitTest(s,u.id,'2026-09-21T10:00:00Z');
 assert.equal(result.correct,result.total-1);assert.equal(result.status,'awaiting-review');
 const spelling=result.goals.find(g=>g.id==='spelling');assert.equal(spelling.retry,1);assert.equal(spelling.bank,'spelling');
 assert.equal(result.rows.find(r=>r.id==='A102-building-test-a-19').status,'pending');
 assert.equal(result.rows.find(r=>r.id==='A102-building-test-a-21').status,'pending');
 assert.doesNotThrow(()=>validateState(s));
});

test('A102 contains full long models and contextual cards for every declared ing base',()=>{
 for(const [id,min,max] of [['A102-building-production-5',80,110],['A102-building-production-6',80,110],['A102-contrast-production-4',100,140],['A102-states-production-6',100,140]]){
  const t=task(id),count=t.answer.split(/\s+/).length;assert(count>=min&&count<=max,`${id}: ${count}`);assert(!t.answer.includes('...'));
 }
 for(const [id,count] of [['A102-building-production-11',8],['A102-contrast-production-8',12]])assert.equal((task(id).answer.match(/(?:^| )[AB]: /g)||[]).length,count);
 const cards=modules.find(m=>m.id==='A102').vocabulary;assert.equal(a102Vocabulary.length,84);assert.equal(cards.length,91);
 for(let n=1;n<=6;n++)assert(cards.some(v=>v.id===`A102-v${n}`));assert(cards.some(v=>v.word==='look after'));
 for(const [base,forms,ipa] of ingForms){const c=cards.find(v=>v.id===`A102-x-ing-${base}`);assert.equal(c.word,forms.split(' / ')[0]);assert.equal(c.ipa,`/${ipa}/`);assert(c.context.includes(c.word));}
 for(const word of ['for now','have trouble with','make sense','get the point','work out','sort out','put away','in progress'])assert(cards.some(v=>v.word===word&&v.context&&v.note));
 assert.equal(new Set(a102Vocabulary.map(v=>v.id)).size,a102Vocabulary.length);
});

test('A102 keeps old notes/SRS, multiline drafts and immutable earlier attempts without claiming mastery',()=>{
 const s=freshState();s.drafts.A102='Synthetic legacy note; not learner evidence.';
 s.cards['A102-v1']=reviewCard(null,'good',Date.UTC(2026,8,21));s.cards['A101-x-form-work']=reviewCard(null,'good',Date.UTC(2026,8,21));
 s.moduleProgress.A102={selfChecked:true,date:'2026-09-21T09:00:00Z'};
 s.placement={assessmentVersion,date:'2026-09-21T09:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};
 assert.deepEqual(validateState(structuredClone(s)),s);assert(buildPlan(s).items.some(m=>m.id==='A102'));
 const u=units[2],p=unitState(s,u.id);
 p.examDraft.answers['A102-states-test-a-16']='Ava thinks the guide is useful.\nThis is an unfinished synthetic paragraph.';
 s.bookmark={route:'unit/A102-states/test',scroll:1600,focus:'answer-A102-states-test-a-16'};
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(s.schemaVersion,2);
 fill(s,u);submitUnitTest(s,u.id,'2026-09-21T10:00:00Z');const first=structuredClone(p.attempts[0]);
 startUnitTest(s,u.id);assert.equal(p.examDraft.variant,'b');fill(s,u);const second=submitUnitTest(s,u.id,'2026-09-22T10:00:00Z');
 assert.equal(p.attempts.length,2);assert.deepEqual(p.attempts[0],first);assert.equal(second.status,'awaiting-review');
 assert.doesNotThrow(()=>validateState(s));
});

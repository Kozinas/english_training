import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {pastBe,pastRegular,pastIrregular,pastTime,pastSimpleReference} from '../data/past-simple.mjs';
import {a104Vocabulary} from '../data/lexicon-a104.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
import {navigationFieldLimit} from '../web/navigation-state.mjs';
const units=subtopics.filter(u=>u.topic==='A104');
const task=id=>units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks)).find(t=>t.id===id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' independent key');assert(!checkAnswer(wrong,t.answer),id+' contrast');}};

test('A104 naturally sized units cover forms, sound, evidence and independent production',()=>{
 assert.deepEqual(units.map(u=>u.id),['A104-be','A104-actions','A104-did']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[78,84,80]);
 assert.deepEqual(units.map(u=>u.examples.length),[24,24,24]);
 const passages=[];
 for(const u of units){
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=4000);
  assert.equal(u.tests.length,2);
  for(const b of u.banks){assert(b.tasks.length>=10);if(b.passage)passages.push(b.passage);}
  assert(u.banks.find(b=>b.kind==='reading').passage.split(/\s+/).length>=210);
  assert(u.banks.find(b=>b.kind==='listening').passage.split(/\s+/).length>=110);
  const practice=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const t of u.tests){
   assert.equal(t.tasks.length,20);assert(t.tasks.every(q=>!practice.has(q.prompt)));
   for(const g of u.goals)assert(t.tasks.some(q=>q.goal===g.id));
   assert(t.tasks.some(q=>q.kind==='sentence'));assert(t.tasks.some(q=>q.kind==='text'&&/80–110/.test(q.prompt)));
   assert(t.tasks.some(q=>q.kind==='speech'));
  }
 }
 assert.equal(new Set(passages).size,6);
});

test('A104 reference declares scoped sets, all personal rows and UK/US variants',()=>{
 assert.deepEqual(pastBe.map(r=>r.slice(0,2)),[['I','was'],['you','were'],['he','was'],['she','was'],['it','was'],['we','were'],['they','were']]);
 assert.equal(pastRegular.length,30);assert.equal(pastIrregular.length,30);assert.equal(pastTime.length,10);
 assert.equal(pastSimpleReference.rows.length,84);assert.equal(pastSimpleReference.practice.length,16);
 assert(pastSimpleReference.rows.every(r=>r.length===5&&r.every(Boolean)));
 assert(pastSimpleReference.intro.join(' ').includes('не полный список'));
 assert.equal(pastRegular.find(r=>r[0]==='travel')[1],'travelled / traveled');
 assert.equal(pastRegular.find(r=>r[0]==='cancel')[1],'cancelled / canceled');
 const read=pastIrregular.find(r=>r[0]==='read');assert.deepEqual(read.slice(0,3),['read','read','red']);
 assert(pastSimpleReference.rows.find(r=>r[0]==='Неправильный'&&r[2]==='ate')[4].includes('/eɪt/'));
});

test('A104 -ed reference classifications depend on sounds and do not misclassify studied',()=>{
 for(const [base,past,ending] of [['work','worked','t'],['like','liked','t'],['wash','washed','t'],['fix','fixed','t'],['study','studied','d'],['play','played','d'],['live','lived','d'],['need','needed','ɪd'],['visit','visited','ɪd'],['decide','decided','ɪd']]){
  const row=pastRegular.find(r=>r[0]===base);assert.equal(row[1],past);assert.equal(row[3],ending);
 }
 cases([
  ['A104-actions-sounds-1','t','d'],['A104-actions-sounds-2','d','ɪd'],['A104-actions-sounds-3','ɪd','t'],
  ['A104-actions-sounds-5','d','ɪd'],['A104-actions-sounds-6','3','2'],['A104-actions-sounds-7','1','2'],['A104-actions-sounds-8','/red/','/riːd/'],
  ['A104-actions-test-a-8','t','ɪd'],['A104-actions-test-a-9','d','t'],['A104-actions-test-a-10','ɪd','d'],
  ['A104-actions-test-b-8','t','ɪd'],['A104-actions-test-b-9','d','t'],['A104-actions-test-b-10','ɪd','t']
 ]);
});

test('A104 was/were keys respect agreement, question roles and time-specific evidence',()=>{
 cases([
  ['A104-be-practice-1','was','were'],['A104-be-practice-2','were','was'],['A104-be-practice-4','was','were'],
  ['A104-be-practice-5','was','were'],['A104-be-practice-7','were','was'],
  ['A104-be-reading-3','6','12'],['A104-be-reading-4','no','yes'],['A104-be-reading-6','false','true'],
  ['A104-be-reading-7','not stated','false'],['A104-be-reading-8','true','not stated'],['A104-be-reading-9','not stated','true'],
  ['A104-be-listening-3','6:15','6:30'],['A104-be-listening-4','5','8'],['A104-be-listening-8','not stated','yes'],
  ['A104-be-test-a-1','was','were'],['A104-be-test-a-2','were','was'],['A104-be-test-a-3','was','were'],
  ['A104-be-test-b-1','were','was'],['A104-be-test-b-2','was','were'],['A104-be-test-b-3','were','was']
 ]);
});

test('A104 affirmative keys distinguish regular spelling and irregular meanings',()=>{
 cases([
  ['A104-actions-forms-2','visited','visitted'],['A104-actions-forms-4','carried','carryed'],['A104-actions-forms-5','stopped','stoped'],
  ['A104-actions-forms-10','enjoyed','enjoied'],['A104-actions-forms-11','preferred','prefered'],
  ['A104-actions-forms-12','travelled','travellled'],['A104-actions-forms-12','traveled','traveld'],
  ['A104-actions-forms-13','bought','brought'],['A104-actions-forms-14','brought','bought'],
  ['A104-actions-forms-15','sent','spent'],['A104-actions-forms-16','spent','sent'],['A104-actions-forms-20','put','putted'],
  ['A104-actions-forms-21','chose','choosed'],['A104-actions-forms-22','forgot','forgetted'],
  ['A104-actions-test-a-1','carried','carryed'],['A104-actions-test-a-3','chose','choosed'],
  ['A104-actions-test-b-1','enjoyed','enjoied'],['A104-actions-test-b-3','forgot','forgetted']
 ]);
});

test('A104 action reading/listening keys distinguish unfinished, unknown and completed results',()=>{
 cases([
  ['A104-actions-reading-3','false','true'],['A104-actions-reading-4','40','14'],
  ['A104-actions-reading-5','not stated','true'],['A104-actions-reading-7','not stated','false'],['A104-actions-reading-9','true','not stated'],
  ['A104-actions-listening-3','2','3'],['A104-actions-listening-5','false','not stated'],['A104-actions-listening-7','true','not stated'],['A104-actions-listening-8','not stated','true'],
  ['A104-actions-test-a-11','not stated','true'],['A104-actions-test-a-12','true','not stated'],['A104-actions-test-a-13','no','yes'],
  ['A104-actions-test-b-11','not stated','false'],['A104-actions-test-b-12','true','not stated'],['A104-actions-test-b-13','yes','no']
 ]);
});

test('A104 did keys distinguish base forms, be and subject/object who questions',()=>{
 cases([
  ['A104-did-forms-1','know','knew'],['A104-did-forms-2','join','joined'],['A104-did-forms-3','have','had'],['A104-did-forms-4','do','did'],
  ['A104-did-forms-5','were','did'],['A104-did-forms-6','did','were'],
  ['A104-did-questions-1','Who called Lee?','Who did called Lee?'],['A104-did-questions-2','Who did Sam call?','Who called Sam?'],
  ['A104-did-questions-2','Whom did Sam call?','Whom did Sam called?'],
  ['A104-did-questions-7','Yes, I did.','Yes, you did.'],['A104-did-questions-8',"No, we didn't.","No, I didn't."],
  ['A104-did-questions-10','Yes, I did.',"No, I didn't."],['A104-did-questions-11',"No, I didn't.",'Yes, I did.'],
  ['A104-did-test-a-6','Who phoned Rob?','Who did phone Rob?'],['A104-did-test-a-7','Who did Ada phone?','Who phoned Ada?'],
  ['A104-did-test-b-6','Who invited Kim?','Who did invited Kim?'],['A104-did-test-b-7','Who did Bo invite?','Who invited Bo?']
 ]);
});

test('A104 narrative keys retain who did what and scoped negation',()=>{
 cases([
  ['A104-did-reading-2','Mara','Eli'],['A104-did-reading-3','Eli','Mara'],['A104-did-reading-4','false','not stated'],
  ['A104-did-reading-5','not stated','true'],['A104-did-reading-8','false','not stated'],['A104-did-reading-9','no','yes'],
  ['A104-did-listening-1','9:30','9:45'],['A104-did-listening-2','Dana','Mo'],['A104-did-listening-3','false','true'],
  ['A104-did-listening-5','Mo','Lee'],['A104-did-listening-6','true','false'],
  ['A104-did-test-a-11','false','not stated'],['A104-did-test-a-12','not stated','false'],['A104-did-test-a-13','not stated','true'],
  ['A104-did-test-b-11','false','not stated'],['A104-did-test-b-12','not stated','false'],['A104-did-test-b-13','not stated','true']
 ]);
});

test('A104 paragraph models satisfy their own requested length, with no placeholder answers',()=>{
 let paragraphs=0;
 for(const u of units)for(const b of [...u.banks,...u.tests])for(const t of b.tasks){
  const range=t.prompt.match(/(\d+)–(\d+) слов/);
  if(!range)continue;
  const length=t.answer.trim().split(/\s+/).length;assert(length>=Number(range[1])&&length<=Number(range[2]),t.id+' '+length);paragraphs++;
 }
 assert.equal(paragraphs,11);
});

test('A104 vocabulary has 100 contextual cards, idiomatic chunks, retained legacy IDs and no reused new IDs',()=>{
 assert.equal(a104Vocabulary.length,100);assert.equal(new Set(a104Vocabulary.map(c=>c.id)).size,100);
 assert(a104Vocabulary.every(c=>c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK'));
 for(const word of ['change one\'s mind','give up','by mistake','on purpose','find out','set off','get back','run out of','error message'])assert(a104Vocabulary.some(c=>c.word===word),word);
 for(let i=1;i<=6;i++)assert(vocabulary.some(c=>c.id==='A104-v'+i));
 assert.equal(modules.find(m=>m.id==='A104').vocabulary.length,107);
});

test('A104 old exports preserve drill archive, notes and SRS without counting inherited self-check',()=>{
 const s=freshState();s.moduleProgress.A104={selfChecked:true,date:'2026-09-22'};s.drafts.A104='Synthetic old notes.';
 s.cards['A104-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/A104';s.navigation.sections.course='module/A104';
 s.navigation.pages['module/A104']={scroll:1700,focus:'drill0',fields:{drill0:'went\nOriginal answer',drill1:'call',drill2:'were'},details:[]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);
 assert.equal(topicWorkProgress(copy,'A104').completed,0);assert.equal(topicWorkProgress(copy,'A104').total,245);
 assert.equal(copy.schemaVersion,2);assert.equal(navigationFieldLimit('module/A104','drill0'),20000);
 assert.equal(navigationFieldLimit('module/A104','drill3'),0);assert.equal(navigationFieldLimit('module/A104','drill-1'),0);
 delete s.navigation;assert.equal(validateState(s).drafts.A104,'Synthetic old notes.');
});

test('A104 multiline test drafts and two immutable attempts retain pending open work',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),open=u.tests[0].tasks.find(isOpen);
  p.examDraft.answers[open.id]='Synthetic unfinished answer.\nContinue here.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
  assert.equal(topicWorkProgress(s,'A104').completed,0);
  for(const v of u.tests){
   p.examDraft.answers=Object.fromEntries(v.tasks.map(t=>[t.id,t.answer.split('|')[0]]));
   submitUnitTest(s,u.id,'2026-09-22T12:00:00Z');
   const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,score.total);assert.equal(score.status,'awaiting-review');
   assert.equal(topicWorkProgress(s,'A104').completed,1);
   if(v.id==='a'){const first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);assert.equal(p.examDraft.variant,'b');assert.deepEqual(p.attempts[0],first);}
  }
  assert.equal(p.attempts.length,2);assert.doesNotThrow(()=>validateState(s));
 }
});

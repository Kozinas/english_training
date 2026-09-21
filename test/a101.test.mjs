import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics} from '../data/course.mjs';
import {presentPersons,thirdPersonVerbs,frequencyExpressions,presentSimpleReference} from '../data/present-simple.mjs';
import {a101Vocabulary} from '../data/lexicon-a101.mjs';
import {checkAnswer,freshState,validateState,unitState,submitUnitTest,startUnitTest,scoreUnitTest,isOpen,buildPlan,reviewCard} from '../web/engine.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';

const units=subtopics.filter(u=>u.topic==='A101');
const task=id=>units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks)).find(t=>t.id===id);
const fill=(s,u)=>{const p=unitState(s,u.id),variant=u.tests.find(t=>t.id===p.examDraft.variant);p.examDraft.answers=Object.fromEntries(variant.tasks.map(t=>[t.id,t.answer.split('|')[0]]));return p;};

test('A101 reference covers every person, ending class and declared frequency expression',()=>{
 assert.deepEqual(presentPersons.map(r=>r[0]),['I','you','he','she','it','we','they']);
 for(const [person,helper,form] of [['I','do','work'],['you','do','work'],['he','does','works'],['she','does','works'],['it','does','works'],['we','do','work'],['they','do','work']]){
  const row=presentPersons.find(r=>r[0]===person);
  assert.equal(row[1].toLowerCase(),`${person.toLowerCase()} ${form}.`);
  assert(row[2].toLowerCase().startsWith(`${person.toLowerCase()} ${helper} not work.`));
  assert.equal(row[3].toLowerCase(),`${helper} ${person.toLowerCase()} work?`);
  assert(row[4].toLowerCase().startsWith(`yes, ${person.toLowerCase()} ${helper}.`));
 }
 assert.equal(thirdPersonVerbs.length,36);
 const forms={study:['studies','z'],play:['plays','z'],wash:['washes','ɪz'],fix:['fixes','ɪz'],use:['uses','ɪz'],choose:['chooses','ɪz'],work:['works','s'],have:['has','z'],do:['does','z'],go:['goes','z'],say:['says','z'],stop:['stops','s']};
 for(const [base,[form,ending]] of Object.entries(forms)){
  const row=thirdPersonVerbs.find(r=>r[0]===base);assert.equal(row[1],form);assert.equal(row[3],ending);
 }
 assert.equal(thirdPersonVerbs.find(r=>r[0]==='say')[2],'sez');assert.equal(thirdPersonVerbs.find(r=>r[0]==='do')[2],'dʌz');
 for(const phrase of ['always','usually','often','sometimes','occasionally','rarely','hardly ever','never','once a week','twice a week','every other day','every weekday'])assert(frequencyExpressions.some(r=>r[0]===phrase));
 assert.equal(presentSimpleReference.rows.length,70);assert.equal(presentSimpleReference.practice.length,18);
 assert(presentSimpleReference.intro.join(' ').includes('а не словарь всех английских глаголов'));
});

test('A101 has natural-sized units, distinct substantial texts and eight fresh goal-complete tests',()=>{
 assert.deepEqual(units.map(u=>u.id),['A101-forms','A101-negatives','A101-questions','A101-frequency']);
 assert.deepEqual(units.map(u=>u.examples.length),[20,18,22,20]);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[80,68,78,78]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[18,18],[16,16],[20,20],[18,18]]);
 const seen=new Set();
 for(const u of units){
  assert(!('minutes' in u)&&!('sessions' in u));
  const read=u.banks.find(b=>b.kind==='reading'),listen=u.banks.find(b=>b.kind==='listening');
  assert(read.passage.split(/\s+/).length>=180,u.id+' reading');assert(listen.passage.split(/\s+/).length>=100,u.id+' listening');assert.notEqual(read.passage,listen.passage);
  assert(u.banks.every(b=>b.tasks.length>=10));assert(u.banks.some(b=>b.kind==='review'));
  const practice=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   assert(exam.tasks.some(t=>t.kind==='speech'));assert(exam.tasks.some(t=>t.kind==='text'));
   for(const goal of u.goals)assert(exam.tasks.some(t=>t.goal===goal.id));
   for(const t of exam.tasks){assert(!practice.has(t.prompt),t.id);assert(!seen.has(t.prompt),'Repeated test prompt: '+t.id);seen.add(t.prompt);}
  }
 }
});

test('A101 independent keys distinguish spelling, agreement, do-support and audible endings',()=>{
 const cases=[
  ['A101-forms-practice-2','plays','plaies'],['A101-forms-practice-3','studies','studys'],
  ['A101-forms-practice-5','washes','washs'],['A101-forms-practice-6','fixes','fixs'],
  ['A101-forms-practice-7','goes','gos'],['A101-forms-practice-8','does','dos'],
  ['A101-forms-practice-9','has','haves'],['A101-forms-practice-10','says','saies'],
  ['A101-forms-practice-11','uses','usees'],['A101-forms-practice-13','looks','look'],
  ['A101-forms-practice-14','start','starts'],['A101-forms-practice-15','check','checks'],
  ['A101-forms-sounds-1','s','z'],['A101-forms-sounds-2','z','s'],
  ['A101-forms-sounds-3','ɪz','s'],['A101-forms-sounds-6','z','ɪz'],
  ['A101-forms-sounds-7','sez','seɪz'],['A101-forms-sounds-8','dʌz','duːz'],
  ['A101-forms-test-a-7','looks','look'],['A101-forms-test-b-7','show','shows'],
  ['A101-forms-test-a-11','iz','z'],['A101-forms-test-b-10','z','ɪz'],
  ['A101-negatives-practice-3','does not','do not'],['A101-negatives-practice-4','do not','does not'],
  ['A101-negatives-practice-5','have','has'],['A101-negatives-practice-7','do','does'],
  ['A101-negatives-practice-16',"isn't","doesn't"],['A101-negatives-practice-17',"doesn't","isn't"],
  ['A101-negatives-review-1','do not','does not'],['A101-negatives-review-3',"don't","doesn't"],
  ['A101-negatives-test-a-9',"isn't","doesn't"],['A101-negatives-test-a-10',"doesn't","isn't"]
 ];
 for(const [id,correct,wrong] of cases){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(correct,t.answer),id+' key');assert(!checkAnswer(wrong,t.answer),id+' contrast');}
});

test('A101 questions distinguish subject/object, whole wh-groups and the answering speaker',()=>{
 const cases=[
  ['A101-questions-practice-1','does','do'],['A101-questions-practice-2','do','does'],
  ['A101-questions-practice-3','does','do'],['A101-questions-practice-4','do','does'],
  ['A101-questions-practice-5','check','checks'],['A101-questions-practice-7','Does the guide speak English?','Does the guide speaks English?'],
  ['A101-questions-practice-10','What time does the bus leave?','What does the bus leave time?'],
  ['A101-questions-practice-14','is','does'],['A101-questions-practice-15','does','is'],
  ['A101-questions-practice-18','subject','object'],['A101-questions-practice-19','object','subject'],
  ['A101-questions-practice-20','Who calls Leo?','Who does Leo call?'],
  ['A101-questions-practice-21','Who does Mina call?','Who calls Mina?'],
  ['A101-questions-practice-22','work','works'],
  ['A101-questions-practice-24','Yes, I do.','Yes, you do.'],
  ['A101-questions-practice-25','No, we do not.','No, you do not.'],
  ['A101-questions-test-a-9','Who teaches Ben?','Who does Ben teach?'],
  ['A101-questions-test-a-10','Who does Nora teach?','Who teaches Nora?'],
  ['A101-questions-test-b-9','Who phones Alex?','Who does Alex phone?'],
  ['A101-questions-test-b-10','Who does Maya phone?','Who phones Maya?']
 ];
 for(const [id,correct,wrong] of cases){const t=task(id);assert(checkAnswer(correct,t.answer),id+' key');assert(!checkAnswer(wrong,t.answer),id+' role/form');}
});

test('A101 frequency and reading keys preserve time units, word boundaries and unknown facts',()=>{
 const cases=[
  ['A101-forms-reading-2','Tuesday and Thursday','Monday and Thursday'],
  ['A101-forms-reading-6','not stated','false'],['A101-forms-test-a-14','not stated','true'],
  ['A101-negatives-reading-3','not stated','true'],['A101-negatives-reading-5','not stated','false'],
  ['A101-negatives-listening-3','false','not stated'],['A101-negatives-listening-6','not stated','false'],
  ['A101-questions-reading-7','not stated','no'],['A101-questions-listening-2','Saturday','Sunday'],
  ['A101-questions-listening-3','10:30','10:00'],['A101-questions-listening-7','not stated','no'],
  ['A101-frequency-practice-10','every','everyday'],['A101-frequency-practice-11','everyday','every day'],
  ['A101-frequency-practice-12','morning','mornings'],
  ['A101-frequency-practice-15','what time','how often'],['A101-frequency-practice-16','how long','what time'],
  ['A101-frequency-practice-17','how often','how long'],['A101-frequency-practice-18','no','yes'],
  ['A101-frequency-practice-19','no','yes'],['A101-frequency-practice-20','not stated','true'],
  ['A101-frequency-reading-3','twice a week','every weekday'],['A101-frequency-reading-4','2','1'],
  ['A101-frequency-reading-6','false','true'],['A101-frequency-reading-7','not stated','false'],
  ['A101-frequency-reading-9','true','false'],['A101-frequency-listening-3','19:00','07:00'],
  ['A101-frequency-listening-4','45','15'],['A101-frequency-listening-6','not stated','true'],
  ['A101-frequency-listening-7','no','yes'],['A101-frequency-listening-8','no','yes'],
  ['A101-frequency-review-7','no','yes'],['A101-frequency-review-8','no','yes'],
  ['A101-frequency-test-a-7','how long','how often'],['A101-frequency-test-b-8','how often','how long']
 ];
 for(const [id,correct,wrong] of cases){const t=task(id);assert(checkAnswer(correct,t.answer),id+' key');assert(!checkAnswer(wrong,t.answer),id+' scope');}
});

test('A101 contractions retain negation; ambiguous meanings stay open and matching models stay pending',()=>{
 for(const answer of ["She doesn't go there.",'She does not go there.','She doesn’t go there.'])assert(checkAnswer(answer,task('A101-negatives-practice-14').answer));
 for(const answer of ['She goes there.',"She doesn't goes there.","She doesn't to go there."])assert(!checkAnswer(answer,task('A101-negatives-practice-14').answer));
 for(const id of ['A101-negatives-test-b-10','A101-questions-practice-26','A101-frequency-practice-22','A101-frequency-test-a-13','A101-frequency-test-b-13'])assert(isOpen(task(id)),id);
 const u=units[1],s=freshState(),p=fill(s,u);p.examDraft.answers['A101-negatives-test-a-3']='has';
 const result=submitUnitTest(s,u.id,'2026-09-21T10:00:00Z');
 assert.equal(result.correct,result.total-1);assert.equal(result.status,'awaiting-review');
 const support=result.goals.find(g=>g.id==='support');assert.equal(support.retry,1);assert.equal(support.bank,'practice');
 assert.equal(scoreUnitTest(u,p.attempts[0]).rows.find(r=>r.id==='A101-negatives-test-a-13').status,'pending');
 assert.doesNotThrow(()=>validateState(s));
});

test('A101 long writing models are full texts and speech never becomes an automatic pronunciation grade',()=>{
 for(const id of ['A101-frequency-production-6','A101-frequency-production-7']){
  const t=task(id),words=t.answer.split(/\s+/).length;
  assert.equal(t.kind,'text');assert(words>=90&&words<=120,`${id}: ${words}`);assert(!t.answer.includes('...'));
 }
 for(const u of units){
  const s=freshState();fill(s,u);const result=submitUnitTest(s,u.id,'2026-09-21T10:00:00Z');
  for(const t of u.tests[0].tasks.filter(t=>t.kind==='speech'))assert.equal(result.rows.find(r=>r.id===t.id).status,'pending');
  assert.notEqual(result.status,'mastered');
 }
});

test('A101 vocabulary keeps the old cards, covers every reference form and teaches nonliteral chunks',()=>{
 const cards=modules.find(m=>m.id==='A101').vocabulary;
 assert.equal(a101Vocabulary.length,80);assert.equal(cards.length,87);
 for(let n=1;n<=6;n++)assert(cards.some(v=>v.id===`A101-v${n}`));assert(cards.some(v=>v.word==='on foot'));
 for(const [base,third,ipa] of thirdPersonVerbs){const c=cards.find(v=>v.id===`A101-x-form-${base}`);assert.equal(c.word,third);assert.equal(c.ipa,`/${ipa}/`);assert(c.context.includes(third));}
 for(const word of ['hardly ever','every other day','from time to time','look up','find out','carry out','keep track of','make sure','on my own'])assert(cards.some(v=>v.word===word&&v.note&&v.context));
 assert(a101Vocabulary.every(v=>/^\/.+\/$/u.test(v.ipa)&&v.accent==='UK'));
 assert.equal(new Set(a101Vocabulary.map(v=>v.id)).size,a101Vocabulary.length);
});

test('A101 expansion preserves old SRS, unfinished paragraphs and both variants without inheriting mastery',()=>{
 const s=freshState();s.drafts.A101='Synthetic previous draft, not learner evidence.';
 s.cards['A101-v1']=reviewCard(null,'good',Date.UTC(2026,8,21));s.cards['P04-x-quiet']=reviewCard(null,'good',Date.UTC(2026,8,21));
 s.moduleProgress.A101={selfChecked:true,date:'2026-09-21T09:00:00Z'};
 s.placement={assessmentVersion,date:'2026-09-21T09:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};
 assert.deepEqual(validateState(structuredClone(s)),s);assert(buildPlan(s).items.some(m=>m.id==='A101'));
 const u=units[3],p=unitState(s,u.id);
 p.examDraft.answers['A101-frequency-test-a-15']='Noor usually works at home.\nI will continue this paragraph later.';
 s.bookmark={route:'unit/A101-frequency/test',scroll:1700,focus:'answer-A101-frequency-test-a-15'};
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(s.schemaVersion,2);
 fill(s,u);submitUnitTest(s,u.id,'2026-09-21T10:00:00Z');const previous=structuredClone(p.attempts[0]);
 startUnitTest(s,u.id);assert.equal(p.examDraft.variant,'b');fill(s,u);submitUnitTest(s,u.id,'2026-09-22T10:00:00Z');
 assert.equal(p.attempts.length,2);assert.deepEqual(p.attempts[0],previous);assert.doesNotThrow(()=>validateState(s));
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {comparisonForms,degreePatterns,comparisonReference} from '../data/comparison.mjs';
import {a202Vocabulary} from '../data/lexicon-a202.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='A202');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='A202-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepted');assert(!checkAnswer(wrong,t.answer),id+' contrast');}};

test('A202 has three connected units, substantial varied banks and fresh goal-covered exams',()=>{
 assert.deepEqual(units.map(u=>u.id),['A202-description','A202-comparison','A202-degree']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[80,86,84]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'A201-contrast');
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=4500);assert.equal(u.examples.length,24);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);
  assert.deepEqual(u.tests.map(t=>t.tasks.length),[20,20]);
  assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?260:140));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));
   for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);
   for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
  }
 }
 assert.equal(new Set(passages).size,6);
});

test('A202 adjective/adverb keys preserve linking verbs, spelling and lexical meaning',()=>{
 cases([
  ['description-forms-1','clear','clearly'],['description-forms-2','clearly','clear'],['description-forms-3','comfortable','comfortables'],
  ['description-forms-4','easily','easyly'],['description-forms-5','carefully','carefuly'],['description-forms-6','simply','simplely'],
  ['description-forms-7','happily','happyly'],['description-forms-8','truly','truely'],['description-forms-9','fast','fastly'],
  ['description-meaning-1','good','well'],['description-meaning-2','well','fastly'],['description-meaning-3','hard','hardly'],
  ['description-meaning-4','hardly','hard'],['description-meaning-5','late','lately'],['description-meaning-6','lately','late'],
  ['description-meaning-7','soft','softly'],['description-meaning-8','angrily','angry'],
  ['description-test-a-3','gently','gentlely'],['description-test-a-12','The tea tastes wonderful.','The tea tastes wonderfully.'],
  ['description-test-b-12','The air feels cold.','The air feels coldly.']
 ]);
});

test('A202 comparison keys accept standard variants without double marking',()=>{
 cases([
  ['comparison-forms-1','taller','more taller'],['comparison-forms-2','largest','largeest'],['comparison-forms-3','thinner','thiner'],
  ['comparison-forms-4','busiest','busyest'],['comparison-forms-5','more useful','usefuler'],['comparison-forms-6','most expensive','expensivest'],
  ['comparison-forms-7','better','gooder'],['comparison-forms-8','worst','badest'],['comparison-forms-9','more carefully','carefullier'],
  ['comparison-forms-10','faster','more faster'],['comparison-forms-11','more quiet','more quieter'],['comparison-forms-11','quieter','quietter'],
  ['comparison-forms-12','simpler','more simpler'],['comparison-forms-12','more simple','simpleer'],
  ['comparison-forms-13','friendlier','more friendlier'],['comparison-forms-13','more friendly','friendlyer'],
  ['comparison-forms-14','farther','farer'],['comparison-forms-14','further','more far'],
  ['comparison-test-a-1','wetter','weter'],['comparison-test-b-5','furthest','furthestest'],['comparison-test-b-5','farthest','farest']
 ]);
});

test('A202 scope, comparison modifiers, determiner and quantity keys are independent',()=>{
 cases([
  ['comparison-scope-1','much','very'],['comparison-scope-2','bit','very'],['comparison-scope-3','tools','tool'],
  ['comparison-scope-4','best','the best'],['comparison-scope-5','in','of'],['comparison-scope-6','of','in'],
  ['comparison-scope-7','fewer','less'],['comparison-scope-8','less','fewer'],['comparison-scope-9','older','elder'],['comparison-scope-10','further','farther'],
  ['comparison-test-a-11','It is my newest coat.','It is my the newest coat.'],
  ['comparison-test-b-11','It is one of the busiest stations.','It is one of the busiest station.']
 ]);
 for(const id of ['comparison-scope-11','comparison-scope-13','comparison-scope-14','comparison-review-5','comparison-test-a-14','comparison-test-b-15'])assert(isOpen(task(id)),id);
});

test('A202 equality direction, countability and enough positions retain their meanings',()=>{
 cases([
  ['degree-equality-1','tall','taller'],['degree-equality-2','many','much'],['degree-equality-3','much','many'],
  ['degree-equality-4','as','than'],['degree-equality-5','to','as'],['degree-equality-6','B','A'],['degree-equality-7','equal','different'],
  ['degree-equality-10',"A isn't as wide as B.",'B is not as wide as A.'],['degree-equality-10','A is not so wide as B.','A is wider than B.'],
  ['degree-limits-1','enough','enough of'],['degree-limits-4','many','much'],['degree-limits-5','much','many'],
  ['degree-limits-6','few','little'],['degree-limits-7','little','few'],['degree-limits-8','of','for'],['degree-limits-9','of','to'],
  ['degree-limits-10','to','for'],['degree-limits-11','The text is clear enough.','The text is enough clear.'],
  ['degree-limits-13','She works quickly enough.','She works enough quickly.'],
  ['degree-test-a-3','B','A'],['degree-test-b-3','B','A'],['degree-test-b-12','We have too much traffic here.','We have too many traffic here.']
 ]);
 for(const id of ['degree-equality-11','degree-limits-16','degree-limits-17','degree-limits-18','degree-test-a-20','degree-test-b-20'])assert(isOpen(task(id)),id);
});

test('A202 reading keys distinguish data, limited scope and unknown outcomes',()=>{
 cases([
  ['description-reading-1','Nora','Eli'],['description-reading-2','true','false'],['description-reading-3','not stated','false'],
  ['description-reading-4','3','2'],['description-reading-5','false','true'],['description-reading-6','no','yes'],
  ['description-reading-7','effort','absence'],['description-reading-8','false','true'],
  ['comparison-reading-1','3','4'],['comparison-reading-2','Pine','Cloud'],['comparison-reading-3','Stone','Pine'],
  ['comparison-reading-4','Cloud','Stone'],['comparison-reading-5','30','15'],['comparison-reading-6','Cloud','Stone'],
  ['comparison-reading-7','Pine','Cloud'],['comparison-reading-8','not stated','true'],
  ['degree-reading-1','8','10'],['degree-reading-2','60','75'],['degree-reading-3','8','12'],
  ['degree-reading-4','equal','different'],['degree-reading-5','Yard','Loft'],['degree-reading-6','false','true'],
  ['degree-reading-7','10','8'],['degree-reading-8','false','true']
 ]);
});

test('A202 independent listening keys preserve travel estimates and unconfirmed assistance',()=>{
 cases([
  ['description-listening-1','Sam','Nora'],['description-listening-2','yes','no'],['description-listening-3','slowly','fast'],
  ['description-listening-4','false','true'],['description-listening-5','4','3'],['description-listening-6','false','true'],['description-listening-7','not stated','true'],
  ['comparison-listening-1','Ada','Mila'],['comparison-listening-2','4','7'],['comparison-listening-3','7','18'],
  ['comparison-listening-4','15','20'],['comparison-listening-5','taxi','train'],['comparison-listening-6','bus','train'],['comparison-listening-7','false','true'],
  ['degree-listening-1','Lee','Sam'],['degree-listening-2','4','5'],['degree-listening-3','6','4'],
  ['degree-listening-4','no','yes'],['degree-listening-5','false','true'],['degree-listening-6','no','yes'],['degree-listening-7','false','true']
 ]);
});

test('A202 reference preserves form variants and does not claim a complete adjective dictionary',()=>{
 assert.equal(comparisonForms.length,36);assert.equal(degreePatterns.length,20);assert.equal(comparisonReference.rows.length,56);
 assert.equal(comparisonReference.practice.length,20);assert(comparisonReference.rows.every(r=>r.length===6&&r.every(Boolean)));
 assert.equal(new Set(comparisonForms.map(r=>r[0])).size,36);
 for(const [base,c,s] of [['big','bigger','biggest'],['heavy','heavier','heaviest'],['good / well','better','best'],['bad / badly','worse','worst'],['few','fewer','fewest']])assert.deepEqual(comparisonForms.find(r=>r[0]===base).slice(0,3),[base,c,s]);
 assert(comparisonForms.find(r=>r[0]==='far')[1].includes('farther / further'));
 assert(comparisonReference.intro.join(' ').includes('не полный словарь'));
});

test('A202 nine complete writing models meet their own length guidance without auto-grading learners',()=>{
 const models=all.filter(t=>t.prompt.includes('100–140 слов'));assert.equal(models.length,9);
 for(const t of models){const n=t.answer.trim().split(/\s+/).length;assert(n>=100&&n<=140,t.id+' '+n);assert(isOpen(t));}
 cases([['description-sounds-6','/li/','/laɪ/'],['comparison-sounds-3','/ə/','/eɪ/'],['comparison-sounds-4','/ɪst/','/iːst/'],['degree-sounds-1','/f/','/g/'],['degree-sounds-2','/ʌ/','/uː/']]);
 for(const id of ['description-sounds-10','degree-sounds-10']){assert(isOpen(task(id)));assert(task(id).answer.includes('прослушать'));}
});

test('A202 seventy-two cards keep UK IPA, contextual expressions and published legacy IDs',()=>{
 assert.equal(a202Vocabulary.length,72);assert.equal(new Set(a202Vocabulary.map(c=>c.id)).size,72);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id===`A202-v${n}`));
 for(const c of a202Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['hardly ever','more or less','at least','at most','so far so good','the best of both worlds','second to none','weigh up','make do with'])assert(a202Vocabulary.some(c=>c.word===word),word);
 assert.equal(a202Vocabulary.find(c=>c.word==='rough').ipa,'/rʌf/');assert.equal(a202Vocabulary.find(c=>c.word==='worst').ipa,'/wɜːst/');
 assert(modules.find(m=>m.id==='A202').vocabulary.length>=78);
});

test('A202 expansion retains old drill archive, notes, navigation and SRS without new progress',()=>{
 const s=freshState();s.moduleProgress.A202={selfChecked:true,date:'2026-09-22'};s.drafts.A202='Synthetic old note.';
 s.cards['A202-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/A202';s.navigation.sections.course='module/A202';
 s.navigation.pages['module/A202']={scroll:500,focus:'drill1',fields:{drill0:'better',drill1:'carefully\nOriginal answer',drill2:'enough'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'A202').total,253);assert.equal(topicWorkProgress(copy,'A202').completed,0);
 delete s.navigation;assert.equal(validateState(s).drafts.A202,s.drafts.A202);
});

test('A202 exams retain multiline drafts and both attempts; repeated variants add no progress',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('100–140'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'A202').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-23T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'A202').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {cohesionPatterns,wordBuildingPatterns,correspondencePatterns,cohesionReference,wordBuildingReference,correspondenceReference} from '../data/writing-reference.mjs';
import {b105Vocabulary} from '../data/lexicon-b105.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B105');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B105-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('B105 articles follow sounds, identifiable reference and the stated general meaning',()=>{
 cases([
 ['reference-forms-1','a','an'],['reference-forms-2','an','a'],['reference-forms-3','a','an'],['reference-forms-4','an','a'],
 ['reference-forms-5','a','the'],['reference-forms-6','the','a'],['reference-forms-7','zero','a'],['reference-forms-8','the','zero'],
 ['reference-test-a-1','a','an'],['reference-test-a-2','an','a'],['reference-test-b-1','a','an'],['reference-test-b-2','an','a']
 ]);
 open(['reference-forms-17','reference-forms-18','reference-test-a-15','reference-test-a-22']);
});

test('B105 countability, determiners and head-noun agreement have independent keys',()=>{
 cases([
 ['reference-forms-9','is','are'],['reference-forms-10','are','is'],['reference-forms-11','is','are'],['reference-forms-12','was','were'],
 ['reference-forms-13','My draft is ready.','The my draft is ready.'],
 ['reference-forms-14','She gave me two pieces of advice.','She gave me two advices.'],
 ['reference-forms-15','The information is useful.','The information are useful.'],
 ['reference-forms-16','A piece of advice is useful.','A piece of advice are useful.'],
 ['reference-test-a-5','is','are'],['reference-test-a-6','are','is'],['reference-test-b-5','is','are'],['reference-test-b-6','are','is']
 ]);
});

test('B105 meaning, one/ones and ambiguous references stay distinct from a universal article recipe',()=>{
 cases([
 ['reference-meaning-1','knowledge','event'],['reference-meaning-2','event','knowledge'],
 ['reference-meaning-3','one','ones'],['reference-meaning-4','ones','one'],
 ['reference-meaning-5','another','other'],['reference-meaning-6','the','zero'],
 ['reference-test-a-9','one','ones'],['reference-test-b-9','ones','one']
 ]);
 open(['reference-meaning-7','reference-meaning-8','reference-meaning-9','reference-meaning-10','reference-meaning-11','reference-meaning-12','reference-test-a-14','reference-test-b-14']);
 assert(task('reference-meaning-8').answer.includes('guide'));assert(task('reference-meaning-8').answer.includes('report'));
});

test('B105 reference stories preserve exact versions, counts and unconfirmed approval',()=>{
 cases([
 ['reference-reading-1','Mina','Omar'],['reference-reading-2','2','3'],['reference-reading-3','Omar','Mina'],
 ['reference-reading-4','3','all'],['reference-reading-5','no','yes'],['reference-reading-6','old guide','revised guide'],
 ['reference-reading-7','not stated','true'],['reference-reading-8','shared description','approval'],
 ['reference-listening-1','Elena','Ben'],['reference-listening-2','4','3'],['reference-listening-3','2','4'],
 ['reference-listening-4','Ben','Elena'],['reference-listening-5','no','yes'],['reference-listening-6','2','all'],
 ['reference-listening-7','not stated','true']
 ]);
});

test('B105 conjunction and preposition complements, punctuation and parallel forms have independent keys',()=>{
 cases([
 ['cohesion-forms-1','because','because of'],['cohesion-forms-2','because of','because'],
 ['cohesion-forms-3','Despite','Although'],['cohesion-forms-4','Although','Despite'],
 ['cohesion-forms-5','being','be'],['cohesion-forms-6','but','however'],['cohesion-forms-7','so','because'],['cohesion-forms-8','to','for'],
 ['cohesion-forms-9','Although it was late, we stayed.','Although it was late, but we stayed.'],
 ['cohesion-forms-10','Despite the rain, we went out.','Despite of the rain, we went out.'],
 ['cohesion-forms-11','We stopped because it was dark.','We stopped because of it was dark.'],
 ['cohesion-forms-12','The plan is useful. However, it is expensive.','The plan is useful but it is expensive.'],
 ['cohesion-forms-14','Please check the date, confirm the room, and send a reply.','Please check the date, confirming the room and send a reply.']
 ]);
 // This task explicitly requests a full stop: other grammatical rewrites are not the same operation.
 assert(task('cohesion-forms-12').prompt.includes('точкой'));
 open(['cohesion-forms-15','cohesion-forms-16']);
});

test('B105 paragraph focus, sequence, causal evidence and recommendations have different roles',()=>{
 cases([
 ['cohesion-organisation-1','off-topic','support'],['cohesion-organisation-2','topic','example'],
 ['cohesion-organisation-3','example','conclusion'],['cohesion-organisation-4','sequence','cause'],
 ['cohesion-organisation-5','contrast','addition'],['cohesion-organisation-6','addition','contrast'],
 ['cohesion-meaning-1','no','yes'],['cohesion-meaning-2','no','yes'],
 ['cohesion-meaning-3','not established','confirmed'],['cohesion-meaning-4','not established','confirmed']
 ]);
 open(['cohesion-organisation-7','cohesion-organisation-9','cohesion-meaning-5','cohesion-meaning-6','cohesion-meaning-7','cohesion-meaning-9']);
 assert(cohesionPatterns.find(r=>r[0]==='but')[4].includes('не ошибка'));
});

test('B105 cohesion reading and independent audio retain trial limits and task purpose',()=>{
 cases([
 ['cohesion-reading-1','Tariq','Jade'],['cohesion-reading-2','6','5'],['cohesion-reading-3','2','6'],
 ['cohesion-reading-4','A','B'],['cohesion-reading-5','2','6'],['cohesion-reading-6','false','true'],
 ['cohesion-reading-7','no','yes'],['cohesion-reading-8','not stated','true'],
 ['cohesion-listening-1','Jade','Tariq'],['cohesion-listening-2','address','price'],
 ['cohesion-listening-3','4','all'],['cohesion-listening-4','illustration','conclusion'],
 ['cohesion-listening-5','not stated','true'],['cohesion-listening-6','paragraph','signature'],
 ['cohesion-listening-7','no','yes']
 ]);
});

test('B105 collocations and dependent prepositions are contextual, with legitimate alternatives kept open',()=>{
 cases([
 ['lexis-collocations-1','make','do'],['lexis-collocations-2','do','make'],['lexis-collocations-3','make','do'],['lexis-collocations-4','make','do'],
 ['lexis-collocations-5','to','on'],['lexis-collocations-6','on','of'],['lexis-collocations-7','in','on'],
 ['lexis-collocations-8','for','to'],['lexis-collocations-9','to','zero'],['lexis-collocations-10','zero','to'],
 ['lexis-collocations-11','strong','heavy'],['lexis-collocations-12','heavy','strong'],
 ['lexis-collocations-13','We discussed the problem.','We discussed about the problem.'],
 ['lexis-collocations-14','We made a mistake.','We did a mistake.']
 ]);
 open(['lexis-collocations-15','lexis-collocations-16','lexis-test-a-20']);
 assert(wordBuildingPatterns.find(r=>r[0]==='make a decision')[4].includes('take a decision'));
});

test('B105 word-family choices check grammatical roles, spelling and false friends',()=>{
 cases([
 ['lexis-families-1','development','developement'],['lexis-families-2','decision','decidement'],
 ['lexis-families-3','reliability','reliable'],['lexis-families-4','availability','available'],
 ['lexis-families-5','accurately','accurate'],['lexis-families-6','accurate','accurately'],
 ['lexis-families-7','explanation','explain'],['lexis-families-8','successfully','successful'],
 ['lexis-families-9','successful','succesful'],['lexis-families-10','happiness','happyness'],
 ['lexis-families-11','adjective','adverb'],['lexis-families-12','на самом деле','в настоящее время'],
 ['lexis-families-13','sensible','sensitive'],['lexis-test-b-5','explanation','explain'],
 ['lexis-test-b-6','accurate','accurately'],['lexis-test-b-7','improvement','improovement']
 ]);
 open(['lexis-families-15','lexis-families-16','lexis-test-b-22']);
});

test('B105 word stress is specific to the family and never inferred from ASR spelling',()=>{
 cases([['lexis-sounds-1','2','1'],['lexis-sounds-2','2','3'],['lexis-sounds-3','1','2'],['lexis-sounds-4','2','1']]);
 open(['lexis-sounds-5','lexis-sounds-6','lexis-sounds-7','lexis-sounds-8','lexis-sounds-9','lexis-sounds-10','lexis-review-10']);
 assert(b105Vocabulary.find(c=>c.word==='development').ipa.includes('ˈvel'));
 assert(b105Vocabulary.find(c=>c.word==='reliability').ipa.includes('ˈbɪ'));
});

test('B105 lexical stories do not turn natural wording into verified facts or investigation into success',()=>{
 cases([
 ['lexis-reading-1','Rosa','Evan'],['lexis-reading-2','Evan','Rosa'],['lexis-reading-3','made progress','did progress'],
 ['lexis-reading-4','reliability','reliable'],['lexis-reading-5','5','all'],
 ['lexis-reading-6','false','true'],['lexis-reading-7','needs investigation','solved'],['lexis-reading-8','not stated','true'],
 ['lexis-listening-1','Maya','Finn'],['lexis-listening-2','Finn','Maya'],['lexis-listening-3','make a decision','do a decision'],
 ['lexis-listening-4','for','to'],['lexis-listening-5','availability','available'],
 ['lexis-listening-6','not stated','true'],['lexis-listening-7','false','true']
 ]);
});

test('B105 email requests and replies preserve modal base, gerunds, deadline and duration',()=>{
 cases([
 ['messages-forms-1','check','checking'],['messages-forms-2','checking','check'],
 ['messages-forms-3','for','to'],['messages-forms-4','hearing','hear'],['messages-forms-5','sending','send'],
 ['messages-forms-6','by','until'],['messages-forms-7','until','by'],['messages-forms-8','checking','check'],
 ['messages-forms-9','whether','what'],['messages-forms-10','clarifying','clarify'],
 ['messages-forms-11','Could you check the map?','Could you checking the map?'],
 ['messages-forms-12','I look forward to hearing from you.','I look forward to hear from you.'],
 ['messages-test-a-7','Could you check page three?','Could you to check page three?'],
 ['messages-test-b-7','Could you send the update?','Could you sends the update?']
 ]);
 open(['messages-forms-13','messages-forms-14','messages-test-a-16','messages-test-b-16']);
});

test('B105 email scope and register separate receipt, agreement, review and approval',()=>{
 cases([
 ['messages-editing-1','B','A'],['messages-editing-2','acknowledgement','approval'],
 ['messages-editing-3','purpose','unrelated biography'],['messages-editing-4','no','yes'],
 ['messages-meaning-1','no','yes'],['messages-meaning-2','no','yes'],['messages-meaning-3','no','yes'],
 ['messages-meaning-4','not established','agreement'],['messages-test-a-11','not established','confirmed'],
 ['messages-test-b-11','not established','confirmed']
 ]);
 open(['messages-editing-7','messages-editing-8','messages-editing-9','messages-editing-13','messages-meaning-7','messages-meaning-10']);
});

test('B105 message chain and new audio preserve version, limited acceptance and an unaccepted deadline change',()=>{
 cases([
 ['messages-reading-1','Nora','Theo'],['messages-reading-2','Theo','Nora'],['messages-reading-3','2','3'],
 ['messages-reading-4','receipt','approval'],['messages-reading-5','2','all'],['messages-reading-6','3','2'],
 ['messages-reading-7','no','yes'],['messages-reading-8','not stated','true'],
 ['messages-listening-1','Hugo','Priya'],['messages-listening-2','Priya','Hugo'],['messages-listening-3','Wednesday','Friday'],
 ['messages-listening-4','Friday','Wednesday'],['messages-listening-5','5','4'],['messages-listening-6','false','true'],
 ['messages-listening-7','not stated','true']
 ]);
});

test('B105 three scoped appendices provide meaningful rows, fresh examples and practice',()=>{
 assert.equal(cohesionPatterns.length,36);assert.equal(wordBuildingPatterns.length,44);assert.equal(correspondencePatterns.length,26);
 for(const [r,id,n] of [[cohesionReference,'text-cohesion',36],[wordBuildingReference,'word-building',44],[correspondenceReference,'email-writing',26]]){
  assert.equal(r.id,id);assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));
  assert.equal(r.practice.length,16);assert(r.sources.every(s=>/^https:\/\//.test(s[1])));
 }
 assert(cohesionPatterns.find(r=>r[0]==='specific uncountable')[4].includes('Не запрет'));
 assert(wordBuildingPatterns.find(r=>r[0]==='reply to')[2].startsWith('Reply'));
 assert(correspondencePatterns.find(r=>r[0]==='acknowledgement')[3].includes('Не одобрение'));
});

test('B105 adds 96 contextual IPA cards and preserves all seven published IDs and meanings',()=>{
 assert.equal(b105Vocabulary.length,96);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id==='B105-v'+n));
 assert(vocabulary.some(c=>c.id==='B105-x-make-sense'&&c.word==='make sense'));
 for(const c of b105Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['make progress','food for thought','as clear as mud','get your wires crossed','look into','follow up on'])assert(b105Vocabulary.some(c=>c.word===word),word);
 const cards=modules.find(m=>m.id==='B105').vocabulary;assert.equal(cards.length,103);assert.equal(new Set(cards.map(c=>c.word)).size,103);
});

test('B105 has four substantial unequal units, separate texts and fresh tests for all goals',()=>{
 assert.deepEqual(units.map(u=>u.id),['B105-reference','B105-cohesion','B105-lexis','B105-messages']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[84,92,86,94]);
 assert.deepEqual(units.map(u=>u.examples.length),[26,28,28,28]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[24,24],[24,24],[22,22],[24,24]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'B104-statements');
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=5200);
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
 assert.equal(new Set(passages).size,8);
});

test('B105 twenty writing models meet 130–170 words and remain open to substantive review',()=>{
 const paragraphs=all.filter(t=>t.prompt.includes('130–170'));assert.equal(paragraphs.length,20);
 for(const t of paragraphs){const n=t.answer.split(/\s+/).length;assert(n>=130&&n<=170,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('130–170')).length,3);
});

test('B105 expansion preserves original drills, multiline archive, notes and SRS with no inherited credit',()=>{
 const s=freshState();s.moduleProgress.B105={selfChecked:true,date:'2026-09-22'};s.drafts.B105='Synthetic old note.';
 s.cards['B105-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B105';s.navigation.sections.course='module/B105';
 s.navigation.pages['module/B105']={scroll:500,focus:'drill1',fields:{drill0:'make',drill1:'development\nOriginal answer',drill2:'без артикля'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B105').total,360);assert.equal(topicWorkProgress(copy,'B105').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B105').drills.map(d=>d[0]),['___ a decision (make/do)','develop → ___ (существительное)','We use ___ software. (a/без артикля)']);
 delete s.navigation;assert.equal(validateState(s).drafts.B105,s.drafts.B105);
});

test('B105 multiline exam drafts and two attempts retain original work pending substantive review',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('130–170'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B105').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B105').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('B105 360 first-pass steps do not claim mastery or change with available study time',()=>{
 const s=freshState();
 for(const u of units){
  const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T13:00:00Z');
  assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 }
 const progress=topicWorkProgress(s,'B105');assert.equal(progress.total,360);assert.equal(progress.completed,360);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B105'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B105'),progress);
});

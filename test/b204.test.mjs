import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {registerPatterns,argumentPatterns,lexicalPatterns,registerReference,argumentReference,lexicalReference} from '../data/argument-reference.mjs';
import {b204Vocabulary} from '../data/lexicon-b204.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B204');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B204-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('B204 requests and hedges preserve base forms, ing, agreement and indirect question order',()=>{
 cases([['register-forms-1','send','sent'],['register-forms-2','checking','to check'],['register-forms-3','it','zero'],['register-forms-4','appears','appear'],
 ['register-forms-5','suggest','suggests'],['register-forms-6','to','of'],['register-forms-7','not',"doesn't"],['register-forms-8','to','of'],
 ['register-forms-9','Could you tell me where the guide is?','Could you tell me where is the guide?'],
 ['register-forms-10','Could you explain why the screen froze?','Could you explain why did the screen freeze?'],
 ['register-forms-11','Could you explain why it did not start?','Could you explain why it started?'],
 ['register-forms-12','Would you mind waiting outside?','Would you mind to wait outside?'],
 ['register-forms-14','The plan appears to be workable.','The plan appears being workable.'],
 ['register-review-5','Could you tell me when the session will start?','Could you tell me when will the session start?'],
 ['register-test-a-3','seems','seem'],['register-test-b-5','Could you explain why the lights went out?','Could you explain why did the lights go out?']]);
 open(['register-forms-15','register-forms-16','register-test-b-13']);
});

test('B204 hedges, source, acknowledgement and commitments retain distinct meanings',()=>{
 cases([['register-meaning-1','no','yes'],['register-meaning-2','no','yes'],['register-meaning-3','no','yes'],['register-meaning-4','draft','final approval'],
 ['register-meaning-5','source','proof'],['register-meaning-6','no','yes'],['register-review-3','no','yes'],['register-review-4','no','yes'],
 ['register-test-a-7','no','yes'],['register-test-b-7','no','yes'],['register-test-b-8','no','yes']]);
 open(['register-meaning-7','register-meaning-8','register-meaning-9','register-meaning-10','register-meaning-11','register-meaning-12','register-test-a-19','register-test-b-19']);
 assert(task('register-meaning-8').answer.includes('whether you received'));assert(task('register-meaning-12').answer.includes('заняться'));
 assert(task('register-test-a-19').answer.includes('Активная форма'));assert(task('register-test-b-19').answer.includes('не делает'));
});

test('B204 register passages separate observations, reported access, requests and approval',()=>{
 cases([['register-reading-1','8','6'],['register-reading-2','6','8'],['register-reading-3','the caretaker','Max'],['register-reading-4','no','yes'],['register-reading-5','update','approval'],
 ['register-listening-1','Nora','Lena'],['register-listening-2','5','4'],['register-listening-3','4','5'],['register-listening-4','no','yes'],['register-listening-5','Tuesday','Friday'],
 ['register-test-a-9','driver','writer'],['register-test-a-10','10','14'],['register-test-b-9','librarian','writer'],['register-test-b-10','13','18']]);
 assert(task('register-reading-6').answer.includes('восемь'));assert(task('register-reading-7').answer.includes('Отрицание'));
 assert(task('register-listening-9').answer.includes('неизвестно'));
 open(['register-reading-6','register-reading-7','register-reading-8','register-reading-11','register-listening-6','register-listening-7','register-listening-9']);
});

test('B204 concession syntax distinguishes clause, noun, ing, fact that and punctuation',()=>{
 cases([['argument-forms-1','Despite','Although'],['argument-forms-2','Although','Despite'],['argument-forms-3','of','to'],['argument-forms-4','being','to be'],
 ['argument-forms-5','that','what'],['argument-forms-6','of','zero'],['argument-forms-7','the gate was','of the gate was'],['argument-forms-8','though','although'],
 ['argument-forms-9','Despite the price, I bought it.','Despite of the price, I bought it.'],
 ['argument-forms-10','Although the room was cold, we stayed.','Although the room was cold, but we stayed.'],
 ['argument-forms-11','In spite of the delay, we arrived.','In spite the delay, we arrived.'],
 ['argument-forms-13','We left because it was dark.','We left because of it was dark.'],
 ['argument-forms-14','Although expensive, the seat was comfortable.','Although it expensive, the seat was comfortable.'],
 ['argument-test-a-4','arriving','to arrive'],['argument-test-b-4','feeling','to feel']]);
 assert.equal(task('argument-forms-12').answer,'It was wet; however, we walked.');
 open(['argument-forms-15','argument-forms-16','argument-forms-17','argument-forms-18','argument-test-a-13','argument-test-b-13']);
 assert(task('argument-forms-16').answer.includes('Mira was tired, I drove'));assert(task('argument-forms-18').answer.includes('сокращённое'));
 // Punctuation is the assessed skill, so normalised string matching must not certify it.
 open(['argument-forms-12','argument-test-a-6','argument-test-b-6']);
});

test('B204 fact, condition, contrast, correction and cause remain distinct',()=>{
 cases([['argument-meaning-1','no','yes'],['argument-meaning-2','fact','condition'],['argument-meaning-3','time','contrast'],['argument-meaning-4','contrast','time'],
 ['argument-meaning-5','no','yes'],['argument-meaning-6','correction','addition'],['argument-meaning-7','no','yes'],['argument-meaning-8','no','yes'],
 ['argument-test-a-7','no','yes'],['argument-test-a-8','time','contrast'],['argument-test-b-7','fact','condition'],['argument-test-b-8','contrast','time frame']]);
 open(['argument-meaning-9','argument-meaning-10','argument-meaning-11','argument-meaning-12','argument-meaning-13','argument-meaning-14','argument-meaning-15','argument-meaning-16']);
 assert(task('argument-meaning-12').answer.includes('причину'));assert(task('argument-meaning-14').answer.includes('отдельно не установлен'));
 assert(task('argument-meaning-15').answer.includes('Подменён'));assert(task('argument-test-b-22').answer.includes('отсутствовавших'));
});

test('B204 argument passages retain the surveyed group, trial status, competing criteria and unknown access',()=>{
 cases([['argument-reading-1','30','22'],['argument-reading-2','22','30'],['argument-reading-3','no','yes'],['argument-reading-4','second','first'],['argument-reading-5','no','yes'],
 ['argument-listening-1','Leo','Priya'],['argument-listening-2','40','65'],['argument-listening-3','65','40'],['argument-listening-4','larger','smaller'],['argument-listening-5','no','yes'],
 ['argument-test-a-10','17','24'],['argument-test-b-10','19','28']]);
 open(['argument-reading-6','argument-reading-7','argument-reading-8','argument-reading-10','argument-reading-11','argument-listening-6','argument-listening-7','argument-listening-8']);
 assert(task('argument-reading-6').answer.includes('ответивших'));assert(task('argument-reading-8').answer.includes('не изолирует'));
 assert(task('argument-listening-6').answer.includes('не проверен'));assert(task('argument-reading-7').answer.includes('не способных далеко идти'));
});

test('B204 collocations and multi-word verbs keep valency, prepositions, objects and mass nouns',()=>{
 cases([['lexis-forms-1','raise','rise'],['lexis-forms-2','rose','raised'],['lexis-forms-3','a','to a'],['lexis-forms-4','the','about the'],
 ['lexis-forms-5','to','for'],['lexis-forms-6','for','of'],['lexis-forms-7','of','to'],['lexis-forms-8','on','of'],['lexis-forms-9','with','to'],['lexis-forms-10','advice','advices'],
 ['lexis-forms-11','Put it off.','Put off it.'],['lexis-forms-12','Look into it.','Look it into.'],['lexis-forms-13','Put up with it.','Put it up with.'],
 ['lexis-forms-14','Carry it out.','Carry out it.'],['lexis-forms-15','Bring it up.','Bring up it.'],
 ['lexis-forms-16','We discussed the schedule.','We discussed about the schedule.'],['lexis-forms-17','Explain the rule to me.','Explain me the rule.'],
 ['lexis-forms-18','This is useful information.','This is useful informations.'],['lexis-test-b-2','risen','raised']]);
});

test('B204 acceptable lexical variants and context-dependent prepositions stay open',()=>{
 open(['lexis-forms-19','lexis-forms-20','lexis-meaning-9','lexis-meaning-10','lexis-meaning-11','lexis-meaning-13','lexis-test-a-13','lexis-test-b-13','lexis-test-b-19','lexis-test-b-22']);
 assert(task('lexis-forms-19').answer.includes('with a copy'));assert(task('lexis-forms-19').answer.includes('a copy for us'));
 assert(task('lexis-meaning-13').answer.includes('do/conduct'));assert(task('lexis-test-b-22').answer.includes('британском'));
 assert(task('lexis-test-b-20').explanation.includes('будущим'));
});

test('B204 false friends and process words do not invent certainty, agreement or successful completion',()=>{
 cases([['lexis-meaning-1','фактическая','текущая'],['lexis-meaning-2','текущая','разумная'],['lexis-meaning-3','в итоге','возможно'],['lexis-meaning-4','разумная','чувствительная'],
 ['lexis-meaning-5','no','yes'],['lexis-meaning-6','no','yes'],['lexis-meaning-7','no','yes'],['lexis-meaning-8','no','yes'],
 ['lexis-test-a-8','в итоге','возможно'],['lexis-test-a-9','no','yes'],['lexis-test-b-8','возможно','в итоге'],['lexis-test-b-9','no','yes']]);
 assert(task('lexis-meaning-14').answer.includes('неверной'));assert(task('lexis-test-b-21').answer.includes('разные события'));
 open(['lexis-meaning-12','lexis-meaning-14','lexis-meaning-15','lexis-meaning-16','lexis-test-a-21','lexis-test-b-21']);
});

test('B204 lexical passages preserve observations, possible causes, postponement and invoice uncertainty',()=>{
 cases([['lexis-reading-1','Mina','Dev'],['lexis-reading-2','6','2'],['lexis-reading-3','2','6'],['lexis-reading-4','no','yes'],['lexis-reading-5','postponed','cancelled'],
 ['lexis-listening-1','Amir','Dev'],['lexis-listening-2','120','145'],['lexis-listening-3','145','120'],['lexis-listening-4','no','yes'],['lexis-listening-5','no','yes'],
 ['lexis-test-a-10','4','9'],['lexis-test-b-10','5','11']]);
 open(['lexis-reading-6','lexis-reading-7','lexis-reading-8','lexis-reading-9','lexis-reading-11','lexis-listening-6','lexis-listening-7','lexis-listening-9']);
 assert(task('lexis-reading-8').answer.includes('не подтверждена'));assert(task('lexis-listening-7').answer.includes('согласился'));
});

test('B204 three scoped references expose complete rows and sixteen meaningful practice items each',()=>{
 assert.deepEqual([registerPatterns.length,argumentPatterns.length,lexicalPatterns.length],[28,32,36]);
 for(const [r,n] of [[registerReference,28],[argumentReference,32],[lexicalReference,36]]){
  assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(new Set(r.rows.map(row=>row[0])).size,n);
  assert.equal(r.practice.length,16);assert(r.practice.every(row=>row.length===2&&row.every(Boolean)));assert(r.sources.length>=8);
 }
 assert(argumentPatterns.some(r=>r[0]==='reduced although'));assert(lexicalPatterns.some(r=>r[0]==='evidence'&&r[1]==='evidence of damage'));
 assert(registerPatterns.some(r=>r[0]==='precise commitment'&&r[4].includes('Update')));
});

test('B204 contextual vocabulary preserves all seven old IDs and contains collocations, idioms and phrasal verbs',()=>{
 const cards=vocabulary.filter(v=>v.module==='B204');assert.equal(b204Vocabulary.length,84);assert.equal(cards.length,91);assert.equal(new Set(cards.map(c=>c.word)).size,91);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='B204-v'+i));assert(cards.some(c=>c.id==='B204-x-as-far-as'&&c.word==='as far as I know'));
 for(const c of b204Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['on the same page','on the contrary','on the other hand','put up with','look into','address an issue','evidence for'])assert(cards.some(c=>c.word===word),word);
});

test('B204 substantial units have independent passages, unique navigation and fresh tests of all goals',()=>{
 assert.deepEqual(units.map(u=>u.id),['B204-register','B204-argument','B204-lexis']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[82,88,90]);assert.deepEqual(units.map(u=>u.examples.length),[26,28,30]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[22,22],[24,24],[24,24]]);const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'B105-messages');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=6000);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?420:250));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});

test('B204 all fifteen length-specified models match their ranges and remain manually evaluated',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,15);assert.equal(paragraphs.filter(t=>t.prompt.includes('180–220')).length,12);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('180–220')).length,2);
});

test('B204 old drills, multiline archive, notes and SRS survive expansion without inherited progress',()=>{
 const s=freshState();s.moduleProgress.B204={selfChecked:true,date:'2026-09-22'};s.drafts.B204='Synthetic original note.';
 s.cards['B204-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['B204-x-as-far-as']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B204';s.navigation.sections.course='module/B204';
 s.navigation.pages['module/B204']={scroll:420,focus:'drill1',fields:{drill0:'Despite',drill1:'фактический\nOriginal answer',drill2:'into'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B204').total,263);assert.equal(topicWorkProgress(copy,'B204').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B204').drills.map(d=>d[0]),['___ the rain, we left. (Despite/Although)','actual означает: актуальный или фактический?','look ___ a problem (изучить)']);
 delete s.navigation;assert.equal(validateState(s).drafts.B204,s.drafts.B204);
});

test('B204 multiline drafts and both attempts preserve original responses awaiting substantive review',()=>{
 for(const u of units){const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('180–220'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished text.\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B204').completed,0);let first;
  for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T14:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B204').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('B204 263 first-pass steps do not certify mastery or shrink with the chosen schedule',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T15:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'B204');assert.equal(progress.total,263);assert.equal(progress.completed,263);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B204'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B204'),progress);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {inversionPatterns,cleftPatterns,frontingPatterns,inversionReference,cleftReference,frontingReference} from '../data/focus-reference.mjs';
import {c101Vocabulary} from '../data/lexicon-c101.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='C101');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='C101-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('C101 negative inversion keeps auxiliary chains, tense, agreement and base forms',()=>{
 cases([['inversion-forms-1','does','do'],['inversion-forms-2','object','objected'],['inversion-forms-3','have','has'],['inversion-forms-4','was','were'],
 ['inversion-forms-6','when','than'],['inversion-forms-7','than','when'],['inversion-forms-8','did','had'],
 ['inversion-forms-9','Rarely does he complain.','Rarely does he complains.'],['inversion-forms-10','Never have we seen both originals.','Never we have seen both originals.'],
 ['inversion-forms-11','Only then did we understand the rule.','Only then did we understood the rule.'],
 ['inversion-forms-12','Not until Friday did we hear the result.',"Not until Friday didn't we hear the result."],
 ['inversion-forms-13','Only after Jo checked did we print the label.','Only after did Jo check we printed the label.'],
 ['inversion-test-a-6','Only later did I recognize the signature.','Only later did I recognized the signature.'],
 ['inversion-test-b-7','Not until evening did she open the parcel.','Not until evening did she opened the parcel.']]);
 for(const answer of ['Not only did she read it, but she also copied it.','Not only did she read it, but she copied it also.','Not only did she read it, but also she copied it.']) assert(checkAnswer(answer,task('inversion-forms-15').answer));
 assert(!checkAnswer('Not only did she read it, but also did she copy it.',task('inversion-forms-15').answer));
 assert(units[0].examples.some(e=>e.en==='Never has the label been changed.'));
});

test('C101 negative subjects, only scope and temporal closeness do not change evidence',()=>{
 cases([['inversion-forms-14','Nobody called.','Nobody did call.'],['inversion-meaning-1','no','yes'],['inversion-meaning-2','subject','object'],
 ['inversion-meaning-3','subject','object'],['inversion-meaning-4','person','time'],['inversion-meaning-5','time','person'],
 ['inversion-meaning-6','yes','no'],['inversion-meaning-7','no','yes'],['inversion-meaning-8','no','yes'],
 ['inversion-review-3','no','yes'],['inversion-test-a-8','subject','time'],['inversion-test-b-9','yes','no']]);
 open(['inversion-forms-16','inversion-forms-17','inversion-forms-18','inversion-meaning-9','inversion-meaning-10','inversion-meaning-14','inversion-test-a-20','inversion-test-b-13']);
 assert(task('inversion-meaning-10').answer.includes('не установлены'));
});

test('C101 should/were/had conditions retain base/to/V3, not, time and modal uncertainty',()=>{
 cases([['inversion-conditions-1','Should','Had'],['inversion-conditions-2','to','for'],['inversion-conditions-3','left','leave'],['inversion-conditions-4','had','have'],
 ['inversion-conditions-5','Had she not called, we would have waited.','Had not she called, we would have waited.'],
 ['inversion-conditions-6','Were the office closer, I would walk.','Was the office closer, I would walk.'],
 ['inversion-conditions-7','Should you not hear from us, call Jo.','Should not you hear from us, call Jo.'],
 ['inversion-test-a-10','Should','Had'],['inversion-test-a-11','known','know'],['inversion-test-b-11','compared','compare']]);
 open(['inversion-conditions-8','inversion-conditions-9','inversion-conditions-10','inversion-conditions-11','inversion-test-a-15','inversion-test-b-15']);
 assert(task('inversion-conditions-9').answer.includes('might'));assert(task('inversion-test-b-15').answer.includes('could'));
 assert(task('inversion-test-a-25').answer.includes('V3'));
});

test('C101 inversion passages retain discrepancies, searched records, visit scope and unapproved routes',()=>{
 cases([['inversion-reading-1','Mara','Jo'],['inversion-reading-2','18','4'],['inversion-reading-3','4','18'],['inversion-reading-4','Thursday','Tuesday'],['inversion-reading-5','no','yes'],
 ['inversion-listening-1','Nina','Omar'],['inversion-listening-2','6','2'],['inversion-listening-3','2','6'],['inversion-listening-4','no','yes'],['inversion-listening-5','no','yes']]);
 assert(task('inversion-reading-8').answer.includes('шесть месяцев'));assert(task('inversion-reading-9').answer.includes('не гарантию'));
 open(['inversion-reading-6','inversion-reading-7','inversion-reading-8','inversion-listening-6','inversion-listening-7','inversion-listening-8']);
});

test('C101 clefts preserve it agreement, internal agreement, role, word order and prepositions',()=>{
 cases([['clefts-forms-1','is','are'],['clefts-forms-2','keep','keeps'],['clefts-forms-3','that','what'],['clefts-forms-4','is','are'],['clefts-forms-5','on','in'],['clefts-forms-6','to','zero'],
 ['clefts-forms-7','It is the maps that we need.','It are the maps that we need.'],['clefts-forms-8','What we need is a copy.','What do we need is a copy.'],
 ['clefts-forms-9','It was the draft that Jo sent.','It was Jo that the draft sent.'],['clefts-forms-11','It was the guide that I read.','It was the guide that I read it.'],
 ['clefts-test-a-1','was','were'],['clefts-test-a-2','collect','collects'],['clefts-test-a-5','to','zero'],['clefts-test-b-7','What we requested was a timetable.','What did we request was a timetable.']]);
 assert(task('clefts-forms-16').answer.includes('I called Omar; Omar called me'));
});

test('C101 acceptable cleft variants, pronouns and presupposition challenges remain open',()=>{
 open(['clefts-forms-13','clefts-forms-14','clefts-forms-15','clefts-forms-17','clefts-review-7',
 'clefts-test-a-10','clefts-test-a-11','clefts-test-a-17','clefts-test-b-10','clefts-test-b-11','clefts-test-b-17',
 'clefts-meaning-13','clefts-test-a-18','clefts-test-b-18','clefts-test-a-23']);
 cases([['clefts-meaning-1','time','person'],['clefts-meaning-2','document','person'],['clefts-meaning-3','no','yes'],['clefts-meaning-4','no','yes'],['clefts-meaning-5','no','yes'],['clefts-meaning-6','plan','completed inspection']]);
 assert(task('clefts-test-a-23').answer.includes('whether anyone'));assert(task('clefts-test-b-23').answer.includes('not, may или draft'));
});

test('C101 cleft passages separate interviewing/translation, draft/publication and request/approval',()=>{
 cases([['clefts-reading-1','Leila','Anton'],['clefts-reading-2','Anton','Leila'],['clefts-reading-3','12','5'],['clefts-reading-4','5','12'],['clefts-reading-5','Thursday','Tuesday'],
 ['clefts-listening-1','Ruth','Omar'],['clefts-listening-2','draft','final contract'],['clefts-listening-3','3','2'],['clefts-listening-4','Omar','Ruth'],['clefts-listening-5','no','yes']]);
 assert(task('clefts-reading-9').answer.includes('двое ещё не ответили'));assert(task('clefts-listening-9').answer.includes('not rejected B'));
 open(['clefts-reading-7','clefts-reading-8','clefts-reading-9','clefts-reading-10','clefts-listening-6','clefts-listening-7','clefts-listening-8','clefts-listening-9']);
});

test('C101 fronting differs from auxiliary inversion and full inversion retains subject agreement',()=>{
 cases([['fronting-forms-1','were','was'],['fronting-forms-2','comes','come'],['fronting-forms-3','comes','come'],['fronting-forms-4','I can','can I'],
 ['fronting-forms-5','was','were'],['fronting-forms-6','might','to might'],['fronting-forms-7','be','are'],['fronting-forms-8','So','Such'],
 ['fronting-forms-9','Here she comes.','Here comes she.'],['fronting-forms-10','This map I prefer.','This map do I prefer.'],
 ['fronting-forms-11','Beside the door stood a tall shelf.','Beside the door did stand a tall shelf.'],
 ['fronting-forms-12','On the shelf were three folders.','On the shelf was three folders.'],
 ['fronting-test-a-7','The address I remember.','The address do I remember.'],
 ['fronting-test-b-7','The title we recognize.','The title do we recognize.']]);
});

test('C101 concessive fronting, headers, anticipatory it and imperative do require contextual reading',()=>{
 cases([['fronting-meaning-1','subject','object'],['fronting-meaning-2','subject','object'],['fronting-meaning-3','concession','cause'],['fronting-meaning-4','concession','cause'],
 ['fronting-meaning-5','no','yes'],['fronting-meaning-6','no','yes'],['fronting-test-a-9','concession','cause'],['fronting-review-3','no','yes']]);
 open(['fronting-forms-13','fronting-forms-14','fronting-forms-15','fronting-meaning-8','fronting-meaning-9','fronting-meaning-10','fronting-meaning-12','fronting-test-b-17','fronting-test-a-20']);
 assert(task('fronting-forms-15').answer.includes('imperative'));assert(task('fronting-meaning-10').answer.includes('уступительной'));
});

test('C101 fronting passages preserve layout, denominators and preference versus comprehension or recall',()=>{
 cases([['fronting-reading-1','Eli','Jo'],['fronting-reading-2','8','3'],['fronting-reading-3','3','8'],['fronting-reading-4','beside the entrance','behind the screen'],['fronting-reading-5','no','yes'],
 ['fronting-listening-1','Mira','Jo'],['fronting-listening-2','9','6'],['fronting-listening-3','6','2'],['fronting-listening-4','2','6'],['fronting-listening-5','no','yes']]);
 assert(task('fronting-reading-7').answer.includes('расстояния нет'));assert(task('fronting-reading-10').answer.includes('not yet been tested'));
 open(['fronting-reading-6','fronting-reading-7','fronting-reading-9','fronting-reading-10','fronting-listening-7','fronting-listening-8','fronting-listening-9']);
});

test('C101 scoped references provide complete rows and sixteen meaningful applications each',()=>{
 assert.deepEqual([inversionPatterns.length,cleftPatterns.length,frontingPatterns.length],[34,30,28]);
 for(const [r,n]of [[inversionReference,34],[cleftReference,30],[frontingReference,28]]){
  assert.equal(r.rows.length,n);assert.equal(new Set(r.rows.map(row=>row[0])).size,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));
  assert.equal(r.practice.length,16);assert(r.practice.every(row=>row.length===2&&row.every(Boolean)));assert.equal(r.sources.length,7);
 }
 assert(inversionPatterns.some(r=>r[0]==='had had'));assert(cleftPatterns.some(r=>r[0]==='what plural complement'));assert(frontingPatterns.some(r=>r[0]==='imperative do'));
});

test('C101 contextual vocabulary preserves all old IDs, idioms and explicit UK transcriptions',()=>{
 const cards=vocabulary.filter(v=>v.module==='C101');assert.equal(c101Vocabulary.length,84);assert.equal(cards.length,91);assert.equal(new Set(cards.map(c=>c.word)).size,91);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='C101-v'+i));assert(cards.some(c=>c.id==='C101-x-at-stake'&&c.word==='at stake'));
 for(const c of c101Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['on no account','had I had','what I did was','set the record straight','read between the lines','spell out','lose sight of'])assert(cards.some(c=>c.word===word),word);
});

test('C101 units have natural sizes, substantial independent passages and new tests of every goal',()=>{
 assert.deepEqual(units.map(u=>u.id),['C101-inversion','C101-clefts','C101-fronting']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[102,88,84]);assert.deepEqual(units.map(u=>u.examples.length),[34,30,28]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[26,26],[24,24],[24,24]]);const passages=[];
 for(const [i,u]of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'B205-presentation');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=7000);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?480:300));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});

test('C101 fifteen specified-length models fit their ranges and remain manually evaluated',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,15);assert.equal(paragraphs.filter(t=>t.prompt.includes('220–280')).length,12);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('220–280')).length,2);
});

test('C101 preserves old drill questions, multiline answers, notes and SRS without inherited progress',()=>{
 const s=freshState();s.moduleProgress.C101={selfChecked:true,date:'2026-09-22'};s.drafts.C101='Synthetic original note.';
 s.cards['C101-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['C101-x-at-stake']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C101';s.navigation.sections.course='module/C101';
 s.navigation.pages['module/C101']={scroll:420,focus:'drill1',fields:{drill0:'do',drill1:'understand\nOriginal answer',drill2:'is'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'C101').total,277);assert.equal(topicWorkProgress(copy,'C101').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='C101').drills.map(d=>d[0]),['Rarely ___ we see this.','Only then did she ___. (understand)','What we need ___ more time.']);
 delete s.navigation;assert.equal(validateState(s).drafts.C101,s.drafts.C101);
});

test('C101 multiline test drafts and both attempts retain originals and await substantive reviews',()=>{
 for(const u of units){const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('220–280'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished text.\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C101').completed,0);let first;
  for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T14:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'C101').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('C101 277 first-pass steps measure work completion, not mastery or time spent',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T15:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'C101');assert.equal(progress.total,277);assert.equal(progress.completed,277);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C101'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C101'),progress);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {counterfactualPersons,counterfactualPatterns,modalPastPatterns,counterfactualReference,modalPastReference} from '../data/past-alternatives.mjs';
import {b202Vocabulary} from '../data/lexicon-b202.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B202');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B202-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('B202 counterfactual chains retain V3, auxiliary order, negative scope and UK/US variants',()=>{
 cases([['alternatives-forms-1','had','have'],['alternatives-forms-2','seen','saw'],['alternatives-forms-3','taken','took'],['alternatives-forms-4','would','will'],
 ['alternatives-forms-5','She would not have waited.','She would have not wait.'],['alternatives-forms-6','Would they have agreed?','Had they would agreed?'],
 ['alternatives-forms-7','If I had known, I would have replied.','If I would known, I had have replied.'],['alternatives-forms-8','would','had'],['alternatives-forms-9',"wouldn't","hadn't"],
 ['alternatives-forms-12','had','have'],['alternatives-forms-13','If she had not left.','If she did not left.'],['alternatives-forms-14','What would you have done?','What you would have done?'],
 ['alternatives-test-a-2','chosen','chose'],['alternatives-test-a-5','If we had asked, we would have learned more.','If we had asked, we would have learn more.'],
 ['alternatives-test-a-5','If we had asked, we would have learnt more.','If we had asked, we would learnt more.'],
 ['alternatives-test-b-2','caught','catched'],['alternatives-test-b-5','If I had practiced, I would have improved.','If I had practiced, I will have improved.'],
 ['alternatives-test-b-5','If I had practised, I would have improved.','If I have practised, I would have improved.']]);
});

test('B202 mixed conditions identify each time frame and main versus auxiliary have',()=>{
 cases([['alternatives-mixed-1','live','have lived'],['alternatives-mixed-2','main','auxiliary'],['alternatives-mixed-3','auxiliary','main'],
 ['alternatives-mixed-4','past','present'],['alternatives-mixed-5','working','worked'],['alternatives-mixed-6','past','present'],
 ['alternatives-test-a-7','work','have worked'],['alternatives-test-a-8','past','present'],['alternatives-test-a-9','main','auxiliary'],
 ['alternatives-test-b-7','live','have lived'],['alternatives-test-b-9','auxiliary','main'],['alternatives-review-2','help','have helped'],['alternatives-review-4','present','past']]);
 open(['alternatives-mixed-7','alternatives-mixed-8','alternatives-mixed-9','alternatives-mixed-10','alternatives-mixed-11','alternatives-mixed-12','alternatives-mixed-13','alternatives-mixed-14']);
});

test('B202 modal strength, inversion and open past conditions are not automatic causal proofs',()=>{
 cases([['alternatives-meaning-1','no','yes'],['alternatives-meaning-2','no','yes'],['alternatives-meaning-3','Had','Would'],['alternatives-meaning-4','not','no'],
 ['alternatives-test-a-10','Had','Would'],['alternatives-test-a-11','no','yes'],['alternatives-test-b-10','Had','Would'],['alternatives-test-b-11','no','yes']]);
 open(['alternatives-meaning-5','alternatives-meaning-6','alternatives-meaning-7','alternatives-meaning-8','alternatives-meaning-9','alternatives-meaning-10','alternatives-meaning-11']);
 assert(task('alternatives-meaning-8').answer.includes('неизвестный прошлый факт'));
 assert(task('alternatives-meaning-11').answer.includes('обратное условие не доказано'));
 assert(task('alternatives-meaning-9').answer.includes('might have'));
});

test('B202 journey and adapter texts keep facts, counterfactuals and unconfirmed alternatives separate',()=>{
 cases([['alternatives-reading-1','10:10','10:12'],['alternatives-reading-2','10:12','10:10'],['alternatives-reading-3','4','5'],['alternatives-reading-4','no','yes'],['alternatives-reading-5','no','yes'],
 ['alternatives-listening-1','Rafi','Tessa'],['alternatives-listening-2','adapter','laptop'],['alternatives-listening-2','adaptor','projector'],['alternatives-listening-3','2','4'],
 ['alternatives-listening-4','no','yes'],['alternatives-listening-5','no','yes'],['alternatives-test-a-12','5','10'],['alternatives-test-b-12','8','12']]);
 const text=units[0].banks.find(b=>b.id==='reading').passage;
 for(const phrase of ['smaller gallery had remained open','had not saved','ten minutes','not measured'])assert(text.includes(phrase),phrase);
 assert(task('alternatives-reading-8').answer.includes('галерея оставалась открытой'));
 assert(task('alternatives-listening-8').answer.includes('would have it now'));
 open(['alternatives-reading-6','alternatives-reading-7','alternatives-reading-8','alternatives-reading-9','alternatives-reading-12']);
});

test('B202 past deduction forms distinguish V3, passive, state and ongoing activity',()=>{
 cases([['deduction-forms-1','have','has'],['deduction-forms-2','forgotten','forgot'],['deduction-forms-3','written','wrote'],['deduction-forms-4','been','being'],['deduction-forms-5','working','worked'],
 ['deduction-forms-6','Could she have misunderstood?','Could have she misunderstood?'],['deduction-forms-7','He might not have seen it.','He might have not see it.'],
 ['deduction-forms-8','She must have taken it.','She must has taken it.'],['deduction-forms-9','He may have gone home.','He may have went home.'],
 ['deduction-forms-11','had','have'],['deduction-forms-12','deleted','deleting'],['deduction-forms-13','travelling','travelled'],['deduction-forms-13','traveling','travel'],
 ['deduction-test-a-2','seen','saw'],['deduction-test-a-10','process','state'],['deduction-test-a-11','passive','process'],['deduction-test-b-2','taken','took'],
 ['deduction-test-b-10','state','process'],['deduction-test-b-11','process','passive']]);
});

test('B202 deduction differs from obligation, negative possibility, observation and missed opportunity',()=>{
 cases([['deduction-meaning-1','must','had to'],['deduction-meaning-2','had to','must have'],['deduction-meaning-3','no','yes'],['deduction-meaning-4','no','yes'],
 ['deduction-meaning-5','state','process'],['deduction-meaning-6','passive','process'],['deduction-meaning-7','process','passive'],
 ['deduction-test-a-7','must','might'],['deduction-test-a-8','had to','must have'],['deduction-test-a-9','no','yes'],['deduction-test-b-7',"can't",'might'],['deduction-test-b-8','must','had to'],
 ['deduction-review-3','obligation','deduction'],['deduction-review-4','no','yes'],['deduction-review-5','no','yes']]);
 open(['deduction-meaning-8','deduction-meaning-9','deduction-meaning-10','deduction-meaning-11','deduction-meaning-12','deduction-meaning-13','deduction-meaning-14']);
 assert(task('deduction-meaning-8').answer.includes('контекстом'));
 assert(task('deduction-meaning-12').answer.includes('продолжиться'));
 assert(task('deduction-meaning-13').answer.includes('будущей опоры'));
});

test('B202 log and locked hall texts do not turn access, missing replies or incomplete records into proof',()=>{
 cases([['deduction-reading-1','10:00','09:45'],['deduction-reading-2','3','2'],['deduction-reading-3','no','yes'],['deduction-reading-4','no','yes'],['deduction-reading-5','no','yes'],
 ['deduction-listening-1','Tessa','Ella'],['deduction-listening-2','08:30','09:30'],['deduction-listening-2','8:30','9:30'],['deduction-listening-3','1','2'],
 ['deduction-listening-4','no','yes'],['deduction-listening-5','no','yes'],['deduction-test-a-12','no','yes'],['deduction-test-b-12','no','yes']]);
 assert(task('deduction-reading-6').answer.includes('не измерили'));assert(task('deduction-reading-7').answer.includes('предположение'));
 assert(task('deduction-reading-9').answer.includes('не гарантированно полный'));assert(task('deduction-listening-8').answer.includes('получение не исключено'));
 open(['deduction-reading-6','deduction-reading-7','deduction-reading-8','deduction-reading-9','deduction-reading-12','deduction-listening-6','deduction-listening-8']);
});

test('B202 regret forms preserve past perfect, modal have, ought to and regret patterns',()=>{
 cases([['regrets-forms-1','had','have'],['regrets-forms-2','seen','saw'],['regrets-forms-3','left','leave'],['regrets-forms-4','to','zero'],['regrets-forms-5','made','make'],
 ['regrets-forms-6','I wish I had not sent it.','I wish I did not sent it.'],['regrets-forms-7','I should not have shared that file.','I should have not share that file.'],
 ['regrets-forms-9','I wish I had taken a photo.','I wish I had took a photo.'],['regrets-forms-10','She ought to have called.','She ought have called.'],
 ['regrets-forms-11','had','did'],['regrets-forms-12','sending','to send'],['regrets-forms-13','to','for'],['regrets-forms-14','to','zero'],
 ['regrets-test-a-4','I wish we had not canceled it.','I wish we did not cancel it.'],['regrets-test-a-4','I wish we had not cancelled it.','I wish we have not cancelled it.'],
 ['regrets-test-b-2','spoken','spoke'],['regrets-test-b-6','I wish I had written it down.','I wish I had wrote it down.'],['regrets-test-b-11','deleting','to delete']]);
});

test('B202 necessity, actual participation, present wishes and expectations remain distinct',()=>{
 cases([['regrets-meaning-1','present','past'],['regrets-meaning-2','past','present'],['regrets-meaning-3','yes','no'],['regrets-meaning-4','yes','no'],
 ['regrets-meaning-5','no','yes'],['regrets-meaning-6','no','yes'],['regrets-meaning-7','expectation','regret'],['regrets-meaning-8','obligation','regret'],
 ['regrets-test-a-8','yes','no'],['regrets-test-a-9','no','yes'],['regrets-test-a-10','expectation','regret'],['regrets-test-a-12','yes','no'],
 ['regrets-test-b-8','yes','no'],['regrets-test-b-9','no','yes'],['regrets-test-b-10','expectation','regret'],['regrets-test-b-12','no','yes'],['regrets-review-5','no','yes']]);
 open(['regrets-meaning-9','regrets-meaning-10','regrets-meaning-11','regrets-meaning-12','regrets-meaning-13','regrets-meaning-14']);
 assert(task('regrets-meaning-10').answer.includes('нормативная'));assert(task('regrets-meaning-13').answer.includes('упрёк'));assert(task('regrets-meaning-14').answer.includes('будущее'));
});

test('B202 exhibition and journey reports preserve known effects, later notices and untested improvements',()=>{
 cases([['regrets-reading-1','80','35'],['regrets-reading-2','35','80'],['regrets-reading-3','yes','no'],['regrets-reading-4','no','yes'],['regrets-reading-5','no','yes'],
 ['regrets-listening-1','Amir','Jo'],['regrets-listening-2','yes','no'],['regrets-listening-3','yes','no'],['regrets-listening-4','yes','no'],['regrets-listening-5','no','yes']]);
 assert(task('regrets-reading-8').answer.includes('не признание всех причин'));assert(task('regrets-reading-9').answer.includes('ещё не было'));
 assert(task('regrets-reading-10').answer.includes('не подтверждение'));assert(task('regrets-reading-12').answer.includes('not yet been tested'));
 open(['regrets-reading-6','regrets-reading-7','regrets-reading-8','regrets-reading-9','regrets-reading-10','regrets-reading-12','regrets-listening-7','regrets-listening-8']);
});

test('B202 scoped references cover seven personal rows and contrasting modal meanings',()=>{
 assert.deepEqual(counterfactualPersons.map(r=>r[0]),['I','you','he','she','it','we','they']);
 assert.deepEqual([counterfactualPatterns.length,modalPastPatterns.length],[25,38]);
 for(const [r,n] of [[counterfactualReference,32],[modalPastReference,38]]){
  assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(r.practice.length,16);assert(r.sources.every(s=>/^https:\/\//.test(s[1])));
 }
 assert(counterfactualPatterns.find(r=>r[0]==='past/now')[3].includes('не Perfect'));
 assert(modalPastPatterns.find(r=>r[0]==='didn’t need to')[3].includes('не решает'));
 assert(modalPastPatterns.find(r=>r[0]==='future anchor')[4].includes('контекст'));
});

test('B202 adds 84 contextual cards including idioms without changing seven old IDs',()=>{
 assert.equal(b202Vocabulary.length,84);const cards=modules.find(m=>m.id==='B202').vocabulary;
 assert.equal(cards.length,91);assert.equal(new Set(cards.map(c=>c.word)).size,91);
 for(let n=1;n<=6;n++)assert(cards.some(c=>c.id==='B202-v'+n));
 assert(cards.some(c=>c.id==='B202-x-rule-out'&&c.word==='rule out'));
 assert.equal(vocabulary.find(c=>c.id==='B202-v1').ipa,'/ˈevɪdəns/');
 for(const c of b202Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['jump to conclusions','give someone the benefit of the doubt','own up','make amends','had it not been for','regret doing something'])assert(cards.some(c=>c.word===word),word);
});

test('B202 substantial linked units have unique banks, independent passages and fresh tests covering all goals',()=>{
 assert.deepEqual(units.map(u=>u.id),['B202-alternatives','B202-deduction','B202-regrets']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[102,84,86]);
 assert.deepEqual(units.map(u=>u.examples.length),[30,26,28]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[24,24],[22,22],[22,22]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'B201-past');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=5500);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?400:240));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});

test('B202 all eighteen length-specified writing models meet their own requested word range',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,18);
 assert.equal(paragraphs.filter(t=>t.prompt.includes('180–220')).length,12);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('180–220')).length,2);
});

test('B202 expansion preserves original drills, multiline archive, notes and SRS without inherited credit',()=>{
 const s=freshState();s.moduleProgress.B202={selfChecked:true,date:'2026-09-22'};s.drafts.B202='Synthetic old note.';
 s.cards['B202-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['B202-x-rule-out']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B202';s.navigation.sections.course='module/B202';
 s.navigation.pages['module/B202']={scroll:500,focus:'drill1',fields:{drill0:'would',drill1:'had\nOriginal answer',drill2:'left'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B202').total,275);assert.equal(topicWorkProgress(copy,'B202').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B202').drills.map(d=>d[0]),['If I had known, I ___ have helped.','I wish I ___ checked it.','She must have ___. (leave)']);
 delete s.navigation;assert.equal(validateState(s).drafts.B202,s.drafts.B202);
});

test('B202 multiline drafts and both attempts retain original work pending substantive review',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('180–220'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B202').completed,0);let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B202').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('B202 275 first-pass steps do not certify mastery or shrink with the study schedule',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T13:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'B202');assert.equal(progress.total,275);assert.equal(progress.completed,275);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B202'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B202'),progress);
});

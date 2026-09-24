import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {hypotheticalPersons,conditionalPatterns,wishPossibilityPatterns,conditionalReference,wishPossibilityReference} from '../data/hypothesis-reference.mjs';
import {b102Vocabulary} from '../data/lexicon-b102.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B102');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B102-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};

test('B102 has three substantial unequal units, separate texts and fresh tests for all goals',()=>{
 assert.deepEqual(units.map(u=>u.id),['B102-hypotheses','B102-wishes','B102-possibility']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[100,84,90]);
 assert.deepEqual(units.map(u=>u.examples.length),[28,24,26]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[24,24],[22,22],[24,24]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'B101-habits');
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=5300);
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
 assert.equal(new Set(passages).size,6);
});

test('B102 fifteen writing models meet 130–170 words and remain open to substantive review',()=>{
 const paragraphs=all.filter(t=>t.prompt.includes('130–170'));assert.equal(paragraphs.length,15);
 for(const t of paragraphs){const n=t.answer.split(/\s+/).length;assert(n>=130&&n<=170,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('130–170')).length,3);
});

test('B102 conditional forms have independent past, base, negative and question keys',()=>{
 cases([
  ['hypotheses-forms-1','had','have'],['hypotheses-forms-2','knew','know'],['hypotheses-forms-3','lived','live'],
  ['hypotheses-forms-4','won','win'],['hypotheses-forms-5','help','helped'],['hypotheses-forms-6','need','needed'],
  ['hypotheses-forms-7','were','is'],['hypotheses-forms-7','was','would be'],['hypotheses-forms-8','were','am'],
  ['hypotheses-forms-9','would','did'],['hypotheses-forms-10','arrives','will arrive'],['hypotheses-forms-11','shows','show'],
  ['hypotheses-forms-13','If I had a desk, I would work there.','If I had a desk, I would worked there.'],
  ['hypotheses-forms-15','Would you join the group?','Did you would join the group?'],
  ['hypotheses-forms-16','I would ask for a sample.','I had ask for a sample.'],
  ['hypotheses-test-a-1','had','would have'],['hypotheses-test-a-2','knew','knows'],['hypotheses-test-a-12','replies','will reply'],
  ['hypotheses-test-b-2','won','would win'],['hypotheses-test-b-5','was','is'],['hypotheses-test-b-5','were','is']
 ]);
});

test('B102 unless, only if and precautions preserve scope instead of reversing conditions',()=>{
 cases([
  ['hypotheses-limits-1','do not','do'],['hypotheses-limits-2','in case','if'],['hypotheses-limits-3','if','in case'],
  ['hypotheses-limits-4','no','yes'],['hypotheses-limits-5','no','yes'],['hypotheses-limits-6','no','yes'],
  ['hypotheses-limits-7',"We won't leave if you do not call.","We won't leave if you call."],
  ['hypotheses-limits-7',"We will not leave if you don't call.","We will leave if you don't call."],
  ['hypotheses-test-a-6','do not','do'],['hypotheses-test-a-7','in case','if'],['hypotheses-test-a-9','no','yes'],
  ['hypotheses-test-b-6','does not','does'],['hypotheses-test-b-7','even if','only if']
 ]);
 for(const id of ['hypotheses-limits-9','hypotheses-limits-10','hypotheses-limits-11','hypotheses-test-a-18','hypotheses-test-b-23'])assert(isOpen(task(id)),id);
 assert(conditionalPatterns.find(r=>r[0]==='unless negative')[1].includes('can’t find transport'));
 assert(conditionalPatterns.find(r=>r[0]==='only if')[4].includes('достаточно'));
});

test('B102 hypotheses distinguish time, possibility, advice and willingness exceptions',()=>{
 cases([
  ['hypotheses-meaning-1','no','yes'],['hypotheses-meaning-2','no','yes'],['hypotheses-meaning-3','no','yes'],
  ['hypotheses-meaning-4','no','yes'],['hypotheses-meaning-5','advice','order'],['hypotheses-meaning-6','no','yes'],
  ['hypotheses-meaning-7','no','yes'],['hypotheses-meaning-8','whether','condition'],['hypotheses-test-a-8','no','yes'],
  ['hypotheses-test-a-11','no','yes'],['hypotheses-test-b-8','no','yes'],['hypotheses-test-b-9','no','yes'],['hypotheses-test-b-11','yes','no'],
  ['hypotheses-sounds-1','would','had'],['hypotheses-sounds-2','no','yes']
 ]);
 for(const id of ['hypotheses-meaning-9','hypotheses-meaning-12','hypotheses-test-a-22','hypotheses-test-b-22'])assert(isOpen(task(id)),id);
 assert(conditionalPatterns.find(r=>r[0]==='will exception')[1].includes('will wait'));
 assert(conditionalPatterns.find(r=>r[0]==='whether')[1].includes('will come'));
});

test('B102 wishes use independent agreement, unreal past and modal base keys',()=>{
 cases([
  ['wishes-forms-1','knew','know'],['wishes-forms-2','had','has'],['wishes-forms-3','lived','live'],
  ['wishes-forms-4','understood','understanded'],['wishes-forms-5','cost','costed'],['wishes-forms-6','wishes','wish'],
  ['wishes-forms-7','were','was'],['wishes-forms-8','were','am'],['wishes-forms-8','was','am'],
  ['wishes-forms-9','could','can'],['wishes-forms-10','speak','spoke'],['wishes-forms-11','interrupt','interrupts'],
  ['wishes-forms-14','I wish I could help.','I wish I could to help.'],['wishes-forms-15','She wishes she had a desk.','She wish she had a desk.'],
  ['wishes-test-a-1','understood','understand'],['wishes-test-a-5','explain','explains'],['wishes-test-a-6','was','is'],
  ['wishes-test-b-3','take','took'],['wishes-test-b-5','chat','chatted'],['wishes-test-b-6','were','was']
 ]);
});

test('B102 wish meaning separates hope, courtesy, present had and past regret',()=>{
 cases([
  ['wishes-meaning-1','no','yes'],['wishes-meaning-2','no','yes'],['wishes-meaning-3','no','yes'],['wishes-meaning-4','no','yes'],
  ['wishes-meaning-5','intention','regret'],['wishes-meaning-6','main','auxiliary'],['wishes-meaning-7','past','present'],['wishes-meaning-8','no','yes'],
  ['wishes-test-a-7','no','yes'],['wishes-test-a-8','yes','no'],['wishes-test-a-9','past','present'],['wishes-test-a-10','no','yes'],
  ['wishes-test-b-7','no','yes'],['wishes-test-b-8','yes','no'],['wishes-test-b-9','no','yes'],['wishes-test-b-10','no','yes'],
  ['wishes-sounds-1','/ʃ/','/tʃ/'],['wishes-sounds-2','yes','no']
 ]);
 for(const id of ['wishes-meaning-10','wishes-meaning-13','wishes-test-a-15','wishes-test-b-20'])assert(isOpen(task(id)),id);
 assert(task('wishes-test-a-15').answer.includes('there will be'));
 assert(wishPossibilityPatterns.find(r=>r[0]==='wish: courtesy')[1]==='I wish you luck.');
 assert(wishPossibilityPatterns.find(r=>r[0]==='wish to')[1]==='I wish to ask a question.');
});

test('B102 possibility forms retain modal base, be agreement, likely to and adverbs',()=>{
 cases([
  ['possibility-forms-1','know','knows'],['possibility-forms-2','come','came'],['possibility-forms-3','be','is'],
  ['possibility-forms-4','waiting','wait'],['possibility-forms-5','is','are'],['possibility-forms-6','are','is'],
  ['possibility-forms-7','to','zero'],['possibility-forms-8','not','no'],['possibility-forms-9','be','is'],
  ['possibility-forms-10','be','can'],['possibility-forms-11','probably','probable'],['possibility-forms-12','perhaps','possible'],
  ['possibility-forms-13','She may know it.','She may knows it.'],['possibility-forms-15','Could this be the entrance?','Does this could be the entrance?'],
  ['possibility-test-a-2','standing','stand'],['possibility-test-a-5','to','zero'],['possibility-test-b-2','waiting','wait'],
  ['possibility-test-b-3','is','are'],['possibility-test-b-5','probably','probable']
 ]);
 assert(isOpen(task('possibility-forms-17')));assert(task('possibility-forms-17').answer.includes('might be able to'));
});

test('B102 modals do not conflate uncertainty, prohibition, ability and strong deduction',()=>{
 cases([
  ['possibility-meaning-1','no','yes'],['possibility-meaning-2','no','yes'],['possibility-meaning-3','no','yes'],
  ['possibility-meaning-4','permission','guess'],['possibility-meaning-5','prohibition','uncertain plan'],
  ['possibility-meaning-6','possibility','prohibition'],['possibility-meaning-7','deduction','obligation'],['possibility-meaning-8','prohibition','deduction'],
  ['possibility-test-a-6','no','yes'],['possibility-test-a-7','yes','no'],['possibility-test-a-8','deduction','obligation'],
  ['possibility-test-b-6','no','yes'],['possibility-test-b-7','prohibition','deduction'],['possibility-test-b-8','deduction','permission'],
  ['possibility-sounds-1','/aɪ/','/eɪ/'],['possibility-sounds-2','no','yes'],['possibility-test-a-11','/eɪ/','/aɪ/'],
  ['possibility-review-4',"can't","mustn't"]
 ]);
 for(const id of ['possibility-meaning-9','possibility-meaning-10','possibility-meaning-11','possibility-test-b-22'])assert(isOpen(task(id)),id);
 assert(wishPossibilityPatterns.find(r=>r[0]==='general can')[1].includes('can be icy'));
 assert(wishPossibilityPatterns.find(r=>r[0]==='negative permission')[3].includes('запрет'));
});

test('B102 readings have independently checked numbers, intentions and unknowns',()=>{
 cases([
  ['hypotheses-reading-1','Tuesday','Saturday'],['hypotheses-reading-2','12','18'],['hypotheses-reading-3','18','12'],
  ['hypotheses-reading-4','10','5'],['hypotheses-reading-5','false','true'],['hypotheses-reading-6','not stated','false'],
  ['hypotheses-reading-7','no','yes'],['hypotheses-reading-8','before','after'],
  ['wishes-reading-1','4','2'],['wishes-reading-2','2','4'],['wishes-reading-3','false','true'],['wishes-reading-4','first','last'],
  ['wishes-reading-5','true','false'],['wishes-reading-6','not stated','true'],['wishes-reading-7','false','true'],['wishes-reading-8','no','yes'],
  ['possibility-reading-1','3','4'],['possibility-reading-2','4','3'],['possibility-reading-3','2','3'],
  ['possibility-reading-4','false','true'],['possibility-reading-5','not stated','false'],['possibility-reading-6','yes','no'],
  ['possibility-reading-7','false','true'],['possibility-reading-8','14:00','16:00'],['possibility-reading-9','no','yes'],['possibility-reading-10','not stated','true']
 ]);
});

test('B102 listening uses independent texts and limits partial evidence to what was checked',()=>{
 cases([
  ['hypotheses-listening-1','Rosa','Mara'],['hypotheses-listening-2','3','4'],['hypotheses-listening-3','Thursday','Tuesday'],
  ['hypotheses-listening-4','no','yes'],['hypotheses-listening-5','2','3'],['hypotheses-listening-6','yes','no'],
  ['wishes-listening-1','Tariq','Mila'],['wishes-listening-2','Wednesday','Friday'],['wishes-listening-3','work','illness'],
  ['wishes-listening-4','Friday','Wednesday'],['wishes-listening-5','no','yes'],['wishes-listening-6','Tuesday','Thursday'],
  ['possibility-listening-1','Dev','Elena'],['possibility-listening-2','3','2'],['possibility-listening-3','2','3'],
  ['possibility-listening-4','no','yes'],['possibility-listening-5','no','yes'],['possibility-listening-6','afternoon','evening'],
  ['possibility-listening-7','no','yes'],['possibility-listening-8','no','yes']
 ]);
});

test('B102 references cover seven persons and scoped condition/wish/modal contrasts',()=>{
 assert.deepEqual(hypotheticalPersons.map(r=>r[0]),['I','you','he','she','it','we','they']);
 assert.equal(conditionalPatterns.length,22);assert.equal(wishPossibilityPatterns.length,32);
 for(const [r,n] of [[conditionalReference,29],[wishPossibilityReference,32]]){
  assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(r.practice.length,16);
  assert.equal(new Set(r.rows.map(row=>row[0])).size,n);assert(r.intro.join(' ').includes('не все'));
 }
 assert(hypotheticalPersons.find(r=>r[0]==='you')[4].includes('Yes, I would'));
 assert(wishPossibilityPatterns.find(r=>r[0]==='past regret preview')[4].includes('B202'));
});

test('B102 adds 84 contextual IPA cards, preserves seven old IDs and avoids duplicate topic words',()=>{
 assert.equal(b102Vocabulary.length,84);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id===`B102-v${n}`));
 assert(vocabulary.some(c=>c.id==='B102-x-in-case'&&c.word==='in case'));
 for(const c of b102Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['wishful thinking','up in the air','jump to conclusions','rule out','only if','if only','be likely to'])assert(b102Vocabulary.some(c=>c.word===word),word);
 assert.equal(b102Vocabulary.find(c=>c.word==='wish').ipa,'/wɪʃ/');
 const cards=modules.find(m=>m.id==='B102').vocabulary;assert.equal(cards.length,91);assert.equal(new Set(cards.map(c=>c.word)).size,91);
});

test('B102 expansion preserves original drills, multiline archive, notes and SRS with no inherited credit',()=>{
 const s=freshState();s.moduleProgress.B102={selfChecked:true,date:'2026-09-22'};s.drafts.B102='Synthetic old note.';
 s.cards['B102-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B102';s.navigation.sections.course='module/B102';
 s.navigation.pages['module/B102']={scroll:500,focus:'drill1',fields:{drill0:'were',drill1:'had\nOriginal answer',drill2:'do not'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B102').total,277);assert.equal(topicWorkProgress(copy,'B102').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B102').drills.map(d=>d[0]),['If I ___ you, I would ask.','I wish I ___ more time. (have)','Unless you hurry = If you ___ hurry.']);
 delete s.navigation;assert.equal(validateState(s).drafts.B102,s.drafts.B102);
});

test('B102 multiline exam drafts and two attempts retain original work pending substantive review',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('130–170'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B102').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B102').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('B102 277 first-pass steps do not claim mastery or change with available study time',()=>{
 const s=freshState();
 for(const u of units){
  const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T13:00:00Z');
  assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 }
 const progress=topicWorkProgress(s,'B102');assert.equal(progress.total,277);assert.equal(progress.completed,277);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B102'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B102'),progress);
});

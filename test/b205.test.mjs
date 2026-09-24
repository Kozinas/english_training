import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {ellipsisPatterns,presentationPatterns,discussionPatterns,ellipsisReference,presentationReference,discussionReference} from '../data/discourse-reference.mjs';
import {b205Vocabulary} from '../data/lexicon-b205.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B205');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B205-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('B205 one/ones, it and uncountable reference are not interchangeable',()=>{
 cases([['ellipsis-forms-1','one','it'],['ellipsis-forms-2','it','one'],['ellipsis-forms-3','ones','one'],['ellipsis-forms-4','any','one'],['ellipsis-forms-5','is','are'],
 ['ellipsis-forms-16','I prefer the smaller boxes, not the large ones.','I prefer the smaller boxes, not the large one.'],
 ['ellipsis-meaning-1','no','yes'],['ellipsis-review-3','some','one'],['ellipsis-test-a-1','one','it'],['ellipsis-test-a-2','it','one'],['ellipsis-test-b-3','ones','one']]);
 assert(units[0].explanation.some(e=>e.text.includes('a piece of advice')));
});

test('B205 auxiliary ellipsis retains agreement, tense, negation, states and to',()=>{
 cases([['ellipsis-forms-8','am','do'],['ellipsis-forms-9','does','do'],['ellipsis-forms-10','did','do'],['ellipsis-forms-11','can','does'],
 ['ellipsis-forms-12','have','do'],['ellipsis-forms-13','do',"don't"],['ellipsis-forms-14','to','so'],
 ['ellipsis-forms-15','I know the route; she does too.','I know the route; she do too.'],['ellipsis-forms-17','So can I.','So I can.'],
 ['ellipsis-forms-18','Neither do I.',"Neither don't I."],['ellipsis-review-1','were','was'],['ellipsis-review-2','has','does'],
 ['ellipsis-test-a-4','has','does'],['ellipsis-test-a-5','did','do'],['ellipsis-test-a-7','So can she.','So she can.'],
 ['ellipsis-test-b-4','was','did'],['ellipsis-test-b-5','can','does'],['ellipsis-test-b-7','So have we.','So we have.'],
 ['ellipsis-test-b-8','I own a bicycle; she does too.','I own a bicycle; she do too.']]);
 assert(units[0].explanation.some(e=>e.text.includes('вспомогательный')&&e.text.includes('know')));
});

test('B205 hope, reported claims and affirming so do not become facts or additive so',()=>{
 cases([['ellipsis-forms-6','not','so'],['ellipsis-forms-7','so','not'],['ellipsis-meaning-2','no','yes'],['ellipsis-meaning-3','no rain','rain'],
 ['ellipsis-meaning-4','no','yes'],['ellipsis-meaning-5','confirmation','addition'],['ellipsis-meaning-6','addition','confirmation'],
 ['ellipsis-review-4','no','yes'],['ellipsis-test-a-9','no snow','snow'],['ellipsis-test-a-10','confirmation','addition'],['ellipsis-test-b-9','wish','confirmed attendance']]);
 open(['ellipsis-forms-19','ellipsis-forms-20','ellipsis-meaning-7','ellipsis-meaning-8','ellipsis-test-a-11','ellipsis-test-b-11']);
 assert(units[0].explanation.some(e=>e.text.includes('I think not тоже нормативно')));
 assert(units[0].explanation.some(e=>e.text.includes('Me too / Me neither естественны')));
});

test('B205 shortened exhibition and route exchanges preserve source, referent and unconfirmed booking',()=>{
 cases([['ellipsis-reading-1','Nina','Tom'],['ellipsis-reading-2','2','3'],['ellipsis-reading-3','blue','green'],['ellipsis-reading-4','no','yes'],['ellipsis-reading-5','Nina','Tom'],
 ['ellipsis-listening-1','Leah','Omar'],['ellipsis-listening-2','no','yes'],['ellipsis-listening-3','2','3'],['ellipsis-listening-4','shorter','longer'],['ellipsis-listening-5','no','yes']]);
 for(const group of ['reading','listening'])open([`ellipsis-${group}-6`,`ellipsis-${group}-7`,`ellipsis-${group}-8`,`ellipsis-${group}-9`,`ellipsis-${group}-10`]);
 assert(task('ellipsis-production-6').answer.includes('booking'));
 assert(task('ellipsis-production-7').answer.includes('entrance'));
});

test('B205 emphatic do retains base forms and does not precede finite be or a modal',()=>{
 cases([['presentation-forms-1','understand','understands'],['presentation-forms-2','support','supports'],['presentation-forms-3','check','checked'],['presentation-forms-4','did','does'],
 ['presentation-forms-5','to','of'],['presentation-forms-6','words','word'],['presentation-forms-7','instance','instances'],['presentation-forms-8','back','off'],
 ['presentation-forms-9','She does understand the risk.','She does understands the risk.'],['presentation-forms-10','They did check the total.','They did checked the total.'],
 ['presentation-forms-11','We are ready.','We do are ready.'],['presentation-forms-12','I can explain.','I do can explain.'],
 ['presentation-test-a-6','She did confirm the time.','She did confirmed the time.'],['presentation-test-b-6','We did measure the distance.','We did measured the distance.'],
 ['presentation-test-b-7','She can help.','She do can help.']]);
});

test('B205 signposting, only scope, punctuation and audible focus receive distinct checks',()=>{
 cases([['presentation-meaning-1','addition','result'],['presentation-meaning-2','result','addition'],['presentation-meaning-3','example','decision'],
 ['presentation-meaning-4','person','object'],['presentation-meaning-5','object','person'],['presentation-meaning-6','no','yes'],
 ['presentation-review-2','restatement','new unsupported claim'],['presentation-test-a-5','person','object'],['presentation-test-b-5','object','person']]);
 // The engine deliberately normalises punctuation: punctuation-only tasks must not use exact matching.
 open(['presentation-forms-14','presentation-review-6','presentation-test-a-11','presentation-test-b-11']);
 for(const t of units[1].banks.find(b=>b.id==='sounds').tasks)assert.equal(t.kind,'speech');
});

test('B205 presentation data retain denominators, observed conditions and unknown long-term use',()=>{
 cases([['presentation-reading-1','Aisha','Ben'],['presentation-reading-2','12','9'],['presentation-reading-3','9','12'],['presentation-reading-4','7','9'],['presentation-reading-5','no','yes'],
 ['presentation-listening-1','Marco','Aisha'],['presentation-listening-2','10','8'],['presentation-listening-3','8','10'],['presentation-listening-4','no','yes'],['presentation-listening-5','routes','visitors'],
 ['presentation-test-a-8','13','18'],['presentation-test-a-9','8','13'],['presentation-test-b-8','16','21'],['presentation-test-b-9','11','16']]);
 open(['presentation-reading-6','presentation-reading-7','presentation-reading-8','presentation-listening-6','presentation-listening-7','presentation-listening-8']);
 assert(task('presentation-test-a-14').answer.includes('thirteen'));
 assert(task('presentation-test-b-14').answer.includes('sixteen'));
});

test('B205 discussion forms retain modal base, ing, agree patterns and indirect question order',()=>{
 cases([['discussion-forms-1','add','added'],['discussion-forms-2','visit','to visit'],['discussion-forms-3','checking','to check'],['discussion-forms-4','by','of'],
 ['discussion-forms-5','on','with'],['discussion-forms-6','to','for'],['discussion-forms-7','Could we compare the rooms?','Could we to compare the rooms?'],
 ['discussion-forms-8','I suggest visiting the hall.','I suggest to visit the hall.'],['discussion-forms-9','Could you tell me what ready means?','Could you tell me what does ready mean?'],
 ['discussion-test-a-3','to','with'],['discussion-test-a-4','on','to'],['discussion-test-b-4','with','to'],['discussion-test-b-6','We suggest inspecting the bus.','We suggest to inspect the bus.']]);
 open(['discussion-forms-10','discussion-forms-11','discussion-forms-12','discussion-forms-13','discussion-forms-14']);
});

test('B205 understanding, proposals, accepted actions, conditions and execution are different statuses',()=>{
 cases([['discussion-meaning-1','no','yes'],['discussion-meaning-2','no','yes'],['discussion-meaning-3','proposal','decision'],['discussion-meaning-4','no','yes'],
 ['discussion-meaning-5','no','yes'],['discussion-meaning-6','no','yes'],['discussion-test-a-7','no','yes'],['discussion-test-a-8','proposed','approved'],
 ['discussion-test-a-10','no','yes'],['discussion-test-b-8','unconfirmed','confirmed'],['discussion-test-b-10','no','yes']]);
 open(['discussion-test-a-11','discussion-test-a-12','discussion-test-a-18','discussion-test-a-19','discussion-test-b-11','discussion-test-b-12','discussion-test-b-18','discussion-test-b-19']);
 assert(task('discussion-test-a-12').answer.includes('Saturday'));assert(task('discussion-test-b-12').answer.includes('contact details'));
 assert(task('discussion-test-a-22').answer.includes('Eva was absent'));assert(task('discussion-test-b-22').answer.includes('no payment'));
});

test('B205 meeting passages and role tasks retain conditions, absent participants and actual responses',()=>{
 cases([['discussion-reading-1','Priya','Malik'],['discussion-reading-2','40','65'],['discussion-reading-3','East','West'],['discussion-reading-4','Rosa','Dana'],['discussion-reading-5','no','yes'],
 ['discussion-listening-1','Sana','Leo'],['discussion-listening-2','Monday','Wednesday'],['discussion-listening-3','Hugo','Leo'],['discussion-listening-4','no','yes'],['discussion-listening-5','no','yes'],
 ['discussion-test-a-9','B','A'],['discussion-test-b-9','X','Y']]);
 assert(task('discussion-production-6').answer.includes('after six'));assert(task('discussion-production-7').answer.includes('online'));
 for(const id of ['discussion-production-9','discussion-production-10','discussion-production-11','discussion-test-a-21','discussion-test-b-21'])assert.equal(task(id).kind,'speech');
 assert(task('discussion-production-10').explanation.includes('Не требовать выдуманного согласия'));
});

test('B205 three scoped references retain complete rows and sixteen application tasks each',()=>{
 assert.deepEqual([ellipsisPatterns.length,presentationPatterns.length,discussionPatterns.length],[32,28,28]);
 for(const [r,n] of [[ellipsisReference,32],[presentationReference,28],[discussionReference,28]]){
  assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(new Set(r.rows.map(row=>row[0])).size,n);
  assert.equal(r.practice.length,16);assert(r.practice.every(row=>row.length===2&&row.every(Boolean)));assert.equal(r.sources.length,6);
 }
 assert(ellipsisPatterns.some(r=>r[0]==='affirming so'));assert(presentationPatterns.some(r=>r[0]==='only scope'));assert(discussionPatterns.some(r=>r[0]==='minutes dissent'));
});

test('B205 contextual vocabulary preserves seven old IDs and adds useful speech chunks and idioms',()=>{
 const cards=vocabulary.filter(v=>v.module==='B205');assert.equal(b205Vocabulary.length,84);assert.equal(cards.length,91);assert.equal(new Set(cards.map(c=>c.word)).size,91);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='B205-v'+i));assert(cards.some(c=>c.id==='B205-x-on-other-hand'&&c.word==='on the other hand'));
 for(const c of b205Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['So do I','So I do','I hope not','leave it open','meet halfway','wrap up','agree on a date','subject to confirmation'])assert(cards.some(c=>c.word===word),word);
});

test('B205 naturally scoped units have independent passages, varied banks and fresh tests of every goal',()=>{
 assert.deepEqual(units.map(u=>u.id),['B205-ellipsis','B205-presentation','B205-discussion']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[88,82,86]);assert.deepEqual(units.map(u=>u.examples.length),[30,26,28]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[24,24],[22,22],[24,24]]);const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'B204-lexis');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=6000);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?420:250));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});

test('B205 all fifteen specified-length models match their ranges and await substantive evaluation',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,15);assert.equal(paragraphs.filter(t=>t.prompt.includes('180–220')).length,12);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('180–220')).length,2);
});

test('B205 preserves original drill archive, multiline answers, notes and SRS without inherited completion',()=>{
 const s=freshState();s.moduleProgress.B205={selfChecked:true,date:'2026-09-22'};s.drafts.B205='Synthetic original note.';
 s.cards['B205-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['B205-x-on-other-hand']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B205';s.navigation.sections.course='module/B205';
 s.navigation.pages['module/B205']={scroll:420,focus:'drill1',fields:{drill0:'so',drill1:'not\nOriginal answer',drill2:'therefore'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B205').total,259);assert.equal(topicWorkProgress(copy,'B205').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B205').drills.map(d=>d[0]),['I think ___ (замени целое утверждение).','I hope ___ (надеюсь, что нет).','It failed; ___, we retried. (therefore/moreover)']);
 delete s.navigation;assert.equal(validateState(s).drafts.B205,s.drafts.B205);
});

test('B205 multiline drafts and both submitted variants preserve originals and pending reviews',()=>{
 for(const u of units){const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('180–220'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished text.\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B205').completed,0);let first;
  for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T14:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B205').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('B205 259 first-pass steps are completion, not mastery, and do not depend on study duration',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T15:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'B205');assert.equal(progress.total,259);assert.equal(progress.completed,259);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B205'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B205'),progress);
});

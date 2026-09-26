import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {discoursePatterns,discourseReference,discourseSources} from '../data/listening-discourse.mjs';
import {freshState,validateState,isOpen,checkAnswer,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const u=subtopics.find(u=>u.id==='C203-discourse'),first=subtopics.find(u=>u.id==='C203-inference');
const all=[...u.banks,...u.tests].flatMap(b=>b.tasks);
const task=id=>all.find(t=>t.id==='C203-discourse-'+id);
const cases=rows=>{for(const [id,right,wrong] of rows){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};

test('C203 discourse grammar distinguishes concession, source, conditions and embedded order',()=>{
 cases([['forms-1','Although','Despite'],['forms-2','Despite','Although'],['forms-3','According','Depending'],['forms-4','other','another'],['forms-5','that','what'],['forms-6','contrast','contrary'],['forms-7','Could you explain why the proposal changed?','Could you explain why did the proposal change?'],['forms-8','Could you clarify what changed?','Could you clarify what did changed?'],['forms-9','Despite the delay, the review continued.','Despite of the delay, the review continued.'],['test-a-4','Could you explain why the committee narrowed the trial?','Could you explain why did the committee narrow the trial?'],['test-b-4','Could you clarify why the timetable was revised?','Could you clarify why was the timetable revised?']]);
 assert(isOpen(task('forms-11')),'punctuation variants are not graded by normalised string equality');
});
test('C203 discourse separates examples, questions, corrected figures and decision status',()=>{
 cases([['structure-1','illustration','population statistic'],['structure-2','no','yes'],['structure-3','no','yes'],['structure-4','40','14'],['test-a-6','17','70'],['test-a-7','11','17'],['test-a-8','no','yes'],['test-a-9','no','yes'],['test-b-6','30','13'],['test-b-7','19','30'],['test-b-8','no','yes'],['test-b-9','no','yes']]);
 for(const id of ['structure-8','structure-9','structure-10','structure-11','structure-14','test-a-10','test-a-16','test-b-10','test-b-16'])assert(isOpen(task(id)),id);
 assert(task('structure-10').answer.includes('помощь стала самостоятельностью'));
 assert(task('test-b-13').explanation.includes('не доказывает, что каждый воспользовался'));
});
test('C203 long reading preserves units, corrected number, conditional support and source estimate',()=>{
 cases([['reading-1','Lena','Mara'],['reading-2','80','18'],['reading-3','50','80'],['reading-4','supervisor','visitor'],['reading-5','no','yes']]);
 const reading=u.banks.find(b=>b.id==='reading').passage;
 assert(reading.includes('eighty requests from fifty distinct members'));
 assert(reading.includes('gather preferred collection times and check supervisor availability'));
 assert(task('reading-9').answer.includes("treasurer's estimate"));
 assert(task('reading-9').answer.includes('if the current storage room remained in use'));
 assert(task('reading-11').answer.includes('record does not say that Beth volunteered'));
});
test('C203 long audio retains recommendation change, submission support and narrow final agreement',()=>{
 cases([['listening-1','Mara','Lena'],['listening-2','centre','online'],['listening-2','center','online'],['listening-3','60','16'],['listening-4','40','60'],['listening-5','2','1'],['listening-6','Wednesday','Friday'],['listening-7','Friday','Wednesday'],['listening-8','no','yes']]);
 const audio=u.banks.find(b=>b.id==='listening').passage;
 assert(audio.includes('one Saturday workshop'));assert(audio.includes('The chair accepted the correction'));
 assert(task('listening-10').answer.includes('не независимое выполнение всеми'));
 assert(task('listening-13').answer.includes('Телефон остаётся доступным'));
 assert(task('listening-14').answer.includes('не весь труд сотрудников'));
 assert(task('listening-15').answer.includes('Omar will ask'));
 assert(task('listening-16').answer.includes('chair изменил'));
});
test('C203 readings and audio are independent: similar numerical structures cannot be merged',()=>{
 const reading=u.banks.find(b=>b.id==='reading').passage,audio=u.banks.find(b=>b.id==='listening').passage;
 assert.notEqual(reading,audio);assert(reading.includes('tool library'));assert(audio.includes('learning centre'));
 assert(task('review-6').answer.includes('eighty requests/fifty members'));
 assert(task('review-6').answer.includes('sixty requests/forty people'));
 assert(task('review-6').explanation.includes('Источники не объединяются'));
});
test('C203 authentic transfer and oral exams require actual listening, separate modes and fresh material',()=>{
 const transfer=u.banks.find(b=>b.id==='transfer');assert.equal(transfer.tasks.length,14);assert(transfer.tasks.every(isOpen));
 assert.deepEqual(transfer.resources,[discourseSources[4],discourseSources[3]]);
 assert(transfer.instructions.includes('не засчитывает аудирование'));assert(transfer.instructions.includes('реклама может менять таймкоды'));
 assert(task('transfer-3').answer.includes('Chris Anderson'));
 assert(task('transfer-3').explanation.includes('не становится третьим непосредственно услышанным'));
 assert(task('transfer-10').explanation.includes('не подтверждает медицинские или научные тезисы'));
 assert(task('test-a-20').explanation.includes('отрезок уже знаком'));
 assert(task('test-b-20').prompt.includes('Julia Dhar'));assert(task('test-b-20').explanation.includes('монолог, не интервью двух голосов'));
 assert(task('test-b-19').explanation.includes('heardAudio'));
});
test('C203 discourse has substantial explanations, 32 examples, 106 varied tasks and two fresh exams',()=>{
 assert.deepEqual(u.prerequisites,['C203-inference','C105-synthesis']);assert.equal(u.examples.length,32);
 assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>8000);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,10,12,18,12,14,12]);
 assert(u.banks.find(b=>b.id==='reading').passage.split(/\s+/).length>=700);
 assert(u.banks.find(b=>b.id==='listening').passage.split(/\s+/).length>=1100);
 assert(u.banks.filter(b=>b.passage).every(b=>b.passage.toLowerCase().includes('fictional')));
 const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
 for(const exam of u.tests){assert.equal(exam.tasks.length,24);for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id));for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
});
test('C203 six new writing models meet actual word ranges including a full 320–380 word synthesis',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,6);
 assert.equal(paragraphs.filter(t=>t.prompt.includes('320–380')).length,1);
 assert.equal(paragraphs.filter(t=>t.prompt.includes('220–280')).length,1);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
});
test('C203 discourse reference and new card tail retain their explicit scope and stable IDs',()=>{
 assert.equal(discoursePatterns.length,28);assert(discoursePatterns.every(r=>r.length===4&&r.every(Boolean)));assert.equal(discourseReference.practice.length,16);
 const cards=vocabulary.filter(v=>v.module==='C203'),tail=cards.filter(v=>/^C203-x-\d+$/.test(v.id)&&Number(v.id.split('-').at(-1))>36&&Number(v.id.split('-').at(-1))<=68);
 assert.equal(tail.length,32);assert.equal(tail[0].id,'C203-x-37');assert.equal(tail.at(-1).id,'C203-x-68');
 assert.equal(cards.find(c=>c.id==='C203-x-36').word,'come across as');assert.equal(cards.find(c=>c.id==='C203-x-1').word,'implication');
 for(const word of ['gist','caveat','unaided','provided that','lose track of'])assert(tail.some(c=>c.word===word));
 assert(discourseSources.some(([,url])=>url.includes('podcasts.apple.com')));
 assert(discourseSources.some(([,url])=>url.includes('julia_dhar')));
});
test('C203 first-release learning, reviews, drafts, navigation and SRS survive denominator growth',()=>{
 const s=freshState(),p=unitState(s,first.id);
 for(const t of first.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
 p.examDraft.answers=Object.fromEntries(first.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,first.id,'2026-09-26T12:00:00Z');
 const reviewed=first.tests[0].tasks.find(t=>t.kind==='text');p.attempts[0].reviews[reviewed.id]={score:3,reviewer:'Synthetic teacher',evidence:'Synthetic fixture: meaning and source retained.',date:'2026-09-26T12:10:00Z',heardAudio:false};
 startUnitTest(s,first.id);p.examDraft.answers[first.tests[1].tasks.find(t=>t.kind==='text').id]='Synthetic draft\nContinue later.';
 s.bookmark={route:'unit/C203-inference/test',scroll:650,focus:''};s.navigation.current='unit/C203-inference/test';s.navigation.sections.course=s.navigation.current;s.navigation.pages[s.navigation.current]={scroll:650,focus:'',fields:{},details:[]};
 s.cards['C203-x-36']=reviewCard(null,'good',Date.UTC(2026,8,26));s.drafts.C203='Synthetic old notes.';
 const previous=structuredClone(s),restored=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(restored,previous);
 const progress=topicWorkProgress(restored,'C203');assert.equal(progress.completed,97);assert.equal(progress.total,309);assert.equal(progress.percent,31);
 assert(!restored.learning[u.id],'import must not fabricate new-unit responses');
 unitState(restored,u.id).answers[u.banks[0].tasks[0].id]='Although';assert.equal(topicWorkProgress(restored,'C203').completed,98);
 assert.deepEqual(restored.learning[first.id],previous.learning[first.id]);assert.deepEqual(restored.cards,previous.cards);assert.deepEqual(restored.navigation,previous.navigation);
});
test('C203 discourse exam drafts, both original attempts and all open responses remain pending',()=>{
 const s=freshState(),p=unitState(s,u.id),essay=u.tests[0].tasks.find(t=>/100–140/.test(t.prompt));p.examDraft.answers[essay.id]='Synthetic multiline\nunfinished answer';
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C203').completed,0);
 let firstAttempt;
 for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-26T13:00:00Z');
  const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.total,9);assert.equal(result.correct,9);assert.equal(result.pending,15);assert.equal(result.status,'awaiting-review');assert.equal(topicWorkProgress(s,'C203').completed,1);
  if(exam.id==='a'){firstAttempt=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],firstAttempt);
 }
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
});
test('C203 first two published units retain 204 steps without completing the new third unit',()=>{
 const s=freshState();for(const unit of [first,u]){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,unit.id,'2026-09-26T13:00:00Z');assert.equal(scoreUnitTest(unit,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'C203');assert.equal(progress.completed,204);assert.equal(progress.total,309);assert.equal(progress.percent,66);
 const topic=modules.find(m=>m.id==='C203');assert.equal(topic.contentStatus,'expanded');assert.deepEqual(topic.remainingScope,[]);
 s.profile.minutes=15;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C203'),progress);assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C203'),progress);
});

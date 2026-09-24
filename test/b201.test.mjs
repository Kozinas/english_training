import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {pastDurationPersons,futureFramePersons,futureResultPersons,futureDurationPersons,pastDurationPatterns,futureFramePatterns,futureResultPatterns,pastDurationReference,futureFrameReference,futureResultReference} from '../data/time-perspectives.mjs';
import {b201Vocabulary} from '../data/lexicon-b201.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B201');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B201-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('B201 past duration preserves auxiliary order, negatives, questions and UK/US spelling',()=>{
 cases([['past-forms-1','had','has'],['past-forms-2','been','being'],['past-forms-3','running','runing'],['past-forms-4','making','makeing'],
 ['past-forms-5','travelling','travelled'],['past-forms-5','traveling','travel'],['past-forms-6','Had she been drawing?','Did she had been drawing?'],
 ['past-forms-7','We had not been arguing.','We did not been arguing.'],['past-forms-8','He had been carrying boxes.','He would been carrying boxes.'],
 ['past-forms-9','had','did'],['past-forms-10',"hadn't",'did not'],['past-forms-11','How long had she been studying?','How long she had been studying?'],['past-forms-13','Had they been practicing?','Did they had been practicing?'],
 ['past-test-a-2','jogging','joging'],['past-test-a-7','I had not been using it.','I did not using it.'],['past-test-b-2','sitting','siting'],['past-test-b-4','had','were']]);
});
test('B201 past frame, state and completed count are not collapsed into duration markers',()=>{
 cases([['past-meaning-1','frame','duration'],['past-meaning-2','count','activity'],['past-meaning-3','3','4'],['past-meaning-4','known','been knowing'],
 ['past-meaning-5','since','for'],['past-meaning-6','for','since'],['past-test-a-9','known','been knowing'],['past-test-b-9','owned','been owning'],
 ['past-review-1','have','had'],['past-review-2','waited','have waited'],['past-review-4','written','writing']]);
 open(['past-meaning-7','past-meaning-8','past-meaning-9','past-meaning-10','past-meaning-11','past-meaning-12','past-test-a-13','past-test-b-13']);
 assert(task('past-meaning-9').answer.includes('Обе'));assert(task('past-meaning-8').answer.includes('подтверждения'));
});
test('B201 past reading distinguishes scanned folders, labels, image quality and pauses',()=>{
 cases([['past-reading-1','11:30','9:30'],['past-reading-2','9:30','11:30'],['past-reading-3','18','60'],['past-reading-4','60','18'],['past-reading-5','no','yes']]);
 const read=units[0].banks.find(b=>b.id==='reading').passage;
 for(const text of ['ten-minute break at 10:15','eighteen','sixty','11:20','names on those folders'])assert(read.includes(text),text);
 open(['past-reading-6','past-reading-7','past-reading-8','past-reading-9','past-reading-10']);
 assert(task('past-reading-9').answer.includes('неполон'));assert(task('past-reading-10').answer.includes('не принято'));
});
test('B201 independent rehearsal audio and new tests keep incomplete results unknown',()=>{
 cases([['past-listening-1','Nina','Ben'],['past-listening-2','16:00','14:30'],['past-listening-2','4:00','3:00'],['past-listening-3','14:30','16:00'],
 ['past-listening-4','3','all'],['past-listening-5','no','yes'],['past-test-a-11','90','60'],['past-test-b-11','105','75'],['past-test-a-12','no','yes'],['past-test-b-12','no','yes']]);
 assert(task('past-listening-7').answer.includes('не знала'));assert(task('past-listening-8').answer.includes('five/five thirty'));
 open(['past-listening-6','past-listening-7','past-listening-8','past-test-a-15','past-test-b-15']);
});
test('B201 future frame keeps modal base, inversion, contractions and short answers',()=>{
 cases([['frame-forms-1','be','is'],['frame-forms-2','swimming','swiming'],['frame-forms-4','travelling','travelled'],['frame-forms-4','traveling','travel'],
 ['frame-forms-5','Will he be studying?','Does he will be studying?'],['frame-forms-6','We will not be waiting.','We will be not wait.'],
 ['frame-forms-7','She will not be joining us.','She would not be joining us.'],['frame-forms-9','will','be'],['frame-forms-10',"won't",'do not'],
 ['frame-forms-11','Where will she be working?','Where she will be working?'],['frame-test-a-2','leaving','leaveing'],['frame-test-b-2','cycling','cycleing']]);
});
test('B201 future meanings distinguish time clauses from indirect questions and plans from permission',()=>{
 cases([['frame-meaning-1','no','yes'],['frame-meaning-2','know','be knowing'],['frame-meaning-3','activity','possession'],
 ['frame-meaning-4','arrives','will arrive'],['frame-meaning-5','will','does'],['frame-meaning-6','until','by'],
 ['frame-test-a-8','open','will open'],['frame-test-a-9','will','are'],['frame-test-b-8','arrives','will arrive'],['frame-test-b-9','will','does'],
 ['frame-test-a-11','no','yes'],['frame-test-a-12','no','yes'],['frame-test-b-11','no','yes'],['frame-test-b-12','no','yes']]);
 open(['frame-meaning-7','frame-meaning-8','frame-meaning-9','frame-meaning-10','frame-meaning-11','frame-meaning-12']);
 assert(task('frame-meaning-10').answer.includes('разрешению'));assert(task('frame-meaning-8').answer.includes('перспектива'));
});
test('B201 club and call texts preserve confirmed rooms, tentative slots, condition and equipment ownership',()=>{
 cases([['frame-reading-1','Saturday','Friday'],['frame-reading-2','11:00','10:00'],['frame-reading-3','Room A','Room B'],['frame-reading-4','no','yes'],['frame-reading-5','no','yes'],
 ['frame-listening-1','Marco','Erin'],['frame-listening-2','13:00','15:30'],['frame-listening-3','15:30','13:00'],['frame-listening-4','no','yes'],['frame-listening-5','no','yes']]);
 assert(task('frame-listening-4').prompt.includes('confirm'));assert(task('frame-reading-10').answer.includes('tomorrow'));
 open(['frame-reading-6','frame-reading-7','frame-reading-8','frame-reading-9','frame-listening-6','frame-listening-7','frame-listening-8']);
 const read=units[1].banks.find(b=>b.id==='reading').passage;assert(read.includes('It is not permission'));assert(read.includes('If it rains'));
});
test('B201 future perfect chains use V3, been, modal inversion and will short answers',()=>{
 cases([['result-forms-1','have','has'],['result-forms-2','written','wrote'],['result-forms-3','sent','sended'],['result-forms-4','been','being'],['result-forms-5','running','run'],
 ['result-forms-6','Will she have completed it?','Will she has completed it?'],['result-forms-7','We will not have arrived.','We have not will arrived.'],
 ['result-forms-8','Will they have been waiting?','Will have they been waiting?'],['result-forms-10','will','have'],['result-forms-11',"won't","haven't"],
 ['result-test-a-2','taken','took'],['result-test-b-2','chosen','chose'],['result-test-b-7','He will have taken the boxes.','He will have took the boxes.'],['result-forms-16','She will not have been traveling.','She will not has been traveling.']]);
});
test('B201 future result, activity, continuing state and passive are distinct',()=>{
 cases([['result-meaning-1','known','been knowing'],['result-meaning-2','count','duration'],['result-meaning-3','duration','count'],
 ['result-meaning-4','Simple','Continuous'],['result-meaning-5','passive','continuous'],['result-meaning-6','continuous','passive'],
 ['result-test-a-8','known','been knowing'],['result-test-a-9','passive','continuous'],['result-test-a-10','Simple','Continuous'],
 ['result-test-b-8','owned','been owning'],['result-test-b-9','passive','continuous'],['result-test-b-10','Continuous','Simple']]);
 open(['result-meaning-11','result-meaning-12','result-meaning-13','result-meaning-14','result-meaning-15','result-meaning-16']);
 assert(task('result-meaning-11').answer.includes('обе'));assert(task('result-meaning-15').answer.includes('сейчас'));
});
test('B201 deadlines, continued periods, lower bounds and future-start arithmetic have independent keys',()=>{
 cases([['result-meaning-7','by','until'],['result-meaning-8','until','by'],['result-meaning-9','until','by'],['result-meaning-10','arrives','will arrive'],
 ['result-test-a-11','arrives','will arrive'],['result-test-a-12','until','by'],['result-test-a-13','150','120'],['result-test-a-14','no','yes'],
 ['result-test-b-11','return','will return'],['result-test-b-12','by','until'],['result-test-b-13','165','135'],['result-test-b-14','no','yes']]);
 open(['result-test-a-16','result-test-a-22','result-test-b-15','result-test-b-16','result-test-b-22']);
});
test('B201 forecast texts distinguish copied, verified, completed and passed without inventing failure',()=>{
 cases([['result-reading-1','10','6'],['result-reading-2','6','10'],['result-reading-3','Wednesday','Thursday'],['result-reading-4','no','yes'],['result-reading-5','no','yes'],
 ['result-listening-1','Salma','Marco'],['result-listening-2','40','75'],['result-listening-3','75','40'],['result-listening-4','09:00','11:00'],['result-listening-5','2','3']]);
 open(['result-reading-6','result-reading-7','result-reading-8','result-reading-9','result-reading-10','result-test-a-17','result-test-a-23','result-test-b-17','result-test-b-23']);
 assert(task('result-reading-6').answer.includes('скорость'));assert(task('result-test-b-17').answer.includes('completed'));assert(task('result-test-b-23').answer.includes('неизвестно'));
});
test('B201 scoped references have all personal rows, contrasts and sixteen practice items each',()=>{
 for(const p of [pastDurationPersons,futureFramePersons,futureResultPersons,futureDurationPersons])assert.deepEqual(p.map(r=>r[0]),['I','you','he','she','it','we','they']);
 assert.deepEqual([pastDurationPatterns.length,futureFramePatterns.length,futureResultPatterns.length],[20,22,28]);
 for(const [r,n] of [[pastDurationReference,27],[futureFrameReference,29],[futureResultReference,42]]){
  assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(r.practice.length,16);assert(r.sources.every(s=>/^https:\/\//.test(s[1])));
 }
 assert(futureResultPatterns.find(r=>r[0]==='state be')[3].includes('Simple'));
 assert(futureFramePatterns.find(r=>r[0]==='permission')[4].includes('May I'));
});
test('B201 adds 84 contextual word and phrase cards while preserving published IDs and correcting verb estimate IPA',()=>{
 assert.equal(b201Vocabulary.length,84);const cards=modules.find(m=>m.id==='B201').vocabulary;
 assert.equal(cards.length,91);assert.equal(new Set(cards.map(c=>c.word)).size,91);
 for(let n=1;n<=6;n++)assert(cards.some(c=>c.id==='B201-v'+n));
 assert(cards.some(c=>c.id==='B201-x-on-track'&&c.word==='on track'));
 assert.equal(vocabulary.find(c=>c.id==='B201-v6').ipa,'/ˈestɪmeɪt/');
 for(const c of b201Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['pick up where you left off','pencil in','by the time','rule out','as things stand','roll back'])assert(cards.some(c=>c.word===word),word);
});
test('B201 has substantial linked units, separate texts and fresh final tasks across all goals',()=>{
 assert.deepEqual(units.map(u=>u.id),['B201-past','B201-frame','B201-result']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[82,82,92]);
 assert.deepEqual(units.map(u=>u.examples.length),[26,26,30]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[22,22],[22,22],[24,24]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'B101-continuous');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=5100);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?400:225));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});
test('B201 twelve full writing models meet the requested 180–220 words and require substantive review',()=>{
 const paragraphs=all.filter(t=>t.prompt.includes('180–220'));assert.equal(paragraphs.length,12);
 for(const t of paragraphs){const n=t.answer.split(/\s+/).length;assert(n>=180&&n<=220,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('180–220')).length,2);
});
test('B201 expansion preserves original drills, multiline archive, notes and SRS without inherited credit',()=>{
 const s=freshState();s.moduleProgress.B201={selfChecked:true,date:'2026-09-22'};s.drafts.B201='Synthetic old note.';
 s.cards['B201-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['B201-v6']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B201';s.navigation.sections.course='module/B201';
 s.navigation.pages['module/B201']={scroll:500,focus:'drill1',fields:{drill0:'finished',drill1:'working\nOriginal answer',drill2:'waiting'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B201').total,259);assert.equal(topicWorkProgress(copy,'B201').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B201').drills.map(d=>d[0]),['By tomorrow, I will have ___. (finish)','I will be ___ at noon. (work)','We had been ___ for hours. (wait)']);
 delete s.navigation;assert.equal(validateState(s).drafts.B201,s.drafts.B201);
});
test('B201 multiline drafts and both attempts retain original work pending manual review',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('180–220'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B201').completed,0);let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B201').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});
test('B201 259 first-pass steps do not claim mastery or change with study time',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T13:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'B201');assert.equal(progress.total,259);assert.equal(progress.completed,259);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B201'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B201'),progress);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {reportingPatterns,questionTagPatterns,reportingReference,questionTagReference} from '../data/reporting-reference.mjs';
import {b104Vocabulary} from '../data/lexicon-b104.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B104');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B104-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};

test('B104 say, tell and explain retain their distinct recipient patterns',()=>{
 cases([
 ['statements-forms-1','told','said'],['statements-forms-2','to','for'],['statements-forms-3','to','of'],
 ['statements-test-a-1','told','said'],['statements-test-b-1','told','said'],
 ['statements-test-a-2','to','with'],['statements-test-b-2','to','of']
 ]);
 assert(reportingPatterns.find(r=>r[0]==='tell')[4].includes('story'));
});

test('B104 controlled backshift has independent keys while current relevance and modal meaning stay open',()=>{
 cases([
 ['statements-forms-4','was','is'],['statements-forms-5','were','are'],['statements-forms-6','had','has'],
 ['statements-forms-7','would','will'],['statements-forms-8','could','can'],['statements-forms-9','might','may'],
 ['statements-forms-10','worked','work'],['statements-forms-11','had lost','had lose'],['statements-forms-12','had','has'],
 ['statements-forms-13','should','shoulded'],['statements-sounds-1','/sed/','/seɪd/'],
 ['statements-sounds-2','had','would'],['statements-sounds-3','would','had']
 ]);
 for(const id of ['statements-forms-20','statements-test-a-17','statements-test-a-24','statements-test-b-17','statements-test-b-24'])assert(isOpen(task(id)),id);
});

test('B104 pronouns and dates follow actual people and the original reference point',()=>{
 cases([
 ['statements-reference-1','I','he'],['statements-reference-2','Tom','Eva'],['statements-reference-3','I','she'],
 ['statements-reference-4','we','they'],['statements-reference-5','her','my'],['statements-reference-6','Tuesday','Thursday'],
 ['statements-reference-7','Wednesday','Monday'],['statements-reference-8','no','yes'],['statements-reference-9','no','yes'],
 ['statements-test-a-10','Saturday','Sunday'],['statements-test-b-10','Monday','Tuesday']
 ]);
 for(const id of ['statements-reference-10','statements-reference-11','statements-test-a-18','statements-test-b-18'])assert(isOpen(task(id)));
});

test('B104 reported information preserves scope and does not turn silence or dispatch into a fact',()=>{
 cases([
 ['statements-meaning-1','not established','true'],['statements-meaning-2','no','yes'],['statements-meaning-3','no','yes'],
 ['statements-reading-1','Monday','Wednesday'],['statements-reading-2','Ravi','Leo'],['statements-reading-3','Elena','Marta'],
 ['statements-reading-4','2','all'],['statements-reading-5','Tuesday','Thursday'],
 ['statements-reading-6','not stated','false'],['statements-reading-7','false','true'],['statements-reading-8','not stated','true'],
 ['statements-listening-1','Sofia','Amir'],['statements-listening-3','3','2'],['statements-listening-4','Wednesday','Thursday'],
 ['statements-listening-5','no','yes'],['statements-listening-6','Noel','Amir'],['statements-listening-8','not stated','refusal']
 ]);
});

test('B104 embedded questions remove inversion but keep negative support and subject/object who',()=>{
 cases([
 ['questions-forms-1','the desk is','is the desk'],['questions-forms-2','opens','does open'],
 ['questions-forms-3','if','that'],['questions-forms-3','whether','what'],['questions-forms-4','whether','if'],
 ['questions-forms-5','means','meant'],['questions-forms-6','lived','did live'],['questions-forms-7','would','will'],
 ['questions-forms-8','had','has'],['questions-forms-15','He asked who called.','He asked who did called.'],
 ['questions-forms-16','He asked who I called.','He asked who called.'],['questions-forms-17','will','would'],
 ['questions-test-a-4','whether','if'],['questions-test-b-4','whether','if']
 ]);
 for(const id of ['questions-forms-18','questions-forms-19','questions-forms-20','questions-test-a-17','questions-test-b-17','questions-test-a-18'])assert(isOpen(task(id)));
});

test('B104 requests, instructions, offers and suggestions are not interchangeable speech acts',()=>{
 cases([
 ['questions-requests-1','to','for'],['questions-requests-2','to','that'],['questions-requests-3','not','do not'],
 ['questions-requests-4','to carry','carrying'],['questions-requests-5','checking','to check'],['questions-requests-6','me','to me'],
 ['questions-test-a-10','to','for'],['questions-test-a-11','not','do not'],['questions-test-a-12','to take','taking'],
 ['questions-test-a-13','meeting','to meet'],['questions-test-b-13','travelling','to travel'],['questions-test-b-13','traveling','travelled']
 ]);
 for(const id of ['questions-requests-11','questions-requests-12','questions-test-a-24','questions-test-b-24'])assert(isOpen(task(id)));
});

test('B104 questions reading and independent audio separate access, availability, acceptance and booking',()=>{
 cases([
 ['questions-reading-1','Inez','Paul'],['questions-reading-2','Saturday','Thursday'],['questions-reading-4','side','front'],
 ['questions-reading-5','false','true'],['questions-reading-6','false','true'],['questions-reading-7','no','yes'],
 ['questions-reading-8','map','invoice'],['questions-reading-9','not stated','all'],['questions-reading-10','Thursday','Saturday'],
 ['questions-listening-1','Tessa','Ruben'],['questions-listening-3','Friday','Sunday'],['questions-listening-4','no','yes'],
 ['questions-listening-5','Sunday','Saturday'],['questions-listening-6','no','yes'],['questions-listening-7','projector','map'],
 ['questions-listening-8','Ruben','Tessa'],['questions-listening-9','not stated','free']
 ]);
});

test('B104 basic opposite-polarity tags follow the first auxiliary or do, not a negative outcome',()=>{
 cases([
 ['tags-forms-1',"isn't it",'does it'],['tags-forms-2',"aren't they","isn't they"],
 ['tags-forms-3',"wasn't he","didn't he"],['tags-forms-4','were they',"weren't they"],
 ['tags-forms-5',"doesn't she","isn't she"],['tags-forms-6',"don't we","aren't we"],
 ['tags-forms-7',"didn't it","wasn't it"],['tags-forms-8','did you',"didn't you"],
 ['tags-forms-9',"isn't she","doesn't she"],['tags-forms-10',"haven't they","didn't they"],
 ['tags-forms-11',"hasn't it","isn't it"],['tags-forms-12',"can't you","don't you"],
 ['tags-forms-13','will she',"won't she"],['tags-forms-14','does he',"doesn't he"],
 ['tags-forms-15','does she',"doesn't she"],['tags-forms-16',"doesn't she",'does she'],
 ['tags-forms-17',"didn't it",'did it']
 ]);
 assert(isOpen(task('tags-forms-18')),'lexical have variants require context');
});

test('B104 special tag referents cover I am, there, everyone, nobody, nothing and lets',()=>{
 cases([
 ['tags-people-1',"aren't I","amn't I"],['tags-people-2','am I',"aren't I"],
 ['tags-people-3',"isn't there","isn't it"],['tags-people-4','were there',"weren't there"],
 ['tags-people-5',"isn't it","isn't this"],['tags-people-6',"aren't they","aren't those"],
 ['tags-people-7',"don't they","doesn't they"],['tags-people-8','do they',"don't they"],
 ['tags-people-9','did it','did they'],['tags-people-10','shall we','will you'],
 ['tags-test-a-9',"haven't they","hasn't they"],['tags-test-b-9','have they',"haven't they"]
 ]);
 assert(isOpen(task('tags-people-11')));assert(isOpen(task('tags-people-12')));
});

test('B104 yes/no answers reflect the fact and leave unanswered expectations unconfirmed',()=>{
 cases([
 ['tags-answers-1','Yes, I do.',"No, I don't."],['tags-answers-2',"No, I don't.",'Yes, I do.'],
 ['tags-answers-3','Yes, I have.',"No, I haven't."],['tags-answers-4',"No, I haven't.",'Yes, I have.'],
 ['tags-answers-5','Yes, she is.',"No, she isn't."],['tags-answers-6','Yes, they were.',"No, they weren't."],
 ['tags-answers-7','no','yes'],['tags-answers-8','no','yes'],
 ['tags-test-a-14','not established','confirmed'],['tags-test-b-14','not established','confirmed']
 ]);
 for(const id of ['tags-answers-9','tags-answers-10','tags-test-a-22','tags-test-b-22','tags-test-b-24'])assert(isOpen(task(id)));
});

test('B104 tag stories correct assumptions while intonation, pressure and same-polarity tags stay contextual',()=>{
 cases([
 ['tags-reading-2','4','6'],['tags-reading-3','no','yes'],['tags-reading-4','no','yes'],
 ['tags-reading-5','true','false'],['tags-reading-6','6','9'],['tags-reading-7','no','yes'],['tags-reading-8','no','yes'],
 ['tags-listening-1','Owen','Lia'],['tags-listening-2','false','true'],['tags-listening-3','10','9'],
 ['tags-listening-4','yes','no'],['tags-listening-5','no','yes'],['tags-listening-6','Owen','Lia'],
 ['tags-listening-7','no','yes'],['tags-listening-8','corrected assumption','fact']
 ]);
 for(const id of ['tags-sounds-1','tags-sounds-2','tags-test-a-15','tags-test-b-15','tags-test-a-16','tags-test-b-16','tags-test-a-23','tags-test-b-23'])assert(isOpen(task(id)));
});

test('B104 appendices are scoped searchable models with practice and primary-source links',()=>{
 assert.equal(reportingPatterns.length,32);assert.equal(questionTagPatterns.length,36);
 for(const [ref,id,n] of [[reportingReference,'reported-speech',32],[questionTagReference,'questions-tags',36]]){
  assert.equal(ref.id,id);assert.equal(ref.rows.length,n);assert(ref.rows.every(r=>r.length===5&&r.every(Boolean)));
  assert.equal(ref.practice.length,16);assert(ref.sources.every(s=>/^https:\/\//.test(s[1])));
 }
 assert(reportingPatterns.find(r=>r[0]==='must deduction')[1].includes('must'));
 assert(questionTagPatterns.find(r=>r[0]==='embedded negative')[1].includes('didn’t'));
 assert(questionTagPatterns.find(r=>r[0]==='same polarity')[1].includes('do you'));
 assert(questionTagPatterns.find(r=>r[0]==='negative answer')[1].includes('Yes, I do'));
});

test('B104 adds 84 contextual IPA cards and preserves the seven published IDs',()=>{
 assert.equal(b104Vocabulary.length,84);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id==='B104-v'+n));
 assert(vocabulary.some(c=>c.id==='B104-x-bring-up'&&c.word==='bring up'));
 for(const c of b104Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['according to','be on the same page','put words in someone’s mouth','pass on','get back to','whether or not'])assert(b104Vocabulary.some(c=>c.word===word),word);
 const cards=modules.find(m=>m.id==='B104').vocabulary;assert.equal(cards.length,91);assert.equal(new Set(cards.map(c=>c.word)).size,91);
});

test('B104 has three substantial unequal units, separate texts and fresh tests for all goals',()=>{
 assert.deepEqual(units.map(u=>u.id),['B104-statements','B104-questions','B104-tags']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[100,104,98]);
 assert.deepEqual(units.map(u=>u.examples.length),[28,30,28]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[24,24],[26,26],[24,24]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'B103-processes');
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

test('B104 fifteen writing models meet 130–170 words and remain open to substantive review',()=>{
 const paragraphs=all.filter(t=>t.prompt.includes('130–170'));assert.equal(paragraphs.length,15);
 for(const t of paragraphs){const n=t.answer.split(/\s+/).length;assert(n>=130&&n<=170,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('130–170')).length,3);
});

test('B104 expansion preserves original drills, multiline archive, notes and SRS with no inherited credit',()=>{
 const s=freshState();s.moduleProgress.B104={selfChecked:true,date:'2026-09-22'};s.drafts.B104='Synthetic old note.';
 s.cards['B104-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B104';s.navigation.sections.course='module/B104';
 s.navigation.pages['module/B104']={scroll:500,focus:'drill1',fields:{drill0:'told',drill1:'is\nOriginal answer',drill2:'don’t'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B104').total,305);assert.equal(topicWorkProgress(copy,'B104').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B104').drills.map(d=>d[0]),['She ___ me the news. (said/told)','Do you know where he ___? (is/is he)','You work here, ___ you?']);
 delete s.navigation;assert.equal(validateState(s).drafts.B104,s.drafts.B104);
});

test('B104 multiline exam drafts and two attempts retain original work pending substantive review',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('130–170'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B104').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B104').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('B104 305 first-pass steps do not claim mastery or change with available study time',()=>{
 const s=freshState();
 for(const u of units){
  const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T13:00:00Z');
  assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 }
 const progress=topicWorkProgress(s,'B104');assert.equal(progress.total,305);assert.equal(progress.completed,305);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B104'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B104'),progress);
});

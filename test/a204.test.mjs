import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {pastContinuousPersons,narrativePatterns,relativePatterns,pastNarrativeReference,relativeReference} from '../data/story-reference.mjs';
import {a204Vocabulary} from '../data/lexicon-a204.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='A204');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='A204-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepted');assert(!checkAnswer(wrong,t.answer),id+' contrast');}};

test('A204 has connected unequal units, varied banks and fresh tests for every goal',()=>{
 assert.deepEqual(units.map(u=>u.id),['A204-continuous','A204-story','A204-relative']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[82,92,96]);
 assert.deepEqual(units.map(u=>u.examples.length),[24,26,26]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[22,22],[24,24],[24,24]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'A203-conditions');
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=4500);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);
  assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?270:150));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));
   for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);
   for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
  }
 }
 assert.equal(new Set(passages).size,6);
});

test('A204 writing has fifteen complete original 100–140 word models, not empty instructions',()=>{
 const paragraphs=all.filter(t=>t.prompt.includes('100–140'));assert.equal(paragraphs.length,15);
 for(const t of paragraphs){const n=t.answer.split(/\s+/).length;assert(n>=100&&n<=140,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('100–140')).length,3);
});

test('A204 was/were, ing spelling, do-free questions and speaker changes have independent keys',()=>{
 cases([
  ['continuous-forms-1','was','were'],['continuous-forms-2','were','was'],['continuous-forms-3','were','was'],['continuous-forms-4','was','were'],
  ['continuous-forms-5','writing','writeing'],['continuous-forms-6','sitting','siting'],['continuous-forms-7','lying','lieing'],
  ['continuous-forms-8','seeing','seing'],['continuous-forms-9','traveling','travellingg'],['continuous-forms-9','travelling','traveleing'],
  ['continuous-forms-10','opening','openning'],['continuous-forms-14','Were you sleeping?','Did you were sleeping?'],
  ['continuous-forms-15',"They weren't talking.","They didn't were talking."],
  ['continuous-test-a-10','was','were'],['continuous-test-b-10',"wasn't","weren't"]
 ]);
});

test('A204 states, moment-bounded negatives and in-progress actions do not prove completion',()=>{
 cases([
  ['continuous-meaning-1','knew','was knowing'],['continuous-meaning-2','had','was having'],['continuous-meaning-3','were having','had'],
  ['continuous-meaning-4','no','yes'],['continuous-meaning-5','no','yes'],['continuous-meaning-6','belonged','was belonging'],
  ['continuous-test-a-6','knew','were knowing'],['continuous-test-a-7','no','yes'],['continuous-test-a-8','unknown','known'],
  ['continuous-test-b-6','had','were having'],['continuous-test-b-7','no','yes'],['continuous-test-b-8','unknown','known']
 ]);
 for(const id of ['continuous-meaning-7','continuous-meaning-10','continuous-meaning-11','continuous-test-a-16','continuous-test-b-20'])assert(isOpen(task(id)),id);
});

test('A204 narrative viewpoint is not a long-versus-short or when-versus-while switch',()=>{
 cases([
  ['story-contrast-1','was writing','wrote'],['story-contrast-2','wrote','was writing'],['story-contrast-3','yes','no'],
  ['story-contrast-4','was singing','sang'],['story-contrast-5','started','was starting'],['story-contrast-6','no','yes'],
  ['story-contrast-8','I was walking when I saw a fox.','I was walking when I seed a fox.'],
  ['story-test-a-3','yes','no'],['story-test-b-3','yes','no']
 ]);
 for(const id of ['story-contrast-9','story-contrast-10','story-contrast-11','story-contrast-12','story-test-a-15','story-test-b-21'])assert(isOpen(task(id)),id);
});

test('A204 cause, result, concession and noun/clause linkers retain direction',()=>{
 cases([
  ['story-links-1','because','although'],['story-links-2','although','because'],['story-links-3','so','because'],
  ['story-links-4','of','for'],['story-links-5','because','because of'],['story-links-6','during','while'],['story-links-7','while','during'],
  ['story-links-8','none','but'],['story-links-10','The desk was closed, so we waited.','We waited, so the desk was closed.'],
  ['story-test-a-12','Although we were late, we joined.','Although we were late, but we joined.'],
  ['story-test-b-13','We walked because the bus was late.','The bus was late because we walked.']
 ]);
});

test('A204 temporal order does not invent cause, a culprit or identical action boundaries',()=>{
 cases([
  ['story-logic-1','arrival','call'],['story-logic-2','checking','leaving'],['story-logic-3','no','yes'],['story-logic-4','no','yes'],
  ['story-test-a-8','checking','calling'],['story-test-a-9','no','yes'],['story-test-b-8','checking','calling'],['story-test-b-9','no','yes']
 ]);
 for(const id of ['story-logic-5','story-logic-6','story-logic-7','story-test-a-16','story-test-a-22','story-test-b-16','story-test-b-22'])assert(isOpen(task(id)),id);
});

test('A204 relative forms accept defining variants, whose possession and place/object differences',()=>{
 cases([
  ['relative-forms-1','who','which'],['relative-forms-2','which','who'],['relative-forms-3','who','which'],['relative-forms-3','that','what'],
  ['relative-forms-4','which','who'],['relative-forms-4','that','what'],['relative-forms-5','whose',"who's"],['relative-forms-6',"who's",'whose'],
  ['relative-forms-7','where','which'],['relative-forms-8','which','where'],['relative-forms-9','when','who'],['relative-forms-10','work','works'],
  ['relative-test-a-14','This is the hall where we practiced.','This is the hall where we practiced there.'],
  ['relative-test-a-14','This is the hall where we practised.','This is the hall where did we practise.']
 ]);
});

test('A204 subject/object analysis preserves needed subjects, omissions and stranded prepositions',()=>{
 cases([
  ['relative-roles-1','subject','object'],['relative-roles-2','object','subject'],['relative-roles-3','no','yes'],['relative-roles-4','yes','no'],
  ['relative-roles-5','subject','object'],['relative-roles-6','no','yes'],['relative-roles-7','yes','no'],['relative-roles-8','object','subject'],
  ['relative-roles-9','The bag that I found is blue.','The bag that I found it is blue.'],
  ['relative-roles-11','The key I lost is small.','The key lost is small.'],
  ['relative-roles-12','The chair I sat on was broken.','The chair I sat was broken.'],
  ['relative-test-a-5','object','subject'],['relative-test-a-6','no','yes'],['relative-test-b-5','object','subject']
 ]);
 for(const id of ['relative-roles-13','relative-roles-14','relative-roles-15','relative-roles-16','relative-test-b-15'])assert(isOpen(task(id)),id);
});

test('A204 identifying scope is not universal; non-defining clauses and formal prepositions differ',()=>{
 cases([
  ['relative-reference-1','no','yes'],['relative-reference-2','no','yes'],['relative-reference-3','visitor','bag'],
  ['relative-reference-4','yes','no'],['relative-reference-5','which','that'],['relative-reference-6','whom','that'],
  ['relative-test-a-9','no','yes'],['relative-test-b-9','no','yes'],['relative-test-a-10','no','yes'],['relative-test-b-10','/ðət/','/θæt/']
 ]);
 assert(task('relative-reference-1').prompt.includes('Утверждается ли'));
 assert(task('relative-test-a-9').prompt.includes('Утверждается ли'));
 assert(task('relative-test-b-9').prompt.includes('Следует ли'));
 for(const id of ['relative-reference-9','relative-reference-11','relative-test-a-17','relative-test-b-17','relative-test-b-23'])assert(isOpen(task(id)),id);
});

test('A204 independent reading keys distinguish moment negatives, unknown repairs and actual ownership',()=>{
 cases([
  ['continuous-reading-1','15:15','15:45'],['continuous-reading-2','Mina','Leo'],['continuous-reading-3','2','3'],
  ['continuous-reading-4','false','not stated'],['continuous-reading-5','true','false'],['continuous-reading-6','not stated','false'],
  ['continuous-reading-7','true','false'],['continuous-reading-8','not stated','false'],
  ['story-reading-1','Iris','Omar'],['story-reading-2','18:10','18:50'],['story-reading-3','sorting','reading'],['story-reading-4','after','before'],
  ['story-reading-5','not stated','false'],['story-reading-6','false','true'],['story-reading-7','brighter','cheaper'],['story-reading-8','not stated','false'],
  ['relative-reading-1','Elena','Sara'],['relative-reading-2','3','2'],['relative-reading-3','green','blue'],['relative-reading-4','Noah','Elena'],
  ['relative-reading-5','false','not stated'],['relative-reading-6','false','true'],['relative-reading-7','green','black'],['relative-reading-8','not stated','false']
 ]);
});

test('A204 independent listening keys preserve time, reported causes and unknown contents',()=>{
 cases([
  ['continuous-listening-1','Tara','Ben'],['continuous-listening-2','17:40','17:20'],['continuous-listening-3','Ben','Lee'],
  ['continuous-listening-4','3','2'],['continuous-listening-5','false','true'],['continuous-listening-6','not stated','false'],['continuous-listening-7','unknown','known'],
  ['story-listening-1','Omar','Iris'],['story-listening-2','8:25','8:35'],['story-listening-3','message','map'],['story-listening-4','false','true'],
  ['story-listening-5','wrong stop','late bus'],['story-listening-6','after','before'],['story-listening-7','not stated','false'],
  ['relative-listening-1','Felix','Ruth'],['relative-listening-2','yellow','red'],['relative-listening-3','2','1'],['relative-listening-4','Ruth','Felix'],
  ['relative-listening-5','not stated','false'],['relative-listening-6','hall','kitchen'],['relative-listening-7','false','not stated']
 ]);
});

test('A204 references contain every personal row and explicitly scoped narrative/relative patterns',()=>{
 assert.deepEqual(pastContinuousPersons.map(r=>r[0]),['I','you','he','she','it','we','they']);
 assert.equal(narrativePatterns.length,20);assert.equal(relativePatterns.length,24);
 for(const [r,n] of [[pastNarrativeReference,27],[relativeReference,24]]){assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(r.practice.length,16);}
 assert.equal(pastContinuousPersons[1][4],'Yes, I was. / No, I wasn’t.');
 assert(relativePatterns.some(r=>r[0]==='whose for things'));assert(relativePatterns.some(r=>r[0]==='extra information'));
 assert.equal(new Set(narrativePatterns.map(r=>r[0])).size,20);assert.equal(new Set(relativePatterns.map(r=>r[0])).size,24);
});

test('A204 preserves old vocabulary IDs and adds IPA plus meaningful phrases',()=>{
 assert.equal(a204Vocabulary.length,84);assert.equal(new Set(a204Vocabulary.map(c=>c.id)).size,84);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id===`A204-v${n}`));
 for(const c of a204Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['out of sight','carry on','go out','out of the blue','the other way round','ring a bell','tell apart','leave out'])assert(a204Vocabulary.some(c=>c.word===word),word);
 assert.equal(a204Vocabulary.find(c=>c.word==='eventually').translation,'в итоге, со временем');
 assert.equal(modules.find(m=>m.id==='A204').vocabulary.length,91);
});

test('A204 expansion preserves original drills, notes, navigation and SRS with no inherited work',()=>{
 const s=freshState();s.moduleProgress.A204={selfChecked:true,date:'2026-09-22'};s.drafts.A204='Synthetic old note.';
 s.cards['A204-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/A204';s.navigation.sections.course='module/A204';
 s.navigation.pages['module/A204']={scroll:500,focus:'drill1',fields:{drill0:'was',drill1:'who\nOriginal answer',drill2:'because'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'A204').total,273);assert.equal(topicWorkProgress(copy,'A204').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='A204').drills.map(d=>d[0]),['I ___ working at six yesterday.','The woman ___ called is my manager.','We stayed home ___ it was raining. (because/although)']);
 delete s.navigation;assert.equal(validateState(s).drafts.A204,s.drafts.A204);
});

test('A204 multiline drafts and two attempts survive import; open responses remain pending',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('100–140'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'A204').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-23T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'A204').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

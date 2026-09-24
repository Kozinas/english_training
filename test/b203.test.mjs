import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {advancedRelativePatterns,participlePatterns,groupDeterminerPatterns,advancedRelativeReference,participleReference,groupDeterminerReference} from '../data/clause-precision.mjs';
import {b203Vocabulary} from '../data/lexicon-b203.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='B203');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='B203-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('B203 relative forms preserve roles, possession, fronted prepositions and agreement',()=>{
 cases([['relative-forms-1','who','that'],['relative-forms-2','whose',"who's"],['relative-forms-3','whom','who'],['relative-forms-4','which','that'],
 ['relative-forms-5','which','where'],['relative-forms-6','where','which'],['relative-forms-7','whom','which'],['relative-forms-8','which','whom'],
 ['relative-forms-9','is','are'],['relative-forms-10','was','were'],['relative-forms-11','Jo, who runs the club, will call.','Jo, who she runs the club, will call.'],
 ['relative-forms-12','The map which I sent is current.','The map which I sent it is current.'],['relative-forms-13','The author, who is here, can help.','The author, who has here, can help.'],
 ['relative-forms-15','The person to whom I spoke replied.','The person whom I spoke replied.'],['relative-forms-16','The tool which we rely on works.','The tool which we rely works.'],
 ['relative-test-a-6','were','was'],['relative-test-b-6','was','were'],['relative-test-b-8','The editor to whom I sent it replied.','The editor to who I sent it replied.']]);
});

test('B203 open relative editing accepts normative variants and retains embedded subjects',()=>{
 cases([['relative-test-a-8','The guide with whom I travelled called.','The guide whom I travelled called.'],['relative-test-a-8','The guide with whom I traveled called.','The guide with whom I travel called.'],
 ['relative-meaning-6','no','yes'],['relative-meaning-7','object','subject'],['relative-meaning-8','subject','object'],['relative-test-a-11','no','yes'],['relative-test-b-11','no','yes']]);
 open(['relative-forms-17','relative-forms-18','relative-meaning-11','relative-meaning-12','relative-meaning-14','relative-test-a-14','relative-test-a-18','relative-test-b-14','relative-test-b-18']);
 assert(task('relative-meaning-12').answer.includes('оба варианта'));assert(task('relative-forms-18').answer.includes('she — его субъект'));
 assert(task('relative-test-b-18').answer.includes('нормативно'));assert(task('relative-meaning-11').answer.includes('нужен и допустим'));
});

test('B203 relative scope, whole-clause which and partial groups do not invent universal claims',()=>{
 cases([['relative-meaning-1','no','yes'],['relative-meaning-2','yes','no'],['relative-meaning-3','event','person'],['relative-meaning-4','no','yes'],['relative-meaning-5','thing','person'],
 ['relative-review-5','no','yes'],['relative-test-a-9','event','person'],['relative-test-a-10','no','yes'],['relative-test-a-12','6','11'],['relative-test-b-9','event','person'],['relative-test-b-12','7','13']]);
 open(['relative-meaning-9','relative-meaning-10','relative-meaning-15','relative-meaning-16','relative-test-a-22','relative-test-b-22']);
 assert(task('relative-meaning-15').answer.includes('не устанавливает'));assert(task('relative-meaning-16').answer.includes('различны'));
});

test('B203 archive and guide passages distinguish registration, access, attendance and limited checks',()=>{
 cases([['relative-reading-1','12','8'],['relative-reading-2','8','12'],['relative-reading-3','Lina','Owen'],['relative-reading-4','2','4'],['relative-reading-5','no','yes'],
 ['relative-listening-1','Owen','Lina'],['relative-listening-2','3','2'],['relative-listening-3','2','3'],['relative-listening-4','Room B','Room A'],['relative-listening-4','B','A'],['relative-listening-5','no','yes']]);
 assert(task('relative-reading-9').answer.includes('не установлено'));assert(task('relative-reading-10').answer.includes('не измеряла'));
 open(['relative-reading-6','relative-reading-7','relative-reading-8','relative-reading-9','relative-reading-10','relative-listening-6','relative-listening-7','relative-listening-9']);
 const passage=units[0].banks.find(b=>b.id==='reading').passage;assert(passage.includes('attendance list was still unavailable'));assert(passage.includes('from the supplier'));
});

test('B203 participle forms keep voice, V3, negative placement and preposition plus ing',()=>{
 cases([['participles-forms-1','waiting','waited'],['participles-forms-2','signed','signing'],['participles-forms-3','being','been'],['participles-forms-4','read','reading'],
 ['participles-forms-5','been','being'],['participles-forms-6','Not',"Don't"],['participles-forms-7','checking','checked'],['participles-forms-8','leaving','leaveing'],
 ['participles-forms-9','comparing','compareing'],['participles-forms-10','opening','to open'],['participles-forms-11','seen','saw'],['participles-forms-12','Written','Wrote'],
 ['participles-forms-13','Having seen the warning, I stopped.','Having saw the warning, I stopped.'],['participles-forms-14','She left without signing.','She left without to sign.'],
 ['participles-forms-15','Not having checked it, I could not confirm it.','Having not check it, I could not confirm it.'],
 ['participles-test-a-6','Having taken the photo, I left.','Having took the photo, I left.'],['participles-test-b-1','carrying','carring'],['participles-test-b-3','chosen','chose'],
 ['participles-test-b-6','Having written the note, I called.','Having wrote the note, I called.']]);
});

test('B203 participles separate understood subjects, time, condition, result and special constructions',()=>{
 cases([['participles-meaning-1','I','form'],['participles-meaning-2','people','form'],['participles-meaning-3','passive','active'],['participles-meaning-4','before','after'],
 ['participles-meaning-5','no','yes'],['participles-meaning-6','no','yes'],['participles-meaning-7','no','yes'],['participles-meaning-8','result','reason'],
 ['participles-review-4','no','yes'],['participles-review-5','no','yes'],['participles-test-a-8','Nora','label'],['participles-test-a-10','no','yes'],['participles-test-b-8','Ravi','map'],['participles-test-b-10','no','yes']]);
 open(['participles-meaning-9','participles-meaning-10','participles-meaning-11','participles-meaning-12','participles-meaning-13','participles-meaning-14','participles-meaning-15','participles-meaning-16','participles-test-b-23']);
 assert(task('participles-meaning-12').answer.includes('модальность'));assert(task('participles-meaning-13').answer.includes('не устанавливает'));
 assert(task('participles-meaning-14').answer.includes('непереходный'));assert(task('participles-meaning-15').answer.includes('устойчивая'));
});

test('B203 box and draft passages retain different participants and do not turn inspection into approval',()=>{
 cases([['participles-reading-1','6','2'],['participles-reading-2','Ben','Maya'],['participles-reading-3','2','6'],['participles-reading-4','0','6'],['participles-reading-4','none','2'],['participles-reading-5','no','yes'],
 ['participles-listening-1','Sara','Malik'],['participles-listening-2','Malik','Sara'],['participles-listening-3','3','4'],['participles-listening-4','Sara','Malik'],['participles-listening-5','no','yes'],
 ['participles-test-a-12','5','4'],['participles-test-b-12','4','5']]);
 assert(task('participles-reading-7').answer==='After Maya photographed the boxes, Ben moved them.');
 assert(task('participles-listening-6').answer==='After Malik read all three drafts, Sara sent a summary.');
 assert(task('participles-listening-5').prompt.includes('confirm'));assert(task('participles-production-13').answer.includes('Afterwards'));
 open(['participles-reading-6','participles-reading-7','participles-reading-8','participles-reading-9','participles-listening-6','participles-listening-7','participles-listening-9']);
});

test('B203 determiners retain noun type, head agreement, of, whole and other forms',()=>{
 cases([['determiners-forms-1','has','have'],['determiners-forms-2','is','are'],['determiners-forms-3','have','has'],['determiners-forms-4','one','zero'],['determiners-forms-5','of','zero'],
 ['determiners-forms-6','is','are'],['determiners-forms-7','are','is'],['determiners-forms-8','work','works'],['determiners-forms-9','works','work'],['determiners-forms-10','is','are'],
 ['determiners-forms-11','is','are'],['determiners-forms-12','of','zero'],['determiners-forms-13','zero','of'],['determiners-forms-14','whole','all'],['determiners-forms-15','two','a'],
 ['determiners-forms-16','Other','Others'],['determiners-forms-17','others','other'],['determiners-forms-18','Every one of them has a ticket.','Every of them has a ticket.'],
 ['determiners-test-a-4','is','are'],['determiners-test-b-4','is','are'],['determiners-test-b-8','Other chairs are outside.','Others chairs are outside.']]);
 assert(task('determiners-forms-10').prompt.includes('Формальный'));open(['determiners-forms-20','determiners-test-a-13','determiners-test-b-13','determiners-test-a-21']);
 assert(task('determiners-test-a-13').answer.includes('is/are'));
});

test('B203 not all and not both leave counts unknown while neither and definite remainder have scope',()=>{
 cases([['determiners-meaning-1','Both','Neither'],['determiners-meaning-2','Neither','Either'],['determiners-meaning-3','no','yes'],['determiners-meaning-4','no','yes'],
 ['determiners-meaning-5','no','yes'],['determiners-meaning-6','3','2'],['determiners-meaning-7','yes','no'],['determiners-meaning-8','no','yes'],
 ['determiners-test-a-9','no','yes'],['determiners-test-a-10','no','yes'],['determiners-test-a-11','5','4'],['determiners-test-b-9','no','yes'],['determiners-test-b-11','5','6'],['determiners-test-b-12','no','yes']]);
 open(['determiners-meaning-9','determiners-meaning-10','determiners-meaning-12','determiners-meaning-13','determiners-meaning-14','determiners-meaning-15','determiners-meaning-16','determiners-meaning-17']);
 assert(task('determiners-meaning-12').answer.includes('числовую группу'));assert(task('determiners-meaning-16').answer.includes('None of the tests passed'));
});

test('B203 equipment and setup texts preserve tested groups, confirmed inventory and specific access needs',()=>{
 cases([['determiners-reading-1','10','3'],['determiners-reading-2','3','10'],['determiners-reading-3','3','7'],['determiners-reading-4','5','8'],['determiners-reading-5','no','yes'],
 ['determiners-listening-1','Dev','Sara'],['determiners-listening-2','6','8'],['determiners-listening-3','2','4'],['determiners-listening-4','4','6'],['determiners-listening-5','no','yes']]);
 assert(task('determiners-reading-7').answer.includes('не установлены'));assert(task('determiners-reading-9').answer.includes('не равно'));
 assert(task('determiners-reading-10').answer.includes('не подтверждена'));assert(task('determiners-listening-8').answer.includes('step-free access'));
 open(['determiners-reading-6','determiners-reading-7','determiners-reading-8','determiners-reading-9','determiners-reading-10','determiners-listening-6','determiners-listening-7','determiners-listening-8']);
});

test('B203 scoped references cover clause attachment, participles and forty determiner models',()=>{
 assert.deepEqual([advancedRelativePatterns.length,participlePatterns.length,groupDeterminerPatterns.length],[32,32,40]);
 for(const [r,n] of [[advancedRelativeReference,32],[participleReference,32],[groupDeterminerReference,40]]){
  assert.equal(r.rows.length,n);assert(r.rows.every(row=>row.length===5&&row.every(Boolean)));assert.equal(r.practice.length,16);assert(r.sources.every(s=>/^https:\/\//.test(s[1])));
 }
 assert(advancedRelativePatterns.find(r=>r[0]==='embedded object')[3].includes('She сохраняется'));
 assert(participlePatterns.find(r=>r[0]==='lost modal')[3].includes('меняет'));
 assert(groupDeterminerPatterns.find(r=>r[0]==='not both')[4].includes('не гарантирует'));
});

test('B203 adds 84 contextual cards and preserves all seven old vocabulary IDs',()=>{
 assert.equal(b203Vocabulary.length,84);const cards=modules.find(m=>m.id==='B203').vocabulary;
 assert.equal(cards.length,91);assert.equal(new Set(cards.map(c=>c.word)).size,91);
 for(let n=1;n<=6;n++)assert(cards.some(c=>c.id==='B203-v'+n));
 assert(cards.some(c=>c.id==='B203-x-account-for'&&c.word==='account for'));
 assert.equal(vocabulary.find(c=>c.id==='B203-v2').ipa,'/kənˈsɪstənt/');
 for(const c of b203Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['on the whole','in its entirety','having said that','narrow down','single out','read back'])assert(cards.some(c=>c.word===word),word);
});

test('B203 substantial units have independent passages, unique banks and fresh tests of every goal',()=>{
 assert.deepEqual(units.map(u=>u.id),['B203-relative','B203-participles','B203-determiners']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[90,94,96]);
 assert.deepEqual(units.map(u=>u.examples.length),[28,30,30]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[24,24],[24,24],[24,24]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'A204-relative');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=6000);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?420:250));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});

test('B203 all eighteen length-specified writing models meet their requested ranges without automatic credit',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,18);
 assert.equal(paragraphs.filter(t=>t.prompt.includes('180–220')).length,12);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 for(const u of units)assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('180–220')).length,2);
});

test('B203 original drills, multiline archive, notes and SRS survive expansion without inherited credit',()=>{
 const s=freshState();s.moduleProgress.B203={selfChecked:true,date:'2026-09-22'};s.drafts.B203='Synthetic old note.';
 s.cards['B203-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['B203-x-account-for']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/B203';s.navigation.sections.course='module/B203';
 s.navigation.pages['module/B203']={scroll:500,focus:'drill1',fields:{drill0:'who',drill1:'Having\nOriginal answer',drill2:'Neither'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'B203').total,283);assert.equal(topicWorkProgress(copy,'B203').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='B203').drills.map(d=>d[0]),['Ana, ___ lives here, can help. (who/that)','___ checked the logs, I restarted it. (Having/Have)','___ of the two options works. (Neither/None)']);
 delete s.navigation;assert.equal(validateState(s).drafts.B203,s.drafts.B203);
});

test('B203 multiline drafts and both attempts retain original responses pending substantive review',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('180–220'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'B203').completed,0);let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'B203').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

test('B203 283 first-pass steps neither certify mastery nor shrink when the schedule changes',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-24T13:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'B203');assert.equal(progress.total,283);assert.equal(progress.completed,283);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'B203'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'B203'),progress);
});

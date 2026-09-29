import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary,courseStats,topicDevelopment} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {mediationPatterns,mediationReference,mediationSources} from '../data/mediation-reference.mjs';
import {c204Vocabulary} from '../data/lexicon-c204.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const module=modules.find(m=>m.id==='C204'),u=subtopics.find(u=>u.id==='C204-mediation');
const all=[...u.banks,...u.tests].flatMap(b=>b.tasks),task=id=>all.find(t=>t.id===u.id+'-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('C204 construction keys distinguish agreement, infinitives and embedded questions',()=>{
 cases([['forms-1','from','with'],['forms-2','between','among'],['forms-3','with','to'],['forms-4','to','for'],['forms-5','on','at'],['forms-6','to','for'],['forms-7','Could you explain what you mean?','Could you explain what do you mean?'],['forms-8','We agree that the text is unclear.','We agree about that the text is unclear.'],['forms-9','She agreed to check the figures.','She agreed to checking the figures.'],['test-a-4','Could you tell me what flexible means?','Could you tell me what does flexible mean?'],['test-b-5','They agreed to prepare a comparison.','They agreed to preparing a comparison.']]);
 open(['forms-10','forms-11','forms-12','test-a-16']);assert(task('forms-12').answer.includes('UK'));
});
test('C204 every closed test key has independent semantic or grammatical anchors',()=>{
 cases([['test-a-1','from','to'],['test-a-2','with','to'],['test-a-3','to','for'],['test-a-5','We agree that the notice needs revision.','We agree about that the notice needs revision.'],['test-a-6','yes','no'],['test-a-7','no','yes'],['test-a-8','no','yes'],['test-b-1','between','among'],['test-b-2','to','for'],['test-b-3','on','at'],['test-b-4','Could you clarify what accessible means?','Could you clarify what does accessible mean?'],['test-b-6','no','yes'],['test-b-7','no','yes'],['test-b-8','yes','no']]);
});
test('C204 understanding, checked paraphrase, conditions and agreement remain different',()=>{
 cases([['meaning-1','no','yes'],['meaning-2','yes','no'],['meaning-3','no','yes'],['meaning-4','figures','style'],['review-2','no','yes']]);
 const text=u.explanation.map(e=>e.text).join(' ');
 for(const phrase of ['still disagree','не обещая согласия','сильную формулировку','не прятать его','британском английском agree a date','ответственный неизвестен'])assert(text.includes(phrase),phrase);
 open(['meaning-5','meaning-6','meaning-9','meaning-11','reframe-3','reframe-9','test-a-9','test-b-10']);
 assert(task('meaning-9').answer.includes('потеряно обязательное условие'));assert(task('reframe-9').answer.includes('отдельной проверки'));
});
test('C204 reading preserves units, correction, absent authority and draft date',()=>{
 cases([['reading-1','3','4'],['reading-2','10','18'],['reading-3','8','10'],['reading-4','Thursday','Monday']]);
 const p=u.banks.find(b=>b.id==='reading').passage;
 assert(p.includes('eighteen enquiries'));assert(p.includes('does not identify unique visitors'));
 assert(p.includes('does not insist on keeping the paper diary'));assert(p.includes('not to deliver a working system'));
 assert(task('reading-10').answer.includes('Staffing and approval remain unresolved'));assert(task('reading-9').answer.includes('no recorded approval'));
});
test('C204 independent audio preserves access meanings, correction and task limits',()=>{
 cases([['listening-1','3','18'],['listening-2','height','vocabulary'],['listening-3','Monday','Thursday'],['listening-4','Wednesday','Monday']]);
 const p=u.banks.find(b=>b.id==='listening').passage;
 for(const phrase of ['one speaker\'s account','three people','willing to check the translation','not approve the historical claims','subject to receiving them first','leave the owner field open'])assert(p.includes(phrase),phrase);
 assert(task('listening-7').answer.includes('cannot approve'));assert(task('listening-9').answer.includes('receiving them first'));
 open(['listening-7','listening-8','listening-10','listening-11']);
});
test('C204 natural-size published unit has substantial mechanisms and eight distinct practice banks',()=>{
 assert.deepEqual(u.prerequisites,['C203-connected','C105-argument','C104-negotiation']);
 assert.equal(u.examples.length,30);assert.equal(u.explanation.length,12);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=8000);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),Array(8).fill(12));assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,8);
 const passages=u.banks.filter(b=>b.passage);assert.equal(passages.length,2);assert.notEqual(passages[0].passage,passages[1].passage);
 for(const p of passages){assert(p.passage.includes('fictional'));assert(p.passage.split(/\s+/).length>=(p.kind==='reading'?600:500));}
});
test('C204 new tests cover all goals and kinds without reusing prompts',()=>{
 const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
 assert.equal(u.tests.length,2);
 for(const exam of u.tests){assert.equal(exam.tasks.length,24);for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id));for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
});
test('C204 all six complete writing models meet the requested lengths',()=>{
 const models=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(models.length,6);
 assert.equal(models.filter(t=>t.prompt.includes('320–380')).length,1);assert.equal(models.filter(t=>t.prompt.includes('220–280')).length,1);
 for(const t of models){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
});
test('C204 live interaction requires actual corrections and does not score acoustics from text',()=>{
 const b=u.banks.find(b=>b.id==='interaction');assert.equal(b.tasks.filter(t=>t.kind==='speech').length,11);
 assert(b.tasks.every(isOpen));assert(task('interaction-1').explanation.includes('реальный обмен'));
 assert(task('interaction-10').explanation.includes('ASR недостаточно'));assert(task('interaction-12').answer.includes('unknown'));
 for(const e of u.tests)assert.equal(e.tasks.filter(t=>t.kind==='speech').length,3);
 open(['review-9','review-10','test-a-21','test-b-21']);
});
test('C204 reference has bounded scope, models, practice and primary source links',()=>{
 assert.equal(mediationPatterns.length,24);assert(mediationPatterns.every(r=>r.length===4&&r.every(Boolean)));
 assert.equal(mediationReference.practice.length,12);assert.equal(mediationReference.id,'mediation-reframing');
 assert(mediationReference.intro.some(s=>s.includes('не полный каталог')));
 for(const [,url] of mediationSources)assert(['www.coe.int','dictionary.cambridge.org'].includes(new URL(url).hostname));
});
test('C204 adds 100 contextual cards without replacing seven old IDs',()=>{
 assert.equal(c204Vocabulary.length,100);const cards=vocabulary.filter(c=>c.module==='C204');assert.equal(cards.length,107);
 assert.equal(new Set(cards.map(c=>c.word)).size,107);for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='C204-v'+i));
 assert.equal(cards.filter(c=>!/^C204-x-\d+$/.test(c.id)).length,7);
 for(const c of c204Vocabulary)assert(c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['at cross purposes',"put words in someone's mouth",'boil down to','criterion','criteria'])assert(cards.some(c=>c.word===word));
});
test('C204 covers its declared scope without creating learner mastery',()=>{
 assert.equal(module.contentStatus,'expanded');assert.equal(module.subtopics.length,3);assert.equal(module.remainingScope.length,0);
 assert.equal(topicDevelopment.C204,undefined);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy],[36,1,3]);
 assert.equal(courseStats.subtopics,118);assert.equal(courseStats.practice,10503);assert.equal(courseStats.testTasks,5140);
});
test('C204 original drill archive, notes, multiline fields and SRS survive without new credit',()=>{
 const s=freshState();s.moduleProgress.C204={selfChecked:true,date:'2026-09-22'};s.drafts.C204='Synthetic old note.';
 for(const c of vocabulary.filter(c=>c.module==='C204'&&!/^C204-x-\d+$/.test(c.id)))s.cards[c.id]=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C204';s.navigation.sections.course='module/C204';
 s.navigation.pages['module/C204']={scroll:410,focus:'drill1',fields:{drill0:'about',drill1:'from\nSynthetic old answer',drill2:'yes'},details:[true]};
 const restored=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(restored,s);assert.equal(restored.schemaVersion,2);
 assert.deepEqual(module.drills.map(d=>d[0]),['disagree ___ priorities (about/at)','Separate the principle ___ implementation.','Reversible означает обратимый? (yes/no)']);
 assert.equal(topicWorkProgress(restored,'C204').completed,0);assert.equal(topicWorkProgress(restored,'C204').total,321);
 const old=structuredClone(s);delete old.navigation;assert.equal(validateState(old).drafts.C204,s.drafts.C204);
});
test('C204 exam drafts and original attempts persist; eight closed answers do not grade sixteen open ones',()=>{
 const s=freshState(),p=unitState(s,u.id);p.examDraft.answers[task('test-a-15').id]='Synthetic draft.\nContinue later.';
 s.bookmark={route:'unit/C204-mediation/test',scroll:640,focus:'answer-'+task('test-a-15').id};
 s.navigation.sections.course=s.bookmark.route;assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 assert.equal(topicWorkProgress(s,'C204').completed,0);let first;
 for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-26T12:00:00Z');
  const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,8);assert.equal(result.total,8);assert.equal(result.pending,16);assert.equal(result.status,'awaiting-review');
  assert.equal(topicWorkProgress(s,'C204').completed,1);
  if(e.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
 }
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
});
test('C204 first published unit retains 97 completed steps when content grows, with no inherited mastery',()=>{
 const s=freshState(),p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
 p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-26T12:00:00Z');
 const progress=topicWorkProgress(s,'C204');assert.equal(progress.total,321);assert.equal(progress.completed,97);assert.equal(progress.percent,30);
 assert.equal(module.contentStatus,'expanded');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');
 s.moduleProgress.C204={selfChecked:true,date:'2026-09-26'};s.placement={assessmentVersion,date:'2026-09-26T12:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.answer]))};
 assert(buildPlan(s).items.some(m=>m.id==='C204'&&m.contentStatus==='expanded'));
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C204'),progress);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C204'),progress);
});

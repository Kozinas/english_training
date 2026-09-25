import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {nominalPatterns,referencePatterns,editingPatterns,nominalReference,textReference,editingReference,denseTextSources} from '../data/dense-text-reference.mjs';
import {c103Vocabulary} from '../data/lexicon-c103.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='C103');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='C103-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('C103 nominalisation, head agreement, count units and measurement modifiers have independent keys',()=>{
 cases([['nouns-forms-1','approval','approvement'],['nouns-forms-2','decision','decidement'],['nouns-forms-3','reliability','reliable'],
 ['nouns-forms-4','is','are'],['nouns-forms-5','are','is'],['nouns-forms-6','is','are'],['nouns-forms-7','day','days'],['nouns-forms-8','days','day'],
 ['nouns-forms-9','of','to'],['nouns-forms-10','to','of'],['nouns-forms-11','careful','carefully'],['nouns-forms-12','carefully','careful'],
 ['nouns-forms-13','The collection of notes is useful.','The collection of notes are useful.'],
 ['nouns-forms-14','Two pieces of evidence are missing.','Two pieces of evidence is missing.'],
 ['nouns-test-a-1','revision','revise'],['nouns-test-b-1','removal','remove']]);
});
test('C103 nominal roles, relative/content clauses and preserved possibility remain contextual',()=>{
 cases([['nouns-meaning-1','no','yes'],['nouns-meaning-2','yes','no'],['nouns-meaning-3','Kim','plan'],['nouns-meaning-4','no','yes'],['nouns-review-3','is','are']]);
 open(['nouns-meaning-5','nouns-meaning-6','nouns-meaning-7','nouns-meaning-8','nouns-meaning-10','nouns-test-a-9','nouns-test-b-9']);
 assert(task('nouns-meaning-6').answer.includes('possible'));
 assert(units[0].explanation.some(e=>e.text.includes('the arrival of the guests')));
 assert(units[0].examples.some(e=>e.en==='The claim that Jo disputed appears here.'));
});
test('C103 noun passages preserve return/rejection, stage of measurement, units and pending decisions',()=>{
 cases([['nouns-reading-1','Mara','Ellis'],['nouns-reading-2','4','6'],['nouns-reading-3','40','30'],['nouns-reading-4','6','4'],['nouns-reading-5','no','yes'],
 ['nouns-listening-1','Ellis','Mara'],['nouns-listening-2','30','18'],['nouns-listening-3','18','30'],['nouns-listening-4','2','4'],['nouns-listening-5','no','yes']]);
 assert(task('nouns-reading-8').answer.includes('окончательный отказ'));
 assert(task('nouns-listening-9').answer.includes('not everyone'));
 open(['nouns-reading-7','nouns-reading-9','nouns-reading-10','nouns-listening-7','nouns-listening-10']);
});
test('C103 reference forms distinguish singular/mass/plural replacement and short ordered pairs',()=>{
 cases([['links-forms-1','These','This'],['links-forms-2','an','a'],['links-forms-3','feedback','feedbacks'],['links-forms-4','that','those'],
 ['links-forms-5','those','that'],['links-forms-6','train','coach'],['links-forms-7','app','map'],['links-forms-8','dummy','pronoun'],
 ['links-forms-9','We rejected such a proposal.','We rejected a such proposal.'],['links-forms-10','These results require checking.','This results require checking.'],
 ['links-test-a-3','that','those'],['links-test-a-4','those','that'],['links-test-b-5','website','booklet']]);
});
test('C103 labels and lexical chains do not resolve ambiguity or turn responses into people',()=>{
 cases([['links-meaning-1','no','yes'],['links-meaning-2','no','yes'],['links-meaning-3','no','yes'],['links-meaning-4','no','yes'],['links-test-a-10','no','yes']]);
 open(['links-forms-13','links-forms-14','links-forms-15','links-meaning-5','links-meaning-6','links-meaning-7','links-meaning-8','links-meaning-12']);
 assert(task('links-production-9').answer.includes('What is the second issue?'),'missing branch is queried, not invented');
 assert(task('links-test-b-19').answer.includes('вперёд'));
});
test('C103 cohesion passages preserve comparison scope, sources, dates and voluntary response totals',()=>{
 cases([['links-reading-1','Tessa','Niko'],['links-reading-2','25','16'],['links-reading-3','16','25'],['links-reading-4','market','riverside'],['links-reading-5','no','yes'],
 ['links-listening-1','Niko','Tessa'],['links-listening-2','mobile','printed'],['links-listening-3','12','8'],['links-listening-4','8','12'],['links-listening-5','no','yes']]);
 assert(task('links-reading-8').answer.includes('Travel'));assert(task('links-reading-8').answer.includes('supervisor'));
 assert(task('links-listening-8').answer.includes("Last year's"));assert(task('links-listening-10').answer.includes('Неизвестно'));
});
test('C103 parallel frames accept shared infinitives and both UK and US labelling',()=>{
 cases([['editing-forms-1','reporting','report'],['editing-forms-2','publish','publishing'],['editing-forms-3','matter','matters'],['editing-forms-4','or','and'],
 ['editing-forms-5','but','and'],['editing-forms-6','usable','use'],
 ['editing-forms-7','The task involves checking, sorting and labelling.','The task involves checking, sorting and to label.'],
 ['editing-forms-7','The task involves checking, sorting and labeling.','The task involves checking, sorting and label.'],
 ['editing-forms-8','We aim to observe, compare and report.','We aim to observe, compare and reporting.'],
 ['editing-test-a-1','analysing','analyse'],['editing-test-a-1','analyzing','analyze'],['editing-test-b-2','record','recording']]);
});
test('C103 punctuation and legitimate mixed internal forms are evaluated substantively',()=>{
 open(['editing-forms-9','editing-forms-10','editing-forms-11','editing-forms-12','editing-forms-14','editing-forms-15','editing-forms-16','editing-forms-20',
 'editing-test-a-5','editing-test-a-6','editing-test-b-5','editing-test-b-6']);
 assert(task('editing-forms-10').answer.startsWith('Нет'));
 assert(task('editing-forms-11').explanation.includes('Ручная'));
 assert(units[2].explanation.some(e=>e.text.includes('normalizer')));
});
test('C103 compression retains actor, unknown agency, modality, negative scope and measurement units',()=>{
 cases([['editing-meaning-1','no','yes'],['editing-meaning-2','no','yes'],['editing-meaning-3','no','yes'],['editing-meaning-4','no','yes'],
 ['editing-test-a-9','no','yes'],['editing-test-a-10','no','yes'],['editing-test-b-9','no','yes'],['editing-test-b-10','no','yes']]);
 open(['editing-meaning-5','editing-meaning-6','editing-meaning-7','editing-meaning-8','editing-meaning-9','editing-meaning-10','editing-meaning-14']);
 assert(task('editing-test-a-8').answer.includes('After the records had been checked'));
 assert(task('editing-meaning-9').answer.includes('уже компактна'));
});
test('C103 editing passages do not inflate reservations, attempts or absence of one problem into quality',()=>{
 cases([['editing-reading-1','Pavel','Amira'],['editing-reading-2','42','31'],['editing-reading-3','31','42'],['editing-reading-4','58','31'],['editing-reading-5','20','38'],
 ['editing-listening-1','Imani','Jules'],['editing-listening-2','12','8'],['editing-listening-3','8','12'],['editing-listening-4','3','5'],['editing-listening-5','no','yes']]);
 assert(task('editing-reading-9').answer.includes('Amira'));assert(task('editing-reading-9').answer.includes('Pavel'));
 assert(task('editing-listening-8').answer.includes('proposed'));assert(task('editing-listening-10').answer.includes('not resolution'));
});
test('C103 three original reference tables define scope, complete rows, practice and official sources',()=>{
 assert.deepEqual([nominalPatterns.length,referencePatterns.length,editingPatterns.length],[28,24,24]);
 for(const r of [nominalReference,textReference,editingReference]){assert.equal(r.headers.length,4);assert(r.rows.every(row=>row.length===4&&row.every(Boolean)));assert.equal(r.practice.length,16);assert(r.intro.length);}
 assert.equal(denseTextSources.length,8);
 for(const [,url] of denseTextSources)assert(/^(dictionary\.cambridge\.org|learnenglish\.britishcouncil\.org|owl\.purdue\.edu|www\.phrasebank\.manchester\.ac\.uk)$/.test(new URL(url).hostname));
});
test('C103 new cards retain seven previous IDs and provide contextual UK IPA',()=>{
 assert.equal(c103Vocabulary.length,84);const cards=vocabulary.filter(c=>c.module==='C103');assert.equal(cards.length,91);
 assert.equal(new Set(c103Vocabulary.map(c=>c.word)).size,84);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='C103-v'+i));assert(cards.some(c=>c.id==='C103-x-boil-down-to'));
 for(const c of c103Vocabulary)assert(c.context&&c.note&&c.kind&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['at face value','in a nutshell','read between the lines','spell out','that of','subject to approval'])assert(cards.some(c=>c.word===word));
});
test('C103 has natural unit scopes, substantial independent passages and fresh goal-covering exams',()=>{
 assert.deepEqual(units.map(u=>u.id),['C103-nouns','C103-links','C103-editing']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[86,86,94]);assert.deepEqual(units.map(u=>u.examples.length),[30,28,30]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[20,20],[20,20],[23,23]]);const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'C102-distance');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=6500);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?500:300));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind),u.id+kind);for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});
test('C103 all thirteen specified-length models meet their own task rather than a uniform lesson size',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,13);assert.equal(paragraphs.filter(t=>t.prompt.includes('220–280')).length,5);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 assert(units.every(u=>u.banks.some(b=>b.tasks.some(t=>t.prompt.includes('220–280')))));
});
test('C103 old questions, multiline answers, notes and SRS survive without inherited practice',()=>{
 const s=freshState();s.moduleProgress.C103={selfChecked:true,date:'2026-09-22'};s.drafts.C103='Synthetic original note.';
 s.cards['C103-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['C103-x-boil-down-to']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C103';s.navigation.sections.course='module/C103';
 s.navigation.pages['module/C103']={scroll:420,focus:'drill1',fields:{drill0:'implementation',drill1:'reporting\nOriginal answer',drill2:'approval'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'C103').total,269);assert.equal(topicWorkProgress(copy,'C103').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='C103').drills.map(d=>d[0]),['implement → ___ (существительное)','Параллельность: testing, measuring and ___ (report)','The team approved it → Its ___ by the team.']);
 delete s.navigation;assert.equal(validateState(s).drafts.C103,s.drafts.C103);
});
test('C103 drafts and both submitted variants preserve original responses pending manual review',()=>{
 for(const u of units){const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>/100–140|220–280/.test(t.prompt));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished text.\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C103').completed,0);let first;
  for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T14:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'C103').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});
test('C103 269 steps reflect submitted work, not mastery or elapsed time',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T15:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'C103');assert.equal(progress.total,269);assert.equal(progress.completed,269);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C103'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C103'),progress);
});

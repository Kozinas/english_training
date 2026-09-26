import test from 'node:test';
import assert from 'node:assert/strict';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {modules,subtopics,vocabulary,courseStats,topicDevelopment} from '../data/course.mjs';
import {inferenceReference,inferencePatterns,inferenceSources} from '../data/inference-reference.mjs';
import {c203Vocabulary} from '../data/lexicon-c203.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const module=modules.find(m=>m.id==='C203'),u=subtopics.find(u=>u.id==='C203-inference');
const all=[...u.banks,...u.tests].flatMap(b=>b.tasks);
const task=id=>all.find(t=>t.id==='C203-inference-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('C203 direct and embedded questions, attribution and inference have independent keys',()=>{
 cases([['forms-1','that','what'],['forms-2','mean','do mean'],['forms-3','to','for'],['forms-4','suggesting','suggest'],['forms-5','Could you explain what worries you?','Could you explain what does worry you?'],['forms-6','Could you clarify what you mean?','Could you clarify what do you mean?'],['forms-7','Do you mean that we should wait?','Do you mean that should we wait?'],['forms-8','I do not mean that we should cancel it.','I mean that we should not cancel it.'],['forms-9','as','like'],['forms-10','from','to'],['test-a-5','Could you tell me why you called it surprising?','Could you tell me why did you call it surprising?'],['test-b-5','Could you explain why the timing is awkward?','Could you explain why is the timing awkward?']]);
});
test('C203 some inference is cancellable but only restrictions, source and agreement boundaries remain',()=>{
 cases([['meaning-1','no','yes'],['meaning-2','no','yes'],['meaning-3','no','yes'],['meaning-4','no','yes'],['test-a-6','no','yes'],['test-a-7','no','yes'],['test-a-8','no','yes'],['test-b-6','no','yes'],['test-b-7','no','yes'],['test-b-8','no','yes']]);
 const mechanisms=u.explanation.map(e=>e.text).join(' ');
 assert(mechanisms.includes('Some replied; in fact, all did'));
 assert(mechanisms.includes('предпосылка не становится доказательством'));
 assert(mechanisms.includes('But меняет направление аргумента'));
});
test('C203 irony, presupposition and cultural interpretations stay open to contextual review',()=>{
 open(['meaning-5','meaning-6','meaning-7','meaning-8','meaning-9','meaning-10','meaning-11','meaning-12','meaning-13','meaning-14','test-a-9','test-a-10','test-a-12','test-b-9','test-b-10','test-b-12','test-b-13']);
 assert(task('meaning-14').answer.includes('слушатель сделал вывод'));
 assert(task('meaning-13').answer.includes('акцент не устанавливает'));
 assert(task('test-a-10').explanation.includes('не независимая проверка'));
 assert(task('test-b-10').explanation.includes('временную рамку'));
});
test('C203 reading distinguishes poster approval, reactions, specific volunteers and future check',()=>{
 cases([['reading-1','Ruth','Leo'],['reading-2','colours','lettering'],['reading-2','colors','dates'],['reading-3','3','2'],['reading-4','2','3'],['reading-5','Thursday','Tuesday']]);
 const reading=u.banks.find(b=>b.id==='reading').passage;
 assert(reading.includes('Two members laugh'));
 assert(reading.includes('late arrivals by two people, not by volunteers as a group'));
 assert(task('reading-9').explanation.includes('two в zero'));
 assert(task('reading-7').answer.includes('обновила запись'));
});
test('C203 audio distinguishes proposed visit, noise, acknowledgement, nickname and discussion date',()=>{
 cases([['listening-1','cafe','library'],['listening-2','noise','price'],['listening-3','no','yes'],['listening-4','no','yes'],['listening-5','Tuesday','Thursday']]);
 assert(task('listening-3').prompt.includes('report a completed visit'));
 assert(task('listening-7').answer.includes('дружеское прозвище'));
 assert(task('listening-8').explanation.includes('ещё не проведено'));
 assert(task('listening-10').answer.includes('Синтетическая озвучка'));
});
test('C203 audio evidence is never inferred from ASR and external listening tasks are manual',()=>{
 open(['sounds-10','listening-10','production-9','test-a-17','test-b-17']);
 const transfer=u.banks.find(b=>b.id==='transfer');
 assert.equal(transfer.tasks.length,12);assert(transfer.tasks.every(isOpen));
 assert.deepEqual(transfer.resources,[inferenceSources[3]]);
 assert(transfer.instructions.includes('нужен интернет'));
 assert(transfer.instructions.includes('не засчитывает аудирование'));
 assert(transfer.instructions.includes('не воспроизводится автоматически'));
 assert(task('transfer-6').explanation.includes('выдуманный таймкод не допустим'));
 assert(task('transfer-11').answer.includes('метка источника остаётся C1'));
});
test('C203 published scope is partial, not a fake completed topic or placeholder units',()=>{
 assert.equal(module.contentStatus,'partial');assert.equal(module.subtopics.length,1);
 assert.deepEqual(module.remainingScope,topicDevelopment.C203.remaining);assert.equal(module.remainingScope.length,2);
 assert(module.remainingScope[0].includes('Длинное аудирование'));assert(module.remainingScope[1].includes('Акценты'));
 assert.equal(courseStats.expanded,31);assert.equal(courseStats.partial,1);assert.equal(courseStats.legacy,8);
 assert.equal(courseStats.expanded+courseStats.partial+courseStats.legacy,40);
 assert.equal(subtopics.filter(t=>t.topic==='C203').length,1);
});
test('C203 first subtopic contains complete substantial banks, separate texts and fresh tests',()=>{
 assert.deepEqual(u.prerequisites,['C202-revision','C104-intent']);assert.equal(u.examples.length,30);
 assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=7000);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,10,12,12,12,12,10]);
 assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);
 const passages=u.banks.filter(b=>b.passage);assert.equal(passages.length,2);assert.notEqual(passages[0].passage,passages[1].passage);
 for(const b of passages){assert(b.passage.toLowerCase().includes('fictional'));assert(b.passage.split(/\s+/).length>=(b.kind==='reading'?600:400));}
 const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
 for(const exam of u.tests){assert.equal(exam.tasks.length,20);for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id));for(const t of exam.tasks){assert(!prompts.has(t.prompt));prompts.add(t.prompt);}}
});
test('C203 six full writing models satisfy their actual required word ranges',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,6);
 assert.equal(paragraphs.filter(t=>t.prompt.includes('220–280')).length,1);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
});
test('C203 reference has explicit scope, complete rows, practice and attributed primary sources',()=>{
 assert.equal(inferencePatterns.length,24);assert(inferencePatterns.every(r=>r.length===4&&r.every(Boolean)));
 assert.equal(inferenceReference.practice.length,16);assert.equal(inferenceReference.headers.length,4);
 assert(inferenceReference.intro.some(s=>s.includes('не исчерпывающий каталог')));
 assert(inferenceReference.intro.some(s=>s.includes('не превращает её в экзамен C2')));
 for(const [,url] of inferenceSources)assert(/^(dictionary\.cambridge\.org|www\.teachingenglish\.org\.uk|learnenglish\.britishcouncil\.org)$/.test(new URL(url).hostname));
});
test('C203 thirty-six new cards preserve all seven old identities, IPA and distinct roles',()=>{
 assert.equal(c203Vocabulary.length,36);const cards=vocabulary.filter(c=>c.module==='C203');assert.equal(cards.length,43);
 assert.equal(new Set(cards.map(c=>c.word)).size,43);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='C203-v'+i));assert(cards.some(c=>c.id==='C203-x-read-between'));
 for(const c of c203Vocabulary)assert(c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['imply','infer','take at face value','pick up on','give the benefit of the doubt'])assert(cards.some(c=>c.word===word));
});
test('C203 archived original questions, multiline answers, notes and SRS survive with zero new work',()=>{
 const s=freshState();s.moduleProgress.C203={selfChecked:true,date:'2026-09-22'};s.drafts.C203='Synthetic original note.';
 s.cards['C203-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['C203-x-read-between']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C203';s.navigation.sections.course='module/C203';
 s.navigation.pages['module/C203']={scroll:420,focus:'drill1',fields:{drill0:'no',drill1:'отчасти\nOriginal answer',drill2:'that'},details:[true]};
 const restored=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(restored,s);assert.equal(restored.schemaVersion,2);
 assert.equal(topicWorkProgress(restored,'C203').total,97);assert.equal(topicWorkProgress(restored,'C203').completed,0);
 assert.deepEqual(module.drills.map(d=>d[0]),['A contextual inference is always certain? (yes/no)','Up to a point = полностью или отчасти?','Are you suggesting ___ we should wait?']);
 delete s.navigation;assert.equal(validateState(s).drafts.C203,s.drafts.C203);
});
test('C203 both exams retain original answers and incomplete multiline drafts without auto-review',()=>{
 const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>/100–140/.test(t.prompt));
 p.examDraft.answers[paragraph.id]='Synthetic unfinished response.\nContinue later.';
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C203').completed,0);
 let first;
 for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-26T12:00:00Z');
  const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(result.status,'awaiting-review');assert.equal(topicWorkProgress(s,'C203').completed,1);
  if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
 }
 assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
});
test('C203 complete published work neither completes remaining scope nor removes the topic from plan',()=>{
 const s=freshState(),p=unitState(s,u.id);
 for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
 p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-26T12:00:00Z');
 const progress=topicWorkProgress(s,'C203');assert.equal(progress.total,97);assert.equal(progress.completed,97);assert.equal(progress.percent,100);
 assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');assert.equal(module.contentStatus,'partial');
 s.moduleProgress.C203={selfChecked:true,date:'2026-09-26'};
 s.placement={assessmentVersion,date:'2026-09-26T12:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.answer]))};
 assert(buildPlan(s).items.some(m=>m.id==='C203'&&m.contentStatus==='partial'));
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C203'),progress);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C203'),progress);
});

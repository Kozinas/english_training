import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {scopePatterns,modalPatterns,aspectPatterns,scopeReference,modalInterpretationReference,aspectReference,precisionSources} from '../data/precision-reference.mjs';
import {c201Vocabulary} from '../data/lexicon-c201.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='C201');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='C201-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('C201 scope keys distinguish not all, neither, boundaries and the position of negation',()=>{
 cases([['scope-forms-1','yes','no'],['scope-forms-2','no','yes'],['scope-forms-3','yes','no'],['scope-forms-4','no','yes'],['scope-forms-5','Neither','Both'],['scope-forms-6','I promised not to leave.','I did not promise to leave.'],['scope-forms-7','I did not promise to leave.','I promised not to leave.'],['scope-forms-8','person','time'],['scope-test-a-2','no','yes'],['scope-test-b-2','no','yes'],['scope-test-b-3','no','yes']]);
});
test('C201 ambiguous focus, attachment, absent evidence and graded negation require semantic review',()=>{
 cases([['scope-meaning-1','yes','no'],['scope-meaning-2','no','yes'],['scope-meaning-3','no','yes'],['scope-meaning-4','yes','no']]);
 open(['scope-forms-12','scope-forms-13','scope-meaning-5','scope-meaning-6','scope-meaning-11','scope-meaning-13','scope-test-a-18','scope-test-b-14']);
 assert(units[0].explanation.some(e=>e.text.includes('срединная позиция only нормальна')));
 assert(units[0].explanation.some(e=>e.text.includes('надёжный чувствительный тест может быть информативен')));
 assert(task('scope-test-a-8').answer.includes('Ни то ни другое'));
});
test('C201 scope passages have independent counts, roles and limited observation',()=>{
 cases([['scope-reading-1','Lena','Arun'],['scope-reading-2','12','8'],['scope-reading-3','8','12'],['scope-reading-4','1','3'],['scope-listening-1','Dario','Lena'],['scope-listening-2','20','14'],['scope-listening-3','14','6'],['scope-listening-4','6','14']]);
 assert(task('scope-reading-7').answer.includes('неизвестность'));
 assert(task('scope-reading-11').answer.includes('not used to record'));
 assert(task('scope-listening-6').answer.includes('did not instruct'));
});
test('C201 modal chains use base have, passive been and progressive ing',()=>{
 cases([['modality-forms-1','have','has'],['modality-forms-2','been','being'],['modality-forms-3','waiting','wait'],['modality-forms-4','be','is'],['modality-forms-5','He may have forgotten.','He may has forgotten.'],['modality-forms-6','She may not enter.','She does not may enter.'],['modality-forms-7','optional','prohibited'],['modality-forms-8','prohibited','required'],['modality-test-a-3','He could have missed the ferry.','He could has missed the ferry.'],['modality-test-b-3','She might not remember.','She does not might remember.']]);
});
test('C201 modality preserves possible past, negative deduction and optional action without fixed percentages',()=>{
 cases([['modality-meaning-1','no','yes'],['modality-meaning-2','no','yes'],['modality-meaning-3','no','yes'],['modality-meaning-4','no','yes'],['modality-test-a-4','do not have to pay','must not pay'],['modality-test-b-4','must not take photos','do not have to take photos']]);
 open(['modality-meaning-5','modality-meaning-6','modality-meaning-8','modality-meaning-9','modality-test-a-6','modality-test-b-6','modality-test-b-18']);
 assert(units[1].explanation.some(e=>e.text.includes('must not')&&e.text.includes('американском')));
 assert(units[1].explanation.some(e=>e.text.includes('so you didn’t')&&e.text.includes('but you did')));
 assert(task('modality-meaning-8').answer.includes('I do not know'));
});
test('C201 modal texts separate permissions, chosen actions, observations and attributed deductions',()=>{
 cases([['modality-reading-1','Robin','Salma'],['modality-reading-2','Salma','Robin'],['modality-reading-3','Thursday','Saturday'],['modality-reading-4','envelope','drawer'],['modality-listening-1','Ellis','Robin'],['modality-listening-2','Saturday','Thursday'],['modality-listening-3','2','4'],['modality-listening-4','car','van']]);
 assert(task('modality-reading-9').answer.includes('выводом Salma'));
 assert(task('modality-listening-8').answer.includes("didn't need to отдельно"));
 assert(task('modality-listening-11').answer.includes('нуждается в проверке'));
});
test('C201 aspect chains and independent closed keys preserve state, process and completed count',()=>{
 cases([['aspect-forms-1','known','been knowing'],['aspect-forms-2','being','been'],['aspect-forms-3','been','being'],['aspect-forms-4','meeting','meet'],['aspect-forms-5','I have known her for years.','I have been knowing her for years.'],['aspect-forms-6','The panel is being painted.','The panel is been painted.'],['aspect-forms-7','no','yes'],['aspect-forms-8','no','yes'],['aspect-test-a-3','They have been working on the mural.','They have been work on the mural.'],['aspect-test-b-3','The seats are being cleaned.','The seats are been cleaned.']]);
});
test('C201 aspect does not equate duration with continuous, process with success or past form with abandoned request',()=>{
 cases([['aspect-meaning-1','no','yes'],['aspect-meaning-2','yes','no'],['aspect-meaning-3','no','yes'],['aspect-meaning-4','no','yes'],['aspect-test-a-4','yes','no'],['aspect-test-b-5','yes','no']]);
 open(['aspect-meaning-5','aspect-meaning-7','aspect-meaning-9','aspect-meaning-10','aspect-meaning-13','aspect-test-a-13','aspect-test-b-13']);
 assert(task('aspect-meaning-7').answer.includes('без утверждения завершения'));
 assert(task('aspect-test-a-14').answer.includes('раньше завершения'));
 assert(task('aspect-test-b-14').answer.includes('раньше ухода'));
 assert(units[2].explanation.some(e=>e.text.includes('UK/US')));
});
test('C201 aspect reading and audio have distinct counts and unconfirmed review states',()=>{
 cases([['aspect-reading-1','Hana','Leo'],['aspect-reading-2','3','4'],['aspect-reading-3','Friday','Tuesday'],['aspect-reading-4','Leo','Mina'],['aspect-listening-1','Priya','Hana'],['aspect-listening-2','4','3'],['aspect-listening-3','Tuesday','Friday'],['aspect-listening-4','3','4']]);
 assert(task('aspect-listening-5').answer.includes('not yet been inspected'));
 assert(task('aspect-reading-11').answer.includes('выполнение не сообщено'));
 assert(task('aspect-listening-10').answer.includes('approval is pending'));
});
test('C201 three references have complete rows, explicit limits, practice and primary grammar and usage sources',()=>{
 assert.deepEqual([scopePatterns.length,modalPatterns.length,aspectPatterns.length],[24,24,26]);
 for(const r of [scopeReference,modalInterpretationReference,aspectReference]){assert.equal(r.headers.length,4);assert(r.rows.every(row=>row.length===4&&row.every(Boolean)));assert.equal(r.practice.length,16);assert(r.intro.length);}
 assert.equal(precisionSources.length,10);
 for(const [,url] of precisionSources)assert(/^(dictionary\.cambridge\.org|learnenglish\.britishcouncil\.org|downloads\.bbc\.co\.uk|czasopisma\.kul\.pl|www\.cambridge\.org)$/.test(new URL(url).hostname));
});
test('C201 new vocabulary keeps seven previous identities and includes contextual IPA and chunks',()=>{
 assert.equal(c201Vocabulary.length,72);const cards=vocabulary.filter(c=>c.module==='C201');assert.equal(cards.length,79);
 assert.equal(new Set(c201Vocabulary.map(c=>c.word)).size,72);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='C201-v'+i));assert(cards.some(c=>c.id==='C201-x-beg-question'));
 for(const c of c201Vocabulary)assert(c.context&&c.note&&c.kind&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['scope of negation','read too much into','jump the gun','carry on','take for granted','not necessarily'])assert(cards.some(c=>c.word===word));
});
test('C201 scopes have substantial independent fictional materials and fresh goal-covering exams',()=>{
 assert.deepEqual(units.map(u=>u.id),['C201-scope','C201-modality','C201-aspect']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[88,88,88]);assert.deepEqual(units.map(u=>u.examples.length),[28,28,30]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[22,22],[20,20],[22,22]]);const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'C105-argument');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=6500);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?500:300));assert(b.passage.toLowerCase().includes('fictional'));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind),u.id+kind);for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),u.id+g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});
test('C201 eleven full models meet their own length, including two extended scope/aspect essays',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,11);assert.equal(paragraphs.filter(t=>t.prompt.includes('400–460')).length,2);assert.equal(paragraphs.filter(t=>t.prompt.includes('220–280')).length,1);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 assert(units.every(u=>u.banks.some(b=>b.tasks.some(t=>/220–280|400–460/.test(t.prompt)))));
});
test('C201 legacy questions, multiline responses, notes and SRS survive with zero inherited new work',()=>{
 const s=freshState();s.moduleProgress.C201={selfChecked:true,date:'2026-09-22'};s.drafts.C201='Synthetic original note.';
 s.cards['C201-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['C201-x-beg-question']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C201';s.navigation.sections.course='module/C201';
 s.navigation.pages['module/C201']={scroll:420,focus:'drill1',fields:{drill0:'не все',drill1:'no\nOriginal answer',drill2:'человека'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'C201').total,267);assert.equal(topicWorkProgress(copy,'C201').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='C201').drills.map(d=>d[0]),['Not all = ни один или не все?','No evidence of X = доказательство отсутствия X? (yes/no)','Only Ana called: ограничение человека или времени?']);
 delete s.navigation;assert.equal(validateState(s).drafts.C201,s.drafts.C201);
});
test('C201 both test variants retain original responses and unfinished essays pending review',()=>{
 for(const u of units){const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>/100–140|220–280/.test(t.prompt));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished text.\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C201').completed,0);let first;
  for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T14:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'C201').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});
test('C201 267 progress steps are completed work rather than mastery or a timed schedule',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T15:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'C201');assert.equal(progress.total,267);assert.equal(progress.completed,267);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C201'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C201'),progress);
});

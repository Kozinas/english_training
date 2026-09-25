import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {idiomaticPatterns,economyPatterns,revisionPatterns,idiomaticReference,economyReference,revisionReference,styleSources} from '../data/style-reference.mjs';
import {c202Vocabulary} from '../data/lexicon-c202.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='C202');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='C202-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('C202 collocation and word patterns have independent contextual keys',()=>{
 cases([['idiomatic-forms-1','heavy','strong'],['idiomatic-forms-2','strong','heavy'],['idiomatic-forms-3','clear','clearly'],['idiomatic-forms-4','clearly','clear'],['idiomatic-forms-5','for','of'],['idiomatic-forms-6','to','for'],['idiomatic-forms-7','We discussed the schedule.','We discussed about the schedule.'],['idiomatic-forms-8','We talked about the schedule.','We talked the schedule.'],['idiomatic-forms-9','economic','economical'],['idiomatic-forms-10','economical','economic'],['idiomatic-forms-11','sensible','sensitive'],['idiomatic-forms-12','sensitive','sensible'],['idiomatic-test-a-1','strong','tall'],['idiomatic-test-b-4','Please explain the procedure to us.','Please explain us the procedure.']]);
});
test('C202 naturalness is not idiom density and register choices remain open',()=>{
 cases([['idiomatic-meaning-1','no','yes'],['idiomatic-meaning-2','no','yes'],['idiomatic-meaning-3','no','yes'],['idiomatic-meaning-4','yes','no']]);
 open(['idiomatic-forms-13','idiomatic-forms-14','idiomatic-meaning-6','idiomatic-meaning-8','idiomatic-meaning-11','idiomatic-meaning-12','idiomatic-test-a-7','idiomatic-test-b-14','idiomatic-test-b-18']);
 assert(task('idiomatic-forms-13').answer.includes('take a decision'));
 assert(units[0].explanation.some(e=>e.text.includes('Organize встречается и в UK')));
 assert(units[0].explanation.some(e=>e.text.includes('Сохранение')||e.text.includes('личный вкус')));
 assert(task('idiomatic-meaning-10').answer.includes('save routine effort')&&task('idiomatic-meaning-10').answer.includes('harder to notice'));
});
test('C202 idiomatic reading and audio preserve booking channels, review and audience',()=>{
 cases([['idiomatic-reading-1','Nora','Owen'],['idiomatic-reading-2','Monday','Wednesday'],['idiomatic-reading-3','afternoon','morning'],['idiomatic-reading-4','no','yes'],['idiomatic-listening-1','Owen','Nora'],['idiomatic-listening-2','no','yes'],['idiomatic-listening-3','no','yes'],['idiomatic-listening-4','British','American']]);
 assert(task('idiomatic-reading-6').answer.includes('после проверки'));
 assert(task('idiomatic-listening-6').answer.includes('feedback'));
 assert(task('idiomatic-reading-11').answer.includes('исходное написание'));
});
test('C202 concision transformations retain grammar, roles and tense',()=>{
 cases([['concision-forms-1','assessed','assessment'],['concision-forms-2','of','that'],['concision-forms-3','it','its'],['concision-forms-4','been','being'],['concision-forms-5','We waited because the gate was closed.','We waited because of the gate was closed.'],['concision-forms-6','Mia sent the note.','Mia sends the note.'],['concision-forms-7','The list was checked by Ben.','Ben was checked by the list.'],['concision-forms-8','to','for'],['concision-forms-9','cancel','cancelling'],['concision-forms-10','carefully','careful'],['concision-test-a-4','Noor updated the list.','The list updated Noor.'],['concision-test-b-4','Ravi wrote the notice.','Ravi writes the notice.']]);
});
test('C202 economy preserves qualifiers, exceptions and useful passives or repetition',()=>{
 cases([['concision-meaning-1','no','yes'],['concision-meaning-2','no','yes'],['concision-meaning-3','no','yes'],['concision-meaning-4','no','yes']]);
 open(['concision-forms-12','concision-forms-13','concision-forms-15','concision-forms-16','concision-meaning-5','concision-meaning-6','concision-meaning-9','concision-meaning-14','concision-test-b-17']);
 assert(task('concision-meaning-7').answer.includes('постоянное'));
 assert(task('concision-meaning-8').answer.includes('альтернативного действия'));
 assert(units[1].explanation.some(e=>e.text.includes('normalizer')||e.text.includes('нормализация')));
});
test('C202 concision texts distinguish trial scope, contact, location and fallback action',()=>{
 cases([['concision-reading-1','Thursday','Monday'],['concision-reading-2','side','main'],['concision-reading-3','no','yes'],['concision-reading-4','no','yes'],['concision-listening-1','Marta','Ben'],['concision-listening-2','east','west'],['concision-listening-3','Sunday','Saturday'],['concision-listening-4','Ben','Marta']]);
 assert(task('concision-reading-5').answer.includes('identify the reservation'));
 assert(task('concision-listening-5').answer.includes('ten and twelve'));
 assert(task('concision-listening-8').answer.includes('another time'));
});
test('C202 revision has independent grammar keys and manually reviewed punctuation',()=>{
 cases([['revision-forms-1','in','on'],['revision-forms-2','with','to'],['revision-forms-3','to','on'],['revision-forms-4','for','of'],['revision-forms-5','The revision preserves the condition.','The revision preserve the condition.'],['revision-forms-6','These comments were considered.','These comments was considered.'],['revision-forms-7','global','proofreading'],['revision-forms-8','proofreading','global'],['revision-test-a-3','The changes preserve the date.','The changes preserves the date.'],['revision-test-b-3','This paragraph explains the exception.','This paragraph explain the exception.']]);
 open(['revision-forms-9','revision-forms-10','revision-production-12','revision-test-a-15','revision-test-b-15']);
});
test('C202 editing distinguishes fact, structure, house style and the author voice',()=>{
 cases([['revision-meaning-1','no','yes'],['revision-meaning-2','no','yes'],['revision-meaning-3','no','yes'],['revision-meaning-4','no','yes'],['revision-test-a-5','no','yes'],['revision-test-b-5','no','yes']]);
 open(['revision-meaning-5','revision-meaning-6','revision-meaning-7','revision-meaning-9','revision-meaning-12','revision-meaning-13','revision-meaning-16','revision-production-14']);
 assert(task('revision-production-14').prompt.includes('500 слов'));
 assert(task('revision-production-14').answer.includes('полный исходник'));
 assert(task('revision-test-a-20').answer.includes('датированное обновление'));
 assert(task('revision-test-b-9').answer.includes('неизвестный мотив'));
});
test('C202 document cases keep locations, unchanged times and unconfirmed alternatives separate',()=>{
 cases([['revision-reading-1','Saira','Tomas'],['revision-reading-2','Tomas','Saira'],['revision-reading-3','Monday','Friday'],['revision-reading-4','north','south'],['revision-reading-5','Friday','Monday'],['revision-reading-6','no','yes'],['revision-listening-1','Felix','Saira'],['revision-listening-2','courtyard','hall'],['revision-listening-3','Saturday','Sunday'],['revision-listening-4','11','12']]);
 assert(task('revision-listening-5').answer.includes('west hall'));
 assert(task('revision-reading-13').answer.includes('каждого предложения'));
 assert(task('revision-listening-12').answer.includes('Датированным обновлением'));
});
test('C202 three references have complete rows, explicit limits, practice and primary grammar and usage sources',()=>{
 assert.deepEqual([idiomaticPatterns.length,economyPatterns.length,revisionPatterns.length],[24,26,26]);
 for(const r of [idiomaticReference,economyReference,revisionReference]){assert.equal(r.headers.length,4);assert(r.rows.every(row=>row.length===4&&row.every(Boolean)));assert.equal(r.practice.length,16);assert(r.intro.length);}
 assert.equal(styleSources.length,10);
 for(const [,url] of styleSources)assert(/^(owl\.purdue\.edu|writingcenter\.unc\.edu|writingcenter\.fas\.harvard\.edu|dictionary\.cambridge\.org|dictionaryblog\.cambridge\.org|www\.oxfordlearnersdictionaries\.com|our-languages\.canada\.ca)$/.test(new URL(url).hostname));
});
test('C202 new vocabulary keeps seven previous identities and includes contextual IPA and chunks',()=>{
 assert.equal(c202Vocabulary.length,75);const cards=vocabulary.filter(c=>c.module==='C202');assert.equal(cards.length,82);
 assert.equal(new Set(c202Vocabulary.map(c=>c.word)).size,75);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='C202-v'+i));assert(cards.some(c=>c.id==='C202-x-cut-corners'));
 for(const c of c202Vocabulary)assert(c.context&&c.note&&c.kind&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['get the hang of','double-edged sword','boil down to','reverse outline','house style','put the record straight'])assert(cards.some(c=>c.word===word));
});
test('C202 scopes have substantial independent fictional materials and fresh goal-covering exams',()=>{
 assert.deepEqual(units.map(u=>u.id),['C202-idiomatic','C202-concision','C202-revision']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[90,90,92]);assert.deepEqual(units.map(u=>u.examples.length),[28,30,30]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[20,20],[22,22],[24,24]]);const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'C201-aspect');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=6500);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?500:300));assert(b.passage.toLowerCase().includes('fictional'));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind),u.id+kind);for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),u.id+g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});
test('C202 thirteen full models meet their lengths, including a 500-word revision and rationale',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,13);assert.equal(paragraphs.filter(t=>t.prompt.includes('500–560')).length,1);assert.equal(paragraphs.filter(t=>t.prompt.includes('220–280')).length,3);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 assert(units.every(u=>u.banks.some(b=>b.tasks.some(t=>/220–280|500–560/.test(t.prompt)))));
});
test('C202 legacy questions, multiline responses, notes and SRS survive with zero inherited new work',()=>{
 const s=freshState();s.moduleProgress.C202={selfChecked:true,date:'2026-09-22'};s.drafts.C202='Synthetic original note.';
 s.cards['C202-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['C202-x-cut-corners']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C202';s.navigation.sections.course='module/C202';
 s.navigation.pages['module/C202']={scroll:420,focus:'drill1',fields:{drill0:'heavy',drill1:'explicit\nOriginal answer',drill2:'for'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'C202').total,275);assert.equal(topicWorkProgress(copy,'C202').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='C202').drills.map(d=>d[0]),['___ rain (heavy/strong)','Make the meaning ___ (explicit/explicitly).','Leaves room ___ interpretation.']);
 delete s.navigation;assert.equal(validateState(s).drafts.C202,s.drafts.C202);
});
test('C202 both test variants retain original responses and unfinished essays pending review',()=>{
 for(const u of units){const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>/100–140|220–280/.test(t.prompt));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished text.\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C202').completed,0);let first;
  for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T14:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'C202').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});
test('C202 275 progress steps are completed work rather than mastery or a timed schedule',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T15:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'C202');assert.equal(progress.total,275);assert.equal(progress.completed,275);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C202'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C202'),progress);
});

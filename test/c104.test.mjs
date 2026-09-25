import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {intentPatterns,idiomPatterns,negotiationPatterns,intentReference,idiomsReference,negotiationReference,pragmaticsSources} from '../data/pragmatics-reference.mjs';
import {c104Vocabulary} from '../data/lexicon-c104.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='C104');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='C104-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('C104 requests, permission, mind and indirect questions have independent form keys',()=>{
 cases([['intent-forms-1','check','checking'],['intent-forms-2','checking','check'],['intent-forms-3','to','for'],['intent-forms-4','left','leaving'],['intent-forms-5','I','you'],['intent-forms-6','whether','what'],
 ['intent-forms-7','Could you tell me when it starts?','Could you tell me when does it start?'],['intent-forms-8','Would you mind waiting?','Would you mind to wait?'],
 ['intent-test-a-1','confirming','confirm'],['intent-test-b-1','repeating','repeat']]);
});
test('C104 acknowledgement, limited permission and ambiguous intention remain distinct',()=>{
 cases([['intent-meaning-1','no','yes'],['intent-meaning-2','no','yes'],['intent-meaning-3','no','yes'],['intent-meaning-4','no','yes']]);
 open(['intent-meaning-5','intent-meaning-6','intent-meaning-7','intent-meaning-8','intent-meaning-9','intent-forms-14']);
 assert(units[0].explanation.some(e=>e.text.includes('несколько возможных интерпретаций')));
 assert(units[0].explanation.some(e=>e.text.includes('pronunciation и oral fluency остаются неизвестными')));
});
test('C104 intent reading and audio preserve corrected dates, accepted scope and sharing audience',()=>{
 cases([['intent-reading-1','Arun','Ella'],['intent-reading-2','Mina','Arun'],['intent-reading-3','Friday','Thursday'],['intent-reading-4','no','yes'],
 ['intent-listening-1','Rosa','Dan'],['intent-listening-2','Dan','Rosa'],['intent-listening-3','Saturday','Friday'],['intent-listening-4','Thursday','Wednesday'],['intent-listening-5','no','yes']]);
 open(['intent-reading-11','intent-production-6','intent-test-a-12','intent-test-b-12']);
 assert(task('intent-test-b-12').answer.includes('two named reviewers'));
 assert(task('intent-test-b-12').answer.includes('acceptance remains unconfirmed'));
});
test('C104 idiom frames allow inflection and require pronoun placement',()=>{
 cases([['idioms-forms-1','the','a'],['idioms-forms-2','purposes','goals'],['idioms-forms-3','in','on'],['idioms-forms-4','check','test'],['idioms-forms-5','met','meeted'],['idioms-forms-6','air','sky'],['idioms-forms-7','up','out'],
 ['idioms-forms-9','Put it off.','Put off it.'],['idioms-forms-10','They turned down the offer.','They turn downed the offer.'],
 ['idioms-test-a-3','They called it off.','They called off it.'],['idioms-test-b-3','She turned it down.','She turned down it.']]);
 assert(task('idioms-forms-15').answer.includes('maneuver'));
});
test('C104 idioms are not numerical promises, approval, mind-reading or automatic regional diagnoses',()=>{
 cases([['idioms-meaning-1','no','yes'],['idioms-meaning-2','no','yes'],['idioms-meaning-3','no','yes'],['idioms-meaning-4','no','yes']]);
 open(['idioms-meaning-5','idioms-meaning-6','idioms-meaning-7','idioms-meaning-8','idioms-meaning-9','idioms-meaning-10','idioms-meaning-11','idioms-test-b-6']);
 assert(task('idioms-test-a-6').answer.includes('discuss'));assert(task('idioms-test-a-6').answer.includes('postpone'));
 assert(task('idioms-test-b-6').explanation.includes('Акцент'));
 assert(task('idioms-test-a-17').answer==='Have a brief conversation to check progress.');
});
test('C104 idiom passages preserve unresolved times, conditions and individual receipt',()=>{
 cases([['idioms-reading-1','Petra','Luis'],['idioms-reading-2','Luis','Dana'],['idioms-reading-3','six','eight'],['idioms-reading-4','postpone','discuss'],['idioms-reading-5','no','yes'],
 ['idioms-listening-1','Saturday','Sunday'],['idioms-listening-2','no','yes'],['idioms-listening-3','no','yes'],['idioms-listening-4','second','first'],['idioms-listening-5','yes','no']]);
 assert(task('idioms-test-b-10').answer.includes("others' receipt or reading is not confirmed"));
 assert(task('idioms-reading-11').answer.includes('time remains undecided'));
});
test('C104 negotiation grammar separates conditions, duration, deadlines and authority',()=>{
 cases([['negotiation-forms-1','can','to'],['negotiation-forms-2','reduced','reducing'],['negotiation-forms-3','if','that'],['negotiation-forms-4','that','what'],['negotiation-forms-5','by','until'],['negotiation-forms-6','until','by'],['negotiation-forms-7','about','for'],['negotiation-forms-8','to','at'],
 ['negotiation-forms-9','Could you send an outline?','Could you to send an outline?'],['negotiation-forms-10','Could you explain what you need?','Could you explain what do you need?'],
 ['negotiation-test-a-2','by','until'],['negotiation-test-b-2','until','by']]);
});
test('C104 necessary conditions, proposals, commitments and completed work are not conflated',()=>{
 cases([['negotiation-meaning-1','no','yes'],['negotiation-meaning-2','no','yes'],['negotiation-meaning-3','no','yes'],['negotiation-meaning-4','no','yes'],['negotiation-meaning-5','no','yes']]);
 open(['negotiation-meaning-8','negotiation-meaning-9','negotiation-meaning-10','negotiation-meaning-12','negotiation-meaning-16']);
 assert(task('negotiation-test-a-10').answer.includes('acceptance is pending'));
 assert(task('negotiation-test-a-20').answer.includes('отсутствие соглашения'));
 assert(task('negotiation-test-b-12').answer.includes('cannot approve'));
});
test('C104 negotiation reading and audio have independent roles, deadlines and open questions',()=>{
 cases([['negotiation-reading-1','Salma','Rowan'],['negotiation-reading-2','Rowan','Salma'],['negotiation-reading-3','three','all'],['negotiation-reading-4','Thursday','Friday'],['negotiation-reading-5','no','yes'],
 ['negotiation-listening-1','Victor','Lena'],['negotiation-listening-2','Lena','Victor'],['negotiation-listening-3','Friday','Thursday'],['negotiation-listening-4','Thursday','Friday'],['negotiation-listening-5','no','yes']]);
 assert(task('negotiation-reading-11').answer.includes('not a complete draft catalogue'));
 assert(task('negotiation-listening-11').answer.includes('conditional introduction only'));
});
test('C104 three references have explicit scope, complete rows, practice and primary sources',()=>{
 assert.deepEqual([intentPatterns.length,idiomPatterns.length,negotiationPatterns.length],[28,32,28]);
 for(const r of [intentReference,idiomsReference,negotiationReference]){assert.equal(r.headers.length,4);assert(r.rows.every(row=>row.length===4&&row.every(Boolean)));assert.equal(r.practice.length,16);assert(r.intro.length);}
 assert.equal(pragmaticsSources.length,11);
 for(const [,url] of pragmaticsSources)assert(/^(dictionary\.cambridge\.org|learnenglish\.britishcouncil\.org|www\.collinsdictionary\.com)$/.test(new URL(url).hostname));
});
test('C104 cards add context and IPA without replacing seven existing SRS identities',()=>{
 assert.equal(c104Vocabulary.length,84);const cards=vocabulary.filter(c=>c.module==='C104');assert.equal(cards.length,91);
 assert.equal(new Set(c104Vocabulary.map(c=>c.word)).size,84);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='C104-v'+i));assert(cards.some(c=>c.id==='C104-x-at-cross-purposes'));
 for(const c of c104Vocabulary)assert(c.context&&c.note&&c.kind&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['on the same page','meet someone halfway','take a rain check','bring forward','table an issue','on someone\'s behalf'])assert(cards.some(c=>c.word===word));
});
test('C104 natural scopes contain substantial independent passages and two fresh goal-covering exams',()=>{
 assert.deepEqual(units.map(u=>u.id),['C104-intent','C104-idioms','C104-negotiation']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[90,86,92]);assert.deepEqual(units.map(u=>u.examples.length),[30,30,30]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[20,20],[20,20],[22,22]]);const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'C103-editing');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=6500);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?500:300));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind),u.id+kind);for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),u.id+g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});
test('C104 thirteen full writing models meet the stated length and await semantic review',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,13);assert.equal(paragraphs.filter(t=>t.prompt.includes('220–280')).length,3);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 assert(units.every(u=>u.banks.some(b=>b.tasks.some(t=>t.prompt.includes('220–280')))));
});
test('C104 old questions, multiline answers, notes and SRS survive without inherited practice',()=>{
 const s=freshState();s.moduleProgress.C104={selfChecked:true,date:'2026-09-22'};s.drafts.C104='Synthetic original note.';
 s.cards['C104-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['C104-x-at-cross-purposes']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C104';s.navigation.sections.course='module/C104';
 s.navigation.pages['module/C104']={scroll:420,focus:'drill1',fields:{drill0:'раньше',drill1:'yes\nOriginal answer',drill2:'to'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'C104').total,271);assert.equal(topicWorkProgress(copy,'C104').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='C104').drills.map(d=>d[0]),['Bring the date forward = раньше или позже?','On the same page означает одинаково понимать? (yes/no)','I’m not opposed ___ the idea.']);
 delete s.navigation;assert.equal(validateState(s).drafts.C104,s.drafts.C104);
});
test('C104 both variants preserve original responses and drafts pending manual assessment',()=>{
 for(const u of units){const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>/100–140|220–280/.test(t.prompt));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished text.\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C104').completed,0);let first;
  for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T14:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'C104').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});
test('C104 271 progress steps measure submitted work rather than mastery or a timed lesson',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T15:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'C104');assert.equal(progress.total,271);assert.equal(progress.completed,271);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C104'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C104'),progress);
});

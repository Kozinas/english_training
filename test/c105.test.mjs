import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {sourcePatterns,synthesisPatterns,argumentPatterns,sourceReference,synthesisReference,argumentReference,synthesisSources} from '../data/synthesis-reference.mjs';
import {c105Vocabulary} from '../data/lexicon-c105.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='C105');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='C105-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}};
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));

test('C105 attribution, evidence agreement and reporting patterns use independent keys',()=>{
 cases([['sources-forms-1','to','about'],['sources-forms-2','In','On'],['sources-forms-3','to','with'],['sources-forms-4','is','are'],['sources-forms-5','are','is'],['sources-forms-6','checking','check'],['sources-forms-7','Regarding','According to'],['sources-forms-8','that','to'],
 ['sources-forms-9','The evidence is incomplete.','The evidences are incomplete.'],['sources-forms-10','I attribute the result to the new layout.','I attribute the result for the new layout.'],
 ['sources-test-a-4','The author recommends checking the count.','The author recommends to check the count.'],['sources-test-b-4','The report claims that use increased.','The report claims us that use increased.']]);
});
test('C105 source evaluation preserves uncertainty, authorship and question-relative relevance',()=>{
 cases([['sources-meaning-1','no','yes'],['sources-meaning-2','no','yes'],['sources-meaning-3','no','yes'],['sources-meaning-4','no','yes'],['sources-test-b-6','no','yes']]);
 open(['sources-forms-13','sources-meaning-5','sources-meaning-6','sources-meaning-10','sources-meaning-11','sources-meaning-12','sources-meaning-13']);
 assert(task('sources-test-b-15').answer.includes('чужая идея'));
 assert(units[0].explanation.some(e=>e.text.includes('Data допускает singular или plural')));
 assert(units[0].explanation.some(e=>e.text.includes('According to my records нормально')));
});
test('C105 source reading and listening distinguish counts, periods, assistance and copied evidence',()=>{
 cases([['sources-reading-1','Mara','Ivo'],['sources-reading-2','Ivo','Mara'],['sources-reading-3','60','24'],['sources-reading-4','10','14'],['sources-reading-5','24','18'],['sources-reading-6','18','24'],
 ['sources-listening-1','Nessa','Mara'],['sources-listening-2','32','24'],['sources-listening-3','24','32'],['sources-listening-4','10','8'],['sources-listening-5','8','10'],['sources-listening-6','July','August']]);
 assert(task('sources-reading-11').answer.includes('does not isolate'));
 assert(task('sources-test-a-11').answer.includes('does not establish that each entry represents a different person'));
 assert(task('sources-test-b-11').answer.includes('promotion also changed'));
});
test('C105 synthesis grammar and percentage arithmetic use explicit independent frames',()=>{
 cases([['synthesis-forms-1','on','with'],['synthesis-forms-2','with','on'],['synthesis-forms-3','to','with'],['synthesis-forms-4','that','to'],['synthesis-forms-5','whereas','because'],['synthesis-forms-6','together','along'],['synthesis-forms-7','isolates','isolate'],
 ['synthesis-forms-8','10','25'],['synthesis-forms-9','25','10'],['synthesis-test-a-4','15','50'],['synthesis-test-a-5','50','15'],['synthesis-test-b-4','10','20'],['synthesis-test-b-5','20','10'],
 ['synthesis-forms-10','The sources agree on the need for more data.','The sources agree with the need for more data.'],['synthesis-test-b-3','Jo agreed to check the totals.','Jo agreed checking the totals.']]);
});
test('C105 synthesis does not turn different outcomes, overlap or source repetition into proof',()=>{
 cases([['synthesis-meaning-1','no','yes'],['synthesis-meaning-2','no','yes'],['synthesis-meaning-3','no','yes'],['synthesis-meaning-4','no','yes'],['synthesis-test-a-6','yes','no'],['synthesis-test-b-6','no','yes']]);
 open(['synthesis-meaning-5','synthesis-meaning-6','synthesis-meaning-8','synthesis-meaning-9','synthesis-meaning-12','synthesis-meaning-13','synthesis-test-a-12','synthesis-test-b-12']);
 assert(task('synthesis-test-a-12').answer.includes('Contradiction'));
 assert(task('synthesis-test-b-7').answer.includes('performance'));
 assert(task('synthesis-test-b-7').answer.includes('tone'));
});
test('C105 synthesis passages have independently checked people, events, hours and supported subsets',()=>{
 cases([['synthesis-reading-1','30','24'],['synthesis-reading-2','40','30'],['synthesis-reading-3','30','40'],['synthesis-reading-4','14','10'],['synthesis-reading-5','6','4'],['synthesis-reading-6','4','6'],
 ['synthesis-listening-1','44','32'],['synthesis-listening-2','32','44'],['synthesis-listening-3','10','22'],['synthesis-listening-4','22','30'],['synthesis-listening-5','12','9'],['synthesis-listening-6','9','12']]);
 assert(task('synthesis-listening-7').answer.includes('Старый log не фиксирует помощь'));
 assert(task('synthesis-production-3').answer.includes('quarter'));
 assert(task('synthesis-test-b-10').answer.includes('including six with help'));
});
test('C105 argument forms separate clause and noun concession while punctuation stays manual',()=>{
 cases([['argument-forms-1','Although','Despite'],['argument-forms-2','Despite','Although'],['argument-forms-3','receiving','receive'],['argument-forms-4','that','to'],['argument-forms-5','and','or'],['argument-forms-6','necessarily','necessary'],['argument-forms-7','to','for'],['argument-forms-8','to','for'],
 ['argument-forms-9','Although the feedback was positive, the sample was limited.','Although the feedback was positive, but the sample was limited.'],
 ['argument-test-b-4','Although the log is incomplete, the figures are useful.','Despite the log is incomplete, the figures are useful.']]);
 open(['argument-forms-11','argument-production-7','argument-test-a-17','argument-test-b-17']);
});
test('C105 arguments allow principled revision, audience adaptation and fair objections',()=>{
 cases([['argument-meaning-1','recommendation','measurement'],['argument-meaning-2','no','yes'],['argument-meaning-3','no','yes'],['argument-meaning-4','no','yes'],['argument-test-b-5','finding','recommendation']]);
 open(['argument-meaning-5','argument-meaning-6','argument-meaning-9','argument-meaning-11','argument-meaning-12','argument-test-a-20']);
 assert(task('argument-test-a-7').answer.includes('qualifications'));
 assert(task('argument-test-b-7').answer.includes('staff time'));
 assert(task('argument-test-b-10').answer.includes('should be reconsidered'));
 assert(task('argument-production-9').answer.split(/(?<=[.!?])\s+/).length===6);
});
test('C105 argument reading and audio preserve permission, support and unmeasured motives',()=>{
 cases([['argument-reading-1','16','10'],['argument-reading-2','10','16'],['argument-reading-3','6','4'],['argument-reading-4','24','18'],['argument-reading-5','18','24'],['argument-reading-6','Elena','Owen'],
 ['argument-listening-1','Ellis','Elena'],['argument-listening-2','48','36'],['argument-listening-3','36','48'],['argument-listening-4','12','7'],['argument-listening-5','7','12'],['argument-listening-6','no','yes']]);
 assert(task('argument-reading-11').answer.includes('postponement'));
 assert(task('argument-listening-10').answer.includes('не установлены'));
});
test('C105 three references have complete rows, explicit limits, practice and primary writing sources',()=>{
 assert.deepEqual([sourcePatterns.length,synthesisPatterns.length,argumentPatterns.length],[26,26,28]);
 for(const r of [sourceReference,synthesisReference,argumentReference]){assert.equal(r.headers.length,4);assert(r.rows.every(row=>row.length===4&&row.every(Boolean)));assert.equal(r.practice.length,16);assert(r.intro.length);}
 assert.equal(synthesisSources.length,7);
 for(const [,url] of synthesisSources)assert(/^(owl\.purdue\.edu|writingcenter\.unc\.edu|writingcenter\.fas\.harvard\.edu|dictionary\.cambridge\.org)$/.test(new URL(url).hostname));
});
test('C105 new vocabulary keeps seven previous identities and includes contextual IPA and chunks',()=>{
 assert.equal(c105Vocabulary.length,84);const cards=vocabulary.filter(c=>c.module==='C105');assert.equal(cards.length,91);
 assert.equal(new Set(c105Vocabulary.map(c=>c.word)).size,84);
 for(let i=1;i<=6;i++)assert(cards.some(c=>c.id==='C105-v'+i));assert(cards.some(c=>c.id==='C105-x-in-light-of'));
 for(const c of c105Vocabulary)assert(c.context&&c.note&&c.kind&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['taken together','percentage point','draw on','straw man','jump to conclusions','not necessarily'])assert(cards.some(c=>c.word===word));
});
test('C105 scopes have substantial independent fictional materials and fresh goal-covering exams',()=>{
 assert.deepEqual(units.map(u=>u.id),['C105-sources','C105-synthesis','C105-argument']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[88,90,92]);assert.deepEqual(units.map(u=>u.examples.length),[30,30,30]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[20,20],[20,20],[22,22]]);const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'C104-negotiation');assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=6500);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?500:300));assert(b.passage.toLowerCase().includes('fictional'));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind),u.id+kind);for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),u.id+g.id);for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
 }
 assert.equal(new Set(passages).size,6);
});
test('C105 fourteen full models meet their own length, including two extended synthesis/argument essays',()=>{
 const paragraphs=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(paragraphs.length,14);assert.equal(paragraphs.filter(t=>t.prompt.includes('320–380')).length,2);assert.equal(paragraphs.filter(t=>t.prompt.includes('220–280')).length,2);
 for(const t of paragraphs){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
 assert(units.every(u=>u.banks.some(b=>b.tasks.some(t=>/220–280|320–380/.test(t.prompt)))));
});
test('C105 legacy questions, multiline responses, notes and SRS survive with zero inherited new work',()=>{
 const s=freshState();s.moduleProgress.C105={selfChecked:true,date:'2026-09-22'};s.drafts.C105='Synthetic original note.';
 s.cards['C105-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['C105-x-in-light-of']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/C105';s.navigation.sections.course='module/C105';
 s.navigation.pages['module/C105']={scroll:420,focus:'drill1',fields:{drill0:'to',drill1:'no\nOriginal answer',drill2:'on'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'C105').total,273);assert.equal(topicWorkProgress(copy,'C105').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='C105').drills.map(d=>d[0]),['attribute a result ___ a cause','Evidence of correlation proves causation? (yes/no)','Both reports agree ___ the need for more data.']);
 delete s.navigation;assert.equal(validateState(s).drafts.C105,s.drafts.C105);
});
test('C105 both test variants retain original responses and unfinished essays pending review',()=>{
 for(const u of units){const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>/100–140|220–280/.test(t.prompt));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished text.\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C105').completed,0);let first;
  for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T14:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'C105').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});
test('C105 273 progress steps are completed work rather than mastery or a timed schedule',()=>{
 const s=freshState();for(const u of units){const p=unitState(s,u.id);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
  p.examDraft.answers=Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-25T15:00:00Z');assert.equal(scoreUnitTest(u,p.attempts[0]).status,'awaiting-review');}
 const progress=topicWorkProgress(s,'C105');assert.equal(progress.total,273);assert.equal(progress.completed,273);assert.equal(progress.percent,100);
 assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C105'),progress);
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C105'),progress);
});

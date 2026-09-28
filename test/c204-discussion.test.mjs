import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats} from '../data/course.mjs';
import {questions,assessmentVersion} from '../data/assessment.mjs';
import {c204Vocabulary} from '../data/lexicon-c204.mjs';
import {discussionPatterns,discussionFlowReference,discussionSources} from '../data/discussion-flow.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard,buildPlan} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='C204'),u=subtopics.find(u=>u.id==='C204-discussion');
const all=[...u.banks,...u.tests].flatMap(b=>b.tasks),task=id=>all.find(t=>t.id===u.id+'-'+id);
function cases(rows){for(const [id,right,wrong] of rows){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}}
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,unit.id,'2026-09-28T12:00:00Z');return p;}
test('C204 discussion grammar keys independently preserve actor, mind patterns and embedded order',()=>{
 cases([['forms-1','separating','to separate'],['forms-2','add','added'],['forms-3','summarised','summarise'],['forms-4','finish','to finish'],['forms-5','to','at'],['forms-6','over','away'],['forms-7','Could you clarify what she meant?','Could you clarify what did she mean?'],['forms-8','Would you mind waiting?','Would you mind to wait?'],['forms-9','Let me finish this point.','Let me to finish this point.'],['forms-10','Could you explain what Val meant?','Could you explain what did Val mean?'],['review-1','finish','finishes']]);
 for(const n of [11,12,13,14])assert(isOpen(task('forms-'+n)));
 assert(u.explanation.some(e=>e.text.includes('свободные ответы оцениваются содержательно')));
});
test('C204 all sixteen closed exam keys are independently checked including positive agreements',()=>{
 cases([['test-a-1','reading','to read'],['test-a-2','speak','to speak'],['test-a-3','to','for'],['test-a-4','Could you explain why he left?','Could you explain why did he leave?'],['test-a-5','yes','no'],['test-a-6','no','yes'],['test-a-7','10','14'],['test-a-8','no','yes'],['test-b-1','clarifying','to clarify'],['test-b-2','check','to check'],['test-b-3','to','with'],['test-b-4','Could you tell us where it belongs?','Could you tell us where does it belong?'],['test-b-5','yes','no'],['test-b-6','no','yes'],['test-b-7','8','6'],['test-b-8','yes','no']]);
});
test('C204 queue repair avoids inferring motives or consent and rewards actual returned turns',()=>{
 cases([['turns-1','no','yes'],['turns-2','yes','no']]);
 assert(task('turns-4').answer.includes('afterwards'));assert(task('turns-6').answer.includes('later'));
 assert(task('turns-7').answer.includes('not rejecting'));assert(task('turns-10').answer.includes('after not'));
 assert(task('turns-14').explanation.includes('unknown'));
});
test('C204 majority, unanimity, mandate and acceptance remain distinct with explicit positive cases',()=>{
 cases([['decisions-1','yes','no'],['decisions-2','no','yes'],['decisions-3','yes','no'],['decisions-4','no','yes'],['review-2','yes','no']]);
 assert(task('review-3').answer.includes('другой порог'));assert(task('decisions-6').answer.includes('did not withdraw'));
 assert(task('decisions-7').answer.includes('неизвестно'));assert(task('decisions-10').answer.includes('No explicit'));
 assert(task('test-a-17').prompt.includes('простое большинство'));assert(task('test-b-18').answer.includes('agreed'));
});
test('C204 reading preserves majority decision, twelve tables, dissent and four distinct tasks',()=>{
 cases([['reading-1','4','3'],['reading-2','12','16'],['reading-3','6','8'],['reading-4','Val','Nia'],['reading-5','Friday','Thursday']]);
 const p=u.banks.find(b=>b.id==='reading').passage;
 for(const s of ['all four accept a decision rule','twelve tables','room itself is still booked','Elin, Omar and Nia vote in favour','Val votes against','not unanimous support','No one has volunteered to write or publish it'])assert(p.includes(s),s);
 for(const s of ['Tuesday','Wednesday','Thursday','Friday'])assert(task('reading-11').answer.includes(s));
 assert(task('reading-8').answer.includes('16→12'));assert(task('reading-9').answer.includes('поддерживает 6+6'));
});
test('C204 independent audio preserves speaker correction, six panels, 16:00 and reviewer not writer',()=>{
 cases([['listening-1','Rosa','Eve'],['listening-2','6','9'],['listening-3','16:00','18:00'],['listening-4','Eve','Chen'],['listening-5','Thursday','Friday'],['listening-6','no','yes']]);
 const p=u.banks.find(b=>b.id==='listening').passage;
 for(const s of ['two visitor entrances','not a recording of the four participants','not approval to print','nobody had yet accepted responsibility for writing','no confirmed date'])assert(p.includes(s),s);
 assert(task('listening-11').answer.includes('Рекомендацию'));assert(task('listening-12').answer.includes('Автор guide'));
});
test('C204 discussion has substantial distinct texts, mechanisms, examples and nine varied banks',()=>{
 assert.equal(u.explanation.length,13);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=8700);assert.equal(u.examples.length,34);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,12,14,14,12,14,12,12]);
 assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,9);
 const passages=u.banks.filter(b=>b.passage);assert.equal(passages.length,2);assert.notEqual(passages[0].passage,passages[1].passage);
 assert.equal(passages[0].passage.split(/\s+/).length,783);assert.equal(passages[1].passage.split(/\s+/).length,700);
 assert.deepEqual(u.prerequisites,['C204-mediation','C204-rebuttal','B205-discussion']);
});
test('C204 fresh variants cover all goals and meaningful written and spoken input',()=>{
 const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));assert.equal(u.tests.length,2);
 for(const e of u.tests){assert.equal(e.tasks.length,26);assert.equal(e.tasks.filter(t=>!isOpen(t)).length,8);assert.equal(e.tasks.filter(t=>t.kind==='speech').length,4);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const kind of ['short','sentence','text','speech'])assert(e.tasks.some(t=>t.kind===kind));for(const t of e.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
});
test('C204 six full writing models meet actual requested lengths including report and handover',()=>{
 const models=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(models.length,6);
 assert.equal(task('production-7').answer.split(/\s+/).length,487);assert.equal(task('production-8').answer.split(/\s+/).length,278);
 for(const t of models){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
});
test('C204 live practice needs new turns from two partners and does not grade pronunciation by text',()=>{
 const b=u.banks.find(b=>b.id==='interaction');assert.equal(b.tasks.filter(t=>t.kind==='speech').length,13);assert(b.tasks.every(isOpen));
 assert(task('interaction-1').explanation.includes('реальных партнёров'));assert(task('interaction-5').explanation.includes('выбирает партнёр'));
 assert(task('interaction-14').answer.includes('симуляция'));assert(task('test-a-25').answer.includes('unknown'));
 assert(u.explanation.some(e=>e.text.includes('минимум два реальных партнёра')));
});
test('C204 external multi-voice bank is manual, attributed and distinct from TTS or C2 certification',()=>{
 const b=u.banks.find(b=>b.id==='transfer');assert.equal(b.kind,'practice');assert.equal(b.navLabel,'Реальные голоса');assert.equal(b.tasks.length,12);assert(b.tasks.every(isOpen));assert(!b.passage);
 assert.deepEqual(b.resources,[discussionSources[2]]);assert(b.resources[0][1].startsWith('https://learnenglish.britishcouncil.org/'));
 for(const s of ['интернет','вручную','C1','не спонтанное','text-supported','© British Council','без копирования','TTS'])assert(b.instructions.includes(s),s);
 assert(task('transfer-2').explanation.includes('упомянутого'));assert(task('transfer-12').prompt.includes('ранее'));
});
test('C204 discussion reference has bounded actionable rows with primary attribution',()=>{
 assert.equal(discussionPatterns.length,28);assert(discussionPatterns.every(r=>r.length===4&&r.every(Boolean)));
 assert.equal(discussionFlowReference.practice.length,16);assert.equal(discussionFlowReference.id,'discussion-flow');
 assert(discussionFlowReference.intro.some(s=>s.includes('не полный регламент')));
 for(const [,url] of discussionSources)assert(['www.coe.int','dictionary.cambridge.org','learnenglish.britishcouncil.org'].includes(new URL(url).hostname));
});
test('C204 adds 32 cards without modifying its published 68 or seven legacy IDs',()=>{
 assert.equal(c204Vocabulary.length,100);assert.equal(topic.vocabulary.length,107);assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,107);
 assert.equal(createHash('sha256').update(JSON.stringify(c204Vocabulary.slice(0,68))).digest('hex'),'679fa0626d0ab1ce3a4222707bf3eeda5b6166110d5be812265167e69abf0361');
 const added=c204Vocabulary.slice(68);assert.equal(added[0].id,'C204-x-69');assert.equal(added.at(-1).id,'C204-x-100');
 for(const c of added)assert(c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 assert.equal(added.find(c=>c.word==='remit').ipa,'/ˈriːmɪt/');assert.equal(added.find(c=>c.word==='overlap').ipa,'/ˈəʊvəlæp/');
 for(const word of ['hand over','cut in','in light of','running order'])assert(added.some(c=>c.word===word));
});
test('C204 previous two units preserve work, reviews, navigation and SRS at 202/321 without new learning',()=>{
 const s=freshState();for(const old of topic.subtopics.slice(0,2)){
  const p=complete(s,old),t=old.tests[0].tasks.find(t=>t.kind==='text');p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-28T12:10:00Z',evidence:'Synthetic evidence for migration only.',heardAudio:false};
  startUnitTest(s,old.id);p.examDraft.answers[old.tests[1].tasks.find(t=>t.kind==='text').id]='Synthetic unfinished text\nContinue here.';
  const route='unit/'+old.id+'/test',prefix='review:'+p.attempts[0].id+':'+old.tests[0].tasks.filter(isOpen)[1].id+':';
  s.navigation.pages[route]={scroll:610,focus:'',fields:{[prefix+'reviewer']:'Synthetic draft reviewer',[prefix+'score']:'2',[prefix+'evidence']:'Unsubmitted review\nSecond line'},details:[]};
 }
 s.cards['C204-x-68']=reviewCard(null,'good',Date.UTC(2026,8,28));s.cards['C204-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.moduleProgress.C204={selfChecked:true,date:'2026-09-22'};
 s.bookmark={route:'unit/C204-rebuttal/test',scroll:610,focus:''};s.navigation.current=s.bookmark.route;s.navigation.sections.course=s.bookmark.route;
 s.navigation.pages['module/C204']={scroll:390,focus:'drill1',fields:{drill0:'about',drill1:'from\nOriginal synthetic answer',drill2:'yes'},details:[true]};
 const before=structuredClone(s),restored=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(restored,before);assert(!restored.learning[u.id]);assert.equal(restored.schemaVersion,2);
 const p=topicWorkProgress(restored,'C204');assert.equal(p.completed,202);assert.equal(p.total,321);assert.equal(p.percent,62);assert.equal(topic.contentStatus,'expanded');assert.equal(topic.remainingScope.length,0);
 unitState(restored,u.id).answers[task('forms-1').id]='separating';assert.equal(topicWorkProgress(restored,'C204').completed,203);
 for(const old of topic.subtopics.slice(0,2))assert.deepEqual(restored.learning[old.id],before.learning[old.id]);assert.deepEqual(restored.cards,before.cards);assert.deepEqual(restored.navigation,before.navigation);
});
test('C204 multiline drafts and immutable A/B keep eighteen answers pending; full work is not mastery',()=>{
 const s=freshState(),p=unitState(s,u.id);p.examDraft.answers[task('test-a-17').id]='Synthetic draft\nResume later.';
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C204').completed,0);let first;
 for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-28T13:00:00Z');const r=scoreUnitTest(u,p.attempts.at(-1));assert.equal(r.correct,8);assert.equal(r.total,8);assert.equal(r.pending,18);assert.equal(r.status,'awaiting-review');assert.equal(topicWorkProgress(s,'C204').completed,1);if(e.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
 for(const unit of topic.subtopics.slice(0,2))complete(s,unit);for(const t of u.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;
 const work=topicWorkProgress(s,'C204');assert.equal(work.completed,321);assert.equal(work.percent,100);assert.equal(topic.contentStatus,'expanded');
 s.placement={assessmentVersion,date:'2026-09-28T12:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.answer]))};
 assert(buildPlan(s).items.some(m=>m.id==='C204'));for(const unit of topic.subtopics)assert.equal(scoreUnitTest(unit,s.learning[unit.id].attempts[0]).status,'awaiting-review');
 s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C204'),work);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 assert.deepEqual([courseStats.expanded,courseStats.partial,courseStats.legacy],[33,1,6]);
});

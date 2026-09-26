import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics} from '../data/course.mjs';
import {c204Vocabulary} from '../data/lexicon-c204.mjs';
import {rebuttalReference,rebuttalPatterns,rebuttalSources} from '../data/rebuttal-reference.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='C204'),u=subtopics.find(u=>u.id==='C204-rebuttal');
const all=[...u.banks,...u.tests].flatMap(b=>b.tasks),task=id=>all.find(t=>t.id===u.id+'-'+id);
function cases(rows){for(const [id,right,wrong] of rows){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepts '+right);assert(!checkAnswer(wrong,t.answer),id+' rejects '+wrong);}}
const open=ids=>ids.forEach(id=>assert(isOpen(task(id)),id));
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,unit.id,'2026-09-26T12:00:00Z');return p;}

test('C204 rebuttal grammar independently checks clause/noun concessions, base forms and final though',()=>{
 cases([['forms-1','Although','Despite'],['forms-2','Despite','Although'],['forms-3','of','from'],['forms-4','follow','follows'],['forms-5','justify','justifies'],['forms-6','out','up'],['forms-7','Despite the low fee, other costs remain.','Despite of the low fee, other costs remain.'],['forms-8','Although the count is correct, the conclusion is broad.','Although the count is correct, but the conclusion is broad.'],['forms-9','It does not follow that everyone agreed.','It does follow that everyone agreed.'],['forms-10','The estimate is useful, though.','The estimate is useful, although.'],['review-1','of','to']]);
 open(['forms-11','forms-12','forms-13','forms-14','test-a-12','test-b-12']);assert(task('forms-13').explanation.includes('нормализатор'));
});
test('C204 all twenty closed exam items have independent keys including positive counterexamples',()=>{
 cases([['test-a-1','Although','Despite'],['test-a-2','Despite','Although'],['test-a-3','follow','follows'],['test-a-4','out','on'],['test-a-5','Despite the clear map, the opening hours were missing.','Despite of the clear map, the opening hours were missing.'],['test-a-6','yes','no'],['test-a-7','yes','no'],['test-a-8','no','yes'],['test-a-9','9','12'],['test-a-10','no','yes'],['test-b-1','of','for'],['test-b-2','Although','Despite'],['test-b-3','justify','justifies'],['test-b-4','though','although'],['test-b-5','Although the display is popular, its cost is unclear.','Although the display is popular, but its cost is unclear.'],['test-b-6','yes','no'],['test-b-7','yes','no'],['test-b-8','no','yes'],['test-b-9','17','13'],['test-b-10','no','yes']]);
});
test('C204 counterexamples preserve quantified scope and unsupported claims do not prove their negation',()=>{
 cases([['analysis-1','yes','no'],['analysis-2','yes','no'],['analysis-3','6','4'],['analysis-4','no','yes'],['review-2','no','yes']]);
 assert(task('analysis-8').answer.includes('другая область'));assert(task('analysis-9').answer.includes('необходимой'));
 assert(task('analysis-13').answer.includes('не доказывает'));assert(task('review-4').answer.includes('другой режим не прямой контрпример'));
 const text=u.explanation.map(e=>e.text).join(' ');for(const phrase of ['не означает definitely more expensive','отсутствие свидетельств никогда ничего не значит','три из четырёх всё ещё большинство','не доказать, что именно она'])assert(text.includes(phrase),phrase);
});
test('C204 serious objections target the actual inference, opportunity cost or principle, not a caricature',()=>{
 open(['analysis-5','analysis-10','analysis-11','analysis-12','responses-1','responses-2','responses-8','responses-12','test-a-13','test-b-13']);
 assert(task('responses-1').answer.includes('ordinary')||task('responses-1').answer.includes('regular'));
 assert(task('responses-8').answer.includes('storing names'));assert(task('responses-12').answer.includes('Which cost'));
 assert(task('test-a-22').answer.includes('независимо'));assert(task('test-b-24').answer.includes('один вывод'));
});
test('C204 reading keys preserve attempts, people, assistance, survey limits and percentage points',()=>{
 cases([['reading-1','24','16'],['reading-2','16','24'],['reading-3','18','12'],['reading-4','12','18'],['reading-5','8','10']]);
 const p=u.banks.find(b=>b.kind==='reading').passage;
 for(const text of ['twenty-four task attempts made by sixteen members','Six of those completed attempts included a prompt','fourteen completions in twenty attempts','does not have a record linking','licence fee is zero','assigned a trial organiser'])assert(p.includes(text),text);
 assert(task('reading-7').answer.includes('75% и 70%'));assert(task('reading-7').answer.includes('5 процентных пунктов'));
 assert(task('reading-8').answer.includes('нет связи'));assert(task('reading-11').answer.includes('не измерена'));
});
test('C204 audio has independent factual anchors and preserves assumed cost, correction and dates',()=>{
 cases([['listening-1','4','3'],['listening-2','3','4'],['listening-3','18','14'],['listening-4','14','18'],['listening-5','Tuesday','Friday'],['listening-6','Friday','Tuesday']]);
 const p=u.banks.find(b=>b.kind==='listening').passage;
 for(const text of ['address had not been included','temporary assumption','did not agree to organise another screening','three finished at the planned time','the cause of that delay'])assert(p.includes(text),text);
 assert(task('listening-11').answer.includes('Luca'));assert(task('listening-11').answer.includes('Sara'));
 assert(task('listening-12').answer.includes('временная предпосылка'));assert(task('listening-14').answer.includes('не запись Luca'));
});
test('C204 rebuttal is substantial, varied and connected to previous skills with distinct texts',()=>{
 assert.deepEqual(u.prerequisites,['C204-mediation','C105-argument','C201-scope']);
 assert.equal(u.explanation.length,12);assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=8000);assert.equal(u.examples.length,32);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[14,14,12,14,14,12,12,12]);
 assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,8);
 const passages=u.banks.filter(b=>b.passage);assert.equal(passages.length,2);assert.notEqual(passages[0].passage,passages[1].passage);
 for(const b of passages){assert(b.passage.includes('fictional'));assert(b.passage.split(/\s+/).length>=(b.kind==='reading'?700:650));}
});
test('C204 rebuttal tests cover every goal with fresh prompts and substantive written/spoken input',()=>{
 const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));assert.equal(u.tests.length,2);
 for(const e of u.tests){assert.equal(e.tasks.length,26);for(const g of u.goals)assert(e.tasks.some(t=>t.goal===g.id));for(const kind of ['short','sentence','text','speech'])assert(e.tasks.some(t=>t.kind===kind));for(const t of e.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}}
});
test('C204 rebuttal has six full writing models including a 457-word sustained response',()=>{
 const models=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(models.length,6);
 assert.equal(models.filter(t=>t.prompt.includes('450–520')).length,1);assert.equal(task('production-7').answer.split(/\s+/).length,457);
 for(const t of models){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/),n=t.answer.split(/\s+/).length;assert(n>=+min&&n<=+max,t.id+': '+n);assert(isOpen(t));}
});
test('C204 live rebuttal requires actual new objections and audio, not ASR matching',()=>{
 const b=u.banks.find(b=>b.id==='interaction');assert.equal(b.tasks.filter(t=>t.kind==='speech').length,11);assert(b.tasks.every(isOpen));
 assert(task('interaction-3').explanation.includes('не задаётся за партнёра'));assert(task('interaction-7').explanation.includes('выбирает партнёр'));
 assert(task('interaction-12').answer.includes('unknown'));assert(task('test-a-25').answer.includes('oral fluency'));
 for(const e of u.tests)assert.equal(e.tasks.filter(t=>t.kind==='speech').length,3);open(['review-9','test-a-25','test-b-25']);
});
test('C204 rebuttal reference has scoped models, practice and primary attribution',()=>{
 assert.equal(rebuttalPatterns.length,28);assert(rebuttalPatterns.every(r=>r.length===4&&r.every(Boolean)));
 assert.equal(rebuttalReference.practice.length,16);assert.equal(rebuttalReference.id,'argument-rebuttal');assert(rebuttalReference.intro.some(s=>s.includes('не полный курс')));
 assert(rebuttalPatterns.find(r=>r[0]==='lexical precision')[3].includes('вариативно'));
 for(const [,url] of rebuttalSources)assert(['writingcenter.fas.harvard.edu','owl.purdue.edu','dictionary.cambridge.org','www.oxfordlearnersdictionaries.com'].includes(new URL(url).hostname));
});
test('C204 appended lexical cards keep the published first 36 byte-equivalent as data',()=>{
 assert.equal(c204Vocabulary.length,68);
 assert.equal(createHash('sha256').update(JSON.stringify(c204Vocabulary.slice(0,36))).digest('hex'),'f0d847f889493d725d7b55c854baa1359b90df3f946ca6125c0f7e2f28fefdec');
 const added=c204Vocabulary.slice(36);assert.equal(added.length,32);assert.equal(added[0].id,'C204-x-37');assert.equal(added.at(-1).id,'C204-x-68');
 for(const c of added)assert(c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 assert.equal(new Set(topic.vocabulary.map(c=>c.word)).size,75);
 assert.equal(added.find(c=>c.word==='counterargument').ipa,'/ˈkaʊntərɑːɡjəmənt/');
 assert.equal(added.find(c=>c.word==='counterexample').ipa,'/ˈkaʊntərɪɡzɑːmpl/');
 assert.equal(added.find(c=>c.word==='for the sake of argument').ipa,'/fə ðə ˌseɪk əv ˈɑːɡjəmənt/');
 for(const word of ['counterargument','warrant','beg the question','hold up','for the sake of argument','not necessarily'])assert(added.some(c=>c.word===word));
});
test('C204 imports the previous published unit including review, draft, navigation and SRS with 97/202 work',()=>{
 const s=freshState(),old=topic.subtopics[0],p=complete(s,old),t=old.tests[0].tasks.find(t=>t.kind==='text');
 p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-26T12:10:00Z',evidence:'Synthetic evidence for migration only.',heardAudio:false};
 startUnitTest(s,old.id);p.examDraft.answers[old.tests[1].tasks.find(t=>t.kind==='text').id]='Synthetic unfinished draft\nDo not replace this text.';
 s.cards['C204-x-36']=reviewCard(null,'good',Date.UTC(2026,8,26));s.cards['C204-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.bookmark={route:'unit/C204-mediation/test',scroll:630,focus:''};s.navigation.current=s.bookmark.route;s.navigation.sections.course=s.bookmark.route;s.navigation.pages[s.bookmark.route]={scroll:630,focus:'',fields:{},details:[]};
 const pendingTask=old.tests[0].tasks.filter(isOpen)[1],prefix='review:'+p.attempts[0].id+':'+pendingTask.id+':';
 s.navigation.pages[s.bookmark.route].fields={[prefix+'reviewer']:'Synthetic reviewer draft',[prefix+'score']:'3',[prefix+'evidence']:'Unsubmitted synthetic feedback.\nKeep the second line.'};
 s.navigation.pages['module/C204']={scroll:430,focus:'drill1',fields:{drill0:'about',drill1:'from\nOriginal answer',drill2:'yes'},details:[true]};
 s.moduleProgress.C204={selfChecked:true,date:'2026-09-22'};const before=structuredClone(s),restored=validateState(JSON.parse(JSON.stringify(s)));
 assert.deepEqual(restored,before);assert(!restored.learning[u.id]);assert.equal(restored.schemaVersion,2);
 const work=topicWorkProgress(restored,'C204');assert.equal(work.completed,97);assert.equal(work.total,202);assert.equal(work.percent,48);
 unitState(restored,u.id).answers[task('forms-1').id]='Although';assert.equal(topicWorkProgress(restored,'C204').completed,98);
 assert.deepEqual(restored.learning[old.id],before.learning[old.id]);assert.deepEqual(restored.cards,before.cards);assert.deepEqual(restored.navigation,before.navigation);
});
test('C204 rebuttal multiline draft and both attempts survive with ten closed and sixteen pending answers',()=>{
 const s=freshState(),p=unitState(s,u.id);p.examDraft.answers[task('test-a-17').id]='Synthetic paragraph\nResume later.';
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C204').completed,0);let first;
 for(const e of u.tests){p.examDraft.answers=Object.fromEntries(e.tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-26T13:00:00Z');const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,10);assert.equal(result.total,10);assert.equal(result.pending,16);assert.equal(result.status,'awaiting-review');assert.equal(topicWorkProgress(s,'C204').completed,1);if(e.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);}
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
});
test('C204 all 202 steps fill only the published part and do not establish mastery or remove missing discussion',()=>{
 const s=freshState();for(const unit of topic.subtopics)complete(s,unit);const p=topicWorkProgress(s,'C204');assert.equal(p.total,202);assert.equal(p.completed,202);assert.equal(p.percent,100);
 assert.equal(topic.contentStatus,'partial');assert.equal(topic.remainingScope.length,1);assert(topic.remainingScope[0].includes('Спонтанная'));
 for(const unit of topic.subtopics)assert.equal(scoreUnitTest(unit,s.learning[unit.id].attempts[0]).status,'awaiting-review');
 s.profile.minutes=15;s.profile.days=3;assert.deepEqual(topicWorkProgress(s,'C204'),p);assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C204'),p);
});

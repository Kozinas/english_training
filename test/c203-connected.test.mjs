import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {modules,subtopics,courseStats,topicDevelopment} from '../data/course.mjs';
import {connectedReference,connectedPatterns,connectedSources} from '../data/connected-speech.mjs';
import {c203Vocabulary} from '../data/lexicon-c203.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const topic=modules.find(m=>m.id==='C203'),u=subtopics.find(u=>u.id==='C203-connected');
const all=[...u.banks,...u.tests].flatMap(b=>b.tasks),task=s=>all.find(t=>t.id===u.id+'-'+s),words=s=>s.split(/\s+/).filter(Boolean).length;
function cases(rows){for(const [id,right,wrong] of rows){const t=task(id);assert(t,id);assert(checkAnswer(right,t.answer),id+' correct');assert(!checkAnswer(wrong,t.answer),id+' wrong');}}
function complete(s,unit){const p=unitState(s,unit.id);for(const t of unit.banks.flatMap(b=>b.tasks))p.answers[t.id]=t.answer;p.examDraft.answers=Object.fromEntries(unit.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,unit.id,'2026-09-26T12:00:00Z');return p;}

test('C203 connected grammar independently checks auxiliaries, have and embedded questions',()=>{
 cases([['forms-1','had','would'],['forms-2','would','had'],['forms-3','is','has'],['forms-4','has','is'],['forms-5','have','of'],['forms-6','We should have checked the entrance.','We should of checked the entrance.'],['forms-7','Could you tell me where the desk is?','Could you tell me where is the desk?'],['forms-8','Could you clarify whether access is available?','Could you clarify whether is access available?']]);
 cases([['test-a-1','had','would'],['test-a-2','would','had'],['test-a-3','has','is'],['test-a-4','have','of'],['test-b-1','had','would'],['test-b-2','would','had'],['test-b-3','is','has'],['test-b-4','have','of']]);
 for(const id of ['forms-9','forms-10','forms-11','test-a-13','test-b-13'])assert(isOpen(task(id)));
 assert(task('forms-9').answer.includes('base и V3'));assert(task('test-a-13').answer.includes('/red/'));assert(task('test-b-13').answer.includes('He is gone'));
});
test('C203 connected recognition distinguishes possible reduction, assimilation and elision',()=>{
 cases([['perception-1','/kən/','/kiːn/'],['perception-2','/kæn/','/kən/'],['perception-3','assimilation','elision'],['perception-4','elision','assimilation']]);
 for(const id of ['perception-5','perception-6','perception-7','perception-10','perception-11','perception-12','test-a-12'])assert(isOpen(task(id)));
 assert(task('perception-6').answer.includes('без отдельного слышимого взрыва'));
 assert(u.explanation.some(e=>e.text.includes('не команда превращать все безударные гласные')));
 assert(u.explanation.some(e=>e.text.includes('не обязана возникать пауза')));
});
test('C203 connected reading preserves unconfirmed direction, partial confirmation and kinds of evidence',()=>{
 cases([['reading-1','Ruth','Nora'],['reading-2','east','west'],['reading-3','no','yes'],['reading-4','room','time']]);
 const r=u.banks.find(b=>b.id==='reading').passage;
 assert(r.includes('neither volunteer has established the word'));assert(r.includes('visitor corrects the room'));
 assert(task('reading-9').answer.includes('leave the time unresolved'));
 assert(task('reading-8').answer.includes('все ошибки только техническими'));
});
test('C203 connected listening uses its own corrected time, reference, permission and route',()=>{
 cases([['listening-1','Nora','Ruth'],['listening-2','19:15','19:50'],['listening-3','D14','B14'],['listening-4','west','east'],['listening-5','Tuesday','Thursday'],['listening-6','Lee','Nora'],['listening-7','no','yes']]);
 const a=u.banks.find(b=>b.id==='listening').passage;assert(a.includes('one five for the minutes'));assert(a.includes('D as in door'));assert(a.includes('approval had not yet been given'));
 assert(task('listening-9').answer.includes('перемещение не подтверждено'));assert(task('listening-14').answer.includes('ещё не согласован'));
 assert(task('listening-13').answer.includes('public opening time and attendance'));
});
test('C203 connected separates form, meaning, signal faults and inference instead of guessing',()=>{
 assert(task('perception-8').answer.includes('Смысловой'));
 assert(task('perception-9').answer.includes('распознаватель может достроить гипотезу'));
 assert(task('test-a-16').answer.includes('место остаётся непроверенным'));
 assert(task('test-b-16').answer.includes('вместимость как unknown'));
 assert(task('listening-10').explanation.includes('весь контекст but chose'));
 assert(u.explanation.some(e=>e.text.includes('не оценивает качество гласных')));
});
test('C203 connected real sources are manual, attributed and separate scripted from unscripted',()=>{
 const b=u.banks.find(b=>b.id==='transfer');assert.equal(b.kind,'practice');assert.equal(b.passage,'');assert.equal(b.navLabel,'Реальные голоса');
 assert.deepEqual(b.resources.map(r=>new URL(r[1]).pathname),['/england-1','/scotland-1','/india-1']);
 for(const text of ['Нужен интернет','Чтение не засчитывает аудирование','IDEA','Australia 1 и Kansas 1','TTS не заменяет'])assert(b.instructions.includes(text));
 assert(task('transfer-9').answer.includes('если тексты различаются'));assert(task('transfer-10').explanation.includes('не автоматически'));
 assert(connectedSources.some(([,url])=>url.endsWith('/copyright-credit-information')));
 assert(!b.resources.some(([,url])=>url.endsWith('.mp3')),'link to the credited source, not redistributed audio');
});
test('C203 connected unseen test recordings differ from practice and each other',()=>{
 assert(task('test-a-20').prompt.includes('Australia 1'));assert(task('test-b-20').prompt.includes('Kansas 1'));
 assert.equal(task('test-a-20').kind,'speech');assert.equal(task('test-b-20').kind,'speech');
 assert(task('test-a-20').answer.includes('известный отрезок заменить'));assert(task('test-b-20').answer.includes('если запись известна'));
 assert(task('test-b-19').answer.includes('непроверенной'));
 assert(task('test-b-24').answer.includes('нового отложенного применения'));
});
test('C203 connected has substantial distinct texts, 30 examples and 104 varied tasks',()=>{
 assert.deepEqual(u.prerequisites,['C203-discourse','C104-intent']);assert.equal(u.explanation.length,12);assert(u.explanation.map(e=>e.text).join('').length>=6800);
 assert.equal(u.examples.length,30);assert.equal(u.examples.filter(e=>e.why.includes('Сложный пример')).length,2);
 assert.deepEqual(u.banks.map(b=>b.tasks.length),[12,14,12,12,14,12,16,12]);assert.equal(u.banks.flatMap(b=>b.tasks).length,104);
 const r=u.banks.find(b=>b.id==='reading').passage,a=u.banks.find(b=>b.id==='listening').passage;assert(words(r)>=680);assert(words(a)>=690);assert.notEqual(r,a);
 for(const exam of u.tests){assert.equal(exam.tasks.length,24);assert.equal(exam.tasks.filter(t=>!isOpen(t)).length,9);for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id));for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));for(const t of exam.tasks)assert(!u.banks.some(b=>b.tasks.some(p=>p.prompt===t.prompt)));}
});
test('C203 connected six complete writing models satisfy their stated ranges',()=>{
 const models=all.filter(t=>/\d+–\d+ слов/.test(t.prompt));assert.equal(models.length,6);assert.equal(models.filter(t=>t.prompt.includes('220–280')).length,1);
 for(const t of models){const [,min,max]=t.prompt.match(/(\d+)–(\d+) слов/);assert(words(t.answer)>=+min&&words(t.answer)<=+max,t.id);assert(isOpen(t));}
});
test('C203 connected reference and appended vocabulary preserve scope and all previous card content',()=>{
 assert.equal(connectedPatterns.length,28);assert.equal(connectedReference.practice.length,16);assert(connectedPatterns.every(r=>r.length===4&&r.every(Boolean)));
 assert(connectedReference.intro.some(s=>s.includes('не атлас всех акцентов')));assert(connectedReference.intro.some(s=>s.includes('только ссылки')));
 assert.equal(c203Vocabulary.length,100);assert.equal(createHash('sha256').update(JSON.stringify(c203Vocabulary.slice(0,68))).digest('hex'),'153f5d5ea5e3463e422061fcb9f6c80c24e0b944feef6416831dc581c8275808');
 assert.equal(c203Vocabulary[68].id,'C203-x-69');assert.equal(c203Vocabulary.at(-1).id,'C203-x-100');
 for(const word of ['mishear','misheard','cut out','fill in the gaps'])assert(c203Vocabulary.slice(68).some(v=>v.word===word));
});
test('C203 completion of declared content is metadata, never a learner mastery flag',()=>{
 assert.equal(topic.contentStatus,'expanded');assert.equal(topicDevelopment.C203,undefined);assert.deepEqual(topic.remainingScope,[]);assert.equal(topic.subtopics.length,3);
 assert.equal(courseStats.expanded,35);assert.equal(courseStats.partial,0);assert.equal(courseStats.legacy,5);
 const s=freshState();s.moduleProgress.C203={selfChecked:true,date:'2026-09-26'};assert.equal(topicWorkProgress(s,'C203').completed,0);assert.equal(topicWorkProgress(s,'C203').total,309);
});
test('C203 previous two units retain all learning, reviews, draft, navigation and SRS after promotion',()=>{
 const s=freshState();for(const old of topic.subtopics.slice(0,2)){
  const p=complete(s,old),t=old.tests[0].tasks.find(t=>t.kind==='text');p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic teacher',date:'2026-09-26T12:10:00Z',evidence:'Synthetic content review.',heardAudio:false};startUnitTest(s,old.id);p.examDraft.answers[old.tests[1].tasks.find(t=>t.kind==='text').id]='Synthetic draft\nKeep this second line.';
 }
 s.cards['C203-x-68']=reviewCard(null,'good',Date.UTC(2026,8,26));s.moduleProgress.C203={selfChecked:true,date:'2026-09-26'};
 s.bookmark={route:'unit/C203-discourse/test',scroll:620,focus:''};s.navigation.current=s.bookmark.route;s.navigation.sections.course=s.bookmark.route;s.navigation.pages[s.bookmark.route]={scroll:620,focus:'',fields:{},details:[]};
 s.navigation.pages['module/C203']={scroll:410,focus:'drill1',fields:{drill0:'no',drill1:'отчасти\nOriginal answer',drill2:'that'},details:[true]};
 const before=structuredClone(s),restored=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(restored,before);assert(!restored.learning[u.id]);
 const p=topicWorkProgress(restored,'C203');assert.equal(p.completed,204);assert.equal(p.total,309);assert.equal(p.percent,66);
 unitState(restored,u.id).answers[task('forms-1').id]='had';assert.equal(topicWorkProgress(restored,'C203').completed,205);
 for(const old of topic.subtopics.slice(0,2))assert.deepEqual(restored.learning[old.id],before.learning[old.id]);assert.deepEqual(restored.cards,before.cards);assert.deepEqual(restored.navigation,before.navigation);
});
test('C203 connected incomplete draft and both fresh attempts keep open work awaiting review',()=>{
 const s=freshState(),p=unitState(s,u.id);p.examDraft.answers[task('test-a-17').id]='Synthetic first paragraph\nContinue later.';assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'C203').completed,0);
 let original;
 for(const exam of u.tests){p.examDraft.answers=Object.fromEntries(exam.tasks.map(t=>[t.id,t.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-26T13:00:00Z');const score=scoreUnitTest(u,p.attempts.at(-1));assert.equal(score.correct,9);assert.equal(score.pending,15);assert.equal(score.status,'awaiting-review');assert.equal(topicWorkProgress(s,'C203').completed,1);if(exam.id==='a'){original=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],original);}
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
});
test('C203 all 309 steps mean completed work, with quality and audio still awaiting review',()=>{
 const s=freshState();for(const unit of topic.subtopics)complete(s,unit);const p=topicWorkProgress(s,'C203');assert.equal(p.completed,309);assert.equal(p.percent,100);
 for(const unit of topic.subtopics)assert.equal(scoreUnitTest(unit,s.learning[unit.id].attempts[0]).status,'awaiting-review');s.profile.minutes=10;s.profile.days=2;assert.deepEqual(topicWorkProgress(s,'C203'),p);assert.deepEqual(topicWorkProgress(validateState(JSON.parse(JSON.stringify(s))),'C203'),p);
});

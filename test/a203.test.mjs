import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {obligationPersons,rulePatterns,rulesReference} from '../data/rules-conditions.mjs';
import {a203Vocabulary} from '../data/lexicon-a203.mjs';
import {freshState,validateState,checkAnswer,isOpen,unitState,submitUnitTest,startUnitTest,scoreUnitTest,topicWorkProgress,reviewCard} from '../web/engine.mjs';
const units=subtopics.filter(u=>u.topic==='A203');
const all=units.flatMap(u=>[...u.banks,...u.tests].flatMap(b=>b.tasks));
const task=id=>all.find(t=>t.id==='A203-'+id);
const cases=list=>{for(const [id,right,wrong] of list){const t=task(id);assert(t,id);assert(!isOpen(t),id);assert(checkAnswer(right,t.answer),id+' accepted');assert(!checkAnswer(wrong,t.answer),id+' contrast');}};

test('A203 has three connected substantial units and fresh goal-covered variants',()=>{
 assert.deepEqual(units.map(u=>u.id),['A203-obligation','A203-advice','A203-conditions']);
 assert.deepEqual(units.map(u=>u.banks.reduce((n,b)=>n+b.tasks.length,0)),[84,80,98]);
 assert.deepEqual(units.map(u=>u.examples.length),[24,24,26]);
 assert.deepEqual(units.map(u=>u.tests.map(t=>t.tasks.length)),[[22,22],[22,22],[24,24]]);
 const passages=[];
 for(const [i,u] of units.entries()){
  assert.equal(u.prerequisites[0],i?units[i-1].id:'A202-degree');
  assert(u.explanation.reduce((n,e)=>n+e.text.length,0)>=4500);
  assert.equal(new Set(u.banks.map(b=>b.navLabel??b.title)).size,u.banks.length);
  assert(u.banks.every(b=>b.tasks.length>=10));
  for(const kind of ['reading','listening']){const b=u.banks.find(b=>b.kind===kind);assert(b.passage.split(/\s+/).length>=(kind==='reading'?260:140));passages.push(b.passage);}
  const prompts=new Set(u.banks.flatMap(b=>b.tasks.map(t=>t.prompt)));
  for(const exam of u.tests){
   for(const kind of ['short','sentence','text','speech'])assert(exam.tasks.some(t=>t.kind===kind));
   for(const g of u.goals)assert(exam.tasks.some(t=>t.goal===g.id),g.id);
   for(const t of exam.tasks){assert(!prompts.has(t.prompt),t.id);prompts.add(t.prompt);}
  }
 }
 assert.equal(new Set(passages).size,6);
});

test('A203 extended writing models meet their own stated word range',()=>{
 const paragraphs=all.filter(t=>t.prompt.includes('100–140'));
 assert.equal(paragraphs.length,15);
 for(const t of paragraphs){const words=t.answer.split(/\s+/).length;assert(words>=100&&words<=140,t.id+': '+words);assert(isOpen(t));}
 for(const u of units){assert.equal(u.banks.flatMap(b=>b.tasks).filter(t=>t.prompt.includes('100–140')).length,3);}
});

test('A203 obligation forms preserve modal syntax and do-support across time',()=>{
 cases([
  ['obligation-forms-1','has','have'],['obligation-forms-2','must','musts'],['obligation-forms-3','wait','to wait'],
  ['obligation-forms-4','does','do'],['obligation-forms-5','have','has'],['obligation-forms-6','had','must'],
  ['obligation-forms-7','have','had'],['obligation-forms-8','have','must'],['obligation-forms-9','bring','to bring'],
  ['obligation-forms-10','to','for'],['obligation-forms-12','Must we pay now?','Do we must pay now?'],
  ['obligation-forms-16',"We didn't have to pay.","We didn't had to pay."],
  ['obligation-test-a-11','Does the cleaner have to come early?','Does the cleaner has to come early?']
 ]);
 assert(isOpen(task('obligation-test-b-16')),'actual past action without evidence is reviewed semantically');
});

test('A203 prohibition and absence of obligation are not interchangeable',()=>{
 cases([
  ['obligation-meaning-1',"mustn't","don't have to"],['obligation-meaning-2',"don't have to","mustn't"],
  ['obligation-meaning-3','permission','obligation'],['obligation-meaning-4','obligation','permission'],
  ['obligation-meaning-5',"don't have to","mustn't"],['obligation-meaning-6','rule','completion report'],
  ['obligation-meaning-7','no','yes'],['obligation-meaning-8','yes','no'],
  ['obligation-test-a-6',"don't have to","mustn't"],['obligation-test-a-7',"mustn't","don't have to"],
  ['obligation-test-a-9','unknown','known'],['obligation-test-b-6',"mustn't","don't have to"],
  ['obligation-test-b-7',"don't have to","mustn't"],['obligation-test-b-9','unknown','known']
 ]);
 for(const id of ['obligation-meaning-10','obligation-meaning-11','obligation-meaning-14','obligation-test-a-20','obligation-test-b-20'])assert(isOpen(task(id)),id);
});

test('A203 advice forms retain should, ought to, had better and noncount advice',()=>{
 cases([
  ['advice-forms-1','should','shoulds'],['advice-forms-2','leave','to leave'],['advice-forms-3','should','do should'],
  ['advice-forms-4','to','for'],['advice-forms-5','keep','to keep'],['advice-forms-6','not be',"don't be"],
  ['advice-forms-7','trying','try'],['advice-forms-8','work','working'],['advice-forms-9','not',"don't"],
  ['advice-forms-10','advice','advices'],['advice-forms-11','What should I bring?','What do I should bring?'],
  ['advice-test-a-14','That is helpful advice.','That is a helpful advice.'],
  ['advice-test-a-14','That is a helpful piece of advice.','That is helpful advices.'],
  ['advice-test-b-14',"You'd better not lose the card.","You'd better don't lose the card."]
 ]);
});

test('A203 advice, expectation, option and agreed action remain distinct',()=>{
 cases([
  ['advice-meaning-1','expectation','advice'],['advice-meaning-2','option','confirmed arrangement'],
  ['advice-meaning-3','present/future','past'],['advice-meaning-4','no','yes'],['advice-meaning-5','had','would'],
  ['advice-meaning-6','no','yes'],['advice-test-a-7','expectation','advice'],['advice-test-a-8','option','confirmed arrangement'],
  ['advice-test-a-9','unknown','known'],['advice-test-b-7','expectation','advice'],['advice-test-b-9','unknown','known']
 ]);
 for(const id of ['advice-meaning-8','advice-meaning-9','advice-meaning-10','advice-test-a-21','advice-test-b-15'])assert(isOpen(task(id)),id);
});

test('A203 conditions permit imperative and modal results with correctly formed if clauses',()=>{
 cases([
  ['conditions-forms-1','is','will be'],['conditions-forms-2','calls','call'],['conditions-forms-3','call','calls'],
  ['conditions-forms-4','will','are'],['conditions-forms-5','ask','will ask'],['conditions-forms-6','can','will can'],
  ['conditions-forms-7','may','must'],['conditions-forms-8','am','will be'],
  ['conditions-forms-10',"If he doesn't reply, I will call.","If he doesn't replies, I will call."],
  ['conditions-test-a-1','stops','will stop'],['conditions-test-a-2','answer','answers'],
  ['conditions-test-b-1','is','will be'],['conditions-test-b-3','leave','will leave']
 ]);
});

test('A203 sentence keys accept reviewed contractions without changing the condition',()=>{
 cases([
  ['obligation-review-3',"Tomorrow I'll have to wait.",'Tomorrow I will must wait.'],
  ['obligation-test-b-13',"We'll have to change our passes.",'We will must change our passes.'],
  ['conditions-forms-12',"We'll stop if you're tired.","We'll stop if you will be tired."],
  ['conditions-test-a-11',"If Dan phones, I'll tell him.","If Dan will phone, I'll tell him."],
  ['conditions-test-b-11',"If she doesn't come, we'll email her.","If she doesn't comes, we'll email her."],
  ['conditions-test-b-13',"If you're cold, we'll stop.","If you'll be cold, we'll stop."],
  ['conditions-test-b-14',"I'll check it after the lesson ends.","I'll check it after the lesson will end."]
 ]);
});

test('A203 time clauses differ from questions; until is not a deadline or immediate start',()=>{
 cases([
  ['conditions-time-1','get','will get'],['conditions-time-2','arrives','will arrive'],['conditions-time-3','leave','will leave'],
  ['conditions-time-4','ends','will end'],['conditions-time-5','until','by'],['conditions-time-6','by','until'],
  ['conditions-time-7','is','are'],['conditions-time-8','will','do should'],
  ['conditions-time-10',"I'll return the book by Friday.","I'll return the book until Friday."],
  ['conditions-test-a-6','by','until'],['conditions-test-b-6','until','by']
 ]);
 for(const id of ['conditions-time-12','conditions-time-13','conditions-time-15','conditions-test-a-15','conditions-test-b-15'])assert(isOpen(task(id)),id);
 assert(task('conditions-time-15').answer.includes('Present Perfect'),'completed future time relation is not falsely banned');
});

test('A203 unless, indirect if and open conditions do not generate reversed or invented facts',()=>{
 cases([
  ['conditions-logic-1',"if it doesn't rain",'if it rains'],['conditions-logic-2','question','condition'],
  ['conditions-logic-3','unknown','known'],['conditions-logic-4','no','yes'],['conditions-logic-5','no','yes'],['conditions-logic-6','no','yes'],
  ['conditions-test-a-7',"if it isn't windy",'if it is windy'],['conditions-test-a-8','question','condition'],
  ['conditions-test-b-7',"if it doesn't snow",'if it snows'],['conditions-test-b-8','question','time clause for another action']
 ]);
 for(const id of ['conditions-logic-7','conditions-logic-9','conditions-logic-11','conditions-test-a-22','conditions-test-a-24','conditions-test-b-24'])assert(isOpen(task(id)),id);
});

test('A203 independent reading keys separate rules, optional acts, suggestions and unconfirmed plans',()=>{
 cases([
  ['obligation-reading-1','Maya','Rafi'],['obligation-reading-2','12','10'],['obligation-reading-3','optional','forbidden'],
  ['obligation-reading-4','no','yes'],['obligation-reading-5','not stated','false'],['obligation-reading-6','true','false'],
  ['obligation-reading-7','false','true'],['obligation-reading-8','true','false'],
  ['advice-reading-1','Leah','Omar'],['advice-reading-2','9','10'],['advice-reading-3','false','true'],
  ['advice-reading-4','expectation','confirmed result'],['advice-reading-5','false','true'],['advice-reading-6','not stated','false'],
  ['advice-reading-7','obligation','advice'],['advice-reading-8','false','true'],
  ['conditions-reading-1','10','4'],['conditions-reading-2','09:20','09:00'],['conditions-reading-3','9:00','9:20'],
  ['conditions-reading-4','museum','garden'],['conditions-reading-5','garden','museum'],['conditions-reading-6','false','true'],
  ['conditions-reading-7','not stated','false'],['conditions-reading-8','false','true']
 ]);
});

test('A203 independent listening keys preserve changed rules, uncertain arrivals and backup plans',()=>{
 cases([
  ['obligation-listening-1','Owen','Maya'],['obligation-listening-2','4','12'],['obligation-listening-3','yes','no'],
  ['obligation-listening-4','no','yes'],['obligation-listening-5','true','false'],['obligation-listening-6','true','false'],['obligation-listening-7','not stated','false'],
  ['advice-listening-1','Dina','Leah'],['advice-listening-2','3','9'],['advice-listening-3','expectation','advice'],
  ['advice-listening-4','false','true'],['advice-listening-5','not stated','true'],['advice-listening-6','suggestion','order'],['advice-listening-7','not stated','false'],
  ['conditions-listening-1','Evan','Niko'],['conditions-listening-2','18:30','18:00'],['conditions-listening-3','18:00','18:30'],
  ['conditions-listening-4','tablet','paper'],['conditions-listening-5','false','true'],['conditions-listening-6','after','before'],['conditions-listening-7','not stated','false']
 ]);
});

test('A203 reference has all seven persons and scoped pattern contrasts',()=>{
 assert.deepEqual(obligationPersons.map(r=>r[0]),['I','you','he','she','it','we','they']);
 assert.equal(rulePatterns.length,44);assert.equal(rulesReference.rows.length,51);assert.equal(rulesReference.practice.length,20);
 assert(rulesReference.rows.every(r=>r.length===5&&r.every(Boolean)));
 assert.equal(new Set(rulePatterns.map(r=>r[0])).size,44);
 assert.equal(obligationPersons[2][2],'He has to wait.');assert.equal(obligationPersons[2][4],'Does he have to wait?');
 for(const label of ['must not / mustn’t + V','do/does not have to','had better not + V','not … until','if = whether'])assert(rulePatterns.some(r=>r[0]===label),label);
 assert(rulesReference.intro.join(' ').includes('не полный справочник'));
});

test('A203 cards retain original IDs and add usable IPA, phrases and idiomatic meanings',()=>{
 assert.equal(a203Vocabulary.length,78);assert.equal(new Set(a203Vocabulary.map(c=>c.id)).size,78);
 for(let n=1;n<=6;n++)assert(vocabulary.some(c=>c.id===`A203-v${n}`));
 for(const c of a203Vocabulary)assert(c.kind&&c.context&&c.note&&/^\/.+\/$/.test(c.ipa)&&c.accent==='UK');
 for(const word of ['sign in','run out of','give it a try','make up your mind','it is up to you','play it by ear','as soon as','on condition that'])assert(a203Vocabulary.some(c=>c.word===word),word);
 assert.equal(a203Vocabulary.find(c=>c.word==='receipt').ipa,'/rɪˈsiːt/');assert.equal(a203Vocabulary.find(c=>c.word==='advise').ipa,'/ədˈvaɪz/');
 assert.equal(modules.find(m=>m.id==='A203').vocabulary.length,85);
});

test('A203 expansion retains old drill archive, notes, navigation and SRS without inherited progress',()=>{
 const s=freshState();s.moduleProgress.A203={selfChecked:true,date:'2026-09-22'};s.drafts.A203='Synthetic old note.';
 s.cards['A203-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
 s.navigation.current='module/A203';s.navigation.sections.course='module/A203';
 s.navigation.pages['module/A203']={scroll:500,focus:'drill1',fields:{drill0:'arrives',drill1:'must not\nOriginal answer',drill2:'do not have to'},details:[true]};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);assert.equal(copy.schemaVersion,2);
 assert.equal(topicWorkProgress(copy,'A203').total,265);assert.equal(topicWorkProgress(copy,'A203').completed,0);
 assert.deepEqual(modules.find(m=>m.id==='A203').drills.map(d=>d[0]),['If she ___, I will call you. (arrive)','You ___ smoke here. (запрещено)','You ___ come early. (необязательно; 4 слова)']);
 delete s.navigation;assert.equal(validateState(s).drafts.A203,s.drafts.A203);
});

test('A203 exams retain multiline drafts and both attempts; open responses stay pending',()=>{
 for(const u of units){
  const s=freshState(),p=unitState(s,u.id),paragraph=u.tests[0].tasks.find(t=>t.prompt.includes('100–140'));
  p.examDraft.answers[paragraph.id]='Synthetic unfinished paragraph.\nContinue later.';
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);assert.equal(topicWorkProgress(s,'A203').completed,0);
  let first;
  for(const exam of u.tests){
   p.examDraft.answers=Object.fromEntries(exam.tasks.map(q=>[q.id,q.answer.split('|')[0]]));submitUnitTest(s,u.id,'2026-09-23T12:00:00Z');
   const result=scoreUnitTest(u,p.attempts.at(-1));assert.equal(result.correct,result.total);assert.equal(result.status,'awaiting-review');
   assert.equal(result.pending,exam.tasks.filter(isOpen).length);assert.equal(topicWorkProgress(s,'A203').completed,1);
   if(exam.id==='a'){first=structuredClone(p.attempts[0]);startUnitTest(s,u.id);}else assert.deepEqual(p.attempts[0],first);
  }
  assert.equal(p.attempts.length,2);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 }
});

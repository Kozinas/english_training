import assert from 'node:assert/strict';

// Continues the isolated first-unit fixture, never a real learner browser profile.
export async function checkT01Documentation({evaluate,route,command,poll,screenshot,delay,importSynthetic}){
 const fill=async(selector,value)=>evaluate(`{const el=document.querySelector(${JSON.stringify(selector)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));}`);
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
 await route('settings','#profile');
 await evaluate(`(async()=>{const s=JSON.parse(localStorage.getItem('english-training-v1'));const {subtopics}=await import('/data/course.mjs');const {validateState,startUnitTest}=await import('/engine.mjs');const u=subtopics.find(u=>u.id==='T01-interface'),p=s.learning[u.id],t=u.tests[0].tasks.find(t=>t.kind==='text');
 p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic reviewer',date:'2026-09-29T17:10:00Z',evidence:'Synthetic import fixture; not learner feedback.'};startUnitTest(s,u.id);const e=u.tests.find(e=>e.id===p.examDraft.variant);p.examDraft.answers[e.tasks.find(t=>t.kind==='text').id]='Synthetic unfinished original-unit answer\\nContinue later.';
 s.navigation.current='unit/T01-interface/writing';s.navigation.sections.course=s.navigation.current;s.bookmark={route:s.navigation.current,scroll:600,focus:'answer-T01-interface-writing-11'};window.__t01DocBaseline=JSON.stringify(validateState(s));})()`);
 const baseline=await evaluate('window.__t01DocBaseline');await importSynthetic('window.__t01DocBaseline');
 await route('module/T01','#topic-development');assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),2);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),101);assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),218);
 assert(await evaluate(`(async()=>{const {topicWorkProgress}=await import('/engine.mjs');return topicWorkProgress(JSON.parse(localStorage.getItem('english-training-v1')),'T01').percent===46})()`));
 const u=await evaluate(`(async()=>{const {subtopics}=await import('/data/course.mjs');return subtopics.find(u=>u.id==='T01-documentation')})()`);
 await route('unit/T01-documentation/explain','#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>9000'));await screenshot('t01-documentation-explain-desktop.png');
 await route('unit/T01-documentation/examples','#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>1800'));
 for(const b of u.banks){
  await route('unit/T01-documentation/'+b.id,'#check-bank');assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),b.tasks.length);
  assert(await evaluate('new Set([...document.querySelectorAll("[id]")].map(n=>n.id)).size===document.querySelectorAll("[id]").length'));
  if(b.id==='forms'){
   await fill('#answer-T01-documentation-forms-1','support');await evaluate('document.querySelector("#check-bank").click()');assert(!(await evaluate('document.querySelector("#feedback-T01-documentation-forms-1").textContent')).startsWith('Верно'));
   await fill('#answer-T01-documentation-forms-1','supports');await evaluate('document.querySelector("#check-bank").click()');assert((await evaluate('document.querySelector("#feedback-T01-documentation-forms-1").textContent')).startsWith('Верно'));
  }
  if(b.id==='notation')assert((await evaluate('document.querySelector("#unit-content").textContent')).includes('C:\\Practice\\sample.txt'));
  if(b.id==='reading')assert((await evaluate('document.querySelector(".reading").textContent')).includes('The documented export contains all notes'));
  if(b.kind==='listening'){
   assert(!(await evaluate('document.querySelector("#unit-content").textContent')).includes(b.passage.slice(0,60)));
   await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(b.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#check-bank').click();}`);
   assert((await evaluate('document.querySelector("#bank-transcript").textContent')).includes(b.passage.slice(0,60)));
  }
 }
 const original='Synthetic complete summary, not a learner response.\n'+await evaluate(`(async()=>{const {documentationModels}=await import('/data/t01-documentation-texts.mjs');return documentationModels.summary})()`),revised='Synthetic separate revision.\n'+original;
 await route('unit/T01-documentation/writing','#check-bank');await fill('#answer-T01-documentation-writing-7',original);await fill('#answer-T01-documentation-writing-11',revised);await command('Page.reload');
 await poll(()=>evaluate(`document.querySelector('#answer-T01-documentation-writing-7')?.value===${JSON.stringify(original)}`),'T01 documentation original persisted');
 await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=course]").click()');await poll(()=>evaluate(`document.querySelector('#answer-T01-documentation-writing-11')?.value===${JSON.stringify(revised)}`),'T01 documentation revision and nested route restored');
 await route('unit/T01-documentation/test','#unit-test');await fill('#answer-T01-documentation-test-a-12',original);await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-T01-documentation-test-a-12')?.value===${JSON.stringify(original)}`),'T01 documentation test draft persisted');
 assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),0);
 for(const [i,e]of u.tests.entries()){
  assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),24);
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(e.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),24*(i+1));assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),16*(i+1));
  assert((await evaluate('document.querySelector("#test-history").textContent')).includes('Ожидает содержательной проверки'));
  if(!i){await evaluate('document.querySelector("#new-unit-test").click()');assert((await evaluate('document.querySelector("#unit-content h3").textContent')).includes('B'));}
 }
 await route('module/T01','#topic-development');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),117,'101 old + 15 practice + one test, not two variants');
 await route('references/documentation-language','#reference-search');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),32);await fill('#reference-search','placeholder');const filtered=await evaluate('document.querySelectorAll("#reference-rows tr").length');assert(filtered>0&&filtered<32);
 await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=references]").click()');await poll(()=>evaluate('document.querySelector("#reference-search")?.value==="placeholder"'),'T01 documentation reference filter restored');await fill('#reference-search','');
 await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 for(const [path,selector,name]of [['unit/T01-documentation/reading','#check-bank','reading'],['unit/T01-documentation/notation','#check-bank','notation'],['unit/T01-documentation/writing','#check-bank','writing'],['references/documentation-language','#reference-search','reference']]){
  await route(path,selector);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'T01 documentation mobile overflow '+path);
  if(name==='writing')await evaluate('document.querySelector("textarea[data-task]").closest(".task").scrollIntoView({block:"start"})');
  if(name==='reference')await evaluate('document.querySelector(".table-wrap").scrollIntoView({block:"start"})');await screenshot('t01-documentation-'+name+'-mobile.png');
 }
 await route('settings','#profile');await evaluate(`(async()=>{const s=JSON.parse(localStorage.getItem('english-training-v1'));const {subtopics}=await import('/data/course.mjs');const {validateState}=await import('/engine.mjs');for(const t of subtopics.find(u=>u.id==='T01-documentation').banks.flatMap(b=>b.tasks))s.learning['T01-documentation'].answers[t.id]=t.answer;window.__t01DocComplete=JSON.stringify(validateState(s));})()`);
 await importSynthetic('window.__t01DocComplete');await route('module/T01','#topic-development');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),218);assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),218);
 await command('Page.reload');await poll(()=>evaluate('document.querySelector(".topic-progress progress")?.value===218'),'T01 full published portion persists');assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('Прогресс опубликованной части'));
 await route('course','#module-list');assert((await evaluate('[...document.querySelectorAll(".module-row")].find(n=>n.textContent.includes("T01")).textContent')).includes('Прогресс опубликованной части'));
 await route('plan','[data-topic-progress="T01"]');assert((await evaluate('document.querySelector("[data-topic-progress=T01]").textContent')).includes('Прогресс опубликованной части'));
 await evaluate(`{const s=JSON.parse(localStorage.getItem('english-training-v1')),old=JSON.parse(${JSON.stringify(baseline)});if(JSON.stringify(s.learning['T01-interface'])!==JSON.stringify(old.learning['T01-interface']))throw Error('Changed first-unit answers, history, reviews or next draft');if(JSON.stringify(s.cards)!==JSON.stringify(old.cards))throw Error('Changed T01 SRS');if(JSON.stringify(s.navigation.pages['module/T01'].fields)!==JSON.stringify(old.navigation.pages['module/T01'].fields))throw Error('Lost T01 archive');if(s.learning['T01-documentation'].attempts.length!==2)throw Error('Lost documentation attempts');}`);
 console.log('T01 documentation smoke passed: nine banks, two exams, old import 101/218, original/revision/drafts, retained first-unit reviews/SRS, 218/218 still partial, reference and mobile.');
}

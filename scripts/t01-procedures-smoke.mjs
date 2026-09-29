import assert from 'node:assert/strict';

// Continues two old units in an isolated synthetic browser profile, never learner data.
export async function checkT01Procedures({evaluate,route,command,poll,screenshot,delay,importSynthetic}){
 const fill=async(selector,value)=>evaluate(`{const el=document.querySelector(${JSON.stringify(selector)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));}`);
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
 await route('settings','#profile');
 await evaluate(`(async()=>{const s=JSON.parse(localStorage.getItem('english-training-v1'));const {subtopics}=await import('/data/course.mjs');const {validateState,startUnitTest}=await import('/engine.mjs');const u=subtopics.find(u=>u.id==='T01-documentation'),p=s.learning[u.id],t=u.tests[0].tasks.find(t=>t.kind==='text');
 p.attempts[0].reviews[t.id]={score:3,reviewer:'Synthetic reviewer',date:'2026-09-29T18:10:00Z',evidence:'Synthetic fixture, not learner feedback.'};startUnitTest(s,u.id);const e=u.tests.find(e=>e.id===p.examDraft.variant);p.examDraft.answers[e.tasks.find(t=>t.kind==='text').id]='Synthetic next documentation answer\\nContinue later.';
 s.navigation.current='unit/T01-documentation/writing';s.navigation.sections.course=s.navigation.current;s.bookmark={route:s.navigation.current,scroll:600,focus:'answer-T01-documentation-writing-11'};window.__t01ProcedureBaseline=JSON.stringify(validateState(s));})()`);
 const baseline=await evaluate('window.__t01ProcedureBaseline');await importSynthetic('window.__t01ProcedureBaseline');
 await route('module/T01','#legacy-practice');assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),3);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),218);assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),337);
 assert.equal(await evaluate('document.querySelector("#topic-development")'),null);
 assert(await evaluate(`(async()=>{const {topicWorkProgress}=await import('/engine.mjs');return topicWorkProgress(JSON.parse(localStorage.getItem('english-training-v1')),'T01').percent===64})()`));
 const u=await evaluate(`(async()=>{const {subtopics}=await import('/data/course.mjs');return subtopics.find(u=>u.id==='T01-procedures')})()`);
 await route('unit/T01-procedures/explain','#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>9000'));await screenshot('t01-procedures-explain-desktop.png');
 await route('unit/T01-procedures/examples','#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>1800'));
 for(const b of u.banks){
  await route('unit/T01-procedures/'+b.id,'#check-bank');assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),b.tasks.length);
  assert(await evaluate('new Set([...document.querySelectorAll("[id]")].map(n=>n.id)).size===document.querySelectorAll("[id]").length'));
  if(b.id==='forms'){
   await fill('#answer-T01-procedures-forms-1','Opens');await evaluate('document.querySelector("#check-bank").click()');assert(!(await evaluate('document.querySelector("#feedback-T01-procedures-forms-1").textContent')).startsWith('Верно'));
   await fill('#answer-T01-procedures-forms-1','Open');await evaluate('document.querySelector("#check-bank").click()');assert((await evaluate('document.querySelector("#feedback-T01-procedures-forms-1").textContent')).startsWith('Верно'));
  }
  if(b.id==='reading')assert((await evaluate('document.querySelector(".reading").textContent')).includes('It does not merge them'));
  if(b.kind==='listening'){
   assert(!(await evaluate('document.querySelector("#unit-content").textContent')).includes(b.passage.slice(0,60)));
   await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(b.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#check-bank').click();}`);
   assert((await evaluate('document.querySelector("#bank-transcript").textContent')).includes('three entries in the source list'));
  }
 }
 const original='Synthetic complete instruction, not a learner response.\n'+await evaluate(`(async()=>{const {proceduresModels}=await import('/data/t01-procedures-texts.mjs');return proceduresModels.procedure})()`),revised='Synthetic separate full revision.\n'+original;
 await route('unit/T01-procedures/writing','#check-bank');await fill('#answer-T01-procedures-writing-7',original);await fill('#answer-T01-procedures-writing-11',revised);await command('Page.reload');
 await poll(()=>evaluate(`document.querySelector('#answer-T01-procedures-writing-7')?.value===${JSON.stringify(original)}`),'T01 procedure original persisted');
 await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=course]").click()');await poll(()=>evaluate(`document.querySelector('#answer-T01-procedures-writing-11')?.value===${JSON.stringify(revised)}`),'T01 procedure revision and route restored');
 await route('unit/T01-procedures/test','#unit-test');await fill('#answer-T01-procedures-test-a-12',original);await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-T01-procedures-test-a-12')?.value===${JSON.stringify(original)}`),'T01 procedure test draft persisted');
 assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),0);
 for(const [i,e]of u.tests.entries()){
  assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),26);
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(e.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),26*(i+1));assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),18*(i+1));
  assert((await evaluate('document.querySelector("#test-history").textContent')).includes('Ожидает содержательной проверки'));
  if(!i){await evaluate('document.querySelector("#new-unit-test").click()');assert((await evaluate('document.querySelector("#unit-content h3").textContent')).includes('B'));}
 }
 await route('module/T01','#legacy-practice');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),234,'218 old + 15 practice + one test, not two variants');
 await route('references/procedure-language','#reference-search');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),32);await fill('#reference-search','otherwise');const filtered=await evaluate('document.querySelectorAll("#reference-rows tr").length');assert(filtered>0&&filtered<32);
 await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=references]").click()');await poll(()=>evaluate('document.querySelector("#reference-search")?.value==="otherwise"'),'T01 procedure reference filter restored');await fill('#reference-search','');
 await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 for(const [path,selector,name]of [['unit/T01-procedures/reading','#check-bank','reading'],['unit/T01-procedures/writing','#check-bank','writing'],['unit/T01-procedures/speaking','#check-bank','speaking'],['references/procedure-language','#reference-search','reference']]){
  await route(path,selector);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'T01 procedure mobile overflow '+path);
  if(name==='writing')await evaluate('document.querySelector("textarea[data-task]").closest(".task").scrollIntoView({block:"start"})');
  if(name==='reference')await evaluate('document.querySelector(".table-wrap").scrollIntoView({block:"start"})');await screenshot('t01-procedures-'+name+'-mobile.png');
 }
 await route('settings','#profile');await evaluate(`(async()=>{const s=JSON.parse(localStorage.getItem('english-training-v1'));const {subtopics}=await import('/data/course.mjs');const {validateState}=await import('/engine.mjs');for(const t of subtopics.find(u=>u.id==='T01-procedures').banks.flatMap(b=>b.tasks))s.learning['T01-procedures'].answers[t.id]=t.answer;window.__t01ProcedureComplete=JSON.stringify(validateState(s));})()`);
 await importSynthetic('window.__t01ProcedureComplete');await route('module/T01','#legacy-practice');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),337);assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),337);
 await command('Page.reload');await poll(()=>evaluate('document.querySelector(".topic-progress progress")?.value===337'),'T01 full work persists');assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('Общий прогресс работы'));
 assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('Проверка качества, работа над ошибками и отложенное применение ещё обязательны'));
 await route('course','#module-list');assert((await evaluate('[...document.querySelectorAll(".module-row")].find(n=>n.textContent.includes("T01")).textContent')).includes('Общий прогресс работы'));
 await route('plan','[data-topic-progress="T01"]');assert((await evaluate('document.querySelector("[data-topic-progress=T01]").textContent')).includes('Общий прогресс работы'));
 await evaluate(`{const s=JSON.parse(localStorage.getItem('english-training-v1')),old=JSON.parse(${JSON.stringify(baseline)});for(const id of ['T01-interface','T01-documentation'])if(JSON.stringify(s.learning[id])!==JSON.stringify(old.learning[id]))throw Error('Changed old unit answers/history/reviews/draft: '+id);if(JSON.stringify(s.cards)!==JSON.stringify(old.cards))throw Error('Changed T01 SRS');if(JSON.stringify(s.navigation.pages['module/T01'].fields)!==JSON.stringify(old.navigation.pages['module/T01'].fields))throw Error('Lost T01 archive');if(s.learning['T01-procedures'].attempts.length!==2)throw Error('Lost procedure attempts');}`);
 console.log('T01 procedures smoke passed: nine banks, two exams, old 218/337 import, original/revision/drafts, retained both old-unit reviews/SRS/archive, 337/337 not mastery, reference and mobile.');
}

import assert from 'node:assert/strict';
import {checkT01Documentation} from './t01-documentation-smoke.mjs';

// Isolated synthetic browser profile only. No real learner answers or real speech services.
export async function checkT01({evaluate,route,command,poll,screenshot,delay,importSynthetic}){
 const fill=async(selector,value)=>evaluate(`{const el=document.querySelector(${JSON.stringify(selector)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));}`);
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
 await route('settings','#profile');
 await evaluate(`(async()=>{
  const {freshState,reviewCard}=await import('/engine.mjs');const {questions,assessmentVersion}=await import('/data/assessment.mjs');const s=freshState();
  s.moduleProgress.T01={selfChecked:true,date:'2026-09-22'};s.drafts.T01='Synthetic original T01 notes.';
  s.cards['T01-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));s.cards['T01-x-set-up']=reviewCard(null,'hard',Date.UTC(2026,8,23));
  s.navigation.pages['module/T01']={scroll:240,focus:'drill1',fields:{drill0:'upload',drill1:'is\\nSynthetic original answer',drill2:'exiting'},details:[]};
  s.placement={assessmentVersion,date:'2026-09-29T15:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};
  s.bookmark={route:'module/T01',scroll:240,focus:'drill1'};s.navigation.sections.course='module/T01';window.__t01Original=JSON.stringify(s);
 })()`);
 const original=await evaluate('window.__t01Original');await importSynthetic('window.__t01Original');
 await route('module/T01','#legacy-practice');
 assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),3);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),337);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),0);
 assert.equal(await evaluate('document.querySelector("#drill1").value'),'is\nSynthetic original answer');
 assert(await evaluate('document.querySelector("#drill1").readOnly'));assert.equal(await evaluate('document.querySelector("#draft").value'),'Synthetic original T01 notes.');
 await evaluate('document.querySelector("#legacy-practice").open=true');await route('home','.hero');await route('module/T01','#legacy-practice');
 await command('Page.reload');await poll(()=>evaluate('document.querySelector("#drill2")?.value==="exiting"'),'T01 legacy archive reload');
 assert.equal(await evaluate('document.querySelector("#topic-development")'),null);
 assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('Общий прогресс работы'));
 await screenshot('t01-topic-desktop.png');
 const u=await evaluate(`(async()=>{const {subtopics}=await import('/data/course.mjs');return subtopics.find(u=>u.id==='T01-interface')})()`);
 await route('unit/T01-interface/explain','#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>8000'));
 await route('unit/T01-interface/examples','#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>1800'));
 for(const b of u.banks){
  await route('unit/T01-interface/'+b.id,'#check-bank');assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),b.tasks.length);
  assert(await evaluate('new Set([...document.querySelectorAll("[id]")].map(n=>n.id)).size===document.querySelectorAll("[id]").length'));
  if(b.id==='forms'){
   await fill('#answer-'+b.tasks[0].id,'Synthetic wrong answer');await evaluate('document.querySelector("#check-bank").click()');assert(!(await evaluate('document.querySelector("#feedback-T01-interface-forms-1").textContent')).startsWith('Верно'));
   await fill('#answer-'+b.tasks[0].id,'Open');await evaluate('document.querySelector("#check-bank").click()');assert((await evaluate('document.querySelector("#feedback-T01-interface-forms-1").textContent')).startsWith('Верно'));
  }
  if(b.id==='reading'){
   await poll(()=>evaluate('document.querySelector(".lesson-diagram img")?.naturalWidth===760'),'T01 diagram served by exact allowlist');
   assert((await evaluate('document.querySelector(".lesson-diagram img").alt')).includes('Title пустое'));assert((await evaluate('document.querySelector(".reading").textContent')).includes('All the details'));
   await evaluate('document.querySelector(".lesson-diagram").scrollIntoView({block:"start"})');await delay(3500);await screenshot('t01-interface-desktop.png');
  }
  if(b.kind==='listening'){
   assert(!(await evaluate('document.querySelector("#unit-content").textContent')).includes(b.passage.slice(0,50)));
   assert.equal(await evaluate('document.querySelectorAll(".lesson-diagram").length'),0,'no reading diagram used as an audio clue');
   await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(b.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#check-bank').click();}`);
   assert((await evaluate('document.querySelector("#bank-transcript").textContent')).includes(b.passage.slice(0,50)));
  }
 }
 await route('unit/T01-interface/writing','#check-bank');
 const full='Synthetic instruction, not a learner result.\n'+await evaluate(`(async()=>{const {interfaceModels}=await import('/data/t01-interface-texts.mjs');return interfaceModels.instruction})()`);
 await fill('#answer-T01-interface-writing-7',full);await fill('#answer-T01-interface-writing-11','Synthetic full revision\n'+full);await command('Page.reload');
 await poll(()=>evaluate(`document.querySelector('#answer-T01-interface-writing-7')?.value===${JSON.stringify(full)}`),'T01 original instruction persists');
 await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=course]").click()');
 await poll(()=>evaluate(`document.querySelector('#answer-T01-interface-writing-11')?.value===${JSON.stringify('Synthetic full revision\n'+full)}`),'T01 separate revision and nested route persist');
 await route('unit/T01-interface/test','#unit-test');assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),0);
 await fill('#answer-T01-interface-test-a-12',full);await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-T01-interface-test-a-12')?.value===${JSON.stringify(full)}`),'T01 full test draft persists');
 for(const [index,e]of u.tests.entries()){
  assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),24);
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(e.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),24*(index+1));assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),16*(index+1));
  assert((await evaluate('document.querySelector("#test-history").textContent')).includes('Ожидает содержательной проверки'));
  if(index===0){await evaluate('document.querySelector("#new-unit-test").click()');assert((await evaluate('document.querySelector("#unit-content h3").textContent')).includes('B'));}
 }
 await route('module/T01','#legacy-practice');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),16,'15 practice answers + one submitted test, not two variants or the legacy checkbox');
 await route('references/interface-language','#reference-search');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),30);
 await fill('#reference-search','draft');const filtered=await evaluate('document.querySelectorAll("#reference-rows tr").length');assert(filtered>0&&filtered<30);
 await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=references]").click()');await poll(()=>evaluate('document.querySelector("#reference-search")?.value==="draft"'),'T01 reference search persists');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),filtered);await fill('#reference-search','');
 await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 for(const [path,selector,name]of [['module/T01','#legacy-practice','topic'],['unit/T01-interface/reading','.lesson-diagram','reading'],['unit/T01-interface/writing','#check-bank','writing'],['unit/T01-interface/speaking','#check-bank','speaking'],['references/interface-language','#reference-search','reference']]){
  await route(path,selector);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'T01 mobile overflow '+path);
  if(name==='reading'){await evaluate('document.querySelector(".lesson-diagram").scrollIntoView({block:"start"})');assert(await evaluate('document.querySelector(".diagram-frame").scrollWidth>document.querySelector(".diagram-frame").clientWidth'),'wide diagram scrolls within its container');}
  if(name==='writing')await evaluate('document.querySelector("textarea[data-task]").closest(".task").scrollIntoView({block:"start"})');
  if(name==='reference')await evaluate('document.querySelector(".table-wrap").scrollIntoView({block:"start"})');await screenshot('t01-'+name+'-mobile.png');
 }
 await route('settings','#profile');await evaluate(`(async()=>{const s=JSON.parse(localStorage.getItem('english-training-v1'));const {subtopics}=await import('/data/course.mjs');const {validateState}=await import('/engine.mjs');for(const t of subtopics.find(u=>u.id==='T01-interface').banks.flatMap(b=>b.tasks))s.learning['T01-interface'].answers[t.id]=t.answer;window.__t01Complete=JSON.stringify(validateState(s));})()`);
 await importSynthetic('window.__t01Complete');await route('module/T01','#legacy-practice');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),101);assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),337);
 assert(await evaluate('!document.querySelector("#topic-development")'));await command('Page.reload');await poll(()=>evaluate('document.querySelector(".topic-progress progress")?.value===101'),'T01 first unit 101/337 persists');
 assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('Общий прогресс работы'));
 await route('course','#module-list');assert((await evaluate('[...document.querySelectorAll(".module-row")].find(n=>n.textContent.includes("T01")).textContent')).includes('Общий прогресс работы'));
 await route('plan','[data-topic-progress="T01"]');assert((await evaluate('document.querySelector("[data-topic-progress=T01]").textContent')).includes('Общий прогресс работы'));
 await route('home','.hero');assert((await evaluate('document.querySelector("main").textContent')).includes('Частично опубликовано: 1'));
 await evaluate(`{const s=JSON.parse(localStorage.getItem('english-training-v1')),old=JSON.parse(${JSON.stringify(original)});if(JSON.stringify(s.cards)!==JSON.stringify(old.cards))throw Error('Changed legacy T01 SRS');if(JSON.stringify(s.navigation.pages['module/T01'].fields)!==JSON.stringify(old.navigation.pages['module/T01'].fields))throw Error('Lost T01 archive');if(s.learning['T01-interface'].attempts.length!==2)throw Error('Lost T01 test history');}`);
 console.log('T01 first-unit smoke passed: eight banks, two exams, diagram/text equivalence, original/revised drafts, 101/337 first-unit work only, legacy archive/SRS, reference and mobile.');
 await checkT01Documentation({evaluate,route,command,poll,screenshot,delay,importSynthetic});
}

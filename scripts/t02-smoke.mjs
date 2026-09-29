import assert from 'node:assert/strict';
import {checkT02Verification} from './t02-verification-smoke.mjs';

// Synthetic isolated profile only; no actual learner answers or live speech services.
export async function checkT02({evaluate,route,command,poll,screenshot,delay,importSynthetic}){
 const fill=async(selector,value)=>evaluate(`{const el=document.querySelector(${JSON.stringify(selector)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));}`);
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
 await route('settings','#profile');
 await evaluate(`(async()=>{const {freshState,reviewCard}=await import('/engine.mjs');const {questions,assessmentVersion}=await import('/data/assessment.mjs');const s=freshState();s.moduleProgress.T02={selfChecked:true,date:'2026-09-22'};s.drafts.T02='Synthetic original T02 notes.\\nNot learner data.';s.cards['T02-v2']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T02-x-look-into']=reviewCard(null,'hard',Date.UTC(2026,8,27));s.navigation.pages['module/T02']={scroll:240,focus:'drill1',fields:{drill0:'actual',drill1:'reproduce\\nSynthetic original answer',drill2:'resolved'},details:[]};s.placement={assessmentVersion,date:'2026-09-29T19:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};s.bookmark={route:'module/T02',scroll:240,focus:'drill1'};s.navigation.sections.course='module/T02';window.__t02Original=JSON.stringify(s);})()`);
 const original=await evaluate('window.__t02Original');await importSynthetic('window.__t02Original');
 await route('module/T02','#legacy-practice');assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),2);assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),232);assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),0);
 assert.equal(await evaluate('document.querySelector("#drill1").value'),'reproduce\nSynthetic original answer');assert(await evaluate('document.querySelector("#drill1").readOnly'));assert.equal(await evaluate('document.querySelector("#draft").value'),'Synthetic original T02 notes.\nNot learner data.');
 await evaluate('document.querySelector("#legacy-practice").open=true');await route('home','.hero');await route('module/T02','#legacy-practice');await command('Page.reload');await poll(()=>evaluate('document.querySelector("#drill2")?.value==="resolved"'),'T02 old archive reload');
 assert((await evaluate('document.querySelector("#topic-development").textContent')).includes('Отчёты о ходе работы'));assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('Прогресс опубликованной части'));await screenshot('t02-topic-desktop.png');
 const u=await evaluate(`(async()=>{const {subtopics}=await import('/data/course.mjs');return subtopics.find(u=>u.id==='T02-report')})()`);
 await route('unit/T02-report/explain','#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>9800'));await screenshot('t02-report-explain-desktop.png');
 await route('unit/T02-report/examples','#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>2000'));
 for(const b of u.banks){
  await route('unit/T02-report/'+b.id,'#check-bank');assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),b.tasks.length);assert(await evaluate('new Set([...document.querySelectorAll("[id]")].map(n=>n.id)).size===document.querySelectorAll("[id]").length'));
  if(b.id==='forms'){
   await fill('#answer-T02-report-forms-1','shows');await evaluate('document.querySelector("#check-bank").click()');assert(!(await evaluate('document.querySelector("#feedback-T02-report-forms-1").textContent')).startsWith('Верно'));
   await fill('#answer-T02-report-forms-1','show');await evaluate('document.querySelector("#check-bank").click()');assert((await evaluate('document.querySelector("#feedback-T02-report-forms-1").textContent')).startsWith('Верно'));
  }
  if(b.id==='reading')assert((await evaluate('document.querySelector(".reading").textContent')).includes('four attempts by one tester, not four users'));
  if(b.kind==='listening'){
   assert(!(await evaluate('document.querySelector("#unit-content").textContent')).includes(b.passage.slice(0,60)));
   await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(b.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#check-bank').click();}`);
   assert((await evaluate('document.querySelector("#bank-transcript").textContent')).includes('does not move the card a second time'));
  }
 }
 const full='Synthetic original, not a learner result.\n'+await evaluate(`(async()=>{const {reportModels}=await import('/data/t02-report-texts.mjs');return reportModels.report})()`),revised='Synthetic full revised report.\n'+full;
 await route('unit/T02-report/writing','#check-bank');await fill('#answer-T02-report-writing-7',full);await fill('#answer-T02-report-writing-11',revised);await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-T02-report-writing-7')?.value===${JSON.stringify(full)}`),'T02 original report persists');
 await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=course]").click()');await poll(()=>evaluate(`document.querySelector('#answer-T02-report-writing-11')?.value===${JSON.stringify(revised)}`),'T02 full revision and nested route persist');
 await route('unit/T02-report/test','#unit-test');assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),0);await fill('#answer-T02-report-test-a-12',full);await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-T02-report-test-a-12')?.value===${JSON.stringify(full)}`),'T02 long exam draft persists');
 for(const [i,e]of u.tests.entries()){
  assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),26);
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(e.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),26*(i+1));assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),18*(i+1));assert((await evaluate('document.querySelector("#test-history").textContent')).includes('Ожидает содержательной проверки'));
  if(!i){await evaluate('document.querySelector("#new-unit-test").click()');assert((await evaluate('document.querySelector("#unit-content h3").textContent')).includes('B'));}
 }
 await route('module/T02','#legacy-practice');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),16,'15 practice answers + one submitted test; old self-check and repeated variants add no credit');
 await route('references/bug-report-language','#reference-search');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),32);await fill('#reference-search','regression');const filtered=await evaluate('document.querySelectorAll("#reference-rows tr").length');assert(filtered>0&&filtered<32);await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=references]").click()');await poll(()=>evaluate('document.querySelector("#reference-search")?.value==="regression"'),'T02 reference filter persists');await fill('#reference-search','');
 await delay(9100);await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 for(const [path,selector,name]of [['module/T02','#legacy-practice','topic'],['unit/T02-report/reading','#check-bank','reading'],['unit/T02-report/writing','#check-bank','writing'],['unit/T02-report/speaking','#check-bank','speaking'],['references/bug-report-language','#reference-search','reference']]){
  await route(path,selector);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'T02 mobile overflow '+path);if(name==='writing')await evaluate('document.querySelector("textarea[data-task]").closest(".task").scrollIntoView({block:"start"})');if(name==='reference')await evaluate('document.querySelector(".table-wrap").scrollIntoView({block:"start"})');await screenshot('t02-'+name+'-mobile.png');
 }
 await route('settings','#profile');await evaluate(`(async()=>{const s=JSON.parse(localStorage.getItem('english-training-v1'));const {subtopics}=await import('/data/course.mjs');const {validateState}=await import('/engine.mjs');for(const t of subtopics.find(u=>u.id==='T02-report').banks.flatMap(b=>b.tasks))s.learning['T02-report'].answers[t.id]=t.answer;window.__t02Complete=JSON.stringify(validateState(s));})()`);
 await importSynthetic('window.__t02Complete');await route('module/T02','#topic-development');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),117);assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),232);await command('Page.reload');await poll(()=>evaluate('document.querySelector(".topic-progress progress")?.value===117'),'T02 full published work persists');
 assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('100% не означает завершение всего топика или освоение'));
 await route('course','#module-list');assert((await evaluate('[...document.querySelectorAll(".module-row")].find(n=>n.textContent.includes("T02")).textContent')).includes('Прогресс опубликованной части'));
 await route('plan','[data-topic-progress="T02"]');assert((await evaluate('document.querySelector("[data-topic-progress=T02]").textContent')).includes('Прогресс опубликованной части'));
 await route('home','.hero');assert((await evaluate('document.querySelector("main").textContent')).includes('Частично опубликовано: 1'));
 await evaluate(`{const s=JSON.parse(localStorage.getItem('english-training-v1')),old=JSON.parse(${JSON.stringify(original)});if(JSON.stringify(s.cards)!==JSON.stringify(old.cards))throw Error('Changed legacy T02 SRS');if(JSON.stringify(s.navigation.pages['module/T02'].fields)!==JSON.stringify(old.navigation.pages['module/T02'].fields))throw Error('Lost T02 archive');if(s.learning['T02-report'].attempts.length!==2)throw Error('Lost T02 history');if(s.drafts.T02!==old.drafts.T02)throw Error('Lost old T02 notes');}`);
 console.log('T02 smoke passed: nine banks, two exams, original/revised reports, long drafts, 117/232 first-unit progress still partial, legacy archive/SRS, reference and mobile.');
 await checkT02Verification({evaluate,route,command,poll,screenshot,delay,importSynthetic});
}

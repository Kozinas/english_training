import assert from 'node:assert/strict';
import {checkT03Api} from './t03-api-smoke.mjs';
import {checkT03Testing} from './t03-testing-smoke.mjs';

// Isolated synthetic data only; no learner profile or real speech service.
export async function checkT03({evaluate,route,command,poll,screenshot,delay,importSynthetic}){
 const fill=async(selector,value)=>evaluate(`{const el=document.querySelector(${JSON.stringify(selector)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));}`);
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
 await route('settings','#profile');
 await evaluate(`(async()=>{const {freshState,reviewCard}=await import('/engine.mjs');const {questions,assessmentVersion}=await import('/data/assessment.mjs');const s=freshState();s.moduleProgress.T03={selfChecked:true,date:'2026-09-22'};s.drafts.T03='Synthetic old T03 notes.\\nNot learner data.';s.cards['T03-v2']=reviewCard(null,'good',Date.UTC(2026,8,27));s.cards['T03-x-backward-compatible']=reviewCard(null,'hard',Date.UTC(2026,8,27));s.navigation.pages['module/T03']={scroll:240,focus:'drill1',fields:{drill0:'returns',drill1:'writing\\nSynthetic original answer',drill2:'edge'},details:[]};s.placement={assessmentVersion,date:'2026-09-29T21:30:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.options.length]))};s.bookmark={route:'module/T03',scroll:240,focus:'drill1'};s.navigation.sections.course='module/T03';window.__t03Original=JSON.stringify(s);})()`);
 const original=await evaluate('window.__t03Original');await importSynthetic('window.__t03Original');
 await route('module/T03','#legacy-practice');assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),3);assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),365);assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),0);
 assert.equal(await evaluate('document.querySelector("#drill1").value'),'writing\nSynthetic original answer');assert(await evaluate('document.querySelector("#drill1").readOnly'));assert.equal(await evaluate('document.querySelector("#draft").value'),'Synthetic old T03 notes.\nNot learner data.');
 assert.equal(await evaluate('document.querySelector("#topic-development")'),null);assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('Общий прогресс работы'));
 await evaluate('document.querySelector("#legacy-practice").open=true');await route('home','.hero');await route('module/T03','#legacy-practice');await command('Page.reload');await poll(()=>evaluate('document.querySelector("#drill2")?.value==="edge"'),'T03 old archive persists');
 const u=await evaluate(`(async()=>{const {subtopics}=await import('/data/course.mjs');return subtopics.find(u=>u.id==='T03-review')})()`);
 await route('unit/T03-review/explain','#unit-content');await screenshot('t03-review-explain-desktop.png');assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('Общий прогресс работы'));
 await route('unit/T03-review/examples','#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>2000'));
 for(const b of u.banks){
  await route('unit/T03-review/'+b.id,'#check-bank');assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),b.tasks.length);assert(await evaluate('new Set([...document.querySelectorAll("[id]")].map(n=>n.id)).size===document.querySelectorAll("[id]").length'));
  if(b.id==='forms'){
   await fill('#answer-T03-review-forms-1','to check');await evaluate('document.querySelector("#check-bank").click()');assert(!(await evaluate('document.querySelector("#feedback-T03-review-forms-1").textContent')).startsWith('Верно'));
   await fill('#answer-T03-review-forms-1','check');await evaluate('document.querySelector("#check-bank").click()');assert((await evaluate('document.querySelector("#feedback-T03-review-forms-1").textContent')).startsWith('Верно'));
  }
  if(b.id==='reading')assert((await evaluate('document.querySelector(".reading").textContent')).includes('only attached execution log still belongs to r4'));
  if(b.id==='writing'){assert((await evaluate('document.querySelector(".reading").textContent')).includes('Review of Aster Notes PR 17'));assert((await evaluate('document.querySelector(".reading").textContent')).includes('Follow-up review of Aster Notes PR 17'));assert(await evaluate('[...document.querySelectorAll("[data-task]")].every(el=>!el.value)'));}
  if(b.kind==='listening'){
   assert(!(await evaluate('document.querySelector("#unit-content").textContent')).includes(b.passage.slice(0,60)));
   await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(b.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#check-bank').click();}`);
   assert((await evaluate('document.querySelector("#bank-transcript").textContent')).includes('Three passed and one failed'));
  }
 }
 const models=await evaluate(`(async()=>{const {reviewModels}=await import('/data/t03-review-texts.mjs');return reviewModels})()`),full='Synthetic original, not learner work.\n'+models.review,revised='Synthetic full revision, not learner work.\n'+models.revision;
 await route('unit/T03-review/writing','#check-bank');await fill('#answer-T03-review-writing-2',full);await fill('#answer-T03-review-writing-9',revised);await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-T03-review-writing-2')?.value===${JSON.stringify(full)}`),'T03 full review persists');
 await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=course]").click()');await poll(()=>evaluate(`document.querySelector('#answer-T03-review-writing-9')?.value===${JSON.stringify(revised)}`),'T03 nested route and full revision persist');
 await route('unit/T03-review/test','#unit-test');assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),0);await fill('#answer-T03-review-test-a-12',full);await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-T03-review-test-a-12')?.value===${JSON.stringify(full)}`),'T03 long exam draft persists');
 for(const [i,e]of u.tests.entries()){
  assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),28);
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(e.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),28*(i+1));assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),20*(i+1));assert((await evaluate('document.querySelector("#test-history").textContent')).includes('Ожидает содержательной проверки'));
  if(!i){await evaluate('document.querySelector("#new-unit-test").click()');assert((await evaluate('document.querySelector("#unit-content h3").textContent')).includes('B'));}
 }
 await route('module/T03','#legacy-practice');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),16,'15 practice answers + one submitted test, no credit for old self-check or repeated variants');
 await route('references/review-language','#reference-search');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),32);await fill('#reference-search','optional');const filtered=await evaluate('document.querySelectorAll("#reference-rows tr").length');assert(filtered>0&&filtered<32);await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=references]").click()');await poll(()=>evaluate('document.querySelector("#reference-search")?.value==="optional"'),'T03 reference filter persists');await fill('#reference-search','');
 await delay(9100);await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 for(const [path,selector,name]of [['module/T03','#legacy-practice','topic'],['unit/T03-review/reading','#check-bank','reading'],['unit/T03-review/writing','#check-bank','writing'],['unit/T03-review/speaking','#check-bank','speaking'],['references/review-language','#reference-search','reference']]){
  await route(path,selector);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'T03 mobile overflow '+path);if(name==='writing')await evaluate('document.querySelector("textarea[data-task]").closest(".task").scrollIntoView({block:"start"})');if(name==='reference')await evaluate('document.querySelector(".table-wrap").scrollIntoView({block:"start"})');await screenshot('t03-'+name+'-mobile.png');
 }
 await route('settings','#profile');await evaluate(`(async()=>{const s=JSON.parse(localStorage.getItem('english-training-v1'));const {subtopics}=await import('/data/course.mjs');const {validateState}=await import('/engine.mjs');for(const t of subtopics.find(u=>u.id==='T03-review').banks.flatMap(b=>b.tasks))s.learning['T03-review'].answers[t.id]=t.answer;window.__t03Complete=JSON.stringify(validateState(s));})()`);
 await importSynthetic('window.__t03Complete');await route('module/T03','#legacy-practice');assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),121);assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),365);await command('Page.reload');await poll(()=>evaluate('document.querySelector(".topic-progress progress")?.value===121'),'T03 complete published work persists');
 assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('Заполнение и отправка, не оценка знаний'));assert.equal(await evaluate('document.querySelector("#topic-development")'),null);
 await route('course','#module-list');assert((await evaluate('[...document.querySelectorAll(".module-row")].find(n=>n.textContent.includes("T03")).textContent')).includes('Общий прогресс работы'));
 await route('plan','[data-topic-progress="T03"]');assert((await evaluate('document.querySelector("[data-topic-progress=T03]").textContent')).includes('Общий прогресс работы'));
 await route('home','.hero');assert((await evaluate('document.querySelector("main").textContent')).includes('Частично опубликовано: 1'));
 await evaluate(`{const s=JSON.parse(localStorage.getItem('english-training-v1')),old=JSON.parse(${JSON.stringify(original)});if(JSON.stringify(s.cards)!==JSON.stringify(old.cards))throw Error('Changed old T03 SRS');if(JSON.stringify(s.navigation.pages['module/T03'].fields)!==JSON.stringify(old.navigation.pages['module/T03'].fields))throw Error('Lost T03 archive');if(s.learning['T03-review'].attempts.length!==2)throw Error('Lost T03 history');if(s.drafts.T03!==old.drafts.T03)throw Error('Lost T03 old notes');}`);
 await checkT03Api({evaluate,route,command,poll,screenshot,delay,importSynthetic});
 await checkT03Testing({evaluate,route,command,poll,screenshot,delay,importSynthetic});
 console.log('T03 smoke passed: nine banks, A/B exams, full original/revised reviews, 0→16→121 review steps preserved within 365, old archive/SRS, nested drafts, reference and mobile.');
}

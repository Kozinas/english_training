import assert from 'node:assert/strict';

// Only browser-smoke's isolated synthetic profile, never real learner data.
export async function checkC203({evaluate,route,command,poll,screenshot,delay,importSynthetic}){
 const fill=async(selector,value)=>evaluate(`{const el=document.querySelector(${JSON.stringify(selector)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));}`);
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
 await route('settings','#profile');
 await evaluate(`(async()=>{
  const {freshState,reviewCard}=await import('/engine.mjs');const s=freshState();
  s.moduleProgress.C203={selfChecked:true,date:'2026-09-22'};s.drafts.C203='Synthetic original notes for C203.';
  s.cards['C203-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
  s.navigation.pages['module/C203']={scroll:0,focus:'drill1',fields:{drill0:'no',drill1:'отчасти\\nOriginal answer',drill2:'that'},details:[]};
  window.__c203Import=JSON.stringify(s);
 })()`);
 const original=await evaluate('window.__c203Import');await importSynthetic('window.__c203Import');
 await route('module/C203','#legacy-practice');
 assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),1);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),97);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),0,'no inherited new progress');
 assert.equal(await evaluate('document.querySelector("#draft").value'),'Synthetic original notes for C203.');
 assert.equal(await evaluate('document.querySelector("#drill1").value'),'отчасти\nOriginal answer');
 assert(await evaluate('document.querySelector("#drill1").readOnly'));
 await evaluate('document.querySelector("#legacy-practice").open=true');
 await route('home','.hero');await route('module/C203','#legacy-practice');
 await command('Page.reload');await poll(()=>evaluate('document.querySelector("#drill2")?.value==="that"'),'C203 archive reload');
 assert((await evaluate('document.querySelector("#topic-development").textContent')).includes('Акценты'));
 assert((await evaluate('document.querySelector(".topic-progress").textContent')).includes('опубликованной части'));
 await screenshot('c203-topic-desktop.png');
 const units=await evaluate(`(async()=>{const {subtopics}=await import('/data/course.mjs');return subtopics.filter(u=>u.topic==='C203')})()`);
 for(const u of units){
  await route(`unit/${u.id}/explain`,'#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>4500'));
  await route(`unit/${u.id}/examples`,'#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>1200'));
  for(const b of u.banks){
   await route(`unit/${u.id}/${b.id}`,'#check-bank');
   assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),b.tasks.length,u.id+'/'+b.id);
   assert(await evaluate('new Set([...document.querySelectorAll("[id]")].map(n=>n.id)).size===document.querySelectorAll("[id]").length'));
   if(b.kind==='listening')assert(!(await evaluate('document.querySelector("#unit-content").textContent')).includes(b.passage.slice(0,45)),'new listening text hidden');
   if(b.id==='transfer'){
    assert.equal(await evaluate('document.querySelector(".bank-resources a").href'),'https://learnenglish.britishcouncil.org/free-resources/listening/c1/challenges-work');
    assert((await evaluate('document.querySelector("#unit-content .notice").textContent')).includes('не засчитывает аудирование'));
    assert.equal(await evaluate('document.querySelectorAll("#unit-content audio,#unit-content iframe,#listen-bank").length'),0,'no autoplay or synthetic substitution for external audio');
   }
   if(b===u.banks[0]){
    const t=b.tasks[0];await fill('#answer-'+t.id,'synthetic wrong answer');await evaluate('document.querySelector("#check-bank").click()');
    assert(!(await evaluate(`document.querySelector('#feedback-${t.id}').textContent`)).startsWith('Верно'));
    await fill('#answer-'+t.id,t.answer.split('|')[0]);await evaluate('document.querySelector("#check-bank").click()');
    assert((await evaluate(`document.querySelector('#feedback-${t.id}').textContent`)).startsWith('Верно'));
   }
   if(b.kind==='listening'&&u.id==='C203-inference'){
    await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(b.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#check-bank').click();}`);
    assert((await evaluate('document.querySelector("#bank-transcript").textContent')).includes(b.passage.slice(0,45)),'audio script opens after complete checked practice');
   }
  }
  await route(`unit/${u.id}/test`,'#unit-test');
  assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),u.tests[0].tasks.length);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),0,'keys hidden until full submission');
  const paragraph=u.tests[0].tasks.find(t=>t.kind==='text'&&/100–140|220–280/.test(t.prompt));
  await fill('#answer-'+paragraph.id,'Synthetic long-form draft.\nContinue after a break.');
  await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-${paragraph.id}')?.value==='Synthetic long-form draft.\\nContinue after a break.'`),'C203 paragraph persists');
  await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=course]").click()');
  await poll(()=>evaluate(`document.querySelector('main').dataset.route==='unit/${u.id}/test'`),'C203 nested route remembered');await delay(120);
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),u.tests[0].tasks.length);
  assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),u.tests[0].tasks.filter(t=>['text','speech'].includes(t.kind)).length,'all open responses await review');
  assert(await evaluate('document.querySelector("#test-history").textContent.includes("Ожидает содержательной проверки")'));
  await evaluate('document.querySelector("#new-unit-test").click()');assert((await evaluate('document.querySelector("#unit-content h3").textContent')).includes('B'));
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(u.tests[1].tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),u.tests.reduce((n,t)=>n+t.tasks.length,0),'both original attempts remain in history');
  assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),u.tests.flatMap(t=>t.tasks).filter(t=>['text','speech'].includes(t.kind)).length,'second variant does not auto-grade open work');
 }
 await route('module/C203','#legacy-practice');
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),14,'13 practice responses + 1 test; repeated variants and old archive add nothing');
 for(const [id,count,query] of [['context-inference',24,'ironic']]){
  await route('references/'+id,'#reference-search');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),count);
  await fill('#reference-search',query);const filtered=await evaluate('document.querySelectorAll("#reference-rows tr").length');assert(filtered>0&&filtered<count);
  await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=references]").click()');
  await poll(()=>evaluate(`document.querySelector('#reference-search')?.value===${JSON.stringify(query)}`),'C203 reference query restored');
  assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),filtered);
  await fill('#reference-search','');await screenshot('c203-'+id+'-desktop.png');
 }
 await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 for(const [path,selector,name] of [['module/C203','#legacy-practice','topic'],['unit/C203-inference/production','#check-bank','writing'],['unit/C203-inference/reading','#check-bank','reading'],['unit/C203-inference/transfer','#check-bank','external'],['references/context-inference','#reference-search','reference']]){
  await route(path,selector);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'C203 mobile overflow '+path);
  if(name==='writing')await evaluate('document.querySelector("textarea[data-task]").closest(".task").scrollIntoView({block:"start"})');
  if(name==='reading')await evaluate('document.querySelector(".reading").scrollIntoView({block:"start"})');
  if(name==='external')await evaluate('document.querySelector("#unit-content .notice").scrollIntoView({block:"start"})');
  if(name.includes('reference'))await evaluate('document.querySelector(".table-wrap").scrollIntoView({block:"start"})');
  await screenshot('c203-'+name+'-mobile.png');
 }
 await evaluate(`(async()=>{const {validateState}=await import('/engine.mjs');const s=JSON.parse(localStorage.getItem('english-training-v1'));validateState(s);const old=JSON.parse(${JSON.stringify(original)});if(JSON.stringify(s.cards)!==JSON.stringify(old.cards))throw Error('C203 changed SRS');if(s.navigation.pages['module/C203'].fields.drill1!==old.navigation.pages['module/C203'].fields.drill1)throw Error('Lost C203 old answer');})()`);
 await route('settings','#profile');
 await evaluate(`(async()=>{
  const s=JSON.parse(localStorage.getItem('english-training-v1'));
  const {subtopics}=await import('/data/course.mjs');const {questions,assessmentVersion}=await import('/data/assessment.mjs');
  const u=subtopics.find(u=>u.id==='C203-inference');
  for(const t of u.banks.flatMap(b=>b.tasks))s.learning[u.id].answers[t.id]=t.answer;
  s.placement={assessmentVersion,date:'2026-09-26T12:00:00Z',answers:Object.fromEntries(questions.map(q=>[q.id,q.answer]))};
  window.__c203Complete=JSON.stringify(s);
 })()`);
 await importSynthetic('window.__c203Complete');
 await route('module/C203','#topic-development');
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),97);
 assert((await evaluate('document.querySelector(".progress-note").textContent')).includes('100% не означает завершение всего топика'));
 await route('course','#module-list');
 assert((await evaluate('[...document.querySelectorAll(".module-row")].find(n=>n.textContent.includes("C203")).textContent')).includes('Частично'));
 await route('plan','[data-topic-progress="C203"]');
 assert((await evaluate('document.querySelector("[data-topic-progress=C203]").textContent')).includes('опубликованной части'));
 await route('home','.hero');
 assert((await evaluate('document.querySelector("main").textContent')).includes('Частично опубликовано: 1'));
 console.log('C203 smoke passed: one published unit, eight banks, nested navigation, multiline exams, pending reviews, old archive/SRS, partial-scope notices, one reference and mobile layout.');
}

import assert from 'node:assert/strict';

// Only browser-smoke's isolated synthetic profile, never real learner data.
export async function checkB201({evaluate,route,command,poll,screenshot,delay,importSynthetic}){
 const fill=async(selector,value)=>evaluate(`{const el=document.querySelector(${JSON.stringify(selector)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));}`);
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
 await route('settings','#profile');
 await evaluate(`(async()=>{
  const {freshState,reviewCard}=await import('/engine.mjs');const s=freshState();
  s.moduleProgress.B201={selfChecked:true,date:'2026-09-22'};s.drafts.B201='Synthetic original notes for B201.';
  s.cards['B201-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
  s.navigation.pages['module/B201']={scroll:0,focus:'drill1',fields:{drill0:'finished',drill1:'working\\nOriginal answer',drill2:'waiting'},details:[]};
  window.__b201Import=JSON.stringify(s);
 })()`);
 const original=await evaluate('window.__b201Import');await importSynthetic('window.__b201Import');
 await route('module/B201','#legacy-practice');
 assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),3);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),259);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),0,'no inherited new progress');
 assert.equal(await evaluate('document.querySelector("#draft").value'),'Synthetic original notes for B201.');
 assert.equal(await evaluate('document.querySelector("#drill1").value'),'working\nOriginal answer');
 assert(await evaluate('document.querySelector("#drill1").readOnly'));
 await evaluate('document.querySelector("#legacy-practice").open=true');
 await route('home','.hero');await route('module/B201','#legacy-practice');
 await command('Page.reload');await poll(()=>evaluate('document.querySelector("#drill2")?.value==="waiting"'),'B201 archive reload');
 await screenshot('b201-topic-desktop.png');
 const units=await evaluate(`(async()=>{const {subtopics}=await import('/data/course.mjs');return subtopics.filter(u=>u.topic==='B201')})()`);
 for(const u of units){
  await route(`unit/${u.id}/explain`,'#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>4500'));
  await route(`unit/${u.id}/examples`,'#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>1200'));
  for(const b of u.banks){
   await route(`unit/${u.id}/${b.id}`,'#check-bank');
   assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),b.tasks.length,u.id+'/'+b.id);
   assert(await evaluate('new Set([...document.querySelectorAll("[id]")].map(n=>n.id)).size===document.querySelectorAll("[id]").length'));
   if(b.kind==='listening')assert(!(await evaluate('document.querySelector("#unit-content").textContent')).includes(b.passage.slice(0,45)),'new listening text hidden');
   if(b===u.banks[0]){
    const t=b.tasks[0];await fill('#answer-'+t.id,'synthetic wrong answer');await evaluate('document.querySelector("#check-bank").click()');
    assert(!(await evaluate(`document.querySelector('#feedback-${t.id}').textContent`)).startsWith('Верно'));
    await fill('#answer-'+t.id,t.answer.split('|')[0]);await evaluate('document.querySelector("#check-bank").click()');
    assert((await evaluate(`document.querySelector('#feedback-${t.id}').textContent`)).startsWith('Верно'));
   }
   if(b.kind==='listening'&&u.id==='B201-past'){
    await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(b.tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#check-bank').click();}`);
    assert((await evaluate('document.querySelector("#bank-transcript").textContent')).includes(b.passage.slice(0,45)),'audio script opens after complete checked practice');
   }
  }
  await route(`unit/${u.id}/test`,'#unit-test');
  assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),u.tests[0].tasks.length);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),0,'keys hidden until full submission');
  const paragraph=u.tests[0].tasks.find(t=>t.kind==='text'&&t.prompt.includes('180–220'));
  await fill('#answer-'+paragraph.id,'Synthetic long-form draft.\nContinue after a break.');
  await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-${paragraph.id}')?.value==='Synthetic long-form draft.\\nContinue after a break.'`),'B201 paragraph persists');
  await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=course]").click()');
  await poll(()=>evaluate(`document.querySelector('main').dataset.route==='unit/${u.id}/test'`),'B201 nested route remembered');await delay(120);
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),u.tests[0].tasks.length);
  assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),u.tests[0].tasks.filter(t=>['text','speech'].includes(t.kind)).length,'all open responses await review');
  assert(await evaluate('document.querySelector("#test-history").textContent.includes("Ожидает содержательной проверки")'));
  await evaluate('document.querySelector("#new-unit-test").click()');assert((await evaluate('document.querySelector("#unit-content h3").textContent')).includes('B'));
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(u.tests[1].tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),u.tests.reduce((n,t)=>n+t.tasks.length,0),'both original attempts remain in history');
  assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),u.tests.flatMap(t=>t.tasks).filter(t=>['text','speech'].includes(t.kind)).length,'second variant does not auto-grade open work');
 }
 await route('module/B201','#legacy-practice');
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),16,'13 practice responses + 3 tests; repeated variants and old archive add nothing');
 for(const [id,count,query] of [['past-duration',27,'since'],['future-frame',29,'until'],['future-result',42,'by']]){
  await route('references/'+id,'#reference-search');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),count);
  await fill('#reference-search',query);const filtered=await evaluate('document.querySelectorAll("#reference-rows tr").length');assert(filtered>0&&filtered<count);
  await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=references]").click()');
  await poll(()=>evaluate(`document.querySelector('#reference-search')?.value===${JSON.stringify(query)}`),'B201 reference query restored');
  assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),filtered);
  await fill('#reference-search','');await screenshot('b201-'+id+'-desktop.png');
 }
 await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 for(const [path,selector,name] of [['module/B201','#legacy-practice','topic'],['unit/B201-result/production','#check-bank','writing'],['unit/B201-frame/reading','#check-bank','reading'],['references/past-duration','#reference-search','reference'],['references/future-frame','#reference-search','words-reference'],['references/future-result','#reference-search','email-reference']]){
  await route(path,selector);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'B201 mobile overflow '+path);
  if(name==='writing')await evaluate('document.querySelector("textarea[data-task]").closest(".task").scrollIntoView({block:"start"})');
  if(name==='reading')await evaluate('document.querySelector(".reading").scrollIntoView({block:"start"})');
  if(name.includes('reference'))await evaluate('document.querySelector(".table-wrap").scrollIntoView({block:"start"})');
  await screenshot('b201-'+name+'-mobile.png');
 }
 await evaluate(`(async()=>{const {validateState}=await import('/engine.mjs');const s=JSON.parse(localStorage.getItem('english-training-v1'));validateState(s);const old=JSON.parse(${JSON.stringify(original)});if(JSON.stringify(s.cards)!==JSON.stringify(old.cards))throw Error('B201 changed SRS');if(s.navigation.pages['module/B201'].fields.drill1!==old.navigation.pages['module/B201'].fields.drill1)throw Error('Lost B201 old answer');})()`);
 console.log('B201 smoke passed: three units, 21 banks, nested navigation, multiline exams, pending reviews, old archive/SRS, three references and mobile layout.');
}

import assert from 'node:assert/strict';

// Only browser-smoke's isolated synthetic profile, never real learner data.
export async function checkA105({evaluate,route,command,poll,screenshot,delay,importSynthetic}){
 const fill=async(selector,value)=>evaluate(`{const el=document.querySelector(${JSON.stringify(selector)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));}`);
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
 await route('settings','#profile');
 await evaluate(`(async()=>{
  const {freshState,reviewCard}=await import('/engine.mjs');const s=freshState();
  s.moduleProgress.A105={selfChecked:true,date:'2026-09-22'};s.drafts.A105='Synthetic original notes for A105.';
  s.cards['A105-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
  s.navigation.pages['module/A105']={scroll:0,focus:'drill1',fields:{drill0:'swim',drill1:'me\\nOriginal answer',drill2:'mine'},details:[]};
  window.__a105Import=JSON.stringify(s);
 })()`);
 const original=await evaluate('window.__a105Import');await importSynthetic('window.__a105Import');
 await route('module/A105','#legacy-practice');
 assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),4);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),332);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),0,'no inherited new progress');
 assert.equal(await evaluate('document.querySelector("#draft").value'),'Synthetic original notes for A105.');
 assert.equal(await evaluate('document.querySelector("#drill1").value'),'me\nOriginal answer');
 assert(await evaluate('document.querySelector("#drill1").readOnly'));
 await evaluate('document.querySelector("#legacy-practice").open=true');
 await route('home','.hero');await route('module/A105','#legacy-practice');
 await command('Page.reload');await poll(()=>evaluate('document.querySelector("#drill2")?.value==="mine"'),'A105 archive reload');
 await screenshot('a105-topic-desktop.png');
 const units=await evaluate(`(async()=>{const {subtopics}=await import('/data/course.mjs');return subtopics.filter(u=>u.topic==='A105')})()`);
 for(const u of units){
  await route(`unit/${u.id}/explain`,'#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>4000'));
  await route(`unit/${u.id}/examples`,'#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>1200'));
  for(const b of u.banks){
   await route(`unit/${u.id}/${b.id}`,'#check-bank');
   assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),b.tasks.length,u.id+'/'+b.id);
   assert(await evaluate('new Set([...document.querySelectorAll("[id]")].map(n=>n.id)).size===document.querySelectorAll("[id]").length'));
   if(b.kind==='listening')assert(!(await evaluate('document.querySelector("#unit-content").textContent')).includes(b.passage.slice(0,45)),'new listening text hidden');
   if(b===u.banks[0]){
    const t=b.tasks[0];await fill('#answer-'+t.id,t.answer.split('|')[0]);await evaluate('document.querySelector("#check-bank").click()');
    assert((await evaluate(`document.querySelector('#feedback-${t.id}').textContent`)).startsWith('Верно'));
   }
  }
  await route(`unit/${u.id}/test`,'#unit-test');
  assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),u.tests[0].tasks.length);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),0,'keys hidden until full submission');
  const paragraph=u.tests[0].tasks.find(t=>t.kind==='text'&&t.prompt.includes('80–110'));
  await fill('#answer-'+paragraph.id,'Synthetic long-form draft.\nContinue after a break.');
  await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-${paragraph.id}')?.value==='Synthetic long-form draft.\\nContinue after a break.'`),'A105 paragraph persists');
  await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=course]").click()');
  await poll(()=>evaluate(`document.querySelector('main').dataset.route==='unit/${u.id}/test'`),'A105 nested route remembered');await delay(120);
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),u.tests[0].tasks.length);
  assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),u.tests[0].tasks.filter(t=>['text','speech'].includes(t.kind)).length,'all open responses await review');
  assert(await evaluate('document.querySelector("#test-history").textContent.includes("Ожидает содержательной проверки")'));
  await evaluate('document.querySelector("#new-unit-test").click()');assert((await evaluate('document.querySelector("#unit-content h3").textContent')).includes('B'));
 }
 await route('module/A105','#legacy-practice');
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),8,'4 practice responses + 4 tests, not drafts or old archive');
 for(const [id,count,query] of [['personal-pronouns',7,'hers'],['future-choices',43,'going to']]){
  await route('references/'+id,'#reference-search');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),count);
  await fill('#reference-search',query);const filtered=await evaluate('document.querySelectorAll("#reference-rows tr").length');assert(filtered>0&&filtered<count);
  await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=references]").click()');
  await poll(()=>evaluate(`document.querySelector('#reference-search')?.value===${JSON.stringify(query)}`),'A105 reference query restored');
  assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),filtered);
  await fill('#reference-search','');await screenshot('a105-'+id+'-desktop.png');
 }
 await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 for(const [path,selector,name] of [['module/A105','#legacy-practice','topic'],['unit/A105-can/production','#check-bank','writing'],['references/personal-pronouns','#reference-search','pronouns'],['references/future-choices','#reference-search','future']]){
  await route(path,selector);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A105 mobile overflow '+path);await screenshot('a105-'+name+'-mobile.png');
 }
 await evaluate(`(async()=>{const {validateState}=await import('/engine.mjs');const s=JSON.parse(localStorage.getItem('english-training-v1'));validateState(s);const old=JSON.parse(${JSON.stringify(original)});if(JSON.stringify(s.cards)!==JSON.stringify(old.cards))throw Error('A105 changed SRS');if(s.navigation.pages['module/A105'].fields.drill1!==old.navigation.pages['module/A105'].fields.drill1)throw Error('Lost A105 old answer');})()`);
 console.log('A105 smoke passed: four units, 25 banks, nested navigation, multiline exams, pending reviews, old archive/SRS, two references and mobile layout.');
}

import assert from 'node:assert/strict';

// This helper runs only inside browser-smoke's temporary synthetic profile.
export async function checkA104({evaluate,route,command,poll,screenshot,delay,importSynthetic}){
 const fill=async(selector,value)=>evaluate(`{const el=document.querySelector(${JSON.stringify(selector)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));}`);
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
 await route('settings','#profile');
 await evaluate(`(async()=>{
  const {freshState,reviewCard}=await import('/engine.mjs');const s=freshState();
  s.moduleProgress.A104={selfChecked:true,date:'2026-09-22'};s.drafts.A104='Synthetic original topic notes.';
  s.cards['A104-v1']=reviewCard(null,'good',Date.UTC(2026,8,22));
  s.navigation.pages['module/A104']={scroll:0,focus:'drill0',fields:{drill0:'went\\nOriginal old answer',drill1:'call',drill2:'were'},details:[]};
  window.__a104Import=JSON.stringify(s);
 })()`);
 const original=await evaluate('window.__a104Import');
 await importSynthetic('window.__a104Import');
 await route('module/A104','#legacy-practice');
 assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),3);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").max'),245);
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),0,'old self-check adds no new work');
 assert.equal(await evaluate('document.querySelector("#draft").value'),'Synthetic original topic notes.');
 assert.equal(await evaluate('document.querySelector("#drill0").value'),'went\nOriginal old answer');
 assert(await evaluate('document.querySelector("#drill0").readOnly'),'archive is distinct from new exercises');
 await evaluate('document.querySelector("#legacy-practice").open=true');
 await route('home','.hero');await route('module/A104','#legacy-practice');
 assert.equal(await evaluate('document.querySelector("#drill0").value'),'went\nOriginal old answer');
 await command('Page.reload');await poll(()=>evaluate('document.querySelector("#drill1")?.value==="call"'),'legacy archive after reload');
 await screenshot('a104-topic-desktop.png');

 const units=await evaluate(`(async()=>{const {subtopics}=await import('/data/course.mjs');return subtopics.filter(u=>u.topic==='A104')})()`);
 for(const u of units){
  await route(`unit/${u.id}/explain`,'#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>4000'));
  await route(`unit/${u.id}/examples`,'#unit-content');assert(await evaluate('document.querySelector("#unit-content").textContent.length>1500'));
  for(const b of u.banks){
   await route(`unit/${u.id}/${b.id}`,'#check-bank');
   assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),b.tasks.length,u.id+'/'+b.id);
   assert(await evaluate('new Set([...document.querySelectorAll("[id]")].map(n=>n.id)).size===document.querySelectorAll("[id]").length'));
   if(b.kind==='listening')assert(!(await evaluate('document.querySelector("#unit-content").textContent')).includes(b.passage.slice(0,45)),'audio text hidden before attempt');
   if(b===u.banks[0]){
    const t=b.tasks[0];await fill('#answer-'+t.id,t.answer.split('|')[0]);await evaluate('document.querySelector("#check-bank").click()');
    assert((await evaluate(`document.querySelector('#feedback-${t.id}').textContent`)).startsWith('Верно'));
   }
  }
  await route(`unit/${u.id}/test`,'#unit-test');
  assert.equal(await evaluate('document.querySelectorAll("[data-task]").length'),20);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),0,'exam key hidden before submit');
  const paragraph=u.tests[0].tasks.find(t=>t.kind==='text'&&t.prompt.includes('80–110'));
  await fill('#answer-'+paragraph.id,'Synthetic paragraph.\nI will finish it later.');
  await command('Page.reload');await poll(()=>evaluate(`document.querySelector('#answer-${paragraph.id}')?.value==='Synthetic paragraph.\\nI will finish it later.'`),'multiline exam draft');
  await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=course]").click()');
  await poll(()=>evaluate(`document.querySelector('main').dataset.route==='unit/${u.id}/test'`),'sidebar resumes A104 test');
  await delay(120);
  await evaluate(`{const answers=${JSON.stringify(Object.fromEntries(u.tests[0].tasks.map(t=>[t.id,t.answer.split('|')[0]])))};for(const el of document.querySelectorAll('[data-task]')){el.value=answers[el.dataset.task];el.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#unit-test').requestSubmit();}`);
  assert.equal(await evaluate('document.querySelectorAll(".answer-review").length'),20);
  const openCount=u.tests[0].tasks.filter(t=>['text','speech'].includes(t.kind)).length;
  assert.equal(await evaluate('document.querySelectorAll("[data-review]").length'),openCount,'all open tasks pending teacher review');
  assert(await evaluate('document.querySelector("#test-history").textContent.includes("Ожидает содержательной проверки")'));
  await evaluate('document.querySelector("#new-unit-test").click()');
  assert((await evaluate('document.querySelector("#unit-content h3").textContent')).includes('B'),'next fresh variant B');
 }
 await route('module/A104','#legacy-practice');
 assert.equal(await evaluate('document.querySelector(".topic-progress progress").value'),6,'3 practice answers + 3 submitted tests, no draft or archive steps');
 assert.equal(await evaluate('document.querySelector("#drill2").value'),'were');
 await route('references/past-simple','#reference-search');
 assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),84);
 await fill('#reference-search','studied');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),1);
 await route('home','.hero');await evaluate('document.querySelector("aside a[data-section=references]").click()');
 await poll(()=>evaluate('document.querySelector("#reference-search")?.value==="studied"'),'reference filter retained');
 await fill('#reference-search','');
 await screenshot('a104-reference-desktop.png');

 await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 for(const [path,selector,name] of [['module/A104','#legacy-practice','topic'],['unit/A104-did/production','#check-bank','writing'],['references/past-simple','#reference-search','reference']]){
  await route(path,selector);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A104 mobile overflow '+path);
  await screenshot('a104-'+name+'-mobile.png');
 }
 await evaluate(`(async()=>{const {validateState}=await import('/engine.mjs');const s=JSON.parse(localStorage.getItem('english-training-v1'));validateState(s);const old=JSON.parse(${JSON.stringify(original)});if(JSON.stringify(s.cards)!==JSON.stringify(old.cards))throw Error('A104 changed SRS');if(s.navigation.pages['module/A104'].fields.drill0!==old.navigation.pages['module/A104'].fields.drill0)throw Error('Lost old answer');})()`);
 console.log('A104 smoke passed: three units, 18 banks, tests/resume/pending reviews, old drill archive, new progress, reference search, SRS and mobile layout.');
}

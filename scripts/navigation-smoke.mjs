import assert from 'node:assert/strict';

// Called by browser-smoke in its isolated synthetic profile, never a learner's.
export async function checkNavigation({evaluate,route,command,poll,screenshot,delay,base,importSynthetic}){
 const at=async(path,selector)=>poll(()=>evaluate(`document.querySelector('main').dataset.route===${JSON.stringify(path)}&&!!document.querySelector(${JSON.stringify(selector)})`),'navigation to '+path);
 const menu=async(section,path,selector)=>{await evaluate(`document.querySelector('aside a[data-section="${section}"]').click()`);await at(path,selector);await delay(150);};
 const fill=async(selector,value,event='input')=>evaluate(`{const field=document.querySelector(${JSON.stringify(selector)});field.value=${JSON.stringify(value)};field.dispatchEvent(new Event(${JSON.stringify(event)},{bubbles:true}));}`);
 const scroll=async(y)=>{await evaluate(`window.scrollTo(0,${y})`);await delay(160);return evaluate('window.scrollY');};
 const sameScroll=async(y,label)=>{await delay(180);assert(Math.abs(await evaluate('window.scrollY')-y)<5,label);};
 await command('Emulation.setDeviceMetricsOverride',{width:1365,height:900,deviceScaleFactor:1,mobile:false});

 await route('course','#module-list');await fill('#level','Pre-A1','change');await fill('#search','P0');
 assert.equal(await evaluate('document.querySelectorAll(".module-row").length'),4);
 const courseScroll=await scroll(620);
 await route('unit/P01-introductions/writing','#check-bank');
 await fill('[data-task]','Synthetic navigation draft.\nI will finish later.');
 await evaluate('document.querySelector("[data-task]").focus();window.scrollTo(0,950)');
 const unitScroll=await evaluate('window.scrollY');
 // Leave immediately, before the scroll debounce fires.
 await menu('home','home','.hero');
 assert.equal(await evaluate('document.querySelector("aside a[data-section=course]").hash'),'#unit/P01-introductions/writing');
 const homeScroll=await scroll(320);
 await menu('course','unit/P01-introductions/writing','#check-bank');
 assert.equal(await evaluate('document.querySelector("[data-task]").value'),'Synthetic navigation draft.\nI will finish later.');
 await sameScroll(unitScroll,'sidebar restores nested route and exact scroll');
 assert.equal(await evaluate('document.activeElement.id'),await evaluate('document.querySelector("[data-task]").id'),'focused answer restored');
 await command('Page.reload');await at('unit/P01-introductions/writing','#check-bank');await sameScroll(unitScroll,'reload restores nested route and scroll');
 await menu('home','home','.hero');await sameScroll(homeScroll,'home remembers its own position');
 await route('course','#module-list');assert.equal(await evaluate('document.querySelector("#search").value'),'P0');
 assert.equal(await evaluate('document.querySelector("#level").value'),'Pre-A1');assert.equal(await evaluate('document.querySelectorAll(".module-row").length'),4);
 await sameScroll(courseScroll,'course root has its own position, independent of unit');
 await screenshot('navigation-course-desktop.png');
 await fill('#search','');await fill('#level','all','change');

 await route('references/irregular','#reference-rows');await fill('#reference-search','went');
 const irregularRows=await evaluate('document.querySelectorAll("#reference-rows tr").length');
 await route('references/numbers-time','#reference-rows');await fill('#reference-search','Monday');
 await menu('home','home','.hero');await menu('references','references/numbers-time','#reference-rows');
 assert.equal(await evaluate('document.querySelector("#reference-search").value'),'Monday');
 assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),1);
 await route('references/irregular','#reference-rows');assert.equal(await evaluate('document.querySelector("#reference-search").value'),'went');
 assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),irregularRows);

 await route('module/P01','.topic-progress');await evaluate('document.querySelector(".topic-progress details").open=true');
 await delay(100);const expandedScroll=await scroll(520);
 await route('library','h1');const libraryScroll=await scroll(240);
 await evaluate('history.back()');await at('module/P01','.topic-progress');await sameScroll(expandedScroll,'browser Back restores prior page');
 assert(await evaluate('document.querySelector(".topic-progress details").open'),'expanded explanation remains open');
 await evaluate('history.forward()');await at('library','h1');await sameScroll(libraryScroll,'browser Forward restores next page');

 await route('module/B105','#drill0');await fill('#drill0','A legacy exercise draft.');
 await route('home','.hero');await menu('course','module/B105','#drill0');
 assert.equal(await evaluate('document.querySelector("#drill0").value'),'A legacy exercise draft.');

 await route('assessment','#prod-writing');await fill('#prod-writing','An unfinished diagnostic paragraph.\nContinue later.');
 await evaluate('document.querySelector("#prod-writing").focus()');const assessmentScroll=await scroll(2000);
 await menu('home','home','.hero');await menu('assessment','assessment','#prod-writing');
 assert(await evaluate('document.querySelector("#prod-writing").value.includes("Continue later")'));await sameScroll(assessmentScroll,'assessment scroll');

 await route('settings','#profile');const originalGoal=await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).profile.goal');
 await fill('#goal','Unsaved synthetic profile goal');await fill('#minutes','');await fill('#evidence-writing','Unfinished review notes.');
 await route('home','.hero');await menu('settings','settings','#profile');
 assert.equal(await evaluate('document.querySelector("#goal").value'),'Unsaved synthetic profile goal');assert.equal(await evaluate('document.querySelector("#minutes").value'),'');
 assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).profile.goal'),originalGoal,'draft profile must not be applied');
 await command('Page.reload');await at('settings','#profile');assert.equal(await evaluate('document.querySelector("#minutes").value'),'');

 await route('speech','#target');await fill('#target','A custom phrase for tomorrow.');await fill('#transcript','Unfinished local transcript.');
 await evaluate('document.querySelector("#consent").checked=true');
 await route('home','.hero');await menu('speech','speech','#target');
 assert.equal(await evaluate('document.querySelector("#target").value'),'A custom phrase for tomorrow.');
 assert.equal(await evaluate('document.querySelector("#transcript").value'),'Unfinished local transcript.');
 assert.equal(await evaluate('document.querySelector("#consent").checked'),false,'consent must be renewed');
 assert(await evaluate('document.querySelector("#speech-status").textContent.includes("Микрофон выключен")||document.querySelector("#speech-status").textContent.includes("не поддерживается")'));

 await route('cards','#card-level');await fill('#card-level','A1','change');await fill('#card-batch','3','change');
 await evaluate('document.querySelector("#flip-card").click()');
 const cardWord=await evaluate('document.querySelector(".card-front .word").textContent');
 const reviews=await evaluate('JSON.stringify(JSON.parse(localStorage.getItem("english-training-v1")).cards)');
 await route('home','.hero');await menu('cards','cards','#flip-card');
 assert.equal(await evaluate('document.querySelector("#card-level").value'),'A1');assert.equal(await evaluate('document.querySelector("#card-batch").value'),'3');
 assert.equal(await evaluate('document.querySelector(".card-front .word").textContent'),cardWord);
 assert.equal(await evaluate('document.querySelector("#flip-card").getAttribute("aria-pressed")'),'true');
 await command('Page.reload');await at('cards','#flip-card');
 assert.equal(await evaluate('document.querySelector("#flip-card").getAttribute("aria-pressed")'),'true');
 assert.equal(await evaluate('JSON.stringify(JSON.parse(localStorage.getItem("english-training-v1")).cards)'),reviews,'restoring a card never reviews it');

 await route('unit/P01-be/test','#test-history');
 await fill('[data-review] [name=reviewer]','Synthetic navigation reviewer');await fill('[data-review] [name=evidence]','Unsent feedback draft.');
 await route('home','.hero');await menu('course','unit/P01-be/test','#test-history');
 assert.equal(await evaluate('document.querySelector("[data-review] [name=evidence]").value'),'Unsent feedback draft.');
 assert.equal(await evaluate('document.querySelector("[data-review] [name=reviewer]").value'),'Synthetic navigation reviewer');

 await command('Page.navigate',{url:base});await at('unit/P01-be/test','#test-history');
 assert.equal(await evaluate('location.hash'),'#unit/P01-be/test','opening bare URL restores last screen');
 await command('Page.navigate',{url:base+'/#home'});await at('home','.hero');
 assert.equal(await evaluate('location.hash'),'#home','explicit URL wins over saved route');
 await evaluate('document.querySelector(".skip").click()');assert.equal(await evaluate('location.hash'),'#home');assert.equal(await evaluate('document.activeElement.id'),'main');
 await evaluate('location.hash="not-a-route"');await at('home','.hero');assert.equal(await evaluate('location.hash'),'#home','invalid URL is canonicalised safely');
 await evaluate('location.hash="unit/P01-be"');await at('unit/P01-be/explain','#unit-content');assert.equal(await evaluate('location.hash'),'#unit/P01-be/explain');

 // A real UI export/reset/import round trip includes navigation and drafts.
 await route('settings','#profile');
 await evaluate(`(async()=>{const originalURL=URL.createObjectURL,originalClick=HTMLAnchorElement.prototype.click;try{URL.createObjectURL=blob=>{window.__navigationBlob=blob;return originalURL(blob)};HTMLAnchorElement.prototype.click=function(){};document.querySelector('#export').click();}finally{URL.createObjectURL=originalURL;HTMLAnchorElement.prototype.click=originalClick;}window.__navigationExport=await window.__navigationBlob.text();const {validateState}=await import('/engine.mjs');validateState(JSON.parse(window.__navigationExport));const originalConfirm=window.confirm;window.confirm=()=>true;try{document.querySelector('#reset').click();}finally{window.confirm=originalConfirm;}})()`);
 await route('home','.hero');assert.equal(await evaluate('document.querySelector("aside a[data-section=course]").hash'),'#course','reset removes nested destinations');
 await route('settings','#profile');await importSynthetic('window.__navigationExport');
 await menu('course','unit/P01-be/explain','#unit-content');
 await menu('speech','speech','#target');assert.equal(await evaluate('document.querySelector("#target").value'),'A custom phrase for tomorrow.');

 await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 const mobileScroll=await scroll(580);await menu('home','home','.hero');await menu('speech','speech','#target');await sameScroll(mobileScroll,'mobile sidebar restores position');
 assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'navigation does not widen mobile page');await screenshot('navigation-speech-mobile.png');
 console.log('Navigation smoke passed: section memory, per-route scroll/drafts/filters, Back/Forward, reload/bare URL/deep links, cards, safe consent, export/reset/import and mobile.');
}

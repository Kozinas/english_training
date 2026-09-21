// Optional end-to-end check with a locally installed Chromium browser; no npm packages.
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {access,mkdtemp,readFile,mkdir,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createServer} from './serve.mjs';

const candidates=[process.env.BROWSER_PATH,'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe','C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe','/usr/bin/google-chrome','/usr/bin/chromium'].filter(Boolean);
let browserPath;
for(const item of candidates){try{await access(item);browserPath=item;break;}catch{}}
if(!browserPath)throw new Error('Set BROWSER_PATH to an installed Chromium browser.');
const profile=await mkdtemp(path.join(tmpdir(),'english-training-smoke-'));
const server=createServer();server.listen(0,'127.0.0.1');await once(server,'listening');
const base=`http://127.0.0.1:${server.address().port}`;
const browser=spawn(browserPath,['--headless=new','--no-first-run','--no-default-browser-check','--disable-background-networking','--remote-debugging-port=0',`--user-data-dir=${profile}`,'about:blank'],{windowsHide:true,stdio:'ignore'});
let socket,sequence=0;const pending=new Map(),errors=[];
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function poll(fn,description){for(let i=0;i<100;i++){try{const value=await fn();if(value)return value;}catch{}await delay(100);}throw new Error('Timed out: '+description);}
function command(method,params={}){
  return new Promise((resolve,reject)=>{const id=++sequence;const timeout=setTimeout(()=>{pending.delete(id);reject(new Error('CDP timeout '+method));},10000);pending.set(id,{resolve,reject,timeout});socket.send(JSON.stringify({id,method,params}));});
}
async function evaluate(expression){const result=await command('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(result.exceptionDetails)throw new Error(result.exceptionDetails.exception?.description??result.exceptionDetails.text);return result.result.value;}
async function route(hash,selector){await evaluate(`location.hash=${JSON.stringify(hash)}`);await poll(()=>evaluate(`document.querySelector('main').dataset.route===${JSON.stringify(hash)}&&!!document.querySelector(${JSON.stringify(selector)})`),selector);await delay(100);}
async function screenshot(name){const shot=await command('Page.captureScreenshot',{format:'png'});await writeFile(new URL('../.artifacts/'+name,import.meta.url),Buffer.from(shot.data,'base64'));}
try{
  const port=await poll(async()=>Number((await readFile(path.join(profile,'DevToolsActivePort'),'utf8')).split('\n')[0]),'browser debugging port');
  const tabs=await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  socket=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);
  socket.addEventListener('message',event=>{const m=JSON.parse(event.data);if(m.id){const p=pending.get(m.id);if(!p)return;pending.delete(m.id);clearTimeout(p.timeout);m.error?p.reject(new Error(m.error.message)):p.resolve(m.result);}else if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);});
  await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true});});
  await command('Runtime.enable');await command('Page.enable');
  await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
  await command('Page.navigate',{url:base});
  await poll(()=>evaluate('!!document.querySelector(".hero")'),'home');
  assert(await evaluate('document.querySelector("h1").textContent.includes("пониманием")'));
  await mkdir(new URL('../.artifacts/',import.meta.url),{recursive:true});await screenshot('home-desktop.png');
  await route('course','#module-list');assert.equal(await evaluate('document.querySelectorAll(".module-row").length'),40);
  await route('module/P01','#draft');
  assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),4);
  await screenshot('topic-desktop.png');
  await evaluate(`document.querySelector('#draft').value='I am a learner.';document.querySelector('#draft').dispatchEvent(new Event('input'));`);
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#draft")?.value==="I am a learner."'),'persisted draft');
  await route('unit/P01-be/practice','#check-bank');
  await evaluate(`const input=document.querySelector('[data-task]');input.value='am';input.focus();input.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();`);
  assert(await evaluate('document.querySelector(".feedback").textContent.startsWith("Верно")'));
  await route('unit/P01-be/test','#unit-test');
  assert.equal(await evaluate('document.querySelectorAll("#unit-test details").length'),0,'no test keys before submission');
  await evaluate(`document.querySelector('#unit-test').requestSubmit()`);
  assert(await evaluate('document.querySelector("#status").textContent.includes("Ответьте" )'));
  await evaluate(String.raw`{const input=document.querySelector('#unit-test textarea');input.value='My paragraph is unfinished.\nI will continue later.';input.focus();input.dispatchEvent(new Event('input'));window.scrollTo(0,900);}`);
  await delay(200);
  const savedScroll=await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).bookmark.scroll');
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#unit-test textarea")?.value.includes("unfinished")'),'exam draft restored');
  await delay(250);assert(Math.abs(await evaluate('window.scrollY')-savedScroll)<5,'restore exact scroll');
  await evaluate(`(async()=>{const {unitById}=await import('/engine.mjs');const u=unitById('P01-be');for(const t of u.tests[0].tasks){const input=document.querySelector('#answer-'+t.id);input.value=t.answer.split('|')[0];input.dispatchEvent(new Event('input'));}document.querySelector('#unit-test').requestSubmit();})()`);
  assert(await evaluate('document.querySelector("#test-history").textContent.includes("Ожидает проверки")'));
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["P01-be"].attempts.length'),1);
  await screenshot('test-review-desktop.png');
  await evaluate(`document.querySelector('#new-unit-test').click()`);
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["P01-be"].examDraft.variant'),'b');
  await route('module/P02','.unit-list');assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),3);await screenshot('p02-topic-desktop.png');
  await route('unit/P02-numbers/practice','#check-bank');
  await evaluate(`{const field=document.querySelector('[data-task="P02-numbers-practice-13"]');field.value='17';field.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P02-numbers-practice-13").textContent.startsWith("Нужно разобрать")'),'decimal omission must fail in the UI');
  await evaluate(`{const field=document.querySelector('[data-task="P02-numbers-practice-13"]');field.value='1.7';field.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P02-numbers-practice-13").textContent.startsWith("Верно")'));
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#answer-P02-numbers-practice-13")?.value==="1.7"'),'P02 decimal draft');
  await route('unit/P02-time/test','#unit-test');
  await evaluate(String.raw`{const field=document.querySelector('#answer-P02-time-test-a-14');field.value='Our call is on 24 June.\nPlease confirm the time.';field.dispatchEvent(new Event('input'));}`);
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#answer-P02-time-test-a-14")?.value.includes("Please confirm")'),'P02 paragraph draft');
  assert.equal(await evaluate('document.querySelectorAll("#unit-test details").length'),0);
  await route('unit/P02-instructions/explain','#unit-content');assert(await evaluate(`!!document.querySelector('a[href*="commands-and-instructions"]')`),'unit sources');
  assert(await evaluate('document.querySelector(".section-tabs").textContent.includes("Письмо и речь")'),'mixed practice labelled explicitly');
  await route('unit/P02-instructions/production','#check-bank');assert(await evaluate(`!!document.querySelector('#unit-content a[href="#speech"]')`),'mixed practice links to speech tools');
  await route('references/numbers-time','#reference-rows');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),92);await screenshot('p02-reference-desktop.png');
  assert(await evaluate(`!!document.querySelector('a[href*="how-to-say-years"]')`),'reference-specific sources');
  await route('module/P03','.unit-list');assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),4);await screenshot('p03-topic-desktop.png');
  await route('unit/P03-articles/practice','#check-bank');
  await evaluate(`{const f=document.querySelector('#answer-P03-articles-practice-4');f.value='an';f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P03-articles-practice-4").textContent.startsWith("Нужно разобрать")'),'a useful, not an useful');
  await evaluate(`{const f=document.querySelector('#answer-P03-articles-practice-4');f.value='a';f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P03-articles-practice-4").textContent.startsWith("Верно")'));
  await route('unit/P03-possession/practice','#check-bank');
  await evaluate(`{const f=document.querySelector('#answer-P03-possession-practice-18');f.value="student’s";f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P03-possession-practice-18").textContent.startsWith("Нужно разобрать")'),'owner number changes apostrophe');
  await evaluate(`{const f=document.querySelector('#answer-P03-possession-practice-18');f.value="students’";f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P03-possession-practice-18").textContent.startsWith("Верно")'));
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#answer-P03-possession-practice-18")?.value==="students’"'),'P03 curly apostrophe draft');
  await route('unit/P03-possession/test','#unit-test');
  assert.equal(await evaluate('document.querySelectorAll("#unit-test details").length'),0,'P03 keys hidden');
  await evaluate(String.raw`{const f=document.querySelector('#answer-P03-possession-test-a-14');f.value='Jo’s books are here.\nThis answer is unfinished.';f.dispatchEvent(new Event('input'));}`);
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#answer-P03-possession-test-a-14")?.value.includes("unfinished")'),'P03 paragraph draft');
  await evaluate(`(async()=>{const {unitById}=await import('/engine.mjs');const u=unitById('P03-possession');for(const t of u.tests[0].tasks){const f=document.querySelector('#answer-'+t.id);f.value=t.answer.split('|')[0];f.dispatchEvent(new Event('input'));}document.querySelector('#unit-test').requestSubmit();})()`);
  assert(await evaluate('document.querySelector("#test-history").textContent.includes("Ожидает проверки")'));await screenshot('p03-review-desktop.png');
  await evaluate(`document.querySelector('#new-unit-test').click()`);
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["P03-possession"].examDraft.variant'),'b');
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["P03-possession"].attempts.length'),1);
  await route('references/nouns-articles','#reference-rows');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),56);
  await route('references/determiners-possession','#reference-rows');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),21);await screenshot('p03-reference-desktop.png');
  await route('module/P04','.unit-list');assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),3);await screenshot('p04-topic-desktop.png');
  await route('unit/P04-yesno/practice','#check-bank');
  await evaluate(`{const f=document.querySelector('#answer-P04-yesno-practice-10');f.value='Yes, you are.';f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P04-yesno-practice-10").textContent.startsWith("Нужно разобрать")'),'answer must follow speaker role');
  await evaluate(`{const f=document.querySelector('#answer-P04-yesno-practice-10');f.value='Yes, I am.';f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P04-yesno-practice-10").textContent.startsWith("Верно")'));
  for(const answer of ['No, it is not.',"No, it isn’t.","No, it’s not."]){
   await evaluate(`{const f=document.querySelector('#answer-P04-yesno-practice-13');f.value=${JSON.stringify(answer)};f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
   assert(await evaluate('document.querySelector("#feedback-P04-yesno-practice-13").textContent.startsWith("Верно")'),'all negative contractions accepted');
  }
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#answer-P04-yesno-practice-13")?.value==="No, it’s not."'),'P04 contracted sentence draft');
  await route('unit/P04-statements/reading','#check-bank');
  await evaluate(`{const f=document.querySelector('#answer-P04-statements-reading-6');f.value='false';f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P04-statements-reading-6").textContent.startsWith("Нужно разобрать")'),'unknown does not mean false');
  await evaluate(`{const f=document.querySelector('#answer-P04-statements-reading-6');f.value='not stated';f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-P04-statements-reading-6").textContent.startsWith("Верно")'));
  await route('unit/P04-wh/test','#unit-test');
  assert.equal(await evaluate('document.querySelectorAll("#unit-test details").length'),0,'P04 keys hidden');
  await evaluate(String.raw`{const f=document.querySelector('#answer-P04-wh-test-a-18');f.value='Our museum meeting is on Saturday.\nI will finish this paragraph later.';f.dispatchEvent(new Event('input'));}`);
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#answer-P04-wh-test-a-18")?.value.includes("finish this paragraph")'),'P04 long answer draft');
  await evaluate(`(async()=>{const {unitById}=await import('/engine.mjs');const u=unitById('P04-wh');for(const t of u.tests[0].tasks){const f=document.querySelector('#answer-'+t.id);f.value=t.answer.split('|')[0];f.dispatchEvent(new Event('input'));}document.querySelector('#unit-test').requestSubmit();})()`);
  assert(await evaluate('document.querySelector("#test-history").textContent.includes("Ожидает проверки")'));await screenshot('p04-review-desktop.png');
  await evaluate(`document.querySelector('#new-unit-test').click()`);
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["P04-wh"].examDraft.variant'),'b');
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["P04-wh"].attempts.length'),1);
  await route('references/be-questions','#reference-rows');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),40);await screenshot('p04-reference-desktop.png');
  assert(await evaluate(`!!document.querySelector('a[href*="present-simple-be"]')`),'P04 primary sources');
  await route('module/A101','.unit-list');assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),4);await screenshot('a101-topic-desktop.png');
  for(const [unit,id,wrong,right] of [
   ['forms','practice-3','studys','studies'],['forms','sounds-6','ɪz','z'],
   ['negatives','practice-14',"She doesn't goes there.","She doesn't go there."],
   ['questions','practice-20','Who does Leo call?','Who calls Leo?'],
   ['questions','practice-21','Who calls Mina?','Who does Mina call?'],
   ['frequency','practice-11','every day','everyday'],['frequency','practice-19','yes','no'],
   ['frequency','reading-7','true','not stated']
  ]){
   const bank=id.slice(0,id.lastIndexOf('-')),taskId=`A101-${unit}-${id}`;
   await route(`unit/A101-${unit}/${bank}`,'#check-bank');
   for(const [answer,label] of [[wrong,'Нужно разобрать'],[right,'Верно']]){
    await evaluate(`{const f=document.querySelector('#answer-${taskId}');f.value=${JSON.stringify(answer)};f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
    assert(await evaluate(`document.querySelector('#feedback-${taskId}').textContent.startsWith(${JSON.stringify(label)})`),taskId+' '+answer);
   }
  }
  await route('unit/A101-frequency/practice','#check-bank');
  await evaluate(`{const f=document.querySelector('#answer-A101-frequency-practice-22');f.value='Jo walks home sometimes. Jo sometimes walks home.';f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-A101-frequency-practice-22").textContent.includes("провер")'),'multiple natural positions need a meaning review');
  await route('unit/A101-frequency/test','#unit-test');
  assert.equal(await evaluate('document.querySelectorAll("#unit-test details").length'),0,'A101 keys hidden before submission');
  await evaluate(String.raw`{const f=document.querySelector('#answer-A101-frequency-test-a-15');f.value='Noor usually works at home.\nThis unfinished paragraph is a synthetic browser draft.';f.dispatchEvent(new Event('input'));}`);
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#answer-A101-frequency-test-a-15")?.value.includes("synthetic browser draft")'),'A101 multiline draft resumes');
  assert.equal(await evaluate('document.querySelectorAll("#unit-test details").length'),0,'resuming does not disclose keys');
  for(const variantIndex of [0,1]){
   await evaluate(`(async()=>{const {unitById}=await import('/engine.mjs');const u=unitById('A101-frequency');for(const t of u.tests[${variantIndex}].tasks){const f=document.querySelector('#answer-'+t.id);f.value=t.answer.split('|')[0];f.dispatchEvent(new Event('input'));}document.querySelector('#unit-test').requestSubmit();})()`);
   assert(await evaluate('document.querySelector("#test-history").textContent.includes("Ожидает проверки")'),'A101 open samples never automatically pass');
   if(variantIndex===0){
    assert(await evaluate('document.querySelector("aside nav").getBoundingClientRect().bottom<=document.querySelector(".aside-note").getBoundingClientRect().top'),'sidebar note must not overlap navigation on a long result page');
    await screenshot('a101-review-desktop.png');
    await evaluate(`window.__a101FirstAttempt=JSON.stringify(JSON.parse(localStorage.getItem('english-training-v1')).learning['A101-frequency'].attempts[0]);document.querySelector('#new-unit-test').click();`);
    assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["A101-frequency"].examDraft.variant'),'b');
   }
  }
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["A101-frequency"].attempts.length'),2);
  assert(await evaluate('JSON.stringify(JSON.parse(localStorage.getItem("english-training-v1")).learning["A101-frequency"].attempts[0])===window.__a101FirstAttempt'),'A101 second attempt preserves first evidence');
  await route('references/present-simple','#reference-rows');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),70);await screenshot('a101-reference-desktop.png');
  assert(await evaluate(`!!document.querySelector('a[href*="present-simple-i-work"]')`),'A101 primary sources');
  await evaluate(`document.querySelector('#reference-search').value='studies';document.querySelector('#reference-search').dispatchEvent(new Event('input'));`);
  assert(await evaluate('document.querySelector("#reference-rows").textContent.includes("ˈstʌdiz")'),'A101 searchable form and IPA');
  await command('Emulation.setDeviceMetricsOverride',{width:1365,height:600,deviceScaleFactor:1,mobile:false});
  await route('unit/A101-forms/explain','#unit-content');
  await evaluate(`window.scrollTo(0,1500);document.querySelector('aside nav a:last-child').focus();`);
  assert(await evaluate('document.querySelector("aside").getBoundingClientRect().height<=innerHeight'),'short desktop sidebar is bounded');
  assert(await evaluate('{const r=document.querySelector("aside nav a:last-child").getBoundingClientRect();r.top>=0&&r.bottom<=innerHeight}'),'last sidebar link remains keyboard reachable');
  assert(await evaluate('document.querySelector("aside nav").getBoundingClientRect().bottom<=document.querySelector(".aside-note").getBoundingClientRect().top'),'short desktop note follows the menu');
  await screenshot('a101-sidebar-short-desktop.png');
  await command('Emulation.setDeviceMetricsOverride',{width:1365,height:1000,deviceScaleFactor:1,mobile:false});
  await route('references/alphabet','#reference-rows');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),26);
  await route('module/A102','.unit-list');assert.equal(await evaluate('document.querySelectorAll(".unit-card").length'),3);await screenshot('a102-topic-desktop.png');
  for(const [unit,id,wrong,right] of [
   ['building','spelling-6','writting','writing'],['building','spelling-10','dying','dyeing'],
   ['building','practice-20',"Yes, I'm.",'Yes, I am.'],
   ['contrast','practice-7','yes','no'],['contrast','practice-16','no','yes'],
   ['states','practice-7','am thinking','think'],['states','practice-8','think','am thinking'],
   ['states','practice-9','is having','has'],['states','practice-10','has','is having']
  ]){
   const bank=id.slice(0,id.lastIndexOf('-')),taskId=`A102-${unit}-${id}`;
   await route(`unit/A102-${unit}/${bank}`,'#check-bank');
   for(const [answer,label] of [[wrong,'Нужно разобрать'],[right,'Верно']]){
    await evaluate(`{const f=document.querySelector('#answer-${taskId}');f.value=${JSON.stringify(answer)};f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
    assert(await evaluate(`document.querySelector('#feedback-${taskId}').textContent.startsWith(${JSON.stringify(label)})`),taskId+' '+answer);
   }
  }
  await route('unit/A102-building/spelling','#check-bank');
  for(const answer of ['travelling','traveling']){
   await evaluate(`{const f=document.querySelector('#answer-A102-building-spelling-21');f.value=${JSON.stringify(answer)};f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
   assert(await evaluate('document.querySelector("#feedback-A102-building-spelling-21").textContent.startsWith("Верно")'),'A102 both regional spellings accepted');
  }
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#answer-A102-building-spelling-21")?.value==="traveling"'),'A102 US spelling draft');
  await route('unit/A102-states/practice','#check-bank');
  await evaluate(`{const f=document.querySelector('#answer-A102-states-practice-22');f.value='Both I feel cold and I am feeling cold can be natural.';f.dispatchEvent(new Event('input'));document.querySelector('#check-bank').click();}`);
  assert(await evaluate('document.querySelector("#feedback-A102-states-practice-22").textContent.includes("провер")'),'A102 feel alternatives require meaning review');
  await route('unit/A102-building/listening','#listen-bank');
  assert.equal(await evaluate('document.querySelector("#bank-transcript").textContent'),'','A102 audio transcript hidden before attempt');
  await evaluate(`document.querySelector('#check-bank').click();`);
  assert.equal(await evaluate('document.querySelector("#bank-transcript").textContent'),'','empty audio check does not disclose transcript');
  await evaluate(`(async()=>{const {unitById}=await import('/engine.mjs');const b=unitById('A102-building').banks.find(b=>b.id==='listening');for(const t of b.tasks){const f=document.querySelector('#answer-'+t.id);f.value=t.answer.split('|')[0];f.dispatchEvent(new Event('input'));}document.querySelector('#check-bank').click();})()`);
  assert(await evaluate('document.querySelector("#bank-transcript details").textContent.includes("fixing a lamp")'),'A102 transcript available after complete attempt');
  await route('unit/A102-states/test','#unit-test');
  assert.equal(await evaluate('document.querySelectorAll("#unit-test details").length'),0,'A102 keys hidden');
  await evaluate(String.raw`{const f=document.querySelector('#answer-A102-states-test-a-16');f.value='Ava thinks the guide is useful.\nThis is an unfinished synthetic paragraph.';f.dispatchEvent(new Event('input'));}`);
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#answer-A102-states-test-a-16")?.value.includes("unfinished synthetic")'),'A102 multiline answer resumes');
  assert.equal(await evaluate('document.querySelectorAll("#unit-test details").length'),0,'A102 resumed draft keeps keys hidden');
  for(const index of [0,1]){
   await evaluate(`(async()=>{const {unitById}=await import('/engine.mjs');const u=unitById('A102-states');for(const t of u.tests[${index}].tasks){const f=document.querySelector('#answer-'+t.id);f.value=t.answer.split('|')[0];f.dispatchEvent(new Event('input'));}document.querySelector('#unit-test').requestSubmit();})()`);
   assert(await evaluate('document.querySelector("#test-history").textContent.includes("Ожидает проверки")'),'A102 open models never automatically pass');
   if(index===0){
    await screenshot('a102-review-desktop.png');
    await evaluate(`window.__a102FirstAttempt=JSON.stringify(JSON.parse(localStorage.getItem('english-training-v1')).learning['A102-states'].attempts[0]);document.querySelector('#new-unit-test').click();`);
    assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["A102-states"].examDraft.variant'),'b');
   }
  }
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).learning["A102-states"].attempts.length'),2);
  assert(await evaluate('JSON.stringify(JSON.parse(localStorage.getItem("english-training-v1")).learning["A102-states"].attempts[0])===window.__a102FirstAttempt'),'A102 earlier attempt unchanged');
  await route('references/present-continuous','#reference-rows');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),69);await screenshot('a102-reference-desktop.png');
  assert(await evaluate(`!!document.querySelector('a[href*="stative-verbs"]')`),'A102 source links');
  await evaluate(`document.querySelector('#reference-search').value='travelling';document.querySelector('#reference-search').dispatchEvent(new Event('input'));`);
  assert(await evaluate('document.querySelector("#reference-rows").textContent.includes("traveling")'),'A102 variant in reference search');
  await route('references/sounds','#reference-rows');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),44);
  await route('references/irregular','#reference-rows');assert(await evaluate('document.querySelectorAll("#reference-rows tr").length>=180'));
  await evaluate(`document.querySelector('#reference-search').value='overwrite';document.querySelector('#reference-search').dispatchEvent(new Event('input'));`);
  await route('assessment','#grade');
  await evaluate(`document.querySelector('#grade').click()`);assert(await evaluate('document.querySelector("#status").textContent.includes("осталось")'));
  await evaluate(`document.querySelector('input[name="g01"][value="4"]').click()`);
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).placementDraft.g01'),4);
  await evaluate(`(async()=>{const {questions}=await import('/data/assessment.mjs');for(const q of questions.filter(q=>q.skill!=='listening')){document.querySelector('input[name="'+q.id+'"][value="'+q.answer+'"]').click();}document.querySelector('#grade').click();})()`);
  assert(await evaluate('document.querySelector("main").textContent.includes("Не определено — раздел неполный")'));
  await route('plan','#export-plan');assert(await evaluate('document.querySelector("main").textContent.includes("C2")'));
  await route('cards','#card-level');
  assert.equal(await evaluate('document.querySelectorAll("#flip-card button").length'),0,'no nested card buttons');
  assert(await evaluate('!document.querySelector("#flip-card").contains(document.querySelector("#word-audio"))'));
  await evaluate(`document.querySelector('#word-audio').click()`);
  assert.equal(await evaluate('document.querySelector("#flip-card").getAttribute("aria-pressed")'),'false');
  assert.equal(await evaluate('Object.keys(JSON.parse(localStorage.getItem("english-training-v1")).cards).length'),0);
  await evaluate(`document.querySelector('#flip-card').focus()`);
  await command('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r'});
  await command('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  assert.equal(await evaluate('document.querySelector("#flip-card").getAttribute("aria-pressed")'),'true');
  assert(await evaluate('document.querySelector(".card-back .ipa").textContent.includes("/neɪm/")'));
  await command('Input.dispatchKeyEvent',{type:'keyDown',key:' ',code:'Space',windowsVirtualKeyCode:32,text:' '});
  await command('Input.dispatchKeyEvent',{type:'keyUp',key:' ',code:'Space',windowsVirtualKeyCode:32});
  assert.equal(await evaluate('document.querySelector("#flip-card").getAttribute("aria-pressed")'),'false','Space flips the entire card back');
  await evaluate(`document.querySelector('#flip-card').click()`);
  await screenshot('card-desktop.png');
  await evaluate(`document.querySelector('[data-rating="good"]').click();`);
  assert.equal(await evaluate('Object.keys(JSON.parse(localStorage.getItem("english-training-v1")).cards).length'),1);
  await evaluate(`window.__starts=0;window.SpeechRecognition=class {start(){window.__starts++;this.onstart?.();this.onresult?.({resultIndex:0,results:[Object.assign([{transcript:'We shipped fifteen small fixes.'}],{isFinal:true})]});}stop(){this.onend?.();}abort(){this.onend?.();}};`);
  await route('speech','#start-recognition');await evaluate(`document.querySelector('#start-recognition').click()`);assert.equal(await evaluate('window.__starts'),0);
  await evaluate(`document.querySelector('#consent').checked=true;document.querySelector('#start-recognition').click();`);assert.equal(await evaluate('window.__starts'),1);
  assert(await evaluate('document.querySelector("#transcript").value.includes("fifteen")'));
  await evaluate(`document.querySelector('#stop-recognition').click();document.querySelector('#compare').click();document.querySelector('#save-transcript').click();`);
  assert(await evaluate('document.querySelector("#similarity").textContent.includes("не оценка произношения")'));
  await route('settings','#profile');
  await evaluate(`document.querySelector('#review-writing').value='A2';document.querySelector('#evidence-writing').value='Tutor reviewed independent writing; evidence is provisional.';document.querySelector('#profile').requestSubmit();`);
  await route('plan','#export-plan');assert(await evaluate('document.querySelector(".warning").textContent.includes("A2")'));
  await route('home','.hero');
  await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await command('Page.reload');await poll(()=>evaluate('!!document.querySelector(".hero")'),'mobile home');
  assert.equal(await evaluate('window.innerWidth'),390,'mobile viewport must not expand to fit content');
  assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'mobile overflow');await screenshot('home-mobile.png');
  await route('module/P01','.unit-list');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'topic mobile overflow');await screenshot('topic-mobile.png');
  await route('unit/P01-introductions/writing','#check-bank');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'practice mobile overflow');await screenshot('practice-mobile.png');
  await route('cards','#flip-card');await evaluate(`document.querySelector('#flip-card').click()`);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'card mobile overflow');await screenshot('card-mobile.png');
  await route('references/tenses','#reference-rows');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'reference table must scroll inside its container');
  await route('unit/P02-time/reading','#check-bank');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'P02 reading mobile overflow');await screenshot('p02-reading-mobile.png');
  await route('references/numbers-time','#reference-rows');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'P02 reference mobile overflow');await screenshot('p02-reference-mobile.png');
  await route('unit/P03-reference/reading','#check-bank');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'P03 reading mobile overflow');await screenshot('p03-reading-mobile.png');
  await route('references/determiners-possession','#reference-rows');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'P03 table mobile overflow');await screenshot('p03-reference-mobile.png');
  await route('unit/P04-wh/reading','#check-bank');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'P04 reading mobile overflow');await screenshot('p04-reading-mobile.png');
  await route('references/be-questions','#reference-rows');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'P04 reference mobile overflow');await screenshot('p04-reference-mobile.png');
  await route('unit/P04-wh/test','#unit-test');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'P04 test mobile overflow');
  await route('module/A101','.unit-list');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A101 topic mobile overflow');await screenshot('a101-topic-mobile.png');
  await route('unit/A101-frequency/reading','#check-bank');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A101 reading mobile overflow');await screenshot('a101-reading-mobile.png');
  await route('unit/A101-forms/sounds','#check-bank');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A101 phonetics mobile overflow');
  await route('references/present-simple','#reference-rows');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A101 reference mobile overflow');await screenshot('a101-reference-mobile.png');
  await route('unit/A101-frequency/test','#test-history');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A101 history mobile overflow');
  await route('unit/A101-questions/test','#unit-test');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A101 test mobile overflow');await screenshot('a101-test-mobile.png');
  await route('module/A102','.unit-list');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A102 topic mobile overflow');await screenshot('a102-topic-mobile.png');
  await route('unit/A102-states/reading','#check-bank');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A102 reading mobile overflow');await screenshot('a102-reading-mobile.png');
  await route('unit/A102-building/sounds','#check-bank');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A102 sounds mobile overflow');
  await route('references/present-continuous','#reference-rows');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A102 reference mobile overflow');await screenshot('a102-reference-mobile.png');
  await route('unit/A102-states/test','#test-history');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A102 history mobile overflow');
  await route('unit/A102-contrast/test','#unit-test');assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),'A102 test mobile overflow');await screenshot('a102-test-mobile.png');
  await route('settings','#profile');
  assert(await evaluate(`(async()=>{const {validateState}=await import('/engine.mjs');validateState(JSON.parse(localStorage.getItem('english-training-v1')));return true;})()`),'browser-created state must be importable');
  assert.deepEqual(errors,[],'Unexpected browser runtime errors');
  console.log('Browser smoke passed: topic hierarchy, practice, exam draft/resume/history, references, Enter/Space flip cards, separate audio, placement, plan, SRS, mocked speech, manual review, desktop/mobile.');
  console.log('Real microphone, external speech service and audible TTS still require manual verification.');
  console.log('Isolated browser test profile (no learner data): '+profile);
}finally{
  if(socket?.readyState===1){await command('Browser.close').catch(()=>{});socket.close();}
  if(browser.exitCode===null)browser.kill();
  await new Promise(resolve=>server.close(resolve));
}

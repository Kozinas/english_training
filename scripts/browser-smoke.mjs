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
  await route('references/alphabet','#reference-rows');assert.equal(await evaluate('document.querySelectorAll("#reference-rows tr").length'),26);
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

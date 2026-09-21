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
async function route(hash,selector){await evaluate(`location.hash=${JSON.stringify(hash)}`);await poll(()=>evaluate(`!!document.querySelector(${JSON.stringify(selector)})`),selector);}
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
  assert(await evaluate('document.querySelector("h1").textContent.includes("шаг")'));
  await mkdir(new URL('../.artifacts/',import.meta.url),{recursive:true});await screenshot('home-desktop.png');
  await route('course','#module-list');assert.equal(await evaluate('document.querySelectorAll(".module-row").length'),40);
  await route('module/P01','#draft');
  await evaluate(`document.querySelector('#draft').value='I am a learner.';document.querySelector('#draft').dispatchEvent(new Event('input'));document.querySelector('#drill0').value='am';document.querySelector('#drill1').value='You';document.querySelector('#drill2').value='I am';document.querySelector('#check').click();`);
  assert(await evaluate('document.querySelector("#feedback0").textContent.startsWith("Верно")'));
  await command('Page.reload');await poll(()=>evaluate('document.querySelector("#draft")?.value==="I am a learner."'),'persisted draft');
  await route('assessment','#grade');
  await evaluate(`document.querySelector('#grade').click()`);assert(await evaluate('document.querySelector("#status").textContent.includes("осталось")'));
  await evaluate(`document.querySelector('input[name="g01"][value="4"]').click()`);
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("english-training-v1")).placementDraft.g01'),4);
  await evaluate(`(async()=>{const {questions}=await import('/data/assessment.mjs');for(const q of questions.filter(q=>q.skill!=='listening')){document.querySelector('input[name="'+q.id+'"][value="'+q.answer+'"]').click();}document.querySelector('#grade').click();})()`);
  assert(await evaluate('document.querySelector("main").textContent.includes("Не определено — раздел неполный")'));
  await route('plan','#export-plan');assert(await evaluate('document.querySelector("main").textContent.includes("C2")'));
  await route('cards','#card-level');await evaluate(`document.querySelector('#reveal').click();document.querySelector('[data-rating="good"]').click();`);
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
  assert.deepEqual(errors,[],'Unexpected browser runtime errors');
  console.log('Browser smoke passed: navigation, lesson, persistence, placement, plan, SRS, speech UI with mock API, manual review, desktop/mobile.');
  console.log('Real microphone, external speech service and audible TTS still require manual verification.');
  console.log('Isolated browser test profile (no learner data): '+profile);
}finally{
  if(socket?.readyState===1){await command('Browser.close').catch(()=>{});socket.close();}
  if(browser.exitCode===null)browser.kill();
  await new Promise(resolve=>server.close(resolve));
}

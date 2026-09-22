import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,subtopics,vocabulary} from '../data/course.mjs';
import {referencePages} from '../data/reference.mjs';
import {sectionRoots,canonicalRoute,routeSection,navigationFieldLimit} from '../web/navigation-state.mjs';
import {freshState,validateState,unitState,submitUnitTest} from '../web/engine.mjs';

const page=(fields={})=>({scroll:840,focus:'',fields,details:[true,false]});

test('every published route has a strict canonical path and a navigation section',()=>{
 for(const root of sectionRoots){assert.equal(canonicalRoute(root),root);assert.equal(routeSection(root),root);}
 for(const m of modules){assert.equal(canonicalRoute('module/'+m.id),'module/'+m.id);assert.equal(routeSection('module/'+m.id),'course');}
 for(const u of subtopics){
  assert.equal(canonicalRoute('unit/'+u.id),'unit/'+u.id+'/explain');
  for(const part of ['explain','examples','test',...u.banks.map(b=>b.id)]){
   const path=`unit/${u.id}/${part}`;assert.equal(canonicalRoute(path),path);assert.equal(routeSection(path),'course');
  }
 }
 for(const r of referencePages){assert.equal(canonicalRoute('references/'+r.id),'references/'+r.id);assert.equal(routeSection('references/'+r.id),'references');}
 for(const bad of ['',null,'#course','//evil.test','javascript:alert(1)','module/unknown','module/P01/extra','unit/P01-be/unknown','unit/P01-be/test/extra','references/unknown','home/extra','course?level=A1'])assert.equal(canonicalRoute(bad),null,String(bad));
});

test('existing v2 exports get navigation from their lesson bookmark without data loss',()=>{
 const old=freshState();delete old.navigation;
 old.bookmark={route:'unit/P01-be/practice',scroll:1250,focus:'answer-P01-be-practice-1'};
 old.drafts.P01='Keep my synthetic note.';const before=JSON.stringify(old);
 const next=validateState(old);
 assert.equal(next.schemaVersion,2);assert.equal(next.navigation.current,old.bookmark.route);
 assert.equal(next.navigation.sections.course,old.bookmark.route);
 assert.equal(next.navigation.pages[old.bookmark.route].scroll,1250);
 assert.deepEqual(next.bookmark,old.bookmark);assert.equal(next.drafts.P01,old.drafts.P01);
 assert.equal(JSON.stringify(old),before);
});

test('v1 exports and exports without a bookmark safely start at home',()=>{
 for(const version of [1,2]){
  const old=freshState();old.schemaVersion=version;delete old.navigation;
  if(version===1){delete old.learning;delete old.bookmark;}
  const copy=validateState(old);assert.equal(copy.navigation.current,'home');assert.deepEqual(copy.navigation.pages,{});
 }
});

test('multiple routes, filters, details, fields and card approach survive an export round trip',()=>{
 const s=freshState();s.navigation.current='references/irregular';
 s.navigation.sections={home:'home',course:'unit/P01-be/test',references:'references/irregular',cards:'cards'};
 s.navigation.pages={home:page(),course:page({level:'Pre-A1',search:'P01'}),'references/irregular':page({'reference-search':'went'}),
  'unit/P01-be/test':page(),speech:page({target:'My own phrase.',transcript:'Unfinished\ntranscript.'}),
  settings:page({minutes:'',goal:'Unsaved goal','review-writing':'unknown','evidence-writing':'Unfinished evidence'}),
  'module/A104':page({drill0:'went'}),cards:{...page(),cards:{level:'Pre-A1',batch:10,queue:[vocabulary.find(v=>v.module==='P01').id],revealed:true}}};
 const copy=validateState(JSON.parse(JSON.stringify(s)));assert.deepEqual(copy,s);
 copy.navigation.pages.speech.fields.transcript='Changed';assert.equal(s.navigation.pages.speech.fields.transcript,'Unfinished\ntranscript.');
 assert.equal(s.profile.minutes,30);assert.equal(s.production.speaking,'');
});

test('navigation import rejects external routes, bad sections, positions and field shapes',()=>{
 const mutations=[s=>s.navigation.current='https://evil.test',s=>s.navigation.sections.course='references/irregular',
  s=>s.navigation.sections.unknown='home',s=>s.navigation.pages.unknown=page(),
  s=>s.navigation.pages.home={...page(),scroll:-1},s=>s.navigation.pages.home={...page(),scroll:Infinity},
  s=>s.navigation.pages.home={...page(),focus:'x'.repeat(501)},s=>s.navigation.pages.home={...page(),details:['true']},
  s=>s.navigation.pages.course=page({level:'unknown'}),s=>s.navigation.pages.course=page({search:'x'.repeat(501)}),
  s=>s.navigation.pages.speech=page({transcript:{text:'wrong type'}})];
 for(const mutate of mutations){const s=freshState();mutate(s);assert.throws(()=>validateState(s));}
});

test('UI drafts cannot overwrite authoritative learning answers or restore microphone consent',()=>{
 for(const [route,key] of [['speech','consent'],['settings','import'],['module/P01','draft'],['module/A104','self-check'],
  ['assessment','prod-writing'],['assessment','g01'],['unit/P01-be/practice','answer-P01-be-practice-1'],['unit/P01-be/test','answer-P01-be-test-a-1']]){
  assert.equal(navigationFieldLimit(route,key),0);
  const s=freshState();s.navigation.pages[route]=page({[key]:'true'});assert.throws(()=>validateState(s));
 }
});

test('unsent manual review drafts are separate from actual grades and audio confirmations',()=>{
 const s=freshState(),u=subtopics.find(u=>u.id==='P01-be'),p=unitState(s,u.id);
 for(const t of u.tests[0].tasks)p.examDraft.answers[t.id]='Synthetic answer';submitUnitTest(s,u.id);
 const attempt=p.attempts[0],task=u.tests[0].tasks.find(t=>t.kind==='speech'),prefix=`review:${attempt.id}:${task.id}:`;
 s.navigation.pages['unit/P01-be/test']=page({[prefix+'reviewer']:'Synthetic tutor',[prefix+'score']:'3',[prefix+'evidence']:'Unfinished feedback.'});
 const restored=validateState(s);assert.deepEqual(restored.learning[u.id].attempts[0].reviews,{});
 s.navigation.pages['unit/P01-be/test'].fields[prefix+'heardAudio']='true';assert.throws(()=>validateState(s));
 delete s.navigation.pages['unit/P01-be/test'].fields[prefix+'heardAudio'];
 s.navigation.pages['unit/P01-be/test'].fields['review:unknown:unknown:evidence']='x';assert.throws(()=>validateState(s));
});

test('card position validates IDs, level, batch and uniqueness, including a completed empty approach',()=>{
 const seed={level:'Pre-A1',batch:10,queue:[vocabulary.find(v=>v.module==='P01').id],revealed:false};
 for(const change of [c=>c.level='bad',c=>c.batch=0,c=>c.batch=101,c=>c.queue=['missing'],c=>c.queue.push(c.queue[0]),c=>c.revealed='true',c=>c.level='C2']){
  const s=freshState(),cards=structuredClone(seed);change(cards);s.navigation.pages.cards={...page(),cards};assert.throws(()=>validateState(s));
 }
 const s=freshState();s.navigation.pages.cards={...page(),cards:{...seed,queue:[]}};assert.deepEqual(validateState(s),s);
});

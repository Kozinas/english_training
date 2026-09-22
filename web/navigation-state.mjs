import {modules,subtopics,levels,vocabulary} from '../data/course.mjs';
import {referencePages} from '../data/reference.mjs';

export const sectionRoots=['home','course','references','assessment','speech','cards','plan','library','settings'];
export const freshNavigation=()=>({current:'home',sections:{},pages:{}});

export function canonicalRoute(route){
 if(typeof route!=='string')return null;
 if(sectionRoots.includes(route))return route;
 const parts=route.split('/'),[view,id,section]=parts;
 if(view==='module'&&parts.length===2&&modules.some(m=>m.id===id))return route;
 if(view==='references'&&parts.length===2&&referencePages.some(r=>r.id===id))return route;
 const unit=subtopics.find(u=>u.id===id);
 if(view==='unit'&&unit){
  if(parts.length===2)return route+'/explain';
  if(parts.length===3&&['explain','examples','test',...unit.banks.map(b=>b.id)].includes(section))return route;
 }
 return null;
}
export function routeSection(route){
 const valid=canonicalRoute(route);
 if(!valid)return null;
 const view=valid.split('/')[0];
 return ['unit','module'].includes(view)?'course':view;
}

// Only otherwise-unsaved UI drafts belong here. Learning answers and grades keep
// their existing source of truth; microphone/audio confirmations never persist.
export function navigationFieldLimit(route,key,learning={}){
 if(route==='course')return {level:20,search:500}[key]??0;
 if(route.startsWith('references/'))return key==='reference-search'?500:0;
 if(route==='speech')return ['target','transcript'].includes(key)?20000:0;
 if(route==='settings')return {goal:500,minutes:20,days:20,accent:20,
  'review-writing':20,'review-speaking':20,'review-pronunciation':20,
  'evidence-writing':3000,'evidence-speaking':3000,'evidence-pronunciation':3000}[key]??0;
 if(route.startsWith('module/')){
  const m=modules.find(m=>m.id===route.split('/')[1]),match=/^drill(\d+)$/.exec(key);
  // Retain old answers when a previously short topic is expanded. They are an
  // archive, never answers to new tasks or evidence of mastery.
  return m&&match&&Number(match[1])<m.drills.length?20000:0;
 }
 const [view,id,section]=route.split('/');
 if(view==='unit'&&section==='test'){
  const [prefix,attemptId,taskId,name,...extra]=key.split(':');
  const attempt=learning[id]?.attempts.find(a=>a.id===attemptId);
  const task=subtopics.find(u=>u.id===id)?.tests.find(t=>t.id===attempt?.variant)?.tasks.find(t=>t.id===taskId);
  if(prefix==='review'&&!extra.length&&task&&['text','speech'].includes(task.kind))return {reviewer:200,score:10,evidence:5000}[name]??0;
 }
 return 0;
}

const plain=v=>v!==null&&typeof v==='object'&&!Array.isArray(v)&&Object.getPrototypeOf(v)===Object.prototype;
const assert=(ok,message)=>{if(!ok)throw new Error(message);};
export function validateNavigation(value,bookmark,learning){
 if(value===undefined){
  const next=freshNavigation();
  if(bookmark){next.current=bookmark.route;next.sections.course=bookmark.route;next.pages[bookmark.route]={scroll:bookmark.scroll,focus:bookmark.focus,fields:{},details:[]};}
  return next;
 }
 assert(plain(value)&&canonicalRoute(value.current)===value.current&&plain(value.sections)&&plain(value.pages),'Некорректная навигация');
 for(const [section,route] of Object.entries(value.sections))assert(sectionRoots.includes(section)&&canonicalRoute(route)===route&&routeSection(route)===section,'Некорректный маршрут раздела');
 for(const [route,page] of Object.entries(value.pages)){
  assert(canonicalRoute(route)===route&&plain(page),'Неизвестная сохранённая страница');
  assert(Number.isFinite(page.scroll)&&page.scroll>=0&&page.scroll<=10000000&&typeof page.focus==='string'&&page.focus.length<=500,'Некорректное положение страницы');
  assert(plain(page.fields)&&Array.isArray(page.details)&&page.details.length<=2000&&page.details.every(x=>typeof x==='boolean'),'Некорректное состояние страницы');
  for(const [key,field] of Object.entries(page.fields)){
   const limit=navigationFieldLimit(route,key,learning);
   assert(limit&&typeof field==='string'&&field.length<=limit,'Недопустимое поле страницы');
   if(route==='course'&&key==='level')assert(['all','technical',...levels].includes(field),'Некорректный фильтр уровня');
  }
  if(page.cards!==undefined){
   const c=page.cards;
   assert(route==='cards'&&plain(c)&&levels.includes(c.level)&&Number.isInteger(c.batch)&&c.batch>=1&&c.batch<=100&&typeof c.revealed==='boolean'&&Array.isArray(c.queue),'Некорректный подход карточек');
   assert(c.queue.length<=vocabulary.length&&new Set(c.queue).size===c.queue.length&&c.queue.every(id=>vocabulary.some(v=>v.id===id&&modules.find(m=>m.id===v.module).level===c.level)),'Неизвестная карточка в подходе');
  }
 }
 return value;
}

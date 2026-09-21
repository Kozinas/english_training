import {modules, subtopics, levels, vocabulary, defaults} from '../data/course.mjs';
import {questions, assessmentVersion} from '../data/assessment.mjs';

export const schemaVersion = 2;
export const normalise = value => String(value).normalize('NFKC').toLowerCase().replace(/[‘’]/g,"'")
  // Decimal/time/group separators carry meaning. Never turn 1.5 into 15 or 9:15 into 915.
  .replace(/[.!?,;:]/g,(mark,index,text)=>/[.,:]/.test(mark)&&/\d/.test(text[index+1]??'')?mark:'')
  .replace(/\s+/g,' ').trim();
export const checkAnswer = (input, key) => key.split('|').some(a => normalise(a) === normalise(input));
export function textSimilarity(expected, actual) {
  const a = normalise(expected).split(' ').filter(Boolean), b = normalise(actual).split(' ').filter(Boolean);
  if (!a.length || !b.length) return 0;
  let row = b.map((_, i) => i + 1); row.unshift(0);
  for (let i=1; i<=a.length; i++) {
    const next=[i];
    for (let j=1;j<=b.length;j++) next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+(a[i-1]===b[j-1]?0:1));
    row=next;
  }
  return Math.round(100*Math.max(0,1-row[b.length]/Math.max(a.length,b.length)));
}

export function scorePlacement(answers={}) {
  const skills={}; const gaps=new Set();
  for(const skill of ['grammar','reading','listening']) {
    const pool=questions.filter(q=>q.skill===skill);
    const answered=pool.filter(q=>Number.isInteger(answers[q.id]));
    const correct=answered.filter(q=>answers[q.id]===q.answer).length;
    const blocks=levels.slice(1).map(level=>{
      const block=pool.filter(q=>q.level===level);
      const done=block.filter(q=>Number.isInteger(answers[q.id]));
      const right=done.filter(q=>answers[q.id]===q.answer).length;
      return {level,answered:done.length,total:block.length,correct:right,passed:done.length===block.length && right/block.length>=0.75};
    });
    const complete=answered.length===pool.length;
    let supported='unknown', study='unknown';
    if(complete) {
      supported='Pre-A1'; study='C2';
      for(const block of blocks) {
        if(!block.passed) {study=block.level;break;}
        supported=block.level;
      }
      if(blocks[0].correct/blocks[0].total < 0.5) study='Pre-A1';
    }
    for(const q of answered) if(answers[q.id]!==q.answer) gaps.add(q.module);
    skills[skill]={answered:answered.length,total:pool.length,correct,complete,supported,study,blocks};
  }
  return {assessmentVersion,skills,gaps:[...gaps],provisional:true};
}

export function buildPlan(state) {
  if(!state.placement) return null;
  const result=scorePlacement(state.placement.answers);
  const known=Object.values(result.skills).filter(s=>s.complete).map(s=>levels.indexOf(s.study));
  for(const review of Object.values(state.profile.reviewedSkills)) if(levels.includes(review.level)) known.push(levels.indexOf(review.level));
  if(!known.length) return null;
  const floor=Math.min(...known);
  // A legacy checkbox cannot certify newly expanded content.
  const checked=id=>!modules.find(m=>m.id===id)?.subtopics.length&&!!state.moduleProgress[id]?.selfChecked;
  const general=modules.filter(m=>m.track==='general' && !checked(m.id) && (levels.indexOf(m.level)>=floor || result.gaps.includes(m.id)));
  const tech=modules.filter(m=>m.track==='technical' && !checked(m.id) && levels.indexOf(m.level)>=Math.max(2,floor-1));
  const queue=[];
  for(let i=0;i<general.length;i++) {
    queue.push(general[i]);
    // Add a technical module only after its prerequisites are scheduled or available as checks.
    if(i%2===1 && tech.length && levels.indexOf(tech[0].level)<=levels.indexOf(general[i].level)) queue.push(tech.shift());
  }
  queue.push(...tech);
  const candidates=new Map(queue.map(m=>[m.id,m]));
  const scheduled=new Set(), ordered=[];
  const append=m=>{
    if(scheduled.has(m.id))return;
    for(const id of m.prerequisites)if(candidates.has(id))append(candidates.get(id));
    scheduled.add(m.id);ordered.push(m);
  };
  queue.forEach(append);
  scheduled.clear();
  const items=ordered.map(m=>{
    const checks=m.prerequisites.filter(id=>!scheduled.has(id)&&!checked(id));
    scheduled.add(m.id);
    return {id:m.id,title:m.title,level:m.level,checks,reason:result.gaps.includes(m.id)?'Тема ошибки во входном тесте':m.track==='technical'?'Цель: разработка ПО':'Последовательное развитие навыков',subtopics:m.subtopics.map(u=>u.id),contentStatus:m.contentStatus};
  });
  return {start:levels[floor],provisional:true,items,minutes:state.profile.minutes,days:state.profile.days,
    pending:['writing','speaking','pronunciation'].filter(s=>!state.profile.reviewedSkills[s])};
}

export function reviewCard(previous, rating, now=Date.now()) {
  if(!['again','hard','good'].includes(rating)) throw new Error('Unknown rating');
  const intervals=[1,3,7,14,30,60];
  const old=previous?.step??-1;
  const step=rating==='again'?0:rating==='hard'?Math.max(0,old):Math.min(old+1,intervals.length-1);
  return {step,due:new Date(now+intervals[step]*86400000).toISOString(),reviewedAt:new Date(now).toISOString(),reviews:(previous?.reviews??0)+1};
}
export function freshState() {
  return {schemaVersion,profile:{...defaults,reviewedSkills:{}},placement:null,placementDraft:{},attempts:[],cards:{},moduleProgress:{},drafts:{},production:{writing:'',speaking:'',pronunciation:''},learning:{},bookmark:null};
}

export const unitById = id=>subtopics.find(u=>u.id===id);
export const isOpen = task=>['text','speech'].includes(task.kind);
export function unitState(state,id) {
  if(!unitById(id))throw new Error('Неизвестная подтема');
  return state.learning[id]??(state.learning[id]={answers:{},checks:{},examDraft:{variant:'a',answers:{}},attempts:[]});
}
export function scoreUnitTest(unit,attempt) {
  const test=unit.tests.find(t=>t.id===attempt.variant);
  if(!test)throw new Error('Неизвестный вариант');
  const rows=test.tasks.map(task=>{
    const response=attempt.answers[task.id]??'';
    const review=attempt.reviews?.[task.id];
    const status=!response.trim()?'missing':isOpen(task)?(!review?'pending':review.score>=3?'passed':'retry'):checkAnswer(response,task.answer)?'passed':'retry';
    return {id:task.id,goal:task.goal,status,response,open:isOpen(task)};
  });
  const closed=rows.filter(r=>!r.open), pending=rows.filter(r=>r.status==='pending').length;
  const correct=closed.filter(r=>r.status==='passed').length;
  return {rows,correct,total:closed.length,pending,
    // Passing this check still does not certify delayed retention or general CEFR.
    status:rows.some(r=>r.status==='missing')?'incomplete':pending?'awaiting-review':correct/Math.max(1,closed.length)>=.8&&rows.filter(r=>r.open).every(r=>r.status==='passed')?'awaiting-delayed-check':'practicing',
    goals:unit.goals.map(g=>({...g,passed:rows.filter(r=>r.goal===g.id&&r.status==='passed').length,total:rows.filter(r=>r.goal===g.id).length,pending:rows.filter(r=>r.goal===g.id&&r.status==='pending').length,retry:rows.filter(r=>r.goal===g.id&&['retry','missing'].includes(r.status)).length}))};
}
export function submitUnitTest(state,id,now=new Date().toISOString()) {
  const unit=unitById(id), progress=unitState(state,id), draft=progress.examDraft;
  if(!draft)throw new Error('Сначала начните новую попытку');
  const test=unit.tests.find(t=>t.id===draft.variant);
  if(test.tasks.some(t=>!draft.answers[t.id]?.trim()))throw new Error('Ответьте на все задания. Если не знаете, напишите «Не знаю»; черновик сохранён.');
  const attempt={id:`${id}-${progress.attempts.length+1}`,version:1,variant:draft.variant,date:now,answers:structuredClone(draft.answers),reviews:{}};
  progress.attempts.push(attempt);progress.examDraft=null;
  return scoreUnitTest(unit,attempt);
}
export function startUnitTest(state,id) {
  const progress=unitState(state,id),unit=unitById(id);
  if(progress.examDraft)return progress.examDraft;
  const variant=unit.tests[progress.attempts.length%unit.tests.length].id;
  return progress.examDraft={variant,answers:{}};
}

const plain=v=>v!==null&&typeof v==='object'&&!Array.isArray(v)&&Object.getPrototypeOf(v)===Object.prototype;
const assert=(test,msg)=>{if(!test)throw new Error(msg);};
const boundedText=(v,n=20000)=>typeof v==='string'&&v.length<=n;
const validDate=v=>typeof v==='string'&&Number.isFinite(Date.parse(v));
const qmap=new Map(questions.map(q=>[q.id,q]));
const mids=new Set(modules.map(m=>m.id));
const vids=new Set(vocabulary.map(v=>v.id));
function validateAnswers(answers) {
  assert(plain(answers),'Некорректные ответы');
  // options.length is the explicit "I don't know" response; omission stays unassessed.
  for(const [id,value] of Object.entries(answers)) assert(qmap.has(id)&&Number.isInteger(value)&&value>=0&&value<=qmap.get(id).options.length,'Неизвестный вопрос или вариант');
}
function validateAttempt(value) {
  assert(plain(value)&&value.assessmentVersion===assessmentVersion&&validDate(value.date),'Несовместимая версия теста или дата');
  validateAnswers(value.answers);
}
// Validate before replacing state. Imported results are recomputed from answers.
export function validateState(value) {
  assert(plain(value)&&[1,schemaVersion].includes(value.schemaVersion),'Несовместимая версия экспорта');
  const visit=v=>{if(v&&typeof v==='object')for(const [k,x] of Object.entries(v)){assert(!['__proto__','prototype','constructor'].includes(k),'Недопустимый ключ');visit(x);}};
  visit(value);
  value=structuredClone(value);
  if(value.schemaVersion===1){value.schemaVersion=2;value.learning={};value.bookmark=null;}
  const p=value.profile;
  assert(plain(p)&&Number.isInteger(p.minutes)&&p.minutes>=1&&p.minutes<=1440&&Number.isInteger(p.days)&&p.days>=1&&p.days<=7,'Некорректное личное расписание');
  assert(boundedText(p.goal,500)&&['en-GB','en-US'].includes(p.accent)&&plain(p.reviewedSkills),'Некорректный профиль');
  for(const [skill,review] of Object.entries(p.reviewedSkills)) {
    assert(['writing','speaking','pronunciation'].includes(skill)&&plain(review)&&levels.includes(review.level)&&boundedText(review.evidence,3000)&&review.evidence.trim().length>=10,'Оценке навыка нужны уровень и основание');
  }
  assert(value.placement===null||plain(value.placement),'Некорректная диагностика');
  if(value.placement) validateAttempt(value.placement);
  validateAnswers(value.placementDraft);
  assert(Array.isArray(value.attempts)&&value.attempts.length<=30,'Слишком много попыток');
  value.attempts.forEach(validateAttempt);
  for(const key of ['cards','moduleProgress','drafts','production']) assert(plain(value[key]),'Некорректный раздел '+key);
  for(const [id,card] of Object.entries(value.cards)) assert(vids.has(id)&&plain(card)&&Number.isInteger(card.step)&&card.step>=0&&card.step<=5&&validDate(card.due)&&validDate(card.reviewedAt)&&Number.isInteger(card.reviews)&&card.reviews>0,'Некорректная карточка');
  for(const [id,progress] of Object.entries(value.moduleProgress)) assert(mids.has(id)&&plain(progress)&&typeof progress.selfChecked==='boolean'&&validDate(progress.date),'Некорректный прогресс модуля');
  for(const [id,draft] of Object.entries(value.drafts)) assert(mids.has(id)&&boundedText(draft),'Некорректный черновик');
  for(const [id,draft] of Object.entries(value.production)) assert(['writing','speaking','pronunciation'].includes(id)&&boundedText(draft),'Некорректный ответ продуктивного навыка');
  assert(plain(value.learning),'Некорректный прогресс подтем');
  const validateResponses=(answers,tasks)=>{
    assert(plain(answers),'Некорректные ответы подтемы');
    for(const [id,answer] of Object.entries(answers))assert(tasks.some(t=>t.id===id)&&boundedText(answer),'Неизвестное задание или слишком длинный ответ');
  };
  for(const [id,progress] of Object.entries(value.learning)){
    const unit=unitById(id);assert(unit&&plain(progress),'Неизвестная подтема');
    const practice=unit.banks.flatMap(b=>b.tasks);
    validateResponses(progress.answers,practice);assert(plain(progress.checks),'Некорректная самопроверка');
    for(const [tid,check] of Object.entries(progress.checks))assert(practice.some(t=>t.id===tid)&&plain(check)&&boundedText(check.answer)&&validDate(check.date),'Некорректная проверка задания');
    if(progress.examDraft!==null){assert(plain(progress.examDraft),'Некорректный черновик теста');const test=unit.tests.find(t=>t.id===progress.examDraft.variant);assert(test,'Неизвестный вариант теста');validateResponses(progress.examDraft.answers,test.tasks);}
    assert(Array.isArray(progress.attempts),'Некорректная история тестов');
    const attemptIds=new Set();
    for(const attempt of progress.attempts){
      assert(plain(attempt)&&boundedText(attempt.id,100)&&!attemptIds.has(attempt.id)&&attempt.version===1&&validDate(attempt.date),'Несовместимая попытка теста');attemptIds.add(attempt.id);
      const test=unit.tests.find(t=>t.id===attempt.variant);assert(test,'Неизвестный вариант попытки');validateResponses(attempt.answers,test.tasks);
      assert(test.tasks.every(t=>attempt.answers[t.id]?.trim()),'Неполная отправленная попытка');assert(plain(attempt.reviews),'Некорректные отзывы');
      for(const [tid,review] of Object.entries(attempt.reviews)){
        const task=test.tasks.find(t=>t.id===tid);
        assert(task&&isOpen(task)&&plain(review)&&Number.isInteger(review.score)&&review.score>=0&&review.score<=4&&boundedText(review.evidence,5000)&&review.evidence.trim().length>=10&&boundedText(review.reviewer,200)&&review.reviewer.trim()&&validDate(review.date),'Открытому ответу нужны оценка 0–4, проверяющий, дата и основание');
        if(task.kind==='speech')assert(review.heardAudio===true,'Устной оценке нужно прослушанное аудио');
      }
    }
  }
  if(value.bookmark!==null){
    const b=value.bookmark;assert(plain(b)&&boundedText(b.route,200)&&Number.isFinite(b.scroll)&&b.scroll>=0&&b.scroll<=10000000&&boundedText(b.focus,200),'Некорректное место продолжения');
    const [route,id,section]=b.route.split('/');
    const unit=unitById(id);
    assert((route==='unit'&&unit&&['explain','examples','test',...unit.banks.map(x=>x.id)].includes(section))||(route==='module'&&mids.has(id)),'Неизвестное место продолжения');
  }
  return structuredClone(value);
}

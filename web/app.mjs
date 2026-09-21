import {createLearningUI} from '/learning.mjs';
import {modules,levels,vocabulary} from '/data/course.mjs';
import {questions,passages,productionTasks,assessmentVersion} from '/data/assessment.mjs';
import {freshState,validateState,scorePlacement,checkAnswer,reviewCard,textSimilarity,unitById} from '/engine.mjs';

const $=s=>document.querySelector(s), main=$('#main'), key='english-training-v1';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let state=freshState(), recovery=false, view='home', recognition=null, speaking=false, speechText='', recognitionError=false;
let cardLevel='Pre-A1', cardQueue=[], cardRevealed=false, cardBatch=10;
let renderedRoute='', bookmarkTimer;
const learning=createLearningUI({main,esc,heading,getState:()=>state,save,notify,speak,download});
const byId=id=>modules.find(m=>m.id===id);
function notify(message){$('#status').textContent=message;clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('#status').textContent='',9000);}
try{const raw=localStorage.getItem(key);if(raw)state=validateState(JSON.parse(raw));}catch{recovery=true;}
function save(){
  if(recovery){notify('Старые данные не удалось прочитать. Экспортируйте исходное хранилище в «Профиль и данные» перед восстановлением. Новое состояние пока только в памяти.');return;}
  try{localStorage.setItem(key,JSON.stringify(state));}catch{notify('Не удалось сохранить в браузере. Экспортируйте JSON: данные пока только в памяти.');}
}
function download(name,text,type='application/json'){
  const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function heading(label,title,lead=''){return `<p class="eyebrow">${esc(label)}</p><h1>${esc(title)}</h1>${lead?`<p class="lead">${esc(lead)}</p>`:''}`;}
function bind(id,event,handler){document.getElementById(id)?.addEventListener(event,handler);}
function languageOptions(selected){return levels.map(l=>`<option ${selected===l?'selected':''}>${esc(l)}</option>`).join('');}
function speak(text){
  if(!('speechSynthesis' in window)){notify('Озвучивание не поддерживается. Используйте транскрипт и чтение партнёром.');return;}
  if(speaking){notify('Сначала остановите микрофон.');return;}
  const voices=speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith('en'));
  if(!voices.length){notify('Английский голос не найден. Установите голос English в ОС или используйте чтение партнёром. Затем обновите страницу.');return;}
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.voice=voices.find(v=>v.lang===state.profile.accent)??voices[0];utterance.lang=utterance.voice.lang;utterance.rate=0.9;
  utterance.onerror=()=>notify('Озвучивание не удалось. Проверьте английский голос и настройки звука.');
  speechSynthesis.speak(utterance);
}
function lesson(id){
  const m=byId(id);if(!m){main.innerHTML='<h1>Модуль не найден</h1><a href="#course">Вернуться к курсу</a>';return;}
  main.innerHTML=`<a href="#course">← Полный курс</a>`+heading(`${m.id} · ${m.level}`,m.title)+
  `<p class="muted">Предпосылки: ${m.prerequisites.map(p=>`<a href="#module/${p}">${p}</a>`).join(', ')||'нет'}. Это краткий материал первой версии, ещё не расширенный топик. Фиксированного числа занятий нет.</p><div class="card"><h2>Разбираемся</h2><p>${esc(m.rule)}</p></div>
  <h2>Примеры</h2>${m.examples.map((x,i)=>`<div class="example">${i===2?'<span class="pill">Сложнее</span>':''}${esc(x)}</div>`).join('')}
  <h2>Чтение</h2><p class="reading">${esc(m.reading[0])}</p><p>${esc(m.reading[1])}</p><details><summary>Ответ после попытки</summary>${esc(m.reading[2])}</details>
  <h2>Аудирование</h2><p>Сначала общий смысл, затем детали. Синтетическое аудио — учебная поддержка; для продвинутых уровней добавьте живые записи.</p><button id="listen">Прослушать</button><p>${esc(m.listening[1])}</p><details><summary>Транскрипт и ответ после попытки</summary><p>${esc(m.listening[0])}</p><p>${esc(m.listening[2])}</p></details>
  <h2>Проверим конструкцию</h2>${m.drills.map((d,i)=>`<label for="drill${i}">${i+1}. ${esc(d[0])}</label><input id="drill${i}" autocomplete="off"><p id="feedback${i}" class="feedback"></p>`).join('')}<button id="check">Проверить</button>
  <h2>Слова в сочетаниях</h2><ul>${m.vocabulary.map(v=>`<li><strong>${esc(v.word)}</strong> — ${esc(v.translation)} · <em>${esc(v.context)}</em></li>`).join('')}</ul>
  <h2>Письмо</h2><p>${esc(m.write)}</p><label for="draft">Ваш черновик (сохраняется в этом браузере)</label><textarea id="draft" maxlength="20000">${esc(state.drafts[id]??'')}</textarea>
  <h2>Речь и взаимодействие</h2><p>${esc(m.speak)}</p><h3>Произношение</h3><p>${esc(m.sound)}</p><a href="#speech">Открыть речевую практику →</a>
  <div class="card"><h3>Проверка переноса навыка</h3><p>Закройте примеры. Придумайте 5 своих предложений, объясните один сложный пример и ответьте на новый вопрос собеседника. Через неделю проверьте навык на другом материале.</p><label><input type="checkbox" id="self-check" ${state.moduleProgress[id]?.selfChecked?'checked':''}>Я выполнил самопроверку модуля</label><small>Это ваша отметка, не подтверждение уровня или оценка агента. Критерии освоения описаны в course/TEACHING.md.</small></div>`;
  bind('listen','click',()=>speak(m.listening[0]));
  bind('check','click',()=>m.drills.forEach((d,i)=>{$(`#feedback${i}`).textContent=checkAnswer($(`#drill${i}`).value,d[1])?`Верно. ${d[2]}`:`Ключ: ${d[1].replaceAll('|',' / ')}. ${d[2]} Для открытых формулировок возможны другие верные варианты — обсудите с агентом.`;}));
  bind('draft','input',e=>{state.drafts[id]=e.target.value;save();});
  bind('self-check','change',e=>{state.moduleProgress[id]={selfChecked:e.target.checked,date:new Date().toISOString()};save();notify('Самопроверка сохранена. Маршрут обновлён.');});
}
function resultsHtml(){
  if(!state.placement)return '';
  const result=scorePlacement(state.placement.answers);
  return `<div class="card"><h2>Предварительный профиль</h2><p>Авторский короткий тест не валидирован как CEFR-экзамен. Метки уровней и порог 75% помогают выбирать учебные темы. При малом числе вопросов результат чувствителен к отдельной ошибке.</p><div class="table-wrap"><table><tr><th>Навык</th><th>Верно / отвечено</th><th>Поддержанная тестом ступень</th><th>Начать работу с</th></tr>${Object.entries(result.skills).map(([s,x])=>`<tr><td>${{grammar:'Грамматика',reading:'Чтение',listening:'Аудирование'}[s]}</td><td>${x.correct} / ${x.answered} из ${x.total}</td><td>${x.complete?esc(x.supported):'Не определено — раздел неполный'}</td><td>${x.complete?esc(x.study):'Нужна проверка'}</td></tr>`).join('')}</table></div><p>Письмо, речь и произношение: отдельная оценка по вашим ответам и аудио. Пройденный тест не подтверждает общий CEFR.</p><a class="button" href="#plan">Предварительный маршрут</a><details><summary>Разбор сохранённой попытки</summary>${questions.filter(q=>Number.isInteger(state.placement.answers[q.id])).map(q=>`<p><strong>${q.id}</strong> ${state.placement.answers[q.id]===q.answer?'✓':'↻'} ${esc(q.prompt)}<br>Ваш ответ: ${esc(q.options[state.placement.answers[q.id]]??'Не знаю ответа')}. Ключ: ${esc(q.options[q.answer])}. ${esc(q.explanation)}</p>`).join('')}</details></div>`;
}
function assessment(){
  main.innerHTML=heading('ПЕРВАЯ ТОЧКА ОТСЧЁТА','Что уже получается?','48 заданий: 24 по грамматике, 12 по чтению, 12 по аудированию. Можно остановиться и продолжить позже, без таймера.')+
  `<p>Работайте без словаря и переводчика. Если ответа нет, выберите «Не знаю ответа» — угадывать не нужно. Ответы автоматически сохраняются. Для расчёта маршрута завершите грамматику и чтение. Аудирование можно оставить неизвестным, если нет английского голоса или возможности слушать. Здесь нет таймера.</p><p class="warning">Для аудирования сначала прослушайте текст, затем отвечайте. Максимум два прослушивания рекомендуется для сопоставимости. Чтение транскрипта вместо прослушивания не проверяет слух.</p>${resultsHtml()}<div id="test-sections"></div>
  <div class="actions"><button id="grade">Сохранить и проверить попытку</button><button class="secondary" id="new-attempt">Очистить черновик для новой попытки</button></div><h2>Письмо и устная часть</h2><p>Эти ответы не оцениваются автоматически. Экспортируйте их для агента; правила оценки — assessment/RUBRICS.md. Не вставляйте конфиденциальные рабочие данные.</p>${productionTasks.map(t=>`<div class="card"><h3>${esc(t.title)}</h3><p>${esc(t.prompt)}</p><label for="prod-${t.id}">${t.id==='writing'?'Ответ':'Транскрипт, заметки или ссылка на локальное аудио для агента'}</label><textarea id="prod-${t.id}" maxlength="20000">${esc(state.production[t.id])}</textarea></div>`).join('')}`;
  const labels={grammar:'Грамматика и употребление',reading:'Чтение',listening:'Аудирование'};
  $('#test-sections').innerHTML=Object.keys(labels).map(skill=>{
    let prior='';
    return `<h2>${labels[skill]}</h2>`+questions.filter(q=>q.skill===skill).map(q=>{
      let passage='';if(q.passage&&q.passage!==prior){prior=q.passage;passage=skill==='reading'?`<p class="reading">${esc(passages[q.passage])}</p>`:`<button type="button" data-listen="${q.passage}">Прослушать ${q.level}</button>`;}
      return `${passage}<fieldset><legend>${q.id} · ${q.level} · ${esc(q.prompt)}</legend>${[...q.options,'Не знаю ответа'].map((o,i)=>`<label class="option"><input type="radio" name="${q.id}" value="${i}" ${state.placementDraft[q.id]===i?'checked':''}>${esc(o)}</label>`).join('')}</fieldset>`;
    }).join('');
  }).join('');
  main.querySelectorAll('input[type=radio]').forEach(input=>input.addEventListener('change',e=>{state.placementDraft[e.target.name]=Number(e.target.value);save();}));
  main.querySelectorAll('[data-listen]').forEach(b=>b.addEventListener('click',()=>speak(passages[b.dataset.listen])));
  bind('grade','click',()=>{
    const remaining=questions.filter(q=>q.skill!=='listening'&&!Number.isInteger(state.placementDraft[q.id]));
    if(remaining.length){notify(`До расчёта завершите грамматику и чтение: осталось ${remaining.length}. Первый пропуск: ${remaining[0].id}. Черновик сохранён.`);return;}
    const attempt={assessmentVersion,date:new Date().toISOString(),answers:{...state.placementDraft}};
    state.placement=attempt;state.attempts=[...state.attempts,structuredClone(attempt)].slice(-30);save();assessment();window.scrollTo(0,0);notify('Попытка сохранена. Предварительный профиль готов.');
  });
  bind('new-attempt','click',()=>{if(confirm('Очистить только текущие ответы? Сохранённый результат и история останутся.')){state.placementDraft={};save();assessment();}});
  for(const task of productionTasks)bind('prod-'+task.id,'input',e=>{state.production[task.id]=e.target.value;save();});
}
function speech(){
  const supported=!!(window.SpeechRecognition||window.webkitSpeechRecognition);
  main.innerHTML=heading('СЛУШАТЬ · ГОВОРИТЬ · ПОВТОРЯТЬ','Дайте словам голос.','Озвучивание помогает услышать фразу, распознавание — получить текст своей речи.')+
  `<div class="warning">Распознавание требует интернета и поддержки браузера. Аудио может передаваться внешней службе браузера. Не произносите секреты. Совпадение текста не измеряет акцент, фонемы, интонацию или уровень английского.</div>
  <label for="target">Фраза для практики</label><textarea id="target">We shipped fifteen small fixes on Thursday. The third service still needs a thorough review.</textarea><button id="model-voice">Послушать образец</button>
  <label><input id="consent" type="checkbox">Я понимаю, что распознавание может передавать аудио службе браузера, и хочу включить микрофон.</label>
  <div class="actions"><button id="start-recognition" ${supported?'':'disabled'}>Начать распознавание</button><button id="stop-recognition" class="secondary" disabled>Остановить</button></div>
  <p id="speech-status" role="status">${supported?'Микрофон выключен.':'API распознавания не поддерживается. Попробуйте совместимый Chrome; наличие API ещё не гарантирует доступность службы. Можно вставить транскрипт вручную.'}</p>
  <label for="transcript">Транскрипт (можно исправить ошибки распознавания вручную)</label><textarea id="transcript">${esc(speechText)}</textarea><div class="actions"><button id="compare">Сравнить текст</button><button id="save-transcript" class="secondary">Сохранить как ответ устной части</button></div><p id="similarity" class="feedback"></p>
  <h2>Как практиковаться</h2><ol><li>Послушайте и отметьте ударные слова.</li><li>Повторите сначала медленно, затем целой смысловой группой.</li><li>Скажите новую фразу с той же конструкцией.</li><li>Для разбора произношения запишите аудио отдельно и дайте его слушателю или агенту, который может его прослушать.</li></ol><p>Приложение не сохраняет аудиозапись. Транскрипт сохраняется только по кнопке; обработку аудио внешней службой определяет браузер.</p>`;
  bind('model-voice','click',()=>speak($('#target').value));
  bind('start-recognition','click',()=>{
    if(!$('#consent').checked){notify('Перед включением отметьте согласие на обработку речи.');return;}
    if(!navigator.onLine){notify('Нет подключения к интернету. Распознавание не запущено.');return;}
    window.speechSynthesis?.cancel();
    const Constructor=window.SpeechRecognition||window.webkitSpeechRecognition;
    recognition=new Constructor();recognition.lang=state.profile.accent;recognition.continuous=true;recognition.interimResults=false;
    if('processLocally' in recognition)recognition.processLocally=false;
    recognitionError=false;
    recognition.onstart=()=>{speaking=true;$('#start-recognition').disabled=true;$('#stop-recognition').disabled=false;$('#speech-status').textContent='Слушаю… Нажмите «Остановить», когда закончите.';};
    recognition.onresult=e=>{
      let text='';for(let i=e.resultIndex;i<e.results.length;i++)if(e.results[i].isFinal)text+=e.results[i][0].transcript+' ';
      speechText=($('#transcript')?.value??speechText)+' '+text.trim();if($('#transcript'))$('#transcript').value=speechText.trim();
    };
    recognition.onerror=e=>{
      recognitionError=true;
      const errors={'not-allowed':'Доступ к микрофону запрещён. Проверьте разрешения сайта и ОС.','service-not-allowed':'Служба распознавания недоступна в этом браузере.','network':'Сетевая ошибка службы. Проверьте интернет или используйте ручной транскрипт.','audio-capture':'Микрофон не найден или занят.','no-speech':'Речь не обнаружена. Попробуйте ещё раз.','language-not-supported':'Служба не поддерживает выбранный язык.','aborted':'Распознавание остановлено.'};
      if($('#speech-status'))$('#speech-status').textContent=errors[e.error]??`Ошибка распознавания: ${e.error}`;
    };
    recognition.onend=()=>{speaking=false;if($('#start-recognition')){$('#start-recognition').disabled=false;$('#stop-recognition').disabled=true;if(!recognitionError)$('#speech-status').textContent='Микрофон выключен. Можно исправить транскрипт и сравнить текст.';}};
    try{recognition.start();$('#start-recognition').disabled=true;}catch{notify('Не удалось запустить распознавание. Проверьте браузер и разрешения.');$('#start-recognition').disabled=false;}
  });
  bind('stop-recognition','click',()=>recognition?.stop());
  bind('transcript','input',e=>speechText=e.target.value);
  bind('compare','click',()=>{$('#similarity').textContent=`Сходство последовательности слов: ${textSimilarity($('#target').value,$('#transcript').value)}%. Это сравнение текста, не оценка произношения. Числа и сокращения могут распознаваться иначе.`;});
  bind('save-transcript','click',()=>{state.production.speaking=$('#transcript').value.slice(0,20000);save();notify('Транскрипт сохранён в устной части диагностики. Произношение по нему не оценивается.');});
}
function refillCards(){
  const pool=vocabulary.filter(v=>byId(v.module).level===cardLevel);
  const due=pool.filter(v=>state.cards[v.id]&&Date.parse(state.cards[v.id].due)<=Date.now()).sort((a,b)=>Date.parse(state.cards[a.id].due)-Date.parse(state.cards[b.id].due));
  cardQueue=[...due,...pool.filter(v=>!state.cards[v.id]).slice(0,cardBatch)];cardRevealed=false;
}
function cards(){
  main.innerHTML=heading('СЛОВА · КОНСТРУКЦИИ · ВЫРАЖЕНИЯ','Вспомнить. Перевернуть. Применить.','На лицевой стороне — слово или выражение. Нажмите на карточку или используйте Enter / пробел. На обороте — перевод, IPA и контекст.')+
  `<div class="actions"><label>Уровень <select id="card-level">${languageOptions(cardLevel)}</select></label><label>Новых карточек в подходе <input type="number" id="card-batch" min="1" max="100" value="${cardBatch}"></label></div><p>Интервалы: 1, 3, 7, 14, 30, 60 дней. Ошибка возвращает на один день; «трудно» сохраняет текущий интервал. Это простой учебный алгоритм, не модель памяти.</p><div id="flashcard"></div>`;
  bind('card-level','change',e=>{cardLevel=e.target.value;refillCards();showCard();});bind('card-batch','change',e=>{cardBatch=Math.max(1,Math.min(100,Number(e.target.value)||10));refillCards();showCard();});showCard();
}
function showCard(){
  const card=cardQueue[0];if(!card){$('#flashcard').innerHTML='<div class="card"><h2>Этот подход завершён.</h2><p>Можно сделать перерыв или взять следующую порцию. Объём словаря не зависит от размера подхода.</p><button id="more-cards" class="secondary">Ещё один подход</button></div>';bind('more-cards','click',()=>{refillCards();showCard();});return;}
  $('#flashcard').innerHTML=`<p class="muted">В очереди: ${cardQueue.length} · ${card.module} · ${esc(card.kind)}</p><button type="button" id="flip-card" class="flip-card ${cardRevealed?'is-flipped':''}" aria-pressed="${cardRevealed}" aria-label="${cardRevealed?esc(card.word+' — '+card.translation+'; '+card.ipa+' UK; '+card.context+'; '+card.note+'. Нажмите, чтобы показать слово.'):'Перевернуть карточку: '+esc(card.word)}"><span class="flip-inner"><span class="card-face card-front" ${cardRevealed?'aria-hidden="true"':'aria-hidden="false"'}><span class="card-caption">ВСПОМНИТЕ ЗНАЧЕНИЕ И СВОЮ ФРАЗУ</span><span class="word" lang="en">${esc(card.word)}</span><span class="card-hint">Нажмите, чтобы перевернуть ↻</span></span><span class="card-face card-back" ${cardRevealed?'aria-hidden="false"':'aria-hidden="true"'}><span class="card-caption">${esc(card.word)}</span><span class="card-translation">${esc(card.translation)}</span><span class="ipa" lang="en">${esc(card.ipa)} <small>UK</small></span><span lang="en">${esc(card.context)}</span><span class="card-note">${esc(card.note)}</span></span></span></button><div class="actions card-controls"><button id="word-audio" class="secondary">Озвучить слово / выражение</button><button id="context-audio" class="secondary">Озвучить пример</button></div><div class="actions" id="card-ratings">${cardRevealed?'<button data-rating="again" class="secondary">Не вспомнил</button><button data-rating="hard" class="secondary">Трудно</button><button data-rating="good">Вспомнил и составил фразу</button>':'<p class="muted">Оцените вспоминание после переворота. Озвучивание не засчитывает знание.</p>'}</div>`;
  bind('flip-card','click',()=>{cardRevealed=!cardRevealed;showCard();$('#flip-card').focus({preventScroll:true});});
  bind('word-audio','click',()=>speak(card.word));bind('context-audio','click',()=>speak(card.context));
  main.querySelectorAll('[data-rating]').forEach(b=>b.addEventListener('click',()=>{state.cards[card.id]=reviewCard(state.cards[card.id],b.dataset.rating);save();cardQueue.shift();cardRevealed=false;showCard();}));
}
function library(){
  main.innerHTML=heading('ОБЪЯСНЕНИЯ И ПРАКТИКА','Библиотека курса.','Открытые учебники находятся в library/open/. Коммерческие книги добавляются как личные копии в library/private/.')+
  `<div class="grid"><div class="card"><span class="pill">A1–B1</span><h2>Essential Grammar in Use</h2><p>Raymond Murphy. Базовая грамматика и практика.</p><a href="https://shop.cambridge.org/english/product/2700140114" target="_blank" rel="noreferrer">Cambridge →</a></div><div class="card"><span class="pill">B1–B2</span><h2>English Grammar in Use</h2><p>Raymond Murphy. Контрасты времён и конструкций.</p><a href="https://www.cambridge.es/catalogo/gramatica-vocabulario-y-pronunciacion/gramatica/english-grammar-in-use5" target="_blank" rel="noreferrer">Cambridge →</a></div><div class="card"><span class="pill">C1–C2</span><h2>Advanced Grammar in Use</h2><p>Martin Hewings. Продвинутая грамматика серии.</p><a href="https://www.cambridge.es/en/catalogue/grammar-vocabulary-and-pronunciation/grammar/advanced-grammar-in-use-4" target="_blank" rel="noreferrer">Cambridge →</a></div></div>
  <h2>Скачанные открытые книги</h2><ul><li><a href="https://opentextbc.ca/writingforsuccess/" target="_blank" rel="noreferrer">Writing for Success</a> — Tara Horkoff и соавтор, CC BY-NC-SA 4.0 с исключениями. Локально: library/open/writing-for-success.pdf.</li><li><a href="https://opentextbc.ca/technicalwritingh5p/" target="_blank" rel="noreferrer">Technical Writing Essentials</a> — Suzan Last, CC BY 4.0 с исключениями для отдельных материалов. Локально: library/open/technical-writing-essentials.pdf.</li></ul><p>Тематическая карта Murphy/Hewings: library/MURPHY.md. Лицензии и происхождение: library/SOURCES.json и DOWNLOADS.json. Личные книги и ответы сервер не публикует.</p>`;
}
function settings(){
  main.innerHTML=heading('ПРОФИЛЬ И РЕЗЕРВНЫЕ КОПИИ','Настроить под свою жизнь.','Агент не видит localStorage автоматически. Экспортируйте JSON и сохраните в learner/private/progress.json для совместной работы.')+
  `<form id="profile"><label for="goal">Цель</label><input id="goal" maxlength="500" value="${esc(state.profile.goal)}"><div class="grid"><label>Личный ориентир, минут<input id="minutes" type="number" min="1" max="1440" value="${state.profile.minutes}" required></label><label>Дней в неделю<input id="days" type="number" min="1" max="7" value="${state.profile.days}" required></label></div><label for="accent">Предпочтение для голоса и распознавания</label><select id="accent"><option value="en-GB" ${state.profile.accent==='en-GB'?'selected':''}>British English</option><option value="en-US" ${state.profile.accent==='en-US'?'selected':''}>American English</option></select><p>Оба варианта языка допустимы. По умолчанию — 30 минут, 5 дней. Это личный ориентир, не длительность модуля: меняйте свободно, объём работы сохраняется.</p><h2>Оценки после обсуждения с агентом</h2><p>Вносите уровень только после проверки по рубрике. Для речи и произношения нужно слышимое аудио; если его нет, оставьте «Не определено». Это запись внешней оценки, не автоматическая проверка приложением.</p>${['writing','speaking','pronunciation'].map(s=>`<label for="review-${s}">${{writing:'Письмо',speaking:'Устная речь',pronunciation:'Произношение'}[s]}</label><select id="review-${s}"><option value="unknown">Не определено</option>${languageOptions(state.profile.reviewedSkills[s]?.level)}</select><label for="evidence-${s}">Кто оценил, дата, задание, наблюдения и ограничения</label><textarea id="evidence-${s}" maxlength="3000">${esc(state.profile.reviewedSkills[s]?.evidence??'')}</textarea>`).join('')}<button type="submit">Сохранить профиль</button></form>
  <h2>Данные принадлежат вам</h2><p>Экспорт содержит ваши ответы и черновики. Не публикуйте его в открытом GitHub. Очистка данных браузера удалит локальную копию; JSON позволяет восстановить её.</p><div class="actions"><button id="export">Экспорт JSON</button><button id="raw-export" class="secondary">Скачать исходное хранилище</button></div><label for="import">Импорт JSON (до 12 МБ; заменяет текущий прогресс после проверки и подтверждения)</label><input type="file" id="import" accept="application/json,.json">
  <h2>Восстановление / сброс</h2><button id="reset" class="danger">Сбросить данные этого приложения</button><p class="muted">Сброс не удаляет файлы на диске. Перед ним сохраните экспорт.</p>`;
  bind('profile','submit',e=>{e.preventDefault();const next=structuredClone(state);next.profile={goal:$('#goal').value,minutes:Number($('#minutes').value),days:Number($('#days').value),accent:$('#accent').value,reviewedSkills:{}};
    for(const s of ['writing','speaking','pronunciation'])if($('#review-'+s).value!=='unknown')next.profile.reviewedSkills[s]={level:$('#review-'+s).value,evidence:$('#evidence-'+s).value};
    try{state=validateState(next);save();notify('Профиль сохранён; маршрут пересчитан.');}catch(error){notify(error.message);}
  });
  bind('export','click',()=>download('progress.json',JSON.stringify(state,null,2)));
  bind('raw-export','click',()=>{try{download('progress-raw.json',localStorage.getItem(key)??'null');}catch{notify('Хранилище недоступно. Используйте обычный экспорт состояния в памяти.');}});
  bind('import','change',async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>12*1024*1024)throw new Error('Файл больше 12 МБ');const candidate=validateState(JSON.parse(await file.text()));if(!confirm('Заменить текущий прогресс проверенным импортом? Экспортируйте текущий, если хотите сохранить обе версии.'))return;state=candidate;recovery=false;save();settings();notify('Импорт завершён. Результаты пересчитаны из ответов.');}catch(error){notify('Импорт отклонён: '+error.message);}finally{e.target.value='';}});
  bind('reset','click',()=>{if(confirm('Удалить только прогресс English Training из этого браузера? Сохраните экспорт заранее.')){state=freshState();recovery=false;save();settings();notify('Прогресс приложения сброшен. Файлы на диске не изменены.');}});
}
function rememberPosition(){
  if(!/^(unit|module)\//.test(renderedRoute))return;
  const [route,id,section]=renderedRoute.split('/'),unit=unitById(id);
  if(route==='module'&&!byId(id))return;
  if(route==='unit'&&(!unit||!['explain','examples','test',...unit.banks.map(b=>b.id)].includes(section)))return;
  state.bookmark={route:renderedRoute,scroll:window.scrollY,focus:document.activeElement?.id??''};save();
}
function render(){
  clearTimeout(bookmarkTimer);
  if(recognition){recognition.onstart=null;recognition.onresult=null;recognition.onerror=null;recognition.onend=null;recognition.abort();}
  recognition=null;speaking=false;window.speechSynthesis?.cancel();
  const route=location.hash.slice(1)||'home';view=route.split('/')[0];
  const resume=state.bookmark?.route===route?structuredClone(state.bookmark):null;
  renderedRoute=route;
  document.querySelectorAll('aside nav a').forEach(a=>{if(a.hash==='#'+(['module','unit'].includes(view)?'course':view))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  if(view==='module'){if(!learning.topic(route.split('/')[1]))lesson(route.split('/')[1]);}
  else if(view==='unit')learning.unit(route.split('/')[1],route.split('/')[2]);
  else if(view==='references')learning.references(route.split('/')[1]);
  else if(view==='cards'){refillCards();cards();}
  else({home:learning.home,course:learning.course,assessment,speech,plan:learning.plan,library,settings}[view]??learning.home)();
  main.dataset.route=route;
  if(recovery)main.insertAdjacentHTML('afterbegin','<p class="warning">Сохранённые данные не удалось прочитать. Новые изменения пока только в памяти. <a href="#settings">Скачайте исходное хранилище перед восстановлением.</a></p>');
  requestAnimationFrame(()=>{
    if(renderedRoute!==route)return;
    if(resume?.focus)document.getElementById(resume.focus)?.focus({preventScroll:true});
    window.scrollTo(0,resume?.scroll??0);
    if(/^(unit|module)\//.test(route)&&(!route.startsWith('unit/')||route.split('/')[2]))rememberPosition();
  });
}
window.addEventListener('hashchange',render);
window.addEventListener('scroll',()=>{clearTimeout(bookmarkTimer);bookmarkTimer=setTimeout(rememberPosition,120);},{passive:true});
main.addEventListener('focusin',()=>{if(/^(unit|module)\//.test(renderedRoute))rememberPosition();});
window.addEventListener('pagehide',()=>{rememberPosition();recognition?.abort();window.speechSynthesis?.cancel();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){rememberPosition();recognition?.abort();}});
window.speechSynthesis?.getVoices();
render();

import foundation from './foundation.mjs';
import intermediate from './intermediate.mjs';
import advanced from './advanced.mjs';
import technical from './technical.mjs';
import p01 from './p01.mjs';
import p02 from './p02.mjs';
import p03 from './p03.mjs';
import p04 from './p04.mjs';
import a101 from './a101.mjs';
import a102 from './a102.mjs';
import a103 from './a103.mjs';
import a104 from './a104.mjs';
import a105 from './a105.mjs';
import a201 from './a201.mjs';
import a202 from './a202.mjs';
import a203 from './a203.mjs';
import a204 from './a204.mjs';
import a205 from './a205.mjs';
import b101 from './b101.mjs';
import b102 from './b102.mjs';
import b103 from './b103.mjs';
import b104 from './b104.mjs';
import b105 from './b105.mjs';
import b201 from './b201.mjs';
import b202 from './b202.mjs';
import b203 from './b203.mjs';
import b204 from './b204.mjs';
import b205 from './b205.mjs';
import c101 from './c101.mjs';
import c102 from './c102.mjs';
import c103 from './c103.mjs';
import {legacyIPA,extraVocabulary} from './lexicon.mjs';
import {p02Vocabulary} from './lexicon-p02.mjs';
import {p03Vocabulary} from './lexicon-p03.mjs';
import {p04Vocabulary} from './lexicon-p04.mjs';
import {a101Vocabulary} from './lexicon-a101.mjs';
import {a102Vocabulary} from './lexicon-a102.mjs';
import {a103Vocabulary} from './lexicon-a103.mjs';
import {a104Vocabulary} from './lexicon-a104.mjs';
import {a105Vocabulary} from './lexicon-a105.mjs';
import {a201Vocabulary} from './lexicon-a201.mjs';
import {a202Vocabulary} from './lexicon-a202.mjs';
import {a203Vocabulary} from './lexicon-a203.mjs';
import {a204Vocabulary} from './lexicon-a204.mjs';
import {a205Vocabulary} from './lexicon-a205.mjs';
import {b101Vocabulary} from './lexicon-b101.mjs';
import {b102Vocabulary} from './lexicon-b102.mjs';
import {b103Vocabulary} from './lexicon-b103.mjs';
import {b104Vocabulary} from './lexicon-b104.mjs';
import {b105Vocabulary} from './lexicon-b105.mjs';
import {b201Vocabulary} from './lexicon-b201.mjs';
import {b202Vocabulary} from './lexicon-b202.mjs';
import {b203Vocabulary} from './lexicon-b203.mjs';
import {b204Vocabulary} from './lexicon-b204.mjs';
import {b205Vocabulary} from './lexicon-b205.mjs';
import {c101Vocabulary} from './lexicon-c101.mjs';
import {c102Vocabulary} from './lexicon-c102.mjs';
import {c103Vocabulary} from './lexicon-c103.mjs';

export const levels = ['Pre-A1','A1','A2','B1','B2','C1','C2'];
const core = [...foundation, ...intermediate, ...advanced];
const units = [...p01,...p02,...p03,...p04,...a101,...a102,...a103,...a104,...a105,...a201,...a202,...a203,...a204,...a205,...b101,...b102,...b103,...b104,...b105,...b201,...b202,...b203,...b204,...b205,...c101,...c102,...c103];
const addedVocabulary = [...extraVocabulary,...p02Vocabulary,...p03Vocabulary,...p04Vocabulary,...a101Vocabulary,...a102Vocabulary,...a103Vocabulary,...a104Vocabulary,...a105Vocabulary,...a201Vocabulary,...a202Vocabulary,...a203Vocabulary,...a204Vocabulary,...a205Vocabulary,...b101Vocabulary,...b102Vocabulary,...b103Vocabulary,...b104Vocabulary,...b105Vocabulary,...b201Vocabulary,...b202Vocabulary,...b203Vocabulary,...b204Vocabulary,...b205Vocabulary,...c101Vocabulary,...c102Vocabulary,...c103Vocabulary];
export const modules = [...core, ...technical].map((m, i) => ({
  ...m,
  track: m.id.startsWith('T') ? 'technical' : 'general',
  prerequisites: m.prerequisites ?? (i > 0 ? [core[i-1].id] : []),
  skills: ['grammar','vocabulary','reading','listening','writing','speaking','pronunciation'],
  subtopics: units.filter(u=>u.topic===m.id),
  contentStatus: units.some(u=>u.topic===m.id)?'expanded':'legacy',
  vocabulary: [...m.words.split('; ').map((entry, j) => {
    const [word, translation, context] = entry.split('~');
    return {id:`${m.id}-v${j+1}`, word, translation, context, module:m.id,ipa:`/${legacyIPA[m.id].split('~')[j]}/`,accent:'UK',kind:word.includes(' ')?'выражение':'слово',note:'Учебная UK-транскрипция; в связной речи возможны слабые формы. Другие нормативные акценты допустимы.'};
  }), ...addedVocabulary.filter(v=>v.module===m.id)]
}));
export const subtopics = modules.flatMap(m=>m.subtopics);
export const courseStats = {topics:modules.length,expanded:modules.filter(m=>m.contentStatus==='expanded').length,subtopics:subtopics.length,practice:subtopics.reduce((n,u)=>n+u.banks.reduce((a,b)=>a+b.tasks.length,0),0),testTasks:subtopics.reduce((n,u)=>n+u.tests.reduce((a,t)=>a+t.tasks.length,0),0)};
export const vocabulary = modules.flatMap(m => m.vocabulary);
export const defaults = {minutes:30, days:5, goal:'Разработка ПО — общий профиль', accent:'en-GB'};
export const weeklyPattern = [
  'Вспомнить изученное и продолжить с сохранённого места.',
  'Разобрать механизм и примеры; применить в разнородной практике.',
  'После подтемы пройти отдельный тест и получить разбор пробелов.',
  'Вернуться к трудным местам и проверить навык на новом материале.',
  'Повторить с отсрочкой; длительность подхода не сокращает объём работы.'
];

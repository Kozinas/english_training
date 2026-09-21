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
import {legacyIPA,extraVocabulary} from './lexicon.mjs';
import {p02Vocabulary} from './lexicon-p02.mjs';
import {p03Vocabulary} from './lexicon-p03.mjs';
import {p04Vocabulary} from './lexicon-p04.mjs';
import {a101Vocabulary} from './lexicon-a101.mjs';
import {a102Vocabulary} from './lexicon-a102.mjs';
import {a103Vocabulary} from './lexicon-a103.mjs';

export const levels = ['Pre-A1','A1','A2','B1','B2','C1','C2'];
const core = [...foundation, ...intermediate, ...advanced];
const units = [...p01,...p02,...p03,...p04,...a101,...a102,...a103];
const addedVocabulary = [...extraVocabulary,...p02Vocabulary,...p03Vocabulary,...p04Vocabulary,...a101Vocabulary,...a102Vocabulary,...a103Vocabulary];
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

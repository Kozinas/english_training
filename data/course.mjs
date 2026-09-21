import foundation from './foundation.mjs';
import intermediate from './intermediate.mjs';
import advanced from './advanced.mjs';
import technical from './technical.mjs';

export const levels = ['Pre-A1','A1','A2','B1','B2','C1','C2'];
const core = [...foundation, ...intermediate, ...advanced];
export const modules = [...core, ...technical].map((m, i) => ({
  ...m,
  track: m.id.startsWith('T') ? 'technical' : 'general',
  prerequisites: m.prerequisites ?? (i > 0 ? [core[i-1].id] : []),
  skills: ['grammar','vocabulary','reading','listening','writing','speaking','pronunciation'],
  sessions: 5,
  vocabulary: m.words.split('; ').map((entry, j) => {
    const [word, translation, context] = entry.split('~');
    return {id:`${m.id}-v${j+1}`, word, translation, context, module:m.id};
  })
}));
export const vocabulary = modules.flatMap(m => m.vocabulary);
export const defaults = {minutes:30, days:5, goal:'Разработка ПО — общий профиль', accent:'en-GB'};
export const weeklyPattern = [
  'Понедельник: повторение 5 мин → правило и чтение 10 → упражнения 10 → итог 5.',
  'Вторник: повторение 5 → аудирование 10 → диктант и разбор 10 → пересказ 5.',
  'Среда: повторение 5 → произношение 5 → разговор с уточнениями 15 → итог 5.',
  'Четверг: повторение 5 → письмо 15 → правка и новое применение 10.',
  'Пятница: повторение 5 → новое проверочное задание 10 → речь 10 → план следующей недели 5.'
];

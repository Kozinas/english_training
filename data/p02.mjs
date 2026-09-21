import numbers from './p02-numbers.mjs';
import time from './p02-time.mjs';
import instructions from './p02-instructions.mjs';

instructions.sources=[
 ['Cambridge: commands and instructions','https://dictionary.cambridge.org/us/grammar/british-grammar/commands-and-instructions'],
 ['British Council: imperatives','https://learnenglishkids.britishcouncil.org/grammar-vocabulary/grammar-practice/imperatives']
];

// Natural conceptual boundaries, not equal-length sessions or a time budget.
export default [numbers,time,instructions];

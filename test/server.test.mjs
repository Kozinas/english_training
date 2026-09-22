import test from 'node:test';
import assert from 'node:assert/strict';
import {once} from 'node:events';
import {createServer} from '../scripts/serve.mjs';

test('local server serves course assets and excludes private/repository paths',async()=>{
  const server=createServer();server.listen(0,'127.0.0.1');await once(server,'listening');
  const base=`http://127.0.0.1:${server.address().port}`;
  try{
    for(const route of ['/','/styles.css','/app.mjs','/engine.mjs','/learning.mjs','/data/course.mjs','/data/assessment.mjs','/data/p01.mjs','/data/p02.mjs','/data/p02-numbers.mjs','/data/p02-time.mjs','/data/p02-instructions.mjs','/data/p03.mjs','/data/p03-nouns.mjs','/data/p03-articles.mjs','/data/p03-reference.mjs','/data/p03-possession.mjs','/data/nouns.mjs','/data/lexicon-p03.mjs','/data/numbers.mjs','/data/unit-tools.mjs','/data/lexicon.mjs','/data/lexicon-p02.mjs','/data/reference.mjs','/data/irregular.mjs',
      '/navigation-state.mjs','/data/p04.mjs','/data/p04-statements.mjs','/data/p04-yesno.mjs','/data/p04-wh.mjs','/data/be-questions.mjs','/data/lexicon-p04.mjs',
      '/data/a101.mjs','/data/a101-forms.mjs','/data/a101-negatives.mjs','/data/a101-questions.mjs','/data/a101-frequency.mjs','/data/present-simple.mjs','/data/lexicon-a101.mjs',
      '/data/a102.mjs','/data/a102-building.mjs','/data/a102-contrast.mjs','/data/a102-states.mjs','/data/present-continuous.mjs','/data/lexicon-a102.mjs',
      '/data/a104.mjs','/data/a104-be.mjs','/data/a104-actions.mjs','/data/a104-did.mjs','/data/past-simple.mjs','/data/lexicon-a104.mjs',
      '/data/a103.mjs','/data/a103-existence.mjs','/data/a103-portions.mjs','/data/a103-quantity.mjs','/data/a103-place.mjs','/data/quantity-place.mjs','/data/lexicon-a103.mjs','/assets/a103-kitchen.svg']){
      const response=await fetch(base+route);assert.equal(response.status,200,route);assert(response.headers.get('content-security-policy'));assert((await response.text()).length>100);
    }
    const diagram=await fetch(base+'/assets/a103-kitchen.svg');assert.equal(diagram.headers.get('content-type'),'image/svg+xml');assert((await diagram.text()).includes('viewBox="0 0 720 560"'));
    for(const route of ['/learner/private/progress.json','/library/private/book.pdf','/.git/config','/package.json','/%2e%2e/.git/config','/web/app.mjs','/data/../../README.md','/assets/other.svg','/web/assets/a103-kitchen.svg','/assets/../../learner/private/progress.json'])assert.equal((await fetch(base+route)).status,404,route);
    assert.equal((await fetch(base+'/',{method:'POST'})).status,405);
    const head=await fetch(base+'/',{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');
  }finally{await new Promise(resolve=>server.close(resolve));}
});

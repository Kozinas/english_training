import test from 'node:test';
import assert from 'node:assert/strict';
import {once} from 'node:events';
import {createServer} from '../scripts/serve.mjs';

test('local server serves course assets and excludes private/repository paths',async()=>{
  const server=createServer();server.listen(0,'127.0.0.1');await once(server,'listening');
  const base=`http://127.0.0.1:${server.address().port}`;
  try{
    for(const route of ['/','/styles.css','/app.mjs','/engine.mjs','/learning.mjs','/data/course.mjs','/data/assessment.mjs','/data/p01.mjs','/data/p02.mjs','/data/p02-numbers.mjs','/data/p02-time.mjs','/data/p02-instructions.mjs','/data/numbers.mjs','/data/unit-tools.mjs','/data/lexicon.mjs','/data/lexicon-p02.mjs','/data/reference.mjs','/data/irregular.mjs']){
      const response=await fetch(base+route);assert.equal(response.status,200,route);assert(response.headers.get('content-security-policy'));assert((await response.text()).length>100);
    }
    for(const route of ['/learner/private/progress.json','/library/private/book.pdf','/.git/config','/package.json','/%2e%2e/.git/config','/web/app.mjs','/data/../../README.md'])assert.equal((await fetch(base+route)).status,404,route);
    assert.equal((await fetch(base+'/',{method:'POST'})).status,405);
    const head=await fetch(base+'/',{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');
  }finally{await new Promise(resolve=>server.close(resolve));}
});

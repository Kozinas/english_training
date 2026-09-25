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
      '/data/a105.mjs','/data/a105-pronouns.mjs','/data/a105-plans.mjs','/data/a105-will.mjs','/data/a105-can.mjs','/data/future-choices.mjs','/data/lexicon-a105.mjs',
      '/data/a201.mjs','/data/a201-results.mjs','/data/a201-experience.mjs','/data/a201-duration.mjs','/data/a201-contrast.mjs','/data/present-perfect.mjs','/data/lexicon-a201.mjs',
      '/data/a202.mjs','/data/a202-description.mjs','/data/a202-comparison.mjs','/data/a202-degree.mjs','/data/comparison.mjs','/data/lexicon-a202.mjs',
      '/data/a203.mjs','/data/a203-obligation.mjs','/data/a203-advice.mjs','/data/a203-conditions.mjs','/data/rules-conditions.mjs','/data/lexicon-a203.mjs',
      '/data/a204.mjs','/data/a204-continuous.mjs','/data/a204-story.mjs','/data/a204-relative.mjs','/data/story-reference.mjs','/data/lexicon-a204.mjs',
      '/data/b102.mjs','/data/b102-hypotheses.mjs','/data/b102-wishes.mjs','/data/b102-possibility.mjs','/data/hypothesis-reference.mjs','/data/lexicon-b102.mjs',
      '/data/b103.mjs','/data/b103-focus.mjs','/data/b103-processes.mjs','/data/b103-services.mjs','/data/passive-reference.mjs','/data/lexicon-b103.mjs',
      '/data/b104.mjs','/data/b104-statements.mjs','/data/b104-questions.mjs','/data/b104-tags.mjs','/data/reporting-reference.mjs','/data/lexicon-b104.mjs',
      '/data/b204.mjs','/data/b204-register.mjs','/data/b204-argument.mjs','/data/b204-lexis.mjs','/data/argument-reference.mjs','/data/lexicon-b204.mjs',
      '/data/b205.mjs','/data/b205-ellipsis.mjs','/data/b205-presentation.mjs','/data/b205-discussion.mjs','/data/discourse-reference.mjs','/data/lexicon-b205.mjs',
      '/data/c101.mjs','/data/c101-inversion.mjs','/data/c101-clefts.mjs','/data/c101-fronting.mjs','/data/focus-reference.mjs','/data/lexicon-c101.mjs',
      '/data/c201.mjs','/data/c201-scope.mjs','/data/c201-modality.mjs','/data/c201-aspect.mjs','/data/precision-reference.mjs','/data/lexicon-c201.mjs',
      '/data/c105.mjs','/data/c105-sources.mjs','/data/c105-synthesis.mjs','/data/c105-argument.mjs','/data/synthesis-reference.mjs','/data/lexicon-c105.mjs',
      '/data/c104.mjs','/data/c104-intent.mjs','/data/c104-idioms.mjs','/data/c104-negotiation.mjs','/data/pragmatics-reference.mjs','/data/lexicon-c104.mjs',
      '/data/c103.mjs','/data/c103-nouns.mjs','/data/c103-links.mjs','/data/c103-editing.mjs','/data/dense-text-reference.mjs','/data/lexicon-c103.mjs',
      '/data/c102.mjs','/data/c102-reporting.mjs','/data/c102-mandative.mjs','/data/c102-distance.mjs','/data/modal-reference.mjs','/data/lexicon-c102.mjs',
      '/data/b203.mjs','/data/b203-relative.mjs','/data/b203-participles.mjs','/data/b203-determiners.mjs','/data/clause-precision.mjs','/data/lexicon-b203.mjs',
      '/data/b202.mjs','/data/b202-alternatives.mjs','/data/b202-deduction.mjs','/data/b202-regrets.mjs','/data/past-alternatives.mjs','/data/lexicon-b202.mjs',
      '/data/b201.mjs','/data/b201-past.mjs','/data/b201-frame.mjs','/data/b201-result.mjs','/data/time-perspectives.mjs','/data/lexicon-b201.mjs',
      '/data/b105.mjs','/data/b105-reference.mjs','/data/b105-cohesion.mjs','/data/b105-lexis.mjs','/data/b105-messages.mjs','/data/writing-reference.mjs','/data/lexicon-b105.mjs',
      '/data/b101.mjs','/data/b101-continuous.mjs','/data/b101-earlier.mjs','/data/b101-habits.mjs','/data/duration-history.mjs','/data/lexicon-b101.mjs',
      '/data/a205.mjs','/data/a205-patterns.mjs','/data/a205-phrasal.mjs','/data/a205-time.mjs','/data/action-reference.mjs','/data/lexicon-a205.mjs',
      '/data/a103.mjs','/data/a103-existence.mjs','/data/a103-portions.mjs','/data/a103-quantity.mjs','/data/a103-place.mjs','/data/quantity-place.mjs','/data/lexicon-a103.mjs','/assets/a103-kitchen.svg']){
      const response=await fetch(base+route);assert.equal(response.status,200,route);assert(response.headers.get('content-security-policy'));assert((await response.text()).length>100);
    }
    const diagram=await fetch(base+'/assets/a103-kitchen.svg');assert.equal(diagram.headers.get('content-type'),'image/svg+xml');assert((await diagram.text()).includes('viewBox="0 0 720 560"'));
    for(const route of ['/learner/private/progress.json','/library/private/book.pdf','/.git/config','/package.json','/%2e%2e/.git/config','/web/app.mjs','/data/../../README.md','/assets/other.svg','/web/assets/a103-kitchen.svg','/assets/../../learner/private/progress.json'])assert.equal((await fetch(base+route)).status,404,route);
    assert.equal((await fetch(base+'/',{method:'POST'})).status,405);
    const head=await fetch(base+'/',{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');
  }finally{await new Promise(resolve=>server.close(resolve));}
});

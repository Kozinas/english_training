import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../',import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml'};
const routes=new Map([
 ...['t04-performance','t04-performance-texts','t04-performance-tests','performance-language'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['t04','t04-decisions','t04-decisions-texts','t04-decisions-tests','architecture-decisions','lexicon-t04'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['t03','t03-review','t03-review-texts','t03-review-tests','t03-api','t03-api-texts','t03-api-tests','t03-testing','t03-testing-texts','t03-testing-tests','testing-language','api-contract-language','review-language','lexicon-t03'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['t02','t02-report','t02-report-texts','t02-report-tests','bug-report-language','t02-verification','t02-verification-texts','t02-verification-tests','verification-language','t02-updates','t02-updates-texts','t02-updates-tests','work-update-language','lexicon-t02'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ['/','web/index.html'],['/styles.css','web/styles.css'],['/app.mjs','web/app.mjs'],['/engine.mjs','web/engine.mjs'],['/learning.mjs','web/learning.mjs'],
 ['/navigation-state.mjs','web/navigation-state.mjs'],
 ['/assets/a103-kitchen.svg','web/assets/a103-kitchen.svg'],
 ['/assets/t01-interface.svg','web/assets/t01-interface.svg'],
 ...['t01-procedures','t01-procedures-texts','t01-procedures-tests','procedure-language'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['t01-documentation','t01-documentation-texts','t01-documentation-tests','documentation-language'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['t01','t01-interface','t01-interface-texts','t01-interface-tests','interface-language','lexicon-t01'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['a103','a103-existence','a103-portions','a103-quantity','a103-place','quantity-place','lexicon-a103'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['a104','a104-be','a104-actions','a104-did','past-simple','lexicon-a104'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['a105','a105-pronouns','a105-plans','a105-will','a105-can','future-choices','lexicon-a105'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['a201','a201-results','a201-experience','a201-duration','a201-contrast','present-perfect','lexicon-a201'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['a202','a202-description','a202-comparison','a202-degree','comparison','lexicon-a202'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['a203','a203-obligation','a203-advice','a203-conditions','rules-conditions','lexicon-a203'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['a204','a204-continuous','a204-story','a204-relative','story-reference','lexicon-a204'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['a205','a205-patterns','a205-phrasal','a205-time','action-reference','lexicon-a205'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b101','b101-continuous','b101-earlier','b101-habits','duration-history','lexicon-b101'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b102','b102-hypotheses','b102-wishes','b102-possibility','hypothesis-reference','lexicon-b102'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b103','b103-focus','b103-processes','b103-services','passive-reference','lexicon-b103'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b104','b104-statements','b104-questions','b104-tags','reporting-reference','lexicon-b104'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b203','b203-relative','b203-participles','b203-determiners','clause-precision','lexicon-b203'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b204','b204-register','b204-argument','b204-lexis','argument-reference','lexicon-b204'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b205','b205-ellipsis','b205-presentation','b205-discussion','discourse-reference','lexicon-b205'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c101','c101-inversion','c101-clefts','c101-fronting','focus-reference','lexicon-c101'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c202','c202-idiomatic','c202-concision','c202-revision','style-reference','lexicon-c202'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c204','c204-mediation','mediation-reference','lexicon-c204','c204-rebuttal','rebuttal-reference','c204-discussion','discussion-flow'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c205','c205-inquiry','c205-inquiry-texts','project-inquiry','lexicon-c205','c205-writing','c205-writing-texts','project-writing','c205-defence','c205-defence-texts','c205-defence-tests','project-defence','c205-development','c205-development-texts','c205-development-tests','project-development'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c203','c203-inference','c203-discourse','inference-reference','listening-discourse','lexicon-c203','c203-connected','connected-speech'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c201','c201-scope','c201-modality','c201-aspect','precision-reference','lexicon-c201'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c105','c105-sources','c105-synthesis','c105-argument','synthesis-reference','lexicon-c105'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c104','c104-intent','c104-idioms','c104-negotiation','pragmatics-reference','lexicon-c104'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c103','c103-nouns','c103-links','c103-editing','dense-text-reference','lexicon-c103'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['c102','c102-reporting','c102-mandative','c102-distance','modal-reference','lexicon-c102'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b202','b202-alternatives','b202-deduction','b202-regrets','past-alternatives','lexicon-b202'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b201','b201-past','b201-frame','b201-result','time-perspectives','lexicon-b201'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['b105','b105-reference','b105-cohesion','b105-lexis','b105-messages','writing-reference','lexicon-b105'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
 ...['course','foundation','intermediate','advanced','technical','assessment','reference','irregular','numbers','nouns','be-questions','present-simple','present-continuous','lexicon','lexicon-p02','lexicon-p03','lexicon-p04','lexicon-a101','lexicon-a102','p01','p02','p02-numbers','p02-time','p02-instructions','p03','p03-nouns','p03-articles','p03-reference','p03-possession','p04','p04-statements','p04-yesno','p04-wh','a101','a101-forms','a101-negatives','a101-questions','a101-frequency','a102','a102-building','a102-contrast','a102-states','unit-tools'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs'])
]);
export function createServer() {
  return http.createServer(async(req,res)=>{
    const headers={'X-Content-Type-Options':'nosniff','Cache-Control':'no-store','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'"};
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{...headers,Allow:'GET, HEAD'});res.end();return;}
    // Exact path allowlist: never expose .git, purchased books or learner/private.
    const pathname=(req.url??'/').split('?')[0];
    const relative=routes.get(pathname);
    if(!relative){res.writeHead(404,headers);res.end('Not found');return;}
    try{
      const body=await readFile(path.join(root,relative));
      res.writeHead(200,{...headers,'Content-Type':mime[path.extname(relative)],'Content-Length':body.length});
      res.end(req.method==='HEAD'?undefined:body);
    }catch{res.writeHead(500,headers);res.end('Unable to read public asset');}
  });
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const port=Number(process.env.PORT??4173);
  if(!Number.isInteger(port)||port<1||port>65535)throw new Error('Invalid PORT');
  const server=createServer();
  server.on('error',error=>{console.error(error.code==='EADDRINUSE'?'Port is busy. Set PORT to another number.':error.message);process.exitCode=1;});
  server.listen(port,'127.0.0.1',()=>console.log(`English Training: http://127.0.0.1:${port} (Ctrl+C to stop)`));
}

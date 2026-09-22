import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../',import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml'};
const routes=new Map([
 ['/','web/index.html'],['/styles.css','web/styles.css'],['/app.mjs','web/app.mjs'],['/engine.mjs','web/engine.mjs'],['/learning.mjs','web/learning.mjs'],
 ['/navigation-state.mjs','web/navigation-state.mjs'],
 ['/assets/a103-kitchen.svg','web/assets/a103-kitchen.svg'],
 ...['a103','a103-existence','a103-portions','a103-quantity','a103-place','quantity-place','lexicon-a103'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs']),
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

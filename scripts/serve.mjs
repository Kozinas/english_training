import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../',import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8'};
const routes=new Map([
 ['/','web/index.html'],['/styles.css','web/styles.css'],['/app.mjs','web/app.mjs'],['/engine.mjs','web/engine.mjs'],['/learning.mjs','web/learning.mjs'],
 ...['course','foundation','intermediate','advanced','technical','assessment','reference','irregular','lexicon','p01','unit-tools'].map(n=>['/data/'+n+'.mjs','data/'+n+'.mjs'])
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

// Compact authoring format, not a random task generator. Append IDs; never reorder published rows.
// kind~goal~prompt~key or sample~explanation or rubric
export function tasks(prefix, source) {
 return source.trim().split('\n').map((line,index)=>{
  const [kind,goal,prompt,answer,explanation]=line.split('~');
  if(!kind||!goal||!prompt||!answer||!explanation)throw new Error(`Incomplete task ${prefix}-${index+1}`);
  return {id:`${prefix}-${index+1}`,kind,goal,prompt,answer,explanation};
 });
}
export const examples = source=>source.trim().split('\n').map(line=>{
 const [en,ru,why]=line.split('~');return {en,ru,why};
});
export const bank = (unit,id,title,kind,source,passage='')=>({id,title,kind,passage,tasks:tasks(`${unit}-${id}`,source)});
export const exam = (unit,id,source)=>({id,title:`Вариант ${id.toUpperCase()}`,tasks:tasks(`${unit}-test-${id}`,source)});
export const goal = (id,label,bank)=>({id,label,bank});

import * as prettier from 'prettier';

export const formatCode = (code): Promise<string> => {
return new Promise((resolve, reject)=>{
    resolve(prettier.format(code, {parser: 'vue'}),) 
})
}
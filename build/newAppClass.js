const {
    startsWithCapitalLetter,
    writeFile
} = require('./utils');
const {
    resolve
} = require('path');
process.on('exit', () => {
    console.log();
});

if (!process.argv[2]) {
    console.error('Class name is required');
    process.exit(1);
}
const firstLetterCapital = /^[A-Z]/
let className = process.argv[2];
// auto toUpperCase if not Capital
if (!startsWithCapitalLetter(className)) {
    className = className.charAt(0).toUpperCase() + className.slice(1)
}
const files = [{
    path: resolve(__dirname, `../app/${className}.ts`),
    content: `
export default class ${className} {
    constructor(){

    }
}
        `
},
{
    path: resolve(__dirname, `../types/${className}.d.ts`),
    content: `
    interface ${className} {
        
    }
    `
}];

(async function create(){
    for (const file of files) {
        await writeFile(file.path, file.content)
    }
})()

console.log('generate finished');


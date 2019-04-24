const {
    startsWithCapitalLetter,
    writeFile
} = require('./utils');
const {
    resolve
} = require('path');
const chalk = require('chalk');
process.on('exit', () => {
    console.log();
});
const fs = require('fs');
if (!process.argv[2]) {
    console.error('Class name is required');
    process.exit(1);
}
const firstLetterCapital = /^[A-Z]/
let className = process.argv[2];
const comment = process.argv[3]
// auto toUpperCase if not Capital
if (!startsWithCapitalLetter(className)) {
    className = className.charAt(0).toUpperCase() + className.slice(1)
}
const files = [{
    path: resolve(__dirname, `../app/${className}.ts`),
    content: `
    ${comment ? 
    `
    /**
    * ${comment.split('-').join(' ')}
    */
    ` : ''
    }
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
        if(fs.existsSync(file.path)){
           throw new Error(chalk.red(`file: ${file.path} is already exists. will not create ${className}`));
        }
        await writeFile(file.path, file.content)
    }
})()

console.log(chalk.green(`new class ${className} generated`));


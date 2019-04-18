const {
    resolve
} = require('path');
const {
    readDir,
    writeFile
} = require('./utils');
const fs = require('fs');

(async function generateTypesEntry() {
    let fileContent = ''
    if (fs.existsSync(resolve(__dirname, '../types/index.d.ts'))) {
        fs.unlink(resolve(__dirname, '../types/index.d.ts'), ()=> {
            console.log('found exists index.d.ts removed');
        })
    }
    const files = await readDir(resolve(__dirname, '../types/'))
    
    files.forEach(e => {
        const currentFileConfig = `/// <reference path="./${e}" /> \n`
        fileContent += currentFileConfig
    })
    await writeFile(resolve(__dirname, '../types/index.d.ts'), fileContent)
    console.log('write index.d.ts entry end');
})()
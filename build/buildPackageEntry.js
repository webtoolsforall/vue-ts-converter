const {
    resolve
} = require('path');
const {
    readDir,
    writeFile,
    readComponents
} = require('./utils');
const fs = require('fs');

(async function generateTypesEntry() {
    let fileContent = ''
    if (fs.existsSync(resolve(__dirname, '../app/index.ts'))) {
        fs.unlink(resolve(__dirname, '../app/index.ts'), ()=> {
            console.log('found exists index.ts removed');
        })
    }
    const files = await readComponents(resolve(__dirname, '../app/'))
    files.forEach(e => {
        const currentFileConfig = `export {default as ${e}} from "./${e}" \n`
        fileContent += currentFileConfig
    })
    await writeFile(resolve(__dirname, '../app/index.ts'), fileContent)
    console.log('write index.ts entry end');
})()


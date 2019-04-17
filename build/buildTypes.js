const {
    resolve
} = require('path');
const {
    readDir
} = require('./utils');
const fs = require('fs');

(async function generateTypesEntry() {
    if (fs.existsSync(resolve(__dirname, '../types/index.d.ts'))) {
        fs.unlink(resolve(__dirname, '../types/index.d.ts'))
    }
    const files = await readDir(resolve(__dirname, '../types/'))
    debugger
})()
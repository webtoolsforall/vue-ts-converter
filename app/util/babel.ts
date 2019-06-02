
import { parser } from '@vuese/parser'
const fs = require('fs');
const path = require('path');
export const parseVue = ()=>{
 // Read vue file content
const source = fs.readFileSync(path.resolve(__dirname, '../../source/btmBanner.vue'), 'utf-8')

// Parse and get the result using the parser function
try {
  const parserRes = parser(source)
  debugger
} catch(e) {
  console.error(e)
}
}
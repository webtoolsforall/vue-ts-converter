const {startsWithCapitalLetter} = require('./utils');
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
if(!startsWithCapitalLetter(className)){
    className = className.charAt(0).toUpperCase() + className.slice(1)
}
console.log(className);
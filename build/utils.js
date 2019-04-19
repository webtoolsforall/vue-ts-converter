const fs = require('fs');
exports.readDir = async (dir, options) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, options, (err, files) => {
            if (err) {
                reject(err)
            }
            resolve(files)
        });
    })
}
// with '.' and caption
exports.readComponents = (dir) => {
    return new Promise((resolve, reject) => {
        const dirs = fs.readdirSync(dir, {
            withFileTypes: true
        });
        const filesNames = dirs
            .filter(d => d.includes('.'))
            .filter(d => this.startsWithCapitalLetter(d))
            .map(d => d.split('.').splice(0, 1)[0])
        resolve(filesNames)
    })
}
exports.writeFile = async (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, 'utf-8', err => {
            if (err) {
                reject(err)
            }
            resolve()
        })
    })
}
// 'A' => 65
// 'Z' => 90
exports.startsWithCapitalLetter = (word) => {
    return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
}
const fs = require('fs');
exports.readDir = async (dir) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                reject(err)
            }
            resolve(files)
        });
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
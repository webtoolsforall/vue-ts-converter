const fs = require("fs");
export default class FileReader {
  constructor() {
    console.log("bingo");
  }
  
  /**
   *
   * @param {String} path 文件路径
   * @param {Object} opt 读取选项
   * @returns {String} 文件内容
   */
  readFile(path: String, opt: Object): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(path, opt, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
}

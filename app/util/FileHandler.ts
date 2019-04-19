import * as fs from "fs";

export const readFile = (path: string, opt: object): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, opt, (err: Error, data: string) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
/**
 * 
 * @param path 路径
 * @param data 数据
 * @param opt 选项
 */
export const writeFile = (path: string, data: string|Buffer, opt: object): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, opt, err => {
      if (err) {
        reject(err);
      }
      resolve('success');
    });
  });
};

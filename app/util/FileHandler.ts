import * as fs from "fs";

export const readFile = (path: string, opt: object = {encoding: 'utf-8'}): Promise<string> => {
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
export const writeFile = (
  path: string,
  data: string | Buffer,
  opt: object
): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, opt, err => {
      if (err) {
        reject(err);
      }
      resolve("success");
    });
  });
};
/**
 *
 * @param dir the dir to read
 * @param options fs.readdir opt
 */
export const readFilesUnderDir = (dir, options) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, options, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
};

export const readFilesWithoutSuffix = dir => {
  return new Promise((resolve, reject) => {
    const dirs = fs.readdirSync(dir, {
      withFileTypes: true
    });
    const filesNames = dirs
      .filter(d => d.name.includes("."))
      .map(d => d.name.split(".").splice(0, 1)[0]);
    resolve(filesNames);
  });
};

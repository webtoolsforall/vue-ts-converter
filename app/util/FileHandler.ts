import * as fs from "fs";
import * as mkdirp from 'mkdirp';
import {getPathFromFile} from './';
import logger from '../logger';
export const copy = (from, to): Promise<any> => {
  mkdirp.sync(getPathFromFile(to))
  return new Promise((resolve, reject) => {
    fs.copyFile(from, to, err => {
      if (err) throw err;
      logger.info(`copy file :[${to}] success`);
      resolve();
    });
  });
};
export const readFile = (
  path: string,
  opt: object = { encoding: "utf-8" }
): Promise<string> => {
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
      .filter(d => d.includes(".") || d.name.includes("."))
      .map(
        d => d.split(".").splice(0, 1)[0] || d.name.split(".").splice(0, 1)[0]
      );
    resolve(filesNames);
  });
};

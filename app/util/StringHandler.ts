const path = require('path');
const fs = require('fs');
import logger from '../logger';
/**
 * 
 * @param pathString file path to handle
 */
export const addSuffix = (pathString: string): string => {
	logger.info(`[addVueSuffix] handling: ${pathString}`);
	const resolveSuffixList = ['.js', '.vue', '.json'];
	const suffixRegexp = /(.*[A-Z,a-z,0-9]){3}\.((png|js|jpeg|jpg|vue|mp4))/g; //deepscan-disable-line
	if (!suffixRegexp.test(pathString)) {
		for (const d of resolveSuffixList) {
			const filePath = `${pathString}${d}`;
			if (fs.existsSync(filePath)) {
				logger.info(path.resolve(filePath));
				logger.info(`[addVueSuffix] return: ${path.resolve(filePath)}`);
				return path.resolve(filePath);
			}
		}
	} else {
		logger.info(`[addVueSuffix] return: ${pathString}`);
		return pathString;
	}
};
/**
 * get absolute path from a file location
 * @param file file path to handle
 * @returns {string} file absolute path
 */
export const getPathFromFile = (file): string => {
	logger.info(`[getPathFromFile] param: file, value:${file}`);
	const pathMeta = path.resolve(file).split('/');
	return pathMeta.slice(0, pathMeta.length - 1).join('/');
};
/**
 * upper case first letter to match class requirement
 * @param name the component name to handle
 * @returns {string} string with first letter upper
 */
export const upperFirstLetter = (name): string => {
	return name.charAt(0).toUpperCase() + name.slice(1);
};

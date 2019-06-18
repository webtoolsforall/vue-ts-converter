import { readFile } from '.';
import { parseComponent, compile, ASTNode } from 'vue-template-compiler';
import logger from '../logger';
export const parseVueSFC = async (filePath: string, tag: string = 'script') => {
	return new Promise(async (resolve, reject) => {
		try {
			logger.info(`[parseVueSFC] parsing ${filePath}`);
			// do not parse file that is not vue sfc
			if (!filePath.endsWith('vue')) {
				resolve(false);
			}
			let commentsString = await readFile(filePath);
			let parsedComponentData = parseComponent(commentsString);
			logger.info(`[parseVueSFC] parse ${filePath} finishes`);
			logger.info(
				`[parseVueSFC] parse ${filePath} with error: ${
					parsedComponentData.errors
				}`
			);
			if (parsedComponentData[tag] && parsedComponentData[tag].content) {
				logger.info(
					`[parseVueSFC] got result:  with path: ${filePath} tag: ${tag}`
				);
			} else {
				logger.info(
					`[parseVueSFC] do not got result parsed data: ${parsedComponentData} with path: ${filePath} tag: ${tag}`
				);
			}
			resolve(
				parsedComponentData[tag] && parsedComponentData[tag].content
					? parsedComponentData[tag].content
					: false
			);
		} catch (error) {
			reject(error);
		}
	});
};
/**
 * compile template to get ast
 * @param {String} template template string
 */
export const compileTemplateToGetAst = (template): ASTNode => {
	// console.log(template);
	try {
		return compile(template).ast
	} catch (error) {
			debugger
	}
	
};

export const flatAst = (arr): Array<any> => {

	return arr.children.reduce((acc, x) => {
		acc = acc.concat(x);
		if (x.children && x.children.length > 0) {
			acc = acc.concat(flatAst(x));
			x.children = [];
		}
		return acc;
	}, []);
};

export const getStaticElements = (flatAst: Array<any>):Promise<Array<any>> => {
	const elementsList = ['img'];
	return new Promise((resolve, reject)=>{
		resolve(flatAst.filter(d => elementsList.includes(d.tag) || (d.attrsMap && d.attrsMap.style && d.attrsMap.style.includes('background'))))
	})
};

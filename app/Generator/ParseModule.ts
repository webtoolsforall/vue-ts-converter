import {
	readFile,
	parseComponentScript,
	addVueSuffix,
	getPathFromFile
} from '../util';
import DataBus from './DataBus';
import winston from '../logger';
import logger from '../logger';
export default class ParseModule {
	projectConfig: VueTsConfig = null;
	bus: DataBus = null;
	logger = null;
	constructor(config) {
		this.projectConfig = config;
		this.bus = DataBus;
		this.logger = winston;
	}
	/**
	 * parse subModules
	 */
	async parseSubModules(moduleToCheck):Promise<any> {
		logger.info(`[parseSubModules] parsing file: ${moduleToCheck}`);
		return new Promise(async (resolve, reject) => {
			let path = getPathFromFile(moduleToCheck);
			const busGoods: ModuleToMove = {
				from: addVueSuffix(moduleToCheck),
				to: await this.gotCopyDestination(addVueSuffix(moduleToCheck))
			};
			logger.info(`[parseSubModules] got fil to copy: ${busGoods}`);
			this.bus.add(busGoods);
			let modules = await this.checkSubModules(moduleToCheck);
			if (modules.length > 0) {
				this.logger.info(
					`[parseSubModules] got subModules: ${modules} from : ${moduleToCheck}`
				);
				for (const subModule of modules) {
					logger.info(`[parseSubModules] looping module ${subModule}`)
					if (this.checkIsModule(subModule)) {
						logger.info(`[parseSubModules] find module:${subModule} to be handle`);
						logger.info(`[parseSubModules] will parse ${path}/${subModule}`);
						 this.parseSubModules(`${path}/${subModule}`);
					} else {
						logger.info(`[parseSubModules] find dependencies/alias:${subModule} to be handle`);
						let aliasParsePath = await this.checkAlias(subModule);
						 this.parseSubModules(aliasParsePath);
					}
				}
			} else {
				logger.info(`got no module with ${moduleToCheck}`)
				resolve()
			}
			resolve();
		});
	}
	checkIsModule(importPath: string): Boolean {
		return importPath.startsWith('.');
	}
	/**
	 * check if has import mark
	 * flow:
	 * 1. read file
	 * 2. parse string content
	 */
	checkSubModules(
		componentPath: string
	): Promise<Boolean | Array<string> | any> {
		return new Promise(async (resolve, reject) => {
			let aliasToExclude = ['api', 'fun'];
			try {
				const result = [];
				let componentString = await readFile(addVueSuffix(componentPath));
			let test = 	new DOMParser().parseFromString(componentString)
			debugger
				// has no js script. mean without sub modules
				if (
					!componentString.includes('<script>') &&
					!componentString.includes('</script>')
				) {
					resolve(result);
					return;
				}
				// 8 is the length of '<script>'
				const startPoint = componentString.indexOf('<script>') + 8;
				const endPoint = componentString.indexOf('</script>');
				let componentJsCode = componentString.substring(startPoint, endPoint);
				let {
					program: { body: parseResult }
				} = await parseComponentScript(componentJsCode);
				parseResult.forEach(d => {
					if (d.type === 'ImportDeclaration') {
						// value not in exclude list
						if (!aliasToExclude.includes(d.source.value)) {
							result.push(d.source.value);
						}
					}
				});
				resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

	checkStaticResource (componentPath: string) :Promise<Boolean | Array<string> | any>{

		return
	}
	/**
	 * parse alias and return absolute path
	 * @param path import xx from '' value
	 *  @return {Promise<string>} parse result
	 */
	checkAlias(path): Promise<string> {
		return new Promise((resolve, reject) => {
			let self = this;
			try {
				this.logger.info(`[checkAlias] checking: ${path}`);
				let matchAliasAtFirst: RegExp = /(.*?)\//;
				if (matchAliasAtFirst.test(path) && !self.checkIsModule(path)) {
					let alias = matchAliasAtFirst.exec(path);
					self.logger.info(`got alias: ${alias && alias[1]} from ${path}`);
					if (!self.projectConfig.alias[alias && alias[1]]) {
						resolve(path);
						return;
					}
					self.logger.info(
						`[checkAlias] return: ${addVueSuffix(
							`${this.projectConfig.alias[alias && alias[1]]}/${path.replace(
								`${alias && alias[1]}/`,
								''
							)}`
						)} with data: ${path}`
					);
					console.log(
						addVueSuffix(
							`${self.projectConfig.alias[alias && alias[1]]}/${path.replace(
								`${alias && alias[1]}/`,
								''
							)}`
						)
					);
					resolve(
						addVueSuffix(
							`${self.projectConfig.alias[alias && alias[1]]}/${path.replace(
								`${alias && alias[1]}/`,
								''
							)}`
						)
					);
				} else {
					if (!this.projectConfig.alias[path]) {
						this.logger.info(`[checkAlias] add module as dependence: ${path}`);
						this.bus.addDependence(path);
						return;
					} else {
						this.logger.warn(`[checkAlias] unhanded module: ${path}`);
					}
					this.logger.info(
						`[checkAlias] return unmatched module: ${path} with data: ${path}`
					);
				}
			} catch (error) {
				reject(error);
			}
		});
	}
	/**
	 * return the absolute path bu got the path after /src/xx. based on project config
	 * @param componentPath path
	 */
	gotCopyDestination(componentPath): Promise<string> {
		let self = this;
		return new Promise((resolve, reject) => {
			try {
				let matchSrcRegexp = /(src.*"*)/;
				if (matchSrcRegexp.test(componentPath)) {
					let result = matchSrcRegexp.exec(componentPath);
					let relativePath = result[1].replace('"', '');
					resolve(
						addVueSuffix(`${self.projectConfig.outPutPath}/${relativePath}`)
					);
				} else {
					resolve(addVueSuffix(`${componentPath}`));
				}
			} catch (error) {
				reject(error);
			}
		});
	}
}

import {
	readFile,
	parseComponentScript,
	addVueSuffix,
	getPathFromFile,
	parseVueSFC,
	compileTemplateToGetAst,
	flatAst,
	getStaticElements
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
	async parseSubModules(moduleToCheck): Promise<any> {
		try {
			if(!moduleToCheck){
				return
			}
			logger.info(`[parseSubModules] parsing file: ${moduleToCheck}`);
			return new Promise(async (resolve, reject) => {
				const busGoods: ModuleToMove = {
					from: addVueSuffix(moduleToCheck),
					to: await this.gotCopyDestination(addVueSuffix(moduleToCheck))
				};
				logger.info(`[parseSubModules] got fil to copy: ${busGoods}`);
				this.bus.add(busGoods);
				let modules = await this.checkSubModules(moduleToCheck);
				this.loopJsModules(modules, moduleToCheck);
				this.checkTemplateStatic(moduleToCheck);
				resolve();
			});
		} catch (error) {
			this.logger.error(`[parseSubModules] failed with error: ${error}`);
		}
	}
	async loopJsModules(modules, moduleToCheck) {
		let path = getPathFromFile(moduleToCheck);
		if (modules.length > 0) {
			this.logger.info(
				`[parseSubModules] got subModules: ${modules} from : ${moduleToCheck}`
			);
			for (const subModule of modules) {
				logger.info(`[parseSubModules] looping module ${subModule}`);
				if (this.checkIsModule(subModule)) {
					logger.info(
						`[parseSubModules] find module:${subModule} to be handle`
					);
					logger.info(`[parseSubModules] will parse ${path}/${subModule}`);
					this.parseSubModules(`${path}/${subModule}`);
				} else {
					logger.info(
						`[parseSubModules] find dependencies/alias:${subModule} to be handle`
					);
					let aliasParsePath = await this.checkAlias(subModule);
					this.parseSubModules(aliasParsePath);
				}
			}
		} else {
			logger.info(`got no module with ${moduleToCheck}`);
		}
	}
	checkTemplateStatic(componentPath: string) {
		return new Promise(async (resolve, reject) => {
			if(!addVueSuffix(componentPath).endsWith('vue')){
				logger.info(`[checkTemplateStatic] found none vue file:${componentPath}`)
				resolve()
				return
			}
			let componentTemplate = await parseVueSFC(
				addVueSuffix(componentPath),
				'template'
			);
			let staticResources = await getStaticElements(
				flatAst(compileTemplateToGetAst(componentTemplate))
			);
			// parse static resource when got
			if (staticResources.length > 0) {
				await this.parseStaticResource(staticResources);
			}
			this.logger.info(
				`[checkTemplateStatic] got resources: ${staticResources.toString()} from: ${componentPath}`
			);
			resolve();
		});
	}
	parseStaticResource(resources) {
		return new Promise((resolve, reject) => {
			resources.forEach(async d => {
				if (d.attrsMap['src']) {
					let staticPath = await this.checkAlias(d.attrsMap['src']);
					let destination = await this.parseStaticDestination(staticPath)
					try {
						this.bus.add({
							from: staticPath.startsWith('/static') ? `${this.projectConfig.copyFromStatic}${staticPath} `: staticPath,
							to: destination
						})
					} catch (error) {
						this.logger.error(`[parseStaticResource] error: ${error}`)
					}
					
					
				}
			});
		});
	}
	parseStaticDestination(from):Promise<any>{
		return new Promise(async (resolve, reject)=>{
			const staticRegexp = /^\/static\/(.*)"*/gm
			if(staticRegexp.test(from)){
				let result = from.match(staticRegexp)
				debugger
				// TODO: remove static from regexp
				resolve(`${this.projectConfig.staticResourcePath}${result && result[0]}`)
			} else if (from.includes('src/assets')){
				let srcMatcher = /src\/(.*)"*/gm
				// let result = `${this.projectConfig.outPutPath}/${from.match(srcMatcher)[0]}`
				resolve(`${this.projectConfig.outPutPath}/${from.match(srcMatcher)[0]}`)	
			} 
			else {
				this.logger.error(`[parseStaticDestination] unmatched param:${from}`)
			}
		})
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
				let componentJsCode = await parseVueSFC(addVueSuffix(componentPath));
				if (!componentJsCode) {
					resolve(result);
					return
				}
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

	checkStaticResource(
		componentPath: string
	): Promise<Boolean | Array<string> | any> {
		return;
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

/**
 * generate
 * nuxt components
 * 1. parse router
 * 2. get route component path
 * 3. copy file
 * 4. parse component content and copy other file
 */
import {
  readFile,
  parseComponentScript,
  addVueSuffix,
  getPathFromFile,
  copy,
  flatVueRouterArray,
  uniqArrayObject
} from "../util";
import winston from "../logger";
export default class Generator {
  vueRouter: Array<any> = [];
  projectConfig: VueTsConfig = null;
  fileToMove = [];
  logger = null;

  constructor(router: Array<any>, config: VueTsConfig) {
    this.vueRouter = router;
    this.projectConfig = config;
    this.logger = winston;
    this.start();
  }
  async start() {
    let vueRouter = await this.flatVueRouter(this.vueRouter);
    for (const route of vueRouter) {
      await this.parseRouteModules(route);
    }
    this.doFileCopy(uniqArrayObject(this.fileToMove, "from"));
  }
  async flatVueRouter(router): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      try {
        const result = flatVueRouterArray(router);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * parse single router and move it
   * @param route vue router single route config
   */
  async parseRouteModules(route): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let parsedRoute: RouterParseResult = await this.parseRouterConfig(
          route
        );
        this.addModuleToList({
          from: addVueSuffix(parsedRoute.fileRelativePath),
          to:
            (await this.gotCopyDestination(parsedRoute.fileRelativePath)) ||
            null
        });
        // parse subModule
        await this.parseSubModules(parsedRoute.fileRelativePath);
        resolve();
      } catch (error) {
        debugger;
        reject();
        this.logger.error(new Error("[iterateRouter] error: " + error));
        console.log(error);
      }
    });
  }
  /**
   * parse subModules
   */
  async parseSubModules(moduleToCheck) {
    return new Promise(async (resolve, reject) => {
      
    });
  }
  addModuleToList(moduleData: ModuleToMove) {
    this.fileToMove.push(moduleData);
  }
  // copy files with this.fileToMove data
  async doFileCopy(files) {
    for (const file of files) {
      await copy(file.from, file.to);
    }
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
          let relativePath = result[1].replace('"', "");
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
  checkIsModule(importPath: string): Boolean {
    return importPath.startsWith(".");
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
      let aliasToExclude = ["api", "fun"];
      try {
        const result = [];
        debugger
        let componentString = await readFile(addVueSuffix(componentPath));
        // has no js script. mean without sub modules
        if (
          !componentString.includes("<script>") &&
          !componentString.includes("</script>")
        ) {
          resolve(result);
          return;
        }
        // 8 is the length of '<script>'
        const startPoint = componentString.indexOf("<script>") + 8;
        const endPoint = componentString.indexOf("</script>");
        let componentJsCode = componentString.substring(startPoint, endPoint);
        let {
          program: { body: parseResult }
        } = await parseComponentScript(componentJsCode);
        parseResult.forEach(d => {
          if (d.type === "ImportDeclaration") {
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
  /**
   * parse router component fn and returun RouterParseResult
   * @param route vue router config
   * @returns {RouterParseResult} result
   */
  parseRouterConfig(route): Promise<RouterParseResult> {
    let matchRoutePathRegex: RegExp = /require\('(.*?)'\)/g;
    return new Promise(async (resolve, reject) => {
      try {
        let matchResult: RouterParseResult = {
          fileRelativePath: "",
          path: ""
        };
        let result: RegExpExecArray = matchRoutePathRegex.exec(
          route.component.toString()
        );
        let path = result && result[1];
        matchResult.fileRelativePath = await this.checkAlias(path);
        matchResult.path = route.path;
        resolve(matchResult);
      } catch (error) {
        reject(`[Generator/parseRouterConfig]: ${error}`);
      }
    });
  }
  /**
   * parse alias and return absolute path
   * @param path import xx from '' value
   */
  checkAlias(path): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        let matchAliasAtFirst: RegExp = /(.*?)\//;
        if (matchAliasAtFirst.test(path) && !this.checkIsModule(path)) {
          let alias = matchAliasAtFirst.exec(path);
          if(!this.projectConfig.alias[alias && alias[1]]){
              resolve(path)
              return
          }
          resolve(
            addVueSuffix(
              `${this.projectConfig.alias[alias && alias[1]]}/${path.replace(
                `${alias && alias[1]}/`,
                ""
              )}`
            )
          );
        } else {
          resolve(`${path}`);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}

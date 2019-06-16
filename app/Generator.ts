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
  flatVueRouterArray
} from "./util";
import winston from "./logger";
export default class Generator {
  vueRouter: Array<any> = [];
  projectConfig: VueTsConfig = null;
  fileToMove = [];
  logger = null;

  constructor(router: Array<any>, config: VueTsConfig) {
    this.vueRouter = router;
    this.projectConfig = config;
    this.logger = winston;
    this.start()
  }
  async start () {
      let vueRouter = await this.flatVueRouter(this.vueRouter)
      vueRouter.forEach(d => {
        this.parseSingleRoute(d)
      })
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
  async parseSingleRoute(route) {
    try {
      let parsedRoute: RouterParseResult = await this.parseRouterConfig(route);
      this.fileToMove.push({
        from: addVueSuffix(parsedRoute.fileRelativePath),
        to:
          (await this.gotCopyDestination(parsedRoute.fileRelativePath)) || null
      });
      let subModules = await this.checkSubModules(parsedRoute.fileRelativePath);
      for (const module of subModules) {
        let subPath = await this.checkAlias(module);
        let stillHasSubModule = await this.checkSubModules(subPath);
        if (stillHasSubModule.length > 0) {
          const currentPath = getPathFromFile(subPath);
          for (const thirdLevelModule of stillHasSubModule) {
            if (this.checkIsModule(thirdLevelModule)) {
              this.fileToMove.push({
                from: addVueSuffix(`${currentPath}/${thirdLevelModule}`),
                to:
                  (await this.gotCopyDestination(
                    `${currentPath}/${thirdLevelModule}`
                  )) || null
              });
            }
            // TODO: add more level or loop
          }
        } else {
          console.log(addVueSuffix(subPath));
          this.fileToMove.push({
            from: addVueSuffix(subPath),
            to: (await this.gotCopyDestination(subPath)) || null
          });
        }
      }
      this.doFileCopy(this.fileToMove);
    } catch (error) {
      this.logger.error(new Error("[iterateRouter] error: " + error));
      console.log(error);
    }
  }
  // copy files with this.fileToMove data
  async doFileCopy(files) {
    for (const file of files) {
      await copy(file.from, file.to);
    }
  }
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
      let aliasToExclude = ['api', 'fun']
      try {
        const result = [];
        let componentString = await readFile(componentPath);
        // 8 is the length of '<script>'
        const startPoint = componentString.indexOf("<script>") + 8;
        const endPoint = componentString.indexOf("</script>");
        let componentJsCode = componentString.substring(startPoint, endPoint);
        let {
          program: { body: parseResult }
        } = await parseComponentScript(componentJsCode);
        parseResult.forEach(d => {
          if (d.type === "ImportDeclaration") {
            result.push(d.source.value);
          }
        });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
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

  checkAlias(path): Promise<string> {
    return new Promise((resolve, reject) => {
      // if(!path){
      //     reject(`[Generator/checkAlias--no-data-with-path]:${path} `)
      // }
      try {
        let matchAliasAtFirst: RegExp = /(.*?)\//;
        if (matchAliasAtFirst.test(path)) {
          let alias = matchAliasAtFirst.exec(path);
          resolve(
            `${this.projectConfig.alias[alias && alias[1]]}/${path.replace(
              `${alias[1]}/`,
              ""
            )}${path.includes(".vue") ? "" : ".vue"}`
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

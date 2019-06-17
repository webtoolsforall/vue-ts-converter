/**
 * generate
 * nuxt components
 * 1. parse router
 * 2. get route component path
 * 3. copy file
 * 4. parse component content and copy other file
 */
import {
  addVueSuffix,
  copy,
  flatVueRouterArray,
  uniqArrayObject
} from "../util";
import ParseModule from './ParseModule';
import winston from "../logger";
import DataBus from './DataBus';
export default class Generator {
  vueRouter: Array<any> = [];
  projectConfig: VueTsConfig = null;
  bus: DataBus = null;
  logger = null;
  moduleParser = null

  constructor(router: Array<any>, config: VueTsConfig) {
    this.vueRouter = router;
    this.projectConfig = config;
    this.logger = winston;
    this.start();
    this.moduleParser = new ParseModule(config)
    this.bus = DataBus
  }
  async start() {
    let vueRouter = await this.flatVueRouter(this.vueRouter);
    for (const route of vueRouter) {
      await this.parseRouteModules(route);
    }
    this.doFileCopy(uniqArrayObject(this.bus.busData(), "from"));
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
        // parse subModule
        await this.moduleParser.parseSubModules(parsedRoute.fileRelativePath);
        resolve();
      } catch (error) {
        reject();
        this.logger.error(new Error("[iterateRouter] error: " + error));
        console.log(error);
      }
    });
  }
 
  // copy files with this.fileToMove data
  async doFileCopy(files) {
    for (const file of files) {
      await copy(file.from, file.to);
    }
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
        matchResult.fileRelativePath = await this.moduleParser.checkAlias(path);
        matchResult.path = route.path;
        resolve(matchResult);
      } catch (error) {
        reject(`[Generator/parseRouterConfig]: ${error}`);
      }
    });
  }
  
}

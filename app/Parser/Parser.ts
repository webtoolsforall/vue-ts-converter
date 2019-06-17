/**
 * parse vue components
 * flow
 * 1. parse vue router 
 * 2. generate nuxt.js router with given vue router (as file path)
 */
import { ParseWithVue } from "../routerParser";
const config = require('../../vue-converter.conf');
import Generator from '../Generator/Generator';
import winston from '../logger';
export default class Parser {
  vueRoutes: Array<object> = []; //vue router read from router config file
  projectConfig: VueTsConfig = null
  logger = null
  constructor() {
      this.init()
      this.logger = winston
  }
  async init() {
    this.vueRoutes = await this.getVueRoutes();
    this.projectConfig = config
    new Generator(this.vueRoutes, this.projectConfig)
    this.logger.log({
      level: 'info',
      message: this.vueRoutes
    })
  }
  getVueRoutes(): Promise<Array<object>> {
    return new Promise((resolve, reject) => {
      try {
        let ParseWithVueInstance = new ParseWithVue();
        resolve(ParseWithVueInstance.getRoutes());
      } catch (error) {
        reject(new Error(`getVueRoutes error: ${error}`));
      }
    });
  }
}

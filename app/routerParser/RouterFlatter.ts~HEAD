import { resolve } from "path";

import { readFile, readFilesWithoutSuffix } from "../util";
// routers
export default class RouterFlatter {
  CONFIG_FILE_DIR: string = resolve(__dirname, '../../source/src/router/modules/');
  routerFiles: any = []
  routerData: any = [];
  constructor() {}
  async readVueRouter() {
   this.routerFiles  = await readFilesWithoutSuffix(this.CONFIG_FILE_DIR)
   for(let d in this.routerFiles) {
    let routerContent = await readFile(`${this.CONFIG_FILE_DIR}/${this.routerFiles[d]}.js`)
    this.routerData.push(this.parseES6RouterString(routerContent)) 
   }
  }
  parseES6RouterString(routerFile: string): Array<Object>{
    const removeExportReg = /export.*?default\s+/g
    const contentWithoutExport = routerFile.replace(removeExportReg, '')
      return contentWithoutExport ? eval(contentWithoutExport) : []
  }
  flatter (arr: Array<any>): Array<object> {
    let self = this;
    return arr.reduce(function(flat, toFlatten) {
      console.log(toFlatten)
      return flat.concat(
        Array.isArray(toFlatten.children) ? self.flatter(toFlatten) : toFlatten
      );
    }, []);
  }
}

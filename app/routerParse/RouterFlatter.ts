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
   this.routerFiles.forEach(async d => {
     let routerContent = await readFile(`${this.CONFIG_FILE_DIR}/${d}.js`)
     this.routerData.push(this.parseES6RouterString(routerContent)) 
   })
   debugger
  }
  parseES6RouterString(routerFile: string): Array<Object>{
    const removeExportReg = /export.*?default\s+/g
    const contentWithoutExport = routerFile.replace(removeExportReg, '')
      return eval(contentWithoutExport)
  }
}

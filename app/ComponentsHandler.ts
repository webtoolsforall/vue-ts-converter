import { readFile, writeFile } from "./util";

export default class ComponentsHandler {
   USE_NUXT: boolean = true;
   REMOVE_COMMENTS: boolean = true;
  constructor(options: ComponentsHandlerOption = {nuxt: true, removeComments: true}) {
      this.USE_NUXT = options.nuxt; 
      this.REMOVE_COMMENTS = options.removeComments; 
  } 

  async read(path: string, opt: object): Promise<string> {
    return await readFile(path, opt);
  }

  async write(path: string, data: string, opt: object) {
    return await writeFile(path, data, opt);
  }
}

import { readFile, writeFile } from "./util";

export default class ComponentsHandler {
  constructor() {
    console.log("bingo");
  }

  async read(path: string, opt: object) {
    return await readFile(path, opt);
  }

  async write(path: string, data: string, opt: object) {
    return await writeFile(path, data, opt);
  }
}

import { FileReader } from "./";
const path = require("path");
let Reader = new FileReader();

(async function read() {
  let content = await Reader.readFile(path.resolve(__dirname, "../app/index.ts"), {
    encoding: "utf-8"
  });
  debugger;
})();

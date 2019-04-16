import { ComponentsHandler } from "./";
const path = require("path");
let Reader = new ComponentsHandler();

(async function play() {
  let content = await Reader.write(path.resolve(__dirname, "../app/index.test"), '1213131',{
    encoding: "utf-8"
  });
  debugger;
})();

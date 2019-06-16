const babelParser = require("@babel/parser");
export const parseComponentScript = (code, opt = { sourceType: "module" }):any => {
  return new Promise((resolve, reject) => {
    try {
      let parseResult = babelParser.parse(code, opt);
      resolve(parseResult)
    } catch (error) {
        reject(error)
    }
  });
};

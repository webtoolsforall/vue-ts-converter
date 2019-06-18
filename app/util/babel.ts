const babelParser = require('@babel/parser');
export const parseComponentScript = (
	code,
	opt = {
		sourceType: 'module',
		plugins: [
			"estree" //这个插件会导致解析的结果发生变化，因此去除，这本来是acron的插件
		]
	}
): any => {
	return new Promise((resolve, reject) => {
		try {
			let parseResult = babelParser.parse(code, opt);
			resolve(parseResult);
		} catch (error) {
			reject(error);
		}
	});
};

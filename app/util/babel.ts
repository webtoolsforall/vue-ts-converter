import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import { ASTNode } from 'vue-template-compiler';
export const parseComponentScript = (
	code,
	opt: parser.ParserOptions = {
		sourceType: 'module',
		allowImportExportEverywhere: false,
		allowReturnOutsideFunction: false,
		ranges: false,
		tokens: false,
		plugins: [
			'asyncGenerators',
			'classProperties',
			'doExpressions',
			'functionSent',
			'functionBind',
			'jsx',
			'objectRestSpread',
			'dynamicImport',
			'numericSeparator',
			'optionalChaining',
			'optionalCatchBinding',
			'typescript'
		]
	}
): any => {
	return new Promise((resolve, reject) => {
		try {
			let parseResult = parser.parse(code, opt);
			resolve(parseResult);
		} catch (error) {
			reject(error);
		}
	});
};

export const traverseCode = (ast, path) => {
	console.log(`got ast:`);
	console.log(ast);
	console.log(path);
	let result: TraverseResult = {
		componentName: '',
		components: [],
		data: []
	};
	traverse(ast, {
		enter(path) {
			// get components
			if (path.isImportDeclaration()) {
				result.components.push({
					name: path.node.specifiers[0].local.name,
					value: path.node.source.value
				});
			}
			// verify components is used
			if(path.isIdentifier({ name: 'components' })){
				debugger
			}
			// get componentName
			if (path.isIdentifier({ name: 'name' })) {
				if (path.node.end < 150) {
					result.componentName = path.parent.value.value;
				}
			}
			// get data
			if (path.isObjectMethod() && path.node.key.name === 'data') {
				traverse(
					path.node,
					{
						enter(path) {
							if (path.isReturnStatement()) {
								traverse(
									path.node,
									{
										enter(path) {
											if (path.isObjectProperty()) {
												if (path.isArrayExpression) {
													result.data.push({
														key: path.node.key.name,
														value: path.node.value.elements
													});
												} else {
													result.data.push({
														key: path.node.key.name,
														value: path.node.value.value
													});
												}
											}
										}
									},
									path.node
								);
							}
						}
					},
					path.node
				);
			}
		}
	});
	console.log(result);
	debugger;
};

export const generateCode = (ast, opt: object = { sourceMaps: true }) => {
	console.log(generate(ast));
	debugger;
	return generate(ast).code;
};

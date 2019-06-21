import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
// import * as t from '@babel/types';
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
		modules: [],
		data: [],
		props: []
	};
	traverse(ast, {
		enter(path) {
			// get modules
			if (path.isImportDeclaration()) {
				result.modules.push({
					name: path.node.specifiers[0].local.name,
					value: path.node.source.value
				});
			}

			// verify components 
			if (path.isObjectProperty() && path.node.key.name === 'components') {
				path.traverse({
					enter(path) {
						if (path.isObjectProperty()) {
							result.components.push({
								name: path.node.key.name,
								value: path.node.value.name
							})
						}
					}
				});
			}
			// get componentName
			if (path.isIdentifier({ name: 'name' })) {
				if (path.node.end < 150) {
					result.componentName = path.parent.value.value;
				}
			}
			// get data()
			if (path.isObjectMethod() && path.node.key.name === 'data') {
				path.traverse({
					enter(path) {
						if (path.isArrayExpression()) {
							result.data.push({
								key: path.parent.key.name,
								value: path.node.elements
							});
						}
						if (
							path.isObjectProperty() &&
							path.node.value.type !== 'ArrayExpression'
						) {
							result.data.push({
								key: path.node.key.name,
								value: path.node.value.value
							});
						}
					}
				});
			}
			// get props
			if(path.isObjectProperty() && path.node.key.name === 'props'){
				path.traverse({
					enter(path){
						if(path.isObjectMember()){
							let prop = {
								key: path.node.key.name,
								type: 'any'
							}
							
							path.traverse({
								enter(path){
									if(path.isIdentifier({name: 'default'})){
										prop.default = path.parent.value.value
										// debugger
									}
									if(path.isIdentifier({name: 'required'})){
										prop.required = path.parent.value.value
										// debugger
									}
								}
							})
							result.props.push(prop)
							console.log(result)
							debugger
						}
					}
				})
					debugger
			}
		}
	});
	console.log(result);
	debugger;
};

export const generateCode = (ast, opt: object = { sourceMaps: true }) => {
	let result = generate(ast);
	console.log(result);
};

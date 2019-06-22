import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import { componentVisitor } from './BabelVisitors';
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
	// console.log(`got ast:`);
	// console.log(ast);
	// console.log(path);
	let result: TraverseResult = {
		componentName: '',
		components: [],
		modules: [],
		data: [],
		props: [],
		watches: []
	};
	// 		// get mod
	traverse(ast, {
		enter(path) {
			// get modules
			if (path.isImportDeclaration()) {
				result.modules.push({
					name: path.node.specifiers[0].local.name,
					value: path.node.source.value
				});
			}

			// get components
			if (path.isObjectProperty() && path.node.key.name === 'components') {
				path.traverse({
					enter(path) {
						if (path.isObjectProperty()) {
							result.components.push({
								name: path.node.key.name,
								value: path.node.value.name
							});
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
			if (path.isObjectProperty() && path.node.key.name === 'props') {
				path.traverse({
					enter(path) {
						if (
							path.isObjectProperty() &&
							path.node.value.type === 'ObjectExpression'
						) {
							debugger;
							let prop = {
								key: path.node.key.name,
								type: 'any',
								default: null,
								required: null
							};

							path.traverse({
								enter(path) {
									if (path.isIdentifier({ name: 'default' })) {
										prop.default = path.parent.value.value;
										// debugger
									}
									if (path.isIdentifier({ name: 'required' })) {
										prop.required = path.parent.value.value;
										// debugger
									}
								}
							});
							result.props.push(prop);
							console.log(result);
							debugger;
						}
					}
				});
				debugger;
			}
			// get watch
			if (path.isObjectProperty() && path.node.key.name === 'watch') {
				const watchPath = path.node;
				path.traverse({
					ObjectMethod(path) {
						if (path.node.key.name !== 'handler') {
							let watch = {
								key: path.node.key.name,
								handler: generateCode(path.node.body),
								params: []
							};
							path.traverse({
								Identifier(path) {
									if (path.parentKey === 'params') {
										watch.params.push(path.node.name);
									}
								}
							});
							result.watches.push(watch);
						}
					},
					ObjectProperty(path) {
						const watch = {
							key: null,
							handler: null,
							params: [],
							options: []
						};
						
						path.traverse({
							Identifier(path) {
								if (
									path.parent.type === 'ObjectProperty' &&
									path.parent.value.type === 'ObjectExpression'
								) {
									watch.key = generateCode(path.node)
								}
							},
							enter(path) {
								if (path.isIdentifier({ name: 'handler' })) {
									// handler
									watch.handler = generateCode(path.parent.body)
									// params
									watch.params = (path.parent && path.parent.params.map(d => d.name)) || []
								}
								// get watch options
								path.traverse({
									ObjectProperty(path) {
										watch.options.push(generateCode(path.node))
									}
								});
								
							}
						});
						// TODO: optimize logic to get one result
						if(watch.key && watch.handler){
							result.watches.push(watch)
						}
					}
				});
			}
			// get computed
			if (path.isObjectProperty() && path.node.key.name === 'computed') {
				debugger
				path.traverse({
					
				})
				// hav setter
				// normal 
				// vuex mapState

			}

		}
	});
	console.log(result);
	debugger;
};

export const generateCode = (ast, opt: object = { sourceMaps: true }) => {
	let { code } = generate(ast);
	return code || null;
};

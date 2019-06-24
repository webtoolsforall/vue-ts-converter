import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import {getComponentClassName} from '../util';
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

export const traverseCode = (ast, componentPath): Promise<TemplateData> => {
	return new Promise((resolve, reject) => {
		try {
			let result: TraverseResult = {
				componentName: '',
				components: [],
				modules: [],
				data: [],
				props: [],
				watches: [],
				computed: '',
				hooks: [],
				methods: []
			};
			// console.log(ast);
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
						result.components = generateCode(path.node.value);
					}
					// get componentName
					if (path.isIdentifier({ name: 'name' })) {
						if (path.node.end < 150) {
							result.componentName = getComponentClassName(path.parent.value.value);
						}
					}
					// get data()
					if (path.isObjectMethod() && path.node.key.name === 'data') {
						debugger
						if(path.node.body && path.node.body.body && path.node.body.body.length > 1){

						}
						path.traverse({
							ReturnStatement(path){
								debugger
								path.node.argument.properties.forEach(d => {
									result.data.push({
										key: d.key.name,
										value: d.value.type === 'StringLiteral'? `'${d.value.value}'` : generateCode(d.value)
									})
								})
							}
						});
					}
					// get props
					if (path.isExportDefaultDeclaration()) {
						path.node.declaration &&
							path.node.declaration.properties &&
							path.node.declaration.properties.forEach(d => {
								if (d.key.name === 'props') {
									traverse(
										d,
										{
											// defined with prop: ['xx']
											ArrayExpression(path) {
												path.traverse({
													StringLiteral(path){
														result.props.push({
															key: path.node.value,
															type: 'any',
															default: null,
															required: null
														})
													}
												})
											},
											enter(path) {
												if (
													path.isObjectProperty() &&
													path.node.value.type === 'ObjectExpression'
												) {
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
												}
											}
										},
										d
									);
								}
							});
					}
					// get watch
					if (path.isObjectProperty() && path.node.key.name === 'watch') {
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
									watch.params = watch.params.join(',')
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
											watch.key = generateCode(path.node);
										}
									},
									enter(path) {
										if (path.isIdentifier({ name: 'handler' })) {
											// handler
											watch.handler = generateCode(path.parent.body);
											// params
											watch.params =
												(path.parent && path.parent.params.join(',') ||
												[];
										}
										// get watch options
										path.traverse({
											ObjectProperty(path) {
												watch.options.push(generateCode(path.node));
											}
										});
									}
								});
								// TODO: optimize logic to get one result
								if (watch.key && watch.handler) {
									result.watches.push(watch);
								}
							}
						});
					}
					// get computed
					// TODO: parse vuex as @component property and other as class property
					if (path.isObjectProperty() && path.node.key.name === 'computed') {
						result.computed = generateCode(path.node.value);
					}
					// get methods
					if (path.isObjectProperty() && path.node.key.name === 'methods') {
						path.traverse({
							ObjectMethod(path) {
								result.methods.push(generateCode(path.node));
							}
						});
					}
				},
				// get hooks
				ObjectMethod(path) {
					const hooksList = [
						'beforeCreate',
						'created',
						'beforeMount',
						'mounted',
						'beforeUpdate',
						'updated',
						'beforeDestroy',
						'destroyed'
					];
					if (hooksList.includes(path.node.key.name)) {
						const hook = {
							name: path.node.key.name,
							handler: generateCode(path.node.body)
						};
						result.hooks.push(hook);
					}
				}
			});
			if (!result.componentName) {
				result.componentName = getComponentClassName(componentPath)
			}
			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};

export const generateCode = (ast, opt: object = { sourceMaps: true }) => {
	let { code } = generate(ast);
	return code || null;
};

import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
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
	return new Promise((resolve, reject)=>{
		try {
			let result: TraverseResult = {
		componentName: '',
		components: [],
		modules: [],
		data: [],
		props: [],
		watches: [],
		computed: '',
		hooks: []
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
				});
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
									watch.key = generateCode(path.node);
								}
							},
							enter(path) {
								if (path.isIdentifier({ name: 'handler' })) {
									// handler
									watch.handler = generateCode(path.parent.body);
									// params
									watch.params =
										(path.parent && path.parent.params.map(d => d.name)) || [];
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
			// get hooks
		},
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
			if(hooksList.includes(path.node.key.name)){
				const hook = {
					name: path.node.key.name,
					handler: generateCode(path.node.body)
				}
				result.hooks.push(hook)
			}
		}
	});
	if(!result.componentName){
		// got xxx/xx/file.vue => file
		result.componentName = componentPath.split('/').slice(-1)[0].split('.')[0]
	}
	resolve(result)
		} catch (error) {
			reject(error)
		}
	
	})
	
};

export const generateCode = (ast, opt: object = { sourceMaps: true }) => {
	let { code } = generate(ast);
	return code || null;
};

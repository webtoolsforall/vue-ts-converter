import { parseComponentScript, readFile, parseVueSFC } from '../util';
const acorn = require('acorn');
import VueTsTemplate from './VueTsTemplate';
export default class GenerateTs {
	constructor(path: string) {
		this.start(path);
	}

	async start(path) {
		let data = acorn.parse(await parseVueSFC(path), {
			sourceType: 'module',
			ecmaVersion: 10
		});
		console.log(data);
		let test = {
			components: [
				{ name: 'logo', path: 'src/logo/ss' },
				{ name: 'logo1', path: 'src/logo/ss1' }
			]
		};
		let result = new VueTsTemplate(test).build();
		debugger;
	}
	parseModules() {}
	parseScript() {}
	parseBase() {}
	parseProps() {}
	generateCode() {}
}

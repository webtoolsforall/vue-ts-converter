import {
	parseComponentScript,
	parseVueSFC,
	traverseCode
} from '../util';
import VueTsTemplate from './VueTsTemplate';
export default class GenerateTs {
	constructor(path: string) {
		this.start(path);
	}

	async start(path) {
		let data = await parseComponentScript(await parseVueSFC(path));
		traverseCode(data, path);
		debugger;
		let test = {
			components: [
				{ name: 'logo', path: 'src/logo/ss' },
				{ name: 'logo1', path: 'src/logo/ss1' }
			],
			componentName: 'Test'
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

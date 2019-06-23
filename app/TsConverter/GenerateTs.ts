import { parseComponentScript, parseVueSFC, traverseCode } from '../util';
import VueTsTemplate from './VueTsTemplate';
import { readFile, insertIntoString, writeFile } from '../util';
export default class GenerateTs {
	path: string = '';
	constructor(path: string) {
		this.start(path);
		this.path = path;
	}

	async start(path) {
		if(path.includes('indexV3')){
			let data = await parseComponentScript(await parseVueSFC(path));
			let renderData = await traverseCode(data, path);
			console.log(renderData);
			this.replaceCode(new VueTsTemplate(renderData).build());
		}
		
	}

	async replaceCode(codes) {
		let code = await readFile(this.path);
		let start = code.indexOf('<script>');
		let end = code.indexOf('</script>') + 9; // 9 is length of </script>
		const script = `
			<script lang="ts">
			${codes}
			</script>
		`;
		let test = insertIntoString(code, start, end - start, script);
		await writeFile(
			this.path.replace(
				'/Users/xiaoshuai/codes/jcloudVue',
				'/Users/xiaoshuai/codes/vue-ts-converter/output/tsdir'
			),
			test
		);
		console.log(test)
		debugger;
	}
}

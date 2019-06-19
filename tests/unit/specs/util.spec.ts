import { upperFirstLetter, addSuffix } from '../../../app/util';

describe('util.StringHandler', () => {
	it('upperFirstLetter.lowercase', async () => {
		const lowerLetter = 'abc';
		let upperLetter = upperFirstLetter(lowerLetter);
		console.log(`output:${upperLetter}`);
		expect(upperLetter).toBe('Abc');
	});
	it('upperFirstLetter.upperCase', async () => {
		const lowerLetter = 'ABC';
		let upperLetter = upperFirstLetter(lowerLetter);
		console.log(`output:${upperLetter}`);
		expect(upperLetter).toBe('ABC');
	});
});

describe('util.addSuffix', () => {
	it('add suffix to vue file', async () => {
        let path = '/test/jest/p'
        let result = await addSuffix(path)
        expect(result).toBe('/test/jest/p.vue');
    });
});

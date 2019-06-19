/**
 * flat a complex array
 * @param arr array to flat
 */
const flatmap = require('lodash.flatmap');

export const flatVueRouterArray = (arr): Array<any> => {
	return flatmap(arr, r => {
		if (r.children) {
			return flatmap(r.children, sub => {
				if (sub.children) {
					let route = Object.assign({}, sub);
					delete route.children;
					let withOutSubArray = new Array(route);
					return [...sub.children, ...withOutSubArray];
				} else {
					return sub;
				}
			});
		} else {
			return r;
		}
	});
};

export const uniqArrayObject = (array, param): Array<any> => {
	return array.filter(function(item, pos, array) {
		return (
			array
				.map(function(mapItem) {
					return mapItem[param];
				})
				.indexOf(item[param]) === pos
		);
	});
};
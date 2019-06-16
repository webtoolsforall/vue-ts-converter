/**
 * flat a complex array
 * @param arr array to flat
 */
export const flatVueRouterArray = (arr): Array<any> => {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
     toFlatten.children ? flatVueRouterArray(toFlatten.children) : toFlatten
    );
  }, []);
};

export const uniqArrayObject = (array, param):Array<any> => {
  return array.filter(function(item, pos, array){
    return array.map(function(mapItem){ return mapItem[param]; }).indexOf(item[param]) === pos;
})
}
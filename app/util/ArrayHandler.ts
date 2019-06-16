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

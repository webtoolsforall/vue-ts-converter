/**
 * flat a complex array
 * @param arr array to flat
 */
export const flatArray = (arr): Array<any> => {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatArray(toFlatten) : toFlatten
    );
  }, []);
};

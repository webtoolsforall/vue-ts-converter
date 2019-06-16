export const addVueSuffix = (path:string): string => {
    if(path.includes('ceiling_osscdn')){
        debugger
    }
  const suffixRegexp = /(.*[A-Z,a-z,0-9]){3}\.((png|js|jpeg|jpg|vue))/g;
  return suffixRegexp.test(path) ? path : `${path}.vue`;
};

export const getPathFromFile = (file): string => {
  const pathMeta = file.split("/");
  return pathMeta.slice(0, pathMeta.length - 1).join("/");
};

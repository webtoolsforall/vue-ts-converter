export const addVueSuffix = (path):string => {
    return path.endsWith('.vue') ? path : `${path}.vue`
}

export const getPathFromFile = (file):string => {
    const pathMeta = file.split('/')
    return pathMeta.slice(0, pathMeta.length -1).join('/')
}
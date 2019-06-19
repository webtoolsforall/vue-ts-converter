const path = require('path');
module.exports = {
    routerFilePath: './source/router/index.js',
    // target config
    projectRoot: path.resolve(__dirname, './output/'),
    outPutPath: path.resolve(__dirname, './output/'),
    staticResourcePath: path.resolve(__dirname, './output/'),
    // logs
    logPath: path.resolve(__dirname, './logs'),
    // from config
    copyFromStatic: path.resolve(__dirname, '../jcloudVue/'),
    alias: {
        '@': path.resolve(__dirname, '../jcloudVue/src'),
        'assets': path.resolve(__dirname, '../jcloudVue/src/assets/'),
        '~assets': path.resolve(__dirname, '../jcloudVue/src/assets/')
    }
}
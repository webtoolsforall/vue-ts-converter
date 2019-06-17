const path = require('path');
module.exports = {
    routerFilePath: './source/src/router/index.js',
    projectRoot: path.resolve(__dirname, '../jcloudVue/'),
    outPutPath: path.resolve(__dirname, '../www.jdcloud.com/'),
    logPath: path.resolve(__dirname, './logs'),
    alias: {
        '@': path.resolve(__dirname, '../jcloudVue/src'),
        'assets': path.resolve(__dirname, '../jcloudVue/src/assets/')
    }
}
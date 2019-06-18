const path = require('path');
module.exports = {
    routerFilePath: './source/src/router/index.js',
    projectRoot: path.resolve(__dirname, '../www.jdcloud.com/'),
    outPutPath: path.resolve(__dirname, '../www.jdcloud.com/'),
    logPath: path.resolve(__dirname, './logs'),
    staticResourcePath: path.resolve(__dirname, '../www.jdcloud.com/'),
    copyFromStatic: path.resolve(__dirname, '../jcloudVue/'),
    alias: {
        '@': path.resolve(__dirname, '../jcloudVue/src'),
        'assets': path.resolve(__dirname, '../jcloudVue/src/assets/'),
        '~assets': path.resolve(__dirname, '../jcloudVue/src/assets/')
    }
}
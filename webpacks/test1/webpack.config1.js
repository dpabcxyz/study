const path = require('path');
module.exports = {
    entry: './public/index1.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //形成一个绝对经
        //打包后的文件名称
        filename: 'boundle.js'
    }
}
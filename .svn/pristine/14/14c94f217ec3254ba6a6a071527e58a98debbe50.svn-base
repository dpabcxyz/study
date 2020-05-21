const path = require('path');
module.exports = {
    //单入口多文件
    // entry: ['./public/index1.js', './public/index2.js'], 
    //多入口
    entry: {
        pageone: './public/page1/index.js',
        pagetwo: './public/page2/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //形成一个绝对经
        //打包后的文件名称
        filename: '[name].js'
    }
}
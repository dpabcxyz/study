let path=require('path');
module.exports={
    mode:'production',  //development 开发/生产环境
    entry:'./src/index.js', //入口文件
    output:{
        filename:'bundle.js',  //打包后的文件名
        path:path.resolve('dist')  //打包路径，绝对路径
    },
    devServer:{
        port:8080,
        host:'localhost',
        progress:true,//进度条
        contentBase:'./build', //默认打开目录
        open:true,//自动打开浏览器
        compress:true,//启动gzp压缩
    }
}
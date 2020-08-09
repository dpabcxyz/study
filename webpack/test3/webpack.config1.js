//html模板插件
let HtmlWebpackPlugin=require('html-webpack-plugin');
//路径
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
        contentBase:'./dist', //默认打开目录
        open:true,//自动打开浏览器
        compress:true,//启动gzp压缩
        proxy: {
            '/api': {
                target: 'http://192.168.11.75:9390/dap-cloud-framework-server-web/V1/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/indx.html',
            filename:'index.html',
            minify:{
                collspaceWhitespace:true,
                
            },
            hash:true
            
        })
    ]
    
}
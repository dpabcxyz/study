//html模板插件
let HtmlWebpackPlugin=require('html-webpack-plugin');
//路径
let path=require('path');
module.exports={
    mode:'production',  //development 开发/生产环境
    entry:{
        index:'./src/index.js', 
        admin:'./src/admin.js',  
    },
    output:{
        filename:'[name].js',  //打包后的文件名
        path:path.resolve('dist'),  //打包路径，绝对路径
        publicPath:'/'
    },
    devServer: {//开启服务器配置
        port:8080,//端口，
        host:"localhost",//ip地址:localhost本地，0.0.0.0可以访问网络地址
        progress:true,//开启进度条
        contentBase:"./dist",//默认打开目录
        open:true, //自动打开浏览器,
        compress:true,//启动gzip压缩
        //跨域
        proxy: {
            '/api': {
                target: 'http://vueshop.glbuys.com/api',
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //需要rewrite的,
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            chunks:['index'],//只引用index.js,解决index.html里面有index.js和admin.js的问题
            minify:{//折叠换行true不换行
                collapseWhitespace:true
            },
            hash:true //生产环境下生成hash戳
        }),
        new HtmlWebpackPlugin({
            template: "./public/admin.html",
            filename: "admin.html",
            chunks:['admin'],//admin.js,解决index.html里面有index.js和admin.js的问题
            minify:{//折叠换行true不换行
                collapseWhitespace:true
            },
            hash:true //生产环境下生成hash戳
        })
    ]
    
}
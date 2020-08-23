//webpack是node写出来的使用node语言
//路径
let path=require('path');
//引入html模板插件
let HtmlWebpackPlugin=require("html-webpack-plugin");
//抽离css文件
let MiniCssExtractPlugin=require('mini-css-extract-plugin');
//css压缩
let OptimizeCss=require('optimize-css-assets-webpack-plugin');
//js压缩
let UglifyjsPlugin=require('uglifyjs-webpack-plugin');
//处理css兼容性
let postCss=require('autoprefixer')({
    "overrideBrowserslist": [
        'last 10 Chrome versions',
        'last 5 Firefox versions',
        'Safari >= 6',
        'ie> 8'
    ]
});
module.exports={
    //模式 默认两种production(生产环境:代码压缩) development(开发环境:代码不压缩)
    mode: "production",
    //多入口
    entry:{
        index:'./src/index.js',
        admin:'./src/admin.js'
    },
    output: {
        filename: "static/js/[name].js",//打包后的文件名
        path: path.resolve('dist'),//路径必须是一个绝对路径
        publicPath: "/"  //build之后的公共路径
    },
    devServer: {//开启服务器配置
        port:8081,//端口，
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
            chunks:['admin'],//只引用index.js,解决index.html里面有index.js和admin.js的问题
            minify:{//折叠换行true不换行
                collapseWhitespace:true
            },
            hash:true //生产环境下生成hash戳
        }),
        new MiniCssExtractPlugin({
            filename:'static/css/main.css'
        })
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,//都放到了上面的main.css里面
                    {
                        loader:"css-loader"
                    },
                    {//处理css兼容性
                        loader:'postcss-loader',
                        options: {
                            plugins:[
                                postCss
                            ]
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:{
                    loader:"url-loader", //file-loader加载图片，url-loader图片小于多少k用base64显示
                    options: {
                        limit:100*1024, //小于100k用base64
                        //build之后的目录分类
                        outputPath:'./static/images'                    },
                }
            },
            //es6转es5
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env'
                        ],
                        plugins:[
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                },
                include:path.resolve(__dirname,'src'),
                exclude:'/node_modules'
            }
        ]
    },
    optimization: {//优化项启动后mode模式代码压缩不再生效，必须配置js压缩插件
        minimizer: [
            new OptimizeCss(),//优化css
            //压缩js
            new UglifyjsPlugin({
                cache:true, //是否用缓存
                parallel:true, //是否并发打包
                sourceMap:true //es6映射es5需要用
            })
        ]
    }
};

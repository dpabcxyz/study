const path = require("path");
module.exports = {
// 这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
// publicPath :'./',

// 这个值在开发环境下同样生效。如果你想把开发服务器架设在根路径，你可以使用一个条件式的值
publicPath: process.env.NODE_ENV === 'production'? '/production-sub-path/': './',
outputDir: 'dist', // 构建输出目录
assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
lintOnSave: false, // 是否开启eslint保存检测,有效值（true||false||error)
devServer: {
      open: false, // 有效值（true||false) npm run serve后,是否打开浏览器
      host: 'localhost', // 配置端口号
      port: 8080,
      https: false, // 有效值(true||false)
      hotOnly: false, // 热更新
      proxy: {
      // 配置跨域
      '/api': {
      target: '',
      ws: true, // 是否跨域
      changeOrigin: true,
      // 重写地址
      pathRewrite: {
            '^/api': ''
      }
      }
      }
},
// 在服务内部的所有其他中间件之前， 提供执行自定义中间件的功能。 这可以用来配置自定义处理程序
// before (app) {
      //   加载本地数据
      // app.get('api/data', (req, res) => {
      //   res.json()
      // })
      // 在浏览器输入localhost:8080/api/data就可以拿到数据了
// }
}
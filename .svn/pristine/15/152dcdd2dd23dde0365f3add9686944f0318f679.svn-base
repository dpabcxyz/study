var Koa=require('koa');
var fs=require('fs');
var path=require('path');
var Router=require('koa-router');
var router=new Router();
var render=require('koa-art-template');
var app=new Koa();
// 配置模板引擎
render(app, {
    root: path.join(__dirname, 'view'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
  });
router.get('/',async function(ctx){
    ctx.render('index.html'); 
});
//关联koa与router模块
app.use(router.routes());
app.listen(8080,function(){
    console.log("OK")
})
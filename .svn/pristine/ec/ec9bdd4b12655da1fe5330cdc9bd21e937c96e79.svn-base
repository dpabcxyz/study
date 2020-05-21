var Koa=require('koa');
var fs=require('fs');
var static=require('koa-static');
var bodyParser=require('koa-bodyparser');
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
//加载首页  
router.get('/',async function(ctx){
    ctx.render('index.html'); 
})
//利用koa-bodyparser，将post请求的参数转为json格式返回
router.post('/test',async function(ctx){
    console.log(ctx.request.body)
    ctx.body=ctx.request.body
});
//加载静态资源
app.use(static(path.resolve('./public')));

//关联bodyParser
app.use(bodyParser());

//关联koa与router模块
app.use(router.routes());

app.listen(8080,function(){
    console.log("OK")
})
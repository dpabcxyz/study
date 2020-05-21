var Koa=require('koa');
var fs=require('fs');
const session = require('koa-session');
var static=require('koa-static');
var bodyParser=require('koa-bodyparser');
var path=require('path');
var Router=require('koa-router');
var router=new Router();
var render=require('koa-art-template');
var app=new Koa();
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
  };
// 配置模板引擎
render(app, {
    root: path.join(__dirname, 'view'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
  });
router.get('/',async function(ctx){
    ctx.render('index.html'); 
})
router.post('/login',async function(ctx){
    var name=ctx.request.body.username;
    var pwd=ctx.request.body.password;
    if(name=='小明'&&pwd=='123'){
        ctx.body="登陆成功"
        ctx.session.user={
            name:name
        }
    }
    else{
        ctx.body="登陆失败！"
    }
});
//取session
router.get('/list',async function(ctx){
    ctx.body=ctx.session.user.name
})
//关联session
app.use(session(CONFIG, app));
//加载静态资源
app.use(static(path.resolve('./public')));
//关联bodyParser
app.use(bodyParser());
//关联koa与router模块
app.use(router.routes());
app.listen(8080,function(){
    console.log("OK")
})
var Koa=require('koa');
var fs=require('fs');
const session = require('koa-session');
var static=require('koa-static');
var path=require('path');
var bodyParser=require('koa-bodyparser');
var Router=require('koa-router');
var router=new Router();
var render=require('koa-art-template');
var app=new Koa();
app.keys = ['some secret hurr'];
// const CONFIG = {
//     key: 'koa:sess',
//     maxAge: 86400000,
//     autoCommit: true, 
//     overwrite: true, 
//     httpOnly: true, 
//     signed: true, 
//     rolling: false, 
//     renew: false, 
//   };
var store={
    storeage:{},
    get(key){
        return this.storeage[key]
    },
    set(key,session){
        this.storeage[key]=session
    },
    destroy(key){
        delete this.storeage[key]
    }
} 
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
    ctx.body="欢迎光临"+ctx.session.user.name
})
//关联session
app.use(session({store:store}, app));
//关联bodyParser
app.use(bodyParser());
//关联koa与router模块
app.use(router.routes());
app.listen(8080,function(){
    console.log("OK")
})

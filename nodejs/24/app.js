var Koa=require('koa');
var Router=require('koa-router');
var bodyParser=require('koa-bodyparser');
var session=require('koa-session');
var render=require('koa-art-template');
var path=require('path');
var app=new Koa();
var router=new Router();
//配置模板引擎
render(app, {
    root: path.join(__dirname, 'view'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
  });
//配置session
app.keys = ['some secret hurr'];
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
var msg=[
    {username:"小明",content:'大家好！'},
    {username:"小白",content:'hi'},
    {username:"小黑",content:'hello！'},
    {username:"大侠",content:'大家嚎！'}
]
//加载的登录页，根据路由相应对应的页面
router.get('/',async function(ctx){
    ctx.render('login.html'); 
})
//提交的路由
router.post('/login',async function(ctx){
    var userName=ctx.request.body.username;
    var psssWord=ctx.request.body.password;
    ctx.session.user={
        userName:userName,
        psssWord:psssWord
    }
    ctx.redirect('/list')
})
//处理list页面
router.get('/list',async function(ctx){
    ctx.render('list.html',{
        psssWord:ctx.session.user.psssWord,
        userName:ctx.session.user.userName,
        msg:msg
    }); 
})
//处理list提交动作
router.post('/dosend',async function(ctx){
    var um=ctx.session.user.userName;
    var con=ctx.request.body.msg;
    var newmsgs={
        username:um,
        content:con
    }
    msg.push(newmsgs);
    ctx.body=msg;
})
//挂载模块
app.use(session({store:store}, app));
app.use(bodyParser());
app.use(router.routes());
//监听端口
app.listen('8080',function(){
    console.log("8080端口访问成功!")
})
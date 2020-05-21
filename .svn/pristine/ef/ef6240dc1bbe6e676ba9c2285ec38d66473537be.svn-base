var Koa=require('koa');
var Router=require('koa-router');
var bodyParser=require('koa-bodyparser');
var session=require('koa-session');
var render=require('koa-art-template');
var path=require('path');
var static=require('koa-static');
var app=new Koa();
var router=new Router();
//监听首页路由，并通过模板引擎渲染首页
router.get('/',async function(ctx){
    ctx.render('login.html')
})
//登录
.post('/dologin',async function(ctx){
    ctx.render('index.html')
})
//配置模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
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
//加载静态资源
app.use(static(path.resolve('./public')));
//挂载模板
app.use(session({store:store}, app));
app.use(bodyParser());
app.use(router.routes());
app.listen('8080',function(){
    console.log('8080端口访问成功!')
})
var Koa=require('koa');
var app=new Koa();
// app.use(function(context){
//     context.body='hello,world!!'
// });
app.use(function(ctx,next){
    console.log(ctx.request.url);
    console.log(ctx.request.method);
    console.log(ctx.request.headers);
    next(); //中间件
})
app.use(function(ctx){
    ctx.body="hello kitty!"
})
app.listen(8080,function(){
    console.log('loalhost:8080')
})
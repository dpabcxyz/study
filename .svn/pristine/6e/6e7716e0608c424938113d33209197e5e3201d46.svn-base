var Koa=require('koa');
var fs=require('fs');
// 第三方模块
var Router=require('koa-router');
var router=new Router();
var app=new Koa();
function f1(){
    return new Promise(function(resove,reject){
        fs.readFile('./index.html',function(err,data){
            if(err){
                reject(err)
            }
            resove(data) 
        })
    })
}
// router.post();
router.get('/',async function(ctx){
    var data=await f1();
    ctx.body=data.toString(); 
})
//关联koa与router模块
app.use(router.routes());
app.listen(8080,function(){
    console.log("OK")
})
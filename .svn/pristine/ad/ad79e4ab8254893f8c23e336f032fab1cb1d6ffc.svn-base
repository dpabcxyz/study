var Koa=require('koa');
var fs=require('fs');
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
//koa异步操作，必须使用async await
app.use(async function(ctx){
    if(ctx.request.url=='/'){
        var data=await f1();
        ctx.body=data.toString();
    }
})
app.listen(8080,function(){
    console.log("OK112")
})
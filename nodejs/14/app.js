var express=require('express');
var fs=require('fs');
var app=express();
app.get('/',function(req,res){
    // res.send('响应用户请求');
    fs.readFile('./index.html',function(err,data){
        if(err){
            console.log(err);
        }
        res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
        res.end(data);
    })
})
//1、get
// app.get('/test',function(req,res){
//     res.send('get请求')
// });
//2、post
// app.post('/test',function(req,res){
//     res.send('post请求')
// });
//3、自动匹配请求类型post/get
// app.all('/test',function(req,res){
//     res.send('自动匹配请求类型post/get');
// });
//4、
//自动匹配post/get
//非完全匹配  <form action="/test/aa/cc"  method="post">
// app.use('/test',function(req,res){
//     res.send('use自动匹配请求类型');
// });
//5、匹配路由参数
app.use('/test/:usename/:passworld',function(req,res){
    res.send(req.params);
})
app.listen(8080,function(){
    console.log('服务器已经启动！');
})
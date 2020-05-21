var http=require('http');
var server=http.createServer();
//监听请求
server.on('request',function(req,res){
    console.log(req.headers);
    console.log("--------");
    console.log(req.url);
    res.setHeader('Content-type','text/html;charset=utf-8');
    res.write('111111111');
    res.write('333333333');
    res.write('22222222222');
    res.end("hello,world！");
})
//监听端口
server.listen(8088,function(){
    console.log("服务器已启动，请问8080端口!")
})
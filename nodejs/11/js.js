var http =require('http');
var fs=require('fs');
var server=http.createServer();
server.on('request',function(req,res){
    // res.end('hello!');
    var urls=req.url;
    if(urls=='/'){
       fs.readFile('./index.html',function(err,data){
           if(err){
               console.log(err)
           }
           else{
               res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
               res.end(data);
           }
       }) 
    }
    //挨个写入路由
    // else if(urls=='/img.jpg'){
    //     fs.readFile('./img.jpg',function(err,data){
    //         if(err){
    //             console.log(err)
    //         }
    //         else{
    //             res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
    //             res.end(data);
    //         }
    //     })
    // }
    //通用方法
    else{
        fs.readFile('.'+req.url,function(err,data){
            if(err){
                console.log(err);
            }
            else{
                res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
                res.end(data);
            }
        })
    }
})
server.listen(8082,function(){
    console.log('8080端口启动成功！')
})
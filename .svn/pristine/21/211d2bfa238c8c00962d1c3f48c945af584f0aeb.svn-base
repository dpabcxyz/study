var express=require('express');
var fs=require('fs');
var app=express();
//配置模板引擎
app.engine('html',require('express-art-template'));
var data={
    name:"陈轩",
    sex:"男", 
    score:[
        {id:1,title:'语文',Score:80},
        {id:2,title:'数学',Score:56},
        {id:3,title:'英语',Score:70},
        {id:4,title:'物理',Score:90},
    ]
}
app.use('/',function(req,res){
    res.render('index.html',data)
})
app.listen(8080,function(){
    console.log('服务器已经启动！')
})
var express=require('express');
var fs=require('fs');
var url=require('url');
var app=express();
//配置模板引擎
app.engine('html',require('express-art-template'));
var students=[
    {name:"小明",sex:"男",time:2019},
    {name:"王者",sex:"男",time:2018},
    {name:"大白",sex:"男",time:2017},
    {name:"好好",sex:"男",time:2016},
    {name:"小白",sex:"女",time:2015},
]
app.get('/',function(req,res){
    res.render('index.html',{stu:students});
});
app.use('/add',function(req,res){
    res.render('add.html');
});
app.use('/doadd',function(req,res){
    var params=url.parse(req.url,true).query;
    var stus={name:params.name,sex:params.sex,time:2099};
    students.push(stus);
    res.redirect('/');

});
app.listen(8080,function(){
    console.log('服务器已经启动！')
})
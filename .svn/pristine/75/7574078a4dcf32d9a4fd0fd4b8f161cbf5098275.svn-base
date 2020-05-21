//创建服务器
var http = require('http');
var fs = require('fs');
var url = require('url');
var moment = require('moment');    //引入第三方模块
var server = http.createServer();
var student=[
    {name:'陈轩',age:'18',sex:'男',city:'北京',time: moment().format('YYYY-MM-D h:mm:ss')},
    {name:'小白',age:'22',sex:'男',city:'成都',time: moment().format('YYYY-MM-D h:mm:ss')},
    {name:'小花',age:'20',sex:'男',city:'上海',time: moment().format('YYYY-MM-D h:mm:ss')},
    {name:'大白',age:'21',sex:'女',city:'武汉',time: moment().format('YYYY-MM-D h:mm:ss')},
]
server.on('request', function (req, res) {
    //console.log('正在监听用户请求');
    var urls = req.url;
    if (urls == '/') {
        //说明用户访问的是 localhost:8080
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            var html = '';
            student.forEach(function (item) {
                html += `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.age}</td>
                            <td>${item.sex}</td>
                            <td>${item.city}</td>
                            <td>${item.time}</td>
                        </tr>`
            })
            var str = data.replace('@@', html);
            res.writeHead(200, { 'content-type': 'text/html;charset=utf-8'});
            res.end(str);
        })
    }
    else if (urls == '/add') {
        //添加页面
        fs.readFile('./add.html', 'utf-8', function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
            res.end(data);
        })
    }
    else if (urls.indexOf('/add')==0) {
        if (req.method == 'POST') {
            //用户使用 post提交
        } 
        else {
            //用户使用GET提交
            var params = url.parse(req.url, true).query;
            var newtime = moment().format('YYYY-MM-D h:mm:ss');
            var newstu = { name: params.name, age: params.age,  sex: params.sex,city: params.city,time:newtime}
            student.push(newstu);
            res.statusCode = 302;
            res.setHeader('Location', '/'); //返回首页
        }
    }
})

server.listen(9999, function () {
    console.log('服务器已经启动9999')
})

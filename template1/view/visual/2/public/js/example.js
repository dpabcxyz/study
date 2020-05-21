
layui.use('table', function(){
    var table = layui.table;
    table.render({
        elem: '#dataTable'
        ,height: 'full-166'
        ,url: '../../public/js/example.json'
        ,page: {
            count: 1000
            ,limit:50
            ,limits:[10, 20, 30, 40, 50]
            ,groups:5                                                                                                                                     //连续出现的页码个数
            ,prev:'上一页'
            ,next:'下一页'
            ,first:'首页'
            ,last:'尾页'
            ,layout:['prev', 'page', 'next','limit','skip']
            ,theme:'page'
        }
        ,cols: [[
            {field: 'select', title: '', type:'checkbox',align:'center',width:60},
            {field: 'order', title: '序号',align:'center',width:60}
            ,{field: 'originCom', title: '原单位',align:'center' }
            ,{field: 'reCom', title: '变更后单位',align:'center'}
            ,{field: 'originTrade', title: '原行业',align:'center' ,width:130}
            ,{field: 'reTrade', title: '变更后原行业',align:'center' ,width:130}
            ,{field: 'status', title: '变更状态',align:'center',width:100}
            ,{field: 'detail', title: '详情',align:'center' ,width:160,toolbar: '#barDemo'}
        ]],
        loading:true,
    });
    table.on('tool(test)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        var tr = obj.tr; //获得当前行 tr 的DOM对象

        if(layEvent === 'detail'){ 
            window.top.PopoverNormal('xxxx详情','iframe/layer.html', '800px', '500px',false);
        }
        else if(layEvent === 'edit'){
           window.top.PopoverNormal('xxxx详情','http://jd.com', '800px', '500px',true);
        }
    });
});
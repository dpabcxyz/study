layui.use('table', function(){
  var table = layui.table;
  table.render({
      elem: '#table'
      ,height: 'full-182'                            //表格高度，屏幕高度减去28px
      ,url: '../../../public/js/json/table4.json'      //表格数据
      ,page: {                                      //分页
           count: 1000 
          ,limit:50
          ,limits:[10, 20, 30, 40, 50]
          ,groups:5                                                                                                                                     //连续出现的页码个数
          ,prev:'上一页'
          ,next:'下一页'
          ,first:'首页'
          ,last:'尾页'
          ,layout:['prev', 'page', 'next','limit','skip']
          ,theme:'page',
      }
      ,even:true
      ,cols: [[ //表头
           {field: 'checkbox',title: '', type:'checkbox',align:'center',width:50,LAY_CHECKED:true}
          ,{field: 'number', title: 'Number', type:'number',align:'numbers',align:'center',width:100}
          ,{field: 'name', title: 'Name',align:'center',width:200}
          ,{field: 'position', title: 'Position',align:'center',width:200,}
          ,{field: 'office', title: 'Office',align:'center',width:200,}
          ,{field: 'sex', title: 'Sex',align:'center',width:100,}
          ,{field: 'age', title: 'Age',sort:true,align:'center'}
          ,{field: 'salary', title: 'Salary',sort:true,align:'center',width:120,}
          ,{field: 'date', title: 'Date',align:'center',width:200,}
          ,{field: 'operate', title: 'Operate',align:'center',width:160,toolbar: '#barDemo'}
          
      ]],
      loading:true,
      skin:'line',
  });
  table.on('tool(tool)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
  var data = obj.data; //获得当前行数据
  var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
  var tr = obj.tr; //获得当前行 tr 的DOM对象

  if(layEvent === 'detail'){ 
      // window.top.PopoverNormal('添加车辆信息','iframe/changeDetail.html', '640px', '420px',false)
      alert("详情")
  }
  else if(layEvent === 'edit'){
      alert("编辑")
  }
});
});
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
      ,cols: [[ //表头
           {field: 'checkbox',title: '', type:'checkbox',align:'center',width:50,LAY_CHECKED:true}
          ,{field: 'number', title: 'Number', type:'number',align:'numbers',align:'center',width:100}
          ,{field: 'name', title: 'Name',align:'center',width:200}
          ,{field: 'position', title: 'Position',align:'center',width:200,}
          ,{field: 'office', title: 'Office',align:'center',width:200,}
          ,{field: 'sex', title: 'Sex',align:'center',width:200,}
          ,{field: 'university', title: 'University',align:'center'}
          ,{field: 'age', title: 'Age',sort:true,align:'center'}
          ,{field: 'salary', title: 'Salary',sort:true,align:'center',width:200,}
          ,{field: 'date', title: 'Date',align:'center',width:200,}
      ]],
      loading:true,
      skin:'line',
  });
});
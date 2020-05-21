layui.use('table', function(){
  var table = layui.table;        //实例化表格模块              
  table.render({
      elem: '#table'          //表格容器id
      ,height: 'full-148'     //表格高度自适应，屏幕高度减去148px
      ,url: '../../../public/js/json/table3.json'      //数据接口
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
      ,totalRow:true  //开启自动合计
      ,cols: [[ //表头
           {field: 'checkbox',title: '', type:'checkbox',align:'center',width:50,totalRowText:'合计'} //totalRowText 自定义合计text
          ,{field: 'number', title: 'Number', type:'number',align:'numbers',align:'center',width:100} //type:'number' 序号
          ,{field: 'name', title: 'Name',edit:'text',align:'center'} //align:'center'  单元格居中
          ,{field: 'position', title: 'Position',align:'center'}
          ,{field: 'office', title: 'Office',align:'center'}
          ,{field: 'sex', title: 'Sex',align:'center'}
          ,{field: 'age', title: 'Age',sort:true,align:'center'} //sort:true 开启帅选
          ,{field: 'salary', title: 'Salary',sort:true,align:'center'}
          ,{field: 'date', title: 'Date',align:'center'}
      ]],
      loading:true,  //开启加载动画
      skin:'line',   //表格风格 可选 'line' 'row' 'nob'
  });
});
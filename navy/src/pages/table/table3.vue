<template>
    <div class="page">
        <div class="tableContainer">
            <el-table
                :data="tableData"
                style="width: 100%"
                :border="false"
                :row-class-name="tableRowClassName">
                :height="fullHeight-140">
                <el-table-column
                    type="selection"
                    width="55"
                    @selection-change="handleSelectionChange"
                    >
                </el-table-column>
                 <el-table-column
                    fixed
                    type="index"
                    :index="indexMethod"
                    label="序号"
                    width="90"
                    >
                </el-table-column>
                <el-table-column
                prop="date"
                label="日期"
                width="140">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="100">
                </el-table-column>
                  <el-table-column
                prop="name"
                label="性别"
                width="90">
                </el-table-column>
                  <el-table-column
                prop="age"
                label="年龄"
                width="100">
                </el-table-column>
                <el-table-column
                prop="province"
                label="省份"
                width="100">
                </el-table-column>
                <el-table-column
                prop="city"
                label="市区"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="com"
                label="单位名称"
                width="140">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="邮编"
                width="100">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="160">
                <template slot-scope="scope">
                    <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                    移除
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapState,mapActions} from 'vuex'
export default {
    name:"Table2",
    data:function(){
        return{
            form:{
                value1:''
            },
            currentPage: 4,
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, {
                date: '2016-05-02',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, {
                date: '2016-05-04',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, {
                date: '2016-05-01',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, {
                date: '2016-05-08',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                },{
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
                }, {
                date: '2016-05-07',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                com:'阿里巴巴科技',
                zip: 200333
            }]
        }
    },
    beforeRouteEnter:(to,from,next)=>{
		next(vm=>{
            vm.mainContainerEl.setAttribute("class", "mainContainer animate__animated animate__fadeInLeft");
		});
    },
    beforeRouteLeave:function(to,from,next){
        this.mainContainerEl.setAttribute("class", "mainContainer");
        next();
    },
    mounted:function(){
        const that = this
        // window.onresize = () => {
        //     return (() => {
        //     window.fullHeight = document.documentElement.clientHeight;
        //     that.fullHeight = window.fullHeight-360
        //     })()
        // }
        this.$store.dispatch('getfullHeight');
    },
  
    computed:{
      ...mapGetters(['fullHeight','mainContainerEl']),
    },
    methods: {
       tableRowClassName({row, rowIndex}) {
        if (rowIndex==3) {
          return 'warning-row';
        } else if (rowIndex==6) {
          return 'success-row';
        }
         else if (rowIndex==9) {
          return 'warning-row';
        }
         else if (rowIndex==12) {
          return 'error-row';
        }
        return '';
      },
      indexMethod(index) {
        return index * 2;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSelectionChange:function(){
          
      },
      deleteRow:function(){
          
      }
    }
}
</script>
<style>
  .el-table .warning-row {
        background: oldlace;
    }
  .el-table .success-row {
        background: #f0f9eb;
  }
  .el-table .error-row {
        background: #fde2e2;
  }
  
</style>

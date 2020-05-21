<template>
    <div class="page">
        <div class="formContainer">
            <el-form ref="queryform" :model="form" label-width="80px">
                <el-form-item label="查询条件">
                    <el-input v-model="form.value1" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="查询条件">
                    <el-input v-model="form.value1" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="查询条件">
                    <el-input v-model="form.value1" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="查询条件">
                    <el-input v-model="form.value1" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="查询条件">
                    <el-input v-model="form.value1" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="查询条件">
                    <el-input v-model="form.value1" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="查询条件">
                    <el-input v-model="form.value1" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="查询条件">
                    <el-input v-model="form.value1" placeholder="请输入"></el-input>
                </el-form-item>
                 <el-form-item label="查询条件">
                    <el-input v-model="form.value1" placeholder="请输入"></el-input>
                </el-form-item>
                <ul class="formBtn">
                    <el-button type="primary">查询<i class="el-icon-search el-icon--right"></i></el-button>
                    <el-button type="primary">重置<i class="el-icon-refresh-left el-icon--right"></i></el-button>
                </ul>
            </el-form>
        </div>
        <div class="tableContainer">
            <el-table
                :data="tableData"
                style="width: 100%"
                :border="false"
                :stripe="true"
                :height="fullHeight-266">
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
    watch: {
        // fullHeight(val){
        //     this.fullHeight =val
        //     console.log(this.fullHeight)
        // }
    },
    computed:{
        ...mapGetters(['fullHeight','mainContainerEl']),
    },
    methods: {
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
/* .formContainer{
    position: relative;
    box-sizing: border-box;
    padding:0 200px 16px 0;
    border-bottom: 4px solid #f2f2f2;
}
.formContainer:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.formContainer .el-form-item{
    float: left;
    width: 260px;
    margin: 18px 8px 0 0;
}
.formContainer .formBtn{
    position: absolute;
    right: 12px;
    top: 18px;
}
.tableToolContainer{
    box-sizing: border-box;
    margin: 12px 16px;
    padding: 12px 0;
    border-bottom: 1px solid #ebeef5;
}
.tableContainer{
    box-sizing: border-box;
    padding: 0 16px 16px 16px;
}
.tableContainer .el-table thead{
    color: #333;
    font-weight: bold;
}
.tableContainer .el-table .cell{
    text-align: center;
}
.tableContainer .el-pagination{
    margin-top: 12px;
} */
</style>

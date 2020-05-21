<template>
    <div class="echartspage">
    	<div class="digitalDisplay">
    		<el-row :gutter="16">
				  <el-col :span="6" >
				  	<div class="digitalItem1">
						<li class="symbol symbol1"><svg class="icon" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg></li>
						<ul class="text">
							<li class="value">1236</li>
							<li class="name">New Orders</li>
						</ul>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="digitalItem1">
						<li class="symbol symbol2"><svg class="icon" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg></li>
						<ul class="text">
							<li class="value">1236</li>
							<li class="name">New Visitors</li>
						</ul>
					</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="digitalItem1 color3">
						<li class="symbol symbol3"><svg class="icon" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg></li>
						<ul class="text">
							<li class="value">1236</li>
							<li class="name">New Users</li>
						</ul>
					</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="digitalItem1">
						<li class="symbol symbol4"><svg class="icon" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg></li>
						<ul class="text">
							<li class="value">1236</li>
							<li class="name">Profit Today</li>
						</ul>
					</div>
				  </el-col>
			</el-row>
    	</div>

		<div class="echartsContainers">
			<el-row :gutter="16">
				  <el-col :span="12">
				  	<div class="chartsBlock chartsBlock1">
				  		<li class="chartsTitle">Table Display</li>
						<div class="chartsContent">
							 <el-table
								:data="tableData"
								style="width: 100%"
								:border="false"
								:stripe="true"
								:height="768">

								<el-table-column
									fixed
									type="index"
									:index="indexMethod"
									label="序号"
									width="80"
									>
								</el-table-column>
								<el-table-column
								prop="date"
								label="日期"
								width="120">
								</el-table-column>
								<el-table-column
								prop="name"
								label="姓名">
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
							</el-table>
						</div>
				  	</div>
				  </el-col>
				  <el-col :span="12">
					<el-row :gutter="16">
						<el-col :span="12">
							<div class="chartsBlock chartsBlock2">
								<li class="chartsTitle">Quarter</li>
								<div class="chartsContent" id="mycharts1"></div>
							</div>
						</el-col>
						<el-col :span="12">
							<div class="chartsBlock chartsBlock2">
								<li class="chartsTitle">Title</li>
								<div class="chartsContent" id="mycharts2"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="16">
						<el-col :span="24">
							<div class="chartsBlock chartsBlock2">
								<li class="chartsTitle">Title</li>
								<div class="chartsContent" id="mycharts3"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="16">
						<el-col :span="12">
							<div class="chartsBlock chartsBlock2">
								<li class="chartsTitle">Title</li>
								<div class="chartsContent" id="mycharts4"></div>
							</div>
						</el-col>
						<el-col :span="12">
							<div class="chartsBlock chartsBlock2">
								<li class="chartsTitle">Title</li>
								<div class="chartsContent" id="mycharts5"></div>
							</div>
						</el-col>
					</el-row>

				  </el-col>
			</el-row>

			<el-row :gutter="16">
				<el-col :span="12">
					<div class="chartsBlock chartsBlock3">
						<li class="chartsTitle">Title</li>
						<div class="chartsContent" id="mycharts6"></div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="chartsBlock chartsBlock3">
						<li class="chartsTitle">Title</li>
						<div class="chartsContent" id="mycharts7"></div>
					</div>
				</el-col>
			</el-row>

			<el-row :gutter="16">
				<el-col :span="24">
					<div class="chartsBlock chartsBlock3">
						<li class="chartsTitle">Title</li>
						<div class="chartsContent" id="mycharts8"></div>
					</div>
				</el-col>
			</el-row>
		</div>
    </div>
</template>
<script>
import {mapGetters,mapState,mapActions} from 'vuex'
import echartsMethods from '@/common/echarts/echarts1'
export default {
	name:'Page4',
	computed:{
      ...mapGetters(['mainContainerEl']),
    },
	data:function(){
		return {
			currentPage: 4,
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                }, {
                date: '2016-05-02',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                }, {
                date: '2016-05-04',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                }, {
                date: '2016-05-01',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                }, {
                date: '2016-05-08',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                }, {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
				}, 
				 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
				}, 
				 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                }, 
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
				}, 
				 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
				},
				 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区',
                zip: 200333
                },
                 {
                date: '2016-05-06',
                name: '王小虎',
                sex:'男',
                age:18,
                province: '上海',
                city: '普陀区1',
                zip: 200333
                }]
		}
	},
	beforeRouteEnter:(to,from,next)=>{
		next(vm=>{
			vm.scrollAble();
			vm.mainContainerEl.setAttribute("class", "mainContainer animate__animated animate__fadeInLeft");
		});
    },
    beforeRouteLeave:function(to,from,next){
		this.scrollDisable();
		this.mainContainerEl.setAttribute("class", "mainContainer");
        next();
    },
	mounted:function(){
		echartsMethods.echartsObj.myChart1();
		echartsMethods.echartsObj.myChart2();
		echartsMethods.echartsObj.myChart3();
		echartsMethods.echartsObj.myChart4();
		echartsMethods.echartsObj.myChart5();
		echartsMethods.echartsObj.myChart6();
		echartsMethods.echartsObj.myChart7();
		echartsMethods.echartsObj.myChart8();
		echartsMethods.echartsObj.resize();
	},
	methods: {
	  ...mapActions(['scrollAble','scrollDisable']),
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
<style scoped>
.echartspage{
	/* box-sizing: border-box; */
}
.digitalItem1{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height:150px;
	border-radius: 4px;
	background-color:#fff;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
.digitalItem1 .symbol{
	width: 60px;
	height: 60px;
	margin: 0 30px;
	color: #fff;
	font-size: 3rem;
	line-height: 60px;
	border-radius: 50%;
	text-align: center;
	box-shadow: 0 0 4px 2px rgba(0,0,0,.1);
}
.digitalItem1 .symbol1{
	background-color: #1340a3;
}
.digitalItem1 .symbol2{
	background-color: #9358ac;
}
.digitalItem1 .symbol3{
	background-color: #437efb;
}
.digitalItem1 .symbol4{
	background-color: #22c542;
}
.digitalItem1 .text{
	
}
.digitalItem1 .text .value{
	margin-bottom: 6px;
	font-size: 2.6rem;
	font-weight: bold;
	color: rgb(85,85,85);
}
.digitalItem1 .text .name{
	font-size: 1.8rem;
	color: rgb(120,120,120);
}
/* .echartsContainers{
	
} */
.echartsContainers .chartsBlock{
	position: relative;
    box-sizing: border-box;
    border-radius: 4px;
	margin-top: 18px;
	padding-top: 20px;
	padding: 40px 12px 12px 12px;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
.echartsContainers .chartsBlock .chartsTitle {
    position: absolute;
    z-index: 99;
	left: 12px;
	top: 0;
    height: 40px;
    font-size: 1.8rem;
    font-weight: bold;
    color: rgb(50, 50, 50);
    line-height: 40px;
}
.echartsContainers .chartsBlock .chartsContent{
	width: 100%;
	height: 100%;
}
.echartsContainers .chartsBlock1{
	height: 816px;
} 
.echartsContainers .chartsBlock2{
	height: 260px;
} 
.echartsContainers .chartsBlock3{
	height: 400px;
}

</style>
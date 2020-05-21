<template>
    <div class="echartspage">
    	<div class="echartsContainers">
    		<el-row :gutter="16">
                <!-- 左侧 -->
                <el-col :span="10">
                  <el-row :gutter="16">
                    <el-col :span="12">
                        <div class="chartsBlock chartsBlock1" style="margin-top:0px">
                            <li class="symbol"><svg class="icon" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg></li>
                            <ul class="text">
                                <li class="value value1">1236</li>
                                <li class="name">New Orders</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="chartsBlock chartsBlock1" style="margin-top:0px">
                            <li class="symbol"><svg class="icon" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg></li>
                            <ul class="text">
                                <li class="value value2">1236</li>
                                <li class="name">New Orders</li>
                            </ul>
                        </div>
                    </el-col>
			      </el-row>

                  <el-row :gutter="16">
                    <el-col :span="12">
                        <div class="chartsBlock chartsBlock1" >
                            <li class="symbol"><svg class="icon" aria-hidden="true"><use xlink:href="#vue"></use></svg></li>
                            <ul class="text">
                                <li class="value value3">1236</li>
                                <li class="name">New Orders</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="chartsBlock chartsBlock1" >
                            <li class="symbol"><svg class="icon" aria-hidden="true"><use xlink:href="#vue"></use></svg></li>
                            <ul class="text">
                                <li class="value value4">1236</li>
                                <li class="name">New Orders</li>
                            </ul>
                        </div>
                    </el-col>
			      </el-row>
                </el-col>

                <!-- 右侧 -->
                <el-col :span="14">
                    <div class="chartsBlock chartsBlock2">
						<li class="chartsTitle">Product Valuation</li>
                        <div class="chartsContent" id="mycharts1"></div>
					</div>
                </el-col>
			</el-row>
            <!--  -->
            <el-row :gutter="16">
                <el-col :span="16">
                     <div class="chartsBlock chartsBlock3">
                          <li class="chartsTitle">Product Valuation</li>
                          <div class="chartsContent" id="mycharts2"></div>
                     </div>
                </el-col>
                 <el-col :span="8">
                     <div class="chartsBlock chartsBlock3">
                          <li class="chartsTitle">Product Valuation</li>
                          <div class="chartsContent" id="mycharts3"></div>
                     </div>
                    
                </el-col>
            </el-row>
            <el-row :gutter="16">
                <el-col :span="12">
                     <div class="chartsBlock chartsBlock4">
                          <li class="chartsTitle">Product Valuation</li>
                          <div class="chartsContent" id="mycharts4"></div>
                     </div>
                </el-col>
                 <el-col :span="12">
                     <div class="chartsBlock chartsBlock4">
                          <li class="chartsTitle">Product Valuation</li>
                          <div class="chartsContent" id="mycharts5"></div>
                     </div>
                </el-col>
            </el-row>
    	</div>
    </div>
</template>
<script>
import {mapGetters,mapState,mapActions} from 'vuex'
import echartsMethods from '@/common/echarts/echarts2'
export default {
    name:'Page5',
    computed:{
      ...mapGetters(['mainContainerEl']),
    },
    beforeRouteEnter:(to,from,next)=>{
		next(vm=>{
            vm.darkStyle();
            // vm.mainContainerEl.setAttribute("class", "mainContainer animate__animated animate__fadeInLeft");
		});
    },
    beforeRouteLeave:function(to,from,next){
        this.whiteStyle();
        // this.mainContainerEl.setAttribute("class", "mainContainer");
        next();
    },
    mounted:function(){
        echartsMethods.echartsObj.myChart1();
        echartsMethods.echartsObj.myChart2();
        echartsMethods.echartsObj.myChart3();
        echartsMethods.echartsObj.myChart4();
        echartsMethods.echartsObj.myChart5();
		echartsMethods.echartsObj.resize();
    },
    methods:{
        ...mapActions(['darkStyle','whiteStyle']),
    }
}
</script>
<style scoped>
.echartspage{
	/* box-sizing: border-box;
	padding: 4px 4px 16px 4px; */
}
.echartsContainers{
	
}
.echartsContainers .chartsBlock{
	position: relative;
    box-sizing: border-box;
    margin-top: 16px;
    background-color: #051962;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
.echartsContainers .chartsBlock .chartsContent{
    width: 100%;
    height: 100%;
}
.echartsContainers .chartsBlock .chartsTitle{
    position: absolute;
    z-index: 99;
    left: 20px;
    height: 40px;
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    line-height: 40px;
}
.echartsContainers .chartsBlock1{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
	height:150px;
}
.echartsContainers .chartsBlock1 .symbol{
    position: absolute;
    top: 4px;
    left: 10px;
    color: #fff;
    font-size: 4rem;
} 
.echartsContainers .chartsBlock1 .text{
    text-align: center;
}
.echartsContainers .chartsBlock1 .text .value{
    margin-bottom: 6px;
    font-weight: bold;
    font-size: 2.6rem;
}
.echartsContainers .chartsBlock1 .text .value1{
    color: #f53f8c;
}
.echartsContainers .chartsBlock1 .text .value2{
     color: #ffd81a;
}
.echartsContainers .chartsBlock1 .text .value3{
     color: #08ff81;
}
.echartsContainers .chartsBlock1 .text .value4{
     color: #0037ff;
}
.echartsContainers .chartsBlock1 .text .name{
     color: rgba(255,255,255,.4);
     font-size: 1.8rem;
}
.echartsContainers .chartsBlock2{
	height: 316px;
    margin-top: 0;
} 
.echartsContainers .chartsBlock3{
	height: 550px;
}
.echartsContainers .chartsBlock4{
	height: 400px;
}
</style>
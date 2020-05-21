<template>
  <div class="top" ref="top">
    <Switches></Switches>
    <UserControl></UserControl>
    <systemTool></systemTool>
    <div class="homePage">
        <svg class="icon" aria-hidden="true"><use xlink:href="#index"></use></svg>
    </div>
     <div class="fastLinks">
        <li>常用菜单</li>
        <li>统计分析</li>
        <li>用户中心</li>
    </div>
  </div>
</template>
<script>
  import types from '@/store/types.js'
  import {mapGetters,mapState,mapActions} from 'vuex'
  import Switches from './switches'
  import UserControl from './userControl'
  import SystemTool  from './systemTool'
  export default {
      name:'Aside',
      components:{
        Switches,
        UserControl,
        SystemTool,
      },
  mounted:function(){
    this.$store.commit(types.GETTOPEL,this.$refs.top);
  }    

  }
</script>
<style>
.top{
  position: fixed;
  box-sizing: border-box;
  z-index: 998;
  width: 100%;
  height: 68px;
  padding: 0 12px 0 262px ;
  /* background-color: #fff; */
  background: url(../../../static/bg_top1.png) center no-repeat;
  background-size: cover;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
 .top .homePage{
        float: left;
        height: 68px;
        margin: 0 12px;
        line-height: 68px;
        font-size:36px;
        color: #fff;
        cursor: pointer;
    }
  .top .fastLinks{
      float: left;
      height: 68px;
      line-height: 68px;
      font-size:36px;
      color: #fff;
      cursor: pointer;
  }
  .top .fastLinks li{
      float: left;
      margin: 0 12px;
      font-size: 16px;
  }
  .top .avator{
    float: right;
    margin: 16px 6px 0 0;
  }
  .top .el-dropdown{
    float: right;
    height: 68px;
    line-height: 68px;
  }
</style>

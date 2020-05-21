<template>
  <div id="app">
     <Aiside></Aiside>
     <Top></Top>
     <div class="mainContainer" ref="mainContainer">
       <div class="inner">
          <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight" v-if='false'>
             <router-view/>
          </transition>
            <router-view v-if="true"></router-view>
          
       </div>
     </div>
  </div>
</template>

<script>
import types from '@/store/types.js'
import {mapGetters,mapState,mapActions} from 'vuex'
import Aiside from '@/components/layout/aside2'
import Top from '../components/layout/top2'
export default {
  name: 'Main1',
  components:{
    Aiside,
    Top
  },
  mounted:function(){
    this.$store.commit(types.MAINCONTAINEREL,this.$refs.mainContainer)
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
  }
#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
.mainContainer{
  box-sizing: border-box;
  width: 100%;
  min-width: 1116px;
  height: 100vh;
  padding:80px 12px 0 262px;
  background-color: #f2f2f2;
}
.mainContainer .inner{
  width: 100%;
  height: 100%;
}
.mainContainer .inner .page{
  width: 100%;
  height: 100%;
  background-color:#fff;
}
.mainContainer .inner .echartspage{
  width: 100%;
  height: 100%;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
</style>

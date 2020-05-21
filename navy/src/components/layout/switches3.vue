<template>
  <li class="switches" @click="switches" ref='switches'>
    <svg class="icon" aria-hidden="true"><use xlink:href="#switch"></use></svg>
  </li>
</template>

<script>
  import types from '@/store/types.js'
  import {mapGetters,mapState,mapActions} from 'vuex'
  export  default{
    name:'Switches',
    computed: {
       ...mapGetters(['asideEl','asideState','mainContainerEl','topEl','logoSymbolEl','logoTextEl']),
    },
    mounted:function(){
      // console.log(this.topEl);
      // console.log(this.mainContainerEl);
      // console.log(this.asideState);
    },
    methods:{
      switches:function(){
        if(this.asideState){
          this.open()
        }
        else{
          this.close()
        }
  
        this.$store.commit(types.SETASIDESTATE,!this.asideState); 
        this.$store.commit(types.GETSWITCHESEL,!this.switches); 
        
      },
      open:function(){
        $(this.$refs.switches).css('transform', 'rotate(180deg)');
        $(this.asideEl).animate({
          width:'-=190px'
        },200);
        $('.item-content').hide(0);
       
        $(this.mainContainerEl).animate({
          "paddingLeft":'-=190px'
        },200);
        $(this.topEl).animate({
          "paddingLeft":'-=190px'
        },200)
      },
      close:function(){
        $(this.$refs.switches).css('transform', 'rotate(0deg)');
        $(this.asideEl).animate({
          width:'+=190px'
        },200);
        $('.open').next().slideDown(0);
        // $(this.asideEl).find('.item-content').animate({
        //   width:'230px'
        // },0)
        $(this.mainContainerEl).animate({
          "paddingLeft":'+=190px'
        },200);
        $(this.topEl).animate({
          "paddingLeft":'+=190px'
        },200)
      }
    }
  }
</script>

<style>
.switches{
  float: left;
  height: 68px;
  line-height: 68px;
  font-size: 36px;
  color: #666ee8;
  transition: transform .3s ease-in-out;
  cursor: pointer;
}
</style>

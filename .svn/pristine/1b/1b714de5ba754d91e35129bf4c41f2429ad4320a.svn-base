<template>
  <div class="aside" ref='aside'>
    <div class="logo">
        <li class="symbol" v-if="!asideState" ref='symbol'><svg class="icon" aria-hidden="true"><use xlink:href="#vue"></use></svg></li>
        <li class="text" v-if="asideState" ref='text'>VUE and ElementUI</li>
    </div>
    <div class="menus">
      <div class="item" v-for="(v,index,k) in menus" :key="k" >
          <div class="item-name" @click="toggle($event)">
              <li class="menu-icon"><svg class="icon" aria-hidden="true"><use :xlink:href="v.icon"></use></svg></li>
              <li class="menu-title" v-if="asideState">{{v.title}}</li>
              <li class="menu-arrow" v-if="asideState"><svg class="icon" aria-hidden="true"><use xlink:href="#arrow"></use></svg></li>
          </div>
      
          <div class="item-content clearfix" >
              <li @click="tab(childname.router,$event)" :class="{active:active==index}"  v-for="(childname,index,k) in v.content" :key="k">{{childname.name}}</li>
          </div>
         
      </div>
    </div>
  </div>
</template>
<script>
import types from '@/store/types.js'
import {mapGetters,mapState,mapActions} from 'vuex';

export default {
    name:'Aside1',
    data:function(){
     return{
        menus:[
       {'icon':'#index','title':'dataTable','show':false,'content':[
         {'name':'表格1','router':''},
         {'name':'表格2','router':''},
         {'name':'表格3','router':''}
         ]},
       {'icon':'#echarts','title':'Echarts','show':false,'content':[
         {'name':'可视化1','router':''},
         {'name':'可视化2','router':''},
         ]},
       {'icon':'#tree','title':'Trees','show':false,'content':[
         {'name':'树形控件1','router':''},
         ]},
        {'icon':'#message','title':'弹出层及消息提示','show':false,'content':[
        {'name':'普通对话框','router':''},
        {'name':'嵌套对话框','router':''},
        {'name':'操作反馈提示','router':''},
        {'name':'全局通知提醒','router':''},
        {'name':'加载动画','router':''},
        ]},
         {'icon':'#message','title':'公共组件','show':false,'content':[
        {'name':'批量表单','router':''},
        {'name':'编辑表格1','router':''}
        ]}
      ],
      active:-1,
     }
    },
    watch:{
      asideState:function(val){
        if(!val){
          for(var i=0;i<this.menus.length;+i++){
          this.menus[i].show=false;
        }
        }
         
      }
    },
    computed:{
      ...mapGetters(['asideState','asideEl','switchesEl','mainContainerEl','topEl']),
    },
    mounted:function(){
      $('.item').eq(0).find('.item-name').addClass('open').find('.menu-arrow').css('transform', 'rotate(90deg)')
      $('.item').eq(0).find('.item-content').slideDown(200).find('li').first().addClass('active');
      // this.$store.dispatch('getasideEl',this.$refs.aside);
      this.$store.commit(types.GETASIDEEL,this.$refs.aside);
      this.$store.commit(types.LOGOSYMBOLEL,this.$refs.symbol);
      this.$store.commit(types.LOGOTEXTEL,this.$refs.text);
    },
    methods:{
      toggle:function(el){
        let arrow = $(el.currentTarget).find('.menu-arrow');
        let nextEl=$(el.currentTarget).next();
        $(el.currentTarget).addClass('open');
        $('.item-name').not(el.currentTarget).removeClass('open');
        if (nextEl.is(':hidden')) {
            nextEl.slideDown(300); 
            arrow.css('transform', 'rotate(90deg)'); 
            $('.item-content').not(nextEl).slideUp(300);
            $('.menu-arrow').not(arrow).css('transform', 'rotate(0deg)');
        } else {
            nextEl.slideUp(300);
            arrow.css('transform', 'rotate(0deg)');
        };
        if (!this.asideState) {
          $(this.switchesEl).css('transform', 'rotate(0deg)');
          $(this.asideEl).animate({
              width: '+=190'
          }, 100);
          $(this.mainContainerEl).animate({
              paddingLeft: '+=190'
          }, 100)
          // $(this.asideEl).find('.sysName .text').show(100);
         $(this.asideEl).find('.menu-title').show(100);
         $(this.asideEl).find('.menu-arrow').show(100);
          $(this.asideEl).find('.open').next().show(100);
         $(this.topEl).animate({
              paddingLeft: '+=190'
          }, 100)
       this.$store.commit(types.SETASIDESTATE,true); 
    }
  
      },
      tab:function(router,el){
        this.$router.push(router);
        $(el.currentTarget).addClass('active');
        $('.item-content li').not(el.currentTarget).removeClass('active');
      },
     
    }
}
</script>
<style>
  .aside{
    position: fixed;
    z-index: 999;
    width: 250px;
    height: 100vh;
    background: url(../../../static/bg_aside1.png) center no-repeat;
    background-size: cover;
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
  }
  .aside .logo{
    height: 68px;
    line-height: 68px;
    text-align: center;
  }
  .aside .logo .symbol{
    font-size: 44px;
    color: #fff;
  }
  .aside .logo .text{
    width: 250px;
    font-weight: bold;
    line-height: 68px;
    font-size: 2.2rem;
    color: #fff;
    text-shadow: 0 4px 2px rgba(0,0,0,.2);
    overflow: hidden;
  }
  .aside .menus{
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .aside .menus .item{
    width: 100%;
  }
  .aside .menus .item .item-name{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border-radius: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
    .aside .menus .item .open{
      background-color: rgba(255,255,255,.3);
    }
  .aside .menus .item .item-name .menu-icon{
    width: 60px;
    height: 46px;
    line-height: 42px;
    font-size: 3rem;
    text-align: center;
    color: #fff;
  }
  .aside .menus .item .item-name .menu-title{
    width: 130px;
    height: 46px;
    line-height: 46px;
    font-size: 1.6rem;
    text-align: left;
    font-weight: bold;
    color: #fff;
    overflow: hidden;
  }
  .aside .menus .item .item-name .menu-arrow{
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 2rem;
    color: #fff;
    -webkit-transition: transform .3s ease-in-out;
    -o-transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
  }
  .aside .menus .item .item-content{
    display: none;
    width: 100%;
    overflow: hidden;
  }
  .aside .menus .item .item-content li {
    position: relative;
    box-sizing: border-box;
    display: block;
    height: 42px;
    padding-left: 62px;
    margin-bottom: 6px;
    line-height: 42px;
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    border-radius: 20px;
    cursor: pointer;
}
 .aside .menus .item .item-content .active{
   color: #5763ff;
   font-weight: bold;
   background-color: rgba(255,255,255,.8);
 }
</style>

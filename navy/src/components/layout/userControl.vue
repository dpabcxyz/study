<template>
  <div class="userControl">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link" :style="{color:navTopTxt}">
        Admin<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="x-dropdown-item">
          <ul class="dropitem">
            <li><svg class="icon" aria-hidden="true"><use xlink:href="#user"></use></svg></li>
            <li>编辑资料</li>
          </ul>
        </el-dropdown-item>
        <el-dropdown-item class="x-dropdown-item">
          <ul class="dropitem">
            <li><svg class="icon" aria-hidden="true"><use xlink:href="#pwd"></use></svg></li>
            <li>修改密码</li>
          </ul>
        </el-dropdown-item >
        <el-dropdown-item class="x-dropdown-item">
           <ul class="dropitem">
            <li><svg class="icon" aria-hidden="true"><use xlink:href="#seting"></use></svg></li>
            <li>用户设置</li>
          </ul>
        </el-dropdown-item >
        <el-dropdown-item divided class="x-dropdown-item">
          <ul class="dropitem">
            <li><svg class="icon" aria-hidden="true"><use xlink:href="#logout"></use></svg></li>
            <li>退出登录</li>
          </ul>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="avator">
       <el-avatar :size="size" :src="url"></el-avatar>
    </div>
  </div>
</template>

<script>
  import types from '@/store/types.js'
  import {mapGetters,mapState,mapActions} from 'vuex'
  export default{
    name:"UserControl",
    data:function(){
      return{
        size:'medium',
        url:"../../../static/avator.png",
      }
    },
    computed: {
        ...mapGetters(['navTopTxt']),
    },
  }
</script>

<style>
.x-dropdown-link{
  font-weight: bold;
  outline: none;
  cursor: pointer;
  /*color: #fff;*/
}
.dropitem li{
 float: left;
}
.dropitem li:first-child{
  height: 36px;
  margin-right: 6px;
  line-height: 36px;
  font-size: 24px;
}
.x-dropdown-item{
  height: 36px;
  padding: 0 12px;
}
</style>

<template>
  <div class="systemTool">
      <ul class="toolItem">
          <li class="symbol"><svg class="icon" aria-hidden="true"><use xlink:href="#search"></use></svg></li>
      </ul>
     <el-dropdown trigger="click" class="toolItem">
       <span class="el-dropdown-link x-badge">
         <li class="symbol"><svg class="icon" aria-hidden="true"><use xlink:href="#flag"></use></svg></li>
         <i class="el-icon-caret-bottom el-icon--right"></i>
       </span>
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item class="clearfix">
           English
         </el-dropdown-item>
         <el-dropdown-item class="clearfix"> 
            Spanish
         </el-dropdown-item>
         <el-dropdown-item class="clearfix"> 
            Portuguese
         </el-dropdown-item>
         <el-dropdown-item class="clearfix"> 
            French
         </el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
     
     <el-dropdown trigger="click" class="toolItem">
       <span class="el-dropdown-link">
         <el-badge :value="12" class="x-badge">
           <li class="symbol"><svg class="icon" aria-hidden="true"><use xlink:href="#messages"></use></svg></li>
         </el-badge>
         <i class="el-icon-caret-bottom el-icon--right"></i>
       </span>
       <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >
            评论
            <el-badge :value="12" />
          </el-dropdown-item>
          <el-dropdown-item >
            回复
            <el-badge :value="3" />
          </el-dropdown-item>
           <el-dropdown-item >
            系统通知
            <el-badge :value="8" />
          </el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>

     <ul class="toolItem">
        <li class="symbol"><svg class="icon" aria-hidden="true"><use xlink:href="#set"></use></svg></li>
     </ul>
   



  </div>
</template>

<script>
  export default{
    name:"SystemTool"
  }
</script>

<style>
  .systemTool{
    float: right;
    margin-right: 30px;
  }
  .systemTool .toolItem{
    float: left;
    height: 68px;
    line-height: 68px;
    margin: 0 10px;
    color: #666ee8;
    cursor: pointer;
   }
    .x-badge .el-badge__content.is-fixed{
      top: 15px;
    }
   .systemTool .toolItem .symbol{
     float: left;
     font-size: 30px;
     color: #666ee8;
   }
   .systemTool .toolItem .el-icon--right{
     margin-left: 0;
   }
</style>

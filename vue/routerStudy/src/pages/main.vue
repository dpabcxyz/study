<template>
  <div class="main">
      <router-view></router-view>
  </div>

</template>

<script>
import Page1 from './tab/Page1'
import Page2 from './tab/Page2'
export default {
  name:"Main",
  components:{
    Page1,
    Page2
  }
}
</script>

<style>

</style>

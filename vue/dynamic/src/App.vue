<template>
  <div id="app">
    <div class="main">
      <div class="aside"></div>
      <div class="container">
         <router-view/>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  width: 100%;
  height: 100vh;
}
.aside{
  float: left;
  width: 200px;
  height: 100%;
  background-color: burlywood;
}
.container{
  margin-left: 200px;
  height: 100%;
}
</style>

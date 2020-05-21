<template>
  <div class="page">
    <div class="spreadsheet">
        <SpreadSheet></SpreadSheet>
    </div>
   
  </div>

</template>

<script>
  import SpreadSheet from './SpreadSheet'
    export default {
        name: "SpreadDemo",
        components:{
            SpreadSheet
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
.spreadsheet{
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
}
</style>

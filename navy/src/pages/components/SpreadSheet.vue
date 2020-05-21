<template>
    <div id="x-spreadsheet-demo"></div>
</template>

<script>
    import Spreadsheet from "x-data-spreadsheet"
    export default {
        name: "SpreadSheet",
        data() {
            return {}
        },
        mounted(){
            const options={
                view: {
                    height: () => document.documentElement.clientHeight-112,
                    width: () => document.documentElement.clientWidth-320,
                },
            }
            // const s = new Spreadsheet("#x-spreadsheet-demo",options)
            const xs = new Spreadsheet("#x-spreadsheet-demo",options)
                // .loadData({}) 
                xs.change(data => {
                   console.log(data)
                });
                // xs.getData();
                // xs.locale('zh-cn');
            // data validation
            // s.validate()
        }
    }
</script>

<style scoped>
#x-spreadsheet-demo{
    border: 1px solid #c7c7c7;
}
</style>

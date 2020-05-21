<template>
  <div style="height:600px;overflow-y:auto">
    <textarea type="text" class="area-box" v-model="dataArr"></textarea>
    <FormCreat v-bind="formData" @form-submit="handleSubmit"></FormCreat>
  </div>
</template>

<script>
  import FormCreat from "./FormCreat";
    export default {
        name: "form1",
        components:{
            FormCreat
        },
        data() {
            return {
                formData:{
                    labelWidth:'100px',//表单域标签宽度
                    createData:[
                        {id:'01',type:'text',label:'活动名称',prop:'name',defaultVal:''},
                        {id:'02',type:'select',label:'活动区域',prop:'region',defaultVal:'',placeholder:'请选择活动区域',child:[
                                {id:'0201',value:'shanghai',label:'区域一'},
                                {id:'0202',value:'beijing',label:'区域二'}
                            ]},
                        {id:'03',type:'datePicker',label:'活动时间',dateType:'date',prop:'date1',defaultVal:'',placeholder:'选择日期'},
                        {id:'09',type:'datePicker',label:'结束时间',dateType:'datetime',prop:'date2',defaultVal:'',placeholder:'选择日期时间'},
                        {id:'04',type:'switch',label:'即时配送',prop:'delivery',defaultVal:false},
                        {id:'05',type:'checkbox',label:'活动性质',prop:'type',defaultVal:[],child:[
                                {id:'0501',label:'美食/餐厅线上活动'},
                                {id:'0502',label:'地推活动'},
                                {id:'0503',label:'线下主题活动',disabled:true}
                            ]},
                        {id:'06',type:'radio',label:'特殊资源',prop:'resource',defaultVal:'',child:[
                                {id:'0601',label:'线上品牌商赞助'},
                                {id:'0602',label:'线下场地免费'}
                            ]},
                        {id:'07',type:'textarea',label:'活动形式',defaultVal:'',prop:'desc'},
                        {id:'08',type:'button',txt:'提交',btnType:'primary'}
                    ],//表单生成数据
                    rules:{
                        name: [
                            { required: true, message: '请输入活动名称', trigger: 'blur' },
                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ]
                    },//校验规则
                }
            }
        },
        computed:{
            dataArr: {
                // getter
                get() {
                    return JSON.stringify(this.formData.createData)
                },
                // setter
                set(newValue) {
                    this.formData.createData=JSON.parse(newValue);
                }
            },
        },
        created(){

        },
        methods:{
            handleSubmit(msg){
                console.log(msg)
            }
        }
    }
</script>

<style scoped>
  .area-box{
    width:100%;
    height:200px;
    overflow:auto;
  }
</style>

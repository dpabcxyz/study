<template>
  <el-form :model="form"  :rules="rules" ref="ruleForm" :label-width="labelWidth" class="demo-ruleForm">
    <el-form-item :label="item.label" v-for="item in createData" :key="item.id" :prop="item.prop">
      <el-input v-if="item.type==='text'" v-model="form.name"></el-input>
      <el-select v-else-if="item.type==='select'" v-model="form.region" :placeholder="item.placeholder">
        <el-option v-for="child in item.child" :label="child.label" :value="child.value" :key="child.id"></el-option>
      </el-select>
      <el-date-picker v-else-if="item.type==='datePicker'" :type="item.dateType" :placeholder="item.placeholder" v-model="form.date1" style="width: 100%;"></el-date-picker>
      <el-switch v-else-if="item.type==='switch'" v-model="form.delivery"></el-switch>
      <el-checkbox-group v-else-if="item.type==='checkbox'" v-model="form.type">
        <el-checkbox v-for="child in item.child" :label="child.label" :key="child.id" :disabled="child.disabled"></el-checkbox>
      </el-checkbox-group>
      <el-radio-group v-else-if="item.type==='radio'" v-model="form.type">
        <el-radio v-for="child in item.child" :label="child.label" :key="child.id"></el-radio>
      </el-radio-group>
      <el-input v-else-if="item.type==='textarea'" type="textarea" v-model="form.desc"></el-input>
      <el-button v-else-if="item.type==='button'" :type="item.btnType" @click="submitForm('ruleForm')">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "FormCreat",
        props:{
          labelWidth:String,
          rules:Object,
          createData:Array
        },
        data() {
            return {
                form:{}
            }
        },
        watch:{
            createData(newVal,oldVal){
                console.log(newVal)
                this.form=this.formObj(newVal);
            }
        },
       created(){
           this.form=this.formObj(this.createData);
       },
        methods:{
            formObj(arr){
                let obj={}
                arr.filter(item=>{
                        if(item.prop){
                            obj[item.prop]=item.defaultVal
                        }
                    }
                )
                return obj;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.form);
                        this.$emit('form-submit',this.form);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>

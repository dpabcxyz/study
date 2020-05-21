<template>
  <dialog-main :dialog-form-visible.sync="dialogFormVisible" @dialog-close="handleClose">
    <template #title>
      <span class="dialog-title">{{dialogTitle}}</span>
    </template>
    <template #default>
      <el-form :model="form" ref="dialogForm" :rules="rules" :label-width="formLabelWidth">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancelForm('dialogForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('dialogForm')">确 定</el-button>
      </div>
    </template>
  </dialog-main>
</template>

<script>
  import DialogMain from '../dialog/DialogSlotMain'
    export default {
        name: "ItemAdd",
        components:{
            DialogMain
        },
        props:{
            dialogFormVisible:{
                type:Boolean,
                default:false
            },
            dialogTitle:String,
        },
        data() {
            return {
                formLabelWidth: '120px',
                form: {
                    name: '',
                },
                rules:{
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
                    ]
                },
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('child-item-add',this.form);
                        this.cancelForm(formName);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            cancelForm(formName) {
                this.$emit('update:dialogFormVisible',false);
                this.$refs[formName].resetFields();
            },
            handleClose(){
                this.cancelForm('dialogForm');
            }
        },
    }
</script>

<style scoped>
  .dialog-title{
    line-height: 24px;
    font-size: 18px;
    color: #303133;
  }
</style>

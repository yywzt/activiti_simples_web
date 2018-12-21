<template>
  <div>
    <el-container>
      <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    import {setCookie,getCookie,delCookie} from '../assets/js/cookie'
    export default {
      name: "Login",
      data() {
        return{
          ruleForm: {
            username: '',
            password: ''
          },
          rules: {
            username: [
              {required: true, message: '请输入用户名', trigger: 'blur'},
              {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur'}
            ],
            password: [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur'}
            ]
          }
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // alert('submit!');
              axios.post(this.GLOBAL.ProviderUrl + "/doLoging",this.ruleForm,{emulateJSON:true})
                .then(res => {
                  if(res.data.success){
                    setCookie('username',this.ruleForm.username,1000*60)
                    this.$router.push('/');
                  }else{
                      this.GLOBAL.openMsg(res.data.message,1);
                  }
                })
                .catch(error => {
                    console.log(error);
                    this.GLOBAL.openMsg(error.message,3);
                });
            } else {
              console.log('error submit!!');
              return false;
            }
        });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style>

</style>

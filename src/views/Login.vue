<template>
    <div>
        <h2>登录</h2>
        <div class="box">
            <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import {login} from '@/api/index'
import jwt from 'jwt-decode'
export default {
 data() {
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          username: "",
          password: ""
        },
        rules: {
          username: [
            { validator: validateUser, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
           console.log("校验成功",this.loginForm)
           try {
            const res=await login(this.loginForm)
            console.log(res)
            console.log(jwt(res.token))
            
            let obj={
              token:res.token,
              username:jwt(res.token).user
            }
            this.$store.commit('LoginModule/setUser',obj)
            localStorage.setItem('userinfo',JSON.stringify(obj))
            this.$router.push('/')

           } catch (error) {
            console.log(error)
           }
           
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
<style lang="less" scoped>
    h2{
        text-align: center;
        margin-top: 30px;
    }
    .box{
        width: 400px;
        height: 240px;
        box-shadow: 0 0 5px 5px rgba(0,0,0,.1);
        margin: 30px auto;
        padding: 20px;
    }
</style>
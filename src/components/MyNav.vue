<template>
<div class="nav">
        <!-- <router-link to="/">首页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/about">我的</router-link>
        <router-link to="/travel">旅游</router-link> -->
<el-menu
  :default-active="$route.path"
  class="el-menu"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" router>
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/news">新闻</el-menu-item>
  <el-menu-item index="/about">我的</el-menu-item>
  <el-menu-item index="/travel">旅游</el-menu-item>

  <div class="nav-right">
    <el-button v-if='!userinfo.token'>登录</el-button>
    <template v-else>
      <span>欢迎：{{userinfo.username}}</span>
      <i class="el-icon-switch-button" @click="exit"></i>
    </template>
    
  </div>
</el-menu>
</div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
data() {
      return {
        //activeIndex2: '1'
      }
    },
    computed:{
      ...mapState('LoginModule',['userinfo'])
    },
    created(){
      //  let index=sessionStorage.getItem('index')
      //   if(index){
      //       this.activeIndex2=index;
      //   }
    },
    methods: {
      ...mapMutations('LoginModule',['delUser']),
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        //sessionStorage.setItem('index',key)
      },
      exit(){
         this.delUser()
         localStorage.removeItem('userinfo')
         this.$router.go(0)
      }
    }
}
</script>
<style lang="less" scoped>
.nav{
    background-color: #545c64;
    .el-menu{
        width: 1200px;
        margin: 0 auto;
    }
    .nav-right{
      float: right;
      line-height: 60px;
      color:#ffffff;
      font-size: 16px;
      i{
        padding: 0 10px;
        cursor: pointer;
      }
    }
}
</style>
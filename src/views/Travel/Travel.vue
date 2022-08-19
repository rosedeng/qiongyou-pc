<template>
    <div>
        <div class="wrap">
            <img src="@/assets/images/banner.jpg" alt="">
            <div class="search">
                <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect">
                <template slot-scope="{ item }">
                    <span class="name">{{ item.cn_name }}</span>
                    <span class="addr">{{ item.en_name }}</span>
                </template></el-autocomplete>
                <el-button type="primary">搜索</el-button>
            </div>
        </div>
        <Recommend />
        <!-- <Yiyuan/> -->


    </div>
</template>
<script>
import { getTravel } from '@/api/index.js';
import Recommend from './Recommend.vue';
//import Yiyuan from './Yiyuan.vue';
export default {
    components:{
    Recommend,
    // Yiyuan
},
    data() {
      return {
         state:'',
      }
    },
    methods: {
    async querySearchAsync(keyword, cb) {
        try {
            const res=await getTravel({keyword})
            console.log(res.data.list);
            cb(res.data.list)
        } catch (error) {
            console.log(error);
        }
      },
    
      handleSelect(item) {
        console.log(item);
        this.state=item.cn_name
      }
    },
    mounted() {
       
    }
  }
</script>
<style lang="less" scoped>
.wrap{
    position: relative;
    img{
        width: 100%;
    }
    .search{
        position: absolute;
        left:50%;
        margin-left: -300px;
        top:200px;
        width: 600px;
        height: 80px;
        background-color: #fff;
        display: flex;
        /deep/.el-input__inner{
            width: 460px;
            margin: 20px 10px;
        }
         
        button{
            width: 100px;
            height: 40px;
            margin-top: 20px;
        }
    }
}
</style>
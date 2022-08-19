<template>
    <div class="recommend">
            <h2 class="title">今日推荐</h2>
            <div class="wrap">
                <el-row>
                    <el-col :span="5" v-for="(o, index) in list" :key="index" :offset="1">
                        <el-card :body-style="{ padding: '0px' }">
                            <img height="185" :src="o.data.pic" class="image">
                            <div style="padding: 14px;">
                                <span class="th">{{o.data.subject}}</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ o.data.username }}</time>
                                    <el-button v-if="o.data.tag" type="text" class="button">{{o.data.tag}}</el-button>
                                    <el-button v-else-if="o.data.views" type="text" class="button">{{o.data.views}}人浏览过</el-button>
                                    <el-button v-else type="text" class="button" v-html="o.data.price"> </el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
    </div>
</template>
<script>
 import {getTuijian} from '@/api/index.js'
export default {
    data() {
    return {
      list:[],
    };
  },
  created(){
    this.getRecommend()
  },
  methods:{
   async getRecommend(){
        try {
            let res=await getTuijian()
            console.log(res);
            this.list=res.data
        } catch (error) {
            console.log(error);
        }
    }
  },
}
</script>
<style lang="less" scoped>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .recommend{
    width: 1200px;
    margin: 20px auto;
    .title{
        text-align: center;
        margin: 30px auto;
    }
    .el-card{
        width: 275px;
        height: 300px;
        margin-bottom: 20px;
        .th{
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
    }
  }
</style>
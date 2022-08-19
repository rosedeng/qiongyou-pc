<template>
    <div>
       <div class="container">
            <h2 class="title">新闻</h2>
            <div class="wrapper">
                <div class="left"></div>
                <div class="center">
                    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">  
                        <el-tab-pane label="要闻" name='1'>
                            <ul class="list">
                                <li class="item" v-for="item in yaowen" :key="item.docid">
                                    <img :src="item.imgsrc" alt="">
                                    <div class="info">
                                        <div class="title">{{item.title}}</div>
                                    </div>
                                </li>
                            </ul>
                            <MyPagination :total='total' :pageSize='pageSize' @getPage='getNews'/>
                        </el-tab-pane>
                        <el-tab-pane label="国内" name='2'>
                            <ul class="list">
                                <li class="item" v-for="item in guonei" :key="item.docid">
                                    <img :src="item.imgsrc" alt="">
                                    <div class="info">
                                        <div class="title">{{item.title}}</div>
                                    </div>
                                </li>
                            </ul>
                            <MyPagination :total='total' :pageSize='pageSize' @getPage='getGuonei'/>
                        </el-tab-pane>
                        <el-tab-pane label="国际" name='3'>
                            <ul class="list">
                                <li class="item" v-for="item in guoji" :key="item.docid">
                                    <img :src="item.imgsrc" alt="">
                                    <div class="info">
                                        <div class="title">{{item.title}}</div>
                                    </div>
                                </li>
                            </ul>
                            <MyPagination :total='total' :pageSize='pageSize' @getPage='getGuoji'/>
                        </el-tab-pane>
                    </el-tabs>

                </div>
                <div class="right"></div>
            </div>
       </div>
       <el-backtop></el-backtop>
    </div>
</template>
<script>
import MyPagination from '@/components/MyPagination.vue'
import { getNewsList } from '@/api/index.js';
import {yaowen,guonei,guoji} from '@/api/type.js'
export default {
    components:{
    MyPagination
},
    created(){
        this.getNews(1)
        this.getGuonei(1)
        this.getGuoji(1)
    },
    data(){
        return{
            activeName:'2',
            yaowen:[],
            guonei:[],
            guoji:[],
            total:10,
            pageSize:1
        }
        
    },
    methods:{
      async getNews(num){
            try {
                 let res=await getNewsList(yaowen,num)
                 console.log(res)
                 this.yaowen=res
                 document.documentElement.scrollTop=0
            } catch (error) {
                console.log(error)
                console.log('出错啦')
            }
           
        },
        async getGuonei(num){
            try {
                 let res=await getNewsList(guonei,num)
                 console.log(res)
                 this.guonei=res
                 document.documentElement.scrollTop=0
            } catch (error) {
                console.log(error)
                console.log('出错啦')
            }
           
        },
        async getGuoji(num){
            try {
                 let res=await getNewsList(guoji,num)
                 console.log(res)
                 this.guoji=res
                 document.documentElement.scrollTop=0
            } catch (error) {
                console.log(error)
                console.log('出错啦')
            }
           
        },
        handleClick(tab,event){
            console.log(tab.index,event)
        },
         
    }
}
</script>
<style lang="less" scoped>
    .container{
        width: 1200px;
        margin: 30px auto;
        .title{
            text-align: center;
            margin: 20px 0;
        }
        .wrapper{
            display: flex;
            .left,.right{
                width: 200px;
                background-color: #fff;
                min-height: 600px;
            }
            .center{
                flex: 1;
                min-height: 600px;
                background-color: pink;
                .list{
                    .item{
                        display: flex;
                        border-bottom: 1px solid #ddd;
                        margin: 10px 0;
                        padding: 10px 0;
                        img{
                            width: 140px;
                            height: 88px;
                            margin-right: 10px;
                        }
                        .title{
                            font-size: 20px;
                            color:#404040;
                        }
                    }
                }
            }
        }

    }
    .el-tabs--border-card{
        border-top: 2px solid red;
    }
     /deep/ .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
        background-color: red;
        color:#fff
    }
</style>
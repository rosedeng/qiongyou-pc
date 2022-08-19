<template>
    <div class="container">
       <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" @current-change="changePage"></el-pagination>
    </div>
</template>
<script>
export default {
    props:{
        total:{
            type:Number,
            default:100
        },
        pageSize:{
            type:Number,
            default:1
        }
    },
    methods:{
       changePage(num){
        console.log(num)
        this.$emit('getPage',num)
       } 
    }
}
</script>
<style lang="less" scoped>
    .container{
        text-align: center;
        height: 80px;
    }
</style>
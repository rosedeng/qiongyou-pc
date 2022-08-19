<template>
    <div>
       <div class="lanmei">
        <h2 class="title">蓝莓酱</h2>
        <ul class="list">
            <li class="item" v-for="(item,index) in lanmei" :key="index">
                <img :src="item.img" alt="">
                <span>{{item.title}}</span>
            </li>
             
        </ul>
       </div>
    </div>
</template>
<script>
export default {
    props:['lanmei']
}
</script>
<style lang="less" scoped>
.lanmei{
    width: 1200px;
    margin: 20px auto;
    //background-color: pink;
    padding: 20px 0;
    .title{
        text-align: center;
        margin: 20px 0;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        .item{
            position: relative;
            width: 220px;
            height: 200px;
            margin: 10px;
            padding-bottom: 10px;
            // background-color: #ccc;
            img{
                width: 100%;
            }
            span{
                position: absolute;
                right: 20px;
                bottom: 10px;
                background-color: #ccc;
                color: #fff;
                border-radius: 4px;
                padding: 3px 5px;
            }
        }
    }

}
</style>
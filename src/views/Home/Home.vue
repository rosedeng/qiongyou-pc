<template>
    <div>
       <MyBanner :banner="banner"></MyBanner>
       <Lanmei :lanmei='lanmei'/>
       <MyPagination @getPage="getCurrentPage" :pageSize="pageSize" :total="total"/>
    </div>
</template>
<script>
import MyBanner from '@/components/MyBanner.vue'
import Lanmei from './Lanmei.vue'
import MyPagination from '@/components/MyPagination.vue'
import {getBannerList,getLanmeiList} from '@/api/index.js'

export default {
components:{
    MyBanner,
    Lanmei,
    MyPagination
},
data(){
    return{
        banner:[],
        lanmei:[],
        total:100,
        pageSize:1
    }
},
created(){
    this.getBanner()
    this.getLanmeiByPageNum(1)
},
methods:{

  async getBanner(){
    try{
        const res=await getBannerList()
       // console.log(res)
       res.banner.forEach(item=>{
        item.img=item.img.replace('http://www.wwtliu.com/sxtstu','http://iwenwiki.com/api')
       })
        this.banner=res.banner
    }catch(error){
        console.log(error);
    }
    
    },
    async getLanmeiByPageNum(page){
        try {
          let res=await getLanmeiList({blueBerryjam_id:page});
          console.log(res)
          let data=res.blueBerryJam
          data.forEach(item=>{
            item.img=item.img.replace('http://iwen.wiki/sxtstu','http://iwenwiki.com/api')
          })
          this.lanmei=data
          this.pageSize=1
          this.total=res.maxPage  
        } catch (error) {
            console.log(error)
        }
    },
     getCurrentPage(page){
         this.getLanmeiByPageNum(page)
    }
}
}
</script>
<style lang="less" scoped>

</style>
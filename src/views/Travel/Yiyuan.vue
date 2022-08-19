<template>
    <div>
       yiyuan 
    </div>
</template>
<script>
import { getYiyuan} from '@/api/index.js'
export default {
    created() {
       this.getYiyuanList() 
    },
    methods:{
       async getYiyuanList(){
        let res=await getYiyuan()
        console.log(res)  
        }
    }
}
</script>
<style lang="less" scoped>

</style>
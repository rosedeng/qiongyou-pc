<template>
    <div>
        
    </div>
</template>
<script>
import { getUser} from '@/api/index.js'
export default {
    created() {
        getUser().then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },
}
</script>
<style lang="less" scoped>

</style>
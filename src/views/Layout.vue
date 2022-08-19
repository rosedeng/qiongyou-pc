<template>
    <div>
       <MyNav></MyNav>
        <router-view></router-view>
    </div>
</template>
<script>
import MyNav from '@/components/MyNav.vue'
export default {
components:{
    MyNav
}
}
</script>
<style lang="less" scoped>

</style>
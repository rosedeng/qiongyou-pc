import router from './index'
import store from '@/store/index'

router.beforeEach((to,from,next)=>{
    if(to.meta.isLogin){
    let token=store.state.LoginModule.userinfo.token;
    if(token){
      next();
    }else{
      next('/login')
    }
    }else{
      next();
    }
    })
import Axios from 'axios'
import store from '@/store/index'
const service=Axios.create({
    baseURL:'',
    timeout:5000
})
// 请求拦截
service.interceptors.request.use(config=>{

    let token=store.state.LoginModule.userinfo.token;
    if(token){

        config.headers.authorization=token;
    }
    console.log(config)
    return config;
})
//响应拦截
service.interceptors.response.use(res=>{
    return res.data;
},err=>{
    return Promise.reject(err)
})
export default service;





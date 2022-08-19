
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import store from './store'
import './plugins/element.js'
import '@/assets/css/reset.css'
import '@/router/permision'
Vue.use(ElementUI)

let userinfo=localStorage.getItem('userinfo')
console.log(userinfo)
if(userinfo){
  let obj=JSON.parse(userinfo)
  store.commit('LoginModule/setUser',obj)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

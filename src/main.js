import Vue from 'vue'
import App from './App.vue'
import router from './router'
import global from "@/utils/global"
import store from "./store"


import data from "@/data"
import "assets/css/index.scss"

Vue.use(global)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
  data: () => {
    return {
      data,
    }
  }
}).$mount('#app')

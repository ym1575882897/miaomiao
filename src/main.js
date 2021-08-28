import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
//这样做的好处是不用到处引用AXIOS,直接this.$axios()就可以用
Vue.prototype.$axios = axios

Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

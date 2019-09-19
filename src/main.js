import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mdui from 'mdui' //引入mdui
import 'mdui/dist/css/mdui.min.css'
import 'mdui/dist/js/mdui.min.js'


Vue.config.productionTip = false
new Vue({
  router,
  store,
  mdui,
  render: h => h(App)
}).$mount('#app')

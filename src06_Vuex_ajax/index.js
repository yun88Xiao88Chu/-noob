import '@babel/polyfill'
import Vue from 'vue'
import App from '@/App'
import store from './vuex/store'


Vue.config.productionTip = false;


new Vue({
  render:h=>h(App),
  store,
}).$mount('#root')
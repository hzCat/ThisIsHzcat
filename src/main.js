// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */


// 引入公共样式
import '../theme/animate.css';
import '../theme/reset.css'


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

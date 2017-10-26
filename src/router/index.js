import Vue from 'vue'
import Router from 'vue-router'

//引入页面
import myself from '@/pages/myself/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: myself
    },{
      path:'/myself',
      component:myself
    }
  ]
})

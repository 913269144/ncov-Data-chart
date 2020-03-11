import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import region from '@/router/module/region'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:'chinese'
      },
      component: index,
      children:[
        region,
      ]
    }
  ]
})

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
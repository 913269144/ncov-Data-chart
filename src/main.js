
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import echarts from 'echarts';
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
import './assets/css/bootstrap.css'  
import './assets/js/bootstrap.js' 
Vue.config.productionTip = false
Vue.prototype.$layer = layer(Vue);
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

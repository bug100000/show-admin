import Vue from 'vue'
import Login from './Login_v'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '../../assets/js/axios.js'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#login',
  render: h => h(Login)
})

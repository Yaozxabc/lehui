// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Mock from 'mockjs'
import _ from 'lodash'
import Vlazyload from 'vue-lazyload'
import 'lib-flexible/flexible.js'
import 'babel-polyfill'
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.use(Vlazyload,{
  loading:require('res/images/headline/title.jpg')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

import Vue from 'vue'

import app from './components/app.vue'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import '../lib/mui/css/mui.min.css'


import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'

// 配置axios
import axios from 'axios'
Vue.prototype.$http = axios.create({
    baseURL:'http://39.106.32.91:3000/'
})
const vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})
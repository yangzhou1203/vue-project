import VueRouter from 'vue-router'

import home from './components/tabbars/home.vue'
import menber from './components/tabbars/member.vue'
import search from './components/tabbars/search.vue'
import shopcar from './components/tabbars/shopcar.vue'


const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/menber',component:menber},
        {path:'/seacth',component:search},
        {path:'/shopcar',component:shopcar}
    ],
    linkActiveClass:'mui-active'
})
export default router
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue';
// import Addfood from './components/addfood'
import Foodlist from './components/viewlist'
import Cartpage from './components/cartpage'
import Dashboard from './components/dashboard';
import Foodform from './components/foodform'
import myFood from './store/index';
import Mainboard from './components/mainboard'
import vuetify from './plugins/vuetify'


Vue.use(VueRouter)
const routes = [
  {path:'/viewlist',name:'viewlist', component:Foodlist},
  {path:'/cart',name:'cart', component:Cartpage},
  {path:'/dashboard',name:'Dashboard', component:Dashboard, children:[
    {path:'/', component:Mainboard},
    {path:'foodform', component:Foodform},
    
  ]},
  // {path:'/contact/:id?', component:Contact},
  {path:'/', component:Home}
  // {path:'*', component:Notfound},
]
Vue.config.productionTip = false

const router = new VueRouter({routes})
new Vue({
  vuetify,
  router,
  store : myFood,
  render: h => h(App),
}).$mount('#app')

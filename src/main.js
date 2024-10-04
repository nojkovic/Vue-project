import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Login from './components/pages/Log in'
import Photos from './components/pages/Photos'
import Admin from './components/pages/Admin'
import Reg from './components/pages/Register'
import Form from './components/pages/Form'
import store from "./store/store"
import RoleDirective from "./directives/RoleDirective.js"


Vue.directive("role", RoleDirective)
Vue.use(VueRouter)
var routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact},
  { path: '/about', component: About},
  { path: '/login', component: Login},
  { path: '/register', component: Reg},
  { path: '/photos', component: Photos},
  { path: '/admin', component: Admin},
  { path: '/form/:id',name:"form", component: Form}
]

const router = new VueRouter({
  routes
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  created: function() {
    var user = localStorage.getItem("user")

    if(!user) {
      this.$store.commit("changeUser", undefined)
      return
    }
    
    this.$store.commit("changeUser", JSON.parse(user))
  },
  render: h => h(App),
}).$mount('#app')

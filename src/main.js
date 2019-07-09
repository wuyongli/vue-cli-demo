import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import page1 from "./components/page1";
import page2 from "./components/page2";

Vue.config.productionTip = false
Vue.use(VueRouter)

//创建路由对象
const router = new VueRouter({
  routes: [
    //路径与组件对应
    {
      path: "/",
      component: App
    },
    {
      path: "/page1",
      component: page1
    },
    {
      path: "/page2",
      component: page2
    }
  ],
  mode:"history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
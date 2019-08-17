import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'
// import Mint from 'mint-ui';
// Vue.use(Mint);
// import 'mint-ui/lib/style.css'; 
// import {Toast} from 'mint-ui'


Vue.use(VueRouter)


const router=new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return {x:0,y:100}//滚动行为，展示首个页面的时候的x，y轴
    // return {selector:'.btn'}//置顶第一个class为btn的内容
    // if(savedPosition){
    //   return savedPosition
    // }else{
    //   return {x:0,y:0}
    // }
  }
  //建立在history的savePosition，当有history的时候返回时展示当时所在的位置
})
//全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path=='/login'||to.path=='/register'){
//     next();
//   }else{
//     alert('您还没登录，请先登录')
//     next('/login')
//   }
// })
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}) 

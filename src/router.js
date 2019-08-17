import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import About from './components/about/About'
import Register from './components/Register'
//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName.vue'

export const routes=[
    {path:'/',name:"homeLink",components://有多个需要展示是要加s
    {
        default:Home,
        'orderingguide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }
    },//name为路由的名字，可以在router-link中使用
    {path:'/menu',name:"menuLink",component:Menu},
    {path:'/admin',name:"adminLink",component:Admin,
    // beforeEnter:(to,from,next)=>{
      //路由内独享的守卫
      // alert('非登录状态，不能访问页面！')
        // if(to.path=='/login'||to.path=='/register'){
        // next();
        // }else{
        //   alert('您还没登录，请先登录')
        //   next('/login')
        // }
    // }
  },
    {path:'/login',name:"loginLink",component:Login},
    {path:'/about',name:"aboutLink",redirect:'/about/contact',component:About, children:[
      //redirect的作用当跳转到about时，默认展示contact
      {path:'/about/contact',name:'contactLink',redirect:'/phone',component:Contact,children:[
        {path:'/phone',name:'phoneNumber',component:Phone},
        {path:'/personname',name:'personName',component:PersonName},
      ]},
      //路由可以写成/about/contact，也可以写成别的形式
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/history',name:'historyLink',component:History},
      {path:'/orderingguide',name:'orderingguideLink',component:OrderingGuide}
    ]},
    {path:'/register',name:"registerLink",component:Register},
    {path:'*',redirect:'/'},//如果都没有匹配上就跳转到主页  
  ]
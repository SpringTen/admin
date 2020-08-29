import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import Alipay from './pages/alipay'

Vue.use(Router);

export default new Router({
    routes:[
        {
            // 根路由
            path:'/',
            name:'home',
            component:Home,
            // 重定向,mo默认到index
            redirect:'/index',
            // 子路由
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },{
                    // id是参数,动态路由
                    path:'/product/:id',
                    name:'product',
                    component:Product,
                },{
                    path:'/detail/:id',
                    name:'detail',
                    component:Detail,
                }
            ]
        }, {
            // 根路由
            path:'/cart',
            name:'cart',
            component:Cart,
            // 子路由
            children:[
                
            ]
        }, {
            // 根路由
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    // zhuyi此处不需要加反斜线
                    path:'list',
                    name:'order-list',
                    component:OrderList,
                },{
                    // id是参数,动态路由
                    path:'confirm',
                    name:'order-confirm',
                    component:OrderConfirm,
                },{
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay,
                },{
                    path:'alipay',
                    name:'alipay',
                    component:Alipay,
                }
            ]
        }
    ]
})
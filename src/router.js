import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '*', //如果使用者在網址上輸入其他文字的話 會導向到login頁面
      redirect: '/'
    },
    {
      path: '/',
      name: '首頁',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/Showproduct.vue'),
        },
        {
          path: '/Detail',
          name: 'Detail',
          component: () => import('./views/Detail.vue'),
        },

        {
          path: '/singleproductdetail/:productid', //到達這產品的ID位址 要使用:後面對應ID
          name: 'singleproductdetail',
          component: () => import('./components/singleproductdetail.vue'),

        },
        {
          path: '/checkorder',
          name: 'setorder',
          component: () => import('./views/checkorder.vue'),
        },

        {
          path: '/setordercheck/:orderId',
          name: 'setorder',
          component: () => import('./views/setordercheck.vue'),
        },
        {
          path: '/orders',
          name: 'orders',
          component: () => import('./views/orders.vue'),
        },
        {
          path: '/pay/:orderId',
          name: 'pay',
          component: () => import('./views/pay.vue'),
        }
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import('./components/Login.vue'),
    },
    {
      path: '/admin',
      name: 'admin-admin',
      component: () => import('./views/Dashboard.vue'),//meta: { requiresAuth: true }, //是否開啟此元件頁面的驗證
      children: [
        {
          path: 'products',
          name: 'products',
          component: () => import('./components/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('./views/allorder'),
          meta: { requiresAuth: true },
        },
        {
          path: '/coupon',
          name: 'coupon',
          component: () => import('./views/coupon.vue'),
        }
      ]
    },






    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),//meta: { requiresAuth: true }, //是否開啟此元件頁面的驗證
      children: [
        {
          path: '/customer_order',
          name: 'CustomerOrder',
          component: () => import('./components/CustomerOrder'),
        },
        {
          path: '/customer_checkout/:orderId', //到達這產品的ID位址 要使用:後面對應ID
          name: 'CustomerCheckout',
          component: () => import('./components/customerCheckout'),
        }
      ]
    },
  ]
})

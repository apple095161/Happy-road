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
      component: () => import('./views/Showproduct.vue'),
      children: [
        {
          path: '/',
          name: 'index-cart',
          component: () => import('./views/cartslogo.vue'),

        }]
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: () => import('./views/Detail.vue'),
      children: [{
        path: '/Detail',
        name: 'Detail-cart',
        component: () => import('./views/cart.vue'),

      }]
    },

    {
      path: '/singleproductdetail/:productid', //到達這產品的ID位址 要使用:後面對應ID
      name: 'singleproductdetail',
      component: () => import('./components/singleproductdetail.vue'),

    },
    {
      path: '/carts',
      name: 'carts',
      component: () => import('./views/carts.vue'),
    },

    {
      path: '/Hot',
      name: 'Hot',
      component: () => import('./components/Hot.vue'),

    },


    {
      path: '/login',
      name: 'Login',
      component: () => import('./components/Login.vue'),
      children: [{
        path: '/login',
        name: 'login-cart',
        component: () => import('./views/cartslogo.vue'),
      }]
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
      path: '/carts',
      name: 'carts',
      component: () => import('./views/carts.vue'),
      children: [
        {
          path: '/checkorder',
          name: 'setorder',
          component: () => import('./views/checkorder.vue'),
        },
        {
          path: '/setorder',
          name: 'setorder',
          component: () => import('./views/setorder.vue'),
        },
        {
          path: '/setordercheck/:orderId',
          name: 'setorder',
          component: () => import('./views/setordercheck.vue'),
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

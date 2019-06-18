import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay'; //使用載入時 讀取的效果 轉圈圈
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

import currencyFilter from './filter/filter';
import time from './filter/transformdate'
import normaltime from './filter/filterstime';
import App from './App.vue';
import router from './router';


import zhTWValidate from 'vee-validate/dist/locale/zh_TW'; //VeeValidate設定中文回饋設定用法
import VeeValidate, { Validator } from 'vee-validate';
Validator.localize('zh_TW', zhTWValidate);

Vue.use(VeeValidate, { locale: 'zh_TW', });
axios.defaults.withCredentials = true; //跨站登入api使用此方法
Vue.config.productionTip = false
Vue.component('Loading', Loading);
Vue.use(VueAxios, axios);
Vue.filter('currency', currencyFilter);
Vue.filter('time', time);
Vue.filter('normaltime',normaltime);
import './bus';


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

/* router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    console.log(api);
    axios.post(api).then(response => {
      console.log(response.data)
    });
  }
  else {
    next({});
  }
}) */
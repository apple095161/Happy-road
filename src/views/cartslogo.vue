<template>
  <div>
    <div class="container">
      <div class="normal-size d-flex align-items-center">
        <div class="burger-menu" style="display:none;">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <router-link to="/">
          <img src="../assets/happy.png" width="200" height="100">
        </router-link>
        <nav class="ml-4 mr-auto">
          <ul class="d-flex align-items-center hover-border" style="font-size:20px;">
            <li class="mr-3">
              <router-link href="#" to="/Detail">全部商品</router-link>
            </li>
            <li>
              <router-link to="/orders">訂單資訊</router-link>
            </li>
          </ul>
        </nav>
        <div class="login member-area mr-3">
          <router-link to="/login">
            <span data-hover="管理者登入" style="width:90px;">Admin</span>
          </router-link>
        </div>

        <div class="cart">
          <div class="dropdown ml-auto">
            <router-link class="btn btn-sm btn-cart" to="/checkorder">
              <i class="fas fa-cart-arrow-down fa-2x"></i>
              <span class="badge badge-pill badge-danger">{{arraylangth.length}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      isLoading: false,
      arraylangth: []
    };
  },
  props: {
    carts: Object
  },
  methods: {
    getcarts() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.arraylangth = response.data.data.carts;
        console.log("length", vm.arraylangth);
        vm.isLoading = false;
      });
    }
  },

  created() {
    const vm = this;
    this.getcarts();
    //註冊全域事件 當加入購物車 或移除時 同時更新購物車資訊
    vm.$bus.$on("updatecart", () => {
      vm.getcarts();
    });
  }
};
</script>

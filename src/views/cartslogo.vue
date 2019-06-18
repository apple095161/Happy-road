<template>
  <div>
    <div class="header-inner d-flex align-items-center py-4">
      <div class="logo">
        <router-link to="/" class="login">
          <span>Happy Shopping</span>
        </router-link>
      </div>

      <nav class="member-area ml-auto mr-3">
        <ul class="signin">
          <router-link to="/login" class="mr-3">
            <span data-hover="管理者登入" style="width:100px;">Admin</span>
          </router-link>
        </ul>
      </nav>

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

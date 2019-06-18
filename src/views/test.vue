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
          <router-link class="btn btn-sm btn-cart" data-toggle="dropdown" to="/carts">
            <i class="fas fa-cart-arrow-down fa-2x"></i>
            <span class="badge badge-pill badge-danger">{{arraylangth.length}}</span>
          </router-link>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="py-4 px-3">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>商品名稱</th>
                    <th width="50">顏色</th>
                    <th width="50">尺寸</th>
                    <th width="50">數量</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in getcartproduct.carts" :key="item.title">
                    <td class="align-middle">{{item.product.title}}</td>
                    <td class="align-middle">灰</td>
                    <td class="align-middle">{{item.size}}</td>
                    <td class="align-middle">{{item.qty}}</td>
                  </tr>
                </tbody>
              </table>
              <div class="btn-style d-flex d-inline justify-content-end">
                <button class="btn btn-primary">直接結帳</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "fs";

export default {
  data() {
    return {
      cartproduct: {},
      getcartproduct: {},
      arraylangth: [],
      orderId: "",
      order: {
        user: {}
      }
    };
  },
  props: {
    cart: Object
  },
  methods: {
    getcart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.isLoading = false;
        if (response.data.success) {
          vm.getcartproduct = response.data.data;
          vm.arraylangth = response.data.data.carts;
          console.log("length", vm.arraylangth);
          console.log(vm.getcartproduct);
        }
      });
    },
    getorder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.order = response.data.order;
        console.log(vm.order);
        vm.isLoading = false;
      });
    },
    updatecart(item) {
      this.$bus.$emit("update", this.cart);
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getcart();
  }
};
</script>

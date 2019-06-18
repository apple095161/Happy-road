<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <main class="carts">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="h2" v-if="!arraylangth.length">購物車無任何商品</div>
            <div class="col-md-9" v-if="arraylangth.length">
              <div class="step d-flex align-items-center">
                <div class="col-md-4">
                  <div class="box box1 text-center active">確認購物車</div>
                </div>

                <div class="col-md-4">
                  <div class="box box2 text-center">填寫收件人資料</div>
                </div>

                <div class="col-md-4">
                  <div class="box box3 text-center">確認訂單資訊</div>
                </div>
              </div>
              <div class="h2 text-center py-3">你的購物車</div>

              <table class="table">
                <thead>
                  <tr>
                    <th width="100"></th>
                    <th width>品名</th>
                    <th width="70" class="text-left">數量</th>
                    <th width="70" class="text-left">尺寸</th>
                    <th width="150">價格</th>
                    <th width="100"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in getcartproduct.carts" :key="item.title">
                    <td>
                      <img :src="item.product.imageUrl" alt width="100" height="80">
                    </td>
                    <td>{{item.product.title }}</td>
                    <td class="text-left">{{item.qty}}</td>
                    <td class="text-left">{{item.size}}</td>
                    <td class="text-right">{{item.product.price |currency}}</td>
                    <td class="text-right">
                      <button class="btn btn-outline-danger" @click="removeItem(item.id)">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5" class="text-right">總計</td>
                    <td>{{getcartproduct.total |currency}}</td>
                  </tr>
                  <tr>
                    <td colspan="5" class="text-right">折扣價</td>
                    <td>{{getcartproduct.final_total |currency}}</td>
                  </tr>
                </tbody>
              </table>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入優惠碼"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  v-model="coupon_code"
                >
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    @click="addcouponCode"
                  >套用優惠碼</button>
                </div>
              </div>
              <span class="text-danger h4">想要打到骨折，請輸入happy newyear</span>
              <div class="text-right py-5">
                <button
                  class="btn btn-primary"
                  style="width:300px;"
                  @click="userdetail()"
                >購物車確認無誤，填寫資料</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { watch } from "fs";
import "jquery";
export default {
  data() {
    return {
      isLoading: false,
      coupon_code: "",
      cartproduct: {},
      getcartproduct: {},
      arraylangth: [],
      orderId: "",
      order: {
        user: {}
      }
    };
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
    removeItem(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        vm.$bus.$emit("updateCart");
        vm.getcart();
        vm.isLoading = false;
      });
    },
    addcouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then(response => {
        console.log(response);
        vm.getcart();
        vm.isLoading = false;
      });
    },
    userdetail() {
      const vm = this;
      vm.$router.push("/setorder");
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getcart();
  },

};
</script>

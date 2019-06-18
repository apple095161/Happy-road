<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <main class="carts">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-9">
              <div class="step d-flex align-items-center">
                <div class="col-md-4">
                  <div class="box box1 text-center active">確認購物車</div>
                </div>

                <div class="col-md-4">
                  <div class="box box2 text-center active">填寫收件人資料</div>
                </div>

                <div class="col-md-4">
                  <div class="box box3 text-center">確認訂單資訊</div>
                </div>
              </div>
              <div class="h2 text-center py-3">收件人資料</div>
              <form action>
                <div class="row mb-2">
                  <div class="col">
                    <label for="username" class="mb-2">收件人姓名</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="username"
                      placeholder="請填寫收件人姓名"
                      v-model="form.user.name"
                      v-validate="'required'"
                      required
                      :class="{'is-invalid':errors.has('name')}"
                    >
                    <span class="text-danger" v-if="errors.has('name')">請輸入收件人姓名</span>
                  </div>
                  <div class="col">
                    <label for="usertel" class="mb-2">收件人電話</label>
                    <input
                      type="text"
                      name="tel"
                      class="form-control"
                      id="usertel"
                      placeholder="請填寫收件人電話"
                      v-model="form.user.tel"
                      v-validate="'required'"
                      required
                      :class="{'is-invalid':errors.has('tel')}"
                    >
                    <span class="text-danger" v-if="errors.has('tel')">請輸入收件人電話</span>
                  </div>
                </div>
                <div class="form-group">
                  <label for="useraddress" class="mb-2">收件人地址</label>
                  <input
                    type="text"
                    name="address"
                    class="form-control"
                    id="useraddress"
                    placeholder="請填寫收件人地址"
                    v-model="form.user.address"
                    v-validate="'required'"
                    required
                    :class="{'is-invalid':errors.has('address')}"
                  >
                  <span class="text-danger" v-if="errors.has('address')">請輸入收件人地址</span>
                </div>
                <div class="form-group">
                  <label for="useremail" class="mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="useremail"
                    placeholder="請填寫Email"
                    v-model="form.user.email"
                    v-validate="'required|email'"
                    required
                    :class="{'is-invalid':errors.has('email')}"
                  >
                  <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
                </div>
                <div class="form-group">
                  <label for="usermessage" class="mb-2">留言</label>
                  <textarea class="form-control" id="usermessage" rows="5" v-model="form.message"></textarea>
                </div>

                <div class="text-right py-5">
                  <button
                    class="btn btn-primary"
                    style="width:200px;"
                    @click.prevent="createOrder"
                  >填寫完成，付款去</button>
                </div>
              </form>
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
      cartproduct: {},
      getcartproduct: {},
      arraylangth: [],
      order: {
      
      },
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        products:{

        },
        message: []
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
          console.log('getorder',vm.getcartproduct);
        }
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/order`;
      const order = vm.form;
      //vm.isLoading = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$http.post(api, { data: order }).then(response => {
            console.log("訂單已建立", response);
            if (response.data.success) {
              vm.$router.push(`/setordercheck/${response.data.orderId}`);
            }
            vm.isLoading = false;
          });
        } else {
          console.log("欄位不完整");
        }
      });
    }
  },
  created() {
    this.getcart();
  }
};
</script>

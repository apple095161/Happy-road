<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="header sticky-top container">
      <cartslogo :carts="getcartproduct"></cartslogo>
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-3 d-flex flex-column detail-side">
            <ul class="nav flex-column event-spectial mb-3">
              <li class="nav-item">
                <a class="nav-link active" href="#">本周新品</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">工作室特別企劃</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">自我風格系列</a>
              </li>
            </ul>

            <ul class="nav flex-column mt-3 event-discount">
              <li class="nav-item">
                <a class="nav-link active" href="#">限時折扣</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">夏日新品．限時單件折100</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">無縫BRAT．限時2件680元</a>
              </li>
            </ul>

            <ul class="nav flex-column mt-3 normal">
              <li class="nav-item text-danger">
                <span class="nav-link">優惠組合</span>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">初夏精選，一件799元</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">初夏精選，一件599元</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">初夏精選，任二件799元</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
            </ul>
          </div>

          <div class="col-md-9 mt-2" style="position:relative">
            <div class="alert alert-primary alert-dismissible fade" role="alert">
              <div class="text-center" style="background-color">提示訊息!</div>
              <br>
              <div class="text-center" style="background-color:while">
                <span>你尚未選擇尺寸</span>
                <a href="#" @click.prevent class="close-alert">
                  <i class="fas fa-window-close"></i>
                </a>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <a
                  class="col-md-6"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  href="#"
                  v-for="(item,index) in product"
                  :key="index"
                  style="height: 450px; width:100%; background-size: cover; background-position: center"
                  :style="{backgroundImage:`url(${item.imageUrl})`}"
                  v-if="item.title"
                  @click.prevent="openmodal(item)"
                ></a>
                <div class="col-md-6" v-for="item in product" :key="item.id" v-if="item.title">
                  <div class="row product-title">
                    <div class="col-md-8 product-title-area mr-auto">
                      <div class="mb-2 text-success" style="font-size:25px;">
                        {{item.title}}
                        <span v-if="current">- {{current}}</span>
                      </div>
                      <div class="mt-2">商品編號:{{item.id}}</div>
                    </div>

                    <div class="col-md-4 text-right product-price-area">
                      <del class="h5 font-weight-bold">{{item.price}}</del>
                      <div class="text-center text-danger font-weight-bold mr-5">NT$</div>
                      <div class="h2 font-weight-bold text-danger text-right">{{item.price}}</div>
                    </div>
                  </div>
                  <div class="product-line mt-2"></div>
                  <div class="product-size-area mt-3 d-flex justify-content-around">
                    <button class="btn btn-outline-success" @click="size = 'S' ">S</button>
                    <button class="btn btn-outline-success" @click="size = 'M' ">M</button>
                    <button class="btn btn-outline-success" @click="size = 'L' ">L</button>
                    <button class="btn btn-outline-success" @click="size = 'XL' ">XL</button>
                    <button class="btn btn-outline-success" @click="size = 'XXL' ">XXL</button>
                  </div>
                  <div class="product-line my-4"></div>
                  <div class="addcart">
                    <label class="mr-3">數量</label>

                    <a class @click="counter -= 1">
                      <i class="fas fa-minus"></i>
                    </a>
                    <input type="text" v-model="counter">
                    <a class @click="counter += 1">
                      <i class="fas fa-plus"></i>
                    </a>

                    <button
                      class="btn btn-success ml-3"
                      @click="addtocart(item.id,item.counter)"
                    >加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="alert">
      <div class="alert-title text-center mb-3">提示訊息</div>
      <div class="alert-content text-center">你尚未選擇尺寸!!</div>
      <a href="#" @click.prevent class="close-alert">
        <i class="fas fa-window-close"></i>
      </a>
    </div>-->

    <!-- modal -->

    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" style="width:800px">
        <div class="modal-content">
          <img :src="modalData.imageUrl" alt width="100%" height="800">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import cartslogo from "../views/cartslogo";

$(document).ready(() => {
  $(".close-alert").click(() => {
    $(".alert").removeClass("show");
  });
});

export default {
  data() {
    return {
      modalData: {},
      cartproduct: {},
      isLoading: false,
      counter: 1,
      productid: "",
      product: {},
      current: "",
      size: "",
      getcartproduct: {},
      status: {
        loadItem: {}
      }
    };
  },
  components: {
    cartslogo
  },
  methods: {
    getorder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/product/${vm.productid}`;

      this.$http.get(api).then(response => {
        vm.product = response.data;
        //console.log(response);
      });
    },
    addtocart(id, qty = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart`;
      const vm = this;
      console.log(api);
      const cart = {
        product_id: id,
        qty: vm.counter,
        size: vm.size,
        product: vm.getcartproduct.product

        //傳送資料到購物車時 傳產品ID 及數量 就好 不然使用者可以更改價錢
      };
      if (vm.size === "") {
        $(".alert").addClass("show");
      } else {
        vm.isLoading = true;
        this.$http.post(api, { data: cart }).then(response => {
          console.log(response);
          vm.status.loadItem = "";
          this.cartproduct = Object.assign({}, this.product);
          vm.isLoading = false;
          vm.$bus.$emit("updateCart");
        });
      }
    },
    getcart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.getcartproduct = response.data.data;
        console.log(vm.getcartproduct);
        vm.isLoading = false;
        //vm.hideTable = response.data.data.total;
      });
    },
    openmodal(item) {
      const vm = this;
      $("#myModal").modal("show");
      vm.modalData = item;
      //console.log(item);
    }
    /* getMyEvent() {
      this.$refs.cart.emitEvent(this.getcartproduct);
      //呼叫子元件的方法，child是上邊ref起的名字，emitEvent是子元件的方法。
    } */
  },
  watch: {
    counter(value) {
      if (value < 1) {
        this.counter = 1; //單獨監控counter的值 如果小於1的話修改為1
      }
    }
  },
  created() {
    this.productid = this.$route.params.productid;

    this.getorder();
  }
};
</script>
<style>
</style>

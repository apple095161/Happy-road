<template>
  <div>
    <loading :active.sync="isLoading"></loading>
   <div class="header sticky-top container">
    <cartslogo ></cartslogo>

      <div class="wrapper my-2">
        <ul class="nav justify-content-center">
          <li class="nav-item mr-3">
            <router-link class="nav-link" to="/Detail">全部商品</router-link>
          </li>
          <li class="nav-item mr-3">
            <router-link class="nav-link" to="/Hot">暢銷商品</router-link>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="#">衣物區</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">限時特價</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-3 d-flex flex-column detail-side">
            <ul class="nav flex-column event-spectial mb-3">
              <li class="nav-item">
                <a class="nav-link active" href="#" style="display:block">本周新品</a>
                
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
          <div class="col-md-9 mt-2">
            <div class="row">
              <div class="col-md-4 mb-4 col-sm-6" v-for="item in products" :key="item.id">
                <div class="card border-0 shadow-sm">
                  <a href="#" @click="getSinglePorduct(item.id)">
                    <div
                      style="height: 250px; background-size: cover; background-position: center"
                      :style="{backgroundImage:`url(${item.imageUrl})`}"
                    >
                      <!-- backgroundImage -->
                    </div>
                  </a>

                  <div class="card-body">
                    <span class="badge badge-danger float-right ml-2"></span>
                    <h5 class="card-title">{{item.title}}</h5>
                    <div class="mt-3">
                      <del class="h6 mr-3">原價 {{item.origin_price}} 元</del>
                      <strong class="item-price">NT.{{item.price}}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import cartslogo from '../views/cartslogo'
export default {
  data() {
    return {
      productid: "",
      products: [],
      size: "",
      product: {},
      status: {
        loadItem: ""
      },
      isLoading: false
    };
  },
  components:{
    cartslogo
  },
  methods: {
    getProducts() {
      //ES6用法 如果有傳參數近來 使用傳進來的參數 如果沒有 使用預設值1
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/products/all`;
      const vm = this;
      vm.isLoading = true;
      console.log(api);
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
        //vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    getSinglePorduct(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/product/${id}`;
      const vm = this;
      console.log(api);
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.product = response.data.product;
        vm.productid = response.data.product.id;
        this.$router.push(`/singleproductdetail/${id}`);
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

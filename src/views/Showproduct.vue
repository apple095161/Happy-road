<template>
  <div>
    <div class="container header sticky-top">
      <div class="header-inner d-flex align-items-center"></div>
      <router-view ></router-view>
      <div class="wrapper my-2">
        <ul class="nav justify-content-center">
          <li class="nav-item mr-3 hover-border">
            <router-link class="nav-link" to="/Detail">全部商品</router-link>
          </li>
          <li class="nav-item mr-3 hover-border">
            <router-link class="nav-link" to="/Hot">暢銷商品</router-link>
          </li>
          <li class="nav-item mr-3 hover-border">
            <a class="nav-link" href="#">衣物區</a>
          </li>
          <li class="nav-item hover-border">
            <a class="nav-link" href="#">限時特價</a>
          </li>
        </ul>
      </div>
    </div>

    <main class="mb-4">
      <div class="container">
        <Carousel></Carousel>
        <section class="event mt-2">
          <div class="row">
            <div class="col-md-3 col-xs-6 event-item">
              <a href="#">
                <img
                  src="https://www.eyescream.com.tw/free_layout/20190522/180522_news_slice_1.jpg"
                  alt
                  height="100%"
                  width="100%"
                >
              </a>
            </div>
            <div class="col-md-3 col-xs-6 event-item">
              <a href="#">
                <img
                  src="https://www.eyescream.com.tw/free_layout/20190522/180522_news_slice_3.jpg"
                  alt
                  height="100%"
                  width="100%"
                >
              </a>
            </div>
            <div class="col-md-3 col-xs-6 event-item">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt
                  height="100%"
                  width="100%"
                >
              </a>
            </div>
            <div class="col-md-3 col-xs-6 event-item">
              <a href="#">
                <img
                  src="https://s2.lativ.com.tw/i/Waterfall/20190201-1221/NEWPRICE_560_190328_TW_3.jpg"
                  alt
                  height="100%"
                  width="100%"
                >
              </a>
            </div>
          </div>
        </section>

        <div class="show-img mt-3">
          <div class="row">
            <div class="col-md-4">
              <a href="#">
                <img
                  src="https://s2.lativ.com.tw/i/Waterfall/20190201-1221/41257_41262_DRY_560_190517_TW03_1.jpg"
                  alt
                  width="100%"
                >
              </a>
            </div>
            <div class="col-md-4">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1532795986-dbef1643a596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                  alt
                  width="100%"
                  height="100%"
                >
              </a>
            </div>
            <div class="col-md-4">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80"
                  alt
                  width="100%"
                >
              </a>
            </div>
          </div>
        </div>

        <div class="sale-image mt-3">
          <div>
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt
                width="100%"
                class="mb-2"
              >
            </a>
            <a href="#">
              <img
                src="http://www.yoyi.ws/wp-content/uploads/2016/07/20160701%E9%9F%93%E7%B3%BB%E9%A4%A8%E5%A5%B3%E8%A3%9D%E6%8B%8D%E6%94%9D03.jpg"
                alt
                width="100%"
                class="mb-2"
              >
            </a>
            <a href="#">
              <img
                src="https://imgs.weekendhk.com/wp-content/uploads/2017/10/112_138969515059d4b30697322.jpg"
                alt
                width="100%"
              >
            </a>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="footer">
        <div class="mr-3">Copright 2019</div>
        <div class="mr-3">Vue元件的練習</div>
        <div>無任何商業用途</div>
      </div>
    </footer>
  </div>
</template>



<script>
import $ from "jquery";
import Carousel from "./Carousel";

export default {
  components: {
    Carousel
  },
  data() {
    return {
      products: [],
      select: ""
    };
  },
  methods: {
    getProducts() {
      //ES6用法 如果有傳參數近來 使用傳進來的參數 如果沒有 使用預設值1
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/admin/products/all`;
      const vm = this;
      vm.isLoading = true;
      console.log(api);
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
        //vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<template>
  <div>
    <div class="header sticky-top container">
      <div class="header-inner d-flex justify-content-between align-items-center">
        <cartslogo></cartslogo>
      </div>
      <wrapper></wrapper>
    </div>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>



<script>
import $ from "jquery";
import header from "./cartslogo";
import wrapper from "./wrapper";
import Main from "./main";
import Footer from "./Footer";

export default {
  data() {
    return {
      products: [],
      select: ""
    };
  },
  components: {
    cartslogo,
    wrapper,
    Main,
    Footer
  },
  methods: {
    getProducts() {
      //ES6用法 如果有傳參數近來 使用傳進來的參數 如果沒有 使用預設值1
      const api = `${process.env.APIPATH}/api/${
        process.env.COUSTOMPATH
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

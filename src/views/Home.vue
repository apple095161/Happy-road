<template>
  <div>
    <div class="sticky-top">
      <headers></headers>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>



<script>
import $ from "jquery";
import headers from "./cartslogo";
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
    headers,
    wrapper,
    Main,
    Footer
  }
};
</script>

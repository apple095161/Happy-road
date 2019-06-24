<template>
  <div>
    <div class="header sticky-top">
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
import Footer from "./Footer";

export default {
  data() {
    return {};
  },
  components: {
    headers,
    Footer
  }
};
</script>

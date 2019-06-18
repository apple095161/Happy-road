<template>
  <div>
    <div class="container">
      <cartslogo></cartslogo>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "jquery";
import cartslogo from "./cartslogo";
export default {
  data() {
    return {};
  },
  components: {
    cartslogo
  }
};
</script>

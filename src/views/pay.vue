<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      order: {},
      orderId: ""
    };
  },
  methods: {
    getorder(item) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/order/${vm.orderId}`;

      vm.isLoading = true;
      console.log(api);
      this.$http.get(api).then(response => {
        vm.order = response.data;
        console.log(vm.order);

        vm.isLoading = false;
      });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId; //讀取頁面跳轉到的orderid 跟router路徑一致  先取得orderId再去取得訂單資料
    this.getorder();
  }
};
</script>

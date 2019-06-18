<template>
  <div class="hello">
    <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      console.log(api);
      this.$http.post(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/login");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 此scoped用法是把下列的樣式綁定在此元件上 只有此元件內會使用此樣式 App.vue裡面的連結不會被影響 */
</style>

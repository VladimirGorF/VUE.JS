<template>
  <div id="app">
    <MyProductDetails/>
  </div>
</template>

<script>
import MyProductDetails from './components/My-ProductDetails.vue';

export default {
  name: 'App',
  components: {
    MyProductDetails,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

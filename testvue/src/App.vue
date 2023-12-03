<template>
  <div id="app">
    <MyListproducts />
  </div>
</template>

<script>
import MyListproducts from './components/MyListproducts.vue';

export default {
  name: 'App',
  components: {
    MyListproducts
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

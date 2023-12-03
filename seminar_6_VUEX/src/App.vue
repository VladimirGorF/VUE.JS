<template>
  <div id="app">
    <!-- <MyListproducts /> -->
    <!-- <MyCounter /> -->
    <MyCart />
    <!-- <AddNewItem  /> -->
  </div>
</template>

<script>
// import MyListproducts from './components/MyListproducts.vue';
// import MyCounter from './components/MyCounter.vue';
// import AddNewItem from './components/AddNewItem.vue';
import MyCart from './components/MyCart.vue';

export default {
  name: 'App',
  components: {
    // MyListproducts,
    // MyCounter,
    MyCart,
    // AddNewItem
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

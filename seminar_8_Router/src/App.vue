<template>
  <div id="app">
    <header >
      <nav class="linkBox">
        <router-link class="link" to="/main">main</router-link>
        <router-link class="link" to="/products">product</router-link>
        <router-link class="link" to="/products/1">product/page1</router-link>
        <router-link class="link" to="/about">about</router-link>
        <router-link class="link" to="/about-content">about-content</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  components: {

  },
  created(){
    this.$router.push({name: 'main'}) // пушим в роутре главную страницу при создании
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
.linkBox {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.link {
  font-size: 60px;
  color: blueviolet;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <NewComponent text="текст какой-то"/>
    <GaleryComp/>
  </div>
</template>

<script>
import NewComponent from './components/NewComponent.vue'
import GaleryComp from './components/GaleryComp.vue'

export default {
  name: 'App',
  components: {
    NewComponent,
    GaleryComp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

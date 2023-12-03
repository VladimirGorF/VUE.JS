<!-- Создайте компонент "Список пользователей" (UserList), который
будет отображать список пользователей из переданного массива.
Каждый пользователь должен быть представлен в виде отдельного
компонента "Пользователь" (User), принимающего пропсы с данными
о пользователе (например, имя, фамилия и электронная почта). -->
<template>
  <div id="app">
    <!-- <MyListUsers /> -->
    <MyListproducts />
  </div>
</template>

<script>
// import MyListUsers from "./components/My-ListUsers.vue";
import MyListproducts from "./components/MyListproducts.vue";

export default {
  name: "App",
  components: {
    // MyListUsers,
    MyListproducts,
},
};
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

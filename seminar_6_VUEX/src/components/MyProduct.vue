<template>
  <div>
    <div>
      <!-- Данные сюда попадают через props ниже -->
      <h1>{{ product.name }}</h1>
      <h1>{{ product.age }}</h1>
    </div>
    <div><button @click="savingItem">Добавить новый объект</button></div>
  </div>
</template>

<script>
export default {
  name: "MyProduct",
  props: ["product"], // этот объект будем получать из MyProductList

  data() {
    return {
      name: "Mishutka",
      age: 20,
    };
  },

  mounted() {},

  methods: {
    savingItem() {
      // из наших данных в Дата создаем объект для передачи в другой компонент
      const item = {
        name: this.name,
        age: this.age,
      };
      this.$emit("savingItem", item); // создаем событие  с названием и передаем в него наш объект item. Потом подпишем другой компонент на это событие создав в его методах такой метод savingItem
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <MyProduct
      v-for="product in listProducts"
      :key="product.id"
      :product="product" @savingItem="savingItem"
    />
    <!-- Надо забиндить :product тогда он улетит в пропс нашего MyProduct -->
    <!-- Надо вызвать новую подписку @savingItem из другого компонента -->
  </div>
</template>

<script>
import MyProduct from "./MyProduct.vue";

export default {
  name: "MyListproducts",
  data() {
    return {
      listProducts: [], // создаем пустой список, в который данные пойдут через метод fetch()
    };
  },
  created() {
    // в момент создания странички передаем список объектов в наш listProducts
    this.listProducts = this.fetchData();
  },
  mounted() {},

  methods: {
    fetchData() {
      return [
        {
          name: "Volodya",
          age: 41,
        },
        {
          name: "Petya",
          age: 42,
        },
        {
          name: "Vasya",
          age: 43,
        },
      ];
    },
    // создаем метод-событие из нашего элемента MyProduct и передаем в него аргумент-наш объект
    savingItem(item) {
      this.listProducts.push(item); // отправляем наш объект в список объектов
    },
  },
  components: {
    MyProduct,
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <div v-for="item in cartItems" :key="item.id">
      <h1>{{ item.name }}</h1>
      <p>{{ item.price }}</p>
    </div>
    <AddNewItem @addToCart="addToCart" />
    <h2>Количество товаров: {{ countProducts }}</h2>
    <h2>Общая сумма: {{ totalPrice }}</h2>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions} from "vuex";
import AddNewItem from "./AddNewItem.vue";
export default {
  name: "MyCart",
  data() {
    return {};
  },
  mounted() {
    this.fetchData();
  },


  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(["ADD_TO_CART"]),
    addToCart(product) {
      this.ADD_TO_CART(product);
    },
  },
  computed: {
    ...mapGetters(["cartItems", "countProducts", "totalPrice"]),
  },
  components: { AddNewItem },
};
</script>

<style lang="scss" scoped></style>

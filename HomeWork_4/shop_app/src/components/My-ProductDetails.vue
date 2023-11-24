<!-- Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock". -->

<template>
  <div>
    <H1>Магазин выпечки</H1>
    <div class="box">
      <div class="product" v-for="product in productList" :key="product.id">
        <h1>Товар</h1>
        <h2>{{ product.name }}</h2>
        <h3 v-if="product.available">Available</h3>
        <h3 v-else>Out of stock</h3>
        <h3>{{ formattedPrice }}:{{product.price }}</h3>
        <button @click="currency === '$' ? currency = 'RUR' : currency = '$' ">Переключатель валюты $/RUR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProductDetails",

  data() {
    return {
      currency: '$',
      productList: [
        {
          name: "Cake",
          price: 12,
          available: true,
          formattedPrice: "",
        },
        {
          name: "Bread",
          price: 25,
          available: false,
          formattedPrice: "",
        },
        {
          name: "Milk",
          price: 35,
          available: true,
          formattedPrice: "",
        },
      ],
    };
  },
  methods: {
    name() {},
  },
  computed: {
    formattedPrice() {
      return this.currency;
    },
  },
};
</script>

<style lang="css" scoped>
h1 {
  color: brown;
}
.box {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.product {
  background-color: aquamarine;
  width: 200px;
}
</style>

// Вам необходимо создать компонент "Товар", который будет отображать информацию о товаре, включая название, описание и цену. Кроме того, вы должны реализовать фильтрацию товаров по цене (по возрастанию и убыванию)
// 1. Создайте компонент "Товар", который вы создавали в интернет- магазине BRAND
// 2. Создайте список товаров, используя компонент "Товар". Данные о товарах могут быть представлены в виде массива объектов.
// 3. Добавьте две кнопки сортировки (по убыванию, по возрастанию)
// 4. При нажатии на кнопки, обновите список отображаемых товаров,
// отфильтрованных по цене.

Vue.component("my-product", {
  data() {
    return {
      sortMethod: "",
      products: [
        {
          id: 0,
          name: "Bread",
          price: 8,
        },
        {
          id: 1,
          name: "Bread",
          price: 9,
        },
        {
          id: 2,
          name: "Bread",
          price: 2,
        },
        {
          id: 3,
          name: "Bread",
          price: 7,
        },
        {
          id: 4,
          name: "Bread",
          price: 13,
        },
        {
          id: 5,
          name: "Bread",
          price: 12,
        },
        {
          id: 6,
          name: "Bread",
          price: 11,
        },
      ],
    };
  },

  computed: {
    sortedProducts() {
      if (this.sortMethod === "up") {
        return [...this.products].sort(function (a, b) {
          return a.price - b.price;
        });
      } else if (this.sortMethod === "down") {
        return [...this.products].sort(function (a, b) {
          return b.price - a.price;
        });
      } else {
        return this.products;
      }
    },
  },

  template: `
  <div class="divProductBox">
  <div class="productBox">
    <div class="product" v-for="item in sortedProducts" :key="item.id">
      ID:{{item.id}}: {{item.name}}. Price: {{item.price}}
    </div>
  </div>
  <div class="sortBox">
    <button class="sortButton" @click="sortMethod = 'up'">
      Сортировать по возрастанию
    </button>
    <button class="sortButton" @click="sortMethod = 'down'">
      Сортировать по убыванию
    </button>
    <button class="sortButton" @click="sortMethod = 'default'">
      Сортировать по умолчанию
    </button>
  </div>
</div>
  `,
});

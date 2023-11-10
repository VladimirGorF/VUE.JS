Vue.component("my-product", {
  data() {
    return {
        products: [
          {
            id: 0,
            name: "Bread",
            price: 8,
          },
          {
            id: 0,
            name: "Bread",
            price: 9,
          },
          {
            id: 0,
            name: "Bread",
            price: 2,
          },
          {
            id: 0,
            name: "Bread",
            price: 7,
          },
          {
            id: 0,
            name: "Bread",
            price: 13,
          },
          {
            id: 0,
            name: "Bread",
            price: 12,
          },
          {
            id: 0,
            name: "Bread",
            price: 11,
          },
        ],
    };
  },
  methods: {
    sortUp() {
      this.products.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    sortDown() {
      this.products.sort(function (a, b) {
        return b.price - a.price;
      });
    },
  },

  template: `
  <div class="divProductBox">
  <div class="productBox">
    <div class="product" v-for="item in products" :key="item.id">
      ID:{{item.id}}: {{item.name}}. Price: {{item.price}}
    </div>
  </div>
  <div class="sortBox">
    <button class="sortButton" @click="sortUp">
      Сортировать по возрастанию
    </button>
    <button class="sortButton" @click="sortDown">
      Сортировать по убыванию
    </button>
  </div>
</div>
  `,
});

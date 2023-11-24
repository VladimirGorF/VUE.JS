// Создайте компонент списка, который отображает массив элементов. Добавьте текстовое поле для фильтрации списка. При вводе текста в поле, список должен автоматически обновляться, отображая только элементы, содержащие введенный текст.

Vue.component("my-component", {
  data() {
    return {
      filterExample: "",
      products: [
        { name: "Кружок1" },
        { name: "Пирожок12" },
        { name: "Тарелка123" },
      ],
      showProducts: [
        { name: "Кружок1" },
        { name: "Пирожок12" },
        { name: "Тарелка123" },
      ],
    };
  },
  methods: {
    filter() {
      if (!this.filterExample) {
        // если запрос пустой, возвращем полную копию товаров
        this.showProducts = [...this.products];
        return;
      }

      this.showProducts = []; // обнуляем массив показа

      this.products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(this.filterExample) >= 0) {
          this.showProducts.push(product);
        }
      });
      
    },
  },

  template: `
  <div>

    <input
    v-model="filterExample"
    placeholder="фильтр"
    v-on:input="filter"
  />
  <p>filter: {{filterExample}}</p>
  <ul>
    <li v-for="product in showProducts" :key="product.id">
      {{product.name}}
    </li>
  </ul>
</div>
  `,
});

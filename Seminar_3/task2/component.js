Vue.component("my-component", {
  props: {},

  data() {
    return {
      newElement: {
        name: "Новый элемент какойто",
      },
      elements: [
      ],
    };
  },
  methods: {
    addElement() {
      this.elements.push(structuredClone(this.newElement));
    },
    deleteElement(element) {
      this.elements.splice(this.elements.indexOf(element), 1);
    },
  },

  template: `
  <div>
            <input v-model="newElement.name" value="Добавить элемент" />
            <button @click="addElement">Добавить</button>

            <ul>
            <li v-for="element in elements" :key="element.id">
                {{element.name}}
                <button @click="deleteElement(element)">Удалить</button>
            </li>
            </ul>
    </div>
  `,
});

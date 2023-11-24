// Создайте компонент списка дел, в котором можно добавлять и удалять элементы. Каждый элемент списка должен иметь кнопку удаления, при нажатии на которую элемент списка будет удаляться.
Vue.component("my-component", {
  props: {},

  data() {
    return {
      // newElement: {
      //   name: "Новый элемент какой-то",
      // },
      // elements: [
      //   { name: "props engage" },
      //   { name: "start learning" },
      //   { name: "getting a bear" },
      // ],
      newElement: "Значение по умолчанию",

      elements: ["props engage", "start learning", "getting a bear"],
    };
  },
  methods: {
    addElement() {
      this.elements.push(structuredClone(this.newElement));
      this.newElement = "";
    },
    deleteElement(element) {
      this.elements.splice(this.elements.indexOf(element), 1);
    },
  },

  template: `
  <div>
            <input v-model="newElement" placeholder="Добавь элемент" />
            <button @click="addElement">Добавить</button>

            <ul>
            <li v-for="element in elements" :key="element.id">
                {{element}}
                <button @click="deleteElement(element)">Удалить</button>
            </li>
            </ul>
    </div>
  `,
});

// создать компоенент счетчик с двумя кнопками увеличить + и уменьшить
Vue.component("my-counter", {
  props: {},

  data() {
    return {
      count: 0,
    };
  },
  methods: {
  },

  template: `
  <div>
        <p>{{count}}</p>
        <button @click="count++">+</button>
        <button @click="count--">-</button>
      </div>
  `,
});

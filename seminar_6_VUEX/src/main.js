import Vuex from "vuex";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: new Vuex.Store(store),
}).$mount("#app");

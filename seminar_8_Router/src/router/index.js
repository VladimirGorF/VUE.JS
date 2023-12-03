import Vue from "vue";
import Router from "vue-router";

import PageAbout from "@/components/pages/PageAbout.vue";
import PageMain from "@/components/pages/PageMain.vue";
import PageProducts from "@/components/pages/PageProducts.vue";
import PageNotFound from "@/components/pages/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history", //  адреса будет показывать без хеша #  у мод три режима
  routes: [   // здесь прописываем пути роутера
    {
      path: "/main",
      name: "main",
      component: PageMain,
    },
    // {
    //   path: "/products",
    //   name: "Products",
    //   component: PageProducts,
    // },
    {
      path: "/products/:page?",   // динамические пути для страниц внутри /products
      name: "Products",
      component: PageProducts,
    },
    {
      path: "/about*",     // для всех путей начинающихся с about
      name: "About",
      component: PageAbout,
    },
    {
      path: "/404",
      name: "PageNotFound",
      component: PageNotFound,
    },
    {
      path: "*",
      redirect: "/404",  // перенаправляется на /404
    },

  ],
});

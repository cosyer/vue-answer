import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/home")
    },
    {
      path: "/question",
      name: "question",
      component: () => import("../pages/question")
    },
    {
      path: "/score",
      name: "score",
      component: () => import("../pages/score")
    }
  ]
});

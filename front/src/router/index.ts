import { createRouter, createWebHistory } from "vue-router";
import Login from '../pages/Login.vue';
import View from '../pages/ViewPlaceHolder/viewPlaceHolder.vue';

//isAuth need token
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/view",
    name: "view",
    component: View,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: "notFound",
    component: Login,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  if (!localStorage.getItem("_token") && (to.matched.some(record => record.meta.requiresAuth))) {
    next({ name: "login" });
  } else {
    next();
  }
})

export default router;

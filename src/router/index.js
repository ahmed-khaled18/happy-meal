import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetters from "../views/MealsByLetters.vue";
import MealsByIngrediants from "../views/MealsByIngrediants.vue";
import DefaultLayot from "../components/DefaultLayot.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: DefaultLayot,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetters,
      },
      {
        path: "/by-ingrediants/:ingrediants?",
        name: "byIngrediants",
        component: MealsByIngrediants,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

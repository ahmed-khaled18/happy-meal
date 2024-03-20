import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";

const routes = [
  {
    path: "/happy-meal/",
    component: DefaultLayout,
    children: [
      {
        path: "/happy-meal/",
        name: "home",
        component: Home,
      },
      {
        path: "/happy-meal/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/happy-meal/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/happy-meal/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/happy-meal/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/happy-meal/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

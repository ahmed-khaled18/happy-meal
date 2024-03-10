<template>
  <div class="p-8 pb-0">
    <input @change="searchMeals" v-model="keyword" type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 object-cover w-full" />
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias ab nihil nostrum incidunt voluptates porro doloribus quas consectetur
          tempore? Recusandae laboriosam ipsam repellendus ipsa veniam iusto eveniet quo dolores.
        </p>
        <div class="flex items-center justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors"
            >YouTube</a
          >
          <router-link to="/" class="px-3 py-2 rounded border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { computed } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  console.log(keyword.value);
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style scoped></style>

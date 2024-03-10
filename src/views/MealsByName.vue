<template>
  <div class="p-8">
    <input @change="searchMeals" v-model="keyword" type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals" />
  </div>
</template>

<script setup>
import store from "../store";
import axiosClient from "../axiosClient";
const keyword = ref("");
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>

<style scoped></style>

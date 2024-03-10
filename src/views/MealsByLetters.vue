<template>
  <div class="flex justify-center mt-2 gap-2">
    <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter"> {{ letter }}</router-link>
  </div>
</template>

<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>

<style scoped></style>

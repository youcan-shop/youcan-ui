<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Rating } from '~/components';

const movieRating = ref(0);
</script>

<template>
  <div class="container">
    <Rating v-model="movieRating" editable :stars="5" />
    {{ movieRating }}
    <Rating :stars="6" :rating="4" />

    <Rating :stars="6" :rating="10" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>

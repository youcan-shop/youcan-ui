<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Increment } from '~/components';

const quantity = ref(4);
</script>

<template>
  <div class="container">
    <Increment v-model="quantity" :max="100" :step="10" />
  </div>
</template>

<style scoped>
.container {
  width: 400px;
  margin: 30px;
}
</style>

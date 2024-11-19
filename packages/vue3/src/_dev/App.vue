<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import SingleDateInput from '~/components/DateInput/SingleDateInput.vue';

const date = ref();
</script>

<template>
  <div class="container">
    <SingleDateInput v-model="date" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 40px;
}
</style>

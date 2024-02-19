<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { SingleDateInput } from '~/components';

const defaultDate = new Date();

const myDate = ref<Date>(defaultDate);
</script>

<template>
  <div class="container">
    <SingleDateInput v-model="myDate" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50vh;
}
</style>

<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Increment, Input, Loading } from '~/components';

const quantity = ref('0');
const username = ref('');
</script>

<template>
  <div class="container">
    <Increment v-model="quantity" :max="100" />
    <Input v-model="username" placeholder="Please enter your username" />
    <Loading :duration="5000" /> <!-- in milliseconds -->
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 10%;
  gap: 30px;
}
</style>

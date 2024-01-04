<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Input } from '~/components';

const username = ref('');
</script>

<template>
  <div class="container">
    <Input v-model="username" type="password" placeholder="Please enter your username" />
  </div>
</template>

<style scoped>
.container {
  max-width: 300px;
  margin: 0 auto;
}
</style>

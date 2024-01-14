<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { RichText } from '~/components';

const content = ref('');
</script>

<template>
  <div class="container">
    <RichText v-model="content" lang="en" />
  </div>
</template>

<style scoped lang="css">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 5%;
}
</style>

<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { RichText } from '~/components';

const content = ref();
</script>

<template>
  <div class="container">
    <RichText v-model="content" />
    <p>{{ content }}</p>
  </div>
</template>

<style scoped>
.container {
  width: 90%;
  margin: 30px;
}
</style>

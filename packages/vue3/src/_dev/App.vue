<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Input } from '~/components';

const value = ref(400);
</script>

<template>
  <div class="container">
    <div>
      <Input v-model="value" />
    </div>
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
}

.container > div {
  width: 500px;
}
</style>

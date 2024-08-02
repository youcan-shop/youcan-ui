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

.container .row {
  display: flex;
  flex-direction: column;
  gap: 300px;
  width: 80%;
}

.container .row > div {
  flex: 1;
}

.container .row > div span {
  margin: 0;
  color: var(--gray-900);
  font: var(--text-sm-medium);
}
</style>

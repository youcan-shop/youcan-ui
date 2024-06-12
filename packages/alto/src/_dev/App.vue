<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { ColorInput } from '~/components';

const color = ref<string>('FFFFFF');
</script>

<template>
  <div class="container">
    <div class="row">
      <span class="title">Single date :</span>
      <ColorInput :model-value="color" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 400px auto;
  gap: 40px;
  margin-bottom: 200vh;
}

.container .row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.container .row .title {
  color: var(--gray-900);
  font: var(--text-md-medium);
}
</style>

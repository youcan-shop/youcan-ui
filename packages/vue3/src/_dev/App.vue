<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Slider } from '~/components';
const value = ref(100);
</script>

<template>
  <div class="container">
    <div>
      <Slider
        v-model="value"
        suffix=""
        :max="500"
        :min="0"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.container > div {
  width: 450px;
}
</style>

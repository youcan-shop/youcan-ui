<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { PrimaryButton, Toast } from '~/components';

const show = ref(false);
</script>

<template>
  <Toast :show="show" :close-after-duration="3000" position="bottom-right" @close="show = false">
    <template #title>
      Profile Updated
    </template>
    <template #description>
      Your profile information has been successfully updated.
    </template>
  </Toast>

  <div class="container">
    <PrimaryButton @click="show = true;">
      <span>Show Toast</span>
    </PrimaryButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 100vh;
  margin: auto;
}

p {
  margin-bottom: 0;
  color: var(--gray-600);
  font: var(--text-sm-regular);
}
</style>

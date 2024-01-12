<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { PrimaryButton, ToastContainer } from '~/components';
import { showToast } from '~/components/ToastContainer';
import type { ToastOptions } from '~/components/ToastContainer/types';

const handleClick = () => {
  const toast: ToastOptions = { title: 'Taost title' };
  showToast(toast);
};
</script>

<template>
  <ToastContainer />
  <div class="container">
    <PrimaryButton @click="handleClick">
      Show Toast
    </PrimaryButton>
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
</style>

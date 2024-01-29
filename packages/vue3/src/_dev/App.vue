<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { PrimaryButton, ToastContainer } from '~/components';
import { toast } from '~/utils';
import type { ToastOptions } from '~/components/ToastContainer/types';

const toasts: ToastOptions[] = [
  {
    title: 'Info',
    description: 'Click here to learn more about the exciting enhancements we\'ve made.',
    type: 'info',
  },
  {
    title: 'Success',
    description: 'Your profile information has been successfully updated.',
    type: 'success',
  },
  {
    title: 'Warning',
    description: 'Please check your internet connection.',
    type: 'warning',
  },
  {
    title: 'Error',
    description: 'Unable to save data, check again later.',
    type: 'error',
  },
];

const handleClick = () => {
  const item: ToastOptions = toasts[Math.floor(Math.random() * toasts.length)];
  toast.show(item);
};
</script>

<template>
  <ToastContainer :limit="3" position="bottom-right" :duration="100000" />
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

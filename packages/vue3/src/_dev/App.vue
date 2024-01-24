<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { PrimaryButton, ToastContainer, toast } from '~/components';
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
  const toastOptions: ToastOptions = toasts[Math.floor(Math.random() * toasts.length)];
  toast.show(toastOptions);
};
</script>

<template>
  <ToastContainer :limit="3" />
  <div className="container">
    <PrimaryButton @click="handleClick">
      Show Toast
    </PrimaryButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 40px auto;
  row-gap: 20px;
}
</style>

<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { PrimaryButton, ToastContainer } from '~/components';
import { toast } from '~/helpers';
import type { ToastOptions } from '~/types';

const toastOptions: ToastOptions = {
  title: 'Info',
  description: 'Click here to learn more about the exciting enhancements we\'ve made.',
  type: 'info',
};

const handleClick = () => {
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
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>

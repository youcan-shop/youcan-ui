<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Alert } from '~/components';
import type { AlertType } from '~/types';

interface AlertProps {
  title: string
  description: string
  type: AlertType
}
const alerts: AlertProps[] = [
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
</script>

<template>
  <div class="container">
    <Alert v-for="alert in alerts" :key="alert.type" :type="alert.type">
      <template #title>
        {{ alert.title }}
      </template>
      <template #description>
        {{ alert.description }}
      </template>
    </Alert>
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
</style>

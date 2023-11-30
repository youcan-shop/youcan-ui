<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Alert } from '~/components';

const alerts = [
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
  min-width: 90%;
}
</style>

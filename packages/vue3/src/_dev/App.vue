<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Alert } from '~/components';
</script>

<template>
  <div class="container">
    <Alert type="error">
      <template #title>
        Profile Updated
      </template>
      <template #description>
        Your profile information has been successfully updated.
      </template>
    </Alert>
  </div>
</template>

<style scoped>
div {
  margin: 10px;
}
</style>

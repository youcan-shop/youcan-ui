<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import Alert from '~/components/Alert/Alert.vue';
</script>

<template>
  <div>
    <div class="container">
      <h3>Alert component</h3>
      <Alert type="info">
        <template #title>
          hello
        </template>
      </Alert>
    </div>
  </div>
</template>

<style>
h3{
  font: var(--text-lg-regular)
}
.container {
  max-width: 600px;
  margin: auto;
  margin-top: 10%;
}
</style>

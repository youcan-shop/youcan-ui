<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Breadcrumbs } from '~/components';

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Alto', to: '/alto/' },
  { label: 'Breadcrumbs', to: '/alto/breadcrumbs' },
];
</script>

<template>
  <div class="container">
    <Breadcrumbs :items="breadcrumbItems" />
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

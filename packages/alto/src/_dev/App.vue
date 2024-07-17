<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Breadcrumbs } from '~/components';

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'page1', to: '/page1' },
  { label: 'page2', to: '/page2' },
  { label: 'page3', to: '/page3' },
  { label: 'page4', to: '/page4' },
  { label: 'Current Page', to: '/current-page' },
];

const handleBreadcrumbClick = (item: any) => {
  console.log('Clicked item:', item);
};
</script>

<template>
  <div class="container">
    <Breadcrumbs :items="breadcrumbItems" @itemClick="handleBreadcrumbClick" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 80px;
}
</style>

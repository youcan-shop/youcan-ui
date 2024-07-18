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
  flex-direction: column;
  width: 500px;
  margin: 60px auto;
  gap: 80px;
  row-gap: 40px;
}
</style>

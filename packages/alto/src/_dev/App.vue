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
</script>

<template>
  <div class="container">
    <Breadcrumbs :items="breadcrumbItems" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 80px;
  margin: 20px;
}

.container .label {
  font: var(--text-xl-medium);
  text-align: center;
  text-transform: uppercase;
}

.container .grid {
  display: grid;
  grid-template-columns: repeat(8, auto);
  gap: 40px;
}
</style>

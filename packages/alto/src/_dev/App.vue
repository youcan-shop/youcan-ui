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

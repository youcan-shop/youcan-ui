<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { PaginationBar } from '~/components';

const currentPage = ref(1);
const perPage = ref(10);

const total = 50;
const totalPages = Math.ceil(total / perPage.value);
const perPageOptions = [5, 10, 20, 30, 50];

function handlePaginationNavigation(pageNumber: number) {
  currentPage.value = pageNumber;
}
</script>

<template>
  <div class="container">
    <PaginationBar
      v-model:perPage="perPage"
      :current="currentPage"
      :size="totalPages"
      :count="perPage"
      :total="total"
      :per-page-options="perPageOptions"
      @update:current="handlePaginationNavigation"
    />
  </div>
</template>

<style scoped>
.container {
  min-width: 100%;
}
</style>

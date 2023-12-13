<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';

import { PaginationBar } from '~/components';

const TOTAL = 50;
const PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(TOTAL / PER_PAGE);

const currentPage = ref(1);

function handlePaginationNavigation(pageNumber: number) {
  currentPage.value = pageNumber;
}
</script>

<template>
  <PaginationBar
    :hide-per-page="false"
    :current="currentPage"
    :size="TOTAL_PAGES"
    :count="PER_PAGE"
    :total="TOTAL"
    per-page-label="Showing :count of :total results"
    @update:current="handlePaginationNavigation"
  />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin: auto;
}
</style>

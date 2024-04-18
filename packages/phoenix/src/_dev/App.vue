<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Dropdown, PaginationBar } from '~/components';
import type { DropdownValue } from '~/types';

const multiple = ref(null);
const single = ref(null);
const value = ref(null);
const currentPage = ref(1);
const perPage = ref(10);

const total = 50;
const totalPages = Math.ceil(total / perPage.value);
const perPageOptions = [5, 10, 20, 30, 50];

const items: Array<DropdownValue> = [
  { label: '+1 stars', key: 3, groupName: 'Rating' },
  { label: 'Visible', key: 2, groupName: 'Visibility' },
  { label: 'Hidden', key: 5, groupName: 'Visibility' },
  { label: '+3 stars', key: 4, groupName: 'Rating' },
  { label: '+4 stars', key: 1, groupName: 'Rating' },
];

const singleItems: Array<DropdownValue> = [
  { label: 'Shoes', key: 1 },
  { label: 'Cosmetics', key: 2 },
  { label: 'Gym', key: 3 },
];

const languages: Array<DropdownValue> = [
  { label: 'Arabic', key: 1 },
  { label: 'English', key: 2 },
  { label: 'German', key: 3 },
];

function handlePaginationNavigation(pageNumber: number) {
  currentPage.value = pageNumber;
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div>
        <span>Default Dropdown : </span>
        <Dropdown v-model="value" :items="languages" placeholder="Select item" />
      </div>
      <div>
        <span>Multiple Dropdown : </span>
        <Dropdown v-model="multiple" :items="items" multiple placeholder="Select items" />
      </div>
      <div>
        <span>Single Dropdown :</span>
        <Dropdown v-model="single" :items="singleItems" placeholder="Select item" />
      </div>
    </div>

    <div class="row">
      <div>
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
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 40px;
}

.container .row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 80%;
}

.container .row > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.container .row > div span {
  margin: 0;
  color: var(--gray-900);
  font: var(--text-sm-medium);
}
</style>

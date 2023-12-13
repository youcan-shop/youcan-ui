<script setup lang="ts">
import 'uno.css';
import '~/assets/main.css';
import { ref, watch } from 'vue';
import { PrimaryButton, ResourcePicker } from '~/components';
import type { Resource } from '~/components/ResourcePicker/types';

const MOCK_RESOURCES: Resource[] = [
  {
    id: 1,
    thumbnailUrl: '',
    name: 'Apple MacBook Pro',
    price: '$10.99',
    stock: 99,
  },
  {
    id: 2,
    thumbnailUrl: '',
    name: 'Apple iMac',
    price: '$10.99',
    stock: 99,
  },
  {
    id: 3,
    thumbnailUrl: '',
    name: 'Apple Watch',
    price: '$10.99',
    stock: 99,
  },
];

const showModal = ref(false);
const selectedResources = ref<Resource[]>([]);

const onConfirm = () => {
  alert('Hi');
  showModal.value = false;
};

const onSearch = (term: string) => {
  console.log('Search term:', term);
};

watch(selectedResources, () => {
  console.log('app', selectedResources.value);
});
</script>

<template>
  <div class="container">
    <ResourcePicker
      v-model:visible="showModal"
      v-model:selected-resources="selectedResources"
      :resources="MOCK_RESOURCES"
      stock-label="in stock"
      @confirm="onConfirm"
      @search="onSearch"
    />
    <PrimaryButton @click="showModal = true;">
      <span>Open Picker</span>
    </PrimaryButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}
</style>

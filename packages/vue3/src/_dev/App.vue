<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { PrimaryButton, ResourcePicker } from '~/components';
import type { Resource } from '~/components/ResourcePicker/types';

const MOCK_RESOURCES: Resource[] = [
  {
    id: 1,
    thumbnailUrl: '',
    name: 'Apple MacBook Pro',
    price: '$2,499.00',
    stock: 7,
    isChecked: false,
    variants: [
      {
        id: 33,
        thumbnailUrl: '',
        name: 'Apple MacBook Pro 16 M3 Max',
        price: '$3,499.00',
        stock: 3,
        isChecked: false,
      },
      {
        id: 21,
        thumbnailUrl: '',
        name: 'Apple MacBook Pro 14 M3 Pro',
        price: '$2,499.00',
        stock: 4,
        isChecked: false,
      },
    ],
  },
  {
    id: 2,
    thumbnailUrl: '',
    name: 'Apple iMac',
    price: '$1,499.00',
    stock: 2,
    isChecked: false,
  },
];

const resources = ref<Resource[]>();

const showPicker = ref(false);
const isLoading = ref(true);
const selectedResources = ref<Resource[]>([]);

const onConfirm = (resources: Resource[]) => {
  console.log(resources);

  selectedResources.value = resources;
  showPicker.value = false;
};

function openPicker() {
  isLoading.value = true;
  showPicker.value = true;
  setTimeout(() => {
    resources.value = MOCK_RESOURCES;
    isLoading.value = false;
  }, 400);
}
</script>

<template>
  <div className="container">
    <ResourcePicker
      v-model:visible="showPicker"
      :resources="resources"
      stock-label="in stock"
      :is-loading="isLoading"
      @confirm="onConfirm"
    />
    <PrimaryButton @click="openPicker">
      <span>Open Picker</span>
    </PrimaryButton>
    <div v-if="selectedResources.length > 0" class="selection">
      <pre>{{ selectedResources }}</pre>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  gap: 16px;
}

.selection {
  padding: 16px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
}

:is(.dark) .selection {
  border-color: var(--gray-700);
}
</style>

<script setup lang="ts">
import 'uno.css';
import '~/assets/main.css';
import { ref } from 'vue';
import { PrimaryButton, ResourcePicker } from '~/components';
import type { Resource } from '~/components/ResourcePicker/types';

const showModal = ref(false);
const selectedResources = ref<Resource[]>([]);

const onConfirm = () => {
  alert('Hi');
  showModal.value = false;
};

const MOCK_RESOURCES: Resource[] = [
  {
    thumbnailUrl: '',
    name: 'Apple MacBook Pro',
    price: '$10.99',
    stock: 99,
  },
  {
    thumbnailUrl: '',
    name: 'Apple MacBook Pro',
    price: '$10.99',
    stock: 99,
  },
  {
    thumbnailUrl: '',
    name: 'Apple MacBook Pro',
    price: '$10.99',
    stock: 99,
  },
];
</script>

<template>
  <div class="container">
    <ResourcePicker
      v-model:visible="showModal"
      :resources="MOCK_RESOURCES"
      stock-label="in stock"
      @confirm="onConfirm"
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

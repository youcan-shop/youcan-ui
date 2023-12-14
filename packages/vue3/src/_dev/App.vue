<script setup lang="ts">
import 'uno.css';
import '~/assets/main.css';
import { ref } from 'vue';
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
    id: 33,
    thumbnailUrl: '',
    name: 'Apple MacBook Pro M3 Max',
    price: '$10.99',
    stock: 99,
    variantFor: 1,
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

const showPicker = ref(false);
const showLoadingPicker = ref(false);
const showEmptyPicker = ref(false);

const onConfirm = (resources: Resource[]) => {
  console.log(resources);
  showPicker.value = false;
};

const onSearch = (term: string) => {
  console.log('Search term:', term);
};
</script>

<template>
  <div class="container">
    <div class="picker">
      <ResourcePicker
        v-model:visible="showPicker"
        :resources="MOCK_RESOURCES"
        stock-label="in stock"
        :is-loading="false"
        @confirm="onConfirm"
        @search="onSearch"
      />
      <PrimaryButton @click="showPicker = true;">
        <span>Open Picker</span>
      </PrimaryButton>
    </div>
    <div class="picker">
      <ResourcePicker
        v-model:visible="showLoadingPicker"
        :is-loading="true"
      />
      <PrimaryButton @click="showLoadingPicker = true;">
        <span>Open Loading Picker</span>
      </PrimaryButton>
    </div>
    <div class="picker">
      <ResourcePicker
        v-model:visible="showEmptyPicker"
        :resources="[]"
        :is-loading="false"
      />
      <PrimaryButton @click="showEmptyPicker = true;">
        <span>Open Empty Picker</span>
      </PrimaryButton>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  gap: 32px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: "Mona Sans";
}
</style>

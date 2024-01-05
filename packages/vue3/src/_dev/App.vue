<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Modal, MultiSwitch, PaginationBar, PrimaryButton } from '~/components';
import type { SwitchButtonOption } from '~/components/MultiSwitch/types';

const showModal = ref(false);

const onConfirm = () => {
  showModal.value = false;
};
const OPTIONS: SwitchButtonOption[] = [
  {
    label: 'Mobile',
    value: 1,
    icon: 'i-youcan:device-mobile',
  },
  {
    label: 'Desktop',
    value: 2,
    icon: 'i-youcan:desktop',
  },
  {
    label: 'Tablet',
    value: 3,
    icon: 'i-youcan:credit-card',
  },
];

const activeOption = ref<SwitchButtonOption>(OPTIONS[0]);
const TOTAL = 50;
const PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(TOTAL / PER_PAGE);

const currentPage = ref(1);

function handlePaginationNavigation(pageNumber: number) {
  currentPage.value = pageNumber;
}
</script>

<template>
  <Modal v-model:visible="showModal" title="Edit profile" @on-confirm="onConfirm">
    <p class="content">
      The quick brown fox jumps over the lazy dog.
    </p>
  </Modal>
  <div class="container">
    <PrimaryButton @click="showModal = true;">
      <span>Open Modal</span>
    </PrimaryButton>
    <MultiSwitch v-model:selected-option="activeOption" :options="OPTIONS" />
    <p>{{ activeOption.value }} : {{ activeOption.label }}</p>
    <PaginationBar
      :current="currentPage"
      :size="TOTAL_PAGES"
      :count="PER_PAGE"
      :total="TOTAL"
      @update:current="handlePaginationNavigation"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 10%;
  gap: 30px;
}
</style>

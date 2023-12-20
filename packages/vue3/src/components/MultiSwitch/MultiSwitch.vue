<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['update:selectedTab']);

const activeTab = ref(0);

const setActiveTab = (id: number) => {
  activeTab.value = id;
  emit('update:selectedTab', id);
};
</script>

<template>
  <div class="list">
    <slot :set-active-tab="setActiveTab" />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  align-items: flex-start;
  height: 36px;
  padding: 4px;
  border: 1px solid var(--gray-200, #e3e8ef);
  border-radius: 4px;
  background: var(--gray-50, #f8fafc);
  gap: 4px;
}
</style>

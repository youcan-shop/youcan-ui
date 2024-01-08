<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { PrimaryButton, SecondaryButton, Toast, Toggle, Tooltip } from '~/components';

const show = ref(false);
const isActive = ref(false);
</script>

<template>
  <Toast :show="show" :close-after-duration="3000" position="bottom-right" type="success" @close="show = false">
    <template #title>
      Profile Updated
    </template>
    <template #description>
      Your profile information has been successfully updated.
    </template>
  </Toast>
  <div class="container">
    <PrimaryButton :disabled="show" @click="show = true;">
      <span>Show Toast</span>
    </PrimaryButton>
    <Toggle v-model="isActive" />
    <Tooltip label="Add to favorites" position="bottom">
      <SecondaryButton>
        Hover
      </SecondaryButton>
    </Tooltip>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  gap: 30px;
  margin: 10%;
}

.tab-group {
  border-radius: 8px;
  background-color: transparent;
}

.tab-group .tab-list {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin: 0;
  padding: 0 20px;
  list-style-type: none;
  border-bottom: 1px solid var(--vp-c-divider);
  font: var(--text-md-regular);
}

.tab-group .tab-list .list {
  border-bottom: 0;
}

.tab-group .tab-list .list .tab .label {
  color: red !important;
}

.tab-group .tab-list .tab-item {
  min-width: fit-content;
  padding: 14px 0;
  cursor: pointer;
}

.tab-group .tab-list .tab-item.active {
  border-bottom: 1px solid var(--brand-500);
  color: var(--brand-500);
  font-weight: var(--text-md-medium);
}

.tab-panels {
  display: flex;
  justify-content: center;
  min-height: 200px;
  margin: 16px 0;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.tab-group .tab-panels {
  background-color: var(--base-white);
}

:is(.dark) .tab-group .tab-panels {
  background-color: var(--vp-sidebar-bg-color);
}

.tab-panels .panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  min-width: 100%;
  padding: 20px;
  gap: 0.5rem;
}

.tab-panels .panel .status {
  max-width: 100%;
}

.items-center {
  align-items: center;
}

.items-start {
  align-items: start;
}

.items-end {
  align-items: end;
}
</style>

<script setup lang="ts">
import type { SettingsNavItemProps } from '~/types';

defineProps<SettingsNavItemProps>();
</script>

<template>
  <button :disabled="active" :class="{ active }" class="settings-nav-item">
    <div class="icon">
      <i :class="icon" />
    </div>

    <div class="label">
      {{ label }}
    </div>
  </button>
</template>

<style scoped>
.settings-nav-item {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  padding: 12px;
  border: none;
  background-color: var(--base-white);
  cursor: pointer;
  gap: 12px;
}

.settings-nav-item .label,
.settings-nav-item .icon {
  color: var(--gray-700);
  font: var(--text-sm-regular);
}

.settings-nav-item:not(.active):hover {
  background-color: var(--gray-50);
}

.settings-nav-item:not(.active):is(:focus, :active) {
  outline: none;
  background-color: var(--gray-100);
}

.settings-nav-item.active {
  margin-left: -1px;
  box-shadow: inset 3px 0 0 0 var(--brand-500);
  cursor: default;
}

.settings-nav-item.active .label,
.settings-nav-item.active .icon {
  color: var(--brand-500);
  font: var(--text-sm-medium);
}

html[dir="rtl"] .settings-nav-item.active {
  box-shadow: inset -3px 0 0 0 var(--brand-500);
}
</style>

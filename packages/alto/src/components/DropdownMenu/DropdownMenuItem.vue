<script setup lang="ts">
import type { DropdownMenuItemProps } from '~/types';

const props = defineProps<DropdownMenuItemProps>();

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <div class="dropdown-menu-item" @click="handleClick">
    <slot name="icon" />
    <div class="label">
      {{ props.label }}
    </div>
    <slot name="accessory" />
  </div>
</template>

<style scoped>
.dropdown-menu-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 5px;
}

.dropdown-menu-item:hover {
  background-color: var(--gray-100);
  cursor: pointer;
}

.dropdown-menu-item .label {
  flex: 1;
  margin: 0 10px;
  font: var(--text-sm-regular);
}
</style>

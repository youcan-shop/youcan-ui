<script setup lang="ts">
import type { DropdownMenuItemProps } from './types.ts';

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

<style lang="scss" scoped>
.dropdown-menu-item {
  --border-radius: 5px;
  --padding: 8px;

  display: flex;
  justify-content: space-between;
  padding: var(--padding);
  border-radius: var(--border-radius);

  &:hover {
    border-radius: var(--border-radius);
    background-color: var(--gray-100);
  }
}

.label {
  flex: 1;
  margin: 0 10px;
  font: var(--text-sm-regular);
}
</style>

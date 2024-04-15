<script setup lang="ts">
import { ref } from 'vue';
import type { DropdownItemProps, DropdownItemType } from '../type';
import { Checkbox } from '~/components';

defineProps<DropdownItemProps>();
const emit = defineEmits(['onSelect']);

const checked = ref(false);

function select(item: DropdownItemType) {
  emit('onSelect', item);
  checked.value = !checked.value;
}
</script>

<template>
  <div class="dropdown-item" :class="{ selected: checked }" @click="select(item)">
    <Checkbox v-if="multiple" v-model="checked" />
    <div class="label">
      {{ item.label }}
    </div>
  </div>
</template>

<style scoped>
.dropdown-item {
  display: flex;
  align-items: center;
  padding: 16px;
  transition: background-color 150ms linear;
  font: var(--text-sm-regular);
  cursor: pointer;
  gap: 16px;
}

.dropdown-item.selected,
.dropdown-item:hover {
  background-color: var(--gray-50);
}
</style>

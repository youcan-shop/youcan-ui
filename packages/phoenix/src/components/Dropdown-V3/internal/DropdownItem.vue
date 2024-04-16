<script setup lang="ts">
import { ref } from 'vue';
import type { DropdownItemProps } from '../type';
import { Checkbox } from '~/components';

const props = defineProps<DropdownItemProps>();
const emit = defineEmits(['onSelect']);

const checked = ref(false);

function select() {
  emit('onSelect');
  if (props.multiple) {
    checked.value = !checked.value;
  }
}
</script>

<template>
  <div class="dropdown-item" :class="[{ selected }]" @click="select">
    <Checkbox v-if="multiple" v-model="checked" />
    <slot>
      <div class="label">
        {{ item.label }}
      </div>
    </slot>
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

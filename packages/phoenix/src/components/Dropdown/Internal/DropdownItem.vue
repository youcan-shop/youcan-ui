<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { DropdownItemProps } from '~/types';
import { Checkbox } from '~/components';

const props = defineProps<DropdownItemProps>();

const emit = defineEmits(['onSelect']);

const checked = ref(false);

onMounted(() => {
  checked.value = props.selected;
});

watch(() => props.selected, (newValue) => {
  checked.value = newValue;
});
</script>

<template>
  <button class="dropdown-item" type="button" tabindex="-1" :class="[{ selected }]" @click="() => emit('onSelect')">
    <div class="check-box">
      <Checkbox v-if="multiple" v-model="checked" tabindex="-1" />
    </div>
    <slot>
      <div class="dropdown-item-label">
        {{ item.label }}
      </div>
    </slot>
  </button>
</template>

<style scoped>
.dropdown-item {
  display: flex;
  align-items: center;
  padding: 16px;
  transition: background-color 150ms linear;
  border: 0;
  outline: none;
  background-color: var(--base-white);
  font: var(--text-sm-regular);
  cursor: pointer;
  gap: 16px;
}

.dropdown-item.selected,
.dropdown-item:hover {
  background-color: var(--gray-50);
}

.dropdown-item.focus {
  background-color: var(--gray-100);
}

.dropdown-item .check-box {
  pointer-events: none;
}
</style>

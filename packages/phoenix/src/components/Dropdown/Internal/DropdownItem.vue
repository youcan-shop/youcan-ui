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
  <div class="dropdown-item" :class="[{ selected }]" @click="() => emit('onSelect')">
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
.dropdown-item:hover,
.dropdown-item:focus {
  background-color: var(--gray-50);
}
</style>

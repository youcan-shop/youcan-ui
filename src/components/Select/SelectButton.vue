<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import type { SelectItem } from './types';

const props = defineProps<{
  item?: SelectItem
  placeholder?: String
}>();

const emit = defineEmits(['click', 'clickOutside']);

const selected = computed(() => props.item);

const _dropdown_trigger = ref();
onClickOutside(_dropdown_trigger, () => emit('clickOutside'));
</script>

<template>
  <button ref="_dropdown_trigger" class="dropdown-input" @click="emit('click')">
    <div class="label-item">
      <i :class="[selected?.icon]" />
      <span>{{ !selected ? placeholder : selected.label }}</span>
    </div>

    <i class="i-tabler:chevron-down icon" />
  </button>
</template>

<style scoped lang="scss">
.dropdown-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--base-white);
  color: var(--gray-400);
  width: 100%;
  max-width: 460px;
  height: 56px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
  text-align: start;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;

  .icon {
    color: var(--gray-400);
  }

  .label-item {
    display: flex;
    gap: 7px;
  }
}
</style>

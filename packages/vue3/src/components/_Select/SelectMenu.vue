<script setup lang="ts">
import { ref } from 'vue';
import type { SelectItem } from './types';

const props = defineProps<{
  items: SelectItem[]
  modelValue?: SelectItem
}>();

const emit = defineEmits(['update:modelValue']);
const selected = ref(props.modelValue);

const selectItem = (item: SelectItem) => {
  selected.value = item;
  emit('update:modelValue', selected.value);
};
</script>

<template>
  <div class="dropdown-content">
    <template v-if="items.length > 0">
      <div v-for="item in items" :key="item.label" class="dropdown-item" @click="selectItem(item)">
        <i v-if="item.icon" :class="item.icon" />
        <img v-if="item.image" :src="item.image" class="image">
        <span>{{ item.label }}</span>
        <i v-if="item && selected && item.value === selected.value" class="icon i-tabler:check" />
      </div>
    </template>
    <div v-else class="no-results">
      <slot name="no_result" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown-content {
  background-color: var(--base-white);
  width: 100%;
  height: max-content;
  max-height: 191px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: auto;
  padding: 16px 0;
  z-index: 1;

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--gray-400);
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
      --hover-color: #f7faff;
      background-color: var(--hover-color);
    }

    .image {
      height: 20px;
    }
  }
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: var(--gray-800);
}

.icon {
  margin-left: auto;
  color: var(--primary-color);
}
</style>

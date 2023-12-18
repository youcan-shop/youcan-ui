<script setup lang="ts">
import { computed } from 'vue';

import { Checkbox, Thumbnail } from '~/components';
import type { Resource, ResourceProps } from '~/components/ResourcePicker/types';

const props = withDefaults(defineProps<ResourceProps>(), {
  stockLabel: 'Stock',
  name: 'Name',
  showStock: false,
  showThumbnail: true,
});

const emit = defineEmits(['change', 'update:model-value']);

const model = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:model-value', value),
});

function handleCheck(e: Event) {
  const { isChecked, id, name, price, stock, thumbnailUrl, variants } = props.resource;
  const res: Resource = { isChecked, id, name, price, stock, thumbnailUrl, variants };
  emit('change', e, res);
}
</script>

<template>
  <Checkbox v-model="model" class="container" :class="!showThumbnail && 'variant'" :indeterminate="$props.indeterminate" @change.stop="handleCheck">
    <template #label>
      <div class="content">
        <div class="info">
          <Thumbnail v-if="showThumbnail" :src="resource.thumbnailUrl" />
          <p class="name">
            {{ resource.name }}
          </p>
        </div>
        <div class="inventory-price">
          <span v-if="showStock" class="stock">{{ resource.stock }} {{ stockLabel }}</span>
          <p class="price">
            {{ resource.price }}
          </p>
        </div>
      </div>
    </template>
  </Checkbox>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: start;
  padding: 0 16px;
  transition: background-color 0.3s;
  border-bottom: var(--border);
  cursor: pointer;
  gap: 8px;
}

.container:hover {
  background-color: var(--gray-50);
}

.variant {
  padding-inline-start: 52px;
}

.content {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.info {
  display: flex;
  flex-basis: 55%;
  align-items: center;
  gap: 8px;
}

.info .thumbnail {
  margin: 16px 0;
}

.inventory-price {
  display: flex;
  flex-basis: 45%;
  align-items: center;
  gap: 16px;
  justify-content: end;
}

.inventory-price .stock {
  color: var(--gray-400);
}
</style>

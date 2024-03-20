<script setup lang="ts">
import { computed } from 'vue';
import { Checkbox, Thumbnail } from '~/components';
import type { ResourceProps } from '~/types';

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
  emit('change', e, props.resource);
}
</script>

<template>
  <Checkbox v-model="model" class="resource" :class="!showThumbnail && 'variant'" :indeterminate="indeterminate" @change.stop="handleCheck">
    <template #label>
      <div class="content">
        <div class="info">
          <Thumbnail v-if="showThumbnail" :src="resource.thumbnailUrl" />
          <p class="name">
            {{ resource.name }}
          </p>
        </div>
        <div class="inventory-price">
          <span v-if="showStock && resource.stock" class="stock">{{ resource.stock }} {{ stockLabel }}</span>
          <p v-if="resource.price">
            {{ resource.price }}
          </p>
        </div>
      </div>
    </template>
  </Checkbox>
</template>

<style scoped>
.resource {
  display: flex;
  justify-content: start;
  padding: 0 16px;
  transition: background-color 0.3s;
  border-bottom: var(--border);
  cursor: pointer;
  gap: 8px;
}

.resource:hover {
  background-color: var(--gray-50);
}

.resource.variant {
  padding-inline-start: 52px;
}

.resource .content {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.resource .content .info {
  display: flex;
  flex-basis: 55%;
  align-items: center;
  gap: 8px;
}

.resource .content .info .thumbnail {
  margin: 16px 0;
}

.resource .content .inventory-price {
  display: flex;
  flex-basis: 45%;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;
}

.resource .content .inventory-price .stock {
  color: var(--gray-400);
}
</style>

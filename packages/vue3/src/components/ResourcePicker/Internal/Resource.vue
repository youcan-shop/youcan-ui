<script setup lang="ts">
import { ref } from 'vue';
import { Checkbox, Thumbnail } from '~/components';
import type { ResourceProps } from '~/components/ResourcePicker/types';

const props = withDefaults(defineProps<ResourceProps>(), {
  stockLabel: 'in stock',
  name: 'Apple MacBook Pro 14',
  showStock: false,
  showThumbnail: true,
  isChecked: false,
});

const emit = defineEmits(['change']);

const checked = ref(props.isChecked);

function handleCheck() {
  const clickedResource = { ...props.resource };

  emit('change', clickedResource, checked.value);
}
</script>

<template>
  <Checkbox v-model="checked" class="container" :class="!showThumbnail && 'variant'" @change.stop="handleCheck">
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

input:indeterminate + label {
  background: lime;
}
</style>

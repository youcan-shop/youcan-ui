<script setup lang="ts">
import { ref } from 'vue';
import { Checkbox, Thumbnail } from '~/components';
import type { Resource } from '~/components/ResourcePicker/types';

const props = withDefaults(defineProps<Resource>(), {
  price: '$14.99',
  stock: 1,
  stockLabel: 'in stock',
  name: 'Apple MacBook Pro 14',
  showStock: false,
  showThumbnail: true,
  isChecked: false,
});

const emit = defineEmits(['change']);

const checked = ref(props.isChecked);

function handleCheck() {
  const clickedResource = { ...props, isChecked: checked.value };
  emit('change', clickedResource);
}
</script>

<template>
  <Checkbox v-model="checked" class="container" :class="!showThumbnail && 'variant'" @change.stop="handleCheck">
    <template #label>
      <div class="content">
        <div class="info">
          <Thumbnail v-if="showThumbnail" :src="thumbnailUrl" />
          <p class="name">
            {{ name }}
          </p>
        </div>
        <div class="inventory-price">
          <span v-if="showStock" class="stock">{{ stock }} {{ stockLabel }}</span>
          <p class="price">
            {{ price }}
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
  cursor: pointer;
  gap: 8px;
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

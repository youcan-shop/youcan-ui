<script setup lang="ts">
import { ref } from 'vue';
import { Checkbox, Thumbnail } from '~/components';

const { isChecked } = withDefaults(defineProps<{
  price: string
  stock: string
  name: string
  thumbnailUrl: string
  isChecked: boolean
  showStock: boolean
  showThumbnail: boolean
}>(), { price: '$14.99', stock: '1 in stock', name: 'Apple MacBook Pro 14', showStock: false, showThumbnail: true });

const checked = ref(isChecked);
</script>

<template>
  <Checkbox v-model="checked" class="container" :class="!showThumbnail ? 'variant' : ''">
    <template #label>
      <div class="content">
        <div class="info">
          <Thumbnail v-if="showThumbnail" :src="thumbnailUrl" />
          <p class="name">
            {{ name }}
          </p>
        </div>
        <div class="inventory-price">
          <span v-if="showStock" class="stock">{{ stock }}</span>
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
</style>

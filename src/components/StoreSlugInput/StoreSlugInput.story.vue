<script setup lang="ts">
import { ref } from 'vue';
import StoreSlugInputVue from './StoreSlugInput.vue';

const firstValue = ref('hello v1');
</script>

<template>
  <Story>
    <Variant title="Default">
      <StoreSlugInputVue v-model="firstValue" placeholder="Store slug" />
      <span>Value: {{ firstValue }}</span>
    </Variant>

    <Variant title="With suffix">
      <StoreSlugInputVue v-model="firstValue" placeholder="Store slug" slug-suffix=".com" />
      <span>Value: {{ firstValue }}</span>
    </Variant>
  </Story>
</template>

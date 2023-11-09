<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Tag } from '~/components';
import type { TagItemValue } from '~/components/Tag/types';

const preferredLanguages = ref<TagItemValue[]>([
  { label: 'Pink', hexColor: '#F49FBC' },
  { label: 'Lavender', hexColor: '#805D93' },
  { label: 'Apricot', hexColor: '#FFD3BA' },
  { label: 'Olive Green', hexColor: '#9EBD6E' },
  { label: 'Shamrock Green', hexColor: '#169873' },
]);
</script>

<template>
  <Tag
    v-model="preferredLanguages"
    placeholder="Your favorite colors"
    type="color"
  />
</template>

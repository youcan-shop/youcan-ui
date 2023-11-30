<script setup lang="ts">
import { ref } from 'vue';
import { Tag } from '~/components';
import type { TagItemValue } from '~/components/Tag/types';

const preferredLanguages = ref<TagItemValue[]>([
  { label: 'JavaScript' },
]);
</script>

<template>
  <Tag
    v-model="preferredLanguages"
    placeholder="Your favorite programming languages"
    :max="3"
  />
</template>

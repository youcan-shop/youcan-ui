<script lang="ts" setup>
import { computed } from 'vue';
import type { AvatarProps } from '~/types';

const props = defineProps<AvatarProps>();

const initialsText = computed(() => props.initials?.substring(0, 2));
</script>

<template>
  <button class="yc-avatar-wrapper" :class="[`yc-avatar-${size}`, { 'yc-clickable ': clickable }]">
    <div class="yc-avatar">
      <img v-if="source" :src="source" alt="" srcset="">
      <span v-else class="yc-avatar-initials">
        <span v-if="initials">{{ initialsText }}</span>
        <i v-else class="i-youcan-user" />
      </span>
      <a v-if="url" :href="url" />
    </div>
  </button>
</template>

<style scoped>
@import "@youcan/styles/avatar";
</style>

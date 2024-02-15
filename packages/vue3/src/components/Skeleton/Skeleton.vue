<script setup lang="ts">
import type { SkeletonProps } from '~/types';

withDefaults(
  defineProps<SkeletonProps>(),
  {
    type: 'text',
    lines: 5,
  },
);
</script>

<template>
  <div v-if="type === 'text'" class="content">
    <div v-for="index in lines" :key="index" class="pulse">
      <div class="line" :class="{ 'last-line': index === lines }" />
    </div>
  </div>
  <div v-if="type === 'media'" class="media pulse">
    <i class="i-youcan:image icon" />
  </div>
</template>

<style scoped lang="scss">
.pulse {
  animation: blink 2s linear infinite;
}

.media {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 6px;
  background-color: var(--gray-200);
}

.icon {
  min-width: 80px;
  min-height: 80px;
  color: var(--gray-300);
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 15px;
  justify-items: start;
}

.line {
  height: 1.2vh;
  border-bottom: 1px solid var(--gray-300);
  background-color: var(--gray-300);

  &.last-line {
    width: 80%;
  }
}

@keyframes blink {
  0% {
    opacity: 0.3;
  }

  25% {
    opacity: 0.7;
  }

  50% {
    opacity: 1;
  }

  75% {
    opacity: 0.7;
  }

  100% {
    opacity: 0.3;
  }
}
</style>

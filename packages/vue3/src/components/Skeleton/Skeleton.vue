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
      <div class="line" />
    </div>
  </div>
  <div v-if="type === 'media'" class="media pulse">
    <i class="i-youcan:image icon" />
  </div>
  <div v-if="type === 'card'" class="card pulse" />
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 15px;
  justify-items: start;
}

.pulse {
  animation: blink 2s linear infinite;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 6px;
  background-color: var(--gray-200);
}

.content .pulse .line {
  height: 1.2vh;
  border-bottom: 1px solid var(--gray-300);
  background-color: var(--gray-300);
}

.content .pulse:last-child {
  width: 80%;
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

.media .icon {
  min-width: 80px;
  min-height: 80px;
  color: var(--gray-300);
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

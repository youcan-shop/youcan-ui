<script setup lang="ts">
import type { SkeletonType } from './types';

withDefaults(
  defineProps<{
    height?: string
    width?: string
    type?: SkeletonType
    rows?: number
  }>(),
  {
    type: 'content',
    rows: 5,
  },
);
</script>

<template>
  <div v-if="type === 'content'" class="content dimensions pulse">
    <div class="line long" />
    <div class="line short" />
    <div class="line medium" />
    <div class="line xshort" />
    <div class="line xlong" />
    <div class="line long" />
    <div class="line short" />
  </div>

  <div v-if="type === 'media'" class="media dimensions pulse">
    <i class="i-youcan:image icon" />
  </div>

  <div v-if="type === 'table'" class="table dimensions pulse">
    <div class="header" />
    <div v-for="index in rows" :key="index" class="row">
      <div class="element">
        <div class="line xshort" />
        <div class="line short" />
      </div>
      <div class="line actions" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dimensions {
  width: v-bind("width || '100%' ");
  height: v-bind("height || '40%'");
}
.pulse {
  animation: blink 2s linear infinite;
}
.media {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-300);
  border-radius: 20px;
}
.icon {
  color: var(--gray-400);
  width: 25%;
  height: 25%;
}
.content {
  display: grid;
  grid-auto-flow: row;
  justify-items: start;
  align-items: center;
  align-content: space-evenly;
}
.line {
  background-color: var(--gray-400);
  border-radius: 20px;
  height: 1.2vh;
  margin-bottom: 1%;
  border-bottom: 1px solid var(--gray-400);
  &.actions {
    width: 20%;
  }
  &.xshort {
    width: 50%;
  }
  &.short {
    width: 70%;
  }
  &.medium {
    width: 80%;
  }
  &.long {
    width: 90%;
  }
  &.xlong {
    width: 100%;
  }
}
.table {
  display: grid;
  grid-auto-flow: row;
  border: 2px solid var(--gray-400);
  border-radius: 20px;
  padding: 2%;
}
.header {
  width: 100%;
  height: 5vh;
  background-color: var(--gray-400);
  border-radius: 20px;
  margin-bottom: 1%;
}
.row {
  width: 100%;
  display: flex;
  align-items: flex-end;
  border-top: 1px solid var(--gray-300);
  padding-top: 1%;
  margin-bottom: 1%;
}
.element {
  width: 100%;
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

<script setup lang="ts">
import { computed } from 'vue';
import type { SpinnerProps } from '~/types';

const props = defineProps<SpinnerProps>();

const spinnerSize = computed(() => `${props.size}px`);
const borderWidth = computed(() => `${props.size * 0.1}px`);
</script>

<template>
  <div class="spinner-block" :class="type">
    <div class="spinner" />
    <div class="shadow" />
  </div>
</template>

<style scoped>
.spinner-block {
  position: relative;
  width: v-bind(spinnerSize);
  height: v-bind(spinnerSize);
}

.spinner-block > div {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: v-bind(borderWidth) solid var(--gray-100);
  border-radius: 50%;
}

.spinner-block .spinner {
  position: absolute;
  z-index: 2;
  animation: s4 1s infinite linear;
  border-right-color: v-bind(color);
}

.spinner-block.shadow-spinner .spinner {
  border: 0;
  background-image: linear-gradient(177deg, var(--f8a75c4c-color) 15%, var(--gray-100) 93%);
  mask-image: url("../assets/spinner-shadow.webp");
  mask-size: v-bind(spinnerSize);
  mask-repeat: no-repeat;
}

.spinner-block.shadow-spinner .spinner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: v-bind(borderWidth) solid transparent;
  border-radius: 50%;
  border-right-color: v-bind(color);
}

.spinner-block .shadow {
  position: relative;
  z-index: 1;
}

@keyframes s4 {
  100% {
    transform: rotate(1turn);
  }
}
</style>

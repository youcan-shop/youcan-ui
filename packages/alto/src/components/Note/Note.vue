<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
</script>

<template>
  <div class="yc-note">
    <div v-if="slots.icon" class="yc-note__icon">
      <slot name="icon" />
    </div>
    <div v-if="slots.content" class="yc-note__content">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
@import "@youcan/styles/note";
</style>

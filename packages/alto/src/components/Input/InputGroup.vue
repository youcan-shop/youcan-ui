<script setup lang="ts">
import type { InputGroupProps } from '~/types';

defineProps<InputGroupProps>();
</script>

<template>
  <div class="yc-input-group">
    <label v-if="label" :for="labelFor" class="yc-input-group__label">
      {{ label }}
    </label>

    <div class="yc-input-group__field">
      <slot name="input" />
    </div>

    <div v-if="error" class="yc-input-group__error">
      {{ error }}
    </div>

    <slot />
  </div>
</template>

<style scoped>
@import "@youcan/styles/input";
</style>

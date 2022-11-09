<script setup lang="ts">
import Button from '~/components/Button/Button.vue';
</script>

<template>
  <Button
    v-bind="$attrs"
    ref="target"
    class="primary"
  >
    <slot />
  </Button>
</template>

<style scoped>
.button.primary {
--stormGray-100: var(--primary-color);
--base-black: var(--base-white);
}
</style>

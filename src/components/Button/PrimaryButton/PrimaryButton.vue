<script setup lang="ts">
import Button from '~/components/Button/Button.vue';
import type { Color } from '~/components/Button/Button.types';

const props = defineProps({
  color: {
    type: String as () => Color,
    default: 'primary',
  },
});
</script>

<template>
  <Button
    ref="target"
    :class="[color]"
  >
    <slot />
  </Button>
</template>

<style scoped>
.button.primary {
background: var(--primary-color);
color: var(--base-white);
}
</style>

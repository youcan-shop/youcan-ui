<script setup lang="ts">
import type { Orientation, Style } from './types';

withDefaults(
  defineProps<{
    orientation?: Orientation
    borderStyle?: Style
  }>(),
  {
    orientation: 'horizontal',
    borderStyle: 'solid',
  },
);
</script>

<template>
  <div :class="[orientation, borderStyle]" />
</template>

<style scoped lang="scss">
.horizontal {
  width: 100%;
  max-height: 0;
  border-width: 1px;
  border-color: var(--gray-100);
}

.vertical {
  max-width: 0;
  height: 100%;
  border-width: 1px;
  border-color: var(--gray-100);
}

.solid {
  border-style: solid;
}

.dashed {
  border-style: dashed;
}

.dotted {
  border-style: dotted;
}
</style>

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
  <div :class="{ [orientation]: true, [borderStyle]: true }" />
</template>

<style scoped lang="scss">
.horizontal {
  border-width: 0.5px;
  border-color: var(--gray-400);
  width: 90%;
}

.vertical {
  border-width: 1px;
  border-color: var(--gray-400);
  height: 90%;
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

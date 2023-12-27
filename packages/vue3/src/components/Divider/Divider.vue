<script setup lang="ts">
import type { Orientation, Style, Width } from './types';

withDefaults(
  defineProps<{
    orientation?: Orientation
    borderStyle?: Style
    width?: Width
  }>(),
  {
    orientation: 'horizontal',
    borderStyle: 'solid',
    width: 'regular',
  },
);
</script>

<template>
  <div :class="[orientation, borderStyle, width]" />
</template>

<style scoped lang="scss">
.horizontal {
  width: 100%;
  border-color: var(--gray-100);
}

.vertical {
  height: 100%;
  border-color: var(--gray-100);
}

.light {
  border-width: 1px;
}

.regular {
  border-width: 2px;
}

.thick {
  border-width: 4px;
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

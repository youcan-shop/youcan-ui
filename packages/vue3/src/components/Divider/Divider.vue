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
  margin-top: 16px;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: var(--gray-100);
}

.vertical {
  height: 100%;
  margin-left: 16px;
  margin-right: 16px;
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

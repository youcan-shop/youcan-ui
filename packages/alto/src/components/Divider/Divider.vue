<script setup lang="ts">
import type { DividerProps } from '~/types';

withDefaults(
  defineProps<DividerProps>(),
  {
    orientation: 'horizontal',
    borderStyle: 'solid',
    thickness: 'regular',
  },
);
</script>

<template>
  <div :class="[orientation, borderStyle, thickness]" />
</template>

<style scoped>
.horizontal {
  width: 100%;
  max-height: 0;
  margin-top: 16px;
  margin-bottom: 16px;
  border-color: var(--gray-100);
}

.vertical {
  max-width: 0;
  height: 100%;
  margin-right: 16px;
  margin-left: 16px;
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

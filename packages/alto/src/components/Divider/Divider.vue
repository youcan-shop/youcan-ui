<script setup lang="ts">
import type { DividerProps } from '~/types';

withDefaults(
  defineProps<DividerProps>(),
  {
    orientation: 'horizontal',
    thickness: 'regular',
    dashed: false,
  },
);
</script>

<template>
  <div :class="[orientation, thickness, { dashed }]" />
</template>

<style scoped>
.horizontal {
  width: 100%;
  max-height: 0;
  margin-top: 16px;
  margin-bottom: 16px;
  border-style: solid;
  border-color: var(--gray-200);
}

.vertical {
  max-width: 0;
  height: 100%;
  margin-right: 16px;
  margin-left: 16px;
  border-style: solid;
  border-color: var(--gray-200);
}

.light {
  border-width: 0.5px;
}

.regular {
  border-width: 1px;
}

.thick {
  border-width: 4px;
}

.vertical.dashed {
  border-image:
    repeating-linear-gradient(
      to bottom,
      var(--gray-200) 0,
      var(--gray-200) 10px, /* Length of dash */
      transparent 5px,
      transparent 16px /* Length of gap */
    ) 1;
}

.horizontal.dashed {
  border-image:
    repeating-linear-gradient(
      to right,
      var(--gray-200) 0,
      var(--gray-200) 10px, /* Length of dash */
      transparent 5px,
      transparent 16px /* Length of gap */
    ) 1;
}
</style>

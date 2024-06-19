<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import type { LoaderProps } from '~/types';

const props = withDefaults(
  defineProps<LoaderProps>(),
  {
    color: 'var(--brand-500)',
    size: 40,
    labelColor: 'var(--brand-500)',
    labelFontSize: 'md',
    type: 'spinner',
  },
);

const loaderType = computed (() => {
  if (['brand', 'bar', 'spinner'].includes(props.type)) {
    return props.type;
  }

  return 'spinner';
});

const loader = computed (() => {
  switch (props.type) {
    case 'brand':
      return defineAsyncComponent(() => import('./internal/BrandLoading.vue'));

    case 'bar':
      return defineAsyncComponent(() => import('./internal/BarLoading.vue'));

    default:
      return defineAsyncComponent(() => import('./internal/Spinner.vue'));
  }
});
</script>

<template>
  <div class="loader-block">
    <component :is="loader" :type="loaderType" :color="color" :size="size" />

    <p v-if="label" class="label" :class="[labelFontSize]">
      {{ label }}
    </p>
  </div>
</template>

<style scoped>
.loader-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader-block .label {
  color: v-bind("labelColor");
  font: var(--text-md-regular);
}

.loader-block .label.xs {
  font: var(--text-xs-regular);
}

.loader-block .label.sm {
  font: var(--text-sm-regular);
}

.loader-block .label.lg {
  font: var(--text-lg-regular);
}

.loader-block .label.xl {
  font: var(--text-xl-regular);
}
</style>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, useSlots } from 'vue';
import type { AlertProps } from './types';
import { Button } from '~/components';

const props = withDefaults(
  defineProps<AlertProps>(),
  {
    type: 'warning',
    canClose: true,
  },
);

const emit = defineEmits<{
  (e: 'close'): void
}>();

const alertVariant = computed(() => {
  let classList = 'i-youcan:';
  switch (props.type) {
    case 'success':
      classList = 'i-youcan-check-circle';
      break;
    case 'info':
      classList = 'i-youcan:info-filled';
      break;
    case 'error':
      classList = 'i-youcan:x-circle';
      break;
    default:
      classList = 'i-youcan:warning-filled';
      break;
  }

  return `${classList} yc-${props.type}`;
});

const { title, description } = useSlots();

const handleClose = () => {
  emit('close');
};

let timeOut: ReturnType<typeof setTimeout>;
onMounted(() => {
  if (props.closeAfterDuration && typeof props.closeAfterDuration === 'number') {
    timeOut = setTimeout(() => {
      handleClose();
    }, props.closeAfterDuration);
  }
});

onUnmounted(() => {
  clearTimeout(timeOut);
});
</script>

<template>
  <div class="yc-alert" :class="[`yc-${type}`]">
    <div class="yc-main">
      <div class="yc-icon-block" :class="[`yc-${type}`]">
        <i class="yc-icon" :class="alertVariant" />
      </div>
      <div class="yc-content-container">
        <span v-if="title" class="yc-title" :class="[`yc-${type}`]">
          <slot name="title" />
        </span>
        <span v-if="description" class="yc-description" :class="[`yc-${type}`]">
          <slot name="description" />
        </span>
      </div>
      <!-- Close button -->
      <div v-if="canClose" class="yc-btn">
        <Button class="yc-close-button" size="xs" :icon-only="true" variant="tertiary" @click="handleClose">
          <i class="i-tabler:x" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@youcan/styles/alert";
</style>

<script setup lang="ts">
import { useSlots } from 'vue';
import type { ToastProps } from '~/types';
import { Alert } from '~/components';

withDefaults(
  defineProps<ToastProps>(),
  {
    position: 'top-right',
    canClose: true,
    type: 'info',
  },
);
const emit = defineEmits(['close']);

const { title, description } = useSlots();
</script>

<template>
  <Transition :name="position">
    <div v-if="show" class="toast-block" :class="[position, { relative }]">
      <Alert :type="type" :can-close="canClose" :close-after-duration="closeAfterDuration" @close="emit('close')">
        <template v-if="title" #title>
          <slot name="title" />
        </template>
        <template v-if="description" #description>
          <slot name="description" />
        </template>
      </Alert>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
$edges-margin: 20px;
$animation-duration: 0.3s;

.toast-block {
  &:not(.relative) {
    position: fixed;
    z-index: 9999999999;

    &.top {
      &-right,
      &-left {
        top: $edges-margin;
      }
    }

    &.bottom {
      &-right,
      &-left {
        bottom: $edges-margin;
      }
    }

    &.bottom,
    &.top {
      &-right {
        right: $edges-margin;
      }

      &-left {
        left: $edges-margin;
      }
    }
  }
}

.top-right-enter-active,
.bottom-right-enter-active {
  animation: right $animation-duration ease-in-out;
}

.top-right-leave-active,
.bottom-right-leave-active {
  animation: right $animation-duration reverse ease-in-out;
}

@keyframes right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.top-left-enter-active,
.bottom-left-enter-active {
  animation: left $animation-duration ease-in-out;
}

.top-left-leave-active,
.bottom-left-leave-active {
  animation: left $animation-duration reverse ease-in-out;
}

@keyframes left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
</style>

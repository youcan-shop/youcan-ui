<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue';
import { Utils } from '@youcan/ui-core';
import { onClickOutside } from '@vueuse/core';
import type { ToastContainerProps, ToastOptions, ToastType } from './types';
import Toast from './internal/Toast.vue';

const props = withDefaults(defineProps<ToastContainerProps>(), {
  position: 'top-right',
  limit: 3,
  duration: 5000,
});

const toasts = ref<ToastType[]>([]);
const activeToasts = ref<string[]>([]);
const body = ref();
const scroller = ref();
const showAll = ref(false);
const hideContainer = ref(false);
const mouseOver = ref(false);

let stackTimer: ReturnType<typeof setTimeout>;

const closeAfterDuration = (afterDuration: number | undefined) => {
  if (afterDuration) {
    return afterDuration;
  }

  return props.duration;
};

const showAllToasts = (show = true) => {
  showAll.value = show;
  mouseOver.value = show;
  let direction = 1;
  if (props.position.includes('bottom')) {
    direction = -1;
  }
  let translateX = 0;
  for (const id of activeToasts.value.slice().reverse()) {
    const el = document.getElementById(id);
    if (el && show) {
      const transform = `scale(1) translateY(${translateX * direction}px)`;
      translateX += el.clientHeight;
      el.style.transform = transform;
    }
    else {
      el?.removeAttribute('style');
    }
  }
  if (body.value) {
    body.value.style.height = `${translateX}px`;
  }

  clearTimeout(stackTimer);
};

const messageListener = (event: any) => {
  if (event.data?.id && event.data.id === 'show-toast') {
    const options: ToastOptions = event.data.options;
    const id = Utils.uid('toast');
    const toast: ToastType = {
      id,
      options,
    };
    toasts.value.push(toast);
    nextTick(() => {
      activeToasts.value.push(id);
      hideContainer.value = true;
      nextTick(() => {
        if (activeToasts.value.length > props.limit && props.limit > 0) {
          const to = activeToasts.value.length - props.limit;
          activeToasts.value.splice(0, to);
        }

        if (showAll.value) {
          showAllToasts();
          if (scroller.value && props.position.includes('bottom')) {
            scroller.value.scrollTop = scroller.value.scrollHeight;
          }
        }
      });
    });
  }
};

const close = (id: string) => {
  const index = activeToasts.value.indexOf(id);
  if (index > -1) {
    activeToasts.value.splice(index, 1);
    nextTick(() => {
      hideContainer.value = activeToasts.value.length > 0;
      if (showAll.value) {
        nextTick(() => {
          showAllToasts();
        });
      }
    });
  }
};

const toastVisibility = (id: string) => {
  return activeToasts.value.includes(id);
};
const mouseLeave = () => {
  stackTimer = setTimeout(() => {
    showAllToasts(false);
  }, 500);
};

onClickOutside(body, () => showAllToasts(false));

onMounted(() => {
  window.addEventListener('message', messageListener);
});
</script>

<template>
  <Transition name="fade">
    <div v-show="hideContainer" ref="scroller" class="toast" :class="[position, { 'show-all': showAll }]" @mouseover="showAllToasts()" @mouseleave="mouseLeave">
      <div ref="body" class="toast-body">
        <Toast
          v-for="(toast, index) in toasts" :id="toast.id" :key="index" :position="position" :type="toast.options?.type"
          :show="toastVisibility(toast.id)"
          :close-after-duration="closeAfterDuration(toast.options?.duration)"
          :can-close="toast.options?.canClose"
          :mouse-over="mouseOver"
          @close="close(toast.id)"
        >
          <template v-if="toast.options?.title" #title>
            {{ toast.options?.title }}
          </template>
          <template v-if="toast.options?.description" #description>
            {{ toast.options?.description }}
          </template>
        </Toast>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.toast {
  position: fixed;
  z-index: 9999999999;
  box-sizing: border-box;
  width: max-content;
  max-width: 100%;
  height: max-content;
  max-height: 100vh;
  padding: 20px;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}

.toast::-webkit-scrollbar {
  width: 0;
}

.toast::-webkit-scrollbar-track {
  background: transparent;
}

.toast-body {
  position: relative;
  width: 400px;
  max-width: 100%;
  min-height: 100px;
}

.toast-body .toast-block {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform-origin: top center;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  user-select: none;
}

.toast-body .toast-block:not(:nth-last-child(3), :nth-last-child(2), :last-child) {
  transform: scale(0.85) translateY(-24px);
  opacity: 0;
}

.toast-body .toast-block:nth-last-child(3) {
  z-index: 1;
  transform: scaleX(0.9) translateY(-16px);
}

.toast-body .toast-block:nth-last-child(2) {
  z-index: 2;
  transform: scaleX(0.95) translateY(-8px);
}

.toast-body .toast-block:last-child {
  z-index: 3;
  transform: scaleX(1) translateY(0);
}

.toast.show-all {
  overflow: hidden auto;
}

.toast.show-all .toast-block {
  opacity: 1;
}

.toast.top-left,
.toast.top-right {
  top: 0;
}

.toast.bottom-left,
.toast.bottom-right {
  bottom: 0;
}

.toast.bottom-left .toast-body,
.toast.bottom-right .toast-body {
  display: flex;
  flex-direction: column-reverse;
}

.toast.bottom-left .toast-body .toast-block,
.toast.bottom-right .toast-body .toast-block {
  top: unset;
  bottom: 0;
  transform-origin: bottom center;
}

.toast.bottom-left .toast-body .toast-block:not(:nth-last-child(3), :nth-last-child(2), :last-child),
.toast.bottom-right .toast-body .toast-block:not(:nth-last-child(3), :nth-last-child(2), :last-child) {
  transform: scale(0.85) translateY(24px);
  opacity: 0;
}

.toast.bottom-left .toast-body .toast-block:nth-last-child(3),
.toast.bottom-right .toast-body .toast-block:nth-last-child(3) {
  z-index: 1;
  transform: scaleX(0.9) translateY(16px);
}

.toast.bottom-left .toast-body .toast-block:nth-last-child(2),
.toast.bottom-right .toast-body .toast-block:nth-last-child(2) {
  z-index: 2;
  transform: scaleX(0.95) translateY(8px);
}

.toast.top-right,
.toast.bottom-right {
  right: 0;
}

.toast.top-left,
.toast.bottom-left {
  left: 0;
}

.fade-enter-active {
  animation: fade 0.2s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.2s reverse ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

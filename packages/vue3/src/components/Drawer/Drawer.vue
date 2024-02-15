<script lang="ts" setup>
import { onMounted, onUnmounted, useSlots } from 'vue';
import type { DrawerProps } from '~/types';
import Overlay from '~/components/Overlay/Overlay.vue';

const props = withDefaults(defineProps<DrawerProps>(), {
  visible: false,
  position: 'right',
});

const emit = defineEmits(['update:visible']);

const slots = useSlots();

const close = () => {
  emit('update:visible', false);
};

const handleKeypress = (event: KeyboardEvent) => {
  if (props.visible && event.key === 'Escape') {
    close();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeypress);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeypress);
});
</script>

<template>
  <Transition name="fade">
    <Overlay v-show="visible" class="drawer-overlay" :class="position" @on-backdrop-click="close">
      <Transition :name="position">
        <div v-if="visible" class="drawer">
          <div class="header">
            <div class="close" @click="close">
              <i class="i-youcan-x" />
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div v-if="slots.footer" class="footer">
            <slot name="footer" />
          </div>
        </div>
      </Transition>
    </Overlay>
  </Transition>
</template>

<style scoped lang="scss">
$duration: 0.45s;

.drawer-overlay {
  flex-direction: row-reverse;
  align-items: flex-start;

  .drawer {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: max-content;
    max-width: 80vw;
    overflow: hidden;
    border: 1px solid var(--gray-200);
    background-color: var(--base-white);
    box-shadow: var(--shadow-md-gray);

    @media only screen and (max-width: 992px) {
      max-width: 100vw;
    }

    > * {
      box-sizing: border-box;
      width: 100%;
    }

    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 20px;
      border-bottom: 1px solid var(--gray-100);

      .close {
        cursor: pointer;

        i {
          color: var(--gray-500);
        }
      }
    }

    .footer {
      padding: 10px 20px;
      border-top: 1px solid var(--gray-100);
    }

    .body {
      flex: 1;
      padding: 14px 20px;
      overflow-y: auto;
      font: var(--text-md-regular);

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: var(--brand-500);
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: var(--brand-500);
      }
    }
  }

  &.left {
    flex-direction: row;

    .drawer {
      .header {
        flex-direction: row-reverse;
      }
    }
  }

  > :deep(.body) {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
  }
}

.fade-enter-active {
  animation: fade $duration ease-in-out;
}

.fade-leave-active {
  animation: fade $duration reverse ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.right-enter-active {
  animation: right $duration ease-in-out;
}

.right-leave-active {
  animation: right $duration reverse ease-in-out;
}

@keyframes right {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
}

.left-enter-active {
  animation: left $duration ease-in-out;
}

.left-leave-active {
  animation: left $duration reverse ease-in-out;
}

@keyframes left {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}

html[dir="rtl"] {
  .drawer-overlay {
    flex-direction: row;
    align-items: flex-start;
    direction: rtl;

    &.left {
      flex-direction: row-reverse;
    }
  }
}
</style>

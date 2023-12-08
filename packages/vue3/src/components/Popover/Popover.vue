<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { ref, useSlots } from 'vue';
import type { ObjectFit } from './types';
const props = withDefaults(defineProps<{
  position?: 'left' | 'right' | 'top' | 'bottom'
  show?: boolean
  imgSrc?: string
  objectFit?: ObjectFit
}>(), {
  position: 'left',
  objectFit: 'cover',
});
const emit = defineEmits(['clickOutside']);

const popover = ref();

const slots = useSlots();

const transitionName = () => {
  switch (props.position) {
    case 'left':
    case 'right':
      return 'fade-hr';

    default:
      return 'fade-vr';
  }
};

onClickOutside(popover, () => {
  emit('clickOutside');
});
</script>

<template>
  <div ref="popover" class="popover">
    <Transition :name="transitionName()">
      <div v-if="show" class="popover-trigger" :class="position">
        <div class="content">
          <div v-if="imgSrc" class="image">
            <img :src="imgSrc">
          </div>
          <div v-if="slots.title" class="title">
            <slot name="title" />
          </div>
          <div v-if="slots.description" class="description">
            <slot name="description" />
          </div>
        </div>
        <div v-if="slots.footer" class="footer">
          <slot name="footer" />
        </div>
      </div>
    </Transition>
    <slot />
  </div>
</template>

<style scoped lang="scss">
$margin: 24px;
$caret-size: 22px;
$caret-border: 1px solid var(--gray-300);

.popover {
  position: relative;

  &-trigger {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 400px;
    max-width: calc(100vw - 40px);
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    background-color: var(--base-white);
    box-shadow: var(--shadow-xl-gray);

    &::after {
      content: "";
      position: absolute;
      width: $caret-size;
      height: $caret-size;
      border-top: $caret-border;
      border-right: $caret-border;
      border-top-right-radius: 2px;
      background-color: var(--base-white);
    }

    > * {
      box-sizing: border-box;
      width: 100%;
    }

    .content {
      display: flex;
      flex-direction: column;
      row-gap: 6px;
      padding: 24px;
      font: var(--text-sm-regular);

      .image {
        width: 100%;
        height: 220px;
        margin-bottom: 14px;
        overflow: hidden;
        border-radius: 8px;

        img {
          width: 100%;
          height: 100%;
          object-fit: v-bind(objectFit);
        }
      }
    }

    .title {
      color: var(--gray-900);
      font: var(--text-md-bold);
    }

    .description {
      color: var(--gray-600);
    }

    .footer {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      padding: 18px 24px;
      column-gap: 20px;
      border-top: 1px solid var(--gray-100);
      border-radius: 0 0 8px 8px;
      background-color: var(--gray-50);
    }

    &.left,
    &.right {
      top: -12px;

      &::after {
        top: 24px;
      }
    }

    &.left {
      right: calc(100% + $margin);

      &::after {
        left: calc(100% - calc($caret-size / 2));
        transform: rotate(45deg);
      }
    }

    &.right {
      left: calc(100% + $margin);

      &::after {
        right: calc(100% - calc($caret-size / 2));
        transform: rotate(-135deg);
      }
    }

    &.top,
    &.bottom {
      left: 50%;
      transform: translateX(-50%);

      &::after {
        left: calc(50% - calc($caret-size / 2));
      }
    }

    &.top {
      bottom: calc(100% + $margin);

      &::after {
        top: calc(100% - calc($caret-size / 2));
        transform: rotate(135deg);
        background-color: var(--gray-50);
      }
    }

    &.bottom {
      top: calc(100% + $margin);

      &::after {
        bottom: calc(100% - calc($caret-size / 2));
        transform: rotate(-45deg);
      }
    }
  }
}

.fade-hr-enter-active {
  animation: fade-hr 0.25s ease-in-out;
}

.fade-hr-leave-active {
  animation: fade-hr 0.25s reverse ease-in-out;
}

@keyframes fade-hr {
  0% {
    transform: scale(0.98);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-vr-enter-active {
  animation: fade-vr 0.25s ease-in-out;
}

.fade-vr-leave-active {
  animation: fade-vr 0.25s reverse ease-in-out;
}

@keyframes fade-vr {
  0% {
    transform: scale(0.98) translateX(-50%);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

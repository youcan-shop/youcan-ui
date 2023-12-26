<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { onMounted, onUnmounted, ref, useSlots } from 'vue';
import { setPosition } from '../Tooltip/utils';
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
const emit = defineEmits(['update:show']);

const popover = ref();
const element = ref();
const popoverTrigger = ref();
const top = ref('0px');
const left = ref('0px');
const currentPosition = ref('');

const slots = useSlots();

const setPopoverPosition = () => {
  if (popoverTrigger.value && element.value) {
    const position = setPosition(popoverTrigger.value, element.value, props.position, 22);
    top.value = `${position.top}px`;
    left.value = `${position.left}px`;
    currentPosition.value = position.currentPosition;
  }
};

onClickOutside(popover, () => {
  emit('update:show', false);
});

const handleScroll = () => {
  emit('update:show', false);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', setPopoverPosition);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', setPopoverPosition);
});
</script>

<template>
  <div ref="popover" class="popover">
    <Transition name="fade">
      <div v-if="show" ref="popoverTrigger" class="popover-trigger" :class="[currentPosition, { 'has-footer': slots.footer }]">
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
    <div ref="element" @click="setPopoverPosition();">
      <slot />
    </div>
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
    position: fixed;
    z-index: 9999999999;
    top: v-bind(top);
    left: v-bind(left);
    flex-direction: column;
    width: 400px;
    max-width: calc(100vw - 40px);
    min-height: 70px;
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
      &::after {
        top: calc(50% - calc($caret-size / 2));
      }
    }

    &.left {
      &::after {
        left: calc(100% - calc($caret-size / 2));
        transform: rotate(45deg);
      }
    }

    &.right {
      &::after {
        right: calc(100% - calc($caret-size / 2));
        transform: rotate(-135deg);
      }
    }

    &.top,
    &.bottom {
      &::after {
        left: calc(50% - calc($caret-size / 2));
      }
    }

    &.top {
      &::after {
        top: calc(100% - calc($caret-size / 2));
        transform: rotate(135deg);
      }

      &.has-footer {
        &::after {
          background-color: var(--gray-50);
        }
      }
    }

    &.bottom {
      &::after {
        bottom: calc(100% - calc($caret-size / 2));
        transform: rotate(-45deg);
      }
    }
  }
}

.fade-enter-active {
  animation: fade 0.25s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.25s reverse ease-in-out;
}

@keyframes fade {
  0% {
    transform: scale(0.98);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

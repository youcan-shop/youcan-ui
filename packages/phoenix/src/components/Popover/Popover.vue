<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { onMounted, onUnmounted, ref, useSlots } from 'vue';
import type { PopoverProps } from '~/types';
import { setPosition } from '~/helpers';
const props = withDefaults(defineProps<PopoverProps>(), {
  position: 'left',
  objectFit: 'cover',
});
const emit = defineEmits(['update:show']);

const popover = ref();
const trigger = ref();
const triangle = ref();
const triggeredElement = ref();
const top = ref('0px');
const left = ref('0px');
const currentPosition = ref('');

const slots = useSlots();

const setPopoverPosition = () => {
  if (triggeredElement.value && trigger.value) {
    let position = setPosition(triggeredElement.value, trigger.value, props.position, 22);
    if (position.left < 0 && position.currentPosition === 'left') {
      position = setPosition(triggeredElement.value, trigger.value, 'top', 22);
    }
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
  <div ref="popover" class="popover" :class="[currentPosition, { 'has-footer': slots.footer }]">
    <Transition name="fade">
      <div v-if="show" ref="triggeredElement" class="triggered-element">
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
    <div ref="trigger" class="trigger" @click="setPopoverPosition();">
      <slot />
    </div>
    <div ref="triangle" class="triangle" :class="[{ show }]" />
  </div>
</template>

<style scoped>
.popover {
  --caret-size: 22px;
  --caret-border: 1px solid var(--gray-300);

  position: relative;
}

.popover .trigger {
  width: max-content;
  max-width: 100%;
}

.popover .triggered-element {
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
}

.popover .triangle {
  visibility: hidden;
  position: absolute;
  z-index: 9999999999;
  width: var(--caret-size);
  height: var(--caret-size);
  transition: opacity 250ms linear;
  border-top: var(--caret-border);
  border-right: var(--caret-border);
  border-top-right-radius: 2px;
  opacity: 0;
  background-color: var(--base-white);
}

.popover .triangle.show {
  visibility: visible;
  opacity: 1;
}

.popover .triggered-element > * {
  box-sizing: border-box;
  width: 100%;
}

.popover .triggered-element .content {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding: 24px;
  font: var(--text-sm-regular);
}

.popover .triggered-element .content .image {
  width: 100%;
  height: 220px;
  margin-bottom: 14px;
  overflow: hidden;
  border-radius: 8px;
}

.popover .triggered-element .content .image img {
  width: 100%;
  height: 100%;
  object-fit: v-bind(objectFit);
}

.popover .triggered-element .title {
  color: var(--gray-900);
  font: var(--text-md-bold);
}

.popover .triggered-element .description {
  color: var(--gray-600);
}

.popover .triggered-element .footer {
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

.popover.left .triangle,
.popover.right .triangle {
  top: calc(50% - var(--caret-size) / 2);
}

.popover.left .triangle {
  right: calc(100% + 9px);
  transform: rotate(45deg);
}

.popover.right .triangle {
  left: calc(100% + 11px);
  transform: rotate(-135deg);
}

.popover.top .triangle,
.popover.bottom .triangle {
  left: calc(50% - var(--caret-size) / 2);
}

.popover.top .triangle {
  bottom: calc(100% + 9px);
  transform: rotate(135deg);
}

.popover.bottom .triangle {
  top: calc(100% + 11px);
  transform: rotate(-45deg);
}

.popover.top.has-footer .triangle {
  background-color: var(--gray-50);
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

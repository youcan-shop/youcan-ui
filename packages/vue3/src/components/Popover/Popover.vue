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
const triggeredElement = ref();
const top = ref('0px');
const left = ref('0px');
const currentPosition = ref('');

const slots = useSlots();

const setPopoverPosition = () => {
  if (triggeredElement.value && trigger.value) {
    const position = setPosition(triggeredElement.value, trigger.value, props.position, 22);
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
      <div v-if="show" ref="triggeredElement" class="triggered-element" :class="[currentPosition, { 'has-footer': slots.footer }]">
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
    <div ref="trigger" @click="setPopoverPosition();">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.popover {
  --caret-size: 22px;
  --caret-border: 1px solid var(--gray-300);

  position: relative;
}

.triggered-element {
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

.triggered-element::after {
  content: "";
  position: absolute;
  width: var(--caret-size);
  height: var(--caret-size);
  border-top: var(--caret-border);
  border-right: var(--caret-border);
  border-top-right-radius: 2px;
  background-color: var(--base-white);
}

.triggered-element > * {
  box-sizing: border-box;
  width: 100%;
}

.triggered-element .content {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding: 24px;
  font: var(--text-sm-regular);
}

.triggered-element .content .image {
  width: 100%;
  height: 220px;
  margin-bottom: 14px;
  overflow: hidden;
  border-radius: 8px;
}

.triggered-element .content .image img {
  width: 100%;
  height: 100%;
  object-fit: v-bind(objectFit);
}

.triggered-element .title {
  color: var(--gray-900);
  font: var(--text-md-bold);
}

.triggered-element .description {
  color: var(--gray-600);
}

.triggered-element .footer {
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

.triggered-element.left::after,
.triggered-element.right::after {
  top: calc(50% - var(--caret-size) / 2);
}

.triggered-element.left::after {
  left: calc(100% - var(--caret-size) / 2);
  transform: rotate(45deg);
}

.triggered-element.right::after {
  right: calc(100% - var(--caret-size) / 2);
  transform: rotate(-135deg);
}

.triggered-element.top::after,
.triggered-element.bottom::after {
  left: calc(50% - var(--caret-size) / 2);
}

.triggered-element.top::after {
  top: calc(100% - var(--caret-size) / 2);
  transform: rotate(135deg);
}

.triggered-element.top.has-footer::after {
  background-color: var(--gray-50);
}

.triggered-element.bottom::after {
  bottom: calc(100% - var(--caret-size) / 2);
  transform: rotate(-45deg);
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

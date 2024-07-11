<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { AccordionItemProps } from '~/types';

const props = withDefaults(defineProps<AccordionItemProps>(), {
  show: false,
  duration: 200,
});

const emit = defineEmits(['toggle']);

const content = ref();
const hide = ref(true);
const focus = ref(false);
const maxHeight = ref(`${400}px`);

const durationFormat = computed(() => {
  return `${props.duration}ms`;
});

const showCollapse = computed(() => (props.show || hide.value) && !props.disabled);
const focused = computed(() => focus.value && !props.disabled);

function toggle() {
  if (props.disabled) {
    return;
  }
  emit('toggle');
}

onMounted(() => {
  if (content.value) {
    const mH = content.value.offsetHeight;
    maxHeight.value = `${mH}px`;
  }
  hide.value = false;
});
</script>

<template>
  <div
    class="accordion-item" :class="[{ disabled }, { focused }]"
    @focusin="() => focus = true"
    @focusout="() => focus = false"
  >
    <button class="trigger" @click="toggle">
      <span class="label">{{ label }}</span>
      <i class="i-youcan-carret-down" :class="{ rotate: showCollapse }" />
    </button>
    <Transition name="collapse">
      <div v-if="showCollapse" class="collapse" :class="{ hide }">
        <div ref="content" class="content">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.accordion-item {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  background-color: var(--base-white);
}

.accordion-item.focused {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.accordion-item .trigger {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 16px;
  overflow: hidden;
  column-gap: 20px;
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

.accordion-item .trigger .label {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  max-width: 100%;
  overflow: hidden;
  color: var(--gray-900);
  font: var(--text-md-medium);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.accordion-item .trigger i {
  width: 20px;
  height: 20px;
  transition: all 200ms linear;
  color: var(--gray-500);
}

.accordion-item .trigger i.rotate {
  transform: rotate(180deg);
}

.accordion-item .collapse {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.accordion-item .collapse.hide {
  height: 0;
}

.accordion-item .collapse .content {
  padding: 0 16px 16px;
  color: var(--gray-400);
  font: var(--text-md-regular);
}

.accordion-item.disabled .trigger {
  cursor: not-allowed;
}

.accordion-item.disabled .trigger .label,
.accordion-item.disabled .trigger i {
  color: var(--gray-400);
}

.collapse-enter-active {
  animation: collapse v-bind(durationFormat) linear;
}

.collapse-leave-active {
  animation: collapse v-bind(durationFormat) reverse linear;
}

@keyframes collapse {
  0% {
    max-height: 0;
    opacity: 0;
  }

  100% {
    max-height: v-bind(maxHeight);
    opacity: 1;
  }
}
</style>

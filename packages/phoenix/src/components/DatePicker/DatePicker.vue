<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { Button, Calendar } from '~/components';
import { dateFormat, setPosition } from '~/helpers';
import type { DatePickerProps } from '~/types';

const props = withDefaults(defineProps<DatePickerProps>(), {
  locale: 'en',
});

const emit = defineEmits(['update:modelValue']);

const fromDate = ref<Date | null>(props.modelValue);

const show = ref(false);
const calendarWrap = ref();
const datePicker = ref();

function updateModel(value: Date | null) {
  emit('update:modelValue', value);
}

function ListPosition() {
  show.value = !show.value;
  nextTick(() => {
    if (datePicker.value && calendarWrap.value) {
      const { top } = setPosition(calendarWrap.value, datePicker.value, 'bottom', 8);
      calendarWrap.value?.setAttribute('style', `top:${top}px;`);
    }
  });
}
</script>

<template>
  <div ref="datePicker" class="date-picker">
    <Button variant="secondary" class="picker-output" @click="ListPosition">
      <span class="input-value">{{ dateFormat(modelValue, locale) }}</span>
      <i class="i-youcan:calendar-blank" />
    </Button>
    <Transition name="animate">
      <div v-if="show" ref="calendarWrap" class="calendar-wrap">
        <Calendar v-model="fromDate" :locale="locale" @update:model-value="updateModel" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.date-picker {
  --duration: 150ms;

  box-sizing: border-box;
  width: 100%;
}

.date-picker .picker-output {
  width: 100%;
  padding: 12px 16px;
}

.date-picker .picker-output:deep(.label) {
  width: 100%;
}

.date-picker .picker-output .input-value {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.date-picker .calendar-wrap {
  position: fixed;
  z-index: 9999999999;
}

.animate-enter-active {
  animation: animate var(--duration) ease-in-out;
}

.animate-leave-active {
  animation: animate var(--duration) reverse ease-in-out;
}

@keyframes animate {
  0% {
    transform: scale(0.99);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { Presets } from './Internal';
import { Button, Calendar } from '~/components';
import { dateFormat, isRTL, isSameDate, setPosition } from '~/helpers';
import type { DatePickerProps, DateRangeValue, DateValue, Preset } from '~/types';

const props = withDefaults(defineProps<DatePickerProps>(), {
  locale: 'en',
  closeOnSelect: true,
  presetsTitle: 'Presets',
});

const emit = defineEmits(['update:modelValue', 'update:range', 'update:presets']);

const date = ref<DateValue>(props.modelValue);
const rangeDate = ref<DateRangeValue>(props.range);

const show = ref(false);
const calendarWrap = ref();
const datePicker = ref();

const hasPresets = computed(() => props.presets && props.presets.length && props.range);

const datesFormat = computed(() => {
  const { modelValue, locale, range } = props;
  if (modelValue) {
    return dateFormat(modelValue, locale);
  }

  if (range) {
    if (range.start || range.end) {
      return `${range.start ? dateFormat(range.start, locale) : ''} ${range.end ? ` - ${dateFormat(range.end, locale)}` : ''}`;
    }

    return '';
  }

  return '';
});

function close() {
  if (props.closeOnSelect) {
    show.value = false;
  }
}
function updateModel(value: DateValue) {
  emit('update:modelValue', value);
  close();
}

function updateRange(value: DateRangeValue) {
  emit('update:range', value);
  if (value && value.start && value.end) {
    close();
  }
}

function ShowPicker() {
  show.value = !show.value;
  PickerPosition();
}

function PickerPosition() {
  nextTick(() => {
    if (datePicker.value && calendarWrap.value) {
      const { top, left } = setPosition(calendarWrap.value, datePicker.value, 'bottom', 8, false, isRTL());
      calendarWrap.value?.setAttribute('style', `top:${top}px;${isRTL() ? 'right' : 'left'}:${left}px;`);
    }
  });
}

function selectPreset(index: number) {
  const presets = props.presets;
  presets?.forEach((_, i) => {
    presets[i].active = i === index;
  });
  emit('update:presets', presets);
  presetChanged(presets);
}

function presetChanged(presets: Preset[] | undefined) {
  if (hasPresets.value) {
    const activePreset = presets?.find(preset => (preset.active && preset.start && preset.end));
    if (activePreset) {
      rangeDate.value = { start: activePreset.start, end: activePreset.end };
      emit('update:range', rangeDate.value);
    }
  }
}

function handleResize() {
  PickerPosition();
}

onMounted(() => {
  const { presets } = props;
  presetChanged(presets);

  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

onClickOutside(datePicker, () => show.value = false);

watch(() => props.range, (newValue) => {
  const { presets } = props;
  if (presets?.length) {
    const start = (newValue?.start as Date);
    const end = (newValue?.end as Date);
    const index = presets.findIndex((preset: Preset) => isSameDate(start, preset.start) && isSameDate(end, preset.end));
    if (index > -1 && presets[index].active) {
      return;
    }
    selectPreset(index);
  }
});
</script>

<template>
  <div ref="datePicker" class="date-picker" :class="{ rtl: isRTL() }">
    <Button variant="secondary" class="picker-output" :class="{ placeholder: !datesFormat }" @click="ShowPicker">
      <span class="input-value">{{ datesFormat || placeholder }}</span>
      <i class="i-youcan:calendar-blank" />
    </Button>
    <Transition name="animate">
      <div v-if="show" ref="calendarWrap" class="date-picker-container" :class="{ 'has-presets': hasPresets }">
        <Presets v-if="hasPresets" :presets="presets" :presets-title="presetsTitle" @select="selectPreset" />
        <Calendar
          v-model="date"
          v-model:range="rangeDate"
          :locale="locale"
          @update:model-value="updateModel"
          @update:range="updateRange"
        />
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

.date-picker .picker-output i {
  color: var(--gray-500);
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

.date-picker .picker-output.placeholder .input-value {
  color: var(--gray-400);
}

.date-picker .date-picker-container {
  display: grid;
  position: fixed;
  z-index: 9999999999;
  grid-template-columns: repeat(2, auto);
  overflow: hidden;
  background-color: var(--base-white);
}

.date-picker .date-picker-container.has-presets {
  border: 1px solid var(--gray-200);
  border-radius: 8px;
}

.date-picker .date-picker-container.has-presets:deep(.calendar) {
  border: 0;
  border-radius: 0;
}

.date-picker.rtl:deep(.navigation-button) {
  transform: rotate(180deg);
}

.date-picker.rtl:deep(.presets .presets-list) {
  border-right: 0;
  border-left: 1px solid var(--gray-200);
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

@media only screen and (max-width: 768px) {
  .date-picker .date-picker-container {
    grid-template-columns: repeat(1, auto);
  }

  .date-picker.rtl:deep(.presets .presets-list) {
    border-right: 0;
    border-left: 0;
  }
}
</style>

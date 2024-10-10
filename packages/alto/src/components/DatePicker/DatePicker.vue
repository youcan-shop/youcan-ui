<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { Calendar, Presets } from './Internal';
import { maxCalendarDate, minCalendarDate } from './options';
import { Button } from '~/components';
import { dateFormat, isMoreThan, isRTL, isSameDate, setPosition } from '~/helpers';
import type { DatePickerProps, DateRangeValue, DateValue, Preset } from '~/types';

const props = withDefaults(defineProps<DatePickerProps>(), {
  locale: 'en',
  closeOnSelect: true,
  presetsTitle: 'Presets',
  applyLabel: 'Apply',
  cancelLabel: 'Cancel',
});
const emit = defineEmits(['update:modelValue', 'update:range', 'update:presets', 'onCanceled', 'onApplied']);

const date = ref<DateValue>(props.modelValue);
const rangeDate = ref<DateRangeValue>(props.range);
const oldValue = ref<DateRangeValue | DateValue>(null);

const show = ref(false);
const calendarWrap = ref();
const datePicker = ref();

const hasPresets = computed(() => props.presets && props.presets.length && props.range);

const min = computed(() => {
  const { minDate, maxDate } = props;
  let minValue = minCalendarDate;
  if (minDate && isMoreThan(minDate, minCalendarDate)) {
    minValue = minDate;
    if (maxDate && isMoreThan(minValue, maxDate)) {
      minValue = maxDate;
    }
  }

  return minValue;
});

const max = computed(() => {
  const { maxDate } = props;
  if (maxDate && isMoreThan(maxCalendarDate, maxDate)) {
    return maxDate;
  }

  return maxCalendarDate;
});

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

function canceled() {
  if (props.range) {
    const _range = (oldValue.value as DateRangeValue);
    updateRange(_range);
    rangeDate.value = _range;
  }
  else {
    const _date = (oldValue.value as DateValue);
    updateModel(_date);
    date.value = _date;
  }
  emit('onCanceled');
  show.value = false;
}

function applied() {
  emit('onApplied');
  show.value = false;
}

function ShowPicker() {
  show.value = !show.value;
  nextTick(() => {
    if (show.value) {
      if (props.range) {
        oldValue.value = props.range;
      }
      else {
        oldValue.value = props.modelValue;
      }
    }
  });
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

function disablePreset(preset: Preset) {
  return isMoreThan(min.value, preset.start)
  || isMoreThan(preset.start, max.value)
  || isMoreThan(preset.end, max.value)
  || isMoreThan(min.value, preset.end);
}

function selectPreset(index: number) {
  const presets = props.presets;
  presets?.forEach((_, i) => {
    presets[i].active = i === index;
    presets[i].disabled = disablePreset(presets[i]);
  });
  emit('update:presets', presets);
  presetChanged(presets);
}

function presetChanged(presets: Preset[] | undefined) {
  if (hasPresets.value) {
    const activePreset = presets?.find(preset => (preset.active && preset.start && preset.end));
    if (activePreset) {
      rangeDate.value = { start: activePreset.start, end: activePreset.end };
      nextTick(() => {
        emit('update:range', rangeDate.value);
      });
    }
  }
}

function checkRange(range: DateRangeValue) {
  if (range) {
    const start = (range?.start as Date);
    const end = (range?.end as Date);
    const rangeValue = { start, end };

    if (isMoreThan(min.value, start) || isMoreThan(start, max.value)) {
      rangeValue.start = min.value;
    }

    if (isMoreThan(end, max.value) || isMoreThan(min.value, end)) {
      rangeValue.end = max.value;
    }

    rangeDate.value = rangeValue;
    emit('update:range', rangeValue);
  }
}

function checkDate() {
  const { modelValue } = props;
  if (modelValue) {
    let newDate = modelValue;

    if (isMoreThan(newDate, max.value)) {
      newDate = max.value;
    }
    if (isMoreThan(min.value, newDate)) {
      newDate = min.value;
    }
    date.value = newDate;
    emit('update:modelValue', newDate);
  }
}

function handleResize() {
  PickerPosition();
}

function handleScroll() {
  if (show.value) {
    show.value = false;
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);
  const { presets } = props;
  presetChanged(presets);
  checkRange(props.range);
  checkDate();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', handleScroll);
});

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

onClickOutside(datePicker, () => show.value = false);
</script>

<template>
  <div ref="datePicker" class="date-picker" :class="{ rtl: isRTL() }">
    <Button v-if="!alwaysShowCalender" variant="secondary" class="picker-output" :class="{ placeholder: !datesFormat }" @click="ShowPicker">
      <span class="input-value">{{ datesFormat || placeholder }}</span>
      <i class="i-youcan:calendar-blank" />
    </Button>
    <Transition name="animate">
      <div
        v-if="show || alwaysShowCalender" ref="calendarWrap" class="date-picker-container"
        :class="[{ 'has-presets': hasPresets }, { 'always-show-calender': alwaysShowCalender }]"
      >
        <Presets v-if="hasPresets" :presets="presets" :presets-title="presetsTitle" @select="selectPreset" />
        <Calendar
          v-model="date"
          v-model:range="rangeDate"
          :locale="locale"
          :min-date="min"
          :max-date="max"
          @update:model-value="updateModel"
          @update:range="updateRange"
        >
          <div v-if="!closeOnSelect" class="action-bar">
            <Button size="sm" @click="applied">
              {{ applyLabel }}
            </Button>
            <Button size="sm" variant="secondary" @click="canceled">
              {{ cancelLabel }}
            </Button>
          </div>
        </Calendar>
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

.date-picker .action-bar {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid var(--gray-200);
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

.date-picker .date-picker-container.always-show-calender {
  position: initial;
  z-index: unset;
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

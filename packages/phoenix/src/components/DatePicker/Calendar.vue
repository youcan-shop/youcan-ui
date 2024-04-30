<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Days, MonthsSwitcher } from './Internal';
import type { CalendarProps } from '~/types';

const props = defineProps<CalendarProps>();

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: Date | null) => {
    emit('update:modelValue', value);
  },
});

const month = ref(props.modelValue ? props.modelValue : new Date());
</script>

<template>
  <div class="calendar">
    <MonthsSwitcher v-model="month" :locale="locale" />
    <Days v-model="model" :month="month" :locale="locale" />
  </div>
</template>

<style>
.calendar {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: max-content;
  max-width: 100%;
  padding: 12px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  row-gap: 20px;
}
</style>

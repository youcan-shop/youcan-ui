<script setup lang="ts">
import { DateUtils } from '@youcan/ui-core';
import { computed } from 'vue';
import type { MonthSwitcherProps } from './types';
import { Button } from '~/components';

const props = defineProps<MonthSwitcherProps>();

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: Date) => emit('update:modelValue', value),
});

const changeMonth = (increment: boolean) => {
  const newDate = new Date(model.value);
  newDate.setMonth(newDate.getMonth() + (increment ? 1 : -1));

  model.value = newDate;
};
</script>

<template>
  <div class="month-switcher">
    <Button icon-position="only" size="xs" type="button" variant="tertiary" @click="changeMonth(false)">
      <i class="i-youcan-caret-left" />
    </Button>
    <span class="text">{{ DateUtils.getAlphabeticalMonth(model) }} {{ model.getFullYear() }}</span>
    <Button icon-position="only" size="xs" type="button" variant="tertiary" @click="changeMonth(true)">
      <i class="i-youcan-caret-right" />
    </Button>
  </div>
</template>

<style scoped>
.month-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.month-switcher .text {
  color: var(--gray-900);
  font: var(--text-sm-medium);
}
</style>

<script setup lang="ts">
import { DateUtils } from '@youcan/ui-core';
import { computed } from 'vue';
import type { MonthSwitcherProps } from './types';
import { TertiaryButton } from '~/components';

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
    <TertiaryButton icon-position="only" size="xs" type="button" @click="changeMonth(false)">
      <template #icon>
        <i class="i-youcan-caret-left" />
      </template>
    </TertiaryButton>
    <span class="text">{{ DateUtils.getAlphabeticalMonth(model) }} {{ model.getFullYear() }}</span>
    <TertiaryButton icon-position="only" size="xs" type="button" @click="changeMonth(true)">
      <template #icon>
        <i class="i-youcan-caret-right" />
      </template>
    </TertiaryButton>
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

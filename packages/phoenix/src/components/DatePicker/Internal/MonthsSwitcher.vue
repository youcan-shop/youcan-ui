<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { Button } from '~/components';
import { monthToString, navigateToMonth } from '~/helpers';
import type { MonthsSwitcherProps, NavigateDirection } from '~/types';

const props = defineProps<MonthsSwitcherProps>();
const emit = defineEmits(['update:modelValue']);

const MONTH = ref(props.modelValue.getMonth());
const YEAR = ref(props.modelValue.getFullYear());

function update(direction: NavigateDirection = 'next') {
  const nextMonth = navigateToMonth(direction, MONTH.value, YEAR.value);
  MONTH.value = nextMonth.month;
  YEAR.value = nextMonth.year;
  nextTick(() => {
    emit('update:modelValue', new Date(YEAR.value, MONTH.value + 1, 0));
  });
}
</script>

<template>
  <div class="months-switcher">
    <Button variant="tertiary" class="navigation-button" @click="update('previous')">
      <i class="i-youcan:caret-left" />
    </Button>
    <button class="year-label">
      {{ monthToString(MONTH, locale) }} {{ YEAR }}
    </button>
    <Button variant="tertiary" class="navigation-button" @click="update()">
      <i class="i-youcan:caret-right" />
    </Button>
  </div>
</template>

<style scoped>
.months-switcher {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.months-switcher .navigation-button {
  padding: 5px;
}

.months-switcher .navigation-button i {
  width: 18px;
  height: 18px;
  color: var(--gray-500);
}

.months-switcher .year-label {
  border: 0;
  outline: none;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-medium);
  text-transform: capitalize;
  cursor: pointer;
}
</style>

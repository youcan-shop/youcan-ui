<script lang="ts" setup>
import { computed, nextTick } from 'vue';
import { maxCalendarDate, minCalendarDate } from '../options';
import { Button } from '~/components';
import { isSameDate, monthToString, navigateToMonth } from '~/helpers';
import type { MonthsSwitcherProps } from '~/types';

const props = defineProps<MonthsSwitcherProps>();
const emit = defineEmits(['update:modelValue', 'onClick']);

const month = computed({
  get: () => props.modelValue,
  set: (value: Date) => emit('update:modelValue', value),
});

const disableNext = computed(() => isSameDate(month.value, maxCalendarDate));
const disablePrevious = computed(() => isSameDate(month.value, minCalendarDate));

function update(monthCount: number) {
  month.value = navigateToMonth(month.value, monthCount);

  nextTick(() => {
    emit('update:modelValue', month.value);
  });
}
</script>

<template>
  <div class="months-switcher">
    <Button variant="tertiary" class="navigation-button" :disabled="disablePrevious" type="button" @click="update(-1)">
      <i class="i-youcan:caret-left" />
    </Button>
    <div class="year-label">
      <button type="button" @click="() => emit('onClick', 'months')">
        {{ monthToString(month.getMonth(), locale) }}
      </button>
      <button type="button" @click="() => emit('onClick', 'years')">
        {{ month.getFullYear() }}
      </button>
    </div>
    <Button variant="tertiary" class="navigation-button" :disabled="disableNext" type="button" @click="update(1)">
      <i class="i-youcan:caret-right" />
    </Button>
  </div>
</template>

<style scoped>
.months-switcher {
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: space-between;
  user-select: none;
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
  display: flex;
  gap: 2px;
}

.months-switcher .year-label button {
  padding: 0;
  padding: 2px;
  transition: all 150ms ease-in-out;
  border: 0;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-medium);
  text-transform: capitalize;
  cursor: pointer;
}

.months-switcher .year-label button:hover {
  background-color: var(--gray-50);
}

.months-switcher .year-label button:focus {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}
</style>

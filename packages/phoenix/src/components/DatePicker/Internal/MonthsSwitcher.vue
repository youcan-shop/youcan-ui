<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { Button } from '~/components';
import { monthToString, navigateToMonth } from '~/helpers';
import type { MonthsSwitcherProps } from '~/types';

const props = defineProps<MonthsSwitcherProps>();
const emit = defineEmits(['update:modelValue']);

const month = ref(props.modelValue);

function update(monthCount: number) {
  month.value = navigateToMonth(month.value, monthCount);

  nextTick(() => {
    emit('update:modelValue', month.value);
  });
}
</script>

<template>
  <div class="months-switcher">
    <Button variant="tertiary" class="navigation-button" @click="update(-1)">
      <i class="i-youcan:caret-left" />
    </Button>
    <button class="year-label">
      {{ monthToString(month.getMonth(), locale) }} {{ month.getFullYear() }}
    </button>
    <Button variant="tertiary" class="navigation-button" @click="update(1)">
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

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { Button } from '~/components';
import { monthToString } from '~/helpers';

const emit = defineEmits(['update:month']);

const MONTH = ref(new Date().getMonth());
const YEAR = ref(new Date().getFullYear());

function navigate(direction: 'next' | 'previous' = 'next') {
  if (direction === 'next') {
    MONTH.value = MONTH.value < 11 ? MONTH.value + 1 : 0;
    nextTick(() => {
      YEAR.value = MONTH.value === 0 ? YEAR.value + 1 : YEAR.value;
    });
  }

  if (direction === 'previous') {
    MONTH.value = MONTH.value > 0 ? MONTH.value - 1 : 11;
    nextTick(() => {
      YEAR.value = MONTH.value === 11 ? YEAR.value - 1 : YEAR.value;
    });
  }
}
</script>

<template>
  <div class="months-switcher">
    <Button variant="tertiary" class="navigation-button" @click="navigate('previous')">
      <i class="i-youcan:caret-left" />
    </Button>
    <button class="years-label">
      {{ monthToString(MONTH) }} {{ YEAR }}
    </button>
    <Button variant="tertiary" class="navigation-button" @click="navigate()">
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

.months-switcher .years-label {
  border: 0;
  outline: none;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-medium);
  cursor: pointer;
}
</style>

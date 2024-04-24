<script lang="ts" setup>
import { Button } from '~/components';
</script>

<template>
  <div class="months-switcher">
    <Button variant="tertiary" class="navigation-button">
      <i class="i-youcan:caret-left" />
    </Button>
    <button class="years-label">
      December 2022
    </button>
    <Button variant="tertiary" class="navigation-button">
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

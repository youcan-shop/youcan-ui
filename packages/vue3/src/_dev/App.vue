<script setup lang="ts">
import 'uno.css';
import '~/assets/main.css';
import { ref } from 'vue';
import { MultiSwitch } from '~/components';
import type { SwitchButtonOption } from '~/components/MultiSwitch/types';

const OPTIONS: SwitchButtonOption[] = [
  {
    label: 'Mobile',
    value: 1,
    icon: 'i-youcan:device-mobile',
  },
  {
    label: 'Desktop',
    value: 2,
    icon: 'i-youcan:desktop',
  },
  {
    label: 'Tablet',
    value: 3,
    icon: 'i-youcan:credit-card',
  },
  {
    label: 'Console',
    value: 4,
    icon: 'i-youcan:device-mobile',
  },
  {
    label: 'VR',
    value: 5,
    icon: 'i-youcan:desktop',
    disabled: true,
  },
  {
    label: 'TV',
    value: 6,
    icon: 'i-youcan:credit-card',
  },
];

const activeOption = ref<SwitchButtonOption>(OPTIONS[0]);
</script>

<template>
  <div class="container">
    <MultiSwitch v-model:selected-option="activeOption" :options="OPTIONS" />
    <p>{{ activeOption.value }} : {{ activeOption.label }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 32px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: "Mona Sans";
  gap: 32px;
}

.selection-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  padding: 32px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
}
</style>

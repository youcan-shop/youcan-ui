<script setup lang="ts">
import 'uno.css';
import '~/assets/main.css';
import { ref, watch } from 'vue';
import { MultiSwitch } from '~/components';
import type { SwitchButtonOption } from '~/components/MultiSwitch/types';

const OPTIONS: SwitchButtonOption[] = [
  {
    label: 'Mobile',
    icon: 'i-youcan:device-mobile',
    value: 1,
  },
  {
    label: 'Desktop',
    icon: 'i-youcan:desktop',
    value: 2,
  },
  {
    label: 'Tablet',
    icon: 'i-youcan:credit-card',
    value: 3,
  },
  {
    label: 'Console',
    icon: 'i-youcan:device-mobile',
    value: 4,
  },
  {
    label: 'VR',
    icon: 'i-youcan:desktop',
    value: 5,
    disabled: true,
  },
  {
    label: 'TV',
    icon: 'i-youcan:credit-card',
    value: 6,
  },
];

const activeOption = ref<SwitchButtonOption>(OPTIONS[0]);

watch(activeOption, () => {
  console.log(activeOption.value.label);
});
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
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px 0;
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

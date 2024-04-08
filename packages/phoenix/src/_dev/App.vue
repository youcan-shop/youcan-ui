<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { MultiSwitch } from '~/components';
import type { SwitchButtonOption } from '~/types';

const OPTIONS: SwitchButtonOption[] = [
  {
    label: 'Mobile',
    value: 1,
  },
  {
    label: 'Desktop',
    value: 2,
    icon: 'i-youcan:desktop',
  },
  {
    label: 'Tablet',
    value: 3,
    icon: '',
  },
];

const activeOption = ref<SwitchButtonOption>(OPTIONS[0]);
</script>

<template>
  <div class="container">
    <MultiSwitch v-model="activeOption" :options="OPTIONS" />
    <p>{{ activeOption.value }} : {{ activeOption.label }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>

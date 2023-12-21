<script setup lang="ts">
import { ref } from 'vue';
import 'uno.css';
import '../assets/main.css';
import { MultiSwitch, SwitchButton } from '~/components';
import type { SwitchButtonDefinition } from '~/components/MultiSwitch/types';

const activeOption = ref(0);

const handleOptionChange = (value: number) => {
  activeOption.value = value;
};

function setActiveOption(id: number) {
  activeOption.value = id;
}

const OPTIONS: SwitchButtonDefinition[] = [
  {
    label: 'Mobile',
    icon: 'i-youcan:device-mobile',
    value: 'option 1',
  },
  {
    label: 'Desktop',
    icon: 'i-youcan:desktop',
    value: 'option 2',
  },
  {
    label: 'Tablet',
    icon: 'i-youcan:credit-card',
    value: 'option 3',
  },
  {
    label: 'Console',
    icon: 'i-youcan:device-mobile',
    value: 'option 4',
  },
  {
    label: 'VR',
    icon: 'i-youcan:desktop',
    value: 'option 5',
  },
  {
    label: 'TV',
    icon: 'i-youcan:credit-card',
    value: 'option 6',
  },
];
</script>

<template>
  <div class="container">
    <MultiSwitch @option-change="handleOptionChange">
      <SwitchButton
        v-for="(option, index) in OPTIONS"
        :key="option.label"
        :model-value="option.value"
        :label="option.label"
        :icon="option.icon"
        :active="activeOption === index"
        :disabled="false"
        @click="setActiveOption(index)"
      />
    </MultiSwitch>
    <p>{{ OPTIONS[activeOption].value }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

.selected-option {
  margin: 10%;
}
</style>

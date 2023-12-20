<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
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
];
</script>

<template>
  <div class="container">
    <ul>
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
    </ul>
    <ul>
      <MultiSwitch>
        <SwitchButton
          label="label1"
          :active="activeOption === 0"
          @click="setActiveOption(0)"
        />
        <SwitchButton
          label="label2"
          :active="activeOption === 1"
          @click="setActiveOption(1)"
        />
      </MultiSwitch>
    </ul>

    <div class="selected-option">
      <p>selected option :</p>{{ OPTIONS[activeOption].value }}
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

.selected-option {
  margin: 10%;
}
</style>

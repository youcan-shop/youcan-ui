<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { MultiSwitch, SwitchButton } from '~/components';
import type { SwitchButtonDefinition } from '~/components/MultiSwitch/types';

const activeTab = ref(0);

const handleTabChange = (value: number) => {
  activeTab.value = value;
};

function setActiveTab(id: number) {
  activeTab.value = id;
}

const TABS: SwitchButtonDefinition[] = [
  {
    label: 'Mobile',
    icon: 'i-youcan:device-mobile',
    value: 'tab1',
  },
  {
    label: 'Desktop',
    icon: 'i-youcan:desktop',
    value: 'tab2',
  },
  {
    label: 'Tablet',
    icon: 'i-youcan:credit-card',
    value: 'tab3',
  },
];
</script>

<template>
  <div class="container">
    <ul>
      <MultiSwitch @tab-change="handleTabChange">
        <SwitchButton
          v-for="(tab, index) in TABS"
          :key="tab.label"
          :model-value="tab.value"
          :label="tab.label"
          :icon="tab.icon"
          :active="activeTab === index"
          :disabled="false"
          @click="setActiveTab(index)"
        />
      </MultiSwitch>
    </ul>
    <ul>
      <MultiSwitch>
        <SwitchButton
          label="label1"
          icon="tab.icon"
          :active="activeTab === 0"
          @click="setActiveTab(0)"
        />
        <SwitchButton
          label="label2"
          icon="tab.icon"
          :active="activeTab === 1"
          @click="setActiveTab(1)"
        />
      </MultiSwitch>
    </ul>

    <div class="selected-value">
      <p>selected value :</p>{{ TABS[activeTab].value }}
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

.selected-value {
  margin: 10%;
}
</style>

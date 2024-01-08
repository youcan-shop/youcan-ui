<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { StaticStatus, Tab, TabsBar, TextArea, Thumbnail } from '~/components';
import type { StaticStatusDefinition } from '~/components/Status/types';

const activeTab = ref(0);
const comment = ref('');
const imageSrc = 'https://i.imgur.com/YcP0tik.jpeg';
const imageAlt = 'Mr. Shark';
function setActiveTab(id: number) {
  activeTab.value = id;
}

const TABS: { [k: string]: StaticStatusDefinition[] } = {
  Fruits: [
    {
      color: '#ffdecb',
      label: 'Peach 🍑',
      labelColor: '#35192b',
    },
    {
      color: '#fffad2',
      label: 'Banana 🍌',
      labelColor: '#555022',
    },
    {
      color: '#cbffd3',
      label: 'Kiwi 🥝',
      labelColor: '#2c4730',
    },
  ],
  Vegetables: [
    {
      color: '#ffceb9',
      label: 'Je3da 🥕',
      labelColor: '#35192b',
    },
    {
      color: '#fff6d2',
      label: 'Corn 🌽',
      labelColor: '#555022',
    },
    {
      color: '#c4ffc5',
      label: 'Broccoli 🥦',
      labelColor: '#2c4730',
    },
  ],
  Meat: [
    {
      color: '#ffd2d2',
      label: 'Chicken 🐔',
      labelColor: '#35192b',
    },
    {
      color: '#e9e9e9',
      label: 'Lamb 🐏',
      labelColor: '#555022',
    },
    {
      color: '#f7cfb0',
      label: 'Beef 🐮',
      labelColor: '#2c4730',
    },
  ],
};
</script>

<template>
  <div class="container">
    <div class="tab-group">
      <ul class="tab-list">
        <TabsBar>
          <Tab
            v-for="(tab, index) in Object.keys(TABS)"
            :key="tab"
            :label="tab"
            :active="activeTab === index"
            @click="setActiveTab(index)"
          />
        </TabsBar>
      </ul>
      <div class="tab-panels">
        <div
          v-for="(content, index) in Object.values(TABS)"
          v-show="activeTab === index"
          :key="index"
          class="panel"
        >
          <StaticStatus v-for="fruit in content" :key="fruit.color" :status="fruit" />
        </div>
      </div>
    </div>
    <TextArea
      v-model="comment"
      placeholder="Leave your comment"
    />
    <Thumbnail
      :src="imageSrc"
      :alt="imageAlt"
      size="large"
    />
    <Thumbnail
      :src="imageSrc"
      :alt="imageAlt"
      size="small"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 10%;
}

.tab-group {
  border-radius: 8px;
  background-color: transparent;
}

.tab-group .tab-list {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin: 0;
  padding: 0 20px;
  list-style-type: none;
  border-bottom: 1px solid var(--vp-c-divider);
  font: var(--text-md-regular);
}

.tab-group .tab-list .list {
  border-bottom: 0;
}

.tab-group .tab-list .list .tab .label {
  color: red !important;
}

.tab-group .tab-list .tab-item {
  min-width: fit-content;
  padding: 14px 0;
  cursor: pointer;
}

.tab-group .tab-list .tab-item.active {
  border-bottom: 1px solid var(--brand-500);
  color: var(--brand-500);
  font-weight: var(--text-md-medium);
}

.tab-panels {
  display: flex;
  justify-content: center;
  min-height: 200px;
  margin: 16px 0;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.tab-group .tab-panels {
  background-color: var(--base-white);
}

:is(.dark) .tab-group .tab-panels {
  background-color: var(--vp-sidebar-bg-color);
}

.tab-panels .panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  min-width: 100%;
  padding: 20px;
  gap: 0.5rem;
}

.tab-panels .panel .status {
  max-width: 100%;
}

.items-center {
  align-items: center;
}

.items-start {
  align-items: start;
}

.items-end {
  align-items: end;
}
</style>

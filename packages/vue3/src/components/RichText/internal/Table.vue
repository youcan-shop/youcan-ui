<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { Input, PrimaryButton, Tab, TabsBar, TertiaryButton } from '~/components';

const emit = defineEmits(['insert', 'insertRow', 'insertColumn']);

const rows = ref('');
const cols = ref('');

const dropdownRef = ref();
const showDropdown = ref(false);

const setModel = () => {
  emit('insert', { rows: rows.value, cols: cols.value });
};
const insertRow = (position: string) => {
  emit('insertRow', position);
};
const insertColumn = (position: string) => {
  emit('insertColumn', position);
};
const toggleDropdown = (show = !showDropdown.value) => showDropdown.value = show;

onClickOutside(dropdownRef, () => {
  toggleDropdown(false);
});

const activeTab = ref(0);

function setActiveTab(id: number) {
  activeTab.value = id;
}
</script>

<template>
  <div class="input-table">
    <TertiaryButton size="sm" icon-position="only" @click="toggleDropdown()">
      <template #icon>
        <i
          class="i-youcan-table"
        />
      </template>
    </TertiaryButton>
    <div v-show="showDropdown" ref="dropdownRef" class="table-dropdown">
      <ul class="tab-list">
        <TabsBar>
          <Tab
            label="New"
            :active="activeTab === 0"
            @click="setActiveTab(0)"
          />
          <Tab
            label="Edit"
            :active="activeTab === 1"
            @click="setActiveTab(1)"
          />
        </TabsBar>
      </ul>
      <div class="tab-panels">
        <div
          v-show="activeTab === 0"
          class="panel"
        >
          <Input v-model="rows" type="number" placeholder="rows" />
          <Input v-model="cols" type="number" placeholder="columns" />
          <PrimaryButton @click="setModel()">
            <template #icon>
              <i class="i-youcan-plus" />
            </template>
            Insert table
          </PrimaryButton>
        </div>
        <div
          v-show="activeTab === 1"
          class="panel"
        >
          <p class="panel-label">
            Row
          </p>
          <div class="button-block">
            <PrimaryButton @click="insertRow('before')">
              Add Before
            </PrimaryButton>
            <PrimaryButton @click="insertRow('after')">
              Add After
            </PrimaryButton>
          </div>
          <p class="panel-label">
            Column
          </p>
          <div class="button-block">
            <PrimaryButton @click="insertColumn('before')">
              Add Before
            </PrimaryButton>
            <PrimaryButton @click="insertColumn('after')">
              Add After
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-table {
  position: relative;
}

.table-dropdown {
  display: flex;
  position: absolute;
  z-index: 999999;
  flex-direction: column;
  width: 250px;
  margin-top: 10px;
  padding: 0 12px 12px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  gap: 20px;
}

.tab-list {
  margin: 0;
}

.tab-list .list {
  border-bottom: 0;
}

.tab-list .tab-item {
  min-width: fit-content;
  padding: 14px 0;
  cursor: pointer;
}

.tab-list .tab-item.active {
  border-bottom: 1px solid var(--brand-500);
  color: var(--brand-500);
  font-weight: var(--text-md-medium);
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.panel-label {
  margin: 0;
  font: var(--text-sm-bold);
}

.button-block {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;
}

.button-block button {
  width: 100%;
}
</style>

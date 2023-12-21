<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { Input, MultiSwitch, PrimaryButton, SecondaryButton, SwitchButton, TertiaryButton } from '~/components';

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

const activeOption = ref(0);
const handleOptionChange = (value: number) => {
  activeOption.value = value;
};
function setActiveOption(id: number) {
  activeOption.value = id;
}
const OPTIONS: SwitchButtonDefinition[] = [
  {
    label: 'New',
    icon: 'i-youcan:plus',
    value: '0',
  },
  {
    label: 'Edit',
    icon: 'i-youcan:pencil-simple',
    value: '1',
  }];
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
      <div class="tabs">
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
      </div>
      <div class="tab-panels">
        <div
          v-show="activeOption === 0"
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
          v-show="activeOption === 1"
          class="panel"
        >
          <p class="panel-label">
            Row
          </p>
          <div class="button-block">
            <SecondaryButton @click="insertRow('before')">
              Add Before
            </SecondaryButton>
            <SecondaryButton @click="insertRow('after')">
              Add After
            </SecondaryButton>
          </div>
          <p class="panel-label">
            Column
          </p>
          <div class="button-block">
            <SecondaryButton @click="insertColumn('before')">
              Add Before
            </SecondaryButton>
            <SecondaryButton @click="insertColumn('after')">
              Add After
            </SecondaryButton>
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
  position: fixed;
  z-index: 999999;
  flex-direction: column;
  width: 250px;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  gap: 20px;
}

.tabs .list {
  width: auto;
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

.panel .primary {
  margin-top: 7px;
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

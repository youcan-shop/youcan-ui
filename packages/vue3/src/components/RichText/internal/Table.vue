<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import {
  Input,
  MultiSwitch,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '~/components';
import type { SwitchButtonOption } from '~/components/MultiSwitch/types';

const emit = defineEmits(['insert', 'insertRow', 'insertColumn']);

const MAX_COLS = 20;
const MAX_ROWS = 100;

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
const toggleDropdown = (show = !showDropdown.value) => (showDropdown.value = show);

onClickOutside(dropdownRef, () => {
  toggleDropdown(false);
});

const OPTIONS: SwitchButtonOption[] = [
  {
    label: 'New',
    value: '0',
    icon: 'i-youcan:plus',
  },
  {
    label: 'Edit',
    value: '1',
    icon: 'i-youcan:pencil-simple',
  },
];

const activeOption = ref<SwitchButtonOption>(OPTIONS[0]);
</script>

<template>
  <div class="input-table">
    <TertiaryButton size="sm" icon-position="only" @click="toggleDropdown()">
      <template #icon>
        <i class="i-youcan-table" />
      </template>
    </TertiaryButton>
    <div v-show="showDropdown" ref="dropdownRef" class="table-dropdown">
      <div class="tabs">
        <MultiSwitch v-model:selected-option="activeOption" :options="OPTIONS" />
      </div>
      <div class="tab-panels">
        <div v-show="activeOption.value === '0'" class="panel">
          <Input v-model="rows" :max="MAX_ROWS" type="number" placeholder="rows" />
          <Input v-model="cols" :max="MAX_COLS" type="number" placeholder="columns" />
          <PrimaryButton @click="setModel()">
            <template #icon>
              <i class="i-youcan-plus" />
            </template>
            Insert table
          </PrimaryButton>
        </div>
        <div v-show="activeOption.value === '1'" class="panel">
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
  position: absolute;
  z-index: 10;
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

@media screen and (width < 768px) {
  .table-dropdown {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

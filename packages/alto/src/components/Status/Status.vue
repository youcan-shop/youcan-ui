<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { StatusObject, StatusProps } from '~/types';

const props = defineProps<StatusProps>();

const emit = defineEmits(['update:modelValue']);

const showDropdown = ref(false);
const editable = computed(() => Array.isArray(props.status));
const list = ref();
const button = ref();

const selectedStatus = ref<StatusObject>(Array.isArray(props.status) ? props.status[0] : props.status);
const statusArray = ref<StatusObject[]>(Array.isArray(props.status) ? props.status : [props.status]);

const getColor = (status: StatusObject | StatusObject[]): string => {
  if (!Array.isArray(status)) {
    return status.color;
  }
  else {
    return status[0].color;
  }
};

const getLabelColor = (status: StatusObject | StatusObject[]): string | undefined => {
  if (!Array.isArray(status)) {
    return status.labelColor;
  }
  else {
    return status[0].labelColor;
  }
};

const getLabel = (status: StatusObject | StatusObject[]): string => {
  if (!Array.isArray(status)) {
    return status.label;
  }
  else {
    return status[0].label;
  }
};

const toggleDropdown = (override = !showDropdown.value) => showDropdown.value = override;
onClickOutside(list, () => toggleDropdown(false), { ignore: [button] });

const selectStatus = (item: StatusObject) => {
  selectedStatus.value = item;
  showDropdown.value = false;
  emit('update:modelValue', item);
};
</script>

<template>
  <div v-if="!editable" class="static-status" :style="{ backgroundColor: getColor(status), color: getLabelColor(status) || 'black' }">
    <span>{{ getLabel(status) }}</span>
  </div>
  <div v-else class="wrapper">
    <button ref="button" type="button" class="editable-status" :style="{ backgroundColor: getColor(selectedStatus), color: getLabelColor(selectedStatus) || 'black' }" @click="() => toggleDropdown()">
      <span class="status-button">
        {{ getLabel(selectedStatus) }}
      </span>
      <i class="icon i-youcan-caret-down" />
    </button>
    <div class="status-list-wrapper">
      <div v-show="showDropdown" ref="list" class="status-list">
        <button v-for="(item, index) in statusArray" :key="index" type="button" class="status-list-item" @click="selectStatus(item)">
          <span class="color" :style="{ backgroundColor: item.color }" />
          <span class="label">{{ item.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.static-status {
  box-sizing: border-box;
  max-width: fit-content;
  padding: 7.5px 12px;
  border-radius: 4px;
  box-shadow: var(--shadow-xs-gray);
  font: var(--text-sm-medium);
  text-align: center;
}

.editable-status {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0;
  padding-right: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.editable-status:hover {
  filter: brightness(0.9);
}

.editable-status:is(:focus, :active) {
  outline: none;
  filter: brightness(0.7);
}

.editable-status .icon {
  width: 12px;
  height: 12px;
}

.editable-status .status-button {
  max-width: fit-content;
  padding: 7.5px 8px 7.5px 12px;
  border-radius: 4px 0 0 4px;
  box-shadow: var(--shadow-xs-gray);
  font: var(--text-sm-medium);
  text-align: center;
}

.status-list-wrapper .status-list {
  display: flex;
  position: absolute;
  top: 8px;
  flex-direction: column;
  width: max-content;
  min-width: 100px;
  padding: 8px 0;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);
}

.status-list-wrapper .status-list .status-list-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border: none;
  background-color: transparent;
  text-align: inherit;
  cursor: pointer;
  gap: 8px;
}

.status-list-wrapper .status-list .status-list-item:hover {
  background-color: var(--gray-50);
}

.status-list-wrapper .status-list .status-list-item:is(:focus, :active) {
  outline: none;
  background-color: var(--gray-100);
}

.status-list-wrapper .status-list .status-list-item .label {
  font: var(--text-sm-regular);
}

.status-list-wrapper .status-list .status-list-item .color {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 100%;
}

.status-list-wrapper {
  position: relative;
}

html[dir="rtl"] .editable-status {
  padding-right: 0;
  padding-left: 12px;
}
</style>

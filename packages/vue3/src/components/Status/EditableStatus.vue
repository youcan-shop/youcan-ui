<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import type { StatusDefinition } from './types';

const props = defineProps<{
  statuses: StatusDefinition[]
  modelValue: StatusDefinition
}>();

const emit = defineEmits(['update:modelValue']);

const list = ref();
const button = ref();
const show = ref(false);
const toggle = (override = !show.value) => show.value = override;
onClickOutside(list, () => toggle(false), { ignore: [button] });

const model = computed({
  get: () => props.modelValue,
  set: (status: StatusDefinition) => {
    toggle(false);
    emit('update:modelValue', status);
  },
});
</script>

<template>
  <div class="wrapper">
    <button ref="button" type="button" class="editable-status" @click="() => toggle()">
      <div class="static-status">
        {{ model.label }}
      </div>

      <i class="icon i-youcan-caret-down" />
    </button>
    <div class="status-list-wrapper">
      <div v-show="show" ref="list" class="status-list">
        <button v-for="status in statuses" :key="status.value" type="button" class="status-list-item" @click="model = status">
          <span class="color" :style="{ backgroundColor: status.color }" />
          <span class="label">{{ status.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editable-status {
  padding: 0;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  padding-right: 12px;
  align-items: center;
  background-color: v-bind('model.color');
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
  color: var(--base-white);
}

.editable-status .static-status {
  text-align: center;
  max-width: fit-content;
  font: var(--text-sm-medium);
  color: var(--base-white);
  border-radius: 4px 0 0 4px;
  box-shadow: var(--shadow-xs-gray);
  padding: 7.5px 8px 7.5px 12px;
  background: v-bind('model.color');
}

.status-list {
  top: 8px;
  display: flex;
  padding: 8px 0;
  min-width: 100px;
  border-radius: 4px;
  position: absolute;
  flex-direction: column;
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);
}

.status-list-item {
  gap: 8px;
  border: none;
  display: flex;
  cursor: pointer;
  padding: 10px 12px;
  align-items: center;
  text-align: inherit;
  background-color: transparent;
}

.status-list-item:hover {
  background-color: var(--gray-50);
}

.status-list-item:is(:focus, :active) {
  outline: none;
  background-color: var(--gray-100);
}

.status-list-item .label {
  font: var(--text-sm-regular);
}

.status-list-item .color {
  width: 6px;
  height: 6px;
  display: block;
  border-radius: 100%;
}

.status-list-wrapper {
  position: relative;
}
</style>

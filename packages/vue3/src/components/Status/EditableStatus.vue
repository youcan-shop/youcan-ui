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
      <span class="static-status">
        {{ model.label }}
      </span>

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
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0;
  padding-right: 12px;
  border: none;
  border-radius: 4px;
  background-color: v-bind("model.color");
  color: v-bind("model.labelColor");
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

.editable-status .static-status {
  max-width: fit-content;
  padding: 7.5px 8px 7.5px 12px;
  border-radius: 4px 0 0 4px;
  background: v-bind("model.color");
  box-shadow: var(--shadow-xs-gray);
  font: var(--text-sm-medium);
  text-align: center;
}

.status-list {
  display: flex;
  position: absolute;
  top: 8px;
  flex-direction: column;
  min-width: 100px;
  padding: 8px 0;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);
}

.status-list-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border: none;
  background-color: transparent;
  text-align: inherit;
  cursor: pointer;
  gap: 8px;
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
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 100%;
}

.status-list-wrapper {
  position: relative;
}
</style>

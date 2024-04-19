<script setup lang="ts">
import { defaultSubItemStyle, mergeWithDefaultValues } from './StyleUtils';
import type { SidebarSubItemProps } from '~/types';

const props = withDefaults(defineProps<SidebarSubItemProps>(), {
  styleConfig: () => defaultSubItemStyle,
});

const resolvedCustomStyle = mergeWithDefaultValues(props.styleConfig, defaultSubItemStyle);
</script>

<template>
  <button
    class="sidebar-subitem"
    :class="{ active }"
    :style="{
      '--subitem-label-color': resolvedCustomStyle.labelColor,
      '--subitem-active-label-color': resolvedCustomStyle.activeLabelColor,
      '--subitem-label-font': resolvedCustomStyle.font,
    }"
  >
    <span class="subitem-text">
      {{ label }}
    </span>
  </button>
</template>

<style scoped>
.sidebar-subitem {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 5.5px 60px;
  border: none;
  background-color: transparent;
  color: var(--subitem-label-color);
  font: var(--subitem-label-font);
  text-align: start;
  cursor: pointer;
}

.sidebar-subitem:first-child {
  margin-top: 8px;
}

.sidebar-subitem:last-child {
  margin-bottom: 8px;
}

.sidebar-subitem:is(:hover, :focus) {
  outline: none;
  color: var(--subitem-active-label-color);
}

.sidebar-subitem.active {
  color: var(--subitem-active-label-color);
  font: var(--subitem-label-font);
}

.subitem-text {
  display: block;
}
</style>

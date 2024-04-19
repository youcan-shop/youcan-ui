<script setup lang="ts">
import { ref } from 'vue';
import { defaultSidebarStyle, mergeWithDefaultValues } from './StyleUtils';
import type { SidebarProps } from '~/types';

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsed: false,
  styleConfig: () => defaultSidebarStyle,
});

const emit = defineEmits(['collapse']);

const collapsed = ref(props.collapsed);

const toggle = (override = !collapsed.value) => {
  collapsed.value = override;
  emit('collapse', override);
};

const resolvedCustomStyle = mergeWithDefaultValues(props.styleConfig, defaultSidebarStyle);
</script>

<template>
  <aside
    class="sidebar" :class="{ collapsed }"
    :style="{
      '--sidebar-background-color': resolvedCustomStyle.backgroundColor,
      '--sidebar-icon-color': resolvedCustomStyle.iconColor,
      '--subitem-icon-color': resolvedCustomStyle.subItemIconColor,
      '--sidebar-width': `${resolvedCustomStyle?.width}px`,
      '--sidebar-header-font': resolvedCustomStyle.font,
      '--sidebar-spacing': `${resolvedCustomStyle.spacing}px`,
    }"
  >
    <div
      class="sidebar-header"
      :style="{
        '--sidebar-header-hover-color': resolvedCustomStyle.hoverColor,
        '--sidebar-header-active-color': resolvedCustomStyle.activeColor,
      }"
    >
      <button class="item-icon" @click="() => toggle()">
        <i v-if="collapsed" class="i-youcan:sidebar-close" />
        <i v-else class="i-youcan:sidebar-open" />
      </button>
      <div class="item-label">
        <slot name="header" />
      </div>
    </div>

    <div class="sidebar-items upper">
      <slot name="items" />
    </div>

    <div class="sidebar-items lower">
      <slot name="lower-items" />
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  --sidebar-collapsed-width: 60px;
  --sidebar-height: 100vh;

  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: var(--sidebar-width);
  height: var(--sidebar-height);
  transition: width 0.2s ease-in-out;
  background-color: var(--sidebar-background-color);
}

.sidebar i {
  color: var(--sidebar-icon-color);
}

.sidebar-header {
  display: flex;
  align-items: center;
  height: 68px;
  padding: 0 16px;
  font: var(--sidebar-header-font);
  gap: 20px;
}

.sidebar-header:hover {
  background-color: var(--sidebar-header-hover-color);
}

.sidebar-header:active {
  background-color: var(--sidebar-header-active-color);
}

.sidebar-header .item-icon {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.sidebar-header .item-icon i {
  transition: transform 0.25s ease-in-out;
}

.sidebar-header .item-label {
  color: var(--base-white);
  font: var(--sidebar-header-font);
}

.sidebar-items.upper {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  gap: var(--sidebar-spacing);
}

.sidebar-items.lower {
  margin-top: auto;
  margin-bottom: 10%;
}

.sidebar-items :deep(.item-label) a {
  color: inherit;
  text-decoration: none;
}

.sidebar.collapsed {
  width: var(--sidebar-collapsed-width);
  overflow-x: hidden;
}

.sidebar.collapsed .item-label,
.sidebar.collapsed :deep(.item-label),
.sidebar.collapsed :deep(.subitem-text),
.sidebar.collapsed :deep(.expand-icon) {
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, transform 0.25s ease-in-out;
  opacity: 0;
  white-space: nowrap;
}

.sidebar.collapsed :deep(.sidebar-subitem) {
  position: relative;
}

.sidebar.collapsed :deep(.sidebar-subitem)::before {
  content: "";
  position: absolute;
  left: 25px;
  width: 5px;
  height: 5px;
  transform: translateX(-50%);
  transition: opacity 0.2s ease-in-out;
  border: 1px solid var(--subitem-icon-color);
  border-radius: 50%;
  opacity: 1;
  background-color: var(--gray-700);
}

.sidebar.collapsed .item-label,
.sidebar.collapsed :deep(.item-label),
.sidebar.collapsed :deep(.subitem-text) {
  transform: translateX(100%);
}

.sidebar.collapsed:hover {
  width: var(--sidebar-width);
}

.sidebar.collapsed:hover .item-label,
.sidebar.collapsed:hover :deep(.item-label),
.sidebar.collapsed:hover :deep(.subitem-text),
.sidebar.collapsed:hover :deep(.expand-icon) {
  visibility: visible;
  opacity: 1;
}

.sidebar.collapsed:hover .item-label,
.sidebar.collapsed:hover :deep(.item-label),
.sidebar.collapsed:hover :deep(.subitem-text) {
  transform: translateX(0%);
}

.sidebar.collapsed:hover :deep(.sidebar-subitem)::before {
  opacity: 0;
}

.sidebar.collapsed .sidebar-header .item-icon i {
  color: var(--sidebar-icon-color);
}
</style>

<style>
html[dir="rtl"] .sidebar.collapsed .item-label,
html[dir="rtl"] .sidebar.collapsed .subitem-text {
  transform: translateX(-100%);
}

html[dir="rtl"] .sidebar.collapsed .sidebar-subitem::before {
  right: 25px;
  left: unset;
  transform: translateX(50%);
}
</style>./styleUtils

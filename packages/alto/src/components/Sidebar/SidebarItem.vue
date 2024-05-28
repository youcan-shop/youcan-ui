<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { defaultItemStyle, mergeWithDefaultValues } from './StyleUtils';
import type { SidebarItemProps } from '~/types';

const props = withDefaults(defineProps<SidebarItemProps>(), {
  styleConfig: () => defaultItemStyle,
});

const children = ref(1);
const subitems = ref();

const expanded = ref(!!props.active);
const toggle = () => expanded.value = !expanded.value;

const resolvedCustomStyle = mergeWithDefaultValues(props.styleConfig, defaultItemStyle);

onMounted(() => {
  children.value = subitems.value ? subitems.value.children.length : 0;
});
</script>

<template>
  <div>
    <button
      :class="{ active }"
      class="sidebar-item"
      :style="{
        '--sidebar-item-hover-color': resolvedCustomStyle.hoverColor,
        '--sidebar-item-active-color': resolvedCustomStyle.activeColor,
        '--sidebar-item-mark-color': resolvedCustomStyle.activeMarkColor,
        '--sidebar-item-icon-color': resolvedCustomStyle.iconColor,
        '--sidebar-item-active-icon-color': resolvedCustomStyle.activeIconColor,
        '--sidebar-item-label-color': resolvedCustomStyle.labelColor,
        '--sidebar-item-active-label-color': resolvedCustomStyle.activeLabelColor,
        '--sidebar-item-font': resolvedCustomStyle.font,
      }"
      @click="() => toggle()"
    >
      <div class="item-icon">
        <i class="icon" :class="icon" />
      </div>

      <div class="item-label">
        {{ label }}
      </div>

      <div v-if="children" class="expand-icon" :class="{ rotate: expanded }">
        <i class="i-youcan:carret-down" />
      </div>
    </button>
    <Transition name="toggle">
      <div v-show="children && expanded" ref="subitems" class="subitems">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.sidebar-item {
  --height: 48px;

  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: var(--height);
  padding: 0 16px;
  border: none;
  background-color: transparent;
  color: var(--sidebar-item-label-color);
  font: var(--sidebar-item-font);
  cursor: pointer;
  gap: 20px;
}

.sidebar-item:hover {
  background-color: var(--sidebar-item-hover-color);
}

.sidebar-item:is(:focus, :active) {
  outline: none;
  background-color: var(--sidebar-item-active-color);
}

.sidebar-item.active {
  background-color: var(--sidebar-item-active-color);
}

.sidebar-item.active .item-label {
  color: var(--sidebar-item-active-label-color);
}

[dir="rtl"] .sidebar-item.active {
  box-shadow: inset -2px 0 0 0 var(--sidebar-item-mark-color);
}

[dir="ltr"] .sidebar-item.active {
  box-shadow: inset 2px 0 0 0 var(--sidebar-item-mark-color);
}

.sidebar-item .expand-icon .icon {
  width: 10px;
  height: 10px;
  color: var(--sidebar-item-icon-color);
}

.sidebar-item .item-icon .icon {
  width: 22px;
  height: 22px;
  color: var(--sidebar-item-icon-color);
}

.sidebar-item .expand-icon i {
  transition: all 200ms ease-in-out;
  color: var(--sidebar-item-icon-color);
}

.sidebar-item .expand-icon.rotate i {
  transform: rotate(180deg);
}

.sidebar-item.active .expand-icon i,
.sidebar-item.active .item-icon .icon {
  color: var(--sidebar-item-active-icon-color);
}

.subitems {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar-item .expand-icon {
  margin-inline-start: auto;
}

@keyframes toggle {
  0% {
    max-height: 0;
    opacity: 0;
  }

  100% {
    max-height: calc(v-bind(children) * 40px);
    opacity: 1;
  }
}
</style>

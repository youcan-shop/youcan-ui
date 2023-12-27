<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
  collapsed?: boolean
}>(), {
  collapsed: false,
});

const emit = defineEmits(['collapse']);

const collapsed = ref(props.collapsed);

const toggle = (override = !collapsed.value) => {
  collapsed.value = override;
  emit('collapse', override);
};
</script>

<template>
  <aside class="sidebar" :class="{ collapsed }">
    <div class="sidebar-header">
      <button class="item-icon" @click="() => toggle()">
        <i class="i-youcan:list" />
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

<style scoped lang="scss">
.sidebar {
  --sidebar-width: 230px;
  --sidebar-collapsed-width: 54px;
  --sidebar-height: 100vh;

  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: var(--sidebar-width);
  height: var(--sidebar-height);
  transition: width 0.2s ease-in-out;
  background-color: var(--gray-800);

  i {
    color: var(--gray-200);
  }

  &-header {
    display: flex;
    align-items: center;
    height: 68px;
    padding: 0 16px;
    border-bottom: 1px solid var(--gray-700);
    font: var(--text-lg-medium);
    gap: 20px;

    :hover {
      background-color: var(--gray-700);
    }

    :active {
      background-color: var(--gray-600);
    }

    .item-icon {
      padding: 0;
      border: none;
      background-color: transparent;
      cursor: pointer;

      i {
        transition: transform 0.25s ease-in-out;
      }
    }

    .item-label {
      color: var(--base-white);
      font: var(--text-lg-medium);
    }
  }

  &-items {
    &.lower {
      margin-top: auto;
    }

    .item-label,
    :deep(.item-label) {
      color: var(--base-white);
      font: var(--text-sm-medium);
    }
  }

  .item-icon,
  :deep(.item-icon) {
    outline: none;
    color: var(--gray-100);
  }

  &.collapsed {
    width: var(--sidebar-collapsed-width);
    overflow-x: hidden;

    .item-label,
    &:deep(.item-label),
    &:deep(.subitem-text),
    &:deep(.expand-icon) {
      visibility: hidden;
      transition: opacity 0.3s ease-in-out, transform 0.25s ease-in-out;
      opacity: 0;
      white-space: nowrap;
    }

    &:deep(.sidebar-subitem) {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 25px;
        width: 5px;
        height: 5px;
        transform: translateX(-50%);
        transition: opacity 0.2s ease-in-out;
        border: 1px solid var(--gray-400);
        border-radius: 50%;
        opacity: 1;
        background-color: var(--gray-700);
      }
    }

    .item-label,
    &:deep(.item-label),
    &:deep(.subitem-text) {
      transform: translateX(100%);
    }

    &:hover {
      width: var(--sidebar-width);

      .item-label,
      &:deep(.item-label),
      &:deep(.subitem-text),
      &:deep(.expand-icon) {
        visibility: visible;
        opacity: 1;
      }

      .item-label,
      &:deep(.item-label),
      &:deep(.subitem-text) {
        transform: translateX(0%);
      }

      &:deep(.sidebar-subitem) {
        &::before {
          opacity: 0;
        }
      }
    }

    .sidebar-header {
      .item-icon {
        i {
          color: var(--gray-500);
        }
      }
    }
  }
}
</style>

<style lang="scss">
html[dir="rtl"] {
  .sidebar {
    &.collapsed {
      .item-label,
      .subitem-text {
        transform: translateX(-100%);
      }

      .sidebar-subitem {
        &::before {
          right: 25px;
          left: unset;
          transform: translateX(50%);
        }
      }
    }
  }
}
</style>

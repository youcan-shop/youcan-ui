<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';

const props = defineProps<{
  icon: string
  label: string
  count?: number
  active?: boolean
}>();
const slots = useSlots();

const expanded = ref(!!props.active);
const toggle = (override = !expanded.value) => expanded.value = override;

const hasChildren = computed(() => {
  return slots.default
    && slots.default().length > 0
    && slots.default().filter((s: any) => typeof s.type === 'object').length > 0;
});
</script>

<template>
  <div>
    <button :class="{ active }" class="sidebar-item" @click="() => hasChildren && toggle()">
      <div class="item-icon">
        <i class="icon" :class="icon" />
      </div>

      <div class="item-label">
        {{ label }}
      </div>

      <div v-if="hasChildren" class="expand-icon">
        <i class="icon i-youcan-caret-down" />
      </div>
    </button>
    <div v-if="hasChildren && expanded" class="subitems">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sidebar-item {
  --height: 48px;

  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: var(--height);
  padding: 0 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  gap: 20px;
}

.sidebar-item:hover {
  background-color: var(--gray-700);
}

.sidebar-item:is(:focus, :active) {
  outline: none;
  background-color: var(--gray-600);
}

.sidebar-item.active {
  background-color: var(--gray-700);
  box-shadow: inset 2px 0 0 0 var(--base-white);
}

.sidebar-item .expand-icon .icon {
  width: 10px;
  height: 10px;
  color: var(--gray-400);
}

.sidebar-item .item-icon .icon {
  width: 22px;
  height: 22px;
  color: var(--gray-400);
}

.sidebar-item.active .item-icon .icon {
  color: var(--base-white);
}

.subitems {
  display: flex;
  flex-direction: column;
}

.expand-icon {
  margin-inline-start: auto;
}
</style>

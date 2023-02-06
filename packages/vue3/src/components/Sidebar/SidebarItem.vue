<script setup lang="ts">
import { computed, mergeProps, ref, useSlots } from 'vue';

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
    && slots.default().filter((s: any) => typeof s.children === 'object' && s.children.length > 0).length > 0;
});
</script>

<template>
  <div>
    <button v-bind="$attrs" :class="{ active }" class="sidebar-item" @click="() => hasChildren && toggle()">
      <div class="item-icon">
        <i class="icon" :class="icon" />
      </div>

      <div class="item-label">
        {{ label }}
      </div>

      <div v-if="hasChildren" class="expand-icon">
        <i v-if="expanded" i-youcan-minus />
        <i v-else i-youcan-plus />
      </div>
    </button>
    <div v-if="hasChildren && expanded" class="subitems">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sidebar-item {
  --height: 46px;

  gap: 12px;
  width: 100%;
  border: none;
  display: flex;
  cursor: pointer;
  padding: 0 12px;
  align-items: center;
  height: var(--height);
  background-color: transparent;
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
  box-shadow: inset 2px 0px 0px 0px var(--base-white);
}

.sidebar-item .item-icon .icon {
  width: 20px;
  height: 20px;
  color: var(--gray-100);
}

.subitems {
  display: flex;
  flex-direction: column;
}

.expand-icon {
  width: 16px;
  height: 16px;
  color: var(--base-white);
  margin-inline-start: auto;
}
</style>

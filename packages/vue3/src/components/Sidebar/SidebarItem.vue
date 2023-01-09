<script setup lang="ts">
import { ref, useSlots } from 'vue';

defineProps<{ icon: string; label: string; count?: number; active?: boolean }>();
const slots = useSlots();

const expanded = ref(false);
const toggle = (override = !expanded.value) => expanded.value = override;
</script>

<template>
  <div>
    <button :class="{ active }" class="sidebar-item" @click="() => slots.default && toggle()">
      <div class="item-icon">
        <i :class="icon" />
      </div>

      <div class="item-label">
        {{ label }}
      </div>

      <div v-if="slots.default" class="expand-icon">
        <i v-if="expanded" i-youcan-account />
        <i v-else i-youcan-pay />
      </div>
    </button>
    <div v-if="slots.default && expanded" class="subitems">
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
    background-color: var(--gray-700);
}

.sidebar-item.active {
    /* background-color: var(--gray-700); */
    box-shadow: inset 2px 0px 0px 0px var(--base-white);
}

.subitems {
    display: flex;
    flex-direction: column;
}

.expand-icon {
    color: var(--base-white);
    margin-inline-start: auto;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  icon: string
  label: string
  count?: number
  active?: boolean
}>();

const children = ref(1);
const subitems = ref();

const expanded = ref(!!props.active);
const toggle = () => expanded.value = !expanded.value;

onMounted(() => {
  children.value = subitems.value ? subitems.value.children.length : 0;
});
</script>

<template>
  <div>
    <button :class="{ active }" class="sidebar-item" @click="() => children && toggle()">
      <div class="item-icon">
        <i class="icon" :class="icon" />
      </div>

      <div class="item-label">
        {{ label }}
      </div>

      <div v-if="children" class="expand-icon" :class="{ rotate: expanded }">
        <i class="icon i-youcan-caret-down" />
      </div>
    </button>
    <Transition name="toggle">
      <div v-if="children && expanded" ref="subitems" class="subitems">
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
  overflow: hidden;
}

.expand-icon {
  margin-inline-start: auto;
}

.expand-icon i {
  transition: all 200ms ease-in-out;
}

.expand-icon.rotate i {
  transform: rotate(180deg);
}

.toggle-enter-active {
  animation: toggle 0.15s linear;
}

.toggle-leave-active {
  animation: toggle 0.15s reverse linear;
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

<style lang="scss">
html[dir="rtl"] {
  .sidebar-item.active {
    box-shadow: inset -2px 0 0 0 var(--base-white);
  }
}
</style>

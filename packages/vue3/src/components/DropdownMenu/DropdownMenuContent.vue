<script setup lang="ts">
</script>

<template>
  <div class="dropdown-menu-content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.dropdown-menu-content {
  --border-radius: 8px;
  --min-width: 200px;
  --padding: 8px;
  --z-index: 10;
  --gap: 1px;

  display: flex;
  position: relative;
  z-index: var(--z-index);
  box-sizing: border-box;
  flex-direction: column;
  width: max-content;
  min-width: var(--min-width);
  margin: 0;
  padding: var(--padding);
  transform-origin: top center;
  animation: grow-down 200ms ease-in-out forwards;
  border: 1px solid var(--gray-200);
  border-radius: var(--border-radius);
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  gap: var(--gap);
}

@keyframes grow-down {
  0% {
    transform: scaleY(0);
  }

  25% {
    transform: scaleY(0.6);
  }

  50% {
    transform: scaleY(0.9);
  }

  75% {
    transform: scaleY(1.1);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>

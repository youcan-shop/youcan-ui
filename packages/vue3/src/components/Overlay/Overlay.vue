<script lang="ts" setup>
const emit = defineEmits(['onBackdropClick']);
</script>

<template>
  <div class="overlay">
    <div class="backdrop" @click="emit('onBackdropClick')" />
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.overlay {
  display: flex;
  position: fixed;
  z-index: 999999999;
  top: 0;
  left: 0;
  align-items: center;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
}

.overlay .backdrop,
.overlay::before {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.overlay::before {
  content: "";
  z-index: 1;
  opacity: 0.24;
  background-color: var(--gray-900);
}

.overlay .backdrop {
  z-index: 2;
}

.overlay .body {
  position: relative;
  z-index: 3;
  max-width: 100%;
  margin: 0 auto;
}
</style>

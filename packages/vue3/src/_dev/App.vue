<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
</script>

<template>
  <div className="container">
    <i class="i-youcan:truck" />
    <i class="i-youcan:chat" />
    <i class="i-youcan:arrow-u-right-down" />
    <i class="i-youcan:plugs-connected" />
    <i class="i-youcan:plugs" />
    <i class="i-youcan:rocket-launch" />
    <i class="i-youcan:arrows-out-simple" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10%;
  gap: 16px;
}

.selection {
  padding: 16px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
}

:is(.dark) .selection {
  border-color: var(--gray-700);
}
</style>

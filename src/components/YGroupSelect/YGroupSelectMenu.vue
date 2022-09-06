<script setup lang="ts"></script>

<template>
  <div class="menu">
    <slot />
  </div>
</template>

<style scoped>
  .menu {
    display: flex;
    flex-direction: column;
    background-color: var(--Base-White);
    gap: 4px;
    padding: 4px;
    border-radius: 8px;
    border: 1px solid var(--StormGray-100);
  }
</style>

<script setup lang="ts">

</script>

<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 8px;
}
</style>

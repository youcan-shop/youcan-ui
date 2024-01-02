<script setup lang="ts">
import { Divider } from '~/components';
</script>

<template>
  <div class="container">
    <Divider thickness="light" />
  </div>
</template>

<style scoped>
.dropdown-container {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 60px auto;
  row-gap: 60px;
}

.status {
  display: flex;
  flex: 1;
  justify-content: end;
}
</style>

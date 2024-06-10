<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Divider } from '~/components';
</script>

<template>
  <div class="container-vertical">
    <Divider orientation="vertical" thickness="regular" />
    <Divider dashed orientation="vertical" thickness="light" />
    <Divider dashed orientation="vertical" thickness="regular" />
    <Divider dashed orientation="vertical" thickness="thick" />
  </div>
  <div class="container">
    <Divider thickness="light" />
    <Divider dashed thickness="light" />
    <Divider dashed thickness="regular" />
    <Divider dashed thickness="thick" />
  </div>
</template>

<style scoped>
.container-vertical {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 500px;
  margin: auto;
  padding: 0 40px;
  gap: 40px;
}

.container {
  display: flex;
  flex-direction: column;
  height: 50vh;
  padding: 40px;
  gap: 30px;
}
</style>

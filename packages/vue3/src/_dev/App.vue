<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Divider } from '~/components';
</script>

<template>
  <div class="container">
    <Divider orientation="vertical" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 500px;
  height: 300px;
  margin: 20px;
}
</style>

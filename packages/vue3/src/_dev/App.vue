<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Divider } from '~/components';
</script>

<template>
  <div class="container">
    <Divider thickness="light" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 500px;
  height: 300px;
  margin: 20px;
}
</style>

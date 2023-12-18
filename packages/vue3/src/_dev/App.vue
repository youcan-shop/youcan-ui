<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Code } from '~/components';
</script>

<template>
  <div class="container">
    <Code language="ts" />
  </div>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: auto;
}
</style>

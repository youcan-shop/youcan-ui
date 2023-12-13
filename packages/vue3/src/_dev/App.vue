<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { CodePreview } from '..';
import { code } from '~/components/CodePreview/code';
</script>

<template>
  <div class="container">
    <CodePreview :code="code" line-numbers lang="markup" />
  </div>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: auto;
}
</style>

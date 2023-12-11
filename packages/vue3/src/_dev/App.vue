<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Spinner } from '~/components';
import type { SpinnerType } from '~/components/Spinner/types';

const spinner: SpinnerType = {
  color: 'var(--blue-300)',
  size: '80px',
  label: 'YouCan',
  labelColor: 'var(--blue-500)',
  labelFontSize: 'xs',
};
</script>

<template>
  <div class="container">
    <Spinner :spinner="spinner" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: auto;
}
</style>

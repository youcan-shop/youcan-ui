<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { SecondaryButton, Tooltip } from '~/components';
</script>

<template>
  <div class="container">
    <Tooltip label="Add to favorites" position="top">
      <SecondaryButton>
        Hover
      </SecondaryButton>
    </Tooltip>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>

<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Button } from '~/components';

const variants = ['primary', 'secondary', 'tertiary', 'destructive'];
</script>

<template>
  <div class="container">
    <Button v-for="variant in variants" :key="variant" v-bind="{ variant }">
      {{ variant }} button
    </Button>
    <Button variant="primary" href="http://www.google.com">
      Link button
    </Button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 80px;
}
</style>

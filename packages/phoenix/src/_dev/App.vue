<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import Button from '~/components/Button/Button.vue';
</script>

<template>
  <div class="container">
    <Button variant="primary" rounded-full>
      primary
    </Button>
    <Button variant="destructive">
      destructive
    </Button>
    <Button variant="secondary" rounded-full>
      secondary
    </Button>
    <Button variant="tertiary" link link-url="https://www.google.com">
      tertiary
    </Button>
    <Button variant="secondary" link link-url="https://www.google.com">
      Link
    </Button>
  </div>
  <div class="container">
    <Button variant="primary" rounded-full disabled>
      primary
    </Button>
    <Button variant="destructive" rounded-full disabled>
      destructive
    </Button>
    <Button variant="secondary" rounded-full disabled>
      secondary
    </Button>
    <Button variant="tertiary" rounded-full disabled>
      tertiary
    </Button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 50px;
  width: 400px;
  margin: 30px;
}
</style>

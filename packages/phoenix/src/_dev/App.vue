<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Button } from '~/components';
</script>

<template>
  <div class="container">
    <Button variant="primary">
      primary
    </Button>
    <Button variant="primary" rounded-full>
      primary
    </Button>
    <Button variant="primary" disabled>
      primary
    </Button>
    <Button variant="primary" icon-position="right">
      <template #icon>
        🧠
      </template>
      primary
    </Button>
    <Button variant="primary" size="2xl">
      primary
    </Button>
  </div>
  <div class="container">
    <Button variant="secondary">
      secondary
    </Button>
    <Button variant="secondary" rounded-full>
      secondary
    </Button>
    <Button variant="secondary" disabled>
      secondary
    </Button>
    <Button variant="secondary" icon-position="right">
      <template #icon>
        🧠
      </template>
      secondary
    </Button>
    <Button variant="secondary" size="lg">
      <template #icon>
        🧠
      </template>
      secondary
    </Button>
  </div>
  <div class="container">
    <Button variant="tertiary">
      tertiary
    </Button>
    <Button variant="tertiary" rounded-full>
      tertiary
    </Button>
    <Button variant="tertiary" disabled>
      tertiary
    </Button>
    <Button variant="tertiary" icon-position="right">
      <template #icon>
        🧠
      </template>
      tertiary
    </Button>
    <Button variant="tertiary" size="2xl">
      tertiary
    </Button>
  </div>
  <div class="container">
    <Button variant="destructive">
      destructive
    </Button>
    <Button variant="destructive" rounded-full>
      destructive
    </Button>
    <Button variant="destructive" disabled>
      destructive
    </Button>
    <Button variant="destructive" icon-position="right">
      <template #icon>
        🧠
      </template>
      destructive
    </Button>
    <Button variant="destructive" size="2xl">
      destructive
    </Button>
  </div>
  <div class="container">
    <Button variant="primary" link link-url="https://www.google.com">
      Primary Link
    </Button>
    <Button variant="secondary" link link-url="https://www.google.com">
      Secondary Link
    </Button>
    <Button variant="tertiary" link link-url="https://www.google.com">
      Tertiary Link
    </Button>
    <Button variant="destructive" link link-url="https://www.google.com">
      Destructive Link
    </Button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  margin: 30px;
  gap: 0.5rem;
}
</style>

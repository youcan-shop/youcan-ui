<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Button } from '~/components';
</script>

<template>
  <div class="container">
    <Button variant="primary">
      <i class="i-youcan:arrow-bend-up-right" />
      primary
    </Button>
    <Button variant="primary" rounded>
      primary
    </Button>
    <Button variant="primary" disabled>
      primary
    </Button>
    <Button variant="primary" icon-position="right">
      <p>🧠</p>  primary <p>🧠</p>
    </Button>
    <Button variant="primary" size="2xl">
      primary
    </Button>
  </div>
  <div class="container">
    <Button variant="secondary">
      secondary
    </Button>
    <Button variant="secondary" rounded>
      secondary
    </Button>
    <Button variant="secondary" disabled>
      secondary
    </Button>
    <Button variant="secondary" icon-position="right">
      <i class="i-youcan:arrow-bend-up-right" />
      secondary
    </Button>
    <Button variant="secondary" size="lg">
      🧠
      secondary
    </Button>
  </div>
  <div class="container">
    <Button variant="tertiary">
      tertiary
    </Button>
    <Button variant="tertiary" rounded>
      tertiary
    </Button>
    <Button variant="tertiary" disabled>
      tertiary
    </Button>
    <Button variant="tertiary" icon-position="right">
      🧠
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
    <Button variant="destructive" rounded>
      destructive
    </Button>
    <Button variant="destructive" disabled>
      destructive
    </Button>
    <Button variant="destructive" icon-position="right">
      🧠
      destructive
    </Button>
    <Button variant="destructive" size="2xl">
      destructive
    </Button>
  </div>
  <div class="container">
    <Button variant="primary" href="https://www.google.com">
      Primary Link
    </Button>
    <Button variant="secondary" href="https://www.google.com">
      Secondary Link
    </Button>
    <Button variant="tertiary" href="https://www.google.com">
      Tertiary Link
    </Button>
    <Button variant="destructive" href="https://www.google.com">
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

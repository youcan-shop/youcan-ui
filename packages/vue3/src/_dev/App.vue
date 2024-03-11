<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Badge } from '~/components';
import type { BadgeState } from '~/types';
const badgeLabel = 'Badge';
const labelStates: BadgeState[] = ['danger', 'info', 'neutral', 'success', 'warning'];
</script>

<template>
  <div class="container">
    <Badge v-for="state in labelStates" :key="state" :state="state" :size="24">
      {{ badgeLabel }}
    </Badge>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 40vh;
  margin: 10%;
}
</style>

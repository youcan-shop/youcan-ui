<script setup lang="ts">
import Day from './Internal/Day.vue';
</script>

<template>
  <div>
    <Day :date="new Date()" edge="middle" :is-selected="true" :is-today="false" :disabled="false"
      :in-current-month="true" />
  </div>
</template>

<style scoped>

</style>

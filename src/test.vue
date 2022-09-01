<script setup lang="ts">
defineProps<{
  name: String
}>();
</script>

<template>
  <div>
    <span>Hello: {{ name }}</span>
  </div>
</template>

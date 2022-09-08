<script setup lang="ts">
import YButton from './YButton.vue';
</script>

<template>
  <Story>
    <YButton icon-position="right">
      <span>Button</span>
      <template #icon>
        <i i-tabler-apple />
      </template>
    </YButton>
  </Story>
</template>

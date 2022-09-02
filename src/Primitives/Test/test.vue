<script setup lang="ts">
import testStyles from './test.styles';

defineProps<{
  name: String
}>();
</script>

<template>
  <div>
    <span :class="testStyles">Hello: {{ name }}</span>
  </div>
</template>

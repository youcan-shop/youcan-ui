<script setup lang="ts">
import { ref } from 'vue-demi';
import testStyles from './test.styles';

defineProps<{
  name: String
}>();

const count = ref(0);
</script>

<template>
  <div>
    <span :class="testStyles">Hello: {{ name }}</span>
    <span>{{ count }}</span>
  </div>
</template>

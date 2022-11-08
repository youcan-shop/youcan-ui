<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';
const firstValue = ref('hello v1');
</script>

<template>
  <Story>
    <Variant title="Default">
      <Input v-model="firstValue" placeholder="text" />
      <span>Value: {{ firstValue }}</span>
    </Variant>
  </Story>
</template>

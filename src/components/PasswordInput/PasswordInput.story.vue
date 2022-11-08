<script setup lang="ts">
import { ref } from 'vue';
import PasswordInput from '~/components/PasswordInput/PasswordInput.vue';

const firstValue = ref('hello v1');
const secondValue = ref('hello v2');
</script>

<template>
  <Story>
    <Variant title="Default">
      <PasswordInput v-model="firstValue" placeholder="password" />
      <span>Value: {{ firstValue }}</span>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PasswordInput from '~/components/PasswordInput/PasswordInput.vue';

const firstValue = ref('');
const secondValue = ref('hello v2');
</script>

<template>
  <Story>
    <Variant title="Default">
      <PasswordInput v-model="firstValue" placeholder="password" />
      <span>Value: {{ firstValue }}</span>
    </Variant>
    <Variant title="Password shown">
      <PasswordInput v-model="secondValue" placeholder="password" :password-hidden="false" />
      <span>Value: {{ secondValue }}</span>
    </Variant>
  </Story>
</template>

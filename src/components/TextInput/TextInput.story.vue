<script setup lang="ts">
import { ref } from 'vue';
import TextInput from '~/components/TextInput/TextInput.vue';

const firstValue = ref('hello v1');
</script>

<template>
  <Story>
    <Variant title="Default">
      <TextInput v-model="firstValue" placeholder="text" />
      <span>Value: {{ firstValue }}</span>
    </Variant>
  </Story>
</template>

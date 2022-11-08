<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';

const firstValue = ref('hello v1');
const secondValue = ref('hello v2');
</script>

<template>
  <Story>
    <Variant title="Default">
      <Input v-model="firstValue" type="text" placeholder="Placeholder" />
      <span>Value: {{ firstValue }}</span>
    </Variant>
    <Variant title="TEXT INPUT">
      <Input v-model="secondValue" type="text" placeholder="Full name" />
      <span>Value: {{ secondValue }}</span>
    </variant>
  </Story>
</template>

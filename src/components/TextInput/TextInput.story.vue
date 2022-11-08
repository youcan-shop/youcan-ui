<script setup   lang="ts">
import { ref } from 'vue';
import TextInput from '~/components/TextInput/TextInput.vue';

const inputValue = ref('hello');
</script>

<template>
  <Story>
    <Variant title="Default">
      <TextInput v-model="inputValue" placeholder="Placeholder" />
      <span>Value: {{ inputValue }}</span>
    </Variant>
  </Story>
</template>

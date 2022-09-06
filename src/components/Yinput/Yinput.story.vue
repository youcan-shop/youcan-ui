<script setup lang="ts">
import { reactive } from 'vue';
import YInput from './YInput.vue';

const state = reactive({
  disabled: false,
  content: 'Hello world',
});
</script>

<template>
  <Story>
    <Variant title="Default">
      <YInput />
    </Variant>
    <Variant title="Common">
      <YInput input-type="text" label="Label" />
    </Variant>
    <Variant title="Full">
      <YInput input-type="text" :has-help="true" hint="Subtle input hint" placeholder="Placeholder text" label="Label" input-icon="i-tabler-home" />
    </Variant>
    <Variant title="Full-Error">
      <YInput input-type="text" :has-help="true" hint="Subtle input hint" placeholder="Placeholder text" :is-error="true" label="Label" input-icon="i-tabler-home" />
    </Variant>
  </Story>
</template>

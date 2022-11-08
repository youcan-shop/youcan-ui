<script setup lang="ts">
import Input from '~/components/Input/Input.vue';
</script>

<template>
  <Story>
    <Variant title="Default">
      <Input />
    </Variant>
    <Variant title="TEXT INPUT">
      <Input type="text" placeholder="Full name" />
    </Variant>
  </Story>
</template>

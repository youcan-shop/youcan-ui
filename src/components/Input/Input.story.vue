<script setup lang="ts">
import Input from '~/components/Input/Input.vue';
</script>

<template>
  <Story>
    <Variant title="Default">
      <Input />
    </Variant>
    <Variant title="TEXT INPUT">
      <Input input-type="text" placeholder="Full name" />
    </Variant>
    <Variant title="EMAIL INPUT">
      <Input input-type="email" placeholder="email" />
    </Variant>
    <Variant title="Adress, Zip code, City">
      <Input input-type="text" placeholder="Adress, Zip code, City" />
    </Variant>
  </Story>
</template>

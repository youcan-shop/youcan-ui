<script setup lang="ts">
import YInput from '~/components/YInput/YInput.vue';
</script>

<template>
  <Story>
    <Variant title="Default">
      <YInput />
    </Variant>
    <Variant title="TEXT INPUT">
      <YInput input-type="text" placeholder="Full name" />
    </Variant>
    <Variant title="EMAIL INPUT">
      <YInput input-type="email" placeholder="email" />
    </Variant>
    <Variant title="Adress, Zip code, City">
      <YInput input-type="text" placeholder="Adress, Zip code, City" />
    </Variant>
  </Story>
</template>

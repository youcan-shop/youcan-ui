<script setup lang="ts">
import Loading from './Loading.vue';
// add the Loading component to the story
</script>

<template>
  <Story>
    <Variant title="Default">
      <Loading />
    </Variant>

    <Variant title="With duration">
      <Loading :duration="5000" />
    </Variant>
  </Story>
</template>

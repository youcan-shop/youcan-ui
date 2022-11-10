<script setup lang="ts">
import Loading from './Loading.vue';

function finish() {
  alert('done');
}
</script>

<template>
  <Story>
    <Variant title="Default">
      <Loading @complete="finish" />
    </Variant>

    <Variant title="With duration">
      <Loading :duration="5000" @complete="finish" />
    </Variant>
  </Story>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Test from './test.vue';
export default defineComponent({
  name: 'App',
  components: {
    Test,
  },
});
</script>

<template>
  <Test name="YouCan" />
</template>

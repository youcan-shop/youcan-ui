<script lang="ts">
import { defineComponent } from 'vue';
import { TestThing } from 'youcan-ui'
export default defineComponent({
  name: 'App',
  components: {
    TestThing,
  },
});
</script>

<template>
  <TestThing name="YouCan" />
</template>

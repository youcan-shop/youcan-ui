<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Accordion, AccordionItem } from '~/components';

const show = ref(true);
const current = ref(-1);

function toggle(index: number) {
  if (index === current.value) {
    current.value = -1;

    return;
  }

  current.value = index;
}
</script>

<template>
  <div class="container">
    <Accordion>
      <AccordionItem
        v-for="index in 5"
        :key="index"
        :show="index === current"
        :label="`Accordion row ${index}`"
        :disabled="index === 3"
        @toggle="toggle(index)"
      >
        Placeholder for accordion text.
      </AccordionItem>
    </Accordion>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 60px auto;
  gap: 80px;
  row-gap: 40px;
}
</style>

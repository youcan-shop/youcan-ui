<script setup lang="ts">
import { ref } from 'vue';
import YButton from '~/components/YButton/YButton.vue';

// defineProps<{}>();

const selectedOption = ref(null);
</script>

<template>
  <div>
    <YButton icon-position="right">
      Please select an option
      <template #icon>
        <i i-tabler-selector />
      </template>
    </YButton>
  </div>
</template>

<style scoped></style>
